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
    "5PFWCAeLnqQiGtzLJ74vww6uoE68AgeBRn5qhojvx6JW2n9NPoTvrmBktfE5FUjvctUboGaRf39RtiMqTLsZuBFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkeiiLgbWMN75Z2PRvAaBNjcSzDZDQ9FByDKt5oyGmWdDqNLuB4ue47dbwyCgNdFrpfgK3xcgrqGCx2hdRp4AfH",
  "key1": "36bH8FjoxHiQPgbLT9PytykASNzK5yMQcJG8uZEPSnwvdd5K6brxUYQC3Gdz82iSmF9ANpFW81WYnhKdBjGfLTof",
  "key2": "49C8cx9pqCLKBio5tPwrZLmXLGQoSnjTTPoJyj5ZaP2sZFfsLdvdreDCJCghFWtPYgAPJhphYn5VtCfCckdDp71S",
  "key3": "g8Px4NQoekGFe8e8DZ9a6pHM8SLqE1kAvjqH43oK1KTVMuMLB8YfKxQkUFG1aVRMcj4K4jVFmK69YP8EBwKjeNB",
  "key4": "41uUyRPquEbmJXteQeD4CCDM49ZdxyUuLUH2L9rDLRFpuUUeryhVfqbct6h8btaQWPxkGWifb4Y9maw3dJ5L8hET",
  "key5": "2xHdugizpbEP9yTo6W9dUaZuACrbwJ5FEFH3dszjFPU6qCG7BB73uqX73JruyB1zQZyyZ7951LePXbmAEiPH1wiW",
  "key6": "21qRt9KU8SrNfHP5GRBRoK6g8N9oDCbxskvhZiyMMEZ43zUR9GX6FYcBnYs8JwKfZs1Uqk16qBPNjNfRzvxbJ7fx",
  "key7": "e7NDcFxSMzyDwziToecfG6Lg9FKAQGymNG9zCHPnQCe9tKxaFdVAwrM166E78KeNX8UyPpT2nAGuqYc6Hn4FTQf",
  "key8": "2CsAGU4FwgLscjW7WRKtiKes4Z5jXWCyht4YzY8SKF8CnKQ8wmQaUvmLtkMWid821fzEJKuqHo9fYupvcV7CuCHV",
  "key9": "52b6LRRMx3C5NcRHWByaVYPzRcSZG9Mqj8chnVEjikMAqH1F33dNmjy5idxymthHxqpm9BEYXdJ4XHZGkoURSpEt",
  "key10": "2m8ihXwuc4vUoBnSmyLaU4uonwFQgxjkWKCoAzkmDSSoge7AM3JBvm91mNy8NAyXePeDaDTwGjDPzaEZGwkxjhFc",
  "key11": "3bgFS4NxftFrHgDvyQaeCYBamgDc8WBYgJ3cskLmPfRioFCcDBJKs177h7n3CkVr1pKsYWSZ3QCDagaJ7oAjoKEN",
  "key12": "5R8n5bSbXRyM3cuUFL2nVJ4KJnYDToajwKcrgnAdWsFR9UHmnbVJ1HEjjH3zxgaopNduJUwSqBocJVpmiMa8jiDH",
  "key13": "2t54YonByqUFKuxNbzKqfteJQV6Lbyo5dtA1rJe1kunXWPkk6oUHZ33bXdi8vGTF5yNRKZQ88FG5z2HBJSf17mnZ",
  "key14": "2bAmakLSEFVZnbCtasF83ompnsqDp7e8w9EA7DdDLqsr3Zqnogad6FiE3jYsycQAFgPjkbqSVXhYGMDZCjPgAsqc",
  "key15": "3du2cTQZweJYW5gpB2pQRopQF24ScsNiTD9SQjmqpJZDhEk7LZGDcPCno1AH8zPZ2oLZPH6Vz2Pn4SgQfiPWmbp",
  "key16": "5CdC1GgA4eKxgDAWC3MeVYbU36AiKaQ1LtKop26oeu78wPd789HaCFm7tcU7wxfenpCQCYyxiz7uPyXYPCtD2SdT",
  "key17": "4CvTm9gBARhskLhhGSHZnNUBemsiaEwbgvFZ8RcAUEgBVfhkSAJQMGXXJLQZfbZPYrcKskPoLzMnVLk5S72Q9AvW",
  "key18": "5ARufnVsrTACk4KYNdqZ4pa6enfLtespiB8tazpfbCKDC15DVo4F1b2TJDViVXugoH1NMzLEiU8bhq5Qf4mtusY3",
  "key19": "5VRNR1NJebqFWgHxcXA1eNCZFA6gj7eX2Tu3yMFRguy8qYyzubzQwGPqLWTRB6xj6UneVc31owZP1sEiFPziexM5",
  "key20": "4rPKgLCWxabk8anLUQ8AgU9ezyqeTc9iVF7zDCXxStngAxHs3YdhL9JJZ9QBLGAcH29pkGhJtnaJdABcuKNFhfzi",
  "key21": "3TQS3Hm3ciQi6YJHKnkFzvcH7pCCFvXoW26mA5Rg5HeSrywes9RmpNxffszWjbkciHwxS348Tt35UWKfzK8QKuWL",
  "key22": "5o7Dv5nJDs1t6dBNNZKddThWGhQgfbaefDukMcwCZ5gN8VqwZFbKR8nd7vTZ5sqgBTB2fR4t1aaenuXJmAHS9Yc1",
  "key23": "49rSqxDvKjTXrVGDmWV5d8Ln9GziS9rKC7x2PcLzZVJgQDZGsnVLn7vvYk1kf1j3EVMZvBp45ajgyZ62W7GK63sM",
  "key24": "4XwEig8AkrgowWCGuvWRS93ZGL5VN5CEhTsznWsKUyi4rdMGQNDmii7vwSnHmTXEyFThSbVATTA8CMBq6cPysnqy",
  "key25": "25Nd8a8Lbk4oioQjKBWNeL25DranVA4bwjFjDYg4LjGZviFPXh6rEAd98Xwk7JUcQsmxZpBztz1LdCLxrJxxm4YY",
  "key26": "FDzpGr7jobpoWqnJpzVk6rYieXG7yUaBoYnNfJJvuGLzmT6exivFcKZaRBcjkY6tLMFFBKhfAt2m1BhHVcfGrXJ"
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
