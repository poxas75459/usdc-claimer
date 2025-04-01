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
    "24NCjA2NByfzQjK5zjtaywr6UDfq5e95QiwMgHNS3t6Btfb7pepXVz3ybWymf45EQbevFGQMzSutWqbvY3mqN2Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "brNfxP8BkuQcWWYrCXUoE4ZYcn76CWw6dFoeMK6E2TZMTTpYvZqU3z9K37YkrxSo43sdT7KzrPrYxpcakUYfuWb",
  "key1": "ujpdeekJZ8763jzGHty9oZ23RefydySqcoWvBxrQe2iQ88r3dutvZ8BUNaCqe87QXxVBvWg9bgARTteCZifMQZb",
  "key2": "4oqA8gPB8PFuTx37f8VvvN8CciK9ErAZvXgr36DoMS68hWm1jgMbjBfLgRzLosMJjNEcTj6ETEdTtw6hLhLn4trZ",
  "key3": "3N6zPFX6wmYTsrsDRwcCDZsEoghuJY1GM1bSk7EcFT6PqrhMF5Y3TgqZmr6XXPzPzaspH3nSW761L7uayLjd5eV4",
  "key4": "319Kxgujvj7Neyboq1YDwGUdsySzV5c3e15otax7HUemBfYknFAF1tHaQUDr1bSYBCVyGTFhsxffnXZNQehQ2v38",
  "key5": "33CsogZCrXnCiFM8cNXciU9UBTDfE9yD1BVYoaJjmX56fx1QCcVS3W29Lz2xgUc9Lnhc6SfMyAGbvEGtV5m8Tjfn",
  "key6": "5QCcMgGNU1t9ZX1Ur8Xd7PshAtKfJfXF7X7U6k64adL2JBi4ktjMpT3umZ55Js1XmtLAfrF7r2gDrdqGMLZZB7qo",
  "key7": "3fUxZgC5kAQ6B93q2RY7PDpxHMYsB3y22arjg9Trkv36fwArd91Bb8MBYGcrARvUyK8b1rzcsjghbigJGr6gKndh",
  "key8": "d96mBvLQwAwmWyK9y1VmgGWPB8SdmJSZWLNvHL1Qmp3q8idssajmsXqM1Pkw3YyL3oAgVcvk6ckBMjR5MaFvN2J",
  "key9": "2q6UkmP9YoYhskbn4QujjqSh9Nqs8wPmG4JQHztMZmuJLnnuEhNqoKjAiorPxSoJTeT27SC8viCf2ukvNAZjLqyd",
  "key10": "EXUya4hDiLNuCGt228JvzCWhEiGuGfweYFAuMMw8jir4D7nBv8gDBiyxhhgruoVqbRz4YEyAz2qsp2Xia7C9pEb",
  "key11": "ed9JLZ6vvGiZi9phbbG8srsujZvdQTe9kZoj8iETMnTiEyML6Lu6vjHcbYqxLmY36eik38R88EanZc8YTaeAeQt",
  "key12": "4qvAhfyo8GuvULtBq4SEX9paxuoKPmdEJs6JqQKBG7ApUWCJYNsx6qHgbC8ZGJFo8e7Px4jETSqmRFoo4pKdWK1N",
  "key13": "4sN912wbi9bBfYdeu8x1z7uNFhJirrLvHCS2QJuRm3LhEztjWGbUPU8ckKfP2JT6wBRWvrfec56HtRPE3GBx6XC5",
  "key14": "36MG5c9yBb1wapMeimdeUBJEcvyGXQLTtLGUMQKTAQtHaR1doNhYGV7jHQXWZbsxbiXeg9W9z2s16BrVwvQY9gjP",
  "key15": "3wEhbnfUVtbrTmjLiEKLf2T29UmKNmX1zE9zgyVMhzbJXczeS8xSizan9MsVRbK8vq4vN2MmqqeJRzEb9CYkYKGg",
  "key16": "EDgmbtzdJBKutUkvBttxt5Em7E44XjEeZjPkzjdeacruditPyfHCAnzkkpcX9AL4vhE57yarxQ5kgkx3zCKhTUF",
  "key17": "4z3sXA4KSHrHY4vU384ZWND9xan7QjaKSFAESP1W63ycQ1bAsEqyXS9KZVaYDgSF2HyF7HjRv5rTdZdGX31gom6D",
  "key18": "5rSAWiTFEnKNbpTWEjbZMzVwfhGyGk8mo7pG8nKZVbCqYyk5vvrkxkfnSqSET6rZrXNMGDr5tuV6gV2Rr8JtUUi7",
  "key19": "2Xifw5z8qwzGdWg9rGsh6ZmzNgoUr8wDMhma6Aj5KC67vJn6Pj5ZUezNoLhVYHyEJNMc9QSHVqNxwhai3eabUBRj",
  "key20": "3xh7ahpjSHxLsDdn1RXpo1kbNRJyzPmxbym9vFxkAeMcHFc3TJBLV9R6DSuugmDQzSSxZeYYtacWsyqmWhhC5e5y",
  "key21": "623YnDnoJkCFNX6kLP9SAMDzVeZqvtvWAXoFfbbNvAUwNPkfeVn24Sh5ZayPjdsXtFKDHKp9Rw4sUgNQWQ1j67Gk",
  "key22": "2LFpGviWGTat9ARQwn3AR39m2GUwr5tAotwz5aZsDZHy21JoBWVC9fckVfL7qPfeBwkBikMVmStCHAaxh6WNY2wR",
  "key23": "3yBLMMTyvFgMtxbsCzvY9AcMTRwena8nxGB4wnXn6fvX8HT8pdMRXkSdRYKmSMwqNquBK31q2bsHxkHgPnHkGcby",
  "key24": "5m1ghVFdDG1eLJbHQqCWZCS7H8s9bftuEX6VoSD8vmpjYV8X5GmYUi9CiigFDBrhJcMDY2quXrzkN86CWS4ma5eK"
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
