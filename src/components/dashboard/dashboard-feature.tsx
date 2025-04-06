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
    "5ynFm9ByAxPdmWm4FkQb1hAcXCxZ8AVS8V5EUxTX69P5qowqH7euRLdHTV2vn8XXU2VSif1kKKhNy1dTQrqKZEND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQx8LjwsmPWtERjzx4t2rCPnhV3r7n9zfMWsSGkcB7KEmE6H6CLecRGC6tGC7Bq1Ho4f6snYQUm7brfXfSG7dDQ",
  "key1": "3gNtsvz5r5fxmyJUacuCXZLcsfnpTTaybe7UqzV16sHXezTzo4yyJsuHseAKazyAhtULK7Ehkq61a9BvKpsAk25B",
  "key2": "3VfoGYHfrqMXqYLMKeFU2zBUxeWnM7k4AfXQRr8afUNj6BswZ2aACmTjBRoJ6u8NGu9nq2g1V5ADUCX6qapRg5HA",
  "key3": "oknXXCn3JJFMQhE2sa6bRCmna6KxTTjoU5xBmncH1S39Pn7sRxH2cGgnVYu2SYrippiyNhy8pPSeiyM1xj6QLyS",
  "key4": "L5BuMtB8EnPrsauW3i1QsRG14TgNxxjCGf7zVgABKWU693N8cWACURYay64hnQBTfj3h92MF839GQAQYd2NFqga",
  "key5": "4jT31CyTP8ZE6zTTqXxWonLzFwEsyfPCMJYMasxUUJqsCPk67kShMHqTsMKAGCRtawWem6w9mrUbrQG1LzGc3pdn",
  "key6": "CTRKUYr8eRe14ZWm122mZJT4hJ5EPiqgzYKdLZoYMd3tnopnsCE64N7E6c1HoXpP8chEexNWy4qSujcZAcsjLpm",
  "key7": "2u1JY7NmjCg9h71392NWDsbboGSzFN3944ienEJcr2KTwD45qyQtRVCiR2uqMwBtUdpLgA2A4Pzjbyf58GvTTYx9",
  "key8": "38XAsDkfLV2RaCavCb22X2Vw6TAfdBKELsfDT1H3oihE1dMexhMrsEWQNvSdsb1giV3sf5orwjnbGCPDMzkxzTSG",
  "key9": "2ShuuvK18ifLRQCKehW3M3pjvYFZ7xb9uZS1Zend8wySgqeifA99WQufpi24byMZ2oUr178nMy4yQt69Cd2oVkci",
  "key10": "2mNuvokcDVJnkBnC7ufC3kTJme9YgjDNBz97iDPv4ShhS2VKyK861KugQauBUWGGKyFhXAQv6FNbkHzQ9niJs3XL",
  "key11": "5sgGmvcaYkobPNCnrVvgT556FR2kAjzKvyZawSnEEnjC2h3Mc5D9h6Skm3KXFjNyh2vinchCdGqZxPqp3D5X5tvG",
  "key12": "54oUU3YNiJYGHVs5XHnn8Qy4ADSMzFYfJuFDMxATkA6wJAMU2jWsiMaT2fCZsyCYqWnmLgMZSKp5YVg35fccCpJx",
  "key13": "2H3t7ywJSb8vb8t2rEKdPtACdtpwBWg1aCjxPVMac6ybBvKppWWc38kB4z8LnT9PqS3AxsMoi57K5jmeXUP4NPhw",
  "key14": "4tMh7sheGWRqK2mTdFjiwCcbVpH5K63cdinRgGYMc19igvurxZSspesBEa5j9o2gxnDuqaJgNzmkJsaapUJabEhd",
  "key15": "4rRANAz11M7FyeKJa7FopZHpxch8yQhV2FdPJCrat1b48pnd5ofB3tQZhKdSgU8N8kaAZtARQNh3cxwD54vppYv6",
  "key16": "4t7qDgLs4zqhjcYYF3b3tX3iQ3TuioSeFxSBHDfq6MNsUPkDbSmpb7QpEuU5VA1LvWpq9TBGx2yEWn2PCk2zGo8T",
  "key17": "2hKiaLWXtkQaQMmk9zupndtXrPyJsD8sASMpni1ZprcnaBQuJcvzgqMyqhm7usGxBxjhfqqAAtXBDGDdqFVXAR21",
  "key18": "2bPTWo2h7JNBu5n6Yc5R6b4veESy77f382ys8n1BEzYcUcDjkV58r6NtGtw4TF74TYQukRGrnUUAH5JWs2EQtyeU",
  "key19": "2JsjnxHpbZyzDH7uPGXxtdZp1QjhKaQkYj2TwVtQ4D5VKH3jwUfD8wchYVpfKhyTHeQg34C3BUQf9eWNJccpPdkD",
  "key20": "2eNQZzQvsjncYmXeN9tGNjjxpWW5terJNoMusuUV3x1nc1HXRu4EBDiQkXG3S4R6dPjDR6NjPNc9PuR8J6nykksn",
  "key21": "2gyLadnAzbhNjCTLqYqdbDx5sEG2MBm5LbUHwchWkK6jpgQ5U668pSiAMZQRy1fTso96MpF1BtWA5cLRxzFTTncj",
  "key22": "3s877e9C82V8HvByY8veh5dtfnB2vweRzsUdzRF1FPyDxNKnXM5nAabTSePWcxiBB8eGHGDWUhx62PccPbAdJRSE",
  "key23": "4HMhYVm9zKopVQkiLfiBgT4umrNwKtaGKicnUUsWWFV8TfADNUdcAxeSievC5GCUwAUrRbsvGV1wzBYivLvtHCaM",
  "key24": "489midDPQth6zNH9XJ6AsgCV45DGjrCaiTxxFxHzHASKQCTWkRPs4xZxdZQFQP7Tn34epCu5AVwhP1pMkS5J56gE",
  "key25": "4mbTGcUrF1SLFFUFLAYNLwhW4RB6M9r6j1ZAPnjZb5kqsYwF1SH7MLkzEgFoY9vjZEsAdwJnnxVLhnUsQVKXsfVB",
  "key26": "2PNQpGrLxyGuU8836Lh8SPF2QmzmnMYeoJFgdMyCHbpjni6QPnFURXS5PTWFGEbN3h5krKgxwHt6AxrwwXU7hY12",
  "key27": "V66cfddotAW48ng2A8twPS4JcCna8LqQiY4KS9XEhtistvxpkHj98mFjeSEqBsgKwusCDXqPigLHhC8668Q471D",
  "key28": "2KzsKuRQ51FGFMRHDnCG4cvbZcXGmjm1s91UqyvnPvEJYhro5DuKaHpftJ3AHk7YTjYvqfujnp6VRomn8FtgMbga",
  "key29": "2u6Vun7emF6FnonGv6qynejhgYZDCZ8GPmnzM9r2xy7AyUXQCCNWoeMYRYzto6uyDUtQWAfp7GGrcc5u3ET16eJk",
  "key30": "33sFoDhYH2dUogx7ShVvHv91RA7XfC91DuTZuqVwiohui4XG63AE4dBrTJA9Pd57QnMNhrUs2B3We6cixmBr1Sbv",
  "key31": "39M55JYuRVCUbdDHhiod4pHMgRi7quJ8CuqQBDv32ZqSFaNgtz52QHDH7QdsK1QKmSnGncy5hy3FyK869jdiwBYo",
  "key32": "5CQQhoJzBxowodpF8RBZYeus8W56VJy8JFopqd9saTYXujDfwkQVsCoHWESwrcgAYtqarHzixhVUTkRbNGooqgRN",
  "key33": "4cKd9BtcDwyVa8mdXva3r7iSz14g7Ghq88UthAZQCMo1hSTyUbHZD5GpibvJ1r2WX9vuAeDt8UzpeXx9p6yvP6Xi",
  "key34": "3o8uWC7rLYvSWyNN33Sgw5q4KVgjSQZwx5qEnJkUdsM6DmqZtbPTHNXvHN4HtPSaDiy6SJwQPhbKAX6UyZtP9vAi",
  "key35": "4UnRDG56mfo93Vse4aLR46DKdzSrymVVUECht4nAGQRk3Aqu4NtS14S87A8iia5wKtDwPJu61VQtwDqrtoN33TXA",
  "key36": "XTgNfBmE8YMNwRumHXk8qE4rKCAq1h48nqBJrwghLbJLPB5vvyqkRLNtHfBHvmhz25x9GNRLGvvHCPzCmTtNtyW",
  "key37": "5BHaTqcQ7fDRp4avQ4WLRxbpgVo4c9NWPAF59aMAg7yxvb9AF5Xjz3yEFV2YYnes4DmCz4PVmWTRqWXAPhpvAb8r",
  "key38": "3aAfLEUjgHaxC7ZGWREHgrBGc6PQ7mohjwGK9zZdkFRnZZ8KabKNvjhpQvMjkAN6ofxBL5ugaTfXJV3hhGcuWWiP",
  "key39": "5VwLEGfMvq4TH5geKBW6Sej4FffHPj5NfReNmrBbFLobUBJUM5GzBDoscWBxpPbjN8E1WR2kREQTGP1RhG1juWxo",
  "key40": "KyHXWx8cWUrWxhB16i1VnzkgN5czWbkcqVKCUUGhFnSWbcVW3vVmBXdZaqwMjFyxQk7uE6DYJcjFmWbmhKu6TUm",
  "key41": "4V8xHAuQ1MYzTZcWwB8yDdNrDq9GcLeRpYHUD8eB11SBDf8MqN9q7EGYJg4EtVzaXtWteaw9LvEEsRxcMDyKLsc6"
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
