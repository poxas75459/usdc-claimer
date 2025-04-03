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
    "3HJxcinr2iU9YsczhoVFRv9H9J9zcyWjKSmSbQ4mT1wM3RDRukYoLhg25nH7c2EwvjFhJDVPxsQ3dSZUv1tN4Frk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTzrMLTjzfP8evqNvHtpLapod8Qf3t4dp7Cmcdr5YADPskajqbc98jr2GozCKwjmcx7NUTmFNW89RmiL5LoVc5n",
  "key1": "3k6ddjDzBsbMfMGNFgRwjMRfQqMc3CezUqZ5cNcDNaSCYNNkg8wFZeGtPFa8AQ27yTVrL34Pz5zhFDtuxXBYx1yB",
  "key2": "4PvvbXC4Gc4XGLP2L4sFWdtbCnP7zFCzo229jeRLwFZXrqf75Kz13CPTmnpnqxXKAPdi1cz5XWvLXiEaGCsYQDXg",
  "key3": "3ifzuK71cztVSd3oiMimNzPFJmt7RBbZLjq9ApPQwcYuyE6wBUguuSNE1HwVyDyDNwCqZTLrcVaNhi7UzyDTvAwp",
  "key4": "5oCfpNGyR3yJcK5HrKxXmRwnqJ7q425y5XGt4dW1SAufjpvBCdMRsxUemumqFyohFUNqpkGe8wF89f3euLLhQW5p",
  "key5": "ac12haRVKxjUkoNvUrTNYbPN9i4t6B839ssAQr3Gw8pBw6RPZnAf6vyS4CpgeDqTGurLn1AgJbspb3ZFuYhU4mm",
  "key6": "5mK6jBjkJdNVs8hZrgDp5pRAEfoPBx55nF2yNnhZSoEs4LzScSoqqfCvwbEdCaUz1hPRzL1WiY4LEusrK6UmVvUx",
  "key7": "24mcEa7DVQK7hQb4cG5pNs9jJLx9Q4EhwEguuLsiSrMXMKVxNLwzSDRr95q3sFzf6vvv2FeBx5PtyBWVWL68qzjF",
  "key8": "2VqLYXVZ5AYNmGsGnSDcJCxm9zLMoUc5uBKumUBZKu4NJXcdBJdtRxAAAYr6DygKjWjb4gNwUv2buzwg1MnrkbDc",
  "key9": "4x9cneNTkeu2EeYviRP4spPpMAeo1ZTQYi7HqiM3ThHJH434boUJZnYUBiS6TBG5CCxo7eDR9vEte6oaM71sQzQy",
  "key10": "4m3yTQmDETL8sizY9AZtnkAfX2vuxq9wnDxoaoAviBWeFHWhHbajC5Am3qa34Y8WvLyodgCFSNZE87AMf97rB59i",
  "key11": "2K7zrNK9cQqjNTXDC6gk1HaYa9F1KXQAYn1Q5UgkSwFTkZMkDRWYYebZt5RqVnmjoDLzTu3hQztZVw6bJ3DcrrWF",
  "key12": "rbZbZjhLCXdFNs76YaL8fq4fbMwomNmrkvDaBneZ5JyDmYuCSPCgii2m6wsVwM6zkrxQhH9Hah2YeEmXU723Djr",
  "key13": "4KiZaWMG1vbZ6a9gqTK2k28kV9MjmwLGWbQfH9JRGLZUUaNzTKd8UQsKeVhviabfcdiNXGn7kgA6p9bqogSSiEb7",
  "key14": "2dYgvhYDL4XwSKUnryyYPqWSmqezB5Uy7aeqjgj28Fr2kK6KRKk7VodQJDwsLDvDh5BB4owMb4YxwXRuzysZH78L",
  "key15": "3uXcnBZa25D6tfRHd9GgiCTy98hWacaAsNJhbvvaqCkJf86V2envpLbdb89gds2zKgyjJ842dbhCCdY7zwkTz3Mj",
  "key16": "CaJj3TNiDgvvFaauHhbqsdh2pmhWbUmZ7q9BJw9UhQnLX4CSgLSJackY4RGaQg83PkTm1ARfK75gwonCVo4hofS",
  "key17": "2qM8U5kzirFE4eQ1pRB1NP7daF96P71RFj2QDpx9o18bU4VqSa5ZGDiFXAzgModhmBb9Nnq7DkN38fxqMUv9eAiw",
  "key18": "4dpEFDmRoSmBSDewXRmYL6zPabbKgEUXUAt2tc9jmMHTV3uR7Sz8Qz9gn4NPbKXbpMeD4zsu3xMJWjpsMTsL9t2x",
  "key19": "3HPLmuXrW92U4BZYC3sbsm54Mz2ji8Gi2G2ZzVU7UHZ8barGVvX4oPh2qfJmRJGRMAz9VeUwVXXYE46ztWmdh33m",
  "key20": "5o5HLc8NEACPs2ryY821Gdro49AZS3PaPD4KjZbWyyz6RSz6KoYD17xrQNbYgyaSSQDh8atEUJ9VQ37MhBxP55uy",
  "key21": "vfsBGhJRhRP8YgRutqvc8ru1ikisw1pP7yVx6kTEmnf4MWk1zA4rpT8nrE9azdMNQ7tZpUadPnqrtZa8bx8KesP",
  "key22": "2v9gqT8KZTadUHVtEjC6R5ar6XpsyBY54NAPFHP1793tLjdr7tW7FwpPgNJM4FCLhGViU4yZCxpQnrYuebkQRCAq",
  "key23": "66o3DC29u4rJ3isp3e7sgKdLTriUuPWU9gvX9cgGBTE2u2mFSGPkrnXryuz1LM6S2EsuDoHvajYWtf1WBy8F9snz",
  "key24": "cQzh9ARyCE9prPy4t38nSJsm89uoVisR75KCoMwb5V4iYK1aavJZGL1Jrqc9UvELT8UURkzTvSy2sygUovponhC",
  "key25": "4ewomgS9eTUrEoZcr2JDpcCrizF94ZgxCiCH8fRwT1XUGxgPas2cgaJnsbYR3kyS1ZgbGmJuUAHZm4zwgsAPiPHG",
  "key26": "3P5FHFStLwRGhvPmP8B8CDku5b4h7Y5oyCA4SjpYGLDm8G124FMWxbpBBfVsV186q8WgSF1j8GXUPPzwGkLLTZaD",
  "key27": "5ZqpF4AQNDLnvQzw3JfC3voPhr2kRAtmJ1twwuHY3FWBt8AdhS3RW8hV18Ak9rqsB34495xq8QDmWLiK8dADQ9kK",
  "key28": "zL8kpBRmkQG5nd52a1hF8JejyK9KEXWH5YgBejXkXu6cj6CXwwH7qqV6cLZfKfqjSse92sxyShdEyz818GyNBzN",
  "key29": "2dcfDVNmXYUV2pUYiyXUuXAsoyzxGoDLf1jud7J5WeBvXpyU89jfVHvY574cybffiA5uqzTnsMLD7bAquCbdAGCb",
  "key30": "X2XFLNaurA4HN7VQM6bs8oQYthYywwJxVB8b75Zn2BueD6L6Fq5djsZAxGZSzpN6HLqBQfaLnvpy1F1axDvFu7g",
  "key31": "4F6c2iZixoxYLyHpWVxkkAJhTmsZ81kdwa8pRiRuohs7Kq7F5bK6dSRQkJExRKuT7H46trNjuj23J9SPhXeR72TF",
  "key32": "4C9sVbQVa6vptSVN5kGJiNm4aRYdXaJFhB1KWruaC1ubtbQYCUtkbKDVEegS7nDKmR8taBc4yYb5SU9cXjQS4MfA",
  "key33": "2k8uWwZXkz6bzibHJXDD6u2MB8msVDTnPb9Jrmufoa6acnRHfZX95GSHGydbDVMMBabycjUjeC7h3fqoasFcpidS",
  "key34": "5Rfju5CJYtEeYfLrdemFFneuEg5Fc2aQ6dkACbTw61RiV8L8yN2eYNLJqBfxioMg6fpRSwWEqppAdxXxweKLBjap",
  "key35": "d8oWRXtn2mMPvnbA7JkGhaywd5iQoASYgnfiHBFzk6Ba7YRujrahttoxjF2QDsvczGm33LRyL5UQTFPavjMSX2c",
  "key36": "4a55727KgtxcURmSiAnU5zwmV437wNRX4ukZtWPuKQ3ghwgz87QPxksE1tvC825R2j9BBvZhCivcXXyhpVPjXQhZ",
  "key37": "5QHSZt634vpXqvkKrNYWeELc6H7TEsv3i94p9uj813opvmZTYU2rEZgZAWiYPhUJ3EX168vB12i3N6Ph9QiErEUB",
  "key38": "3TwWb8WT8TTHXK6tZ3i87EFJDN5WxdyjVoJv5ikJ83z39w5M6tr9JkTJ3oEPkJ14abot737V4kjs57MPjLgbC5vn",
  "key39": "45QDreMfpPn9pYGE4WASkgsfYY38ccPs3PzBiK8EqNGqh4FmtZ7ZgSNogwUxsKysSfYwXnH4BvuXuNuCzyEaMetn",
  "key40": "5Uk7Q4MwhnqhzAiZJGnpjNjcMxNUzNkAwt316XbM2gCYPDyd1Uumq6y3i4J1f9THoTHrG981NgNQeY4XVhyUThaA",
  "key41": "3NUHf9D2PcACjS9GU9VFYBVA68rRg8mpdGPp78x9ziRV3b1RNo8zE5xnojjACnhbh7tnhCAC9Nv9VFw6g7eZhqZy",
  "key42": "2SGnYd4wZBhz8LXKre3aYER4qF9dd3EZrurZ9sN2b3tktW7mPByweWeD8xwdTYuuSJpeXi9tzBNN6qHkAde1M2su",
  "key43": "4qhyEFY2HTGGPnNmXWQmXC9k36YZuNqAtp5imJzJsYoTuMGdPnAAmzafNb8EavR3eJohrAk1o12mEWy93QGWWoNU",
  "key44": "5JvCoGfhhP3xjxD8SknY1eAqz5DgRP21dssz3XEuL1a1KEJoGbuNNFAwGcSubV9EJMCX9AdR6D5xP5AvhQt7TW1d",
  "key45": "5h4gJKnw9gXt6Kz4FEG6AL9NmB2raqZhLzD4SULjTEANqnygCooEeaxD4ygA2bEZAt56USodqNxzQmLJU7pvTwvs",
  "key46": "2bBnJNQgB92cXQLk2SmU8GNBJvQzHD3F6fwxmKdFX7tfjj6KbpUSV8fEGQxrcD2eTa1krLdQUUfhVmFP1G6wskXY",
  "key47": "5EQLWYoMLCS585ScbZPmfkZ6H6Jiv3Gpw7EAo7RoHzEcaAMhiZXTJSLHT7Lp2JorcZqrN3sPGjjkATES4QS3ow4c",
  "key48": "TdGsPdhKqj65qveJWdEhgd87JVMiJDA8VuNskvGL7LfQZqF9X6JUwN5Aw4Y85ekveKdd4Y6nDSD3B2VZ9SywETd",
  "key49": "47n4uNudb6QTrDJqB8YV2ZPD9WDhuT1jgb9wS2uz8mPE2UG5bX29aeEAfoau5SbJJCMQfoF844TvwXyMjy3YfTSV"
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
