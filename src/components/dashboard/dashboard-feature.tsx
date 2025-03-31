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
    "2pANXjE26WA5YtqpvPuTwvcXrsHh1x52A5Ahi3Zc68UkPoBecT4e9FoPQSdv8shLKByXBdptx2VSKweNgV2kqshq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNNnSEEJ4K89qgpUfe1TfqRfRt6P5y8bGXMQezkuLtzLKgRWX5JEoUTiYgG7Rp6qXjuMmcEKzQhnEDchhd1KzXA",
  "key1": "2HgmjVvYMzf5sSfi67oFz5CPH7YoHgAtxSMZHZBUXa9aGVBZNMdTMjMUK9cABfrJwzemvp392NZ5fajSheSWW66k",
  "key2": "5DyqRboG6AniavL6FyfuoxutJAztTm6zjXoSMn11bb8nPmYM69aNLRGPuY4JW54fhVeMm6YTiJD42yuiwTfnHcrN",
  "key3": "2RRc83o34XQJJ44J29GdeUx6HDmwixsjfrgJoG4U87f2NZZfxEw5AkdqV6RghPCau7kSby2Kc4cYXTv5VR51WnpT",
  "key4": "2noZzL49y7NsCdGeEUHjW1GxFCZYhjSG9MJmpG2muTtqfTGth2onCKUokaCTdgAmjrMhAzSYGRBjTMgxWnmsJaHN",
  "key5": "3fyxHF9ovfKJHnmTjcUjWTAEa2ADYsB8XwA1Gx8kjsUD9djpyGzjdXGXLApaNdyo2HHcHCMAU7NKYuiXDdHXpKWS",
  "key6": "3VioiHsb56aCMBJjG8AskYaXAjPRopY5T2rmTa2hyrQ8h3W8KJMtnbQcpzFSvR7gJLMYAKavS47HkKLphBpRFzu4",
  "key7": "5NevBJf3gqUt42P8p7z76XGVFw2etzbTxE2MD8ChGgWD3GtvRx2nmUkCn4UpArTWkwz2S6RpowSXKT3RpYPooYVz",
  "key8": "58HENoiPXZQzEVKz8UnHvPbhxaXDx91KQYnG2XfGiuRo1eJTGiPSY8aCesQnXV1zMjbFCXNEcR7Lmn71Qx6UwsQ9",
  "key9": "4q9Hc7KNU1f63JwBq9QKRfh8oRRLPSnQtmcCQDt2NgGw7A3N2zUMCUieWAz4NgmNoR6iMg55L297pC8vWRV2gqTe",
  "key10": "x9fDknhvaASYJmcpz5GnPRT2grtoyzdxzWbGfVJ3QAtnqBqSd5C2FT8PHhxjhxk4p7qy6MY5jGYKyyiM99VQBzG",
  "key11": "3AijrPtJqZ7z2zHsp33QuniDRbsW7yMdJggNDo8MTbVsSrvqxLCzgynhqje1XkuxYjkaaGpkBdPQKcTd7QtbC3Rp",
  "key12": "3bqmrYG9ANyc8ffvoZWxjYTMcA9ogpPsskcefQaqM1bZkT7ZgsRSoYgYqTnW7Fhtj48wyT4nvdCziS151jPR127c",
  "key13": "22fa5m1WBh7KiNPwVPr9UDdg4aGADGsrHVqKRD66UsZYgYQhkfn5tfiiRtdtWkqS4NeKdEcDeGBUjjLpjzUWEMDR",
  "key14": "tTjqBPhYxUHG9scBbL8rsZfvEzKXBg9crbNNtYQXmHdRzHg6AobQy6WNjNKdibbBvmFE8pXbepvov55QQB7PfhQ",
  "key15": "bnqDQh8wG5JL71cp3P3c8CGGhrvzxDXWmfq7yWM1NnCBirpy9SvDjhFWUYKiBnEokhwWB1d8Fqo1P4roPd97g7q",
  "key16": "Zni41fmBarudme4C6pvEDh8ac5HbDzfgbr8GKTYYQt7vegshdrfBtfBvzvexyb6FFKreYWm2hNbUdAYmobwNF8Z",
  "key17": "H74qVDfE8Hmx4bKcivfWNAigFoYKVaEgw5EmykqbNAnhit3tDNkLdLYEJAMvyucAkkFmRXgo2KGHagF6AZ8z68a",
  "key18": "2MKspp1G9Quw2DjZTrh5poS8N5C4dTyzD36P74q5PzUB9exLeU5ob5eoKoV9hpqGqxQzvfu8yxbq7er2ZzwSr3vb",
  "key19": "2FeeoXqpVZvNfXGBkiKjh5UdZDcvH8Xv3hicJZ6v569NgSGNBLWNfrSNspg7fgG3WwvRAwzXY43fLzHPPs4wimmd",
  "key20": "2dETJhEv8dRddeqZzXpDH7xxppYSyHiZbN6j3dWiTJiafBEmdxsQVUcDcmN6LYGLEvh8EZjaS8bGygBfgcu7ouSZ",
  "key21": "3M4Cuk24eo2VgUJ3b4rAutbYNkFkSEKL2e54Mvi4BeCfCEfFL4Pu6y5kLVjFMRZDbaFAaPgDKVVm8DppJFTaXuXT",
  "key22": "4pWgpJ5DQyEQvveNXbSmuu3V7WvtpRQuVxfGxuPvQ675VeaKxm56SuTTC6KJ7AZWBXUNDv4W4CZzBDXFC8Yie6vu",
  "key23": "53VFEAndW6BXWSPr3sS1MmpSaWrQ8a5WSM1FFRCzvyWGsRy3GSWY1UgatY3pkcCWbnLTJh5KwgQrhmwTHDjnVmVY",
  "key24": "5yke9BS13mbQ4AN8BDU7Rycce9T3skTh4Q5DL3X62KqTG9NSjzKobkTJH31Rm31AEH4hvuH3sZ4TUKUxcEqdhTDo",
  "key25": "33N9rv9GTf9jA3MDKtNvdnDQFRaSZ3kr2umdSqkWP7pcLhuK1JHt6Rke1cJ8gf8Jc6VVphNmKngQd11gWESAATdW",
  "key26": "3UBZbvEpnbUkyeVvEnjTzEwCMHw5Zc8JbfjTwhtxjs761RSztsC7nBDVsGwi3UUoN3y1vEkMbjf36bCmn2sLGfAW",
  "key27": "2TDRHRqFcLL9WdW9AbdDmY6BqR4n4so31PmtHaQg7diAmz9pdwyG7kUHZ4wAr2RQ3Y29RNoFT8mJYVh9BNBzU9Np",
  "key28": "47aJmP1fjEdgZkDPxD4X4mz6tjmJw7Vb27Mo6Y3NvPjdLuzRtzM7CfRYg1vDMt1QPoQaQRp2mApEHgmAuNWd9iot",
  "key29": "3KT8S8zEXdDBwpj3WvXUJCCn4iBsnA7AfguDxDfKbc1oWhahfAzs7kMdJCkeSmZ9D7CktSqfr8Tr3ZES9eUYKhvi",
  "key30": "22HVLAwsuzMNx7bbFaeVqevzwxqi3uwLXqVMN6whfBAtxzWcsTu4eePrwLQKzSwURQRMiWV3A9fEeqUp2ZECocnY",
  "key31": "KAxBdtDTiAtK66p2tVMc8Vd21dq71UsPJKJiUWywWSKcjWn4wMCgcPAHvCs5gDw5mnUyMp5mADVWMPL3imBWp28",
  "key32": "3nd7Wc1fcJTCcRWcDPckucj2CZW6R8x4AhtsBgpL4jVeHyAak3BT92hmd6g28f4DiTqAYQgTmwbEswkF1RtZQJnJ",
  "key33": "zZu9x2dU4LDhm7yn1fZpWKgrBbQBfGRTuW4v7c2XitLAK4jh8UH7i5HxWvwmtjskVyiooTFJB53EuYkC3UAvdH3",
  "key34": "5dwXxQZJVhcTq4p9wtGMjdSNUEmuh2GczgP4Vy61y33tN7ar3duUEATP15xRfs9aEE3DkMEtzWiy1zjv4Rn2g6Hk",
  "key35": "39k3kkv9eBXHGr87QRhZ9WjXrho6VowJPU6g9m65TKvmQfBAnUEjbQ89dBvSwHQNek8iVSu4Yyc6NHt5s5U9QY2o",
  "key36": "5S4v3dKFLiJiq9ixardBEHRBBDL25ZEzzKQpbUoy4xhUUno98noPRH3B2aUf5ZJHPUFEiW21KBJ5dJZX8HqTfcKZ",
  "key37": "3ipSSupeX99D76P3EyJeAG5fQjGaS5EM6ugE8c6Ty7vD2nMVUuh2ndRdwYUug7yrvZgp2wiZVUqWp2GjN25BF9jE",
  "key38": "2v4N2ZXao53JhaLNNy8gYrNU32sNBz93BFqEmL68aexWzrfeCSq4WXgsWvqNU4akoPu6naAjEowL2yrfhG144B2Z",
  "key39": "2NgUcLNuBdrM8rsYtNZkUUwKsDatDDyPUMDjH9rVzQjxf8ADecoV9Trmb3A4NFpStUGyVS8tSCLhaQ2Qjdn3XLAQ"
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
