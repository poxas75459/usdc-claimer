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
    "5BU6EiohXi4hNBTY4W9frvTXv23X3zLh9JFmoGTwadVbdrN5U3iy7j3Aw1TpUUARFx3wzeXHjeBoDubtH7scNuyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHpbiPxAx4KhaDEeGkJFz3u5KJaQSdejbJrBZkEsrovESvYp4eCRcxX8cG4JZwVQhshkDDQ5UmuxcdKHTEcB1Uv",
  "key1": "4GwFwnq6hRQcUtWW3dRgQ7nexMDdVvTm7k634pGNisS1Qtkis5GRtDr6zB36BcwSFP1tho4wV4eGS1nMnJa8pUYS",
  "key2": "P1mu3JxuuuVsh6TcGZPfA1sr2GSD2Qzv6o1VuCRz69DGuE6LYwvQkFBDb4RGt8fy8prqqKHchgLVDMBzjSUgkfR",
  "key3": "bcFpyUYHqgFCoRj4xV5qPtpHANVv296uEh3eWoqZEo3GkuWdVnwr55ioFJRELyLA42MSsp7b5oFqy1XBdihz39s",
  "key4": "4CGD2wR3VCaPUYZFpsFF355QK4hXtRjtBERU8E64tKUwmvgaxQ9ob3sYPbjgGp2H86VgYbK6YWP2AfWhXjGyrC9A",
  "key5": "5yeqt51XWbgKNiCvxQakJaNvq78Se56eZeeY3UBQg1AiQ2vvH1eJjSX19KT22MLypmtdPFLGEmA1KfZQ9ntozYG7",
  "key6": "2rH1We5ZtXNaET1DT1iz7AkQ5rJMXsemQC5a5sFxcmZdKxL71hw7Kf5Ltejp6dj88zeYqYUEqsREJuhLk6Fktxrv",
  "key7": "52NQCihpaUudc1UPDQ2MAiXtQQyt12CkS4UqpuXeKVhNZsmBnmsJJZ3Z6GsZtpzCVpTXQqkbhDf5VKLPTUjhgXwo",
  "key8": "4B1oxpyAfnEyYbGuM2Kj3FxF5Lo95pHb9G7wxZPPyapoBEubp3jVJGQmGnfTcMU1Didd49s5GpbzXW4pmCPL2Ach",
  "key9": "3skwucQ47adweijoSqoiMunNyFqarugXPd8WmRyj8qqvNWh8zWXRHZq3tHjV8MYAtFJnbCWJVgL3QFgQ4sQKBA7Z",
  "key10": "2Svy4on7xBS1ox6J3Wyn6Xc1yofxyCq7wNzadknHneZ9dV6UCtbXgPffG42w9VXhSRyQy5ASg1Fm735VrwCc8NnV",
  "key11": "53uZinLmqK8SoqcBC5GjeiFnCY36dcJNmZv5ahJBDCiz8HicYM9Qo5Q6Y5BZcChhieGHN4CGBwEDwUVPzPEMzYkL",
  "key12": "4vKHE8AbLj7Urx3tmFsJnsdLT111htPFK6QGKFs9dKiDphQcS25EWCwXJD8f2Bg4he6dN9QAEDsgRGChnw7utXVs",
  "key13": "5AP9yzvmuGmevEELC7fyphy96C6RRdrnnYBLtbjLbFoU2esiDoq5PzKEWUWhyf9mbBBs4bp4wNCUQsGEB9v8uMY6",
  "key14": "52Gw9PbnbqquBEdYpuo2NQTQfkiZAjAdoFXh4neJzyVTBrWcNQnnRw9XErLMxmHMPUuYr8uCVe7eytpmHa1J7Peu",
  "key15": "65hz4ubeNWrWxwV899qkRorU87juDa7tVFXdHRChGNohuCB3YPgVyqao9f6fpqSGkS94tdN74KfYHNDzAffddQHy",
  "key16": "4R8RoL81EBT7XmUWkFDQYVb2Y7dcgm8qrFsNYaNHY4NPPqanBEieXxKLEnwcZTMPWtxAcSAk7RtnPSPFFcBsjzej",
  "key17": "5oSvj9mgojmSy2cR9G9wktwem9X7t2xHAANQbLGorBPz2B4tppjE9XQ5bgBzxAeShcBtasobNSdU5UzSJtqoyFxA",
  "key18": "2dTY4mPH8jhEn4iqPVeQbCvepyJPFc6N3FKP6JeQEfksSSXptssQEqoNHfDf37PSH6wisdLW8StoMC6zDKkaT2wN",
  "key19": "3FTYgfJFA1vskiW5ngXiWDQGwKMLGWHz34koLwzcQNaJMgGzS3fuckuws7SoUKvQG5vxmpvg92ceE2kAUXnyyY7W",
  "key20": "2mRxMdba7U5XN6mwRU9jHxxP6M25mLVafECz1ycVtaWZGSS21RXtjMPxLBi2F2rBsYneTXX4q35wyjC8kQogbJxG",
  "key21": "5jdL2b46MkAnaDJ4aYDEn9d2ELdv3Yf1q6PU5Ba8G1s3mcTjF9v5jzXZA3fF3RRbUED9abgKxtf5HbaFJhAADfUs",
  "key22": "2m6GZLqYo3nJhf6tEDKXrvpPgrBbfgmqNvLBpxhVzK28J3BE3fBfJrDwPvhsAmwRrpm2iUJd9RFUxKhRWWvUvHBt",
  "key23": "3comphWEEiMrhkPLPcX7ZCcBvmnJas78JFzwqfLJ3L5x44i6rnV11SP2yC1K7kjw3baTNHonjMrXYQcaCHfV9cRz",
  "key24": "4YByuhWWTLS64wHchuKEpPtLR6yL5k3HZcfRuCfmbZDcBjhyzECj7tMQNu5Cut5U5Z28jYY17zctxJipWADy8Sbm",
  "key25": "5yZBzrogbH5cMq9rJtiDzfz2gg3n5sATRwYiLf4bgDbmKJKrZDDqeaYDhRsEn2mHfaoD4U6otZXJA3aJAovLJ6Xo"
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
