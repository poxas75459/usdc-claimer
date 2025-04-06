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
    "xWpfbvjoYN9oMCetAesZ3KJM5vCKepEKWjSdSV6cPngN59Y8j1ibo99juAMoANt1TdZfSXvR3VdwNSqNevxZDii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BjxjEKX5EQCt8RQ5qUPJk4WjGgNZfmk9EKEBTNmfUaC2E8wWtsykvVZ2qga14Q3f4nTe8tNEU6HN8jfxcmTFee",
  "key1": "4bGgXzq1ayoEK42Y3y7Ly6MiHAt8Ae9oVEsVscqnkxE7TqZkRqxRWBfGrqXcuNnJXsKXS7wijCXxNV3XbfknAtYg",
  "key2": "41oXiVKXnmnMczfAFReYQYub15iYqwmW88NX7YN8wNbnmw18EMaxdQC7BpZzQAXLtB6y2LescxyVzuxtnEeWicBn",
  "key3": "2Vkg8ybsqXTBTAo6ZmrFp33C2xBd7D292xUJ64BjyG2gmE3q9duHPyzrXqwG9L5qWSS9QzKFDgtFeZ7j578btaN6",
  "key4": "4d41kPzMfVtMGWn5j29vnM4kXmhBeURo19JRF2oQ814MK13yFTZLUzqD4WjpnGnj7GBPbjVTQHM6tJFNtD2yCVq1",
  "key5": "mqq9RMsZjd8xGoX9j1dHH39cKQ7RRXdhFXUEa4UKU8fXChu7WTDEQgmvLCK5tGaucwgb4sG7nvgAZAdoRpgYDYp",
  "key6": "3yMfumMsKPEeBrtMD1mg4JPXjiESoYNg2ERGqBfdh28cfK7tWJ8VwwveGjZgUo2862RfuwhTMAf8zKVgHEbewJpv",
  "key7": "5cHHtNQn5xgWJpM6pLcFU4TosALQtWmdpyrUbHh1KVTzW56mfRR1fmzV1QRzro9X4E9Wh3QHfAgQ6eT8yw4uBS6U",
  "key8": "3nNwE6BV6TdpL2YjtNUy8n1w3T6mhuJnjYGSwzk9s8zGzUxeAxkmuXW4PyMwYcSr1mzvBTbBUJB9BoEZgC6vmzw4",
  "key9": "GpHMDa92xAs2cEM2w2qzWsAQBhS3Hgz2otBttwezfsMkSacisJFYiVaYXjGUoCvJLHgS5Bn2VpWGeJQppVwHmTP",
  "key10": "5fmcAuyZ1bXTh8rT3dVbj6XFKYAqgRXAbthkvugh8Pfd5Qyc18FWqhoPGos2nRnMc2neWv9zyaAJ2zPvyiWjBMhV",
  "key11": "3vfAciFL3kBEduEqB5pcLZSiKFvqBCRv5AFoTqCGwk7cHqi3Qz7t6LMqvNEcUYC5BqMnPM3tjKZE8wfQv9cSFpas",
  "key12": "4oqpwvHE6Kpco9BYav7XBD59Hu5Cx1sZGuf2dkhrP5k2byBMRxq6WFSLdvT6ZnZxQ7P18LpMwMPjQuq5Gyu9Rmsv",
  "key13": "4SBuLy8Hu8z6McjoPsBV8F38bvrB51aiFmxPeTLvCvEWPtSkonx7dLs8i3bsu5nx9MzKpEx9MH8QerGDhHrXMzsM",
  "key14": "3UNxrACbZwynxnfUiREStYFvp66C9AL27PaxojE8Wov4SCtZH4KR5a2GvZeKL1GithAcbLQLLkKvddfUK52pYTT2",
  "key15": "3vKpz2xqs2rPXyX98kC8YukbkMA664ennu6qhFerwpQZrkAkMdVyyiQ5VPZGa9rs4SajduLUtGxK1KBJWATUJHR3",
  "key16": "41shmu9tRXKCL3GcvrYk1pM1tNJBpQUtNGNQeTsPdcSUFGZFb2ArNWGx36dzcHzHeMCkn6ANUxpQAyYvapSRUtt3",
  "key17": "77ZPiB4htP9V5eVPJLk7KjKhjdr82CUR5Amfj31zscgxSnxZEzgeaKXKMiLbrTsPZoFDjhdkZzqx697HLfcdNh3",
  "key18": "52BEm1hrfqRkHWkMRmw9B4jt6ba6ufSec1ULD9SZBAbHXSeBnbc8dn7QyTwLgjuofyXbN23e6DuozXnqUdkUJJ7d",
  "key19": "2vaWvbU8hkXLAEfdxDwGbNhingMTwwpRauhPSQbed1eicBUNXnuf8RQygJKbVKLcoxEvKWCrQg73bGKPMMeXDD4Y",
  "key20": "9VjJk4u43KWzb75EjYDiSBTAH8EchwzbCqzTTiMQ5KpjPQEjca6Cmwkh6WTtCnLMjpJJCT1YHKi7VAs4NsteECh",
  "key21": "3UeL5zFtAkxfCNYTWi2d9X2HwqRCGreW1cEWxFnS3EauzyMx5BLsmxZAtsc5V2jZzhMsR3yNuouo8qZxhby8hWyb",
  "key22": "2jiqFsJB6L8TWAqsmieFCCThz8QYJqvHKJanEafge5AwkMs5T7x24JVVRwVwaatq92DV5UwQD7FAJMcu3M8x3t7r",
  "key23": "2Jq8qvVbpwKvohkLnJrn15kq9vu4xLMgwcG8KAzkQP9hEsEapK2yjja8irCV82mBBLqpMm2xcQ7DyxYuP8QphNJ",
  "key24": "2nCA7kdx82mNZxXToReRazk6fZCif4ftEKHQ8shEJ6tzjmRPRncJRU5oKWy3c16uhGm7rWQ2YDVAc2SppQda3Qtu",
  "key25": "5WmVc7eYqY3nrPZCGYYZBb9EMcEU4jJdP6geHH7oDxZsDrfESputFagJ3XGLn4ak4TNKRgM6UXjYhFc8GR4LcCid",
  "key26": "5BE2ER6pAgDDZATFWvBEPDqPx8sk2DRiz9NZSAiUMsuTSd4ea3pYJSsiYZzC8wzN2jjebhQPeFxbRARUGpwZae9q",
  "key27": "61kWapMw4PuVnyoSYfsNW7DxsCJ1mUzwWLxVg8H7GKtTCb6iboYXHibM1V4QAmS87R5izAJ8nDAVHUD6ZK7ifaMZ",
  "key28": "4kan6dteUoKK6vjQu9UdG2xfG1uAxYd8shYC6SW9WPAbKw4M6yfoCpNrewawkGXSDZB7NmUdKwKMkTGNYJncQEzE",
  "key29": "5xvckdsuFU5SLJEp7aJWEcR9zVnLCuqLnWBYuGQbxibtXHi1qWJPi9sKAaPHeMrQ2wSHC1GkSXs1m5EVBT2ESP6a",
  "key30": "2d7t6kP5jf2wpL9uk9E6Shk9noeLDG453fHUjm3FEPR2cwS4Rp61z7kgv1Xw6nhQE1cCmJ3GV175W9Qdzdt9rGR5",
  "key31": "2UMVC4eFsDmxgm5NfUhLPhaqLXn56tpTwgCPyRc7QYajfsV2DADwzqMTPWUe1zzgvgD7bXrnMAUwqMFHEpND1Bjw",
  "key32": "4kDRShimmpTk8v5tmH6hGYAmRC8Z1kADYV6E4hbJ2gmFZRJ21JjX2eYu965ztxLpWaWAL71hvsKW8PVGUkqp4HpG",
  "key33": "2ZavM8KKRkJQRQYscZwaN3f5YvxV7BFgBsedZktqF5fnohdUJNbMDaRffnJibmTiYM1N7iZuFPFvxM2EErGCaUza",
  "key34": "536ESKnxMGUSzo5x3i3EbV1ywiAyN9BrbQsuN2f6LBqxZHzqKPnCKtyw1TVViXgRPmmGssDiDMSqhqkWbvutRXTg",
  "key35": "4TbhrYAaZLixUQwAXTcr3qp7fkDc8HeJ371cGD53SzN6TewqFmXmK3xC6sJR1wsgvEDXG789UGHaZK3Py4h6ppvp"
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
