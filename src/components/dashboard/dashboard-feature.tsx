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
    "5dnwJ6khWBSXeREiDKTXSwJHhbPUFAiSYCZiadUPtQUcPPxP9sKwJpZAXnhFJWZen47f7T7mjaPpdpTZ6EcQQjb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDFYx8wY8WqpD4nqJfcoqRaHmcETyjN3qbhSiPzoZG1A4dkT3jCQ1BPm1RMBuX14UHX5mkqYSaEhRbtJjop1PSp",
  "key1": "2WurimaQ14bTqFm84n3HB6Sqc3k1FsrFRzErL4T48JVCfsvdeT4kpDoPWweeHdZi2KSL6P4dZqmVkMa6YqmHiAFA",
  "key2": "4aLs44MU6YvAS1qJLhE7Nms1ND9sVs9K9NqNmtVeK5YVmqExZjW6zWZYVxQXxPtYduu24fiwLhP5Mui2Q39AfWA2",
  "key3": "zpw5gwrB84Z1JWyiNK4T4giXEX9PLX1wt7xrSH37agyrPXX5PCURxsrUciTvajqJrEY3KngVk6brCZjMB2jmdk4",
  "key4": "2yLb2j9oZC74po18Lw6ovAWcwunu3Y7DBBabGzDBxoAgAPMBwWTbeKbVSC16NosVZFmkwCLhvejWuQS8FVbExxNk",
  "key5": "4ycfP3Uje3FZbAYSSAQrQJG9LLRgqrm4W7PT4uE9fytgHCrgtjefH195qkqitRihSqG3WwsLdU4t6ZWFHacEvqZZ",
  "key6": "4A4jTVQRi54FbFPRTaHRXf3L8wAcyhYm4GZmcAduLF6Sgeg67UbnkUMmmSNqdwWZ9SNidonxgy37Ce6NDkfSgxWA",
  "key7": "82v7MPYZBQPUhMLmkEWrpJcRQrU7fzsbBJkUZb9JMpKcnu3AQuAQYhPiTq9ce6gvTufmamVfq77gsWEG3WT2xUn",
  "key8": "5WHuWUHLBgaMNEnMFbnQRpUGUyMCgSm4hRGQexJ6gE5C6sES3aGm4Gbky6bAaq6jpLj7gBS99eRX9n2DDDjgfkHY",
  "key9": "62ApyiroYVeuyumNj5xzQWsof1fjHkxDCTHGEgZELbYSGXUskhBFM6Z5wdkUGj6dD1LbYdekqJfqa7EWLZYZCsEC",
  "key10": "2gxV6gFzeXsfwbK8Kbod3LBnR6Si6hkVQMYNqd4JB1frb8y1ETi65KibhGktghqrGUixc2pdgXq1cUkugumUDtfB",
  "key11": "3m62fbrgBtC37GXTp6vEi3gcGxdcGEWxp9Y9QoVszyDEq8qJWHXN6vHgngUXyh3kGqnQUTCUjCKDioWHLUvHXWHc",
  "key12": "4T231eAAUb7ifGmW8pWLKBnt5XV26ijCFJXrkoRPcKFScBskReqKerQQNFtUdNvnA2rqgawy6tdkbnuHqT1gbwPD",
  "key13": "4j8rnedczyNtGp6RhtTkC1yHi8VdXip3KUMRmifPMU2XifodW9rKJMkfs79bThjp3uEP3UMKaiC9dcroFoJBFtJ6",
  "key14": "2LaK4XPyXdYSrgymPvhgdBtcANP4nXx3Q9nozoDbGMwytfng8LTdxTNs9iqShshdra4td7XDDtP34q9gYc2D6jN9",
  "key15": "4EQKfcyR5i9Y7VDC8hzGtQfQDvjro154EscK34gNSRe45uGQfsXCHKnU4xiCQdFReRoDFs97gvcP9dscW4RVjw7n",
  "key16": "45oV115yH5jHxs4JzmcjLw8cAX8bDYW8rkpVHyfqAasZNZ6vMhnjdCRoiD5oB3oxzTZ7ei98cKFixyWLqA4HH3Bd",
  "key17": "2Dr98ZddnkjFDHFn8pgq2UACyK9YZVcr1i1A2E8p272K8VUsRUDLutbLdnJKqkbxW1qqSDPtdDkJMrRh3th4qrgE",
  "key18": "4bQiYG8FPpTHzafvM7XJSFJqkrZV1gK6Gtq3yUGowNiGSDPVeFCkaCkRx3CsEuACABdPsqDUpy9YrPfHmyBihkBL",
  "key19": "4o1BWVJLa3GBz2PdFZvYYBoLwbD7PGcMMnfRUBrTWEaaeo1SJE8sDpCGqm6WqpV1A1vk7Xvr6JazXSHGxT8Nb6mT",
  "key20": "5LrCEMwYawccKEcsi3UbSE91ydnABicWaDZZswun2G23o9gkhSdQm4yLiKAdkoRsYjHCbLZD1fUD9s7DGZuSoRkN",
  "key21": "fLA8kLWbHH437hZZgjAZfYqdYG8coN9khRfEsvTmYcTZySiHt3NoVH388YU3e1CNvdsf4UiiE2yzxd1q8foYzS9",
  "key22": "mbqhSDjvk7z5XCtBRFpBAmqUR28C2LGycR78W2eH1FhfLW8nUnAJTHDrY3EXHoDyui4osVr5sFUWydh1fj1uhis",
  "key23": "3aLJhKWJf8vc9xvYmxu4n81AB9aEXy26WamAGxgctuCd1NDuP5o4FVQyonhNHLpP7i4gYztCccdw7UQtNP11QSfL",
  "key24": "sVbshRjzLEaiK719KuUoC8kdL3CEmDRLTkymSSdqmau6F4DfCpiLKkRLyheNf3shCYtb1t4DkoQe1AqABvkX9VE",
  "key25": "5FUGvLG1rjsWvvGpgGMrkXcMPT32tvtRNi6HiV7Qby8kcGiZKi1MsLnWz26gyKDFwyGShTHEug7wQWdtStufmKP5",
  "key26": "3iNhLSRBG9cGeucbAkCTYt2W9mD4gFaUcM5hTqrb82ZRgbWPtLJx9G7tDEW6HrXMBykfZQ8aggrAF6Ghp9ESdJ5u",
  "key27": "fnMRWG8R4wy4ww81bgq6SsLAq5tYiJX3Gmx2s8GcXm9ApfnkkaksmWh2CfLmUbdoFWZHp3TgQbbZ6Grr3TtH3NF",
  "key28": "5wcRZbkHFnBh3Fyyx2ifvEoFy5nyKEzejPzn8yjHD4QotJFMz8thNWhD25uwRynbqQVQEzZ2skxRiXp5TRm92pS6",
  "key29": "61xrBnqLLC23RcVLyABFRXqnP5wtaP71Mz3Yq1uZDttAZDbYEjVg3tr1PfvDA9CQazuVSgg6UJbgWq2UjqF9GZi7",
  "key30": "5mJsg4s87k7FUG57n2TC1FpwpJvgw6zdAJT7QtESFzEB4AN99iBBauvyq41t9DXCL9NpWxwAmGEtqmF7Km5FzFY1",
  "key31": "5zpTDtTzqd8kwmN9nugNTsdPi8aoQg4tVFGhkSwNorfXSUxRCd3jTAWbuu7vidPBMcgRQG2eJizxtnDfbEc6CDWu",
  "key32": "5gZ9CUcpva9H2EgRLrr3344HkDh9BBew6qQJHLb43HEYfEyta3GyF8AM43ZRopDnRPTeeFfNiJW7ZLbUipV6YipH",
  "key33": "6RmSnXRpH9ReYoT9VmfTQ94nc5ahMZp6hzButGVEWkixgE8CwGQonQR1deNwD7RS2MT3wmFxFzbJbGkzuoFYVcs",
  "key34": "tuXZXebpG1SWS9Ho5mrdgC78EnH4MhjY7ezy7CvRSYHUbSQJuFm6tRDCnUX1AKxFWr4REGvzdNVQYxh46PJ2Z17",
  "key35": "3c4T6FbxMTKXdwPY4HbJuF54K95vNzigwb8fx6sh4MtYoqQMrQsWfi5uYtWPxQ7UHyhLWhR1AkLzrtenTNoTJmNb",
  "key36": "2LcktMvBHwcqcLcTodrtX6eukvUEpQannGatRP6Egpm8wBqxMqUDWHXSwm3qLUkuJimWcxkfVeVtKU7VVbzGhXBy"
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
