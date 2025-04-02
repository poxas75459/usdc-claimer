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
    "4oFp63g831hBJfWSyLXY55K5gxuHXfsAbWbrxpxcaV9ySTrMCJGvf7eemLLiVE9suXSPKEpVLq2Umfq817kQp9JK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUkjM4kSmdceL6QeyoD2VY7bLhLd614BteFxMoEAFJ6WMSJf8gZyqmiz82P8Hon5hBFXCm8Htn6xhyogxKYhogv",
  "key1": "5MsCVgC8RN6hXgBXzCtFcsMyYrPeCnvpKXFJG2atYxZLwEBRjdwNiZrSYR8DcqLv7n5d4Cw5Gk2vtvKH8p3MngKW",
  "key2": "5e632gx9NZyydtZKujR2HvpME2f3CTcnoevCy7ipPZWCxhBGJfCEKw37evMG6mUXwmAU8W7f1zfz6S52QWJtkSqQ",
  "key3": "5gCGWsWqibogYHCBZ8e2KoUN46s1EAbPGG3ururqoCqcbBEX5KWJwfwLve7JU9nUW3FY9kcc5JKLJhiJ3aa7imo4",
  "key4": "5iNfTS7LTh8zq3EH596xCuG1wXCK59Hovcx3RzozMgEjpsGAdAF4KXBGBKn7zLcX57hu1JAu4RWBJFwMu1Y4P5yw",
  "key5": "4ERKSwZLeS1FcFREep8ffDjYPXdRptxwdeLeLtHDwkXfZMmjzbavHjKKnNvpmHRTjKBqr2SYMAcM8gXDyzg6y4Zz",
  "key6": "3G3e1KyoNSaMS3yPUpyiN6PCenSScCjaNT4yGrzTFfx7D6RyyLnXAsGKxendXi8ZDkeUo5X7u5bk4n2xmkLtXjuj",
  "key7": "RxDFpqBhdQbe5f1rtVe74pDeMMMybuBRfovTGYGHXsEXg1VU7mmaKGbUZcQHGVQvYMiMoUahVgMjhrxcTRnePDE",
  "key8": "62VJBkBYfZmcXdP95cqMcspvRjVQSkrCNAk55maVdAKsAyQPACgfrGvVD9rxYkGZGeEKn3Jtg83zGngH5ki961F2",
  "key9": "2Q4KjCNZP8RYbXiQkqS2VDGvenjiVoirSdqDoetmJQpyRqgetWW9j6BCzUdJrRSgYaJG7HSAFgJSEKPNWu6FdoqV",
  "key10": "2dTqjsfNWkn87a3S5Fa12Sj8BNNvBv55MoijsaGv4gvXanhPhmUUYUCNFD4wmcyLyGP9nZcGsAs1ABGdxjdL4xeZ",
  "key11": "2QnAxJ9SW37cgEc8QQr6kQ2saMY7XLEVCqrsTwqt6W9UCzWjGVeHGWaXAoaACkbXyoR5KNQCXMPASekeDhsSBcRD",
  "key12": "2eFSoxg5RuVS2nsdwCZLWg2Ukhpq7gT88sE1jyssvwDron4v8C84cn2VPpXKi8CKX9rv4d5gbHxgo4BeVkidxnwg",
  "key13": "23W8wmVJBzvuK6ewAJ1AmThu6pLrEemr9JjNoUZm159xoUAkBFDeDQPGxv3LtPMjAQpQEpR3QsFJD16koT6ypreh",
  "key14": "5Yjb8T9xUbhSeJ1wNDcKRVWMXp9bQdHaHkZAQDyftRVxCYVAWK8pBPx2BZmMggd6QTd9vC9rFuGXmbRd8HSQxccM",
  "key15": "2BAM7VSKqaQC8PxqQMpcUNQE3dkcskb8LJcnrUJLu55qQ36bV9ZUX1WPwaUmLnoumrRUva2cVJQEpQcvPg5gQfep",
  "key16": "5ApaapFDrVQSuZdgJFyxfaKbzPiszvZjS3iBZfDbLrjTzFPkD3hRvFPuoyWSYB2F6sBZEcGNEAWLkGhQWm2j9Pbs",
  "key17": "3p3QeJdVF5LxZbs7oFVx98cfMmemTPUPY8qoMrDhCc7H65sYBLTiqJd3QAGFA8LXvkkTLeJTocDEA5LrtXELDwPg",
  "key18": "5dseDXSwYeGqs3WnNosgqEnp7YKX4uNyafjXDX98xtRUbyHWspGZvjSwHJ399bwtqygmi3fdnpKQ7PzdauA4npph",
  "key19": "1QMqQoKppdQ7zsE39AAwpvKwwBTon2ZS8pJvSmr8hg5K146DFjCU1DiXDXdrepFbpTCpnbLSA8BKjRAXqBZXkQV",
  "key20": "4siWfEdmE5oqNVAMBfrReKh3EBL7htcawePuQ3Mnw7vMMv6dzSbL52H7qX2Nvx3NHt4wYTjfrebcuDBdEaQBco3U",
  "key21": "2trvKLWqM2KbZxJkzbj1BobMB3CtGnF8CcDTPG2wv5caadqXjra79NoYrPYbpeyuja2eu1qGAbL6R5Ywj2eojNwr",
  "key22": "4xrcAitAjtfUbhEKDtqycVWFwR1RxqRQBm1RmVpSio6bJHNFvKHDYWSsUxShfMV4aegdDJV8QCMpYazccj2jnd2C",
  "key23": "rur5gPF2SxqY8H9469M3wPHTs3ZhaQfBpqEo2uqjU9ja5yZSCqnkLPQC9fWfi3RVZbRayZf2HcHTtMRQpBn9HNj",
  "key24": "2r23X9J37jd5xomARcRivxEjLHj26WNpXcdim2GPxPpLcpmhrxYPsekox7gG8LxXTLC1DBFVU7t1JJqSiZJzHTT9",
  "key25": "4Uaevd3QcpQuf3d7RH2waUeBZn1tWwBNDiSH6aYpyV5D2Z6zoQ5UtDFpuNnA2dTCiLyiaKTNoTaBj24qmjUEz9RP",
  "key26": "4PgGGenFMmmu3MTYTrs7fYNEeX7ySMh4NGgKXVJyNwNCoWWpeU1o9dnCf6fee9yrnaz5XBtij2PyQg2L84z9QnL9",
  "key27": "5j1kTS9FuA9t5QArcXHUcrcr3TQ5eT26ix2ZTqLE4TKPyfRpFHHG3WE4EXKbfcmtjncLcSnsaZD5E9G7bXsG84Ho",
  "key28": "5X8FUgSQGyQMJPrJXQYgRX6a8nY9zRdHxSni1bziL4hUEvb6kXDqE4GURZSXRSVuWovT4yCZvuHW25g62bxYTczR",
  "key29": "WXMWtfxSrN38AS1QGEKxntxeeF3ZBKVMNrweLM3AcFUPgd3DMgvoeMaqH8qQPpuE61UFtd1qe8JydwbnzRkqtDJ",
  "key30": "5xPUBK1oiY25wXwpLhaAzpG1n4Lh3m3rRHCC8yTm3PTeM6yaZFZJUvPh1RHp4ZCV4uJeUzysWAm3heuojh4JnFCm",
  "key31": "4AMNPUnE1MWAFdUfLdLBGZuD96XcFJeYLpDcEinCQ8QA9vh8nZ1VbRG5e4obF8bqutkWMdxifnHZzbREHoQRtic4",
  "key32": "3cAZEbQxCHR3aR5HbF9cnHAx5Wu9y4GioQiXwSvLSwdaknKZBRSSyh4wDUuP59PnSNHt3uSmgKSq4cDxgaAwuK1m",
  "key33": "4YZWoFUeL4D4gatJTrKibZGZvXqkXT9Teg5c4KCk3MNGV3c6cxpZhzSthJtqg841W5wjvT4e4vzixxhve86auQqF",
  "key34": "2t66sFrqfkLZ5NeSoV7oqSfSN3CS6bhKfkJ2gUjZtFhB4s1N32dHhW7eUnBdkwV9QCmorMnsrV8oLS1dwJHa7GEp",
  "key35": "sBtSCHb222NdwVkdtS6Wj38QBBPaD8oztREQzhrumwBugmvAnnpXcdTfwY5gEyrCryia6SajB2zP1KEqbGV9mLX",
  "key36": "3v1TYEjW5MTgrf1PPL6snhUUfjyAshhX5xYSiCiVa3J3M8paYBbE3SAQF15xVJ1rskxXzWh3MiYFp59CDb77g5md",
  "key37": "2ZxDVjR2EH99HgsignZ93tqX2NBBhJPrL4bgEZRb9tAM9ythFxUdeNeEaWJt7LZJQrVnmjXFfMpyaTNK3gM4XNVM",
  "key38": "25YXtm6xuxGVnrLjwXFX4moUTaCLMxxMkaVsHLCGyZ4v9QkFhnq5jKJmNruAryedexBTqttjPE7nZP7WVm6N3nHB",
  "key39": "2LjuHk9ErXSt2hDyzsRBzHAnKkigyaWaxv7dUxhXMPbNsNBbq45YoY59zoQWZJe7ssyuzUTrVBBcaoepfYuBun69"
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
