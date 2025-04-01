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
    "5UwqqQrCLWvy8EmTv8jYfsq87cAooxBWTcERZmc7bQJptE27zuvVrq4adSZoG4DXZ4GFbmJLTZSs2Q3L6EkL2LT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmobYS13mLwhusrCh6CewsbWHiZqBnw9ryJrxzD33E9b69cWMmkFY9dLkeqFrz2aqw2kH7jFQLsbM5RXaHzE6sG",
  "key1": "3FQiQRGBkgyfHqVZv76YT6LDP36VkvmhnyQp24h7DrKUb25XezAdJ58wwCsQJcL8rNjMD9Ls27ZxsSABxiKa9NJ5",
  "key2": "5jXu4DcZRpR5kqQK8236QB29idcDduymAf8aF76uNh1sktVC7SNxz6ecoDcQgUPrbTRDxCCWUYs6QQXUpXZm6nZj",
  "key3": "5989viidvqvHLeQVXZkg2W81BySJnk6zxS1Le41qUDYhUnPeJKaUifoitTsE48RsACQxQPNpobdqTSshaW6Pm4po",
  "key4": "5Lb1sZvS1RCQ7q9LjPazoQd6pBEwPSwtxwyRa2iKqcR6Dg1pY615Nk4fByty4SznNv6Mu7MezepzCErZdXGMLLAX",
  "key5": "3Vvi1JJw9c5t2ZHtTfr49VPUaK5gnuwyhiZ6hmzCkAF63FM2FzbddNijVQSe38sXFdFKobRRuPXwoQi7kNw312L9",
  "key6": "4xDEW2UynrG4WA3DQrYjvEs3UZTWdA12KfpWKFLEHapNr7F9BaLVJ2vHm5BBu4ehYWnAo7XzK2opZv1Reynb3RWp",
  "key7": "5sbXQzbYGjNyWmCqKEg77MUMiNap4HLzddTKdheyxLACLCadgW8KhHG8PTJBJbVzAegFsFvLmoXCa7CcTcPLpAaK",
  "key8": "2YqTBKUzRGoGRkkZLpvJXPfD7AGsVL4nFGfbKCFMH717NHvsfAfseFvzuimnkncy15Q9ExLYdp84h9GjZSRF3NmQ",
  "key9": "4eCzePeqQq1V4Wyp7Y2DCrouuRzGrtudnCnxyWdbKU5eQYJhMynkYeTMXhqUW9RsFziGHfLtZiSHW733YLVNcNy5",
  "key10": "8tGsZNjnzea2RUDn1d4qkFG3jA2LQnAig296dGVC1KfeeSbaYbagHEUA9o2PmVhGmf6Pab1WgHesJHr8CjgpJny",
  "key11": "4idkmgnQzNfjoPJtta32WHkhfkcV3ojiSAMpsB4XD23ZrRwYaRtnGoNNzzfvpAjnayYDkDFwrbgz2q1wRDReuSH3",
  "key12": "4WpmC54LZmVu6gNw8E7dUdwZSf4UbGyVsyFKbania4BaZMg1dewPCqzYjDfQFyXU4MqwNRcZMAHGxCezgZpGzpWY",
  "key13": "5V387fY8UwWbNeCXguU39rfsYU43CnZbcMpq22zkdd8zDcK35BMwkHG3eHK2Vj8T8tMyGUK8nPioKbzGEQVs5nAX",
  "key14": "5DUdXdNp2xXmwpvq19nBd55haZdMYbQQLWPdFkAENrLBQEtySVcBZ3X62tax45dn4wQ4kZxXsgf13wTBXymUgVAr",
  "key15": "2XrVnuRjhXhdJg9dim47DB34nc8f2FP2fmV2nezavSE4NJhMDpkSsivXcCHkzbvgjMPgLSgtVDVBaAM6APoqunwx",
  "key16": "4PHwQ4viN16gKvkxMgzZCvVovdXcaku1ynMVkMhocKB3ZFd97HgsKgru91FQses3VagQa28d3c5r7UcHuG1sPYdH",
  "key17": "4gDrQ3yKhLdpR1gtV5yGNuh2WFcQrcjTMQA1C1YmvXEwjNCyyNjGyr4GNUsCyQF4sbZanSoUkYx1CmLMzWyzUmWu",
  "key18": "2KpTW9qX6nbcJT8oFCgEN6TD5ULi724YLT2f3x28PFLgwvLHdpVDysUMRskjaXxT6hGrp11kTESdcfo4jeBJyHQu",
  "key19": "HSgJW37CRsXDwwDbRNxzYqskP3P9e2tZagDsTDh7pNKXVe4sQtpoHUs7hkQ73gSh7uMV1g387cfHZpjmcYPmYsK",
  "key20": "5VivavBqbBzMh4otj7CwxbLqBGjX2yXddHGBvg5UCzbAgSxSiWvNSEC4drdPwGK4BtLcQVxBKmHHqxi9H3RycC5a",
  "key21": "3jYcDKKvngxDK5mmPVLrnb7mx6GfFKBtbwcVFpy15svopWPrZxzma7dKTUbz9G3TQSd5LkRMzYshRya4HtMYVSX6",
  "key22": "61ANCqGCh8QXRJrE7dieP3ReJsLBM38SDw5QYwYCSyeH7DtZBpr3Shw8e1HQPzNFfyC2oHGMBmK6DXdPp5CssrKp",
  "key23": "59SFVmryCDRWti7TE3H2Y9uQrs9pJCtZfT1KYXAHigqv8f5n9WC8pZzXTthfz6ZrN5Mh4LfQrjHXe4oJ3cAvnYM9",
  "key24": "2NUP3mBQLNtEPTvvoou2kFhWnLyQsuCxquaTfhJExTGZUSPmCXLzUsXrnLNHCrpdG153uYBn9Z84KNYfqk9x9Udt",
  "key25": "Z2h8d8a6o4KTUcb1cB7k8GqYniaPasd6QSUhg2eiKpz9z7jp2PcLZdCTWT7fD6DZ4dsacJX8JoE8dkAQsXKHxZM",
  "key26": "2gxmices5Dh23o7c9foDZbnmVduK67R11BMP8SLxdz9fA2PA3wFAvQNMPLUVGQB6DSHwo7Xvbe4XpSDT9YbwV1a2",
  "key27": "3LBdLAauwCPLRf1Y235byhVx7U5TyLLeNZ6TWfFbwR3GmBVEq2AZzTvgm37Ni819WkQWui34Vd1H5wDf9RJvJwFQ",
  "key28": "4wfxPzkKtZdGiKa9QTUtQpXsWwzbYnyE6EqWz6Tbsj9wRGBULsckfEHu3BhwTFVyjMSAshboPpJHc9kZu6ymfu5Y",
  "key29": "2JMEuizpWhc3BfmZNTV4qvU95zAWSADUgXnUhM6M4Gx78uPTLQLeQEiaAkrWxrwTs74thpWhgoAaniv7XAhGMjeS",
  "key30": "39ShMvH1xvMHCYNJGtA3dxa2zLQSFF3p2nAPsPwbP27dVCHQDk9w34SZw3TGKR6xfZDLM8Mj7C4X2J4mUgHiCAyk",
  "key31": "5M3URLsJFA71xindvc3WnYfgsMVTraQVcN3nFuXWnPiQ1y6xEafyGgTR1tNpef95CQ5GPGNKCGd4Rk7ELuheXMJQ",
  "key32": "4eKgVkiDKJWt25P98CasqodFPpsyn4pN4E3yVPx6zMujCrACy2wzkbxyWaTH1W5vECnWyxdXu6Qi9yHrEG3UiNxn",
  "key33": "2zYYxUCnCGXwNBPELrX29RzdHdcUHNvZeFriyWRnHuoiPb7W8D9LZjLY7FXYKPXXyRqJUN6xiqy3h3YkE4YC8VLF",
  "key34": "ndrUb9PUGDBcCY4rTneGMDjtjUAkyXuVXfBCnb5rqfVNfcqoDsqhL9rE3u1wzTcixYuHRAWH9hMMSwGtgEHWiJB",
  "key35": "2tJxQST7GTgWV4iNp425uG88zadfHjxZpvG1g6SWacb8UDTG1otzRUfb1gJ47nKh7hyAAUU4ts99D3May5FUhGuQ",
  "key36": "3oUZ2jSJSA8jVsNZhA6RmcjLqoicaArAJxyPHQNDLfunafRKWHvVwPS993Crt8apdFTiHbia3CfZkY6a7BG55Gus"
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
