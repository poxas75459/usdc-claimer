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
    "5AFDAeUEacizUyFPM5ftrFHwq3QZ1sEDVDPCSDaiYpDZR4RpwAiDwB8GDvUpkeNLNizEDkDEmJi3kPg3Lhid3pUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzRaBrq295kRiCXfKF72ZsaSMZL7S9jD1cZ7obXLnVdcV1fP5z3whKkT9TbFSjatHUkcsYeVuoY9hTHoV122qT9",
  "key1": "JdCmYPawVWKsUZ6QxNjomV5RWbRerhhu4FS6UHHz3t2mJzfx2gscwtrFv9wcDUe17M5DpmnhySqsjP7WdRgGVL6",
  "key2": "5XHRgqYbob681WhF2LKp3zgiHRJ8XwbBLsFXojbgrggFtZSxyG94JPQuUb99SmbD1PEuBkGpyRMd5tZ7XCvSnGia",
  "key3": "3spnMvCUEUHJeWostWbF68kAFwtwj3YimKDeygRoZE9r3pkdWbdyKqY3VyvqEE45A5WoBmczwcAeogGJ2e81XPnY",
  "key4": "2A9XLfcnu8MmSmpp2RFe8r9y6d1SzfdokmaNyYS3wqoTExbr8CECgCrkRgE18S4PQk7v3D6HWtASQcj932zsKeYK",
  "key5": "5DqWcdWZvVMgz3UR5JQMH5R7ecq4zm1wfotNPzYSFKbdSUyy2bXhRQRrRAGiRxLDjmuewax9vAVNNUqsiNVe2e2z",
  "key6": "2U6s3ckn5kBUKbBrwxcemRWXKQcr4JK14a6iAtD68jFcLREQvVhyPS4EEGjEsxHgqBaGjkGxJBs2aX93QyYbqW9z",
  "key7": "2iy3A6Nei91fbeignswM4kwtny8UnwTnTAMVSfBAkgbsxePH1Dx2tqqFhxbdBfi2tPZBBKoeWp6T2LDXPM7dbGXX",
  "key8": "3rZ3snh97p8WQS6DwktK5fVMuong6AQza6awYkX93ku8EZpcnACZuvmFG7LRyvB36Xz4TmA9go9TgfEL8iFtR5nh",
  "key9": "3LxrN6v9iUDJXhgxQtsW4wrVymkcdEcX1LP3KNovgDZPBum6YXxMydNL3yEBrVDTNc4aUCMaSeEqFhha46NXyFcP",
  "key10": "4nR1KvbWWebMD5cqupbxgP7sZC778eA4wbe1dzjnd9G8rxkfpqvHhbZBoPvKuszRcoxQHz2wf1dEeTm61uc5DoAX",
  "key11": "5rhYdokWrRJsqnXd3edKJw5pcRf6npJvvdZcdSN4p9eTHFMPcQk6Z5Bd7zKih5MyKCveLPNPKPZm6oEQ2Mfb2az5",
  "key12": "6tLF89WSnKKys9qVRWK4a5N2HDiQB8UXH8CtyHv9WwkZ7wuq8fshccNiRBE8sH9N55YaqkN4NHi8tAfYHZt9b2V",
  "key13": "2cMqJ4pKPv4Qj8qQVRabb2YQNc38bdJcQ82R77fPNsDdHSnaMBvMTSeGogbvkFxiz1uS9thzBCswMTVWHFfpmnPH",
  "key14": "3vVbtFjdQzDhGBoLt7Hp9FHqPYwokBDktJND4pU1G3ne5tLymzVRLGxHDsRbu9BLrRdy3jh3N5T9kT9wuUoV43QS",
  "key15": "5ZKGcEfSrAs3WwkGmDuXEuzbkfveYRhkZe6mAbtqETKzPzE73BZtoEM6kvZeUZqZJ1qorrRmi4oYtAbg5nZdAjtD",
  "key16": "2L5UUnYQwP4c76Fw7Re3bMsXKUcnmQeUMvj5U7wp15f6ZR6ccUmaV1VkZZBi7728FwZscJx8dWhts1gVkLoH7qHx",
  "key17": "ThhWAWkjbeS7XH3YXYzzHYQcFyQmSxCRBP7LW2P64CK2heYVe3CzXd5EF2rNaY6xypR3ZMQz8uMQs5ZJcTannnF",
  "key18": "5zgHhifAztvJA4SxXWZuTTkpRGkBhhKUJMo512s1Q19MiE1JkSco5ep8nPgyV23TbyT6SJ3Wn2b6HptetAwZMe4U",
  "key19": "3MSSwFhfsKRtUR7hnFBhFdRwW3bXbAmC4HDhX5BXKjTNxVDNHghExcXCwyy76LHUAAXeM3wZy5T84zjtpjUYD2is",
  "key20": "5nQ2zB1oYYqkG2KhdnddAopHcyzi8Kq1EVh4rd5d5DP34gVnsS97WEFRnm5ms3vhnbJDJa861D2pJ6Di6jPJejcm",
  "key21": "4g9VHQmKhmuGNTAG9HEGrsvawJbFqU3NCqfTsfGeF6rpES24AJiD8xuQyePiKn5jqM6A6Rankb2qwR4MYw4C52T2",
  "key22": "4XMgo87QpnitVmK149szKbHADCWbmzrmNAkr6p9RsGSLnjkBQyMRvR4LwKMkpFxBEmeenkwojCN7qZcQSM8BobbN",
  "key23": "Q89keC3RsxTKxLjHVr1kAkLtAWsnFtKPBVVehE6oH5vT17mMGsWp7kvRyNzGZpMLoGAN9ufrZ2z9pTq9SKXKEhz",
  "key24": "swVyMQqzRXmewzY2oHH65iVLwaJG5svZuUZN1pzgTnR3mKFGNJZosQ7a3kZ5byUAuBaxRw29nDuDe9YbY7VuRqq",
  "key25": "Duj1UsonoSr7nL9k55vZvi24tm4KPBv4tLc6gUZDZAJFK7YSi3pKvAkYMHHJHy21EBBXpJWj49ps2XyoR6C65GG",
  "key26": "2S57F4DoysoFpQmskthH1NM8hV4odQzRR6gMfBiLjNCXSU1sfo2xFan2NWh6DNNhYMeQi9bywN2bw3ZQVYAziPZC",
  "key27": "4bGj7p8YUuoHmSfy83tnPrPDoHMZW5AReuvQTgot2KXC6cuduwLCKNh5nhUr661uzP92Ri7Y1FFmo7Jj2jrfrk7y",
  "key28": "2iaWjNCH7gkFyMurqcuUcRUtpmvETTCz2Vq8FMwj31SFvBHmxstJ6Nru2bpj877yKrEUhWicYrujhyxwvNEt2w6g",
  "key29": "2otu8zJ9UzLMiTiDB9Ng5qZExXB2rudj42Y4BNQmrp5WpVMmVjuZaq6Bhkg3MVinFhzer4Kr59KJwz99MKBvJtHj",
  "key30": "5Vf25SCcikCKuB8AhiM1rNY4tvisRmrqFDvLTFH4ha9qdbdrYgwEQd7wKWToNZFzvoHFo3XRKSuTq2Eg9pgXk1cN",
  "key31": "25cd8KMjrUJJ1rYm6PYVsmL7ABg3RyqwaxotXzYs6LvZHnGyuMU793p7D9Dbi9nLQ7XTULxMP8xJb34nBUxhpQ7K",
  "key32": "4WsgxHKcyQRus8VFzyAMVXvp5qxjdqAW4nR51kmJB3X2VL42N5TVmP5zqaCNyvnSPmE6MakDxx2ZDpZ54SqMyo7C",
  "key33": "233tLGpiKpyJS2hNcng5JAUDK3k23gVt8tdKy2ZdQSapq3wgG55LU7iPirYuxWWvdEa3ZQU9iGNjNviMKSmwn924",
  "key34": "47giZksAJJGRexWtwkC1pKNEhapznXpVxs585HLKePvJq9LyQ4qc6XDoHoWymYHESrTiHQSCAHLVn5qDdhH7w7V9",
  "key35": "ZDdqXSnoqTqJCE99E3tieQyqoZcWEqG7iRf2Deru6Hkmm3hWBQgRSzTahQZGRyL41MpREucpPFznKYoFmdMNNSG",
  "key36": "4dqBc4wX1R63ajgbpwuqjJL9753sYRzkgQoBhMnks3DQjBe2zwwrP4mkmdsqM4tzawNf3KdgUZmCGDHHP9nBxmPZ",
  "key37": "41isfv6QqrUUYYYKBTsrfU47Txf7Y89NvmggrXxH3mLAaUeXh43vrNvYYGTf81KSupYT1xs92AvHo8MBmyaJgRu5",
  "key38": "3qCFeYj9dxv9fwiZCP2SdYhHSt7JYrgfU7kJUcavBTcVdLFRwJJiMxnJvmbsWRfMVWFL7rHvGWBGkQEbNDk9gRiq",
  "key39": "4htCvhbT5A3wQ1Q7dicS3kFDJQiVbzxZacRjviz1AkAg7dDK1snSRPZk4NSTbAZG6s1Dse3aSHqJiXVEs3nijfAn",
  "key40": "2iTMXHkGcnas4G2us1ket5MJLK4Lc49hTqco9fSLePYqwgMs5KqiuZ33ZY3W67yFmrsjAvYwo4gTDzvFqzPRYDEE",
  "key41": "37Tt2qcFMZEzBznngwyx53xRng2LPSpTcscmdvqyKZizybGU81J83PJjXZzKMxwFSjsFZKmEHq4o7XhVqcxU4h5H",
  "key42": "2UWTxU8DRS6MJ2K4a3DgsKxuxKbX4gKQoKigKHPSYxWiwGxfpPeKcZMkDzHcvkzcG9cpsFDJisqPcVK2ac769vkP",
  "key43": "5rCi8ubWPxS2GJgGe8oQSoHctkB7Chc9nyB1EhFWz68JDtbwHzFYAr1zxT8FvV2iomZEP89fUcrisTNkBrCxuMKJ",
  "key44": "5K1UhQ2upyDXqQQw3ftRgY8x4SA6DVnzNP62XXAJRNGP6YyW7e53Jb3pyHYpCG6jtgdmwkAtzqx6RCQVa2DHLNwQ"
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
