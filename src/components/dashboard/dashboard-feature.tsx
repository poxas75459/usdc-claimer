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
    "2RSM3HYTQvKkRWQCXHw7UmDJmA3EkKMwgsnx7abdmHayWaDF1PsFVTrJpQ7aCk5JtjQJPhAGGxvssKhkMkjbRKkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jPMNY9gr4QBZpQ2yXu6ADBGEV8KvWpLyPpAKQUKUJud9ukv6wZf9Jwca3j4CHdQur8DDTUCbCJHzD1hCkQZtNMe",
  "key1": "3EP2fjG92q7EHphV8sA9e4kjtpRdcuddDaA4GpqppBiPEWZjAdCdTVszEtBkgdUMvbvqmUWhVxbJncL6RrGXzXzx",
  "key2": "YqC2DqG99vVkvajySMK1MNSHE6MAGH3BGsCfxPhdG6tmLmfR9T4cPjQJgoLnaHXosj5kLmmZQyCSrNVR6iKatzq",
  "key3": "5rYSg7ywfZaRk6ioS6PwUdBZfzPodGK4sWsccTYZjsJjimUAWyYThW4AfkNAYnDjQz7eCmn6LRbdjLxtSTt5p1vX",
  "key4": "3PS86xWpKkeosLUhvGcZxrYLGcc5zUdzHjvJQPZP1Bozc3iirpkHvgiKWRgon46qwr5MrKnRggJHDbCctvTViXVU",
  "key5": "5kGDaGcWsjvJ6QvuDWtexgyDBktyY7bLxYBU1EfMRGkabFq8NDHscGa2DxpQ8y3C8Un3JzjbjQXmHcFwogPt5Kkz",
  "key6": "4X2g92EeNyq6PqMQShG4cP1vyXDr6EUnNUmkmWk46GVbvaSQMCPhfnUEsWCHk9jsmskoQ2v4j7j47goyhySYP7aW",
  "key7": "58jfkMzig5LF7kyU8qcTU5weKKeRkV3gyfLP9aRnuAd6siRX8XGAfBNJ9jqCKzehASjeShCZ6unni1BJREr3eGVT",
  "key8": "36Ee4qZEtqha9uaTYennfp8Ug8FALc83vF1RoWzry7LMhKcg81cCBVzJWmsPJ3GX9XbFanqWfyy5EKh6XwtByY7V",
  "key9": "2ccAGTsgTgWBHFzZji2CNVPAjF5DzYbXFBTwqx8DTQdaQjfyrtHkiuYyUWgjZqNEYiw84vwTc1hDjciLqewGgzXe",
  "key10": "3J8a9k9YwDPbwaaUCEnUpUfDcvfPqEBbuhcRjKi43kQgdCSDobZ9861WmyrGSoe3stfRxFqL4MaJjU3KzDcthMpw",
  "key11": "3ngTZp8ZmeoiBQydC6249ZK99MWjgRLtJu3Cfs6Bv1KStKV1wuj5DgWRfBmyQTwF3Gb9R2eAsKNt3YBhqLzWmWRW",
  "key12": "52SbdjQeHKa9kpFo2uwYvDVFkDVkhhj3vf8EvjkEPoxgq1cV43FKm97CFcv22JYnb2zCXQygcXLiMDmZVPFVUi9P",
  "key13": "2F5LEwSS1gDMobLGHwYcJJnFRMHmZwAm5yNKY8yqqDaFJe2MY42z66YQXDusJZrtx4JFqQbCv1XH2RFERY1qc5op",
  "key14": "3t91hbfP93ayfRtP9EMKA3iv2CRDtAT5ufjhtcAsAYctSBfgg9p3qxdeN1Q1Y8MV4uhgT8T5cBywtvD843qaFiQ8",
  "key15": "4hAThkM136tazhciQZwJ3X6XebJUoG5PHGBhYt7PVVbcHTxpLFcdBXw9uPFUkBfwEKjVap4EsZkcb1pr5jdhWhnx",
  "key16": "5bbF833amjybaSSySbeDTCeccZBmHcmtz3JKaJf2AN3VfD4Rv7icu6nPBDX744JJsQDfE1ToReABKhyzrhrFF573",
  "key17": "2oz84iiqBUNbvC1XeKXMTi48S5XuoUexjWgVjNtHXxvQFotbJmgthW33HxjQ22n1sad5hudN9uHvyvtDXVJM7Fsq",
  "key18": "4WkZGfCBJ4WZYLSDXYNvma2smQU58TJ2Vjzeoc3kQcAkrdX8HrY9B2ki2gvq8jnUFKPnVWoZkRYxwZXFu5qaWePD",
  "key19": "44LZSDbWxZKSRJFwNZBhQZcau94ZybU5QDbAnwpyZ2Ckx4sCWKvZwpuRW1H8fAJQPGA3TMiweyUGdQRh2QfNXzUe",
  "key20": "2mNozFBiVi7Aept6qypkWpQeW18UmzUiRagAi1zDZhj5PNrCzzQrqfi1tHpqKQed62dYdLi3R8EMit4d5tw93WzY",
  "key21": "4zAx5fkGAnPUGwsWVzBWKvggHiKY6RP2bmwfMaV1WoCs9KpG8F59R3MWAQYRHi5dq1Ddj676gVK5sCdx1XpVNkcg",
  "key22": "ekfadvJ1fgHqmnUXUv93MWUFAA9cy258yHZP16Ppm1eHiXAWfwtf2AJShSjnZgRDygaKFLt3Fu57bBy63ZGR45U",
  "key23": "4RKPwPC6M2pqBr5CTtgnEP6vo1osLWkwQnTgrBaCsREZSJdytfwDfiVpWUoSuPM6zEPXQk1DciEbtqj8SiR3zGmi",
  "key24": "55My4qhDU8YeXfSegJRJ9HtFwtwhJHhYW6h1wBf8b9i2b3JBVHG4rKnZYzaFkUyKVMX9aUpVh9NWZmyGrWhhUjuD",
  "key25": "5SP2Q96C9LT4hWPqurnQaZ1oEwefYAePJQ4LN4EFFokJQXVJdJ1yjPsJaEpqEJJhzSMpreyYk3s8sigbFihwHdyj",
  "key26": "2GDCggnxcDj2HPuJqieE9cyN9Z6wCoqjU7v8sVZiSbK91D13cHt5G6hEMguVF3CvRsYLJoVuGeef5vXcchW6rTon",
  "key27": "55B5BTEWVuAkxKjeTpVRB1Tsc1fKxx7QTCgngs5emgrdrgtTH4jxJSfiZya3koCVyWgzSBmM33RDDEdR1MtCPGvm",
  "key28": "48MyYnmFGNYQqaGt7VqrdicezdRMxMCMPuySF9KEV7gaQEcQUdi1EHEQPwYpF13kqy61cWSzWRoHa43dagtgr8xT",
  "key29": "3BmeMVXadnMDCvihh8PAcQFDhseiURZpyYKfExmAZD18nCJj1AtSiRWtesfKnD6YTA1eM3oLs4ffKiZTZwhU6qZQ",
  "key30": "5hUtuzE6UHhUUL1pgqL42zjkLH9j3X8Muger8ZqfTUpyAVZCese7LxAeWMcJDTRp46RNg8xQvedScqb36AM9yp8K",
  "key31": "45N1nPzXwi5S6Nxktg777rqeMHPS4neUmN6YWqY4zyMGjV7Rk8dVc7bqk5xQN9WQcMbooTCfNYDyZFhc6xYywpBp",
  "key32": "3YBxnJHSSEpFiVH8dV374WBZFosTWaX4h3KjU8yN2FHjE752nsT44iVm2a7FdFDTEbggBcEprWagMRWHvsHRJrRh",
  "key33": "5qy8uWm2ut71Mb3ejiDZmVqB1Lbvq6mymbUbqmC6tNtxJniU1a6BjaRS9kiAMLfietqVngVSNgcBJCtVG4x1wqS1",
  "key34": "2QHrrFPhLP8k5wAzKR2mtCgm4xDFRvG8DbyFNbA2umcyBUuUsFZNVWjbLbkGWNboB7kepoNab9My4rnP7qLmrWzd",
  "key35": "2Nk3jitgAyyTaPdnFGtJxsMEP1xnV1Zw6Rh44r56ATaoBNL66dTKexRZ6BFnFXuoVmyTV9xGz574rodXoMuxXi3Y",
  "key36": "2cDv8kknuGvCfPgcEitB2JRL3NzpfbYP5ZsngZ4YF3Q2FvUxiDUYB1XzT56c82m8puTCREEQ6ydJ6NSczpUof3Em",
  "key37": "5FAt84Fh4tWfPbE7uzgqqPyLYFo2ThVpLsse25j5RLsvBErLnwp8HQegG91jZcE6UJHoBVzgYEQYVZtWxzXMVSMR",
  "key38": "3SU6W3spaCwtqK1CLxdrhSuS5ntPFK9HkibVyQjMYQC7Fz8ChotYmZbRfKT4B3PJEQyZFxPD1m7sedLNNKRujxwd",
  "key39": "44vLWUi6XoTGumh43JAav5vQSqPdWsmzTo9LkrQUGfqAwa3RffgUWZVLqxQ9CkAxuRJan84bDQ9kjH69tkHsLjb2",
  "key40": "4fCWMr7spqx3QHJBX4z6jCYtqq16LUyZeRdctKUD7PcekKWZ3gwGNuvbhLk7EUA3DsDu69TwUBtSM56RwExRikun",
  "key41": "3Y3aRGqpgZhBHkW4uEjjrGGMRimphMiwy3Ve9Y6i8GSs1WqxDpdYqTwxHm7YJGKTjA6irKSY1NqWTq8G35gfFsFk"
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
