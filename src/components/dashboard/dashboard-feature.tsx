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
    "yNf6NgAWfUuqHwgKmoUUCQKEk9pRbpGCXB9dp9oasyU15Fw34LSFDGDuALSWeNGNQqvdLL9rfkD3K3WK3Rj84nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44gmgQTzDFKa479aP6qujSHZygvHsNjfmNTDSPdPiRk6pWmb23J3aNa5T3dPvoZp94vPna7utpqsUSnCtkaHBzP9",
  "key1": "54W5mdgV6zZ4RHz6wsdXzjVWL7KtBxY5A5hG9rdKdEzUGTRyhVJQWZMb4UwkmaDEiPzoWzTM9P7j6VhkRpJ79LDN",
  "key2": "LVrgNZBiWWJyNvbwj6w94q9oREu4NWsvbqhag9hKb3epnSyNTYTXp8V2m2J42V9EeEZXNbp6hShu1LuwkQBkAKj",
  "key3": "4fDrhFXzwaqLVfBEcu4qFg6G3v3t12oGvhLhugU6WAshLmd6vZa4BuhQiaYVXkt8qfeLFVtBE3zApFq46AnDDypz",
  "key4": "8DrjPLjMAhbdiNqE3hFcwDXaHwicpGHrQn9FWFit8QaRJ1LG8XCmKubpeHshnSXWm4VevPgn1dThynWfHyC14sg",
  "key5": "2v5Rzp2DMADYVHwAs9L75LvbBwAfowDDx35XUpGfXKYGFe1xt2s21kPN4QrhcpXRPHQHW9ErYEXWJknTbJtTpkn8",
  "key6": "41y5AHaBngypZFXnp8RpHQBvmTSiCiFvoxfQ1Yyz55kzpJBeL6Dr4t5LdMcAvfZwSDGCGJgacex2VudWkNeZnDR8",
  "key7": "2FK14mti6dmTQGtvgddC7pXYSUADLQutDg7NY86GcoWmw8thatDy68m8gHamh32Jmv4zg2DKU4bEQ3nYj8xHvYkP",
  "key8": "5pRY7we76pFC5TwLDqxTHy2WX1Zh2AkpeyABUZR2sP7z14n2ckf2aUB4qdUPZmfq7yuKwi4KqMFGxNrBZiizWLKk",
  "key9": "2SS7JdizzycxSa5eNN4oNbRUFvEPLAtNAMLaBHvW14w6NTeyW9NepjRoXtisbA2A7nXsNB6YBszsUayjzYAbaiNP",
  "key10": "mUa26YEbTKwx2Hc1h1t5kMCUceZtdvDXsroWpGyNC9HPWaaxSzKMuBwoxLXkhRn4FXWpt76PPweYoo1XmwiagPe",
  "key11": "25vxwwWDzzUkBq4qcQvVQzMfUhKeZBzSTtfxWPw2Gy5oFWZYqSVtGYNUbcQHzwTV8w76CfDh6pWKT9jxNTz8qq9z",
  "key12": "5J6ZeMWJNXQNPQcVF7wZ5swXYsrFZqeZa7VKU6ETQ6ih8Wb7YgVgioum9VAUaaVLDnwyYopPubba5LdeCHx14FtU",
  "key13": "3xunzo1R72TrGWcQhErt7HiwXHJUzEUxVpYViUc7k2WYpMZem1rakohbchvExWbzEuRjXvuELtCJEawyWTB4hNwT",
  "key14": "4MiqhRET5eBw6EYeebvJXjy9hmc2Vg71NLMHM1JgPAPZGi2QT2orycwVKqcTdM3XRzupSDHvCzjjUk7vEJqX3EqB",
  "key15": "2CkR24LWgm89pGfXpjUQfDcmN7gxLhqndHY6tQKQDjRkzULXLW4CrWNaKucHAdL2R8gVKZaVEfaLapxyJ2R4uB8C",
  "key16": "3Jb1Ftze4WduyoAuRo4RMCQqDK8Qt6LS5kzZcwzD34eKHHsUbLg3UZP1B39ZUGgdzcgZoXfKkNTkhBnJvtrX2oxC",
  "key17": "2jFi1QQnvz7kNF7zx45Nwo2gyWTQ12mm5JUgjGNQCXWVN8uuC4yMiVE14kkhwfJyKr14xUVJqDb65efyA5aar45D",
  "key18": "4eCrJt3Dat1Rxubd7tcwYfmmTtF1W1ozP9GguJwP7gMyxz1DUGDGfhrmh5KE8rvHau7Gyrn89hyQUmJ8oHwbePcV",
  "key19": "3ZcTETMbwVi3JtBxNfeNKmZcuegWgWA5P8FPhhYjnHfQ1V1qpoTPeK8WgzekMNiKXjfA26iUgoTMqAsRu9Q6Tng2",
  "key20": "2coXsKtAJqknXSsq36GtHFNJWXKQXLtCUvhNq6aEUSu2jVbPrMaW3LJuPx5LDH5miPNrG5nT5Bk3gyXFiptFwzBP",
  "key21": "2yH4ns8EJQ5oRrNxAUec5dQsMFc9oCdvhusEq2nd7XmikDWcBoNEJxioETbr2DE9DMV1Nn6s79kYBXQRPZp285VY",
  "key22": "3W37QMBUfW9rKK1rL33Aa8f68gJcz2xGvzB8FYoBQVxVwiXZnqGhqsZ5XzsWy8R3eatZBb7bXJUi8hf27zEM9qxV",
  "key23": "4UzCm8FCEUXhXfLcHDeV64kpGv7y2JAmZNbXF1CxoY7f8MciuQw6hq9YaiNJfbYnUyEhXuQuhmmrXYNFnwjyuWCU",
  "key24": "3hp7VWDXHFEau7DqC6ASAKzYbedFSyiFUpWGt2UEgdu4g5vwV2mQv3BeJj9FBqc5eaJZVSyHgmeqtDTRxDCRvwTS",
  "key25": "2dPuhGr8Y81ZYLfhYogEZcKSwDyFfesnnY2oTmbFLfvx33QLvsxbLdarHxEWWvzdSkzbWe9P9kWfM5FdmWNwQy6W",
  "key26": "f8aL6M9gcQ3ZLhzL76TA2ZFC6oEc4qAV3rRf2uDfZ9MTs6G4t4ewp7eHynp2EibzNg2AkFi4VffXsvsUq2uAK9G",
  "key27": "3XrqkYtZZs2NZpYWyFdouKgSwk2iD51GM1HZXWoQi2MB36JthBLATN949DBeDQ5H9jKcRKt88wLdEJu2e4uAKYGf",
  "key28": "D9p7pGfBy11ohYGrPmDXW1FiouYvSiwVd8ctpg54AtH43n3aETXbgH38PbPjYjtEmxCZMV3pJvRZefkB3u4vBUg",
  "key29": "2ueAU77zvAHb5fhcZx4uEKgUr7FYGwmL3pVutTvGsUAKeqrau5Ue9yNEkbS5fTvC9Zb1HbAE9npkqBT9MbhgeYSp",
  "key30": "5vnZcLvFYLSgxCbn3gqqWvEX5a4q6G29Gfwa2BYL4cth7a863yu8NFFx2UxMCFXZ7NUyXPdjsqZtb9SooqURy8Cf",
  "key31": "EhqoiPujNG4Ze6AT8bZTJJUfTGaQaLxed8Moy2n4P5tLfN9Ew1xnqN3JQDDVrN2sYiXLRzDRpLYGbKjCjegmMNH",
  "key32": "3nAofT6sywtc9DqmBjeYJgoMCBWCgeQUUcuDhQgtdoK6gTUrb4efBRXcHYnaQaQxhpXkFHjpJQ9112LhMQHTStMN",
  "key33": "2arZyfnqrxamdpJkaY4agGQae68KyJ8no7TkrdfRaaKS37epSEdG7m3445BKRChNC2MYUbQG5bEMWQogs4Z7oLV2",
  "key34": "4qSxAGcpz6MeuCYHBFpMtdQA8MoRa5p7FbRAR87nRMQF3TSy5pxqJV7ogDToKQdekZKmQXXXAtxLxpYNbQWZT7ok",
  "key35": "X21uGKawMXCY13zpMdj5oTNbuHpECYsopm2emrzPXG2gdQ632bt4umwSenwgv5qeKKqMcxxssPzDwrxq3yaVwKz",
  "key36": "UftRiF8c6AgFZk1tdrQU71eQ1aSAHKduxbuauotJihMwwGdKbE5aLkAkB7tXcrAGhrb5XRLeyCh7bej61uj9VvJ",
  "key37": "4ZZiaJixyYUNYmZtKD6k6v2dcw9cqNJL5ADgQ3nJSTD8tRtMugNRn9Z1mBYgU68YJGYc1QTr8ZSdxNwQZR44FKdw",
  "key38": "4McWNhwLboBXfg3k5y7N7k4jMz3NW7X7WTcunarzvLeKpZpkk5Rm7HDgoYj2PUDb9KsDpjoqaBEHfg8czPHUiq2m",
  "key39": "WLbSFHHNoUuoHYwygwE5HTCzRMdWw8e8vXh1iyU7TYSVHYsy5xs3mP3BUvhEWbPEPsjcUj1c4bwLKm2DEtPzTLC",
  "key40": "8Z69kk88JE2gwBC4MUMNkRPK31ijZ5qwDRS124h9yj5Q5PwVKwLFYCbtRUC5WHqr3hbdaTq2r2dh2Gbm93Pk1T2",
  "key41": "4EZGykqjUi87wVRkzERWyrv1m6wZmfykdqzm8NQPguNy7BXGQuwjojY4JPmT2YYhDx25UzcLaiha5Nm7gKXpEGmb",
  "key42": "Kkz1eJL2vgHs1JBr3P7GJadmLeMTJUqPMbwgvFUYKQ8c9jo3hDZWqB2pm7tmQYFaSSgTAf1Dh8XnH5aMmUcN2er",
  "key43": "2RSFyEQ6V1K6UDRe3mym6r9GpkEGPXNSgK3t3Uuj7orb1BALxGh4nKqf9b5AZKHE3QipqBvdw2qvuoM8FbHAEx33",
  "key44": "5Kh9ZCUvQhfHxta7Ljns6jb6MUMU2xUzqxkgs2xwoFiRoZ6nSfs1NYYfaX4dS9g1ERepcngirecDK6iiT3shFzV3"
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
