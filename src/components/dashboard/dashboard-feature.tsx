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
    "2d2AkqvHX5VF6UdhhnfqyiuiGsNJHmUKbgzd3stihU5gzYAk4NgXCH4UvjMS7YEyMgCC6uSmbhVtcZJgLRtqYyaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXtpQ1rHpUYda1sswGKHNCZ1fGi7k1BNbiZAazzDod79HWemZonvc2EBZm2JSLED1u9n5EHHVFRNBsLmWpfjPjR",
  "key1": "khmcFfmFyoL4yKqYPcQKo4BDQHNprtBcSBBW1x1FKB3KaCW18ssv1cCgTLmV9ia3PpU5xcftFY5L2EH71ZNH8EC",
  "key2": "3JHkMoHjUi4rDZA1y2yQ1CNJj7op7eydt5C7RFUUS7otzRforWqtzgAa2P5qb8xrd6bBnoews1kQitZpLpVw6fed",
  "key3": "47SJgPEQg3vNKms4jEa9KAtSqBSQFwXKVmCUSBfpRSQuzqE3QutiLbTHanpbhGNTfjmb5VMc9CebQrud8cvS5DTo",
  "key4": "5sTjH8fr8Zu8P6Hywyf5mKjzMkNp4NRkgEjG7rQTSWXEDr5Ay9uwTvY45pH5qiccRb5wDC4wNJekSq479XgP2KoN",
  "key5": "UKiQWVmstxmhBiZgXPx8xBsGeQiMBUh2MHzGk7xuVAFHJhDvAU6gLKVnFqdYK9UwKSTn5AX9Curo429YzXxfEHZ",
  "key6": "pvqpDGNxrUFkR8cExojohRmBDf6SVPySjADBFw4yueQJga6NqV7xysXW2Uz2Z3j3EhFbdLxcyVa62GL81K3mqqC",
  "key7": "2DQGGM8Eyxsqh7yP7rHSyLvsG49bw6wJdZM6HzfidK2PSGW3aEhGD6BrHhD7pjZjufcgm2UwNN8vfjvRzKLGkLsz",
  "key8": "5kcBQfvKfHBJbVSEQ1Pw2iMupCLTa6JuT3E1kZTMNfDoLXovvW5pG4FNYBYrmHzdE7ahGVagyS5FY3hZtvJQ5dXC",
  "key9": "2R1rQ3Nxf9vQE2kXyvTa4naEGdTFgGP1W8knsPSZKmwiLH25ERCn5E4jJFb6TWSxoujWLEbuKToPauMzPJskqUGR",
  "key10": "2o1PpdPMr5NRjxoEc3pNd2onrrdCuW5mX2fQm6GpRV3TPPxDRoRPk7feWJ4AfuJLahtGJuCKy6srX2VqApuy1yN8",
  "key11": "2BacDZGEo5Nh5fQkrZuGWZwEJCTjE9r8NCUBP4TPsYbkhH3sDhNpYq9SdX5DLFCAvhUicBQo6a6vmA29f5eSh9vJ",
  "key12": "4RaLXjLi9Th3vmi4bH6AQvqfdMXzz3zMJH3dvvYWfJECZ5tSeYD3DKJnDGkfi4cXuNPSiMeX8YkfPDni2fX51pHm",
  "key13": "3wweBWp1WovkR8w6dEBoQ2FoLYPipuTPNNL2RQVEJiU9Bm5wHuxZLCZwx9HNGdmxnq2YsjzkEvgbSG3eLp1KPH5R",
  "key14": "5uoMQeCEB7nfdbaQ8hbnmA3g7m73FK2vyLoEoeu4U2xmpcnWBed1c2FEPDrzGEjxi2bnbwreYjczmud54tz9diEu",
  "key15": "3cRi4ZDwavTGqUnJaLB1wcvDpb2SZUsZByndNskPtB7wrUgNGHeZPLGEpSbX8aiF5FWmDy9EcVY2p7mjDPGZ7S2P",
  "key16": "66v2mAD4nj1DU1nqnJFNzZqnHizcZqtdFZPUcBBTtyhzqVca5vF1qBAZ1LtWzRwBDD7J1YeMf4CYCETxKx8nnf26",
  "key17": "32A3jSQg6o9GRJ4xgWK6fb4jEXvpTAME5yptZ7e9JKckTmZdj8FN4mV2xNqGgw7h9JSa9ze9aNbhmH1wRRntGwsG",
  "key18": "3o69PDVnQkq7Z3GRVQ8UXfKrJYM1onKqPHpb7XniEBemPikLynAndX3uiUCmiEEHbEnCZw5cEqAjjAUHao4jWWJk",
  "key19": "5KJDQRxtZdLhh8GdmrdcdJSGJx3TNPUWL62xVZDko4zfjNziiwzAxLSjsjeAcZzYzdMTVhAdKD9NHoQpj1zb3fyj",
  "key20": "2pDSWUvKQ6MXyYMjJ2f1KHwn93S1zytwxJcdUU8cRiFw4qsUBvH51NDpG2kzLuqDuZqknL3fcfDDbrwZstkan9L8",
  "key21": "u1rTXkPDFoSjLqo3TCFAgB3wMd6yyWxWqHmVn3rQELKhgiNBDfsZK7GpPgcKFi9yz5gEpBJjzzdLFC9ha9SF8ai",
  "key22": "44U623t9g2BdBBeWKDHEmHi5zvtyC62egkuCFGp68cUTZLpAZgfFChp4YjM4uwTR31Y64EpeK8mXtLfWNx8tYByW",
  "key23": "ccVMCKKaEJqsFnsrSLqfWJWSZMGkivfvywg7fWpc68nKYMHpjUQXU2y8vKMTXxQdbKqftEDBbKmZxEzUHWPbfVP",
  "key24": "S9cWxwc1XfDiAhoJjQy1jhXP6n9xQoaK5Xsu5HC8NJjT6Dn88faSTn9ZeaHkLzkinkaH4ieRpDRrdzntAP8h4C7",
  "key25": "3wsUGYEGgoytLoViQxZQtVqEwWGerU8X79YaCDcAonV5dRH3GsQpHvFkGk8Aeijw7LJe145vUgAWrd85vh4acpnG",
  "key26": "2PrMNWvWp8hDNafkiYNeqoCu4m1V5ZVCwUckuAN6pvgLyqAV9YeUZr2ju4jPFaBQjHoPxjGrXKvqRDnaupDoB2SQ",
  "key27": "2sfw8T9kQgzSYS7Yq1ttWcwo6HjtERZD2edQnBXoWrsERch5qEoj6Zq7eRHfh1BrFpVURw5Cz6j6GqiEkaRBCL8v",
  "key28": "4dxY1udWfZZ9a99PZLBe9yZpc5R23STZUhiaNgrJMgHk1gSGg2cZ5aDguTAn7boNEb44EHh8ZSNQbUGdGJ5HLNJC",
  "key29": "4HYUTRvBcJfNtVEzSWP2bhwm4juXeyNSG3zvkz82i8A3SCrWdwL8XFGKo1vbXxf2BxcZBFNDKig5Hs8ELG9hZK7i",
  "key30": "EXRmqr8sy59BGcY6xiSD1SzkzqpTMG68VWCUmY2k1r5qkWebhz5RmsGMj9ZeHSHwy7Tcoy8jSCL9iX1KxRLTMGH",
  "key31": "4pwjDKdW8QC1ZW9EEgQ2u8hA3VodAxT1uArqrBPR8tu1ndFRKZvh4fwJvaTY7Hv1u9rURVQ38ZK4u7TEyU4ttoEo",
  "key32": "4yfu91UtzRtF8Jj34vaxbzYbbHQWzDpzJJE1XrBngCZuajXdoHaF8HhCEcwtkJmwQhMEFwdXZxWQTdNLAahWoyTL",
  "key33": "3X3ypNLjhZa2o3g1mSHikv4j8ZmvTQPmVWmSBvhiF6ye8RaWxH7cbRKkCczS1uF2jisFC1Umoay8t3NQAKYuGLiP",
  "key34": "3ZMJFGiJHgEAMReAgWy4AMCwJYiLHybNd7sXUHWdnB2AA1fERj2U95rjVcgAiTwamSyaVNbGJ12ETW5MBSo5uAFn",
  "key35": "aTrcEAPPzFmrtub23fqCubiz8b3kRY5dCHAkg8hhBHnSJPSz1A6oiMyLz7E62NnPLD5eKPunUH7M4GcGU7znqiG",
  "key36": "5wc68mBaBZb6NKfsbjVZSotAEFdVChCBnqsT8kcu2tzkuor8efQMbxL9HypqcTmQ8jugV5AGYvkxsVGf7GY6gQik",
  "key37": "64N8utkt9ajEw8RMegQsPDNQbc11jLeCks99VZvAku7FAAFdGmuz6BFr4b6YbAWE3PnXfayoKqRM1AmNmGbnfrAo",
  "key38": "3eRNkazDJqBhMLBr7NP1HsUjuSthJ6VxWKtCHEBYYpsAYr8T7hjMr1vhEsKPVrALaVuM7fwmJNyCk1iY7BRoX8qT",
  "key39": "4JhNFvQzp6k5MRvymSaaQc4etbeU9sJTZWU2h5Fi6kPYvaRccbvrMEKgC21VoPEchRJ7kj8i3fbzQSEWGX5kyBtE",
  "key40": "f84yGkSx8FqkjLVhVt1CPu7KbYJRzSo6FWV1WggJgJ2k1MKDZufXUjhm5Mbq7X84RWUBn5oEuDuP7bCUPtngjAQ"
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
