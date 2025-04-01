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
    "YJL1ZGCZreXncoVWJnRbUUzL7jkD5Z5LzDyQTCeh3JxzyKpxA7yCCLu2zafz7uugJ9PxCJXnQcm82jjW9odE1Wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqehPAa8dyWsK2NTDpXYsQK1qbfHw3FSfMpFvBZCuJoAKEShhbXnCUqhiu92eqWPDhQaeig1JQm5dxC7nM3sdyN",
  "key1": "54LAnUfKKSZU6MrzVMFUkHa9gBpWEXUXFeZNUkG2BiCr7fdWdeMcDcxqGawvPcCSJzyVFPthx3TUZwsxrzF95puu",
  "key2": "5rj8DpdYW6C64TfTEySKthFVomLJ7MRpBYVPXkrKTexYpxe6qkMbVn6uFHhzvTcVtryTQfPtxNPyR1TRKgXZYvuA",
  "key3": "5oXDTRLj64Rp2AjdAw9fXBLA5G33rvNpWXBzmvpT7CqG69ArD1AAFCyxBSsA2LgNqgAcBDqdHBGMk6E3JUDZ36CX",
  "key4": "4pAqpD41J4c57wvz8GzdatDQ1iVExsJU3csWEJj94VSuTEKxvqPxSvVeWbrn86ja64qA61TTRUdyox3CJtGBiojB",
  "key5": "kDdE8SF5dEgbUWQDyuAd3jYx97JiXSSHoRzonm7kxpwMFkfyLsRsRYeULKQk7ah2jQwqAJtKkL9UuFvJWgAWHGB",
  "key6": "4jtiy6LwJ7LzFTJcpMRcpPWVvSbjXqEu81yF9sqTJ6YcYQ5DugBL9PKb2gNzJCY89JH2ZEjwgDcvmM8ssyuFvmkq",
  "key7": "3Hv87r2PobhwmS7PrqL5UpLRXpEp9VPMeg4LnANErWAtXHCKx71hV51YSNhG2wEKSBqFASwsgLzhVqAeQYqHpUBT",
  "key8": "35H72pesac5HhbLYZHPfifZNHkdnWwsbAumNwkT9k4PiwdSb8CWT1CfjdUUUaUeD3YkCjG2LGMKsVYuhN23VZ7vo",
  "key9": "ndiW9e9YUKgM9KQX8dG5wP2QN8YD7SGkUpJjjp5YpM2pzbxeKsACvW2E5HUgdDBYamNZjw8qEb4b2N1HHh6EFH2",
  "key10": "2x7Cjb8hntEoS8T5QDPx8KrCGDAknFsd6op3hS66emobQ2sk1kwgd7sHjoHd9gpY9soCQ6688M22DnhWgMSgDjKd",
  "key11": "63bSHPb1PYwmjRM6c3yFobToW3XSSyMYBeUtx4o3wF4QxwPetYCwzsjWZgfjmXyCsEds8AAeNc9oPiD75Eo3iBU7",
  "key12": "3PqcVnEBXNvw9Rp7h3ecB5GCTDvBydfjScvAjKjjxW7JT6P7t1XwGmDHBKJrKbJbC1pAA4fBmtBDTZ3TXbv9inFb",
  "key13": "4F9dknfyTnKSUeLMyPrszW39rHfuK4BBSyFJurdfaiVJPQ1Q9w4oaoawC9FCKx4j2RDeFX9NZHYRaxEPEzqfQzGV",
  "key14": "31fTbJA1gZfyi231m1rN7huLaj8kvtGpBCrXoZDfNCdQtyvrrZnj4gPu73DK7nTvLGzd3DLLzmaNxRUSzijVVpxC",
  "key15": "fvNnXkzGkxVR7SmP4kzyXvGrZKHPWtddyyjTYPcAqYsroLoCerLmbUmGitqdyYFc5vrX5LZxSVDJTfGKv48q3ox",
  "key16": "FVenjspGzFpymJrGKUM2ahYpWbhzF1zWcR7We4D4dZEH3F5eZRk2MrtXx499NrFQ3Y1FD93DJUNwZUUDVK76rDF",
  "key17": "kv5ZBuTHfyULKeYvurH5kEybgVbQcuPQDh82rPbCZHv1gG69s3wzbLPn3nYw9ZQdyVp8S3PxrcgYVZRKsCoYz1x",
  "key18": "2PZ2aGGiB6k98r2XhXr1C5VknEcWMPS5EMBLLyevu9xzK5uNt5sZD4BFyCtCDMCKzt9Sr41RyaA5Sk6iVUsWn4fc",
  "key19": "cApwNMXjwdMXVVCtGrKLdVCznU1REXEaicrz3zS7E98g7xDn5YtEq6gcMQd6r6K2XvxRVWFk1WjK1J2xfZbE8zM",
  "key20": "5jgWeTbwpNvAjdvTtmWb7ggyg8hy2YVg9RoJaxop5X3LwizaRftrkEVv14LmkuRH4dBZZg8iM9uSc6AYmbPGyGTb",
  "key21": "2rz1bFs8QNLM2vschqF3PnosppaGQJ227WERagCsbnoFNw6FiVnWH6ER8ZmF6g1G6sVm7pvuC4HSBLhwP6ayRii1",
  "key22": "3wVeFU9JXKa1fVrZ4bfb2RxWxWdphixU6KDADowtfp6DtgkUMjWbigKq7knJhqDez2XxMUvvQB7VNYAt86mPP7av",
  "key23": "4ux4xmvzg5MUESnouFdP2JYeyAVo7nMpi3YTxjZU11GAHKhjVWmL8V3RLpgb3yrML2fVW6seb1NieKvnbNLy2rq7",
  "key24": "PkP1q7ntg3JHe4xcLCdBDmLo5xnNm5y6akRuyqTR8wxFBDeVrUfLsjztufsd7kofbB515U7dcqQimfMBzynsXoc",
  "key25": "4wjmqdgiGjvFm1mJS8a9i4HNaW8DgVcKa7y2aX1e33bU8Eim1gdiNowDxRq9zv332Szz7qDMGHCADomNJmTiw62S",
  "key26": "2vi4LF8Q4S8ESE4nePA8KDmnXfkbRzfxkn94DCCb7Hzd8ufjNPrGuFQZ6RU9mXdPu1rL87qvcKFBDgcVNGneqcM9",
  "key27": "4G6s86g76tE6XkQnTYXN9v68eTBaMWCsWUsQVF9t8qpXLmwHkwamzeZ4R7T8pMJgQQvqcyD1ZocodgLseEWXj8ee",
  "key28": "8qQgZcnphNYpMAm7CzC3Fs9ASyu2DfVMpMAz6UAZp1JG13nXYR5AYrnQh1R5ue75VUsPGrXZPfMdMywSA8J8MDP",
  "key29": "4RLPvdjJiSXu8wDyqioDcNMckpQiz3AMqqWA3yikdjtVFAqxE98S9K37qAyeVcwz1ZzY4DrPd1RaatANLV7vPrD4",
  "key30": "5SWBiGbZwZYXrgwKzVsJ6ZMcy3CDjhEX65UvhVmYhDhzTnUanJfKDBuii5uwiud78FRtvQqf1KHD8jvb4BKyaK3b",
  "key31": "2PZSNw2RfkNoMLA1B5js6VQXcizbjrumZwZ3YXgaUpaDEhcQbbBJKwefCDhZwRrNM7tyrMWqyCvNtAMGwiULkcBR",
  "key32": "2BPE2UBeYvYp1iTDx4FyX6g1sj9CYgPBz9ZtCdJmhYxicfL9N9DRDDFGfKU4btNbeKhmW9zazMeAcysvywU3qGtV",
  "key33": "25Djx3tqALdEMLk7btDve9j4ihXCjN3wXq6tkfujJc7gqj1jif48kqcPEE1sDPGc9Xu3H4yBiMkLPemskWC6pnJH",
  "key34": "5JBCKuLWN8VH5KNKUih2UGffyQJmzzphn6vjHHc2pRTMqGXJuGShdsM15Wj5nE5ZVt5e7oSsAKQkse7LCBKx54q2",
  "key35": "4ofrPrR7kBipFVaoKkXHdr1HvQi54nnaPMSXkr2aPHN9rmDNKz4ieooPQXpmTC3mxCg1nLG1rtSSEWpqchXJZVDy",
  "key36": "5Hggj3b255Q18EZ1wUqUxYmy2EThH8CMX3tLSzS7qMTXqfnbekpP7uvCrgpDeQJxUqj498z3ovDBGZVa2Xdt4QXz",
  "key37": "36hBF9krTFDZhgifxUtvqhqDyE6ixa7wdzFGRGLdC9XtX8Rt8ZobJy4TcGS1dnhi54DT1WTn7QB4gsnpogmfMrXi",
  "key38": "3sBPyCQVyytBqnXYB2dJMT8Kd49nh5U9Ev4EHxbnddHN6kJRCNceKr6ULi9h27Wja7muatHZVmyw1mxYcgrSHEMn",
  "key39": "6dE96ByrZ7jH8SJRDhxf8cLg59bCBx232c57yh5pQxBin3msYKKKT66a4HbqxHjEkBou4KFdhJPEZX7cHbjMjtu",
  "key40": "3dLeTt6qUTeCVSnb8s12LcF4A52nFirt7ZDUxuXRt8zt4mX3GCouPvvb5Xw86kGXf9wniJNokHf3dD3NDYEMiVVE",
  "key41": "4YrMpLo2S6eZn63z7i7eavFBjQqshRhoMyRoXGSYVAc9eCU6WKRHF38o5UXht1q1zUXbEw7yXY8avnYCAEJbAkhy",
  "key42": "6jvYLfk1eAd8sc5Y9KGRpQLwjZ8eVsRFQd8oK8ENq55vJ7FkrAkWnPanfeEvpLuexEUYW6KrTLJGofRmsQ9iXS3",
  "key43": "4nMipSB6eCwciZKvCqGb1SVv1znbNERjF6sovL1dJKhELr4Fp4URz3NxNa7AM2Dhi51uZu5LUyhvgKyQhujDDD9b",
  "key44": "5uozioEzvavuTPxwTKUFpUj59V1rf353hWwRyevs3ukj1o4Y11fRCX1zTS53n7uoEpL4aT5r39rUutuBSRAwWYAj",
  "key45": "5LnuP3mgSYF6vos1JiNjsW6pLRYxa8SYPx9zB81ciCdSodd5feJHhg5fiXvYma8Vc5dQponPUsMzgiGd4AhZKP4d",
  "key46": "3HHVGHjk4dY1si6Qzk3xr4seKH6iPeXagJRTXmh5gCfWp5HawhyAdQ3CXiuJq8LmddkoAjV9CjWHLBaRQwJTdZeY",
  "key47": "2ZAfeKEvga4eKvuh7y5Ehi5ExXxoE1AEFCZYZWJEaeREFKbYcQY6qUkDJi15Q9PreczVtwtJJsegCKE6vqjTixqB",
  "key48": "yYS9G6jJDgMkqdWpM1YvKPdytXfVGmFXC6PyNUaXRpQpxGHMKk7E98HcxvwJRSRbu97YazRMPtxPWyNuyuwJi2V"
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
