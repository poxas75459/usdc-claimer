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
    "n6QjK58NijqJB5nyFiQdeS1VQcSW5E1i52KtRFAvLD8c2QVUgGP6MFZmSck2EgoD1WKQTmR67fEgjJNVqKdVxun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8DbzEKqnQ2G8Cyp7S7FjwwHrbEE5A1TSMd7cJKx7VEmU9tEmNBVmwYhx9sEjZeZVYGNtedoCvmcGQ19B9476bC",
  "key1": "Au9jr7pyAWYzbZK8osjciChpQZniMDPuxWL6HoQc5z6KDgDyxmBK5NE23YgebFAAQcDZxMVQH8evaLSKRdCWmCU",
  "key2": "3VTmJKLPPSnfVc4MkLds26Cv62CwnLmmaj9ZG7H592jAX47Qbe5Nomap7GoCceNS7R7JjHXZixiW46wDsN31C9pa",
  "key3": "zBXmcmf8U836iHjar7zNKPCyDDLQQJ1zqtQ4Jx86kRPUW8VvFtQVd4VFCWx8DpjNzeC85Hw97oWqaKF7D2zZgWD",
  "key4": "XrUm6aeUsLJWzNf2EhaVevffEXgjiTmSwP4ZbuPLFCnQTESwEKzDoV6Ks9G6mnqMnSAiK1seGRMbxhqoTLfWGmL",
  "key5": "ZJkwPNnXxhibDYkarVmSTE1mwD4DAr7eYfCCQY4V5JoEh2Q1imVjgYLWbNonVfnXMzvpZAFv8z6W6LA5owivrRS",
  "key6": "572WEe29HAXMUsFmH9d9fwu4B5tHtzYyuQewbPWDJTEuG82SqVa35N4D8uK8ce63wMrNmyT16QAZhU7jmMFLFfiG",
  "key7": "32DLuAabYzScF8pBV5zYM1MDvD16UFU4uXu2NM8fKzadhctbBis3PNtm3amuwv69yCrxso7nrDjRyiLKSywcPQA2",
  "key8": "5NF64gAMYwu7DRpAtLeRjHHGnwqECaXyDiPtELQ2Wg9qkXWKGLg6DwWZs8af7eBJGFYsXHZdnmuBXYGvxFbZDcdf",
  "key9": "4DkcmXcz1ad4AREwc8Dm9odU6s2SCCMMjVtt8PKxF24h6YZ5Z1g3S3Paxgpk9bW2STqY616BEgduEi72dnejoM1R",
  "key10": "yNsprbtwaA3gDDugNeTBroAD7x3YoqCsk9369RMF433GSRk9rcJHyx7692y4BuVh8tmk2vMJRCs6uVYtdAZuwwi",
  "key11": "CaCX11P7jHg19L6Lb3iGBDucE9ZM6hb5YYRsH2tagpWyzrqyorcdQYRy8nANgcwvJzn2pc2VWgXq1o6RNLKqmQH",
  "key12": "czyAUbBbd8VhC3qkZpDU5m7nA7GKcExt74XD2r6T2zBKBypxgtTtk4VJLCuXsxacKY2bNamysJWpz93JiTUpXvn",
  "key13": "5AuyqLHsveyEBZGAkH79DdYtzD4avZVHpnc3CxMtxcMqrjtToBB2u9MQFiCJWAi9GtDd9uRsxunhZX2rngCfEJGR",
  "key14": "4KTRietnh9noEGcY8tB53u9GjNANf3x5Z8bdr65Nx4U6bJoCL8L8pbkhR7TWGDsk2Tn6tjUbfdq6VQgDs2HRf2rw",
  "key15": "3doSUvCrCYf1HAbWNg8SeweNs4exyCHuDW3Y2AQjcyjNqtzXx3akPiH1UBmc8sbhAWwg8RmmWiaweE2GTsHuaG89",
  "key16": "4kQDwRtMfmPCnGjM81aQrsXfs1kqja1nhjdWonJ2S7NyBUykXn7ZsubBMPDhfbKZ8v5oZR3gpgkVtWUNKQKFenXR",
  "key17": "94fRq7dQmfdqCkw3cX3wKiJs2yvA2a2UxgZ91jxny1AAYLa5GmyZrXbenPz4J9yQUb76k4aziMatkouzN9kxAPE",
  "key18": "5hrHeyTb7oL9pRWyCATMweZojEkcNyfL3HQj76EaNy1UdPe5Hb1zvBC5wNi9XDj6rCjEzaUnXkSeKPk4u3vVdPMB",
  "key19": "5cZfHfh2AqmWbiHLufb8MaR5Qu5jHCkfgybufiUBDSPEjxJB5WTCZUJKzqTbzZ4eqRCD4kEHumcB6ZDyX5M3Qk8w",
  "key20": "7F8ugxXrXf6y1ABsTetLUvr4sU9Hwts3YE7TajyYX44vEPgTw25pYQyKk8YNwztVxSZhrovEJ4RRXLC6QQj7871",
  "key21": "65U3dZA8fF4TQdWBQdupNSjxFt4ru7LMyne39gzv3ueKat5jbjEgE1iBC759rmQFTXL4b4XH9Q52BNUMy7CNiDcm",
  "key22": "5ZYVfh3cehdmtS8v7zBYPq4xDH941R2NtSnBnv13jbs9DMtenbeFPpGiaDFThvEMKLKNS9HWbfYZ39jgvnJQo36Z",
  "key23": "36PNZL7hR4yFQXJgEucQepqMvMPXvQhhZYAkusZ7bm7acQeDtH5FQgjSzJwq7zXRUVViaM55qVTnan66woS7Cfwb",
  "key24": "ksoiXrWRRfSMi7kpy1so9AZ6Xmzbrw6BH8b1iMtGdHwFqhPkU342p9Q2qviqbj5Re8pJuZsRctEtFhqQFVhCPXQ",
  "key25": "W7rZc5PcXvehRvZER2FrpqQ2i9u1MrNawZJ3ZKDgo1DanfkHM2EqngFFyYWniMWQrQdoPT8nmxghkQfeSYjbEbo",
  "key26": "3cN7YeGEyV3htLDkkgCUNU8sHV6gc5C8c1CiiU3F3p3XKGH6obXSkjivXzA3yMBFBmvaVkVuY1JTD5bVaRTXAFZ7",
  "key27": "25uKdBBJiypuoTGHaex8rHvsRgRCFuYyngy4tTxaga9GHLAosFgZyEsEEt3Wp2hgi1JzyvybkkWt6DZxfyZRniZa",
  "key28": "3hE2XqN1ciAoZAn3UZJcXpz9PsR2aAeenxRdDf4RmYegeoxEeZacgny9P9pFaqgW6574m3wyWv4PU7jFQiLpwUpg",
  "key29": "3Nmz8uEBe58HX2cUqRJEa3SeYiYHJCivkhJKfdfyeGkVqCniBohLbGTq8kdwTAoSJEGyofisKGuCQeFTnzYsZrbu",
  "key30": "4GxzikX3d17Qx6asgGrfEjCXbUej99J6EsSTAnofVWTYpePYqqBLBXeh8Uudx8xFKkCwdVCEP2pZydQ3SeRM6cKD",
  "key31": "3GAiDnUMJgukE6KC4haN9htyyNQr5NxLRDU4dpUFg7LuVwVXZ9bYpE11CmPQwNWeDWKEZQNdYCdJsb19AewuEhfd",
  "key32": "57UZHmVMXprEct9U3Y2yENdT63CNow4kVwATZeQQgE6ksvWgpykpAGG7VxPfUbtDs38aMHiSj84LuqnT4MT1CWcw",
  "key33": "46V83bxUYbcNHRsqD6Cv8hnMGkGteGFCGiLhHtZAS2P7jyLdjFf4j921R4Tn7uPqxftRihHBGorHzmcnWtbKWWQd",
  "key34": "4RmksvmjCjwq3F5bHtiNPWd7ZGKdiGpdKRGSFth4NVuSUejEECyQUXqE28JkDHt1KaKhYFMELMVtJcVhts9enHPq",
  "key35": "4FrvX1VV7tyTefba6TbGncdHXukys7msnEURSwL1dLpntLvFnikSqZYsTboudvdRRkVQhAfNYNQQgjqdiSzvX4Ft",
  "key36": "2cc7RZKdi1GQbatU3E8LNAGqdgqWJNnxaVhzgQcdCXDYb4CNHTRTetj2sFvNQ8dX1HaH9gZmnTitZehLisBQSFAA",
  "key37": "4czH1kwNvNZEsTEmUyPPpiGrKJFm8Ehjasp9jJFy2CwGiDAPGjfkyDWjBdguuVNL8fgoingeEYm3iW2drPx9niLS",
  "key38": "3HqkuvW8bBmz8Ef59wi8fKEu75avTJRtYS7cZGeatw7hKe1Cz8JefD65tbZyVJsUSuRrv5NQacxsGVwZ6TgMe4Ve",
  "key39": "2xYVtNDyErKaURUz2iSs7amtM7MraVywQzkyDPbMZqmYsRSEGqnv3UvmNFf7i2SngMVHiRabQ43mu5FXfN9v3aXy",
  "key40": "2a36dd1tvAW3NDBKzp1XjL6cteArPwvUdaNGjcAnvr9bprZRrMsXBiC1rPydToLkHZ2YmbaDHP7uVLGqVjBnR94Y",
  "key41": "21xsqLKy4opobxiy9LJvz9zMppMTYWw19SLUGeANDxp88avgF45pbncBj1eZjdW2YUb5VRbo6dfFPV8Zk9fSuWuf",
  "key42": "4FzvtumNVTFwv2xurNkXyrdJVwayLBnQ2TSf1ke7v3XEcH6YCPgKpbztD9MSSmBBb3h41Vag1Jr4rfzuTU4iX5wD",
  "key43": "5dw4QUvwfj9fiX5mWEkpVYC8fR58zbxKvApqC9GtKJTEKSNf5PU4fjqbpmHQJEWnLw7neTFeqd2tqXTUGYY5fQue",
  "key44": "5ACEiNhfVkPBNSfYn8yx6KfRJnuJRJmp5cnVdbmrqSLBjv6u8t7gMQUsnDPQ71Xtr9JWF1Y8L7tc46JJvjuVJ2bi",
  "key45": "2FHu5wQWacwfWXVCZrrUasdZoFCFcZqMuKh55TQenDvuxjvFyGnYeY3EEMQLw7LD3qVGccTFakPvC4DTKLV2RRER",
  "key46": "3K92xHYqMsHwhMz2uuH4yunNTkKHWfPLnTvBMvVubWFTrzTk7kSrzUfD5Ytkq7bgdPcoNTWBHSgbQC11bfT829nm",
  "key47": "3uTLt1o287GdY11oMM916sMBH4Hqp2W6xrZoWEdHbBhEUCqtsn6A2zJ4KzYgXaWQKdLnDyZeQ37GDvA7RAtZNKLs"
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
