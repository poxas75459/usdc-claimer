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
    "sQKU4R1cPY1NhrU4A9jafJ2sdr3Ghw1Vz4uRPZXDN9pYJneuZ3vd9uX17cdUchPtfXRJrJuW2VkN2z3fBwqLwEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjcvzuKkf6amcebiki29iThiXnxoa8keeqUZu5VCQRBMMhpXc9Gerxd6HijG6y91xNUddavcDbDG71UiRK4juK3",
  "key1": "21aJknbPjqChH4axb6VjAtFHF6XSGRnBvt436U4uyoTenD3hJVhThZxCfEN2G7jtCdvexsyTXcfGvnmhnDmxA97H",
  "key2": "5wyAT1Ct6hdVgCvbL5rRAjc4g289naEppY3zGKZbdftcuZPW9AMRoovr82gaZxYFfAPGpcP284QBB6HpSJELQGoi",
  "key3": "CHRauUkSQgGGdta7HAJvKGkB2HzrJM33PaDiQmipkSXKmjHUrRkG1G5YhG673h34JaMAZbFwuRnDa4LXMeHH2ok",
  "key4": "4bjQk1xA6ZebpMYP8rCwVFjepkU3FiXou9aXc2h8hhwvFR988uckHWCjKqz7YjR9VQMhViHt8oUYLs1nKg3BGiN3",
  "key5": "byWhUyzKsMJsuf1cadZj5G5rk4B5uoztfbtvp4XSRPQNw56n6ETuUYYQxivdKUaS7rrga8HxL8jJEcEdrmbqMHT",
  "key6": "44XU9K73gvaZQJV84pDpcX527E3J3CJZ9RfXAWacjZtoUNp752iwhU5p9EhXS8byMc7zgy2cwruw8teeHtnP9SqD",
  "key7": "5Hh5sGtxzYSHswiMSqcbhpKTjMeKX7okntjxj7dg5ujXAfbhALSuKtr4H8oAvCgNbQnTkGkFdEMEJoSDquZobuXf",
  "key8": "3a7pCkUj9tkMFuDGC1ubZo4u8isZLNpiay4ds6zSfdE4PJ77GAqe2mfkgM42nTZmiUqtyH7DxZ7ebpvhq5vXmjyJ",
  "key9": "4Cufai6UnpedWzvbwvpNNRaSf5RjNZTWubpusnUSMHkEABwx6fY1mspPoqG4W5goi4y9d8VLJaDucqvHTURUnxAT",
  "key10": "sSaSVR1XVAdcuxfXukaPutb2pMiyqEVJAGWtNUoCGzB2pU4UGmnQthehQxx9F7UfrC4TZNAnEsb9KEyZ5ErJz3Y",
  "key11": "5BLk1bjgBHn8VmfvHR2kEgMmkfb7SPuUhNXVLVvDrqUwrQoJxMSmKgHxYnrYeAYzizNGKj9YJAPGPbhaEnKLFKyS",
  "key12": "KQGPY8vbkA1xLNZFL5WZxwY82xCgRmBukMALnii8F5ZcZh1KhvWeRthrciDx9Pkz7KNx4BK4MqHZUTkyfyPTFkh",
  "key13": "5Qn9aULEZKEPh46JX5TFt2U2Ngk5r1byeKp9vN23Z8xUUAVoHZh8JBSR5SBLaqVEkztAiYCRfrRb9qnx2XMp3rjk",
  "key14": "34wgDPTF3Fh9gbKsbfey9BGdhgyMTiiSTQb4ipShYTPLPkvBan5y6Luq5xxPDFb3HpgEKYFaFdcmCHYS4QKCwTdQ",
  "key15": "3a7v99z5tqbpdr1FjbWbuJcSM5yLQ7JrbroRkYJikLbjG8AgP4vt9omCUokzGshAv9qfEysFnBzbjaNhUrFZY7FQ",
  "key16": "fYRPZUJDfsDMPoDavbnyqDGVHQEc73fPqBw9ou2ckke1J2mh6TqT6rxCbCFXqU47qdFwwkbe7orivTDHLriLiBr",
  "key17": "3vzwYxsf6apokW4U6FykrJV1VPW4pPsCp98NVVYxHjtJsGEHVTXykVvXhWzauQE2T4dRpxRxrhns8M4dLHd4UygC",
  "key18": "cmdigbzXkgzk2XEiTd5gsWyHoPVNbdNjbPWANo5gqweXufNUqk6VYGFvz6uaZF7sdJ5fHHKaAvZeerE7KRtm7vq",
  "key19": "5s23c5TkXUYptuNqJqsADuitDsYyx91ZHx9vBVysLYHq29nqgu3g9GhXUSzsyHThMYFnrcnnvmaYrSxLzv1o5RYe",
  "key20": "5XZZ1HTN3Kx1vw3j24mcc7a6Z2ndnKc3nwZv1NDMa4gKmhoBaMJXxZErsRH4aSd7hZL7ft15x2vVKXcJyx6CWE4E",
  "key21": "9v3kVQi3qrq15d2WMuibejVictYY3r7CNV28BtdsMvCcKGGHkWywfgxvBih5WZumDcXNPcLwToPEGD5D2XVLpEk",
  "key22": "561PN7SWmKhULoshtX3etWDiY4iHvzVPMWE4Bbfzr1KkhgiCRzUG3eyEwmA3Mbb9NFF2FnvNepCA9oURyiNVk8KE",
  "key23": "3xc57NDVmYDMG97pUDuY6CgnkeU98v5moFH7ZTGZwCDqrY47BzzdFT5BY9ie1AcSxWmDQmvQwiZFS8j9afLPg16D",
  "key24": "54cXnAvQhLYEBJgTFt7xLSYBHGU7w6ivX89GAS6RdgACvVP3vwdrr6tzC5CbZ56ptfjWXoQZSUZQQTS2yfnEGU6V",
  "key25": "2q7PqX67MJjWBariQ7MrLbbC4bgchTLwWp8vRbcxhoQwhJ4BoZThRednP8aVGE6uL4HM1kCqZFPNuU4fguaPDE58",
  "key26": "3pp2vTqB9YfauRs2em9Vbs6iwKqutqCLhbFTLgZrbbGXdh3YFY8tZWwevssjBqGTexAb1rAGSYZYcEWyEC1VG42Q",
  "key27": "5EPRmvfoi7gFbYLtzi7F6VanaDypJxPFbEECJGTc8RtN9JGNMnzShd5AcirZ2XdeN1NB9WcqBLauyeqiJCFR96wD",
  "key28": "515Kzt6bCjpv8qShAuDuRPE12x7XkARXV2KWPR6yHCWbFpEFszAWPoWAzZTuLvRbF66j8rknUQXWS7d6R1GFbNig",
  "key29": "4sMZ6yjg3azi6mXTA9HfA6LKNqgRWb9DAiPkNo3w4XUNdgro8ndpYqho8rQ9258BzECBL8K2WLLntMPJguUkE3tX",
  "key30": "3BafZJ5cYppuLkSi4dydgg9MryRZQGZS3Xf1E2d1zi6JDkENUKnBsYPZnV7rhANqxPN7kGoaVe8x2qajYWVDYu86",
  "key31": "5263TUQC4JcaxKHPkXtbT5QaskQKLsWqNK6Hnm9JR23aCg6vXiYcLcYwDZi3GxegBRj7AA3GuXyWbgJ45QgqgVyv",
  "key32": "4ETQLBCSo1KmK332yJNjCaG3XWk9G2wCXzeAe2CMo2rsx7TjZnsiFgXMLVc864EPHfxohs5QyPWnA6UeNjun1tZc",
  "key33": "4NCjQdKbkAQC2DW5aNX3w4g5jjCFs8FNJuXUzgHfAbwbRCKvP67JV14cUUCWVsCHSk5GTbydidqfLMH1WpDMBmAc",
  "key34": "5f2nhSNwJvtKFbW8SYfFdUdSAPbebatEd8VjdRbBFDmdFZiA2o2scaehikJYt5HZQ5ic7BjpCHicmBb35uzbTQ4d",
  "key35": "5NVborr2ioYXuWD59hLtGTnSKx9HQEU7ZfzBhSxB5pDu7iCDQeXzCeYwh16uUwHBuKDtfisb1HYEq7TrL1cvZ2jT",
  "key36": "292Ri6NfWr1H2afXjsWcqw18EHX5fjmNz4JsqdnTmT62QfTSrxYUvtY1n1g8KJxFCoAQdZdsJH98tGEgdbe4kRi8",
  "key37": "3qVXdVzBMtAt4rEirfrGgfVPDnbbNJM1TYZJno5Yc7yQtTeFbCv6D3bq5cmbthvPue16Mwc3yWzHLLduNVHnKrPr",
  "key38": "rh7gHAZz5TE13yiS8nQUd5ym1D3qm5zdNTzGaByQfJibNsmL4vVuEn328fnPPbwDiwTYky3ebLwqVV2LbnynR4v",
  "key39": "5exv7jVeFykxDTdxES4xbxZz5qukNAYX3MvwpnvNuMfZqK6tx1H5QKF5CEPfi47oVBT6aw8WYZThAae6fx4JfYGb",
  "key40": "3cZnxrprMUmWUPKRhabCqDQLS9Qh3sLzCZUZouYJRYRHog9p18mA2AEqA8FoKgGGEesu5MCPCXxmb2kFoiGQGHuG",
  "key41": "2gRivuroL1LxXaJ4J6QMv6sQPga5skrZq5kbut42YwQQVbzupysG9ojkef16SH3J2XcpuyTEvhjtF7br8edtaYy3",
  "key42": "4zvgXfdESfbU33kb27uaZ1H7UKgmrAQBtm32RJpKXhTPXKApHXuBGixHssShun9LCxG739PFFkiKrTMHTsu6Mu7b",
  "key43": "2miLpscxb4C3BpXc7Lc83uc9eWoWHYHLkcWPb9q7evfwPq7o6tZGVmNxPrDdGULVUDNHhj87EAfiXdPfxoWUQNVY"
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
