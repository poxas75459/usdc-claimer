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
    "64MpdLhnUubvEmiZcqzKJpLc9SyNNe1keXCEN51x3jhv8mkcvanQsDFvNAokS8TQ8KWduAdpkJ1v7yjerAxBdFnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8d8Dphg6prAqdDm29cnwvFnV4kCJHh8y6V6uEAn55FVthdspTRAzV46QGyg3cYkp2e64eYQksjqS5FhW95EZBM",
  "key1": "53uYdWtCMSmjpjrF6S2F61e3jN9hNrpAGz3aH9xqxrL2PxyXbMk7G1VYiBmCbWvuLBgWxfkd3Apz8QZtzBGVM7oi",
  "key2": "2bZrUsiAuGQU6NdHxMcjNxM5Mo1YKy8SsYEiQfgXynjchNRwD3QS6hCcC9YHULmFJwxQ8oRED9KN7SsZG4wntDLA",
  "key3": "bQH7jab5PVQRbQKgGUMhkMudxJHez72NmfrZXfm8UZEMdYAUGpqjDnGyt3kGSmVo5wqsJLrJak5dgY5rZVJsGa5",
  "key4": "3Jwy2dCTxFfYdTBBp5WZKVZxsExjvL4fdG87ikz2nN4i4ADyWszWkhjcQcSQrgekJdcrN2qorYpiRMoWhLrLXQjr",
  "key5": "5ooNpPyzoKoTGhJn4xLGrDBquc8fqLKKB4bEdpwKtgHN3nj7aip3t67f9sqLVt2rbYn5oWxN4BAq5i3eXeoMiW3u",
  "key6": "4QhPNGKBmMdVV6CmtAvvM55EmCkem3Y4Dqn54qN7Lp9GJdtbimMaqMFzhmwGZmcPKqVQEb84aZBh7fBEBqUnMzMV",
  "key7": "gkM9ovvfScKcxzLXAxWenCBuqtqUrWaxTfD8NARoaGCSQ5rZwJitSFvimPLR2SPc52RUhaMykHM8PvbDpUw1E4X",
  "key8": "M9453UxTdfXTAiEX6gGfZnwm6mUba6cJhdtPYj3T1Swsntw8WPhAiv4zcVnzBR6hZA2vjhBLaa5oB1Py1PfbYyw",
  "key9": "59C2nTNWrQPHK1UM9z1JXsc7ehuPSzj9R9QsU2qcbeJ6H5969ZzupcyAdLoTWrSr3DbVU79ra7jfse8NXuYZBH6c",
  "key10": "2Sq7zkFN5LjfPBvTXbsrHdDiWsPiHZXPNU2aFYJZGzHy2WuUzjLoGWNp8fzu4T4nMAnSKY2UTPPHSiasMivPnXWZ",
  "key11": "5aiFyFsoWLEkVJvNcAmvDuzVUuxigWbaYH16SAj92XLT9aCZywSQSAPcV81K4YcXT8MXAGUQiN2otMKfitR6tEce",
  "key12": "2NYuSV1STg8DhtbupYgYenqYa8ah2kBEkDjAGcmSfoGFqNxAt8SUnHPPuagVCHATou1y1ShSAvGdPc1JVMTcJQSJ",
  "key13": "3mHhhh6wUHLevadfsH1csDBjGjRPqfuRmkbdyQoZQ2fKr3U4kj41pUiS3wC2UsDxZFrtbPvwzzJc9RkpKorcRzFe",
  "key14": "yGoDkSFq3vUW6z1DureSVKLxC4qVhJqJe5wEBsRiEPTrGtV5n1SXMyU2YC7kGYVtJknYeGVurAEi8Fj3yAYRyG2",
  "key15": "5fTAW53dQmwgEckuAXWyPXk1cW4JvAzG26TReQ5HmRB8fxyLYdzEptwAG23ALPp3BXs2nVoornig5kQfQfLRvxYK",
  "key16": "CzGzWg4zhCeTokzpWpzr1FDa1zumhUG5CpezhRPtKKmQDG7PyQGPmEqHYgH17oLPev9Uv7wPKZ3cksixMkMJvUT",
  "key17": "5RPftx8hcMbZt2g67grh7xpRkRcBc3uwigtD7KHLQtTYESKXxvAc2ttfzssnLSPx5Jr1891uMocpEmihdcCoEsCV",
  "key18": "83TuGZzYiiXxFPWrxgJ7mTTsRW9knShbLdY28D28Kc41A8irqUJWQBnER2o8HZfbyxrG41JMYwdyRAgoBimBbWR",
  "key19": "33iXr9wzFdggf5a27ZnTzQFrAdA11ffY6LmSzJvr4rYPZCCveg2hN5tAZ2aS4bmbKTbWywD9fB1t6epxEjYcDEXk",
  "key20": "3CFbvG1pm7ZJzsNsKWAhE79BQciyb6AUH2AZFtUJbBdqF1mQBErcLeW2zK5kQvbgB3c1QLtasgsruedY7g85bSRp",
  "key21": "3nfNoyY8SfKWN4FbL9464EHRUqcsUrJTUx9m7KmfD4WbYw1NbZWhbre728FanhRJka45kWYccDW4jseQec7sXQaY",
  "key22": "2opp8zWvyXy2rp8b1GqdohLd8VpN65yAbe8Be6zgVku18ogi4YZGitQuumb4XCkRFcMN3KwZTKGAQJUcx94zv1en",
  "key23": "5kcnnqrE4DacBucRuMtx652hAQYb8NGgZudV8UGst9FQ459FgFAntVAMuhVphB3PENnocNQo2vkYcTPiMqYJoo25",
  "key24": "2pzaCLNZdNyb2uSsKYGmRsim3kFCQJ97DaXSsSeXBP3VD4EiYfmvCuykxetMGh3XDPAbRQeuvr5SK8NpZcLZQdZX",
  "key25": "38mZcXpnWkLAZgU1qA4oh1c7Ds6ciCPi9rtV9cDinbJrEbPhL4KGyzkqpsZyP4RTB19wyKgvfURBnii4aBy2Zc1z",
  "key26": "37gpNGXFusEkA7Z6AbkwdaxUc9n8BBC3349jfQL3SeEchN1D8ijKA3mMPv4V8LJVn7GS2oTSDe6MQuhkJ1mDqZm7",
  "key27": "3kCgJJ5k8BLq2ekaRNNH6rx13oiWYNqkmm7zhPFFVvMpcDuyddTX7uxekjWyYb2LCAXuCS6Hc4zmGeRLFKa39PiR",
  "key28": "5C2UA7ebSZprQK2Z9iMJy9tubFY6vFjXcF8zKGfwDyZu9o93BcSAmWThsXhSACDZBnxQ93jBoio8guSGRcgyww69",
  "key29": "4QP7gpPMrdMd1rD45Dmt8P5ag9ftbYmWZu8Qn7hviFjdb2xK5NQq8bwrQPsSsYK7ezq6vE953TgMX48r1QYr7PHv",
  "key30": "5CwpqxyEZXKQD7rGWJedoroueYqYhpDfEZ95bMKEVsyroWdNQNFz9PHDTgUsX7XAhK4THuj6pjp9NNr55spj44Ar",
  "key31": "39v7xP54SxGnur9exYLwbtiwJ9kc6p3abs5o4xpAYAnRY8s6B9WW8xFhD9J7TFmiuCkPHNwju5ZvUuqr7WgxWbw2",
  "key32": "3SmJhkwMa1CEgpH3P7PaugEiYyQMKjS4dtLscM1NNeVjfZWEAqsHn3uAe7tw2ktkDp16ua2Epg17tGRrTcNpbekW",
  "key33": "atjnWmRd2NKrAHVREFzok1pEi3HxK269wGFSRUksFcoiLsEDjuepH1ngHZPuT6jLeSUqwEFBJ5oLdZb8EYnapfg",
  "key34": "3CKsWuKcDWekgyfFYWVV6HtzJBUfDFV848NtJVTuHVaD7nurGoW9vWxgPFr7CGWZHVRbPNAXJdFVC7jPKN7TJPt2",
  "key35": "58cTXEYvuuZSzNH5P4UWZwD2nR98ZWAvtUZ4uZ2QHqMtKY9ZthMHLwW8zJQYoxPr7xrng8mvAZ7mhk9yVPe9MiQt"
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
