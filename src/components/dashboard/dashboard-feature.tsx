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
    "22v9VDHKGey5t4djXLfHnuJardJvwLg6bUuFehiN5Yhsii33fSzc21SwBCqsLC9JPfv2Nud6VReUsqeoggATvmXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyspQZxvKgUCuUSTPKSneLd8mP85u9FqZ8A1C8pCUBrpJkY5sp5ecVYQVu6X5PUVs7FWZRChN8tVvYMUohMJ97G",
  "key1": "WeN3LG7L9emCDZGXgm4ph5Ba5fyzcJrCwKnRJ3TV6jcs9cJojnVpoNcQZwUt4UqzuQ92KTpE8cFLxXJja3ebQTj",
  "key2": "3B6bTR9Q6bfeuB994y6vWMmMoa6Z11a9Ro7wKZHvQhRRhR1CwykAvyewG9tenPTerWsT4imvq2mYSC5QrekwsrmH",
  "key3": "3ML3dEym4TT1W1MANYic8JvaNHAasd18zMsRpRKw9UXz8y9qnzExnMhBrtQPWkbq7uE7oQxdiFPWUkhzgu5CNHtM",
  "key4": "3u99qkXCTWoLz14kbuWLnGHUts78usjPGW14BBqV1HSGoUWP6ytrenoSLMgbHqGaqjcChCatHg9H8K5RG7LTQozz",
  "key5": "4EfC4oZhyGBZTtJ34ML7vHgYG2BpcNigsebLAHgynrpFJ9eaxA7bGmzW8R6j4LvDDeo6nwUfpjiVamxEdzBdc69",
  "key6": "4FAnYftHPMRWdnJzNgUFjZyXkT8NkUx2MCzoXRujVj7snTrvuRsZBH8Jxyikaax8cuquiTBuH7yZw7rbqAuwndw",
  "key7": "66qb17m7fqvTvuQ2jaV7i3ZoEqjqsyGGdeKvXu5pjedndqL8WUhW16JWvVH7ZXBZHR3h8A1Nn4rUmxSR7sdUv3pb",
  "key8": "nsVfJvECaWRyZ5NxhZcfopKtJYiwWBSyD2MsqeJRrZXHTHDAPxHsvNd3sU7jdue9jWKJiGSJdVZFnjpdoZsrezh",
  "key9": "4KWHq8rN1FC1bSv2P2g7V3HNc5ZyNdnHj8jzpqr2A5GZpUcnHCstD2tTs3fxY1icAYM9wk6Wrp658tmYwtKHWJX2",
  "key10": "12JgGuCnWhui4sf9rhyt84NeXtwUTTY9Fuyo7JEVq1qynrVrPRCTKbNSakV1XJRbfhx77NvJPT33QTcUVjgGEyt",
  "key11": "4dftJuHQHUVwa4JjQnmQt14qDNEYTBrfXrvbFqcoBbnymvhMPtpHp5oJVp8ZHhdSrnjdi2hptFqDPmDqnu2u6fXm",
  "key12": "nfMQWERQsY5gb8SRFde3kzM9EQ7ZpjLvoCUfc6G8XEam1RWzaCwiMYneZzgzkrfcYzhfJhR3bVfGt5XjoA2YzYt",
  "key13": "3rdQEd9jMgiRhog8Gn3vbDBKA2x7ELjqFCzcTuCJb9S1ostCQ3zrXrFWB1hhkZSoz2aW3ERhQw1fqJwjAx1kSKgj",
  "key14": "3YLSQQ3PccLYyp7vj9JMvj2uAKkB4RvpZ52d8yq9MNwcTkxpX5DYyx49kYtiA4Mpc7EH9WuncEa4gvjUGJZvUsRR",
  "key15": "67kCfMCTF9WG8qAamb1NERfRCfjRTAPxGxsqMzQ3wtEEf5h2mXqz5XxTVMuFKbjdMJsabvGLs7DjL3egpisWM8Y1",
  "key16": "2QMLNswyfrSNgHF6K6Fhwkia7QNoLbeGGjYucPh3B8JbaLAnyxJUzTnMNLXKz9RsCSf5koKxJWn6E8S7rtygNYAJ",
  "key17": "43XyicRioj4EfV8KA7sSVJyVp5HrhtPXf4Jj3fJriFeqxn6acKj5DZzRy9fro9WaYRNkfZVsDiX2U9TvDHBMRr86",
  "key18": "5PdMAVvkmicdfLkuHK868qZfEEpy1fPsWaDHvYWe3phimHW1rc4MyRExELGdRKbDmUserbt5bTKg9futCLLmmCQj",
  "key19": "43Zmqq7j2d2a3wpz8fNj2Hp2wuu2tMhKzX4Ka2GXWQUPiedP5avNk6vRmZxEqGWiaX5dG2VHwSwXBh4C17GWKSaJ",
  "key20": "3FXtif9EuQCrHuJ4qj3sSWdT4Hh9JUfUtWJBjpwwpK63PycFrSTVkzwF9ThQfXe7qPGrufFccp22xVKLzVycGjDr",
  "key21": "3SRYL5Uw4rwA6NHaHMsXF1VpnhNyMLPuuexhoufXfobkWvWu6DH4J4v1AqcVqpm11j6MNQZSSXVnmacvxEZj17Go",
  "key22": "gH2zkc6YS5Z98ek3kMM8aqb39gD2cV3N8eYWVbQ9c5dq6nAqo6FPnjkPnbq5JZqKZmHRupLMZymRT6UoxNER55N",
  "key23": "bjfbc1pqTECp73TGr1pXicGMuW2ZHuapQkJgh2EvyhFRnxAZHYVQh3jWQ6HENss1tWoepnYAc9NmNc7qdkqru8a",
  "key24": "3NTGbMmTzyhP4XJzcHuzqvJeyy2DkcbyQDT621UekzxMYgpinFgV72GeR3G5fTLqRszFV2oJjuBeRt9BFRnWmwkx",
  "key25": "2a1QMkxFhPrudPZMsSPSWn562zfdF12YCwCuxEK2ARmPiX4Zq5c8bQE5xXNy2qjWyRTJesQTMT3jd5TNocbsEjdw",
  "key26": "2fuhtVk58iUjfyMQQvMjaarh8SwuHyn7waYXboSha9g6xcotE72edYdwB9NJKgxEKLKbaSRbcjqksZB7r8WwZNu1",
  "key27": "2J7epRq3T7SMmvAk2bcCQCMEYLsFgN6iriy8411ubXX66862LGj314d8TLVtGA1mL53U3ACJZRdoAatjHoSpHz9N",
  "key28": "59M3quXja9aRJbEuHFbe1fQ4n8WWJxz8HNvYY4CZjVSVQnwEjqnENQqD33LJS441XqabWRg6rvtt6dpwgt11ufJo",
  "key29": "zfShA3U9Vti9pGT6YrnqDx66E8PjypPmrrhtyPkP7xGYdMuKrVdEYAEn88UrvY2i7hf1UxAJtnjZProft6Q5Xzo",
  "key30": "4QVrcVRjQfW6tUMHvtovaHf75UY7qVUadg8haKNHJv6uU8scfLJPDKUhCHyaqUfwPmad1fS5aJSXu6YqqEzUWJxW",
  "key31": "sGJbKg3NCDUyARQmqXFHzVVSVCCHhfyyNjYm1DVZhtkBRDkKmpe4KAy46jFwwd7V2Sb8vT7oeTNGjvjnddMP9sP",
  "key32": "4HhVRmjJMca9p2fcR2Ct6Z2dAgbz6dXBkGVvzFkqTeXiNDmNRDx7CQKNJHZQZKE961L7nZfj1V6Zt2CxFiGexueM",
  "key33": "3NDP4iwvu98HKiJ8eQAEuBmRDkpJATDPmE1hDhSjvSmRYy9hhEWEXqMvgcU34mvVpnbC9rgbGptfihzVaQjaYmmJ",
  "key34": "4LqWZ3cCoFNaMQZCDo1n94FW9VcgxoyfxL9nULutvzZYtVrjgub6TgnwBxDFjnnhv29coT98EjN9P7Ua2SukzqJm",
  "key35": "3bH2UMQVC1GwZ1vhKsNUm32xmX26nFjm1fYdM5HKahmcwt78QBX9JwWpR4BEWNNjk5apMYrS92mLiPXCmgnXNbiG",
  "key36": "3ZLCtvhq8axGeo1x4GqpxvoGehAvD3PH1bqz9bT9Ms9ThHKUVkg3HqvjnWFN4VtUyKL31oNVAbooPd13teHAUExC",
  "key37": "3CsYFCLqAURBjaDrVYRxPwwthimCpLqRbo9XNaD9Q6QUZwvfuncX9H9KJ4qRffnAwAji82fX2v7j3zYkQ7SHod1d",
  "key38": "3gth1qeiaEkLe8TWPNWxUDZ8p3rbJdzVzfGvp3uejgBRd3QktarPCHeoM4HxPavm6tKBFdQBWwgR9gXuPwiKQmNi",
  "key39": "3sV33QnnSBc7VbM5cwooH3a83BYk7tPSNjqGsNKEkYZchey4nECuVVGmyj9bV5dSQzVb6dhFYT9S38hoHoWUDhu2",
  "key40": "43woLr7rsHqvcDeWutnwpQwF3prmRBDg8MH2YzYQTnXzr1BDMMYGtLFXR1b6BhTzzutd1aUi4qby1XZ6dfysAc2A",
  "key41": "3ZAYRuTJuh3N8t2quCZjdJnJuLYkE6rGSGN6ieu2tjQaZzmkG3vUQrUai578ZufsvSQF8s6XjntwHYkGhCUVZxvC",
  "key42": "2DKw3jcb7HwmoZQVGpVJoXW8H2N9dWuQNnUNTUptnS2badCzcDSAUYWLTJ4txcZdSAaNZLmSEKUpUBVxyALTc6N3",
  "key43": "46n558AWX3EnWRDsVC5ktSjjqUHAWgVx3YaXQCWq7Pe5bzo7KqrA23vA3tryeQ6sQ95LPJcPECk15wJpW1ZVd8As",
  "key44": "3PCLJPPrMSx7HXD4CgTGQFPSsdD8UhgA3A2HoKo52dm2Mt9cKJA7nwBCujJKe9qN8XyZ8AsJwjH4H8ZA2bUcncdv",
  "key45": "3XZnGaUxhopaVMaJv3LDaATtwVZfNmkw4WKs6gQJEK23ZUCGge7xEzEboACd9ET2HMMfaCxxFhAJDcWmfQzdFDk2"
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
