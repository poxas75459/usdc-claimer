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
    "4JUjUKrcayCopctMZpsMKBaaoTr17dZQ6KXVwzuSwSsYg6RLwuua8GDQk8xe7bXvHqVSspyBo3cG78Ji2mpJfcLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tu2MDDoQ7b6P83m4F47cpBiCXvcaKA637HvvmFs7ufAXJv7fNLzHvvcXT4BWEUZfgy386FnVUom7ENBuVpKAbGH",
  "key1": "CCqUkMrupDBT8jjrw3PZjXQJondFDE888cRFawdMJMEXueZTUm2VdzE2SLnDchvHroP3VrjTViKa2sjQijpmsBy",
  "key2": "2ySPE2Y8PFjKwnX7EFC9TGBNDXsk4UDwiTKCf5qRHDxfE92G2HmKaueiCHG4wE4RkeNRg7edG9DwbQ4soUM4Crpm",
  "key3": "3XTvwBMKjjxTtbBFe4g9pri3skFTZA89AiNZcUmJujPb8rKLtp6He725yLqKuUXUQ8mrZ2LYDFkPSECtiRBj3dsa",
  "key4": "5ZbsXctnWzoNuMGcJ8hJZk9CJ7QrmVNGCC84NggboHe2qsFEHoyR93fqmJy6n8wuaynoUHa2WbRd4gzw3EBgC3Q9",
  "key5": "2A3VMnJgiJpoptAcYALAyNJScBf2YmFtzcweuJUxawHiTFuh8LpBDScD8zUpEDWQyySFKqY2FW9XZ71s4undr3DC",
  "key6": "4RhbQ9wH6v7snWZS5c4cavLq3saqg9tVMAFuRSZ9Z4jsVgjX1eHE86BnCGevrdUfMmSUs32xW76kjs5pjmnfHjuq",
  "key7": "3r9tkYMziyGGDzfogoSD54h83sTj6P9RZwupkQ9oYeWM3BPSn1hUnekC7HusMWuHkQwPBiAhLeyTFRVLFTJki2Xg",
  "key8": "47MPui3hxb3i3m1YKo9g4aiAhEUsGNzjppAwbLKn12F9vZctmj3i3thMJDQVnZij9ugPUtrQ4ZmUZxxkX8vNikmf",
  "key9": "TWBLJZjKwWiLcnHJnJQ2e8B6uGrBWL21aeufLVxNQDHqsMC8fK3WrnMYebiywg5prkyk4YMv18KGcfE5V7t72zB",
  "key10": "5ZcMj15oYxSQMWWGoj2j59Ew38WM5XD2ZHuR1e4ctZJzQz6btqooX3vDoZYht7R6D2zjfRqzL3Ux5DwS2YPXjt7D",
  "key11": "3F65j45MBbpFbunuRrxzaFYSXb3MePhbUch7fCm95LQQxpmAHYpJ8Pbpoj57jsfKt93iWHWMnGpqDEUL7veHC3s1",
  "key12": "oLhkKmsVYZSEKEpVX4tGNTwspTeEVYx8Tqwoq5jMYieSECsZ7mjvK7gqsccyy7WN1G38GTWteH3r58h1mC8HtRT",
  "key13": "2fCdrVjWhbfC37nWyNpw9ngYMqcUTvFvdHAvTsv7j5Fp1SMSRYyzP6w9VwXqfERkH3iQ6ufFSmu9yhG9efN7TTeQ",
  "key14": "2QaFFNe9JKcPkMdPmGEPFFHssYmzyNAi7zud3Ey61je2uvoav8BWHfxUYifzXkGF7bnahQ4f6kecDRTWcJ3i4djK",
  "key15": "5kXoeAAcJhU4z7ztmxZKmQJgSjFGbSNNbZheGjVjcxKcEwkFiSGUS6wJ2Ey6kEZQ5pNLA3dr2oX5q4dp4Si39mgQ",
  "key16": "2Hi8FpKteG8RjwGmZUy8NDjKZTwu65VujWnZ8GnvapWjM6Zv25gDJHq1VyZ86DLygdN76BwrkcLWBsuzLDmYfJrq",
  "key17": "28h1i3njpVwBSS2iRonxtzvus5gYdirBaet5MCM8sYmtyyRQaKaJrmpLDfWFg5Gg5eZogUiKWv4pPNhi4Q2gscMW",
  "key18": "2RnEmm5F7vXLuuAQtDfLPezoMqY3N1pfEFeb6B1yDe2dRu63nBgNvKW43Fu4rdABXXtK2ntWwkBCgiMdHv4Yu8MS",
  "key19": "54M9vSmcvUjDoZLuDeeoCaYYLnSQJUqP8CZkVan8jcZtpJFuz1o5mQdWvtTNmrnBtpSJgbfUFWRVL2iUeEC3Rt7k",
  "key20": "3xrB7JsEAVCjDSH1EEqQLAcjDUgmjudA1cbrGx6TKF6ButTrvxxgJQ1GGTCEVUTbDnJKj31fXmpdnSfZj2fyW5BL",
  "key21": "2Q38AMSHj9Av3E5GQ3qxzY36J1Rr3ua8k5VdgBycFBFoMbUGJZfPKomivMT6wPK6m7sqTB7YGVwXTyreDPmYc3SL",
  "key22": "U44k7psEASxdQhqvxizmZKxMNUkdN3QHNQvt2fs3aVqAhZUsqgTsCfPoFhgqvzkPLoXNcB98pLPaRP9TKY7xfae",
  "key23": "2VY7z32YrHQJ7Jn6rFonjG2FXiDxEvUVpMLYpgg5mCToMrpojMUbqKEj84G2hc7t8LKHpq8gWXRemJyqiErnK5XT",
  "key24": "5aZkLG93j8QK2Vmev7GPZVPwcbzb7hJUPEvbYL6G5QW1raFDpTF2vLLwLjnUieESnN3YP4SaLoJC24BF2adXPZzg",
  "key25": "6GYupeXiVRRq1hnAzXTTYRE6GTGd9MkYASxmGgRZ6SNFUSZ9mZgWUz8kjz12Qa9BfQmseBDtFCrRyT8gZw3AkYG",
  "key26": "4RsWsF9jnW4uvRFoY1RWQeA4pr1CLBqdfQaqrozmn4DQ8f4d1mmsMzRogHwnEzhKY2Dz5jB6FJYPKiJQvwjWhjBS",
  "key27": "WHH8DYbfzMKUD12fgQfrJdyHBruSVdCbgYKokeA7eqM5SGof82BBy7KzmKTWdHU96mvxXVRqpRdvHxbiDba9Y6L",
  "key28": "2mmARsYhRwKDLUhww7oARVvmbpjeoox5kMSQqocrADe4Ln1nYbdDd5x9NwwK5xrsK7F5ZckjaSsvWYM8XGcJoCJi",
  "key29": "5a3zZDEe6SB8gaGkjnv6KJKFvkY3myEYvrTtvS3qf3JbXfRtb3AwUUKS4x42N3K911nBWZSh28A7Qh6AMhtcTXwF",
  "key30": "45rTGNAdvncPtRtXHpZWRuXyiJXNaPZjDdeoAPxHdzPUsouDWm2yfMx2FViUh2cfAi3YqF3ghfCGvUusbNbhEhGg",
  "key31": "5gbek24Y1rYRcFgXpe7d6b8KejZktrMDtt5aThYSjGsChFAX7PNvrmSU2AfPi4bpTaUoRjGmDY1JXW7bmFqiwhQZ",
  "key32": "2KxVwhiTnPuAJiYYdmP93wzbcRpg3dh6VVtasAxozq4nemmnwfXhHziWGZgYY1Y3h8PHosM9gfVDPiv8vaj2kyag",
  "key33": "36uBy15Hd4Ps3h4GUZkGkfa12T9WhF48EhU6SsYFiVsxJVtZ3GxoSbnBaEwFeXb42t8n5R2RC4dUpivpa3UJ2Xhw",
  "key34": "3e8z2rSeLXg4o1KiGpUGcF6ebJMLgh1r9ssykAMvC4bJjThchVSvgF9E9ZuDodyQknhrXftEMGamcovdt6yAhsK7",
  "key35": "bsCWdd5M9BsntvxUYqamPppTyZwEquBK1SL499LtM7zxirkiBBs5HLGMhgKcAKNXzaXbb7GMkNrMdvFvj3dFWqt",
  "key36": "3xWm11img6HDc6tY8ZimT75UoRojpw8bSEAvvZVfFbP6E6Vb5P9x3y4wirg6mL2DrBhYGowR2p8R4Yjpdw9maAyb",
  "key37": "3u23KnfgVF1zfyFqpqvktqXzcish1h7Ke24C2zYngFeThHbheWNjosLdsc6ae5TsJHMsz5oRfuxW3DWXp54WnehA",
  "key38": "DC67EHeSmEPK8GJCCC3preRsQtB1Ga9KjqrCoh2NEKQUkpR7C1kzwDhzk1voUR1bBD4gd1ozF3s1FAvKLStrjPM",
  "key39": "2vVRVEvDKtL7Nv797tBpDTLqzy2HLmLKGMCbVCc4JrHPnvV5RFm5wwEzTpssfNh8AUWgD8bKxN47LTRZGT9CjSBb",
  "key40": "26KkrpMrQFNNQAWXgFYqozhBCzrxL1cw7Rs6JjCXXvh9qEMUfMMZZoE6TDbfsn86s9nk6N59js9NMZVYDnANN2aF",
  "key41": "uSUuciLXcM1rZ6B4jpHhPxDt8NnEqobucXGrcEjwfufNZYrWwXWkixfudq28uyH8guuLhpEkFDbenEJz3UzVsBf"
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
