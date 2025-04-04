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
    "24Bnsb6edJ4gVhUdqaHh2k1KFNfqW1JTaP3BbPocUuySo7VWNJUVh4CaMGeu1xgyhSrErUGTwwS6XtHDx8GeRwpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JuKwKuLXDP9C2zfNihE3sNWHwvPNM28YopaFtdaimFs5ZkNRcBKmPrwVZ44ebKRYoQ7qeTosCTivbpEqvhZc4ad",
  "key1": "3jnPRMxqte27ok1CHyYGvSu1Rrfeiz5u3eYQ1Bsi9gfnQhA3VZuiYYEqVyofBYCwkoSzB39NcxBYYnencPwhdpkg",
  "key2": "35E1oUWZ5XTjdkch2DVhNFiKW28UTyPYbzuE2h5d3GCcCvsao1MB5vUgn5zK6984pesW1DN3eVXRiFL51LeXYWS2",
  "key3": "5s2pWnEWpLLWo8jrPdpt7aV2QdizZ9kkzc8WhHWVEoZsChEPTxqcpuwECPJqS9UBBSgGpEhExMwasB5ZdFx7LKxd",
  "key4": "GqfQRUkPExHdJq3P4tQpnLVpQAaF4zKVw9joAf1i19ZndpCcuaHiq38VrALd8JvqCdEtaLvea4jf1uRLGMgRNRQ",
  "key5": "3QnJoMdzMUqsuD1oaeEYWnniSnrBjHiz1c6GKFzujjuFkr7aTAdzTyokHRTGar685pDYhDHJKYoE3StqrrkfPrzo",
  "key6": "5U555eTNU1bruHPcu4RCBtdLoDUuH6ND24nhwe9JwLpLKLbVPgJ4m3kwhnRWkWhvZwRMVf9YNN2huwHQzP5owj79",
  "key7": "2kssBNdqgMPBogiHgw5nFe1txyT8MmDMLNe35UqqA1EEWcLJRG8S81ar6E5y3rrGoBMo8SEATpseDhm5v1gtDUxC",
  "key8": "ogTmFWjhV1zMyTWnV2M3Zq9CY1AVgkQhw2qsbuXbNaM2HHpa1hJwGHLZEtQLTFd4jeKZRcF6SEn7fe1y3rTRrqh",
  "key9": "63QPLb7zDiT68rtSiMYHBNNEPM2rb8B7sAyeHiiKJmhfcaq2UvRZV16yTezYK15tkotJUoKiBMeUoGZvme64WLuF",
  "key10": "bokv5UFLacNCtWkJh8thPirPshztLk5QURXENHiwrQXMH7wvBJ8L7fydHGPPhzdtyxb1LDBqcVKk5UZmkz5QY1F",
  "key11": "4Ro3Y7Fn7JrjCnjrUmmHAKzSJRug6RthgYDQQhC8QbZou1PY4Ra5ZV1qcE18MzD5EC6C4E6qpUTtFAsGNA6MCD8i",
  "key12": "3b1WEEZ1zz3unMQcCAUr1fW2881B8YgeKuV7GfJ8mKfd1C5Uetb7mN4n9tiEjy3ncmZgjHy93qoFkUsoYboGJADx",
  "key13": "fcYBZa6D6Syh9tP9KVUApCXupsxwhJmtSRKAo9pWxdHa6ixXPnxWgUHwZE67f3LacW6zdaUQigVWYSqg1erqwQn",
  "key14": "2TLoVYP7DoSqGsu8X3mdcTLxdBEbCHw3WyJLvLj3w9dx2VfyKy49GBHK8hGQ6bk6HVZ5nc81dqHFCDJMRdkW2iJi",
  "key15": "3gpturMgsYCvgWU3GxJrzcwgQZT52zvGQfuEUzg2JrbBU2AZWgK3YweJ2bd2Wtu9RKHBLpy5dzxJgi2vz2T7TGn7",
  "key16": "4zLnkBPiBrygDGmUHYDFoZ3B8c7r7ztXetWycUMHV4NkddE3tNMjXHEuSeWqNVCgSanrwaZUoVr7ytP2fJgFV38",
  "key17": "QmEQr7kPg81iPGDfwYhEYWqrFpyTJbH7QwiNP1dupUmAb8jwhvXyRSCVB2W9uwtx69WKeFc22Scy5En9bvYHdCU",
  "key18": "5FKuLUzZYPFxSdiRF3eAj4RMjwHV5Cze3geknC7LhDdRi4numRhA9BqfQGwuACDsid4nvweRGkCoKio3LyKgLFUB",
  "key19": "27DZa1utyDkTurNdhekLYshCZL32UpqEjnLmwA9bZnnRMcADFrmnDeNNENvtNWDtc8N441ZC8aeBAUXEh8GCr9Ty",
  "key20": "5WkWCiRiYAvzGHUkhTN4prr2X61eXS9EVuMHEXMAqTWTU6DDNtLae9Gq1PBZDqfX2kSb9sfSnmdqvJNbAo3LQ7gx",
  "key21": "3H3L8Auh6kLjsph7HFpU2SZ69WSxNbw37u6EA2KA3PhjsuK66bJdAKReqe9ZBHdbzSxBbpTg67mM32JLxAVtGtMp",
  "key22": "2PtsAjfuY9x9gDMBm8ZwG5WGvvjgeH1xPuaPkJRVBGab2SB7rSVgHPH5vtePvo5zL4BbHRnMiUKttKggYbWknwtx",
  "key23": "NFsmhAfrZ1KrH8ckkzeJ31oxjdbg9C2w6hXsh9DPM3xnbjS6NZfVa1zyGN9HnmF9sA43PVrNbfUkXYrnXAbVXpV",
  "key24": "5Cbv5Lg8nbntoFZYFvtxBgANi659EpXoM24AHX8Mmv67WWTn6MbbJnDsSSDdFeRP7Yoxv92bdjiLVCi8zJnPq2YW",
  "key25": "U17eNLHoCxhFFALJosy2kSXR7JrGgPAsWkdZrWnK3qrLLDuFSeZUa29wX1ikiUgpR8SYgDbKhwERnUczRzrcpom",
  "key26": "5kZLngyeUpbNWd65xpNhkYoPWqWC1zhFApV8c9hix8DM6fnVSTfwxUdseAhDCW1R6B4rDmAPgwBtwhMknKr2HqE2",
  "key27": "4RZ4ygyNKyqTyjCpfkhyracPvj1sUYiuANTQCmiAAjkFyiLCvXtFbqR3x6CJcNsXwZwxBPXwBX9r6eVWQHDFWbUr",
  "key28": "5XApDMiVF4bS7nJj1JEVywHW7cLhCkqDdMgMDNVLZE3BgX41CK6eXrmTU1mB2nxNc8jRiko1uMdCQjKocnQSCeZc",
  "key29": "4B4LhjEwhWMZ6v3wtuyrH65gfxvLjpJ7EDKw6Xc8aVcqwYgmSPj6eo3hLJ7LHNWVk4bYRAbenKZ8ZD6pioRQ5adq",
  "key30": "2P1pzTT3nUUrmgkyrmVKUEsFrVALTXiJXiUTg1mSUUy2gQJCmruDSHmzWaiSfbpSkwJFygjtcPp94ePk4VB2YXUZ",
  "key31": "3AKcbEW43nX8PAZ4zBWQpfF5ctvUF6aMfF7jhXgRBPxFgkbUpKVSsZbE8YsopvLZD1EzuWg4TMJoEFbLBDn5Xm2a",
  "key32": "2TcAq3nfbwUNSfsGo6QmvhPGCj6fQyhvMFzhBdwoBgeREbs9AQV8bJvw1if9PZXQZRYwBKxk9vTLGdHufAB9ivMs",
  "key33": "2CXtmibEBb79FUs8ftuePawWiskgpLtdfdjMoL1n4wGBqxCXTyXyussUYXrWRHSJDZhS37t4yNQvw2qTRiHcHGG6",
  "key34": "sZ81yiH88PafgLgATiUaDRGkQMTLewoKJ3TvSjroqETxYBAHYvo9FJ1jNfLriNeP8RHbyMHB8DiMsKaBrnJaT6r",
  "key35": "2Dwi3TCbXfmM3wxBCdiLLiGYZYTKtsgX79yxYnCDUaqWqsJKqkpT3N9etykqr9vyix9ZernCX5xvXp9a3SYTK8it",
  "key36": "63T2os7eMo2Xcs2AcPoqGpM2djgMM8UanjfbotGAfuMcrAQZJqy2qf7GGuHJqmMeWBXtUiSNog2AmmKJgXVhTufz",
  "key37": "2nifZPV9sE7uRhYcMxrKq5yNydYR8d1CMKKpnqqHXvjgs2hyXWEK6VpmSD8gUU3j954CoaPyhRpokjtveTWp4Eze",
  "key38": "5FeBxknhXVD5kVXbDacquvr1phQmZQ4ajLQgBtxzmquAsztgzkqjSgrcv9SdYX87Xssh1pnwewieYn26r7FHwcfh",
  "key39": "3NVPziEbejVHp9F88WptHowdQNPkpP7GpMj9wXsszLxj6KipnVzkAip8uSPchm6EP1VAMNywoBizUHtzM3kC6G3z",
  "key40": "238jbdh22AUVj81ZD3ZmYp8mTuwM2nm56QB4iGfqa4yPHqq6zjriFZZF1mRNtJXB5Aivk72DrvaEQksJizwkcGic",
  "key41": "3MBEmV2dJRub5FstDcXUcDSDNJLPngqTCUTLniZ6f1vMAqwfzJUJb6AdDaJQYo4xYuNVEeAzjXuq4u4WvF3JWnHj",
  "key42": "4j1bt9LCNtY5TtpURCf3orErsxw7C9DUcWYT9n166K3bn2bQHYbn76go4AGVqmU6gLNcAgFyk8SWPVBs68tYqAUq",
  "key43": "2M5ShtZ3m9Mq41FiaYSPmKj5ThRRjeFFvd4W2eSG2LVzwVJdPen5KVJzKuiWyJDqzCHK6HMyCRp15fWR6p3vivp8"
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
