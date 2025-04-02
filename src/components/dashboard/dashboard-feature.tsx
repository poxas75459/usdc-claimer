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
    "4erZ9ryVt6XKc5Z5Xvy8rtDrMb8b9urTbt2k6uDGdJDAE4VxeVXtmCXW4UmFm9n1hKUgZ7bzwLtPCWsn6yE5SXZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ao5JphHXm4JasPaj8C5gHQiXv3HbHffxfJcDAmQf8i35kAMX7Wz9zN6wGR17d7ANwgKfjujByEAseuztGtpXjLA",
  "key1": "5vnurXN3N6fqT82ZAQYDmgr3D4pQskhpWEkpn7CEXAxYHrgahNpfqpnDZ4wUz4XjMQy8kAf8WX8y6q3Zo3fZJEmX",
  "key2": "24jWm1eeUqmF6dDvS3t2mYzMKj1mtxjnzvCyVq3DiYzLKcpVHYDdt5BEU91qFq86TgfS8NjbuYgoSw8ZTy6TGsAX",
  "key3": "3qCNTMw1vTgfwF5v2X4c9Sg22rzvjhqQ4NnqgbTveWbRRBgQkNTFVzi5TEC8sThA7XH7odCCbZ77kqBSzrCXQ7hc",
  "key4": "47bLQMNdabW3dtSU1ixhBUdetMVsjcyGe2r2sAuK3VJFbvCYST1PdHiN93MQ1f4zp7vLEJ9bM51Qco1uHg9dNpWh",
  "key5": "2zVHFtURKUTjfMGmBwZqQRKQtzvKKLQA1hJchmzqFAgXkvEpYK7pMG1RbyxadXJHiCyRVGxSS92R1joGB2nnNvDt",
  "key6": "mXYtsxD2GALC2b5Dt2PqZMmgpdnAtHJKDaWjVxe3nK2qiugSLjt7Ve24z91HwmsEAts7SXW8ENeBx4aTHFif6uT",
  "key7": "1LxHKFwUgziH1epM3475SxdLmAU4SoAvE2ygCp5T4U4mDBkpEUdzs3wUbF7YSUPLDp37shBQiUJd7r1v2KjhbHT",
  "key8": "5wPdt3XhVw6DdjQpcpcx41CU9fb6TarTpH2u8VQ4xahDjPuMDjjHTnkRY4jtAC9AoCkavzJFccopjBPe7FyYu6kX",
  "key9": "p9pEeUqLkzrEijBmSM4x3Chpd1unnHKmPAfXrjMu1WXedKyVBN9niE2qVDiNPvFKrcknsgcds1nUc7sh6MVqvuN",
  "key10": "WnxmU2xPg2DR8qixbNA9ekiotGBnh6jppYTtD9pDwfsR8bns4rYAeh5sZxzV7Y784pZQTZ2edEY9AADvnsAM53N",
  "key11": "3dqU3FWRvC9tdtbjqoDcS7UofkypLWegbYUcQ4G2mEm5i2vKetTcp1G4pXFLST1oiCAWsSbvy6Wq4JmrbADveZ9J",
  "key12": "4wpKmC3J6g6BfRLa5pwFvDSgBzWACBWTo3KQdDeUsribdHYpJ4Vz58zGXJR1Q25QTMGoHE2KaVqfrbt6StVP5XRs",
  "key13": "66DgVfq8NVsTzDSgxKqzgYGbQaudgn5TPEMZx6C6idka2sM8nNYfNw8aa4hYVPSSPxFMAMHZY5fd8sp9Nb6hUv5M",
  "key14": "GDvSp7mbZXV3jPFizwj8LqwpuoCdKyGASvBwkXX3mCfScALg3VRE6JGocuH7bKvKV6PuYVrVwejEcM5iEaPk7nG",
  "key15": "2e6MvVbMBsZQwFyiQ5pvgwbzXhwVyS8PU76ywMmoaKQjn3fewvmbQEZpHzF79JGXeXkYMhn8GZxXhnAHEDD8BezR",
  "key16": "3cFYsrxnHg6DZofnh1pu8DqKtCsBMsiXFVXCsrUDv9CezUMw1onQ4424XUgMm2Q6jBS4aAyZdm3oqGGqAmTadm9f",
  "key17": "4BUVaYfRBBoGmjdpwXQi77ctRbzhGXfPB2hEvm2MJTe7h51biy83RCgJqh36ntEYy8HZeY71HDM8UHfQzYmCkyNU",
  "key18": "5eupVoekL4fBXJt8TPLDjcGyjPmaZqZQ1vfDbT6F5s6Xg3RE56ra9oa96rjydE3dmEaLR8Z9QYhYnJXY5ZgGJ5YG",
  "key19": "2QYXHYLUSvQrzLPPN1uvfuXis9rc6yDYz1PvaqTNVv638GkLBLMuik4xJFyY75U5oTAxSJm1ayC6ALgbWUZ8uWcu",
  "key20": "5szrufeCwEAQda9zDZjX23qUxPZg1x73jLK9jyTiD67EnCNXBYMuJohCSJUX6kPW5co2WbjsBLHJysTiw4dScE3t",
  "key21": "2bK5pXxAEZEj9MMdnTwZC2BvDMZGbzP5ezZm5gduSuWbcEaGcDKH7ckUE7tcM2jFM4h1Ssp6raFRKWBPvnunpMwm",
  "key22": "2VwZ585vXhrdjh7mbfbnz1JGP7EH8tmjXhzzX4fTANjzD42PL9YPnjacya3sYVL41TANF1xHvSGEBNFuFj8AzMVB",
  "key23": "5McRN38jms7Qmtw9WcKqKTqxetaAvkREw9xbtFzoDA3DFqoCmSxDoW1AXWxpBWLZtmfMHpkSZfqpcwEvb4ReMJSU",
  "key24": "3CrTbxHDwWLH73MPX89mcmHoNXTmg1UQ1Qrp2Bd3NLPAo2MZkam3yXB3fjrCywv6kXvBzyAy3TUhPFjwiYym3M47",
  "key25": "4C1QSYg2mihLvMoefpgi1gJAtDkzWtWEtY56neKn1Vi16p6w884LHQgkuoESsonvoHJxR2RQQoC5V6C3MZ3buobU",
  "key26": "5ubLutHdW3L6ovdX4ygiPCdWhnimHFHFzjZXqF5GC3sEx4zR2AGFdinLT2Ut8eMXuaX87zAwajYS2Aj6SZVWBzGa",
  "key27": "67EQi5uoZCayUY39ncfFsqLptUWa2otQfSthpKsYyM8Xq7kbcG6Squpw4GWJsqUtkAt5dz9WX7UFyGgjr2aw9mCZ",
  "key28": "4r1Cjg44SoD7JgsrWQncb1KRYFtxzXATwrbdCgJ6eov2zGqYDra5c7WtyaYYo1hrkonqLqEApT15Uogpaj3ifePz",
  "key29": "4LvGghaJ2NH5Vr65TP4YYT4xeoBWoZZve1hMqPoTDM18oDngW4fo1YFQj7o2nVw25Exo58FDruCg8n9EiXiJagbN",
  "key30": "2LhT8DBFqCqMVHF6P8GG3bDB3aRTT9NN6fvsHAsN1BhYdLg6ujPBKkdgwBVMxnUcVjbhuAfnRcjcdER6VH8qBVSA",
  "key31": "5DSUCMHddXFqGjDJYQkLRA1g9GnLYvHbQoc3JW6vBnfPK6nGTTbhqTFJH6F7ymc2e4mMcnTBka4N7oGs2XQjKCUu",
  "key32": "5JTAjpPjZnVj93rrhxuQKJHqhnY33EmCrMDAFVswpxLmM2bubFWq1dYJVsrv1P7SZCSahnsJXqngi8BY3nQrZg6F",
  "key33": "3ikuAZjJiVa8nt8Hgwia8wZWtMmKZysjC7M67KSyhCV4jKtKWKvoMrK1HFfV66mxEMkfbmx8Q7JFu7GggoyHxSCV",
  "key34": "4XW2fcokrmYoqqst1BSR9zxbEDu7yHrDT6pccSQV1cKJnLXXy7PyqfChxyuPU9Wu8M1PguLfZWKkt71jQWnMPrtW",
  "key35": "4tEhtwNopks5RmznHKA1gM8caYps7nzRRDviCoRoks8z84AvhAUF87qpEV6CVoEy1YSyJMiiTzD2q1Z4GT96Gtev"
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
