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
    "VoFy1vXZT4mKYnHKFi9v2ne2bsfAKVyPwpnTwBkLiauUPRiD13qHvUZ2dD4hkdYKsXgmbeerJ1TvcYaaKZcLyFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rxyg1tkfhjMPArcHZvpbU2ZWBNTUCPR6qzgqmz16jvMAG5wt7azJpt1VXQt3w42nytNP9R68UFqcj1bWWqapNi2",
  "key1": "3kErfW5Pip9ftJWqQgP5rL7aC3xfvS5MKVEZkx86iLCSDNeYkdPPLjKAzuE1NKCWBbafCEMJ35J3CdL4aPh4gpwN",
  "key2": "4hc6Jw77CTYSwpmfNJ4XXWbjEFY6rTdBdudzNxK9rycgApM2jGrQXYS2bdb6jTJSXeTdLkX4L4MeAa93d9o4m4Sy",
  "key3": "jUBMj99gXP7PFAwx61o4o7PEQWugnCmcWu5zYCMHVnLK2mwDmwmM8YYrPGbVK8HQpqBn6ZmDgFQUa7g7rjtwj7f",
  "key4": "5WCsK3Zfg98P1KWqsA8k3x1dzidNeWQezWurUZHj7oNRgs2KS5oDosmCzcV8YEiLuaEQWjE3V3fQJsTxsnkTaqCp",
  "key5": "7StRtfJPtoks3Vy3xRHiY6AbYvHVsX6FJB5CyTPteDgEjSYtF1fWGpL5zP6r3qStszE1RjgPPoMk71KgHSMg6BK",
  "key6": "49NcbRGyLvsjA95nRv3Y9yfJvvn8fqNEDzkEf4nNqjvBvWCUWPBcWmbhd8AokrE2CrjoNefgxXnBTxotadvfS1Js",
  "key7": "3W6SjrirmAWwGZMj7DfopbW6uMSrJvsaQ7zH7TPrLoMxTFRMYtX25sWwmUP94Bi5bVheVBxkzdps6mHMbh3u4pKw",
  "key8": "5NP23uXec3Yntqc9ae2G6JgJdR8zNeEY4fqDcrbxrTSCNkxyDwcWdtnZ9FPS9vfhMy24v1bsdQfJpZBioY4vUURX",
  "key9": "5nF3bq1CtZGVK4rjLQPMMEvvWFsU7sW5dwjWTP29t7iaFgvMNVF9q4CGRH9esjqanE36wK2QRHm3LEbY2qG9EJuS",
  "key10": "4sPn4mKiphgFiEKyczwZqPFc4psSy2MmGa1EK4M3VsrdpC53VAFmdfxWdUkGoYg1yAiXQoYCL2GLHLCbWp6JBHnQ",
  "key11": "3wL9GCWz27JZxqFNvE8x7CrtmDwgBSUpHbBh7Sa4LPaSssTgcbfeFFcioAWx8rfvH7wK9Bw4BphsojwyUykpBLUB",
  "key12": "3W2RPBSvZZJLq6FSwXyJjW4gGEfe2QaVHdcbuUcGH6cStWAmuSaQLXrN8A4zJYswLqiDyUdpY8quR4FSTCLEEKHe",
  "key13": "5TiXuHqA3bKNs7M5J21FBd1NiUxFQX6dsdfrbsejFRgDM6NQU58crmfMzwz4j4rMfFVKnjwHv9p84jJnsVwEgW5g",
  "key14": "27mn45j7Pb5L4J4KhczJPgu7BDc7kpNrUBWjziq7cDAMRy4vQcx78d1uMvDGtMc42mTVJyfH7B13Bwa6tmQGfjy3",
  "key15": "4HXbHKaM1DQpFmT3A2GFnpeSfzbUKktbFwPdBJkhyzUBNjH78LoadSMM3fYR2uMGYiREzkKyHYHaPHvLhFEunXHe",
  "key16": "3ws5NdNkkNCr2tuZgWrMS7NXKN62pkxEJP5CxGHVqWZcjcqmUwhf7fPr4mBBHiwfGVaJNtRykXmq494VNp18Aeye",
  "key17": "5VZKPSPG57ca1m41cZoQxTLRghziZzsb4BtePXQWdUVQGeTuH8FyscchF3FXFSsFawpH99m98iatM9yuxJB6hF4z",
  "key18": "d15e1Cnf9dksUWtwLzL8vmM5rsuNDH34LVGctahirnXJkZcz2npnHKogszBtjDusPs5UidPvgg6GQsSwVsSLnee",
  "key19": "4din9PGPyn3FVtYu7zGXzKxdum5U4wF8rRUMveQitNZTjUBMYXHF4hkruCrZ9WGTfh7GnACzgrL2jmHvBH52iEHp",
  "key20": "3N7VC7cZPM73Q7iZes7vo8f3MJym4kWyRVuqao38VvPaUnBvzYdw7w2bTHJVRUyxXzwTiLzJ6yPGZyJS48KYqW8o",
  "key21": "fSsupaSznHkwCGFNjjMWqCQ8Ni7z5Lur9VtXXk9TxCLXBHLn3Sfu6jQvx9P7QJ7T6gH9hmEethocF9JEwqxF2Wi",
  "key22": "3rLsxXtn4NQtErVE47eMdgaYJhM8SA4hqQGPTmr6XTT52rMU3zZZLpGn66epHBYxXjKXhToQnbtan5E62MFDkMdD",
  "key23": "2JjnV6rTPZHEE63KHRcAcneNvm3AVh6YP3vmuQug9EgLSbTi5jWmmp1VzDDZnsCrekEiqfQB1LP5D3yK1eHoKVow",
  "key24": "3vEkRafQJPwrvVMMM5i273FaWMuXXK7Wf5DpNYDqntq3eX7JjSkton6HdRFDKrHCJHAbzhb4GuA7qwBtYHZJu6oV",
  "key25": "R1AaznaUDNR3u9nboYLP7qEhDGcmSX4btgiAY6BgMsXGWpCBamGDhYFmnL3ma6CaQ6fmzGbBj17upyk4EWAyUnn"
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
