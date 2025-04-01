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
    "32LxSYHP66TVecLXRLAsci8Wrri55csKBz7NLnmVGVKriVk2EWtp3yodbV3zfmaF6qRiNEkx3Z3basbUiJwCu2AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xm7YFjZEiSe4Ux92CUbDgF85Lc88WhtjJxx8YVdag32VeoFZRQc1P46Ryefazqj9HKk6BiGVQJajrJrjjR3md2c",
  "key1": "BH4W4rjE9cKzoJCe9M48fzzz9nNAwZRuMrNnFUkYQUCFHHS2GAJPpVGXqBYiNzwjgzrSp35Jfqtt8GGKmnjNiVQ",
  "key2": "4ZZHsCuvzH9XNh1DGNnZeU2cds1zsX2mvNzzXcgsytedC1qAjCRFccnmGtFdjFiPawj7HKqdarerdei1ao9PnbCV",
  "key3": "2QSdPLkhFc7B2sP8XBx2SwCyjmr8huv3oT4NF2FujahLr1xi3wAwfyfcyb97jYALNFTfR94NtZBhLhXsCZuescXj",
  "key4": "5dhJueUfUhKMVoEovcu2Bupg1nc7ughKwhhnqm36PGRnPGxNnu3ZscizpNYHgnXYBtybW7odgoUBqYU3xTQ8etsg",
  "key5": "zSPh6DDUKEKDd7mHhwEUMMKKh4CpgAbPza1rXC9mqcP4AdoGxoetWgRCVbUKiqhuxpMUop2yW6S6nZUsjEUfFJD",
  "key6": "4P2cJLVFgSFBaf3uQr3ZuNaUd6p6QfTvujP7E5LsKhPR3swiuPE8sj41zMYwZJUyNK5EJBTszoSMiFkxaQrVmkar",
  "key7": "3yTNWozReWa3DXRTqv3zV8orKJCJqqZnqFMXmGRjRHHWWGpZ7MJe3TyAcfYj7NNXTzMt7QRTWhb6m3UPUME4upgA",
  "key8": "PaBBey6XAXqzayZwLgiZ9q77Uz9PEmfvJDPynfCuveTHQUYjAQhCkE3EcXqa3UDY4yJp9b9KWuYYMNnfFVEzotn",
  "key9": "5ggDKYbJzf637XfUopUQnWLUhmBzzoezHWKAkNQsQr3GxcGy3Uu7euc5DmnDbtbWxrynF9w5kD7xaZk483qmvXFP",
  "key10": "2xamWaAc4xpxJrL1Mu9naLz76VUfDuVTUT8SD4j8davSiZHdJBB7jjrEd5y9zEie4g3o2x65VJUcD3s2Lqf1NiUd",
  "key11": "44n3XVYRDKDxDPR3ua8gxpW92xr7XyiMhmzRMLuDpc98VNe2gfjz8B8GfqvVQRqvu9g8wWwNSfBGkauH3xWrZ25L",
  "key12": "2RhxckHb9kZeGmWodv8rVwBwMv55CKa4BGYNC7zX9dwBYPmGqotMA2iWbHbawTRVDSZCqwmBdfofEdap15LxkopN",
  "key13": "56a6CiZVDogyaU535RrpCc9WHuukKY5GhpvYy2WTAb1doEvUkMhzYzm3iPm7TssfLeZUBk66N7hxcvQ3KbK7MBuJ",
  "key14": "65FdEn6cW53h1B2uXpZBzJoBcQqkgySG4XbFw1d8YmrmDBCptXMa4PMjReQPif7uCag7v7t6BjAA8EDMpHERZLuD",
  "key15": "sTFd3VmerNbogRVozL5rHpA1MZmEPCNmtzzvLa9UEow4MFkttAtUSSTo1gscodR8Rk91cdnkwW8nR7atXg5m9rU",
  "key16": "3WJqqqLVqWDAVpmBSMepWenJ62v3cBodisVcgteWanWwRyrDBqgPV447uetdwPQxsMePE1Zedgjb7bPNLieVxPGY",
  "key17": "3EBmnLrbN3u7BViG9MpJFEc5A4rtShkwGgtVw3u5sc9GtqnnFKRM2YYke2mmMyxSX21j5wjzoZi9tDmVWuWtMuTa",
  "key18": "2xG12RF9EL7kaSDdjBhsPYmCCDCVvVcgZK8ShRvLdJ32f1McHDhJ1gAqutNGchKZRGikFG7T2e5GEzExtS3BNMZ",
  "key19": "4QFhn5FWPMnwgpZ19vHEXkyccEm77vvrQ7JS1DgdsBjRExbi7nY7nNWhyhbsvX8o6G8pisHE6a7j2Yv2N4XExt3p",
  "key20": "3ybfqNsqXd9YJurS2X2jb5T1pjWG7vzvrYo4uS4VNAiu7dEG4DSi65MQySFHqQDG33ZZyBQcy3Uz6yVqtDYA4rQk",
  "key21": "4k9ev6jgwykohPojV4eeGxfFnast69XHEa9UV8mPKDVY1kxmaRKWhwA2SdPwNzEiKna6Ai5PcEogZ9yZF46QrKLF",
  "key22": "38Qmc2cHvsc6HEVSrE1mmXBJsEEb817VzTpK1rRg8oGsjd1wtpCgbdpke1ZMUsxEaEtGW2LxAgTmEyNLqzNWtCfN",
  "key23": "28T7K9eezXBxfQCMwmP5kfibzDQgyHMKzog64CYTSGP4XqHoTAYS8vw5SfHm7rVdXKA7FduTPKurVwLMUkpYxx4N",
  "key24": "3uEeNg5Z1GiESGkYMsVAPfmfvY5UG4jkFpZ494RbxAwDtT9ayYmgvHRVWwKS8v5bfyz6qVAKzRPcx6AMo7oGNd2G",
  "key25": "5g83g5QmGrGbJNT15W1qYk1sp76onSZivGoQoPFbPMB7QCUgM6JxYXVSxkb7A1Mn4zXKvcZ9vCU5UUY9y6PnQoGf",
  "key26": "229wUfZXxhMQjvUUrrSZmnmTZ2UbaJRZiz2PuKGXoXZRVt8uqDMRASEfnp9YUr91McscUWuZGskkbb6sQneBEGAL",
  "key27": "2CLR3FBZ1awVbwNkMAzuDFToHvV4eqxhA1nmQcQ96otZrDbqq3h1HLHiMJaLWMvWSzTToHSa6WzGjEfVbrnZr4MR",
  "key28": "4pJVT7mA83EwveNTbNjiPm4DXDKv5DmScQicEv7RnD5Uto9vRt5DdDiMwPvjCr8vy1wcpS7VAPSiemMX8EaMbjZY",
  "key29": "2SKHTRzSVyr4DzWwEEcr4TLQJ3Fsxb3c1tHsAkHYSLBsMuzNV3as8rWCwn6gZ3hWqHfsx2BYqGUBijwKhdJew6df",
  "key30": "32KmmeMXFxUBBUiUw5yZKLv1G1p4w8vvfHFETAkxtDvkPGekiEQ5ZCC45oEQeY8Yv1iLQisyxjwL8UrMe13xiJhx",
  "key31": "5aZE7GzhvJUZNEwcv7hu1CyjEW2ST8NKQmMjYMhpS5LsBq6nbSzoCLQdRFUtjsX2r5fVdzpiFXSjguzYRzmLGvGH",
  "key32": "59nR7KEmSmAN8UPeLRPrR4JKZ6M7VkHhxHXScsfqihdYgZ1QUKrWJkqKoMKmzPqiT9a5pbKkJZxpGQwgDDfdgWLb",
  "key33": "4esfUR96JFyfasSb69PgnTdPPrPgE6weNMCALQC2FhtnV5rZQF6VrjmqJSynhZ1H1oWcE4ps1B1rokG4gTZCotjF",
  "key34": "4DW3JincAEQycCBhKy9rQL49JPddfWAKzQbPs4xMqoigTS4RMWHvrXrmxYpK3jmsM17AzWN2D1ei6xDxrZA43NYm",
  "key35": "4roNrf22VSL3x6jpDSGBsPEir2h24txcSuLAGtMdw3FFL96Yp9cDBJiuZKiMfsQnYd5cXAGaKULjyr4kyeJz31mF",
  "key36": "61Gmp9jFpshUo2EfNWFbNkQe72pM27G8L9EmEB8zovDtx7UntKBwZUM5DZujsE2CaqVgPbw7xgEguMvxuR3wc7tZ",
  "key37": "SsSvTVUfFTX81kJbNWhwqUC29LAqyY3CqvmzBwe3C4sDrorgatyxiKWtANRsBzgNg2xa9jP88rsKzLNrq8WFzZ2",
  "key38": "3SMWTSzxJd2yLeEeRqC4MRUfNMfqW72wiiZnbMA35ehVAJVfAxk6kukbN2APRasJjQce5nDZwWxDBSxyjP8h4iDv",
  "key39": "2ScQAv1bwC9pAxzRPsxZLx1BARzfMKJFjwKWLKitTmHYm4aNYbh34QTXPiyxmSXMwhc7YZSFfge4FXw9YtqEwLRU",
  "key40": "x3rknntsQca4MijZyY1tYZhPj3a1YM5KZJHcomgHZSvaGTmQuaCHfkoK2rzouBmqewmSs5HAxVfmBxEH8XSp96p",
  "key41": "5KJdcbi9uEcUZbmLRLNWbTZrMLyJpHR2zBDcBFTsHoNGZPDCXwGascqZfE25TzvumexgWSdTUzUB1SNDr3bEBKYJ",
  "key42": "4V44ecLK2XGcaara5oxtZHBo7EvgvzeAP8aYomF7rhXTHuicsdCLkHmDNod1QcsjCQLsHkYvPZ9bnS2itF1PHCTP",
  "key43": "5iQEf73WFxAq1qD1SMxYb6t3rBVCAnQYC5HXUHrJf1ty2HyHaMQsxxTZCSZBy7dC6hhq1xp8SE1qaPLWLHWSijC1",
  "key44": "43sNBY2GqvZJsqKbvpuw4HJztguVRPQ2g8Hrvkq8yTxRxrbCh5keywrk2LT3uAvd89ngogXuWpY5yUM6MJiYRb6z",
  "key45": "4jLFX122ya5riFyVY3r6oVmNsxzkMs1GYbLdym3S8YPBXqrz6ZcCncH8bS1wrstgcCGyEXidevTyRYqyHnuY96kd",
  "key46": "4aiNkKFGZmTST6YauFMFPPt3ZyqX9G9apYsFfyJbAKsQjmQzGEMFBKuAUHXsPEz2Co4yrTaeCujPhhBgWMhPmJXC"
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
