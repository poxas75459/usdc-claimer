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
    "3WRrsNyMws9SXTvSCeoeKncCRdSHRjyYpHjpBwqtcrruZ2b6UEsRHwDbj2ZGXET8wPihScMoLiDdgxZu2sQxZBPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jRg7yDbMx99mohkpgZ28ZvyLc5QHtgoMBoZM1kM8EqqhKwBkba4VdpkoshXPHmUPBXbCBShgPwpkeQASGoxxibc",
  "key1": "5BJ8Vvq44rJTdbEhefGtVJFE3e18gxFzUTJmGit4QghTbyE92b1XbnuGnbMYu9JxS6HiKfDp3iTRwMnUJ3ioBSSd",
  "key2": "3FQ7uHn77Z5KpSSQcYxUAdvNtLNDeWAUhen2zA3XctsvTv39R98JDkWgFKrJ9brs4YwsNVbrLQSscvzxE3LWSEGh",
  "key3": "Rj71NyR26HNY7RiPoDvVB5KaXZbWn3CCzL4vdczZYYLTqYZ2AJ4Tevo2dBRYwDTND6PUMCygFLyQY7JgLvE54Fw",
  "key4": "4KX9Qeam2geMpgrK67L1Cjz3V4eE67w5SPiD6HWb5pCrLJfVfFxejwfDGzhMpgofwBZ8Vae73A6Js5PbCjkEN8oE",
  "key5": "4B1vWzE3UKZt1aJSr7mJ6fqPt3w5FwGg139BKqCoogkSutyhbg3F4ZMWNc45HXVf7KcRW1eAP6f39mawMQFTvuo8",
  "key6": "4QRn7AjXVPwufAFBGN4TUjNX2qVb4F1iMmPNZEJZr8W2ywgscr97FwMQsci5tZNiJahXN5E1EFpFUNajzKKZaUX7",
  "key7": "5xCps7SCn6fSfaxec1F8tijQyTT88qMnxGx5AVWn8p3gp2tjqQQ8FdcnfekSJN4fHzxHMzX2w2exLw82afK98Gje",
  "key8": "2HH4LapRkTcEwb7Y5RCRUoPX7yoVxhqWuPy84Q2W9igWdSfU51Suxk8RiPrmKSHSuBarjsNpKkRptJGCNj4XFWsF",
  "key9": "4TXKt8LZHrmbfgTF1nQUxZNyseDWwQLg7Ko6xMEAA3NRHP9SPJibWS1ek21j1JFr8ZogkKwzyhQe8pWgPzVnhfNf",
  "key10": "a4awviuzdXmWyg4zdE45W6ZtuZtzEEzB4LLnJspAJiXKqs9MSj15shVCUQcA1rLEi2DMuRmzTfpfjDAqj7qdNxU",
  "key11": "34h4AvhL5PvNDhrQHU4wouTt867dGkcnDFYZL9qmtTvNMXBhVLkUhuWHiNMFJy1qSzw17QqLWiWaoH3cTQrA9o9F",
  "key12": "8w2gpYBNfCshoBSTLqz1o2B1P1T155iw5Gw4siP9N3L3b5yY4jtYxNUEz5bJtkhFXHS2c6piuqo7k9FC8rTggDb",
  "key13": "4wvsR4UBh33kyVBE8LcrDUEmNF9S2cc6GCWMWeJ6SCPsH2QWny3yTGvj5KV2Popw9ABs1QxDM6rSRKnpnzkHoEws",
  "key14": "64oSuW6g28hB6KnPUuUJm3Tw21WjLZWmw1WsPt458iZPif8TNV5J8iBvUjvqBo3xDeNBnDVvDH3RGVB9VUMV9acb",
  "key15": "3TiwvFNrfESRiP9jadnYi1qrbgwGjamGZpJ6Q7b77miNYoQ4pT5wqJhmCFRVUvjDiLw2Sk8arMbKg1FphoWroWQb",
  "key16": "5mjjcHF4W5aSGLVkhsUNoyFoMYva3xLEQswcSWAugwTiiQHp7SAogfcFkM4dpYh5xoTUMGi247SdWfy4CW8gDvNj",
  "key17": "23zg6HFwdVLQP2aqitpRnnw4vvXaED32b4bLcF4gC4dgiacPs2Ms3rZeW4b4MrnTfGcdBcoAa2QWuURiwiJdtZTz",
  "key18": "5RDb2B5fTHL3v3b6SS5Qm7j5FZ6zySRg7uMZyFV1bU6Qosdf7F3h1cZNjfGb1hgKRvHvqFdknUvyt1Gyxxb4iuWx",
  "key19": "396UhNQAEaDYpjs2AKn3ZBuLcGaq8opR1S1AtEYU3WDzGjsmJR5gmN9gLjTKNjsySQybKAU3rN4EbqvRHsix9pyD",
  "key20": "5KxcnUq1CqVmCw3VG24qPAGfSdeNAHC8gN77igDqsYW8S7cs9Kggbdb6ynurGivcgKFBEMZnb7MrVc6W8KjbtNT7",
  "key21": "6vYT95vWFaP6xJfeoDqLgAzY95HUYfnaQGyriEe7rbGdepyRBXGNtPHQVvHWWULLeA6dqXcRjds6Vousqju2u5x",
  "key22": "kovxNmyx4Vs1Tn8GDpDTJSHk45eLRnertJPiuL4T3zpkiEsQtj4kbi7HB6guBZHUX8sadZLNeUbRoKcG52MVPbe",
  "key23": "s5Anb1QWDCFhE6Z5j4B1Nh9DuApdxAWH2h3sWdCpwpRCXdDGwtWp7xjH7LXJSzodmCxhALVLZQgqfdtpP3dLoFk",
  "key24": "3DdNKtUdyJQLnibohSoeRmUkyoHACeGUK1a4KHzarCco5b7NFmaxcDC16rZvhzAwPECTkHZotfac4HLtD87cTami",
  "key25": "4bNDGTiK5K3B1X61SWawFv9ttixN2665rMpQKagiAUSGyTzpJhZx5wUC6UPBNvrV5kJ7vitt4oanUR6dAnbKqZRC",
  "key26": "aKLmX7YcyN8avQqf5e7DjPu2QZf5hogkpiVGBnhqo2gqexBHNsghF5SAXJtUM9jz5jgkFch3ZkuBEjp9jgqg6A5",
  "key27": "3pGiv81nPhBBbAWfL2fJmnMRpcbLzAczHmA7XTmUgsUXWbuMAF4aXf4u7rnAebEFh3bEt5QJFagTpF8UpjxtZCkk",
  "key28": "2Ku98eEvstdnfz5kfLaebaeynpSqgicgTsMpvAXCPHAeRDckyyvN26Ztm226b8LDAXDSjjHgb6ai76tGZW4zG3uu",
  "key29": "5pZU76HRTATKMPfPi9Qm9ZcDE7m9EHj6xoFMNd3Bwqnu7hg8VpDhi3PXm4RrPHyk8eEx8iYZNb8aQ3z1vVkeJTV7",
  "key30": "23xiMcuzBfjtq6GjYTanJZMVFNwgCKm4YaMpM8um5HFTMdCpNhi2YUJZtA66JfKtwTTA2YrFBfKFDGgQ3EXyhY2r",
  "key31": "633zGuFFtYHNfFwxvweN5SBMT5VzUpRurkTWKGR1Wm49tia7aRbGUb9xnjgAoXF4y3EpNFDxiKj8wu8DciKKabna",
  "key32": "3Dyen5WE15z2JpmdcSjCk7jwzALFfptjGudfx1uPscqAaKG2WZQjbyFiCR3zMU3rjEk3r5sGQP9L9DynU9N7hzzN",
  "key33": "4Eu6x5ZVPvdynaPrLHYATWeAFBjA6BZfuQP793UNYEn5o1TMPB3xeuySXYkJkBL382Vv6xxQvomz8Y43jp7HZnfF",
  "key34": "2qjDxWLr9QzuupfNu2XWQknGDz8qj1XVpJJSXWsS2PjJaveiiHGtTQQAAYsXkcRaHoBSoc8jk9HUoj58kNoAKDj8",
  "key35": "66UPTAfQFRSzDUjGp4a3ZxMAZWsNKos9qs2t8RL3Ta2YKRgSPBsLr58dQJHfodb6ZLQvZMqAVi5APEXPZdXwUuBD",
  "key36": "2sG98Di84D8aCkPbZ2BCJG3B2rqsaatdZWokEmqCXn4BMtP6rg48PT37hFkPSzfspHerMRowuHLANqmcVwDWmHWr",
  "key37": "3R7EW5kfm6xAL5a1KMSncA9Bw1uMzisTQRP5nY76rJhLBjEWRfNfvmmyAtKEZPMyx2sFxyhRC3nDY6g3jP1uZWu8",
  "key38": "1261Ui4TrMfHHaTuQi4jY2cV5LQBfNEkARKNUPuah4vqDGeoetewNpZzWAB3KWr7fgix1BoNWQ7WT1zbYAFFD5AN"
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
