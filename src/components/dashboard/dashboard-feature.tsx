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
    "5TSFKSdWGTgDsuxjPKqSG8mExXARDmArnstceyzTbQ1bHDdeTJ41nwqrMV5uVRcf1g5AeGyfwwN3nqd3KhkEpzEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhyL3x5kZ7KLyNMdDRwrHPswAYy3juqkS1eu1ame1msZi9N1saBkuBep9bh7AhAUhZ6k5VenZvHpwmdbNTgAaVV",
  "key1": "3Y2roMnXAwjfgHwXsR1uCqjpU6nsoQx7gH655qn62iR7VpPYbKJbrBCvfXRweMqWtNTcGkXqU2kfeBe67KiZgB3Y",
  "key2": "3iKKFx1vVEAYKNg81Lw84kJ3f3AoepLigT4JCwvvDDpQeAASG7vsUCk91gRDMyLeYy4YzoNP64Y4wSPFd8MtsBc5",
  "key3": "3PdVEXKsU3SpWxotcdRHziPXeUAFTDJeqUVhF9VE2EyTTSHAVKkKZ7L1rH3BGB3qvZ8GD5fsjb8hoKxcpn2KMf5v",
  "key4": "3etwV5i27ZkdHuPeAwkJdXv6uvNqm1PU4mtSeisr7RU5D6mM3k5m1nuEJJBhsokEudxVcVAzGkDfXhXdkuy66Rat",
  "key5": "4i1rw1B9WwoU59dQgH2Un2PVhWVm8ZcVQvy7bydMLTJpdDMzhc2aaAw4bweHHg9wcgZLQTHxAR219X3AqFg9Ysi7",
  "key6": "2ZytfVcZbArJvXzf5ErVpjYKA2ZEEbkP63Xp5yHeTC9XFQMtZzWLLGETXA1sevt8jC3tnziEyLXRBhQJzXd4ry9R",
  "key7": "2xnvQUUhTchZh984WfqMv9nk7gurSKLDu4yfWa82dTihK72QzGFzHpGsLcGS5AozBUdhFgk73qn4kMXVzMud8ZA7",
  "key8": "3nGEdM4GaAWB5UAqdweYtMygpaE17s834ogreqwfzxPJ7J7phbj2xEfwEuwSmYx1dAWTEiTC4wVU9dPHjFzmLaLe",
  "key9": "3zSfWurwYPYeLN2t6eC4rCfoFAndzqC57oVfsQMsQzDEZXjYaPMwmVV2td2MmXbb5Qq2tcdSjo5raSYht5mMPPgi",
  "key10": "355v5kdsKszqzAmCi79MChmZDeHPZ6b78prJ8YYaFhBB7DZTvwademFhXRdVRtqfEH5eSTpctnusqf1KXJUpFgsj",
  "key11": "58L5sg557mhofat8BuP4Dk95Xy5ekEQa479bhUUByfXq78Mui8DQJatVKDqpUPRrVqwzmtJJBkkMzDrqBmJCJaNx",
  "key12": "5tePBuw35HdE7AfMSfbW3zHW6jeUcYcqrqi2RX5iTBh1piVnmnQ45A6WYv41xoL3h1tu8QPCDTVJd9xgAMn3kHRW",
  "key13": "2wvmaYR27xmWW2DqgjEeZfsn9es4ncfURnLBmWBp2jDhcmZqGRXfzbbhQtsG9ssxLzf6GL3XGNzZxfnWPiwZQgND",
  "key14": "2iP6mGT1noqZExuUuDJVngF9JvG5cBBCBaskLb7pRSjpaWhQD8kiAbHZxJmaATL3DVDioNYZY7tBTbKmJnCGhazJ",
  "key15": "2iMiSYrbir3hnrKhWmLitzJTX75wpWmcCUCJ9z212eQHyBwrL3uNtTXLtH2t6BZ6LVmsqmwBKRzie74es2N2EQhG",
  "key16": "2yfPTdGon8azXHFjHNa2dWQ4qrC1Vn7KJ7nHKYzkLMxK5docqsZ9eGohZvvAJSZUj1hxEnEhC436Ttrpubm1TEws",
  "key17": "3W5caRkzcffiX57DmTeSum8XEvM6BBqy2uwrUZFW5U7wUWfnQoB33tDwvKqdunv8y9r1YDXNWCVgAjhhkrhhDaZj",
  "key18": "367XTcVp4bXCxeNYubawcoL6USwZeUf9rRvR24C927jWm92iS2qEdCpmgWVXxgiqKNamb5t7NWin77RPQnwyf5cf",
  "key19": "1xBBMbSZXMK7V5z3eNHsrH2YUgurtN4btGvW6MRBTA4CUKvsDKLJjFSBuv7BDoqAWuNvD9vZBt6sqeGbhbj7GJH",
  "key20": "44iH9buqjAqAxyLV4yF5veP3CA71qpBaGKvD4XgMctQb4wmj5FzsTZJFbbx4CP51wPbWx5ueexqUqcmDDTJazGhE",
  "key21": "3CxvAQsKzDuJT9wCfhJExZndiWDzirBigrcn7eKDspFFdLgzS73eMVff7EuPYR7AS78Bj3W9D9j64LmAo1fH5xXx",
  "key22": "5wabuYVFXxuUmTPyj8kEkZgqWJvwMYa284H5bZ3aGGvhuvnwsdFQvhA38k6ZeLtNoeV7kbAz3SHk9fL2dHto24kD",
  "key23": "4UjDB2VkDD5JCrHS6nUAMn3YHGyafYJMry42QFKZ3yyjJJXBjB3kA2oJa34nsHfT6dsRK1b8k9AXbc6vW4EdJiHD",
  "key24": "5XAhisdaTHtWLBaBECB5F8V1KYoCJVRWrbcs4P3zEVMqUywdfhxWAzbPy6RRP7UANHkhmnaidxksDXvq4TWPHnZG",
  "key25": "J9sXz1Ur3oPEpu4w7Z6gPpvT93p9DEdCyrZUdzMCsHmrP8vJF7B5eN8wZ9dabRR5u22DGtox5ss53fK3gbAmWxx",
  "key26": "ZivfRpyQvkYUAqCy9TP4DSd1BjsvmK1wiy2mSYVAXT54CzHTceR5kdezKBN4ve7wTrLqQXzWQCEYp7etbiHL9wM",
  "key27": "4wv2ii1q9xz4xcu5dBvAjkgy7SwhzbpGE1GD6TrGYtRwPAkEMFQqRPXHeqFhLUu2y3jbtWa7BpNJduN6afN65nk1",
  "key28": "2KVQEZEkjhFEkvKqHjhh5TUrGfz4Tw9n9w2webqgC9GtYwYZTGo6WQ2qYPMkdfk6SLJdEhSW4osLUbfjvmvnhXf6",
  "key29": "4ernP7Nco9bRuJ2XRPTRUGojvoXnSgCrnVCVQpFHojNrpuTXWw5EJDKNaH2mQtN8F3EgeGdzvkBhNHMKp1fGQFZY",
  "key30": "4mK57e3b8nhhZ2kZDqHKYpMT5PGXmDCBo9GQL7r2y5zCdSWdRMPtMWRzRSJ2x2VtmhqybnctNzq2ULcfikgtprJG",
  "key31": "5eYYMuux6Xya7KNFbfzT7u48N91sbmdcjG76YFGAtsi8GNwQW44neSGz6feqK4n9X4M3WGEDULDveyp85hagLZiM",
  "key32": "4X21e28oUivKHwbVhrpST8W7i2huafyXVRD42LchazLeJvP1LvZDHvoKCXGjXb6XtBx1sxvpJ7fTHVZz9r6b8nkX",
  "key33": "3Lkq7WnKZuAQgH6v6jTX6Gqnd9uRBoi54TR8gysSAYfdTELm3ZksjqNLR6TvVPtz9ioC4TnchtTxA6s2Nh86s5Bv",
  "key34": "3BjVi95iq7XiwnuBATSMV4PmVqvdWgfAPSVDcznhNpfjg47QLipXXpNrZDTuQwNYdQWfA29eBfjZAXUGCs3F5wuj",
  "key35": "62WZn1AH7qCYAw25FJQkAP3oJYqFtht1RLGZuSVMY94aQw8uurfiGT3perbJYtEWgnVbX1T3L1EDvjCK5QuNLAmf",
  "key36": "9Jno7fRsHpwhoTaP8iQovqb7DU4HsvpN3dw1Ldv2NntsqubMntk7gL3GfWQSWiLohw6jNWfdycBTkhpHWMhpnoB",
  "key37": "3KzQsa93MS9vTWfAw538ZgZyJZdy8w2uo8JgGbdsW4DrJChsX5vsCXmzYsLPT7shz6eFm5YvJtWW5YvGFHzC9Phe",
  "key38": "2omQaqLPf9fDCSzzTzsGPccLAiYoRsRCWdD6e777dMYxjFxzfEJ7XzSxcSEHUa5R38pwMRFdWiBE8GYc9APYrZUa",
  "key39": "4fFfKpAGvwajkXhE2aPjJwcvLdbS18bKwqzkkN758jGSLVXjyorjS9pE9TH5dKAJys6kxW1nQ53tJ2rMPwkiu2DD",
  "key40": "3MeGuqueXNRJd5GhezJLLdPgANwXhBGKzXaYtFLTWmiMDcbByRazdFHqJ7UMEAE7Fo5Ee4UvBWeeEheZRGkt9Ehv",
  "key41": "3ra3hMrctphdAT5zHU64rxDKNzoy8JmSr356RVmvwR5yRoj7sPakrrr8p6ShM4znNxAn3pD6p4s6SxM5j3t2uyaQ",
  "key42": "28XkDxRcx8SkEN2Xxs2r8H6T3xSWbk55NCTqeNUa1qT8eh5r6jQo5LsdH6K6XaSrwn9FLKwFB3edPXxf8gRc7V8N",
  "key43": "2v4xJdVgDHj6Kd1eSbA5RR5K8dJ64MJyn6Lyo1NJTZ9UkRtJPmufeeJHLeeKhNFgBVzhyUhqmEL2xonp5zbEKEPs",
  "key44": "ebiW4KSDoXQCv765mdDzZf2QcS885aZEmz6Gnoty6mo2dWi7adc3W5epVjetKdC4dd7bCYKNm9wAKEMLVawaArE",
  "key45": "5vyNoD6P6oAtbigxQzhgoETWFDNsfnpS1pagqqGi5Uy8d9LGreKnAAfbaJsfte1Dnyhan83whWfTMUWSqSdEc4Xz",
  "key46": "5ZEQogDfoMphZ9V18KSe936akzViokhXEhEabTHSCobuCt5qCRJr1kQjqAXL4ZAmEPBG6TUeVY2NqxYzqd6uQEzY",
  "key47": "bErV22fZZjRyRr32cDa51boRh1HyH1d2oAUxABEZ6DwsKTe3EqkmvbFVYiCpkwcwmu4EJ4YMwnLLhYm3Upk2GwJ",
  "key48": "1EHXJJ5PXnjZUJhPq9Mvtevf2e1RQnac2U6XqDFrSrNJYb25f1SsJH3MUVBDGsHtkYc6ahJqvumkaS3USgJ7snz",
  "key49": "55uCYEBiPMD4LEicHvMiC1cE8gXevte8z4C8bVLnwjduGWDDbeWb3tGnw4dCLxMuC7B8G8Qq36S8ELSdNGznbvWQ"
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
