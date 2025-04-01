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
    "5qg33aeNShmr9WkQvFhvSURUiysnkVCmWNLj1Zc8WZdzWKBD34HMzhJk8tFysQyKWstWfKDoX6BYqbQWJVmS6neq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TeZnXpzWX6UH6fYkgdfvRUCeNu8Eth6xh5LgJLyzt5t6fMC9vo5J8oWYRjdy2bQrhZ5XxcWxD2jQnA45TXZykEt",
  "key1": "2xe63qzzj62btS1gTwPhoB37ccfmjeWarRveJS6hYM3mjms6vZECmP8JcFmdjPqy9iB8FXn2SNyUUHdjNSQ2ahfk",
  "key2": "27PxgEtMRACCy596sLastToDFUzEgyJ1WhXbkPoFLXxxhpmetDYSYarWf3kdzRGKatFFtLQu4hnKgK9HkQ3NgZwy",
  "key3": "4pi1YYSvNCnYuobosEZcdC9kc3GJpxgapLLwX694RR4XVPtYw6NCy5wbshCmuZdqAy4dGJPvpEEu3ZipbHWju9su",
  "key4": "2FK94JiYCY1mKJP2bF8sP2RRw5pin1ky3Wm8E8vvkvaeLDnsz4i5tVP5LURqBxsaJMvuCCuBZEYz69JnsAQy2Z1z",
  "key5": "3PwhH5TyyAvX9ge1heHx4dKsrf2WYVpsZjKNT4tfs2MTo4Jx32s81TkL1XVEYieqy7HWwzaW4UMex7zQ4s9i3uK7",
  "key6": "4sYJxhZKSdHyb8a37RoKpDpcYpeCeF7mbjU3Fhvz5S5Qiw1WYiLojHd19TVSgQkd1dM3mYe6ZompUkdYpu6qkHL9",
  "key7": "4wKjEkWwcpodqhYH7AcJqnVCE1SyPb6ijp3v8M6J83c5YxC7RNJk4Vz6BdBAS31yGtDPZX2WUYQcNZkMRMjHopsf",
  "key8": "UcYfHmAQy6WsSQ3DvgpZko32KUCRQwMKysoV6FVCtU2TwMEnk5FjiBHQegXrvDdZtbGjFWTpojfLZXgyxjAsa5k",
  "key9": "3b1KMzBJaKFSKcm5tTb1QayoZtaGxhnPeHfhqxhLt6AKKzih5oXgmyna5AHpVhBAz1LjwazzwLLgHbTD9fgkE3pt",
  "key10": "5HiV1st4uWR5cEGvzEo2VeK86S3TYj3JYVNJbB5drxkdEDprQY4Ssr5G5DaBZPXdkowiXEPQzqJWgWaH88cfuZ76",
  "key11": "4SESjX2KV7kqPhGpjPcUpqTPdo9YxA9FCm359E9JGiADqzwTLzwm132chddBdnQpRLQmGw8yaLi9h13Fzjr4h8qa",
  "key12": "41DCHFkpmVWt6DNKwveBrnxKH1nMoRQ58myQMb41s9GpWeUXYSSfpbqRcqTfUi85maYiLoJ4Y9GmZQdPZq67qJ5V",
  "key13": "29swvwbVmBa68qxxoBQ6qDyRRchg1bQrTtT627MgKRw7rPCQrv29rK5LzfMjq58gu9DQ6FgLMEVmKcCeBeoJX8Pa",
  "key14": "3vLFGr4dc5YUFWTBrr99CPihvagbmpTAoFt7XwWueBFVijEo4r9qkpviXQ979C5Yk2Qw3V6V8unmzahWHEi729ww",
  "key15": "MhY7ep1SVtuM9aPrEg2mg9GFGfTYfcfqGMq4UN5jN5KobVj4aFZ4wcay726viGN3GvJdtvAHz8c1B7qdp8gV7ZY",
  "key16": "2LgdXs5rK6W12xSWAbB9aAEfsjM7bvRe22xi2XcPQgFmfaDBGgimc6Nuhm1Bxyz5PJZvZngNW3eqYzbBv6kJ6Vre",
  "key17": "65H61gVxDbDBihSgdHrMYk9PUQNjugVJQUBq4y6y3jPJyupoP4QHoChJgHth7nUW13XKvrn6siwYYW9yDP4kmZej",
  "key18": "3SQJ9ySsFS3Rgw6cv5xYHmJoxqJauN3ztEKvs1Jqo9PdutVhAVoNdmogMR96Xj1rcDSHgePpBNKTKLnxPhQDWWjP",
  "key19": "99PunjD7zYtc5qW7wGvwHcLFofGDFDGWf7f3qN4zGAugiYLNT6h1nNoqUff1xmEb9MFL5gRtdnanp3ZMgbAb1xy",
  "key20": "63PADbB2vvVexLwY7f2tsQnvjg3VWbnHvzExDQWn8f8mHZrrhSJbCctdEAnseQu3RrRu9nv6U9U68A3HNanXbK26",
  "key21": "4XM39w2kV1K3cJj6wsy3yP8aKgzuD2yCdbBaR8sYTEg7S7TecTqhSz8ZGyjxuJjmk8sRMFzzVB7F2JjnGWrMukuz",
  "key22": "4wQWw692FXcn1zkK4dHy5UgJ9kyDWRz226pvZGzQddna6RrF29TCkkBmbh5N8g1xyyja1sheH2Sqky1cPkvkCHhR",
  "key23": "5LmeqKSEvuG6DVPsBb1iTk6sHyYWkR4cpmDDjtWTUayHQzMV7i6wQRCSbTLvEufQyVno7VWjnrtKsJxb8a8MTgkL",
  "key24": "4qVYSrEs33WYtAR8uoFHzXyLF9gyokbXipRXsq2wBdBQJYeos5GeKxgMquRcPBVPGNib4p4G6DBZdCZ6hXug6nzC",
  "key25": "5H1rw9C1b3xFgh2w7Si9V34Pm2TwXfEHeF5pPke6yNjXhsEuZbBHNCwaLgnhJ1AnoWDJPhMCAtuuPJAPDSkh7UG1",
  "key26": "5TcWYaHKSuy9LEmiVCrjtkmttwSSFBixWMTXR5Tf7GcQ9vSxQktsCYCxipFprsVW9VMTfjHhqxV4TkVwC2foiSbw",
  "key27": "2CipyGEVYgHZhS6VNUV6uiCLRKUeuWEqCzVh9Acq5UrD8cd4VrGf4Ab3Ap1JF2YJh7ASRJnz8jA6U3NNeNCApUwD",
  "key28": "g7EfCmSLtN85qYgXuWHCCimT4Mtow8TCga8nYaJiRmjAqWRKXxjRuoTcerniZECQ3hTNVixszWuKWEKAJkUJBBh",
  "key29": "5e8NaoTpRW2Kxa5UE4fqBZCyA7dWMp9ud3aSLJvRh4JJfxP2oeqnnhzSKXGJvFM9yLKRB8yHPPAg9Z9ZqtziiG24",
  "key30": "3tdwXkJENfWZoBPGkXx83j1zX29vvWrkP6DPN1Kfr79yAdHcxnMXCP8fUKeNREF28TCA5bhQyW78CA7fBXSREap9",
  "key31": "3aTEAUxJXs18ztDmt2qWc6shLZ2DgUueaFdLu7wQqzWe1UG3r85ey51oh28qhcJQTqxVksPhcEDmwKqmXM6vAJsc",
  "key32": "5RnAanX2NrWAh2AWFoG2AinH7UXD1p66695YEs3xm1iN7quYJVMdoEpgc51GTQaEexunzRPMcEVmGPhLyqDyToZR",
  "key33": "HCMmrqWBYqWGJpNi8WewcLcoWTbxDqDtErmFTHPtsHjHo8YXDMk7aMgCU9qjc68XuFCN7gQptJfBaQfJBg6pCfm",
  "key34": "61W7uEAg9EnLWoNBry6bE3tUxHFcqTw9FDjpVs1vrEuii5CcgiVdo1iNwDofvBLkU3ELHLzZgq4WtJyiXGbMu94t",
  "key35": "oQfj38Nf3JFREcZZJrNvUpC6orSLWTUXNpf3X7K7DQDxu9z56YuiEiMMik8K3DkPCsABoVdeCSsqZyZbRLiQ8vX",
  "key36": "4ij77SqZSZY2uwEQH7NxZzCLjLDMELbNsdgbvLYvtZeqHjDE1vWYGqiae4ypo3g6Vx7BGzcphk1w6gQekUryMKQd",
  "key37": "4QUHatd4x7XdcZgqNMnuJuH2VYMVHCpU3kQsvLB8vjJE29AsASJTxo1wN7M9S61RW2QCdMjzatcSW1V4oqxhKhEh",
  "key38": "NniGWWHHnaEfTFUqkMHyoHsR1Lzjjv4vCR82h55XX6ibnzaGJDchqSBozXVMNWkvxi93NEQwDPJ9h3M2CjRA7om",
  "key39": "3uFBsE66bi8dWgPPSgwk1Qi4KDTes59xmEQqLTcdQzDmguDJGgMb7hJ2ACq5ic8XdQYhDQ5Xd2vKGDnBNUtwM4rL",
  "key40": "5fSByWrP1zvWmFMk7fxN5Ex4U2hnYWL7rkFp21mAvqCmoJud8bjBMoLjxFySGtJLM293eKGjQE5V7NfJyNCXkCVQ",
  "key41": "2dpL71CNXcD7Q6qRgrvZsJnVW9a8nYxdRgrGUY4E8ySxCgfrrVa3xxcHoNd1f55qUiubnSzAwUY9QiTqbGnMZ2Ms"
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
