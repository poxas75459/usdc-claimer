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
    "qoVS89ZAN145dSF3YLCynMSNWacJFiPYS7qmWBUTfonLWEcdK3G7PRePoVEYE67YEaRbtHKYYgC6x15Y4z6ngBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3AwzbEUJ2JCHfPnPRYaSrukqLPjQ6v4uFPrjLUHDS9Ye7JntmqTC7joxurY3YBkpaExHmo1YZAppV6XMFZtzCU",
  "key1": "3wv9DK5nFcCiuCkssjJws1wW9N7fNGJP4weMnRixfKaoEw5gZTFKX5yZQMdpbN8v45L9W7P7LSX2Cr36KDgq25bf",
  "key2": "5Th7A7KuxSiak88nUZG8zp9RuPoB3jscyb4tQWhQ3T8pqE14E8qnxmiheW3KJBsRdJuhb1DwMsU1gy7CwZr3m71t",
  "key3": "2q8z5eT7ZynfGyZLxJ5VNGYVousoHvLv8goG6oABTiZgswMozfkyeYJwNqiWsVgzXArwbT7B71mGJNEN5L3kPpjT",
  "key4": "4P15zuv3kBVkmuhCKZbEkP1iFzuV7GcWeAc7uRdMVdiMCsq9vika5BhEfvJ9kVxtgMGXUZ3vsbsCJQgk3DSJSBL1",
  "key5": "5BNCph5kb9R3Ae2QyNepByjwaBAP7ozoZBL2bKe7CaUZ8MkuYBtjkfFxce851V1aibCXrxpL9vzAzmXwLYqvsAdz",
  "key6": "5Tyqe9PTrzzT8mR635JbKxPGDFFvgsfKBUZse9dgPaA4KTWz3sahpvomdkvaNMgfNNHCrKbyjzdkUQbvU3rAqpiH",
  "key7": "K9VgZTAJfh9EW4UNC2bxtihBJ6utQA6uEy8GsU4qZW8zGKpyk6CCsRN1iQyTjSyF3SDdp2jCRdqtTBAhsiGtJao",
  "key8": "4h1JBkcMaXC9MZGyaj3Ts6aNTqSXW71LAFjFn9iQ5Hd6DbaaKA4Uwa7Sv3eN6yUZ7JSpipuRiP1sUksKUKDhrHEw",
  "key9": "5svkL7kGjxRHjwhzCDw4ZfVqtcuh3eZnjgDK6jBG5rpJ1Ax87kii8MKC9sJNMqMu2rk3HTYXBzaEhRGAVfDqUVhg",
  "key10": "yKCbTtrzH5AgFbxaRyPDNg6YnwmtmFsUpFiqcatTFJ2xRfmp24crrzNa52Km3n5Xvsavt54Kr4kkQ6cDFUpDnjB",
  "key11": "5yVKZJZh9B1c35TVpCqqgqHYMz8JjvkcSKyDykr1EjZPXVsZS32yLLm3SwxsTSSTV5gmi5XmdfjfzzeDdvedZBpH",
  "key12": "32o7S2S4HN4tiYcqAxQYXhtM4RV3zDhrNM2jHh6pnTaq2DEd1KiRnCGszstYF7B36agJjTgyWrUfqn1JB6CM9BEh",
  "key13": "8bHQ9h2XYrKKwZNTU6MnPtE3DevAfv5EVFp1biLYZV3kMM23rPE7UpUmTfe98X2srAnWcu5qga96DCvcd3dp98G",
  "key14": "5hZSFjhFgL8Y95FgB8upjK4LSvCgd4pu8suSpuxogR1wEP6qPkFApnszRSAqRa8G4EnjUPCBcEk2KqwtUhJh8Yho",
  "key15": "4rV4b4QBqxTsMfXpdVtiRni26qyGCvQxfVs39Nb1xMTFeEaoSFNd99KT9DS8hj2D71AjgpdM28qoLJrTcBMVVueP",
  "key16": "R72uXpdx3iTfnWcJ8ugGNUNidwzWFgJhbxRwtE9KGGXPnpyHNX7uwYUdah9SPaPmkNc9S8jzEu6c34WejQobtHp",
  "key17": "2JWgaoeCp11AQxqiS4z2NASMES5Q8pGhCEuVUzCarwvvuJPiTUX2fAXqVJiKX8HHkthFjan7WE2UwusZVepiLvCn",
  "key18": "2wmcbvuEWmmEdre7AEaL2ta7nuJxXmxnw6NgXFm4dvkSXBgwUaeJYWMXmZHf945wBuZABs663VqSDzee4W2rvN9N",
  "key19": "4ykcvTUwQRBo33LpxynccD22ZCymytkNdZacQQA4DBJby5e55CNFThidSij2P8TLYwSgfGW98ciacQDRCPKLsoTo",
  "key20": "kXHDGispLYdu6UWT5zqCud8cRUYBSgxZy7AHaCGk5xtL31bragGCCr6cxbNjKv66FiGQTwTzeW2rHaPVdTaW6RN",
  "key21": "65rWuSY7utYTVCuaNfj23WgY8598wv8eybzaPUJVaUES6Gv7YhKbTRnTBM63MQaBhC8eFgmTbFmsj8SxkFXCiZZ2",
  "key22": "5WWvk9ZhLdP1eAc2PC7c59Jk1eRnzNE55uw4RTQ4W9ykzGvk4eoWQyqamwFJ2onp3RGToetP5jFYXjxYyCnhR8aR",
  "key23": "3xPGQajddhndqQxvFQUuwMXpYogYwUMCewewQPVFwZRXtSpCwi9LvCT5ZsVid2zU52mq9NXd9iKM1GQ437H855V2",
  "key24": "38CRQnX2Jnq4C9tvSyJssWbS3vchEST1NgdF5Fwa4Vfch2be1g1oXGSRwAnkLj195NHvRqQLgnCXh6ZC6bNHiVFc",
  "key25": "4kbxxRwjLggG3ywcYs7dJuubRZQiZh2qULgwaKf3mQR4WAdLtbKPpL8WUqvfAZ6e5KLBupikh6js3aeiQB4aTHpr",
  "key26": "5BeZ64DDjdQ466PbkWNyDTreKZSGsjEnQasHdwcHJuEgW2RMgxTLWEfy7FHD8NJu8q15ReWA1uwkZedeZjPJFZeC",
  "key27": "2PfEhXLSPEV9QUXZhkE9BaQECT4ZRR2uRqX1vEyEdvSz62TRwLtwgQ2JBgdweTEthvtMY6Rjbwsud5eakxoUPizB",
  "key28": "2KAFroMCxtgEfAjAd5bcMEZj6TbUagHiEPvFJoi2ktxtarqUnRWVUy9Cx3nkrw8qnWAvKmQF4mA5npL163bTJMAt",
  "key29": "pR4tjDwHt3BNsHV43aWEk2H43SRW44euHDMaLF5mfG4aTftdKGfX9KSqGkCvv4nN1EWjEkrX18xWQPTM3dHL9sH",
  "key30": "ybvzoChBPjdHtAGPLR5wHKKhtePnZeZsdqtttsxqmkDBhqAWTxcr8GXbj8a5Z9GAb5iDuQExeEqJyC4XVJViJqX",
  "key31": "5xUqLJXeSztXrTP3jCNHKo9B7PDHweeBPipNzdF3h2hF57npvgf72zEHCwSsxnMAecrs7snb33Fvyomz3nWT5KNd",
  "key32": "26tjN7XyZ57aqn3vhWLmdenPp3xy4p1dtPMkH5eHKVDnLWqSYNuy25KUPYnZjn71hgJwyRiCAgcc45s9HZwrvYKh",
  "key33": "vFW5QV3SUuYoHoGKbyqTHAexYL7evU8appegDm7L2MKTEE1GktGoPX6MFMg6GQ84y48pi8igBZsAsCDnJkrWTw4",
  "key34": "5ydSwrMvGSasnX3WJwxrBuDvzbzDP2XN1EMqqorxRBnW1ZBwSPktkeLuBT4fiyuWG8PBPrjoqsZUr1ELWcarMHuD",
  "key35": "2giXt1RJYsbENn8hasVTTjskeyysG2Kka51cmMh2sQwy8bAEpDHGdVEELw3ciQJ4i2puTBdrFUTNT39vDTwR3zL2",
  "key36": "2CriAgyaSdvaQfpuSwYBHegJuE89AcHBEijHaQgQB5LHxk2EP13chQ5YXC4dT4SzV3X4hdSVQti2JbWcbmfLx3SJ",
  "key37": "2uSgH6W5ujd62xBR3Rb8gaCe16z8R6Y8u63LGQG2QCUTnjDUYsJQvmRtFj9HYs7jxprX9k2rjckLM7hAYQo2QhsZ",
  "key38": "2muj1RheTyEZqebpqE2quP4d8dA4ppdDVUnqRdLhQXhN7XyqN539cixHk946feAGE3X5bQVzbz7vbBuWQHz8kYPs",
  "key39": "2dx8o4jKwGpqx4rewVLJnaMSNW9ZbtLRwQAsBHjvtTgPHq3ajDAemde5STH1xREcoUytooRJwKx49W2okktFSzRY",
  "key40": "46eEfphxX1LANDKt6kyfG1kTgjYDkfSwQdZ9KPZm5PxAhxePLBe3yy5f34PN1dcorjMDrVyKRS7e6NRqCrnaUvRG",
  "key41": "3ZeMRYf8CKJriyydbPn8NRbFURhJC2jn7DCRGhfkJqTaVmZbCLmb7qa3nyaTwsTtyHc4z8cTpDVdLPqnGVGKXUhT"
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
