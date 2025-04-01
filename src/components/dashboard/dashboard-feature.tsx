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
    "43Xb2oN3wDiWvdwZYELVqeyYUMqN6wxzA88bnJvSuT9AJwsFjPLHrJje5udSENM63mruBECLTLqH9xouPEvYRjXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1hkt5qwvMUEenGf9ATH1pLQFtd6kgnKmkVGtv8ZrmCsg4CYSxEUQSkXi5cDqbZ3sotiGeBuoR9ox3W4avPbQ59",
  "key1": "5He1ATj4ADmDUTRu5fngGi8xPqHxwc1mGCQ6HsA7v6D54j35KD3pjsvh3x9EvCMTdgzzWBAG2Z3ijc3RbsqaaWCc",
  "key2": "3cvXrsB1KfwX72UztTza3n9tfJQq7pCKErbqy5fWD9FFrsoY8mXb55QGcriWgHkH88RirvNYiEKwe39sSbHKcWrW",
  "key3": "46tkh72YgVioEhvYSPtBXSwZx4uVZN3hJdLaLjk1h3ToKW9yBDhM4SD3qxzUAGtgjM4xTqLqsqFPZuc9UA6P3wEY",
  "key4": "2DJ6LHEBhfAz5afJ4eFgmFf9va3rJe64iQEnRzQq8t8jKKNwDRHvJaqboqqnxWg7K9SbEU5Np7jRoK8GMCqiBQma",
  "key5": "4XuJMry4NUhrS3xaZZ2sH8LRtLcZAA8mutYUcfy7EtE2iLFTTFiqfR7JdEZyPPemuHYQ44GhRnUFFcN5XZky3MEH",
  "key6": "t6xr9KoxFj8cmYQ32t38nDuarcBgRxP9nRo95DKxu1kf4Nba1aF7YGqGLvoJyG3whxdK8fUTdA2ifZU9vS2rCsn",
  "key7": "2VCMcoGSdwGqR3uJSvqsMxP9YBuCAJY9d8pvYF7YB3sFDUDGpjnY3FDeBM1Cm3oXM9yu7S2DqYgGWKv5vhFB3Kvm",
  "key8": "2paggzxan9hVauYZHNWoM5U4C7Bj2UiYypuECeebqNdVb2szSM7xvzB5nrMhZiKTBBkg75SRQUjz72vYbcVoPK79",
  "key9": "5K9sVdB4tTkxwQM6mRc5K51YDdLhN5BWu5Jbr2N1Tr4TkQbUvdwDGGBS5vWjSy2WSjPoUWBjW8WNFuRhcENNURWQ",
  "key10": "54cGjZ7vqJax4wfw9RpzCKSthyWTSaUQZpaDu3JK5hbZcEsPuEvvgxSuNmKEdSC3YZmuLLYmRmQXNHc8VMtH2JwM",
  "key11": "2gum93x72VxrJTWwgc8HrHZjmeiBZmMhRpQDGi3aaFTZUyWtpcqB5XAp955fiF66bBWUk4QysxLSxvXxREYKAvys",
  "key12": "5SpJDBF2ByVmyXmiQyhUJ15Nvs45aVsnE1M3P78qc2YqfrgVviDVfSfAx2NE98cyeg7Ao3pFotk42dkLE3BGVmwZ",
  "key13": "3sBWCfrAdCgchP3qqUbAz236ireqpK6pSaSRS5TNoRPoZjztiGyZHMi4BKCrLMjFzq4iQJDXSzNzkhyWjktngPRX",
  "key14": "3jH4SZH4PVAcSsXWaSUqmXc5WC2pBQJ8pdfjXoG2ELWxXBWd7xAXLY22W7No6DED9oQLfEEfvnk35ffL4ijtJScv",
  "key15": "2JsKXA7ZNbpt4FYh6Qq8ib8Ss1ZoXPmeeC9Cn545eXKWgnZAKpgGZU8yfH99yjZGfLtShDRfPfMujBmHo6WfD3HN",
  "key16": "5VjBV2JAqvMSQDXW2SyHCp1mbaraTj13zffSx4GCa4FLq2NdrMoggqcEkb4w8dpFRwYJRVGNGtAvfSvDmqF2nNxv",
  "key17": "QnBsryR7hG65uVPQZkG4zeyzSR4sKkeNCKFGx33JEuK1RWWktQuZEZJUd499NBgcNP5v5qgAduxtkjX42JQanz3",
  "key18": "2kzhn6dyHZNTWJtkXn6YHHemDquKH2GF4QorH4S76kHU5Pmi14SLBTAWqGmnwQ2n64i4WwQ6tz4UcAFj2jwKTYYc",
  "key19": "2F2XNeEKUHsnsqRDHkmxsLvnTF2yL96p8sowg4evh6nEwMuu5rnenv3h7vkVPrQEMjS42EPrApx4sqcvpvjBUXdS",
  "key20": "2YtBuBTYcpX1hBxNrRP1ieQwqFwzEaBumYCPqcShFLbz4a5vQJ175Qnt6M61XthKTEesURUZUnQQPFKGzxcEN8uq",
  "key21": "5Jh6hCaXecYoGionL3SSzeFkdPKdgUy88tK3oQdiuqATvmu3JdjNtrfWbZEGxJquDGyr9qUizoz5ac6rpyDwpGwa",
  "key22": "58mFCreFK3vKV7ooFK71eJnzKGkZ1dLjD6FsvktWNvNxiiewuk8Gv5htkFPbV9Fd7TiEiG6pgTPRtbo7bQ5fJzJq",
  "key23": "2RTJezJf4WoYhsVacN58Rith5SCjkoNBhm9fTc7yeY6Wk4ZtJ8zTfSfCFofEXPXoBF8r9D7wTvCg37VcJdN2c2G1",
  "key24": "4uEPS4AhFE9U3pf1ccMiSr8r3LPP8dmd4ikqRgdVWPV3w6Bmhqd2M6ZVGSJRzHniaqxg24ZbHu37rYPcuXWk1dnb",
  "key25": "2sws788z2hkDGVbkGDZnrrAGTej74iSx7myBbWeNdwj5kpNYYxjEk9Tb6gX2ErvMpKWzweKAk9nffPSzc1E9wREb",
  "key26": "5uUFQJ8A3P5NoRkuHEwc84dhiqVP6fTt75gsyxrPA2T57uB2PuyBZSPqtH5wPPcXkELddeuaeQdVuCGHE64VNFKX",
  "key27": "2trVpBJ9MuS8BXJTMZg55tw2S4xuMoQE99YVBxvJcCpbp88nsGwyZgPGQFSByT9gkyzTxysW9AAeqcjk6U75xYsd"
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
