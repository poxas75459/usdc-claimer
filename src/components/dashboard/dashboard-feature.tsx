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
    "5y3q6ieTHJr9v56ciQuMDBsrart6AsShpiq47DayUp3E2wsTdDzoFc9Gwe5UPaQziGe1HicP5jbDe7uLVjF2UWve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmoKJ9rkTEcfpyBv5mTs3au5AVEa8zeLWAm4B6HAT9WNPNDSfCaLEdJYMBXFmd2xtMnfbz41YEtmWnGwwJoCMX5",
  "key1": "2Az8KBLpgzRYRyJ49MX69xGtRLQQ519eQ2YUv6iCajwkv25SfmhMdzcAN5MXfQPm5tCudhUzd1s4embpVFn7Swec",
  "key2": "5nzEBmDiJwccEAQQmrGXm4w3CAqLesEonwVAkwq1wsMr6j3Uzfh7ZNtHpbLZnnJpPNKXfQmRED7L3WuZNpXChNVr",
  "key3": "JNZ6YfoJNXfyGviidNTCdJ4wioTo731gXVWFnaTGfFAEFaUhS66pG27wwwSoSpsxk1aTbhLM5pccaGdydtVHsKE",
  "key4": "5vA2EaBniYrEzpihtSMQLhci26anLaz3naJkG1PiVvpBNqK26GHRGfdqoLS65KdQNjzvXLicNwdWE8VTjyxVRySF",
  "key5": "587YAe4MPgENEhz9AWLzk1EQ1Jjiors8QWXCEFD3hxZjbP74z9D1qiz6ZqrQdgbzHahrQAwNp7tjQiARSMwNwbkq",
  "key6": "4ZXe5n3UcSbZQ4joTWXewmPBYoVjRsRJLUiZvf6H5VQ5nZyZ2hpLBooPyUZw2zJahDrAanWVEtscVoPxng3qptxq",
  "key7": "dFjSq3bg4x9anisrvBkfi5AGRSzEwKzxHT3nCdxxaqAfg8xs6JvjjfSrLVe2L6SchURP1HEBC9bD9n7srGvGzuo",
  "key8": "KYq7FJSoiGkv5Xbb5Tw9kTNU2XTbPbD2G2EW39EeRqUYj9T3drX5HGTfCVDQqZ4EimVRxET25yUYTp2j4hNLXhr",
  "key9": "4KGEyGsceEmJEYCetTwiLRtVG4fNrUJsi9nvRdMoXsKJESUb1NxnMJvaKEEtNPzAe5D5nPsSLYTzSYq9ZWRTudAt",
  "key10": "3S5EXX3RRJvEjFk6uswFBzwVKm5DaXNzF6mbVtwWYrMqC9rB1fSTm1UJa3M3iFXGk4qqLYUX9HwDJrkuPCLk3xPo",
  "key11": "4TeZjmP5FpkC7NGe5U46ztpdjPNaZfHn9R9H7zQ5DZrgrqvaLs9S8i9vwcsoSNxRfHBp2cNLp6j1teyfpBhcK4AA",
  "key12": "3BhpfZwkYvHX4wzionYyqXTvhMo3Ja72EZKErgu6NFRkmaRbpjq8rRuT2J22oHboRYyfjeJ9BJ1hUfRNY5FJU98B",
  "key13": "5x86EJeZfz39de2mr3WU5VrzDTBn9hdhQF9zjDhzpsJWcaZjcxeEDd5pVFuj3AG5HFTQgeqPErxfDX5ga5EumXUo",
  "key14": "3aS2M4pJD6jzNMa7hoq4tfBDNcveFuH2A5e1pP5dQwcKip7phmbhYirgZUnPgYtsZC7f2jiu8L9orS8Huhu2qZuz",
  "key15": "2tSW7jXvQe4AodyhKMmfBfaCjUhjf6AwCK6NYKheYhp2pv3jeL5UspWQCVJuGjPu6pkBwvXb2e7w2WtSoxbE8hd9",
  "key16": "5mceqAry6bWrFnjamQfDJFUY38yVoRY13gj7sM8QmemdUCZVQJAfUZnzb54aN49zzhX6VPjWVSp6VxM75JX9kKNd",
  "key17": "22NE57amHpKpzyonJNkmRSLmfvsE83pKgeTdYfqMrDu5GcY9SBPLcwPzaEeg18yUPzQLQkMTi4fVBTTM6HtVeYVN",
  "key18": "2fWko6t56DtVFh6Vg7LFfkQazY7usXGjeNoeNuxcARV6Y4dDB7Kk9q6JrMSVQazfd7BfGFdMxru3JWyCaXuwfhY5",
  "key19": "67LLvjEb79AJiAK35t3o8zbTqwiNjrNTaHC7ReikDv6uLNoxXYbh19rwvZ3fpF8NjxHudNedMNc1Bvd9xuqFg69T",
  "key20": "49HWdzBaFsV8iV5Pyvh1oNQmo8fLRGsNQkepVFikxrc7aBcVX3JFiVNixYgAvsEPhC1kLmj5BAYXiAUMhGz3ABcX",
  "key21": "4SJTYp1WGTY73Z5mhQSwWfcyTYUUnqmjcmJko7x4AeLuJ1S7TNcJur7NZfaWLfsM56bSgYZ8f6sN4fZRpEHZ3ooQ",
  "key22": "de6cDGAgfom9GtG5EpeoRm1cYNiJ9aECQRepAcsGCLUeA2eoRabZSo4PTz9FdnLutyUXn5PnpPfVBD1VAdz2XKY",
  "key23": "5KLGhoy8nZ4PNbNFshEaa3ngZZGc6nAnnnwsGYjWq768AJzffUZTGNdMyAXRfSeyJnEjLPUuCvbbnEAHVothnhyx",
  "key24": "3Fx4uhEAZzCJHvvXGAEB37qHnxJe2sPyDqRRcdJVXAxFSQLTrgGFsqbYBpPTk1M2ZDNFXhSnunW56rhBX79BU4cv",
  "key25": "4URJ86UNk1TXu4wyPgUi7nVLarm9TxU9KAPgJWKbVe3AA93A5fRnApbby65uNhVQE4Ac8aBGpSn9yTGXjmiENmXb",
  "key26": "4o4GybYqHehBsRZynTEtv4HuztvhSenguBbQMoHiNxreuPmjts7UKy8UtAMqDayNzWRENW7f5M2hqaa5M4YhAwjJ",
  "key27": "KpGWHQaFPb1UPCDCwEBB6bQDtdB7D9f92QgRzrdVpf4dnXLzZnKxqHnYjiM39dmNhZCRMAPrvWGYhvbb23qDWEz",
  "key28": "5EnHB4MeudEc4PziLvbEbDvvbq4xY8f1RZrYDPWBbSNTYwVW7fGuxP6u9kQNzRVv8xspLqtaFMqEeRQ32yFYMm5p",
  "key29": "3kHsi5jWXcAonozSGtELvGw2JfcrxPRij6wpbsJhXKuCyPebKuR4GPLvbD77Sfm4CuC2p1VEMe9amgfuCipVwtZD",
  "key30": "3uAK2ddPof45tPZZXDkCW9wAm5FSthj2xUzTDvHGUQ2btCx3Xz5zAwR1RbZj7BCc7Xftp9b6dhgTE8D4bAvmxD1W",
  "key31": "5AyAFyZssBL2fTEmGWLjks8aJXSxH9GF5VbfmsyvWGdubZ93HznXBDJ15bW64uZ85ewLvZyWbAZ91uWEWHpdVke1",
  "key32": "33HcVpnyCCioXfDepNFGX9uNu8i4FDhRCCdcby9DNFpz2F6CnrjVfWWQ8JpY8nzcgkkWYGJ4WkqbgiuzPxRve3h",
  "key33": "TB3rxSgbK39XiXBXozno7aJSht6xVUhAhEMTrpzo2VfFgyjvH3TLMtVzpiJJGoNTGRPKSyJTjS4LdUHJyGceUMa",
  "key34": "5bd39tUtc8ujV6gZFDpbCXymCQpFevYPxaxTrnyk3sVnqg3u96gFrhzLLrLrHkoWc4RPcQrVSPT9eovoRs6QLedJ",
  "key35": "2FfaxeFPX5ifE6ezDL8XULtaGrvqe1eqcHr1QpwhUxBKJYdCWtUVyuv3K276tnoq2sjvytGA6p5CXhgffHgjaSVi",
  "key36": "2akLs6yxumHdBuYYKEfM2ndQCGHWpgS5exMftYkvJFb5rL9UX7gcfS2BcB6vC5w15NRUA4EaR3dgV1d8BztXd61E",
  "key37": "4aa8WAEtB3EKRphkBfiejf8DE4RiaxREDcSrMZwKPHW7Q4o67fLt2S81Y5JuwnjMs5uSuf835vFLN1nZ2pBhdHzG",
  "key38": "qWQASY5h3BoebPDKtwqnSPyJo8uiAVCvS6hv6FVz3RHj2cS7FUEDrNX244JiWbyxJ5aY74MWTMWMSHyNCxZbx22",
  "key39": "3fEoZbWBCvsobEWvcL9dwLB7ZfgPYsTEnA8TeqZw1p3FDPVuui5m91HhbTjQsqVbFJjXoqUVqEyWYHGmRfo5dEye",
  "key40": "5uSxAbNZL1YYkaypeP5meVe6ZuBMpUywP4NAiK6vYBZTAw9znPUbvY3cZhSfCtohEoPubGrgSoK3MvU9Ycfx82at",
  "key41": "4TTTpL15CeCHzrL3nKCxemq8e85fvKDjG4Ta8WF1aRQx45V8sp7UEiQfyK8cNb572yEqB5q77MiqdwcfBLvAJcf2",
  "key42": "5ZWdR9ZjszXDhpaDd6aag9sHQx85fNKHokSQetLzW1yvJL5FtsdtNDFnQubyA8NwT7uH9eYxZgFyHeGb4yWz9r8H",
  "key43": "61LHQDYSUuV7fQ7sTsCpYw53ihvSUqsAY31MFazWDowKXzJprbneNVkXoakPZYtqkP1mEXUeKSVYCP1yGQoBx3FC",
  "key44": "4Ldc5MaVZMBYGWP15xUiJ4nE2ur1oZ7aSeuCTApjx7x18aYiUgSAf1wuBNZoJSGTuusMhX7cwzZwxUr6c9nD1KEv",
  "key45": "5z25so2b6D7VhAn9XatfKcnZh9LZciynLbXv6PzzcoNHJ4sRfMszxHkk9xAQxqSsn9ahmjr4VCXdqCGkmHD3xa9M",
  "key46": "63n2GrRxR8KvHfWQvb3mJLVuj9pRDkHyUVstMRQyKueY27FsQHKwLARZSchLUbGB4EbjxDA6sZEDA8hY8UwoNP99",
  "key47": "3jtaDz4XkBBC6QRNvjhgFbqvbm99aoJK9SoTJXMTe44HavcyUGhFeKitb9hvAWcBPAuutgpouYBdWUw2vapAxHbT",
  "key48": "3WkQyAETByXarTAxrVFdX5cyG7hbLJvpvC8vBnqhyuW7yPhc471z7gcEPjFTJsMQ1z9uuZ3XhFUktPfSgkQSfwAj"
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
