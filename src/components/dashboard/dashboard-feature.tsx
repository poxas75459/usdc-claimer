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
    "35UgH9YsCsEt7jbhLwVNeTbRHtmVbBP2QxrdjMGDSLZgLrrR5HT8UFe3kwe7y6SGK4Pugp7pAmBKF7iKmKczyxTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jk8vJuyJdqa1YAYqVPouQjV2qJkzKZ1NWV81BZH4PxcX7hpzdJDgSQFpvJzkw1KaffrFStJmtJCxzsPNF4opiU5",
  "key1": "4KoF294YDfxHNNqugYz8pYd8HCCGAFdtBQyCGpoPqeaRBC7a363Eq7motMM3ECcR6xDC41vXUcwd1NttrfbAL98k",
  "key2": "3JYpo5cYdzzCKpTEC8b3L7teczd3jANcJ7BSNhc28GfE9E5b3LJ2ajZWgrUuX5dmQUFF3MGHR62Zfw3RkxDjY8Vq",
  "key3": "4VXZr3ybQZzjmRarLjBYpBHAqhSoTwx35Wn9yzN4dyMkPRcKrMjVMcCU7qqCpBsqgqjEeQkoEYncqGNDEgHSmuSL",
  "key4": "4k63XcoKj5VWupMsPirGNrViCEBteyP8bKXHV7ipyvho1rye3DgtUSCK8Mw8zJAS2ouepezsJ2ZyBP9okJW12eAr",
  "key5": "5ffV81uL5imL9z3HYXHBeU22ZMNZDs451LcNLJ3VKqt6AN4g8dHvWmWkVhN2D3wY5YgMEMcCxGv9kyA3CPsrQs4g",
  "key6": "qxy1FfWrz7ZXRu4FCfZ5Ev7mNqo9LRW6edwQXEfF9Gw6SuoST1WHpxnzABYMDm29C4ZGiFEiPfYoQZ9jwB2CEYN",
  "key7": "cfCzne84wqg54k5WQTvigp7baLGSpn1N6wkTmXxzXUKAQDJxcEN1nNLKbGyuhewLxXvMsHR4yUTBaAbWzLEvDdz",
  "key8": "22vPnWsySzwWuzWFYFxNgsUn7wBDRCePyhEjyEf6XYjSkH4GxfWaD8KhEUmjtuJjjouNcnzA9kJc5T7H6XtYzQnA",
  "key9": "675CAiXjqGYXWajPHY39hUYXRhQeXEbUHhiAgRoZRKWXzPbcVnN1uvxhNPVFnaByAzLyfGwVsaY7C2cU2pCLHWsZ",
  "key10": "4x7nAXd8abhZvqFPqQSYBKjbLuFGqFEY3MAqbs5y8mfKRh3MBtoB1hxHBfeUk49KuFGKPzijrpg8DzvzFhE2rYUb",
  "key11": "4rGhhPHtzWeYMdAGwZfFUiKEZUTGDuDHMgoQ37YNAAwmSTLr31F88Va7GgvwhqC1sgVD6QgTcSjtokCY1dwrZrPm",
  "key12": "2QqYRfaakjKTqASvZTmfjMi7xZXZNE1hgUgiEXhAghaCgZSCfaUyDReGi2hgYq9wYHosXrkqHUT8iJYSsqzGN7Rd",
  "key13": "mvv1swf6hbZCaQkjzr1q72KgjMHdYQok8UWbiaMZKxAAP9yzA82s856fJnf9Y6BLXPTeq7tyYWYAJFwviPsPGhC",
  "key14": "4RuGQBJP225XvufTzioezSSXV1h2iS1iVz4g5K1D7QzxEaLXYcxAGHKe4p7b534kNEDjVi8u65b43ddietyL8W7G",
  "key15": "3zDJRmeEv7EHZqAJbUdX7a2zV4J3z41uqBk7ktVtJ2twRrxFC8W14thsLuDvUGn8MX21ddcTRxdYXY6hKDMyj2My",
  "key16": "3LEHYTFeTWdbbEqD5vH38TH1oGg2nxECgp2VifaxkMCXjJxp4EfbEZdHQMsK5MoummexJNS86KBHC97CpknE4pLn",
  "key17": "KgFhFwHAJq5togcaoao5iKA3i2xrpbLA2LSnJfjAGCDyz25vXiG7x5veHUvPdnG7riKos4CDhomwpX8bbDcY1BE",
  "key18": "3Sk2fm6WinLsMKcnhmYkFFnBRNReCrfazo3Dm8DJCpT1eKU283tYTrvNR72Ac9uzmdHWgCQ63tgb9Hr1U9xSTGNQ",
  "key19": "5u9tGG3PRdWhNWMBjgxe3b5xHmjiB9qwi7nFsionsrPXeXGcFzC8acALUQRjprQqyqxsz9EBi6e2RXcynQVhGJVE",
  "key20": "37CrQvTiDeptjW6mm8nj1LEHLayfbkybTK2AsvqHpEaLfuX2VAM8mxy164RGEEyNZaSBRgrbUPyvS25KtWGzNtf8",
  "key21": "ZbYVd32PWUkFtJrtnYWaeqtzBsCUzfVWEL5Z34aTvomAJfVpARkrJjmCtDtHPvUX35Caaaq9Qx6p2a3ZY6mwXg8",
  "key22": "5jWgXSoggp5JtQqTXa39K1WcxY6z4CD8AUa29yKsyqSsjGDyFYeYyMQDT2eaGE9dZM7xVCBoub8i4g2d9pLCWJin",
  "key23": "5kUX1ai1GndF119a8B4nSffGTSuet6tBcjBQUJinPLp1CUCEYsb6kqG9rhopQyqhNoRBcHXkEfao7SvMcpp4Vn7",
  "key24": "4fDfuentFfBq5ojULFfbNGaYiBsKc2RuUFnUMP3RgkQ5hm954HXuET7MqC8mDLaxYCVFaadmihs66foAW5EmKa2a",
  "key25": "dEz1jWyuU5a5SaTPkC9hvj9CrxJ9t5c5NjV3TpaJzAuPhG2fcEsWZmSANBzxUJdYpfaQDXhDcNmL2q2TDZApsD2",
  "key26": "2n8QEQGgxwHrsvcbqdYdxmPQ3BodQn4kUFFwVKF8QUU6HvCtqy6fght6ciHs4Mj4e28GAcVJQWaHDr6hsc8ihJYr",
  "key27": "2tKy3XqGJeH8AaNYtmBudWk7x4U1vhfNK45udGhTAKh4hSvKrFBAM497LB2k1hB6Joj64w35unrfvprLHS69bghJ",
  "key28": "1Apks6ZMoxJB2G3JwxuyuMqMy4jfk1kFsMrNTYf7ctmTRmnAPJrTKCpyDcdgafhvJjfq7sgbRxVrkAFii1FQ9uC",
  "key29": "46yuvim4CT35Cj2DV1ub43w4Xk1KxcuXohLmaLAKPqq1dd5sCFMuApNdwGstzi4xLHTQdLKH85ce8FgtRpCHmao5",
  "key30": "4hVQS1nr5LPcGUk37Xmqm1BKjVhBYS3FWBvfuhdxER3J9MDxNd3Xcbgubrp6dru3eDv7V6pxCq7VE39UqrSZi3Tf",
  "key31": "xFvEufHMSPH8tWsw1umuA4soZHprZZsxwYn17BdNGUy9k1MuQPSSHUdhAccpavt9Kt1k58bkzVGBQ7HotbxBxo7",
  "key32": "5vGAJHQ3vWHJAAT7RegWdfc3j1zxMRQAWSNZ6pSH9wz8o6XfN7xL1CxNUvcaUAQnsy6FA5QNEwnRtMKWo9Sr1QMj",
  "key33": "3sb1az4mhCD3UCHkmdm77haxCrT6qC4RoQeX88pfbGoYMkkUX2Maama46mmDfdLFcXsf6HQpugpqE6wEZ711qjy9",
  "key34": "bkJXkVPRTCkcMn4BRx5ZgMJri5qfbHwhRYJKy7uxnSRJDJmiWTjsxh9HBxLBe2oBdbySqGw8ty3EzoRmzo3tzkZ",
  "key35": "2PW1R32SDcu7TxxYfbW12YKM9AxQBJwGhppckZ1Q2mKsGvHR7TjeFKXNGzwDUsGsM2vWaeN3ZKtFy2AyxtTjcd6y",
  "key36": "yDY38WWrD8zbsFTYuxrmVoZhPyA3BkxN3tsupUu72c5HYgHHHSyCJZ7hCgVwuq7eHrEevcvZAdCTf9Z9Fq6PzUo",
  "key37": "hwUjL5qYNP4GV1tFhrVWYVTSWHWngbUP1GQ4AqBrMprpwXPwcuVzRG26zHuBVfBv6jk7whPfoAXdTF3yXQ877Bm",
  "key38": "64AiP2ZQXU9jE6dpSeMjC6AsHc63X7yjuEeZH6J4wa7pD63essjHpZSHd847YTUApKioRcWcDXRQ8Gn86AesVUth",
  "key39": "4PkMsUTHs9Rt7hQyLX33MiVgGvMToCo78aMvS7h4wxrvXkBUdTh94Mt7sL91rkAxnjUzYXjE4uYJpa2B5wJ4dAeQ",
  "key40": "2MyTy9ZV9NxXzykB5Av1VyqeM3wwcQyAWCnuatQ1kCiKWVKSFBxQNRjtAzEhoeGfm5nAAxqLqtyDaYawVo5kXB2t",
  "key41": "5iLr1KWtYcT2YKpE8TSSuxiSEkCrbkEudPAiKtGGtm3Y4VZW4njuiDwjuX1bcNdw11jLm1hWhns3Cy6xmKvdHGRA",
  "key42": "n8HvSzRpDFJbE4YWH8rwF2nx2vpw3ZRKhL8hfprYbtA8fJvTpvDdKQ3bqJ43jcKwfZYGdYvniA7oEgU1pKHaibS",
  "key43": "dUXvK3JzRRArjG4vopQSeue87BktSU5FPRyrEVtWJpSTiX8LjXKJvgNwp53K1JuekPkBjCxfvQHLKzXLnhFcxFd",
  "key44": "wNma9CmWArPEiozJsNWz4Y2NrvGozjuXbcyB55tDD3EWic1ajZxF6ndBtvUukyUnzoAMY2GkjCk1V7rtwWYUfUr",
  "key45": "4NbgjkqSRb6n4k3rwhQ4QqhNWtgcyMbzxmoyqkwL2XTHQPX9dVDaee4ngrGkj9W8gSQdfbYZhaJbqzz9u2Qc9S5X",
  "key46": "35mof9Q6QyWw6xV89xBvHsyN1ZZiroqsHRVtGkVjw6GREeek5ZtRPduD2FoFCJwctyE7mEXYvYpSL9GabAvA82xr"
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
