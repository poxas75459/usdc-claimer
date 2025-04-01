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
    "2H21YSc2hMW2qpnjp6KTQ8uh73UhnAG85bW9REuTAAWwsEq3TzaxdSMYc7NCti8amKbgQo453qDDb716htkAyeqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogLcf16CfJRktY6UN3q1PaL7gG47nLbhYqPskj8wfxKnogBQRHYFYSShMBJmXo7QC6mJmEcSEzc2g2EpbEoE5qc",
  "key1": "67rbnB6EsNKp4Yp4oPzHwJpTNezbYcq9XZNdSEd7X9xKMZYQr57M7nJYvfRPRxLqUcEc6kW2Gg4ZkPCQey4c9vNB",
  "key2": "WZY4eZHdTfwHXYm2bJmng36pjuDxp5acvnYzKbAV2uHJSQhzwnEuSR9Ng9A9qzR7AWd6JfYt16d8gSnmxm6f1vj",
  "key3": "3qrEdiy8EaEhvjHfsDuR4m4EDpBr5E6bN9AdWNTjrSUPSDbYecdmt9vBRE2FSQJriJCeCsvqWdMwAcPv3UwEP1eL",
  "key4": "26z1tQrvpxUZr4Pp9PTCz7312zZXeRvKCfuwGh8DzigvWpu3Lxnn35KTeKLjqcmE41R2dvsAVw2dzef9xX6MhxhL",
  "key5": "61tHShZRVfr6AN4shMza8AF8PJnURAgzDRQ51usJm59JBjdhTzafBDss3uLexcCNypJ9n7Tk1AzFXE5xgvGCCk2n",
  "key6": "UmXo8TLdLUHu4vHcXXa8mhYBdEf7jwHjZZAFrdU2eRyMt9JzWu43qCuhuuL8vxs1rBd5Q49kocNn1cik45kzUx3",
  "key7": "4CwX1n6utourMnNM5EmbWFpkeCe2yp96pUhfD3SypvVEjnSnTUCBPfVceLb8d8EfdR3cy25iB9vdpdJqqpgabngD",
  "key8": "wG5gZ6c6yxQetiFd8mQWK96PzTsxg3sWN55e4NMqWEhKXHNcrUHhX6t7xHELrJzEtrguJHaGgVTJLm8SfRUkEFv",
  "key9": "27oNJQBuRAfn3VHxn8A9S5foTd9MjLpo7GebV4YFziUcxm32WFGxHZQrK2V6ynSheHwHGQ2tHFqz1ubhWo9NNvgp",
  "key10": "2KnMec9BBNCUYzGyp8KGoqLrRwdmEsksbmxfivT1mhCh1v7JKiChi8AD9py8zHRtPABRdoeZkSpa7R92rBimSbR8",
  "key11": "47SsvENwSEiLU8DptadtC8nb7ktKsm9oYP6uD6dYjtkFDJjpFdfHQo8odffp4DQD5wdLpLDS1hM6Y3sT6i8AUtVJ",
  "key12": "4StxgMzg5nWDKrBYcbHjNrYpTH6iFMeYMGCTufJy2hpzQoV5ZXxNzsn4q23P6EBW9G1VaEKdzBwD3qEJeEtCjnkX",
  "key13": "TWtaMHSD8JQkusE6RQccbBo7gq6UodsRhTKqzDJeaimt13V3cg8MVd5ab5QAj5wdLLxfE7JbP4eMPMv6u1f8m5B",
  "key14": "2LgB8UqrBgfXvPjtg6z6DPTUc2nysEUMDdMy4poafoZfb42LuNnWab53tpDchNHZW8Q486QdaQwrP79msmdYrEWX",
  "key15": "gaLjaSJ8rkvzdTow6r98aikybThLNNLSy7pQAhyP76XLkwxWY4wv26Z38masTc8VVdCL2eLtuqZoHKaonSP15xk",
  "key16": "4pxBvqvyVbaYEvjmCZtJpyPWc4XLJ3UwpbF1HZcCDzoaLmHQAF862Gs5p7q8c9kwJjmMEMqLKJXTr1Ght4oGzzWV",
  "key17": "26Wxx6YrStwMj2gj4vzX5Vt69BKp88GajZbWUvMHf9PRVknEz8yoh3a6cUaEkqR1WwsjVSjoz1DsghBhwY8Aptgy",
  "key18": "4dxcXd4cAby1zPquCAyHKVJJnWNz1Wa515Lk5Z7ySn3FbtmPgdTjRxf9WuUSpobhmztngSFcNNj6z4sADk6C7o39",
  "key19": "3sD4HtZfZtnbf9KhnV6NGMtmLxfBkCcBNtEXJQksnGWSiGCn2MkznxwxZAJYx6rnwS2Tu8h7YktkK4zaHV34cHNc",
  "key20": "ti2AEHT8eepVP4fGdZnPq58u6pz6xyZaZCPVJzRnKDyiNnYqegMNDcQdPt8h6ymiQZso8uuic2uwm6bUTnQbvnK",
  "key21": "3tBz9Ev4NdRyWNBqLbn9mjRBcxfsXD4VDdnmSqSG8HF9qvEkzpCXdPjDP8mKEAqAuX4oc6W2EcaSd4JN4RPJVGnu",
  "key22": "2vFxdbB6m3HrLYCK5A15VmMQf74YVh4pYcmwcWj532trwKeyDTUiqyWn8NZaWuqJ3WeTCpiNyQ5kaWbgd4gfRQuW",
  "key23": "4nrFmwmYGwoCUouyqgsGyFXeWDQSLMNWCwYo6RppXvmSKx1LRg1uNEF3AmA4xE94zAxFpxYk9LrwwAwhHeCChhbr",
  "key24": "2skDacmZy85WfCwTPMnBKzq5kwDJTWSPL1puvqSpbo9YdcDhhusLxyeFjGo4a5bNQw4Y2Yd3YcJyKBRwvgUqCnHV",
  "key25": "66REbVyoe69eFVmuRB7kcq7hHA3EZsjc5F5etVymXGAKJd6TWzqJLEzTS5S3vCnSdMX3MBdofjywz39ozM1wcFTQ",
  "key26": "3KuMU2Zg8hr4RCx1A62xrsCEEiLEm5w3ctUnuCa9twKa2TaQHnq1PcUYRDCFX8y4DAuK66VjwRLqkSv9bhBTSses",
  "key27": "56YtxPoBkd7jBw3SFdFbbUn3EDcib27FasFtU5XT9xdJekUKabdn3NQccJw3G36frA4WaVaDAfJokRk5qHJKDfP4",
  "key28": "97E634NXREUvjNSgCrUxNQJF3JHFFvbKYmmGpckNfrFrqiZY7uPzJwk8wUDg8rxUM3KmCWihEYpaAcHUeGfxHcr",
  "key29": "4K67pZY1DHDb2tPcMSBBmHp9Lq2fjZPjsrWhnsjVREgMQ9FbGaCESbeybA1wakiGQEJBcxkXR4E7CqZoabyQbV6n",
  "key30": "UGAHCoRUieMkRGTUHBurLX5x6PGwKw5f5bsXeH8ceYScTcRkS8zYZG8Kf2dEHqjVoQp6fk34NBRDi7yfjBkkLxN",
  "key31": "5Qx3EnhdtWwNBpeRwsEqUaaAVgpZumsbVwYzC7iVfktHd9zHKMdr6xj9XffhFrfBCpWdJbPmwo5LjmKW1z45yYuS",
  "key32": "3fbBviPZS7nFYG3VKx7vb14wuEARfBrasASYi37jRhKkX6s9dnFLRcmrHbDQdqFYKTFMfp7NhfU9by8Sn6HXBuRf",
  "key33": "bFZtBd1oBmdooB4RMkKYZBge7bUyTcrw44V1nHYK5CPHwsxDXBEzb2LNp3w1d4LxyNoXfT67dD9qj5GYsgHEj3h",
  "key34": "67bS99fmYjkU4fBK852QtZPrEy3g1pd2szTmZz3BHKmhuux5LfBmFGTVdCnBpVNot9Krf6JeihJs75rPcfjWHcBn",
  "key35": "2WGTnDYLuti2xPjoFem7JeSSPzvzTdekUbxEG58cU6RQtW1i9p25S1gS7C7QkF9a8neNzmZNwa1UHrrC1BHTXNp7",
  "key36": "2BTL6skqj7yT3oduGz5mpb79yjf3gzqZ31AS4kYioDrQRsxHhPHPU552ziFn6qmGzmyaAjnEwf2YgrWmjo5u9fbT",
  "key37": "4MF9RbGFBistg52EeFvX94jfFsMbM1JJVF4hBSkuZ4AFnkDCU8MhEYq9uPskdXRu4wXgf3cjwR8pPPJ2LMCftWMU",
  "key38": "5QEJXn3K4SZYTQAdovxKkjjdbDiVqEYrtrm8KNU5e6XBVvQWzFNRYRh2sS13kdPEhKzNrbYmRqH7T1w39uwx5ZBN"
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
