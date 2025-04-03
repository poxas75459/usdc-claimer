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
    "4DaS2KBhmcdXGgPUrjrFuCzW4THw6jTmcbKkMpEBUsWjWttrydtmNdMLjAndLNejgjio3ZRQkPHX828eAzqrUSs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TE6TF5LcSYnmF6b4m7GB7pEJN6Advyn7yQNnA8GCRq4MAes3sAj2tRreM5DNiXo1ENd5x88rq39zPoGygkao6d5",
  "key1": "3DLHLuv9Ppx9cX23qUFKrsQJ4qH33Fmn6jxtc8x4wBUxoPPwHa33cpaUsDyB4VR94UhZPSqrBtuNS4hE4JmirC7C",
  "key2": "kzNPPVnNZe61CS7Cc14DY1Pb2b85TqdgspSqz78pzNHzRR9w6aNeF4uLMEYet1MyutzrPqExbfacUTytP6UmoYn",
  "key3": "3DpWFZBDC1SrZwfNdzdgbMdZTHvguRxZWCAZT6zLbAPDhniyQvysLKfWYKgQUdc2qLUNoFH36zGSo6Csyg3V3vQb",
  "key4": "2D69dq6xXfHbFujTAZ5yN9dpbdCVLdcMhgWGjnGikzhK36yFWa2k31W8LFHky25aVYktRYw7JeGZTHxVKxrexEi4",
  "key5": "3VK3QCa1wxHjAxmgqE7peczmLrXJug1P89mmf1yzDMafm3Jixk6fRGZReyQR9QTMYjGqGGj5skv8KDXf2mJ3cb9U",
  "key6": "4z7Z6SrWzdJusz1S1fxTh86pfuXKed4LSDZD6UYQJr3Lc8Vuj8pt3sjafAVQFuNLaq6DrKJ2jKM79Md2iAzcPyhy",
  "key7": "E9FVvKcg1sP3Rdkp34PY3fHbD8YUCFMRWEWXXZgJjy5PVsKoZJGGk61WFkjRxaVi5DVyDVQB6YRsmr3iWRvMHFp",
  "key8": "GuAnVVFjJ8UeLhHYD2aFJA5cap1kaGFdM9Yc4amvsCkqRFVAxA1FeBnPazHSV9B8J23TEMnCQMV42n2yLQum6xW",
  "key9": "3oaeY4VJuU1F6DDYfnAavzjpXpvjfNLwj9txKd1xEzP5W7w8ymXUmXGEUjKj5wQU7KT1xXjJXdfuLP9fyR6Ue85Z",
  "key10": "4GzFc5uxDLVHesraqmQpfHBcYrsAJRv6N94SCKxZQDXPTKYAZqk79WREvxQvDhgk7iKCi4ArPSpoe3ezQTrReAY8",
  "key11": "4CeF1MVBVQSytWN1u1rzJtp6Lr1emn6ZEG4z1jFmv7u7bxdiVqJa3UcLYSnaNhGQqXRXaGeo7MWHRBf71eyKbgyY",
  "key12": "51aFLabQNUuduFvqo9PVy9bQogtSvBqa2sL3rVMDhKBYdd7D9mYLqX1VKT4kJA9dGHQbYvwP4jMqBD6athBguuBw",
  "key13": "3RpDtbwNnL4FpFpEniW4AKmNNgn1ULPVn14dfVhc8dWTM6FQP8UNtPCC7Maf41RpugyRLDrE9pjKgadcoAUUTutj",
  "key14": "24sphcEusaG9Q3h3nHD13AqXq4F2o3wgPykd1zQb9UvcMbVvPRZZ53gohQ7JRNsHpchMd4GWPUNP7bAnwUKCRipE",
  "key15": "2G89kv6vxTU5MDZMpehqtrc2U61ZMGV8ULdWKoap9hLXMqPxMb6Wg85vYhvwJfkt7eUwrczvet5YSCn8KShqWEjb",
  "key16": "5zkgv4YP8Yw4weVGMiNAws71pvFM48tkRZKgHwT8sQziUSDgYtuMooMCF1FYxGyBXEd4NzU8iwRDptSAckn5pcsQ",
  "key17": "2uk7QLjivcBR2dvDykngGvuxPHmpNtXVkprmrua5Fm9RQEqXUHbxui5iY4dGubeKVMfzHKpWKBt9JXLqTzYGPw8z",
  "key18": "2QQ2VQV6D5CZpMZkWF13xrVzZLPqWjA1pTFdTUmXeLui4kB1nZTPz6tLetCN1kT9RQtoqNKrt9QWdozsa11kLGL",
  "key19": "5DjPsuSpc2T3JDs6cXepDmGFvDWCZRmQaF2sUSRusq4jkJ5wx6fH6fghkqFLgMa9g8nY1v4J7eo8qGvkoK154H3F",
  "key20": "2KgYmUY4mNfCcuccxieKsTwATneUHbCG6Pvqv9xW4s2aFWhSTparBGhuUKLTfpZLJhM3gmnKxcC8XqNiC9eGx2yz",
  "key21": "31ZRTYRjmwNYWxTFNUHc1H6ym4vX9dEgMywRFxYs7jPHVEDajFH8wqNzTSzRnKz6PpwHjib16rX8YwsR48gWdYtg",
  "key22": "2WxBHWAtbaneufCpae6xUUVoBirZpM99PVgE7BDYHyU3SXshHfdzp6VA8VmShqZjcJw6qciyKaJX7BW52ZGdV7pJ",
  "key23": "66e89HqK92Srj7DPUXAHwgx81bGYbD6ma1xWio5mWLjojfrFmkbwkwwE1eiVnvbs2VG8WqV7Q8H3tpWPTqCLWWU9",
  "key24": "21wyhV3fg4oqshRBtUqiN924JT9uYuXhP3dco7jMmWkAb448Hv31HsewjvNgofpRAttSwqjXvhd9rHZYDVLsRRtc",
  "key25": "4kSBxdzMhN7LpNAmvcQ9T6DvXQ61GAM5eH8wUukWdZpbToCwz8tVqJjCvRQbKSieut1bGpf2RJYtRHMzEPKmwPhF",
  "key26": "4QCMy3pD9F2Yx3fjLYBi9Y8vKzRU6LuZkS5Se3ZFr9rSYJqSoAegiQxxNWpkmoY4p2D8BjVc2tB1sNLjNQMM3uuw",
  "key27": "3MTWpNsPTMXRtUdabmxj7KvTycG5BugxAiVD56F65umXHUP3Ric9xWLMiCGS18PpeFbuREGnt2mGTp6uVHKGENFU",
  "key28": "27QHBHHmNQbtpyez5vig97yb8ap1kKpYgovqn1dYMCJkB4DLjYngfr3WcXB8FihhTTYGFHTLGg4gBtNXuPch7dpZ",
  "key29": "3fmAJ1njYFPHYcczBUfAJNnv1M45hqccQCceNCUwekVSZ6v1841cKpW2yt7XkRuw7FXfJF8wsMBsErQyDVRLAdAr",
  "key30": "fwJP4SFxfMeiSfuJcnnQ9uETZd2eMFdBeeBnJ8br6BirJFUMCtyTNxvL9Cgsbc54ab6BQntwK5peFfZ31KVwCEE",
  "key31": "35oNdhmwWdiJKsrVxXLr6JinjPPUqxQKe11RA6PvD28bgJGPLe8HuEh82z61k6QNQgKACU8msdMgTTeLMoc3qeqn",
  "key32": "2XSaNeDxnHQxowq3qHN9L4nHni8yhAew6Dij1APedfuyDV3NdUXJf9no6cuUJ2riqtaKog7uCXeDsSGYQ2cN3EFe",
  "key33": "57Kmvh1HvVHEAcR9R3WmD6gFkuXJ2xK6qkcMnC7DDLYpTdBjsWEbgU9Mp2KndqzwBPuGmC3oya5LBNxCu3vV9Rnc",
  "key34": "m7W7dWqD8SntwKjtDgtQbzhNzpuEvoQbzcJHf87Q1fmDsP771rk5evNx6SzoCVa16un23tGWTyz7xPX4uZ2cLwG",
  "key35": "3pKNN8rqo3H3g8Xvmae7c99LcknBYBgsWc9pXs9DUGyXRBZ74ERZ2K85uq2obHaVMBMHfFiZtgbXKMyuoVZnu5VH",
  "key36": "3z1AsAux4kzxHe14qBDYcnEVymf3wF4nkotMjenZaCNok5rvw8ukRAxYLWsKE8sfy1BocPakNyJ9ddKyjU9xKNKw",
  "key37": "35nJXyEFbJbPd9zRkQRpi4GPuGQTWwBjJba1WmrVq4dZxyKuk4VrsEY6rr48aodRJZXsnoYpVkDgF82xy33dgCzR",
  "key38": "4mYNM3NPh28c7KEhEQ5TEP7kjErdJfnFfhbwrKEFUT7v4v6D4tds79EWeTC7ckY3RTtuvdRGcG11qjnx7Ja5C71Q",
  "key39": "5ncSRdya3aWFsLgomBtXJKdaQtR4KhgwtgobA8ewa5C8yaHwgTzYRxhEsDVSX6i4DLxc3kfqSLrzGCssNnuDqkZT",
  "key40": "4NADxadzCfqvmk3qYgT9axEpUztYzbY7F3rTeaR5HBU8VVWjumJCkE6vYs9a7MFTp4zM4qqkpEZhgkBMBUf48HXU",
  "key41": "3FdDdGJD3ywNiSqnUxAj1dwZekU5gDG9GoNYoJ3Hs1MSrUuMjKv6BkDr6ZjevNwuQJRED54BAmRz5bfZYeUDaJCM",
  "key42": "3QxhwB91PoKz3QpiW26Q7QzP1EYpAf4zBZwxq14T7mBLybd9ExZpxTNEVAyDLEF3m7Y1VrQB5TRBELpg3fNs5Hpw"
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
