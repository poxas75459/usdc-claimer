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
    "55LksrvqhgULFNHpYfciMdGbVDAXr6vvhxbg5L9XgZofuJJw9zTLsovVnUw7wFNkuUzqit5wHZxovbeyXMkBnfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWrDiunZNXBj9cCPF4dspaHmF7GQradMNYyEM91MRTwByq7vi6AzKqvFTsY2XYWzWWxDEq488mwZkQbPfds6JFY",
  "key1": "2VqwYRA1Q9Z89QY8s5Pgb94SkcTG9UYdxMyJaEKxPdjYvmMjoGWYi5gpu4r7NMubLzegNzmE3PY6pp71UqxxPpn9",
  "key2": "5QqsedNys5X3rJLHjDAHbxizUBDtRKyenJZegjAMmD4mfcCJgkbCwVH1GDs25oG7zU1wmBJS4DP6GinYzNJHQNo",
  "key3": "4P2VUQ8ftjGVmdKkrJbkqBbbCMyiuKK6HZD1E3jZwuSLt4tGr8DrfAVqLDqwbAndp9sjxY4Tcq3zkzXdrbgPCnjX",
  "key4": "5qA8ow54M5AiuBZQYFopQb2xuJzxq3E3w9YUwdqqsVpsPZsCJtUtm15unns8UghMEiLD1pGMQ6CFbRxk2adSFzSo",
  "key5": "3NaCwwSrDFcJVxcFcTcpuytiLboPdBH6uNajFmWmEWxq4WFW87takz3WXqUQ9PBpQzdBxu6rEPm3RGhwG6XVScWt",
  "key6": "zgER5DNSxCHt79uTuR74MfTkUhhTwEbvWEvv1Ykng8eKqVTqBhS4i4oB8jrGV7rdaQvcfF9xBZcEhpwQnKVBtqJ",
  "key7": "5AXL8KHqhFttiPMba43Mqj6nurUNV8om2dd5zbWxJpBReSP2uUtrLCmAuYr5FPN9TMp23V6v9vNPRVSji4qmpkNC",
  "key8": "3QofSMVoM1dJfbkLLG9UbPW3iFFtrk7hdgZgmRvCm5yDAaqaXbcp6kuE3ayW7v2v6vYBeUJnsZonWBpSARsVbjAb",
  "key9": "3sbwa2cjb6P84RukEU2y413wNaa7LPtscEsALT96AGrxbaMSDx1Ytb8FHhM1pws8LJKQhuAQTn7QBuRKUmYtc5MT",
  "key10": "3nv7vQLzK9Vk3HMRbNkhTLiAsvFLiWeQfd91VN2q7m2CrSRwyt1t6ermPHWqDWgaSnuDizZx3odg3vEXJd7yh5PS",
  "key11": "3Ba2U3HYdZdwj4W8xvAWcx83cPr1vWPcUTNoV4iNMYzpuw4oM86JQxV9SeMbLcAyVncLzS3T1HhQxBrPG1KgYP2H",
  "key12": "5yhvvjFz1SGeEEGoXvQqHbVTbBtEo1irceaA4qe1JvEiE8rLMqk5XykDtgJu81kgZTvkA1R8SYExt9AZynyCKKfb",
  "key13": "57qbYvwMTWpu7tYxBrZmL6qHdvR7xecmQHCCpS9q5XApeMa8LKhYzNrhEWnuGuYCxsznWrgGYW2XKnrfNeVcVy3Z",
  "key14": "4YcTHMx5q2LrzuQ63fiZVENaDHM69jnZHAvQA8KkaytxvshbdjAK2eBAo8LCHYS5Aswe1fKdYUAeT5n3nkv4WJSm",
  "key15": "2KU87zE8khB6VE7B49YHvSUsJ6wTxoprE4vwmrsHUSHDjf3bfjcVgTWTdCbeYpjNRP4LwmZ7BYUZqK1z1WeAsJBv",
  "key16": "bjvu9ZSG1XCMAx7KH3XUF9dB2HWszbC2Zz4DTBRs5FS9MDqBy1TJXGhPBE5dtjrhmn6DCsdLKzHbMpMP9Fs4wnj",
  "key17": "47RLXBfYmXdj6t8U5GpWyoHzHdpmrrW7rqbSw43odLkbTvGCLULT1Kmm6Luj4tkEaVGAbqNrWeFT6aEQ8yhaMfHG",
  "key18": "643aweaZdHTsA61oz3jh5p4cmqijFyGyMPhj27UXovMpZk5hGbN5sbuTx4jhaekjjmCYiXBcGuZUmzbWnKkeLe6V",
  "key19": "5g5MGFU2Sy36A67FhwZhqwoWePxRmFB5EwLL7D75vn68StHCtpzJApPHWMSVDXLD6k8to3ubJVKhUgCAHEYuH2tR",
  "key20": "K8kLoW3q9XD61BEbG5BGdkuZeVbCt2DQjMc7C6fZZyTm5EWEpHspe2n9VJwsx7LQBcmAykxMEnNEoEY9FiGDigY",
  "key21": "4NLW5dUMyQibsyNPDcmwnnhhgppgssG4UboeHUuk9KUBZLgkrVy3HAAwQsrMrJeuPD18Z1B5Yywe3aFAG5zg4vKe",
  "key22": "3BmX9stffH6uByWxSpGzA4bXNWFKdvRvAh8RFNtfDca2MXxHXGTWLy3Hav6zcbNNTprRwSqBGRvFTJnqAWzVpEnm",
  "key23": "3Qih849idgcFj4UqMgb865DWY8cC2tEwmVhs2VecCve6HiMGRieNrPtx8eZV5HRvfB3MbRGT58vzXpNT9igv9seP",
  "key24": "gcmmkXnQ5cQ2iALznry4tx2KRMcPyYfZA6j9mteLStJD81gufavE4gxRswqTK2oE9Tbj6FRP5NhSDemNkMUnp5r",
  "key25": "315jJfz25fjRF63vPVDx4KCULFdhoe84vvHKH6P8aK3SeAhG6LowHtUNNrTgan2SgULsiw96ygDzB75xjr3Vi8RS",
  "key26": "qspsohfe4ufuw9qNB7ECw4moKiYQXdxjjKgDNhs999wHkCLHYkqAtps48zQ2ZVU85UQ7GsGRMHj6sVDac9wqmRi",
  "key27": "2H8yRrRqmyyRzWi5eoZn8NZ57NCgHQYhxsBjjjryrKVTYfwTcaVUuy82p2grW1RNLCAom7Q8coKg3uAf6TmyM4KP",
  "key28": "2Wg7PPWGi8iSsaDRWvwxbcLyJvSvhxGPbhKGCsFxvapRFjS12FPv5WVuz4jRi3TGYGhChvsbLzFShzBgnpf7q1GR",
  "key29": "2cUkYsnXEe2Xx6Va5phLwAKTfseVNn6hrn3C7dXyP4an9wwo3Ts23UmCspCnfjboP8mXFi7XhdgM7ZrC5jfszYW9",
  "key30": "ghV7QLHXoKsmgab6zEPkG3fiR639YYCFPRrcsA1VLidBGhH1PadSdN8g3USu89awSMTQs3CVBcetjenfbqhhY7B",
  "key31": "627UAFFUUFzpSsRksfPrGzbHJikRxiK2MawdLAM7QiTrgJwhPyKR8UGrwdD2AXKKi2K23wD63wnYuDSRm4SNQXc5",
  "key32": "5wxpen7x8gXr5QB3iXDZokrV8K7nHmhASgoFmsbxmmGGxt8VuSXgSbdE9y8s2AUiecMr3msvEg2GizLgBKMz1qau",
  "key33": "x2F3QXNJ3oAJv43muFHscDKgC4zNexMCiM3MhyXwnrqGEJRTzNEFUCu9x3T6cWkP5jgpPXQD19FN54hnZN8Ca24",
  "key34": "5mzbRWzJJH223nPrRSF5VAS7da57fA2mBhhxKt11rZZGQ8taVVcp9NYwJxXyvwiLdKr4CJELqz3xaeBQfckEtVdf",
  "key35": "2XnosiUXPU1XYVN7d16J7XUyEn9aKaneffr3ungyHKFGDF3d7Ab25wpFBfBrSawQU5njsy9PExgL6JV8Hhody5rG",
  "key36": "t6AqYozzxG47ofJKWwsE4g9nXRWCkhWKtLzF4nFC6B2b5XdDgPcTjQEf6CKPy15RjZQ4XAsJCseho95bMAXMTJa",
  "key37": "5qdonqrWKEoCAnuinYfgw5j74MAjQPN7xEvoC2d6kyqHjfGxGiHDWbtmQgzwgkHadUXXFqidzS9KgSBptFGY3hh2",
  "key38": "4HzsaM9gS4w3qbxszgCqh3cqkpZjFcjEVRr1nqL8XDEmd9JYF4fkw5Xf54dDhctQMjPw84Bd6JZfo6ZfqSSaDhrU",
  "key39": "b9cAU65YGJ23n6V2i7h8wCHL83EB1yFCBpiEeqm9wdaEMiAMVuqQ4brBNDj66bxs8EkKHj9oj9zebtr9evm6VAK",
  "key40": "3JrcZ58KLEVZFRdJTDDVfykY1duT53YtZ4SfwSyGW8bNhj5zgnqbNDszJLyHmhqk7d3muBCR86HfU99UVGeR7Wt4",
  "key41": "23zD6u7eeBKigb5dMJvGBBKee3GK3NCKw3vYvSDQUnUJSEMMUfF2ifX151yK4sBBRX6Dpx7uzgGUtBPDLwno4wUa",
  "key42": "2AcwovLnNheC3i5iTz1BxW5eKircTNsknvicJrfCmCH8vUMo8JEqVVTABkviScnxbdAyvtjcaVxqQMiR2WZYg1sE",
  "key43": "2TYvhRoGC3tJ9gH52NzFuqxNYMAkErdWpti5sWBrGjLVAirqpPEbUfgNiEa6FnZzFu58AvTedFBrHUAhLFXonHAY",
  "key44": "27zxA7TrFakgQyqmWaahxjpvS8mDvNDQTRQqfhHyJy6LZP7EdovAULoZWAEhKa9k3RRS9JoGqQnNwKRErpUqPZfQ",
  "key45": "5vHJbrHQH2Ck88qQ787dtDj566D9zxm1WGhjRuKdCEqLh2myFrfJ9pGeWxDv8bvaokvbM4dFDzrjiDEXQi9ki28R"
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
