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
    "2TCPwQyZ9HxMvWeWu7KfrAV3fdEJRFD84A3pyxaciWcqn9Gbp2ZUhMTpYvnxkZfrHrHZESxHyemYpmiy6xG9V1uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p896tMLjDAsMGa64gdyBjpGhFrRrbzthCFTJJfBVaeggBrsNTXbsXfpbmJ1qHjRjus96AFohqkTAfL5gnGX78Dx",
  "key1": "5zuB2oJpwseAATSSn3VjWGSg7dQpux23A86fYy2TQNj9HujVR1f6ZGiuC8zxrX4tXkLSMYm6yDF4NRgs4iGs2v7N",
  "key2": "5k1XdEpC4ujQ5LfvzbrMaJgS2RymngLF7Hc5DGQrynBdFqitoAvuYVBdTxMGtr4SQt1FGPqFLmUKatLheJcjFA3v",
  "key3": "4t9j77FntpNB2RGkzVqmQZVK6VZAVeRjUqp66vY6GskGDrZZYBja8BnuBJXkmtupQsjNdBSLXfsneWfoExLucJ7m",
  "key4": "63xyhWF8sVAjKwJKqBjpXijTY6FnpZdy7xz4sfHJcCQbx4Je8ytMWZMcZ2UJbTteTToF14rAmE6axbS55SxHZ5PB",
  "key5": "28a8Hiv485c11rpdXzLkybZhAuMgDt7gvVioNtZEWb3is2c3Gf17uGYGCBp8EUPimTPsDCB8oV916tEbdnaLNNQ8",
  "key6": "45LFKxt1e1K4xMRmMZNfGQ6vNfi5WnWQQnArKu5CLVCShMc9LgkdJq4hWpqgdWtBck1rKwbKJNoXhPPJWsfzAFbD",
  "key7": "stz677K79PKrJfmSSmDBx9iwapaYNYddtHEEhKKJAUYekAWG4ryEuycJE7r9xbiAtM4iuJH3jYEGMAUK66x2KHL",
  "key8": "4CurwHMQ4M86jTorFmJ8t2zVgYjeTLCpLLLYjdZd9nsAXg2KMmobR43H2SQwrqNET1Tn6YeQFURREivJtjvLdVKu",
  "key9": "u6RJ7PwCk8E8Gm4KTgar3D7KEBeEuvtb1xAvToadUKVuv7qVLDmvauoKKKbm3472fKwQ6pSVhjP8ZwZKdRqRv5r",
  "key10": "4BBHCznCUxbtqv9LcpkonzXtpoCaxEQ8GSfQACLpFb1CHWNZ2QVxXET2ob3W4EnQ6YbNDs9pEAajzFybdeYVMMqw",
  "key11": "uat1CxSfvJubN1LmKfA7MmGuG8iWCy9yUZiC5gwJ6kqeV19t2BrRB5NGAcKy1J8RMetpBffiPjC4vxW8U8Z4Gji",
  "key12": "28nK93EERHmz3tcxhwxwo7cryYRmeqy6D7k5JLfgAstmcCBfqfZTjKKpZtwVEEn45knLpbiBEJ3e7msDW7hwWrGj",
  "key13": "LfWsccKnT4fFqf12LR51mWYzgn8Ain4vvo2Q7fGoBWMqUYSCn5dUQuPTqcscSurYZZ9ivuQkGeMnZpgYp8hNA1m",
  "key14": "2oAVYBcedWw7XjVntHWn3FczwSqUmSoz7iDisgLuvHejfTJo6RFeqwp8cLX9zbK4tHaz8zg6QpX8DUfSjsLKv55T",
  "key15": "2wRHSW9je9RX3PkiPbHFYFvBe9J4WeVvf8CbzbsrystDuWjTucD3UgBF8HWPZLhKxnjvyhNU4PNrbbVr2HFD8Mhd",
  "key16": "2PN2hbLUWJDRMw9RhcMkN4mjMhe2UmsrPyZYkQseaQMfvj7QHNDCrwob3dhivDs2QvBCLPUyrzs54so6srd9QHeX",
  "key17": "ftVZBCibfPrEbmhsakjjPpYoZKuejfUSqHTMff7wECf651V3LMFd7AdsDtGDUpDwf38pqZt6ikN2irWDwYtDonQ",
  "key18": "2Ed2uh1QMTa41EUVQdc5UFooGYXZMEmBYssUZcX5Hd5eAsmwimpbgkxHv9BkhC8YMzMLrG2Wj9YhioGLFpR9LL9r",
  "key19": "2fEZNKWY2LPZvMDAJjLkiSDKWqjx7z2TFiLuKx4ui7oBv1wz3y5tEG2uBuLDJhWkvewMKCk4sT4VBNf2ZRRW9dLf",
  "key20": "2o3C5xBpsfRgLX6MW61Yo5EaTgKEvf1c2LNdjj3Yr9NoW7CmanVuNG7SxC6NedpQ9G1xZB8gFfL42MEpUh5DsB97",
  "key21": "47QTUQ23xC1s6oYP63Nvz5kz9zeCks3BjZaxQpbJpx8xyvtrD213cDdjCvGQGkfuzarxy4ieqv5ARrqK4Lg45MeW",
  "key22": "63SHsXMSkk8abvmKaKdUGdcEaLvYPMvaDtafGKvUvuYWGkdCsR7YKVvXsKKyuLAaSTPHzLZaHSAyQAE4FjtrAVoy",
  "key23": "3nyLKoLSBASMzF1y4uutchE4B7sLVoLkvgzdzBz6c6tmUhwVYmvC3TarbBwX9dmpaWi5iH3GLKzp59rPefz2aoAJ",
  "key24": "34uhoMeH5eKypCvdk1VftNDMECuanymXiQLnzS9noBbzb49iGsPrDoiQUCfEASJyq31zfMHJmheynuytPDJe2rLe",
  "key25": "2qJZcWmTXXmRPvH4HtUv3fLVjkD3bLhh3hTGSqpdb8nhZwbR892kAdifNZHr813qLq6k6CyWfhMwNeUQd2r2uCfo",
  "key26": "VGsXjxZzrU7ZC4DMmyW9JP88EFGoV5tLkAgZHMfiFTi9NmkmUZLFXafLCydMixVjtZGEaWEJtr3HMcQ25rXvmCn",
  "key27": "2QvEptJzRQz6BsckogAuF6n9bVfydLLwVhT3rrMr8nVwUSLi7DHDgnoRBpYWCpy5NFzsWdNswkDUvAKytMFWrj54",
  "key28": "2GMKTDKNazFeNueW5DiLvzLgmd2jNkr9fkSgMz4TepkRQYMH1vHiddfnssu5oF3owm2EoHJqjjfkeK4U9SeeucKh",
  "key29": "2n28ZNE6ofsA5N6AoReXAGkiZuyPS9Khs6LPzPYjAehxf9qEbHFxZjHVTChSPBRfSBsRgxe3ZdJS44LfYQ96U14S",
  "key30": "23LVzV6iBqvE467UaF8h1m4zg7ZNt3SfPU5au8bXB9hdY6k8QPb9XMuM7PkQ4BQqwmWjvkYkH5KKY73p3AuqNos3",
  "key31": "2BUJeK1XBvfv1HSJgN44pBcjzDFYADaKKkd4CMiU7xPp233aDvK1SnPrXyBCSJD7c51DZ5Ee25KXvqVt6sFpBaPS",
  "key32": "3haziEDv2XEWgJWhmTBHksVkFzgG8Q628Qhm21aDvYXogDciT7xqN2vybxVVW9ZGChtNf3hXNtAwmj9mh5snSb8u",
  "key33": "HSwsD22gThQDvsS1fTKA3srxcYTvTAaFMVHMxef8oJ6W2pNuNvGrJp8m5nJBroWx91WxeFtP2vfpsG3TnKTj2A4",
  "key34": "3vRV7m3VWK9EsG3fLCi5zConnaG7midHKeoiVJfQSi8baL4bRerY5kr7pFkX2gSCwWTXWHjcnPbE3mzYjcup2Xne",
  "key35": "3McSEyexCMSMZnnmet2pKNahxzYxscaQp8No8iFfKGjgjzQYxpkU1cxmZYA7BS9NNaBYNzMRPJ1uNb8i8HPu7U31",
  "key36": "5uWSirrzKw9th463GCZiopji67Dfp6n74BhfMzuBtK56tm3CmSbwvL53sauWftKasAsxpyG9eozMxNe2W72FivMz",
  "key37": "55q4CejWEaPhv12i78AekpASMJvzKqcgSAhyFUiFN9B49dEVzSsHJmZLbh7ghkqKpdH38z7AY1P3AKgb7c3TC4D6",
  "key38": "2VwFG8UgfUwpUdDXqaW2h6hGiKberETBJKmLeh2QDBWeUzUvG75iyp7Ur1qW1wysZKg4yG9K7Yhd3hpBZYot7r4A",
  "key39": "y9kCAc6cVhSkSWo52UoPviMNeuKb7KNH6DsBFnJARMM5LxuQ2KqQ4WHvCPjZU9ts7xBuPCCCcYFMuVi4X4sADZC"
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
