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
    "3k1cvaNaumasJbVqu6Hi9rz4KT2kJmZf8Z7moTMQpmbCqonthnp3VH1ommeTpodo2YXwrbk74eaqJfYe9XbsY8Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gKipg98zgYk8f7ZjXqwJpC7K9YwYoyx2WNv9uUDkTKgyjtMLjFQGYRMZwe9efZAosEgjSwtjMFo7PTwTjVr61",
  "key1": "2mfMrBmozgWuW9EXdx1mo9mJLfigcnp6aLWin9QTQtmRoUKrS44SmHDSyNuToDN8AgF9CSeJkRpKr5auuedi8SW8",
  "key2": "23PSo2AysZfXX2U29kuNzrZPV9zEU9nM69uok5sUePsDdc9ujF5VKzaoXVtUzraaig6qaoxMj9K8M7dZwA14RWHr",
  "key3": "2Appmv4m8jMgUwxJKTpA318jov8sHUMuxjDqiqBc8XaTa9MwqdmtcyKjQXH2LKYLW1SynoCSFQ94uzXx4BMvKMs3",
  "key4": "2b5AFLdfscMS1bWPhHXNVGDEyCZXHbz5sfXGRvWShR4XLGCUidibLrJ68Twiio2ME6MUtV9ngLaq3zr56dezUrb8",
  "key5": "2pbkHNY8SZKHK23GPb6V86m296EqSgSafz8FpGitaPGBffh2WppMJHKK87cPw58vy5MjaZ3i5iuy3rp3wRsowAVr",
  "key6": "rpeJkYk1RddweP6HmgVxoi3cAJkyJZ8YxhFB1nsyPzTbr9ajF5TAJynCaMjmaLuMK99FF7oLjtRUry7rGaz1Deo",
  "key7": "4Hk3NWWudogE4L4m15ahfz6pmExZoT8eUjQcxPkPB9HtoHVu8pKYuLC6Ho7UyfUE3NeNG4Xpu3FvS6CBduF7gcHc",
  "key8": "KBMvwEJT61PjgPr8Ds4ed5z4RcMypmBuqPJjSLNx8XThjM49aCF2KT38JR2fiW9x2kpHgmg3w4HpcTDbAsyPWAU",
  "key9": "2UJBpaNEDaNPM3MASU9qKmxKTvfgfDiQZQ2sqYQSfnHZuDBZZrgM9DLvmtaWed98o1ppeJXDFZfAdKTM9Pb2peb9",
  "key10": "23fEQfHUydTXYNQcagSqGVwqSsuzA38JJx41pX61uzJT7zgiR6GL7CzUTVsd2rSpxMtRVM6T6BhbnHrocyJRUzGr",
  "key11": "4zNYpiTHVwhPPr5YzdVBkcAuivpP3m773a2m5uSCmXJFvrzF73oxVsv24DiWJUbyCJDtv8mNKdQRMQcNBU5F2ELU",
  "key12": "592JSRxPx4ccff3aJQKijG2JVxMcDZDqGyKxjc8WSRSz1qvheEvbojGAgdARyjpDuMYFE6pnd3o3TrMYAS39FjWx",
  "key13": "5PEczMqnpz9ZoUAKH2TcL4H29zBzFyQAQ7jSDrpXz8MG2jimTC7qqPnS7p7kQDrLKy52GKsNfbxmBWYCKkn4gPVr",
  "key14": "4kKSB16afkr1FhwvXHC6rfWxbu47m9LB1RFbWpQTjr9T4Y1aZnN5778xSgagnVpjy7dCr4eCjrSXmUFTvsvaePdK",
  "key15": "27rKud2iNSqQamefVAWUcPH8XJgnezGEsc7oPEs594rwsPiEnoaeGefy1GZQnJVb1K9X96X8BP9Bs4Z4FPQYP9jT",
  "key16": "2z5sPbSAE1PajTgSper2QcVto8xvPWLkGqWuz4krU91jb5hNkXZnLjDjTho4cgWrCwKae4b1oiwfMZsg3Ug331F9",
  "key17": "THidFYbrgmcZ6Xcv1LTEVjK2ePU538AWyFAbbUwmZcAjHvXVW2m3stk8vhaM8Fc7J8C3QNxyWuouLErqw6Ne5p6",
  "key18": "41bXdpjzjAfEizTafT4HinarP7rXLUy4EvoUNFXsWhGjRUJNmrYJEkuPQcdn4bUMUgbEZwWQJqvcwEB3TKu48fv",
  "key19": "5sSXybTymendZZrzubk9RPXv4U9gr18ufgXwCVL1y8eqjKRPPtKwTn1yFsFyvrWj1dY8eFjRfF4a61xXTLJtjR2y",
  "key20": "4jbqxR1qjrrdDFi8q1VRGmhoeTxNcHPb9gkzLvZnTBApwyo51ixLKihHib1w216BzSKLRd7PBjWNunjaYu8Bkru2",
  "key21": "5nYKFXZyAn6CEUCnuBed45j4q997rPrURZC1cq6Ltk8QnkJnwMovX3Ds99TCCGFd6HZX23KpDzfwnEKyWbzT1f4c",
  "key22": "2MmsDZrUMraPeSdKYAzarTQtSkQtaMeLxRwPMLcEsDwiEQAsVKf261nrvmYXiLeNJ3kXAvDo1XgQQVaTZUSJ7HES",
  "key23": "5CoxzoQXAe4veKVu8AcAcveMxQWrqGngX5z6vVtXTRfNhQrcbockHobxNU2W7EBtEn9bx495x9rBDth5aM9r7TvH",
  "key24": "STymbKNozT4W4D3NoESE5ZfdjydB24SWHCdK24z2ExgZNeFbKpVHgS9NtpbfgwSksd6r5eMTWeGZkV7YWHqHRnR",
  "key25": "5hWAfCdrCxj6o2dRwyN9JdfLASnt6WJSouauJQQE5ZdypG2Vmr7uxxfp6S1R2GU9EKZhxLaU4WSULbXCmJ57YvY1",
  "key26": "5UVUeZHFotWachxoX8kH2RXCeW92iouXhLHHYnFrvaWCbXjZTDoLiSK9PgNSLgCR8uZLZ4jHqACkC4UJCdr5vG2N",
  "key27": "2zUeFVEAQxc3XJQDJmxHX8A4wUEnUztmDXvsSkuNzuVWQyBAnSCTfoR6oHAbs3jWkoXibVRarRBCAHUWuLED4KZU",
  "key28": "Xy6o2U7iHtWyRqk2d8T8JCv3Ct3jaH1mh5DBMxbhZWJM1JMPUNZ24GVbJNgdFsvhrawPjHK8CzQjnoPuyLeaGX4",
  "key29": "4bpNCSPYAXBf8J9ctgwdtnPyhLDWa6ffR2mMyEgrqHq9cHHzipL1dLht9zKgu4M1GzyFR5rN1MhkNCsv4Tr6DWnZ",
  "key30": "3utiYQLNn54TcPHwgNc3QVJmGoCv7FwrRHN5W3jpYbNv66tgWYZeqQNEvCtKbpWVWRA59TGBhYUrh7YFkYm9VSws",
  "key31": "5LUMMf93trCPdDREQ7TcVjPZX1RT1tWWqowymZbhgUwTQQrc23bN5xcYF7z4TaxiPsToKD1xvtEBttNzo8FnqyiY",
  "key32": "3u5gvghguJtEYiDr8CHmLHX1CXG86CMpxbGyTNUPZCxKk1aC3FMLXfXjhncxNEAXeQF7ELVWrCxUtcopHV5voUh",
  "key33": "3EkrkL8QCjFo4qqoBYDihxBPRSTeJrcyBevaypMwU9MwnJVymMJBzkE97f4PvBk7vj7jLgFwi9oD4Pi6qfwh2rsX",
  "key34": "TPJX3EDVCMna7j7WQy2bQPUtN14JVfmktgzo88fZvb7JPiGCuGkgpTciQYkL5z4uCaPf4xN9WjfBbhBm4cUvm3Y",
  "key35": "4iWQhxWdY7yNSDNipppnMdTHoEe6P9fyH3zfCLJLMUSazodzJwLYmFj8h8aesZMmciMGndMRggmRjLwbNpfx8uM2",
  "key36": "3wZXCtQnT1P9bPMq745tKDYsNndn1VtQxQChJQzSLAKCuWcVB9zyb34bzdUeKvC8BVhf8VXbP2qXmaTi3iZwQtYu",
  "key37": "5pcdqvTs4iCbXCCqKJGWYSzSyZNbwvMxYYMBFRSBATamEFzz3qMvN7G4S9wht7N2puUHAFakT25r75sRJo7u4qzy",
  "key38": "RJdYBjUviQfo6oBV1g6X7dqB3VuHNVquAQwpzuPCkU3c3Q4YKAMAf2Bz5u9nqTtPojMfrsoXS2B7TziW6M1nPsX"
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
