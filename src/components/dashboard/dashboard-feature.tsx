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
    "h6e7jgYHWYhLD8nGsMUxZcTvEJG7bHonxSFPnnt8NpUd1o3HxWc9TShHnmSNMikVfmv4mqYYXbpJP1RtYQJBeqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTAyCQD5yKvjpV1PJqyJnDxEXS7hrFhLjTh1Hdqej4JszrUqp7rERxiNPmh68F624gamUET8GC9iENbNShGcxDG",
  "key1": "uXgpuXqhRoZckBR7YjmFUeujAvjZsUcjgZTwoUGk4c4pdccvfAYzctREEwgBK647mKBq3UFCpVioXRmHLBCGU9D",
  "key2": "4wf7WYmmzaFRiaUhPLAQsXBG56Hjwd3zQUeLPg5XjJsMeZyaEH5LghaW3RTkFjsFjsjYCQ1wFddPTzrAd18Zf5sW",
  "key3": "34p5Y4BdjUaUKi9NNFKEwfcwrheP1BpUQ2K49XytAb7fnBCVh6kHXe3huoXNkvBb5NzNkb3mEhUQcpWo44QamaR",
  "key4": "7bcQR2JPos8ZCDsGCCWCuptFroC1bYn2anPoRKQuPDfbSbm7TN5PBDPqYJV7onEgk9Gm5GDCTiEAbcqyXNnrVEM",
  "key5": "64xDT8W6ccfcu4CVbUipTtsvoVeNMuDtU6KMKYoYY6z8AUgSz3B3Q4E2nA7wvjtdBEbZtDk3k1PGKYVR3xZcRMqn",
  "key6": "64Vv9jwPSwL2RNVucM9QNNRpogWcKcgMTymtUS4LS2epM6ve537NfRQ9jzoEKAQrs26MffZCBQDnsCUdiaHtYVKg",
  "key7": "2tApoCJ5UTreMHC99jB9rkYopgcbkbscNqe1BufpGRLLzsXUWaJcQFFxciJMUjzHXTh1TKQLj6HtHAGX2nNkUAML",
  "key8": "5jbeMufenxYve7wj6QimmUtgbsQAwPYrSBf3pYZb5VQzCMGsnVi7tSYdu42wFNDL8xy3u2i1KJ9mEbdrB62eC9Kx",
  "key9": "5kRXNYKQFVFB5TV6exJqtyHTZ2uzgzunEbGdTvVx1WzqjJLUJihkFkGSihKSvWZH9gGnurJwXSsgkLtNXUwi81xE",
  "key10": "54hDB3JyS18CkZjjj39DqvdzCG8fRuGTWsXiMHayr7tPwW45b23Zmetx6tSiAPExs926ThH3sEU3Cx6UUL7FR366",
  "key11": "2Ym6wCyLK66us8rxzNV7JZTAGXVH4hjg2AhxZ3PovaT7fpBpu8QD9wYWxgV8AYXs6LMeoFaTPA5U2EEXkrNzp73",
  "key12": "4wZS4HWCu47qCSpKUB6uoxZHW2D1wUQj7wBVgtWMQVG36pCU9p8VMnheohMmtjKMNoEs3yFpHKQYcgdEZv6Vz22n",
  "key13": "5G82XkNosaQTcHQcXwbVuUwYMQ9GriBjc2zxWvydTtmdvvizdd4ur1LCSvxJYM32z11DcZJwRSMqSwvUmpZNneyc",
  "key14": "64sus5gXjFhDPGhfmjXkR7X8eP7zVCFyoKHoV94usFxxBECks96VLntoKDcUSe6KRsTkoCPm6aG1qe4RLAogGCub",
  "key15": "XWYevLaU2Gx4YjSXUyBUgVExMzDipiwWitAS9ZsLx7Qgd6rwaoEQtiCUWUptAvPx5hrScTAxo5DiHLdLBwrmSgt",
  "key16": "5ETddNfJRFnJzqL5BSvCsjmvtm3ivYrL1QBLZx1g5abpvgUDn2o1RaCS1tVz6srBR5Dx6ZnDGp6FZTrubZgqHMJi",
  "key17": "33EfyN9bAm3qUmMJ72ETYk6UH4wZqnn5iu3W82f5hX5uzZSwvN6YYEUgSyqHvZRV84wuKRS5CFjm47CcG3zraaze",
  "key18": "2BQE2bWrDqUjzWeWzQTMHttTJharHLxvB4Hchzzaf1tfEPEXU7ta1StBBD6SKgcXer1tSaPT2dRqQhxzV5mhu4cx",
  "key19": "5oLUrPBPFDtRZYuYR6n9LP67F7WQ7JrNiufNxBG52g3u1eKRTQCR3SC9Sz2jEz8zJhb1yBnz6R2585JzWrKgQZtz",
  "key20": "S2dWXrjtnhqKpdZWovksjkHyT1w4Lk6FNyhUwraQUxAnoekHJC9Wr9KyTjsumR3D8BDFCjqNJKSK4meMrtHFYkF",
  "key21": "3wy2wLXCPvBFxhawKGTAmxW3MrP97PKYFzEx6o9eTq6zkNKgaW4aYi28YL96zGNNcCU2DqLJpcfpuZmUdjpYypDp",
  "key22": "4wMf1rKpw34jktpB6a5ipsGe9v8aiokF5fbL5Pa4zspHpPL1q38BcNrgYSJ5aZRuBimz64kxesHws9qko3nNpbiC",
  "key23": "2aaRmoYacQTQNB8jBREdJzhXqwYqixEyWhbtiqQWBg1QxTWQqFNEQiiefCG17jCCE3RxnPXAyZdpbRk9T5vY3GBT",
  "key24": "44nLpqqF8UQxtrAvWs2Rv42sVqanNJcpv8SioMhHE9Kx9dARKH66zb9zoeqvUbsdabqC6LDbACoXTkbtrimc6QLH",
  "key25": "5GSd7sc1tZFaPwvQcj7KJ4zusSXZ4LcZTL9p6UzTDWAzEapaNV8KLaa5h1p8eAPzfecKAAJALh4bQhNCaJp72Nr8",
  "key26": "2v7B5bZvsFHxt2rHsF7EYkNeqeBVAHGRbmb7W2hL2Wd3aXiHNH14tBrabCcN2yJjn2ZBwihfhpjSHLsyCSMfNzmq",
  "key27": "2sqt8JiWo1n6r1yaKJBAXvsawDu7T7WFoVgT8esh9PSDWSS71rGiSpqDcSVqzYZ4eUH8ZeL37WqyapxdYW5R1Vn1",
  "key28": "vVqwUjfCLDsAtuvqwk8XW6qYXtVHLKoemXVXAhfmA4a9aZNTd3MVj2DKN9MDNS7A3wgSf4XhQDM29K8wW6BhBTd",
  "key29": "5aeg2bWj2tYy9CojG4ZJzyMtuwdiFLHwyfwjVgRpL22QA3V7Wjc3Ays1CUH9NcMm85tfYeWsGZPDqaSp4EN7kbkX",
  "key30": "5gEkjT8fiR2Goi3QmaEGcCxq3KAKL486mndyyFxgr5wxEbRWVPAxsyDKFr9unsbKLr6zeHTVq9jmEHmywKP9Nd5",
  "key31": "3Krxs4cWMPmmJh8RHn575rQK2yWgRRCWFxSsiybmVdcjx3VVdThaxbaUccF2VKZ8eA44vQpzUbHWnu3pGDdxPHRQ",
  "key32": "4SPqnv5x7v4c1dQtCXTZj1pKVVMmyRQinRVyX3JTQ9EdztgEVKoDCQvPggyCbik6yuWXGpQq3Ghiw4bCk9KiqVxg"
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
