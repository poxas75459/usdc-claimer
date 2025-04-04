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
    "3qPb49TFQnyxzn5Y2A13kQXvsdoou8NyFMESsFukbvfw7TQgviqmnFnwWaDxmHHaYkUqUgJ7Qtrk64nWxed4YS3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497T2uEqTaCuJfGQDqtkumeeAp7KUdtqZCcdXveP2vqBR7DUDKrNSXw479kdxUNjYbwZvXbU4NYsW5fwdMFsqUCU",
  "key1": "2H6SW1FWwdB1AFCrDbYSz9AgCpYP4dSFCWBMP9TFs5RkUbi86dNeJ5XGne2SoR4EZQV3RBpb4uELEtSLoCH18xMX",
  "key2": "U3zGjisf6xnTGsK1K3xHUHSbkkeDqr92xTYvthPJvcMeNpFenUyK4rEFKZjcm22AA7YkCcu2uggSJTKuTmvLunV",
  "key3": "2dNaacgEknnkaqmn6gknVjUiqqKgqDPiRt6cDGcdCdC7EuFsSaVB2pu58htc9KxiCYHTnN2Qaep2B4pKapwE17jX",
  "key4": "293ChrXeR4fzyxotf6XPBsSstDvix2Rbqp6LAMyzYoW4cDaDD9S988cJKimc9dDjaF2eKY8Y34kMdimEY4yde56y",
  "key5": "3jt1KDihN7MfGqmzf6HsBt2Dm889K3oDKs69nXLV6uuU3WphpWA67nXLVL2RVRMiZgZJiL1SWb6kEKovXH38k3g3",
  "key6": "5cyCJRNwAceBXoUDoVQo3JECP6D5SGoegKM1VMATiUthomhrQ4vHLtQVZPrRbWS2fnyfKq4FNaJ9e2wT4TqiStmD",
  "key7": "21Jtwc6kyoXF9rX9La4syZr3NiBAvtKiTJSUrtWDojFqHcubsLHondomivaWqFWoSM3FBaWSEDZZ3QDf973w5dJS",
  "key8": "4UhefRed6ZavMhfxmwDqNrsNy9wS9sKYBAJaGpdTESzpCq9Z5bFvULc1fJHEG2XtmsdByt8MrfMcS1Mm3BKPvqeY",
  "key9": "abRFt145nWYSLnRbuPctvNntyDqogAuYCgyVFUP8nCybuy2NJ8cr6j43iPKp8ngtZyFagS8b6VME56exuqZo5gC",
  "key10": "8xz2ZxU3NTSNs3bsutEagG8j3vS7aT3EeDvg2qtWQiyR9SCvfvDtJJBwqymQtxTRcqDsZ6icV7cHk4tPYK3drq2",
  "key11": "2VxRRVwPifSQfNvcRofEH9tEdrHAiqCCDszYL66HD4fE7XcroWQfeTCmkXmQLWxedQFH7o9cpGCRhY2v6M2oUow5",
  "key12": "43tc1jJEwkPtGCr1cwzJA9FspaHbPma5CqCnViZD92q7RvcuBzU69AgojoZGCBLZa5usY4yg3EsqWGVSMtERNLzg",
  "key13": "4KixjCjAkvcRmjJk3dvcFt7tRuU9J1E6bq1AcBQKzyeJDQDJMZm7AN7swxxGdzgCT1mUkQMiqmx3fxnfwTZfF4Jw",
  "key14": "3fyg2iDyBomDEWLCHYt3EfAcnu6E5RzQB3wj4aP3mZqooedwdu1YziFsu6Z4yRUB41uTq5JbeTiB9JtU15ER5g2N",
  "key15": "3Dwiy41LY3UZsVCYhk92UY9LnbbEowUf6857rQdeF3sw6tFhwH17UJMHQr66W5UE9n7asZPMFHxd9kJv98c178zM",
  "key16": "5QcusYMLb7jkYGsoW2V8dbvGAPEwjKzh8zVSrBK3q8J3kASKSjF7fpmf5o31uJLo1S72KuZXxnEMXjhWHdFcn12H",
  "key17": "2WTjmdww5Y7ZLbH9NnaN24wyububvgDpvxvpVkahFuxBSjP9HPAJYUpiHyT3JqCdPFiQoPuW26AMJQSKR59tB8hq",
  "key18": "NYy4csieqpShr5475kiFxakuT38bqqcb1ytKqWV5nNV1Fmq6XfXY4YoK5c9edrG7b2343JPDTeMcQEEHLvt3dQQ",
  "key19": "59z9Ev6sHZB1CjQMP2Xr7nrdJSZAtCPzd1vxvGiZC2zZ9UQjshW5VAw9fCmvoLe5KDVoULoREyLdezMCPiEs8ur",
  "key20": "4z6KKnGkG7zRPLiHEM2s27T4iD8xZY7w3EHogu6wVES2jBc8rFdpaPYQwTzQJ53xgvHHshYP7wbftNu9fLq1cE7M",
  "key21": "4GeDQBoH7LtucGzXtCoS3rBQJXMKDZkwf2HoRuuWdFgdUCLaBPTT2xhHdFPPxrSDXpJwFTabHBQeMDNLUP2sPdT3",
  "key22": "22JBWjdSjSjr59zXcnrYrRb9v1d6w3eqD3YWQrSna3L4ktk2ojWVTDrVVvb5xKLrTmDqVFP2jTrAcQ3idFKWbW9i",
  "key23": "66FwhD2GkkLM5SNmfVctstqY8zqUvHM2jYwR8Cmzds9xN36oPNz3J86nwwnmowjNuffkwk3sVkCSK49YwrYxtgAs",
  "key24": "21FEpkvpfKvkiv5uetvuyemDPfiinN9b6r643j9wd5Ng5waDXmYu14A34SobSTBKYVQ5JNHphDqmrpKeJy1BsQ2v",
  "key25": "2URbYzw7WYxV3uTxGqEbTrMnS99esq9T5G3oZng21E4n6xSNqVgSkumate8WSM5zuZLumGQP3RsURtZE9XfYempC",
  "key26": "27Eunkhw2yuG8nqz7vEytVkBdhsHRvrLDg6ifZGQBDr4zSYb1RKAvT57qbBK6fNDyvsAtgXcjucHt3fNCrUE6cK8",
  "key27": "5RGvWhLsqd4rAE2pPMDSTb5K53MvR3pJF4XotLY2kKAxf7HC2kyhfro217fDtXXX7sVjwCsungngMMjjhg698qPx",
  "key28": "5kymWo2WETe9K8fj8NaeoG9Fz7TuyBYudVmkaXr9PDiXcR97WpKnFPUYa5GgmRcuJJjJY6XqDDMguiYD1wrQrY4U",
  "key29": "49CodHfPPX6g8M6TEu7WUa8f1erNRThEY8gjymddq8ZkDBVvb3857kwvr2MB5NEKn4NxUnfeuhWAyheNSLR33UWA",
  "key30": "2oYUfZ1jz8PMQ5h1izZy47CnuCnGjswCTh95tu4Ygd94Y2KBHmWfB2rXHfgRjcm84G2BwhYWCLuvaTrcai9HhVqy",
  "key31": "4PRKbDvYCuVBfnqrXatAQP6iicSTG19m5t4UXfhiKLz6qcJXH8ts1u37zVJ3eaGtHAg8AbYzDWH9f2htZ9zvz1GW",
  "key32": "2W7dwmAPSRcz53dfXfCt4nHsuLZcDyHkCREqZjfns33NvaA8Xt5Ux6eXMgCmUwadWaAcrjow5bmmfHiYuDYfnVG1",
  "key33": "3NPzdhtEmVwXoePHkeiMNdsTjxmNUjy1rw8QqfT9JHnTxQMRAb9ycgiaMNHuWvbJ7MfhnAU5HLCMX2FgQQVr91fG"
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
