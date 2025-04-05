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
    "vBeepYp3jriZjAgcjuaLtQCVC5c5oJExydn7EJdQHWcKh9iypSeX7Wj2csANEpKUb1uWeXfFqaxZfyCpdrrt98Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYW7UP31Tm9AV8H1nWcLtm8bQuZsCgBqK3PnNGPMpLAAennPM9scE75KSg619Npekc7dqoe4N2fbizLo6KopYLB",
  "key1": "47uzyz5sR1ouvqYv8CmboPQbxqeM8yWKy8sjUgRA56n8Q1erSAU3QMx3phFwJ6S1d7wcotdKqQ7RxX2LtHNxYHCE",
  "key2": "3WinA7RjcufSj6JgiKoMZGnoxACXb6xAdZgFyS5cgWso8Rv6As3fVVKrpJ8KFAetpXpzF4DZhCs3b7Qw1tBNrAsq",
  "key3": "i4RfypfhvKk1dMfJcD7BszjcpMAhohvYg4SqKxEcTLCBsfWX8FTLRg1eFWixBjLWPiTuaHZgtvYHr3AMaU28x2x",
  "key4": "5AUjE6en9yH5rUa6HGoGbcjLAaV3X6j3cATbb3XuactPBjkcP3ZTqzYzjiUi5QEsDgiwjef8B7dtgNkPBrj9PzTp",
  "key5": "3JtEm3xgjAKmvKWEHTaAcxp6Strb6Zk5b13nTRkkxA65nwarXVpPW5wuKz6aZ8VRKy1jao8zkxPB23kjm1SqumuM",
  "key6": "rD9bR4NQzoY6y8nZifUMRYvhk6o6omS6frSPouXx8LP8AnnTsJvED5uhB1HzSUkxg1n6u1rKxGmxfR681LCXtY1",
  "key7": "5fwdeccXzpZLqZXUQhZLVp85un2VXutphmiKcEqrAMQYs44KvibVNZ5cPqNsgAcdoQyrB3sbeWQw9h89zqR4WFNz",
  "key8": "iVfyqv8rJWeoZKXmzkknN1V989j6tSTH3Ynwyg3r7QoJud2yqavBGaJhWdRQMHmavNP2Mjjt9vH1Q5pSzhZ1jWY",
  "key9": "LtmJfWkZwSS5VaMy4Wxv7CJAphN4cgko2tfLEh7g8Vwpaa4fsxyKDbpPzVDrGvuWBTjMVqUz3GQeYwC84rNBhto",
  "key10": "uiVJZFUoUjVuDx5iugu63Yd2BbqmNL3Cv678KkfBCEjU1Mb5ZZf2B371SUGAK68UbZQWfkqCwdzK9WfZvPojzkZ",
  "key11": "ZTUaZR9cjFjLqfcVexLs9JkMgYDtNmxYjFduaMbrESCfEFGhVJt5Sfncke9Te9ZQhhi8Wr1RhgG829KX9QHcf5r",
  "key12": "349ePU16SQKvwD8U9FTVnuahVkGY9TVB7z3Q4zv6rPR4Tdhn9Tw3zojG2vXMbo5gnUJYxRL69RAAzPT5gN7b1uEF",
  "key13": "2DytHuUApLrBP2jGhVsWhWCMYmpM3ECsZ2uphV6pFxAAQSekSfBprtAkHUCYPGFMZkan2aCeAHmkUo7rTnQmW4BS",
  "key14": "4GUgc1b5iHDik8cYx8MBSKZFyLXEZJ62m4zYGT2AZGTY7B3AFE7QUjVgTmYsRMY2N7D2Lu9uNS3i6wnJ5b4HpPAv",
  "key15": "3z4KMUeibM7aKGHeBjTaBq27FwUGjnKwPiG3b96dephN12EEjwYe3VjYFp2XMqZNr3ggiLmxrsJAZjJ5GkyocLMw",
  "key16": "4kgq9Ye1cSAHwZAqxcz3kYo9tn1tR3nJTBM7EwpmN9MbMXbqpYp3ZLZeSbchCEJR9JKUjN2TzRxMijTBGc1EnQtk",
  "key17": "5PsGc2pUt8ygP2JYad6cBi795gQHXZHRnAsJaUXsLEEDpe7kMUyabDZpee6cu7beQuLVoiAbNhY37SSWy5XD3QxX",
  "key18": "8c6cB1KQ7z9pUZXtEHiVXwNJk7F5qUenv64m6RtoitH8bKuH3rrDJdvRbTgcQhetYwSsEKJRcKxbhtwPX6oSARV",
  "key19": "2JeFaWJuZBPS4n9MTZX2jS9KExpz4FJh3sDUNR1V1iQ3Z58kaLK3Ad7Dire9WdCBWkdry5LLPHjKQ9aTnNaSN2Nt",
  "key20": "4bRvZX5oeQ8BFuMkuVFdQVbrJ3AynRnWXwFCXz8fdPhQdFCZ4FaNiNCXy9hhh3WnzLLXu46YBtwPtWfEMd87p828",
  "key21": "ZxfGTFGzajBpTpZAFvRAtMe6pUiMh2mDJt7jdL8q9BAXTqjFvWz69XbHzXgexa1UKKiStVTvQU3NFdm4urp8xa6",
  "key22": "4j6fCWKBEmd9sp4E8guqB945P3gbyzkSFLpaQK6tvU36XDEtpvMPKx35kgnwCDqBQHNj1w4UR8PEwZtyQB34ssia",
  "key23": "5cUfEZndXXFNmaozKH5P311a696qzsGWoeiyuyNmMd8doD7rvfoiNkeymVWFoxRGuVfKZab8gHCom5RkXpxDKdJt",
  "key24": "3fkHwUxg8reo2HNw3iCdFhpfmjkDFUJhRj3LZfS8bmackZu4dETTpxnrKPpPTx2ex1gMVfEL1B5nrtHn8Zhto9HY"
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
