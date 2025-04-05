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
    "3w8vSJRFgL6NaXLGQW5waW5tZXiGBfULVQGcS3tKEeAfXTDakyqTXYCMxsb5ko1k5CjuVFRjr3baKqGQ7q2TcwQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ejx9hpVyjprkku41whwhYRoXHVtUmitu2mmsSDji9wKBjjsP52qJgHvG77xDCxYsFrA84x559UXq84t5943JT8",
  "key1": "21yfoN1JTnCcvK5jDn7gMzdEjRWiqjBj8VUmeJ99n6UNdxzaKVVtN3FauBPka99gv3jKc4uxA4iWikBB1VfyzN6v",
  "key2": "2EwS7dsmCnjaRuj2ppCfHNsiECkLUMN7mngc421LXCGzwFAdVZTgyiihi4nzzoMaSiGHGs4xovdQwskeuoUoXGky",
  "key3": "xx9w5pFY3e4W2i7FJNJUWmBF7cgWtUTpmA7v36fmwPdQvRzQJcoHpxmmLE5FUsLsjin2GsMMFNWN2AQSJCZ71HP",
  "key4": "4w4hpFvqGobMroqn48XMatcfqCe5qYYdWqFtNKjZHZ5v9CLvebGJiNqJRkRi2XNDhRKKbjNVLwsztufCBnJ1JiM2",
  "key5": "33zKX7LvrEt2aidji8ztiC824a6TDcm4HAfk2QxpLnL5mLt7ZzX2ykdcjVYapvCsEq71gnVFgYjUsfJSRavKsQTJ",
  "key6": "NTFuLLpZx5QhaQ2E7BW2VxaAT6rT176yLFaR1zJfkCviZbg3sFMixUmyVWuMPSGp1pn1oybUukYVKoU2fyqqMc8",
  "key7": "No6WuusmpjGKigE89uYxxDSmvvLekTkZabthia4RyQfSjKhGQvHC2FyFoVA4QcB8cKdqRx9cqUVgxmmMoi9pGZg",
  "key8": "3dkS6dud2ZuTZN3bJP5v4NVcmV79Woymzzv4C8DphFa1G4Bcj5K4FmKCf23oT4DqV8gbQ7qEDAPQaUu2WinpD6sE",
  "key9": "3MyNb6EPJoJSVCqajhcsRnxdh3dxxPTZAKtjvvaKNMokCKR6Ggd58u7KQHSMRnYB3x7iKDoDaA8267F5emJiym8S",
  "key10": "3cfY5vVwB5mmLPiXhorXwTSnFHhdgQZcEkrscJdDS3RULyyiJzFH1chZHPY5uYhvUXcaPHEnPpYddZnoDiPH3GGY",
  "key11": "2mdAb5snvAb6G7z26TkBr6pUKawv6zASTW6wcerqr7Ck3WA1HictuXcH2ej9Ba78aumw6iCBohuTdNi2qHMAjXc7",
  "key12": "2i2LPiEHEp2oA4XFWpFwarentzoFdyLpeQuJXnfcijHryffPp67f5Qp3Lk5rYWjTr4BHDPwiGAv3SoYVxGTYZTk8",
  "key13": "61UEamV26m5xSESZUC6bs9BafqMdNfvLe9txxy87X25ZUdDgag3ZRm82pZnUYJjvJZBNnRR7Hgts8NUn1SmqsYKN",
  "key14": "25qm3qXSVNRDKSVaEs68bi8K848weuVipRepxHuorvaU1LytDEKRV3Pen6PXhz2hg9EXy5PsDjn7dLURxM28Pqqh",
  "key15": "3vngUfUvHQmSyTPSiNUkHBo2YLVNYXy1DyDVHvi9bAY2rwTGCNH32p2mGYW2tbFfpLu14nxsezzM6qmS8jYbSxhi",
  "key16": "nyAvhoNwxBHzLyqYmsSvgRu8Uupn3waQbNyBa5vxGmnBTGaDf4BGwYBuUVSotUMbDDWdQbs7LHtTHs21p7nqcgS",
  "key17": "XfMSVrW7pSTn6PaNxCc1x8FhGCwFguW78RW9pTKuQUyv6zpPRNysi3qn6tuuyXLjgPXwqqiCEj47GzJ8GHdt5Np",
  "key18": "Qreb8nsASAJmTEdtxutNGq1r2kWs9XseqqzvnGQGgQVGQtdgU5vV54PXEwHu7FdmbJ251co5gGz3vpMHb8LGomW",
  "key19": "4H7RKq4w129XMjez9w6x5tLvM7PfFNFumTrQVJbmP3wdDRyFGiWXyEGzgvXb7gfJF6kPAxB1C3w85RKHePzJurwh",
  "key20": "5SnUqMUYCZytZRDrTDdRJXSo1nZRJDLUzjEAGKp4KRYrbyAvk1qSgqxZDNZEfFDGHCgBDf4W38qbGs7skCzGPogJ",
  "key21": "59wQu7eRVtzWRe3ZdRVBe8RJxjeoTfj2a7ca5Azi3jPjm6zsjPWJtXPKkj5a4tUgYsT9njx971z8NUJmWABTG5s4",
  "key22": "2vx1U773PK3KE6ZBiDG9CBdQBU8TxYriypc18bEFSZd1JC1S63PL3UQNUzUK7BNwUJKrvT4KxDqQyeoW3ApKQEK5",
  "key23": "52tonshwsgQtvKoDSsU1LNPYaRv7GBtdLHD1iCHanHtAWvApsem5gd9QJ9J3QBkmJURqLdPopt83Q9osHjE97oUM",
  "key24": "3RdjxyouJa6x3A6SGk7vbEfS9zPuXuNXiR5cJq6QYJJ4snpvmeyMKedeYGiBPiFiPhhNFZvof9eoQJ96thvkwM6a",
  "key25": "3eYVoYwR74FNY1MUC9Gtyh9k12ZngJVPKuqNQ8hoFSge9u1G5ve1oCccjdTyhKZwcYt3sTiDGQUpvwwQm433Xpa5",
  "key26": "2oi6C7tguG7tx5NwE19CxqB5CeHRbWghMda3zVHismsmb45Fht8KHanCycDqLb6bumfnrwwUZsaowMeLxoaCdXCp",
  "key27": "5qgFSTLsW6RssvXCrdc1TJ2AxPRGYMa9pao2ZAEG8iZ4nZGh9cr9kZFufH5jGT8HSobsp8TNv6NN4T5Fx8czwxCB",
  "key28": "oYRaJzy98tJkFYi6xqMu9SbXsVoLZDCAkubfJtHF9wtLEoz7kdhGYNLZ69zpzZd9p6TY3bmLVgb2C8n5PcmvF5K",
  "key29": "a7jfvXAzyaeg2NtPES7DkxXJB31XUBVysu1ju7scNV1WL4s5cneuNKy4KeqncorxTSghtxqqTxNxg5cTEXc8iSu",
  "key30": "z2oxnVwQu6f16dMPytB7LE9fMNhqGtCa3T678ND8AgDnnu765RRRkdQQyYCPRnfbFrxmVyE9QAf7ciM2naH41QF",
  "key31": "5PdUTerwcAejguqF9W1EhYE6vhFrA7kcMxf1bi36xPYadjQkQvkkfbEGYgE7R7Aeekqb9z5rpf9bWSajVk8nmijb",
  "key32": "62B2ayfxbLCPZkijWMkFhz6VXttmuoBX7XZ7ukNz5uQQUg4oY7pyCDLD9qj4G59hMyz7wfAoVKykWfuSSRcznTSB",
  "key33": "mnMm6i25KCtgN9RTVjR9fZn2NLhJPoE3DJ4bEttaxpZxVfGKUzcfs3VuAWfQ3kk8cmpaxK8vmwyou97bTmxKVRZ",
  "key34": "2grQxF953kFW2Eqw388wtngVSEvbaWVCGcCGF88jGzaoFSdGHe5ah3PfZGanJyAFRcvaVTyLwuZdSqLuWRQowjdr"
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
