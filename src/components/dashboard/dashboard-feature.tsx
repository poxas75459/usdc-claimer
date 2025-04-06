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
    "BmXFS2TSFaCUvfrzNDeUDCobcFeagQt2SbtWsKcu1HkC7k4sqHH178p8dyY5CEQHLDB8j3yCrUDzDS5im5RJAHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qYKvtuc71J6DMMK3HXonCXfmN3P88JtDrLa3MUXebvtDTTfdY3LpzqKGcR7r86oCEt22gbBfRNx21sGFqvZNJd",
  "key1": "5YqkuDqBuQbvC5wB34JLxZXtCxaW8FngQeCD3Hi7dKg88AKfwPhv6CDm71RPHFSKZjcSdknTtkcLUvVPDLveFn2e",
  "key2": "3uZ1W3B99fYmxJrUcvXxre3ZjASFsxtN6nX2ZB4ch8qUuXd2gjPPn4wrMykKmgSpZ3HBfJh53G5cK4x7467wGa5o",
  "key3": "45CNi69cVZiNvf2U5xL5i7zTgDbmF6YqxPjg43WSLQggbTwZEQMxbBE2A5ixrY3QvxtF36hpH2QCEV6xQvEidxJi",
  "key4": "3NQ1aFsPYEkyHNjeKg79aJEFkwhi2AKJB5JxryTAoMBqZiJVkJR6Pv9cStmtahgSEtU5iaDRkVHmoBmLbVGeBfLC",
  "key5": "5ThL5CghjZEp5wQGpLSx7S2f96PLzEC7eFmY3vPMrKDYzUP91AkZP9Bi5vkbeReUCJKUMfBZfuqr12NGR4ULACjC",
  "key6": "46Rpxs9BZojUxib1GZPmVH3ZrDdxHcsUrBsDKb6oTHNP53qsRi5qnKfQBMQ4KNTCrgMMitBoykHKfC9QmHEZ33Uy",
  "key7": "57viqnzj61MCJ64FMnSTNhaTv8xMqNDDwnjDGXozu2RSEzVzSi9WBNMjD9zzxwQPsiZSyEHrwzLEM2h7VGFjAgW9",
  "key8": "38mRr43xTXKVh2FWGhPYCxc4XiSoKg1y2hHHJzKSfUgh4AmvZ6YXGXDBZ6M4dCJAtQuazZpVvbEyCTY9yD3NHjqm",
  "key9": "2mSQaHqbg34FTFy9myScBivCD7xvkcmAgfUaa9gHqurLH5myfMyyB8eKtd2UUxQX3Q3uD36C8szyGyztH1K2BnQF",
  "key10": "2rLrcR92G7eJRooEZPfSsuSW7FT6r4husaQvP4HPhu3mrC5X4P1iz1VLsAGMWvL7zXcyd7SPxo57ryVzQ8DkWFXr",
  "key11": "5HuAJWCwJsyE7UykQsvvoP8uwBkCeFEJT6Jn61qEiA2xHqPmr8hEPjiEpWWj2UFWtpfE8HY4zxusUNeiqNCyfs8u",
  "key12": "5JRiwXjKbwVEZcxxjzTek1wxFEL2BGBjrSv6Mfo2cVNQ8LFtwnKzmYa6FUqxivPMNLk39z2FvbDH6x9CLF7Rs4a6",
  "key13": "jLyRLvtDQRkceC385ikA2cKzuACwxeFN9JVCCQP1G3iEZ9XrXGh3aMwE3K9VcCPonncMmPhpAEgmfEtrH9x9mNa",
  "key14": "w8bSsjNRmkwvHjgDK9a3mHFyeensk5nknaccAFz1ccW98YhEXAQekGLk6xLriY8d9sJpPyZwyyZYdnChhGAep12",
  "key15": "5UwjFUxvQpfKaRGJTGx7TBem22LrdDTup5kghea1V6J2BBtoQkvKzxnQhnhkHNDqHKh3Haas7ZxwrW66qTdAMvoA",
  "key16": "5AkeRmVt7Avwzk1JHQTxTdsCAzwqGjjzztsAbc8WSfGT8iBRQKDYWn9mUYz8bb17BtojiNXzmRCjzja3cxm4ygSF",
  "key17": "546DgQu6pqPvxeDWRoc84i93NjgKW48J9G2zZuWoBX74TvWsTKMcNsi9cxvkrBzPZz7Zj3FGGHRH9uAnVBMd3n8f",
  "key18": "4jRGjGEuAaD9eUWkt4dzErtsmfKbaMnLX7hRNjiW1i1gbe4HzktvAfPgbBCvRQYBd3XETToMxCcBodbjT4GHRQd2",
  "key19": "74PRjzGqDheyY7FATnDt21qcNPaLf8NPKY6XnthePDhRixrAzyNbnfviaVgpfTyx87ATskQeKGsv6eqK91fkgpT",
  "key20": "3wPeM5oDTM8NcjmxuVhKK6pQp4UKQPWJShm1rbkzYn9GYUKDasuLSQUjoP9a46p8s4pV1svVFRFEBnfiyptiwL3o",
  "key21": "42X4UAa13GKJhVStB7BYhNuXBVUTMEqtftzFXg5HWE9ihy5NPrjpcZJ5d3XcQCszWEqoRqjm3TdpkPPWCGYY3u7y",
  "key22": "oqfPeTx2ANRRDewWNaNDaw4LdiNJNrcJQ5YnwVEGh1L29KVigqqzPVD1kPMDVWspBRwxRvRHkhQM8tq5Wbb4qtj",
  "key23": "5GoM5XW4V8mLxy4HVoh5ACUgQ57gJUx6CY2Tc8xio9XvZdkvHWGK2dgVRSqZ9cocSDggNYnUykJUyLeZ6xw1RFaN",
  "key24": "5HdEVNPgPiDUjtxkn9PZPSwwxMQgiVxwvLwwaww5oMwsnkKPWZJYCL1XTaPvX13F7h22nN3f1Vn93LBbaPxf5G5g",
  "key25": "3deB3smorSK2WmRHyVUdtbyxPHsLkG5erNgQJ6h398qT4i4sbdHwbw1xbde6wsoMTy1RcxvGmY3Bet8sZkJmSif9",
  "key26": "26P6r4SZGhBs2v3TNc5prxyf7zQvYb84A81WrpoLokRQrAnzwsFPaxE2n6tx2oKug6VC9kPqePZMLPGMoC9Ks5cb",
  "key27": "2Ac1ix3pctRvCzgayQGcYULM8xZs8vYgQ7r7PkYGovLSkYVG1RD4nUUg9yonMbNaWJhSSBm2Hoeopops2zPgxDKD",
  "key28": "55nV8H62n3axpvABqKf8oHcMxgWLE3RChUXwF1p83K7u3zUUy81o9tqGHMSW8RoUycmZBDDtgNSeENsVpuvceJ82",
  "key29": "4mWWHB5F6ngBVGZTaeenpZ7Re33DiBmpxYqm5LMPfujXSV9aHPiY299YsxN56VPcnGTM7ndCrLVS9SLa7Y3fqVJX",
  "key30": "5rs29kELTwSBsF6g3rym97VKgq8LLi4L87XgMRdRSsmxXwUTqtix71dwbWtmeBSMJdDAWHqvpLDpEmTPH4NZmgKL",
  "key31": "2Ly8Mj3v7H9oZeAJgfUY1Us3mBPVjsB2z6jgWooS2M6RKSfpPG5Y1tzJBZACP2ar2aSo9X5Qg1tjLdinaQYtLbN9",
  "key32": "2G2Biu8Ln3wfN4bPehsNmC27dCSMCNkRxdP5q6Jj1xhdaGyA7kCBkdH8CNEyhQGutfX675tcWEeiPA82Y4ctfRiF",
  "key33": "2qa6dj4op54ULhkWQSaKd8K527BqebBecn7mDjbDcDiWaMkbXxqfLntxQAQG9wC6dZRk3i5QVGNR9tzHSxhCiHFi",
  "key34": "5Lxh1CqDQds5A5itSPJ3ECMjRHYyQCpXSc6akh3mjhSLE3YcUcDzUX6HQ18a9Bpx8dtGbPPcEvx683NkokYahbiB",
  "key35": "5X6HPXVWe3JHcMtGktmfdMmAthN5yLXnZkfqAXroMrHduiv9M6GpLi5mMZrmJJdCHMjEbbNLXPERQnKHBVKzCTQx",
  "key36": "2ZfKLWs2Zwd17ysMJ7GtHrNmGXUaK9FT5VAVJu8bZcBkQczZii9W5QncCZ958gXmA7F1xqsQLq8nry3TFT9JFKmx"
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
