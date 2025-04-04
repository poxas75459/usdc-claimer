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
    "2EQ6McXmbycdLYkh1XCD5WTQ6CmTrEujC4Q5iSVr8pMThAvgG4V2CqgtxorfGGngXYSCNdCfkrjfBN5fHc8RBx96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfPZ6F17Ba9LKY132EWhheFRCNEmgUM5AhrZKSHeqiQRUGtb7iMi3gKWgKxvdAWdoRsaXCkZKLaWi2HKnKw4aXd",
  "key1": "wfDFVbiBHSkSGTifFRubMw1e1bTQ8RqFavnMhAHGQdhDMJE8zKychn7ue1kDwfvac93k28LBaAXjyHYbsvQKA4g",
  "key2": "2ACR57NUCK8YqR4pQPReZCamjbASGP6MJkc2QRKJo2hSVz6FtBRemoMvn7b9pkDgwJqXJiZpxV94F6Mv1nbsjPXh",
  "key3": "2QJdkDZpu8YEXfVrHnQLSsK3t8GGNUYFG9d9YUYfRSKkLp6hPXq1X9Cz4ubMro8RjMWSGs1cnQgQdMkgcwRGdwjx",
  "key4": "4aS9snXhbeWKj3onb63ik5yhochCE5Pi1f7ALiPPXy3bEJ1U9mT2sokTY8VTurQCRXvZSdF6Pu1N4TRth28mdVyd",
  "key5": "4YfhXWnLHQZhMaoJ8bEkzKGE6BnPScQEKw8unvxdpj1jGfFttXGwCSPEGC5WXGSfBFKpJoowxTaMvTdHYrCukP5i",
  "key6": "2LxP1oepezwscTqSLkDQ78VjBpq1eU76oVMTwPeTjQ2fcXdXdSuatgKpMYwd7AnGQsYV8uq24qBfEFoiHeiGJg67",
  "key7": "5zHQ4HFSgKJZp3H793RExPfycG32VsidgGYWrmvujyQdxZMBm2ADH9AUhgSPcVQmbaU6Hpgdsk95kcgXDhbU6xfm",
  "key8": "3JGho8jKi9aFu1Cj95QyqAd5NToo4rjGYQoHhRX3wPpBiRDt2eXB2nRDKgdQJFg9xvMEdELXNxPStVfoWHHe79Vi",
  "key9": "2KSBRorefdvLSojXx5EwhiwCHsGs6kJXmhj1jdC5Q3AXixUXLzrsWhpSh9mKenREv2AxPiBZ3veqSDJ5GrgnKn8E",
  "key10": "huPiKdGDaWMgbp8GGxzNPSuToSVMZR1WMGYsMLqkRkYgqSVXki8f7ZDaUt7ej1mUZY1SAtuMNzUS2LpfNp5tZzB",
  "key11": "5necNkWGaTMceV8ffGakS8ncN9t1vGeX8n8xcx1ZVDnp7e8XvKHguBSXStgMYuqRuRCKpZCh3uhK7Rews7fFoP3B",
  "key12": "4JHxgWGUtEvFgty7nnWZJgX23qd3K41CwVYKxPJPUGEvBLG6r4iH7ABJs8HiHe45z6Apq1HQGFmHqKr2KG23mGMq",
  "key13": "4SViSFSdTmLUBf1t7W35zE4z4P8MSnPxxeFpFHSQDsM7fMPwd4nAgQxj97gR3JbsfcL5mWv6QPXtyqEuQbb8zCBB",
  "key14": "4WoopgDy6qxD2SAJPFujdMU6Y9uyRyXWVzwgZB5vGkrTo8YJrR46T6bpctTFWudj6MyY7jdakuLhNk2nNn652pCS",
  "key15": "34EJFcpjrB6MutGLStF9JJZP2wXSVbnaunVLD9XFrrHnFnugGGeuTcUFETQViCK1gAQ41EHHqKuK7EJ8RkPm4hEV",
  "key16": "2tZBxMgTUvP5MYhtV279Y8JKoefEbNtoMBUJoeqMFTJZhWy7T9Z6AjhgGDmBU9usuzpjwUvXRNopPQHGHADTrAkD",
  "key17": "acqHcs2oGeam7dGLtBXzfcGfy5QxzFhdGCY9t1o3Smoxtwuy7vra5QXZDSd78RGuNyoD3Pux8hsSQENvqDvUoYX",
  "key18": "2zrpwFr8xXeWxgRRLf3wE7fYcRojVrwXKdWoGzg47VtwXtpRW5oNW17cpKVqg7rZh3WZ4EWxhwd2uDfKEMjUfeDd",
  "key19": "2tPnkKB6xWkAMx5hsACxK7WmQAwThU2Rezp2DJLRf3dMcowDiJUUvoiV7HnKrr4nvBTreJZp3dkxMxoTxmM1UAQ",
  "key20": "5DsQY81V9a33Kp2B2ZKZikaHaw5aFekLPKjwe9o25jZ9GzWH9xBEpjzVGZ3eRTSRTSA4RB6AJJLjk2tbtx6WU7cf",
  "key21": "4EmBKiGYgX6Neh6g9a92MZ5JwNkHr3QkiBzz5uiuLTGQUAyBpYJNSSw97ebKoqVXpVyBJt3CjYL15DSj5QUJ5wgu",
  "key22": "46YVNVphcXFkPzAwLYRqUJjWA2APhUreLpVjSj1NfaKJXqkkvj9G93x1cQdKxNYhCotsvC12vdaHCLPYvwT75WmG",
  "key23": "2SK1GjqEm32WVzfFrqgvZohLXGLrKu6rTYd1JBg1sVQPNdpPfeymXnbbb6kBFRJUAmf2WDZtERUWkuDoAUbJ1fuK",
  "key24": "4GGftZHzzzapWtQ2JcVjhvL3iiVQR2sVJ1zhTEQs7CsF346jk74zw95VEbPcApiXwCygMYmkuaUF5RfdK4Fe7k85",
  "key25": "2gBdHCVwHQ9SVgQHqyiaanUUK32U2xtw34dpJRf7LqoSLG6H3yd29in5jPwSP5trg3nUw8QGp1bVA6CtcC5WmjGA",
  "key26": "31d1ZDXbm5ZjGygdLb4KtdnxzyZQxiwfe23vKCfTE39hKwoNciCdFwXEqAWUZFKdPq1BVZHXoFuAUCjFEn2pP6os",
  "key27": "5tLUzk598RfhjfoegcdWnNWjXPKpN4fmn6SAxss8BMCj4NRrjvayvq91y4B3dcMJmfi9iz1FQbtat6qQCKikTVNW",
  "key28": "4XVku1G6NcazvnXeQfwatjMvxYu4L7XWd115LbgcNFSxqbDFggRtwrBW3PDxjDZ4fXsMP59TUrvpKg5UeHSXfsUD",
  "key29": "33dAXWMdipKHoD3SELtumsENKBbwVLwFcjfeAcaaLooazr9fzxuXJZCiWRhbh163Shwd7MTYB9f37HRKWf1aZ6RZ",
  "key30": "3HEnGo7XGn8Eavn8uKQbGLMQ9ZgxWG9m59CYLzy97obYiRryUAUgUXhmXquMPckwnjTuo7eUd7ZAdqbGH92NGGiS",
  "key31": "4W5UFF5xmbDsdXY6LFdJX75FyzXK14w4Zrm5Vp7AVmRctXxAyTTBVxQbRqvzcv9cRP9Hdo9RcunkVftwX1uv3ATV",
  "key32": "2RH87HYYbtfUNq6D5e7PVzqN8k4crfwxs1S5UXjGyUh9wWfan7CaSsJb69k3RExVQQgciSHALZqfN3aXfDWJfWsR",
  "key33": "4LVJc7Ada6hxot7xEVJvo12CvRJqbvGtCdHDyimMYu1zrumKBvtCmKjELrtv4aH8L9LSBNr7hsBVbyhoJi1w3xmn",
  "key34": "3iSVnXwxEVjc9ZsvaTPg7kaiHx2P6U3inqudFdCjpLMEL951wpFRFQ6C8vZvziXyWaG6MxPeF4JaUnd1e88TB2ht",
  "key35": "5kbkPeHyLrQxYaejifimvhEKhxC5XpSrWwQaQaiDBJnPTDExdruLNkUbZxJeXE6utCBps2Mv7wZVi1jbpfbcSjcm",
  "key36": "344SSppMtbPmgoCTzBynUukdDxYpD7JdHrfr8tixFF5hS6jGjcAXKmSxyN6RnypPft5VPMCqgyYvDSTdum3qA7CQ",
  "key37": "2Mg6oB1JRgVqZxsKwASv8MDUiroSv7mAzYSYTdiXxU1sFsDri5EnfCiJKetx5C7MvHQ2STbp6NXfKqmogs2oFnLn",
  "key38": "2NwqvbMFjaLC4zdfmiHg1GfeJby1cQ2YNgVJ7Dnx4WZ85jQZwSTs7fwoyqNC8aWXogVpiSZCKJqWqhgGuKjmYBN5",
  "key39": "3wAZTn1RaE7txQomm4QHwftYPuQ6E1Ks79ADhJAyKeL6ke7Rf9HiKL19Qzt9KXmYDGtPYgsEVusmZKdLdCSF1Qz6",
  "key40": "5T4x7LSJ7CwtYJ41gkFW2oMis1tk1Bmnaxs21T8FicqkkVh2ANb4wqvTfDWAtFb743SHyc7egKsNUQNgUWYeQh7p",
  "key41": "cUnBC6ASN2Y2CW3u1HWHfqRGMp8bRgMRdVdeVRnZsG1RqsWcyBi3PxSEgTjS8fhY6Sm1iLUfKWGQNoW8grHpmxg",
  "key42": "2zyjBq18vVtQpZrke8dMteT2u29Q3qQWz2G6WBg8zMUvE6jrVLr3wY7gwsmZ21S1a1EbfkVXa2RFwY3w28Jzingy",
  "key43": "Cw527D3TVHSfM2SiM6x3ob6rMfQr7reZhumhGGFw4QuBPsvT8eSA1nSHsyqJaqC7Pv7FD6TCMGXDXvoy7FHh2UX",
  "key44": "4dV95aaiTF6NQjSXDtMcUkC4fQbdepVNzH4fsHRLmzyXnLoMTemSo3ShSfdZMVEUq7Qea9PGUTXWQN7VzbdiR4CG",
  "key45": "dZ83xC1KkbSiCS2ptkQE1qesEBz3SX4knW1a3HYY82Gt4hgDxH2ZfrKBjvS1FE5aG9b6qV181JHmjEVgnbLVxKm",
  "key46": "2LMnox7QfAHFrW8DdYbMeHmtvKnwzNqj16VQwtkztnuSNRpzRGi5tP1DvMab6NM6N4UCiTekpCV5U7kAFkWghQoy",
  "key47": "5pJZgRqMBPoz8wMEJ6ubd4DYnvVR2bTW5oasLNJhqGZLFBBJBEwpZhcmw3hyYHfdkq7R8XRpf5V2xxoUpAnYnNm",
  "key48": "3XKijqKeKfkCnmhwFE88EoQjN7Bh43m3UFBsa4SwvbwJqp65wig4c6jBm2bYDT9ApwvGswwB54QKjCyTo9aHqk7z"
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
