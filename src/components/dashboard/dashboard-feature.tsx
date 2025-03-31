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
    "3CZtUEgs6z1WejkYZDNccVTrs4wiq4Wps68zknDQujvNTVumT2sZEicabrzRw14ywda1HaQ4Q8K4hDyJp4Zv5pRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcPqE9HohA6Aa5S2jhMnUuaTswAEybL4iVwViXbUHHdGKGv3ih6CyVbRmud6AZVLe9y8y79dgB2Cvr4cbNNbX96",
  "key1": "37FEKwZCskbeaLEAwdWQhC9xYQuxTvTesosRgSVdT1YteRQzzBkuuuCt8FgPCq7wFqTkNSVKedEEcj5GLN6mbMrB",
  "key2": "24sZHZmM6XM2z3DB8U62AiFB1x6ELfrjhkGV6cukmHKhyNF1bjSx8j9UTKsFw2XrEVdizp8nzWdR4xqu1CpnMZ5E",
  "key3": "ynpt8gU7mzUkordt7oek8soBotyjJGVtjcpJsscHRvSmdLcg233qohCC2WW3KZg2AkppGiuCD6MWuBZkRzwjE4z",
  "key4": "42qv5aJs4eL5faW1YndKJY24XkNGA7T8bG9483G8uQ7XeZ2CNP3X9r39qGgY4YuWj4YsKc8APRy1jKi7bBLWrDDY",
  "key5": "wEqaeFFBhTkR3ejSCMvXiAocZp7fc5SBLyqru59Pfs4ZUCyFtHFMRpt9biUe2L5KZDFTeMj6CX4n77jYPqNSVem",
  "key6": "41F8SwxFsqKetZ7E8HNUHRgQ6dFGyVbBugtxWk6FUfyqtYTJUHMAf2dYzwLt9oWZebLiCsfCJrJUGBkZf9AHK3hJ",
  "key7": "J2hk5bfjgxm7y34hbHgvpcrnjhVbfXqUV1VWkjee97LboiC7y3VnyGykkZYmZKen8BDAkkx84j1UhQXQ6cUxUi5",
  "key8": "5QWo6y4xFLTWmBmHYr7v2GDRdHzFUP5eTY5yXJExcaqYYPBeSE4k1pPuFPgsXKjUerVGBwHxHUGHZpBZZxvwa6xy",
  "key9": "JXULWRXpbbTcjBcN8gAhaJttaz25toxcdiHDiYaZCAm5rRHojQXCSra8NBpBaivfJDwpeyiAXbfguX8h6ZMc7LP",
  "key10": "4qsvucbN2NbhxzHwjJE7LMxou4dxT5FrwtuYVL1XVP99KDiUbpw6TpNsWqGPWa8NFs5p5GKiGGbEkYWL4Mwk1Js4",
  "key11": "RLGCvPHd2EVfwZTnc3uuSt36oetWZZo3oVb5bqBVfhvhTAafQKpmKty6zAcXKVRmGuinkDtS2kKrZKa5XswRbiB",
  "key12": "2r7TeGHVxg7At8H9VdxUYfvEMB4MPDj7g4ZL3EnUSX2zLtueTzk9ZPkuvpbzViDi5P8e55MmRS66ttzDBFXLSp63",
  "key13": "5wTAQdmKkY9odQ9zDsd9FMBrdeKNC3G5ufNaWvih4Cwi3DFo2Pq4KrUXmk4xfgHZDouvwCkWVg9Tz1fEEoh9jCLi",
  "key14": "P7zC7DVBVQbsnp4j8tRZQCPPtDJY8zABvShXvdSSKVxjQA4jppTwcz7pbkXhr1bLK6FKHfefsYJ4HpEUgRNLa3b",
  "key15": "5MyaNnzMG2XSMiEyK8sQrPct8oiRn2mNaonQbkYqpX9oc9Q6PZgSG21chT9CCucEHM8vCoStzYQL7rS8QmPxpLrj",
  "key16": "4ReWw6s2x3jv6SNYX1vmdCzqb4QYsCpFoNinoRcJtmYLmoqiPTXK3VvqZVgqxEEpfHCbYYKCgFx7tmixsHjYgcK",
  "key17": "4zdq6jtbAVdArFNKL4HNiF7ivuQmH3SM3kAswKtfWzsUnrwVQHqVGwdTWFRrJhSW5LZ7iCGufvnXzSrSJWRMcxGy",
  "key18": "oxenGcpkMKkstMuFGd73Jbj41GwKwb94FoPgndqVZfzjo47XJGCaXzWT7WETDUofXjqhRowkSq5srRVDj1daWA7",
  "key19": "5Z7QQZWc4XbCWSuFqu6RRhAkDWurfjyAtfGgh5skLtnSKnJYNNGsbf2nYz6dr6FJwYD6CdWtQGKX6r64LyWGPXsg",
  "key20": "57KggajSAKBApcFQC1b9uRzfr4r7AihuoNuRQjsPgsWHMTmLehSH7uTjpCNubtT8Mzzc4d6r2kSQ6VQK86G4oTzc",
  "key21": "28PvamALWgi2CdVrgwTvCLSoSERdJYwfXd45tCEuKH7EGz41Tg7erWhCMYjPjAdVtf2jHydE6Xhj8g2bZUTEiWqz",
  "key22": "Xh4tRLzSojoRmH9FhBRBST4uGa77E6wFXhNo1m9bP9fRaQ7hezvVd89ccqTSVAfc6kZLWJTM9WNci8SaTP8JRcz",
  "key23": "3Y8LWwyNHKGBjgeLX5jJfVyBAabfQwy14JiarEsm5PyRG9yx9875JNG9cM8TVVh5H2o6WEvcLFcJQTqPNdF2HfWH",
  "key24": "4diGW7hGDQa5NL9h8af76PK2URoCvGe8PGr4y5Yw8vJiJge7AaNYB5Z4p23YBaB9KcpfUeirQ8rDdZuQbog4FE81",
  "key25": "3m4EbkXq7P57qRFFvhva1TE6HDkEPfJcMEnN32zbatRwmMUFArx2bwLL6es9f7TGtNH9J7CVd7Uaea7n5tKWk8FX",
  "key26": "NtVfjTcyLrxHBTN3oj1XvvZakjcwoTb7H9534Y4LQ5JD3efBL8APsJ56BcFAQePrxuwvjahX2pYw84MJ8WCohDA",
  "key27": "9gnVbt8sQubbKj2s4npFUUX3AXBLUK5ZwNi9qxaBDKcKuLFGnVRUZfLFCReaiq4zmSeDjq7tiNgw8in1HNm4R5P",
  "key28": "4XAkAt13NeyPVqJZ14Muu7Hi2rPjjsFxK86LTei8QpnmztfsUq99oj9usMa34AcYbQg8GJiMfZ2yinMojkstNwgP",
  "key29": "42rPfzGiKunnmyMm2tGnZKf4fAHdyez96tHWycQwZxjGS5XxsZnfNjqv3SuA8oGuF7EsZbo8CvrnUVUobBLSXQNM",
  "key30": "63HGErpcs51HB9Ycj6tvQtjoLfzyDiST8jhq37bSsWmYLXTj7tBJGgmXojY3JmSCbiAKh3bj2MwSVxv5BtC3Mkne",
  "key31": "5zuaZbXfihQfMeqKvQdX2T5EwPmYJtRfQxYQahten16Jf7fp3sf7ohXySceQTbB6Buof19XsRdcFS8HQQwRM85S1",
  "key32": "4AkUrUqnhbFioeTtUhLx4Th81ooyN6jrM6Se7cbtMG1j1PPF3wvC5pHKfJu3PMjaXjSnmxphFQ8hvQneuBivZQYv",
  "key33": "2wfdeTf1wioujnZqqnVU6wbjmUHcw23AfCj5xNPh4h1JZiFR3avHv37Z2CncRyMoy7NHC5H4UkFV2PTcuNhHwx5o",
  "key34": "3FMTQBZ7hqTW9mLXq98VKhK18yPhr75F1JMKJTDvDh7q7h8dfXSZXpBqzeqNtwcKmJBNUQXyq6aH9zCF7gSgZA7w",
  "key35": "5ixKj78GWEHsMR8DfWJhNVuTr3vtZpUteW6iGiC6vxxpyoZfeskyqJ9mqRvKx7cuSQza3AXGHXtrxE7HYvptqyFL",
  "key36": "w2EiQgZ7VVskfr5YKZggdgEZMmorQDcVrPgnLFdvscsDRne3ztXytVWevd56NMAEfYYrEWCauUBwVDGvboV7TGY",
  "key37": "PBQxJGLyV3GRk3mHBXsDnzXDWWS2aKmjvRBEE8o2BL6YKNgXJdfroCCMvBPm7h9E5nodY3QwA1iuCQK582K27E9",
  "key38": "5mWxcMdA4V5hQnYGoxtLo4tK6Wu44tQm8edECU99CQNuK85KkwvP6fYBfCj5FHdLSG7ycVJfbA9aKWZKct9ndxH6",
  "key39": "J1uubzH2Kdf8BqdYKhtxnkooWJXkCH8U42YzHtCFtmvWkYERR45dBX9q4TEAKjDiBJZCNeCeSFytXnEBTyoVTwd",
  "key40": "23J66xmzFUtMpc2NmPUkVLBoePPHrrRxdTz1q7vYCC4qsSG6UoZY7BcwpRByJb3mpHm5wRBLXQuMzxs9bZ26MzfX",
  "key41": "2KjkyqXoPVt7CLfSqZmibHwMdZtSXnwdizcZRuED85YBWDkKhwHV23eKFDZi1zdzHisfmz64r9nanSzmxSWoTM6h",
  "key42": "5oT6WdBwimJYFQSTXYyxjGZEMCJErdMh17z8FrLea2qF7aEnecBbi5KpGGJJgsWY6Ccfj2zwBpHfNtUjgqxL6yuD",
  "key43": "hvhta2EeRNWo7rTqCZqPckgPnfv1eXAcgPr84GDgAUmnhYQeQybgVn4FcmCGvDdp25xjoyNXcfznenjLf5dbqP5",
  "key44": "3TnFRwPAgBoDpGrJthMTHGvfE3yMr3HNayMUTnbPtdtc6W3gL4NfBLSdDncoj42s5az3Ab7nwRoDWYUMMcfGZEPK",
  "key45": "4NAnuXCdgSAbUy3Nad8ERLH2eYjkHsut5RoZn7shQFSumJb76TBhLK5LQpSBHqhuoW8Mp2JwXTsLSvRfrvjDgqtt"
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
