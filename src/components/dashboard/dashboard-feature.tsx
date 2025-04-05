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
    "4VBwkBiipja3KQYnxPiVFyffa4Me39KGYCvMQmvtgGmWo8Qw9XicwDbgN6YRoCgtebu16igJS2CGpqQXJUCohmYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wh2ZPsuyTns99MjunLuTA9K2vmr1BwWrJSgs77igE46nvT12oYahcLCZyGGQZrs2DxbGiVdfeKoFHoiGzufBZhm",
  "key1": "4D6atNC7bWwNXmmcz4NKNXfUNarJUinEukiUDMBpsxE8HCBNNrhqkPFmUKDMpACwsR6keFos5oQH6h8FF8aQSfzp",
  "key2": "cYMWWEB58WwdS9nLmaKZZ9Q6ttdk2nN3m6SW4E5vUuzJeRpHKrieNQ4ZLjWP9dibLdGyYVxoBcmqespvXp7b4q2",
  "key3": "4CPasuYr7e1iDBXcgmrLpjNGzjaQcJzwiJg6h6KJz6xiJVGfYw5gUrbGMyHxkyshyK8XY14xiHmo6pU1R8ki7CxB",
  "key4": "4vi5bkK2qN9TkcSWFnZoeG1QTrmfaBx6545CLLPzxG2DHXsP9dZh4cEjpZZrzxhRH8LnWiKpg2Wf9ifKA4p4XtQ5",
  "key5": "5NhSwio5oWAxx8hMiAaTbMVLfEaLq4fD8ghXu9kZg7ADxEPm6BERRT7sjyV3RNXcDfx3GU71nbqrvLDycP2k6cTw",
  "key6": "35mCBt8RdeTt72e2xiUYug795L9uDGSpwV82RwxxCpbYWCjrDdE7BdMdVZHkU3Emmh9XrveMuNaXcPKQEWupUskr",
  "key7": "3GQqwpXSvMCtU1VdfhiXEtYD5TCDKEy6gnXUazZ4jYokwtm2cpDVEicctzRo8JaQqQzZntbVv92HyCB449ZFmUQm",
  "key8": "3qUr7oVY9rLUrHTdhDFjdQDqNzdHgFt285tRteAPd7RYREAifpxSCkJK5aUooiq1uvxQGEGR1iWri821Z7HRFQF2",
  "key9": "5TTwiftnQCC4Xo4B25GxsjZtvYfZ8DPZm1BmvLkDYkCwC2pMiGrFiMyxDJedxo8Jamx2PQMLegicQBZStU5DKEza",
  "key10": "SGnwnCz6cVdwTCxr6LoqcwVv3oYwFknSVQm7rFkxUWuP8YATcgt5E52RhaWfdBvz6uEkrd3EqD4vZT1debRobPg",
  "key11": "437UfqVM9iYYKgGpZUC3nfgSn1MeJYcW9tjCbDnVhsynHbha7JBiSVEtsBrcjHYfNWdh6b9wSBFaXJXznhCv5cZu",
  "key12": "52zSxyCXhUJ6bHpJAGyF3G4XTHaMvT3mnMBCPXbzNJfaVkPGnw89Hiq2UtQSg5B9ZxBT7MQ5HHsMK7CwDuBG2gN",
  "key13": "4y2x3vyVMv83owcpsnuRVBFFvVKdyUwtZ6ggBn5tCygeg3NbCTDk9Sixet3TPYfvNMDJUQB9QsW98WXHVwo86nCi",
  "key14": "34DYTFBvrK9xUevzPgi14UHMrtsg1dgaBsohKP66wTtryXiRqKmtPhGdTfqhKLZV9vaTRuBuHAB7K3JhZwTYPgvi",
  "key15": "5THj9wQondvjGdX9eLM2Z2Cb6ngCk9z89CRhZr7Kg96Ky6iGksTtnoorXBVUrj6qv4HbKkS45JJwKv8XpazBvuwx",
  "key16": "4MzPL7TUQkEKZNkVitPc5gLYKMGFWrVzZx8h9ycJpnWWmDwX5SE4VWgbsyCeWX8fLc8zNxSWgLoKgRf8oTzmhKRN",
  "key17": "2kUjaSenKuvv2j5D3giFL4mNEnPv29pjRoyg9cSkoKuYkZdTwFzFERcuwF4NxUiz9ajY5pVH8pvjjJDkYrt7yXb4",
  "key18": "2UZFaYxY5R3ggVHimhMqj4RbVsEdY5ZjwqhyToA4zW3rNCLaZWAAo7Eh72TUE1jAtndJzUjTmYkysRwGMKRWgZoQ",
  "key19": "5Etvkc1DUKEqbvQka54qR4HgA5sq54eimfxMmKQZUH2FRPsaNX55JddaxVHccQPhBoLAujsL39ryabxi9stcgKqy",
  "key20": "wJY4T57kHGozYgfbTKRzayiToab7c7zGSDQKavvEb4XGGbuNNiYgqBRkyYYi59twRVCR1nERUg77PufPj6M1bZL",
  "key21": "2pRQzv7ZFZnDFhHFjHAN66X4CgrAvpGvG5ayaAN5C3VJwK8kXfjE25x3cTq6w7efq6jLaexv58932f2JMJbExyTk",
  "key22": "bdTtqYYT2rAdgwNLVqsd87bHKPteczzrwYwP72vdXfChb3bkiB7bPuv8qTdp4pQNfsmncczkg7iQ3dVKAo9rcZN",
  "key23": "2kWZMosPe5YvF9N91N4rpFP8129yXQ9NhGYjB89Mnou1xteU1gmvNqqYwGJdD42WV9berGuUSCnsgx5XeGR4N2AZ",
  "key24": "5QziPyBnnM5APGyHbGxkPG3G2bs2JDKoDa8s8BvmokiFtQ31EqcwRcyLtez7EoFj2LucXQS9y2QZURrCkTXQgNzF",
  "key25": "61JtsBadFUsT4gmnExq6AJMJy2aY9LkpYmW2eAXcDhQJgc5GrYda76mKQp2Nsr4LP9bEFtstMfDKmjyuB7iE72bY",
  "key26": "K6J5RLEP6MvKv1D7fzP9XVj8yTL5cbap6NtXvjP1ZktHuKKGNCV3FabZ5fPSQA5GquNhy9BYz6ZzVyoMA8ritjC",
  "key27": "5DpXTnvRG1p6XdUa635U3po7dNqNJAvWS8RgMbiuCbfFUc1YuJcKG4KWfQe2xmPFRdf6bx13qwpoQtJaWiGjuo2N",
  "key28": "4MmZYyVK8JYzPTEQAhmGrLiTQLUNxD3wVtos4s9yAbjbb7oVbaCd3yM3ucT2rpZ51TCRg3Z6Tg39mYVzuqQfBfoa",
  "key29": "53UScma5zxpEkrLJG2NZar6wdKZ9Z6YhqEj1picNhioei8JLFfndM24wt4XBRvyZ8QNcgVs8kyk8fdNNXCDCuQY7",
  "key30": "5EMKmcZj8Mp3oFqf8GaY2DYBrcxjjBQaDy2ySkrXEckDYb9A3XLXzuvuWgkyRQCQDFAm783rHJJKB4bi1Nvi7GHe",
  "key31": "4PLo5JQ8nqBhJhibQBVWh1WW33ggQribDX7V7cbow6Lf1xAPgTo7DHc2ToLWz1a3d4gqL6iU5FrcXyX8j9r66iyu",
  "key32": "4wdNGFYje36z6XjmYgnDHrYL3cg8opWoBcrNM7S4PPvwKR71CJ5BhxsGwiuC1mJsh1kqkUPi48AsV63JDj2o9QAn",
  "key33": "5qd1uu6QYpsD1wmo4GesqXcs7omE1QGZRzKigZ4fdfWgWds1TxBJiTAxfGfbJeR65GDQVy9GPbshCBDLPGWd7Ldy",
  "key34": "4cWLA1QKgdwepSGcX9hGhmaLhKGRic5tjCTDm6cBXF5hsY2qVvEXHQG9pkHXLoioYathJzpC2tPf3dnk3MyZ2R4h",
  "key35": "3jPrjmEuruJd5we5YzKVoVM5Sr8qv4tPjECFcuh6Zn4Yo8GC3u1b6zA3LyThL3Rm3H27gqBmGJp2ExKJ9qNFMcop",
  "key36": "2KtRmYJdD63Wjn6UNMCgHzC98Paoyrgbc4HLE9SGLJ1m9bVwhcUSHpUrbGs5EeVvErp9Bw81QuPTt41poYkXy4Ze",
  "key37": "5YPYoKF9KbQ1tJxg1fkopJaZV4GoHSGvAhmpyVaDdxsQXTjEi7iQRYYT5ABAi1dMWHJC6yRxfjA1fAA1Q1fLma5J",
  "key38": "3zSP3UnQJw3pzVdXyrTbWqhPxJoLiTX89Ve2hPMTF4f6F3c5ksdokNKpk7XwwEndEPPtAtd7vxEEFt2Bbz1oapxT",
  "key39": "A4xu397TnCjRkW8u3QkP4BqSVdN5KYiEjmZHXE8fT55e8KLyN9Qb6LCu6ee5jh4j1DXxryEdseo8SSRvp9yHB4R",
  "key40": "4XHzC7GGPbngSgZh15R7CqWwMA8NvJ1ePTuEe4w9yu69C6gvsVxLgeppBU9R9QX6b8CqtjbDc2q4jCk3NyG5RsY4",
  "key41": "wY9RvwYrujrk2LdWtFdxaETgfaQPav1ei3PPAHMn2GrgmsCGbJ3bdSJtaYL1rQkhi7JqqcCd1hSbk28opBCGgKK",
  "key42": "QyqfJuHcMh7sEvJt2UAUfr8QAEjyXGaworQyoLhnCQQ7oD6LBHkgFYkVqHQBCAWgcFHeU8RoapP4D74Ro7zaMWw",
  "key43": "3BsuV47on3Ky3frnVsGzZgMmxfLJ6UMQABMdGN9LCTPXz47wunqgM1Ct3b3vZAz5me65UpeunTaboV9wUfpwxbfi",
  "key44": "2M6SvnawXkAAs9aZokUXENKB6B2obJZyykEkr4Becfikd7g5L7rkg5CaN7zrGjSyht9DYvRvPja7tdFbSgzuHbAu"
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
