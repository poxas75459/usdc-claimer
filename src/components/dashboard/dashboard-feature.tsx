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
    "4z324h7agUgsfSexyxiZkxUkxQv2t1LcrAmH3XuDuvbAGVrRBFo8pt6DLUZvSTJhzvKzcQXwCk7WGW2FbHDzwEnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Py2RRiw3mk4D6uERYUcEujC1GdZDSmb6tMuU9nGeaP21EFLV4exkadn4Eyr9CTcG4r6x7sA9Y7rv89Xxd84NVva",
  "key1": "3P3tiynBmuAamRGs1X9Gpgqjk2R8tN7V49RiZEQPXSk7x4cGD9uNBadSf9AY7SfZecwawo1ETpU3XtYQQ1bQmbPf",
  "key2": "jPyQT5ZYrEjjThn3aTpDnQDBWm3wnxZN7gHAJveuUtKhCbSuATYkmZrUQQNxUtDfnSD1AhnX1EYfabJ7bpZECQL",
  "key3": "4dekmwDVufpSkwiZLsBDV3ti5RqReASL3GQ8fXpwjwoRhC5UM3Kr4jQSTJqS41qkpfVYhFJYm9jpwD4LFpor7roH",
  "key4": "4qfctkRYfZ68wREa7GHmZUMSgotznadA4pwdiKGugs6oc2dHT4Gua9LYNbLsWgA48Q1Jyaf1JVyK7PmJ3Ffe27B4",
  "key5": "5CKawpDktenMKkNL3sxoc2k1FugxsvebfXh3pS9V4s3fW21zvAjmLYsL6naYiiAuWsXPA66C8iPx3yxhqBkoX6Uo",
  "key6": "2sPcJfdio4jcNTaA7K7niX6fJKk8thYfyAQ3CfW7NEAVKNsA3zAJ2FSorN5d5qMVhkDLyVmKniwMEYRj1UrHxBTa",
  "key7": "2LCQHSUzkxZYj25DyhwsrwiSk2hurwmdVeUsAYkdSkBTBLuPWpHyRvSfBcVvR11jVuVfFyNyBbys8LvjEEBw6PzE",
  "key8": "VbEHywNiSTV4LTVhTJTsyK9P8yEJgtqjWZ6Fbfk6WS1QEaAwdgDKd9rUGHYLvRMLjF73GzPtRLdVtbEb5weE1xR",
  "key9": "5HyjCMjNi274m7ZfxFZdBxLj8ybZbrKzBH78kRBxuwZkDY7FA3KWo9o2CH9ksdbhZayGwKC5R3tgV6cqojHomvfS",
  "key10": "2uYPGVR6ymaTsNcWRbTQfgYNREPAWvfTFoHEEXjum5Gr5twy57EZNHXavJF1WgfdYftcWRWJMGoNko723mTzRxne",
  "key11": "3pkSV2s89Lq8GDybc9LazxCg3t7MhyGL9ap4uMvrgrAjhkGAmN6FD5bPENTCECEYRDMp5QaqfoDrDKGvb9RJntQV",
  "key12": "nh4s4i5NJXM913ua4mZ4fmaoL77pwp5Wadc4G5KRhLnTbSwSW3hs6Rq25ffxaka4HB1xvTygze4rhdc46ie3zpJ",
  "key13": "47i4WsAiLLQn6ock6PsdL26383xtRra3m7uBn1r6Lv7gjYaLncSLcDfp2gvTeCHJXVdDK6iiVDLPefKrbrNhHedn",
  "key14": "5h7AahowzZ4M56YosEQHQqFGRs3Su8mPc5ctBWAf2csb5TswcfXZHfRqfpTL7kEzjw1ygBE3z6cFRHdeaHGYgFMx",
  "key15": "4X66SqMGuiqHrg4oEXyEag4BpXs1wTi9Mitp2DtJ4FbuSPkG9gsBWSM26wrbDEbcHV4YefprgVEQoNkeC8iLS8zn",
  "key16": "5k1CniRWB3chqPZxKzeSKKUA48GBgL5ZVnL1qw9CbUiyWKmSibdu9awUhHdgsWiLnp2y1uaFBDpqrNwnqADYVQYn",
  "key17": "3rTPN8LtXisZFtJp7XDpeuoyHSCDwgTmEcQHSBLtyKGi476w5QCqEVdSFFtYWEkFtfM1D3zD8e8HpmG1G87EWTEK",
  "key18": "2UrHumkHChcbAAdkBxEhdyh89V3FMpBudhWCtkK1p5LUaJiBjbEXCaRS5ikgjt1sMZyiCs194GpwY5VaeB41Afqk",
  "key19": "4K1xgxRkZgSSuE4aWKob63jtrBHGCjTFrGR1awgD4ByR19ioWThVnbkkkWTmSAwFCBkwLqyf3iYQ3GF9g2qJ949x",
  "key20": "3HsyT2BsRR3azFai5MBe7eA4PaPxCuxYvXbbhFsjgJVyYpDC8mnDGWY5G49wBbuuNJbzw3DLZ1mqbvH1228oFp1m",
  "key21": "3pFUjQnM13eDxz6cmg1pNbTENawXgmGc761cpwM3XzHphEVi3RLzrFQFUqZy5tQQcrDqVabmGBE3aq82V8rbEUcN",
  "key22": "4U9a2PwYmtuk7NX8FcFyR3KMbCUZUTfXjF1HbdiPT4iedjLXC9MudiafFiD7sRq3HjKiQSFdiqZdyk1RuyfBkErE",
  "key23": "22ujnxUa49zB7gz6yHTKrGwAvBPeAUdXb2gn5kN2Hiet79aMqEEAdjnR8oG8hcoHtoiVxjp3zhTK9Vf9aXtcQo8K",
  "key24": "67gBtuXeVx2femDpcMpDVbxH2rEHdXq4TFh62GTBFyCnYHahULFfHtTtCFKGoryBQBS2iKvmYqbjGVpPWjayVEea",
  "key25": "5Vn9f7dTFGWTcEZjVuB1KsA9T5qg66CBbhWZbimCCbLVix5BgUdyjFknVnWT94vBsn4t4xSWYA3EToMZHCRhT65L",
  "key26": "5YCURaUEsmS37gZuQeSzSuE15UuA4dFxkMxtYSQKcnbSYJLRMG5XeaMX3ooknJMmS54KGjiP3kW3Ah1PXLBZbxgy",
  "key27": "vc3GRhtDPPEZarbb3AHLuyCmQs5TpznQMYsJTxuFpnyVBnrYcrdp8UoM9AjTf6FVVXdNjwxyw26pnR9jxE6GSP9"
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
