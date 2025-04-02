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
    "5SEv1RuEBrBW2CAC96TvFPek6ACk2uHuagWKTzqnvXrngdoe7opEjkNHyANZXw78jrTLNqXd3e4hMzjKBoJA1k4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZgKaQgwXDmQgQgbXtMnw3YjDog5A9HQ3dNTUhnL1ZPB3HwHws2UujGs7Ze9md8ZV2FZtmJB3TVMWJYypAWjpaJ",
  "key1": "3W3LthiEaoLaZh3TxXQTXuNMmA72ga5sPX1YsxqqTdMkKFuXNMaudfbK4mPrAj9CHsdHG5bu4JT9mjUQfd5ZMTg8",
  "key2": "4anQRrPJVJ77NnBouH4CEn6XX2r87rBbKYhFqGtnqGw8ouVCdSk2AxxsrMix4rPBT1dHbVPe6fPWdjYERJpxifu1",
  "key3": "rSHzZM7XnrNXvjzd8gJcNXL9hP6XZnbrcYVL91d5ctGiPmptYfkYAAgKjGsisbF5UBeuRG1Np8RyYkw5WbK8KJ9",
  "key4": "4QusDREENWTUvycZR5pwp4Akto9sPAuQRAsSSJxwSd6dsYp2CccwUp36cxw8xqjH7mW8j5HEVAf9peqaZihS9pLq",
  "key5": "37FfXJ6XSMXpFz5U8v72aSUMhYQNRWozzLzfEBHoJSX2dVj2ShFuTZXXUXTi1cj3GqSjj9z3J1Ftn1y5xBrsXhzc",
  "key6": "47FUoKrZFjXQVtWXZSHrHMXruL7eCY3fZcXZkfknUHPubc6bM48BP3PyoK8rFQo7sDKbSwQ6bDfothbVcH4vf4Dq",
  "key7": "4VewnQKBrvLWazcDJXgnZuzxqUsJNj46D2gkvrdRkC4bQpMXiiF2cRwRnWbDVLpHsf7An8XnU9qyXjyRdftb9g14",
  "key8": "5hXMpU65NCBLyMHZnTQBqNj5qb17jFoJSHQ339XeWei7yBbVEJkbdC4dKZDKY9unXB5sq73CTU6XkqtWKFoAaZS8",
  "key9": "3Xyk3ca4tmVoeDqYh33gvEuJ3ZjpZm3pn6XztRT7habuhVgyjX48wxKK7wNYhbtpFRcjYLUgJPBW1hJ9SmXucj3B",
  "key10": "4QF44gyXKZjdNmswkx5n5ogkfHqy4TAmnBpseLYrtbC1sJ3e73gWCy3JVosg5pGApmcd7YGwaNaY8GakL8hRBCb2",
  "key11": "VpLSZRdxPv7d5GURoamKZhaGoL1ztPvfuCxoZ3AH7zZjEh2uZCjN4KocYqaGSKpTNfcxLHH4vbsi3WijStoX4M4",
  "key12": "3w7mXXxv78fbkgFnim3n2Vzpr3ojGPbFu8mGmqwomfH6RPLu6VVNdRyFmtGAWpbABYEZzF2mW5m61vVQWMXRKyHG",
  "key13": "3JmjKAWdh8jatnFPmcGZdPnYuZTe3jokp2CDBNLABHi6m4USvmx2RqQKBTssnciAxkH21CxJtXzAu7fLdWqLZ47v",
  "key14": "esJCkF7ctXJARwhAkR6JfWcaToxNe45CcdhQWrg8jmgbbUZmpt8fqsmV9JDsqrFwxHyM1rWGo7fHZ6TZFoKGu9d",
  "key15": "5RZoHyY9i8YBPJQYZSGZqVqrK3Afd53QdVDgrbkkuM8tCugngLtJCzSMA33GfMUsuhyez7dLT9CpGEHUopv4Bibm",
  "key16": "2GxMvMdrox8nc4YFaeURiJLhk8wpBtoqXgkSYgXKYVVnWtan2DPz497mxMGWUWPFjLCFyZvte61Z45Di7Jp2rxLN",
  "key17": "3FncqWBcWGVxbi3THBkQbmYvVYeWqdYQRFz5VFmpP4CELeEJBxUQhxujmkid2u6c4zjQWehu66TcwJFPS9H1BJmH",
  "key18": "4vSbHoFW1aV3hQEnxRfurd9uFm9C3eNqvuv5MjAkatsHBbdFR52XVJG23bzr5Zz5dg1GegkCEHXJp4mSDuMQevTL",
  "key19": "UPeKDeDQVvsw2YjSEGjc6RwHBY4swV1F4jh4zY91bsMpNCBeDfS1ZDtecMYHFHbhYAReW6H7gvyE3sbLgF63pdL",
  "key20": "56eAd1DaCHNboqpW5wEYesdn7t2TzJYgqBLUdsCbGb9XSL9eRRPfuc4T6LL5rQnpgq2eiXjqMeQRwqSk76vH4JBL",
  "key21": "47Nf6uDAXn5EMufZDsPJmT9oKKnNRLnRpPjo5vMqGo2CsMEA9BvU3GPJWWaV5KNPdEJ5GXT5q7q69ykgR8ABRiyy",
  "key22": "ceq6TViWvjGQL7msWvb12qQ3TpRNjkW1z4uZcxdLJHYXLF1ieEGipNBRFQDRwh4SivRUFTAgp4SdTD4yYGb1mjC",
  "key23": "3MxVPuLmdPXcmqXVWvDvr9MYLDNRo8XAhj8bAFo5R5j2UwhhHdz5WunRSeJpALR2ER7hhZvNRPHAnU42z9mhUnbn",
  "key24": "vLaGzN9kHxmRAjDmCNCQ9p5F3Apca2Rx14YsSgGkgUZv2QNvRZ93G5jo6BmEoqnxntpNpuTAbs3KXexkGZT14Tn",
  "key25": "NBzVeDR6XNM1qwhUZFAYbce3oRVpqtAEbNvf8Z2PTo4cZiowo2Bst2Lbb83Fdy2xVckjZqKhR7bgqgTs57G2SZN",
  "key26": "2PAQ7Ukqt4SPjUBTPR8SaCCD4imgS2GuiVyoETYc1ER66zJxVup5fBkjHcWdhS5zFjP65K1mFgSXE4YdkYLBfcwt",
  "key27": "PXYoGbjXzNyZ3hXnND6UMQBDLgnUPJYg3j8DC1eP6QH8mRxipVGoN78rUxGF8sLQMaFkub8St1nh52Z29iQCRAt",
  "key28": "57e3Sa9JfhyG9c5VjR2z6VKKrtUcraMkwAfFo9cDSiY9uNWm65wTCjh8Ph6gtehMaiXK1PJG51GbaQcHKrvoBHED",
  "key29": "57Mtf15ixQtUDcSnwe9sS9qZNDEqE6joMj5Xt8AXzoYWwG4Ep7jHYUPi6jf3yWxeRmAy9GoRHYCdxeWPRAyExPs4",
  "key30": "38vGRV2GMd5dtre4TCijrUkWhPhnZsnKqHzruwhWZLzy4NADBtXwP1nhFKsueMdVKjZoua16EuaorfUknDgR59rn",
  "key31": "6DEyAUsTM3V6vZXM8FKjBsPnCLV5xaY8UufzjhEKPPxPttugvJZ3kj3xSYNGhAig2rzLnjiHiVHzJhE89fo1qPd",
  "key32": "5MNSzufkZXdGRPe4Cqv4Umv7uxVcm4x6c8Rgqj77hfR4butNZZUBacQnaVfndQ7ZEJ6DQvtXaUq5aBLahqu4dCfU",
  "key33": "4eT1x5ehwuP7kH694ZTLCqrXimf46mAM5iqEPMZq2hTfJ2w1ip7aAMPap6DrJroey2gGqb1GoWcAtqQpQMYLFqMB",
  "key34": "2BuSWM8Qwcu23HK8KTfo6ewP6mpetaKMqN7xUaTfgGrS6DytkJckTQH2RaPHyNww4a7Tq9BVFhuEW4BBdSHB5eFM"
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
