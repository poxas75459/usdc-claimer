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
    "LELJiZfKhqrAmko1Qcwajbq2r7WgoWSLAvi8xgoprE4ZKapA1uq9c4RcmPJzAUD2XBDrfYTYuQj2AzqMN6KJHkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "351Ey84PBwzFUJppcwNNrhJrCNLFdAxR6ryEuoZbxJU4ERV8QsUqaDtdtgWzV8USc8aUCpG5AhBcR2GHh9D1x7Xg",
  "key1": "3RajKTKo36sAJdZKrZn5HQu2fjy3xbyxHbE74knpqeYWzdXwg2CuMNwxouGZjuS4PHQz8DqhkBWSE6TJEgL74ptz",
  "key2": "33jHdUcFQjToHcg2F4vca35zbKQ2Pu6QDGo5HEkZpvv4CsQtUaqtC5AFtqKa26k31ykWwMWoS11Bg4FyXtVK7us5",
  "key3": "23vmZpw5MwgdBr79ZBR4E42QKuKzuYH23pPivMWVaka1cdiktiKu1nqYwMoi9ycWP4xsgUuEpnH7zNE9hVTMphfr",
  "key4": "57Dd8f8QUZDSngHTDZbFwjkxcggQqUthRk1NaisZLLAZaKQyk13UPpFDb3fUGWRufM4uVnQDU2mJ2g2z5ExvVSBr",
  "key5": "4oeK53btALzSKV4WyUn7HNd5z2zW4DjfQJThQFNd76pqitia6WAryKfZUvnhZDbJ2NvTDp7TyFAPao8bk3E2JQEr",
  "key6": "4ri147czWRbSkJYi5dRMJsMF7eSW6dXaWdnJ245PoxxDgNzhjredTjgrS6YdVdQ9GSdzf3U2FzoEUNkHF9FiBzxT",
  "key7": "kHL62xg6MXzSSXriEWSVTDidQLYZ4vxskHiFYPgbkQq3P1XR4xFzXWfCdrUe5HHMiapbuam9YRogcatHzT12Vv1",
  "key8": "5hUF7da1ZwDF898wZPmQ7ngdon4UKWRZCQsYGmKCwkCYzv1knrGwdXVPxNgTomnphLhGqoGFbVcuN6ifexebtH4E",
  "key9": "fGQH7Bahz3y2aCR1tVhyU4d7fDWCKaswe4fauoL1etnA2WDEcVoL2ZEBUfFufuN5d2MEhSCAyjwjw9xQDWR9zsz",
  "key10": "FPQP8RuRkLYKSrkQQdrYhsSLd1R38pgo2X3pqi1cJhgTVJBNAVFXF9KFBdn1BqjpkdnEfEkFE1xH1Xd9k1mjJ18",
  "key11": "43QvmP1mmVbUb6dDo7ixDMAVPr7BENuUnbNrkdyRDUUhaP2mcU7or6kWue7tyEVjs4nHpZRRfrQ8vjgMNzA3SH6r",
  "key12": "5x16AuQGQpYxNQNFZ8xRPyav2YrGJ23s9n7zyd3m4Rb8jKx3DeGgEjFPpmVo3s4QL3BTD8PQ4gAF2xLYdrocqiA4",
  "key13": "5PoWC5nwsVJp247DJ5LsaDtAfaajVha6SMAcJUFXEUHENZZgVyjaEp6pFvE5gjvid3ZwLu3T1yA1Sx2SeD4sixP6",
  "key14": "3FBMfZMhSq2gceuGpHVtUrZTnvbscYT5SbVDTnuB2dRvgWfRzLXcdAqFVmKpVULfxB5ViVwApxBeFyG4UwJBpM9D",
  "key15": "FaM6uNGsi9eerJc7fgeH3KsgTFG62t3TKvkBuY7BoticUxRtUupxgWHYNencqMUnLB5vN1BR5Mj6DADae9HoR3R",
  "key16": "4H5eZ4UsketADHhcSMxeLQb48FcUQmYSkLQzZoyQKCwz2bWjBCi3szC3N8CsqM9VXS36G2FGhFJpaxs4jqbZ7a6c",
  "key17": "3jKciEBvE4WFwbafPTWCoUEV9bjZUHqifPwfEkki4nbCRb9W5WUgk32buS6C1Bo4awCdLi8GZaeALq5FqHKnRdTR",
  "key18": "txLvBFuHzDNgEqHHcBxuqqqKem49wRgVZcgHNCJbEpNbPiyoaAfanpvFAvPtLj3GDdHFv4M9GigcQrhhELXbcUk",
  "key19": "4oixTDrCKR29JbGzXJokmHWxf1jTZCUPoURY63rCQS8NhgGqUVzzysjVLmjXNY9CoGCqAYa2Dj92b2RmxWEdX6w5",
  "key20": "4PBvBtvrgW6ANCwtVNWcEHPQcBstTudr9s8vTC9CzDgUsEPYbUPEr9g9bWx4Lixd7xZjobusW7LSA7RutfeLgBWJ",
  "key21": "3mJ7eumRjxjkpsQDWGNzQhj2VwWLrXpGiqVB9vXEQWdQ725fHgkGQppSsH5ciMH8pRAxi4TC3yFZzu4dmByLaYYL",
  "key22": "2NmjA8L5BcvtuzkAPLeiKX61DKrZDQJ7akb54bxrf6Vtcxm4rL32AFFcsteSMrZ4gxYah3rfRhdPUZTYUM3kAe8v",
  "key23": "2KTvQzeQgLK4HFn2DXBjqrt85gfdSrRMwHNH4LnYL9FT4FYjSpGPUVCwE4sqFZ885YjcQnFDf1QKXoYsbRbEdz6y",
  "key24": "3o64DKhUHwcuf5LaSDLQxmc5geRBMcGzirdUy2HWNJT5AdBQVShNiX32vEC7c5BK7XyUi9hQ1ZXJuS9kFpQwNx8N",
  "key25": "5GdQR1zfNLiQhMDZs51WZ7VhgJzqSCcW7K7F8VZhPdgqpMtQi4HzucrSFGiygmTrjwTX7QrcdrXKPTwwzDBfkHhM",
  "key26": "2AshQpNoLWbhJtkFABiv5aua11nrBdXFWKCTNChCwCPT9HaDpyWj5xcLPZJyerLqP2zpiaLBJjD7voJkMdwB6Nis",
  "key27": "5vTmLFJXLfXS5eVPFVbZPse5PzrYJ6ntGjMhA8j3mjSNCEi83kgNH8HiQuJxUi7N5zUJcvUUK7BkmcTNXqcy6ogN",
  "key28": "3MN4iP89nkSS2VS4n88S6tfG8ionTbYjBAFrvD9mUvEgNvk8uCQz25rVUNZSRQnsTZH3nevv9Vr1P1majzB7KzFQ"
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
