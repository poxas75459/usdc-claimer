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
    "4SK376UfnvWMThdzugH5PimJNwt5KnAg2XNzpHy5ci2dwf4NQFVyMV61BzHFdpQiGhmwnZ3m46AHZgDDVyMcboGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5L6YfdGyy41YYf12iuhKKp7kuwBGUMwQzFPy2W2bRb8aCSgkjYUgm2vxZQ518HyPUn1jXghP4MZPtvTPhubgmu",
  "key1": "2n2RJsPm6yWWhCqBqBRq9xuGfz68EWLK2cyYb7fGfJUb8HcSuRwPEa6f5Z8MgoadZfBnVzm1LdhPzMxRmvTCMsNj",
  "key2": "2jgbpE8fuzgh8Hhd9fkbp7c5Nse2cJnJpqLiAjKX6ksx2pgs5jiLhCN2S97JSXf3Rzx8vZw1akaXvKzheQV7ZUZ",
  "key3": "Z2rLAN5RJKFCrtkWmpDkjdwbyKD6U6EBgd7BWuQW5nUCrTMU2mkXJsvKXJkqc97z83DTA4n8Sy5ic7jHQhcgL2J",
  "key4": "2FZK5pXddWpbWpUdnjn7r4yhnVcsMgsHEHhKV6BpweVr5mSXH86Q67xd2NBgyrWHccocUPTZtSugLAAKWnT1ED49",
  "key5": "48hukao9wvjNaXSbo1S7FjsXUqnFJn4M5nJUx3FL2NuqPzNCNaEo8MWCRYVLk1xxcNyD6mpudPpvWnsgygjENVkW",
  "key6": "5QfYcxFwBPbGQLHBZK4nLQJGuj6SUTn4U5Wg59SRKt8B2b6joo1jxbKXSJtrxHWCLJHVfM9hPUfg5QmfdezNDCPS",
  "key7": "4tt9XQfCVkQPevoUjjHpnRJfroqNc1oHKReaGo66w7W8xVX8ycpHLL2int6ERe8smY7zfWGRWjMn2QxdypWksfd9",
  "key8": "3D61tfVBf751BhC5LssW8bZDRfSzQNuY3TfLJxZvvHsUhhutoRm2Fw5BUvwzmTUwCHaeDXPrmZRpL6hrYi6BfYaK",
  "key9": "2RLe5okfxaKcDbifWcm6EUxRQtbXS3wbgNCzBwfQTFqE3uyoMZSUiyno4FKsBqxofJPxUmjHpEjazuXSVCrYDaJP",
  "key10": "2zc5RffhBiZfodgST2HnSBm6afzVcpmPJzFsF9m2p9FWzarSZmAWefXhy74tmxRWz3XQfJawuUxRKSh3qVY5xE5k",
  "key11": "4iTM9ETCBAqhuuceWPsUwyq518R7jkPahmG6vcPGmCP51avrTh4LzZ7AJDDKKhQ9EwRBzrfqSBeMtQLpA17YjvdR",
  "key12": "2gDfWTdhaDvTYs4KUtHxftPeV28Mt8v3693yoNvTYKSjCq9MoyqzrV9QX8g8y5q1VTjPCTEsoTPLEMo787EMLAkU",
  "key13": "JALnrtWp2pFFDMJhbxvrgAM5zaVuRHbZH4u23SKNgjJHHs1VxjuEqgEkBxVNBLTBvaveZRXtBx4Tnx91B5kNYj4",
  "key14": "Y7nZzsVzggdEw7418yWUiT5mq7He5VcAMhvXK1k3oJ7rrF53mKw7or6qjG3cVYaQntXooRXPYSkP7nmZ8EZE4Ck",
  "key15": "3QUpXVu4AKLgGm81UcgUeaoWzSaoiQahsV4VvhshNwnUwgiffeYGF7XteeEVhZt9qdJaxFcJb1uCzq89Un1io2YC",
  "key16": "swEyfe5ADC3ofgVnckX9BQo1YGYCj4BM8QsySgfdF24vZiumQvymWeHW5cfmVeEk7das3X47BYXuEYkJHZk7mEX",
  "key17": "5HweYJKpxLJ4UBRbkcAW1fuaNJCLdYjkmm1hht6tQSWHEts26gb88w156F7b4mxearktNUUpNbtFyE87gftVzi7a",
  "key18": "5JNYU1Qgn5yvu837RRwNfr8cyX79su2d7Gw8VUggLeXo9XApkjQHE1nZfbQkNwGaQAyPkr5BPptAWEXTos9EVH1U",
  "key19": "5xFKesf7rZsHJLEeMuqs9N7JycJrcnLE6Pnw9STZbYhK68j5EMdjXyQeRTqDxB1fibNcnSkKPLQhYe153KJApDqU",
  "key20": "3gLfLwXNNdmR2zy8KUMhxjkun4c8RoYEd6cuKcpjwu5bh6XDtm8DnaCWQjrWiH8uPbRbts7t2WfqtgthCnpm2xoy",
  "key21": "33gbjrkwoNca5VNQQkG4H1xs24rogVWF4gd99riyD86xwuHfgX2FV1LdLqMMVn4mkiEUDpeM2GmkPnXqM4i2zEx",
  "key22": "3JuAcghKczZFdFjNcrSdsYscH7fL7rf3KsgRD51WauamcyzWnXm3T2vYkpKnbCJNj4r9itnXTEBM1HccKWyNxWVW",
  "key23": "3sm6oSPyiES1oXhn882C4hqKPjfXUgvsgoqJ2ipCgdRGCmgJzY22J39VbmtbCXvUmrBycYwgdSbrZeGFqPLnm8PE",
  "key24": "3vJeQKP8X9vvUKFEwjTzUdNdvayScAjQ5uYyRjPRmJqD8B4CmTpYjCqAzvgBKayQwoEFWhWp8X9bsJLxhWfWmZo7",
  "key25": "9TXZGwEkRutjMkJ7QBpezt8tMm4mFPF98pgswDGwGi7ZRnaV31aqVR5Lh5sLMU6C8qmGgWdqeg8Tfi4poefUQG3",
  "key26": "c92uF92NVXLWmqtbUX5hpdFZ4ghn79wNxN4TY6wteGhKvqWwoKRotnpgHsf8ZHJWoGkSnXWcicw6f2Wab9DciFz",
  "key27": "oPXLmTcHZAZw8ntL7LpgvNK3ZPqBPEhtS8PMi5ZaFWEEpgTAr2xcirm7QiumzZzMwTfVSwEnDhE4ZYwJiHf9hRZ",
  "key28": "4PdhEheKUgxZSSii9YfhmjZfA5kze4CjAi6p8AsVCETxzsyv286ngkCK2VrvtxJ1Gyqq4mYqDVyuAxZkU5PhrqvU",
  "key29": "kCWsuziNNdA5WXKZmgMjyTaCooipRZFUVLgA2sYxHwC9gYK87heBU9txK8NhssmKxiwyKHXSMwBiX9gs8rzAwgh",
  "key30": "2LXmY6CJTDMMAMitiNXYj2HCUxzNPmj61e25DqNMkk5o4AXwR2ezUn7V3KAfVHfW7k2fuXpb1zMgzuerEr967jKV",
  "key31": "5D6qkYFfciL18CS6FmTGBHuyn1pKZLQ7SJU9tWWmnHvnS3DAZzH7CrdHfNdaf3xvGR68a4HD4SRVNATRNpHZJByr",
  "key32": "2i2h2BHh8MGGPdo3R8iR2NgP6hpuxzHYzTTgPDtpesXr6EvqX3rhajgGEpvWYXEoFYZemCJVw34XusBJRxWQ6v2o",
  "key33": "otyiMCw8ito1WjAYpUU5BAcBcp5wZcq91DVcXjSfJCzTVZCegcpzo8PSUmtRcWwyabuthK5Se11KhKgFEiRVXTD",
  "key34": "27iM3e9e56cAenZdmfX48AXi5VrAyzhHNNmP4ekyjCjLg7L61ga4xMe5fKoQpQEZn2mWp9i8w6Mh9bKrDTG9rsDQ",
  "key35": "3DJNg9Tum6broJLWmmbcmrcSVPNVbUQXtmfPQjwxKLVBTue6yp5NBzdVX1956n8PPvKHeC7YkHzd6knUm77nECE9",
  "key36": "mMUZdBf2JmbypgiMguWuyT6QtbDt9g6Qy58qPitRdJoB9bmL8sWxAqygSCaWYpb4CHcTAY52m8iBH4FYf7WjEMc",
  "key37": "nGfkMBTjAafTnF8noru7nfEtQodTWSdZW2XUn48QhRS9Jpuubi7NF6uxLRFcNECWPafL3Uk31pALiEYrNYyLnZq",
  "key38": "5x88F4uYtzJc13S6e7stV9HMLS4ZR8WMCLyq5Cij4tq6xvCQg4mgEfbfxrSsje1xaPo52K8EbuutzWsDWw28dzBM",
  "key39": "ob52dV5gFye24c23mrspZBUcCtrMYA7iWG2wTNirQWW1wyEdRtdSUntQubTkERwBAAYFxgWJ6UiCM9FpyGkYdgw",
  "key40": "2JGn4jtnHHWLWHziuEgrPeTxWkXhXkHxjpWH8ScGgN6rKauHx5d5A3WHdF7zmdiMHEjAFDUzpRxRqQFy8zedNjG9",
  "key41": "29FBDFKmhJDWSbMFb7pKpJCG2cb7eMxroSymp3eiDp763vbehmVXD5gipuz1KJBeBdXgT5yJxDXgk3cLgtBKBPa7"
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
