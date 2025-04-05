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
    "41bcCwX6TQgpZYkdnAJKopnPikF6mSiJDUmg2RVSyppkJ11qhD3tAw6LTiaJPWgcWFxqq54dis46u3yMkbXhRrAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLgBqMcHhYvjy8R1HLcBQvsii8D13tKRWG2Kv9ovo7RU59ze3bCCuuuNT6ZYm4HrVCxh88vukq9KjVk8t1DmUhX",
  "key1": "53m3CSUcK7aiTdtsEbGK9S35MjKAdQxz7g4VYYEWRhrYgGZjKjLLFbyysfe3YCX6GBeBj8npSd14EgHpMaeWEdzo",
  "key2": "4TyPJGuzsv6dGqzXVR3nYUTnsPUtZ4FJTYrHzgi2CdsgZw9beY3pXpWojE1puaVvjD7FgXngqgE3a3Cpr5WN5LyT",
  "key3": "5R7oYg861udmDnEDWJgbXGoTwPQRYV6C9xPoqvtujG8icFUEkqnhhcYAHLsJCxp2FyQLdsj7VmxwcN25f9JPJqsM",
  "key4": "gMPNZRuhq1UgH6R18Hh3V64r1BWmL9Fz1McEWz8Btgpqeg4CujXAE8GkwsEtydMKNt9JNfE7qyxFrEWeTRpdiCy",
  "key5": "9swC7VZ5jcAS8KAb6aCnc8bjFJutbe8gpnLYVKdjjW3KmBxQ59PxXDeWdkmKcGsa4ZYt3eFW7FsktHLvGtzkyRj",
  "key6": "LQzpSQG3bdK78AtuKDL2vGgKRcwUHCYtKPDHcfbZPP7SyZwnpd8NVZzC9WTUL6AQJCv3DqEFkQ89QJKC7KLY1Ko",
  "key7": "4SFwfvPrQGPXmJLkjbpq9w3F6XrfioTSKyiEb41UWVASLh8VRMufFwUVNssDLhA5snA9Rzt9UQ4cKD4rk3jRer3j",
  "key8": "3T45Ap4Q677b7C3BmPRe2jMSUmjwvQHTsjeHdVyaCQFNrqDVTTLfPVVJvPe8iQLPW2NVePkgaioRU1wV15b8Mo41",
  "key9": "5BPoAdvcpgnxAn5AJtwkzYokeT78mTjJ4K8CeKfky2fD1LUp8UhGgtSFiD9PrXYnHJAnWEENtsydgr2N6LxvRE9F",
  "key10": "3CdXUtyuhYZNzk5SX2RA1bjiEVxR4y2E2jEdqXw3KtgS5tyGHaAQVipjRwv6kj1JH3NycLhGrUq68kiJkmrRG8Px",
  "key11": "KeQZhKwsUjrdhzZdtpAED6Z5sX1X3B6Pm3XaSszFy9pvW87sYLFmnjWAAzmYZxJL3f5sYFMZ5fBHc1EQDaEHwva",
  "key12": "57KuAGVes5mcSGotVhxJLZpRwqdFuvHRNRCY7zyqTgRZ37UL46xhtByLcqp8ERTdZBuoQNRkv1XsMSN7ZAbgwbb2",
  "key13": "2kQ9vj3DYgAUiwDxKiRPzchAgcbMPuKUwdwnzTL1UKFmML8yo1MMiPWf68NvuUCvd7rCy8qKRwL4aWPFNKbr21U1",
  "key14": "5WKZcFsg8WY6k6RHLnxQcUu8t9da2u7RQ1hpQXSEDoB6qwxABs7FXmJkGuLf45RxuQqtJXbw6jKjbFqgXmkkx1Fu",
  "key15": "oa2BeqdEoGQ62kH82Ewva2a1kqyujsyx9dp6DNMc6brVHVFbKJs3yieQ8SqvWhvXuqaT9kNTTH2cbn8uxGqsDbY",
  "key16": "67Jz5mjagcz6Fmt1tSXGYUrABSPbre5vLPoZQxMxmqqC7G7jmM8hdZh9b2hveLNxNcCheXcqKUsw6qt7LbGyft3K",
  "key17": "3N8QqzTgbKdVuLrs3LkyHP1xnoWiKJJ8TyfoZsj4Sq5kSMYW7GL1TCg8GP4FGo1UyiLwC4zv2M3F3jszqWBpbevR",
  "key18": "37NPWBvtXQWYMonV5qMQkPpkZw7ZGRtiUFgKZ6eGCHetHLjV5NCZsCotoDzgT8hBvCeHcQuyePAuR94b7XvRXHgK",
  "key19": "4iXhWa6HxKzxTfZqkPN5bnHqgWnquW3R8c5VwG5CLgwTbMLrsgie48mG75P86yC3GV1wHrQCtVDRpA7pgo66yp7f",
  "key20": "4k9emzqxAZ2wnGMxjuATRXwz95nMuA7Et3cHrKythnsxXH66gRNum8cH5mUEYS7EH4ScD8z6LiyRL9eDZG1KcVf4",
  "key21": "CHryNDRBPLeB1q1N8XihUMrn8LYb3RQBAkEKYeVPwfWipZX9CtY65Bngb9bwRJB6g1jsFLkVGv2Rqg5Xkax7A7A",
  "key22": "46veDqw3Ts39AauwAvjN8XEjikp9koo7S5PunUeuQqge2Ez4nEP3sEuou3ovjYzCgwihtupG4tR2yyAQsf3FHzRG",
  "key23": "2fUe8DHyTwGXSFqys6BFvKyQfd1HCh39zxnYQ4VgKeLKieThcfCVFtLmfhSrCb9GEJKpdngb8M1DFwVAhgx1kGdG",
  "key24": "5rbjm9fd64o3ah7eTjmPc9gUdLTjB68mTA8ZprsK98GEMKuzkeoWy9EUer8DYE8h6njkM7W2UmT9usMoQ1QskrNR",
  "key25": "442nTQNx66TaeNMtQinnobWDt4BkQguoaYAXgpn6grFSmALn93BpitcLBZmN6Tx9cQBt3tg7MxUdTSvnSCA8SN4h",
  "key26": "UobVrDmcnXYYVg2z644SMPqShXvwEF2Cmr4o5tYcNpwJsbQYJToJqqsDjotiEQXEnPj4BE3r8eSGnmtKPa55V3W",
  "key27": "4q7YZ7X2ei9vdXgGNsYUD5RwTDZjsgfqEgsLmDMpky831QLijzdSPfSDZRyK2X2RzM4bXb73LXnThFj5xKSn7J4"
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
