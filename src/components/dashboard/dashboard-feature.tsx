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
    "Tn7wNi4V6ZkJDTN5awkZmHW6ubF8d6KiBHeieaYf4sV2GE2KvydHxrUjcFm82NeveSkLZUceZuVcB9jBT2zKf7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdNwQmWpbGwgUYE2FqZiBkyRCPS3dh3W9Gda9BDJq5iJAHy2cL4TZLGT9cC1yuwptBcBMRgt3SeNUSzqzJXfuU9",
  "key1": "5bMnsxsXq9599sq7kDbmTNxwTwk7xDr5JJZctm8skYufAR9uZ11v6BDRT1Mn2mkAUhWzf5RH2Pi85DYKpRY8jmYn",
  "key2": "3VQj2dUM251Xh96UTVpyqUvhiUAnW9xqj4bcUivnQyN7rjKr9VkkSx8H4AuznzJR8X7xzQTv2JsuK17EZsyiwM48",
  "key3": "3xaqi9Mv2GUHqhrLjApaNbWSEkPhhWgStoq6dyTbJSyW4vousXKqbXFdK8MjcbN46HcuduSSZFVm3F6xkKviJRWe",
  "key4": "bBETPWmzaatbQUsV4xopKUXNVC3XKXiaLjgjscFSVi3TbaHfChfLsDbzCbFNeMHimLzDvfaZaJuxeNdBAkJH82n",
  "key5": "2acKHXTRNEgaWhcAYPmkmhb6Hv1RyButHH3BTrDKfkcQJ8yEraKR2Q7ZtpMbnJBNUVXDH3wrVwSRdwWEr7a6mzgk",
  "key6": "4BQQ4gRTspt8EAzbauRbo8nXJYHuMEnN4Ruzg6vcaqFZkMKAbDkh6ZXAjk9Wcgy4suQLgLax7SWgZego6Md2iUCd",
  "key7": "3gwqE4N7Nqa3Rd9TwMhHdjhMWv6iG6ugFYS1UvdvyqGPThG6VH9GsoYB4UNquACprrSVrUdhHZRk7ByhTEzJeMgd",
  "key8": "euWXTWKmRKrV5o9EgLcy7hGGqJVcpyrefDXC9ByRcpXpY6sJ8sAbimYrtAZfyDCSEEJyVAD2RaFm6aA6cQcdHa6",
  "key9": "4hzDcDMdEbwvD19LsvBUVzQP7PEbkqAELXhDTXVCZLzZgsAqf4PCdHYuV5CvH7n5xF1pR7CDcUA9XBhzDLGoyRMm",
  "key10": "4WtWnqd2D2F2ztsZtKBXerJ1trsEqtmib9EejmAqfqevhbhQ8tcBHaNFwieuSVqU92GssVWy2fH5XoE6YUDxzoLh",
  "key11": "TyaAyUfjFGW4qJst9ipS5tMnipP5Cw9tWpunMJLshaFfHhwRo88mdGaASfZ3NqHzokEF9nMHpgCFWxZnq49tGAt",
  "key12": "b4u443vJkYB4eKDgszGxPG7yHDBeVka3Cctae8rwjFXbGpv9XZL3jdUpRkyw7Yt5omY6xkek8FuB3zPnAVEeL36",
  "key13": "5vKEFg22JnDLnRd1UfYJ25VmA6fwudgfRf7jF5qeqWuBCV6AvozC5oxco7zNPf4AF5ux5ENzmVcM2i5TNxfhFBby",
  "key14": "2mfqjfq2oqigF8HT7RhdS82Upq3DFEWU8GWFXu5cWwZ9gDy9SfenUrC5Gi7GD7HvXXQjAassSbNHTcpYhSHCif6j",
  "key15": "2ACjuZZQoKrdURs5HvPW8D6VJBQnZ2qszm547VGJ15e3SbdZTWKuMWqwn6E6WSSsdr2yFRR8WietaEAVwyDu9mPA",
  "key16": "5cMXKnAbswddro4aresLN7UqJoZ8W69YC9syp38uitwZ9Kp36kmjtv6BtSKGZN7daeGC2ch6gB1ny4KuBsQDQiJZ",
  "key17": "3h4i1himQMZNy1eiumohiXmLMZpX9M3GS5cgLXjucKwHFNacPeBTMA92GCaJkj5TRfs92JDi3dpcD511XNU3aaC7",
  "key18": "5upYfYRrk96Gytqa4mqtWvw6DY7wbFpDs8Xbda1N5DjnpMVqc8cEzMkAcp8BW9bjfRQ9yfVFUFeXXGhL6Zi47js6",
  "key19": "4XxwaYrveAzjCWCiyJQwrp7xRDTytB7B3HbNSZMTUTzgFfVXsARJDed53M35aBGtfZ1dnQtYKc2rNyHVRWbXdns7",
  "key20": "kBJA9WtRzt5CsktYc1XytPh1hj3A4eor4pXSFBeWWBjW4WdQsps8aLtPfJVHG8VtL452QwPjfGyDSt167zrFFEJ",
  "key21": "4ngMbfLqTvesAnRdL5voFC7ZVidw3P6knzTsdM3aybQf4FHnetT5hg6VDnwx8TANo4KCYtJVHU2RFogAVorbsAhD",
  "key22": "4M8zjbPx8JUcH4y79YkpfPzKRCEmivgyVrFS73nFMZzZnH1DFAHMc5th9Lw3ovrayD6kAgNeipZEGt8Gm2u8NGbt",
  "key23": "3xpWBDRsjcT5pvt1sH3zMzNXgip6vGerFgBL2ATyGSiVsaf1iaZePdfkdp2UXKgJXC3x3NhoFvgnSenwfeoe11ae",
  "key24": "3JSvimCZcBPC6oM84YWvx3AzF3S2H2wq258CLDJbgpKCwPpKCjUrQWRiKgqw1Lf5WqvqyjuqdWH5394Fr39Hwryz",
  "key25": "4JuKTNvX4sV3PYcLGMToQZznAvcBaYG6mmAZarouFtGUmrh5skhmFr6YynnJTJ7vX4MgZdkGZKNkSDAQ4pJhweta"
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
