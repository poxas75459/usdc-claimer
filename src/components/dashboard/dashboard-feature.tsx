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
    "4gGCfoeJ4wmd9UpEMhM1Hkb874mh2dNDeiKFUo2yEJF6Ubum3faZV9Max1jbqGK1CQLsbE9GMrVZ8DB5aqmyQdRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39N8TsTbv2vU1Vz1kUgknfPJurFYosLoXPkMvFNi61NHwPA59gEPAVWxR5XUeQbhNdR7aJa4fxtRnBBQj8vx8Fir",
  "key1": "31ekk4jLuWFgbjEnFnX8Dc3KtyuR8YgcHbf8iBPeixCr9HMLx4LHBDNgFVQEDRCPnFPdwFbVKNnzHkgfSBHNHbjT",
  "key2": "5FSGEqtcvyTumHoME8Yk62Z8UHqRew2V1VYsGySNKcHzvdoW5gZfaK913pbmk8fWM1DLQSbo7W3Tb84iTsuPWmS4",
  "key3": "5Rvr6sn4wnSinXL3wwXRhHtz5FdPFRCZeuEi3GCRuaQGczSssLeWamhcyoa5JWn2w9VB2ovrCvnvpv4H6H1mWaDB",
  "key4": "2BNpLot5LXF3sjaE5fRHzcHHigvkwaWFv3KjuZmHfv2wukrn73xLMzd9K1XwSwCWBU5sTzZPQM9sQtSLx4QiTwVk",
  "key5": "qoNJbf48DYMXzoHUKSeM1dEerMo5izSYTGyihtgNsT5hpSFRuReLe87ZuSzzKZQEyPbUP8u2rvwmtQhcXhygstk",
  "key6": "2wYUwtGP7EMvrWPA9gWReqyS2HXDgkzmv41sg2JSC2Fjfy3DqSte2c5Jot9HjCFzttn9joya8ftVo2oU6bbMfZpN",
  "key7": "3D12EExetonHDr46gTRiTWd1cwdAcvxDUiHrawNYsL6e6TYxPgK4MUd6ZDDF8VLKt33Z4izeiaBpbGC82xjseTeB",
  "key8": "TXwXraU7NuDUDkGQBFPRYLZykWsmBUWgQCAfy5qbszo5Fjk8sNdFuvEXvNYRRsycHgqP9eNz4RJoayg5UriyAEs",
  "key9": "4Us49SrKLXFHCgcBrfXm8pa2JuveRZzWrAmohL1Wpuz4NixDXSmDUB4WQhUjn5FNHn2Bm7sJqb3845LGUkNxdGZ8",
  "key10": "5wLp6pKP1Kj1Nm43ioXvZmJ9rv44gucvEeuN8rGFrguxmsqx6EtMefvCS6N2iJYnsQma6ktZ6ZTfxNrbs8tg48hV",
  "key11": "54tiQjSDW5oeZhhKhBage93jieLtYjr3J2CbCM9x4PLq6HDEoC2KKW8pYErqyHBz9LVmSAg8EnqsTzSnwgukHKwd",
  "key12": "2nyjaFjsZQp1btC9TAMBt2QWYhxX8vSpB3CKXHB1uR1EHVTBFSMeJotScCbuzzuPB3stmYDzA8LXD6ny8Wmoj9Mz",
  "key13": "4wzKygaKsMuM5gm1tT5zU156rVUgDEa3WW8JXaEUmwjCmY2t9XCA2yaz18LT5t8AGB3hZrVxo5LqjuWSXp3si6qc",
  "key14": "2oTui1Rob9PagVZXp9U5q4WhGvjLaXips2b13F56jgy7pcPePmvFbpB562Ptip17wZcYzzEHQw8BoU1Lq42dPYCu",
  "key15": "2xoniEmYnCX2Jn8PaFJMDHZjQQ1PLGV4XoCvY286j9TSP5f1CyKNDvCXQAwFZsdHzqVpg25HKU3d1YWwmb3xi7ak",
  "key16": "3LFUynwccEkLn4EeYXXbonjDo38Qitqumn4AiGLhiyF9zJHFiRhy2PBoe6GqX3TymGF7JDMAPWKTZeaKTfNpFqfJ",
  "key17": "3JFDN7Awu2yWGuMgYAUJ3sxouwxUjRK9mgaVRXskPgRNe3yJQFyuK3zVFY8soakGkEMN42xUFDxTritEkptwojxf",
  "key18": "4XHvKMJ1Gm9qHzaDKDPgZ4Heb1m7nBRw7y6eoP2ZxvKfUm5wAY4YNvivFspaUWbyXqTJw9Hec8jSte84hShR3myv",
  "key19": "DaMBX3Z3qfNzf3En2cdcgJc7BQi9NJBgbonZw9yiniTpWfBt3TdLcBC3RqXLcmzeCuUFRmL9vVpF5UkWxaq4neT",
  "key20": "v8VKp9EaMGYH4ytEFczrd9FkfSYWZd5t9CvYTyZUhYUBCNqaMkwY9qMuvvkK4w8pea1yVozWJdahM6RTwAS4uAy",
  "key21": "42WCyy8sSdFgPzKvKM8JMYTf3Wsq8aH8dyscHyAGNYWto3UzXrCpXhhKib4o9526tdxqA4Q5yA1s15o1fSBQzDzb",
  "key22": "4Lc54GsNJCmkaPoPWSri5FMpRupBYQ32apsFJ4ZVSzP6PY7DzC1rdxFkpGbkwx3se5w8muUSDzUfkKtmcrZhLF2R",
  "key23": "2X5SVtAB1KEZ1XM7sfd5f4Zyj2FEDHa2RWLZW1aycD8XZyZrje9HgY9bYur9giBbaDm6grBuJEdZQ1QEzbZxtNR7",
  "key24": "2H5NDokHmXuwgZxRjJg3JJ885E7ohcQtgF7AK4T4nmcPhavyUTaY7abzbC7jxhtoNizxjWG68qcm4MbLCit7Vmcg",
  "key25": "58hvgMUM5DsXsJpxeWSQdapBcCamoM5ANRq14VTECmPpZuFKvLq2jYJUWyfzvpsPPCLo4GSssCMf6ctCoASUpMHW",
  "key26": "4wBwXRFxmKfV4GcbiG1pwfHWSXQUyxmwVX3WUtoPSAvd3G7rSFVbWpoS8XJkkZqy29JiZpu2PHHEEriJiUAkWPtH",
  "key27": "3pHaM1nNxMGMnpVCCkyvAX72Fnx7so7Z9KvX2i6yiap3pqz75jUFntBvzSDHbncj6GaJq5tzqQL6yePXhthJZcn3",
  "key28": "1fB2J1ox3Ce6FTnVfjAEUryLzkJi8EC6cKsxNdDAbFLK85KzJy2bt6JgoBU8q4sYMJpXmCjRiC98ACvfPrYndN",
  "key29": "5Zzw2x5dU22tbzoTvhEtWWctb6UxbEUKyYLZUG7r2ieWWAhNSxSTdCK4YV6zY9M89cbKcZaUL49Gy74wgJoYkrPp",
  "key30": "4Z7vHDdUExX5KoxKPdgQkruDjGaht9rfrngcENTfWFwnPUL838s6Ugnd8GJaSikqCpE4uYUWmwdbE1ULXwSJprAV",
  "key31": "2TRw5gKvupQGbzZFd8nuf7so1fQQvzFcag1Rhu8R11gz7JcAGCmZe9s1eMrjygE8GZizuQhsMBVEwuB2xKZCFnJn",
  "key32": "5QmJQgSAkXTyobuZrG9kckpbKzHd88iTjYBbSN2HHPbBZnpJiTQogPDgg6uZBjpC3sj8APvP4q31xTEcncrGHBnE",
  "key33": "2iUo3UuVM8uAfYxZJxZ6Fv1J7dkPYUqq2oqxhYdUKMDAscG6wBoxDwzJdEAXu41TXfhoGDj1QpYys6uLLSPCJBb",
  "key34": "46LuXj8s9EdjLuCTKAzMhHniBkbbwFJkRw36pBxxXxEQt1NmQHXwp8CkSDvZZEXKhzixfvsZasYdH3g2yqrJ7WrE",
  "key35": "3Yx4XeyycF6BTHXXzyiuKhqcRF3cL5SuFd35vYn9GpmBVyHGynWMSiEdfwstqrzGPpqZUVERKWheXDjrhCnRiRbF",
  "key36": "vM72nwMUhwAfNZeJ8bWpmTeJNw23ue4XP9ycWWaTVgdtkSANfc3DhP2dKtbRfgzHm67DfU9nA7AYNubR4BbpXqK",
  "key37": "5dFATKgGXK6GfxupsUT7byxauTetmqT8mQM8eqfDwwd1dwwWKWZTEExAxUkP4mk3Z99FpNezZwGWQ3BwHmz2pYbq",
  "key38": "219ZuQmE8UyGczjxqeVzvByDkgNh8VnnpbUMQMsNDWDaqaEe7omhetR9NZjaWvn9dVxKVutu4TxHk1pSRSYCWiDY",
  "key39": "5JVewSbzJFZJBYN35gcdwARxKSSwaF8h2gFqJiQjRzohgadm7f2jNBt4SDRdomjkU9dAqpd7pQnLtMzU2Bib8fR4",
  "key40": "F8dXrMp1TcuFLj8zWKGFmTrrcnDGYcz6cDyBLA77DZcnGPk16nrnKiwUEx16MBhbYwb6ZjmN2GxGhCw1RuN2e53",
  "key41": "27fVyYic48PwLnXAgp62e9cFyrvGTyJcVnnQoJhekc8KrDqdMKRhTNUr4teqaTzN9VxLXRWs2BLBGBH1rpuUZy7Z"
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
