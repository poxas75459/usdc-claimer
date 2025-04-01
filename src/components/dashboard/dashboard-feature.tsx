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
    "JkGqJNuxBEwpVoCVZto8u7vrcD74Tx2RLPyPTLQ4MvUqHiJ63eGrKGLBEjCd4sD8bC1aHFAXxHg8UZi3fwjnFFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Zpjd8gRN8vWhZznfi5rtJKtkh1F6iWRqfAQzwXJGAuFx6juCmJgwD126wYxAhFZhaDXHjooF4DwdY6yzCHetyv",
  "key1": "byMnimMaQHE9uESbAPppfmk5yS8TmqJX5vFnuxz5HXBQVf1G5hMkDxbM3QrEZhjumCnzMqFMTwJomKjJH6T8C5R",
  "key2": "2SYyBfqzqH3yj3LVoSV6wKurRAhS1a9TcUGevr5CA2o7igtqfwt9ggP5Tdh6pnDWCe6utJyuEh3AWV9kxAgppNHx",
  "key3": "2mhotKVC7Psp3M21dHC5zYQrWxFxhAwt7doDZ4rR8BNjNfEAZ4QhNeoEn7d41j75LPc5YomcUAS1sTvQGF1fFDDB",
  "key4": "4EjKLKWHHUSS2yAX8bPTf5MB8NDQd66CjkQzZVJteMAD6HRwxE6Y6MnaxDTn6vNmn4nYx6VRVVed9L7vgYYUXxFK",
  "key5": "336i7VZuP5NoSKX5R2rnuM4feLWe3RZx9LEZWSMqkUWeiMXrvaQiBrUZdKf52xU7vPruPN81YrGe84wSuUBHMX6z",
  "key6": "QMQbNhEfmgWgeBGS8QfbpqrZvm3uhnKt1aLd9VHwLiRzHUpsLy8N4p4W8vdtQhg64dWmxUNnxVrgoPipLcc8p7j",
  "key7": "23t5sDExN2pxXQPHKQ55x5nGxDy13GyoGru4PpdhNmqTpM19b3J3WpyQkThTnBJYZfzSjEcxV5AS7gQZ3CUX8qmn",
  "key8": "2UgCsiNyjx6v5YjuGytiCMgujgWHHxfNS9gXpTorCmoZQZ6VSXxTBDUykzvCzCpBjb88aCvMjCZtoz9zq6gwxAwG",
  "key9": "4oeNRSLKbZ9qHFMvBNrGCLzR3Ba7QWNyWqXdWr8mRAZCAC5N3udJ95tiDYknF2iZA84cXtjKamqtB6dUKQEvzAnh",
  "key10": "umnK2pfWpomWmJoP425ekp3z8ManUtjZJpnmffuFd8BBNGu2Kymi1ZYpAFWrbB7YboJAqP6UPs6qRSb7U1ziRqc",
  "key11": "2uAqRL7sPX9GAUEA5F27XUPSZgCNBtzLdqUzB9sDsxxVeyGomRgun99djGuUFzCQyeRx4gtywHjX25vQSEMLJPL",
  "key12": "gnhsvKakzxbFujDkuH6i5DjvdmJL9rxidAAUE5BxeP8g9yVsnopzYEtMAHsLCnBVhWWDoUFFzDZvf27ZProka4U",
  "key13": "36evbQ54MLQhJCZs2cAxrHdj2LaBsJwQJETy3heehf6Lrp3hr1TQ6vVaL5B3tbHXtr1Xm1U6n5ESEMGsiYn4uHAF",
  "key14": "3Bd1q441jPzVsN9ahfue5a5HfmhCGw2ALrUntrDsEbGVyeeSY76aLg9qYZ5tNseJu4diCkqTNwD8vPW3ADx1ro6U",
  "key15": "22wQDiLNpjar42BvJ41tj4a2HXVAgaS1DxedfaZuWoBu2PxjvxuhoxXWSdoNQLeJ58k3XsxHeFeCxXhYvMRj8L5o",
  "key16": "4uao1SfDz5zyNkYy4BQgGZskUEq6G2qXpdtTtnaBRhTjtDhNP6hndiAig5UdmqTAkkRTC2Yya3pVEfEKDYFdv6yM",
  "key17": "5DjNiiwJAgQ1kgJz5dusJbB3GbhCQZTgHV9wamFMs1zKNDimjVUmUdLoNoscToRdaWusHeBrPSfdmJ72ra3iLncv",
  "key18": "mRnE5JGof2RBKrFFGtmrs6K47qbvFeCTKmYvmUw1dJXFiLTi5QhdWJYXyy1JA9PjBtPcqY6JWFXhwZZMFDM6xXb",
  "key19": "4E1mwByyLNzhmvjuvj1WZvXDEZx2VtHzhGWG1JRuTTPPWgnRNmEuuAudaDrJKqssaytbKYqXy6jmyF97jCCusVnz",
  "key20": "3QuBNEmxr9CFHj5Dt5iNBLr5zeKQwjdatqUBNrUJrBVb3GX8hhCmahHS7sSwgTLXK8ii6ZyaSeaW62Ci8Wq3usEd",
  "key21": "jg1gBLUnSKYnfKAdJLC281UW2y6xmUdy5v6gF5onGesdBisuP86JnwmMsssaBeKzndMQTBmrRFnwUN8kpsjeqAq",
  "key22": "3ToSegTHjfPwjJz5BtPYL3HiP3YwYTAXoQQfqtGqeEf61aVBA4Cy13CXoFDkr7f6maaRCR6SBvaTso9rTU6FwtVY",
  "key23": "5m6iZck8i1AxCtZivxdVUe5H3YMZxvFCMhpMm1yXxreThUmsWZSiS66YjNRX8tXvBRA12BMKiuxWkhdE9nnXQBzc",
  "key24": "41xd1R3Cq7gf89YbiucJi3dF9WvDqc4C9sZA97CfcBnqR6nJnVoKB2nQq5XtNJLgufwNy9d219iSHbLxq7Ltm8AS",
  "key25": "9a6VG6xZk1QZmt7T5rHxLFaPMM8xiL67CzFnYws6iRY6Lwk3Ef9UVSUimftHaJ5fzLseCYEuqfw1y5KdXya9W9M",
  "key26": "5W3Q1vmPuUB44ffXAAQjoVA7a8QbUMAg8o95tBJA5ifcpFuNzJVFDzBDwidZ4364ieBYGnA3zqLJY6EF7DfJpzAP",
  "key27": "2iLEc3bFYgoWMhC935gZ5av2ScGNq28XyGjv5M2k1y3QSQ976Ss3gCNB1kycwi8RpTV2tpPxkmWfSA2FhhxCkafC",
  "key28": "24dXzznGjXzbd5fWbmuPjoKUCsQ5yr6kw3BqnLhUeiCsaffstEXYNx6RjuiSUw8kH65EeiFtXLrzD5aYBSPNXfuV",
  "key29": "4tEnDavKNSVUEQLZsWfLNRHxe4Lyup23wdtnZxyXCKaecZJqtjokRPdAEZRhbgDs7rDMZMnTmT8tSGoRo39Gi38t",
  "key30": "481BtEJ8m62DANBv2RoBv3qdpUR8h7wRYYdyUBH7h8EzpWQWhKUtFmshtdGiD9yXGQYvigBQi5YnK9xbBqJKmhrr",
  "key31": "4Qs7xXX5do9k2tAqq7DYBS75fT3z9PTUXiyjKK1GqqFEtPptLtdVduPdyyiG5kgsMB6H3CBe44dH9uLK9MtDHdhk",
  "key32": "BQxxc7wCcXtWZx6m2fcgocCuVxKMmjSrDWZhNZD3Xcc3rG6YnFkgxKzaF8gS9FB9JmSpDDCPToFb5yvo2TLdTWd",
  "key33": "32fV1SLU4A1ixoy2A62ZoX2T78VMfYZhq2ZneAFaZXfm1vaUM98CZeRNRG8eMApsD54T27EPrjPX1EAFx7bXxMdJ",
  "key34": "5ZYnEz7wETmVuBxW1vzt7uWGRsM8AhE9VuduBzZLQdTCBc67HkRFD3mXdzvKJtaA9UihvA47kDrB1MCaYSXgTn5c"
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
