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
    "21mNfGSKPVwKffyaCaPQE9VQ9XRv5UhoR2p4Vz7iLDRWQtfcL9B8NFsnxwphCruhcChMNE6MzWM34RvcQ3KhCwjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ic3GCxeuHpHDvuXW6jyE52rvfWePdh3qReYYSZYNzuKS6FY9TTt18CjTmSwUdKbfroWLzWxD2ZgKBYNpZYXcosU",
  "key1": "25iHxjhVbPFtmo65BwMiuMmYz9H6GhuZEhQZsRTfKEVZ881r6VPm1bekL2e4dvT6iKKpmtZRNYcxV6vxvTSq2Pzx",
  "key2": "3yv48P1VLfmrAdW3i2q9r8Q7XXMGiiWXG4QSpviDK8bdWRwqcWyaweQZWdtQjvm2N7bc8H7PKyMytU3f22ju93V9",
  "key3": "5n3eY1oLZfaY5ns73xLzetKoZx2derXLXkNEqp3KawuLA7VxnNNMrtsuP5oGpVCsb8qWX4xnUHcjfdTSbaGxNd68",
  "key4": "5K7rzbATUuQV4ovuPhQvqkybp7KbW9HoKwPP7DB7Eto49kMm4rsrW9YS4WPUeSajMhPtrtDn8y23gsfp9ERvnhA4",
  "key5": "5NVX3cCSk3VRucrfjhidwyJzgTkxsiNWg4YrPc4hXEG6QhoUVmzBH87oSbfTsSEbwLMtz7MJJhQuiYsSfsFkkpEX",
  "key6": "3XHaBEHmbdBpEk3kZXh4oCyGBfH5WZB8DJX4M98axPRf4mVDczWfBDNeTrftiPKctVsgNwrLaih8xQrMEvrxj8ac",
  "key7": "3QTWoN5quhBbqR4GngLaEvJA4bh5XRKVTkk4HvxzS7NLTZpXxLwT6o8c8rW1zTDQXtfTqd9drkNSuLjtprktUn4J",
  "key8": "2jfrXdaSLrH7wXNtaFMdaXHAfeKEdFvEYHG8dEdn1kC9zD758h2nke5Pd2i1s57oVqUhRjWBk4VsvujQ8bQY1gQD",
  "key9": "62gyjjv12HBrFi91qR2mJ9ttHBXQeJpsJMQBstgh7o2LNkJU8cG8udyBndoEpS4kWFdiCQVvMwJfHHgTwBGSMnx",
  "key10": "4yqXzUpApEwk1c6xaqhLAriR2ykCm6ndvA3oxQHbxdFrQtvt3noawBMKNZNpvBxje4wBWhhmG32sv7sboQqKnMjB",
  "key11": "4ZtcAm9YJhknLCbr3VXsp5RueN37wHN1XH6hWUSbp1JmmYA146DVtAuwLBZBpNgJbBZReEm7xGz2CaKbjsZ9i6P3",
  "key12": "4cS2EaHNLP3xCBS1E2vgzKANc3Vj4egpZg4RQnKspAQMYs5z1hhLByPNJ2T1Gd8X7Sf8YH5dJXQz8x3KN427ppMQ",
  "key13": "5X6pvoZs2dsFZS9RJnCDwWzNwJucyuELoT8zTvppw9j6MFpbjrJhjo18i9ktNB5pUYyr8Uz1jtbMkwryy8GgMue7",
  "key14": "3RjWFAPSeJot1ugw41L4woBgvMiQF5ehbUiTGGvobsEsd9Rkc88vZyFLjfpMSF85w2gXkVTcvVra6ymyoXFJWHyF",
  "key15": "4ymjnLnWmJisAny4r58q5SrB8sx3ipWsZNjknLYALndH7WWAgV583TK31dtuqDgTrjb7q87STxJ5sbNQuAfYQg1a",
  "key16": "3P8BTBZGP4CMsa3XYd2dvmfcDWxASLVZhtwyz5G6eQ8c4pJJtEohChU8agnYQoKyTA8EVbKSRb2GSBFAcsvcdtfa",
  "key17": "3CfWesWq4AE41rTEgWhE6KWed7DF78Lg9srvfYAJhSa2L3rqomWvRUK8yPMa8aEMBHvNgLDCznaZUNfPamZxcXoA",
  "key18": "4QCPFctFiDtjdyGTWzuSABHJCK4gsaaQfyazj98yQQmjRoBQmC7c6M83rpwhdG9G5rj6izf9S9ESK7ZzhoJC1FmG",
  "key19": "2J64NWixHeLfvD6HGDKzNSrANvPf5ivrrozSiaU66cvHKR9A8cCe2F7hnPKcZufNA5a5zfkZjaB89Khn2uiHiLsJ",
  "key20": "362LQd9ZHT8VuMund6CmmFS7YgVv9TiZtRXp5tAMFTpt6tdxDEXZQqjPz4b6ewcsKccbdJ8mcnjLA3S1uEH4XQbk",
  "key21": "24AtxYT92Q5AttsRRuEKjrRwCqaofUM7p5NqhR8zf3bis9y1pJoPaX2skeLodJGn25fgbW8DAmdfidvGMxekWZby",
  "key22": "5xe9bRjfneB3LtAqc6xrsEvVzjJvQonX8XwuUVbbxBwUX2c1TY4uSEbPjwRKXbPqqm5zzBXUcKdoHdozYpMHEccE",
  "key23": "2RXD7CZu8VAMoUuzuVLf9c2T7mBtDpx75GuoTnaKYeFHUX7JJWNPyBRgH1srJeg4KPWeLUNrgJdSsThVNnF2DXvZ",
  "key24": "2mAxyzh3x2jdoSAZsVgA23ezQKw9nFY5Edwp5gjT5xd2viuPiG9Zpj5sevKbHf5m7Kog3wHjucG37opdrRPFTuUf",
  "key25": "3u16DDbieeUCr4rqnzFNrieUi2ojDT4p3zit2YseW3xrWqY6MLSSyReKPbPHfr8ocUf7XjiaPVqCTdGYDSYXJ6WS"
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
