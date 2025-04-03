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
    "5WihDvSLKqeHPEiE76JZu38V2ip1ErmkYzzdsDCpTLQgDVt2aSe4D5utegqMquTEbScqRvokRmbe13nBPyKkD5bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a2GVS5g9b9tkRv7siyZ16Mebj7uxLzcfyBaQNvwdBnttSnYHZrgTeciH5ZFB8phjErTKLia6s4a5N5UXotio5FR",
  "key1": "5gEc1kiyG1iaQiRvkLX5j8Q8Fz72APQgS1NwgU2YCyodiQFrCNRZZdsLY1QBzrjA7XMoZ5CYNvfM2FN3C53rtvo8",
  "key2": "4vuQ34gtBNVXxZpyd3L4gBhLcaiy9AhRQiYPTZX4uYnrxtDKbsakEK2sSAoc5kW59hshqhy9wsjqWDzrFMSBDA1i",
  "key3": "3ZtASxvexX9mH44NygTtjDWp6DqufvpgWpBHcLtVKSpDAM2Ahq4KgBsGBsn173BudwdAC1DeFw6vZtKTCDjqUJMA",
  "key4": "3yHe694kahdnZv9Yh18NkKn6ovQpmRgTE9jy2U77gDuysZtAnerDgQ5brRhpAor1KQBzR1tkWWVkZyys8VLcRRy",
  "key5": "31uvHfim3D49T28GZS4FfmCgZCfYbqizs57bSmzRfhoymU6qke72H5FHQFLhQDhZf9YGpvpdjU7bHUcSkR4nKRWX",
  "key6": "3HbFErV6NoxnJqqeVZucr4pGQ9x1QQrom8sCKehnqSt7r3JJhSMMgHt56BPRQxEMi8sG9HSSQS3bgUSKLYG5xusF",
  "key7": "47yiGqEsLaApgCuintodXe39ZZBteSs6jReSRNeNWzpFqraafUaGcqxCx8fyyzUNDXCcpZA3BrHXLr7G9VwHYL3y",
  "key8": "WL5yB4BA2Bey4JieaQ7zohvtX7ZMdjGQ1WmjMn3QsvmcP1E9Jw7pSycpeKYhZCb4Wyoe11CQHqjrxUNmeVaXCPb",
  "key9": "eLfsJuzwyqB7yGRqDoeV6hR2YPBJp8und1xYTfqMUGMvhJvWKyBhAGDFzXxHaMfv1t4wWnSkFPn1rwuJb7dVX4o",
  "key10": "59Q8kvn2mExPQ5aAi5n25ovczXdAsmP3A2CNnfMWATB1gmYdsV7GeVr48YmK1KdndqwUXb4RpuThkDuaxCa86SMK",
  "key11": "2khJx7mFiVyA4tEpLk6gUqQGBqNMFh9hgeueQQezw4vyu3hzeecwb71zXkb3bxqB1T5z2m58bFg9SLUiGBFFNRjj",
  "key12": "3t9bU31ctYHXs4MJaNMKZmrnXTWdqKmPHTSx6aXSvMjzZuQM9xHHnfc51bQddYHLdJs5sAKcfCnn6RrjeTCSW7R6",
  "key13": "4RaqTcFfCBkwxrWjX7HhKSN9vZcYk6vs8J9X5qWE6gey9h8XKAXwEcDzJMSk5Lp5fYG1bTzusQgh19w8X4YxaQoN",
  "key14": "3AC1ZYGKxkZXJe77mQYZQyPGmrGShhg7TWNAkg6V8uoJrpND2PVpDtrf7m729zRYX5AgfEioCs2wKNw5LVtZp2d4",
  "key15": "4ETitdNEXuapHSsrjXsWbEVyhXmErKifvVGjhmubM2nFG3eLjT1QvpfSqsdy88Nw6QGRDhZ87X1GVQqWwVN4wJvJ",
  "key16": "2ZPTyyQd3ZKJn6tfdN6b6VzMK45ofW3LcaaUwFVU4cAy9UpXiKH9BYD2oEQQ4SVCCuyR8vaJ9iPBZ8nTh6dLQLBR",
  "key17": "27AE9tzspSz715HZjE2uUP4fq3Sq2WETuvXgi8DnsX5iYsCFc3yeDZE1TdsRehT61ZuQS3GAJuBqG7Ggv9TVuDLU",
  "key18": "T3PnGQ46pYn4pK588WfiSB7Z4EStmgcR3TaGiAHri1QpZsxPWvcuQBC2sZJKy72knsCs3uHtJ2gJSgRt5PMPQXn",
  "key19": "65z35mMkXG8djM9hwpqXoz4fyTzA5HWWZRAVV1YxbwpAfD8pJ4EAcwh67KZGA56xsdKpxe4hioqWfUBA1U3QXhQD",
  "key20": "iE1PYVo4kikbn1XzsYprJw7Vt5J2w1pErBmisCTR116dKXcNv5x8DUCYbMuW9spckr36WVx76z4N4m8cjhSQ44r",
  "key21": "4RwgxDa7t9VyHG1znQ5h8KgaXU5V5S3htLdYJxkYXX46HRzWf9auJNv3fXWtjkC7qivGPWrQ5piYaVXjmq4M1xTk",
  "key22": "23vNm7PvrFzD6SmfHbDFAwsC3BWfaNw9gcYQ3ptkquMyt3tZpXHVQaQMdxpcVK8tS2YtuZrEnKWVoE3XiSKYfy7k",
  "key23": "nUVFqkqHAEXrVh68GQLBm8EPs1oUVXEcuJASNH8hnRi1u8VupMRMy7F9KLowPsFNCKdbKEw3sEkJQKFtAT1iod6",
  "key24": "3csXU6FAzq7pRJVdknrCsNQ1PXhgbndLDmY1iighSuxyKGHc1SRy1aSGNuto3VwHfTJouu1aP4ubAkpFiPpmznwc",
  "key25": "2N6sBxq8hpvSwHqejindJacx7nUP66az5p9KB3Vr1nvejcnuXbdKCYp7mHNDfEyFuJoxWmKaoLTgSLbZUXYWEjN7",
  "key26": "2JBbBYXAzLjKXJdbkm4ux7kLNqnjdmgKwSnZysHY5diwy83GkohEfLaNpMbq55ras6V8YzdAwxgDuPX51ReZ61ru",
  "key27": "dL4e4sC8a4BnR4MHNKpYKoGM8tH7ShHjkFUfJsEkSHx4JFRqVDQXSsTTdUQYmxPRKs594bouRe6DdSNnGYYxdHK",
  "key28": "3PpF2wULv9wrU15bDMEXmNG9ruAHb2u4WhGQUfst7cvpZMmHZkkcYzcNJv6ppoyt2K19vXsVaSRJb33PWDyLNK92",
  "key29": "4YAZshGJXaLpEi2zKkiwnUsPTBqgVrnx2EvZeyD52QkyaCmjthK6vn4b59TTdymf3tJT2npAd2Kco1RDKVCPqVH5",
  "key30": "5fjnKRUNmy2ENdUcmp2Y7p6LKt7jLbvQnAw9FuLiwm48gQzoZqkaBTnTophQfovJz68wKCWbg4rYdHv65c7ASSQL",
  "key31": "qEWVBfUutohSdSQYb1jhHD2vRSAaCJo9HbqGeNUQtBKEAiRRbPKYtDc5uE25PH2wtN1XhgzzBe8Xz2MQ4xEmSry",
  "key32": "4FTSm1kpckjBUt3NDLbokdRN1unanvMR8ArVJkfX64f399GsPUa7r6xUEGoHjvVu4F5pomjidsj2UuPQ26Uz3qS6",
  "key33": "4Lq2cNUmz4ahx7PozL3ovSvcFLEmTNLpdPj5ME8XYLGQFv8KvzixoP5Jry4bHum3xBXoJb6MBirgtTs8GXCC1cYz",
  "key34": "PMgouyTcEkEmN64KSxUMTjuNLecUFNtAS84rgeK2789CFBEJzDt1xpp2KMkXbKAeCHpWYuSyoqDRH683gE6Srp9",
  "key35": "4wEoDqvLR5H9gBycxa7ScZUqAuBse5PP3VtWq5VTK4wpeVHeg93m5yWFrk9oFvcizVoxY3cTb8ZXBZS9Zavnp2sp",
  "key36": "MhtMCCZb3cCgswAJAkmze7ifwoMcsHUW81u3nBrnKtsXN7owGK3ZM28ZYLfJJgWnmMjPnVipr97fsh7XhVrMbza",
  "key37": "5wQVRNWYwRZdLjHYH31WKJnmBn8d3u9ekSNZ2N2k1RFxdTGfteqjY2c2T9S258UvwxxZMLjSxCEToURPML5mec13",
  "key38": "53qUr8vCnB8xhcz7DDc9KVLTWMxzcU127YdK6mM7WkwDtBKUugSXGHTLUDJZNnPHcafHCBtUiUKibddWpZ4RHEzn",
  "key39": "4FfnHDSqvrTyM2Y66pSZXY6sqftdEZgRsHqRLufM7c4yXZq4aUpc3tCQpnk6nABdYUJAgxNdiPWXYeXa3ZrrVUHB",
  "key40": "2bmasmwemUQAspekvQ18pNWydZuJtyNt1XTg9bf2jyYYg8ikXFD8CfBncARukrjGWBsu6KCQdrwEFTmZ3Q9MbHkW",
  "key41": "5qx8RfFPWBWH59TTv1yq2NapUcwbzP1Lhgw2z3Ly4Lk8N1x7YEJHyq3brWCukCtxTYbaS12o3ZMFsceURZJpGDCF"
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
