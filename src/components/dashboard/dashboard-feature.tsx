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
    "4tcMZepGZUB4cnqkVVZHKcg6j6MAwvxad27uqmYDpNLh4wNn5i7Wmi1KeFbGf8BArHSC8pKafmYo4yn4y2HrGipg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zEcjoW5Z5SRf7fhxBud96nHAcyGUQXcfoyJLKM1bcsDtxLZsQj3fbfbWbAvozhsfPZhPixpSmvPi9pGeHsRpVzz",
  "key1": "22mGtRHUscqWQp8NtCqLSiN4c5qQsshrfX4meL2PURDHj6EqgfD7PCgoNS3q6YDfFh75amyd4nRxKQYC84Ud8772",
  "key2": "3SKvU6XeY5AYtGNXeVW4o8sayqWwH2yaa6Nsm1pRKcLZpAPNxLuNhz3n79D5HbN77sT3iX56uEDjvZq43BVAgF3M",
  "key3": "2x1sz6eiYJBbbMqf5TUVr4PeD5QW3Q7ujum9gVwiFegNzYHv8Y2rFvfnudTCCRoT5YxZ1vgc564AT7btAE31Ae7S",
  "key4": "5mRvRPpJEsGTVX45MjHf8kKoRPQQmrPKEySPuKRrmtfDoVyjY5wmCvmWpytTPC5rkCSwsn1VZTkR96LVS1526iUp",
  "key5": "4Tf5biimiFiWAMq1138wy4Jfv8JjHwJopDdwGDNKJmKwcPSGgVCKTJfysuHMZsBUaJoZJKYqvppjEyqfbphYDfxz",
  "key6": "5SQj6WyqByWE7q6FyoDiTq1KfAH9fTAgerPCvzkCiTeLzP7ZJBhTxQYMBzxEzPHsUQ8NN4jvzKHH9M2xqq3qZJ6G",
  "key7": "4W2QEmd3mFavUCoyeuWe3CfCaeU2ef7F7Sm6yCH3nwsc2WK5TT6AvUWCaGjiXWkskfbJwq592DFK7tBtVfYkYEJS",
  "key8": "5ZCUstJLQdSMpPx3KavAnNtFXSH2Yk5NxwHwbidVGuWEdzgTRs8r1AqRt9oDhUbaLT7AhnvsmdWy9Ak3PmYKzftJ",
  "key9": "5RjbG41gV5EcWTDJdSpHkBrcwY5nxduhJ9grtCfWstY6WgCfhRKa536rGCLVios587kzr5j5STdpBK3RWqDwPaFS",
  "key10": "2EHJUYzR28i6geY5YUFMAF2mJLDmM1B1k6TWSeKr8tE9sFx6c4uCuV1sHTM4cGbkxU7wqNeHUhCbBirnoMiXvofx",
  "key11": "5gQR8vFuDn8QgDtEE1P5euCG8MG1UcuSufVXSz18iPq1GAhFrw67aLKUep3zNSvRJC6Y6dnczazzEx3xHdgC7Lx4",
  "key12": "56DcoyQnirdCdJs3kf83HjCUwycPVHc1RmsxWy4vPKNcVPNxAFjESHhFzCw8eFwE3R2TikNXswnAhb2fBiY1PX8k",
  "key13": "4RdMYhAxCECNG9ZwzV6GiwhpnGcqxh1aGEPbbDozcTXvy3Puwpj7dTsTanBdaHZMMBJB1Csch2uvCnaxFusdCX1g",
  "key14": "5RFnRq5LB2sohrQTb6Xi6cckW9xLa5mib9sYrmdjU6yn6sRNxfQWsJPDt93RvS87BiG2mD7mCJep5s3kQmXEzATG",
  "key15": "2dTfbBanM9bMqnXhx1i6t9Xr61AjQuwctRfWjuQPzSAtHcYrnUcC9bHzt4rnUeAnGQxpmNfNUpnezEokSuECgyMX",
  "key16": "4JTMPvnQ23M1Wjjea3yjUf2hcpR51wUSTn7rPNQ1pJ8PWMrzePBoa4qTNeyN6E8rHuyZPf9yPLHtHc1SgHDsx7x",
  "key17": "2DjBucsepq2rjcis1YB9DTJfTRJf6EeneijEMdQyR7ij4EhZ1orq7TySGEEqV69h8X7BJCELJV7BxhMCyw3w9j7N",
  "key18": "1H2wMpP5yStncyzkxn5Rdt15GUjpMXt1Wtp578NmiANo4VLcLEsNTJDshNzCa34iSo73mmbnRe89eNd8fJDLyS8",
  "key19": "gw9UB3bPgtb2pQcZvxUKXcPjzqFVBGfj7nN1psapn29EVtzAjEtRvjGoovoETjjy2rZAaRsuAQsmbdoqFLuqfFW",
  "key20": "27DjZLpj1dEQnH79AR7CHVRmPEcj3QKBfgmFRibVqKSLMwroP632MotqEeM23Ruczmh6Eg7uChxbCcfdRpBMSFsx",
  "key21": "5W1zQVV3ozfDaa2qKQCNfvwDy1UqAkjoFrZ4pWS7LqYmDzxurH7M2AUz2wtfpvoVLaKP3ysG4ib8p3XN86DQwcwL",
  "key22": "39XntuvupayHvBgeEsDJei6Wv9buwb2EUQpbh8CXu1iYRP4uxtmEMJqai9GEXgV4uHYiSuP4qr333DJ8YCK3QY5i",
  "key23": "27aUAEvwzFczfyPaUjQZS6Tkj4bStZ1sXXXoeRXwMPRcb9YVdY9nieQXmd9iPPttXV3nCEf6MQ7xMbgGHFb8idXU",
  "key24": "49nAdcobwCcYddgXWqtJHWaDwVbFXcEwCLtGngxhfJHVBWTATySnhpAa38B995Dd9CQnJqXjf6FXJLHvREhFZ8NV",
  "key25": "2kU2N3xqV5ZEp17hMc6gvs3QQYY1odTgc1wqgjAfca6q3GSYCe6oQ1ExDM6SFmid5ixya65RQmhvogLarWsJk3RR",
  "key26": "4sqMAUUdaBjC17CqGFmgrnGDT72Lyw689rRzN7F3ypUaS5KhCsJFkCDP7iL66qo5QaSjUXTRAKGLq5iBRRZPJ7md"
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
