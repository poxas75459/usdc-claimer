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
    "2uB5ywfKFAj6PM1iX68RacLok1S4PxyepKvFxw5JD8ZgYKjB4584Mmp4P92XDBr55WN2oS5RdwJC6fFgAh7Phu5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xABhGavjf8AELW1t2NtuGahDFzh5V6iqAhTVy12BvWG3H5doedpuEqD1pHSDtdre1gvxNFd1pNG9fuFsZpNzCeG",
  "key1": "2DibBD8myvXpiDvSMaJTjKc4obXsBKiWk3fEzBT3upZ37jhXeNqdg7BtK239126a52yUvBW9DhP6cCJndVe2qAiL",
  "key2": "5fjtZSmaFQCYL8hKXzWfrWzEPSV3zXVYf6h9x6vSHsN1zHRzEtGGvq7qxoGkrhQ591ySWNKtBiJtHinf3YF7gP1h",
  "key3": "4ECBBGgjkBU4pqebHvQBeNMJyDd4kHeN9TTgTJhfb9dZkz8BgS9DCYrTWQ9erao59ckJ3cmLgmxLoiQeqxH5CGPd",
  "key4": "2TQkLRFAxDVYDUhUFQseXoXHnBxqgspAG1Dsa5h3dDZZ8EDenaooKeA19zYjFhkkaR3wegXBmcY9XortEh7ho2Zk",
  "key5": "2VfH32shVDPPorhBmQTv142RCL9o7X9GndGXoJio67ZwWFErb8Qq7JKWCoLku6sM9CSW3Sx7xcWRmLiLUCMKMy4J",
  "key6": "2CwuhY9tYbMzyXXDSci8zDbQiWZ3dETN3ByU7YeKaKmrTvpiHNWZkfKvGW5D5jTy4PZZtSyyGCGjK8ommWEQuf7t",
  "key7": "3nXYEAnCihRE9f6sHXb3we7uMB4Z6yNeFVGkdjNHYhetWgeCxvf8iZ9M1Q4gwYbKmMPS6JQYwbXNnenqfeE5He9K",
  "key8": "przqzvByij8yk5TKZiQLaj9qdjh9MzN3nEhUoeW49pfVcpFBHSVsBgmg7HdPj2ALAyabeKJfgikyzi4YyP157hN",
  "key9": "5Yw1FJNfex1NJNby9b5WRcKHUCp4LKtuPsbH1yVKLkrJwMrjKLQF2buADN2umqej3NCQiaXetU7vTXQU4yEadgds",
  "key10": "41y4mpPs2qRjJPoBve4V5nXAgjDxPrstoqShxt3ov6Q6vDBUwAFysiZYSasEpqf1mAAB3c3K536idBCikJJ76WK1",
  "key11": "4YrUzEh6ngwqHD5p1wsxJxSofifRSPHVFdtFo5RSWag8H7AJpeeGcCZVyEYZ2NWrEUiaxd1dkoAWZQw8sanJ6Tnd",
  "key12": "2jRBUoqGrp1n2eUF2itAFV9F7tW8517zC3sPSgw3mVjCUeEhLNcuvFNNngosFHmBVi5A7nFKp8WYSjisZNds31Qg",
  "key13": "4kLSn1qfwMhpyTXux1bBBVadgSEPB9LL3QmdJtSzi8c9Tg3NbCDnVsU9jKJpWnJibqJNdLU6EPAFKB8y2cj8Zh98",
  "key14": "5RKU9dkbvw1s6DMiAzVdzY8VwdHmArmcbjot5yF2byRWwkb7Nm5Gjeo7YkSMFCaYW6gmzwWEy7Xfovwf8ViuGmZp",
  "key15": "4YtQfoM6SJtxX6KChTGKqfCcMjLxKU3HtKQJL87ekRMUeeVAWhAp1YRWn8nKQp2R4iKYbY91iZF9T1jmkWDsEKVk",
  "key16": "4ruemHJGefUZW4LzrzAFtRUGzraXAyN1ngXCPh8q9wshdxvE2kaPraXSTGVcpif5SAKeMfQN61xxYDsi5SJ5FVfU",
  "key17": "jFhRUbuVbw9jjSePcNPeBrQXz1vGLMzPK3EUU4LRH9xLh7JEpebKzmMhsKF36WJoMEgvit3NABptigSJ7dMw1mN",
  "key18": "4KimKmRXeeAzTUXtQnx9LTxJ2RuGpkiufv7jSuXJGmbE27ogMBQKmRpRuTAFMYPWhQLGWNZKLQ6Y4K54LgW5DuvD",
  "key19": "3eBHgGNETam5LEJtY9PKqQNza88ReKYsqHjeYTUBj2k5vx1ADVZM3kZLxieDJiotf825ExRBpYEH4pLdBpYFRxb1",
  "key20": "3PxGLbSKdVTLJZW5xXEpCAUUBkGseoEsj2RpJddGtPxF6xi9vs8cw5GCBY5cxq2qKTi1y2TZAVzeB12Yw266sjDP",
  "key21": "2FMYWnFYV9mp7fEbS8GMFNkVFuE3sytcKJxmLykSiiXAMUgHdoEGbgnwTCvHsPkVWHxv4WXkXVtL8BAmvf8ABKDk",
  "key22": "LMdxVG2BhMnq2DPST4BosnvFN7TrnEs7KyceMuxMGiztVW1ejMJp3hvt4WA8y7gy7ozRJGB4Vm36ieHZJ89Vgve",
  "key23": "4THR3m43Q6LVvL95mhZMP1hN2uwHb89ELRVH2ULcppNiKj3WbwAyg8utkKyPEBGkoaEiN4aM4H6PFiJJqDvXHRiL",
  "key24": "4ZMdmz5x71j7Sd88dSkyGEEbLaHopCZssZvzR1KXSpsuvcwNZmZAqmg8saCJY8KMfFVm9B22uATpy8EhjTGJMEBs",
  "key25": "RoiV3y2VD98bLRQrRBhHkfVG8hWAYaueQxiiKsr1HpNnewzRAKuPmcqNDuPhUZvdJGTFyrKoL9MgJmfDxbGP56D",
  "key26": "5qKJPcwP5fU9fsYP1J176oc6JmfKEa5iN1nb1ZfvJuQ2YXbjjV5RQimC8dhiBFdobAn8zPaqZc3b6avjW1odnuW7",
  "key27": "3LZhSybHdWsPgZJi5MeuhfYDvGXapSSS6Ctns2rLZgtRSKbhEBUbr9jPwgLxo88YtUXQa8JaaY9a5nzKLvbZqcz4",
  "key28": "63gp1MThb7YmTWWXP6UcBdw8VAFVnCNriRnDHBmW9UvHN8hvucK6tt4Ph6bFE54Xp41TjTTLPDoMVoaNiDLeXbsV",
  "key29": "4TR9WJzTy8J5bLdydv4JJvq9JVjpQfZtUBWJacv8XUcg7pfboWjZGp2kapA3DyUAGH3WMhM8JZFVBkzkwRhMG3Wv",
  "key30": "3mX6VGbZDgAwAJuqzoD9ciZAvC3gpjRMS2ve26ZVAYhbwauJpKp2zJZgixE4AwzMSxGmNgmy7fw7bhsyiyoN4vDN",
  "key31": "P4B8Pr4sojP5LhrEG11vm1hQmXskA9qLQUWqbjEj6FJ6ffX4rgbNoBcHq7vcTzE5G5FPefK4xsoJLEgmbxm6Dw6",
  "key32": "5RqvoDdaZEY3exU2pxpiSE6ZKBvzTWcDQuGaRruJYLXtZ14FSUVXmDxeqvdaPdqG6smSD1AJMdMrFpUqtxC4oxWf",
  "key33": "5PocvQi3JbKEcUgnHZGExgr3PAFNoz34pp4nUZ5kUYSA2QUNHeD1egJSvGrF7CZ8CLPtGMCwzyffVPEpUyQER9cq",
  "key34": "4XkUP8hA4TTAPwzJpymtaCqp1zPAXZzN4nh83MCrAL1B9eDSMcimrQqwoDXn543V85GzFiAk9bxNyj3B1c2um68J",
  "key35": "5HbWdtXExrVvUTeiYqM6iC396LPgxmKTCYSLYPqkVw81k8JNw1KHyAHcqqLXANH6YY8JoNewCqfkBxP5fKfjpzMB",
  "key36": "2wQApLjDPA69UxsqbPdRN4WgZB8iLxDmJBmqKEPsRemTHePaHGP23xUcfEV6SLLCEKDJ7FYbU9T9ih7oqZWK4zzR",
  "key37": "4Bn5AD4TLUFEZA29Y8k3ppKTu9W3hYD9QLLWFJSRDi8vobqRWQyopRkVT3mKcVPzJP7f5Sw2MkiTQbQoqqHQUSGK",
  "key38": "qcowMRZ1xuvGmAYxz7zx757UyZ1kB1dbciDkJvC9fMW9ifb2p2PeS4E6UfWpqTeYcmSEA25e4wWAEyZg2bUrJzx",
  "key39": "59pNi9dMgggKiVubZWh3j43YSjxrJrxDtThBK5nNraSwmKiCa7izx5f4uNHAQqz4Lyno2RuMCHHbeHGiMaJ8b673",
  "key40": "3teKqzygEbAtQ1atH4n3JYknGDk9LC2zXPK2o4Jcf8idecd8k5uP6VExyuEWDnJQenojjoiK38EVzNmnar5Bpwff",
  "key41": "2JzzBibypEnN2jAYDuj5qPQ8VtL5kDkYAPj1eMVjBVp3W1p4n6v2m79abwQMRnVZDrjP6YLrwgMFdUCz7gFjXoVf",
  "key42": "2GrxoUTsMKBLPgRXP1vcDdMRc8AcxKrZPbB2ksLgtcuK1qunV3fmyGpRi8eF4k67LLf5DDPrazwF5RsMUVYGj92k",
  "key43": "32oFoh9pPJaJyzFcY1yTtEKGpHJA2HjhcP8e7xp81vj543uFBZh5gak9b8u6LtQthmrV13TGrSiVT1ovqXzrHdyH",
  "key44": "393Hjpp7VQHPAXHRH4HvL3ptGsk37s4d85W2txepaB9xagFFxKqvZCzPA2awSgTdrFSAzZUZDyDf7fX5f49jn9eS",
  "key45": "3txqf2A35ME7tzv7jKGAPVNsACf2N3pBuTMuiMtC2vxXrF3Cpv6XbYuPgkHrGDVRC4GVZrFdc1iM5mAHJh2PKz7T",
  "key46": "46vMUX5xq9AgxFSoANrXzRhkFaR4tD1a7oaAUAmbApK9Rhb6su52gEkZgQhnMA7f9PXDfVZRfVfQAnDmgeDTAS58",
  "key47": "XEUqK4Y3KmWkL1Ec44DHZzNszQyacZs3acALzkUo7CW5Rn2NNR34BnNQM7McyCSFVgQ7E5vjUCbvXnf1GUzDp3K",
  "key48": "589UijbPRyoTrf41BDQRE233LqKxeVWkphhw78euo7Ztug2RYQr7vouNchSaK9VUbvU1N45BqiVAPMRtF3LyNyiE",
  "key49": "52tJtnTFn5MMQXbgK9TfYsVyuzdQ4PmyDcbLMRaC67Xdbv5TzXyNBt7NevWiv8ELNQvjfmvE7vAzVJiSp5fCepgx"
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
