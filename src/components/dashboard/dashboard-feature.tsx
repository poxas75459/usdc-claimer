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
    "5BU4UVYgyfg8KEBjoDNHRk4etcvU3Ay2StcF9enXrf67kdqqGKWgBZ2KncCDvZFaB76xWJq4dBBMkfYKKYaw3wuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HEvZdnjAwssAxEFYZv2u4dWBusTMQ4Rx9X6kcRif9JBia2C5hDaRriAdT6To8aMwzGdC4AjsdcMKKeqoQmJxxoQ",
  "key1": "vQHS8wC2nrQJ6YvRjzav44yoWrGiT47b9p4iQxn1B5siqK74H6nM94CVbRDnYUUEDtoEJpfj41FcS26Adiom1W6",
  "key2": "ffTEpcNXhuhNjY1K4XwmhTz9whxx9jA4KdvF3odumNSrnbNLfXb2WrXZHTN2iwncPRSViqym3UB4fJLyxrJhmuv",
  "key3": "4KZ9pqQ9ZgBJhCbe5PjuYKCHVqL2RMyFo6DdGXYWrQSvkxFB9sGdfHWCSBaLXVoWCCXCZJBjzaE7ioJNXvipS1x6",
  "key4": "3ZZXfnLtgscxFYhxiMFUskGTx8CMEi9Aucs6Q2goPMPei1bEjqNm9zEfCB45HMDEG67PP38HwBH1LNRV8unJ5DNM",
  "key5": "3BD5geJfZrtoD8CaPHhPf6R4iFDcstP32TDXBFsqHvDm6d2MAd4nm1wTE865Ay6V12DUBT7LQ54BqQU9wv7wzeTK",
  "key6": "2Rg9tTJXA49pDh3xwZeGTEhApCxByW12WXADMNWrjSnMsgVEEawPUdtMVY636S7LyiUjD8xqZkkuipHJc6o4sGZn",
  "key7": "5oVxCSh1LhMJNZuXLtmmHpVcVRxUm6CzAUsVojPYpTJqiJ3RMZ35giA5b6G1GdGfj8i1ze48ggTn9SXECV4sVdgf",
  "key8": "2uNx9PJfT8T6PJWiY6BXXR5HkBUUvjcid4iToWjyMxY47z3yYoLHvFfYZ4Ms8kccU3iPrNm7wYvQEw94oYVQ1JgV",
  "key9": "4esAk8VpryTAyjgXqDTnWNYbDpe3KrS1ngiZ2rDmPQnQMbtrdw3VuutYESTSo2PKJ3EnMzpAidJWU6uZ74DXi9Yr",
  "key10": "63Ds5qBpJQeVf5ra3jNQ1t5E9mfUBMbqy3bgHjf8X5s9VEgszJGi88ZuRWRvpsRKYm4pMsKRT6i5o8DXLtXi7iCf",
  "key11": "5pEyKJsKUJQBK5Z5WUQYYqXpmtiGW4ELKHUhSFNvVn6K3q89zDhQqTD9x5qnqfNH7q8BLPBiiT5zA83H371C77Xc",
  "key12": "42c2czLrD8AbqZNRTYs9ebEk3Gj6ek1GhpHUUGpGrY46fdRJ1snwcTGKJdEPQFaLRKfq81BX8GstuNFjfDU1ZXiy",
  "key13": "2PZhWY9UoueF8T1xZkdwiAvmnF97PTDk3VCRYqTXpCNdJAm1BDd2W78eiUNYBFJgiwjBB5xDKhoRYGephXsuUxLJ",
  "key14": "4p18Eyrxw37TCv7GdmGqKDcZFmPCDfeUStPfTHTiUYSuqcpELgtVURdiWq55Atx3e1Z1b4gX75QGUQRumE6DyyYX",
  "key15": "462dZRgDpUsFbEgtoz5bW3QMbYSqKQhbMnELvFggty4hKD9KXwvykpkr6WVAvRR3sKnH28336Buvug7ZtEMX8kBT",
  "key16": "3x2XW6RkhWLzQJqq3aLNyzXNMvV55MLRuu1hkCqFYLbRnjEf5kpVdqVBgQdpiF2oakqMUA2yrnZEXUB85Xdm8Li2",
  "key17": "5okZLqCH2iaQREfKHG1Vsw2uEWU8NE8VobgEamkzzaWmDcxWpp8a3wjwaePuf5isvbUAMSdXCrUE5UV6USM2hi9H",
  "key18": "48hChoCstFrswNo2A5PJuVD2ZyouhEcMWr9EJWkdRAhyQ8REgTbaqJkvphGaiBLRpgToHfEzS19bgpwc11bDkqJw",
  "key19": "PBXrwd87vwMa5oJKn9NFrmZuwa1p6dSZEvkNVKKQeWEfV9Dwx26u9hH43j1nU4m2k6M62LCAg9KKGENzZBJXGx8",
  "key20": "4NUsoika5ptTHCU2ro34kVC3t5fnL7fKyxDWAbjncxFaVEcqMoN8Nniacq356Jij9ew9YrgzNEkYsoNSWzQGg427",
  "key21": "4LT94SZ7A5wTN36fm9q84D4YPgyhymKRnTnkeFHDsECU8YLcBREqJ2axQY3UgvPe3ckap8DcjtPLzV96jWUS8zVM",
  "key22": "4ehyS6fEeBraQqbeSvLP7bkK4ikMBDSvcDe7oi8fDnLi9TqVMbXtvsrnqBDnK3WWfDxGDQ83emmaySw7VXCpqVHi",
  "key23": "cGWEXrMjhnFih5WSd8BmDYsLLzi7V77LHH1dMZvT7AASEewd88bkqxr9V6KWyrUWUGJ7588LBwN1DP26U5SLSfJ",
  "key24": "ycm6V99LZJiQoQjQjvWuU1tKST9g7GCRZMuoPu9RWvNk3D6yUy3FkGeE2omp4xZCtLDqDGeZC4JZYdMQ2YWpkMQ",
  "key25": "2LXJvLZqgYTr9X7UdyBmRdtLqhVtKhagPG3GrW8Ggm4516aR556BX2UVauJYDqcxHtupCe8oBKNzCAjN673UhAgL",
  "key26": "3MqaPJYmh9ajNVpdsND7N8w8y5m47rG1KybhsvokwdwK55GYUyS2y3TKgVBWB4auUSe1oy8eBG1u4oo2JMuwXuV3",
  "key27": "MnLiSpXxfKMoY1rUhLA6LjX8DnvbYvzff95dpqe16mvytS7kxbZBgJeh34JSRqbFmHU5c68ZTLbVXY75Kudi9R6",
  "key28": "7B8f7Bw8kap7Uhc6KpiSgfxxvgCfYS5u6mt52YSiAb8k5P4zGcxKwom2VzUSSJcbRU8du9o2KG33WUJ1YiW4A7P",
  "key29": "3WGstGRySbk8T4GXK5NUfjWdLfttCTLTYxRdevGnq5QpKR3uoVr9Riy6hAYobSRpud4Y8pF1GJRDZNGz19uZrVsY",
  "key30": "271MKY3sQr3uYjxvUaqAC7GPnpqruKKTmsXRC7PvEs3Y9jgU3JtT3nkAThAhiZAKYn3GRMvYbK9qiWvYfC8HDiFD",
  "key31": "4kw7mqauQM5pwDYmsCeeKvcG1BiggYXKZy3M3MFthmR1iGy2d4ULPymN2PXuX5egq2E8VqUk2wswVcfvhmR3HFWt",
  "key32": "32sUqNsCDQaBVRsW13x5xDXNrENo61DsCBDmgzMVtfrtfEdL75g351ZVgwffLUkSDQGLrVDatmCNuz6yJ85yYKh6",
  "key33": "53aVacrNER18yF5h5Go3sFobbFhRMmdo3LNosFHtrDC5g1U7kYWsXjLPVQBvsHTF3MEPGz99xpUZyJk63pWM9a63",
  "key34": "5L4WeJ29jMJNg4BXyQt3to2DWpFvrDDCNhG6bL23rjotiaDVGjAV8789FXvJg8Z54CaA1RWqt4QHK6gshSb2YfUS",
  "key35": "2YLN15vf3PY3DYk49x9eY3GSMzaTUWfzYZ4Ns8S1rwmPKZwYBU15U61wsKTGSF7bSQu4Yo7Ax8ehcaNN5Xd3Ptyf",
  "key36": "4wFbQoWD7TzGzxAcCdpdbiFf11ARRdGg5JXGwM3WHAYBcSaAvwe4bZ6UMnW1GWMqGYX4dR6B42FPH4G6QMUEaM7L",
  "key37": "5a2RdSorBnW3hCAeikS9sCQTxFr4ua2EycUaz9k4GU18WZToHn8iNRphHoa4oSMA5BFHRRzVhxACBvUU5X6jkNUK",
  "key38": "461jcwYwkUCotPLbiRMHiYKtdriA5q11Gi21UTqBiRF7Yts8gdMZtooguvFY23kuj1XHcM5verdBcxvtVz1MaSwo",
  "key39": "2ikD7NMa8ELz1aVeSmJSLisY9sqhiH5pA3J7fPxJHNct5eCevrRtmXES9gPbugrzwS2q3irSMd59RvzfZybGHciF",
  "key40": "eaGTpGxgjbAHEhDLhhCFwHfAoLku9QLrKmA32Yof7SMm1NrLvoZZEwfnz3FHvWKscdtFGxAeq4RU92Wx1riBrxa",
  "key41": "4msyweHKHQWqXq8RL4tiEX75jPdWtXnUR7EJ1NC2g549HQXouzDqm2dCVmXuRxTJS5ayrSL5wwhetMYBLD7PAzSP",
  "key42": "5m7gDCgmGvfxb8aXTcrxZsyB3DaWCL2J7dZvdmLSN73rG65oDaNKdmfjMwnEbMdB1QECLrwQmHfB3aqaDavUSCAc",
  "key43": "d2XFK5SWcVtSkEdGu3Y7Chf9JATcMK8Tc3TNTKFr5tPELsmbBnzhknriUH4Eas3Qk97ZHNA2pitYUzuGsmJbKjv",
  "key44": "2ZSyUCW6NfAJf7E25N1DpJoudu2zRWZbnLMggKJFhWLWvVKwR6gZ7PzbStUZ8Kz6tK4fp3yZkbnhs8pm7QTvJJXP",
  "key45": "48bsWrPnd4GBUTAfVrnt9z26VmqbiSja7qRG2V5trwp1HLJGDJzm2BvEVLR1BwabWGgHZY3TjbJtL3brcYaKyBtN",
  "key46": "5K7MQWo79PUKeNoswe6aGFtitm7QH5P1y7DWyAmaCWJShKAowh8foTjqrwf6CRoEsymKkBbLUaQkpkz4enXy6kmA",
  "key47": "3amheSx5ByRZbTPMayeygreb7pyAhBvhR9xW6fv8cfbL7fR6FefMVXJFaLk1uebt52u9x5aEUgNAD4tH7MMJUxzE",
  "key48": "61EvQrQK5kEb3GAKpwNJLWGYYh6PmN35jMTDwL2bsVXvaXnGNp1EEFsDxqVy49ZGMSqixUA881KsZx7VWp2LtRx2",
  "key49": "JeoCAtsH1RJX17nKvoNxgpDRea2U9naT2XYFeFeydRM5BvGRQXSQAzypxkGcMmRVA5B4QDbKxTX4odznsF7jrCJ"
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
