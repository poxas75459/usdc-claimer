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
    "45dkpHqP2bDkKQvAs6d9kArMjm2NBkbcVCPUvAdBt51PtJQZkg7fyAPP5N7H1gM6GV7Xugfj3DVLjW9mFpcg7WR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXzmPcomotqaQsJi3EwbwDsVHDyLUi1dNxJ5Fc7ZvUkWHaprfJeS1dzuPnB5GvUzBZj5X4t9PExHxGCD5sotiaW",
  "key1": "5rJfDxXYsp22hefUfZEGJXmS9vwjcWgF9hAB36EhsSuSseUHZD91QKoASfm6TBeDXvo89bjJyYaAYk4UQf9JX1SP",
  "key2": "2joDquiyZD58cmLSpCE4jyKe5XGnZS7Bb6yCTVB8mmvHkesvTt18msodxf3CMMjUPqn5KUokADLfUP9hFabGo5eR",
  "key3": "61DGCui6avqT1dGwcaagSHGMFKabTe7p7B7NqLvyxBvjPzrMmMmMN3gudZhFKZeWS7eSZamnQTrrjkaND5CjiY2w",
  "key4": "2ALqjSqLAYxPqM17ZBqeqPTaDP5kmJeeYRn57WuJCTWcgpCLBMQTu4mSSfvWiMysQ51v94c9FWWLxRyCGQ9J1nB",
  "key5": "Yfinoi3GHSuhHNNhTbU43hPxc8Ub3TwSUDB263n8P2726fWyxMZtGmg6z3Z7zV5d8tPzP7KeWnhX3athjomc9tH",
  "key6": "i3tUt1XuUYxvVwYKtfbJWTPvCWNpdvQZaWrschX1zUGgqcyvENEjNpkbaMCzUfzhAhu8MUWjukh1K9o6x2tk8WT",
  "key7": "ps3LyWyHSBomTstrPmu3F13HMxnKmJNyqQ52cvd3zDkXXEF98c7fvdXaiznyRLFRwBaaNWa13hG2K7dYaexGRPz",
  "key8": "3MWbxWQho1Qson1AdBPhL7c29Qp4ja9WWPTRUGefF5FpirwtAsZ4whn99z35hZwkU1nwzVHuVbkZHsKQJ1g8c6EK",
  "key9": "2Hz3jTdYRmx7FUkCfUopjDxfyxkMqAspwdrtzVQ4sBooRXd3ci34spyNWA1FkEESMBABP2FLEcRJwmWEwvDpnsWj",
  "key10": "XcJCKoQrYs9MmmcLcdqGPFkic6cFnU5uthxN1rnwxc2nsQYSXhYdKYE5QrLZJUBT3mC9bjk2p9b1TVfsj5Pkx32",
  "key11": "2ZhDt18s2db4obXCcW56BiwketZtfM4P8viwyYLETU2MojebKkTy5Yccne2m5rvTJaWMjvYTstPuN22NPJsDYcNL",
  "key12": "2zJoz4BKav4roctgr8wcexs3U2zKp7HvXRf3mZzuxMHahfgELT99wt6gBZRUpfroDPLF4pJcE9vGrsQgbcaZz8Jg",
  "key13": "rKw2Qe8Sv996j1QjQQEecaDKAxdfCektRCYEXNQWhV87SxVYg2Nj8nfPrBRzrVQBfuwog1PkjFWNcW7s67wSAWp",
  "key14": "47pRWQG5nN5rCuW2nUq9pPRvVuEcJgt6qNFq7YhGNiPR45dYdWxjivWtRod5AgXy3NzPGvatVnWAAqXPyqLUF82s",
  "key15": "4yB2oCQkBBqEpkg1WtmFEnyVGBY3sincZrf7awE3zaZHaNEni6rD3LPv3q1sJvrn5DyER22fvpdLTMJqQUasdumV",
  "key16": "63osSgXgha3CbycKY4KtEkwpGbwD5wrCshqbatC9A35W6VFbrZN47PETcMZEsNRGBRCkLARA2RJaEc6G966sdDmz",
  "key17": "vecx9Mgos54jkva99HWjpZ23NuFUij1ciw98AVBTZ3ij3N5ij6yRYm8YPByu7dy8BrigY1pH1jHBEzejv5MjrXv",
  "key18": "5nwWZyCWo4qPugRFAbnLwxMBgbMA7YYsNAhNey1daUTm4sAJEDpVJb521j2HPdpS54PdUpTQz7csDcCsdEuPXMfL",
  "key19": "27LDdysJBBHVt1ocpF9q8UNEjpsUwZuDEMkHX5aPfoNQ5sByCeGA78DLW8P9FyTYB2WoffdxBXyiZ1J5b6yziMm7",
  "key20": "5Yi727FVdtn2vM2fL2a8BkwMDUPb3pHEcoiPY9U8qzeP4YGAwcrqWWcK49LMkSMzZJ5pqc4Ug6hdEefWuGHywVpi",
  "key21": "2VvAkdo8WXspucnA2Y2AxmAJ9XG5jns7Lvi2pGicbz7sD7oN6yxkqAr4MAdW83Jthtx6AJwwywJzqwcabkxBv1Hc",
  "key22": "3H8gtK9uXgRZTUqbNt2TxEEDGsK7gp5VGbNNUqSK8kPDe9gBm5dpKzQsGtFfPjtz9NHVZbxfLuP7DqCsfw2imEyz",
  "key23": "48rrvB3umFQfDGzAL7eWB25i2j19mhdMX4zBvaKP77Fo2Cc867HipdX4wdYSkW53V5nYAA5S35Uia9qev1HqBZ8H",
  "key24": "611PDmh7B5KX8qwdLspwUC8ThTksZWJBE2ZwH42KdEd3fwqtnrKENUdGvyyYjgGneUui3hqqduz1QpGxSFQqe7Eo",
  "key25": "247qZshAZ9h22PdkYz4NZwmbq23yZXsHERUZruf4XjymeM2kiybFStMLiN4euJ18QP8SwiTB2cY2JVBJGJUQLFQH",
  "key26": "5A1qVkt7NqLdLLj1rUBCB9PGiq5DQwVuWwA7dCh3LdFZnAMLXgtJ3M1HfpTTgScBRQ1yUjRdReQJp3Mo45nNDHPd",
  "key27": "63NzQMfexH9nBXSzJx6WQM4EoR2kasTE51zjyQhJZdPjQn1kQPCj1ucQtKn3USqpuPcfrpxZHC6dGrT9MbrkjHge",
  "key28": "2adtWf5SoevN1gdDWKWL46QhTUEMmuJj21ooGMLhWLH8utm8Lbk6HpD171brzgMyFxK56bsYQzrnHHMsf4E1JBfY",
  "key29": "4aGHV5fFfywr3D7oFKmyGLqF4fFyZuJvQrQj9vVdu72FDiCr8woeqe7JxV4h76GgQ5qYXAiuLugvkshPbNDaNewW",
  "key30": "3tPZqqHYzgo6i9QyCPnXy9heg6iBRaqN6DHKoo8m9M29Ku4GdsmjbZFHMUVWYMSAHsKnYSbE81Z6jV8wfP71p3Ec",
  "key31": "4juuecnvzbybd35qYueejzGneaec5s3reQcowrKwk4rxknq6PveAeb2ZEBNW67Vfaimd1zMTXwrA9eBT7uGK4SEF",
  "key32": "21zAT3oG52kRfStWhm5nAkqKPLuxm4Y6zWMXTHVSJ3WQpdxH71URWuy7zixw6DRGA5WPFhpkicLv6eG4HtGexXG9",
  "key33": "jBg3iDR5SupSQWku2h2u1gCR3G7ww4G7tdC345htkS4nCRCeWQcURMzHtSWLdk7uaShcjTpoJgjYF3ywe8aKcgx",
  "key34": "q1AT5n3Mxnq4MG3yWiPisLFqockec3vqvRv2kbGYZqkTQ1YFMgYKZCdFcdDt6LQoGyBXtpBjm4d6zgD6o7HXTfE"
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
