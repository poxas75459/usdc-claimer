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
    "31RfFfHU7Q1ieNhbRC3zDXYp5maE8ZASSjdGSNjvbVQckNPeWcMigK7aYR53YkqY4mw49uVek4NBQ1uEXfnkjgGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4niHHdLZ3Aai1H9BVEyo7UtjsdsUN3eY3byH8hPAQJED7sC3s4cySTuTjGqkuDQq6QUaUzPuMNizbhes8LwH33rN",
  "key1": "2fnCmBWgwPBK7eF2iayMrbCzdcRpGTuvfUzszvdCpyWBYV1cqsYV8nUTi3m8D8Gu8SoZGPPUWyg7dRzaqNmVzsyC",
  "key2": "tLNVDRAGMWtASkAnjrBH1sbDZBttiPB8nhfFaLs7iWN697ASr4B1DpATWpFrTCFdhxopmiKS9k9w5xKSLqVP1G6",
  "key3": "4XnrsaGNTJyjdLSjaVJRCa2FfUL3JW7dB8vqnQziX4awS6QTubKZsPXDRa9Eoen6iDQ9PtqATGWQ25dAtQwJNaa9",
  "key4": "3dGfjQZUAQMp47M6pxKRfissLcbtSCBMigims68dPAHkzJHP5zxTFFALDgXMdML34j4cSpyLipjo1ZbBPaPtEU7M",
  "key5": "4S1uVAAaKfnRdsi1fEHS7XhgERofR85CFDynC2CkzUyWw5r4kTSzuCmWjdLUZGNVb6hUfJfVPCfJZG9Ng8SxouJb",
  "key6": "2ZAsDbhMAR1cVqcsdUEMs9rBqvpwhgXSVwW32CJFFfsDb5MrQ7sxeBkwQMx538AXNo1VqJtR6QswKqEqZqXnxqW2",
  "key7": "P996KZbVHGU719Z37hBe9ALSJiPdNpXn4TM42sT7FQgu7BUQA2kK6PXZqtP4Dp6otRUbe7nQTZWTgBFy6n673ag",
  "key8": "sngGKEwnhK9Bxb2zC2F6rCWipSHzkdHvwnjGFLz4nMAHUdwrhN9HS5T63QujgPvWhzbXpzhgEaTXGrBSwQcNyMu",
  "key9": "wF3mzcLNjUZM7an84PZXRXEiSzZ9ytGKjRmqoSoznwU22Rrx6nPqWaZuBY2Qtw5iDzQfs3p3MrFXEnsSCbyXZx3",
  "key10": "3XkY32RhCjPFZeRWu6thpCUKCZntmzXaPkSArBqewRzxTCfJsWKWG1naiV3mpjnEgxqBuegZ5qeCzh3fs7Y9jXM1",
  "key11": "2bEjvcTnQP29GBnC2ZsHuDCaGuMLqhf7WxNEosBn1aRCFz9DvAJhDF26cWYzbyG5RDDzwGGJuctcuokP8QiZGC8X",
  "key12": "4kFsTD7Z4FKchRku5ZQjpMBviVYHKAR5R1x2bveRhLGEZ5eEkGRdDtAzCuqzD5QMRktnZcv2ZT7Y4iTVVBKtfpGr",
  "key13": "2q3tgdwDYsvneQSgCJMTf4hkQ5rYfhsNCqZYokapSyXKuRxDQrCMrYmGzNNNNrfYnTh6Wwjb8M9fmYssEHW2TXXY",
  "key14": "aPsm5fBTSCZyEbf7tNx4XnS5BEy3n3AznqdzQTJC6i1UFaSzVwyJscsP6HMHhdxC14Qx5ttqUKLXtsnPgmu2J5j",
  "key15": "486osSWahinNXZvWWeE63yG8vQcT4sYaCDZU9wXUwZQjkp9g3LQH5B7pXmKLYYXT5VB7wV8wbAJxHkx763V41kJx",
  "key16": "4Kg1Po1jNxsEXFGrhmX8P4knoaRfFrJU8xAgCq15hJMaTA7Dkq1pE1fcvwSfcKkAhWmk6md2WrASBJJfBQfLTAQK",
  "key17": "3djKY5PuH3kVziUpfZyrZyUMk5MaF3RxwL84SphrNKdqqxjLidrKb9bMPYZ9iPvGbMADvKr6y3UENSmMFivgQujv",
  "key18": "5fe1mZvcNnBpaPtZPbsfJdqiHw29ZLMvEKgoNJccgsRjUNneGNjGie3fXmGQUMRhyG68f71UXPNH7vAu6LrjtEFu",
  "key19": "5YGYQQQiUFZEmNV8QKL3TFWXec6bbidc73mEr5hpUnaeUTLktDrUNr9JccEQ2XoVQwddmWYPmmkYu7NQbdXSGMjs",
  "key20": "k8oTkjywhK8Cv6rUsqc4juBDqihKF5AabCXkCTTZw28XPgcxfZFW8QBME8uXe2NQqQnUVR9oydTf9rKTD991Jsn",
  "key21": "qAeqRsPuqkXUw2LBzqUyoJgs4P1FUq3djDPSyQKxUwXTVxqpUDe8kWf8sYb3ZZfAcnEYpypaD4tvZnyNtbg6p2C",
  "key22": "1nfaycTuudHPuUKp8zx8aJkTx4iWXj7QcEh3zySos4pL9V6yUrkJUV5MopYC6XHP1ZNknjcDLTJDZpDiV6Ld5Y6",
  "key23": "61h4CQ9X9s3pywEwsiGuHrpQJ2qhVRLgTy8vheY5fyAM69r4zNrjetdMs3LLeffm2CZZt7hjEDQtNn1fMAStpqMX",
  "key24": "PTsxtqY3eybBR93dD2cMNoX14MdkJDCouYeoCmwq6CVdHiTBq3efSo3mvAMzDbsWwoWMcVZHpjENUy75XxydCEC",
  "key25": "2owpoYNK9JNzxVqZK6i69PPbUxXkHFoFXcXD8k9DNYB7cyAbzumXdyaXMw1L422byzm2NeCm5KWac2odfTHzhHwG",
  "key26": "3oWpwBKzQ64jzT685uHjrpKDBbzgarY6x99qQFU6ogCZjknnV9Pa9J6xRmJDxnWx4G35GzftQALppQv8y3PPfW9q",
  "key27": "54pBodd4eEHtNZnKQUiTUrje5HtKeornsEWW4G7GBU7V74RsUNfNLg1q57NMzdA5hz1kj9pxeeK845NSjKM1M7T3",
  "key28": "3XAa59ak9vhbZErLfsSSqvDPywZd8t1uN7exQUYTDnPZRyLZjCdUP4ig36nAVnWPHjLuGz5rJnQocsHFWfcWwDv8",
  "key29": "3sKHdXakpcnfRkwSZLd3auwwkTxHxSCic3KeeJVEJZAuV6ZVpnyrYMa1P6YapnRc8iDeSVGD5U8zHCpwJ2GfmjWd",
  "key30": "24dTNBnMcoMQc1JbPBPnmHEYpqQN5ZD3hg7whiM4Sq2odHq1qv9zzY4dZxT16hW9jGk7GeZPtbkfBmp9vyvVLgCY",
  "key31": "2LazodsXJbkF59XQuWY94RPg5kv5Vx5JmuT5ofmyLBapmDaA6aecUJ6M8yqc2biGwqNhXZWSHvztuUoip5GtzcW6",
  "key32": "5t9eaxkHkk2px1Pr2wrGhD918XyEtNBkNDpfqjYKsKtNp9MBnYdMBTrAtV5jBiXFrNJ4CAVrmvst71mhrGzFc7KL",
  "key33": "3QETQzcJdN6Q21ds2zSSCefbCch6cR7nucCXrf36FB4NbdgbKTLom2d3HkKmF5sRr8pVhGar5LGeQqx8yjPANcb6",
  "key34": "R33wm1a2acnmDRSsY499SdeKorNmcEhZBRvtqCExiEUCsohZTM8bpX4Jiq5qZRQ2jYFC38fKJeFZCdxtCUstckH"
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
