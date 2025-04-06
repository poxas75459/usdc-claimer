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
    "5ME65nfdEU1XvP6onuUWjkSBdZqqude4AmNCBfHf9mdg1V7qVg4KbxM8AQxTn7dK7Vqiw7LCXtBwV7PMZh5oVotd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57TWN8z7bmc8DhWM7WtRhXj3c2SqcmsAnUT2BA12FzCAfKV5t9gGBzHxBKv329YVtKrtNxFC6eTygaFaeeWUWca7",
  "key1": "3i2S6YsfC1wUZeG2poL2Eqoa11aKMRkywfTx9kgD3RyyTAvqgtu5saVKNMjTbUvUE34DvwMWdUzwy3uguvC6earh",
  "key2": "3NxyH4yikNc6TqowUBEqD6AnkjDK6awkJmYG16JfnZCPiAWc1cZkipSci1xo5uHn6qqCkx9GWWrfo28LCHqAhjWq",
  "key3": "2hfjZpVXNtT2kKqY1wMo7QFSpPfZdFQ3LBmuJeMYcoGXLUN3FHcg5ZhLZLeVvMQY8gu4SRYpnLBF3Quo43XfrdR2",
  "key4": "g9R3YuUnug1gUFeyxRJ8SneNZbXqRDT3WYzPtguivLzyU4pavRz7d2ERHnV77bLjfRrx3CT8toAVzjCQPjLsZzV",
  "key5": "UHPny7kLuyp1XWTP3Srg5AFD1d9DtGLQmR7uUzpzJJNRrKrvhf6iYcVSdkbxLw7wxGVx4J45wmswqSWLN63zKLp",
  "key6": "QW41jMZGrxpYTycjKQ58W5EYb2en3qr7MDnTLB8oR1T7xFJr9NKHxMyvcCKmAzxM4BUewWK81GbhC7gzkydrERz",
  "key7": "xQpgRJkBnukwdwATH1o6kiuqx2qbKZY5oe5LqbStnXUcE94xAU95UHr6Fndc1yfPpzKtgcvLyCEjz57AdSQ4hWB",
  "key8": "9bFXn6BrpWLGpRQEYrBdM4quTtqKfPRcXVghuFH6FEyZwQ4Jo28V4YisdR8QBWNSr1YWQ9zjgooZLjCtVSYmtYx",
  "key9": "JsbcYKbtaf51qjuJjJw4ciz1bKCX5dqDu7rFBTTQCtDQDT76Ltj9wnYdvnH34P21zsTdKpUCqSEdU3kjYuHYv7T",
  "key10": "2KmDzHsBdicsQgn3KF72vigJBuwE9kpFWNfTPx11RYFj1YVdCFtgL78PnqeYPoAoms7BLxj36ACuicKcmckqvv99",
  "key11": "5gWjrx7493U8Y3BLrKqZtWyMs5UzXZEU2W8bXMbGztU8A4p4YgqAnVd4heQzCnSca6vjaQ3fHxnPNV1yPZfgAVNC",
  "key12": "2V16PHBFCetLF2fkmXYYkAgPn1u57RQrqUTTnnxLKsJrNT4p8nNPCXn6ozDfovp4MKBfLRMMEjURxJYJSjma5svY",
  "key13": "Cdd5JfUYYbVwvTy1Dh79N8cqJ6KM7kUuKabb8HgTAfRzgr8LStjfPJR8uTpfQ5S776ii25tTsUpA5fTDPdLTNub",
  "key14": "5oWsQiXTSGtXfQAsPehh8RuYhuGExqUzSmDe9CMAoRWwBcZhSmbYyhwL9NVYZMgdxboFwoAkrLjz38rGXTQJoaGw",
  "key15": "5F4wD1NHNFUqHUHf1CtWwWLXk5uLajGYN79hciRmLwU7gybtZUBdNfRmbBRCLKszu53caWzXk2KFhJgMdT9ywH69",
  "key16": "5v1DXCrkn4C3jA76Rip8oBEyw7WUVBRYwfoYJtE4gg4BL16s2TCxszyf163Ew3YfHafQvoCPqCrRFszXDJKdTSa1",
  "key17": "4L5vRq131NBAiMNLTVf3EvG1PfvFD6wGn6PKYLsn1pDZwGzd3UdTKCK3adm2GRumTBRPWcPYU3g6HhgSXWmByCMe",
  "key18": "4rgNYhCJc3x767rLdpkLygiB9hK76ndJMf4HznsEwmmTBbbe3rJ4m1KWWK6kdBWrRtYkEV4Qc5RTHfevfqf8Z64o",
  "key19": "5Rpn7X1n1AT8ecbXfb5gNG87WuUbTBt2wx6QqkCjS2pAJRQPVqPoTrqAeJwGT4GRo3eRznT3ZY7TW4xFYbd25gSM",
  "key20": "59pkoyb8j9ZZ7wq1Fxtt8WyGPGeyLtH6WHGrGXgTpYiMW3qQ7jWTEoeRimfWvriaNQcVGjJKTBRXRwgmtfFedk7S",
  "key21": "4rHKkGWzKUyRjufLufAcGNaii8ksbPPeEnzysmhvifdRSX93SbKcMvGuuT2MH8DqGEZzAwGefTPSyjxm4TPM8DD6",
  "key22": "4NHetjNqwYZ4LwcTHGRUcUtEvkjKtJZ5G72okaef1sfkMjfgy7sKxjHjrzUQZrfp9m3HtXTC2QyXkvFwouLJ8Pjk",
  "key23": "5fSYvcMevB9q5MaF2sznkvajUdYa7cPasgsfBBwdzdFRBADG4zN5JriwCzDiQfaV1FmnQzRzTiQbHpoZ427sWWK8",
  "key24": "4s4vkAizNwLuGDukfpdB12EaHC6HL6QYZNAsV2CuDxfdcfk8p9shhmAxP1kBUQB9KhedDBaUM6vmZ7FPFvPoFUY8",
  "key25": "d2huK3YYSgB2Jcam6WRy91biG5ybyyeUXUYxm41LTX2traHpquMohqAFCoFTK7VCxMvvGRFXcjhKydizqkimdgS",
  "key26": "56fzkknoCzoNtQbsdnjNB5s2mHxK22Jq8gDfzKipo9gikdQURFtjQDxJcNnmJRSUiJTHjU75isehnFFRWEHmdxTV",
  "key27": "q29CWYDwrcVPdRuWGaGnQBpsd9cQdby4W1jkMgUNwmgF1VyxjhADk3NyrEf6iEywgcXJ3BkTj59V7od1uTF2p12",
  "key28": "4jLEG3ANueho2pS2H7p8shkKrq8CZDzF6zcXjNzynMgDCtEs277RKgqumvuKihA15gpgU3oyYjwzbpkU2YwGBSsP",
  "key29": "5wot4Z4gTFt5ectH991x6FTMeW66L6Gdi5srwe6AiTFNq58ZEWvkXMFmC919sV5712JGzaX3GYMo9ZAyXh4wQGQN",
  "key30": "5WcFR7EvbCV4tNaWeP6tKDoCf7ooDM6btHCCAgmRUy42pNCS56HCVyCkHwf2Ewmgv58kXn52et6XYVJEcw2bzg9",
  "key31": "5UJ1gAxcDWsZCNPTxezn9meSrXPRQNStUYC8DETBjvFSo9v8sXYvBgTMN4EFBdwJNRmWZC87HFa26scyvXauyHVf",
  "key32": "2tQ42WyXcBTdrp4QUPcsg999Td1Gc9ctwAsqqWh8GZ46hQsnNAhuiFryqCiR6RZdmqxirzATTYwV2UDJCqPBb7wD",
  "key33": "kevtvfKGpEEJZhQRFnQkg2mtnLk7A62qVkYs3dkQ2azrZ6fvCAETYsMZRQ3RFqiVjWq2zgBvbZo8Du3xpXNGVZe",
  "key34": "4uKeY1qnCS7qCv4yi3mEucHf61nayQBP9uyrpJncH7tAVq6wHicynSgrAMDSyQCjvjcsyu1KvUxQQXW7N9NbvyvX",
  "key35": "5B6cacFAz44pJq66iDfCVJFRNpLAmkABy196kmnA9gavpGxubYF7VjexhX44mHLD7nmjW8Q729svZdAvYv6L8i1q",
  "key36": "4QM3AHfTZZmkzzftdnxTRufW975HCphQa7ZwUcLxdwH5LZfi1K2P8JBE3wXdYkVdfqfKDb1ZMfDd7TQFNxKmY48c",
  "key37": "3nNG4LYHraXXqoraE3MVuHip48eAiqjdxpC7dHtvSCojMMTSBSUPsLtik2tHr2iZEcGytVJoMyhuU8PeRwDdkfFi",
  "key38": "2jdciWEv85ZK6duzr7ZuTgvjua4arCaT8vu9KT1aBLhECS7humUdAmNRXSZpeYix8qCMc1eWAQFh7t9hVGHf9xbo",
  "key39": "2kTGoeHtcXKXEHLKeCcGPzHdGLN8DKoNRukkYV5NgPCrzFqRsY3R9kGYcUE7uZKhQ15cPgaHVy3e9vHvZf7QaEvY",
  "key40": "D6VApMnNvMkSjAPJo3gNzCJpXV8gHsdAg7g87TWLdHZbdYjPu9UKFsrmYjWVHrYPEkuMXHoSLweEtY2Z3qsGgPg",
  "key41": "3Ad5tUaWCw6ZRJ7WT3PkxWWAzCsGxu5u7erLKMaFTq3PAtpeDeqtXmutqMKnCAAkmU7eAMxEZ3Zhi6fqALCcydbf",
  "key42": "3JxwcngNayevwbPhLGZHMknyKphAKkdjykf6C1d9SumQtCNMzkpCRpk2iMwxL22ivdigYiZzL3Y6TrCbEsn7Jja1",
  "key43": "4LQGQyDk7qp4fHkc6SM4JVErD39rSqSUKyvqhqg92VepRM8VRbSLYXkZmo3WhAuMCEHfderk7AiWm5hUkC3FkJqL",
  "key44": "447ZSsMga4N2x5qFn3qR66rb5tguMioRA6JrQiWSNsWfwYXpWxRBhC3sPqC2YGXvdJ2hExJScbrgFddvpQtBaGeX",
  "key45": "3N4hvweBymoKkKGpkBxC2GwEqKoHxdzuTpp6tm46fMgtstjNFtae1qXiauK9Mm9WqefgjKXFuPqqquraJG6ENG4x",
  "key46": "nPogDzrxVjkcSGBkKpFVJCp53aRiEhPHSfMUXCKd3QxgusEUH8hTJg15HmpZbz1RZaLx8TKuj6chDLUL8iUfSsD",
  "key47": "qUjCDHquC2gnmorTAXw9zAccZvTB33DN8CCqMZw6GH9t1eRba9ZRj1aaP4FMyHXGL5mAhzvRw7nqdVZJJp42ydW",
  "key48": "5TsFiDhJumhimNYW2WQdzrnESui3n6gFdgsSM7aMZUFVxrMfTfWb5oZqmajQpL6ivteLsieL8vKQGPNNLbxtV5HF",
  "key49": "5CQJ3ZV9ioBAQ1j7cSiQtMfqx1NQ7CfP1vDngzp3CrF3B2hGYwPv86YywsQpdwzvVq7sZHUYyo4XEkwq1MBDmwbU"
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
