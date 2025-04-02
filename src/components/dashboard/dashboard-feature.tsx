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
    "qvSDxTwMVyEpQP3jq5bf4Djfmey4mEYvwUxSBiH4nbaaFwVHob7S4nDQTwGMBsoX7MV9RYpBZzL3VXPaipp2tSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBLL5juPKhEEZp1xtbbpzmV2vPHRE1Tpfeah4dWbfVez9a5M91JMrQkdwvznvJovasqerEBizwo54wKLxrwn8qK",
  "key1": "fCaFcg6jz2gaEckhubiTZ7Bj9HXV7DWd9ov2Saq8m7grELaq2Bks4gH8cQ9cPwx5EYQf6WQUpPP5AfTpM6wvTje",
  "key2": "63RpaXZRPzKZD1LZj8nyMEaAgoVCkRvTWvujkMYpFYtCBb6hAEc4SEJo1mCL76ft25HZH5BRqxFviFLtUYNwhk3K",
  "key3": "5ieL6fizxzyfp8DCmjCSRNGusNQmLKf5tgBbnzmV42jHJjThi8b4PiiCwATDbZJDrAXCNWC2euKYNdsV5MBQmBG2",
  "key4": "Zf8iN3ZpybXA9fxihZPSdnonLT67nWhpWvQUk7umZSiPuvAe6LiUZUnU7byWPh745RzQVDdzSVija7mtRrNw22n",
  "key5": "4SgWSwrPRVVzjBnB72my1n1mM5rLqgJjfn616U2da5FdQum2NzFM94J3J5UpR8JTYhKofWjG8GSMQExwn5S2U6FQ",
  "key6": "h73QfsbQ449uYDMF3xj5Hp3ghfVXA2qaQTf2wrqcfr2gcgPPjGcXZWV8UGrTnz9WgvKNJTnXumFMJ5iTXAn7efJ",
  "key7": "3ixPATbF19K66Lj8ZjKPkgjiyi9psUpqns9Avuiq5sTaP2ar6yXTr1fiiG4CTiMkRESYcfVRKrtTcpQ7Do1wktwq",
  "key8": "66gqVzbSTkaPZ1boh6GufudCkZ8fssPdQbs3rm3y1wjvEhNfFPMG6AVBQC4b53bEQV14VC7mP8RAPmNWZxoL5UJM",
  "key9": "5dvi7MWYyzrMwaQB2ttJFWbfhNTvfS3KdoPgKPM6oyorBwTenVAYR7ZZNiUnLMNwmZJfi4MzESTqKTUPutndCHEd",
  "key10": "28ddegaBQC2azummZmLB3j9FYW1MmcJvNSJ7xErBG9X6NMUj5h8KtqmwVxquDs8AnbSmvmN9rWgfjSkr5uBAgpbq",
  "key11": "5rDVLpdNxRvR81if8sJ58t4Jw2D51fuEFyVRJYwjvAvHR43CgSajkRD8JKgdb2Lrnk4QsdX6W88P9d2o2JifnWQ7",
  "key12": "3239W8Ye6vRER7H2FeHD2sHzvcmLPiBsame3MT7mL7DPbtCsAJVx4KoNctEnvh1pxxbhfwuQFHrNJb9GxGHXEK2T",
  "key13": "3MN8Fu2nQFDiav7uRXmuoXpG9Ktz446zh7B5q7hKGH7qvAiJu8qsbuSBwUJP2HPMV2nm15YSq9o8EQ3aNtVYGV6t",
  "key14": "5eqrroJtxGhyg2vPw5WVXnxDCVacHFc6Pd1vnvmK6dDG4aHu1EFzgRxves87nsMZJ1NAK6kXVunnBXguZTa5PesE",
  "key15": "59ikmTJUYqB9HTQtjRbfqo5cUSBSHh9B3w1Za2JyQ6hBbJmjP6g4Srqqmpg4jUFT5A75Ev2tjqkmxh2tuuXMVuCc",
  "key16": "3yrNwPU2oYQsPiywxAZ25oK5QSHDjoh7EqhPCNMEsf9weTBePNdKTZeij3QDTYf5WyS1hUqkiEmeZEBjv4aSy6ZJ",
  "key17": "2Gs5uK2ezxtgZZgBqfrNSBgCBTEWNeqimtAFZsruSzrQb2YZeZ5qzzXsiqC8k8gi8fZAAs7Hok96rAVP4bqd99C2",
  "key18": "3SpGdBYLCTsPSmpi7HmZKJprj2ciRspJdUMxtHgdkAub439H5RWQfvxgNemcao1xT64pcqXUHjLS33ob7fu9SHhQ",
  "key19": "SD8gZRN1rVJx6rBJnFnH1wLyyKgyv5KCZLp98DRDbMywv1Xt8ohWBgaiP9zZ6fpTrJ1AFixtVf1XRH67NAREU2X",
  "key20": "2aa417mhuEcoxEJzjmnYAKmPKQ3hFuStZW9dca6xrnmZZMM6yV9sVctyU9BWSgSGDMu8G6VtYjTYto1exXVqDJMo",
  "key21": "31QzEqPncH3fQt47Z5uKUTqZMsZZ5rLzadKoeK4FXSmC1EyELjuC7qzJQ6nefetrfzFz48cn4PaPFRrmjSFgBTCw",
  "key22": "LkFg9cne2RH8MtPVTMSvF4qw2Lt3fbbVh7f3WraEW38VsEwj7ar79aqBT8FLzSY8RHRDpo3xd4rsapqJn3wFST2",
  "key23": "4wrCGHb7bGaZZdP2LdmuqRjssPhxPgeRcCPF4gJ4PuE3pHz5co9VT3AQKNjrGHdzmrq7AEjKbHGSqskpT1s3aEyH",
  "key24": "4sD8UxYQ3uuf3teYP3bayqkrogSHdBtQZB6UgWub7aiD4hi37on2x51QtebsfyUFbV3NEb3jF2ZwuqNcD4ENbFAX",
  "key25": "365YWrR4FkQBC99c9DKFrieaNe9xLWFv2YayFqyHzCxHhqDz2XQM9W3KJkhWag1UdxfeAAGEfQ9pGcMW87j6xoiJ",
  "key26": "5d4fniNCcynp4Bfm4VMxGxFT7sjF4e5iC1vmkHp2QtSrygbkfjsQGDYZ8YidPGhiQAwgeXofscJUyor2BxZGG4FY",
  "key27": "5jBC77unNDNKCG8Z98kjeTYGuHY5fQWUrYv8UmseuCMkKvZqMWeAbnxdh6C7G6gwtHQWYtF1fXA6qJQf5L1p2CQJ",
  "key28": "pwLE8ZWSfXX4EijUyhYkbjwurL3Lbq1MqETzb32dLQKp4BGAmS9vjcUeTeMXpPQGcSiuedRhDT5AvAtmzBErqsJ",
  "key29": "3jCEf8hTPKa2jKsu1SJsuJXcsb5eq1WRCuubi2d9kDJwJAYran5KNhtL266MndjZs1dcEiqzZLBt4xfvAiJJs2x",
  "key30": "2JUKb5mL95j8mCSqM8VSDEzJTFVbDr4cBXEqsNuQTnA4FMQhhQ6pq1wVHvrW1dHwypEVJnVGjy4tzwygZNeUcL5A",
  "key31": "2R6tjdHwL87LtErBUMYqyveoKfKw6c96DVPm2GVKNbTzFskZKAtsvGqhwnfg1UFXyibQ9pP4JULauiGpbMfDqGVz",
  "key32": "53SoSKSsLXGGbDdPAEVdivpoYQ7bazmQg3GiYE8JAisxWiEt7vS5xjkkN5AkzFu1p2qUEAccTbRLm5cZusYv9E3Z",
  "key33": "5kg8M8JcEpZNK37FqQ5w7XV8oeiEZJaWoYVLdFinJE7SPBAZMhXsjuye2vK1bB5b7DQ6Eij8wPtpZVVskC6nR4X1",
  "key34": "3V7Qdb6PwXhu3tSFhxynnwE4z2ZYCgc2dGxLN4kgkjsMSnZ2VYzamGF5DZGwAorW8UyEqpLxoCjdejkC66hQk8io",
  "key35": "3VCDp7GBwJP7KhAeP4v1FvUNtQwzigV4ReT471hnDLBi63EtJNQoqWSjkYEjHU5nEGQ2r6j1KPoo6aF8VX9Vp7yD",
  "key36": "GkjCJY6ou4dyHFcxmC7YhEeHcHLxn1KDypai33EntpBvV8KsJL6r3xehxV2FXiP4NZ7j2LWgjv9Nay3ZVxgDZ8D",
  "key37": "1FhsrrFL82HuaGWrhGjzoiohmzvYMUEySxmzzZNMwVnmLigPfsZQZD3wPSCx6oakUZgz48CuJcLnPieEeKAuyQN",
  "key38": "VgPPf7uDsKi21mUJh45ThbxgtrnuZiWYyk6sjMSJkKPKTSZsPikffDs1qtEfsYNbQXLdyztKhVPEQ34FgXmHrqT",
  "key39": "mrZSnGTFeFM42gAnaqMRazAdDVxrtTcg6rLpRNVx7Ybbog58gg3UBTMz4JppgWrGdgKQwk2WzPM9DviZYjqWy7C",
  "key40": "2pJnbaqqpY3ZKQ1e2hDQR16nNQ5cjFXcGuYRV88PCRGNY3sUkyZK9xZhrXCExtvBpNz5925aAD1c1bhCB1RHvwwg",
  "key41": "5773nsAD7M2imhUq4tHuYGJsZEd46yks1tJxMLd52kyz7LwY4hM1jy2EnMqcFTuiLAjtd6943qcE2Pd7ZcibT6RY"
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
