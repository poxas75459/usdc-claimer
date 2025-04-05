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
    "2kTubULq2MDb7vfJGRoaFFLTHHukHjmggf6rrNNUqRvjz8iDYx8mThpx95RaecXVvdoBsbV8dRc5aWJM2uytLxMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t79hDVV7QVTeLBRdsvXSHXb3rQPnBcdKKLcnFZjWXU8DxdMEkb6Jg36GJ6NPKYcGzmhcMCyJUeujeEKQFNXFBVd",
  "key1": "KWKpvPByKCyvrcdGqcC5P1rRo3eSyfHQhVU4vUubbXXkExUNvP3ePWDv9iCkDHE7AQrt3vF4vFsVEpC2DpQg6Br",
  "key2": "4mJW6ooQ2sWo3FCoY5g1rHeBwQf6ApULXXYbu5PvyxQEz6xtqQaDFEX35AzSxZRd4dKp8uZg3dnQjzCrwFbH9UAJ",
  "key3": "2jtf234iNUajRCsV9AkNB91ehQkqkWxCEiHJ3kJkCp2fNUgNHVtPVcnx2HhYeDg4p68qKKZV9TYntjc4rA3bkAWi",
  "key4": "3VJSGfDY6t1UuJayp36ZasZWHKzc7tKF9TTuBXenksiFhyMnKoFM2r54wwrHx2VnNFr2TUCKiScKwtvEbDgbQezA",
  "key5": "4XdNithfwNQpGx1xnZZ2CZFArRW5edBHFLLKXJarQQ112eVr6xbFnmwb6MtPe7r1BXyuoohA7nLSmioegtwWdTiB",
  "key6": "2TYd4Y3r8SqtDdbZH4zH1Syiu6MFVxaiMonUWd9sHv7JHfoXVTdbWSi43MAJkLWZLuFcfzFAjHVFbhWD16K5s1oL",
  "key7": "28PRN15DYWW4BgeKrQ334kE8pbJXpXy8n4gUtyroR5zy72RXS3ocfgqMFhUt9p4kfLjjyeESAj4uqTLeTrkHMUU6",
  "key8": "3U3gin3gDAYx4hbgkrbzYheLz796K84sExnQfu9oHji3CMPmLfuMZKKPg4kvZfjb5gyH8Zk8gC7EQKQ1J5iReCfH",
  "key9": "3FvR5Jy7N1jZHj3ZEHmD6Cn3fJtWfU8zuvF52nThrDrzWVe7ST4EgNNKjZ8Z8HqiscjRaXURz29gB1Ghm9oHXz1f",
  "key10": "3Qy5qbFZorBoakGd5Mm7kgZiFQxjZBC4r5cMtgxLrBR3FDdjHDH1y3QWmwTdoLAPjSg2GAde7jG7vigZDTJA3CvZ",
  "key11": "3QCKQxMhpDyWsNGuWnWugXggvu7R8jaXhXrNQqpamzjaB57auzXxosnmzWYvCbGXZmjrK246y1zyGr3AiE3sRkib",
  "key12": "2Eycs9aiMYXnpPPMdpyuefPhkKUkECor5Kzjg7wgmQsZJa3EcYYaz1rcG879un4ky4uQLozNX3AaKjoVEcxkyhcb",
  "key13": "NVRTTGC933w6jUcXgATeCehn89Zd1RegH6C6xHRLxByHG6dPjtg3sgJWpzkvo8HZuNjSMkpGiHN9h9kksECMKfa",
  "key14": "46kcDonv6PjWB9BkNJdjJzhr8yPxSnvvmJt6MMmsY4kaaXdA7ezHZNANHzWg6GTvGcynTvVBGu8y7pwiT1dnGndj",
  "key15": "2USP3M1JiKGoajTrMyxHtCBHmq7q4EM331oDdJNEMWd77jtqTqdqP8BYiWJRV2rytcEqg1F8mssKsoPVb22KiJkb",
  "key16": "RvnG6f3ody1dekTd43ws86R1SeNQatgEh4RQjdTWYaaBBDBaRLtcGeVv1v8ntVtDNU6tWvSDVvr8C4KdbsnZbjM",
  "key17": "5FZ7vo4ybwi7Uat25FaE86NFUqqLrEVKDQp74VNkGTmNSEyV6AgPWNFpV8aR2APfAk7cKL3u6xEGC6JA4RRtViau",
  "key18": "5znModUZUgxikHrUFDUuy7ANESwNM6ez8KBwSxyWPNKQrsyoiN4CMvbN8KWa1yU4mDHyEhKZmTJge9SVdM1YFbzz",
  "key19": "NG7yLa3FDnrrE9v484RNwV3Kmed1xP4Kdzgo6KkjzJynnqVnmGAzPWR27wy5en2hLBfCMpnoDvVqP5Cci6f1xEP",
  "key20": "4LJZcnZJwEm5EzyYG9iLUFnmYf54cgUsiWukrT63fbnBUKKeFGKR9EtsXGjmiizEu4p3seQqjTs4mZs9jorTx7U4",
  "key21": "2eD7Z7yJrJF8mj28avijiUQHA6pRK2e5beBycxtLC1MRv1j7MRfFZTMPgVpgHQdjRxWudvG5xfQmCuzkBh9bfL5X",
  "key22": "2zTWb18TVuVmfXM5PuNcbLJ7zRM7SR6rYWyKczmxF2yqAJkYwWDmyH7N6RbHbRTufTUpqCVobXmj9rM5b4wTTkT2",
  "key23": "4BLQyxWRmv5TJQ6gi1CbCeqLsfc4nhtaUMeqs38qeWzJpMNEuzMDLbT2BNFYjzc5J6mLFQWRozVfyp3buXvvfdxQ",
  "key24": "3gqjP9outW3LwsKpF8pbCvMsCWsP3kpU758epAWRfrwUfBY1VECLJCV8Ggoxzax5FpdxTarNqok2vekfy61yjAEH",
  "key25": "3hWyrTdv37vawyXj4EZoNieNZ1AoCmQX6RfH2YtKzGbPWrHw8NMtrdxMQ6G1vvV2zfEAUbt4c9XscHcnVsQ3pkUW",
  "key26": "2mW9hM9bsG1P5TpciLgrePdXQTVCcDxQoeDpTRxZAN5Wx2Upq2NfeSsMLvq6MkbHq8f9pXdFmaj1NexYrQ41wtRK",
  "key27": "4LP7MfWeJyrYmz6e619NbsBW7YfMHfgUpsg9jiX9Nw7XLnm3MBuvyKhMMSgyP1TNuStCWxxQad8d4AUq2x1Yxdfd",
  "key28": "2VK2ckcxEJsP5DbruPCq4FuiWXZFkiQAMjVPtPBZxcy7esjAbZ26vW4tBp1LNjRnwMGzVsLNGDXTZg5ANNkqWojP",
  "key29": "2eztZ2uxhCC2jPGQPwB55WMJCK7eQCYmdmRRW4xX6gSi3mb9rwWbCGdEAmre1FBZDWkgVndRXqGNKnAfsQZw8Uqw",
  "key30": "2cm7XGGZjHCNcH6zAks8LPdgybh7Lm3RzJbmVpHMaLiFdszMUyUHeTYXig7hvNn9vZKjhu5ejEnpHoSUPA8yQrKt",
  "key31": "3cA39jKq3faWL4wJ8v3ahXYvdEF4F2L9SAZVU2C6vQ8mxAwmdwzkjJFv84i2KtvcVdRwoVPaUCWTPPySc9qbU8vH",
  "key32": "4FKDiG15xPw3TY4eeRPh9tVYiK8ShxcvARdjrB8STnhe15CtsujVMChLNL3JjVYDfxPzqg1S2d3tpzKKZZoNf3K7",
  "key33": "5WfhyA6uMtis55s59ywDRt96dc576ejmt8ZBvLZdHX4xqxKDNqgzfZJTYPHTFskudALpR6XxnaNQzaoP1BaNCiC5",
  "key34": "2zGAzTQxQs3J4VhhF6gXReNfgNt3PdHpgfZtPEfQxteSphyhDcvAPJ19F3wzkNKycEmXvF62sYq2FJJaDsCbM8Bd",
  "key35": "Nm2uAUsQr1EZ3aa9VtdvrMHVpTU1yFkM5RBaYaaE14H8f9gXxQWJE4368LX4r9hNwve3mfHpx5mz7ZutXhdXV1K",
  "key36": "61yuvrS7yfAKvJfZLNyDE1qeM1J3k8etJ7mdZQ9cUsvVgFvrUyZbhp4c7QmcM6kxuN16AfDMRDMrTxNJaGo98o5T",
  "key37": "3BXQMAT2s6oQgXXqphtqk5qEsqcf47f3hew7WwZj5rwwRzErWz4T4mXAKSUC42RPaCRqk124ZZmVxBpufhdub9gV"
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
