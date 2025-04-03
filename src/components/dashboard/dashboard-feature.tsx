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
    "3LTs4Z3V5gCBWgUt4zf7FSZ3XVnJnvDeb98evZf18BpjV3WNfU6ZDR2WMuSR3fCSENHG9dkXU9dkLfdLayGNWUnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gky6kS9hVEoV7Wrzw7JX2CDiUw5QcSj641YK59gRngMgJBUgi23RZ49ri26oyTvMMFZ63nsWYZWPWCBjN2ZuRkX",
  "key1": "dgNqb7ZU7Fzaz1bMze2GzrgVt8UrMvsUy1Vvx9r1XSPX2BLLJenLxEochhTGiDWP8FdgnuBNfvUR4xioKa8z6qX",
  "key2": "3icVxy985Qpd3R9XiRbRigX8AfNpQqfB93jwNuKjVXGdrwYzCAk6BFbMBZ1d4VoNk3uHFDi6kD9PJ3SHCBkyv1S3",
  "key3": "5wNgYQPWh9562KRLx9SejnsWze1CZPoeVEX2vzug8ghi3UGq9RWGoriRk714XBr6g28zXNda4eTCuCAA1ghkyZbs",
  "key4": "5DHxgFxqXs9fCYVKzSXT9g3J3HfUBLV6qNUCE3JQQUbSYPnCea1TstGtcKnQ9rxQ2yBqLHQt7tvWn8RMFQeiwASy",
  "key5": "3jYb9veghLbLV522KLyNN6Gsu1WTMoHvrjBcyFhbaZafNHbakHHdQABRegXnk4rH94dnjHevAgJoBu78u3NjWaxf",
  "key6": "52VkE6XAa2jFZSQETd95pwNwEtiW7tac7GAg9u9JSZAAi2uio87o2fYth8XeMpYcMqTNLpm93J5nP9vBj6VGAcFt",
  "key7": "2CtamUgM624sEJGx9f977SbyKi1pYrqakc5vwQ7s2sqxkk1EJSdiCuPhj5THMQ2gXwLmfPcwDmX4pdanShT2weaF",
  "key8": "4sjAtAvTeg1exHatqiZp4gTSiPyFp3bTq7LHqGNKydiHjzLadrUCre8iCSPDWAKLYcDKLavmTRfuWmPcWJV4Dg93",
  "key9": "5zFE3udrmnyPf4YJVq5pHXZCBKZJN95Ne5MEwTUtx1FFmcLucdDnuH6efrhw1pgoDe5mBsCHbFs9iFNhVNumyWJ4",
  "key10": "2GjPYR8R7sZFgPuyVuNn5iiLBbvqTdpuQxQxYwrcn71XhBhyT8fssDqDBPRwnuEMis5za6GBvbvyYiiyMkCjK92B",
  "key11": "4WgxWavfPHw4FpkCB8knZniFgDdWRdcqWRQjTZQMgcdbgqC4gtnhqUqDNWA6Cj3bbHwyFKkpBGDfYghQ8uHcoQD3",
  "key12": "3ySdW2Qf9bwpBHJa8v3PbXjuwFRq1pCfpYfUYLg3speMHAJhJD3t9FATEJUyjyki69SFB8eUqtaC9rV5URpVQYqi",
  "key13": "4RM2DTxuLozmXiQmXnRxNB54tyhYcR1Q1RUSqexctRqvVnwmzCKnsoFVDcd1tW4qjuyjJD4zhTFi92X1py824B1X",
  "key14": "2SSJTYQuob94xPSMAxSJK2PTtzYddmMYiwLXc74gv9o6FUyk327djr4Q5KMkoJ83G9LMrzzgMmjmzwkEhDRDEDWb",
  "key15": "3fFwCqobZQdB1tASTEJpGLYZXkp7efjogZJQfYvqa2sC9MEivzWw8AG748uoxXDrWiMzaX3gNcYGEJwFKdsZs3oU",
  "key16": "4k3sx4ugh6oFVNjgfb3cx8PAMmv2cQ5xJv9SJfvukiSSDnppwbE4M9jx1cgJcAMKRjXUimpi7oNnS5VHJbh1i4j2",
  "key17": "97d6rPkHTKBYu95FkcfDoVT3EefhGaWrH6gKhXvUBzx8gFaix1VaEaTTtPmZvTAqzEky3aGsHtXY436d8HaPBgW",
  "key18": "5HDZJY6UAE7rLTbkZSMoaz7Zy7hLG14RHAPN4L6t8tTbBBjmJYeka8Zkktgttm3n49P4PwMbe8CfxiwC3jvD688a",
  "key19": "4AqXPHsy7sQA4VmNoNrLrdHRueULmFFqdzziLvorU8d2TeT62Dyn4CJzuFLK9WUp1u4gAQ1j917JkgqutmG8rfW2",
  "key20": "mi6EcfarGc91HU6gz64H5GJ5WP9Heh3ePmqVhzciqiBgDhXfCJuBMujo6HF4tUzVv1yExCnW36QVxXWEMish2Cz",
  "key21": "3PiEJfymqS7RXQAfejsswnnsEvwrV5bKmAAtPqSRdUz2YcKGwt4t3efaYefF3WnvewikY5NBJVFgh6jsNpoSqmVY",
  "key22": "4gE9EyoZErMJVhyghoKV9cdMniK4Gjug5ND7YYJEkXGcRLBXPthDquU94GWYmPYpSPEBPdHGRJdf37BPxy8Upy8Q",
  "key23": "hcW1FCwU6WXx12s3c2aRTx1noEd312NfSdiEpHAgp9SJnJCsYf7NzkDuwn5qc6xjDq5Ma4dZJKd68sAbj8kwPx3",
  "key24": "2mgEHy8Mo2GJxbH4AVKcK4NWGeDAtwAL6bZn8542k8dw1CgjufS2FdJbPoxhqWFLunY9UgD4GMhVKKcqYv6KjWJZ",
  "key25": "32TDjYwNBspBK52zS376NqT5uo4sgyGzh8nxcoKajEGaxNHtySAiQAscYB22RjCn78fNfmqhPaSQAZECbqTLqytU",
  "key26": "65KD3nxV3jwCqHASHk9NPpAtoXzyNgDRDehGd159WFmD8LvSGStcYJwJVE1ZmTRsZz8fCn5gLHyNefAfsDGLR9G4",
  "key27": "5bca9M4CcyLYv9X2JzPgkxGoXSmC7RR1Dx1eJMjWaH6uRTxyDVXn5nDZNzfsySGLfoHEuA4RVqxiVfdTkEm7dCWb",
  "key28": "3oTrDpz6GJufsA5WcshQs2Sb31LDXNvfPRdUFKSLL2jGkAP52nEoCrvFDoheEE5UvyQHKzHeHCwubbGXtcK6kXjx",
  "key29": "5pM46PxcCu5bA5DTzshK6FfnjhbJUUf45rsG225chEGhWHUCiqPExdeNaxykdHw7jxXDgSW2tACCSBM13RJqQjaG",
  "key30": "5TE8a3Y5brhmC73HghqPEoj6z1aM5j49uVTNmES9pQ9tG2VUJapf9yxjvN6ncWxekBGxEfNW8fb2jPDgA4Q8VtQM",
  "key31": "2ZMhEzmLDLewmkWuLoatwDCxDBuQdPbYLTaLXtyxUFsYe2E5tfEsU9PuQGU9iXhJCfAb2BXULDR4kjFms2egtEyH",
  "key32": "2xWF5t8jv23CNz9YC3PC8HYp45C9ddxVBGgyNWBbEXoA5SRGmwmW8QDvwo78bBAakzhWxoZ5vPhZ5StEDZnL4BP7",
  "key33": "3Q8TkHtaAt1xFUuJrQBTecQcCc4DxzdzRC16qFxxm45YiKbVajyjFoW6NW7mZYMWvLskoXtFcLNSnHk5p5XVWLmW",
  "key34": "XerMgFSFf82Dhwsm1Zza9mPvTJG5aWMAT3jzbft55n12C5v6HLh9o5Cz17LvgUvFshUBgqCJdMt4boCC9gAEqEG",
  "key35": "3xaqq8Zv6yXx7eY6GsAjSqepKRGcuw2EpNk5caVQ6P3PysnYtA2M9T3VG9dGujVWvHp4Pgm5Ugz7nYyKXsNhQ9oq",
  "key36": "4adqMDfKUSZ3P4LPF45DsCpxiUD59C9c9S6xiLuQijgrrSZXXQ9enQSQ81egUgYJvDgQFag1c6PJEvGZBYWEgikV",
  "key37": "yQYP9GohJnnjWnKSPK1cuUGPELoStgZDToc7ruS6mNfbmyRogP91ZMXt8xV3KGHS2C66qsK4Lx6YtiGvgPeWu3b",
  "key38": "3eZ28hhexeThMeQGGmiqzYZcGudEWDro78bCL6vr8sX7KvZmqcphAedie8k2JVFX4dnc3Tgbku4qvB6fcfudzFku",
  "key39": "4YUJZJseAM9Lx5uK7nsJvFeQSdwywHmDQj8NmrWhAmYCQu9A7TfHdsJviQ7V3291jEtFJRZ9pscSq2diLHrkEtwV",
  "key40": "24nhppC5yoNsw78CmwuhvhcaxZwjGUzYHHav3XzcgqHQpyukgbnE2k3s1MffWVPUXpv5ncjoGMhodztRtbdwUbzE",
  "key41": "5Fyd2RWu8ogNx7obf3RD5wPzYJJgygi3UQksfcqAKYRSKoDLBUuMzDzJXUy5WVjTP2BQWWfa3V7qTEka7S11hKG8",
  "key42": "4DDDrHBawXDcwsJHpJ55W6qdBoL3ut9HqGbQdECGFXTPPnXzhG4bWMKNXRM6LjxoSju1BqyMMbfVQPvWk4CiNdMm"
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
