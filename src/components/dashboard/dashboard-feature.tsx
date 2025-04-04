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
    "4u1ReS3569kJc4w9w69FzZJrEw3KSAiWqd4vFPUYbqUFrytc5SLhtPhPwtiXq3qV5svTXVtndRZ2r1yDCZfzkjhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpYU4Xq5nEXhWkqBmeSJbzy4i2AeMNHg7wqeGMoa71BknoPPbKKpPQ3EGqoiwvd9MXCwRjgTSDstqbFQGukPkNv",
  "key1": "3348GDJhBCdzdKCdpc3x2FwygtZ8aBYQ4ZRH3S1mWNNe2dViSkxSmMqAx6fdC92n8326BqsiH2yFy8JH6HKcD9HN",
  "key2": "4PSxTWgBJYwLFS5Gi3Y42xFvtVFLTBjBAHiWx9WhJvmQAv1dCPvWARq5kAmT6i8k3UKmAa1VdEmpWmhRtbLetPFU",
  "key3": "5zeHSscfuB3RQDTfjyrTdsNR5LPeD65w4RQXB4ft48yMWZhEg5o9nFwXvXx1YF3pxJRPQFAQEEhd5XL7bR3erVnR",
  "key4": "3i4seCGwu8ZVpYGWgUPLPWYp6yTxYz8TWJP69VWe4DezTVBusTg75Xq51sk54tWeLCiCi14WnP26Yuiqx6JXoaSe",
  "key5": "U5NKn5KmkcR9qxUPvTY6omkmDjrmt14wRqS7tXM89a5XbR272xsC2VEQE98a6LcW5ZJvdGhdNAN8TQZec2du5bD",
  "key6": "124bs7Ff4WTa38u7e1FWziotoMLVS7SJaDtxqQq5iCjZ1yUHaykAf2fz4VGGnzvwv3HarBarJMq16mL7LzaETuiq",
  "key7": "3gN9PH1nfXpANDUAw5CYKX8esZLTyZfKNCaBSBepmRjAaMDQYTVGG27ZusHxmu53gnRK4avgLch4wH85j2ZzH8H2",
  "key8": "3aGavacmMYjHQpjgCsjWzuTWNzXRcjx2SfZwoe4sKGTi4wizM172JtfGLKaYuVqijSJgBvLXUETHpRFimSn7chiM",
  "key9": "3GQRB13x5y2w3Zme3PZEqRZ2fjaGAGWTADju7UPwvRewQBTfs9pCQMHavhDPPH9tSpByffk66A5gtSgtZLRUsa5j",
  "key10": "49oavpzr1ZoDtutAj57eMKcERG8nHbUBv4Vhk8C9a23v17BwyCnLkcYrdVf2gfJzpJxev3gi5bs95isKFyCfKYAd",
  "key11": "2i8V7CoJvCrNdgQAWX6y6hGN6vTfqZSAwHnefxQpEi4HbrRmrMFx4HWU8EmtGw2bAVYAadZfmeNtht9wztQMVSKq",
  "key12": "4zNLdHBmh9N6zWa5tJPFVQh1N2BuRfWyQ8xUbKPFzbAXrtNL3EwAD1EfjUz9tNTggnJVeBPcAj3CPbpF44UAK9Mk",
  "key13": "5pRsJzncUvHkKJrhMJKnm6i2V8gaLwvDWe7cfZx8FyV1piMTjAJzkwFpmkfG2Z6JKokL7poiMseZJg9eUsgLySRr",
  "key14": "6394U7g98vj3y2mj9kGVYNf3zhUyWg1M6N7dBBqpYhAnVxdYCj1SebTBwD3ssCWBfaDU5WCkDiVvmQQHbDsadYoJ",
  "key15": "3xn9AdcW7ijTxxCZtJ3LYLKK4wLDRLUFtQN6vWY7fwTXCdMr8CJEQCeERMjsiTRY81PN4mrpqHXY3Sktzme9oiTx",
  "key16": "4Y4RHdsBS2VEeg1w3W8YQFMHGHt64CYJjeHRj3qFSxpjnBywjLUawcxVjy6bH6eNR9msM2ksv7kZfEcuuVuNsewx",
  "key17": "5JFxJNLuMFJNm8dQKyd1RfRRUnXPNsN87sGmJzjd6ZZur1rKnV8QwndYhRSzCx8k5KdzKyS7oLXkSM5ab2QAcKKm",
  "key18": "3SF1NsA1Xq6m4YzGUDh4KchNZY6vgQLDtUexCanWpux5cdRDSi4w6RdbVbAik2XwfWeGN4tkb6di7hXFJu1FjHWX",
  "key19": "4LtyNzi3N5kfYWLqMJKnqWWVVKtDWaVj4mXBLJb2zGSfrBG8fU6abmzAQXKokyzybSBSiFw3C4BkzHgBmGD4gDP5",
  "key20": "3twAzERgdgxS96YgnRnUmMVsYAgPJ4eiXwaK52dQaTChs3yvYshLkeAdUSCTajUPb5PE3yPufnbGHCNHDQ28rWpj",
  "key21": "4c2HCDGD7me17u2G6DrWBSCTUdu3Gz7aaWjjPBBE3pjGFEqqkSUyLvvkeCy1SqvovLpGW5hMQ6t4M3mFnBAZJkaz",
  "key22": "BcidzWFngfDQmJRUPdBigvbtHizD7NiNLRATUs3nhhqfz46T4rNSUFBMvZ2yZdLeTMrN3Rmpg4V35VTFa8w3Spf",
  "key23": "5wsVvwv6qpzcqFDqoGf7RZKEr7SuzrnKFBsRKgt5SgTstmk8DZm1BoiEUAr9BKbTFW6Jk5gAjipESys6rYv4gXpp",
  "key24": "4B4wZvNNYpuWWhTZVUnQEszMBz6pXYVXWHZ3urue2bd8BiEPPWn7Hv2SXRxVTPjSjLnY4M3ktbS4rVpekThys3HX",
  "key25": "5ZBksYjcLLDgp66k6amjAAGjNJ9xk3t4kJZ5KeghU3hTdpcNJEjrpuN6ecqHFiCWeJmNBVQPm2JAE1timVCtYYix",
  "key26": "rPfbsPQtin4c894yCe5mxQpgcQtDzXAHmUNnL6kiJXNqkQHp5cJWsiDVHPfN3AhqPgVj5fPCVfGzy2pfxTAgbhd",
  "key27": "4FTxBgqeS1LuBjJdsheUq63aAefByyhEUbXc7ZsaP2uUyuGuftra9Pu9YtiXSn2J7w8uYdPwrhjjYdJ2dFZS7dEQ",
  "key28": "2gcw9YMSKUBqS4hm37Ra1enQjd1AqvHSrH573mwFNcuYBHK1fSF8AxgSCGXQdJYg1yKVVyVbLAuzYj9byqpFYb3t",
  "key29": "3cW6RVpFRrbfwTuqkY3TXoqmrorMVgj9qzhVjQXu8cE5rCRvLWrzAnRefqTpaPZ9SzA6F1gBXVNyxk2FCfzYLJ7c",
  "key30": "549UzaictbncuoQFASsWZmkUsbbY2HusUwThN5EuWMhsxcZVnTRU8gqP6GPAb1ojdY1DfWuuJ6bknPQnL5ukHgVT",
  "key31": "2aoEX7UBJQ14C7rCT6nx2VdADE8Sit9bD1F8Mu7NxheB773QRvXkxUymTEZSCEH31StszwBLnHyAu2wBfa48ypmg",
  "key32": "2CfwbdYp9Ts7ynkaG9iZiqXTiLceNsA92tKZxrEYFuTjUViFF9DHfpWuuMaFMi3ZB3ios6P8tKZJZeSS4si7LXuc",
  "key33": "2wwsraXpJw2P6HiqKELGsPDuvGv76mTLHLBP3z3T3Xuzmo6XHPjwp9XuqibsPQzo93haoLELAAGg6fG7veR54Gk2",
  "key34": "3m9iJbdPkEqnfCwP7Azo71xWBfp8DXe3Djmuqn2bZhShnGzWoKpHfzRPztg1x6b2XjQJx4oFNiinBDnRERbQoo9r",
  "key35": "2R41FVBDFJDJLmrny4DyrGxHu3vmnbwC2A57vKn9bWXxEa5UvYnNJqh8LfoVvUwk6jqjbEFccw52Ws8gSQjCALq4",
  "key36": "5phc7gUH9C7uwfuuCt9xkjAkfnd7yfd92jvtZzDFvyWcWGDRAW2gUAUc1FKowuKoBFHccJqwZ2LLYxsJeZwANZRL",
  "key37": "582hCExxRoNZbKqxXhpckX4GHEAVwwiBgjoJFga6yaWJQw9QoYGip2kL4D8eSupfYUQprmDRx1j5r84QCHcGrnAw",
  "key38": "2NC3p53wMK8hfQsfxjnFE5nxpydVzeP8PXGiipx5yh7sHx8XjEpbD9g1CLvUGhfZqDYf6aod6JBgSFwSSPEzkpG1",
  "key39": "2yXHtHfwcYcmuJ623z7r6eUha6wQpZYgBjT2zBkQD1XqMV3DHHN9ewc3BocSvYefsrELoBVeSnfYE7HuHpLJUspK",
  "key40": "4qCW7ZXY9wxTXqmU4TpBCqksNa1XNhFA1znfhXBJpYCwAVzqCY4PnrNQbfETgNsdxg2DFduowZwuhnBvxXbpnpvT"
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
