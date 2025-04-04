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
    "4r9Gj9nyVEeBm7je1WtK6XptK8LmXUCepXkoBxdPepU1cLbGCme1hjX5omUBFrj3GHCHjiya9LLj8G2YFdMCfTAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gs4GRX1kiqh5o2yMUcYTwZFFG9vpoR6c7RNr5xPfjhy1ppsADcjQkqn4DgRTJFdaj8DaMnnK7y6GYfuU2chzBBn",
  "key1": "3oWf86WUh5LAWodhWcjFqmUdPEJHB6H6nq5vyjJ6os55EwWUPvP2FEHWKAevf9MWKU5RSUNX35HQyX1X5YCXapBV",
  "key2": "4ecn37cYMoFcjuXUS6qaUahDX7UTNXZgmE4G9nNpyuoYPEWGRkomcx9sZjFUoLoreamdFDFLc8VR5tyN8H4BdXDs",
  "key3": "21ch5tLWZEMiyGRWMMrsQQkdburu4eK3jBiTFTqgjok8ezkafLqjjMkHAQDmBFnKFgjHKMhLJMRQiADbVFSEKUZx",
  "key4": "44EgE5UFsHoYMdyoNoqXzKk27ZRsF4XgFzyuvyHDBCTU9yjGWEpgUEvb4hRfvUq12wwRTXHmTJm7g3izk2QYbCeP",
  "key5": "p17FexrKwnFRTeHDTysKw9EUiHLmzo5whKy7j7rEWdiNDvaeTfnzF4TF9JdA6EHY4H8YJXdptk2Rd6FFihMevQi",
  "key6": "3f5mQF6qXBJ6sjRBBbfT2oKS9ZQDru4VP1FzkRC8pQ1K63xQB7EdrTvm61NksaoCeG7Cnbzhy87KmFqEjsjdYkwY",
  "key7": "2x7nKydiMx5XnDwbB4MX1dDWmjSHaKNHA778RLow3fP5tRq7WFmdqrNwsP9sopxhErx2E4wUj7VyNTcrZr9p3LDE",
  "key8": "2kKoMv4xEBbW2e7e4mgM6iWPjCmP2TJ7nArRY8X9eLBnapsfkHVzYQyo2JwNpCPyHuQH73AGezo4HhF26hTEdBgq",
  "key9": "2NeMSsFY8q8eCo585b8FA5XvLG1UjYkrqxaM3rRgKCDJmy7DG8c6UyfK8s8TD7TkAYSwEBHAA8ZXDX8JD5d3XF1P",
  "key10": "4owEk81wwZDjLJ9ukYsobd5sz6U7uPxtoGeucah9qCQv11qcB8pRckRf6rds7jvznD35c1cxdq9XDgpj57nkbe6B",
  "key11": "39UQSKYkMSNRSw65Q8YwpfuiQu4PK572XVVM1rLfg9gofC2rvTWm1zhYLM5vnY69GLW3ni4ocL8R3WHdfok4YZa5",
  "key12": "3GHqdXG1Zpct1xwfuK8Dj9hZPQkm2NbL9HA8cSipaDGGLVfwEEkbD3air2FQcdjy7NMz3a2rZFxvKgjiSVFZvKJt",
  "key13": "4TXM1KrMbjWd3VBdFw2k7Qe6vfh1EFimCuMtdScU5hCBBwb1zBw6gEpWvXaZaLyPrcspfUw3LHeR4GKSBy5swVXV",
  "key14": "3tprGohEbTEiCfJ8zzktS2RuaSVqTMRHS8XJyTuYt4jYBpMnQ6Nd5SpKZYJP4mppBA29ahexqGDGebBbSStL8JYi",
  "key15": "31vZ2jk2SFwLSps7wfP3E5pLnfwWZpkbQ7peKaWo9YVfK9pr9HjfghcK8ytEGKx57oFKpZTzJxPsPXPxSJr6nKSn",
  "key16": "4pNLwsHpQVERA3H6VcMSFwANqKZBvFHVo7ahuCXp9Dak3rEdjiE6SgqA3yWALAenPqYYnCbnNAfTAUxoFGWcQmAx",
  "key17": "NcoShN53EVkcjqMmToB7cTXbzBRM7o6683qrjoQ2NhbK3eUcogFfn6eH3SaTwwBvVp6AjiEGjXKyf8Wqc3U35Ba",
  "key18": "5U5kSneK6XcSxdxbaZHKWNrK9482Tw1pF6Qa2XsgzVd9h2PjJ2u4H8tv4WwsGpsECkGnBKT2FdVGjJenXiSxWwvJ",
  "key19": "5QbgK6CbSy15H7cjfB2oTs9CviPzqbc8uB5dEzpCsdARYehzKegMwG3wJgJviB4yvkt8gZxvVryedF3P3rgowv4C",
  "key20": "Riwd1sD8KRZbJqGCwvWJaBxx32fTV2WQ788bHnh5QnsWbE7qWQ73v6cCAW9Du8aNuTLbXJSrcZeQU9VEjmrBoYs",
  "key21": "5o3YqSYGZ9iA4zsjNXUkhsxyzaWiene1fTcb63ST2abjwS9F84BHHknmWnU2Ruj8LwVYNXPNYeYtEExn48FspC5L",
  "key22": "5QQAzpMVw4kMyosnVQuY8vvdQj1v4W1S2dCsEsFqE88S7r37yrt44wKVdSUxurw9Vnwp8i76uF9VrXBZheC4XsLW",
  "key23": "EZXTYCDtSgsrEjWoDfaaGvvQc8XdFjRqbSjMGzh8K5a5i7YTtVt1bJNscJsr1BpPnKdrCxzNCErJt8KKe5d6YZn",
  "key24": "4Th8bUrw1KGmdVpE3RAtt96g9McMGMir7fbP7RF4XNoNKnwYFqfKxcc6uLa7JNpCffSQ8xMDf6FAWkTqkc2ppGRw",
  "key25": "4cb9uiA4Vz8rnw4jrgv9gy4D4PCjLG7EcctDX26L3ngMXfredqpq5imgkitK79ZEQZmjwY8BpHsv45vMPtVpVrnX",
  "key26": "58wvcGdGFK4dVxH3THi1bZturhsUuPXxabYuY5Y2MJfomT4UqR6b9ZMmKLNvX8aKELcRy4sReUfoPTcxoUuGmwPt",
  "key27": "DhCVYXjzw5KWEVXQMLbBo7v5683ymw8ppKgrEYWzyFffxcjcgU9Yw5Udz9wqoPFPyFU8RT43hxZSFHdjakqHN4Q",
  "key28": "5f1UXedwp2FNfCsL6xQpzfgT8ZHWuipjQRMswKmyaELMD4wg372EGkSvzLztfGf9SmPaLgj3CHPH4PnWPtQYjNfT",
  "key29": "2JMJ6mYiwg8GRnhiHV2ZrxR4Dpx7vprBuNw2VfktA4GJsnBQFL7Jq6cBrBxnT6r8zrQNDqeo3NAiT2d7YihrVX18",
  "key30": "4F6p93cpy9iasAMRrVrQ3SSsQRvexSDFEkMDJrkKYsNWuz8yDFKJN7xyWPkq8d2Zmhrd4LL8AXmCe9norRTEpE3G",
  "key31": "qRNM4Mqz3TtMEDyYz6uSsYGy5baLbnpNP8fAHsnxGhbaS98c6CTUWfcQoXEE2ZLQMdhgoAyAYX5nJacVacm8nvc",
  "key32": "qefjiQcqnR53wCbYpdzkGBAQS4DZ6djSKMXagSF3syey1HiZCWZeCf9MS5taJ4SQwiXJLoPZTFVSkgDNXhV5J9j",
  "key33": "5bYdAaQp1SSfFdgA8zmYwWkwpHWKq1E7jQ9SW7Ye31AmiMzHWLejw1Vv2brHyXfYi8a2zYDcUBvHwikJhWEYq7KE",
  "key34": "46mNsARNBgnAJ1HGJsaBBx7rZ1bSEf1kXat6kGJoRfRwvhQ291d8X22HABdBhbGqrcu9LwfTP7nghBa5Aj5fgknP",
  "key35": "55NYBKn1SkvsjuChCgNkzGz9iKknuDkEVrmenznoj9cVCNyHpj64BWBdUSj2YYnHES52AXg6HZNE1hma3XJ7WW3C",
  "key36": "3iuiAVEXEz8SuBXV8TpcHbuE1ueodyPbd59rJdcbMmPUehxFXGioCHJb6SqLvdVgv8TVgmRUL5sr2UxHmiE457CZ",
  "key37": "YSGjy3T3Kn4Ph7vS9T4QS2X8X8Kp9t7pMCF9cRiHgSJFadVbKUwXjqVD2BobEYbXRYMQ4JxiHx5TUKput9sH4Y8",
  "key38": "62WfdjzBYnQbKNk5cnbnHu77Lg3X1xWNDpij7FsPPnCik8L8Kr4BWgEX9SkL8miYNYGazu1wqtmQsuzqQgoaLjNC",
  "key39": "2UFWztMGt5wgCZPz5RSRHWY5qc9yzjGP2gvwT2RjKpQRpFGUNUPJsuWujueKz7DQnztD2yatxVLTnFUhEr8AZ4tA",
  "key40": "GnMbVR2LFSZEapJtXX6fKXHtUMHV5HtN5QMYuFmc8x1wqHt2UKzdQ3g7JWhqUPAVVFTiCvKKZqYTPS7Y1znqzyA"
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
