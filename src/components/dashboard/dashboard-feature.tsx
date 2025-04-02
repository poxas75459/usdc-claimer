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
    "4Ny3HhFWM291wW3PL2jXkdztZx3pm3x83YCN4gYBTVh2iPcS8ksUZXehrf9bQp7WzJdM7Kzv72qXp1vGUsXscTQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625eAMX9x5zNikPP12zSc2uBWR8wUrLq3tf1RpgPGP8eA5sQZQXudaQUDbwGgNFMAZhJCug2sVHKLBiHkHNhrTYf",
  "key1": "cfLqFgYdLTbAgoW1RfYDaJUniNXhnUBnidFadHqLWXooUW1a4A5Dr1xRqvmXtaSTvyrwaZ8AY1esoDf6RaR4jc5",
  "key2": "63tEnPpt6mq2wxNtokRWDFoSGWwR68y3k7FCV6SakpX3iejnGTZ79GRQ2G5wnAVzG1Wrnfn1ktubserw5G2r8rav",
  "key3": "4e1YrC5KoDGwFfuub9XaDV2cRy8jZi8Rwg1WFnNxGW86AubyB9oV4PMRokUXmMNa96so4RDHZreZQANtJxY8jwLA",
  "key4": "5doMwR7zXQE2hXfJBxGjA8b3YGxAzBfVx6NDxuMey1HZe35gHrzJGVPwAPz3JMWsPgZZBp8vitQeqV7hf9BZ1p1m",
  "key5": "4B5LMdASW3pYCxEcwUZYFSZGoZWPCFwZRDjzyPs1JFj2kmDi3rnsxWHeXqwGVPqVXVzn8VawsrtLdtrVMD8PLAsr",
  "key6": "64rEcBi4rKCoLv7j6MZsHEXsguZ21vqXFZNXWTaEVErtLKgqyPcSo6dLk6H9V7sU2tZDhGp5nBgmUnqCf39Ge45t",
  "key7": "2SnyhywYZJJ9JwVat76zvLkuzeK2Cy4xbZPhASnk3s25mSqdnwfwXz6XTG3J1jVc9aKaYAPiagNxtjzYtggsHwMG",
  "key8": "5i3Miuf34eAej5PKG21nSGsTZpgVjY2G64rUb5mtJ6zkoTk3cPdDy7PZDJVJX2NaP1RZzku9rBbLzRaNXJPFcjYC",
  "key9": "3X1bfPngJsUQiaEmtZ2koRLXATj1AkLFtaHSqVtVMRoxBKify6D36NSoaQU5AuAMgABE14NyHT9kgHwph7knYPzY",
  "key10": "7A242r5Bq9g6TFXgcjakim72TYYxQ6Ee6kPn3nSgtnT2geuHbV6TgDBNXAC3BMAhpAoX6KGC6AMBF7upvrRKt7X",
  "key11": "3FugiarA5GutTJJ7bxmFnHtX2R3Ry8qgfXMTPWdg8Zsz4TVxWrDHBoi92Uz3jxQCcJTV3L9HsF4FRDuKMJTv3YzR",
  "key12": "eQ8sWsD8wC2H8F5kZYQV3ntsKLhvNvPjhazjRmA9ogzM33Q5cCYzbmo6sVYE23Qj9Mga99Hii6SBjiGGHnKcD6s",
  "key13": "4WmB3LpVnZyuQK5BRuNHZ3SZi2Ge9rknqvRsVSfjUwLQ1Vw4MDuDakyNDiszYtwtXqaGrBhhj6GHDHYRPAhS7tK",
  "key14": "cE1THFDcc3646xWgamvLN81mQkapj43sqy7HVQHkBGkLhNjysdfHh1CfCoepqgajsXbhjUHhi9CQvL1xXJbt7Ve",
  "key15": "36GNDtCwvEuuEqpp2cvFaUJrS1Z6wBrtMBbd8P5UFo2SWoFoitDkjr3VK31y9WtPfxfH2q2KxdjVK8HcL7Ck4MKV",
  "key16": "2HYKSLYQcreY3wG7BDrJtHYDcjEbzdyeHmUQMWt3Xti8S9xxPJN2JGJUHrqfVuULqhDbjDbyUyBb3YCKLb3YLEhi",
  "key17": "2yWrBtmQG8HE2MQJveprmM5Fmq5iekjZMSmHqjJhY2P8ikV2BiHsy791wutFxz2SMBcN2G4SfwmhSLRgQ8HgtFqA",
  "key18": "5JyLc1bheDdB1ZWqXS5yUD76ZzWWTzy7FEmnz53zvj3UA9hDgt8n6FqRiK2RA93uYFBVPc45rohKkGhVwo7to5ad",
  "key19": "bb1iJobdvRXL8A5oeR3UgUXJTfMAtzZ49y1G3ZSKXJKeZs7GnR6Z7PiQcRTN3p9ms2hVoAscnP91Y1bD6RAirmb",
  "key20": "4dEGQpr6jwDuCZsG3jgs7jPiFg98dPkPJrUVuMXrBgZr9z421ZML4XaRFfnxCSRJqYeBCrzAVZm4VYVWQGgDGrmx",
  "key21": "5BSBMzPwS5LNH9mzRdrVWerY5C21RPzvX7E3af2ETW2gSwgtmfs9WCJQN8CW2D4WXJdnDBWXE7Jht3JfP2D7s28Z",
  "key22": "57KYcJcBhSggu5FuQjK2EWSDnPfwQPmQsLF9GY656zk6CeRLhoFBke3oFq2eUGu3d9qqhFHfPsFEau49ovF8LVuv",
  "key23": "4BVuLs82pgnCLD8NMUzzzmJSvepFcgjY2PCm6jMuorkSzEJouqiVk7hFmKUpxivh8h4ZJMeA4DdkgRqeZkpzezuN",
  "key24": "2HSV6YdXuJ5dPrWTewepa2Dy7WovxuLzVSaPYs5fLRoxkM97t37DdR3dc7hFdebngWcM3nsAT8HC7mCVF9RNBQTe",
  "key25": "hWLEc2knaJB5patHcfT7NaZuvY4VyqGok15bTCHGuiL7Cwep9GdDyMgbVc8zRmTdAqpyGSq24v9hSZMw1cXpsyq",
  "key26": "3Z4iz9BHHVbFAVjbh4FLyPS8aY7G41XD3GPstvDe7dM8o29zd1Q9DhqHK4FQkA3xXGLALZtyof84EAunLiASkQWS",
  "key27": "5q7gXasN8qt887UqqKcYuAciTftYnfgtuJy6J5zjHuNe5DextavgFaF7NqLtSSNqdnQVLe7kHc6MFfv7HpBwujAz",
  "key28": "4E7jaFkfptQeB8UoLVHkDDR48pSriquiri3CBL4MBxMJyHs734n5RjvFUju42YmAhr3zJmgNKx88d5LCsioPdgs5",
  "key29": "CR1N7U58TmM28jiDmL5jaF1h2vGKucwEVGqu7XTyou3zyz7bH9YyUxapzGESoUiJ44oK4F8K34yNSstxd5oVjZV",
  "key30": "mT1zxU5ZQBNrCVPmwrELfLM1BJnGZajehwKtbUo8ktphfCNpCcpjaXno9ccfrmcbkAiiRFztv4uiDBV4pybLAzE",
  "key31": "5numA3fAt1ctncQMokQMFy2njWDBvcBNHtZv48CDsasdcFCEnYCBbXBYTytUDGeWUTMyXaLfFPx8bc6aasoafHX6",
  "key32": "4D9WrYhskVXtyR4d5wu8is7EcRpohsVkLW9e5CpRuFvvkw8oqzpRh8MZo2jDmCvQUtHakMpx5qFFK6ZNLj9CjyRz",
  "key33": "3Ssz83unUbnRpepzKdHUbfz6FhrWcYv2Lb71sKN1xeHhgSUKEkn6J8bKYtCErisjGm6XHUjUhkTgRwdUmb9dH9uR",
  "key34": "Qb56VM8PhPmUvHFvrk6Aq2s2zUY4ST26LXbLZw1bF9EvvmkoYNznwU5aSEQvxeD9hv1xgvGGAhcXNdZseMdMkJ4",
  "key35": "46ekNKgycoSjiUqGAuespQqA68tN5RSmffAiBRx1P35LW5MpLXJMLLPsf3EztT4wR4v8UWLjdvTmyEULDxkve8f",
  "key36": "4V8F4SW8hgpyQPjnzXBBo74a8FwrKt9sm7tS8vuuybVuzTB1gbvCtzzC2pzDE2LwSejj6EcSvYUq4uVCH3k7f4JQ",
  "key37": "wZdxcitoCEcCNZnpWwfMkzYLca4EAhoUGZge5vZom5btXJnhbcnCVEavkoAFhbNC3kKNauhReYL8CqQhsVRJKLd",
  "key38": "2732uBJNmLDQH374uoiG3kNBYRNSQBZnLxAEYk2N93vsWfejjekZ1HFXeHTU1MwnXxg5uXThcKgKpuUo21zgrE8K",
  "key39": "4i4bG1F5BmybHRorGBDP678ERCAojykKkVU8UE5hPGyFfXik5FUifrwh8AgrngqAb3kAfm725Yicpxfy1Hiv12xN",
  "key40": "3o6owsgU27HgwHhXm2RqhZwqrGnLWcvH35aBAiJBrNggad8Bs2HH13wLCpbQngXXTjToes4b4XdUri7FdFrZAAHb",
  "key41": "4i4dVx8TM8egqdvCHnG1YTrbNzycAP2FAbjeeN9EpVWNNZECHRFmTiNDdv4V8oU7eBRD6Hny1EzppgfXQe5Zi4B5",
  "key42": "5D9tBU8KZBX9S88hN4e1pY7r46wZbTbz1v6aPiDoiYQgCougKsiZaT6p43NCd5h9rAGLMtLqdBE3sAYyG8kLMiU5",
  "key43": "3BfrjZXVqTvbAcybZUV9MxEZmUhL1tmeAXrvuPBMWbGgYCPum1dKGBZYqADFpG3dvqxUecaHzcZx62wnJjQjbxtC",
  "key44": "2T9pFZmVvbf6kwfrptoqGrmfk6q69zavFF1igbKAKY2eFKA2vitWZpeR7bL9BzPHMaHtywgRa7roL7Lj9TDGVJc6",
  "key45": "2f1RPeQZh6Tdr9FRcXJB9QVDhvdfaAdSy1RuNiX9tpF6pJCudVBmZPe63Rdj6x3XRJ2kgoBdjPnCfZUcEGvQ6a3e",
  "key46": "633BCP44kbypDK5YhC5Ewk6HZrU6TWw1icDKgxZXSXRUMvjbQGFZfunNqNYV9aavNt2nHcnmJxexjheR6CW7KqBH"
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
