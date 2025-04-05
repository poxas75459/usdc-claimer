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
    "3L9YDNxpcMP8ccoRu5izr3KPW7q13B2RbAKir7SrcCkUoVARQz6qrq7ikt2C1gghGeo7bz9uMVeKGqoaUQcWrfrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SY6UbuHkMy9WsJFkuFKfCh6PgXjf34vVyhK41o8qwaBT4g9jGZMuABj5mPpreeuk3UZdRiWUvhZxGgY1tm59KJS",
  "key1": "5mqyjEEULv9j6KWC1d21XiMcit5YjRY9pg1WjGCH3oVxknHMEAnYo89ZQFTQy39pDTxhRgwEF2WNtqdcgH5zysTX",
  "key2": "5Cpucmwyxq2BMTcGYtbwC7JbZa3g1oMv3ghH9pqcjUYjx6LiZsH27KybZrRCyQepqYy6hYDwhXdsehryrEytQrty",
  "key3": "5WKUrRvKDp6aVAQwnbgSPtBHiAuja83t2pRrGehDiYKUpKcubkb8M55mKcopRcTtpHMWu78t7Utwn2Bx7u9UEjjK",
  "key4": "574iFgje89vCuTBN9iBNPg71gjQbC4JMkUWuNGyarfXDSAfAFEgrBkch6meyVKx7geWjv24vvD2HkbyEqu1AL9wu",
  "key5": "5ymmxpoabzjA7pZkHRpZQWnyY7PLboWaNTjiuCaxUyqLntcycpMV9ayysjCBoFPgRnBw6LdzL94MWSQV6KiM5Y9f",
  "key6": "fFdTC72ATQta5pCfk44kqez6CCyuzQHRJqWmQN31udLQAwCaPsvrBBNhVtFGA8abDx1gZ39twD7kia4DtF2sJg8",
  "key7": "5dN8qgRmW5M6MCmP5xSSixRyaThoMfTwQ6bo5ZTMPLC79sBG4ZKSAmHAbymweBV3bi6XewnjPa3Ny5kguG2cYngP",
  "key8": "48gbshnje7FTuSLBkRgmfPred7BEbJXnfRtbQMiRwy6a1b6djUJt71tFXWUHTCRvGeoGzdPYDMv4WiCwL8rPhBst",
  "key9": "5AN1ZoJhRePmE84AXzLpbcH9kxw9df1o88NifjEuE3i4xgVKJ6UZj3CvjDpazTo7C31XCUwf8Eo8aAjoGfTUb1zU",
  "key10": "p8JfM2ZhTKECFcpqJ411JiC4kmoVTY9pRywbHMYQ25REQfyKY39G1hHmbekCyaanFCsQQTvXWbkjuQ82fUrMox3",
  "key11": "3mCJWisHyg2BwPEvtnasA9Fxpb9QxZRxmUAKdEhHeSHcLpfbAeo2cHGwZRATy9KPZZeRSVQ8J52JWt9Zr4U76bHc",
  "key12": "N4UkGudMYusaQ2ca1QVWmWmqfUbKCLvp5RUpmwjJ45pBGtT1BhaC8ZBq4j1BzAixwt9Bj6RKTapUJma5z311ZGT",
  "key13": "2H9VQ42WqBPRhfDh9dx1fsZUTPcq4vW7g3ptQfEpAkjG9uZxYfDcSeYECXDLevGmyQKey1nMmaB3zLFs2NCPg8iJ",
  "key14": "2PAusqxQtDt4FH5MFdA48JjLS2thTzXkLgU1w5v3fQiUbx669o82JeTLn7oQZxd1P2wUHd8EYbYaHsYJUG7iFuCj",
  "key15": "66LcdEGKxxyFvwR4WicmdSEBvdoHPbdnMwv1TAFYohrfVbvyhpJWgUpD1BRCJjLtyJbbhsQuvVibvkGrPvRupdyy",
  "key16": "3mzatWt4mMzJePz7vtDSAGbq2F9Ka89LxSmJ44cHaj9izMdxoXg1VCNoW5TouH4xLpqJJVjonXQGeWgemQiCX77z",
  "key17": "3YgDxrZnmFCQuKbNGC6QPxDpNWSwWu3t2XGxm68YjLPy8J2E5n4sbBCrd4pxvVBJ6c7eNv8qqhnNLY8pgcXFE52K",
  "key18": "5kSiyBNVfeAZTXkEc642ZJ3iTtetHE6prspa1kNb8MW5ZjU7enU1YNN76a95r1MoUC93sxt4V5cDwg4w4qMP88rv",
  "key19": "2C8sHa54nizKeVE36iAicgFFHHD5rhXUXXh5RMjJrAa5pUqZRqSDq7eJ9GYgwx5PdWCZf1PXhmxdRRct7y6jZsfY",
  "key20": "5QgX7j4rbqCvMzU6rhS78aU8Z8ZytziPGZseM8rGitse9UJBpFg5EfQEgh54RyL2Q3YYycSXCoPFPFsCqrbNezLJ",
  "key21": "orKotM9fCihU71YtWph9BTmQigPFf5Vv9hgJ6eRBrfwNsH4c2L224Y6KinaWdA794mWuXn2iJVFmSzcdzG3Kyph",
  "key22": "2K6e5EmeRqNeuYNSo7SSekaL1X1mwM3389FTrpbJFK6DxKWYxTdToDp8joJLjUYtfimLh4B9pkM6iFsuXckSjnnm",
  "key23": "2wCB4dD8pSNgvrHUHawb8L4svS27mq33WKXwfMmu9iuMf7TmFrEVjuWUpc2kCvnRKWKjTecJntSAZjvEb9nkatFn",
  "key24": "5riYKT3mv4b2ouTuhvQ1y5iR7xesKAmpYUKYBDDNrpVKHjk53Br1mVVCK3WaiqYhA9MYu5crWtFw94EYowB9HdDu",
  "key25": "2D7opTHymLxsmzPtW7NA6PaXYKwnCka2rudjmwnMTLSDuqTKwmGrXTissiohdxHDDDGNxF8FjpTkU6ZAXFg3KaHm",
  "key26": "3Khb4GryQVoJyswk2YLk2zDxcmg5Er4GAAerLbRm4mo3Qe86AsnPPwtaAGnmcNXpPUgFbanAQSsNV7UNGLTKzgvV",
  "key27": "3XmUtkUXCfdaTHad9JRcwGdDXvnWANmcuKBydzoiWbCwnmdPP7XSrERBDCpWNyoScCsgaKJw31zgXjJvXoJF7Rzw",
  "key28": "3qXWFX123Ww6bgycvU9k2GAkK3fvFAL8E21NLDiwP87Z5q97M1HrFH6DPNh9dHiTNEJqAaujPsiJ2hz8XawAGZnB",
  "key29": "5UbmphFhfFq1o4LUQSFFGaicu8yuV4tnmTf6X2JXw9BtrKUZhMrPRKUW1zRd5QyAwRXpMF7vrLARqwcyVwv88WBm"
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
