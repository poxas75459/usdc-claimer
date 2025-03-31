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
    "4YJkbkgVhoJruieaUPgKNiCfDXr9TDhi3fkxtN9ZE9PcH2QnVBpUpaT4a1NxCF6TKJCjZRSm6nVtYmyoLvgGoHpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nTAoMjVsxetxWSJURCreT9TYPLhk5n7ptp35jmsVqCgncFqSwZCCSX2gK8MHtw8gaEvyx5XBMQQcN8BkJxUmWoz",
  "key1": "3Xsithdw12JCSic5D7eWki4Xo6yt5CAMwiEMpmnKnZLAKkNUvd32mAonWr9h7q8jz1UYv4RFGERWgpX4aHT5hMG",
  "key2": "5LnYo4KsX8A9TSkgkN1x2um7N7waiKyyLYYQxSbPQvBEFf3bTTa1yvSHpK6eNRBot5cLCwRmPaV9SqkbDjNuXK7e",
  "key3": "3sJqJMeMdUzrJjPcdAYkUsZf9DjeL26qVoGG46GmNGciDQJn3BgGchpz3u6nGNxP9BbDfvYVD8U8WTM6iyV5ocUu",
  "key4": "4XBwHgmAS1w3iG15JELNNeEpBfkcqWRBVtmV7ueZisVyYJUWY35aMeutR1vke6wH86JM8Hu7dSnpBLqj8k581qq8",
  "key5": "2heJCwn9Gg5ocYZgfqivFRmjmdhX1ex7VszzWpuVF3DfQsBL8WVMNUNmdn7jTfARJDqHQgqG55hywbTe98KB5AzR",
  "key6": "Y1to9Q84jr7rASmQd4NXXrKZYwDsb397dgk6P4w1ygXLUWDgsJA7XTwZqj2ZVuXuG71H3fnj7BtV521Tn9zudyp",
  "key7": "5erURBdXCE29soeJSpummKunzuydabZtiBMfMUezeo5e91zbhHJ2SqBvESvjaadPS4bRztp6FmUf5Ty1awwincCk",
  "key8": "33Tn234cu3NtAdzu1jTJRrArpajsSJ5iumcGv8qGFZ5PxufuSb4QjeBPs16KUTwshsprKhWjeDVZzE5T3TwEf5tp",
  "key9": "3XDgnP772wngETdEJPF57g7HQooUEbYNrLSeeYqnea9DMHqG2cqvV166YUVJTVbEyWEAcXH33mXFXuaHPL3hZn9Q",
  "key10": "8dTdcufJdbJRtHosNDuReTwAD7PiZq7XSzqffUbquLxAVafsP7DWHHU3PNdnJR2SXQjwpZZnL5ozHKfvXwSTYyq",
  "key11": "5kqUCJZWYhYzbcLfVYLntumckisebR3CTeUMy3vzqU5UL4gHptMjjTRw1wC5svCheZvukVgtLBQAFnhm995pbMVE",
  "key12": "3HQSLJQiCmYSAEaCA6Nei9XbKxnE8z4Se1FAfZG92tMhYF1UmeFCPQ45US36jDGWWorB8AqBYJndg8GMLpSbENYy",
  "key13": "5zudxZidXHedoWsoDag1A36SYP3Sstyd4nUvm8USroXpxLQN95AtaZ5S4TFJEyY84rX9rmGxYKAGhgLtp2mFbp8Y",
  "key14": "35XnoXceLbU6x8GMkfpXB5d1a4zzKdbiiEUxqoCTvBokJrDfLuwu5UJrDz6wneNf3ydADKoHrhHKJ1FZAZo6pU9Z",
  "key15": "4jiHjjBND79tRijb4myZ7R6FKpZmTHfSTF3mn4JPG5Y9aSY22jSRHLCk8jaQpL5qJHFLgHditRWhjTdnYcVPLt3V",
  "key16": "4QgCA8aqbFye58QzcFTbr8A8ZcUTyMi975iy15XyHYDiJEjZ2hS7vq4C1eAXjhfobac2hy7Qjw1Wv1iYgfcGvy5T",
  "key17": "emkTbKoPxqZ7VXX422nbTDeh8w6ZTNgB49mK6DkX1Yx65xaVcjh2G9ohLk61cSyQtrvPUnXiLXKnYxzMp8P6GKE",
  "key18": "3vWhuFCszCqw5dU7VHKuWumrr26UzkVS33xDr2eZUhvReuv2oD1UA22qXD5TKK7P5YZUSvPSUY6wVEavni8quwCZ",
  "key19": "5fMgnvVadegrG31Bec3LEwy8pcKbyMR9o4U6tL8ypKFCDkgwsZcaLXb5CQWzLYtB66MhwTvvZb63EYAc166Q7zpN",
  "key20": "5mchjfNn5uAnMPE2XuRJvrfZiqY5fbEYHNfwYEv32N2V9snEQ9QLSH312HWGXBRruzDRMvUosnQvzC3TTDMxuAYQ",
  "key21": "5mUyZKXNcHDKw6sDuy9ych7AnbHXEkpYJDzky7pd14y3UD3gz2z9FxB4nqhoDLHq4MZdYpQsizy1tzwzCRKwff4R",
  "key22": "2RimZYbP69aQq15wZoaz7DMfiuX8ireajGkDbXBrtzCoWPx8hh6KgvefiNaieXpMveJp1kmkwwY8TVuYVhbM3dSK",
  "key23": "qCFrD4QBTiuSVQAdfxQ1ZgwwAk8ZWqufYvKNA7DeseJ3j3VKVAPTYHM73XX6NhwE8jaJxMVoQAt6fXSpZWcnzB4",
  "key24": "2uz3Rgp3VeF6CXQkZvQacXVojLSiZz5c4BvemBqwxXgm7bfj6WGhUnd9KpRVWmuq9yKaCgEn2xHMK9ynm1H2MtP3",
  "key25": "2pzNyJdXnZSoUwr8ejji8Bqz54EmE7Fs2oDf9hseRMR9Cnd52zbBtnC7itEhCwkEz9ysg8H1Y4veyMbhVY498PKv",
  "key26": "3SS61Jc7Gdqo8eZqBnbiwujMLbbuU1jsGpGX8NBp9kHZbsAHGkwQB4WWRLFvLF3vFybKLyzJpJiVCEs3Pk9CuXVZ",
  "key27": "5gxJRApGDA4Bt1QL8XHjuTsUZFcWsuayJswsLV1pjMU4PgXir3Z9Z87jqoyg5JPfYSwTAPAnygzXGgBGZbSguVWJ",
  "key28": "oMRGUJV36k1P2y6RDVqAA9FGVg1EHrU9mKpMm7u4Zyx76KA42FFwHiRoKMrLyJEenjUL7ckgFej88gj1tRjLQA3",
  "key29": "8du8L8LwnSMpvteB6jxYjB7CLsyQqX4LDFk9syapftcHZEDKkFFXgnR2MsmQUs9sWiCmKic15sctEjWBav6JsMS",
  "key30": "4fFYs9AQjCUMAhR9nw3d95RMae9B2U4pxPY3HX5j1FLBfXyNTvQ1pyKoS17m92NWD7k5QWVpWRQgaHunQ9txjsYn",
  "key31": "2LKZRTsuDj5GrRPd9SBJPVFNt3MBDUVz6pVH2KoyGXzQQDfTb26Vj5z6GyJ61ihrdA8rZr869zkXFXTy6GxGRUXQ"
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
