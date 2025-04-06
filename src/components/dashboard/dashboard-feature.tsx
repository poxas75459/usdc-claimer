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
    "3aadV1L8HT4s3U34oB3RWPkQr3Z7XkyGu13RoWm31yAm6u1E4ETYP8j6GeDn1jqjjmNMG3r9juuxQkPerybWgzAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGCxRJaPMFPECAkhePgBGtL943xrj3cVezhQ5aE6eYvtaYtyQCTYGYHkM5fx45HPUjKdo9NU7nS5r2Rnk4U3nAt",
  "key1": "mzysreQQ4KcZ45ySKDZz7jAiPyYNQFgrQrSvNhKYfpN1qgMn2vjAwKcK8AYRdwQNHy82xww5Kz2Gv8wd8Faq4G6",
  "key2": "2Lkmx6yRDBaBhdu7ne1tYR3R7mfNTQhEFEGGS6yvNQkDf6tLyVeLRNfsqEkEfrbXedSsv6sttiK5MgVor5G13LbT",
  "key3": "6292Lg2ZosLpYu3cDCZcT27Ba8dasctxuj8Ed1a14UqkMSo6WJqg6t1MTEVGyXNsTdyoVVUYv964X7wowxdX47UZ",
  "key4": "2Coo3o4KbGyCoDDoyJq32NPtCzNtjg4XyyyvLR5hMCgEPGW1nJ7v9TYyMQC1dXRzH5aB1pfonTkwh2WQjkTimWsP",
  "key5": "4GjQzVssuE8m52KxuwSADKqMbqTqqmCSW1u8bPjAxZx9zvoN36TCU5JXHNnaknVKGNCJqMc8strS2pDrMQYejAGc",
  "key6": "5zxwT4ve4S7ujqfr2g9v4HebVAiEsdiVi6pwiztWPts8NaA6tTL4jBj7Wcxz2RGrsF3XRAxJxNMeBNRBjPZqQvvU",
  "key7": "PESMibxgcgCqUtRtQfsxvdUb7E7dTUfYyVPZ8aApzhfTGeSfP8cgQG8DXbft9bL2SkYUs7Giew8GWA7RE5utPX3",
  "key8": "4tAHR971STCW2fwGiKTbeV5X8WEY1soVTaKuvQuvRapTRFfFeBanKa7g9eKtuMuYtnWbqFqx7pE1VPLhQCTgqpU6",
  "key9": "dup2xM6p3wdvJmet9hE8rMDnAvam9Bu29bJ7CwEM6fnGUGB9zYJP8ogSfsfzUf9PQ2U4x3jkkavPL6V2kKEXnhF",
  "key10": "61UWiXwUgbJryXppyP2zHAr3ziCyTBgXvc25hJMihDu5skPJZ8WzUi41dvo3MFo7KXNvpWCDZ4qMujQtP3GuWKFe",
  "key11": "vHnTsV75iWssZi15XV2gYcDLsPVVpH3w2sd546PT6AQ2pKSAy1FBUCgZc6zYzjgLaKeBTA9aFqfKjbytmkwbU8r",
  "key12": "2uvaVzUexP2X4yDsaiPcW9xmeH4Bj1uPJt5hED16xHxXXDr96f2VAa1RVwwG3jjKp4czkwoHNZjXiJY5zvoHUed",
  "key13": "26KvqtMdgqn1hgF3jueUTZjJx6nMLLtpXaHqCRbB5fujzkEfy8QqWyCmKTVBUMtzWu3UvQhTJ7sSNrMagRdMeXuf",
  "key14": "H4d1nHdJMUqAd7ZbGwxRz62CquEor5co394v67gfnRE4vxhTWNZgcZUtXi8kEF7HXiJfbtefFFk4apbL7w6WtCA",
  "key15": "Ec756YJdnvHJjRHMt1jzDYpjtSggqV1LHFW5MyVyYhaUiTXGqNBANLwNzK85ejKZiao6MHpPAApztTd8LDrsDRh",
  "key16": "2MqM6MaVvZWF1jFHMtDCjdgb5uX6gxL8cEfXtAe869vSFpCkVezPN8JzTCUpYpXFeaeyjCH5yeXthsL5oQG4LGyt",
  "key17": "jahNDaxq2ZNhcPRRtPCkGPDAA8qJ6JDVKVFNYCaAGL2jCYD2JfyXEbYidH4QYoQ4vhB46z1YvUTN6r2sf6P5NQZ",
  "key18": "2xFJcJB28WFbW3dhr7RC6Mr9JzacyTTA33sCDYPfRN9UvWzxm4YRTzr6QG7Exz2Jq1tFH3LJ12kbhpMmLedpKgxo",
  "key19": "4o8ZxNFm2TDpw2uZvgSFxkzNLDZhmgqLUcAARRYfv8BFrjEKgaPbN6PATW4BXD8cSqt6YidUozrT95SoNDFoddc3",
  "key20": "26g998rp8mWNcv54xXDRc33RntZcAKazsdkVVBM5Lh4iyVUVRnTuZavz5cwpuajQu7WUdqNDh7tzAUgW6BAdzFyJ",
  "key21": "5SGfBM5XtgxzQCcjXvXUjDaHKzC537RsKgTR1juX5WV3r4WCrDzSjMh5TM4Q4YQ4p6FFhPWP9gSvZpmN8amPg1JZ",
  "key22": "4W695Buj3fivFNDJ219Ba2kYmAXZtpC6bAXiNP5fVhYKhwD3c9nSEZtf9mtMvvRXP8ez8Y9fjfJ4NJpLEofTDKh9",
  "key23": "3vieGDZvvyr8tqcoopYLeAEUrnRYiCz251iNw8Z2QYeQ3aUkEoLC1Qyr13EA62wz52m73tKtYJvXX1EiRWsA66bL",
  "key24": "3faTTwKUn5Hhz7Le6RLxpnCWN158dDcqRCLaWfZmb95J5DpgdVgaja9zXncAD96bG5LRW3TTkz9AfYiw4jeHrE5K",
  "key25": "5zNasDHb7ojeApsRYRRDhPiWTsanVMuUdKZNWJ4bvcyxRcGxWxT5J5dA7vM4MifWuJEohxiVPKSKT6d4CY6WUXVU",
  "key26": "25HkTFZdKvE8Z896YQcvz81fvGaptYKC6HXpcTvthnSSjqAoJnJ5zewV15q1as7SiRqyUtuTBhfvPnGSKsm9zB8d",
  "key27": "5J3EL6b1um9kANzoqwbkZWSWkS9cVudUB78nXUv9uVDxdLQdhTsG2ND9Hgv1Xrft34FuqXfyAnTwK1Dn2oRFc2LM",
  "key28": "3L7QDwJF9tziamcLy76mufWPU26JD32YWZcgLXgG3R2i6MCXaPxDsMTvZwHMMsbxpnAHXRmWtX9iK83DUP7CsHjp"
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
