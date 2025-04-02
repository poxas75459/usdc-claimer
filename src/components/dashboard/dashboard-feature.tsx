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
    "542hAyHYfRuHrAzKSrvvNNqQBe7H3TpXBBfhqBhCvytAhdFdnyFJMrnPkcoBaKoTdTYb4uAUykEKBt3NLyY5NRsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uvdio8QJaX6Mx4GJgBekkEEMKfK3KUYCSAk8GMH9RE3MhUFDmFbHycsk8pNxtnqWTGxnZFMcsUTcAyHrJJHR9o6",
  "key1": "AFZK6YmazvnhJFmZxaTTfz9wsGeE6Kt3Akrmdd2uWrzzqGmpXapLXXC1FwUApk48DiC559YjptnyGBHoT8qh795",
  "key2": "3SJN8xLXDjuSWvyisHSZn4DgNwkitW88TobwVrmFQJTnUPKkfjZWxsUGfMS4QxXtPPiCeYmn3RkiJu71orJ9FWFY",
  "key3": "5c8KAZ2ypneaHgFvkCcJkVMYtgXRRNTLtd6P7WyKXp8rdEti53Tv1HegaEtyTUDDi2SvArBEDzm3YQQj3jRUFrNt",
  "key4": "ZipCw7iL1F6QT3jyz8Cn2D2ACDMxXg3dCNKDRgsprEAm9oXGf4Rs74MdfZ4SsEvZACfkXkPigyN4U252312LbGV",
  "key5": "395d7wP7rvvYyeek1gsSoFw33MoT7a3CtnWfMqsBCfBJzcPi74jQLrudWgvdoXQoDu3SAV4Hhf8J84hPFMuVPSFH",
  "key6": "31zUPK5agPzHcr8ece4AwqTivBaKYCiyiCJqfafWHJtoDxkazEQW1RLY8RCV3jSZ9n2uATohT2ysYvkRMBCB6vCG",
  "key7": "4NuEMraQciTcGBEBcUJaiBCssx3GJJgpWeagVXLbk5YkoRWm9uc68eWfm6h4CHP4UiXQnNsszKqJEJaKsLUaTQYx",
  "key8": "3oa1KApv7MWoe2z4iymu2yiuY5r9NuZ37urnfFArQXjBHY41QB277wMN9CnPknzLEiWiyq6zt2gunzwS3wS8PUzN",
  "key9": "DnSZSbrmy77NCj7fd2H3qfVRzrnjLA3m2aYXFqfp9szrBrUGu3iTUJ4gPcoexMfDc1udG2XiRuJawHnmVsbUwpv",
  "key10": "4x6gF8MxZcYBzmWXWYc4SwXjK2fjNMKR7xmWoD2hzBi4S6ZLcN8KmbYaXakUTT8ciXvwnRs4REYgdQrzrtYxA7u3",
  "key11": "FUMMsCihZo46HznAo2a9mtt3nVRHN2f7xa5h6mzP5Ae5jda2D8T4fdbhT1EvxphptPfBJ4SqFfri5pRcf1wXyp8",
  "key12": "27rn9cGGzqyuritizWMHV2vriEGHc7B36UxFnrgHHeufKYJPwgnHtidcfcn3RNyJN4mrb4P7KRqBKs3PkYrCq8UA",
  "key13": "2DFqpEJAgkrVFManH8GPrKJfnibYgBc3TsUxW6JpGpcWnzN5eDY6U8aJq7WdM5UmcQ3RtYkv3Z2NZZ4s9XeRn72H",
  "key14": "3pumiuEG6quVUUUE1J2aut7nNV2xMNezur2BSSaUusmhcZCfVFPFLBjP7r9JztbPJjH4uZxwEikKQ1yV3rvwxaWd",
  "key15": "5b8roJGv5E4hbkzjgw8Z9AwZNunrcpqvau4KRkTeQAzaSxyM5fL6WBGALPfULzwdk4GbjYBabvtWhMx1r3d1jUCM",
  "key16": "64FB4kYnkM5rsWX7E4ALjYVeDBwikW9Z41PYBtvERsKVkUbF2P9Y6g6Wu5i31WVAdzx4ALK4A1poVRt7Vef9vezf",
  "key17": "cU4wmWC35Gb9ecqwzqaQUoND8WjuyrQmLuibAP2fGUt7fNWPjBwsia7to3REhotGfDdM8ZAVPU8wB4ztES1M3DB",
  "key18": "4rdgcJ24zfDU17RnvMpdqotx1RjBrJduGpsLVDRqjwwSZWxHMjsUK4a4rns548DTbTaNExBSDJNAUgPH7AhHTwBY",
  "key19": "5HzGTLTPuxzRP1PvpbqYz3WSqwpVnaUVqYakbTQAhHTbcV7JA5GweobBPTsUpNBVvNL6SyMMxSa1ZM4ZML9wLS3k",
  "key20": "22mdgPM7qMWpSeZPphkBhJiqmE1bYksX3sFFGuH22A5qNqgrTqDsEFAGweyU4jxeTx1dKvLwtLiot2MzEDG5FHBi",
  "key21": "bS3MJTUaUWDV8YLm4wWoc9EpwMr3bf94DoTndoMarBS7iE9zSesZefXgPNYLWicZAciQ4iWqyrexJwFYPntTCuH",
  "key22": "6BgNhEPLy4MyeyF51XU7URTo1CRkozJyuRHBcNmWQ7H3QEwnV5jZKbPxoGWfvH7mcbQ9uvnvHNVrdD44LpJbZtP",
  "key23": "2RtPEpwJcaigieToCJXWdetx7eXkLstEhHrWNxv9dSZn4RzN8Pn6ZkgbBgbSqd2ukc9zinWDfbqoa3rKJ454wn23",
  "key24": "5kbGn8UkWJ2aRsWstSo3sZAQri1j9PBTuiNwdBwpbhAquYp1AjVXanRa1kMmaiD5jvHNAyrNENXfKXr55CqnLqhp",
  "key25": "3VpUyh3L5d24pYCy842DngWxFWi81pP3ViUeEtKTfhUnyZBin1DnHkshH49GYAWMgCVh7j59Wmh89hZ6RR8nM1VL",
  "key26": "A8g1ZvtrRq8n8tZNSG2dKEKvivbBRjocTXtEamNSicHL3hm6ZN8JDTc6HbrrkgnPxBfxDFqdMysqWXJhVZdFZK8",
  "key27": "4NDjt86sV3AaLVXXFq7v5DWKjYXCs2DhSBxNATKmtUSD5VActXhcNDFoZGcmSmz5KQ62gADbCieMMwLsVVZJdDg9"
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
