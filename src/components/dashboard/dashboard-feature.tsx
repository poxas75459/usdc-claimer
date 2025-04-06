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
    "58niS5bkso56NodpAn2Ko6VDVnmEYHCUGTc3QR33WLe5iBHrS8ZeeAjDCnZBncQm7ZRrzWVSysbu3go633gTPYrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63gbd4z1U9Mw1R4oeoSK28t353VC2Mufd4DZ66wmLFJGYvBdSaeoR6XS6CVMpm98zPUQ4zhxLnHKBpz8g6FVncfV",
  "key1": "EdX7zL5Bj7jjqGdM1QzepR7GsstZEVDW7qd76sCSQgFMHJPJ5u4MrK6P3RB3Wmew7mRhTwfJusGCNg9KabTYniz",
  "key2": "4KWhGA8d1Xnef9WmLkDk8M2CmXWrSnczTkEeW31Dcq9qSEK76jGpmZW7zKieYZ27eWrLj132FdUyEravzX9nSaKF",
  "key3": "5FG7RjzUipKXvYVJGPDcUbXHz1Cu98FfQ2rb2He961ZqnQ8UnJFUQDF68BN7SLz3jbFebubTvd4eLPhAs5r5At1j",
  "key4": "2iXdw76ZUkKGfDp2N2MXmam6dteZYhPviqKKnjXA8LcdGtbRyZUZbqbT1u4wG4rU4yHBeSpEYVVK5VbpAvU1YQXW",
  "key5": "2YA2e6PyuoNSbSYxGB1cm4CZYnfxaLWKmfi8i66SXiQiYfDcJAAbS9btgybr4iAFQQrMpj2LjqUuyfG5fwwvdM4o",
  "key6": "5wBgoop2yk1DqB3GhNSkZFw86DTyRWscAAvKG5Ze3r8KUPN7duDMkvtgMKDRGWKfdeMJmpki9n3Mfn5SCTXEMNYV",
  "key7": "2MMS1wULYPqpRzRyJGQfQXWystfv1pcHaKVdUZPxZqgP91MmjvZjhMiAjnR24ZJojD2qRjBoWXQwWLGhQtaXsdPh",
  "key8": "4BSGZbUUWLg9pzdrKdawHYpXmegAoCdsMbhvFfGAZLFnbGUfaNtXadt841YEUKePoqmJhZSPQM8YhnZVtGzcD4PC",
  "key9": "2vJg98eepDUZXCH6TL7wcJxTC1yi9ps2JmYLzza5jLKq6KcTvSPBaUWDnyFkmyZP83nxpQM5CuNbFHsM1HciApAm",
  "key10": "2Zb1WmQ9M7h9N1LSunWofxaLc5EhePgjacEE3mvrQSnsJBgDVvGD21TwJ79uHoPk5rG5oDZy3ppLKy49W3bWCBke",
  "key11": "2JJsYHPLS7nunsyidE1JkmQ3PdqQaYJ8THozhZsruPC4vwZHZUKBgcTreDD3Tbv7FJ8xgLgQHzpAR6Z3eiAAQ6BB",
  "key12": "miGW2b1onU7N8KpxTxikLrvkfkZfNVZXv7Q5oXuCvipFuAmUMnC7xntsPqqFPZtk9Qxa8r6jx4UEwKv9fZ4kV8A",
  "key13": "t61jaJt4FcZ8MTkRnCQTt1xguf1nRS8JYmDkdAuEU6CYNDub987wvrXi3HJRXMPphLCpMtLBq38bX9VroctLBfd",
  "key14": "4CR64NQX8xBAPQqG84qhBJHusRFu7tMEDy3JD2AuM6Tnyrik74u8W4Q1PqRg1VaRk1LzBBYqt8JrMhJ6AU8kujPi",
  "key15": "4hSyE2rhez2gytdyenZ39wDUEWqPGkPhVd6UTeBRaoGSnsY7UwW2JYBfvenUX6FGibUWdZSP5wNPQuattnrkxxZ1",
  "key16": "3fxSPsaKo7cR92GnAmsCi85mK8kyJZDzYMpaL6DYBFVWa9c5gA8NaeFxD4vZQKYp8u1j5pNnstGZPZcyeQJhWJq9",
  "key17": "5EAFpWB6eJc6iqEUi1LhJELF5ka84fmtKg4DxQZb1ZENU8SNUXFX3YXyfnYQNsJ627ExChKx9Z4Sw6r38xeS5Scs",
  "key18": "3xdfwyqbDhdJSKAfwzq89ZA8R82CygE6c2eRNLvB1AQR3D6Gz8tDf59amymtowjoauCMNSufs4RzCJ7i5dFs9C85",
  "key19": "2nQEPEEiq4SsCaDUbgG6GZhyFxQE37t6TRzk7d4xSMfB9y7qqzM52KC9w6dZdqx1ArpT221d4QTyMxGuSq2gziZ",
  "key20": "5CQHJnUCMzCmb8pv58ocY87dkxnWQ354ZW5AeSF6zKrU6TkWVRANQXCg5s7hfAcrbqaXAJmMsGLPyAghPWymuzfv",
  "key21": "2AVyEt2ukTz1Map4yhPiFuip64W7SX2A8jPWSSWLupgwBGqr7ERKXNniH91YGyEGN16r41uh9eQmsF3bwkEV9m6m",
  "key22": "4dtV97tiYSmKFHJMrVkrHokq8nsAMnkwZ5k7yQaG7cscvf8iNDeAB6Dq6wdQD2XaNG9fAcCShdxoP4vBpXHjm9n9",
  "key23": "3RGunUWcb7mo2aegza4gtP23JPy7LVracx9brUye22zRRyutiw8TyJ2uyoFQRwq25D2dB3yXqLc5eZoyt8SwMn1w",
  "key24": "5xF1byPRy8XoRQ859deeFCnY4U91iwei9XKWBZjyidrw3C9edjxnzW3FjpjxAHh4jYctYd3oKt26ivXUis4K36wL",
  "key25": "2NkFkwEZ1Eh947nPsNBof4v1X25ekhM5qYxBVv44mJVX3nu2RzzSfPAHKuUfKc2oeuQKuFJ5vnVEngzYrgtkRU3b",
  "key26": "5Hescrn5Df1bcXpanKrrCkpa14ftxL1rsyujnUe7bfqoigXzNYYoxr1dbphvZ68S564mPsgGFvYdakRbwTbzrBU9",
  "key27": "4HjsUkNkbRwY62nvXUaz3dhFgDjBxjoY5kQztSd8BRR2WHBJSZt1UUrT4EqJi7hBaXwDwehSJYj2HhKEuR43YGqA",
  "key28": "3tAAEn2qRKsfss9ZGzWbsH5ugybJ3m4AaNZp2jRiu8rJUSTTTR5wqsTyc4xCsxX6xGHvTYUBLPTSqyCM1vMQxPRK",
  "key29": "eWvSqqKKHvHxBxnx3Rj7pSNdm21YUCeqQUYC6c3vgG8A7dpcR47jddqa84DVvr7mBtUvZuXQsyv8yfWytNSc2Za",
  "key30": "5wCeEwLowUgejGQdmXNuw8NYG5A96e5GbgWzUrTcmfssfUCCkXcj7z8ioApE86UcFcFtnhz95VES4XNjET9F6EHs",
  "key31": "4LTm19CkWFmkqqoq3XkJNTR1JTkdCQPEeEg7qdcCyDfhjbkiySBLTemXfKk1x2gDnNE6rBb9dHteuUHnNy47augr",
  "key32": "5M9JG2y4sm8yzVGakJt9gFDRauRbh363Kc91bQTZf93u2MrHHZwuQBqgGZTKuLRzL14vxPeiPjC3qsLujeXRtAR3",
  "key33": "4d2BUaBXmkakPmxtyJHJAun2UPke5sDYRKwvs1vXKxujxgQYAvMGjnujE4qp3Kzs97QXvwKiwbQseRztEVDMjvtQ",
  "key34": "2xBP2eQZXVPj462TPqUYFwZxWGSJL5tjpNdaRirT4eKahPh6zpM41VN6TyM7i2kKD67CUWk5g62y2HETbhE2eGk"
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
