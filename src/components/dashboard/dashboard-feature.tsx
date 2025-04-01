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
    "5vJ352YVT7MM2xmGrAidWU87Mgq5uafv2rHJNagnHrXdHSssX27SmLptiLPuqAbSzcXenMUkP7MEBszV1QsonPAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyrMGyYkfQ3SaFn6BTo5sCbphoRDr3UWb7ZbstUCNLypCbEuyn9BKhxTcAKGdwMWDAUVkaq12wPjBck3Ntw6mYU",
  "key1": "47SUQp4ex7rtsqWWQX9stbdFFSkccZz3iT9oXwRXnRrEwvYiSGX1kDoqsXmnnd4nQKxgcTtnztdiXxM5iwqLR5pE",
  "key2": "3cQeaYaN1KzgoTFMsnjawt8q8Pm28MBBsVDy9RCbCfUUHt1Z3bFTCWBtAfSpbc6xfen2uacPpDr6DtuZ8EFzRQau",
  "key3": "2uj1wviBquma8c5hWb9njfR4hvgn5r6VX2aob8i1qhk3f75cSoy151FHeTku9RRSWfUjANM67h7jUTohfr2qXbDQ",
  "key4": "2LHb4wsMdKtoxf8YL1oVshCS4odh1t7Z3P4u1RPpS8TcB6ZrWSyozohNU6qKD3W8WV3vcvPhaWPXcUaKUw72BBuK",
  "key5": "3vc9XT48yY3kMcfvAR3Acmu9cp9cGhQRAVirMogcUcfAYZ2mQRg3jTY3qFtteP492Gpo2f1ZrkisUCFhZuo9UdaQ",
  "key6": "33i2zf6Cn3hJzDqqpraCagdEPU9tBkQzGuodyHV9zjRPftjQAANJderWvwzEu18mbkyB73K99PK1CyQt96pxdkUC",
  "key7": "5vhgywzWra1Hts5EqnM2Q6KyQHm9fe9ee3jSERwRGvoZCTXivYSgsZraWmDsacf3CaSGQVVCvhr9d6DrZ8K9idSz",
  "key8": "4qHyTmBkz5nfw6NaQMUVoQfjJ9QTAvQSMHjkCkaZUSqN6QXABL1hfQCNWJ9sMUhjnbAU4AyMtmRHAvxT5K4e8AoM",
  "key9": "3q5RuwgaT4bpW5QQ53BCTJYKB6UvLakN9okf7qabz19wduMEuBzBpWf3Gc5vgcCMxAFmutsKjunwoABB3bVSvMx5",
  "key10": "29ZT3FKi9uC9h1jvSnYwva1vG9TnKCi36iLjYVcyJsLgAphxtgaCoE8TpubiHupfaWBQUdoGoN7hBFTF6BeHiFP1",
  "key11": "4GBg4RrvAKHMvu8wUVZvT7zF4nCGkv5AQfmXZjUMeWNATHT5orZnXtdxh7CqUAqcDQYhQ3KrJacUf39aYqMp8D71",
  "key12": "5iYsZec5DX5zBqfzhtR9urzKq9UPmDDKKkmeyL1rDJrk6SCX35WD8HBFeMz8Ho3te9CjjnhkBc7LnbdMygcHphRN",
  "key13": "5aSBZAHerS5K76kya539W9nsFsaYYRvFSAxsbthQH7f5ytEn57Ay1py9ztreNBVpQK6Rqk2YW7weL57iuYU6yqxw",
  "key14": "2ox2ST4fyB1yLX49Kgz3ETvt8GrFn5CM3PHtbot7ixonoVEZ73u73JTWEyZsSS8qgS9S6wkxVs6xeD3ucXPRS1Wx",
  "key15": "677y5UPggWCr8RmiMgiJP7VhJRPJnsaBV2Udq9Ujwa522mPXz1k31uSUgqdm7xyNHRzVufkCcPz91GR8e78gNaSN",
  "key16": "MKMTJd3PcHwyiRxpmALTsnKZT1fJ7FLxx5U48nx32f2m91BkBfmC19iiEqimFeEobnv39Pc58VNRn4whAH5wSAH",
  "key17": "2mBroTJ99Vta9Fug86kUs6CSuZ9hZ71Qi384H6HKbT13idXrkAYAPrAMQYFVfK7oTDjmHy3zoopzcDwnwAApvcPy",
  "key18": "Utp3sdcQXGEUP74cyFtWvAzPp353AAshgKaF73gzoigceuKhtNX8wZWLrZ7NDFvCNWHWvgFQEWANxqUb7qnpuuP",
  "key19": "3weWkbH6kdg42hLkwJMsn3PGozyhvPgqUyCdbWvZ1bggnfTpbePeNZxa7jQu7WoLrRnqUbTwtNnjUs2WJZzHrwfH",
  "key20": "2zGtoSCUSb6Lg6kGQrhDLh6Utx2giFzffYYD9vEh99ksxpK8Cnr3Tdo51eggCNJAHXpERwBjYriqskSjyawREwL",
  "key21": "5hakntG3H12VwvbmhLcetGBJnut94Y8dyQmfnXgaFaVzxXnFkG2BvYc7fdfa618yrXd1S6vaoKBwGqGbeFNUmYUH",
  "key22": "3vVYk1DU9MtPVL85mpcsawgVwXe2n4wqPdXTcSEB2WFi2gBvARtb5eQgPx7Bu9H1LCsuYZSvByrgiBRo5uFFYrDA",
  "key23": "2yJTYYKDdhXrZzotesKy9r6ZHK8gigXuxxQYXBvsyK8dpexi6QK9fz5zMypi6htxXMYc9vcmJPG3T7EgGbi2Y7p8",
  "key24": "piGr2pfLppjGmmPuXiNUqL87Db9en62ndZtWo42VfR8WqANe31x1TL28ULgRcdpx9Vu9NagnppRticZevYvr9SM",
  "key25": "5W9uM2G3wojk93rpv2mSUkZmiaB6ob8zEU29pw6yu3KkEE4W3N2v7uZAxodzJ1t46RhU2HeaGCGTJEbFjtmkaWfW",
  "key26": "2fdVTo4Gb16fUFwRQTFAiqLTQTghGjBFdg9zKK1fcM5E4K51R8XcDxUhtmhw13SdVn5a7pSJuXkpW4MCAWuMCHVC",
  "key27": "SahhLLQxyVVbeak2sYHYDvEggqiPGXd2S6EwZ491vDWehBA1hpdCjx6UX22RapmGTr6NXZrBJbKRdRDhzGXfiY1"
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
