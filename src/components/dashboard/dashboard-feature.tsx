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
    "27q2GUQqK7m58V4kiGRjGPuQ7DX1cF2AZbP3BTnyAZTSR6zRGhGRS4hNT7CgRH9JMq9T3NvipdgM2zS32nMGM6Sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmMyw3SK8UAVfSzwv7r21qNU8u2uFTmDudVReUTJfh2PmjdMo5XRAXy34iriX9kw4KfDKMFvdgpDzMfZddpyYMB",
  "key1": "3kbfWneJCFCuCiAaB71xzJs8Qv7vydsT2zVGDypaERVgFi6TQ6RjjEsJkMCcKPE1YEFSxEApX2zqzwSoS3KhRap9",
  "key2": "wvy6ociCMzG6SMmWYKJREACq5UX3VchuSyfSLiBs1fi8PCNnKBpGx59v4GsyE3MtxYsGoNnf7egCdHamhcHk4AH",
  "key3": "BTyX4jxjigxXJrd7XeCAphWf2r3jymDSbb9KUcprUZcvk22Rw6gV3hzW2w9EMG5hEYJzgZUX5ah6CoehPCZ51S4",
  "key4": "bDfS92RwtVgVDhHYmEUPQL18pyeVtmHWjy2RPpXRyGNFWRgWpUgQKcXo9vV3GK7sbs66yLJJ5vmBrsSL7TqRraa",
  "key5": "5wuAdu625SqfTEvEtZGyM9xPBeYjFVBkUWS6vMnofKvqSc6CHdxKJNPY9DbNwPmsgGVjmLg13wVNBRG81dL6Ez42",
  "key6": "25N3dpuUg2YTajedyDC2sRnhrqFsgKVMokbvGdtoP55yVkFbhmfWFiNSL7HytpJhYneuA6x6aL4ArE7iZbcg7JhF",
  "key7": "5ewegfrgBUe9qbUjtLZYkWaJQmDVsAeKzNbECePponfwHJaeWUzXwXhV9rZjxscGEYgTR4vbf9TPb7zcQgZvBSLf",
  "key8": "3GnhRn8tkGRf7ZPXqpNwEzu7LdnuwBsZtto4u4DGqsWCT4hLQMa7XReAcFw8UKTRJat2zgeTXo2WvZXu53eNkpTG",
  "key9": "1212EittD2oQ9jbP9cYcBWKRdFbfTg1EsU3QgPfQJ7ZmJXWcXd7XGnKKXQ9p1sikZUJA15vvY9DAbTcjLab2eRyx",
  "key10": "4V77ANXRURQXQ4qLmP9qwW1FZmBGmgPL6dKyKkb8qqDbTXF2ci2ywxj1EtMsFvJ67J9XjDZh4SXW6wP2DGAVZuCW",
  "key11": "2yuhocLMXBtJh5pbUk9rxkLMVpbHGN8zXBxSJ1UtNmvC1ZVGsaTuWqparC8M8Kahm8RH3aG9HYBdbVECgQyVHjRZ",
  "key12": "5t5JGCVJkccMGifsxuFyHmJYXBu2FSDPgiWhCScHziLvWhX2ziMg6Ypv4BXJQB2DuMZygDoZttRKHUnrD6SYKBoL",
  "key13": "3APNZrN1QEjNANorFqdtS5wBiRCDRVam5fAJwE8TCXqQnWPkrRtthVHXkYDwfcNfS5FoWcYMeteoSe33AZ41WN8M",
  "key14": "apLmwGEEwz7v3dxWW2AkZGKiME46zqWAEehkXiLp14YDEs8xoM47WmHAgkEDqLhy2H4JLu2dfXBgLXQui6ninw9",
  "key15": "2iogEmieXDrcAGhBKsWNBnGw3bWueEtpxf59DgMR38zFq7M58BAaXdd5tidnAhpE6JB9EPpvgfUbsPJAStKrVzmG",
  "key16": "hBsUbPnQCNXqFn2YpCmpghyJ1MRdrrPmCnrtxUN41HF4vYRs2PF5VeuwumyyPBoZCYQZvxUBryemjukS9npvTTS",
  "key17": "2m1adsGUxWxivraiydbX7pHNUY7ExkXjBZERfU2gse9rF7SyqesihTBEtzA58Jiup5qRdWEUoHoUEsgNkXBAc3fe",
  "key18": "2vZGgNxaBup2iAzW9v2Bet2BLmrDggoGK6gSVexRCTzW1FqRBk41mdMdsLPfYAfBfg9vVfjbP8jc5qUcDLV5DfVY",
  "key19": "4XBU8D8CkjST2i3qunxm7Y19ChtzpKBErZ2xS9Lvb7KmLfcy61h3bZUPWPu5EPhFm2nRfoVwpAsBoTsE5YLCRKZc",
  "key20": "3cEJETmcwRo4txPWnBexyLVennBjird3YFFGNQFDXEC8HQ7APdn9LDL6RsDzSeVXMQQu6iAb5rZmJJhHA7b3oy6",
  "key21": "3qsPa6v31Q6WMU2MWS4Tt26uGNfL1VvHk4fmxLNpMibENyhWdwYZ9TfE82ERvbCi3Vmwjzc23BdLFn6aFd4V4Db3",
  "key22": "5AyYtrMiPX7WyCEdBbU6fFWYMmQLXNvywFRtzVRSxQ5PB1hgAE4Tbur8gjmVj2ArHxBb7MJTaHfWotAsRNJJySs6",
  "key23": "3jN8kJTviLuhJWhmnz7QUXhm4MpjCH2SALTUU71F7rpiriU1suqpR4bFJ9r6ZxD6LAREih1C8HyGVgrHYpVrdEUa",
  "key24": "5jFWD1GvRvMMEsVso4mrxg4Pg3oeZLfhXWBqWwAHswtB1Gb3sS8myvfoJQYXvNjjt6W69pCBFgSCr54oNxxYrDG",
  "key25": "3BNT7pRYJueUC7pcKt3LZTmoWCWcHDVVdhLtLYait1BdsLNUmf5gVUw8HmYAAXU2syecVqY9Bh2fNFPHKegGX1mt",
  "key26": "67KgVgqfDdLG5NpLJWFYAifFZ4jfjNvcmgf1r4MNEd6qy8sXpP7bJXMzZyh4XzUKqkMu9Y9m14oxx56WTRFMXWXs",
  "key27": "8Hy3j6taZe4SbqdUmb7o8sWGBe1CJnTNJxyWTCHnDM9y3PQ8D4TdrtmWBPh43pBqw4usaWS4YngtdekNZgHbDgd",
  "key28": "4VY2QUDwKwXoSfhoypgxhXXzLcXT1Z7g4p38Yvy6rdgjxTp89yk2TcCGktR38dbqxX2Cmq2FF7QLPfMu6p4eAcQA",
  "key29": "5NYm45PhF6Xah8j668eJKSL1hAFiUhDUtpdQ5g53t3snL33URKVtwWrbm2iiFfFCX7FagDnJW8KphM13xzv5YRWL",
  "key30": "3GoeV2af88YXeA6h3z8Nu6Rry9RFVnmWWSbYW2Y13hyRDqmQVbs4vFB3S7zgTuMpb8ehKzB5HPVREyr1y2cfVggJ",
  "key31": "qWKt1Adh6yFKmfJ8m4dt142JT6qKhNVemK7zm956AutZeCyqe1pgM5TL2soQx2UTMBSEU3XwQi6LbdF6tGbPn17",
  "key32": "2MDkHJepenFKqWvk8wzBDXvUpYKguBnCjwNCzdB8rbL5EfyJ6drJ71imJNimyk83ZK5GAiXxpy4tVcqeakLaLH2v",
  "key33": "4U66wgXiTAURViv9GrcUCANgRfvznu6Ncc1Fxx1db3iXRVUioKRj811KmGgbyntR3RRpNmzFegLiL8ioj1HG1TYJ",
  "key34": "45z2QsrYQj2qZ2WJTMEs7wDTdyMaeBB6HmokUSVRu41aszSpEddViKkpjBSzktTdRo7nrr2VHpSWirp2jjXea2LX",
  "key35": "1TPxZmiB4oaPpxBCptuzNVuEHfeQud7rHupCTXLM3pDid2i2NkUngbVRqvcPXY1XQQkMKLjVgv5HmtQgQHKV4VX",
  "key36": "4yaTxMqkqjSGPfTbpHb3GbB6ottEfSYw9CoT3n2cuQrvbwcNfmUQq7EAUJZEw9MPszgbA4JGKdEw4yiAuvD97srB",
  "key37": "gHFzmpp844S4xqfhQPVVEzZirXVhmZZhKuE9kv2HBp3eL7qFYvGVzD4h9Tsh9paTxkMXNuHmPtPjohsMp9Mah7W",
  "key38": "3GejdtV2Ny42L7A6rpKtM4t9uiae2w8KHtXGEk4SN9DM1yreS72KNLvHA7oLTLfe1fooGBzN1G3J8T7F5tVEV4sq",
  "key39": "3mv6R2N677RpV5AZTybTV8eHDJTPLS5VU7CgyQ52KgXHstAg24DahXS8vjYMd5ejBKJ2LBnoZVzeWijH5BCYsMRg",
  "key40": "4bzXdj5dN8CgCiRYUs13DTeqaU78mMoq3fLVLmhXTJoNYRWujB6Kfz69aGDtQz1nv3heUyuxVbWkLGr17qgWgmwW",
  "key41": "3N4qafHF2eFSqW3QtqWHby7jJunV98eLMFpZ6LRpLsa4Fw6ZmqnVs3mTfVARY4EyPUevoPFnq4Zjnyw976JMBhfe",
  "key42": "5BHfEq5BNPtwLesDLpHzbxMgVWMy7jmJr6rYfahh2wFAV9uaaKNmTgTVX2yXZSQqQYLmz6JsqTSyEfbe12JmprYy",
  "key43": "1CqwcbLHGHqECQjinxLhhF8AsiB4HzfuUWLKPyfXBGUXBieQeHHv5ddpmeRjsQhS9GJoUUpKbJRuPtFgGZ8ziUe",
  "key44": "29eQQXt1r4sTsWYqj24hBtQg5yPRtpSob67vzFwi7AqcH7vxYGSmcc6f6WyUgyMC5fRhrV3T5XMdUnh8hoara9Jz",
  "key45": "4BFMhatK7yFa2T5pKd8pz3fvXckS6yhozJvdysE5E7jCY1F9c5oZLqVn2Gaq4wPT6jG8c76fPnoJ7Ziia2ctX2cV",
  "key46": "4dAQULxL6ZWYZW2ts2QUP4hEYgYsH74BnjiFJ9SQnhB2ZWwhfbkGxMt3ESPBt2RmqdWi4wUzBTgLSv5ExjbzDr54",
  "key47": "X6z2uHHvc6zkH7Poc4TekhnWhE64ig2iXR733UkFVzxbLEnVkd1aLB562w8tKDeaZdkFzyeoMtqhUV3Mm5zcTE2",
  "key48": "Dd6pbWwjX4H54o7kY9LPaZ3b7GfoW1H6yK1mxncmPVfaycNJbM659ojsFNBJiHRkbJrQEFu4nnXtnaQtT4W1axs",
  "key49": "BB1aEq4zjKCCUN7pdsQuHMqof8AzsgeGNxtRTPmSkseRb3wdXx5EJ6h4WH26vTVNagRJ9hMjAVxyAQe31z8q98J"
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
