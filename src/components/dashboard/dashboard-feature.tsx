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
    "36YDwWtPpwSvCfDcStDEkCbyYGgSrLj7GEMcLSu9K7QSYEQ8CkdttZRZ6BqwmS87Wkg41KeYypiHzU5q1AAST5Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBL165Smg6TbdQVfTDZSTqLtf48QfYH7SxHZjzN9jeAqy2ZaWQk8EoDfbrSq8Lm3bPBZjsa3NHHWiJMu6oPW2ob",
  "key1": "4eK1vKHWkjJFEUHnoamMmxSCYK9SG63AUQwBzrybGozufLXYPfP6TjS6vP9CaHf9YB5YJoFG5Z4xGXVLEB5ruSS2",
  "key2": "3GUPHXN8DgaAJWkmVrUvq6JpRaXNGnVvK51vCncKEVhUtbFgBuKZToiMTayTbaL1SxPFZ397xnMryGkUcz6EN4CC",
  "key3": "3TDLexuPPPpoCJTEnvoFS2DzRB28dWRYv1sqUWRx3mP64gU7kjDoXMLvYVvp7s4RY627ajSaXYpyzSqQqCfaQPan",
  "key4": "3o5TcYSbQgcViWQpAfJjLuByZxGX4jt8qagkPYFGG9Je77qy1PpQyYCyAe58n4htTjjDsGLJXSGoExS4zTaYS2zT",
  "key5": "2JbdqJ89crdeuR8AxqEPg94zgGXKXX9rEMbuDWH5HYReofmkc3A98Re5Wx3NgDB6uBn7iU2wZJAR841SZC41qcNp",
  "key6": "5ejLjMbGJ324AwiUhrHZcy46CNPR398V83Rs6P7VazSpEhvG3gzoeQjatyqKtdg285amJWvDgMi3u84Vr96QBvvo",
  "key7": "3FBifLBVsUTRhQjVYbbqfDvgCDBZgWAawReBVpVkxxtHN55onMLvbktgvz8hMckcVDVnnjeJHzT8GgvKfowW31LC",
  "key8": "48a2gCZbxs16hfUWMdPiys2vsSJSyof18fHwpa8hNTqkuPdfyANnvyM41Gap1wzrAD411mK67vTe8z9kQG9zSWCM",
  "key9": "m19VQrqxrbY5sVcV3hqq51kfK3QYJvdo2gXkESAVAYVbKx43pWt7BC9anLM1ye9JBBaPE5YDkvC7s7igvuzto92",
  "key10": "DxtcvLGoL9aCo4D3eB4nzMyW68jT2MzGnQymDNAqs3QpwE2NP91AThr1w5mVCSatzHVyYak9pxCV4TgELbD9dDo",
  "key11": "3AvPdY9HvoTDcW9WnPfzo4umXXosp7f9yjVeV7k1AazYCityrN7EU4HTva79BtKZpiS6aM2VapUSQfZ23xBzGNEY",
  "key12": "5K8GKcFnyLpPFLkjmwBPbefsq3tZNBW1S35KBMKbZoJYCAhZHetSnT473zRBMPKWijjfuxFW4WbSXmT64TszDK79",
  "key13": "8Arj6Kje3MzijUA1GmMmj5jpzuXxj5vb5ZbbTYfAiAqFVzDjaQL8WvEu35S6eUA2YLfo4cYJfr2nUtvwL16LQWc",
  "key14": "2xuZkfWMa1PgojCha8EcqhJWBHYaV55XA9nuYcsjubxMy6SPSduKpkaoB4Pu3R6yGghYucNokVmuMxUBPVV3dAaQ",
  "key15": "52oRmCeQEvvWdJomFBD7A56LMLUujuS5ShDSfHXYFSgy6TJZikoPfpxbqNKp5XQEytkrQhDFtAawW6X9Au2xYiAZ",
  "key16": "4cjCEoFo2Wm98NxpEFd5sqr9rdK7SXJDLjygzm5Lase5kB9vyCb14LwVmP2tRq9nPweUr2688YypjAdoGbYtvRde",
  "key17": "5mY2foJh444mvRNMRUtckZum1fmq9VC9orj2ecX8MgWqT29KHCW5KHYBE1Nay9D4X7sv9DwxTJihToTC7h3MBptU",
  "key18": "4tynnT8K94RLZBensynLrozjPeNYsABxoa1pGZ44cvdzoMpMESfqvu9GnkL7c9htGupWWF1XDSD8beeMSDMGjyUG",
  "key19": "3yL1JU43tN15QBUDiGVqMAvU9KnyZ8g9X8seUGWBtXTg2EA1ppq2yCEDmGxV9nMcydGNeC9kbU6mnHdGf79bVnov",
  "key20": "549nxfmApe2RWBKLquWKaR6ceDaW2fc6i7WPqJZFLzSeKw5Fr6PhnL38GiTq165nZMP7bftri3YZ7wdGmKLcjTmV",
  "key21": "4i5Yx5VWni46KKaw9yf2kygzcmLLyBugntLMyfeLe2eR8PvXYdFGE4qHX5zuMWY3DjNE75HPHGngiwRXcbWZ1BnV",
  "key22": "5mM2anNEdacPMHCd7uGsv2ecS3jP3jGBrnMZiaNgr7B4bW5bWeTe1VyifE3ihWF5XNeDYFtQe6zLgN4q8jtDi8Ug",
  "key23": "5QkA7nrh7Zti6uvaMMGa5qDkUv9hefheFF8ybFH16ELuzQVnwdhJiBRiAd5Hmct8ZCdB7Lc4AC12yniLNx1KxyWH",
  "key24": "anTXH5KTeSQNeeh3KoWYpnqoQxcU5eF99TaXfvpWzEaWm3WR6VFXsqty3MF8cDzgGtiLWjGf4KjAECCvyzW4tHi",
  "key25": "2QLr3jjj5t2ug751PR91euKnpnkeFYh2DZnNYGKUqBNQ5TqUS4b1Tq1F9qnNXq1covvdrVs33L57KfqixMazdgbw",
  "key26": "3oeZFa2TKzzegwg1bFR44spZaoa8q4KUdJzSb3e7i1h1fwmDJA131E9bg76EzAsxR1w5LLzGoM3485noh843UjBa",
  "key27": "47D5u2vDUeARcY672bJfkBnKZhB8nADw9JWd4B4eipHqCk1uMHYyeaAPD6w48FrYFqBx1ZHP9gk283RANcFgArvx",
  "key28": "4bw4RShuGGr5AYDFkRSB8n8FgmFPUXyaSDnJqcY6baSeNP4uoyPXzsEDdJrKocsCe3yW9ppSn5tdSsez4kXanM3Y",
  "key29": "2Fy56ZazNEWRVpPbQajMRv8h5m53FBAa7oetEpyAkt6YXh5NQYVJTJTu2sdefi2Qhbex4NPjuQiSnuGUTHXbt5g1",
  "key30": "2Bz9a4Cbb5PqYKbRExZgrkxiNybETSeqGm7w4T1t1JsG6pxZtSLc3edf7rWjJj44FssvAajPNTiVB82C35bzeNDk",
  "key31": "4whnLXjXKXwSkYCJqvAExZpAZkNgRnrWautZrYv89UC6d5U9oUw3CZdcqVxy3XnMQuqh5G4UsCVpt9RdoewEZbhe"
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
