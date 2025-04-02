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
    "5oH6ANrPq2Vyjg3JtRFTxUi41B4Kk2pjvTdbisnZSJMENVMkVYpHeG6CHeJNwHb3MTVaMUt6eNYb6nMLY4UJcAKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W2q8my5PSmtGxoJmiFiie19Kw1Qxo4eibBbGR6zKnUwqkQ6GnGFSZJW9uCMyBEuWaRh1y3WxcWyH5BkzwQpGYbq",
  "key1": "5WrX7x49nurKGuSLsyeWGS32JVi3uKkr2ri2yZZTfb3i5qe7uxFKwMCAnekmpC1fj2RdzdWZiMfBArz6W9pJSFXi",
  "key2": "4MV4eNtydHF1LRyxECRWvM7RrbvmYJD7PSJsy1bSnqzU17dAs57dQTzBLDJLWvTehTWYRY59wVJhibPkD4tBWMm4",
  "key3": "WmWWyotKTX4YKj81CK72bJxg7wNwaCPndcJBuTsigDvXHthGHMddNrNp3BSLyVb5rANHBfjC4AuBxCZN1y8mnib",
  "key4": "59HUrFCMaVfzARsd9zQc4ezmS7MUvkifi4e1Dojb48muknbT4NxTLQb8HFBWtSncZG4vJVy6seC3VqJ4g4vFA4D7",
  "key5": "5DTnF5Sp6B1ismvLKtvusuYq4i5ZGDJqVPA4VPHp77BHgBFeURJgVqJKXM6ao3L5S2Lo1S3rsqLMBotCKsm8NH8m",
  "key6": "5BKArF3W2xGQ1upBUCtAVgnsMyP8a3ZMyVWGuv2vr3aKmujAc6poJ9XMNGocbqjeoKgb4NSPuVBPGptEvMreCKC7",
  "key7": "66oj8gACWSmVH4R1HyEbJpauTeLjBPyu94RLUSr27Ufuw3ifBotFMvF1nojTSL91mC2T32N9ZpfsWKHYfcxbAD3t",
  "key8": "3DWwoMbNf8gRqGG3v3ftTReehko25kRZdYBeKEac9K8S7g4Dgy2VQVvLTnioHM1VSPUVSULNzsTCMVTzvxZ3mqBX",
  "key9": "31eTZ6pXMwrW5iiFNXvFG13VTpjySpA7Gp8cC9hyJbFFGYLBSz5GhBK6PxAacQQSAeqtPBH2Y9Ddrf66wLBaGAQT",
  "key10": "XfdFjNkjb8andGdjJNfw7RNXrygAHTrJPVhd5pdt25zyG5jiLf9Wd23QTbB5jRMPWJWE14U7sQ5LYWvTCg2hrJb",
  "key11": "2cs7ZzSKw9v8XF8akQaibdo6YM6RTqauf2pcjajEVdaE4vDQ4bjryZkEccHKowjHDjeFSvzRhXTfQX4e5874KfWi",
  "key12": "4kFgAdo52aUavNNz5gCU2tuJD6BpbtqTWTDsjuWmoVjhpLqsq3suM3Q71wgxCt4UrDqsHzeWE98TenoVYDoTEzWF",
  "key13": "2kbMbxigGwfLwtVaeRcYGSbzQFvgmTgCMsYFghZ3o9xQCBKS75hXCUfKGr6KeFbinVPNYZ1P3T62MkDtwSmsxQwg",
  "key14": "67e94ou5AUZiYGXk8bCYb4ak5XnjujZHyuYiqKdEvXKRvDWgUkeoC5c2qRAyoo3hbHmCpL6wGNWmiNhD3mr48pPd",
  "key15": "5o2tjUF9c68WGN96nLqRUKKyn5W5goEDkKhbf8Scb4bu8QcjKGDy5NAPC1bws1rXAUyXDz7cFSsYPAVnBWNCjQt",
  "key16": "49MYdrSzSxUhMJKLPXt8s9CQAiKMarBwPSDgnBysJB8KB6rjg2mff3tXNkvbWZESLpQYh93iNpW1KhfS2VrutSiM",
  "key17": "494wNVtjMNjPHC5ZWDkDzZfkCJwz7zFrQjHZ9MMYCDs5X7wDiWSuEqNm1uUzEjcHh31BdWmptbJ2nyDQ1wV8zuTa",
  "key18": "RoXELVg6t6HFEmwTziFDqCQfXLzGnXdoSyAETm3jyah4KRq9w4chrEV8meU2gNkmx8yCEJg4j1koV1wSwEep5kx",
  "key19": "2y2ARfnyXV91R2uUhMsdJ3xpRMohjBjxmxCg94waxZh15ynnSkNMjdZvzyChvm6uSkxBFJP1nkCSALQTALfp8CEp",
  "key20": "Z3KVKsSYpvRa5ydX7DLtEAR853tCcGW26YdKMkA9M49Cd2DNG9126okGkKBwNETK5qyS2F4hduAGZomUEfijSin",
  "key21": "4wfTY8RqG7iqszUme22xH8rbqWr2XCF7Wd6vjqXjSV91GKh2qgfeFg2i4RYaC6xTVH25bU6WLagVHVUEEPWLtQx2",
  "key22": "3ps39oq65krYQHc1CsC3CdV1Zs4LpzEi8GLFouU8PVXXdduzMEBVkN7s4xJxkxajYyWHCWJwHgQus1YUias3E9jd",
  "key23": "2GtCFqKs7zSfwbB7wkpo8iQJWzsPra9qhbRf5kXEAZ7g2Q9xCu7LkTsUAzJiFt7Zig9avCFEoiuS4gDkVpuyATJe",
  "key24": "7FfmMQBQWMvCijDa3J2GDpHBsu9hzkb1RQZAxz5q6TK21UaDhdfzRKKGJgnhuNci2QFgZWyy7jbXe4HzFqP62gL",
  "key25": "2Hvmn5w1xdRSePfEXrs2PgZeXHRj8CShyeyMgqfMujgr9ySNtnh618CvztztTvVow9twU5PMLzitnN6VgdGtVk7m",
  "key26": "4unS1xzokyFeAeXWAJNHcFnynnsNPxQP2dvJvtxysDVZHcXvpsvZUKZghopgTK1dcr6FyjHvo9gbFiRB1enRxac6",
  "key27": "2Z1EbydWStAjVrpLPya3j1ccvzygVVAeE7XixQeq6bXKV9NJcaar6wEy7CwMqFF1J9rJyfgZJZqiAw7yFgQ1xuwF",
  "key28": "3N6JJDdSMNehK39ASyPMJs1h1vFWK5XjjwnASKx5U8H8WNs1Jf7gAJ9niPaFVLHzVEkwDE7ngjUVgkewaNwYHQTZ",
  "key29": "3jxLpjBpazq3aX7BrNyTG3YfZTqFTGsHLSair8n8FDmqxR5Lu7F7JbjQg73JcnczEdEoXpJjCGXW3RzCwhkzag41",
  "key30": "4ntJL6KNxd2JFxPdTBwr5G1SRt4iLFCpChjamoLwqPQRgzUHrpDXak2P1XQzbizDw7yT7V2SaSQk7eqVeRbJFUL9",
  "key31": "3zzRhWCgw7Xy8DAwvzp5XYjcGWx5QCNv9F9MEXGAfAyS6k3E5ZxbDpLaLPjPDXxgg6q2CqA6VzuWY5kmfCh4eJ7",
  "key32": "4YSt5g1VfqoqvYAVpvYbhohZubcUggUD6padsFPZFLzRdgJ17CpQ1JJGob3pGxdjdABZJVbqn42HQfMKAZtEVyBh",
  "key33": "3DoZ8bfHQVhgyJjESo5dQosioxydXCzH4ovWyvNjPfnDgPavR9CLeWfceRTSHwFHsBJyERnaYwhsiyGhWUL348hR",
  "key34": "4bRAnmJG37H1WjkMZLsL44U67JtWzZhLiaKuBUYpdvJeEVDnDnAJ9LzsaVyD6EcFZMjbHS3cE2rdcwk34crX7WMR",
  "key35": "VmNWTzsZvFYNbGScTaHyPULSqjaGAKDFVSUH9H8fAc89SRYH5sxtfCquT1wE3xVd6dQrEE68aAtoJGz3EsYXDev",
  "key36": "3umBRiRQsJ6GZhLJ1aiwfSkaw84PbUy9PLWP8tnweaRcD4unXQXHaDckgAbKtFo1bvpbfaPmTEgc1DPLtTnPSnu9",
  "key37": "9EGK8Tg4QWhW3EaWnSY8CFnkdyrC17A1NqvJXE8jU8hfZA1e14GsDKMbDQemFCYtpRkf2eec1sWFN26vT21eKW4",
  "key38": "3ERKNDczPk24Wup4TMpnBtJALJUsmKFzVdsxfRQhNYsbtsFfq65rHG7AtZLnGjZghm9tXWXprqQ4EvFK5hNFjH5a",
  "key39": "2ttx5aqtc7RSdNG7JGbFnNcNBpBdEGQCivbaGqPC3jwwBzSmdDB97VqPhzzYqwp6s5EfcEvduEe48JgVvRZGR82T",
  "key40": "YtWeRYXc8Qx2Vi3wGaD274nZhasq3v7rrfvXTUph5CB4CcyfQp4s4ks5piesu1dTVQduFKUZAdd5UmJsR9yuDpQ",
  "key41": "3S26HKvDU1xwfMPhJf96jmkWDYkHFXmpFEqfGviugP8w21daJm8vLS4cMeQumkmUFMRgMUSbrmPqpwCF1tV8ZEHy",
  "key42": "4vkkedAidvMb9WhZa3HT5L2eHs9uCyrAmyCunZnr8LpiSSu9BTiWnwW8p7XVbC3XoV3Pn5v6t1pM9S5MPsu5bTEg",
  "key43": "4qB15n8A1NQiHSnRa2guQroGki1NbroS9Bn41Vq1DqGSgRtaYtUYXXUpHVe9KdnSmpnxitLieTsuWw6LatoPaCpV",
  "key44": "2rJatxwpLYtWMJ7QtC2JtzFHd5p4a1SvqiDhdEAzRra2hBSnLDFq7DeWY9TepaLnLtkN1LHB3gQaeC8cazx7WqAS",
  "key45": "5DMmj4AKtYWo8zsHiyXugAYk51CsQSjCzpvZKa3yMfvmbYGYZRfuDsnG5Tz6NT8bmYCjMQFnhr7EDnnwFJWpHLvs",
  "key46": "2tZE1oBXvxgDBZCxbqZL3JsxC44o71uEtLDLyNVNyCwNBMhxR4mpgyw2BJjRb1Rhc1nz6B9oRinuMraaGNVJp3sM",
  "key47": "5y9vajUKcWanZuH3smySH3RAzgj9jRxTtwnKZYFsy9UpC7ZvSWb8RVxq9TwdRSKiX1t4ZBf48HYGFiqipwuqKK4j",
  "key48": "4VkTgiDLLQPfrUvQtnNUKxDAMMTLGHb1qbfuKqBZhvT6WSGEKvac2ezJzFJBsuhxaafpJ9TiozT43TZyoE2hLXLk",
  "key49": "xNjP4MPtZCzm5qjkdwce8dx15fwFaCASKNdS3hx9muTB86cRgkrqcWM58xAvQShTkWkcyVdtY8q61AAyZbF4YeV"
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
