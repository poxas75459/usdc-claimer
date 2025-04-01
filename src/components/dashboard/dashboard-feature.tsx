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
    "3xEjs5iBgtc4C5XqTiiCKGrMQkhcBjBsFEwj7SXtpZg6nhGZi9ffLEGestqB7uLsfUD4k2zuFUPW9R2sjnfQAZrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34LLXNtKBDJaCYK3LZX8crhpYDef1HrockKNBWUNEZGrV28ZgsDytxjtFjqfH1FWnN9hHCZpKChdog5hXqpWvU6a",
  "key1": "3SLmKsWFP1Wa9NeBnr37iQ5786tfkXLpG5CuutFspxC1goBQrzci1Uj4oi2D6bcsJ2nSdAtS7pW3YMZ2GzZR49Jq",
  "key2": "3pHxHjpVb7tDrkHEBpYbC9pw262RrmGKy3hHtEb1kvj4tUMwaA15pMspBqVUDt3rmJFncQSFobrt7T1yPPdFTTFi",
  "key3": "4F2p5FSCFiaQhFma6MMGWRY2abfxL6PKtVujjvQDEX2Uw7e9593vwmjx6QMincX7xxCphq6Q5WyKwHhc15fNw84H",
  "key4": "3TTdgBPKm7iQtd4PtPaPNUhHSNtioZaz1h6JLKgPSp4qtcazY7VwtjRo84Npb2XJpUxRX8MZwy3KrZ5jDHQtRbcu",
  "key5": "LAmKGLZYMDhEnVW79weupmutMU3vHXwWE6wRzTEYq7WXXHgrA35Bo5xpMyCrktJjGzta25mTc4u4dpH95uUZ5WN",
  "key6": "34R141gpEjCqdPqWCgxrExjUaQ2W84AyKHZT7GNrT2KVHubdfM3VACjHerWXR7msXZzQM3gpakUCK7oJXQwSb9L7",
  "key7": "4BQ1nu7W8ynhLfVXdKNhFBWkkE594L9mk5v2VEjYKNe5Q265FHzhmMZzpqqi4nyr2qvqMf4D5mcVt692okW1FUAr",
  "key8": "2rBUkyVNyLgHQhXN4KYQRRWQt47pzJGYZTKYJZZndoQzLS8PH5yUK52JbKKnZ2EmbyDCrtWcHDyMqaoSS6JZcegr",
  "key9": "5VnNW4KUE2xnn4bVgD4gBp4ywUMEzNgik3LqCbZ4me9n3my3utTYYws4aMDJfFo7SAhW6payMgEBG4sncGkYboVz",
  "key10": "3CVt9dzqJVVNdfitQWZZG5QKFrLEhbYUNctHHcdcRktrEVtkUyLjddH3yBhZWUGZPGnXvgKAdWo8ZwH3G2xrPzru",
  "key11": "2RsfB4NH4Fj7dDGs1JTMxUrYa7BQTT2ury9SfoxY3V95V3p78AijZ1huBPJLP8d7vhds3ofrqKxCNsy2kC4qBTnE",
  "key12": "2eBGv4LErsEYNkS9fUoe2zQPb9XQHz93BbDNq2JEigpjqGoxqACZzXW93JxHfvzLwbwTkNyPMzfuiesTzN2rACgv",
  "key13": "3qRsRYQSAvoXaAeyj8dLtL4vficKNzZbDZ2UzNpQHJyZ2fi1AvepWJPcotgXrNqGiEsMmhNghxQZWngpuBa2wFcg",
  "key14": "3ReaodfWwn3PjUgbLdeVbADVjJ2A7LrnjoZQiJfFiQ4ZpKNg7nwmANRStRdemHqfpahYVUKPkcymE4vXur3c28Sm",
  "key15": "2XGEGSuJEP57Fo2txC3Z8aaRb4zNLW6zViqZXm1txH2DkQ6dfLDsKD7BkLrs8e1e6J4ANWhnuGFsCvrug4KtqCe5",
  "key16": "44sCMpxaqungJ57GNMj2gnWaRTo8gucgaKQDDSgeHDHhJEjmqdGbBvadZotL4cmSeLma8eJ32xitidUXDBi2c9Pf",
  "key17": "2Rph4odc3ZiMtyWghb4fhNAFLYkY9VCixBmPhL8C7SSW2p24DaX4jX1tLvBwqCmAAZfX2d6nuxj4BXKqnePwLBY",
  "key18": "QQicWPfQdgsSeUtX3WwAh4AWrX88rDHGy1xdK557bGmQR4j2mhXytnDmJR4x9uPTsaMpJWkyky3tGdxpQBuiRNy",
  "key19": "4Rbz97ETnYbnRd7darQAz9jSs24PukT3zTwUJXdFgbJ4Cq4Zg3W6FMzLXagxkokHqyKycBEu3BnoA7xQuvSsF4Uo",
  "key20": "S7BSyyfgVEcGchn4BEEeardzhsJvwWB2sAW2J2s9bdSooqi8w1P46FnaKFt474gik6eskozLv6D273g2h6BfaYU",
  "key21": "3rpBBMbH13KZ8ynjVQctAZ4Wr6ikRhfDfbbb73yhvmMsLeph5qJMLeoDgVVyWpwE62vuzDsXHiNwutqXwX3YK1mT",
  "key22": "4tPZRPamQFY5HQhW3kAuSApF1TRdYm2aCe36kH6U5vAj3ZbfYksjwj7ETrHJ6joHgj82xywMCmBHrhfFbqUmxNEA",
  "key23": "5iECBfqZLgWoC2v5jmkf6F3dkwAWz3zCTsAajmLwjVj4SUAkxqiqWDQB9hPzwYZSimDb3Aouy2QDqKBvXgXXyrU5",
  "key24": "DYXDivbELQsK1DDNfcPprVfu84CQ1RSgteDngFpxLYz2h5XFkgR6KGyW3zw2EnX7vvDc2YKd9A82wJ29VAsGz57",
  "key25": "39iEPtzCukAiNsPjf4raKVjoaqh34eXAo4QEG58sEpdKrvfqQEerxS5h2NJ2wXQihZY5F1H2Jc7gCQ7GdPizNhpS",
  "key26": "zoVbW3zvhfEdWFnLMxfhu7gFY58itymcAnBgaJF6uRLzNtHZRybdXrBMsHXToKdWp2JrVKq9JojQEm4Lizs2sqX"
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
