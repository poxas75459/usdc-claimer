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
    "49rJPchkE9fA6cnu5MzpnrkxwevbykAZ16hS1GTY6RQ4M55Vj9gdRXmje7zSTGfztrUEdQ1w6yy32tuiaB5s5EYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYbwjnhusPSChdSU1dbA9XvNiveWeRftw4zcTSsKoCUyeBxd4dXCkBcZKpdjtmbGm8zUyBsjD8s1qh4rstSdQc2",
  "key1": "xSP99qhh7WvtPgtv94Z7N59SM71FAPxhj3LXityk7cQ4j5vTWTuaYfCngHecCGMG5dh2G7dJwkkRiPGtX9uwbri",
  "key2": "3BeoUqmUeVgpfd4sg3LSjGfEvLmjMjsvtS5akST8HdiBtexwSCGG3NQ3C7CHfNgtgzm9vY3wNptWRWkNtMmayoct",
  "key3": "WxWLrt3qXACjxNkgB3crRa2Cbf27zPGJg1wAoSWibhRrr2iNJugn6EVTtFaX3g9gEJ6uG82JgtEfduMGTCNaxs3",
  "key4": "PpZA718MRfCJfQM3FND8LGb2jby1KpuZzY4otSNQ2Y986cabYu3NCnrypiudat2SDAtnqGUazbACBDR1mu83xTE",
  "key5": "46idUiRx7oGQ65fdtZSh8nj3bLBMCeup5uK4RWB2yHtRARw3hmGBTegkMTvVz6DYfBZLqpYD5SpLQtmz7Ujz8gMR",
  "key6": "39YGHW2sTKXzcz855kVZrhxQcms5W4En42ovrkoTc5t5xNbEUGEQdpYabCAb4dXTczfvGDZaN8yKoQxJERVzQwz3",
  "key7": "63MCzxLECQSdRRrZ9zj5PBZ7wuNPU77NFJAiTvws5iuJFgzfhfK5gfQMjNyPBCcyC1GmEp8NqeHvSmUrtYyDXP5f",
  "key8": "fPkjbTGDs7e4FGAfMoFx9bsqv9DmC4sk7DguuZjV4UsicAbbaqi1SihmwhsBPzviXV76tAaQ9vGaqsBdwmUjiS7",
  "key9": "5tfMYioryNgA6kmC4wDeiaKT9fDzmVReqMLkNDiKrFWHqLEt51ZN8jGTW47tiy1GRCMh2yUwBUyNMmwtTTWiyvTF",
  "key10": "5gXvDzW63jr1d4MWkViG1V91crNQJp2G8GASf4S7NKorFgWi9RK8VEsYqAHb6d89xmEJFZ33RxZ54ve93ZXCEbhX",
  "key11": "4ALRcMusziYJhYHPZbD9aA6fjGGKJXQLXmvvMBZkKkMH189e3GBrFpRjctk4gLXHUh1iFG3dsT8jN3DmeFcE4jgF",
  "key12": "5f9BQvWG4W5aeg19udTW9SaMftYR79Fc48V1c9DNbirhfuDniq8P1vGU4JDXLtvrZoNkDRxeFBuQYuHnHT1vZNMc",
  "key13": "4DA91gqMoYBMDjvEippdCG7kFDoY4qMmksJFQGRZrYDeU8hRqJG2vYqBM8ssghVh2XfvjRMctR12FVXhMPEoFDzV",
  "key14": "3aPC1ZYhKF4x6BpE635qiZtpVdTJ1UaEHfjrdXedYFJBSuQDq9FWWBYcCVsWcfLyJoiKjUtHCcDr5EkE1hse7Z53",
  "key15": "4JSZ27fHXM18VcZt5qCASXH6SJDScjLwrqdNczVUBvnjR2ndy3oK89JbDV5VeD5AsKWPPYaVehKtTjFhyEcB2AWd",
  "key16": "UQGHQMDaEPjTJfEdTzxF4AsVr9Q5SHMSxDGSRNJaubGttYfXi7iDYhvshztZ6BDbjfAcZaqP9d7Pw6oTqnvA8dN",
  "key17": "4GXoBjp6cHB2E6kRzPV7wv2Zwo2Bz1X5NAAsPaChB34pnEKNZV5pR4HeABHxXwyQWZCnKu844S9pkp1sTYnZe4Fb",
  "key18": "BjoEGd1kzTKQo46MyCHkVRvavtFwcyfE14Yjz1QS9RzXMw8PBd9CjahoVgRMUFQ6JxadGS2V8ZUT6f9N1inN584",
  "key19": "h5hC9RSiLSTWoeihgdVoDfSfn2U2wdPF5yUDHWtHewtRH4bysp71Y47Hj1hfjTox31BPm1rp377dy18SKAEBFTw",
  "key20": "5dyFzSPgeyJbiZrQz3DYkdapT29qRXstRDPURzRxxc3vebEfPf3zEcdZa6CozBbpMx3nz4gYkQ73AHvqHgTCkF8x",
  "key21": "3dLVfLYMqVZ759srRYFDhqfHndEhBaj3Svoct14ko7pYgD66Eqbc8VSXfakmH3z4wLu46jSN5sEKCUGTxA8jeR8h",
  "key22": "57FyeCmrcmrkzbm6ytwvJ7vKMjxcH2SYxNf7YEtyk9mif39i946eYmV9kMjCY3CUujWcWpkcWc9G7Awwx5BxVza",
  "key23": "4W4eU9Y6SxtSY6JPvUYeaxb59r1mi5EByDgjQbgVzExVVexrzL9H2hi645nyTw37PWUPdwKg6XKQNfXiWDxXqyCW",
  "key24": "3a8UUEo6fv8xhrc7vB26J3Dz5n8PDFPXXWDkYQjspxsMmcBbPTycJFRysBtwyFfBdocfvCpVprn7WFxEGRPPsEVw",
  "key25": "88tit2vKPQhVXFawjJybZvNa5FLxJHCs43hopMosNAJuXWQtyojW3mS2TVA5wxLzUAvYdqALK2hYFAVr2NLuagE",
  "key26": "2dWoRyXKKFLb8coEWRT6eqHjeVbgyi1L1KPihB8z9Wicug3aP4BztJWGWBc12tJca1r2e5Te3LNijYk8QkR55Jbq",
  "key27": "xiqxr5AjyybVUWiEastywKSc4QkHHETkvkC716jZtK93EfpUmA9JhU6YTQVHLoqSFCRDLCAbvu8ap3DJgWKdU37",
  "key28": "2WZsoYJ1dFQfrWc9s5CFJcLSDRzAUJBjm9iLQenZE4Kc9iSKeGCX6zjtA5E6eWu9XK9dFvCv8PCBKBj7aek37TFv",
  "key29": "3SAuYiduZUg1xWdzNgaZDs2CZFCwvvsYZnMCn493waRHiUNZVtygbxgaYe6BnyVtC1jz1r5d7c5XfUYe8aaAzVQb",
  "key30": "BHCtgCwT3LeSucSnXEnLLwmRDajB7daZ2nturaaYzk4wagLMYAEsogajHuVqcAemWTbWfxsLPomgtYbwiAsq7YQ",
  "key31": "5HDCW5vyR8dFJ8DpAEW8p7ZwLKnsMSNERKimUJLr4vczDHkkdybghQyqVySKczYGsUKL2gXzHXprNfX1hYSc9FAW",
  "key32": "3ehe7RyJepTdrv3VjjPKv3dNMkdeDsWuj3yhhQ63f4B2QaAkmxT7KznKZqNgs57ZHZhxKcXcu6HYamTw92WhA6Hf",
  "key33": "4UxScwUs5t2M9LnoRo5NqKFH6WKnin5iGd37SyKrRTd28mEGbfihnj3jc1gD1egLkbwPiATyxjZ7BnU6Sus82SLw",
  "key34": "56vXmVsZaWiw9JerTvhax1bhHvKbHUiPikxbzYFHCFqAYAm4fRZ6EdQhyUDagLuZoQzHLz7gJmuk1nGo46BPARHJ",
  "key35": "pXqatcquTjQSfUUrQ9a4VAGf95cz2fvV6hUuPnskZu19cTv7eQwxTBQbsLaaRGnafVwheEx5Ywbxah9AVTtKPkJ",
  "key36": "58C8gTBbUCvSE5kQtBQ7kSNpkqGLpjnqJWra6KyaSV95mQqjh8Es1oHevDn1yjHv2e9pYvh7ZHbEuJeJcfr9peuq",
  "key37": "5yQNxx3YNhyoysPUihfQ3BCmZ4g8tUt9twLWzHYmrN2puarMKetrYzDBBRqd9ko2bGPdahDzpeqL4MuBWXJbrpBZ",
  "key38": "3hV7qY8UpiwQtLLVYzyucPRFbEgC2E75w6YLyYuze4FDk3czbvJKnUj6CQS7sAYMP53BNuhZauUXbQBq591wfgqJ",
  "key39": "D2MozbDtsZtDJr8X4pBt4dJNfSZG9wCdGGh7jc37ExG9rzEkZUmqiECQakDnFBBbDkNDQQopeZjF9P89wws1Dyi",
  "key40": "4RCaGfPU6t5DdUirQXx16dPfRgBtiUPYBaAP6RbwbjmEqeqZJ4mBpqjhmWh2JyQhqE22iP9dA9uxNfPVx94B69ko",
  "key41": "25jwwHxhWM5m7bBXzLZrt9ZsCaoXXjbBxPvPLv5KKq7JNr2kNySrrZ1TpdxU3bKmq3NNEvqkSqttjeBaLYupgYNX"
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
