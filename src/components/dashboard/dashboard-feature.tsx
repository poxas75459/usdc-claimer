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
    "5C2g2HvqjV7vAeT88oCFSpqZTBaUoZsqtLh3KUUUm2gkWyGev1E4wFp1jmpGs2dASCcRSj9iVaqkE678Lg5yAGom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5mJVx1kkGmK29hB4dhFsFMj6oebzrfcYZ57aG4kssccm2iCpdCac1QxT4jKsVkvS7zhPXo7MwQffGeq8UT3Wx8",
  "key1": "C7eaFYwVwK6tJYFWGUjJkxJcFtKmwECLWd3JXDGJF5cVHeKYUG3EkbAAwzanKuV7W68sHc4pQ64u3DrNXNEhPLg",
  "key2": "4LCxdwiAjxu9KN4AgFky2T2muff3xoiDdz17PwnfPqUSJWEKVSkvLdooztcSnh2MJ21yu1rwyYKUxZqJoeGaSV2U",
  "key3": "e4rq5XZcgUwBnKNYvzTJvBWT5G3mzhRFXs8RuTP2jfH4jGfo3yLiSmXP7hwG6axzTW8gi52zBGMR5tKGE7i4BG4",
  "key4": "3YMRkraJUNZeH7bf1cPAf2LJN1UhK33Z7DGpYtq4uxjW9a7ah8YkbvkvWXq9sSPXmEZE5r2g8ZPs6GBjLgCytEac",
  "key5": "ZiDBvfiTYZj4SH1DuKGbBTEZ97VMYCWqGcTK5UkTy27wxUbDa9TbeWnTAhca6UfRSEMca46uxPCD8t5zDf9BWmc",
  "key6": "3b2puhWzcrJx9P7iB8ANbMbHigP64M4p3mnSY16SixrEiYTjegdmqk4Gtv45UmpovrsUssd6c1WcLbu8wQwANm8b",
  "key7": "3HKuwW4NVMn1wt3rnT1aopKsyksYRim4xajzvNMoStvoZJsBjzwoXQotEumk5RwJuehC2gr9v7qDLoxwNCpz3QbT",
  "key8": "2AuX3zUtSVtaaxqPYKQjGpK3em3JFrSfomUiYtZretKqLmhWQJ7EtqHrL9hjLYg6XPiEJyrLkbwMjp4SWJuzLQrr",
  "key9": "2KRfTj1EC1AnhSDe9JkjzCwYP2L8D923F6oRXsfuAVRUpsE45FAxwbKUiv8cH4T2ap4mFD4xe1sxZZQcE9ADaJr9",
  "key10": "67GS8CcjPhuktrdbLe6SmKCCtTAh3d85vfycKAyp8ipctsu8FYGs2YY6f4MXLsSeSGhDZ32djtdvB5tJcR9GdCG5",
  "key11": "54dKPgj6u4WiAE677eHHnWjKpKFJypLKUeFoLPs3yYe7VG5QGV5VZWuANUAPEwMhxpsDvTiDW6ScAJFPmJpr5Xya",
  "key12": "5zAtdjKv9Fs9GiiQDDctNnExxJ9JGvazSJ1GgXzaAe4E4TJyQ7ZsJLrg623q9bAdYkuDKHuqbpFpJ9SsQvnEtinF",
  "key13": "267ugyfk4jNKUv7HVHXoGRQmpVo9fnLBpUVj6RrirAcgJfBkjpCkcFo7a2LTKVFjtCym9BMkFRMvt4yr9kjt8MVe",
  "key14": "5Q4GMfMCgz4Mb3a9GZyUWT1PukbYjKhSyVgGz9xiJW5z9bZby64CYPSt7yMLiQxaaeBoPBgc1RLno5kNjGEcWf8K",
  "key15": "j5T2NJ8ct6fSFeoFNEsXHkyE9WhfqAVD7b1AeJ91hvP9kAntUTVkZYDhTTgSA9jdNWTTukiLP1jApFRWaUX42F4",
  "key16": "36xiGMtHNPk9R24jhoUWyW9DcQ5wKV3DHMAAHkbw4cPAQ65HMfkxUKEMC24BtQTFhF81pzSJvXmM2e6cHge2qxWk",
  "key17": "4a9qcjUhZeychSrsrC53wRfnH8m5UQtNiSJnovnMaEGZokEkVTNgCqMeo6pJQtL5z95nnuHeZmAX2fN2Qst333xy",
  "key18": "4LsFUbA7jbmjDX4xQJ99ox6FUSyDbUESaWMHSuwrFGjPcWNK8b7ALNAXBi8iiGUvQY8TBcgFDnk9YiTricrvBnzC",
  "key19": "53R9u8Rymxsgs7YLpGJxeeukopC4bZnBJQ9ktwHkstCWp3bYqGv2ZgQ3h47agH52r4fJakVysvnm3PPCbKQyMoaR",
  "key20": "2uKF5tS6fkRzGpDxasNv81msRDhH2DdjCgQXhZBaXpK9kCvdHnkdZEZmWzhMaLtkip71iZcm5DoV5VX9FJy1HE1n",
  "key21": "gEjj6GpyTxP3YxHzhZYEtq7UxkAZMv2xzaLSAFTAvLiwLQa8Ur42bWyFLyiHKLCa9hxFhyUgYN1kFTaYCYWwGNs",
  "key22": "5AqYyaHcaWL9E3Seeho6EJ4LXsKcwbDZ3QJRMrD6ujpYzJCLHiasxKbucYatdY9TQXDMZ4sGkMw7poy4YCytiEEF",
  "key23": "4jqt7aBV9DhizsAE3TbaYfoQbAnCTi4B1yft6cYocVnpVQNFbBTuT7rkEA1tXSoy9jjLLzP8fvQ25eQRAMJ1tC7m",
  "key24": "5evQK6xaw3CD6vqArajTcfAZR35rdCNMJFZFQq7q2hZyXYcjQUgnsrk3fCSYgZ9fMeyu7Kgv49TDxx7EdU6H74DE",
  "key25": "m7TSGiBvECToKp8HsvXzDZEw5cR1gruj7MHj6bdDeUaAwq5NPJszrNQnys6bPRZr4c7fZhrnMD378CS7kStHTuJ",
  "key26": "2zeTtgeibs2LXnxEx5BtKigdp2ymmqKNDy98wQRMGBJnbKSdbANJY3Xhe28q9GZBnts32xehU3QFt8pU1s51uRtQ",
  "key27": "2wN9pR5nKjfwWpDUE2AoFvthG2WagGAFr4xT4z5wjh3omfQctzozRQLiRijhHbBEiXUhPa3RxpyqkjBe2z2jJ13C",
  "key28": "4aCiQrTV7oUbYHrUrvv5YtDiub4inPtQNCeNqieMBkD2EE3ytNZ2eFKMmZzMZi5BhrkcEDnxpja3VUr9PZ13Zkqz",
  "key29": "5X56DXmEFPujLWk2Lu9BtPVMLPCZ5iWKMA1i2HkXiQo4469mbHeNYZSyXgjvPJPEzW9YrK9GTHocgVZfEVvoqi9Y",
  "key30": "3CXeBF8RhY2qf77eWDcDWhUsWxeiRyQ7LYsymvJXBy5fgLYzpZRQdUmq1kuk1xq22dXgzDgFThp1Ln6RCQ81FJqn",
  "key31": "455b9b2TR6XHXmaZzJ1gYEcvp4q3hsGJw1JEQ9BAD9YR74LnKpF9MofxR7S2opPeDJTFnm3xGVTNeCiWCHSyVN8G",
  "key32": "5zaE2bLsoQ1vziydzrKiaoNhnyndr4nUJenQgpDntupC4xJHpBKWb5jXUoV3huZGQ794E6zCARWDuixZsxT3csjv",
  "key33": "6Nv1apdohyjJ9YY7fEBhUezNE8KUYh1RCGxTjPdzPZzhKNciTZwHDLaWrVLydFDAJWHq95i8dBFWohjeYQsWPXy",
  "key34": "5wZxJ95AuycGyoAM2WeKBAgEdR1NzScTwnC9F2tutDEVt2j73CbdfJVaE9QvPjCmAjNVNkXtJHrsPZW1VzUEHcYD",
  "key35": "3DfW1qJCz9hQzeBw2y4c1k7XNWPkpsBoXVPrFBgGakA5k87pvh85UeCcL7sytCdBdk7Jwvj8FWDhDofAgwp8roxU",
  "key36": "3ukDjcLt9Azpd6tVFYAYqE7dGVi29ZLsSZYWeHK634ShWye8YjNVayk9qvgMYVxsRcpqXQ6HvK4knoS5eEKwmT8M",
  "key37": "X6K9UBykHNHc9JJMbQG6FoeTUycrT4Gn1cYDTqCKCXGDPyZ6Bc15YGhEk6Cru6P2GxF5NYt7Ltc345tRBnTLHh6",
  "key38": "2QwW7EQacQ1e98bCXiwFkfygPDhTd4uYvpKGxFMF3zoMCHGZNaEwVtpaoHiVh5GhCmR4mmgpu3suKFpQVMxfP5qj",
  "key39": "3e6aqk7PHJnUQaHgaLhgZMJkT8YWbRCctvEwct5c9YVVvg6SmihhMhPuJTdZ36zp9oSoPyiXMxqWD25d6sHciTuk",
  "key40": "4c5h4MmWarSLbynsUcrLXmBTpRK4rZVV1D66X3X1BVrtCguH71svoC5eXFZG8pQkUPFQnNgYBSCkCphnW8ZKzX9q",
  "key41": "47L9tfwJ26ceJq6KX2rg9pABnaGuQjCtDejbdsN4CUuvwxcjBXBeCkXVmPDSpTXMz4SzxYkq3Md6pCbgFaSLUmea",
  "key42": "AhWHSXKL5jPd43aR2QEq1xexnc3FABXAP8bP4WTwUkLTZ9GYV51qMuZYuebPQnCHeKPNrxkxPQERLgBRLutBMed",
  "key43": "4NacrAS8RQxqMK9BVvHRVeHeAjNJnG1gzQnNjZBKjs5ZMC47XgLvNg46DyKJA3u1VrC8duJ8SJGkDkYewnmERasq",
  "key44": "5XK1uxUwynw7McHJLBuBBNSgaSuk5zTSXk3R1VsyA67NcNEL2hjPH3Bfn9aRgcYyKK6KUDTEm4hmFiSucdvbULTd",
  "key45": "3trGUd2bmhYwKUbqrrvsSbNvRGGgnyXZ5PDn3T6y2bzaJXhkgSDXApFRpf8VwHVDMCjCma6hLqTLfAgiFKm6iHGJ",
  "key46": "YqHaAAvTB8bmBnX3Uk9R9fbDVS7ipUGPsftgSwDdc5U6Q53Zwf3HRPH43GEsr61YoY2vECxpLV1V94XPqSNr32H",
  "key47": "3iZTDyCsKPnkrLjM9mKJVYEHL6KVZsiHwihW4V8vgAbJqudayndMda8DypZhN93qWnbhqZDXrgrkXApsSpChLLxg",
  "key48": "1s5S3w42mnnFfhEHFQaoWbDKJMctfaJ1hXyDYSXR1sJFeGDrCzoDS5zvk4z3vVDQQcRqAwj666Ckr5UhpWmoKDK"
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
