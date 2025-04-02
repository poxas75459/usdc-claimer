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
    "2HS2hAdCQPTtyANfnE1sDwTxbdTvkF3BhvTyXyu6UPwbtfHAhvJz5BBqcoeufQxkSgC6MquN865e6Rt3Rq3GNbUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdQxo2LuDMczzBYGsfnz7Xz3wqcpVTnr3X9xdASFZb61oMrVoTrjYwkvmbMdoUyGpfddJRfQFKeCAoSwqAmU6VG",
  "key1": "44bNFtpgGx3DRkDwtP2saX2J5piyfq7FJBzCSmnZ2b5PvuZGV85rWAYQ5rcAEyy919THya8nUxkhT2Xv3A47iR86",
  "key2": "4mMkkVefLia7EE5Vbo2tX3J6Thb3ZG2VBbZk5BBndnfV4Fe6VABGhBXMiUQunwtjhFGJu8eLEF8z5RtPRkcEmrq6",
  "key3": "3PimZRA8jz6uwpTQbfNyPqw1b6k65LVfEueVxjyenh2fdATDgo7uFbg4Lw5GnZBYFw3MTBk9K9Z71Xh6HGt3R4eF",
  "key4": "38keGacURnEhiv7tefDvwYwA24nfPVjaAkvdQMdxVqhbsD97WFjrAwCRyYbtwiDnYMUA7rtfoQFq9P5WbPnmJjsr",
  "key5": "jBrBy1SDuoq9VNZCPYbYarWN4sfiXHmhnAHsompMenFmB64zuLYD8AnUZUR5N7DnZcE8cJBGgeYTGvfPz2VWTbc",
  "key6": "42aaXBLY85FvfC3KoG8riFGeBdLm9Uwx43Y1uCts7bLioNmK8xtmdjhJVZ6GSoWj8aGBJGqCxj9ZvrNpNrhDMAbM",
  "key7": "iQzTycxLm2sGeLDKZcgFcodH1UpoDyTKjC5JtZEJodkEnDLFHEKxjkarv7hj4ygbUhRAhrTXAhbVYTayvR3vdzy",
  "key8": "58wKi2Lj3xW5NaaDwqRBtNwCN49HFZ3siQf9B9ZHFtFKcexQZ7PFb4rPde8nL8qHCE3eR7yFjbM8SLZ8fxvK3p1Y",
  "key9": "5D3VYwb75heEhLq84oBKW9kSNeF3ca16MfPGzSzk4PTbRtZiNnSftV554SGJnbTh1p3wAP2RgA7BahUTVaKEuNsa",
  "key10": "4FnJJ3KQjRrzMiZPusYrGbbk5HfeYkCgaXX5tvfWSzFokQohiT8PUiurcL2SRuAMuJu77Hspn3837bSM4t58XQVF",
  "key11": "4R5r8PPYQ73d2X9CsE739fzVqWRgJwVL4vdorqx87XgMdMf2HnAb5VxAHwJsoQtALymRxN7UQwL77xGy3QRkZZyv",
  "key12": "ZKiQKAEGmaxJrV6aRi33MDFkiFwKzgdSvvJRp5AAcTTWHbRAUcYYJMFnnJ6B8iFbZkjJsnShCzJewq45d3nWTrR",
  "key13": "3MVyNkCPPuz9KYpz1nH4raRbg4BqMs8zmGtv9nc8LN4roY56ag4Ye1MpNf2x4QJYaQCm2C45Q3oiMSdqW7337MMU",
  "key14": "5pvZdNFHqjuNXPyXZCzkAzMAc6k4dfF7nGYvueEfvYYURwURBMz37brtjgxo2a2WoGR4UnzY6Hrpwi1Xj3s5TK2T",
  "key15": "KMUYTsZC64y8qysNwtJFJCC9Mg92zXh1hE7MB5xGifiJM6AuKuQ6DZ1QtfMebLeD3cyyzGs14bvzTzDsZs3s4st",
  "key16": "48fjubpbv89BvVECeLqK39jXDWcyrpJrPa8Nx9eep1TPRnW8KWEnoQzehTpNNiPqWy8tQqRBorFev7rHNQPLBRD5",
  "key17": "36hkNDFHWs454nLSxxKjZvf19dQAZfzYy65EZuqPKPA7GvcXwxNaPZroLijYr72KbHawu4wp8CQDfRTjivsbW5AX",
  "key18": "4TXwdyFwZtcoyAurEgiq7FQC8SGeU5KY4gdUHVyPuuL1grqjATo9rjEiKiYnReiaiPvo63JKn9cRRGyBf1rdAjXc",
  "key19": "2jgsvGX51bR4k6Bw7nyeV1ygbGmbQXsBi1ohezRRGH1BCRGbSz3QHrjHczuGBtSZPqmeLEGX8Z5h2sDbEsFkPSoA",
  "key20": "4h2CjsJqooaTVD2Evt1Lt6DSUYJBGUBUu5gnCqcYkviadQvPjN17o4gB7ebBjapdKt9Sint29aRvxtu8ehpsVZ5A",
  "key21": "YRMnqP7cBzJThw5SXxMdMkF8dGhi5jRhtaU9a7USpKFd1KTYAm1tzcnrxnFafUZjmHSgWUZjQMm5zChh3LGmex4",
  "key22": "3NkMGZduQ4xBa5DxZyLCLmL5YnoPuRLooWzAC2enK3jBbksQWBvQ91D8p2EYiSi1c9uZxQSgbeERXq9qXTkk4Mxw",
  "key23": "5E4sWfTdzxKzZJHFRUJVQr83DRNPpWWCWwiJNmbDyrSBVYnASa46KVotWdVK4hZSvd23nfg1GS4pi8XJLPWEAa1Y",
  "key24": "27KhWjHYChpbVogEjVJixk9NbhXzpdTVPp2tJ3ih5ubezdnoi1zJUrLRL8DKDqQeHY9UxuNBLLR6eCYgneYk3xsN",
  "key25": "2WYzu3uWfZMD1NxPWmLz8gud1cR2k13qeE6idcZeE5yCsnXHz9ho8YsXdUESXHxCJfczM5TbBckS9BrguVLc3aSt",
  "key26": "3fsQ4WZuEPWyyE4vejz4DBJz5rr1vfTEVYaGAAvHdVxgQnsQYFU2cYSQNxcBfcRmqpGhR1jLNW9HrdEP8aqkjeHn",
  "key27": "fg8vNSh5nazfJVt85jVNjX3eG6hEC9eDVpLiEZyekaRnn2x7WPfcwbXUPtdzHEY4rUffsezYraviCjN2eD5LxCH",
  "key28": "56utveqon3KdSJKgWfLyV2rq5E6Nzbhnd4L2WZ6ZzixiVaGXnJUx2Gqu4e73CSgiQqZ8NUgpby8ygSEM1339vPcN",
  "key29": "2ftLB2d9NKPyHpsvBPpYyNcxu46bpJtvqwspgq8eFAQsDAyKs5GyFqbkni31vWSN1y4SyvTCE2L2DYXoUo834Nff",
  "key30": "5o35983UjKUFd4CQAwjuPNdibSgJtJLWJ7sKpaJPWNXeYePcvXPsD32TKGt3aZybEZVcfEaefmwG7Lav2XLmzJiM",
  "key31": "5wSYvHeJjrSaaAtZ3WQ5BzEQLtpHte7WuRxUPDUgHrhBN8Bbo1iCdY7i3YeHKRNsKMA2ZcCYvxQmzeRcZTFQ2Bdy",
  "key32": "3n8nkvBYQKrBQFQ1GKNgNmkzahe72cidi9uHC5NS6DruW4zpzn51Mw7mtP2TK4neGVWd33ouL5AukDQTc5zJ6PXv",
  "key33": "3feCWHrA3trUmJGGUkLzw79d6zc5mf1ad73pvkaDLK4tESf4UqmPc3sEjGdzzY6DAHAkReJRA5EhdUzvXYrmY6do",
  "key34": "518eHsueChwFcZytCdRiykTzymNS92JwRo1zu875YDjo35j5Kjns2pxk3d1KGTtN5eM9JKmJB8tn1Far7sKZZ4y4",
  "key35": "2wuJLwHbSYCwpii9xjPnmr1sQRJKihiaBrLSHwEgsThnKTDTp4wMYKxYa9CqnSayXgrhsc21G6YcxnEv3rpCgJJa",
  "key36": "3Y5dqRQiimYw6UxyjDrpwDRf6CmDV4BQNkTuDRC5EkjrpEtZUkx9mLnKzy234m41JRDJYxaN8ZSPeLTpKzswG1KT",
  "key37": "5a439Uo43Fq3kEmtNRjnR8i7YUxkE3i7heuuTbhKLYyu7GxSSu4BwcFgab7wEBFk5zMXbz3GL8Pb2sohao5nWjTt",
  "key38": "2gA3VajnwUBmSQFS4A3xyyYgR3ppfbKB8HcpF2Thj8JjfCaU7KKM5hGRoJUoCzh8yJrfgEDS6RfWCCh2jqBZn9u1",
  "key39": "5QEyoqb9oK3EePvvU5iyYEoVouGcRsCDLpDS6FGencc6xCsmDE8agChbMbkhf8ScwJwpaRLstxtejxvSA9B61BDS",
  "key40": "4zsfvKKdBS4E1wqvssC2x5PgcQSKZbUTdSAiGB5vzxtZp1oQXtd1KCAe9vfBEgkbRHFKhDMuseXqwMfoHV7AgKim",
  "key41": "sxpineUtyfdVaKwPM1vZJu5Cax7x3ZNDdEp6Fz4n1SqaNqxApUMBLPMkwDMqM9H6bTj6FoGku2ZaKXfDBYc83nG",
  "key42": "2x2aFBsc2eHccJHPbxjQYbvyWSJ9gbnKV4oLBhQtHHGDwTTRvqMB6fZF2wxLfNmBQWfKmjWL3ZoWH9p397JKF4Vf",
  "key43": "5zZWjurQ5ukQjpC65AVvj2YB26yyu9zA4zfDjj2zZ4jv3kWT92vKjQmt12WJgyZ2QZAsUTfXFWG6XKayeaB2DkDi",
  "key44": "5s3kTapFNcqRCtQxsiujFzxsWwbJwd6HwF25hyHmKmr8aHn7sBYdRXgbv2gL2y6rZKn2vQA15bhXLLFd1Eczb1Bj"
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
