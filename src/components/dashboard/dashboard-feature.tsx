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
    "zq799LrkEXk81Mr9Vh988U7bp4JApQPT3V5P2GinS3poKY3FVUfq9BtuQSWwauzYSMoV6BzRZq9QamWx6L8moP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPLfcXbHk5F2D6dDvSPX5rxitrcYZATA3AJhv6GUeKqfxJhTGxg7s52Wfyu94RqJpUk9m7F2eEPSXv7smVWEzqo",
  "key1": "ZPN9GQCabJszQnQzcgbB7aBmvMiUG9A2CFhha9Twjs7W8pi8ThuSNDQhmk5dJQ5czTcaZ5Xf2dJU6afSdNHCB1L",
  "key2": "256fuP297oG3aWQmseRPza6JYcFw7DH5dcSFTDnfE7j7rEEMVgRcAV2cPuqwRkWRA3qZwCwXYUVo7AMS6sZumYmn",
  "key3": "3kMCaD4RTnLAY1DGaYgCX8APmUNsAL1c5Tf9UWJtSE6QP8Yvnptw6PNGZ1TM8mtzM3YgCDFWrfXvWLRNCtSgJB3c",
  "key4": "3Ybhu9UWQe9Jx8SMVLkdz5mefwxhZwDERQb5jmQvQTcXs6CtmGrNT4Q3MafAeQ14KW9cYABpehav4J8pzhVPf6xj",
  "key5": "3b26Hkuk4LNJmUgpW8Rv4NECdYXkz19R4Ebmdg8CesmD7hhMN5XZo4BsPQZPD9KGdg1vy3J8pGg4Y82FBQx8nqwn",
  "key6": "3KAsCnKKTH29d4Yf2jrv49ksGfz4Ce7nFGSAqYX5nKTmXBnTB8davdVA5xXXWC5WuE9adL4SaneQLjmFTmXXxRK1",
  "key7": "4z331BjtLfDinwdnCRDUL782NMjAHws5fHE1xkv3MDouCKWFQPhko99N61pUAWQct8cWqgrEf7ycMZgZciGKMCLX",
  "key8": "6RZ7UonDB6L9fqV7vfoU5zWH5yyXdner6jDkzLygNt7XWgnf2ySJk3C8hQFH6oCaE6Tz7kA95AGQqQSuzY1HYfx",
  "key9": "4qLuBG3wGSbHataCvk4H3sPj4BQtNaDQgEspB3q2N2xqCrWMH9sXcM5qPKTfVTZhuobMGXjcTGGkfz1a2qb7aGpq",
  "key10": "sfy5Gc9ud8nYtVfFmV24BCjW2VfsEcJgbZsb6e7fAsUUWPPzU9vgYFL2UqyfnaBe5RAbjDvkd4HdTSaxeVkQeLC",
  "key11": "3GaZ7Rn44esEUQgMbJdfENjo2XpTxNFKYQeyuaCyHmSWs3roJCiEsXvwAKZx3vJsYUWjaYfDAwBKK8YZ92MHqEw9",
  "key12": "2rvsa6EtSJwgDknJjK4GJq6TKMPPpzqCwsg8h1HqKidmEtDjC218P1QyJCELVTasqu54w2ndfFGCXmqptiNTeScc",
  "key13": "3uGXbtLXAPjx6BJFCUxrYh6sHm4A8yuKLCdKvsaeWH263SsqNGLQMy2r6U3TXMcADcdKZvyaRWx8QiCyH4iXFJr8",
  "key14": "5unsbr1cjwdMQPVFLwhhn6GX7aRk1Q6myeMZzHwAdqJxR73tikENSPYj22Md3usEN1s7u1EG9NJn2Y1QJLyhv5U2",
  "key15": "2s9vgc6TBMtPM79rUJEMGVR1z6ND5ZuFkzNA1rDQjFMCQwRFMm1A4gzSkLK3nz8LbEs4czVkdYkxzfUcsY1joa9y",
  "key16": "4Yck6CGunNL6UuhyZ8vXZu6dMAk4E9r4hgD4asi35nUt8wTCypEm3F5U8BX78L4bKC41f5uzms6wypdVx8g3Kxs6",
  "key17": "4qAq5mBadoVNR11bxNTQcJQWmKqhuQfpCh3SjpDw2E6ywTjHDvFu9WL8AKQ5Yw1WMzw1gevtKYVZFqf2bk5HN7vg",
  "key18": "2XqwZu1gKAvevz7q7wXDnmeNGf9pjYRtUa2Z6Nbav9kTd2WufectNdXU6E1X5mGQHnpx4WxJi2VDy4UPuwKXBWGD",
  "key19": "4MzUgtv8zyP6NpRDWyGrP3yGinnv85wLWPvLD5vVNZLet2F8Nh7KwiMJUxo8G8fQa2rkFnLPyCw1AjQ4uLDGHRXq",
  "key20": "zvLYwByEFXSGsLr4y5UfxDX3hT7hYMMHePm9gvP1R3EvPp12xCZAB7ihV33BjsGqiSpaLvA7fwanSg95q4Shp9E",
  "key21": "4D4x2K6QJsif12BPeJyQBysoyzt47DJ2nZak451NmYkmdyPfv6xaLKKozD53XPMBef31k4uDwdQMPrg7pd6Eg62F",
  "key22": "36rabRmVyep1Rxcw8H5H61pEBctJ1N2rZRfBrPnwF5hnF1HZUzuR6oBBoVrtXj3kju31yEugwhHYxuuWkNCdaWe4",
  "key23": "2Hhv9136CFJGtdjX5vtKgXtNhKWrvdtEikDbCCwxc5U8uSTHCZgbVGbAKjJVJU5aMtn5ZQyLaRMtJUJujhvz6o1A",
  "key24": "3MmRjYp6Uuu8t48wEpf3E4fsw1wHT2Loiwbky7Xx6Zm2xPVPBndNnuNgQmZvd93Ja3nESbw2XAJPDy7nRSqbwJa5",
  "key25": "EJ6XPqXRicYaU3dvxTDpr29LPWG7tVDETGV6qXDps2Kr51XzQc4rQC5egmbz6X6tKJj9uJeKbmK4ygLiweQdQQm",
  "key26": "bmpjVNq3GvFZW5s21jdHemm9sPqjh8HWv7okEm5xvy71oANXdaZCbeRt3Fp9s5vLQUxFm7JZiVG6CP7sfKq6s2F"
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
