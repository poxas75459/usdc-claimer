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
    "5QAiDXf6xTBvXbo1sXiHdT42qghSoENJqFyrNVsnRUTQ8ByDkTECypCkBKAkfmNb1fGpEvmip9iJAsVsWaH69hkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzghtC5KJQtaiLjJGPcaPxaP6Wgj23PkMygLZGe7sEqvXCjCuWSQZRcCngG5r3Le9y372ZV9N64HTxi3KBaf8NA",
  "key1": "4rNe7DDDzcEgwK4sNUYNLyW7coQBgJrFnTemN2ua45Yy9Mb9ZumioVJUUYiF8n7wV6ktPCnd867RNg16NKGbEs5M",
  "key2": "4uCUe79EiXVExTRjASZqX1trJ9vGJ6GvqFWrAcfxWhm5AMV5gnN5TDtmH4pwutKfYiSdH1NVd5EGnEwZBvbAXd7j",
  "key3": "4iFDLBDq9EqVUU9sGy8Qy3G1nC9Rrc95UGhujDMvo1xxb8wnTeV32heVgCDuoj9cjoyLX86bC7UzMaojEg1PvGsj",
  "key4": "aqStbCDspjrH95ybQnpXqw5x8vYRk19gRrqtMuU4R8xdHufg8PZHeUVZaJomWGeofaBS1vAcv2vj24dsCKE7LD6",
  "key5": "5rrqFHZFaVpdgr1xLtNacnv8a8d4WiZYyRxsn8m6kE795xwxpP8gPihqg82Qvhdbw1HoVFZxt9ED7ezrQcvviTH9",
  "key6": "5xqGhUdjjhUYhrfKHx4nKt4WpaNqen3t5burEpEB1t3tuz5pH5cYoxHdWDnZBSr3gXNStoyMZT5G7PDaiq3FNXyC",
  "key7": "4ZfsXJE2UaRc4r1zF6evHLwV4KDsvQgj9tfePrWoTTqjvgZBPdKrTMv7jgpuw4YkLWoModkxn7NxDWxUwYugUyaU",
  "key8": "5uTugNZFuCknCyvnvxNLKZCbvofa9eGR27Ei18Qq4Q8VWQv4SEHxQkRRxVRM9RH39stb2sjmh8Tp4kxJzU4KaG8q",
  "key9": "4CE5zPTyqXSNnjU5YPWYTBo3AWertvGj2FJvWnbbLdGpVhxueWkCp7wjDS6e48MwzzFCJ27T7uu61mGhduWYsw68",
  "key10": "ntbZFsKfwysVuvDGn3v4wUFeHHjxDsrsHS2FeGYwZj8BekWTeb9xdmsG7rtp9envTjajkYtfA5dgZw7pXZLZpGT",
  "key11": "EZR9Pwj1Y8i6z6vndevQj6121fLUFu7mjmAnsf3xpYMZJthy3YGrhyCkciuZWnrngVJWoJNQGAxrtKGV2kA3Jew",
  "key12": "4jpDH2GmpCNRjdFYpb96SHzPLPq3vhCxRFT36x85nmUz2kEFQvGzv5dBKqbRutWQbi6fhtgM7pxwwbpwJA4oWmjv",
  "key13": "3wezrUX77cVyZZHrhs1kdYBXffHCFPQXVrSFJk9duyZ9qiByMJu97TzetBKHaC8Eg1moT4h2HQXjLRQAL72s7cVr",
  "key14": "5vWdbTY9Bzq468oyKiDRBQKsVJ8EZXCwTh3D4pfdmcdRgnCsQ9CN6A124PE1PVssELCzaXVqAAnKYY2UDcfEjTTY",
  "key15": "36D9i7rTDnTie2vTcUZiepKoQDy6CwoHcdvkneFzMPRHGFqK6tV6yPskBLW1R73tDJFbtFoT9TFG33Re2Z7mNvGD",
  "key16": "3TdpSKutRNDAV8qdKZb9mM9sVWYrQoUu1DcGqhxG9Q1ocdoxTMvPbK7sbtv1hd9UrpPjrpz2JrbbpsVjsYU51p8L",
  "key17": "ZSFLcLoHVcTaCyPYP4aPtgi1cSQBwrzddv8Q5Go4UNvVXYyWzFyrriJmwbrGFWY5oHRMHADcN4Wsh8DYdabULqt",
  "key18": "2SKGYjydBoJDKPXeRBwwVKJ6Tbhiyg6JHphVSqSXfWVXzMhRV1n19BmS2CFQajArPmTjAhK39tj4aWs72xrwNh6Y",
  "key19": "4MJcB1XMLppEiVyZwx5Gd32gLKFwsK9mEzYdgSF2Z7zCDMwU56vCcBQr7fJPeKGsLmdMSdqTZo2UuDgDyake3VvT",
  "key20": "66kHanoV3vEaVatwgUbKkV8zWkqHHhcgroH2jW5UgJJJ3gPre4wzzn8sB5Asyzwdc717yYeG51hF2En4xn7FqYC6",
  "key21": "5dN4Z842mxhYXfa3hA6YSU98bitXX173bg8rUJ3KXZhP5b28pcatKoq1mcHQNbKhGbtwn9zZj2D7wunrwaFE1YyF",
  "key22": "4EdQZGXngsf4ig4RVTz6SASwnjVZ4kV4vrd9AeJncxA3LiQdQhkDsVMzjX6XTxo68axANAfw6tXNA39KBrDoWa22",
  "key23": "5FvuNnaFRXRBaGc5J8BzZc35b3fUWXUisNf33z8nDzpgttfy2RcBPt8RTWCR1enBnJncNgfJa1aJaseUwTDRt1X2",
  "key24": "2sPXr2msDZrNqYAEq7FPkEtGCN6ziTGjazLY2yWiNziKw5jyNXa7Knd9f26w3Cauf6w6yW5WEJuJUHxYJYqVKRnC",
  "key25": "CtwdqMokWGdKPb6yUebTsuGSLAvnT78ZSqTxXeAJeN82p1MfK26CwADYV4Z1GcUeaYFiqaeT1NqHvzD6SiD7FYG",
  "key26": "3moc9jGKjzpVa44AWX5dUfQkULWmMNNZxmJFhVDy3DthVCufCemUbNySgj9iCRccSHcPKecZMzxRRoqvJD7HoDS2",
  "key27": "51T3zwesPqyw3agHszqAyXh52CadmiiXc48mGrXd9NrDZd9HMtptbcVbvsrZP2YToLewfQ8ytfo1qmJRN2a3jgeX",
  "key28": "W634mSzTqs1aVPhyGF1tsvVCZY69s7WA1Dz349Tg7n6NH8pTKLLdYyPntzozRpUZwaXkHN46xfrwevrBfzCRNeL",
  "key29": "4r5Q9ZgvuWEVzeHJ5hKdqvWmP7Liu1spuuwDZjEdH4KenA2XvQ4wm3xcMGyXogf85c8SQF47j2RUr9pirxBnTMwF",
  "key30": "38w8hbGNg2mFfs7JGaYHqu7XVaeTadS3Tz431WdB7XUyEp2vJyiK41DnmD9DtWUYe74jgptnRXUT7jcWdSzwSreU",
  "key31": "4fiSYCAKiFB2nE7dYpxqWBkRv83khbFB4dLdobZ4iYAxfxhyJzGHhNA89U6PTkjrP3HrYSHnYQumi7kfy5MkRUU6",
  "key32": "4dD2LQcB7NCPG3PYqy6dZQB2aSs1tV4tjAPVvxrmfmpheXQjGWrJxAVdemnTtc997wFzRrUcYfhdWuTvV44K6fTw",
  "key33": "2shFFwPcYZpfJTwfn1p4e5YtR3e2hxLSZgo8xLWPeiFE892y3CEN7tH5fbrJ3uvnSdqJULY18ga2X4HHyTq4hPnA",
  "key34": "2FYuYDeHQ2Wpm6NAkPXZzGYTkUR5PRc6JbxRWifE6RfFKAat9aNLLnE1r4djm7nPDE3wmvXf5L7JfWdhCUWmiYdj",
  "key35": "3hcFirtosFXfHx1N8XvKCHki2WagZdyeU9hnQSePSjoG2WMJZRMYax3NmG1JhZjJnSQu9gvPAs6eQyggG2Eekse5",
  "key36": "66rZYKoGjbyPyzHCYrrc9Gt2y4nBF1PtyChV4VGaWXfFQmRmrte5ZQ4KrPcggfMboUZpkWmmGqHJEeBSxbFZzzdR",
  "key37": "qz72JfzzrHfMEQNN2bWvcikfCuGhgtcrDvHDcK2VC6DCQcyRwGhdXgHd8tFoTTQjzvHegKRSW7WCi5J4jQqR2hz",
  "key38": "3r9JaGJMiX6dfGcp668Kn36D4oer8HhcugEJHDAYqW91UCJKMHuvVdY4d2EBDxt8nYDmVjonu8RetuAUKsxHq3hx",
  "key39": "4YjKpa5VDVxMq4YZpoEPZQWKryXFKeDHt9J1PWmkio7dY1PqMZATQ7WkrunmCYUVtirjUhr5kcZaCN88SYdWFqHN",
  "key40": "2aNSknimpXo3cSdFzdxFAvpbVSUuSB4UrQTWt18NkGZd8butMAx5nTdfwpVhwFmfzrA5BwdVMtXknqvvRot43oMU",
  "key41": "25zcCfJg9urDKwGsDGa1f4y8C7AxjjDhs3m8vz5EWxQr5g1bajZfCk82HtoPzQbybgzcfiM1F2U3qSp4DRczQ1g9",
  "key42": "2HgGAeo1B2uYEoK7JTktxtuVqR2rxp1YCwqVGtUhQzsKNHD9XEaXfZhgHipDW76qFHjcWDpQenByUuVnyNTb6s1v",
  "key43": "2PoyEzyni3MeNe48T1gr3AyR4bSkSvaFMSnhEE7oyHUDNynSYJMK4KBktvJXkeC659AsoNW419mYXAAGw8TXHYWv",
  "key44": "5cVLwNxj1A3kmNbQYdctN9nsa6zQsXrWPjqoQAymyC4mGkRGg8Gc8uXXgDVm3MicG26zmUEmHWBsFKm4a3Uqki1o"
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
