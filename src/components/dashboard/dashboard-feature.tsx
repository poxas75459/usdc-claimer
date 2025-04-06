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
    "45XodZpaMgxzVBm5XEP8F5eXYb6GSm8F5xgQgxXKPZJxPSDo6kEWB39DfXDzUfaB4JDqtw5dU2JVCimXeK1n953a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SL3hVmQL6xc8F3u6yZfWBLYfxK8hgyyhjcsKWnqBC3N7XNKDgokSJkLH5iWxf9Qk1v6iWxf1azEMHfxkv3imt9a",
  "key1": "3KAV3Aw84tMxLrbQm2ZR57zFswMzNMJiJoYwkEJhxHjZyssrzogSTzNs4cJGDufEc8RPAmFxd8joRwjDXGoDivWd",
  "key2": "5r8GZdzrtbvR8LwTHfm1ULYoBaQkxQFYPv4BK7DucV55RNrTv26Mdqx2Ak1Y9Wc9SC6v6aMeUDkQsobJFh854ayz",
  "key3": "z7kQdkEWoJHjKzfCXUcjDoE1oXvF7ruNmffKpLxzvXBN2UMbPXpc1MwJhTRX9oPQvU2eN242DQBy85axwXmEDxB",
  "key4": "4d2hjYdbR7s3dbbxxYQ9oe3zQ4Qofm4vZr3tFs3s9qQ4n8g57CWicoFh4iMdUZVoeDsvWo447Lw2qQ3keYBPN7yH",
  "key5": "39wqKvGze53zTHE6uAPaPWF9x2mVo2GHea9kq6NybnTqfiCjaxx6nWx3E5Be2589396kRDjMS9FWac2sjw18jaBJ",
  "key6": "4KYhbbrz73CxwWNDsNdssJr3tWoFHMMTrKGubXhJYtjTXaWB6SMKgHQnDLowjbs64zUhqAJP68XdzYxmXhed2SJD",
  "key7": "5KqvxkFJ2YvNgAHfkmgg2D9fsyfdU3fw5qr4Tj3ktvb2T2fzBpNB4cMTmm4A6Qvvy2Xf6VR629R99hLB573JJPKd",
  "key8": "2VLXXobAz8eksoYNZrMQTmbMKLXyvvS1zJXNU77AMy3kuAw6cKokShpJeTwRU1WwfqtKbA6KMZXteH43mGYWYnAg",
  "key9": "5gKdFh6LmLW7smL9Drjtg2rW83Fwf6eSRY4tTs4EvMdR2Yg1EBA9PNbyPTx3bH2vn5HXjfrK9PdG19RtT4MrmizK",
  "key10": "h24GpXHAewiGXna8gr51dmjTSLHqiV5rxXi85LrRBasDemNh4ScrZpeGih1mQW1eChKPmQsnrmAebDZL65Mp1Zd",
  "key11": "2JoBPHauFxLB4k9UteNXH3AzFGMxUYvUtiyv9HFJQWGrBwQAKnxbnb3wC8pBvcgyhsunmXgjRKbiGaWfrcwBWB54",
  "key12": "5YCuSeriST2xbg6RytfdbGuvHbGFh18azY6wR2WUFjegG1wDgE4JtfqgK7bWiZDVJLzqivaZTHa3p4gqs4M7k8Bq",
  "key13": "3WuMoAnPbNeDzxMgviUGweV28YPgNW72mjSTs2zYuRJ6tVGbQjsJvYNR8T7PXxEbSoExkbpF3y8eH8AUKNLtMxAx",
  "key14": "46WMi7pk67hipEneaiFJZePq5q9MVu5Qvb14FQyANgpx7DMQz1DXCHvGeXozzm1575xBfs3o3XVd42cshY8duPRs",
  "key15": "4PxkHhcQ8Nkz5ByD7L4u8KUHChnxPKYAqyBC31Cp9rbp8TAca768554DPDApktKPvvp2oFhp1Sq2iyjHdzNesYTy",
  "key16": "LqCxadym3k53yHoYB6P753Wtm93ckb6KPdycej52fA2q798JyAcduxti1yLH8m8jq46RUKU37e6DwGodvinUC7V",
  "key17": "EPb5vmuNg9F9PTgnmLWpFcfqkmbgVRmLduaR7VpSDf91jXp2GyrcTqPA3ss2GpsCmqxBMNYF9W2t52rCMhW6oYa",
  "key18": "4Z5Tgx9VL36fjAxTvLB2ZFvR51YRkVBkpR7f3k6pZMmYPpWC5WXD9YGjwseUNj8TJmD96KYgGmFwYzQuD4FuXwgp",
  "key19": "3jWdW5uomxvzBGYDjwGWWZWW3ACihNNJZHz3KXW342xWgt7812WPgTK4tXEuVojqJMgtqQoix2w9g1oAPgdJzfzY",
  "key20": "hMnEoG5FU7FS3SLeRbou19j2eZwqdgkqVSBBoBpe3JKJohKeAjWPP9bdn1XASiS7txxsxcZEiBUCrx7DSVSHSsN",
  "key21": "4bEZMRFUNR1cQednLgLLwiVivF2MvqBSDLqsV61heR9k4wUWzNnDK8TDY5N6VP96Y8hgqoCcTeQz1vzdSL2Qha1Z",
  "key22": "xTBX1dBiJVWv1wU7PUEnthtYEzSWS3DAtqUyne3FnCzzqRvwHeFNAtT4U4ryTDKq2t71GzaWsApTbHQ74XJd41s",
  "key23": "5ctqRpP62uCRRRzBKnBEhQeaVXWAou9xBuuRbRmWrCjdSZyroJEGQxpXXjTJW1WcLsnuho4H9GetGvepvVhrR7ds",
  "key24": "4dc81u9mmXvACsR8wW66sBfQ7Y9uJT2KS9xokN7nzws1hZCdnU6RYDjS1Sak6iqeY4dqc7oH1CoSienZeayeQ3xW",
  "key25": "2RGVY5bqoSH8Li5M2M8vvRrU8SFfRPQGMVkKVJciaPzgT5ajTjVpayhN28qzEd7uRQiXXn55jX64T9cRBWXTjf36",
  "key26": "3GYMLFvC5aJZidxxDK7hiCRmLwqt2EJna7ZsT6Tc4yvzTywC3sFMA9fwVawSkjEB6AGiAjRdTDnbsGdAe7vGK9SG",
  "key27": "2uERtM5zgiYxiWG54vW7jb1pGrcbg9PfPU3u4EKgemFvTRczgAwvrMMsFx9r3tCZzzCFUHw14DyD79YFEetS4e4F",
  "key28": "3jfhN7esTyPTuxQ7G2TxhEe2YGwpqACvSCX7GJBNfwrAW2ysFFcPH5iFZ5gRvPnoEJp6cLpgQ1kN26jyJipmb6UW",
  "key29": "5r2dCRCL1s4CxPgmFfEkZF3KqZsiDgsJTGJTWSL72yw2UYYuDbVx7idpTfwkh8VmXW6RTf3BRjXXtSdd6PYZApai",
  "key30": "3gCJrK3z2opwiXszBwU6FWUxMys3j4HrHzGzwCRUpvawsMQ43BPwALgyeeo7PVSkBvRTsFb98qkPBV2kgfx4g8qR",
  "key31": "5u5zX4UQLYrrVzEx7pkry3JL9uvPgT4zWRQqknWzBi7EzGgWo46FDKLPWjcZmDGp2uUX8jEoWEp6XFQBcJHnrMo2",
  "key32": "4Qv4XuEhDRUB81k5p2kU8JYPjNwjDs2buXME7B9ZbpjXpojRWfKVgKHJLzjHp7xnU256esR79o2vqrouepQCEUqC",
  "key33": "2EbFpHL45a1kjFtYJExbhZw28D7izdPy4JWAGfxbNm8vG8qNautxvAJLDNnLpCshfbuSWjH36kUYdbfEb5NnffR2",
  "key34": "2DSVdwLeV1LNDJLbNVo6aNkEuXnrUE7qvU55u43Apwktz4JMuFzoQME2SQqRXovw2s8sp4EjYw2kAFAhuvNmVmMM"
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
