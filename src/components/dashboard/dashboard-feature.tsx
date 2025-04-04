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
    "53foT5DDTjCqpbfZbVGPKfT897VmhZXFFE8AnpbUf9Rnta4wo1Pt6qoRTDQc4Ctet5wzqXgfNv28MdXQXpcM6Yop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpiuYzV7X8BrrW4g8JLig9xNcBDBBL1roXRQG9XbN9foq6uyCBsiVcj5f8DfVep6frgGAiogZ6WeZeWoTE8xQtb",
  "key1": "3BMFjDoZ1kWtpX9MaR9Qp8dNx1tXQQMUxF5QmDXnE7nr82azmAnQJZwgkE8vWWsV6h7Qtub1fgJiAXsWoKNDmgcy",
  "key2": "4MBTWwHSNV1G1oq3Pa3Jj1QSambaDGSSSiSQfAwEtzmRCNg67ir4x521otBehMdNDVzepnmAXjqx3Sawz2sQSveN",
  "key3": "QjcgctmtpDEaA7i7R8MBwufUjnEMLLZREZPiGCRxsypfEmp3BK8eDZtPxKbCq9KqWYxQ4Vxhmkjj1XfJVa5z233",
  "key4": "ya1bKq4pWFaSuwhHx8aMSLGg9gwHFtzeTEzSvLXangUi5tG8xCvv7oocdfvmGJyNeA65xVgJQrfta9VLwJEjc5B",
  "key5": "3grPFyGcWrw2qpbFJYQRdjFZyEfPSpP4hn7DtqRtxfckpT2vEXzXvwBiGuhro91XQWKSZeCziGCNyLk87hkKngUK",
  "key6": "5cQEPKaoTXhzu5XCJkRwBW3sBLDRWmtF6akYa3KRkLJVQoLRtwoMAfTCLdxTH9vnLHLART6vEUkongnRKxVyAHbt",
  "key7": "3A6eCePXdfzn4ErZMqy818GSBcR25kSFoCnyskW31JoHCttRFK8P75w25x2PxzZVh2wYFjjJVwgUuEdTjtdKYVAD",
  "key8": "34W9MxzhzNcCbiraKnhmEccp718bLUDCWguvUoHzYZJopKN1Sye2q6ZkCsGvqnkNw3XqUM4qgsVVk9N5RuwWoHHk",
  "key9": "2VRPbQ3S4A9GDPFoewSx8YJkaLZujfi1Ru72vJCEGCypoLMxxDWiCVQPGjg3AaVVC8hGdtnTk3s8A5eiHMhKZNxY",
  "key10": "9T43569VKCZ4H88AcCrpGWSQP393dK2N96G27uyRp42u9scFswpG9edCsE5i8WZHreQC641rUEKFz4fYwT5Dg3p",
  "key11": "4H8Hs8JcSEaETL9XGMoTaws6CrNxhpeuUWNgSA6bvatkR5uFQeWeSUyTj3wRJcfjq2XZtNmuL8txg9LSdiFBKson",
  "key12": "4H6wooBLKYzY9ZB7BRoDPDsHKpWn2m1UeFHjhjgTreHBDR78bAb4TmCFrBwJxUvPQZuyGK6cKp9VXYeZ1Z81LpS8",
  "key13": "5GbV89JwFBCHEdQ4N3CpWTGhh72oVkQYKdMA7PXjrYeimsYwQvw56TD7XBdeR3TdGH5bz5PB9G7uXsEZ2ykUawg4",
  "key14": "542qbpCTrZnnnn56REcTepkSxXqAxqQTBETxKTJP1cQ8T6rSKQEqVrxTGw1HprkgFL3jzSQrgRp7ZX9JyMvcDLUK",
  "key15": "3tiiKFgxvAF4n34k6FJ7DjAPFpGtggF25Zjku5JsRTGhMdAuoSkKbSFrExCCr8oy6mUUBg27gw3NNQwCjxecGSzD",
  "key16": "3AzXCcms8g3FANDpFPnNDMaQwv1ZXjEHn3ZtzvQaYLGSb5yJFDU1y2N1us9e2vKpmAXa9eaXgf881pSP7VbRpFPJ",
  "key17": "3mTvBaqwMLNVtWhoh9aCE8ZoFCmBk6wVjtfCBZwxZUwmM4NWDNXNxv7cp8f9S3mC1NBjEknH6yTEksZGxfsLLcui",
  "key18": "2gqtMSCaoxfoMARJP9aKW7wPY3r6pAN6kQNqfUb3nF3LjdQNj5grJrnMKoYXTW2whZdg5JKDgQU2M3fU324aKC2L",
  "key19": "4NuQN8UZyztJUXMFQByUpHPydn9GsC8LuWWZnY3FsRHxa2YwYc6u2ZJ7p9jGNhK9cwwmP315LuxVQoRyLr6DLjCC",
  "key20": "4xKNv2jvE9sSakGp84QyZSWdZ9QgQLQwyJ7w4Ury4RM6G5hdrH4BMf645MqG1PNhioHEbnr4WVWAuajTAL78VrFi",
  "key21": "4vBioWsQYUqsvNeLHbna2bQsWfN6eXQannE6MfwTQMuY863p4VZPCnKTg2trZi7BG32w9eV4WLyJ8VhGKS8tjGtD",
  "key22": "5UwTK5r2UNWguLwZYTvjPpMdLNvfUgZdhmtT4wXVRdRrM45XmnrtzgjWoq6kduixBVkFQahyG9asf4njQzvtREZ8",
  "key23": "5SULk7Hfh727VXjs1HiZxowopGtF87fWSdrVefUhUEFLQ2q1y31PqQQ3D5uHbaBs1ZhP8vc1yDEGcfNX9HYUqEbz",
  "key24": "285TVLAXRVo7ECQJLtniQnx19dHSK38Uma53yoRUGW6T4wvSM4aEAeUBfWzqFrFaPmwQ51wdrsuXJSeRFfchLag3",
  "key25": "2bExxj8QRntoyFjQLNGyeCqbzE1CGER7kNWTAVVcweCCHZKMJyWrVqi4mH7TBhMjnXpgQzkr78BVCFiMVQSvRpsM",
  "key26": "2jZNBBoReLJdaEuR4NLxdXi6isumePS2LfJfiLhrswCMtXN5gxxBS52TPrVJVpdzeywTuUyjopECVPfBQLr83hUp",
  "key27": "2Ft38W6yqGg4H6MfMUbZNrLX8YfXbeyX1C9i5bzxwceR2tapuRt2x6oSbESjeUeunYbEvWgGaBWt2njqoo1UuAyi",
  "key28": "pGbnVL8pifJfjXaLFtRAVvN4bphNVDaNBz1C5tPyTG4K4ZN4N3y9xFGiQjaFFsisUjKcsprsHvsermpTxESjbvh",
  "key29": "3xGyW9xbzRtcag5CcY8R6uQ5DJzE6d4jJcgDuhHrUoxdMLFPnSYMMvpBTaYRuCiTEpcuX9ggJiT8Kd62EDbjAAY9",
  "key30": "3q8KLv5vaN3pdLZi17GpdWBLnTXeMBGMtM4NSB3NnngyqhR1k9mNQ61bTPiRneB1KpbMiSCZNepimfZ1eNDujrhz",
  "key31": "3zq8PEwUW1szP4TVjE4STL9EauNeTvAez8HyCHv7bxBbsTMtRgdsSrDnMTuMrbf5qxpDgWXnkwEeCvqJXkfP4iU9",
  "key32": "4scaMo5RqsBfH1Hdmvm5BEygULeV1ggNcReBD1fkyMGtwWU7roxQ87FaF58pffjheFdRgV6hdF66ZsGEr1A4Eyes",
  "key33": "4WVD4KaddAycMbk3n8RLHmetfwsDWHWgwDWdToTo1Qjt5P6sZEmCYigQt2AGdWR8p3w69qt92rFC14s9ZHTpVfuB",
  "key34": "3ucsQaQWGuRUkKFyvZar2MTbDBmkTpiBisab1CZBU9TECfSmpGqQ4h7s8WocprPXVQHc2yRsuaN8ZuRGqioXasos",
  "key35": "5XXryZCn9EW83drA5Dquc7u3SEmhijv8jrafCa2cuhgA3kZ3wHGGjZrjN3nJQ1BN7DdG6nTzcbh9t675ndFSZyvx",
  "key36": "oTRGhyfWG6FZPXR6EhvzDWMveh797gqB2QXNgN5uNxuWXWgQbepHixqN3Syi6GoTELj2iSUMXJQLo5sDPUXQEFZ",
  "key37": "5zLYk8DX2vVXGgp8w1a2f6XCzaxbtcp6824UWNBws2HdDjfugMBFV15xEA4DePRetvkjcudnHnXEPnUCVmkR2wVn",
  "key38": "4DketK8XWfS7mJxcHqsouyVcKawWEoiqzTK2B8GtZbE9bPPsnPmdgg3yebPjgvTHQyNZcDZj4oshGuaTCG1xHLgt",
  "key39": "4ZdBYTYqH11e3BFMMyxjQiHLNfpQr3rWnArGEnAXs89oYAXfrPdSjdkh6eFojsz79yvFB2zp89Ln4NUqdAnZ4Q55",
  "key40": "3PaG9xN3krKa68xZHJhBrNA5q9QGKKom2JtUwqzczhFeobCeVURVdRD8iRr6mSugVaw9G1ozWBQJP5rTCSxXc6Q9",
  "key41": "2rvkPHsQdnJcAhoVhvuRJiJMmqDEppQ7nsGn385jurytLPRDDcQCSLT9gpouaFmxVQvZqgBTpQzvbiD8t6mbbrxq",
  "key42": "Ag2GtoTfqUHu3mizzyUACrFZksRuuSTEDS4jV91oPvYpo411SbJvKan9GBTpUVtkQqXCx4T6rrAV2PMEqKTT8qz",
  "key43": "2HdQvLy3GzU64EeQuP8Xqcu5xtsRnzLQLV2tu1EJgBU2QjWtE4XB8n8eBXrVWhEkMSQAyq1QZd34LyFxQpL4Gog"
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
