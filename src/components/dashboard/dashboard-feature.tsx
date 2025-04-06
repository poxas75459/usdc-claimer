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
    "5XhtyhSVdbVGemmUKGXPPD5iX8e8uhb3MG4XwKtAYPVtu2gTwm8Gqt14gA3dkzdXRvmjuNSCogVfgPAmHBskUuiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NM4h4WYRPE6AUBXsnaYvPiubjtZUncDA3uXWvcbgv7x4G6UjigVMeV76ZFcztgCbhY5Qr67xj1HYQ1nsA4NupuW",
  "key1": "3ottxVBsfDoTYUGUmCADcGW3NYqLjsiQn8pJWacU2u9hYrXnZmXmc7DZKNZiNqJvFoG6h7vBoEK2pGTeUFR1wfnn",
  "key2": "24r8x2PNJqXABnrijwHVCgxuVpF5Fv4ZqhiRRD42sufiPfu6dRzqa5tWb56CnipgvxT8Tdtw3YZbDqxiv8B82xPw",
  "key3": "2VapGkGksrid2GK112kSpysBqLc5wiohN9faXZzGDvBm4LjkvBsuTQotyy9pgnP3vBj3Emxk7BEBnVyvasusNLQr",
  "key4": "3PUWyajLTiFagx5MwRABt7FamAyDmAqVSz8vfqN9N7GPcXgUwENb6UNr4a2p94ddYpRrcL6HtJygP4xby8D7BGK8",
  "key5": "5hFcJowoqszukvf82eTpbRmZ9GbHHymTWM1QHjGo9hCz2yhYpjRqoPF7NSVELqtjgm5CVK8Dn2LAxWbALX5Rorag",
  "key6": "32sSgvak7BnsDRrbjgoGCXowLcuGgJbAtdcC6GWxPqcTrYbHyD2VE81WVxhv5ECHs8c7icRhEGG2YiDwrwAv4fd2",
  "key7": "5EuZaPHRHXA2exNBAXsbjeeQDixJLMmqda6hE2QHg3cMRNq94p6L1SS7V4f3tS78ZHWtAfHFxpuEyfg2sFhsxWUp",
  "key8": "2aEooDtoj5RyyjYvmFzEvHHVq9yU7xB789frQDYSAae8x7fWvezx1tGctqYnbwzY8WvgFxLoSPCpvL52kjKaeErW",
  "key9": "kZfcnYPYGe14UiS1kT8X41Xc84MD3Fce3epg84Qt2q4wBaCdvbRLo7rbatEZgFRbfL35GB4PUNvJ5PcREHGrx8J",
  "key10": "4wfbNmAnCkn5LhRHwYVSb4onPocCCZPJcYaYGWUFeD5zDQQvdMeeRzTSGXGt4KYA74ZdTgoEpgbgeT9659t4mjDk",
  "key11": "2Cjjmn4wVUM7pmLYrHHdsk8GH58oqCKpXkfRp4xBxH4WGehdLzLc4HTg2XK6DWQGcxYjfiRjTMjjjMcjEb2fVsPw",
  "key12": "37es2bnDeNVDZzfsoB8yCr5M7PKHpYTRh4oYuqmicE2juPegycrN1GCKEJJJD76iYMD8RRorsH94C2D2ngpbfXxa",
  "key13": "4S2NMwz22GP3wPdCkwApzpeAvf2CRi3nfTMszkuosfzyReFFV374BEsp13y8tofHZcUjTLJQx4CKABmEdxUrioL8",
  "key14": "4pRnGfR96rQJoXSV53stmVSbHphvvTmJfu7F8Sp2qNySeGqXRvr1yWGD99sQnfuJTGHFFe2E9eCSWAgZGTKLRdC2",
  "key15": "56tqQMM6XDxFEFAuzwx27ij8ycQinsxn6S3XS7ZS1AQRU6xDsPrxBetbZZ6YSLKUpVczzUwTQQXS9Jm1kvapDx8p",
  "key16": "3oKj98kRmYestn1Lx3eS5iYx43Bq3Mw6uXXUSePxijw3CEji95fbTWiwWWsUEemrg2uSG6CGaMDaQwP7sv2XJK4x",
  "key17": "4w12egVHCmRbQorEV7TbzfupTJUoTsa9PuUbm95aaKEQiMgpxUg5u7n7pAX7TjtFXuxrGNmMeS6CWgNSp6UUNGZz",
  "key18": "bJjHdQDwscKct2mL63y84qdZBLag721Qu6CiTQgyj34jszD1PkYKimU6kSz3rDfQ2pGQyLdnuKZhp6CA4UKXuqU",
  "key19": "2KMb741Ge2TfvnfDYWZfgwhxTznnfC1AF1Q4PmWcqtDknW7DQ7tfjCpWMtpfLpQurmF5MzN4qainna5theEfwQ2c",
  "key20": "67GAQWkKv5kTjpyVMPqBZxYriusvM267zi7FdpnauqM4gU6jt6qBG1tJnsqDw5FZTQbJogaPn287DPZ2hktgBzYz",
  "key21": "UC4QgU8gbFCBeGfcdHMBvK42YYMKXTKWambG47yKkeoA9uDJTCsY2dnhmbLTBaJggaWw66rYQELvuKYeyvKn3RL",
  "key22": "zqrYryv9SZqVC22SHKt41LWVjUkCxvDYB2Wb8VDnwCefCW1p3W97R3PDr5Hih7pvXQ6LLr3GnnezBAphF9FjuYN",
  "key23": "xBuyhfaqit17g7po1rMg9LeUfKfbEqmmTnjtQyEFnCYCKFPwiUurwyH16P8H2gXCoKkZRqSNxYajxL9boXcAj9W",
  "key24": "3EKTxiTnRQEVMWjdsjhB3yaDTwrmD5hr6aQ6fitETCszS3Gq2Ca3mfiPbPSqwot6X6f6LT1WmhATgptrnfGL4BUF",
  "key25": "3QZdSL3KyhAHf9But8v49F6cK8EaCWkvN2K3oVxZXW9Pk8D7pqkh4jRmPCu3DWJRbpWsQXT8vtRhs1g7XD8kEWt",
  "key26": "5X3SMWRadtpWhheyb8rjwE7ZcAJEV3wiN9iwps21uZy9b15yiGFuYyjNseaapUdsCRmE4tkdPmMG5xGrXutrFyZ",
  "key27": "ttbfXqZVcQgvX43udiDsmk2LQC8Nb3Us7KNdo7zkUgAdaKacxCmYtwzcLvsvdScQWTmSdpHDnnQjKHAUSHGbY4E",
  "key28": "wUjt1xKRv1nrDeMPFPMKFtUSkhpwHfJitHERuxbCkXuCbAS2HiaYC15ecG357iochbhay4UKgsZKGcRmejuoUkC",
  "key29": "5Xg5WRtqnFkMPai3b13bEmLGJ38P4PnqksxgM4TjX8u8MtVb8UZT7hhXMwX77JYZKXnSPni8KEPV8yQKhAbTpjbp",
  "key30": "5knm6XdRYM1LeHogNc3mKyLwaxqb4k2R45pxPREoPvLEnxZJFSbuCxc5soe4oiBtZLkruSVfMv9mtNvCez3dtVzo",
  "key31": "HSjusbobPRjYsDZUFjNyGG5DERx5g47EFmove7pDqc2vtU2uaJbEZDG9nVXBezV5JxfqYUs3tBjD7V2DeJpfD2W",
  "key32": "DHsd3oDw5kW1vFQj9BY5siTjURiLBevfXUvjtQ931jyuKZSUHeXDfnEu3N9G4UbipDL6e5bf9wLJ6GzKs8XXUoZ",
  "key33": "4Eu8vXGYaUT6SBSUtbQrRTzWw2FpMxdj6vyFEqd4bNuMQj8WQAPBkxWxFMb3S5tqAgpyQKyqsivBAFb4ENqnyAQC",
  "key34": "egmoR4XcjfHuSKrzppSuYuDkm6XRLuQthw8wRsUAGSaXsFwQE6u2g4o9fmzzSvCvb3ArFnUGXDkoabJyzeBQSGN",
  "key35": "5cix2ZKCPe9UKYjyD7u1c46eSayanymzHkKGvpCrcpCyWKaHuZTGQS7sHa8nebnZ5N6p92pjaSG5KkPHEu7UxUi",
  "key36": "UE2JigPSai3jDWZrsLd3x3f4q77Uz92VKK1GZR6EPaU7nja2j6aWit6nWZiUjR7oEKaqzzZP4d6beAWHYQZSuQ5",
  "key37": "2FfB7anHqJ3KVrpFQ4JKYABLZHLXsfrjWq6v64j25nuRwLeJiAHMynkgRBujP8VgLbEcVv7MnVctx7CJJEbmZTo",
  "key38": "39AQbQGLLX2feTt1SKdCm1EY2sXTnCeXgX38LraZ66tpuJhHGfXZGCB8LXydud4SjbmvPv5Bahmh8ZADMdKVqUiW",
  "key39": "42gaRRykwJiCzSBwEhDh4CJ9UHJphZdSZ7pzi84osKFHTHNNV3CTkDAvxwvTYtKGCYDETJQw2MTo86WnHo9Dx9mT",
  "key40": "2NHVgU24MLDEXFxvHRvKWLyf7xGwZTfihuqYrvXDCr6Zy5EvzxhuyYdSkQyzoMSRMcprypjs72xy8RUWDAm5pYjn",
  "key41": "5uZkwq2tzHvP9zRhhKw6NphPdiXKkYb91CtvUgo2ivKgvyCTPsPvFJahacQP5oZtC6JE3J191j4DupvWn2ASEmH2",
  "key42": "28daN9uEwQfGMd5HMe3Ge5hZrc2BtUZRixRqXEp5jXYMBBYE4S3mLHDqd8L2kTSaB5haoX4QYntEgDTTjdQkxHoZ"
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
