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
    "44Trct4d76GU7BdxaXQvtZeMwh7eZ1iJseTU9PabqHZDgUaAjsPF7vU6nSxgS5XFUmqhZW9Y2Be5RcKLNEUGajea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hg6PchwJFxZojxYGawPdua9vj1ssjRKgxrQewtfANnbq2aQJVqixcNXsNn1ygvEeYWGLhqKEE6vRwJVquvuwapZ",
  "key1": "2zBSUCMCjZzgQjP3ke4wDRc1wZCWBf2MEGEjPMETeMiki4NcDifMkGYM8VbffxmpaivUcbLb6nn29jvEjzR8NrqK",
  "key2": "zTvo18KeBq56SKtj9997EguzoyWnFEs4rmUYKzZ8dsNRBXuU93zScitGFZy4MRtAxnNPmTFiwuDFxQwm4KB2GaT",
  "key3": "2U5J5fixqrHT1FLWcymnVx6aTRdkKWXC3ukXaUzydXY5ghj1b1QkiQWD4y4rLKvRsA9aGs2snUeUwSfTW4q3usVe",
  "key4": "39ca9tmbpZsJTTuPehRFKpn7ius3e9nG6oyo4PiH6MNNpTLSd9rC85ySv8A79dWVoRx7nqeSazVzMxBigjqiehhw",
  "key5": "5uKHJ3nsJEbaf6KnyUghFQ7aQbUu68CuRCeEkcNEYjvq2eYtubWq2j9hXeNqWwxAG9Xf9eJ1C9dEWH7EJufPxAaQ",
  "key6": "3hreM6wRr9x3MoEWoM733HZ99M14cpBcEC3wLZZnwoCFpj3tKHsYJe8T9T9jnxjwkjpYVmwrRjY56wcmhfXjeoXd",
  "key7": "4vH8jLSKeuTTfFprTPQPsCsMUgoihBeP5zBh1QsBFiqSnD2SVKxtZVWSYmfhzdTxWegPYdwASCXEJQ96XJ5k2vsM",
  "key8": "F3rW1jYCXr4hLTe1ZKeV8URNeZsATps7JScQhmHKYeJs5LnNU8dEvBbgCSLEEybKXpuUFeuw3aPZv7oVi5gwTFJ",
  "key9": "3SB3NTWFDjPegxYDjJtc7quqmaN7uzvzm1XZvKPRo9bbmPoSzf9Hd8c4N87VwKELxrT1kprZpdb8VAkmT7YDu2Ec",
  "key10": "5i76xVpTsEyg8zqjBd3BkTqUyLF4bzn8bQBj5nHnTj1cBC1pjMVT7kyxHGR3mLcMBFuWUyhuyPhSriSsjBsXf9Jf",
  "key11": "2YcZoTKSS7RBU7DNGVjmQc2f2XyQQm48Lhz5Cik5kzZd35LqFyygVtE1oJpFriyFSFwRiXB7vUf1LhsZDzrp1U81",
  "key12": "58QeJHRrxZVY8bYEDztpPrfKRYzznvudABVqzTXohjWZAGyru7kXn8NtnUiMZzNz9GY13SqgpDBfC1ySiMNANytu",
  "key13": "5qhQtrdzPvi3H8Uny4jsQtrs7UtRbjWKFPiixCKkjUDtYHLf3q5jHpRQDQmC3MKA55Y4W65GZtWBFNixs2t1E6aB",
  "key14": "3pBXDBgah8YFJ3Bp5ZzbYhmzUymgEsZWZN3TaA89pDAcPRJQCMLgc2EQ1YMJcZ1XhjJk1tY6YZY6JvMaxqWY9gnk",
  "key15": "3MTkKC1ACEaWQVCCWkZjrvFHHB5ctrmfyWDqNWvi9igZB62R2Dte4sC8ECvNyigw8x21WymYzpsjD7A5khngimMr",
  "key16": "5T1oeLXeaPr2rjaPcgJgiCv2pZJtgss6gceVHWunKieSPCiSkt88ZJJVdCkZkYijCgJbHmNzq3ehCixtFoD3oMh3",
  "key17": "5Fjq468BEKDUdfm9VRwSVrkEPKxPST7RFqq1bgK8zLqBaVaHR9EcH1WfmqgVRMEyTFve8y9tfUSPnJ83VAJry5DK",
  "key18": "5VZxGuMtEZeRgAesKNQdX4ea1pGjR1BwFKZ3mUB7wjPKtvr1FSgvMFpENMoeHTcafeBUCat6goExXsznv8cXNCWn",
  "key19": "678ogWF955Qfj4eWLLEVL9VcjuxfyugN4bZu52Z7wEr8uVd4K82vbeQeCcxjNTGKd1j2txznZar1v38hqjK24iex",
  "key20": "5mg49BSWR9JcM2sVXAUwSFP7cNeaPFTfosotxJUjsrxqDfTMuY7sWVRTZRSrb7begz4LbnSsMaxUnjrKzVvMw1Md",
  "key21": "3gG8vpFKT9hKzLVYsyhdkcgni2MPhSxJhC8GGYfU4xMHZA4qRjEbJau4j63bz5SoUXqSMmvvM6xArjXYXR852xHv",
  "key22": "a9LARQHLSUTN4jDZwYb2VQFriEhhKX3YYTNwUiUij9qx5ZktmFPpCBwpBj4eM9SqSqzCZ9hL1RTBhtQLEASDUUo",
  "key23": "4DFabUBztGyforPYzPBKxgGDJ2qWzEuRmZKDwoVyXekYfcCXCwVc4EPWJcfE63AFErJbT1KE156Ka9s9cNkjyY7y",
  "key24": "jh2Sxq4zc5QbEsci87wftBu7ddrSpQU1QPGn1eGRGk1KRciXiNxbPwsVMconfuDFBLYhEWKBkJCssKjEvN13dBb",
  "key25": "eGdhcuM8p8qMitx84PzCpn2rw4hvibnLQ1o8r6wi4CBHWorQyTJvyqT1KgiyZuNSttKjRzmHmhqc9cPWRTxj6vw",
  "key26": "FBVu5eK96C5F4dZWcrg4pz15hWDaREN84QCVYyemh8qTZHGFQt55GnQ4ZHoz4PsipUjk2qMP245fXL2FVRJHpRr",
  "key27": "32wqRQMV3n7kkYHLgJCERtzz7yJunzU6VZpYcx9sXTa9t8k8YJXWyf14D4UkMWwJ2rfu4HDYsWo1BzYB5neu6DmH",
  "key28": "4g8Evmbc944EE1euXgQeRiFkFFgPbgCmQJ8F7XapTnZnUC5ogJxQCWKew1CNCL87sz1tUaLGwGMHiLagH2vhGiBR",
  "key29": "5yvRPoMQLK7B1DgD1Dunx1S8gih6VvqhYfVawFGm2USvt1BvA71huAsqaTb7PEG1uFBk2LcQZ7vQCJqtEKLvuAkC"
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
