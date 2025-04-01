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
    "24a14Vnap64XjWDQXgsoZfmiCmWZUMjJ9rSESkdmBeSiAkNUFqzpMxqf5UFqWiodegbvTQb56GJrS9rwS5GYmyHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQUkNSuW9G5XdzpxG37BFhJ4BrhSJzVgpLQHBAeY326ZMzkEhymaJsT9NvWnrVTdi6js6er3hGayepxj8f47NJ4",
  "key1": "2XCzFUANz5kpFsbgA9wZmRhDDxQZU2rJ2F7GhXoqH8Ly96PvLHVpWcsRRtt48jGrJS7rrTPSBaaCoaPPC7ptnJag",
  "key2": "G3b1LTgJFY6SZmsgrbjcQKhufR1U7Aeaj4h6qY8gZJ5TRcHYbDP1UW1pWQ2jaPLEGNLQJcCDa6sGUtnj3tXAVnm",
  "key3": "61VGKUnPq8ZJqtQRxnM2JcLc2CXUFsAQxXHBqDZyKa8nBk7Ph8vTjv46KqqvABnxWhQSyLRdna1DiWgiHvA7n9G2",
  "key4": "5rSq5QcTDZQLp7dmLqg5FJttPM5y7tRgoQriy6WUDF2EG99nK1JKzfEz5aa3vodFDRr8TQgPTpHwY1sHhUpZVVoa",
  "key5": "31prcXnNbxNnW8vXPWHWTQEXDud61dQd7RMJBTkV9EanyuH4PMYyY8xUKn4iVmdo3fD4qVo7yrp5kDHSeQ9GW62Q",
  "key6": "5dvZmfsvU5E9XUjdKek4vwETshVyBBwm1zWqPCdaY3P3s5yw4YBWd1XapEDCYw7ABiPu9MCuUQht6J6vtLEVKNoX",
  "key7": "DncB8RJ45sLDtgq4VGi2wGQweTRW8SPYmfgXrrvggYtKcCRTDkZ8mDUmWWJSoZ87LZMg5tso4RLLTit7MRHwb7i",
  "key8": "4n6iQUwSNK1t9LjeEGXm9SwUYdEQNwJj14koxLRR8PHYtaATNpePB6qFrUAUG8kqooh9hw6g7ihi5f8pHvk3PnRd",
  "key9": "ZVYc3uiCDayzCgq2EsoBhD22iKiC4X1yH9wDRdQ2xMokaWm5NuJM4En4sFv7m9Qx7vq3cnkcaqmX26SgtgnhM8N",
  "key10": "33MZwCmPxadP1QjchqY4X4bVapRqhySpLbcvKfjX1wrBm9MjiZLNMXFHY29V7sC1JXw95FstAEbmpRTvUiSEdfD",
  "key11": "3W4iYfiEdTPBq9FZBy1JQbfspGgsgDBxbkgmcDwGMBq4CAf59r71xJuSzSx3r9k7nP5wq9YN2wCn1iguu8u8MWUz",
  "key12": "3o7hnAhru3HjBYxwXRuMZYrmmfGELEaY9FpvRBxZnVHbA8KjSjvoAjoH2HS2p9dWLGP4BmBPkv7i9MR1k1on1mPh",
  "key13": "61HMGjSkjKDXXoqhPDccYb35JiikaKXsJzLiZ8WGbTQHnoU67D8MY9v24hqFP53VdaWgu34tDQPAn1mtbeo7dZWC",
  "key14": "2VYfHyA6kDXe7NT3uec3yMU4TRhJAVH3yGLQAgyvgdn2YxHozrznHdeaqHHmSEEeg2pJzwdPsj99UdBb917G2t6S",
  "key15": "5149f4zQ21LA1mGhE3XbKNXH1hyoEc489dCKJrX6BmSmKnhHhmBdMARDafxWrs7Eyx9WB8gaJjJHHXp1vfQh89Qj",
  "key16": "44EvmZJbHZZ9qz2cCNStqEdA6EtznmE7PhdQm8YWtxGrN47fR3cCXGcJ1rK46TQZEspniP5pctLZTjM867L1LnMj",
  "key17": "4ZSvJcXH72eHXwMQkbwoiJ11KMRRoPAYEqQki47DRAHKGWwgkXGEJS1H1wMA3kz8wxhfUU278pzAnzMSN9GKFki7",
  "key18": "3CcJhuYmHfcVATzBviCuokDJSwQNdj563ig58v2fwMjNCkHDLi8FS5CUqKkZ6WkioSMHQ6GfCmgGycFk6Xb9HZBp",
  "key19": "2x239HsWrYMWZwdn6jGjJWwCdq6eS4wg97bo1hMb8VgBiUn4uk8rqe6KpPqhhZTMWCQt1C1RMeWGv2FBLkBDfUfB",
  "key20": "2XSfHketUXKrYtHURzKhwv2XejuWT92kBUbKHtQ2pL3daYXsZuYB6utWc2e9XshzQQxLD4p9LdwjfnMAahoAeCrR",
  "key21": "3acJWibwCM61ziTUGZWwsdTLf7DFPnL9H65bsGjgJU2EGkMASagZW7xAZzG4bn7mePKktWhQbHYAWaT3V7SmfxXt",
  "key22": "4XL22RRwoPemAnV9VY4Q8iRHbJN3Qo8RHBT7iLK7ixLU5Aig65E9UzNTfVAuvgRYyhHZJt2BdznvXUuQsxmZxqat",
  "key23": "PJ2C9UdJ4jX6H1bidWEUpqCVt3NRMUuN57UqGtMuyNxSYS5xmxxaWjBne6e1WevfrGvJknYQRxjtwEjUAwH4Yrt",
  "key24": "25HFwGQUT6x7D6yiMtbjvJumbkssB1hZ8sEGd1Tcxs6EB1AxXK7geXzo12Ut3kPHwfkWKfyLqdkWkfi5APj5crC5",
  "key25": "ZcCwwmiAE7DpAqf5M6yQfJ17zgAKXwWxCAn1skwBn3AYv6zkR1Tf8RWiUJog84D7YVufpyTukva7PoDtuB6xvtm",
  "key26": "2BLzbWxAUkQjCt9UWwvHA2aoJYTDvk3SgYHJcikNdmovLdTHPbGYVQsfaX4pa7xLpaJjrGVZ6VNiKGZwMWLstvrG",
  "key27": "455pRU5yiS7xg9AZAgSFepd4A8vPVkWFfof6GH8NxgnuZEZc9nzLJ2je5mvLKQq867X7VBCLVDte6wHibM4uEaPB",
  "key28": "WndPDRzkNbwBV7mfSRjiCVagDmN2pUMZwEBAj1XyJknVioZ8NhCWo8aUu4UNH7Aathns2dq1b6mmoJUw2qq4FhP",
  "key29": "3H3U6Wje8gpWLWpEEjejU7coCyMNrBTuyJc59m5ajRJqgidC2a9DrzJypDknpjR95exsr5TzEaAowEggXaii8MaW",
  "key30": "Wojfkm2CsHb2EpPGA89ZqsY3hkfZstb7eFRPwjyBkoyEu4NEQm1d3TqawcScoj539n9NpbEjvmYbbJV5YdnCxdf",
  "key31": "3cYGWzx9mFbcrnkNE5kvfkGSbKQYtnNteRVYdK4mxvgDTkD7bKqcYJ7aCfP1ZSrXpjZk2H6fP2VxKUdXni71Spyo",
  "key32": "5zcZgedJ4tLdDKKkHRGeJA1kmGmY5rXKBfLbPRKs46ASo4JWL1vkqYiT6ndy3xohSAnwdtMHbjjbip47nyqQR65v",
  "key33": "5pMW8cBD4s5oMWRF3r4yaW16W7Wu2PmFrauCdCMoiTFiR3Sd1cNfXCwmT6iZUSjQqFcZZhSjg2CUfsXTqjes3w79",
  "key34": "32zA3NFQA39rwmpgF6nh5FHDsTQgjEhYNxrmPJ434tYgMYwaYUeSTNJzbs1Agc2xcWycKvLuYynLyyzDXSY6vvQy",
  "key35": "4S4yJxksxDud9x46jKT8VCfD5MQYJXXUucSyk2cDXbEtYfdkKqXGChtMhrHGPqpaLsSjPNJvCEcRTF4EBm28C17v",
  "key36": "4VcUTYjzvWa5BTEzUjhzyx8wYYfNuRM1uDSJZUDJts1DUgZrNUDTREu27GrCvMCgS8tmnHqBaHam2LVRQHpZurtt",
  "key37": "2EcQnDrxpssWjAeH2sHrVbKUpHcvea868A8zW6wfcXx9ySAVxHHhUfLTts7Bjx7X1pVgGrfu77yZFU82MUkw5UKu",
  "key38": "4rfZbeeZkERYsyzkVDcJxCGyMuk2mNuXdU8uB8uySTDpwFd8pgHW2h4BitMrJBqNEAAuSo3sBaN1btLUT7LiTVgo",
  "key39": "32BuKBfsagL3XfJ3kuWhdmC3AXp8RB6FWRSBApMaiYZiKhPfHLf8pKPMysvAbCkRZEPcKRkCixvCNwrmAqxubLCp",
  "key40": "25Xxzf9rAGsCQprKYWZSDgv6kMndPNgu2dMr2SV9GAndLTWQVdB85S1tMHZ5brBAz663J9hMufYLgugpajhv7xcf",
  "key41": "kJqS2gi7v85yuPQXXrvEQpHrD2BzmHee9rRzjDfTFRf4tyCNyYzVZxwK4FBuKnJ7cGS1JKxf8MLTXYchLYoDD6H",
  "key42": "4omXsuGaoQ5cw1GQS7svVTYg9moEts5i6vJeKcTj47PDAcsrMvNYDJkNAc5UyQKbEafsJ7hoUT5fXfexBP1Up2K8",
  "key43": "4pW8sJ5vMVmAoRC7aknmNqyhZwsZqn5A5bYHYDeH8gJVM449WGbmRfgoPU5NsKeJPcfwFoFq9qkHtkvhUh4PPrjb",
  "key44": "4efrYfECFDvPmXbwUFRZh9uSG1pBgqTW759MzfNKxGyxR5xVV132B4sEecBwxDT97P5GL9HuBnEpiG2XNpKXHka9",
  "key45": "46ebwz1qCqq8E66SJPxBxp1K7qwh6rwuVp2tNVTQwyQoKxLaDzEjrhVV9otCwRWyX6vVBVhWaxNcQDQhkUJqSVdE",
  "key46": "5j4qiXKQjGHYPVZ4xnbxTRHkRAWqGwjyVMvo3gMnyLtmZFAkw7CEi7PWycjqXLonzXswm6YQGa59Pt88aj9gwKtU",
  "key47": "5cKUHpvjTAyA5ZpRiw5vE7Cfr8zqEz5MAcCaTDCPfyAZRv4VPB17zYY6T6Edne1JQiu3pdHUHy3vPr7PAWCr2nD5"
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
