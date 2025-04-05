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
    "28tEdnuCMJKG4tvjenN5PfrE2EUU2ThTzzwjNWG8247haYjPsBUrqapvywdnwdU5j5KVWmUT4MaJ1eJETriCXSFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D85WW2Yua6nhALoFYkz5bdkuAjGF41QqfHT2uGKsU5WcJfPJJ2C9Qp23JroBBpkoaZuLSWUwk94TmVqLqxcyaCH",
  "key1": "2Z1nBUS4Fn7H9dxVmd3an7qDhrfHz6kDjmaAuyeQmkrxF9q6dT4NGQGvkE9jsLdKvTdWjfYmjexGY2Ft1PcUQ6sH",
  "key2": "3ria4oPEo5U5e1BoPyCLWSteUGkvPHmxWbu7kZgKHdqMZFPzgHZN5YodeRawQqkGRcrAr9YXmjotPbA4Ped9pTyh",
  "key3": "4Pw8Qs4KkZzKSqFKY4rpFavzWnuzd15qXmCiDdrkf25TSdMZVbae3e6LBrkFCywJRiifqxTehQCa8Fq7ojx9yp1n",
  "key4": "4YubXeo6NQQnkrxjChYpLj9VAYXSdNhiJJp3Pdtn7hHgCFXLoQERdPosKJYcbxpt4RSvmNg2LV9Fw7iZjmm18Qzh",
  "key5": "2cWkpiAtXPdVJFiEuRkK1iC8warqiuMWUpq2mzDifnxHWk6aVtzAJjouwriL1E29pCZZGkVkwhUy6uWqUhNwgoAK",
  "key6": "63dFR6g7kf783Ww3QGZfuroq3yXC2Y2Pev7W1Uu6xq1zRR7oGc1yRPgk2ec7dVHnYywYSpQjcw8gN2Z3vZkj2yFR",
  "key7": "4dc6oYzwHCJpKMrSWtCa9mdjSnzsjYPHT9fSPcR2LDTnHiM61EjqGGLaoFKMSeiuc9nKMEYUWrXj9oYeU9admZpK",
  "key8": "3dabb4SAjssYt2qtQqs64ikWk5MYX87TKuNP3evDe81NwZAfKWqoADi9WKKYhz4RcqZw5JyiFwvYVxx9hHzxzrQN",
  "key9": "5NdimfPYuGuPSwv5kSfi9pK5bUntFLmmF84PuwxENrPNVtsxQko7sf3usmKKmRZqvNQYt2pi1Q8AJ3y9Ks7pFbSz",
  "key10": "3RiNR5ar13j4f2St2ZmsJbekXJPNroEgw6y327C9tE5Rx4NCPHcRb6n7ZNrcQvuZ8Uu4p7vwrSsdGvZu8BN9o28W",
  "key11": "d6PgcDhSJzhkfsam2XM31zCJXUhtRbvL5uAtm4EZcxk9yRDqRzy7Vz549b5fZppJJo277vRz22wxrj43PZRXVDc",
  "key12": "gAkwv3FeP29QdLS8u2P1FMtwZSgACAFJ7T9X23MfrXQyUnXm8ejKo8zN8pkVeV4SSVuh2J94qeE5bcKECnyuvUJ",
  "key13": "5B1ZCT2nDfxZk8PDNW3fLQdzsbTXEstrnk5z4WmSonjm7VTQrzfk6p3pixGv19YBQhpwQB2JPmVgxca37Q9s6JnD",
  "key14": "ULHdLstLP1CXB1vWbp8z2iVmc2bEUPNh1vneRHPiMwqVdoFXH6pDWyu8ajm8SeriXu5dW1ikuxS939Fk3MyXqik",
  "key15": "5rvLsKxpKnKeePu8kcDNRqG2bNJtdMBb6tvKAdy6hdjk6arVuPVf8Rhs5gZsNHRbmyhFJtuEDertQEiLa8T8zG7c",
  "key16": "61jaPFv44yeSNwjHbaYatUamVSqXnsqSLVJT6XLETDQobkovQwPQ6QnHVz8Nd4xuDZjnTp5HB4h64mGELEJ315TF",
  "key17": "AjjSmyebQKzopwz9t1J5ea8PQRsxXfLFPdk9SiGtibT9cK886fVziBHt33VVntZAQFgqwCAMmr8by5UWjh9Ceam",
  "key18": "27imj7oiwbHHj4artZuMdNjLARrLZ4PTaoaPRiXbyk3GtxLr8wxwU9WCVSNCVYQuadV4LWU3f51ZdgnxemFqegkd",
  "key19": "Sy3jqfaPhXvEuTuGUXEx4bjdQv8os8VCLEXttUxERWKxTA3brZd5NYKLyUcAsgpgvpywtbK9VZWqaKnxHRcfTAT",
  "key20": "4ngp2ikVYWbo68PUztN2boXSGeX6vtiqg4Ft2Xg1JVGSHkPbJ9HfhBbSon8f99LMxhMLv9ycX1mQfEZ54jpuSFsz",
  "key21": "46oKkrvsxKAfjkUtxHr227QreiR793mDnCxPL2P5V8AWHxGwbsdQBPeZeVYiN5ZJ5EqBQnQqAhtLqpYFooH8S54J",
  "key22": "52PoxihYwNh61f3AvuyNAQo7XYGCWXVFkS8QvsmNQu8W3LtAFTrHxCNcFg1ksPVRTzj93qbgo9EXaww6yrZMqozU",
  "key23": "3BvPdKr96eFFoBuZnqRJ6ePH5E48KCjLk8kcvcNV7nPYtxgX5cWhn3ZispBgEF7JPgDwTyKpaE8ZZMWNSiKFLqf6",
  "key24": "37oeDG4pi8LWcanVRgVWEDYG7GE6RxNVib3JcUXqaRz7n5btCi8Tm91KvnvC56gkQEy8pGNuRAdYtZ6MRyGyQJkv",
  "key25": "39CUMYueFSFQF4DMEsLcknmHNzTdn4uC2VuZ6HePezsXLE1dL1tteiKFUMAVSsNbZm1DiCBm6b8ccyLrjVXpTxDk",
  "key26": "5hWwod2GpUfbqNFryqEUBkVSSLnxsijQ4aEyjwgxRVDJgGJKs5wr7mao1UUAyEp6JmXpGd4wXPxH2cMY3gwzJAmD",
  "key27": "RERwVfY153rZ8k4Pzpx2YchMTKHDgeAaXHNrGxJM17TgvXeCwk29iLAq1fBKPPYEHZvdyYbojNYAZRKmbZGU6mV",
  "key28": "3wivS4HFGerjfu2HNjhnCkjpppZ8R2974e9yFZ2iTMUSAcKNDpeFhdY8DbLHmTaGsYyAwHusVg3bigxRyE5iN47t",
  "key29": "2RXi6nt5apcHVZ2bnvnQGm2hC9e19ZWEkLYkL9uVRNataAa8XNZmUec1RC7xXJxEcRxLTy6maExeNL2C2egyhSdo",
  "key30": "2pYgYZBWv6xR491FeBcabF4kvLKn63i5ext52bfQFDWDkG6Qgj8iZ6fLo4yfEt7wqwUjin7rNNnzQeq1hjDYDc4j",
  "key31": "4BQasmuSKgttmUGrjgBH6mrp24fC9aY86LgEzCgvBGd6MAAmGoWtmJ8XfGZZqA78Q929WurA3cMg2Z2oMEhzpEVV",
  "key32": "4isSnKpKFwxKe3cDPLfA95i8CnRhW99ju7wuJrpqE8jSHCRbVUp3C8ns1BL8GJP95bZYsnagoBumNudEuXYBfmHt",
  "key33": "NU1hmPDwNUSojqp3XcVVBtBb4NhwoT7aTQger1G1aA7eiu2Jow47jw1tK5RAnFZnj7FU95k5ienKAkrngJWAcrH",
  "key34": "xumr7SUcLtBWtZptc5ZihC7FdPVoTSmCsHPEpSxi4R7npDaF5s3M8xCG6u9C4ghModpCBav8VXy2TjeE8vdfA1x",
  "key35": "3ENSPmcAEhxhAUWYHHYCUK9doVzBK7bCXXoYPeVA52UGBxbTCAsTtjez22P9HdRwCefKKHm56aFxq71dqc9Te12f",
  "key36": "zLkWQ6WhhamGVPcqxvBxzRGxYZxntCekzd88KJEEieZzLngDWp9AJsepzfVShHpomGv1bUyH6Z6eJkEQnSpgVHh",
  "key37": "5qgRFPaVNVu1ef3D9Mm1Z7M9xzRaz76gsvCKrRKRvpG5UKuVtWYjp2Tm9dT9mWHAaMU8s6M4VTrk5V3ivG7NwYcT",
  "key38": "siyWm2GUj6kU7AfYqw7PfaWetoMSwQoqCC2d3QcUZsLkQSzik4c3QfNfoQJ4gzT4fzvKYe6TB5Dz983GxXXu51n",
  "key39": "62mWASBQj4ynGg91ycYiK3kvDKXkox7hsLqHSaWLpbvMEQVakxGuWP5a383mHgtHCWquxQJ1rrkgPXcfVeE1CTrh",
  "key40": "4pSZEafZi2bR37xXFcPGwQFmkgKoampgnownUEspMQfu5g7vX2CSDQ3FfiYdsLiL4VfdAB14CZ4qqM5HKDXrDQqy",
  "key41": "4Q2ATszquVu8n7rcSZLhYBY2iTHa3UGTMMeEwhHEdL2DddXjeeJJM4vrDymBRawyTtRokMRJ6e4ruMFnwiNv5Lbb",
  "key42": "31rRtZWwgEhgayYpuaqr7K6TqEo6TNpyKS1TEMqvZsq1vPrgZhNgZPMTvtVTrLYc9Jx7WUQd8NUZcWKzFNJcYX35",
  "key43": "4qpCCSbZXfGSE8Zmu77aWgGEVswH82CLjM2B78eQ6Z36Quv14PWSy2QdmK6mnNSeixTTgAHvTRUe6V2WVibqLrVJ",
  "key44": "5jvrDztSjH2eKJwEeA1qiWpTibpsNwBtY2sTMPpYPzB517RM4Tx75Gbbvhb9XNQxSdmwpLd6wUznmSVtavGTyaPe",
  "key45": "4gpCDWpN1GBms9bf7AKHfBAQkE6kJZQ7Not8ZnbE15N2AvBDB5eoyRk8qxvLCbpkiLkoM9aXSeXWSXfQuapPN1qq",
  "key46": "5pajhGGKhkPLMsKT5wXtViMQLA2aQNYYj3j5cheZyk5Ubh5xAKSbTtfLKrYsN4i32jibKU5e7QNtv8fMQ7Lu5H6P",
  "key47": "453x5Lw22R6y6Y4EMQWps1uKzCydvLxgGxwVUhf8fPcNuxAabGAxSCKK7WeRyDKQRYAf27c8HEgLmtWK2w8htGwD",
  "key48": "4T5RxzbpAR6sRcombobXCPRz5meA6FEa7wFYwQU9YYu9Dsu2mMVL6woAYmSC1Xd74cBtUR86vRG3NtZiVgUbUw6r"
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
