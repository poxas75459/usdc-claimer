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
    "22v4e7xJ7Sd6UFjgyZTSoKMWNzTWFLbpewEZjLwXC49xobN6R7Hk7b71widnv2dhTD4eGEizBjK1bxW5gfTYgevK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zTZnwZVdbZof8UhBAK6CE5NMYvP5eh75sAqeutUvPExFMWJevADnpta4CATzLEPB9b2qmAxbCjpJseCsscKRJr",
  "key1": "4pkAPrw7iQnQMqbbCqTbHWoSyyccE5YZiN99Wo65LoRgJXcv4XAr2PVCkGmHzm9kxGhFXC7J2gQ4gh7dY3cgbPxL",
  "key2": "4t8StB6oS8Nb39whXyRWttrGjZoHhThsgm5ca7aTd3RY5q522WmVyAZShF8J3VbMwTf1te84HYcRTc8ZYmDrPnTQ",
  "key3": "3GSQRZibgYhWJRrAYdj7dVQdN5c2SBKzArCmoNyfN7JN3rjjyP8S2qGTUGRMFg5hNJ9WEFjLg5drnhBFCXRfsWtZ",
  "key4": "32nRB4fkCkPAb41sBy5wmKqHyFxqeCCeXDgedWWZCL3KKJX3JBW8fXBJPGi87gCCnPR3GoCL8VayL4XXdsqz7f64",
  "key5": "548eF9Wg1YiVapErGNYXpWtUcmA3tBuFEHyW2UBn4K3hP5SwbxedWm2xEqLgbwf3kUuwPSmqjLpFyWp5sRDMEVGn",
  "key6": "3CE9TQifdwforrPrGJW7YxUifAVcHpxWRexXanrLS7P49f27VEJNcxSAwvCgcQVPTe4poNbxw9TnQcGV97H1b2Xe",
  "key7": "25JeJ4kLxCpDd76DbWDj7k9Qk64z3o8UauqvqpbRM8kRfK9vb4SQmPDEZE6aakUTwXBeE8BFBkNMkHLqtogEHN4D",
  "key8": "434b8ufmPN6qEgq7ePNmksDiBvQGzJ6XKNhy4RtnBdJn3ZGqtZedMBUDmB2FLiPsbfh4jMezd8vfNRGhY872Cpy",
  "key9": "3ocybWSMR8utJyVaZKvs7ZMF23QKWb34cfsWCMHTQLxr2H4C5wkpQHL1KX52ipRaMuzDmQsbTYmXzLb9kQ42tirw",
  "key10": "gYG8JXc6Po8mJYq8nPMRRWjDYdiLAGHUyp7dzVNgWRsUsX9vCyMCx295fNVt5yvzSFc5aAxTzijJfvg4VVuKaLY",
  "key11": "PfXvpXoUs2dHCLTKMHf9dhgKbUUSR9m6Za6Ths6hZ4kW4gy87jRNk85AZU892zoTmCWPQfKdKGvc6wa3UraFrQw",
  "key12": "52464rZX2ZZo76iaTQAfXZecTcrHnGdwvBo7JAjAf8bashL6iZwnt6gwrUZcW5nSfBFqDJ53U6438f14xhGEYYU1",
  "key13": "A5vwuXdr3oEg3JZRCszg5wXHBMsRiJFtZhuN2wa3MVaYdMsQSWUGA7tJ5PgRUqN6fKiLqoUibubXWAgXYa7ZyeP",
  "key14": "27GU9zKKQ9wf5EZHBo6VDbLK7th5JZkYP79uskqoko8wkd4YAsYki6QVB63wvotQN9SJbRnnmhC2ss4WzYotkihP",
  "key15": "4Hqmd7UaDedAUPGQv6G7XAMxzwoK7ifjjMe8hbase13gq8BzmcwX9a6y2Ls5L8AcX2ZP8nVMPMt2unESkrF4ZEik",
  "key16": "5CyzfMmSL7DXUmoae41YCV3QK4fV6G8PHexyh5vf6o4q8vw17VuyyqCMEJ9gLkgfKtirWCXE6s2wKpqh9uY8UKCm",
  "key17": "36amVsEy1Wx1MTJyHcyc1CzKUVRbrxB2gNP5c4BoK1Y9JczQdoupP2C5CZmeiRE7XAQk5QGXPvH9227MDUda7JXm",
  "key18": "2UVKYfwRtHDAAAvdw9uJWcixkcScHw8qz97PZvq9cRH4eAYDWCwTRxartSmgGnCxHGzUFymKdDgpgebRnsGoe5Wy",
  "key19": "wNXssaYh1ZLMECzJPAGdf1ns65gUf9J29szYMd9tdk7WvSNhdkAe3phKJqK9whw9SKoGZQSfVzvrpv9B2Rj9dqg",
  "key20": "5s8NpJTxpyqa24ZgywApSD2fPdVnViZYpZG9Payh6Q6uMBGJkyuXijy3YKW5pYNT7P1TxVyqgME4XQHnBwLqgqYu",
  "key21": "4WkLpqBGqwunLoRagZGAoiUFnGuEHgigNPPSAfM8pNg6f5tGhTAyuL2HuCAm6Hgf1HhqgCufZLsEpQsLydXjP2LE",
  "key22": "5pX1Ez7vK1JkCyEJbfGhq5c4szkPxRMV5fTmZYrixCMCK9FMHmXCRtWxmd8wXW2LANt99A7Pu5dPyA964Tvne6MM",
  "key23": "29yWqEpmo46WpYRCcg9gsZvqm6A7E1oiDJ7dTnvevQrmzSDQwfPwQ5vBfWo8AQEvYGBvavKApTS5wW22Bph1Hxy8",
  "key24": "ZAAQxXSNvYUQo9kdsxAsGDSArzeMWpqxmrNyqhrSPzt4RYrZSZpWAJaFuwWh1pbyVSWeG5E4PBcD6m7DBQMq1hj",
  "key25": "2oKeQZBshmBQTLXbP27nDU9DGBrzjFMziFr5k4X32ewrfTpoixvNKwrapqQFovSBQ5St3XwZ3Gx97SU2FDoEBYLz",
  "key26": "3AWtBkfuHzcDRszYxvqQ7uHGvqGahXbscb1frefRYKpbqBLig57P7SgfogYBjqHeZLfwurJ9yVEzF1ih4o4tFAzJ",
  "key27": "5fsSAEAWnxLG8Js7fy6w3tZXVL3bbzSCFA6ahp3MnZYYnAvMrG4pXwoF4zvCWdXrRyhiBhmjGSQSSCiuKyUcdZb3",
  "key28": "4igNyPh7VebEVjfCh2eptXyhMKXVsD95VqZGor5AZHQ9LiuXuDVu69dr8dJEneDjsVDungWAaQVf4mgVg8wj389a",
  "key29": "5AU4D8c9RWns9Taqxwa5AKDj1tXp4C9qdXk8GqatcbDzpdgHBr6SRgMCQK76hurvv3Y3iiLuGRd4uXKt2VKMMcDX",
  "key30": "NqGxqVsFtLafALXbXGDcAgyUsiMKfQYpMseh9jVDUE3uPfYKZxzycoYaDAQDY26ysjPmwudwdwzs3pVqijJp3Sz",
  "key31": "66DftSTkZYYNhxHeqsSqNUqGmETcPVce7vmPZ6zZHPCuwMpzZV9PfRmT3NVFi1cXa2rLQJZLRnCHRqEALxyL9hnb",
  "key32": "52BbpF1Gy3cMXAkgvxFXXEymY9T9ppx1vHToW1dbB1RdNudpN53R2CFRUF5SfuYwHmSTUpZXZt5TRzZugC2SEQUk",
  "key33": "2C6YeKK6LhAzoaFBL1c2xp7cFnA6u7v5PQLVEv83UQbXwAci9RyZrFhkjVcSVoB3rdJzBVGgaGXsoWgSXGsrYdfk",
  "key34": "2MEwMmT1gv69WD7kxd2P7ZdPWeePn1kkpf23hFZJqSDfAMPc7enKQzbuE42sJa6SuDM5bsjBU6H71JCHPvArY6kN",
  "key35": "2S1yo4kPtiToR9Tw8i6DDAYn9BAZAS5r7YdUaQUR1gQgisk7Bp6xj9aeaHVRhizwGqxGeCAWEm35ixAMi93h2UCH",
  "key36": "2ewoSHY617goMnnv596PxxAYGbn2cSZmqjvy6TsHkAtVdFRASZTVmXtQAjGZ4d6aVdkZmhATyLqN3cwgtjxWKRqP",
  "key37": "2DJ5Dd151RHgU38Gc98T5Zo1vqgAgu7wWU34MJFVRSG7D4KEi1mwzhopNgei89VHy9pCMyW72xch2MeLzraPKVpP",
  "key38": "4NkrVEARqv96XD5VdbKAx4VmgQ1FUC2dxD5JmNBDTbj9M9c6Risak6CaujyJzm3DdfBR62NxfivsVwxpDHas55YV",
  "key39": "5BfEkPsvoTWXHwGR922rjuFW6yLhUBCQJeLf4zcPHK84Se6Anex4QYZAdV8G1xnAoADkGgqFwVZeppEZpCNY75Tr",
  "key40": "5mi3XLTpJFsiZbP9du3kUutyPZYQMEZzPnU5hyFVuXTA3jR4cCiXp3VYdUcDD2SuxpmvSUqMHzS4GB2evPqTRidn",
  "key41": "4RKP4sa4khf1ZcUySHQWnxKgbTsB8p46N7gshecBfEpWhAWevzvxQ3an9HHPuKvFbZpvzreYR7QoGNCLDRFE9shn",
  "key42": "5Coij5fokxUWJdfHeCQScc7QLtiTD78HRaFyYRuBu79TgfjCcqNM2zZh57Y6DLNGXQikKrCuYdHYYZD6Lou7uRpj",
  "key43": "5XXjHqgvvQj9BTBw6WmwxmpGYLc56yQQDKufBoPy4QBDdoxMDytSj4o3caUkpyTPhMjEpJB3qoesoEpFZyhR239Z",
  "key44": "5zfXuNRwKK2BMBFA2DVZPnnj2yy4qBovzD41MGsAam5Rgqr48a2xCaHvLVKobRAzLwhG35uGYwh54RVbcYqMDUyi",
  "key45": "2L3GcF4q2Evu91FcBrC9nCeLQGNkzzgfBrJSmYF6D5TQNtnvnQEjz6YV5AxFELPFLC8t8BLfNY37DjZ8tT71ndiD",
  "key46": "4uxspKpESYj7GEuHuhrvh9ZUvYvkMv4pqW9G82iRCmhzywJw2XTvDRwb3KbQBTa2HENKnQaa79sBRAQ6Z3LyWFNo",
  "key47": "B2dVbNcZFLP9BBa3NmZSutfGAdJh2Gh43XowRTTvo1zEvCpzAiW9VvYX9XQGR4MXAg37x5e3a14A9PY4NTgCvVh",
  "key48": "EJ4PgEgaJy4Kb4AGhsABb2hF1D9vRN4JmZ15sW2zJpaR4aHuNQP3DA5MMTrdNY9xQsyJ29QSAX7NG4tixnNFmVY"
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
