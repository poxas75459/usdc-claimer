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
    "2neb7ZdbxU4pGwaLUHkjxmmYzk6rugkaYvPNGSx9ZPCXQF9PMzZXpYxTg9U6u8QLc8ZGuA8SjLZ1TqQ5qvfsioZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWsojF2Rg8uGsqta3o5E5y6jtky3Yx31XsocS7DSGQ5sKcuY9jCXVMo4p4L6Z3gLoEWoJpuWE4jivZYJrmADLoC",
  "key1": "5U4gdmVCAnMiDpKceBt62cRn7zPkMgBgcaVdGvZcN9sRZueg7ZmReubA3mBgeeq1mL9DxBDpawWZJb3CUFPdfTQ3",
  "key2": "3dFkDYbugcdtZCxm2tRm7oeZKETdJjLEFpzwGA6B634PzrgTvt1t9nWvDtXKBQCDDKdHPQsrf3eMZ6aFb2Fv173Z",
  "key3": "4uMENrKiosMUNQnAvqx4HUHTp17q8TcNF1zAY4QsNWfQWKm4DtfyBP51vTYK2i6BCEGngJbb7UbcQnPBiCYGJ9yK",
  "key4": "2s4tTQn7ADbCmfb8zjJU8DrwRi9S1aG3Kfq1TV16iRfGgqxfk1FxDHSqcMr8oXNJ7R9CECvsmYL2B25Gpu4wTUsK",
  "key5": "6526BsRQAytiNXRCA4sSMcaE7KQ5vxwPd4DHrrfUzh5iw54AmbfraHLQ1zzDgW5q8RW8ijGqwxtbJrudbjV8FXNo",
  "key6": "vHLboREb5huHN6mjJJf8wKjyCsH1GYeSQkRPwwzKqHoW8t1vSGAmT5ehiNdDeWcec2r1RiPQZNNC5Qs8sgEj3BC",
  "key7": "WUvAY526Nn9sgN7NJo8MbumXdVPta2HGbwjEazZfcvDwXeMUDjRdnLt2sjPust51rsLayFpzwbuianBHUAzauFb",
  "key8": "4drvyZBmdm5nUALHoCWhz3AH4usg4CvFLUsbA8GH7cLromiBSBM5GEvjRxEUcpkcMMgMJusN4K3SAu7ahuRvvdYi",
  "key9": "32Nru6JV4JW5Ru68JvtjwbWAdQHggSbA9vuEskCmyVNzuXrzzQGHNEjsqbSZvYAms12pB7AZk4QWQJDdaE8ehia5",
  "key10": "5vnFL2KSA9v5pEoP7UVD1V4UpJHVqXxYyEFLPRSLCv2Eq2SGMSBEtNXCH9Cz9r5NoNSA6yTKMNSNB5qhoGTxr6Kd",
  "key11": "2Z53YQPptbV3xcMjJDrz2F9vxvSCBT9Gz6NALYijAJKUUEQ4uyyXH5f9vCG7szETSM56zmh6Vt2LzJxc2VnpYEZt",
  "key12": "5TrBtdZ44kaeXCeuA9N63ZkERaqhbtDFF7g726pi6dsqRG62hmaCuAHgNrZdfVNooaASFS8VNFc228eCYBPRi1kW",
  "key13": "2evaW6Scx4zrs7RGvhDfY7VWYsC179nEPcX5fNctnbu4JW5eKHuNJT5nJRo34cd36C2McJGi4k6uasZsT8a42S8b",
  "key14": "cXLQaQf9Kyyshs6AcLuqK9XaaRAG2dCeMMMEq3Uuhdmg3Ry7Gj9MBajQDJKJCB97H9Duh7RM7nWvEtXjG1cjUBk",
  "key15": "2jqzzYXnKWona3nX9YbaWU6mgpube5cUge9nzaQ6fRs1yVNeYcr5sziSqNfKCFYEmF7AbRfpAbbccKTof3Pw7a73",
  "key16": "2pSkKCiErhZP55EMGGw7DjYiyaAWMyjvqJcPnEUcaDgkq7XWAvoCCzvobMi1Ff8c58WXLgnsP3955h5qZngHii9Z",
  "key17": "59fbLFVPy8wQp8h6fM2VGx5BBucz5JS1MEBZ9qgML8vtAuXpvKW27BNEHMx4qPCuiaKe1nLSMW46o7xu762mKCh4",
  "key18": "3qTB9KStZV3FkyV35CC4hw3xunedx62s66RGiCV2WatXcdZ95pZgWb61LE2b6S2KevDAdbfY946jmFDShX26CVVX",
  "key19": "5E7KFeEGhK9ZXMCo138wXzJcf1Yy6HNuhU5RQzYsxtG4QVQgtWfXPNuBJPiGcWFCj3NfznyR9DALMf3xGj7ZSFms",
  "key20": "3PAwoMHhm8kTfyMMkAFgTSv86gqAQCVYDJQu1QSnrmEu2i3KXra6tk65Y73Q5mH8YHWZ5cWmnLee5pRJAyuQin5i",
  "key21": "grUCE7LEbBaRD4gaLGPqkmHJjnWNoe4LUk4rAZS4tf1vdafuBSr151DhMUxPumLWdbQeeu6XWkywiUu2oXBNeG7",
  "key22": "3k7Ucv7AzRtvHrSpR7LuUcj3SAQdqmrMXs2E2WzGLD7y5gpTjwf64jHvLi8tWHivFpW54BNrcxoiy1uaaLj2RoGC",
  "key23": "315mUezvUVsy3tviw6dsSSzEB6Yw1b44197XEzytXfaDxVoUBAbDpTaT7hLfkeo9fwk5krJgME7AwWHh9nk4U6zZ",
  "key24": "5zY641yXra3dLLxUrQpP38k4yS9i2UXHmSHi8GUa2nWeGFRd6o7jCqLjqjnpsmkfPBzSaCpMGCCSQaFKGwTRuWVf",
  "key25": "5tBqRD538DVBHH7yqspqHCiiMQGnyJMBNHkXTH78wRuNzuBGqMVh6gwZFtiSdwQVQy1xtsqNtuX3i7KDCHw7mYMU",
  "key26": "ESTLP4j9yWbER4MQ9w3z4auJJv6oE1LW6ztr3ce8p4UZn17x5gvinLWqEneJED1cjxtvocox1EoFUm9DrxTv2Zj",
  "key27": "2L3ZpsRLqHLa1soh5j8gQEsbrcxwhT6Uj4UVLrdNPnMWP1QLzAHxdWDLE8ZAJY8C9T7b4HDhXwCDx4eUuRMayjpW",
  "key28": "3mwhJBbmMwF2Yzk349Ww2W1VR9h13e72nLkbH9SPnhtUqy3YR2MRQTAH9Qe8Hd9fzdbUVYkqXxYeFZo4vvWtmWFJ",
  "key29": "4DZT2m2njBJqEDyU5DQmgBDjunDpRMfioB23FikcKDkifWSBaYCJjxqhyiePfjMHjV1t8FJXBqEAQH2dDt8zPWc6",
  "key30": "uVdFGpovzVwCyMzeYXit3D56yfmt11y1G6fktvyNxvuY68s9EgBbmyhATY1BrGYWe22TxCyn32vEUXSQAtByR2p",
  "key31": "3Twt1wtfX2ZF4t7ezigxZibA98iq22n5C7f8AWsBTMak8KFZdXQYuYwVv8RkvrNpyegxgxQ8txStKH7S5xEHiD2E",
  "key32": "2VRT4bUknsvxYvfkSKaPUJMyp78E5y1QxCniFkFYrt6uEAhuCECeRSx4b3wbXRKHi3NZBSbgB77sxSbVCeiM4YnN",
  "key33": "4Qa9cJh1jRqyJmEkpeRwDMoBAr8DMY4XanmULCJKowJXXd5NCRSg61Ldm155PdKUq7kKgodFwJDQnr4b7qbCVXKq",
  "key34": "5txsz5sSsMgbyi7Gj7kqjcUnvJRLwBvRj5coMNReEFGRpCK6KApvpUiFYBCCVuysvwGJbo351FKCssP4oyhVyX7x",
  "key35": "2udvRm8KuGCZYEfMrr4GtavAVgr2DpjJhmKFKXweQkVCWK1nKvHfsFaeFn2YsUq2DA5irN46ko3wc9n3Hpyeo9XG",
  "key36": "2txajhaqz1YBJfRMWuJQEjff4FEnGEqcsdz7wV54vdcBduY4Y4RSJ2ZdfCMqbsCeD7iwQxnWwXw1GZ1DgzVK4RG1",
  "key37": "55V6Li4Ku1JmQVWTjQdRApdFGMB3aMnMdtRTzHcHLfJLRnHA7LWEpgbtE1uuQ69uCJTbHv83sNPBWSj39mSFhLXt",
  "key38": "A9RMf3MfmUQzmf8tf17ph5nRHtV7SKBua9ohzGwB8aVEhRkAnX6EiB2eqS5wvjuHrrmtTiGopBezDkdbz1it5t7",
  "key39": "2BZtNs8yZuhr2BQhDn3r65NNdVYKhTrLm58P9CHG3KpuXKjbjbvtnzvWkXZoLkHXNvSoKDZqhfbZP8514DjEv7jE",
  "key40": "8BBsvakdoiZCFwiaEU3zjDDeWKYEpamoRZPU1WavCwUWxMEuUVQEiGZwqHyW1hfb24ethCwGA38woc9cB9pJRjG",
  "key41": "5R6gk65fAxaZygnd51bS1ZN3LGN4rB7EjCaTzErUT2VRVRtSM7kkoVbpe9fgeHcdnXCzAiHdmeG8ZHKmoZ2s9wCQ",
  "key42": "5znt5795QSvbieieQ9GMdTG94xU6f5E8ys4WoYQmqCdXSaBbePbTrpkeekJhRJphZ2r7M7emqV8LepD1Jf22fNXB",
  "key43": "5wAMtcFK1qupx7qmmz5HqRDj7uxyX6u1y6HMHRNjFV1oQBFgMCp275z7fGwe8tYsdCQYhDZDuLk9cU3CxnpCNo2K",
  "key44": "5MyFFsdrkh4TtPKpQUib71LKdr4AUx1PiNet88dnfvYGt8vM6GS2dyNcsMaw2awGi52SNnVeCkyMKQvwHLN3MK1f",
  "key45": "4S8eP3i5UAPGC4xN79BbKKxqhkPkqLbYcDU3Cd3VroqRr3bUd84LQZkuiqgjq6ofF4egiGqme6gmZNVFqZjDnhoU",
  "key46": "2YTjqzPKhbaNAG5odCkxqW7Kg9Vu3TFjSMpaHTnekiJ1DDweAmEcMLPmJEYgum6q3uBSuACHC3kUmaRdASNhc2Wy",
  "key47": "48UCfXPbkTZDToUsdL3hh4NoLfiyFnDo2Cmf5Pwwr2jFDeY4xJeu1cjyJwTiRmSBsr5swVxDJmt8xACCkGj6M3Uz",
  "key48": "3S7k9A385RcGc4jQJhQ8PVPDb5jDbD79EzT52W7Y6AtcnNFsDMmnEMnGSJdftepd2XssSqbj49gqEx7ngH7SqQYS",
  "key49": "5hDYoSfqr8cDwviWr7bx48A1bYGLTZDbWojSrhgWyriDMjrep9SyJqBxgFCkNeAcrp6G4UVdLAyC6Y6ci2g7gaUq"
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
