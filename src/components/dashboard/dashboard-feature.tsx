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
    "25rE8KSyckfg92BUrb1sSEqSnk3M7n7LBv6XdCrTGVTwV4RgVXRqyPzTSNzMzqT9pUJygUXgoQnqwFjJjjNQpddw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JLq36o2AvJ8VAQVzP5Vn7CfMwHwZsZD7VqUsgbtQYb6E8ziYhFcoaX1524cxgxGXe34Zk6rMKDv4PMtVHMGkV4C",
  "key1": "3q2uQgYa6iUBCT9wnKB2ZGx4SHAiXUia8BJjgh2zktjhjWh3YxNEJaH7GEf5NiYLi9s6DEKzNUhAYgBhp1otTBdE",
  "key2": "FWtfCY4w8uCfxkLi7GZpcVdCrJmJ7c3J9qToNmnHt6YCr9WQWh6HPec23RnfD6C8ECRMZhBtkDrejQKuJzQ2y2r",
  "key3": "2mrrE4f7m944km5MZqET7LrKZbQGcoEJyqqbEeYAhkKJv8cwDaBnMM1sZ31m97GzF7Wu9hktU5V4oeGtXSZA6SYs",
  "key4": "4GcELqQj8A9d6XgMSpkK46DCUM2FyRE3k625u4euxzUB4GFZkns88U6CdN8eTAWBWMFPzWQzd4suVkNUR1kZQTMJ",
  "key5": "3DNZuRdkXWGUaTc4AEg4khLJifT65dPvwehhsFJmuTp6AXcCSKM7RD6miFdpaJTPjZfHU1Cp2P4oMUtBi6ytt1rq",
  "key6": "HZMh7cko4sZwrd6Ye1F2rZ4HEFqSMCLcehyAfyWCBCp1jeDt8ybRrB1kgPvLSB7YqA4YmRwLBwvUyznEJ7oiA4k",
  "key7": "3EjbrPQfGv2FyuFGhiEuV9PRw6Ws7cSBTkzYWp8bukdz2LkaCJiWhCN4LFc7z5rkaGEchFUzneKnbZAP6ytPxRPq",
  "key8": "4yo4Syu2VJp1E9sftg7crEVNT8aVCVJCvwKkLAeNi1YKfg6qmSbNfiTdg85Wxvq6bMt1FiFmZ6Q56UzSY1QRSHxA",
  "key9": "2Se8dZZUaMxfhi81h26mn4c8bbZag4iJGA6x5iBJNXPuvevihgVbVSHzmXHWiMvHUzyR6uxYFXuLCNy92vttF8bt",
  "key10": "4f1Dk67Rs11GBk7PzAJBkeVvW4CkngpYojUtorZMB2kkN4Rk8GfimKtKpUViqUAQTXgtg2QW353P4nebr1fuiyHk",
  "key11": "4Wg1Uk3v2fFdWR8AFYmpVEfkhQbupzs4d3bARSQ4tAfmgXw8yB9MQHK3uDB3GUPgenjpiAMWG2rdsyrkLZ4hH9mZ",
  "key12": "2zQEwHLKwvjERp62AALe1dqCuEd1tYv8ojSHd3rdR5LU6NA9LMBCLLXZKqJC91B1hyvESzDoWSUV4vKrQNp6YvS5",
  "key13": "3HmDk6Yd7EXssK2oFDYNwWpaun1pAnB1C9kUPQUKrH4BHdUMfmJi57FkAaWfSNpot3jrmhcPwX8KgnDiASML9XHn",
  "key14": "3bjwUMBL19k84btLcQK4Q2vXTMcCNXNP5VKMdV47gbcqpuDEgGKB54LQxZD5tcfQNEqwZGN3MRfWanY4pSLbXjjg",
  "key15": "3SGLvMVLfXXvJWQDirSyGK5JttNQJUZRy3UvD9w9jBc6b8adPnSyxELYrfycM7G53ySADcBktRuoEHoq9fgBxH9y",
  "key16": "2sfKGuLFfmAe7dRtRiKkszyyJRftSfasJfkccPK6MhWJCLPTR21q8d3WBkN9DptXd32GkwWe6C4jTU6AstdDqXTw",
  "key17": "4di71e3LF8tszgau2euRuU8atH49XN3SrP6RVHW4n7VU1eFjb5MoeNHG6KoWep6mUW88YDmCaw4HT6AgAZYyBrxT",
  "key18": "2t4Qh3f4nSaYZxFBxREWAJBtsNx46UbhY7tNTBsDdpsTzU5PcY1Hubry6T6H7Xzi115v43V3nSpVHjnuUoQfQPr2",
  "key19": "4gTT2RvWYFz2pnCaLhF6PrF2jMK6kM1atjMenU9mh5BDqJQibjmEz5K8skaL57CXNH8GRTXXf2uC4M85uLLMmnL1",
  "key20": "3GnQUc9UiVbeNnELYvpPBhwquN7hJr1XEewBCxww6gtd9tkSNKCHTWMGoBNfgKS1KuCRDpqpTBT6WAMuDqgvc3ca",
  "key21": "BkPxQZK3GspNqAxencXXzKzfQgrGoLmRC77WSBtcwCbAWiowCYUjKFWd8ajFLVTzRy5xkHeLq86s4wpMJnhFVx7",
  "key22": "1W3jTE9nVWt4qjJvdmxJUJxGxEgTYs4HPDnCvn8Liax8NDKuK5GSBeRoWM7x36wgcaTYMJ1jpVCqNEyj37F3Ano",
  "key23": "c1Ratis6K4gN5uAbkqJK89WvTEGe9gcLmGWiq8EibAi9XzNnjp28z9HMZzGf9Ng8GT71mQdwkcQRwkANFccesqk",
  "key24": "4izFqQN72VF47sayUHfa3M5CnuJs29StZYeNnWBLc2ZpZ2HHEQauTRCacnMMR8VR8kQruhcxDDKdJnuDL1TTxLXk",
  "key25": "4BJZY94Sz5DsVyzSd6TmBaDW8QxSW4z5BznMWUPB5WUJLMnpShsVDJhkfD2jAHTHySxHEJj94Mm91Mk3vHqdSpgX",
  "key26": "58Pxb7j16P4L1QkPPfDxR7cZesAJRyiPrydD1YfqYFYdHe8KY5UPmmbvw3hzQ4qTKksSAJdwFxw9f7aFEpXmC4Ae",
  "key27": "3GYSQYriGcPTaiXzfhqiNucwcVN9C8ShNZN81R7rDAXKicWqsa8ufnd6qqM3TRoN1JJm5BZ8iyjsSWK4Ux77PCoV",
  "key28": "22moFAVAnpbgwQNQCcwJ1pGuMQu7NhwDnnj5WWG7NRt5vsFjX8D4Yr83o8EFBe3vbF2mgAwrNomqHcm95A9cLRRv",
  "key29": "33vPHcUknhbctzG5PvBNwmAmxsreCUqAXXFMwVMPZQxNfQsz2SVmKz3jtQnMzRhcnKBX8hNJ6kySbiSBhnrJMLBg",
  "key30": "2hyBgh1YKxLEDNPx9ovWnCvKUPds2YhzvkP3F1Sw8k82PDETWXAgkEpNRHg5jFJY3LMC4dj9WXTSyPzrdVtsKree",
  "key31": "3x5YK9g6b5ejiSiqnkqM9v15F2FcE99M4soZ5i5ih1t64wRAnr7umPvKZQKqciJKmgkac9JLbCtvVEosTHvrG4ma",
  "key32": "3rWXffFXpM9YamAfciSV147m7XeTYmpqViwBP3BupeoceCUg6ucDiVEr7zgfktXf2ReueZ5z4cWegsFzVd9wirfs",
  "key33": "3cEKvS6zwhoKcpmvayVopHkoEwA2b4FgsN2t3tqR96dpa5eWY6bAh4b7695vUTt9G44ZsHN1QdiGCuuA8mYFvEZo",
  "key34": "2Jgv66wYCmfWL13eChBKJXD9E9PGNkpL7qg7iTokfB4Ni8cJ9jmzkByi3mho2Y5bNpFn5cKtYMGWznC3ebsTFunP",
  "key35": "3gWEDoQMALXWctEMxkPTLK4ZdKtsBfPdMo8AmqMDK5w1tSkkSLysh7SvQFZNRmSLqPzr2yPpVMZ2fHxWAaVYcKUy",
  "key36": "2AtjgBCkgTVfeSaqkuEm6JbfXt6t4frfDsjWA2992DyMCQepix7EfcDsFsYyugJtKNsvE4SytTTCr3en3ERNteUY",
  "key37": "3JvFXNYbn1fogEJrNKbBhNyhHFAQbr5eK8YUY3cBzXq8JYLukaHAtdovVEg3yr2yTGGmqmAJ1MHGLW5JkLv953Do",
  "key38": "3kULWikAi9anywMsDQcmWk2RxWa8cXVmNiuXWC53P7d81BwGN7L1Q7WYa93UNbY1qZZSbQKcU462aeE9EQjmxHdW",
  "key39": "5dMMBzdXWnpykSYGsnNkFHTehjhGyLZEQe5hgoumYor7TS1esYSAwANPaETzWRJmLCspsQfW1sDpNBZhT1DcFrmU",
  "key40": "4vrMFN2di6SHEM3jW8ew1oeDWr4Qz8W1aWd2crn2AVZyTR2HQxqJUVYBHLjsSciw8afcmWodFYvog4vC1iL18DKU",
  "key41": "3BNvpijEdbGyVPXoQjZ32JF9SKWdoxP5F5QG42Xw2PDxFa8KfAUYVXHjRoFUMNZiw9AdsMrEb3zNn7mnZow5N9UX",
  "key42": "3bR9RfzdTzMYKi5L3pgpwjpETmzg9VGEViR8imaAoFaCfEJSUg7vTSpUSA3AXbqoSbp2axnZjekphQJneAgcfBN6",
  "key43": "3HPVgvR2KyuCj2TRJ916THES22CtgMWkn3CaSVyGqwAburYNSn2CgL5ujHw6KMTpYtmu96Q6GasqQdhfHJH4KD3c",
  "key44": "4XM76x2xvWW4YsKC4JAnvGUHZH6nXGbiFzK9t9F2LHCaUswCW4bHidW7s43UFKcZwkyzaxGXz4ybN8iQTA4C2oEo",
  "key45": "5D7cB7Sfoab51aM3QouFcGVZwdkD2UwR1BvRW9KHjwg1GKVXHE8iU6vqzGB1cj3fBGeQuw91UbD8BE68hYZGrBTq"
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
