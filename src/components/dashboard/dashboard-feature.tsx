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
    "5Eh2txGLk7T2FwRefogX5YoSKuHnvjRhtPLm5MNymPoN2nEzcPn9cWMADT9vDgELrjpB2X8gHpHembxyWqqerkRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48s6k7b8deajqnvyny2LCDbhf1ti14X9E619UCL2MLzLszKSftmeKHHC9BnV7AmKhgvx9pguBzwAubenYQNUQ9Vz",
  "key1": "cwh571cn3uzdNamqoAdowBwATV7Azw9jebWkuhsRswBbafrLUpCrRM8emD5sf58axb6haCAoxhRgaKP7Sy5M8qo",
  "key2": "3hhhereurvgzu4zBYvTEv1451iYyRPZamrZSBiMioDGMNXANumB539vx6C4dkT7vc1MR8Lj5JZBrtggHnS47zWiU",
  "key3": "dHN9ZoxUfdVd6tS9PEkV29WogxL6SaYWRnNpEkY6XTzA7qXyw3YnkXuGcUUJowwKqTmREzU3BhZKxM4sZsxrZAp",
  "key4": "3kTiFmGscjYvugNfUszL3hBfRmFps2wqkTJ7fp5eniMeG7tKKqq19D21vHqeE5x8Tb9GQ2nNYPNTKmgivTiAssTi",
  "key5": "CAVYDHhFg6u6Mb1WmDgMRAxE6nQrwpJo9MmAGG8gRkZwrSN6A8qnm9mbFxuCLbjbHFKpJD1SPpMcBnMHocjF5oT",
  "key6": "3vrAXt8RN2Wm8PqWRV2bhdZWbrKdwL4u6FwhGmpyUBLRemmqt1AGK7gDnCNQaQpJ1rdyHoRUESooxP2sBeAdoKpg",
  "key7": "2ap5Ea1oAn3wb9WbqfPzGHyFVDwBo1P5aWQKsrDhDBeDD4U215CMSFFnkP2DWs1fEXc73PCvRg6kRoTrD4JxjrLM",
  "key8": "TyFSzB8nY7b1oaZeU8jeH2LJCe7xFGF9K4gghGyM1J6iG4yPXyMYw9SSi5xAWZ6iPne4V9pbsxrtNFqzCY3Fjhs",
  "key9": "TGXxgTG8EX4RNtpzWU2B25tmurjbs1ZzoFM3B3MhugXWTJR7fuMq7SwDnUyQ2DSKiznktffDce4yuFjCsGFLu6A",
  "key10": "PJLgjPTLKKQ45wLPogaJ5Fxr7YuXjWfdH8fJ6iYWRpWTvnog9wdUpU4aWjCMB1GR4Be8Su144kwyj86ZUV32LdT",
  "key11": "59QepWnDDHx7orLkNdaZzkCETdwMyzMPMr5w5m4YdNGzS54K9vyiMciHHoVRQLAFQ56eQidWYoPqzujsPwG1BKdU",
  "key12": "3zodsGoEnFLNUHeZF17W1NzvgfwSFbacKZMrAAAYAPTKApmZabiXHZ1JohtF5EWqJTygJHggn3q32spL6LXTyuK1",
  "key13": "4r3ZZLJFzBrb9nFqdRwJ1UnjDCxBg89E32FamfhPSmwE6fwymqinMhhSX4PDvJXqqWCmqVVGYhjRiZvRLVBcUJ7q",
  "key14": "3PAa696HtTbNbbX1nHa8LUV7uvWCJZw2hyfVt2NUfqLfAXGhgFWnETgGEoQ7YTGUyZrZsoNXHNGGSBAUwf6kDqvT",
  "key15": "5LcfTjJXx4P6t3d738YHxN9GXRiKAjRLBFNfaarXRHPucfp2btf17DDizEhNVZc2duHT8KM1YGdyjiR1aBN4GWKy",
  "key16": "Qc4kWmeUjszgkRjDEgEC1mo4UprRrhUb5KcnTGyjyGeQCR8pQES4dRbMMm8myZmxShaEnYwuYM3v669DL7Dd493",
  "key17": "2RpnZUDAMEZsAF5hbXEzLvTwZhcVhUUviQmoCRcVQUGHZfuUHYKhPSh9nVDXqjotGX2qNraUv4tQb74nbNFowvaU",
  "key18": "2RjMx7anNM1Daf4eC4N6saAuUwym4K48JkHEU2chprNVTiiBb8wVbai7Dipu1umhBJrbEZmazhB54wsiwvqezHc2",
  "key19": "5nd6jv6r7erzj9okkKrMxHRa8iMtrqCoDNYTB6NHiUkWh8YxjZJcBP89A19q67sgK179rzdULuvRjEM27URGcpTE",
  "key20": "3rjNFbp7joLDwkHFvs5cavTJ6abAemwbqwdvxwJgYTkWy69rK67GQg7uhoxLBpY428mgyXVijr93jk1T688DsqVX",
  "key21": "4jdfymwoyqntFJwhQj54igtiRREQoLUUzBq52a9zaUmTyhY4WGSNwyW2ysb9CxH2MbRQvDV6zfJMUcCtBh2aBGLS",
  "key22": "3uq6ZfPvU4Hm5o5YvErNAvnsjCC4K2pMq7ognmqtBZxAEHEKyd18xXabKxSTU2UH5NjX7kikMNUBzaFnkNDPEm1h",
  "key23": "a6LKWp8cyfKEP65hA7K9WXP51u3f81TUR7c3iWSpcumPbcdG7K4maphazaBx51dFCdxyewxSUTdeCfYg3e9AMjB",
  "key24": "4sVfcBBP1SqApv9g1FusVqXADwzX4yRyYqnMssvE9i2ot4RRMYmZsJTRZddudY1dfW4nP7Gc6zMVmNeP9aWMJs2Q",
  "key25": "54BJJ3ALEcLhE5zRWgGbwE7ZSfiZRXfTKekdnsUZqiht2KWcNvju6P5WshvyUtUeuYfwgz1mThBaffEpjavebMyr",
  "key26": "4JypLctQGBXy95PuKYwKNQSEcHWkyAK6KCEiTUeKM3Nf5UyHzLYvL6zENfBn7zTumzWdbJhZFHe7pwwjAukCYf7b",
  "key27": "4Aub6iZMQPgcBNj5yQXBq8mTiKfTHQ2f54ixmiSfZTDPGzi79AUa9KZovkPpx63uxt2uZpsQtvFgM6Vtd2XhUUow",
  "key28": "2ZKiKgQFkX7bMLAT2dnyD8U7YnSHcmysaQ83wKDTQgQ1grzs38tWqUwiFRWBW8YGHaHkTocBYXSCEJXakNaAqSHP",
  "key29": "2anyjntiABy7Yu4PovvguoVJNDv2RVAd7iFwyVre7dc8m6xoqG8bc41mkHKu1mbhV66HbooNDQNdKE49chzewQgk",
  "key30": "2gutAXz1VrcU7xZYdrQ7Pai7wc7JHnobQyD6pzbGuKUyz9duWoW3qGYKNq1fvGiv4Gyp81H62iVhZgKBmz7yxsjM",
  "key31": "3VeTKwH4z277Y2PrAHD6ZyCb8vSDFc76Jgu6KWxcAcArxhotzo8axtEtFdsdDTc8tik7aocnQwQEZdCz2DfBsb4H",
  "key32": "5vJhrVBzeMbdJLCLuVppD6NmfuFE18N9FcqH5mt2ZtDdg9BjmQT33sxckrHkiqnB3WKNjaFgdv4iJWFvV36viLnX",
  "key33": "4uJVvQCgqxzKMKKqwMo2ipac2EFpyo3syXDpKu7LGPzzocqCKUERMYqn1yGoW2A6JyumBATgXFzMPzXitUpsRxMU",
  "key34": "3buA5q2feL2jUCJQrWm51Sk76uBHeDtua3mWWAccWVGfmw7W6t3Ez7heGWi3UuERX6DDABcpZJqkBMAjXnAJtr2J",
  "key35": "ERHH5v1RzWDhhiJdmin5skHzTeoRz2LzDHFmCsxD8fiwQUtfxVaPmr87JXTf9GbdJCwgZqAwbn8gQRW5QxmjqzC",
  "key36": "2ZzGxwYCZKbhNuXfJkGAdU58hah9DZyLKetkMuktGyrHiEKpxW2Giyc9nxbhgSM5L9iVjR5unrcjDhkVPSXrDotx",
  "key37": "2Cs35aT24nosavrWXruqALd6UgVrNcR6peZDTG4oLqYQUZzcvcgK5PKidgStLmD1xVRWk5DjhaFNAC42JtYH1s2y",
  "key38": "3z3GVR2dfhxYGvNi9w4DrGeWSuRMPV5f3kC82U1p2YYJAvJWvcr4jN5usJLeXAggjruyMGKh4uiW5LjV6mxM7d48",
  "key39": "2nJTxo8fCabeCTfC1ffWc99BWX945xNGGC618YJ9mXqZ7q1FVBMBYP7Mo9uKiTcjuPLM3yFurvGGEjNUcokfLaJF",
  "key40": "Q9CWFtgaUyuxZ7M7iQh6HDtph7PBSb7wWuFfKYBtXULcdNG3zHM2JbiBVWiACpGzbzwyHR6hSHVbSfb58JFwyKL",
  "key41": "GmM7gKPBfQPoLMV4Rd1PQxETxmpkaQVGQPLyXQX29SgJ6T1vK6JSeHeYdbjUsB1MNujYMnqPgypNGHUq7gWLAGA",
  "key42": "HXyaMjVCjcAezmfSeCixCeQB3RBTUDWmuiJpHJgka21miKyjnJU9o8iQ4Q8vggndtkqWkXha9W4FSRkqQ3DuawB",
  "key43": "5Rwnh5mqZTwdbKQLCL1MmTUJMGptUFTvrwKnBsSUjF7EuMoyDES4UsxY1DLRp7iLgndVrXVGs6McWN4DyByP4ssc",
  "key44": "47MPiNutnV5uRr9AvdBy3L1qQCZeim26RjUV5zHQQX5CzWJmuWmfgwQfRrXmZp4ZZFqdHgJ3i7DJ4pVH4dLkFirQ",
  "key45": "5oBgrDzvTJfpjdo2m9wAVZ55Uft2HQPg7V3SxM7ny8zm4ZCsxdnxcaKk2ThyfSaetLRMAgN2WnSFVCJLRqSuMFCu"
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
