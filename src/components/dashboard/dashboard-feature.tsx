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
    "DzTckP2aSaPupNxwzpwJ7MfHDj8E1XRfqfCPxDxGTXnYvyLqJeyrFe5jmCufdWpXTs8tTJbgnjV2u6fi1nUhCxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ec5CxHvXruUhFqXwDkp5RPF6fCkSShk31L4e1q3j2wAz2G6fvq7LxhJvaxaB89VxK88Q1qEVCKu578mrmuZguQF",
  "key1": "5NmVCxGG3vwi6d6oT3zjoSH7Vqw7kGY2EBwjwUuVj6iKXxytpR28XoqNWKeDuAkMLFPy82VahAh1VXa9swWurgBA",
  "key2": "2eWeadmFUxAjinNzGmFitfDFuuzrbdvQMeJ3nJB9J1c4XW9yEHkVUYjqMEpFrRPXLarf8MP8xT8TeCbZYNjmJB6A",
  "key3": "4SaXNmJ2hdXmfDwBoNdoZjsvMGCvd7xqGr4aQU1fRuvZ2vkfiuUkzUJhNKPGFyFghH2WdVM4iXnkpmQxaeCK1thJ",
  "key4": "24aj5hkpVMEQM9erNAejgWP2U1xLktB8bYiU9EUTcSgiAACQiS1hKmhk8CyPUGeKrwS37rcXC24DQSfEtXdiQAC5",
  "key5": "kr8utr6Ar6hjRzZ2XRC6Uu11QAf97JHCYgi85pKCukerDoJkhrmSQ2qLPBt5wdbEGQuz4vAT9zf4C7VuKgoLgUg",
  "key6": "3vfxN3Uc2GCJAtXKgo6n2nGqxtbiSjqBjzLSHdCCHmtCW7eHLV9iANRh4qm2hwpk1d1H5hB33kD714S1B7DzKhSy",
  "key7": "3F9PZJ4FnAS3ee4BYaAUEiVZaYfX1ZDgCrqWxNsJGCRpwoTb8pSZ1J8BwEk7EYEPJ8tikghESN6Td5hC9PFE2B5n",
  "key8": "2HDPaAgpev2bWgkhwv6vkJxsed5cE7SR5Tfw8tRCftmtoFndYKJh2fKBRB3vLwBNq9J19KWg2k6ygAUtC61xVZuL",
  "key9": "22C6sPn23hZgiuLcMmG45kRkWyoHtmUJF1P7LGvH6waXoyGj2vAbMSZ5PPw1igfR6xu6PURuFk4urLYEoe1aQGVB",
  "key10": "3CN1AASwhFvp6KGJbEV6fq8xJnfH7R3k84bjbY4uLe6otCZeUCf8dJATaWr3nxtYkpBZNTHAaytdwPzjZ1dFKada",
  "key11": "rvRs7Xy1VMHbXwnfeuZkJruKwvWwK9Z23rLcxjcG6gcK2X3jpM96NeCqiV7DB7jfd4x9C8qP4q3zVZvDDVAPvc3",
  "key12": "4Y8DZSYZnFN2XUpnyFnfNpDLBY5YKWrXRX2h9HcVaEQNiQ5e5CHZynLG4EuNdPddFhT8qHoxwtNrK31xKKezYVUS",
  "key13": "4TEKpqBYMaKwytgCBaCDmh8EVE5euzzaaFXYWnu23YP4A3rEL9oba3jR4TRAQURTVx4cE9CVbP5gZxNwG7zmmQ6T",
  "key14": "5kvLnV8A1WdPa8K6rMMpKvi5JExuFbj2y3QpVDL1wFARVkx2ZjXUnV3FcFspEZAQfy3siRZMFNhWRaBYpXj1Tv4K",
  "key15": "3ma7nN6yDDF8pQf94aHCKphWV13oMqZaXQdTyoMw3xHTG9ayskRJMWYkZDFLBuvwRE9rRFtM6ShTsu3Zuhu9BUG6",
  "key16": "5Cqn7D37Fn3wHM6L8ndxpGEkjAouvkex5rroLPspdMWZj7GNRu1GfSYmikHAa1cghCFMbk8ZqDrLthqo43hb6o4B",
  "key17": "3q6vzNegxJHxLZXAa8cemy5vMxjZ8nXJMsHxvhKcks2yPfdTFhSvRHJjBMdHRkkoHD5SDTMsTrVHVzw5pjSPG3wT",
  "key18": "4vQP221swAQwVBuPhZnf6RQkB4ca3MGTU5saezQ6LgXoYQ7e9y1SWCopzRwKcGBjmfbBfnfoTrNm9yC7h7kgZB2A",
  "key19": "3j3fa2EoMaMcDvaUwrF9fYEymetAw5i6mxhSz8mBm15mwkrEznXjwNZBeKPY6oSDdz4X2rRXPb8yTMjnFHwMmzHh",
  "key20": "j9x2i5v5M9R7HYtBkwBWkoN9LF54nsgU3HmLwDL6xqJfdMzEghgyP8nVYdweoxwZsH15coBQvuxcNrD9HEVXv7j",
  "key21": "4hxKota4DuMDEPqQKusuYYCvBEjGNvYq4oQQ5vdyGTxUZh2XCePrjo4Bio5cSXvV5PzJLShixH6xwpwM36BmxTJV",
  "key22": "2Bw2WBsuHMbZGf8bWoXL3D6xatwf6Z6y74nBgDUsLsiboQzZ9Fy3am9aRhL8uA4mkGU9FTCsojiVHonSYMiSBDqD",
  "key23": "5uBVKUYwP9jiREzBa1PUDfZG6x9izLvmLRkCGJCDee5dRWVVzC8kJmt7n9uk7dMF2yHvtScJbjnqXcUDg3hTKfHL",
  "key24": "2b8y4fieW1tWvNhu2hEgnXatcM1buPam91BF8sLTLh6o2guN1hLbQhKRFzAKqB9gUJ1hqHUCKmN8fAppmZ9CPZfc",
  "key25": "46tRMhJNiTzvgZmBVnGv8PSrKVJkpdJNA8eYBiyfm5mTUK82JQiDHKgBMDFWW4eB49zDdujDrTn8m32WkvZwvR6T",
  "key26": "5cu7ScbrS5Ux7TuJzLydvsut139zYWfan4bkdbmQbqJ4A87a42kFHCk2nVWc7U34ESwgBwdqYxFeQdaRivdMwDfs"
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
