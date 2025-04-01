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
    "8fMNYRQCH8W7ZmeDAPUt6uDv8ovM3woEQ4KJXGT2YXwrxBoWuZu8cBrqZMQDF4cZMyb5J7ftNdMyQ3ZTNUEXGU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nDkT1zxrW82qFz4B9jkj9pej8S6GUx4PHqfT8DQAE8kohqcjGN8Tsj6zFG767N8hXef96ssty3aMym46XEApuU",
  "key1": "4wWegszfJEwUabsrw2q77Sbqi44UETqXARrKf2cBtyNWkRhS3xTdznDgX9XYWMZ7oDQcRui2M6AfsxkUnDxFFtQd",
  "key2": "2gRa17hE1YfMwGDeCwWG36Xyni52PexLGizGXAHWZYBVw5oesJL7D5VaGwX1JnF3UuMWFHV9DWkvwFZbdFEwsJhm",
  "key3": "6VktgaSEDXkr5X6UiJemvQ1YffNhMKKq3av7sKDxBrBUEi8SUBDdW7DKzjCjeFKp9Pf3nAt7Gc4WdUihv19yf2m",
  "key4": "3AxyFzCsgekwSqJwo1BHL87wM6WMubf37kr2fjM24ECoiSjDP2dP3jJQQgUTE4hUYVgJ2Cs85gZwBbyBFRzs8R5Q",
  "key5": "Fha3osJQtieGqW8wniVMG4WSFDALmLZ83rfXnVUxGe5YjzGapKH98gh24fedcHDjpXnBcnX2p5bS76FoR6mmao3",
  "key6": "4aqRQPsk8qevkLf1YtoSmFLUDVL8MttcFHaDNPCK2V4Rk7CsXZ2eVbT2u6ghu81AHrCRoKA7EEuPvBACDHtCjtj6",
  "key7": "4mV5ULgykdRXgRAYW2ym517EVWj8T7Wypysmcm1nC2jXqw1gBYwXDA41D4utxJmAfnipvw4Fk4vrZrXp9ztiALCD",
  "key8": "5V6ZdVtWYUTCC1b94Svq2ikR2ZRVWVRrEXiF6vpKN68pcC3UX6njhHWeYhpyVwkx8V4H5EQQWh8mKcHW2V3Z3eUk",
  "key9": "3n5P7UdbMzStupWenW25Nqn7GuPNQpQw886ovstNa8XWCi3XnVyeqPijX4fSJYA344SSgot3vLYfWsWwi7qow3sh",
  "key10": "27fbP4rW1nYZLJVgfwdNgKjHFGago78DCRGVVajtHQQTf93uL4G5St91yfPMyoVVPRkFdYvUnTmoyuxdTRMxtJnZ",
  "key11": "2CY2YTQqge5uymEPypsdp2F4inkieMhAUauUf36q3ozXhvrQedmTgdF5yH5hVZuHri45y1TYG4vsLB7vihYYJxJ5",
  "key12": "4278bp9zZ1YBxx79woxMqMcdBAhRkX6TUj3GbKcuvebBvVfFDapaVnfsnr5DqPTvy9YCujiDVXpxrqyQ7eXCA5oe",
  "key13": "U46f7jDd4RGDDQXH7bfBEUwEpVhS7B7fYSqrCEtwwFTEkm8gRhJk8S5y7tASKjHh2Hn8aNXa98hGY3zGGe1MgXr",
  "key14": "5h7MEG8kYLEzWm8c75oDGBF4maAEMrYDg8T3TzKMVjnq6e9wRJ4KtYcmchDMbSq2n362RMB2bv2DaFmw5EEHDR8m",
  "key15": "2udoh4WtCB1B7KXZrQYctNw18q4AdhQKCVwFYu3wy2CQQPkJnL45F9Pk3o3g1CgQT9JN5SzpJcJYANyFsBo5BqYL",
  "key16": "pgEj3iXvkayoq88n38AHUSGHY4PY9qwiuyQvWDJDgsUeE3ZAV9ojnZTWKaZ3vFt8js7jf55fNck5phvvdBVG3e1",
  "key17": "3bDM9EDxRLzgBgieJX6U3XtsyWa6pf5iaeDtbEtXEqaMptFqLvF83qsFFRFAj4bngcD7H88qQRetoUSAbpxDQbNM",
  "key18": "ceduAL2JQJvi65j39VwqWffDY1KSbdCBVZVekyQUwZ8neV8jJWgzcMgbdyNVgqb69D4mkTaJFv3czVYVtnjyPrY",
  "key19": "3B7nwKi21p9rEFScfbeBZYPrBL6c2tgb4FDRdhxqaeDZbaTqD4u5BCpGifCU2xWvfm8ztKYSF7KJzyKuBp9nvWiS",
  "key20": "3aMHpvFoaJh2r4a2DHVYsD7bu1tUVgJNZnHnwKi12oRb59usVjp8RfLHrS7kBgfUuVkEFE7YLXgui4JtzBvKbCpj",
  "key21": "5yizf3p6ePsLdCtLkEuVWKHhJRr2DL2j2nEaye7727fshKaxkdqUq96eqgAFiEfBs9vYn7XDNMrY2me6mTX7gmnq",
  "key22": "4QAiu98ZauoviwwiNmmAUAZMDBgsKvrbfLUi3X5nozd1Rp4z2WssRWCKasMw3GCBZ8zbFQ2JMHm6DkSJMehw46D1",
  "key23": "5Rjhr8m9Dv5pJr6YQADpPmH6BzQiUAtDs2NyLPiq81Z7Tv6P93LtAh9xwDwdCBRTTvhWFcpNEVGhFPzCpfB8nxC4",
  "key24": "3iHxv8JiCRZcrqCZuJrtuYiVcxYTSSfTRQe7LT8WwcBmGQDdNEWPGzbd6ELyWr7n9vX8Qeb6PipshDcPTh7hmiW6",
  "key25": "4T2Hbyp7x8pqixQKP8mtE9CGasXaCpTprvkeHEPYEm2rJwxBAVS4cwxTwgWyi23yFUaszJAZ39uiCdXqMZpgPXnj",
  "key26": "2qrU3uDQCKg5mSBdKvvBVaz7xKgfqZi1mZ4hZT7JbpPmh7jEnyZyLADq9B7aBaPpyASZisurYYLcu31FcnAJZ6cr",
  "key27": "5kJXBM7Dc3TdSUazbq83y3SDzjdGmBAPhXezNRnJEgYEJu9RVzEhujg5MyTJpQrrXdmR6TKDiWq9wPWBXb8ryUko",
  "key28": "42yJWXw2tLPFSHTy8Z5Bvhv4hZu7kPHkWeZduCk8no5mgn5LTdDynCWYcFyfesvTrHW3ZLxL16xSgJGd6Bb78Y5n",
  "key29": "9kz28acPWX5jMcp3fiWmZtQQNSap7z6xTEvqS4BuRURPJ9SitxzvN5v1yokbqeL7yuxxNewLiPKmPHZdZ8yYTQL",
  "key30": "2aK1fQZuJ1aS45WrMLsA3uKgB3LqJNCbiq9XGhSPxA1Fw9Qct3fJFSM8ZTyz8hRQ3oPKQnFWU989S1zi9LN3ktRe",
  "key31": "3BxM5x1wW6UK5EiMXN7Qrgb2c176ox7DMXLq39cv7nC4Qtf9AZtQ2mD2ns2mEMzgAm1mSJ8p6mmKVzumPzjtpp4z",
  "key32": "K3NoDkwh6LWFBs4avkdQ3ZmckgKVBHy4V2vzkiiBJ9JSBLAucWBzouH5WeevEQis64mFS533jgN37jPRPYdusjG",
  "key33": "4pB9iThUnCUY5SkRgFzFSV6jRDwQsjpaQvA1nfsqq5FTTA6YzWuaQkLLrupbPBo7LpSVFmvyQHU7HiMVNmKCJJ3S",
  "key34": "3SrGmVwjL6Ayx34e1yEwfLEWbQvYnqLzd76tT9SsV6AQGzkFmiFmaCxjngUzx4hq2puGWyyxx9WYDcT5jqnYojYH",
  "key35": "36G2kWUY3j6GcWaWJK1kQn4BoHx6wTRyM8qrRV5viBqxA62UjXU6DU4DY3tAQa13ybtM5sPs2p9rWZA282YLidVh",
  "key36": "3XcQzyKzGVHUZA7Em81j4Z2MECiHDz5NfQM1hvrM43DCTavzBFjCY2roBaD7aGdNJPGFa57FHovJQoN1Hjneyx4K",
  "key37": "5FpLjjCKw6z1ay73F9otPg58YRQQUh9XEjSCAmTHKwRKqjJ7Tt9JQY4ngJvfSzNMdx9AE4hYCv7tFqVCvpjJBhd5",
  "key38": "62XE1A4Dz1xS1McA5cGp13mjCQYa3NidxtBv6LWMfMKKLRsLyHA2AJjCvn5AhQFYhKEj7QwAGpGUykZbbTasCtK1",
  "key39": "2wrCuJSyEMiYaL1LUWivAo11Ttosp4xHrB7qzhFicSWYHwTY4kX28B7ph3UEpSuuVKd6wd5YkLvMiP9pwfafCB5K",
  "key40": "2iYh4Xb4AVfjQcrj97UQJaRgWniGE8euVhpKcmcWcAywQkoevNCA1EzGK9p9ehXhmQu4eEPx97Yxep6HpRuV2wo6",
  "key41": "3zoGxbQ5sXG6QW2qAhEgh8XHSPtteMHj9K1gF4PdsDKh7SzcxSMYjBhugqX93dFNta2JKqFi9Bke4iQiV3CfAru2",
  "key42": "4ovo9TSjQCNxu4QNxWLadBsm84v1BT52aQjJDNrKCnvHs1S1Cfk7hLM4Ahhy8hyMQQDNnxWXZXaVKmpR6ZWVzcA4"
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
