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
    "4XQAzw8qrgtHgejV94L2EMpPpiXgXQpQWMqXxiA28dV1y5rV4MMPbzrfKrGH2CmG5RV4ynUU1iGf1MXXifRrexvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6756VtTtuYfpKD6tY2c6pz32FHNMCrSgbr9i2Qx84VouSe9jWkKUqBSmvR32Tj1ek1rjJnsW8DSuezWv4kmwqtER",
  "key1": "wJsMjfnpEVuybrbKEmaYnmWaejnVvEgLFt23LVBRofFVEvTgpkQAHCfXz7ahorMtaqX68ayYmWD1q1UwBCu5nVo",
  "key2": "8raJw6jkdY7sykvAewjY1fPtKFWpe3TZ3ZWr1TVB4pfNfuw9KvFvacSoVPin8M8wqBssEgNZcG9fU61xNf2T62A",
  "key3": "5bSv72De7AXtqwx4dxSDhdrVC8ary4eKZxozh9rzLs67hziBtrRvDbASgp1XiHKtQv8X3Mn9DQBNfcjbeutExyXQ",
  "key4": "55CnanZqZGtzcNX82SrurWHxtsDGdRLg284gffj2tHhy9WcjJ8bxTv8gZSHbvHbjRxagJxujbqhLzk78brBu2MuT",
  "key5": "57DhSfzWHWiMKBAQL4X5Xxxmib6SmZYgKwiuMiQtpxogd7hbmMNQNbZxFH2qBFgXuHjqPvZH2EHovmCyvUBrJfQD",
  "key6": "32u6sEtDdQbUCfrAqYvB2PhmaHbcmogdhhb7BRTqEKprL7BauYqhSruRLdm5wj5hZXPKQLKWgQuviNe45pGRAtpk",
  "key7": "YeQdJw98B67mqZaqF4KcDJKTPjQGs56bgjR2YxjU212rK4t7JxL643fa9rZESwRbx4LstcLewpo9aigUTRytjdg",
  "key8": "2qrskfG7bbZfjU7h9c92hoAQZXsjvcSgfXsZPhQHw6bCU5UP1JYBGEamUi4JXVMvWci19akRGZTRCX9yTr5mSCjy",
  "key9": "3kKF5mYeE5GTumHeexSSQeAwHoA9sZn3sNQ1rUHYRbfZwGdFcfYi5jG3AHsbrLcZMMEp4gG9LXwvnDYQSY531vR9",
  "key10": "5snyp5Azpd5dWLDFb1xLXSbgErZW13T4XCRM5KpFzDdnHYLrHzMoQ28rsxdGuy2hYjb9aZLQHLoGfgYHdkttTLua",
  "key11": "4aVWiiCQDh8AcE68Wus9SxDV9waDtgZXp3SutDizN313ZqD4xbtGxmPMcSRfrQtuUb6dpuFFek2fi822JuwgKZLZ",
  "key12": "3MXBCH7KTdgB9gCbmydzq1gyiEsaUAGH1rHBkWkpDDCZyxq2LFrnfbtHy7fwEQvDRJTQfbMzu2Jy6na5jkm24fZd",
  "key13": "26VNG7FwEzypncmKH5aKXZSXcWEhtFcpc7MeC5wQ1So2a2KmYfka1V3D2sa2eayXCwiMbXUxaQSPGJbBxgA2u89X",
  "key14": "4Dd7UsYMffE5dBb5AB5v2ZWSsKmncEtVa125N3nywPXvpxDNJuTBUeVn3tkAAGZjMRhwUoAmL78Ywpir78RPY4ti",
  "key15": "5CFHGLLVCRC5VPpaQN54gXNv6JcMAEXkWhBfxuqpvfpm6Rc1jvf4vWiTfVFRdf7J3mouYVwHvG1QFDB783JG5Eed",
  "key16": "SuoQV9o6CgWLKDBXRWV9vgwDouRdyRZseoZL8KStFBSpYStxR6kbBf1bQ9MpTnSTRa4wsqYDs55V1wyosHmB3R2",
  "key17": "g8hEc5XvKC5EG5jL4cWy3V4J2JDxjHxbTuF8iortoBj8aunDBxGqAbYpiB26wfLBtL3hBn8JuivxKb2yQXTqmcN",
  "key18": "4juT8hHSNHRuvkAkkMN1aFQ6MA5u7MPXHT5rFtAniGzFRMtL9hu4a3KV6KsV1CkHHZcY2CYks4LERHQfh6eeGiDz",
  "key19": "5iUudy9mVXbRLRNEsDir9r2USYzggznZ84c9fMzj5PdRRKQbiW4LSSuB6BDX5a6NrWLbi7eC5NKn21FKqCU81A4e",
  "key20": "2KdTywpuZ7xoFnXvjnNnJWAKoDTEJDVLzPgSkwjasmnew27bAomcp7VCJDbJkVVda5zSqMxdcUK5DnVihoGV3y1v",
  "key21": "2sDjN4aGdLWYMNsX4gcSA5vC8zGsVZm1XDux6qKHeVw93DRmVXxQBb7V29GvAbM5CCoerCEZA7oWSAFwV1wxQshu",
  "key22": "52GmQgqqjUDAUQ3APPVzTR4qTyV6iqD3Q9BVHceKorWKURV1ytb5L3PVxJcwiTpApnH2keCL6bk6nSYdr38JHpDs",
  "key23": "3xwGuhM1qZsV4DEfPzLRMiY1WcpHw6dvoRuunFWD3ZLwX4nAmKFXU2H6dDaYb1bRs7yLeopMpLCGYyfFRiVoq2Pw",
  "key24": "5L2VddaBP6c4VHT4RjXfFmr1GbXNEH6ndw5GNXNzkYz8EKJNVXoKcxg8kPrpQs3YkndyBPVoHVuMianLjSucFdej",
  "key25": "4f4FJsvEWFYKKixFMiUqwHJcdVNmuC47LQhYHp8nFk6uWEF6QkcinJZwYWi5icjuTmJ9QBSqUBVhWktTdASUQCGo",
  "key26": "48bPUbevvij7XWmx9Fa1UH75W1h9HAqsTzgU8KMgdBfjY2CPvWHLexDoZKUcR3p4iQVbETBw5hbY4pr1v1uGv7WB",
  "key27": "3wuCGUu22sQsr5E4zfsc3P4VLNrx6U5j9JuVWgb4PaHCqFFDtMpAExXaRx4dnedT3xxCj9yvki9ed5bk5og3YsBV",
  "key28": "5u1Bkq29XQFaHc7wWaHaSL926vjSEtk8qbzhRVhoFYiZ9VsWYzaZCz81GinNMGigjfMbSPP2DTJjvxU4McMpQbqh",
  "key29": "qGaD3rbWbM1kV8rvHgyWni5edDzfPgTDxFzyk8P7LTCqdqz9ye5KRna7y47aFYwhjv41bSucJRmFXg9K84djPWW",
  "key30": "6QdqjNhdGroJNtqUS8yEjTWyznQWNAZwUN7DBTiTi68oE7i2rz4NDPuF4pP8a5fW1ZLSbxopjcYUgxKTvzykKF2",
  "key31": "5xe85VQzzAV7wZMUR2zMSJ7MEMNVb4oyJsMz1281KiVYFpqHLenz7DuT9Q55uyL3auXGWgC9Uai6qNKQ6M4Sv8P6",
  "key32": "ATMAFm6FDSrMcvA8aDdwUgzr3RVQZFFbeTdSkky5q9YztVZbhUxqk1PHHm9o1iukqwrsBBjt2G86LB9sCBnNPCq",
  "key33": "4G5QNLUCgau4pJNboTtDrWztWmaLCbHjwJXY8vbpZDpNy16rwpVfbSFfEr6PNcc7ifnq3x1bv2P73Z2JmxaQiarL",
  "key34": "3uKD3rpxXE3QgYwUj648Uh6TFrLvWTgikoXBU5ryqyV1UnUMPtHH6WciqDRyQ8SNK841CzUW1vLh8GAdyxCk9HDM",
  "key35": "2bugVrrTMziaqVRzTmoW4tWARAjfLGKe1YgQyuz94oU6LqMtM6tpKHEQSvpQcLRC1vxXbLihwZoRHB7eL8PbUqf6",
  "key36": "y3wszkNMp7aaH8XqwU91YzvGNEWayZouU6fHQvXcXyY6VC8AQXN6hrMcFYQrJpyHedjpfysgpHez1yALLdHcPnJ",
  "key37": "2gzpxXA7KSrwsoNcroPvSrtNGwwcECEBn3Ery7ByVvap1obQCe6HWwv5bRGYUE3Ngxv1kVrDMCMMG8eNkfmX4PuV",
  "key38": "3iiUn5nvqkG3mA2iux4zRvaESrnH1hPgyCKGF2NhrcyZ41FcdszjV6kxMkrmEc3TWN2b6mvAShzj1hngL9stTKzy",
  "key39": "3KDGyoGQ7gGoXKTbK5adrVB8FC2ER5VJryhvGxjPrPjDsDkU8ZBEFWN6bof2kBKHdg7ZnQ5BRdYeWwRYQ6UCt9ru"
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
