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
    "2EdEdzvgWPB7HcBxJWJeud3RdSTWeddN5nDv3gcSEs42KSkvqFx5NKRX79htUyU7Ah2PDVFG7uxVzNhmbPmGqPCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDwXGJB24rW1YYptUyPewo6i1oX8hBPmiTDJkbPxarry1ubbY4BxMKZD749aUziPhRyhDSSCxFubrwkNTMP1nVY",
  "key1": "38F5dh3rfo9k5oi8whmhaVq7qd6JfD36YiSCuEKXfA6bLXS1BHVzaJizJUHNwwU9kJcMBM42HxkhCFS6atX1qqe4",
  "key2": "5WSpR7csDPEvwv5aEQnLfB2T1aZGcsfQS4NMfcq9Hs1BWCaPvhF69aMDbGajWRNiK4kVAGFLWqPYyKpVMGjVakJi",
  "key3": "5pMv5y6A5oyn1WhEXYAYcBtxuQTmt7q1zmbkRVXHLvoeqeYLWhQh9izYMTFatMoWAkSfrzjbL1ptGEEY3yv3JJLJ",
  "key4": "3NEicusRECAADNPWmijDCxQEPpFYtcgBtREBDwQvMdqs1qMcEuPT3FoBQnb8pty8jDH9CP16nb465EkPEmk74cw3",
  "key5": "3wR3Jbm9UbXaEDdXBbdG2ZiDXeyfvWMn32WMwf8auxJByD7qh2HkXVszJ9MVuE5Efgwfnqncq5XxyEWXGmdWkowr",
  "key6": "2to7bWTCuU27VLJh46UJYtGzWwD6DEFVE66kriPYRtjj73dYHSEEgaN22Yt2tsw5awgh2xwvL2uJJYiu2fkke5LE",
  "key7": "2LXkHjkLPkwFyYHFc9spxBScz7jDGktUMgNBumKuxQowJiQ7vvwj8dvvWZb8Ua9ziZ1gX6kDgiRN8XcgUG5CNf4o",
  "key8": "5tGMPFRUJnaJv3bixQEahm8iouk7dpkNh1hrowkuce4YRpXEmHWsJduCDFNN7fhneUNCCT7MzD4K1EVSr8NfeNLE",
  "key9": "4KAkTcAzSPursLsVcuFwrWRRmbi2yiWqUUCwyRyfio3riibcFuvQgpyim8GSfijNvnsrXnQK88NCpvzKyUZ7czDB",
  "key10": "3fR7dSZgqbQVecmrbLHjpWYyi4odofsCkEnfHSoTrwAc8JuRxMFQj63sWbP2gqzLQGPQvxToWotigYN6DFmrbcbZ",
  "key11": "h2cDU5uDBdem2rEAdjtqwMRfnPW2rMwhYWL67GM8zQxVXaJTm1jsxH4uq5w5GtAinVUoWTud2EbAk1eW3wuNWxa",
  "key12": "4AavTd54k3JqiBtenQSeeBAyUAFcYayHsDeRJcHgfEFu7Sr19McB4J4Y2jTs673WhXTpdXJ3iuyoHHqRvv2U2kfM",
  "key13": "GT32XAvHf9b84pXp868e6Fjw1tNX7YyvYpPFPge9XkkCvNSW61MhzcFB874c9NWCNuDbbMWAavhifMMQchhp5zf",
  "key14": "3wPnZsP1UvNaNspcVU5TZS6DCNAQdSnWovmzEHwcBXkqmWd9w4iVhdkWvTYonAhQrfnqG6XiNEQTzmNnrvjaRJ4V",
  "key15": "4syRuYtathsVzNRBAHGtazBXHTPHEjVNFJvLQoRJxPnForFrny2HVXYMFt9BakuCXgM5yKTqohinhH1WKzovoi4c",
  "key16": "3SMCf2GAQvm9XvUx9D6TvsKzZq29VFa8wFrSNWzUKtyKWb3ApBCReTy98df97WcB2ow21i2ximjVa3jYokDXWpBS",
  "key17": "EQvVk8o5DrrUMgxefTKPLDoDMYvwDySTo4UHEznX5dNXzqSu7Yt5gUh9ievUUZDSM2z5nYJ8docWAGncPTA2Yab",
  "key18": "2a9kRJtAJC9Gzrr7fwyaZhCVodwPZNE52UD2GcvKyWR8uc2y1PnxZEvmrv3fvNCBCgF5AfF3UX6DmDAXrPhw2cfw",
  "key19": "3F6QmCarTwD2VYwStpXhU7B8Tg7kvXa9SzMzffVcPXHMrK63QtBQpUn8UprmSgEvczhFGRM8TwAd4o5gjMVr5QD5",
  "key20": "3iQn2TbEJLbvyfZ75FFiA8zZgHHBrZ7dJ82DekD6AkggcpRFdc6FxrPsZuVGCWenU8NfWXngBLa68mY9MQNLHMrX",
  "key21": "4bGPLwWoXshH5oQDnfoFqxq3M88pcLSBNoShhq4auTrngR8aCsqgRmpUggVkpjMMaLxgZzCif3St5Q14cpHNcyrh",
  "key22": "26gsD8B2KPJrLGLmYf4d3muDRDGM5o183hR4yMD2jCQ5SyMQ9pHWYLFX7n8q6tF1LuZW8DUTJDt3tVWgxnYxDoTf",
  "key23": "4ESTCvFKQiGbNRX2hgWcWfPRj4t9kMhAEtvUfnUybc2wShtFmsfbMQJPf3FtZt1NpFou4BRVJT8pAJ6RmAFEKDot",
  "key24": "4F5pUu4KEZL2oAcmkkin4oDKcNnYkJN6kx7SQGWEuCRYmjrvEdfTvTevGNS25wUgeUW5qQy63jYM8ZsBuCHkKZoJ",
  "key25": "QSHAePgkdGaJRv8mqHgfgZhW6mcUm82hiHoPE3TeKMrkR6abxn7yq7yj7XECtQHNa7ZUvyqX2P7p7ujqNL6sRTN",
  "key26": "5A5TzFh6Dy6Zwrw1UEBXQzCgTMWR2LnTt4qCnnkoE95Cx2sdPRmGj8jvU1oFzEXt8X9rgwZapCEfFMa8TifLRLCV",
  "key27": "4g3WusVWhcMeRAmBc3jSmex4j6trcuYgMHsMBC5K5nU5ZLrm8hebzWUC9UyRPczRhJ3G7P8UcEHzyLn5uMzJMLgs",
  "key28": "4CHnwvf5zooUP7QqK367xHAxWyQmcyAA7iM4B23pY2jYQFH7TfiANMX21XXsHrUJpbNynxnA3xPM66BGNgTnZ6Fy",
  "key29": "2PHyHTnsj7erQ8rcR95741LbE1aJdLBAMcjTzk3B5NJ8GiQKMw7Jged4cefZwBXZPHVGqdqPmUiVGbtrcbB4RAB7",
  "key30": "678Ypa31CJxDXsVAB4oPyj1V6t8NTzzkHoFJDtWwSbYq5bWYxZKkY7AVpGcyf7tfQDnZMjHZJXW2eJ2ZWQjqJfkg",
  "key31": "2BftVWYXhVR6c2WEunuDwKibgvCNqEP1JVUfkezwoSmvb2WdLhyVQRxH67gzst6xN2K2kkeWPyMPieLAmMxhbpJG",
  "key32": "5e2CdmmkAN4KwGqFg5dorqVFD7dtQM1rC9ftxJw9bf4c9NuQK1Wk6hDQb217g2DrXYBqZEM4hV3qshHRHUuJvkpE",
  "key33": "5NeKPt49iTZc5umWAhfKzjtyVF3ghpgisTY1dpgFWnaCKV1J1D1BbHDRX7hJicuBzbtM9dVqVhcPBi4epsp1rFdH",
  "key34": "3zYZuctgHQubPHF12ZEHfMJZZhjTL1UhCweVKwCFcUhmz6aTvQpE8xPNAr7iR7LwbgBaxXVvXK1wdoLRC6PqYAcX"
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
