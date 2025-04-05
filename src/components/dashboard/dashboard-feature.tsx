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
    "35jkCvoW8iaK4v8XJ1E8qsVqWw41FwpHk3H22jBJxhj5PNPYktjWNLBQaoYqTBXCpGuA2Pd238KSuoqCTXr5T9Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RU4WnuCtXeDcF2vsT5BTPeJyKH628Ka8rmJWdAvuJe2RrA7b3sKRbEYPauNq4nXQicseHxoCtMPcQ8yALbUqVd8",
  "key1": "38naW3KCVGFzaWh6jVJvsmYsG4WvjDwGQSZ4BcQWJCQeHjcSPmt1tq1N9pFLfjxNziLzbJUYNs4z2DvNv2f6sqNi",
  "key2": "2Kwgj4snyYUSa29xxkc4fFqTrx2TtDZCyj1CUqC7DUDyx8oamMZVDdKhKXe3T8Ppnv79jorPtx9MD6QVqqpanmpk",
  "key3": "4axPhGHHJMpsBZHT3CJ38UtUhhJN9wcfgc811LNq5e9Q6Zpb9cZXVmnGx7jn1qbiuzsWTKLYY7XqWySty733YBwz",
  "key4": "4TWM5j3w8KwF7ZiQitxvF5NfPuEWaACsXoXER1S3ZJRS5uZbQyajeVCa6vU6bsEUtJzNEyvrJijgGG2k19J6fpmy",
  "key5": "3apNG1UJAiSbbs7BRWn5gy7aMgY7Fi3xHxpzGJiiQnm3YMmFdQf2aVD16zKBU5pWwqrzQbwLhF3MBqCH9Fc8Ujb",
  "key6": "UvWvZiQY9Fti9msKMMq1KFTTd9nNDUCSNQGNnj1wkvhkZVzB1L9CmXroqtt3fCbpCdZrXiXsszJXgytjRBRo9AH",
  "key7": "4EwAQevpdCWcXwmLQw6zv1prZKZ5opbVPwZkH3NgZPQkSDnRLL4FKarTRauoZGcDWgy7yJEdnp6sfucVzz3zi1x7",
  "key8": "5iyBqWRewwjedLu1oRcYGcQ4v2724WHVaRaezfGTfYHMDqrt12aSYMepv8MaXgwwoWT2VouYicX9G5W163pjRk5K",
  "key9": "2W6RUnVadfJ6kfrbiTAsu2b1AL2ZQ1AVq36E7HPmXcFKvZqvoApq1Kk9ckcgdGsqRtt7aW5MMy6KXSnx1YosAR6Q",
  "key10": "uhLLx86f2GBfM7PBoECgQggdp1oecPR4jY9HMx34sHthPEZ8JyD1wBkVcfQEKgRPtcKnBRQPHzG4LwKK4BUu4Pp",
  "key11": "2RZa69DRQU35F3nQsMKcpViYDLBUPQ9oHXb23i9k19qbURU9tyPP1zHCzUjKV1W6rfewSnyhemYmYbwmjvpNkshJ",
  "key12": "5rSQFEje4hecPJM6DZCZwc85cph2f1LngpYtM5vCfVcb44rHvqznZTBCU3DYJrkgsJvZ4xDpX8R4kPaWieFh94kg",
  "key13": "3vkFX64yzU9GjocDyg6BfZCCeFy2GGRrTxKa2mZjXPt5V7eL7zCzNCyqc96RdTL4SGoi7kdVtsLsudNwxbN166pF",
  "key14": "yBjLn8A8BqXinFDrdaVywnd55sJBouSHDrsw73NcfphaCEKEaU4hug1r5hwtnocNueduytuSvouTs1eYjEMztcd",
  "key15": "3mb9mfD2HiofuBAUPDgUEkNEMUPZZ2M7WoyA2wcbqaxSwHJWzfdcoXbmA45hm5JgUiM17jRM3Ajw1xeLcxLSHSWV",
  "key16": "kwPRukqf2KFwoCxuMuCLvbpYk5nn1HupiH1b9xmEc3XjgkkVqJcp2kK6JPBE55SiZn4FNfnyzdbnyZJzLMQjp6w",
  "key17": "PRbNf2pTaxasttnYozZCTKN3HMX7WDTADiqyMwTh1dBWxzL6pKkAQV9xaQNkMEHbQrTyfEecmMz988M6K1kMS69",
  "key18": "28vBs9qcpVKG1uhBvfBoGg9SXBVMwrtJgRyADnMiwgjT4MkhKDh5HnbDDJwHYiZsXQEp3S5b4inGxr5sywD7yRb3",
  "key19": "Mr3khE8MVF7BxBnAUXNUFBMfDDsXeDQDFpwSuuinyPWfxJ6vfPsPLRJshz3jLo2kpm6Yvie9CtTnBvbVUYZ2dKt",
  "key20": "2DRR577vTPaseK3cxsVWpaE5sYfUv1Yt4CX4sh2YpBbxZ7oEcd6hjBVDoxRNhtGXkBXCvN1MDn4DLdP3LCVfkB96",
  "key21": "otHurEDexpifKS9Hatpcp2Ufx1KArMKJVKdproY3yhWR6CSCoNYqZz3tCdkwvsjqqDzJnNMyoiHaAG3wJ3Pugsf",
  "key22": "4Jie7A1v2EAHSwXFa6enSw7xBd7T2MqP7QBVjFEoQUY1UvW9PFAGsMrqFVgTLWMt3mhK4tabjesCSToKhxDmgWcS",
  "key23": "53Em4kFT6N2WrtLXRJR2CC9o2xGDPQ2uaMEHWZ2b95HAbeUWrjxAk5AzxbbJ5H2DaNEVNPuWheebU6erXopWNo2b",
  "key24": "5zTJnFqv43g9eg1uct3e6Cnc8Tg8amMayvMBM2SaBQ3eYnk33hYtgPoxJPpPdB2udGJSvJ25BcKzJe3zeEnp1wdM",
  "key25": "KNVVGNg1ZiCSNX8VnFf6ZbP3gfHeGcjXYF1QwgG2oYdK2QFs6JjnUYUjR21LaCzd2HB4KYKtMa8HrBNnm6QnofP",
  "key26": "2VdNayCgb55oXZCxsy4WSrdQc1WakLe2jioQ2PJE2WboYoQvPvNyfvzgt7xckHUidKQxYah5Z6635EFmAX5HUqmH",
  "key27": "3Cn9itjoPKMn4mQ7hhM719Q1VsHSqLqczW53DUH6Lp87WzQbTrfMyQxER6nokCXvowSdYP62XjkMQMTnwcPnfVoE",
  "key28": "5WFJLP6E3zFVHfT5uZuH95Ge1HYVWvTh6menxHSopbRRjFe9C4S3CEQ55nsFK8U8CSKDpers3SLDnj6kAH2ZXVPx",
  "key29": "5cqLDbjL3m8kKR8oaPjyuEgcwEn74JLUezyZNGHdSHav6CuAWYv8evKdXrtMep64SMfUuV1WV6k3zMXGoPD5zyRL",
  "key30": "5KPuP8DcguHsbFrhfpJNhD1rtfCdfax8TJcDd6S3CXEZSiLUu9DNeFQPpx3J8iuDsFywsAHymGnKs3wYF87mC8tg",
  "key31": "2THa2geUiAyQqsh1juXg7ZD2XD1dTP8zSiMr5MbWJ14BPR5LeVisoktD7vQ5r6xF7fwus2cjT7KbNMvYDzsoHfCY",
  "key32": "44CSqdLBpftKoUbqnDdNpvmJYMjNFxvoLRu1G8LLK642GdnmXrUQcNMio3z3YYFX67JBuwU54eNPHx8AcLypmME4",
  "key33": "2q5h2DxBcoke5ZHqh4yyHs7rL6dkKw7W3ppcFEbupzcshT6vV1eQepPbpGkMSwE2iDpnCoTP16rioG4BafTE9n4B",
  "key34": "Xnc9GfYVVKfkdY2UCKsrQbno4Eo6eqMvqpgx6jJUTi1Uvn3PfAqNCBd53QtGg9w373RPanh73CSqLwZ12eUREfP",
  "key35": "5FyMKa2o9i7ob6z7uU7SUDvPcXX5G8VH51JHjibcXXcsRx1x4YmmHftmA7igysXGnDbXw6oqcZk4XsyW7iW4w4MG",
  "key36": "3rC8tSJ3c7g6VaZVeq38UyPizbhCwqv165YigUHYAX9YK3N31GoWdCCDn4AiWTEAtqawCVrem8DSWrsKwQi3HYH8",
  "key37": "5rQgGCBdb1RbydYScwWPf9VBMpotXrtVwZaLd36zShbBbT4wCWL8qHwnAseHkJGiPgHsNs85oQbcbXBmENdpCVP9",
  "key38": "5kJAR9akyNdD87BArsFJ3znkxnvSrgwvk194ayCiDChFuj5ov1uqEByuduCgPYPeD5xN8jg8PgbYmkCH3fKnixzB",
  "key39": "4TE5trcLEyJMRmHT8r1D7PwmUbwquqiEf7KzxUAAxVkYNZWoyxpXwXsUU9sF2Uk5H6M9WKnZ5M7sW6Kndpp95pSa",
  "key40": "397aTKuGjFBubN4o9ZQEZHWjNYkvh56KhWhTS2cdbk4wG1smN5LDJU8yC616JWQAuda6ieJjW4BDguE8u3oP3Tq",
  "key41": "3bSxASiUy71rEzonCAYL7Nb6XDbk2hc819NshqAWzbpVtszj4aUxkY8fSwdHEYCSesdGwwTBeQFHjAyGY85ZQE8K",
  "key42": "5osp62r3TNRfXaRBXzJ8aMCdbTt4yW3xMqtDkR6oW7ueFBF5PgPvBDCUnkGJNt8Yd6VNLUApthtXaUMYhw6ZRM3i",
  "key43": "5Jxhb4HyBpqPRA35xsQg1g2nRcrcvMhvpTe8pNjPwzbuSVwDmwg1ozkGK7oRXUc7HHj7KYoNbqAUhasjLNxweQ4y",
  "key44": "2WjbWwvqHck7QdCUDcaC6egUSQX5gMz6pJ36hauqMxVM6G3A8EayyHDhupy44wuDnpw7yfQ3q8ksGkLowLrNqE4V",
  "key45": "5BMvdAxjqSDYkNerWqpzThY42WXnHv1WnRgBPHpYaygtJyzmtdJk7EY9shpA1MQRxQthXo25KP9sFFG2x9pRR7Rs",
  "key46": "2MfrBXZY5cBbYpug5LungLdyUPTsJQUFJGfR5SiSKrDDk6YNC2hBnJdeGB97GgRekCcfywgv1ssk281d17dcHebB"
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
