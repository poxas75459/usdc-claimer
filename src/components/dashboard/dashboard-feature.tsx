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
    "5z6ft3Za2W3iC4ofCbrGR9ZMdSVEMj6bzHFD53UDd3ueBWcWjZr1cUTAZFDk8urL6p9eC8vJB6KxCnqxjMUhL9jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UjwXQcstpzKhd7Q6sDKWFBq7i213SExmEjRiYD8MjLFGWEJehn9w3nsb8FwxYvu5H2C9iyUdxf85SkbuwUKuEBe",
  "key1": "2GQAgCkJj5sS2AjKap6WCZxMCHKhQ2rhB2VMG78yXWPqHWb5ZVWEsaLkpn6rLikGuxYMAJQDig7Ye8LiS67QVqVd",
  "key2": "4RKUw42CeBQ8i2BYBg9JV9Sr9WzgqbBBbySa5AYa9W9QkXqbrGVicBbWEBRw4AENhzTNE3i5dUa8D24pQmmjGdFG",
  "key3": "4mCpqs2aKnZswRf6VXWiQJJen3yJtYvScnS8DLLRJSrEYKnEiKwFfBjYQ25aoefP9mJDghM13DuRk3Tcf4nzsoUp",
  "key4": "3M6xpCANZahdVrLRzfRbtbe6fsvAN2YcQjnaQGSc6Ym5pb6yimjq8JmLBiBzyGoYLUCu4dpXF177Rsvc3XCyPy7c",
  "key5": "uGCBgUGLC2q8RDAjWTkfbAF1fFa6k57CUnMjpNx4QokD4mN8f9y6oehtjP3Qmnv5ssYNGMNSNBsQFhHChtqjNz5",
  "key6": "2F57yRKR9wxTjkxewZw9vkpQFk72fyxgbarDQmnfJBp7xc7d2yNkjt5eoHodQP2x5cx5MUoRQDjiPPDPEi8gWhYQ",
  "key7": "2kda3yzp51ZUY5krRiUn3DwEdPjao71mHWRew7He4fGUpKQGTiFaRgrR3w936CFoq1U2KTHt6x1j8GM7sfbvdgrZ",
  "key8": "4ruHbeBuvyTgZkzzJft4WKmXwP7bqvaVjEaqkKRd9rXyEaLLXN4Wcyiv7SqjiFmtNrMWU7SxNKNb5ZYvGNTGvPnD",
  "key9": "5Q7Ef8yMt8kmNtPWjL1Xgpx48shBgMQvGBNHbCdCkKxg9efQR8LEqYGvskqhvsiah8A88JMczGPzxRdKr7ni7ZAZ",
  "key10": "4uXQFHsveF1LAUVqEpiRKXaAufGuPjTDq2MngF5nfTHe8fDKyx8FNJyEpCkB2u7dyZoEXmKPseLtZ3AubMg2TZVQ",
  "key11": "3MFQRPxYYJ9HGED6LpZHYmAZ1NHCL3ppwkqLNAg3oHi2UDqHWhJqUKedJ9Z2nUhdEdE5R5mKAPaWSvUGq7pszF5A",
  "key12": "WKehCAJksGsisnZ44QWUuwY2SPjhrNWuTmCnEi7SkRvWqLts4jhzXj34E1wYdaAGjEmNKViArS8c3L38v7TGzTt",
  "key13": "4iiBKTtxZgRJmgC3A1sQBRsuBhaE2HvBpYP2n9vKLWgCpwqAA3Y3pboh4a1Rx62axLzNG4pGpp77w2kw8d2v7tLR",
  "key14": "4Y4XFgCG9Kd3C1zjhoNJp5r3VDx3ZZKvEaPUzXfLCT1PBVyangCurzGwkGTXSuYdZWT1zDr2ypiSu8x5Uq6oniLS",
  "key15": "45SbX1sU8NvTGPqvmAamyGVt1tqPYZdkjPBXUAtVFAUUgxBBBcK8bHP46vKt6Dei7iS5UajLZd7gDpaNzjfiUqLE",
  "key16": "5BbbPYTWcFByTdYjKT8d9Pqq2AbWEHBbnBaGMqgTGxdW7A7wxYEjJ3CipttAg89Y4BjQRvUZTjjHuarYmQ9ihfzr",
  "key17": "21ZqVD7xaogs2YVa2XZJzyAVxdhmDVYq2J1oey5KgG3AMPbjYgCuUAQuUGxVRqii7VPT6yr2MR1BuyCcPDy9VAM1",
  "key18": "5hhntw4TxqzLY9ouLPxX74jZPszx5yVv8jjoJ4Z5afAdMAa9DtFUENRC6h5P8U7w5d73B5S1G2QdcPTqXbfS8zDf",
  "key19": "zEK2p6JSW23HxvZkSennVYsgS45nC8YQsNDZ5DVyRogzh73Rrh85gH447d5mFXz98oLQVEJ9NXVsyduK1fGfshe",
  "key20": "4996gquDxQFmiS14Ykc2tAAyijwHjjzPRq7LUPppicNMPSz3sn4tH5sJpdf3x4jWUHjKz3L2WPfYQu2XkfcvfpAV",
  "key21": "25jjtv77TrB3EgFFNCC6VbDfvfzcapst2QgXiUYwvYpZkMZ6xEVy6trtxAcKAyygh1QkVF19EMUrnsha38L7udVj",
  "key22": "57nZScQT4P1yVcPWCi2m1Smo9CuLNSddEqGPxxDLa8iK4Ne9NYLGBh63WLwpz86UDouSo2wPSTAYxkSGSPfige6V",
  "key23": "5W8uUDM13CLx9AZKH2qZ3n6coHqEZc1F3HktEdbCGXmVXCVMExoGX7zsk6Ky7AG1e8FZmUN2V4MZy9EzAmC6ttxa",
  "key24": "5Jc3jBooopcpAznqhUt1pVL9GEq82vK54FCnyDYDQPi8qmCCJPiYAhMGVWCZXXyPXL4vrMfiCnjTEXU4isGmpTN8",
  "key25": "sJ8eAE9kGhxUwEUc1JLYpWbtnY16osk7SVR7fqCdCE2JfsgtjzJugGdDXFx8hZYGKNGswMcFrDUfmQuWnBpt7JT",
  "key26": "35n65qp5mKMmYHHTSRAphRDCHAieKjVEbisKjZAz3ENSfNNB9TF1gj2sXqjJydrrPs3kDf7iV4gLAQ3nNQ5wHXuQ",
  "key27": "2ests45GUJNhnYPKZ5BQXm1fVxz3jDv7wShA5DVUu7a7N6tw25y7K2PHaXsz6igKpNp5EjY8Jazkabmnb9bayQiY",
  "key28": "4HZRa56TEbv252fK3u3qa7KnDC82ZfNTwDvh4aoqHt2zRTEMADaCb3Lu5BLLD7UEoevPSMZkXBnjEWE3fWfXAsjJ",
  "key29": "2NM7zdJCgx2n2HS2WHRwLhfvqsKwzWTSdjdq3wYJYtp7whk7Qpazows6JSxqm3n6hb7WTBxGy4GLgRHarZLJWneR"
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
