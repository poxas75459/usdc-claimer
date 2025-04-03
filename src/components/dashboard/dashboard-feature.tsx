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
    "2FSn99tk8Fc9s9CvqK4mW5RvLh9Kmqif5u1rPPBCPNDoc3pAVu1rqZWzh5tMHbxkCNy3azQAv25DqXVHEkZKT7iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvySBWk1pe56HuNnE4nyigR1Yy1itXb9c7zvC4MGD1j7zp46XMJXdLcLTyQHFGNgsCFzNQwoLTeiZTEo7xhn2Qw",
  "key1": "2MUe6Y96ELdBJgGFaqJTkcdrRDvARqrkAdpL9WugXHAptzdg4kFfSQmyWUvNbYQYYqMV96QkrzgUVq2QqbpMj7J5",
  "key2": "5d7kcdYzCNxdQQhaaVmVgfomUMkuz2Xiw5vaMHUEC1KdvXcLc2zSf9T78sYJyaXzEdaopXQv9UZSL1yiqPoQ5cf5",
  "key3": "MebLeAzjwmKxtoj8ge884CohLeS1c12RqDUceJgr2TumVYQyWBQsENbfmx4PJMKL5qHxpPk8auTFmKgzuh6joLB",
  "key4": "42riE5yZXZqV6u9QZKGJgxkdt5JoLQa4MttUYqZS3oUscAi4EopRjeYEkWvp8tgJeKTmKMznmKk5pL5aNwMBQK5X",
  "key5": "5CeexnPB3Wi28cfJXVW6WZRAXKjQBugcrjEQHHLeFLmgYamsbhNJf3yeGXW7dbrtt1p8YTFhxpMMya8pHpe6Lg98",
  "key6": "3xnHVDMKQBygb6U747KPnmP5w91pY71GFLRViEVb2FyhDPKmUQkqCc6ZHCsqvb2h5Gtm7jm3DHgerQ3bJVWxceje",
  "key7": "pSm741xqSSnSXqyxuPGpxcwegk2w7naB1vYwP9ZhhgrVP7qmtdP6MrtHRCg7Xz1sE9LrfQQGipqSt3J5yMa8Wub",
  "key8": "4A9MQAKwZGEhzubRX7DLhwjsknkTDjX7xs3sfxipFDGYdCRv74ebHzH9dGTx7bdJKrdETnYDu5sTFP3vLt8k4Zsb",
  "key9": "2HuxNV9w5S7wDm9NyZH2GboVnzdjn2gSgwAQwyGwFbQbKFqyxAK5zKy55jYWqJv22UC5zoxHnLAEQLdZNNZZBtBc",
  "key10": "5cV1zET4sLiJZsfLTADRDTpnNtMsjTNzahwKZxCBxvgrf2HYSCkBzBNLnrbQt1njtQWNaTBJApndVKLdeWkXjjFh",
  "key11": "k5sYJ9Jb4r3fqvS5xdaUkCsSY5RQzwNVy28HPHizW1wuMAis56JsSepHTWEgJBQd1W1gKhw3Lo3zxSiUrGy9Stm",
  "key12": "2rmPgk6WRmGDuhWpnZBY3JPajw8cntrPLdnh3JBi7NZYKfuVNKBTV2ERriVJ9rF4VD1nvsQ26oRvfbPryVP359LA",
  "key13": "4Zvvk7NurRGsAEbXA7eYWM9u8W6ZdCcX2AxZuL9uAN9WiUNHU5fM2fCCVR33aoUZqEn189YePurmbKModfra9123",
  "key14": "2Xvd3Q84BzzGvrYcQvyVXC86eSgnnKtGpJrxVXf9deYcot2rNd55JMoT9eSJSXM9BNLAXfQke7Jj5hq6abmjar82",
  "key15": "4K7R2s4cDTCe4cT7CKNSRQbJRrdwXhqmJbW4PKHA2771bAtLbrcJA5EJFHxKb4MYXzDxyYcYrXDY9DHa6CEccGLs",
  "key16": "316Fpr9RKZyeWbKuUoAWVQJ2fbyEGwYATeCEoT4eZAn1NACtBUttHZYgH8BhzmrZaErXHWbosSAWUqUd1r6qRZnd",
  "key17": "36QYHkvKvZtV1bY4dtRYKqggR9rbDC62F16w6Ms1pWjyRYAkgKnFwMEERTCxkTtZNNBCaTpRXE3JmNZb1rUVGmbC",
  "key18": "4EEkeieZpRwG2ebdiYzqXLmV2nX8opvg3w9L79VsvPH3tVNwVzE36oAaqHBAny92zstQZPreNQvDfP9kUz7UULb1",
  "key19": "2tFGEpKP722KzrgpZbmCmcXKHUaqwW3Vo527gUAC52LPVxMQHdreKpXFd7AxZVxDCtjjZhsuKDkXTjToYAFiJvSU",
  "key20": "62ptYTEgseaPYeRuzaFRatPLZ5gW1a22d6B97JzsbY3avM8k1Sa6BXJXw1WhLnKGfm52Wrymj639dRT6HrRiLH52",
  "key21": "PVcS8CuUKYFWYrKzPNmz4q7ihXgCNwVAY8YXsvejw7rWsc53hGYcdbqZqBwhHTv49iZJehd6qZXCPNHJPUngXdB",
  "key22": "24yi68fiymnozhqUCh2pLtGAaMqGcK9zxgNXkV3C284X3wg3UagRd92fbjQ72kxh48oQ4zNRYu8NbPqXV7tLepLM",
  "key23": "4b8trjAFKHuKdvBEnM41Hi9gviQQhz17sjRayaYG6bRUEbKLWkMtVN3WHkQart86MLsaMu6mYydbd99jfArUoHGA",
  "key24": "39MBgrtXmJqbyLZrj8pbFr5rLevzBK3iNyzCFthqwbhAj1Sr3saPtZ7RTDm8GjDp2jT23NTHfTzJV5YnF6j8d3ou",
  "key25": "6717y6uq1xG7hcXo5rUFxZKbhsN9zSKe6aCNTS1dLtAkPBMBtH53DGt5Co1iEU2TabfCFcLPMgvqbCez2fQQzj4v",
  "key26": "4dT6rhvS72qGGT4ayBZWyBbuiqX4psz8hdLKBUJmNvYoJGhJ9poatVG4Q92uiibAMMMkgLAo1gUog8HRCbojjWuS",
  "key27": "3Lit3sqDwpH2g5k7t6rfVwmKjEyZ1kFypZYwhx4jTmHNrWJt781BdERaR1AzLFmHU5qm3mUkeiLTKfPDMdyaotL6",
  "key28": "LHhQHj12VFpeT3AYxk9gHnDmAv42vN1iNHE6xZF3RFfMqyNnRDEKf7xgytsT7YzWaEG8EBc7svUGMKa44mC34bD",
  "key29": "451n1pNJ4rCoiTEAn5yoxu4eW7FnFfXf7Ri7512ukyf685Cs9r6xY3PC9iUtwUK58SnK4UFdre8KhD8zYw5LnHz",
  "key30": "5V8386c2txCHoGsrf8w4QV3ernmJE9i4FBzQB3fqCbCFzQZ9j5UXFScM1FuscvCnR1A66UfyLYHJt3MqwZbNn9S1",
  "key31": "qquz9QaeYojwNh9PANoDxwRcYjZFrUmqD5ErNi7pKq37GZGMSrHJniKW4zFgc7QEUZLWmnZFDN6MAVrjDndjv9S",
  "key32": "2P1JiqKZkUPYk1Gu5xaMg1QA3EpuqA1RTQajqxmdr8sW1vcvAfPQmgPj6p3A6WngMzvAyN22KUrdFMAjL7hbqZJY",
  "key33": "5Kd3dvN83cPuFWGMtuxfTYf9TmEq3awFTyFV3gKS4XiKvAYema9UYVQFPu1KP4kZXNCp8zFWbarjLJr8f45zMuQg",
  "key34": "4hUijqBenTcKp6QEsjE88shY2wcwRmBqXX9Zqu9TmhH56c4utU5EzBmyqZviU1raH7zryu7FZFQz6WomB4AroVT2",
  "key35": "5zGpLrmi6wFMrw7XMh1G32Wj9vKLN3cVodPmwqtxHK7brWgFsKar5oYEQMJxtejBixRRrcNCxRPmuZYhrrMHcutn",
  "key36": "3khCoXLck71vY2Z6nixP4fs2zKiFGvVVf1usAR753yHS6cVNZN84zgzG1zQjpzzzz6bLvHFp4hh3VfzBqT6uCp2f",
  "key37": "57V8GtKKg4cnc2dC46bHqF8GZcLqHi8eQ73dCoe53y5mYRBvc28bNdXTQSNU4FosPfFh2K6ydwxy6dJ18zjKHU3J",
  "key38": "3L7NraDML5hhB1BeWJHQE2XEjWrFWRiwTnSBNRW7cBK1ehVxaa2Q2waF8PNe9Pth6r1QB1HZaYSV5F9en7CJM3bp",
  "key39": "4MngXzCyFMFSZDxgaQigbpYjoCJu2yuTeJkB9tGmToreEh7wy9HZiwQZH6PYB2U3mkTUQyrQmrq2GMu95XQY5znR",
  "key40": "53e7EThgeQsYBqepnQGGLmFGxf5RuziDzu9YteasALrkRc4vNwbTpFAsoYGWpkrwK6fuuiRHhtHSeX4Vc9thJDm2",
  "key41": "3r9QQ4hPW9Xm5wABABX9VtBoH4efkwt8PdxzUzDsZuuWovcy9RzftHDbhsKTxHbNX9B2Z4Ef5nJ2VtuM2mnAEtHJ",
  "key42": "2HqZ3cy8qCJKnY5SeFzSkQomVXuA3eb6nkFHFXgiXW1xUAaNhRzPqwB65SSmyJmDz4RMeNvp3Gg1hd6ptucf2dBL",
  "key43": "5gaNEKS9KPwFE9FhYY3TR9ZF4PwGEBjQmc46vzhQUMA2ydtJwDfYxRKhyATrGAWeX3x4TtUM1TJRLxt1KCpfRVwM",
  "key44": "2CQ6tRqU9D7bw23yiLsrZ8jXkcTtWcuik75Va74aWPQxxrTdkqaU9XfT9AKxi5rPcaECJzi6LJkE4DYeV6bXg76j",
  "key45": "SjpfES6Pnx58sxrpjikv8Ph3tmo1CFodaay1y6472CCPgF9vQSb8Jfg6yujmyEjSA88V4HqEidaD7hUpRLbAwKo"
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
