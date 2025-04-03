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
    "2rBjbFJgMN6dhQG9Vps9BCg48PTUNBo54nGkzCD9qa3Xn94wowdWMSwsP8pZUZRSqz5UiKUCFnirTmM7ces8Wu9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwDQD6KvrhNgiQqykHVFzHRqAhoKQxnpP2R1oWFzbvG2o1FLYVgRXzjr89RVPaEhf2oVRQw1euDubsTTXhJzvK1",
  "key1": "3tBkMn1AqBN2U2prK6n8SbEzRF4tDMErAJqvQCf2EuTmccyBtEtNMq8QDNem1krjo9MdA1Qx8pxTvSyKpUZR56ph",
  "key2": "4LvfX3Fw3mQDCF5ZPKksujVEy53PTLBjsWb46n7Uv2ecd1ziAphqKSXcuUoPEafabb5c5VorSwEn66yRcQy7HKiL",
  "key3": "LYKnqij3SiGenF2wSpWY9hPtHdmQkVtpBoi2HDeFQPUZSvNiBpVpn9E2YZWrf86eGN1fQxd5VbDTX8ebPeRymBe",
  "key4": "5oERQ5fezNegbXEUXZN9x17UvQbVgmf7PJj3hhnVaPy4gSgG24hG5S2YEcc2vr7gMFHv9k38foPaSJYeJWSqLbWL",
  "key5": "2n1yNV5inT9bZn1rvUAHTYvT838LQ8tm5a7qK6HRA5fBewyzTWEy25xoT2SXM3KLX7GZGBBiXJUWwZejaFuGySzi",
  "key6": "5FAhR9pays5yUgx68sjYU4QQ1frn7Vzvbko49T3zut8hQSgeSwrQH8hsDE55us1N6tWZPFn1assrF1h3LvWr4CMy",
  "key7": "3CE88kev5EXucqTN8eW6xNyyVK2cRuW28x1uJGUWb9xKyGkXaDatvtvEuqQYyi46K9L8ud9949CZVqxLC93PhL57",
  "key8": "uYFTYLZsMJuzL7YvR5d577nZHRt8bnBeWZd8kainyDEu37oYnXYi9fhb77M3X2rvrSobkV7YcschL748rMJ1HWW",
  "key9": "3eaKdAYm6x5ydivF5D3HdSE9igMaYSfxozERhQZV539tyXqsgQiiEEDmxBc8YenbjLxFRoiPwomvFstp5J2xHRGz",
  "key10": "4TDpEpb6hBtTuEnut8bb2Um36WymhfFgmUSBwp66pXptBDbcb8XGgx51PhexRx75BNsSjGMBUrY5bNhVVaKRfLCE",
  "key11": "2zMsjndzKP3Anj8nAxrwZi7vbYgCJSXqdxv3CyKKtzsrKAcmNSKtS7itfU3dThviRU2ibqn2Sssdvnnba3qEdju2",
  "key12": "3u9Xc2dLWhv4KfEzPHvi9P2naMvrDzZAMNYMdr5zbr1dEvN9SuUQP1UZcrggjgAGd4jtfB8afL16tnmH5DbfA7EJ",
  "key13": "5PujheiTgfNSpivNrmHnV8pVLjpNmB5CvyCez3dP9BAUVKHbn2euee3vTQwB3wmTnGVf8CaFhXc9QC4pQhYh8B7p",
  "key14": "4vQJoWWSmxt5G98gH6m8wgZ1nf8PifFNXaitYdUacS3ebTUKwuAa2QCmFmRF3HssUL4kdbiqwiBJpM2eTDGLBqw7",
  "key15": "5PMC75DGxoT6HsjvRisD2sx8rhJMAc9T9iPSC8Fp2N6ZDaP2AvzSzqxKW2LSu4v8n56Gbat7MmAx7xhkAa2oBttU",
  "key16": "4WvzxYnwbhST45kigoeCt72PcRVQC6WT4VVxAfpZKwG6bxpmYyinSTkM2yNngLDduqWt4biq32UAiqJiQXDoAMbA",
  "key17": "31r9YppgwvgPBKgzGMMbnjN5MYyEnXq7hEYTKK1xmgVdEPYadPEG8ESiuC75eUGkjyV5ve3GgxY89aTJX57oYXMv",
  "key18": "2YABLW3FAfqkhmvGjNCFe5A4GUwmxRup98U1nVMHHdJcU9uB14BFhezM9jCgReBadGepk4FUj5d3uiBncdQTkuCV",
  "key19": "47qxUdfnXbGrsRrNsSw9GRisVeTr1P9HTzJbj7x1mA2sQTvG7zosziQFtofMr7WG5jPCsmHvbsxmLBUgBeQYcMSk",
  "key20": "2ESDhzHqpB8RdmyiUwrLc6ircyVw7Dpb56Xuf4cEbM1vnowhY4BsLe69zpDg2FyC94u1FgYhKGHJxxjUiXAss2er",
  "key21": "GvVkwG1uxUXe9EnQNxmuJDLXwCXSk8LKuuVc23z6ReetRk9FV3AQmZfmxWwyqvmDcwjVZstrn7UFG6uz5xQ8qo8",
  "key22": "3mH6QL18hEbmuAhAoenJXVLMT4hH1CSUZg5cpbxCuxJAq4GdHYjhi59kiNa88oNwNdQ8TqFmXqkMngJM1upSHFWN",
  "key23": "4qbMsFnq6cWyEKCrhd8fUuaSpsgDXeSfWjRFkL2UKnLrXbd6D3M2aSCJpcJgArfj7L6fARry6rW4Szg1qqC8DEzD",
  "key24": "xKKJ7qcm5VeMpaz6NKT5FTJZ3oRrhYuhxKrHctoTwwyLCdDWmwjxafBmYXk7uZwU5Es45NGBdaWDdqdd9iP8E3Z",
  "key25": "5aJ1RFziYzps6XE3euEjNCNc2DF8FT2Gw4w9tq1MgGZgdoSfdb8y4piGBQm9kyzBWjh1yuJFdgBXWbTU2gnbjveN",
  "key26": "5oe5MWLqTvuMwjNDtuBpcw1g6mLDkTJS1oMh8aTyKA7c8zQFtPDJMWezAeDQbhkcstYtYPkL4D7bXGL55KQ7k68b",
  "key27": "2YUwgbBdkL2T9g1LGYzctXCfR4ZAGkWJvzqWcd83PRfPzQptT7W5Mk3ku9fKzbQqq2mX3FmVjiaCH7kawHoCupio",
  "key28": "2vyroxmKSGuw58TC3B5z7fYYC2CrkPFnaWQoqHDow11avtueN24kYmGN8iQAEHTS2UKvtWe2y8Ami4nQ2AeAGmfU",
  "key29": "4AaUcNjHEfYcmTRVWUyxykpo2E7zQx2gcTVRmXTM4jpztbabhjMNeaue9jT7gwiPrXPsyKhfPFupC7GR5YSghTZY",
  "key30": "2dLTjdZZf7iLm9TRJojXprPQU5uB85xR9eafTxTYRmiErWX8HuXLvK8tojrACkCHZP3vppoSridFQKDpBYF2NmjM",
  "key31": "4Hz7KTi86PSUWYzLA2EGBrN4EWyvKcSr6ATXtf4B2Fwcrk7gGAiKR2orgkCwRKNubsa5gNE7FaBQwQxVoAXqJk8X",
  "key32": "4G8WitG6MCpBaLD7QCt982SGkgmaZdoEkzmTyZrtxJacqFrhGHErmfN3hiXfYjS5KgzKdcMc3TcXXnP7yyKZskBA",
  "key33": "4BjaEfv7T1bnZ9BV5qUkU3kyQk6iEWVJEzbST8KL3UdRA9NZLvcP9aDAbVko2H2CMsEGAo9xSNqhE6vbFNn3dTgx",
  "key34": "oPJDTTHPavQXNuuQs5LUwCh5K4Xs1gsZcHS2Ynr1ZJsAc3LRXEnLfRwSHsbpzzPboNCV9hbmoUNwZUFBrDgzuQ8",
  "key35": "3jBdNbJU4Q32vT8WZ9YaF7DXGp6f3Sp5ewRWipwVJUq3ingxYaufJJzAZiCpMJ92e1AEZoWc4hrTSodkyFRjGz33",
  "key36": "2nUb2ykxKKWUFt3evy1GMGo9y3Jv78qxf4h8cbMMarrdxNe6wyf7E51vDsq5jg56gsnKEtuvJrBUjTDCFZYyhxRE",
  "key37": "2t4LycsqET43UdRaNucLWSqVzGCNj7WofD2AP5ixqWuNc1EyCoCFG2ujpB5Zx3rW1CRU8xpC9DCqdgK6cq2yhmVt",
  "key38": "434tfx5RGynQaK3vQ1CyL8UxFFn9nJZYCFhBoXLHHyxixDVth4hn6bP4WWgo3u2Z4LorbVRF9XQZ9NWwKisJJiA1",
  "key39": "kKfabadoDoPggmJemQbcsngoTbs4MJw3GENxayg5cCDtn31Nhv77zCLR9w89K4UtzSsPim1yepET9GMc5dyi864",
  "key40": "5SJep2SeVJmBTum5VSHXd6gaJ3wvnbWbfmpHBLiCnEa626ckza5F9Zc9u5ThehHixu2zmUUQ8GZTYemLif2UTtXL",
  "key41": "4UHRAXHAhwaAqeKKN1uPKkUbfTod128ndbVRoVN2ZhtpHwGS7nkhkGmdeRnMs4RKLCaRiDZDyuvntebkeBsfezcT",
  "key42": "59mDWNAw1pLArybhEprwWekztbgMFgsMkErrAPJVatJzxsyyX8zcNEnYtpKnUr6VqjmFkZqFCo3PsJMUadhzeGFF",
  "key43": "4YBCcuemNyR2TohFHqxb9pyHywUB3sZPpm8uS1SjaYYzb8tayNYZdGeMuvNVPuhUQVJXQPttjQfjc24wp29D4p5r",
  "key44": "Ux3maLC96Bt2HXZ3foQeEavoYt1RWFaVgFGgT6riXzB42juem4MAowvaqeChkUUqxDJSiVKaeLD9XdZb2ekwSyC"
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
