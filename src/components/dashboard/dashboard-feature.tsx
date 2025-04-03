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
    "GdLk62pVa13YtNVwtGonT8NiQ4nWjHwC5rFTczoTYmpxVRXF8T1WLhmdk6Zrgkx4tMZkZ8yLK87Vnm63gzid6QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgN6mPs1RBPumFgNxtQ5xGWHDMw2kqqb9n5gvfuLGtaAoN4DbaJg6w1vnRHnWskv3cUChmPbu2aS5vpqF6kFLKu",
  "key1": "661G9afpxTsKirmV6yR2MQ8dRm4SU6d4KxywQac1pK3QSRfBV2RpebRcRBPBQ7Bgnq5JqW3kSECUk29P1kBL75k3",
  "key2": "5wD3eRrWpdMDLkzjsBB4KPy93hDuLDj5kQsmJoKNTWEFVJPGonth7Z7VvTXD8D2fzJ1ihFmRWTrJMLSwrFbMT5Xo",
  "key3": "5xybbXLotUifnqSPQKi95L3LYT1CnJCTY7gKwgSjgjeEsy1okuaHJk5EwYmTwGehkQgqW3HNgk3cYg47QuMUF2Av",
  "key4": "47rFTJnnVoFpi5LCpKKAFzcvvfP8xuxKp1anvTDxNyguv1hzaQi6oDV4LurnKmzPu4wq2eLBNKaGzdoSP56FRM7w",
  "key5": "67hfjntRKuUu8Ys9DKnUFxg3FefB9maA6QGaQV6Xqc9G7v5SXEkeJ3srZhRySaAWYU18N8fhD3cBSDmwCtV5FHMc",
  "key6": "3FS8HrAP2VmiyMJcMXTyhnE9ej1saUdgCbC7n65SXfZWYQgF42zKMJc6kXNpEGtV4iyTvSip4tNTBc7drCLu1Ls7",
  "key7": "4jjKKNbHnMjzK8yHc7oeQw1ZMk1kKPvhpDqsbojznMBtU2MRLuXck93BCHjPwVGA47J9Yy6WVqD5igGRZZnrRbzS",
  "key8": "3Sm5wfHMDhGMLk3ML4GKEvxiNvzt7f3SwFJPKeqfh9vX4y9MH3QhbMUP1HWpopaK3pBvrQFKRjQR4iGGKLNFiFNP",
  "key9": "E9sHU8THdqP1oSPm1aKWzawHyNkMwwZ4UQSH7vMG3PyS42eu2ttEZ3ukDAZnp2Ha6LPD3MpVFjvmeNQqpcv3LQZ",
  "key10": "2VQdjWe8dbNqCqygX1Uj9oJPeYTw1o15dAUAy2z8FfcMcs8V1YJdgwF9RTFQoebPGBiLXnZQZd3nhCPQK5YwHxty",
  "key11": "5wwXsiak7yUusU5MVm1iNL8PhUsgbqZjSjW3tBjqkvom67WtY5TH47iJg6w78Q86NrWYDid2gB3yLdyN2617z4Kt",
  "key12": "237rrFAeVoodNzD24Pj68WNmeaWeZPKT2r3z41jsUniroUK1RtpEgkSnYWNvfGBBo3rsqzSJ1dBxvbo7t9AAEjet",
  "key13": "2zfM24meLBUNojiZUFB2tnzuCeXV3wAM7SJfbEjWxD9E1YSJRxQKpVYPVoRDCgqJ8FJYWvh32W2hbG9ZQeD2a4j8",
  "key14": "4xoc2DDDA156rHoDhw4hDA27o9poab7xwUJweiRCR9PhnLgoDHFnzWjJJQHrDciTpbPEJTdv3xmYCJz24QSbcGdr",
  "key15": "7CRR5F9XFo49nXpEphhnHrjEgX4W4UAnHmW7pQBgoMwnUD6bQZfDaw7zJRQVNRQY8A3PsKxn6HMXV3qLz6xWJo8",
  "key16": "RCLMvA2Mv3tTBQWx1FGELLm4pSqtbjdUfeEab44nYs2N1Ni2rBLN4wMbVkAGwCeG2NHcroAKyA6BHzZduePfyxb",
  "key17": "21e8pap6oMHYjiVawTcgBPPjxVtRBfpfCTYg7nDeZsjQUnW1cAvdyn6nU5hGPZbty8yBpxVHPYJyzuhBfViuj7S8",
  "key18": "3ySheK12ctJUdFnQGr4N59UfvExj2FaqunhdkTdY1GV42j6nbP8QxGAMnmSQj6D9BXSPPw3sjMamuDJRETtu6FXe",
  "key19": "5EAMqLsZjieRuDpSYVCHMGbpQZq3gk4b9zVNaFS4XBt9gcUn4wxtSc8d8kf8AGAJ7SLDC3ZK2NsnLzNGXBGTV2bi",
  "key20": "M3w81a33oAkjjyH6iabSDdj2FGMNdxAjjE8gL1aX9CriKj9izBAZGTSsy2Hm9dpYhCXJda16g7fsMBLTY8Y8jyg",
  "key21": "4ceD6GBgHUfi8Y9Re9yJiqvpJ6suMms2eTmQZzaP4KaLMo3LT4kgBsdpPF8jjLRZxSYz9bqKq3s2gFyXTwNj7aYa",
  "key22": "4kddAb3o82dLFTAPFiE9mSknucTvV3Agw39b2RgKSo713ZEhE8BMWmDkprAh188zYsHnwF7FUW1i4YE4Yp49p52v",
  "key23": "BPu2BU28h135qeNrxP9QDeUJ6K9Udkj1E6D6jhXoa1RkpMRoYHZiqkEjZHnJxAo7aX7p59Pm3z6QocA3rW9JMn3",
  "key24": "5pyxCWbBnWgo6yX8GMXT5VNZLhqdKcgBUfEyaocAhdQWGrwpVZWCZHmJu7144pwWvwdpirRKNJX7w5TWjCn7Q3nG",
  "key25": "5CcTjn9tvyqhHheP31x6VLRS7gLxJUf19R5zFGxPe2cEAmKPZmzv6VGijZpWQXGY5jcZnE8QSaNWjC5P1BcuJLyP",
  "key26": "4jfFSDGXEJNk8BDaog9Vq1Wtb4i79hsAZn91VeszEG73AvtC836xgKuM4iZBXXoLFUppn9AUW1wsyYU6Bn5dCzCj",
  "key27": "447siYoSEQXVbNt8EAF28hY5aDQvgsKZ1hz5FnREL5Q2CUZqzZRHiV39vhDYC5wm5SohDTrRDXhEXTVNmt8VKf1B",
  "key28": "Js7PHw3vVg3meUPcbqf8AVh6FfdAn417MkX5aMtmpdELcrHqdS6cRtBbc4iiNDhwWmRKPdUaXLVMpktkz1TTXNi",
  "key29": "2wNywoRm7qgCA8bQcwEM1H47mX5PsrfYCrYqTUfdR8Qxn4SpywouP59d8A3cW6Pj5byorWYNy1om3uzFW1vfucyZ",
  "key30": "3K3Gha1g76Rj7ypBZToYG4DoMZeVhmhZHmGTqcVBW1S56dzZTNYfmxmSuo2TcHTn63L31qRvTmDNU454qCrErJTe",
  "key31": "UBjwwu7iALSo44vbuDkwCCJJEmFsk65GkXADmnuaBnmXruBKhQFZEv82qDEWvqQJmUTzgj5qVBqZGWYvv6tziQm"
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
