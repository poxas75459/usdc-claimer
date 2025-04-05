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
    "295RXPn56o6eu366BDwdcnZ9YY2bkv95oKWqwu65B6Z2pNqdFPx7y3a4K7suhs6ZRWdRENAcWhofsjpvXScm8Xvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XiNUAbofH985Y9LKmaUJr2PqsnVj8VpLKAWMpXQFsUyreJhNW2QgPyGadF2PpLbPMNq4GniLspfaRAKCCcH5KsX",
  "key1": "GnuSTFX38oQGsPrP76UCigHq7KasWbLsasAbKHt2QZUeTnGn9Vyk96DBAmN8CB6rKAJqRhXgza79jgEGnxi3sGu",
  "key2": "3a5GRyar15cAzfsnXYcibFGDKFDVZk4avSo1dToZzuixcVMv3uszHMs8Jf2wcobcp76ehZnq987cWsv583TvNQFp",
  "key3": "4KbgKurLTfsk9K3KYNcTEoEEcHcjf2huHWMQtnJtDGaavjKbXqyZSktrquQcgPuu5muC1yAHsTqNZgBDJWNcoi5g",
  "key4": "4L4jLqudJ8aH7ceoZasa3naBdsdHUZm4LT2ZHNE9U358WwxaMK5frUZGT715PTeaKuwSz3HrjELzJTycHMxskrow",
  "key5": "5BMRGUmBWhk2YLHcrs87YPaT3zmFYi8FuJjWScKjD3X1EvF89LgdyYzM13rBvm4F2UxwHtpVSpk1DW9yzzoa2N1t",
  "key6": "5ekV8a3RS1znMu7UmAdqYCGSCsXEnQwQvX1uHA4DircxprwEBF9r8zFXym1b5Es1rWoxs5qFiB8uPkzw8J3k9VAa",
  "key7": "xwrKJDeWScyhWCycQ73nQFnzQahQviGRMFp3MZm6AJF95siA6S92vh3Y52VikMpPCM431JNNtnybkkTGkZeLMMT",
  "key8": "42wn9o8TY7FJsnm9rVQUyGZKmuDNhCtXr9hEVBfFM9iFLYCcCVTmnSRqSHhsPmm15BBf19e3yjEpNfZQ3RGbutTX",
  "key9": "3JbUNeyqnqAwbYMsetgrwYcTfGdSBEDs8wQE7QzTqDR5kyWLVwHnzoEhZksjyZS3JQi2rJ2vrmMpiL5HjQvSNPc2",
  "key10": "caPAqVngYwiuffZhmBr5V3iUYxiysgHNRW8jTiyk5UxdZuASPo6Vs5PZDbRVLSpyjkTVFEF1YAPvjRfojuU4WPH",
  "key11": "35UnhZbzDahoi3os6tnmkdvaYMfXoAhkdaWkKoSPZNEWv5wLQp4PNiCotnzVtvAbwWNWGxQAWnFBcJpzrgN5ySZC",
  "key12": "hfGM6ZWSr2DpxDQhQqr4DHsruDjhcHnFFoGwR3fFJM1XCNNjRBCDGYPJU6NtYKVNdSmoFLzkUnn1oHBKg6bgzCn",
  "key13": "3YBkMgZFQX8wz2Cu37DgGpM1xooQptcruGRS8Y1AzFhMAhCvonYZ8FEuPNnqtomTUzatSgr9s2ZPfJu2bxbCsPPQ",
  "key14": "3Y7eVDbxrtt3eP8vMTqPU6p3FTPUsCFVQB74SxogVpM2N5fi5rJrUPXUmvSVnZLdVJBg7vdcmMEErn1g3SKEViMm",
  "key15": "2j9XqG6LTSQPTSpxmFnkDYVdvBiZSGC6NCBwAMybWtuxcuUaTa7phxeCHFoeJNivnWYXyBBJg6YJF4CyY4q8gy9c",
  "key16": "21bW3VWLp8CXd81kKGjLvyzAvXRGHW26Yzsh4rUz5de5ZN1s4ZkL9S7UNsJNm6ggrJnfj7zxfZD85fHd1RpooCPP",
  "key17": "2nmGLZJ4X7nBJrSKwkLHrr5giCiL37QmZb7ihgWX9WtNg9YXtJ6Yd166UixQ64wachyPvJavgHTTLjZGb6Wd39oV",
  "key18": "2qichSSsSd5xjd6HTMktrg41hSS2orAMHHaGnVCMY7Q9kP7pFncXS7prHoAn4Vkzpbx42WDqEN72XYREyKrnwBdE",
  "key19": "3TAvMgz9coPSHwGiwfTYY83ag4JjucW7Sajbgr96NGaoPbGW67jRyfUs8kVJfi7rtP5e2X3ZVDuXhyVWbsUFLqcn",
  "key20": "3z3sAb11La73v5NDK3YVDsMBpA2dAKvRzViyzKDX9f3ror5MrYVU4q3nZHwkyp42qR12DijvgxvVrRwJjL3it3J3",
  "key21": "5BV2UYMaRTRngYWV82fsLXkZkw8WTJ51ruH4bdD7LGEssAEKz7AzD1VDu6oefr7jEU55bexn1bz35b4koNiPaign",
  "key22": "RJmYmnsjPxTkaJNhxhE72SQwuMw9xKCF4ctfz3entu9n5R7hddYWmiiDZFmdR3pjhNuzYsfebNfkCSYMHJKPSBu",
  "key23": "yK5kLdpNuc8W14WgBFbxnNypLrscLGJnJbQVH3KpwfvKCj5ioLmi7djfZVmUReJaLGHqVb4c4hhAanVHq8tWFya",
  "key24": "2qpNv198LSPNvtAgUCz8iDpBKKuodauipefEYv3C9qQBB3ERRRo88XfiAAXvg8Q3pioK8EGhsTd6W7XRGvt4vmqR",
  "key25": "4Y5giH6VsR8twmrtj579SWfmf1NiGbVdtJAT38HyusydbrrYKovZbKiqL5tzKRNdiVN378VCumNQSTaUEqLLzh6d",
  "key26": "2f1DVfMbAs4ZRTMWZ6QfJpztXggzkaBizZ6YpJ1KzQZY67BujtgQncrZR2RRNbG7qk8TCGjCNd9BQTPHo22uWDE9",
  "key27": "NTAubBctwMskEbFqWTNk8ozoaHRtD7N2RUc1uhVJe6vY5ByVpZkq3rKp9ebVRi7bUNmm5iWgupEwUoEzeEErAuu",
  "key28": "LjfMUi2wZ5hCJNt1GQHoVtMLVsHDMDzHJKqEcvJfFhuwdC3YFvvdzuSXzVJXfExpW8mMEmxCfqZTWevFTqVbf49",
  "key29": "JwSM5jqnoB1nLekFy9yer5PvFkMGGm5fiiuJdKbz8GeYqRc8AXnBp3nvX7Y7eqFC4Fr1evr8hEt3CqYT6YM7d4q",
  "key30": "45hiLV7TaH2KVNqDocW5YYYh91H7rhc8FoojAedfMhZnVDZgGuYZMUJy12PGEYcUW5UZWaZCezYrgEKC2p91fqSb",
  "key31": "4SGLhzgrKtapv3ZBxsY6TyzKduECiGUKZJ38tG4w6Vytf7rCXxPyqhXFoc3MwmwTxkdTecwNCsvsU1spG6RPuZh4",
  "key32": "EYU7o2DTdmnTVT4j53DHuDwZCGnBjuxiRrErjPd23fHxeddP6QsyPBRLS9tPXePsKkRon5x6fBVe3cuzVHXkskN",
  "key33": "3zx6d828jCERJ7HYqVXo2EFtUrDznKvRU84vnyrf9wPbzmFD6cGazFzLdfPGG6J3wL61ujYKvnjKKUA54kq25Yms"
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
