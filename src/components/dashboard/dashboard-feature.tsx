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
    "2aFzPLaVaiycxRtWpUSNCTWWYZmLWEMaBBvtE1kK6PMABqHRJWaRvYYudRoR8GCDj6DbjdV75s4GhdofMrPP6fQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fH18caoYDvDoTx6nk3sEXpuqwPdScZM4wBLkJci5KLV5mzQ7c7Jy2n8A7DD1xMMGqfzNYYNkfoziQsC2ZAoLEDy",
  "key1": "2tjQ1eGS8PqWvNbrcjXPEj5vjmFsCBZpKZrCqWthFU7Qxbar3G8nhwy6vB7KuZPXsoTopoBYW51gKzDhEQgHjniM",
  "key2": "9xA63EXqdrZx9kPY2WWcsqHXUTw9w6uzCfbhezXLaLfVpDB241QM8vrbwNLt22boJiPzKNm1RWXbfS8KfhptbBr",
  "key3": "ibDB4KLry1pKn39kc2YHSvhy6qpDLSrNUqVi9MbwGNZZUr8Hfcqq5FpjDUdwA6SBuxywESqfLW4zPWkghPF7QGq",
  "key4": "4kHGXKyqchzVV42hiTeUnAyksrkNQkKr2qHWJjCRTjrDH1hfLULy8yoW71tnZ5pt9nkekbYiqpGST6wcBQZKbqhN",
  "key5": "4s3w9GU4Xr2GEPAn5A9Mk9JWqwrUyFcosMKwnqMrC9m4sjg39pq5gePiGJR1zQjKVJJXfgyFRvzh9jJjjBM8q8fb",
  "key6": "52Hv5aHUMTFZgf9twgm8yUY5upYSFmdsiPa4wXQrbGqGXv1MQnRv1LKn5g8bnfcfXfZ73AT1WdHEngU3D3MKCDky",
  "key7": "5ZsNok49W1WrsMyUG97LPXowJ1N4pHVsCyNhEzJTbkgksoRzQeT3eh3up9mPh55LLQybLb6otdaXXgF753Ve7v6S",
  "key8": "LS8GootNV1xvz1mxRCNrhGc2JZMiUUC86GtAWqaC6ckxD3u84zGwJjh2rPRU8LeFYq2zfnKDthj11avaf2ecVSw",
  "key9": "5DeWsPtnKRwkoYNR2pvxLYzbYk7MkdLHAmKq97KcdoTyhwHgeRmnXB4MbjacrGD6Gvu1wBNSJEK6B6vN4JGXMaVH",
  "key10": "66yHBdcWTC2x4sVa4CNQMct5NDuvhcCHB2qwhpwDeBaUKbKBAumhRFa9xP4PBu5TLKjxWwHF4rzXYm859kaRkyMT",
  "key11": "4zXgoVW772shZ7ufK8WD9wF7rD7p6FDic79N3DL4QsRzG7m5q2mY9DQQKyEJpS2jDSfhLeTBKsFKb8P234TUDhtN",
  "key12": "2sZQJW5KT9ViWBfYbCZXyij7cwphBSYngDczMCK19t3b1BnyEjSg7Umgmg5y8ZoJWYjwYPHDf53W9QZJiwp66XA8",
  "key13": "2MFpwDVoNZce1nP8TAERr3NsiQGLr9bpzr7YpjSQjWcP8wf7BiTnQbVSosMH3V2ftaXLdQ5q7nmqwgZbsAToVCTJ",
  "key14": "2boUhmyfVKwKBcHkgbgf2nnyxV1etXEYp3ENy2zaN4EGUH7NSwmwjSr6SxbuSjzgkLcH63UHdBjbjgTQSFEhvtas",
  "key15": "5G889RiF2gnACs6T6aBCjfyfCmuHkpjoQESir5VmjEFshmi3kopDUEQ1hra1qnHuihzKohYLgCvi5c9otza6rmFz",
  "key16": "2v6PAemjNmUXSufiQRdtv3w84Rc9BBQPPirn4MeBD5gMEz6diP37wfE2mXBiTTW6EFX1VbkCdmTETcKvcG8NLw9o",
  "key17": "2XXmHenfs4vr5Je79uEgv4PLvSDoYrtxddyC8aeQsBmFzKDpzoN6DSF4x4tfn9aJVB34oYabbrDCAuKkszWjWQsJ",
  "key18": "3EzhA99PMYvdWjAuQr5VRrU33DdGmh6Jb8K1dpY41LKNKk3A8jH1EBpdBFuP2qojSz4NJjP3yPYW5AAV16J71Yk9",
  "key19": "dLe9aCv2wEoPn4KzNpT8AgYS4jPd1V9qZnBwrBiSPyheMUQiNUErZsGL4FLQ5Ug7Z7XzDqhDskacvS15e3P4rys",
  "key20": "3zbjdCE4hLJ37kyMLujusa2pt1tA3baGEgHQz9A1PwqZvqRj5qYm8aEjaTNpLx5kDKgauZPiHVMguH78L3h7Piv1",
  "key21": "4xuWe5yZ835gQCZnukNT1syXpKDi7YfHtJKZ5qKwWAC2BtuAqFhD5wp67AkMxiavYmaRr4Ki6WnKg9KbuAKoBhPj",
  "key22": "C5XHETSgRxF9BqT7yNRr8qq3RMX9RnpKcw9PyusJSkuHLUdGG9CSkB4WHWowofzroXtD1kYTPdHCrwMgRL3JHqA",
  "key23": "42bt3nU1PoZA5tzfNatNCacxsRfJLbk8MnLdD7WpRKg4kJG9JzvAHfLYmzqmu2p5rzizbR9Puk2KAzUnHQp6haUu",
  "key24": "iWVUFxJwQ7AfEALpSo89R1SEUHoZqrST6HtnrqsifpcNqwWATnQH8zU8PKWC6BQywQrh3KQGhqV1Xx9pTptyZP2",
  "key25": "49guzneG63mrhi1754VYCd1CqsMX1BzhDtL7Z6R1QZKbrAavHpAyaKY2vAay33fq5D5ZpJH3TYnPht7JDrHFuwu7",
  "key26": "5LXm5hU4EwTDqTerJVUEoWF4Etb8JdAMJw9HPrPexGtuEicChw39aTqXH7YaBKZEFftwUToebjtG7XkzgMto5kki",
  "key27": "4RxjY8sDa3nzvDjgQBDEMCQhmY4M4JrSfP4XWHVhkmWHEdUuoB4gucG1JmzCe1xEdLspNkBYcxye9MMgZhnC3AzA",
  "key28": "3sRn7G7K88QL4NWccVWCk5LbqCuwrfQs9fGUE3vRFQXLctZ1wgDX4TNsMr9ub3DYZxGUQfNwnNoFrqGpGqZy3bV7",
  "key29": "2wsM7jVPYwG5eyAZjKAXSMhgUzZqgEbAyiuCRU3fLARYkd7uftGHafWg4WJafQ88vPaws5J4ZLE6aZEwPV1P1HB5",
  "key30": "b8EppPMNw9vDiqQhtktj3wwNKfkr7PY8JArNaLMJp1YxaFrYScknXuXKG1siN9gvy3khhMzBLZ7SEzAWRqStLfn",
  "key31": "46ydcBVHySmw3ZUDrRFtyv79gMB2uhrzy5aQqGrswTN7LmhzLy8hrBhCx14ozLUagXL1rcrsSEUuqouv6uHTjWPP",
  "key32": "4mn3vZgDQHzPDYACWZERQDqtoAA9agnfEouHmmzzQR6ewxX2KYwyh5J5U4F1xwN35hrEfZXKrpwM1CpkBxU7tD57",
  "key33": "5Tmga5GsiNLnp5LctW2L9rfzUjvggfoMDZL2sNHYBxFjk26VdtVUMfxoPxUPpQgzRnQykZL6sEYs1bBLvxnmLDR6",
  "key34": "4ujvYUszsPRaDE5eYuBE88yMEQKjuwSR75ge5QQLJcPjAb2p2Eywz5anYjq9FSJTfo8SYTa11XJU1dT4ob6NuxjQ",
  "key35": "5HXL71vxLqnzULRzUAErg7XQRaHFMcYhnQfbGuW8ryQFMcmCocWWcAyGjk214eBDnXWqvf3t69Sfh29EbERaTZ7c",
  "key36": "5rYuzjPNhKExvYrbgAXzDcUWP264fdBCWzcLbaBUVVFeTLTj8t7gpWxbEBtnh3w3dWn9aGueBYqhHgMJfrjhJ6xA"
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
