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
    "64es13q75UtNc5TxQKSgLcBQuR2y53ED1K8hbpVUom3a3fE4tz8epkrFYeNaKXEzD48pgoor3dkV4whArJK3roLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qCrpqSwX3vgz8af9QmkrFh8DW3HvodhWQTWUEsXZ96wFzunhLnuYzd49ByP3KAn3t56RHfvkkjCboxXUMQ63S8n",
  "key1": "4N42mp2UTNY7cpNPwVzr2XpHZT4NCyubMjaUDuiCPV3b3rk7y6B9pZ2krLcds9sfqos96jQFvyn2H9gHCrdemXc1",
  "key2": "4hHU4SQegSRg4WamsLtEUKfWGa3sdph4qekcNLTJkRVzKZZVdZcV7qAvXhtCRh5yEsFTQxDciEnwXivq8H5bweVF",
  "key3": "1ZWZeFQ9c5ssS6ek9ou3BFLhn6ffYp1FMGz2YJDXJBBoPPKmUq3ASBUSehaF63SoCLtJmRUSRgyPKsMhEuR4V4t",
  "key4": "5JSuH2ZtGadnRoceVSWS999UeiZWAhnAmpMPNiswtqevSq2CE29d9Lz5NSJLPhKQTs7wh3ba1Yv4yerNsPBbs9Mv",
  "key5": "3rUxZ5oX5vaCewdovQNeYm43a2Sxu5ybrewatLTYsm8bjJRhkacWQi8CirGi6TUL2rApYYhYJBsb64zpV4Ho28c8",
  "key6": "5rG2rrrxpVKXMpcgsSqq98yd11fVeb5GhFVkTPa12XZaJzW997bUT8TX9WZpUDeg8Xu79LWShXEmrNgc1mteDyob",
  "key7": "3wjoe9TNiYzvYM8hFBTzxXbtwAg3nu2nXQBPucgxE35MVbEqvNiisXPgZLQepQHkQNgWq9XkXRJoiGHv2VQYNkBV",
  "key8": "3etEt7Kjz9sbnqajKSz9nNyFZqKPpJQigLcXoJwF9HrELZAKo9b8nEKj6P37qYGNRWALF6oKZe3fYC22QAKsSbve",
  "key9": "1xcWdp9rfxRVwx9oiH4C5GpHgVwSQTRUaVYXxPgx2inKLCxgRoUijF7THoKZGXHNhZ6qsgB7kvr2tQQShdeXyab",
  "key10": "2fRM5vjmJCV8mquQVDC5JjkHuUq7W17UQFjyArcDwzKUuEUYaXWyefURmsnMw6cYqjgK4X5d8Mjyi8sNtopUARcv",
  "key11": "2VPow5jTYVWuNi2sh3sFX2KsCfsYNHiNsdAbqtEkgicg9V5d2ka2qD996jDposGwDGJwRiTfZdAwyxDjf9DSW9CN",
  "key12": "2Qd9UKvxGT4hCSJFd2KDEVQVChKEakwxetUMYfXQGYAHt47eCzRSuKH2D6gmrHTdTKtPqWm7dFnA5QTj3vNp5NaD",
  "key13": "5kLV8pMTjS3ETNWhs6fKLPuyH8qtDejWnvbvwiA1aMRcPWqjVqTrLQgfrG58e6D3GPYX4Fo3sW1zSeZYX1bThQVs",
  "key14": "3481qasGrPxoaj76G4wbs9yBrLqcXFRt8S2fuXz4MPhaWk5P4Pw5PFr2wLPsMv5CxZsb2aZDHcEAVJutKfJg2sNZ",
  "key15": "25vUV4Jv4SG7Cm4tf8tGxFWxGqEE3WzmkinpA3jcoyp1FBJs8w1hyfynpq7J28pUevVftc385afjXkr9ew7ib5ry",
  "key16": "ncibezr4QWCx61bYp91F7BzvEqnsZNFVMm689JJKRSPgpTfgCHqGJWcsqmxg8XUvx7eXGYN39JPaNhyTPe6Kutu",
  "key17": "ukUTTmo1mSUimEWAx829QxtGXhQMr2kPb6hYimquX3t54eeeZrVzq23JdYTknTqD3jknvYqkysuA5vxJywfgDj4",
  "key18": "26SAej4yfwsuNSD388AaFFH1aEmv1KxUvu68KM9jtzXTRMtGgv2Pos1d2BVhee1teR3o56xW794R9naFkVpF7TtZ",
  "key19": "2C4EjmrgSvQnTChKARnMeJ9eJNoQ5iv1Xcb81HVtP8rXc5bf5BxkvqXtUdiZ3RCGM5RZaZv3zf4baDpcLejanS3z",
  "key20": "2461ZhMSbXAkNEVhxw6r9gosPn6ip3XHKQcEXKAtC7KLmLbqNLu59gwgELeFcFi257BD8mievRKUeL37buBMt6fD",
  "key21": "4qEpXtpKNzS5mDhuEgjak9LqwYNo5X4DQRCBcjJ84WYro9WdNTzkqdyFEg3jEE41nhcQfdqGDRL3xDTTRPioPooY",
  "key22": "RtZv7p4HgZJPsv7Qqav4sUMRwTeRM3do9HQ26UhthH5ZKS1tD6d6Nb3Jf2LyDF6EMKmkfNCfg6Dx3WSTLxxFAos",
  "key23": "2UkLsuGV3yyPCUHHaM5NTW5VDNW8UkWZYSPMFwUJZsTieTYyfVtsYGKmU7ShE5EEZweNEt2KJFrB64p6zNR5dyB7",
  "key24": "2s9Jr85hbHGLmn3bArhFUnZXP36Vg23qtBMtXfsNF1pNgYD7rvdMxi2wLzqsLuZgoCBD96oGvvaUoSEBLtngFaN3",
  "key25": "2sCJ2H3oHwAEuRDmRdU33LbTj71Xb3UiGywbu8XjkwarZVpQtwLSUfwmHwDgyaTBHrHw1K2VrFZbfG6AMycvccDP",
  "key26": "2eZJ6nvkL24HNWmYzvLcMbQ5LbnTFysc3jydsrVVG9JLB8xmyrbZgf3aGpVG6o4Yd9a8PW4nKuaTZuhTLjXqRgwG",
  "key27": "5MH4Ti3Qp7YAL8Yuenr666CxXBNLvoi1bDVcygjGL8U7Hxepea7Ln5YdqVYm6nw4BLqbpfXbP64H8ewL3xbvvsmy",
  "key28": "2KGkEfpzbkym57PGhEnjLp5A6VQHoHKNchhehV33dZnzzWrpCF7LwnMFg8NL1E3MHs4ZpTCQSoRDi6mJxdWgWh1E",
  "key29": "3B6WUid5DJ24eH4K6dqCZs8kWBgsUw9bKHr3oyVmNkMDSyR3nhqL9jBcdNktQ7XQp4UrdPxnhFxdoFUjhaKVnmsy",
  "key30": "2cicZbMKZGbNHWmBsd61uJndHf9Wu4JPFp5CwXutQFvHKicwZUxgyy8VVfvpsDh3q3gHxpL6GQ2KRmYDXoJXAVw3",
  "key31": "3yAPRGrsbZretmK8reTgqqqkKWPmy9bUedwoUzg6s8iCVBB9qayYxut2qG2ynYUPhGUoNSfys69YLYZhYuDMYNX4",
  "key32": "5mxi539XaUKLRzqha3ths4HGdg4VubsbLKXqP3MbaXj5VYZjzHYpq1AA5aP8ErvKuKjS88us5enFwTqbHRHye3QZ",
  "key33": "3XR1iJZzRoK7HTZTUXsfBzB8CMtTFemxEmMjzWakjtEURLREBb9JGzSL1SXUPrtYCZiubfpQWHKSYy6CjALEkdFD",
  "key34": "4PUnJgokx7C68DXsAP7F6VXy6GQ4DEDyTP4MsonMLbSLGisY5cqGoApMhJRqRd9Qx72HTxScFdue9cQixkXm6Syu",
  "key35": "KGyRyfwCVtc23hkmrHpy64jKBzZgq8ZG7249sKJTk8EnpSK4oLDwWD5hQYp6R982vNcdF33rPXxsinQYecFA3TU",
  "key36": "4ghbsNd5nRR9fASsSLM3tENjXwpQk4hyhEY79SxvYGpqN6vR9iEyZUk7EwN1ERvzXFF9kQbLdvU1YgWV88XdsT5z",
  "key37": "CTKNeoMJXiyhhszGfL78K5JKhwdEfMjUZ4aEuyxCzbCdYNENsed8nRpxgmHiped5gPH5jTb9WEJkFEaNyWad66W",
  "key38": "2qgEqCZwWuuV2p37RPgPUW9kxetrgQ9eCKDFHA75Yg9cFyXjUeS24UH8DGWQ7SNrGdUUvhREifGxpfzdf1ioBytz",
  "key39": "3KiGdNQJEZcek7gMjhK7dmFnHb3vRDRu8FPTgA3r2B2KLxiq2krgcdu6hQjEezPuJXcfx6ukunCmqnj2hFQ7Atdj",
  "key40": "2fntfa6sHpisri44KJW8KyF3kmic7wpoZcZPgL8tWKmLf3DzJWEF3wqZr9797SjTo4PxZLDEHK2hm8m3kugu1kdb",
  "key41": "dcLQdR7wjdiegVgsjATVWweA5fWfsfjp8mGpgeT6YUdwm5rZG3TG3JcHcWuyJkZcfwUsYerEsCWaCUC42tShYAm",
  "key42": "3ZE6meLFq6xZgD2DzbAtbfqA4DidtqMqtwcsE4Fe6xyy2JNK2g6uwpgy25p5QANEKrjxMvV25yerK6UYAcpWsXCs",
  "key43": "5eDNgH2W2RHJ3DFpXYGWm3X3HqrHoEJ5mdej7BButdquqVU9zYL4xUyM63BNCHSYt95BYn3vFgjZsiuguTzdfq63",
  "key44": "4RxaapxbjJzfDbVKcXviacFp9amZwV1PkqBA9ynUAixuLoyCAop7jEJqfZNmUWQii8terYA8hyB6JH399SzY8SaM"
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
