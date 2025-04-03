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
    "3M5k39jtiPXA5u3XKDFhuCJSBGmvv2KHuZ7DFkvbkXPEcu1F9zw3czs5vwbDEwwuMoxnijGnQniWipRDuCk3c24R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eQwfMPtQfNCCW6g7La3XGd12e88jbp46b6VvHh4G7oXU7B5FQZY6GeVrS8zkFKfUpmjuDKxmJXac7nYHKmPCZD",
  "key1": "4ghnd4QALq4P6ox1o19H2UkY7qRjA6ghpJe7t2AfY9ZniG2yD9NpguYWBeh9ReqvjSh1b4kCodHiDSn7gWmR9o5Y",
  "key2": "v1paEG5WwETQoA4kxm4VgF812RYAMzdJknfjJRSfxF7C2g11ZWnJfD57WN7yNvrgdZGfR4BnL94nfF2j6E8ezDr",
  "key3": "4KKLdQvvN65P8c962jncYNdBQNoGVWepiJSUvzHkgK5CZVHMGkYLXyEQ5hadWwY1pLWVfWcVMKJvYAW3KYsFvv9p",
  "key4": "3abk9CYmWNVRrEeo2gi67oXR17vBAh2a3sz7h9WxrwqdqJHitbTnAHMPxHkRXWNwLZp2oKmZGdkFuCD4r587wKcS",
  "key5": "5utxWSjRbdVU8iFBgAVajR15wtuQAADiDgdVp8CE4xM5LrDwvndUMWv7d8rqjYcWPXz5sXRHTbMCWyfG2xpDMjKp",
  "key6": "19MUG2v96iNW7bqKoD5HEEwSVVtMmW5mLhKAwL8JmBUJUAP83JD6bR8fNZa4B9LeVEKZfDEVHJvsRjcNgvWqtMh",
  "key7": "3mxLWFXM7RkXPscH7tghLbjTpdVC56ptGPFNU84r3cJUNy5FiHtzHNsERWmeFTN6GBTzpbyx8kvLrAnHFe2MjAGr",
  "key8": "SCXrdgBSNehDmjWY4sS1U81mZbw6ckg2ceufk9167h6vx8m8SxaNJoFFMSt6dmZdX4myYuDuZRnCiAtgfa7d2Vh",
  "key9": "4nggNjnN5EUKebVRHTMgP9bKNyLTrMwFmPnFrRhnmLyPKVFHuHmCAi5iaLFMHBexXwCmtqhoejTe532UWBEfhKh7",
  "key10": "43yo5SVCNTars164KUNDJuiTHHMJEGbEXwbVe6cJgh8zTUYBAYN24LRHtgwatn4we2vDmSVqS8BEWCsfS4DLhqpu",
  "key11": "5k94aqSQVBaoLNEUMHFbyoHZoqQNeSyyRWQFrxGyjsvi19ErNN5YKxEfdpN7XPuhnKMijdy3QGH5HgDJ4VSf5gs7",
  "key12": "4Z1th9c1r5gZQwt1kgC6KqpYSiDCgZjTZm1uLnFrEGvYEqqnbKk8wBhRYpp7Ffg56sz9Rq5buygXHNUN9Bhf12zF",
  "key13": "4kL2SyHcSDUSKPgxqgxEgwkoEYugz1ioteM9EbrR9uWohmrYqYL2VrJgC1AHW4h6c9GQLLozHFP8h9FouvyvFkii",
  "key14": "2WKNKcfGivMjsbXDGVM7f6dPZDnESNQL96zRvLAcLTrxFrAsnGGwZjeTUgZsU41nZQxqLWfNy3T8CgVZ8kuAon3f",
  "key15": "WEs8fDcfSQXJcmUdAt6bJ2WbSwAn3MEyunSGMv7XnNMqUCRwWGpJWicTuqK7Ua74CtX7LnbhFMesrjX7E6qJAin",
  "key16": "3oehHz6E4K9TizJwmeiDGRbJyhZzR1TcLYxUQbDmHZpLCCT29ErakHW7oaiuYdjxY8XFW3QNZ9yvYCjcedyvGtfa",
  "key17": "2mug9LWDSjkHPNBQs7vvKGLWu9SGYVuV3dPKLBEtRdrFS2zAdM7tDVrQNLU5MJsTdnfr1YFuh3Kyxh4Mmmiwimct",
  "key18": "67Ktc2PASMrLLyvBF86gCZa1sRLdZkUVFqLco2k1tpsnNWRtYBbGH1c98aKmdHwgPLXeycDZ5iF5EPnLFjGXKHMm",
  "key19": "3JnVDgfnp3thWambQXbF8t5LuXbBKZJzrgzM9DMwCzK95DTxUA8WtMQzELiqCUXiZmc6QRnYGn561CLkDQXkzkCc",
  "key20": "4W34QKwZXKELkJQapxMgVPZLnSjixjDemhfmQQ8mV9PWNJerNnpEteLN7w4cbhY21wjs3x1ZR2bPFC53k9EC8m2Z",
  "key21": "JwuxsvxhfYBrWBQ47h7RUFYE4KbXw1Rxqf8KapoZioPTaFnj74mRphjPQBUejVy6GU32vMQCYPSLSffPeQ4rLtJ",
  "key22": "5DTN6CqU8WdAt7YaCfFQiCv471MjpbhM2WaANnwgTRhvhkWLxcD2aFGDkp2rnH1xEA7A2ckzZ7Rab43W7EiYLmK",
  "key23": "xzuw3HCvEHgechAspHxp2WXQyc6RMpkfnCW2Y2NbJASC3HygtP3o75BBKWmsRhjnnZJBWCDX5jWtG6mMcnE7KK7",
  "key24": "9MGoV4H56Xjr1HFHasj3NUNUfdt2RYUynpxYk2vwRPqatJycFGyzpLhGdjNcyZUrqLdGxvK3NJSDi2q8YrcYPkP"
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
