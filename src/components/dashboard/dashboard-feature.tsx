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
    "4AQq1y3XY5BNyrEH319T8sDWdwFU31rPPVST2mggmPdRpPNjbcwcJMuTpVnCruQeNLB98gePCiGWVXzVV9BHKae2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMsTEHWiN6uY5EULLfPhj8wHssivvwVStTo4Nc8wfZh548QEGBhDQzZ9g9GsUWGtUQNLsvhGN3ZQXG8HUDdJ6xh",
  "key1": "2iGoX9kZVdDSnd5TKFqj6xyBBcDiPeYHmRQw4p6tNnTXAqjehP7hU18DKqrUe21tRB6p5eKuDKeQFhiKVR8j123p",
  "key2": "32yeTTvYCtc2BQSDbkQCRHL2V9QxBZPabLmGj49SHrjEpfLpTw7HMzWfg8Mq68wAktBRXnHe5k4DdDhiXyp4cxrd",
  "key3": "26FaPba8ZxcxbjQ9hM1acChpm7dm4eMC5D5fNd3U3doJgzNPEvev7jLaBeZc7iQoz6kLAxvPic2wDHGFPXb9BvrW",
  "key4": "3wozZm9TXahHvrqVc7XEW4AyqZDMAWidLVZLRC1CbzLjNvTSQj2MpixoPzciRVEhqKFAbaSFHS47x5NwSJBf3PMd",
  "key5": "5xnVVHp2zhacGu9DfDR38cgkT7uBghsQG3nVYLgQJki9aGAtdEP3J9cfdEvo76FfHv4XhtEnKqTaMWJ9Q33mayvv",
  "key6": "5fBy3Xctqk51zVy6H1k9NaCjD1pKYDcr2fPVZ7a5hubkXS2KGqRE23uvKUgXE8xNvvqaauyzYX6atBBLuRt8c4FC",
  "key7": "4p2MPqW9iPZBsf1C3pAWkDstywJnmGEFnNkbKSCVwLHrdMVQnK5iFAxTLpFu1BPpXHPzfgjZben8knR94V94czTj",
  "key8": "2SWkDNSFMvuo2a2dgbWETLvtQgUngR9qYxYS9KWoPHDacxsfZnk6mbVsE9FzYRqkWWxUQzMdqrnTfzVnc1RjdrS",
  "key9": "4YHMAusK7DiE4zY4q4yaBKR8jhA3wVAa3c3ftkpUNSWK7subLwfX5tnXCJajKpes23U9Ybc6humyM447nMARqkJH",
  "key10": "3hMSXMAs58TDFNeUNfZhzuhHom1JwrYrdriMMNxyUGZccL1odfVTQXFfRxKxxuV5dwKtCJ8KCbUeDkS5rG3qfmUk",
  "key11": "3yxfMhqrQtta8d6zKcW9ZjTCp2kBK8QmCzvGzBkZVDt5gGN4ifWR4khSgb1gmWFEyUaJWEp6sVgsbA5gVfDZMTDe",
  "key12": "38tjEmP9mF2ywm9FktKb4XkqnYCA4YodDQ3kc4dFMZBXb3wqi2Q5kPS1Y2XeMb3K3BkcA94arBj2Xsn7WXPwz5bk",
  "key13": "4vMXLRjXJc8xakSBZFwz54ZezTbr5zhse22PAMbTtGq3VuvkuBCqAg9pgJLk4dgKmMYPeqRvyMESxQprG8Rc8RSz",
  "key14": "533Y311Hmb1WbCYddMBLNEw3qD1EBTodnEhzx8J3sJxTXBnSkKdxw4WS6vYFbiFMuMqonacDkHhxHM3vjU1Q8hcQ",
  "key15": "hoApMiJJeRPdBupgYVNro9V7Nuck5hfP9ZS7VD86JYY2Dx1hMSv7hxsB75vRMESjHxKYzWtP2bvvsATrn1Ty2mC",
  "key16": "3Fhidfcw3TS9sgWxvfAwJbmUBBHSkWyY4vHWef4BwHmAYq2oXd81iB1oVDitov2XhWkN1Mbw8pfTAM6VA1WPE6EP",
  "key17": "5JxGccvqEEjZBGSzqECUhbfRqnwbRYHgDG5BNxvDFhf3bdmpaWUARqqH91eWuDkf62JNvNHT6vzhY9tc9Djxk8Vj",
  "key18": "vtKJX9cWRLmEk3AneTqjLBRU2o3A1QxK7tsAUdyD99P1dLsvXxENV8yTdhiz92yeyyJzN4Vbw7m9yFSugwS7rmi",
  "key19": "4i2XREceT6dAVabkW7qAa38HcKYCkiRxJo3va479tp98H59G9AXJJrMFprcsyZPkExYW4Qa4DsthbpVq2Nmx6M1g",
  "key20": "wErMHGAhExiztwx2JCFw42AZsH5XsG8617mgAJa5LJv3zeoP1GzCcUPDr4NvhUsVTsbdsjP6Rjyjj4tRXhgMHyy",
  "key21": "21ob2aqD7s51HW4WtGh3YNzUEB1aZM2a6DExpb5jKuP1nvD6MuNbLkkXcNRanDFQuDWBEu5Bu9eiLTPPAES5cVN6",
  "key22": "2HqwQhWYZ91q8gnFbxnCDsbWZCkVFM6yvfFSR4UZtvLzVx3RY5ENogKLazgeMNeDMWeyGj6mARa2GTecp6EteCW4",
  "key23": "2Gzgfco64qysugZnLX46z3UY9YJEbwUBM8K7bjaew1u5c8er3UXtfSArigB3qrvchYzfrqMo9LWhopmcxWVckXXy",
  "key24": "4ScBCjS1isyUySJDUcTyHQYFVwivUWr8vQohX9AW54o6wjyePx4P4m695KyvAfDLD1gNup7DzkoKFxMiAEpsNdjf",
  "key25": "37s284paeheiy9LrCCjyj98gLdReqqVNKQmEma4JT5iAvgzjWV6uXfDZjJ4TZwUTkpbSA8qnrWZXhKH9MhiNcUwe",
  "key26": "3jehYWA4SVzVKR79HwYQqb3BVhf3GsXZR5cqwjkVBfYXNtgDs9BfTXmqFFMGkV7ufkbEKU15nBvsjreC9onykgsx",
  "key27": "4DAgqjGodE6L9ytuAcW6HQKUcg9nyRUc4DSSZjbx5zkcTxaGYQgHtEg4TXhj9HbNckRDZKonxzD1nxZsV6fPTZRV",
  "key28": "2qc236bFwsgG4FgGiJJLV3vexKZbim1mhFctQr5dxe6BxYFGBygTyyZE4hyVbuPEBkPkCyDPXVf5bMKJDj1QpHXh",
  "key29": "1GixAMV6NqoESuD6UzCYUtWCJinG8TkQAVYFydgAvyD8cJbaLiHZLyAmLQzCSy8tT9D4u1tBFme2Ag6FVZxu4i3",
  "key30": "3tQQYo4BtNoEs9yYK4ro58TiQxyd2xf69RfAHmyYH1kWVQW78pCNUUW8r5vfj9NNTBPMzXv3MxEGVhYcPEubGzMX",
  "key31": "3ENEvqMiTvLfWe1aHp2NP8NcBhHve2qcx4YNYyVBdXQW75VagVca8HpeRAD5fPTtiQrE3qAzVdde3WoZJ3FDx7E",
  "key32": "5wC1nZz37AspDe6hejadPkhhXfkUrCC8aU9mTA5odsNHkPptC8fW4ukwohyucQVspr9jzEy2J4nE1c9VEWJwdqAX",
  "key33": "26w3nuVyvmZ5Kprjv7rURqYBSLdSXGAk5aVvFRWHTLKUqPbTaZ1DThaQXStjw2nEsvHddp2q3bNT1orddjvgpgHK",
  "key34": "3Qqg3QEXf2DgwezuwYeb4GjLrZMx9gPY6ivLHUTQeYzqUkjQK8eTETY6U7MLgk4u9ZfZBeqmaSPwQ2z2XFjizpsR",
  "key35": "2B3xKwZnX2cPRy83HL9rWwq5ALGVCibfkvYTW5ZqN19WwATazFsm6KhPoeZ8xUuDAcfDWY5zQacMX67mKn1LZpta"
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
