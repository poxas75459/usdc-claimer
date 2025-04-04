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
    "5ArZeP3mAxbrNs4rHroDvcd366kKjz9CsYyHHwPUdMwo2Z9FaBnpG65Zf7T2QLe5eTkn3VYdeH89AC5TyB6Gk4Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1R6QiPaV6emvZBy2UgTLXPwKDQco237owSED8BmmVuXWZ33F2kKVNupyyyMBY4gUCff6CxxmL8qbGAs7dKrcJk",
  "key1": "4tATTcVz6CY4cH5BzoVuuLt3o2gdoJs6cNEQqc2Rk2RFPb69r5KmnbetVQn2nNYiobN7Bf6T7JpC1B75sJHzeuu2",
  "key2": "3W5XJ6XHgJmzxNWdNSSnodaqLrPVMmRZYmnGbk5LiUzkw8HXzJesjGXi6EPhQ6iFMbx7EARr7f5y7nVDUYM3Nn8y",
  "key3": "2HqFAtfChomFELmM5fFd7B7xNF3rH6qwTz3jFSNzpLUufHXc7S9sTs1CW7FXqK8Z6munn4nf1cAZ5gzhDr6QSHXs",
  "key4": "3yBzSPxZoZRsEhzGQEPm6Pr3RyC3Zf3pW91Y3dK2pfeLGw8VDEoaxtnjNsU6CkcKZMYa1pMZdAK9k6qQbapn4t8K",
  "key5": "jP2vF7kNYq3u15rdhyLLnSbBtiQ52gxJpXmHWn2fXFAJRzz1RXsgNMKTC3hk7Lf5SyY6KDDBgvWh1ZsBfEqaNhc",
  "key6": "4Jii3YDHwCxAttmjQpwb1CJxhyyd83iuzsneG6QY7S3iy2Z4ygAPAyntLxnnU5Ua3jG9DgqiBPk9kpgs9nA4hfm7",
  "key7": "vMDuk84v9szddKRf5ZnV1v4gSUGcgMkVtVoFw1CCUGij9QM2QvCK3D38vHZndEW3YRfbMkztiCx8XMZZiQqrJH9",
  "key8": "2xCXyEiMG6obbv6NtGQ3UL2GNiEgtzWUSp7uAue5S1RPNzrFvDjsC3oxdZM6AhrE3LNCpPLeRWuKRKr5n8NCGkdt",
  "key9": "bc2aFAJKvrFXqpkffZddz5p8MnUkirUzXyJJUjNdvsVmBx9Xde4QKHAjcopN4h4JR2F3gBHiYQXFxjLN5JT795F",
  "key10": "4GdzZ9mjyfxPxytFKZjP7edbJjPNQtZ17dyesDHMVsjuqPF5pA5usGEurxfpu8nUfFbYmuK2CEjwjqvWadhU9SYs",
  "key11": "2USGCDzpiAzEKkQJcUAJswcbv3qndaxdLGu7TGufPEAVrs5EpbWYh4VtyQCzfqBXvdXbX52FqqM27A6hPLwsxEdt",
  "key12": "2GXybuz9usnxMJTusWeHCqx7gEnuuQvyAQkmupvY8aYc3knhButW4DWy2ixTAcEege2Jx3asYiFFY9QBNP4tzQmL",
  "key13": "4ouCKLhvM3rPMaoMnGMRoqB7njkVp8tGa3ZA7dvAPo36nDQJriKiSmVUAh6fNR6ULxGYRvXiuHUEEdtLcSZVbjFu",
  "key14": "dTZ1pMQakAbSgopbSU7E7c3BK7kBFqqUkRKbumXTMwUscqRYV7REBzX274oADxzsGiMV4r6La1wvew3kDUSxDmL",
  "key15": "4rUZw1H8ENS54YcFvL3QAsxtGLRFbCoAs9fph7dyMTCMPxjJ5ES7cz2NVNJrnSuC8mKSETcYBPMxLsRrMDh8iXEr",
  "key16": "56TUgt33AiDrvDgPzYfRNrn8rgQtwqrPx3xaWJPMioKpvgbnCydcv5RK7qBcTkrLKgYhfAsirta1basdMpFV4rgN",
  "key17": "39qeATUHiePyy59AGySeeKpF7n7jFn6qtFAhH6afRxjx2h2TEr2Xy4Mfcvrsc13PViXgWThejBpo8eJAeSdhJaRe",
  "key18": "4PeEGTpPB64QqtgHsbmuYTHWPCq4c3zcQUFRrKNpCf6exuJH4SQKf3hiUa9YdAHymkQNw9uFVyrmCE1t5pirDpfh",
  "key19": "24K5gYzL14Ghc8uWbHTWTL2J5J83HeFpMYGNencxUH6kAazEVe7siLgpDUGmszpAPHmC7h6r79fK6BqukSGjvwrC",
  "key20": "64uUA1d8huRWgGgprB1k94TKfKkUDKZoLtD1xvjiJPkp6k6Ui7VB4ZSY4ZvuWth14vWjH4sah93N86jZcGCpiUB4",
  "key21": "5pzdCodfpYUx2pmUWSZcxA28jAiTz7uHsaPBYYMd2DpQDYR8z26JVQFiNgAYABmMPDPzXSGWtSy5ccSpPxx5AXEZ",
  "key22": "5KNgDB1y1hZLzbj6Bd8Je5taGaX1vCasT77HFtTNpScBff48zUGoaAYiZ1QCm45hjKsq3XSCjgegTYtAmLHDNGhT",
  "key23": "2ovXN9bzUDUhnnStJKhjtr9T5rGbbB18iKyBf7UqduLYSd67iNaiiXTpuBphQrHMCQN6t4UWdEsDuFh6wm3jB56U",
  "key24": "2s9aoUC6QmPA8BqsNtbgefLi5QCy6teyfpUGHHHsFN6Map9prqSKsWWjxhtWfSfBZAkMjPGhosnfA3EVf9ic14Ks",
  "key25": "ip2tB5sEHaRNQprsUbMAe5BXNMe4SchbQo2G6UGsSaM3fQvn57nG5g77nK4tjnsNaDQyhT1aguSc9ziPpthfFXu",
  "key26": "4RuPthXZoBGD738CTsnUKGTEGrnGFDDePFidnF8ecQ7sS5CpkcYFpurTbEUdWiCUZ1d8PkpqzVA2vVSRWKFL8GbZ",
  "key27": "2hmrxbDzMi6uYB185BaW59UK1pMSvMJV8pYQ3n6AT2sKo6HdCPzDYF32JYfMMjrc2y7p2BCWiTyAGutFpa6G3vzQ",
  "key28": "2gcYNddDGyx9a5umsqgHidu9v2EsRPUyGo1KHMX2w1HJCBZVpyDmvWC7pFvsGNZJpEXf7X4qfRxHEvs5b3hqMng5",
  "key29": "2M1uTik2ozHV1uSeTKyvkxyhoszcLjEVo41bNmb7nm9rchUH3z2JUMxxJiXmEG2AptTpc2R1X6sh7DAQJ3LoY2vy",
  "key30": "5SG4HxHDFvWH6z347GJgQoKSofxFKrHHSNWdL6HgyJhvW8sGdBDTZxqS1uU69msuAJhNZgvQZbnqRxA5dyQDjC8E",
  "key31": "4vDhZYNbYgeHXfTb5gnu4bd4vKVwVLLoyc8Nevetz9RUus5NZ7nzV3NuhdidNFPhVMhCyzsCYkWVu8Pu4XWoLBSJ",
  "key32": "4gi1n4ZqSrbmfGCJ5H5gAe6zzR58dxS2hYKiDcBuUNCuA3E35gcvKWhqj6hYA7TmUbqhdALoBXzWZgz3ZNShKAtg",
  "key33": "GNDiwaeridbrWFgTa5EPvapi4cYwxuQ2XyvNMecFNChhoBBPvAqVbxdDnyeywhpNeiVMtNYdKgd5TyY4BcKw7mY",
  "key34": "2Vjjo4SEe5QTcd9t1wS7sgae3dB6mErbwzPjAdKjiotvGqyeTTwhez85s3akvVn9mUoiL8BNTWayHFdZZPoqKiqs",
  "key35": "mRYtTzWZCQpwCiyKjdmhN5rnU84p7fL1vKN411UtWDquYtNv6TGG8dtYVFRtunkjwxo8GNQSiQSdRWmhpWABPjz",
  "key36": "4g1KntzKNHCh1zXV8BCCUjuP8XT8yWNti9ieSg4SwFKXw5U3Pt8o1KRiSrLnGKxzqwvnpDbhsWCVFM1usMYWikxb",
  "key37": "5hk7hqihajuUKiNqKC7KspPFMgYwLMQzjenRjs9iurtYURfKBMqqZUA5eqrxJXdjGHuoKmWdqvunMPWDYggBoyCV",
  "key38": "4uXypHfSg24UunG9ey16Dr59Etk6XzFKw91RwGZxF8apkYATqSxUCBwMosJALiNRcWdxCGHWpsdGaMngJ3fkTCj9",
  "key39": "2LtdKBXvRmA9tra757XALMsrLkMMw1Cjjh6GvcbqtrQiE7KF94fTEF5siqHVHbUrQ8SsiZFmpQP1e7Fy6281qRkE",
  "key40": "3HxRQEpRGBXbkQdNLuyQGRuPCD9ZXNfJ8vRbiAZoEwFbkoUGrdooWng2emD9EhoSnpjz5PcUFXvBcBTqBsdec33H",
  "key41": "41GAjRsKRgvSQKhZny7mJN6GBZzadQtFRephFejiJgShhQtqWjA6KWi3LXb8ubQd5n21rubY8HRKqZhk8eYEmJZp"
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
