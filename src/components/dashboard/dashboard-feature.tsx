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
    "3deUQ1Gp5yvvE4q8Soa6JoTwsZK87fxHR7QLd5Yrx5j2pmQUFhCPtfmpM2B6vTiCyeF3EhVe9hRcKqA74AyXe5zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pzVg2dxRK8PtNCJ41ntnQo9kYjbHUJniWns3LF5C7UofrQMn4g7vJjbGJSLXSjFNYTcwoQfiQJnZnQan8c9okEv",
  "key1": "49qty3Qfyxph5HqYpZQZBbfhhvfrHMuxgg1pca7vSqiR26ttytMwgAwmu96Wgs3sNym5aHpqn4nyZk7emoBduVSk",
  "key2": "3qxsGty2RvD2fReXLKaJzJz34M3LqytAvV95oVgi8h7VzRNGseBTuuWDm5J2diRBHZKS4wAvxwQusAZXwmBYvPp3",
  "key3": "5tXTUwbeUvtqjYsAb6xj1ggdEpVB4CBx1uqa216MbivvBY8euKSprRgqUgXF8XrVygeBhkhcCDDDCLwF2t6g6k8S",
  "key4": "3FZbfLBtSUPM4Nzg19XwEkHhzDjjMHRdS2jFmkmX4GzWt78gWz2i3fTLmc22eS4vacjNtoGCZSspErQkbwb7EC62",
  "key5": "23oPHTEng7SnStbWN4gjAS9J5L1mwcEHCWwSqQ3rAzwWoBcP6r9SvGi3dH4NLD8UGSKum9fUHb3uw6q8aHyRHuot",
  "key6": "4osp7ZNp8BLRLgpL27fnYSt2UzuYaFmLNtvT16QnQ9tYQnctPYhff13rutJbmHM1qMCkdnDAS3xNCpL4P9R4RCXn",
  "key7": "4gQ4TkXHdmTZkVbaYpssa3xCCzvUHnxLfnNm5vu2dUcF5cFmVpcNa88veXfNMndvZaW5XSHhozN7rgPSWU8o3Nb4",
  "key8": "3ZtGWyqabUorkXfpwQiwQQoijWcMXrnoi8uSyEfwbPU4zhgvXVFHSxdtBPTDu7M7fpiVKfbb8qFzEYbk2LRehqg",
  "key9": "4wAoQEbm9BX5csJPM7T3P5aUp2eX8QwJdeKpnMtYKRnYfQEUqfeLVTNotSTJyKMyJgKp198rVzNqwi4Gm19JLCJb",
  "key10": "542ULGq5aadUTEYHdULYVN426VKtJoC2wNZKu4m4gexkpMjionoP58zuz4CYQzbMpbsPAoQiHCACVzn63eeUrHmp",
  "key11": "5ErFCAoEvJHGQW2s5wxCHCrz6aAo2yZkD21LzJQdFUPfkyx825224Bq3ZjNjx9nTLZH6A2UjTDbxGikkHbBjZcgw",
  "key12": "4ixkFrs7YSotpbweaPg58Ank9etYWxRXsbJWf4sebrq7GznaraauWAjqYqrumS6UZcqcJ2VEEC6FqchmHoyGioCj",
  "key13": "3Fk8RakjxWXavMgg8JP917ai5h2KB53gw84Fxh2nnfvjuZpXxkrcSAx4W6iQgqyACBRnVLhVWagSbh8ueVF9RNH6",
  "key14": "51byV9fsWzU3eHuiGrE57ku6MmuozJPjQKwrX5QxsJ95ZXomFVtRbKBtHsaQHFDPXrmyVZA2gjYoL8Hht2WTm5Zj",
  "key15": "2u1d3uPFyPtUBYsG5Zo7ZMgcZJKv3p9u4szw3KdkyB6JDM1WRKJKYWmrL3YBkTuC3bZBPvFZ2tYLB1bRrNwbJuHg",
  "key16": "rAvcN5ybiZTGHNcmAYqinTZagxPQ6193NaCPSycWN31YvoLAe5TSjUhD18dDmu8WFKAoqkQ3gYmaUAuqbYGF1o9",
  "key17": "4kn6j5T2rmVw3kXNo45bGaNnydjXnrMxZLfzxDv6bxeAj4zPSVH7q3hpd6TCbsebR4gYMhSgND4KYQa6HFnyDAX8",
  "key18": "36oT7xvveQrPwu9MJH1eh2BDRK5nKHfVM47XczYmUkrkkniQoYa35NnKvheW8Djm8sfT6wNqVe95K2MFGXEnxg1E",
  "key19": "2VbAMad4vRAbumYmZ4WzeBukFkazP96EJXmUA8csZG6nZaiYHoXrTfAQY1t3GWbgxsd2nkCkVrEaBRZoAxxQKwMr",
  "key20": "2bTA6zPj66dj9vVpLRp1UJVLGTMgbkyqXCWTSgTBekGkG2yV8R88PuKLQpdD7onVVcY7eCyywe1FFJgbbKBQLswZ",
  "key21": "4aGDpW2oXWfgcAtiv1SkiTfo49Sp5qGYbvxBSsDmur9rzdFQf9z9mayfCZhuQNxSXunNqfcgrC93AmBc5U7VEdd4",
  "key22": "2YsWdqmm7jvykvEKViyf3di3kCarXdvmk9Ascq4cVVabq7i1tyjwbKuSQacs11Jq6RzM5jm1A5dZzxrMbFRnZrbK",
  "key23": "3kUz64gqAVampsKujCwuGEk9b4yvSxApwutzxFfg1GVHuL1Th3toVzshbz6oDqRy5J7yNJf1Ag9S8woLaBwBVFQm",
  "key24": "4PfeUnELtHNjCXS7Y9RGbQfz12nV7gLK8AbfZ4HNK7ZWWxEkesi8YaMkJoAVRDBNtTEGGsgcsVWF1DX7sGFPJTsU",
  "key25": "22mZRBEuFwSBMqzuo2xrkDJMXyM69dtouhR5Nn8zeH3bgUcnAqGUEsFzbESiBUbKMX9sXrpBAWreqjWEVCWKuJub",
  "key26": "4gD71dmVKTweQmRYo4gtnDU4PCfnFVEPyK51jCoSSpnektxagrvc5jyVgHTrbsAEZ2L5oTccf2PbBnEsjzYfqv5M",
  "key27": "MR5mRsVNAeKWsdDgHaNELNtTAtzC8nmBziN6kFb1MvsKnDMZXAsdCYokP5uojk7k2CM9mEejLwNkyos9Koox46K",
  "key28": "3MLMi5Hk25EpHgLHcUryfHoEiXtWmGaeGHtwRbh95Um8kbGtx4YSSpvorBKTKdXcesRZQ2n6aXrvQDmXUQRXe4Rr",
  "key29": "5KyyjzKmtndUeXqhfGrDD3mN4uD1kLxo7vW5cmvhgUV2c8unj8B4rkZ5QdcFHkEWhqT1U9fnkutSTp2EzUiscKKr",
  "key30": "4zAuUm3U7BQkas1xdXkv9wzTihzMbhCBX53RpUnmX1LijE49CgypAQoS8xouYQDCNVnzfJQPJE9VQhhyrmQYzeCf",
  "key31": "3R6SRxT5CpzqhrmmHWCkuKt7qk8RTh8PNZkaDFUCwrLpBaGuY6sQbeJ81UoaL4br9usqzafYXqDLA3nW6kruZVp1",
  "key32": "21si4s3gRchdFKvtw6MCh9HffcnvcHRDi27GFaS6UFKmf6RZtJZ4WVeYA5bBeA1wdkYxZoghhoVj7aMq4PM2RVdG",
  "key33": "3xcFWymMkCeDPMjPGtG3U6Nk8AqHqrdhXYpqUB5oDyCL1XjFmiy6k9bvjn6mvtvaXUD6ueQrYEh7BkVijqLhsEBd",
  "key34": "3fU7CezbhBrD2SXvTuU7wzqw4XZ1j3ZUxFA61sS8RkNRm5LpHySRmT4BdVAoej8yf7cx2ao4BTVPP6CJF6o3LyY1",
  "key35": "3sMLQ1DoZSqetY4ucSYsT6XujQo9qcG91rtGrWPTmUBR47rXEG9XDvHNyZbMmE1h5Mu3yAqLdtW93YmB88TjQjxV",
  "key36": "33AiKERQtQsb1jx8n4gCeqUJfXBG3DZwL8NnhCy5xLZMvaEU7YipkGZjhvWKJtWNLnkL7c9N37MFTBPtLaB6oVCC",
  "key37": "51Pfo899c2CS8zLoWZVCn1zakKY13By6cWy8ogPdB6o87iCLKDvxfqus1dTk7SiTs1SeQmPFBe7DeUNbyRNdHjJP",
  "key38": "5SHTcZiRDW2GYYXWtL94hZcNoPQMUFgcsq5UfdzoUTUxv9BWGX5EM3FCkV1enPrFhBBMoyjowPq4mqfWZ2pXNR9z",
  "key39": "cAqjYv21YEorGBWjtxDy8Yios3R66fdDZaXryRPZWyT4n43rZpdLzqps1sGusKE2ZkXEwnJpvLGYe1aJ5VoS6xk",
  "key40": "4NEmJAwz7rrCGRMWb3iDK6u89Xu1EKL8VT2oDsfEmoVbixf4gf4PSNFeoz2RMpWg4Bhfk2YRuFc3dy3pcD4Co7J6",
  "key41": "3XxiWsFcKY3pUoxUWQPH5Ky1xjjdSZ7vXJ3LeVjQxPSZRE9fLxLJNF5pTQ15wrfqjTTaoiLTSi5GgUaX3No849h7",
  "key42": "4Z9vZsbicPezMUznWpL9uALwxxcV8JBM6nN5RomzJGfbP3YT6FRUiuE3gVGi7ni7jMPD9KTsfh8UDRMN5qyAiFWb",
  "key43": "51ufcbnzCT8KuJPLfcPCUVwLqqbgFhtzn1momvzMq6Qqi68XhNgP7nkfGg1Nh9uKdBU44D3DxPaSYGnAM3yhpQSn",
  "key44": "3njhWQDWhb2Nw7rUWHrgkGqyTpGpkX6iAFGqqNBDYct8rL3sjwT6V5Ufs1DRq6ASXjdL4txpm2dfWECCdS7EyZx2",
  "key45": "3ec6Ks8spA6BGbiZaMH4gNTtN2NkiXWd7FvKutxN5xAiDvssXsMxUZ2d3P1AXgurudR7zvvi6dDoKdYuEcAxcmHc",
  "key46": "2RoEAScotWzsUuscPm82tzmLQX4ZG89fAugcwwcwWJZrPc7N3sJ5BX7XFSFhUQKdPXWLdbxwQzr2rqKkPJkpLuxQ"
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
