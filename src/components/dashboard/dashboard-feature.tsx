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
    "3sEqPN95SBTpT2uvabTNc3B72gyh3fWbj9m3ABXeze1GnV1c8MXJB6MZhQZm2rJJLSJvmZquY3aDptzDzHTKPL91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6aWDd8ex8GfR62LMg2SZS68vocfiVnA9RwwVaWS3ZP8B3Aor46Q5RHNr1UqhfqsyQtbLVXXmbWnRGqD2ddfuwn",
  "key1": "5DrqyqWNn83XpeCsKo9ofbaPTCQDGge4ap6inwicJJgpuAktgfzqDYc1hLTTLHQ3bF66X5GGCrLyeowkNevpPrx",
  "key2": "2VcVqNksBWfh9L2xEFj5D2YfV4REd8xWdtYNR8eiNiahtrLNmB78HTKGhbhT4oEmaSAtjHVT1hjDhWLAdoozTaZe",
  "key3": "5ZwQzeFem7RgYrFHK89oRmbXBbNWZns9gkEZ8jU7w4TahFePJJeEaXPB4CpEWdvUJPaRvEc4CtSD7fhnHcWJpD3J",
  "key4": "4ETbz2ynNqEugfLBg8LHKdGpzdM1x9zNpD44ZMKjZfGEFHBsBG4PYto1AwqNSVbxNdQft5btt85XryNpB171wKhc",
  "key5": "v7qxjRdZ6fwgNjigogPySyBone5xG8JftcWoGckzdNycVir9w7RnkP6wFPNQeRV9pGVMWGBvRgBneHwtekDUW9F",
  "key6": "4rC1uK8g3m6BNH3MrXsgYZsMpb8KtRndhBw5gq7RMVQB3Pjpbj9PZdQ8u2wFitfcU4ssHXWvnqLBuzZAR2HTWEo9",
  "key7": "4GoPD4BQPX1jYF8Cbf23mPdFxsaAK5opqvsdhNUE8jVRKpdkCY5VBtadu7WDYyDBTB5aoYDFBpsrqSmVZ7Hiaum4",
  "key8": "2551dWR3Y9rbCaexDPKvThnPhpUZeZszcRBWPfGVpczTszjFN75tTZWaBQGhEw5HhyYqkmJ7cY2r9BojiTu9WNdo",
  "key9": "3GzYmR88baSD6sLM1x1PNWcg8Yhf3G2YqQfZwBxeXkJ9PCK1UcnoKKLBLR8G8CBXjZa7v9iX8gqoJx7KoGsNFrYe",
  "key10": "3g3MAjtNQL1c3wYboVCDQEJ9W2kbFZsBJACmKqaHKeb8Gn2sEpok5S8BNC4XQWwcP6mjYqMVAFt7x3ANyKGypevR",
  "key11": "BxYfBm3UxYhx2FyxnoZ1U83s52XW8EPwERUrifwwJuzDy84fXcpqq3umoWi4sFo2F9iXfw33rHofteBBhxqQvqx",
  "key12": "25hEo33WLQNzQPaxVHtmKzNqyJeK9pvKApwmNq7Cn7EbMeW1UiHs3Q4wQ9KRo751qyQmZDYn1LwTWVxwTjvqdWQb",
  "key13": "4ECu11YcEdHVLVMCaxt7HRAYdgAmaJ2PKHuWgn22F7nCqYy5bNS4rAqxMG8x3dpKiSB6ADo2ZPiy8p4tfeL7do7d",
  "key14": "3PUYDsivsjctwF342ZLi63rALKTZQMfANpHHPhUMyoMm24oeoCPN4ELELm19ZB6iVwwg8rah8wcEmC9NeU6zDm9",
  "key15": "4Y1ND9g4cKLkzSCL2iYwfTP7tyeEdGAuinV31SKkYw4rt6mYJzT9Us5JZzQdzaLpHjYP6NemH3G2qRS5dMo5wvSm",
  "key16": "5WrGYb62sAkgi59tgyY5T3x2r8UDktg9kwUuM2pJkHvYa3z38h66BJojBWPsP6dtpjUrmj9fmrtKsVaVpWxY1aLh",
  "key17": "3tR4Xyw9dBy63Ey57QGCE4yBYSakQ6gTSfwfgqhKTpm3Y4TpaYQzsV5h5jViQvdbeae5oXHB2FBtqZ4aA1XkfMfc",
  "key18": "35Hd8Ep94WzqAoV17M5cqDAtP3bA3LsLX2AFTsaPNDNhKjoPmgaLPNA41z695zmiSPDpkncNeVSQZ1h8oXRhgPwz",
  "key19": "2LAQwuZ1BtuuXtynzynBas9mYL79HsS1YXpWdjaadP7sSCGPgXUfDWhLxBkNZV7cr9Z3bqgshrUnfcDMgCb7WjTX",
  "key20": "4mNtigLe9bDRyTLHgyFrEqdk27NTArdNB37XGc6mLsmJhSdmrR9WL8QdBkr1TauHcf8EsUterJnTWEeqpqTnN6AQ",
  "key21": "5bMZEAFidifPKC12jmotaHsRj4LHaUy5Q5nefrjRvbVCUBBVHhx2eG7zoLEfTsat9D1yT23i8GHwyudcSctjT2b8",
  "key22": "qW3rV6pR2QXyJt1EPaLHmmPpCdstLwg3gPECQC6BVTdUuQnnVQPzW9xB8zspfQjYX3AAmjrMAMg2qKXeCEsyH9s",
  "key23": "35Jgkv8nn8F2C9qEkJvU7DX5kaQX3S41Fp9y7sfiwjRwgN1f76VY2UeNyNAMVaLbs9EYqDxewBLhMp9YmicUYD4a",
  "key24": "2AzLZozWoxjnPjAh3BtEnyyd4NcWLwQkuJCPXvm9TmCHTrcvNeeMGzwCbHbYBq6hep1ngx1uqcSE75Ns2sDfPQA6",
  "key25": "4uPB9nBjbpMZaBTpjpzDE4CAgJRDfw2F85wqAMy8Wdv6FDCUyR9RzxjaQWS6bH3PmweH7VEmGYy7SwwAxwGvhJ9e",
  "key26": "66eAsR6W96x5EreQTuNs7ezne55be9nCkm33WfwHUa3QnSXdKTqW6TaLMhJp1yHntAE5bVJcpNpG4MrJ8DaQTP62"
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
