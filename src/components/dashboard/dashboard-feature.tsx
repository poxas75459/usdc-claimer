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
    "Y9cSCiSZWyPYk8UQjLSQd1CwkfhghpfRaxEUspdDzpzy1gz9Uof5EhpZYkj9xA3ZoYuQsJ2hkNe8rZ2rt87Bubw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ChnMZtmEPDszedENAJGKSk2LFbq2DLbzaH7VBpB1Cmx4PjBE6aZNdzi9tj7HL92Dn4vNBnLvuyApgTK24nZrhSK",
  "key1": "2nUxGCeiFE7LQ81TNNDcwDjWwii6fgBUis6nShbMD4y7eA58qPGVHAZyZT2NkAcQBxg9mk56yFUDY1oRTZyDGTqF",
  "key2": "4F9q1tEnouH2w5TX59WZuyYG4iNZkXWycydpCyNDvyxrzewtQGatpPbCQxrUdbd9KWwdmnW6NHoyLomYbdvZH1v2",
  "key3": "4tgGeKBmcjWbmjqnTcoG2NWz3GFzskMoTUXnJKfaDyCBc7R4Kh94PNMiF5geUKHFzEgouaUEA2wiD1TgB1ebJQvc",
  "key4": "2YDRnc6iiqzdzAFPezYPDgwAA129WJq7MwMZSLLPRPMW8JJyNRaauRMDUvRTfhCX74RE3HoDutdztoVYYyrXgPQg",
  "key5": "3Z8qh9BUbtzK5Hae6fsP96nZrXmXKwWiPeKgHpcpvG7n39uXBHnZ4rvXCdnyvKhzDGCAQhf7wjwGZ2ZncFmYNVGg",
  "key6": "3QzFZwqYBU7XL8ZT4GpdvmvSXPttck87NdcJmCcH4GHyXNw7jVf4sYjoyPAEk7WbSZ2HSJRdKXtGrJnYyj9H63C8",
  "key7": "4BUX7Vy3XnA7WwBzEXM1uzSf8TcUEM2Vce3ffkGQoTs1w5yEobRxnk4mXswDaBZsYMmudC27vF3D3B4tNhMAGboU",
  "key8": "3ZSK95PePvbqVFoHvG8UoWByu5JTWSbRCQ2B6Kj1GuN6WBqSzMkqxqHGgHz1mycoXKuDzEgj2oVC2EdAZpY8P3KM",
  "key9": "5rfGvhQKvQZPApp6q9DD4WYvgcmFDkRAUQGQVyJCD6pp1xmFFJGfaHqEjLpUvJooySaUdPHasDEHEjjXxuFss2sT",
  "key10": "sc633e7G4zgBuNVGtFrMbfwRgsjW1T1oFknpU5VgkJxqyRh3K8mSngNhQTArdsyo3qpr3iPaVvpmdZT8LRgFs9y",
  "key11": "2NtrFSHgddSk4JWtMZKrP7UYP9VDgJhUUdjQk4FMXvAEfY3sdRhTN17aVHK1MQ5gNZKy67T1xt7WQFTsGZogWa7E",
  "key12": "5Y6zFNBuNzMgAf8zeZV74daRXoNJxMxV1jvno7n4dk5npPfo4PbJFjpXdhKCHCodbtupHo69hBaLCDHAcsSisZ6i",
  "key13": "5ywXpvci9TcK2ksdnwR1nyie4V1tp3YB5MNm9QxNkSQfPg1ZcerhRvGva38WKmsb4kNoZb83PQa88EisW4KDjr46",
  "key14": "44xW9JL1o3zqppxR2TVmLtim1zxq8dGWUFcsCmnRmvaxuMTM9UMqUH8b2bZNQktDr8Ci9xpT23NuxYqEtS8RmxZG",
  "key15": "2QmyUQtQuLtT3qumjf4qXE1HyRRLFDerJVaqBiguZUb6jMksB6TFYLUoT1Zb1zDoB4TQcCvsN9xEbkRdigCqpH1B",
  "key16": "4xbGHB3UpP1M2zjsrL2Jituavf3fdXLYw4p7d6J2k7T4zD4ZhfJCq4qstqZoQSvY8CTe3VVveXX8TKXHTBFaaeeX",
  "key17": "5YJwExgoYo3BPjxm7Ere7NBnMzN8GaLB2x4RSDSabaKVxKjkwAHccmTW1dGvjxdSJ7MWXEvxfpwkfZc6AtrWUaFV",
  "key18": "gZg7DK9a5pAQZcQJ871bFZ99ya83jrt44zCbarJmNEuEjsoXRiK58as565cvpgQ9T1cbywvSigJkW8RtFejU1vK",
  "key19": "3xRdrMtQRFABSjpmHW27iFcv6x3JqTWsAhzTwxkSWyGq8zCLWgJUtzYBQZR8c6juntRCPbjPzWJNAV3yiDWDPFaR",
  "key20": "3towWSjWWekisDJrHEYbGf6sN7yhVRzp6uNT2PYiAwLK93SNvh6EM1mM5nRMSYnbMP1r7XCSEo63WCWXak7aMKDN",
  "key21": "3Rs2NzyZvkegP28WLB9MdBxXgWGSabGdUYM8cFGrsQ2BhoWP9pjykN5qPxMm7RShj8fEc2W4f5pGrjSJBjnkeXxZ",
  "key22": "3JaAP2MfNvfvfxgCeiWivvaAMfZDT5j1cWCgSDVAzAxnikRBGjfhBaxq6qwZ9qMKgAebuPXwTrhTsTr3MeV39HzM",
  "key23": "67DitK3DHSQS6YkdUTZL8urwkv5Bbxf5ot6AJq93qVp1ZKbTNBV2qWXGdHogiwNxUeKiT13PVBvcZ66JKGfWfZZG",
  "key24": "27hBNZuR2QLVwC6LBxwYJeKKkwaMruUhc7vsZjUkh4Y2SVmBwdfqHchkYum8fN2f8J7DxUMDdAKEjuGpCPLjkZFi"
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
