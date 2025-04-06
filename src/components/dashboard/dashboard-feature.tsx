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
    "4eTdB5Zz2wMs7SL4UuLkFdgZxbTctqBjeGFmhcxYCSfPBQdeQSX4Q9aryZ8wpJzS3uEBujnZR395J6s5tEzsTef6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ap5zUVrWrrkypuS91VLWxqLLpwAF8nwD87UBZHi3zxW955mpaAqW4yw7N7LEMCabKR2k5PxsqxUZAHKUHdumNqm",
  "key1": "3K2Swgao8A2dWU5hT7QYwK31PbPhJbTgakta6iVgmfaNj2TqTv7X5AiFCWaQo32WazSswtSwJtyCLcpdzowzywiN",
  "key2": "4WAw69H3durPAY5ToZiK6B6NCX2SAYZbiU52SGJjiKK56tjmbnoThyeYQEZczuzQ8u5i27eYgtGkg1RL2oE4NZ5z",
  "key3": "3CSoKLSMo3DrG5kYWyEbvNhvdcDLxieYaiDoLj2edbmExjjpbSapTuDaKYDSJ9nEChzcAggfPNXWccctXqcspYe6",
  "key4": "2dzSEKA7acgW8a4RHCVEJqXgJna4otLndDpFiFR6BDZDapysczhuTp151xNz6fmNXUtcLeMHZfnnbhS5vhZ3aGTm",
  "key5": "3DM8LWKvkkifxdQUAx6Aw6C7bHw4MirgvzYoiVTCeT11V9hP6x5tGCVkTAgkuVPtgzyE9Zdhpjo81P6Cf9wrRFC1",
  "key6": "47ktSco9kBXcPwPZcD6jTWXgb5nwm7GheVm4FuYXbdB4V8QTEVVcbJNtBnNeAvYis8LhSWtxekdbZAr8SiSXqR25",
  "key7": "5kTtx84ZcqNH2PjfvWVvHivW8ZLJUrQ4gNmEVVg4jb2Pb6gzNnQFTaoCcsXB5S6nZgu9rYmbzEW43krsWvNYGXxE",
  "key8": "4HLj37673nqDabeFdE4jpx29SvmdFFpVoDfxrA7dizeXkiVJdpKEps8LiCtSf5FyAQkXrJA5UyDWb4CUVWBwCETH",
  "key9": "2EMcDXa5ozvaToTqYVZ3gaxgKK4tToiwq4suxXT5UQMv1NXcKhXeefyt75xJtERRA9VT8y7NFrS5qB5kv5hs6EDX",
  "key10": "HdKgUNB87V7YSZKSe4xxJDpzj3j5Pt4PF4B3EDFGis15Pi5mAj8CXc1jC4g7EupWvKNoJEr4JpQwfTzJurknhvs",
  "key11": "2orG39csmPR568ruRacMvJUqeFxVr65Df4GUa7EVAhqxw5Nu9opxD2GU68sWh4vZLQaoGxB2GsAKDS6JmoxZNMrN",
  "key12": "46qrWYfm7rBvUrYdJSNvyoNGaYRo2HGLyygWHBM3rTizCTBartD2qqHdzXQahHjqknth5Emw5ydNATkXCoWfZDMb",
  "key13": "2pjp4qvJx8pzn4gDCDY7fhN8jX3vD8mFVGzr2BP8r1X4dAxDiN1mkRFADFh4t1hVnQDDnWLb2EXtq8WkWMaMCRnd",
  "key14": "2dRQ5z56oqgLMMtoqtFeRttmRBimrhbKAPErrSBA6Xh7gzsLsjtvfZViAZHdYN7hXkgVsZy2Zx3pAbP4bZobGegy",
  "key15": "3uGC76o7ZTGMBY89cKaDFBmSnJ22iuBZAmWJUfrooGzvyBfeifexEbGeLCkPMBjy9TR4wRYq4gQc12xj9xsWh6g2",
  "key16": "3y3Mbi9uGDWVBZ3sxJBgUV8dkouqSEefQaQo5mx7gUtM5gGqerPRifAxwqqxrGxFYVUvtht725qWYUWegpfXwAaB",
  "key17": "5pEDGU8xKy8Mvx4RG5cfopeKSHAdN7Y4M9A6bLnyCzsv7TJnHjmUgwPXy29mBPbAoj34t8LvLuunbJkyWhhmq9Sh",
  "key18": "4Uy622r9j9XXfnUaAZgfSytzPCkuDND2SMzBhrr8oknECLNdWErYsqiymrtNzw9DizCPhSUuCfjuvF1m2Pai6j8n",
  "key19": "2s6GJEgcypNgL9fjnG7jWHLLqbHen8UTMPRhCRk49Y5dVCcZhvWhpzhdKN9S5vC2SJWNe7fMfdMyLJrxmEsfTRko",
  "key20": "66mQ8NYjLdR5UhnJE2GzvK73DrnYpi9GWwLT3gdC6BZuqymaqmsXXWYLEPak6Toz2wUqoBVQLR8Eu6Trt6rq4RWK",
  "key21": "kW7sSeck61jTefSBjd4RvHQFuyoeBZUCes8WG3MmkDnxvDDtrRthWcjNgAjcvgoYqhtvkHn4AhhB3eH2HmsVxwK",
  "key22": "oUgrvVEbjxmktLytLbs1AscH7FZuxhZYDNu9YF5ceZrLvGtzQx85YxPHHTAZZQXMLmpg4HA22DVtH1b6WP997FT",
  "key23": "4MPmx9SJo52WkncByzWkYL2GdQu4M6i7Exi8grg2roE31nm4ZRD9xyADssuGEf8j8wqhBNWhvnTYYqrTjEvS5XUa",
  "key24": "tRCSQHjDtnAke2WXJbYDUbKfbfRcfS9JwbiPqUNgQRh6xnZaGgNMT4Yh1jgt1GnHwTX8wLwe4jT36TnVeRnRpWq",
  "key25": "4i9B2TBYMMJSxoMJdQg1JypMqenVWqV5zZ5JgeoKxPkHSMi5nStGjUDKwX4JLDDVkPzc3m4pbgbr6V9ntusMGZ1D",
  "key26": "2H7xzVrxS46XCJo88q9xR2gaavAQBq2PdLFYvTP1pHeLKDC6zpNNqGpQWncZjfge51NqyBGM9XLcyuCx3Z2VCECW",
  "key27": "3AE2Hp4vvjSPpvZCN3ZAPpBGPLuvKkxHbCFvZ7k2N3GNa6rKt9Ny7ZnU844BFWMoPiHuX6Jt7K46akzgwc2XMMzf",
  "key28": "5ai1wM9nGE98dE4YqoG34oFHmfwGoey3oUUsXBa5jJbQSwZFqTUjBRzUDuTSPRHJrDPbUMEukh3GqrnK2zbe12xA",
  "key29": "49aQ8cW2vsporY12J7yqQDncKwnyWyckcnnsoSUTENNwnMSSefc3nvncCo15qcrQnwygxFn7tXzJBCecLzDodR2m",
  "key30": "5MvibqkMs9NBRHycqJNNeAB7hwvkY7yQQw1eYUw3nNDok68zqZv4LRcMXjipG9HFUB8JjstAW2kpEeQGoGyBdGUL",
  "key31": "2WATyVPQ5jMFQj9Rirg9DtkFyzuKSyrdA7UxFLfcGRVmgweU9uAzGLe8g8iJy7HGhC3z5mJ3Ps5z1aMYNDHvBRe3",
  "key32": "3EaVigoAcSuDQ5TwrKTCxWAKuR7cR25AkwQqHPHQNyow7WWxHsUXHTvFQe1D88gt1bpQsxDwbbidTebR6gTS9RPh",
  "key33": "165KDr1o5LrJdXQ9SQSksQML3BWAi7mcs2vTEd8tngVWcsKFZYpuDY6A5dcD8G5mbMsHYPuKHrzi3QKvrRnGi6U",
  "key34": "QyMrRAFVWUa2UCW2Q4bPWAgmvsiBAVZuQxGM64M9J5uTi3LWEzgmY6gTz72zEnrW1TTgsZkeGH4KDpminosAfQF"
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
