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
    "3GeDvWgnP76LwduwR6U7zwoSXsto98AUXrQNBjY6qGC83KKiVjDkT1CqrudqbKFnm5WPHh35eX5z3NZb6evCjVye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67C7ZuEkbMvsquzoFGRAAkBLWetTWkFuA4LAiJAY6rQ7QShT3zNDFXCX5LPwMEvM8zsASVLgR1XT9ExNdctb7m6o",
  "key1": "4SfYHoxGZca2CyNJ1uB7kwQhGi9CQEJC7gUcwrhWJj2YqfWEy9qsMGuQzPpc3JJCzCjj3oeeoG43ead3eMtjQQDC",
  "key2": "3Kv2g3YeLqWanE3vHKYzbPrxuM9N6jQKjLPP8orjU5FKkuFNHDyvNz9yUtD8PQWCXHNEA3ceG1vbLiWkDSjANMFY",
  "key3": "zw38aPHH6WjrnJVm6Xqx2z46axBnLvoE9vuyqzBqvTF5PAAfUmEMxmTzELvCs2oFihEHFQQVWcyUhqusH6VhKqR",
  "key4": "Xyp1St2K9MtrmU4d8QDvUgCuWWScaoK8onj3BcM9CvmgyqXmG1fV9SwrP1YkkMUMxBQzttzcemSb7EgEzjJLyYT",
  "key5": "2AJCSfgBh6Z5ksd34qeC8gAATYxRBHJEYLJzMxmTaGmKHBxMvcRESEhXbdSPVpk65qVr5cFPZ14ihPnwXuXCxKrw",
  "key6": "3kmvZsNQCP4VfpmoyGZCyDV2Y1pXm3r4sxWMKjkcx6fZ2cNLcY7jHAGd77qsCfTu14XWnfbzTtBqP2Ekd3mK1yGn",
  "key7": "3gegj9p6RyD2639ge5fwD6K6CrXmZQ5613CrBpMdxWE6GEsdxWDZ2zCTaYdcwjADumDWq1QsF5MQpBfKrZx9C8jy",
  "key8": "53gcwE7LLThX6reEXfj33v4H75LLgKLdoJ4r8QkAgzzgsoH2UBZjWniLRjxH3n1fKRy3TQP7k7rLDoTJpww3SB2o",
  "key9": "4oTpJXRhX94CD7NpFkKtyudnEQs43WeQZiTvqZVGXZ26mdxGzAkxbWvyFxSGxQXHnkYJGh8AgGKidE8rdYnjjSCu",
  "key10": "JUTUZb6fQKTEmHNzEpUNibjfgvz3kJWzwSiHxHd7H6mn4sqmzmA2mYbLYWvxFdvwEFT7sXjHApgnkkmEXUTSbAw",
  "key11": "2adPp3zPRpW5pnov49CrU4NKsWFH57YkNmgDVcaW6r4sKTs42yfWWCNSbG3cpS7ccQBviAnxqPGjgRGDpdcSYdHg",
  "key12": "3F7AqcXxoHdtu1hTEA9bFCCKvpMJwNf6wD5tJKHgzFNBeaSYk9nRpdcm78w5fthWeFm2bijX7Dnzw6ZiU6QpgGLd",
  "key13": "23vWedw5goK14LVjjUNDGQvRYdKPxQydD9ijCx62jMPkZedQDKZA2e5YMCYHz6zkpVLGikegcXX12FzkvgrtqUrZ",
  "key14": "28Wmr7WtzT7Jcq4JBKqEJzkgu6EsNLj2aNkwagw7Eii8hsuSwSjzRqNtS5nKnsM6Hocqojic3cnDMtfzpYrLeo2N",
  "key15": "Xhg5LXk1FZoBowpqUeFAPXMd6kg4r8Lk9wqCMcXPxdrGnm22qQfyMoqaJsBskNuYXteucLorrDePo6jrYGJAzoD",
  "key16": "5YPTTc4HEYyLcuUCvA1Mue3NEEoRmxz1aor6oWd8RyFdk9rVRzcSqjEjMDZDdV69PKTqTpz8CysmbwFMYHqx74qC",
  "key17": "4iEdzfN8Zh4mPzxAvJMK55yMWVEvYuxeAP41LApY6jqgbKTYqzFESiFk2N49seVmb3NwADhNZitfwV8RV1nKY1MW",
  "key18": "5krn3LZsWwzq3WcopdRvjQGu8KAXSQ2h6w9tqCVhoU95EhkpneyLXVu5NhHbUQQG6Y1p9o4m1eDg5AhvkMsoMKYS",
  "key19": "2soiGqWFV6bKBNH8z2F4GyRMhEWHtKm6fMnU4fYvZ4PMYqBFCDX591WQq3bgiiLsLSxXkQzp1r59VfZFTH7TMJj9",
  "key20": "2QzEA2B2UbLCxB6nYCXiDvBcFDAjNQZPwzY35Y49YEiWrBBN5ThiV5eysB8VN7NmjuvQpT3aKKjnom92RFFK6GX",
  "key21": "XmyyUMHCE6NK22a4pVA8GLkJqQyk3e4mbqv2sD2yhFDa32nWYNqg3womZAjt7M6gV4jijNX9gWgyCmgYSzjHEpT",
  "key22": "4UnmeeKJnEU9PAwGHoMFMQ3ZfVbiEU2kZUnfBeoYEBZNEMwANLrSoHwkyDJtojNSu3a1AwbAuVvAZYTutn91n4NM",
  "key23": "LCuLRwSYcnKwcp8soMGhxzQpEqSodjKGcS6ZURbbTQjNcNa3ZYVDy2cEBkre33HTXaeyNjMV9YxGbta6VFFxYAT",
  "key24": "5kSrbDmdNQhexSzekvA7vxphKYgVKuXsYq48PGteYoej66A2kz7qd8DT7at8cjH399zpsbtDDvpYvnt5Y6T58a5X",
  "key25": "2SbpikPSLa8HCPw9bTJWWoVMycUWbXS4qS3kpcpguRqhGQ3zUbxNpxrXgv6VM1XtGJrF8dSkHkBB2BvgbBKaQhnd",
  "key26": "62mzyfMUKAdTRa4vRMf6oxFvEgvzMoANHCtvhWCKEh564simuq1Tf3s4KwV14mBdnpqJyUdJUo3hUEoX6tq7T5Nd",
  "key27": "R85sLEn8bmGcrawNuNLL6socvX9HXmb2iN3thvFvrPSwrP9gABbUUBLg9iAQPgaFQBVFxDgPz9v1dN7fFEq91Gz",
  "key28": "3HZUowSJn7HT8niLXJBrX8kh4gHj7Miw7qA4z9sTaj9cpbEkvjpJmQgUUd3VM3vwj4qp7hhxRwVyhXjX4f1FBBPV"
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
