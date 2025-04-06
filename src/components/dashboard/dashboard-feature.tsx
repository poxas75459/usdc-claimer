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
    "3vsi1QjHipM8xXSWAtEXdRmby3GzgM7MCGUbBBnZLaMRSViNniabqxBeSqZjKPUdH64hfsFm837VUjLSkcF5ssyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTrqFoNCurMXhZ4uye1AcSrRgXzjM8bYfr7Xo7kre1iZQa45qm42UgnMP8pKDZaJGiySaUcjDM8XD7wjXJvoidi",
  "key1": "4LuWmesBRb4rfp84M8EcsRE6eAQ5rsM2KFgUKdHxAkxpEHoWX6Mnr241GUEVNn1KYtDAtF3xyvHHgBjmD3hxxK7b",
  "key2": "3P3Gtr8CMQGtAD77zYgDbU6gwiNxHFR4XCw4uJmDDTyPm7TNa55MCmNTSaGrnSZyq1sZA1siVgkzjKKY89JesJmP",
  "key3": "4KLRMryDEUMw6yLRTr4YhjK6SDp9FCQSPTaU8ounLxkMNoDA4mvRcrvEEarcj4mLr5gpPc7Vh43oJKGW9ECF1Gjk",
  "key4": "3JZMc8LDZvoBjDVg8u3Lj5XRSYGMXq8MFdgCwVxQFNVzbuEoV3H5tgSEGbMWxsvr2xoNTTdk3pGq1Sgebnsu3TrT",
  "key5": "49yEtxRmyRBVYi5iMwrCh22rJCMaDFdviPvr3TDsLTER6mkEtHFV25keVTF91QEbZEFiZPZ2QkeybxjgVF9VATXP",
  "key6": "NK8vJhy31gFgwp6E6UBkS28y6hbmyrXjQVKmHqvkYErduuQP5SNKMHwEv3dwrYYd4h6snqiBmMRBFwZLVvCyZ2o",
  "key7": "24RaU52RJA9eU13CuPssUF2SGUGCftHqjN2aVnBpUsULJkGLs3cG6NU22TfLg9sb5YpSg3ZvnTuz3vGFWu7SuLiC",
  "key8": "78jzfFAbA6gsuZiTc3nHz4Zy35P4UArNopuyj4cqSV1f2yK2P5qRz4BtcE3m8x1YtuAL6BsaEP3oz4mkjW5idXZ",
  "key9": "64gffqGWsTK4SG8pp3421QjMm2Bnc4YsXsQivFznu9oePsGZhTsVY7sDRUixdSJFhAtwr3Uey8mqHowLXFLjZNiB",
  "key10": "37PBry9N5AKQEvpGziDGiyzRMpoUh6sg94ooPzyQM8iBgs57QMFLcH4grwte1y6neDSt24UCRNsMwQfyDR17hxZn",
  "key11": "XBcM8XWPwRUSBoJV3agtQiHgitbd8xSoiihoVPbnVd1CMjxLZJMTZkPJUxVbpsKGDjELwVQqDmaiHcSWJdEayu8",
  "key12": "2eyev2ZzPQ34hFHR1GsdZRHCEVzwnL9NHHEy5tHr7UMujUyxee3WQfPiGTNBptiopJTXaWrALfDWbDLxUgRAfWdV",
  "key13": "38JVRWiV8G12HQycxMtrVyVKUWtenmbvAa5Ye7fZUC9A9Ce7r5vsp5hBhMJCsWZbFfUjGQZ7q5SebV8npNzZjgNr",
  "key14": "4bFjx7GSBKbZFDtYzbjPuW5Y9CmoK2EqTqkrG6ch6nXYmkpfti7PXH99ywRkiYPU8yw1xMn1ijqp2urKnk7dDGEX",
  "key15": "3beQofrsvNNV5QwE6pLYc7xFd4J9uj6WsfcvoNEXTDLPLyMEXMZx2JGXVrhPBPvo64KqPccd7Mrq58jjMw9KjL2G",
  "key16": "4YpWTja7LgBZAdywxZW5BUDvT6CbGkDEBsW9qy64kV14jUACWCsYR3yRt15dKfgw3W7XsgC3QMZ3b9d3fJr7JRHd",
  "key17": "8uxtqcwHjmAmvTpcwaZQzCF1jFV7hWTWgUa8UEZ88ASNF71ZouDLYEtrSGvBzUgFk5KhMJdF1xYHMQskvD2r4xf",
  "key18": "5ARsJzP8DWA5bkFmo59sZZdhoH2HUQrAcvAvaepyJ2egHB8jmi2V2pswGi3GfkUi8uYE4MXccFn3XShdaH4XnKED",
  "key19": "CMNrx8R9Kim1yap7emZdD1dvpRfy4vWJjv91FycBVJ7fNy7h2QMgQLF8M3NRzPhBvxk2HtX3iSY46tjFtttPTEk",
  "key20": "4X7eUqZQavZxoMhkEETi9jJWuMdtTo79uiF3qp3EBSw2hnz36vcGcFzoLuR84hM15s2EhoWs5MRXPYHbcxAHT6J1",
  "key21": "39a9iuUU9WE2ksGULuejFFUobwWUQe2VBWpiExDkZnrJL7dMJCkbWkCXxSw4fp1DeVg3LVizEoNxZLgnVQCyq3LU",
  "key22": "3J2NyrX3T6KpzqqGUwzfVPw1FF37aTn526SLtqqhoWhGZcLsCvmscjtbJgNaZNGrUb9bMMPE6LNj4TfxAz9LsrS7",
  "key23": "5Sd8EwvtAzUBT3TPyf43Yiv8jJYTnJQYqYwBmkFM8ovfrSzgUvAz3nW2efkU4cZN4nXQnDzB3FH75hispMLP5TMo",
  "key24": "5renKP3jrmfGKf4uw5DU6xU2rNAobJQZfBWU2WhVVL7cRMhX3oLoSzgUq1jsji5YK14Sv13ZmVmHusDhM3YwaVUu",
  "key25": "2Kz5rDbwXiZbnMvuuNGMdVikWv6V4Ubbd3YtxoQshEfbrTu9Sy2415hnspPYmnQTfNkRrCQWXcnzryH51WiucHWD",
  "key26": "28aFkHGdaiduzdBgdEyK8NqTGifMJiFmyfBA5Q6fv7s3VHoDr1R3uYhsEETFm5Np4sK7m25nNmWsXUpjs3ZE84MD",
  "key27": "3vkqCVZhC3XfSNEpMpTavCUWYPZ3VxcSCvZLFonZWNZbGjyGUdqRr4WSqQTJBNUvquivJNyH1rvxeFXyMB68NJTp",
  "key28": "3nq6SdZe8vwwBiFTUTZW1jR4MV9hRvhA9AXsCjBe25KyFeV9P3fTS4SSH65VX1uY5a4VCLQho5TVyh9auDzGrBLV"
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
