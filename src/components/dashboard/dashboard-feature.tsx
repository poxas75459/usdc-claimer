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
    "4JfoGqVeA9f44azpcqZAdpupHuptFRNo3Geydfuyg1gKrgbPqJoYo6vuwTnetAp1a1Y8oqj6fseBiz1Yynq2GBiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366VKfE9jkVwrWAstDmCWRxEWXb4GWVDxQjeELb1HKCQEjzVx66kXG3ADmeeAfqY7RCUaXF7EcptbtHVbxoeXym3",
  "key1": "2G9CbraR2W3ZXugERhoh7fTpPj8J44BdqkYad2jMbayGAve7Mj23x8iXu5juDqKyt93wNEavVwwXkqRhSCwg7s6Y",
  "key2": "3Zfrmdf5KReHTmkNiUWsKDj7j2AVh4tpsvoFam33aRqgiAr42NzKvKCRGxBPjiTjhwr9p68Xd52KkT4kM8daBVb4",
  "key3": "4ahpVtBUWtQN4uonXFN6Y3CqanQinwMR7CN4iU39vEq448gyEkNBeXMSpAkqdf7C8LkTrpmt1SwegtaWWsVsDpq2",
  "key4": "5mNcFeYVDeU3Dhxo6DFmqSQTL8BMHRssJ5NfkXp7TJ5jKEVMp8ZMwwQrGfq1RACX3rAW6oY4h1LMAkhXSMpzhWQo",
  "key5": "dnPw4vYdd7i77v2cXAXjd8PQ8LFBVgDdDoj7TXXt9xveogMhw7pAopynFGRFDkg98vC1H5V8zZfRNkXSbBxdnbm",
  "key6": "3723cWUMvJGdmRJbCVoZJ5Xph4wGHHAqUqKLYte7VzH2M9b9oiLMMWoVipj6Er61BtsugQBGFHQxXQoFcoNgZGEQ",
  "key7": "2N1Pw3ZiPCFZdffyAkcGRFvZRBS4qy2GMvkTEVG9mrTgZTahRDJwsXcV8hiVA8HFz7crfVjxkZvBqU3xdgiMVPB4",
  "key8": "2MM6e82FKGBVSEzr3rFcmNhqWZBw5yLuQkikFTYTqnE8wxCJ4phrHniDLrfg9uUJFEm6CtNrYLtcoey8ukjUUQNC",
  "key9": "mpujJtPBsgWrTZdNb2sPBoJHTzNnehjJ7vWtxbSNSQ8xMrB4e46DAppBgEMPKGzpFTvBntj6rnTMFmKDjy71xZR",
  "key10": "5UxSwrdyDjnFNSYpYQxAVQrpkKTV8T6Y6uc8t6uZVFZYYB3B6S3A33ug8AfC5wieUhGnGyLw9tVjWFpCrnHxsPZD",
  "key11": "1SAAXR5MpGqcJvgYZCsfQM4UU8gywUccU3ZDuNyBjU7Z7zQDuWTiNz2jDcs7YeAZtobMNqoyLPdbhJ4XQnCusEb",
  "key12": "bcdKRKz1ZbBqUDzueCKZ63fZck44PuQwj5GB25cCG3EYgvxsnpZZyMNRVtE1mUneoZoLqLfmksCf6zn9R2CK2ZG",
  "key13": "Rm6h29B584sHVqWusTMVfaQMBSFeWcLFpwoHBY8g2rCiDEW172CvCb12TBC273zRfZiM29PGWstqzxjQpkhKzcP",
  "key14": "2P4c1FW6JdTw7CRcpwjDtjez9zG3H7G11q2CJJZq3Quzjq4BeP2vdmdQ4SMUmo4F4q443xLw2t1y5U6CYWF7HLZr",
  "key15": "USQxnT355CKQVidGbfKie2utkftRrCgZNVg142x8bZuaq5AoFNy5v5JRcDqF5prV7znG6anhwTtuBA1izEVRBKR",
  "key16": "qKcnyVjVPy7Tfqk4GY8hqdg4woQ1EMRSUwbcquLxL9Zxebr61antkVPy3AbeLSCf58WMxPEbc47xS7Bu4XPwrma",
  "key17": "pmLZ4yvWY9FC2ddpGZNQbj8FTeB4cfJjpZKNbFjGzDU5s5B7inb48chDgMufLD7hUJER6dGoyQoLoMriybsJb2w",
  "key18": "2sFxw1BnHovabr7kfHVuSJzumapQpqtffbSWeWeNa3yMkVv2T3HXmajAqLBAqTbVfa5EQhDY2j1qpjaFNhpnqYs7",
  "key19": "5eZK6QszkZZ2YW81SUW92BCtkRkko4YXY4BGpjekqyke3gtFLbFvyerQc4JE3VeDT8QMVuUGcEaFCG4KSPS65iW8",
  "key20": "4ye6VQRUQJb4QgkHsFMDmFE7WKym3EZ1uWQd84LKnr3tXo4WK2Yfhcdh5SeS54y1EdbgVhN1kXWBtTWSgtTvpfrZ",
  "key21": "2hQCursbesBTp3J1JodCzfZ9Pkioc5vHVg4cy47GA4dxNUAYc8XVKuL9HJARqQDA4REriing17NMNdT6qCUnmbCT",
  "key22": "BJ6q4FwqBZb1WMb1ftxrtRWnooZHL2jUpggb36VTyYBeq3HnHgC949hKSgnuLnWhQQGNLgD1U9zMZk8b9qNtJg3",
  "key23": "3wHqn1cCiFXovHf5xerzHrUN25pRDXnkYrTA9Zrfp5rzbavTwfb3jQ5H5hD5cYB69Y9xXstZR1GfNgdQ3EtwRem3",
  "key24": "4W6UqQRz6xmQEv53kW2U3ZgNsfMtodvAvYSwyTXdBx8meYWBUnoNMM6bsNcKLJrJ35F7EW8jjHjbA9ibKXUnG5Xu",
  "key25": "wm68C6AvRyPMHbF62fKLGdiGrXxt9tpKAYWrosGVbb72JgYgrXL6TU1e9LL875QLRCirLJn2dFtqnziE1iaYxta",
  "key26": "5GycfsFBn3N98vGLvxL16zL9hhy9uTd2vxHvyuponA1gULFKVrMEMP75tm8eaQSQbun7xqnZd4CwHxTgrS6x9g5z",
  "key27": "5extyZU7Q76uQDrc4EU3dgEoiJ4MAuU5bsNeYFCSvNWBrkirEsZcgz78msGDWRCp14gxvz6VMS6nAmz5EMccp5ZG",
  "key28": "2ozecvywJfp159WDxyNFTg9Lt7yqnbePGtj8cnvXhVrn27xWUCSWQv8jxN7DsuRHo2EvvsKzB65xUzydw9FLHpS3",
  "key29": "5mZr3c7GgbyDhCzYHPMaAq6iJUwFDmjjJED5hSq2zwh9iQMdnZT6FEWJjdQkhn89WY8DjapaeSD969jjYXJff8w3",
  "key30": "3oNJHHwzfE8MTEjoqhoMT7wB4PiGqSmnULCHvmUt6ZUCEau67tZcePFvJKSYNA5YKUQ1kEXaad8tgDvQrhssGVJX",
  "key31": "54EvfQhQDkL8dLGxvT3kdnFELDYZwE6QG7e8oiV4cEBZxThYskA3vRDyqA4oSEGr51pyZRGRpXM55tyqFhVDB7yb",
  "key32": "4H4Utk6UnJowWJWRCTRRyRQ9eABjyPMrnGywHB6MrJGaiccHq4qDEbzQkykS4h9YNnRwzDTRAkuAVqEjNL4UN3TS",
  "key33": "3CthnMzmaB6bJkDMxPANWeZBZds68BBrKf2c1Y3xPcDjmhuWEbi1RMp3umuFUv58srmxz27ZJSGfY9fx2Bey7QF9",
  "key34": "Gza92uQpguLfm477AGFdsKfmNHMMyNfeGonvcDHdwDqRQiKid6UbfN3AjzNzcjzqB56RtQMBZKDi4QBxM5NFCG2",
  "key35": "2UZtGdc3EiswWm1C1Pxc1JRVqeXLG7gJD8VoxNDAYi5cRb1kJXYZGcH9a9wDDT7NQc7NPh3UEAbdNyRA7ybHcsF5",
  "key36": "wrR346wUYNVbf4RWovTCc1yFjkSrR9YSDhiYAUbkoW1DYHC3Du2pGh3scMpicyLT9eZjyX9Awr592v9guZXHK8d",
  "key37": "2GAgxLKyq2D4CEE8av2YkSroSfPhgvR2jArJXDtwzfZySoGrrXmzWfCm7RsEmFZa7UY2hJmXv9aK84NaVfz2PD4D"
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
