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
    "42pquCN4eCtwrcNXZ58VHWhDvnHbKZz3g9woYvgwiFiHRJyNK6VL7mTDnZFgtyeKoar22YypA6WH3bsndhMxCXmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQUFAjrbH1g1mpxR5y2J39QVFh3CkLbqQHJkpnyGaMv6goZt66MDJ2bHyuamxP3DBWTBxXv7jT2HamKamq8qYkz",
  "key1": "Ym8JMU4VL1nRtRf9wTwA1bH2pL91g7SAtGtioEKgKBAqn544cDgM92V2pwoyMUNLtfRiqV1Lsd6sFTJwqCh1gYS",
  "key2": "5WMmhM1K9HNd1tNPFyafqxLr66Ji6kRj2nKAS2kixY9JsNnAkAWWjbJCBcK5HGDsMpA5TXJC44e8p2zVmEV7tYjx",
  "key3": "31UVpj4jsMTjP6bZguhjY5SCK8rFHyTFAkskXLz9Qvd72chFhbLHucGJyXk1WqStgmcLUQyxXNfgxXMvRUbsnX6o",
  "key4": "5bpPyaMz4duyo7NkLsbffCnenskqJJSxt1wPkMMApDgCLo5mnqykxJXALCWxXwpBYSDVUxKjRgs5St4jb7d7pxyc",
  "key5": "ZBjKvitScC4NuULtuswZXRGznJa2WEBJq8ZBVgKHRXPAAE8fHhCmZ3cgoVs9T2HQGV3kX2Qobh8F4WkwUxE28k3",
  "key6": "5oMT8BdcTsgojhTkynz1c5hGDF564Z7Euf8gaGMkd66om4yh2zAtsyzuUQysoQ2NVwpDKLEoY23pVDCocobnb3C4",
  "key7": "2ZyLrovJxF8VnpaoJ4Zy9MTYPKXRiGDjLaP4DB7yRNeW5j3wAiLqP9SP2Az1F7fDMBasFsWgue4r8o7xLK5qz4nK",
  "key8": "29bNji6NbahdQ7R7qM8gHDbgiw67fhZo7YsxdQcaQYfsgNoR5ae5rt1JBPKzJJro9jB6oP7iNkbRmPG8ywibA5LW",
  "key9": "5URx6z5ven8Xt8j3EK5aTJf5BzuTrUZepMbf29ztBrW7hMstq5v3g5M1CznA4UaHQfz4LNeEJvWTqiiYBpJyymXb",
  "key10": "3t8ERbrMejGXEFGjWcTcKRqNSg2E2LKttVtWKMwiKjfQNG6LggoUkjW8YZtWqgZTjuJxrkWYtxhwhTAvm1WdcUx4",
  "key11": "2Rb7RnCKimyHHa8rD5UTyiaSoTgQiVC477ejLb1dbV3ghPNAHDsRSzMa8VxJCuY9b7QFb5xRDQUXEfKi217Nij8f",
  "key12": "Y3ZH656eam87wp5wNtup9JCKpGpUyXTxYEWb855vpMLTSXKJMMnKGLwzbyvYCumkKafGUMCdohftiBuVnngXpAx",
  "key13": "2kDnV1wPZkah1o2tqERVNxzBRZMjLn6q5RyZNtUzH4MA6o6ijquTqFHxDhrMMC4UpuxPdM7LVyMirSijtJtkZnnr",
  "key14": "Jt3zY3HBRmcPuBmGdbHwcc7q7rT3YJhJ7Xc76aTtFMqV6F2CiRFN5FPeXHaEBxfFmtXPkAf5uaTcQS2KP1eZnPu",
  "key15": "3GWNcKNBPR7nVZ9GtLaM4dboLo6f2mfEcZ8ADPDdCrWu6XynJg4Bs2Unz5Y7wqUKs1jbqSLwfGXBXoJtoYhxLKxV",
  "key16": "2jTYxLqbS2mpKr2Z9umypASYK9MKRJtf4wTNjkhvLpZecV68yCNUicgPdoZ4oL1sHMYcTmXDeyvNYxDtnbk7EYmu",
  "key17": "q9tebUhXRKocsBBgQktp7hdw2AXfY4n7Wb6DribpLnKwTBn5CJoJbrZZxfgHTpSf7REWQFy8v3mzok9UMHAVHou",
  "key18": "2uFXfAW6i9YVFFgqCZhazoAdobXQWFk9CLWSyjuRUyBcDVHfMyVimoa198KU6MVvy1MKJ2rZwHpUkgmmj3b2W7Ah",
  "key19": "3q1HQPrSs16Es3yLCGhYiHQw5H3F2F7UNbMzc4eX3xGJKHzR4hGHNvFpzDUtUPL3RYt376FdZHRHoAyZWQW1b1Mj",
  "key20": "4sNcUa55FDaxTZ7iGV9HufiJzh65ovG7o9bww5JQdCWSLN2g3PA9EGKVmF1oZywgF6uV32SveQJMA9DF2ksk9Zg2",
  "key21": "5en4bbcWZr8Zp7gzRxYmC5cPjwbHvWkVjx2pBWS7psNXbY9rwdWoZLSXT5H2VWMJLZLfoVeDnBnJ3G9cCt1inS1F",
  "key22": "3oGnETwaXU6uvjUdHer9iH12UC92X2QrfbppNBttfXb4MCY9LLzxoZ7RHypQDByd7ERjKnRToTPdNvwtPh4iWMkX",
  "key23": "iLYw8t264xNpGWtpbkxKNu8uvH2dVrw7opWtAn11ePVdaDwCzA8VCSZNmRjbabSgrK5q8E1H5rYRW2PCfsRtQRt",
  "key24": "5WZJAgkavvkuCu8RKeTjhwYM1aTj5KdwBwoYbBf5XimrD4tS4ae51ifeuLci9mBwov4uhPcQxFsVYsFFZcsyw3mS",
  "key25": "4DhqnchC97ND3taufoGevkHnjfedDQ2PwfhZqNgZHDWiokWEYUHZWUQAL4sMwhHUVQJfPHQoAsMg2oFgafof6MuM",
  "key26": "5a4W7ArBe8aQkkh4SGKiKkmJp8JBHiMP1t5nCg3kaCj8BrJqir2kRoGCzJujCPqc4xiWvtTxBoqH8kvwZh8zkPCx",
  "key27": "3qoYhDTDxXyynoPtKAeGumEk9r3U6exywtie6i3KYcoVa4NRAUixRxodfYrjq7LroowgYJithKxo2Bniqvg4CjAk",
  "key28": "2pJCmwbSss3kmnoRTNU2gSSMThdXicy6KUbJ23v5xVdy77SERSpHwEJAP58sNEs3UPx7TenHYpHAnhBa9jeRLXTw",
  "key29": "3yGqm7sS4EdupR7dirLqkwz4Nd9jz5Mfh6P9fUKko8CRGg1wdTPYTMBBKdwPz1nDDQdHkszRaV4akYnLD1z2oGpP",
  "key30": "6yXXVBSMFC1mwjHxx6VosSrwdasoNpsdnmzpaZaKkYbVLu3JDJpdMpfBxFwHAZYdsx7DdcSDy21m8NrTVSqH9Nb",
  "key31": "5eCoAuqbtbUKjhbLkwaETXscbh3qhBGHkHmV1Uyh9x9NEcApXzPunFoQ9B5cgXHvRFCUzajGR68nmE3xThwj5uXy"
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
