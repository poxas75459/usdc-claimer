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
    "29AXWWXqfweqqarSfeKZ6oSKDwTPR6hztuoVFmPGsnMqRPEjdSqRvdhDs75xYsHaXpAjrDBctYsiUufPsPDQgqmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTP3CaR82rvbMmc5ya13rLYQ2pF4jDnETmt8W7tYhrgXn9aNhAVJAcM2HtrzBMeceC4p41F2yypfLRpxECZquMz",
  "key1": "23G3dq1AJ1LhEtwRWBjHkWSkCMtJSRF46iv88uz6iGfuzqbbAmzgjh94SumsLygasPU5XhRsFcXTAmMESKs4gPVp",
  "key2": "2KtwqKrN6mEPQWrHisE4B5Cv7ENGJ9XZQivBvEX7ii8cxrsYE5SL9FQxXEsvDqe8umDqacHf9BDCRcvwELpVktHW",
  "key3": "zHSphDs2Ytcj7tz9vhpWFAJ1L4GEz171NjPTjyoRQPKADk7WTfNRicYHKeo9SxPKCYfkFnNkK4K4cawaHKk6wiu",
  "key4": "4JAozve5VSNSFHPyGb25fv3TKTtbFyWAwinYV1fUgJ64Wk3YuCVBYutKd9EKs95Ci1BoHRSYPgjwTdYmxdN3MnLY",
  "key5": "5J2PeWqY53doQbdNPVR7YB9aHyDmNgpz7bJkFYW3aCVDGysjbbmEKMMX6tdF3VsfXpQeU3w6iuy9kceXFfTidRQH",
  "key6": "5kkb1TRGy1Z2QKjnZGQCdFVdZ94GYwvgrvzJe6bzWxRJnoNBHCeGy3To3EvGxyaV8P2FTADrx6KD3mCeAPgh9wze",
  "key7": "2zmXn6SHjWSgRta85eZiYUiNVcARh6o4RCU3x6QUhxgkRnAd8CyWFiq8QRr6q2XiPZ7Qyh99s3V6RKre6H89onat",
  "key8": "fbEke4ZewXdSBrm4AAse9AbwdPZikJEBvKPYrpJAWJr4apigWJzPDKYR4v8zfs1FVoZ8tgerokKxFMqYjgR1h2Q",
  "key9": "2Aau9a6BVqz64GogJgmEoBnmMaU6HT2C7GSghHvKcPToyoBZc2t7BC7KbNVf8ir4tQ7kuGSkNv5P4xTzUjR3dtxB",
  "key10": "43kWeFmN2xje1RhYdD4nRmQ6mqURKwC2MZxdP7kG4W2TP4YzRgqLyXcK1kSKGNhk56E1y2YsTkncvNWaJHMHZ4JT",
  "key11": "4w92LNUcUqZv9KpN1EZZkHwKdc4Yp8usJdGvj7FUP3XXG6dbroxqxxJEcEBcoDAdq3mrxdY7HwhbhCueH72VEHw4",
  "key12": "4Px3RTsZxf6tAmR9D8avdy8sXUfxX8AKwStrQerp9PNJaeHnTnbYkTZKwfRi1SFTuhAXUKkfB4SAwAyDUikvbTfi",
  "key13": "64tjEVzGABLfWuWCWrzx1eJQHcQPBoUXJtWGxoaU2aGUf5pc7Jd9vhCueiJcvXBszKVQKvXmDu9mWnvdU2MEH83q",
  "key14": "2cVW9Ai24Kgnhvkskjh1ya6zoCWq7NXiysSWyQPtKSGcmixoihD8pvBu5NeZkX6wXsCCHWA5DdtdzTxb53shHmdP",
  "key15": "4h39AX5jibPQnMhB232JX6g2aUXWRSo5PbkcC2VH9kSs7UVYqh77er9aYPRcVpbxXA38sTsd8kKEgLzs2KtZNn3p",
  "key16": "3iiDLuJKz4p53B5em3UzHu6D94pMBiJG5AtMG7SDVR8SbyKigCfhavyvvVqax9QfVpi2r8HSBKkuhKmeC4eAYbjt",
  "key17": "oxfwD4W6mwqrEsiTfxS4uZ7p9iVGFudVck17WMX4PHZSXuTHc6ub6vqEX3intC2B4t2rQBCM68fYLpXaMEap76d",
  "key18": "4ymh2Ma2kB7PqHyBLJpZvnKi2q6nhENU87H88XR3aJ3S2XGg9hDaiPCimuUrdXNtCi9o6Cm2GARb1M384xptupkp",
  "key19": "it4fp8vuthsE1nDRfdmFqUbafA7vuJwP9c6bYmfhwAFxSYBFwEPMwpxRAPZ6USFPDRTbGpxYAV46c17ThqFJwJW",
  "key20": "3LRT5864dWD9saq3AFvV2MpWZ2JuWkzwpQJHeAfE44ry1FL1o6dijFnoa4gEvkKCS3Hz7LrRRUb66Xu2dt4zPjUt",
  "key21": "5qt9grFtS2NzAe7L7WQbcvCTpVw6vAfvhjYTHRzb9d8RZxRbW9vSFrpvDS7DXCpvswvkgxxxxuJX7qeY43MSb8ak",
  "key22": "2jqEteJCFWkmL7vWes7jXp7bBPxtZTjwTa7myanMnvzQmVMhyhKHETCSyjRPUiP6vdigpKdgDmHgARV1ejp2GGB2",
  "key23": "3ZPYCddwy85eZVPyZe3TwUcZ7MptRXw2E4p1VJ3X7PLvUgSa5ezKWyuzbYuDWNAGTks2wyqNwoL9otyyQPMpNdvr",
  "key24": "n7y8hMDeESt3ZUm4nFZ7SZ6KA5TH9GYK2ma7C3auJgGK4GGpBtsbUCwpgZao6XsnFMK4MvdBUukRqYyczFxN9u6",
  "key25": "66kpTReq66KKtGW2dubUnwsQppZ4igCb3xRqWCq1RBJaJBRV8m2aVtrhvfFuJiDFu2GKBwnZhoVNSevmJ7Bn4wz6",
  "key26": "5uACMEK7mXM7gdLZZtWWNQ7bssJDuz8mszSYxqviHmX9FT6BJS3fVQnFpdW6JSxv73Q2v9RWzYTR6cQhRDArqLVH",
  "key27": "43degKWYGw3a8UYbDpvuoTxJrYwzB8sLAwd54kdA2ajP3TiLvKBuA3AtDvnqGY4QYNSZ5MpwLLR8ZT4ov54Mmc1Q",
  "key28": "3GHHBURzTVofd4PsU6EHNppAjTRwopae5TZyTE44GdDZVgzxv5r3w2goRsbGKPzpGyRenjUwwEbZ6Gw4Ts6EGQjy",
  "key29": "5X52mUYE6vfjntzG1aNCadi6XYnrPseZw3r7WwNsxBGuzkdzfCG5W9qVG2Fz1NeV7BpBXS9hbhpDTVL4SHP1SRbX",
  "key30": "34fKQ4H6dGm5j7rSiFCstUKrhz6cF7zqC43h2zUwKDxG7QRsmHhrDqpRA5ike5FVd6ysC8dY12uTVqB6kudyf1KG",
  "key31": "3MLgJ1z2zgLj8Y4CPvtAYJsSmezkxR4BkmEjX6iw9jjq6TMDUcMFKZ12ytW8bNgkZJd1eyuxXAZaUQBkq45FZCWg"
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
