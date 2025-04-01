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
    "uJ86NGhYfm2o7Sw6aSh9azjPMYFqvD9GEDEkzYFhSSymRGfTVP6JwavYUT7Re4BTHaRTiWx6RntC2XTSF7y4EqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3ftYG8imBenEPdAJf2rYWFvyFRd6hjD1Aj1L2iJ3Dy9QHaXkFPCWr4KmJQiSjbdVD6Wv4bq9AZruvpCEqzRgCn",
  "key1": "3bvdgs286EsSzE2AKAVVpqjqnKopbsrVtMDKhHm7wTVVLUtaDqWBHyHN9gLTYywtiGk7QXAJjATRaHhmeeCJAiUF",
  "key2": "KkMQaNNVc1QQ1jopZSdTmCGWCR1h6Q1u4m3BGXwEee6miGQjXe51ZfWxcRo4bN5Xhw3a2TcSxMDAKzCQPVzGJQ9",
  "key3": "57mwh6u7nr2QyiHGQefub7mrzRTRQY61hNMm1oZbynCzT8vD6AYHZ44o4UsJBLJm9k4PZ5v17oFUQkezxUamtE18",
  "key4": "3z3d5uCTFLfF9UhKJi2JDWV4AymwauGUsaUvai955LZGb1Ybu6aKj6gDyYjyWfB2y3oJUFJUvtSU36BBPgmjHWRg",
  "key5": "3nk959iNrvb5EHj96JkoguEFG2WbiVi7ZUpgAFJBYUeXKJhkpXhxqA1U88DGjLApFMoRAeufCXPeEiX57ALxzGSg",
  "key6": "4FdUU7KEN5d7S9p7q7av4Hdrm6i9kiV3kZTUKqbeXpWnvS1MuTdFamHyLchG42VgcYT56vm7thAP2NULFKXAicJe",
  "key7": "2RbR5jUsq5sYFydkPyWsbaNFQqDeaidtrHuqBioLbi1E36FTasgt1pE5C3AgRitCDPxejzkDPeZZ9RDr6q3JMugf",
  "key8": "4cRXWMfcTnLvt3BJF735EPKRgPkaNwrq3SQZQwcEEwuXqQ62nGbTbZENMKn1n8qnGRmY4Bd5L2SypYFnpyFtPdR6",
  "key9": "5cN83To5WXwMEZJmA7knVz7FZQCu9hG3n8b53eEKPzB2QoRiy9DfFJQodHo8dgVPrSeLjd592YDKjPaE4L7ZzQPS",
  "key10": "2qMbRZM9A8fGCmKEax9het9NFw3TCc3CC6xHWKieNvNqexfN48e8gYNCdPFoBrtWX9h7WTsBqBy9GYQeTmRsrK5P",
  "key11": "3YoGhgZGfjCFcKKNrVPxc4V1J5JtkFKPbazp7dAUj1srkxQE5752iJCaoWA2my81FPue3daigFrTrjPv12h8gk3Z",
  "key12": "5ztJfjMUh8zWuJNRNyaCNFR9psJkv7htGXQw7BP55UNswVKpYHiBiSgbw7bZVMAGbnfsbugbQL8GB6567hYLQLTB",
  "key13": "5J4teCa8sdw8FFzihndVuNF1hCb1H5kHHGk17SfcR6gyBdHsdYqwfDTmw5CvXftnJfE7CgLotd25Mx28jRkvzDRL",
  "key14": "55W7ZDGda27NBCcfJQ3QbpU5BxHJ36fodW6KTR8wXETWePwcJECbb3Zkq2ijiSgYd9uyKuZRk29tzcMXpsmXbNyo",
  "key15": "58LC6NVd7VXSyUFfCnUdVNBE5XwCnbVX3xxY2A4UAHUH66aLg8C76MNnqE1UZ85EJbwvtLKCc6tARwjfGZdaV3ae",
  "key16": "24cLnd4zY8HyWK1UnqBRvUfS6jo8BcTpQL9pokyaDVCGPLNSM52LSAMzhzbeUxFKcrVASEt1Z9qiNvzYStieYWTm",
  "key17": "5hgHDbDy2jzZT2s15otdPjXHWcbJAA5F8N6fhxX7bLj7FvoypygWmtC8CGEisMf5QfBU9QSVzrQJbMribsVsWtez",
  "key18": "4fU3N2vrYUGmz9oGhxaxgiVF3qpDVcDudKZhTKD86HA8chrSso4UnABQCf21zdHRB1hx4W6AN4zGFJmCo2T7cRp6",
  "key19": "2zK9jjYppgyUgcoWC4We25BjYkq9jQnt8mTFEgpdt5jzaWWwxa7A6BQwfeServtAUrEth5U8xw7XNPaNWZq2KwZL",
  "key20": "5eJKpqW2VUEijAjLhDZ6U8BNdiNFsQMQ2Zh3Z4ttdf3EjL1B1hxCfZ9gL5TckKyTevZU64SnkSoB8m9K7Koenqn5",
  "key21": "47BEASucmHpXgzDQhUZ8PFqaEaerDb8JVR7rx6dJgpKaFkgHgMJhYPphm5YgbqWxCmSSNs5cBa5VYt9LBTos4vbu",
  "key22": "Pt2waHyiRRmFNm86NYxcy7MndP7hVXyrjDqs8ZDnKdjjbX1suZzjWMDT3RfLcZpFo2KVKu4w6jJhLxW1wLZEv4d",
  "key23": "3uisuNASAg4HVwV7URhVSXnBHJZwsUi1WZcB4DDMiTeQSPAreBup1PQnxbxu1LckHpcSGx3WEqvDhave9AxRhhAE",
  "key24": "3vrZVtywpn2hDVTwKsg17w93pP8V37kLPNNRCjUkGjt6wrYeEdQBeugGiG6kXRH4quwRGJueuqE16Mi3zqz8G8QE",
  "key25": "xqVX1VyLcfLid2fdnLbUvwoxaBf1Ur3MbUZ3DPLusnamWscmFEmvxcaYu5dnu8qL87GzBDRovrWZUWZEQPDHFBc",
  "key26": "4r5kmV8ZYDdFAZBoFNwyUPj18i4UuYsEG4CWgEjKNkg5xoqmGeC2vA62jQwSmCcryNZbuht5MjCngRwyCGag76Bq",
  "key27": "4H4pSDfiFZHTAXh74Qsea1QgUrGzD9Ga5bxVwyUeotWicPTfxg9DKzwyfHYBbztYziu1pJFYbv6J3pfqHVkBqLG9",
  "key28": "ZLiDqwHH7JQQkwMf5ekCATJzQRsYvYr7x6TcEHtV27Nfz6G5m3z8Z1rDHQWzFSZR6yayLfskTwCCcUM6fypwBwZ"
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
