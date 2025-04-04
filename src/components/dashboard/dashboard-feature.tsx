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
    "25CHiuniYitniGg8QEx98uE2oMG4vhhCGdx75xvEpfnukaujDvXoFWkWTrw2niTs4zby6fRsomEWuPrJ7EnDarf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1tfPFnwc5pvEbJCwzibZRqh96G7SQAHTeJUEjwVnTLMt2RaVjPnmVG5a1s4JFxC6Jq4Y7tzWfs98BmWQPYFrBM",
  "key1": "2FMBKPstGZHkuoizHSgykEHxBfBwkwLiUcWBtXy1x3eNQTogTYNWff4A7GJsjTb6V5M8Ubk9E7bpsjchbw2PcDHg",
  "key2": "5F2FSRtHLYatKnhwtLL6cfgJbGmhbwcp6DH7xDkoTHTQsrv6a7U15RCs7QXGLviotTcxJHckTLjk6LbUw7JXmv3h",
  "key3": "5yujD6TZZis4Yxs5SHepCVpAs2Pm7UwRqYUrRfwe7bGoyoumhTmqpekfQWfUpS88spj3QJm1beNXeFLArWbzEQuL",
  "key4": "iCchvEPCLL34kHcpVEzqMU1SZ1fZcBKUQG9KMEam9mG1jjRFRqwXGMg5veaPuL11xAaccjKV8X3FX11wqvAgVMd",
  "key5": "4AXnJgfUPDVGLTVYza1qRzGWnQkzoZ1nLzjYxzrmrtFJDfG8nkV44LARQsQ7YucH5ZaLjDc3G1EPVuezwLBcXebs",
  "key6": "4zzWTvaVuQhnycjLExeEb3dqMKxic1is46iDero5m8Rt54bvZ8S2nSGsRHJhdq72AP1DEvYzwqXGsunWLHLYYCBW",
  "key7": "2rPxV5yXG5VbRFW44podGW2Rtpioh3iF6kLzeQKP5SyrWWxW3WN3BQNfyq2ZmC79uNewfP1cABNZDzutqiVtJbj9",
  "key8": "5cMuWMUZaJF7q2naWLC9mMmE1AHUiZPSPg7BDbB4RuPrNmVSMEVBMTLzneVacrGd643k4djJRm3y8VGqKfRHhFyf",
  "key9": "2UjLGo6XRRZqLJCpL2is8zZtbdtvAkqmUseZZSrABnxKye2i8yiCWZKv8ApqqHuWDg2wyaZueuZdoAjoyoihSeWa",
  "key10": "48wLn1G271g4WzptFeH5gwes2nKW9TQdLQu3N1FqrcHdAb94HoHDmrV3FCc2nKyUofSB4DjYvSEWfJVuNTo6qdAk",
  "key11": "5gUdTM6w4YV4QQLUtEpcyqkm279GQfGFESTixwoMmpa8e5YSNXQ8raCj8J541p2P47khVK7UBbzr6Xq4yC7ucUFr",
  "key12": "4nczd6WvhgzdypzHfv5qXGqissEisyhuAsVg287cpEmmSrv3bmJ8gA2Y12T65rySn5GYuBmGZcUYDgD4jmKGWLrk",
  "key13": "5YBNUFpCjsvdAhJhHAYQEfh2MKGNBpD8gcf2LRVE1KTFHgayjc4qfoDnFrFWKwPktPwJAWFrpVk4iG7r7aJQ95uM",
  "key14": "3kgvy91U5iKCsV8jZhXsQYzp77C2AdLBCGADT1qfVnhSfW4337NkckSWGicysfoU649hD2xoNFxnXzR87EagR55v",
  "key15": "2xD6JAL5i1DYuMuzZbfBP3dJpCYGnwd5CNxAbdJsdaSAeezhugRYRjoaey51SS1WaKMemLsgDLGQxHmeREU9pDc1",
  "key16": "1Cd2eqThhEYiyh8FQX2wXRU2uJ6KUsW98zBhG5VabCeNDn41Z8i4Fmw5inteHWSLbPBKJ8m4wg7cgZb9Do5KjBk",
  "key17": "3UDxPoo8rdhTh8HRoJcpbfgGL1pP7X62JdtpfFMSxY6Y7SthkMvXuH35DsNzJhqKqtHnJ3x9Q83zDo6HCVy3dEtR",
  "key18": "2uRGq3wwy9ghTBiRyH5oUedCvxmkocEta2SSEEzX4duHgdvXfLZbUFaSnFfxfB3oBudCzgPvBKJTqz7qGU73ehXV",
  "key19": "63k13rBjGvDxXTENzrFMttxa9kNxqJABEkA6Gg9NMdNNjAdSSUMjZ3C1LzY4S6JHJfFhECgck5d9j8iqcc8PGwPa",
  "key20": "2Qp4jV353eWmQEHUkFnkA7FR1JzasWqUxV73sJ1dwb48bD9V84FbBkQi9USpFdgE3uEHGmEG3MKHYqbRySPdRgyN",
  "key21": "4t1whkSQ81hgWBrptG5HsPUp5VxWr6dMURReRoz6WLn5CmvG5nCZt4A8GgNDkepKf7dLzqxVwNicmvh2PJ3e5q2v",
  "key22": "E1WJSu64SUs8a7RSkLGNY8jX5QXWWTg197NnxR2Q5e4e9xq3sEQu6JNeb61yoRahY6sDjJPAhzhuhaBnwuqmDA3",
  "key23": "3ymr2y669UiffqnmWyb9L6Pqa4AcTQR4hBgKZgn5cTN4Kv2gvCxuHxz6PwAr39oaiYMpXs4TEkQrwvwcBmZFPGUX",
  "key24": "3gyBHqfrb7Ui5AxHuMVHiGY2JHEzeTDwrayw1S7qFj65bPins8vT3BthZwt2GRpdthdoCSBAcVs1Cjy2ZLXnjXXE",
  "key25": "2afCfxEfEe9wqtP6aowkAXb5TiUcuWnuB96nwhZMYtCz4XfK5hzXsqY51tCSUdiykYXhys4XYQWWDt8KQwJbeDSm",
  "key26": "3ytCn6gnVuU1N3GL8htCyPKkrsHvCzuqyMuDBe32ADGTNiGyMfFKZW6CXrgAUFax6FCR8KcVudM1FoG8rNQ5ndnh",
  "key27": "2zc3oJiwjJDMH4f5WTc2PkqajwFkDNPh2CdfSKmBs9aRJDosHYnDVoQgz9VAgvYyGHvLRrF6W669E14N5jShqmPU",
  "key28": "KzvJPNS3Nb8hdvmZYFnQFi51a58cfWf9CPJY14VdiNxcfw7jN6bMogGVYEeiFzSemRa8uGzfuP6FMsZ6kfcBS1B",
  "key29": "4mgK4S2PSt1JMSUwVRfhzWnetkzNjUR8bV98fhSr6Hh5a2hpPqUY45TSK8EQUXD2ReYHdNGqDNn63uRCvu18FTTw",
  "key30": "PqjdBrqRgtjy466XFsm4fTBswjpUCbi3joCpL5KpTrLC8DKk4wXhBFqUYLtTPohbCuQHCZ8bQwHn5qLv3PySEM8",
  "key31": "4Q2UgJMDa2MaZatqtqMRM2E5dopjUqFr9FoEjQsH29xpgSjieuZBTcmHdhgfRi2vFvpUtiEpBfExbR7FA8iBscDo",
  "key32": "q2x1JEDtwKtVtTbHdScc6HJzGPydrzMmuD9qwgEqUe2QCU1AzMVQiEQQqVQiregQYVNHyJWEywiXCaPLEL79bGE",
  "key33": "2UbEGjQ1xJ4yV3UH9uHBLiF6YE6q2TJg7H6kWv61rt3CpFAUG7MZKGDJeDCUMPLE67mB3GnoqJzeRQf7ZriYfHiE",
  "key34": "3JT1caJ3nUjDZPL1UT1CZDTaQa6BNpsogejSGvC6kcbmYpU4aBKn4xrqrqNsoVi8kmi1bZj5YGpbPnFhvPyJ3xYu",
  "key35": "VNP57JCMMV8VUeCzPetJThHqfEg1xtcRzpfEnJKfp3Go7M1ntHuqV284bQhZ6tv7nnn2NsPNdvkwtWcqFzuuXmQ",
  "key36": "5bmQqnZGi4v3A4veArLQc3pWkAEZxmETya27WQ4EiXpV56x1UMF4qRJd2ZkGZSaTMJgzuc2VzP6QPqePkyN53od",
  "key37": "2ZAjZsqD299DfqXJEnqceus7HzTufmtGsoXKVYdRebxsBTro9y5bfkutQZ1bgeWpLTqpwsJ41xao5eZceSLgoM4s",
  "key38": "363Gt2K3QpT54P2Lk5dFca2Kv2NGrtWxJ5DdKPmg87ke94FZXTW2RQprvt4CLzgShmoJEYyFnsJv2ZpMWViRturE",
  "key39": "2jvZVhuVgdEcHQpS9J7V13dbabTi5aaJTk3wZEc3T1Vf2SKxxnfeEW3mLQYUxbUdBZ1rr4PNKyYscjt1jnnUYh4A",
  "key40": "5tgmdkrmjxRreKtWynRen7WVgF7G6XLD3UPF4gYXzVn3KVWYNQHzQsRJCqXUU5U7Esr8s147aLFDrQyfHVj1GJ64",
  "key41": "jGjBs5RnH3yEDfmBLKxqyCVB1NVqz27YqdpoueRU56v7smsgeesPae5fQsCyDbFHR3jiMFmJJtVQpGX4DYD72Jy",
  "key42": "2RjT4DNgH8AjxWcQ6uap7PTm4svnA6cB4oeiTwJnCuNSHY2gb2MUgMayzP7t5j9VWR5jUTrvPnxBxjwVCcAE8Cxg",
  "key43": "25J5uPki5b5tZ52Fv2cRBPK7Es9W8Jr78Nq7VWr9fWqb4GTtc5GFymkqcM5MjnKbxALqrTZLENUnGR96coBvJhXt",
  "key44": "4t7xhMvH7ViS6NwUmXr7HCQELAGDitWqxbMTN6krgcCZ1m3Mk2PLwKdVHLpoDi91N14nxzLfQuoAbdpXWKSpxpzx",
  "key45": "5ayNzGFTRxjz4VWSiGYhuLpJP9kJtHsXa5mAh3Jyn8Srh8Ky4YSVKaJ7pbhopBvCVCgFNuscR7J7zWAB1Vg5ZnV8",
  "key46": "4ZD7R1zS1dsfTr9qLTBW6bUqHhohM6Jsp1z1zUW3KRX5r9yp3Ge3MXvWsa7cmF8b2xHysnYanh9mDXp56hr7mEtY",
  "key47": "iURmbUrSdwL1mXDSn1ZXzzh4hzRPRCpLqkFBvwYT8bTC1KsehaqRugM4HeLgXKmssAJsNpb2J6FjfvDNtS7xQkt",
  "key48": "4tUnUMh8KMMZmUCS8mVCLRFEbqHrSNa2Cs3FN3KsUZ7X9QLHsHnzPMFd2p7gqJAzTvw4N5U63HNe5gJzMhK1uoHg",
  "key49": "3FCqEEw1BXM2Bvi7HX9dJA5rnguzNTuRwDarqJohVNs1Dr1zcvtNPGNGPEee531RBUwjjjLRC4bsHhPcrtEw1KSm"
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
