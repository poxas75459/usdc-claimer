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
    "4N66crqRmTsGUTqberq678ERNgD1jzn4ff7uJMBghKti6Hd5ykqzKFfMY36PcaJ6JhYdUwZSUhLC4r3t47ZkYGzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKSdTarYztYMcSZTVYGvK7iU8T3BDUKUyW1Xid4PYwsqhcVUy7R8vRPSYJAQ6RTg5FPPHdvrEshjrL4cjT3Xxzy",
  "key1": "52LbWMrX85K2hcdBAs96oXC6Z7VytsTMYkKadGDrz4AMZWpGjrFhmygsC3wHtU16FrdNQCjmSEAqYFyZeNjz9rLr",
  "key2": "45AGeQ1avhdB1eDJLwncVFvGewiWya98Ece53bxehepz1sDyVowPdhgTLzHvpjZx7RU298FPKybxG2b14oC5cTf1",
  "key3": "HyWej6q31ZAZrpKX2Je47Chc2rEQpuJ9PZkjKCVHGK2Mq4eXgQhzyKWbc3peihmjNkRb98TeB3Y1dh3qgjGaLk1",
  "key4": "3PVQWfb9fusotnLzjoBXMhGoWxBvnHWFeWtXrWpWfDWKAWiKv32osSqPy5uoApxwReuDSnjz4zW2RFisMF6yVBwB",
  "key5": "42yYLT4FaD8avGQPrR2WKFhwpUFYmiiV8JCBXcvJxCHWPeSKBVQrVf4ucJw2AbzmUorYBzyMDtiDZ2U8WQq7Kyvu",
  "key6": "123qos9k5Beucw1rPUFJMNTp3mvdF2Uk3wwbvfLVvsqGDtBwaTv1CCXjN6gnNmVxDYR5BjxdMMGPJsNjbwCWBJdA",
  "key7": "C62GLdKyxEaDRCDQrjNkSv8ntdzgTCZiM9fwxDAYUn7gZzNKMuc2wwNu65AhJ5PcqkHAwFuFZe5sBio9jQmvh8Y",
  "key8": "34s7C8xXmSCBapAwz518EodEUbf9PaFULTd8Y4YFmLEaL7v6tVJd3ya6egHfxGiPGREMGRzCfPGEqjn2nyrdX9fs",
  "key9": "4epdu5vRzfntTkkuoJrceaKusk51cUhJVzRABfF1WeUx6p4hx42km4uFM1MsrSbK1wFJJ7XuLBSyzLueaqytCJvA",
  "key10": "5DvLz2JgB8jqUrw3QMA7YGTP7HiFYTtiv9J8PPfG79zFPGmzyR72j1dDszyhm6g1eG4VUKeXiVVf6TNr8JHUiGq8",
  "key11": "4KVhTWgVhiEa3e5XuLj4X8CRU2NzEsXrP4XD7aFZAhmLMuPD77p4HvegbxjTy2sfkykfR6JAJc2YwPPw3yGWb5Nh",
  "key12": "59TdMJDnhjwRv8164DVSM3FvuCRy9NUCBJHLRTLvfcziXWLcV5fREASQmV5nosKFDJ2y7iujJMqZWrWkP4NFuNcd",
  "key13": "4qda8rkWMoKFBjgxRfkufxLE1vg15m5tH4L4TUsM8EcJsYphTP86dSHJdGhTmmURtSci87UhfQ2DrMY5ZzhFDY4V",
  "key14": "2fsTsQW9dvTbkZFCZq9uhvFdy7hN3e8dPp8tigEuZx1mtsJRiZ1iDCQY1G4ZBDmmHzcNWEsrEfhZdXwgTiAAKY4j",
  "key15": "2FiWY6QCh5WqffKqnVooxFSp3BWHr3xry4k8QvzhjY4Hjdaq6ESxxBvQNPd1TAWqUeFbd7J5H7KD6VFHsHXVu4CA",
  "key16": "5w6xSiJqgsne1nuHwX1Qfr6oS9DideG19aKu4QbeLKQPwHZ6SAjoqaXyHU2zwsqR8F1JjyAd6PBnvjHtG759NgAL",
  "key17": "3XgXpujRw73znBzcEZcKWKoeKAnnkBepndNpaL32JxqQce5f8EmMDA6pkzuyQ2YDfmqsLWDyaqxCghCyiDerGGpR",
  "key18": "3mw4vXd8zQC8FB8XH99r2hECWQRYupuKt9izK7gGsP6r1ZG57YVepxZNL4tSsaVhrxXfZH5WDdwJ3FX9kAKGy8vh",
  "key19": "5NXc6xHamthwj8kYumLKEaLdQVpbQ1os9LcqYsb34miJppxjfYgNgVfDPWS8U5L4nCMM1CF6pxUQMWjL2XjsQPaG",
  "key20": "2eLDEv3PLVZUGyjsB59vwjAXyo8CPcGvDgH2DbLviFU59mDKymnveA18wBtEDhyTmBYuXNboGptarkpi3toozvdS",
  "key21": "22nw5qU3HFhdzyybbwZtTFXgRyXxnTa6hnyu6Hm6G3MYG4JpPaseERC6UTKmahsSgTpLsaD7iQ6pXsfqkiWebsLH",
  "key22": "5icEQoeCV6SNiTavRvh7xfYiw3vwzaay26b4BmmZp2a7RuxwoGtHwz7cZibqCjvuhvZJQBGy5Wd5MKX8i5RprFrq",
  "key23": "4wZYFFft5EpZw3V8HPkBVoMGMqiVKobzsvusPcU97imJqBamc1aGTsPuLyDyYQcmdKjnezbsPY3SgRzkQEj1ADN2",
  "key24": "35HdZ85AKqffcTLktB5P3cgUQSMZcAF8yuafkD64z77m711wuboqNU17KbocySkb2aF47ywVLrBdTHDpGn5DdX1r",
  "key25": "5redwzhJLnzV5y6N6FoEoNyYwJDxuv41ZGwUNkjzW4G3PE7682CJASyotDmWKeJCr7fTBymp2m2iqBDndjE1Zspy",
  "key26": "3DcwH5JPxy77uVY7KEUS63piAwemrCFdxhCAmRYgDE9orJci9Hb9mgBbYwYsrbH5mj2v86zu2vha6K1UL9TZP94P",
  "key27": "2LkkLWNE3ygLLUWKtBpDyn9dfAxJHqXqBNr48dWAHcBvQGW6d7LfjnzCh8jdhRJBWiE4gPYPvz4tzxf9G7AqER6s",
  "key28": "4GKBFTZ1SsrAryWqDhAVJjUiDumrLmZZYYGCfQB77SY7PizzUcnkAFQGZLFBtGM79ddB8ymXUcKfoWFjnZCitPcn",
  "key29": "55p6Hb1ExxFnKYra3zu4LZDyhk59wFZkHSrNvsocmZY5zYVpQBbJpdrCJr3qgHhTKWFm6DbCtszgEr1Vjb3sWPq",
  "key30": "4CofZT4n1KyCQppNybdPALX983p6a2JeVxgazuN1rSBnbHw8S96oqAkkxqXqjYhhvQ1T6vaj3mu4z76J7uvtZexf",
  "key31": "4qfh3woLS631dHAW3wGVrVRrUPXy91Ai6ND4rWCKvQyTcz8nxus2GEJKJemqbj3QbmLvH6ngVm2Uah6tYFZ5DGE2",
  "key32": "63Wbyp3ZoEuXixd1RBSo82fqCV1Bv7U6y67b68mHiBNC4ChQ2QWLsQqUVEMnGiPXnJvqYgQNJCoHUmXc7D4LTPrN",
  "key33": "2jUJbaZwqssNng9yZyMMtQRNup4thNfPBF4rmH2CU3yGxMwbozM3NBLKUVoZMPkFFhHMZj6bUV2muvEJEDpziL8j",
  "key34": "2hXevLrV1Hxt8ixUm7pqqtjdGi1ovEXCLkxXCaDdagkurDPezbGLhQvaAaKLVigpmdsMrvZTpQUxrNypdAXbVnH",
  "key35": "2G85PbNXqbtLEmtpxidEEuWsocSEecgDP3D5oQbN8kMCunc4hsKaiHZMyDUeWhqEUHZdRyxTMBBoEv9rofzNZuwB",
  "key36": "tFhwB6nN4CEJ8sZCoj8HQFmcAKc7Y6iJ6NPHVr5SnUuYkcJW2oEfiBV84VtXkMiVgw5ehb9ahUtLwKFygvws5My",
  "key37": "26RzuTcftHZYL8669ANaCi2MZ289VWsEQtndRspu7jmcWkEk3swZqCJJsMyUKXwDvGckubxVmFRszmh1j2EGch75",
  "key38": "3YEdpaMW15poscufcsJbrgFWBtuCwJqGkHAMMiJXsT7oNkDunfi39Le4whSXkosxxdhHU3STk25FASNoARdrskZ4"
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
