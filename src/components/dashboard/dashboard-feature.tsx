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
    "2Xoj8aWQQ8hP69pbbtRpvXTo4mmR7NCyYC3J4YCoW2kWrH2QTfzUmpfB3WnBJQ191moxSvj9kh1mNQjSQ3vfLdHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9wQuK2X4AiANStQ31VaT8GBYyZoHT495aeW7qc5MKiiXwGBq9G8xm2DaT6csRaUspeHRZw6AHiAXTfZYhePdkG",
  "key1": "2rPpaeCvHEzHufcMTXQzJYSwnHuiaPY2n8qyFeXmsXczok5XMnYEsYsdg8wgteQS6wbt1iDgX1zrC3m14YJUtmh2",
  "key2": "4N5wfetgh8h4xkuw1PixgRiE5R2TFafY5rJMumgdaXEVKiMJFbpx72AKAXwA896HRB9jTWbZq6GMUyjna9TButFz",
  "key3": "53ioLzaggeU66ZXi6TW5WSqf1QfmE4yoSnLxTDnhkBrMEqB18rZqkNNaju35fP8upYZVzkJT9eK15HdJ73cE6Edy",
  "key4": "5AuFBtTGZaYSQqKxLnSxmHAFhZYDfgXfRreJdAGr4whxqSqox9muVRWXjpYSBfxFuG73NpTH7c2DnZ1B6NBi4tua",
  "key5": "29jrrtU1LZRXkR2a2PQuTEAv9nCKXWZcSJEsYEAv3MCHpnttPv5E8Rk12PFHBPQExymNPapCAtSMkqJAakRZu5FX",
  "key6": "5uPNchqeLUrG4mx6ZWH1NwRzTaigc5J6SKNfb431VVyWMMffNVf2hWapK5WEtp7QBXLy8BaoSRLGqNXieVYdEeNJ",
  "key7": "4Rtgb2qUwgZSGqQaH83KWUTAePtmRVEkDaz4NUThvvf8GtMtkTHbGa2GUK4pwGXpP3mY6JYS59QDn6gVWnDYQvPL",
  "key8": "3KUYnYMgTDCXVTd5yHKJnQQqpnHLiN7AAPsgdRaU9SUB1e4BymRRDM2EADfCBFrq2jvg9f4bBXAEm5B6AXrxccHa",
  "key9": "4kZjAd47Fp4NLpwaE7Pw719n226F1mVLn6cjXXW8zV8x1QujARA5syKL3ULjsZtxMHSWswUxBaSZyKCTh2MonxZV",
  "key10": "4Aah66xBoLirrc2pphRVkQtrJ7x3kYTcYsAG4bCxavF5nuTAk7SFxNXCVLpVi8LbMkqALdqcqqkAB9wxhHZC1iiR",
  "key11": "4ZALrkFUFQa2aS6tpkxiQSvYaFUcPnyr8Fre6B4FEo5Rq6zpzTNrxMteqmDZpP6doCZVWd1TCidE6uHGk6pbBmQc",
  "key12": "2KmdgkTgAkibZLpAdNZW6uiWcywnH65mKNkBmJxieLBv2FfogDXbeJ9VDfKgn9A94JScmJ4M2cPhU4KssSdfj2K1",
  "key13": "3nSAoxWiMUqeXyc8JMxzPHG529Kzg4uaDeS4moBWH3fvn7S9tCZ8qTrsSu4ecPp4kAhDoUcAR1QVoq2PekN61RW7",
  "key14": "2Djw3p6Msz4LsQXkTVGvyJHkgrMWqJMjjXWqAwGtRHHDvmYh8YNXQagVfwnENkCyc5P4CiNK1uUCJTdxYoxLgEb1",
  "key15": "5hY4RyMLspSW33DNKDZVxbQRoRQYF2Nk7dySPCFzzpEysuzAcqsb5JGzEBY5KqbmqN4qW4SWySDTdhpuKVGNHYiQ",
  "key16": "4uCmJf7sNLJdmyTKjhWwtnCBcPYRM2vSJL7dvfF8fir4PVESPcxEvSiNJWRF8q5WAHXmmb2VJJhx2TkgjD5mkLdc",
  "key17": "3j5kWT3AUXHSa2KeFnF3MdGuawbQqCmsrYgpYwe3aehxM8GG3Uph5FAQgVkvWiCs4YKRtpSd6G3xc33h8QTHvdNg",
  "key18": "65q2dTT5498CWf95uoMYEn1JF9yF24JGx2sniPAvzA9ZJAz3T7Bb6EMXENpkYJahbSvqiGvG5v3THBCHhbH4fqWP",
  "key19": "5hgz2w2fm2q8m8TNn7xe5iEKNteJZFMvpoqoSf2WKNbwwGgoBVRV9QjptPxD6n38LbERmzH5nCgKJmhncd69Drdd",
  "key20": "KsyidBs3KDv5pqf2dh4SoiyJ3UGkrf1SGS9tgAE3QkGkzCjYiY7bHQncc549riBovSJqLRe6Pn8gDppbuPZJYBj",
  "key21": "M4JSr7HeSh49kedzNNqNUwpvwWzKRgcFaHUpLDJec9d7Qoo4HP1CNodrh4NcSEojmTYHa4vg37wcX7KVu8NxW6d",
  "key22": "27NH316zR9wotsrwEmDac6Zu68jvD9NrBviAs4HpBmscuztuquCio5R9cr1yEsXPSb3922kdhwywbAUeCZX7ad5F",
  "key23": "4QxNGveUf8yKW2gQqmC3XqgjaLGUWsNGQuhfYb7DzJZWsKLaovKCFcjF5zeNg3vfjG9pGcWS2unqxPTwp1htJRzV",
  "key24": "4hRD9jV9mqE8fUkgLv7L88iNQ6K7EfxGhaQayqnASPpUcSvHuCwTHpJHiDDc1HDHDN74beTLjK5JMhvURCkR5EED",
  "key25": "5BeKb349JPDFgcwEQyaYxwt7DGuiuF9YsRLhyqM1nm7EvY7W5Ux6wWNQuDYtDbwiLvTPNXTS7JwjFEgVkp6ZavPh",
  "key26": "4r5hY3xq1CWK9oj5ECYMEqvRqf29F9ptcWBkGw7xPTJc7Mox7nV2mcSCPAGNYYvYmTvtHXzj9dswCZayhxJzBvZN",
  "key27": "SAACS75qCChZg97wNhpRK2L6YWYPtpjjsoFdX4Vj97fSi6h4BqAMRwPommDmyGCpEBCR1jTQrhbjSk7zaHVb9KC",
  "key28": "44mcZmzvxoK6MWVu85BnoE953Y6a55L4dxubJ6GoigSrcw8Vi9gihwcrw7bVn6t1nRGuvsJYg2jFngdZB515FZvb",
  "key29": "449SCbC69aKHG9MfKBEyRqdMcf85setnWCcTEvszJoVRJvfVuWStr6JJjSqJyQuru7LuHoHBHQjTjzLY8aSk3u7a",
  "key30": "3ommC4oLo6zoNs88hbjgKwYkSQfq8uemhSTmi3FXdjD2GuxMYc3xZfDDQdHdmgipiRut9t6dBgaWg1JPVGBmvfAr",
  "key31": "3gpsWYZVMZQVEBoRpTeKE2RWyqTVRSj3cVCSktEURE3vBLbV48gHBCqsEYKoc7zgmUKCb1v5Q4aSxAu9FFJYdQiM",
  "key32": "3a6C7h1M59MyxnJPGnioZA2bNxLpg3fZefbpGryXQddTpGaawGJcMKdYEHBn9vqbPXPqMciu3avUiAJDvdkmPLzu",
  "key33": "5JwcBKRUpqzbYnvYNH9UvGebYjwK6P518HPv5unrM4dtfvqF2KMHNUKE4o8iZaMhzeu9meELkbY46i4KKmkbZam3",
  "key34": "4p9x87q1EmKxpvEeA6fjt1DTWFFKqxTLwfRorxG3V44nVmw6sSPgFM45zxzGPa6bukKWAXNR8cCD7N43Tr8D78wD",
  "key35": "3DZy8yQdKbPVKDkTiu47cjEhXjTXcWnE8hffDubuJq5VPNFRgZiKCr8Qdkuh8hJdVRxe5ZU4MyBkRMriHxakvGW8"
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
