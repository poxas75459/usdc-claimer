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
    "5AqxEs1wKLt4mpsGJjUS9bidZCqZFPWuTaY12HoLZYmA7pgVeGwssVSfAm7wDc7fVKLEwGPxyTvSpRCQFRqJQEzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPjQt923AqTPYk2hdLo8UQswKtEPPGyU9z68uFyBtieU4nWG8D8exMAH4Gs8Wjq1xfFiPVDoLnDngwgv4rJvZWu",
  "key1": "3S9Sa61XotSZZhJ1gLAzM4eizVhXNf5SQVxtB3JUNEHWiQ4p4ETyvw56k1wXg1X7e4pbVgGFmLx9hZv69NDAdi3h",
  "key2": "3VojHiGakFLWpuTavLKHaeScYWFZjJ1soCTFoqchhUkYBRazYnV3tgWATwj2WpRE17xA9UN1q7BKjEGMCJUPqrDc",
  "key3": "28o5iDDZ8rYqCQwC9An1jxzkn1HXQXBN7LB4uYPMFny49nxS3i9mxHNPqNWw5q4UkAesNXbacSZs76cCzHy4mKuh",
  "key4": "cAm6EatZHHD7Hsq4sDhKn29CC2r8ckgKs2txNXb8iT7iJXQPEaKHdFqvHK8ubcJoQ3bE8WiKY7BSTyX8nEb8Bde",
  "key5": "2NBSTEdztUAZT6LWFSgzmWV4tBeS5H2o7CN9seYLia92a3KoG3BeNBab6qTReDm2YWVZpRew5m6UDu9g7GsJFkVo",
  "key6": "3zbPhhpGYt5gEMYG8CgGfsGJQJLcXrrATSJN9exmAdqYbRECXX8cqDj8z7U5SDUB36wz1h1Wh8NDykkHqs6uDawz",
  "key7": "4q6sAHy2Paw58Lz1SPXjBhy3paKuHnmgS4WfbQZnEUwbf6RPmPjpHvVDipvwbnvpmrjxQUiZJ5DpX7qyFiz5TvHH",
  "key8": "3bcrT4pqFwZK9mAXQwfXhuaWd4hZY38m6ftFnsn4sMuLcJnxnm9LM9hkYQcGxFfPVmZWFedQA1KswGTYgatK2P9z",
  "key9": "3JBSQY2FE3Jg2Q29LpEV1sJXnEWB9d28gXcpPtt981fEdKsKa6N9zE3ZzmNsubANKtNsynqCcG6JRFFfqBNMwweS",
  "key10": "65HoH3qRuQJpo7qad7jQYBqKcTtYpa4qqUQcBBneU9NUJJ2r7ncHKn7m2PN6xzm3t9MV5JwUrSkKPNKmrTcpqLgf",
  "key11": "R6q5zwNavsgagA6vc7fPytqMp5xFMMtkH9p4kye4UnFuJXDjPnRsEAZrT63WkeXUQghxMyuaN669M2LR9Pk7iUL",
  "key12": "3uUJJ31R2fBiK2sEDTTath1xpxrStjyRTCK5s3HZCebLZfrCurNCzLP1B2TCrgR7hT6qZZhtr3boSgTrikzaBXR8",
  "key13": "2EcEmzSxmXz3H713iPoHBu68FmeQNannjTfiC4wgq6828HdZYEys5SWnhGkDPesg4TrzFLCVJGeRmJzAMu1ZikxG",
  "key14": "4zxnE7E4ADHr646FX3sbb5sT5rK3PbnW14KuKQw2vcGqyrwSopXwyBPUenZ9UjyvqtnHxUCeBU3VUiFVcBxBHto",
  "key15": "4J3ie3VNsFJFPMcv7HRseMBuNnZc7F88sCcbPXBC1GbWzhg5KLu1VzBjVwtmPcFRxPeZ4778vJpzspC74yHkZfDC",
  "key16": "25kjjR1p6ARK7B2nah62nPjn6mdDLJ9JwXNWKkJxyaLvy7XDT7kUULW3NnBRBzhH7eQCpTZLWMo8KMSUf3i3p7Bd",
  "key17": "59to8Kk8gPdQ7hXDZHJ3pkaBRdnKZx58HDDrZfYHSfVRtEhRy5RL9ub6Bqs2XvspTaK26kMZZWQJPJ6HmK5z5Vsr",
  "key18": "61thYSLwJM1o1LDkc1mtyFgcsTGGKvfd9puKuQeeqjTKT2TbsaBsEUWo1shGHphyH7NBgWvbdJVPRbC7T6B2WYd2",
  "key19": "2mjwibCuuPt6orC5qL5Bed2faWK12GjcpQZrajTAoQ8UXyWU9RNRMGboL6D6Z6vmRUeyN4DegrYhJY64953iaoea",
  "key20": "58GxaKg71b1QCMjterMbRCFjEjSnnV1pLbvrbwfwE6xyb8FcqRoS2K1hb2T755xRMidRK4mqpjbZSJ7Z7uQaj5pH",
  "key21": "3vuUNTbmaCckUXtxohuD5QibHGhduQoRsFynj8Yuu9oFRfF6XwJQUHL7NY9LFsk1JrwNGhUthjMy6xGJczs7LK8r",
  "key22": "4Z68n2LJd7gXqgo2FK7aKsg4j2xb1LrpUMNwongfhG3ugeAanmmo78tWJLviTNYVKk8igBRDQyz1NcVeCnrZH5CA",
  "key23": "GQ1Qw9Wow7t8LjuksVgx3UF6K8o8jfZXUHmAWxQbj7C8beDZhavbwh2R9ByowyNX5mYaPoPMa3CyjUoZq4ufYDd",
  "key24": "3i6PbDwJtKZUKUz3X69mKpnH34PtnpwyqMZcvhpEgVHSkQZ9io7UdjFxxg31PaAkgZC6zyvBFXYLUjCSypJMq6Bc",
  "key25": "4fPP2vXmu9AYEAEyfRx7NWvXgThrbosG6UKzEooZwKXj8HVQy46zYNd1VMS8AwQ3Jqu9o5QPtSJgPPBp3mcHFrn6",
  "key26": "4Qf3S5mwnPsnoE7WQMauWKSUhNnX7Ze2U76cdDXeTq7ngQgoCVhQHp5o9SzCU2uuCZBeVFCXrEweq7cRxEBLzPCV",
  "key27": "2SChM3A1JwncJFWoXpWfga3pVuoR5dRWLAs728thDeFYtUNqYBb6UUYBKDumZb6FDdYxVyTAQJodEubz2B2CwYaJ",
  "key28": "38wqAVnz1PbPc5J7gZa87hGR2VZNBQgiJhHc2nBXwT68QC2Ao5WtAsY4oJnvn6HsYH4gyzUgpoEfyYJtg6zUPrWi",
  "key29": "2s4mwC8moUG6zbpNXDVcJxx6vVtzEosmohVZ6CxFXxADLj8oerT2tmXv4witXPeM68psT7nfFSdAEiZn2UJH4oNg",
  "key30": "cjnVW715VZ3dxmeTyeGZpA1mGaQ2myoSvAzn56V6JQD2SekxZvj5z4UtbWFV3ZxhzA8hN5dZpeChJCFzWVzLmkt",
  "key31": "5tzC9uV84XdD1DwWqBxCbay8wxSggF6RuLYmjK9Rmk697Z5G6sywoAGFBEYfjRNzVYW2qU6NGYVp7rUDeBcNP4wC",
  "key32": "ufXWLmDbgXAYmaoxjXuqf4HAgZqKJGtft3pRCNVP1neawUrcRHDeK9zs2eqKnbEqHuAxN6KfbpTg1kMcvMRWEEX",
  "key33": "27qDtnjxQPmLPGz8cfDAZu93MQBLtCLypNFiL5QG4mrnce9aFP4pjZPnHDst2BBj6Z6GbqBS7zBZqdEgrGEMMys6",
  "key34": "2c8D6cVhMTJXeMAstL8UZaSVhrSh4TfXj61asUED5PGVFHKnvSqCRcwryjPs8DJDkU53RaB1Ri5NmgP9j91EAxQq",
  "key35": "3naQBCmSgJmgLAYnNbQ4PkRRuUvVJnQ6CgWP3ReuhhWG7Vns4CQtFGjyPde5PLvaKFQCswQEvUUsF4iVumjcE9T9",
  "key36": "3kqjNdJ3mLLFuGQEjPRqHHWRuV1iu7DteR4DVgHQR4oxKZwXUvokHMNNYoKwVijx1b6pGznQdqpKsCRcZs4CqyuJ",
  "key37": "3g2zhDG5ggyo112SXdFQEpUAor8hZCzxCvNi7bd1RLobtdq6LqQT4Pw1AkT4Sb49EEZScNWk14odYmLFkX6rnk62",
  "key38": "xCgcYYDDcZEjH6omYVTiFSzEStgkmQ5D4bwRJbQUkSPQeF6HB2wpAK9oqia3avsaqbvBar5ihRkLzU6p6yB2aCD",
  "key39": "54QEgsBKbuHGx88DFxcu6HQSrJQj1QXhYjz1kiRhgr1yXH43qxpUkuHfauyPBLJDR4BBBNGdhkXhdTSkEJTKQMLJ",
  "key40": "HLoMqfYUP5PTPeB4EkH9hG15UEEWEZQrEhgS77SVqycx4gvXC9Qv3mfT6mWWXUk53T5ipxWfe7pWxsXcY8NbVnZ",
  "key41": "3ub2m42etT2u6DGMzgyTuNvuYAr9CPdmMdSnrpjxinYNRZVPw3CichNWCVbUdskLn7zvxFhq5FtjefQqejMvBHUP",
  "key42": "4kCtGiDBTcwAGn2RRkHox85sximwc9DDZmnB7yiN1DheZMA8eEtsTjQJM6xmSCCCTCcxRwcM9HBYxnDUhn6ypvZ8",
  "key43": "B3UHQ29YMFKdzQB88Uu9CCpdg6x2jUGYMCJWEFFGfPEYYQVUqSyYCuPeH28iNfdTzW6xTonMCDimDkusNMpiNU8",
  "key44": "4cpyLGURv7saRkssjYmckcpFmAE8FgoejL4jw6dBdC43hWAXdonH5Y1mVg8vgojmAkiBnzgtqjML1xgLSATU6vqX",
  "key45": "tXPufz7k2Q9ta8pmuctdaTf5AxKZJN4QnUUk4cHQ16hSNDy4Q9oX6ps4r4sGsxr6JjLQ8WFwG57qHTohrQ2Gca4",
  "key46": "EunM5Fu31qn2Ja458QVRnrR9Xr72mdNteAGgzvGhmEs42EEe3FSMboB8f2EBhNHExcZ2yyKjsTJ4MhKZ8BwYY4d",
  "key47": "5jJjLDJ1T9ynHLiofLmQ1DydqHsEdVo8UJQT9ERpwNYJsKJ5pdFXPL85tmtKdr9HGE1UXXNmq5uBf1HEkegHrej4",
  "key48": "2SECm7iyTyyorFdw4Qf45R4qMXF8BeTM4Uav8Em8ZcCWPQY2Qye3XogwZS5La5429FL1K6yvxNWGGcvVmcxmfGRA",
  "key49": "2VxQ2V4Cxg8xzTebsYPbEK1fDwqhdFbTMY9uYyRXTSAq3dYRY6de226CSe3E8Sq2uvCNknK6vYC2AihHHKZ1JAPt"
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
