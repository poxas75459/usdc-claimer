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
    "4UxDJxannh7zYqBB3P3PMxtDezdR1Q7Pdzuj465kLgkB9iH1iMCN8WpntqQ5E9nsqSoQgNhHLCEU7AWvbGwse3Xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VW6dRk5vdsHHmm5pyaXkXPM1RrKZ96FZ6QUnBctAHnU8uM47S3pyg1GCvtCFdw2GYHbJFif4UBTdQf2YkGiE5NL",
  "key1": "bt836TzprxJr54LUKjjBqKzGi1r58A49jVF75vU8hJVoLnokMYPrdECakD8EAhU3r5ACDpJRAxoWWDdc2qfGjaz",
  "key2": "KpNXsowcRb2nLzSiUw1GZe9tCouDkGkVx5ioEE3FDE1Hsh4jmKerzULZQJ4b4BSc3xGyi83DyWaV3YcS1vGxxtg",
  "key3": "4FaDqJ2Qn263HJ948BMLZgMV9TRCpMkwkUNrviYUNoG7in8X5ZKH86XyGnGdBwT1gU17tAJRDXoVHQw9rpApVCiG",
  "key4": "221qK9V7ar6iZNjhqJ24dfyGgmG9UMy87vbFbnKbcgTwuZbky5AajL9WXPkHjvSjKgYU8Ptvd1avpWg3dSBniQmq",
  "key5": "44ryqQ8YCE1Njq76YWyhxKuWRgJEL7KhsjYHzQ4MKUDugvRqPMazJjsJMX5S6oHCg4j2vjHEnBcvCtbzAkekVuRp",
  "key6": "xTT3ARmP6Y3QcLvN87bUJm2WtMV8K2GPbuPyLghuQ3L5qQ4MWahqvEbEx3qKH46Zd2ndewPpdqnkhb5dYXGCXxf",
  "key7": "3NgePJ8fenABkdzuyXzKdZ7LzPKCHgPakUk9v2eEZzgNst49eAAZgrCxMfEmm5Nti1gXRNqgXcxbyGcmVVRQBtXr",
  "key8": "SqUjdQp9dUFnsMfwTfX2ALxW2ue3QD5DxyxWtjGquePak22KckB1hQjAcpW97995MCq6enYaznecHKNGWc9kujB",
  "key9": "hknrehfUGSKZ8xCcaVsMB9FAU2VqQq9Kfhk5nxPHHECVBwMBwPcLs7C3upP1rLFzEiaqsWzYrZn4q2VWef788jr",
  "key10": "4DSNLydxvmHUfBDBvHJCDi49Hart2mbTgtu58i75Uyw2UeJpCNGVfL4w1kYmN2MUQCJ1L1tFLPf479axS4fxfA91",
  "key11": "3kpDw5uY244HRDchV2hJyEER6j1riYzQhxLtKb7hGbW1pCJYXVvTv5WPSMMd4SWvKqwKdVhabsuxKDU9gkBeWkjo",
  "key12": "56ao8TnX3gBh4iKWowMWyFtxfsQRFpZjGbR1emjHYNHa6GxpCEikEL6mN1QJdcAaaXzz1tsjAuJ3vFqsLiVaRYpj",
  "key13": "3STA3AcNx3weJXmokR2Nydxcw385hHwQPc5T1qsrnk5gEbKnzq3tNUqqqc3eeWWEHJyASZAxLPGWLPpj9oRasHRG",
  "key14": "2fhF3ucM7b3yFstHz5Y1pcJ9ycSKQLkLZDbgL8JyLuiuSwjfXX5QrKs2q2K66VYwNqACRcvirt8WQ5GF2xNwZqrF",
  "key15": "22YeX1FV8z38xgYom6qd19xPbSmpALpEJS8Q1n3wnPfBXhjSDkLM7trbvRYnETr16x6roYocjEuffcJSacmpbgGS",
  "key16": "2v3i1g9a3rNtgKQPJL6x5LjU3XWFdnxFAzdKjZ8qP5ge5kYMqA35PYwKcCvHKZqiY21E1JKTTxmZzihnD4YXnawC",
  "key17": "2DHiB3JSKkTv3eMX1iEHvo7gMdPKkdn7DmqgbVeYGsW7CPz5zwjb7MwAFaoJfE9xN1qB3Fs9SWJQHmowGX3FV8gY",
  "key18": "JLyMx8sRHLrySzGdohXK1ZZJq5XWqNnsoemCa8sxtBbhq9Kw2LhG8eyxshm8AAVNRK7sFK2YC4pz5xW7X8C7Lsg",
  "key19": "SPKSRfDBT81oF1WJmbdr5pAr4zU2Hw1rRj6aAngkM8Vo9TQ5wYV9YvCghjSfKwRW6eTHuWykysAdMpFiL2SmG7a",
  "key20": "2TdEwscsQ3FucgVp5Pp5tSLhr47L9mFLwiJ7jusWFPvxECYz83DwWidyNzZS7Vd53rWccwfaJPARMS3Dtm1zXrqP",
  "key21": "54aiHXKYkJnmYCxPCnW41weBEoCwVZSCkkvDd3khREVbN5cwcC7SXq3wFKXcVV52xkdpQpot2NJa2V2uhom8TZSH",
  "key22": "65QCdqnx55j4ZfyNd4LWsxKDkPdD8bh4k4Vx2AUsHewUuzAEtQcvaER8y2Wni7NJHdxTiYqSHMiJ5paf2KzUGpBw",
  "key23": "54RfabZuJAmojbsP3it1hGbe3tLeGKvjp46cC8BC7m6sYG5kKP2AfcF2mw9ThHSAEvaZ99ii1K1BmnUjprJhr3vR",
  "key24": "3EpT9mtsLW8vMc2urX1H3uiPMEWCSR38LxsDX7zco5WpLXkmJDxKw9GPa3Vs48nGC46XQWiqubekAbSMR4zzgfn7",
  "key25": "2E13SATCbzqEaMiBqK3F8kjMH9aMA63ZiWkqCRPqRyiLUowvHWBKLm6ZVsxTFdAqvyr7eCFr6a8KHpZy9KtoRCDG",
  "key26": "31FRHVnEKLpVoLVaVQAKgTxoLR7qTwbe6CGZS6B7ejHip2Kpt4SUz4VreKjxGJLo7boai6pco2wCEVPCSjXEuwwN",
  "key27": "4oEQgKVumX4qGxiDvz5C3UEqoEuZhA96RPXjJ3EMtwcdm67uuUZLKdMNrKyNBDFjeY5JjuUsegQ842q5QU5B2CWH",
  "key28": "3tvSkMLqcDgSMqrPavjNgMUZ6GVBmbDsFrq3h3Hmy9sJ7wrmgpBiBF96JRqvdvCpogEvoH6AxUBpV2EsQyTMLX7c",
  "key29": "3M8ZRY7MHgLXYDadDMp9D2hpjVxVwTNoygTu168bG9qgWGts2o8SRmiBJQLZWZQT1hgQVXi4cNsBvYoQZkkMLrKA",
  "key30": "4hqSkCXjGEtjqBBbJvt3XTVJ6Vi1FL8oxdxicVvP5xTTbYSWfbz25SJmgvCCU1irKNmhThFUJeJ5F1dyR6EEx9de",
  "key31": "6QgVRA5tCegfzHNkU2EN1WT6xuE6p8RZNVhMLR3oDCRHXwqwwMaBcANhjQiQGUxi38i3qADN9pQq3ZPFaZ1yGAG",
  "key32": "5EUMabmVKwq9RKkT22p7QvCYtxeHqEEkzThXvKQhMy4XQaxp7Ch3L9jbq1V8SKTnkQhtPvKP7AGTWMsjui5xJTqT",
  "key33": "3Sgd9zBkzsYtDU6Fpyn8J8KtwCE7C2bJZUSkAa5yPePfiDG9o4i162XyDUvUZoJRdJ7DcPk3j8XawUkikYgZc5sn",
  "key34": "RH5aFzPvLYyAYewaizry1MiWHEAVZDt7pJ1JC4kBGWgWY29qwm9VqWweU8vrknQQ4cZR5R6VACwP3YYG2oyU8EP",
  "key35": "4XrkaHM18xVBzAo46LrYpUEVGmbhrjgzJLw6ZiC26vs2g68GwsVmwkBZc9cLkwL6iXyW6PQnoatWmL4dyquGY5ti",
  "key36": "4wUw5ZBGDq9Vf7Ee7QmfrGrNnuuakXRfVUFdXxfvTTW4gZVzvNLHJ2keJUmi6NWGBk6H98E3F7tV4YF43gAHwCAN",
  "key37": "5jaU4YXqkjGWAckB2MMrFyg6SXs44UAzZcZ6BUGk3sitsdCse5SHEg2omWQuQYivyZegs1RGj4e3Sj2zr65MPMcY",
  "key38": "4mPhyc7RvEtjshaTqarTfc3Noix3ze14qP2cLooGmfVvBR6FnvLTRpMpieCxd69nXNaSjrnYwHqCbZL9fyfm9R9u",
  "key39": "25fDuLfBFLQC5aP3MSkuah2Zygp41SAmdjfZh77STFiodJAB98oGUMnDJijHgYL4kddmd84Hx5CTn4fgnTepav3c",
  "key40": "5D9eRS5krdga5pk96rLUdbSFjjbBvQnSmrsGadS9Jpfvno4VFT6H5qz7jYryZU7N3nTZtpCwBxat4h6JfAZgv55y",
  "key41": "KswsN6p18kLVNuHrmoQEoGiJ7Awz9DEA6LryeCCJazLd7L3LD4eYYmh7cgB6VvmfNa8MSLrPQhE6DZxHVp5RjMT",
  "key42": "4PRFWJddWPZgnS1izp944yjiWN1YY5dzKEQaHUwCw1JRXJwbsNMbT88tRQZ1mXEX4zxydZVNuCzULDC5QMokzhJX",
  "key43": "mVNxiWyT3q5yQE48Z3wTrCGsxKMSppSJpsPXiYUs2h7i78hmqTwtVHRbiH6vTEgzocxzPyWpu4ZJuS8endAcSqb",
  "key44": "59TJxZuUd6srTkY9aAPNCLH9UqPuz5vgdaxU2skS88pHvX9beWjomCvzgdzL8BHziatkdGaVYezn17eQxsqgeDnq",
  "key45": "2ZwuuSKyqfHiQBfnzrLSC3jPABHgUw4uydZNYrERfJLuaXUcgRMWu4WP889YwzYVxveizLYTua1BugNDqmaBtwh6"
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
