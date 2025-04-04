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
    "2sckCT9vuDgnzqQYKXaRny7NiabVCuhcDqBfiPQuYF1Zy4c2avfeDeJTpXmT3BVYQbVnXAvoyaxG6e6fb8whUvim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHhN95zb4k18RVFCaVcAEfvnCguCETUAb8ChNFLnik3AS87nmpui51XLhPCqbUpDMcrmXzyBieXcypbzsvHHe5K",
  "key1": "3m4RE3v5eWeF7ekzWGAj5pY5GDDAoRxBNPWpAt4cGCfZWmDiZcGea3E65s2XsArSgZyHmcwpYyCLnXxw4hFJsEWu",
  "key2": "4bi7c3ULTqLTETmxeZzXpmF6QRptuDXsZCVo5jUjkRyqPAJmouKQwdqjqHrHZSkgEH8U91qorheBYU3jzqdnBYgK",
  "key3": "4D2yHYFqitsLCRRiE8MmBKyPm3jCGRnDK4K6qGJHuw4379bFBFaPTCpz26AznCqNDmXFPqFXFehvKQaRAQdqK6u3",
  "key4": "4VxRjz24aTBsfyQnVVHVHbSwoRU3VEmx6APVdQaPimhg3e3QCJwqkpkdXuLwrmgQTtkWGDsyK4avXCsE2tgmHFxF",
  "key5": "Yed2w2HM7PXeVoU97jeagahris4GKwskEKPM5bvMU6Fv8g6xTTU2vMTnQCgqhug1WUTvYQAA1B7EQA13GGwyTP2",
  "key6": "4JeKNh3wpYpxo4iW8G5LUkcSdoJwJYTAKzPiuqjoK3VRmsLLxbUo6k1e7CPRgfwTqYbfHaLSjaXuPrh7cN99neb7",
  "key7": "3ek7jP9BsSMkczrefQUKxxJXQbdUXsuCqdqtiLYqgqmaWMHYuBYtap81abniLYL12N5oV65nfr8Ma8ebDXP8Tw4t",
  "key8": "4egXGpMjkyARivdkxfZzec2DMgM4QyU56YE8ysXjLbYu7mfKqrARndNAZpxg8dLuq2b5VfK1eeam8QiucUyqzmHG",
  "key9": "4DCtdJdgowetrDU5aP8fT8HtCLnySa7uTwZ23SL7SSn6ze3ttL1w5gAtQphdkgnWogqUgkcVrcALd1TJPJp77hXW",
  "key10": "XSAeTotvdKPvbPUd7jcJqY7LzoUm3zZwegQTeGe3iCA2ZokgxDiVxYWGhnT19Awf9Egcg1bUNAPS25rMXfpBbWq",
  "key11": "3thwjrHDjndGL7UF5HKC3C8QDo9NMqTauWUFHLwYRukKJZGC8JtLfkNNJD9Kojt8ZA3ATvzoQTjJjcCmsKgxKBAv",
  "key12": "4ntrDKVJEjLQXvcVsVVmbAKEQGcf6dmgxruhL7BHpd2evt4ic8Ythps6XrUtkrgRH7LgFWzpJwyp8VJZZCVPHcWY",
  "key13": "2JTKtyFQBAhuS2kbF1dvSrJ16fooRYoYYcjh7xmd4EPShu3Qp5dDJ93ey4DDsU18eJ5S2mZzjTuNbnR537SrFerW",
  "key14": "4XptcLNQa2BrAHoXTyHen59WsBbSR6WpbdJCat89ATkT42EaCs34VGGwDCDay81UmaH6o18c1pCo4S4kaHJEcTsR",
  "key15": "5XnmknfWoXNqRL7XUBfXYEKYJRh6Lg1v1q6N7mPTzWMpDHcR7wc2HbnyLZuz6W5RUYmTvrdRxYq1UwhfgTVJjKmR",
  "key16": "4FmXXEYCHQajNzsh4hv2i3brQS8rEeNDM5XEpxw83YXN5G9PT6RZYvphUkSngKdR5qKYcxEqheYvxaxsT9ciA9CZ",
  "key17": "37p3BiwjtGthkLNyn4FN5yiVCMVwB8UErTCkgLFep3X878sD4QD62rFsErXzDS1rmSW51nWwTvysb9KojnTDVKcK",
  "key18": "3bN4m3jw5HgF8CPxhhMG3VBtcHfBxzB7cudPaRCrZ8pmz1oEVcs16U12X8xPqre8iwAc1uwFvuja1eGf4cxLFFW5",
  "key19": "5ZtX8HiRWn6fVWgYhnxf9xMXCKg2VaXufYHFFqgdRBN7PNtHMJ9zZq27MWrAzdHzvkb3WzZSCpTzwybUYCNQ9acb",
  "key20": "4xwAWBhFh2wM3v3i51ftMEcq6kGXVPd8aTdYkC8Adug8iF32okSfmEw6GifnsUGChtDaXrdgb3ADC9uD6HMYo8cv",
  "key21": "jfdaHKFespKcBM3CQFKzfW2CzfyZGgApBwXbjzZnXH7PATLj1YGhQKuzXbBFriPKXvJ1fUmHkKeqspB6VWNYkZi",
  "key22": "5rYq6oto3YZr6NWpMraUrYGRcEfaQdB7bPkh79XPLr4wurfkirjtJTPXh5GwS4Dn1W2kXLfxBwGb77Q63KquSrqh",
  "key23": "4Vjy4Y2SD2ZL35EcwxP2ShgpLMjAw1PR3E5gxiCimuhHyp4ZBHR7YZ4AvpoKXtnGdE4jrsL2ZPFt5SBJyBioeGgX",
  "key24": "4UK1PNa3J6wprqTr4dZXGLjcwQ7EjcQQzDFGuajfw8f3E4egkMNNLPA7UVRSZEnicYKzPKmyH1sm5CsmWbQ2F9BQ",
  "key25": "5J8fEoPMKDzHikhZ552w72PzcMDqnXQEqDgQmAPR3aPMGrzJDiAhrb7mfYkujgWLVRArX9ZkYGt5GQaZt95wk9Ru",
  "key26": "5apPo4NG523aJKsidMWiFQtzmru1w1XuSXHJPG7Z5NWZk6A68VcAFr5uvzxM29pHNbz8Vy9jB6JnBKwj7zPkqSbF",
  "key27": "21jz6GVetXaE3mUvYqRCp27jjP9FUixvJc7oosBZH9pFnsoKJWKRk21egqMVh15g3ANiuNdgZo6Dzge9diAYBwjQ",
  "key28": "3j8JbREWxKjuyeVVrPhfTcvKcqKSkwKPZCPzsd1wJ1AMEL8quHY3R1pBYyTbeXcZdzBrpJTUkZtVbdXyJH3skTdn",
  "key29": "3owBtfu83CE6U4JADomtk5EL336crDrqy4g4UT7deD4qGFzkpK41d9LsQ8h18ApFj6rcvUT24S1pSLKABsENQEvf",
  "key30": "4i9nUFMbCbJKnmpjCSvVxhskQ7F1kee4n9wSSw72xyxwjzYGAWDEi5JGWpctrenZAjQGGJwzsdAXGnU6xXRR8Rii",
  "key31": "5DmxzhSYfh38QA5yS33unN1ydP8e3NgX81CuGuDqAoQjpckhsJHqLHRjYta32CwaGau5vyNbKnLNnJWGaUqyMZBc",
  "key32": "3FQpaXsfUgxyfkhsNa8WHJ8vkbuwQxrS7yfYfo6hHqcjfWv6TSSYHXUd2BwPw8uZx3fUbWzkSGKSY1rYDgKvbNj2"
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
