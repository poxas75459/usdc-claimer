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
    "3GVGxto4CTPj7L8nvTrmNhkWMosoAssp6QrdoyWBXA9d8b1LUf74PBUq3bzkKdAJxWpUadqi6AaT8WRQHZrPZrLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25S14c1MJ6R98PUCayeP6gUxu5S8dq12mckLFoxkFjJ7Zy54hcPieFm4ibk33UyW74G2a9BTKMA2GotJdh6q1ygG",
  "key1": "5T6J2bJax1MMyCZEQrQfbNDanKyswVBSuihehDGNXnyzgsS99Sv3A3X8gWiy9rGw1H6pNECKV4q4f2f28hP2fPcV",
  "key2": "Wxxs4fUMXKQyRaYKoCEeKoaAhqABNhrFonch9Mfv7nHPunau7HSb6WzqpmW6dBrAw2dYGX8WKeGscPg4Rv4WD9z",
  "key3": "rz1NRCQtpn6bePXJae2H85tzaG9XfaXzoLKPs7M77MtNeiVxxtNvgZ9yn3EJauqajzziPs4DcGRMTtuzdNArfWa",
  "key4": "nYTM9dNySouXEa2QfL3zXexxPnzdoPGsGtFvev4E1j9LGFMXiFb4dWtMtVR8jJUNMwSXCZbVCzRRSfNCDC8iJtE",
  "key5": "4X7EGVecaPgk2PWDUM4SNvNRGyaNWL5Zn8uXqqPhmsRxfMF3qcYgkwfbBHvyykqYoXKuncmFwsUR12w6SiModYtC",
  "key6": "3wCnxMZDkFykqvvYdRLM1HRXXqe72QPPmb5Hbpy1TG28eBaAujbf23MVRYKryK7cuYVcWrNwGPWYSFywMgLv4hUo",
  "key7": "5Mt6Aoa7Q7wJViXTro8X8nHHC9y6e9nZ3xKKHazNxQdicoyxBVqCcFsq6vUzRbqSbaR3UJEQLFhyDxiJDZiNryKa",
  "key8": "5cs9hafLj1bjWturTMJgxgprDqDPFegZ3vHmH8xdbxCpVKEVroNcH9onzYPX5j7K8tFTBp4KXRDPNnmXYqgdpnih",
  "key9": "vjLNSvdY9G9e8fuv9MnriwPppgTEJLSDjpsbNp1NADHhp6TedXsGfNNgcety1oyL1yL8GNZ5FoSnLgYRCSpL8r5",
  "key10": "5Ejaba9WRskEyJfuy626ScCYxJpdvEL7t71KBJuw5SWftNVnC5ThauzoQmyYZpTq76bsfaXZK1iUWDEUjWTwm5cS",
  "key11": "43VrHwtMSY6M2GjxjtgmR6DrxZBjzs95LHeqzST4biHBqUrRrC6o5d4VZYCPyhkH6PEFFQqmur4USWp3PTGRRJk8",
  "key12": "4YJx6ox5uoFNwnsiyzkFMcp1yjMLY4xaBFUeaGD7ySAENi7S4MyBux8NL5grRGaWkgckfRzZsdosF1WD6fwwRFnD",
  "key13": "2zyZf6E9LTbvQeHLDSgSC1TQ7GKUrWjCFDNVjDf7DeqqAhA2L3GukV2bv3sfXcMxRKCF6yLRrT89kncccdahrgBs",
  "key14": "34sdskKT8pyVVpBqnr2wUfGVDAchtTczfKbiD62EAsVeofvQ3nnL9xbaPaev2pJ8BjeJRVo7YZk3AQ42bhVmY9t",
  "key15": "2XongjHd1qBnTJr1dLoG8gEgodta4yasF78jjKcEZTxztQZJsMZoCL8319AtcXPBocdj7XHoB2KWE6YfbEDctEcM",
  "key16": "5RC7uWDvvL9DktseUCJKwcBkiQE2VP6KaT4qpjcjTEfGJeVNFRWrMcQQ9xWS6CgEWJMHXLGBrUQoRLJEa8qAvuiS",
  "key17": "2sGKAYBWodVvifeUocZUWRrXi1g31ADKp5ba4Qy2D4a6D5aRuZxUzL1MsTNGymS4mvfZe2o62QRmRaX8PKrbXyiX",
  "key18": "3oY72xQqnpfCrSmTLvjvsogw6JSvDie8x6Fmyvz89AM39mY3wpEJL2KWrskTPEdMh29eBWnYUNcskxpksyW3gUaT",
  "key19": "4wq8S2iBjwNTgeL6vsVCc5CJ4Jr7CDALkRvLSEsBj1xgauUXkyx6FsbXnpBhYHx1Lji5WMrQ4AwfpYPg55Z7SJXV",
  "key20": "ukdqdMzD2Te3WdfkdvjHEyQ8CDkZYoFjspf9GWmsxVhvzj4nnBDJjQC3cgcR6HdwrfJCcWYdWW8qxVPg1NBgeLK",
  "key21": "QBcSom65qUeqatcwwjSS3B8Gqb7mHBhFJn9F3a2zh9d16qsCB9USHEQmheEiKsGQsqaQFzZAhQu8Xfd28JbvMYP",
  "key22": "5cTWjT2gNcWT4H5X53Mkd2azhikNmgsA8jq98z9VxQ9EUzUSEJNKZXHCPva365bP42x1jLmqBQ2tvGgkhsZ6y3ix",
  "key23": "2dkvr2aBdnAubXX5DqXGknPviwQgqRQXjNrhHZCoosY2pUVCZvLGmH1SvcRy25Xg93iYs1dHgyxfe83oRtLxcwuv",
  "key24": "5dnHJ8D1PaovYb6toYFupXSvD5vCV49Xw7zCXFvzf4UP37AGBQ7MUuzXkiQVsBoTThmASxni13XNVSJt9AnA82Fk",
  "key25": "grkQeCsxdt769XySMYGLxv1Y82JJ7YFXCitRkVHvjKfYZLgzEMkPcphdtrnihfffBHuu7ZoCXvdixbXTPKBnuCV",
  "key26": "3C6dtCarVrWz8ZmYA9jdz7qwxtnVrhg4girXwY6NJSmY4oSUZuotiFnjFud6o1n7JBrrk1hQ1nZhPCYc9mNZeLT9",
  "key27": "64Kk8jDCoMhsfZoGtCrPpq87i6giYSjr7H1rdUF8WYb16rRA7YCtF7hBfV9DYmr9jzJNJfQkQ2xKQ1stJxSMjVdB",
  "key28": "2zW7ybdtGeLB6u58EYu9X5YdcfSSdz7Vtt3FBv9iDcE5ZTDzLBVYKYLLjtPtziqmKgkEhzu23HNN7dJECwpKsP6m",
  "key29": "62x8qERtam76XRKuSaMqaH2t6LXVEbMB7DMWRxniyYfmod1b4hrzpticCPEB1b6dNW9QAEzKacmqcBvh164PkAqe",
  "key30": "1rHneGXKvQTwjHWo4hFR9Hk1moTfyw4qXtKTck1WgEix6pAozndJher4ZcsHWnD2XX6JLvqRQoCU4bzBS9r2cUa",
  "key31": "64uBRs3tSTZa3vnmDPSSkdPtErboaiA16Ax3jHkTXttCQCPxmRoYY7giTR1BYzfHeMXtPHhjLMtTLv3Gu9bLNKAg",
  "key32": "qNa8gTXjamcHzYRHzoFKrnJvjiGYyZAuBdkkchhao1Ammw8xd1pYow5kcNbXusp9C8eLkou97CeGQKyNYeZuf6o",
  "key33": "4Laqgi77U3VruwUQjtGaBYasZq7iezii13dfrNDKzxL5n7Z3fxTEWqxpHryrYV16ESjbDYwjfcX443LT8z3v8vdt",
  "key34": "5F9Yfkb74jNa38tbCrs5iKt24Ga8N1dFifU5e1dvhapEStDfBuJa8BJnS18nRoKm16Qzogehmp7YUBZak8WnSaVf",
  "key35": "3KERv94StQiAwuHFaApnQFFthms39jFh18dzve74HwjBZEBynuGu7sor64C4Xyn1UKtKPdENTPs4VU4hzngSCKEk",
  "key36": "2smJ4ne6cAhRoKFtdHRsKhCy5i5HVUBjjwvSM9Gkwit1LJgdrHjBfJZbXY4dp8cneaRyfrvmV2SRxSithXTHY8wp",
  "key37": "5UAf37h41DLuZzB86LyV8EF7BPkmxuXTCr83TfsuJ1WXFizNCuDEZPFsNsEmyCP2errNpoFURmvwMkTs3ahZHbJN",
  "key38": "4te2HGve4kaioxSW7unuQy7SxQzDYpC6Vy7R2bE7d3ue22pq2We7kTVMPwNX9ZpA5QFHyuLDWt5eY4xcVd7Tyscg",
  "key39": "51kgWRitDK5mvucjtmUPWgKD5WZYznr1AaTreo49qcBckCAMXsqtUcBbqNVMvPhzTC7z4ddSj1HNNRmzREGcp1wD",
  "key40": "5dMYSMqpzh1qm4MaWLDG6DDT2SATVy7pB45wQkjCyMqPH7eh38EgRashVbjNkubFz2WvznLXS4PH1U8GGW6xbJDx",
  "key41": "41eUXfijQf32u1NRhnEbsLj7fQxo7jmCsTwtvM6863omSEMZ5uwvSeBbdd6ZVteMjjzXiAPm7Us3vQ2YVvgZSUR",
  "key42": "21dUuMKVbHq8y8z1gzVoHE75QzY971cbxkv7tkwqW3NUuqAYMW1o7dTDMZUbN8zQAjPS9oniGGqdZYV4RwtV2259",
  "key43": "4mhLEcgHWXocms9rqTevgkJuiTFP3joAsDBbmHZ8VGLwmMbq7jXqiLEqZz9Tvtn3M6wBfhm9dFiFz1pZai2Pd8TP",
  "key44": "4Satb9UxPBcyBNbh7JFoYC41wzo1BZPbhgqXRx7V6g6QLbaVQ2ZPHkZQ7MfuiVJaJ7DKMTJVUXLSgEsKEsytmLcH",
  "key45": "5XufkwsKPNGUrA96mJbR2jARBr3aemaXU7PeDj4QdJuBVAqp765wmhjPc4AH98BLuF5i1DkwBU9T4srzzkZ1B4vi",
  "key46": "RJ572EVKc3BnSCWsCJwRhLaxjct5DxLiLxZigvhrZ8ETU2TTuCEiq29wM6PUARoZkMn5CLKLWQzLJvJbrUBtB45"
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
