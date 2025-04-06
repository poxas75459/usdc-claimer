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
    "3ikaTwSPr8o9NgurzAw3SofcH2rAprqL4JShYDSkGDn3D2Ah4EmiNz9neT5Qb2nuhWEzWwEbjhXLidcpkEGyVbFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZL4mL4Da4YWLUnxX2gdXakrphnMzzoQYx45D156RBDtQVs4R6ohEfu8bwCaVfrpoorQ3nTKHYzCow9GztdQ5pQa",
  "key1": "2RbiZeXYjEtZtQv9fGwGREJhFKokdeGcw8rGaEX1q98Ue5knyjW1J1TNKssnFFqRaVpid1uAZQVfUtQ4wBUovUWA",
  "key2": "4hbZzNuKY2unpNZKk9kuHdiQgGixnM9iWJNuGJS62ZA9e3wJhc2usxNASyStBMP74kwgqtryNCh3KHNYavpyJJAk",
  "key3": "3skSkdzGNPouqk3iudrd2z6sYXzaXc5jJtjYuo6Re5yGTThieXzuNJMyiCjYz8EjU3pDCuebgX81EuU8JSe1XtnS",
  "key4": "3VegyTJxhAF61hk7vik4hSFaHVbSnwS7BQntJ3whC6yd8pNyEEifnC7YMT58kb8Xbz3AdkTZGfXaFdQZnAJVCuv5",
  "key5": "2PiyhYZz8ceBZGZLoJ8TqgH4KHuFmYiGq5n68Ukjt4H9LQhYjUXTTBAvrjDbiNNGipD1JusDuxb9mqzwPGP3FAsa",
  "key6": "3xtaXMkGCqjWXjwCwC7zXdjuf1WAA89bhodAPrzASQAqFyTSAcT4KT3RjmRpX5nz1xCzGm4r1pYHkqKAQR8GiUPf",
  "key7": "5fQWGCtJ7jEAaCfrQsGQQub2fpAbJxLMNy9uUQKgKT82s84bin9qS2tAQpitnvC7DY4DLCEqnBUie5rD4h1PH6nn",
  "key8": "3fGfLYdBPME2FYWLCqtJ6X8GAFrXSUBjaAdkQZ1t3UtPFQgrwZMiYpUeuoRhibLFZcqm3VLWPReo8yxKCVgG8kg9",
  "key9": "3MRoi5wv5EsZaUdBdLXdFJuKNc3myswWoqeG2MZNBaCvdVreS9MbfgXG5ZdhTwiLXiGphikM9fLmh15bFhXjBvkd",
  "key10": "2XqtX4D6Pq34rvATvooo8CicuSy1qG1V2JMuw4wKrb63GCeUSUpZWk5yexbLQNyPzkwgbPY5x8uAACFtxikgMvGv",
  "key11": "5J98g1atG49KfjZhULxWcdNcYummE9aVWdnt4YkvfJs6dmFNB2fLQRe49z9n9LWei3qgGEo21su6KVK1P7RmwcRn",
  "key12": "31BVjDaWfWjjLGUsPpq8hGgF6x5fiRHYZT3QaKJz3ZHT2XJF7S8SJtPkXa8ghmVaiy7S9ba7WMr2x3gAZgDXJbp6",
  "key13": "2N9ZC7escczJywytmjMJjWwqsE8BbRRviQx9NU148sMUKEtpD4jkGHXWHLjFrd1QEEqygLUWrPrGNgnUtwACJ78g",
  "key14": "5eWpNcZ8YZFDiYsieCvNvZJxzkCFkfM4FhJfrcxqd2iYA3wrr2wanKhwMGvCNomDLmofeMySkKkjnV5jT8qgrcmr",
  "key15": "5SmXNF5a7cYA84DV17sZ1qg4A1YdSNFJQWMfRw62K2GDmNe2L2rY7d7MoYevdeYFB33tnTM6CUdCwW1vV3CvXhiH",
  "key16": "2MmQLrZHAK3ehq4hJQt4RwrpeFQFgumtbtAxcHHpR17nDPLbp5Qhm6UAPdE1dgBBFF4Dt3nthuZmXAYSs5ygqtHh",
  "key17": "4uq4yX1btxaeeLhu6YYHW7yKdSv17GaRUhv52Le8BuihuL56RZQWnMH63cER6KdWSPkBddpBNpsSorbqQS9yAPtb",
  "key18": "4YY3NfmNqno5gwqePWqsLcNnoxZPjYG96ALUzF1zpJiULcfJr3b3Se8n7fbikz4d1U6vuiFKHjc6gx9myv9AVhWE",
  "key19": "mEV1dKdmTM5TopBmoqo9byPFknza2QAWtCNuYHXzDKKL3pbPbZzMLpQtbZREErV352HUw36DcUKn5XXPBihDPo3",
  "key20": "2nWmADs26sdWEZ466HqpB7yc6t8xtS8ssE2a9tDJtc7fVHu9xKkUuZVrdRX15eBJdUhJtodKQxcfkNejmFoZ7DWo",
  "key21": "4yunFkTpBov7rhPaicBraTVwJmi3aJxHm9CBq9XWXGNvTgYMbsLQfvZQhJW9hk2wXYEUaWzQbVEzAyrPkboC5jR",
  "key22": "5Ka1XcggUpscVWPAdT7aKDR21SZ7NyZjyaHmUKNqCGAyLxHukYLhpPrHwfhwgGf58ZUbswUcgTw7YTSU6caz77Dc",
  "key23": "22jg66DAh8sjXP9QuGznsJqxYjqc76k3vKk8FHD3vxUkfhzkbceXBKgETxrandtu4rK4tRSLZjKpxjkm5c83ii8c",
  "key24": "2fuxuAjHdbrJFzEWuDPDx35rXbmAkC2P3wMiwZt3HnALiGdHbczc9AYqv2PBNdAPhi13xjZ6nKt4Vi55PYUtFm65",
  "key25": "BbmUYxVFjSosUt9qFNwndC4ELEuMpMo6GhiGaze1dXRkms1wtfmyZfjRYK5MeHGrSpewtw2oMJX26mbMPRUAUZz",
  "key26": "eb5JsHg9g5Sv6sRbJR5SvJpGbG8zdNkSV2gWUcorgCiLjri9MR9SRAiXssPEGuQxoxXc8iXeyFHN1Ck1qgU7JSX",
  "key27": "7iiZZyugAWZcFbNrECBjojzkzHFBPrjQzCR6fg8GRxywzfjQyDN3Ny85mGRXbJjrVRFQfwv7DkyPy4xeAVCpwih",
  "key28": "2qY8BeJHw9uZUDvEUibtHsG2Y6j79nYgmzB27rwTbEoBEVhehsyWfiu4XBbhLvKrgfp3mGG52cQnA8pBvnCVK9e3",
  "key29": "5jN1HcxMUyr3Qf6FdXPQUdfM51zYLazZpJ4NJRGqhGER9Qx5KFqp3oDVmUF6zRFXK9i7pP6YmeMH9gMZuiaGAbZX",
  "key30": "3QR8pu7SBkAc97iqF3NqvJ2fEqZbCJZ869yGpeauSXFSU1DKXgkRCgtQqG8xVq7L9XcVPdVsXhyTa8UQEi87Q5XJ",
  "key31": "54RUdwrd4uZ2YqoShWiHk6K1yqgGppitCSBoQUMJkvqFoJ4jC5JGc5DXofWzX6bQutXaxvxUMAgf1Vs1nBme51pV",
  "key32": "4gtXLZJLNUQeDVAkXf66yLW56CxPTUJqbnoRKBNHPwTaaZ3kEgAonLwFhhV6WubSm2abg1CWVhw5takY6xVYMY3L",
  "key33": "D2cS2hR95rGb5rYtWD49AfY15M8ujor5Z3C6ZRZJHB8mrKJZBgFUNvsgwN99M4cc6AaSQRwxiNPxpDahpTHPMY2",
  "key34": "dUad82wnBupz4Wf1vUqwbKMKFdWBUcHMxq3HSGM3YJAfU8hdPFLMJmUxhbc4F9bTCmWco91tzsXXkSZhU8yKDnv",
  "key35": "2outf3xsLW7opW7vpWUYX2vU3yjwa9e7cCuSaTk96wawFwXVWm46tVgz5HvP8tmGmTQiPWnsqr5PjtczxbeDwJFM"
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
