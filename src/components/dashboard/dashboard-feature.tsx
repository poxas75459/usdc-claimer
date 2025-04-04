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
    "2jAjrcKZUzNbw54iXaAhXDqeySNAGbrZ1FDHbKMB7oqmjVMNchzGgVLtLy4ue1aXPo5HLBFPxiUUxB1rS9Fd2nkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYVVQkq3ppxQ7w6kcjkdnr8UbsR3BcFbqHczdu6nnk2Ze35FPzXAborTHwQKsLH6XRQAQbEoD7F5qtNWNzGBYC7",
  "key1": "4zGUEK7bsp3xbLyiwKaQJRfLQi7iXAr5EcWrAECNYaHaDDJ9DRkFoqtqGyrhtWHu7Mo8XUWgusDxLpFfNwYFsqng",
  "key2": "4dyW28PhbrgLLTxBvY5BVd1DLSWPmjqprEhrjyfRNZ1mARqnoVwEuY8bxYVjRh3QW7wr8boTthdpBEMiYkhjJhv1",
  "key3": "3RWBKwQqefwtoVdrpws6WxWvVeyNUKEvEM2u3Ufg1QRsFc5xgY5ZLK1aDWw1eCzGLbYkmCRVQ6VWv1PDLw24wQ3a",
  "key4": "4xifH9KVB1xfck62Qnk9w3T7JY4WpSdfFYdRUyRdL8r9TZwrw8aVek9Lpb72oEvrEvSU7amsc2Qqzuvm3XEZAhws",
  "key5": "4Lo9UM6UFL4FQLm7gyxK6rcY9kBEnYTFwHykQEYXgUAbqJF6FHzwhvPtwPRS5K3RZ38MJ3kLcDe5Pxi2zANBJUp5",
  "key6": "21r1wd7HvZyMBN1N4KV3Yp91QUdR83FmKC4AhGiXLBLZf27BiBkvZXfB2LoiWex9rrenR8Ebk8jYqju5Ky1rmqiL",
  "key7": "4CCWyvDFGX5isTK9okcqKNCkxfoM3QJiLiWtcQurgmQjTHhuayLTZcR2rCEUZQiQP6UAWSjdAbV4XXLcWXWtPa6J",
  "key8": "5QxcGAodq1iUTuXquRKGx5kmwTc17ZSQDigyoYPS7w6XK2vDinweeoxLzNgSq7Xei3XQVG6uMub5N9FmybM8Sxd4",
  "key9": "4ieriKuciZNEieher6882Bvx4MeXQn5sw8cLVk8978wFdmKSnotJLRSGvfJAgTTaQJFCfiFxyuv3UMGNPuE2y1uK",
  "key10": "AibXP1A9dD3KzRC5gjqzKR42cq5JGPdibQRh6paP7cE36JC5Vx5CiR2gtZpAvrDhk7cBAwZ9V55ndQmJW42Yr8d",
  "key11": "3Wxpp1E9bhsDggULguKFkadsqshomzdpcFrhfzQeWqcMnG49MTXv9R6bjU8yYaB3MVk32wApiTbL867imPvuJzt",
  "key12": "2YMuEHbccpfiEJTbuYPJSSxST8LpKsyQBNKbyyEtMT52ZTsicHzgCauUFaZUy1szhfoanWPVQwpYex9QGD2oouz6",
  "key13": "23cwURuWDb9d17nrpaXAiU9ZtRk5bycBVqtVNtYKLDyfokzPfBjs9vFSvw5QpS1vGyh7maYqgUHYNgoQBqvSyWHh",
  "key14": "4dt19zkcowB8k53kmsLubd1SH7eihGfXt7pCf74m1ek3ckmrAATksjx4Hez5gX9Rqciyu9zzWTaeqKVsEEwBQf2E",
  "key15": "CRXPwy3L5vx84h4AWJtTWUwiQfY8q3bFxBf7FY2f4FngAwmdLU1mSMt98d8A7FVgHGeW47JP6WjV6T19EzxGnMq",
  "key16": "KaRHWQ2jPNB72HkZH1tuSzSehLMkHSCcfspE3HUHVZmeHjS8XLqQSPMnGJxjs4FbiKQAGWdzj9dhx19N5kZMzEm",
  "key17": "4jSmSMK1ZS7T59VsMHKBH5NiXmReXHAGxJ8ARez8S8LjsxKLvSXXp1zJpSiGFpK8146HDXqm491nHAuTq5GRGfA3",
  "key18": "JzWgyWhRp5nD6DHSFLc6FnLT8jit7SGSgipn39GNeyXxvb5ouJHgRXvc1ekzZft6o41xGYu3fBw5Xoto6yrG659",
  "key19": "61hDUXLhevKbh56hJSBXiY4eTg8vazZVzrCyowjcr5SuF88WGnqBG2U2H9yBk3k7vSJ8sPFPWiUf71T92VTaXTPb",
  "key20": "3jrqBUtEfCwKr71EAtmqrg4ZRHcgApzQuQy8sooe38MZ5ByNAgZNBGEUyG74Pte95tunpVsS52oQR7B5aqepMSSj",
  "key21": "3Hu2rrtiFRSm8gPVXoiGAzGg2xjSwqPdhmaMVUPrFWVuCXZZpiPyVxgczZaG5jHvNFbHtNW36xYjCaMh9Xe3RCS9",
  "key22": "5M4GE6KmSDRbPF3QHHpcWj4s1w2DXThJN2Ev3YYGpdUX6ceNJ8hZRJU3NKXG6FzW32voreuCZhPxgPn99sgGCChM",
  "key23": "5P3ekMsyitj7fuw8gSYE9ESrqmPimxDLtCCybxqtpNen3Yvp7VXysFQrjmXBkvEM2FrX7934oXKCMwn1or34ncjg",
  "key24": "uuJivaJDmbtPNGUYfNd5jbv2FTVFeK5wCWHLfS39MgHab1fXdgWJG73xBidfeVrp1r5nuZrkxDFTUixehr3y2Ao",
  "key25": "42Z9opziKCYPkLkyp4c4cwdeJjPVjhpYAgNwJ5LEfU1EPqzKMMFPepYguGm3GRaD26kSrWcN7B1AKaxxtGrVmPot",
  "key26": "mj9fCf8ArpLo494L1eWHgD6DsmyfbV8Y5QU9RWcMeeYQ5Dn8k6uvvopAb33VWR6PXmVMGLwHyPkJgBFzE2AnhSj",
  "key27": "jzMr6cswabCBM1ckxn9QWdozYj8hZmrYBuERUwopZpb5iKpvCiqdHnxhidxqEzk1ZXcRq3PbGjR3dJVKJesyDRL"
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
