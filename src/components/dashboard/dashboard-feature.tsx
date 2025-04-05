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
    "3jPCWz5vubNYnVnYBv6vZdT86bMJtkcc5oBS6weypakRvjmHok7LCiBTKvY91Cii7nfUaJeHFH5MHR1mg4NitMFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42KAQ4463cqWD5GnPMCJJG591SkVBaeWfUmb6ci3BDotRnL1FXUeiy3YqDgbfx3j6k8ecnM5vbNt4A3p8boWN7na",
  "key1": "37DK64qnjqhg6LVCoQJWUsP6k8svBpxuLpCB7148Pui4sYPyzUbJLoQM2sRZSbMiTEkrLAAEqF4NCJfGp7QG96gX",
  "key2": "jgy81CqbPCYeeEuM769dMSq5MsyXU4NtgdpCeT14qMd4ZyhHXSxyyRbAzs54WhBW9U6vJVKcwFTXmQsBccKfe7F",
  "key3": "5Fk3waUKcH1DupxVwVkDQKq3fwG4A14CyG89tEivG3HjaPYuWA8uVHBmiS7FNCbo4CKm3Ne9wPPyjss9LqXpuUvL",
  "key4": "3YxZPfBYByBxDvynaZgD1743M2EeYAsgT5PFUFPApsjSzVUSNAx8Z62cDZTeudKuqJBDrkfLYnTrCW4L1J1zLu1t",
  "key5": "2N3AWWDKQcPi9x33LB6xBvfE5VE2iZceqhZVyXaA6bsamaafU4XNxGFoth59EffkecFnMmnhWaueswGs6xFecJ2Q",
  "key6": "2Y3SND6VY64PCpsJbxuTZWU9XH4bDizeHdivxwCFKqp9iT1Hxvpm2EkpqKxybGMFW64kJSoETsiP4UfHn596jVCS",
  "key7": "5AYJfGZr9Gevn4XbJEkzGTUHryQ3Buz3YAmnK4misR1QjjJsA88yZEz5pon9c56WyvQ9J5nfu6hHzQDcmP1hkkm2",
  "key8": "51cFGLuxwfGXMXeVFRkD3MoWYTG3QU484m422qZDtXaCapkJXGVjm5uszGWERqQX4gm8Z6MfcpG3EusRgEdsX1fq",
  "key9": "36TTcGuqT6JvjYQzkFh7VgHjPdDKbdRXbee5mabLQQG4VmvJANPfKrBhXLP8qN8E1ZEmnwbs8d2KsssTz7FoBKMK",
  "key10": "3jjZEyiWmgZ8Xzjq7sKCuriEDRxBH3NfTCFDm4HnuMiZ4EhzQZsg48KbLdA3vxjDSM58jsMtQXzFNGGeJyvmKaWP",
  "key11": "46QUXQXY4LLJZZo8XFmWkafRARnHX5FcZ6CwBGu2BNYCg5KMDsr26BrnWJ2dvSogWEz1SsgQJGAr66wivziUeYtP",
  "key12": "46ruhCNyBZrHbjzuzdVDBgJCdGY8e8XkQpMucELNSkBMFPocgQjB296c6PCtqACGpDSkwgDtP9PGRbicTq7umx2",
  "key13": "2ZTfMDeUnDtbZ4bRTzad7xmTCyjTvbCdvMndqTg783YHb3yzUsjmzwqmesU4dywsFEjARkWpYXRe25tCmro8mxTx",
  "key14": "4Vj2b82kFdwgqv4GdsQo58q1PG48L5hqNwNGTwzeDzfjZGG3vdJ6Xvn8z1mKzmdG8TvqwnDPn9WEQTcDFWZadQ5W",
  "key15": "59psLP4qovXFVMP5q77YBsbm5Ez6gNtdBkxUmU77giBgVeYnRZRVL5UL8aQjViEndu6ALtYLQ8tF3NjV8a3QzPdQ",
  "key16": "2jiCWDR7RfgaqkC2nmrpzhKRaBfs9XetfMPNco3minGhzEi4txS1fgjdmYzxoAVfvm7DEtUQzLcqegf8fKh2Mm5Q",
  "key17": "2HCZtdbgJ4p2WVjLbUPCZmrQD5ErCaNEFJS36pQJ9qwdz6qK8XWq7ar8iBL6Wm2FUtqZkRUAMifhezvuz6ttkeKV",
  "key18": "EANvioyana3u7sLfWRa4WVAWpQmdE2nJNuPyF9VTe7ZZyRVgAJjmCuuBJkxqHQFXEtLg44WmdYFh8pRWWZf2d9m",
  "key19": "27U6uku1i7pgoCGddcKd8YQYeJXDfJUhmJAXPHFnY7PZk7iSeYk7ZW9i6hqKxj4DAYpfcHiuY9g1287qxfySqUMn",
  "key20": "JadgwJ5XVCpR5oYXRcWpUh7ZRG41K4waFGJVZVTEGv1yFG5cCezovBtZHyNzJfpcGy1C8xZSNAG7pWFA4QSQu6D",
  "key21": "RS1UNsyDoKoExXmqa3kGRqkCvNzKv1yQiqXVXjJsHG39YrY8GUiMk1give5tXS6hXtp17nNcJpfvn2XNuYA1cDp",
  "key22": "63ziAZA3XJbzcGCgNRRRhURuFWs4URFj7ZMCBuUffwMgRssCvSANhPxWZ5gFvwroqZfbecYjQ8uFYhLch4suLFow",
  "key23": "xfTFyBRyiTtMBajz2Vwu71ah5if9aTvA5J7gdUmk8bNQShpB4JjKg42fFVBkFNT2Ga9qDYU8pgf5cfsGhCHo7eC",
  "key24": "vC44omsCAUK9hUAgEHSBm24yGtbs5EBWeUy8BuVbXsBedxznYYUAnYhVNJyNbREo9DuncKNDmYxNk3UcEm6peiE",
  "key25": "37raw9NkqHe9XZuaB7Aj58DCtAShvo4Ze2XhoabWjhAWWqZzX7vNcDbB4AQaYuXcYRXef4AcKfwhg3PjFRB4Ustc",
  "key26": "5q6NmvL8uKzckcujGFevXFEgjW2gbDWPrH6QogWNf1iEonsFhrhQT726VpYCeecHCYLMctxSk6S5wN9WTSuNN9Mp",
  "key27": "3Vk49ZbkhHb5KPyFJ2eaVsBaYgoCUz1WjtSPQhpiMie5UPLrgFU8J5Z8cJ11acJA7off8zJXw1eQUGh4WVfMq6Do",
  "key28": "356pSxNZXsWmKwwKgZfq9uczv6NMUnQ7TCVdtD2Hyiuuepe9mXkhyFigh57K3Njhz6pD69somSW5pprk4ayUDvhT",
  "key29": "3nsYX8wgKLEmj7mNzSD1xYyAjNzrPErxjUS2xhHPgN5ikk6sqVY266pM6XiedadTDmPr1P15tC3q9WixhuoeSotq",
  "key30": "61dNzcye8rUUZ6RL4g2tDWfzbTMws8LQ5XEHwDyBerkivenRd5xjCRnJAbLkoqwvsBHc4xNmENhP3kjCM4FS72x5"
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
