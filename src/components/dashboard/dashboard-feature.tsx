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
    "3ek3XzhxrW12Tofde7KLi9oNYi9AvqF6kqDcTgGL52ErnZMG7SpNafDZvZe2QexpmRYQDJmN8GJWMmU4HQ1WTyVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66fXQ5iv6b2uoG5ufwh5eXdFR7vcg9CGK8m2mb5hcXcw88n5nHS2qbpamMLQ2SahZ3eid9t7PjJNZTLKeqbPvywG",
  "key1": "2FHqSWJexGbqdAaab6LKC9J3odL29Ag1hb2TSAixrvtZdQskmbq1qRqg6YaCBkNHcDNYhoztUDFkK6mH5jrKMb4B",
  "key2": "4wUNWvVxxCeKGFYsNpKLkPQZTR9ZGAbhVw392q3PH35jSCfnxko6846wRWqLV2jymFmyvYTrmoTkFRyHUi4WRq9T",
  "key3": "63uc78L6F5naBC9x2ghpDWo1yDYdh75JbQPWqVHv2UE9jnkRFQLhrBCZu65TSf4C4B9LBjCaeFu8u9GfUUtVBdn7",
  "key4": "2W447SkiJhsTQ1K7AEGYJNM9fj8tiXVvxBoZV9U4svDgFeNUXAxW99wPzn1M7dFGxgUT7rsNLCWiNwnk5tMdShLP",
  "key5": "d4Wx1jsH6xB6CyRZLcpxUqwLzJMmqddDLpCa1mayvjY8gKRG2TaJun9iycJdx6kJqFKvc9RH3WD9joNDk8sapb9",
  "key6": "jeP5wzHYnKW3tbsoMxmzBfTQ6Su6MEJPthT7hG1BNoABT1o3ZzTE9E58KZbVGqyHHAgtRs2eyhooev3rhxJSQ6K",
  "key7": "3o2Hf1F9phX7gavVeq6cGKPnnpo87qHj3AuTkSdvkLMFPRAtWajioqVmgY7hBvSRWrxJKhxz3t8VFbPKSQ5hXShU",
  "key8": "4diB7j9GnXtUtaSP73Jzuo1uepKrHRaebq3fj4cSy2hT5XEqkVrEgNQWhpV4ZCSkqHL6Vt8WUSXNsvHJhGz9rhqf",
  "key9": "5XcdfgpU1zpysUehLUngsfHQ4dUhWqcaJidiD6c74ZAeGtqnZzQApPjuGGNtbGy32uQetLXA1QrVDVtM51WRkQsb",
  "key10": "Z5uMHxK2iDC8MjuZHQFKHfrVk5yiPNZGsQz5Zw9mmb8pLhHxUnnTA4ZhBMtikYaj5i2qMN7Y4vh645YDu9Gmd7x",
  "key11": "4Dm6MjLS12Gp16Q7VTafHYuwtQWpz5xMuQugacWJdafzXoDY51dE3aEr4rqY9uNoud4fWyHRJ5N1FcEyXHXgGZa8",
  "key12": "TJvciTt3aii3pxGKNMfPb8ihRofwKyTRWr7HPeRGGcFdCtzy6NXwsSPSFfM9NLFiGMQGAenPdZWA22AFzN4Q5Ku",
  "key13": "2nmKJSV5zhqQx5nZZoCC5s1Z447zWZF7JvZq5SzykzwmZJJuzRLXBNsCToLQhsVK3YYLM7WostMYmES6t4FwgMYU",
  "key14": "LFaTKqpDgGsc5bW89uQg9Z7NcCUuJXQSUjvmDdcvw3BhkAxrxEEvDKZ8rA65CNjHeWEp3digrdX3tKQrWKFCy5i",
  "key15": "5KvF9kykXoacbRkzijwcsar8WTsP5MQzuyRpvCsgM7G6Xhr1rqiZx4CNjukKtzSZKLtnyBAWK2Gg85zvkTU1cvja",
  "key16": "4kZxJ3vbn4WouWzZWFyLuFYedis69TKZnmfnZaYDu5TxMKRRLwbmckL5PZDSGCqv6ZPYk3ScTbm9R2dAzMMLnbim",
  "key17": "4TyFjV8vnzrJFpAo3jjXnaimmKzBf7u8EbaytZZn6Y4QK6zEfsHZvws9qeK7ZzqsSsy7ksRwGEQYPo2DR5172VVy",
  "key18": "4p1GqRUgYomWcKNVJsM9myyZDRHgi9FEGNt6AWKfvdisDChwhDEdaD2uaS1W9MV2J7oFX2KKq1Z5E73925egWCwq",
  "key19": "44DqsRgEYCdFPKpm9i5q7osSuyqjvGLPY51zRwdBr5gKavZdTAzXFk3xYFXBCyXS26LpoA8uWKQur2PrYWYmm4EL",
  "key20": "3dSnHWEx5UMZZ9yVi5y28X4trC8fFVgNhVd1shpcncMXAbW8ZYhY3cL4JNgNJueDQ1YxBgoX9w6cMnDQRktk1Wc8",
  "key21": "51VsPbZn8L8B6n4BJ62XbyGfw2k7RCGkJ4kmaGCVwdMYPoHpePiuzpii5ZEWqVu5UaTuHC8NH3S4VNgFmauZxjKr",
  "key22": "2XookEKDNaq8Sc1HveLoXkop5oz6mR4LcieLgoYkzQ179HZ1bgso5LtZVBZNjVoypN4abg7cjZyYdMXNSpXomqDT",
  "key23": "4qn7rbAnWnQaiR7Tt7ny25K7D6sPhyCpMSV3yyNpULiZvwHCSsQTgYhMdRWPp7uQtHAGzkFaydS25duQxCk13MNL",
  "key24": "3gAiaCviLnLwYD4wG6L1QyKy1G4HmRNHHZjG71Pc2HHkLxfCKbauh5R1r5ZnAG3P47wMhbrP81xbuv1dDwbvNHED",
  "key25": "2CE3iXNG6xfUiYXJuVowb2KmhNW84xJEcyW8FXoprPyZMFhixgbzRY6c3QTn6bhNL7LWFxdCfqTf7bd3hbELDyg2",
  "key26": "4jZNQYNmhYsw9CXvVBSm3nr1AP2BXSFZMc6PX9vJindZpmUTRhkEKty5PW9LaWq945DxuRNnaQ185EXLY1aFvPS5",
  "key27": "2FUaqge8mGMNzjWqyCzTxVTkUgn45t6wRfLwkocU5m5ncqg7yJMK3SkFphmEixQ7irqejejZrJpQME4E8XcSGRj4",
  "key28": "5LifWs3rfsGCSieLkxLsWyf59Awx443emZJQ8fL37EwDGQMsDkUiZw5W6Y7mB3VZK9xRZGBKEtkVvHh7xvV18uKL",
  "key29": "2bXnRGKt89QHcBLwrMaFuGGCL7WC7KQq3KXhjgDc4e8vVDotWhSabhVeqqKVMWPAFUsTa6ABjQobjiPwpnM1SsC",
  "key30": "54PUPiGpZnC8hxsWQWfVbKCrJq78iFzW5tEmnRktq4nZAACpLUnxFSrKT6sbGHT9nNDjPxoSnyAT28Tz6db2VJgx",
  "key31": "AWRP7ruVeRuzvynZkno6PqTAHEULZJEWzGVSXU95oLpiwmPTke5VT5ajgsc2M3i6ecS19o7YJPqT7MxrDS7H9jL",
  "key32": "5zU1oszRdHj4Eue3aNY6si4aTCvHW3Q2MQsdKwzewARLUGbEQDr7sTpkMgLtvb5zvGau8ftBCR878siRyBNfNjME",
  "key33": "3AVCcn5BUkUNZsjcEZfXNfX5YnRfx3kaSZt3v6A6jS717h4jhfdtHYEi77p913cFtFzBgA9skmmasQm2Gof2DULR",
  "key34": "67cf5BL3Lqxknphpqfgza7YZxCjYTWQwN3nCzuds5v264vWrbMw5F7FfMwdcQsrj8VFNXdQ1uro21UVLa6bjNp5H",
  "key35": "hw1pe1xxv1Rw4bhAMdzoUhmU7qgWykV9sPEYXq4Ftje56scX8VwK5Ep1nbQ2tCjkr7qtaB4BocacV3Wq3b3MxXF",
  "key36": "hN32miF7TYYMpKjiEAdKfU1L8fELn9dXxCZUmNPw9RnGPSpjPJhvgnDgNA7D72uivyJkTjfQWHixGRTVGxJVg3e",
  "key37": "4BZRnCYhzM32GxUw7dMdjpYHMmWE8BPyGguc2mCxvKPbZ9ugNoTDPuNWyg86oXNDzJSe2f2wiFsa4ASXdjro4Tqc",
  "key38": "DhWXqbkDFzQ5aam3uRknM9hB58VnCrT65H2KjHxJ9D7z5tNdrviE5imdUwP4d2RrA6d4yV9MwW9zjAah5BUf1bN",
  "key39": "5LpkkPxHRdgdjRux1Np7G1sv5Un2pb4Poi3CZsTZpDgXN7siTFWd8guLtC51eSsci5dwrEbAwwr1gy6LmPU7cfvM",
  "key40": "3PQDVvNws1JUpasWo9H7dJXaPLbdf2rK79dGGNEQiDuX9seyXi2qm8CkCXE8QPVyFagnyxxkUirXc6kfstjpQKoa",
  "key41": "prVgs7CZaAaUEZE3Y9iyJ5yFMSGwTfZFeKkkH39urjDmMMcpnozUCz6kfBPSrpKGsDhCaFzdmVfT3VT7zpnCRF2"
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
