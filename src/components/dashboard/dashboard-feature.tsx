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
    "3RHwDtXQ9QnspwE1iu5FBCES1ZCMFNTrzuA7QQHHjEoVzDs6DRdZWj8dKGVTmm3yaHaPT1ffYRmy7htHHdbLgRD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H9yUnazjb5Tqau4HXtCMfCaa9J3EvcC6zUNMR3wQBbQ5y6zvPxBvy1ASBhqGSDEG1f89KPvnx4nh2CZMhKk9rPR",
  "key1": "5ddc2jjDuA98YtBaB2sErCybyKPYyZAGjEBJaXZfwqeygDtSAqPFbZyFuNE4VbGqmtn6D2ZArvMrX559RYqsbDK1",
  "key2": "BrVjCQ4R9mF7jBRCiaMH254FipiX2q72jSjHtsSsCX5uFzW983XQo3VGEpjMoT3NUtgphTqyCosaoDdjFCUcSSW",
  "key3": "3c6hQL2Xx2hcwaJzhYMKPAmHxRqjExB6UA5PhAmb6hCcC2PZLm93xtkEboefvmUwDkL7wsRcqicZt68rynZXP72S",
  "key4": "6385TNb8NPnrN5U2Y2ZL7X9iGXaQ5E5mDUrYpfT45NEiRHVN6vvc6NAQv5voTR4e2BhVf1imKsvYqDVeh4kqxLdV",
  "key5": "kVxa5zMAZESGt5EEy7nXLCoS3dcf1jG9oKvuokPZKG4fsdQCvwFVDneeFSNMpGaYikcZNpbxUzH5uY8JXxuLge6",
  "key6": "5jEK3UCPddZ9QAJEv7sQ51NwiYqDGqMGzKe7eNckzN5cRAMeKfgHvr5vsKUWLjFu3CJda1LLbFb2BaWrov3Cxw7L",
  "key7": "Luu9QnuZei5f9uEzp3m3iL5WTvCWLGFgBjZqkn6B7tgeQqz8D71U83W6FpRyWErSLFHt5AmATvEvRowhGZRB1DT",
  "key8": "3W2ERqGyyrNwMTqoZ7ytcpyJNrycubbxJjC3hKHko3Fft1bLuyRnogQmcix7nuVfqGUTitwgHmQsE9aWCPVVTMKf",
  "key9": "pEuCXoHxiv8JyimeJqofw1TiiqGoUHMf62uatWixaLANY4yG141pdq13KsVEeiCpgWYZshcbCtHHyhHjzizVp2h",
  "key10": "2gywtczb2LXXCFQP5pRK2DSwv4cf9WfnXgxNevrXAUU9tzDHA5W1XC4M5USiMw8YrdooeTzUdTdEPtEJxyGoemtm",
  "key11": "4rdKCWA8Yo5fUz8pFTPhZ8sx4kMKDAUVPJa1V8ZjwoTdRq9rbMMd4nhUmrAEFRPgPhuYtagqLgCfx3Lrp2VW7Hzt",
  "key12": "56MRKqTTfqdKb4NBePgEM7MK2ECh2YrCviHt8ZLEQuQY8dfEwoRqe5B9znexPfSQDrwtKkLxSiLtmFdmjkKXqm1D",
  "key13": "59wWz9n9Kgwj3gFnz5kT8XQfpJDCeN1q9FAtW2tQUsTgKCdHPxM9g2wRcxVyzvL7DR2NFoGRU2RsqJamHzdvLi1J",
  "key14": "4Be6Fe2c26uKLUQZnYthskj66rmNQMrZ3N78RWxSFZoyvRZfb4K98a1MAkvCpz1c9Lf4fYX39VaVbHBkgesYoLbw",
  "key15": "44CmaSnbGZ9LbHRS4HRz6ZiyLDP6ym6izqTHGDFhNS6KV3697KHCECWU6UNT9XJ3YvQPo74vkq7L6f7Q9ispiaTv",
  "key16": "37NY2zULDWfyDqkWH8mYr2WQqLpZCnW4rU2V17ynzj2ypUdpmtsmAkHNhZL3pQfoqG5wMXTqabjbv4bq1w4j7tu6",
  "key17": "2vLtvdxPx7iakCUBu5TckATUhZJ63iHkFKt4HvoNXFvqz5j8Y5d9q13XSBGFmHXo4dsXCmSRhbj8mRsi9LxQjDKi",
  "key18": "3uNA1rFGGSDsQ8VpCf1BhzdsLDp4fxSy81zb22oXx19zGiADWuGxdkvLsh6atoV5KqGcMouPTAHFTFdSKLHeZzaC",
  "key19": "2Sp5o3sfu1EMRHW5MPueNLMP1eqyiKNkXsndB9TKE6kEx433gZTrhqDu8qnV1hFR7DkZyYzPiNFGCTnMUhsk9bsB",
  "key20": "3rhJpvMLTiw5DFtx4DeWwwspDKU6fi5KttNfZk36GuB3zRY1jRWTEKaAJVAvAhtzEAvnJronLzQc8NAckCVCTJYH",
  "key21": "iYEUcMFdAkad2J7gZJwZXVwqG1GU3PFfhmKidGrKqnbxPxRtaK69P5RWiPiFJKw9SbxoCCe1AoyzDaFvaqtwDUv",
  "key22": "29utTvyk3zekmBdjvLb2W9QGfn4sxWHnTmD24bRxoQTGSYNutoCyxnsfu4L8iJNZePjM46yG6UxLgmkcj1CQebdj",
  "key23": "tsk27a7xJVTVR3TDYz6H5fTtfTaaE46qmZNbPWJuaBNg8EU4d21MzEiAsroZDcetMwmzRyNwspBHMiF2KLsC6Ee",
  "key24": "3GRWmQS6DGfdrXdVX8NQuGCFM6Zb31W8RP63ZiN8PXG6gxM1rncpX5ri8w1EAuCeFfHaJmwSL7BoHXosgVDZmiqw",
  "key25": "2yyjvu6rBjSW1DgFUPSnxz3J4Q58BE3m3MDei46bnDn7PbwHYddNVmhyZMr9XzNaFyTxcRoxJi1eB4Eeft7v3Amv",
  "key26": "2i61kD6UFszd3vRCBgdsz5TfyTifK4BbqBuiYXjZBWc3iyzE9EPYCod8XT6YWkERcDyYhX3Cs8wNJyt5PEDW6emb",
  "key27": "3hDYn8MtpzVtqzyGFmpgFsNTDDjMccPKYEsoA5HZ5PDG5EAzh52jn3coPEHWtkZHWFnn7RHf4ZCXxwakZpjeSWnT",
  "key28": "3rtkMHjpgsaiwcK1zYbSuLbhSe91n8eEqbgkCLaGtXHPDvX9VCaTvNTko5Q39RWmcPrt6XhPFq8J5uzMdPky81fs",
  "key29": "2jb5zVvxSMpCZDiQDhhKJwQafTCJ9dodRi8WxqgqtK8uatsfrwAs3z9ER8vfsytDRLS8E57H1VJ7viBYTwobmfpN",
  "key30": "2m3T4QSVvMJCpAhd7VNiDUnK4rZG65NrqvqM7sGVkfsTQ9iY81rrgMyrmV7RAvyMKgQU6QyMvLgZxebcorwTZvUm",
  "key31": "3KNM3SKQjQGXMDD3hjVJaGAVSMm9vVFANpXUYWegghz46uaRnRTwVEbJYE9mzWSocxm6dTqtPmR8XawcM5noYSMc",
  "key32": "3Sfy2wTXHxE2pEZNpFjiatnE4jHNNsZyUCsHGgDSrbf3wwHni3QCAKeUf8tjuLSzkiJL3z5AuzFQSeG2CNcaiqqW",
  "key33": "2hs2erX5B6Qps4Hqx2Bxr7PadnhrXEK1qDWK4vZ2u7Jqr5iV7VS4yEehw5SDCarVfieuBxRLWSyuxWLpJW3Ek2wr",
  "key34": "2ncbKqa1acUc9MDF9KcjiwvXGFru4SbbSfYkgJbH1Ti1rnyVAUnu2ydAxnnh5SmNfrCcVQvRj2KZw8Wm6Xk7W6yK",
  "key35": "3QJ3y4wm7e5n2qrU5gZDaWcL8doYPfAXaFN86r4fA2ff73kgnB3ak9L9Q4L1EfsbpNpGEss2zWLUn6yFF4DU6Ec7",
  "key36": "2p9oSGtjTUoJN8igrYyeX5oQxYBW6QyCREoLTuRRFLtVKnQiMQiU9k939e2J1uvNiKU3M2kdqkmCqKZwzoSxW5gV",
  "key37": "5hYccVJ7DiJQTvM8ZKgu1hBwpc8Hu2ixaG7ekjrkdxDsGzTzZbcEum398RezgVT64nCgQswD9dyuhbuVhSk4gsAE",
  "key38": "3VMXa3wwkmjUsNhwCYRrJhY2WgSJnLFKYGGMppZdEGbwggGCXijMnbVUdSx67Tok5hFFA8x59r3W9Ncs5FSA787V",
  "key39": "RaBUs8uzhP5FLeSz8q73osQekAfhcGCjFv2i9yftTGAa1C4KzLVT9ZYjS4Ht7BGs7yYdF5iyUYZ5j9mZXJ8aXrH",
  "key40": "6LeShZv9gJWXufGvgB9HVR6Cb5dCPaPsrZ2qTyouhAyMf3Ua5v13mVmZtdXCvuMnHJh9iyEYHiZiJZ3TLAUwNNM",
  "key41": "duznC4iJfrr5ok4rGEe2sSMg2LLd7mxQVS3E7pnXtDwMPjAijqeEFknG4osdv1JkRq81wToMi96HnoaT2zQYbvz",
  "key42": "3GWN5ZmKVm2TQTcqx8p5J7e9qapPHHMDXFpFRdJzZ9yUsbdk31urPwVgPPehLLL3dn2p8UfVBxaSDTYkTRjr1RKe",
  "key43": "2DrCzY3TUfYHTUGGmAqkwjD8cE5mxYUMNwbKpPfVbQvwfe4MJh5rm4TbK4tFRbhKvoXqK1fwfBTn9UgG5aUCfib1",
  "key44": "5RA2y1ZKG9yQyGagpxUYnLVQakvtNGpYSh9EXa79soinRvxFTgY7vuFdwEtip79bSHv9G33R4V2R5xZaMWduLmnH",
  "key45": "5HejRbfywrucPYRS79MPudebohGkEfPfWv9vCR5BSv3ck81REBsLVBLJTjMZ4haUGN9FWuYHea12Nm1u5FafGFPd",
  "key46": "2d51wT7vF9HyQh9SYeGG4iRrqYNLMxWFdvxJpKKCkQNh531vcLwcW58GSN3z8iisP1wMgruQkMpDqhkmZq63ALHH",
  "key47": "5io46CaFww7NGRfhCFbah1AHggzt9igoFka3kUnHJfzEhuNLTwdJuQybud7NsUsMrMvQg2XqNquhm3GCS3ShuzKz"
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
