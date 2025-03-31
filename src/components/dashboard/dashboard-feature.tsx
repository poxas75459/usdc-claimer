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
    "2uJhWn81Uace64rSoUgG62mbv2oRH3Mz1gbdBtXSmPWKwGydDmSZ2Ue8ew2sDKXniKTHqnpWTc74WZRXW5CBFgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwEwv2YdoWATnUzi2cLRY3Xz6d1bgkgwH9NshnSu5Mfv5a2vyjTCkyetHBndQsAp41Rth5c5x3hQEbMsHnQBGJ4",
  "key1": "64BuukXAWGwpSyKpk9JxoiTHp8rMqKUnXPfZWJexN6hMp3gFUrn9PvatBnZ42LWM2igTyoTfuan7xsYELXW8io7Z",
  "key2": "2ErKvzCEnYaEg7iLTS6w3Fgfgpe4TZ2xohgm3gyYj7mHSXXw7psxxRacytdwrgPXS2xKM4yzSTHgA7HYjbnZeRtk",
  "key3": "3t1inK6xPyngbuuGysbyvgvS2RvejCvB7txDGWEhdUihHipmHuLvgtbUDC5Lyj3iBX82zRctC4fLFgCZp497nLZf",
  "key4": "5H8Mjs6HWWaGm1LLrwqfHYoGoLYmBy1szEhBbYxnD7rseMESSJaUmAXsFkdCs7x6FR8q3JXo9zWW3MTdKnwUvehW",
  "key5": "3Qm9WGStfRBgadLoVmzToAiwRHRztYL4qPSMbX1MUqTM861tN7X1ueyRKHJwGdHtphqj2Ddo85AokTb1U4kRSjT3",
  "key6": "2RMxUGhw6HsFuqmeX9WMCXTKSDggsBWSiNBm8nwpmD66DUxNV6MmCHbcbS2PpVVLVmLwxh8tdVQSrnGKdtw36V92",
  "key7": "2YUjA4sf4Yubjb4gqPFwDun8QLWA96jbFEhDcMxtVFdFsjXfNtrrfeFGzwA4ZgfkzMwuYxs1W78c48zVsPmompHd",
  "key8": "5SL5t91aWScXU1ZGyea9zQ9F75Q8YNZ2sN6zGEiq9ejd79d5w2jNbyTC6ZrK9XQixEp4ioFzUho6aF5mVFWMRGww",
  "key9": "31SdozF3gmEcvpVBJdk6aiBzwqwHhUGcak4EgeGanwNRhR4TfZgS7n8p7T8ixxZqR1rUAyPwdJp9tjiXbaw8C3QQ",
  "key10": "4TLbDSQeQwwp4m1H2FXu3r5B8AwebuW7UJuaMoQcxA96FHjDduVi2jPtBHBeVFPE5YPmnuuuph7abCZqBNE3m2tJ",
  "key11": "5Ls42asPLJaya9PGAEUoJPMsLVnBXVjXdgD6bA3GdY5vWwzQ7s4mR34W36Z9JLFTVp5Jb1cfbAqECsKsGUq5DVVS",
  "key12": "4Y1Q6GGZHrQBn1xfPgRTSWYxwxWmWqtFne8QnwroWK4uGJy1GPdddaZPCH4qqPcpdNMKzGwFoW1PXvbnK9S6K58L",
  "key13": "62n6dBUJkjTfnnLTJ6dQ4seuJ966qdsM6F7xKdkBa1YSrtqLhEDG2KXksxbwGD9VhgCHdKXn7V3dGcPeCmMKbDBP",
  "key14": "2UdembiBUrHUn3GXK7aULSVCMZ4mCen8hXhxmefDeGBRA7fZQX3wExvxKnvunGRq1H7hMHCmkuUGQmeafV9QWf4n",
  "key15": "5GfemhfpPwP3UtkkMUcZq37GUmFykpALwHzPUMpgrakyYQsC1GKUHcxvt2aMszC2jEbWZFFTU9uUhY2GJPBGs7Fz",
  "key16": "5BPuDsKHX3Knf2Yyhe2Qr1zdRvJP2RJVa2GKnkuJ3YLPBLyTi5cRkVCCagJf4nSt1foVgg2rQzg3HxcG7UwVe2zy",
  "key17": "2QGK9zZNZWRYV6P9wTKre5E5tsV1XGyCZ2Vvtc1Byajq9sTJFzvCjUtGYUCYy48Q3JRf9hvpitakr5UQzAkn6Hay",
  "key18": "67qy1ZPLvqGY53MDZPXewGfFDdwX6Vd43zHvNND7TdGaBbtrcBnS7XDzhCirkzXtXPEWxj3wTqonMegpEdQiuwcS",
  "key19": "215Hgjy7EueeLvuspwo5PG8aPHre8iz8VKewuF5Q93grXjG3S4SgeX3UsDrVgRGTWg3eAa2P943WWYnA9pt5EUAB",
  "key20": "5GL2vweb1j6q5Wk5ycXHmhU3SoQT4UH3V1G4hWv19ZjggUFWmtSN7dsdAuBentVj1kwdwGc6rFAscEXkn51DreKf",
  "key21": "5V8bxmJ5wNN9pMnoceLYof22sJNGZJZbGN7E6K7BQx8jsT9NZBGXXcaiZMYLbj8JJbiSmTR9BJe2yCTGozQy2Rkt",
  "key22": "2oY9aYjK5yvidKTa5mvJ2pLdfr9pk8TCRUtRyFi1sbg3hrnpgugc3K8CWk4S8pPspe9kqZ4c44DPoiTG2WQF4DFf",
  "key23": "4Hc9SAUGrBL8KaeuxTqJGdLPQm5zgQnXi7hF8mMPnua2aJrsKywEh2o45U7wCMWPrWsw2FRTrMrVJXSozJCURDXs",
  "key24": "3FZCLBqkuYUVSDfigR4M5PAiktaWcYsAX411bp7pkoJFh6aBMpJUFtWXQpHr4vaVyZsbgsHcLP9hLs2UvFyK5jkW",
  "key25": "2nf3hrMALRMCGpejbBbooZoRP5kZmAQrCk25RizeJ2hDsqFCxKL9KyfqVfgTWviBMEV96htD9a1z4ZB9JQerXw6M",
  "key26": "5GCLZkepqDkh52a7EGsaribnT1P8HepRJsbL6hiKgyYSV9bHAC79DSWr7MLnyaZZLdmonq3SaLtecvmNKBZDv5i9",
  "key27": "5KtToeaaJhmifHGQtiemMpzamhVkSAQ13Hz7Fhir8LrFYSRfbW7JJSeXrS7YqD4XAjLiv8JDvutjiJtcpSyf2Tb1",
  "key28": "3kWw7HBKC4MBMBU8Jm1i6XyLdfjzMP6k96dTMMJyFnBxtEi4BgS2JPaFwe12NNN4wA2g36LxTG2C7ucSHA4G5eta",
  "key29": "32urxQmGEUWyznppzS67veiQFhyLiVqd1EfRRAUdqyCwsnX1uhwB1XS3QMxApLATgsEZxPjHVvstcWtBEoS6pM1q",
  "key30": "4bXpYEAbiJYmddfhNTsYKnFeG4tYoVH1cxfy2wfRvJ2fALDWDjYqYtXb4hYmTC5oTcoQqVoPi2TBgG9gUkxbwCFF",
  "key31": "2eVvSdjXqUT2EXeZ2ngt5Kci7ym6uiFPYke3YdLcNRx7KgJdhQZvw7xKbEUJQEpQARejawuYuUChWbxFvWj12vZx",
  "key32": "4PbjhXGWFdWWm34qkzPtwGW42KfmKtTL6nuwqwfbSuSdDEJWHbxeSN3LLm9VQma9CBN8C42GcPogoeuAsV52gBAZ",
  "key33": "5HzT6KsYqGxbfDxvHYzrGhPKgHqsMvqRZC1V5VqJZ3XrwdMw7TvR65rwckzZ5F4sEnh5N3nxMBcaWrviFqn3tgCz",
  "key34": "4Zmo3M1yQKmeduDuAKRWdELYgDfUCwYRNEnLTm19UvkBsGA3hQQqMpfLvswpgud7gcdDAwbERQyrg271SnaNBZ1U",
  "key35": "5u6kZbyqcj2RerrqZDqgBcqiNeM2fDeBsVNXniMBZbqzzEwqjoroBNnE9abgKSQCCGHAdjofD698q8pAnWXCapNh",
  "key36": "3mz2EMPmT4T2VdBS293LZdaJhk75qXEjrhF4sK2FXARdH9bYdffsUn8moHC3ji8xPfMDSSVrFZzkDVEMcDcY4Gj9",
  "key37": "2LdMpEdAEUPrbfQWNTzJF48GDXErN23NYkKZdqBk4UpS6yzyo4J7dZfqSbQiBMcFpAUWKUc1i8GEpWPH7LpuzAau",
  "key38": "5KcxhwS3QasyoZVdThCCBwZTs6Q39njZE1HcFyNJ5NpCbbLFf9kgT5xp1gBiiV7ZoZYjgVetZ7G4Cbj2WqdgqGqZ",
  "key39": "n19vkTHP2qKMexKv3ckeD2u3jy9twEgBGked74ZvdJ3Ubt1EgZfUv5Veu33tYjGGcqAvKHmxQrsnUsayvdsvu3o",
  "key40": "5MghvMQ6fDatKK69WV5havvfFw4gpgNwdc4isBHKDvhW9KK75CmbDWLPeF8HZ6Wt8cf6ACVVYfnMTE3vCnHKUY2t",
  "key41": "CPQkxeDMvAgjstMThUKc6HU78JNjHm7NYETtq8xjYunWwiDEKeez6ZdgBvF66116ZWDwMwjFXPtuJti35zkSUT7",
  "key42": "49sMeDph5Kfa12UyZTvmMm6B7Bc46L8Ze9eWqoBoQst5228s7LGvixDkx7icWhFw5ExtnHYRtkgtqopnD1CNWjdA",
  "key43": "5P61e7mwssXpt9zTbZZw5eyWC5fhqupn3Njb5Dgx3MSrLGGqiwCxSxxX5WmkqvU6Q7E124cK3a15XCi6ZJoaBx4g",
  "key44": "4Y8fG9t7j68KraUF1TXtgvLS1bnPSNjBk1bMPAqJKFderuXXQhwncY6nuSvQoMiWXQXhKNMuEQo9TRDLBcMUnbm4",
  "key45": "2JkDtNqGYKNaEUfFin49fiwoxScULSGN13Ty2gQGZT4xFfBAjbu2KkiBZJhFzC4siXfjUF1NiYyW1s1Ey2XuPvp9",
  "key46": "2t6WBufeGGZimTvJ7ELbAMXc5G7jWz6RkKfKVos4dGLZLTYfywDaAvH3iLe3P5ZMSRinzkSaP5fs6S1PzcNaDrbd"
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
