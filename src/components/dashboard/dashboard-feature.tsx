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
    "4wAres1Tf65MZQNwj4mjSPybK5oG7Y2tDG2JTmKe1r6Y3RB7WBUaF8tyDvaYTHQGGbbe4sxxEARPtZujZVbUPYG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBEpLQeZSokG8UCn1bjjTS7i7q4vk3xo9fm1Mfe9mX8H9BuQjM2GjP9mGRUwVWaUmsS825PVhpQRpFZTSrzYku2",
  "key1": "wm63hJVTh58HbFR48MGhqzTrKigKcdAfpe7GsSeZe5m8pcACaaTWbgPe2NqhuSSfBrHxrhUBrZ3EWivH1WVA9ML",
  "key2": "2Zgho6TYsAsWKDFCu6c8pWKnTrWbY6sXb4LD21nM7U5kWdJcVgH37vGXQSqKpAZ8LqXFsWQvoVUt8GoMMC5GUggZ",
  "key3": "2f2nSKQMqvJt4FeRK2goPPGAqVzjaX9zo3KUxr2mqL99dRwz88ggm95sU5A5LUjYY4EEQ2LyDCJ9kAhpeHDRW7Mo",
  "key4": "3w2yyt9adTbvcT8Vih2trJRfnsy7BMESi29AVsPhUNsPk7nhJ7ETkfRTz47iGxunwbaLjZeTBPjU77tbkjHCuqWK",
  "key5": "mLqUcZrc7QN6LfvnvjHzDf8xsmcx3CXZG9cM9rvD1k6qrR8FMKmtdX2YadvUG4zcfk9z21jPxrhFwoYUbR8RjD3",
  "key6": "5R9kbNS6uQdDA9VQdePRer1DcWRVjzA5QJWPPFwTwXtpWtrM9wixf5xcoZWnMd59KNbqmFnnjK7hs2FAepLwpnus",
  "key7": "RjCh1LeWn2koMeiQ9aBc2caJsTyQf4e5cvxytmSMPGszN4qeYT8R4crbDxSwsTG29M8fyiEaF8Jck5tZLMSoy8Y",
  "key8": "4wZEEtMZucNDUMUk4PSVs8b9EK2MN7zwkH9JVKy7DxP517DHyHVwYR7cBdp4Z2yFgrnzt1JhGpnRdCkMiagA6xCQ",
  "key9": "ssXWduuqeH4C4mpU7vMxMMxtWDsv5Tf4pYH2r3aoGpc9j6gm4e2rviaHPoNkXFCgkkNujREZpk3Q8e2erLnWcGf",
  "key10": "4jw7QTvumJRVZa5HjJ3iZx4X3xh5CW7wRq9EXs8RPipmkDvG1k47Ews94PHiJhR98s61UwRFVBAmS4oFDeMDGJcV",
  "key11": "4V79mQ4QAn3HiCoYUNSC5utYfoxVZazM2MYYa8GcrhrEnAupg2L9ZSiHzfeWLQuMCqJMK3CXE4qLsJVUBTohMuje",
  "key12": "4oPzFWTZFMTr8zSKALQFrNPFE2gkwiQSwhkWeTCNHWJHEcvBi8Ub9s7hoxDSZLfRZzCizcLX4d1Qa3aTssXq9YcM",
  "key13": "34Ghz4AV9E6bRKqKG2ASqTzj41d7cfH1FyWbDyG4hHvYefcJtpyYy93xMHfMiavaA5X4QbGSAihnh5tvAqJZkFrg",
  "key14": "2AZBfeckRfoic2MexGfi7ELkENKzbS1YZgY4ZD7oKynQf141o5iDery9VYN5WxQKLT4m8gEjfNSs19BCBGCvDF11",
  "key15": "5iBNmq7eaTfB3sUCrTmPXhJc49PCRfpMQMgb6wQvDDYLhHMdkqgntqmoxJ7MLMNvYQvEP573ad1kKdtCFaLto5e9",
  "key16": "3Aci2eNjhvSzdgPTZHWMGNvkMtr2W1KzqGLzpyJYeiWJfpNtC3e7UWB83oHvQEDAN6JMS6Lx8USkbZHQLezhNbzN",
  "key17": "45qWwjzC7gUrqEXi1wLyxYyNUASTQstBaCKBfFSsL2uDZd66FwW1oBWBXJMkSaRbsVnQJNcgkHovwa5qr77jVHYE",
  "key18": "4ayLDyosZsRkc68CSe7bMZBKjXCKQVUunHG2g6rAfkD4XnCfnv37BYKverCTikxton3ow5fPJh5MWhwMuiB24kA4",
  "key19": "UCr1UxVwoiuwRNj7VLpvzwzWjAWKj5kpH6zexkr2cTHfmCnm6hjD1RS2tcQk9zLdbrodYQ8YScBQCjArKEffmdy",
  "key20": "51w1NTS1SnGNU4hhtrfATxttGvaiv3F6BCCa2163UpSLQRbiqhZLB2vJDvq3pTeCzTJjp4qXcqa9BaZJTmqzbscc",
  "key21": "5yCqRX8Pi5meW6gQ4jpi7nixgm5UTgHCPreHWvY6SgcHFh3gfVpHqup5CyRgFKBQgxEyv7VTvDfi5WV9JAYVTmdP",
  "key22": "37HiX79T6dnQTSZsK5UEEgTUuWUc2o1zBNz4K6rbwdxJEP8aDmdjX6cTgePneZ3tAEy3yWd1Dh9VyPh6GueLKg6P",
  "key23": "4YhPTr2ADriKomxREx6sfUbgxQVxc1zCUdHt212x9De25z28VCCozf62GVtscLjoXoieAS3f9sQQpxn14DmUSbPN",
  "key24": "51VWL3ZV8VA47y1UF9wAW8q23yaNTJr8497vGCZxufu6qikcW9LEQJkVjn3sLtJocSevFkQRsvabpWdmQKbLr55K",
  "key25": "5z7T7u7xTC9KZBHh2GGjNV2xTxpm468TL61gT5ZDtwZ4zWPz42apRAhi2pNTeWUawHBpK2roPzHzt6tXe5GbgRAz",
  "key26": "5ccZs7oN78bYmC5fwExFTx9BY4JuT1xhoRBW5hkvvWvwQLv5d22YxX1rpPU1HUm7v9ZKbLTHfwNfLFNQsJYY5HSa",
  "key27": "5XS26xB5g6X5eftWLqwgEZuywND3uQDQRQHfjnnRZZdEU9dNXmXZp9yv6tzxWwgyrDUSb6keNh6TpRPAikP74UDg",
  "key28": "4e7kzzyQ7Tw4qwhDQfWcGBunFJ4t6jXcpY6DGyiFHpB684ihf5tGZfTqGgDYYPHWqggJ4RPfri2cgmh5V71Rabk8",
  "key29": "cftcSJkTUt3UZLUHEDrWFumUcCXZ77sHa8ktPNfkejsskNsZ8neNUceug2yHkr1FZhVWCgZAXXcp3HPmkQs8wQC",
  "key30": "3LsAKM7ognYYrBQyG3smtWe6B4rvovtnYN35T5XHoRAAT7xUqyC9geGZAkRxbNEQ6biRXupKQSzwMEPbNGN21V23",
  "key31": "3RzhpozP8pGTXybwbsVVvaU9cBXZ3wMgUBWq9qPsRsmnXiHGUGBRzPrnxcBbYUdAwg5rVYQ6MCbhDFWLgcdwtohJ",
  "key32": "5wRb2oTixbDfGU4DCFtHctpvYu1AvY6HrF5rB4fWN76UtQXrVCZ3gJLE2gCB5CDDwK8xZ1Q8mUVFyh5WVYHDXD2R"
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
