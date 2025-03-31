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
    "43EFuGJPc1Q69xkkpjtf5Z23qwPxHfSKC6rKcxaFvabQ19mNX9K4Ey1jQVoEuGvHzD4a3x8Y1ikxq4jdF8WrJW2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U49GkLsqTmouWQb8T9pMABbqy66tJRmUp54nHPPY7ukFS5fdoX6eAuRiwXZPR2bLM4ycUus4g3tvZ9uoMfECkZW",
  "key1": "4NZ3yPR6NMev4TmYgkGV4vitvb2QN1uuvNSihueKKFn13ams8ScSdPZe8EREaJgL5u5jsLdmHJUwCbJ81oWHvfCL",
  "key2": "2dBgfH4yR6VRm6NrUa9TP5ieWTYT4EMomavsfvsD9294aywWcpNqGzjCHu4TFe5GGXpE9u51SofUJwWsGiA2S221",
  "key3": "3QHQbjf1ukAuuvikjnn7fYpLMZRqvWkm2g95cwQsBpkgwQxWmQgT25uFQYsYfFCfSnjKjHmtaMYEKaRiQxrkLMqf",
  "key4": "5zuNq8L29ZwrjqqNUV73ahNwT74B5h4qsT3BuyXfenHo3jJtJBiocCZKM9gHhSxBhBGpbPwZBs4EK6HNQTkAvwtN",
  "key5": "Q9rgaLqBffoQEVLQhK1dbJcQV7yivMmSZmCmV5Z7BW5Ls5JmFJF8cEtX2nS8fXg5w9wF7bQzfgUTMLbpBaB2teP",
  "key6": "SNEVFr7vCMmpekYMcF1Vsjt9F9YHYyMaxGwbYvMG5G6aGqWR2JEXuE8sERdtXPk5AZKQNu6enm6fWLfrPc7p4op",
  "key7": "2RuLxhLhH41BVVoQGdsWYqmVcEpF2bfpNwA8R8g77VSxKsE3GTUPwvxpJLhuoMnQbyh7y7ju5UNK9A2DUq9p4iq8",
  "key8": "2BqxRBfgQSjcKoe6FBvbmSNdJBC8YXvjqLYYrQASVU7kiRCX7PrguAH41qqRyn7riFHxdaaemXxz8Lfofg4QaQBi",
  "key9": "2SW8mPjQ6fB4RDZs3rCiGFmYQiwhcCV3ND17DnA5qkJag7B2eiDjhznNrW1Mh6zcWmTRr5L5UMJwpoLQXp2dwopN",
  "key10": "24WVuv5WGEyLzBVhVcFUxkgkhsYmiXri4vWGFBHXzjbb9Mk7R2Bz2yLX68VSh3cJz7dXEZPWWKD74P5RrDZkpwsk",
  "key11": "5maAaiNe1EHZrT9YGCRSFEHgMr8ynGvvDNCpQcV3uw1DfjBdRBEJiHsfaEarq4t5pXy4LDx79sayU2b7spwd79af",
  "key12": "3G32QFj8ETAQx9eqsWSpZfKWv1CvkWNhxCSnXySEgjzWFhXtRCRCqAiavtn5hPb6Lycddcoq8eHE94dm7G3KRANV",
  "key13": "5V1e3zXCrvrQtyshD5rX8YvLrjbqiM2x5qDVsxrrpb4A53dKp6JJSH2XX8NQQUv9B9u9DLcdcYj1um6VvXpCNyfg",
  "key14": "4RGsYbQzWAL2jB3qnG29MNTfyyfjTGmXVK32oQEDMFxXwy78iQhJXj3kmKH3k1wDYxjk2WgC3TwzirQG9JXz2bz3",
  "key15": "4ipaMFDF6tCfgkn3HRVdSjTLtWgnjdTMHciDFxhhGcHVjQsku1ybyq3aAHq9upF1pgTCMrcyqkJf7CDc9q5EJaGj",
  "key16": "38eTNTXaDxLp8kkZZoGn1eqf2nNMFDiLRi95iyrW8NJ2LDkRPW3FCKPKSbJi1gEuxVwVxFkbyBDSdb4NCFaxZLUP",
  "key17": "2RyThHH5JW7driiPzS63PzfFGbKHr5y9m43G6svKMGfUJezKDt3VfSFhStbXvJVLahJTQiQBvoNdiZgdTtorVcM7",
  "key18": "2y3WVx2ZyymVfDMybrrhy51iLdWhydoob1r9zrSdN9AF784pJ9PtZx9LADCDPffrxEoQUJj1yT6Jww4mCAiLBNHu",
  "key19": "3FrvSroHFPYJ4AGiMaLrw5dfSv6DJ2x8qEAiYEk2XWWJhz4Yb7JTz25rV169CqnCWvzVHD77P5hCtQPj6nQrToER",
  "key20": "2zDZcfCKHdvfSB6YC2dmJ9Uo4UEugJFiiF1ZDzcUP99snxRYGBUW2T55ZmpsJpKasjKaTWeNxybzp3X7jtcNHuQL",
  "key21": "2hoPBCsf6jUr7SVCqaMcekyqJYaj9AezNP7jPd7nW2RyMHPum8ZyXj425BrM9HdgDXpUWbgxVBdfstkFiL3Tdngm",
  "key22": "FJpNViSgnZyStLS8w6Sp56fCcdGg7mwY4AFXzyujgGanzFBqpzTbj1qykpwGXiWFVE7ah3ToUn5DSRPyZM1QSiV",
  "key23": "4WDpZUKwEUXGWSMQD1oCCCmjjXYHY83HqXiSxbfcDeYEMjcKFm26YEQFWuMzLcxkcLEJoQH3dNw4FRjpttH7qjVR",
  "key24": "5VFgwoRZEcmjTGBRwES1kMwrA41ZfyfcqfU7ahjdSdgQt9cuW4qeMmN5eMgr7R3ZFaPMRwnxGXJo8ihb9PxQ1pjz",
  "key25": "3Xv5E7ckfYMyj3VLbrNQuApirDL9zZHHo3x61FkX6pGfUnGsfboqCifRCcFWAYnAwSrAw8ZwQxYvpCEZWUszDzoj",
  "key26": "33DRxdt1jZgedJiWWq8iVbpF7wd5SzA6zYPWyX8rZmKptQuKJxqGfiHv6vcjxdUBBJqfBgPjBvNLBtqKaPsRogjz",
  "key27": "UiUPSEVs6zqwDdXt1WGddzjENCotkkGvh5175MKN1oCMMw7G1U3jtXTuwYGhhDozxfRSAEjbKGjWm4XcSKM3QRy",
  "key28": "hcRvLMMmsXMtAhFizU997KcSGRfjQAALgecmgNq9jvNC8JaxWuNHGGhW7Ef8vt5JX5o2nVnFrfjiBpzL7ZDYv2h",
  "key29": "2rBs58TZxgGjgRNCL5BJvuZiMh7ig5GuQSZ8vkpBQVEbnp2vC5fjm7R4ZyuBfQHyWnZQAQGeBwg6EoBoMHoTV4a8",
  "key30": "4ADbkGvDtSv9LWSSAbq8QqCNU8CdEu7BCdQ1AAQ3WczdZZAuTriXD5RVf9nR1UBrVsJeqJYanyC7oPzZ5tq2WKDF",
  "key31": "UWv5TrYVn6EKQeSqeXq7F9katB4Atk5f5P1QEmiqzpzjcnxUUyHHHEM6eEvvB2YvSGZunMhcS7Qc6pErFuUQv7x",
  "key32": "5AgaDPKvNMUY9pfEkYjKLQK3vx1RSJLJzs6YWriiPNauusW1tep6byzy8JTyYnU8mXF7NfdEBUscgieSB33mddWA",
  "key33": "5i9F299EoZVsockDuv4xRQxguxDnWbDaCxARERdxPsZJa4pmCxPDdvRzrPMzXfi3jCwfvRLS4QY1og9JS1cR7RYY",
  "key34": "5vA6hjDStTfsY6rNE89riDybsvNopbYth81W4Fc56DUNhrqW9WZgY4tQknFvfXNeE5Zz9E3EdW52gACuoZbHjmp7",
  "key35": "2wCpQNteMWpdZgYR6SciBwDuU7oAK7z6htvQHQC28JdYJ4X4JHXNvvv4kQGF2zyhkdVXBK3g8bbwfntDtXggGqtv",
  "key36": "4ehusdcBJaf2SrK7cYmofiSPhzvYq4wZkkBYh3F6MkJHimkDjftowTCd5j2k84tLCLZdyGpQ7C4ikgfgpPMcczez",
  "key37": "3Z1bAtuiqqRn4YP7b1CxZRmsTH5bqMJzkuG7XWpWn69j9TtKVbuVyMBzvThfgxqf4Xt8yojvCrPTmNWpPdXuS9y7",
  "key38": "3dgPE4AWfsnV6QScs6Ke7nX7bF7FP8QrTTBVE85xSLhT1aXuDHxLmW7pLsr33cm1B8uHZRnuwjSLuG91ABDdDm3A",
  "key39": "RiUFy8TcpekwdZfMNFShLgREuJTiumC1xYzkEdhpJWwRhj28xDqwx8R5QcNBvAJQRoFZZqUbz1AmXoDEa4VudPM",
  "key40": "KjwKBwJte3Y2MN8noXfsaeQSKJnUEjF4x2fukX5SZsn6e4zzmx71gBfd5ptnbootrMx1NsGB7Cks7gDDXj2JbAv",
  "key41": "4yLZ2JuEKMchS6zuqxVpe7bgd6AB54ctrkHSvn77Vu6X3TndvwuSc5dAWMNMPziWwkgK4afRU4AHLSLsfp1f62e9",
  "key42": "2QzuhE9pon3kijL8dBpi8E61oLZ447v1sXF9MDVATGLNYqfK2HJ8EdH6zYoW2hpzgXxiF3DAEuZfHjmiK3qnSDJe",
  "key43": "2JffDAXjbTxNKZrWZSryKqRuJMToM3BFDXpiL9xgVxkaKmDxvmgJGFxaq8TFZiy4zCRjSum5Y9ArwWs9yhMpBzfS",
  "key44": "2qWp66UGp3CMwJ5XAMbRfA1jznSJD7Gub4k61XUp1PcS7LMw38oUYzWpXeLYmFJx6BhW7UGVg2zfgEbaSKkFF1hZ",
  "key45": "w95zpuoEjWWDbhRHu9CEaeCx14s2vpHvRMnsGu61n8dJogUYJzuU3ihNdym3F7zQHjk6BAjwb7Tc3eEodb728ji",
  "key46": "PrWiTx6vCP1rJ3ZY3CJpB4wjHQKEAYCXyufF9bzcXki3VYpTnkq2vh4ezr4WJNjawY7ZS2iX51W5ixS2uhgxE5Z",
  "key47": "3FnLEungr69QqxQkR57JHEvvbcrVhJLVnJBpmLpHk8Ysh8BXeLKsM8StNPKKZhythjSFzZuU39JyemnBMhx11yNX"
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
