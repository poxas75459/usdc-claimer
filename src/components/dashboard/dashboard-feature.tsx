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
    "3R5Qs2jhNUYh8KsjVe4CBoBsQzFeCZj9NsmyjDYhpZDmoRnB9QDDqt3MJoTPi8cmPqnytUzRrdLAwjvT9RTRgND3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "er2neY9uW4ezihmsTFQzxXrmFqRsd9X3w4GrbH5DPaa1MRR8wDGACchVNbjApZ5wiae1g1DxcdviKGERqJnhAAV",
  "key1": "jRp2T5ZdxyYUrMU3k4Amy4Fzpzo7HhWVzdWeHQvnrHh973TLqXHwBXw1Gxqd6PFpfzFFFNju5aSevSsSm3U1eQf",
  "key2": "3M9fdCuxvdHArkiCAZdLCs7E27qVt6oszRy9PQ5X4yEyGhmB92upuGtqeuLMdWmQw9zgS3kFCrcJLYWTCfxHdt6N",
  "key3": "4P8TJrDY2A33oxp4S1Mmivs3pzFUfBAgdZ8nkk9CZnXXmppu4hr1pRJSnwSiyZMihhFTYwJvyC84i1gbHCkAC24V",
  "key4": "2oNecPrretWivahAth5Fthe3XcKWzYViVnbsm8sknbu1Uc45FdnujpDqQdiu7vPV9XJNkFWD37bJCzojbBspWVge",
  "key5": "3JgBrZ5DVyQHQLZnHx7qhukEvLRyAmRAidpwXXgQAZ4wfWsLGxTaDLH5D7cz9tu2GUVdPkFbG32cWAwikGxvha2W",
  "key6": "2md2TwX3YsC3xSuwJoki56UhD12FyRELUjCTnro665XNCETPyzSTA4PrdV8T8MmArkKeQUm77qcdJBwb1YJfxRaQ",
  "key7": "2p9CKQwdJHeQZPz8rxidmsnCvRhQ7PWW1jASfB1R1eBPeHXQwPnVnff41ouKnrCSyNcvspdyvK6aQfHkecKwhNCT",
  "key8": "2ry6aWAhZLWxuM5WevDh2DdetHi4VctoXqyWwV2c4bQYipHCQkMa97Qcmam3Ghu657F4MvQnQHdeVyx8nhQBfWz4",
  "key9": "5esHxAuU4uJxwMjQ6cLRvC3sZZ3aDdao5n2SWQ4XGxZuMjssibitsmhay2XTQwsMfyHTNdgYeDEZJpNF1YtZJp8L",
  "key10": "2GLB9QkEPFuHAXfqjE9pFHoyve53ZqnZ8Szycz8s5CJZVnChy7P5XeQsgn76ghPKkLkwrjziSE9ouZdivJRX23rm",
  "key11": "5rPd1dWJ8WyBmYDkVVYLsSfN9hZhaEE8LaiPThNaGyZqCK7MQbZsCkA4N7b4rhjKHjHF7hBrUNG2vvMqdY6A9HKV",
  "key12": "4e81DhKHTpsioronrUpro2eLpCRLHahdYjqzZcLzHyCF7cB3Jp2Ns8HT5SLJWQF1UUibUNsVAmGD7xcPtpr2DrEy",
  "key13": "4BPm8Vnfzn67R67SNBrPrBzrFgBXqHFPSqSMqDTvZdvTLL8XfENHUPDXh9as2Q1QqxKB72nLdfwLANxHWh6Zto2v",
  "key14": "AqoGSreYftBwfnA9SdkDPJYJj8bUBvudFiEYoswC9iYS26uk3ygYvjCTNWEcsaBowkM3EXeQjgncR5eHbNnHqSm",
  "key15": "31N8VsbLAQuEsuFdFda4iU4QQjGEfkno3SyJ5XBGrSS7bCRcgUzLPKDZaG2Ak2wZvZh1RBm7pQiJn7LMZqAvZMN7",
  "key16": "3kjajH2gZhoV1LVA4eftiK4guDr55g6YT29RN8HDYuZxE6ATVh1HEERnE3sdc4Bh3i2F36fDc9oYUenRfG5Dqusf",
  "key17": "4x19yEGS2YpmBsRZnsNRGjz6CnLb5nXrxP9HR55KYa7q6PiRb3YUKMFeCqUxn1CykHR4UomM4dK6SaapfefQembE",
  "key18": "3DEGuTzUeSxxZNcrx1irCW6ZMwWsdXLF2ijJptyzRAyLemzvbj3xxLkQ2mdHeMASXT9eXuXN7GukmRb4egSNstj9",
  "key19": "5eyGmeZAnAmNbJw6Pqa2obQHhL5mftFw7gd3bPdDZFXudDuS81pymgk9mAAN6yn8z1A845KUyo92q23RFeWPa2ga",
  "key20": "zuGw91ARtQjK2ePwNRgkDDBarKfTH4J5HHLbQxp7GxzAbLcSHMW9aZfYzYkz1geDupvWszZ6VfHhRTCrX1Ff6cS",
  "key21": "2QX4ubGyM3DPuG31S5zxJztvNTWb7Qxo6EYnmZGfrPfZjaEMKDtg19XgtDYwKfpuhW6etpdSeZJHJ8F1WQT2L4S5",
  "key22": "aDmwvhCvaRszUUnwpcEQSb56zLitHbD4YtEQHheAmgTxGdrYBi8PcjnbEJLL5rgm9ebCSq79RTx58buSQcQZiCg",
  "key23": "4ZCKMro1Kd6PbBxUHaZRY6idyYgzGDXLM3BBKcu9rChqb9ru5rkdVtF2zJwy3LfFWK9kZGgM2SmxdeXFaoGjqLKU",
  "key24": "VtnRUUPqqjMkNw2STXWT88pW5658KsDgkESg64F9ZXJSHHqTPi83WjuGYGdunMQ2sKnwAHEREghNQuJdTZ6WTCB",
  "key25": "5BQdgDJHMTuB3csbf7h4D62Ag2oyuaeMf6fMkrR8bqZ3eM64hPXWGEu5RSXGHRZxPZeVRPPHZL7DZk2vLMzEWNYE",
  "key26": "5hXddAprK4nMDUmezB2SmjyTUMz8cihtvWh7tAST3tTV8jssEzmfkcUn4fzKq2eTUQy1ycNozThUX3yanUoam4rS",
  "key27": "5aJndcbg2TU9GErpuMDXHL4yczwuQZby1FjjPkgbK4T3vd5VT88rGVXvC8dP4PGs2yA5F9uiZ7dE7hM2mtVdsXa1",
  "key28": "3ubHSnYMJu3T9QHt1fbgYU66u5k1CUWnHi7CmvGsH6D6SaxYi5aa7CgpoYMiHuwNynfv7wDvETQQRiyV41UgoFH7",
  "key29": "2AHmacyEnNNA9a1619PTz18r6s6JJpSvAvrKqehQSdKJw3xC1cD5NxkHDcYbozf7bbfgCUXbBmG1mm3P9H5qzafj",
  "key30": "5bvexp6sFo8oTRNyrkcQg1tGkTYs6ARePcRWrhq4mPQ7Lc2rQ8RHtHM8vRPiEDVd8NqQqepuwnxcKpVZ7TTR4upY",
  "key31": "5MdaAD1pih8hFzcmjQr7hVUWEiPwk2S5YbntfGtJZWjRiPfuXrJ4sE9GBUA5QsC4qK9iYP4sJT7TnReNXtagmcC8",
  "key32": "4eGkcBUDnbqqokHo5wEeTJiZDUyCsSTiemFuLYJ2RcwzQBayZuAymaRvNg6u4BX4BN3coqHSvJwXEjHvWQeXo7Nu"
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
