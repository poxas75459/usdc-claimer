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
    "6XELYiJUYAmcsDX3xRNApqEPAyd5pADZPsmC1ubD8JXiFsxYpM4MhVuqbsvMYWmY3Knq5SsFrKN57eawhuiRk5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLTzdn9VsLWheRqRzxusGKMQYw798DCNyvGwBKwk7KWUR2pevB8qC3kGC3asMU6gLNvRDbhTssaSs2WdBYuiTaR",
  "key1": "4Xq6dhFSX8W1mKRQJSP8swJJDfjXig7eu8Ma8u1PcfqpyARJYBokgj7G171Ges9uou2WGW3WevnEWZvo1qziKBZH",
  "key2": "4wDUdNj5KNmaAmeoPWTkeynB471L2XepUvVnwq1yF6vwE58ump785kj6swLbCgXGzCKgGvSCPXopNpWY3JaK32gS",
  "key3": "2wgWyDox2aJ8p7doQNDnVUJb338EMqQ6M6xH9qo4e5QNYFKt5VfHmXgzkffXiQFUYbpU2DH8N63tEtfeU4QhvuR1",
  "key4": "4NfaDgNTRnfJ5LwkCwoFC894c9Pc6zh5YyUitbwVF75DhWMeT3iWoLiyQb2JJqK6sEBm4MMhXh6R3Hk7zxnr2QnD",
  "key5": "4bwZsYU984SPYbdnKQE3NKFk7Y7NCbLPinPeDchEFDPdMM41oLzrAXks69M4LkJ3vLTwNM7K47UZ1HpD25MDc3hN",
  "key6": "3umxPwFiSh1k3Cu9KARwkmuHwPsyehg2E6VBt8iHmJyHdK8aZ7jS5BHQsVm9prQk2dW2NbNzwAeop4WRjtye4Se",
  "key7": "Pt9N79LRboRNHhgiw7ivcC91UTB4gdToHbrGwHTw6S4pLGHgodhYQVeTvRcLhtadrhXfj5WTA45wp6kbjkrexS1",
  "key8": "4DP3nGiccRGsYb9xpsFR5J4LLCQdvjMoWRmDjUJbnJUgjdY7BMKijgJNJDdgQaEijNGr9kNqNo9RVC1yR9Wki5rq",
  "key9": "4zUS2duRzTzq5G6X29ugfphuMnzwWNnYGnqw7iWSLnM1B6ujmphLWne6nqcReWamkXfpmUH9ot1EonPYtV8y8KeR",
  "key10": "5cvyvqgDBp5zHCdAPyu7csYcfNX16TPKbwPbn1Tn3tvfCobmRy5hpXWKw1NvrsvyXdEmSX46DMD8CMsimoxRLRbs",
  "key11": "5vDfuQuVJU5YcUe6C31RdgxdHeMjStu5jUfQgLV4fqS7Lb6FV73GKwKQyNUpRmJFenwuD2tqXdmcFTW4tTkRX6yQ",
  "key12": "5Pc5As3PHZPQpMfoV74QPc5gPgJ1GRXM4RejaRGDe47dsNxfg6nd9amwPBBBnuUQx7eZYNvy2Eoqgq7xgoq687eV",
  "key13": "4w9TxHm3WTqi7Y5C15YhT64ckJgmCTdsKzAcCRQgZeNeWAmpqSeXqY1heQUxmBk4XrCRDnkvu2Kg21jxrSRTwpsM",
  "key14": "K1NfiWqTr2Dx4nWs3uFgTikxmJ7QFTSRfdVLV8MJ1CgSbpqmKXKiKUidzBGWk4eEiEs6rBjdyKg9bfvNwdYqeDY",
  "key15": "2Dqmrjjjdq4vStn3WzWKxwL73BMJtgj9mEQ5GGFaFTjr8ZYuesANi46eLgDUSbipxZZ5eyUvRuLZruEUGj9HfZSx",
  "key16": "SkPY6h6gC8rQUpXCBvnMBkXYs3HdHEKFBouSBW8Mf1tAbXNoRi6iAgaZZzrE5yXsgbnuixUBz7ELeyCYRVgwXrE",
  "key17": "55Resr6hNWdTkNthWBAJcNTuz2GEzgQWUhdJVdCUxZbCgRAvFwkqa9ojzRSyw2y1VLmq1uYG8hR2j14gMAiJnCJR",
  "key18": "3AbKK8DizeAwJLTciU5TEGXJ6cPEhpKXrGSx66HsS3gRjSXhCDbxtSD8guFvZ9dJ39A1QJHdogu3vwq6Wumz1FNv",
  "key19": "PP9UUch2NQUL6k5dxJY5aY58RRKwwuYHAjPq5UArFxf7ZvZqEYq6ez3jhRPAcpHN3EuPxAdAja3M3qBNwcQKCJD",
  "key20": "655wmxPD9nus87GanZMcXzcZxAcKXqF5FWLzRj2B3YZbyh9334LUS5CPbUSVhZEvBRHLwNg4eBoLsgiqavAtw6B",
  "key21": "4P4CWQXy5YhrKjJLTUUxehUrKgmJc4xQ4WuYynBDaxGCWwdTXNiagcLrWFaTwAyZTJRNzAy96mgVLxPxWfiSyBCC",
  "key22": "5RAjZN12P2GGZX1iT61PxkCuMSRTqR6p1Xud9nRbjVpmgCFutHJshcHmvRYHrtCtaLGiB3K2QWVKQX7gFGCwDSDE",
  "key23": "XafBkHU2pa1oaXjzC3zFCAgbk2t1VuZ4qKH5eU3WKRhYM2dK7518oRy3iPn7mmTL3nDk5QB4ipzrJz4ncFSwCGy",
  "key24": "3Hk6kaUc77WxF3s5K13xyqohRzWxgAECiwfvsg81va9tPqUoQDtuDxoNz3GEyEDsPyyheMAzK9QhWG9sGkonoiJa",
  "key25": "22wz7wrmJi3EdwUCDrBNyGJ7bb2ABTU7WmRjNf1YMKLhMC6fkwVQ5g6dQe7XJ31X7C18UfG7DAvbeFXisoQxY49o",
  "key26": "4ecjjLsMmSgW5iavgD5DMd9zAFqhvwoynFJWp3Ruh5RKaSMvCMsmvuhhU6B1eK9V16dzPwTdUfpfwHVr7C5X4zo5",
  "key27": "2uc7U6PBu4PGeXhnd7NTHdnmiK2KFtfaboSXWrrtWjVREeZtx4exoTYytsJ2VxkDWqXDE6xsHMQ4fZ7z97LrupLi",
  "key28": "2vqP4waWXFxL51CMfY2eBe7RBBXB2NbSepNYBjfnzaSzXGbfWAtEVozJR3USujYW5h6fRoXWkY6eUaMCpL6q2gET",
  "key29": "3WQDV45CDZKGxcWKVtGdt2RdWro178bsTJQMBedvsAwuyeEMSBGZcr3Qy8zAEEkMBXvK9soSLihmkcL87hPjW3Xa",
  "key30": "3sSCGpACUE6rwq2m7EihB9mh1vGmxFrkZfsgQzuZUYdh5wG8Fbz7pGPpbXZ5nUnWRrYs5MgVzpBhUsfBJZnqwH2x",
  "key31": "45A1k4ur7GSjXncqUGhaWxbAerSh66P8uscQ3cGZU7CBvZcnjTVhLRDS5iux7gt9L5LUgk9c8pTyPppdGfBFLLD",
  "key32": "2CsGS4jxbuTWYeRxSzPgAmVGMphB6pFq1SS26Xe4jHSBqHrKMut6atrdKdXCaeduSJB448iHrDhP3T6RXqr3q284",
  "key33": "3uxTPpp8rHpy2xb2Yu7h1PC4CbkK3MpLR86XzdMroda1TnQh3ZY7diQM7sTsJYmZVNMW1DVLAnN8A6ujiChc5J7v",
  "key34": "3Ve2UDwJhg6akbKkJEsgfzBn9P5Z7abg2hcvV7yuNLikknYioX8nQsX2vrxnLBvCng9SCvFbg6Dj1R3RyHYPjkNq",
  "key35": "mXXRGS3Q1Nz8ieUz5t2suRWoegoG2dAV6F1ZhtUphdt71wU8gshqAYkNRiGd8m9e8cAbJhkZfzjon6dzs5hJvqU",
  "key36": "2GdxKL4cs2UyrvMDhxVqgHGa5ZSznhu14uqxvufEuuiQGuNLYfCL9J1MGCxVnTAeNK1jZ9wQLWWPVdMTaDZtqoTg",
  "key37": "GjhXYrrRPZVZCNozFoqtK65heymfKq3PZu23TPSyCHvT5TkjzVokj65Gt1xgfvujhyyv1DYHuH4MmS36P8nr1aJ",
  "key38": "JUx2wDmJnYfaTHzPRcVRBxuLVGiNMrGu2xeEa4nRK6BYKKtiRd71jBsMqgUmBNzMvYsEryfEgH5VDdgn546MJSj",
  "key39": "4QRdFVujUFp5fZTuFkCJi297JLG6sttAjvX1pwhVJ8gHGKxN8V13KcGWYU8dg7DiWSJnCcVJrt5aNAu3L1QCy3QP",
  "key40": "4TumLdGphXbxxdKNUEbDaSyzo9FvVbJnuPYbVTuNtwQLQz5PSvVrPCX7vrFT91quUJX9zbPDacqb11u6uSGbs55Y",
  "key41": "3zvCwk2qQnjN7hyTswE8B8uKok3s5thzxnm7RqGzDZ7k8eynnWHj9bpk2CC6R3wzDU4X5puvq7Nm4eGxqJyqsYSp",
  "key42": "4NYVWzMT23gZnDrXBZUkY5j5946Lzd7FG9w4VfaSiaZ35Pz2F59VZVgxN4KaaF5N28Wkdd1TMuGoa4AqiT77M8ic",
  "key43": "4aePHwz3kcuQKmzW57FxRGTpfATCJdhpAsxrcUftW7ksyZ4ytR7ErNv2hm59tCL3Jvcnx6VwmwWJ2QFExCs8ap85",
  "key44": "2UBN1sYczSodBp8JHWmzjb4dgauH49RKbFAkM1ihKqqbLT7jZx8TGmtFx9Q7FLKQ8nLE7U2v1eifKgMkGbRmQaVo",
  "key45": "ysTHizBnqW6oC7xuRJndHCPYqzoAxmvqwjPDk6ELTxNo7gzFu4wCdQjmm6kG3gxYcwqEhufKwv16c3vmspuJSH9",
  "key46": "4b1E5crXrjCPJtdzo91rLj9VGorYAaLUqqAGquCnM5WJqXjDzvgf95ZqRKy9a2ZyCuVKAi4tRygMQRsu5GJwgrPu"
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
