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
    "2FMEU7z6wrh1e6RhuJYKfGHxFaFAUdKjsA78GAbCFA46DiTfAmKvn1WRhXqPuL9HvkPFMrEYjdg6i9HPfk9WAUDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qiNpuugSJNftLMWnZi61fGKCW3n3Ge11xVE12bQEZbjvUFzKmdFcmprUrtAh76EMj9CQLUMmhYcHcLgpu6PYey6",
  "key1": "3qzHStgpv1mi8gXVeiVz15vHwKqCnDGa28E5RH7rm29n6DJM7Tf7NMeUEGerJ3aik98FQh9jKCFxTGvJ9wCzJAsz",
  "key2": "5HiuHCh53kpMM9HcVd3fQ7gwK52Yxd3PkbS9Rj3gL1wiKsQSUc17peFLNWNrZNKP8MZrKCXKCE8QdJinTHqg85h4",
  "key3": "3zWEzeMiZcrf2EQMg3oXygvEkEQJrDp5LyuAnV7a3x8rKLrrhvKaAGxrpFmxebzgJJoR4uEG2fNm5sFJPUM6QYF5",
  "key4": "5PMkvJ3WvNqiQCPgpYi6BiFxq7kom6KiRQdX3yBrESxtqruYK81T6n6CYvFsT8CGGAJxeSNCZBwtuG81BLAeouAf",
  "key5": "47x4qAe5B4BBPwaP9wrL8rtjcMxvPfEBeWoAfgzzKa6P25mpUpRrx8Qg1vyHwkeqTcrYspVvBNyLRndbZ4dvQiH1",
  "key6": "3GRzCLhn9wds5PvogFkS5LX8uoq1afrKi1Th8eDFAEwFU1niGurrweBV15aNowTGUWPxPxb1gZacMiXqunxsFmUC",
  "key7": "3oQdJC7zggitXhgXCPQzPWuSwv3MiwcKJ4VM8DRa1tty445Kx8Fi3jLpKDW4VyG9PHzo4FzvLZaCPqJpvFsMJvUR",
  "key8": "4sWBpmBcC43xosT15t5nur7FJGFemwXsYPoJCp3Xgam5Kn11sm2KZtYjUvjeiWHfuFYo1WKJjvVM8tLsdfQiMdQV",
  "key9": "61u42Nx6hFaZzzsFDDGhSQg3KRx8s8fTVGDFoAUNbNHth5UMCtQRBYdYZuQYrMsshbRQPXk7LMarG4uAGow2TTuy",
  "key10": "5adoKuEPUxY1VV4pcGUBYCwBNE5xnsrrb5RK2tuA5TW6gFMujHgcS7aHXyiDRNWvBP5NcCauSdL56FR9zzJMjfn5",
  "key11": "3He9D6efMcvJAEj6AwEAQWDsMWm9msrgANhTkVM3BDotUfbYhAFBVzNFRykQXhW7wQAzjf1N5eegXsamzc2ycfrd",
  "key12": "d77pFzK3WmefBwA2ruAGmPzgAVM3DRdBReJZsVTEQ3rGMHuDpKnVvuk9NVH8VZYUJ5fZXrX2qaRt1zvBkjNopBN",
  "key13": "2uUr5W7Hx2eaqYm4NmxmZa65LgzTu3Pogg119wTCW9MvXmhufdcRQ4xme91M3eBzimWt4pkj6H5zSucafoBdx2LM",
  "key14": "Rox8KjJUmhBTiAodPzpCdX25q6SVZyYhvERQY3LXeb6ULM3wZxjxjCRZCdfDiV5A5VLhoaF9K9yyWHRVETsm9fw",
  "key15": "4ivgGd5B2VBaZc8rqCSVn2inD9uoSG1K4QK1uWCDnFTTZihgvG8PsgjX5fnx1XGBjWZAH7sFwcMYPDwW6J5szP43",
  "key16": "3QfdAwJ7kp1roQDVn4rL5gTSq2A1NJeY7bRxzoJ5K9y9RFU4fZnWge5n2uXqRyaC5f3eWHtjx8enFthau8nx8dDe",
  "key17": "3srSo7hMUe5fqB8DmyMGt3DBtpqu9csm3969B2mUFAtST8o6wDjBBNSNGmbk8vZiQX8fQvKWEcCbYaEgJAQTikmC",
  "key18": "3Vryosg415MyvYN4L52Q8J8hD3e2nGjM5bYPoUWLEzExzh6BCVzbVFPrESeVoKi4fiWVgkR3B351HpktzQsP5XBv",
  "key19": "4dZSsWt9PJwACo2pUXk2R8rz7Bm5PAQxE3rJo6xQJu1KZbJHkuFEvaNc4XS33UHpnsTYbKMKoVYsbgrbiciYjH8V",
  "key20": "2SVdg5RwrQMawjWbt98whbnqrABfqtT4hwLMx6WubifZZMAiHuLar2b9opCkXXaWWKyxz2S9dYcy6YNMKbzy2wG4",
  "key21": "4xjQkpTnHTADcH5ayBJ6afUyJ4We2SA12u5Tve1j9a3FEx53Z8nkbUP4AjVqvocZ3dsA4LLX7k1Dix8Gn3DFEXYJ",
  "key22": "2sWkH7zLKvaJogh5jVvLeYWRJwAzXhh4CknU7Fp6yo86NaGApQnXsRP8deLGozoofFMbiafGG2VNthuRW6rS6mmZ",
  "key23": "co3REY2uZDgkhYd6i9jdnR5AEopmz4CLHcLcxWs9jUWrvJ9Duww621se7gHjipTWf6Kd8dpY2M1G8NCKg3oEVP6",
  "key24": "VLGhqigMic1gvwKzXJATczv3PcTaAe7qFv6v56LSrMAEqq26fJmxmVp9XieKUcCS1J2fms3dfkpAgN4kjhVqe8a",
  "key25": "3WfsbQYPzSxsXWsudd32LGWjkUDUSfrxCwk9ZBNDgVLyAH8xCebo6FJcz5tMMHXkSvvurJbxedLaiDMqHb1GJTxv",
  "key26": "5etrBHh8Mqr6osiX2mgGNkdGBWUartyngvjw6s7YVyVB4zh4w38hjduWHUzwuQDs8BzhE5UeyzRACLLmF6QhKs1",
  "key27": "3VXC5H4BVwhBpWYEKZnn4EoPKDe5s3r6Bqdd4NfnHbTBs5DmjcJQKPxigqMZy8sHYJ3mi5cSiEMwqPPQRoFJspPA",
  "key28": "2t1bMEpGsUUS6AcEubwzkfaGyu9iHupq8bmWUKkHiY3a1n1Div5DzB7R37qWdC1QUmNsZkHQPio57irXt2KMwAT1",
  "key29": "3CAHQt714xA1HG127uPRFuUYy5vTG4sPsfaR8zV2uQtU44QBoTgQvJqcVkajPw94wX1SGok58xjAtM4XDFNbaKrc",
  "key30": "2YRDTVDiBV1YFRwzfcpr6xJv7ieoQu4vBm9za99ufCzi63EQt9ohNxTKigrQRWsDiaT272WP7gRFPgpuErDgq55k",
  "key31": "4ycNTuWh3vpX3QFgt7oTtgZXwgG14Qs9hhz7f5NbbQjPGxajsnHdpHQRnhf2m26NSc5Q2Sh7ncaRBzKn9hGkcPyH",
  "key32": "EupP4DPjc9kQCqzcUvQciAph57Vt9DygoQdaB4azsLVDzZ6b2kQjpuxrct34VUYrxpFJcoF224GiJuuvza5wJPv"
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
