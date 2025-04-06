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
    "2dfg3EhojFWJUQGNtAVMvnMNqvbBAhmgwUDaQ81BtZ24Sdy2EzqfHs6wpbQbumwNDv6xPFhZkwByGNGZNWds4D7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xN3wYNYGAjWWgm5z1zBaEKCAUBFHGu7QEQb5wEjn4y2AHLHq2Y4dX8Q1PExDSta1hHqSJ9V3g1wrT1LXPJ71Bej",
  "key1": "5CgrwhmtAAnPo6aKoQYyBQBzBRqB9eLxA2eC46e4uNbFYJTMdpR4rwJZ6tM3PvyYhLHXibgaJNqjATsVuBJi1Zhp",
  "key2": "2ZoCLRQ9KePn9HjEaoWVyuomJZFonb5YrvAQjR51Bxkswh31MEsLNKrQStesHwvhtHtYMeTU67UTh3aoxH4daba7",
  "key3": "46qG8mMS3i2UAC8QBndXjVTkinFG6thQvnpXdJWQHG1CEpimNspMp1L9tPhi758Z1NBX3vZ6bAvtTjew7g9DXPN7",
  "key4": "3W1mZgBDgQLsyTsNieQuLdcEVLJVeb1LvGwiaHUnmLtaw77GJPToKTqEezh4JLWPs6ZwwC6rkttXYGPP2nVXFjf6",
  "key5": "5HgKyPRFGnDDVmHb3UFd7qwCNqFrzes6LV9PVUZzend72ygkv3GyauBByhngVta7zQfLrUHEEhuvZHx7F1ofcpPQ",
  "key6": "4yJHbzfnDnxA4CyWYsSi9FiHvHa7fZ892Wpuk73sJAH7q5sygpGJrQAS3c8kXpJuTUTCDA3d9NxQf8DpJjQ6XP8K",
  "key7": "45DqEAZVRwqR4CPvZh287zs5kgrZPwtidkkY2DG4u6CSWZiqnavLecazF2g6YGJzXm5JFixNgG77wGz8CZBzWNp9",
  "key8": "2zExas8rUs6chx5GiQo4t5erjKXaBJyJKk4TxbgVX7MhZztrxCPfPsANohLZLCSYaynefxP4oLZq9Pk7tfwQSYYW",
  "key9": "4nLZe1eBgVrYBEE36a3KXJc7ognhz21KFfYFaJvVpV3z6fi3zbnYUDX6R3Mz7paiAaVn3sNMRqCywHu3QV9H9Tht",
  "key10": "Z7fJHFgSc4RGDHqpfAUDFArRgfvsMxQJaEVYiUkHtb9pbxzrZRfLuSh8dNfmqcVyGKYprTNgb9hvdMCZCAVwQ7D",
  "key11": "hnmWxpTJQgf66YmKwV7SkAFKR2wjzokPdpZdbj61FtVgtQQxQRZ9vYje4cDAss6c1iN7vyqNymUdeB5RrXaWUzy",
  "key12": "25YW6t9jRp2FYtdxKDMBZq4hX9WrkVJnutPteoWs8pZsBhtrgUZg5okfCmMa9Ms3G6j8ytS2KQDo8p5DcgJEMZUh",
  "key13": "2CnhWQKmcoGaTqszNCkEemNZQgQ1uZu3ux6dUfu95GSdS3YitF9a8MjwWaA3DzsEPbLZNZnHbASteTr7YipHwYny",
  "key14": "NY8cxfkz4N4ugYHXCJFP5nsKdqatLY84RzddPUMusn15AamGTdjjR6zpW3sQkh7ohY2ST6UhNMEjFLa8aXch6ax",
  "key15": "3rzg6D1YWMEAsSbV8xbtmuTyrdNmRZkiKmTk9AKdF4u29M7LaAKjiSzRjw5bsXHHNrC4FUTFgUMGKZSBbdD4qgqs",
  "key16": "2P4chMzHze8shtaGDLUAfvKjLrQUjvPad9Z25YyEbHNtHxsrq7r3gHaRBFuGDi2HxVAUax9GiPMkgbp8C2Zc14aH",
  "key17": "2UgScdsCsZm14JLE9bcNpxm8RG5UeizoqBGcFiTzic6VGXhp1tKxxF5LdRCKtNegXCH3gGA7uRdE8ZoD7QWp4WnF",
  "key18": "5k1TYihqcXjhFyMimFegoVcZoRMWZkkqJNor3d6C5g5TxFEaWzHYxJt99vxQ2Cq7RKxP9y7VfJ8Vf43SY4avK5fQ",
  "key19": "5ePKbJ5UZMawZUrp5MYZ1drEDTeVFtpRahTmGP1u8CUViJ6Y6L3U8A7tQM8oYhtNzSYRvAeaJkAgpEVscRshYyuc",
  "key20": "vDTLtkE9ZTFa51Dd38ZyoDzqQ15yd6Ag7mbB8w1BgMdUYBHBes94MGL85TrVitnNVHfSfYDiamkCyNfDpXFBYLo",
  "key21": "26tk4W3B9Zc59ezN3p9TB17FZ19kPFrAdL2x11ZQVMyqXKkYCg9uBXQmoFGZGvNEmbURaZEG8ANr9aAzEUtVA2mm",
  "key22": "PZY3MPs2f5YmnZ86rJ5Nfey9S4vx6xsjavLJeGsRBAjxWKF97nFq36e4vkfDhfUgNFdDF617KrKtn337AFEje17",
  "key23": "5SrVASrdBpVm6FpPg2vC9sGqQUQmEmCKwRp37eZ1BojHW5pxn8Uv9Tvn5J6w9QFLUgL3Xs3NZeAc21pNmASnaHfF",
  "key24": "3x87mdrtER7hcrdMa4z4YwnbUwFQLJQJ2tvW2ty1pfcjd6B4urX5DCTXx9pb5n78dBDQxYEyn6LzfffWCeED4tN9",
  "key25": "2M7MN2imH5vwJpjasF6k7mm2tutuzmZX9HN3QCroau32FXRUdSekXdob4k9FcTrKzC9tJF4WPfnUAURnU6TcdUYh",
  "key26": "4h5whRw1qjoiLG9WZgCzGeVkP9ghT9zVjBHzbdoyLcZYZT8jBJ5LKzFkFj2tpJtJW4CNjyN6hc6rGViwybfvah3Z",
  "key27": "2dTQP2iQZLr2WDCXA8n2L6rGc1vLHJ5t133DTtFYvhdDPoQGKfd6Rt4s8M9qD21txqH8SEBeQvZH4ZGtet8p7rm9",
  "key28": "3xXGJCFct8Fdzt64jh5yNpgWXap4Ev3ZMDzJbqvRkskzcgjnMA6SzMokxs5ttBQYoFChD7T8YevEGiAp6wtzJHqR",
  "key29": "ZchUhvRTwMHSSBcxx1JLkERqsi556DYNK4wfmfaZdNKeSZeDYVmSDoGhs24LmURcZStU3tRUoaYQVVdmFmDqthZ",
  "key30": "4VGjo55qjHHpELACaUZN4GyjLEtfb7b4gT2bYJfD3iP7P5zMuHhmhCRYt8ibWZjgx6p2L5jH8ScT1EvVxbkkAPw7",
  "key31": "2ZVFWnjiPmrp3vcJxjYkDetGiLBvre2P3cqBqZ6VTcmSbBMxnkhKiBNdH46PzjwUxTH8n6uM4Phv8RLQQuU9HaAf",
  "key32": "5hYFVjaqvAXxw6U8LV5wP9SrmWmBZQ1zCga54yvquyUeg9NoZnmjZg2VNKF8XgeuwJTha4D3zm2ro9z16TJvTrh1",
  "key33": "2KUnHtZ7KqT5bAFRzpdq6sm9XpZR6LNEVaQXAgpqfRjC6P1cC1zAfP7hf4SiR4p6psos29Yjh9QizSADRkC5uovi",
  "key34": "2eB1BkBeigUrWaGNzjNWVtjLsZKsLJQpvM8sz6Bocb7u3LzKkxYriPE5RHgqjeoZNv29QLB67YhRxF3HsFwgGHLN",
  "key35": "3HvLXjSUemDaPpRegTmrFQ2uoMnV3C7fykS42hCqmghwxfzvPkUxRDRYcXstooTAuvYXGVh66gmK8QUWyMLXSHXa",
  "key36": "4KAs9jmkbT9mBzk8xUxKeEnALfT8aGcoX9V8U9jCzP9CDAXFEBTb1VRrX11ESSpNmDN92a1uLUXitxnhEdKp6qSb",
  "key37": "42wSR8y3N4P8GN3uLRtmEZQJ1CzvZxUjwhkLDd5SAxWC18hDStSL7GrytNKFKAkgRWHGtG6SnMCq2bTKgASHA5hQ",
  "key38": "2JMspXE87t5DZP9CC6tNbmQeawwwNMm5ghqVt8E1PxdCrdrquzo1HFSFPK2u2zM6DAKxQhujNLqvbq6doCmLyKJc",
  "key39": "vdGD2EZju5SweEYqgcQFZnHFLn9gmiiVXbHxaXPwP3oX46r4VpcKvYmzPPyttT3v14J6w9VBRNtgyukx3uoteCM",
  "key40": "2yjKZ7JyZEcxQLSRkM8aimas8eFhs247QZUS6SZoTQFg7JRTfgr12mQ5zRb9cjCzCmoGysJh7mhzwz6J7CLu9zJb",
  "key41": "4BTYCEc9uhWc8QyoMhcnJRPdiKyX8namBtMwHek2KftJQU3C7bkbVKVTQWKFyG774B4n1r9BYVABpuc8ywx3fnRc",
  "key42": "3mwYVr7TaTqJhgAXFXKYtHzDqvi567g6JdEqqkniTUQhX51v7czX2uBNNTi6JMmz2gRp5Mjgu9qCqt51cddkay69",
  "key43": "2rNmtAVSgxt8FdejPGR7twzkwiyvXJr3PMnC5q7ZQL4DRkEXLLaaXbuAXzLZSvoKHvPs7Y311JuCz2tGP2gDneNV",
  "key44": "2EksnY2XSAFkfz9KSg8nXdEy2o8N2ypF7EvKLWXkrDk2BkEud7ktQFZu7ibG5WgMsEsZ6XGQgvWBu99tTAXAA4QV",
  "key45": "kPH3qJdD9F2nrad12fToXJKCenBUjhvgWMDAAFjoA1V5pAsJjNvAsPCtN8Q36WMCEp2gUBRQzdjrzv42N6Lewa5",
  "key46": "4Xjboj2ixJS4Q3GuJM4VxJD1QnbxXFLQ66yqgNiy3Thp9GwZykpRTn5ubSGsy2ky2ADxAdqUjxtFtREukzsyekwk",
  "key47": "4WQnGRvaaNRVYrM78TosbQ9xBxrjD8ze232VrvLdZcuue5BKHyEgrSrwJWhDbDi1LKfdGdNNYXMtKY3gduHn19As",
  "key48": "jZX3ymVwD4LLVGsGHnNMtguL52rsEXNAyGk55MntCUoCG4uGX2qLvCX5Mh166swHhLhohVjLxdU1JS31E1ykdSo",
  "key49": "22bAomzG5uHgHGZzLHkYMAQRsPrDfiVwcV9zQS5ZG9dw5b3VQamA88azn6d2eaQC9k17LkGeo6wn65SFXcHrRCET"
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
