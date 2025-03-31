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
    "RP3BK6sy3qs2MUpFfCp5GPq5CqRTtfewag21zMoZBpwgPELcoLu4StSBZF755VA8nfkW4nkeUgPQjqRG28hYusT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xijBpd3U9qFcH3CvKGASWV5SNRPGDXBWgXTThhHvGFbrvHgDZU5ysyAjpvMRu1t8FYQwM4U7eX44qSVq7HNXTJb",
  "key1": "2F3E6jpgrtXLXdjgGLVJ6FFw5q1UdAU9EP4C1JUGao7vRuzsEAX4zJwpRmcS5MfFkfBvrhEn9gfmeuyiy5cvzqxS",
  "key2": "2fE1XnPs3DhRg5ouUzXwm5Q7UpdY2w2DmHPPsVWDZ2w9UWqJnHQ8iqPJTS7xnRvCnPhfehrjuYTPXzkBkrgxHKht",
  "key3": "2UjWbw3C3eTzqXzLtfZKKKFugCVn1ioMvjs1CcmwNzkkKCD3uBm5UgvpPtizsAZh6Ca3yxZJV4WnL73owWn19TY5",
  "key4": "23mT49N5mvmAx1nPCn9b8Gc3auTDWBz5nSSDeA84UvQzTsjd6iNVLsPMHhyJLE1CMGbihHrLrfJ81ezijMUoP2p1",
  "key5": "4frUNhRaUjj3QTT7FPxLukBCrV8HitHNydBLkHP396kk15qssoAyogCRzC1EcJeFVqaUcQFosSxcpdHx52Bxnuxb",
  "key6": "31LDsTMC3k9KRJszXaFAWTsXPrkuVC4yKtAD734ibsiqZGC3HRh3pNAV316mESDq5xKHULVMbhBp9hj733o2KGsa",
  "key7": "W128cmJSNQEf3DnituvfexVNTKZcN3GUByjVYYZLFK8jdzXY1UPQNtLPFvjq5SyodNEvwAspjptxSQtc9zgr7hj",
  "key8": "3VX9stU8uT4EFWq7ch8U6F6PmUK59UaYvzbx7rwDZEK9CEMfyRQHCZwuD2ZWfvA3J2c1J28xwciLfDQRRaqyomXR",
  "key9": "21woxzByEVpWiEZTDDBtVLgudE1cxgChaDiraUuaQ12HzhZderwncNhzxua6uzLagFmXDcUdX12mHPtpcxFUFAXj",
  "key10": "595eNW4vsNVDpaADzECXzFsXD4Zg63a24iefia4vd7cCR9DA8uZPNu1tZWehuJ3rKVMxnLz5D8ZmgsnTo578A8EK",
  "key11": "isBx7ZUsg3ahXpSnX9nqQpT7HmHCCwPMBVibT3wBQ2md8ZJaZHoQ6Sbxq79ULnRvjw8qRhcCFoBdW9JbRNvABUc",
  "key12": "4nZ7zfW8BFe8w2goQ6GE3eBE1Tz7t9X9Qvsjdz9X2eNfHoSrwW6gN759cP5zJzBXj7gaq77cPQJerGRZmMQT4kqX",
  "key13": "v3khn4aHAiwvW1fD897vtWrWfXaJrMxcPNT1XJLFnLA6Wo2CCbFLki7qwXpmaq5PoN5QMmyAjXohX5eLmaWWWeH",
  "key14": "5yhqTmKQa7b376qTMMMGvFrTUpauGDmvV3FEX4Vh42BC5vGdCFjtpAfNATy2xMfmZ2SCGqNrzprHCk8WypqzYRr7",
  "key15": "61LZDCcDjHoEiY1GVwScmQQXq8g39guZHYnfqKuRzHDUhFh9SmuvyhjDkWpgngz2k8APr2TnGWsRXPwaP5wmRTqu",
  "key16": "4EfsB8E4cjBic177B2AMew5Ym6RTRqffkiWw33FwnZ1BLTG1iCSPfve38oKAjhjUNn3V5ouHixXjFkyXStLRoXUB",
  "key17": "HbuYRxsSg833a5BEuxRxfCEYGWpugbohSXVu7Qvw9hZboeUkHuWtv65ZAoURzy9VtCAsBVUngUVb2gZ4XohPrUh",
  "key18": "5HVKxXou6iVD7xLg9MktdGoUwEoSQieCxHwBStkpkyaqiSRvdHqJDrhakABzx8aVZE9KWu3wkWD4XEzB6XRP5RbX",
  "key19": "3cLJnCasVNLAFJP79PDVdCEnYUwNNQk6g52eKGe15dMjijNEwtWEHnRqHPmZvMYQzig82iAzubYF952Q1bwyjaKF",
  "key20": "mp45Q1hXwGHc6pwscErVWYsmBKqSZjHAjF474eGBqroFvxnwMgvyZPyyEfUQsCjzXoTnCeHr4NBxKzr7MUqDJpy",
  "key21": "5o4oWVFEm46n9vXrTGEf8wL2zY2Uix4gpNNU6E1jTSWwHM3bnEEHZGzGHfZKMnX7q74rWfLqZFFZGb7Ub5rLcEGv",
  "key22": "2VTticnXHw1SCArdYMXAeGyibqdH3VGzS6HvS7Fm4bKzfBAYabhaXWGQFXvCT1SUuiuxXd889L9R1rWQF8S7z74S",
  "key23": "38V5iRBB282zVzff3PAVYTtmDhAtLCUXs6P29nW4X4YS1kk9UfapKQtVtwknhtdMR4GrE9oZBEVfbhQMLfhNN7gJ",
  "key24": "2z51qvBR2vKC1ZNuZMBaPaHM6Qk2FsNs1BNhczdxgi5FUrsAaqYkc4Xjop5hD46pEW5ANhtqb57LyT3oLxtjgquC",
  "key25": "42tjxqAjpbsc9RRJkvSjFJakj24aoQ9NF7zZP4bGoL1mnf9mmmgom5DnPyFXTiJxnX4wNcCHLc3KpKwLEipPZ97R",
  "key26": "5qjhFN35XaoM9Wj1tJsVmtCpG1iNDW8nx3NxQzMTw31QyChTbuHXDeQ1XYKMVcHTwLr7ewKq6WMh1hZG3wBei6JC",
  "key27": "5ksTojTvphEbmqcCHLX4x2ssXjx3X1CCPFY2jjenn6UWQHJ3EZVfpWKStJpbTZ6qXc9c8DSH75gKf5WEawWvtjHa",
  "key28": "3L2rLXuRFtP9pKbE1b6bUvAnBQMsfPTQ1LeSVAbW3rr7ff49x9Ykzimf5dY5a3omkNSMRBU4i3829WBwbggmgAFa",
  "key29": "2PArtjtepxJzfBtnfCW3Si126Y4qNQPiZrPx5jXb85EniTXiZoLPfnFgLiU1f6nekbwB552KCettwsC1KhpzaZ1u",
  "key30": "4snZ74kneGCrck6yQGxvmkTkGfAEqC1bFov5knNycUBF6PnPpvZ1djP1PwNvHHFj19VgvdEsjGPfHyg1U4w54S3a",
  "key31": "3XS5kHqiVt96axny7GMMv8qVhD6nXN4vPEdoz3qMKc9WyhrdhTEGSLsRw7U3BzkW3R2eZKTuTVJQjVVfevjbvmcq",
  "key32": "4Bx3i6QPdUtG3idpnD5B9E3hiwxv8QvBAiuRSxjgC5W49eTfusbhp1GBxCQ4T3TDiCdVBYu6KxJreH8rLGBZDNAf",
  "key33": "4UB5xoNKqpBRrCZ5UH1Jix6eFmB8LmvK9mUMhM7QKaBoxUw9eDd5Rb6oo8WVU5thbiRxzxZMSLQHdPKzHYj9KKNh",
  "key34": "3W22MgCXG31RSQbAF8vbtUig7CtPV23tpFNu9k5v1HvvBq9bXVzs4qNJGvQ7oBkgQMtSYi6wcEyuCkU9Mg52E2kr",
  "key35": "39A5zYnzwXb78mykRLT4ZYSKyaL3mfRNYdKgJwEgVUoF9KiGWuVcs1NVfvW6BJQyEYCSoWhmLo8cQwcSfVbHPdPC"
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
