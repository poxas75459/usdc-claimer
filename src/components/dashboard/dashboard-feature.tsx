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
    "3wt8fGx6k3rBkv8ioHmux1TE8bEWWy8BoqNeGVTFMB9Pc6oHnUd9167ckQ69o5dm4jtU8ffbkS7L7wqgRfWcREoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wv1Qt6DnJ9RcpKAxgB5zpWFfLmjRqhYAtiWG2ZvCUuPAA6r2nN1Tjqm45o6TiiPeAap1UgYRYnFf3SzgRLhqm7k",
  "key1": "57kLBUKCyTFwwKFandgvy7VzfzHh3mtmMqYrhDMf9E4nLiNhykrwZf9oam1hMFmc6FGabZmwv6ERJuC59fW8atPA",
  "key2": "271Ww9sKXe411SB1fmUzUynAbq9VYNC9D1nUTYGNxXNzFEoVHxZKfWZLdwDX8HgQ78MV2qPQMvWDBqHWYc4ocLir",
  "key3": "tASR8NDYPiZc3rQUoHfr3vB58KwHwiPRRqRpYiUcnmPYFBCWBtk4RDQJTwfiwRgwNJTkaZ6QHTsRyMPtSUkqTEn",
  "key4": "2pqtMgpgqf88YEnNvwHNLpoq1GWpUXbM3sL6Qt7usrtSjk8ZawDG4Pp2FLDcWVY5GnW721RCAH7KRfEp1bJ3RpxG",
  "key5": "Coh5TzUYHteGTvBxECpTtsC5wz74T9MufePWwLEaHeNETb4JbjgbnLRrdBkzV1TusqjXM9TF3WqcgzYY8HNeuAm",
  "key6": "xNQ1MJU4mmYCEzuY1YEoW5eneb5y6qxTtrvcC2g9Y7ZH6fCD73pJbkgh9J55NUi7HSJe9Z4eyPpeBeuj1r281Mc",
  "key7": "2YLziKbi8tSQjUbATfq3a8KXZ589qU4NLx6gtggQ5Lzw8ccr42Bxr55QtQVsMks3bcmYR9Q656gawXRNiTTWZDx3",
  "key8": "2VFHgs8VHDzHi3stFvy4HA1DPM9Yh7zNy45bDLUdjZXxbXFBp9efLtVP9ghmtSC2eUQbwRvb9o2ZwCeH854U9Sw6",
  "key9": "2kvLkBj3dA9kpaVQNRELMiyaQMJ9JL4cwq1i1CjJnT2Xvy6frBNkfmkD2qBYoLUpAy58SaWkZJTFvUxz8L1hWd63",
  "key10": "2zckK94ytSG3ZKjUnuPvyBr9QuZi6CzRPsjW5ASPptECgZBTFh9cyTV7QuXPmgSuz5zGRbF7QzxrMEAa7HVZCM4c",
  "key11": "3VPndy4zMtm9hRYNix8FhSWhjG8P4MYqta3YarPnLeSaJE53f21SPM3qy73maibEdTtyA5C7mfHJfygjHSNb3Phq",
  "key12": "mBDcSuyi357Yy36qRFxuVVdc1JKduoWAtUabwEnef1okTguXe5ZcnQ27qsNRGdvYUhMQVCTzUfLXj3XHRyH8dEi",
  "key13": "333ycEC6iNCABvmJDiexDEwAEKKwHS5hFZW9qW3dDkho672ZvihraVEtQvjZmdDgUzNBccEAhn2pk2BodQ2kuvGf",
  "key14": "5ETZxD4DQr32STiWLWaaoT51ajpeq6kNoMTWxMjBUvUW9noktAHJ2EZaTiWdWjtXkt6GQuW29ZZEJRbBbh62ZftN",
  "key15": "2EYKp3XLvhjYk1KWLGpJA8jsWHj4TMVXVDE53LYC4iguFQRzusonPMMj1gAqPMSgAF1RWv4EW4EtomLNWhThnzLw",
  "key16": "TB9pF7aK5npqvfoL8UyL3kmn958B2vKf6ezV2Yg8RfrQbvaHabNoSbQZSoXqka3wvkyko9m7XV593eMrgN85yRh",
  "key17": "3RpF3Pea4x8xq2tXNUmvcfoKKMhYsBYSgaRHbTW5XhxRhvk2qZDPAtXiUKvvAhjH5N1eTcGvFj6GYsG7YDgpEAnE",
  "key18": "3uAVDfqjxiSQu6kLoAD7npuG9mfM8woyAfJoNeHBepdJRrSH2DuFEE7F2n8opgXDzZUdAFRfsrMUJfnXhVbjouEU",
  "key19": "5p8NKHhyMPvYQouNCMR4A8pi2uUQmfCBieGD2Upe2DTkrTEmtcrzn7moDGKhY3FoRb823LEnsNnsVZPXZ5ZZDfC5",
  "key20": "5N9nj85fSAj7qkRtFeXfKmeP9jWudpCTJ58M2bcNcu16j7oADMZDc5nNd4j7D8hwWgT3vdsKca5ahHdMYipYTbE5",
  "key21": "2BXXY2oE4BLN1PiUtHqzBKYWHrFk29X4hG3h1W2j5UKgyduunuks3N9YSJbrJF1m73NCaHhiz7HiYgMSeeVqxeqX",
  "key22": "5BVUVBL7vfqdLm5DAHEbz2ya1Xx29c43CWpJDaAveW887V676xSakG8rtghL6TeYZQeox2veWoCxB5Uvx4dcUkhq",
  "key23": "4mEhvYfbzhaNMdSGgvuJBs6qKLrVFD1ZbJcmZgphgLpVEtTqJrCTvkoHw2X1ifRnMpcHXXbsFRk2mmMd2m4fFnC6",
  "key24": "oTX1SiPD6sBsYqwsz9sATfcmzXQP1vLAsdHKaALBZboMLaGtyUgk9d5SDsuWDGzME7nmerxXz9uWw6T4wWzcjC3",
  "key25": "65LSiT2A6wT3xpEdd45jrnY5tUvKJ6bAbxZVUuERZppifvcpJ11qaWWd6QSQQARRuNNCPmkMY9ZgbXAXca2UATxr",
  "key26": "5KErEvHnj3ps3PckPUhcpwjW1gdWVW2ajzCZnMxRFqneRBjzp41R2cx5zKxXWKCJtNxZ956eoJ1ccio3XKyf321Q",
  "key27": "3227BswUi2vNcvUdanUnePhzJeGsADBBpq5sRtknJT9uwEtWWbxwiD4uvzg7vkTJ7CBK9en1hzDS1EevT6bnUXSZ",
  "key28": "jzfKec4PPPfTQvRHoRBdU3zboNsnj7V4sGSYub7HzbEvWWMmvMfcjwXvREFoCCuFpp1HT3FZNEiy28QS2uTsxb6",
  "key29": "gfUcoWct7Av57Wum8G1hGBbtuEQ7eRjqQoxLwiK3XxbWAwcpcSE2kTm7DHsyHJeidqXtwzGNumxiBtq6EZyvffU",
  "key30": "4XZFgX7Xn1ragxPqGHW3JBSPMcCQUd3ALLyvjx7bcRqC3ntu9uDCisWH4mzC38a2JE3RcSBYwcuB4UtddAUg5EBB",
  "key31": "vfhNqW8xpJxx7fMAsrjPF6v2QKZ9azcHuy5wd2UGia8sZDKgdDNtGtP4A6DwhrVH6yUNXwoRJ2zKnKsqgZt3Nn7",
  "key32": "2ymoqZjwxrANRNN4y3cSrHxLzFSuebz8RDDTSw8LCHVPyn5rNMAYwGesQmM4TJUFvcsWHpn7wuRMH6eb5Z5WyY7p"
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
