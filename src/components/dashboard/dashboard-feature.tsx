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
    "2DaNa7FqXHotkiGPhnRSTUwucz957ey4SVfmyKaUCvjX1u9WhTLekj1UKSJHLjHmwJXEwyJbzYQxhx6smht44gjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZgbY1FAvBHCGHVJqrpzzVBac5rXPMF9Qs6ofqauVQfjvCBP4vQGDLsH4msknwe9WSFSXTNgQTtpEmYTrU9t7qR",
  "key1": "2ZLHMfsjuvWyEByRopwEnDtzq1KexVE1BnUAKbJt8x5DV55Bds3LBRBXqams81qtd9ARsYVY2SVcjZB4jVVvVcPp",
  "key2": "3qdDQiStXfnUsDP4ABUVq3uLo1QKhmgC52HZb8piJjeWvsLPr4Sbbyup8GdviXbDTvAabyG8HQZ12fmcztxhxExm",
  "key3": "4P7nPktQDoieKxZUdDVEUpU1Scp4G9H5RNLTeTWQuLxnaGMwpVDw2XHCiqnvNddGDtuFfd3YH4YJYxdDLKATLpPt",
  "key4": "3AzwGXgWSJNFS5EZ755vt1X42W4s7tcA3LMY4pwTWnUUGqUc82GoXRRX7MZSfmSPfpf9CrkhafixP8U7UHsisfut",
  "key5": "33xRL84FaLQJj2hZ5EAMrw8UhD2gASuHLUJUN1hJeHjHWf57g9Hp8iWspMSXVWwza8XuWX5RxDnF16wHbfwNLLzk",
  "key6": "589dU9rz2QA741TDkX3Fjo56btGJ6KiDj14L11j7DVPtXGLXCjzCtoEgbPczrPkixBisfcSjTh2PxoaF5bknjwRz",
  "key7": "48dMBSEiKh1kZke9SizhUJowSL4RD1LLiCMDpAdLHHT9LzBA2NobA2or8SFg2Lv1XqJfAYB1q2ZUXtouV5QhKvXq",
  "key8": "4oW2irUxwN4S7ytosvpV3HfGoaA9TSvFhH14ikaNkU1tMJwrBgbgKPdMSviareAu1QSRLbsEwU29Khb2cHULCPrh",
  "key9": "5KTyXYW9Zdrt7UfgF1LYGCse4L3wuAyngq4SJTGgY2yrNXLNWYNAxWv2kWH9EGa2h2r9W89A8bWBgMFLg8V3L7FZ",
  "key10": "3zGLKtQMx7vFRFDGWVJYvwnzEDuc3y8PMx8NQJ2dZRnT7tvQ9pzgL8p9kGPKLc637Hk3qPZQ4T4bnHGTtoMBJc3y",
  "key11": "46dnNXx6LY6f2KgVsNUGVhMFPc9ceMyLihkgivB1Qcx3eKwvK2WrtjYBwZuZRaxp8MhDkq11u3KifEmcCJMr3gW5",
  "key12": "iF421UYJH37K1wFoB5owuHRAGDZSAgvj7s5SYmmhCpraa4FGt8X4wzXx2dHLSaxynydrLaFkrpYApQ5FmbxVLqp",
  "key13": "3Qo53dRHBFbhdb2RRrS8T1NAGM33A16wnEp44oKfyNgnrNT5scFhmsfR4MwfCAZkHg9QEKFUkVUPxvhtbLhemA8f",
  "key14": "4otp63B17SNHGPMFnLnsNVjZU3KPX6jNB2CJpvreiP52vCQDUZNBy4v7JJ1WmXZG3isqaX3ihvrWMqRH3dVx2JkE",
  "key15": "3JwJivyoaz6VXujGf1Pvm33BPuozKRastw9PC38qxcr2xcBZLUBM18eonSWw6i8Dfv3bUuVL26kpXru5YoGfh1L3",
  "key16": "5oEkLTn9XhfSo8JXwUm83xgk8Wfn9qstB96BCASnEnEfjv2jVEy9Ry1Nd52V4cHdkGFH6U2seG39txJBudEL2arS",
  "key17": "mjpZ91VgfUBWcnLi1STGqs2FRfMsT2NS4DPqdm9LHz6GzctQTti7UphKsPmB3bNWiQVYTHyFfq6J83ijibVmrw3",
  "key18": "4unp4ms7BG7wuMxeaXHfVbhB4Qt8X6akzQxoJ9ptZrYTkkX2bWQSUJnrwwCaKg8m2z68aScxLTDBJ1VGbAQFRan9",
  "key19": "amiVuVSstL296gL5cUnfLkMdLPqW1m5M3aEg7yot3daeDyQU9rtxeyZtJwtX2joY3wXXJsUbXk59eWRFja7XQoP",
  "key20": "2RFFT22RDuh8Q3Hs9JZwCVVunRhzMCFyMgXPDwfkoQFFdWmoM5CLVHXS14anPjki326Uq13k5aHdrgeppQqEGmcR",
  "key21": "4TvDmHfmL3FfZ8gt3na7ZtQ2te6LewtE85YwETqmzwpS2yKHr9RS936fqJgNjtHXomXSvG4JXaknfpYbLzp1qDGc",
  "key22": "4MnmtZBuMdrtd8JnvH4LDZWGSem1DWXpZjDfzFBkM9E3dicYwN9CuC7pitfi8e3G2nQrJdSkwYnqXZNxsYER8mns",
  "key23": "2QYAxUjCUGrjEZWuNHRs55d9k9F9Jhk2Qz2D24Ubvk6cj66mRP47t8Whnwc7kCV7XVsQjCxQPgkeV2NYhiFcfisr",
  "key24": "2yEyQfGREfmBGhCb2EBsA8APGLtuQKVFuzcFarmnAbWJbGLukSeM17SdiqEfuNRYUnuYGm7VTtEY1GqSMT6TxSGA",
  "key25": "4yUAeYeddrRGcpLhJHrQPA1fh1mHM8Gpia2YQY38jGs7XiDk57LkmtVjSp2CV6uRxNxDHb7qxKURdxwgLubKdc84",
  "key26": "AySR71nSQu9JE58JjHPp1TxsEWunpnJsvpqC7k8KXBDLNnLE2K1PJBP4knkRMTd5EtEQEyKSyTB5F6mN3x6KrPd",
  "key27": "55dB91YEVoR1CzhwvxW4h41yX6Mm4w7GjCMskTwCwUE5RcrWytZcTTZA613oCEzUJLuQR8Hbm55V2BZHGt1gxJ2E",
  "key28": "27QhLxiPDkRnQxjgZwewGX2GpBU2tngxEgSCjaJxdk6vX7b7KdWLCMisRcZP15agjPQ46vZXCUQvsiG2cRNAW25u",
  "key29": "2VnjvmMeBmKhq4Ae3bN1s1SvobHmrS65iAe6mY8fwJ5JeX1LbmKxo914F2fs6iYXWRbWaUW3zsgaLTm87qP1zwg8",
  "key30": "52BM7LGRje7WC7cE7Buq5qwbHkewKybdbZMbXDRTJffCW9Qv7fTnB4dLGpmdAHctkKDs5ytUc9KY966moz3zu3Fb",
  "key31": "HPthk2VWyo1cJPEA5TpWhBSSqtFhdgASYW7WtUd2nLWvLAfxPok4tsw2LGSoqnRnAg1j4FiFG34Z4PrYuDtQoez",
  "key32": "4wnh7Av1jguKHNKYbJWauWkzsT133yr1rezJnB45Yaa6JS5LGVuzxGceSQgAkyN9HH7PGQJXbg21qMmQ8yZ6rbjT",
  "key33": "5pve7URwMgHdYV547AezePRpWAixG3y5DAQycE9S64VS411j9wmcaB9E95gf1SqgoJ7ZBftyquYa9QKc4DESd57b",
  "key34": "5cEnLQhxRgETtCwmHcJC1ERycqaJiap7cGbpCCKqsZ1EjN2RUTPuYqP65PV52FmfvMJjthgzQAg9eRYdB4bQpgqC",
  "key35": "tp7PYYqifQKcrLNTe1XYuHMA8YBdvnfEFp8poT6XPVL7ZeN7FtGKqJfdcyn6JYsJ4tkzW4GAEEqWZGjLL3yb74Q",
  "key36": "4WZ5uy6rTF6BK9tJRsgBc2evyGuKxdwMiCU1CriX8SVURXB7vL3S6YmcrX9hv8aS4pt4KNYBaWhGxAUQcjkVo97E",
  "key37": "b1WcptVMQVc7Fc4Q4JxTzR4tywgBoAMeqHa1sXk7rFzTuD86dcqPKJriogeHD3W4v8Tqx89teXa2JWNGhUckS52"
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
