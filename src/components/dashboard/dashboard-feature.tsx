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
    "4rpmcq1yq9av6CHgx6H8APFvY538spQ1EhFWJvoRUGHxnKRMSCss8q5TEFKfYoqjFsGB9M19uHT5kLc8mTnLKJxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4guUfEzR7gMsvJy5JPxDGih1UY6MtqtCHTdcJqE7vkUvrxtriE6d5zrZZy97FCWMstoTF9r9T2wUuYXNMv8QhadH",
  "key1": "34Mw3rjwXzE4R1nupdbtEQKqA8HKSruKB784dUBnzVTHERVhS7EAbc5zwzMK8fJpYtK49u5WEn85Zhyr7hCKfs9t",
  "key2": "2a8F6MKYrH5wPJ2L1PDj3iVV8SBuXhwcxK5CcxQyJHYM7HRMhZTP6zWk5smBi4xfFiUxjVY5qFpGjFAnSofdgCem",
  "key3": "3gCaA5yn8mVtF7GKoHc9o1vywS6AvveoSSfVsicPfvU5ZKXTbBnJbXy2o1g3iWDBTxh7jjgtegkJatzNK4PU9PX5",
  "key4": "2FknWsTD6xb5PJcymLiwa5UQk1ULhVZEYHhtGEzi4kCCWppYmWbjtJjoTY5haw1swfhxbFHe8smZNkpHcKHvxVwm",
  "key5": "5f6jK73KkRgCKo5GBfUSsH6aypwZLWPFds9R8XotTLWnLLxNfiW4M7iYPWG5JYn8kacs4PgqBcyKzB6WodX2wodk",
  "key6": "3ACUB4AZodYvYuUtF3wWbd6tVxiSfTPMHJVccDguYyM2MofsouYpfCZGHJFKVt74W3hp6PNLo3VBJQR5Fd4y8U7W",
  "key7": "5Pfjx2ADFzrnd42fBcczhDYm6cQxNBmrghghMVKnsccUH5323wdWi23PezQRxJx47YfUoLCZyvmzTPqeRgeMRvVX",
  "key8": "gayFhCC8xQd7i5rd8NWn9d8NCjaT7BGDQJxP6Q11cCi8a6NfwGMVRxqu16xT6ZPbhgPTE7hgTMZUmJCrJuzVG95",
  "key9": "2bfgFCAcgdqhjj11CjQXF1vi462ESvPXVHoGnTJj5vbZbQfzZH7jbVWgecQZraz1cuaE89kDmFPrNvcxq4S7TnVb",
  "key10": "5jL1oBfGXphwEytFe7JsYEePT4QDBHMsaTySwCbzqs6wJ61fGnS2i3xnBuzFdoKCYMKzCGPzi1D2SMk2feDFchpW",
  "key11": "5wmSh8QzM4bsd2x3yM93VfCJsWjR6XB9fikjYsk4w7h89XchQkJbkGwdZoYSXgy4EwnXa7UkBdCrVMtjm8Ea6KUp",
  "key12": "614dyXzsQRH9P89cf5L92dHaQYm1Ch4efVrkdmvthXu9yVsTNDWiHG7i7GJfGAiGobdpn7zgqorEw5rDAmFW4ogz",
  "key13": "39S7jrE3p4XauUTn1xvLudHECm8z7kwuG4re88pjMYdzz7JYMcwh9dJMd4XJcynu1PQ4JdnzUaquEDmhdTowQWKT",
  "key14": "5FvjLjTX5SinTdGUhzQZRrEvcjdZ6DWpntaBcY9nKQbYBX1r3yCKZ1gLsJbTz5Rb7gtjhTU3sXytUmrdRBvfc6Tr",
  "key15": "5SqakBFRzfEvVTTA55GJTxLmPRU46Lxtppx8cYFdGbucxVejSFK6ywDETji5s8XYWq9swccUN7ybdwP3kjnUnB6W",
  "key16": "u69y8y3VL1Zi37CrvKr7kuRhodw3TZccugAri6o9ccHSSFmCeyjUkWXSUBBZmYp6pvcq4CyqJKWPgn85RuSJQqG",
  "key17": "2k78xnT7VL7yUGckSzCADeqAk3GZN6RHz1mmEcWkQrmw7gfUY7etdFEVBD6dVYqipncUSWPzfcw9p3MRHMsTW2sy",
  "key18": "4senKTDtpj4ddrhfmegkwwAWLnKEBPimx4RdZ9NeQHVcQ5k9Pa9T35VDNNT1784etpFnyg4xXSVQNnW61ba1yf1c",
  "key19": "2WHExKEzCpEDed8CbcttVWaq7d8yQaEabbGqJUae68ngzVeh3pkewR2imKPcL9Z9X5b8RoHcpe5wdSPbHtjRiLmq",
  "key20": "3ktjcXFYWwcxr4McpZAmcE2QTLbox8mvz6MGeC8MdHHHib5o4d88d2WhdcBTC6TvJyv9gSDJivqFnVyGitdf4a7V",
  "key21": "59GYq9RcZEKZZ5GTa92i1MaP3EWGAHq7CXeQjVVpGmRVPpFQ37E4is27hHeERPWxrm1ap76SnW5AZ2tswyjojgdG",
  "key22": "5h52c4MH433f8bpjb67M7YuciMcKkveWVCkXDehmoUpvVARJsG3w4NuyNKThgmPFuwchydWaq9xmW12YVQL13mGD",
  "key23": "5MSVD9xTYc494UtiCR6tmsVTaKxYYPewbEgcJLpJMDijbf8V8CX9r2eBAFM2Sk8nZMPUtPSUsrZRiFdWKis2UiLK",
  "key24": "5vXdiQCGu6s1gPAjcyKQYmZK2jJMVxxWYBw6Z7HhiVeoa8aWYMNTEm2iDBjNYNAGsZjkn4HaV2pPCFtbTCcq1JKf",
  "key25": "2a82vySTzoMBJqPWwDoZvMgRkDuig5xrVBXDEizqriUsQFpf1wsg4K6PjVK36PCnrACdNCefuHqRVh1fo5WgCcjU",
  "key26": "2A7e25myR1n1rEtMKGWVTgy9htb4GJm7PLGKjJVtVQeNMUsM5D91XZb63z4An59mB4TbVYPY5rYaqN6ppMrybNXo",
  "key27": "5V9hwdpVawhRk2hysSsnxrcxVMWFZcdj6bhcyKW8C16U7rP3mW2AN628mXRwvWrdV3io1QyWhxeRbwFG1H2DJXW3",
  "key28": "4e6n7H4eUetVdTz835Zx2WnyPRRRPwsbRw3rJpfUEZQ2QDBW8LWCxMhYvh6oG16QKHbC2tVSjReb7mXe9tUyiKak",
  "key29": "gdgAF1NJGArLWbVocGwsMeeXxBoge8j4J4NyzCTWuKHzhq95YJjk3C8ttya5y6j89rd2veZLiwPSujSLgocqdbx",
  "key30": "4oXopX3ot1F78jwxncgV2THVLMBYwNzqDattvpCcpcwSTCmZqpDYDiGK1FbQUc8Bnt47di65WMmWLqvHcqSkMdAs",
  "key31": "cK5CmJvpgGNn6r4fzPZ65s41aNuFB4TApUcmJWGawECusgkCNtoiqMPtn63fMRo2X1ABxWTNGzgnLByuGa4k9Zm",
  "key32": "gSaUjyLPMqUfD7zPBUc5T1qeJT9KtDH6Sex3cWwddN5rPn49PoJNbiA188EEri26bAJPX85map5VEDELGHA1FFd",
  "key33": "5gRwcfUb6ePn9opoNsZPUUnx7nd9dJGtNNw6wSyKNTZSoqsoG8kc6DgGrySjmtCwXiS918EUp6uXMPkJBaoLHf6N",
  "key34": "3HxTMdFqGwZuqR7z2S63c8Dy7852qw6Vn6DhEszL65c5vG7XDogLM4ckBPAyLL1UqFYKiSzN5pEEJGw3VnXe3SFy",
  "key35": "5t8ucTXdaotYoEQ3TgQwXVzLYzHHG2dzQ1xYCAHUyFvbejZTSkBP1oct68oX8cKji6NAVPMBH2qyTgBpV9kf7tS",
  "key36": "5y5htJZ15By64DtsvM2x4TA93kXwVPmCfWBmE95QbNVdNg6dgkaYLvAJNdaWp6wNM3kRYPa2FD4Ap7hnxwj7r94i",
  "key37": "5p16CgNL4r5k1CczZjfdELJxHmV4wRzQ8E8gYoq4HQdf89RbLHbqGLn2CCiVzeQVWguibDu91w1jdR9WT9sg8iAx",
  "key38": "2h63nFj64uu7nuUn8k8VRZzgnm9bvdy4HVVnJ8NZQZpMs9MkN8EtvU4JZrkxDEtUGBN33eamK82LLjNNeqKDVhF6",
  "key39": "45KmTbdEZ2XbjjvHcHhphrrtsEtQauQiQN9dE2bUKL6wzW36YXKhFjefuzpqFRjxA41hcfbUsCE6p3vJRS6seKQ1",
  "key40": "5AEezVgNBmwkv2xVpo9SB4kf7bQPzPhuDvf66JoWLbBz97yZpNFitJLzVwHNG6AmXZr9jsj24Dp1UqeHs21upFBx",
  "key41": "3WQJgz6uNRixuxGNk52kHspDv176Lm818bdteUhWA7oYTsvFZjPuwvJZJtoUdFXfdgrBeeBWnNvFY2S1KaWE1s4G",
  "key42": "5BjQULE4odSBchYzH8Ffoh8XjFGX3KM7ALe3mCCQFUJwMP9JhB6E4crH3h9JYwkqEcy97gusvcvzhJikJ4hWaACY"
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
