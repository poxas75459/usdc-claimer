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
    "21vdXk1Ye5P7dw2UbqUBnzM3g2fvtFL82opKmyBLoKpSeBNUr3ac6utbDjvbWH2oHxezjcBASZjPo98a2niMhwBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46aHejBYdRYbMjsAxPsWJoZGKFnB6Kx8ic7saegxestsnj6W8mfhpuAN8XrPD3Coo5CRVPb5xDMhfzmSm8DHwDe7",
  "key1": "4N8jMg24LCUdQ9XT997XBcM54SCHeS9imGWxA43f5ZENz5Kz8BRWgyDBBpQF9Zqv6DSwYYo6pfFTLhRJibyZSVj6",
  "key2": "4xe6CnHnvjFkh4JUkLe6gLA6khXx51UaLboNPHwf9gwpLDxiz25btcT4y3jNjY6BayHgGBF6bT5rqaqHwjst8K9h",
  "key3": "2wXbKFvPjviAhr45ru1sek8LcEEzprnhexQ6n7MJzFBUUMCCs4f32js6gW1dv49214v5ZHYivbgsGw7hwuKiUChv",
  "key4": "2APwEwXPJzaEzPdLp41UdUnBFH7A2RAGJuMtoP3mACdRBUwzYX2kPGhusG9B7Zzefbi93kvL95YtsuEaydWLmpMB",
  "key5": "5fwnPGs8z3RUaXxkmQuVwNJ5FyvNAHMZuqnGNtbBGVpMiynRx917XsQSJErQpu8qQJTpiyf4JfT8Pmw6AdTc5kdD",
  "key6": "3tjTcC4PBiXsqBJNRZbx8mM8xdEFnDRLPqN33Z5VKgyLrGwhKTtbCYoeWfqvmGvxBkhoctz6r7RDHgJx9wfrPxYC",
  "key7": "24VgBLeX3aCMGeAFvT6SypbmLrRMiBPL4fL8ArnnLh2hR9JsVRWuqRJagQ89KwTbcAAFCH4XC6HkX7w6ZdufGrgU",
  "key8": "2m8qdewXhfSFmbw1rVs56hmgj5Yw4zdmzf5z9KLqHw6nLziQzVtDhd7oPMe8im9H7oE9WaXghw2t32KFhpjpWHEE",
  "key9": "pxmF65L1CUKj5WL9zkZ69TU9FnuKNy8t7axDb628DJjKHLjmHnXb1BpzzgSZJ37R4Dbr2Q445C61xJGQSZTfAG6",
  "key10": "2cdecDLsnywoxvo8bTxG4zifY5VZcH9UeKp6sdYJPuqWD4Qu9WP7oyQxXeSpbb6ZocJz9YsvqUQWwwY4YuRCBgVn",
  "key11": "4WDVUqBRGPwsJLCu15U4cMtagpohxrthxHMM3TTd28Le6RRxU8DyTht6gCXT2vUzRBRBGXoniv8aZy2T7hTwpvxF",
  "key12": "4N6WcYCCgiV6FzdivAnMxV1qXRaKgLTE1DYNrrXZEGBknqtR8ruBeLGwpJZwVQKh1TXk2H2oxrqB94dZTRWV3weC",
  "key13": "37EVpiVP9WkAw6aUCof2TXDvwZxPYvbHz9MVJ9LKdDrEk8HqEM69NsY5NAs6xhS6tBbSXCjAhG2ZEe9L713WVz9",
  "key14": "5W8i2uP9vrVUDqTLbb27pLn1v8D7873WUSDZAEGSnr9cSZbAdv51hvQvUKREX49wGRw2L7qh49dKWFBdJ3UscjCU",
  "key15": "32DKoqiL7eveK8Tkhmo6fP23meuadFCT79E5Eg1fNQj6UonF7wCRti87sH3npFa8CHUPqfrq4cR2NKrmpVh7KMKc",
  "key16": "XbAnRueEfD2JCjQPRYgMqL3pAM2nnVpN9qQgpxi2g8FYGDyB2U3x3JX9Yz2XPgm2W3xZ4FaoJq3QXvt7uVeWbhu",
  "key17": "4v8poeBBjCGLU9MGM3yva5LDc3t9NhqhZLmvJaET775pBGPhjHC4cPdaAJjjvs9pnwDsX95FEvcAPmyjXJziQzgV",
  "key18": "HQH8FzJf77W3kmoLf4uLmQJXqGRuvFefzD7pqpLgCt4LKWNPsVwYXASSeDzTaebXcFzyV7bJZCYH3yMsyJ3ivB9",
  "key19": "2yjscXnTnAVwLECHrpb8NSCo9SN56TPijgwF7Di2G8ucTwGTNCmLWizqXKTCeMnNRXVZNCWhb5y1YK8qpEEoFQ4N",
  "key20": "2gFxgXtfruMwu4Na9VF2NzSzvdCWPQkBsxpZ71jhbAmnGFDuG9joyVQLTfLZEiKKntFTo6ZMfML91zij7G7TEGCm",
  "key21": "4dafgxN8ZkvbsQGH1krwZC9yvPCQNwF8EupcNESPrxzkqvGTui9FrxGaNmQND1khxMRGLgvggFqMufnZ4BmNxbvo",
  "key22": "3kMWEEETUAHs8uDVCHWXb12EGh9xp5EAzx16RwbGrMWfiv4tGpYMvtebvddj9tdzQ7eexy4YZnN2b6dKNr151Viv",
  "key23": "2PKDEXRkqQ33ynP5Bipz6PZtfSeh4xt7Ss6C6nwrKZqs8reM4xp2NxnJhBHXLQn4XEpWBN9CYEUC2pS4Gyr6mdJy",
  "key24": "5axn3QTCjiCPxMFMPmPHz3vr3XChGRYVoQfLAeksqwNy6fUrmbwyY1sUDAgeBUpXsrRsAu2wfSB1MEcQwgLPH9nu",
  "key25": "4D93qtU3cdovqnhPEmZPrbARN7rrDqBJD9Cz8vtq5QiNmhW1JSdU7YjPCuTa4nsxUvwjXPDJnJoWqaiqa1yGL1sq",
  "key26": "Uzbs8gbiaNLfJ8Vd6H2XbtVKHdSswvjxK7R7z5X3SYed72Zbov6vbf6LgnRw8ckNgDEvmnzp5bWra79Q8fiXJKd",
  "key27": "2PVQBeA3j7gcc5AZcAVLYfCnMyUgSnUDjxcjqbf1j4gC7DBaSpM5qgoPmPwNdtPpnthYEnTzAPacGBYdDfYdwQH5",
  "key28": "2gC5L7RU4QcV23BtkdWxKLbP3TAgRtGh1oAcZLe6nGG2FqBMDb8q6izBXHLjeahhPmvQjdcS8fW7efb82GiNezT5"
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
