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
    "3vfMvfQWd1GDrq5hXsnbrezYc1wCCRfpvSnc9M33JBTCbw9ibSQCA2GwyNhab1y4NQavQ1otxpD3hbg4zxuWcGRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqHm4Lv5QX1wjfF4YCNkv1ZWPBJcZEAUcTVDUnJjQrWnCewtwUAEAugcHComj2FT3YuqEmHx2Dr6UyABcWMFvVn",
  "key1": "5227jvtevd43Cv4gmZbtDKquDfEdqryNhj5y7z5J2bH3MgbLew93bvAqmqksbvkAQ1rysMzsFewvtYiqQVi6rd7R",
  "key2": "3G7JSCAKiXLQ7J2dRAyxexkaXjpot21pZ2QCqrMzLVXfqhaYa22tw26GCJK6u8Jgnzzk8rKByNfSPMHEQH9EFJsT",
  "key3": "3j2jTXHzPLseSXGkH9YruphwUUFCkrEFpVKt4b9GPfEzPAy4HnTg4eCmFQkpBbqHonuAPrSLLfPZf8dZvKjsNMTf",
  "key4": "4cRvaRGtiJ1xCPKPucUudxBjMNAcNBa6SBxAGME9W2S7hhdKrF4wb4woYovr7DkdLbMJDKQ28he1chQ4JKyyBd1S",
  "key5": "5m2G9bax5ryByXQsk7DWMp8RCyd63npuwFQ8nNHnaw7Fn7dcWisrdvVSXH9SrABpejgePokGqdaLcxJeXQT9Nz3o",
  "key6": "5eeGX5u5ucHQPagvhHyRtnZF1iam2kRsKC4PKHd8PJpqcF9fuoCQVNvXBALREpazfMKaWHvtfCvHpX7twRuPJ7Gi",
  "key7": "5aQzWMfUwSKy2ymfd9NHrhRTPxMc96s2uMDAbgP5meoCqfvn7XDkyZ8Db25hT9MBHSGed9TtmgVDc66nPo4uFSQz",
  "key8": "3tYy8oo4cPnAAMuP4QzNmrh88KghgQcBXsZaMnUwuwzMTKLux6VBGuZfv1ADqkKtD6JmNSGaZX3TZLGhGqJHET4d",
  "key9": "ueXMLLkFdZWZi32p2zdpamxt4C2UzYcSLXPJS4imQs1jFtC2nBzMB1QmyxFEoyJR4LkUMfyYxPnfgNTGZyvhYdA",
  "key10": "E1Uoi1jeeuKQWmMsnjFmdoSTZ67AZrh8YtmMZu8mJEGugWbVNSNXHzK7VZxeAJmEhghspTxT3TsCyxReBhzUXKF",
  "key11": "2VqesMU1ZY19VYjVKXozCa4g8uxtv4G7hMuzukk7LrdL22iVvG67UfBthTq59ycA3U5jTfTupVcs5Nv3ehVTuR6w",
  "key12": "2ffifyQDFFi9jJYqYrLKBUQLaKZkCKBc3m7gfXD8dManxyfEaMfRpkRpRHBMy7pu4EedZR1t4uSzQuiM2vAt4ZP8",
  "key13": "umNDseat7wVjQEaj9epZVZyHqQ3rjCURSHuQyKUVFQoWq2VtFUv869ZxeTK1UwHYFT5acch9e3Nbc96CnxteEGP",
  "key14": "2Ff2LKW5HUQyHVKApPntdHTuryNQh44aHPr3e6fmCLMLkcnMTN7876qtPzrAGmniLVhKnwQ9MwySrLf1RJn9MtvM",
  "key15": "3AQNR6XpVkhFmLDTPsCxzVvB9qNwEV31qaPPLgKGyFnXMaiQi9xgEtyQKsB1QUQoP8CDHVVfoMJpUvm5AYbV5kkV",
  "key16": "5NqZSPLVghvC3P9UAGYR19KU1hCXiYACZKuiJRVg2F1b85nJzu8sHLNVXFBWUaHDsMHLNkc1Lh3dyDnmYiYECpqK",
  "key17": "5pSMZ36FqNPqWByW65rySAcrJkK6xz2PYJePQ7xrpD22iPm6f21iDgtMcTByJagR6EEkU9FeVLnevDYLrosLgG3H",
  "key18": "57gyPBuFn3mBnyiZNmST3hdHbU4uMVGYcyC6UCMTYCuKZLFbxEKMK15kDKsdG9x5T6r2QHDEUzK8FEpuoV1iTyUH",
  "key19": "3VkpGNtNic5TxJg1ArKnf7zNmCy3HgAhDVgRg6Y5kmaxKfRKx3jGtQjzcSL79GhadFHDQfuC73SrJf5v9vApFpam",
  "key20": "q6J7JsF79qgLiMGmsizPqYmAihCr3tMEUZtZ5cCN5hnVhofNMu1ced2cMBV2e3hZR76y4AUxLQZzCGfRcDtxmmm",
  "key21": "3qm8b1T9wdp9fdQYWocDL4yZe8KDJDmrqXVMovWG5pLY944qa1NmjERG5yVP8V6hYBucJJqqPU4Ma4b9u1KjMcMp",
  "key22": "4LRCiYmqhHfUUzzbToZUjg8ar2u8RfZxtSFcyuVJuEG3beok5AvduCemmiprAgBoAxic9KxLCCR1CVunk6sar52w",
  "key23": "4s4TtegXsWq7741DRQyQmgVW1ANKZ4rZLRYNYFv46KxifUJcZWfwYdZD99dWrpnyJ5HVMjrEx3oRd7rMEyDg9JKA",
  "key24": "4Sbj1eXLmDrp7XtSU75TPKEEe3Cf7RBVC5VuDkkPGbEuuo2AEQKBf1GoFAVxhp4Gif4nhvjXdRWGikp7zNzij1PX",
  "key25": "7FXNEpPcBTj8fW6jFjYCePbwdFEByD6xg1NyQNa2sXyAvfEoUYFNKTp6wFUQMmJ7AU4DERdN4sipogEVw8Jy8we",
  "key26": "5t8ULb6oYF7y7xPktcVn5TQapHjHjJUDYcH1gDXBCXJHhtWpFLYm7yzqi46vwYMowZu4aa5oXZb7HPkSDv2X22Ko",
  "key27": "5V49rTQNpdYqjKCHiKhUzUPkuBBL2YPEYyroVBmHx4kez1AdUaPWy36bRDrpWbKiNkYw6ekcLsHpNpRVZQjJeXa1",
  "key28": "2jbxggH2AjeMkpoEfyKXf8iGzRuEeNLUSW8MiWfVByQZtzqbHUadDsAsnco1e6myKLBwVKqvE59t7SpkuQUkm91R"
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
