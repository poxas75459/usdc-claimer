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
    "gcSXKXp2B8EmDhovA8ZZoP45VgcQ5rLXk9iWdo3uYkJx8ak3pHkeu3est3WojZAHMSDZRSpdbypW9e7XzbwawXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPGMtNUJCMi1PkkBzFoV6tDJZBcGnRLGdYqnjfX3deRTRinbeuDCEn9f8dV2q7hhSNK4iP3J5XZt9SDHuVJTy5H",
  "key1": "3FKe6ydzrZqUFhPuPxZe9dYkhrRKCHMAi8wPPp3rqdMr2AiYmFimQEtqaQz5ey2YoLPNiUrnop9YxxL5Q8AVZxL6",
  "key2": "5oFAu4nik1dTxTUe41ksHUiSeAevHTAH1jmPVpxQAJLcHShaU6Wv4ppmbDFVhJHJCLpwNuE8acMxLsC93oeGK1KX",
  "key3": "5G9KsugnneevXgQqGVFVNL1ZJ6xocmc1Ey1DZgwU2h7M18vAuwc1vyQX6uo2Jav5f75Kn4P71fe3RFscE9rXuYCw",
  "key4": "4WQ1Z8WvP2c1fd6MFFmEnwdGohMCVfX9ytApRy4Y8JDN2avWBYJ3z7e3oDAgwBmS97XNHnwg9pLd3FwqshiztJev",
  "key5": "fupREmEdciwRUxXX3X3hH6j9tqT2MMULtUQHZSiXi3eo4HrMP5Y2iuVni4NRNyNzyMsYU1mjiuqgncwKhiDeMss",
  "key6": "32f7RxsKX3Bu74XSohMXDykBqpL2YQKu3NeZh7T7HT5aMcUKtf2nzpAGioL3tagw5kUkq77BNMA1yCj1END1VLsk",
  "key7": "2x5QQRQsd8TECZp1Zwak9F5Yruqh8dtGypsEHtfneWS6qDLmxuNznXZAMh5nEQAW34S5TxDWpa3W7kUUw5X2TWLU",
  "key8": "3sGzqUQccRZpvVoMEKYZDhiaQkD71KDBXFy5e9T2jsjjmh2Bf3z6m8jLPHPsRTPATuEJfRyKbmBEWgbMcCNhp1KL",
  "key9": "5om6gkGxjBjCHPrnnf9bLM2DJUzSf59aJz3cPD5tcew5ayZTG7ApciVzcbxVK8LFjjwEaorHPPKYhHyYR3uQ5xJU",
  "key10": "598KBnhXHtZvLeGfp2fe482i8N3E4V7iH6TMXmA12JP5LgZqvLFzDWRXzthpYSo3YP1je79fMxFJfGk4wpKTbKAy",
  "key11": "3EP9iERdsC5XbED1aMLc9g4k7YmNPdQ3jsHE4fgHbn3zzfKSKMg4rLgmRGKEiP6CJKh4K6ZuVV5GJL4mR3NasJNp",
  "key12": "2Z9Gpz8XZfkg85Es2o5LeMC7dRrG1QeaEpRPQQM1Tf5aktyYpccpEFvzUBNz4GuhGVBpMb6bW8cDWXvmjhrW2vW5",
  "key13": "xLmGgTGkPTjeQnHeLaqv4z6UmBiQ1CzJMintgK9EAm4gxJEbq9kkc1yAgLA75DcBdkfV6nhE7oD9kPkWSiP7qQU",
  "key14": "cABxs9nPpqUw4xv8cDLz3XqqDgdo1s5n7hMCsL1TD7NKNqMAHk3cy4QxKHKrLxWxJWMPVzYJQherKybZ2fVJfjL",
  "key15": "4bkSjrLoqtrUyvV2NgUQqqmRCiVAo1dGiVkAhZA1zXUhEhu1ZYMBM4g7TUQxHsWsTXHgA8LwKzg8vNwhdMKAjT65",
  "key16": "4eL5N8NcxT1zAK6Nzb3yeT9SxXCgrHc9FDHh1yhuKxPwGRbDPEopzsyzWNLNCNea2Xem6Djtfi8rpFefC5UUiQwV",
  "key17": "31xN1YeZhwiovuGKivsP7HDsvE4nYbY7SH6CbvT3uAHAb5mYDBPC2aLqW4u2XbVKwFQQ33ym2wKKEq2ogRWksgEe",
  "key18": "4vj4HuzLJruGzdbEbCpajXtP1o3FCjAZ6Lj1bFicEeWfVfQ5qcWebXbJaGgD8G14qiHjHhoA6pU3Aa9WS1xVRsUX",
  "key19": "5a9ggYC6F1HrkkT5JRarCNnr85Zd9cdBgVWQh6JnBifM54fkzbk24GC2K7YgvpfU9YpAxmusJqf3qAHZWFspkhUq",
  "key20": "22ZjLAddm9J99j8HVU2J24Afh8yG3aa72K47LcRqkZnkRKY1fLtQcnpCeNqxwWbHYM1S8SHGGuATF87AAHUXRT8s",
  "key21": "3Qb2udLs8JQAMJoRB9uKc9J1ZMdbqSRVSRPonoQrZ6toGDvU9Y55N6PyV1XJGBBG79XjFGjYc4kU2xHJhL3zX8rM",
  "key22": "5HtEcNJyh8Fxij7so8uXLgWB8mhGUhntSB1vXD4FhJiKV6jxD7J772p1NRHDeJwneGsfD5v9DDtb1MKADGVff4dg",
  "key23": "33UppjwmkUK3hB6hu9tZhNuEJj5wvyuTzYnWTVxxZ9WyqfBR4NY2uVaVmJB5CrvnKcnPBzSTPRTiZfsqG8BxST3a",
  "key24": "3ZuA3R2vfN4zcfntjPe4UevGS665HZKu6GodGSMropBSXAitwCgCZhDuQnK2yCsA3eo3PA1bVYg1JzHJhFRtkqug",
  "key25": "5ofvv9edgLScsfHFCVPQkvJzpGEYtBFSuGsJSBXE99Fq2qAiwF472dcUNhYachQZtgKYhxX3cEY4tvFsz6rVqvJ4",
  "key26": "27sHCDfWVrSGejebH8UoPSw1RTJ3bzuRdKJqK6aAfsqLEfAFYnbSfK1QQ68hvCiePnPdbPohB8Hw9bemJT3wKzZT",
  "key27": "4vcx7A1GmiQmabN1pXkUstEG4hNAt7kQH6Nah7s394fcvEN4KiEf9xVbXEY1RxN8DkdaRgj72FcZVYQGWKpxCGgs",
  "key28": "2G2w6hhWzUJ5twe9dEY8qiDQVDKFhWrFY5uGxRfptqfs44uLquj99MM3yiSi2PKjhtaTnWzE9MgsoU8Fw6UX37gG",
  "key29": "3d1QiaKBgdRLYjE91AdhHAc4brhRoScy86ygKkc1GLRVwmcGvNwJ1mKrfXEB2TTfowsZY18UFXA4EeEJ3yVsqLpZ",
  "key30": "4QJV7pS1P93y84NSFFE3Qh6XCd2DSMAqVwtR4rMUwuUCKuWbUwrLTTnH9hXW65sJkxKdjvMKxDPsw97rygmKewaf",
  "key31": "5uyTdQqNvmQY14vp3YQqu3d67dRa8nDDxVKUZWvxBUYZm5zqLgoV896LgRuWABe3rqskxjbZg3c52xxHaVUPdBT5",
  "key32": "4SH32iGsBTxrDegrVw7rbteYKn4J8oCQ7eXcJwxQzFNrPwVGFJidFb5fNG6cafVrMTYbzgiohDnfvksDL9CE1rAp",
  "key33": "2GC917j7anwu3u1aRhdTxMzrs2GwsiuXgNgmAnYB4sXstY5fCenaRjZo7D2h8qj8ZucsEjAph9fdHsSVgJhi7ap6",
  "key34": "5AYrUrCNMiUdBPWMQUfskFtiQ4Ny8VUuonZTP3gmRa52DVjDpdLNLsmu6EwA8GfzPgy26Kxep1BEs8tNvPfauskY",
  "key35": "2Wv1vaehhwEnNyMDdkQDCLGgvPyekq5KX9oKKGSo5KJ94BF6QiDvs22Jwg72XxpHSPuNo32Yy3CedYQ3ZxkweVZ8",
  "key36": "2Lt2fUvy5WTJWv1uQHSHviF3PQhDG5VYGS8aWha73zaH8PkysZkwTxfWVMiuhLpYQM4QsSVsHVwd1DzL1gSvFAfL",
  "key37": "3ywAsD4bDndNeiyWoaa8V9AZNPuuDABifxQX2QJ7NdsTim6ybfRP4PGWVwy5WV31cNeCMK8uZu6xWNLPzy35TjrQ",
  "key38": "4CpZd81t2ysEezn6vw2iM8VE2jVu5WkE3CN1iGoQRZYVsJwLikU12HCx1HtVPiqWr4yDHnz9wqF4sTnUKHx4Vapj",
  "key39": "5dWo8zb3b4YVU8dMsC9oAQrVien4eWkqigaUK4A58aiC3o5UnjAQfD81ZZyjPyZDDvNuyjV5Xsskxhr1NPTScVH7",
  "key40": "2Yk6NGuBg5Fyo73hwsv8TwfqB1hM78F92KBAh3epVj2fEiMBWNC9vEDFtmakkJoryf9mVsvbah56VWoyiqu1mSbs",
  "key41": "5jBNZZvqt8n2U7TQf8dpv4YkdjJSRermUNAx2t2g7Xu7SHvb5kUrCDy18HFZVQ1qDVZgU6g4awkmwAG4Z6e5wkiY",
  "key42": "2y7jnV8E8RekMvmJXjRSbVAyQGERSo4auY7Lozg3GpfvDcZDJDbtH64k5QKDvWHEw2ngG2GDsbLVnLyPdynoh5Y",
  "key43": "4zKhpUSnveHgtiKYRpeSRTUCECoBKp6DGq4H9qUq6dv7w3YtZgckZ1j1B5e2Md7LvSJkzVVTZ44vzM3Bg1E3wwvT",
  "key44": "xqgdr4y2ZxeZvrKHQ9bp4jTrEP1hkSmpka4EjNAfRLGmzMADEkTnSEp42gvrB6ZLTddhfen6ENERMDez9HCeaz8",
  "key45": "26eqPBPQqKXmus9UEq4meMzmiDVdayENvLnxA68Euw86s7vUz5bxwnL9sBr5vtCWZf5AvHGiNkwoHC6Nim3Ktp5F",
  "key46": "4HZqVqe43CBVGVSKcjUAiUMmqQvhFrLziAQ5r4DqeFtpfDGs4fiaEMmnbpRZG7Z17XrAEhmcckronDTrncDa6rW9",
  "key47": "56AcPfhPUQRQRnQp8A43wVxm4Kn3ptaE3eewKsACr8ep7FQG12WNuiShciadANY4nit8MKHHWtVs5C7HY8fj8fv8"
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
