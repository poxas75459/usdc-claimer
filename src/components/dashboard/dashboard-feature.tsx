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
    "5n8dT3ibma5iteXwhuij64KL59dHgHku8mrRJ6zDTNb1Q6vkeazyi6mfF12iJ6ruNWQJf94Nfuo3xHr1PhsWEEZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqnhfXCju4jcBKAtVNGhaBgYE8eRrD1uJkTv9Fas1Rv6BtSKX7heZjd76oSWKMypWzcPhSbfScrCsQz9t9ToAGA",
  "key1": "3ghAFpPbP9pgNBbwuykBG97taDDT9NZzCMYbR4AYQqTjq52C4tZdmgCvndkKspopwpzdvqCedACVsZF4FkZvVcfh",
  "key2": "4GUZj5WvMyxf71eAEpsN6Ymo8QufRviEbheFjJ7zFuJGaFLbK5gZ4UWtbBUtupEwqqhqzcJd4rbfiH7FmxEZayni",
  "key3": "7ZHSWvcvBmDJQoNUtVGhAUgG8VFPb8az8JPkLgqUMmViEWe5HzyWaT75hngMiH4Cvq6XNjV8pFrKtznE2onYvKk",
  "key4": "2epWEeu8mx45X7UANVrswYEtkJVAMv3eNCdahhuiein3rho314AUXS1xDseghtijkDLbSpnkNjSVyRij15f41B9x",
  "key5": "3KkBC2PLLcVzFTu75Co1X7TxBT8nbosaBZdXV38rZ6D5BuMSUDNWfR4QxhS9pVxnVnZjYE5YRvHVf8ztsHdmFEL4",
  "key6": "51DYcjMoTKN8UEF95uXr4ZtSooFidQv2T8jZYykcNxFGREpLKpMd9e3mpN9n5mH3R2NHXNHbDYJyM84Y4M45Aeyd",
  "key7": "4qDaGVC8caeRVusjAT8zSGzXQ1hVq176FapuDiS6wWmxoNQMfhr4njgjMB6M9DvY29ZAMFf1P1S9UTrhtK4T8UpX",
  "key8": "MJm1qYxasWvw38vk3hwM2hJx3zmm32oYkpXRc5f8fL5TddSv7wPhgQDbKWWGufnEuMrWXEq1MERUQf7qNeB5PGE",
  "key9": "3YJ2Nc5CuisuhgciMEwTRgTeuckekKzhctcoDj3KhY6MBN9AxZLvy2UhsmQcfQ9VSJ2H638WGB9JypgE3VJcZKMg",
  "key10": "3CFf5Yk79qeygPQ3HRsKbGMwYo4gge6NZ2JcVeawgcEkRfNNZ3a3QhcbGJimKZna137iCVtTKzcbAteenwWs7249",
  "key11": "3CaipwFLfDiMcqMqj8Pf6pDkHTnHipC9hZ2XebVsjjXiP6ZAxEC6GrnQJBQBxDA8qQtCgAE9EVAFfcN8kCzDYGYM",
  "key12": "4kVWKSBk7rdx1QZHudiRve8t49D23jvPg7ZLafdv3c4eeoRMMCGFAZBXH3vCvYCHcJD5xnPLW3uL1S9sNGQH1Q6z",
  "key13": "66n2SnZ7w241GcLtnZctuwXonPW3e6t1dMHn9u1T5d8gemxKaX57hTAufF2PYkLbppET9YvpQRmPwQk8EiNThNXs",
  "key14": "qEaAZAgmfroeLFBEpNpvWtNLmPwPnXxExhAc9C9EyP3uL2WoWbjbxiSfPPWP1W8omUJZr3ELfuz583FXAvrKUNw",
  "key15": "3xoq1VBJ8wBXtyRwoLubd4MPrdCfy6Km1vNTETCSAzii3JodFxrXSY1d8uMxcqCUFv7xuSXqEE7SrzxaaH3W7q1D",
  "key16": "2kDdAcpEoLL3CLccCBXWfp3tQ52gqS5tfaNMK4FTJmtLRhLxNGSR475n8LAPbVKTL4nBUadkL8JhmNeDdfkE88zt",
  "key17": "27GUjx7Esupn4C6d1GhEPbrtWQPS87NTzaPS9WyZFuHEfymaQkQxvqekB3sabXGAFR46wV2enByuVt6pHzM9ohH5",
  "key18": "4CoaUc2y75LwcTFdAoYwZzi2eEgGHgXwWfhRaSYqtf3Q6CQac7Pw8BPNjKQkqiM5yHLk1HcSdjQC6wjQKeBmUqML",
  "key19": "A7CDN7ovRo7TQe2YML9x35wdKnm3H5cGU2kkw3tiSwUcRHszfUKBNhBSNP66exT3gA4B4ub1Xme5eHrTdDr7qUx",
  "key20": "38N5U2VR5DeAaYKmHfPfPcomrUM1TsUq47okiyTMZqH45c1SVHReZShmZod6dL3kcGAoYWf11ZXj6aMGBrrWcynZ",
  "key21": "2hzHY645QTg4Eg136G52iF9LsUTdrjv6X32KGGAfKJ8zLrfg3RgDHefjhuZS7E6UfpQnzRSNAb1sv9QMri6aB3Tj",
  "key22": "4Xx6wnK3fmVeEbvw3Hh8diK44vXammEwcEwwKotApjiMMQXzSDY7bSX1KsCbZXJJfyzbEjXc1Lrx7otkvVWTEFeA",
  "key23": "7JJ6ZMf3y9DuYAX73RanLbVxLHq6mMW1r2DYqCGtZfq4HjdxUpE6yPzB2vFXxULx64CyqK51oZhdrbPxV6fii8v",
  "key24": "4zjcamSgA1za7RvtX7YB5XqHfdN1BZSnjtWAza4m1aUfjK6mUoKGPxXTjC1M4iBY8LcUPEYj8LQt9XTF7gJHbgtF",
  "key25": "5sq4N6v3CgepCMfPhwoxZWZFMWKyGDsncWEkmaBAMM8uFaYN2AQYDRmyeWGrhbWFeZvQHyEG1HUeJReBLHsBnhg6",
  "key26": "4ZoKEHmUMUgidC9ZRmqezgXC8Vn7SGUWf43jq7EkJCYtUiFt3Kn1MZHAb3aopEHU5uym7Ae6QtT55EZNBZWNFnnF",
  "key27": "HC6m8WZNToiUTvXxCiSnLbha2pZQ4cGoLWWb4XcJibfpqKigQadz48MkvaazRq2p84NgMupDRD5ooHJRXRtzHRU",
  "key28": "2BBh4s9LfyKsQXpv2XuiT53Ad1qT9FQDfdJwQbCnPKbVqDTSWveQ6Cn8oPrek2vKt5UZJad1fp4xouHyrkXFwgCW",
  "key29": "3aE3TpdmFG3ZekUUZHYwTqHnUJjV6bogWJsiQs7DsQc7CcgE5jFcJCTFtuZrroQDEPAx6UyGRQGiLm4j9YsteGra",
  "key30": "r8AxQRdqEuHFRBjS1972fmsoSMRwYkAZdr2asZk9pVEvCD6hJUvNgeGp3gtJzWthM5RHioCHcgGpsdW5p84vv4V",
  "key31": "44MvcaohhXTreSGVwnjWfQcqK1yKBLB4qekPexasNSkwhVLbcnSvJC5xdKZiEgo9JjFaMeexSVbBm67XZjbVy25k",
  "key32": "53sQvvc4H4SSPoxkQKUe1ACJQShdKpitLssk2tcumUCEm1j3faC3kDNrUv9JTpm3HDNTSQE2Fc3nVSevyGM8uiXt",
  "key33": "2M3qMgTmYpvCARgQqCpLH4wK4uiwHZQP3A9qiqemG3ajHuGb22c2AZ2wD8BFtLfPUfwwSSc9Md3SFfxPK6t3i9Ya",
  "key34": "3JEnZR1szy71ji1dpHbrEQbJTbuKknoYrrmyHuZaVG4A4BVkVt7iA94taw3zmn826bCraZcUqD5BR5o7pfVksv3c",
  "key35": "2PwT9h9ThRQXaL6rAjebUb9znERyp7HwXtej8v2dM17eRTr9KUti1hESZpDunb8FUVdLPQG6ju8S7cA65kjF9wqM",
  "key36": "9zjFyirWS1KNBvxtg1piTYwVHX6yF8cMsSHmowi3zfZHn3MYYXrCEnvURiiSDCc3e5zQ8Dd85vjnfJxaRBW88KL"
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
