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
    "dAutgnxsvrPLQEa1PnnSrSsTcL5aFcDyB25t5aAVWmpheZVj2s26BsdBpnHG1i4X6oQvQX8JJHQnw9bx4oEZnKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZWqtYFckwHNKNdhXw1t4E3dp8UEbYEFn9ja9zHxhybrwoLf9BWbjAiRVTjjY58EQzbC8NtQ7eK5hhE1hVyVAbQ",
  "key1": "5N59b243A3QZstHKt5hXj9kLMP6Dy9e36EsL6STVRnhznsGJRkUc6dp882WMPT9QTemL65Go1xqWroXNr7BM1NhN",
  "key2": "YZtRwFKNR2fYKwczj33PMfB8EJptSu1PFmsBYTA3ptR9EJfmXSp9kW1uNzC2fcSND9hBCRfXd6gBHuYyqGERh22",
  "key3": "5LELkssXvoBfAzyy9WnA8JmvuV7ydrZT2nViV4ns283gGDo41vUXEW3zr4Ehe1ASKBKpGqPWjvqBgbtUYDhN2chL",
  "key4": "wnXUHFRGLFmv8t68NkYdXzH6DxeZ3q4EonzEx2x4EJt9T9QwszpYJng1RqkwqQDQH84uVLZmEEEeCRm1kysT854",
  "key5": "MQ8j2EUnyHeJ1ZXEMrEtzDKYzDDAyZoPoaQkMbiRdn5dacdHzFRBrfjzbQGEsCpcMnCCcX1wAMNCT7nwpgg8A51",
  "key6": "55RNL3VCsEgSxswkYS1QhDfU23EfqLYqD7k8qP9RU7yQ7vm6nZ6h1sRAuBofNCAUEiwWpWxqSre8pLE7MLnXwSZb",
  "key7": "5ftekpyhCRa5iCbgd3iPLKiFbFRfdnCuso7kytUQXVEVsiFhay5AmdhGuc1SFUSgDQMX6f5KvzWj6tumVh21HZ1o",
  "key8": "3mXx2vYYqJ7v5kB2oAQaewHkJWP7pK7QRmTmkUkCWEjH9PqBoY72BqrQyHmfhod5wX9C5NgABzfVfcLVRaWbtKPR",
  "key9": "335v9U5GLra7whs5dCt8rbCHk6QEF5dbGF2SqW4oNQSrqYqrtKHdX32EG5Je9mpPFDwPAMd7HFNV4rDjWELx91u1",
  "key10": "56akp8ikXUuGpVHBS1aBWUqPThNV1KtBusBMdSp5TAWjLDf4rakfdD9XDc2mmEviomsRWY1yUFfAEwJWtfuhR3HG",
  "key11": "qAE5o2TDRVYyg2efrhhjU2WruXevGF9Skts9XQhD3sTzsunjQNfEju4s7uJN22HtYy394dTuyiWGsAfUi7EWhbS",
  "key12": "3Bpnq22Hafa8fS9znP2JyynegyCyNMtM1Kmtt4vDkunc1SaD1a4S2Ej5My3s537W5p8UpSfL15cTJtyZFh1cmwfj",
  "key13": "AJeHduBXbejP9VLJfwikqVg4DSGo3z1454qDJio6UrjrBACxiAHWVMuz37PGpER69r7vPQWS418bQHUnSZn4b2c",
  "key14": "hsaDqW64YGg3tXSWqNXogpKqXx9B9mJ5AZyBxmreBY7JZ8MuCLJAyjMekex3TJDFvNE2dEMsP5RJdh3DzWyxwFt",
  "key15": "22GkkwS1P8tiWNJSnTnU4o5DdrmDGNUmxKyTVstG4yBacPyFAs4d27pMqpaUWurvXokSwCRZHzRCqryBFuTG7Uuc",
  "key16": "Ww9uXzct6ryo3V9UWi2nxF4eikkR8sGctq8G4gfz3jLVwTevh7JVZdu6DDxi4Zz5hf5uQUByErTaQBnnymEgmLE",
  "key17": "3ADHYDHKzDkFHN5Ti3x4af5uUSEPqoscmRm6FCpCFvyiM7RCiJvvDoD1Tts8ZKXphBozBzBwE8rv9ToDVtXGAy7t",
  "key18": "5XnpPXBXeqvmBsquhfeFMnSnFUgkw6ZuXVXUdwRURsBjVWsnRgZvafagmjhwdgrNToKmxE43KYULr9h83U1NeZGp",
  "key19": "674wd7fiSKsf8cFnJ3cBfT2Fq4gnv4CjEioapWbhiSZ4xNc7VDRkk7vin7WeErMr67HSHkUUjotpk4KbeU7WG8PE",
  "key20": "25GxDcA5JMwPz2Vd7bv3q2jndftGGHFw1JW6BSer7TWhevjZvQt1otCxbCMsFZwTVLvCt72Lwkk3N6F1qmRYXqbh",
  "key21": "66LVgnD5BHYeypFnWZn3ehqYgFQEFQWp5ik5ScQ2rJqzShd5SkjwhZn7NbuXU9JiSiRwuLbp7QVhDjYRQc4hR5y1",
  "key22": "34v7FQedcnVvt8RAGFT5UHhgrUcgq1rAgDGEP7t6fBsGDHXeLKmBF1EtWdzonFKpdnNHy1vATVRYjqby2AWV3Cw1",
  "key23": "3TPQ8S9vQFC1WjNdJx8c27p7ciSwReqdrNDneZgswgeaZCyRXWyV8vXASwLCu4M5WqSjt34NKPbzwrwxhnEDCA95",
  "key24": "3TmCFD8cpxfgErQoK3MeKj8U95vBPD7p4z6Mx9nXdPYKJyc51wEgLCcKKEXom74qMLppk6CKa76fKse8bpTAKGdW",
  "key25": "4FEcutdk9SCgeNrj5B5i7bHMC3dsftJ42wUYhEdxt9CuC7iKYmvPba4c8wMC4w5GiQPcPzoseDn13NjfceAZFF9U",
  "key26": "mdJNBr3YpLijpmqPRaAWYY5YbHTY1kX6qNtXp1FVhL4zzdDDzgmYy2FRoh5iRtA7myP4jHmmuGcTTbJZk7HJUC2",
  "key27": "2jDCPCNLqP2vmjPoQAR1j2DkgSbPMgwEd1KcuNqVBzjVrPzaexbWh5UBTwjdB1xN7c4KucuzYw98mdzuaNkURexm",
  "key28": "3frb1CEWjA9ZkraZ5ziwAUsLUv2ai21ExbUEaMYRRDoVh97eiq7CXSWNqcM4beeKcRudoSgEahoww4N2XZbwvP43",
  "key29": "4hvo4na2e2Y5CCwaKLb4pjw4TGRRQ28MJ5n9dWVknrdGkQRxGGjEVbZfJ4PhXi2ZVX6hPfw43zt7qEG1Q5FhvS2S",
  "key30": "49cnLXzeqnqwi6nGbm3qHxQzWRZ7FW4xTUruiD8uvMYJuQf1wCwgFJPemoA8Q1H8FmC985Z65Bd5cTjfZYSzSpM2",
  "key31": "4kk9JnYVP8THForSB62SHbMTiyumydosNquLDagnUeR4Z74M5ErNdaVzvrfe6bfZiafFfMms8fkXHpVWDRFtY7xc",
  "key32": "2WyBwU4zgQkNsgX3VBUpSnUJLNPvMmGjQNw2L8RvNHgMzWUKzBqifar8PxVQhYaiTHrTyEXcf2X2sg66AorwYQzY",
  "key33": "4tSeNJAcPkyN88yz3eTTNV89RCUcXs8PvrPm38Xums5gG1VaWfvBjHpbYKLD1B8CpHPPJU7DH6JsYPddy8PdJvu7",
  "key34": "3Mwn89CZR3ipqdMrVLFD7Di2WQXDUn4JWnUhbJfnEy7HzEUh3aou5FyEVJhfHLPzUqHKW9nm9RxEoNi5UViJNk5k",
  "key35": "26qdhzu4RiJapE5uCXpntPhkkPLX1TNVN574QFcLgcprdFqwiNQjtHJK8cxSY7oDfz1ALSD9rD84CRzZDqZ7q95X",
  "key36": "5R96EGxU5sryZFJGQUeWxTydWgcp9pK988MMK2ff2oHdFZ7PqTZgCXf7HDzsWiNCmNqacf9Jax276twyGU9HqG1",
  "key37": "3NPDUuYfcuvWsapoLBVvQ9RFDBT59pJR5G69eibbc4XuQi4eMVjB5pEzUQSnEdeZJ9vVYhsK22gzqLCaro8Jxo8X"
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
