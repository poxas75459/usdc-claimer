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
    "uSRFPsFmivwMLMQvKEK6j5qEnisfjpQr3LQDiDucyt59jd415QdznTTQ4aftGe9xVhy7BLo1TnxnsbQzbjQUArw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PviDdGt9RrJkWZVTBKLTzDgSsgRFcN88D2AQmzx3AefwTceuFmrjf2jZ5pk4KE6JLRy7pSjvhZofJ2NBMVpxgK",
  "key1": "N6GCcdhL9aTJTyL5DfHEHXBHytKmkuNuDbeAGKMdBDtLikfz494w6c17ZfFYpTxCB6eZnqWxP1FkqPH2hRx4Mwg",
  "key2": "3Wj4UEKCSorSLkPFLYzcmdJabhedAJUBvqAh6Qy6ysdFf4pYjgFxmW1GhnkovphY7L3G2Y3BHyNKR4yQwSLvoiiu",
  "key3": "54YN52SXXDm9RKSqm44ivaiRfXW3woAHnc4JcH3vegw7TXp6ruod8D6shr8Ya1fwSidYeRcDW46VciiDw3jbFV3t",
  "key4": "61NcDmwoK55gLnwqY7HvTed11sqwe6HTyJZsbVJ9brsqciV4z787zBEx85QV7a68G4FHT6KkD1JZJj3ojn5qnBkF",
  "key5": "2TwpCC5fq3jcXq28LE2mHgq7GwS7r9sF81tkKUdUpepP9jmpmVhNZrzuRDP8ytG6XeW1YqxeSMCvLGadu8KCvfLf",
  "key6": "2JDuvcassyPvHgvKz5EFqpxCK6qN6t7BEPGvHummG56axJjH269XDgTCkqEv5RwBbbA7wgoiMFyAgrX5zaGt4NLy",
  "key7": "5JTwsswvkJdFvdsJhvCMVSJ1aaEyCnUUrxfW593upEyprqxudA7bNHQeh8ZXHnx2xoPNQhhA4vGapsPtLtWiHDn9",
  "key8": "5TdyYRD6CJiGpYz93UB5G7E2zqTkhf1LWFtamvVrdqDVMQLD5UhfR3TpKp6SEFqmrstwU2sayDjSJuYkruKpYwAi",
  "key9": "3DntMWSVoZZDfGBnF1Mh6Wn7v4eFqCtmjcP514i4ALHG7ac5uunb8XkcVcWSzT5aZ1jj8XeUYawyunxdiBTqxWAa",
  "key10": "5gEAhZstsoV2KuxRf3rB5mxfEF4VWkEZCicKXyCFynJEYAxwt24ti49iR3Hmfgdom9DcnRWdYKQjFUCw8tmSd64P",
  "key11": "2v6PB5F7Q3LWuV6uWjN4RARNN8mfR6ZTUACKXEZretb81Rge6wkD6MYvh48Voiz9soXhgd1iHJ6joztBNr4Eiciu",
  "key12": "277rhWvsiWWXcwX9QQaAY9vfPA5u454kFYGmPuM9wjnquDnYenLs9yD8261NxZotKoMBkYCWWJVFFQpmFqnGWwho",
  "key13": "21VnUsK1AbLFQnmL4ZYyYZWCTWpy46Z8bHzXkpBq6tXDWPabeeCCnKJoHfED3zT8CkdK7sFrgNpNWD3McMzh3DEg",
  "key14": "4EZgj9woxevBUMQPsiX4QqZbDhmxucVY458HjeC3LCXAu8QTKk31WjCug4Qv1o3thxaWzntW7RHh9kdshyoteMYj",
  "key15": "3Epsdk4sHWFCCnWCCBwuFH1fpyp5jGvvj8VwnZtd4xyGaAu4DCEN3fpkEpv5ZNpNS5H28239VbAKGgsQ6MFHeVq7",
  "key16": "5rB8aj9RjMp98xxwXP67N6j2vSsHcejVq7xBdCTZq9MMKLh8CMHV3kA33VoSdgLWEMkb8651Ujyre3GYuVg1bEjf",
  "key17": "5EnUDQ6TCSqMYqYhLnBDapg3yXRzgmGQo7cHiCcPvLcL4zYJaFprnYc2j1Mczcpi8AAzddmiUtBHmb5Umoh1G7Gj",
  "key18": "hYUgQU5MaxBuMYP7QWVSVNbjKW3wKB8vLF5wFGbm1FSnDjDiS8ATgEZHqrUosFNSLaAKbNzCRWAxjCozXAhQ5Eq",
  "key19": "Kzvb1J8NJcf8J2WJLqFd9dhqRHWJJjh5PrfNR15wRg8TCSKjWvYDXJ7aKLyKjmggjcEvzvby3nNAGxKY5RH9kCK",
  "key20": "5GFWPdXvC4pdnL4YvH9upCJKAuHvS6SDU34ugdZfHVz9R6nqeedK1NFa6VNqEbfKen1pcUexkRUG5ryrSXx5RDz9",
  "key21": "3P3TJ3D67V1WAURxJ2UW3kgtmQ36yf9WZ32mmaApRNP4jXYqr8txJj5EBNRFWnh9jNqK81FWD7JSiUJqiXQ2abPQ",
  "key22": "r56g6oLXaDc3jT9gaU4aqXExrNUhzUQqPANUbGUFSSXGBznfFrKorariS4oy2XD4H3qP2HHPeCiCGE44v6RVwJv",
  "key23": "35Ecwn9ANYQKTpjZT3vHdZuyAwrnCziCKtxBkor9qNLXBSDmKQEmTJSUpgk3P57wGAQBCWSCxoLGcsTxtoZoG9Bn",
  "key24": "3BHM46v9szz8F9TJU5aKESGKAg8YFrQEP2MTFSCQ87wNLmyxr3i9ZWRWN5PwvwgbFhbeEJ7tjiUFnyMvgGunGTvn",
  "key25": "5DtHGtkxVHCnLz3YKAih9PYrTYDhKx8WtyRXZxc3EsjXNo1P55uwE1PD81aEZMEP2HZQHhjhG6nFAgN7pksQq5zu",
  "key26": "4c1bFFx7ikwnVNEEvnDEeofTFsxjfd6ZFAesmL1WVuimqEj84WmEQqaGHQttj2frTwboWBY55T8Q1XPmHbdsoCKp",
  "key27": "3GvS9nvKxJpJLadPvZ6YbPekoTvEHnZRnZ236TGa5wwtwgHwsUGbJd62A6eJ4PzeVvSDH8Ps3Yfk2cXBxGr7tTD8",
  "key28": "XNfPj6cUb9aWEKxgFsFFwGiLPQk7Dj2k3Khfcp7SbWnRadQXRhe8FCBgNjfssv9X7GaFgb76JgGHTajyjatHkPx",
  "key29": "51DjR9jhxb9Tw9yLAEbnZqDdbJi1LGCyN3fAYtZt7UBfFLALChBCR9TLKvknPV4kb7EndSwCrBF53YJogHcT4aRa",
  "key30": "5D3gwojcQ7GwmpuczxRBoG6Qswa7dmUhZcaoARreBBVRBC99b9WHJ247yTzctSiQgLCRXe19j4V9ax7BDJhmmC4R",
  "key31": "5qoYPrhMtbNirmTBxQD4mkbUEENUc7f419rsjmmNe2Y7gf41TdxE1m6UJ6uVUyyo7JhwFtoUd7dhFk5e7JdAY9xh",
  "key32": "5kto9tVRD3FdzWKvGAdu4o7cGCtxH22N86mc5FJUBaftod799tmKFT615UmhwSbogCL3cAPj6J35jLzHFM1bFnvU",
  "key33": "ZM2QkrMvjFMPzRyD3C2BrmfC9iARhkzZ1hU9ZNeiJmJ9ufjbX87P4Tvoso6hHHtseJBHucwrttJdwCP3KkHf8nd"
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
