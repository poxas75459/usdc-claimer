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
    "5owVF2NLbwGTW8xprhMw9UrCVqA7MEv6hMZT2gPbNxiCF2bPDMtKSqYDL9eCxUku2JZ6zAEbjzhYQe9wVmrGhQ4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEGCJfNo3nwkDrb579SDEKT9P7GNoePaxhyXM4UiiFsD9btGzZovL8q3XHjSV4W1G89PZemvM5sG4S73p89M93r",
  "key1": "5yXPR7iFer3TuTpzEc8AdQEBQtkkX3JW5QRixad2XAqYKNwJnTWpfasfG2Hwzg7eBMTwFz8RQ9FVFauJ7iJhPMgV",
  "key2": "iJyJjLraAzbTkJ9kTwwox7Z5op3LmSCPM3u5MPivsMN2DQfi5YV4ESW2VLiWxv8XZfu6nw6cRUJtuzNFSLUuxHJ",
  "key3": "2wk79MfHLfLGxn6z8gZfW2wNoqVM45La53MYrGNyUfctK1CzEpLxVksiLXFdX6XXMeA1oa8AGWnVxmn4gGPhai2D",
  "key4": "4fqQYWh99oQQAghjHxBxTJ1NACXZWMTuYnB3465cS4WJWtupg5GQKv1Y7rg1DLGmtC699jAjVbRnqHQAHN4TJXEH",
  "key5": "63WLq5DmfoPFtVGU7CZRzDyy4YBKnA4Rnfmse1SaEXKpWNNvYGyhMitRRkUKxNceYGDscaMphhUx7wX7egtx8r7t",
  "key6": "vtrKCs68JrSTkBdqpVu1iG7H6VvvDFyBVRmcG6sTDmyrswk8kmNR6rc4SoTeBZc9E9kNbwAN212QzZuhdnfZv82",
  "key7": "5BXwCXojbNp42GAFtmD9vSNv4sQ9HF5bL4Pvm8nVK4vGtafm6k3x6MQJFMZaNyHzz5Lrur8xHjSEGYN1oEd5hJJq",
  "key8": "3pL3J1GcBHGZ5na5jkiyJTge38bVKmA7go4DqxNDzSGa8Pii4C6rsPaRnArx7gKHuLRi5zsH9jHyJXi5MhjeJ4NP",
  "key9": "ioDkqxHbqhQpW79jn6Q7CAGsL71EAP8u45ZdQCAokEr25hWUwnYujstftLnoFBtTM1heGDEFXQSEJy1UqhNZR2y",
  "key10": "3y2hkrRiNCvco8buPyGRgamoYU1HE7VMkEeTpywT7PCCKoWAtwCqYY5to7EQV1fNgGu6TAbLLNKBjVrtY8PA9Vfm",
  "key11": "35EYwnbxq3R7ymdCV1EJA1Go8VUHghpGtorgvZBdr26b4cuWVe6pRvSkNjgd957Xk8h4oxWCDpKvY6kvk3L2WPmG",
  "key12": "VCzfcq5bnoaMN2zffq8sS3XfSmrJCU4v7BxZekatsmAggJZKtPssDa4m7Y4LwYfpmU7SwogDCXBEE55DWRHE4eN",
  "key13": "2JodVVjzfrwsSZep5tFuEjTv5Z1pjczBv85g8fTTih5DsXqvmpR5dMFfi7xBMZuRc62tDtKoXFNJa7SaPxzyH3R5",
  "key14": "2XrfMMYjvTXuEu2ZYepS3mxF5YEtVkdh8H1zMWVFSAGbVWf86KtSDsSdF9T9YuuhNWoG1JKtGsQkg3VaQhyEd4kd",
  "key15": "3z8RmKwBdvK9sVnafUD3vWLRXse6RKpMHZNKknk4Rnzi5t1Cq5fH3ZtDK1PZEgEFFwYgAUurSj9TvR3Uff7bKhVm",
  "key16": "33s2YMnr3jC72pUcxnXhiLLxFz5ydMftBkwAg8Z2jKVUfX2P7BX4DTYkETCfGUz1yWnfrNtTqGy6RA8ydpox4W5x",
  "key17": "3Tz71vXaP5j1xe36rxfSuZdzPnDt8Q98vKLqu8KQmqDQf4z4BPzssAwSZXE3LB88GWEWbxeX5VLTF621yeR6ahUp",
  "key18": "5SDyBrvvuSggVnAY7tSqMevcoSdwXTguEssEitCnq3SQJeJRa61Bt66EKnyamcMQ7Mcd1c2A6HvXSnkkkiWBsgjd",
  "key19": "41JShKpTXbkV4qQM4hypRNLtikpTVLe9EwrWF1BBHZgug1is8pRSGTqMiQjU952hJPmtVAuwWTHHZ83VQrAMbSdZ",
  "key20": "59chS3FaedWjvPpgHSBFdDuRRjWs33zZL4o1ojBwSoNx19i6DR2n4Dg6VaJu2i6D26pJxFPQRvTqYJ6ZAcqnM8pC",
  "key21": "5GgbS1Vk9dc3qW71etjk3bH7q765shUsTCFmNF1CGHm4Z1vGA8gzcf3mEoKAxPzzyDMLMPTQ3v1ryNTTabD7Gpk8",
  "key22": "5u7wJV9tv2cuK5pbbRfK4wi7SoocGz8CodhDBHX48NArsis1H4A3XMcNRztvtHant19JUaa7QyGjLN5naKARZUEL",
  "key23": "3wPMTtRiY7jxtd59vDRdEgvtafUzVq47qtXtCXkFpTZNW7S8NECqsrBy3echTxE9K6fYcZZtbkPq1uvi7PqpPbtB",
  "key24": "2cL6q28CTeJkcWGi4uNg3eDv5Xtvdn7qhFRgW1vEktRLg5CAmEAQCq7uFDp75DHVgB3XL5bzvjD1mixQQies8R5c",
  "key25": "5vQNZxPz99qHS4mJf3KKPVmXDmsasEgmmorbcQdCB77vN6YFrGhT5HkW9uo335cekzJm2nXBXtCEbgqpeQWDWn16",
  "key26": "1abtAU2v3w87mXLchHenfCBd5eUK58X4s5R4MKbAmeKZtjTS3LJqTKajtECHaggAG6T849WzySLQzKDkVVQaKWZ",
  "key27": "2FE6tS3NioiDCtQSMEpFkqzsxPMsWV4KHuCfb7ssFGEwm3amqn52rVrGtHkB1eSCNAfvzcMADxFR9KWeVoyJHv8X",
  "key28": "2EwXXamZUxqLHkx9QdxKsUh2xes1kjwks4r6FV5B9AgEjn4XKP7MAECyGo1R1a8VtSUXRHZToCVnY9iJRmGzmZFT",
  "key29": "4PdAtXf19516DmAYtaQzbNGfnKqNftdPUR5UzGS2iYKXdrcFMVULgr2qJW6BW13mk1HKmhiR3UF8XQDbg2z1M2j5",
  "key30": "2L4igkkepA2Pd6Jy1eaYjmQXeqSaRN5nBPeJSukfCZqgcLcKat8pRhi1g47mLzxixN9AYAMN7VLiLioRwuipouyB",
  "key31": "4VHLwqaBUU24X7TMaGtkk8WKZjBZeWHXmNQxvVnz9cxYML8UbemPia9pLsW8KkbtPkNDviwYcW9KJQP8Hwz45RA",
  "key32": "5Rg1K9pZ6XKQH4he48sXAT2YCKndixg915eymCCafug4aUPFstAND58FRF9zYKbRHZYKX8MK9vEWaUsdByYmkKTP"
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
