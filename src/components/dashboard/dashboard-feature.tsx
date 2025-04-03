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
    "4LeKVbmKnTpjvzp6onfo4zS72rWm2rV9Kt6vWHf7PETZH4zHY9U5RDunrBJ4RWQ3kcdhMayNmae7HamdCZdLokVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txJtdhfuou29x2UDviHV2Mzs9it1nDyNURDTaSw1s7VeeTyFmYv3NqBmeN2LD7HwpFLXrCY5K96EXX2oJBqZYza",
  "key1": "2EjwY3ynLHHMveFKs7XKvRPjQUv7zpnc9PZ8TyGaVj1SiPzAQQTf2zfyqBT52xPrYiMomnL7rsudS78xUfDpcup6",
  "key2": "wGqThyvKVPk6bJ2K9UJYPKPZFKNmBgAEw57eddUNt52BkjiboZHq8LCHPDDiFZPmJLBqkjsJ3AsqmWmvtPYtw2S",
  "key3": "KFAcqCke7r77QpD69GAyfsDqgK38eWkFBmb8bHK7Rp65zCk871XvuYKeLLxeWNcoW5rmEbkpvkd112csKCesg6t",
  "key4": "2GS9XVXko6S9RtX487tnn4LxBYoNdPMfrbJAzHmNQJiA2KRFRJ3oyvb9iTK5ULxFQVLcha97VweHYtpTGwn9JAW1",
  "key5": "5d42AEKCb2PHHBssDu666BcHcSVZRGegjSpcNu4Ub5ToNzC1Ubrdedb2ptCkMiQxBE14cNb8SLMSs53hLR5qzpxH",
  "key6": "2F9nuFtdUV6XDuXnwD5fdW5btuirYoL17GBfcTMPiyhxnKNn4kxDqYT6ofXaNpBjLDSYzazFUurxj8ur64NBi5WG",
  "key7": "3vewsav8c1qqUw5jWpbHGBUkejzJyW4NB1vBaqA2MfmCBVXoBk7C656h1n42RCcZYzyRZzkrymzLbhZc4krPP7uC",
  "key8": "8G7JpCpPMKtE42rAo91e6qJv4VvVhHP4z5FN7CKjhCg3Awi1eA5Yc29QoULKvWogyBaAZ9iNaYiMWWvjdM3Wj11",
  "key9": "4tFyovf5rc9sCP44vBQZ2RoMndeiVAcSEHTpiHt8cyLSuJZma7yzaeoM65yT4ybh8SrxHqy6Gmxo3bwipzP3XQfY",
  "key10": "3qSrcU9Zrdk1Fn9iet4EXb5GeMhmbKt7c4wcLFuT8jM6rjsrYKw2emppheBCLFB89jS3h1Giyg8FHtJ6ksKBjpsW",
  "key11": "5dGGEuspizCM4N5Tk9N1zUGVXDMkjJMZPziypYrcFidvZNSJgxJJNLCtvbjirVCF3hSY6ZJByfv2yd3oJNE2pFQR",
  "key12": "2XJfTn7GvuWj2BJDtTocJGxPBNp4f6gtTxHUfaz4ANxusVUxTg2bM5zeg4m8zezFNAnqy1bxakfEUyH51knEPhne",
  "key13": "35tkhVzjgpjn23ZaC4GBLSMQqd8X5b396RhmSF728GYs7uvbWdSnmYiLh9NmAW72rjsu5LYp8LYGcrVHGKMgHfbw",
  "key14": "3hcHT7C66Vda8iSzZaz3V3wrpZ6PVKTxEXjU7KBpYRdo3kRSurxrqNvK5N5AKkTuek5yqQo3AxbTwWVBLAKL7kTb",
  "key15": "32t6a2b6ECoVynv7N2xKi6PD1sPrG3VAt9F86p71fXDAErjzT5wDd6ubARX6dnyqagQcED5hsWYc4iCFnmS1S1Yd",
  "key16": "54xKw2H6sSECEL9oPXXKFYcFFYvC6qxZN9ArexAbnFSc9YyBWm9y5Mg5mRGZMC1EA8nSDvsZqAX2ZoPWSJUYKStT",
  "key17": "4FCAP4bS8XTbYKhWDbTkFT8Xm5RZ4aozRr83FmQCVNQxKYfwtUYj9RGeAoVvipUAhbDy131cnYowRpWSGjgxBAKz",
  "key18": "3j1N8pkf1Q1QWBfLPEP1bdSvyg4xnJcvHo2AK3c6ZVdyWZEV8kjAyj4TXLWnUdEBkFCMqYnXSKSzptkKzP6z1d2P",
  "key19": "5pfmijHwr8mmJXSesPHJQ7xfwQk4dSDQ6n9AG1LqAatT96zib2tyu2Q3kMizcLTQQRf2MmNjimWwXVH55MWwbmkp",
  "key20": "2AAiNQhuVeyYNL9zT7kaRdZBuBV4EPAk8iHWq2ALy1SongdhMZuqS1Cp6fiKisiwiC3BpFm1kAtLFDMooaob99Ga",
  "key21": "f1eTxr28bCR4Mt2uBfVK6xUnCWMA2La77Nsq2bShJWEuBavyA3J8MqRLtZL2RXpdjn9FxEaHLP2WFm6knD7tyUC",
  "key22": "2Wz68jaPh6q8hwPRfgpGriWxdPKznJYzijdkXN6Lis8iLmkrVPP25R9UotGbMv6nhz9QCQT7KXtp3tR2mSyposgr",
  "key23": "37cRUj1aqo3i9DkbkEp8ZiXYoSdjZMCyYwqpD4FREqtj7pSsY2NgExTs5J6HZqdggf4bVuojXE7h2pys6Mc4rNHh",
  "key24": "2tVXaVDV7gMPA8zrheW7t59wgAphUAovJhFv3ZFpR1ki5eFybagHngqYobwhuwRsnw6EiLNvLYNEfP2Lzw9b6X8d",
  "key25": "3ce8iDfmDZ3uZ6ovVVvZdrnMNzBA9SX4VhwFE9o4E6XQjeW2e9yQ2BBnobetNbsY5Lcr7bBdNQgXYo9xxDkxbvmr",
  "key26": "51nBU8DNPjH9CehcNC6QKVcFfVPA1irC3AzVJeGXJqKfXJSnEkzHrwnRHXmtPj39e2H8ywyN8Utp6qbM7biGVNbH",
  "key27": "66nguk4nCMcBxCG1b3JdgXJAgTS755aMkAZZaWCW9CGCN99sbdMP5PhTAEVdXmJjAbhvcYM7AF312jZYMByAZWNT",
  "key28": "4eiLNmuKzmmCzh2MyRHGsu3DZUCqnzL9gBf4nXGuckFsFyFtSMXeKaPa2Xra2BnMLDKzwb21uv8QnUdmiV1Fi9Xu",
  "key29": "2vSKnNwRnkKrnpNpUHznmRHMhEzwfQHAJdTGk5TnwRERa6wGTKiQVZ9TWx8xAnYYPX8zdkLH3tFGuep783xEM5vr"
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
