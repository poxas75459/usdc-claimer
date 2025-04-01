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
    "5NyNs3iPwvaLDNBLwk7qWjXgJbNc1rYT3K2wRqHDKQ3MjpJbppE5oMUJGCH26iAbTAtp5HqSvziWoY74XWG23VsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3kAxgD27TgGZPSs8wtZHmN6UraMdNzqAuKhypb8PuTe8eL6WLCVrG4iFWVM1P4MFL5zxwZkknynpJ5mWeSrwrb",
  "key1": "42kij4ez2eJXXTHsAyvMAXWERcbNw1wyv2sDnTr46EgbkqFRCmpkpSvoTKNy3NUAnrFNXmXLKxg9v3awgKDSdM4H",
  "key2": "4sp4aXKA5P3zh6wH8a9c1wkAQH1HFqMSDYk8RQV72BH3vj812kUECsAPHX36gndNTfjEGnvXfsPPiojsK12CRMvg",
  "key3": "26mvyZFbdiUAm15xRi32pTcf33uU5qvyM54Pt4uvpJJR2z4hpXgKknnKGoc57zNkVoPEX5T9pUPv61fozRzjYyrg",
  "key4": "7Wc9A1JeoVXNk1MYeBA6Rrv2bwivq3k9J68sgDYbUJjAHP1NDvkawmNTeFaBtUFC9d3LpVy7VyqXgJGKnhzaeAN",
  "key5": "2fiKzdKcHxECRzWoKoWRofYUbNG7GV3CCSiSLLctqCZMkcuycTJvQUseSMUbXqmPcXYZd3ZzVCrkXN5MaJ6ncs5s",
  "key6": "27QhCTgpFCbF8CCPGTi9vgzWTbAZqy4GDZGLSsQS9MT86Tj4bzGfukjNvfDVM3rPVfsmb88DtauFKjw4BgXEMFWi",
  "key7": "d7adEdk5sdPD6vDuhUSedABTZcqCBsLWfYT7H3dU7EEDFq1mfiHCs8bHnYzUBRK5s7BAzKZG3UUPifQ6ih92ypY",
  "key8": "5MJoo8ck1uRDFqdthCLdbTDxbi7Ke2wVRUuVmZ3mN6pBWmrNEKytGLQ1hoxdiDMoDofmmx6tYKPfhhzE3tZuLapT",
  "key9": "33Y1dNtemzhRZQvsgAptbb7qTwbotX9GyhswTaSspFkwnB9xhY5N7JaWRRhjgw3zyan13MDPohPQR3Q6f6UuE8DT",
  "key10": "2K4MgMH5gFuBDjkong8nw1kmjQsvTvm6viqkd5MHbnRESKfaJZ1VmLNxnhDGJBUZqLJo2vWA1bNCgeBewVqQ1oxt",
  "key11": "4GyrN3UeYDU52JAXALUqN2MtEs41HbZGJLbiZFraQKpUHyUGgyeRC8NZEKf1JEP7gJjLXTr6ukR1fUYPVWQZTZ64",
  "key12": "52eqmhY5nXJdg8rwwTNpvfgpd1vQ9TBRLcvXNuj1mtc3UL8kLiRrBymS53gpW9Pi1wxr2r1Z1n7khhi6tvitmap5",
  "key13": "cFZG6qo8wNd38cpGN1Q51omSA9DEhZXp2vMB1JpR7CwBNeTJy6earrJWf37Qzm2zeX1yTqKgk4NQ2KbaM5zVcNo",
  "key14": "5G28egK1QzrYuD7J8pE6BirNsPQPB1SwvZVLBEeeXUnUAWXLf4Eu7QdgVaXpAigkUgxRpzdN1UxD9WicQ1g7iiN7",
  "key15": "67MSrbgrzq1Pp5P6z1CG52kigKGKsK8WNBvN9abcV2a5nsHSuNhmM4QAUp2C26HscKhKY6ykjQYd1uvFJxpyBEnA",
  "key16": "2sWtiMLsKdmcnJUoSR6aokw8BNFguh11FZmu5jZQXZZYdP98norN1EE7AzYSGdo4KpBASYxTCkJ7MQK49uZbpDb5",
  "key17": "4YhpBZwfHhZ95yveWSPhvD7B9ExbWBZdScKHBE8e9sLMLrS35UZWKER5Qv8fGbRtjMN1UCwNoCW6TNtLJcMoQaf9",
  "key18": "5ZpqgWbah5JxwxPFJnEcpXksj8sXKE4x6vBik1bpnbEwwh4kMBXS7xufhmybmnUseS3uEk5XvsHEqSs3JPtfH1mR",
  "key19": "4wx2nAobDKqXuJM4zTPR2px9MjDJ6GySix5wTuEYKeY6SJMfsed2RXPYVLGpvLXCxs3ydr417cyGfL9ewNsURzES",
  "key20": "3E96K11FHXJ8JhKscs64iECv3etAxkivvYMCWyJe4NSCveaCbmGCavUZHKsZjAJefog92Xxjrd25wcoy9GGFBaJq",
  "key21": "5GKsJQDGZBQjDUpmd4ai2S1LX8rYk51hQnNkeYKs2GxtbtGKRqrr2RsPW9Zp5s22btCQcbDQYmnx9m6fNjd9Wxf7",
  "key22": "U5tzBb934nYgMoQKojT5jhZ13Zun2Jd3KkdyfNboZVcxNJ6VKajh5THMv6dKKnmNHMTBkGU6QUvuhCjq7gUujfg",
  "key23": "3WBex4rMnmJcHgBGo8KWbnfU8MDFK6GTFcVMXtpdhftAR8RjiZVCsD35XDTex2sUAL4rHzTd9sW6kJbZz1pwDuRv",
  "key24": "65mbLYAMCPuyZRzropgHN4CiGSF3zbGoXqgi7spsr5E6qzqhTaw85VFwRohXDTSYW7yTJSQEk1MJyZirtwz2CEnp",
  "key25": "2Ko8xq3p4gVs6xKDSfwH5y88H2UJx2rtgyC8uy4rVz3bxJESBH1npUkScKZSKvxKFJTz7KdBxp6TUd1C6Qb3XdGq",
  "key26": "3GpeXt3jX1cFjXSbCMVEvENMkTqXenfjNVuy9JKjmNZJXL8jXzGUWjwyuYkp2S1B6wXj2sQUrRYVVePK2pJMD69P",
  "key27": "2LsPqfUntpZk4oAbYNkxdeNvF5FGZ2tEuxj3on5eKgRuj4rMRFL5r9qbg2uf9RocDsWuuFMgqQaKTGu5aQ5c8rmt",
  "key28": "5EfgDcFqaBnUh9brwbC9EagkF9DcrmTPa8FF2aggwEa7Ecwyg1CSUS3ExWxGmUSLX4kjjKXnAHLi29pMcXREYEih",
  "key29": "2zpYuwpNNdWXiJwQkrkJWmNrSUHeh6L2wE9qUcjK9LSkWsKLr2Cgi2m2jwDQcqGWx83rM8rpRvnKj8BVMPbYEsPN",
  "key30": "3NQNJ6AKXqH2xJA7hSC9BrxnYssyM1sX8tBXEKedxRF741kJuAzpnXRbPb15GtFVhqTJTicSKJxuTHvqz8sMQnCe",
  "key31": "2RebPcPZtvHLLESb3KKBvictUu1N65nemDCuEwGUDwwiAp5xQaD5KckB8yggx8VhSU72zoLm65wk1Qi5Dihb6QzD",
  "key32": "655C5vWBUr7QD14wmSgmRubreVdFP9MCUVkxJ23VCfnptdGMttR1WYAo4BERuV4jCUG8k4xmBXeiUkhmSsFwCrBG",
  "key33": "4H6Yn29NcCAu6vRSkgn2gpvhM1bBfhcSrUc9caSzhiVdkdCBhHCue6yFMC8uRYDvEmJZJXhK7tRcxwpCo9sanqDv",
  "key34": "5TwqjsAaQcC4PHtvmUjNmbqLmbuir1Rjkvj1evGW2dBLGuMS82pZDiG9cs7vfoMreZzrD8HZrb25jxgG6W4TGqgM",
  "key35": "3agvacXYsvh8umEqgKefgJNKB6QcnvYMnb1fJWemZ491tyoc4V7dox76GGtBHEDf9T6zftVRqfQGu869wtbax5oh",
  "key36": "2ML8woumn9acoR4t31jff2s2YPc2b9NgRjNd9wqcQvP3nwXnLMbPHNkFUJgCkJsZwsiymqRZjvVB4jgiA25ACzHh",
  "key37": "4M1yBe3p2jc6Y88L1EWeYmiDUYMHYC34sVK9DT6KpeovqD2sDk1fa2Nzyvt7ad9MvLsRhx97VMyErrZX99shAwNq",
  "key38": "2db8HgAtUX6krE3X8QNTH9U9C9XTj3FsK5Sss1kHow8Wu5RhfVYi17dG764JWEktNAXfaTAnzYNt1mAUNHpJEhtM",
  "key39": "5aoCvHiUnHgRcJJvdip5385bxGgDaFWGkVzjHBTJ2fjuqnQGJJRyRfNGCTY4KhQsvRHuhwf1f7zRc6vhfVAovF2b",
  "key40": "i9yNsuQcs2Wjh168cPFeRcBNzkZojDoh2b4suoq7vAPkCh7jLR5p1zCo98daTBAJLpmxUfYs5qsVii5SprFours",
  "key41": "4gSc8LtLfzUkY9i7VnZiv48KXzx2PBZqm3uVDyw3noahCsJXasjy8PFKPKYqsSgYceECNXn6d2kQDUuiFYLDJVkE"
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
