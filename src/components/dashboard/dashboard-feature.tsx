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
    "2jF36ZWKtFtM3b9pZWJRYweU1Y62h8BwsS8syC5NN7fnkr1DTKorZxFnwGyaLUNigzm5rNvWAqY3cNPx1v7TArEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejcxrQnfFcXtLzTnmVNepSJVFNQCRWDKxH4fkX3tzwPJmLVjsYG9QvBZMjkwfSxiDft1BUxHU4P7mtUMgbZQdFK",
  "key1": "5Dnp9dBhqZY9hfLxxGg7yWRr3ipHPX1MfKGGuDvV7hJKWsM5tgyJ6HDquz132D6oRmto6Y9xvLX3PdLyDyrENePF",
  "key2": "4yYtj6yTKKxMFGBr4ewmqb7hBzTtFA9wdj43vV9JBmib3vgJSBP25CX5BgsqCtHqPPUQzYpQzs6piU12GS3kDvfF",
  "key3": "5tJx1FAaLCszkwxzi1AUppG7ri1sERLiwdYBnLc96ZBybKRgienHtsac6HQNz6ydbKXaaYMWqR4Aqykh98X461NS",
  "key4": "57STL7RrC8X119upykjfYyQPZ5UTis6KdCjcYTMi2ZmtLHkb5x9EEugymZLLt3zcJaykhYwDLneUT7XC5Fmz1PGh",
  "key5": "2TFZLX6cwCWhiFG4V9F2ezqip5RroEDmBWrgbUMfUfKxs4ucE1SwTqiffYpXWKYymgScFige2NRi7fUW6Wu4W1G4",
  "key6": "2wHHSwouGJ9dtjaprjorJetPUN6akjDurDU2JcbcCwKzTxEAGWNMdBZ91xp1GEyd3ZEv5rLT2pwJo8Atp29ubtbo",
  "key7": "43XLFgGgeFoK3d4MjZWDiQEMb6yYUrWpAzEjbRzD6cfG4q78Xs2y5HgeCREcjq8jCosj5Gtmb5wAtXoHynKeqSNQ",
  "key8": "2dPP2ssaBpe9KvwhPZy5ELEzuCw9KrTBzZ6ePxL3aFvWKPP7XYrSMY5jEEAD7Hk7fg8j5UPeRBMpdikv77m9874x",
  "key9": "3UdQPSwxsDfXkNaySnZfDik3QpGsL5kSMiPyoykn7ALtdGnikqF2t4U8nc2ft9GgqiS2cWvpkc9YMDoTKY8nKAEB",
  "key10": "2sYurLV41DjZnktHu7rnFmiCdMCFHjSER2SfA5TAeKg49Q93TZkRBmRxjDYqxyzbUUPVey8LpK5vfcmjwKb4pCaL",
  "key11": "3WVDNQtPdFKRbUKVe2XsaJ7Ft7H7oWn7zMhQQactX2nXRcozi7nJYj8J1bzsBn3uc3AH3B1wFdtd3YzCN4JnVfMb",
  "key12": "2mkh1anqCAsoLKvULongsDzDgyijzL4gjBXyYtm163F1HviuvxnbANNmejedtgA8CoZrfwsrfQrKDW4wJuZjjFEB",
  "key13": "2BQ373SM2xXSEFdQ9pxhe29zwNnSBEN33GqWB6roARrSbW7YTDhB2EaDB2uj2mZdz8ps6zrqQ6vpTBubWjRdgE23",
  "key14": "4YW8efN4G3chK1qCFjMF7dbZpvbALFJ2he3YQGgSfvvHt8EYMh5Ltruep3CaT5wzSp5KyE5o8f38rPoRBmTN4VZu",
  "key15": "4mfdVxV1esUc2DHUurFNAFDUb6vExbyYZkHFFEZBCjFkJdnBkNdvgoUVQDcxLJWMUVNpu799UxTRQBeQBgYdUras",
  "key16": "2AidJk9t37gCEgwspS4MBNZRsxx8nQ4tWUqY5qjyDEBrwhLNyDETTZ7xDo1s7JV1aq1dynjwpgFpmLZhErQo7AGJ",
  "key17": "3b3QX5dayLiJ3MGYzeMvg7tuUPuJ2BkpzdboNJBfUA3pRay9FNsPGbJ3tduSvsAHusGh6W92Zpowdy3cfR43w8cs",
  "key18": "2E4PP5WwBxgX3br8prwhikfAvMfXJdJjXAU7b4hbLHJAyFJaKenmwymK8iQhFxmdT5E5hzijqYJX4CugrK3jVf6e",
  "key19": "2LCCQhJrQK2EZzYj8nnG9xMo7oCz44vfbCS9RhBfbJGzBLNn197FrxE1jwNC5oAbw8Wy4cBLFVcvfEBHX8WGny5w",
  "key20": "4K4dVqoUydXEiKo7evBkXUKbHRwE7zQJyZ6kGir8azTjwRzsqLqrrs4hnnRA3jTx73EYy9HcBneYBcpqnd5gHvPQ",
  "key21": "9F1oN79xQFCxtwSg6cE9yosxdc7H2pB1vscr9f9hVYENxGsGV2jmMVGEJxGk39YMZdKdLY69eqmUyUDK2Vk5U7K",
  "key22": "5ujYBwxWmUAsmXDsPN1tp7keEsVUi9wBKETpvwjz3rQ5hMp7VFKZR4XWDvntgXfHiPQFWA9yB8RSEJUctE5ysDnB",
  "key23": "4Dpqjir6w2XgviB9QVkTBQREzDuuvJRyDq791dY8LFtfKDxSaendHsvwkhVxmoP4eJDAW4y71dJYgvXnBKkjkTGj",
  "key24": "rRkRkbbK4FkXwNNChN5fFGt5ZuAVXefDde3e9DGNA3emHfZPoKzFz9Uefk4hrULyK9eK7AvVXRVgd9nbwbzCUeq",
  "key25": "2q4tqoCkHxyvjogjc1KbYoEfjj2hSifvMGjw1kgvb82bMx5vYQuJ7tzUFaATXG7xWirTZcovqUHjohF3LzwMoKcn",
  "key26": "3KAFoNved4NFS6z9YogDgin885TsPWB4pKwfww7xYiwwJeyRCgVFCESLg3TrGkBkoRHiNarHmdNhYjzm8wnHDmNi",
  "key27": "2USa7XDsG5cbASFVazU6V9VMn8cGKGvghJYf1dXrNPNNqttKAE5ESWhjwfK9HXEuh1nY5maG1vfqMYrsdjT5aCsd",
  "key28": "35iYVAjBb1uUEujjf3TMciRYLqjQxh2rP6oAdGYVayToZuSV6umuixB9hbteNTZpXbXfx8S3B7tN1LtTUX7QxKVP",
  "key29": "5vSKLvuBAw9r2kNsuwEoAjynAjjLTuaTmGsEWP8nB6v1VBrswXmRfBmRRPH1T1UZdzSY89XvfXcb6gMxS99G9xdj",
  "key30": "65Gae3DmW43wjpnMmDqzPs4QtpqaGTfYNC7Y2fo9LAvnWTA9KrzYGLW92pxJ3AGF6BW9HRPkeCE2cznvkoJgnip9"
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
