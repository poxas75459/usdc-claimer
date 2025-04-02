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
    "4wFBKiGvTQVHdTQynqaN8UbAQmi7P2DrTzG4GvJ9uR2yofXyc7yEgPSxLt67jWBGEXDTC22MXmtyJReknfG4JQfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SZ8nDkxYN5BAkbXRMWio6qk7fzNH4PRS6QXosGgYBHfR14Xdz9BPawXJ3fDJgvGoSxWoS8A2xC4AhhRiMYhdfRw",
  "key1": "33f6uU4dEw3VPYpkLG1eUW5JVvUZLzxXU7QUntkUdtxMStuHaHFxP4jpiygar1iiPppe3z5iLDWouicvH6yNFEcX",
  "key2": "3YuV6keRwGtbAwLCuDsL5EX6ZvgtCPejUDPASKbuJhQo6SrMDR8XncGeqge6zwcPEJoxJGL5YQXb18PWY4X3hJBs",
  "key3": "21a3KujKPmTvTP7SSwgDfpMfUK7K5ABvbVWGnmyMFZaYsNjhka2pkRHjCEX6WjARuEVpumuNvtZZeEbHRsYkGr8D",
  "key4": "29FNN3wFPRtsEE4q45FZbvsSu7xDtyRdDpLeMokmdynKUbvjH9F7qUHKhYUXFrTiDfxoioGAsuiJjG2ayfxA631b",
  "key5": "kFQqjLovpBq9L4S83kTpuXbtSHQ47QksGnSgiogHbqfzENfFhmxYcYy4BAQYxXRohnKsN8bsSJGQ8LQcQexfq5D",
  "key6": "2y1oKTHtsqBTFv1Sp5SKaL2YURBNvh2iqQbEtjx9nqy1kep767Qyhxg53wcguGHS2F8f68tqoVmGR3aNJKLCvmYY",
  "key7": "2tND1jEW13Es2GK7CJfr5fzCqVRae2vJGobHFaJYGSMjdAxKSBzEmxxjHXq9SrKX8UzZ7DF5MX8xztv2XTf4Mnyt",
  "key8": "28bKbZzjXaxCMSy5SMswpvo6pEsp8wjtszXMphCLDwUVuLprdq4EtYVYcA29bJhG3Dk7s66wfpmDXMC9nQxpjUse",
  "key9": "ZwbEB59cttyCthZ8cMSRmxJH36e6aiJnGCQdTy7uwqNLj2bLFWXftFMUuDyFQbW4dJNmxH1gzUcW3jX7kqyymsf",
  "key10": "3vMFKsjrNRsxktBTJBUWoNzj4P9PnUkLPwFtYNcDynbC1dXaXFBmXP436BKnK7ikYH1wTYFMeN8EZFKGqQP6ZbJF",
  "key11": "4kxBuobz47QLNuWBDgGuehG4zGRw7WNQed97HdtdrLFqHd5B6yT633XxjbMewqRNey3R5pxTSwsp9CADvQWtrmUH",
  "key12": "2Faqw6Wajr4f4ZSjkckxBKURzGHLGJPo5iBeogeLCSA4QnHBftMqBdU85jULTsn8necUHiihPAuuKEng1KviZ7Kt",
  "key13": "4s6a8csp9AR8KHN9ukXYQB3YKruGXKYVGDCF9AfU4CQ4bhjcvto9ibDa83sDMctVggJ97sCyiPxJKxE96CYxFzyX",
  "key14": "447FT9z9VFXBKAkCWg1fm4K8CNAdLja1DmEHqM9brZCycnF6KeiJ6BFJvBLV9tpHFw2TqXQ1WqrqjtXtaZRsh6QM",
  "key15": "621V3jdB1p5tQrj41noSKoL7MVn5WHH9LWyWBA7yDCwbNo7s7Yxqu4hMr3AKe1xXZAcDnZek2JghawYHfHNjMa52",
  "key16": "4DiUSPnBeqkM4Di6qy1zqDpsCKhE2zjCi8C8hDJ7hUjrBhKhHq98VSqShe3639mFfuZE3KNFeAJkAYYsdi2oR64D",
  "key17": "4iFHyoNNmo7yWanBKjRKeKESUZibyfK9aF5LDNL9pPkj3TDwdQanoPJG6s59dSTy8nSWJv5N1iTbptSnSwdp7QYN",
  "key18": "WBGJvLUAn8eKDQof51MhkVQGcRjWo3caT7HxzEUS9jRftCRmX5BoMW1TdsYubFZwc4RDGAZLybPMh7d2aQ5oKYt",
  "key19": "25Xh9a5NCMXwFRyMFxnnZZ6mTgjQ9jJtRU7d1mxLKP1aURj37GC6vQb5FDYJcEkPirJ1c5qDJ8qiZj8hDx9Asjsn",
  "key20": "cv58U8rhUxC9G99V3H7tjk1BN7wDL8Zi5Wa3hLc97uWBF3yCLbiVzS6uMaSAsnKo6YEzpfQWZWKHy7gpyTHvfGV",
  "key21": "36gh29U5ThPGyNyqGRd1LpbmMA97StLWMC9JLhgM92RbFYFnSUDVJuKLV4SfEdMRZUrvmRdwboUeZN916MKfa5zK",
  "key22": "66aaminZeVbNRbRMyjBGeTcYULdmovLv1Lgk1hPSEc9i7kDz6Z9tMBeX6on7XQ4J2eiH3P7T4mXN8hHo2yjYgH6L",
  "key23": "vxLKE5tFeyMij7mLH5nPuoBVMSuyL4CRM8yEm3HCVrMDmHbYcSwCJr5vw5JYh7qCoghSm8qaafEFSBGDmLNFix8",
  "key24": "reCu4LuCkSbnTdvsyJ6UGi9S5DjK8riffCWVMFxNC2NV3xh9FEfFCzFGZwL5yXk64BjDLzXN9rJMFWyCXLHfw79",
  "key25": "5VvqSjsRhYtY9zyfVeZej2Zw1wBvwPvtbD7TdsNMbGZZFo9vvVci65TCHqor1kyTis1hpHyc19WMrbEqeARpX45s",
  "key26": "oAGZXrHdXMzsFv3cvZAahrXKPcy9UhQGp1Au6NkgcjTgWCV9o7u3vbzBwL6BJbJ52RgW6RDnM1zXXs3uupJc5P1",
  "key27": "266r3Pvda7M9PaxdtB91xqfJz2Xbp7kD4Nqok3Eqn73Lekkh5xQge1ycgEEqQ8eMQJrodiTqt2CbxPYfpE4pWwzz",
  "key28": "64nKWMt45Vixjs5KRsyfchfT7AwLg6xaav3ttFvUxekdmHtz9UAyvnRHoNSh58vn34gaxEvRfBcSw3wKdBroWP4",
  "key29": "3f4mmHzpzt46XCUHx78tAKSa5D8km7R6oWJjhnU2JvbcCLx4tBPYkMx4xiScAsfApYVMkkGvfJX1rMJvEUGQg9tC",
  "key30": "3n85wkeifVnPgJFEn8JTb8RXwvRX2xs7QMGrpiSnYgTmebcNT1sKKoDDgvBso6DCGdZfbJuojTzcPDHgz3e15A3M",
  "key31": "3QTzDVXHSib24jXQ8ZLjdadHeecWrQEhFodPGwyp4K1ZJirCyFcWNn3YCU9aPm3fQQNuvUtt64NuN5uSnrQKcrsi",
  "key32": "2GAqF7jKTa74cVFfXJQpjAUvzekLXNKe6LvrvAHgkkYPnMDUSwhr8XwVDcUMBMkedvoQYudXei8RHDPEW2KtTsit",
  "key33": "3aR1oq2WHwNwPNDxVao4CmokFNmqy9w1KDkmmfYeVqeuiM2DXA64wWWcT4rCgW1XU9E4aoUDNzp2ok3MNf9SYkYo",
  "key34": "3waCave8g6QHSBWcCpw892FNRJfP11C2Cmu4iRYUAeCUKpHvjaqeaTqjmGmU5JdZcbySe3r3o4GDLsG5gEuThr64",
  "key35": "3EcyuQMWizDhQzdKSTjsrJDsF51uoXkJZNv426mD1g4hfGPdB4NMvNXRSySEAXyhHEGP5B6RFguZ5zMafcXHZstz",
  "key36": "4rq2r6NemTmvpeHHW5ZhySS3uP6Pkusm2Jcakz5E8eMNEGmWozQfPu4zK2BhWW9KiQsqST7Asst6P33Xa8tgsRyE",
  "key37": "4v6H8JC7pRsLYHwiNhXibtae9kk7sxDruW1f2RdxfSDWwAsnaenuFMoCo41SfF2yRwhtXh3i9aJP2ruEbpkQ7UXB",
  "key38": "2WCuH1SRSYQ3HKc7PPfwTYNV6oDFnRJuC6ZsARResJQ3JqCqrLGEtLWUYAccL4ziJqpLR2eLfG5QNxne3gm59mjg",
  "key39": "5Jqux6zM1oqy7buwPEkfNbWEwsB63CNWbz8mFM22WPuZu1RLregwxw6Mc7WJaALrNbY8dD3Ba73vMisCc9ej6ZTd",
  "key40": "ZonQpubzrwTgfUjMNEz3XyGBXMEY5imhEQt8uosHfA3MdVU7uY8AKR9X44owng4YHUxP13Tghe3sXG4Un8SRNxx",
  "key41": "2MJCob7qWPbkcBiztuXL7NEgHuFBbm71kwwnCqWHUrvP4V5XLazevM5oLNm1woaXBRzNup7QkiNUcKA3FrJir5gA",
  "key42": "4yegSBv9tWDFVDrtnwznygnnimk5zEbcVYXYeaxYSLHaTZQRSN1W3ncJLtKyndbtW6b9BZrTKcjaPALBGJNXpx19",
  "key43": "3MdpoPJKEYKkY9pM7ks6pF35XAHSLAbTSU1oH13eBmYcRZKTGSa8LquA9KbBQXVCwyizFbpWDQjFKdVwDpvVDWmb",
  "key44": "5uyNtptgZvf4hw1WvaFi9kFAkaHmKEfuSsCaRxbzQgbTnZQfg5ko5UkHWFXE5K98ArAEHTQY2y9pxcWXrDN8CLQG",
  "key45": "FMYZMXEcWv33whkrAfspwMHb8CrrC4RBG8XPf7qhzrtQJwSzYj2gcALrGJ89kEATTncGePQD3MVbbhwdktNDt65",
  "key46": "4K53MAUK339n139eTVoJfQBs97UsZ2xhdcJB3D2AH1b4uGcEF7Z2veSxQZJ24ALbu1Wb49wrRZPpiG3vfh5vcNyR"
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
