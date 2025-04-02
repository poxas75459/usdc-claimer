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
    "41pXG5zsC7BF63YvzcNvu3xjoVDBWniAdhggyxHT7VHJL5naDMo35gSio7eZ7u6runQBVnA2dpAWsbQpiiEVkQio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7zXU4GcgV1TYQmQn1QXQF5w3GGKunra5iXTPceix2tA1Q61s2dk9yxwAgKuX7LMPx1vz7sDKJqrE5BKageYu7b",
  "key1": "tQ4vCuwxduhkHnnQFZ3m66brtHetzMwoKztVa9ZVmDfWa9qNgvrHZ1x2SHXVNXpwBLfCrSR7kAVqwLx5VSFKQrw",
  "key2": "3QU59PoCaTLEiZ9L2TDcVqf5VK3Wn6zDffudokJaq2j2Lw26sYU6nGcCgS7TQ8ysrmsmQNgeznRCR9ProeeuGh5r",
  "key3": "4AzRQtv9Y79M84oKpajycERgi26KdTAogL6CS4ZxzAYb77oAm7ZmBeczutPk6dF2czrkbfNBQSwC3L8B2dfTeD9",
  "key4": "3ZrWpFxJqVH3cXaG5xTsBQSHH7HUzoim5uru3QXpr3kckk1tQuqFPg5eyr639EWv93RDr9Lh1NUZP8ZAgi8PDoRN",
  "key5": "61BwcoADYwvuA2q1eGagoUJX6tZyKJuerdiUS9BciWteTYPioQSC26PS6bxcqpxAJoTxyah5EfvDZFTHjiaXh2sp",
  "key6": "4CFAvsngdGn3J1Y4Lr1aiqwM9ea2V8fEejJAKuRUMRJcavFs1QzURD4f9Nx74LU61hNZt9osL4meVAgT47wbZNiz",
  "key7": "2AGXbzGszALhe4FTYnGqcQv7C8ANJDNcCLHwzWr1pcGTvGYQ3vpTQo7Pjyg7FH5Wr7gccomd6LSFa2jQPZszpDuL",
  "key8": "aM82qACmBL9s7mvKwffbAZZ9jhkumQ2odV73qKG1uw95N52rbs1D9DDTJh26ahgguYrfB2ffj738JRqqNKENCcy",
  "key9": "KzShWokpvaaXn2qnBo2MU5nyEc3N3EpKbHYGmTiNauP6rmwZ91BXRovRxNUuRzwhM4rwFBeA27wcNx5umxR88YH",
  "key10": "4QpFEL6aR95VByB97mkbAAtkkK6AjK5btsZq3Kbfwyfh91tZ9HE4Znq6arVk8ceiaDszNxKxrY4TktSoU9HqLxJA",
  "key11": "4jJGi9wH8cGSiNF2VjzmRn8y2eNiwX7NuZ3TAmk61QAJznw7MjBGWAs6whPsv7Bvn4HfFcxVPMer6hjZh8byrYqb",
  "key12": "62jehvi2Q1E9oNMR3qTCrHS55nWAYTrnxgQjpdAe1s2n6VtrUJbud9kmTb9S2ypRbYWNvy8Xbx9R6YPuqTdaaHsk",
  "key13": "oobzWomyj7Rmat9r7vxFiDoKiHrfFGb8AuS5bpGiUxdKqV7TqDMjfEg3tzNjqmkmFK2adCjUtJKtr3qjNt2Njer",
  "key14": "448fvDfPdpeHRbrFrQnQpX3nYeC51ce1JiiXrDSgKYEwsBeSfMQx23gfM4qEESFk7Em5ke9Ca7nUgjvkrPypyGkS",
  "key15": "3aqPAcU6Wm2xEt9U8t99fUxSAVJkN7WwUtzVVxUVtydrTREY3hABbYqgjeYVhruBs8g3udETaMaRrHc2TJor4E2X",
  "key16": "3QSYevy167x7iEx2yMSF9RGX2bMW9Mk1dBdBL72CWubE14NBi4MuzgKNxJEpUBrDuwXtHxUWnkPibKJ6iJqzyfkF",
  "key17": "3UwHy1nCxq6ZfXU4U7FC4jrqsw7cUMcoWgyF7Qw1MfgnCKTHa7qPg71veP8dkrQjGCV31WZsfoGubgyoZWcQ7Tck",
  "key18": "63b3bLVZ4JnijsszKFUG335rvyZhnsPxj65x4Cby3H3VxpGFZB4PN6BDuyYfgNWQSt3nYo2TU6TBeHuFUzrMwpYG",
  "key19": "3kjeD5MwuX9UJg3dpKSAwy77UvZe9461ig7ZzQc9G3wdWRDasQpVxmREkmkrzoSReQZLHArfcGQwueTgWVjyFPsL",
  "key20": "34o8t6iJJd1QsvRHmddAw9g6KyTxM6vpYvpGPvSpNXUCQ6RXJUMcBHRcADJKqq1T8gKWx1iqRxTUQbCCpzQg4Fk8",
  "key21": "4u9EJUctAddER5HqEb2NTb93qKjVy2umL7qPb26Wg75cHspQX69fcqbsShvvUDMvS5GFV7B1LprBMHdWSGDPxr5Z",
  "key22": "64t69TCuL8iSAR9R7ied8txWP1AJJHNv56Z7Hju75QuyWGnFkkYiyKpL3umBWXcfNLFYZHcNDySQkRwz3do4UHiA",
  "key23": "289bDoJisy1urUJ4SX2Cyo2im7ybP13Cv48t4jxFzZL9acAYwqw4boZr6Cx8FtvTFH75J7o57hvzh26aYn6eqJSJ",
  "key24": "B2ua3Vt4a3MX7fewf8FTDaP4RptWF78hbh4CRxNKqDLvJvdZS5ZG6PVSY48dwcCrWGRP59krJHEqasZWuG8msmv",
  "key25": "2KX3VrMo49yFhgeRTeL3RWdfsMHX6XokFPSYStuaMdKy32nH5a4RJ36541QNMjYTu23B9U8fF45E1iujX2ckVRBr",
  "key26": "5jF8YjVMBne8i13FCN6BjbErXVsg6Tv56CxDpWaL2EjYSZShAxWk8jKLvqACEoEcQdkhnGo9mBZvMgLN8CyccT3S",
  "key27": "2M2pj8a8yZUtjGTLErWEVcBkysvXEpXqThKZNdYCwB2tm6cnxGeoZUQCySfg3DVeSzapnZfNJEoqNtS6gM5vWzF7",
  "key28": "2d5gxvFnMBnBn3JJEHV1VrQpez9CwidBzoQKmiFGVSKSJnoSnrH6QzyFKWcKVmmZJaXhZRZFUqXPqera5qF1YHs3",
  "key29": "51JWaHf6T6Sot3sVB3cw3nFSBo4DNgFffhMcDxgQtUfuo14oNH2y8NAQGKXQ3BiQkVDS2VUkY8bovnpDoyCkFJP1",
  "key30": "AHn3PqD1Yo9Qx4ro7UMB95Ehpr9o5pF7X4CDgSeAJ8gosicdAKUdq3kRRfqeqsnFb81cenKG8jzti8RdAZ1hgXS",
  "key31": "2CQDTtEiseuJmdLj9eRHxS7dEJapV2DjXmffaSaSRkBLzkt8BnTg1tZytxg3ShYuVd7vQgRYZmKtwpnRxPtixd3C",
  "key32": "Usn4P5TD1XR98ymJT3sArMciux69QLjWZNBTEXMLXHv7jTtnuB7b6qkvzBjpCXtmdifbVJ6ga27TKUve1TPcLjj",
  "key33": "Q2va34zEN5yBuorHGuCYrwWdZXnFcvqnmcU5BcLZBC5okL8QGWuzxgDfgaSyU2gg9RCzhV2HvA9dpjpyE7q7FLL",
  "key34": "236RaYWukFHa56v42jwAnNDgxyPEzdfVyPCyGS2kknTPJLhQ5hUJitD7Q59MLfBNZaGgG5xjMXod5bzVyYQ7YkUP",
  "key35": "54XYBrq3YbyoMaJPmh2XmXE5UyASu4qAEGaL4Z9wQbfVDzqAqqK24HFiJK65JxEyn18yRbbgwu4UdbxfiJwBrmiy",
  "key36": "KADi9BKtm3JUwQJwZXuRyCy7eraBt261PG2DUjjncSZaJkynwCn6x9UmJUEA9ZvsYQ7MhCwv5fHsBsJnvg2baXQ",
  "key37": "2jr6omamt9MDi66Yoe8zU9goEXffHqEfaSgBguhpFu2HbvNtVFSKb8UEk5KswijujVAf2p68MDrCTxfiXCEmND21",
  "key38": "4nAL4JoHFqHsAS7V9LjDPFBEbFs31suQWgiVBscUvpShQzVb2AtgCX49TiU6GGkJhZnBDL5HuWFE6LK7Yhdtgce7"
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
