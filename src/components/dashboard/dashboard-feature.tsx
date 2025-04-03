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
    "3UyKJm5mQAjeCi4fkBGgAECg8t84BfU4Mqh3rYTeJDG7bXndpSoCUWHtWpWM8aQBewc1Tz4K3r7Goi9Vjqwad9eN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cJgccV5XQn33RaQvbsGfjDKUxUvgKu4uRdeNH2u6XgA6r3vCDVaaSARshwY9Tk3miREBjA6BgD9DY4rWtM2jcD",
  "key1": "wWu1T6p1uCTC1wuVcces2ozcTE7whHfY3nFeWcqj2QuY6B4iy9JhYWP92BkXwrf84u5SGUDytbhUmGKpu5aqTES",
  "key2": "5f67u2J1mqLkYYYfbLmZMSqeJvLJ4aY3LcGGWHZg641XzQZPU5tR5uPZcKucbrMxbfFm8Fq4J9YDFKEyZdfjBxRR",
  "key3": "2rDYkcVyqDMG6jE4pdyGUhmXLUznUfnB8UT1icyYU3LPYuHvwbaQj9AgC98MqZbRGW49tdBCGdWjpq4fmotrJ8me",
  "key4": "3athkH7XVnKMpuXuFdLjb3NkL9SQMZVxHAUEuw7pRQmXgWuiZU72C6FY19sEGdPsXyNU93hu9MEk9m3DCiZC9Pzp",
  "key5": "4whaofLQFPDgQ2pRRyzCrxY5vwvDzvNBiZNbWTfB4vBdfQsiQoT8MLMBbF5njY9f3ZVS1P4RfNFvwwo7SAvJBkx8",
  "key6": "5Xws5yYeHjRwGr2mNaw2GZDQv9WAPBKETbrnf9G4AmJRfQPdHYLQTAEHHawSSqiUATd9GqXEcptkf9ZWqzreVTt5",
  "key7": "4JSDyMcX9bBCkUVywQ9TiXt37hPMEHHN6V9xuPLv3B6nzEXXnXaTPuUQXB6fiCUihqrHMUF8wMjeaYo1EVG9XAxR",
  "key8": "3vdDotF5P4CC7hp2VqK3koWgyxvcSjSrszzAmNf5YrDBwmDQ7iUJ5zVvNQQPYeWgZkpkAc3kPnq2F7aZ4dxL9kTh",
  "key9": "nx8AhwqgcdgqZBXMM9EAcF19sN2r3S8uaB1efNAufvJdiCs7sRCfndstWZjoa2XWUQCNMYfadLiFFTSQmFFzyiM",
  "key10": "66h89jD57kJLy2aBW1MDQkE46pmwGNRN2x5guUSZcFqjBsvVKDy8gs7cQNcJaQu1cW9kA6iDccKkDtPoLbC4pZaC",
  "key11": "Mz3UGMrMkL7ofX8or6NC66yB8o32Qv4gd3TgoEP2ag4xbtStpi24haus7XkrPsWncYjbKqnbnp8igzDbNEE1HiT",
  "key12": "pNSP7i6a2ARzSV8pqNhiooqoSeUu5M5LzB2WQbQ9yfDGTGxbZj325LfRzmFo8XMiBqtT3Rop8rUbw3r2TcSE2XJ",
  "key13": "4zezGKPSRouc2HkjPNFjGFqCgRtCx1heZeMYXG8S5xjAvBjzkWnq4YtLQ6rVpJagmtT1Po4YmvENdiCVXEumoZvq",
  "key14": "5jer4pZEvdYfS3UfQM6WzHChNhyKG6b4RgirAsDXv2qdJjf9B8kAvA4uqg3tVXR3Rd25a5K3L26nuzSpLjGPW2Yb",
  "key15": "3QcaifnHXgT3gq6wGaAc7JBnCVwr4tiABqVJob88c69N47aMJQGjCRxFF2QhHAPEdwixA6nVFWRM1ekouRKAqGRr",
  "key16": "3c6dtsAsJUCUgBEpTnnRPuSMfxKSSLX7pFqCb3xHbYWBtevFAb5nPURCKSMmXJZBhVAUNNficbNBCEXwLmQc2PDD",
  "key17": "3bjhAM8y1MPFXjsm7N1hKLNqeigc2zWcKdi8BnrfCsAjzUJvjgWSpujmDHnamGgqKDQEneVTqSP8hShK2VHNiKF",
  "key18": "6564qiTVRPd8R7jakfEsvLJnT8DHUijmQLUJXxSm9YtErukAFNJJrCut692eT4GnHqBajwzMBEEjvUNPo6EfJn8R",
  "key19": "tNp7ViXchuvZ1vWPWGmSD9m8raQQyuQFYoQTUBFQLAoVv3yttYAWKE5ww61XMjPR68j3P2DGNoCkAzG3cX1wa27",
  "key20": "2iRpDujq4mXKRDsL8huyLPNVeG7T7cNXpTe34Szrrac9ocn7AbHorBuQ7MrCy6HGC2SZDQT3LxSV1ccGmg3iCeuH",
  "key21": "3U6MrUQ1HMkfFXTwjbgDau4vQ32ixHJnthh6X386Fdh3ke7BKDNXiqHYcPN8ecVy3b7vAMGsxcL1cFmxWSP9riez",
  "key22": "5kNbsgxmNMjKvyHQmmdYFjF5rRd8cifzgyARKRuLScrAGdoSXaNJjz9Qd3Fz3WPnZZpaagGHAUu278advoB68nTd",
  "key23": "2rFcXzfCDQmfQLJvFGRu4Yn23CHZH2n5CGK65ZBTp23MRcbcwyNUTh3xJSyzcjk4jBrTzaePZhN5KxuoKJ7groJs",
  "key24": "3c7GknC7R2W7kPTSUHdntXCAtuzHRM41CyeBYxkeySetWpMkAUkWHNQPCM6ABp1VWJnpiRnLwhrbLseVk351MwXm",
  "key25": "3Xdp49hkqpHExzHEFv6v3VPRdvSNtb8zH7CBaNZERHkRiBdsqwFCkTnoDMon3JsE4cu4zweRxU3rgyvHK6XzPABe"
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
