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
    "4h3Z2bSsMvFQVfSZ9PxJt7yZ1bxvS6TfWvREDGYPVcUwG8qCMJ5Kw6FReBiCEktnwWhWYd3qriBTHCmSw3o8gLof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zH3v1kcU2GhUdh1QJBBDLJ9ZgnoN6cRjuLwNZ89nxULBa9yhG6rp7srLu9Vxub75diiK2CcyeZkcu9Yze2Ppfgq",
  "key1": "2WBGGXSWN47UodmefFXrhMsMqeh32GLXqYLWgbE7LL4kgZSX7dnuiwdmHXDmphPvPJq2P7UNVnXAPrst214YGFAY",
  "key2": "5uNybozsPRapnq8jq6pejPNgKi97o4D8b2f6Jm15WtSeP4ZD6rRifTPZrDLhv2w7X2oVbQ1zLRbNCsef6kcCYKLj",
  "key3": "5uP7DiczPHKXyFgUntzUCkBNGZNGsVfX7dA3MjAFpcvrYuqMarKJWWKVAiiT3Y45voDQJQc8TdWeWsVaGqhmmLo",
  "key4": "4z5QaSuPDH26EgmugqNu2BBoogmwGPFoWL2BV15bjZ5RGpe2VVaJu1Ds7RQSWjEsY7aF6suWggs52w4tNin7XGdM",
  "key5": "4kwCTcKWWYjiQFbr7KNXCU67w1jHjJwvCpCpwzND1qJWZdMq6YwVxfFwNt72PcFHgoAW9zNCf1fM2cS6bsgWEoec",
  "key6": "3Za8SwVXgYJGSWDzReKktrSeD4rWMVYam1z8fKAfq3191FJGaYRE8V9khwyomxVV1yfLMiMBRjhsCzHisscThJbk",
  "key7": "3VvZ7TqWasPc3WipG9biYKkkgoD7U6kmWsgHP5WhKSyiBBbDG8SJBQnHQnxpjFQVV4iZmDFL7t9NXGNQKzuhW7kr",
  "key8": "FUCfA5mH7QdYRbzsTZPvuTLAKhgGFmtR8XPuJpJD1cqdm3DA8RRtF63XP1iJ8ezJwepFn1dNEnhCFR7qkr3LmKb",
  "key9": "4hccd6DnU9Y9kokhtRWFBgP1HnGn39SKyJ6Aa5fYi1TJzi1bFeZud2pJiHuHCrou8m5DJzxxxpVujELMYr2o6KyN",
  "key10": "2VjFyZ6yS974WtA4PagHS4JF116DagsD5hPwMq33UST37jtRJwNjizMw33BYPgCSiAEnKqPGZLnEYb994CqN1UqM",
  "key11": "4drqSfmPswN5NBPyfwg6YSCK8YbYbEQnXUVtsN6jmbBdgk7u8Z7xKvyCrSyHGLpF8J26G79c5YZsLCpp1vB6jwnW",
  "key12": "2eW9YAguaoBn2tfSCiLAoSEG4fPDguZCHY2rHM7Lv2iFFo3kt1Cp5nwgA2RrDV1drxRHLYKJ22RTL98BK1oFWLv7",
  "key13": "52MMLvk134GABv55kvpwBzh4wAqj4MTBQfktyxYV73U37c8it4pFD5QYNLJcfvy1CA5j8DXj2uDBi7dhL6cFjQpC",
  "key14": "3UuGJ4NwXtqCtNP6Y1FeBmWAr23xXZozVjcma2itxZNEbXrPkUyYpz6YV7cWutPBM8pHS9UqNKAMNECH3hWXhGX1",
  "key15": "Hyiczvoc5GcbBzvoD2ekbQk48GsziYuj4FHb4GYDvws7CuK11tT3gMjgXEA2RhfXR4q4HxDinJTbo1wMqct9yJk",
  "key16": "4NKLagBsYrEMxhvhsB8PM9uLMUUAi8JJpF325Aoi3jcvWRw63Ym3EcHQD8qdSD1RHVWXbQTDstQoTecdmUyCWFt6",
  "key17": "2EJF9wcufHx9F6TLcPaCBaMXuM7325w5S1vyKmxrY6ceavNQcHRP5RNzugNuLLWz7oNYP54xAbypQHgAwwsEmWkZ",
  "key18": "dkoeecsWaxUTaSPaLEG6EvAbopqZUuJ7hML8CRnzoAdHX5pbAL3KiA942MW9JFpwzHEQhw3SWcNhJCnFmv1DjRc",
  "key19": "2qF5BbHho12ga4PrMrCH9ZLZ44wG3yJmnd3WW9tBTd31TH6xQ5V6rZDAzYBZgzhGP7sQbN8rdkD2MnGZPrn6NR1q",
  "key20": "3LDbzbFT2b78zoDttoStwhRz7x7kPYkSi1q6RYNP1ShCF4bLZoCSPauyuBae2ioKAQpAFVCeP6ed2YgjChfx3caH",
  "key21": "5NgwxFNtyPwicH87sGHneZNWE9HdW4zdgqCLag7ohTApr8hYVehyxr25QiRSHMVTr41NToC4d4N6usXTsAFp11W2",
  "key22": "nTYYDCMMpMGdPSecusqnnMkf4HXMe5CxZbJEi7YorAUVMczE2DXSRqTTY9GkrMxJYkRGxH8ytgievLRmCUU6RKv",
  "key23": "7qiwoY18CezGKocP4m4YsRPFP8Cgo6jSG7Y9gxe3hzjYeL5a3jogLLi5N6Pq6tB1a2hX2DcrPHBqmxTrWFtTFDo",
  "key24": "5Jph7AUjzAASP4EHXoje5snWzKC8RMH7qoEXVgpNn62LWzPy6i2c4FQLhZdyFqxnfSUnnPRB2dTyZx4v4ChGAfHm",
  "key25": "5opHHA9Kk4KeqCrrkCWxi4dg9qz74fhK1R2w5qeiybuyzv8s6eThZadqK46g5cCHzwHTh9zbbNfqGrgtGY4r5xvw",
  "key26": "3uHMKRmoZ2eonXU1SuP7RficsmAjDrdzgaMdxrijS5a8bfez5mCznu7kBJnVqhrnGK5pb65qMLGF55GE8G9znWR1",
  "key27": "51neAto5hQUPkwbq89C9qsBvSQb6jweqrfaokLXFXBpK5BZvV7NbqrY561vEaJp8NRVhNm1XTiKTKgJsHXSTvgw",
  "key28": "2ZZPYsjVxJngvQk6KrXMiAryfSsdaGZ4sjWxsw95CbpcLCpA2uW7Bpvus6KZL9AqWm9eoBcWtE6dKJ5ohDdr2nA3",
  "key29": "2esiXtFu48Eoux58ofktq2bnCHS6W4qc9QZ7Kv5yWJsv1eMmxhSrv1AbxiN3wH3iUxdxQ5sARtUX697zx5UeUMZv",
  "key30": "2jEp4EtLywv5251k8qbFVJm82SJyNm9225T1hpJr5GaAWdzb7mqsmzdxMha22xdn7ChFDDwJ2XZrtbzfUMtmWXC8",
  "key31": "3DpA4Djtk6JKLKhmD4WW4ybZnKMWqTQzpdvMqGn4v2rPBuKruX34Fq9J5m4MyKDUQRk1RDSjBLGDaeWgnUn22YZV",
  "key32": "3uRSF4HzjAAdG6i9bwQZjmqobhCMQNi6SdCNbo87qFos9nnkm674T4ZEwuBVM1WLTKtyAWxgSVm3FZDjDZf9F7Q2",
  "key33": "ngUiafLJCocBrEyEkXuUN5EfYmEigAq74ViqdhQr9xGWXu2DtDsDHWvMyxP1QmtFkMkceisBMT26tBeYRMZsyhu",
  "key34": "AsWnao5PHSmfqiHWrFXyCL2zBAfR2gSDjgoLsGGMPCfWSWe7L7FbvkBArYfR4BSxbpUWxvg2iHJVX18ZFceZpEQ",
  "key35": "2QvKZ73jQvft23g3zNGgPgeL9Kv9AmXvFdKhGzx6iRnDLSD7pCw6YVE1Gt9KhFDUJsZeAZa6EUjR95qJYAVbAj4f",
  "key36": "5xKwpjtoPDK9JGNYgZaceZ5YLVFJQE3p1BcYuPMkWTWPMy1q41WxZE4JNM1S2ttCnHVGurFGyPdjWNSh9m7mHAbz",
  "key37": "aQYch9ovCLN94K5G9TBLZnjcMJreNpwtDF7dDc6ua27FpEE4iU3gwXaHFD6dLEQbRnTbPk9xEFUqQoUtWJPf649",
  "key38": "D4U7KDxEzwMVt2pYhPJsik8Y59s8J51TNt9mk4nWogSqNUsqjZp5WkGk9aMkS8HXW8WE5BNPQLEjM378jWwb9VH",
  "key39": "3svUQiXCuAnF5zicT2XCoiDh1KM8cunWE7h3SxUBeA3htxJP6zjhwoaqLmsk74wsWMnNSPDjHi6H9ZTye8KUNKzi",
  "key40": "4T4tRiHRXtjKwebmDL9PKVy3f1YswaDAagERnaoG1UPqrSw8baSciaZNCzH9NRHFp5PQKVQRtcRDtYRcqWoQEqcS",
  "key41": "jiG3Uzof97k7tezeGeiXpePFyhRdaU5ehGaQU8DRdNVHR8H8eoaaYEkNtCW9CuoupLnPLoKQU9SpjfcXgsh2pnY",
  "key42": "tgZr8PfhUrM19z3da2vXDU4bdiiQHC7WVnAT7izXK7npMih73MEg8PTzp8CRJUCNvM1eJzQkAwgBWqLM4mYPAVs",
  "key43": "4DccGvLomp4mwmQEkTf9RRrGSwCw2j2pR17LahuSVe49cH79e6WB2My7JifavBJr3YmEGRBaSQSMX78urDboXkgg",
  "key44": "5GVGKEBrASGv7HCo1BycNLvHPxoJ9KPXLXq134GGwbM8R4zX8QNbJPMHpsr49VkrYUsgf28wFDfbUJEpwVznCgxv",
  "key45": "4M6RTu2HGz3i5M9cFAWGKHkR7JoZPwH8crbE4x6koX1SS3kTbzsBK1wsRjPmrfqRFZbsrhDhjLshfxYV6pEAG9VD",
  "key46": "2gaR1g6x2SMGJGXphcD2vpb1TaxocFYzQVHDDJzhuF6Mb7ftfPabEXjMiu94QAo8cECCjvtZHUwHAyZ9WdtZzJb3",
  "key47": "57ethsTbGvWMQJEfArw1d8RVEi7rY3G2CynvdT3AC6zEQw2AqCfoPGeuX9GZ2ZbYDvC7kgjSSyRDjMptEd8ShAFu",
  "key48": "Z2NLeT5E1do7YT3s5vWKuMYxYgEKjxHvG5UNBXwLakYtdc4rKivoc1yCqphwZs1XtPWNic2bEyQD23drE6rSR3h",
  "key49": "5cVPv8FNjvFja15YmeU1spCXKe4A1izqFF4rvjsBpS4LraZBWBRswqWypHYHhgL9Pqx1kYWFdxXDV6w9cismCRqL"
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
