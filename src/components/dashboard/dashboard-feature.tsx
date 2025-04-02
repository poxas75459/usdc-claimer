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
    "5JMRKPCyU7ioKRHcpk3KvPixb8JPzSzMA3XToZTHDBsP3GqQTA7FL6Gwjyw8rWsDQ19TJCZCzQLEhcHRjjTiZD5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVmpTjMvtUgQu6wGAat4WsCLvb382eUJHmfxaD5UymaRWWXiFHFnbSk54r3NHjcGvMK7TvZic7JweU3G2g2XAVa",
  "key1": "2BrokmjxrxdcxWeXvbgyqp3mbVMEEdesP6dNedLzBWzZ7xAkgz8KexnHK6n2XKbQ43suBAaiwF861rGVwffJSaqJ",
  "key2": "565TPSKNdnpypxuQjNB7GwcjMHPMrXVQ9pue2JbXk2ipJ2MpqX9B6eHzH77c3sqvDaKs3itMEgxwPBLJS9zrgZT3",
  "key3": "aDx8ox8mVBNj8KGM1AjurJZ4bi8K8zB9zfUSYu2ETJQtkzUVDou89RMkrk7nd7GWc8eVpip3LV72XBSxemjKi7c",
  "key4": "3HvupW1yyY9ZEPD4SFMzvqmn4T4UpBFcqdqUo7fergWV22GEWugYm32jfKKRnYSK4WUjnDQ4wTcF1P3rogXzDmh2",
  "key5": "o2UmsDGUfhfZYchczktdtoKFbiCWoJ6dLHnpTCoweCdtpPnbLjfihJSL81QpJw52TPAXhd9yKuE8Vi7Jyp6odbJ",
  "key6": "XTvRoxnFxwHZ2ywoNrXYqaSLWHAo5b4aCedhL2Mk2FVRswaM3fzByifkP6yFeoiKjNxqcgjXRosBCw2LjAveXJj",
  "key7": "5JcbHYnEq9Sn7JhCN5x3oAEEiD6zDNmVkicjmypZwC3dMXZJVafQoFn1Lg41PyoG7zGg2ayzmNpqFTUNKUetr7oU",
  "key8": "45FQyMXso2RMSLdnFtgYxGpDM8bEkJXa3hDQVYjxxmpWJxQnhxnTctCvL6XAZ8z7V9J2rWzbH6mPEbmzghfGPjJk",
  "key9": "57dguZZ6WLzuQMhYbp5ZoU8iJiK9uiRUM1ePtjCigxmsvTMNxCMnJpazvZLTbDVKhdL9rn2HVQa7d9CDVp68CGsY",
  "key10": "5qPyVB2akBruCRrZhLBmXqN66giVgG1XzmNydG7RTKzeMav8sCMTRW6nTsaRLUCEhdTBS3WaUqYgnXbn5razMX5G",
  "key11": "2VQ36hhxzfC7BYqD7cgAbKxMBGsuzedFkHZv4gsQsYmpvTj2xnZjQUQJqTmvECvR1FgzivRrLeTwd5JAxjv1siok",
  "key12": "Ua7mP8G7iwdf9rSH9JGpmUMJk5iTpcoq8cNwP3Mr7kq2iBHbnLNmsAtWo2kHnG4TWybomspfHA2LThD8gW7pdaU",
  "key13": "3Jtaqski1xGAzSTaJ2U4iNgaMuNvnC62T2j7YfTe46XRJbF3EveSJwegZ9S8ZvNuqcmMYcY8tbMmskszL7rGLQMf",
  "key14": "3JmWjDtoRBgHXZxVEMDhmUJJjW9fhkTB15bbk5rum9AtqUPinrfsPqV5CZCjEeuDpzi3K1dQDMLpQnQCNGs1KWXb",
  "key15": "45yWEaaddgoQY8ezQXMKPYLceKS6v67tJqjVLAaqK9Tbv62XZFsG4EkmbRnWoPVLGUfoWvuzLteina2tpYuwJJVf",
  "key16": "4wBXTzosHMF88h5FYYaoj7wxyKGZPpSzZim1CGZPVjKFgV9JpjPgSZ7wH45DhivCHSRneaba3VcXpx2LznE49UGt",
  "key17": "2E5mxPJWJGaqifUhxWuJDqwUkzqJq7L2yYyLBfDDMjr4DAHxZ54iK9kd6ymhpCLgXonXeGRZEM2mgA88EU1At55C",
  "key18": "3mWrxN37sjWTXVfRAEomepW94m9zBsrqEjxCntxYKz6KwB3DkUvRBxcA5BXcUfW9biSdVLuuDLfSkRPFDtz3qq63",
  "key19": "4eMRufkbq5cG4mdX7Wcyb8ghKHP9d3CaYsnEsPT8ntuxwLR2sRNd4H8nLxPawuvzSiAtDj8VEzqf8wToZvUsY8bS",
  "key20": "2SF5yDi8U99M65q5WqoB3Ekt21nk8Ge2d8YxRywUEA5h5n7ZnV81VqEMJccseYu9WSyJ61FjUBcFqPXbgnU21zuC",
  "key21": "42Mmp1MGhMPmCwAzyT9vvr4XBqwZ6jeiquAkPDMBz7Q8HxHLPgiKwCMSwCegk79MGgrQAypd5MWD4jpFVbxv2rUG",
  "key22": "PNWMsUBgL8Kg347vJnCAeQf4hsgNSpUqxerefcJxje6KgcYHHS4bqPvA9FSKKW2zv8KaRt9ye5hZ7RWtx3Wj9GA",
  "key23": "2559Zjwe8be5cZvPuXr8e64udjdf8tSQndYVZrizu3NPkvzHRLyLYCq19xeHhwHy91w9PsfpYhkR6gAvVEXKdTt9",
  "key24": "4GLMiPo6pKMMz7q7EC5qSybNhQEtwxjnTZ2Uaw3ePYw7qAFkR4uNGQkAVwpDSk2TJqrR32HxEioATkNcrt1ku66q",
  "key25": "9UKURVKatfqxAriHQHuyAvS6TApomapcHH32obZQv3xphWbwGfFtJPJGkemUm4Dr8PER5kbs1fQaYqGD7kraqMs",
  "key26": "3P3vzGVbEgDd8UMFRYoz5DiPdT5wo5YsLFemidrDzyAHf7e3b2m6XXR2h8tesiCwsn6KrzqHCF6VmQnXfJEWYH6R",
  "key27": "2DBbwdVerwmXRSExH111eihC5tbr5QHHPSrHjYpbMt2bZn1ULK3Q4hje3FwMVGP7F7Sg5eH8Mrp6saSnQXMUMg9o",
  "key28": "48P4pCeiBjo2az23ZzuRo9Ka3Fx7RJxFvXuB4fdBtxnWFmMqPuK8s8jvdFvQGjQqTWjsErUKSkaaGhVZGYeSA4q4",
  "key29": "3MPgMyvopQGh1fXRKTHZPYGCE3qhjowpKhjFAwyXGojNGgmi2WBufW5m87ApnwEMzVvF8YvYufzVE8SDZXtJGxhA",
  "key30": "WVhqeKV1yUg67T7YFNyDLUaovrrvPXnj43xfAWYniCPKYSt9rbDAFnRhNgjfXMrDfLxQyjiUxjL7Kfx4aXVTE9M",
  "key31": "3YDinavxaonaibafVs6qRwLYB5vrsGYqnWHYJpwpkiumkbEZkDYZFXdFLH7FVcTZXbtAdpKDwm8swwVUMrvWSSBZ",
  "key32": "4HRZXbCVR2DLeQh5FGSiU5uw9FnASC4RhvavXUqtmxDxBKLjcdgFF6e2nKdiVAiYNctf18SnZLt8BzsZo7xDHa61",
  "key33": "L4WQCMi4mxz45d6GcUNy6AiL7rFZkvCAZUUpebuTjYwQqVvgNMhhUcX9GDoAwKJvuDvZS94B72tHKXQttj8iDQE",
  "key34": "5gnAUWxSpXp8ScLQBcSXq3aGStho1i475ZwHouFkfBYxAA3zi3ZEhwmHGTbdRghJAiZfuaqoyDy5BYrAztPrdWHX",
  "key35": "ixCdaF7otQyAsnRKJcx4oKNbQuVppcgLsDrAVF4PiwBNvsM9N39sEw5zjMNxSjrsypkUVDmceruF3m2hXyVWQuf",
  "key36": "56S4JAnnjCmcrBbs7EmF5gwpP5m3SsuUzCVz74LE3Ywe5fWJiTGnDCU2cxgQJKVDkhyuPWz5esi64bKDMFF7BCQA",
  "key37": "5xw43XDuzDZywAvUBGoC3e54Sd4BkP6DuukAUyGYCeqnwKGeQ6yssQcuTgJngzoK6LNyq9nY3bQz5JkEP6Gh6aYR",
  "key38": "3Ke82cbhzgrKVJhGgYPm2m7viSx4nR9vLPWRnamfqanKG4PwyKHp3xjpN4qfLLk9ALaKXjoLrSEZvtbsZvHJVXt9",
  "key39": "3yX8y5eK3GVStGUV4k2cgLfyJJ22M26W5ec4noUqtUgV3pKVJdyeCPD4SYfhbn5scma2LjV68SjScMRugtzbVHc2",
  "key40": "22diRKyVSVgS9DwL47puFKgGjCHfA7Q2rgUcYkpqrUH6d89mJN1uH11R2LHUr9tVvc8XM9nmFXzSxDgSdKGi7P6W",
  "key41": "4trvW597mKc9xsNQT7KTKPD4Sa49Fxc9twdYMJvtWYxr6hraB7asJKojussjPxqhsXpH3U7NKMt8JGeLunJFNkWt",
  "key42": "3h48GcwHK3abTdr2fydfohdLQzNz8SFApH8rLMZZSLTpYe8afdTvebz4KwLp95aSCikBHwAPx2e6jy9cfkAMFkW8",
  "key43": "65Mek7RKMTUMFabg7BctQA2DFKWhz8tKmZcHc4E61XKRhRW1Vjc2FbTGVEeZ3kAfmQXZfbTSLyP7k3eA8kE9hRev",
  "key44": "3UDRzaXbyXxzoQAJoKbwaqdiov3bo9d9xkZj1X4a9TQt5KSeoismpq7BsK5Zfd1K2j9PM9WgnRR5JRAWcAAb99Kc"
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
