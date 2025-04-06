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
    "2SuWDYYJwSS4UiG9j5GW3ogS9DT2duSxTtdT5bM3P1JAeXUzejzpgU7emcgjmf9ToR4cDDw5sHDWcHS7bxXxshru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C3ZWP6SC8GMz9efiNgggxxuGNSN8b9N2zLjXVriyZLg12CwL2BfgDsvrUCNyKvbKbnYN8vvgC63QH9g5QRSVgky",
  "key1": "39ZAVUKecRQWtjpjAhxK5fU16WGrdagMtMtKVyBnMDh8reLc31ZeN5RjcyayEXdZd3zpvQoeWCM2qtHPSXuWG1E8",
  "key2": "5nx1Jgptrq8TvGHUio4GnmfYr8LJB9Vkx9btCXVWKRgHToAKoLMXU1eVeC3wdvC9SbsUXJL5mhCh6JKDxGnw4uPS",
  "key3": "3aRGpGAkU5QGZTz4DoQQNVYXDoGmEafZUsMBvsxqKB4agbMGeWPbqd8gsYUU6zER18W2DUZEqCgzwEJVdMBYNXJq",
  "key4": "tqgpphgfbto1NLJcDtVk483M1kDARhyBatj5cbm6qdSb92v2NQrMqugVASjNotUtWBYz371NyRCsHhH5xrYA4MG",
  "key5": "29dZBDQz3YeifGZBLZCJovmgHX29rGjWZbNHjo6PSTBXUcAA7yUEZi7EwUR6DcAC8knu2a2jwvfoB9j39ctVGukC",
  "key6": "MSMKf7cSmiMau1oNkqj1yYwBP2eZfvjy5ToJyEmZ7LkAw7g5XPi6yN1YrRcnSZdYdkRijraNtFbT6erg5wYMgy5",
  "key7": "2YFivrBYP6CZQgs3L9NfKrHR92GfuiVW8AWDMHVA3BxpzFiNdyyBsSMpk9TCpYreJAw4NjpgPdsM7goBURt76e31",
  "key8": "xhH3ieX1A8nNhMrHR8YvjVqZSQ1rsnHMsbpwPX35A78F4FvvM8p1vddtCygW8Lb4nbJtbUEgZw4pHYyvcKTWjyo",
  "key9": "3zZnZz8BdSMeBwzmsR328t65WFNYm2d6MKZCN8QviETqBKgqu9FEXaJhdNskZdHF9fBeEzJ63uhCA1T8qdYRo8KB",
  "key10": "345W81GbG2WgHJ4GddgXTMYCLbsHKxVjN4JkPJwC6oskPMp7JEKfoX9aYeVDQ68F6QeKVL7gCkowf2vXgQJdrjBy",
  "key11": "2F5QjBvcaksoFHmm5dE9r94eBWKU5f1qGF4HJpurknF6TyAZ5DR9T6nhzpMLs5jfu997Nf6PKdraPVsiLGgxE5wp",
  "key12": "2hcbvt3jv51wb5HCx6TAbHY7nKJFPDNkDhRfYqkAAyw77Syo923wKznQDSZGREkHH9hRJqmeLaCqyT2tfNkSorof",
  "key13": "4SBQYdtfVJHf6Lm7ceKWFdAeiM2dMaibQoHGHm7qoCfcD9RWmVynsJDtNThd9wJWdyi1dhvwcFpyo9JdTkz3n4be",
  "key14": "4rTLQNuxVR9h9My78XFhUSfHHcHgFTpen2x9C4C99pBSevU5CJrZvkEyfuDktzxFY7LdhHAgCXjTN3WUU4i4hRmd",
  "key15": "28LacELXNChTfyCxQRiXaYPzC86CJMKDm5wzMaC7i3rpyJwkRVFC1YX7EZ3FYmqsRUGzfe7rh7JH6Aa3b1GK6njV",
  "key16": "3PNhCfuwGnNixxwUejD6KmxaTkrcKnN3FdRzAYX8xZZmKFFHyZVya8F1iGR1GhjrCyamm9JXVLum7qDWCa5xVCmD",
  "key17": "5Ub8SbrB7d78UwX8QRwtNzE71ZVWu38ie4sQgJxhU7bnYjcXpBdNCsKrEVPeiKdLSBzMdZCD9jmKwhCLLy8dgdNw",
  "key18": "5UEcGitBc9r3458FzhJTjxeytBmfYqVmZNpHTEoCAR888Ep2oKc1RV3GX7rb2nV7FENycv7833xF2ncY3R3mniQS",
  "key19": "2GaRd3X83FJGCwQ3DeXToubdhfkhcG1w1w55BAX4KGDBqVJDKjKuAKHicXBYWW6VTXFQoM6fFKmRwjcZZQwKh3ys",
  "key20": "3mAHcvgn665s3Q1hmJj8dXVbjZkehDz7cCYymSwfqXMvNB4Mk4siZa8SbhmSZgowhnhUwcXTfMGhnLBgf7xbTbcW",
  "key21": "xK1B9RfhgNiYbNgZHpkQK8XFF8J9oeCiaWuxiXUcpMCBB4mwwqvbC8D4QyxsDUJ29vZHs5F1aAwKgGu9VNdRxhy",
  "key22": "SDCidmaeRS9wCMYQkms1d2SVe6PsXd5x8dfa5RYVFKpRY21S6Q9zNap1SRwFFmi6NdQbi1vbJYSpG4FE3X34Web",
  "key23": "2nW362bhBDZcnCjfw4ph4M4oUmnZXXTdKRhbJ7FudHLrRRjdQwWKp6YCASvMPpaAgM8ZYkD1ok1BVciAhATjZLYd",
  "key24": "31hgLUZgkvBz3Cgq9mR1keQq99zy2qG6TxrBrPQE9EGH2zMQobDow11R2LKqwiFfwTQ55J9dQxZbhC1zKn7D6MoF",
  "key25": "4vv5dufHyWWBpZR9XcFA5HjMNVZNnYGeaeoHKVzWY6geUt2DEKHjrCAKPo9XSMWasCqBrxaDv71hn3EfFrZjK7rt",
  "key26": "FNq4gspDvi4AarTEfGNDkm5BUFQ8ESQiEL9pDGCQ3AR7nhWDumw1TnfuDvgqJA82JRwrX8QvHPHfYtzaJCZhkoP",
  "key27": "FZ8ZYHPT11mEpLJiEHYJYw31TAQLtQ33Pd7D6Ky5DTBrcbc7rPkcHKCD2Ri2Z2dCDou4WVRSymkm7aQq2ok5k8W",
  "key28": "4eqacpPZzvP3DPuXBBTftFLHDGkM8MZss2zSJTTrffMEBJPmpgbkGERppXJhRsuGTh2xHKxPJpFBNv1XFXSKj55u",
  "key29": "3uKCNLgo4rpShioWfPZjtgfVDFK72w8gDmKVRJGeDrozr6jH88xMdVzSofdoDEmWVE51KpsbidDNCiT4XVukWSBD",
  "key30": "27DsrcfSLymiXKyRwySqNeB8dQMrsyQck3zfspeTPGnykjPrwaa7hL6KhEvzzwcMiY14Cii3Aqw9E8L4tMAhwWfj"
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
