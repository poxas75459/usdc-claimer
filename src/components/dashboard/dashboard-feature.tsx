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
    "4VcAmXDzj3VenqyuC5QhfE4xFFKMwvL8EvQb4yPKXBVoLzQi79oYDRkaAoq13LLPD3keJAGDjcgts5ZTwuxkExRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkVRmR49YtquK3dWBCmtAkEb7roZPBUKvZR8sbZESfdnx8BgtkseSoqKhngu52F22XhRQEUnu9gCd8avZ3NyNjn",
  "key1": "5vNSio8Tf4F9jE5XSNHSfFexcsCpWy4v8QtHfDCmaaa8gqTyS6j7YtYhnDkCpxArcHmFxsPPDSuW64g9vfLRRYsP",
  "key2": "678E1Y6i3cH76VoxPcAnorVQEetEEJE76Hwz5s8VAQKTS8KLXt4viCNrZQ8GmVvbG44gn6MxLUR2JxDxvNpdTWeN",
  "key3": "46SWcBc2fCZ7J8YmdLKLtXBAko4wTAY2JRSTNXRPxFyz978vFSDCjYjBDx9Xqt84Eb83cQibgGh2wJvE4NorMaQg",
  "key4": "2UigSmiWs9cMjdoKDF2DUEH3JaJwADHNWfa313oy79ZfVsX7ULzbFPiu21BRhrzJBSwe5x5n7SvAhNE3hwyDa26f",
  "key5": "5qhdsahHbDL4odpiBZBf3TGpF7SqJNgH8Je18RCKihzzpwuwiuPnufMDyHBLitNeL4YqFYzcJ7crcmvdWRngCy1g",
  "key6": "2mguvYf7TULdFNQbviHuBggsZNCLs4u29XkJqYpMxauitx9e4xEorR6SZQWcW6oci6gwtiQnk5Lw9G98VDSxSmZD",
  "key7": "2e5YqrASSU8vFDYigHij7VDNHrCK1SCBf4YnZnz5tsxkeZ5TLPEZGZCXkHSgbdV76GNu8e7gczD5PsUeFBU1Ft5y",
  "key8": "4om1iZz3eqFT5Rkj12gzRV1DHVHSN2ia2WbfstAmwCtE8uT6G5mMxLAndH7tWKmH2WEuREHt6eysifWyxXBotyCP",
  "key9": "4x7VjXx89hSWsBm8iaGamvoPqdoY5JSKZ3kyezD1dCmPMQkAXSwuNW7SPYDcogehCUbuoYk7hNhUrt3ahwR74ocW",
  "key10": "dhw9byMCHQjgD2yq96r3uLY1HZ6GuG87UjaNzJ6WiWx2JFnPnRAMmNZkEcty9wXqqEqA67RrGFY94q1jdX4jm2A",
  "key11": "3XBXfX8DBmvGeqnJzLyP1sw16xGs9T33xVgUgijz7zkr6CQmb96GHWbo61TsfR9dQC2vVXM5iunegKrKMse3NEUa",
  "key12": "3BnPaSbwfAYVKmB7TPkMyFLR95RsTCWGVwkuv9VjtECpAKjYxb8iwXpgQpCN9danLtBn1NLBduWgwWcVrWjzMVTw",
  "key13": "4duadN1EwQmU6defzBUhkmT6LnNMAKraph5ucXEtUywWqtqt5oZAyJ8aBMB4XZ3ecQkd9ucQGyPSDNhkgtDR7AVD",
  "key14": "3f43r3WorWMv866WUvQ6HTocw1xepwmoEBm1WxwhFh2LSttAx43L2Zgvd7T2sA9EWBBitdsSpLUkxMcKcU2f4bws",
  "key15": "66RKZnxK6hBxHtPn8xjUzmoXQbooaAPFhx37w1Q6kg6VtS58EcBUsn8TJUP9HxBSRzVKGEnzzdk7CBEjnHkMpP4q",
  "key16": "5QLsZECefZm94NdpMNy3VFHvLr67isEEgRyYAT2tVDzVgb7hHUuXidBPEZ9cz32ZYr6UzZZh9nBfUY2JxA6HZGJS",
  "key17": "rAbRdtJr2QM7TC5X4DFvtstXeFdPr5bA6D92XEA3ys76vy236KrfoTZbSXYQtoDBiyyVcCkGJLGprjKMCDcmTEM",
  "key18": "4yJmgaf6u3UL61puXTfQQJLuwh7CZH3bUcVjb2xm6uEBqwmBM7XiSRuMdJdH7GiyMwkhHy5EmVbNxwRfhLjic13G",
  "key19": "4Xv58by3KQ6jK3kuJUJTU7RckSQEDa1NhZANWaqzxuGkrUQfkSuTHqMrgSE7ZYV5umd157xETscVEwurxTNR5nXM",
  "key20": "632aHJyG4LXEsBvk4psmP4hyU5J246ttco5PriHjvMYu1fUN7W57NXoDD4w5kxR7mhNLa9pYv86nV6vds7qtUMgR",
  "key21": "aBnvfbZUi9Pz2Fxa9ptQ5WXGSbFKXadWs4fVimNjQXXJtpAW77eRrkrNFrKjz3fPfJRUu7HPYUT7uzUDzL4S61o",
  "key22": "21cjCqAndGoY3Db34KcytwpetxhnhuQ6Rekcxtykue56YCyNgKp3QUXBvogHBkTUekKmvYEZJrJtzETqkD5JmWBo",
  "key23": "47sLfWFYX44vEbDZHLZMxMaERqLZdxXndQwZeyHPYmBf7aVuSTgChPAj1Hv6V58U5C7KXjxjhM8QWfQd3QMgbMEx",
  "key24": "8aioM5N6DE4MsGzNXJMbhKKFCeBV7qJFDbXJkANidkoWaGqeZKqUbYdEN8UyVd8wALjGtFM7jWZ8cQbAkPcWHMc",
  "key25": "2ooKqezmbT85jhVj85oqCY9x3pA7FRowsUP6DcuK8rga8DWVM72xfwJWTJwaNMpruPhJhYRUjW6bnjStsdbWMf3v",
  "key26": "5SjUZEBGKmsmg6i1aageXjk441AzamwPS6b15zaanYHHPCFkpE72JpfwGXuksXSWPGCMXo75xzKZMer6HJDP3ro7",
  "key27": "3fo7tEAQoT4nEjXABBF9Zs6bKNUDChNURL9j8BZoeYQ81wcN7ifc3C29sUauTA1JfXRnjismwQSnY1gSodLd51aa",
  "key28": "3Fxyo4QGdurBAWziPmFGj3t6KrfdH23tdZsmo5r5wvuWMc4DVkAW8jLNY6Tkvrmx3WTnLAzxjhHhpPMkQ8PuFAYV",
  "key29": "3cmxwYdfXvtGzCfBs2WaaBDN8bKESRoiiuotERq2Q5qJWS8m8AdLXEKGM3jgdMTXxRdft6w6zQ3Q89yVver7hVS",
  "key30": "p6b7qTiBQoJ4TLpcWtcExsdrqH2jD23NksZXRZcVpAMBaBLqENcUn8Ec2DQ6TXWMWqL6icTMFxFJtQMHD2p6aoq",
  "key31": "58Q8wFVbvsgR4RJpSfqHeavEnpC73LRnG8x6iqGU144Wd2fpZrqW9o67zQ6fypMRPM3VwbfGzPjVDQCqABn3GTuA",
  "key32": "2fsRXWd4vHiBmak6bFNdSVYaJjBoV2xhbM8VN9vwEy8QSUZMQ5pshsnA9BuXaBmJZpCZWHVLmHx8t1U8LX6zpJ2t",
  "key33": "ikfeuW2kYt1Wqpad2NqM8GMDh6MxqgkmjqjFSzp7ViPom5MNpjtX3EihcVADHEjUUGoo2a7nTAaYVyQudNDN4hE",
  "key34": "2JmXzEGaZSn3hbXiqpiqZb1BnKB8CiEf96TUyw6XpEJNeYFfe8qCA74Yoj2Symnw5T5Vm6wHjkJ39S9XdeFdbwPB",
  "key35": "ULkrJBvzadwLNNDmB1RBPtAhphDv5PtSvcPbBJfXoG2BCfTYkWRZbEYrwVhZ4SXQUgpX1q6BeWVNbQ3bL3hVmgL",
  "key36": "5jte74128JRH5ZvD1LaNSzeuLfhAFQnn6oFvvqoH66ctTYHtd4hjV8fDBHSgPizbZHJJzpCf78pq1E6czMMtXh3T",
  "key37": "9r9DV6QzXgf7UQ86Nmp4yJ187wybgpNh6nFVrmdwHh39PL8egP69heHZ5Cq6jyak7CZ3XQLNCAJNwPdSefBx5zC",
  "key38": "5ZiiA6vDyxdN37PKdjkMGLxe193VTiej9oHA9SGnEwVTvyiE2JwWp2RrgLBnfARpwFCrYPWdaVnXB4RvSPv1WJjb"
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
