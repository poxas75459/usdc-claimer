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
    "ifCRVYgoSR1HfN6wqJqfNg6dAUx3gmntDPFVfXFKPJCKhAFHgAQejunWNczKGnnRhYEYUZkyVJNcbUN1Yj5CTQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YALWu4w1QHBY2ovBSVt39Dj3dbgFXpquTxKafQHKfWyDivquyNAbQdkzTa423ueE7vty96b9mpWoZFjzZECMgA4",
  "key1": "3jsmkFArUtgiohRdHgQkFf7j9QNk1Jjr5rsdcbjc5Vd35RSa7aqTN8n4rSB4oGtgh6YJrfL6thiCYHz5SXft8ybB",
  "key2": "51rumVXRzwxuhyRHeazSvMPqztNUVeJS2oHK8hYsHwRCmSGpm5DECHYNu5p8hY5pYCSKBVMfJdk7qMi6S4xGwJEi",
  "key3": "4C4USAXaT1y7CZnCuZAyToH99v6tbZqFjRZJK6jubfYQZkY1Akekch3k4YApQd7sovpfG1BaEAGvAqdzZzX2FnKv",
  "key4": "4f1qLFNHKiPZrzesX8jo388gdXv86wiqgBjmPXw6N9xNyq7nMfRxBsKJhAAWukH6vDnihckUt339h59y71NJVKVd",
  "key5": "2hKYeKFZaaYQHMKC8XpAD7nHTYmWCkC4TCxQYy8UpN4hY36kYtvDizbLQ9d66peE2GhvqWQHDaAhvvhZ9VycrGe1",
  "key6": "4XDRMNPrukYBcbgvVUChCMdk1GozCjUXS4kNVromtY6nJmkMnRBN6qxYhFKY47Qx92gcb7Qdh6LRXw52nQ9itu3S",
  "key7": "4Zbs8huGqkEGhrVaatm2hX3NkY28hK9NTCUKtFVTez6LKuSFYh69QGJePi38wTELVaPG1eAfoZUHzpWqPkvL6C66",
  "key8": "2KThypxBgdJiU1VzNUNCjRWhCVFRuY1Nrggw1vDeKafq8D211rC1kKAK9UjSWCn2rU4QD5c6dt7WRBd3AWhEXDix",
  "key9": "4aVRqEpRyTkBFqXb5jsTVyA4qeuPehPoaGzTDSmfeq9NK2UYbz3m5XJveoR7yBfcVvJ7MWV6EupKPfXUDfqJU8sQ",
  "key10": "3B8KpSHiDwVTjmuFfB7qDvGfPQwMmmxYMEQHthgqP1ouDcS9zb2fBP4T5vdvtRdQXZBU9quLjPgiYv9rpJHsXsjd",
  "key11": "3BZKPupCB3jfYr9ikD4MCkAh7eCLhosN26A76cwxymB2RHY6p2zjqKbH5t5VRATMaK74NrnoJgCNfc1XdtNqFG19",
  "key12": "37wrpuH9y6ebeUd333Gj9aDGJmVCLJKzzGHnsu1babDf7zbTwEpHAhBUgPW5t1PXLtKX8ctaJXZjviP2EhNW1rCS",
  "key13": "5fnUz7q1Rpqmj9xFFMaVZxw6RhuYcmpobcqtKR9jep5hL3QFFMpRut1dv8WhrZWD3yczXrJAbjx4Nq9fWZUUfCgU",
  "key14": "FC4MJgt2YE65CCAcTyErBMSdkjMRFVVdBwVURKjW9QUTCj3FesbvhztovzeULRB4AZ9DQB2kpstELnRRooqAsL9",
  "key15": "38tHRnGEHZXBSD3qgzfE8AH8uQNrP2pR9Lw8bB2F4Ad5cVUcMUXXjzfLbhGRov2ZyzSpXCVs87z8B9NAb9YF4gG1",
  "key16": "5BF987efwjtb8LaJ3TsRuuVFbRrAn63SCzVGpMVhcGW5ySDTDDgv3Dc2WshoRHj6gp1vzJRtvaKF42ChRbGp7DTS",
  "key17": "5AXQmuv3ydeN141YMagK5Poh6uqi4aSsRhUs8EGeZrbHPiUgRAMC9X6gcuz23TJ3136BSDViNvniovJcjj6aD4SH",
  "key18": "4oZNyCuceDgKHSbqtWEPwBXonj7QRxCG8im9pkSC6wR8QrY2hZky2txh68SN3uaLHdSGmdBgqpBWsUfWAz7CeCu1",
  "key19": "5G4f9B7ySErdgUY8JkEBibD38F5ovz4VQEqKBovSX1eVapzLENptUBSJ9iAbGWczzAXtAvbZkYt7UJuyGrBViC2u",
  "key20": "5EsVMHY8qPYB46Lng67fct2xi21mRksCFrMYYnhBB7gK5c2CLo9uhwqYb6zeiyabBW3V8ckiCmKJmrRpSda3zjih",
  "key21": "3iCpL7et9WyQHG4fQq9AdjfGBoLNpWvbmpba1K4mi3B8PvJgQ8f28mH1Rbqjvp5QgkRiXGNsx5tryK7nJeG9CqYV",
  "key22": "4Xycn2eZCgGYdH8v61P3BRdmeuhaYcfpanh8uzjL2RA8aP51QkmFFbV4WNu1q4PH6eQEtiw4JqdypTKbFugidp5u",
  "key23": "5etJT6QoSsbJ6gHNp7QeELj9DTaSEZFWjW9xTivY1v4j65zBTz68tdZLhJAVx2B4fCDdx91PjvfKVaPFdJd9Ly82",
  "key24": "5FYXmqF7JghTVo9vNZcPuJzCeFWXXJcrz2Lgo1CYcP7eWLjhXpwxis3MVcpyjwRmqi4Mbx6RWd8d8M3dLP1Y9hwh",
  "key25": "2po1BdLiGsGevCGCTubteen4iLmd3bmnvFnCn5QLShPy6W9zMv2VvvMtKWZVr3VZMxaJ68NixLKh3vBjiWXFE1UY",
  "key26": "5BNL4M8BDQQXdaC4AcRwH8B6S9CSQJMqJZCguQ6WHzzVCuY4YY34FRiKbYBFvDonf1yBLo3vtYywFJyFwKBiHLv2",
  "key27": "coy4hNrLpmJRotGkiJFcLasrjchDAUCumii4RHMdZgGveq2zmtLzVQCV81joSpW26Hx7XpWNSMPRU4NMJX2BCru",
  "key28": "322F1dJCeDaz7uDTTDa5friUyYv8HjKxUL3XUzhGUcAjKRB7cRPVHqJPgn5Ttnxt6mTTrREzs3qHWkmA8pJ8gzas",
  "key29": "bXU5xPuMWHWHkELsQAKxcojkt3JCe2TTGn58MZMMDjLx69xkLBnXpvAmvZEtLnDYph33zbzrtTL2PZMX1DEfHoe",
  "key30": "3V2Qwp3oEKT974UAQ9q8TXV1sFM7wn2hJsVELfQjT7FD3V1fjJdfSCn3gvMWCMb2LLDCobJTyMe2qyGMBfJzN8ET"
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
