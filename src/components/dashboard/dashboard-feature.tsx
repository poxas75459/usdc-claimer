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
    "2vkcJ94AHy5hjG2CHPK6XJGnTNzfjZvHHHH7har474B6KXsnMd6HixpnXTdDf3AZ6A4RKyTiAFY4WjPfpbcA8APy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63NerAdyiq6QK2Dj22MQvTVSayw8i6TP239Q3dE6QYwzwVQu6VL7jqMQ8pz3TXZivLcTquXcazY75GjH7EzNtWuY",
  "key1": "5shXLdfSMHgdSRegPdKSh9BUvvx1AGwzjc7az4wswEz8a4cyjbRqPvBKPBgwNmZGYpUCbpQzKZzWyLWXysMAE4xL",
  "key2": "5PKsK8EJmuG4Nf55Sh2Bv5pEBJxK9pDk1dMRgtqJ1PrbSyGewCZKnKz9fqqgf3bi2u71Ah3yoQduifc8MGcpHuqG",
  "key3": "P5RkpbVdY6Rtx18LPPWr8bxqRZpkda1fu5f2G8pYqT5mrpPHt3s4L4zY4WQXvs5gDymR5DnTcRMaTmtvnGQ6tFa",
  "key4": "4XBd2eHBgC75ky66yqgCL51VFMytNbwjRFxQzyTuXESKQqU9987k22vxe68DxiwcEuo7MRBCFrMN4VuT5oaQaFsr",
  "key5": "2jhzCWKQr2rAqXua6jaVXspKamPQA8mm2Y4uqFeNrwozKEhSHprcxmHaWyYWbg4HQ63Vqz7gKJKu3yqoJAtH58Jh",
  "key6": "547uDs12KtiWNTbRcAAp9KoyPB9gHaVdKyp5i84VajdmN5VKVxszgdC56mPmDhdH9Y8fjxxQD85ZUMRjehvfzuay",
  "key7": "QhwkLdKrMUTzJGxAfJLtqMtihzmsX1n3XoC6soJLJxJEp5kpwtxZSYHGN86vvmqMdLTM5FtWtbE7Lzov2dVeB6o",
  "key8": "5UwMd88hXweka9FtynB2NwLGusaHLVAh7xAswRS8pi5xhFrQ3n1hfnPWMsVbgCdon9rZispfXN9c14DFTTNSVFyj",
  "key9": "3C1Di7UoufBVWPwyF6m6phwytYSWo2sV1PapLhsKETnuDkQgMmqCxzoCT6MwD9WdA3mRsHp3EFLJYaEvBTjy9i3N",
  "key10": "7CGrUoPA8y3aNGy9EniXdbYwtcX7n9DGPb7kPzqXvtZ2zz7BdsxT56EHibCVtTL8P9TXgkhcUyY9T2jyfgTxCYn",
  "key11": "qzN6GZYuvKRx2GqcBRLLBiNcv7rwyi5uHrrnNdyL2v74U9JcYTc7pvbtzJabpiyQztauKgwJw5kyMtFxqt2u5ZH",
  "key12": "5nGnEedLHCfRmPZMvwfymVpbUBhC4RrPR4n81y7KtyNFihKDcicxTYKraNnKHawfJ9uQzr2zbY3mDiMJtQCteDDx",
  "key13": "3fvtWpxm2WcjZYkC7MnNxP9cN1HbA9VvZn3JQmQXfcxZVnjd6BUzctVyAgDkFRXgvx45NvwpUq9duZRJxA5WyVyg",
  "key14": "3NDRZM5G2HySBXiBwDhXwdwfU2DDZxFfv5emCyejZwkTnkF56aAqvLCVBhnBRNKNPxkvzp9ToX5Vs5JJrpHsAyjh",
  "key15": "2SRmNXgXoHJVnmGUbYyktur4i1TCz8cDZUdKSKFxwjsdDkmqxviH5tTkdk2cjYAMRe1gPazbH2jShL1wMSKtxMXf",
  "key16": "2p2hPWQcwziKo4aXEGxpTGjaDHuef6WCg6zCajSAJGNRm9pYKnQoY6MhFdx6XQzBeVuTxjHhYvfzGQmBJo4ryVDc",
  "key17": "2z9U9zquCXJNzdvZUratTXDzCrVbbz797v2B8Rq3ZerJ4gTrxuS7LT1qdUtDdKcr7rwhs281WmuMmdh5ctgVyABK",
  "key18": "3QEQFZbCk4zTVX4Z6E9jUuk6Vm8C8cmQ9SVhRBq9dkrwmu7Fcf1QytNzDxr3VMmv8L7F5dzQPuGgJN2cuVCq6nmW",
  "key19": "2estWJz4jgvkUUUaQMfSSKDohr8vpCU7AaagFEKJx5UQZqDRAe2EEEFugEpzGWHpMvuc3fMRbLGCFfYUBrne7ofv",
  "key20": "gYQ9WXkvXcFfKtePGMgzpqbrqsorrBCmSFRdCURox9Q4LeUuX2yhf2no2weJushMhVdzyTnkAPRwNQfWL97YeFe",
  "key21": "LZ8Q5P7FEX81T9AtYi4PWxaVD6Mh95fAmyNZaDXoHYCTBvjJyLPWVFC9Sy1Mnf2YWTNy6P5zgeB6bL8uS5Qnjm2",
  "key22": "2pCQK1prrhMZpzn8FwoUZZwWT6erAFi6zT7utxgoDQa6vjJ3dUVBqmKjAXEUGWSd8SDNVT8YHeafkLJBbCfvE7eN",
  "key23": "JbjnJkbBjh5vzwUQnKaVSW9eLUx3k6EXiZzkPNiYY6VzH1Ct2aqobFSUv6ykizGFcwLC7ofiiSXDCty88XmzP2Y",
  "key24": "8dZGmwisS6fsRdD8ZJRnMzE4ChsDG8aMXZ8hexNVgKW6k51Tkw7tyysC6WgsQ9tPehKhoLhDF7e1aqewyvKymDG",
  "key25": "622hhdxjwbu4iokfhdCAKyKAeE8CS8QgprB1SWzrh53oDsm6DWNGFzbPaX5c8dkNJqEEL7tV6GMs85H7RoFohXmV",
  "key26": "3KxdMJdJ6KVQ8qKpPGQZNMNmYRuHEd3UbpDjm3yKyseAb73YBW6F9NoDH44bVqYXRhQmU9Rq2qJq2yo3deMSpv8",
  "key27": "bjktV1brZfyjf5tVYsnVjR5co2LJq3Ja3RVV9iWDwMiWhq1qTSRcNNqkiwj9Sg9vzdrZEe4wwC9WMKbdnfGiJ1P",
  "key28": "2H2wGDyJqf9V7jBj2RA2tDJCBwaW6GuMPTokpzyH6Kazo7ShmF6bnfNUuRq1BnLYmccfMKUyfpz7H6HQr4qUGqCq",
  "key29": "2Q2NQxFe7zsv524xXKc4kEr5tNjrzfQgyE3xURyEzE5cJVLdngAZG78Tdkcnv5btnngY5bgSEZvpNz3U5XyYmkwG",
  "key30": "5561HJ8AtVbCpZme4jfUUBedh2QmEE9jJRJH5g8VisEGSvRVdK9RDwTJM3kDX6ntcQaLLGxB8ajtfFErSbT3XL5v",
  "key31": "3tgGfKNGvEY2FJbrNvc9fuHoPp6dsagsmDzg18EJV9RK9Sieo5xHhueQPpraQwPGGyThKYEWMGkLmU4VUDdDt1Wv",
  "key32": "URBGdYjhswgNYog7fGpKnMkS9hGiXxn72uAJPRR2G99jwBRL3yLXBJG7ZqSCMJW6GEmuGhWvcKkx9fuw5Vccrax",
  "key33": "5XBnQJYnChCKJ42Uu3NLZSteVpTxYMvfhMi8KJyU8DV1eyg5RbZkqYvrPVEtf41pUZZGeaJSLwCoaeAgdzXi1KAa",
  "key34": "4eLBN3656tkRHx8MMUA2116MEG4ixFN7DVW5W5D2qQR368mspXH4guMWo5zHoaiTTGDkdJxA6ZMoA1n6RqEazTGv",
  "key35": "4i1pPRPMVHNTqo66QCs83SkssccMxEdbYdZ8haH3TJjaKRvz2WzNZ9regwCcdY6SzAJiFRu177TVkUqkG8YRkBP9",
  "key36": "4WVSCfo1Y8QSrQJkKCbXdo25wSi5XzdYYtnjVvAUsTMhwVboNeoVmryZViC9ZnQGsDr2DLUzVzJmYTDggJZNTqCV",
  "key37": "xW5gdwHJNGC7X2qYtLhb5cAmPL96xb2jnSi74WtmSeZLLzpQkssPdKYYnzZxPzEZsKEAxiepegp93KwqxXsKXWJ",
  "key38": "9eTRyGca9HZBUKrD21sfb5zX9pRJVg5cbxn6t19ZFa79D6suKhKmnue81bPoCSc9ZEBLV427LL2SJ7nbV31E4QB",
  "key39": "2xKwqzCChSDMUHdFL5WniqrwDVPbM1Y9vuF96H4nvu8Dd8aitEBYz7SKcHUKxcx3edtwdjYsrWVC6uAH59qHai3j",
  "key40": "xQXjVL9pqfmy25235WhYcHiQFbJqGhd713RTH2qd9yVkshtcnCH3r6DXP9XJhkXxQR6cEibDLGM9AEx8fiMSwjh",
  "key41": "4SNSHPvvETPWyuYkJ4rD5J7KQyxJ1U3QTf9mSLrihcHTkcUC5Xws55VEGodZMGF6s2Vz7vD2dspNfetUp6y1k5H4",
  "key42": "5hsrwPZ1p3wyHNFTbH9tmxmeE6QNhd4nceMc3r3hZo9My2JjhCXGoADTYnRYUtKxP9YTfiwKAt4aJgnVRhcX3zne"
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
