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
    "2rABz57Z2Xs47pZupZANbQcBose9ssgCYWN7nRWMsBeGbc8n6McxNzNaTjaeN6zrJ29S5JaELGQxeqRxC6hxY7t9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAmb6AE9yueKhAXMKy7SJM9z8azXXebdQShGutqkUQTC36EwzuY3ikJDLNMTLvxkypzPDYYjSLeodUZgJvzr3nX",
  "key1": "58P7c9gBnW5RP2To18SL3Lj1GxKBZ8rkcieHb2N3eUcBExhtGbmSQeGfzCZHySu8tAnrfa7ssDVczPB9UdLiiZZE",
  "key2": "3yxGbEqzTTjmPLY2FYywkeA7s7mMj9wfC9oshBNUshQ1AUtPXzG1t94JUZucbojMDpji1CvgQESQdUN5f8MrQRHy",
  "key3": "pqSdgmZstXeyseNjegYpKQacWK64UTs2797UCG7h6ewBZ7Hfux2eGG71Fwa2rZYoGX1A67CWqC6YcMqFpxmfTsi",
  "key4": "2j9tqSRmpybGj91n7wfRb9yGSgRSZWFPYcfxJmQkKKp7tWQ9Pmojm9ZEpvtzvpVMKp2YcUJMkkXvFxWsbn1TER4n",
  "key5": "3Fiu5Ekc4kdEy4nuWxQRFe1TKsX9GZzGG9uwBnMX8RMPLaEutj6izqKVmuGMuwp5EAFpCzeaPPqhfvYPXZ8kVMp1",
  "key6": "58a7KaqPqv37ChpbGnE5RXsAp6ss3Atx3pgD2F8ooe1NdSo1fR6HG249i1tXsQGYfV87y91xwLLqT5dBy2oRtED8",
  "key7": "WHVCcTV55GFQNGW7wMNtqoum3gGNrpRXYmCJzMJ84DJgV9xF95zp1DdApyHuQCtXRCVUT9cfj8zKCarCz27jw31",
  "key8": "4mv3YkE5BjbsxY9Mahdu1fLn8JeeeaWakWCwHBJLsWtgJjUZctWj7c6b7Fw3H2HEw1diy43KBM5wEm63xgLghKVu",
  "key9": "ERh2VCRDkmqwmZsohWAS99yKjRsimr8MdzFkEEnQ5Qo97z2KWLXzdmsaCSGbUgqbmoEvWYgepjCHDiyNiEi9bKj",
  "key10": "98KGnWQQvkef2BEwnAA3p3u1umMARu5P2RnkNW8DtCFCD39iUorfovtw7oQFJ58Eh6JNnAmUSm7pfouNHoBj5Gd",
  "key11": "g7MmRCSMBVmwVkJCmG6qEirnCRyzGp2scteXFiBzVygC6XYs4Yb9Jun8ovx1Wmu54wsf3jLHVfFB9SPspF1usQj",
  "key12": "46TCa7M8jgKtBBKeSXroVfQV3N2qUiunQw9dmwigv3fGadSGpyjPMXNBMzQTUFEmRrKzGezruHWjfzqJi2wqqF8B",
  "key13": "2HMszLQRpu4FJdiekzW3mg7C47Unub82c5qz1DeBpSCQ2fE8MmvP7BGgWHk6HnZWtukbStdVVFkLqQQM3MFjoAWf",
  "key14": "4APXUm1fBoQUCLacdMWh8V8gioPuPUeFRFapmmdLLKJ9BNeCfVMbXLhwMqjewaDNFdJ7WV9zxTUbx2RhULoLhky3",
  "key15": "31BdiMspwo8nqg26DqpzTHNJkVGXxP8gLexjakkBWJE3L9f4sSkNPR1vEDxP9d5hJohUyxPq7R6wCQN5bsnmJ83H",
  "key16": "3pGj67ges41paYsiNKQsqioib9bdXtTqnQj4sYywvzCqvZHrhefkt7j6oa7iZoU7oA2FTzMZNDtynhSiYBq9E3NZ",
  "key17": "2YQACZ4GsDzuqvDAXRz6qJ4SoEwdkVxrmMEj223Wx9jGSfAWinK7PKBjUJPTe9rUd45juSXPdQsBU26bRhwPaR2h",
  "key18": "3ZcS1YNH212CKkxHhXGQD8SNASyBP7zjiYXoZYM8vvMtUi6rNLyWA5hCiUkb9Qr6oPc4e3ddJUdKF1y3neKqgVs9",
  "key19": "4873FQAEdhchWqVEwszuCSdt4XRiyGmpxPcopjHquEZMkGfT8WpZAhPe74ULAm2SRrZXm5zg5e9GeAUHrCxMprbM",
  "key20": "DxGVhgVNH5XmXQqoRPo7EAjTuQ25KUybTtutxJvkNWNEHiqXzNSK99fBKAHCWjvzbUUSGCRXyBtUrfriacZvmas",
  "key21": "436etZJtQJD2ctRNH7JdtWag4L2j7GehgyyJydDBgy4jzFVr5gLZ3T1oZkSrRAG2hkTq568NJvPJqbLv9pgd3tnF",
  "key22": "4MMbAV4wJ62e4Ud8LE5SQFppJ6RbjY4k4csbSF9PeD4nWmjqjFka6at7zBjR58ZHs9ZxgzVVT93vGKJhWN9ZSwmV",
  "key23": "fKHbuYn88QSGRCNoG5pFr53SUqCwfZcfdGgjvwLZcuweZ3LoLLkR5L2MYzrVEETSqhMLvgyvUhLRKFdgc6hZE7A",
  "key24": "3oCJDhSPAz5mtiFEpv1iCUeihv48v3VdZzqYwoaTLkC8JXUYCwYgQFht6k9AqBqLE4cS8RjhvVbfSaFqAVLbVAHH",
  "key25": "4pUKm5zKezdwcr3s1qoyDxfdYP1qz5AdQtk65sG3CkR4fvpDzChQ3SVM6ZhnpSWSHHV7U3MnMruJobcuf5asJYwb",
  "key26": "21XSzxU2rUkrzERra8GG3QPqzdrdxnziEkdnog3JSn3qvXtfqRf3QEiAvACmqzkSqqhvcbuC15Vvu6JvJEGBtv6x",
  "key27": "5hAG1uj8bFtX1cXzAbMQTMzocKBAmE1wXWeKVgiYFyZmucDQsjf1mw82A4RUDbHWGjE5iusby9BWy6ofrKgc3puG",
  "key28": "4Eyr3WPynuAoaqqsYbP2jQ9qWPdmye7EUTSnJfir3eAJBXDEM5u61Vh8GLkdRtGfqAZnb4VKXdpoiLot2zx1SbhR",
  "key29": "41PZvpr7jvVoGAaYBcKN8gvChLVv5aMtcHCknGGZCZ6cf2VRbTHmtRmPV8ny3DLj67nsm7tERVyf5pjPKMxKADaw",
  "key30": "4NE7hJKKZ1z5GwvW32oNw5MGKVpnxj7EMmg75Qg7zDxD5cFshDJrnupTDoxoBmSw2gLDNapW66696NyNoAqaG46b",
  "key31": "2nj6Fi3VBjn5cbGsTDu7GNvi7AvXpyoFzUzYN3gdFyFnsAcjrG1E4jnvKPcXcVEMJ8J4zjv9AzMHm1VYhZZB7fQ2",
  "key32": "3negruXkxh6Sy1spD1SF6HDBLacYqPUaf1b4hfvXCgj7h4J3sB9eNnFWZh4fySJ5t1AXA2YJ5U66q1KKVqKiBtMX",
  "key33": "2wmBnUitWYygaeiWBkZwsEMrvdEGmRE9cc3mNWfNYMewctMQauPATfiQbhij45zzTwHAZP36Wd87RCsfGsnp1SDc",
  "key34": "3uPdbwi3rDscENZVXbWTATy6rnhNnXFLAWRk41sR1rs3Ba32cEoVBepbuXwzghNjkw4r4xcuukeNcwZr2NqEpjCF",
  "key35": "54FCQnHXpgCNn9ihBKbxuGUQSATXbgDHSVGb9Hzxma4v1NHQdE3P3nW7bqkKqTaspYfoWxLYF1oqsPLCNM3t4h3L",
  "key36": "5hTPWJegPyUpESQHcEk67WNeEFh4CSmNa5HuNgWiDPVQkFNPEup16RTA6SChRB2mACFw4w2orsAmUf7GPsQErDj7",
  "key37": "3Yj53ybrjLEYSZZuyjR4JSEj1bU26fHinesJG14aPpvd3fR1ZYYTjzGG91pFqetkLbYpNc4prMr5MCDE8xHroHPp",
  "key38": "2bYu7dfRnSfB9syh2NjYrPuTXjMsYDtgq71P8vD4ogqM2rWFCJXMJWoQ41KeP9hQNufxSukHqziyswGAKwctaJaq",
  "key39": "52b6x9jurGnUy9PFdnGruFGGfonqeApZnEMdmiZnR4JAZGuWmY7UduXCgVRaEVR1kLrvQhzN4f7G5cXmxPfghxft",
  "key40": "A79sxAkX4FhjzmdhsVCBmDQwVBhEMv5JDLZ8ZmdbcWCRbTckHmhRcWKrmRdcmy2W8qGQAhqstHd9HqsL5kRAqW5",
  "key41": "3q8sWt6GsfhYjEsgDqQPhu3d6Y6HueQBkskyoYZnbcSgPxwHyz6m5iv8LH6TQ3iUYX3kF1fPmHPXjbU6EZEYSY2H",
  "key42": "2i1tUtSzAxLvnAekgbRFcF4BTsizNrdhXxcZhVedAiLSiKnDFGUSqSjCNuVs6kGQoarjMGAdNhoUBgiS3naHo1xm",
  "key43": "3Rmg1L6EWCfYADMoCtNGp7GNajDZ8w2e5ioxdPqKixGfqg77aNjADWV69CZdQQ7wzAJtq33YVVDbp4iXBt2Xn7NQ",
  "key44": "4y7hhqFJVmN4pcKXdQqNSdAthHZS31fZdpb61ogTmTTFtFVPYuTgLrNWCNj1qvd1dyC3hwapw3XUcw2nxoirtAuJ"
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
