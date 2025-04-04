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
    "2ubTMmbAVT8U1beB2WoTF1GdAFmt9CHyyC9Smv1hJUJvmxJ5gns76zau1sKmLVLf7yDPyhSx1th1w6gZv1PFyhEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdKFGfmP5bYsqsVWCx2FAt8uBeHgXAKssxyz5hZ7CM5LCao7bqf6w6H9j2czMyzzqctgE99c54MkyKTs6wjPYo9",
  "key1": "2MQCotuqtDr6hBSYQ9N3SoPzg5QXSLQWTevFUY5PRHoAAwdiDNzXM3UnaCY2y8qM3u5yU95uYRUzogCmG7f2FXyn",
  "key2": "3Prikv9YAH9Yixhqoeht6DBtURsdPya6dA9a3VsjWJGbSgbBiNddUhHFGovDsjGtfc6EoHw1RRtnwMhzEg2ZwT5C",
  "key3": "64C6FxStCSsMBuQtvC6fFwz4t6HgXbGcsG5VsbK9GL3eLY732gzfe7ioJ5cPWh6qm2qb4Dg1Eu3uq2UY8Pjmc68f",
  "key4": "4Mg2hwGfEftCEptNAPANQ2TyjrnXrFJ1HwrPFGvv9VvjDfJtRTobw21RiQReuMRDEk8DKobc6XaU6X97dzcAKyYf",
  "key5": "392Km27LBTiCXwnBPCifqAFMHq7TJgZT5h9YSW3WtTBWhmxcyyzpTRZXobjYpwkAR8QZpUXXxkqNN6BwVg79GjNC",
  "key6": "5GPwRhVuATNe7LnC23Fdedik7SorPHRQi6tyrwtem9QYnX5k1Ew52HMEE6UfWaMJgEGAw2GtKghuTKcU19gTZ4zk",
  "key7": "3wGgzzCC5z1XHZGTzWnoxJKBUxKYHGnjgRZZ29FFefizJKeGYms4YztumAVr8k73wWuieYbwePYsn2fEEg31c51m",
  "key8": "3KktK4WhTHpPvQu2yMtMk6ZokGAncQZd9qaNdr93PWTaTpJK73C4P4sZjHjotToJrrxVMDoyeL3kP2YV6ka8SK1p",
  "key9": "2Ceo5RcUY43MZXQhdtZz14NgwFDr9xSwFn683pD68nmYxt9PJKQSbD3kErEQ6gv6cuvR2Twq2H8NNZJzvTYWGhMr",
  "key10": "4NpptjFWbAxZSf6jCaQLAiecdRJAKaZBHnwzMy38rXybxuYDojssXh9Cstv8u3P1rvfGTYt7scmJcfcANTpRsT3g",
  "key11": "2ppsdSgGrUF57QQLjdJUXmYzKfKGGXEugfoVbWJfANrR5QKYxz7PbY9QMtXBeLMAgxZJvfoMrVs7RapSgsSrnMVw",
  "key12": "4ehxjwZpjdTNmZS9Bjt2aWM2PBxZbKRpS9MdxNooBNaWsx2CCnGwQrfY274q7bXriLpyfj5Dw3hsvGcHxaKyc84C",
  "key13": "55B4Q2kNfHsALcgr3FC33uD2q6g6SnZQ8Yxoo8aqA7ngN4ZN79uZpJCJUbxMPosgU963HevBPKMvHTL6RjJWpUZG",
  "key14": "3muneuCKJkyvouGFFGqTynMt4RFva5J4u75GWsgpFCpdv1aWc6gD75awFkUdfeFvvG9ypxGLZUJ76z1S2b2itjrf",
  "key15": "32n96ZKvnqc8Rzstn4oGnT2PN3WmR9VRz2P6ieQLdT7jwDbQBq8WKdg73UDkRFQmf4WfRQZ27YzHkPra8joKuQf9",
  "key16": "3uZPzSfzHoWPnqhFVPsKnBbso54NR8QTcYF3y8EcwwfUXsfhLx3EKy6PintmzebCwvC7dV4imTFefpgd6p1v4i5X",
  "key17": "2bCSS93oo8UrfDZAnzym7o44M6Z2pUr6M4LfVvZ6godKznpDWHJj8NYaxLbhj15vnLp9t7Ah6vsCMDFRYL6fnLht",
  "key18": "59b34ggQcqHZBjW2KsSZ4o5ycV74UnVtbHPJEcDZSQoaFDf7o6PECcFKjeikjPrveSXatSwa8M35QqyPWFPYhs8q",
  "key19": "4CUqgECfpJ7ZYuSAwPo6AmosG9x7h4XsZvZp7pvt8bg4yEE4h1Yv1ewt4uKKcxJaMC6JgsoeC4YSVPJRpVcVJrYF",
  "key20": "3GUtq8Z1VPF8wYFB6Q4WP5a3Qb7Zbh6AqBMUg1v1YjiDEkjdzzNqEJjZQ8fyE4sNXShzn2ciwwE7yKsNC795oNsR",
  "key21": "5YcoGiJ8KuxkYNyQSkrQ3M3j7ArosUQdAcCeXnDsevUqW4W8RbaQ3fGwZGJY8cXbu4BTknYe3s5YUvSAHj1WXYUA",
  "key22": "2box6kZAe7ots1aCbMKhv5UNYp9x3jFpNAs92pfKbCK8CvL9YJuDgWrMc4YyUi685jc9bxw9KtVmjuWkuc8ZEG2j",
  "key23": "K1QzeGNe2CBSmVT7KvEcruBFFAyHCDnsLuUpNpZ3Lppiif8X41MR7C1N14DyJf2VsYUV7GB7LTgKaeUBdvSJ3QE",
  "key24": "3oaw91xtWjCsA4xPn1w6Woc7LwHWSQSRUadyqstuuABvL4GBtv4gRx2YGCjhpT74mnqRfpaiRU2AR9LaCHT594cQ",
  "key25": "3kcTLrJANtAxj3vJMJaq7V2rcv3VDkQepHz2snef2KXzjV5PtoczkxhogYSosLgrKCFvAYKH8mBDZdZF7BSsfhNq",
  "key26": "3qZVzaNWcewhcNeKFyhUMizhKdTjNBmuARmMeghdADw1WFYKh2qYShGdpF8JdHHep7uHyDH89u2Jj9V5pPBFZn2G",
  "key27": "2mLM4NzQP3dtbYywSNRAzoQPnEYQEfP2swT2NXfqqXwZ4KybdNFeFxeF6iPCxz3mBGWQE1McWrvNWRygkTFHRAtV",
  "key28": "5Y2SCSDbU23gB4qNoiZcRNBnSJ4LCohtnXRq8CynFE772pk7JwUZPEDfCvvRnXoX8d5kGmxoZmewBMJ1PRyWtZ5o",
  "key29": "5afKiZr5aZ2pxsq35XHUVz8CxHfyKEzyisycjdi3AbPwcqEtnpWtLv3AJefWSk1gRtsQLDWgdcRoJ9z6CYWaXhWB",
  "key30": "2xSCWfsABjYESkzBQhmLC6R7mU2HqSJ2ybRUbtzV95Cac6dCYwuU34X2XddcTMJUp4oJxG2noXRL5W2AoEeGKazD",
  "key31": "cPMcsckbrLwxWd1wgCNBsokBFh4MpjKmmPnYJ5ceUwxtTMLBzowqaUKMwPzPMnqGdgj4H8F6aPTqZBoctm1GURA",
  "key32": "23Yd1sSn6eyh6dTnXwftq2Xfiafnkm46wUt8V3E4ChYDxRfBMU9FhaaRqkJFnLyHKbTyaetu6AU5632s3GaxsXmL",
  "key33": "5Yi7wFKwbz5zoqMUbdDNUKaW8fBHhDGXpQFY6DjgHYcDKUMDbTAou9yPsAeMPxDHk3LxQUBJJcv5StoHvBxac9Fy",
  "key34": "3ajja15fyvvGyAkonvqw5cNWFU6zmwFKCTY939J8SXfVgLrqscJpSQbDkfnw28aKJJoT9NMz6YwbK6mchpfbCtDH",
  "key35": "3QoYtw9m8nSF73yLkJoNdQdEr2Z1qa5WbE7HEJv84hiQzmxvshCFmEz4f2bRfuyX43vvoP1HyornZwL73asCBNd8",
  "key36": "2uvrysyNKERMA1cBEBQFusC9JCYPjzcfy9QxmjPPsVRPr5DWaWzPrZDv1tjQBr9AFvdf6B5LYxCWWtfsWBKLv5pr",
  "key37": "5JjNUbzetyxLVt3qGUkA7ZAevYLF8dqKHq3f198fXisfT32iq9FSNXtbUvQ9Nyy2V4Vxp3C59Hx287VDMb2G3MpQ",
  "key38": "3fwYFihBvW4vbgHpApLZCWmvVQpdBCijNwGk1btVpPcNZZT494WUngghaSzpK5hS16tA5bZKRJvqAiCGgKZjGHHA",
  "key39": "B7MzqpW3nwwQGdTcimpDshmaNuHqyDYsuRwAGCKnzGLKr22dSVog6AwrvNWocMCaWXqPvXp2nJohu5g1c2ydns7",
  "key40": "4WwUe5ovxd31F8EA2q9iKEnHk1R8TBCNUjTuE8L8KtfWSuVUPgQG8dFraaUk6u4t9mhHd15swcXEdHUXyv5FvTH5",
  "key41": "ASRFyhvznFQDFJn7KPSkVDAE6VrHPcetzfbZojL4mAvf8AsPEZtDb9J2zw8c2RFo1K5Ce2mMuFVsQDJYR5ChLEM"
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
