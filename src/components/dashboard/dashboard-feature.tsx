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
    "551bqJXgUZ8c6auTqb2zfhVwHs6nvD3zbXN2vVjVyw1H5TK1E3an1druAibpjGhCMXPreYFMZKhU5ZdmqgdmETQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GENPV46HL6Ut9UJWnu6JAE9nf1ssLi5Fsd3qLVvFBQsZsM2HRdq8dK6AhvtJZCaBGXC54PgYvjWc7QkLwo12T6U",
  "key1": "5JooGLcG4e9kf76qkYWbyY6h6nExA3GR3G4LeinnGsC9uHcRu83S65caaxoeQEKPZeDGRSzEgoYmvhet1Zz2CFWF",
  "key2": "2nZGeLgkRGddYnBDfAHehn4o42qV6z8jCprjyVZwhdi1LGxKqBKk9WEb2snDo6N7GoVPht3M8QFdMRQcW8c2anfn",
  "key3": "4rNQnoms5WzbnDe9vsDhwZUvNgNve5AKWa1vMnxh9B75GxAUnuLVsWAijAKEAth6R8d5q1QPf4hSuXKHRjBootNt",
  "key4": "5A66x3QBYb15x6mYwDSxjmxjwmAG7TpFHTXeSC8rmvFTJkxRBUxZk5HPkEDeXZZfC8RGLY9LM9fjjApPcwpAEtx8",
  "key5": "5onXcmv4if3gY4h1mfanKtf8bx9pYEFjBDbjSC2Wc9viCqvA7MpExeFwNYFSCUpgQvteGboGvhCLVdyzjKufTACv",
  "key6": "3cUYjUj4AY3znwKLe1vkYzakjyaDzPKfeTgfwUYeruZw5vLWXg6ipGFJub8JkzjsFSV5AGDetTEp5MTBzdN8kb4W",
  "key7": "5kgsQqtw3Z8Tbg5qMCXgL2DCmhNtw6NFJtqM6nv2PgFtv7gmo2PfvybHCRYA61R4qFazy22MYMEMWAn1TZfRgkh",
  "key8": "5mobnAG1Jq1TpYS4k4mSZYF7MKMNg8pZkSNucvNxsRxXh5Ubi3jAF1htNfThzGhgwYWVWL5UQNY5vweWhYUb6hdm",
  "key9": "5X9pBFjHkDQMSet9Br9CMZfVCemVJRgqVJWfBa8sUsuFkbVA1kcxyVCjxJ5Due8iPR4kosQg1arua8XVpiozFYNq",
  "key10": "5fZN93unD9m1Y83ktLa5FJ85R9QTWsoES4dapbj9FRzJcx8ow8W1D9gxJyueJXYAYmZsmVHSwXSf4mZo66nYA482",
  "key11": "3we95693a8W4qwTorN27cJ7mUUbL7aMXdgnguHEuTiVsxnse2sqXzKfNUPo2z3uVxWz23NZdWwpKB1EymAKBvu9i",
  "key12": "38ASTN8KXBYzxzkwy5Gnr14pcUnvG6aLcPk53HQYAYbKpbwNmEntHag12fvAN5QA6BoLnyXsdsP6om6UzgkJ3f88",
  "key13": "2RVnAxWkhPKywc56uuma6KA94vDG3pycqfu3MkHetPKrz6ChZdiynLVAwsoLXpBZWWMgsQHSDhiJ2Mgbj8wG4TNQ",
  "key14": "4ncbPixmVvMLygZTWBXRNJAWZooeALMoH1yJZztLwS2n5qsonQ27pUFCpLHFevp7BvRX4mA92e6kbGuimmffL8Aj",
  "key15": "36KEmeNhQYxZ8jZrNaaFwoPFRW35HDvrv614e5AtcAHkhRDJsn2f8oWJ8sfNDGkoHViYQTtzvMbgYREvkzkWpEkH",
  "key16": "35d4kHoskv7UqHGXFG2Y2MM6cw2ypRF2tSiLQ2D2eZWk4YtcUwBa9V9jzCKyN7Kacmm26eyJyXbsWPCdDQsBPe27",
  "key17": "4YXNt6eLsDjMQzfZ8ujtGUWWbYy492pQM7JGgYoY2C5UJ5ihgCzV5JRrLRv5yTg7hQ9P4W6VR6gmtznRGztvq4dt",
  "key18": "eQiyhhWTg1XtUNQoLnxRA8Kp6HvNmBqSyCxv1EBBQx3rbYZWf4ASdxv9GTuQ6vmtisrNrDizJeybgtFFfYL4HT9",
  "key19": "2tEvnBZ3rJ9UFjukuLPHRkajXeJbPKLxPoc1NLxeUp2YvZxftJEBP6pB1Wtmm9SDDvpdnKLVKGkzD61x7PQmk6y6",
  "key20": "3FxZk5NUVaukLhAqGUsracRck6Hgzf6VTkcqskpUM38c8UzfXgJ6vYRPqe5dTescpbN8o63J7EBYHRmPfRzMfpG6",
  "key21": "3gnNVjDrFDHLCYgxKdqJHicsaF2YheGDkJqJGTK9ryvzzt44DbmGM7EtJNAeYAGriVRXH6yKHr2BrtVeGJcrf4YD",
  "key22": "5FXM3Zz4k4qxxZhWzWu4YzodrDxSqNiF2LTMBTFkUEMKfrfou3NJ5LJZsdwqBd5cjkjmM4NQ3RJz5nucg3CWDvPz",
  "key23": "4npKpn7yM1vJbwfnwr9byW72onPpck9Nf23Y3ESTz75od75EoUtWMJGPVSvmLp4Dwues3kx7pfqLiJdN8BDVD1t9",
  "key24": "2H3WePDneA3hC3B9vL8nY4ghhohewjmgEncU4SXLRK8xJoR4u4LfeLNSFTaJ3rHxDDx4t1nSARpByFq2z3JQXRe",
  "key25": "4QpTarf6K7aVp1N4KNeDA711SVPiNNiyJNQxaHn2YpPo77rQMCND3aBeVnSpVmX5HT4CPZTVAGMsUYPpEictLnZ8"
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
