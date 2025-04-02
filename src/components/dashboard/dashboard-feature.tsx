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
    "Ezb4Ye7hYxMVaJNfMXMW4aPASxePSnmcL8Hq3iFUczXPQSYFbMApBsqxeH1xUnkmstmCyqwriVDeUdXYLiVan7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hw6uh5Un5MZcqYVmuMSzXZL8e7Us5rSR8mFxMWagFUPti78v4pmVrM8tfnGJ3wciaX4uNqHxxrovYEEL26Hm6XQ",
  "key1": "3nKAioZUwXrMNxGEvWZ5DVLP1Dv2t8EjdNem8FtDHFSP4d5A1Z82xxTm5DuzDtzs4imnR4XxzTyPS46rXvePzNrB",
  "key2": "5HhnUovMjjiF7Q6rCDGqkD5m5Q8AZwkWWFWSDbRk1VQmxsnrV9NEKFjSkfAwBKLVrP3UArdVqdFSqNyUifeEvDz3",
  "key3": "5KUVZyFWB1mZxQ8rTtFDmvjUriB4kLjny1SxQoxFCAD1kdhLp4kjUgSMEBNHyWGnRCB9oi6XJYHeGeKB4MVQcAbH",
  "key4": "3ReB35bjgQK4qLifXzyAAY3fCJgUEjuu9pn8zySv7oJWASKN5nS7BVA2Nb8AJziwruMi1X8HuYjCnP6qEt163zVj",
  "key5": "62a2LSsFCuxe1xCJRLXbzoEok7LFjkTzidu3hQvsJjHPG9FYnjannujNEAqNwUsUbjtKV7S1pGipEn4do8QMt9Xb",
  "key6": "27wAo8fbPJHCCNdCDYv4oiWxPcSq21h8y5TR8TiujFcvUFHirVYsLL8Dw48jVXdpp1QJMP4zNQjgmajQicHZQS2u",
  "key7": "65CtWzN5yz2eZGhcG9A7RVsZueydEsX79yMyLEutv7P5GHJrzCA7oKiBDFcmf5xuWxyp3NgmEMBKZL79aZ4omF3B",
  "key8": "5PWZXGuPzFBBYdaYZgnBZxta9xtXAzWiB4E5o9m711GEipy8XUxXVUEemeMWPMtZch83wZKMu2yiXxJKbtu4N6LL",
  "key9": "4RSY8L3o6VqHG6bSkPQ3ADKUE61k9NsJqiQKmXfD7Mfk9nuKFVEW1Yy3UQS91Yvm2wjoUu4LiptyH7UwGqy4XtW4",
  "key10": "5UL4A4F1uZ344WrYCBpejD3PeokhGi18QRqiDRu7uW72t2VWa4tjBjwsYfqxorS4TXbPvk4h3YCctf41dHcZrVgb",
  "key11": "u96QyfpEc3vmny1nF3c2o6bh6s5YihMKzxnobfzexZWULsVGKvKjfCpDwUP49vMzn617f5eeP77pEiFawnd3GiN",
  "key12": "sngoC8nfo4SdXCeyxmTM5BqsQw7NcpxUfRWZfAsd5xuRW6jqxYgu67GkzEp7Dd5Bc5nkgtkHor2Fz7u5N7X8Enr",
  "key13": "5FmcpibnDWribDNVufRqyDUksxRHywye1DzCC4p7ChSXB2WJyEEE2WbE4vbtGwebAL4E3JTY6L9j9HfyhpcnhmDz",
  "key14": "42ksLJyVdztvD5eue9NT2ASS1gZ7GZucH8itTgCBmGpkQU3qnf3kBy23NBWgd4vvHzMvEx43tX3dwbamqA1dkqR4",
  "key15": "2igPnS8nXyB6JJ9XdW3CmqrZQdm2UAGxVhhCUpj71GUMNLGdAHXEmAR6LajA1WTWot4D1F6TqYhQvssTFyuqeR3X",
  "key16": "3oDatVhS7QufVidwBv3SSpYfNdtA8dVGCKG3TSLeefzQWwjEhzDWMM2xCJGMF6pPuYV6V82xhAXGVBezzofpVyBv",
  "key17": "4gMM9muyMiUamKcch4c19hXnSQgag4rPcHuDYncSs7zupnqBhatiPw6TTnNuJtKuL99NoeG5rUMuquikKQmjutjv",
  "key18": "4r4A6AKsvNRnVd1YyVz91texXjU2pyzN3HR596AnSURwNejcmSmQdStdGvxXrCn9qrbv47auWZ2z3fz4gzc9kmqt",
  "key19": "3iHH3DRFVFXxLbT7rQALpjEfABKP9xKimmE6XxFebxarh8cqfWBjhjpF2bdhatuAQQhrmFacTkDcYE7XgX8kq2fW",
  "key20": "3A3oBubDvu46cPqNCdSBteX4GrksMJFYZcQqbBDT9px1SJbUCtRkEYJPrBEtRFKHX5uwmiv6983r5ndoVQuSQmqc",
  "key21": "3pKcuQxPSLc3P5e4HfvJuuAY5QLMSiWzUx2s5GKvaQ5RxkMGNkH8Ed3eZ6PLQnJ3KSwA7zPwaRxpAHtkif9szFvc",
  "key22": "46vXEFHUuegp7amcAa1PPwTGTeiEjxpey2qcvFfSM3iMf2nxBcJ9T12aQGz44XeDuNcpc9amy31aKKNajAcoaQqv",
  "key23": "3S4SEUzNSZEFCWuV9jRugNPegy67UnVpeN6qxaBfNZDsi8p5EJRDuzJGqEYf4vEwpULz3FJDSzG73MLERurwy1pg",
  "key24": "45JMUNXE6Ab4NEefaXPUdgHSdew8Pd5QJXwC4FAwB78q32qNXJGp43qZo6pYw6VxEestcDec5KmVB9c3DJha7B7N",
  "key25": "3YiqJeK8eiqLprDJLpzCYa7dU9zvttCtgP8xEF4MdYm83HgFUQiLkijedsY1K9a5iJ1xLZK5SEYWowkKane5mWm5",
  "key26": "39jRhSbSKe3xVV7CCmQkrkqZUBKY3UYRukzkLuoLJJ5jfEecWuefG3EJ3svcpUk15Bj9rCgDjNTmnop51PzzMrj4",
  "key27": "66xoqKg7aUwv9vk9gqJqPoBB4NiGXqzPSJPW6479QJputYZmDmjSQumERBdab1mL1noXYsoXTZxrzfUqsUf7aohT",
  "key28": "a41TvPP1Y6dganFSZz44SKvvUU3BETAi7s3zYY8m8HA82vD94FJKTnTkV94epuj38y4cgQds6MXVQ7m7N6CXZhe",
  "key29": "278iGXQTXqdWLcfiNLZRST8rMEyuY6jCWfjhC3dycCeULZHz3q5AsmobcvXSCKpytNUEPcT7N5KA9XtPSwQdhKK8",
  "key30": "3jZuyFDpF25wj2qtNBYEHBQA2LEuCvwprj22DfJYMwy4E3KWKzJ1YvDYx9xzWE7oTFHe9883jFh9Jv8svN1a3T3W",
  "key31": "5smQoFhsi3WvJQi6sVz1KouogFwzkfY58W6aqqGqUB8RWZTg1h1pTnnHKJ4fDWJkAimqaZVuvqLf8duMTayTujcE",
  "key32": "4xkpYoVLj7Z2SiZJYoQa6W8XpGAJ8niAYqEK2GUBz1HMiq6Ci1tAHx5b86AnK9BHYznDH8MBSaCJDDjmkZNnAknH",
  "key33": "4TGcVRxUfr6pUj7ERBY46FyXmruVRwLV8aRYnqS3rvmYieoeaQJt54TH1HsAzQ8o2x1Sm4SJAxPpSda6ea2zjYpe",
  "key34": "EmZh4DPcLEZPEFeKFnpBw8kRQRsh78vA2DgB16LgHj2CbFoxgFedhj7Ei798uZuC2t7xmdi2q4ynE5c87jUy96Z",
  "key35": "51TitRvFeBtDncRxZ2G4jR6W6b5sQYXc86ANdcPbLm3z1bxAqb4VqfzLcTtGsP3JkowfDkqRDAGQsZ2zrVyYCycm",
  "key36": "2iCicJCH9iPWqhLPiUeMwGnEUzyGRdNea81adJDzzbSKDHRJ5ReNoVj77NKwgbUjSB2aguzHAaEi3DvHtJuCGLej",
  "key37": "52pEypa4bNZe91jqavspnv3B6rAx8RTZUtuBf4nTmo1zJWUjPEmNW1AouxTE9yHjeXXYXLbYuiao1RsLg51nfcWo",
  "key38": "VYZgUnatKgtjC1kdZhVqD49W9xCtJEHsSqYk593q1wwQ3NPu3MUGFUHizFA1XNoHDccKMGzffWr4DhF1nw27BW5",
  "key39": "7hyBUcF7P7qqzyG94g2P1SGX2c3XJWiikWnmvTXQVftyAxxZHQ57icHby9adqTTzDjkEDHeKxWyjx8JGYk24qp5",
  "key40": "3fdr6t41T3pTgSSgvFkR9LHx1iKiAfCVsbKRCy5QsYdkoCGkyca1bq6DxwVp7XXbjqUig5hByvTrd9WGr8aKEBbC",
  "key41": "3J218rGRP9dD5Sbjg8VNYqF7hCLonXFCwQLpkwS2hyP8gjWVNFoBN8jycjXKYYT6E9QeuN4qDKRBrtaPhtXYwjo6",
  "key42": "2bgT7b7qc62qrqAM3kwgodcXpuZancxox4otRrxHpHM6rfYcEPigf6jjUQi7ASC5VUZQUX47mMZXeemDjPECRiDB",
  "key43": "58ikWdwdeCJRRtpae869ZFCsb5rMoJhpk6GJJkTJx5H7K3Cz5E8HpHd2TDdHd5oAHuhcF7T51i3TywA7pyXuMurP",
  "key44": "3B1HgRT4MnntJHFbvNx5o5vzJEgdTiBKbFyPVf8xEWwV9qa5YVsu1A6P3wXRAex5NCuJMJCaVEwfr23Lf5rRVN8d",
  "key45": "4vxnkKnT1NdfwyYrGTXzJobJqUoMj6Jk9L6Ujw6CbLdpG4c6ksZCf2AnrnGNW4zc3TRGWiwb9osnMPBVyBMw817f",
  "key46": "63ZvgJuAcwfAESQE9jrYpnZooEZMDB69fYXsE4qFEsPny9KcHjGdpMLMECXCNA8w4kYVBPhWQn2Pq5nZtiEvCPqJ",
  "key47": "53o8sNKSnZ63FpX8KzFDciiR1c3QjTLuUbmSKba3dHuTxobuB3cZFrweKfkJjFqUFE7qv6aVwjuHAzQTYMB4iQUZ",
  "key48": "4wCuMoEr8ZLfNcQZ9QjiesP4JPAKH5eag4T6TvC77FHZDCHWZGK4tYoMhiUybtR28soJccCDkAMMtPLbHkPFf9So"
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
