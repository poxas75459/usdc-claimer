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
    "3rSEosact7xXyiWnTJSekihAFunqPyVBqj6wPQYYoLCWfe3esV2CNLrHFxW1Fzso4aTbCGo7yWQypXKH9hPdgqzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4KFt6atGu1n5yxk1bwH5zyzBgzgHTPxDM1mjUMLR6FupbFhncDVGGmGzhn7iQrKSBU26eRSsZ3neBJxdE6g2vr",
  "key1": "iQfym4jyef5Kskkgy9j1cPgJ5cFArhau67XgdgQLTzYdXHD3Em5eKPn8tPd8fm5X4K6DjUaQi5cvfcSyLd1MDcQ",
  "key2": "2R3LQUiq9WbtCa2UqTPKvp3pFGZbxwjzyrGYHncV8BiwHUhWc9rPLX2wb4AVrvtPcEemtdWaKNGMfrzeyxwivGra",
  "key3": "uvpw2oSYVwsE6yqwY23wmfnFBDqwHVayAEuAaofhV9hYotRszauFQWJah8z4bufqb1tiVK6FxKUXrxYhCNgkchS",
  "key4": "oisamzGDx2cpteK78JgdzvRBW13drJwRRr5meatFrut9kAeeAi4tvsNuN1Pv3EWBv8CEksqMo8d5xB3aCCoQXgk",
  "key5": "3XbuwGSRQCgHtT5V6KQdkqfMFh15v9rcaBundEkcJwT7zWiChEqmSYMsSgvT3uNdutMvQZDXCErmUspu6n6EBSwB",
  "key6": "7R4aXZXUgjSryWARxDPo7z3fVbTCG1YtXNUgwqNiCoqh5Kz3jFcZhGmGXvih4zy79a2LMPJthX72jjNJ3e1ugta",
  "key7": "8E7kg7ijm4KWrVzYZZh7tDRyhjmou4gLsqcq5kSYjqeqoNiacp1QjtnyXndtXyU3Nyv6sL32n3Hx1fx7u8CTNyt",
  "key8": "3uCuks6ZAYG2oAX65A6MmFev4L2MYSoYbXGivRFuT8k1WuKVrJ9yuJCjNepFXh1Xx7G6zcKQ2whWcEExfme7KxmU",
  "key9": "BPjipxzxHM1xidDWEMfGw4CMrk5tWSsV54wUXNV4mfpyvwaqrBddj8vuXyHAsf7oEKu5uFVGN9qRps8Fa1xXExx",
  "key10": "4HpnAbMRQ81p5MxW8we6dz3xUL4Z3mxKEQGWgzos7AJnTVTVkN5wyWhp8Pn5ipSLdSe1NsEtYXL7FhS9NRJhZ6zX",
  "key11": "5oTji9RdXq8vkRFppn4DSGoapMg1YR3sT7DjKXSrDZQFVAse7GyxFuvYp8BsmogQgjwSjZhvH9a5oJu2cdnBh86N",
  "key12": "2NrQZWnbMpghHrvxHVihFeRT5bwTSZ92Apbpox3bx8umnLcy2wVLUKeqoMXSUxuQMxomFBLcX3zk1gHjpARerdyx",
  "key13": "5NJPG6gMH1bTJxvJGHPcD8JQpEPEmF7BChDxDgHpTrAngfs8ED4JQDqzgm5WGuxczSW3qrmHKVA9zdC4soErZEY1",
  "key14": "GWucUKwchUZVyKKJfK6mV5o9vFYDstdxwPtBy7mdSTFtfMsNGYYF8WfDcAPii6pbdw5yhA1uwmqKh6qDcUG5Kq3",
  "key15": "4BLfJkLRpgmgnwpJ8zjRziGF2GJdk2Rb2STCK3piAoPVuaWZioX5a7eHgcrPs5FSE2VsustK6C8ZwrbbkbWqGkx9",
  "key16": "3THbpDVCcDCnb8FAESZ8Tj84WFZcinZEv8X3H6LeqLDs37ZgNeeiH69dRfZ2iRiRwzgsJaBYomGH4mWEqb1PDRr4",
  "key17": "5J8uYwTkGMk9zRXAZCERjBAfW2sdRiezcPZWFiGAXSNbGh48AiQ2wRTofQ6KDsApkHFeGanJ4jwq1wUTk5wEsybC",
  "key18": "28sWwWpEYaN2afhPDrRQ7nrcj89kHw2sJbHTLXdrjuh95jGurMg75gpKrGzuzkP5MgmbS1zg2hAYUGNv1yRXr9N4",
  "key19": "4Nemq7vyvpbUM75ZtP4H2GNRKSAgMuSJ2znHiAhF6DdZGwHDf1aH3pijDhKtSvcRR8LvQ77mwTYWBM2SxmQSuz4S",
  "key20": "4BgWE4BU3StMBKWx6GgjA95WfPAM1vF3BYKkLRvgwfD39EwZywbWotyv1veX8VWZcm2sNvSnV8R6kXtTqGNm4yQW",
  "key21": "5AnP1dYbhseSwVtmeUC26vfrHbfJijrtSV9E1oUrxrFh436Ps4qS3wEAmdkKaTaaU9sP1yrhMhmUvP98PDoUKRU3",
  "key22": "drJeDuY9mtVkVrj1CjCgTsYzuFnDhgiPKQaVGqCh8fPay5ax2LGtzcxeUd9Dhd3pbo5sH52FfE2CRcPwbgTi3ek",
  "key23": "7FK5A2oKDtzz9Za7nQBo4hzrq8E9gs96fsZAmffGGFeT6PA6fL3q6U9iDbCyyJgBAbW4d8XWszxYjsUkpgtW1Ti",
  "key24": "pZZ6P4bMvKL7cpqNjkiHon7djoo3Ws1u7rECU694wsP7bN8HnCJcRmsMYvaABqR1mNzAvv5XCZhmFdUuX7ZQeBz",
  "key25": "5oLH396sjtwYEDBN91mFD9HEHZ1dhxAH8BG4AaKCf1wJdjD976qraJgP2Qd3JnMxAa6UXfr2BQdkc6x5MggRh1Rd",
  "key26": "2RBTtDfifampuzwrsFh8WkV1PXt8zmqUCbLXcRrnFDdGRZKX8h8HbfWRbK4iWeBH71K26f7VEAdvxcWPfdjaNM8q",
  "key27": "2Aobi1DpiwJQ97yB1XJyCzfmfgzyke6d4ZJBaxxZ8mQAVfuSNG5WeJKfcz5uGWtdYuGXU66jMpyTe9dznnu73FJe",
  "key28": "5AGmSkLYKK5hxWPSZc8beUEWuEFwqXKqpuEZ3WryzbRmfgdDJU7rSqtXJ9ZVAK85vW9PvzwXnuUsUSK3NbsdywF6",
  "key29": "ECak6P2J1Ets2H6nUXPxV7DseKjBYHcVT13PR5dLh2fjHr3oCWJxYyciJ8YNjvqXPRpULdWQqGHqLKYyKyDt5dA",
  "key30": "3EnhJgiY6g5ABSqSG3UdjEBftDYNBJreSyaeKB7PbighhttEYbFeNzBQFggQSKgq9sAdBAhsWw8qQoSD9ZttX8gq",
  "key31": "3z7ssn7zcnCrsVQqK4XQjHsUQrXiyXbv9dvcZ9NPXh3WE4r9owYtorrf2L2eSmWqXXXGDonTyHbYifK8Xsxicgt1",
  "key32": "E8voMBrJzYLTXsbTT5Yr6btn81LUFRQi7cR6Kf2ppNzRpob7My1dK4ggaZ1htc3L1CN6aSXSHMTmPipUL9uN52d",
  "key33": "5SsLaF11B1tzvXJ9StfEUuQGxXBsCiUy6pvYNFkWyqmracUVADze1wfXiJaMGvsvM4FRnuxY7wi2YZZ56QKF4zJ",
  "key34": "3jLerwivRv2hVJXw2eRyAB6P3LNMvAtjmncaZBpQp2Dmt4prUAjZcYfuKuFMAmZPu1uDroka4y3rDTprQqnrcLQx",
  "key35": "2YbjuDYrsJoxMtGokg3LC1D7zafX8UEhApD6T7pTti1K2jemHZkEH8Q9CKBDWwWcVaAeCLt5r4eD5MdomM6nLmUZ",
  "key36": "44KGmfwJweXf7kkprerQuXucSXQwEgiqYByKB6E8d4Q7CeARPjAxFCPqemN7XXsUvjLC4bo8nheZmVEz16Gmapwa",
  "key37": "5jC4Dd3MznTPPFYdTqCC7VKaJhMHdLmykuhh89nGoqe9oJXrhazWxe8jdSvKobXYVkBAdKLV9Bu93dN4xr7or723",
  "key38": "4GXDr2fhVpHkjMNTAsqFaJw7D1g2fsGH5qiWfTMxBYXmSqaHgc8uz3zBrLSke3KaVga9nmjr29CaVXr6TWy9xDyt",
  "key39": "26hB2GspgZUNUdijCSpRhVSmGFRq8vNKsiy3sPQRLwxi7LMQgnU35tMbDYgddfp9SMCjjNiMPGTdvREydWQ7zP9i",
  "key40": "2yLWqF3h4FasKLVkoW2s1SgHC42XtCmFe4bGoGdoSRBfZjFgRriXPDVNG6HP8WbNQ59B2pscbqKSEXEq2znRY9Dy",
  "key41": "24ZEmN39KUdEXmM42pjrm7zzwSunmuvYgwBv1MXAQmB9SGx2oMCRE8eSDHAC6WkowMuxqSrJgzNAS2hnTvzHXMAf",
  "key42": "2MGBBbz9YJsbA6WaaoGSGpCxsgzZeU559tBygS5fE16vodyjeHZZ6ixCRCaB8x4gxShk6cFyhRyJmScUDDnHiFZD"
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
