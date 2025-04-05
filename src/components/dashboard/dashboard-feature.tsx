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
    "4eX5VkgNfba9bpGgL6jDAXRDhH8inMVrTrwAAEdCeKjiXPrGHi5qYwBYJTHkDc5hJ8hUe4jHNqa2zWB11fEn2A66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7a9CfGyZnLPh6bVMSaCPWXZ8hffrs14apJQSqTFkggZaM8VM5fpLEKPKqYZDYyb7ow5MkcjxJdE1cYMdhbuCaD",
  "key1": "2DD32ne636pxf1wrEHzod94iYsrNs6bzcHWhD8PVbzG7bt9oWuwN4jQfkjph3Gm9cJog2ydRSKVpYNibQvigfBeL",
  "key2": "Q9MrwQnDa7No9AP9RdFA1CqdZift646Lgec8CwW1WtWEp26PPd5x3YDZR6DuhSKNPu9kveFsG2qrX7UezXjBGmA",
  "key3": "tz1LG8aw2bKdoYRX32mn92GWSkJ97V3GB3uhLanpi3ar8MKfVhzP3pwmZhfdMvmLBzQTd5yK2hJgZshdGZq4J8f",
  "key4": "4Xjih5YCBhSCN7sYUZuGCJkyhCQbnqfFQh79a6Q1CnADr132mBkGe8BiQisQWRMuwP9syqewVbDbXRyXXu6de8ys",
  "key5": "5SynjV8wnkzJEKVfsBbd1cyLt3XzANNJ7Dhd5t6vLuX7kvcBP55rrRnpSUfgAtziuJEwyih6HUdQRyqJaKFBbSMs",
  "key6": "4u8dMr5exxbkBHWR9cSFAiAiCVFJcW75PhEaNoRdBV9Vd7M49wjLc7x21gagx8vNYhvBswm64VZxbCRZZmx6fXR6",
  "key7": "2SznYdtzNDzpnqcYKvp2z7cmSYjSPenQg2R9cUeaJ1Vuap2XkQnUjFNqoa77xi2bb7ZSvySqFfmiPcvqr7TWe3nX",
  "key8": "2vsLpygjvz6ZzSTzPg9uFBzQphjHK8Qtrx3dh7ye6ar8EoYVhaDMr9odb3BYCKywNb4NDtBX87uPhHHLNPcZ3Lp4",
  "key9": "47xUPFV8wj5XksmQHxB1AfEcesQDje66jqbRAryF2GFBgWzQD2ZUYWWTyqzTX7md1nnzNHxiQmpKpMbDTUDE7WJR",
  "key10": "5Ckd63MojaxC828soCHVSE5YhFZsjgakkW19mDzptUirzYnzoPrkWP3xyQGQNKuxQ4HG8RNxeTYy4ARG2rCdEM9r",
  "key11": "53advWcH7vKinFncUuf5HYy8xaJe6S59fF8pVGk7x3wA3REBNRL7HYycCdfXVzwG4jYggLVFaNpWmqyh5YexXeTo",
  "key12": "4FmQ3CtATHVde4P8DzeWCowm2bggRNhPRSAMxVbhbQraxWpAnzG2nFJJaaa7creextw7UQpadaVXkXu1PRsQYTGc",
  "key13": "vNuJn9gtp8UffqCFMm7RnofE1Vite4AFeCTGqr8PuMfUb3qGTU2JMGyCYY9Pjev3VdSVG77gxLLfK5zAaQcb3eM",
  "key14": "2VjhaaT6R7y6mdnHXXGUFAHwPe5Y8M6yhMsy82TvmGkKWAxUDNrnz8cMfE8obCinbaciuWvuGCEP9rCeMqrEBVhW",
  "key15": "4UJ1ncxg2acTBvGSYx6S4oPXq5upSwHeLW4A5y5RifgtrxRprQL2zu4fmETSqPcN7yyrP72PzzUyvV5EUd7w5Ffb",
  "key16": "3GafJLFPWkRojKHb87k9tbSYDSx6eYgddSvWdbkxuDZGEScye4preQVmQbKDerDdbLJ3Yd1FVjgsXsrMEJFEJC66",
  "key17": "3Recncct9tzSJbobZ8c4RfhyPQjRqFg89nEvf6KQKZzeE4UtFG5cCyzxjJe8yo969atk4m2oZG1ESrcnbLcCKcqk",
  "key18": "5kE9dcAwr9r85CsnMnBuYCKkj3o4R6BW79NRkC6muVqHt8MZzdd11Yk1wNcPeYYs2triuMcSvtJi4aX9DUWEKFWF",
  "key19": "4XE649W9CKbRm7bo3uSvcivnL7Vcb6p7NjFcoxnTnzh2CQqx4UELN8voPonb6c72N8pDwsqNLKqYeKGAQdJNu9EU",
  "key20": "2fFZzKopRUEm8nKqBQukt2jR1LYU9vHUmzVv8noqXBy5gAaH8Co6juxQnxxHCjPenzXevTBCfkEx1FsJxDExt6nu",
  "key21": "5XM1E2tmbLktnE5XdsdN7cjKuKEWchNmrYatnVTtaPf5nwJy9ByMW52AP88Vqmg8SZD1Z1TBjvuatTL9mScC8GTh",
  "key22": "6696ewftV2pDk6S83Pci5HnkAp7mSZe1iwFr2f7ZB2yz4pLJHJQwan9oRiDPXzPbDkAaGutN6jKGNazPqj8BxKdn",
  "key23": "uAsXGapngH4G2Z6LgYM4TbEGn32nh9B3AW5uBTAWGPWts3wi7gu71erTkqK82aGarrWswQsC2cm6kaPEpRF6CsK",
  "key24": "4zKTYGC7NDdKaf4zZ2uKd1x1RCwVy2YsNyw27jmSDf99ATgubMBxtXj9pvFk9DiZT86g8jA8Fe4J1eePBpVpWUha",
  "key25": "4udSkCGqtkMdMkMCCUHRa9NkBMKRG2gKY4m1EnUugpRQW37Jo3e46aS8WtY2oM73Wqin7iRNnHjoW7TQw1fcA9G5",
  "key26": "3dj8TWuXJQkLmDhcavz8XK5nqQtLXMRAyner5YGwPkWoGS1f3U5WcNpN1ErVduc1rNeigQ5BJR3nYtM8iDvnbLVt",
  "key27": "L116eHHXBZGhzu9k5Tcc9N6X2kK9KjvH1BmFhWJ2ZMbh5K9dtzLmJjpScVLQ1C4WYQktiM8kZTRedPb8HVQgUPn",
  "key28": "2Cf7hAkvdAdby7CRuDkYWuw3S8yDLUkiehsZxE7YCjCkX2EpUgb3pSJud1Yoyi6EQaLDhM3CtrnyRMWHQHV2EQxN",
  "key29": "66nLC2HFpfxii8yYJ7e8EZG4aMxyL1SGP3qp2NoLeSmrPJBKeUKDVZc2KcPkdHv9LUHX5d2uWN3RWM6EXon7S1Fv",
  "key30": "5EpGZRBeE6H2GJKcn3pd3GtqjkPVtnpRTX1BdWBKCW7vvoWE996mcLsMqqegNCLJYEkwuVDPY3AxMzoHeBa1g63b",
  "key31": "5o3PPu4QSfLNCyac5CMSATd7126Fw2o3Sx7uogUURXbuA9PWStMJLcnEM3kQ1BoALJuz4WgK6dp9uZdtcURn7Jxf",
  "key32": "5fgAZjkbFvdeGyeN6UNzW2HiHY15o9r2rvedBYHtD4Aeico2gCAZ5No3WYyJs8wVwgnYAE2inpXGx8KAmTYsckvG",
  "key33": "5KZMnAA1sRqVdjAv5yj4f8atHTRusNduGgUG57ZSxPvBNSn8237pakfDAFKckxii3h2SpwkEfNe5Cabp7x46Eeyo",
  "key34": "2RGu4783TE5EDxuoG8JJzibjLg9GQ3PqMrdcTYV54oRKFAQ2tvG1i67CTBYZ5CPwUDLgMVPVYxoHajzK2vuPu1zH",
  "key35": "4dhatdgtmNyzszvJTXSRFs9Rt7Tx1vy2ttGs7KniqQRVUKDksgKXtRUVCthsyFTMtXXW8orQnq8moD8AFUib3r2b",
  "key36": "YHrVKTDqiy1a9XaC3BjfrVS57RmxcJsmLj6CWUToDNHdKbKfUr9hePmHCFfoPYquEjQrJj4bKipEUSrL6Wr2dVG",
  "key37": "2rq32SxJH1AugBnNTiYo9P7RQT5DiCt6Z6Pe1wyEjs3gertms6FnbidjkKD1VocU9bsw2GHiahDJRNL7KJNWEcuS",
  "key38": "5RjfdWjgYQtGZXD9SrfZPQT21jsBebdH1BwWxAGhgayBFRY37ezSzxGCdF2b3k8JB8qUng2tqE8d6SPy5x9tjcUg",
  "key39": "4Dy4rdpYGLBjybnwJmBissvRqb87T3nM8chshhjKLdJU3pmtXBSPuf56R665Z9Lg2Z61dkVJLZtVu1KZqzi9aenP",
  "key40": "4omeo1jwM6SYZKH7S3SwkJCXdcKPPopSgtnhuiF2EyEfvrn8N3yzFHyqJYgG6KK5V22cmA28Wg6wkvWuG9TKVMwP",
  "key41": "5SyUUVWiK5sYYvZxfkHcZ2k6cg4SnE16XjuKoSSHnZY3oe2HnMs3UBo46ESKtgmkfWSTmjHbCMaouNRu7Kw2esNp",
  "key42": "rADY8aKA96RhxVbWcvQmBRDRb3UWudunxDuDwAvsUDTa4KzkM4W82xce2LkXtWP7z2HW1AtcnCtAV8sTyKYRUhL",
  "key43": "5Y3335tcW4rM1APh9ciuwQzngdJznz4tmd7ruoADDvyxia12BmUBeZDkquJzZH9haZXpsMtHQs85WHxzy2c5fCm5"
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
