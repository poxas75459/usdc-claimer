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
    "4RhemNupkpfmKmYhAoG1LCtYsaofwFhUBHTzybCYepnvJL5x9JGXoBRe7CwcATE8pjxBYUvJoNfC8M8fVCNfLLo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAQFsZMdPsLKuYUEwSVD6G1ujk6Rdujc1vLVX3wMZWPuR1yHNfSLXK3rxZtCGmYyHQ4czqzT4s1hqLMHNSNfADJ",
  "key1": "5GcNZHwAeY7k3wZu8mjz4ee235fJz4tJQ6L1k5S8f37e459Bd9yKEJXPpnUsqAnKC1QRjfkBtDknYzFQfPHT9wdy",
  "key2": "57rzUaNVPTGkvK4NxnLmbvYirxTo9rqhZY4dvr2kEJMcKZ9od6cgPwjShgx5YoqBJPekUGAQP9LbZQBgwcWfMwep",
  "key3": "4WfTqRvSQzWoiNSVrT63gLXghn1iNuACWJhph9yciwiWpQiAF9JacpqRSbmbYZXReyKV2VuXExhztunXBUZomTDZ",
  "key4": "43edAGrNLw8vHUMcJCxykK1Coyj1YsSVQ4ygMpe1qG5RwGiaxMUiZiswBowRGfNjE1c4c5QVYCYUWcwBfELuekqq",
  "key5": "5SnKSz8GpxLCCQdg54ErwSqTDGi5m5mJDekhzEcMMWEdrvD3GNVq5ybgDRG1H3R2xatAY2VLa9M6ws4hdyfJfQFz",
  "key6": "4oS9ZpRCVEG9QNimXAv3XvBQ75JNDhk36jEbNxAjyKhRkCBevi82mCddgARnQ1vvKHNZmSKmQ87koEig9DJ7GmaG",
  "key7": "4yJiBukbhWEXeFLvih5ZQpBxhDuNQjxEMQvP6SHJBVQmtvoLWLXrcGZqoK5zuByMZrXTGu1Fq6kqMgS12PWfe9mw",
  "key8": "4KEYubrt5GPcrAv8gZTR4WyQfn7buK4KSi5hkfAcDEj3bsmUiVt1KPWpdcv2LGGrMkG7Gq79X6ELq1yi1y3oLuJw",
  "key9": "2pxyRq77JZ3UmnEoYi5AmWxBBRKCFmQvs9zALVPaHGFupEky4rMadJa65i58GBfHDqqbQwFepSTWUXPqLjYaAuSJ",
  "key10": "kNdwdQXWsMHzqejaYfZs1T1dNna638Hxx9jMMt4kcGtARJigjTerMqURMULgsCbXJjaMQjdXTkauMJk5owDE7fY",
  "key11": "3FbDzHTSbKyYtVywZxFbiC6pguKxxLN9AimzAJm2GJGqqKzj2UqkTnptyDd4e4y5Z4dSwGprL5QUoNh7GrbFznNu",
  "key12": "3vZTssXGiyoKxb6tB4j1h5WAikuXtxZV4XK7LyFaKtitSJoD7MeXkQ5BMnVsAuzJ71dFvhhiBErHCHa219NLg36a",
  "key13": "5HSpp6gUengUw69RapbyB1UAPHvSYPkParh7V6Hk2mqxrYj9fTqRTATxMoe3xyCk82bohrtvRhdt9kRFWj8UhdiD",
  "key14": "38eeQNGYsPjDgrdtjJ9mUEf6d6b4hcrpdWqwXduVN67AaGVqUVX6KzB1BRHq72GpEuzKgUcTtepJ9TCzPe5wSvR1",
  "key15": "3r2aYYyEVUeztGfBFxJPFh9zZsHGjUrv9d4JoRe99JEHV8UmUULutJfASCuMShkTBUdap7H6cGXQCHcXWEVDdeyd",
  "key16": "4iVhw6uBsH12U5miaJuYdxTpPYnZ7PNKsmaqP1WFCDijWw8VxJQcqBwRc4XbMestXtAmou4F7rcSXc6A5WxtkiWC",
  "key17": "2G9vcHMpuy1JLzdAMA79A8ZqQQDcjy9nEHgBGi2JY1cPYazrwohWVDJhxgvegWvAfd7A9pgW9JogSev4ZWRe72rK",
  "key18": "47cTANtvEXqcskfYXdb7rYf6m7ma7UmVJGrWjcKV3hd7i7FgppgxCaez6T3rUDqC8sxDbg8sWmBvhLpoMziGXatp",
  "key19": "2A4Ffmokg2LJYBaU4QejhrBcBFH2QmMKtsk2M7yWiRCCkFT2GwTbVZgfJyNcCW28LfNLpHRLyY3AxDuwfLPNfVgY",
  "key20": "4ququLhZRd1HwVkFDnQpzhiwpsmKQounpLkiKHxhPw8e3AHwAmhBua43jMwgHawTF4fTqSVSPoYhtha5GT5nDwcM",
  "key21": "5vyzWFprwDMkTY2mkWeKyAweawYk5Gt2W3ZRVn57acu9gTiRfMEJgHZ2vVVu8VtBj11ri9vrZZoztq4W7NufRXPa",
  "key22": "ymqhkE5mY4mLmKFFKNEVa8tfN2XxPiG8PQweBk7XMxbMg5ipLHsbPgRXZHL4i9tngVGKAxiWYNGSb818CiX8e6r",
  "key23": "3Rb9hPS1zsY2fwYPjTKwm8BZHsrk4JvVbTPpw6dCYCHpX7WWrrE91d7uo3rC9Nu7kvWdprFnaXeU75hX6WELBDn1",
  "key24": "cr8YnbKWRteWhUGQ223km5HBCcqbJDMe2BK4GZESH8yeQLLRUSeBRx2zopYZHohroCtAMmRQ6YKDWnT9Ld8zKZH",
  "key25": "5ot2kRoKVpuCe5qiuwz7JgJACSUdYvCTJP8Z5u448CMGxKY5ko9jkVyspTpGzVF7M6VCtAtiPyRNywsMKptMZMM9",
  "key26": "2k4Whup3TUGvfTX2ncbatb7fWTsimMLomz7aMfvW93zeWeeEJaGMGtcGmAVoMfPCTLCEofwxgqU84zoNds1ZiTdx",
  "key27": "oy9GsfvccQFvoFGrjaj59d1jkT4dGyq935TtbfCQ6NruRdFan5tjNcL88qoHUaH4avG7f2eudJ3uU8W5f4QBDC7",
  "key28": "5rwyYkrN8RJq8rAV59dbhwewHpUXLcQo8DZ1F4QKfb1iDeQNWJDjEVbcUVSNhNeQnEgam5zovuGowN1WmChu44Eh",
  "key29": "229RqFN86p9ont8SbGkwUcQJn7ovthCSDvjeQTnL6VT264bB5fRygDSPdQshCkgn9FxMKLzseM7AtdtjC1bNUTx1",
  "key30": "3UthGXubSs5k1YprE7iJL11oW6BsBvJEDC39oLQvtVoH2wF5465AFp6mA4JoygyMi7YjAGJZW5Qjm7YafyvFBpHJ",
  "key31": "d4GqDqdjT2VHSHXEEagG9cgKab98rofi8mTbfTRLct1zPXo14QxQ8iDWHB3AMQ5qfeu57N3YZKb5KkgaFcQwdQL",
  "key32": "5ksb6XaPpWQ1wijBqaEHXizxQPrUVJZr3gmLFxXKDbbNQY1wEDKhzxM8W5z4Rx7zgXjfyrmnc9H94sESMUqxy7TN",
  "key33": "5zC1Df424L9qAHSVTrHPmBkkny97K1RiREM7w2uu9JMUpvpNmoPEKBbJsiARPmzYANbJtm1hEJsRXCyTzbdvHn6m",
  "key34": "yjmwQ1BTWD2uVayG4TmDmmVaTXeo6uXUBhAJFhtpxYJkbKpzW7ykfA6K1YRMyt8r5WVGKwvHAmYg8CmAbq3Z9qV",
  "key35": "Zn6WfPGPLp5mYRkRLGtPAnyopEGsXV2u7WUH1RG91fJsYEdLXnw6NxPFKmzT1kCP48RvDiuqb3r5LnESFo4mbub",
  "key36": "3B8GGYG7X3nLHT5gjeLQQ1CJ28QXUykR49oU8uorAA28yzjbxdPtpSfM1deZT5digacPpFrbdSu2rG3QHRM17f8e"
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
