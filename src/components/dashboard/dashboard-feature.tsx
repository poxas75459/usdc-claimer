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
    "4v9SVeQnjCot4Xnp7PXfcMVFRCvaj5ELzi7RoQH6euHFsB1j873yuzkAYkiUvFr8wUco4NCz8YNWBho4v99frCBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Ucb7fUkdDDcxvYME7DiRqffEzBeiRW4jTC4cVLTR6bD6m38uQezqkvHeXK86r9nicYzJukms9bFd9U1ePVKhaT",
  "key1": "5xVe4gTVSD4NLwoCNDbdUghzBsUv9zESNqmPjuoR9MN9HmtFnofvR6Hz6cr4uPXGaUERUt8bjhJx1cSA3x1xnShb",
  "key2": "6yakzFcE5bhzeLLhL4gKWKYMwQTvS5T5dZqv18nVhMNcohMik2oMbL3oybSDrR688t5jjwwtznQyMhgahMXjE6v",
  "key3": "3i3FVW22GpFrU5NEqM3yjHLk9gn5brU7BHZ9bcnHVZ9MHL9rQ86KhEnwnRXYitB3pDBRg2q8GddxMEq8gq3MCXrw",
  "key4": "vqWFudr8qUHJbXqmYfFozq12x6sU8C2Q9Df4uYnTqvMHmTFnT16jJUrorwqsbiKrxAbKzm8hryZ7EKc1ugphncx",
  "key5": "w2BGLaGqbdowgEvfSNkDqFz4qZp7tFXuAajhe1tgsCL882oJHkbGhDbFWGj7g99XS629x3rLS1bA75sYek5GAma",
  "key6": "3KUWm1MJzUjddpmL7P4mAmJeyJWGcJwigJGb3YppNdj5i1Mfq3bxK5RtMEvJaS4RdZZHcW2UarBKTnqnuhkTPxPu",
  "key7": "4zKMjhYjtKquy1VPnmX3bMjj6EgDBV6sK83r7WcSBBhqJ9imF5T4kvp7onvaH7NksXw4BoqRLrsh8YpCMy3Exfds",
  "key8": "25kX5e5FzTnV8N1iwoRfRGXzeEnWy3Npo99eQuomgFiXkKevAET8wxQW7sTFy1fNXEopjfV6VdXu6nwhBbkgCudy",
  "key9": "5ikCS67CDg9425bJ3Re9HgCLWXBtFFv9bJxVHodPqGjgYwyq8bHs81Q1MwcrZUReLgBp9QYz9xChSsivTcJQEiZZ",
  "key10": "5DL7CGxCYkv9dh2wvvaUu8JnxHZktxa8GtXRmVd3cexKKoC42qzRWViyVE6W73LaxfrS2GhoTsoc8JVxBSpzsiVG",
  "key11": "4GxA4MygygRCCpHYnNYan9YPAe7TapqoLVbd9kuKjmvtfDWjLbRoe9Pk2LyYsCuwcmga4JR3JZ2aYDF9gRBDhMmD",
  "key12": "4W5Ea81JPyRqt8yWyXtD5BSSqKt5KBDqUpUovvYumqxFpKHw2rGB7dWLccnZfxAHG1LcQa6S1qf2gYvrnupWqvQB",
  "key13": "2EKgLa244R8QFM6KkZhFF2vWfSo1FDp7AECjrehcbrW8CGFMA8A7yb9VDWemN9qMfQFjiwZpP9hSvSEdVe9CCtCY",
  "key14": "3rW6rKrNrKcVUWSWzSUYZTKnSNA7KJRSWz41rdqehpxyCzQRf8LMKSXjVT7TpXoE8h11uJjNJFt46YxeAgKqYheG",
  "key15": "1Hi89QSc1DzHdwbp99V3qQ5N22UeMbdfaWquMXJPXBALLFufjMgDE5YRdDDYbCicyRF2gdURtub1Cm3Av13cSVz",
  "key16": "3qBK2yEZBpQLrQCQwKw5pFcJYXCTHqPFBXCmXNomZ6UobjSECHhpaGFR2N1dzYXhP45egFSnJvDsqu7sdLRtUg9Q",
  "key17": "KSqDMPDqjzGi8xDK6efN7AMPxRz4YKYY2aVGs4iDEfXpPbe6xXxViiEevQXoKQDX7Zt17RJCSXJT5BSjY4RasLM",
  "key18": "3nvdchMHUicrGGB3Zpit3a3dZTzEQXkB1tukAZACDYo1m46YCzFQwkmCMZVgXXWQV8tH2gVg9nkq6ugSB2tUMTo3",
  "key19": "3pefwZ6kzX6PUwcFf1kCtDHiutUKJiqswQNoV83NbZR2eLpkDTbTYyqSiMVXtzG1mgnPSgaDP1GCa3RXqrcUxaLa",
  "key20": "QiyfASncZE7FcPFTDXJqWup8BFRPR7sDk6FMv7KFPEwq3VEK1ESTSxy5sGRve2WfJSqv4sqLP2kewbVMRi8ktLe",
  "key21": "2Qs1oFMLyEw8HCxeeqDftYQaCgDBHveuA5bphNfxLgX8ogvEYZusEQ3QLqr37r65Eiwu2RFtk1xUfgXB3n2Bbx7U",
  "key22": "4WJ6zi5J8SMJBR85qdB1XNC6m6yEyKxbGthDz7YM8J6SXF7RKLdgAaAUgQRw2sRTghEYvQfRhpocGA782hBLjmYn",
  "key23": "5kxbCxecji7exTu6BZTfWbPjj4gSBed29Mpx4qtnfgbh2iGiHAHXnr1o7XSqrHqRohqWEF7WbA36jnQ4sBa8J2o9",
  "key24": "4yvPe33S5YAZSdyPuCSuYTU5M41aDseXk96vEpuC2AhyzWKWrLQ6oFSeouEtSuPctcbbtuNMmvfqZUduMetgosV7",
  "key25": "3qMbg5ErHev6rkcXVLzBw5Yd35kdAuxiGQbDd257UJyqXKA8Ss1Eca4idjAMcfuWoNbifKymRp11jdSEV8CXxozv",
  "key26": "Wfj8BMnSBmcx94Y4q9HqmoRHT2GZLdm8jNJSwhQLd1Fi5Jpa5Db6KgKDVHpQW6wGDjt599BzNudmXjBGPvaTCLT",
  "key27": "5EWUSNVrq5N58Np3Lmo2oM4bZb6iGGzXcHuaPBPHbBuhjTJ37hH5g2t72raR6F4aUCM5X9Bkz51g2aYuGasTL76f",
  "key28": "EF25i1EN29Lq5j9aiPckHQrZJ52ziURrXp8v3nEVwSzzR8c2Y37MZphguSYcwPB9nKAhi2XcGPGkv1h7DLRWPub",
  "key29": "2qtgUpwEZHFmzvNNwwgFc3rS3kFY7nEmN9H4FqJe7fgSBx85KERBHV3iCVb6hgTMVm24swxU8pwQFLghRpwnG9NT",
  "key30": "4EbxRGnSfDCrqjKHHJwNQsX6sXP4eDdJKMNF2Zmh6KKWsGa6yemyAxstrhWbvCKyTPJjkSHxBnc8naTdWCo6obF7",
  "key31": "3herZyBbXZ45oedR2J7jNhvvNBZAPmhDutfkk78FCaVCHBMg7QnL7XWqbStcebbZ7noydZYNA5YmszcxJmkHoS6Y",
  "key32": "UR57KoWT7eZdHPESMQTiYQJeYAvb5zzjcCp15gT8QhQfktj1yovPxc2DMuvwpQAzMEvbAnCw4aaYRjcGFGvUWJk",
  "key33": "356NXvTYCAam2UK1HDcbKtRhtFRGSzAVgE73pMqPCed8Mb9fvGez34Z8CVLZnxqLp9yyoxMjYVVUHQfRJqB7qt3F",
  "key34": "3NHofZzxvzJxwmCNLGyP7z3tFQ9qrAeGFPRSt2CahZhsX1hJUJXEqXfFCMXhE8s6KsB9zyNbJD7jcsmp2S5z1zKZ",
  "key35": "5cSeDp11KhJoxNucXxDEhpUdmPzsGSsnuCHRBkgDc37qMiTWH7RMzY1G2DZixd6cRgKUhZswoXwtVrgNhc85nEzA",
  "key36": "2VwdnwoeuvKNLnGNdDzXyhbCDKPgsdXtyUVtA1z32cxATs8JkDL7MGe6uhRxdQ6ZMDJGZMi9dvHc2nktJQ7oMAxE"
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
