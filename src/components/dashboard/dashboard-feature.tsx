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
    "5Pc6sxDiD9wHykZm58psfEdY65nhbVd6KPtffwCGDASrDBXLyn7tn79UhdRcE5erGmMbfZYLMjKBvoFMnsk9sXsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5s796xz7ZQrty7N5FJiG867yWVpPGfefmvNTYPCM8D9BaS2bFeVy8ntPspGq7eX7673Bx2PbuLezcXnxojc88M",
  "key1": "5m8XXbni2LU6tFpNFZAgkbFxUghiUghwqHSY5U5TkZsnSPULhLLyeRLVNJarmDeD4CwKU2xBb9Fp1eAuurYo7TLw",
  "key2": "44Dtr1Qsn4sVJJQiSoZLR6yzdtMZfcP68Pa7wFKaEoo34DMU5ChSXYN3jakGqde5sQxb7wFaiui8HwdxaoodHk73",
  "key3": "3hhrsCZNBUwrBdNvjswxdYNirPEpZ5XiwJ69wUsVC4N3iTsK1RZKZ79P52tTGoNWAUbYH7sX2hYLM29bCsbZi9vF",
  "key4": "9eWHnsZ2gZduadis9keXXQHVi5QWST3bT54DYkMTd9MTRZXT9429Ukb1k2EgofYUpXwLGVTqf1zdZkex3sDp4nZ",
  "key5": "5grDuX4g6pxCKm1Uefy6gAjAVYD1pBFz1KKP9UYHbGu7miUMFBhA1xLxGwwQdi6GD84zxatgcKqwX7hYvHbwt2yK",
  "key6": "4ghSoEi9zn6JHgGYniqnSUN3Xh5UChd7WtcMRKRDZ25rAvaiyGzuF9D7vEHP56VxzyHb8JiZThzWjE8Nzt5QGBiP",
  "key7": "TVJ7mefpW4XTMuDN17tewfyDiVnbifLWFBEHXRk4MzqfQXXGogJpVjY5Vxc1KS3BB451N16pCR4wKEA8WacJctt",
  "key8": "4v8Ua1koGcWjYxu9K8WevzFq6Er1gPqvHLfK95QCv4Kfu6c8QPeShXX8sKhKNbpZDucZxzEE4mv8739xnezw7wKa",
  "key9": "4JRY18kM8wnRpzSXe8obx53YzNHDm1sGGHK1LRmfzncweqHxdQcXMgHFifvKuAbqqHhjWaQFG7UKQ8J7SHx9DQmV",
  "key10": "QmSoyoq7CTyXKJPPbWDEqmtwmahwjexE5bPEF5TSm3tvmyNXKzyJn2g4RZoscvMCwRGKvBkmfgdAQM4LiepEUmJ",
  "key11": "m7hmc5BguZLc5BUY4YK6hCCwtqVDk1sTt9EwRxnXx8swETEm8JhmnkqmzjvaWDSjek1WFhvxubbNzpSz9BgvWnj",
  "key12": "5JBSXnhNKdwaebbu4BFGpZ3kd33sRvRTnaiCPbT8v16Sda3mFqQ6Fa54q7dT6Q1aSxCfoW7M48DpfKUh5otYS5Sy",
  "key13": "3cs4ZKVereA6hWJh1t293VaPSugrURm9wDXhq3T6k5VxmN8rgWzz8viBSrU712wHEWBwbzYTNXuYnUMchGxpKKXL",
  "key14": "4T6j8k8BVLDRTr5ZB2A3EiBJteRrzqKBg2Tb9oJPvs39tcRPn4UjFBockjfYvz99o4exQFz8e3hs5rAkD74HZUnR",
  "key15": "2Sirsw3L4iSf9LT4Qda8qYsDi3Hp7TkTKdeySGUGXqNbkfnyDsipZwUVyBH9dBSsLKY3XLePnCYoZecBdQFZ2PEX",
  "key16": "2FuLyCMPpxqcsPF1Yh2SK1wAtxywEkqyXE54hP3Mb51BSUG6HuAkDwvD1Rp2DsiAV94zQcBN4oX2PLdCT3sCkMwS",
  "key17": "4cKFzjtY8BVp1rdURAgi28Y7teQoGiMZzYF6HYAtoVXopErSncB86i4uTe7nAyVxWqG6o3uqmzDSW3xjDKdK7sdZ",
  "key18": "3PQuqUXiH1aAXDZjoYGPEWrzbFE85rSgghL6iD8xUyJ8znn3X5KT5RVVzsbTkkWwLJ1Q1x5p4zfFJaXYkMXowttf",
  "key19": "5PLAMWTDMCabKYovwHvENSBPkDMLbz4jeNnejYy2Tok9mLzGmhXws7RcBHXPojT6SA5CkjckhpeqFnZMUHA7mLD8",
  "key20": "5uyS3fyEhyJYKFzAcGgMdEL57cCyfgMPMdQ7m9n6m5wqDQWpgBhCV5jpfBSZEVVJd2DLu5udb5o78FuJMjpQdS81",
  "key21": "4R39GG6KLuNujVqoUfsAtk3fJUQGdef4QQPaCdAQwAQBexAgLcXCmfEgiE6erzJBVCsHCm8GmPbqzeYNsYPY4dyN",
  "key22": "2Vty1P5X8W7bTHmZe1zi8RxAjiBnwFnjQpMbDox2AHYXLBPwWjtzhj7ivzr1okMaufDmRGZWaiAGQSu7vBfoK9Ez",
  "key23": "5nZUhngj39BkvZnLZ5cxnHUrYUb2c4QBAPN3VweTRDmd625jnzJGispCEh5ETqWGD3xXmNyQPQ2FMoJjazW6g9oQ",
  "key24": "2ZPKLm2qWWFoZqVXaLeAMUXU1LCEaBRNYZTAkC3iVhtiotjsiBqXxPxGwypHvFL3oVoqi3KHAHsZTT54fbMp9Jd5",
  "key25": "4nrCydL86N7do3X6GSCPEMRSq9keHaFsrTF3cuyYpiq1kchhLTkouZpSH5e8W41UXUFB4DmaS53RsprUgrgfe2j1",
  "key26": "5YmegKtZW467hFHmQ982Cvjh6pofc31ozut5gzUiqJbUUrgRSACimrucF3CQgDcpa2uDFVX1W5tS3XKvgxWFxfaV",
  "key27": "2sE3j3JZkn8bCgYiqHx1btPTckQRk5ZPR9ngjTN1gbrwMbXZVpeQ29NSMv1h3n2CprUN1Dh7c249DMQBZFLY1XmX",
  "key28": "YW5PfhsxuUwVFNu3fgfxoHWUoi573WoCT9yvsTtb2jbZxJKdfqB4H5BZzaMCfFWWwwvL5sb8SEcqypBoZEjkbSd",
  "key29": "WSqCoxigupepwykBYgJrLHabmu15iSPWkCnvDz1ziWn28HCcbMph3m3kDgUQTqQJFUkBYndVj4W4C38kQZxdgQc",
  "key30": "dbrKEA1kvumGnbZYqTnw54A5bkisoUmrMTj4SQHFpE8RdjRVSQiMRnuX66sUWCmYXcMuVatF6HFYr96V779ebA5",
  "key31": "678Q5wzoBicPqzp6JDquoUT92dySqVYnxm4zMigVNLbBmiMbpSqTU925RXAvLnyVHYdTDqRJJBysgvYQ1Umx7BSA",
  "key32": "3MkPSj69zf4HK9xBUQQuvKuDeSyPdDiZ5NEf1BHhQRuCRbt3ypedcyxJfGx4Bjf7gjvdBbRqQNd2bsCbamCDaNQc",
  "key33": "5uAnZMtuPgeg5mfRvy2SrHEecaAtgSNuQpB7bTZb5pfWU1qgdVVNJFRLSGbn7zTETdBRtYRMQPnZUverM4dwz686",
  "key34": "XgqWsaG7k7EiMJdwgXSVP2smkTkghVKiLsRz1pgaPduUXhKFwjQaMPTGMcwfUxFtpScPJ9bhgopjrX265CcWabK",
  "key35": "3TuX65AHDGYP5JY6XZnf1m5tC5CgEgbciZkK3i2guFHb3jgygcQHs4X9WcsjVCCknbTEUxkSNC2TtAKjyjZSeQGi",
  "key36": "MNWEbkmuFXaNxmXGKUQYLkTP13WATxoXEJsgDdbeeRREiFgRHs7kGdfQ7eCydHD8SsEi5LMHWxJYDx9a343Eajo",
  "key37": "wi8DcwHd4PTuhMRYWN2hk7NvfuhK8cLDGZam1LxFVKqNnzUrbZoeVZ2XAxFncTSN7ASVoBdoFuSc6RB2K3hyA4u",
  "key38": "3udVtkdiGd6tdbx9WEd23o8DVgB1v4JkVeGQUW48muD7y4yjme5eEQHVCGSyS4aSHCnqkcJFtRP8J3JkmSUXcnZu",
  "key39": "5ychUtHx6T3WA2YmcjGtihqVrvXipS5H2pG3UtcZXUVZW1u6ZaHabgrzaBnNe44cAjiv2QYA1ADJa77Nzma6rSWe",
  "key40": "4V84H7SMzXsj1P3B2j8syUEyD16XbW6MeD7imZupxpyAYNUuVMY6X3uSL9tijzvPWcxpoW7cHa5q3Jt5Aj4RTPNR",
  "key41": "s1FF2zrefeuKbqyDfJs23zQouXvhFnWHK71X16AM9JTAWttA3ySzpYthtouBvoE2Sa6CceLwazfE2H5q66Fameg",
  "key42": "54JdQd3ACnBZCnkQvZV956TGEjWedYgqgmA3ho7bLkL2KqLHuUxKvtUeSdv7BYDzWyMfC178au3EwLfUVCPVTUhs",
  "key43": "2Tz5KCq7toLwJDJ2rwgMRbbaj4AcTiEDzoh99i143tKJGri3ZEGe1kJxiiHVS3Fctd8HBjZVidd3A5i5i3sRPstq",
  "key44": "2STFKLAyqPxQjnb5gzqrudrUkWA28gat6tkVPbgYyzEKUNvGVg5cnXRwCkbVKbQno8CcmTxzhenyskbGkhCcnDHi"
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
