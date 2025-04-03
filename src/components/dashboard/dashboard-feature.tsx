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
    "4r3RJiRUrrFHowwkrc3jWyVWXrxPCdV8523i5qiLcQMxtmKHaUF45yVS3TcZbqQJnJV4YniS1TYJn2N1vttFodYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DBTMfMJWRhBTyKfz1hwisDeJQseJx7CV4FkqtuSxoyFU896kAvrz9rje7QdQH9Gw8c2FVyUiNA7rH16trN93DTL",
  "key1": "2duCzRzBh4drSjA5VYgd63CavoyJi1sgxvNumYoosQXQW6ByaQMy8gFeXkLpDVyGWhRk3G65Kag6ndkwQu3weD1v",
  "key2": "5J12nhe3nyJ6ypGXtVK912dMcRY17hsystEB3RRwqkiSUwvHnVxnbkY9CUS8Nuh73gNRuezYVKLSrs7v6P7GgDdP",
  "key3": "2RjczknXWJvrQdDS7QyXNmmPosf2WKr5ZVBZAUzoieZ8a5Lnd8sviWxqCygvTJKPgsaLonUGC3ey3eqwim22kTwq",
  "key4": "5wPiYNEXGeCL7pSSHewq4ckMefPU9F3GDczc59GCq98Gy9SGNbJNZLcVhXRdcvPKYUWzRsjFA3vCHQ7CY4Vomy8z",
  "key5": "4ynmYZr95oCXGqPFZsYVRVrLY2PtbiGsyrwsKqsBVe65MfgGo9vEev5m3d45e94JTM9y12w8suzqXd3Wt6aswAvW",
  "key6": "4mvQQV1AtJybDFyA6vmN5Ga6QVBXvZeye4QzMgNg4XVgJrTAgsiiC2WCSE9YgxwquA3LGAxSDCWcr3vK54thNw2P",
  "key7": "66GqqGLqWSy6U4hAyAu89NjZ2TRPNGJ6TxscwUpG6KdJibuyK4CSem5U2v2om867fJKLk8cmzq1v8Jr8DNTLtrjF",
  "key8": "4k61bACx8PC5XHUjYBqjSb4EQmNnD7PZX3FopTjq8abCKe2gKrPD7bfaskfBaJCXPj6qW16boJf2aXjsAnronBjj",
  "key9": "3TXcZztHsYkqhHWBEzYhQxMqSFTkgxSF32MSosLrquQ8XvgGT4qKhL1MF3ewig9aPoSTGE8E4hj3QugyPaRdAUgq",
  "key10": "4CvkPhSBAPkvYNM95XRapPpU4Wew4BXAf4WUNKrbmUPDHJvU3Vw6pJKgwS8cBRymBEJ6pmHHtA4zj1Hdxh31RnDG",
  "key11": "3J9BKCdKb3h8MBmoZfpUbmoGHism6dkoVmw6agYiGFGSXcGYWPoajhhkKFo2fvvExwSLi8gzDVj2w12cHxRhPmt3",
  "key12": "4cgLeQhWkDAQutf7gfbzPrq9B7BanqzfF5kqzZhqy88Yy8e7tqen5NErQLg5vHmNMJU9TAouHkAkJmnAS2aFvXZv",
  "key13": "5VRcZqAwGfsFJcu7T85HxKGUJNZeUzN74u864HKfh7P17X8198Gib8U74XBev2GeAd5BaJq8TaRVeWBYDwL2U6MU",
  "key14": "4vhCVpn7sLdbKwzCiQQopWvKVLxrYER9HPhkcmy7b92qpQ4ChRmJLXJhRiPyeD2krNeh9rfKiva8wohRuoLKGXrx",
  "key15": "5W1tL6ycH33fdcgrKbAyVLoJNXPXqp1TMwKTcq7oKBMEVGTnzUKH8WDX7tA3V5RAraTtzT7dun2wdQWvWxsxnwYS",
  "key16": "wrYXUeRBVBxz84WivRWL2c3ohixyUC7ZbCJ2NmectwyZnGwmA6TE9SH2HTLRbFBzSx8dkof8FBSE5agifUWAtJw",
  "key17": "348uqA5BdZ6TUdseqpX7ru7Lg6bjAx5bwEx32vNcsQgYW4oZwGhRWbBx1jquJarQdSPxQgy4BALCV5MnCxp5KdaU",
  "key18": "31oyAueNrUgJ3YdZfTJ454X3hK5qQcVXd6AgnJtjHq3gaKpwzZVtipgG6zbBaz9ZYFAj9bpVDzR2BntqvhuNCG7x",
  "key19": "3tFUARw9gXoYkZUYQaSq8A4j11TqAcL8dsDbSYEU1ReC99GFP83z4v6Jsoj7Z1WYsnKP8c2zRLyr66bZtF8Ca7is",
  "key20": "5tcpv5QoQa7yq4J5Rf6bouHZPkdw4sb3sPFsJWfSDmD1AcqrcA9LL4SnhLa5aLpwcY9Xw6DMQqDj74ew4QPpDmpW",
  "key21": "5FJCVMWAcEqJu8dzLoGuC1anCPUYoedLiRuwv2ev2geLw5ubNY83kJGJXpuXRNzKsJUnoRsPgeeJozSxHAuxtQF1",
  "key22": "5nZDjCidQ9uyfiTzb4adHcgTiw93sLtwMtN45qsATqHNedqe462HjLBS9BtKueS2Aqqe6fF4hUPCH5bYgdMvRWwJ",
  "key23": "2S7nVrzqmjWtwtwMQnurQ6eNjfj37YWw1cteA74dPUWWgZzzwNnYuVqfVgwDYLmUvXTqfLFwPXxinNfU3Tscnk1w",
  "key24": "WEzVVL3Fw42coPwBWVT9hZ1xsZHUxbqtF25Cnm3yS78LbuALub9FvSrhJYkQJyvf6wAb5DDv49ccgmeQotiYiwb",
  "key25": "eZ138JeZK6tAsoXXZdokZYh4aUAbWPmnFAoJ88g2NKPh5kNpExww5v1NWJqymBBWtRphJ6WJ3ES5MSX1jcHzxjR",
  "key26": "2iQu59QkiaFXue5FsSiVrVSD4ngksCCF5qiXsYNZn6CVEEA4rLBzesKoyUzdPmtzAUXGsSyyZZfPDvp6J291w5Bq",
  "key27": "3uVyrAyUS46uoTCQcviNW1khFBwQ4VSP2v1DG6vuj2BBrJNc2Juu6Sm7dyNg13YYZHP3mv8n4yQxo3ov33Z85gnn",
  "key28": "2NoU1JRSxFsNhWYjZ38cCJJaQZvML17C5ZttcL5RnGA9gTjDLujZ2Hy8HiVxH7axY57GZH8nd92uSDbRnxSdLs43",
  "key29": "7f6A9pWSP9HdmSvsxo9PGMVG4Fn7KHY1iCFL3vCa1fzcshfCQi2jBnaf35yCdx5vjbdrkqMBEf4uRwSYJGocZ2M",
  "key30": "5G2K9M48bC4G4Gw5skGPCJgNBwDELkMZsJodvcRvWxrXoEENwr8n3WVNDE68AWhiaQMcdqj78i1Fq3DnktBqZANp",
  "key31": "35gyh3jJAib5oVe6sDJNe441NyuDPnLAZ2dYjwhMdvM39zT4JEMTDRJ6opkVAkAJKaCBpHU4fa5rU2YDbwaLikf1",
  "key32": "58uCiA9hW6Fn2D2LyxqxXpPzS2vtUYCYsF2wb2c1tgwDXjoSj32ma9zxDr3KrzazQaj5AXQFd8GFxpwBUS3wnvrP",
  "key33": "5JYC6dF61GQdXsR3okdJoGeSGWyKJoYq4sGqcCFH52eWpHtfGcgQyEVd9imeEWJqDev5LUeGt9TVqtq8z6k8gvvC",
  "key34": "xvSbsQwhyz4EyhB4EWmoFKwVhT7ANemqxyRQxdsNxj5dK276fa5mQCULpM5S5f48Skcg9ZCwxxaosabGRbSYD6R",
  "key35": "4TvCBnZZRmUKJAWBiNJ3gARxhZyo59Fcb9pAJcYfHoi1gj265fMXTFLwJQv2KDNkhSduVdJxsb3hjFDDTkVwKztN",
  "key36": "VwXim8BL7dDaAKk1VonQCbqvjoW6buzNSWtJYN5yZBCjGEoiYpVb4FdfnhBiJ924nvRpsa79xfdiCsHuTjcyYr7",
  "key37": "3fF8p6atP7ymqCXcLucHddaUKQAyQAZvHfr459heb8kXzTeXDj61P1N7CQdndmtATWd7y3USkdjZPg9tRhCnFWcV",
  "key38": "3jkCNY9guLK4q7G5gmVkfAczMhUeew2FWsMHuGfdyJUFMgUGpx7QeUznEcQgnuXsPKGNo83xxwqFtTYsTDDh8bci"
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
