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
    "4T93DiTYpVMT9DiPG6b3gmv5GazNnXGVXCY56ZnCtt1vjeJGRNaKaw8XCUsBGjTs4G5cN9BU4dL4efGX7DqQdWhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qwqVxWT8myzKWtJLmcyGbEtW7oBfuuGu9TgNEsvm3NUDGZ2DD57Y6d7FZQhw51Nbm1H7ubepetMJQqinMtkem8Q",
  "key1": "PvttSohS8br6Y3qTWnS3sXrGymWhNoAc5iMLn8x8oo7p8gkfQ3SAEjQqWJuXvRT5rHob8eTDYnRdjqvKRd9XKLW",
  "key2": "5aCoofsYfAHy6fzWPkNeQ5Ag5AZvWLobNtNxbdDkfNgeAC4v1AQMZGJBjLheU73qxdzChLEgVGcbXnvbeEX1mYr3",
  "key3": "2yuJCt5gmb1cj36UoTkkm81JECwGJQ5E1G8qPw9M8eff81cF8UeAZ4nkdzLqenUKcDvmExX4sYySMJwqdbA2Mt7e",
  "key4": "2mdeJDKXDdMYx2Qm3fwKvTq4Vjvr74pUNgsTDm13PHFCq3pYiEyWQVDcAqokvG985iAMN1uPFcjgievkh2ykUqgd",
  "key5": "4nZMn8M2z3hfyX69idkgibpzFpej9kV9HUx6zC1yygR3i4oeosFb1XASpX12Dn6xyLc9Q2XErEDmfZ9KH15Ly6Fj",
  "key6": "3px8Sf6ThqqegY4wL7J3oo4GY6LqnAAtpigLf6LSwUvkazDPjMA6RuHQ74W6VWXMupfovXqLpqB9gBF1tVrj2vkn",
  "key7": "29xRweBAa8w7ENvjzbHqUXdmE3kgBq9bVvtggdQxX9ThiS7U6wKyuohJSPLyeakNAT98KcA9hQMeWqN8tvsuZSXF",
  "key8": "4L6P7xhQowMA6mbXaY9BBPmQCgXFRDeKqxYLfguDMqe3qrnGE9tezd5A2yqaZBtcxkGSgELiNbNo9WsG4CrZLgsW",
  "key9": "4zze1gyQpHreMKMxW3sJ7fxqJMrWMADoHco3jrxGwxJq3m8FLFFkbDh8yBYD72N361QLMq4cnK4UhVtwQGsY2osS",
  "key10": "QR1C3KT2m6mmB5Dq95YtKA5JfFeYw5nPGpkcKB7eCXQUS7QZPFLGUyNFK24qbGpL1bzDb874DbfkGRtupSoNFZv",
  "key11": "63SDXrGoFG43HmGPAfPGLgK2y1HHcs2q4tW2YjURE4rShr24UXP9t5BHY2oWwM2rFXK9QMEvzTBYTzp6FaepC3NT",
  "key12": "3V31Hak1eg3J9M7BvKmvt4rGcifNLob3BZHPj7XXucjD3EA8GPANqjnnRPY5gMEohPykNA76gAzBtYWNAZLT4xED",
  "key13": "4rkhBka4dRDUW5VTGqhePXwx6Hew13t42NJHYpwNG5CRhkjy6SBMYunLYPCBnydn5TCncUuJLo46pJSCTuS4hKnE",
  "key14": "2BrM9sXALcGdfoGZiSPso3xBPzFgu6m2y7qSCUAWXwPwx4mDGoLqjc23akjV6YRCtktSCYBdoyYx4QthVLyniG29",
  "key15": "5qdZcAYmdvpxXFq7PFbYbSykkGn2xmipvu5vUL9iRzSQjv7TuVWxNYs7NcMvX2ZrfNAYz4FK7v6eZ5cZ7t4rwNxh",
  "key16": "2BwiWqCTTESNQRoPgtKfL4xsbr3EEa1HSU4AtL1oMQZE1Tm2VsX7kwV8fhJfPH3tdft5LiTAvG2frpbrtTVyxDhg",
  "key17": "gykhXg7n6mz8zN3hWPdD8UXQ8b7LgN4QcUfdpvEZVTTarNPLLyCcVGECL1mybeeQ2s3XQDRPvWiPuDKFUKUs3Um",
  "key18": "4NTQJ5rh9gJCZyqn6tmhzqRciSC2aSkZYqkKxZJxJ3i7bLPaChNgsS5uhoizx17YSSzZpJ5jNz3H7vmzwrxi3CKW",
  "key19": "3uH3qZjkAoz5t4ysNMJMoXRw1JKGSjQYp5ddwZ2LUx4HqCCrSXJDBx5dgBtPmXXxkNBCvozCXuKia9VKoQotWY3u",
  "key20": "Cnro2fgjKsAXjapQPwcZiCu6Fix3pFocAkiPXK9ztwKFEvTw4sJFdhyo718WA818SJxnjZ68vALYoj3PL9tRb6Z",
  "key21": "2PLVdy21xek7cuHJAujRHPkhGikg8ZAPHf8xradstA9vZdVoWz1ZDug4m7gcvvvcJXnSdrUapFdDUH8d1Qf7jXcg",
  "key22": "3ARPpyKJQ9vycrnwQtLfq18rxnbVhPVtV8HfF13jjDnf2byEJnqaajzhx6D33h8usaenwSkcfphc4DA3C62zRakC",
  "key23": "2SeWtKSjURxLPMD5PDcm6rfddcFFuVzWo4VoTfUhNZ16y2rYXKCBxWaDmHcJQXYm9AY3oUBeQ9QZbvytLJqwSADG",
  "key24": "5rpqGubGt1FErny8Xvfw5ns8bSGJk3FG8Z2UYEXhipAdmUQD5zaNTDTk8cCNncvn2tSsKy6Xz8fzzDWG8mfoq8WU"
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
