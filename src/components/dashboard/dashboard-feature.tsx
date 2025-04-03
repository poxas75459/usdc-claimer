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
    "4R4Fwc6VKcFjw64F27222QzhnyYUfxdzYi8azLd38B3BT3yVRnhKSmMSvrvCJXMY9XALxvGAWtoAUM6NHrDUFHjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v21wG1mfp5FKGRWua4QNkpC75wnoEKqWEXQZQeBWULDdq7Vh5vY9TZsxdnSGdFhwagTSeTb6TmXF6dYWESxP6VR",
  "key1": "gK5AAeqmwPLsQuFAaMwcJroKNeMWYNepkqgJKY6Zy5m7G8hMaGGFqHz2KF8etSPxZ7fNDuwZrfjgrBDRRjmfC8q",
  "key2": "3qnZNu8GHe2uLdYE5LT7in3ievf6qZ9sS4VPpeMSrXUXypVZusxxTVVPLUjY3g8GzoXuHxquWdTyC1GE8beCbaFV",
  "key3": "4NMYqRUX787ni3AgB5SjGwgdMtSPmaNjngUZQe3PKUtFwDzQJPma43FzqJrfQEqCoLdUTqeojJzU6mtMUV8hURAh",
  "key4": "3gzaHqHexUTuwGYP9bdcSv6chvagqqXeWr1tfMQ67CTxmWhwBv8oriJVD3JYobmhkUxLTjQrSrw5csgYQqaX26SK",
  "key5": "5TmA6SW9CPiwAAUEXSWHciCB6Rr38kxaPk4HUGj7b3c83JxbVD8DmRG6Ff1p8maHjgoHBuZs4ZiAXfRLNWphqHYo",
  "key6": "474StCMLPgj7PdgRybAecJBEShftvzZT7xPDUKupEuS7h94NaoKQL48Dg6rfpeWR1MCbw1sjK2ZeJ49psokd2ieg",
  "key7": "2VmK1Vv4b3KvUPpR9uorCHi5qp974tVptJYnM1Nbre9q32TDSsCmYsprsdvkmEZGRZYhRdLKZEDMbeVYZPuNw6qA",
  "key8": "3yxLY4j7557TmKPR57433CggiidGvx2g2Z6jJwHhAdQxvaFYrZ1KLapRzq1hN5p2cLR6yt2bxkSesKECu1PVQJfN",
  "key9": "etY9wssDkY4SESkFZdgUqSzutfU3F3fwUrRTHz4e3wo6i9bNE6ihuprA7xRM3XRke9F2qqi7nf91iZFfzaNcEbS",
  "key10": "coj3boNZ55q1ks1jGuPFEPxcnFQ25tDFu3YEYQZzvvW4avYVDk469e4cx7d7Agv28dWmnP8QV5g3vzVEuRvsbNg",
  "key11": "5Ur86ugUmu9pqsG1KTuVU4GB5fqZm3YmDVhzD9rzhrhXwjBcUC84vBQ5t4DGGiovHasjEzom8PgZNVXqaBr4pY9Q",
  "key12": "2hY3tLR7mbNvrLgkWowZixWf9phK82CJuHFoewF2eox1bRovXEuh9Dj5nRLPr9GyA1euA9X4Jz7PutYp6NxKoahG",
  "key13": "5m59JKuQqcg2s7fBt5Ypy7fSiryQX2xHmB4yasMZg5hhydDLQ2sjahfd2TyvBju4J7HQNwd6h5oDDHPG1WFDcBY5",
  "key14": "5eWc2Jkpye1DzyvC9jEunMwVXJW5RQrzrhV2N6kxEnvhwPNsjSXoBDmEFc5BU6ChzdRxeA1HtUUvuQYvAEqAv2C9",
  "key15": "4Nf85h5tnqkMgaJnwPFTXegYtYCr9rBE33msKFeyH2jCDtGyRK2vvHbo7sQZiWfE8WikNR5CNfAGvsVSg6DmbWzY",
  "key16": "K2aQh2uVCrFPyYE9Ma85VfBnPCtzGAKfQYukEbf1jN9PTkPvRJRH1zyo7wcjrAzsw6hcafFvq47ufUQwX9DLbGx",
  "key17": "4gEjvBDaFehpssWJVzP7KMnNNPigF63DxmqHU7yistdGYq92cA8W75WDNoZdfsfB77XP4stwsfBXxGwSvxfyhQuV",
  "key18": "5RnUTVkF2skA9wpoev2npFp1B8b7BRdEpXVu6XzFymiAWstKdQ7i2ddLg2pmNy5iUM7RwsnSSuQsmwAW4KrkNE2r",
  "key19": "5cXdW6xQcYE7HT5sfD3QGCyeoAoKGbD17dsFcyLkV3S1vvZaDfDyTqbKPfdA5Jy6USpJGHxJiKpPfjzkFm5y1t1M",
  "key20": "4g1mNDkyKMeYiYG83QfxYxj89eU491dQ3U6NkBhM4myZfRfoZFMuj18Eut5wr7bjaC621MK866VxJ8kV7iMEpCjP",
  "key21": "2bHSwK2U3wekYXv1AMx63vr3Cv1riqvoK35g5ydU5sZkk1vcCaNJQhiprjFCuNVuAKwwnxz5Ezi1ARn9d6ULcXUz",
  "key22": "5PenrLQ4fbM9jdvWnRPpn4uWGW9axyM6pWCFTLdNRxr2iSDdKpDL6zoeYzRKTqnyQg1DYtuRJNW6tBFs8XfdsrYY",
  "key23": "5af5MdP3AdQgq3JRP32zV6sNcujcyTbrncJoxd3KU275tQbjPwXQDaVgSJMfJ3edgKHTDoXuXrn7bPaTZdC7ALDS",
  "key24": "5Go1TjTB4h1mMj1RC1sRBysVuD6vCRV4bXHbfD9oJzcGXuFmEuipZDmnrgx9SgYURQrqdbmaWVwQmHPSZvJxmZT5",
  "key25": "5pRE9misqJGhfbB9ZWPo1J7jQbGPkybyAwuh2zFe22r23qZh4dcYKhNk82M5piyFQShztZoaj3BrxnPQfuZFscYZ",
  "key26": "5aMtGkNT7pZ7attbLQnACwYKyBUCf7FFvc32aWYFvDTqudrRo2jQ17je9VYGRBEb6QikgHc1DxcDhZugQa9WAegD",
  "key27": "632HRDDRJSfZ7jisujbd4n2ZUXtV9j6y9mATy5sPVE16N2QrpMKQLwqHca14TFnxDQwYuAp1vWYXqPZdjw3HGXvc",
  "key28": "2DxmydHYXmprn4yNaXL9TWEfvgbLArS5Y7nAadog2mr7yatZtqWkKuNRTrun6JYZrQRdNZ6kn1h16htLC1M7a2TM",
  "key29": "4EZqDyseE4XM9nNhx3LKJ9u8ktaU2Lij5HZgtHTsB5R4MKfTBzteUjBawJP1bcePoXwTySchrdDRj3dCQrxchJi6",
  "key30": "3zd9E6fR7JLEbb2byvk3BMtuudZt5wZy3ggv74wguU3ArnaZ1nDVfFhDZMQVi2KCA3PKNV1AuNqEgiSgk3jg2s2w",
  "key31": "47W66XTYQaLPKJUMJt6YikR6FcguykHvchDw8qTF9MxfJ8u3MnCnXVn4KiQbEKghx29iiCijeo3QDcBaFrjuUoWs",
  "key32": "3M7am29NZQkt99VNo4dfr7mwai9rqPnEmcGNnbdadKdm4X9UZLsVwpeEgf33vEoKGWpDDphdu9KmvFUmHSeBCAMm",
  "key33": "BYZARskaAWZrHkXcLSRMeiZuv5uxKM4HQQX7TVZPMJudX3jZRkHq7KDQ7SHDfcR4TwuSVpucXTrtxPuS9fxwg6L",
  "key34": "63vLYyzdWn7vP3r7yi98sFhHQdE6KxrxtpzqeMxCt89c5x6jFAG9Gz341quL2L3wNRcAkyLDQaNgkcMdJJzPBKfj",
  "key35": "3uMbLcBCYz9FaWKZKga3LNVj3ix8D6mjCERcFGa6M7rF7rnyKivCJXLu7hWakYt3tnzWZD2ckgBMmwqNNPnstuns",
  "key36": "BKAEBERveA9wMXXJcJyVfHCk72E3n2DMQhKzsPAwwinDNu31F7ciJ2n6CPXtp4C63sytoh8G2ye2yj5UjKpFfMc",
  "key37": "5Ag315Qb1TnaU9VkSAWmaouv9fcEjCPRUSgL6Zz7rpMtgHycUG4sHSX9DZZ1UrRV1hQThfndS3ctcZB1dqteav5s",
  "key38": "2ZLUAzU8tq2twC1rCGBuZsFygZaTZn62h2epXiT6dy2LoJkTMQArAxWnoDqNXazuV8KbkzbAUSfRw66K71vDQaVG",
  "key39": "4pyWc9h6hTLqXiBHZPHkcZTkdwgSmA9sd1i4hcjiUnYZVSAYqqYp2nqgknDVfkRLp5hBwPikpj4F5G225vyvZe5X"
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
