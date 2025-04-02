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
    "4ga2Tcq471udStsDGhY55U1MTdUQBPCwww9WTbaEdjMCKNBpiNTkpoMB4akAnzGwjQJMTMdKpPf92umLLQHWwDkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4QQLxi8LiTXidG5d9GS8iThWfVC5iZwQ7zjjoYPbeu6bE2LS8uzdXCckD63ZoPWTKjvvtkXB1fCysgHL8cL1sz",
  "key1": "3Ltd2mMGKKHCfPGqVBL4gSASDT56yUoiiNJMc7e1hMMnzoaKqdx24D8sjuG6usLaqeDHH8Nu2VjeftMyU8vrrEW5",
  "key2": "3p8NEB5j1PnBLon9etgjFgk5HrvStHEBiYPatvMABhDD7EQzFMS3JPMTadG64v7wPFtQdxAA8oiHoCMiKVsebrj3",
  "key3": "FLvAU8Ss41wDwcK8BgSVTexxYiEQNWjBQrWC2G79ffESTTbopUwUtQDRi7gPHtTgBpQofvC7syLQcgQVMy7B22E",
  "key4": "5vSWwWqcGn1ojJL7d2DhPJKjniWj2GZgimzcJ8u7AxTqyALovepGEnJRoArotRN2ETHmUWXs7gEfgfBeH2UTbUic",
  "key5": "23A469Bb3GFHCLQUnAFMA17BwhMufo5D8vK5bPdP8841rNt5MroYgt8FGYLW6mweEQuoW253tZxwMmcxkPrcZ6qz",
  "key6": "gQaaEAMGdWtYLXorn7ZZv7BpheX31LVE9JWQ6SqTEBoRGSGPDJ6XGjt3PrGBPFFzrU5fg7XPe1upMHegMPVTfqr",
  "key7": "4oiGKw4MztQ646MaTqsPfZoucm37Lsqud4wkUSsZCo7etCDeW8i6ghuscVC7wxzBZz4XR79kFtW37LLEdQb5CZqo",
  "key8": "iiTBXjBc56yKCKyBuepKMExYLABc68FAkUG3v7GQDPRG361jjnm6PS9tZ576GQD5kMJggvKSL5xqQvVpj7GvaQj",
  "key9": "2jayZVqThGV9VYp7xiJNLNS398Nu1rwkocx2ShGt1nmE1SeDUY2Z1XSX9jznNHTUmEx2jJtyfLQECL8d7RU8j176",
  "key10": "3M3VAJpeTBLfxRrqHpqSpJXTqbtrGCovqa86jNBnbjA6eoM4KvojWQhcp21UpbuB23GXRRJBct4c5Yjz95oMDFN4",
  "key11": "ANXpd7PRrZsh4bYSyCqjUGk26nBybJkYLr2CXC3TFpgPKrh8K4VFWxJpLMZ6teZ9VFtqQdTBXch8aRuthha4Sw7",
  "key12": "Z17uCRFeUQAPm3nB17XJ9u4y5i5262yXwDeZnUT2n7yCnBgcgUY1kpkJLdzDctBYuVHEe6wnFgeRbWNq2QLfatL",
  "key13": "4wHuPcuHUpK7j7ZEbvxmkuShzeGX2AUqaEYYJRsnNXS2YzRSoyUJJCyRhUbyY3TXFeAwsDR9fQ59dq4gDcNwMsmG",
  "key14": "5EBkjUhrwFMy8mgRDPJusUwy85pdM1Gdyp1Uzft98CpoNm2xYEMwpiA8bFPsru9qBEhosZzkTGyQ3EQnkzF9n7eR",
  "key15": "22Wg4FnMuznRCuyDhDefwHoV7H4iZrZfGQLpSPpxTWuCGGQYdRczEnc6Gra6Gs9kZVb714tL7A6r4wHmNfiwaNMG",
  "key16": "sbQy16fdJuYjQxhj5atmmbZ6Fu3xGL5ZyABcVAcJXgChps1EW2ataUAo3kWorfrASUDRNUmdVBPUXBG4zZ8kC3u",
  "key17": "9qGvUGGWfJf9DavLKNgsWtNJ1WmZ9E6rFLMi9Ncan8C8aLaSVhvoFz6bpQ86XNV4REQBJ6p4KTrys1f2RmVLpgv",
  "key18": "2WtfGrSvoisLR8FkBhzDGC47Xhkpt43hcVA7Yjq9HQGN7NaApni7U4Ua5wKvXCJUV1uoy3tpuXLkeFNwgf93C5KS",
  "key19": "vTCtNfgwTfvF7cGqhnGESxMNesaDghXGBXQCecu81Py1YdXLDY3fhgNwn91zFgWggLQqXy6UUeKh2ED8TY3LH17",
  "key20": "zBLMdEgGxR2MPPxYmU5ehZfcCJ7MmwT557VZcxtLxppcVAVd23wYzWBhwdMJoaL3qkdfaD5QwWsUm6KRmaizEQn",
  "key21": "3CUBfDK3Fo67bosRRXc5EPfn6fYUFgPRStDzxfrzqbmjmPzcKwiLQUJ676gd4mo3vWcz8xB1Cn6HkBNYERv1jW8U",
  "key22": "28wK7QRZCrFHWsAsfGhTjMn4Q16zgUf5eiLbaWVJjYgAFha8cgmkELc5LNNxXiubPwqyD9BT7fUZ2DWW4FnZEEEe",
  "key23": "435x7iPxFbC48HRLvZMh65pPnVa9hxxeeiqj581bueKrdDhZoJLhsn51ZeBLyNqXUPsGDxYMYPdzBkLctzhuv9Xe",
  "key24": "iMuUvQKkbt3px6UMK5GaBAwBuKfQtDthTrZrCsRoJwFvg32NkvJytMXnhqZmkFKMt6tdoY5Wy3Cw9xBUUFtTPDT",
  "key25": "4Y9WemrM4XsNPx1vyVHyBJGodT8jMadHb7MPuMaRRnZV17qXXkbK8xeA7a298mdcFHDHD7rZMkoKdnEqZu95pwUg",
  "key26": "KRFDFJ8CWXG7gSNWrdiJbMBP2bU8mLjUkeJGRrwiLLwYVQdUd4d8n5UkHFZSpr9rgek4FNtWnh7JufmeFNGoVuE",
  "key27": "2jXi1gisLAENuE6ZJVijrKSJu4BF5xcfbp1u2ShNwMV6QNzwUmTqycbsLxZJyf5E3WgF8Arwq12GUGuQrKCEa8nT",
  "key28": "55pyy6mNFYnPrfiEogzDgh5q43rWHz93bA3917SsNGF6ed8SQzhciBW6gd1T5XXrPX6MWuu6EUVVWR9oukKej13v",
  "key29": "66agnWzdNjh43SJduMtFuUZp1SDHKJsQH6tziyGqKmVqvabowvf6ruu4y6RDfk94aGRTzCgJK6gRSpGGiaV7RAmm",
  "key30": "4TfayoF7rHVHj9urVUALkJ8cJCLQpYshWUo5EgHGhMUGSZEcnNtijpCVLdrWUXP6DPHbNvXUEiTisFrYeb69MFxP",
  "key31": "4ydk51z4imK8M3uwxhPAYc1ATTdUueVu2CibC3ENKysqDYPGhkRswLK81DUWTGc6kr4XbUQzP23A9hgiVzFE4kXo",
  "key32": "362qXrtr6c1ytsmAWw7vm44Rf62gDvrz1SCNTqyAdWQ6JZt7FQqQqicDpA9ceyZNxHBYHAtFtNKJuqDPVafep5VH",
  "key33": "3vowGcLNEUvtTobgNNo5WiG7j26JwrioPedvBR4snEYw7cwC1Tn9zPDhrKkPQ4oioj82PMi8YD4exhkek3ddHFs1",
  "key34": "4xPFEabtv1afYGv8fDWpjd75f2QNds4R9JzHmvCATpx68QL36ignb6mgWLLAZ3yU4WbjYmWoB4rJjsjBzFczv26j",
  "key35": "31F1aE6Jhdz1AFjqVfcSkoeyviPVGVC91EyJ4FDm1PxTtHD9uYp2Ae2dfW4H7kqsuwQGAYeMWN1hMcf1RmXxb2XU",
  "key36": "AfwPzsP6fg73hvrM34Zu76nJU9dBArQNnKvwwstkVWqQK9Kcb99SdnAaiZajeH8HRatfG5sxLBSHFzyGmHv6JjU",
  "key37": "3gmQxYqBgiskLLbubfuB55tqEYn92btakVv5bXvCStxk4CET1Xi3Wf8mVKACk5RUWF7xMQTwpUfUPRdL3qVrgHVq",
  "key38": "37zk4KtmkYYdY1g3kBGogkweGkqKsNpyrsSLf9c4wBSNKwn69KwU9J8MC4oaQKF4YtrSZb85yPZD9F71fEpiwo7o",
  "key39": "23RYYF3SX2kJXeFvoCbGwg3ysumjU23VqJeM8d9jMmBrKzWdQUxKEuFDxSPaowvD8iwDHhms2cwzPqDQSVpMqoBo",
  "key40": "53ziWN3kjD7cMLRmYcM1n3XjURG14bUcsy6JawKGKhRe7412mRAoqJAWkbaWyfwE2Tmz2kFuv7Yk9eVZNDdSas5h",
  "key41": "2NmKvScjZ32ivZzL5kvSX4GUmiYDQNniZFjyoD6Dy8tFFhyRtF1YiYmqcVCwtYDoK45FQciWRaQ7FantTU7AvMRb"
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
