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
    "36A7QAj6XYtGkemnquHKX5SAPX8ktvzJV8qCez4TvHZxuBkG6ZFtwP84ZMHbGFX8eoeDQWCHmQMbE2niQo91Pnzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwR8HKFfyLtajeTgkr3xSxPLLr37CuvyrvHoZPCo1vqoVPYPUoojLwdJ4uZQTa9kos4AGdNnfywqSp4ecJBQPyG",
  "key1": "45QUd2jsNcSgS2ZwAGroG6i2HBHYuoFdPLzAbQfKxMRoNhSiKoauBmvp1yWgU8CHeVVXbrjTgLvDCsGY2b4HPt5J",
  "key2": "44RUWDAt7HMZMUNejB25mNWA7a6LZoY6kocA7tXuQCU3ntbQk36ZPkub23yD3J8nqcdR8g86TyRYLHoescs8dfBc",
  "key3": "4MD1T19pSA47hcz7JX2TKHE7GdHsfS725EhPW4NXB3UkkgXXXmsWMi64HfcLtPXNmQHDJGu6Uj4A9UeuwEqbVnj8",
  "key4": "2PZZ7YNjUBkZDBhtjMjRCoz6vFbSEgoCfn3QSLRNCvKGJ7qedmRhB5ANT96iyfSFb8FLVRtpNiCEKh1F526jVWeg",
  "key5": "5PBNGosdsa2gSzqzsZaaqijUtB9AjkWcMvDuLPkBvkR21byuiHjgmzmKQm3GVAqhJspZT8x2XCjSJ7pSS7pUiZxV",
  "key6": "4HbsgCDfcLCLfhooH5nP2LnxcgSbrTtAR53RTJwwb5hsebw7xKd83owqDLkSFpV57SDyBYMEFkuVNbnPjKD4YEgF",
  "key7": "3jkReb3vAUzEZegtwVRSZb5RgTKdCRWpwhuSENCg19GWwZ3CzeYpNsCCATYmSmrk1D53ZS4n9WEwx86yUJkuBAy3",
  "key8": "9uS2BsLBRaz7azQL7Dr8ZdTa631rQbcgHCY9dvcoUfJxsQcGBgopRBuzubW4SwAULjtrMHsWtWpy4wizWwSAunx",
  "key9": "5HKMjp48HbgJ8swuCH66zhRbue25VBZMEWfwA1sy4KmYPUwQuhuaDJH1i65nRFxwzkFkQ8ee7ErTcRDULvyGXgWv",
  "key10": "3GhzKbnQeCz4PMhdsV9hMXWnaV7qp7A3PBgwYTgjCtFsDocqcwaYcLQ9CuSpeQp6w9R9nutiYSM9dYtxN5QyvX9E",
  "key11": "42XaKBHhf45xJPDUqCHasSzGWYUAfepYCi3RqGqLBCMHeXfdkk2p5SmLYmM8sKMEaQU5YidkYZQ6zMDZXRZzodaZ",
  "key12": "4ay4EkD5DCKw7iKTNwVPPj6RpgZEqTu335no2Nf8a2zDsD5iFRr5CLocxnEmNUTKdiQQgKa7FTcbq4RgxdxwtjMz",
  "key13": "53pnvX19U2DFtYogLiKujUG1cihLwZez2y41bkQAEmKpHbduhmh4Rag2JXLbzzJR77oupcWT5xszoq9VQJy4bn58",
  "key14": "2BgcE6qKaEqVgVMZ2VzXaijj3ib5XH4XzoJ8SDG8E86gGKQreabvzg3jyERgkfVvnZfxA74JraYsUiY42M9hZmLH",
  "key15": "3uxBaV5N8XEQgku4AEpk7Sr1fLimJvCMfrbeTVXaGfDzUXu5nRdUj4uqSUF7MbpRLHrxoNdhqKBX7oDRN22SbgLQ",
  "key16": "4kNmfgJrrMVbc5biCRnQYYdzNrw2fF8miSa9kf9G8DwvCTQoEzUPZFmi5faUGZkkLe5t4wL8iPHZLBtzwyFsVTx1",
  "key17": "W5hGKbth46BayZfaQNuKRyLfxzidKPgzAw4Z3ax5jjr1eHNL2eCVhb7Kxt66ARoTZtTYEnuh9U8z6FJqJqsUbD6",
  "key18": "Yjr3prBiahffi3g81SSDC6yVGE4jn1Cdrxa29ARS1L8oLFFdJ624oaZ9ai4k43u85RJg6y7BdvBZPYsQYspqnmQ",
  "key19": "3KmMP4zfJ5uctix56LgkCwHGQQ4AzLJsKR8sBqbNPBefJSzxnUKHyqMjTv8RgqTTNmjo2M5UCGFvaudwaD4QWvXQ",
  "key20": "2aYz6xJ8H2udFaM1fkxHrG1Hn4AdVk5WQSSvRmgzPTyPPzEpSQrfUpC5YExDopfhRJbgQmi1Hu5XSie5WpBecC6p",
  "key21": "wnCbPPMkCE93rbTZutB7jnVKFdt2bdoqoAGc5xt9UUhVVaWmKBDdrkoh2gZqcnDfnusYwRtpTKFwqird4AVFb7o",
  "key22": "5kwz98EjZ5nj7adEULgh81c8JT8pX2zLFjfdCC5eYH8D9NVmfTyTSP1bxiT69ai6kj7jjP16awwx1anwbKc29tUq",
  "key23": "dLWMwbUYoYCjP7Frve7tGAe3UD2jpcxEaYf6AY7fApUe1W6nTACf9qmZGwZaCDPqjQdgin8mF1aE2YFcEJVah99",
  "key24": "UtrKdQW8b2eNLnyCRPh5r87TYop56KvioaBZ4bKiab8jMaqVsNkTYMbyzgLkWkLCUPhrKwJhDVgYoQgAcwkY66u",
  "key25": "5YYpeUh7mBcGVrDPvR17TGLpixGNgorjAt4m8cQNzuqb4gpR6d9tRMdpi9RsccKDrMWRgXKxgaku9wQefBEViEYf",
  "key26": "2WpLmqRN5vYWR7yMJgqHznQ34pTqjdfVsXFEhWfj3BmcqNdy2ZZeDf9LvfvW4USnR8brw2pb3cLoTY9shZTjxRB8",
  "key27": "nMGQKfzJt5KVSqSQtmgk2jrzA3hk4ZkogJdazHjJfGxrZNQggxw5dHNBTiyHWDbD6z4JSo1byVMiFRJSMmuMDaL",
  "key28": "62MPm5zHpHG6VFK1YMBwT7YJB4kZYEAmVk3bqDrE3TR5LZSaSok8zUn8m5jxBEhWNtb7QcYWg8yMYjBLvuEysJSo",
  "key29": "28A1VZvnba9fNnWqE4FcjepAR8qiMTwBSJbrYoKomdQKFNw2KGmg6CY3ymioMZUjnesYvShdCRrHdMDFRQ96FccK",
  "key30": "27qHYB9ePRyZ6o69arx8dLGh543kZV1c21x2Z1YhbZwSh4rtPryN6JgNpuFy23GnjABPqGy8KPCzhUZcCddmeGQh"
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
