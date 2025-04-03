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
    "2e2Zucfgku4SjJnFsxSvyvqswJDMgLADfBYiHgjNiUDdJsQJBmZFYuPPqsJk3wkQDBpHFLp7hTahZ7oWKMvuG4J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P3ye8NMfav76r7HPHoyyRTm5ggFL1U57wZTQAfbNAzwnifHCnXHpUhAHsKQ19qjEWsTN6U31qSkmBoJBFTKHaf4",
  "key1": "53uQmV4pGcsZpr4GdMHHx6txDFQ882yAjyWfyLQmWRdapow9v5CJWUeVS5Z8yAMPnSrNfSvhN2XTXJRMzoGyzxnD",
  "key2": "5Lt4qnKRXBCZnAGeSNEG7LjFTyT5HTTCpFSMKJxTUuf1HLEfrmTx7mj3sEPWmAcUagoksWuhWu5SL1co44rsoPi3",
  "key3": "2kJfrRyUZ4kYM2rhpd5G7FC37YET3v7hztW5WeCH7CXgG573T5qxsn6pjFYBvwcdMXPwBBnTdX4LSmFCYVSEokqD",
  "key4": "4vrFK5d66U541SNFuE8Yu6h4fuKJ7wQv1NtfaKpCy92Cz6nG7w2bF3mbCUWNENhGEb4yDge7UNR2rcB58Cv2t7Ys",
  "key5": "2CXeSt5Qi5WbPumJLuztdcEtK7SFmEXJEabCPFFSZBdj82CQezDLhuSz4ip2riVWQTfTdTKuK5CLETbYa4Cai3u2",
  "key6": "4oHpRmzCX2J37TSm6kkajLT45YXdRNb3J8EuchpKVPkSPSTzQ87oUm9EcHDW9wp2bJFnTEd7QzgsJx4JiWpUEmst",
  "key7": "2SQeCgxZic6cGeQsvyBQKSgThgjTkiSEHPEesjadYhTuBnGT9eduSyM2AVyRN5uw6orGjgkviMnMjFrKT58u7Q9E",
  "key8": "4ehHGNGQxFDBKyKBnJzzxt6c9VZMmy7sDWbbHJsmEbobvbNzQG4JCTCDCDZdQryytM3VYQnmaZPQ4z7mGwkivPyc",
  "key9": "5kBgAAyz6vVxyE9vC5qMeK7CwpV1fJ8dmPNYZW83bsbMjuxnsfETyAf9GZ4t1KqeFLMLRNaV7FdQ5te8bGCp3bUe",
  "key10": "67AqZ85NUH3sDAiXDN8QG5LDynwDWNf4113CYDmseU6CfdqZarwq1fDvZLW7q6afUHqeHgxkd2LGAqHr9vnWmXda",
  "key11": "3a9Ct7YcNhgPKNnG7bToqAfCGtVjc1YeqjjXsuZrS61LzmNpW9KxvksAbJVCf57cbnBBW3kwY46TN1miALDsBuHp",
  "key12": "4QgduBHidKNdDtx4zCg4JpB7tH7QQNWeHrDdR9A5Fc2Ce3L6sj3rYCwPwEbJmyN3f3ogTtNgCsommk1EedYKBFLv",
  "key13": "51uwZdXWPoj6RNHi1UD1kmLtZSqpqNyntjTEZAPtvWVNu4FFAXxum2Jv9NenPPedC79kwPMpUvdq7N2nAK5BnmzL",
  "key14": "7v8U5P1fkTs88gXxe496q6gmy8eKHthKgHuLNtXHSxsLmYUw4v6jPz1KLYqqbcVab2YGSnUSQDk51ubCv11PDwL",
  "key15": "32jpFqNY4PsTiN71gxVD9Prws9cKAWoxzsfQwYsdYrhyEYsH5q8EX1kewMp2dsVKCrUzYLnvq3e3oFWgU7C9UBim",
  "key16": "AdzHjABZxHACz4VGT1HoxrgezCKPAqj2cZhdCmoE4ZLDjSi1vT1RQKsAH4NHe2tKujMUP2tUoqPCW8cL2TZ2zC3",
  "key17": "58bPwu9jAxWZx45w9cuYBjKyEnh5ELKUQnc8goRGdeU3V69pgriVtSbqdLo7D2ysn7Y1uEFsPKECJVgFszp7BAUL",
  "key18": "4srEftfEgJsqWAd7UV9tqrQAza7H1DvNoWdMLgZSRrUTGnsowSj2NqVgXfyDSdpRHY2SFdBwKnYtL1EsLVksf9Tv",
  "key19": "4NyMj6fVAC8VC8CkCUGMua6BBkJwDihpfGbGrDot5pDGfbnQTuhZWxMRBDhtd8Hqbb8rVxN3YgdPLbPWFZMts2TZ",
  "key20": "2VKGNz3Sd8pAeuD6yPFemQ3JXMggUdUBV4E5qsQWfjFvR9zWSR5kxXSBuQEmyNS6a68GQ6KU9qef1BVyryqWvfxp",
  "key21": "4dSpTvVLBXZiM5XjdscGwhr9hikWDgeZ9LgbG2fFNFzRPGnEBJAYvKWpcfXzcRQ43EVg5ttyvk1SbdZztMdgK1wJ",
  "key22": "XDAuzszNoKZnqwPmSm6y5J5LokWyvmhRiwohzRkmmYSPcab29josZeCAG6W1o8iZGWyMuTUf41rzxc1u5KTiGww",
  "key23": "5ZaA83uv85zAtxty5nSg7rKDYVMYtFyoLxY1B7roZ47AwNxoQbDQYBKFZjkV3EuZqEgKZXy55qo5FitJCSaZb84G",
  "key24": "2jogwp88D51CHUt9Z1mf1c6Lf8ngkwA5efAMeVNHY741kVNQw6wfzs5E6bVkbWQV8PwLQ5t9ukNYHfysgick9aB3",
  "key25": "59Nxr9CbAz83WmgFM15m3KdWqPNsj8CVYuWkg7GGDRp5D7GEM1qYVgH1Ejc52WricVZkxuqKgtbs5mue2RGJ6JcG",
  "key26": "4EXgUMLzxm5THG2WixLgH7wtKeUNWa2JFmn1DCYY1zukm34GE5WcCjph1hKJMhsnVq4RWJzmACbJhxWUdUijXYCb",
  "key27": "4xNVzz1oqtgVtSxtPRWeeg1kppt7Mvwe4tyNUZrefVfiCMzsf3WKHzXV2FLWYwzFd7uiZp6kGuFfyCgSuAHgmCeT",
  "key28": "5ZaVvmxW7DMNn7z6uCZrXafni8AFzvQTS9udqgR9Lkj2pfL6rU9qQ2g5CzMN4wvcKiiioRVnTFQfTywVZqHJU9b3",
  "key29": "4Q8e53KoLmNHo4F6M69C2aMFmGUMHU4zFGAc8W4xXuKvKgqEtkKFrb2hjNk37gB6y5DtLXowE8HeLBfM14d5bL8T"
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
