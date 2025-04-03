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
    "5WXwf7njRnA34vPFUL576LrTBJmPyXvpwW7p8Jw6UcheJx7TtLdywAiGVnpfS5KLdnVEzTEG3x8gvF2NWmC41aFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38CbyWPVcYnEVbKoTymXfxtiCPmp7awzeoHBuwqstXvSmHeDYnbaPSPBgUhtEL9UzDPtAapmhsuwfMj3fPqiw1p6",
  "key1": "7pQStGPCgMnML7RP9tfTG6dLEBSHYJGRauvuEVvnzXPzS85RSjbjs2KxY2CNeXnbu6CfrZmHy5XcfTdG1dNdD9w",
  "key2": "4ubPRrmqJhCLpgQ9sth1Dw7hybw6CQrBKjKDuay3fRvJd72aDwKcj6ofadX8S7jk9MZkQG93sjMHHWHFAp7X5P5A",
  "key3": "RANpvEydzbQ5HLajJeVSrx1LLWeT7GVrJRnK5GBNvLo2ypkChP8unEj9Cdc8g4rhUr8K6RGcAzSYuHffnoGtM7x",
  "key4": "1v4wE6Q3Ls1kJU15FVejM8DpecuS5og7kgig2ZwaXGdGMAMWFGQ4wJZqFb8uUeugQwiEkH2EeYQn9LkFYVzKFWT",
  "key5": "4dvBDLLwSmKYGtwkCJ23vbLAFW6cpYcLEgFTrUcQzxTX2DpWVHbFWy19za6TyfrmdwGaTn75eVXgT1GNhWdEtnhv",
  "key6": "4vQCVuZNFvQn7bfrLhBiVeALNSdt3JmYy8ZkKNAsfyWDdiJH6KeKUHDgBu6mLjHPiUpA6pQMPM6ivi7wfdVc4p7m",
  "key7": "3mG9PC2tFRHF3LNUgThCiGqj6B5oHBF6F8rgzUfRzV5KQKgagWvVaLcz4NJJmx7adcvnsD87tQ42vfmkj8dXiMRM",
  "key8": "2L64Mb6Q2ULZCXkPLuyKPyeJBq4JLKZaH9uqUdxuPuFvRXGkS9mqnZRiGd8Xo1CW91Eq771Kp4YJ1ceHMsUXBqt7",
  "key9": "2SuzYufhnXVfSYdQiCyaHa62V5npVC3i99G4dgc34sGhazNi8EPaPzSZBrH4qQVLmrvcAmNjHQdAR3LppME7Kmo4",
  "key10": "rtdq3tWNTUFjNdSfiUDTTFFoksBfVge6HxxmBQWCiXgHrnJupyKLzxQsuVA4Rz1YVK1No84RvXvpVD73GXRGWoM",
  "key11": "5vTKWLxbfkhJpmTkND3YDfrMBRpvm6kE91ug2AhQbC3VxCSM6UFfemQ7LL1s78DkvbfjMDUqxYGX2ZtVWWgMuDTD",
  "key12": "5ysWgvCdB4NJ2KrfJRQ4cVDe2pAuWxGbrUvaHj1shQqHywcvwrA2tUuu9ADNToPgmrhTVEBGb5cPx7HK4n8djbMS",
  "key13": "2FCRZixBojiNgdLGHKk6Br7uGUXFbPNHShN8wbppCVTdYj2DEpLbc8A5rzLPDdW1JizLBzMwqZ9T6YxZDcWgpTXx",
  "key14": "5ATrzXixhwSdGEsFrJMEzYJ1DLehFk6pF8bEijphVGGwtT8MoZEGYJUtH4M8AMXxK7eh5qdL5LTpVcLfPra3P33Z",
  "key15": "PA18P6W7b4TGjU5HgijKvBZrXSFQr7pSvA2M1fDWQupk5tcSmgyC1bYh3DZT4nospiUYfDtZ1FuEGsfrUiq8Sbv",
  "key16": "2XeMJGkrWwLwEwSPJcWcTBLrn9epFdsiNCFCqRMvJ7Dvjqt9epwRBsr2BegHtAkduMdLmntFqRDfHnUwv3qrJTYN",
  "key17": "3UA8oPwdMfpALRCr34wuVeiFe5yX9yp2CuyiYq2BRqYqCvbnWAsHRBx3bBmhWWi8kRSCHCFto7PgJF9GaSmadZ9n",
  "key18": "5nJDLrTuNngZwFqD59Y3HNKyKR3TP55e2Mc552dBwweTK9dptQiXpVtkpbYYS2ZrQ2DU6wVChWWZqYJfveFzTMpY",
  "key19": "ouuCWbawhMnXWA6BCcgME28NicAbAQEkF1VsN167rsGKYvub613S8sKa7kJQ5EVXey4SbzVQ4PoUU2Xwmv8dFQ9",
  "key20": "91JtqU4VmCiWSE2r22zxrPeyYc9B6h963dCp1RQc41PFmgAR99drUrm1GjSpqrvMkaDGLCUra2jjYFwAnHNty26",
  "key21": "3sqn23oVMyDW2kaWRtnNgAKwrNkurE2MVb23Kh1bAVxXvH6QRi5fLoa36ys39MnnakAUtZey5EHwV2uYJ5xe3GwX",
  "key22": "5FcMeyxpkeUV3MqAGr2nKB7HwAg4nU2sd5UXV5KA8675Ctmi7djrhGgZ4n7ubPVWmh2jTYqyKREW5nEr9mJpdZLe",
  "key23": "3uHPcxzhbkiwE5onigo7MbermM3PAJ3ysqzRDZkRReqD6XVjvF3fc7mFQmjZYeNkxFou5dBbgoQTZKU36ggikrrX",
  "key24": "4qyiCTMr9SpvKQm2YqAeZ2NSvAPttYv9YDt5pv3rQPWdAXjte1xB6hL98eg9L2YH3T6Nm8QMcmm7riaVHwryzLcr",
  "key25": "3x2W6nz867uT9jpxqi8XEmSx9p727XU4ecno7f6HszLATzBoCwtZy6VZgpq3Kwd7vSXaev3p4VF2M1FSNm9LFLoN",
  "key26": "4tT6yaojjX8n7kHE9Mw1pf8Kc8oKnmywpFtZsz4AXjqvnfd8JYxW67gEpBBDaaymGxCRWk6cgvh8CDCGJC3qBfnU",
  "key27": "5QMieHpGiXiD1gVKB98JZdLMZKSSuLE3Cz6io323a1cz6AqhUSehsbNzuG97qAqSVmuppaXmajioT5P1GvdQ1vdn",
  "key28": "Vg7wzqH4hopL7pE4rF6TWWhgtXC3pQYbQqi1zJ36eYLRMmTdY8UeHixHVTcBAApPfh6Ry7mgLcqCckSEuAZ64ub",
  "key29": "MsEs15DyRLthFJzFrgj2NLQYLfxoNVc1EDLwk6Jf8mLsEhTKAg2Veqgb4e879RuXoZY443mAt6kK8AShSsG5AG5",
  "key30": "58ioYPgj724NUvgHoNqtnp2q2Hp9JEf2unj82zY886ayCWnsWe5ymujrir32vMQnbu6qjSNBPRrBcVvnCmd17mD3",
  "key31": "214ErvJ5goLo8yjqS67BTewH9p5uyA9zjqS5gSV9CJYvXsiZsTBS36z7q3fLoSrC3pwAU7TSQ4rTkvpwMcGFiDbP",
  "key32": "38w1KVb1QGgW9jWEyCL5CaRX6dSGkH3i9Wm67ZhUfw7Vp1CPL9agVQRf8F14JL4QSwu5GgE5x71n2Rtg6r31pBrm",
  "key33": "4DUmrmEMhroxCrmyi6TuzEBjxiBiEXSvXpxeeuCMwwvjMX95XALSBVN1HKfgRCeQLwKWnydWpbr5vxVG4kkRtEBf",
  "key34": "24Wk8G8CZENFLH5aJQNK284zTr4TonQDkEqXL4AG1ssxXM6tpxBLA9nMkW7FnqmZLicMzZqAN1gxnUrNyu5hswbt",
  "key35": "3AGs5Jtuv9zym56QnDbzQztPhywWgQQ2RaaB5ikwLV3NFU4unqgHokuo4ea6KyzzwSHedEWtB7qraGBqAfqykKoY",
  "key36": "ZN2rgww6ErScHtg2x4rBHiDRsYUddq1yKgLjCQmSRSBSQvNb287Crs27FVAzY51fUn4WqJA8XuCarYuGBKuRbUm",
  "key37": "5T8AN2HA3b2wnfihkX9RZ2yXnMHYXE7pS98WCJ8oZGZerttV5YCttAUikwtiC4wfqXccRzEeMS8M9k5Sv1S6uAg9",
  "key38": "DSkzAcxFQRhLM4hyEvYKLv2t1yRdy34NAD6jPHnj7bF9QUxDD8B5DWMq7AP7Qk39pJjduebzPxftTh4U2HmUfb9",
  "key39": "5iBzcEjTTtwkaWQjTZZBqahfDGYbm1jLk8meseeApTQxjSoY1wtBmirz7cBgY62EsFWLtVPB6U2L1xMo4yz4CmXy",
  "key40": "654s73mhqiPCT9No53qBPemmbTtUofFuatZGwQ1vxMH2z7NsRya7YnjybFFLP7mSoZgpWQEoWK5quCUbcoyf266j",
  "key41": "5H4wmbE8VYxtDom6YZwCpckKQ3jiiR3hg2cFjJHrQkDrCdHqbZPcGFj4n3z3vg4MASsXkVonNs8sDMTLDqkMJvAN",
  "key42": "2JFGUbM8BS6K7phBXmToWK2cZXie4UEjgFCzY1y5SwaYp6VUMpJoKWkHjFj7EJuwjqMWZzjNqiN4f9Snnhrk1Hh9",
  "key43": "5VfY9EmggeU9d7ZwLyaZrMEDZC2Dq8ShoJjbY1TJEsj31Z1enssRjQs4oYF7pvcLVzugZNeMzW8svDpTyktUm8iy",
  "key44": "2vU7a8UimwMpXStznNRNaoz18P3n5usmeRN3H7hrzXSgM1gRcLojWTxYqWtg9My7gCGDH3v851Unqfp6pomEnMEo",
  "key45": "2MehqzbBmzm6UQCAvDZ4ZWpsSEqSw4xxueSWGKHiKN75b5qDnnujQADF6E1tCanDkUXKd9ZHDGVnvY2g6bmvwNkG",
  "key46": "49NgGBqjM2sBbzfFC9kwS5MUdnTryJ8PV8qomS1niJ3EeUNJabyAmirhQvaPhowSxVndg1ih9w7TT9TwRnrmRDiL"
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
