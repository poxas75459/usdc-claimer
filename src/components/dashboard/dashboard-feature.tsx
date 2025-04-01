/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "29CLKjizWn5BPvzTUyAfy1oQN4oH2qFpj9FzDdhzPiwZLPM4qnfmTUBgZrpCRPJvwvEzDouuZzrgurdyeUjAhyu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGg8dVuabNLfLh2U5NR3z3LUxNfRsKV9bXhwiehiZT5XdeyNPXeKhNHrpK9VBhwkCP4w1DZgHuQHjtZEKXQ82eK",
  "key1": "4AKYYag1o7noZLJQaHG6wUJN6nGAGpCmKnCqir6J425d2DKegGHbnPMNYC5oToDNX9qFJB1UBMUPh5eWhnQXPp7n",
  "key2": "2Zvv1Yeq8WXZwqa9ez7zi8QMZqR381EoMvKqiMcHtY1wXu2obBNR5w3w4xh8pUYKP8UPSvaJkB4GuCe2NY4WvRX4",
  "key3": "5dCX9MfbDQDLjaBAjgy3gLguDyQ1JktLtVG8DerincnTvwBHbuAk3LVLZ4NsnY3zc7JgssgT8cnCZWawtsVoZ4nT",
  "key4": "297LC2SjLrqhGbAWNtYkynuVA5VML6dsDLZRnqBCVas25n9hdDjEVxjqAU1wmw7pvThPV1wRGrYZ2ke9TckopoQx",
  "key5": "47yHgVUzdtfFcvi8T4uhQLZmxgtgzt22Esv9Mw1mJcviDu5K2NZgFmdTstWS5wr3Bcd87xjjiGe3XosjHBoXehB4",
  "key6": "5sL6FgGXzDiLxz1HgWhRehMitDThYbcSVFVwBspPb8KffFUzhgYBn2WSW8qDo9Fhosyooks3YmKzuxqpNgu9GDgb",
  "key7": "3Wm5xNg2YZSVcEWX8XPbpdZdNDbMJxthCTgQr3Uq3Rf5MzKjedvd9r9wBiZWTqonq3FVHSSs6W94QmHTzXFrX3ba",
  "key8": "4ocE2AW4tspG3ZSbErTar7CUPpJaUvJNrSG2bX69WGpVHFJhs3LgqCQhAtU8xDTvS4m8Rf2ft93HkWYkfrk8L5jj",
  "key9": "3AjfaozL7DtsUcTY2gGKXpbJ9SuH9vnayhx5ChE8vrp5X5mdD9YHZ5c6e84GQ9pd6Ygay95bXaMfSqBzsGBGkSdk",
  "key10": "39ypM8WzgwW2njaVjaZM7CxYCB3aYXvpxoCAsSZTbZ8JZpCNhSe5rQGW6yQ3gpPVNHwpEU3r33rq3bzwanBMztmG",
  "key11": "3HATpoDAFLj9TDAd3FoUsBU4mS23aqLseU88ahY7w31VRM5ynFJsiRG7wMc1AMSWqBBzHNXkUKat4Jp1rycFxNEo",
  "key12": "31qb7T1tX1Wmt6KMKFerRvH8aX26eNseHQg2N8NEXfDauAwKN4V4DSHrDT2RSHNzwYyqSwCRAD5DwGXMSK9EYXnN",
  "key13": "2vkC6SA8habuHu92gJNf5uxgLkebZyv2Hp4Y3guKWzbH4W2dtUQjaMcR8mRVhDktmafVaCNyAJpeVNPQ7481nk64",
  "key14": "5jvwp4MqKbRkv5q19tPAS7MZkmpwZeiFdgXJJAFdNTEb3NRVrHKuQJ3hNoCP8E4jVaeVynLV6XvKg8Vf66DXzdiU",
  "key15": "2i48nQTzFnP1LMTUjpbZGuCvTFRWS5ynH3F4kAGfCJQANRLhp3yk6BAqJfbFCyPF91nwk9rn4bpLSZ7UHKM1vy6n",
  "key16": "3JdBqTMEQy74JhsZXsoH3EJBHDEFykkTzkBoiTzbH2XhD4eeoDuj3p117vUtqP5EKi6mNFLodFzDf8VMigh4h1DF",
  "key17": "4Btp2jEgEcxBJcxqVuAYWmirPrTA2SzWBoGvgvJQjLXHcSotRFeVFXdSP92HRvrN8Y1YsG35EpUzZ1wLjmNg87cy",
  "key18": "Fv3P9nR7reQNVDgWB55sHnoXqEZs7bybceJwhdFDMhEdjzE7frexSR5wQt4RigUB4VppgbeKsbyZ4Sx44X5pYH1",
  "key19": "PkgLL22DtyjUAYDND7pGPFJxP29aD8UVz1fUgE4cXj4KUc1DUora1H4kRjNrn1P7Z7S9TDJSDj3YJgs8vBs34n8",
  "key20": "5pMgVn18q9vWSVeBfMN4JzkZdYSFqKATiiV8kbDGLjRJZFhwP9ZNcoNNzkgKGWJQUDRVjkjm84Yef7sbe8WokGeM",
  "key21": "33CTYSXqKjhghgpHLcw757KdD8T5tsVjVer1wCF5ey2Awfurhik3Exjov7ytfRMFrnyHrdHgEcm6Kh4CzzuzWRsz",
  "key22": "32C8zqrwSubsteUP36TQAWs3oocWFfuNx5KaWrkgdBR3Ect4Jr54tvLZw5NnYvcNGuuXNpnXsgAwwKVZBd6G7odX",
  "key23": "5c58ESHTy1T7bdZuEmA1HAX9cQsNLHrqkgc9w4udXzcRCdpy2tuVPLHjjBrJjZnDbfyUX8x6ej4x8AvcbvNtDJE8",
  "key24": "bUG1GSaMet1KPfcCuXLeYrFD3xxeNqyUgMNMXb55QQtfH4rYdX2Gzx1o7RbwYYpPthUKtV1JrV9QK48j4emDLwK",
  "key25": "3ouRqTX7uqvd3AffmuPBpLN3G2zdty7ar4twMG4dYmpFfFKwXJFM44GmVky2PLZQrTirFobVHLGuDyFGGBQta2ow",
  "key26": "zjGQCg7kjwGq2NXXUPvNWhcNTRhnynWWgm656hY91f3FBg3JfHvnTuQX8qzMeN43qhyzWz1Pa66oFFA3Bks9VMb",
  "key27": "3LP3TLowBX17uDpfc989Ams5rJ7TCjhJCAbgZyArNKmwoM3Un2me6Jt8boypA3YqghTwy3Po42Kxnbm5BwYhS4rd",
  "key28": "3nifMzoZemnVV7nNjfQdVYCcgCd6BQMG9gcgeUnDz2aHSydUy7Zv2cgo5xiwLhEKjUAA1SHdciVsy4QvwfyCU4FU",
  "key29": "334aTS1UdPqd116Gv8FEDVQnCXeeoRmiRBMCgUbEzUn5GUc8wdc115mg64cJxWnqwFuaH3BjMMKPXiqDjw1T22kd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
