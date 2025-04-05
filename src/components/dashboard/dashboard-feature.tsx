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
    "2wtcUkG3Cw1F1KKV188LQK6M47JbybDPfh5WEuCcwo1bv6nKD7snGNkG592kPhBvmLuEsJEMnsVLum9LqmdyDHS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fY4kxh9kVc7vPUvgTwTiC69aAgpfwVVwBga7ERY8cExKvjyU5W3BsGnBP59UNhzJWfwZJLbzphJNdckwrAdBzps",
  "key1": "3FiWhJ8PBw15Un136crASiPe2ugWgG7kmcGmnwUEbpSxtg3hbABFSU6f7wMGLFCXTcw7Cqtq4m9zJ3t4tjPBhmoP",
  "key2": "49aqX6HRuBtwM1JEX4Y2VM5hAVnJg4314Nq3w9DUEbzYLGNcBpqk8TpXfuepg1TbBrj1NTEUXRFC4zLMay53greL",
  "key3": "2MqkcCxS3YgsG32yPfy4XDGUJKMjFtYHMmhFiGCx3cyUduf2rPzBKx9MGZzUyig6Gb572YN3h5uPDETD3y2u2NF8",
  "key4": "HEVKYhqZAiXgvQkauKNJVihjkc2zcPeTWSW3tWS6X4HorkXQGm71xazHo7rAQvU28PcrsfXxbw2s4Gctmp21qCP",
  "key5": "28rjFr6X8Y54Ap9zNTyCqWfTpCxkD6N3DGzdnekHGnQMJinMmgdHLGRv3W5WPzfEdPWpYFZ1GUXqxy1pyQ8YXV7u",
  "key6": "2uaYNxqK8oPW8RwgSa7uDDP1JVfHPgsMqPEQkooAjKuoUHDaB6iuxGQnNd1Lv9cAyXJFxGpZDem19nRpJsTonXoF",
  "key7": "2GHX2ymtHsa6uHR4doWSms1oXjnYwyTywFWn3uhLSD3pJByDak8aC7VxgjqMRrJEUNMzXEcuV1Rh3FXsHMFdvJ6v",
  "key8": "3Vxx45tZxaNQd71p5Yu5W29evK4RCfGoZxUe5Dgc1t2CNXc47e7mnhd2xWwLPrfRsX32AJV7oau2zdXW1NU5ThMJ",
  "key9": "4yauqSWuAA8uZVQsDsMnxcp8B5eGFUY6ZT2WwVcunp6jpiCZMTUA1NCjC83Vdag1wibhMUQuaF1V9XjCfubTaLKW",
  "key10": "3UoJQgaJXubGc4wTypfw8TrGLwJC4NLi6nU7NxS3194GDKihek6bTRkbETXnWJWaeHxzqXkMywm8udoGRVJVCHMZ",
  "key11": "3EemLf5UjeztzvyZzVMdvFQaxhgMK93nLHrK4h7eezLZ4rHmZU4Z1dJ4R64hwvNpgJWNqK3RHBQMJxeA8NWYwM3j",
  "key12": "baVrUZKywQFYxowjcvGGA56dVYCHmUjRDguWRH5nBEraf1Dx9Ftz2CcvfSaXZSFPpeu8Wd5HxsyUrmXzi7ZEMYk",
  "key13": "3n7dbBs3nkt5Wu9uhCZ3WpPQc32ALysirXiQmWyHBhHQoykrXMfEteKeDnG7huy13568AgwcL1bLtZYGXbHnNUep",
  "key14": "jPC9Tmb5PwMoZvGxL17K9NFhL8GrENrJC7fWuQ34XpqRGfrM2jJkSD1HiDWZBKJdmtLqM71zs4Cfhh3xWCF9tTa",
  "key15": "2EKrkYX7s8YWvxEFxxTto3akxjXbuHwJuNiECy5w6DjCuVuXoRjRiNFnKJxNt6YNHmg3AVp25VzaKzWQYfoibyAP",
  "key16": "5jwLUCnx1cmP2G7r2ZBHKfiKjNaGnMd6EZm5V7sFetuPWEjAxYtnJuNjTxTHwVMKV46aqptpZEfQFuUaubLD3mWB",
  "key17": "23iuhRUQAaugHz5z5LxueEkkWcuSwceaNaaGXXzmFKnBx2oqWCwGm3FLd5e18BozGA2qNBLLreM4VmmL7S3iNSb2",
  "key18": "4SU2jRV2CtiNpbfcrE8iq9ABaCTHZzSNYD5jRkmQEu6uh8qq3AZ74n73uLx64MweHMd9R9dHCBYkXV1SG23u4tT4",
  "key19": "2NoeduyWn4oPgWtALjsGJvaZ7Ck3zd8CGJnTg8LtCe2zhmCwjmQJMTa5TY6sAbGsi4fZh2i91fEdNB9JmXsBstCN",
  "key20": "3ntozbytxGTmLxVE45MubCpamThmdz4Q3eSzZ3Fz2yYcauXgeYXeWum6Ru9ZS9QBi4BYwrV9YkVKmfBxZgE1YTDa",
  "key21": "45Ve6yJetRm7XFdNXDNvAGtKrQWusuGAbJJpD9Spu3Yxt2EBCdm8VdNXeB75QJbdfzr4ZBcJZXXMGooU6PVkJXnM",
  "key22": "5N8KXiReJBACkokR8DygKMSwPczkpxxZLojpwbg2FTi5M2dqJ6G9nnj9jPU322gThQHdDMaZvp6H31peLe5vybh9",
  "key23": "3Jq1egQVJkb235ztFELtW5gSDFSx9cyaXMDiGPfAiQDgqNDHoyy9eUyoGFoE4EK16XtC29wK839NKGhfiaAKc6kh",
  "key24": "551PwHgendUjWGm7xKY4EQKuMVQsBd1tgVC4XYGLR8ENBC5jwyC95tZ1Rb9in6JriiP24mVSynJxqW1b4ymHxVVB",
  "key25": "26kCsq1MGojh7fEWFapgYVdWkzhkByH4MmWPDWJqoxrtA9NoEnkQ6NejjD6BLP6UgvX66FpGo8dPNWre4XgyJYYM",
  "key26": "3gST5u3eLkQekR2QKnYDtXtyyHVZ9aRCrMNWN9ivKXR3c3JvvqgDU9Vxqi9dbNU4fTdTtzDhy5fJc8ub9RzYqssa",
  "key27": "2Mu1cFVrsdBqGarFz4Rfw484Yp8z2GNxkba2sH6PxCjX5SnWvNE9Zy3epXQNkoNHWNhD5Hqmxni2NQ69fhjSNZ6E",
  "key28": "29pSuB11wwqXTFwtTdVYAdDF7C6TuhoVPYuBmYMe8SGoDj5Cv8Z8grGtTbV3gRSmb9qSF6752NaSvvxyRm8NvcTj",
  "key29": "5dbGPiU4ojFb5HNUUtK4dyjNaTkLHBbkdqiSbfy5m7qjc9hv36q2ntm8CqzDnQDyqRnTzRNkTryj1g4fUEyznWNr",
  "key30": "3MBpK9nJHw9ZLb1sp8g6KijjRffeVfZUKF6zqvSgaHwbREhwvJRXRQ3khe967ARPrzK672hVze6vs92Dm62u78p",
  "key31": "JdfwyFqGU3wcJNm4gtJa9xnWWAjdZpUhcSSSChN57qUs3731N8jMMJeY1V8BUnXB5SnHWNC88jw679cGxPEfDmj",
  "key32": "62GkJ3pCSZ2ebCZPahRw3krnVNEGj9apSw8RhrrruZ5Z1SLyF9N7Q3Qd5GHrVJqkeP17bjhsjDgzPjumQCNCGDb8",
  "key33": "yfDSyra5DcKDtmXmA8HwToyF3PoqL2aCsw5741tHh8iXrtr3jawpsZ5dbsS7QtH4ev9N3qjtFuCeViiZ1udEWYA",
  "key34": "33qFsmmzo6aEu4Cg73XhvaC69eDsSkJfmq5EBpcJsoGj4Fh73GzKK9m6DiD8QnT5mS4gQkMxAmiUqpagMQsw8reM",
  "key35": "245YhyHfycm1QaX5wCPmjRowRTzTNdSLXfCUBA6MKGP54GjNxHcgxnFp62niV3PmTDnRB7JAjAxBDpnxQceMuCp9",
  "key36": "28LBwoeBxhp7q7btk387zDuQqgZf9HGx64mqkKE1DMYEfnmNeKqPDzrMGaTdLQ45x1mZW6mFozgDQhZXKUzRtZUV",
  "key37": "3Fp9xzwyP5gbTfh2ZzibQY3iBDs3KmPogxtFfkpV8psndP4jT7fGvBTw8zzHqZ9UV9moYT2SC6powXyjnqbeiM1i",
  "key38": "3ng9X1BNH9yy8fRLeZFr7BYKew1z5qfci1iqrzmC74E8hnzZo2ZKq9T6VS5GeUQJyBbVdM2vF2tHzrmXi8T9qHJE",
  "key39": "3yG21qbLsCgb4HFkHNatkUogsMMqq8quUi5oLUEoz5XV6vW7aXMiGYwJBvgU98oWM7Fv8Uyo1dYCn6WsgL2TCni",
  "key40": "5XG9Mh5wFPye6dYgtoyMP6twWAsgjYaceu8AhY8vYYKdbC7CWJWxgKjiWQASAYvfMBSd49XXy36g1ZCJWS3sjqiV",
  "key41": "59z9cTBfexnNjaKPogzjHzkBan91gkKnWSk5wmQkjRBN5kCarhSPLEcDU8dR1XmmMGDrJ6vmVpsFVzZwhZU3dzoT"
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
