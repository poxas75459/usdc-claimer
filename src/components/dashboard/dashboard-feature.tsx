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
    "3qy8ASGTHy5iUAE7EUbGraNCMqDwaWRkuM2sRTrJdHjYE7AUdkFxXU2FfpNL8XWEKCto2i9Vg8tEH2uPuuCPo3tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLhofZLpq5ev8VyxpR4nzS58RZRC8kv2vDuT3RtBR9qXk9FhDYfNaX7fUMoF3tULessuRK5hnzhvYxW7119nJ3L",
  "key1": "5pGfBavdDqtHdeMyez9wJZ84diC6TKPKV8g164RemW1quE4a79Nuy3ENwWFK3FaPL291hz3WtiCrEu8G1KSpjiVJ",
  "key2": "2YZJfNGFxoVhA8wsmozAnL2UB7XN3vptyhm7xWRjkHgVSsERjPmuLYy5XYgQf9HE6spDwNaEMC6GLiFKcQ8UMxqK",
  "key3": "4ya4FB9F1Mj2EQMBdR3EeFFaZAqJ7HFVZ9ydxzDRECESuTfYUzHmzNQWFt69NM5bBtp8hSnfJKVZ16eoc7gMfRyN",
  "key4": "2DvdLvC5uVMG5pRv2sZwDCjXjZTabPc8iqm6s8GcuE1uZXzGmQxU1JjXxmQMmSwdULKD1knL7tuEeEbVFEjMgGTH",
  "key5": "5ivx3pb9z6xX8beqYi8AYUA7DAMcinkdvDs4kPUXGXyoP3ygW84RXWofX7Qq2twEvK696huVxRVLA54jA95LYRXo",
  "key6": "B5qf1Ps2FLpYnRq16Ah8MMugSgfUzyZaSit9qH2hqxa65vUZN6XAJxwVGyJh2hrSaw68W9ZLJdTcmSBXq3H9m3Z",
  "key7": "NGaUgemDz582rCY6ycA7CV71mddFX98KVhFveUxPoRG3upujEFrqaB1ZEsRZSLJjXvSeLCnHJTnM4NKAez8SzfK",
  "key8": "rKVQ4F5Q9JpeTYXpfGhB84jKhqQHLjBoqHoCdgChacQG4mYzP67Dz6sBNEALa3L5kkL1r6DYJRCsv9NRknpc3zL",
  "key9": "3yoNjM27kQr82CKVYJGkk6bzmdVN28eg5AEqrgFWEfMBT31vEirZwxDWsFNsNonxWVZ9iQGgGaQYJ86o2LUdUP1N",
  "key10": "FQVemXZRXtZQ8QVX69ECvtdzotnYo8c5awhhDgBr2Pv9djdyzrAXhEbjPTXrS5yczWDnUujU1yv7ofJkmXKcNda",
  "key11": "QsUUrdkTNsR7xttVCM7VNycTSZ8XjPLhCKLZUCGR3gXq9cd9iUASgHDib9U483bpjcWxoCJzaSdfzFiW5mJsP58",
  "key12": "2iHhTPyy1wWqfcXM5NJ46zndczNkRnWKmMkKFFmGqLj6chTej5DBFJQh5rjVGpuzad7TeeS9E8u2maMUftYkeKFd",
  "key13": "Be46VEPT4sbHnx3Y84ShJCgfJ6tQS6kYE7J9E2rS4DQ7o5npNsWNH2ULq3aPEWEoSnvw7eNeJjPU18Eh6Z9YQx5",
  "key14": "3RYwtq41fPA5S4M96nkrdrRPSN8o7CQvPuL3xsxfuoAKiHgznYZQEcJqjvP4d2X7JDm24Fw1zHEdt7848LW2LaLD",
  "key15": "5BQvcKkbbPmejo9uYzZiUFxFsXJfzub3oPhPA6bkB5nYBtZWYAyuK6xRhrtRkzNQBYT8mC2QFSRRScke4z5369zR",
  "key16": "2vwbEKxaAC4TxWb3D3C1pn1u5FZhsoH65oxEXG6LmkyF6PvHipr3PH87mZtEDsfrvJhZYaXeLPEUd5Qju9t5Lh5h",
  "key17": "23aSNwtMDxXzQRD4Wegy9XpSx9cLjkStKynuh5UZfBz7KB3CVTKzEBPZMeqahNawv5g3sP9GzJbRo4gkKtnB7WgK",
  "key18": "38f52y81FWp6JWb5Cdcbk7MB4ef2CcJT6oEvRzPwypB4Fd7e8DMtoAAHv5V4NJCZ8txT6DWDn5DutCNhMtQgUYs4",
  "key19": "5bbyKeKFVEBusjEwNmc2qe4R4A9ApDLTExAcsT7LRmBUpaFvqH4uSUrXjfNCEnkkGkaDMBxDG42ofCmX8eZnngsz",
  "key20": "bxaMStGxvhLnkFfxf6LXiEUqKPDWWnEMqGkzLWzFtyg6wLh7i2AAb1sJqwnRobB4SivAKnYJVT1wZ6JVgFKdTXT",
  "key21": "5bBy4uEsQM7JWtj89AFTWfHXL94DPcjehDpqseBZJCna8gRgmBMWk7Huy5BScThdoRA1EogJxABCYp7WWw8WX8CN",
  "key22": "5xPdFTWeGfPX5N445G2wqw7jVfxo62Cye8gDRrfVHKVYuiSdVZMzPnkSNinrEWhrCBAi49ZxH7Bi5BSrkpAuzejv",
  "key23": "48duTzPKRjFdGfN3cEhh6UtDU2cwmf9GeikLGce5mvXFqVozSMSuq69Wn7siELBbyNDm9BLGzwcPqdPixqGESxsk",
  "key24": "8HUko3v3KReDeKJumKsUR4Aa8KsXYuUQmKTXZMEUtmpxjpDk7DwM5fzaCvV2dnRmeHZF2nRePmxsAkFDdmfdoQ9",
  "key25": "Gxr6AiWpaF2vWC5vLuhEGZgfjJVzHRjy87Btwt1uqRfVJXFfRsC1pi8qboFmJPtrhvPnfZvJ5oECHskKvyyACoo",
  "key26": "5qJ2gJq3CWN3suNJhqFkDAxypso6R1zb4NNBQBT67gGYsfj8MEFypeZdKsZs7EskfjyMTAa1uQAKnP1DA6bfyQJe",
  "key27": "3VdfxZxx7LMmRiVcBuW3y3dr5cmgzeixSC8jcgSd2SETUUGcndy8w6NqaVnwmZWAexXPPgfmwsS6qUDsPpQZdtWJ",
  "key28": "5tLJmgLWu5NfQYfS2vyYVVg5AFrcqmojpCsh2T7e8iJSDeqcTssHZSNhn2g8fJSZ5Ar4nnxganMdkJWyPmHCcSDA",
  "key29": "3L82hev1KhSQyCjqSFA42B3Lhj7Wf9NYVaqZCebyDpUsN8KDqkEM4AnHRu7uZPQob3PVMgfxEwF1bF9ida5s7tiN",
  "key30": "3C7TCriLCqmMRrK3gVXhodJkRY3wHzR8G38UW4gpw7Z4Zpf68US9ABsBJDTSLie2T9DF4A3biPwfJkds8jnbq9NF"
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
