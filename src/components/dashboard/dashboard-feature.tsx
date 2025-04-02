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
    "4pe35TEAaouRues1NMuZoLiQPPb7xp1ZSsPr3m7kExqMdzqP7xvNjMhH7z3vMWQUEJQcfi86TydFER4LgHWWd4L1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iPhwzhLRuRhsUHsCDy5kYPbXrQLmVJe4HXWUGoAvbvcK9wwqhfYhYmmhFgCY24oJcUuFWQMS2yaGukhc3KpqR5n",
  "key1": "2hdj476Si7nUgoV9x59W44muxswuaN9t1u1j8U5HPZG5HuEAuyJvTk7qW1YrPcYHXErG4vpCHEp3Vpj8e33Th2d2",
  "key2": "2ZDsyBNUUMb5GVg58LhnTxj8cBfyJzXWsUacD3V4d1JxN3wzCgDhfHFq5SgXBM4BaGhyk7ryPUUuAVe6S38DDHP7",
  "key3": "2X9mkoeNAmGzjLb753KAmUKFyCvrkgmgkycbJt64vWRoVdAi3qSiwUZrRkxjiSNWNKyZ57tpEa3MqG668mpYoiC5",
  "key4": "62JcGj1ZUfZViLrEfRnWMjMKbc6ntAok2jmcAvsANfa2UK1HkaZh7u1TzhoNAuhPApMvRfo6K4jLRexTgSJX7px",
  "key5": "4px8dDMXRuUBVRgNgYmPa67o5LzkYnMuuS1UuWbQtMyu1h5YFwWLcGLKWFhkv3i7wAva1mxsz6SjYzLzCPGRJiho",
  "key6": "5emr5pj9HUTZjJPSDfAagLaNqvWBpESc8pAyhRKkyLaErf3bSZDBJnHddye39Upoig79a3Q6uNt79tpmZSDAwTS8",
  "key7": "5XN4L1QjkZ9m3Qb2VfvQDBfmx87HxSVauGiUWkzfstKEdRgMHviC3cUx2qzyk51MuBXeCtpzJfWP5n6F4YSrZJ7F",
  "key8": "5BRU4zxDNXjbFzUADKpuBMV6e4BqE8yW9R36VVDYQqtXSv8xj4AFWcsT8tZeWmrLmthqqz6CsTrf5ARhPgbUvAa9",
  "key9": "3Guzuh4vhqzSWU3p1BpWcExHJztDgbkATLqWNive9TbHwQ4i1ywdd4f6ssszxBXj8adaJTS4cEEdKF6ML3ZEXueX",
  "key10": "4U4NGrmJyLsZjKoBu65QynaRkbGhrne8JixSjtRavGLqQsQcs3z1L685c2MB5zoSN8BCADfK4q6TautmDAfrzYuc",
  "key11": "4u5JvrvmqnRWjgQTTsBXmPmzCFBNW6ZJHR4HXGFY5dNbvfVks6YqiecDETyx1QQGvzXtHmS74f6sfYe72TVgnof7",
  "key12": "4wgbvb5K3mi29h3zayUMWBjpvz9RnGUDz9vU47JizWEQGYiFo7GyAnxXRUhGEJHLE2mFVQdH9kaeoiw2hTaQWJd4",
  "key13": "4YAPSzmxLAbAUYSTKg4uUH2bN8pJJwc1b4HuXZukBkC9HfFZv8WDvwaxGhebL4eSSHjPGp5546r2LAQaRYvs83n",
  "key14": "3EFg5Xyzc6y26RXweH3hUhFZrKnjL7oiNhDNPNZjnEEgGDvaSxXaaBskD7xZvN2y7i6m61rsjbkar5BwjSVgUTMP",
  "key15": "52H4oBUvbNUYRco2PuwoAFrsgniRwX5V3Tnj8XYCzR5D44kvduxadN15e2G8qGkHtft5SeJbNLBZDnPq8HgYxaup",
  "key16": "4YNAaGBUakKCrwqjzbMX7VwoZiaRLz2mjd9e26dJnjvaVy2abtPrYhCscGZqqbpPREQ5rMoqyymn76sVgLn8iz5s",
  "key17": "5d5NHpZPK4ZSfAATD4PiGFq9hv4NRyArsWvUA2TCLH7uWrLaRXTHFNVrVLsomQGxjVGWjU8xjXQRcahbxSmxY5Fy",
  "key18": "2a8VyhHES8nsUXNqg98sRQg5Q3HG6qYmNccRT1EPD9pR2qZ7gmBLDA3AHyYpQzuXFRGpXTXLHmJJLcMseuoJPM4e",
  "key19": "2KCHmgpc9ZAQN8AuvQKnDMapMsKkjn1VWnn47aqqTbD8UULixZC2EFg9EVEDSygfMYhKKWHbrG2Xp6F7g7xyPHwR",
  "key20": "5ZzWdSaEHmAAJR4PnabLVGVit1yBTnCBXwJsbyQ394nzKZz75S2GfSHDDAnVm3tDGf9Mh79wnrF8UpBgmv5sHbnB",
  "key21": "2JxKmHge7okazoSPgQpCKGqqNQRbU8yEikZCXpAqMyqjRAsJYxg6NAYBuARJMvhC3PxsrhySWmxDNP58iKr2TSGr",
  "key22": "Y7n3Ju7Y3C5DfJFEMEG1qQe7YikwKJgWQBQMg7k6N8EE3MykvKP798ZUmY119Vs4zv7rFUoQAyMKo1Nx9zaWUxH",
  "key23": "5ErMsPLqQEUWNXM7a9binDuNRy9wtsnPF6Kcwzs73TAVqvLs51pDhWpxZ3vWWwMyjyWxi317D9JNFNoU5VJg8gDH",
  "key24": "5ZjdS38wEEuDtHcEuH25vXqFcRnk7GUMMXq9zwacAQHLCvJS3vgFNwc84dyP1kvkGmMxMfXYA9cgT32GMWcWsVWT",
  "key25": "3EqmpQFGnTcScckzZ76vLyUf3jsSnxs6ePsiD9mrpAg5YeXmETzpqAnAtnXJGFmxeGbujhnnVRmwWgza2uctSBPF",
  "key26": "o6y4TN4S1mv4h6QeSuLoZEAgPCYh774dXS3upDyWQaQvcWF2rfd5bvpW7hjU6hU4eaiuDa7VeQk1SL53oy6jMsh",
  "key27": "2APEJGtCRqBPA8A6oJ1s4qWgvHiA4XYtYqjANknZtVpc6gFmfURYsezvtnmXXv9vhPGounm5odtMPijHhXtmaeh4",
  "key28": "YR68m4EV8fAcNhdd6EcEKrgfN1ytgEM4VJsbhR1A3TTfFtjfso1WkzYrCFCA1KTnQdkcu15vffrZ2nDdnHXRmKD",
  "key29": "4HSR2wqkR9vLEbeW1y38rrU5PQ9TA7y6rAGN7FcMKFQt9SpSj6euuwfzphdkebMCoEqen4kwDPVTq3KAPRNF69vz",
  "key30": "5nbcpZKLXp7NvPFB7ubn4HPSd9nsuK1FUMFqnS72DHF9JT5ei8SJh9keuWYQX13inAQMtiGawibRx4by8cmPf88K",
  "key31": "4N3M85NA2P7Q6Rd3ZdydAb16QVLUFMBvxug8BTjdZk3emqDjqrUTYhPjc3bJrCqQb9N1htKtfZiMLToniuZ7kTYk",
  "key32": "5EBj5V1RyhrmamPxcGGwSKTbLcFFZ6EJ4AsEkQvyqk2HscGCSDGqSJGR8Hq4Zvi5xhYyh52qVSfChYHw9ptBGTPu",
  "key33": "iRw3sNjHR3qz5pqhZwuKm7sHj9RPsTiZW4XxCRnoRFVuvsJ4rtqzZXNcsmq6JcF1KjKsWyR58BpWL5W4hHQNL9m",
  "key34": "5N3sujHHYARtTmPGMdkTvZEUVE3GqiQsLmN7QFok8LJ8A7gxDXwVdj7rV3Bo3fevEyCesBs3fkSg5esmMnetwmsY",
  "key35": "4cxgc2QjKJuTJMBJsc9gjZo2aWnvKQejx2hZWiJ6sRbqKDrE5D1cVKcgjq3RxJT6YSrGQX1GitpjYbzrn7Xje3ji",
  "key36": "65B9rqNkS7WnrZ4dKgwKwnYGrdHXNmLSYidH959eJxtGsb7obCDPHDFFHKP1U2LqYZH4MdxbBJWwrTxYEwFAKesa",
  "key37": "2VH1XsxctGunSzQ5pqiB5PQogHBzi3eS41KeJ1WCxhYvLurTFYckVLxEm5ayvywnXE6UuKegQRGxYZHh5Gmefprd",
  "key38": "4wmyXREPKXGGbZXV2kBLkGKmoiV1vS5D2QnpKVAYEArAseUDVEcmvR7Rb8obWEZqWsmuoLpq5NJtr3rxvyjJJtKD",
  "key39": "4EgyEJprQUdVj436npAr1kFeLEkWpzD4UgotfeJAG6LW4Fq8aVcYg3wkAAAMC1Mhd5ycuhdYna7iEmrPo2qk7dNo",
  "key40": "2eW5xWw54n1pQ2kk5Bi592PZmBR4QMWHvgxWLYYQybo8pxZ6zjHkFtJECNTwYHJJVMQ9vV1edCR2T77jv5bavQDV",
  "key41": "3fbgYWMtidhDyNM5bWsELcnDdRNWeikRQU2uaCsXpXmetiZpec6zuJkELV1g21QyRDhGhAuDm2yVgrj5PHZqR3Fc",
  "key42": "3TQBMmVhxZ6ST41sN2FEmREUqtFX4nt2ckfahghGiM2Fr5nVhE3uNPPKJHkrZ78M25tviNKhjFCMLKT69w4ZRse4",
  "key43": "2v1aNM9FmrCuqp2aF2heeVwUUHccNMsr98WNmbdpmTHvgk4e7DHc7dWZSr2JTA1gykMfAc1D7rxPXEU6b8thQrSn",
  "key44": "3dbUQ2HAST44bvLAQ7H6UBk9mUieWsaFjwgq2o7f5AseQrbqQD8AHdZYkdUcfLaVL7habG9mUMLYDP6vkWr1C61c",
  "key45": "2ueyuyvWJJZ1bQ9k6Pgc7xzv5qUrKDG9ToXRKQV9ajcs3AdzYhKifKAfq7KRdgf8m9XXobsPmsPhuEPFYPKZMps4",
  "key46": "S13crZHhUdZsoc5GjhQUdJW2ksXPqcPhi3SjBkJCFiLvMoaaBsYxPu5kHACzGV5vVuMUxSegmPArZkTHAY7mPRJ",
  "key47": "66UogGPxHh13EYtauviQSV9V14dSiv1YioFYkzr2oNwVkUkSq1PbGuQnB9BC73FCmkDbbwxwzx6zD7rUMEmcN3Vt"
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
