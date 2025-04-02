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
    "3kSMtEEDgXm2X5KjrcsSuUuJQsMb6yYrWpDmuxqVNUXpghs7JJFJhLDwuNNqEivDu6wh2epBQ6XBqpizYK13Up68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDpZpv7yi3Eg7YCrYwvg31rscSrENcTFVExqYxGhBDpdhgQM3Tq92Vyrr4mtvKZfCUyL7Y3nxJ9eMEAu24p53WH",
  "key1": "5QNEjT8pEN89wfY98Q9phojj4nnP2m26HK9BMYELEitL33FyDttCQZdCmUAouhGHHi2y1mAUnjyifwVrxLrogmhm",
  "key2": "2BKaNeJe3NpTiL4oRXEa9aDMNFrs3cmcixJghtUG4dMHdhkCERXYWHJ2Pm2A2XxwHRmdpejWKsGkMsjvxx8P5nGX",
  "key3": "8wtdcCRDt8w4KY1tYGRYpjtZG6HcqHufjVQgDhZV9oaNNyrvXS2bSZ2DKeJwSSGWyGomKz5mFURWzTWeQv57dKx",
  "key4": "5y5DtPCd8yLFKFnCsZh5X9aKQND7e1yTjKknriAYsUq1tzSchpDkzMjmCEchaJ3VA1jiAac7NJfvhHivRCUw2SRi",
  "key5": "5kwSw6LusqbFtjZyod4BieSKQ7pAfNj3A2xFRoGZkBdP3WKHnCK9vXK5qo7jJDxjuThPdSzFH5KHB4jFup7kQqzG",
  "key6": "3UxnuVWixYe6SuJpoj1zXR2ooZ7WVsQQBKf9DXJ4K5GreCdg6FfzcBJR1beiSZRB3WchTV3is9e83MNH5n9btXXN",
  "key7": "2seZDH7BR3mmixQ5V1PFri7FXwGvfyc89GDkSnkRpXLPFrwjY4bFvVTEYEsgbAYacWP7DBxs2ijTZF1TCiMXrvdC",
  "key8": "5KTttbKXDnTYzpXQ321Xn9eGQFp6Avw5NGnrSVCPFR8B63WMM4rPdAAjyFsbpQYHkBS1qrhmQfp8BH3HCYrtvxRh",
  "key9": "5Nt39V5CXi8SaKFGBy3S7iRgCKRraVgARu7npPafR64wh5BrpdAovRQoRoSAudPbg8AmP7XWJmLkGtePEbvbjqGE",
  "key10": "2wCECtYoxNBpRjADrvZU12MaMAK8tqNgTWV7FpuGS9Jk4pjbuu5Qh2ozzv7eQ5qzY9XTUGhAuXHAoXpkFiESp3LP",
  "key11": "36YHmqLW24giVcpJcYfcCEokAzipM96jPr3UZWf46qdCMzxumkYVysd26PwsyEp6pY6q4nzoxy2aaTBVpv8vxSXX",
  "key12": "2NmL4FcpRWg5s5ycomCC2MAWgpeukgXAjvyaeKNKDyU2HdhfCer2TQPkvsGPQKoJjRbxPnxgVKynMQtGoVdmDo7Y",
  "key13": "3iYQudNGhkjBgDHmRCLMTa9YA6SKngY6EBJRhLgch9LJ4fvRR6bb499hjmzegJXhTbyeV5rndzFr6zNw2rBB4v6r",
  "key14": "2a8fS7gSkYumnDMyV3bDmiB3fXYQU6mSDshdBAGwRLmKtkiJQTBDJGErXTxt3VApi7twcr9H92tQoi2KuxF6Ydo1",
  "key15": "2CTopfqpGFYX4jDR52JPQgasmmwW3CgaJu8oaD5fVsqqxs8XkXPv3BBqfqGsDeRKFGhNG7DJmqaeVFAEAqJgdFWk",
  "key16": "3VtJPj6ZisH5tQM26D4qfk7PVeE9bbwmChZm57SXJFwn5bwWChEtEPJh3xdk2NvZUkrSCdu7uK1PetwjG5PVB25L",
  "key17": "2c8ZYYaVt1KCwLXTzh758U9fSxat2zSYsRvohqXUvJZenRFeCNkPJn5sDegjtowYgF8D8HxyioZMZWTanXoTvaU3",
  "key18": "5HSQPLy5pHwNDqdJLtQsVJsgkPffMko9VB6AYYDvroeN6nvLfmDTKZPdwGpUthDTmxK8WoXwWdYCSBeYed4T8wZT",
  "key19": "2h2KB6w6U8qfe9DUDLoXLMNcDhmPhVvyAdisG7MDDnjg5K7kui6cxvJ7jdDenioNN93Z9Nm2kPTz7k9TzrJSWVsw",
  "key20": "5wGKdchBXB8Qdn7D54yDC2rfqc3k8e67K9ApB7zekPuub8XD5Ez6whBYCD4ypdphuhF3VqnNkp27DANr33DsYkFn",
  "key21": "2oDieSthCGnpJUtHu5Gfht17PuqyhdbsP6ZwmLJbKigmvhNZx25NsV1qba4ggMjGgTB5cb8PJmgChZmkFC113qGs",
  "key22": "4Y5nXWSEzmGzE9Aj8qAHkHhnEbE8q5Uf2Lomxh1i2P6y96rqZM9JQK3w6cdw1ZCwmA9Vomo8N4JDmwrn2ytDNLoe",
  "key23": "3BCGSBJwiTyYEsiL6HngnaUTSEZCSNkmh95mCWAfWkwifthzQbL2FYhaQCr4ydKKujH8g66xDAtzPZPh7bTRp9Bb",
  "key24": "58UuNXWvWg9xAfS8QrKd6wFjcwaHsXzSxe2jCsJXxVAjTzkZEKm81dEFS86rRG26YH3npQXukdcUgSxT3Zz9X3jJ",
  "key25": "2qkzZ4NNvP92ivKGn27jw2d2mC4c4MLLZS2mLQCgo9ZsEk3xiPQXMiL47wbrmqTzXm6XDPLQorokJm1PYZGqKSwa",
  "key26": "3qk2BWmyeqy6kyo5AbptUc5mAtxD6BmCzq31oP4bPXJURhf9bwgYdc3mMZLAMSx1JmAQN1U8VQXML37ZhJvQcqSc",
  "key27": "5sPw4G36APWNHE3NPhf1dXs9sNSs2QAZ9ws6S5PDVjmZzKuwxAHqFcTH9vCPWLDUc7P8DfK9UaXCPmSvke6gctiN",
  "key28": "35a5UEJffGpBFBr1BfWEXUC979JD7LJUyi9TJqyhBfmvMjpS5B65Y3s5EyrFyD3GtyYseAAX3ETdJTSDvUFkZHg7",
  "key29": "39ume7Rzy2XAYUh45miYobPnRKaNjyAPVfu1pK1mbWRbRDNVjYaTPquzTRnXckYnkpSuZW6EsJAzFbxqqdGZGNv",
  "key30": "2fRZbmkHFwVB3dmhMNWJ5XMtGFvZbHJe6k3wFpFEdEjJZuaNRtqywCigw2ZrCPgYShPRRUw1jdxr5ZcSLcLoxLSE",
  "key31": "47EPce8VYZiVVShZi5rTZpkUFrkw695xgKLvZUNGrYvfx8bQbibK7DqoVdgPDUgbkszdivC2pRwf3Y3JSjoJzcRS",
  "key32": "2Qarhp95wiZVFv7ToL8sYX21AZrETH4rhN5TArezDb2xFDRxMP8r4uHzmBkCTCvTJizREJb1fYTnJfcvQMzrHWFF",
  "key33": "2aoNUJCcXui1mEH2vVXgWVBTMq3AHEuE1zYMfKyXfYjEdk8hugBAYEsN6g7RiJSyNZaAryo4sX7PupzA6xcos7cg",
  "key34": "2hPYoTJegiy23pfuUMDNsQGJD7F5CUXkjF7skQ3LXSTadCBXwcsALiHibyiQB5i7bnGBxW4oJNygz1tXetLzrHac",
  "key35": "3V8ftZQHMWqEVsyg6er8AUxXFKyWjrZpwm4gHgykFPkbnZXqcUnaQs4qjZR4GHn8VEXZXcp2KUG8BM5GVwbXrWdi",
  "key36": "4sgSrp8scgpjDtsQ7cWVH5LEBmqtoCTGYgStJsSKF3oHrX3pM8CuAkUx7jcj4PSwitpiKChDtzSuALvuFvkfFQjk",
  "key37": "2FerVJEsQZUxjskGTQhrSv33Wp9ejyX1Xhv7zLWN2ec8BqGsa5WmcnmqwSMWFK3tYMdnkU6JhK6EBkgD39h8m8tH",
  "key38": "2z8pHM8NMRA1MY8JdVNAVqp3KwBYKHtvybfUppMBhp3z9uCasBReUdMkhFzR1aBjKK5UPuNTUPH6dDDVVeAjBTc7",
  "key39": "4S3PuUS12BPi53Bv7ZUaEhep81uLhsgm3Z2TgitXMQPHKMyWZnJQ62gaYSNiCXWuTQSwnUDp4hvdy6tchq5wAAiC",
  "key40": "5rn2AinacKSK7XsPxF7Wnq1pkeVi7H8cDFJrn1jCyTc7b8oSrJ6E4CZFWsBejtBu9t7cnGKxKYSozHECMTK4kmHy",
  "key41": "5f4rbiMb8YTy4tWRapiX7znaUDH5jMWzEwQ1x6GEo3YdJNZ9CrVtvrDtLqMjmrqGEuTJgwFDErqo8UQ6yfgku3BG",
  "key42": "2PaSmvqnTFzicdCXBJvrtShqttRi69DarzM2HXuu7thzDGqceQaGPZaaLGezujBtnFq2zePxuTt3YMeRnC24ZWj4",
  "key43": "4ZfDVejgCHAmZCioKBBfUba3AdtXyB6RmsUwS32pNKaGFib2LbQs5YbNbC253xBiBy1d7Zr621hzskTguVWKC8s3"
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
