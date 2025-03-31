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
    "66f7hRjPrcfeuQQHLRPCQQo8p8TsyQNUN9ujZLAgL1A5orML1WBD2Gb7u2WRkZYnvK9ihZpnqaWWUa66S6ukf8rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ji2vBEHZUmR1sWRGU9yYLL3fdQiMrUVB9DTZbm3SzahBJYGp5mU4fkawuSC9GjgUmYw5m9rMBiBpkryXudPgyF",
  "key1": "4c1vQC1qE3FfAH7QHvneSkJzbfdFGsaDUX6w2pC8Xq77SksXHnsEAZ27Ut6ZUyhDoUMkxyYT4Df1X3Q93ZQfC4n2",
  "key2": "48CCmw8rnie7DZFu6gHoPZWgc829zfhLgCDYEKr2n6uNPDosB9KUGKJYwViR1jz8xwVYP9MMTqVo6zZvyMtawE8P",
  "key3": "3GiztCSerREf4jpq1zUwcxTt68Q1arWaW3iDCTJKL1iur5KmqMCGkAVNEmYDyB1YPQcV51mLbCZ1RbCGxMS3Y7ei",
  "key4": "122NYvjStMDaKwoKqrNtUgsB8q8RC3R3Dv7QBGnokTGZ9PLuXwX3uideXJBUEaSvEHdsppvagN3e7xgmMQNhpQfQ",
  "key5": "4e9QmJhP9oexj5ADHqfSG7LLBEPYuJaQXgrxvGuEYVFfP2FPKg1zn6oC3eWRxXw8tXs5V6fcCnTZtEEfR1uCQmo1",
  "key6": "37fComuTkB81BXh1VmYF1piS1CaR4SqBBPo7eTwYzMyphEYU46VexfmGeTaJZzpS3f4N2BhMPP8hiP9nyZ6Gx6iq",
  "key7": "22rXBk8Ya5GUVxcAyfdy7VrAQoHUWtbGxP4tsbXYiT5r2n6V8DBe2H1anUHStawWCA3ALSs17zdaGiXd5iSwzkv6",
  "key8": "5KzQfR1SyF4uHSGrWXwuW3wcHy5EPTxnGgtanoKhffctFWDdHqA6eppnKnfLs51aWRghD34G3baXDVq3H6NRDsm1",
  "key9": "3yBsJJD9SVPx6Vxq2Tq38p9Qna9tAXnRS23CyQ7FryQ6AniTQx3DvHJ4RPKCKqHDZPRu9aHoZ2Jwwn4sQPSK6cf",
  "key10": "2ZwLHUTTxkX5k8QoqvbuhnSCmLjt3SRW5CkHPxP2W5JJgsVzHDjSPQFCN5EA9RTLT2PpW94e3UyqptP7KNcigo5y",
  "key11": "48MeYuGBqs3Tnqo6bPjBgjnhDQ65ir6gLMbJwjVVLJQsVgApqVRqWzrLmFAFQdT5Jj18Nvnpcc9kyy72FQzyVYct",
  "key12": "5V69Hf2WNZub4oFertqvceJUmo1xRniaJFP7kmMLSC5bk19TTzUzeun1G6qkM3LJRxfp94GsFpCry4JAudUqjfeu",
  "key13": "3zLCYTdd3DqQRV5Djbt4jyYLVcW4w3mtCCsd3oBZjqUs2QEw2yzTAhU1iseKrfhEwEEpPhiZu9u6bSH4C15oShSi",
  "key14": "3ucWWoviV8YTPBmPUsM6FWDpRHieaWwRoSYQ16KT5RaGLXqA9fuxNKKKDCnqtRNeBq9wPfkNpoLZe17FvXvXYdu6",
  "key15": "41bWym6sZmJUhfFnaAP5qgNxpzoUaZGu83Eb8HMA336qTcBv8EzAsdB8fqoupFcUj4nzWyNPoyGrTtpp4YgmFeqK",
  "key16": "3gs45NGfXQE4bZTiLNUvqacrSiYLGpRmvMW4cQTJk2sVT38uEjmJNmEk8w1tZJRpiujEv1NGkApYhExgZCD46euG",
  "key17": "3bwdtkmdGJenRdg3BUmgNujVbxwwpJ4TXGcqSKbDZxBpYL9HEkaFmMESdbnUV4BeujHntqjsgSVf1gt8Ge8dVgmL",
  "key18": "61sY9BsKkkvVKvmmmWEUb8n1RpSuP7Xjh2qPXZn7knTde4d6gXXJYJTcLdA3tjb8tiZbJCLw38adAKY8eETcvqpM",
  "key19": "3Vnr7gx7xGyyPc9PtgVU747Drk2wP6aZriGwfepjDdopBWKbmFfdQUJSsvwPN7qV9kHBHsjTWQhpVPEXQJSvLHxP",
  "key20": "4jSnGsAmYSaGye95u2vj436ZVLHzamk3oVektuyYK7JhU7j5jhpSPAfgHg625JLFFM76Q6LhFpY5ikFy4UDJnBNG",
  "key21": "2uaKZZuDRHLXxdF4s5Ps7uVSRt6GjfXigEd9KwfFquNS5WwFntTYTAkdHQ6d8STsyD2MQCFzk7VkafdU4hKWEZTh",
  "key22": "2hVVNcqdFsYKCnYZoFk8m8ey453p37ACTQBHqTu1VsjeXPfYnmMzBoj68nqQUqUdwvkGwBusXJiMvar7z2n7BZeJ",
  "key23": "2rgma6pFxzWEnX2VHsfjTFZsbuok4CzFSwRzWbdu9KPftE9PUueUrwrjU87eK6zMWEFqUckoHcRKrx3DS4yL1PXL",
  "key24": "4n2fUyHw3rdy6WKPnfwMottjnzVo9Ww2KbsM1Cb1BiWBnPQgrik29UhVYDtwggT5seG9K813Mw5ryBY7Uk4mJYUx",
  "key25": "3QATxX31qcEHkV2MKEvtQNBayvhZQqgsJDN1VDi5rR9K1WiBVEcdwyie1h3P5UvQx9PisKvgnne2riB8Z1Ebywoe",
  "key26": "41JpATKEhJYVTtmyRUFWbak26mkossVoDRFzPEFJvm5EHRi53DwshYF6KqEu87Z3DFxKGjNjg99yxDG2tNPVBqbY",
  "key27": "5iJ9EDWnrQQ3rdYXvDrS8hw1PLRSX6YXuQVX3n5V1xgbRB4FB6u6davcBNcFDaecHdhQy8JD4AjWHERnrymS2dys",
  "key28": "5qgUctcF9LUncVT7JU5Xs9bR5c4y3sxpBynXTnsKYDDvRZj9axMwSTRR8N13LPHJ8Nfp2RwC9XbH2BRc5KHtauj2",
  "key29": "57tzWBuZGA5epFj97wk2yACJijKXYKsaodNcmxXR9FJZWTPZDuudJw9wztanDgTLLfdKfdL7QDuw39xoei2k1nsK",
  "key30": "3XJNPqy2XPkm3tAjB3AdxKaCPd7w2v6S87KSpMrH1eN8xoJeVZSJMRwTh4bzdGmT5YjYStZ2Tupc8MHHYtGfk34V",
  "key31": "5PmDPzpuXHzf3erKVj97hmwrDhvzPpxNkp7AFNgURqEHPHS24sUydaJtrJMEwspPxcQgK3P7Npq9vnq3QNjzegJr",
  "key32": "4EVT6gJkVWBrLNsMTH2Y2ZN935zEornaLesjqGTnz92eW6ED6ygBzk3Bv243nPfGF8PdaSNA6D2vQybPG1zxey4k",
  "key33": "38dqWDAT7oM1BKZc3PpKDEi8CrnYFYcTmZuu9DkhExorVDJzA4MGnwroLH1kZZBWGKjYzSx3J6hErpAAdQNwSPqy",
  "key34": "21X4ZLU9T5PUBMV2yJ5y5wSXu5b1d6hpgSKjK4q3FZEDQN19Hwry5w1YrcE8v6f7dU375QEpizJ8EbGRD1Q4zpsk",
  "key35": "s26eHnWTVv9naSb7KRAzafXBdcepHhWpDskMricG6AnbMM4Ke3BKo6v3MPwztMNp4rivUB2qrvWNRy372HuA7id",
  "key36": "4Yu9G2GzidntAdtrFSFTG8sUPSeWPwKNEAxfbhop3eo4i1BtPfsAMJCEU7usLGmyLYn6VrrUN1de5Bd2LfqAzWXX",
  "key37": "4QfP9FxXivSSKGvrRpUJFvFH41G3CZQdaowBakYSKjjc13CSnAaC8zMzf8HjkPss4bj7utvyNNAwYV7TNSjAVkyP",
  "key38": "3wTjZ1Mp4qBEZ8oqjwfPTfERCK4eZGSyPyvis2psetzD6EJiN3Qnpfwzo4PMZ1Fi7nPUtGkkL54xU515pSnUf6Wq",
  "key39": "5AHqMdKqpJgXEgpcSQmNvdCsKQcDgdSTxso1PaL4nXPu9ZtQfKfDaLruEGoZxqofqsfW8Ui2vkEGSLYqqTKYAPxh",
  "key40": "33fXZwVWNpHyyPXfXfYFYtNRaxHc2jnMKUViKRapnDWyvx11yo5odo96vLNAkdrqXPxMbDT1sVf4C4Tmu9AuFXR6",
  "key41": "5FVLJ5UNt3SsW14Z5SbAt4bk4NutaCo8pjdQqQLLazhWvCrrXu5nJZBHCkHR2t4WJcda45KmdJBdHfSbW9hpzQJK",
  "key42": "3Ztas3rXwdYdNLKL2v9HmCKaYuefKyGD3JZu6jRm6W2bM4HjGmoi5Z9n4Gt9gb4uQNpcbA8LedWZQmNxN8YzfxWu",
  "key43": "2fW4XTgKhjDVSnDVZuFQBVTRvQcogc9jzZo9oVkNWhkxZ6hpQxbjUFFD5fq9EaSVdTDdTpXGP11kVQ2cHP393nbF",
  "key44": "3Yv5Dty5EeTYUJohoN81Vc6HKYBQyZU3UfW2A2vzRjeGw7o7erdwXFzi1PM7njZvo1kd6K478p3Sgfm4cNfNj1Qa",
  "key45": "2opMiGbT7yn94QeuaAzsnMaLfRTEvBaEKjPrs71gKFdEm4wrWaQSrmHxLZWFpNYiNtJFCD5L4eTPeDoPpJfWWCLn"
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
