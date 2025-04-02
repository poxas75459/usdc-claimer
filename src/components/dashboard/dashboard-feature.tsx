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
    "3Vj2mkZpD7JZKR7dyQSVfnxKDQETjeWLvpc4C2o7ZpPSk1nLPyzxmvu45u5fpykcnc8JpsEihuqzqQqLVQaR9UaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o3GuBupnwqHF7u1VEiKAyvt6jqTdoQZexrb48fWsjDrgzXNDEKQP4YsDfF9zuPXH7uvPe1qTG8E2ALtRF3kSFP5",
  "key1": "4FGtEfxG6yxdsPmGuhM6haKsgYaVZPDj1Wf9za33HRz8Q6YDviPrMHWdyRxJfjE9g88J81QU2FQuZ7kc4yKXNxzL",
  "key2": "3dipBJFzQFbPMTxrhcPPu7aFbhnPCHPcHVcsLgvah5XqFkTNzGfupmRiZ1fD6yohUcEmfUWPwXif1SQMiywNKqZH",
  "key3": "5NtJedRi518hA7odyB8LYYgdDBJwb9szb9tbftzb7sjjHtJnHZpaqBCDFkwLFn1gy4aAcFqsxorfVXP9cUWQ4kth",
  "key4": "62dFRiTKDEEc4hp3NYPjXfFGxsgNSQVo7urNEnes7eThwn6KyMbsJQGavwWv5W4FXRMyHYTrW2ufcyt7ZW4g6iwL",
  "key5": "4ih2eQi5bx16ny4ZAAUhCh1yLbdv9nrFjvxWbY4XbycAuE3EqtWJDbwJ8rVLWVxGCh1VXrCiEnwZPzvXxytu4ezy",
  "key6": "4UbSFoFoQ4LdCuBQUUpWVFbm8mmBk1STKvAaDGjVJHH5wYeC3ErVhbimqz1arXNaedXGhPscNkr2YjRMkMvfCShm",
  "key7": "3WRJdY64rrtgC4yWLTPvkspA2pWga7twxqi8fdPqbrD58tSXjwZQWpKNTLLan5fEfwPanZHaNAw733YWS97Au3P6",
  "key8": "3c7ukTHrkyMuFeLAkn8ydVh3CFsVCr9rsekHacxN5KCz87aHEvG2Fk8Ma6j5HbwGZA7ofBCjFgrgzVgZAHMyFu4y",
  "key9": "2wM7QYrjMmYKnJXX22342TdbWbm3gcDLdz2DbQGj2ymXVmnXL8ptT8Z3L396nX9uTwbmwXPB33QJDy6adT7fN2iN",
  "key10": "2aMi2RpNxYDqH8FFAL5fqvgk4r38Tkk5e1SoR2J5m2bo3MgpYV7NavTn5L7e7Nj7UwZ4rBD1jYA5HcjYxVxE2GUN",
  "key11": "2PgRLcWJkcat7QeJi3fEzUAwuKdzCrnGqidDAf4SGiK7eog8uY44bWuQGJAfvxfmrvUSzYNrGZJL3iQmsyFbcoQ1",
  "key12": "34LLi5YefFS1cAPoQb97rggQE4u35XHaWcGdbBwze5j35jYHQC8Hj3vbe4gSDWK7AZQLHHBCNhEUChvNq35Vbgje",
  "key13": "475BsixuwwKoPfRFDAsXCp8WHTrn5bkoPZYSgA3G4mxJYM2evf5QLG7Xqwh9wYDtoyvjPJMr8pY6CJwUmj8UpmY6",
  "key14": "4wmoXXhYodt1gmUPkdy19gwe5rBtXMCgh28MaYqS1GqjiAsD3huXDeUV1r6SHiUSHiK4QmaLoNHG2TcxuFAauSfk",
  "key15": "2AQke7ke8P4J8DAbKSN52ewQyDkKFDpAiJxSdi4MVnx5SVK1SZBLKs7steFF42ve9CmhwMSHygGHaG1yrKX1wamE",
  "key16": "4MwmXCkDUhznbVwu2bZiuP1U7kMHwRjd5SXLErD8TVzzhE7gdpSzgWvXa52FeSVsyMS2r1N4LKkP6aZSsghM4ms5",
  "key17": "2p9uE7pJRStxTBvxsBsGNZgMWowXeV88VmwD7uN6U3w8JYxoX2RPMpRKrK6mqFffeiMTVc5wJV5Q4wKhEtDEmvh2",
  "key18": "3ZqUNJq7zjkevRwsGnfGPUv2uFCAb9bYzwy9imZkGUD8f78PAm26jFn2SPWsYRYD3fafus8JMzJqWN3AUGwjbWtd",
  "key19": "HxU17i2YfJSoZD5kyCgaJT8PBkBPfhc4bfJJJfyQ6dxpTttjKT8Vqx9Ay1QBTKMavEb8UhRMe3Q5YX4errQy7nH",
  "key20": "2eBfoicgiN1R7Expd8WzNdbwyRNkJV8tVrdCKHDfPsK1bjZGc7kaeEnkBqJZeq21P93LTZ1SbzVUUN5mvxpjCm9g",
  "key21": "tUpEYp5rmN8Qpyfb3HJYyP256sDQhHrKw2eDCVnSVhbVL8QabxwZTZCq7Gp41SKLc41AGzeEEUKyziLdxcgrRJ3",
  "key22": "3uwf1gqqjiEwgJDZkjRk522caWRcfgQuoMAAT8zWzpdXFbudinZZEZKGbGQhzUfAVBGEjJJbL3CqfZbbh72Q56Tq",
  "key23": "2XSuY9HWWAkeD5w3C9g4pJ36NWCEZ8s22PbLtormjMbVeb3eBR9eYM9m6Pm6Wg7x7j4H2gVhJRX4aKsPN5rnbjxW",
  "key24": "3HER81Vx31ebukbPsQz4GTxq4Dkdpor1PKKJFzn2VAq3FAkn2LxqVMXqSeqBovTHXkwZheKK5s84VcmMwVwNasv",
  "key25": "4jTVF7yikKT6jA2fDXAr1cKevFFLi3bPaEkjEjgXimyDQjjXfJMXdVGbZRUGFfNsgt1vHrhqtQTQW77uHZSF2pUx",
  "key26": "28NF3dkn43HLGDEV4KyL2C6QUEWYTvnZs5NaLk2jKeofaku9GiYKyq7dqZLXvYnU6NkjJyyYsmsrT6gbL9wzrH9G",
  "key27": "2QtHNz5M7X7ZU9Ti3yr8bUsdK4vgTKdeV9KDpXFtJuu2nZP5GryybS5y4QkNrp63zEFRvnrZik8396vGjVRjuytD",
  "key28": "5MKKHiAjSYhjtiZ3jB9APze9GnP1Wg4FW3HnzyWYY24GDoSjcnFzf5663bknLGNmLpANpND35DDeeguVR1m32tWa",
  "key29": "4Ea5Dzm47EABkF379Ecng2Rk4ruZXTvv18d54S5U62KfZRM3AXggAHoAcaHGEdDmJAx9BvoiQGC9HrvENxBRHqAT",
  "key30": "yiJMHPz2twBW4fr8j1D4vQKJ77uDCoEWQ32EGEfMELVkE9QqsuPiWzV7Ywd9MTBkyXrMQMq6SfMSsZ9m9CzRFZq",
  "key31": "3Ny6VKn4TKvw7ibJM6eiesRu6UuR8SHeva3W7BeXsJ74q1UKvRSBp4mCMFp4e1JtyYbXvdR4piZBS81P7ntCFZGa",
  "key32": "2MZrkwsvDezq9QFNsEDEjvoV4HtTDFVKWYKAXXjeVhRezBkvZRuQNQChCnXPay8EAwq2Z5hLhXTd8CeMQ9UE1aSR",
  "key33": "45dnN9mTYaWRtPN9p9G9mQHZg9jjWke7MfYhzwfhb4oq4VFK2KRYECU4CcaNXzyP61dNQrnyF9ZKpDGFw3AFtRtA",
  "key34": "3oRJqZ4priXCeKzpLqceD798miv3RztgWKBk5gHFLN5Sx2xcCMQcQZda3KbJZqRiHAi9xCQXm5YYM1g6aT7AhR5p",
  "key35": "66KkmL3rPQmvvYoeBxEyZEsStZZRwEbVMNgcQiSevBmfXPCeRsMv632de4bYDCp3jqSRoSAGvta48B38gE6MZaQy",
  "key36": "52GfAq3LBkYCydHz455jbYT8TuzcXq5QSVcXbU32FV6HS2rE24URY9Kd4FLPHP4qibUpZf49xJuSZQx3WpQkQ2ij",
  "key37": "6Sh8P9zTEnaPoxMJge2R58G7MPYvkoeo6J8rAKSz81TCX14jLtY5HyEpqCX7ujCYc2k3p2ULidp7cCVv3sqSnDN",
  "key38": "DgRMoojPHFRph4GdWY5DN4J3Y6H5RDtyqSWK9KkarCV6kbd2ow3fZpV9nRAcVJtaH3aT9F7F61bYmPmypi489Ry",
  "key39": "3A3XpDUPCJ511Ba1jrg5FTY6wcR2b1DwoJ4d3U5jTrS2Lo6GQ9FUpNp6tVDesSp6h3f4ftUwDzMKAwYzip1BTKzQ"
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
