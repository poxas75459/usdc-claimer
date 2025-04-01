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
    "3deuvuAqKz2Msxdx5vDaeRpRXH3YVvxmeY8smvkvzpba5WV7X5jXtwwuo4ooAH35hTHuAE4PA6HA7PyndJPKZXxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcNuFGSaN9NEpwRch75QxCSzxS3YKiKutgJHTUYX9vR6PhXTa3eeUKmorDkDaaauqYXLxnhJNBLbHNNzPS7brP8",
  "key1": "iA6p5F3cA172epmTh2A57i89sHuShsT9PHvekVDWMUwgmCdtqgWtnPBN9v7RGXMrNJ2mboavGEhcDC9rHJFXKZK",
  "key2": "2tms6iotu1H26QuHzu535eUyFy2rwBm3BV4ZWfKH7G8n8kJ6LAHuKnFJvcWBL9zJuuofAP2ijPmpRTUc3BKx3jQ1",
  "key3": "25Z7sthgEqWGBRFes9P9Qe3ZGEYLGbJkt4SRD3J98obaXWRg7yTqgWZpTqBbET1PbWQcuiSdvMwpsRQjp7QoZ48z",
  "key4": "4D7YXE2zgNDMWKgLLhdGVaFg7PUvaN8rAtKEK8wYy723QgZE6yCGzNPXkamCnjTxYefduBbyYmnxpfb2LjoCatPF",
  "key5": "3vvEj8poAMpsVygbS6ok2wfBbmVCJrigvYAn37zfGS8rYgLHrn2A4fbegfm27Y1Kqu2GjKVqA3oTvPTsRPtpWmng",
  "key6": "48nTDFG5iiF6FZmCv6c9wbi1U14oxbRf6LRPduTgg1857XsiEKjZQTaiyuhonb1e7DJzSm7b9jcT7KxyFCPKiMbq",
  "key7": "2h8oyKRH5epJGGC3vryBfeJxH22pjdkitiDJiNEkNQT3UdcRwXU6R33SQZpPkEnzDwKHXYkFZkR2Vc37zQ8oyL4t",
  "key8": "3tZQkod9XSiad7NEoYFaQypn9qU7QJUNrfx86wCtNSVqkGBFHdVUHQJUDiiCoTLj95PwReGyuLU7N7HSBkdXGLnP",
  "key9": "5eQgbzntHGdR3VJ5CP3Yu4VAhimmQeUBxpGqgaa5fhfkVdUTt2Ly4xHWFAwHqh3SKd1tTPNGAYtfqJJusLB2RHjU",
  "key10": "411jyrdvp1YTxZUSAgY7gCZ52k7Xp5aED6ZTuNyvsYryPNtqcQSH1TBmnWPC2tXHHYA2E7EQYLZQgUdQ9oQbrA48",
  "key11": "yU6gnyeTqDp4xJy1UyNQkLVepQyTy1TW81WTcFtXiohFQtgzqY8A3Ameiup5ySMcvNkYAS7V3smRFLHRbDZymfP",
  "key12": "2d7zqjcWTGAvB35zE6qysE1Y6t9C4pP43ak6JRcn6AeMTaLXLQ6mqGuM27DjWe3nB2LbrBkmotKVzGYT1oUHNcMy",
  "key13": "2qq1cd6tMJF1VaEuBPtBC9jLp2rZMpMkHzEAhRL18Z5EthMb7F7bYUzzwq9wfcbcLTkmZJ9tmzQ3Edq41idBaUNJ",
  "key14": "3nmfGmfWd6LRVirjQEFGBopgbzixQvdReGgfJjtRhT16a7oxnNJM86mZzd4mfiz2MpH1A51aTHVWWuUgL3X1hgJX",
  "key15": "5FSc28fpg3qwemyj3PQeBysH7aDS4j8YJJApmVR1zJqBkZyLj5o2kW7hJB9bZJdT7dA48qF42aG8jDjbmbhqSLwp",
  "key16": "3EwK6TaHUWH7CZAugoJ3MbEDJ5ts6V2qKuZK7MQf22AqojUu7MGQJAC4Wci1RcjtiZwgD6VjmaXZWkAPfxy7BEXk",
  "key17": "2wV8JdPYrULr2obPGu7FyTxE9CXRAPhvTaaNmdqgWagAHGaC8kyEb2g17uhewttppSnHrmgq1QvaUm3nwtMP5La3",
  "key18": "4gMUWnKx6NgLk4P1KnX4P1vJ7eZixGPpDeG3w5SSbNt5NEJ9mLHSY8k5bmi1r6ti6iLmXjCnq28tEPmdCLo6kyH1",
  "key19": "3EVEJFr14o3XTrc9Rye7ZeKNRprq4EmzA8souviusvsSScqZHebVm7aH6N3vtBE7Sk6MDMfHjjR6CEFvbTabX8By",
  "key20": "3pq7juGHSzk2jzDC3QWi3qbDbvi11hkfUmpow7xY84SNRzpnjBXgU3PGEa2TGZBYgfr1zGNvJWP6DQyd1ciHTrop",
  "key21": "46testu84g98RU2fRphRcahSQt7c2rWSwtXqHcGiE7mCHuisv1jxDykVAFeL3g68CqC7qaA1mzK1C4aT2G8LzUm2",
  "key22": "3hoNw2b8LzeyYktvPWU9jHTQYmYp77ZsNpGazDDy6ZVt3MVeBifE4xhYav28QX6Jjpo1fiAktHXiwFfjbquzHRSW",
  "key23": "6JwL2sxRqgcMTMdLFsYREZZ6xTunW5rQc5pP8ApLj8VfddYLggWxcRcDmhcDZLGSMXuE2hpWnxzAAZjp8q8ami2",
  "key24": "49MEHPmX9ERxFGDSko6JUChst1rFb5EGGavxJQQLWXxk9M9UTwBUasnbBfv47hAYQhf5XFY2oxXkY1VPgQbj2m2j",
  "key25": "5DehNrk4tRXaw4n6BRNiLJoMiX3VuCDGbW7jmu9pA4B6H7HwQiB5GoGD8YKnfpbWhGbprQR4jLgrLn1mmFK18ju9",
  "key26": "4q9HAgKi3aCogqwFYXUyx9b5dD153o8wg25MenQvQY7gM9AhjuhagUdUVMB9grENYniiZvdTjMw28u9XWkX5ZDMS",
  "key27": "3Qjdotv5zuuTC2aEJszgimGgvkV1mcaPGTPyXM1Ne3f86AaSL3LvgSb266iTzhAgV2zo3Lxy63e4Fkpqxxhcziq5",
  "key28": "2SM8LssLNAiuhAdxCgkf8T7SFkUSJRyPnQxpCCdXKqqqUDjrjqSCUtRjvxVS2E4QywZ1DgeWUZTVomt98Azw51t4",
  "key29": "3TbxSzWisX38bbjSzYTyxCuJvxiY3mqoRrNfTKh2M5XtJvSLTpVYzWeWpEWYQBaPdNLDJsAHSAjqxMa6etHk1YCu",
  "key30": "4VQDPaiYhN58Eb715h6Zbmc27ZJfgc8JFCafedR6vT37WEC1TvUnXkR5kbv7p6rQWXeVUY28am9np7izHv4M49oB",
  "key31": "5RVWbtCTJSaMVGWt9dH2AchRPo1JgfR35mZBVCGZSFykEj2PYEusSmnzPFq5Ms5rp3zqCxbV7QDXhV3vyjL3Ppcb",
  "key32": "4SpHqTdqch8SoLNvr4k6KbyvrSGHmy4i4raTDzLU3SdU2RVM9ZcciSsH8TAsM3JFd231zruyZtSWECzwxTxS2jiM",
  "key33": "4BjEg1UksvjD2p9tKVZy6GgQzdk8DVzATynM8EDfXPKvSC2X4g89TyQxqypR8Ex86jRyJuK6yYowVRayeWRPdQ34",
  "key34": "4s41wSUh66SARKrNvuiJhUUf7G76axzxiGm8SGL7kcFap7TYLPscVE68p7CjAi2gjFECkedJsYrGJuqPWi7JmsaZ",
  "key35": "pKqRLZkAYGhuyo6PWLtkGEHWwbBdBfRfJFW5FGd45dycgtg971uVAxRXxHGj7VngdjKTmscaraU67K3obQefRqg"
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
