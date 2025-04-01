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
    "5Qkj7MdRH49QKSXKw2Hv9c5hQuQeaD8KazURwQgkd4jr5Lp9atNwgt3gvZH7aeUheh6xJLshKHpnzMxEJX2P25sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5unxZLupUG4UZ2e9wxS9mnCALasGXav5ZuvEM7CQvppK5cA6A6JaJzW96dm3b7AQSoJy62cdtJhfb4KaT1UVWN",
  "key1": "66KeosCJezoMpaCJMr7FZuKx5zqgHY6NzgGeTqePkKTUFro89Y3qC2CWQ13FgyLKbSVnzxofB9XHMHXpdwh984rg",
  "key2": "2ZxuCQdP3r9HUkGp6vZ479Mis27MeHYoKQgRzvP4pmVHTdCK3ZeWxrbkBGwaewmXb93rAERuM9kdUqzpyi12jUMD",
  "key3": "56V698WmNdL5WNwc25emctyADvZ4z1xLiTbvYFu7b6dToFonP4HdU5bmC5NdrmKMwj9QwpKdzKwh3b7V5voLvfcs",
  "key4": "2jh2yVCnsLC8JQSPCSZBwmosSkTwqLc2JA36RvsvrKKrEhMRN93gppExZnDnnanb4riZwedYAfJbu6zjuCioigN8",
  "key5": "2JnmAEV7HW6oJGkregps7A6ZPbnWz4Jqo9baE5AUyQHZtwSGcbhnz6jC5w4pv72wSeitJHeKSftHxFZFMXLooP4z",
  "key6": "2fd36RzF7YCeefxXdy8QRe6xeAYjVC6YhYeYje5ZQtJA9PJ38MPHFsnUqnWFfTStTuvUS7LM8eM8QYfnxtSP1RtF",
  "key7": "3UmhrNGWQvoeEk2GWLPGsnUBstjc7juvr4vymkRA8asSJd9Pzq4uQyBdcg6tEdxuKf2hhnLetkZJTakR3nVzEq4n",
  "key8": "47T9poFP4cvCoDKq3bDBwsdb1953YdMuFFj3g4vF5Hfj6t2ARb333dJqPLsR4qAEtEfZdYnd6T6e8Cc3SAyuJsjH",
  "key9": "2pGo39zJoA38U4TWRKfLyKELwJ5soJZQHhqkyht8skkHRecBWfcraNweMzn4uVcEq3Zao3DE3PjKTNNPYYHTR4W9",
  "key10": "n9fqktmAhLjxCqGAMxqqjLs2ncKmY547o19rS2mQJj4fUMsA2ciEHM6rPibxqSfVcQ58A1ApgHo7bWYEYxh39ra",
  "key11": "5Lz7hXb1L4p6E8uYgsdh6tjKYJwLKevU7nzrEFn4Se42L3V6oJ5hkPFPWiawx3XY1eyfsLgeFfy1amzVLcAZKWrr",
  "key12": "5XvVzus7pgeZ46Vjvb4wuYvstHpQ4qyTZUHjaqp1AjTSKdHXrqHAjsECJEdnaUZhEZPGLadk9RsLVoS9ZUWgKN1K",
  "key13": "45dS4tYDmh2Nns9EFpWr5tXQtfYocNABEM9EKZPyGFGTivmJ7dJkh8BPe9jV9fLMLsRyCcQu4ExcP3ZnxJcyVRxd",
  "key14": "C37dfmvQ1VpqZ1TESm1RKQnp6Z8D3M4g8GVL6H6PEHPwc5SMQpPPcykkDtH33sYgkbLEaAqAq5QAVNeVR5U87JK",
  "key15": "KtSkr6TQK7broAP3T7JwFdNZgeQkQtq51DHF3wwsT1PPShWbL6sNgyVaopQBKcGo4yxpEo8xLpoyt2ARdkvG8kB",
  "key16": "5hvpEKCHKsgCkxJawWGbD2kkoXeQYPLgMHTVEMC9cknPnZhcb83Py5wrkHHLCeqVz2N9kFVKCB2VV7tHQCCntFd3",
  "key17": "5qEgmYe7a3YUdtFpandAFYBLfE2DzrHCjLS2YCfZHEUq7yhsXZYxMsuix7YSfLG9sGXodXi5c59Ph9Pk2s5JvKhY",
  "key18": "2yficQdVLTmuP2CRqNdsAW9ogtmFFAxvWMNRVrPAFDs4ejLBArg7YTZih27oqUb4mfK1GtmYuizcaw9dLYZEJiq4",
  "key19": "3guPJw9rphh1Aey3khBL4vcc4f6aZWv9e6TzZNWz2NuwM78ArQ1MqJ8g11Ga3Pgm6FCYeHuDhUtEwG6TeczaPFb7",
  "key20": "4SpHheVfopRJYXSWe8m2KDaxEc5SEVhWscekMc4pycRyEhVKefijzfrJMfsLABii2LTcwDXUNWhFEmbU9FdMCAQS",
  "key21": "63wyHzNeWTTegjqNGEyamUkwmJnfHkLV6zbs6uYQ51BTNCgLfZWUAH1gGKBeETyLAq95V51DQQQ7FTt9c8CtUVAr",
  "key22": "63F1KptJy1EVonuAdxRVUH6iTUAyeEeJ4NVcVkQ5fjWaqw8w7bAua5YLmJXxnwFknUThh5n1D79RzwVqiyfVyTiP",
  "key23": "5Su5HV9HwZwoqi5ZaNAYovoxem5LH9N3JM7U2KGReUTSpXaxx7LTPpMCCKmgLwAoUz2PRKi7EJr3oWezcXtBeQVf",
  "key24": "epWdA2nULa2kb5nS4L2WPSVhcXvWioGRzQFRE4NaeR9NEfYLdUQJ7MyHcUCGcWEmAov3i8GvLYpEcLf7xNrf75j",
  "key25": "2A5p95h2CqGnTvByRkJbpMiWifkY7rqDUDrzdq97yNZSzWFiTkbeSsUcAVknxzuiWswdEqFRaE8F8XLbJELaAXbK",
  "key26": "4JV1WKqnAEs6AivixFnybgkC1Ki8xwxQTi724iJehLMesFcYaZrKrRZkWDPcVsXdSvKn7aPh1UDFWedg7bR4SuH9",
  "key27": "yRm4HHZ2KmfCL1EUBB1hRTeUyA3kUUvEfCksUU6huKRuM87ZK2aJThSJp23A27nRGMWeonksEiq3g2EEmG9vvRB",
  "key28": "5vHkj4NB5ea4Wv9kU2xuDSvddJx1WSJj949FhMEANDXVbZSRuYEn6o45embVpUnbm3E6whcJnBfmm27nQnkJMe8x",
  "key29": "5sL3NhQk6RzKVvWEixb5EdM8nquE7VnAgbi2o4aZPmgV7uFxv64bC1e8Sn3cXKAydMw4Sscean9HoZbB83578kZN",
  "key30": "5rsKSUpTz36K1PqptFnXUfbruXtKJTqVXQFsxLJj1rc2e8N9MjuSfSj74QqoxJxHU1Rm6G9KD2Pihu5VWi6xe64a",
  "key31": "3PpmmHETtboKwg3URbwjPsAiEXiajhq1kA16T8KVX2A1TkUFyTaYiXRzTcT8EPh28pji5Rz3wDbuM7mShHnABgWs",
  "key32": "3hE1BUfFWMAUUenzgp3WLmAAJnHXJSC99EtYDZkqaYExFgHZvUGkJmQqPoxGvm2CRy6Mt3xWfn1cKgx5VizAjcuo",
  "key33": "2FLv8wxwcDZmkUQSY7RE5B3gWympBf6Nd51qPAMPtYMvYFfYSUYMGNARi4pk3435R3YwxSPPCz3g1adQYhYeDCxm",
  "key34": "3natBazkcoa2LL3A9mM7PeTqV77Hp3ZkoCuRpnWXxQY1xQcun9CuSphefUVYU7H9qUFYTXjwVf9dmSumAJuZC1FJ"
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
