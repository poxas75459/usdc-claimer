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
    "E5WadrY5ELrusChZttd2vwoLwPLvpajQPe5iteRPJtK4GrwWcEMCg8nDWTWc1PSYTVt7xZWgPhFyLJkLuuW7Wcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2At4GwhNnQTKM4HPpes8wSApEYQkyadievy9ZQmKdSbAxHeBN9aMf3reM69rNA1HVW2auT2n9sb3MLKs1Kuwwsby",
  "key1": "2S4x7C7mhpXtGYvZfmp1zuBeUDJkfTTv5aGYcGrpJGsGVNG5vksV2Z6gn1N9mfX6VgirtrALaBKzkxVwF95TpACc",
  "key2": "22T7uDhdCwfZNPDSv6inHkw1BBM8YPsTgJZwC8KWnvaNQn38J8411Rpj3zspfivwaaACquEUijLqubbJHsQSnVkV",
  "key3": "4tRvCqxoaTa75JE24QYC44w8rthjKqiuELtta5mMoyhu5XrVP24WEdjRUMNxyBohXkkPzhPyne7QDM7WCP8fZwjD",
  "key4": "2G4pVV2iZG5EHHbe9H2VYtkA1FJqWFCHufR2UyAx8Y2Xv1HfVHwa7XTocD4JJhczUdfTUYjx3uKbFyDGDqjgdXyU",
  "key5": "53yAC59bL7ScG3XnsD5eA4tKriJf8j4nxPqrf16o6T1CMD1ELxopWyDjptZgjg6vHHaQLrpJs3UUhXgnvYRJGLwB",
  "key6": "3t5ZFaj5yMia4Eb91gEpm9qPKRdRntRQY49c2y6VbSX8chGuk5gWrUR1yu9a1NQukfGYBUeKU7WMA1DWFZ8eLu3w",
  "key7": "4CEGiKyZBBMTUqPNfyL4VRYf9G6Wo6DgtapCvG2iDr7U8iEZ7SvUdMZ34qMPHoRJL3SbWE7Tvpr3BCRgVzRe1Abr",
  "key8": "53CupW4gaM4zemVPjKGhVQh7WRknBY8AUxHumMuGT6krAB4qQuLj26baBk2R6TaYphMv6d18LKFv2ag4PKH9d4vc",
  "key9": "5qbN41vRbuzJ1PKkeYyzE6Jgy5c6KPdHueZAbqLKKSczEDjNKDFcuQFxJGefRvdzm6F9BYy4DZWMDop5vV7pLceZ",
  "key10": "3MqbYd4koU8or8i5uUCGuFUPwo4WeMsbGNsJGR75YS86MgERL4bNuMgPMvAjBpuSrGLuCKuQdLvSMki5nrYbJ84Z",
  "key11": "5r5vfqcpWqoGzFB7JZ5jMEpdizdjomTAiB127Uy9LsnqpP4W13TNQyUDWz1oFrvTNCJH9yE7Qu2wEWFcczZqe1za",
  "key12": "35gkHLmfkpthHvmGjoBQYiqdWXjjWzZ3eM1L2PHQpVEDuTcWJxDxoRBaKM2J7N7JBzyweeq1m1UbTTqT9Vq5ViBb",
  "key13": "41ZtNihCoiuc2tgkVRAip95ey4ZtPCcjEier4NWHPE4PYNd4G4tkbJ35vjUWBsKZewAEyXqTGnzpNJjryoY7YmKp",
  "key14": "5987cz7LtMqd7wBCBS4jZFKeXj268rqWHEH2nKXDEDKFZyPBXTy7Ucb66wpPuGyJm7buyiqj8t41xAevu3je9iQ4",
  "key15": "4w2HvuTHh9VdhervsYCm1H3eKTKfnLFpTtFXB9zpx3bLhmDsQB99pwSVo7BZYGc97NCqFNgEsGaXy3u1v9v7BK7e",
  "key16": "4ybWTH6MbKKBwxcLqzGSW3V645KPTwH3sUefmiMFBKfeg1ejDzmBUQDcBiXeDxxLz4x1mnjuJfHKbxCd8BxeRqF7",
  "key17": "PeZJ9gEWxTnpZbaWbSQ2ErzBaz9vPr43AXjQ8yweakqNuRsJiGcyJdr2yCTiDWrGJty5aLZC3PG1q5HifEwSmBU",
  "key18": "3dWYWEVM3Z9QhgoyWMmJ3186A6Houg8uQvJgTqBz9tvuMHfA4b7nyq8jpLSS2fjWyYRECyKhHvR2zimwy3vJeJek",
  "key19": "5mEJVGa2dzBdGRm9EuveFpct7j7JHm7ixYjwV5wjZChNbGUNHqjD8VLJT241oHY8Datgt7oQqJ52Ake6o4Ja7996",
  "key20": "3kedvRF87jZpVHEiNbgPxqEEZ7FDdybqtrrUNcmjr78xgzNyC8VvvBWWTqSKgRY1534ZEH8sKtPv6FfgBEC5as3T",
  "key21": "3TNmBTGRhnu8gUkhaEFXWTYDBGFGxW1Kkg6qcnzAcHxXwGTTcB6SkdzVHy4Be8eJxuHqQWgfBqwdKxYpnfmZ3k8h",
  "key22": "5kMfLJo6NgbqyiVenMxQX74LZaqQYde1vNjbVqP3psWoRbTrB9fPn7TvJAeJBXYdzbei1XLtrZhW7qhRyNtSRvxk",
  "key23": "3Sb8P7Dj11baD6RH2fkfRJE56Aow49rBBW6xSa7sXtbJ7fCWZGBoXyZcVzpSaJgKihtUHu9AJ8DCCUELLGHHgL5g",
  "key24": "3B81ZwmrbeCT1Copgv2B9mnFM1Y7bmwuoZe6Nm6bpn6MrKVHx4FuEmxu78nH3qywCAKEFiw6F9H1iFmYkS7CtgAV",
  "key25": "2Ugz7fwPMzkkvgL2YCWj5khUrPUyNWfDip3Xt8ZurFmRxif1u8bGDi5iyEDy9nBe2Jd6f4AsUpVdd2JjNGobvCxJ",
  "key26": "Jum1v5dq7TCbXNUZbc9rnyzx5gXwEgmch2mg2yqt4hFCB3vNj3VWqVb3TzBvfAc5P53UxTFMUgnYUPZ3P4zapeq",
  "key27": "5T6v9GqQeUCrefP4yEZS9qmN5sPSwHczdtmBd5PGifv8quT6QWincviCWDioH9ysPtPD7UzcFszz6YkKzNNq8MZQ",
  "key28": "4QnfbU1RnofF32YbtmdD4rAVQRaPkN4VerrX142bzXa34XzxbftndoQhcR74ordrvfNzrCxB3RxjuZrkMbMHaLJB",
  "key29": "3nqh8P21LPQk7TJeL3QcjgAFy4NM2S7UCPPnXVNNobi3kWw4V1sW9x2AHDeCd8m7Syq1rhnfA3HtvtehhFcCAqQt",
  "key30": "3ocm1YRovxs9oPxyK9dVK1NCLrn26rK1Jrexoh16p1qjm6crEPMxwWZ2NGK5aSyJZwd9tDuTNX1yqF28P4EgGa9L",
  "key31": "3q3n2RR6QHosMxRQP5DHfi7iKPJsdu8zbM8YgJbUUo4B5EE3vegqAo6b6SE4SLk6iJVishtEkWRqK64Tnf1o1w4L",
  "key32": "61qZaEK5otZ4mayTKmaTfMEK1o1xFWZ7CZzkXrwXoGTx77MyzcrDDwQF68y8JZrsU64dVXFFbx6udEtZPXtSixHK",
  "key33": "4HvUtrfd889WtefhsxJBAQAizDL5UvzV2tMwNg2kNaEXJA4q2nTtaymJwoRb4QhUaShZWb796fYaJxZNPMeNjHzT",
  "key34": "2yyZG8LrZ1p5wYqTLWoxpYxagwa7qRvm3XFk4AJHP9Zh7HHDMVju3phdfd6DwzeJzYn12suNo41UJCnquBVSVj3K",
  "key35": "UtqWgER7bFmJpqfpMQm9BSCxeFtmSiqfHwRhkaHzEV6SZH64SjU1vqVZWQsGJaQQa81vLv3fzeGZoc4dnLAQmZz",
  "key36": "4GNphpmCsK5v7L2ZR4LSMihA4KZAfdAjYzbCaocPZp9LdLzfWRcMWqEvynZqvtKbSQsyHptqgaaK1yTr5GMPXtLz",
  "key37": "3QeRitVPvin8oxy3kr2KX5g3vyXwxHcNfUwAbddNhWw7xSEMpvipzrpJfpPrVToVNdHcXHGkHai9YL3pS6YRvwBY",
  "key38": "23FhJ9L2jhfBZePLVkGrGvBf8x38AHU5YnyRXbQo7u2hxYBDNuA27Bztc5zq6LMRZQwQj2xQnn5TEkD8ZgxmCZLi",
  "key39": "5PCBWbczSc7CpMuUtSEBPuktkkCw6WzBGpubKLeDwXBaVeVRbu23vaaRHVEmQMa7bz7GZrdqmd2D53pfiJwLEJeo",
  "key40": "5CqXZE8VKgnqmsNEkSFVCkQiQSRtKh1we3833YCKmYGiegSDabHLbVAAA3HP5XBWdzHQiUjB5MgDXwLu99XCJucv",
  "key41": "2jtnxuifC6AeH8gjfPdcz9j9zoWuyvc7ipTWWtDeuCxHDXU45XGitunf6Tksx3ofRc64TDGtgX5vKd5EqbYMWCAt",
  "key42": "3HD2aWKftXso1CbDAhy7DHmAs6i8tzLk3kVMbZbsU7giwgpAT2WcvcTU4tcQaEyFvA9MwwkWis1GicuE5R2SF8Lp",
  "key43": "5ZtHKjchxfGY9ieLGrGfv8UDNn6QK32jcZLiKXT7LyWC5Jhp9q8heHQBEzqZEEEUhFKmVsRRUfDMFAgQ9sGt2frB",
  "key44": "4srhR7zHaGNiwmocF8URnx6NZfjHeRW6dfHRnBEhoZaq56LZN6ryeymBo7UUhQbB1N7BaP4deSrsDXvVCeUgt8K2",
  "key45": "364GMhK3RxuStBwM5WHpjTWG2wYonSNUu4JtortoLbrEQ3AirKkqrNa8PbyCBMH8ifkbhUM4JUt45gZ96TREtkLE",
  "key46": "66dTVAL6B4kmJf6SGf4sVNe1QdvJfA5qjNWN1a9r3VfgceNPmrsdsLS7sAnaY8VqPeMKgzzxmRAGGViHMf5YSRb7"
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
