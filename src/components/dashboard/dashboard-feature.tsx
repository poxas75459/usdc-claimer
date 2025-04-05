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
    "JULG4U83U8DxX8rJva6RuGsXMfJMFMxNEV663AezytJxEDsUjLMepcqgMPPsBEBPSs1AV53L6JbRMCv9qEBjcJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSVSoAxsLzLjvj1ezZiLDFWoYGjXgtCnfVAwjPfUwZvLaqKRdSJh1Bq5KuGZ6e2MLPPCx3XSMWHSiBhfFC2bzBR",
  "key1": "38DKNszhKGhdZYfg9L1o1cuUFq5nWhjTGBXEKkZg1m6sTTjRQXdGxbYRVpV6QDaPUoNFKiroEGcNZGAfQ8Pqzk2v",
  "key2": "5h7Q53tggS3QWYZ7WHgo5o5Cuf5mRfg4o4Pb9tjcbx93j5og1mkrESV4xDMX6AJCzAS4PATsAMZM9opjxQ3Sk89L",
  "key3": "27bhPBFiz5BuPieeCijVKpPaip9FyPv4mQTZaiaYc3hDVBHTRAVZNKS168grSgZUZ1FwMTAhaALrP3fcxhcL3nXK",
  "key4": "5ex4zVMrCAjDQ8XniEjGXZr3A4zLWBah6RYKtpqxHcpk8B1hN9LcaXJiwES8fHVzo3spqaERFweFTv9pLJU6o1gE",
  "key5": "o6sR7ML8vXsB6kSaTcMthhYH72moBCuDD3PjFW4EDoDELPcSHnQeSSyN6gF9X113nM1VzHZRJ5LddsNdDH9bqif",
  "key6": "rhts3Unc3cYAtH87uQkYfJSfZohj8pc5ddLfqDvTH3sEiUNeCweBNGRZTKLjLDpsyJ6nok6fcHPC8YT55o3y9tx",
  "key7": "EbBsCXxuSbSCNrp3Xo695PpS8C8c3AXGBDVJokfswL7rpbUvQMEKyPN4KfjcMS5gEKfaWPbtPAACJ2evyv8mzpc",
  "key8": "23q9CxzxD5AZ6waQqyG6yyrchNuyw3o6UZ5fsUh8gYMs67qrydJ2hQe5A1qbUbqyN5kCJqp66puNGGDcTKmmfmUG",
  "key9": "5PY66NuQaftnKPzWgecfggynpY3xbyUKMYUFaLadyudSRvqgBEfnP8JjtGXkwVBbEnotvFou4vSYXd5cRaLGVqQN",
  "key10": "3K6FF9jngeuCCzghNEi9VgVydy4vMnyDLDuEHYjJzTTv19fSjUr7yZEhuqzxuMmDoeFQJPR5VFWz4z3EPiHBmsT3",
  "key11": "3pq692QKJweqguVBambtWWyhMXHD72RwbJr7n2S1U6Vne5H5vvsoZXwGNxEGSaDy6KxXQGUHPijVKJh4LsnbCC66",
  "key12": "4Z5Rw1ZYfaidecYA6tS71BX9CXQcLsqoFphFsff8XSfojYdPZGHQLDY1TLV4ENL166Y6BAvi7YjadFbFUkUWJ4S2",
  "key13": "4jasPdFyia1JRWzfRtTEjiZon6fYsECJm1bFV1tp1xnr3c7C2ddb5RpqvyHPzJtib9xpJhAJvCgLMn3kbnQ8Ruhq",
  "key14": "5mNr7RAbvJDFbZCj6wjVCUfpPCxTh5oQrvQ9Ri1SNXLLgzekJsRDsoeNUDeeL5VNjjUptN5XxCqAoKNQWqcbwSzL",
  "key15": "4MAGE52rZ6xVUpz5tHYpZkgkBTc4pJGhrj8Z4RwxyF83xT2T8MyRywgFqWNduQjUh5uBkyTZ7tueT4GnKdGPgym",
  "key16": "3e9R85GUoDfzoNzHMYoZSzVkHWox8XygY42wuup9sh9DTGi7gfP8gDve7UdwsHyxGBsiGzHnNhSEKknumxQHoSrm",
  "key17": "52HRtUudqBpbirV24bSkNp35Yxh2xChdm1Ya4S648ZbLNuGHRRWMARQqkMWSNmZQhDw3GLPPZqo8DK9H3dWLyqCm",
  "key18": "5wVUHbmdULBKDzWcBFQVK3iLJ8Jp8sptimPoXkMeLpwhF8fZhqUqxVaoTzCVcga8u1F7GDdxUWLC1RHRFM62kD73",
  "key19": "vZDGpVhxmkwo9fgopFCEQzz3kEsjM4hPLyexzfhkag1g6Yd2zWTyL1Xz9hHPrZxQnYqDues7dx1P3fe2Gz4A4if",
  "key20": "21j3L4oi3kUwY5Ui622PsU8cVzyGohPySTybf6DbYHDkSg5xoXeQ7Qx1sLmBYcEjKJ5ymDSx5KA57uTd5j91T6gC",
  "key21": "2LgjCtJYkm6y2aANs7gNzxnYcPDtQ8zaAcfrz1pz3dsNxcCjQBWFjZUXLM6Gfeo43UiixZq1NdAZgAmpxn4XXeWG",
  "key22": "Vd2EXJxzwX8dWnFUPZZkAHhR61vnxKoUP9jyWy4bb5eMUgR9BH8oMS113inKiDdFCiqYC2Ua3A7t8fPzBB3P1AX",
  "key23": "3QSdG9SEwHvzQT8sxbgT2uqoue8uthq6eCGfQdxL3AY3U9YfVAB55ZusN6yQUGmWVpMGyjzXsCyTZsRA4ooKiFNC",
  "key24": "2dBWP2hsJNNnB7cuG1vAh5N8NNvNRyqyfntUDDxpkKFkj9YzTKT4aAWg6qFhhh52UNdtvyNv2ZjwipCBQAVEiodi",
  "key25": "3P1dLENm3ccLExgXf4MjdecVKCYKDa2rZy13V7MyibSdjE6Dc7jj9S2kpyxFuS25g4T1uLHwNCptPRFSRXDJUc4Z",
  "key26": "3aHrWphQ18QvftK6y6uMetuzACmxn3NBh64Z8sE3mRwWr4P8ZpALNSKyguvHdfp6g1e46khxQL8UjtCPhXZ1iGNL",
  "key27": "2AGvzFPFLvKL82JRMvoTWzw2coqxYhUogbjbtFvaB2RF8JLDfFLyZrTMsVFrFR5LuBW1ZMLGbnCLVs5Rw4K6wkzB",
  "key28": "5vMiht6yjYUcyGzTnTGzgmppMh7LokdStqKbqgdaG3jbwmCvtBftBrHeBfm8zUFmwaT6d32LjaSofDaoc3fPcJ4g",
  "key29": "5WQjF6tnhDFD4AMPySxJ7sgCRfCEVzQUUfJKpZDmfphYL5x3LnJydQMgr7152VbcjkHnrVtwkYj8bEFJnXWBxe8w",
  "key30": "zeTQS94HxLxRJ3pAUXGujCpabnTkSmi48vfHReTrVDM2pAyzg13QgEiKq7sQVw1s3EDA8phhdBy55tWsR791RaT",
  "key31": "hChL35rce2Yf3JtXf9k3nyjCsD6fF3uB5nNJtEdiri6VMTPL8NmEUwZaDiVtfQ7mNwbNiSqKPgKo4NzhHW1jsmF",
  "key32": "3Zvg8UrqXG2AwLpkZLBwBi8nBqU9Jm27KCpWjBcFMmm8SzVp1FueeHd1NkWByaFzceZYn4j4yLu4U8NbUJfpfDQL",
  "key33": "2vqkeH7bK171WHuf2thLTfrpoBWCHefUxXFkwMHR9aWG7iWzMBLVJGnPnaqmTm236sum92tC4XdgAiWjjn8DcEKF",
  "key34": "5bzxCoH2bGfpcBAAZ3hJkkxnzbYmsZVheech3YzzmewygJ8kNCi4kr2ko9c5837borJFcBesTUmbD6kwEgsT2gAx",
  "key35": "2vt8nJHFWBs14oNtXostqGcfpDciPrkXmRFmrb4yivv3wohko3H3YTZaa5dix3VduZfPCRBrXD2FMr88HieYrBcm",
  "key36": "4AZpaNiDtDSmCsVsN5jEiydgmcUwiKCwFXnzLxQPtq43CFSBMkF8WNtDbTaKDZy8oHYoKzLXrcmWbUtFSnDr5JSH",
  "key37": "3s1se3eJEP131cXdM5yhbXuispD8Y4NFL41vSDnm2vVY25kYGvYnRXiLyEnTEA1akWEZSsuYsvBnCRpf1VoMd9dy"
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
