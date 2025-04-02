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
    "5b2mmQFWYJr8FzW9RzSDGJrvVBBiwdYS8uUKWG4WL5nBi54C8o44wMV8EZNS91srg5dc9mGDXm4yUm8NWWJ3gcGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677VLNj6NFbF3xtByqkYU1EQpX1qLLqAg5iQW9GS2SjjQJUFdFL38YmTwAYUHARtohuvjvC4pRViuoJj4KdZEE6g",
  "key1": "65Vyhs4gpkjhEENS5S3xiDEHgDvvMkqiy4enPtVcnFxLqpRKpbBYdzcop6YJGikGxxfGdy2zFDTgZ7pci4KvTYMw",
  "key2": "53xeacmhLjcwnKT6BMXkPTEMHXZgJbq8854NtE6nVu1EUzKtkB3n3UDQcnKxNQwzN1fsyyfAmp4aFHUj6hE9urVg",
  "key3": "4Zac2tsscbXsWgHnTjnvg1DkvH8bo8GHq8se3vg9TzjsyMxRkk1gegaSnHdEjyo2QLu2Lr4PkL7dXnwg5o2zS4nM",
  "key4": "49efVr8hQpUyCHAt1X3c32zEj1RA1ATAhzMjnQYS68LAdWiBKwByv2tYzJNrKKLDgvbgpRbJt5oenvRLEKZTGA5h",
  "key5": "5U5yVKh1TEWLJ2fxnfBu8KArjKYtDCgrRdtXqSQ6okGzhgrdS1CfTrozUeW6JbChZar26ka6Lzo7xuzQCs4m8VJy",
  "key6": "qTbMtrL151XuDkzMKDkxMXj6nBDujPKgU8h9ZTVRghLod5wZUfPo95DsqsWX4CeMZ4abTAjkQw3hGUf9TTQCoXt",
  "key7": "2D4WUcq6XHUvRMmmG1WAdgaaX2y4KeoNVAhUxtyVtuNn8NYfeU7zDF9ASSTKqcDB5J7trDkeqAjciHWA4ETseqLi",
  "key8": "6seNCkD6A7mjhzx4W9crxwnq3nmMZDTsMNMQQ9UdaNvvSokyqogzwiT7dSTgiKnVPy2p11Eky5S9u4399hyUT53",
  "key9": "33pMcWHSrG6zav9PH3239PUu49DUXJYTon5RLtrhJzfMDbBsryTTAaTocDTy5qibJo41jE9DaZ9gyz5LBMm9eox1",
  "key10": "572nDg9FrCDQQTw963i2LH7sL6YqRPsUtAssu1SGwDDGj5ikuDzgaTxugJp2TmQ84pud4twpkFym75sxMFYgB3vR",
  "key11": "3LhANS626vvMDak4KzL8pUJxwqwz7m7BU4XpxNR1iwL86TUzqpct2APBqC4L2xd6YcioQLdMDL14HHvevBpV176G",
  "key12": "3fFVghpyjbwHqd33HUSft9AF75ehYV415HXKs2bV24dJyAnv6bQ81zyrhpxWpVMjkvPpUQcVHWa4zNNKpGexmMW",
  "key13": "3QRLXdVnQkjSkhasafhuWz9ohnSUqW9rW6XxUXssD6RT4EjZKqNYLQiiUMZabVMTQbn8wkfevwbU2f5a5Yrg8sAL",
  "key14": "34cLDpWmvZxe7H4FNxY4PR58NFcQVKwkQzUgFg6JvtmRSbg6hNS2et1YLSSJPx4K4tSjTLSMmGgTVdSua59T8V5E",
  "key15": "5ciuxMZwgjG6aQmhsPZzuwevpW8jCpBp2eRAMxisit17p8cEJX2pYR84Vwhsq22ugJScS9t4LXefeyFVRum2YgjE",
  "key16": "2txnU6bf1KD4JGriX6txx5qBiJAdVKTTrmsjgVxzibvv9wrrpe6A6Q5vBBMeuZVfH8Ft58zZESRJ36KUDHoxvpMG",
  "key17": "3nFdThmA4mz1D8CHjbw61R9iBz1EJk6piGfQLvCEZZFvWcYKk9USHeBVdFGbwhaBgQAeLhqErqQyM9fFUfnaVhof",
  "key18": "4d3EVzFbrFPhpUT7GW6H21cGesKey7TM6JYsiFCFnLAHqvN4gUyhMsCgUQ3iw5NNhBpVdzZHDvH4GLEbuZveYAUq",
  "key19": "2V5jRBz5xtJSuWyrn55KLxak78NSNXTgeqTuFSZfa4U9UGiubw7wKQCuVYXyDgLUZ5UhbyPMasbYdAoEouWSc7m",
  "key20": "2TnZvUhQj5jK6LUmscrv1ShJtyw132hZGWyCcbw9gz2My74BF1NSTQqsjWG6yyXLmvwN8bigZGZifCpCF1TkSfCC",
  "key21": "4LQxzocXvNMxJ4HQde5Crxt2B2maSvxVkzaxHBMNozhwSM5oF3rAH5chQTL4QAG9c9KkE4vCHYrCBFzPtgwYmphw",
  "key22": "5R9tCofsknFs2jaRUfhBkTZDwcaLxrPx8iyNeoFDqUD8wHhAhYFcYSs1oZW2zG5JbghTtnPnM4zbyHHWknLmKRGT",
  "key23": "2CwMR9biqx77rZk3nJXGW8wQKbjRTfeLCYJvb1PrHkohE2zjeqx8fWYwZWvjkVZw2SH8AqPe8mR4MYrq4vaaifjS",
  "key24": "3M6fa4rWf4gqKN7dCtgYdr2kAR3f6LqGUCemvKWH9d91WEMs3NWCm9mTxZi2Ye1nxURXC6XBmeMuugxaZk2PXTUh",
  "key25": "XyPzfAdV3BwXm3rE7p7zMfFVat4ZaKHLN6z1w6m3Thz72v4nmL4J7LW54YWp1RHpy9V3VTPHrW2ApGaH6hSegMo",
  "key26": "47yVtCU21vp5AbtfNFG2tKzQkw5tb2y8k6swsfgRx9mFihrjuquw7197PAfuDDMmc2hwJGL3kxRP7C7khdZ8Qm2Y",
  "key27": "2oKawvsfXg1x6szSmT8mGVBqZMY4TjnKwrv1rFZDM2dUhMAk6vx2vR6MDfLKdCBfrCJ92a781pgnGHcWm2qpqjAN",
  "key28": "4CEeKPBCQWmCxswTSxAetzJwctkyzy4A7p3eGunmhuXHDmcMySwpNyX83xs61jHP6RPAgcBFSJS6hGjF9ibtw16T",
  "key29": "2VADbyyXoLaSETvii6CLkbUkacNsvsy4LyxzXtDDsgF8PxmkMtvEpwsTgjkM4ukJz3zAC23xWpe64DWqneyDydkr",
  "key30": "5hhPvdNMj2qYvCHr39nTWdah1BRQcbgUAiSDPmnkGRMJY6dLxPuWYRnhjPJiGor7AsgF1pN3TqeSTmd1aES38vHq",
  "key31": "3qwEas9hWKKr21vk6uYGwAMbx2dEL6Qv3T8V7XkHvmxxFdoHjzzE7QgBPucKyo8RHyyL6kZ6H13wrVzVbwG4sLe",
  "key32": "a5CoxFFizNtSxeb8SBAPdtBt6Dc9u5zeAJf5JiTjkoAdT8v5XLt8EDtMgDGAX6iCRrH8dUsp51jq9UnyTzBurmU",
  "key33": "4swvi8EJQnRWX5avqrGpEHTqZLV6kkZva6T5mh7QPUZ5DTVf51kV2nWRt5ym1zmoFZ4hgwrDvFD2zaBEDxECVJoc",
  "key34": "3dhCrEBmGATivV2YuWdCVohwKCaE8S4d4CasspVzo9jzvuxBbTwb5NSZ923BMmduWnj5GRuuC5J7zdL2nvzzEtDR",
  "key35": "2YXn5SEqiYHGX2Z6yQsbFXfKZ8dQ4wBKBYAHBt2q7bfx6GTQcV7QPqmEzmdadffQXY9vJGoENrefq4jr9G9LLSN1"
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
