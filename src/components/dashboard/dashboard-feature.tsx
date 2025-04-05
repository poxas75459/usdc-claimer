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
    "2Y2LvgNpbMr4vcXkPkFTYkaVVnQKSRJXcWNc5Q329hgJkoy2uzzZddJzu2rjSWGgH6KLiFia6WvGwNXnPHuBGntK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTgZzHhmBCj4L5sWKtVCx21Rv51R5DXKuANw7PYATeRWbY4H3YVZpnrMNEdXURP5iNu4RDB6aSVqPFwT8vzKU31",
  "key1": "2aPcPaRkgM6NXRbYrTBcj668P6G2EdQ8Wg3QTHEvQJTD7NDDw5UMDfnyGdgEYKffCKNUQucByouyJtJMjZqPvRR6",
  "key2": "2XtPvfUyYwBJRYT5BFkm89YhGdDAd9HtgQBDHAXHMnEFkTcA5mB8uryb8uVsHzTALrFFELmwY8CvgSTcFN8TTxUE",
  "key3": "3aUuEJHBELECV44ojA1uA1nQjDviHKJDmYA3qfajpFWktku8WNrEkaAM7CqF5GpN86SgFC3PW8ixx3BtW9vRo2Re",
  "key4": "4cpubg2Xd4TUhYrMpDpjP4fvCSa6AJ5WWv7M13JkZeuCcCRA4TvvgUTv8sCgKUFFN9xhZivEsKbfS9YBbLPHJqAc",
  "key5": "3tVweZMriFD1NE8pHGXpZHxDfhNbVzvFpbSjLkjCAuVH8xtxBrmzvbotKaWf6NACBndQKKKSmX5UZ3UfXt16gaxh",
  "key6": "27AW4LT7ecm4gdhhgbMH1LL5StJWMynMHbi4U89eyDd3BGJyrL3R8A2Brh6RnL9zR8UmTyZgCrCih1XEKtMr7fMF",
  "key7": "wi2BNsrFD4tUzUJPtVXu13q2sLUru6fxvRJrLSfv167BBhStgBZmwTqBPFcyu2MZonVYRgWWeWAnXFyHF3H1oTP",
  "key8": "F8hN5Da2vLSk4XDriYJx73UBcPH1gxb5up88y6CAMiZAULJA5MygdmvL1dyHBbHqVfhpEGDP68ukiNnqWVgwde7",
  "key9": "21x3bekXUYPwRNaLHSVaVPnHQ9iRKouUAbU2NNUyeRgxRJzXRbCNopAp63TcA9jATN76oY5kctXEXi5bTfKvVqwN",
  "key10": "28xgpnJ8DYUjyKWd57TXqHNadazYkRnKyaK3oU77TbcXqsd1efFLHrwx7tLMTAPUHZ7VGcmo8bQp2ShC6GnpPBHL",
  "key11": "5UFWCkVyHgwn6ZCrj4XKL3UtLttmvtHWWDH5LwaC6CTmk3588dPPbEnH7ngg4EFENmRGqL9nWXGivVNQGbXiz1Cv",
  "key12": "T5Miaj4ZEp6oUHE4gUQZkM8MoTNjYiqRghqZsAgi2JHBp2AKsMftVssmC4fGiZT8zfrQf4HJhm1LjvNBQRGSDai",
  "key13": "9s9vyALEuTcK2nFbFQWUgsTwQMPm2zWxAfSroVBboaTK6uy7wUiKFNcmXfnkbevMqoQWssmQRh4prjSQE8UV6Tc",
  "key14": "5ammhZ4wAXhRfCiAbaZB2D5hQRjpKFkkRLy27X6n7ing8DngUdJkSaLShzKwC6Wvwuzk39wuqN6aNv2EM3ZxcWSu",
  "key15": "3bkiFRESobogZ8svrHqWvM51bRPPRvZNNa4FNixLSS5omVM7tNji41Cakj62sd3122hVWxZhe7M2yZeX3fZkQ3DG",
  "key16": "cuLrRyyo2U9nadfVMYasxTCCDKHAUPnrsCsR8gVxmhgmdmBGQq3QY6Vf65K4sNH9qtQ9FkQJzX6YV7qGen4H7ws",
  "key17": "4XwvaKATfiLgXrqMawiksBtVjZSYWvSDotbtx6YB2qAyutE41TUh6NJou8YYdrqbyoGmH4BKM7rKjmKZR48x94xW",
  "key18": "3UwcENtUx25SdKopFg6XAvDSCYovgL2u6s7Pm2SddLhQ5mCXbt5zQ8dtGzmcDf2gNwRTkUijZxjNHiKeJwrLriZ5",
  "key19": "5R27ZAUVU7kGvuR7YQtRngos9iqRGZx2jYgmJV3j8LLch7EyNaA5RbED8FasMQzJc4iZgpnNUYRNUMGBhyXD23fK",
  "key20": "4RTrEJQGBkapUnLA3HA1BQTxX1rXfRHAxVay8z8FXcPQiSFQ49BVt9UFFVGYW4ijEipiUbhe25tpZhYu2ZiP7u2y",
  "key21": "4X2bEWoxfdB1RHBpHR7wPWKysHckCpYTk5noSPZ8B6BWMWipERS1rEoSEVR1pPXthZStrzaj7vDgaDJXQ1BmG2W2",
  "key22": "VstXs53R7BoHC4T9ULangCjKzEZTpGH7mTcYYkqugE3sbq7yoQDPCtTZjkPm3uNUaQTXmUZiXFNUobNW4gY9L9F",
  "key23": "4vTd9zucarUSpcwhUqMc5knnmhjq1VmdQSyyUeyPNsHATNU7GePWgVqvFKehCHENmcADuWRv5GMKc6UCyn2XYaM2",
  "key24": "2SDgRDxMk3B4pn1iuWMNo2isKd7BZ5Ut5ChJFf1s6VDiqiyTPNW6iDStmujZkt9nsttjbZKyWqwPWrGTAmPZWQca",
  "key25": "5UsFxr7xNw3Kf8BZ8yKqjiz2d75phLpwuVC1AJDEc1Y8N5m1MaD9QbAExxZ7ovWLD2NEzDqK3zDQxG5vvswvRU3E",
  "key26": "R1SVNpBh6AW3TUQXBGzPBsivev4tuAWXff5CXLdT1j8nDAySw92XBv3vTCVZmvyYChbD1YHT7uunAwPcGs1F5EN",
  "key27": "3kCXFV2MZpsDg8KHvk9RTTZkvKhEur9JQmkZbamcF2JttvbX1C7njCH4udfx2SEtGsx1nfN1Qw6N56VPcT6M6N9B",
  "key28": "5hsAe3dgnR4iewKPjEym7Sijkye7GGBrqNhkSGre2vcngte9AAmPy6EWan2BV91NoeBwh1AtLTTGqHD9jEidCrgS",
  "key29": "4j5mrtQvesqn7xy1mUehLrUw678G8y9HjfrtXMdcrjNPpSeXetfg8wJTD7KCZfAnydfiSWcKCH1QLPhEmhEruJE6",
  "key30": "5pd1VPsFznvnGRieQfueBe8ipneH9Buog7eUJXtnbXUkfu7RnK4zxxrgkFsBxzizi7ZLcDZtNKsf7ij6YzBRRy24",
  "key31": "3XoQhrJedr6tUGU4CPnH4Hu2DftQyMKbJChanaQTGQa9wRs5BeQd6pyLafGwN6WeeG6BUjf8Cgh6ox1pBHC2suSq",
  "key32": "36iquQHeoMmatoSznW2JszmE6zuz4Zv4nR7GeMazfnSz8vjLGFkUxyZxrh3SQMK7sSAPXGZoLgrR7LkSYCx5V8f5",
  "key33": "MWnVT7WFmDsqgvb67BNS8NossKBAWmjwzqZ1893GtTxz5PxBdzHtDKV8u3b8zynNuJZQR3nYx3J329fqaT2vE8Z",
  "key34": "24YieXbF3ueczAmdpgHjD4SZkijxyNgAyKdFN2gjDJGMu5LeKqsyQNnTqGYSBjqNu2YmUwmxgEHBhraG2WRLvqds",
  "key35": "PHanUXpCZF8xTgry2RPg5dDRpjHe2Kzpcmbg7dZdKyhvwVJvBVJ4nrrUPFNdvpW4CLkTyNMQbzJuSrtqKST95ix",
  "key36": "2YrwFviV8zEFapPzzt1VUYq2LeS2U2kVatXjwZ2kKftfZS9sqnwujqVVkh9zmYQERTjzsQn7sJ2K6VCwHbpFjwzD",
  "key37": "XKr8pBYG7Yi4fwTLXC5zJiYmcM3iTZBHWyP5ugWek8foNyQZWcAKHRawSAt6XcVUZzTsvV2U9UDaqhLEqtpaSkP",
  "key38": "3oG3udTzqKz86ihNwM55Muj3xEDxbq9wYx2oZJoksMevd8xMWsNjeQH4kywuo7aSeqh9RpMTzd4HzePk5ioioiGH",
  "key39": "uyxxRd3nNnK2QQMZT9qTZMjUgGbXRC6HnVRgYWF1hv3xu3P17Z6hgY5hfQf37roGNQrTMgdjw4FnNBxjjTkDNw7",
  "key40": "5kHN5urd5c7oY4hGNjgYpjCbXuXNNTyVewP7YR9nYxnbnuAR4qHNydTi7R66DhZuyka1brnareet4rTdXfPGTkV7",
  "key41": "38RvPeStzSwVuCuCGFvqNSM4zP8uwVkNHBSpJsVwCzs1JXQmDxNx8JpdnStVBbtsZDFVTf632ACSY98ryzEwxL9Y",
  "key42": "3cVfDRFvTJtAh4bptjHyWw9PV9QCf6RrjEmDGvp6NgXFU37zemAcWp3vMNEeg1WzjuziW84znTZdBEfDRCXW7PGF",
  "key43": "4EUQWMATnMSjqAhdP9DMrN2MszKuZY1p7sCRa6sZw8ief9GAuZy1DexcUQnxwQz3qivxogC7D1TjE1HJCc5UKVuh"
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
