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
    "2BtUAMfLZXTRwSVBs9hsdsJ6yn3ZzRKDcjHy19V5e9MmWqNWfT3Yj1REAVGVsfFHwFsu9aS6ttydKsud57j5hVGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPPYnFnocWsN79ACzngyz6ZL71JFhiRQWc4xWrUqao5FfEpL6UQC66LAsYpoAKxPSyrhceh5M6wpS9spE1wYPZs",
  "key1": "3iTPcCsss4xLYdn2afaPkodq9J3CTjkgRLMV2QaPRNR94VBEHK7Cupmz2amioXjd45fni9Yjzo9MxyLQiECKTDky",
  "key2": "4ULimCN8yyPCPkt26cHU6xY3hX2nFPtEv1bLk3bF68fkJs5iAURG4cEtzEzF4WU69GohJi7wAg5JYUFtu4i4QnTx",
  "key3": "yYjRsXoYWke2WG1kH7B3k6UkS41W3teUgqxgA2jXQ9FLg2wPJnV3EgvHRWJ2N1T62WsVdWPRUMTo4UYJyTqApxK",
  "key4": "uXqVs3Q97MxSMeK2MDys2r6kUbvF5K26KdbGBXktkz6ffLjZYNmh4FFWHNS6pBABo6eaXCHLZ4NCybxazgYTZaH",
  "key5": "3AjgPqt1NyRBqU9PHZXhJVN7U4MmJ7Uwoz1jwFSWsjUuxowoYq6fhEtZEtxdywryVQN7FYYutQmyVEoXveWkphWj",
  "key6": "3PPWvcbfgi68wYmviHmGRtQnvgUMY75cVJ6252QgSjQTYbA3E9vvivLko1KNyKSZ3i33x9a1oRjunkxJYYmUhXuY",
  "key7": "3PKXcLTKF7eW4J4NWdKTraFRJQgH5MTXwthPsjQDwy2biLdAjbPYPKWxhZ7gRhwmEZKVVVnzSLW6V9p1t4bVUygn",
  "key8": "bnkjoPNYiiub6fnQh1M3oGPrhYSQpSyqTjAuBrX1dqjF3iFiY78HFStGGDdyCaoTnoHoTWzik78iukSW1C3hCB2",
  "key9": "3XsGSQBbvEoim19cox2EBSJr4JsXh4ZFB9csPKKn73YikNau8unnpTXAeJ1XFXhAjutkyTd84crSWNK3njJnNuWH",
  "key10": "5FTHHJV7nCkdnbZ8eN27BMX9133SJYk4SKtJHqErw8w383hFdZK9EuBwMgm7ErzzTgvPyQa2Z467BPBqYSbbSweW",
  "key11": "4UjXp3VL6CdBPGi8p9Np7Um8pFo4TWRKK8ddYTN4hMwfKT83ZJc4LpPyed8gPxVbDU5SJq64D8PRe91BK1a6yAGa",
  "key12": "4tUSJoSoPf7wQn5RzfikC3Js8HQ3A4DTXPZk4pttLzeQ2kw8SwNU2cPTHCsz5iWRcBJADuGqMN53PxgMLj71UM7R",
  "key13": "3BBUbS9FbbQbJJyPS8cfouhJnicQCiF2cf5t1Hz5KxiCtMVGZJh6KQCjRypBvKRVgZpwdDYcp2HbDRTCszGkwHXz",
  "key14": "5f3yUhCkRBqy2HSH9vmdkD9AgZMEunFKByaiPvVTHWqZ8siv27sTjoBWATg7nUSjFGfyLbDQiVedWvs8SpDTbKrJ",
  "key15": "3WQ71JQG3gPG3ZEwbKr6onqgrBrpTH51fk6Kz8KQhNbN6NzKrw1hzjig93Y2xwmL4THmF2HeZyAfjaVJsmCta65e",
  "key16": "5RkENj1xFZKuPm696cxQsw9UEuBS922uRazk28tvF9Scom9Afd2a1pPV2wKobGTX52bYu7CDohiHuXhbzaiLXD3j",
  "key17": "3aC7Q5v6LU1LpTRpBATqm3pJP9yvSadvBpjBzDnW676jFria8iE9ZQZQq82G1UL6cRiY7zfaoFHQmYBuN56nM24d",
  "key18": "3kaf23dn2LMgpKqsoHSPBLaCecBexJGKPHjw5hTc2QKKH4ZQzxWDidLob2Zi5yUvc6Dqka2ecAm5oiMYUf3mvDPb",
  "key19": "3KCLGA33LJFzq6maWthxdyEp7RFKyQJNYv4vxChmpWvj4PyQY8vZY8Nq3s6oKDmduntzm6VgxZg7RUt816tqiCfv",
  "key20": "3xNSic49ft3dfF4ptgHXfieWa4RU8ghQ3wk6Jx9tLMM8Bn6JYFp4vNskBMPzs1nsXNmmBSDcwRijkpHHtqz3jNcu",
  "key21": "oi3Jqf3J3C36cpZiDi9WuCCeFwihXWPhGPBRHgMxSkj9FEPipMQBWuP4CFqVqRVVmucuEZUtapPBMeEGpXZinrr",
  "key22": "5EBsXWX5qkxWNEhZs3Y8ECm42ivJ85GsoKf34p71EW32hwhwJ2pdZFyNwkKiVCdFmcqfSQqLhdvcXpDKAX2HKdP8",
  "key23": "3Vkenn8drnrKF6Wuo2rbmoVSCigmc2CRJzeGtgHe3FA8XRGTDsrumQMuXjo9AdvUXQXDYq7eWuvRqZLh1Z1uYcZ1",
  "key24": "4d6b47kA3f6CKosbinXQn2Faf9iDwF3ScXoEUpeEWRuTDg159H9XNcPtX5uNQfF4hmVW79Jowa3r9dRUrm1E61qb",
  "key25": "4GQTmjeWbtkivXeZPetrGHpMT3hACDYjQAqmZzWMrToNQciJzgRwUze6ege58xcjooerEp76pe73cA1gwHYudHjT",
  "key26": "4GC2gj3KHTML5zsAogH7Ld8Yqp8uDeZhzZk6iDE5m4Nv58ujqqhRxRVDwDJAGHFGWwfvpZDd9zFQ6ccZzWXNAana",
  "key27": "5k5uTXcsmx8WXTNa88jKnFfdR5QjbPqN5LmA93chK9kPrzKafctsRYjVjW6AqUy8KorHjJiUGVxq3EiuQEkSojgM",
  "key28": "6aGzFwNeqgD9PnurxNREpm8E7XfvvERUXigW5AKowYmc8WSdzkVVxwaw1TCmf1wGUu78L8cgwGiV63NwXwHriQN",
  "key29": "2RoC7q8hZovFeUKyhcwcYdAMjQigfEWXUadhpw1YWGD7zGQTUGxxqNRdFQGZS1JDCu2SMmErYP4EtogFShJej3Dz",
  "key30": "57y5F3BY18MXRo8rM1WKVTPAPg1M4susnv8CrS32SKcKLpSsYszDAzrk8sJbdCDpP1NULeLUyGWokZukNdVQLq9H",
  "key31": "2UFSxjrFjZ4dqLmUEJsqHCMrT4shCcMrhL2BNKoGhpgH9XQR8iLJqmer7iLcSWZjFL6iwJWT3WR681frGfcECVw9",
  "key32": "2U4HqDUFvmZDunwMpvQju8ScHk9hrSuqCpVyy7xwvhgVQpA8W65Vpky8y3XBH8TRtGquEfht86d4NnMdKcf7HTER",
  "key33": "52up7vZvKr7eiEDHmv4pWnRgsv7fruZ5YVGceRqYNHmzpCHwVBAKMST6dCiRWSi4fktXRqiUTbYBqGNoFuHGQfiB",
  "key34": "5pNQQi3aniZZTDgu6mdte5P38XKVnYoCcc4hYdp6bfJsSh2uAHpst38PFY4rhVqD7bbKXmSpWLb1EEf9V6XhWEz2",
  "key35": "4peF4T71Z9m97G7zv9wid62H6mFqV8ars5yC1tsXk4AsGaVr4moqv1CctD8jygi49XzPKCcBHEVdoDhBoLvKB75J",
  "key36": "5mEE4FUJnbeYhEUGmfR7U7BLq6T9xSLfHiPP4oBEbPEgkXTECxio9sUSKhBiqjSLHvUxsuHSX1H32Vqm8PAAKrz",
  "key37": "3y92YQJzuBzpgbdpiMXNQRxGdnrBMMhM4aFGK2zWxbLmRax2nzvJpFLfkVdzfc1ox6qDPMJi2pUCj1kHWwqL5ht1",
  "key38": "3oGvJbqb68XnxVFC6aBJ3ihb3H1kEginDbaAvXUzSfTfXy8v2b5sQqqXQys6WzS1CtsYaqHvHR26tnw3LkHE1M21",
  "key39": "3jW4CetfLzFxwiNpk4jV8rzQXA6W1wnkK6Jyd43C8Gw59dMW98Yv3jqVthYVUGmoUfBMAJGH9XozKv2hYiWmF6F2",
  "key40": "25316cEqzQ8Vno5Qc1L1Ecs1RAAsszzYAwgvhPG4nsmLba2enG5m3QeN3Q6JzovgehcKJeJRq25CK2UqpZKfg6Ms",
  "key41": "38cM6vXJEjQJ2n4RXpEV3yHhyQeHPdHitKJu7WdhnCLb1fYUi5CGNY3cuR7mLsNE6Sf54Ej2T9faQcGuAXpDTWTo",
  "key42": "5dpUxFRxfm57eyAkKQ1WUtt5wUgTQV6oyTaDbre6BaA8jpLrc2h1nG6FduevqF9d2HV1vHWS4SETeEFcE9n6xPJo",
  "key43": "4E5cyghhzSNaruFLHU5CKdN5EQWdruqbN3bNpegk15FnRzUt34eCPpSHsCFAgFHoYG7ZDuC4AommcnNKw5bAjo5i"
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
