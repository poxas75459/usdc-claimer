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
    "4x1Cu9mdxkNe8zQHYGWRu1hE5Be6rMdkJ9i5WiTz8Ka14Xvnj5jzWn395j5VMUjZ5QUzsJMVgPkEKMB4ToQ1iZMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMd2YfNM5MaqA1HM9VpaXSVEZCS4cb5TQmk8BLv5Tn4H1Z1u4umiA3WcnZruEcktxRnJbQgzAje9MdYTc7XhX3y",
  "key1": "4a5LpjWpiZiykba1ScZHBs1JG8CiSEuH1pEQW2QS92GLkcMAMzaJX5h7ZKTdUHsVSqHuVJFjXZyM9okV7oXD8efy",
  "key2": "QycdRFtCxP1rc3xSccWYy3XSGxdgBtBFxCTiioc1B5VgwFbdr7LqsMLDvWKEHbsxpYTejsrRHfyqdbZ3wNKQtMe",
  "key3": "4wwdqnFu6fLUbuTVHBUPDGnas8fckHXNDBuYWDXiSKWG2GAFYuYsLiir2gSTuKvvaZQ4BDnowmor843mBg9kSrZP",
  "key4": "uQym114NbKWD6fRGJwefpK3ryw4AmtAk9o8T5aDu6y2TQxBLcGQHYjbUQNR9TsmVV8QpfptCuCis73o9nHinyQE",
  "key5": "3rRCiiPJQWj2Sn1HWDR3BAi1rZY4V1cDnYMozEjUpaVETQnjNNvLTzmSu4ns9VVn911kz6yXcXDQHEWbPKMnPQq2",
  "key6": "52Hyu4zmfCSwvBxUMmwY1ESQaMkEzGpmzgt2m83o7tVkxJTaZqbcV9J6CMxvZS6ga5qVVc5XVLXPRxqeubarZxX9",
  "key7": "v4CRV941DyLH4f5EC91kEp9EzAndNUWMxLBYhHJWEKo2Zt3hm5rq9Lp3iJbmxoTyDTzz9nNmnmjzJMmmLnAemHD",
  "key8": "5Ucq7qYxa77gk4WidDpMkJgQv7AVmWzjTq3RyvhMHgMVRYGNPPTuNMLKbkPWG4aVeXRh8C1pcNoWhmWFQ1HWY4dS",
  "key9": "2UubY1dWiixMS74NzjQMDos2zp4HVkLYf1QNt91SWJcsYQmzXvCbq53mrDR8V7DeTxd77z19ykkNgWfTVUoDSW66",
  "key10": "5jVDLPnpe76cPSVEekciN6RHNuBiqMX5uUZmBjCzKcUA2Vz4sq9XgFHKK5sGDaMCvpLmPW1rsDkYi4kVMzjaN9qy",
  "key11": "53aXpjorvEzKseVX88KUfZN8mo7AjqvW6DRAUgbLftukGzcuE8qQU9en83GnUUJhjVYtzYcUSbAo7uYq1TMTvRJB",
  "key12": "3dPgiR85T6yTra7t1m6pCt1zvqM9GhcJfCJGRopiF1QNrcwtCP3pNdo86bkwhHYbkeCJ7SnvUgXiC8cXEwY9iuMb",
  "key13": "xXisJFmTu86jsgxPAx9opRPSXKd5ePk9G1Pe8bV7o1trRvBCWynWNqDy7VKrd5g4Qh7nhtACN4PtuNR9Wi8veEx",
  "key14": "49AJjo8wMZaTNKJFhCw4h9BucvYu9CZ3dbsLsn6XXrigiZK8bp68Ak3Gd4Uvx4Qc9wQHBGWaMT9X9NHXQ5G4YDX1",
  "key15": "5MtYS42rpNd2wXFgyvr7LXDj8qxZZiK2tBBQkuwHjS4ndkMyMnmDMQ56WT1tyFqoxmYeDFBPUGQnEXrMbS3TDeVG",
  "key16": "5c5jibRyup9kJm7PBY16Nwa1kZtXAjbk3v2W8RkTDb8n46r91tvsUg64dQWEb4wYihRt9kXwhtp9xXhVtbopytyc",
  "key17": "26bkBCrYXjNSG53zKsE6bPVGPBqxBHFHuXspp5PNuhUc6VL8VgUtgP25g89J8RWxRiRstJGGfdMTi1bgX7xxQKZk",
  "key18": "3DaFzqfXPWFN6cMqSa7z46DD9Pm7V35Fk3MHsBdFDhaw28ywMddMstaQuoALv5Dyv1ibQEJMh3a6hjoPQni1JiJ3",
  "key19": "5XUCKY5jZywmyj1wLzRkebaeEB9LV7HtmZcRtpntjtzF8AbMMrZEhqLCsgpbXFHRD4Yeu1jrsyhdLeELt79pJuMd",
  "key20": "2GP3NdUvmB2AcWpW4U3rZ41cMZHyxrGdoSmHd7eizvtDooS3u5sricYsKh1pruZMhnguEmQsH2VYpasy6JnXRo4Y",
  "key21": "5zro8TxyrhdkpaTvJRwuUXS5zMTaBJBTAcY12nsmQWHQcDrrJ79ZUNJPRYwzcRxi7yvTLgCk3zyGc3e1uBBSHqAL",
  "key22": "XcfJ1HuanQs8CBU7MFEWvHeHqyuYitjcg6rorSWLd9QNoMC23wwXPATBpcjfmC4QKauFyhBgkPdnbhoFfRskZD1",
  "key23": "4TWCsiDeAgWjyz6vtaBZsF4a9JVU2UQwzQPqHRvr7tjhKpSmdV8ocsSTMs45ZGNmwjYNTAMC6uckwQmV2VeEjMvU",
  "key24": "3wC37q8CPknrj82FAzmkxcH4CYoXGkjm5rfFgcEg4p3SwyMoivzWUfEXo2qdr4sNQvxZYwvxFRU3NpvRjA9L5Aoc",
  "key25": "36daqUncCgabWUSPfdWqynMhDcPeBeTaUBY6q6Mr5KpGJi5XoagY3BwuVotTa54fL1a78rLEHkjai5Wnkisyeore",
  "key26": "42op6uth66S9JFAS9yXWYdEthYkVep8uM8HtytF2LCKFF8X7JTAhVfPirH76bktWAyPvd3VMePnoZFBwytjjD5mx",
  "key27": "5HJ88rtGkrzvgcAvE4xHaP17SjbTmnmhYmszRkTb7fqBHFA6gsaMYg4WpBR1umDhmSitXGGJ4rUVWmBLK53eQZ3J",
  "key28": "ewAEWs7ezTRyAHJcGmjH2o7JesSQHvEu3HVr4nvRmtm8iiknEfQaM9DvjNMWpwrSDSYvM1ttSLkiEzYef1mjLRh",
  "key29": "4L2opjkxK1bsuf4XmW2wMUWmjbmV7wTd6NtqissmSqBBFfwRFzaWiBjxoSuZMDrghGzeoPKjjEBt51NPqNAEoqoK",
  "key30": "5KhzjC9W91kGbvVKcogJ1qgyCxEWPQ57Zb3p5tMAfJXyojRiXzJRt9zgKmnncWWdyN2fYKCxMN4Jxw9tWPAeEcJ",
  "key31": "4R571s4kS8eQCz1JqMZUM2ijthCwGPAnhnf77Ba8q6zgh289AdXvUiaDHPVwTz8X69n3mLe7hDipNq9DuHAiFhf1",
  "key32": "47FpXf3mru9Y2CsZ5RPgCPaR13sVKaa93kEDLM897cVRmqNWyZWMZPhh8nBh2QwpUitGSdrBL3CtxoqHB98GW1af",
  "key33": "4e7gYLXCJuGBC9jRrNdjAekoL6eQm8QtwG1rWagH3AciT7y3y5AhEYX76ZefVVLzWaDfv2p3fEpDgkGQvTPF8BpB",
  "key34": "2oedWMCjcfTRpG2snCkRqK6vaBBFTq9runYJQPY4BkhpTEr2duRtbqsjkB7T3QPYuHx2cNv39CFAzLA7UEeemJY4"
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
