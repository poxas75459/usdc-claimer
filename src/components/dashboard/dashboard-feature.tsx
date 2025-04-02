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
    "iQFh7nr6cU3W5zzFmdcXKDhbJkVYCzqBom7aznWYs71w1EkVRiNTv3JTVRLf8vsgEGhSKcq4wm4awoyNKy6TX8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNrBeMsYKz6xQwrSp91WENKaBZSF2ceYXjYngohuaQaJE8Cfpj62u5EiyBV7XMuAwJPew1TSrU6N1XxHhGVj4rQ",
  "key1": "5UNbbyR3NXJfnsKG9SXEuLTQrqSTj5FR4qs9jjJno21SA3XyVSrvTwxNK2UHhwggVjTWzykh5NHtNEKPezcEZd5T",
  "key2": "36aXwBFanfx8qDtCkdK6bXDUVUb8hCr9K3Yoc6jDGLWRe1ryyEw8t7SXswT8HGiSEiBdnvnNYXzKKNH5uWvNULfW",
  "key3": "52CwVYU2jmRLHvVxNwaXZoRtoaurfphrrtxfkVRorgxBM2mBNzgHrddDvJ7Whcmq5bZHRsujYmniuryWfxpEr9S3",
  "key4": "3C9QRRmrcRM6Hvw9uQZEPfwjJb7muk9aMEiXnTLXxS7wSwqXPAVHqk65oNUuFsnhVvHWQ66CjPZXpCByyqFMM9dj",
  "key5": "2EGjrBYe2yLZK7RQdR7pWEMy74AmkrCYe5pN6xeTffjqoeQduyhuTbo195yCwyCtbGjtpvdCsnwfcDSDL1pvwSh8",
  "key6": "26wia67o59rrbmLQ1jzXYP3gut8a3ewa3PcPD4hLTRSGUJNhc4ZtANz5kTdgxXcqPTnfwiTPtxdc52aruLsz2Hdz",
  "key7": "2JHAsSTYfe26rPQttg3E2bhFtH5irxdT8KBgipDAhv3M39n9jAiXDidx4QfU4mWBELnwPvxAnEvYGZRA8a6dscd2",
  "key8": "2vuaARPdpFJHoqZeCegcT7XVDSRHLmk5cvpVEPLapozXakrGvaJzagcdafMcuydpZb6u2JxbCvPDmZbtBpUzg4yX",
  "key9": "4x2MjvEYtVBGDpEYC8JG5Smgcp5L7tw6sD4kzNNxX1cpsuw4yb1nWNokqipigVyte3PYD9Lbq7zFes2tX6Y9W8Qs",
  "key10": "WDFZx3o4YmpqCLLwa5Ph641MyHkEymUHSjK1qEmEr3pnVPo2dRdzPcrSHKLJS4uXerbYH2HwCaNpo7WNnttWmjN",
  "key11": "3bwKJNJCvJQe64TNyEU9P6JjRUf1wtefUEZsNZXP8Wo6Ebf53Y8Szw5zNfjAzAM1t1iTxRfsayy8ENC9JgG2MboC",
  "key12": "mapRvCVCaWV29gmEmEYgVFMw1B6yLj9VzbH5N4MGuGVLcbHFsj7eCT76V7ZxSy6h4YGywfSKGHZPPhxeAgWFojM",
  "key13": "8RoC3HMvY8napvvgQo3uREgaRHuNVHF7kLeYP5H9JdNuJmZ5TvY8HhP6Mh93mcJPMrs2JB6nkVceiFbFrJP19mm",
  "key14": "5vh3N4o9fFftmqt1E9j2cym54msV4nug4QNvDXofBSTH2HRDEaVHsRE3xT6HeVm1d3DEJMXZz4RL1xbWym2287W9",
  "key15": "5JBkoG3zVYrRnPV623Za845Cp1EQ1dyRviiaHRyAWjxP784k4DwFi1R3WmXS62a151pHezTaJmMFjbQUM6CZkJPT",
  "key16": "3sQMySyuUdEYiPhMTVnJFZ6FxTTywEJYCNyYywfFjhr9hqSPURUWH1646zmB4aPCsFYYJVKk3y38gu89H6xzSs7b",
  "key17": "2CaRy73LCown5bve6QpHpStvZWeQFTcYXvm5NMnfhkm1EM5LRnw17hwr5QY7zPZMEwjC72dHwn9FUVXFwJvMesQo",
  "key18": "624ctXX3YRHGmxGHgKauU5K6ZqNwQGPwRqnzodS4VY7diSdd2XssvUgswCwZjGGgJmrwTETDSajjyHLxgUKDSRYB",
  "key19": "2E3JR2ia1iBK2X9E3hnFUciyW3tXcpaoEzBNc1gcsWz5p5r2RdAH2GGD6RWKrpqUU42HHZY29p7qtD2ryFLqNtqM",
  "key20": "27mwPdN2byyyv4vNwiD2v9adgJxosgumq3MBT7sZ1YZQk2j16Edz1snynhyzF6FPLza1o4rT4aSbfH2Ttp7pJd16",
  "key21": "E9ZXHGZcpw4Hmc7zit1ztyh93gbScYUA16bKTPMSDWXQFvbUsQCXepziztVyhpK8XXkK9DoohZPnzeQBakNH8G6",
  "key22": "59GTpEKAdzRKTCJKgpZt1UobMkNd3sw9fg32L5TJ84rtkUZh3UkCHBiqhbVQgbU45Dd5Dud8zearNAfSsECrXt3F",
  "key23": "67MpkvEqxJkHUdqzSPJQWCUEwFmFadtqJ3v6Ut5LhLuKTpzFET2NqPBZb5NFBktduVQGiAobD77dWTQtLJaWeM4Z",
  "key24": "2tLX9w8umR7wxzwiJXkVhZAPhftADNgjUewCyE6xcL2Az36DDfur8KReJfZ3RViDvSd6ma93xFmhgypEueZ3W26Z",
  "key25": "4qf4MXnKgQg4MbkhSyTCP3UamW7xQUL6yuh2FJAnUcvpHW63xaKgc8y7asSTuPv8haMK4FouQvmcvzjdAaJuTdLH",
  "key26": "5uABwVv4SJKxhTbmFMeeM3FKjs6ZCJntmkRS2LK1dWfKzaM4Q9apA6ioVzz5rN8XuRoYhNtpgCe4ETMAak52dyuz",
  "key27": "5vcRfpbWbcqRd6TjKoLHoZE1i5ecLeHwacvb2M3Fk4zgJQ2ay8sbsmLxB9CyhVQ1yDQkLR9XskDunPjKM5NRHvqa",
  "key28": "53kF75XyJdoxJS4AgNRbM3V71EooZ6VKAGBUbVoCCngvnEUxaZBZD9zCuiTFmbdpLGpKuND5jaaffSBN16gkY5uz",
  "key29": "K7wsh3dhdcyiNAsWUPhQcgn7oUhKHmhTeXD4UA26XqUJmMgb4qxbJsNc4qUdofVs87KEjBHhbWoVS7MNKaVZhji",
  "key30": "3SHBvQSWspn1yHsRnF3FhnxdjBKX9aSMB3G3fxUsoZTMxeP6hyzzAFvFD6ZUHxAtfVwwkgPancqF2f7pRx1XvrLG",
  "key31": "5GZwNhroSPGnja8u9ddtNjBTQP1gCBAr1BLBuSW4prbuzdArg1aNV4JKfEBvo4jkaJArfPhzqdSHCzTq6pW9CeEv",
  "key32": "3BEwufsvF9bCx4awE8df4pjkoCNLPwDrtp1xWE2o8BtsvrG4UaJpHWoSK88gDbBqjBQryV4tcwJu18URGBwWRT7Y",
  "key33": "4JH9TpdRLY8EMyRo9VMUg1JKvy9mxu1jfr22eVzuKwJye8dtQwnTywYJPk9bzUzLrv7b5iXM4XnPwSK3UW4hcScv",
  "key34": "55Ta5HdP6MVdpr31sx5LLZ6pV7RFr81V8ceaxph6GgFSFNdgAqB1GLSJbiekh2EPKoKbw4FUC24FzVdkGChWzXbC",
  "key35": "4TimRfiYzc7ocZVf3JQ5SW5fUYb8bkagpGPGq6ijPSTRStV2Rh8j1wGiMCDYpo2cGjnmcgHc7SMg2QqjwEJTdRN2",
  "key36": "5LDjmJVD83mrYBvFVoeXr8GbYo4JWYFePCWkM9DeTJ7kywSBKB7xSgPTf6jGRDGcT193jReRc7HvFoTX8TUiA6xL",
  "key37": "3n7Qk2DVnXQAeTEbTzbYkifGsYLW5GbWfugYti2EM1abpcCqKuB4gPcnEhfitiZExLT7EZS5RETohxqidGfNAB4y",
  "key38": "4NSAh8SRhWHDEbu8CkYqtizxeh8JgV4oh7vTv6ME4sXjSkTvQyoUUmn73L6TtBZUEyAa3RtLK3jB7S4k5RczC6Fw",
  "key39": "E81ANLMcw4YWgqJjm9oqbbZyzYtUD19SNSspzc19wg67LvACdhGwtC7ziPyXPv6VpFtNwBJzhB75oPnw5Y8H1Si",
  "key40": "3XNh35QQir3XYa6eBJYrcK5zXSqkcBxuewiwMzBVHQJhiEa4P1Z7M7FmHLyU7tGoHBwfpYXbYBPXsyu5ufLLp4sH",
  "key41": "Y1ZzhMuMZDNY2ZMd56a1Z7sUy7EYDFyPbrTcgvkjEPJZZNLtpiAZmJPxjrojaooNtJ6SEnCCQDd3GR5hCH9rFTA",
  "key42": "52dwhJRkPJCm1oVRiPmBjTH5CMJM5YiCBtx94rxcKP6dm2WiFGSb2bgjoTmKbT6VW4oi4GLnzkr1ARDEkCTSmi4P",
  "key43": "4s2PVZbSoHEeZgSr4zJCQs2DRBYVkjvBXPt2LvDarkv2mzYixXBFFJdqnUuaqjhe4MicRVNzkf2gHsUvM9CFE5yw",
  "key44": "4HNmMj4HKqvfUtmF7sWK7uT3tqZMxruZ9agbBz2snGH1BQX2Th91c8NzqrbkXTmbMcWby8MG5En32SuyeMFGVqVT",
  "key45": "5frwnZ9N5nSARLcNbVVXxHu4CaWVEYWHV4JyyKj48w53QXnJs9Yju7y6hD4Dt6LuaJCfXKay9VQRMyfbBUx6jgk3",
  "key46": "35na12sh8GZV8jjQUWnECjeLcsLhqofdBZDjdzrEBTLnmzru5gpaVgccCQzyHykCBkvVmJL4mYHzLTPuL1UXeSb7",
  "key47": "rT88x9FonUVRvvTXqAef5Ho5Ndqy9fRYGHq5wSoocpsvvbaNCgPaQ6DunjztTFBAX5oSpjPcerC1njxacTUcbSv",
  "key48": "ERGAJKQQrKju8C7J7b17fgEDeNcK1hx4gLXhYb3YSVQ7qSCCFJZ9gsYvE4jjaEcZ6HnaKhMd9qX2G2gMGUriSns",
  "key49": "2BCdrzjtRXsBN4XVLZCcH7CBE7PiXgZgx4RYoxauK6tPi82J89sg5cyGHn6NSVcgaPHd72U9VS2LnZCCpDCmwqM1"
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
