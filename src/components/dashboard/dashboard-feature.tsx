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
    "33eTtmq5raRN6YGu9vpUhhtikoE2Yn7WbPCBQidbcHrayy2Msu1Z9EPPqZ7A9pLKZf1m7osYyzhRCmNKrZ1aY6Bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31on6YRcZkQetBiHePUcNwp6Des2mpTvSB8qEg3s7zusEZ67PFUb3Ld9pEUy4gTy7LmX4xt6jmdrddm4Wmdt8U6F",
  "key1": "3kBycyp8Yp6Fp5W3dFnjnwv4tuJU2ZxYtQ4oFNfqt7QCxUvUybd2Z5LtCUccMSXZheqhKJNVLf2FcL4ck95Hvjwj",
  "key2": "2JpjWZAX53P4KoeeRdnSo4RVsYaSVM4RyjtKv6E7HMt2zCtapPouVu4z5JsktkK6x7rshqspaTDGFp2Jf8yikXCM",
  "key3": "DM2n5oUW7hu43ZwwTD8THrWFDR15b2CWrJxiTRrqLmcaP4YLcoUivTdHkoy3DH2Mkzcx8rXkW8JMMM3ff3hE4pz",
  "key4": "5sRSYsAL2ndU9TsJPZ79LwTijR94NsmRwPBFFHW1UxDqjXoHz8Ba8UuUKtgdye2ucKrMvahqKE6KQUBa7SkErHxi",
  "key5": "4n36dim2qYFaoQisH4Xw65bapiJChrZLVRXXrohBVquzM39gATNJHSMhn72sgpqaWjWogoTSA7mLkJyRVUDpfN9p",
  "key6": "3rZNQi6E53wh5yVmncpeGGVpZm1e6p4ehqWpT3s9xDTocSrSG3z21rcSHxeatDYsQzS1vkRVqTt3Xp7DPbfKb93W",
  "key7": "2CDKZ1Qtku12T5AJJzqUzLcCFoEAdLezxjpMpWoJH1qcxYSLZTNN6cCgnx1Few1ULKVNoWSWs5BM8q4aqzUSipNA",
  "key8": "52uo9v2zWPRp1sCrj7BQT9STnkXzSfuHT3uD9y6mhdUrJjcFsNjVHD714LrzgzLTdBWf3b9twg3uo3NUsGX7y4hk",
  "key9": "bGn5kJMFzvLXijCzXjM5uqbjRaj4oqCPpyZYa7zx3TiMspQVuBEWzK3B8F9HRiZiLdMgM4b69pketSCLa93hnZh",
  "key10": "43yMz777uSYhnUomuXzKWhAyPdWfJgAVEuyEuQsj9uZ3nEGjeJUKBK8N3WioehkmcHZFbckjYbm4Qio1pjWtLyxc",
  "key11": "4V8HSKj8jT1aew2epJ1wsxJaDUYi98oV38RAxrdJLoNe6byfMu4aYHsPPPSTWMc6LDwiAqwo6rMiEo5EfJWdDC18",
  "key12": "4XWNokLWVkYapxpVboLbR5JHypLtJT3jmSdNdk3pW69L9FqmAvheBjYxKeejXUGBA9gCvkCNQrDoyGWVk8jq2RNr",
  "key13": "4xM9mpPqQYAQGyrCF6zoSZuzuPPzdmR1rR7pBsE1ufPLy6VJjETfeFoS47iEXDNTX1psRDSWeVJXdgLJvuZ5pyfG",
  "key14": "4nY5NBFBfutqApuiqkbqDAhdTvLLgrPz67xa1fYJW8xFrwfskBTmSXcMYXjfa1nuQnmKBhgrzMwyWRfcDfUqU429",
  "key15": "21PGXpGz7tRamGLzMTKUQhpQeBPyFzSpR3D7yeQ2Jsg2DgGM6KsUT8tLF9mjRn8GcBqJKqFbpwk1umf54vQWYGc3",
  "key16": "3HQWcwwWq5qm11DXabuQEi57XK35Q9qDBLy5KHXPGDiotNp26xKxRkQAPX2hPEZiZmuDEno8ZquiQoynuATjH7Pc",
  "key17": "67BjYxhP3PkKg9GiNVqYXPYZPRTCS5ZBTjFFUTN4kHG9kbEiAAqjLVzaooHmXAtQSPtFBhG3BRiAdbCH64EJxNhd",
  "key18": "3EDBcS1pyzNWTBTWqogaayk6s49Croe49GMAK8E5EaKTRZP4F9SGy2EYo981QKi3H2knKQNKJTjmJg5Ey5EiTG9m",
  "key19": "5KnwzNAgGqanyjRSbd1SE6cFnWuLhdNiiSekC9GpgEcAbB4e6ctiYc3MiFwwDJPPnrgtvjqR5rsmJd98emZfV8dF",
  "key20": "3mWQQmxaHvCxDSnLTaQhwp1jycDsLDMSkSNPxdMGLUjiA1wEXCNYxXNZ8o1U3QBxXi2shHZ32S8Tg6MfZiTWfrfe",
  "key21": "5twrXBo7GWH9Q3natN9Cd1pD56DRcY7m8QFJcZAF94ijuX8CXoq8mwqsBwJ2ck1k2RJ9GCNt6wpKm5ZCAggfnnnC",
  "key22": "3REbniBNxVYzbxDCq1nMSxxdUevpPi47QLe9d9GW2zoruJXJrKFYXZPZPK9an3PTYfjAg272Z8L9JWC2cY2LEk7n",
  "key23": "2PY3rnx7QxrDdsMvt4GEeNmaqwbfD2sQ1azmj61vG5euPX68rgVkPZXHLRA6euZyM21vboGtPbGir6SB7ezE9BYe",
  "key24": "2UNrhdChNxF6i9p8HrAGP7XExx54TU6kytzemkJWcn6bUUxfwuztLLrTJak2GRMDpvbbs21SQsZbSzsfK49JhHoX",
  "key25": "61bzMmmcwK7ra4wkTPr9WytjrTMZSpEaabn1TAZafEh9cbY3MzbvxdyychzQFxJEHo3bvFGjjsi8MRjuE5ZApvz2",
  "key26": "3Ni2ipNRJmv93mQYDvBvu5U8dpwMwQ2ziYcH3rAxuBGWMNTMngDtQRu2L7PfJXUsVHPMAQvubfhPUcSXepXwEVc1",
  "key27": "3U3cE9KmqwE7pgZM4SZxPRBp9PuCeNAEXrKnHXKtLnJnFKWudnE7rCYVDXrtAx6UK73DCwdNm16JfYSxpLSk1qh3",
  "key28": "3B4fcJTdUweRyLbvVYvkZNYjKw5kE6CKevNQsfeq1bWvCpUB6T9uJaskVZTPFtQ7xPXrZNMXWA8iT5NGMNddK1gq",
  "key29": "5qtYiP8ZCnd7D3TDNUjFBDx9ykBSRKEWfsWEHqDowzaLjzC8cx3kenpKQcea6mTTX44eFQ7eEMY5R7ggWctX9KRZ",
  "key30": "5PB1yVRRcy5YzX2DN7vgXwLY7qzHqiPcJUmEU2vcgfUTr6GunSkA3MehELXz2rzWvddTEDwWP4qNVuJtstGjLtVZ",
  "key31": "56vReyYaUm2XnyvzPWXYSNQbdojWGJ1Vov9PR9HSFSytTQPvEDNdcweLftchpLVWTaJxrTPVC1viEV2KDweCT5eM",
  "key32": "5zTdAw7fLAbmGuTAFuroi8vTaLURBRnrgEGhxpvRVReiA3VtAoM4PdtEqNGoPwiEu74d9kXxJdBWG48E23QQQMDi",
  "key33": "5AT49biL9m24oHpWgtBNa4K2o2UfnmqQMUmUBxsDfhbDK3uoe9fGXKyB76crjU3pYB3YeFtz3RLfX4GfLKjtbJmJ",
  "key34": "G83B5ecwVBw6AyB1CvWqdi8qz9SDTa3ZzwCLDCpMTgm4sEYTJQC91SdaMUgNgxKSRZoWKDD1tvs9Qzk3bXLcbky",
  "key35": "2FsDJudqz5rFunvtezZ7BrPLsrvaDJVPuDrRnEgNWttQH6r8NniB97hzHSfGCG85d1hsmn9EKjnPaZSVxAxuwQdS",
  "key36": "4iqbEB8D8e2DRufFs76tFVXjbhq1GnGCCd8oy9yQYc5u6j54FfywTPoJEdcdZiYtYiNwhJyV3cTXyDGBDzRtTqbB",
  "key37": "2v36Ec3jXHNx4VyTNUhTcdsZS4ae3Er53tHUFLd7D3FRbZfV1UZYGj6RdYLAnUohSVALAPsT5PuBCwQ5TGkaMqBf",
  "key38": "FBqkJaP7WJsEFKYg9t32F9i3HjT35Q8EJqYPsZKbnL85M71gsDWeguACW7CFxCPP2MEn9g9VrwUJPs9LydSQMhL",
  "key39": "515rgUMskp3GMTpdd6md6cqPHhoPqZFqHX3uHL6bXVWQR8hfieH8dhXBqGAhg4vPCGZxGMaNAtoyvyWTekN9ktRh",
  "key40": "5egSYteyGdGwHHm5BFWePjf9pvZjXeJRVYk5ff4XDSA79ysVUYvwUBVHUQY8h9mLQ55rPFUeG7Q4mfwAWkYq7ssM",
  "key41": "gXvWHRmEfVw7N32tG7CEVdkJeFhvMRm9FZXUj3GasSbHr7A8xeRZ4JzZQpgknLtUH7dQcqpF3UWq6Z9UJdN5Jew",
  "key42": "5ygwcozkdDjvyzMZsw57qGaECmQdoi7aniy3HKv559v5dZVjpsA4fkeknn7J4wkBr19fEaMvCd8z5UWCxfeEsMev",
  "key43": "4FHva5ZRGTmXYYdPj7ZSUzCV993id717bdWtB8UkB117Gp1nm4gRLPXuumoimgFWZEv6BLX6kum9QSiX2VUuuJAr",
  "key44": "5HX9FCKzsZVsGpwdhNEYbVpxTnMWKbhLd4u95X1tF7Co5vEx2ddZhysVqtxVrYtbpuatBsbmKnCrBGvPhb2vwNkc",
  "key45": "qTcTUXzU9Mj8w3YGx6iL9RL4qfFNhkvvoAaufuZfLNLTjjhMdx7SUwu5BexXpMpYJFGwkc3ptpGAmiwrGmfTY5L",
  "key46": "Y5EkU2h1bFhsx6E5wh954rN19yMoykGvnpYUcFQQ36ghAu5dkqcmbYufwNgjTZtnBFdEvDg4bZk23j4RJv1vgVX",
  "key47": "3WQtJ43n7GQsL4uUapdtBCKDpci6cc1A2RbRLzCFMmqwtzXoFucUarwSTFn2TXJSyafBGE5FN3KCAiWKh5Ya96um",
  "key48": "57Zqt2qVDkpyLtpNA8kvaoc8BvtCxCjgXQxyst8AMYMd4zftwQKjBBNuV7hoUu8KSMegNf5sVWejc66hjTBn9AiP"
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
