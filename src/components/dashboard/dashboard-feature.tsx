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
    "4nxkhiauQkLwvCEuik4q1VzMKPAxae5EYW1kcAoiNbqgabqKjMFyiBFRT5mhVVfPaJpxHM7ZvT782No6sepKfYPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjQiTx7w5ow8aE23PgfZNrybu7GPyv78fa8sWuAo1UNnUoVgdcc3dqFE2wf2x7t9qB1Ub8CRizjHZKryvXQayKt",
  "key1": "jLALdzRmxMTH14TFGhf4VGj8tNQEBEd6UdatWR8qxS3bMi2U3qkcHXciqjEJVtb4ALfTFYyzk5fFngWGMTtM4fx",
  "key2": "3yTKJyVzUe5jXkZKhrPCMMuNRQyjWYqH1BTB4sphobGnoe5TdRWkK3RDBVjhLvLiZ9xJxwjPv8CAuHunuhCmsQzr",
  "key3": "23HTf4v26sG9EZtR5N7J8VooAcmL5Qo2SbAQ8Zqi4nQAman8gYXpZuqy261BeaSF6KdUaYQiNiFU33iUbbcKVgaB",
  "key4": "5X9RgU7pmUUGPE9orHZvh672VSv7Evd16rYEgFzWnGyVGwX2PMzZNq7iENivNky3xUJSHoPnAgMitYNzdtRwVhGR",
  "key5": "5ZpVhQfc16z6Seuqho1Yai1CCjb6V3C3ip1tqLmcSbebB1mBiQfGLrP6ZGoHhrpbDD8gjrqX7Jw84skBnXQaXDtF",
  "key6": "5yyt1Ph4QQXAFyuAukoTy2dw2jbi2fEgwcfqodRsyAM7bARyCFGevCwVRz2qsMr7PG9EX45pbvnCd5q9fmEdCDNA",
  "key7": "2uKBJpeN8yiNsAv8YHiUGizsJkh4JQVMcAYDtwcxUS4fGGKSFuW7drP9qgxQd3vnYScxLqA2SzEPF5TsK6UCX6D1",
  "key8": "2jBhVMnwMYjhVnxBHpfo5Aywdho3G2Nusj3cJhBG9hMP6sh1JCboU9ZGHXebUv5njJuukB1MgMVak6WYP2TkdSRR",
  "key9": "4D5ETVQD1tUqcwa9kACGi6nawbMdt1nLYD4hQv6vGSguU13UxSeShgdCWprmt5ERaSckKJnw4nPWGnBijYvk7yPE",
  "key10": "6igTjkxin6cZsbfzk2aQyjxTCeTPPtUi2abfKoafxDKCHBmvDuyrZqrsSyb7JhnRtEe4HoQ6HeJUFejv4NKj7bm",
  "key11": "X7DpPJPusJMYjRdq6d75Uc6CTr9SdmrMJergzK5xEmrhxyJ7NbgkyxwqPUexzcbtqxzaME7d7BudEwL4LoAunP9",
  "key12": "3nNsDWYUEMvNVKhHYgtgo7pDqV4kJYYWDMmukBfeXxZXiBSihWTV9ztbCbJxF3nx4LwEyjgrB2K5ujygLyWVfzGd",
  "key13": "3JiJZ7fuJGRx7xFNWq4qyLuN74PMxrCmnMgkycy3DZ34LekLsizcnP6kNTQyKKMe2PdQ27AWPuQ7Znp44cJtQa1X",
  "key14": "HHk9MARk4V5LoU1scK1yqr9DnsTtC6aXnMC3uzUjFRyedu8iP386NL1QnYdkL6secGPew6LLUzB44krtBELF5RV",
  "key15": "24LcyDnLUPuaetYACLxVwQyZ4XBNRSpWkrkWR1KoVZ6VVpVz4u5YQrGVXSTXmZmmL7YPzcycGYE9uPA2PPij8Am1",
  "key16": "qGbEjFeR587d11QPqKTvxV57UoQKnr4Jm22BM6A4sQrtz82RUebaAxGmyNUjDK375s7cKRFgxEGiozZtQnwa5i8",
  "key17": "3AYKYUH2kL5AtZWFdp3MJ6hJ6rhhA1t8teTpRw1KkEAa8AjS6X63XG5QSkVFtGQPHuR2yMDK8TvAHXWi3xsszsD5",
  "key18": "67BVG1YqdGjAJprn1z28U2z8oqzbAEK6HAT2f9x1HrMe2iSgNudXibXmVCnZN62eJHtYDc9Au3Duvz16tM5ZSobS",
  "key19": "5ede9zNqrtwwqtPdzJENWi7F7AAbXERDjobk8oTXCb8CPenKBQFqqFpYALmLD9CnHjGRryfJmTE8n9ewnkFB1jdy",
  "key20": "4RK3fvDwEESY5wpEaJs3LxqRGWTh2HievxgEgdEg8RnTouF5ebJVavxvnRGvDaZCK837o442Uxq1Lk7cp8Gzt4PV",
  "key21": "5qL3MfGNx6mK569D2HNqEAZvkjtsAsxZendB4SRPdtudys96KbJWf7fFXy92YBdLPtnkajTKQWqKTH5H4Kr4WeNi",
  "key22": "4LdLkKu8GSyWpmwWDEiqrbz3c5bFPCKCYy1rMVYoAM4cJjpYdaWxKCiWfcM8AyQiAgMexXbAFBQ5QnMaoq8gBJLX",
  "key23": "22md8odiVCtdH5VE8yv3UdzFqcNHnjp1XW4Bp3q39KZ1NA3RMa4QKqPZG5ActTYq5NzbFZ1NjnQV4TEbjhuStQEb",
  "key24": "34xZqbnpQU3zLQ3rFQntzxWt5QKi1uHm8Cj8VKaL6C5yafcy95Nv8zkTNzSQbbSoFv81ZweAcWAtPqkmiiCF4cZB",
  "key25": "4XAzhbKQt8qpXTdwmoYPiXcWS4kRa4vZviWmW8XK34AUFQgsmojuKLQMn7yKukpaiZNek4mThRAHaWBuaJcGF8eo",
  "key26": "3SnDhc7Jw4jTunukmLc5PBrtAWhu4G1zYM4AWzn4SXhqkwsuPwU8AT1cw2iBdWdy9x3sUNp9YHJ4Lw74Ff44XrjE",
  "key27": "5CBrsexwZE5fCnTcE18Z3Zj2gABJKeDueZqCqa4fXRCMDKWTnBfd6QUMnQiEnvLm6HhMTy8gLaT328TvbUvJwMAC",
  "key28": "5BCaRc59UhPGoujARc8CUZgg4pGnoqFQNpB5H8adebgdHQPajaM6ZfmnRYjJXd7wDWwtFNDiS1HuXGCytJgXk1Z7",
  "key29": "5SUtJJRGdrP98aiv6mCwZJSVZZwUKiiTTW1KNwJU7QXbooPB7hrpHF5kjuLjsrYTqS3X7ToaN38sGvKFggQmBCoH",
  "key30": "48WCTP5uGXxChjX2rogdvE8iqWVC1ABhQofLnGK7uZppv3zXiQW6PRGSJiCvTjUtF1i22AU1qtS1aGf22SCbH5g3",
  "key31": "2sD7mjZm76eBkGJeYZM1Y2kEvqcpNfcwhHxYEE1uxMk5Lnzj188BeyiH8mAQYTyEWZUhEMx1XbogV8eUAeUW941M",
  "key32": "5ctcAbQ9npLDx2i4Qdmj9nWUCHXeuWoB5VUcb2CCFNFN9uSfNFM1mLYz2SEj7AYcVdVmyyNuNaduUe8f363v65Pg",
  "key33": "dXhAXrGpgdMcD1Rux9KmGNevV22cGQGgftZA16S7ykGpXrFhiTDHeHLLcaG9GNYB2Jnk1BZHoi47GaGooMkm3QB",
  "key34": "4m3B9Pt36eJ6TeNLdJRAwLgg2a52HzZqrHXeV2sgENLoMKShwkgJfKD9Av2RWiw6ukWyZVkHZCTvJCQvZ7JWUMx3",
  "key35": "4bdGW6NjeporzPAdYNhZL7qZV5Xs9jE5LFRvPwSiKYu5rNoDWDj99kdJ1Q3jxnrkk14b4KJkqcuXRfTGdrwM2qSF"
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
