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
    "2Vd6TGpyzpf2QQkUc7fc75yd6ds1ZJ7dDYAywnvE94j1QykJXe9138tXmc8kDnxhiZ1gK9hH1tqdm6LjvbtfyrJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wex6TKhdaCHXB9M6TLWXCdkMUXA4gGxDhGuvHvJAhEQKp8aAyMZjftof4DKkwS7jNiAPSQiNSd5FcximCRexTEu",
  "key1": "5ogiWfMTP23Lkx6JgpMWY4rUCtuZHygNTXkhKW53V4GMY4hPJURnyyTvLb7PY7SBQjVEA1W9kNvfTsVFnR5BcVkR",
  "key2": "5dRkhoWGg6GP5yw848ivrNcMo25Mt3J9n7KoVJwMa4PuJvAxmpvh3JYX2FqRDs6dH4V1m23FC6LLyT6Ysse2SNvq",
  "key3": "Rj6Ko429wrU94xmahG1ayhy9vyEQSzx71Dcepjmkoc5o1oN1smcUs5x2EjHGusmpAy8F82KYwu7BKeUw7cnscgd",
  "key4": "3iWpwmkmtWA5m2HEnMe6qJbmcFjv7F64YbDGFQa7CJ8YVLbMjjgUEVbXCqsUYDmwYJ8jyaSaREqsnRThuiGmKaXt",
  "key5": "G8pAaiD4HU9AXsuvytkUDTHhDT1wWm38jH7rDTw9SZbhYUcFx6DXUNve6rDe2wk5PvqiJ7t7wVcjoJPKEJJzZAA",
  "key6": "5zbGke9ZYdrknmRcj7EqaEKTULF5hDb1Na7bWLJkk1Tf1UBpFSJM8SjfFbKfcp3SuNBAYbFxiQkmomb7SeG13Gtm",
  "key7": "4vex1bDg6D299LGVE7CSDKna1vsnvX2w8oCp4FEnYHQJqL7j6B6dEiA8hLqrNkpeaQELqiF2s6qRnk23qbUQhaCK",
  "key8": "5o7wbW3rGVsC8Yn9Bs5pkuhdgerGes49USyU2DaNC7shTTXEdd6uThg3EdiAsp1qmBo9swZFRS3e3fzkNzosgxrv",
  "key9": "4Scd3NxrRbCWTx1XsfEATBALbAXzgMpGqtQYjiBM9nHRRu9X16e3Ed26Qbt6LE4z3E2KgKwesHdgy4Fy38vgPCFs",
  "key10": "3n6hVfhHB3tDjYAHZoWHwHkPwV2CimWhCcs9FUJ7wHoRUttQo3erf8y4rmbPcFgimZqaMxp2y59Kz57MPukrozkQ",
  "key11": "4o2vrkwY2tDvtLDM76R42e5dztKT1bBZdoAwDq1TKsSvAJxUkKAJATvpLXJ2Htjm5Xx2U1oYvrrLZiBWU47ijZZS",
  "key12": "WkRuo4rLXoehpDeQsz8iVpuwtkRxWRg7AMUmzURBX4poJsVvyx928ffZS5s37KLySNwALj9u7nqyfc3xsPYYN77",
  "key13": "1239xobEzGjFVvSRMNk3RJwnxZ7cAzMcZ6EME45LQHiSoU33wN64ovQYduPddy9Awgt6N2rjx7MSHeudByaibq1R",
  "key14": "4JXmv8qszTG8MYf32ixwaDZt82FmnhWX6dXc65jfwBkYAQEZ4sqQYooe9Snp72SnK9R77usoMLRDAqRjDn9z1Heb",
  "key15": "4NKDsAyV11eEcQEF6ErWPfzXWoMfqXxGbmgYgeGUriRDvBsizJzuGxfn55CzvTx4FeyfwL7rr6WTCHhzJUzMrGJc",
  "key16": "2U1kanxxeL3TL3k8fpw8xbHphj71VnwHVkuP45HifYKsvWmE3tZDA5eAMmq1JPye4Kt86Jacbx9zXYW9qGK2b6du",
  "key17": "4r1GGDaDFDWg6wYT6EVgtDfn6vDqLpuoE32kLjeG3Q1P4cLcfEHs1ZnzbtmQBcM2tgpvLqxr3Sm4wJgps5nWWRMn",
  "key18": "2ftkChrD5Z88yMJCZtRvb21AGkGJkLhgAA4GrFxRVWZFXk6wJtM1GsYnxAdCzpsEtJ7MnTQZ2gbwS1kSdGrWqswD",
  "key19": "3MQjpHz1xbuGCTFpqRM8EriEP3MpkPyLKfGoJby9t1j6a51Hs2H2Qw81usKSUNBQdzMttTMxpURrLtQgMxzUusSM",
  "key20": "4EGDQbvLKQK3Memi1ZT1Rr811H7gHwz3RpH7h6dJNmub8sstLxwXVXfoA1PRSdYda35pvQZyDwuo1sn3yn9NxJjZ",
  "key21": "3g9jjXSf9f8D8eYy83MTW92DWfuQyUBWzTfaN7618XiEi7MeDqvhKsaEUKPm3FdADBu39epWzaGrc11TYnHXvVMW",
  "key22": "9QKmKcPtKoMTg5cjRsRHhSe9mztinVoW9oYUpjZdY42DANKeY3HuahWeZ72nny2CSXNYE2XcNrAvBc164yb3Pkg",
  "key23": "4xGbRJhZ1KoqiR12TSyDEwFQPPDxytikyYpt3CrLgWEfhpFDE9mtGrSgHn9XDezo9JuwavtApSW2S9aHoaLacb4r",
  "key24": "3WMwmgkvt5ztzvhkbFn2T8QajTr5Whh5P1DhceEGkWRtB3zsciScWACAuhswGWRLGf5DsagXYEkpT2ktxNCv6zWv",
  "key25": "4pCayMgYN7CpTPsQmUSxvAFRyt1fKRspNmo1ZF9268KsiGsTFoWmK8edebAVfVPt4Qwh7M1RenxEKUuLR1WJvVJK",
  "key26": "3mWh9LPe4JG9Wki5rk4S2dEoDDhWNEPr6iVQLeaVyMRNA2UAGj7kj7swT1SpYQVXTuACRsuarZYMZtGFRjXZkaTp",
  "key27": "23nLn9FGp6tpdaxR2Nf5kJXoZBX1NSuNKfxMy1c6yYG4TDGQQTkFCJSe7QGJUorE4VQjE86W2tVHSY63Y6n5abMd",
  "key28": "4zytJHg6pLUp5FJ8f6cduZWsd8sUD8g3L1xqywYXqL2WdZundBEkTvwR2YoYZdSVkAMvXJ1PzqfkRDj2482fHLse",
  "key29": "2NDHEcrqAeE5jZCh3j9n6PGLStkaXJPN3Y1wiSRfBnUi4123p77mfGKrspBrLDYQQc8mcqV22VCESKeCxZM1jtt4",
  "key30": "2HPJygYTgZW6g31VnizVMMxyAW4TobGso7Pzwefn84okbnPKbxUyDFJ2hkepcZtubqzfT7A84M1HzPSwcAQweoEq",
  "key31": "24yQDvW5ibJQHxEXcfrifS3UcKg6CVDoHnewXH5rtjpYD1aLtfeoG3jCtsipu5PHogfut8Mr43a7fccfBPPUuuPB",
  "key32": "51ApmmRP3pGjJEMrQ6kD5tg2Ua4yf7VCj72TommzGLLXBba5vqeKBEfLKCZBZHZBqNRfUHCaJYNcLu17wbQv6eeW",
  "key33": "26Evw2wbAjjmoufYrnnAfH6R1VS9hobRySSat9YZwK3KUp7kKqSPrQHArwqRGF3G9PrZrjihDbDnetwyjkV4mdKE",
  "key34": "tyQe11vPrfRSnXbt8kyq1wLTSDuDvRytnwuri1dm8ibh1fLjPQVKQU9hkjxee1kJB97bXYJQD8dcLwsNFHqkM7v",
  "key35": "QfPNxnBr2od1nzUZe3cdaEdX9kQhzNPBXNN1k4rcVuXvvoPvwaZ8ETWKZCAYahoxPCBwayn9fRn35dYxKvGVRay",
  "key36": "5KqYKdTGZxoSK1Dt6uCn7m8xvMDYbctcD4nMxRxmWSyC7CCJR7wuihvCCrFK6JpXS9e3qNjsSUmEPDNp9iwZXKcM",
  "key37": "3QFFR2SnWee5V1j94cbjG1jB9HY8ExQW81wMbFnxwbbpY3LNquRu3LGh1ohKwvYuP52nKR24wWpvHyCgn16ksAim",
  "key38": "A5LtudCaCGkPcaMN63Nm2RB17BMm1zPG6z9EWGDczePEhXSfFNbKDrG3d6qxp6o4m9QDXa91UHjWVcdEKmHsfzg",
  "key39": "2p8vm21rkJTnouqBEEjmFspznyevhEtHhvrVzfzxtP8YgngxraqzxTeANDRR8aRFFCrqeS1KER73WTU91L95AXk3",
  "key40": "ZLmyw8K6UbLCSxPTApuXxyrKw7t95sn67qoy9qhrBk2LcDT1P5gjhU5VwYodcivXjShWuP9mZQZTeJ6fvrWtqmp",
  "key41": "4Unhkd2xGKeCp9376HQTRL4ofHPw2XtAcmmHfhG2E4cQHA16znaiXpebwAtbTRNETbKJjbqXxttcATHuhpqkvCkt"
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
