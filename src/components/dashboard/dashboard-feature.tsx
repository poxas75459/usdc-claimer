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
    "3un9iBebtq7qbW5x3EwLcHLx6D3yyNs9aVSbLrNUJ6EcTKimu4zdLYG3vT4P6AXoLbSoFgJsWVDsDkgpnyXMk7XS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWsJdvc1ovj41Hzc8ywNiDYX6g36CTiuaJqNwu91fwWmwi9XgVRKvnbaDmk3KafDjrPfHko4D5JUhrVFHvVYbdm",
  "key1": "3RpsNRH2P33j8Pa7YfpKhhRbroPUrLpfN19BuzjCkbje3ei9qA5Q8hmTU2iR18X8F2MDeom9d7txwyoRoJrCrK2b",
  "key2": "35BHMFiybrpuqpbdy2zGgHGmQirXhpDB2DPFYwqnMjAe2o9N2VJqMDWoE45Rg3qhH9LBg7Cws2cEmtpQigxL7cAm",
  "key3": "3WTzs9837SirtHREBJyPDaatA3zgDuiNEgA3uB3LHuHJHd4Nprswgxtoxwx29hAVJVaKbfgskcVfR9FyrFfunCed",
  "key4": "7rVQXz1VMuBHzHEzFf563kUJPgf2F5t47iwRYMsUBXFLP248rWhysgk4yx674Yeq7jRvXEbhHui2NheB6UdpVGE",
  "key5": "nbH4tcGDaGGAYFrXs4pdjfeeVfTzKYLjwg11LcexyRd9LbR5AV2vyi1gJrC5nAMtMj2nCHFovzJXSQnmbx8dJKJ",
  "key6": "4nqsvuTLEgR848P9AqWVdRKt8K3MyMppyNPhkqV9sj34hqvGKse1DPzkNW6DWUbTBPopj67bmpqKwubzYerQwgYA",
  "key7": "4mKVGwSwiuFz7qbAKhfufAs5bNXqtkcf4EKb99eCzqpyQerHrD5mjs8mz2qFLqe8Yt8483VdvHbm5TwAe29acfG7",
  "key8": "ef9urkMRuhcoY3LyyDXT21X1VJghxUsZEEAuTv3xPcFaF5bJKQnL8in6H8tgXmpejCr7En6bKuxKxUPt3AZETkK",
  "key9": "3monF2nrkUFr8jHVrHkNYj15EUvjYPLHk8gD8utuXNfcUGKUvbt2bmBYzzM6GrdWJ43te4TqmcpTa6GCY2ujNdZZ",
  "key10": "5a9cPKfNCFmQwJybQ4eVmrZcsnQ9teNDcknxEhSxbHVtSxbpMn8YugQzCLT6pmHDDzG6KebuLWsxnET1Cf8YP6Mi",
  "key11": "4duQ2Xhc4ZdEWju9UCUPe3DRmNe9Z4sVy2dM9Cuq6cBTuADCGLXEBj13X9pTfzkKzpoiFGxg45P8MYu7V4KUxv7S",
  "key12": "4SuvN68uNkRGc6JmGuBJFSzbP33Z9QFEWUE6zT54QxaSD1T2deuTTx2YdMdsWioCFL63Wz9mkgTEQwPoEABi1EXK",
  "key13": "3569Ujy5y5anhcJXBFVVkQ6rb11NLKSwbRQvvMwZBypc68rs7zPWgbkb5iKmyNPQBqpt77om1qjpFCwe5tNJ64Pn",
  "key14": "2SdwTdcjx9Kg3nnXd7vw96rBsTGWSDHBS8K4pTxoCR2ydU46Api96sQjd7zanCjFLQKLX1DaT46RMNUvHYYzf2Ga",
  "key15": "64Gt5YgUPy87m8vJVdsyZ75YRzAkn26tCPuHQCNqBYc47RBiMXcPkfPVTSvBs4NEEQKuC3H3Rcim8em9Q1oQzsGp",
  "key16": "5N8acJ6p7FBTA3u6aCJMWcMjHMbhLeryyC74X3UaYxW4jhn5soyz4nGCPPMJ6BG2HtyeGjnSekBWXG16jQAid9Rg",
  "key17": "4bThUEZHcQJpAebDEoCaf5bYQga9yP4APPzBqpqSZLPuNPBieSSWeNPotqFG1c87ZWefJU3rh9U88ANBMdVsbFAC",
  "key18": "upEZdn77r1ous3RbFiWGoQKpJfkigmU4i6jcAnVYxy7vkG26SNGDewCNuoAz5xj6HtNu9V2sTFRoRpzUVSe3qsi",
  "key19": "48SAf1zk1UR6iwX9uEt1hictopbzn5BrzdXJdNamvGjL2YTmgbHTRarMMUN75apNvUzMmFQYjvFVfsJs7PXfYbDD",
  "key20": "22NZwJQWn5EQVUp8bzxMqmbZ4YkNaKKcmjkW9ZrECaUjSp94o6mrWrt45ibZ3n7S1tPcPF1NajMbmAGuZx5DvuFm",
  "key21": "2VcK4JMooVV6PanL2B584yU6bKdU6D14bJe4Pv8625DA7NgAhE39CKRojxgeXY9HCKny1xdqC8Q6cfzem6rT6iKp",
  "key22": "3A2Hjtqa9JDMqHf3URafowmsk5B7GuR6u7BFEBpeP5HyQG7rxRHuETLyqnFLB9FaXsiZa2G7BHz8ZAX64M6f4Qwp",
  "key23": "4Gxho6SY6UDiBGLH7TSvFDjNpWZHcH2dUGgbKqPUdRnYnGmVt7FqDwhEXFCuJicSsBJzGFGX9kb1Bk6gqYxQcct4",
  "key24": "5o4QEtqLayNutZ3FzcgMXkAnYWBvzZKwTGuejgBEDtcTKQU79p5c9WkCmnQBNor7wFQ86Z1Rbh9eHAgG8utfBm3t",
  "key25": "3UTMAvAB3iiS4n5BhuFgUqqHJkZ7fgww6HkBKDXgJS6APH5ke2xfUdvGohPeLgPH5d1NYXzz6kMhg6WP83c2iQuX",
  "key26": "3Z8MUR8Eywpzu2H88rXXj8WenDhgdcdrbTj7scvJoDQArzVkH2vvVPj8jpq1ABDGskvUgWKt1zs2LzfynkoirBuS",
  "key27": "3mtex4QivH2YfMnSn1p6jZPzVwJqnDHTgMbhVARKHBJVoE3D7aTgSUB5stS4qQNthx3NaAeYu3MoeLTFuUydWzwe",
  "key28": "21dAjyxYCdMSCLCuZ9iUJsrYDcFB8zd2MrkR93aYUYjuXW5tPsmu33QQiPEnMx3cmrMj14ZkCcgztuk1b85cga3R",
  "key29": "4qc4C2i16ZhjD2AV6QsESdHDuXV9zMNjvUzDpb7qUijD6wVopL9LKu15SwdhCCK6uEkETpFKPrTvann7chWMDsZZ",
  "key30": "28GUFUA6CcZbBU8bfybU9PmwK6ZXp2tFirrTrs16vEtNmU7wXwvXTpffwmKyiUkmHquvHekkFHNGubeGvhkxphZw",
  "key31": "2UQ6i1zCRdtGkE8JMhjvcEHmoXHy884Xqh8L92qQEr4GSgPVXLvZuEYjynAshkH4r59eAuVWmWhqUS8tUTN19tHQ",
  "key32": "5JrtwtMv8TdFbqTmpTFtshZ654Y324dGeGUGUv1npXfLQNiwY5ZpscCZ1mjLubHy93gT9s8yvpmkYgm5HiqFnAfw",
  "key33": "4hSPiAjBkWoWctvFsBGUJbueYHy4VSx1X7nBxF5kfmeubc8KrZijvaSmZtRjHCLYksk6SFyvp8qvz38uAVTCAyNH",
  "key34": "4eUPZozgoW2aYJDt9czC6GtrQGVwAhTGPi8qwy8TD9VT3KWtXyPVscAX2wScsGi1nc9BiLhaneqqQpqUTzJ66yT6"
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
