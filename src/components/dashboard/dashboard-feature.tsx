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
    "VeRpM7M5qENudETTuurjJpzLAGEPzotxCVyDxFDU95m7C4rGbhQxEwK4o3d55B6FUHgmzDLBHCVDQ83jzmKS94X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "916XhM9HRSFr9cQ1n6kxn11YXm1cyzCGiuHZjWE3N4zTmKXKSyySRhCAksUa1tAjMWEP2grbaPcZiVNGkYsBh3e",
  "key1": "pnqhjxYr82NpenEw5UzmBBfCL8qqf2QuPEibpGhRCsLdUAu5GTHC9PrA9nNcLDdJjVnWpyH2TZ7yztJBJFmCkR8",
  "key2": "5W6uTC8FFhBTtdgdrZHKL4LwtzQnyV8dzQ7nXsxmL21iqHTs7tj4PewYWu1dCk6h8522f1wp1vForLYZZXvEnCbu",
  "key3": "2oVHx3RtFLNA9gPmdGQhZsh9M5roGLZFNzgzzbUjxboV9NPSbPZjsNYiq8zYZ92ATv5MFLx4b67gYEVBcb3ZYcq",
  "key4": "cKTeZNbC4mU8ueEwHz1dp2QDQni6vEVgAsyBaRQUZWGiss6xZZKLaDsSf1hYF4qAWdo9F4ih76aZwcsMn297W7N",
  "key5": "5wrS6ERxJdui2faQwKYF4HdfazsxxbiqhJ2Baub3DhGeiEqhxuZJZ5JGyFofWLffNAg2NmQJRGvP2toR4kZVA9gX",
  "key6": "WkbmBxMZFGTJJjJoqW2YSr3nRm5bbhVAQLWeBNv22FUf3F9QWT2XnLwcbZk349PJ6vJLhXrGLL2XfFKL1fefJbH",
  "key7": "tjuZ5R4VApYyYNu92qxXafKiG7ksmocKzffvW2Jt4v7vhw26khC8WfGRUQi4oAfLhxDKGMLe9xC9rEBWtGe9ymd",
  "key8": "2A1qZTAPuATGfojdWHc1v1ALuapLB1ZRBreFTqsiEWJ7ZiJ1YmX4NrHiBjtu8TULzrH1g1TW715MDgXE4hiq66Zr",
  "key9": "29yvnBBNYkRKLQkYN3pzE8A7fCzZhKVSoaFD845DnLFp1Y4LStdsgeT3gvjayUcb53PHgSDywdWHr3kJbbtomBXz",
  "key10": "5EkFacHeaAh8nQrNCL1gRCKMYn1ZhokxYPmXFAVx3v8KHAeKnYiq5NYsMD7rk2eRdZuvSCZ4wFpkdmWL2NHW54AC",
  "key11": "31y8CNSvrhVtDj8ffD33PtGBk8gdfksUpVGGBQkzWKT6zooNd9P9mGnK3tEA8Wnaj5CYaTEpRWjiK7EpK9KTZ2TG",
  "key12": "2xfRi5kYpWgZ2SzNcsANRrcUQrVZTQNvJVxBLA2ajhBfMQaPcyDtSSenwu4VDa3pV3cgUrnmCEa3cYNxP4YH6GpB",
  "key13": "56zbHDjaaX1dCTYJevJfsnBXugBcvSFe8U6H6zx7MzZkDfBYjemELoq2QNSqD2nv6KBKb4qds6amdyYK4Jo2d2FF",
  "key14": "3Zr52vuxrcDiavt46G9hoeDuKvRzRkpBQNaUtb86vEQDNBikvWsz8ted7ofL5UYeSWKBWWCbM5AT66YEqzKxcnHM",
  "key15": "5N2RAGYxV3gDepT5tAPvpWurpXW3obakTHRjGzD4UxrDeRgEZGZLaFyiCQzgkEaxjEJxam1oNgbxGouSmn4eQqL9",
  "key16": "HqZeiueCQCCNGdKLJBSAFL9F16HLom5meD4fg4jAjaUkyxwKpJzrQjjQw6ALNGGMrMwNxprgWSYTY1KGsi8qbFy",
  "key17": "7w5S11R79MfdtWGSKbq6Rwjd5NnJFyJXozLRgrABDgt68TP5JuNFitHPVCnmLjP7E5UXNS65eTaSPgnpw8fodpw",
  "key18": "3YPWvk4DHZBmZTKfisVLtq1APLt7bNn7EdbWAdEuNYRNU3Sg6tFYNXrCazatPW6NgMBBr8favqqnQwYG6ymNYBJ3",
  "key19": "4qJrp95174TqWE76gtoNSvnt5jktcHAZqmCe8wXMhWinQiwwRQNXytM4B4jhDGrFdfwF2gQoGhhpdAdyzcucHE2d",
  "key20": "4FMCD4PbyxRdkt6xJYZoBWVFjJmJ1hmDRM54rGLi9iLFaSmdrn5jfqRNgone8wyQHfG2vb4qzw6eFo8ZsDsEaK6g",
  "key21": "JqpcSe1MriBpnEUtmvTaU5yDgGoSKrYcRyQKjeTh4pxArKzcwtapCK8yWPeGvbp7yYqjjXcugdAhSgeLL59hbR4",
  "key22": "a26XSngprBh7Kc8Pbh8tCQzhvjsCTxpqAufv2jropAHjmrZiqw8j4o42vq6WRghA5FS5iV2AT6visQgCLwdsTD4",
  "key23": "3UzFP3xHVLTLSvexTHYgnwieUjo8TKexEBUjkCGzNkCndezZsNeRSsqPCxbnfgPFSwMs9doorB1fd8LocN8cUWJ5",
  "key24": "4V7yjnSruiTve4wKzVPYE4B6efL5mmyC89Av36F9hTeKHb6vt7dcchTkkE4R5vgLe48uxv4sgZn4QsNBEgtE82fe",
  "key25": "2FQ9o5qCQZo7jGVTuTMfetAYrhG5cs8NZjFdP5ZLBZfxiZc3KSh3BciQwAQHw1MPnng39zuQaEJv2d5jn1Y4tbWf",
  "key26": "5PJfuhtjHnxQQVi1CT5CdLKsTUssyoCnvGQkKXAGweRRo84kHVsehzKTa8xji2i41ccQmfCtzLdhKDWedXUHyq2",
  "key27": "3gq2zkWVp6ncXW6j12iFUcP8Zkjzf4wKiezgg42gj1Ss1iMWpFohvxdg8pnNx3GMzgYgr6pPc6XXutAE1SMWtRmt",
  "key28": "64cF69zdngUbaRxffFh3cdBP9CYXCpBYZqe4LbyiTUqHFFVPJcXkF791yLFfXtcRuxNzyJBhSg2ZAyAhstFwPVq4",
  "key29": "4fzgkbityq2S6btQPZgeRRpzb2AawdfD8Sy8mhXiuwVy32SheUWCSYhCKuZH41QpE9uFVqQphnyF94h2rPmkBDwS",
  "key30": "5voDdJdSJqPBdyXDZLh5ZeqNyms8fAgzv78CiQa6AvZS5ygYVhFbLxBeDB38nL64nYDP8J9ZPygpR2QFUQcXG7SG",
  "key31": "3XMgEPTRHN3q55i1v1Et4yZXCjHa3Npg9Di6WUFZto9n2BqFmZo9AnLkNVsFgsF7ZbnQ4JGNW4x4u92UNozgLYMN",
  "key32": "4ao18gh6XEVwDRt1149oUc8VqNcEKEm6M3GACJXHnBhVUZUaJf52JMEy5V1RrxcMsiorCeXuK83sgb2TRDWgfL1J",
  "key33": "2hTS4Jo1xYabyiMcNCzsaTLhsdN46NFahSaRVyttNJwa4vPCL7sKtxRbBj7SLh18ATeg3nqWWks9QKLp3NJUkAb9",
  "key34": "5c8cEang25utrr64zSL1Z3ez5pJVS3SFKjnXpVtnLo2y96c4bK4F3MdkyiM9Bw52xmCrG3QWoiRFynQsoaPupWwc",
  "key35": "3drY35mp4PYFtC1Nn2NrKdbpWFF7fbKk5oQuVo5rR4mH613kMRGDXHdmdC8WTXYme6RyqoQrrRVkxQT92UxS6gzG",
  "key36": "255eNm7o9kFZKHaYA8eVe7pFWf5LazdoLPSxb5xuW8ygeC2ncA1CjuDAL2pSVzrWuHbjakwtPTrsUKUC9rrgS4dx",
  "key37": "3DCc4EY3mHDSAzfoR8uvqi9WNyfiJ8rmRGgSp2Hc8yKj6MHHgovtpmyY2ckLfagC3gXGuAwqHFDazuF1Y3A8seXu",
  "key38": "2nkiohAg3AWjNX59n2WHj6EuRdV3C5k45w5v5nrYHy4Cu8KPLq7WYWNDC1DaHAiHRqE7rRVhUv1vSYG4Rz3aeonU",
  "key39": "5wfNp6ucWfQQPQDFAedw9VDVSiPnAWdtjWp59r1Xch3B3evasCh6edrCKsfUEixf1YSnCCzRpeQi9phvD3Wv5Ewx",
  "key40": "wCQFZYDbCo1gTyLeerseKrA6TLG1JqHD8azS6ZcsH49LVd46JsSMPg8fmXisACC91YEe2YXrHN3iHPhxYc9oSBc",
  "key41": "cAiv1xcoEy1k7h8B5UhynBrA3VTKAa6twyG7SytodP8jAoYQYGHWwk8EEUM9LLYxYh17LiQRcgQU5ik25Rtr7Tx",
  "key42": "2GbyVEbo3198tGTE6j9k95EjDRzAZuAH3jg14kA7gotXuVLLfripwwVb6Pq5WC3KWw16A89h23aYQiqZSvJ7UneS",
  "key43": "5Gt5gm2dmAgznEN8FeTf6rTq6M4QfjDSzkYQrHSkR5PG9XwJoNXFiF2iF9VBRcFfX6kfjc52T8n7ngd1ruJS5jqa",
  "key44": "3ZSQExnGHTEczDA5iPHz5HEvey1Up1LCB5dATMGEcimobBcDSwBH8E1XAAR1kgSPkZrH7dpe4CywHuAeuoQDKyb6",
  "key45": "4rRYMeKynEMvC2x3tjUnbqFhRSNCzvdLKmGaWW6hnGhrKiQzgzqQkVbqXstoWeoAtfrHCoqh8Agb3ff6exke73Lm",
  "key46": "41DKBM9i3WPYhT2wkCFf35yLBuQb3NvnbgG5dLeFULzzFQCnAEEthvBRks9Pgti3LkkMVrwiUoJ1egKezhEXgJf"
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
