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
    "3KQ6sN6RVFYAMkqAYNioTvUeSbSxvJ4L3rvdaEnzXe1RiB5APJNdSySpQkoTorHrXtVKQr5cJH5DhFrPdoLRMnbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVGapq9qofFL5P96fgqvqoHBdHZus3DM4XZzjk7uWZ3eWQhXXak4PGhGiGeghEFkZV1ZbHKAwbkMGucqpXfydzX",
  "key1": "41sKhUb9jMea8UXkAMBjFP811MPxTZSVBGnu5bA4i3aHb6buKkXDZZGP7uf8beGe9qxuogo1HRmiXoNjNF974esK",
  "key2": "2dd3tVX3UuiGgVQ2tViQsd5aovz7LGV3Rd448e3XgCruUBN7Sw5dNrmmcpfKyqYuPuckaQCZfTYXX5Z9VxTt8sLp",
  "key3": "5xmGEifkkxkGv3QH51RQEfqzLLYZqL7Fesspf367tEK4hMEbiTPgfucnFvRK2rS5DyTgAosuAZWagMYT92FCfR8K",
  "key4": "61JCUVtpS61uwAsDaPKaeoaSXqrpsH6JezxSZjghEYXipM8oPzq3hgGspqZFZPGGqCbLE9BS6uXNiLmWCGwnX6up",
  "key5": "3nb252fnv893dMpSMsHaM1MkD3u8ipwgs6gA5kTnhL96MaVxjfGgYUZ6rHWyoWdHktd7gJrqpJ4JSD9iE7jLsjRi",
  "key6": "2sPHLcK5VaVmbE8RTmn299XTibjerk4CZzfbo3AtGBDyGTn8riEwmg6LpHnAZa8cx3W3N33MTdDNoK4SdPM4FBwR",
  "key7": "38PgK2R9i7jLqNDWcHwPMuRSrzs1dpbPDchUgNxH5orfjA6GDxPNxMPHp4aC28apqWsvr5nenK16QWh8HoJTdNc2",
  "key8": "5u8vNeqHpXUZDdF8sTSpmaZEQhytwVu4wgPXTQ4L2q2459x6kbUniMm5RPZtYyEeWBs2F3QfpNwZeQbtreTcYR2f",
  "key9": "3U5drYvSq7KeLRKmRnWNFYi5UUU7B46BassPKmGHkt6H5ALQvstE1BHT4LdeEXYvWe2DopkNojz6NVNgdHG1snmx",
  "key10": "44a1pSecwUwcaNtGokqoX25Y8pR7TTTc5njy3DsFaRipi2J7MQkeYGxkrQrb8tvLzgvaRPwCzPSEL6r957uiNRS3",
  "key11": "4nQHd79xdvTTberkkZjodw4ECLQwny1DjfLvefuZnJZyAyoZEJqUFfhiP6HqjVcevvthCBiydppB7RTNwWQvSDoQ",
  "key12": "4MiMV2UgxkNCGdLkC62XEn3ccJB4qWHyThhNtcDckq1nzyHiEaR3hKYAkRfWTZyjLpmMeAxdV3TP6F7SHHs9DR7s",
  "key13": "4zd7NLhUSUwp3PtZYWMf8BHQetYAmLtQN3CbQSCTrY1nbWwkdCvgdXJ2sKC6crWBNrFacs9inz262aJ1E7bnWwpF",
  "key14": "4pLj2dXRmRQjujU6d8ivbYoz6WSq7mdfPJcWhpkDhcCjtdow7B8JvC1YPuoATsXVDKiwprX6s85Rh2wo8Q6vonaC",
  "key15": "3QeaF6w6XgGhoj6cwq1WSDQiCCcFp46in2LRtW1vdhVGByZo3h2Vi7khPtcBtCvzP4p7iPN4amb1Lv7DyGyTUBnE",
  "key16": "3b1515cAWzdGoDPsiD7QXjjnReFAVuNcEuifJYxp1oaHaLVMTC7sH34rG8GYqf4rcHWJaHiuX3pJfKxgf72z9CGw",
  "key17": "23LZLWEocVafd5ri16ZyCBrD5RUbSRUpgfE4p1KvFFYRhnvuMfPj8eeUDhxPQZ3tCJUzhfuukw3vPNMw8c6G5wXh",
  "key18": "4fSwFTDHoNKAMiayRLknMuUkG2JRBPsrXkRUg5Kabh8u7KqAi1ACY86yecbr3Bzkd1Ju5Azg75jPZCG7xivMYUrA",
  "key19": "2XnvskyP1Cy9Y67WvVdGA6FrsSuVNQBVAwEJ6HxDzvv4Dt2tXHMngpsDQBkASAEATh9VJGNDbJG8C61BJ3Sr1QgZ",
  "key20": "4oBDB8h5t1Fo59WH8XYcGXYTipjcbL7FDgzweE5kvBfzjTrSWCc6MdrgVZw1QiE8EFYQNFKs7E9mbe1qYxpRjYuQ",
  "key21": "5hcqd3QnfS8fJjDtj51ucWVLPS9LWAiLMaSsPEspxiLzsq2hEb2kYFrfg9qGtXx8ZCfopPnAcqsrJj5ECv96biqh",
  "key22": "r7XVVLTrFgwWQfZpX9YiKcEJDMcTZZ1SoStko7CsyUMxTPvdXb4XqezLCLq771NbQgQJShWy6U8iEpLBtS5gYbs",
  "key23": "TD6ATQ6Xts6fqo2d2ivKiyiHsJnxwnAWhfCRByqSoHUBSUTUNdjZ8fCG5SqzTMBSM7CwPSEoUp1H6q26byNvkyu",
  "key24": "SmJeF6GSxpuB8aKx2Fdi5ztU9UWfPcsBX38ejAigXwR3wRERyxy2zbYaRCf5j7wangjs3495RtPxHZtjPfsDRhc",
  "key25": "4TPT64YkCCjRiFELVBNPcVVzGicEL66noJVnN76uVdSjxQTVD1xDsHhYw6XdarpJjZfYcy8CUE6FLHr89DNGGM67",
  "key26": "2sSgcYsuq1fWhXRybTjkJ5jsNd4U3NNDoLrTxHntTP8FLW5KTJUFWdXbcnEy6bvnQNkg6HMzm9gBYLLFLbyTSpJr",
  "key27": "63x4uodXS7Sg26MbQAAgMJtBKJubv7fcGNHZsNFsFk78LQTX1xvit7iZsv3kDYfhNtKe7L65L8Hza1SBxi6YuCA1",
  "key28": "5fW6g22bR92ZstgwaErQjT5tEQgc2LwaiG2UPgxH13jqwC9W35VCPV6wdLWPZumceuKV21fWhQoUwV2D2Zp2mhrC",
  "key29": "2MyFp3vTfUYQ5Xzmv2PRkdaYY3Myy4Kaihkhh624kLmDrKPbD8zXrVVaQsRNQHHbGUkED4GVo9NHdYVufyrAA1Ct",
  "key30": "2ZGbCCBZUCc3uXzUmeodm2RpvPbrVburRaFaLq6NRG6KasZtGGVU2ZrLXn8QsUnS1NgLo5ZmHZj2kKQ41StsShZc",
  "key31": "2sDRvuNnBRiwrRvvuokxWXjbQVzy4eQBG7tjVBrx97PiPm1k5e28BEd8FnZbiXMoUuTpaopPUREgbPnUcH5cekSx",
  "key32": "2tVWUoNsw8UsWu993a3XPANmP84znESCDiP2r81GPH2LjmaGT7Q5aM6RwiKNEoiKfJY5wicfNaBvj2WGzCE9UwYT",
  "key33": "2ArijqeYiidLDiwMCXrDLhoq51wUrZ27p2oFENVGGY9DNM2LPoD7qZTMMsXwTVX3Zrtbddijv4i8Rw6rnQ6STugP",
  "key34": "4P857F7gvnbfsamHi3ZYrVGuKFn9H29CF9TTJaSahuAqTgVZKVUU3Pzr6QSC3Vc6uXZCJPed83PentcE9eRW1YTo",
  "key35": "23niAxmAqAfJ5Kwjdyrmg9mnjydhwzsrxb1M1psd62Tr6mZLKcn5v5kfJCow1JdvSZE2kHh2WirCPy8gqBXzhpvD",
  "key36": "3xEtMX7xFmhefnK3eAgypgbpkZzP2YZcENCuNn1LuZ3Fzt5y3geExgbtcz1FgSj5XCL2FjuSfZt1YyoS33Zxxwiq",
  "key37": "5CbkmYjkHjLXA7YTFWd6J8786wm8a2MiDBUioyYf5aaxHMDSpsdQBcWeKHPDbhnXdxzFLB7crBe85n9Qq9V5K47A",
  "key38": "3zZ99dcgYHQrAH6QwvPQfJtRrWzXmZDMc3sJJ45MAQjuqJWD54zmgLHRLtJewC7Pq2rZuwyb1b4FqVcndFYBWSAS",
  "key39": "5h31oETNDMiiFQxXconAk9uFqkHJM2bvW2hcxQmYuvsbF3PUVYnafpqoS2jjqH6zkLp5P5xXHmKwH2LX1zrYQoh4",
  "key40": "4Uhxf79MiuJY48S8eaV3eCgMzBLRuxKBqF6qgRxQKwDyLNUuUBzqMMHydSjNpyUFnrHhHy6zovafqLCV51oFZ97r",
  "key41": "mShsbw4wAZFjdYbRHY5jSD935KTgR8CpGB2nFNqbKqFrvVcvtfCPDcyhiTws6VCVVuynGWE59ykyRtXWPfDGNkL",
  "key42": "3B3EmRa4Z4urx1EXNcaJytYFT98pP4FsVC3eNCEUTjAnjBuT9vEopoojvJ6A4fJVkj1ZiM8Dfyom7vdjPqN77ZrA",
  "key43": "2H2JeZV3iANy4TnqCyuj3AWNRupsyC5FVHa4n1Hm4eQF57xeZD4nmVuGdkJCqzpTsgcbPTTpAvE15bHt7CHbYnNs",
  "key44": "388x5iqYhXS7hAMV9V8iosFm17wi5yRLhihL2xwAiqFKnX7eWTP3kMvcFPtfMs2kDkQwVBJWdwvpwKNWfM1pyzH3",
  "key45": "61YkvGh5GamRytztYPyC94y9fSGbusYjKkbmBgF9uSorB3Ydvo2syQnYGkaCrciebCYGQgVjtRWQJWVUahCpJKou",
  "key46": "4TXTT5Wt8NVq6zQYEsU7R6gwhQdFAyKauYwcCWU2Z5vsRvsjX3QmYQc6yVnFEsdVUq7MheB9Ttc34WBA3r5K5YYj"
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
