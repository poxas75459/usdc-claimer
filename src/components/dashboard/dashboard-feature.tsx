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
    "QV7nsMZP1BPgXgKdaPW8qzAh3SdhfUCfv8UmPiCjjniCRdXeDpMZYVDDQrCzeq9N622KS9pJXQNXnkBsoM6pX4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rCbUdhP2FoYJ3aTsnW78LL32zGm1eqkoYSSRz99jjKzzzYQmhzRVA1TsA9gnMUbAENGJgS23cVpbXVbHxZVpTTx",
  "key1": "3RHZ37AwZCZgFYbMmMy4y8AcDb9xjoaLM9ATmjKxBjGRgsecvxb4iNSFw5TL9rQaM4cBPAojVJ6UKNFePYggQYj5",
  "key2": "mpJxHZxvxsf1nRCUW7HmvgAuCSSzsckj2Bx8WeihQzJJZbMskAZAsuiPdnSWAgkRdfoYC2iQoRDwsRKDn69V2qq",
  "key3": "47JY5hYQeGkUHzT1jQPHNPSLBW1ZZftEB9jbj2KXxytS8FqZfh8CasY2oH7oUxZWHV6SBcLy5F2QyERTht2Z1MuL",
  "key4": "3vWmU47VQ4bwWEjdDg1bKiYSgs2rCty5fHqub1Na7YHAUjDQCrwKFAdvhCstz21adGrCiTNhD6rZnjxE3e5oxtpC",
  "key5": "ovwkym2Jt5jVbXeYysGtM4AuyoWbWLhLLTBjBvNXdVE5s1TvGRDXNvMugvD9iF8v9n5ro3Q5SdcJaXes24d1fZB",
  "key6": "4kU1Dka7petmrwxoS5PzDnaQHzUagin9K4esDiZVQM9oVqNWPySgyB7grKSREzuqpvBJQrQfnEixDKoL2WwTRvhD",
  "key7": "2UyBdktrrp14BtH5RJJhqyQCAusjaZCQcvDGsavuubYLNEYRNiDkCrALka4rGzvU1UuZV11TgXgCuB2CcbXXXrou",
  "key8": "Xz7jNtqWnLaHkiurjoe8SgJrZc3sPYoXWvikWRdJ8juRDtTj4iru1S4HrZ6JyjC92sJkQczmDf8T5ERZkcmyX4P",
  "key9": "4yAJx5v3HRh7QVFYPpF6BYdN1snHkw16N6esUS4q9GpKqeghgK2ZKRLqL7cJ3gxsB2FaJ1AmF7ypMhHvCC5QCrY9",
  "key10": "2RnU5MWmkXGgvT32agtzJQYkUCt928RQFsrBYSxgZ5M8Qxu64BDxZ9D75ueTcYndAMu6VHeYLmVE8pVkagmUKk8U",
  "key11": "KmrGfdH7o9o7jVggJxmLVo8d6qbo8aCyp5mjzRDxF7S94SUF6e3TRa4tSSYwf77wPYALHh2o2Ba7xUi3SsDfUao",
  "key12": "3EpkHzK6eV58naigRFi8MYoj4QkwCe5PmhjzrKvvwjh5EUd9U3kdmuxLfSqcnZSJirSfojEYKztFDAsL2kGuBxFJ",
  "key13": "2WZxpR9pnhWX1YnTMuRrT9sq5Fsv9FkAheexB4btrJKw9i5CRPtnYzKWSY2XmSbC2SAnBADmDNWhTKGgbfDcvLdi",
  "key14": "2XjNBXHfLFTf2S4JKhkLB4BwUUg16HxD3qbW7qBrXat8LNFFu2jLdydBtPwg99bmLUGfovEUy9yXB2edZiTqEeve",
  "key15": "52o4rGyB8M4kBu72YxyhBJ2V1rDe8JjWSbH6oauvzfRE1zZtvrNPXGLoQzEpaP5vR89Af5dEyQMGjo4fz8S7Fy1e",
  "key16": "4e6d9p9XUSPpE4rdSvuBewRiVfCrP49ovLny9cWp84FqyJfSdLMgi9bkEi6kPbNy56mwLAKAqD59j9gZ6Y7TnzhA",
  "key17": "2nXayZuwQg2hZinzWSGhq3pqTCMsmuv8GAuqE2LRiMZEqh26zDdyWDUiZudjMh7jBd2Ey5PwjhoTY7d7q2mqA24Z",
  "key18": "noEanJpU32f4ZPVVjvekxFKfov8tPwyJNZEkzNV9UyqaYDJJHzozx74o53NCV9CdsLMgm4t5hQZqrG8bdc3sBpC",
  "key19": "3vMTjJGgUvwQKJfV1cPSxxceEYahLrPHesnG83yC17f7jEgxAwyzhR6yeHzPrBZwCf1neUkrENtjcJbFXwwuhEP6",
  "key20": "5kyYayTCjb29em8zs7kJPaWtiUBDiJrrkrkouK9AmUccYtoddVVhXKa4NuE1Vj13ZZyE1MmAM662vX4JWnNeasbo",
  "key21": "CmtPgYWYvaFYvvEUDNMiQZfZ8Gzr8FCieX2jznf4oP5LVXREDMdbtfTTtDiceC8LLiNLpGC2Z8RufinVcnVngAe",
  "key22": "3oHfcBMXpQk87FyJNTQNwnr2B7Ny2UzqreGfoRt5Ws18d4gFgbC43qpKLB5eh9e6si4RxbawnnYhJqdvbKMEzpb8",
  "key23": "2d5nMQyTNYqnaHpbWuSTZSnXNv3jCvFsjyCBvSADD4M3gYzUfw4ymJv4mPwgsDAmuBYwn9kkWjETsTgfHXePSfHk",
  "key24": "2FubGJHJ6if9x1Sqqkvb1aBjYhVoKjBt5nMrEV8ZBMxBsogPw9ebNncrFUWdYD3ufLT6fxfaegudsHqCNALenPj2",
  "key25": "4tiekJbFomaMB1KRVCJMEyUbsGnJFv3dfQnYXXnx4DgdQba7JBhvm6NEUDGD95MhggbhYeE7P6dcLcDA36Fr8iZJ",
  "key26": "4MKfEQfyuhGbWjcFmud9MTH1ysdBLwhjEX7qLAb8SPBCFgkdYU1HKGq1mMkxXEJ8ZcjAQa3bqoUGQABLDYTrEx94",
  "key27": "5N7j91eB9TW87AcGGvcijwjFoTfdYhME9qJUsrtngiZDRsuJubdGGt95yR4fXNQ8V4ReJWmxKbxSU3ApThtFr4KJ",
  "key28": "U7Ss9BQiZStYH8Ewychr5sEHMkvH9UmkeqKPfqDTAQKEZKygXJDZhzeu877o6ZFdDsV6jmj8yfe6g5D3LRzqcNX",
  "key29": "2JVbupTioQ1HW85kWMhdWjstSU2YsSKkJi2qyPGLcPsuyLuBoD9MhpaxFVWPqZBzegaLQmX7e1Dx3DSmQaj3S5uT",
  "key30": "3aJZ8HEBXQJg4gtsS2agKmZLxF3miQyyJbVZHENWpYQCSseicBxs977Mx1bxLcPnzFzChKtFJErziTd7FS31jAe",
  "key31": "3kLejkbF9LGe54PBQ7G4pPPivSTdq5Y9aQGGfMywQuzSZLVKKq2suMgdNuDfLrQGa6vpMNmk1zT42nKvLB2EXJq4",
  "key32": "kx2PQb6ztLk8wugLRmHNpAAr9Hm1x4aPY9LguvTxzAWLPveeriNvWEZkRZAkWqXuuACtjUef6vmaChoX2DaJvfP",
  "key33": "sHQ1f28TxyAF4Whuzp2HUnoYLCqjXXUvPgTAsabDS4fjYHu681fDz5r6CgQsgPAN9MFNcS3C3Nooo4BP7fYSkQ8",
  "key34": "2yQRnvGKFLvGQiJpr364EUR4uchWsCJwsD5sSHMEc8pQp5Ai3cMH1CM3S9nsi59Gkiu3otTngniojo4NtupLzZkw",
  "key35": "4c2uxd6WGqLEAqDDXjD3ihTqwanYnkHhJFXdjm8jkDtzfMfgJogvMqULuLeMXb27YHFm81yp8PVjoQoB2S2YZ935",
  "key36": "49yULim9gpVNYHsx3oyTw9YRV2DjHFjRw6zr9rWzu8xoFJBwwRZ9CcpzHfkviXgQVD68s3YYPrHpHV1fheTLuq7y",
  "key37": "2LSLMfwKHQ7D5cfSWWTmLNBjECmerrFEzJ39RHkXxyZqJtkzTnunwb6GfTZq3aVC3DvF1d6KDQudT1xfy5exZc3g",
  "key38": "5XwU9xpECd1AbJeXyiyse4Lk7Vwz1PwsNvHMPx35XdwXaqWTM6cL2yaV3GzPRtmUR4V3nFf2a4gjCnz8XNwCHZsY",
  "key39": "238ovP4anMbqeSKWdkcvV2w4SmPgeJF1Pts44Y8z5bY1NLUe2347VhDuxXcn8LagwnMDW7LzfTUQVbbwsh3AwNRk",
  "key40": "3T8sGbPHxwq6xy6JUehid8TJHoXo3UHbdK5fwBrcU75To8Tr1tFjsRqW9oak1ifYYEL3ue1Vyw417uZcDtTdZy5J",
  "key41": "4ZnoCob13rTxUQCYs6CDixEvqvGNe2DcedaQuNdJtL78jp28WjD4meaj3xgASAvVqLqwstaCNxUF9qkMLBki3FfU",
  "key42": "3vuMq7gF1zHMrJ18xw8fcC3SELmorLRSRD3XDVZcgBuXKyphG1hdMB4LNFKvGeNPgnwCC9ppoRDbcdr4tjgz7G53",
  "key43": "3xi5hvS8XossLNj8jNRuAzc9LHEcXG1J2ACXmVKxXSZfXNCpThmGgECJegz2ELNSxu5bKQBKpDwseD5ozWhUxywT",
  "key44": "4QoP331mKtiUPbEG32TkQqwzsHCEUkgNydJa6bVuhMhpWFrUCn9AtR1rUxbcoKc3UdJrwckNR5vq6mNBa9pPMHq1",
  "key45": "5L2S24vxKMJLyHrm64U7E56DZMwxTw5z2tfF6BoE85nJ1amnivzCx2G9s9v5f1Xn4cv9aS5NqkHYXmjqpcCDxuJL",
  "key46": "TLNhNjCgYDf7J5YyFAdMJrEE3EPUcQ9MsVYuEmdAp2s3rhvPBVBW5tan8pqMkhCBwfEjgFbQeAP4BKanGSmQZjH"
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
