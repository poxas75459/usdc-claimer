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
    "3m2au6mZdf81Jgda9mTm1itqM7wZNviSkkLFqavbiW4YpG1W7X89DGqAxLut6CSYH439AKZWzysNxXYoVU1iCFFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42n3ioPAsxpNxXxASRQ9JpiyvtvyXpfmvgu42mMSHbMd4Rehb24bLd1v5HuqAHJ8nQUvBW82wGBTMDkUU1m9pQa3",
  "key1": "3iie2YLsxMpAEj1W4LAKxVkoYk8kagFGGrBzTL4GextKYUwfwuUCzgM9rqJrPWq6qnf5fCvjsKcb5vsJ32zxXNKp",
  "key2": "5MaoUX8twkvLywfZ1xQuskFZeggTs7wt8XU8YYdW9utbDR12d8bye7GYYBm7U63YMdGc5sCYLTaiaVkpddNu6VHo",
  "key3": "4MjcCcuAXKpEbhXYa26WkHUYfWjjH5rGuHz3ZTxfGAaw6u7bZgRqrBN1e7LD5CmG3ett6htXA9uBcSfJTE7uAx6a",
  "key4": "2MLDsK1VFuCVXAotb82h42TrYYrboLDvuZQrHErtFPCH998YC18EW1NQehFGz3FkwtoxxDyrBn9Dd9LdeygV4KBZ",
  "key5": "3NrJfSTMQ3ZcnaxE26wyEtZznFQ9khffJ8KQMqc9MJvDoKDBdXkd4Ewh8NNwssivgrNo4bA3xnMEDtQLVCUPLzc",
  "key6": "2vXBvgKuCqtQF7Q3VqJh1KYya5TroBc4pq28FKCUtbW65hBwTp6h3EWi7BXXpWaPsG4E2ZysFVnGyxMJpFXejH1s",
  "key7": "3S8o8o1U8VKnHtDH2y15vu1Cfdze1xV7NeRwdejrG4TCrQQLFmgE3hy8kNQK7tNzJaz8CHGZ72RpDC1u42YB9QY2",
  "key8": "2DpDLBCD9GpWZD4s1zD6SRTuw4pfen2R2w2y23eDeMDP3J2kbuzdLrDbQELyYZr2UD7dd6fzkPYh2UtFwCRhfnmU",
  "key9": "ZBVFRSA5EUKR6feXmnjqGmwf957vc31KtTvm8PG8h47gSjDH6w9wT9owop7sQhGxSDmfu9xzAQr6FE4SvJyrffZ",
  "key10": "4rutCJdsWA2kgm7kCKnixsqfaoasQto13MDP19XJ64HEJ4G52e8eW1t5RTknW8WxpFG1HSV7f71bvsbTyV2jsL26",
  "key11": "Uiru2MugtftzXWRC2J32PDYCcN64ZxqW3FyQE8eSu9bY7RhWUfYYougx86HomHeyategWdq9Lgbgy4DmxvzqQTb",
  "key12": "5b1FLJp7rzGAsH4HC3zyfaEnmpKGm5FqF5ijHKEcnPHPD5tENjpBC6SYRCfjdPc5j7amJGg4NThqDseUytrNEXHY",
  "key13": "5iUSG6tMs4wgKM1UgzKFgnUjyoMg5nRcJqCnLksuWLTLdnZEF885T4acUiPP5nbSQS9T4QTSM5ckRQjLwJLwSfFh",
  "key14": "4fRMNtPRb2VXMwrAP12aViZG34bBf2AQbjP2kaS3CsYxyYeYM7DVxH1T9CXpQNoUBTm8YUwJHmMAMrrqK1r3Tad6",
  "key15": "33AW35RZXghQGn9w63MuRvQdGAvHExNU7f1rRtZTogucAw8d9mYwVFwXoZSVb8gf26NDJv7DiVDZnsFPyQh6CqPA",
  "key16": "2M1epDvnys6rjHynp9rRMhF5iW3QVUbetNg3DVhvb8YLMoXF1qVfJmecdpxzgJ6fmSuAzjm6jPMCLxGySvfCGEMZ",
  "key17": "3cfeX48XmFSRwU3GJ6cUwSQeGjEKs4JRRoBDnrhqWycW4bU2xuFdmwwgoQ1EZZVZbqzq9A6iyhD4bTLmsyMWUc49",
  "key18": "52hxPb2M3KJ9FBVkkstFmesALiCHWGEUE965wYPksXNR8ZzsvqvoKygwGSRtrSx5da4FeErH4vAR5gXhgVYBbbWe",
  "key19": "22c5u4mX99MbqrFK28yxH4AViunHRpLvVcJPFcbVpnERTfi9QBg9XiadkDczpqc5oJipuYRtK43rdxm2aaPxYYX8",
  "key20": "ARh7d7X8STtLE5JNBonUh7Xf157gVDzr8wcmrvoNKJez9iTuyUkAtwJLZR6GEjVBj2Qg5L97J3FjbtLBwZePcuv",
  "key21": "3fNx2KkfcWgezSCTu8kviqMPvfpKjAxrPkd942savCpJ2arJyBW5xK1g4Gukho9tizddisprq3pCCjMTi1697nia",
  "key22": "5RA8MMCTzCnLdVXmPjSTeWREs6LT5ZNoxqfGozcgrocg3pmDcEfoCbNVKdTXPAdLZoUKGURMe4wukQVtA7tMbamj",
  "key23": "PMrKcjSgRnbpKCqKtTf5AV7Lhi976GtckhAtwHLAkZfxsLWJHqbP6R9CF9pYez9QcfE4AShak7vsrCgBzWrp6UF",
  "key24": "5hiRd3DcPYcR88FMMpuav5ft7tsCzxaxihNuHWNi83oeKtxtFVw36mqDyHP1UTv961CTuzUvgVG3wVdNfnMcVu8p",
  "key25": "dk23MmPjYqy6vm1c1YKFLDyAUs13FCKSKdZphinWqyoHrb7RffVmBkWZyY7Wn5zXz3Gd3uThdzEDvPa5EuhkpC6",
  "key26": "4MvzsYP8JneLhgq9thpUgsm9TJ54BgwiR8T5X9YP9W7L8kX47SQDpuzFa6YAnepYxTC88ePRwjg4MgU1429dY8Cj",
  "key27": "2pK2aN66Hw9zURpMMqL1Fd8Ud5Z8EpXH2ucjES9E5yjdLjirfVcb79Tnowg2rQvKWExK1To6JcPGSNHfjn2uPbKH",
  "key28": "36w63RySxFD22j5YLrWTdtK95yadZgA7iAH5GNpWj4VB4Ft7bQBUYWb1qhqrBNKh7pfsZrpCFpUe3B8pQKJTLRsq",
  "key29": "4DAQboLgQJ2aEUmcJMN8RG2rgdXxkGPQpBbUsV1gBMMisZutpWY3hS7H243kpBwMtvy5qaw14oFZaqncX8jbYqvZ",
  "key30": "t51BreDpQ3XxH5xhcPPT2k2c1zMc1Hyh8DbxE5Vp3DYnWcCz1KBopY4CZqNg9arG9kZP1EsMUiEJMDeK62f2ERz",
  "key31": "2xApJ1oP7ZwyyciLtFHy5LaF8QFFAzAqsV2ACB86RCqJUxvHVk9Bn68gbniHossqDRGbEQw9Ge8Kv446uD1JZKV3",
  "key32": "4yV2iW1dE7ipTTyUUKAS8FDK7vNaD7RzpoaSQc4qYJhkA9rmoo6UeSwnDA5GsDBkAtDTaZJ3x2Um8QDxr8afRmXJ",
  "key33": "3wbz61RBSPgyThgK8g3uwHEJsUU75MSo1JpLbWoEGEiFuzUVmgS1GCDRT8RFTMSgHnR6nuXtvb7evjBgX2sQ6EVV",
  "key34": "2J66uhTjfpBfA7FZ9P1yXDKz5T9yaGEjDA6w6nMv9ugMFqoHsakhmKoFZxEZ3V46n4Tdq2gGydqhDGgto1dayKn8",
  "key35": "MdTPPGrwotmcDXbSdHDJ2gvyoPzMnu3dKS3rb3HZyvx1G9JVd357MkaF3oxZFunTV2Dke6SpnxSmKKiHEGHyh1X"
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
