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
    "QxMkdoazHT6Bqg64gpZni8nW7a9nXQojgxfqtx7Gz2HxEzFiLCEULQcLKrVBQXMHpRNJkDSExusMDYwHLee5fCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9ed2aMXL4fg72Cfcs9XSVAbA3VpJvLT1QU8RsfnUPSycBgTmqgC3VtkrXUkzuTmv6e5oPCApni6UYVwH91pxey",
  "key1": "2CZiqBN5ZoSmtoypFRtRYktqdabzre1L7NhZNae88iEjJB51jbKkMSw3KE4AdHdcbxMZQeByjWK8UrYZ9y9mazxN",
  "key2": "A9pFBGR8RjYupF5mJeukmWQ414EtD1SUvUmg2RgsPnhobhbV8aqBBKRiboQwmsSKu5cRT7LJ5TVdSM7L1yeWQXT",
  "key3": "sxS7vNvCCbzC5s3TSmGR74yhKgJbRYW6L38AMUAqyhfGHtyaLN8ZDwwVU7jzyzw6kR9AVFScCqA2J2EYM4Bf2TJ",
  "key4": "5tXaPJ4VBZrWPRBo6V9ZvFXpbK4prDyH2x3thB4dUpUZ5R9mkE3Tx1FS46JASxcxRnzaBNT9E2gWto4yrv1WvVNg",
  "key5": "Wt5cRtTytScohxU9Hb9W1ucWjvSMoHgkjSAAcpx6YAjxwoaiom6WRTiYtTjsDJzX6gBhfGSFuGUHS9mwpi1nVxY",
  "key6": "3gPrQgcXqeSTpWjuGg17xm8ndXfuggrZuWzdG7CFwRFU2jyXYEHresnyWiiszmvTtUHwDujGMvudrGBfEnyxdk4U",
  "key7": "4QUS2GuUXo9KstkhqkSrbw5MDZ79yLFMacRT77tfdMxSGXCn11rshGUvv59ZTG7QWDWMKmxCgmp347rVDMt1JtQa",
  "key8": "2Lkovg7Jngqd5oWMYtinCuqGW6FPyjqm4GXGku32DCLs9bJnGK2ghsMFPwKdjrJjv7G76DdqvHdPdbkuSTsp9gs8",
  "key9": "3vJwtpdTyi5oK45nT1cEf38TWLuBR6BgBDqcccR33u74KZxRXw9FmpikGdRnVmnAG22NLjeTzX5YijbkgG3ZvC9R",
  "key10": "5TfMMiEgeybauDcbGarbooBWq3Gp3JPJKjPTLEDhcrqeDf7pxwHR5hFJwf9KHoegzGGRPeSTQeJucEPcohgtqLk6",
  "key11": "39SafbvxDcKX6qa6ar4Y5eodf7ugh1nZ8BpFzQoQeC1sebSGtuvWXX8EY5auYyoRJpMMEZJoJqTz9aqWHBNywwbL",
  "key12": "44TBJF6gmCfwP7huNp6P3dMybkVZK6zjhTkna9Nh7cjyghXAMNiSr2isMi65oqHyusBvPYuZM7yMFr8pC6ZzeGSb",
  "key13": "4igfSNPWwCcsXdEY5U1DBWiasUZUEot396TrXcxJB65jpUKWa1YhS1gE8WPHHijV61BYSBC8i8cv5xT8tQLpedzj",
  "key14": "2VcTdTfWMeg1CKcwmt3W6gDzRxNSwmcBEternbSPBdBi4hXWC2CHifStE4rBg5Po8VQp9xSGS8TCqKJqZKvhaedM",
  "key15": "YF3dFn1SADW79tHK6tdyYa4zUXP2fMDZ93HavZgxngrYwzNRUznFLeKV56CNdhK3tP8DVaNh33qRxbcvN9LVJE4",
  "key16": "2cFXcC3WFMc5AWV6RsSvUu1TECvQHDtnzBSmc9oCihm5Z15xXrY9xPWZhNTNf9rLst62a3SK7EeLb4ax6cQHf8Mm",
  "key17": "ePzE9V8PMB8aAFyQrGdUcG7MqhiUFBUHUry8KfTeYrpUFMBDsUyGFFVvygtrZKcVYZjzU5oSkFrTVSqjLd8ipqA",
  "key18": "4mgmqC1m4U9iNdCCdQEKzGSaaBETaC1VYU1D427RB28Fvf7TiwGJVtPhhFr73RXdy9NRvWBgRhmpq9MhZqV9yub8",
  "key19": "4VihokK8S8ZtDHBAjUYmA1X5f9YrK8a8HxfVhvsHMECGrJKTVWFyYdtGiYDo4tjyTZ8MKk2exF2pnveJeVie49GN",
  "key20": "4Z5MDBaPu7pkiVh8pXT8wJm4e1jRJZiB9bXVjFfKYqw1fYYuXmm5xumcQGoBDfE9pzVN6jVQZ3csNUnvZar7fxp",
  "key21": "62p8XCgg4cgSpJG4gNWgebMet51iJw9M96v9kpD9kXBNsQEBpTJpoH3aHsWoD9Mj45583VXFz3YzMffE3Q8wgtpP",
  "key22": "39zP3P4zN4Jed6CvHJSEnDCY5hGX8dEyJqbN1zH9fP3jXXthvr1AnuopVirDLU1L4b6ijUFecQZrNDaHiVUXSnUK",
  "key23": "5wYNpeYytzxbCbb3tQLP7xktnFM1DoUN3Bv4yX5t4TyfESt3bPJccn5z2xExBYJrDJz2boEztJdvX1JjqZZWKTaE",
  "key24": "yViGgFsVVob4WAvmJ4jyu9uj4pBHu3Pp8RXKd3jX4QpGe5C1j7x8SbdDavoWAetut3s6bfL7Ns8r9eyKkefsog8",
  "key25": "5Ls9jqayNDqDmR6ZfDRUbiBxiPbyFBqTyXnCsTUm8FMYbpNkwAGuCt6Sc94QGjP8LjptAN8q2uiGmD4gGWNKaFEe"
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
