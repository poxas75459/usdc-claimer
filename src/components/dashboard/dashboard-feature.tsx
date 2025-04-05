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
    "2NqK5q33NUde3YG8d2AdgUYPL2NyQNmctkFoZWASo7Lw2yqGQhZr8YGdpM8ppgzEHKM4ZsZc4tKVLixqqBaKsiQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4raLU2Quc78SgkWtKdeYgVj2317CMsc65jq1BmZSM5x6us3U4CPLZEGpuMwZ2Nv1qsYxx8xzmi2DM49pgZHocC7R",
  "key1": "47F4FoAomKTZczNyKUxyg66Enk1Hj75un5R5U8fUsv5sffVoNf7D9NQmP7ryxbN2u8NGSz4bXHa21TEASyaThLXf",
  "key2": "5HY5QkXA3XRkGNvTc1EaZUTWNupGNhFfv7fxkvyHPGxmDD2Nqrwj3Lpi9VyBhLDJ5p4GiJfZX7gKrSbECowBTPH8",
  "key3": "2g9BKEYzRKykh2DMVKCPyVFNaKeTqYoYK2uvYcMjcWxK1BnXqSx7XSQrkeyByhaqyNmkxkBL5Y7gJYfm2g4yhRL3",
  "key4": "5canAjXCx23fsCesGzcWhnLnkw3ayhAbGYhSNnggtiY1gBmLHKK7iHn8SbqMtpuiRtQHkNVUUE4xkREXJhzqiiBW",
  "key5": "4uzuoFKEWkVv2RQ1L3Q1qScB7quEUndsvUyTf6SzhC55WzGy3EqmaBfj49R5caebgnFfXUm9ihtCoNioSHfDUysJ",
  "key6": "2HVHKkkQkghe6ifmp5N6LpcprsVqg9BkuXTRHx5YviMdr6UNEvLcXtefqCF2ZbNMeNZf3o9RTddkXKPVyNg3a38X",
  "key7": "2Bc3skqoRWLJ2LVJfNAns8DoHkHmDgiU8jeznM4ZtMSDRvysAJcuR7RnV1P249GVunPYyYadYpP9YbCiYpVL7Gw7",
  "key8": "4j6qzNQS9Ewn1hZ5fzL3Wr6iMoZfpErhJ7QVGrMA2TykkKEGoWWkiLsFxpdavqDha6BWM7zu56uaKNWKaRfuqcLv",
  "key9": "5yd6ShBz1SacFNHG6dLSH45PUaJip3G9JupZm2tdy41DcEU3Xe5RTkM7JPZf6FyozbzjAxt9i7m57z6Z6a1324pE",
  "key10": "CGfLz7cJwnDRGzn1Gq4CYn4EczbdtNxnRgbHJY3B1xZwnYaz7iGnNR9zRTswHARRW88Hiq73v5EkPYFcQC4HHaL",
  "key11": "Pph6dWmzi1nFBbHevBeNFrdB9H9HoMzM4TTHeZJooWMVQ2inx9VRmiVgWMyaEKATUmJu7KJxFk68mV2nPDSbjtc",
  "key12": "5dnByJ5wYSN8R1VULt34nLCghhESurKs4GRhChEm2GNq32zRKmhkABQWgHCGXqNbTBqkdTZyRqVJphPzc2exwy7e",
  "key13": "4t9cv13pTr1jYbJ17ZDPqwzVXWwAA13MJv8G9WwL4XmEGwAFxH55gci1V98VVenTFdtqj5nqaJWtgrDypeoLGBAN",
  "key14": "2GYFntp93D1tBHj6EgEn4hJYf1NyscbV2eKUd7gCKU4x5sMtft6xJj6XZ2LTv2pMQG6RYX9Af4R9WgbtueKeD5BF",
  "key15": "4hY7kLNbnHzCyg637WfpWYjFWrZd4XZTDYsHTMjxRqMKB5hnRUGNH1eox6U4ZRwatMcw2YibL5QoURsRNuxgisNN",
  "key16": "5uwn4BSXpZwiYjQg8HQ5315CM889wCGYyBs1nLeTvLXjV8H7tYUaNKtLAkbCkcS5yP8S9NsUc3Xofa1e1iuFWJAA",
  "key17": "5h2BMEfxTxLv42HGt8H8Gr5XpAtg44zFrWCeQWmi1826BxmmuB85jw97u2Y2AdZhZX4Bx16JXdtB1DqCZm2TF2Lr",
  "key18": "3Upuey7TUPbsqxfLtcj71ypaGVAMRsZLr1qj2unfX5Dbk7T8o2LmvvdsG5bMTwJjgh44HgSp6aALHiAx5KN7u6SR",
  "key19": "BhH7DVKB5rFhDcKi3uxfrWfkuHPtSNnA1JXJ7gPTvRMeVBRf5NpfBen8JjYBxdSXgZtHfWEuevcM2V23Kca7vtk",
  "key20": "221SyN5o4K4E7HMm7xRn5g89VEamc1fgYduVfRh5VEtK87phTZfqu8EJsCDWPoSHBy4sj8S4SiPb8fyBxhrtPWDi",
  "key21": "3wp8Ss32QmN6Xh7vosu5FEC7Yaoqs4W3acsoTTphu1Kk1PgkkoxT8AVbQqdYUqyH3YbF9U8i9WiS5Jw8Nsh9KJg2",
  "key22": "3d5MKZsJ4zdugwMqeBVkskceP3kyUYDXWNwdJhGMGwZqbywFymGdCxwTdFwvdZGnoqg8dnr3TVqMK3DgBFEFpPq3",
  "key23": "3616FUXnqSw4cEZ7aG47gjas99amHYpfxgK3uSKTZnr3PdZMUSqzedb8Cu444Yg4ZhCbSgvh8YAR9v2Bgem7XSpc",
  "key24": "2JMQV81QPA5JFWiEA1KLzf1LwffoX6GrJqrU12cQsp46KM4U8SEc4zGDsHaSbMA1UN4GSQsywyiUN4sYc6kfCMZg",
  "key25": "5hyZzGYrj9TVx4CmMBWHwxioSqCaeCMDdaiMZniBbbAxAPEsurfuKVTf4D7MuCiW5Y6NMyVL6cFAmQyp21RPq8PK",
  "key26": "4BYVi1pewzM7B8hH2zW4p3qBoddQ2AuXoCuPDKLMmUYXSSfgNHzxVjqzLopMixFFA9FLFfbATPeoPF3XuNgYNhcP",
  "key27": "TCvbGZttV6AfQXWpd4GidKGW6xq72637GMB8jrusVnAkYeHVkxXLudxMA8852H6GWxdDceacrexNNzftexsnGYw",
  "key28": "3UWSCnb7mUasCkiS4X9xy8JdWHtwzNnowyr9feytzkcnTL9KFbdRBHKKEWseeVBJhgJye82q4B9v9GxEKPgBhwnX",
  "key29": "PHdQw2Ges6rFwKQTdnth3nzhajcZXHncoHxEVwRbC7METsN5extM3gbD5DMp4dfqfdF5azk5LgxB22kPQseSuws",
  "key30": "2Zo7525bNmZywrnNiCYteuRdBdwy6MXtoGZtzBZt2r6tq6KNN1HxErUYG8J4KfyJmE5XJBKcbQXgGAFffsVbUBEW",
  "key31": "UpD2S7iJD7iPS5cftRMvwzaW5DS46HJZ85nPm75mXbsRJCghGmWE7nq4jfa9eTJkEqTRF9dPDx73N1Z7qUnVwNS",
  "key32": "2JHRJNEdxFjwBuwWqmhW4x1QsaVMf8wTsYp2yT21KnAGwXApnu32U76Dmig11oEyzsYmzB6NoTeH2J8XHnqovdSJ",
  "key33": "5BKpM2TyXgEFTVHGkQhcFTqMR23hzp41FkNmH39wmmPjxAQC4p114EkREPcgetqMXx1sYfnMFjYAHTKCBey67heC",
  "key34": "2EpV2FgUpzaYWeNKp7ceFjUN16iLiEqid8PH4JUW7q7HjaFq8hDTXaQYjsVyGfSEaY9aCrL3tJdvQphr3AEd4ac5",
  "key35": "3ngjUk4U9MKc7asxYMMUqfXiZe9SYnzWHE8pCNQsRYbobPxmqU8UPyvg38sh7vspFuMQoQ2igdpS1kToqHKFBV9v",
  "key36": "2XRTMrGjpsCvTiX3Uf3M6rNRjbs1pujtSJKG8exWvCmEukdSkdCbYNuCfRhc9AhqN3BP817VQK2YmdAzH6kzguuU",
  "key37": "57RbVHGS1FPu5HVz2csmsUHnB8dNyzeRZCB4QZawWTUYBVWLJsKgWVLwLhF9iYuFB6GoPjAMhJhQjM5U4HSxG7oF",
  "key38": "5vVmLhZ6qSwffm5jHXbrRnpeNfage83yawPc23CLjTrqFu3xnLc9qgjr5L3cLbSR1vWppRyP62WudcpzWrYVUzyT",
  "key39": "5Tj3i9xQ6qjYK6kcMCPRpcHJSHcG8b1uRXNN79qY6dzUqPp9EWvoxDjXMWAKXor3YhKcZbSRVUDPaa7qnNE7oBqY",
  "key40": "3ycRD39dzw6VTh7j31v829i8Lcc5fDqmGMeV1KNw7Jq1CrskRsu5184ir9MG3iMrjuvBuK22RLStnckToXeuCQ3H",
  "key41": "2KxENFVkzuzyjaipDEqFwJ8XwP3pEZdvXvPe1abjMe42ru2kCNkVNSR36Rz9TyeMHpsRhmiGFY8KYpyPfmTiYGkH",
  "key42": "2Kr3URzXxRuVwwayJeRBGTZuGxkKcKZ4R8wTCKN25ftjn9gtJdtjU6ETnoecfrK2qJFZ1853PQGgTaAEYhNgfHKL",
  "key43": "56SpEQJkYCNLWQJJ3pyfjT9u3WM9rxVejq9UT1XZXdNBWTjNAuCzx8dgv3MVLAmuQDxMEWWuF26ciBFPwzrrVRyV",
  "key44": "vUXZKL7NBsXuVQhCMYcRC28YQnRsqa4QCyPg146WUsxMXnt6dLycNAuYjx8vzhoKEfzkTyYz3ovgNQuKgcNQjVF",
  "key45": "3M1g8NPAvkPn3GNDaj29QRYnxwYwBGNrMJq7PMjAELgc6vLULWCTN1Yf5B71uHQnjxmzNL2Bv6kyQrCFou2Mw25v",
  "key46": "32hcuPMUmujRwHX7zPrdLbPDK7UQp75JvokSUMk9Dui8Nh1rZkQAfXx4f5AeSsDgzDdFuCddk8c969Ne2XDvWqV7",
  "key47": "4B3Z94weFftZrz8pVZpThjdAiwVsHHUxVqNEag7RcHfGqv8wWERmdvTPjnkJgpUSb7cEUUuJUh2UBTMa1CraFyiR",
  "key48": "4AQuuLCVVqRxGgypyXMnz3Gwagqd9vEZbfVb65p2ELTrXmZZBBmEU1DyvkbyMgyMhig3TbSLFZR1byMGosWAizkn"
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
