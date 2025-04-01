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
    "2GkFPzBWJb44FaDeaqwfCgSFgtXgxJHDGJAyNzyee4nnfPjp8S4cKhpHrWHtAwKSte1xgqkZkAWuAKH1cB8PP497"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMD9KNbJfKVzEJKBnZ2trRC7j3ALNqTGrHvYH16Aomr6qUfuoYPkkjoqrofr6RjSmxQmx3gFcjPuduE5epPCsbe",
  "key1": "XHZQUP7RukefFZofiMobfNw5JfLJ9NXxgoKzxUSfAh8i2qH79z7ttEujTfMpv2MCVRLtoFtJvyuNBs5rniZtcjg",
  "key2": "3dq5JSXWxZtiNdTZ7rSc8MdKJ4f8F8e1SuoJQgZUDYA3hu8vVXPmDGETVBgD5jEHaYeeefc21A3P4jvd5NkFFix",
  "key3": "3KxNKDexGzYT76rCqyNzpucxb1RBAvBsKkduC1PJoncdyqkG4hwVpQ7Wys99X7S97qiphaR74qmNXVm6cXiYDjTW",
  "key4": "5FNPSRoHw8ntMHUNB2yfPjsuZH4f1EZcz3v8URZWBZiaw9xTy5pUuE5rEp7SnhZePLsnsDPA7X8KYSoyWWn6e7wH",
  "key5": "5HDeTLNQjD1frZfQ9uYefNWnSfnDBAwYiZe6JeVXPfX38Fixz6KUs8CNaMxXbmzgpTZcFQERqkMjc6fF1ec1aNKj",
  "key6": "3MVWkD1mTCJ9V7cfinUQDHFddPDNixNbrugz9xcYtgHW9W3gCwdkSaBoXusN1iBRY6ksNiKBxfs6zym1Z9fx3P6u",
  "key7": "s5g21mNDMKQWX57iqg4wi3xegJhJaWZFNL4NtjBWFeHWGvAJ37rqCUimJdREXhb2LsKumSB6RWZGGeLm7FmEpTA",
  "key8": "632S8tVakhYfAB8UL8tecXxfwo5CfFmmHg7dEV3V8AZ1QVKSMbQAZ9LY4n47fmYTFHYZpjUrDaaWhaM7XHmixr56",
  "key9": "2QNAdr1mA4hKjwif43Yds2SZ5gn8Fj9TTzHiD2VXNiYtRMLDBfD7iqWUEVrht4QEhTQuoBtK5gXSYEEb9vEFkqP1",
  "key10": "4t1d2PwvB3Q697nrNBAcn6Pby4U7UQzxRRbT2B2pWoBHEaAy9xDMty5fDtVXBgTsGMB8CinFCKPLcoFt5Kt4LHxL",
  "key11": "5eNrNxGPmupFdXK9Z7EqquYoj4zsPqifQw3RXMTd3jKGGuRKiEB9nrUVkZdWBTZtr6mUa5U23PKDVU2BFvACTJbP",
  "key12": "3gVSH5TPgj29WjMnDpVeuHK73Tbm27WH4DdNLwtQKYPzMjqbDHjWCuJm8Np9bQHwS8aJUAEGVf7YzcxeKDBtD7Mh",
  "key13": "VBrwmyTceiLn7TzvXEC8DBYqkY75eTDDxWqdokABfti2EL18Fg8eEfyPHwmLzFPG93G6Y51R4bkDj9KBrxusnVS",
  "key14": "Cm3dUsHgbMiGsws39KtoxvfatV4YSe5zeN122T9mHXscA1LZPgmvpDX98MY81uEveWdeKguYKPmf79HnsGRTLam",
  "key15": "6iMgJMMzRn1rNSyQjXNqVKwHyyHi5VxQtqB6USD8cQBA1cqhDwBAaWP7E2TSSj2DJEENGQ8ASA2tiP2DF2ts9rC",
  "key16": "5aDeJLvQ6cHoTsKb2GvhZkCr1XfGY3yeVJPpBoHhaxBSV1ukCZjLj16RHj9Ub25xRBqvKWTA2bfQ79iNX9kKNBNM",
  "key17": "514eKdPi7BxpxsFqTo9roUETX6rKymyYZcE75QzuH5YUY7UEt98S1dgGgjsyNEJ5bzgEWrk87mHXZ4Lp61zTwLnn",
  "key18": "73s5TY1PCfJuDMdb11FkoVrJeFhEP18AL22r1DMavX9G99pQRPbv4u9Rd1TS3tVhik23m6x2EEUym2ctetagK8L",
  "key19": "3LsuxwexASZhLftwqyVoHKeSN3M1ncBiFoDk6gJfQF7V9n1sr4ZRJCtCFfvHGNn4zPfWm2EduJpLF2nxQBue9T3a",
  "key20": "5cn4bAc4M7iVdcSJnD33mL3T1fC2ggkRRWN21eC9JYkEKi62dZn5k8CY7e6HpUYvDoyoXAwJigsNTMRfpDtLZ5rd",
  "key21": "3JHdqqz6Yoa5FwKDPbyEFnpDF8kWihZWZZdRqe3GkRmtMrVDwo9wUNTwLEy7iYoANZPcNPqhsBDVyUkkZjv1J2ua",
  "key22": "q7cvsKvUMvvYumCJ7LHwgo99AHeCs4BXbaWez43kU1NTy6NCHZGEhSGkTXWYd63jHhZjG8v45eesgkKXPC8wSZZ",
  "key23": "Am8QJYUeMLQM3zPwuwqfKgXvyVZEZvwumjax79pXi6HCpgPUxgdEhAk59gjEJcmnVTnFZf4M5BKy9vi6KgxJcw2",
  "key24": "Dp53ciBjFHYNkjAuC5aGYZ5h9P7skPZDDYVxb51edAZxRz7VxQYc52M9uypFMX1YUoBvowTndgAfpTXqxYG2LqF",
  "key25": "3T5VDhzwHJBghN1Y8e3wtePRUTYG9rcTWNWK2ytgERKyw6wmpqNBw2L3uxtgPSiQatL8pTXZ2kam6KG4EAX2vVe6",
  "key26": "5S9qUPBm4rbuHaLZnH4h3DwgZnNWD6nSFco1v2sEWbvhLtU7WAVG7RACKPVs2p4mBJ3AfQQ2WgNoGxLzZC366Mux",
  "key27": "5HESEknYHJHPpEgYsXLnbF6T2Emcr7Hr743SoWWTHQ2xaoNphFyCmX6Zk9Y8arjAxnVeW4ryvEv6pH3VqS87ggXY",
  "key28": "2Av3uhVdhtQSWZjq5LNeV99pUUfzf1VArg9hxobVQTYnmL7QNT7XqPgbFihzvDzDPu4tw3Vh5bmVKPKcLguZ9w1p",
  "key29": "2EQB32uGZVxqeVh1zU62faGbQdRN5kF63wmDVSXKBst3mfgvPH9cniP74uaUvgk9oW1xnUWSKjAkWDFLj1oExF5q",
  "key30": "5wfy9c7sppqeKNShuQWmcShKvvDTt6CjoJx2U5XgXtGBr4uKZsY3AU1JqbLcDYzLzAMzwuc3nHrRsBa9LYndPXUG",
  "key31": "4MW68HntkZKASJH1e5ABne8E9cxgtGKfUKeYUfw9QRuFbswsaKaYqYYLMqtGvhCLcSR1mE56CMhv8KACXvxYS5kh",
  "key32": "374e6UTCKbm1XtSKTDvRzmg2pjtdsa5PBRdmY2iorEoXuQGrQaYoMSz1bde9PuJX1j8dmk6ykaPdUqYNQighA2LX",
  "key33": "kxHuZ732y8F99YVnpGRWBY9T1rBjwR7yRhn6FiGXJBrEZJaJtrZcZxFRMFu8e928YecSP6Zm2kkryDfizzi2a4b",
  "key34": "Ufwjp5xMin39dfxQhU27yYRz5BcY692V6MxoNsdKESrE1cL3ys1i5m1f3B36BXbqWUx9JeZcEamV87GFyMXDW5a",
  "key35": "RSSH9iTMpu1Tv2XGkRTHzh4QGXEfRZpnLVmc3fTuS6nvtapNUQY2BmQWUPheUD7gZv6gsm9RebiMEEzh1wRQdEE",
  "key36": "5S7U2P2jhNyKTZwLa1gWrjFP33XBi6knF3L5UXLtWu1xCuL4btMP9HNyFcP6EyGJV9pcjWoft8kMH7VwZZbGa3D7",
  "key37": "3wwvmcrVpV9pMq1SitWqFxyuWNRudyExFvRJbge8xAX4AFb7nM192Q8qRuG47AXve7ederM7NTNVC2tyYYWgoLMU",
  "key38": "3KBQ2ag9FC1XMut54figD2SKtdTWoivcq3r14KYadHLzjCM9WGEM8Ck21xNXAmsjYK3A9V4LFNPoEW5S6PGhvCKb",
  "key39": "43sw1nQaxfBMv8raQvkLB2rp8psZxYsthfaHExaCd1kuqqVYkWWGSupPVmY1YrueBv5Gu2wXEWJq5E8RMcN3tni3"
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
