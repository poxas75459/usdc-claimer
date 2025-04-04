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
    "57fMqz3UvPt8pQCq9YEt878JhSfC6XuDuK6EjdZMPJe6vm9B8iNBkR9P91NkFP5uVD1zxHiWTQwnFqURBLfxFzGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B75iezPcMw2TbSY7Zs2NNzU9LzgQhxzbGSoR8JxVAKYXjcoUtV5WeovbkNU5q9rG9ztZB3z43g8pXvf3GaMxeiP",
  "key1": "5yLJ2V2e2voGgQXH3jg9Fcns6vRS1NuXs9EvkgBB1SDCGnvCDPTQpsNfrE5iAYZJ4oWSAjm8rQ53heZcnHLQJKBD",
  "key2": "3TJ31ZwxTw6NebvUNaPq6a4bPseh4o2R4Y421jJ6SWCEnZnW8WBBEkzkaynnqxeiYUv2SJ8u5juE4wR1yqYeepkt",
  "key3": "HNPag4Q8DDru5V6t1CXtLD8fcuiV5mcxqmqBRUkeBAKAhUFnaw8V7GNVLHv6Ae2sMshgNnK6g9kr3jU7zh1ix6D",
  "key4": "2NM5bJ4PBZjuJH9fuU24sL6GjZ1sGqT2Y4ynX7RUyP5CoEu82nnttj6iUhSMAMwAiddpRDYRj6iFH986pTmHqtSj",
  "key5": "QpadBiLQUhzZnacdPv28Lg4RYbUxBFoH7aMyPH1KPTMcBruJ4UojCuK3E89f5SnJm4iGGuhUCVRJqA4ZrsQcQkr",
  "key6": "5BXjWNeXbGJQAJNHGLPp4aDWPXvdA5m7erDeiyHhLRFta9qs3ucbhsQuvzx6T4wTGjLXGRhszb4uF2n35DH4EhFs",
  "key7": "36P8dSQa6Nz33p8nXSbstYaZpoqEPT3uZwzraU18uAroRYh328q9yYbYoS9Z9CXwqFio71YxNV8UNKpF39hswxSt",
  "key8": "65h7BauiWryNppBuoZN7tjuzLs1tQ6AJGjEr7QbmyuwtG4rbbwq2wXRrPW4o7hQkr19QtZvzZ7uDWShSCgzppgWF",
  "key9": "PxRZczZcxaUyYefU8wPtPCXmudk8BG4AX2jpWebTSXkVK2Ufj8S8umMc5ApcMKZ8Q21U7tCERmERK2xiSLSHFZp",
  "key10": "48owHVAKoucUJKL4v8EK1dUnSGaQ14VGwn2nPnFaD1MpDGYcbdh5SMsGjUEcnwnyxRHiY8WFEEbBJD4zC8ftf7BY",
  "key11": "65yUCiiDGFbMdUcn3j6SxJjPd46NpTMeYdbFRcZtJBBha3PqcVzXscaRrVPZhyDqHe37H7fjMPXBSPVeV2DUDsz6",
  "key12": "2AnkGmQptHyQPo7HW6E2t9aLw7F9SmosHV7K7JAT691yfYPbGDQNfex3RK8TknZ1Vesy7yycoLkRTCynz16Hji6z",
  "key13": "2kq1GMPVMWeL5UFjaM61PLNZ39JDaLUwMFr5WocR9F12zbG4tpkCxhok5MwVzDz4VQMQTBTRtpmWJ3YHbHGZBJPB",
  "key14": "PAwRsyMj6mV1Sj9tufTbnBvNoZWu5VhftrqNcBUQsQFhmRo26cbo9nVbFFTXBWfwFLXbdh8ZSYxnREa2wD73q7a",
  "key15": "3wCsty36XcA9obUbuK8maFbWuU9JHeYJCEzpLbkpKpVzMMGjxceAPRutzALAxXcfL8BYDNskmv1VFi5GUr8X4DbU",
  "key16": "49kmXwvf3jZitbBnECzvh3JQSYTqs2NMvkBmHYbaki2y7cvfR4CSiGHEknj4ixBqYnUJgmFMuCSqAz5bUCLp2Hds",
  "key17": "5sMQoznFnfk2HCwxu1nZHqTvUAR3MzrVtAbEPqaEmuTSrGBNqvWSf7swH5FbXfbgw9TNJeRKnLjA2Zic94awkqjk",
  "key18": "2BsLibF7kfCP9rvmp8Rvd4qiHJ8WpTtFgMxB7GzJpbmDx9gw3xaBqEAPjmGPForynWniHYfuXwFY1JSSrfAa9YTi",
  "key19": "4YDtcXQ2kAFBLbkEsQxJdL4dvXE3K8smY43jNRmqpP4Hd1U2QNymu8CvhYTJzDKHXNqSNJSGfWoqtn32c4VqE5AA",
  "key20": "3QFKGEFCrStQVTGrAkVzzm5xM1xzStjrfLx6iaRjcnqhmDdcPQcZoYYKkmAoa68N9PA4u68isJuSfWZePfBWyFVU",
  "key21": "579CRFkHe6VcpGdHqmpPqc1DHqARgP32JS4vwYx6dt1Ci9BPRmqepzZYdfPpTqoEgqFsEpgDGTXpkFZeCqzjPePa",
  "key22": "2EEvrGhQvWHAyQKRpV5wJUQre1Yu5fqx9oS7YhkzD9EdcwTuQbjscxcAW32t64uoGVf2z9NwLSffhcSRfRD2u8nq",
  "key23": "vHSejY9h9dmEtTyyzEFRPCTgo9VozRDTJL3iU6Ry9G3wg1oVQys7s9ULftVy3kDAH7CTeE1p2E7f14BB6DvyHJW",
  "key24": "4dHWRafUN1epoJMq2VdLqFAC6NPbmLt4PcvYb5GdAFtkoyJ1KAwWBB24BBC1r7SW1sDof9tFeXGKXaibeLFd5PLu",
  "key25": "2yUHEADytTruRNGNHM9CSQbp3zxuKeDaEZLBMXH8d511q4vuaPG6XDPW8HadNhKgLhX1XuB8bcRqouqwHDivycwY",
  "key26": "4B4E1JJLBSaTmC4GjCY1CioMP3AM3DCpcc6D67ZE83E51UkVwfU4vbadKKjd5c1NGs1zr7J7SLZcLWCmjB7xRWEW"
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
