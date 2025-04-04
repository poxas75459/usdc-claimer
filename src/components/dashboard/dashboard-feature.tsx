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
    "4MFS6pEj1hmQiycHJdX2GXodPuPFrkKVADcnN3AfQmEU7F5VdYc8Mw1N69cB4L8734tU9pJWJYWzz45YhjF1uQAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJSD9X12UeUwQxRtnunUKvcmrDgUvVU6doDhKkwowyiQQvMLRbPKRCxV7adN3y19ZBntp584yF2pKbysmXaJAen",
  "key1": "2EVNNLC92WGuDs73oRTZS6d7deBVK2MTAkNxUtMoxLDJVihLH1V1v6yELNfUHHMfYKL9Q5kCun6UfcXwL8dFXQTb",
  "key2": "2ANHRo1v3RWcLoW7u2ctBjBXJ5pfoHH96EKcKyAEPDufV32FoTUDNYyvvXmSEKMGVY9RoXjKF9BgRFXczY8dJ23S",
  "key3": "TFch6SoNoG9ks1iLidENdn3URmFXDSD1WBN3NvoL1mfEdGqSzhLZUEWTGmQeaJ4Yp9wT12ijuX3i4eEimAzEncH",
  "key4": "ri35eTeCijCz3zxmZxHoXYy5hHdF55XHPbEMBdmzvjB1UfTVYr5KiPKeDBTmZY2NXcFQ5dqEexdabHTUkLbbntu",
  "key5": "2naaMWKieVvYwh3FwmSDZjqBs15rhEBr9nzc7cDYxkjrjPykP3x6f9QfQrGidJRrxuX6tUFbgdkA3qWbQSPnptzL",
  "key6": "229TH7324htd1iM5PgDwqYSSyLvkRkTWq67tV4fH73r5MbyX9N2LC4NrV1qJDjcgrwjSxKazpzi4PHFar8R28NFJ",
  "key7": "3SKbdgWLy8mq4gF867jMpkqW9HP819ffVNsMZUgzZwnH9JkVizkQvA1WGHfSqRUPeYTXf5y4dYe6g4b28zvd6EaP",
  "key8": "2mWxAFAgYiHSEd7Mx734WXaj2WQM6eRi77dkZR1hXUQMYU3ScDJd1hLQWaaGQS7MDDNU12hqbWgQX4AKZhGnC2R4",
  "key9": "5JA9qsDjZGKJ94Noq9FvGhTFxE8BKJkkMYN4BUXAVVaXyJTZqLMXwZxPX8G4GRqywiXtFnHdN8uQNPuM2sEXGY3E",
  "key10": "3G4AGbyUrV4tPSPi1np5ARTWGfQKe7KVZ9WuRt4HeFgpuDh1Nw4JdUstFviLSHnXDqojzr5BGJpULpAtJzUkrLDk",
  "key11": "33NWn9DTYJKGK1MsFDF8y5LH9pLUwvUqyvnGWKZkEsHaLzmfPWvKyW2A5ubZRc8998xGsUyZyHrbqxdffndipbqx",
  "key12": "rg6xrrXSFgeqpTCHCQXkQWNWWWW2U9JEj6HEsujVAVrbQ6YBbYXVqzNncMwnovWhSGG2wZ8G9j4Nze9UPbxhYbq",
  "key13": "YfdGdSDCE9a3hjoviBoaG1QuDTaagkwcL7zpdrrJf5BSQ1KvSDivYt7i51LuAUiDQasdAnSWfAEzEBnfyMxCewg",
  "key14": "2HLS8Ku8yCnLpXPqWaAanBmT7swzkWWEgogVXh9wjxEWXuuZgrHLWqNfFzSn9bDMFaEdd7nYFcTVysPd2hduFq58",
  "key15": "63QwSqM4EKWXefmBdcj2HfnfjRjhbdhbcbVTN1q2YuHX1mWASkGMuhMeTwjhM1ZdnUxxwtLMVdB4Yjtw133Usi2w",
  "key16": "5RVawCxthnGvxwUeGCj79i9K6pPsTJkS1N9vAzQQf2MMjNPM8AUCVF65VtzULogTrUDkBSUTuqDuwT7syLmUQbdt",
  "key17": "477iMJ31CM2Z9snijUriFkpyrHgUh6PJ8G4HYFmGc5LpY6wVhLpKfhF3pacQCFwM6v9KaDBosXRdF5P4h49yUBtq",
  "key18": "4BDkEmmsyfaw9nrKzNs8op6iGRHQkm9nbmB19QM1Mih6X4W3nZJHnxPpVDZHvKTCwFP3tzdibZJFQExfPtvbZueg",
  "key19": "mExwQBNJAsd77LgCnGAVSjbXsTAKig2BQyukHNUtKj6BA4Zugam7vJ2FGVLLHF7fk2ELh62b3q5cAiM7oYp2SRS",
  "key20": "f27LBpHrL6xpU8yg8cbV48nLJfZBcJgmbruGQKTRFwitv4ZE7KmnvLUCvtnJcii4c6cnCk3nWAEZFBr8iXdDHs2",
  "key21": "5rkFH1GyXjWPmAK7cG79buh4YpMCvHYZVN6aNyEdUgE6qALTWFnwFhaBtG1uFwbwHjk9nHKm8tHsGvupmeA2EJht",
  "key22": "4i21aGoRUMmAuVP6tCiSuJ9YwKCFzWWygMc64QjfYr7v3YcGgrnxb9WQfjWpA2RvedmRifXEnLSCMXB4nuaa1LS1",
  "key23": "2Jv2dTwGTp8ZEckpSnhbyGnyEEavT3yhZahd4UrVB44xvFJuW4ppAsAaxP7yXDxTBHr6i2rYDRAaJjp7ABnfw4gJ",
  "key24": "H363QxM2CtxXqAPiH6HprNP3iYEUcMaWqpGHqPzqfUeZqWRYocEStndbwzhdY9KVv4M29aFyWQyMUKCbQqw9hJh",
  "key25": "3qnGhZXstQoYmAYAzsokHiUKCgs34KwtoXhsJZWcFwTzL1E8SeubHnzZ5Fc2sB3AVVzRVVieCXtZe9AoDxrpHMZD",
  "key26": "urC1mr89ZDP7e6Eit7wxoTiCiLNgGoYVNxqFLpRe8nKQfJAhn5vUceyJwqmJg1DLvvCo76jrQR9uQwVBse1D8Yq"
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
