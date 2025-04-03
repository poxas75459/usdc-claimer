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
    "5VKmpTwF1SNU7G2bYNdRUxreKqZZaD1bMPrio4saJMtDFoXXHhwjXqnLMMdg2Xe8JUCUZNfUqGu3DrePRjBBmgPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGJXccF6VwicR1HBJGZzMz1HJ9XQJoE8xk21p2h5dvBrnoKDMexgZnwBpAHVvqQMPdvFsPbtJ97DtAgS9scKw5v",
  "key1": "5FEjrdz2KP8Dp2PPjewzf3ydjzeUJbwB7LuB7BzgYeuE8YTzWSME35reJEJU1PN191qmtRDmWSw7hrKu3T7fbhFv",
  "key2": "2obm8PNrVKoZqrBwBP43GseYyQnC9R6AmN5iL3oaGtxXi6yjsgC2TzY7PqmsSo2esVLGtaiFt76Uwuib45oc227J",
  "key3": "5GePdkm7y3oAJcYbYkh5RYMWFf2CupgrH2uTDzqRE2BFa1oZsBMiokZdfKkfWYMFNGM436wA7WGPDVseceSiJ3y8",
  "key4": "5TLGBcWaDFCCdYFZkS7fzrKUCEYdCND72fx9uj3rKhwP1TdAEU2gURviv9hPi7oaQCDTBbCyghzxt3smsAAEwLih",
  "key5": "5PeUdqjwAPfNFbmc8e67ebuR4T1qSpk3yKnaHeQo31Fj326D375L5trgKycCxJb86LtCfQ2yJxS2C3FvdWcXP8mV",
  "key6": "351y3CJvTzSpdt2adpJjs96GmXLWQSGmLAsdbgE71Y6FHGRHA95qtPbH73F1jAGVLAbLq9P5Mi7ax772bKAWwzEV",
  "key7": "2xvjDQfomncEzHnSyY5fP3cEsKpNAHfedYUJPh4uQa6Nb8Gko1ptvz7iXRyf44pZT4zar3TuY4gy88hhGxX3Ubbd",
  "key8": "31BjEoba8Q2TthsGfa6iA6CCZwRQD5179aQhWnU1kaM2rXSycFPZtb2duXDGjE3xc3swyj5MK2b4pqjBYSkcH3AU",
  "key9": "2xuNn7LYDVtHWyRNJRVmSyChFHwoipcMw4HmBBfPstbTChSjuFEMcBnQHh5YAgpkVctfk3eyoKCktN9RQSX1XBWF",
  "key10": "5ma1jzbQbhU2eCLN13aLh1o8QZEawZbmAM1nnHw2hKX6PEhxW4awxgjegpTvUfWQmGB9zVu86j49MYWytjkR8pkx",
  "key11": "A1fJTwmbZw78upqiyL7W3d8aEpp3FrPpgzehVXe84RrcAi87cEJ9YyXKk1RmvCBdMUS5cChm4egSbqrPfjbWNzo",
  "key12": "PZSkHa6LtHpCFqEn12avqz8XsExhdm7Ld7vLswttsqG7rMtF8sFx8KWccT9qJbDjgkThGadENU9VXbPeUe2B9qj",
  "key13": "3GzE7R73NbJ78NXaop5S3TuZZ5Xd9rUA2qFG96EpgyV5NcKbnuRB7JuiFjHndeUjwipfekP7KhU9yorMjvJiMi42",
  "key14": "5svsWft7hbc4nbNv6f22zmERnsHBCw4mJujXe17NATK2DQJbpCaiH1prke46mC8Ds34KCCg2k3jmNB2QeLQ9CgQt",
  "key15": "5fWf5d7vwP4mUv3pLmBuPsHop2xtYWE7VnEQk5KydiNG3ra5aj1LQWunp8MxAoVVHi1kL3WAr5TYTm14AfY5Zjv1",
  "key16": "4tYwtaZpoLMpi8ELquBRnURNHCz8x8vMHRe5m2W6hupPMecyaqvLM8fZT3x2Q7muLpVSmYkkTedofwSiVo6wu72f",
  "key17": "3FYgehja24sB5wqykhowWDJEQm2yWZ8KfeYaWqq4KZzHV9S15DdVq3p7KkA8TLuW1kUwW8mv3CWXuWj92zEye5Bp",
  "key18": "5TXwYuVJr8Adi6jX9PkV1tJjGYnYGaMgtW4Bv6DCJ51JTZXmsuWaZQQW3UgpTLn3iFfFPNiXuMkgtbMT1VS6L3oN",
  "key19": "4Am8hi5bX3EAoFPcpifDh7f7pBKQyXA2ZcZ9GMukzo4SaKEiWztq1WJCVdkNqGtLmTT31hZWNXAxpMJjRgWgXxWt",
  "key20": "4pps1Pc3FC5kS8pFiwXqJv5ipSQ19KAMxMpsTrUU36swNECByU1zDiT6WjPoAtatkuBoXGP1khjpsqfbHjQXucVw",
  "key21": "21LrcV95AitB9kLiKSXLPFBMaLTCja9uZGJtsvwQgAfUHqjaKUAu69PSu1nnhMUmcKAuD3Mxs75RS7wKSA4ZgTJ9",
  "key22": "56ZUCnsmkPEM6iZjUkPktnHhrVFxwuk33op4dT3YmWJxsgFJt5oHeyzcfryP5eDpqWp3gGS2wLjepM6sQ9GJUhzP",
  "key23": "pbNpP44wEMEQALW5ox6vuZTEcBtwRLrDAscVa76HyeSQzycUPRi7p3PfZV8tQH2qaA9vTPvEa8xLib3YTqeFPfv",
  "key24": "66X37jYJ82KtzehYw5qah6Z57W42nk1kNvLqQRTpiuzkPGhRwmFvdwFc2tnguvu8ruBqzaTqp7RU8Ky2VCrVh49k",
  "key25": "2TYa8KSJcVAh92hoRzMPywXybQ3ADvTdJFDXZePjta7S3U3UkhapVEfx7pREJ1Pk1fPZxLJzBpSDPep2sHeXJg2S",
  "key26": "pVWoPvk8KurPz1Eh2UhmEKv6C2y8PtPC8gXcBejpK8cQvX3xhnrqHZUsXervV5swxTdezy4YuRDuGNipAyJuLSq",
  "key27": "38nDNe6s2E9PR2tPmc3jv9daiGWMawvCmuKdxnZTw9dAEQaZcSFGXZaKLGotRZtDkJbXCwn6zSkdDBVcX5oBoSf8",
  "key28": "66gngPDbuKBXQwNt9ep2AoYkyqx232qBHDoPfHtH7fRnzFsb26nZ3r3paEvKhsN2aHA7fNQZvCNJx5WGoK9ZQmad",
  "key29": "4pzopP16vdZ1vLV6ssedYYq9jhAw9AEt17zj35YvbBAHqFkEoNddTjcqjqD1ZokDYj2DJPMyGjTed56CsKHH57Py",
  "key30": "35MtAnaF44aaCwfUcWUtF9VRanYptXzRcfCsFXrEbBqz5qLdsCHEqZ2NBH5U5Bd3TZ4xyjnTi8tB6N9Mxnhw9hke",
  "key31": "4V3FMHrKL7Nzo8WpFxdSarEfFjD3qbjU1s8jU9i9FyuotT3XDBFMDBTXDjV7w91kimW6VWfnEx2xhmfiezHh11Y3",
  "key32": "4gkykWb62waVVg7s7HcPqveLQ6oyranj6wWuCkZjfZieRXqjLrw9ZP93DLEMkuX3kRZcCPdPHdfCaMcgGR7MyKQE",
  "key33": "2szD4T4kXnnwVcgisVz1Vf24wefncf8VQe4Zipc1v1xVQXUh5niHQvEhVzbffn2bQL83eG8wodGeNhkTnc1gkBhV",
  "key34": "5k3wY7VVLxmses4rEnbDJtQuk9YQ9FYvWoEPtCwpMCt8m2zFQpofJ9nwjBAQa6tTza8mL3E4F4F3BW3Zsv2xSuXC",
  "key35": "3Do7f24o9uWgDrNVQRQYWJUXv39ivENU1AVsJ4DfJzrF6Gt82B82CZbAEovAZRYad8jch1KMhDWTQ7a7UAUh7EnN",
  "key36": "2DhixC6K3VDJbZJ4k2jdyEBhChjnnxGCsuJ8iJ4shQ13DS5z3UdzB3DCRTb4eW5Hq14jwFkHmHugYbMqCDw7somT",
  "key37": "3LnRYUfm2GvLX3SLjPUWrcYTcoV2nreK7fiWsAySTx6mMY5C1kNLGr34zfj8jwRqW2hHtka5qg8R1btjXCzBjGPf",
  "key38": "3DmoemfKxVnBW1Q1z3Pzo9PZ5Jx3szoUiqkCU9qppS93GeyPutuvxjyeFx9k9YFqua2yNaxMtVUKR7DtRkL9zocf",
  "key39": "5KaHbri4zeAjSYiXoSmrQEuL3UmcbqWbWWu8UuNjPnMP8qfHzj9J2R13f4ifJ9QmAgQVzgAm5MnyatgpbTtnvakM",
  "key40": "4EouViZTSzeKJ7HGfMton5eJRFg3HsJawG9Wejy51Ho7L4i5VNqx514mfUpvfSrW4ZbF2r9Hscswt9Taeqv4CZbU",
  "key41": "5TFUcdezSpnYsdSUXXHeHPfQmZt57SN92R5x578Nt3tx5d3kf6udqDp1FCz2dRqFVW1EtHBx1KZdBPDeeAfyvdbb",
  "key42": "3TA3iR5Vj1Zcd3pyN8HJbL2REtYkazYnLCNZv6o9zWqPXgJu8hHWW9HdjxsxAVoLC3Akh3F5iSkEyEfz8M4sCtLn",
  "key43": "2dCEpWNDFzEwZ8p6tFu28joGF3AiMo2ijRZkb1BRuxNcbz4b1aHZhJ7moQb6amb7DNPa2KAQ972Up3srZANKZEa8",
  "key44": "2dCaDLqPRyaDxuChZJWJaLzfVcsvdY9LgEL4CdiJFtJDeWbCdPnGf8f44DuVkXB5TCBvC6igS2YbSAXAVouowhRG"
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
