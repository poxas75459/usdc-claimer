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
    "2GJdKHUC7ceLwCULTHFANUmmrNab7jJjaWrPmBzTemC7D3PB86ZB6uDuUZzrzB6ULAwYFmAywUS3gK1HfpkRj3NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528to4QnUhk2ox4AZxRTMtXzwhVExrxupQ9D3pfT2SoEij6XV8iWmNwtxo8AR4yn3Aug5pVfyF1dmSf28svwBQqT",
  "key1": "5WDK5cdHpj3PeYJ83vN3LddG4YSUvFGzsP5cgpBgJQEqEqaEMAvKhY1WKwx6JumUTYG8HqR9JsCu2d7MRJWZTFac",
  "key2": "souAEWobhAzKhi7Bifsc4LtEVKpJUZUW6yWVsKqR1y9HeKb7Anna2xDVMwH3wGu8HLTZDcV5dsLmv5Qoika1t9c",
  "key3": "2BGeuRw3uPX6esvEw5YWqbkBbUNMXepK7w5G8L1VQ64dqrLUNwdpurNRvCEfAECHN3vsST2u9G4caehn8d9Xuwm8",
  "key4": "5x25X6miW3cnEbKo6RxUPBmz37ELQWkdZU2UhbTmNYw96KmpGbAd1pn2NVx5WVgxv6aazyp8JybR8CuaB3xQLxqY",
  "key5": "3uS1Wrna1gd19JKsjuuq5ZiUjhMNciBRZMzMgRgUSGeXzYULvbzeJP6DdkWKujxAxtaqq3Hr48xVqdvS3HX1AvZy",
  "key6": "66T9NBN4iRNU7KteJGDw6GsZGnRTiETpZns3sAfi8jGaTgGaGUbbjX8Uqpyy3rtdXp4Lc3A9RMBZitssTtLK54yq",
  "key7": "2KmDgVuNSaVLt98mX6VepBEpe8zR9mA5SvFnwqHyjwreTyZvxk7oZSnkKbbeL9NLSZScF9AWQ2a19d7FP18Nsz9X",
  "key8": "2FN1NqCx54E1oFCCiPphxvcdgjMkYhHXTmE23WAodmFBZgkEddfqskfzkTSxhFe1XvFUMnDTJQ9LhWrNVGe8LqRf",
  "key9": "3H4LMLipsnA1n9Y3AjzdyZQhDSsFqrUmAWWfcZpQ3mkeQs57nA1AmozkmD23amJZVf6zJ1okbeH8TJjdnQTwfntk",
  "key10": "666o174HAxUrbnci77u55RmsYD3GSZNxuQGGRVyZhZvr1drhW9QBmNxxpC8qsLfUnaqZTGNpEEytGB5ATUcVtC43",
  "key11": "SCg5gQPq7v1PXr4pSGHqMWtpo1XDG9TBNTS6CBLnwYFd52eeAFkTEauFv9Mv4kbSLyf3xvHyRbTV279ce9SFSVd",
  "key12": "5bVVVXz6z5XuPxizTEi2vMXJBrLpeGADFqCuUMKnxymA77k8Kvic3FSQdRygkm8cXLW9g7nVsViZVdQSFqhoYWjG",
  "key13": "5dkwUccKb6jx5G1M6hFoi2e4ptFqM6zAY7SEiFE3QDrTqxVc3c5q4QHBR9nimLeXPkW9nmLoPQoMVHX1RJTkXRnY",
  "key14": "3DQMMxnbYoFa7CVrFrJnBt7fDYFHFDMtUFPGSdfcc8Z55CEns3gjsKuvgQrZK4W1AiU3KkFMSWx7iWLoEtiKpqvC",
  "key15": "3rT1X7ZiGkfWX4ezmpnCs7eQCRkUWcpLya6pErFTzjwGhf3Ai3MatAdQqqDu9oCcJJxuXYGN6Ee7qFeM3eSV8V2s",
  "key16": "3BNamxUXgXURWGnGZrdoXK5ehRgc8BkHs6yR5tN6bPvpL98WMKjLyKyP8vhPg4PYWodg5NL6uNpzXPaFZ21Sw3eN",
  "key17": "3RTbzXfraNNpcstGwVRRYf7jhCbkkhmEUQXidjd5Usmh5mcyGUm39AAZRQrxiouK9jHvLrDUFTrhhhDcSqz3Jdwb",
  "key18": "4DXTtP5KEtWoHifG2dz2MMnwRc1SipeLE1BDyuYrTPjGpZS3pUQxrsrP8jZBTvCdY9V3E5SxxYb5HncXd7w7L6Ls",
  "key19": "2Dc2NQp3aFS43XPAaxUdC7W2rQTWTCvYnzw9qjpV7kWEWBFZjqxcFqbGgzAjWQ3BP4ta5fHz5uv8USBH5DehuvcP",
  "key20": "4pmrr69bLaJky43nWJjLDTcHxmKoYLFMZrRzfu37kiCQYnXgviKYxXZ23YG3R647q9hRzK6diMtLtRmvzevcuQGi",
  "key21": "qKfGGzNyd3tidZJBQktKE7zx1byxL4YEMUzDJA2ioC9Rg8DFuiaiRRQHxjBt8R8TmWTEevxA7JHEWBCsVfPgwDJ",
  "key22": "3gruPY1VhjDSnyqbrLpQN1czsd8PqrC6QobxRcH3JFPtkNgvkN8ic8yvvBQhpFdRKPGmzMMcG7i3YPD32id3741p",
  "key23": "4WNMaf6CZACtqJcaVVxsJa15EcYhumZt4UCL3my8TN7VWPeWCRqFY8Z8oBRHT4eXjNUPgnaiv6bcAsiwP6GvEwz4",
  "key24": "sKZGXDgzRPdj45Yt2J3cnXVCCwfd4KLCNDvxtYxxNZDYywF7Qz4B9FLVA8QYMcsb2CfkFHatpKfsQjxZUNVyEWQ",
  "key25": "5DDXg9MLHaxqmD4oFSeY4U6vpZkd2aKvnecHazRuLE66e7QfkYqijAnNNmrE83cCD7ixagJU443UZDKTD5ziPU6E",
  "key26": "4NTv6MqoTMpaD6g7C3U9xgHWGQBPdzWFraZPFFafBQyimTnHSiaa6NDTTBPzhun2SZqfhBJzy7r1BcC5LJzdMAZp",
  "key27": "5uuNba4siRerJg3ebQJWSJeZBKqaYc6wXNzVx5A1U74BaEGM4s4h3ryP2635Jo3XLU2oRMU7bAySBAZaMf3axk1H",
  "key28": "63MWhns8sMDMo18x6MevEa2CogW9J1JFhSMoxDagfS1aKZuqWt56MYkofh3o8FVas2EUht4ztwonaYcXPz9wxZyG",
  "key29": "SF969x2Bn1Fkt1iust5guX2zwmwwCQzs1WiSeerXzvA8UJubJcmdkFs23VwUXcNToMQvSr2kQoZdPwXeTLNwmDC",
  "key30": "WxQ71X5hVDPyvmGt7zx2cEVST7obY5qthjPicVQULbSjpmdjJvRKSQMx4er66TqQJU62YVZnHj5jbukxf9sjAUt",
  "key31": "3MFRWtZrs3Cr6AePAhqBHtjtfiEyJHnstAwDRtUgBS2zEfMYeqXvD7R5TVnnwCmYjdErmZNdRNu2xeZnLjkSTwhB",
  "key32": "2ei1c6Pyzk4CBKtEHzK941gGBC4BYJHoxpRek9ZpyurMvATWyiDYiMTgk5MguBQ6j2Vm67o3Nhj7rVdqeEDys2Xk",
  "key33": "2xAFzANdZb39Y2r92rJ3bwCdfom8KuzH7UwbFqGw5ciafRAe3c7TiwDPyFHrHbH5NUHvr5BHCfaa2WLkSVx3MKgL",
  "key34": "5Afa4x4FUpggFTJ4acbgmubpyQets7QXAWBuBadNRg3gTXhUtgpUyZBD3CkwwnhQ9XaLmNjvXsUbC3QpZXR9YJNm",
  "key35": "4mBN6S9TfRbLYBWUSwrbK4X41t7Z9Fa1zCwM8PvFjLv22rvmfdzPdjh25HovPfPSkpihXQzxZN7Vi2XvSuXTVkiK"
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
