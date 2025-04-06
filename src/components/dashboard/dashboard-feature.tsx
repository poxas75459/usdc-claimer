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
    "fSt5TgkCGH1gnR6urEkD1vyBuuznDoSmxBTYgtQA9kHQvUpZmYyyrPYzYKtvR5EytEPjKA4tK9iMX1YvVcAWfBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HaLNQPbo9nBnXYPPLBLnDhDUNBB5jRHHGpCHssXUPr5TJUVpkULgmeGBoQaWxfgzviG9QtiVjKksNEv5gQDBvRg",
  "key1": "329LG2y4yu7Lk5Wej9ELUwVSQcrLLG1BMz4b7oR1REaopwbbT9zePjF8ub9sB1HxvDXPakpyJczTuqTvukNtyR3U",
  "key2": "4RweMgaEANZ3QuPZYfoJuASNNyLSzuBs4vFgjTnxd2mFQonrT1qw9X8phGGai3sLKy9btDeo1vewqRbGEaMiHQm8",
  "key3": "3rsVgaPLxsXrna8aQcrCZxkmM4w4HdoZu2hr8UWc2nzhNtZFnhk5LwWwt8YrypLZUN7wxrpuczb7mHySooMK16C5",
  "key4": "3gXksTtaTMvaK3exYXLbv68wPeTWvixWNrsKx2qRYjssxpJuTYN8Pc3QqCuvRcGLWPYWTPsQ2iXFpn67H8dkz7i5",
  "key5": "3K87juuLwCKaNYgB17bQCQHf9znhmXCvCN96oDtysNJn8WqHY8u3fm6WBonQmT5ApWWJMj8xaeP8cnBKeWPU9KRJ",
  "key6": "5BeaV84Ny7n2ms4hf8ubp92W3BFMYFMgfLpxXmyG3TcSfiKNmHbnx5pFQTsc6NzHsNGNaGZMMwE11Kmo95zUpZKT",
  "key7": "hET978B7cgtmT55h4vwNBSmKwRXBWnCod7bMY8tkZVLFESSqv7iFe78vYBzPAz9P5T4HdihRH9zG82ED36ML97i",
  "key8": "xPWfVUP2o9MQiATpzAWmUv1LekJxRpCrWo9G8ftQmQqPtAXNNB6b6fVPzLFh5jAGPecooZdo8JWk4dfEWAgVMvM",
  "key9": "22qmpxuXnivcDuNMgx4y7yuKtr3Jke7xP756Dj8jFGCd537CS5uBWnYuGx2g6rNsymBKdQxNRcGieik9PW7Zbe9Z",
  "key10": "4ZR2YSGbweftdLfFFgZKed3f64LKgL5BjpgtDHUwenQRGYxuQx9VgT6VDyAmbKasY1n4dKYtnfuQSAFsa9oXY598",
  "key11": "56pmCapGg1X45HhYdUKUJonxnPjXgKV2tKxJi2Be2qeBmx7J2s6MdAq2neaNLMmmSZxAGzkdympEZh6ifah7rAJ4",
  "key12": "m1mRmdAjaWB8aqkeA3oLPPCpiNL2QK8g5PQxfHJ2G5umnmTtCA1gawh82F3Z5uSXtyNxejgkUrHmxSCUt43cKQc",
  "key13": "3xeAwXtLGEs6uBwVma5oFePwnySDJjPyWXaA4yX5xY55qjCeCCUVBCMkTC8zKwZ4ZEsK4ywpib4nQHBoVMtkUpYK",
  "key14": "4whXmznVy7uEfKnQBCbmRuCMLYzwLxe3iUgfEn1jokE6z9pFhGujekGFQjedy3tUsGPGoH8tSRfRYpcpVcenHCna",
  "key15": "3qgvnvWEsJEawdXFMhq12udpwHbV9Two6YR9zKXTN3kD8HJhq7hvyqFj8HqZ7NbVi2iFZvebokeA1gRRvXppcp3M",
  "key16": "4bxPb9qqcXBef1F6TjoDd8nCKPrRXVeT5K7s2DTFj6s7596YR6QPNJsEEs2W6bRXvxEBT1hPhicBoectxVke6viT",
  "key17": "4NhxoUcg1vPEfRU5PxqC2YVsHzifJUYXPxnpAxa3FSKrdfoA1LcTHya2Ej8LQR7EYam69Y7gR4UaKwys6MQLsEf5",
  "key18": "2z9Wggcmg7LC8JGXw5gpoAea5hSLGfUWAhhuvKpU6En6NE3bB3LcsPfa55mm6t9byP9p1kGZkpBDF2x6znvwCQeW",
  "key19": "5MzyTSRb9BNfJpLWrH6DeSKa6NFS4QqB1JdgJpLTTGqgPKNYYsSFsbDv1R4SvmXpae6uJHZGBHhJqM17Yv2eqiwE",
  "key20": "5JfhwDnawThpDheZxPyxp4KbyvnbQMFjnAvTj1YcnWNSFZsSHRVbm3qwYK4nUNQB8Kh3yU24wAs2AhWN4gUt2JC8",
  "key21": "4e4ZNJp4cnLMeZfpQ7PtRffngTG5NgK1yjuHDyM77YoAibvTZDvUKF1y6hxPaucKAvEMw66UGRuLeVRV29J8t6KL",
  "key22": "5naRBAgdZxLRxA6GkV8BMGHo6KfvjDpcpYhPHwpK9zwEwJ3CshafyBXNPXzfTupFRv1txav6TwR7FoojcQ3HmmVy",
  "key23": "4dZp5sJpoy3N1J9mP1PzoobTZdysMrbryDwRo7PMge99koRocJV66mMtv7yezwxzULehpdMnEYtF7i5EVowEHQJ5",
  "key24": "368touks6CT9wENjFSiRXBJjW7b7jcJhoBA7gEV39L3SMQqMJjRiAr1XAkg7p3TginT288HstB272TebLZpWNxnw",
  "key25": "2KZjCGDNLGxq3tLLvXAPb4yAYwTVca6EeNpvjLWstM6m6Sa4yLA4j5PSeG8fsMnXUPAS1QdXZByKi5b5Ko2mcJag",
  "key26": "4485W72mqM9DJNWyNfD5R39ymxK1CGSYgRokLsusVuz5RnSsVUVmdGA1uUQcXJf7Xtr3GMpbjb1ZWPRMzQT7XGza",
  "key27": "4WGEvToE1XeBSqEDJmerMHJMqnL7X7he785WDuCcdg1ZMkjsjMyvb7Rtx9QGdZKqAZwigD1HUxVr84fEXtrWTgzN",
  "key28": "1ZgeMqL5ZpSNH36gpfGebbDpHtTbWCPNpLJHNrEdh8M9GuzdtWrxxuuMnQpHEeSDx7yvW7V1ZkwEEc2HWs2ps8Q",
  "key29": "3hy94s8JrpEo6wmeG91TWpotpwNF1qw33qZFUTZTzq6DRuo6L1SRSMnnd12rg2Z7s9ZFEVEqAodhQrbdzYRzRDou",
  "key30": "2HFrMwMZTydwKZqP9rprU22HhQNqwxFjcLRCikESzkPQVThSrRyJx2LW9KMfXqM3G2cBjzTEJNZtToNReLZkbLG2"
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
