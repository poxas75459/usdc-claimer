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
    "8u3nUirUQTmMycG2DoYt9jC1uDQvSVJJwxBmPRPiu73PnhuQHzWbudYCLx9Y1TYVFUxMDW8shBNdvyWpYCWkC1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvJAhLQL6dQuiMHUxM1pRAZemW3bEL5c2TKpt4cmMDFxNv4npoxfjYXoD6qfzubxtQ6oCA3RscibXHKVY1nAvGq",
  "key1": "cnvftwTdXp513acqv1nYDDVtxGtSd4fBFgxbcC5uwgYyoFszLqpcbed12LdZy9GzubGhtAmqwVX2hiMtxjvd5me",
  "key2": "4mBnLs55sZAUYHa3CZE5WbdHA4DHpzfdkds4dMKwsAqVovKbfFJ6i9uL9fLkvPGNuvArpPrmRvVUqAy1YRU7Cox6",
  "key3": "3QFTATtRYZQdXVtbkemUK9oindxufUAQyEz7aXyVmzdVMgrXqTZsXJJBJkVvmAGjngXBRXrpPFb1C2siuHTNQKDH",
  "key4": "b8tJsufhp6hYijotgceA2CRGkGNirB4DCZLRz2ctH87DET3j3R5TEFJS2HaAst4F1qygrWHELeoNDSD3TjPfuyd",
  "key5": "WxKQgWs5stCpmJABLFtvzGoPSLMJHXUoGwAwznwJDeNKW2SXenK4SQKkSJ1vcsTesc413PiJjhakAsjaeXwBzjQ",
  "key6": "2NNhyEhahZATFLinbGKd49d1TAyUTPMAxpnSx3ouWzwTauxyBuuoogUMKynV4ksezoxvTuRPWdNJ3WzS2huo98Q",
  "key7": "3TheH6pqYtxo8SQqBDn6GdC74dzDmSBfAFgfCEdz5oioqmk6AewyvhwauctHpneV5ENq8AW7PJki5jdvCU5G1PLw",
  "key8": "4CSeLTKcwe34sthEvRdvhcXnuZ71JpaHDa4HBFUikUjaFHiBGWZTnnJHjCE4XyXi3fWBGkjbgE9gPRSJ1rKdK91A",
  "key9": "3zs54PvdS8svyYG93o8ejeA63qcdxvKah7gvXN293j74mBPdgCwHnDMQ1bQBGU2juEcan3F7c5bWzSx8Nm4pWHGQ",
  "key10": "676LunRVm2neisGCdRmxEkfpCoBjVGujL9xMMQPLisZCLnoyfus1GWf5fYJXqoigxrey7W6UpDJYVSdY56iBMDM9",
  "key11": "35uH7uaVLZhL4HeuXVDspY7wUM2WokBK4i2ZguESAMwk566JmjUtyF5BkZAX6HYq2RHDyEQZ6JsQAmsb5pptVjKv",
  "key12": "2Chv5e5omTfdPE4XhMcv2Vpn3ca8nP9HKnAZeTLVVvb9CmjbmjZEXWfmXrzGt6ThtTUycS53TrWBJrEkVEfRTrMa",
  "key13": "xPTP7BUvs3ynNiUsLZqicWZAHBcusKiMcBDiiwSfTWafX2J199E2cGT1XJgfVRcHokiaq9jptDsYnZCQ9kAsKbn",
  "key14": "5Yveu95WoNoLX8wGbviidZ5dBExdQkJ2DM2LQ7tuk41BUNaUtX1WtSmUS2QwRCaoXEj9jXcJUrpVuybRCXuLn65q",
  "key15": "5qbPQsMpWWkk2XKRs9W9TzPmHFLEM84bbJD3mRfvdXP4RxaMQXBnB7NvnhsUBMRBbkBcwfz9EQ3bywq1Ey15nNfy",
  "key16": "3NoivQDkzKpvfsjy5FbjFkR8d9kEPTxszdZ5mfbDP7HAJ8k76ijeWQtUwWR7V7uS9dEgoqpfVfsQNmrL97McjrDa",
  "key17": "4rfxUxCMB6yPHb4STTgGJawFYipatQbfeTVifEegWg9QQagfLQcKmLp3bQMSyqGZ7sUHFBfScDN7DzyduZS1Aqig",
  "key18": "2BbZRBfpiDjLF2SSobDbQCf2XcKqWWwHernaJzwarb5bvRjFFqs2k4ZkpiAPB1hKrFt7W5a9doSZm1UtgbqSdEiX",
  "key19": "3Zk2PkRhBnZRRPvSA6Gfas59XixAQXt18mT46m9ex3XaBHioVtQizFHuA83RJDBtUWcJChmZuqmEj5Xfgu9939yr",
  "key20": "674TLddxnvNa2hWXUvv3w8mBNbNa371Xwrt3KSayzWeY64Q9jHZUoyWJgVJreUczCDZGAP81ukNepVe5HW3EUwSd",
  "key21": "3DRysZVGAR1KiNbRmdbUxBKsEGmBGjWtnC7HzL8zxQD3F3y9WHw2mzCGGTqAq97hXt5SAgJTxb8qWeZzrmKW9Fgx",
  "key22": "5CWdRQmGKrKdWZrk9rTPTTXSK5SxD3NeSsKEv5Pp4LGidQE9oehsrUvGvuD9RBiUC9WjrsBSdVjm2YWsKMVfDNLd",
  "key23": "43jaV2QEtwYpewqnNcUZ8aU2kLdePCRf7FcXCjWrSTmhe4hsukFicarBN2A1bMgTN7RpPn7gLLuQYvo7Z3TGo23X",
  "key24": "3AYd3NfhqVB95f8ffMeKcZwV8un6vH64wNRXLAgKgdC1rimVtsBKTSn5dfrydBm7pdAem8E8TcTsBN5k8uHqPbhk",
  "key25": "3jEj42SmZZez1hChenEZzUSuVwXS3ZeRW2Q2cfXvitkvvzAq9oLJrDoQxAvAhSyeX1jeCtaZ2DAk22GEzYAMBste",
  "key26": "3EvMpcoYsrZh7PWh5jFRRQSkyvASiPzqZFKiWAKqiLsnP6dhVGsox2Z5AY82WSwYtca8doAbeHF9beT1X5JvzYVn",
  "key27": "24csmeTHT7YbSyn3xZy2MQL8y2CjfCQoJXs9LTTzUhnucBFn9q8fLogGedNMVtAiXhDzmovzxGxYTLKqeT5BswuD",
  "key28": "5BCquRdvFXv5tAEkVts1mMkpgqWhFS6F9V1Yh7ymX4rYovyFAQ2iKY1M43kM7FEeLEkRuFHYR5azy8ZXY4ZCDsiv",
  "key29": "2fH2yVHhBbnk3kvTvfrhP8X6JaBaGMm97URpnZHDaNiMbtquZgpzfuxW36izjVKMqKiGeJZH5pwgcc3XMayTqEtk",
  "key30": "5NQ73i31xzxPDYaoyM2tyZpVuKLsi97aREmb83iZQLPPPVz2w9yf2rVJDgcKRU5KsZzDaaZkFiiXHMhUccqGmBQM",
  "key31": "3JRUwg4McvhJ6ziJdwj7GPFtJGEzvY4aDhDySdVkRXMhzvBS5UBnSAfoP4FWCjatCxdEFaPwyULL8PGjir7PPFt",
  "key32": "2iHcZ9FEUCEN9JrQ6BJcr6RaehVnRwgU8Nt28A4qUXr8RMbm9WF8uExGJATcdhdwWJ4Ghz78i4kTSP2kpC2eeTho",
  "key33": "4UXNGjsNN5aNLX6G6F5hZWq8iYfkpRKWrYS7MpDierQXTSYpPk3c1x6iXzfCMotaeehqyQxKrFw3qBWMN2KrGLbd",
  "key34": "2caucKkw2JQcKwHzkqT5U965woQgNVEZnUwc2ujWqjdAAuwagtcBsgwZcBMrK2yZu3nsY7M25kEXACsDMqid4Sqe",
  "key35": "3vzpbWdx1ros9KVNJvXmumv7bmaEz35MSe2JDqtFAiA8YQbcT4578hZoH8q72aG6jo9Num1D9tzdwG9u5j4g4P1E",
  "key36": "4LQ9jzCfZ1GofndSDJFh3tqXt5Hwr9imZTTdGDPBniVC7d7CX6hTcEksqXioNzVw9LJWCA5dXs99WTHf8HYWR9LN",
  "key37": "2P2UjzubXHjN7hNptwqVQXdw1HwJtgSUjsu25KQniuPvPoh4KMQMVRt7p26Ny7wRkL6DazpYtXN9mgyy3aazfykh",
  "key38": "5gwH4ZydBxtKbjSmfeei2kdf8qcHvvRrJRpFmPP118ocrRmZ53GNp4x1Q1Hps2SN4FmL8JvayR58d7Y2HNfVirQu",
  "key39": "o1yamLEYFWB8zpC9LP6BLFwPkK6hRngexjG1sXNXSFfa7hX85EyP9bmpFk8WjyEQLSRAQXNUuyBNcZfSSUDYFXS",
  "key40": "4aCcsStccQ5JBjJnyCq33gxjnPq2w6Ywa37Cso2JqxVAywtExeicZ1nRaY1LiWc4nmwFYYbLhTyxq2hVMf9QZ2pw",
  "key41": "4QPZqgXqthiBduBJJCiBp8BxAkViCyJ3Da7gsePUvQr8bxMiEQaZeMpmh2daBn3oJcdw6shXoAyJ4JEXhdMtssiF",
  "key42": "2YLFGMHCPrisSWm8YyywbB3AJ6VWJdHfau95T7Y8MjBTDAQcZaTN7SAnhv4xUsRrdFwrmPDiku9JD4EW5xxt4vkM",
  "key43": "2q44Pg2Afsxz3aXpWrzRgEGDzzymybaQN6opRU1b9x29CFnQXawN4vqJ1ySHvY9eDAfVbFMf4XMfSRkYWz2Rq8Rf",
  "key44": "3zTFsVGr3U8kT5VVr82r5BDqyn7w6dVjtoQZw8rPug5ySr8ffWpL4xWUudUP6etmTA7in2dSXCFgVYx5FAHqkWNZ",
  "key45": "xB1re6ZonhXNPgrBD1pUYJHLwH8v47eSgq4eHJ8yVzfHvjsWFUuBnv9SkVcyQHFeDjjCNVGEdLMVv9kfjKwkmDN",
  "key46": "4Cc2525J2Kv3bf7SBhBW6eFuXQDmNBex8P45gwpodHA83rPamAuN2KuCBm2k2RKgymJjuCcoitRHqgErV4HZJGAQ"
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
