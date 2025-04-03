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
    "Gixc8duWa2T5VWkKmVh8g2ELxvkfySZ8KfW7SCDUSrUW14faKH6Cf6wgEAgFNpHK7Ku8oWRMyT3rzqUQDVxb8eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3FMFph2oAZV6X1W1dNfqi69MctfZi5DrW1wBbD5zAWgQNXfhtMHmzdXXfbUQhAmpnFeutdxgP8xrCUCwHvH5gP",
  "key1": "5fWnv4JWnVpj7rYgdHqYEdQXpK8z9jrEGCtGRZWLja21mcAQowqLt4jX6X7b7yMAzwYZfzfASJepPuTqC2pg2Uj4",
  "key2": "AHVGgD7APXM74xkEEzD5KjzdRRiZ5BWhKcC6GGbYcZNunaYTiGqRjgxxo3Am31rogVn4WrAtxHmxNnjKzVYrbhu",
  "key3": "63oNCusb8yub6SZCbSDtgVEJWPhwbSYC1YDAwd6TZs5KsspttviU6aSKopNmWTmrFAFvee5RAZkXpLoFL8uWyVLt",
  "key4": "5axdC2nSGihTL65z6Fzjwasceek7rxTeK1Yr5N98u1AemxaZwWTP98E6N6qiqEAypX9wrCwSY2wg6qJR9Mj9kscy",
  "key5": "uujf1kTjzHdMQMusVKqae4gLXGRh7WfS5AVU8wLwkUehdr8oH3m1PmbRt9Yqauy4jUEDsM1nCkZQZm2Vo6j4jKm",
  "key6": "28gjzyot6JoRZeokVbqCAPg25wbjs22pZzrKxc7zwPorcpF1A8WEBMHZzqKHFZ8rZ44c2whM53ePW3BvfZFZuB99",
  "key7": "5NgQwPNSpbMkdSDnTBUNZAEbu46RwksXDyyX8H5PSo9inUAd5oDRsTUGCPoM42dR7xL9TLjxP7wYeXkiTKNyJ5DV",
  "key8": "4BRYSCBqbEcbLn7oWbGzegJGg1Gdisiq5aW2wUoEg9ef4rpDDRcRCu4ZsqjYSi2QQqjQDw36dwVv3VgDyrmoKZh8",
  "key9": "zVDZZ89bcFzLK8y5JkZaZ8j3rKM8gnVU7V2tX262yMQif7w7HdPUasQqZEqg6E6StNhgYzKej6UY7SFkbx4yEUM",
  "key10": "3qnzFb3vP2np5JHheVfDebHUqHrbSdTmmuofkNEdX2xqq6CgGNrSVHH1zdVh7WNx7t5yDzWR1ZuYsRCu2k8ZoMSp",
  "key11": "2xwS4nTGtU6EA1SyD2DeGBxsWAVNGbY6dKBbyw4iB8L79jTnN928AeJT2pgGbgdYiuVS8rtKSKDZ6yaxUpUeKE3k",
  "key12": "2Sa14ZeSrpPK2amaC9e1L3JiMaLWT3EpUZnyB7LPRxfKhbVHXSmzkqp9w6GiQqTRdoBg8sdjrTa2ZvrtkRc2p3s3",
  "key13": "bp7S8ZYvGQJtbyDYzoPaiFBZbwVryrzJxFh3CeTZ2oHdVJr7eVvWTqM68MgGXfn4bRgTfmLUbfVTeemCB8ZM4BU",
  "key14": "5k6GvyH94xkGf97vppKsRwoFnjsiEsvb5UXymASnfcEgwfW4JMBF37ya8UjvxpiAS4pXaPqdftkBvLXh2ZFD7Qs7",
  "key15": "58Kwuew8XNSaF9r637zaicA5W3bv3cX2smSYN9iHYv7VyunT4jk8zpknNSsPoLRS7VqfX3VirwcWE2ERvqH6oynu",
  "key16": "5edRXGxXwKG72UzaPqDK9HBdMSBm41epGCprP8MqruWmzuBciXPxWz27Z2WD4VLa6aRJzeeVjx94VgvxKctRU19K",
  "key17": "3pVqutSbmzJAAfUTH76ayf1DLZBqq98BRcLj52opKaQABoJPJqX3A1ytU4wt4PxCCr31bJGsN4d4nMCcqjkjUTZg",
  "key18": "2WFAPih2u9n5bZdvnouXWkG2XYUqA12HuLHcmX4Smw5EA4A3WRxtGS68iwTCHhdRqfkcKwdPG14Dakhwrr7Xpvtc",
  "key19": "m9pKpNkmDVANfzTCqwnzp6bUvpkxHqbZfSTFKH77CCPruMV4FW1uzBrUaHpz9rDvgzaD7L2cA3vx4iaNcVniDB5",
  "key20": "ZkeYxAsrNSSGGgYggmLE6G8Fbda2mzKFJ2q12bN4V6rV8tTNFqgq2VbQAa8hGNVjfyjL4EAz9eD7BVBMR2EcP6d",
  "key21": "DWXsJSKFfpDqNDb1j18ozgqUXAtVCjo63w9awqtA8ymeGcxB5MFDPSvA1CUPSf7bGhTdVv5WWEsrRrsegu5R6yd",
  "key22": "UgQyUnTQJNfctW4Xb7sAhnTmHDoz1pGHFGqXs5CQagawQCVRdieDS5BotSuRguch45MXtntT4x6ikackxvEzgw3",
  "key23": "Nhh7MG3QdPMrwkXY9gxH7saQ1Xhg1DjbVPJmZc1xCDK53QbUbfXXQZWowkvgK1PPaX7Hs7nk1ycpz31qEihXxaV",
  "key24": "35fB2C6BWVxqEWF5tzmMVJK6jaJcqbwXok5ARaB5aLNVZh4Apk1esXyNp3MwnXWYBb2iRYSsifJDmffYWhhMQuH7",
  "key25": "5WPRQGV53AQym4VacVyFVje8KKXy5nk9meQHs7gbPhJXaSjdd1NpqgbMLPTwHpveWwF59M8bnnb7LjZhs1KGxjpc",
  "key26": "2k5H7r6tfmjx1RcqHegZ34i9wQXkKvt8vsQZaEcNaY7jbkvBJmptx4rcpF4xjEprtCppvjbYUgkErexBn2A5RgYb",
  "key27": "4dW3CaLeD7pUZnPDiSaXGksNvHwgLopsgq2dCYgRFSfsqoJRAiK3N77xbRm9sF6uJ2DvrJz4bNiBw51c7EjmFEyE",
  "key28": "33ygaZ4Zvq9cfBudEWqtaxa2LTgiDVw8mHdpG4jq4CudnNbhwamq8rd7zWFRUQATpYUcrQfiDmdpHUMT6DAX7H4i",
  "key29": "2ZrGK73oVYLrS6qD28debN4e5TYLzQLokad8U1zfmCkg8gQHj6MHEYgumoFYWhxNe4wfU6WFuvMTx3YWfNBWi6Xu",
  "key30": "2BYjHkgJdTFTxTN9dXw8rqixunjh5BbUpRXfZX87SESSf1p2TSMdmjBBHw1RtBLPvbW9iSzSMw7XdFXkd94TLCrf"
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
