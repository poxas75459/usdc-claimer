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
    "5tUKkoN2T1m3Wr8Pm3GK3PS65poBpq1tBJ9wX7YVHgbHe8jbL73Ae2XVpy8spWbt5DfgmaGksnj5AaWBH8JJndXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGEtsSRpQFXziPzmQ9owvBw1tXeNVWiZqKcrXtE6FjY2wFzNM1WPtrxXMJaByZnthUiU5cmZPJmzUKzMTL9MGHd",
  "key1": "2LNdBZ3T8X3Wq78kdzvuxQoFaBK4R1ZHDo4kEq5fvrdMepcu1Z7W86aMvmKg41xqw9RCeqkMQFQQqjks5ufWwoJ1",
  "key2": "EQP2BepM1abfMe3fxWxKhWG8hYSBi5RtXTVMKbnhf7Ex5Gg2KAMFHDcbHKMur1fx9DqCEq4SvtfN3mVfUNVh1aa",
  "key3": "2doDGY2DCy5yrVGY2oWWBRCjyALSYcfdHYuZfKwEHY5b9CK5NVWnJhZmarUM8TPSCqC6yoAudYe6FDQyuiEV1RJq",
  "key4": "4MHydf1xoaqdkNSPhkMfUbW4kNJTL5Vba3HXt8y18WCa2NpS45mVWXXLDFkpmonpXnY3cXcJe7kD4FNDtjTP9FiB",
  "key5": "2WEyc7ScZ54Mh8koTrT2yLpmWjb7Znjy61xG4prqARSxewWEz4unzJdJ1oxepE8o7KFnPYfNExo9Vonw7UmX16Js",
  "key6": "2cBpkY8vuxVoRr743w31euqUMKdcC39XLMuYMuUTHptSX8c9C7joqY9qhjTLT9m8iqUBPJmpkNVBauFf7xcVAW5n",
  "key7": "5uziFuZQKzF5jLRw6phjK7ovYxhEVmG3P4p9FGVABecYuNELUttt11KxKNmxJTwtc1cUTxKyd6xrVca6AiUDt3e3",
  "key8": "2nvbxwouMsENvSZ8UUkZxBuyJNTUc9qwhTaysvV7zPATMe2dPbWbRZWLbTcNgT1Gsc9y5hsEP8QnfSAjWfAygvSS",
  "key9": "BozyxyYKrZ8fFERNybqkABY8ztWwQHQaTVwxKUuXuz2bxDgoWjnUaDA9dnYVpbhMCwunSe5TtwTKJT87YoNiiwV",
  "key10": "ELb1SKwdExTdkJ2TwTK6rwRUQynxRMSQycvVB6kHL1AVi9GPJftzx67qJPcjQin8qzvhen16tdWBovTZdooq2fR",
  "key11": "55fryMR4ecxQZgMa5fQ5wWF8yS9SM5qcqQXGL16LA3DgsphVe6LiaXRj61UygJTxC3xNE5oyKwNcWa5xqZSfoRpq",
  "key12": "x9cHq9FBD8k2E5fYuTcDXdpzzajfLBCteQCiwA1xDDwQLbJbASad2R3i5D3hTVXWJ6ezxQjT8hFQe5FQmNSSuvz",
  "key13": "kjWf7Q2BixrqxUCdivZwPHiTxjxNSaxHD8sATadUdkVd2SfZ8w7Rzos2CNRPw97jVvB7nT7fzxbLaaaD9MiJBSb",
  "key14": "3RYftjzrktgZbEpKVznxZM3iZRyytwccTmcRCY7QXrmVpontnh6ENUNudvSBcamwLwBtc1nUX3U43xhnwVp8pHUV",
  "key15": "5JVoHZ9SqGvZ8nVW3patWKJBd475ZcUU5fgcmtmuZkCpHTcQK82ycMATWpEuU4SMd24BejXg9p2AnuZhbjrJ87bd",
  "key16": "3A67PVdVAi75x3Yo8amf3LwbgZiRjmxCS3oQYGxeU9Jg4d8Z9BXBQ7QqSN2EQSyj6GF631HjMtJ83w9t3GzGV3EK",
  "key17": "2tZMWYdXNire3Hu5yE2VxUvLE4zL4ui2ht4sTfM9Rz9U3DhWcVuNmqvgBoiR2r4xSUVJs6SiFyCuNpGHwkfadPpU",
  "key18": "2hubVNqUoKMibGeTvZfhf82JgxfEMQe5JUNZFuftV5gTTe5qPg5mg8mpCxKhKTsmYxXX1NPX6M9YrcEQEVCTEu4v",
  "key19": "5jJtyyCrb9fqse2ZC7r7MNDbu1GfJBowpuzt9t2mWYc2hLPT2McvMMA6w4Mvb5jcx9doQT1ihP4RnxCDwg6WUJBd",
  "key20": "5oUWmEsDCWX7tFnPs8pB7L3efvDWApPQo2MghcFQuwsaF6aW5C5xqoo76HovfrFUYR37yJJuJDP8jgtvKoKdopcn",
  "key21": "27jQckMWKSwhmcyN9qKMb8HVwrkq4oCHQX9PySEgStU5mMmXphFpkPe2g1iW3h5zNHcWTTXUJit7FRQcCVVBg8hn",
  "key22": "4bx1uG8G3466E1vUgobnLXeNDQG9C42qM7EFgUcKARMfNcYDAAYCLFsdGFQ35YfVH1UUbKE8Muxr18qu58jX2fhf",
  "key23": "2zUtkgqfDAcCadCGwYPfJwnYexVCxsemTKmveKBJNa33fChHDhCCHUTZS5ZAoEwMF9LvfZ8MJP8VjmYLs9h5Zx26",
  "key24": "RaGStLjZji53r67NT6M23qvzWET75VCGnTXg323bbKkfbjQ9aHWooPUjnYgMQsj9ew9H3EcNtAbLUXKWuxGx9FP",
  "key25": "2NtY341Dw3HCe7nUYq8Mouwhy73JitvySdF1e143KE345AkCyfbNECQmVnkNqYgiUDov84TobuapRVfZegGPVshG",
  "key26": "4ecCqvYmGEyyXF79LTYDbAhtxJFCSgLQCJZEYoicQvAso7NzjFhtaaVbvsuFVLVvhbxka7gTJddAr7eV2dHJG87j",
  "key27": "4hsnEh1nmyrHzU6X7iw45A6cyvAVYQjM4tJyz1RBiWCvz7xfqzwLwbAGHLeWMA4g5PQJJdHbBoULKeAtErr24DA4",
  "key28": "4jLGaBX8X4cxV1qFt8LkonSEYFByc6Mu738yPKDaz44A7NvsxwFjNrkCoSebPCnbSrvhDaBj8svn9sx8dRtpGu6r",
  "key29": "2QsKjtDEBVuxL4TncSToaMX3GMTMgbgEaoTYFFXHEXibztSB3yWb21giCfRM4yNTP5ixTej5VeedVzZ43SzUADo5",
  "key30": "5zGranpac3ZrJD1yKdxzznbHVgTM4zALNqtU6RdS4TSTPWTSDhycshctjGAz9MAvQ1XCU24ZMDvP7BxuK2kkGLDG",
  "key31": "bmU4iztu4pM6sKcKw5J5Ta5XyKpbuGJ1BzQzWQMcXVcfEi3QrL4Ys8fF7PFQ7e6TmLhWn3LnzBN3rvfGEHHCNUP",
  "key32": "2VY1TQcPYGtU7WNtHpYgMgistteYLxn1qS1N6hYEQDkEVWCmZMcZavfYWMxUfTXFXcjrKejL2FaTaPBJ1DrqHCCc",
  "key33": "5SdbCBv2M8mun2ctFfwXnvZPpUmKpfMW5Npck7sjCukYocsvht5kBJsDDE7nfj9VL98Wr3NYMAkofFzyXryxAPsQ",
  "key34": "27xELbjMRdYLukEjZsZdGBvvMjVnovF8NMWjhZ1MtZ3ATsZEGHqZP9FZXaKbE3dkxSuuacJVWbiUZEupYNWdP1e7",
  "key35": "3YtdM86hdQCL1EpjkFSLYtUMMUURMWn8kGjTHz9DDhir72wGo1PucQLHwispFMxrMXKWyrEKUXE86A4A77aPWCW",
  "key36": "3Zrt5XV3jhWYpMyM8Gxv3ambsdsWoodf3Dcrqow4U6PXHUiUDBnfvR6Rj52djRSS8YS1qNDLgkccxfiBmLxyv5P8",
  "key37": "4bs9NoVw7kJNjD971zhBfYpRdoN84ARXKSJEvcomRfX4ocNb4uBBHUQpxAgfv8rLjmvb8gWV8z1LHhAHZ2VpWLTu",
  "key38": "E4uz2A22FriFN5dsgZxGeD1qCbdkgx9fBsxsPkGi2yD6snp3qatfnRXrDXLXPXeDYjqJfPtLSfqq7UdbdQdz6Lw",
  "key39": "3Sx1XScWusdmeCQMGv9v1dFKRStwBYaaa4tNnDGp4pRMeM7Hi9W9eNMzcJeMReESzWmdH7UcBCvFJWiepyBMeBQY",
  "key40": "7pAryxX9sqBftU3LY4hJ9quCWggK6V85XAdAR2bq1PQsdvEq2ybijNMmpgSDzL6KLgTjSPpaRRy6A5PPhgsPhwD",
  "key41": "4NyZvfXmEgcrgAL6FaP9C4wBsuy7pgAWuT8bbWJr2x8TtqftLPeZ83Uxe2AC5w5KDHjoucJSZZh8qbWJF9XMB9vL",
  "key42": "62NfQHQeXRWZNYZaxDodJATmdC6HaNGnnNGyGKaAwzhELC6Y5nBZYX5MoBut7XC4choeYpAmsS1Z1q9H5GNs52GR",
  "key43": "5E5pZtBmfcBCdbuZaviDkBRfgtykhdD4K6WtVB1acqdtetVrt1AUeFBRJ664NotEo9Y2GUET92fB8NxcdjUg7ZyD",
  "key44": "NFxuYN1vxSbT88evUQQqhxxNseasaJ7pvyjmazP7BTQrzC4Fv52s4DYSbBdgxEjRwtk8TbqYm95BnPvnrQ8yuDd",
  "key45": "5r9GNUzhfreFoykTmj86KRB3B5jAsaAkJTWdhv2LE882UzYUigL7V28FtoC5oiuq1AzxqU8s6vETUedQG59nNZRT"
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
