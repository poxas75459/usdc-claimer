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
    "h1rNqGYQoS5XHEQpegncmuA4sPxsg2iSqPcEfLdD4BRcxGymi87jd2FwHcrkLbLJ5s4rvDBeQMu1SDn7o71Jspf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XB8WcWUE2hKy2YcAWtqJ3q5ZsFZkDaJuzQWyAH195bUGvdfYmMfKSyfu4cL44KJKfN3wF1udAouUEu1aa51dgmZ",
  "key1": "5uZAHs9iGi91ZxWEGNKvL1wvWx9zZNHW6yXAGrYyTMvHLbUyFL7aeHppyxmZSQR9bHfUJ7B2PWyBpurRsjgSM4UM",
  "key2": "3ySWMJyqWML3NyMmhBRNtRDXCG9QxULYjt71px7qkMGQjf7hadvQyYC6vqs85MsHFpeHuN9EiuWHE1zt6M915y3z",
  "key3": "5N9RsePSCFGcoa1K2p1wt1DMgVxmiE8AT7z8g1hTyTuaM3oxRpgDkGiey9aRoUaQUC4vtBzhHXTtV5kitRVoxCV7",
  "key4": "2qdNGC6VBZR5BjeZqZEwBwHzbMmJMC6X44bf6hJPjgD6xg7hUaeHFuLq9WfDTJTAyaBEjUkJd3isDhJYUUu4udAa",
  "key5": "5dEnBD2iXPKjSAGbdun9MzZKj4QazfvLSUeB47qqzKBVUKpSHWey7JjACGJDjNDwQ6vV5NvWsv3SyHtt7TB9MTYa",
  "key6": "4Qi9WppKPG3TrpG3NYbMxobam43Qrda3QWC9f3UAFXxeth1BhYpPZw2j7DcicbFTLg3KbjMbbozWR7VTzkk8ag5D",
  "key7": "5SZsoESs6DXxPj8X5qF57Z4dSzaPRNYArLBuiUaNRrj96zfPYfUwpfEEwHUNScT5u1YHykgnMFJcc7Hn1bzgBz9p",
  "key8": "2DkB1RmdsDdhRYii4zEtX69XqZPsRrW3y1ob1eKhxhcx5H4FrMyLy7jCgMqT6WDKyNrUxqsuXeCzoZD61otdFuNw",
  "key9": "5Pydi4MA7PWUGP3d69pByvUBzppxHnDHHRBcsQpV4kXuPmTp4GNFWLWAZawpLnFPZQVY9JSRCL8aT1U7HQ9BqHy8",
  "key10": "5Y9N9XaRYM1v6QPmQdZFKxZNT5pdpPEwkGFemXKaba2mWTjhSifPH2LGPxdUBZQ7C4hR5xbkGGezhbt1F4BwqBAR",
  "key11": "5nqHkN79xK3PoCA6K6Kf3GP2hZrMeeRjaMCfmL6tutKJDRSuxS3bu3JkExG4ro9c5r2AVrhVu6gkMJifFMeRYcPp",
  "key12": "679QSpfe3UM7sYyiRXMueEbJSV2AwG5jRdVyd72XgfsYQt2tyVMQ7UmtXLj9YXzdeZmLtSJCddmPa9EAdfAo7tLg",
  "key13": "2d6E3Fy7RmSTrcAHtHcWJtSeG8Sj9K9EfzRqEdxrYH9VD6hKowSKx21K51NcPpSgwGS6D7gAc1NuJQ4v2e29AWdG",
  "key14": "32Zs4CKej4DUMd4egqaKNNexwEZkskxTp8wXZB9rtXWB7KyTJqm1faR9AZK1CP6Xwr1xjAXckiwampfQzhxx33Cu",
  "key15": "2Utbk4NmRioLW5Xpp5jEeS5sjm8MpdVGNwj2cr7PDztFsd4cyZDSVuMCK2RqLtnAt4u3JoV7GKCjx8XQbyAhdbvL",
  "key16": "2oXXESpcp4Xogetx4F8BpJsrMoXB2YXs4zuPdFni8DsVeEuibb77oqZkSqtMbpadXGQzKAqsZpNeYmkRrP6QZv29",
  "key17": "61pGoGW8AtWBgR78YW6hmGvcxNcb6WwGiosf6HQuww5JQsaUaWSypB2PFzMeJaDryoVD8BUKJSbTuE4AsdfygKAS",
  "key18": "4AvVvr5ULzv2dzB42iDmUJmLGvKH4kDucpLQvE5fToPvMajBK2qfUNTaW3zbVcrdr5EfvmLbUvWcnLeyCkDxvU6B",
  "key19": "46RopuxZtwjWoS37UyhNPd5VonZ3yjZUip2xjt7pNtXNxqbFqPKiU7VskjVr67NopDoqFMnvnZvcRzPKjjZo3Yxa",
  "key20": "35H8YYf2MgrkguSjkLtzThKXi8op53tJQDE6UxbzHiQ6rnwfi6ZtVfAP7zNmLtN6FwbBfNtuZQftmXrHyY173z85",
  "key21": "28LWheqHMs3WE5ZEXUNQBUeJnQfpQj2jsKqtGNGfiuHsGXBHudxFkTP44RzT9bUnP6jeyoDJG7pHoGr3eLzyWyF1",
  "key22": "5YDXU535qznGewbQadz9M1mam8oJLpeYbiMZ4CxfHHMsg7L75aCnwobgsqEdQSiNonF3B1bXxvXVh67iic8V29EW",
  "key23": "9z5yr4kuyE1FLnEoKu74XeGqGmEeo4JL22f4SjkMWgcyDV46ysK4vyPfvwsEkraqtUvYHt7cxuXdQeQKbHBQf1h",
  "key24": "29Q5taYrb1iXs8zfiwNYB4gS5ieeinWXab6cgZFkudYKcER3fchSWHK2SCXkHmgbuaqrWsk3ChcfDuaSdEzrSW4P",
  "key25": "247cQnaRBSkKfTXhpThxdCkUydYTG3nBS3Tr7VK9z9ZbhQbAcBEsirxhH2Y7UMoY5UAMqQou24qFUQYdhVdgV4QS",
  "key26": "2D547fTFv5DpXVp7rYpNYyusd1tFGBvBShLaDJfRE5ixZvDJQi1JBDfLmpHZumTk1MRX9cZtMuxaJFhLjRPfVFKx",
  "key27": "34Tjeh6gpevCNyyo3BVKu79gaknkBXQQQRZZsaLNWq6juBm991pDaJmppsivw9PDPvoA7pvFiFSz5ghjXL6qz9Ha",
  "key28": "nVkHR5YRng7BnuBpHNPLLsoKr8MFRPah287bsC6sDsPqREr9T47kZJYBovwYegrpPLT7Z5D3qfQNoZdrtGjqaCt",
  "key29": "hfzXkDPRLUUcPztKp5JSuhJK5eYBcUhEY2ynQFJJJrXtQaGaHVgNTeTJUFAskKtm8h9k5mHhUK4wY2kUcXNuSMy",
  "key30": "2uKQaqNmX6dzyDETtp98uQwfHkyxz4iCATpN8pxBQd5RdaaMuC6vV1caGZjNyZ5JerpUfiE6hyj9u1Ju13D6Ehhg",
  "key31": "4RtxGUx9DyJqqPSk3qr55C3anakRZ7iWsnYZnFpeMVCMLom6E7ca2QG4zzUCqsDXMKfK8fL6nRBWrxpjy2fc8uVG",
  "key32": "4ANQ8aPnTzUGQE8B9Ghcf7domiLh7MRv4681FeRjvtLkzJzWm67ooPUeVARpnac16396MiXFykFxVZNMMjXYy8rR",
  "key33": "3BSCn2TNR6xk967Xw2zTZoZ8oTzKTYZtV9M18D3EJipF66s9uRuTxrxc5FiQLCWrbZUPoGkipNQi9YooocRMgFus",
  "key34": "2aRrbfLPJYeXdrrsAvdn5rfXPHDbsSJ2WSuLfNGkWrMt8SDwdncYZiukbFcvSX5udjtkHxYdfw5n1wksnEi7ktp7",
  "key35": "5RaqwJyzmmQoJX9CtkCwT8owmWU5HcuGn5J3Rcpe17Ys2v8g8NQgP7KGCj1DsZgNE43tEFWu3MBPAHapwqryY3Ne",
  "key36": "YUpvrng1XcjnuhXz1nqSypMc9FUvKYMKRwcwXAn9bN7vqjf7uqtaFa6MxpEcrvTrVKyK5RqfJj5VvErytrMUQyD",
  "key37": "53ubHwGxyoh7URbSz5kcUg4zjjXeA6rHSpCKrgDzqRFt3wY6iszr1KSNWNumxevd4TNKMqSbnqDjUtMAyy9ceESw",
  "key38": "X1PZZ1DcRBAmTaqDGXa1ZGoMJmVvJ84X5B8YPFevSFpyksDbfUaFquzpuXxmJU6pafX2jZ6Bn5aGZ9NbhyaFjA3",
  "key39": "3wcWD8rsMB4JpdovFXZPtjZXsMa5kYiJHPq3j9pyn4ufcrKQa8t5MnAqrJxoBgpTZbyVGSByKU64n7SSs8NUgNzT"
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
