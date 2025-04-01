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
    "3wBtbBvPWS9UWEYSUUYqt2VFw5qyaXtNATCe5dGLsvf8kDxsajSKMjJyibvZYSy7Wt4XzznfKnRKoTyFF44uK22S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXopJdS6RBFjfNd8SJfhQp9tKsKQs7p5PRynSvt3fjHPpRE99yabJMnTmfmhWu7CVgj3hHE6Z7LskHs4qBynKnr",
  "key1": "4va9kKRfdiefLSfv2VxYHwNofN2zTd4y5kAwF4443KTgsTC8JJBmH61W4XaUzgo1br4AAX9kUovSpKjmpypRDCfm",
  "key2": "Rb2XeUNPdDjyCApDTs1E7eMnfWTc9av25dt7jekmPVwUZfX9r2aco7LfQuC7GsEQtRaXfsescn57YBUiYfmhiu1",
  "key3": "Ao6f5TfVWv2T1XLPLPf5dgvRaDPTnVgtkxsox125bYSDuFgDSS7xjkuWEKhUWvXgsLLje4qWSXL1F7f7tQEEQXR",
  "key4": "54BCE7MjaZKThawXDsBZBQvJXBHZRtnj8MpJr3Lfa4ekWpbLT2DKKQou4AmGbTB4cX7jazFWsHxpVa3BX1eeKABS",
  "key5": "54o6AhmwvMFEVd6yDMHThvTGCrPRdPHvSHDHQ3DqMQFmTaoU3E2nATkntRh65Uk5iJryVpV7pezsVRy2GQB1C2ND",
  "key6": "4UUcbCkFrXpYGjZH9UwUU7mTK58mbAhH61R3ydcrAD91t4wRi2HnCEGLnk9u7wiXwM6VQYXnwrLu5m4hNQnmzV4q",
  "key7": "3BUPNDkmRnbiB1Z76xx2xpLvqwW5Tk7Not9g8Qz23JNUsB2YTeiTsiFggjSh155XRrDWd9Tq2yjS1EkaNa4Yismx",
  "key8": "4JVety5EUwAD2hYRauBU7TUYf9BvngwjJ7gDFJLurKBNcpvPcYANwFos32QFgP2cJ4TUddNuAWx173VCWFWcZGPv",
  "key9": "4UvBBqJUUdD1vPuMiAAyFH6SpjHjy26MFRRmDL8kmZgvZeNxxA9VV2LgSAaZ3qBpwyASjjHzyLvvgRsPkF4ut9Yv",
  "key10": "4ozLdcNVVnpwrCMFpfNUeNww9BEAkhWwyxiBpt7o8Cwc1E2wWVSQBL9vUH91k6N3SNXmZWeWWhfzfkADnMckptY4",
  "key11": "4BrMmVSgYnLBafRfKSnc6KPWBiPkKCPztmB9Aoo2K94KkCmY1Yj6sEwZrnzu9b7rAtBjAZteisAiLAawH9SDeXYG",
  "key12": "4cQdzoXj32bhtrmUzjpvTSRRcCjhfbR1pW4DaeR48qQjFJmUT262KyMo2Kr7XxEwsdrMeBWEiky6jsYbyKHsKQNX",
  "key13": "59vKfquSL62NmMrVaGJMRiRqoU2uzpbQUXRwiAJ969zRCFsRGkXyNwKnccxmyS14YEWZXhkMqdHFTc9Sbn4q7oNr",
  "key14": "5hy5sU7w81ug3msxzt6HkgDEtGU9JeYtjXbP6sPKAtD4VBWhS53xDh2uUF5UKTQ9rcmSaooZ6FiCZRk9XdDkhrqV",
  "key15": "d4bD7Tg85X7QjHYJ6jRM727h92CmAy1BCnxs5zQHVj9ewCmPqm93yDxieqcdse9k8UoZwoKieZtJ4e85nFpTZC8",
  "key16": "2u4wbspHsvTHjV32uZj2UmUsLGXACX4Rd6Pvj4cchspK3fvfje9ipYr6KpjjBMP7DUn2YXnEiNb9xh7RSHghj5HK",
  "key17": "c9rxw3NYmXsMM5tATra62DhxvaH5EUCfmSo96Y6LCuNnJRy3gtbFueSUPyc26LJwqBaEmYjtiD4M1WfHT58KzXq",
  "key18": "4C39vuPByahpSbifFr94GnoSEyyH7hkqPLTVCoz3WJcZen8wYadwdvCn8vffMain28Bb5qt8oThUGT13jK8e3hvL",
  "key19": "AQf7nSsh4MCeyj9aXnL17r4EPKRjnL5A4AmfRgDMUmQVEqvhCfR4cNfV3EXoGMFWWPfe94hJy64fVAMwACHgTbf",
  "key20": "66w7xJYFbVHbdGkQmss9AtsV7ydiqHWxktN5CDbvjK1UeKVh3J9LX37yU2aSDZBzbDEL9SdNQsEoQYtgvRxaRqsz",
  "key21": "2Z3Syh71ibAMq6S2FbxgtG3VFotE6EDvXzr6H1M3zf76SJSguaDxCSiJyf8bUA5W7EMWa7mUMhDrbkAG18MYk4gY",
  "key22": "52CRTVaZ5hnhZ5vhuDubrFvGxk3Ayggp98mQvr83dZaaakzMrogc1hBzY6a23k566MKLZjUXYFEaTPPEvxAeznLr",
  "key23": "6W1PUCH43vdj7CwiTJkHgqpiahcqDpQtx47r315bAZvzejerbeecxhg13xsXRPKBznZ4ozZoghpETNCBF3ZjnmX",
  "key24": "3rBkdmpSumdFK9veqdPfpx84JP7geeQzG25VBiZ5CXV5dJyqkobxCEmSrgfnLW8t1dfG3xSyxxR5UqzhGVMccXFT",
  "key25": "EEUKozZqkGCv7o6z2PaUywn4kXzgNzyp1xMvtPctwi7mV8CdZcPxuy7T9XDNzrJQWQ1FD76iJmt3dVo925B5YwR",
  "key26": "DVbj4YpR9v7oyZDqvWRAHGWRq1JknPsuvwBtvCRoy1r72jfpw8TW2UE1dqFUAYJkLUejwZvFKZ2YAvzLE8kGnP8",
  "key27": "5Ak8wvWTXvHoD1dq1imnSd8uuQX7kEcuuZL56LvF6x2gvezg9pXtPf4bPfkhvz3GWVdBtc1HMW5LJ6jxkukHjUuW",
  "key28": "7hQh6UhpNbp9uM7bUiVDQ4nUJgts1k8J74J3QtqdwcKXFxGCuvT24EaDc2kkZ2cqQx5tkop8m2eDn7JHX7Uacon",
  "key29": "L8sBV1JmNXutnvHjGZ3bwWkeKR4svm3W5kKuLWjCCWUELjyqigjhBbECKbBCbKguSs1wcoEGB4Q9bdkc3ZGqJyo",
  "key30": "qiPfvTRDHr3M2SxyrPiySZtuTwuNbu5xU5E96k3c8k9NNc6odrMfnHLLuDxxDYHwsnAadMiQTLitkrknJZ4mss8",
  "key31": "5MK3QRTVijQpVsEYoVU5CU7cd9zw2jKe2jgTmZ4srY9Prp4Ggkq51WTSewkcUPYKcL1ubdwF5ZsH6pmzkudrtq1A",
  "key32": "3tbTBMTh1owhAqMkhUtTaym2gnkdzUvgXkzmWWdxJHJsi9BmwKW2YvwnwYrcNbZ9kZbrpKtwP7gM1BHiCzuyH4p",
  "key33": "3xe7DjUZYatFsSTrX9xofqkUcA2YyooMA8PzNrzJLBfdyGKHtZRnD3sY1bWUb6MD86ARyb6xh1gnQqNFcs8GEKA5",
  "key34": "4ejKsWVyMrBH85cjmLv6vH4ztyLA5ehkDPz2jPL66K5CDsuAhAdqxzJBhTQoFdmAFfWWRoNEYzxBYzVZVcTQDfgF",
  "key35": "2Wn4tQCHzLKyCAZDHEye5xnHLJGSgb2YPLCKvvKfSQAiKoMeiWwBzHfA1qxcMXzKKxzRHZhYkEfWsscRQUVVMoNZ",
  "key36": "59NyUG3SDJXn28oDtKbX8xBymKK51n9G95s3ud7B3L7VSLmf1ZHGihFPE4KgSVK2pgPnzpCJ5NurGnG65o3uXCGQ",
  "key37": "2tepYXpL2ew7GdyarX5d9RrWBQZgJcGz3X26v9E4ErbuiiSuuLsmoCFPRTSsXy3DWUfVVgeoZorCZEKCYQrua2gp",
  "key38": "4Z1hyS58d4k8PqVGgSXbBr4ueM8hG5ju89jSqv8NHpAs3CDbVAHVEREA4apN5wEg7EQSa9ZCZiTLrriRg3abQa8n",
  "key39": "5DboVf9tiJVUpMei84s9RtH5H6Byxr6vjDDi66ky2aiuUXf5HaTyDczrZXFkPUHV8Ww3ZDCgAcm6xonN8QbHhhpw",
  "key40": "2Agy76ZLeUCu8VtfvnsoGmaPFodPeHa8cRzqaE4pMVhnLaEByKv3ZckvB59tLTb1RACvNL8aLAH3XRUgDUSakVSL",
  "key41": "26WU4UqXHjPhoFd4f9z11TefBLJpLb6pD6NCt9VC8w6EXepDLyFgymbkeRacRqmGauGdS1bdKRffbVN13tDXXRQi",
  "key42": "3F51Fmifv2GRwZer5PLqNGyMQcYJzBNR5mg3QcPnRP5Vn28GpaQ79pQ1m5dKoBtBs6mvdgSiFKPSkSVhsmYAm1KA",
  "key43": "5zRccQqvBbJoedBHMURcwDZf4bLAwSW1h1KCkfF7yvuuZTj8WSqfdrJgnYrBZtHEvuWJGkKPAxeBXM5B1S4PZyAV",
  "key44": "4Cf398J1Tx69x3feViTCTgWCtMfq8Wn2i3J917DndoCt8VyzuyEgDpbfbZoYxi7h8Wmb5tYARWFTdYCCoJ4SjDiM",
  "key45": "4iriNrKKEgRwsxrBdbXW3eVkC8raPUsP7JksRFd1ovjJKrtG5yrrBYiAAGAykzXk54xJYezxPm49pT5rQ3a9ziuc",
  "key46": "Sum8wp6o5isuGJJMaGkogyqs1BRG48tfVSUhovjirK21jX8jyRiVUZUMHQ4YHJdcrjbUGmLss5Q11bLBkEU6Ggw",
  "key47": "3VuxjWCHLWLaZkXPkH8aTRhaYw75byBtdcDSULhiTCBHMQdNHqMuL7SmEaRCsCFQoCbZfm6CvwejEACD1hXPRUhw"
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
