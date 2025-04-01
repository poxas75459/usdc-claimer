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
    "4dyocaFmG1gYW34E7E8a4Mhxpqxs3anFqraT7btYD7qxpvKifKtQiVScLpzzFHYRgPuUfoPMddF7H1uJ3MLa1xwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35tRmHsPSmJaafUHTPhEwQzoYHdgKTtoYVy9rnTcPt51oiJojBdYMdbdFi1TFCvHM9Mb1Ytg9AsnC5EvMVJNwvE",
  "key1": "41tEG73PxvRKiKcmbfzxPzkYfk2CrNAwvXYL2YVHkMk8C6ks5NVjY1Es9D3X9YzYStVpYcK6MsKZEgwMbj37FMgi",
  "key2": "3YywcdVxbZZh4ZqJETb2LYpT95yNoeQLTgQPHFVY2L5ZFpBnhj8zxoRMnbS5vD8mFqs2HqUSWi1TJQusTvbzhnpd",
  "key3": "5FLEzAz2DmLfRUmyPWWLXG7uEgBGGncqwpbKBiLiMK2nvmNo5S1ettACUE8nUqxrHzH8aEVp4qbVmmU7wbMSteGJ",
  "key4": "5bmmdemmVR8Hb5YoJQgzao9Kgb8W4pAxTVAQ315e7wm2eriSCQdyZsaT2E4dDoDdMKKFxFmt4RygHcy9bw5myiSX",
  "key5": "TDnhsXfrYQJqK1yJsUP5DtSiGmjZvQ6X1wbFB42oPbHeBXF6odHKR2AMHAACjyyc1S86NdyPxrrs16SJykteoCM",
  "key6": "pFTYHYi5xtGHWkCMtFz426MK34iJUKzgY6X97TCL2pxKCFqXjuD5c9JUzHXhZCnnzRNpz43fuc89XQRjbjQdKB6",
  "key7": "4dTBvP98rAPM888JPPjCtCXZ5QPRGgZ1oVU4yniEZnuWmcD1AFsa7EzsDXeis2jA25sXVV1wtEi5X5kwYxX2AAei",
  "key8": "2jMDZdfRU3EtRqmPcMD7ziqKymjrPQAjiTuqxRA7TRmXDNKxgcxXYhfdLSBSemGUvrQRLKMFxaoWm7vb2f1ynd7q",
  "key9": "k7Ztf5vFQt8cJ77EEySviHc1s64C35Mi93y5ecHC9NNtTjoE3WvheweKaTsn93dQEn46gTdz8p1Jkpodzoqef3L",
  "key10": "571CcYtvxr972pceTnor8y7AjhF48tfzwtMHppkijVkWc8qbBuaTXBKGFGc2MtPGTU1ovgkrY6tSnw56qksyHooB",
  "key11": "62U5RYhK7QrBKeQvidL2xGwrDNpX97dbTF8KuFQSBLwcHA84hiqXeF73hpygocokQocmi4GuJtXrYE8JiRyeJB6J",
  "key12": "3CvPTX2MFS4nYcragcbpgrUzm7pPr8zqWG1AyaMEyjn96sSDRn96vj6t7jEsgJ8EJqty1JfNv5Qqp4GiGkdYs5NF",
  "key13": "5QDZkePYkai2idZ73zMQFxSbiG9SY8zmiZo6g3pZdBvtuU9hvbPDFvBMJ6a7hdD1wRxAiZzxrDYgU9w5XuyDfUan",
  "key14": "4DfkCKMqdaCVup4PCuvmb5HQetaA4MU5LFSYp7rKg1YbQTJ3bXwCyFrwxr77oHkccK6VXyKtpu9MbJbWUTfx5mz3",
  "key15": "2BCEe63RxGekFP8B6xJWjHefbJryyThZfJMKTzVfE3JZEXBPDyoVHd9yWtBPTriKbi6NoFM2X8MAJEAYKMvwbmMT",
  "key16": "5DT3gxRtnDrZqFs7CXcsyqNXmVCr4jaCoYD9GH3RpbHNCYkEyVzWZdwxFs9qMYbhvKUBDwwYYPHGgQtjkRH3af7q",
  "key17": "5vLMpQ6P64yPvSY7RJqM3Ane8hc57o1be4grnvTFJ24pUsdePU2bW9SrKYsUXDJMwm8BncB8icZbKcGDxTbXoFhy",
  "key18": "4ZkahKwJ6vkZeYtySqs4et2ubFCPHsSfx26V8PEyd9oiNe6DuwmFjM8UNca8TPcyr3728f7YfNCAYuWSVVEj4JqD",
  "key19": "5Xx6wPK75jY6WthRTav51A4tBnAHp5U61vncL3iQemt79qVcsbq7rckhtcFojboHcBKXYD6Ez7Qo1qju8kFhSHs6",
  "key20": "3Rs2NuYpMCxSkA4HjMzMquQQs2TnNQEBMrt2BFh3f1hVa2zJSiLMyWGBqKmVoYB2vpHrV81Qgox9KrfXNxHigHvU",
  "key21": "3WDuVGbJG3tZ9bi7BfenTpphUgrxw8kVqeoYjmACXDtnQ9RBRm1ywDRqMbyxvgj57fH74EMBsJiCAvy7WAMqfgGa",
  "key22": "5eB8ocTnTRVND76sHuRnxqmBADMb8V5m75jGyi2jisRGL8FQPStUfWb9MMJQY8fa36HBLrjZLSeZo91UVP3LjgJH",
  "key23": "JSbrqiYA72NfB8njTF7Bd4kyEDUfNTbdqjg4ZjwLcdG2bd8AFENvrQyinxceVtyS37RBKM6RCEQYaAcPFR2Poay",
  "key24": "cSSYyCvLKBcVbanNujRYjYhbpfDQz6fGnufcD85jGfHuWhc2KrpqReCCPHP1FZBFRVU3uBuHLdHVvxkG8AXdrwE",
  "key25": "3D4WkiZZRwQfZsQozv843tjwkuQNK8Fucrk6UaNZZQv6Xm5E8X4rfwhB4uivvbW1PwA3WExgKpNZT24AiHduZXni",
  "key26": "4ecPRTJwaDB47TUCkna2Gk1Lds3CoLAuQL8xLwvC8PJoR1Eywe7Np48Kn1dQYzZgdhdgBcSbsU7yfiqCnJmhoz6s",
  "key27": "h1HyZCV137D62gwvtMdgbxWqHTXVbuujzZA5c7WYLKnTzZZnyhkCiHUueq8Ynm96G6VTfgRShL9qXeqEfQRryMQ",
  "key28": "5HWcXdfgrPUoKQie8AbDwUMh3xxQBWZxbK4MR6ufx4eYfYaTRqzqghr1y5sPGQ1nPWpJ9arVNmq7yrpEYjWh6RmY",
  "key29": "55hwyGMB2RFQVgdKhryGJacUGcummptwPEdo9fD7E5gLNYVqmmQ6qMbBsqrgM6Wyu8ZKAqHvMzKfUVPrL7E8zFA7",
  "key30": "zZmmoXeEGS3zjU8T1ex28c9yYUhG8NyY83VS6G7tqWs2DP9142cvEVCQWtYNsWiqZqfKNS6QoPKKpHE6smci8oj",
  "key31": "43HQzXT6N9zBDDVuKxE7LpakxeshKxHSA1QrDu3uKXv1f949nAaXmqUDY73CcrZggHDg4zvr2tgAuUxcoBphSqjj",
  "key32": "5mU2RpWLGcrDLPeoXPfyzDXFBQyEs9cg974SFJ8Yt5tVqjZTWJzeyhdq43JV6Kq3S52UkhgE1bZ8n6kAPbkXTLyy",
  "key33": "25N6vKxAu8D8eKQ4f28ruk3Wkp21r21wXyB4jrcF3VYTLqZeLiCLHcCGDbkK2GZjdR8TcmFAq7r84LVkL7y7cBmZ",
  "key34": "66JAg9js55RdoYiUN5pJNugP7mKzvKcGTQ7c1rdHWPazBGyKjhio4jGgLzhmpwWCGWfSGZ2R7m7i7HFLjxKE7g8J"
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
