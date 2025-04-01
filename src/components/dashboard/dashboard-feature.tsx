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
    "3JHmQ3NDiw1Zt16oEAqKpkfDjSVCNMUmkmQWG1Mi3DxvPsvR2qwsRmRVC1oRiSEjgGwff6aUrAWLNFGrNv5f3sX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CGACuDAyUe39dWGcfhMEjKe6cAkeZaKgyFkkishTjPsAkd65uPvkaf4EmtSBxBtK2U3dXawq3CAxSCSLm11hPH",
  "key1": "3E6yvh2tupDWQd6vU374DgRB78CTShoAwfJM6JRD1QraQA1NTyd83MZ2aE9uNfruzyW4iz7xXpX5fQVGCaX46ZFu",
  "key2": "cG3zy6dL1abkaT6NW2dHgh9TXKypKo5PMDtVoZsV31z9TCeeYFiXCDw573P7mQ3nP9ihKBooBrKDfrGF1ALvFju",
  "key3": "2CQykfxkY6p1uF3Anc2yxTSomZfBTXwL7T1ijbUKXf56ft7zwm1YJoxAKp62s58nUgHBrGtjpWbjXgxNFa3CB6P1",
  "key4": "2sLDLTGVjCAAoWwAsuS5jxg8efoLiS52LCvAWUnoVvrs5RCNUcD1jKKMeBWk2ZRMC7zsVbMTpc6U2HvHSYj5Lfak",
  "key5": "4Vy6HVcLKjjSpMF6VJTFkQZXih3w9RuG2F2Wn1LKJxZ11FknxMdvhRqPpdZsfCPHrMC6F7y8hhsnMr1ujdgPAfRh",
  "key6": "2E1JFYkD5mQ44fwAXRTUrFFR8MPtv6aHpKh12VZBiP5zT76EXEHkj9icmmDSeLbYRafTkDXskjGdLiodZj9j6R6u",
  "key7": "35EwLAX6EbpVtTURPruzB1aCDNwc3Eg6mjKPuRiQTArWdZHFW629dNHbvWitZL7RzQZAQzTe3QmcbUEwWE76DGfh",
  "key8": "3ib68kxaV9q9DkN1HPaBu4RnzTuT8fovd2tEKdNP6MrRpdUm4MQT155B9EzwVbqks7aEAWjWTL2dqG1fK9qs2RPL",
  "key9": "A4e61YHnTP2WTdJTBDKJLfJ2NfohEXhctyKiULjpXEWB76HCBXtcHRTKJPqCAJPE4CiHFSrRE9HxmGr2JQHc4tr",
  "key10": "4snMX4atxm8sNoJZvkJFjDzzsC2pGJYczHgAEMo5HfcWFjoCvdnQzRUZko52tW8uHA4JAVpeeKrcZRtRUTRYYL3i",
  "key11": "2Q26D1v98fUh2VSQXZEcJFJCP8fHGBro8zPp5ujk1S6VqptHCpZgcY6b9DyqC6YeQeCwv23cGswHpMgtEA9zKgap",
  "key12": "4L4NEmWdDJdxo6KKBPjW1NjVbHVrHfWhdvPhj5qNDSX1KRVgv4AEA9SKACn98V4c8JMnZNsfX45VKxRSWH8F1ttZ",
  "key13": "pzyhLywSqxYLLnDxsASdDzpk7TacVaj89VskhU2Pm2rgGhETquxugVAYkqCbZ93Dhzc89WLkYdqLfVnV9dX3Xo3",
  "key14": "2meK18pzDyFSgNsdVFNnD1YPxRjXsse7Pf11Sz4pXFTYjKYNaNujrapvRfcCUho1PzFAGQZcE2x9VNw3vpybEfw6",
  "key15": "2zrvvMEmhkMwjHb4L9Zj3rhbq3WvREoaVpFY3KVfXZJC5RYiKYfHajCrwGh39J4MePFk5MDrKNHpRkSJmz1JJJ9t",
  "key16": "3sKqLGY4Bmwpd1EkiNWH53vsn428bnsyk1cDKuxwzPr7hQxLWP6DYA1mXxE1UxrJ9Q2BPyqufjWX7xZYREcyZdg6",
  "key17": "GKiCFfuzPQUU6EafMrUeQed3VswttvVr919nFmTLbbTxsAvvamMQgzDNkk7k8u3vzAMmxa3g4YgKkto7KZKFNkq",
  "key18": "4u9DcCCs43NomhCHVeS3zMVkLWrxtk167ftn5oRiSXkbfQeBP8cokB4BYzQpJCRGFZxihPXSVf2FCw3LufrWs5uo",
  "key19": "5A4NmnVK39tz9AYvxZ18v8TSpL3qUAwDbTQMkrE1nJq85DDW4C9SL9pftcRzEpSk2nuQE4XdQzoyobwGnRHQnLCM",
  "key20": "357p1Ge5jRgsaKc9evwKhYKzodTuywbrusthEUw1e6ZYpGdRaSAaJEU6oPsNMyNSdnEEhyuwJNMzgH8XDTHKrYgT",
  "key21": "4pCjXEmsAeJvzL9P9oiyYRXt5ua991bYQosx7o2iYxWEErWKBVMpebCKfM91LeQa2NAbuq8Lk3jussnS4FXsAQ1P",
  "key22": "3DaUUCJVJfxFxd8aZBVcqyQUTwPdKfNFdYbykBM2wc8hCdcYv4wk5TzstQJdYQaJqnCWUWmRZPEJXzFfCTEoN5ST",
  "key23": "2AEDbrWeWrZbLQNPtqAeGF5xq8U7q2VULLa2S4rcimw5agEeVAd7vPGx9M9djBZovRmnF824tVBPPuUKP8ZXhYJy",
  "key24": "5jwRDJE1JMtBifvWMTN9fWcdJpYt9wysafEUBAYxpcVBiFAcaN93bUKSUXEnuHzgxsbkBzyTFijvjAGgjGaF5mVb",
  "key25": "5H2HCKNQXipHbur838ewyu6YxvsXwSjLZSswVXN9UBatPNyut8BsvK1qBDLERZx8URdT4KWKtYjM1BHnoU8L6tUp",
  "key26": "LVbArEhs9nehksWZZaKtg18PQvXKAqd1nRfUsZ3SJT4PsF7BdXTGqYVJmNacRfRjAjBbbo7DKFWP3FJpnQNz7hQ",
  "key27": "4NT5dQEdJJ96JfFE3prAt6PKEqqsd67rn14P2LzBmHJ2skMo3a7YD2CCw6itckT47uWk6U98Y6aNFqcZXLp7mhoT",
  "key28": "427viU8EtXtjUMVcaRmC4ajNt3cCzavGQsvUrBe8bL5AV2dYwM5mDMEVP1Hq99HMhJeqSfZMxWVqGT5BMpUutNkk"
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
