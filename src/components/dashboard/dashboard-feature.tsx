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
    "5WGmte4o2zeXqZUazbcuEuHbbDJud9SBjAKgbyzJ7g2oMPU97e5fKGCxYfDqCT7PgA16fHn91cyanTzQzYVCMzJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6iana7GzN5XNBvnwdaCoxTn8XmcqSe95xApbwGS7egxwa4bABhLeLvRPwQXadzTiva13DTPhPmdZ1MYn9tKmRz",
  "key1": "4F77uBeAU9Db7esMzYR4BVgf1YNA9ZrCApWrV5thgNh9ecpGTDmnEb7QCXBXkGkQ9aAaDReaJGswvSq9Lrx82XkN",
  "key2": "2AjPnWw7HYVAyMJJ7sHqSJW2pKA29eoiHJNxFSm6tPvNhp4YQHbJWcYxXZzsd7mYQoXE4CPEWHp9f7VwoB9BxuUq",
  "key3": "2vf2JtZL6Md2bEpQCf57vYDMxXb7bfL2uJRkJLZKHDdd3BZ9qGbyQZZeTfdGSwNp5o7UfLZ5xxLe4Uy7JQHHrZb",
  "key4": "5Ni5JvNxFxetHeogwyHvRZkoLG6vFZb1nGEZNimaqGcXrAhvWbKv2EwYiASWWQ3sJpNMPgo2DHzvhkZUifK4PnwE",
  "key5": "479kfZ4uV1TD48MVFNKPHUKZvKoHHDPyibH7JU7w3ZUcL7VYMveMPGc9gPMiFUnjrWwZ7bPF9sq5NmsoHWYb7ep2",
  "key6": "5Dutr7snnRxoyEi2kQWgZtUHeLJ8ZicnZEHyK51tb26XuqddgA8GpXvHUCyWW6AmYLE2rF5nbn7cFQcfhTAXmqdN",
  "key7": "gDHNy7MhLK8rH3bs3qfJyKdBNNiD4f2xr8NcnSFAS7bfb8a3m5SUg7F4Z3T5w9Q6KA5jk1sgznCn9grxbqKUXfR",
  "key8": "3yF7AdauRJdkcwT8KLwrm7w3dEUWCgyaWNVgsfHgRWrL1y6QzBmnp9RLYr6Jj5qcfHRydqfXGnjtLfucTYNbf6N5",
  "key9": "2GWQbboqd6TX4V1mpbEBpUGutcfPhXKVF3eC8VrCdAgyhiGAmD6pfDSXoKgvussBSaCbjNvFdkDzvhFcXLs75Jta",
  "key10": "3FQ9FfyJ6A49nvAu1VnCD86MMwpFT5kYJtkxsPqAu12gZFvibcKg55D4sw9V3Yf5cJKiq5xwA7aQngRjz1ywQLUV",
  "key11": "5unRE97yr6BEzQDCfY8utKN2MsDKeARTxvMmJdT4ercoirjRuvdaiQZQq2tihvTBc7WN5GZmLx4gd5Qv6NSjDpDL",
  "key12": "yyGoRq4uJcrmdwKZFgAQEHZ6ftjZMMJiSow2znHzSRFsNtpefq474i8HNUqMdbxzxcjvT9DrXNgWj6SFvHo7sDt",
  "key13": "2Z8rL79DJdbh1v5TUSBmukmW2xCL1qYev5f1aEU8AMNcsSoLHLmWJnkrgmjpvETCoGLqssbGPyKY2Rf9voq7kFko",
  "key14": "129xxiK8q78NzBn1yhSaBXByJRc9UCV3S46x1bnXimEhw7RKaSbmDBJkkCrhPekUtsWY6UACBgRhn7qKxE2TGBVp",
  "key15": "4PrJWMzrLBh5oSs3x6BocvXiuzH4kWDK8tJtJdqaMY7ckhJgFaka6XHd3QtrTUbk8HPksDsEY753T38Zfk1HkDDS",
  "key16": "3BGLdV9zgU7mCRFPaekUaffEQgLoFNL7AK9u2FwngL3GRZ7husbeAVKjjq3Fmgvg7vecq4jk3KT7Zs8QAC7B6Zbu",
  "key17": "48uLooDGVcwkyeer9neohRqz9HsPLJVMNgecp3BNQ5VP8iRMY6edWNHeGqZzwLB5EmmUBZvEjNw85vukocuazXtr",
  "key18": "2RUGFd3GnUgGE4upps4SwUwvGyFnDfz7izbynfHSQvxvecPA4e543NLempnd3ADy7dBu4MQCcqETCJMtqZfeMQrN",
  "key19": "ZWUTEttLPhaTHgAQdnu4rcixdZRsANmERQkHQKBGDjNqHuKpAFjUJGwFDEMLdqFDMDTASbDTUzGwhNRPhTokvwZ",
  "key20": "2emKcVcBPQqhjj4gH3Kuaw79TDqkfqEDGygSUmJ1ANqp98keuoffntHeLTnXR1GZX1ZC7Ympxsv8nkpBmnCHQPgc",
  "key21": "3npKbuAchVG9Pad6PjmZwPJJT1rxr4j2vDku5TjSs89aWsBks85WuozJsDNEaM84FfGVUGZ6Ja3Vkqdcyv1FqEh4",
  "key22": "4UnorockhTXaTRrR7UXavfFpV2crSRGGzuDFVVtDw66ZKth5BMt3dxgxigkENKcRTU6vTwvJhCtCqQrXT1GPSvrk",
  "key23": "5JULFwpfKTMJiGS5iyjQQMUPfPwq6vHjkdZCqwEs4FLwzn6eFtmwc4cBxh2o7KUY3BAbJidpsZTNohRn5hVYhHLZ",
  "key24": "4KHv1BVgxmUvB4uyJ3ZjjoCpc3mcgfAPX6MPCBZVfH7LihNuLGdnTznLaCdeHpsMVJfyGDD7WXamfChiReeHYqAC",
  "key25": "484PWf3saVVkBH1biVgmcpHtEzwe3vELTnQY7KuPAPEcSNwfB3nwXL2jC4rGLMQRRxf3iFwThCpwAuSQHTtCV3zT",
  "key26": "AkgbUnA5fNYqvJPnSzBJTkqvt83ggV2SiRZnANG9Hq77spBTbEK9kCvGz9fbBia826dwKTtj6SdPCaBUW1fRTEr",
  "key27": "42yvTBDsXgzu6tWGy7AcpZ1Rw6TnMEBnaX6tynRS566QCQ2XB7otdawtw1RkdhNJecZukgET9RiSZRAswwKoTziG",
  "key28": "iBsV1suJqBEc1FoXnCLy8aqWf7r2kFKcQ1TcrjWjyXYtRbrNvpA1VHMTSrissG8Sz4xf4MQRdNDMwDPaCSx85Uv",
  "key29": "5DmwY3tEsorCSLzVd3e6sQRaTUU6ByaEyyyG3NWgaKYANMoY53q96afMwVBXCcUNUk1AviYwYqg8bJ6SgDzzJMsG",
  "key30": "4bdWH6A3qBrQSn36R6SyQVpZkik6hngWeww4raoih9QYVMtAhecnKp6iK53vURUseguAkvMNPCQnTPCzaQcunKry",
  "key31": "2ZFeEY9eaPKwcuMCneUqTwv9uasxF8rLmuSZ2BQeZnfRdBdor4n4C8Vd7CrYDU7ZjjruNfSt4wWygH5qwf72awSS",
  "key32": "5rJao4SP4R4DsYCutCVYQNfsUyA6Rzriwj2pmmpDA3LM7ztiM4TnYQdoxz7CTFX4xDrDwk5A5xn2ii5BSeLx7pLS",
  "key33": "4W9JTJoYWPTCfouDmkUnBYB6h5Anvaj6kkRtJ7iVyvwrz8wfjvfWFoEwgMm399zgGoGfRyaYafL35re4Nczpzpno",
  "key34": "2GYypQYxGq87AV6HmbDePhuS2KvpqrjN89CQbiJP6fiT7XvjdH1QTAYXGoznmSBikPaeKJVXTQYG8SPs71toc18n",
  "key35": "X5ZrkX56LCnrKLZjQS6EWRyrgtUGBRAmbBBsnBZEUhkaFLt5eZrxGgLXt3HdF4DaRKiDsMTtrBxXYNwu9oNkB7U",
  "key36": "2tPzhUsePwgaRx2GTJ4c2nErJ5Cs1cTB8J7iq45J91XLbL79FsP4VN8pDCg7Pn62ZXpqhazvYyZFnDLMgYJ69Rug",
  "key37": "51C4nZXSfGMQ4WNNa3cif8494eZoZjvUQUhMtjN1Pec2GmR168hBJuqrZ7fz3nPFCUazMDubz7g2q5hyWRuY2Hh1",
  "key38": "3aw7U5Nk5f83gYGjrHpdHZ2sVyrfibx3PJ2WxANZDwipUHvEXt6mZHRL4v3UovLd3oKb6GFzqEadPQkEUp5CzUWH",
  "key39": "3dDHj2Z3C78fnrrjbub3zQWXuuANhEgVaUXuYDJ9tR6dQ3bx9rPG5pxCndp6hBM2Rw2iYQak2JxDQk5yMwRrmXuU",
  "key40": "2kKN6AjcX4SJBLZWgwBpPbuSXXVDMgKMooCnXbuqfZ5tYXkufUKVazkbZHddAMyCLTHxyDqjwXuQNxgFRRsMdo4o",
  "key41": "d13wShAMsz5pMv3d4PK4phkMhMLspQVNnM2L6eTGVJkAGFuYFHbYE5u52p9CXDxXVjJHjH1BpCFn64d2YxmqENr"
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
