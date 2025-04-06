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
    "4BgPPEEobgXJjUqBEtqTTYFsPdMi2UQxdUU2zwHDm4oku4LhREfu2NDMhSnQWjkJ1wX2v2LMDqtsStXVbkYivyzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53HvVq5d3f9jVyCeysy1bFVb9A15WuTbrNQuWr9D9ozbd6M5mTkimRciNy8K2naujR6HuDARSTh2zWTuUw5xej2q",
  "key1": "5i8CK8AbnZfiVVsWbGtL6Gc8UFZrkKBZbq64ui97z3kpGZz9DJ6XDcJo71dCZELQnCJWfYr3XSSo3X2nMy5WCytX",
  "key2": "2JJdN9gCYrYnsZDgsRafDf4q3SJZzxwmfGngDqWNan35riGnk1pBPt7nGdUni4fc8MUUg33rcEhC6p2xaPMGKL5J",
  "key3": "pMnXDboRUXnPZHJNbuqAaugAerMwCPyT5NY29RM9vZsRFh2mBghRcu1DSHgvyQaeaxfWz2AmU2cdhefVSi7eNEd",
  "key4": "3BzNCBtcxo2K4FP1hL766uhxurd6T1QmgQHep7eq8r1s4cJW6NTuox1ihjEgjkKZSAMqZgKHAPKUM3SooUub9J2p",
  "key5": "emCkB5VG6xttYyGMiJYUhVUeZZRYgsRfX2tg2jnLufs3Hikr56XkoZ8HmkjSJ8UcMPFXtWPEwZszbzKSanAQLuX",
  "key6": "3GamYutLQhphviy5VJtWQEHxapN4UDa2wXsNVnCPx7PcxYm1BkDoEZ7mJc7Tw8WwSMVMCXCLnEeiU7VXYizLTDp4",
  "key7": "226eRQGuwf9hk1xDgtnr6w2kCgbQtqV1Lt1wT8p2u8NiHyesP1rkgo8nR3SPVmXC6jMwjJoY1YtwrTDUiNtsu1Am",
  "key8": "5Rf8Jf51t2519aLtGJp76GLKvStitwLMUbnVe2NomfLoLP1YGhvB5xvp3SGk1nQamvD9Hdbo2b8VJVYQNNaRmZPk",
  "key9": "2gyFRuA6uftTp1YVN3kMgPP19AEtW8HxKLQ3DTa8i4FZKydubtZRMaGSwrEaoBDdsuo3ud8mEXjaxV2qVRfX64yv",
  "key10": "5Twri9CoVQMzNeyUjFqsSjDDt3a8CEfH2on6DGkS3u4oHJ8bb6Kqs7gJ6W43RPKUbGX5vPBrWbwZkCQofzcUJ2ZR",
  "key11": "2b2prtsdK31ZCoMaVriACLB1VSogvvpkudGKXSaMksx8hyobfgYFQTS5vHF1gTzsCH2bqGb4ZrdYpKGChVHFiokY",
  "key12": "4dAWdraPaxoqf1uRfPvwj9yPieU45nnFauzbDvP68zX992ZvU7tcg8soe6E8rySAMLM8cRxHbkKLZbW5Wn8dV9Lc",
  "key13": "4tMaiRQZmyWNd4ACH7KsimemJfy1YLh9U4hkPBmMUePGzVVyP8g9GGLpGovtR6XhByU4SyXgJR2xXBZQvoj3HsWK",
  "key14": "64whqaFtXtD8reGww1yJGjNsmqcTYWBNgzp5xb8SHFwZ3XL5asGaNWRKs3jNDr8iDPe3fXdriKuzGLPhHaDnjcPt",
  "key15": "33QrpJdmoRAxJ9skMrgjmrQB5UyPeJij8t3wMrV2ZiXshre3hjNkTSbX8xsNuRv6w7WR742cR855d2NGyNromDmi",
  "key16": "YoVKKVAkZDrVgBr6FWPqQuv8DYtS9RxWqaJ3NcvfsAkaPmJSscMVwKrjwfxsggBhgU5snsvPNT8t4Y2yUMV527Q",
  "key17": "KmdQfM8JgijNbmB48KjoxoSg5zp48LUznnr6wWm3z54TXrvaLmmqhPqxhidzMpRAqkwG8nbVdbEjSUw7JW4Hk54",
  "key18": "3vRZ21okXqsSncppx3L8gr7mDE7bFWjiHU17ro2hUDWCcWeQMff1P5yUeMDcTjt2q4whCRcCht4H26ABWmRwpAVT",
  "key19": "4nY5rppQTTMcFaHJMdyeddmYAdzppght92vDRDfppmRYU14iuDRgvvZkARCsaPPgnfpiKYdS2t5Bje2cHzD8hbgN",
  "key20": "3sBW7mFhNm9YoiRdh1bzgW128XAFhtP4cLCHUnPHJWidGY2SRDCNBfZtjzHXRcSQesxbFTPtz1SVqwFG8jUL3oKX",
  "key21": "kKY3SpRxKHUYn9jFxU6Qc4KghE5uJ7kfxpfCAviHuEzsq4F6hWDB45KHiuiuzHNdwDgQji9oTkRPioqGcnfbw1T",
  "key22": "4mxB16zngtpdkpy3QwTMfnvaee5cVowF8RfLzvSFYJxeZrRSHtPz52UgUJeqJiWBbmcxyZuSYUjQr6cU9LMAPHVe",
  "key23": "skWf3MhmBMAVTXbAuPaWS3YGDhETcqZVufYMs4w7Yq17ctJ4GPVrY1TLwroJR1uSGSZhoKGdKVWy1vEnW3EPHVE",
  "key24": "KKaQ3kVgtsA41CTS3c6AhFgv7YFopC52CUjrdYGkA8tV8mtsfqQELZrugtdedyBtdWJXMBWo7P7mJhRSietVSJX",
  "key25": "5CXmxMhrXetNeGgbukxWu4Chh4bGWc79ZPXHzaTfgjbpcyT7KT5Q5Ukou6gzwp5yqbEpDVF6jmDDsafX2mmAhyo3",
  "key26": "3niDRz7htoWQNDP5UFqeC1EzepdfcrbqMQSkcTh8LN1ucxbqxjLojBdKimHrDKHPV8ANEiRypmMjLDaSvC5gZFTR",
  "key27": "3mUjD3kWSkK5tnf2F65RnSpS9uPsAgRik8jkaArr9PGFdNqRVWYvHxF9zHcpmaGf4WYDoCGDp73B9WhGQEHkHUNJ",
  "key28": "j4f5Eg1bTZ3Euy1e6rqjQxQFqWBstp1CBZ5CDhpjGrG7L5PD12FpKd7isUixAR5aF8Yo6XV3ssZFwArcN2hcdSx",
  "key29": "5VS3d35oPUVPhoZMGc7CUALKwuDHJ7KTK1xBtNyYtnJBvwUGsgYCAVDtKCi9PCki4vPFJSr9hvbByHKTiL6eTEhm",
  "key30": "4Gju9qPtHiCCfSssXoPBLG5trs24LAgZNvfjLWeV3ZVD9Yr14TnFuoQf9t36sCA7ZLAK2MAFYfi9G2rFUgLBT6T5",
  "key31": "uqy93JxYhQZ2vEHJPGGQ38anQBsi2QUi7tAh6hhpQ5gYFhQ2D4pA8ASdh5UqReRJErbNQHbyagGix7SZsBo4Sx1",
  "key32": "9mJyzWthtFQDSP25uwGHbxviiFdxRcK6nmeUMhKD9KhGbzHz55KBh6WPE4pzBDYTkG3T9FuxjUdzz8M3rfLCaSn",
  "key33": "4S7wNpiyi5d2ZQUomNtMEeYzDbFKH7Rj7Aj3KVSxNKkcokWvmudf2MXTShGqJL1B6vCu3VdvQEHgXYuSYaaLqApq",
  "key34": "2yM2gPF1suzff47tX1QGEafXpUqdPup4HWr2AeJ6F73daud78EUmu5LFFwuCcd7S1MBj9QnCm5CUcpWtWJjNQpm9",
  "key35": "H9i2umNb1huK95kqFYSdpWrk5A2dnHDamuj5n6P1CiADPgebiC3TraXQYEboLoqTwwKuac7t44YFp6wJ2xJ3rsM",
  "key36": "5mjXJjzDAwShD4bFsieU8k6BCECahDrAcWAhKiveLBZp7Hd3WFbanBDeJe23beAF1vsAVGd1ayFr1zTz5A3AHS1r",
  "key37": "4PaCmtqNWpUNqJ5zhc8nZS3wyELohNQNAQQaziPHQ41K11wNgLDtjJMS91radgtrBWehUwxGQtgLEPi5FXbRbFtn",
  "key38": "66minr7sz3Xxuk6paT9eXwkHXPiWbo57yu8KYomedUMytpi5BA9XThjvyEr1mSsysm8emuvgVY815GieAQ2G3zyD",
  "key39": "3s4C7oitfWxc2v34jpghZYzshkXn3KvtprNuyMdEAXQc3Vx2HmEJXfernMKvuBiNAz6zHdxyZLExiuDA8NPU7iRf",
  "key40": "4wSjfJ97VUst5NY6fZuBm7LnNjpAgD28u2hMSauEnZjeXEWtftXJFy7VCUTa2LMCVAfea35AAqPApx6G195Yt5nn",
  "key41": "3bY3wUB42T2cA6ozoQGPqvn2vhxhEADDL552b4MFUAx4B8X4Hf1SJE3PLZs5FNbMYxMALL9BTvkQfLGAwbGTw2DW",
  "key42": "5JHmGt5JBbkaUJ1eUXCHBpXMrSumRA4A5Z86wiHBBRPJHoJLLsnzEmZutgQRouyvyX2BQizS6YTptgEvB1xDB4m4",
  "key43": "3N7wyW7uTxngiQG3fLpkxNhweiA3uNgvzvjE4Tr55A1eXLeWEzcnWJhrkNqPnp3QKorwXvodNfbNpxE9teQSdv26",
  "key44": "x1MqVh6UYW4uJ2VjCddNXVT9H4XFq8VWLGNtUar65RJpxomALvbyvdxw456vUauogF9cJGmtgnAoMXMvEANX5wQ",
  "key45": "3AXaJR57emAPQng48Q7Vh1yvs71RFEFTYT5mokExc9aJrmLibeQt3Sa71Cpot4NWfwXQpDmxhnD7xZuPjurFb3bm",
  "key46": "4Sc5sET7gZ2n6eQfbgPbDLbcLmBuwD8NkumW3xSSYnq8z9pdFPZKkU6Ra8nxwjQHHZHSGxu6CJ9kT69kDJoGzf8r"
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
