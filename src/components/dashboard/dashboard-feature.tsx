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
    "3TEoCHwCHX4Gw6KippF8v39Hhc6fa12TAJbXp8ckNYt54HvB2acJc6YzcwmAq4jTJc24Bg6YEC9BbhqGeKdey3sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36w2Ee2SqzNdzuBGsJju474u4Qfh9C9S3YL7KhpFRX2K4QzZ1JYAeaoCB4T27Y7aitcqVzPfChwM9Rwyyv9hwZh4",
  "key1": "5oWCUycAC9Xt8Np3GySz6pEjToS3dgU1VKbSAeD1YFy3C7JWrYJaes3QCZeVqD8xbF32AHr8kRT3PpZVYUFYAxkh",
  "key2": "2W4hpRWkPvFfrnov4Y61SxiC1XpGY8sFSr9DqFnWiCPiAfc1eqSYSLt3othrSJr7DaQ8XuJoCCaHeEWs92Wqmh28",
  "key3": "sYCvBGz3A6aRbE6r5FUspHJPJHUQKJgJwW9Qwy4CfYne4jWPistDGJAY8YDpc6ZsUnBysnre8sCKPhwyfstvgT3",
  "key4": "22BHyu2HnbQU7NiJVnQjwvSbfe9nJKDerVzWfNP46W38oaTdqvPbJuxq89eyXcbya7JWxPE7Wn8FQJrPFCvzW97s",
  "key5": "4aeMYtS37y82jdcmyVR87PQVkDW2SmoJUrgXiDJv5K3MWaZyEg5fUCB2Kvuy1RVMkVuHNvTVzbnu2WCBE6vJ9Yem",
  "key6": "2Qacd2Tusck5ttF7tqEEQcW1vNhgdh7nRTseaRAPa5XDqAE8HgSpbME87sHxAyfNvBBPWNZCu1zPm1sEe1aDiTfm",
  "key7": "3hGfYxP7Zwt8913wntrPjaK228EAsjWLXpeXnptKGpFUtyYyRcHJqHZXwXa15aQ8D9RGhqeksL6DZG1dvaJPH81v",
  "key8": "aRrzZaihWZ94RXSKvPEg2QCNzvpfHfTv6cYEJ8tpJY49aLntaF6PPiCTiwQJmDz6RvwMrePPZgF7gTyvHNvUhYK",
  "key9": "77VPFz9Q97bJaZDzEEM8XtCXuxohgQStE6CjpsWbUXeBzHmnoFUEQMtHbXFT49X5A5NStJFS2h23nFEmSNcFE89",
  "key10": "MK9RBc1ZM8BNJeH82mRHnStEU6Kt9pdnGpENnypih4zb8LLSbrQmLxDLmrMrqRuaAeidVdBasJE3Zy7TFpotHWW",
  "key11": "3qz8g8teiLptD1wUgJZLjx6WxnFtAd77UCQmFS4C7C7bQvpx3a1WwTrC6LczgG7BeuAy6hR3MW3BSBNjRX1Pqv4x",
  "key12": "4RrTyJCJKm7P69Xv8qjmF5RhEBZXxwX1weRKGcbdpfqnHpGrQA39mUJu8N6Jjgc2ZUXwhHSfNXV33C5kdSBNbTUT",
  "key13": "Fh2eBpkDf63rsXZfcnZWYFB38YMHvWhF4fSksNQ63CcbfzNU7BjuHcpwiJyUbhnhzntMagydGBZNDraXPVLrURr",
  "key14": "3YgLBkt5iQztKMtXGs7PPMFJxEPWtCHeyYWFdbf2cguScn2rJz5mW7k4enru8tEJz7HGMhWJjLgph8fpGffp1sgL",
  "key15": "4XFLLLb1V5cKsuxtk7RL6bbkmeUcPQbBr5WAeD9y9CDGyPuT8e6kcyDFisSArjvjqMo2w8b1pC7FENLTzyLWKFRd",
  "key16": "wvQ324PMx9es4uzhzM62Jb1Ep63vYTm8YFFLnyXYhRMLmLCoSCQriqXtVBJLc7u81BU2S5fdSin5DbtiPfrHHbY",
  "key17": "3gQDFfDh5BkB1K5zyxJWprNibkr9ZbSd5PyovKfUjmt5u7rmzt2SwCJnq2Q5XdpXus1Ak18iis48YesmfGLveMWR",
  "key18": "5ToRq3ZCfx8Nu9GHwQM66vAJU7YjVe37LrYmzCJHsXxZ37jJpRTwwej5jt6K889oCJ5K1sNgqtaJ67t4Yi4ateed",
  "key19": "5cW256qYeK9CSQz5ZUop2Td8MUG9bY5QnmLzDjpYn1N7qgZPmxgjn9irSQTkhsFRVYKYHFFMja54sJTo6penqB1E",
  "key20": "4etCp45jS2Wf3BJFPsqyibTo4cRTxuRM537CKwaC51vvCjFzCCFX8EpsHybXpq9LYQx3eXAa2fqrmCMf1iroYRho",
  "key21": "krCJf9f82xS4tMrrnB1AUDgjNrTM78xc9AXFvmaLMFYC6YFwBDYfqm2qQGD7XgLP9N789PyAqQ8PZoQ9fLGDgBH",
  "key22": "4LPa3gZVf7afzjeQ9W82ynNS7dtwtUPZyMaPPqNodeBM7Xq4oNCSdo4qF7WCyDbCbduzFqT68UZzNYxrVbawq8Kr",
  "key23": "3Kjw1zSHpVHJxpnWPEV4WcaAE2biRfBLLq1yWXABCwM97Ub6izp4auyAh6UoyBpQWSFwEqrTUAbLQpaVgtMGASsi",
  "key24": "TCAxSQW7XRHWsskuppWg9ASzFFANoYBjj6renRTUGnqVHGyZTmcnpWAe7U2ucQiwLTC3LkKMNFV1CbzAuNuN8vM",
  "key25": "5GF6tH8Xjfc2EUG9PxU3nCzQoYmkQ4tZ3nVB9QxHRadQs5W3pWafTJqPFY8hMGe4bHWJtdpSEFb1bfbUWvkBTHT1",
  "key26": "2RKqQQ4ka9tRG4maZ6jgWrxAu3BHPCgFNWMFSEFKc1uK4QXB86ycKSFLVFKCuycEDGssGfNpq94bcQgAaTxxR4pm",
  "key27": "5L1L5mFztRqnS48Ndm4fswJrquCvnz7mBxpqoXM4Q7CYiicv7b9qZMrQag31hvJ4tiq57s2HbmwALEb2Hpw3S2BM",
  "key28": "5XyM5EVwdw3B9ve6xiXdw8gwnByanJUM91y64dcZVZGW4W4tcqPvEPxfcQq3RPxCwfgS4naE7Q4TovZMKareVFTh"
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
