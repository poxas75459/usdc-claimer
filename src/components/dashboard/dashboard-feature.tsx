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
    "2c8xLxdkLtMPhCSMjrnp5KGiCCheQnkY1cpbAgRr1opUhkWfHi8b22Zf25Lxod1bo8Riv75BKrujsv5xX1xGM1Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SaSnoxVt16YyomWDFQ12evh29yGLGJDBsGTrmP4mC6U8emxC7w66GiuVqWeqSV9zmrgDBqo7weEGg7yJrgXUq51",
  "key1": "2npSXAgxau33LVQT4YM2RRmYZzNufqJY7EDYWFyN8TLoDLruMHrBAfgahgagvPuX8Z8e4xCayFw7RRtKR6dtNxgn",
  "key2": "4CnsgYAFqFZSoEBFPgpZWz4h5h63D9XhZ8bPz3tGAjFwiawAHbHTJGkj9FKvGa2CCcv4Vf5WG58CZKnnonNQx65m",
  "key3": "jw47oVd9srA1RqTecEwkk3XGCkaEoFt5q6ePku3e49LXt1Jku6sjSsi4sm4bntWu3beU1nsDuaN94TARgXqZ1hq",
  "key4": "Ro7RiqF7D7ScCLXCYT2wtJ1xtMWA3xjgKJscTc3z2UXs5Jn52HKoTWRL8XQ1CnwbrRxCBiZUzsarc7i1B9THueX",
  "key5": "4cTBU8JfWkLmHnWTrouhddoPmKaq6YK62zvSb7GSZmrP9Vtp22BxJYLuafFiJaQo6G3QRSX8BG4B3LYE3a1qS71M",
  "key6": "3QM7DvMSLPrpsSSMSyuzsV1AuXSubWk43v9ax23wu7S3jnPz1unVLReH5NRWz579bH3Lc5ubfGG3ooFzJCUHY4e6",
  "key7": "4UuYAfwqvhGu5Jcny9yo4jh5k5YEuDhEedgiRZRFbDJpf1F2Lz3D15PpZLzJgW2ybkpoNUokJijZepgf4mAsZmzQ",
  "key8": "4nr1aqLK33nQptQWc3PERG7De6nHKG8stq4RBbbVLBAphHekSFLZe4cxeMjrVpcpCmwZPkYTLBbrmuM4hWaoZXdj",
  "key9": "2BHQDdyYUFLn3BTNKARsyPe1sB6zd52jpWhYNMzx57AhAXqsFo5XW9h6wjMh2DFMh7EZ5FwXTCmXyLVBvpgNiaGN",
  "key10": "5tVUJKCCFfXTfHPS3R1h8oNMKjgvJZD62H4sM1McQvszH4XkfsJk6cwwRuH3erVspUCp1j4cWCUWYMmqdhZnqyGs",
  "key11": "3bTzGm24DTjfdp2EUyA6qsEKhyd4bdFv8ZGeD95SLXCi5qGF9631bhMNqmcANRivATwGAN8DNJLLwVyNpj7Czq2B",
  "key12": "Q7fZXc24pqBAdag772iypPmJPtByFq9v7EJ2hAqYMefEfD9e5mAPcJCcP69G3CRFjMvL211DSAdbEWh8aB1uHAN",
  "key13": "4B2tPnwgebtMErnPQM4cepVLXuZXPJpRdSYRGpaZzLV257H5uPcPMQkc9raytjKQZHuV66KTKnjb5PbqLMuHVDtN",
  "key14": "mhDXRwLX2HUwxxkhbxMe94ywbzkKQfBgaq8tJwf8XZexWs5BFTuyR2x9auqFDdXAqUSsWYTKCxD5tezhiFwLEZv",
  "key15": "4AeW46CUtrhV3wAAFxfUsUPqQB8y9kEKUTfp5vwDtQzXWTGSF3u8YjXicnXH2R9AY2EzUS7bBzvB19XYfE6CraES",
  "key16": "24RfmybvDpXQeXAsdNVrowSqJdKS7wmLpdyJ8x8pBAtYuovcs1xtrP9XJ22gyQTNajMKsMYR7x3ZGvoS6qJgG7pH",
  "key17": "317zjCTV8DVNo3efwQuGZC8y384uhKFC1nksr1JnxA1cBi9AsnPYyB7imZPf4Kbq3CCMeTqUhrq15uD4nUNa2u7x",
  "key18": "jV6rLncvQ5shjkcHkZTqkiEQXU965L7Z5emfKx5z4qbBFrvNuHy67SUUBK466h38fdV58j3LAWanKPjqSQgNyQ9",
  "key19": "5pYv5PErsTbBAdCdEPYsSthqHm56ZZAibkL6o1iypf5g3xAFjJH482csPykAVCwKpKvs1gzuUBnrMeaCeMptEdjt",
  "key20": "39hxXyw7ffmN9MdUScFXYAujdbhQQ1ynuA7Cndf2zCKR1BgFEG2LTLRJg8e1ZwChPRvP4DTUjxH6S2GhfwoPdgvy",
  "key21": "v7m9WxVJsxPeKVbnHbGjXVRGiyHjKtG5QPMCdZ1Z6uzaF2C9NghnuFyy7LvdyrMkEEeKtZpDySHGX1A23YHvB9p",
  "key22": "3WK4smSvcWEWg156Ltaf9XJD2hUchfMjnUZGJfLcHBi9H1nT66thmxpN7jJTrqg5V1jPG37bg5C5E8XZqxXG9naz",
  "key23": "3q3YotM9WRyvsyhySASFzMm2xbvUCvboGRKbbS9T2SnonxCVQmwQK6xwLigztofH51LhkLpWtZAMb69rkVoDZ9FH",
  "key24": "57wKNVrMV4qT8UQgepPkUDxWBmHhU4y9kVmWweS2UBndqRasZaZcHoqiCrj1UYRW4C6oz54n3v8AnALPbd3keVhT",
  "key25": "5HQAvPerN3KdkU6aS3qe6xxurT1pMg1D3WWvLUKMzA6XRuUo1H2iQmdosk9zv9PFWkPf7v1qy35z9SKqh183jBx1",
  "key26": "2SjNv7wt2fLtq6zPibJyxXucjqAXx8E7XaJeYWJ5egg1rH6Ei1uareL6ofjrGRuNCs69Q1tMfXUZVt2qcsKePME6",
  "key27": "3VufkKY75mGg53favmzZoxrhB5XK6evq49XyiYLt3P8WFM5ZyQFarcBvebVG5hPxH592JAG21xxabobbq1hjLRu5",
  "key28": "FWATtRqTHHxgnricK2tbq8HvxAu4WKiC49r6QUpcL6SuodFn5ZYqCA6a3m5XY3DEnKa414Y3A2JAdUsxCGLgZB2",
  "key29": "3ZnCKPVq4mhDMt47i7UXGEVxtrxXLoXd1Vhkf4kNSVkvNRozMsGKLJV69EUF5VTYFDmwiHRsDpHdRNnCqkGjynpW",
  "key30": "4RDQBVxGQxewidmZSF1rQZwPcCPw69G1nL3AfZqQJwBAeFSLcqZAfZMhbwjamBUeYVRK7gw5f5FwRVUJzW5EiLoj",
  "key31": "3frMt3kXGH6t8eGPeAzN4Ygtn9D5vajq4u7ZhFt644Y5EFeAyu1muBae9BFt9VVsE4YEyW7xZiMbBq2r96p7Giwj",
  "key32": "5Jy1Wve4YJ7sTYL1z2YxCXigNzMheXzKU7GgFSLxtm3tH2T5EwooxrV4m4Uv6syfjYYLaYGrsgSoQvX2wRx81qyB",
  "key33": "vRUx8yN6TpFgkgaPGbtQBP497Av1ADTEFEqrc7Ph7Nty4KLNxkbYn5A5g1LQCsoKWKRNgPwWywmbvXfHyU8Vii5",
  "key34": "TJg8CRYs1QJPuGMaicWSWhpaXkMbeFrjCLU4881VJTTkwaopuQfr4atjj44jF7KG1sQPG2bjNRPgu7RzUVXesgD",
  "key35": "5PQYKtwwvXHZbzU52Z5zQSejfyd47YqK6WFyYipvgxvMQa2U7gub6eBBeckrX6N5vjes5T2wQ8b8evyFd7SokZzC",
  "key36": "5R7oE8fUWY6XtEY4ToGQ8nAwScUadvvxmsuLN4BEZ4URJXH81FasyhARuHJDGjjD4wq7tJoo7gwDA82fo1Q1dxVr",
  "key37": "3ajPKF5kHeu4fx1gjV3RV1H3K11b9sVE994nLJCdVrVbiiWxankuS14BqXT8UjBi3tf7Eej22cjg8Ssbez9BZCnA",
  "key38": "3roBTrhZN5FY97xB8VvyiywyTXq9RG9fLX8dFHAct1XssqJhM9fhJGpsR8EjYPzUTxSv9Snomif4bdzLUjw3x5im",
  "key39": "4pp6bgVJddes3WGzGuYYfPu3Cg3DqPy2ywj8SMgmhAb8GcsgDtiFGxhxJKtVUxdDymUNd9zXw1JCuXZigRxYn7iK",
  "key40": "5XQWzcnikk27dM9GjpAyp5UvJ3o14UzxCJPHsoNvvBfHfS7ywSxQVBoyTZxYhqXEudJ6YDg859duWRMQQpv4UFuL",
  "key41": "3jDTckdvzBwM8YziW4582eJhb8rmBdATzCWCSXARQJWGtoiEwS5j3NzAGNWm3zFpDEwu5i9ZakFGum2Y6gS6okZT",
  "key42": "3fCFYUKzdbxqh97GMLUQhhnzxUbJGmC7yZLE1YDaYVvzxCt1ufC2Pjx6fHdWgCQMHBgfwDzkKHmcieGsoTHxdMDp",
  "key43": "3MmM9r7aogJbDoe4wj1P3byxDB9fdgUahBwTAz5GSQi3Z9ayFaLx1o5K3oqyd1t95QbN6UoXmdWyWiUZqWAaUmQP",
  "key44": "61JmptweL2kg55Htz2XmrduJp7Lryynpmnyg9qAPB1PxnCe84A75WA3Ay5w4RUEHoUHuuoch5t5Up37s1RvnaSZG",
  "key45": "2F3XTmZ9LK3vmi39p4csaCsp3QfNvQKsJd6HjbsM2ZWKS2WDe3VbyQPDxUdzoFc55KGVUnux7yhjTqB48ZvcLgkL"
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
