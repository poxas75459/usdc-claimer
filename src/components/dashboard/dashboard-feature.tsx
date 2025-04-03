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
    "5asDazbZ9VPhFmGsCms25eiNd3UeS8kFfJnZ4jVKBp1iS9JuDYk9r5cbyhwb7ALujJULCZUUgpqSJwM6pZshksGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwCpyVzEd7gvyGGVQqa3wPf25fygrkQdbL2cBETe87HabH9LXzipt52axb5cUuQWNkQZzyAEf1oVmuD7z56zm2m",
  "key1": "2mDi4smvJbPWvYe6B9sryDUxF4XQTnT3vDkFwcdpjobARYu4Ctbtk9rCQdDZjdXvvd6fZqHhQ5CZiVdkDkQXsGCC",
  "key2": "5FcEGW1B1rSbrp6qWeKTujrj9ZR8CfaS2kASZ7nrycgxXsVDtVzzBDhJhwkp5ko17k58WncvXBxgAktcZnAwb2bz",
  "key3": "dgVs9wus9M55fM1uAFUQXyM6Xkj2DEUPoThGmJ7CCeuAWnJ15NBeegztBrgYp7ovLux9GMfEm7TVyVpkGGH47Dq",
  "key4": "2p7khNp52GYcvD8dXAvPqvMVgA2s4NYaoYvTx5FVzA8VuLz9oBdscMFyNg1vrKzQLNeBkSwu4RaHFLLtTUPAzf7P",
  "key5": "4oa1fXm17e6ixBphkPSyoyhUSyP32xT8bRbiqpUvfGXSJmQNHTSmaA3YJzHUf2635xz2qxE2ziYfFvxwsiKftfsg",
  "key6": "3ZxTPbwE3j3mSf6DvMunYULbmMUmzvcqRtDJLN7GGy9Pm88jo1DvYZwxk5sKp8HvrWn814fhn8qPxcFJRPxgUZuk",
  "key7": "5t12yE5tCcVPy1muU2xSexTpsRubVdp7VhyQs6qZ3vxSiDT4u3sPE8DMhy2VX4PW9GRjmawCreKp5UFp5GqkdE4v",
  "key8": "4Mbq84YYivrVpgoyZTQFGjHFXqUghNuXmYK6DSp6vQsBMx6Q36RjYXRUzJtQcHpkTxY8KDELvoiwZA9rAWxdL1PQ",
  "key9": "Heh3SCkn4agmoQhXzgBCVyuJiBELave9wqxxJgex6yHrpsyts1PHfgCdRN81C2N1H8XYTipnZWfW2YA1VU11e6A",
  "key10": "48KHoNzpV5X2BJsQCRy83tBLvWqxsApCPeg99QWtfy447m2kNzy5egK8NWDaHqkGEWCf2Sx6MaYTVXP67mhTDxQa",
  "key11": "38iedQcWGtnfKLREPB6wi9UANEbCqfLzUfVo6PWUDrL7bnQfj95wE1btujpjeF8i9ovVFqkQaaLQFPaHManPYKRE",
  "key12": "4u68bSrrVEh7AEKF6u8m9cuk1ahoAmGzVyG18fW2Kye2GeJjTQw2RRh6978YkyZMKBG8t9NBANT5iZjsMwqE63z9",
  "key13": "3HRyuKtgfm7T1wx9SuA9opVMofULzVACCvyog8wscRi8fAiSZYnkMtq6frTB6JxQPfh4Lc4WgDZPQ5VYSHRGGNpz",
  "key14": "ovCVW9Ym4jcXYusyjcDcBU89ARoXYdoxiwPMWdb9Jbo2HcqVyYPJqFLQnBnAbhe91ZxhG8cyz962uCw4aMVV7ng",
  "key15": "2Wpfsu1FAstjR4kScWRdnGRcokXikNJUKbt4HipTx7eXN99AudEdc1tAKWWAZXyDDYiUabtUpuQUy25G8ZtHz8ks",
  "key16": "ZdEKEjpiXhpem4oMeDD8A8pw1sCatrZcrUTY6VhfRtdQuE3p3pjj22FatUFhS6S4N34PjHHbcCTucDi9jY1zZh7",
  "key17": "4DwDYF3nWDeUnCodVZmKdTt7qaihACVuhh8GFg6SNJtRFgQqPMkM8rKMCGfKF1U6wNx861zutRLfcuZ7BzeNzrAS",
  "key18": "319mkQ5P6aPsoZ59JkELoihgQTuKJKwoDDGqvfqDuQQ1T97nLjix4qW6GcD8tHZ2XCGeysXAZDK87HDX1viCuqAj",
  "key19": "3JsrjzE18wx8RMitnCdGUGDKZeLV4hLRcdo4HovsqRGq64Qn1tVdj2wuUdiALfHVJyYDyzQu29yfnc2fpKXJyUiv",
  "key20": "Kuux9NhJp3gnXtdeSzSmGy4wyami6NE9mrxkgiVzWwjWKPngBmMh7uZCtkrz83xTST5jzpvmXLmKB4hwvdWAdto",
  "key21": "57cnigFH2r3izLx6UCt25ediu5B5aXc3sG93yZwjDep2jiZiUoxR1aPVywAHtctDdM3nBSXMwcFZiiduPfjuQWFz",
  "key22": "38p4EbUZYTanNnKeM2ffiA6J28ojZfdDcVjKWG8SwjW6UoeksTutBSdafBmuPBfxzPCynMCZUzDGVzYDnHDooczR",
  "key23": "5VbhM1hQZFKT9VXbuP3tGomwJnHuBJHyxNYQnTf5VaoaJt56eWSap9xnJdegbbkYDmJ5tFTF9XQMzrhdJMXb4r6X",
  "key24": "39Lu3qkCV9zpVXhDePzgwjDgscqRTVsxJDhhHKpf8gSNJEscD8rdUd6GWxvUkLtNDvTMW7NeReA6vNkMGjvCG4Fn",
  "key25": "24ZzGpJcVvhvSD2gNjFUHrqbKQ75XN5MzcDbL63ZUrp1B58b3tzgR2S1QjiKL2wYaTN5Q2o1rwXfwxz4fMddbyKA",
  "key26": "3YbVwUea8RLwoT5pho7ykm9QJPhbUWGb3tvTY2QxYisfZF5CLn3y9bykbab6tCVbiEDw8LyCpaDRfvSPX5UHY4ij",
  "key27": "5utikFhAPyruvFxVAgD2MmvXCkT9SHL3ZfaBDbQxdhxGW7nB1xzoqpfQpGt7txutRstn1XwTAja8B9cXBfAPHLgB",
  "key28": "5AQMMmTTZkmmBZMBDaVb77j15LzcyE52RN65APPjWVPDbFLZKkxKdm8NTo4LycK6jxuMesYMj3joXdkArALH5CKe",
  "key29": "3VKuUKq15wHCF6JmNFneWYoeTyuSujwoDiWdCfrRUm2DTJ5597Xhq5PSaCgyV3CxW7UPY3yJifbCb4Z6ijntaDvC",
  "key30": "Y2qYYK12cTGsAktp8beRwS4XRhZyAodzhzoJ2UGREdoeajjCWUqxiErKHPKjhsjAzeddENR6eevp8h5im7xeNMX",
  "key31": "4ocBaJDzfjtgNN9wz9jfxvaWnajyPTMZNWzc1YM3AERcngDRVSPwJX8FFQpWr6kcnyBmNE2aGwJG1vWn6fcGskrE",
  "key32": "4EMxXkUSDGzLqxqHUs7BoqyBA3FAz9aQErE46vWmJgpqdWXGmdNcbxUxssjS7mmvSnR2z6BQ7WDJFBobxyYp8LX6",
  "key33": "4o4HEEkyskCzHBnKnAdjkMhT58bLgMNRTziiezDduashLqTQgALrZyvMmfBLSFi1Lv6nBx9u5Rk69mAHkkY3Zeqg",
  "key34": "2FSuRPiSA4CWnwe1qeJXrn4h6mp3itnmD5QvM2FiGkdAixKDmcs2iwN1K8y7WhG39ThEuvK1Xbvyt8j2NxhD1nAS",
  "key35": "4ePa9EdRg1gtXLbJU1nWUFVXCbXR74XrxdVeCLF4VmaAN2dZP7RGBiVWTY1ve4yQPzcMM5uqE3MAZihxpXCFdUuZ",
  "key36": "34tawpproTQS6sNGQCBV8RHiLmgk7dD1pX2xnJMcmpPsM1BpCgbvMU9kewa25dmph9fLkZji3WngLttJDHhgnutf",
  "key37": "m63TxuNCzcrmqBZALWvzxKdvfhCMRceXEYA2m63Y8cNjS356jqp6gqf6r7LJS2ijst6Ji6bQALqCHEt9cy5YeWw",
  "key38": "4M6rANtC15SjWrVr43XozviEmBDLTaEbsevmW36m8wJLmbQr5ymSA1qjrKfvrmBy4oJSkNp5iDKALmTSamvGG9AK",
  "key39": "ZNkh7uYF3KpiKrrHvdcSS5tebtASDUo8c2CPMw1ja4Quq8asCtZCCoQnRWjPbhZRWGtq5gTz5rEF6Pdw8X6hz4B",
  "key40": "3j5rQaPgRWAQYS1LQ6mRMxArUUdYiBh1izPE4fuUK3umSyEeJM2rCCVKZ59BHdzrqiTXUdqpYmtei3LuTGPByGG",
  "key41": "5S4MRPCoGbbwajPRJh5arhW6QmDYLycuJAJA1D7G8dTAzQLAjagutLsvPX9ruVXCgfv4wdiiJoB2oq6TazfmDx9K",
  "key42": "GnYTTeBXQ1Razc3q93WDfZ33g8wjHVu7u7bKEUSwNHzoKtUJkB5DmTtz1noueTVYubnegBSSeZ72P8oEL82SLrx",
  "key43": "37nyro3pLEgTHeC8FUeuQJicc24DtBLNtuSDG36D2gsMqQEBB4APXDeNrSiycxyr2hhnj3MiR19VNpCgyp3N5WSJ",
  "key44": "3a8BJ6ArfH9AThSsbZvepsoPW9vbBgPpiDPHBY27x3f16wz8Y3ANNvc5gfhNvtduUBWpRrUvZw5UWsqdNbZ8Jje2",
  "key45": "2VFAtRpcQ7nbunVXcC6uzSRo2SSuRm3ap9m4k8NnDiGnv6sFDmVosvgA8oyq8FUDnp446PEv7xu22e1nSQidVGbj",
  "key46": "63XTs9zK5LHvgWs1nwr3RWQJe1pczU4EUBH8zUTHABJoBLnd8LsvYqvGarjswyMBzF5GrdRe9NQJ7oFH1PTD7whY",
  "key47": "iHGc1Yp9nBoJXiLkDdfgUqYuR3ZAMoiXMds36Ep2snhPUsD1nv733bqTeMHvsS6txzz4GyrYMpuSNLHYPuAHRQZ",
  "key48": "2wzL1W12pvVEWkK5wdZq35zJip8BZA2WihYJm5RnaQBrnJz4tDzfuzuycQNeYScdG6uXcPHHHzEZui2VfsXpPXKL",
  "key49": "Lupar3fEJutjxp2W8Vryt8ThvDZ6VhgcTe6vm31tmUBxSpwypzvKW9r8y3uFhMsZ3PBd7JkNwJGpu4Mp2MfiMcg"
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
