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
    "5AxyMD1S2ye6xipqf76DTrSnXmMuVyDuVjDSZUqwgcSR4eriVHjPNf8n5EeqFVxMx4Uw1wb7y7vMybqa4fkFF9Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zLcPwRMcYAh2HCyw6R8P4DJ5k2DnAvV7W9vfqQz64W7KsBMpky6LiSJ4KcpgL4td6Jweg43nYwGjyV7pHrD75Cy",
  "key1": "3RGrWb4x1zV4JMGmqwviuuNb9iACtEHPtJxV6bygzRXPr53UebsgikXbShQKDWKhrpXZ9zCLNM7GRxLtEj1U7Vm3",
  "key2": "wDB5p6bE7qn6FtKUYNugbK187Em9k57CeaKzkMeWoRjdp8H9UrP486KyWQ34oFgxH8wmTBAYd2woejDGtaHL5JK",
  "key3": "61Z6B8v5pftfgp4S7oMJTuTTmY1FqwWuF8jsJPcHNWx4aA8FVtTKkt32cFDXvuz31TbkTf6VEmk7eGRAA5ktJrCW",
  "key4": "66435GcSpb4B74XUV8xV6T7biUWpxfdSL4XVVQAo1r9DQzadkArYYqLLD6cBfxFKwYt2ZkpzkYpsepaT2JDVrnY6",
  "key5": "4T1vTckXZ1pYuhBnzzf63DNPJi9SB3ukVvD28S3GpxWXQHBjdcFxGtit8zHWfq687scApkenEneuxBpWxhXYPmxB",
  "key6": "HETyn3iLr1x6g1f88FS9JSUkneG3Nox1jSBWDQi7Xpn9pomVuhYdsGQXmb17G7ZwvxquYD15douuik9rykdT2c8",
  "key7": "5aVZfJbHbm995T8CVV3AMJdhhKgGXb2vfcbcXcgY2yfiTXeTTTTUjZnxaK4cGD5MQLwuFGXR6hC8GZmfd2BZzWck",
  "key8": "3tNxwyHNgv7s3ZvuA3PixHbdBR4YBTpSr7yuJQ5PMVsa4WgmJQzKgY1EQm7pR6m39XpkypKQ1pfFvmcBy9RP8Hjh",
  "key9": "5WbffLMeJzGCKfeccASxCpxeUM1Jf72f17Av6fjsiYYKWRxivzobotXfp1LqnaTokD9Y86J6xAAXYV25PdUj3ZDG",
  "key10": "3xYRRHAYs22TpEYvLCF5tHb3xyH4fAaeLyF3V88GyBxrFWKen2Ex8PPSW5y8ZTVfwJZygR6DfvpmPzt98SR6JSGd",
  "key11": "28kq73LCkbD4WV8sDae9Q9wtFE5SYMHY58c5b3pFKkLJvtUtmaZyK8v2iDuZyhdDNJKeQjEuQrN2wB7EyPhuQUdf",
  "key12": "5BXVqENb1bsjET4ZUHsq4aZXbZSWJAgQYMfEVnBTtpNLT6DAgdzYqLt4KrQrZM8q7igKWBKAHhNoGTqD5Fn8bYfp",
  "key13": "4juVoHHtb12TCeA3PoKLjTDNVVFQGpNT4dXSnRKFJ6H7zv8jPADSCV6bHynxYPu3g8zwmMcNxZDePbGa9UV8RMgf",
  "key14": "GEKJsJ8RgsdmsphjC9iKrkR98dLV1j45EDAfTYdABPGXEdAUKZjucTjf3DnoVgUAvzYHhjTyP6KaDeF3DAUKJ9m",
  "key15": "21LqpYYM3pLQ59uyvHSn4ryKSZ7ASCoa13NdWeWuPEZStNXUBERQHyat1nQKguUetNJjSWBBF7aGVwDd2BaNG7Ai",
  "key16": "53Wq3dBG5KDVhpWLkhJoXL1jHuQpE9GentkVUfzdZeaJ8jKWtooDamFm3DC9A3PQ7wESWYyZ1fMWyQjgxqEza5KY",
  "key17": "3wKyb867Q7TwWiyebKnBP9uHrm1CJDxesh25GUzz7AbYfdTZFRJhTe6srRwuanJUJqpsVaJv2YJmoqMMPCqVxwMY",
  "key18": "3jQr3sqUcxQNhXx3Y7ehFXYdq5paFtVEaT7nwNDaEFBAx9FG77dgSqBUsS6DcQTMAmZjeyiNAkDbbPoAnBnutmNt",
  "key19": "2KFDNAuot5PcmMHUwuDcGi6PKgzCNM4oJxcDKLbexkRJ6EMVMwatgAtBX4Ja3soMBBSJrRGD3mrMfBS6uNdScENj",
  "key20": "4rhD6vsrLrL6M79S5JGNykusSETYa33KLb8Y6uSrfsb7MwNJBNwz2rD49o3SAcdx7kmmnZFgCkjcan2CbXGgR6KQ",
  "key21": "3gZmHJ1EJLnpcNmL6SpjVFQCLsy1GCMFjPe9p54xpTdR4Y6tdkJKTnFfc2KSQeQUvpDyXM7NmxaWWVLFF3yi6sLm",
  "key22": "3zvzBhjtnY9yp9jrvKf3cc4BdfimudVi8RMgFJz3zL6pdA9MFfkcWE3zKR52Erra23GFPA6hd6Pk8ouqAQahmAii",
  "key23": "2tuhHHsFYVQEx1i2WQr4YtHyV1aKt7pRUY5rgAUGEjmUCUtLc4RCdkGYpP4ZCMSY8YbcgLLfXUAypCgnYmqTBwAD",
  "key24": "32D9XEaV5iETutC3ZV6TX6aUr2UKpZKVtjFH1Aj6JzQ2rVgQYsXctz9n7n13kyYyGP7dK9anMCfMpzdRckeNZ3DU",
  "key25": "5MXDUcMVjdjDU3VdpGWscAdX3oop4ibvg6DVL43pmoj966j4AbEtTmznGKxYR693STaUHASMvk9movJqPd1HcqXr",
  "key26": "XXLnmLbH2YwTPfogGmm1tA66N6qRdXNaTRA2hhDZi6JoDnmkam8TbZyJP2p3VuNDZf8UnqXNVm93Lc8sK9U2Y7z",
  "key27": "Fxzp3U4GQ7H5htfuJH2Qkdm8RU7SgdCLf9enV5eHR99u9yWi5XQpp36EArUYAfnUr2pfzGZtEiFLAEx74GvMCeL",
  "key28": "4ZQavMTrvAJNv47XbLAZ4iK9rhvmJd2SwGa3i7KMZQCtTfernA2Ar8qLRPfvWVkecpHUQSjoBx3oWScyadqcRtxC",
  "key29": "3GVmU8oXFJ2chMkdDNR7FsmHk1suJs2xauPobqZGvZTUU6gVs1VonGwLYsGgDF49ddcw2PE3tMrK9Tww8M5vqyvY",
  "key30": "2aq76NdeNWiUuPKpizxz86m9hnEQUAzWhUCufucEzDeEsFj7szJFvaMTxR1rSpA3fo3dpapXidxCVTCCEszg6NmD",
  "key31": "4PWpdTCKcqtUyyRLnBE7XkYyZNFdx35iep9eGNonachStXDyWvDEZSFexV379emPFa7oRrJjiTA6gMsoAzKapxef",
  "key32": "2sAyd2AGKAezzuxk5BGbmNEgq1ZRTAugAUykNosn6ZBhL1ahpFuFjP1BdD7ZJzptcxWCCQJDeZ73bZRWMG6gAn7q",
  "key33": "85oyqaM5dgkymJUMLWmAJ4Sch47guUQbef5eZPyVYR7x99N2anqA8ijGgTT6EFk9JUNaYX2zidSYS7Uqe4bL763",
  "key34": "5ooBV21vQhdYTH8uegT2cTAE5tQKCmrt8w9gPiZYZ1XTpXESAMWne4qSkT7DkgjLfJF16HBdEM7xMvpCzrwNCmMk",
  "key35": "4kxgBLvEStoLf3cPrYJqJyVFz41oZCKwW7gmeAHTTAbSCc9bum4uYgeetw92MbnkrvLrJcgynt8dyRmcxUh3RiF",
  "key36": "2WwXBkprkqXnj7CYsN3EfhHHDeNrSpr2oRs2TpgX4Lr1Qa58FMivz7AQze3wHMuSTV1WGhysCrmurhYNzFZkg5mU",
  "key37": "2f8waNPEjskMBFh6k9StiWTjdsRginqEbv8cBjc71HCwdm2u3cnxofTYC3wyt7J7osywVfzeAVDMpyy88zrA5t39",
  "key38": "64DkQrsr4bA2oZonkH8DVw9due2UtETtmxiTXySU7tENAbku8x7KiR8bAogp2AwouAZ6gs8FiPeBaz9tv3PUKBNu",
  "key39": "4isYSbH8mxenrdwbDT8k1Daw97TMi5QaDewtsqBZySUnMyeRoZ5LHZb1knjCxjo5ryyLJCoGEbB2ZBqd1Qiq3Yqr"
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
