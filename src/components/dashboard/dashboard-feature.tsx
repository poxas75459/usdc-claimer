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
    "5L1os56GsaedhYB46w7M9BLrR6FwCukH3bBsgULmWWo3j7TqE41U46wKPHPFJeTc1c6gJdXBD4Hf3VWnQbwYvaff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdH1ofZ9qS2fXB48LrWdiK6sQGndcDymdyQpBU984axiK669XNrKgoV2gFPh1pcrRwzJh4xe6cu9PnvNQeidQ6D",
  "key1": "4qGsRxTcuU6aZ6DkHkaXST1rR65nGhrxidWvL8u9UVVBsMG5DQGPreVB597mMi7cXyxg7V8u4H4su3kYN5WBr32v",
  "key2": "9q2JdcjeMKK6MhrXztmwUTt33JC7HDNK3QPpYiBW6TnPmuvz8G5HJsiKRZRZhSsNEUvsBs9gDNSPMaxtLWcEg4G",
  "key3": "3buSiaKSZw55CFJ3GrebsLVRd1EwaQwNf5u3hGYh2FarLnS3ULx4BfD9H1yfmVvnDvQsDqsTtUFAZzexnPybT6a4",
  "key4": "5D5hUhLgW1sipkWiV9GEBda9ME5L1QE7jjj7F68Pm3iTjQsGHAD4FxHB2XDzShbRh87tm6QaZcmCxpe9fQE9zjFS",
  "key5": "4Nh8q9nWdvd584KNdjBJ92eT13WUBSHLgf4cAyCWXaRy1qtG62iBgRu6No1ShEXaAC1c2NZm4EWV9uHuEyrrzkzn",
  "key6": "47ChbuJWa5hyNGP3mqwUuk1gSdNAdShS1xKwSqL66xneTir7dJsRGUJvGvaRXpYLTBhE9H57dDZiHDYnfKFPCB96",
  "key7": "5fibpGcwjirZsuzruc38wYHmsAtN16bb5ztzmwVdMJW9k7b79gQLrUa3u7eq6EtHMnVZXCbpwMnWqN8uaUc5nmF8",
  "key8": "jXhcfwN2zM3D9YJfWNgL3xX6uHidEetKDHL7sDGAHkpnmttxfgQ2ZG1Aza4fM7tvGcV3nTFxZPaG5jPP4dSJjW5",
  "key9": "9seSXjBEnj17hbqqvS1xDzn6m3dUWGcSF7b2yjpGAYim4rH9NnnXGgHHda9EA9nDYuiozp7Hv5PjyEtXbG9nzpY",
  "key10": "4EhfPR54SAYwsG8DDBAKhdTuLP7p4wr6jfdjr5wbJDrVbYf5DpRbSVQ3vtgnQJCmSkZWG5SgAkx4b2UjystDo6rs",
  "key11": "5dvQggc4y82jqfdUsRUEw8uhAu4JPiL6B9r82z8tk9DVpqVG4Y1DB9HY1n69bFEVfVz5Qwj58Hy6mTBtF3avuedh",
  "key12": "51xvwNYmMAiusd7jAwXKZckjp66TfQuHtSvoNsi8Wa4zDCuNu2HU8AWKf8ABZpwy53SjtdjY4EtnWxzH8d9UtmQH",
  "key13": "5VqvymZRusLv3vztSF6592ZRPkgHeQFksW81TJ1cyvrrbVzufPGnukUDexYbswNRfgwo1Zo1VxYVrJKXyos4qPBq",
  "key14": "4HmvbVQBBRJ8nEDYBHszCWyJujJSreVhDVqHsEPWeQvupnU3H8KHTDBmoX2VTp7LaTGgibFZZr57kFh49LYwpMKb",
  "key15": "x4yb6r5q58W9YfdviFF5VcDbSVGzGhRrcXpG9zMNfX3T3gKoMkF5mFMeRqUFgDbpc9mkFwPBxnx8xE77fFDNkyA",
  "key16": "5R37WXAB56NGmQLy2NXe6RiwmxAtrLQYFHUL4FLomsTGhG2RyuRX81LEMuru77ERmkKGHsqzQmRhy3dj1ViiPHK",
  "key17": "5uaJk71R9KMy59jfrrF76L3fK2Z6qCgA6PGSnzihvjW56PFNydKHVreY59HqScRUoBAfMeBvUGbZe3gHYFcq5fy8",
  "key18": "5Es6DyFpr7JoazMmwXidDC1hjBhQSre2WVkRwgfz7NmTTumMEqB4YafCUH8wNPqyweae55hpBWeNPu6rp93AUTrS",
  "key19": "3YvJXu4S2aVC4MD8iQnxYSGGfbaPWf9CiLDdyWyrGFKKp9ncbBB5fCizPQqo2qiQokXo7koknZ45mPh4nxJxNPjL",
  "key20": "21azbRJ6AqsVJ3vijphGhCCghdg3d2ZTKYx74sq5mqkyiGqYToNWher54prevtywK1RQQyqWoApZwJxEdpWHG2qC",
  "key21": "48RwvjqjuM11qf9BwzzAH4bi16tiY3jGseEAt6D86ngTwQHaD6njNieVguz2HBg4JB8V714wHHLbvn6tftT3hNx7",
  "key22": "5GybQdYS65pyHh4A3zZzXyXAEhf5LfJtGhGbQqLpPYmJUFmV7nHuUk5oy583c8RWXRfQvLdRwLETaBremgNQeuyw",
  "key23": "65tQ5rNniZgMkPgdMAjdnZYP79BpegKboqW3QgRW9qWRTM9dh7CqL645BPrHxVzxirDh8CDfUj8CChwAz9fZAHwg",
  "key24": "5JoVTLymAmTfNWdbDgkfGC4VQxhzbKXyT1QSDaeS32ttaQZj9zWAaJz84pMfKGXVG9kas5p3ueC7DEosXucK6Z4u",
  "key25": "iywUxZ4RptKFUdUAydMC1x89Sxspwowm4gNJtp4axoFwUchPM4XXdNBtvnxTa9QrVNLn4zYGXcRdmQVKEXLNBrM",
  "key26": "2LKk9ZTB3kCNGtuejFe1nhUV7z9345hY5tccJ4C5XiH7dcYKGwoSm1DNjid4H2cPJZTkPcMriTmTQXAjEXaeW3hW",
  "key27": "4hD85fy7pdWPm7LzbdVgwRWxt5DxHEu79H2K2FR8yhy9wRK3y9sWRU5qxeoMAERRzTaURTY8ki9wvmzwxE6BB1Ts",
  "key28": "34KHkwNGDHqq314vyPWAi42RFev67AKY7P4eDJ8uUoWBwh9NVhBn31rQspgB58Z2HGMZt6idZCXvtxFSMVvP1vu2",
  "key29": "5LgtMDpVec5gVvDsj5pBbtifb2aoyKtxaBRWv98VkBeQ75F2mFTw886rUzhJLt6sgkRv8GBXXxsCqyLdPSDWtrBN",
  "key30": "5iY6EGs8P6Zn47sZm6EVybQHtZSoAKpcALrMfayzYcSopgoiejgY19rNBbMhVGmwr6kyK1hyRqJdbCt5Tn9TK1ZF"
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
