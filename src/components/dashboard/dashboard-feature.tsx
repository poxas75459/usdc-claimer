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
    "2sUPJCBrqVyvT13xqL7GwQq8m1RJkJaPVcKU2qiwGGK5j7T43rMenG8ozf2j1Lh4beBHD6t6ot7wpzv917VdzH6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rURkXHySCEMKBGkXxLPwCJ7Czq8un1exDVejAZJDZVUaoo1pv48VakxvPrjguoMxXgzVDXygT6Yn8Y4FykxQ2id",
  "key1": "4j1VrG2gnByWgBsot2PeeUGiumT1zxWsm4sjmJz8foDxJD5sDsHv4cbaqQqqCxYDDLLtwps61YQNzcvSaTQ8AWxY",
  "key2": "3cBmi416uePkAWtcsD6cUEEHZqcGHaXGCzTGkPqQexQxorFyamS47J41Mn2sDi39eFKRN5DNTnPdYkgaYX96BDda",
  "key3": "4WJURkFHXhLTTyh4EvENBy3KCvbU87hs5fJznkjjSM1kRjUEpyrw8Q9PQ7c5T98ri6e54aRRXywM6VnnB43y7VMa",
  "key4": "5KFQ7Xa64bZsZZ3zwvJBRAoSjuKEQPPoToZonoa6iju1LTU42aexYB3dC6eyCz5i1W4NbeAs9ufLhHyWQ2GdPy2v",
  "key5": "4rUTdeWo3JCuEBpjuTRntqqoVkY4PpsnNYwy28ydYZbyj3wmeMkAPsfCNfeat2nxerqjc9gq8mdtiHLnZx9zTVEd",
  "key6": "2k7E3KQvscCPVJdNVo1AkKEu9vVKPVNTY8AZbPJ88BgkMRB3SSepK5CJNjWWbQLEYgcrCMe28aGU8zQtxiP68suk",
  "key7": "5VexQzWb1DWKV636r1mxcSLBVvXVip9yE2bF1C7JbQkVtuwHhZXDUeyzz5Rv4Qy26Gy89VEjWKVnxo49nvHe7xEe",
  "key8": "2AB7h91c63VsMDBuXaZkrDxWpXn5EkB7LmBStdp8CyRUeNSKuKcCUnk6wL97mJpoqAppnQQzzgftTtkCWCFgtmvx",
  "key9": "3AfouyoU9VDgwkPKYdW3uCK4EnThrbpaDHYwQFDFkXxEFv5x2yrhEMYQe2jxUbk7UkYa5qy8LDGFzECdxp3YEVX8",
  "key10": "519gxFhwn8bCjuhbFAnkdEE4Z5PuTGN3xSXjznqik43XaCo3Sn7XUpqzPkMSWzHmJz3kiFzWeXuf3nJ4BUWMLqjx",
  "key11": "3yrDPpHLyaQaqipxH96YQwBTt2si8KLGWtu7vbWHwfQ5FNzUPeDHfrZ4SA2jTTDeGEi4ZNC4dyWYv4cXXVrQ1sb5",
  "key12": "3GM77YxsjrnJvShYPhryiqD87pXUKcN9eRrvGgG3c4EQX2k6AV4r9FAj617W3JQ84qANabhwze6KvD9ZAGLUDkto",
  "key13": "5qEvqL5W8nJmxw4mzy2iitgcrewosrpMPn7mRae4CrrVRqWzm5fgZvuQPxVdrgJAKGqvdNpxEEBC4ULcKFBJ42uQ",
  "key14": "3Dk1G9zd47oktbeVuhuE5foR6vcP3NFpvkHkjYuqaWAzKDsU83pDmmEh2dpziKrgkurPyZZwK5fT6etagC6Xptqa",
  "key15": "4V2EWA4E5Cknh7KCEjL6yf9KvhoHLpoyyUsUunJSVQSTUCJEaBtF8NDj2X7T5eg86Ex5uVkNVJh9CVxUqazE8Vmp",
  "key16": "2Es8Gb5a9jZ24VKBWreF2fJxS4ahFhtP1MEUP9vsnGf3xf976oNLe2SSxqjVvVSxovZgR4ZURrC3hmfYaDkDwKNJ",
  "key17": "XJgGx2cAo1etbuseFCeqN1M8tYhzbK4kxpptRMq99WM2NyZXCcyhPhaWeBboDfLJqfxp79AcxB2RPRd1RiM3kRu",
  "key18": "2SPr8tiVF7cU8utv7wx2qMtVs4u1pdwXLAFW6c8TLCFL2gfgxp7GVYr23khL5vZVokeXgh7XLbYMyyQ2yULD7AyY",
  "key19": "3Kmxn3EJRxMNMGfJAYiDgYFybNEUZkKf7fU7f984gCPbg8W4pecM8aQWqN3yghbYf3xBYGQ1WpNibXenZRUzfJeG",
  "key20": "37mdXGAupXrVsdVKsud4r3mkAm6LSJANMhayaBow6ZprSXT2iUJouaBMHrXuHY3n1sWtqzEjvMWWarD1gZc5rY5Y",
  "key21": "2rDhK4APGmmDYt8F4khw82rcBhtrYVdCvCbMvQXp4Xw2oCz7CRRVPRZtHp1XhKWLtB9CGUWCPAYS6VWhEswoJTVv",
  "key22": "433TYV347kC362d8rw9gY7qKBfxNQGAabxuWMafGnRRgbxb1bdeqswkF4wTFbw3d82xAseYKPQCuMeW8vquaThUt",
  "key23": "zpdVMofKpyNGFSxExGazZXdxh32wxYKxmVKumJZG9AuvE6siZUkXub83QVAR1ySNYuY3GF37De9UwdSKoFMuCVW",
  "key24": "3pre5LU5e2AvbRoTY9dtizruRWGThVoFEHH7yBXZhjHZzP5bin77n19CBjYptFqTUEWxYCZfFYnZpEuc3ZC8waKN",
  "key25": "5jkbMN2RUgpB132GnQCrjJhjk7JcqKUevxdU3XB5dKxBSxkUcyMiqUMPeAcRsGnPtboQEhanaxj19nzmrGUHcsC6",
  "key26": "3ozy35Uh4BjzTAhTY3JNciKDYhcDYPAcGzWQym8FfeEiBhCXGDYjfKLW86kQDtXyxBFMB8fvU8AEGyD4b4xYhw4u",
  "key27": "4C8W487qiEcD5W2xtHtWeGmZXCVwVQym2Pdp3EuNBRvozgLyvFzsmo7JXMwgXxXHwcGbHkRrb5G6THqPPVz74P8",
  "key28": "3jaGxdyNtbfhxqNu5XSt7cLijLJpUhQfCWJd6hJe3njf9jH4VPToogs7JRZgnMb9Ny19ZnbHmmYQ2FtVhtd3tgaQ",
  "key29": "3MwRnJ7GBg7k2vk1LrNXCPH33cwegEpDngcwdUy8RcbZLeUdpi3KqNNkLX76mmnnXFYL5FFq1eJU2WeYMpneksP5",
  "key30": "NEgtDUjC82vYodDfQyK3ARhhKVsJ7E7Mq7r4dJwvCJpTeEiosp9qVHL3bViRTaB3NkmWnSmTsuLq9zZzcEzRrrv",
  "key31": "2GxH78cCZMD25qLFxfnBbL9LQ3Yg81SnQv3ZWju1DKJ1YAVgz4SSea4rUJtnrx1o17iozaHFSR322aKMK6iWEQ8J",
  "key32": "4ZHHqQa9MRvF6keFjCY8yDJCBnkMG5Z7V2S5P3wPsi2s6B9qhmmvR86N9HxYL7ajKr7HsTypkAG3t8UhE7kTFNiH",
  "key33": "27RAkJ9nCNdGKzn4n5JNYjxNcuJdjUmvx2v1pL1Tkji4dEQC61sGnVHtENGRP2Xta6EmEKvdha8a5fjNV4z2tBoL",
  "key34": "4z5c5gSog9wdvCaRrhxGAnoayLh4Tn3vydC9WYuoF9fP67cr5Sk44Q21oDUC28nuMEVC69QzZRBymLMXaSzTXdjB",
  "key35": "3uuHei6LVB4Am7WHpiV6K2qeFa5bmJ6WMCLYQYcaJD1SHpPXDqAwLrdgRBH4ypBaw8dYiG3edYio7zPT6ttt82YP"
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
