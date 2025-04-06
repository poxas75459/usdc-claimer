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
    "asFr7UzE1H4WLFAV6sBGRuCjMiiNKdDvh2wj77x3wmwJ6VBGNAJ5xEHdjduvmfbKkXW6dfUDioHbepT1xu2t5Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454umkRcT1x5KUPd7nPuogoVrs66hofNCHebhraNKWZyPgKCWsKQQrfE7mh1GuvwttTRocYtNeLs7dfVvsX2pVqV",
  "key1": "2Tn5EXsCQxBY2U9VwTA8eeqdikMTvRwfh6BPs5g8igMwf7b1u6w2qYZyPTbQzomHu136zP5Xdgd3JiuJZXeKve8d",
  "key2": "2nDAbcxXeKC1ZgGdSiSGChSoUHG6bQUpRdrPjarjDtBFrvbv65u7GkTbwiNbr2pgMkuXJhd2s3kbrmFMaBWwvaDr",
  "key3": "4FreuvyJyb1qF8i1wyEJYZxX8RCMsS4Ytq3dWxJtUxNXUhTW1wnhBToDjfUdDmiQKpnsRrbnAkqXAa8Z4wzRPoz4",
  "key4": "46hagzpKLzB6qjffyJDBK2GKqoawingB6Y9BKKaPVqzUWmD1iufH3LPQmH6p6kWVdQm4xvqUtBSF9WvmgGw8agA6",
  "key5": "56uRKPPuykiYhSN6GjcEdkqXQYFpNV4Y5aDo95CLuvRzj8imzRxwEGXwVA42oe14U8hmdNizzrCLr1nZcy3Fg4ik",
  "key6": "42zKxXzLE2u3HQ8NtikKyx4P4PcKzKxK9uNFDRekG4ZFMc1AQKttWY8kX7eUxTWTahzarrSjUsMB9CPPL3auKvog",
  "key7": "5ADP3ghsPQb217WbuuCWH7iJ2VUMZ43npMVPrAMcgftMzKFfxtLgQvvfVANQvTe8VTFcsZk6N2uAWo4dJnjKzGWL",
  "key8": "48iZigpre9Xk88sAWcgjmkH53j7nZ7rQ84tZGYp2gsqwgDJReA4T8qVjAU7S5tTSaTq2JWKe7FocKc1SEu8xw5uM",
  "key9": "XpVquceffNBCdp3nUoWufzHpDKHKdhG6q8VSHwfQVubY8m7p1hxJzBeci3ygXdf2VGzFyvsRYU7PKzwNopGmRyq",
  "key10": "3SoaPTFYJXsaMc8iMnFDmp9huks5kNwAwudPitvYg48WZM65hG4wgSSf69gtD82ExsMhm4TsPr8S8TZq8w8Sh6Lr",
  "key11": "2rYtTtrWE4Mosk8sPCxPMAMhCUAhdqHFZmRa1GUJHisgMBefmHaXudNJVNKu77nmSkcNCjHPtBQuEzFwXEsu7iMJ",
  "key12": "5WqWCwzGQxD5ZAJB7r4UAxkdANoUu1gk6ECF34KWA9NRVHBDPE8QTFeYrfU6qyqG9V37pWoeFaF2z45Mo7kA4Zgh",
  "key13": "4og3uReAp2S2aNfuskn2XMt4GTBBJrBx4WqNFxtZgjg8CdVkmkf7VhU3gZTMo2C286sryLNiyH4edspNAX5oi49T",
  "key14": "3kNRS9UDuWm4HCLZmcyxHzE8EGuLsQBvnmaiAFairazbDwtC6cWKtmAYt4RpqbXQtU6Tu3wC3U47bCYo1bUv4Zv8",
  "key15": "4aFKyGWK2DnHgy7hjz1oTsKo9CKaZjFqXYpdVbVHCHdFZRoEk8t1kUFHrg42bze6nyJWDj8e8EvDjjpz4KMdFEf4",
  "key16": "5DRJo3za9wxunXw3PafYKd9ZkvTjVRZLJpd9Bse3bVHEhWmJdhkVknQNFsQWeLMmxtPMeeLQhzNaUXQxKLYm2HwH",
  "key17": "3L3Xy5yRyD1kGkTaw8AfEPFJw9zkqddQiHQ6WGipaqV517B6ZSqcr3XeAseFEAjJfvJz13s4NgCoJsVMXwZmK6ds",
  "key18": "3qDRpntwcDUzTJGi8WYx4VbHJiTudV7ELqrffy2H4p3EmHgFvMbbtKKqdNTgoeyLKPtaAsPv5XVGUBLaTqA98YPA",
  "key19": "3PbyCgf6jjxHF2PgCCTKT1G3RBrndUi4aLbnnvaNLZXmjgCg7krxST7VGt1FmShXcW655W5wPgsxqELDre1MnM6b",
  "key20": "4JGsFt3rcWX1EBmobRcjoVrKR8VPiNpN9w21aMojnHMGq5Yqzj5y9koEas6UtzkmoAD1n6eZYEayWMkUECXY4MQu",
  "key21": "5SmujSWf1aNmPaVnXnfCH7EnJBdpGDFY56aifV7A8CtPZPJcf6r4zpTQN2sM9SEXaiFhCWwnfnTC3eF8PZqdesnD",
  "key22": "3Sm7pGLhjCcukkzZiHfq176SXo9hbMUSLrbEum5UrWzcfgGLdqP6KsvULwhRXYxwavp7pEgZGeccCsQ3f3misNRd",
  "key23": "49rzGN6YGjHnqtadMF4sYH6vibJFXscKNyjrrzLVaN1tNM1cfksosCQc8CSXP3FVMVUZxmBd3ADiN7pDp8bDMxMx",
  "key24": "47V24HB4bDBZQZsm9fvFjwBo8dib9Z8HQ3K7oHvPzSkxZEWc7kFfJPtd67vCeJSbbCvJ6ZMmfSD4pyDHGYekyXaw",
  "key25": "MTNcLMKa5a2Q6re713BVZKii6iNLTnwYjpRDZSsfVmbiKXwto5EhwG3ff1LZ2iHugNzLmLrzZ6UP7chJXaRtgit",
  "key26": "HnTFrCtPDyykp5WHoPZSdyQsgHQkwyUWWeUAKetZo8goUMbpx59nySVJYr2WseHztpFtA8KoBLyKpCtNyAyVr6V",
  "key27": "Rn22UDcbPtQtCiufVh1CJ1ELmQa38a3GECMWfViEbPdAYAssF823AS3BFmjWWiFEUhWfrorizonudhk7UJ6XDeF",
  "key28": "41vsRn7iBCFLE7NZMfTtoRVpPGL9bXCvDWCYcSqKto1NwNSC7gFWySgeo5qruTweetV79cV2tvUz1JCepsrYMyE",
  "key29": "5uTR7KLV7CnTDFDGfkeWbyB35pzZayCM66RfjS9qhofuCzGXKbqxHmMW72t3hqeu7sjdvUpdV4K5Mw8Hn2QMnXhr",
  "key30": "2rvNhQYj8rGDWekaHdZWJZXwn8aTWWswtzaPhP1Xr2tiKbG4rzYezCG6gsaBWUdcC6pNjkwkAoJ5tsnRR9K8PNTM",
  "key31": "3v7bKJ5SZitj6LjNc15mzAKQ2bYuwQTYVHDxS5h9wec1tgjFgJ1GjJ9MYwBzvKbh4WopnUfMDRWNFPpFKyNtDAkb",
  "key32": "2LWMBCth7AmXo7zTc9KAdbr8XKysMapGD9n45yDyjmcCSfvYdJP6a1sKQwbcokrP37HXTYgfweSGUgz5cywL9ajt",
  "key33": "4WKjdvQ2He3LMGrYHSpM1EAxt5H3T2o7cxNQsEF3A5UcGvUgsYgQPZ1v6ZH7Fqrc4C9T5mNh2ppHkcPE3PNU2BCW",
  "key34": "31wQA8K7YLXVQvAzjHMWMXWMxM9Cg1E3NjZ5AsH2omMUaiHhDbqTBb9afUadAvArX3gNdNAmXt9WZpXsCoVbkF4X",
  "key35": "3Rz3neQhm2gBerKvj9XDp9BwvvXrN8veCBWp2xrkd3LkDo7b5KQXjvqKdKYyujijY7HvdZvm4vixE3fug93A3NeX",
  "key36": "2AHxUn7igR58fehkntSwwrC9YAvMEweKBqi2cNDHMixJ1W9BH4GxyMXgSDwYv43VG6dtkqabtKdcTLQudEdTYcdZ",
  "key37": "5w12Bg4gGQ6ewJRSGsrdZnxHkCrmaEWZQH7G29Gi1ZgRd4SRXw7L8V3AQt3SxVxYB9v7YyFJmkKJn5Dq7moqR1V5",
  "key38": "2qQ57JhCPW3SV7xnatqw7as6L2an6RE7s5oMttupGacFGwG9Kw3Nzu2wpMccs9i5pEWMt9jc64EpfeSVEsLRQNMi",
  "key39": "5NJNHDCFdbzTkSCVFmXagi1Z1n5PSyKV7FTjtZTrVo8Zs8UipqwKzg71L33AzDEjig5SoDsYcFttHCSujE73ibHZ"
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
