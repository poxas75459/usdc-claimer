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
    "zmXkYhuYTvNPapE6fbCjyjfjECpvNZvTifzpK19pEbKeAxpncjTvPQhfag3XzgeQnWM9sfnx2BqKzKMtcgHYPvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGXenYirVAUkvoFWiRV8hXYoPkhuovNiqMzrQAKe91hW1Qt4khdTHASyZ24ZoJn8ywQSxhedXQ6J7Ger9dtGwGd",
  "key1": "N7Rs6VSs7HJXwRVqory6qjbSvY4rf668vuFCPobQ64druxjH4bHHgU1WTq11Vz52GPDRkk4RYjZwbzgAgp5XkJR",
  "key2": "iSxL65kzvVQ6RzXgP2WbDHx2tRYYv9imowogXkihdCkrpzrwvB4iJQbjkJTBSCDyMiwXmR6nJuW2Qff1SNcYy6K",
  "key3": "Zy2JyEGggpAo5HrZnYQXoWLWz8KhWjWY4PkesE6VjGMBhn1JXVY3rvvuMrbfbV9aWjCqyMkx7tXswgj1HT9LW9K",
  "key4": "gp2DWVgMwQNLdNuXohFhjH8Whm686buxAHqSjQUMy4CoRFKv642xZLfRyUHdmhzPJZPt98p3bgQEggo6MEqBhcc",
  "key5": "3iDiqHxHwjK4wJ3G9x5XTWjyUyVkAc5ffrDHZd6GZ6HrqqvJSkxLAVjLVKU8pYqGhXt58hx6EtjqBvJ3aBNbaN9F",
  "key6": "4acLWpKAMEvVdqWZ2zaC6ynr6qFje93z5fqkangn5FvSkzxX3V5Q4exDCsUDTj3DKssPuNqxGep7tdwy7cXnAwjZ",
  "key7": "3bCDwVhfYoLW2ReNXPjHWocvxT9HvReoFJ24xFAPpsZXav647A1ja82S3xsTy8VtosNte3CreHyHKHtPndrJLeZJ",
  "key8": "4h234Y6vp7C6CSPEUBHoxhi25r6FLRgnwFGkvmHk9MfWEG7vNdHPhC4BHnVyqtHqDgK4AXuKCbdeXnhzP9YLs7n1",
  "key9": "3h4otjNtBpPkb3VdFtpQY2KxmNnTvkqB8nedzJhxTAHJ5PMgbjDriPfXsNyem9XrL4NEk9CUSiKb3Yd6ZV3p4S8C",
  "key10": "2ugGnkBdFciEEz6nD7s2kvDERMTU4gTVksqpZnwFJNfqhzJ5WiFMxZUt3jcKcfUxMRo2C3R1YJjgHQ5vQLFV9ThW",
  "key11": "5xKY5oNTxGRCZYZtEdZXK1xZ6aPnDSzyMwVZtyoiAzXNVZt84zWZhLyUgss73Q5Q8QzWEZuo5bpxwdZ4uvX2fy2W",
  "key12": "2pTece4NDh6MF5xjs8Ra6tMcXsBLrDrqjgj6zfeH3i64p2vzt7xHDYB3cWUdZGoJ6MrCfUMSCirfpE7bEBp9BSqS",
  "key13": "LW8P8Y2a79ipeEvTcXRX6xcoJ75BugFzwH6k3GCWX55fJcAsvznEqinixRr8YXCLVCaUs2baBMgZwyRhE6Kyz91",
  "key14": "5wwVxn69Rtjax7FhJ6TXpWagzEr57NUsuP8sXACSKPXN6gHzdR5U7cmbq6AT9SPjh1h7rnRpsfPxPNxduGUmyQmX",
  "key15": "3S2s5oMe8Xg3LVYF9D9hPYZ1ppv659D19V87VKs9tss6v2VNEXCW1xvMV3azokTeTbcYHALthsyt7eCXUfm2Z9g1",
  "key16": "584e2jQdGEPKCPQ83Gn66pdmsEg9Q5FAkvtMaeTdkWrsusAHYEjtq2pAh65Xpr5wu71NZm3CVzPSjKD4aBnubBj3",
  "key17": "4VZLC4dLBg2QyRGtiYsnzZ3RqSqZUVSds6BhM9uMptX7ueQUBHtwrybUnfHcCBEBiRyNqPTHLhWn97SyrvcfGAbG",
  "key18": "24d4Sb8qX5WSCbcvaFnhV5orxtrZvuXKJj1LJPYepBXMu3p3GBkJYvKfk6jm9EMaiNDmFqhrtGYVyszyqK3xdY7X",
  "key19": "3tJwJTtsXxzFkjpxpi1GxGPCHofDVe5qCjeCviWEJ4dPQwXXNVeZLc6J1yN93HcsMyWu3xvpiwwU5T2jFPbSNg4W",
  "key20": "2vbVgYmWUiUbFxD5eWfeWQpZXSLybhUKSurm1YT4P4bpLKfGNyeveJyvk6rUAHry24sj6Dvxs2n4GdzE1HN7LBGN",
  "key21": "3gQHevEoQ9RFUPJvqrJP8HWjVqU7CXQNKzzqxkghFdzuR9Ma5693Ef4zfzY3inGWHBRjNrw17JZLLEaqjMvsGLkK",
  "key22": "2JA3JxJi2icieCK13HDTNNmZDfgzipJw7Gum9tUGxYYHAMycze4Xmzn7XvMFu7uEMm4x23tvTQVtzedCmWz274ds",
  "key23": "YpgTnBQBdtEPqR7TkqJWfmS2pQ4hDTfvJX47UkG2BcVnCz1bFn4myKjFVYBA8bHA42jzU62kd8WoguDhQnv8JL4",
  "key24": "4648JfbeFF6hNfhRnLK14WQmAz5Xr8qtg7hNRBG6QAxY1U6gqp8JwxxtJmurQZscsUf6DBcPDkfhLxbDRFyHoRN3",
  "key25": "2mUdTZ38HeBKZebHWZqWKqGbv8imU4NmdjKN9fBcYj9Kd2XM26VGhxy9SUHVX3RRTq51JjJn8afQ4i38pTZVaVxi",
  "key26": "2tmvPBMydrJHnSCayZwW4H5hUXZZoYz5cc7U9Luc65h6VKzkHX6vvp72cMETbbWtGJyah8hTitDDCTmKpQUPt4iu",
  "key27": "nVdrkfazWdqPG9v7eriTcWFTucjYUGm9M7hiXK6NXU72xMPMXv53tuKc4HMXaMg545EBKCDoX6X4bkFoVrcjEWG",
  "key28": "3yVYnwnCs7GdG36NAyGMHNSMqb9Ecx3E5bWNmd6Rmc2x774vQdtkocA8DJgjS1jLUMbrDEUxQqj9iLKTuoSa1mBb",
  "key29": "4gStH6vMFRXHspzWEmdtjh3MBoVcWPAyHv3SAst75XcBeNuY58AM6NVspHJPtxhuBHecACXyLnaki1GTSVkaoodk"
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
