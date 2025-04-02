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
    "1rQrs14BYiKp8PLx7PiKnNiku3vL9T7HXsbhy7pBmPWdexfuiYK4K7DxkGJH9yFgpRAMTc5kC4xe9mEZ2DhBMHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qDivLdpKRMpQfAqqZrdNxU789LtNQPwX5VCpwvjdkrFz7noWmDVPBvKkg9sxSYqMcNKmzoxyWcLwXvbNYVkYk4",
  "key1": "31mHabgSosPH7JkoLY1i3mnbk6NJTTMfrV6LJ2XiEhpvkGHyuJmfMxjsJAjCp5KTMbbjhf2cxJXXGUKK8LbLDdmG",
  "key2": "4iJcLNQ1iSS34GjYkDYwTVKuh2s6cxoWPinSvPkqbzmwBHUi2k63Wo9nshypkTULpg9VqBs8HzG8B55e3fvp8DFq",
  "key3": "4iB1W65wDBgqMUVUMt2DXNYyUCsbuEFR6Y3HyuyN87xxv829fVmj8YNxQZUQujupF92fzC57WYgQnei7QP2HWawB",
  "key4": "564NvxWssGyiw4twqgr4X8Rr64FtefnEoG2q3xvN4FfUJmL6V3cks62P3o4wveZGCvRwZZm3p1af98MKLDjaYQfb",
  "key5": "2ZgPo2qX87ym4sR7nA78vpjMBDgTrH3QjCYc9nUyEBGV4ohcjRCV6TWNHvz1XQvDU26C2Zg6uCMJLuo8iCHgF4v8",
  "key6": "4Y2g2ghSjtLxW5UzJxtcZ7ChcwbibXWEqdzxVfwSnQC5PNpikPYKTV65Y6swA7p4QDCjNxhfNJ8mAjfuL7qspzfd",
  "key7": "6797oapKhMSRAuEW6sxxYUnDycYypSeJddJDKFzVT9E5ts1dek9qdS3vFRz2vcrnSCEpkz6C7WSj6GZCK5WZ4bPE",
  "key8": "QDsPVwfYMKHQ1qqWMUFrefVUDzDXhZFmgU6pV9EkAJFZxKKk3danCQHGRfzBky5hF4xvCCS25ne9515BkjNk5tN",
  "key9": "Gn1GuSifxcZsU3Jjgw5CTrHV9DHzJvUnfBvhXrh6bwqA3B2Rj1soPARHkP7VAdgBktjg3wwEXEwV9sgy55PtsEy",
  "key10": "2pTPBYPux4qoaRwsPqNNJ7HumsinqTZqNmgCBUgeoYwYqiZJfDjEXkWSLXiWxVwxhY7G44WHPqg2c8hFp7jUJ3pE",
  "key11": "bN6w3rVkStEeNQSejRMEcAkJZ8MnnrUNZxmgUhi57bLTFPuasRoo5wujTYjpwnPHNx2Gw9uEi99JspYPnDnFUJQ",
  "key12": "3ExY6USZkAEb2xdApRtLNjLe1bLvggRqMWbNipeq4K4qWYTDdphLxPE2TVeMQ8tvHZTCrcRyqM8NfxQMbnA63pEX",
  "key13": "MuHYCp9uzsTs7DyhjUWFzPkyVDvwnwUkbCMn3FNxhYLY4wW8SR3H7fV7vnH4UxR1qAyykvWYLbo39MT41nEdvz6",
  "key14": "5BB7Uxv8JUaL8AeS8khSzG8wULY9xfebA81V36x9uXyKQA8GRdVHcYTc6nc3B9KXsYVPZZ1kePZP3giwPJYrVHkr",
  "key15": "4YyMnFK39Av9DFvvcVq93XJkeXxqxzdnvWEvVGkTPH2jeboSi19YcZXDpVUinsLFL1WdGhp3gXykuYm8zQYZoie7",
  "key16": "4c2n3C6EKZnQwXrjvFmk81JvYvmrrA1EqGcBFzav9791n22v7tTrqTarpxkek2AZbKYs6WukiYPtFSEQYYfsDmst",
  "key17": "3u7YAfUhgbYkjehRgqZL9HMWtm7SDSFmFdYeogeDrye5GQTGCR8FTxYBRW4v8qYens2dqoULXLZ4vGLExWY2KDDj",
  "key18": "3FHXxC2ikCWtXYi12UDGDY363WRNCXAzgVzFvSUb89c31g6T247ytHqoAtn1yaroBybLiqAHb2K2hWHS6pQKtVzA",
  "key19": "5Moddoc8bKZDUy1yerv8hUa4mradXvXSqVxyZ9t3vYmjy7UoGeCJ4PoDXRRedD5HYNnMrQfwSfLppJhEjmamraTW",
  "key20": "27J7WNPEV1WgrW6q1dTaphw9TpMbEYM1x83L6swGugPHj5fUuqfN1iL5Sj7J4BudZwUUoBGqQktPNxSkCxLdiDbn",
  "key21": "4Mdgq45b6dNwJYKH1RrnYxv9zS7KW63TuVHguH83LnrTBCN9jiVKoLfvAECb3jeWg6k5LbzYA2FV7sMpQRpiQmXX",
  "key22": "42Rnj1raZeXAPk1ZrYNL79duRJujQ4gftCVvVf6NfQByyW8vtN63xqBxwpDEun4WHFGMZgQJJTWBt8uAKfirfcAb",
  "key23": "5YZvVSFc5riVwzwfdAxV2SdtXr2thGcm6M1mBr2ECtFfHAhEAKZRfdH8bg1bp6pe1d58KE2QBUX6MCNmq25VQE3Z",
  "key24": "3hXDLuVSfU29p6MYKiybyhLpHbke4LHDWyPd41QcNhzMY2JfN2XW2moJ2xXRjWs2yekqHia8PxkrCqrxQeCgsV4u"
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
