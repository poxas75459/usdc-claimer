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
    "2yvjB9mVYbVudqmYXbL3AMdE42F2PDdrxrXt9hWok4mdWpRg7t2ejzxD1ZMRP7BfjKVi2AsBwo9euZZvxLUoLU7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RYPBeRhqRR5V19BGggkUykicTYbuqUZpLCESFvN1GfDiq8YTURNySCz2g9inzUgNB26tspJnA9zpgFcUYY7Tow",
  "key1": "5F3fn3fXamQ1uGxGSGYK1k9f9vD55j316c9yqhhAiofFWQEPqasN8eQA7aRHgfi3R75mh7BSh86j6N2nMfqbpGy3",
  "key2": "5mVPnnnbKkEKANnQne1ycXRoRaBDrP79nK9WpnYYw4oo5H49Ef22s88hEsj2mVDCnsH9TDQQoqVw5sWsoyCFeN2A",
  "key3": "333oiienNcs2dqAbyV3EEtEVdwy2dA59ZGkFN9esbd3am4N7cE4drJUrMXaz13WmLrL3ogbvTkUV98dgoE2Xs7xE",
  "key4": "igBfSKysHXwTY7fN1mFtrUKweLwQvomPtQuC66G12Cg6dpTbq5Xi3q3juUazoN2V4gYjtzxFQJog9EkctCjwgxs",
  "key5": "oJ62nArxZeuqoFYYKGaWC6CkkKNVSB9UDhXaQt2XD2ds7djYLW7RG9j1PaQNofB2nJvUYWDMXimGBCR8veg3sDj",
  "key6": "4XseTmDCuXxWHcmkAS3vbqj7c1cRr25XfkAiTCfyvWsa8nLHY4EQHNLLkJbzkufNvRvQuYaekaoqjdUC3EZ4s7Zg",
  "key7": "4ZMyqtdJ9XsD12K7WMSNnke3i5uEd9WMwDCXn7ADNH9pmMB8EefPnKijP1o3JLhQTadDir9pYWhwvSPDzJRsmxCB",
  "key8": "59s8J9Mfz8sg8TuXMncC64uLPRBRng4uwxcGKQxSSRmEse2sX1ZjzxbG3KyJSq8HBjtvkweqGgZkfsPBYPuj5fKH",
  "key9": "3rnV3LAVbYFQSP28hXogdXmVM4V6tyV56PoAF41E4RK5zLodkE86vN8VHsj92DTbvoZcSPdcJakK9Cmv1j1mZa1b",
  "key10": "yM2WEJxcdZZFfm2P58mmmZSqtCuqnbCDTzZzdsRt5tzt5Uks8x9j3KgyGpu69bs3rABXxQSjMfk1zLJAwyE9iiN",
  "key11": "3BsaM7RzqdgqkTPLivLbDUF164PoonJTXmvEPUJZy8S7A664TPDt6S6iu5s1HZBgvEsWdJFFXLLcXo1gekUtgKpp",
  "key12": "5fyvRkdQ5MgJ2xGnF9DzAFyYznSeLoejD9UfvXVy5LD2X1tze3ARZ6Fh8fmzzkkHMgvYEo6mCTwyD5WJztYFz7uU",
  "key13": "ZCD7wyEuFujpR26ZpqVii9MynXzKPetnGQqEqdZkbEZttA7cTqwfx5yG6a2eNMozXUVnvf3qLJ2uAYd6CNXTJ5X",
  "key14": "249go1gngjPPx26xUahd4YL8vjpwQ97kWqG9dqYsnNnqChYG3JQtU1Rv1pa348ZDwtobEjJ3LnWDueB51ot867G6",
  "key15": "3M6pUicYSVnbrG9aYL7MieGdr8ZU4W9CVz99zpewrNH6au8Vgf5h23DYjxC7n7HAmR5364EMqEZeQLExvb7hPa4u",
  "key16": "3PfaLZuMFEnTfrekbjhptTvJrGBdqW1qi99i25m8W9ysi5LKgPQh6kf6ieizoVzzWU6UG8kiZn5Ng3mBSfLPw3f2",
  "key17": "LcawjwZmT4bBVPXF2TxV8nTTXG4KqYkQ8t9Vqe3dL1YRmFmFQXy5uHV7jjgRgkC6FvQVUA8EPsMAy8RKBUgHQXU",
  "key18": "3goYYaLcYkpd16vWaQ844BBBp8NkMgydTPnJUVQWQAWbR7fWcvuV7SrvzYZZnHPQJSLYdWdRHgQ3PkxWkvE4kS9i",
  "key19": "4J9i3a4rR4vhBg2pWSbTAzukpmxTTLEgExK6gqnh5AboyvRuc87pHYdrWr3usBPH17fnuZn1M3XK9JmLSgZbtjTG",
  "key20": "34qbv5QCofMRTMLJR2kGNNBJwrQ26B9BPxLkaitwWVXWcs9WuNdehtNcHmuvQQ8nQ2kRVutByHwU3XKM9dY1CnkZ",
  "key21": "2aFpeAgLU93Br7SWRomJhtWsLJa58nDvw1v8Ly9a3WnnpwUT1kVFViYgZw1zYMayD2HMfchLeB9TyWJ63hsRWpDj",
  "key22": "4vzkMB1hLeytGbtN9qFmwAMMJjTCuXDocpY5FUXhEA3m747SR9vj3wXJJjSJvZLhFSvk6WBsCL4qZnnaEEN6cFta",
  "key23": "2e2nAXYQ56ufkRWNFgFBFFLvx9KDu8S9kjMxRXhEJgi8XjkR8xVFFR8K6pTAR6N95eobQdArn2azHg8xLhwBYKyM",
  "key24": "5gbbLJscxq5ZsUJyFtNfxaCJMqjJsMpUjAkqFvVTgjypYsouLk2k9Gr8PYCfHHbErHDcgjgsPq2KUJxqRMoZKFzk",
  "key25": "3CAzvy1n2MtDWobZas9LHGGUHZwasAyHKVcH9RWz3huepd4jwzDrqGNnCgkG1ALorTuJh7ewfbisCVQe4nFc9rYc",
  "key26": "2UkjZTfaeKCEhUXz2Dum6qtzdSSDK1nvDxdVPqetyUWf8aU2jMCNQx9QNxjLdQvhspUph3QehQrUeTAEWu4Noro5",
  "key27": "57TnjvGpjrircw3WrTKxgaMAMawdzo825V6bn1phqKpjAsNNbN82683qFwtvP2qzXLK6dynb8ZfQL72a873PLpAW",
  "key28": "4Sw8hrPZF8dGcym8RMWZJB3fm1waHQKSNrqPoLDjcsZhQaC9vs7ofBeiWHN7jjp89UVBU4E8uRn6F8cwEJqyAKs8",
  "key29": "3qAsrcSw2yKtZspEKZ6BJv8Av4uMZGQDNU4Mku1aXoNoc3SUBppT2a9Cx4dKAvtDPgSU89Dj1cj2i7CDGaJwVZQb",
  "key30": "GH6csV1JEuqQir5rFLFYYLuxtQXyE93kdeMkivkWH2ZAEEkBC6Sdjk6Y2oKPrNdwrpZtTwZZRqSQ34gdKZQ1oW3",
  "key31": "QpXmQVvGuQxMVLRuJnSdrbrBc76Zw8uMPV4aXyiQJhMNGBGbAn7iWKyWoiVkP5GDZ85Z49GYNR3x6HHgvUxo5sD",
  "key32": "2aK26egRCn6ZXvgq62Aa67M38bVMAKqYKY3ZXtgNG2u5bHXfMuUjdQugth8gc4wbB6npoWAyCstPhqfzfAmzCJTY",
  "key33": "4X1nD9hffHyVhA3kakipodKGx19eY2P4JTShGUqztFVDP69hdDAnei6qbniM58NUUbXe1p64gUE4Vj6bFAYqyMRs",
  "key34": "55fJsitjR1AjEGoZX2PYMMHJABudojRuv3HXwvNXUHz4VNn6fbHZzJw1UTKJLr1Fs52sJ66YZFNCzMo7dKRW8bj7",
  "key35": "Nvk6iq8ixaZhc8x95oHmE53aESVZcLLZMPByowAmURUQJMSSx66PgA9fY3oGHXzadxgjbV6bhFphHHg9BUMsozB",
  "key36": "4Xm8ei9aViHAbrLgso1cUFSiV14g9cW1FUaTrWtsM78FJUaXEjFJwb3JXCzxqSYWyJgi3obUFp7ngKLKFwHT9Mk3",
  "key37": "bApCqTeM5xCug8io5ox5W8uJNzJ7sC2bVA5GnfquiXL6NcV8ZBN2HfFUpDs35TZr4XMyHWH8XJ6J2Q3BchTgKRs",
  "key38": "4GFqet8KqHJt7xiB34frsmYawzCFFGhpJoQgL8jy3GENzQ9Z4C2DWeP3MbhTuJK5Sk3ynFsAq6ssfyBWmvcLxDLU",
  "key39": "4W6s4LBp4gGcXsLRVcKrZUjyXgiX7pMv92aJxnRwT2zZAXWYhoMNrV2qjSKWtvgEQ5tLULmuMfJ5oLBCGt1rhAwF",
  "key40": "4F6BVP9skhQVm95X7xDrfK8MWEVNPEaHrWWQRyQvc491Mc98KQHEV8eGHusyh9VVq7VdEDGDxrXBX1ZkFaiRYhdC",
  "key41": "3Un5sCkSCYtN57RJU2ojxKTW9CcLEsE15binRk31iS9GFcgKgEAMHUqGa6gvAW4HNdZ91ZHEjKMn1vZqRJdQ5X2t",
  "key42": "4hiAzEVvZNppKxkmDHwW6tLqRuDXBZnkwV7HVvHZFtNZgEGNznAnen9s7XxatVpF4ZkaTwD62pqDwiP8JU1CqQ73",
  "key43": "5dE64ZvUE8agiY5j24GZQrMDsGfvhYk437qqVQhqXVtQh1VnCUze5eUFsXwY1fVLHXW77DRAXDqEsrpz6PYD2KBX"
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
