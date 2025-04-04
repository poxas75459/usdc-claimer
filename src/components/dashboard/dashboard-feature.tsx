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
    "3tqapMgvAupsDt1YwAbyZDeKCnoyBbKksc2423o7i7Z86uSe1mZB3YFRFmNdMNyB32LwtPeTSs6xnyaomtYXAuto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXuT5FbkbkFFz6Wj5b3RzdxFKW1S1AGp9BjzDWhXFqoYuhW49x1m2nrG3cF4o12LFhWXy58DeWVeTJjVienhmK4",
  "key1": "3YPE4fjXyjAhAwWraWfJKu3Nk4ovGGChcrv8b8UnvF938nKgwPzSb9qVqW5moMfW2egSPfCpWCV41stePRhDLWXZ",
  "key2": "52jnUTftCs95cF3ugFErUfBq1eFmfs5ftrcgLTox8RnzBxMY9VcjR33sb2QqgsTYnLLRqkzbiuESoXb1xeHEhpXw",
  "key3": "5Mcy8VnEPrRn3mDvdx1MiPwGJTQQZ92kaEw4FYAjAt66BbHBSz9TXfo7PZsYvpuJKoJBGZhEWMXMYninxbbDWbYR",
  "key4": "5sJndH9uGsXvg1fWE3cfh4f3SqtNorpgwePViy2NHm1JLmrLzxcHE1z5eF38Cx7VH8Gf7wY5EneAT9ky4N63X4jg",
  "key5": "2jitouAj4K84Etu7Zt9JEsvN5soiDzmPUkZahK4RoiYhjrQPPZQLLZ4itUcbEckRh8smATo9So3jsw1TiFobzt9j",
  "key6": "4dSJ7wBweYWevpzS1KP4sbDqrC18miVGcPtkbJMyKYiKAV67hu3XzZYuRvJaoVMJXuT8bZ6XSCFxV7jGpkS5GyGA",
  "key7": "25hZiSiJ19fhb2yFQfQXTt8ZzDB1LKpbQGAUoYcaAxCXNp7jdVLYiWbKpWNqmbn5vQMSa6XidXvovX44jJrQTsKP",
  "key8": "2Z8MA65Z1WxbuexPy9myijPtXqKy66S9LKr6HWVTWLsk6Up2HUCPg6Tnp3p7Q2mzPcaadJH4d44Q9ue4ynYQKc6y",
  "key9": "3JXStnEKqYdjdzVVz6w4jz1CCAkW9qrTg1Zpi23gL9LaD42n6PS9aEtd6tdhzpPyTaR5UNLvLm5mY571Pi5Uk4ja",
  "key10": "3i2AXyzYTPTVdVsyVgecDscHX9p8YtcnxFB56sxHkMrtDh7UCcE39efZrgy94vjeGcj7z2NkT1LymRweHgZJEY6Y",
  "key11": "4ULKDAep4swkcPP9NaTJfwPQn6Ab3J3VreaWhnft9AGY1SKULouez6BS3nLgGpQM1KFNDYExjSjdDEUg8bNKSwMH",
  "key12": "2wq1P6fZKvLTXdwwbr5sqZcwpkHC5YV8EqXMof9356dSpGzygPMYou3Je5aJ823QCxiiXgcYzqAc7pqrze1W7Z2X",
  "key13": "4jjph1PmusjfqQZgbzWN6z45fwMXwYY8hvTWPyUi5TVNhYUN2cqympa9SG178BaF2UrrfCosHQcsEKjKKB74MgGW",
  "key14": "2xmuN3Z1Gxkfax67TqNfsC9TYVzssES5T2D8bHMNg8gizbqBu2tzdKraWAK2JxVdzbkDwYiLbBB9VhFZjgf2a852",
  "key15": "5wzB16qAg1kAVY5sTMsjoyEYv5LMdTmPLAjcDog2XpvMuonGE5oEN3sBbXk97xC3QwRtiZtPtwUMFzjGCyrugb2G",
  "key16": "4tpdhcJjuBAHa3Srsv9harGUNMKpkP6o17yHdNEKNxVe27wvmDXem3mz9EN8KfvydskNAXJ2x4S4wC8AAEDe4rEE",
  "key17": "2scUXVt4JHrPkJLK8HDEtgJtEHga4R3fBbfXJkpBhWrCD5NyT7SthrWEPra6zkUTWW3NgJghKdjtM9kq5BQfXVbG",
  "key18": "whjMRmXtHP8RD812Fiu7mFCdYC62Q1kSJw8qEmPBuuHtFaFBERmtEF7jpKhKR2tbnq5xvTShPPhYhHEGazHaUzs",
  "key19": "4jiSKDfiwg6pkUug51ssMVFADHfKSYpj2bpnw5MJF9jgzwrrLouKFLd33gHsNn1QyNg7abQbkgD4w2zFgvTUKhZ9",
  "key20": "5VgCsujb76HmAh2bxpi4aDWbqHLkeb1CrXFRtkz3hkW1ix246TJTqcKQ2pvi8LFre1WzFUYoySi6Y76MYPn7teqv",
  "key21": "3QmdTVZmnX1y5qyQfcT25ohT8Kg477URqEUX5zmxZ5psQBshALHfANsjA8XuT49Di6ubqLBEHH9i4Caf1fiJH24R",
  "key22": "5dA3UFBD3gLzUtpYJbxpP7mcVQMBhnXUuWWL4jLRpKFCxLdcHwf9QE2PJZogJPEk3sVk5JujyDDRD2ruSC34G8Nx",
  "key23": "2z1YpumXbyKkxK54iFbgYyeHexWoG2sw32HUkGeg28H8cXWjdjX5qLDf3w1d9T5phPXvg2jA6PQ28ndr8e8jtjSt",
  "key24": "5XKMd8vbSuwr8EM1zaUEhvzJr7HywX2riK3FVXkdRC4DK3xuFkLksCf9MrBmsZeoftqo3YZT3tPJXTzeVu1iA39w",
  "key25": "42oeqtQcp4fYdDTza7QSJUcToC4Rv9LTKbXQoejRFLT1DLoX8oWV4MSX8a3rXMqE6Ve7Hur15rd9r7UAMi9tVPgC",
  "key26": "27yn3897vyivNqpyGthkMPNg1Ed2TYxwUxCWHfrGtdwFLK7hARnDYFXmCY4qgGuakg3xtceaTiySwKgnLC1Kza8p",
  "key27": "58NvC5spcjta8sWEZftE9Q3ZhS5W3xZTDzf8PaknkzwDzBXVb1hxFNy44dLfZnuZuZH6CQmnJMkt6my22Rdw9TYC",
  "key28": "UnxKih9uCUvSfWWFFwwWCCjEo7hEWJzxzKSkcRjdGbVoQYBz338zdsUi2HYJRy3mPyMwpunj5B4e7c4kExobAd3",
  "key29": "5X39mQyag2BGTCGyGavtpLpc42y4p3eNwX4GdNtH5Ykc5hdZPhHV3e5NXgqC9GjT5BwTApWFEawFLjux57HzRfG5",
  "key30": "34YaDaGvddg9kMNAKeGiAC6gPAb4xZqpqvVSHvwexLFQQ2NHgW3Hqv3JMNQujHe97VtTTwRpBgoNGLaypqH2pjia",
  "key31": "4nc1PbQGi1Da8q4GPShFhXkw5xCdhAa2Gu4XC9CJvDwbFGitSvyqoR4kDgcUX72xV8Y2i7iaMFnbEsCBxnK3mqJG",
  "key32": "2WzQwG9TbnJPwtNgbLQBN9AAA2v9Gew3w2NExQhgWEeFC6VQsK4X1DMZbyLYMxpQCDzK7QJSHpjSChy27Tzoy3cC",
  "key33": "2WHwZBqE6KD8a1PMPESE6WPKwsbbh8DZvu2EXvgJqSKxQGBcZ4vzxwZz1vswALbBq21APNHBHZLwhGt2xCxNJEad",
  "key34": "2khrQ26Zkj17sFKajdbJyywSH9SiS5cAss7AW9LAx9Z5cFPAUafceRKSsgcEK5sVVqmqrX2cGboonyDw8MpEC6bm",
  "key35": "2bdxfJBvenzmbMKrssscH4HkVbmkEE2tXoj3z9bxs6ccwunH8Fm4HVdyzzt1s4R3WhP7LeJo1EYwXqDeU78PrVpB",
  "key36": "5ZanS2hexnqyQBQ97uQSKG8RgGXcXdb2wsSuoWMNJ6GSPvLVrm8Apd69m55F5oDxv2rcywPZqpyan2peLLGsjX3c",
  "key37": "2xkk3ra1ZWpeD6KDrsgsNH7upXALiDjFx2kt9hCr6htsZ49V9XV6doMBaXUpUv9mhQMahgg7NizSx7CmPeKfCxad",
  "key38": "52Ev8Uzb1u8gFwfuKjVHLqrumWNrLfHvgckPNdJjdjewLvt4goThgdMEBggQZagoGaix2dChD5qNdhgYgvCLdHf8",
  "key39": "3vzvUGPtJ86FJMNSvZcky7gwrV5AjjPRyW4mVFkQ5uBv6xByksFuAQBRxgADQY1fbrmm9TGyN12JmVEbVvxJyF1J",
  "key40": "2QDVh9e7nuYewUjR4b9am6QpYVrPD5wSz1jQG8FjEu64QZbmsqsCnVFgrKhgcRnLA6A9tMZsM2no2H3dic3D1R85",
  "key41": "4F7CuXdU5yW9vrAhQBQbMsz7tEfYkzrtn4U8RuJ2pUo1pRBbd91Svo4h6jofJPi9ixWhTmfhKJaVhrYCDsjDDLV2",
  "key42": "5abqo68ii56obJd1uziPhWJKyGgzdqZrGzjKDbAkR2pFzLEt3tHAcSzp7Vxjq5H6Hxn7FRu9JNyUKTGTDa4byogs"
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
