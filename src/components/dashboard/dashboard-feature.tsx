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
    "2frFX3y4Bt3VXNViMiRpdX6qcuSrsPnKr82AXPADKriRrBx9kSzuB7XvTdA5UaJthdGBni1CLEp1A4NFKNLcNTfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwxzN2w39iYcKwtTMTTQadyy1RpNpoz2ZNfu4csoUs4Sr7J4vJHtyGxMMttA9CjPQMkDdAD476ZLwSUcm4CqrWu",
  "key1": "4Q1XLFAEdpDFMj4Nwcxasg5Cvpw4ATsboE7tpV8A6CC7YminoEVER5NVVFRAsaaxbYbi6NFvzdW5dm4ojLEaryCq",
  "key2": "2oS26kULF6aLcLJJHkXtd4W9F9BGqfZvzy6P9Cj3p6yHynS63NkCAigEXhknjioobKQRCDfZNBm78xuUaUHiM58P",
  "key3": "5JVJkQiSFcFt19pTnwGYvJguCRqNcM1ty9eGJvo5rMhLjyaBmPeLVGyp1SfP484MbWjfeVmYE5TPQrhZ5gowRw8W",
  "key4": "QxVzb3SdG2iTZkDNtwamhg4qiN1d9AiYkc5i64o4o8Yew6ffPd8idcajDsbhZr7gD11SHz4jBaY2HRdua8FQzii",
  "key5": "2Wsx5GWP8dnpZ1bkSPRWPueAZsn1yK6hbSMMQS2p8tLAyRubnVs2EjN6ccFEkK7CwqXNeKDWhyWhBUet1uAzKx1e",
  "key6": "2g8JCL8ePnEi5d2SkV1WvXwjt64vuyhYgkMnQkhWqWnagc9ie6EJGV1xjbVAed2dSRVMez6w9yDxkiFhSckcQwcg",
  "key7": "4ywwnA2nknAasjGLLEUXCQoYzSXFqhWyPMND3CSNC77uvbFd6Tutw5v4sJHfDQpPX59yiRmALbg95ZdZ41zYx1os",
  "key8": "3DLJyPXUY9aRQHdu8t56j3bt9fjjC3zN4uU6dXDvduSiWKJuawrLUP82iPGY9zyZWJLwjvvwDRUVA1r7UA1j2gsq",
  "key9": "4EqcdDqhTYc234Ystinbrz72zZrMu7NMw8DNbB5vE9yzg6iBt1L8DuaBZziYrNSXF2bMd95p2We26pkKJSQCVKAc",
  "key10": "4uKoURhoiNybUMrHmPkZWeUN5FZGuS1tH4zr3BUzoTrDyP1JT1ufw8TLKSo3dqBG29GTF9akeP4smzcRzu6xj4hS",
  "key11": "533gxonV87PHswrbC3mXG5eGg2fev2h9VVgZKgGshfAec1gSX51zKXfNGVJD16Ls6etp1M9ukGRn1K8cxuEWyYQy",
  "key12": "3wwsdFEZURz1Qf76Gowp7U71cVvQoePrawCUJwjFWXbb5uwePp3qkxh85X7kEAu2ogovXYhv4SU1EzPnh7hiaHtu",
  "key13": "2PSurKUTBhST4KZ4v2DxKDhDbuziBTBtNNYPGsamYrxtWuGeo4H4db6LusoDSDjiNaB6YTznPkwTis8KUTwe32jC",
  "key14": "g1YmXwyv9uRBv7PRukSZhMGdSNYhfQw5Z7iT65jVDFxGax5CAeCVGkn15oeaGDgZMY6LSV4ibr5YdNbp6idsS3s",
  "key15": "E3r1hVifZBrLU4xawvDXMbhN2zUZEua6ruX8p9CniG2RV6amMj6MQ6eqn11Z6HaXxLptbeScyLTpMHWqEYCHRVv",
  "key16": "3MwyFA6xPW76YFbayyDeg3CWhoR78yzhZCfMa1Gqk7VRmTc1BqTt6LruK38DyL67my4oTDo5X5mcSrmUnVsXHbfV",
  "key17": "3Df9LVMNzYDKfoy4DpfotU2SrNzD75QZypiJS9xyWBMdNwtLvZxDPZwgtihhymaYaosEHUeqCW4SFfsuuUcnbfRi",
  "key18": "2uD4bB27xo43Q8gYufkEBpzZs7v3KzAy1twyfMfCkFzLc9NtFffQZijkjcepD3H2wgKC1Mcyrqt8B8xkHvkk9rMj",
  "key19": "34CDDXLiBDgpi4i9wNQTAu45WRo4M7RHHPeHHZBjCBPBkiQPQwrMGiBpvgfLzsjHAhMNnHRmLe74XxatucF3LgQC",
  "key20": "22SBsEk4muSzUFEQt9zj3vhCFbb9Qjk3w1P1FA1BT2RX187apcMRBauELu81Wfax6FV1bSRhGF1zdz5ewDpS9fa9",
  "key21": "sfKfNa6JV5EDvjtupaoSSgPxEWd6mvp8wC3Ymua1RfEkBGCCEDfb3bqdsmb4jnTtJmpRCEyitzojPNsguWc8xdR",
  "key22": "5kxHFWa7YxaSQ1kZQosApVWmXWkmzUpS1Lhn4jmbTiJhcjAWiy41ezdEJ1jKphe5uQmk5aorcRAT8f8yjahq7fza",
  "key23": "4WRNbsxW9hFh9qmPqWzqDZxUaHtv8DHKnMA7fM31mNCd3VzRA3H2RRpNvfpTrNVhN3uVconbYMjBFVe9xfj2MmKQ",
  "key24": "jgxMmsyjvCCEMPPJUuUAzbgb3PTcRbTYvEcWHRqLRym1qUUxuQE5WRNEmYcycZiociPZDS6vi4yM6KH6i1SDMvv",
  "key25": "2Co9a89bJvEPsouWsHkGHx9ZCjujUQrj852LP7bAaUuDxN5er9xHPQK8u5wk9Kt9jFXS5igwRLjhnZEQnHi7AksG",
  "key26": "2NFys3gpZBvbqxQdmiPfpPQCcFJ6jEeKEEevLYZnLwARKvWZVGHtcgbU63q8k5cUJgFEpoSsVNNqyMjCUsZyJpiu",
  "key27": "2yDGwNn9d7LwtC8xpTPMk8oJBBNEJnW8nb9mYuvyxMEL9sG4EFh3WvwcCTTa9azGXNZXoSUGkzdci3ta1FRi9Ew4",
  "key28": "4yqJSUc8gGf3rqGKWjqjB8K5VB5cxt1q5ytsdnPpo9E65B2xCLWhoyGyq2TCYdZhCGB7aWzcyoKZoqtubJd7c72V",
  "key29": "27PJgPZTREQfvL4H1NXv6eCDQTxxz6bscYVH4FAdsF1PE7PRZTfC9hh26yiqZBbbd7pWw6uJCbyB2scSu1SUrrP8",
  "key30": "3JnzreQz2RQnBQc5cqsdgqVVvc9XR3ygPDzD5UnBvwC6pJjcK9o28aXQJReuw2exy5F4KoVZzDFsKQ1eumaRiCRB",
  "key31": "4VVhnwaGgyuLtVPDwNJAFZBRL62cd8KNyk8j8Dzup1LLw737pHtC5UKstXd9HKNGbBHLoSQGXqnusWZ7W6dX5KBu",
  "key32": "3TkA1VoaXjMv3oN41JqrrQnCcLxx9TFMneAiMxW7xhAEiMNiVxctR5weUgSYjzkZksC39yLAeu7uhRCdYqdgcBZA",
  "key33": "2QkWPMzacajAAuNWpomkJSp5TtJSfJXz3kn7HxoPGNMGwQGr4cqPcU2wYLezDLAczcjvUp6qmMvbaRU5eRE2JEYW",
  "key34": "51GYv15Zqc6r6g2e6fNDtt1vDyt7XyxCYBNYUp2rsZw1xxUyWKBq3XmSDNoX3QpUVVLnP5qBkXA9bH6bvfdeyTG8",
  "key35": "gfERb5a42gWGJoRTUwi5KK6vwKHYKesPkwaKno9jy8123Y9EfXyiLD8Q5ZL2EsTSARW1JdfbtBFDZ1KTA5R4woy",
  "key36": "3TW3UGofgGcQ669CTjzS9KrTJSRWqjTQ8vExWeUs8DGo6abcWHCJhgAugg7DUiV8sd5nWYwWvP2nKiRN6ieaPCoh",
  "key37": "2TcZ5C27oTYM4jxFLj5R2hmE22yCgxfjv5zBRbAsNj7G7d3j5zXLBafAzWck2Fhy7SwS8YDxGB3sEqr9dbjKAp8Q",
  "key38": "3D9P6vq1J9GH8eQxP4Law49jdN1ebvFrEECPrwvZeJBZD1g4ZSVkkaSVvYhoMTYhQcSGGC8k8xaQ83vwmMFffo36",
  "key39": "24SgwfiktR48ZD2uvJMSFAtqJtkEWcFy42gW6hc3mW82nY9N78XC7mf7uQyHZyAHoFRdHt8Y5k6GNFZdYWASQQ35",
  "key40": "3zw6cUowQbYNoKD3q6CNh4a4CCjhA43bjchsTgaNKx361gcHANgPENyvo3xhjq7sAz6VdfhcpRVJGhzMCMGwL71Z",
  "key41": "4jMxFEJMpnAKRHtsMZXspWjVwr4HSoUz6MKS9qNs3vtbdJ8d3ywRREekCN7xTHaUMRGzHY7f2frJQjAQ23EuPMqD"
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
