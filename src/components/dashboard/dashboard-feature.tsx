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
    "5B2QNiFVSLsVQTANw1ZmYeJ6hT9itaDrtxZsqkvsxPMghjqQna9rUN5KUrMS8XtvQ738xBLReLgiXtFLA9HPAtyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHR98xPrAxNzMgHpVjDW2vYKrEn7qddrnH1WDNXtErtA6cUk7gAMcFdf3L4BM3dH4PWD9LV1NM1fdR2UBsA9UvB",
  "key1": "Ak5iHndZaBXftAu7JHbX8AJCPAdn1d1g3pkSTPDfP5x7MDb53dvyBcSqPw5F9VTUfRDD6JV3WSnfpY6GFoTL5NN",
  "key2": "3BH6CV1uF3t9JveoD7cKaT3kw7WcB2kh58JqcFcmbMvzS6zZYKAoWhzxPakdZ3be3MohEWcp2KCPE7X9C9UWhk2h",
  "key3": "hSt2nvaHQ3au1YzoGb3HaP31Mi8nPSZgSY7716GKcviQFvqMVWTGZsMSNNDLk68tadPTzvusD2eaMHvZK1gkfzA",
  "key4": "PZ64khmFTckvdpJ3BXzNzgikK1ryUaVdNV7CAuBkjdUc5U8Y8HXJT8LhnMkFbUivMmfPZUQGjM5KkLY61ed1xZC",
  "key5": "54tQMJ4yrzpScaVe1guX5fcWk8354VtKFvqhzubxX61ttXGGgzN5mPttRwGwLBBbTNznHdm9SBrEXk7rFQWSoBjx",
  "key6": "5U8TweF8Ji6167VwmqaSnc9PDLXq6QJ8Q27thAGpjLMmvcdGyta52iU9ZUVLh1jrCt5TnyyqxKgARXzpT8d95irx",
  "key7": "3jeeLrn8gv4nuGHWuA9gM4tif36HgAN8B3rC9TEgRjgTCUDhJUTQ7r7MKzg6eAyWtCsqfnix8uK6njydts3m2HvH",
  "key8": "2TA5wRKEEWPucKb24ewQUdF1PsrCVAFXpZneeWfTJhWsU8UmPm93BjzQb15x3WFUhLHbGp3abCDgtRc5zJ4rQAbE",
  "key9": "56BzJdADQWLCZ8cCmVrdQtU2FTdwJKn5HECkqovgL2UQ6xUhH5DHeZ2oauzFHdD9TMMGfCzzJr5xsqTJJgwGhFUB",
  "key10": "4QkcS3G3u4ebQMu1v8pRJPV2uSrpikijk9PVkxU6TMp8MiztT6Y4i9wbfen71cyT7Ena1ngR2JicCgKCxpXw21JF",
  "key11": "2EK7nRHwYzA4cYv47Sd1mw6C4ESqyDfpxFjUHSQ9dE8Q4d6ciu4EMhvWLVdXxetpdQrrXeC2SZUoT66X96E1HTxr",
  "key12": "4ByEQVdByrtRsStbEBKSpoVJopcsYn6mAcQfaGsEcYASQa6zx6S6hEWVjgNytVsSYGtBismNi1RyyPizfiNxt2PU",
  "key13": "5VVu3dVhVBDL2R3SucZ4ufQ8D33AbsPPsqA3bi26yK8Xbpo3jTGgTQccc1g6btB5suhYPQLgZwPFZpNo5Hvr9qFn",
  "key14": "4wH4womfSjtbs6Yqd126J6dbHoUt4MKh6rrrKn2KYRKV58vDcEyBg92kKvDi9BQMLC22VUkokTp12CgfxXvT9qwR",
  "key15": "2Y4zQPSJFfHrRLekS1Yu7DZqPuCG2nVwU4jFr8tCCqnLGZNAt7pXFNFRtxwxrnbscMRAYaAYxrxCHfyLa1XZ3oJn",
  "key16": "5zddBx8WQTJpSmmgbkGLYdX9QQDtEqYwv1i3iK2MTaiAqciLTvgdB7tgQZ2uqJFjXZs7eHY5QKDsnhx6ogZMPxFr",
  "key17": "3qMWVyGdqJoW1XJ76v3wLeDxPAA9ybRngquLKR15DStaSoynrQy4Cqfiv5V1E3sx9oTqh8o1FQUHbZ9rKYR8wdys",
  "key18": "4fiVkzBWtDTSkZXHW4rPZki8wJVoB9ADg5cxcGjbz2FHdAqkTfV48ey3vXq78c6USyHvHGYGX2vwjEwP8qeXhZHH",
  "key19": "3PL9LUPDRzRcDBkXr6zZUCqeXthfZCuaRQiFg7FwrEET9v7VQMRFTJgUQA4oz8BkZhDstNLv8snGmMDy3QngxYCV",
  "key20": "24JzYa9J7inybpCndTcGTh5Xg86MLn4aBNC9mrnBLf9MqkKbvzgi3quNUPVT1iQNiyv1RixYK5cu5crEez9pBZg4",
  "key21": "42aQREfnHHAXSqUK4koziUCdAZ7YA7L14syW9RSCDS3jHLkoUA9zX9prSwvGPXqP69VmCY7xxJvtHnHMdjFXRPTM",
  "key22": "2dkPoccDVEm1JRrmPZTr1nxALtXFabxN9rzcF2qdpuVSXTDTKuRn8HLweVREhooDQ3HYiXo4LhnMXdNTE3R5yoUe",
  "key23": "422rWJVEeoiP7Tf7tSWtz4ZdKxGEdxFVnjS4Cr3X5LsYsy3WEP13dFZ1NnBp9D2RoWQzbybdS4AA5MnLnH4ACCBw",
  "key24": "2W6C3MZY37D7awQQrHJFYQ5qeg4Cou7rJLbX1GVypH5v7R31tT79v7WQLePqXTXtHcRqVv4dfdDywkSmfydTMtbd",
  "key25": "5wqwsrYDLsrgFKgM67jPjhfRosbvAaBd2tp1W6w83spzMQQXWBNcKZLiBgcetAqXwz2XzEcbAKTtur6ksLjHyNVm",
  "key26": "2GgQQdQYa9gxiPzwYh8LWxmNJNkWvXLmY2zZAdo1j1vCcsZFWsVjzi2qZo52FvhZKnbWxfFEFFssjUNzVmY6QM9y",
  "key27": "33HzzTPWZW79BeZ6pRrBK1BVQoSMyEmUM1QnjqxhEYj5K6GZ5bAvP8PVSUN1S2Yh3npYJ2cYTKzRvQTKJhAP6Dkf",
  "key28": "ti78zXwT7mdQXjf1xRV9EKt4Q8gv76oLPTN4g9azQctwdpRJwEWCy4WtcpnksyXc94pm1TLMbTauFdMnv8x9jQ8",
  "key29": "437A3xykCjabrNbK3KjSHuGuGBJUxWPLecgDFpabBW3veA18Ddmgr8wCytB6HtGuddCjBimo55sVmTqNvL7gVhr7",
  "key30": "4REw828PEZKDiqrJLAa2vtHka98FfnbQRjwq1tJCUrQM32RHc5civEPpi8kCvhHZUHpxRXbKmfDUkNEVh7T4hXHm",
  "key31": "5dir47WVVLpzEqVXQ4MumdDCXBrYCSNDYpdPBXFWcwia46MWhaw1skv9JrTYiAyM5bZvkyarFZh14HrPMMwJ4Kiq",
  "key32": "46edjjJcPkyu11wSS7wHMfs1T7zrBwo9MHFhWuMmR4MHbtrLcvZc867GTPL5vN3KpLcvEpnzqGYC6gyjWjt6TUPT",
  "key33": "2r9JmSmWi8Ty6hTJkVo443qaJ48RtjtdVZjTBs1xN7Gfu5VRbhYSThHRV4xAgANyMm44ZEYMDkwuK2kQy8ESXbv9",
  "key34": "4MHw89BPzDWr3feCYH8jHLCkQmhjdWQ9TjzALtuNTKQCZVVdZPN8Bn51AnLLAMUAhh5BVVmWnva9HPb4YdfYWh1t",
  "key35": "3F46WqBxhDUzdjASE2hk7Tj1rf6sQCNDDvrqAiJgVzZMsZTbDxNzFMEfCQqa2PqW2onSLAnGQZENUJ9D7PeeiZPi"
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
