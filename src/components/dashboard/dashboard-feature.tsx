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
    "2d4tHB4bYs3y1m7vHjNRiutir37zhuqpCwcaz4zVu9AP7xAzpbBQmuZjwsiy3zT6qLjpC3efXdDzcSV2ddQGiTky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbqEMiPxbEour8stQxq23UgwWEt3ohK9Ssw62pgHpCyNXkfpYGNnMyKQtZyNEETcXRoP8dvqSuozT2PMacWAN6q",
  "key1": "32o8QtgjRqhQ53jKeHSHwLVMY4HgPA3X7KzmNTpJGANUeyYwEFAA6hrZmYVipXcWTz6NL1phFqNHQoRGrfHAYzFN",
  "key2": "4N29Ghqv4CAiRS8mBFjM4fNWZyNFRPvzFesnZBZoKJeKUWH9KkiCea9V6rvbPu5n8r6YiCW7EonWojgEN58Bny3r",
  "key3": "2Af7DYBQ6KmJQVEQhaEccheDjwTNXZEcwyQA7Ejprz6K3kepxrvCR2UorySa1JosbWH79SRuBD6Pu1SEnVVUxv38",
  "key4": "3DX7mkCUCf6WnbqqeWN6MkGw87KeUXjCEeQfWL8nGMysvPgURzQ7ZHYXubDEAxGgYFz9z23vmAK5X6cPJ5iSgrH1",
  "key5": "Q76DxX1aP64aB9M1VMr7fEoCS2BtoxYvGei87R3rhgnra414AsGRPcxmKt5zAxqF1eXcm7VbCVWG99qQCreSqw8",
  "key6": "22ohMyqUyKc2ARFZV933A584tzLQSKr2yySGNM7UGGwomaKtzb86bcbeTaJCZobiiC59yYY42V382jDU1QroFB87",
  "key7": "3ZASt129xkU4eg7KBPZip9qg5fCVVQzs2ghBuhKhgvnj3Ejggv4mZNeBUTvRgNF1gXZEYgkYBtyWsHvsaS9NAJmQ",
  "key8": "AYMcynn4EZgqYFgtjvKTEoRmDf1AYsQ5afP7onY4iUVGDHCU4nAHFPeCDnXr5ULi3HxUg6C6YAhXkps28pe6HS6",
  "key9": "4DaTGQnM5SDU5KWDNHxYUcbjqRxG9gTvt47nGAAT68hruXDYmLRoR8WU3AF8K8dFoPhzpeZFCTUHGaXNvfPbn2jX",
  "key10": "5h2Wzm3HFb2nkRXiuqE9q4Nk8YqbQap4BMTcJX5e5EPH6GUnKrgRrdgEb8vb2Tt284eQUtCU57uKg1cVaER2R2j1",
  "key11": "3P5xNvM3FHpoksqmUfZVBx8fRaRyKWYtVmpCcCbqk8qa8Nw6d6b48uJXmsSLW67mUiyteZNF3s6LirXvskBeVBjb",
  "key12": "47XbtKEMF9HRCJsd6eCtbuBod5CftV2jBbvVXFtYvzRmGFSF3sWvMYsJxYcexYYQpwdta3kHh7K1v26dGfZCojqF",
  "key13": "2rV9n2gzAULputiCUakMifcgpuKUjAiWNQeD18W3U3GHKJFy3WzLLmcbo3N45L41czJ5pxfRe6Hr3W63nhfDJ49g",
  "key14": "ovGDqThgxS8oB3tucPJc4KQin28zT9hjNohCkcHse3RjZGv6PpvByHch9NahjyYFvH5aSEc8JHcg1Jg4AkGYWJB",
  "key15": "B7gm92vwJiRkNrsAW7VMaqT9zmrgs7XTNUcyHq5uAprZLsjoBLvrMQc21LMRNd56tY17vgdjo1ySfjfXbcSxYcA",
  "key16": "5HsandkaVbWdgPUDxbvtsdpYSWADiDYcHrBseTuvgyiEAFd7GsAFCy4wtmbFkqZyHt389bo92tA7gTzgSV82Ndeh",
  "key17": "3buPjMx76qoyAAZ5BrJUT79A5JKMJLjDEpRArg36jfDQC2HUmY38NCP8MGL1PL4Nscmz6hUuyBsoWxzxCMKFDxzm",
  "key18": "5hUHsK2YoX8tWbjjzvjq5qyz5vr7ybqu7DXb56zqTTXSt3cGabQ2D9v72obQXa1vnvMWZFMU2eNcdRneBgukR53Y",
  "key19": "5Y9315s674dWGhGbHe5TCNkRUEGevC4sYEv75PbW5Kp52FwBuRWBRzwfJkmoj8VM5urPLXPoGXgr6f5GsPcuDEqd",
  "key20": "55V7vLrQPrLjFuJYzEgMqN1qajGzGPKTSAeCVT3hkSCBkiPb3wL9MpytYMVYAKxbbXBhPgRV6LyUaybnrDtSRGYA",
  "key21": "mbiCKi5M4RCvQa8Lqq6y8oEB7tEgchZbHWFxN8mBXj2nYSK5X5LKfi1xKSGRSbEG3jis3eFURdAHsPhcypD4RYV",
  "key22": "2D1G2VJutCM6GdGboTXEcMjtLbZ7wJLhinpGGwj9S2SmfDRFatpqkFtmMBa63tZdtBkr47A194vYeGCHVUWMcivu",
  "key23": "5Lyd76J5gFX6fqEoR179kQEMK8MTiCXjHPYSemBWhsWvEjXKFLkAAK5tj8LjxEt4GXrgNWDs5yc1pQZJnbRgtSr",
  "key24": "5ZWaENz4yQtJsv21Qe9K35UU3xhi2XKpQvJdEyjboe4GU3ABsovmKVhzNW6HZ9X7czWF8oHVPLttoWsus659XwfS",
  "key25": "3hwmSiqpGoV1cugSVRtW4BXjRM41a7vWyszosnBdhD14eefB759qUqooET76oepaL8qnuwYQt1hDqPF1jScrBjF6",
  "key26": "C5rwAhzmL6dZ3Z1kSeSXFkK4UWwN4iQ2k14yomEqrBhPbZ2zUY8zAYxyAy2MUAFwzcv5h8VLGePpC7AHgoU47fe",
  "key27": "5mPDid3VLpAwj5BYNVpAoUDNJiVHuucPyr4rfJuicSZThB1p9PGVSNmW9Cr15XScV9YF9R3DE9uoMQTYaNamhtg",
  "key28": "5nc7nYJuFMeGNhCruRtHK6UhdobTXS1wA2GHXWNMtGxpx4M7wzWT38MsoJe4x3p6f75SZRxrZsWJD2yYb1aHe9K9",
  "key29": "3iyu21a1du7VLfgwxoqmCMshXxTEeuE8JAT4aZpYZJa2w2wQoVrrq4h3pyHtTcgUCRZMYnRGMdjmeGfzESFdLfU8",
  "key30": "5n4UNvoU2wXJu83smENSZ7piG1jJWKsyB1m7r3KJCKmbmCxtD3tE5Ye7HGjbHAH8SnJ6Dxm6c4nSy56cg51XwBdb",
  "key31": "5bmvhoG7QiHSrHWLzqteG6K1szmc8TXH6MZWqgxtU6AZPbfd5SQ4BCvEEZrdg5KH1dgqHnnkEW5aoVjauhyRFj26",
  "key32": "31oQ3AZBovgaMz4mQnY63zjisCPKVWEX37HmnXaPbg1NVzFSodtSHMYEyserQKTrjj1b5wpZ2fqUCyjUeK6cbmd5",
  "key33": "58XYbECB8aVH5ZXXeADhPzBbTX2fNbsyQqQ7BKX44N3BsF2qBe9DgyrpRPcoKG9SrHgaG5zRXYwrnFT8EForDQ5T",
  "key34": "434F2aG7nWiGyH6UAzkmNtwJ3co2j4SJ8m9b7ZGTk24bBVS3LBrWm63Jg3cNyw5GYqBS1RdDWq9gwXeeVYGQa378",
  "key35": "3mbKvG6KF7EkpoBNHAKSEUAany4nQjrYCjpKTcjyjwSXKowarYfGNUq5cc19NYf9FEhqAyu4xZabyLBxTMrRYepz",
  "key36": "3Hx19mGAhVQySa47TBgzRWrWCxSxf4WmUv8v6YHZSAAvPhCGyjCWAYRY7kFZ2BgEUBycrcU1oSxMvNBReqopL8Vm",
  "key37": "4QRJKYy2wD75Wb3ZKwGnz59vNwYPHXD8gAhLSiwUysEhXkM8wgMNHa59AYWsZCyRYKberBt8ZQBcD1ddnAJQ9Ash",
  "key38": "3pThaAJ2FMakAcUqX8QXeiKNvBMMc7smBShhnbTRzQmxfr2Ax5HCj3rhw5vk4n7K2t7rr1WSLF88hjoj11mQwXaP",
  "key39": "5Y4j5466evV858rWnSXZu3nBYXToUgUP9jC38Thvi6c2mdE8ZED9vALcefGAmvuDTLvZuABt53PojJfvuUdAU3S5",
  "key40": "3AcdNWELYQkd6qPp5tC8c8WeKvrv7CMUFjwFhk9eN3J1YvL2Zw6j7z6vBbP5ayfooPVB3955H9nnKw1WBpKCqoN9",
  "key41": "2JYAS7AZs3DGphbPR5xxia81gacaAhUunwkmBdVA7eozvj1WBnGiDHAJ1QJRHeKzoDY4nBSGbtPtiF8Asx9TBtx5",
  "key42": "5sxQBcGZFMd7U6q4xZtPNKwLjEh1YJwXJePszyiSSU51ShtFb8taCABxbdkiBbmaQJc8LpZHmtD9s75ZyzRD1uH8",
  "key43": "5bVYa8NtYAsnBLJPC9ZXhFeDz8KuX6H2R5TbWQtYUJEKgw9uiK95UsRur3srg4uHg2JiE3enxBeXaFHiLL1neywC",
  "key44": "2FXVvEufyaK4rEsg84ChuFy29KbfMWEysQTu11SoNGpvVyE1xhxUwZFnmGKHmxX618FnmYVz6toLs6g6LJKMuJxh",
  "key45": "61g54fvym5rBp8kWzkMgptXDt5ZhCyQw9vmHohxWVLpeXACeRBPZ26GzxoZhm3EQKZHvy6GDPrQtRckbmrMWb3b9",
  "key46": "w2jyaeNWoHGdZNrm17Fv1R8UxPUZDxTvVXa1orgxtQDbyCjqLLEBzn7yhuyrvWjiG9ALE3hsysh1Lz66ENBcjgE",
  "key47": "3cUW7n5EZvRSXrGQbzD6pkqbe6UNsQXhVa1vqWu5GW2Q4dafwYNifcLVK5imsxK5neEVCQwyfh1H88yBfvssb2xi",
  "key48": "2ozXUpfAXa2x87ngxx4ycJt61LrHjHj8Zscts23VZEDN423fuuu2AyFd1km5LSX7bqgAM33q8SG41ZEmwbojR25L"
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
