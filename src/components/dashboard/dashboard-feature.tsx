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
    "2JtyHg2LZ9WcWTCQS7EQMfAF5TWtFeWzjWkktb23PztfBxV7RrB27w6wcfbsgPFY5iVhitaThY8xnatrAoU3iVX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1YPwvvPiAZjhx1JyC2DQnLQM8bvwxvqeT19Jk7Chiiazsn3CnMtPqb6E6xHvpZXUQ5sWhXANAz9Fy5J9YDsh4S",
  "key1": "NKmCHo5AeXB4Mwmonms7HRanM8gC2uUgn9p8bFwqt9DCtGkbUZS8sbJMQQqFPjN1eN7E2hGnA5ws23Ewbd6e1UH",
  "key2": "3hbefyLWC2DQ5qsv9d1gkEBRDfnQURDJQTc3Nvi414misrcHvuXbEADMTJ7LwkCcdSQC73NbuXGs2PSooVf3dSQm",
  "key3": "ohq3mB5rAa3jUvhVatyPbbVx2SbqqHsXaXZyrDHsthFpG5b7NhvxTdWYdzZoszAUtzwS2KmT48arj48MkkLVvHm",
  "key4": "ETAGVqsxf7KfDMfhV8Sj5U9RnPTxQ5hWKNxYpQYvwQs5jBeZX1cPEeZJP6pnNteok95zXCcrt5s6eQ1Fip7yX6z",
  "key5": "5mKQb6qB8oyaac9T1EnrR79WpDwxUc7V61GcuD4zbP6nT1XLbCq8eofVbNomsNVyQYRtK4r3HDbyrUeJTWnhe4hZ",
  "key6": "2orDuhgDgKdZD9vC2UhoKbiqWZoaAKH2jgohH4xfDRLSie1AfdEo4sRwUThgt2LijV94DaJGUgYzudBNS26UgVcq",
  "key7": "5wjgodrQgSYYVVBJ8CUrPBusUzUCSyPdsGLQeAqcQazjAdwifwsRMa72mftSqDDey5RhNxctvS42UPSWj6HLSC1A",
  "key8": "5fhNCnhxsbhzb1FpAEUoXDoz5WxEa9nLdNcJHSsp6z54xs4Z5C7qdoxB6QXiHnZCzeZyvC7WCNfo5HXkDfuChSY3",
  "key9": "4zfksMdi3wawNUwS7gajmh9k7hGG2VsSvB4QNv2xSn7hz7YjvWt3AUeAYRWzBn7YwpuaB9Ef16huTVKA4NhcZMci",
  "key10": "3Gy3mxVmn2GJ7TKb5PLStszcBgU5yb5A3G3Vei8VxAPS3etGfn1zdSLYto4nVom3FYfqRPnmtnycWu9X2EDS57Py",
  "key11": "4S117QuoghYu5ExNXNinMnurUEhbSfWy9JtGdsS32WCaCG7AcD3okw8pXAnY3jVduodfNfbDtECwySdBFRWGak6J",
  "key12": "2rNStyDrpgttZYRdnbCCj3wGE6xd3R7QxsxGB69CFfNUrUdUN1eX6zrxDK36CBnZ2Qt53soYtn5hLMzDR4bAwxm",
  "key13": "5FbCGKgaCBjsivvdNRAcfB8mBNrBZCDe32GSRqwJdRV1WaMhUCUM4j72Bhn9Ae3Wt4MHnnDrUgPfjtXTk4xiDaBE",
  "key14": "2TQ8DYjQD9qxZJj2kX23Vub2hCwqv2RjWiBGZq3WkiihJryDVRStxERdGgUD4iwNBxAkJyt3QZ8gPf5VKL3c1JqR",
  "key15": "2mPkqRUfjfqVNgfukwGHmhgrnhMHiijc9hd3K2xGHHEhkXPq5o2nZcDZET2nB8aP2PEGxP5tFBm52H64HRMqZjda",
  "key16": "vyWMGfJRHePSBWx4vLYBHo6pvvRY9w8hHCogarpUKyxFpX4mkLeVJ8sPtMia9YyodNqEXnpgmG5YV7bdbojQNSV",
  "key17": "2tiL4mzUvcfdSUpgfbWnykpohCgMo4mVH3WMbqziAnR5P5jqdwMbAd9u4WyYz9VRnGhqrkA199NGHU8gNTcNiH4",
  "key18": "5hcJ8BvQAHq5b8WScXXJz9CEW2F5CJJLe8aJCM7sUW3ddn3n225JhZ9xP838Lspqh8ehuyNteE9G1RuqSbo54B2M",
  "key19": "3mnqfKaPxswcap7FEpJrQ6KvrK6yQGyfWGAow4vmoAVcvFiKbAku65wKkFn8J9yE4bXoZBZp6C7m3CA9SkbnDAjb",
  "key20": "311rQ6v12suCPLnDfa1NMYaZKM3aZngtPiynDq8zdr3aWrd1LxXVicemWAGTbdjBrQDdEbDV3qf2Sq1x5sWMAE1u",
  "key21": "5f5TpqXvq5QgUXGmoiaBsnWwJKkRggVh7C8HEV8FyaksCpKGZB29it1vKTVFNRABZBAYxxwFGNfvdG4QsGERVgBw",
  "key22": "2VEotND6AJ9SSg1LNFfuDkCj1qoT4VYR2akXQNN4BmYt3qt9L49cjxWyHWSw1p9joCxvphHbeq2Vd6aFbC1vSSYn",
  "key23": "2akoFvd4XRgNooSKYiR7SnK3NQHLjztKb1WEVCFTZfe55dT6YMsxsNvS5JXi6mWym6KtJb1ssjeyheCJvhZKyydC",
  "key24": "4pCo7KhrKt85d6MvATmAfVDNe1DWms717jH44mf9N3zx2LC2ApNUhboZw5rC2cTcqV4SQxXmB4NUXUwXYn4pjueu",
  "key25": "4CQYe7cc4AUnjzetbK3Lj5F5ds5snERh9wtTfZZ4HS4DSjLwqZ6pyJ9QhoNZFtwcFCxKz1iLP22D9zoMwtDECyTW",
  "key26": "5B6MPqHvZhMkJ3CDSMJR2cjfBiPNMHjzWveCmVtYjqGB5THDFzDU9DEW9m9Xg2Ch3J8bUn1dQKJWksYHW6m2Mzn1",
  "key27": "2mb7YQ1sqvp2UXJrYyYzSvHN3NRjxpmGf5K6afNAKpk8Sp6Gtyf3755382RSo4oKKf2JCKsAk49qmU1JFq8UTs22",
  "key28": "3ZvA688uu9Twy6erKTsjDzT1gZX6fdUEwdjDuohe2KYbZYYqZCmGnamBJa39YDPG9nRPkJUGF9kMvq8bVXaQdfdZ",
  "key29": "4V5URYS6xZDfC9DKJ3r38Uc6Y1Gc97M9tguDZ21CUVJ3hM7Vpj2eQ9yGaxgtF85xjDB673Zv3hkX8YjZpjzzbyyP",
  "key30": "2dDptiZqWkAkowdgVtSh66RwJQELv7xTATaMGseGePjF93CS7C36CQfGov4kWZDf2vAq9x4ZWsN3hhZCa8hXRYJx",
  "key31": "4DZpSu2MuyHshhQ1aLKfL9xY43ehrk4yKJVHBSCbRv6D9rT1k3Bc9Suw7phvpZzeDgNQiV3dEeUrSwa8mxpjawp",
  "key32": "e6LjpqZAYtoZbSsxRTnooHxCcdm9hdpHvEn8HoQXQi9VPkz9WxpaskiZgGdUAbqZb36w8shhLZ4kVRs85Yq1gv6",
  "key33": "Z3heGyyhnFXCUKhqg9fHF1yYtrj42tgjacvahHZLtmV5VwreZdcC1kPQJ1MXJQck5vemhw76VKS9wCApWEFJ2UQ",
  "key34": "mxQzCX4LcKbPYCJ9agd4pmYsC1P2kkUtNBPhz1Eq722yBQv5bGxJaJZwDtedarwo68LWYKiPPYkuGdwYbnt4ozz",
  "key35": "493mDbUfbB9BhPRF6kLtKkKQe5a96jsPZjeeQmxZky7dozLwmtUgUbw75EJxWRbzsZdsx9mbUKg7o5wJagksCGVD",
  "key36": "2q3HKWEdjF44dzQ2GrbR6CQHQE8nY9UAqhhhobHbStt6hQwNwxHHnt3BA7WCKN638gsdymjAom5m2vDV97KBKFG9",
  "key37": "4KjNQqzHrrqvAU4K57ydjKWpPetrRnEU2JSyVmHqBvYEj2QjFPosZzPpj1cdZ6x3qVVnAkHra4sozcQFXvwX3zJH",
  "key38": "5Qd6Vgc261CFpkQoUNzqEt7Dij4ApkK5xd5S4rUn2Wr4b4hfCKEGHfLpFANcU4msq3bBq31sTsJFQdsZyb4RsRa7",
  "key39": "3cpGUmNHYi6wicd4CR6cK95kEgSJQCTJzZkNMC7qTrwzQ82tsD82hcrk9dFejerJS6nnm5LZxT3ucw8Byc36GLyE",
  "key40": "1RU22P91dSAWQapS1jPVuM714zaGBbBdC1YRa1ejYoSNdACgc4s8P4eEisjRbz4bKZk4pfACiNPg5MWfHM3HPMt",
  "key41": "q4pfLUwwpfPJ9Dg5yEJ4jauSwjDAGMnNm4js8ekUv5AA1KfHV2Ye59Pbd6oqBs7DYsyUMT8cHXENFkSEXhMk7YE",
  "key42": "3yQ9jaGrW1gqp1trQ12bEkGtMvzZexhAtaHNtCi7wFe7Bv3138fSvA6EdGBpZpKpa4xLWzRy5fN3jbQBruY8X6F",
  "key43": "4BnaeyztisTMPe1uSK32LNyUGcGNC67HTDAGJQ5p7tsRKDxSRdmggwDU7W2y7XnASNFjvgJnM4yo7YRMnGRFRMnE"
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
