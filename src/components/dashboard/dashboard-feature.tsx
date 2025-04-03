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
    "yyvmiL4wDWYZRgpEbgYkqyHpxCVymCFXAhpSjbyLCeDa3e7wYnbyR26NhRr4gBNt5M1Arya8AkuyPBvsBAjBpGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7AE9Cd5mxn7wmx2WSg1qtFs4XKbChd6yeDYN8hqFvd4N87Vxk58i1qiAkvQU8PKJGfFZZeZJ56aGqNCBPVDsbp",
  "key1": "LbTs68noTC3NLsrX5ZFM9g5epM5G6DQin738zKXNJRTYFHgLSrx1CEbB2zD11YoQTEkwj2eqVfpVWP8b9zVdX3n",
  "key2": "43MayDoi533pmLQXZDvinKgRHM1kMvQyZ9R1QSmM3DTpLx4YTXJNCaPyR2VLYhUfetPTYqA9gHPgHJ2LtJ1Gbtfk",
  "key3": "uJYcHN9Dppw4mYid8dmH6e6K62NCD7b2vdcDXHWbt7fhTnqAEUJ94ZJVV5LDckpz9VPGxwadtnYhb7CKoyvse8F",
  "key4": "3jvXiBKkqKBHTq7YLdtwpPcNfGJ5zUXQnmaJyNuK6taa4wWhZ8kEiAGuiL7qXhSGb9yrzUh9vqUrFCc7MMixZGHu",
  "key5": "2niHTwTBcAPe1yxJk6STQaKzQ29HeiVyaRsKQDsCCrS6tQM5NcYUfyCFhcw6TC9jCUwJi6VciaAS17nGUxa5AERR",
  "key6": "C8mw8ZZ4LnyZfKDtLVCWVxnSJiBhzZuw6A33xQohHSvQ2WLnzNvuspxTbL6HKkFPRQDWSe3sUSzM5VjsJoesiFk",
  "key7": "4mqMJg146AUQWFSjVDW9MsHQuG46YQCJA3K3VzkQxe7mVyvdsb6VsnNW81PHRWobcDcpYMsSYHcfNwZqgYS1Fqw8",
  "key8": "39eBqijdhX9wNJRiY7HVJZpNZc5W9UnX7fa9aRLAzjT6rPggHEkzpeJmAHCcNgrmgXCZi5mkd3zzwcBCu1m7t5np",
  "key9": "7g8zxznUznvyDgy27d9n1QyzwnD7s8cTsgHJASPz951pnE9ewq2JcVZpvYvdySXB3pBo2k8rXwr3UMDCLeSrcK9",
  "key10": "4EpR3PCbSW9S9cmCzud76c4b58wAarcTgpaJtXAPiagS9tj3BNwQQ4Cc2LcxxrZ2qbQbx8M5BMtuxzj9QPryLNVk",
  "key11": "jCAH4rxWXFb1XMxzUrHcBjXnutsmqTAL9MWpqmpz1159mNQzD449JkPHP35G635f2DwsEpzaST6YMxnswVA8XUg",
  "key12": "4MbFCpz1W2Qo7TcPex8ETm1cwbZK6CYxbBbZA8MqqVQiMJXudEGHwCVzroZ9wZceGLcSfy5nmYmFpCm1xHGKLCt2",
  "key13": "5Un2QVvoXw2y2HDUPdTyG3xypAViTgePonNuqfFksxsVPbrZUKn9RDvknHLwgHjcvi3zx2cGsGpVGr4apQ5b4XXy",
  "key14": "4uQXsxEeqBB9K3DgEyJ6YibbWFbZsKt9ug3Fex4RDCnfSon6HakFuvnBLXhWuu9bcf55HFUcDt5EhkCFmTKPQpam",
  "key15": "4JEozrUVK6c2ymkUXGQ8PjAfZNz96Kyj97mnPgGnFkWr5GqJgcgFtBJthmWCWhyHjQx9xLXXc8sZ7Vgx24ZsG6FL",
  "key16": "2z52pSg5jQv7Q8PpjA1voTN6UYgPt1PijSn24LZBJGPYFuCZcTVtkP7MePaKLJVGAZGebSW9KxdvqzpHqiZshExu",
  "key17": "2CeSbKwS9f3BGZXAvh7hycEcJzukAuyR5rpFnFQsitbU1HwFvpZdUXMoXK7Gsd6HiKaYVJBtyJf3USRpneUyHpqk",
  "key18": "nUgLfRw6NFFdHoaegASqxTZmzSzgE1xDgJEGEUDK5fewQcobFzsRhYKRM1HNis31CCdsJKfUbH11SRfwazohxE4",
  "key19": "4G5n8Nig393ms1WVwg5NCeiCAp63yk31EhDHCZukGFhinenRcWsqi3otFq7qFv4J4pGY8WF81mMk2QWXmqqnrb9W",
  "key20": "5vdBdWWvQ7wkBcMYUxGLZqhk5jLMde4D83eKDGMZ3LkEWfAudicGZBJaZuCSrk8uMA64aSSENTWoaXoAXPSatmGv",
  "key21": "3T7THoRkWGvV4DjmEFjXXeFrpPq3EQYnkz8EvrKPGmcuGxzyByV7jJvDaeB56cPxH3SKhTZ7FDyoRjkkZmUa4YGq",
  "key22": "5neiNPufoinzgtA15FqeExaP3KPYwiUpws5xoZ4QCxZBVzz9sB4o6frQ6snkGTXSw5qJ5BV57QzDtffBsDcRuVP5",
  "key23": "5fEoiSeCGhAQqy55zffGgCUGZHFZZQrKnQ4wtE37v7CuYmMJzrshuiWR8b5uyFBqxvQ4fznTCqqtpmyLWv4uqAKQ",
  "key24": "5cKcevqUrQx5H4f4vh77kmw25gmPjXazbwSKzF2qfCYbiHnScdD5RzoCGJYGf4nU2cKGx5ggt8WqJF5ZCeK9uNYp",
  "key25": "5Dpg9j3Jbb3isK53j7knYyGtzUuLxwjTKGPjbgzwS42yKj4eZFepZNh5A3jw3zJ8PxF3SswHt1DpfGRyN3q9aedf",
  "key26": "4K5cdUtRYebDgf4qNAmLLeidaG3cfL3WxoSmZct77HkPjGbY27pkhsmurxKwsyAppCby6Dr1w8f4mS24kCP99C7i"
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
