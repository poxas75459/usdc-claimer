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
    "2ZgnRayVnTRopjgoVb1pWB2Lz8dG2xcY2N35REztZr5mFHn67tmgqPja6qQx7ySzpeCfrEChprKXC69j87QJhckb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsVV1b652dTvFaKkNrZcFtzJjXEBjQptYY6XPCmb1Pg24pzqjehSuiMg6FTCiJZjHaXxEX7Jmpwv1H7Nv4ziCaV",
  "key1": "58q6NQUqFmPr8XSsF9fGzSfwhG7c14Pcx8fZnUjBeSqEFJNQe43aL4wpSTuUHFRe3NS4dAExva9wpNQtkiytSeN4",
  "key2": "3iXKvpAk1JLdkPUD5YhhNqnwXiQgDj1B5ULE5BUded1gRCp3NoDMXKnD1otBxYjEa2GjihPcB9zTRyfvnTeXdCxY",
  "key3": "4EbdNM3DpaxVwoy2zkXKMhB4VveDvtH43WYYLgJQNyyHzD5BADFrqVNAWPkJdSRnUGNxsGvBP8adUmQKaSWdYNue",
  "key4": "3JWdVKgsWaezBoSxp1uHPDAoGJ3qH9NzfMsQ126k9Pzp5RUnbdu65fZJZS4N3auYYR2L7jM15qgPjbFC9QjXkSz7",
  "key5": "36VUh1iGUUFqSv8ySU9RUCYMpcZNZxkmfivEjJLZCxRqTTuRYbJw5exriUJSeJXsVa9XgkWc3ChVLUQjw3VkUbdi",
  "key6": "fffMyjBbJpqEJnoTZiLccj47f7RKUi7nBGux6xMvNUSAAr5p9MwSNmfuoFsKhgaPZBQ87GFSz2Ji2siWEDZKcf2",
  "key7": "57nHZ2Q9yjAWZ5GXhZLAFZAJHzLV138QWCt2czpoAbVMEfbkNntt4JUxKUxpKAx53pVy1pJ3onEqMhMoosFdDsLN",
  "key8": "56xK3u5iDT5DCccHpVADZgSMrH5V5R2TBD76YyTCci7T63RvNC9CKMxsQ9AzSmUosQtu7G4cTQfpXucgjwKjWNRK",
  "key9": "NuYK1x52j5cY3WUjm5MHUGdjRMbRihDmHNZuddHRfnuaQGTcjEVFErrYEgK2r7rp21VC9hYYPHszNrEtBmHh6qM",
  "key10": "2Gi64nDsQt89xdumvfoXd3HX5AFahreCJASCKt22Zpz3DRFziCK6EeAYJTKAz8SN1KmpLtKwp2ez7b2yDoxfNdRz",
  "key11": "5aC9dLPUoCunLmHQSM4yFFbeZvd2tffNCtwJ7kebrQWwc1cvPSzHgdSzsgssDNWRz2H6BncEaiUB3tkocWf4FdeP",
  "key12": "VZuxQ5zzEkDMT7GS2eJ3q4Zbeiwzm6rjFedE93mkU5i66eKfv8pyRGFR4ooUXuCvXitJdgbd1uSJQaWg34KmfG9",
  "key13": "3mf5qdmZ1fPcemWqrWWG9EBotnS7yvi5PMBAi84tt6z1CHhWrFSp4rv5bWhba2N75Jc93ig9iDbrNoHo9tAv4LQi",
  "key14": "3uXt6VAc9KW3dkchznjaMiuSGdPq3hQoG5qsdboMLn9N9C6h5UiGEtCqkjPC6WdLR9CMesNzYdwQjJgb8GLottVp",
  "key15": "2xNJ2HwYAthRoxetGFHqVtHDgF5t2JU43fyYthNrk2tv9gTDPh49veEznmEqNTuYTfQXjFjbKv2jrKJD93wV5YPP",
  "key16": "kLmGm9RYEJnGnpvuiPJjRKZM1vJddGjxeEVjoMpBDNxmA2H2gtmMiFMQ9e7fJp5rLcfWLjeT33HoAeHcFNdSwq9",
  "key17": "3HQg15QfiWg8H3i9PeaVUvrw4hxNEgvSvoxZ5P5shZ1CiiY76UZ2jiEbpQMkCcAqJb4gJwtJdGxdC41fSXTh86vC",
  "key18": "2hX6N7Z56fdpENSvhnM6QRMWAS1YAFPK1WsXpVky1E8EwiMDqQ5rQjpsTUEAuGFDXKpywdQW93JEk6xgr6RN7Vtx",
  "key19": "4Xdu6MsrnJ59LYz9CxeDbCYLkhAjECynmAv4B5cqwtm5egjgXBfUnLabRsVyZdsvbKXtjDnPxoVi9KeFStMV5BsL",
  "key20": "EqfYmPm3sxwg2J4thtZqqEBf8Mw7GpHP97XRs5ckuiVdRYGJAqvtPa8YUsR4Zqm59qxt2HjTGGc2CudDKKD97Hq",
  "key21": "6sbPZMb7AmnAcbgdsc2QndndPokpbXjPHcv4kiuCSSXFHUnivW9FR4Wkk2uns7kAX6oGu2NK3Md3sna2ZaQbLye",
  "key22": "5x8NCy4tacU3YuB8k7MuQipBd5iwGi3CVAXWQhSypEec478dAevVvHo19LK8WLqU9VaH9mVeUzcfisj867xAWQrR",
  "key23": "4gA7QcJWoU2Y7LjrZDPWVVPMPjjhsE4w9irJuUyohqse5dMUjwCVp4FQYZrkvCWmP9XV5g9vB7F8maVnWTYVnrz1",
  "key24": "umwmHynLTwxinWCwkugXKvQMW6uFddj798Y3EL1GtaiTht11WVA3kK553sykUqEM9FNRdXnRbGAh1bdY5eHVi1B"
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
