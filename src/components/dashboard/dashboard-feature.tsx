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
    "2ESzguEn9mAiZU3sTQUMjx26VinAEYd9APuKV35qqWSFmxUikXD6HQJ43irjZq7uB52uajgUA5cT5Rb1UfBM6ame"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZf1ZTHr1gPHyfPZJEfHFsSjp1JXthD6HqqfV8odzokmjRk85FZ93Bx6FoN56chMEupkLmD6isVQfHaZ7vZQ79o",
  "key1": "45tTuKFcUy6BaXTS7wVdzoS5htRaHP4uXcYWEbayQ4WSDsWeLF4oqKgXW8S6isRkXszbcuBezkvGi9kxeJMmQHdx",
  "key2": "C5VFSet8Fy7dex5kHsTFBqK9jsYQUohuYHpPkxaaQ6Jzt2JbrSLQwLMNmWzDtvMTioqyeLro1rqEZYmSeNJMe2F",
  "key3": "2EreAS8QDqGWsB7KaSfBGSNBd6pNjQcbj5T8pyiAd6AbzYD99DowAi9SQERrLNZrfv9UKTKvCE2k8NB7DusZKVDH",
  "key4": "ScLMVj8tijvVa7SYALi8qvFcb2oJb3WtncTUiKiW5R9XvUwAWZT3faWQeCyHx1Nmtwjk1nMEE283Y8JWtSsvDcV",
  "key5": "mph1oBUNYap7MDddzKJGP8SW8dxqpoRLbsWx9eA8FYbua4kTyHGjdJb8r7uBZoCUZBLtnL6nLarP91Z141YzVus",
  "key6": "5XHDqNyrWydBvESDkvbAEsZFfTWdAPicWT5vFQLYxxYKawf31H6xEa56WfP8onwDa8QLEAUrb7mwUAUxhiAv7dfP",
  "key7": "2PaRPD9TEmpv1L4ArMQ1vRzJY5jdLyoPnZfQjeCS5V8amQrcqXbnjDWGA1cWEzLPwqHXFAwUaqorQGVqRvxr3RM6",
  "key8": "5sqwG8tuxi2DTKaT5iG19avvrz7AKmKbLQ1Bvuef2BUofYFutTnQJgzh8r3aJ1XNpT58uhrzxmyMe3iBB4y9nsXe",
  "key9": "38uYvCjUFTJq4tKwEhdB2P2dJaCjzAtQfLLKkGyFL9TBtkZ4Jg1C3GFruZuzx4DdRoLVHY6dQcB3BcP34j3R6DFn",
  "key10": "5CBLV8fU5d4KqxtMqq3kfn9yvvvp85gyHgiUbKhxwQc21Tv83X3ZATFFEU9bix4QiJScHa3gxKMpvjzT28Z163eN",
  "key11": "5MbFMNjPAM17t7hAgfrUg7936151i3Y7PK1JMH5EpgZLy7F1zS7MNyoxF6HbvAuwTfkDyyREPtSTip1mqzpvDJKF",
  "key12": "bXMzYwrP26ApkoyBeMgEg9DXwz4YSMShfMXKGthmyM3hdpiYm1dRcjVSEVL3k5UxjVRvcinkyH3Jz8friXYvaDz",
  "key13": "2Z8iRstmUchBckoGfgGZT7Kzwv75FcueaqxpcHJUDNrLJqPYRHjqhjRKmgg2niLVkpgpzNvrsT3F4L74ZyRxh1Av",
  "key14": "5HBCFuw3xfKRUhkTUPrxhPuwMaySJoc32xXbYb5jVHyhZvXhaoQV8Z587AuFVsJBRQJ9LuAs2ayXfmvyg5XJrXT6",
  "key15": "rRw8joRckAdq8eu83616BnRgrq2muT5chMeaT4tifzmzJyf4XCUJ8GaFUvwHEbBN9vXUYDTVSmmcW14kBagonZ8",
  "key16": "2WeRUmgMVToYZtVm7AWf6qdD11hcavsPyaQDsDvSfT69btpgZVwM21VJ3kfz1yomfXPhTMbjQ3cCysyvxF89ECct",
  "key17": "45jCZHiTTwa1sUbVoebVQjsHNQs2LEtZpaxCuB5qT1QVqMeNswu2trzWLtsJHpQNmc7i8FUnzgwDqAvqm1Yx18FV",
  "key18": "5CjL98cmKZ4cqAThXEjWDTBkzx5TXPtqzwZ8CniDy5PUX6i7GTCqxqfRkUprQqgUcy22mgg8Y4J1sy5kYpsQVBQo",
  "key19": "2aF3TysZyUajDVAcGKvGxj3Fzojx2E8gXcjgsXvCDxCB8XkWDRM3Au9FRxXEYcf1vjDF5Mv8EAAYHGHn3dinpZUQ",
  "key20": "5rGQXjWxEijdcVxG8TFQxrGpXLLJH7qqyfHon6gfXcfQ29jr79RnSLn5ee6Cjd4a7Pogs4zuJBZgbgPrekEaEWhi",
  "key21": "2npwEbJUscrN55VzetSZxuYvMYwdPJGqoSQRr3BNmSeBP2oEijf1ztYaZ3VsJDWxi2fBVPdmvjq247SfyN44895A",
  "key22": "58nrZvSgzEnWQrbcb6QKNSxQAJ9Fud8KtAR4EAoxZCq5kxTwGMScCkMXHjRM5kVXSaAjZXSC8Yuh99xcz6BeiJJn",
  "key23": "5e2EPLmQYovQrEdwsy6isx6S5iDzyrDW1FiVmKKGLQAhV6EgFsG2DZA1VgkVyjNPtWPGDDom5pBY4sJs2GHNhL6a",
  "key24": "yryyMVB2RQxt2WQenkdeL8gamtJi4V4skqeFE4qEcnc2afeJvW4h2T89awHHpFiFYdH5TUgBsem7pK4oxsN9KJo",
  "key25": "3yHZU47MA5THdzjrfMNJS6bc2evezJYkWuQZ7rwCgnE6j7qqphpdXi45hdxeMS5ZC9ZdUQdWdFegLKRoLKEQQpmT",
  "key26": "4DzqTX89S9KwBMJgbrix9nQ5BX6TuedNZU3wb5Njp2LRBmQtHrszpMRWJ4o9ChiTn4AU74NtSwrA2ysh5MYeG94A",
  "key27": "3oQfhgjR28fgfC7io2J7nG1de8BfUv9zdGvb5NHHfMgYKZPXQ8wrni7kq8V2yezdaUVYtPTpVht8Lt1CL8cmH8mp",
  "key28": "543mbcDWyJqzMgfJJDQJv6SUeyNTkGsRB5aQb3ebxBsheSaHSLZusjezrWYKAPQAKgPAHzCJRfszrNChVHd8YY8",
  "key29": "2xaTjYCWQeSAZgfH1DNnkZGUAC5aiqbXnAsUfJogArTZdE1HbM5f1yFyGD9V3sVkp7QNcpDvQsnJSYPELZHYgT3x",
  "key30": "2DAec6bu5RyupNGv4xWNUTyXTpP64ZRtgMhWsPCgsXPg9q4t6fNPoQfJLb4Acf18V4aaTjmWYNhzd7RjcfUw4CHB",
  "key31": "2Qt668n5Eh2p6avENLeYuMbsyvKwKbqJenduEDUn77kHFcg6LgTSD3nGkPCBfqZzqvE7Sy4qFhTPBpPRZdrMVPAs",
  "key32": "4fictc37YPY4hSayqKCwt4cyzarbv8B6DGM6DrsgdxiW3e7BGzSikpHH9XH84aE6NP1ZUEgEvAtcZeEaK3Wshwrg",
  "key33": "3dcPZCBjQx6jWcBsUYSJ7hehYdGhC7N7nafjtRc6Ggn4mKjVu3ckZbNg2McTPiHoSCE3rS4RMDRDaYZfxrHpeMB2",
  "key34": "2LW8CxjbFMpyFwrC8yLyQJyqYWoJTYenCruRWyyydAFaf9ynjKLi27QBwXt5wB1CVMzi1ueb8qeSE4mzKWr9TBus",
  "key35": "3z6mf7jBkDbkYmUoWqSTkbCsJXjY2bz8nESKEUzp2q3nygzCgQbDp2qeBcF1waFuwVQP2jsGDXNe4Y38WpbyW8WT",
  "key36": "5Mq5Q7chRR7CXThFFuwqdqJCZprv5vG2yxpaUPgFBkHxaYxmPgq6BgRAczitzNi4URdZM4DooXwDXMbCWVEJzZs7",
  "key37": "X5Y7TCoH9qT7LrnVh4i5JBMjvZUtX7tVL3TLJKsfcRBsF3r2zdS2JP11L3rmyqEhTpJuFthZXRof7AKBEtYbBqV",
  "key38": "54Ua9uECMMnrQ6wHDZNkaUJ5JSNccfUDw4NuKmvEJQP42BrTXeXWnWx41XNqZrc78eeqTwSjhXMyzt93igkcopTg"
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
