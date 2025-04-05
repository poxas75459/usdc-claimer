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
    "4ked8LBfbmZfvVZcNxbfjy6Rhuh8TGwUZ9vPibX5zfynVt3GBYp3c5BxT7qkcVzu13Ks3wo6JVE7fsjPq1CTw6rY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ft2qRx6ubJtDHiNpPXmSBKgT5YDWA3XLjE57v3Yf77UEf3SEXGAGga1D1ovfmRobhd17Eaqq53wRA6b5EoZktwr",
  "key1": "3kbbNZP5rgFXqsxF217R8wiRH32kfLWd1DNySzZdN8r6jBoPkvWHA2Eyh1Pn7Rbe5EaArZBTtrtvvUJmr9Ss9WLo",
  "key2": "3Cw2L4mZZVoguib5mZeh62iq2EkdzcXET7QxUkzC5KhSCydPgBvYz2xZ5AQDwTTZN6J9SxReGSHqdQVVGZNrWMja",
  "key3": "YvtZPcKxUkDHiCXcFNDnj2J5dZRgJAFnkDCuRCqbfw1QPaSCNotgyKsTs6oCAtpkdLxCUhusMtiyyexdfHb9b1R",
  "key4": "63KDw5S8EmwRAzVLJc6QkMcA9LvTQNuFeE5rRPMJGFACw73NYQwwYMGsMP8APqaaxuX7obwig1YS1SY7V36W9FvN",
  "key5": "4rh4GxNvoLtRzMySdH1PmjUuaByKjNozWK2ZCtNH4bgoPkkZB6B4rSf4k3MwxnuK4RU3VinHxhFhTycukfAty9ux",
  "key6": "413T5wyK5wLdd2LFCk1brDeo9GCvX7KeHk9W9ksk2XJGXfwjWxbuGoHd2TfX7iiGH5adgyuwMtb5QCXX6VCksc19",
  "key7": "muNZvg6LF2dQkfk5ziXwnTbVo9PMwotL4E7LteXyyTTw9tGT1JwcrK5vfXxe9k9euMstDREBrzQ7nVagiXvTxnL",
  "key8": "2GdeWBQqLmgRgejNgoXTLq19EKiXLLXMS7aZLyAzcEtwQfTj1ZF85G2QjCbNHR8gdM2yxqdpmhgb59TNHkc5tqtr",
  "key9": "4NVKcPYfzZWgf5w8uLogLk13YMhH7qa6o1F9PDtqfALExbtSArWG1LM3upUFv8qGJSRMZKx1GSqwHFJSrmD1pE6w",
  "key10": "5WzKwTkbBtQvk2Y39YSH2w2zYH3nzpYSQa8dKxN7QkhXzUpH3eZmG9dQjyDP3fceLSocLG4z5RLQMZeLKs7LFUhj",
  "key11": "44A1LcHT23VgNMzxXxk7Ex8fuTfFqYBVmeXbMza1cAkuLZQaM4tQhLKwjTpUVXA2m6sh7yk3GWM3PDZUnMgFzNFA",
  "key12": "4mj7Kqsyuawh3LDdNy74P5zF3HsJJB3MCgC5TSdPZSz5xomzg699FxFvo1H4UjwRgTmKftUSE2nJUbJpfNqcv3jZ",
  "key13": "JZ2jnmyFfUWTKSZ8sh288Cxj6WGDezYQE4MJUy5BogbW8T4qT78qSWyi3WyPGWpqB7ETq5k3BaEDF9MTsnsqQ3P",
  "key14": "1249FqE3v3QmvqR7mSPBsBeZLsRdEDFz71DF4R8sTrYdHC8NnKR1mZZgwT4MSywu5Fa8YEZs8nQK7mqz7h7YNBYQ",
  "key15": "5dPq3ou8seCdy2JrXY4QpBawnCmANjNx7bcBMCcBMHGUBCh2b44YsTSRLiGTbPRSmUQ23uD6HsqLdDnprxCUi6GS",
  "key16": "CDXpdwitNHbZX2mzTkcxd17BrkziELjePUTQKRotBM59nMSv4gn72qh4hCX2YSboyDKhifgsA5K9wjr39WSs32b",
  "key17": "xtJND9MhjEP2oLfuALTr7F6SmDpXF8R4QK89JHqh4C9oLQ4vUAzPwPS6rPNPdgB8oQK6weLWfQGR2sK7hF1b1rj",
  "key18": "2yVH3znr9NQfoVAgyaDipgALHtBMM6qMpJP3hs16mqaXcUq6wUiY8tCvS9ZPdpRUbp8B1WF3NtjBKj4P154q9tYs",
  "key19": "3VhTh9uziS9R9GanustQM3xWCxQVyjMQbw4cxvyf68ekHTZZ5B5BMuZDkr3d1fm6X9WijnC45PEgwnaYCgFL4g5o",
  "key20": "5hhUWCL1kaTfrExoPEVbw5VCraV9WE5JAnk1cygAExqi5i7nrafiUX3Dxn9eZeCeqdKgt43gkKuNu6DdfQtUcr4M",
  "key21": "RrNmFyTyW3wV6PWGu59vuxZS25wMMzsH8pMT6Z89q1pSHCGkRnA4SYB4reQnewicjRNsrnAvs8Cq8MHd6Fe75rE",
  "key22": "D5noF9po6sqnm8zc4V6uwjHrFZ16s8pijURVT4zs3VxR1837axbb7bdr9XupGCcfqcvuxx5fFARVXXizewTePBo",
  "key23": "6PfquvZJcdsbUjNeBCXwfwuTbrL8ZzQBHJLEiw4wdi1X6fd1HYnGWcupSRre2bjRwr7YtfnNEKGnPcGYCzRCgsa",
  "key24": "6vL4uJ5F9vF2CZ2MTLU1TFUG4M35e34EFzyK9YuKVzZnshK7A1iwMk9YfSEnZYeQNFXrBuT9JfWj6q2ACecf3BK",
  "key25": "64VaJip8jGzZduzGxb6szqqSPn1WT8eVHmPEsDG8jHKmZZXnEfYHCDCiq3AE4amTHXFBQGHdj9jvH8eevfdzf4bM",
  "key26": "2EEcADsyKCs5zJcGjvSRGSfZ5P6UiTMiVA53PBXJRbiPoK8PSqetyhNc2WdZP5mBk27K5rBSd3Edut2ugZZ6P4hZ",
  "key27": "4GzFiG4wv5c4vrK6uqqShkxS7C4VdxKFYi2RaLk8F3UneBZ6dtcrQVQoU1U12qGZ4aiFWFvtC93LWwBBCqLHjGfu",
  "key28": "2U8iYPjpApVgrqPMa9LEqokbc8KGTUx6dYTwKqJwzbsKx9YmpwZ4AJHEsRqhS8WcF4WvePP4LDWzZm2dPhSdkBFz",
  "key29": "469yofEbRmHtfmHnJi5TzY2wD7Wuc3DEqBtySvdEMkZMF91kXYYxvZf6pJQ9tyCs2LpfjgPNFNZ99tZ1RwMXmV7H",
  "key30": "2TiVjpyvXfPa7fJ96kNpy3DURXtRSCA5QsZ4sVgZk69LuwxhciiEET5XwawcgX8hqAW7b3g15BpzcqnNfqRZ71pB",
  "key31": "4R8oD7aEgyPCWzvFA656jAHZaVamo8dJuGQPySh9KhP87ibdRHzms3dwBcmnGzmD4oRkyfbUZbKD4L3XUV2o63St",
  "key32": "3v9depwLseh8mxeBqnFNhdwo37SEF6HZqH1Tn1Anhxn2pPJSdj2LB19BtKZAMVxdKftbdopXaSruF65qLp7fViAM",
  "key33": "2q1orVc1V55KbXU1uqEEwrkUKMwPgns9e9nHU7xw2eYRALydeF3GpLNkFC9fqQ9xcAQzJzzWJSbERYEhheffGJUg",
  "key34": "5ANV8DwJ8YNJqn46xt1SGV6XNzygXFnDEm613Nec5YiL8fBVdbiBTguiykQEEvq8VtZLpWC6e33ATbnswM8y1CDT",
  "key35": "55UTsGdqsxbEB6F74a6jf1ewoT5NnVwr7Myn2d7bFxo8iL2wnAGa5cW4G9xamzU2NLjuDTEEoM7LucdWgR85CZRv",
  "key36": "4iWVFQZ8h7iYSnUuCmfwYzdN8nRmDzKEc9eAsAVBCxsosZUBfoEA8YnV5oAFPiXZDQHtrTHJ8AyVGjhZZ7ccgohD",
  "key37": "3Y1KJum2sCPSvACG5KLEQWNNHgv6ywPxvRHeHywo4Q7s6rdKVXJxUqk6QXzeWqovjcmxnWcgeXPBpERohSju92PA"
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
