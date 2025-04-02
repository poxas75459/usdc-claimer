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
    "5aKBsFSaDCRo5Z4fF7F7fHPhKUvoraiMVuWmcHvfwTwDSZinRFJSjyNq14sjQ7rPGC2U6bzh7jaQZA5vFhZYpuwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBL18m4dZ6NYNyog5z7ERDstZi4cpY5ynrECzN3ZChcJG2GqcjAEGxsnaYW6MpxtpkKxsRFakLbucaJ7i7L8apV",
  "key1": "2FzhFwvrTWyJVwQynGvvB52duzGU7kHtwKFhZd1F6ACS7Uq8yK7nkZyyoPav89kGe13b6bAnsRtzzwJ9zEwpgVkM",
  "key2": "WABaRN6SYBRJkpHzsSYd6sDCPuQAik49CNabN9Teyi4mfysrMomRP6fVtLcQHAYvK7VPj7WykQYQp9jPeF7YmAj",
  "key3": "2acJftThD3UTEik1N1nr8fLyfQqxV76vXTvXLM6ePypsmWBKibW1iAq82ZQr4xoAh6Qpn2ZbXQFskYfezjRkZUDV",
  "key4": "2xLbTQd6xZWGLGUzkB7St973RsU8bnihysKoDwUoHZjbkHJ344AyRXbUTkyn4MLUBzJXrHDSkGg7UPNTgtQdGM72",
  "key5": "3FEFNsTdz2jnunkMFf3qg2LMEbrSHYLkS1EsSQ88ujQcJDM4amawb4RbdTJ5wUfy4E1xY2JYq7DWgdhFFgnqWJ7r",
  "key6": "34kmohWSWxq2ZTG5MjUHrdSnBEq1TU9dZPCZbLDyoBRPtsymiuYUkvirgDabMbqJyCC8dBBJ9PmkytrkxPanKjhD",
  "key7": "4E5voJxF15wNrbwepcXcS4wXiAGp1RPEGd33FBz6qRGmKtJSFzuKTVzPARfz12pt1JMEQSn8KiH8Rdwz8gkowopB",
  "key8": "2iZKKyaF194ZLw1GNddZsfeEyg3WdWw1fWirNraYrVNGADyaXPoN3YMZg2AXQqLfUeo85DBT2qbszuLZYHAG1tw8",
  "key9": "4KjNjz3hibqMaAgbvguEZizvDFHSjXcPdodpmEs1q2dw9annB1mPr4ZFo6kXeSYgURYqT4vZzeD7K1QveoiT36aW",
  "key10": "5jUvaCVegQJXZVqpBMsS7UK4kxknQGucYNq1d15j5XhJhVfhjd6jd3XcSr8SCb4sGJh8cwcVsgW8MEH8HkwdNm7n",
  "key11": "2KvGaFkj2Suej44Bpmt5kmkM1APGncCCD9Q7BfswXHyxkyv5pnr5UaR18XGRWZvmP9wdp8dnsU93FZg5Eg72uHss",
  "key12": "5HAY2vhAYLc3sJBvexgv89F2AXQz7hSpgoUPq8BLApd8MJgrbUkJz9kb1mPuyKZ7pgRqRkHZE9dWzu8CRXsg671X",
  "key13": "2Ksn9zVh815uN4FciwZ2tFCttQRHxu7h59J31iT9TnZTQmKBMx2sNZ2fzjYA8Rv21VmNXvVpnbJ8yfZs12Tk4gUk",
  "key14": "2c4TGjVVjnbywhEvy81BgP18NGf4nXwgnCBiqSHEh9KPRQLBq5jZhYzWUq2MbMv3uVTV6Uo4KWr7mWvhuauehXQK",
  "key15": "5zW5tc5RX4KmkkCgHTcNjE1519C4vUoi538Sg36aNocDJcx4crfbqabQo85gNXZzeaAuRmDWr68vitoLdtQ3nV8t",
  "key16": "1VATat9vUbbB5xaear4mRXxKMku1viQacr8CfjF5c7KqHSHsTDXzri8UCoNiMLkht1gcu4PkqJdkX6LSWk3NS1c",
  "key17": "2tvqi1Dawq9CVZby8vSHkTSHndFbNXY8CyYXv214TvzgNt1R2fMnfSEi2sXTCGXo2kpbsUAH7yCUyndAbcMPt25V",
  "key18": "4jARXmGjmbXdRZfykGoSqUM2G61TbKfM9ifMkzcE85uFe12NvGxrx3RwYHLEUE9yebfHevJwHBWV5oSupZjEF82E",
  "key19": "K5JWLBPGwS3pDuS1pzD4kUrJRsVXmnnTsE16XerEZTh85xD1E5zQe8top5vcsmJLJR9W6k2zj4MyMTnmnv7UsGt",
  "key20": "4KEzUpwjQQXh5kZqwxNUCdQ9z7jSWrKDCbX6WbXGSg6iHMfeTBFU4aV1x8fcpWcUeB2dqWN7bEnK7KyY69e5twhw",
  "key21": "3U59AGX6ZQaLQBoNruSBZQWgVTRF6dco7hxzuxYa2yfDNA7B6GzbrLA3Gu7zrrF3toMwRWi42MRjVCZcDfpRXzdd",
  "key22": "mCtJBSf4PULjx3LdTiS9perxtjoy2gL6oAg7YkBGCJhArR5vES4KEABP7sh9yRVLCTK66HxD4a1EMZDLmsC5KP3",
  "key23": "41y32JHQt7jzn7zVv4k8NsxLSS8jhqffTQx27WZHTYf13GGZPZ6jHut2Y23qYjQVztEJW5KSeWfjsrzHcBEj2RZR",
  "key24": "3LyXKZZBCL5hyAeeUDYnhTdV6enNer7yGpbVGzgW4C9VHRt6KnHZLrkaWTn5j3yfezXGuiTRSkEUBambdLzdNvQH",
  "key25": "5bhr4qEgjPqQvmJ2cRVPNmJPjjMY3Mua8taH1mie4SKnNUmrahQy8MUQ7iMfH2LKXdkLEEAmtHdR2uA2PuT1dACp",
  "key26": "63xT4DAktp8fvZc4omfZEsMxPHMq8FBNrBrKFsnpRGV8are1Laqq1Jiz5QFARAVUeN4uBoGjnD8JkyXfmHJGqo56"
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
