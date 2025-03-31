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
    "5qDV2zWM5pQBvvhiHxAvWKHWNDSyjmSj5KJPasK8XCpXwoktUkr3gfsp4brybYTrfHL3gkmmVtXvz9fQv8iByWzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VugwcvBG6FJGjGXgQa8fzEQ1iWpJBKr2j6eVsT2A5tvmi61XXP91s6VqCwfzx1dqgWyhqnECDBGuxPmqmZdMpKS",
  "key1": "3GiXubEY8BWwUHZdWpiKQZJHeUUxaH253shKQxDEyLKJcuiNxmngzGPjevczavzjj6AbwxqJ2u6SCqWRrL284d8c",
  "key2": "5cpTXu3E8LUTPSQEnJ2dL3k2u9V5hRYEwpzbppxmQsrsbvYpFHTiftQKUUxFDs75WtWTrXktzgZP33Mkuuu81cbP",
  "key3": "5iSBufVyR8anoQ9UUP8FHLbrBJ3KA9GLZZjbon3J39ovuMo1TDZ83fSjnXQLRa2V4foA5rUeXcpLoYswn6FWDkFZ",
  "key4": "56EbLPZaE13k2EtbJ1wxPogDhC5Nr44UoeQmVbxm6j49JDjbSJfjkjze2YwBMd5pndNj2fJP8p3xX8JC2KhQjZXH",
  "key5": "4pQa7AHbHiwjNu4Lk2PBs344huQEuQsPaAHZqM3C6bRxeqSQ5eDF8A3VXxGeWSECCQUK9aNGqXGjrCiR5dNndZ84",
  "key6": "5r7ob5YVKJzdyfDPW3z9syvcZV2R7iAmibQSgzDN4agLH1B6V5on3uMa2coo2zVDc9Wdc1zdzP19wfSzyjzTdSJ",
  "key7": "5AUiericwntAxx8CLz2YYbRnV2g79by7MLsCzbVzzu98E5edSJiuZdxj7WLsFNpSkPwVR5m2r47AHt7qsjPyyZmY",
  "key8": "3Qb4R2CoyC6ax1MqbKtvm36hmcLrHu5mycwWxVqo4XTox85uB2AEfyeCyhgSihqbqGXF74rdAT6srJ1q6BB3Nnzv",
  "key9": "3KG1A4wrT1vMGwHBj35SZyDKQM6PMU881ac9fiMnFZRfaX7pbjQjbsNLj6w1rUQ9dK2Fxpoh3ppH9HFBisuF1nNY",
  "key10": "3W2MaCnn1xpALfcw6qdokb16bUk8gU8g33BGX7EG8dEHQjmY79eprUonCMmQptrZJ4TZ6Gv44wMKWuvCvL14Je2u",
  "key11": "5wyMqN8tW88n44YkMurV9soetSxbsqgC9q7jUmxDk2pBD68kp9Zce8cAsrLFU7qmnqCYhguRaxPeKBRx4YmoVyXV",
  "key12": "4mzSPRRnV1CJ6R1LbkVg1GQcV1kmNcqLtcnkW37iYKTrjPtgQN3Z6XctG7BZ2S4MXykjaDX149QfbDbu6dTXWqq7",
  "key13": "4vzxgx937HDLvCx77V8iCw1PJWYkiqvF3eJchEeSpGMzd5K43H73xiGS7CYANN1NxN6jskeLAT9jACMuKP7vDEcq",
  "key14": "3mW97QxZPbqcCoNEkj1eYKrs2fpqTLLZPoUbLB2MyLMntQ26fg8rjFdFy49f97gfXMZ8M2PxWw8cdpVECdDZ7E4W",
  "key15": "a14NitsRLBAMTS4qtfUkt8oy762LCKBp6XvuovKnHgVQwePewGagGwNBjrXCSy3UNBJ7FFeiyYEpV8us4rdCfWJ",
  "key16": "2VteMeSSkzJsNa7N2B8rzQmjQmJWiDfTz2jha1T9ouJw2uiuQiUm5FwGcwgkbjnwtPyhpBvzK4qExT6yh9K3JiMw",
  "key17": "2xpJvHvyuNRzMSVUx23xnkjzMayJDGAT4SN2zgHiEaBnDnkMba5vqivEmf5u7B5LYtCzVERj3XB4WgvZNV5xTTUB",
  "key18": "5xrZdSX9NFU56oNmEpewwg4bXGhue7txNBWnm4HEymgKkZ98PGJK1mqiBQsyD5UepYSCiPqhB8ybWmXSPHzYbV7e",
  "key19": "3czwzRcr3qcvWGV76ye4i8k6XiaWiyDDs3rw1tgBU4WopMcqmBSzEV6bRZ7QYJWhTutNCmp1qKUki86tKb1kzGWc",
  "key20": "3uyqRD6zhsGwG7kcRR2eDX9PownUDCs374PKf59Bmq75XaZ6uDsUUbDu5tHst2msoiQPh2ZfAVWMF9E1V7BBbfw9",
  "key21": "2udWuMvuHzr22akZmyJYJHgrvsfWqeD29baRkxUBbsNAhegdw5Uu94TGsMtCoTHc7XqzR2cpRLVWJgMYUo2cDBwA",
  "key22": "3BuB6swSDAAuSx9srWeo32bAo15CBX4TkHqTBXaUTvdrgS8RPYkScret4bhHZ4AXv5ccLpXz67ikfwfZUQ8ScXhy",
  "key23": "SLGo7WH93KV9KQftHBkUCRzzHudwJvceQBAeQgET69sCWZihj215Tz2BKWAwd1q8rcpJcLovhidk6NyKkqqXzNG",
  "key24": "37WvWh6wAfRVigBqym3SuquQ9TMLsCA3DKLTCLjWk4nkQxTdoNQfD25dCEm8cYJvgVzgsyLvpcHQS675W45vNVFC",
  "key25": "3jt3fkjBBXebMMASbpqkRewRqTcddKdU8Rm6USkQygMZjG1Wz1RL9TsEhLyGV8oS3S9WaoSb9mbMVYwiuERsDYBB",
  "key26": "aGw4aZZ6mzP528kCmGxgjvBBxtBffhjgnWRBffKzQgy59b2XNZiiLQVHdRVkd3ZepgmDMF2ftuQQsXkMFWYYEnP",
  "key27": "EdkLcFmXwqWNEMJMy6bpSVPWErzSAA8LhD2ApHo1Kbfq31uA7dTzrF2Z4ayL7saSKDmWj6Gtcv2WFF9dsuZFSgA",
  "key28": "5ruFG7NUJ4hgPLk6EGw3X2mSjtAx2H4qWEM3cur89mNEJWa7Ty3oekPQBpZ3WwkfsDmSxf3FT1BZtjvkio46Mhmo",
  "key29": "4oMnzuBiidZZ3pjKvcTUd9NH5ghNHLm471Bb3pWACHhRxuURZeZrV1jJBY9AgvEKTeFAcUQo9g5kDTdJNqXNfiD4",
  "key30": "3oMaPWWmzTp4USoDx1q2DXX5hQ3pmZsbw2YNukZb26BKAspPYCfJRhG1Pud3enddsPyRRRi7ffG1t4NgjaL4W4Jv",
  "key31": "giAjqg4cTWA3RQGecuzezFWa321ithPi7CPRZXoC6BBX5HN9Nb6xNiWhyWpCx2udo1A9Z2ocXc6dCkiY1TgaWfE",
  "key32": "2BQtYAc7PWQGR93Mf1VGMit7v3nYULDJKySZYm4vshnDq8HiqnLDhLn3SrDkAr6RZFcDkHwZSd3gvPAzuMonwTG7",
  "key33": "4yTAN6xkWSdrXSHBR3gjitddCGBfqWgNiz9TErW2zJneLoLRu9Rcpv2mt1JBMWvoc9HPfrDJAr7aMVRCfyQKSAFX",
  "key34": "4VRe1xnvfqouQLJDyFy9cWUjbYfT9FqJZRU9DbdqVpxSfYTF8JfFWfznYuipuNMT29x57KPELXei4Mq2dYvhzgdg",
  "key35": "Gwr9q7s8PYY9KCyJciMPwazRbmk9vVnfR99Ss8FhxUDRUjcbdyS3GvQahq2h6hxNkjJZAmMXdysgSYFaZzLMURi",
  "key36": "dju1bWJriH2YZ3B8WABncqCAzviPJ7T9paT3sJWR7N2nR2e5uyuF9Pyfn9dnif9ShHx7HGbsTAyM8Uz5Mtkw7TW"
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
