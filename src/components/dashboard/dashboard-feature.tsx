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
    "4kw29FyNaJxTgHcdaframt8VMjC9t6gfJ5v26fcE4MugSUCH8ea7nvbv5f8nnkPBZ4v7qKaLKRcxWpP9hkZHVJNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRfjNzufUVRJnj4CpPG42BERM4bEcGUenpH61RMHSDT96y6D22b2ZJeBXXhEAwNrReCqRmizQHh7tWn2gUkvuJU",
  "key1": "53rqfhGDhNsq11ENJAgayiQQNP4PaFDoerRHYHwzcSDp9Tr3AXzcfWV9CvTjfkzhVwB6HiUrCpsM7MQkUY7uaQxD",
  "key2": "3SF3wCXaJrVSja66xFqsCQGdqE4J1Df4MjY5u3QJTgH7iKizbKSVqEKqQtReR7wumMhsxtJ66wRe6BfVL4hhQMtY",
  "key3": "47gVPZx3NZbpTTurMjpuzZs5H8gvn9KwDqMCpjJKbQQxwZoqsLmmLgKqyvHHHxv89DciEGutznrb2ThynwNSxcKT",
  "key4": "5niBPmoiPSjpBYUvJrrjTYnQrEne6YASPLNbosyq8WmGYRJRjrXuN8NvsQhbSHbnEJNprsQR6ys5sMpMwwRM8EzR",
  "key5": "3o5G2MoQ8yo7PZLuRniGA3qiXTUu2KRfmbeN2TBZLTcAirDxa7cuuLc6yoEgbbmRUPDFqJY11vABD66nfNG9siRf",
  "key6": "fuwizNMWjbiYxsHcokZRNFkL3hqgWCSu2xMms8CwqvP9WsTAK5c4oCNSLFsZXxe9qXXDtUWSD6efkrp2Rbw3bSp",
  "key7": "kTdfz7Qc281r1WkwQAg5xfmT3LQitpfCmsSCHSqiWUtATtTBRtP1t8KMDGMmTD3AoFxD2sYd5tDar8mL9cQ13Eh",
  "key8": "3Z5A6ab9Cq5HEy8uNzj6CbPy3rJWmgKnPzbT5byqesG8pSH5YE5efnmJVifjwo76QeDXvkdyqqzaiY89XxYbmfaU",
  "key9": "46chANS5QAHQuri4TzDUnsoReVucXwzRHqxm7H2rL75N99QxH6TS35Lj4aqXq8JxseoJBxj3nxwCNx4zBWmpmgET",
  "key10": "tXpZGje5GMJGja77W3PVsGxzrA4mW6fXoruSCP6D5bHKtcLwzpqkc5XdrK7iCKoE2PYrbSfy61vVeG6w72meSuH",
  "key11": "xHuJGxrAAp7MJnGxCQGUJuW2tKACjewAMkPjENnN7Mg3mzLXUVA5SNMC5sq29Niq873xv8MX9SERRHL1fiqvN6U",
  "key12": "3S1TYBZ1ZzVNkw4xmXFjcGyz53xGGby8MjmzTNndkias4VHVMZ5UoHFGefrfJGwYmTVCYv8bnjZG9Vy8swgFZETy",
  "key13": "5qEi6aSQApGW3RgNTwEyYP7pXzP4A9GevtMYuqpybhksSj3MxnKtRKvRVdghWUiePBuwsHiXXSUeGJ7S4gXd7LMA",
  "key14": "3fybuGkkksDvxxx3hoCeQo1iwM1MtwDPvsTR9EDgzJAwCbet2sRKh9fsdYdPx7kt9J6hG6HVq5anUvDGR14VqcZU",
  "key15": "3ohmgLMjm7VQGJkr2qxTnWEZfiXSTUfbCLe2RVvF182NzK6NydVEGWjBU4RsCTUh4rVhdQy1QST9cgRH2wKuJKVA",
  "key16": "1jEv5NgPSJcapfEz5H7jJZp8KLXYt268yehpcSBP9DnED7ZLGbSk3dkRpEcwYHpStGfqtrXDkJtm4fGG21MkmAi",
  "key17": "2hoqaGWMHsVWi4U4v3efdt7jYeh9VEtP1LggJcXsDQqvnHnyV7q8kDD65eNZBYzRdM9HxSu5v6Zb1hy1zg6GAkHx",
  "key18": "YiGZpoF4itfmzUgKJXm8eHzPwsKrs3haeKaFMY41bB5BdSuWPAjPzhJHXgNyjLLbGBb9PVTizTub4peW6ckUPjD",
  "key19": "5bCTMyUWr1qF8f7i647WP5JQ1C213GgrJL7nLgzoD7cDVASxYk4J3mfCCgur3gcJHpHgbA8BEzUE67VcjYp2meVA",
  "key20": "2khUazZg13ubpzPPVgjpDt3XboWKNNEXMEriWeRJGhgg7uE6tVvFHyRrTDAjZkiRaQZda9iXJRG1PnDsgWPCjLRv",
  "key21": "45ryhShVCwsa31bgrzjvsdbK7JeXP1YBvHfwWh5fYycrKbq9iV9XTLnvdWZYK13Dq785i7Gf57YJxGFakwzDaz7K",
  "key22": "64ZNPJeLjnjeXHboTdwvHh7N5xA9RomkKwo2sS2bYpK3nMdH4LPdKwNousLQURkXFDM3VMkbydrjXttnh4jSCZrh",
  "key23": "2w7NvMCxiUgP5AKshGg9kqUWHCFzDAzXCdciDNVM93KYMQKCwBqd4cju5diNAeoXnT1hBeYJDX1m8KfNuEtKPNsj",
  "key24": "41Wax4KMnVsaRP2hGBvoewnz524FUyEN9xekgwUSKXLe4KNGhgcr5oMvW3uTLoBKYiTU7DxDD2uuBimUvYfVwtA1",
  "key25": "4KNigexuR8CEgKiJ7sXhK3cs6KUhnMqH4Gb3wgztXLisMpTmPzcAZhQiMQaYWKqQ4fovJ872HZbCPmT3uhze2Hoe",
  "key26": "3ndkvksVV1h7GPySmGXWFgorS47h4fRV2DM6qfaX6TECZ7veKRxQVMPWR4A4QbTo3BVjuV3XiSHa9UX4D72KuDB4",
  "key27": "3Xuj9hRDiPvDkj1PWcLEvaDPLQAAj6VWBTDZeCkahiY8qFGnLMxv46UUSrx9VwtdZTNUqACuivZkKnvWgrya3M6Q",
  "key28": "3g7VvrJqqMUFYnDwb6x2sLs2YVHdbkojmPvx5XfpZ33aQphFDus59DawzXKVhd6PPwxzHvFvYVkAjEsqAcyK7H4V",
  "key29": "5Eei39SNEX9AvmnP688ukAJeX7n5rWSgzqp9GzPr4kvgEfYjzEuy8N7TF7HR4Zer1csx4YCHST87Lb8eVHG1XDL5",
  "key30": "5Ays8Vdk52g75Nr2GCF3Cg8wtc7cdZCPHSTvWFb6fdLHMzR21V4B6LMN8JidsP3rCLAJGX5GsGJbouv9a5Vg8MLm",
  "key31": "25Xt33HKARUksbEU7N3eNZaTVW6MMD9qKeZGfLABTGgaYVsaEL99iJFb3pdR97gDyBx3zQAiKuT2V5tbXwtaYvwB",
  "key32": "gw9EiWfiaTTEsP2JagdkDeFYL6WngEpTcxL8NML5gbAA5P5wzammcmRtmTU6c9Kv4enU7xkpvoUbvJZ7aDEtD7j",
  "key33": "56hJ4B9ERoEtgjiJDHgaPESsaxXufWdnsXg2StmrKKHdB4MkTwdyVTtYGkVT1Myi38UTageKNUaycbzVt5KqYKFh",
  "key34": "3WFPZN1Rgr31uz1PhVjYPaEo1eHts6h38FscPCP34oucG5SxDqDEVYEyE7nKTPdqBoP2WyGCNTptyKCyxRh6cMs",
  "key35": "5u3Wruc7euJ4xFWxTp3WB4ow135EsUKNgst6h2piWatAtuQKEg5TMGi5UcGRZUc6Tx2qnLVuoBJkSHpQBA2BTdeg"
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
