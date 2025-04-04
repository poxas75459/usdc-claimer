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
    "29x84yxgSqZeZCoguNLZH9WqZo2JFpZzM2b9HQmRVhMUDwznoRGq7HieXLGHD2rU94avYNHzLVCQ1KAz8wi4ow3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mo2i9hjJ2bqKzN5rEDD3mmiMfp8eLLz88kLKFEKJfitPzd5bV8UEASV8mNXu1GrpUm8ZtPHehtxuox43nW6hfjm",
  "key1": "2b1szacgWo72H3kh3YkvsDCq9jo4rG2r4UqYEnfYTyCmM38yVy1HXkerXo58aEdjMWNJtzVwD3n4TSaUijjPXxot",
  "key2": "5FvR4QMvTwvZDdaDDspHsPDQj8JuT9dC7HbGiDVDVJ9wdzLk5JwgHMiqAkoNMt9ES2vuLVd2p1eqyFsn5dsiZMUL",
  "key3": "4Wr3hi3jMVicQpL2DvhbD9A3mTWUonMy8kKL4uHsgPaWcYJoJnLnDUK8iFamNB7GD1XzoArHxCJiNVWkhLySQRQU",
  "key4": "cfUvR68ZLs81V6wzJwEzT7WfFkAASa6v5eiJsZc3UsaxTWNyZw3fpUPGNgftTAKMRCKtzZeJyHZ5oUjN4hXRUyL",
  "key5": "DaHbCnGBsrM5uZ7Mfsfy97ZNMgVp7hx5QTnkGgcE9si2BitQiyQepnZkZffZdkZ8KqbQYwoeTLkvrrnNCaiXbis",
  "key6": "2oYiCBxbdU5kfbo8wHLtfqLfLp4B3SES5tcNeYiKSd2KS3ZmesGLKfwNPYURxNYrw8ypckSgMUzeDpCosxH1HuQn",
  "key7": "55yMJ9RU9xECoZU2PLUtNLR1C62YU7xagt3rzEwPEKMtAsAfEg7X5izrdZZm4qpbS7rvbguqRtL3FWx79dP6SUr4",
  "key8": "2a5zq16JCeR9FzQyXSMbBXBZkq1DFHhXLkyv3pyzeqmgMsDa5UTnru5MiK5TKq78MjSbwx8hAyFZmTFv1sYdDzr2",
  "key9": "3agTPcvmD6NkEGMuSE3xCrvdNjGtfMGJPxeKRunh8KwzRLCpmsJrLsGU5brqtw7zjqaN8zihGPj6wdbfzuYUeidi",
  "key10": "4NtAuaYAc5b4g3JsD4MTGrkf49tUmXhDQvtZnfV5rSSLdWosqbo42wrqoZX4bSjkFtGEc5TEfFR2a6g2Mci35H9d",
  "key11": "5C1Uc3cZVK4CRW6LjoVgwEvatjVDJ71UYikzR6KVDVYLtXu5BX28X2HvvYNLSKgrviMRxA2FVWkhqyaJoM3f3iDc",
  "key12": "5KgY8k9Rc5YXwuwFnwA6eiaefgSuq6rQ6g5wsrTy9NVkSfYRtsBVEKx8LuwHwuqKUXM5WfSVTe3pmedXXcUUHiad",
  "key13": "2Tij1VmNVPm9h5dEMr9LYJrhon1pfKcpjdRng5zusCJeneKU8RkMwfNb1R6LcnaTGutTAGVKHNWkF4KcYWGLT6E",
  "key14": "5wDHf3xQcwjAnxvcQ5xsBetF1GjvtfpBrZoSWU4F177j4xeTtp8wa9KYN9NBbPA1GaTBSbj49VjrzHwcW2Y8eHFE",
  "key15": "5yveQw1D9SpiAeY4EpDUvTJHLYErU3Qendg7dfvcvEsaevRPyMzbd4RaW4hjdhMUvNs9o4NHWJHh6agKXskVdBbW",
  "key16": "4KAHnfX3FR5Mi7cKjJV1saHnFrDkeNu1wXdDCKEXbsFPbiChCUC8MKfJYxkeQVk14qc5bPGiqCqyHy5Vaf6XkaRw",
  "key17": "5mmi4KC8Hspq6xavNDYzx1Z3bgfLVAQFUKcJQwoQKht1tMW21frxuQogvhXepmARfPFNGwr3aXaoL8QKtD7B2Sr6",
  "key18": "5G39MGm98BNTxt4CZyufWd3RCgVnHQYSnxJnGzRJ9P9YN7SRAU2DcNKn5j2Xwuf1inVUqH4o37q7qDVhhUM3bsk9",
  "key19": "3Sy7zKKLhRBd7G8yNvf72TDKqRtApL3jMPB8WJvxH25fLtUZMZXkjBAPmzNVeB7WyH7bENJGw7Dv6CweE5GBYETE",
  "key20": "42MtYJAPxkkiJHyz1zBmazJpS9KrjP22aeHk3DkTVNjkn55hPLv5MZjqYEkBgkijvfWoCsAkZLvAubrGBeUN3k5g",
  "key21": "5cGvDfos5LA5yeD1cFpFjNAwDbWcUaWEnG6wa6XJSUwV11AjsoAs7tgaMF4iyzMznGBKRJswDyfcwsaVVKc3rMjV",
  "key22": "5gWu59KWGxvi2PKi46eUMsSfdsiUppKz19E56fj9Z2AEsRTe5fbpufqf4jorFxqNYc52AEKS18weVWjhXV3aKQGb",
  "key23": "3T3cpGVgbjcfQX8ySMvQd9ph27pY76VR4KksJA8rHcYjaHmkxJjJuTNceaLCvSMt3YZT8m3TiLPkgaj3xnxFxGBj",
  "key24": "5JeDwwL4qJPCbwkpFEjExcZUiQP4MzSu96Yu3YbmaeeEQTgeupcDCRag8GV3xzefdEugydYPkQibj3tS82WLfk4u",
  "key25": "3Z7EMEg7LbmdV1xpJU3wXZHDkC8h7Y6UPmNhwXr4z1FWT2E8KMmEFdshRzaTeh42opypCEqZfTBtnqaHx2CL9DW",
  "key26": "2RS47xw23mhC7BLrMieyzWHS4GVLbUVicEd4BLqSK7iBLYxCNutxnLdHsKxbgPHkryLLicwdiH2bcgzBQ52gMkcC",
  "key27": "28pJS3wiQq5ZuQMjaVhgJM1HaUm2wNXTAFJuWA2FAXe6KAMxVQsZ5iYXdTyYhX3wAH5WC6Tgcx9mV9pcjnxeHBig",
  "key28": "39TmnsLgcFst6Co3nsEKJRDmgYoQ5JjshbpmvZsmPsBuebRivkc5XcTecGAU18zrktAcqGkmEAuBg6ZMcKx2rqTb",
  "key29": "3YxW3uLSggrDmTrrAjC6F5nxvVsTPcy9SVnUKDKLvMMehA8F5FKSX8EcaDH7njJj6qwn9rnBqdkbz9gGGHWdGtgi",
  "key30": "5h36St7TT6HmQPFPXVjPzUbdRcPRbwh3b3nJdJfTveigA7KXf1N83s3uB5DGS4DMTC2CXkdUKsvTxr14PVAse4ix",
  "key31": "PtTVeoEWfTqLsyLCYL1vqgKWgvAAHSvVkrGrzKCHYcUq6fNixEfvwyXPGtPUD4D4hu2Cyv9QpW1MSkuN52KQNyB",
  "key32": "bKdSG4ww87WFRBy9KcxgjxQPBViHt83Bm1dTfhsL4MwKjiHVHec5jxabxDj4vk6AkmacLPfZBwmxNeFaRURAn1Y",
  "key33": "5mPSd2ygjdekp6Bssrvycn1gMwKEDtAARxPWANP9uTS1HWAsUfDAf4MJYeVYyEk2phnZo1iN5um2WMsJeHfwcgFr",
  "key34": "54DUvwgtCqRxsaAWQ8hPHNQ9d6416bwLDjTPYKcSrsh33g7eTZr5aKA3UEHKeb53gstHXzThuZreZsgJTfnsdsWQ",
  "key35": "4SXzvVsiUGe1PmFVPxJ63kf7nBQ8PNFJv5YFB4SddRJoV9rNHdpdbeWpm8VSmBRzG7HThrbeqt6mCU4caoKTnn2o",
  "key36": "EFK2rLtZ3ZtNimdthdrHNfBNk3qvKysN8bwSWMtKhxiG6SsiWRwwYYGkSXtZjWWu9aeGx2AS6xFPEU488Hju5va",
  "key37": "T56wxxHv92QzPDkC7336XCSA5gicAjh2QYKeNButF8scMCLi1vwkYgE5ZXsT1trMC9HetAx9wXKjfSpsU59zDQL",
  "key38": "3u44oD7z1VT7QsDmJA5twKvG8Qa9v7ZzDutRnkEdeSZHaVr9S8jL8NrLrAog5oytUm9xsWsspPQj8Ja274W8T9wJ",
  "key39": "32fUYQ2PKGE8dqiqs2jK6dJedxXXT7726cETm6KtbENnHKBBrFXr1EBDkVKCKXaiJziNhUxdqzbeMaxozNbP4Kfg",
  "key40": "6L7YKN45ZLQRWR4jazoj8rTNneT1sNVJsyz3vCdqirderZ53RnAUqDERmH8DKeinmoLsHu69sp6JXTTvg2WRdRa",
  "key41": "3wGcHw8MBJ2LHyVqkooTyfxW8FJxU359FBLo7pe6BhJ4Y9mTjCBQe2PxgzK7tPMFJACjxwwUKg9YausEdfKhpcMa",
  "key42": "az8Jby87WvAkbAYfxEmJGA7cN2suXiLG29G7Am7DpPTCWfGZQLWZyqthK414kRyv5ykd4pjovRmqScQFCrnW9Dk",
  "key43": "279fv4S4wVjkk1mdDw8o2GwtKZ5pnMuvYNi7P1zSkyFH5cPTX2x6uYwAqfwthJKMudFDxDvA5qnkAeGHf7BPaFb9"
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
