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
    "2nALrKmirxdenMrMMga5MhkSv1M2XYuU7PPUgo33222kJo6GFCwtSP7E6QCpGs92bK5N7VG36Vozjdt4dcgF1Jvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58w48R5ykzzhG9qbKEiBKtk2ocrNQVMCu3QFqcCGaWcw5v3mn2ynYVaUg4VULi45mesnZ98iin1fPU1794vD4QsA",
  "key1": "52CfUn4zjemCURGsHZrN2dJq3hutUJHh3BKXpJ9unzzT6R2csvrJXH2b6wfDhvbWhgUMJNAowT2ceKimv2Jdyfbc",
  "key2": "5C2Afb63XeVJxHBa6uUznpJiCq7QYhNELAWvHfed7hwGiqLXy19iZsCi7Z78v18NM5nt3ScyCaAsg4zVxuxpC1hj",
  "key3": "3SjAT1Gs2BDJ2hi5PTjp7rzNvUFq92f7d14eoSE3Jwy6jzbJdCqEnKP2ZJjy7ksyKr2USDQMunuSPZL6gGoYiL6n",
  "key4": "5Sr5PwphWwdEjreJ7Bf3ae79h3e3oAt9ZYitXrQy84f5C7vZW8raCgcLzVHDWpGJtNZez9VkG9kBotu37dyUnVbj",
  "key5": "4ionGQ1ji6e6RxpXnxBbze6EPrQxMeSn6MZSNbWQEJ2gp1rKaA6d3QMhGtqeF62cgErdqw1FmSV4Y5w7t9srBgp5",
  "key6": "2iJfB4d7B4FgxNAS9j3wPsH62MKgx2rhs3ZRfE8R5MMAxrnuEUdPptMKbGkfocE8cxMYrRm1HrPWUnCJaSU2WxXd",
  "key7": "5qVqvh8bov9mzVFrX1ueeijHDfRNrGnZiyvbL4bt7iJBELM9Bb8MdSxJe6ngiDw2ymUXvKQBx5c1rqVFJZS8Ro12",
  "key8": "25WNAcFYWQfZ6dLEoCforQf4m9p149H245KmUuTrX1PxdxKSz5EohBrDA2iye84TG9MCouzmH9doz4N7n9H2mv1W",
  "key9": "4G5qdZmwPwgSEbPgLRGELo6wRYmzWCUwmYXLTqomHcbVmmSfZzRU1TA5JJgRWBrbjGAiJd6WFAP3Sq3PayGBPGRs",
  "key10": "2kruGe6WyRGnJtzHqMogdvEHxRLNcmg6LhjddftU8CBcKNLn1B2TTu52pFmwGqCvENcnfA2WoVCkz7tKXdeAVEZH",
  "key11": "67YJWV245Jt8TnPkDoaqNohPNQfX6Fire7rUFG1oCjEpupTJHZFbWR3pPaMf9YFS3FaGNLjuAtWmJrNtWMFRfM4g",
  "key12": "KyUq5vyresgTZCayMZugVaopLGaG3R9JvJDFeohMNvmLVNPc8YUBvwdWRrYwsHajheitpNkkCYPUut23sMTEZhU",
  "key13": "3NLsqFe7e7Y9PqayJVdxeFFxB19Co8F2osQEQfT2h4JqYVqZ9QapR4JRMgyVJAizjF6Jhh1vBLZVpbHPKeiQo1dE",
  "key14": "3xL4vDQCWu7eU2ddRAYnogK7jjXdidi6GZv8vfnCZ6SScm9x4q3ng4i1QXrbPwBqa4CXZaSDux8PAaoMmPD3bwey",
  "key15": "YNNioSyX9HvERQW76gqocz4br5G8vnkFa6nsuWACg8RHXu4M78YyqqTCMZGVcYfxJVxQvdyBDYmizoXMmcmkJYz",
  "key16": "64CAurtE2TXEyW98vaaNEMUEsxCF92k6S5JAURb4pwGr3bV8PD4U8mreYkTwYJPatVuzzAaL7HA59ZfwxaipVEpm",
  "key17": "3V3Y64auc3Q2G3y164M9tRMSboJaNzFAnC5TJDpTB2mirkzAV5qHBZcdTUt8WD7h5C54xo7ou4Q1CSCvFrh6H9gA",
  "key18": "28CAFnQ2LxeDa4QVK75JMAwMzdfDSsYjhnzfK46MUtpnzAgoA2vbyrUzccD5hCp9y4xyYkxRYawjDYPeYQLQRyGD",
  "key19": "5ws7eDmTDV76MuGV17Yd28CM3GCaE2AYLM1EiDJ9u3yjs1CBhfjRG2xPHzRJti1tQeHhcBjTm5whUdeqz2f66CWa",
  "key20": "ANWc1gEyrJaQ4igmPD3v4UJn171DNwjiaUyK4mU8YyAn6SBu7AEnWoGLExPQPjccM1cZ774roitatGP8LQQQNUQ",
  "key21": "4poKpc2uyJxjvGxy3ew5DG4rXeNDmXAsq6yQ8VBJY9DoUJrZGZV9vUkGMg9E9vegxTybm6tf94XZ6cqMKFJq4trx",
  "key22": "38YyQfLdogL74oZu2bTuMKCL6S5THFPBXX7peDj5JyqPZMJGatKiGotivCT44qWdBaoq6wP7g8PbpZPaqv3myn8F",
  "key23": "2kSgZmcw5nXvvPCCpERwvwyQR4WMmWsT4XHLJyjzc4mMBwkiJbqsJERgHfqVwYfWXoNBrXBKbWQ5Yd2q4aymvbFH",
  "key24": "53o7kqfaEe3MaYFpXH6t5D8kWUVTLGLsni788zCfN6uGv6s1X85QV5ddWd3YZrx7sh1AnXpswgPTe4rALppB7a51",
  "key25": "36bSFhe8Qr2Sm6DQSJKLLREt61bg8nQdALT1CcwNNxLccVxr86idh3GvT4xWPRuNognNco7eNK9iCfezcGsq397M",
  "key26": "2WBjcCkMw7kLFPW5vjr1YgaVyXDWgh4i7PgSCbVJwv8boViiarBo85vkmJWasfanydTNahJ3pK8WhVvbghmAxNuK",
  "key27": "26SFaUxn2TcYkg1NiZ1ueMFPQnXC28uoYG5D4h8AbTqpAoSZ3i7CV8GUH8RffCk5AKUYDPnCY1TEVRSsKDYURbmY",
  "key28": "2gfJkKYNuDuhEkgfhtsBCW88LbMoYNgzvSG3XFKvkK2ZGUyrDyxsjj7q8Tf5anuWokY3L57BzoCQXuGPHwdd5xrL",
  "key29": "5MnX3hJFMcdWVSai4zKoyrJYt6s5daEuBy8f9Kmh4zLm4jUMMd4RXX7JWScCc3SdrNPjJWx3wpxF6L4mH4tGftig",
  "key30": "2VMkHi1fqJgoXnAwrKwcDMBQgME5ogC6332g3QE6QRDVVfo37HoLCddJ19FhFoBLpxJo7Np5LpCRp4asWy4MpWHR",
  "key31": "49yj4183YwQHVZb8KF4REa3QTWnysfMMJSSNffEG7nMWHvQSFqhNKxFv9qPxYxAEdzCZr58d9mrFWzsGqmc93CKP",
  "key32": "96u6KcCU7FyyFEc7cmT2VerPDdSS63PuZqf743mEjYa8QbsDNwT3oUUz8t9YXcQS81KC5SP2ByMjExfyzN18Hf4",
  "key33": "4aBoKqDhGjgg7c5iCE9KLu81zWBAv4jkztS1GMEJ994GwF4yEQzL36U26YY2ysWzF5fTRk1ByFfffs59ZqZ2PZri",
  "key34": "7GmitvMAEeaP2b3tLt7FLFqiT1eiRhprU84YX7jGhkYzTBC2HPSVyErKWMU9y5tgkA5dVmunqEADJvueXY6NWTG",
  "key35": "3s9KBKNQtw8Nje2iU5VtKkjxSS15coDx3Zyyqntet5bnrdfBhaJAWjNSQy5w8h87rPTAZwrBsxpcZLoL21Cr8w8i",
  "key36": "GZ7XpJ1p3YCJSibss4aXfJoxCv5dUm8QMUvrA7UVDfLtJsSEy8Mpt5fF76oe3eYsoa8r9qLbbr8xxcLeEhWtFKe",
  "key37": "3kjusGtZdTx37HFFdxcJY4FPW3JXUmKNwoYvbSmK3jPbFzT8kSMmsN7JK1iiRAtxE6EifNmZJMGubGrChC77bbs7",
  "key38": "4WGXhvziFfYMekiDSeizwvMZ4yJ81b3tDbb83gydQFhn2jiFn7xGfX4uLUKXfAf1aEfC9bbG9YdEwFiU4pN6SHi3",
  "key39": "3zWjqfRzc9TAAtdWvWTKRDKcysXtQxGZ5THEUNv55UTBrsuf4HgV8DSWb8ZmTmFFMHjHh7Q5w1K6hxn9AuhnUvaW",
  "key40": "4iiK797nDfF6VGBYuPkPp3ktQn57KQfe4F2nV7NEfhtDS17rkQEGgZ42Qs7bgKUNvPrXQLMM48eonHA31ksFiciV",
  "key41": "3CrQGY8yzhYfMnFotJLLc8TrXVNw9xtLtp7GKrKx28dX4udPLE4A7YG5wbTEuXu295g9A8GAn4L6a8pk1T1Dgxn2",
  "key42": "3j7WJm9JkSGuAMbWWLe3L9gz9jtFbdDQKdo6WAHXk8FX4FxdM67frionRF8TjGRxWGAyAoY8RuTrwMequDLubYP9",
  "key43": "4PP8JbK2U4JH8s2b9bGYqmiPDfo5vvHvPKkvK8kchPswJWKSmxiuJMHxqq2QUMrSAGiky3xXaqtWpA1t2X9nQt7r",
  "key44": "2RRPXvY4PdTeBtdZWJqk9KfUuiVnaqUpuLNKkuExGEXMJdXZsMC5fAfEn1mWSBDzkiYXUXxV2Vw5Gecd8XeJr2ng",
  "key45": "4KxxxfH1AHyyufJadV5XBdRAFuepbkzR77Hhxcto9PMeVxQtkbPa8Lp6uspFQsgMsiqpwdEMZSVQXMHqT7ugKm1q",
  "key46": "4NYeDij2o4PjYtA4dwADy6x6wLyFKBNW9pXpbfLLXojcMPQy9777aV12jiL1rvuCVheJ2RhS6jfJQDyDZXm3By8F",
  "key47": "5asvrEadXWU2nUea3V8xP1VVuDVGP5gBi1kKN69H8ZFpGVbg7SsJYtty6L9uKXYtrvwaDTz3tbmhksjZHqGtnY7a",
  "key48": "2dcQm4asUYFgf1q5bHgQdCtAs3m3G3xjw3FbgaseK2x6yHkPhLdod5j9xmbhBQKTtj6Nm8AdyNL7EDr4jgHfPsXF",
  "key49": "3c1ZBxc7hJYXMDcaW7qqR6E8TgFwF2EXACQwvRRX8pfSeNKucoVBzHt27Q1EzHmsHPcnMgkcN1PP93Ai17icrurC"
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
