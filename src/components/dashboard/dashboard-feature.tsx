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
    "4d25P4h2Y3NBXCvPcYXUW2fnWLg5v1oM4yWUjybPX9ouJMR4ULLnc88NxU7KePgJNHJMd6oQsKejTKJi9aw78eBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfUSY91utuz6JN4mNDyzgZcCxYyLUGB89enYqAwUpJzghYyPF1zBKXFfLC7fxCv1zTL5bNdFNf24mwSSEhjfZmb",
  "key1": "4FHiL381Vy6Rii9YkhbTHENewvvBffNeonLQMeyb9Ns1pRrJeKkKHT5KU3w1xNk1voxG1WfowkLkF32eoCdh8PeU",
  "key2": "2a1sTt4JjkwJCmyBQWzb1PkJZdU3VECzyLQHRTC3GXQdFnfRSZF4pJWC8HTx6M3qJdzvKHL9bXSDMMepkkYQnAzj",
  "key3": "5cYiMTq4Lrx1MQNVkrBjGQQtEfXwdNu2yLrbkqnVW1wXDMJXeUsrV2o2QELieG3z21KK1B96QPXUG6QMasNa83cu",
  "key4": "2KDiTp3Loi8WX3ymhmzwo1BxQJLoz24AxukpF4C6PHFXbUpPW4q2oZtx4wGzEAdvHuWNNrdcS6hXCx37NxYahkpr",
  "key5": "4XsD44hjiMNacZ4gHezhLGWVmdodt9rBCjYLCzTYVqpTpicnBi55s7kyoVevBgaBaxeP3UikLJUa1mJV9hG4jsUi",
  "key6": "3Yyxz1q4t8WcKomKEKFxs2CmzK9Yhnp6e7tiHQveAPu6d27FHmFaGfoHVDJpvfTDLGjNYKZxH8KXtxJVmxNDe7wX",
  "key7": "4TfPAjJoxiA8PLRWTUQxk8o4W3Va3pC2BjEAieoQodS2FuTMFhFdqUr4BGC425dyNu6u7i6gsYnpejyJx1gyZytT",
  "key8": "2diSe14xmANnM7A2kVYgoHj3Fwacjy6G1TUeFRLhaX2HD4N4bDeW2qsRQ2FaHRKitdGEGr9ebb53ei2dD8FdVZRg",
  "key9": "4o8XyhnShtuWmaH4rbsbKdHt19uZ15kqdtVK6kGbVstT34P6JKibHPH5qVY7YecL7w35h6Mp7sAa9MCh6VDTZv3Z",
  "key10": "3xS8EAzZXhPXynQNbyZNdR4YcCKwXWFxKBXzzZdZLK7zDDXhaQmTygihLTXaBkQe1WJ6VTAJ7BCkcu8CEvE3V1b9",
  "key11": "7KkpRm2BR9is5HHELnqr7eBWnpspmTdtFcjJYuEsc2ygHZGzJxP6BBjjzMZF19xj3tqUjHAXL7zPUYDb8UP2JQg",
  "key12": "3cHoN8nPSpHzDJomRsbq5FJ95S9zkCZarzJGVyUt1WTQd3NQmooSmngEur3PJnuhXzVa3TEU5wLHtmmzwLvgKSLw",
  "key13": "4AFs59WpRs39k8x71i4xGanVTqotrmEL9HDoTyX5227iioEuQpG82MdT1AXCK7pRgGcDNsgE3QY3UPFc5MuvHvoF",
  "key14": "3ZY31ye9gUgSfEsVDo1EMmF3KZhEK8BmsWKLsze4EhTQ8XPPAXKwCQf83JoLMhppLFRbuCqc6bqunLcNYPFMfQ3P",
  "key15": "595YHLqghikK8GL5qWWs2ad8FrGkHLc2JPT37LTTusivxenYnbUReUnDzsPBjHrDe7RvEKWaBDMYdcmFR9uJ2Q7e",
  "key16": "3i6Z8X5MfmW5jwN6mmU2mxQoDHbFB8nWh8ui5rwVfyTY5DoH6dh9LtJTKy3yB1CXrCRMPw3niE8S5jYui4bLRd4F",
  "key17": "4hVbLHt14QTBiA8EcSA3CSG2eGJ4vkWjmJqUcjLeLYp3oSPqZr6EXtpE9TdwPgumPnLb66K7rmi9us42WZ2kxQ6A",
  "key18": "2bb4ci13zypTs3LwxhspPGDq3XB1WrqrKTyFM66pdQ3fDxWDmfsfjd6txeGLvVJkfnEbRrLpQctbWFdKxncfdnYc",
  "key19": "46ReNoqx1GGW7zzDKX73B37gjVygM4Ce3adsnqDigj7c46GSCcoko7aveGAEAJL1VG7KhXhyA6fmQQbTMECXCRSF",
  "key20": "cpS6JswPSJed47CG6bFuEavgqtwbeMQZp6CxkJNvvMweSjnYdE5PU4mtLhgdBgfYzBowFPiUdfx5g7g5eoBs8wN",
  "key21": "YSc7SudN9iqF5QeUt4k8dVUVjvyNtm1hF4SUWfDQiv9iirPhsjtsHmCtNKDAQg37FedxkuyNWvRvtfepsodraFv",
  "key22": "32qWLpuM14oJTcByWapvgbNgU3yBzo6APpJmUURbS8dwsYRcfUhUFQGTsxbqBD1SLzrS1dMCtiQmkmu8vMcUuUqV",
  "key23": "275yyaxd8U9ngPAYYhsiGR83MDU3UxmAeSbXReJC2ksgjn5ZBwy9tipxYECwKL3x9RWxQRfPVwTpVGzx1yW517wT",
  "key24": "SyDPKdKHR4D79mb2nmRBTjAfkwbxjuGUPH3vbXt6Kw26EsJ6B14pEeR1TRH3DpdZKiP8QhwFfhPwz3xy8EL9573",
  "key25": "4BcVaNqT9gLY3TkypEE9sut7EFC9Bz84bLiY4pwKcadbH4dtHzAzEu4oAZ7qkZD5owFcbRmzub1cYPE4are6cN6u",
  "key26": "2Q7dHuukB6ZbRMfw6CtRFq1xn9YNqD184rcftechHssaH893MziG4zMAZPbEkq88t2cFt7Fq8E5KMUYuF4Yt9Czg",
  "key27": "FACcqniyjp949j1jMb4YYPRau7GimPsqfdMi9numAz6GC8YivqELAFFjrv6Pb1B5hFxpcCYW1mNbR99MeFi9GiG",
  "key28": "41mKsQTFbGQJku9qNdbx8K5DG82dzSJJSZ2Mx5cbyUQVXcEcsLNAbNrKW67Py6wkijGNY5os2B6Pxe7u7WM8mxsa",
  "key29": "5nMrqVqa8GSo9SejYnoFqXWnHv1BBrMrdthi472pAPjNjFEf99kpUhxK3CS452ihW4VCqa9T3skVitZfBBhVUBmb",
  "key30": "26bcfye8D5bt5MMfcgrRbTzimLmi381vRUEcDBYqKKbQUACXegN6DrSPkbYb3HpRY6LoouZuyjN5QGifMA8c3cP3",
  "key31": "3xNApm9yTRjsR5PQFNBG5gmNp8HQ4RBK9jMzQT1sjCB6QV6wfwe9B4SaFspVUT3yAAv9BswCVYAckNbosAHofS21",
  "key32": "4yppFBXjftbuUH1Vu9XUD2QbPdmUYhRxkizgb49w5iagJTRDLgSiKVsTehw2NMCiLra1hse9q7zL6J3xCN9MuAM8",
  "key33": "2FLiuQZwSDh7uNCBtrmqZX87DrZPFMQARpfRxboVAfXxbKAvRcYaecJwsfjBD4omjqDG8d92be9fiVR1N95z8FKd",
  "key34": "mAJh8KLxQ9ihtftQdJZuXMKJEidQfUzdNgaJYqRtakUZUoFjBUe3xKsfC3ZAjEGaSp1vvNZ2qxc1FT7FL9JdzEF",
  "key35": "mrqQzdQktUQyk1imxDkMeKU5rs1ks3GewiYhBRhVs8bsX4NbW5Frm3c5WzM1zzrkqeBA8uw8gc9gJ5EKQKv2F4a",
  "key36": "2Uxgpim2bmiPNUbFvqHvAAewwT4cMPKjYEYqoK9Q3qp72dg3wg2XBHDZYqgHuJJgwzdSonmtM8GLQQ2EFR9YJaqQ",
  "key37": "2rerXBJjwo5ZVqCUKfHWY9fmA5NasoUnjkMQxGdW6H9vKCbVsT6M2JTM5ZkbbFmTGFc4WiXetyzLeERrT6Aor7xF",
  "key38": "KC5vKvASJUhXNUQ7aWPGBUyuxLoc8u3S81jd8DPySsMw5Xph5FH85gn7ewLQcjpGY1ukztGA6JpZyix1WCdcrbR",
  "key39": "46W3jeNDPYYsizdXtN8WRQRaJqJ1YCsRqhHXnNGcy6HzLC8AqdDcQSsCmxvrZSXngnw6RZLF9ccGQxAs1xuJ4oww",
  "key40": "4D1vyTvbPhGr6AfDCr524ZSMjxowr8Xa35PtFHZRbGPnsZLDX7LsDqJHRJ1EDe31P8G1ezkQWu9PgZHHXLtxZ8ui",
  "key41": "3mrZKf7myCZABgAVjbNQX9LMa59yr6f2MPwiDVb1mfffbLZ3UQqxYmAv5SX4exFwhuCP5cGXTY4Y3PxvHPK8B4Bh",
  "key42": "2RSgoPvtsGESd17zPnTv9xm8FqNsqxoAisYMh9gTrBbDPbw1oPjGLUhU6i9WkYHrZRWpf5VfRw12EYPnBvbFg451",
  "key43": "2axYJv2A2BzkNj6SUZLY3HsBpLJ7rzA7cgGAs5qPp3fecwEVE3rwqknLpAZQ1zsUUscLGo92Fqw36RFeJkV9vd5S",
  "key44": "3Q1LZQHpMAE2DJtjq3HVLrrJsL5SFfTesMS5yqam4DsFM8gAYYofHjeLt8wdHFKaY43rUmSxNfVFnMLAFpzeSsn2",
  "key45": "5pagJx435Tanh46ivRTKaQA29juZhyYN6rzcTJMt8qDej82MR4DMSnmMWYU4SN6UGqfq4QmxMUmuZcVLpMNS9H5f",
  "key46": "4RqbrzQ5VWgfFTsSsAzF72AFBZBMeP1vjM6bB1hEwQmNcJbRxcBmQRaB7cANgPmjik7kb2hdppG27nYnFBJNrbV7"
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
