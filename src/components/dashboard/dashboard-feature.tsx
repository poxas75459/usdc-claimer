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
    "bCvnnAgEsdcPxo4mUmFHZY4MDgcntmJa8STS6vfAoa7eV2AcTn1CZzqdq7YGPMuDXe3C5JymMWXvTiLhMYWvvpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SdfruA119kfrMb8cBHbLHuttM1HjkxV6YzvELQ7LqWPDeeUNsEyFP3DB9FUegaSkSAAfXEx6vBGT3oK2mnzzZn",
  "key1": "q1oPPyA2RVKaFuzbFym6NNXAi1JAihQvRyFBwz4mWr2ToTrNX5H92kTiiBQV9n78CfYNuFMkdbWGinijyY6bZEJ",
  "key2": "3xBzgHiqQ9HmT1qdFjtgRLKx43NmneuTK7JkML5dUcwPgwm8jJTubLsQkCt8LAUnhAPREj7UwcrF7a5cCdZa8Jf5",
  "key3": "pQBaZ1msyLwoMZZ8WWH5AnBn3DHz1r4msYUgHd9TGJbLXik23BT4mjeVK6nPrZ3YbouPv1R4vkwTtX6SDtUadup",
  "key4": "3iKmJ8kxxxvQCUgTuz89tXk5cPsZS8on8d3B1uL5Yk5NbUaKoTj5rZ1DwagPkTuhyo3t5Rvd3jmgfMkVkntNxxgh",
  "key5": "2U9aNZvrLKX9JcUe4GbvfZZAngRKGfuDbU3GgpXozaCLSSkyBkBtindxVCwe6fX47ZrGt5fPBZJL8AfJJJJPrmiq",
  "key6": "3YUae54cBfchG44iKSAqS9BoWJHvTfLCQhfvTpF8mJmQw8DrCUe2Nip6LEayMNKJZpzwTnh2DsPS6XtvvMEuP6JL",
  "key7": "WQ82ksMs87wm2kXvrWCrPdvTmH1BVS2bbSnNE7AgsZpmABdqzoH9f939uYbD8n56YyspJ1SW4qbiLeaGCEcEAt2",
  "key8": "K6yBegMKW333L9d86BALZmXtCcfu5SLP19zkU6EvmQTBhFVUzToM2ARRe5TU7nSKcKoycHSfCncnsjp3JMBvfZR",
  "key9": "4YMtWb8MgGyWiaQXE28NfYgx8176PFg5YqkV4yG2of1psGyd6gkmkgfNbdReHWn64MaqiR5u26oLpxubPe6ScD61",
  "key10": "P9AnAajZ5MmVpCEKLCKhXbQMAvXxg64v8NVcG3iyrbq9WrJjyN1TZnSVdT3BPv8TZjbZPKiwULCbs1x5cw4s3im",
  "key11": "4RPew1VhFUddvSTzSnAxQ5itXavwCB2iwKXghCephryYzQeW8iriZxz5otpd8HjT7CLe1CBVxtUry6DfwEUV8d3q",
  "key12": "4T2j6KQmrkVXEDJurZLZ3z8dUMNhpBjD3uzbaohaD8F6Cb3MqxvU3SqPvun7PnGgM7w9s4bvEEhysjsqHzthu2Fo",
  "key13": "3aduuKFyydNGwVgBMWm4muidDWHPCvFBYYZ8MnSbddGkhTH8r8PQ4kXux2ovRHjNPxi3m3j7tSxGEW8waXvE88Wk",
  "key14": "3HH1746F38zLZsqKaC8sHFsK6wuLLYR2mkeukSiMRSfCoHbbtc2bj5ikLD4e1dKYZJf3EMi6ddyJUJy2n7FQENCy",
  "key15": "5YhRLVWJaQP5doiEgeNzCsH4jEHV2PZnqA2UR7Li3auVrqLreFui4XrujVP7rmXMkM1gbCqhLB1NUs3N2dKKczXm",
  "key16": "3WLt51QGgqM9rnqwo9MapJ3KcAhtXW7v7VhANq4JLjmStzux9WZ8s5V8butK1W4kkzUsj2U8T6VFVAFknwyStMk3",
  "key17": "4kwZTPmiLLXHPdmJg8DXboUwX88XUm8UrfNr5HEuUj54g4L4hENJSmwh6ewSMwMAb1wS6ABDGz9WdDNnGSEJm6Yf",
  "key18": "bKR6B6jwXAtp4YrGJ5jQjeHyTSkVVj8qy5LToDpmRK2puhyYX1D3U9hH8gFBXnUzQn9jSCHL3hQDRr5f1y7pm8M",
  "key19": "4yhBdfpkGfmwUeCfVdhVMeorbSntWtE25G8LVdJxYybQPzne65LRot3x7BSPiQiKAF63jHVn2agLu4zrJbLkDLzj",
  "key20": "4hgzZ68D3EakWLTh859amS8rytN7oCdoLSyRrvRvCfnEUgbKRYyNYTAkv8hnhdhqJVxZY19yK2saQwnexe4Nv8kw",
  "key21": "XDuYA6aGJheon6AZ6ML5FEbjE8mVKR68NTgggyJfE13vXtugWLBkyq11EQbXi16brwwds2kdjp3unneRNkLiTCB",
  "key22": "ucd3WZ8UayRcHbHY4YF4mh47jJudgZU6brvgAqABAzbRqKuVuPM8MB6tBFLGojt37nq4WqbdzrPfahJFNpYXSPw",
  "key23": "376t4xiu9PYe2rMerPuBVwiCP296zxy6zFdr5DKS7MPR6BAmyhDWiff2WukCoaECBKC2ekDzXHngReTFVqT4AMYa",
  "key24": "34xtecyqzMeFVziYcJAz29UnxN9YNDpjpsw3WhJjMxMNqp79DduH2vFhX3T3L6rG3vimTQFzasciLwdcBWhma1SA",
  "key25": "5DEZuSA4Tzf4krdLhzsPDg7CFKQco4bCbKd4GrG3nSBMvzuubfafoMntnGoM7FkJEVvFn6TPs5XZLXrjjeLMpg7r",
  "key26": "Kk6pMeQZMLi5W4SDGUoK9cSJti8tpVLo7GPthC4TRgc6znE5bf6gLXzkESjgG382yEiQaDzKBm3theWwT45S7Ad",
  "key27": "34ptt2yYgYHCqYefV82KMhHNLYxP6WRtQd5w5GHDqoqyeQm6ZAC9jViY26auJciwMF8AqTQem4mwoUSmmXEhqXVp",
  "key28": "2eY1jTu3xbG32BDuhX586RdnLTKZma82WQxYx9ShYtcxnoGJ4Yv9356xeAbzPaRqfm6KPADwnrMy3w94anUZ7ioi",
  "key29": "5KTERswvqD8jGY2iNYpU36tXGWWHJihEw8rfuFbE8J7xqNjYaoFhKWR2qpLn8UFHtwftsUB85fKr1aS6gBnVTX1N",
  "key30": "2TewBWrATFXVE5WzZ5SFH93JvVUTYqVxLrEGRGrWr79f62RRBDBaRsnyPEKR3XLkbd7N8Xnn4x3tdkWLvjccFEQ3",
  "key31": "5VaPTaiYj2xvMfHkZAr9wveSoTd82ucXJsw8j8wyWNQhBRa8Wz8QFNLxd22CuRWJpKFwMXEnSxGXJg7hnwm2WKdF",
  "key32": "64iQRtQfEDeUSa1eoUDbRogeFrwTMXxSSkjEpcWEVyFNNorA4kHZrY7YNobHandYHvaJVBatZwPR3nHsBVLLntGc",
  "key33": "5i6rfnQdcYw54WNnT9Ct4CTwRcyiEdvPoDNVoCs6QKN6w86jBGwwQr4uFZUAteQbNUZSgoFGTUJLrDTJyqWKqgXo",
  "key34": "3Tn3oFzUw7XrY31jaMg37wRqJauxn5bpizUpJfFPStwCnCateMBZdgiXapL4dgA94jLbY6kTxAsChebid7CpWTJ1"
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
