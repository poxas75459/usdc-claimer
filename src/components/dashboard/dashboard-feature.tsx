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
    "2ACB4LarRdArBY353r7u6RNrLLa1RBhJLavXyB8RqMJGb9ApaCX4nqhQuz1uD6hgbT6ET772PD9nW4nf8rdpuHdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDrAkJpgHu8oNoNintvQ6eeNfYUjL4iAMPW9bvD8pLgCihckAEkAzXD4QvJAS7oo1pg2SzaJLQ2iPE8XpYmvJkW",
  "key1": "51hLfe1BU7nsfexqJbCQZwDmJrvcyzntxU6GiSC1oLkcSzYYu6qjpzNKgiQknS1VdLZ3s6E5wPH1ZXr2yJcizXaD",
  "key2": "4EXHLjRGbnC3LZN9Rhfn8NSmWneJLBD87FnhLS2KoH7K1UhF9m6NKJ6vxwUkV2xAZgYDgoyRQLNztyLUR6DKG2Z3",
  "key3": "qqvetmMVzdbWYSVBjvmrPnnK5dVswpy2iKsXgprpUwSvGnSN6LEr8qnjbE7HC3dCFLEo38H4z75u6L18VUBW9u3",
  "key4": "63dEpcxxygXbPtLFKUZQEg2fQWUykW42x59NKiKzjZfcJZp3yHQAfZehzL6PUcGp2AY1pQza7fyp6Lf9YWP73hHy",
  "key5": "4XrPHU8iR3Kqa3imyASy8FFCvH6BzrwL6jVDQjyY83SsuN8VvGWR799d8h192kffAdWyMweNBNtJ1viefau9PZR2",
  "key6": "3JbhVo2yiupTWpNZbKQuSToAGgYzc14CjEZYXXBewCDuHnaFaRnVVcWNuKoDSQCd8tMBFHqe5SFAM8VDThgvqDt5",
  "key7": "5e3Y1SxgHV9yq54AD6ZhpWjjMBHRQZW2wsjTHJrm5NRYfK3whxWRewAz3ekCxdQoCY7xsf46LXhGmmBCoahmbikZ",
  "key8": "53oeupgFNyLBmFBg7aFswkiZyfC5uswg8KcSFK9GRo9wpuCWAe8oRJ8aA28fmJyHd7JQYeJPby7xQWXYYvtTJXBN",
  "key9": "2SEt1pTsi2hTi2eGm6grxQQHVVFUWcyakMReV6GFhcWuyc3dHYULb66mAjkTsCkfaJSVqU6jBeX8MDDygHsPNhu2",
  "key10": "26bQtFX1fF87tBzmSjUuLfuUibj8VYcE38hdKgT9kbJ5wiUBSxVDdSiwddrczji9pmu6CzSBowG8b4g7Q9XhhBiA",
  "key11": "ejLERjSttG78c97D7vv5AQCwWnu6oNp4Wcgy2X1wVrJf9QQBQHxZWjy2jc22ayJakD3b1Du9kmADCwZvKV8Fbnx",
  "key12": "4VY1bqRAjT2aTJe3X9CqwXq6BPTFFdaZxExsy4DGgmFWxPHbb9MHebRQ6JccB9CSMxTaQ9WtrGAvxUgfSPJgqG5o",
  "key13": "5enncaX2zy3SZtKoVtk6Ev14WJ7xurtCEU1dx533vYhHGNa2QhGn3RhEcYxieteAbPcrbcmwx2J28kcqyM3PAY5Q",
  "key14": "5AncFxBesAM7BHSEz5duerVJJtAXiYqXTrcTxxpKFtQCTduZBqHhKavzQqa6fgNWWFkDC2hGKJoQXsUa38LkYLYR",
  "key15": "46KdXbGnnqq78tkoWPK8iC1G8Ayy5p3G9ExxdVj9fPh6Gd5W6vBduKfKMsaXYn3qrUsvz1tM8Ek11zhskxYKPGVv",
  "key16": "62ZVpPAjAUQearJ4Qv6CLAEpuS46Heohv3rW29YJ9M1bdZvQawJJS9xe7Un5u9b9Phrg7oRsGzYSJ5cUfZnDHsH2",
  "key17": "CMzpc9bfb53viov8qMSsu27Gf6owyMD4L9K2jQF9h8a1nhUYHq8Byw7AmoWyigbirVqtp4ERNqsvYCUp6knbJS2",
  "key18": "8Z8pQUp8LfzkUj6it1VEV4K11MKsGjzaRD2tCVJYfMdj7ssjUmpSdV5akdSkLQ391mqM4LA9cumzMpY4FLvvQwh",
  "key19": "2sNptJmitvB3cCsxEKmMpEZa1CNXdofX4EcM6sLxgSsZ6vdCcecpNRhSFh75gfAnYxBdXJevYtM3wqADPtBUcQ1y",
  "key20": "4G2a2MLe7HNYesxGhbmGBedpj6V8p7rRBMpemqHLEDJAy2q3NxF55bsoxJ1JCGarc7nFunGEbyyn1URiVPHdVQsp",
  "key21": "2zoz566E217dMZbBjXXudPqUcLDVPgpZmQnGjwkCNeUErcxjsksSE4y3PPnjisRZuoKF5pqTgdtAWPQ84gi9CwM7",
  "key22": "QjWWp5bGFPd3rYvRPWeEVA8tzAEmKtPHLTbijrkho3cik5vjKEhC2sFzCDt6Mauh9VNmwumaTN4xuv76HkHSknG",
  "key23": "2vKzJzWBmNMY3LBT6TXPCdqzzNFMZPYvLR5X57t55sKyAahoK39tHrTYLSWLrhQUC87hAqupvJ47qUxDKwNDdAjD",
  "key24": "4qBfnrwJfCrBqtkHr1kVjzbLtqtTWvZbPqTVyg4EXHfptT2DpxSQhVDN9XbQ4qwAX5rJeJK8CXhJW19q422X785u",
  "key25": "2HTeUj2sjyZdTPaZwMLAcRGYwoTxLCskpKaji7xpoQ3EdsWkBcVupds2p2VV3X6Sg77pskKETeDqHEmUirPpdy1d",
  "key26": "1zvW6LrZLXwAUF5eAeEsbTPP5WtEzytCJA974KddAUZ341x9CMdFTbZywwne6HZ9MKToNA9KZTYaGfTgwX7uXKK",
  "key27": "3YN5KEmy6CWECzFuy3hfZbB3B4LjW2Sh3G2BiYXqFsiZXRsAKPmFxawHdswcyMyFfDYhFZ8m6EEMfohLJTGycixf",
  "key28": "3mveam37X8GvDnnkfvEuG18dz8PYwauKQKVvrJqXmbcoGDwqCpg3rYYngXre9wx9VMU2iMs9JgYfG7oHTH2Bx18G",
  "key29": "3Wbw9wynZB53cM2UHM78XXwR52h3ScJhpRWgh5qKxXAqBDRucZrbxcoRJM4b5xWE8peQBx3DTY4fFAWD5GufLj8E",
  "key30": "4KSMAAcTUjmg66pzVqRTCcstUUJhfVEbruzcQ52tC2w4DpLRt9Jq5ytcNSggNFjT4GzYynuSb1ag4m3nv65BqCGh",
  "key31": "3dRNkms6rhwHfRnJnG98HETER9madqn39VgGT93gwq3Kgr3x9TRcWYcyJ2jmyVJLTFNK8HZ9Z4tB6vGDYvVxeKHw",
  "key32": "42rUvu2bRtVoiYyzLbki3rGUrbFgd1uGn5PftcgyzTMiB9ofeBoqfpUFXvNXWS69383WywgtCJcMktU8u5yoZaM6",
  "key33": "2F556K4aseei5Fz2wt3m4qQ7s5wC2vbEjYeRLQcNUkvvSZoP1uLVpT33KM3tPNAmEqmxW5TQAw78ugbuhEBCv9SY",
  "key34": "2xKHRqMsJxKzxKo5aqMSJmXNaWfhV6EcGZXp3mKN3dusmS6h7xHFMeP8XzuBSqy6sTw2DsnuEX5PrLnqRy6p8h12",
  "key35": "5fRTygPTAVpBvE7bVRzgFLtPWQFK9E4rQ1QDbrUBBJ7Ga5BMYdyHxDczAynQiThW4ePB3VLmEsViECykoZoMdecZ"
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
