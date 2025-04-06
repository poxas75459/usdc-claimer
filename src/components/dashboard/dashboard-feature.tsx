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
    "JssY8q3oKbsEeFschp6csMuTdHqxYk4KEkFTYm4vAPPErvHBDiZK7XNEy9eR1pwHEZrf7NXYdCvwT1eVp5RaZB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATuKVq1wKcGSRynZ1xMu4EUq6dJktGhkNHLrpRjQHJnr45jVNf2YrcAzWaF2auxN4ESeQK2caTbGX5XmSWVv8eH",
  "key1": "ZbyjjprUUyKEvJcVCVdghsfC4Ps5VteqAnb7hN4NqzUREDYY247udnzR9QHZKwb4wSatPzK31qdupPVsHGghobN",
  "key2": "5QENDrKEK8NeMbn6WTkaGxwfTiYVHHt6yxJfJc7WXVLjyyVaEfiowa8cTkhto62gyhR7pHsZeEJsB9h5zDkp9pLH",
  "key3": "66hVRf6sRHnpXmQkqdwxTnXMMPPYzQVBMvn8fxbQ12YUpwFEjvyPdZsTHu6k7cio5hP7zG7Bzv7fCALb8ExAc1tH",
  "key4": "pF3CdNmCW7c7SuouVHtKqovZmPsGJqZ2RHFaAeNXAS3G6zDQLnEDcZDnCTiWWDgSUtrQzU6qNhsHoVzeVdkHDub",
  "key5": "3KUqQNttQbgKip1i6rdjZLjLmCcuozdAavv1kbbVfWjd8713WZ5BQp3B8rUwQRamAnWGPnpqqgh9nPKsQi71sFk",
  "key6": "CcTveJFp59XPAWuvymYGxpdijXQM1KinU3xawDaFRFodv1uic2KBqDtTzqShoMBpJHYc4FKQwNRo9jDchevkC8x",
  "key7": "ikK2irZPAKoDEAS69u6tJBkasJjQsLvjZbDXDk8etWPra1M9yV5EECuxMx7vNepfGLafV9ugJD1yRXi9Sw1JCiQ",
  "key8": "2sCqPvSJTRcUCXbfbjGq1NfRuWsvZBcWiHF6KTggMDoF3bL71Ji9e2e4jHGnYd1XUkUkybubNsiLgNkCKvfKGCLX",
  "key9": "vDAqFogucDtE5ogm8XQqzDc9TXMZcTqX9sRuEH1ExQcj5iqfRockidTCGipQ9YC1Aj9gjTDKQYRqufyUV3eKoHw",
  "key10": "bmJB1PsJrJ86pxyTHEnsqYZ8QFUscWQNk4ZbantmM3iqzAs1MRMvktymwgsvN2AEASuVpjRPqQz9ZjrcpRBq6KN",
  "key11": "4ZkrZtuyEBBEToYbrEBodeE1dFvBZxnXYWbvdvCQTmJvSwbaAqWH2sW2yUdWA25sbxQFqsNJk6w2KpoBz5AzaTnJ",
  "key12": "5BBDe7aCZdsv5nDi165DWgfWDPP6MMBcQ6Yhrgb2ySypZhQDiK7zvzwDeBYF7rousmJvbCYjroQjLXSD5VNd2V6P",
  "key13": "61wSZDPuE2i7LwrQTsxkJXDKG6Kh2zy2y799bciBmT1JA4J6swt7zMjKDeWaztVPE83X19gKE6oAVvjPu4sDPaVt",
  "key14": "21C9TDmejeuPzvzeRW9TDcAoJwrciH7C8xwY6yHBHFLvf2PoC6cNvQX4eu8LAkgbkuMZKnV8zMGaPt56odAQ5XDa",
  "key15": "2v1FPgcJxbdq75sZHVLcQ7Z4mz1s8v5kgA2SkgAUGrnpNAfu5mjWEM3QLXS34CAYeSPBEH99WMiLMSjLJ6vqbfb9",
  "key16": "4sQC524Y8UNnGHHW5DTnNMLz2h6podSWE5t9kUseEQKLWVSd35Bznt8hwsBT2d1dbSd4hHQZCQES4F8MfdCjbtKN",
  "key17": "2aHsk5FUHvnSTX9M3qeBvaqpr3sp7MaAgF2WpWCUCBkti5yjA7UU3NFMjZXrdra5mMtpdhTB7oF62C6421pJF3Ne",
  "key18": "A4YvzgV48wXqLgMZCJXVRbPRsptQhuqZWchMqgdaY6AwpcobJJAnZRbrgT8EHjGfJYVtu64bBTk3GF3JvpFSEyG",
  "key19": "3vhs31Ysbe9rbizu9dZVR5zDWzyu5HWJXqzMuofm8w1JPVox4CNTKNG9GBv83U1YiZ6bAomNfbdm7WpuGrZB3LpV",
  "key20": "dyFx8TfS1ARnT13zMxFdS4x3ucyww4GTXrmxF2YoGPeveVn6bYsLffj7TY4xvkjRT3jxKpvkrE7S44qC5Eu8aNy",
  "key21": "2X2uLzQtZDAsQq7WF9XZPL9wxK732vSbELwsR4trjJST8MxCnAL6Gw1TrcQtyGC7w9s8JzHJn8TwrwjiWGTSUPq5",
  "key22": "4ey6V1padJSL2JQMZZ4k9DTEaUBWCSEgxEtatbsMXhoR2sX38fmac4C7M1XWzBHCRRdDNdSKXcUQvqeNfvJ1Yh2E",
  "key23": "61DMk1UAgnHFkTwmJzr98kAdRWtJCk8MpzpCi5zLyq3vD9HCrHLJbfVZYKhiKLJ67PpXWHCtUV7hbYwCBYKPApN6",
  "key24": "34xTGMCvcbFg5co1mEJfpW6RpTSeAHWstiVRe8d9vYqoe5JKUm9S41H5jp7XJixmfwyX2Ldhm4pu61oEcVCAbwuW",
  "key25": "4Jb4GkTSGyY2jEXJYeKxhzjb1xDjpBqKgFbUkS642BeQFsoJ6RRCqogm3MQVdf8hXja2rHHK1YwXHtZfeZq3Tx9D",
  "key26": "4P3dyxW4VrzRTyBLw7Jd3JGhXq8Wat19BEwjN9R4G5uuNckYhVjNhxbDSPTEJQvPAaH5BMeNTHd9AZKgdoXLAvMC",
  "key27": "5Mmn68vKienaFimnm8n7tTAAjegtoGUfMPYe5eMCoAp9vfiUFfcY6Fep8m9ChZ1ZMcWH96xucD5pTa1jVK46XHeU",
  "key28": "4z5cUy4Vf9qzMjuqeDqWnWmQjtXfmgdrkqR8G9zUnzd3gscygRY5E2hiPkiPCREjY9uLMS3qCJBozJKxSoUsKYPc",
  "key29": "2rLjbMi3YTThnHsJZ8k7Mm8BDt9x9dFuqJWhZp7xXXn3ADe5vG35grMD4uBVPLs4fMzSYip5pXoLDYNa9GqgA4KY",
  "key30": "3sb29Q1pCBS2XPaacxLjUbh6s4L9WH2SiF4rAx6zi3SKiFCrR766NLyD5ynpbYxJkf9avrZavG2jUUkgdWBCYMTy",
  "key31": "2p2EKXBVRYhHWmjcSLRhhRFxjW5Ej2gLXs6kuMPRZNzZfCczZbzAaUY5PEUEzSvaA79dXuoKppW2QTmvEB7LrMEn",
  "key32": "21QYBnYMrBveziPysRGfXzuYyp4F1Wh7ZjGtVvNyPFYrT8mcYSpMnRS5s7XFH81SrEpmH7pEdB5DPcHHuQYe3qJh"
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
