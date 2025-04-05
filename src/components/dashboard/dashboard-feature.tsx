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
    "h1KH2MzoiyuxzQiCvMPhXgrBL9kxcJ1vWaU7sipVXVVsrY6XDWVDxzj1DvDf4U7vYKhE9WYVsmBqFsJ9QiFznUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czFE3yT7UGttRnCrE4e4RhUD6YonJULh6jhYdY4EwX1bM22gsHYV1sKWxoZiT5YKrzPQXdu6o5Qtqs9mYZtLHG6",
  "key1": "4wfcc4mmZpP85Tkkw9TGbZBmnFZTFibaS9yWNerA2bdijfMR7wGmrum8n4kgQ1AEL5bhBVpqNLJixrnC2K4qe3MH",
  "key2": "2MSEiHmEUof2yFjBBcjokMBxaLyzzDQwGiEjJnWszweihf8RV7V9yRDMTJpSvRKTfapdwHcwQDWYsP65VnWXwrzp",
  "key3": "xkQcrWWwjEcYJbB7aAgKopThaqg2ugH2hYoFjgzp7uuSPc1pVJQ62nFKbqfENeGrijQfqJzevRvnjyjPWAsoW9B",
  "key4": "3UuA4YQQ248LtbyxkheGuafpR1TuddGGoZV1gUcrQJhUXt7kZ6cWcmeAnzEx4aazrPHqKQgJZhdKcnfvwUYBBoUe",
  "key5": "4kmaRa12HtM3ak8DLQD4RjvaiQH6Bf6xzS3EGFJNRKy3aPEdYnJ5p9WyDEMFJM93eA9AaBkpoMtg474jjYvfEK8a",
  "key6": "2qzLYDYmJZeegDW8JjQ8MWU7eWAjghRZwV1vKXYsuzjD9YDFDn7rJ1ikt412ovb4B9e2cu1NLyZXwb5ACTjBvTUH",
  "key7": "5EnH6TFbPWMPuGfG2L4dBAAwakeM8ZX9fehWFTFsYZiw3wZnocDbNteeVwXoGYSuUs1j3mfhqb5jvx9fYu8JBgWi",
  "key8": "2GgPsNEuvrqo9RgJ95pKak7e3xrjwVy5aBRJwF4Dmu21XsNSfi4n97KkuNaEWTHvj3YX9FL56EpNm1ijLQ3EK49u",
  "key9": "3NYSrxSKwgAKAVUT1YfAtBFetyZjDsQxyNbdui52tV4CbFHjEt3N3GMDsirueFduU2J8MTWXLbXz692tXY23b1vt",
  "key10": "3FjgDHtudUPorSPFiyT8f3sRqNBp8zTHBom6VsfT8WFrKcGC2EymBh4B7PJrSmeBx8v5X5Arx59FCb1AtLhXdDjs",
  "key11": "2oQqkhjDBB9d9x5zqdZSzbe2qLwtqCz3Ssv8dxcADsyhCi88q3LLLqofPKJNWTSHccEMjZCDXsft2mNvDGTdrj79",
  "key12": "2DtA67De1HmBfAR4PovM28vv76PHhpPghrcJWH2HhG6PyeDyAALs5r6CTexV7bMvfbduXRMgWUoiJenFTCZ9hnKD",
  "key13": "fEdqAKPH5bDMez6htGDAJu5VJ7C3PT3SkzcDB9d7Ugx2rY2qhVqjpaTmmraPvpbrSHy8vw8G5JEcv3HxAcJsgzu",
  "key14": "Bpr15fhniUBMhGPnEZH7SHQb2ttWyAoDfxD4uceYe8ZL8vTu23hDzBiMp43BPSL8GhdVSGTsukTsaxb2D8P41KN",
  "key15": "e2qvgvcqx1AYhbAT7sxdQSu8M9CXvJhhYi584gjkevqnerPP6G3Z8gFeModXMfbACfZ7y5fmmzexSRmRrAkwqmk",
  "key16": "4N2zLU1xEH8VSYTz7R3akoQLoJ3GcYejWfyZ2Z7e3Li8yzzBwXqMatSRG9YHbfQCWWwJAexknJdEKHtX7yfXA9Tw",
  "key17": "24A3B2nXE1HBw1n71ixJh7mG3sv5bQJJARVtvgNAy5fdpXuX5SVLHmswaNTwh57DBy98om1ub137hiC7pcatLTCx",
  "key18": "5DrUEfkTJqoYFbG3Ks3xH9uyx7QquUdJRb5eCpzreg9ep8ccZCYnovn5ACiSFwSZmyxmpsjNep4sWM6xLzKw99x1",
  "key19": "5sJpLYZx1tP3971HZxbYyUuD28AZf789QfwirAuySL4CZr9afPkyNjPSX6iqmgmHGw3EWXNYhnTMpAAWfjHfQzrc",
  "key20": "5BUC6mkW2rKfZyXG4WXcafHCyaBTmZaLjX2EMVZno1KHtcsr1vm5zJwhdruwWztZp6PnUZuokKnqgo6Dd9on5kgp",
  "key21": "2eSmBQpubWLWHtqfxW149poqBndEo2xrKshSM21XhF43JWScXr6XgErKxXvYkPQfwjnFSRsni2h3FmN9H1eKysuU",
  "key22": "2sehjBzvbFBAGZTFCHoyEckBDfKxvUzf2pUTCmF7fUfeUGZ2Wm9akKf442sv4iTrMQjY3nnLcRe86ppS2NfJKVDw",
  "key23": "xzkE2YzLUpetTufyaLX5aX1KsRfK5op4eUsvBPzGshtRJnqvJDF4LTp9hgfXUZ4JfqSDjHTjgVfiqsAAMAFGUpR",
  "key24": "4dKErapdotDMPUHPkGVRm2vJkiTnkXbLMrzCPRrpJPmcAPofF9ehFK1pwjfrE2cUSgFfLnzW3An6jBxiLmBgE73k",
  "key25": "jNA4Bv26jxkhzr1vMqA5MJxebEBnHxsQmo1GspnYhaqkm6X1EM9nrDgcRSk1gA42xfzqiWFg7hSbghqCHRDUzst",
  "key26": "2uMVD9NooEvq6PxT4NDzKVoBVqpFbZq42PJgLeVtBbxXBTLUfn78urihmxb66iqxJ13Mtya4Z9muj4tpX3vU78Ct",
  "key27": "E94mf5B938vebNnDRKMtRweL7Cfsu8b3fNof3WNunEArGH8aVRpMwkXC7ftJH8MqS8kZbguWa2XxxYFXtAy25Qk",
  "key28": "3kFoTyVNy8s21gx2EThxV3RRuaETRGDcEYht6Tq3B6ptgSNP3cZCZfnnd47qACL7vfUcu3GQFPTwUGspQn6GVmQr",
  "key29": "2uEDv5WoruTT4XZnUz6PNbfrBsFktfEpbW8BL54y7AKRPvpPHknWWVZuoVrJrMuBA88utmAWgSUp5QFXnA5WhGVE",
  "key30": "xHshdFSMrDTMy9of3tGLez8kY7SoV46gj1wUQ5A3UUq7JDG9Bhwio5358epsg1dBWYRR76D1Yf41BB9JoMcwtnr",
  "key31": "3W1LoHPDXKwyyuWSoDmHBrvDb1qyS91RPzfniuVRw6nrQvAqZEJ3Pfe9cFCqbTgyHR5dMxMw99pdWXvfNK7QkYoi",
  "key32": "5th44zjPPzr2dQAxg8MK9YGo3fs9modmeFEozLZD1Je7WRrk13Lfa5FWJCk6Dzbjks6yESs1Uwz4D1kbGUG9sN72",
  "key33": "JVAPiFfRhzX8PyQJykQLJvJaeu9nuK1CthG3uaBRL3DLWbjZNTM5QmqDL2qjgaHhsGgb7DgAGogYhCkMcEvACYw",
  "key34": "2mWQNHiiSna4ADAWHWX3FhLJ2HNM8BfCNLHKVhSntrku8SYXTfGhjacTpeniABdYa8Y2atvBEoUYKuNt9ki8TiC5"
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
