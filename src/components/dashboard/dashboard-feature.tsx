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
    "5VERouTWdwYwMvk7tbEVxRWVFXCNUPLktx2yx55Yt6xSfweo6mBUFDzfPa6ZFTWSV1kzMFCtj8hsCMGUWocKsuef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XhBhwFT1mpR4XtqL2KcUd9VcCPVfFQT8Z4q3h5QcnqWJqnD27hXdJb8RpvmM6JbrQtSVZhDhgTDEtym3GkcYmwP",
  "key1": "2Sq934d2j2m1pgQbP9o4HmtZxz9fpe91rJdrVSwy9AUAkAup1qx5Rx6bDADd2ZR7MRJgs2TWxViVfCiQoxomHnqL",
  "key2": "5icjNf7A1uTeyXQmkq9UnJjMSk3NN2bjvEfBrbBkY8YF63HpA2NCWtfyLEscU1LArpBEzoNALWs69CRpUBdVvxUt",
  "key3": "3jLa4mJPrjga6iHBn5bwnnnfE3DpMyLgYJgV3XXG1Z6jBbUYGBny6u7R8HJkJEQMiGcFdgNzjxYYDXipJ4LJLuc3",
  "key4": "3kEWVQpq36h8f6XQq1d3ZFvwqmoE9aBqEjenf1nQgvYBS6TT3YtPuZtc3qzWj7kGY1SNBDB4JTJodWyMxvPcym1C",
  "key5": "Hw93D3htF2pwmgAEj3GFa9o43MS4fQAgbuTG5RNu7yemcjWLvxqUnfwpLtmruyga9dUfHgLMCgyX4oWh7w2XKAP",
  "key6": "4Tv2ZjYfgDKMvk5hZ8ssjk7JS8KgDuiArf3sxnJHfHZQ6st6PZtqxSVNoQdcd9VE1cnvLSKadHHpo51UBni8FqVh",
  "key7": "vU3nNh9xsvvk7ph9df4HmPdLQrB5gdBGxwBzHgMPfFVY4APhRPCxLXBZX5bavb6wFXge6KpFepbSdnto1YMeCQA",
  "key8": "3QYsSExCdDVPJciAhzVoMqbkyqucq5166SvputwdPSHv7Wf4Cs82RcV3sGqAMnpxMXZzUdFbAHaJj7AmbgUKjCic",
  "key9": "4j7iAZb1HZRgTTxeTfn7RrrddFSxW6DFugTUcUmJfqTBFQqVNP4J88KmaMAbfCx6dbP6TFFXQkjQjreAu8Tk8psZ",
  "key10": "628HLs7qBt5cULZJv8aAqSBvvLKXGCsrnKi7BPvK1ArVuUxu89GXnkXa9JUKv7yRRM9futnZYbSPVoEGcPR1R9TH",
  "key11": "2PoCEQrQ66mrAqqXnPW3CtUQ5JwBShXetm4Vj2gyELyBBVTgXXtMYPHFyVpxUp1c9sFoEdfPKq2jD664oMuKrpjc",
  "key12": "5vgfyncC3YqoV5qP26cxTWXea7K1tjWnD6WcQLLJVXzGpEDGopi2RXFQmkXevxr2ecuvUhmbJqULjeeej86m3eUW",
  "key13": "5F5yoQ16Poiw9JfwDjAFam8FnUHT7tkW7UGEx6r66Xia7XRc8CEwVjFgGLWYustnTjg6q1oKoZ2n3eFvWmr73Y7s",
  "key14": "5icmKPE17hSoKacxaAtyn2HvGgpzZGs2Hmu6wXxmPZFdXy9CX7SYbcfDYbPR6AmNsNeUST58y53W5eHvvMt7DE5C",
  "key15": "4mJ8C5vPY5Y2d4HLwLD9X1hqvaiHpbhtqG94eyquSHjdgfUt8MN4oyRFDw5vsQCZYcvvvXadLqkD9UxF6KkAp391",
  "key16": "5f5DBDuYWfDFDraxKuDaLdmo5wTezheDdwnaASmmjS8RybYeHgsQnNgFDnVhsBPGUHZDAs6Y3ca69ASCBTDRUBzj",
  "key17": "4hrnVUjgt7w5TyGN9tjF6GBEm7sBAtiqTJMJCX7VYYw3vfC4nzRjAKoHNfNpdXCA1acvPsvPDKJdLawEShUWDCuE",
  "key18": "5HPbJKT9BHeV7EbxErrArdQoHUBv7seKPZbk2bjKLFar4gpQnZ2e7AFtTDAw9nciFLSnX1bFYUY8PwySz6wSwTvZ",
  "key19": "4hVcpmHa8zug6zTbC4yQJxNJFCp2ky8mZjzV44e2vFaykpjdsfKkzNdWfi9UMV5QTErKwRmdD7XHVGpsM5KMUemY",
  "key20": "3HMyAZmkm2JjNwvGF8qLe913TehPa2zxvyrinaKNuywN2ikoyo9ixTqdcNjh56g5azPgSrwNjYxJrtBy2Zeufy12",
  "key21": "4Qsu5DiKwr8vCJ2SSBBvrErnqCkPmvV1wDvvPrn9cjjLwSEP1dzb46N1S53ydQzz2DENhZDKCnURaRzMr2w71oWd",
  "key22": "28XwtUpYQYCEWShMdX6BKYpShsiGP68RJm2uEu3bUP46zxYD7RGoybNcAvZsPqv1nYiqAHXgCML9hTqcPZpWZHgn",
  "key23": "5X9tns3mA7RBNNGrNRovCKziF6o2HQqAtEFjZM7WSQxc128pxRkZ579mL6ctDZvt1bhYoFzChRwbpnNheaGUzErM",
  "key24": "6V2W6FUTWEKWwJZfrGTX8hKa3b6BVM1PzvoDvFo9uNt1aaEhd3MMvoCcZg5HMuvKa9oUtXgVsCcMPnkrHVavnFb",
  "key25": "2gEcoyAXmfBjEiHXTZH9skfwosrVaWcvP72TbvGZin1CVct6TfoXk6zfrBpMGCoC4x9GXfvpxyya3YFY2xexjHa7",
  "key26": "2rcocHESbsQrQQNyuhvow5kQmWDcsDdVV8SXADJtoLKEAtYiwrSnLZpckYy4adyWJKBz4ty9i34xJsLX5nwtDC8Y",
  "key27": "67Ao86yAKRMWvvXuXDoLA3982AbH2HqdKzziH6TKGFZD56bc4wP2ZxYoJumHd2mWaa3UvToGrQyXSeN8tySuWLL2",
  "key28": "2AuCdUqfZ8nYmnqkf3g1S5Pq8LQvcnpaA1HNpVqDcjxH6Mdneb5Ngas91jggGC1mAmLin4uaod2atkgUGUCxv1Gi",
  "key29": "4WuPc1oqnkRgRhMvJHCn96dCArpwEFhVTAdbQXiBU8kwjQNXDqeaNQdymtiytjcq8hD6m9jsQgvq9LG7vRsTn7zK"
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
