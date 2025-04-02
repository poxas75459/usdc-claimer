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
    "hbtozv5QERjFSnumyGYKk2xCCVgQ1jSupH4wXRWjrZTFhL2EKbwKddfeTfjjRAkWPwWJEZAasB9VMGB7kkj8cwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHfkydt5NzQaqfqr3izoeDHy17aGp4bXnfp5Viv4QUdp3pKu7fsyNZFfJC879nTFdmzQwxchCL2YaJ97bF35emj",
  "key1": "556fGYrwzZE2x5r83DCiobHa4ChR1tGEriDUMveTJQFASvE5H1ShFq5KR9u3sxbVLFqwBBxyfAzx2W4zgkPDdYLZ",
  "key2": "2EbwYxMGS5P6cyBZDZY1GpHCYFrJdLKCXn3Sy5L4AJPRsC3DcAjgMLX1EKSZNNWab6RYtKMZewaPVZ6qNUww72Jj",
  "key3": "hFpwiGaqoZTJEJB6hsQM4R5xSS2Mz3172L7dRBDgbEkjATyUTQTtibiBdefbNHYjdr4SLdosSLrM6Maq3hVBDwz",
  "key4": "5we9smFGJ4bD7Yj5AoDPqZgNrq42W6C8GTA4UPq87pDLaDs6c1Hbtvt8LmDskSm9BR44B2dH4g2k8HEs9cZq21X6",
  "key5": "5WGyjpSL4gtREEGFpVRaY2RLxPJi5YFX52q43xdvnZVghAB1cYFGjyDyP9yKm566f1tMSFb6nig1eFg2h6k3c48W",
  "key6": "4u42BnFQUZFs6XwVt8RyBRQZ1BxHjavybYFB3J3GnzC4MNw2p3Y6RxVV4Zo4Za8MR4TREm3FNMvZN9hcPZW2pvi7",
  "key7": "3hVPHprTKpieqAbHjvGqD1JegZrWReqzwRCZgVfmEiKrYhu5ARqKU2a8i9wTumivVpPoCVSLn7wMAiCQZUiUPJ6e",
  "key8": "5ZpKhhR7Fnxf3u5qJmsCrVMTMgRvd17yKcYHTw2cXhAwm9Usbdt1EiGoL4ZkDyo6xNdhSmekiKqsZGx7DEpPQ26T",
  "key9": "3z9smD4dyKm6yynvzTVSitf8kULpMajUUvyqvyYU5kaAtjufaHxhAZKdYAnYdmDHmZH2tfGKGmdkrbTaAWocq97P",
  "key10": "2aGxMbTMs18EB34cHEkfmr3DBLFhtpX6ZscAZXXNWWezgPHy6iHJeXkcL4RoFTmewd1uJyM4tRh25JEYSF9F3BUU",
  "key11": "54yzJEnb1ArK4Me2A8bQFjSd1voTHCYiTTSaeW7YAV3cKAPbDJtLEhYSJH5aP9mU1VHUWrYf9Ux7hZRYaSBH6duM",
  "key12": "24K5so9Z3PfKuxgvos2VwHssnRa7gpvzZMDjVVFmHERPg7LFoAt1j1ZHfeLhizuuNn9xPGS2gzDrmBVfhkKjR8u4",
  "key13": "2qXdtFc34NPTpv8rTTtgtc8XAYnBaWegRHETcwhRFbXZWgZxhU7q1bKbwFcB1x96Pn8qSpHFvJvAZx9ddSUXfQyw",
  "key14": "VqBu358D2zseHhe28n6b1FH1jncxNTRQDvMYbccWusN9U1j1Jq5ExExSW1UJPnYXuQLrkQ47qwnzCgZtUJLLout",
  "key15": "5SPMcodViASRFxdnuScxURCQ8zTtjRPdAuTkuvw7fXKaFGBAWYUBfrWHXjhmFS9mvQmwqkxbtDNZZ8KaS9C3PXAr",
  "key16": "4MPuXvYBULLG7KsWobntgKkpp29yQU63tXQsUaUU6FR66SiBYqNs26u4FEtKBy7wzSax72dtgcc6xZhwTAKfGr1s",
  "key17": "6codYFhgygKEg9GSaW8FmhzNkvRVqqPpHVGwC2wxidwMdn6ajCgNBW6mtJyxuGBu7VyW4qYnpCHYzgFEoYR71ay",
  "key18": "32xdc45osRMTrqG9Ysm1Ldr3xW3Bpiu3f6YXKMYWCPi4KbabmHnGA6UPYsRkcFQFQ7VrtJ4Z6A8pFiGSHzDzxiRW",
  "key19": "XwFQggMBAPYuA5mf3uiYAmRitejY1oxpR5BpLu9iPKf2iuB3XZPMxun2rXJRSgciSoqWtwkWWg5ZubqLPkcyvVk",
  "key20": "42yd7zTfoerLYtFpC5guDQamZwaf43MbtSDEJcZmiJ4L7j26oEJVKtHVYtKweWasQamLMwQ7Gv4ViCiwuTZkmL9o",
  "key21": "3Y1fDtD6hbTUYmnbhM6ZjF7HpBbSfnLZ2WnL6sLPF2VDSfBefBj62bKC5yHwnQF9YqHUqmgkmTbyAi5MMoFYCEAK",
  "key22": "57FdNh8H1NdnipitgUzTYyDQi4N8Uupv9YHzb8BbFSTnGWw6JCXKasbNHxdQqD7fR52hRU7QAZTsTUH6d5PzNSRk",
  "key23": "5db4E7vsK6d1jQML2vKRkrTXng4GPgHaq8Qw8gTbzX4EqxWY5AQHN36YAA9zXpYFb75yDBDfiZwidnCeYw9v7gtx",
  "key24": "3JoVAPXKmfJkriH6PtZe6A6FopqzFroZz13sAFvjSjwdZ6tR8572vnTvgtBfBJhyWrSay2kbKNAmtaAtLSpGShqW",
  "key25": "g7dmecRyDXdNhpwpKbDCk6sAe2SwvGnPrwP89XHSJ3wo2JvRcLWNP3bxbyyKjaBZ1TJADVFFUamZm8U9686mHws",
  "key26": "2dzBv1TwugaGpAN8DDqNsVjr5WyA152muCnz7CWzdcCGvV4xLjMs9aH7vkuJkfJ6gsyZfxSEfF8S3jsxF7cYouBQ",
  "key27": "3dXWsyHz979BuiJmwJvAqpykkhgsiV9qQVRUq8TdhCv9JnFrmYXsjF9thZyC7rK3xQe8JsZegLWvPD6ywmDZiLix",
  "key28": "4VupFZ4LFV8caythzN1DnWJQWYZvFCkmpvcS3s43EiHwuRQVJkF1xLtvLBJ98D8grZL99xm5HUNd1DBUEMD4CitL",
  "key29": "tZNMAvMRqQarzYpXEGr9H27ENGQ4fE7Bm2LgDSabKe2NAKHMhchtVyH5k1C4fznkGhRN51m9J7Gp93BP9aQWrak",
  "key30": "4q6K6GPzgYofd481uqNtC1tfFFAAvDrvYrdBm7W5iAVbr6GUrJKtich5VeQYopBCGBXiyj32gS7RsHg9sikhxwYQ",
  "key31": "4W4gs8jU1EWenjKHtkxRm3kNWGDfXU99v68aWueyDh9YwdUwve7irrQqTqVEDZfQXDTYhiEme1TLzpbVrVmyEzVo",
  "key32": "4mYMZAf1GhKe83Xa6o9fzyAwYo5CBVw3rFJA7xfXkk4ZmnZXahcHMA7xWCA2VPX8jfEmAGxhZF3vDoWrcAjwH2oE",
  "key33": "hNB9cZf3192Y3F6N4pGaR4ZZjogyFyRiKibx98XhrbutUdfHGYpg4n3LMevMQFNqFNZpY4vNgkYErPwEQGJWUcz",
  "key34": "3wdAned4wLnTmXMmpTokpuNa6UswkgDG64tYozmBVC4ayFgSVbJ97NiFvhNRQoxmZed7T2V5ViifGzHU1fJUZvE4",
  "key35": "2Zua3pPnDhqLAUcv1KEmgBH4vSSPB9SEU5GzUfXtdZaXneEr3s8SKDnC3R8aXsoXSWJsgVW8g4aN4rC2emDL4pwr",
  "key36": "5cdKkxXZUa7dt1Y4TTZNi7mW7rf591oWfuXZnnUjgcQVDVinPnjqXuikD6U7MjnZYEegoDb4Suo5nJdY6DLPvMgq",
  "key37": "2y6ir4K8uWasj3YZeBRK7TnBj4EjrYrM9LBFeQK3tENZkF695wZ1FpC5EyFkK3PPqzxewpeYHjBjHvdrNSCXDDcZ",
  "key38": "2D7nWpTtseJ62gDY5fL4sxibzUv7QdER1Kq3NCcZDRPPdhWQTgfyqeWuZ9G79fmoMucZspHUfv8tE8yTP1NPyRv2",
  "key39": "4YHkh3Ka2pAon8hLPUyUF7A727kHcwEvCBkygj6EPKnNHj5Lf27ssru6Y4K7BCfgdUBhhjFw7KxuFKAUVMqNWkLi",
  "key40": "4HtuU8Wwd3Tn1ipidDsVDYMfVsmeNUHatJMvK6EQJBA9tdpHuk2sD3qyQtYryMft4kRz5JFopXC2dZFSCqXXzTD3",
  "key41": "4RNnZWEP4swodRnChgNRMNqh6Dm8Jgxi2PBX6PwABUY1QcPQjpwukrRrEnKohHSL8Y2vbHPbCRwqjwWkXUqjRfTk",
  "key42": "3uMzbdgsAWzK81XbCRa4ZYxG9YUgmEwHQCYR5Sbi1WLxACkkMQxZfYg7mcS4wY878Gokw1qkwBcS67mMvnu83JA3",
  "key43": "zXs9i16PsxodM2XmD2dDHeBwKbbubfHs6WTcesoDzMg8WpKa2ZcnQb77Q6WK5FBENYzHucCCUCJkvN81sHz6Qgi",
  "key44": "2LD4uFUcMBkxQnDNHDFpEFwsERahagpQbbDea99RgqNsTGjczMwTDsbJAKrjgChUDjcXiyEonZxcQ2uT15FvxHjr",
  "key45": "63RvuXjpMTQgSTMaxE61zaqALRDSGQKzQCNsh78AuWRY2r1eNJLHxUR2VEoJmyJozdmqhPxUcCvFieJ4jqBiG9dX",
  "key46": "RkEzMXv6WY1VkRXQ3JYoPXP99a56N6S2XgNwZZfSdByoYidynNeHA1HhczzNGduZNLvis68dzGWUDzqkNB9RKZY",
  "key47": "4PSdvRhTXSgjJfqm9gJdR9WHAN5CTzpZyfRPAh5SR8iyqzfU57xETARfVRZ6hcEZBVZLy2BwUuMi4F8vj5amZq7w",
  "key48": "5ZHWC3LjcQDZtbSc9GZVAt6k7cSRBssvZoD9YgNfVsCNCDr1iY8siwVWv5CtRKS7KjKtBGyPKYBDqUEUZxBB9qV4",
  "key49": "4RLjqqgtB9tEoA5jC6dVFWK8EWSfpoyiXU5HuZzNf5D5n2AXGBXot5RYxed1n6cu2fFNMwjSsyUQYTaunbbxZD19"
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
