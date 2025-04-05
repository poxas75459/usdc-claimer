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
    "44LAuM63ZQKZJM553BCzgBnihBAYRbUnJHB9sb4yaTP4EEKQATEvMmRJG34C2LWEdRZ9yMFkzb2jWji9gVVs4fdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HxAaYhSc7RgBWCA2GF6ArW7TCxe9vcEcj7rv9bfpUc3ueFNSNehgCwaSKLmwLAHd8JK84BihfuBBpArVyXWh7jA",
  "key1": "2TKS9b1hVVQNRwx3kc4ebcH7YLYQSt4bEG7XRFRnE6xF7jfkZu9or6oePBcw9u3uRww6nRzexMC4rwbQuQguoSVh",
  "key2": "2pXmEU8dFf6WQbCR1wRmUtTfpiApJ82d9T9dMwFfX2wixVgbCEntBG3EJGHeen1KuZEvKrEpYoJkiBJEd1tNf4Do",
  "key3": "3mHygCGEAtcY87LnwPcraAmPU2bXMBCPFFQg2twBe6d39tggtwxqauZQhUvsDYCwQQEowY3xg3pYkunQnAThSUKz",
  "key4": "EjKHM2v3vX2nnfwU5QbJgzUcmY963u66kSJ5jwcH8Hgij3pyyiDCegLB3q9zjTTLHrumx3trjQAw35D2BCMMbdM",
  "key5": "5J2rj7B9s1NW5QRfFkg1WxBn2PXcvsZMp8rr6Ars1ZZfwSc74A4ByBQEob1BTaxhSbnb4xfETCGVD4a8FwikxdEw",
  "key6": "38Dsbp52WnTyB6o5TYjyuAwBpVzRfkybiT9Lz5DGGkqCfTicczPvANJ4qWLgFF8k8bx9dRG6nAh4qqLtjPyf9XPZ",
  "key7": "4NB2zD4CGrMVGwJeTAWi4woVwLSNimRpjxdQ4W3wyVeBdE1ZE7DG5pezfKC7eDUYXAMzEDUowwNNQVaFBLbEoWwz",
  "key8": "4Yt8WJCWqArs7EJj3Mc9YncqRiBGQiebBcggLGdny4SJwHCx1J3J7jttpwJ5CcnjrsPhUvLwpekaZvPXEFGRCYLf",
  "key9": "tV5DEuz6jXGVVyqnztBiCtGV5E6KYfXRC6c5RvEfi5v1P8GAMd1VFUzNnpBHEe24DsD9weje2RBvRwhGPJRzCcM",
  "key10": "2Gg2f3PUfwFuc36wyLE5Ao5bMbKZ3mquqqqnEPpodgBCRHTzgBwny9FxGDFi5FLUZBUj45GJ2CncE9VHtUiwXLcb",
  "key11": "41yrMJ4PYhLiTJoSfweFYBQ7fq2JHLySqNEmUa55KRrLaxWFgpEGTdsiC2nfMRT5QUyea2RZLyK8EYw6QhHEsLE6",
  "key12": "4upKcmv1qdV1Ty9mCnq4Fgpkuw1vurAc4etADFh8GzgMZKgrSid1mCxVM4QFEWPUNDx1oj4o7szsDkJgtYgTUq1S",
  "key13": "4hTeZE3m8DJknW6ySw6qJWK9SLq8nHuUgc7fyuxA1FZbniAL6VdUopzkArDsgtZsgUARzowLAReNuABNvCZLmBK4",
  "key14": "2ZtmGQykND6eKCKKJ5MWAEwguWt2XB9P1vKX9UnR3JwQ7KpBHEUcmyCwA3iNcdH2TGgjRn68YfwQqCyWgyUrNu5o",
  "key15": "4mNsz1eCS3L3MmQVcC6PzbX2Lx1aQyHi5RcHbHwxJ5kL28grHwYCTPf7dZDbV5s1EK4NuDDFMtpzGVFVdEJ1Ucqw",
  "key16": "5Au6cxurFWyBqJ8pb849V5NPDqFGSfSX5L5sK9jxrHXQBUMvbGg1YTWL29CuYxKRQoYgZERhywm31LnB44zBKe81",
  "key17": "2pFpK6bLd8eYfqfo4JmV6BMQjgmaytnC6Ev42akib2Eq2VDoXmUP2GKwFMASdDVfshpS9Hpg71ADaQYemZJEjkqa",
  "key18": "4XL382mgRmE4gd41V1Hm7J96j9QEN7DuunCGutff77D8SkMhDtVtE6w977gAYLccpPRgo5M1PgRFAfcWDXF1nMS9",
  "key19": "g8per1rS4gru7ZQWLt95eFvC316LymP5mBsE2e1ASas8Mq6eZ69EYKT66SUAFWUqZpetwJNrXJS857fDqbzv27H",
  "key20": "3Eu78FiGikeTPYgSPWGtt7iBWYh7sfpWHxAbJpgDYw15ofa6Yw6M5KpH3RQALbSGBVueKHW1syckkmKMQRUwUTK",
  "key21": "jtwqM6Nc4hSvCZRcARzMPC7D65AmZRnibEMZRHJQM2cNkPcuHc4xQXf6Zzq43cgsCyBxVan8PBrHUSLYTPBfFWM",
  "key22": "3b6Ra97qormfxCbbeuUBaiFsQHmrNx8nLQWKsvBsxSaKfhRF9WCzG1TvLJvqovfxuGeMqaq37p1naVjx8gpNdRaW",
  "key23": "4CkXjYxSKTnu779nJ6GuKsTDH6sUgRC6zJUoE4zYfzDMQstVA7uRuTi5nyvpZRrNhnEv5yx9g1rN3iN7KQTLu7BL",
  "key24": "5tu7VwKkXeMWpN4wWWfjyJ2qGfFcMH2bdU9s8rDTeuMwK1h3bSQkEkKXtJYyJKrjk7daWau69ENL9Xi9vKbxZJRd",
  "key25": "2wDKruSkMAoWKkj1XaKnxxrNKW5E7QZBocwXrNAu2arMzB8wHuPn3k4ioCvYP4Ew6UYSPg7Df4qgawGCBjNZswiF",
  "key26": "2BnktM6A9HabrPYmEKBTGRLSxCzL2GRSrt3U4Hgp5zJQgG1iE7QJpdQE7uXjvna8CytGEUJv12y85jwb7tMxWv31",
  "key27": "53ekUqYbo7VSgzDAigsa4tTRJBJPoUxDKzWJFt1QwQnv2CtxHVnNmBRnR9DN3DSUfqvM5nAL3FoU3cSEkm1reP95",
  "key28": "3pAvz5KAaWwcuNAV7MohHcmy7dpnHqJ4waa7CuhtyJckU7oYL8kLNSZKaJygckWTK6JMSpz2jAkChjsY9HuPvUwC",
  "key29": "39cFGqDZDYVMAjV8CfJEUKtWv68NK9nPpTQYoQ8UjhXvwcjiLTG2ULTY1JVeEktsCY8Xp3wMnHmHbZe9rizLFYn7",
  "key30": "4iT6fc9uy3NwdxaJZU99xhdZvacEq7C2NHdfpPtGFbfzM7dPJSfhof5tfLLh1h33FYVFAggVBDyLewvJk8asriAU",
  "key31": "5kys9kTN4z9PTzfbQRj4YcFifmic7CQ1Jimf7CY2eLAV5Y8X4DV6RVBoFhymHAZBjAJa7WimY8nvri8dWq2zp1Wa",
  "key32": "4aYXVSPm73oksZ1i8XTtLwkG64nV7KAATem4PKb3AQV7zFyU353hzSAnisZ9Azi2HXd722eLXfBToYCX8FNGthD4",
  "key33": "2Q5EQE9uo9KLGGiet2bpJZf67HDC2Foa1iQpkupxgGP3Q1kmUtx1PSPBwMmbeAq8Wt1MynX8oYWk1Ddziay23821",
  "key34": "4DPUYJEBerPpTtqJehEK3KTx7Q5upiQ7eKRKZHaMNc78CGmgyqyU8Tc6KheeZ4KCwZoxiJD6diix6vWDMiXP4rAe",
  "key35": "3cbxsdKP2f2iLru7nyeVffbvd8VNLWu7HPJ7f5v4Y8YGavQxZbjmeePPXQe15tYipqwhCGC85zJvhm848FWqbc6g",
  "key36": "4jNRwngCGmnQxaaEesjoe6CNcrJWUnxX9hTWNEn3hoqn74mcEie86odfJPzqKzgvZZonBxxBEAh7WzZpwBkobL6k",
  "key37": "3RN6aKCgUMBrhTnVGugofaYfQvAknksQ8Hskii21613YsfZEaovUouqXD8dTgRSuvLeFbXvSe5bA7QZFn6oEtt1q",
  "key38": "cuyBvyWNJ3PSsWagN6rzM9uBndLkutfzq58zDnMcYXxEt8bfCF83wfibMMBJ3MY1YFNbTdxymZNVqzUbKHoFNZr",
  "key39": "2pEPhBX89EGkbz5Xs51bSmHtKF9HwybHdJkaZHvuFDJMxQyKoV5jshvB8K9YCGv3T1agrNn5UkzoWNTn2cy7qLaX",
  "key40": "5MDP6Zz8iWUruAoR7eovvm1WdjXKEnvp1u895q8pZpuJU6tC5B3Yn4mfLrrxipzwhEyUFjbPhDXMX6dp6KRQHPc8",
  "key41": "2mm1zrzaMiFQyVRF7fCBYfMthUKbbsjKtmG1DWvQP5sRa8fwEtkb2FzkRhkjJiS9t4sNGJceEiDC22kLHAq5MStj",
  "key42": "3Cx8jCDhWRJyVXhBqyNP3CX686yYpnwvKAp2LjVZrdEY9D4cJh6xzFYZyGrAQD5u6L9z91RxMoELGNmnvCmJXuoQ",
  "key43": "3iqeBNWBf1yg3eSGRwcL3UfTXmYcQmJF48jnmHDQu7EJfkS8M7PVsuysajdusLS4F68JZgRZRnGZotv1MF8Wc4bq",
  "key44": "467cJemjwsxkv2ho5eqUnQ9GocsiZ4fUSNncNoaBLmW7F44Qy8w2Ho5tJUdwMnZQQdmyzKm5SJemDKZHid2n3HiY",
  "key45": "4GiCV9sEbuoywSPKW3g7Q8PJnnNnb8H8jTv2cQvBHAh7CrqkNQCzKK2x9h6zcjN9c8J1bsiXjQHqkVh5zbu9CGYL",
  "key46": "3owbAfsoukpnBbUBvEJbbpy8Y5j9jiaoRQyPPGPuzgvwEohBwo5RUupr2Z6iJ4RQzR8q4kjgkFstez5uzHKv2pZV",
  "key47": "5LWa4jYPnFpFynAVEuM3xwAWthKhECsX2jyeAB25khpHrtsHNAXKKrUJB7v32X3Ref1whyExb8eNXow1UPgfhqLp"
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
