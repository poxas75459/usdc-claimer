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
    "5oZPkYE9K4gdSTNyEmyosHavUVdiXob42QrqdDcp1N9aRDnDR3xgiapnPWy2KSC3itTGueWcP7ZFDr7rapvU59tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idFc6KMx8CJGE76AVjBWAGJo88zb1MRmKpwmQJCrGD9BFVuW5r4z3YRUT5nZX815jXNDcKarAYaU7Xo2F6gFpNC",
  "key1": "3yL4HaxVEgjcEADfSCFivcnKuuM9qsym4wko3AwC21MKJq4LgXdCTrcM4cqCcB3KcgZCwAz7vt47MEcmuD7y5tbN",
  "key2": "4hbX2f2pV1BSDNNo4sEUURMx7xSCYk6Znaav1HSpTaVYcmBPgrqi5bS2bXvVdF221FFRQmPt2uXpiYQDYeSbShsz",
  "key3": "59c7KWLHx6hhuNS75nUAe9W8pg49phQ9RMjkt7Hbbodm5CwqeXKYtZnqVUL1AYJLPJWq77MWVpFAfFjLZJQg2sty",
  "key4": "2pevABJ1qNymcjesLrX33iQd65CFC6qdCuo4ZroQC2de59Cgu9s46vK6y65qRrcw5YhaViyXu9ndrzLYmE4gAw5y",
  "key5": "3FcGUAPVNcHzXfCDxYs9445mT6c6oqQgvHfu9QsrPyZYvggxEVRT4BCTeYbgB2mz2ttx73GJR9zfAeseK2g6veFn",
  "key6": "3aDyU8VnSEaM1BaT6cF8viK6u8FfmzPbqqXKCzrLNQESrk9w2L38DxaiCVeWrujnba1UFUrzftQWgSWdAi2CXbKK",
  "key7": "5HMbq8z7g5G9kytyU5oFaXPYiQ9bubbWkB11G3gTWy7D6NHFdFr6nNqdwQNw3s2GuZh92htoraG2HbqP5Cim2exJ",
  "key8": "2rAYM4PXNN6NZjG4Hhq2t6AiPNpXi6EYcEuVb3JzB9BntrMP7ooTBa4X5Se2PfJ1XMfeDxw2Df25z19shcpmMuFT",
  "key9": "5PWjaocQSRhu3pChCD8G7Jd9s2wYMdjC9X4WTaYMsoEf9izCB5ttRWoAcZQBcHYTJ6E8r3WtXtxzk6wcwpKjb2zM",
  "key10": "9NpCs9LNYdTBDhavwUxn59EtKf4JL7yAHBM8B8rQnzLP5xvm2bk9j98aGQHhgeumc8KEpNHASdkmDmnpc7Z2nAZ",
  "key11": "3NyB1fw67ZmuaWj2o8cQX7b92umSKtZGkPkWGTbzFsYJtmUyqe4GddjbzAcx2R18zhF637TR4PgcRKmiwvEFTr1d",
  "key12": "mYMQ1ya6EWWtNER2914KDsZZ7njPyuZHZ2q32QUTa2Vd5FziqCeWrohsmwnbAmMWtfpsxVmPMEVdf4RQLjuPNn2",
  "key13": "2DkkYbedPRX4xZc599PupdgbunV9KYmuW8vxRTzjA5F8UFVtXVpixuMWdVCR2ZFY15dT6rNCY1vWvaKroVcUXoKb",
  "key14": "YJjzoEw1LNVtqUhLrbsMveL2przVeNzHYNv4KTGKbhgy4aNRRo7kD5bkWUVBC1KTCutj78cVAKVJjDhi4ijGoWy",
  "key15": "42gDvtygTiSgddpgtUwqAm1s6jmGapwYWnGrSU5pCPA2teCzKUsng5BMv7RoZAjJfSHbU1uEt1Y9LjYmDAvWNt3Y",
  "key16": "25sTEHepnifvf3MtYWf932tRJpUCMtz3dADcijMGyKNFaPshmR4a5rns488XSnv3dvNVhp5PKhYSqgWnM7UvEhnE",
  "key17": "2NuurQtA9YW77nZcyFUBTSKbw7GuZ5zAiQdU136s3abQiiEg4gdayJ4ER2L9YWQKabMK31np3Gu7VWLa3YA59J5j",
  "key18": "3N9EKgAJ9f3ZyXDKC5NvmM48aJuVipDgxQbNgRZ3mUWyj2T6rfgGfe5eZLuq3bXcyaAfUjA2Vir7efTLZBrqTmow",
  "key19": "61Ux6rUVt4mivhTgfPpdmF9mzTn5aww7HoXZDufnV2aXCy9dQLA2ff4tg9tnXixFNuu6SnYJj8zobVKTyFxzeTHv",
  "key20": "3odfUyG2sU5YZnupEo155moH5JahsCdaokNJWEduUuQbbtwAGNp6BdDEgQkCG263WRuyFEsDntMa6VjdkA8QN3QG",
  "key21": "3jTxyktnqNnYCB7EfLBPyA8kcqupAUKpPVGNKCG85Jv9QggKL2fhGUbiAtGwPTeYcvRMZK45MFEwa57vDzLM9ufv",
  "key22": "QsgmRsPAG2iRcf54WohTENX7yHGfWQvpozvyU1QFwG3vPi6Ws9H4ShsWt1HtQGyxRFvMhZad2A9ZZ2HAvSCaEeZ",
  "key23": "5qmuqYMvZ5Ti5h4JYMC7RUeHGanZmG7mCRspXFXpsT8P6BNc1AEku5tE8JAsSLxrj5pi4dWAcUUkWQU6XBeYkXGj",
  "key24": "yizX7U9rP9Zcim1qWf6xMmBvXcwhTYXPvUuoNcfkEVtrjUzwqK1rnTMhBPffYKiANdL1n4XrDN6PeP58K4CqWq3",
  "key25": "5DmojB3fDqseZFbxK5vXCHUX4TAXjKoFpWiv5X2WL8EyfihkqLhjK7ioygNbqK3JcnKdZJyrMjnGUaF7YBcjB2oE",
  "key26": "58k8dqeWARmUjEJ8nQhHy38D4X3HF3usxuQgqakGCjN9kyx2jJXcGXxu9Tn8YRrRg1tSSicLofuLk6qPP3cQYFxz",
  "key27": "5xKHTRREiqwJNEtEbah87k3WSgSormaA9s9xC2eMUPeMfm96dgAcw3HyAyJ9TaLe9oAod499RC8mkrTDYHJ3XWob",
  "key28": "664LHumMbF89EcNCeQHW7CVhevMfQHgqPSsTiKCeHMoHahV1KQ8vxEgT3dg78GEdoZZSfnx2jHkAohycW7bpEF6U",
  "key29": "2r3PzsuKu83oqSjQzk6Uc9WUYeJXsPrWAm5jLP6J68GzXEo5XBqty2iZ4c55FNFMzMo1hyZQWiDwdGSTwehUvHDk",
  "key30": "3a6WxZ31YhnMKVEMkoFkhraWWD2gKDtDT9uLyX517uZ7qd6fmZjt75LL13WQzFs22Ui3bemyZBBDzm5Aq49AAmgf",
  "key31": "2D1TQZqYv1HiR5M9UXNEQrmNfGi4TeZqmAqJEsyLcBWdbwU7QwXbenJrLyNBdRUd8Vbn2MaGz4WSXLxxr72FTEXF",
  "key32": "FQvgPj2dtuFAgne7MT8rgmDxaDAyv579P4vsG91UN1mCyZ14YxrcAae217qRMSeDyp1jtaCXEgEurBh2BmNAuXx",
  "key33": "4spT3Kj3Zf2L7fAczQTASKCibBSCkn4wXsmg6RnMjZriNdeJCXe3PpdAFDLXUnWdHpjjpJcxWRKQRznwSLZJitxQ",
  "key34": "5HbcqADgTgXv9bLBEbAG6Zk3qs8SjVcpNnUtnDnwSavhgxiEkRbvHBE5mE9wH7VPE2VypWj8rRcXVX7XPGLcP84n",
  "key35": "2iFgLRuPvDQHbsoxeSeKNx7E7dw7DBZ9ijCvb4VUAxBsxU4EGf77YKF8cYRnSS4GcBCy9usMzEMRVdvq9cMBusS9",
  "key36": "xGhzFz7NgAWLiMsPSGEPCbCMhAyzKTTXCMZ1R5buUkV3SK9vnpL8VWYxfH7YyhbWmMRD7JN2fVaSVkx4848NNcy"
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
