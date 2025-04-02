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
    "3MtkS6ygcLhR8EW5rk39Ux27xPzP1Q5Kj5ipM7cu1qJ25mDu7K2kn1Hrs7K74kmtjPhR6Pk9SEiXef38sZ6akqQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41xmWj4Fj3iWdf9KuNZKNaQ2icVccSdr5ducfScKwREdUaE5D4AvPUwbTWZM9xfJimn2MaL7j7bvUfXLAwt7RR2Q",
  "key1": "64cEMticwZng3RA9xvyxACV16VDPpDH9gfPKXYHx7hDn9unfddpbb4QGW2YZh1dNbgpR5SuBM8n56uRnDvJSaFrn",
  "key2": "U7R9oRRYshdTQ9UimTr23tEoFrMEHhVWxDtRXupNeFBn6umBBwu7tSxgruC32QwANpUGWKL9ibizAjvq8q584MX",
  "key3": "xFADZtyeQp69HwndG1BoigLdkso4ebjzwPYexbwynw5sAUocjzL4BL79PwXTwNeg9fPfHARobW7iV4PkUH6YjTu",
  "key4": "KSVLWzJ8XpiTXonGM2nPj2M5U6ncbgGYNhsnrmAJx24uvfgyAJrFWREcFKzC2BBQUYf3hKHbBmFxJZWvHP3ZsWn",
  "key5": "2ZgjS4BbY8DAYQ3wSRWY1Wo79KMmwBS1bP2dwB7bjhDmZS9nmu5HaUgwsXJ3ouQ8ELGHtVSSUq5rjP6uaF3EKjEi",
  "key6": "mfr1x2j1HsHCPhJPvRtJt7W6WmaAaPZUd6waXtwXYLr2ti56zaVqPP33mhKUNCtTzCwyVebJqJKCswJ7EzMsMXE",
  "key7": "Kst2L5GLj3LG1dTRhHpTNLkBf1ofYK31nVcETSp7oEpXY9Zo6w3iA3x5NQsySzoj3wn3Zr8qYMhrPkiuy39oyGm",
  "key8": "8QCgbecoSkTARJmRE7rmybN2p7LQ9Z5MRNx8JJqUVUYFBBX94AhCmiJR87rDUY65VdmbcqCZkVYGEnEPJ1RPqzu",
  "key9": "5WrRSF3qgbrzLyX6vpaCKVmEwUJWB9Fa89BM5yDJGCPX7TtSNte25Dhv5jGQ3mfWywfeaZtjNud4bNx7ND9uno7v",
  "key10": "2zpgx43AmKNfMRnQzct93vXJyJpovHrmEpghdk98tCKewm2krfe8pr31vUfHTn4LHpmvFLfoM2y2Qqmq4ey9mp4f",
  "key11": "5Ep8UkhCyNut6SAwaStS9y5B9EiYvJcsnnhvkGMJsaC7e9o1jr6bxsFXsKDLw17F7gAzLyqKxHKgw4SWG4syzwvR",
  "key12": "4UaHihpVhbpdVdSTTXJRHoprgE5x5LKXbNwnnAm9aUUoB4d9VhNXitYbQjDoiPcPf6VDu6L32vV8PKM2D2qkjcgM",
  "key13": "5D2bHXnw8B73RxuTDhamedGHtHjofJj39Uedg1LHWgjgfneMYiDUWHWt333ifHiN7aUVhpCBDNAtXeswE8XjBJk9",
  "key14": "4EwVK4HrKmxXgTuATebtR3DzJFEvQ1ZuD7UcN9Z9mveggooe9Mws7ueUV8pTUiAyfGZsqJgHxTPzJkoxuiRi2dt",
  "key15": "2rVbGdtdYtYGkUpmuK4haA6kM2qzq6JubsLFMNfUCjdFD3A58oKNfxVvaDAGFfXLu7cEtHVmPXDMoTSEf4bUBeHk",
  "key16": "22QUDG8joUbGnnMYQGzjkuQqUSi2ca2J1jNWmB2hqwDKd5Ng1SXYafWphNHChMc4BhBp6qTyKDyooHBcFZSgUdSx",
  "key17": "5YFjVosukpirqxFGvyzKJdhTNcyxniGJWiVp9HiqKwKTUnbjjwxpJNn37tn5P36ysaojsXEZwiPcJJSzxN49R1st",
  "key18": "4SoqzxgUvJZgUf7FAHEYY3vhKzKQoRPmXG1Upjee9j7pLQ8EQCuECMUCVvk8SjrJe3GHVYHA3v4JeMnteZv3WZu2",
  "key19": "9erC9NReFFJNSMQ4skr37YQvHWmWu9vi5rYj5rn9YFLxivaqvzUjKqiMCPLjnxfDXpKXpBsZp2umNXzn6Te4c5b",
  "key20": "2nEPkJ23NMaqxZxYbk2aZnRezGdYByTHVZ8GeumXD5yQnd3c2quaYohHJ3hrjppUPJ9hj69gYVLwgNggW8YSCcvb",
  "key21": "3EevbFhXZcjt64WDGGsxoGbSiNWuKd5fBck46eTY9wTpb48u45R697iuoYvFPFMjZZxQQWhtXrwpYD81JpwBQE85",
  "key22": "2FnHbt52SEkrzvb5BPTu8ffQNDvP4ZFeAftTZtFQ5694U4X3sVd1qiDSsU6Aqaz9ngKkVQHUb1sipX1SWRq26qGq",
  "key23": "2QEBBQBQ1y27pvaue25nTtxcd1g6jd8rdhA2XU4ZmqnUZvqBhPtXVMCJgsLgdWXQeDSquVyV1hPvWP52MYSh32gW",
  "key24": "2pjyMYmDoc9ZpETYKgQsDcK2zhXEhJYcDnhQzZf3fqyHtRyTqUB8RdvUaqCoxairuqskDYaioCcUjTCmSqFxr1do",
  "key25": "4oguhVz862P3un8KkxiHU1Z8MmY8vDDSjKbaNLqsucr1GUoZbSdrdcRU5JDEdc5ZYAHPr2Yruszq1EXKPjraVkZW",
  "key26": "47TBchNMPQtVBopEtocxEhoJ976Cgv2YzcKTTbcuwvqsWkN8Ecy83UN6zmFcCaVxmgqzaSE7o88CbDHZ8oPFsxze",
  "key27": "4rXXbmsWW4vw2uxGVcBUqmoFgmbPMUo9LKfZcdr2bM5YQrPfkLDtfNMqgcR9rMjdbVfDabHmC9wEK87MGN1DAV1G",
  "key28": "U3K7v4a7G3ztMjjnVuRhAgMSqqHZRokGFPbMXHtKq1k2Ad1MTLoSHqwhMhJDPCSKBxux8vPH6gPQ6x5NF8eudcN",
  "key29": "2xRNk4xDbuimFQW7Urssm2MN2QMJjnZgdByySExLQeuDU4DPfcpFS2ERNB9Xj5SfB7JNXnkHzmi8HUB48mUBmBt8",
  "key30": "GdhhkXrUC41gHB3RehdHxNDBt8CmX1NtMCF1NzLQfKsDsuCgszM9wTvZ8RFhPUbwMRo2gJZD8BbLTp6CvL11QZE",
  "key31": "3WoCF5u1cuQSKRCk4qTF34BDzUWrE8EZg5G5sRuRJm6ZfU5ruFhY9W5gXWXUJmXUhNx51ipEURw58xFBEEN9TtyB",
  "key32": "2DxKTkUwEgRh5LzXiFDLvhQyr4AAG9yPeyaaXpcTfyh4EzTfkhqVNxHs3YCFPWF441zuqwuvTXTRAVcaTrvDzwtn",
  "key33": "52KNBFeooAsQnUwPHQbBGg484jQG2rToQcFeqMMv6Z3p5T2JQmBQgg6EeD87jR3spiLb6ya8LqbEKDEo2VwMEUxt",
  "key34": "3KEBosqRvYXJ2VszRhPF2rXVwpYYA3PwiaGrMxGjn1N1hBkJQYCz6wNFsNVoEYBCHAHzEP3rzy9bbRwKvYsa96JM",
  "key35": "3AzH6muriWCNHkidynRh9zxYApS1fBiCG2LDFNSfM2AfHYW36zyXYqjYyM5DEdqLMDdfv8zqwddSj3SiufF4bnxD",
  "key36": "51ZDYNvbEhgyC5rKRw5N8Pf3tnU6QK2oRaQ3jPRXCUXvMtAFgmhofjTC7uBXPsnrhkGC8MPkLYf6qYzJb1RqTqE",
  "key37": "43qYzrqwGBRzAsvz6vhZXaXgecSeoAn1NNcxzNwzLMgPLAsTEBka1zZXDJMUdPH1ipx8WENhQpZGvxp3iih9Qcdw",
  "key38": "4FpT9KbviGmoPY95iPUoP11AVAJF4yTZ1461bdVdd7WcgvBNszbSKGgTgDBRPR1gJ8eNPX6U4F5KY5QMWg965ufV",
  "key39": "B2AHT9jWxpc1DVDac7VtPPftUFKm4nLyb3CQ1MpHx7cSLPNkf6CoVBciysrgA48LEixK9aW3bSyYPM1ME8PxQor",
  "key40": "khczg4MwKGf9aVBU2fGq2BSZZywyUpJXGacCSUbh99hzqXZtXwJTiGFjahGfjfTqkW6CvbD4PFqq1b8ExSbe4Lh",
  "key41": "CF9sjSqteC69mRELkjQvFmFfTymEqhfft57TPcwoTPujP4giyjvJpPDx4wp1pdHwc9gQNTWVVJkooC6Hu867Qtr",
  "key42": "4fDGWqVBkcwHMwKXpeA38zxVSBr2HQukNK2tgmwYhTaz4MBLEiP2aN5qQVnwWWem5vwmA2Qk7Nmka1DaVcot1C1S"
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
