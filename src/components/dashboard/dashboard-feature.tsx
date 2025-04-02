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
    "66hrMeF2xvFGmuBbPDA8RWtTuWY6wNzyxMgMCjctJp611sj3c34asjcpaqzJU2TGbTvqrNNxoBb5PeGitDFKkBTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNtm68xz8WTR6ZsApGf5Z3C7VseDmKjmrvJK8wjBWvo4ENTN1PwwJR3vtuTkrexVzRgnwgiDVXZgET7oQ84dAV",
  "key1": "2tVUxw8gMsbvW4a1z6Ek3UC6f9KZb3pT2VHQdU4FYb14vTtS7YaKMLWxBJsjHgmDR9iNRErirF8Y7qasshit6aS",
  "key2": "ZXhJkHPV3AuRPRrZwJKmtQGPeb24Gu6CbjugRRhJSQWJqnHuunK4t7ZDknPyfayTgsBHvLZGRpySQ5iUVoM2xSX",
  "key3": "3yQHNDiJm8DiJ8SUFXhG1wdQyvLVJXduqzQWtpt9LRv5WCjipANDEHQCcQNT4dNRmzeuKHT1f2gyE9h2wypDEh55",
  "key4": "3xQqDAEGzdtLArWUHG5ocLrquQbLMUAsY3QTnExJF6s5VJiH7fpEuZUtBVzS5twMkRapnRmKbKsjFYv78suYxwyc",
  "key5": "5ZQeGKawg7R8cuD3aoYzGZUXSNqGUN7ZoT98y8DMTtqZiJYA5c3WGRKRaWUAXdWms6YNPu7BmAZKXKM5FDvtaCZv",
  "key6": "4omBw3JFh1kwPAJzhsK2dWFuwtGh5r1JoqS9vUqh4wdvNdfjfEG3w4GZf7V7cQ1mSMmXbKqRSGATDFcNFX4P8fi1",
  "key7": "3kFGez9av2ka7DRvPD6PCZ4RrEU8DbZEuv5h54EZBZHussR5HVZaF3vZL1jwchA3RnKeGvftegtpkvyatxkyiz8b",
  "key8": "3QLha42YN4fwDJbz1UDw3JVWx1C5QGqYtqi3fzvTX5iZZqb4LB3CkvT3So1bMTrD6SJHhr6zBm5q62uJ2qMEuoqA",
  "key9": "47b3wbj3kygVV34GrzsXYsuZe8uLwCsV1AMnQM1vH4U7ijya1m89Mwn9eAXw93q8XHpucQdVytst5tagxMru94y3",
  "key10": "2LXZdA2ERPxsyWsiKxKL9d4nizfoyZrFeZZgoBCF2PmWSMkTsYUrzrWKt58tZfL2UYnmJ6rRd2iNUypgDd6Putuw",
  "key11": "2wu6LjqkjcgZeysatnarvV26dtGj4TSiG23LKTXt3bRXU88PANRz12jYm2r8vNEBmJCVBeR3ExYGJNW54cUYjzPH",
  "key12": "4uqZfaMgvhNmMrmLnNwuTqw5phTDuNPfsAsx6PEdX8z24pEVQu79f44uCgRp2gRtFiRvAawt7Zw8NDL5Kdqd4tvd",
  "key13": "4h7LCWA3G9FTuithdvDzRt9hE4YYgd4Jm1obhmj2aT24wEYqNfsJcEkynsQUsWVTmomLpfCDSQFcNQKwezpH4JA2",
  "key14": "3foXkDrzdCFTTKsJLnnwBmsCHU81G7ZGHSbHJZAVqJ2D25uKKiA1rE8U2RcPi6xv9XbkirfjMyjYcLdWnrMzgmUv",
  "key15": "4LaF2MSoESN93ccBRiwNvj1vmtmdZ4LQaDMyPCvL5JUTne7ETUextqxWJc6vfPTfGFyPJyNVTaqbJCdqnn4AYmLY",
  "key16": "3dx1ECFzA49yQG5TKvysiRkj98LNVb9wLgjxTMyZqvhfdHdtTMQoKXESvaprkfq2H1Dp4J84VbNrdrQjFjVEFxRE",
  "key17": "4iKo2ZbX9qwUqHmbsHWfAzAb6fpsVfo3ue56Kr7FMyTuFpyYCZozEwFY8EBwwprUybo4XCtQKLarPFGvkfK6Rzk6",
  "key18": "4hkozW3JubkkTYmCUJNzPMis4GuCgUpUW7YZk8jFA8DvLb9csdeNUj6jpZgYNNWN7eJ3x3ntQyDKQXfBNUwSeyrb",
  "key19": "yudWDmhBYUXmsCm5wxPVkP4M8woJhVPoG3pdQvuB4gFhm4xJ8GxSqgBU7h65nSLZ5UbZxnBkpA5vWKgZmiGoYae",
  "key20": "2C25FUSJgfMngqcGr2yYPfPCRv6AVU5Qm9ys3Gh6CUHpNkUhge5sjCKNuYts1gjm2ZLwyqd7zxktwWcrxgw87VbW",
  "key21": "46hFEV6EAdLhYaDcvjLzxAHNYc7iGTE3UpEwWeU8t8JNohj3FxwShi1t74uijrb3Gd8pk87m3ysKLafbYq5Se5Zb",
  "key22": "2ywx1U28iR8EjxzYuFKhDrr925Dia2RU1XA75rsHUrC6Xd2E15sMCEicrL95ovMA6SeY4za1m1ZsRXR3XyAnWhjq",
  "key23": "4aUUQtfQLtxeAhQhV5sVhVo6BsjcKVGWidU8UhvetJEnsxFLUJYC1UndAVC25kA1XY4oAdkYKcix9ma7gcY465KS",
  "key24": "5FdFZf7VsqXqUpFcYCNc24riufswKgoH7291E1QMGvnCGGEE7nzsLSZbgPHe2vs5hn72LkXHgSAVbeT3PUar7mZj",
  "key25": "43UJ9yVC6B4iEmaKgpjjYG6u1Ljzcue7Mcep5W4pzE8E9PmFjYC2YsWgkGs86xwTz9FcYQvrMi6cNh14BZakNfdx",
  "key26": "3CCP31m2umWUtELW4aTNNHRjmoEwBkNeNVZV5oRfyBemMdtb5gMeKEPRjwSJLtZ2m3YBKerAsrUvM2WuFC379Ceu",
  "key27": "2pJi9sGKydh9R8YotHtzVmSij4tdHLdGwWmhhZNBUFjRnG29SoRZGF6X9qd7wqSgZHdvM8jmFbaiW1Rzt164haQ5",
  "key28": "4jH8FnbqmBPCQeJjk9S9zo7GoifDepHiUCV8k2qCaWBk5czP8YebUgLrZK2uKixFo6zUCHvpQ7NbDtmkhySkS9kT",
  "key29": "4XgYVjgYWRTYw9neifwEFsmpAwwW8xz4FGFXFfGtNmWD5uAz7qq4SGe1BmtW2s6ZN3WKszxfhej5DaSmLWjADQ7i",
  "key30": "571jNMaSXZi6EtfYcea8LyVJWVN9H4gPxnsnRGAXMn8WHTiFnzVPXJEmTt5JQvUC7hjp2q5mTtNptyJxQF9wxqm2",
  "key31": "evgAGqqBP5nLwcYjaMtNtybYtbpoERQQx59BmgjBeGra7uF42zWUuMBrHeSswX7tYr9wzHsPndcJth9idKXR8vd",
  "key32": "5EWzTeCYVBiiVeLjbPUVuBRD23pjjbBn4oiCSYpt8GrATHVzEsreNyJdU7GEqmMKci95FL6aU23tLnUzPFnyqtXb",
  "key33": "5SRM99TNZcVyuveY9GV67RRg9M7h46tzK6H1guAqmmu7YY9ryftWyqbJW5ekPaX1aaR3KHkAHvZJgK6PbSDXf5d1",
  "key34": "2dnxGZ8azKNa8vZanysH2YrTkTfZoegjFNWJ3f749f5ywdjjusyGfptExuz4kgVhyb31RApN8FcnnWdJP5NNfzkU",
  "key35": "3YRNDs8Df7wPhLfiS1xidhdYhHoTcqekegN4KtSytDzDGRuvqKhs6rxfoRyhEQG6qNbztfEr32Df3DdUxevZAqkU",
  "key36": "4RuF5B98rd8zbANQAnnHE3yuyLGmZmGePdKq2CScyMqNFVEtq5Hj5FATHEKp6e71ZuPmoMCAPnWu1VBGpQ1Fxu5D",
  "key37": "3RYf2Sq6TSV9s8DPPmJtgvJUQ2iL6YExZUs4PiuVRJr6SNcGsDbeq9BAqvKVoPw7sAzZ5jApJzcvMg18QqkmqqDm",
  "key38": "3Zj3vd439rMJMfLKvjPrfq52tnEdzKUkzfuiyvrLsRRNvDoLqZRwzyXCPppVYxHnMmj2ReSvkBeyYQX8fMiZfEQM",
  "key39": "4do3qeSGhQ7qhmny2BFYPhzgFZC51hwsJP4dffM4CeNADxcGT1udUjE1x1KXrhS95PqTav2UPEUqWNWR32NuGAM6",
  "key40": "35MdXEa5dJ1XgFLHDWMkNPymoLUkNVpdsFQaPLRCgQM4G3Rz6SF9XtXYNvQnrefRD4bbiLbcS144c9yy9K4STCoQ",
  "key41": "58ZEs3DSFezECTyNUUhSYLomagptiZRuaohSmSUV7NYadGH1nHGnSssiXnNEkCxWdHdxD74GNQ8UuARmugwuRnr",
  "key42": "5NcnUVGEeV74XKoDSTvVBwRk2iEFgM9SrtkQCXDRShJSKydZJkmUsNB74x2Jkqn6cYyCFWDzY15rZPX3U6npjiY7",
  "key43": "2KKcjk3wQ9zkkUmeG7pFNBPPfvouxfmRmfayRkfjAc2oSfu2hwLh5GLTiFktxLaeY5WuaCGhkeFu7bQbNs9FuXRA"
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
