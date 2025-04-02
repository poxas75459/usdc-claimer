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
    "5eGq994PZgf7xkag1Su5qyjUW7U2EDfLQ6GeQVp6VPikeo4qhGSV6oFufUMLxTjuNgYRncg3jLMZ2bsFWWeCceem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xc8auhzzvV6xquuwxjtMZy32qFUFNiLVguYfF9U17NagD2eCxyhiof4rwAASCMxAHNrsNcbffvwo7qexjPVRV13",
  "key1": "61T9BjNLPydURxGxpXQ4U4CEZtr6NMWL6m4JaZt5nQE1DtDRCMm23tYR4hWcHBmJUrz6ecjZJnbTzfj7NK5Vq3Ch",
  "key2": "KSPESbrA2auUyfB9Q1PBMEKwL1pyRxjfsv4WWR4E2zyo5LDaAn68bCvhNQHdR8SgFCz8j8Rww4SihK5DXqGXao5",
  "key3": "JZvaK566P2yyzuqfU9GDQbxd4TvWR5FWEymsatf4JHfmHLxY1xYsUXQNFihbvyaTd1CJ5aw9DBvv7ugxsgHSisR",
  "key4": "2o5HSDfBab3AGnwAonBaL2HTGVezS8TG93fTLtTZwNTU44jQR7DSDZZXi4b7uPYFY7KuTPnSS3VdRexfmkDgTWmQ",
  "key5": "2EbZEcKCzCdqiyUTqhCYqJTY5FmS9iHCB3sqqxoCHKH4e8cmsmcSZnDFVNKehKrGwANFL699nNHtt51Qtursjwip",
  "key6": "2H94T2wzPRs1CkHorDovPKsoAVgsiMBdbN1ges2s2QuPxMh9CWouwRxWWu7HucD5opU6xRZgdHRSpQJ9F3REfayv",
  "key7": "36AU3yXRqJEZnTEuErW2BKxmVC5vkqKUGg6op2Qq7iMCjS8PsisRCsUuZ5jPoApmtQE1E57JCkZy5PpE4RamEGpV",
  "key8": "3QXtjNtXUy5zF3FGqsMdeD6fgxmj1gk8xW1KLcK2WuXVeh5dKg3jKYgyYBppno6eBuqJiaYnRQPrLkpoNkEnVecx",
  "key9": "4H5rjxtnTZXE8GaxXiUYRDJZ3wrgXaCyBqY2f4AAcYPJ8T8UNL53qQ2g9XtDBSjX21fT7jsPmhMuX3ZCt3QL8E7m",
  "key10": "439kznSngZBd5AXY7NjJKCC4TsCZKAbDqN59pPEnYzqX2gK1qMDoqSr1AgZQKroqDPtCFS6NcdVeG2GrVB3GgjSM",
  "key11": "3tmTa75nkkq3RCSRC55KVmLaEz1QuTyFfeFGkPfsRLdJADz4DDhqRDMqUUVAjD3rdgSyEfZQ9ZymtdfTMWcXWNNR",
  "key12": "2sKsipZKGjtn9SfDwEJhN3ph6JuAeQ2CQjng9MZCrC6zueKxYdzhTpihewijyhdxS3adufuijviHVpmoxYsfijJn",
  "key13": "5mA313y5pdp2DEmPyZKZoNuKfdfLYYWJWmQZ2AACVorpGkc7D79FvUPw7eXCpekdzPF5f9Abm5qaCcDtNBLkD7JQ",
  "key14": "vroWSimiduu1xLwubPK7xoWnWL4WYzCA293YRMKNHdJrQVbxH9hDTZKUUtFvajy7xuxg1NwouvhrtdGrhkS6TwR",
  "key15": "5jcqvDNUmd2M8DuvoZnwe83fwCW674RjLxGTuTHJPQBeZkpro9BUjn2hK6Qx4AYdAMMbGqDMk1AtgNHTdvop9KNc",
  "key16": "1n1bDPhXBgTgTdwnbJ6mTdrbUTjrEHtX9LeFaikMwtiDfGeSaKy5LKeeU6r33j9jTkjr7aUaJQYHps1pKVDD5it",
  "key17": "RwoWkZ1vwLhVnY7oU23MbCLnz47obS25U1V4TF2GdX8Mvo3egsCEBReQr39xgWb9xyro9BMwZhFP7Z6P6q4uXN7",
  "key18": "h4ddJMxhz56QmrjHMFcFQrXHqTPdVuUyrY2Qaco7TwLD3hfVcDCKMGsh3v7vs98pJEK4MQDbSwQkVCigW6sxZQ6",
  "key19": "usj76TkUoBvZtPtTRe1YhgSdbeFqV75KagM7Er8J8zoSU5WZKMt59QPVPV1crULCYdPND2XtZjKE78M7BiSUoMX",
  "key20": "4uxC6aa2itxJJc2NLrATFfaa2spqftz5DwCgvmzgDfSHvtFQLUXEW4yKcphR7WwPHPNoyDxk118nia37P7KKSXxw",
  "key21": "3bKiphVW9Vdc27fDnXd8ryzWW8fAMdYswCFERjGjfQgW2Vadocfs3S5ZnVzwYw5vdUSb2SBM53v8s28LJvh7wXfk",
  "key22": "2n6so2gBkePQE4vi7pewf8vsgcvAAq4UuRQ8pB5bedy7yFfdcgUyQUoLb7UQad8vU1veanjD56uA1YtCMB6RN6Yj",
  "key23": "5AnRyGFHNTH7ymASneSesZfExhHPmcCXGgPkjVYTdiSjSJ4aKUxupp8RHWUmFo5BFbKxGh9zWsXSfzvMYM7KZi9H",
  "key24": "2HhSi9UUc8VZBwrbAWFv9KKuyB1LaJjw3KmMJRENiiVnTguBCofA8SdBgVEUMVjJiEkx5iT8TPCsBMXuf7tVmkQJ",
  "key25": "4CedADj9vW2y7HWnyBnv62YraJoi4L4CVqGEHqXNXxTimpyeEvuHV8sHB3z3LhpDmEgZx6ymku9GyRmPmuopCweR",
  "key26": "5b3LD8HqPSreRJNTu16JPdiEduLWCCGZdrW9MKKoDcmzV5iHuZcJAgVuBWdDErj55aJyfzqn3Dz7EGaVgz1QAF3U",
  "key27": "3Y9eWS8ugDruh3b5Mn8bkEPHJ16Fz3Z3VLm2eeTvXdKwq8fsZwX816E6Xtd8tis35RtSPhCdw2fzHTnPdK6XSqvw",
  "key28": "36pqRm6qTboqbkihg2sp3RhxX4JjUDbuXjcpncAiEDS4E96t2nkKvnsjpH4HNF7wJGet3RxmBTkEx2G1Nukka12L",
  "key29": "2uhrnTMVC7wEG1jVp2RK97FHUuqPVnGv4BWEPHqacQu3Y85GKNN3dTinPRuZ261BnnAsk81f76TRzEp4mNtMV7xz",
  "key30": "3MMXDh5eXNmKqqX9m5qjubgyfsRJpB8GAEbwxeVeuj7jzmdf65aP3kNZWZo85bzYRLVjN4uxMc3TcTgAJz261q8u",
  "key31": "3eiKLbyzh66C5vuPUEaU4oGZUBd6wXhVAcJp35QUUkHz4hdtC7VLdZq21ohYPd9jq5PdgAK5FsUyn7Zhu3BCVWs8",
  "key32": "God72hsLfoGz98DrNNXf6KRb5VFccGc41EF8PHDrKghCqz3uEhNpFJbfifJ5WR1or95htoreb6bcezF72L4sDaz",
  "key33": "3kAezLh5dZgCVF3Gx5J5fdybrP3AiK3FPDZcViZpDKuHFurpQgtSpt7JVcfBZBqLHdSL6Ybk2tmBcT1JZdLN6sQe",
  "key34": "4C5fKAGqktrNdai1Fb6B5DJi8mSnj7n5FLrWWu7TGyALk78uqWfacCYApSrPLH9PsCLhChHrjAuTnVywYUxaHWRk",
  "key35": "2ruXox2G7nC923ySz9QnGpEZDQXPUNHxB2jiPQ3f3shQULPtz8hJKgNaUsAgeQJzKjEN9PkLYcy7YSn4UA3hrfn8"
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
