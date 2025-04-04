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
    "57ZiWqWVzxtdCu2awFigMepokq2nyTs6jjFZFLgB6fYVAdurEaC7RGmzyB6YKpMTjd8xV5pVEVdYXEPH7G83sHWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZohLwRbGNwfp567t53rqrPKUwbqnWSMfxcsotwACUG1qRcsqp2enesdj84dRqbyic7vHdeWKi5B61T1jhrge7C",
  "key1": "4N5B1L5uWqkYzV72fJgSWaX4BBns1yTfNCEBPknxfZcGUWrc3koDXshpZwS7RQFToEzbZWwYSEQTJnp1gcEj5g64",
  "key2": "5S3q6k1542P5Pmht9A4CmqjQRxvexvn1SSY5GaKAQrYgcvu8nwwREAAQ2LCrMgM9aFQ4zn4vgqoVYgEZzpvTHA91",
  "key3": "3i1K5YUrXxTfZtdQCgCaa16sURbtXeVUXDC9MLVZ2mjtLNwSQqtUx8xdWrAQVodQRCR91KXujnd44jB8i4F1Lmv2",
  "key4": "3Nb8GDgTQLobK54U13MVHLNqRV4FhYQ5sLyU9uNMz4GgkAFCvfzUgtjyFAf3Zd74mYWXP5WnUpZzp1aTnAU4oMW6",
  "key5": "4jKTcvmYiJc7aNvtYadPDKdfFfZXmUGDB1QUHWb7vH3jupr4CoX3NxrZRM4wYZzJqKNpzYBFStwCqm9Y6TznRJqu",
  "key6": "58LUjPq8DVLYFkv9wvC5QnwWqKnSyrMyp6XJud7UhniBBWfzzmvJgpU9b9jxdRuxkbqY8RFtteXsMS1dkq7PiKm3",
  "key7": "2ptQE5rdboV3oWh4AbPyhcoSLvTGLVTfP5xHnpU684AJLoBjeP2BAXn1ck2HugwYw5dyEdW5z8d2RMRTpmbHwWtp",
  "key8": "3eLuWSYHCm8xVK8qxwnzdr95iuTBt95koqYCB3hnPu4h37k38AfzLgiNZf7PAvpF1djWnquHDyfwt1LqhVu4PMNd",
  "key9": "3HJGLvzx61RMvUKZbm6Gx6J6s9m89S48QVDwAcdqzTEmTd4rWPh7YbPwX6bvNa4giPFZM7cUwohS4aCCeRSWJwem",
  "key10": "2DUP9RtYJZPZXqpcmvuu6MfA2YGDmNXaKi7925pgydTvn2azQY4FMjYK8DGEAe1PNvBRjkbQQv5cqHwE1srcmvX6",
  "key11": "rs7EU6fPxQS5qUnedwUW46oNFHEZTT1GgjuBVBLQorcSwL58CqRzWGRdfRL9VsJbDS4yn46hdL3hLCLjMPuL8c9",
  "key12": "5mLjNz63r1YHEJCb5aPNBhv6vN1TfKpfP5ksFSratwNLSDgUwV56TopXGDA2L39tCtZNvRSV7YmXno8rjfkQg1mi",
  "key13": "4yr9iCchojfchUQcQg5Dj1BH1BWLM5b7FyUyReTJH8uuaAV6cq6Dsk85LvtvxytojXKvBwDpSTQnHX54mCMKrx73",
  "key14": "5zuYmhxyLTja4QBDDCY5EWUshVLeJuRVyh3B8UMejGGFmuf3AEmm44AXQxfziLDb5FTa6emY8t35QUcgExxZWYKz",
  "key15": "38MGZfJ9RdAkLxr7uyjmn9ZASnoCo5N4ygS59ZAUAS2uYpx8M4YDQaBebB1UKWGbQGwJw4EJgT9dy9VpyVSKrRqR",
  "key16": "63jq2oYyxTFgN1Rxt64YXESK5tQCo5T7JR1eFAAaFMHU6754p2Sp64UQE7tGnWMoGHbHBDu6j7YNhzMVypVSNdVX",
  "key17": "53VpukLB3znr3pzST74aZT9nQSpYocTWmRTC9p7fSz9qfcdjhXV2jJNcg4yJeGUaKysZEVtVM1eweU9UbcxSA4sB",
  "key18": "HMhZCCDLDahku24HGn1kMYi6eedsTVUfN4tB2ub31j7efhH1nTWSoqzp869ujyBG5j2aiHMJyKiBvkKtxWoPvKd",
  "key19": "2LUJEkKLT6epMbHvQUt3oYdqGDugKKVrVgBchCG1Kdx4oRoriXPdoevv8rDzrBknV6ueam2wEiVY4WRBFg1xU3HC",
  "key20": "22D4h2YfUigha3kUcK4gZjoav7mi9GWHuCyLSG7fucnHxWj78s7sWLXFuZseuSvHVibBPUb7XDZitVmXkQHRiUT5",
  "key21": "SugmV3HiGLaJqr5XFv8LbuiH3NtQk31Jp3DfsssayBnpRVRrDHHVyx6zTTu4kquKaWRV1b2DGVAEL1t9XXzo5ys",
  "key22": "2ciWdQ5EpGGJCnpU3Tk3Fuh7XrRkqVQqwiK5EN1n7mTuaHN16fTvDqHiCSugW8VcNhjjzZKgShuU8mCjwGmLeZfg",
  "key23": "TLufP32nQtb71PEHjTCEVYEudGjahqiZP3ZaoA6kdZNbHy9qW85JYeEHvqQKvrhLfBHvEmmHkcpofF59E9fhq1x",
  "key24": "2dfSXkziJq74svcmZMEnW7wnY6Dj429Lgz9jqmVzZB23UcVNB8T7ZzWjJd58WZyjvrwFiq5oQYk3TzsRwTz16Tpk",
  "key25": "46HfeqX8ouRHTD5eqdqGaZwcEAseBvSf48mbyZMaJcjWEBE95nppndrxA4T5gLJSePxtCZusJ6KU7jDViQ45ooYG",
  "key26": "YSF6HEvCTZvTSeZPNG3aCR3via4B9skJ5QX8fafESPRkXuiwb41ZcpnGidKMQaYY15pobrtHYzqwpa46Qte9YMC",
  "key27": "4EV86To2ucrZn83khRgUBwEtum1SreGCcozM7x6ByU2suZUFzmKsmARCuzkKKXUZZv2q1THRumMofCGRLvjWu4Nx",
  "key28": "4e6ezHYxFdHa46bJnb126K29dxnJiJ8491kWB5r1B8MUDgWpj3PQLt62pZBnNP8dc9SbxRH7osWXUpNcL6n8CTKp",
  "key29": "4GQsbXnFJ1wzYsGR1FYYo1Wtap4aqTV7xJH5uNqpsc9x8DbjwiGUKPdxxPyaVSJPmQQxqvVyzPAjzjbxS3uoeJR4",
  "key30": "5fPmvhQZioxpsTio1XTBzHQzHTxLE3feFAyndCPjWPpDns3ZBnjmtPmMUVw5jtVF78hehYoNvrY2rvusjHKBsH8S",
  "key31": "4ac4BgMMFWCvjQvL4vbNze4rCvS6psF19YuheWpukSYWr7BHCPXf7Sba8efLMiEpnEGr3beDVqT5AmCETwUfS1bP",
  "key32": "4Hy3Vp4eHSNe4ajC5fypxkJz739zYxnznyFWewKEgzdLJfScnZ6FkqENSB3vi8F553xbHBLSuMwz4bMVhuaiKP6f",
  "key33": "61pZrwvHVnBMhV4DLfyurv3aVEYRAuBe3Qj8FNzAE2Z8RLfCsQVqmQ9R2cMMDHaGGWmxZzkpuqDtSj544fzcmHC6",
  "key34": "2SqoJFavSfnm1Ldv2gq9UHa1MaxoLRjNCKNS8oMZ8kGF9qqe9x75vk9uGYPSYM3egNcq7LJ9WVE5TBcdcyJ6Qebi",
  "key35": "Y46CPFcifC5kKsdn8cVjoeRE7mzPfNob1Za6MvxyJnESoaMPbaaeEGFQ1qkNHjCTpZS3NiQU1cXJ4ie3mUV1mmg",
  "key36": "2msPtLVmSHyU7XEAn7L4QF9dXGha96spnSnCippi6BWqFaJdLLVud172W346vRUyTLqWaBVvw8GG24QubGXnQXe2",
  "key37": "5X6PGwUsEpB64Ua1cjsrNov8D3W16BuN8a4SrjoVnGhFpdgaUUgEtuck2guuLEFBtvgqvFVCwaFWZUkkHWhmTWXH",
  "key38": "XwwLNPUoAjDtpuLizpB1tBzkwFnxZCyrbbpKD8tffLVY3CGsg5pockLq3AgdcX7zUojenuB5pKfUcJwLUQwFT2U",
  "key39": "yJFo4hgYaeZckhU7hzQZqrCmRgbCTnDj1KhNdzwRMgDV4qMtY4bWZrhPu7unwELNffEbK8BGUezReHwZk5bNkAX",
  "key40": "57WXKqU6SdGuTg3Ng2oBSBm8ZR8tvRS8iadRierN1vyG4kqBLRdvaAsp3CANvJBfNKZDwLiufzX6mGLBvZCTFDv1",
  "key41": "34ptiXT3nctU9Z5UhqQQagn3xLCZb71MuZZABJPcYJzFcibEcEvr1mHi4AXsYwKz26hVGbSGVo9s9s2itctvzfpb",
  "key42": "2HdejhJnY99YccYTbCtPojq9xDgGpHiqv8Urhta2Td8R18WgdAjVMjEmNZ6xNmxJN9XyBKYjRedHoa8NVyjzEQTk",
  "key43": "4sGiivej1VPJjUt8nnygaxWgnD9TbwGpdGjK85frUauZqrry4YLSMSSqK8ymEQySjzHgoazfehTyEWuiEz9PZ11",
  "key44": "3jnWgADVMbrkuyPXzvSDP4E73GHU9rkDtdM6zYvTDuWJSJDDJctBamgLajdW36PdKUpfUbARE1HjY2cu18YRBMd7",
  "key45": "4wHw8rVGqUhoPWSHFiPoaSqDRtWqMQFJhW9c4SXVS9SUdxWm5vtBYcyFVoi5HcMPrFrTmXRiqxx4KWMZUA9GBDbA",
  "key46": "QDd1y987NLHtkthMXX3Xv5o6RyupojV1v3M6U9RTStgnxK54stPNQVL21KCXBe5yrFdAkS1GQUEN7uy5QaT114x"
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
