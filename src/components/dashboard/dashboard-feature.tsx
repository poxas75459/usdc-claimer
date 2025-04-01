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
    "R4Qn9a3kSWfX4mJt9ru1Ydi6STVXdLvDMeeuKik1i9J65i1GUEQT8qhDBwPBz3ppeBHho3UZzBmpxXnJn7BWaoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyVzbR9uiJ3893bzzfL2uSZs2RJoKo8S5JvDawpykwBUYscxLGe5n9HNBTEsjVAGi9jZc4optP2c1rGM3H2JH9i",
  "key1": "3rqp8647dctJ31BwmLoFeHhCMEg5V1GpF7rngcpsBtujPVL9ggbGaLNCc1ccqMS4dRxLkQSXkTZ9zzSnyvPLyAGC",
  "key2": "LFr3ZvxKjr7b8DarKu674y7xH1nixmkwGDYXMGCtZFnw3MQjUKxvToNAwpWZUwXq9V1iFRyb2RMVsqHoNuhoYHr",
  "key3": "4EwwLUe6cB5Qx1s1g9ZWDL4yx7qp3DgRUwMyQy722jBjvNhoDdaosNzgKKCLKpZ8DnMVyHVRF69BbTeVyBCXyhvK",
  "key4": "XXTGXm38Lx64czvhxTQFFVk4XtSUSQvohP16SY5ifYgoi4w1bpQuaAeEbdDFWz6UTrU2Xo7m5Ny4qFfR8nEohQp",
  "key5": "44ymvCeK83jnGQzU1sDbTE5dhFbucFEDSMk7VaKgbJRNJiNCz4EQQkVHVjP6f4qSvYyGQ2JCMgdtGUcGJjAfpk8M",
  "key6": "nDmWS4Z87uckyzVwXRiE2N2W9U5gD13ARfCv9V3WMa1QzpxxyeyEA5kxqRErufqeNvRK8w1vdTfjUxXM7VST8ar",
  "key7": "3LzbAxKSy8Cei2rhJYf9HaJHwnjyB8eSytnT4vvzVbymcYieKKPbPfXL4BESgXJDTHSSVLiiw986Dinuyqi8CUvA",
  "key8": "66HbNLoGDCCstKdrDXuzHH36NnjVdbNWDotHT2spBJdfhSuTUUXxiVvapo8h1vPDyaR8DEr1MRFUg34WiLsU8boX",
  "key9": "2WfRchZxwnBbU3VErH1c8HhbZkEBTGU15NYeEbjRso6vRj1mhdDniuaxmNYDELifucBpcN5FZw6pRdgPmYGRhCxG",
  "key10": "wBvL31AKYhPRaaZiuzzTxLJhrVC3pqd46zb8WwNuV5WLefWEm2zwxyNetXixzKeAu9ABG6XEyTy9H1Adyh9JJBB",
  "key11": "2ta7Vc6uGzptE5gGuRCi1mMfQtsVUWhjNQd8FyyCXQDKsHvG2gnrnxGEK3D2BwuQkw7kasSwdQVb5tBCSrZbTciF",
  "key12": "3XsHUzMEPZDEdeCeQo1U2g1udA1zQxiMw7Dpdv7XdWUGbs9hiuyBoksJh2n5bcNa1GESJdzuKpzSYzK1b2YWAsUr",
  "key13": "5hi5spAsYF9PM77KDmKSzsarvw7nLvRTFEByRL2pkBK2XpFUzxEiVdbe19sSGwhMnLpjrs5MdmqAGR4ZkTttmz6p",
  "key14": "3czNJBhdu26wRcrZ9MMdEEgiuvvZSK6ywvNeW2K5Jgv2R8sLtKtMCVeTTpmP6EreSRf9MaMAAMmEeawsZpjejwqN",
  "key15": "4suUHCJaBzMTrBNg1MVgHzM9qPmmT8ugVZFeZhHZuTANbHES4Qj1BVqwgotDVKZK5d8rvnEs1QPTAurbwn9vGWbQ",
  "key16": "41VqUrGrBLAMYMUaSWGRT5EhS2JQGqNdi9VdtE2zpq6vnwkF5ZZJtfYcQ8cfj88kdAt2wWFnY6yZWBX5MwK6nXrK",
  "key17": "3Q4BbhjCeanexYvcBjHdupiMXPuBSn1d1UPJ224zkJm35eD4ZDdcTgEDZ44c8hK7Yd85vheA59Tda5wHW65XrsuL",
  "key18": "2JUWzpzLM4mnfhv113NeMFMW8BCDTPHssVEjhQ5Hau4FYKBZFdx4jJKnfcfmgVzcg8mN8HHndt4PV8KTKm6NqM3E",
  "key19": "M5DHddyapwnGo496fgnQV6JAXcEifLHPkVe7YY6gNuZ2jLBehSQuy49SiHiG4crK619ZFptzcspnxQxY9vBYiKQ",
  "key20": "2cCy2jVo4BMQEHmPX688i7jHhDT4RDMzztPwc5KCpQAECiMSh2MfpL3QyUAErwwPxa37vDbhp8uXUb6Mv7w8wtH2",
  "key21": "5EU6cMKoiR4obQBx1dNJxAWhzrVvQisbvtGXt12RMFd8zNJemkxsPtLqjJHysnRZvjvcNg9jDE6TZfUjuXeFdLYT",
  "key22": "35anUSiC6vem9UrWFiuRqw5Pbzyjs14NiAQmNK5rrAY4nEGDdUqTu2YHMT39DXFbrLdD79XjMMyT9Rd3PVkihTzU",
  "key23": "2aNCgkqa69VSAyTTvGnxWbKze23B5724sZn6Uzb962BKCCV88fwC8thLa9zw8ewxd5nBSo4MFNuE5EYsHgum3Xmx",
  "key24": "2vvNK9QCFCDZQu84zgLPWTFptvgbrR94sdYjYJvSbfcTRrZXcopxbzLbyPpaNWsYNNfPHJaVZoC6AmaSfGQPAjtC",
  "key25": "62tYcBLYh96tbG8VgLGt3Bh9cR4pWiMcerSBTyaXVtgWn5WLLdvLnJXXR53Sto8fkhikRs5yoLggUw91sH65eJdH",
  "key26": "3kMoV6n1P9khM3nTFU2eAPXgZZP9jzqWRJBtScvN2zj7ck1MFBjs9GGFeAgF5aWZ7xk52G6QLDxUJwVdz5bGAigv",
  "key27": "5DzY3AtEgvTvHq5unMozHSjKpyq69c8CknWg2XKGgbRLcFgeLtRig5xDUJRK8GvawPf1UPrALMuzQaRvSKcAmyJc",
  "key28": "2J2ZoUvtXMMKLeFY57cxjJ5hDskbuoP9uEWnz1vs3VdmKiwYTN3z8HChuBmhUMpmeK5esWHU92XbeL3DGSddeZAs",
  "key29": "4q6TmkB2CwgTxP9gEBxMqm6jxuCgk3R2f8Bnt3BRwbMnPjQJWKmpy8MDdEme6nRjhQMpVsrrSFRpj8Z9QwTEG4xa",
  "key30": "62S3BDY3G3KA9N1dD2H6pFwmboKdC2cJFjRFHwC8r3PvTKdv4xNVTcszFbQhGFHzQWYjF9SAoFaaBnsgTZE2DiQp",
  "key31": "iFmfcogmmHncwg9BGHCH9P4v6YHrsjggxGnwxaskTFkd66CVvtP2DJMa46mr2cjD7RVURfqfxpb6ZYezeoQUNDh",
  "key32": "5TbfgsKizppvqh4G6jQA8hfRe5xW9irE7qJ8E6LRc4rEhpppM22NmCjjJQqN4ftmSCi2yFLWLgmoFa8Znf9mxet3",
  "key33": "CHS6y7ErrrgVuuJDXrvRgVQGSZWuxyczD9SzJjGtUVdw97Yn9B26yPbToHXcyp2rX4dWWYpP16GmNFa7hxUAse2",
  "key34": "4TsNeXGqPGD2Xsezdvfr2HwNffqauRyczan4vRri4jmh4ESX1CRiNxjmGQrxK2x1mX84ELTwBDchYHK7yBX61i9z",
  "key35": "nv1tCwAwBy2KzhsvosfBj9SRXgsZe4EsiHgWGcFLFLyC7NhDzyyMyt8J7CHfRpyKAAumkVPBCYJwgiSqf1A6rZy",
  "key36": "5vnM9MJkv5u15jR8C11nHVB793PC8EwYdKhn9bWbpXCMADi7hp343xffVxqeCKK9Uv6bWTUr2Q8tEJxipXAwoTPg",
  "key37": "2fYQN19MDiHo5GDtjA6vY7hnTzkztk2KiswzHuNKssAAGETrWKBuUwUQHJxmmA8yFvxsZ7jJKHxrYvdhD7ZtV2Rf",
  "key38": "5FZUqHhGtU53JT1CyMxGTK5QmuPR6wk3H19oA3ksWfic8ZG2KSsR8k4fmTVnH8q1hut3gF3JCP1RxQgGJj3QdGs8",
  "key39": "66tbLDMUWAjjm4jFWRbnLkD9B37PTACmZb7Vaz7kUMU8duWiXciuEEzasUkS5j69EkGUPdL8kDMjR5ZosdgHxAmA",
  "key40": "4fwqfzVeMFjNbs4Qq5idjDnPUPXsDR4EH2ZQZv9gwYR9UBjJg3sQZ7B9RvTDYietndVBvsm3YSDEcq1xc9GPNtEj",
  "key41": "2Wf9Vu173fF5LV8rx8Wc4TtrG7nBYwCi1NiPFsZXkdtNzGNiv1k2ZTjKy5GtPRwzqtcboDVvs5q6bNdhRonpRtTL",
  "key42": "tVnrnHA8XKK1YvNyE31rw8mjTHwVHazehwm6h239NuwSzfG9oKSv5XKqh8sMZsBndyMaL2S9KoANJZ2C4gisSR2",
  "key43": "16K6NUsqdxPzGft816i59QhbLnScWx6BisgKcANJvMgFbUQVq3bMxUeigjdr8NBJDHsbUNbq6MvLpPRVGxDJ4RM"
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
