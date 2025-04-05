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
    "jMimGfYWHbphdXQFahNtpiQkSCozgBpzZCqmVxyUC6mQg8EyRnQ55Y3htE45X5qcBUmmNvKyU5pwybtXefbKWfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KkjJtGeYeSB8jhZuDP42Zo7R2eSbLrYDMieRLP3Mk5eoZWLwpExAANPPEMSVcjJ6ibCkDFLJ75JdL7c1uRhWYU9",
  "key1": "3bXUNeSAAgELwWMcvrmt7DzuE7xxfGeJc7eKFCs6Ckigahck496DxikuH9UWzJh3yYrNYVZWconZdQFKFUSNRPJR",
  "key2": "Jewaghq5iUpNtonVHVHj3c17tX5jgGA9J1B4tWCbkE3rr96HNok8vfdmF5eyATXaQK4mFVoLPKTZ8kWivZPTmoM",
  "key3": "5FLcrchZCpZcBnL9yL95TbodzMx7ncrFrsQ9BM8Ub8AWvoXmAuwwVMdeqGX8iHBmfQRg384TBwjLdnPDEN98u2oy",
  "key4": "2DSNeP5gc47vs3b9haRGWLKdGEDWbNBdRPKYQzjTNp5FjouH4vdjAGp3UtUJ2yLxRt9Q2pDVvE79Vk2VViJr9HAu",
  "key5": "4JxRKBKpkj7DE18a45HD9nPM1obtk7fBr9FfwvahAQauPbKBEWCYQeAUeaTsufuAHF5ynk5mLrd5XZfJMdvk7iDB",
  "key6": "2kreurTBi2XecJHZEFATByDLG7vmZRev45r5rUcQ8Y4nts5L28EWK9Rs8S8JQHTd1M2rCWJWCotJ3rqoKRGZ3FLx",
  "key7": "2pBWf943av8PvaqqijmNNa213jCbJNyAWx3fgNyNKvS1cFh7YPAzgWdkPotsVrNf4KdGyiHwgAzm634N71oYZr7T",
  "key8": "5WrHhdE3wxAczz7ifAtyDCYMjgboq4sHy7dkhWCfwELY5M47e3ibtCfKmpqKXW6q6ZWrxVmJoZJi17oXzaiJsFQA",
  "key9": "4U5FYur6oarZLouFS1hNdC8iiHbN2bWejc237XWSYnt1Ue6vPFmKEpuCjRTfGMscauLPNA12Mw2fXNcetdhYV2Ha",
  "key10": "4HsXvFFewUKxfN7WBpg2ywUE3aBRKi5tBrRcWe1QPLHMn9oF5egPhiybQUAMaModcmo7Jfm9RF2vjMx3gUxHibPM",
  "key11": "5eTvsyg5f7azgVqc3aUXdH7NAeSC11JtDEKwKEsR9CJk7q6Xp8JZgRkvH2VwHWgFkh7GjQ7sRJ8HphmoK8dPSXL2",
  "key12": "4wK38SmZv5ubeVcBoXuJXJrJ7wYG6HoCTFkciueyZEDDZJx3Da8GeSDEvmiywD2FAAdaMfJyYgXgsXnELWocoKvf",
  "key13": "5WZuEJnGj7uwgfQTeguQ7wh8EonjZSD43w7jmss3LJxi78Eq4uND35eXrFYppm4NL56TGCxn7SyhHVuxkQ2ktttS",
  "key14": "2AjfSEgCS74CVSKuRdykHhWJkPs3PkSfsYCBATxLkKNYrQDbHjWzXeShssvG14CiKuAVSGiiwHmE4dML1uP4rWuV",
  "key15": "vNanQ2ArkhdhWfpnd7ss7ZYfe4vrj9eVWp7tnGbMmP3GfdQaWq5XPEyQjYVz3u7PQtQcmam9TF68BEVRvfC1wR6",
  "key16": "215vrDigLcZGRKiZ9VToiqdoyDbAt2rRchtfJtdcrrQMH9kbtQMd92vPTv4yzoKzqzWho3sy7uaGzbiyXbm9teYX",
  "key17": "46tBMvsioYQSXRaPNLYhGAF8wNF4YtFJQeSdRSfgNDPec96ESo3EDrUcXxQwDXkJ8XxpNLcwkJvj4tSx5K8WjQ99",
  "key18": "2Qc1tWQ6c2yz8LcWap9GB6Wr3Cohs645bPExwT81wtt4t85Pkc9GggPtpi5YmFj3wMnCvNMteqxns4HENW7huUoz",
  "key19": "3HgSz5WWYumfxPT9ubFapJ4fmeH9P8QRNQ5QiL3pf78HeusjedFnCDsrV9Xdi4z9i9ybU26NtayAVmscwfHjh3hd",
  "key20": "WyYGeGGxHV2jbb2tf1KCnoesJjUiofNKRrGug7zcKdiUM9eZ9avHZradeYQbT886bXNnsBmv4BEsvECk6UpL8pc",
  "key21": "4xa1CPDbi7BBh3tCDqUh6EsxCUK11tpjT1SQZbJp7yLrRXvbUGKDuxvuZoPQtiodLY3QGyYoNQjpVSRhgD112BsQ",
  "key22": "59qNbmcC5irWBPQRNWFqdCbbkLk8v6fVCQVGyNpAnsif4eFvA4EeDxdvVdEChyZpUa3RyBbZxTGtvVuSZ63X2vF6",
  "key23": "5f5cBrY8AN9xoEPFyhbjYpBV3Zjgzf1QwojXt9Lwnfwq29RRP7UX4iuoTUZRWdY4W1ASNgDgyc6WGGKSTdzpnwg2",
  "key24": "U3LF4YcXkX2pcEmh8MsGSHruPYjhhmGZ5vKWcpQeT2Bdhgxow4FZoxEATyFjYJobPxvrksmS19dF5kwtPzbt4et",
  "key25": "42pmmwbfMJVdnjA9VYhK1ZCo2gTCBLrUpiDnkHjwq4zSa2VyPs9aMUoEZK682bAw1KrwdV5yBhmqNNoa7yw37CL9",
  "key26": "5f94nKJQZes8YqrtkazM5uXfsWPa4yUp45fttJsm7CYtrMXa1EzVUB6r9Z8yULKpf5Bre8AExefFrmHQSvbDvsC5",
  "key27": "29VHuFdoWMXeTVsTS3LHst7yqyygnR9UFZ7PMtyfY2bFrwPFvDMi442pYFtFqELnuGZc2qeRVinAFz8RN5sxGzv1",
  "key28": "5JrDSJXnUgfK9UuGxDwvHf3vFefvP92yGgNP2kWA8cmDXEWicS7rwmoLyBikYRgTTeWDy28X94f92fQfHVq91m9H",
  "key29": "5PnD4vyL5ecYFzZsM2dviHkoVxEU9YBFVvcAsHEXgtCi2QvbQRMmZ7kWfCKsQXaVveTiseH4xQfs2nvqoARUxPi",
  "key30": "5K4LEVMRyMSk2iYwPXh6hRCbm4KrH39hHD4YmZADs7ojpxfQUPnERJHHaKKjiURy9KdRYsoJUzkLDJXLrjGhPpo3"
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
