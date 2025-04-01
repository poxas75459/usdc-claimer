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
    "54m96bTfv2se3R8LJTNPrjjx7SVbZ88KabQTbmNR5YEqrJZGZkBVMSWd18UziRRzmRLTmo4v2dy7WLzYcUCFL5tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJXNxafhN4vGfLGtsi4qwXWUabUx3V8HcDoERMpQycm29X8mU8ng3ZakncmBYmyREL3WYk1oQtK3C9EamA4KubW",
  "key1": "4gpHZR75pYApU7nMbxTyNRCpMBfUdZ3cKMcbktyRgpfdCiya4LyCcbqmf4AwgUWorF8V4VDHuaAubXrK1MyNdbpa",
  "key2": "4nW9jsuDMQbKcrKSArSSH71ovoCPUXNS8sG3fRowYWoVmEiec2ximpovNeSDdsZRJDNSjZKAw4RTVXtFft8Sue7S",
  "key3": "2H74wYk7YVLEwnDWaiTTSroEfnxJKdVLV8764dXVwLbB86yTYzG6x7XZJ8KWhtJb2vFz8XxJuVdKamKkBdfKt4KT",
  "key4": "58RJYerBvxkzKNGAVNMajvrWpXdSSWB3mHT4ZgeCZ5i2Q5tmarWfgg7h6a3RasKFZRTKAJ6NZ6phYi7hFXCDQPWi",
  "key5": "yErJQGLXSLbnC13CdhKWxVh4QXawVCbfaE72h624ceBmTE1FzzDztgfVPkRyNfC7QazFTNbo7nKGp4FxhFFVkvq",
  "key6": "3vrz8TFHb4rvNfoqoPX9oq14y4VGaj1KFUEVS6hibk9jAvCjKGwFtcyMLAB9AwYnC82fqyPBGsaBzaazqEV1PcUN",
  "key7": "2S7zrUhzhjwwGDL1Qf4DDTwSLD5mv3hLjLq2YTQubfqQcyGj15RsuFLTGSHKgA4Uj1GW7qAFamkwW5vRyLKACGfs",
  "key8": "64ZUDYq1YHUHgTzRBpJkUdLH2CQ2Zbqq1Kj1CUk3MJtk32jeUhMBaTRrQhr885G6XNNicwvKVDMV5jZZsRtHwkVy",
  "key9": "5GD2ki9WnWUp1PYJKtNAMvBuhMJYUuEVNw6ZGTxvzKgAckXYCz8ySwyTmvU82z13sE2RMrmp3iFSoYczN1vcEyrd",
  "key10": "367E7wLaxff98yiJnZTNJ83UknwQWGo1TwaRhUwnTadJLFFzbf1gKa8WJTGuUM3LfmkNuadrbhfHS34sZx4YRnGp",
  "key11": "424RHw6tdiZxpvvNf6ErLFvkjNMWsMbw2JAso7Hx8WYBJ3FtjEx99b6g6yG2RxAob4BwwGMZCwYnfE33x7RbyECN",
  "key12": "4uj51T5kY7RsDJCyRKTrmYknSommjntdoF4cyX9aseLHCsX5gyfqZAzGexk8mR7Rt77tAyvDwzdwNqPbqKhW6Kba",
  "key13": "2bJjo5Qb9zCJ8GFtFrQWRirBRuWXBmmesP1DKBssgguuXhTYsLvZic6f45Jey8aUqzjT9afQMJDP3e9RREezJJBH",
  "key14": "UwdWdjt13sG9bhxExEcctnCAkPffygcw96FTCc4TKYEy8kwco4C44ZAZFC3Bxi8XKdggXR2ayLqxEZBVLbvwQA6",
  "key15": "4tGxyc9KnCVAu37iwuwL18ABrRvrMqutcGxyhfxZL4msRFRnvhAsdxuDjEY6HKQUTd65uLYxYHDv2EshtwuqjZM6",
  "key16": "3VzqCgFuCZfkJpdTgbB9wfkZZJmBZ29CAqFvcN4wZkopkQsDsEYtYVNoMLakcqBzT4YGFJsKuEaCqupzj5cFUDYs",
  "key17": "2zTvv2X4mjb6tYUwVHPf95Nbbs8mV8YwF3LS2CoCFgeQfRscHhVzTXF3vxerUsG8qTwLMtEVtiZRgSF79SJqMot5",
  "key18": "HjkLnvs8fJgVnM2Ps3cFyoz79ZMYKhj8NnYYiVoKwqTXjjMX32Vv17Tct7vYNbC2SwJoCBsN2Gdy4pDgeWoSAi8",
  "key19": "2bJ6LLTTc7MPMVDnStUtqroGmTGWPrGNHB2Lk8HothUWNWDxwDNGE9AuAMBsEz6mgBHRMQwpqu8mmeyeBoj1eGg5",
  "key20": "3i5LAE8xwpjHUtTEeVnyKzXxAfFeuWYgvv1GcbTbCUN1SXc82S27TV8FVBrSX5s2xwkWGG5kvBCeKywDewvJAJF8",
  "key21": "4DCajvXMqcaW4PMi3dzhwGMpuSjBVqvDjDLnWKWgnqGniCFJWpP1Pd9N1vC6omNLdJCNkUVrZfytSSCdpLHMpETL",
  "key22": "2i5WiCuYdHR3U4st7F2NfN8WbiqTxjn5g3B43xqf8tVMUKb6GZT4yqKDGFYXYyMPVNzbEPJPADUcbi4Wo8vii99E",
  "key23": "4MqdoEg9KCdW5gm3BgKD4eaxDQdoBjDwMnXhUZfLv9fHQ35UANsxZgHEn4GGwaP2bJhfvviQRSAKnaV1zBMSE62D",
  "key24": "5a8jrH4zoPabNhUqCRmCxoTrHoRguJ3FXKjkbkWe3HNADEFkeGkJQT5iPqRkwMqjDu9oDNvEtvUJ5F5L7N9dm8Vg",
  "key25": "26H9a9QrQm537YS7kP7DhnJuYQm92Za7tjHdFWAi3fw7U1WDaF9z5HgPzVPNeq2z9Jj5u393FUADZNij6xcjkBtQ",
  "key26": "wroPMKBKmLb2KVScWDWaRnj1bvHTCVUznCn858z4AHm7U8FuqGJJ8gd53eb4cDwUk996bsfaLqdLuJNCkqrFHJM",
  "key27": "4xEAp9Zq17QwbkVaZeMfENVeRYhHuUYvNj4MbCbfoKMaaZHKxLNAXtskT1BmMgLa9RfAgGTK1t7hbXQyumD1iMjb",
  "key28": "51PzwyneJ3XkwxQB2NsxFiTRkdixXHuzFHT4DtHhkao3CCWAutDJaBZAAnnTHe6t4inoapfh9kBLTr3z3ZzuNYMx",
  "key29": "5JDUqq5FSvs7BwbEtZNDtaTcWysrVR7phXKHMQwru3cCBq3LG4NtHfcjxYJ5ydEpMutZM1SxmgvLaacxuGQCqnrS",
  "key30": "5C9D9y9mQoE1jRkFY3XTnjLoJGTRyBmLosZsBAu87K2T11bj84CC3V8QDTSJWduCmeBvtSYacCuRCDgaLjDgBr2F",
  "key31": "5bwwPhCNeEkWdDFnPXhyRin6cBHuqLrPegcZgHjjJgU5DtYnGfPa4foe6ba8Xts42qQrDZAyfnaMoYi3u9FTDtrS",
  "key32": "2yzSqbvBNSyfXrsPDNt6s2ceHm3T5XidyLJ29y3PgJBD8R2CBDFDnvb4ZtAWTbLrwND4AadpGHCF1mSjSxYf8yq5",
  "key33": "3j7twNhHWe1eCUEyebuRsEBbAN3ZTfdbDN1XMrUXeGFXje227gRNUYd6vjSaaf115DCmjyMbb5wRhaLRSuGSRUCA",
  "key34": "5Y2aePtbpqH33tgDBh7JGJZDbyLP8UvzPMKz9aHPmeAPqYgzq6HESg8VHu7MFwP8i6TnQo1jCGAC8jiW2EuhE4HB",
  "key35": "4sKJKJfTrVJuuiE2GRKw55bpLww57Qgx14amVAUgzU8cN16tUzD8QMmPV4vHvcnBxfMBt4N3ni7pcFgWccNBDXp7",
  "key36": "2sanEfV5iBRHqvC92xEgCNKsG3ZoGLN5suUTThqhj3oqXDFXvtqGBu7ThcXMNQhLxUKcegEjANSgppPRN4CyVaLg",
  "key37": "2suGLR28jWf28AsFYMooZkMLPP7x9Com8Gxzoooa9U2GX3mQoiJfASfZgYqiPNeFf794s58EFdKgiipwAQ6MAU1J",
  "key38": "Vxvq2qtab8B2gXkuNAWu5gdUVxaivgovddgER4cuj3GTb76hwZrqTRGEtmvCB8aJvA2vFTPzz1NkDLxvC7wDFCC",
  "key39": "5v6dPPxvG5E8P5DTeMaCPa49aNXCpQn8RfBXNZSdQVs1wjbe3WWfc2u3QhX3P1WrKDGyEiYHb4ASsp3j2nTDpLgU",
  "key40": "2gT4fjUDVXeZ58VawWMXxAWddwHv2HuYxXPRaHFJ6D3W9ekHNLJtUVZF3P3jzMorFFVybDKdy7w2SM6EVPm75DsJ",
  "key41": "a4nuuY5knTZLiC7nRrpi6Wxm3d1rubtF7d9CfJ14nAJoqZ1x3CWquoKGJm3nMoMwzyrCRWxwR5fZMcgwrRX5YwC",
  "key42": "PCLWJoze5pBYpEFMJfTm1jbzWgYPoM35PPRcZxb5tGyNHpncPurcJPJ2mJmvuiPwssNx3cPa2UCiduQTWk1j2LQ",
  "key43": "4RZ4iJTzwtjuDuLLXHeX5tZ6wMzVxzcGVm7swsMggPUxVkAENZExCYPp28bzq9RkyBU2cwzG8hWRZkiFyy4KuaDK",
  "key44": "2iXrKVEJoNJ4tQzGn3VbequnDuYPu9wVL2DqHANP8aHGQbFciEPkYcriRRokAQjqHXMo9fCBMB64TStT9D7vkTLH",
  "key45": "4iC8TwboH1Hj9Xanday16gL8USTP7DQgkiAATUVfWxDUNKYbdVtPfsZk6iT3v4v3Bqvuos3WEgPrBDkBqsTztut",
  "key46": "2eveq5zWHT2o5UNmFj2xh2KvT2SKDFGiL2S4kK93betD6e1KW9XWdaWwaU3Cjq2PwCUvQhutLH2QPPLhYExX3558",
  "key47": "4bXbC54dJeKQtLW4tmwDveBaTkd7ddAPfJX19ab3hkXrCUiKNddNbJccVUqWQpFkLZqPCTCDUQSwBk5Bf2JYFDBK"
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
