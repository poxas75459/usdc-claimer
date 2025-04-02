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
    "hhwAP1cCXLqQCAx2Ab1dF9de5ioXs8rGNBGKfMtaFF3eifrZsKZWx3h28f6BF1qUVxSENHM8Bn9Zwkm5h4jjsjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xf9DZw4sAyHMrF6ELZYAeU29BfUW9SAobawjzUg5cgMB9vM5Hqor6NSAeoQXqBTMPkLZrttSnzDNc2EXHzvxQES",
  "key1": "2w3SXBwWHhxw9W5qFz9SeJFujxNMsQCsgxpYMkCpNsioMwg72L3ZgDaxg5wQBok7qGAW7bFsXveHhV7Vr6ZFjapW",
  "key2": "3QhMmpmfpzgHmdVkLSAfv5K5b7KoeKBExe2ZzCoLY26LQhyqtsv6qo7BRF4qUMEZWtf5fnGGjdMvbsUWgECJ1CT6",
  "key3": "3Rd5ng4oC2f2TRt3p4Kq5Dcv6duGVyqkhG9izmLBsPrEZUU8PcSmYy1mMy32dE27CRr9GU4azish8ZaCeBmgjKfq",
  "key4": "Mv8tmd9PEWYMZEu7V15zTXP44wycMJozehK73VLAtgcutM8GsYYmqP16af4Rq2bdMyqV6dkLp2r1rB7vfPE9eP9",
  "key5": "5Xgv792XVeRTGxSx5TvhwpSfVGZBt2zdzjxjymh2Jn3VnUPbbT8VLimpVD1tq9TuK4muFQefXzFBS7pXad9VdyXi",
  "key6": "ZT4TB6uVaZva1cAYf788coMCQohAPzrtE8HXgf2RPRDstbzwBPae2AYF5yBXuEHEcMrTzEFMQxp9QpUfBrgJACF",
  "key7": "2TQb3N7mrsZjRu3e3ZHuR3icUPQjyRHoQTEKvKRwUXVvj5fzgKjtta1aPaoqTWkbPtQNQCsnd9oKEdMztK8CESNE",
  "key8": "d5gS7uzFjDs6QiGBi7ppaPhzSRE6iz31LJoixap2BA4UEzdbLtzZwASufpo2dB245FWCBeFtyPAZRSDL58cUSMu",
  "key9": "2tR1d6PiCGxebF22KFKVnHCxRDaGbrVQWQ9cySESthy65kPeYtzdHsJsgfjjpd9kLMLCxoagKudtfuU4pYd9iUN3",
  "key10": "4oZBUrrKvRToC69gvpmTtwagxupeabm1cRbgQwzvnvMEHzNUPjN2YP2tfS7x52biNHLTe5PHxe4TvXyonFC2MUzU",
  "key11": "5d3vonLYjaSQLqPzrUGTwEGNZLcYUq9i8QkRuHgXv23xmvb9xw3bHsHS9YPyksC4YZmDoEK7qJb2EK2pre2ARJmv",
  "key12": "2rh6eH59u3grcBLzSA1xbAyyt7v75F8ycFPKAD6p9ABqodVQSmJvuNF91s2HHLyY6rgaVF7Yqk3yReDJLUdcztUk",
  "key13": "3rjTL8Rt6yZNY7vYmZYAScGt9jEWopeXfmKMb6WkWDfwtcyMXMZrVGJgo8E3PGxGS89fMrdNaAPYqkS26DZ5kfL6",
  "key14": "YzDE5TiyfWkbUhP8G5qFhZrAHjpJZMBL4AJz3rbaURqFoEBhgjLu7pfcrsefg48iAikz5zzC5VfuS4kZPaM6uk2",
  "key15": "27HgCzPzfjx5NkyH9irUs954uwGQRLCnELGXbzrjqsft8fNWx7MwNBZCaaNFwzUBhpDoMuCh2z5eZRY1aqhJ4UdR",
  "key16": "3nnVW1TaQwNP8MAjBFqu8AAXSpgF79hCGtLeLqx2Ks8SKyuqYpzY9eeN6e8rSYuZeD8E325tTRP4fVSWgRuGxXQA",
  "key17": "UNzLALjpGdduUDygbaEo5ZUtjn5mahh3YfSdasRpvbisbDM57xkLBddwVWjNd8mpUwBhMGkrHzW7X79nTwWr9Ha",
  "key18": "3wDUSRSF9ZSo7PNwVzenbbhwwKs3JUvToWtPon1hW78ZujxNNNiHVArV2cvMTzyVFERqRdXVjGaPtK1oJF4z5cUr",
  "key19": "64tSq1ikzWZj3WhNjdWAjKByc9rWujiSfD8F9rndvD4zSLtJn7RAAAc1czZYCM5PkwPoudDH8rw516gmn643Byg5",
  "key20": "2ya2JyhcPFsrZgQkmi4MY6ds5ZwXNe1ZXb3Q74YKC42981Ek6epsGzSqzLW9b8Wh34CKLJdpD3fiYmJXWdhQhY2Q",
  "key21": "4y8Qfnvz7z2cktai7KpuYCrSHHW3A5j4KUQWt2zFnXq3FDuzU65nzRafdSN1Ng5rVBvUTYnqXAi6d9APAu6jwgbg",
  "key22": "eGPNPyLDxj6wtVKnFdf3sGDGT8MyXzRhzYuxXDJsWxkzUqBXGoDZb7QE2uE5N3BFbLEEKEyDoWAXXE4eEiPpZnD",
  "key23": "29jcwQFm9euvic2ioJGVYpC9GfgAXX2zzKafbS85TdVcDeEGeUu9cLPFHiU5Ub8FMcCVRwpWxySgVc3D6M8WJKWZ",
  "key24": "8heM1sVMxxbsczK3rH8FJGMJxaxH7VYWwL8oR97MrzDMyarmm4XQ7fmH6hqBQR7kFL2pAyWfune3ncFHM2pbnwv",
  "key25": "5MdmJH1EbHvGiiJRwVz5kS5ZdMRATFuT8vXVgFM3n1TeMGbt87RnJysnA7SkiBwZb6HhMpoQrv3rZyTsEriyfkj6",
  "key26": "BJh1C3A8RQeMeEpz67yccWErBhrmJQAesLW8w6itV6p4SH64Zxt52cP7AMxRX4E1r6a27ZJ77SDV2rghSKbNrM7",
  "key27": "51ZDUzYxZpoESoDr3R7f1j7PjkADv2HXinUd1FXmt2RtX5wVHiSyehbgVZC7tePjtS93Gv8VBd8hpdGpNzZDiPbC",
  "key28": "2wG9osDHkHHeeVowuLDF488WPttkJWfGxZcpLtJaVTyEz9CAEHb5Wj4FAep691MNPF5v3sYMRztmgUAEq7Uevw9Q",
  "key29": "3GQ5RXV6ZK8wqYW2imoVy1fF2VLALazqy1nmjwLaG3AZuy853ChXT8RytAtGXL6RMnp6AhUkpJ3jD7suSUskE9wt",
  "key30": "3A2XbaRUBVQG2xehPg4fgCq5Wh9XZZ4EuhaJMWpyk57wWe9YeEodVPdHwaPfnthZxpXdSkDPcEF9FumSejZBff2C",
  "key31": "3hmkbpFT8uJDBVwSLTbjM7q45Vbk8x1an37ZTfk5prgTqrc8rAiPSvLZLcgRksCVg8zLdqhkMxXuA5Kr8cWyoLvo",
  "key32": "fpsnuUjgoLPEDgXsZD9qBXNPiNeAr4yPXTDZrYEk5bbLRYSYCjkcsHYkqk9ZDCx9iZGXCjREgfvh6LcWf985eCB",
  "key33": "3fSwwzdwtAhc75mKqH8vDYHJp5CXu7oiuuN6VH1o7tNAGZiuwQ6M6QaTKzWfVDmY2zSw3auKsHshqA5GbyJFJNDn",
  "key34": "33fKWrT8Kg1MvapA4HR6qHacyzpk2edkiztT8AVegfxXZjEyevdCiUG3pVyt6fPV2esxxhuXw4dHN5Tf6uc5ESJ8",
  "key35": "5M6wTN711xFJu4rLJyKLtDVcr7HoCxhj2MUzG47ACBegYgdNnekBQWLoTJ4SqBzzofmrMZtDZWtWpYDkepNJHa2t",
  "key36": "3FCzadLF1kgjDweqjmSQZbdafbqwKcUA4PBab2e3xCnjQTdrtKjCYC4fuWynfjpBdvKStEFs1GrKxhyttcWcRgsi",
  "key37": "GjhMy5MdZXTaQPN21LukjXQnSi7XjH4N3Mz2CBRpfYyNHdfp58W5wTVcEcLsLcFdHnPX98nt4J5otJH6YKg6xq9",
  "key38": "R9aJaFo9oDU1ygLHSDRXgyshkt8sqNJCovwyKU5zPTJGmvXAqsJRC9g7CgwrXiFmnWGujiQJkzt7Fr5HVEVUV2a"
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
