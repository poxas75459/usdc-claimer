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
    "Sntu59q9Xi81TJrSiaE6HquAedQy7MMeSUHkBS5cFrLDmk3HtBDXCDi58yUz4YMjXeBJd2Ji9fQrTfaSsM9cTxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Di33rNvciqUCGCZ9J7rUfAtFpsS18CjhpSQ5YjJWmxXPVRP9eZNfz4hwiVn4Zeh9P5AfHCCKWKAARMY2GcpJyX",
  "key1": "4JuDosS8YDnmLsLNcnf6XqV2LFR2t2UyETivs4XUriQEYXf82qG8kUitPeJGBsJao92DL6qvMvB1B6mc8i4Y5jHJ",
  "key2": "Zig4gEMdS6iMw2scJRE4oMz174tMpLH2VcvY8oRTufHQPRPC4Zy7BMJwMC4AukFB6TJWbT3iVQa1XQbKNUwuAoh",
  "key3": "3X7KMW2DRejCWjcueUrQtN6XQmbH3qdz3AXX1TSHDnxrWZ2LHAG89y381yTojafPUeSqjk8uisDktFxnUxi7D9Dj",
  "key4": "5ZLwwuRtKbzEb5RGjjLzaGHzcf5V2A6655ywcwRY8fg84hCB7numjAG5aPLgDfzsJNU1hSkusQTMASMwgW2P5esR",
  "key5": "57fEq5HAMv1JVqCmTChfcSsXc8XjNLNFHpiJz8byTVKsyV23jKJp8rkW4jTj7p4pbK78ELtH46sg7cCZXRxbyQA4",
  "key6": "UraiAoBq5QmozsJ5g1G6PS8n71cWNg4wi4VXmUyDMGa2unuFdc9NyJeFmRBZKN7itQNYzyd7pHxda844ngGfVVF",
  "key7": "5GR7eSatRTLNqWVRTnkandKBdozgDNfur1tMXscD1cudP69rK4AG2Qm7sQwJXnw2tckR8SBTguMBAopDVSq13Cci",
  "key8": "VsbBoTHpsTb7cNaDVnNH4U7KKtDvGyooX1uHsBkDDTBbsE6J5e6gTf6QV2dguaohjvmF9qcfEKGMrfWAsitnQgD",
  "key9": "3QzsHG211vD4vp65JLKFoqhha7Yb4GkvuKmUCXsMw58WzWcpBFVfoqnogxYEMYFSaUtvprjcEhr94QVaLRooLuMt",
  "key10": "4YhzJKsgwQ85R9HUvvaXRr9ZerQ8YLE1tamETxTbuUetai3KHWk3kCjwNZBra8GNFYmVD4keUo7esqAbr5BySYDm",
  "key11": "5JsiNi4yKg7W9oTWtmd4RG6aBmQiLJ4wYf9WJsqHHQZaiSYhVVs4Q2k3qqpTePgUmLTeEsfc4FEacnEsjC5P4moj",
  "key12": "4yft3en7fZRue71PDRJfcpz6xUDkPcfXm3sjDWTTXgRJWYB5rtPKApwCEQFjqHQokZtjzroN9hy8p3PCee2WVKKb",
  "key13": "24gQtwb8F7FGNadjjMt5rrPPkBFxz1SVJYzytzd9AQsqhMLLfcqNxyTfhTXv87KCUEW6x9rPgbJ7wtooUshX6qZK",
  "key14": "7heDt3q5aRaLfPRW4dJrS3LWshuNDTXzppFhK6ARCF7Atbw8tgfzoWzQFwMvbBgQmso6QaPL8Hatah7CL1p7sRu",
  "key15": "2wkWACxVvLSd1yQhwN2arJheTwDoY8pSz82eG3KfHcXBriXvJZ7D4qmGmbdqExvSsqpdx5yCaXuWduzwoPrm199j",
  "key16": "5WKdGCYAW4pFNGKtcwJNVXkBe4X8gFMg66wL8cZHXTAs1vMBk6MUgUzpcbU9wqFoUajk9HJ9zDxPEBpfmyQWW95P",
  "key17": "3CMZFpjTcVzYabAeMRMtCwNQFvwYCx6FQKDju3iMdZRxCFKJYMvhVywQ5MwEspYYqizjfCmRTBsaoniAWKiTpEsh",
  "key18": "4yHrwpSWzaEV1XWcyYiiL7Y9HgJGhTAAQmwYnx2tg68prLCp137sWg8YUE2dX7xAitindRLgiV1XhQmAgwmrcgGs",
  "key19": "JUwSZgnoQsniLUF3UoTJbsPfrTNcprW1sV2zuvid7rFPUbNJuW52tAqbUog4eT6kwQt3u2oGAJ5t7nppLLq9CXG",
  "key20": "5oSg5KpcVK3AzUHXz7HspPQoNqNrJXobsiMvtHxtHJAC5tATGpgpWcHh7V3c9twcHjkgFBEvedKNsQDu7qLtrb3Z",
  "key21": "5VUFbk8TQUf7H8BjZMJcwWty29EfZ1BMZpBe1reZLLXZzMjmhtYBbVoUveXTwuDHFCfVuBRh1Fd6GmoQcFLNZxmf",
  "key22": "kegXDQxtGD9WoYgoASuFLbZJ2AguU8QyNKnhvPhMWTHmouD9GyDiG2DAAeGv5MjMNFeZThgWMXPf5nRCRHLmFVM",
  "key23": "2iptYU3KFoDNfHqL9HjFQVWBat3at6NEYa9hL8B8N6djSYQhmLZPtnVV57UsLQgTzimG4JRBeGo91q3qbFXC4Dkm",
  "key24": "5v5FQwr9ePVHk3mArnacwcbH2j8RoERA5JQXyfDPewBwzzsn4ySTRnD7MUj75MUqKBLXCimyvn2mpQk3BgWiBEKb",
  "key25": "29eEDZA4yuQQshgvDQ6y74WF6JXtzza4heKoFQf7yR4n3Fs35VWb5XpWHNKWiavNfYbaaRvJGsqhVjf3wZ4e8zCR",
  "key26": "417Jo1fBpBWG4HSCQU1qEJc1ok7DY4iTCertNGA3fRmdjiTYTnJtxQunzet54rBktWDBMnZNHhFhYihymj7MyRjk",
  "key27": "24Gom7wbntMbT6PrkLbK2FhbDbWgE4M9SaNseBgEgWJdcMVQHuAdoSjsGGGTMjmBQDSRh5mCfNiGiv2bnKc9BT6t"
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
