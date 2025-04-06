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
    "41DFAmFSEHnsKZvbAJ44dBKn9yFkm8VMSRJuW6syesuANduMAN8NHgNBCfmjQRMvRzCuQfRRKk6xhhiYtRAtSVNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vh6GecQeGNwzrbPZgMvuStvAAfCeCddChRypBGbgCFRjcPjFajKRwKFb9jH7PQXCzVJof2qDEcQm73osuGhPuS",
  "key1": "233ExTcLJp6Y6xpqWAGvDEQMhf1tzECC5XnXfaoUHkCLg3qJVQKXQYQkNPRsT2ExY3mStoPe4LNnYgrxYz8Hu54C",
  "key2": "2PV5rrEgZtfMamquW2abZzajHETfdhrzTrJ9vvjZPyL72gtDXKvnaAVUTzniVevrSXCWCwjPykz6G8kWpa4kVCaY",
  "key3": "3B6jcxT7oWNfM5qFip4Tp2WiW1D3z2viS6dUgN6GMJJHti5wf7R59B78v5v8jmcJZttcWiLNYmjDWiucFcvygbd2",
  "key4": "3n3sQbz7eSKkJG9Vmfiq2a9STeh3gXoHmEhYjLvJc3H1J5vJA5CdFQJ8hNCC5CiNzhNXdF4gJqQ8pzG3HEKZsyQk",
  "key5": "2r9aJUpzcDY9zSiNbBcY1k9EZ81Kfr9uhzeo4mQb43YvUF6e6cysg5G8iZ1xk1DGfK9yBzEqcN9ZPEq7vwHKaAh8",
  "key6": "429FgXqwj2MweLCtQuQ8AEJeo3tZaBUNk3siiqpPtWvnB6N28f8afR35UXKsMUGfn4R6gZ3ymYukwnhXRtspGiCz",
  "key7": "R1CQczuH7L73VYbUSNLacPDtKDAufccQFgScsp1b54Dtpt8R5iPPJv6NhQoZ4ne178bLJVHg3XqhRre8HVugP5x",
  "key8": "39mXytGBMH862HLQPSvkggUGXp2nAL37pRCmvkEQ3zdeL2JmmtQnQA2vZ6TJWVYyHN9NQaDjKYaiVQ7Gq3XNzaGD",
  "key9": "32jbHJsUvkj9b2v67FaqFQZgNbe7anJY2mCXhxHvvrrbtnCmsnjF3MhS8wW2uw3YhXMJPq5oFLDQk46SXESW7GP5",
  "key10": "53RDThBA6tdz1muxaL1bRhhyqknac4njmqarSSa7k9u2vyC4o7pSjxkoEW6zSf7uq3otqD1df86wL8hLR4NpZcVi",
  "key11": "26BvNmoSkmdYB6vC5WMQ8GFtDh64CF1F283fT91XkEACRmujkSd3V3xjsmKwxVrchcQbjUkMijRvNHJV1dXFW3pi",
  "key12": "zGV7LAsZ1UjSMRSLnFjPvG7AScCtpYDT1UYyGeZQXnmZC295aEhsWpLMSZfeEvVdV6KfiiP47aDs8xcPLMpdJBe",
  "key13": "3RzrV6RpqkKbHUZQHxu426VTvyf8Rhkeeu5iDkiKpa1YFERCUD8CesEe1h5zs9NK99Vk8EkjY6sBjzL4ZnS34VHS",
  "key14": "pLSJud5VAHevbmmzqumpE5hqVcbhqbbE99V27rAuJShej8XQGsTA4T6mzg1THiZfz84rX3MDBak3RN1vnpRYLpL",
  "key15": "2qMe7kiXoAn58fJo8EJ8i2LhJkeHYq5Gq2x5VWcYzQ9AjcqpztwvpqHeyUuupiMB35nyic9PgkTcU6R4qULgwQdT",
  "key16": "4U5GDHBbZyWzFSp8mS9XrofqAF1GhnpA38VBH4412Harc4wZ14beSZKhXfnPzTv5L1fXLXJKeHtXkZDP5Wymne1A",
  "key17": "eQXz6LWHR9N8VSA43N9JhWJhc6ReBRSPi6dciA9ipfZz4P61eWs8mC3acxP58QooayhdoF1t5Dw7d3hARESR67f",
  "key18": "66WAj29Jo2gRNCF9coUHopCXM7QDipHdBxcqoJYnJKDzQFtFxXMKYVZmgbGBYev4ZAvTcHFVuNbaamhHSE5neeaG",
  "key19": "4gneB95cKFTDMR8wPR66pTE6md9Zzu4kCVMRcUrPBZQDUnQeQ7bgjSnGjbfRn3AAazkEs8wVJzN9DUxFU5V8wEe5",
  "key20": "56Sz22aPpb3PJwubgtXw8QWK4VvWhzzgHY14iA2tN6TVjnP4QZJN5pFohgEwuMLsycswuQP22QNZkBewAxBi2j3T",
  "key21": "3FDwsHpZ2aNQ6Gr2e7xhCMHukrjskZV9MuULgLmQtasLcTCA6gCtGYcjWmnd7wzXa54s2utfhHgLobYnknguPH8m",
  "key22": "4H3tAaqQc1HVmE8i92qY3Yeg7pQMvggUHv3HviYGj7wiXGVTuEiUcy4Uetvx85gBhnpsTtWJpUsFNsbdNsn5rtFR",
  "key23": "3kT5k73rwT1a6HSMWWroD4h4sZRk8En4WpHo5KwofEK5kMF2GqQjsaQqTs6rN4nN6BbAvgbqv4Ga9n6h4Dt5Lzak",
  "key24": "2VqRdGFEdoWmXydqNeq2Svu9VYMmQQ44uw2LbwFpit6MBtkpGHnMNUReqdpQeDASSFhRTRoaLQyy18beSaHfsYRX",
  "key25": "4xjkTAGi5SBwwiLhz5krXapuMvzxrq47XiezNLbCC1PrUFq2nGTZ5duTETK48MVRkDYBJhpDQswdgNLqrzcgx7h9",
  "key26": "3eu6qZhnL2FHTWbTFhUAahPSaQjkFJ7NxXbScfqGrDY2gaTBtjzdhVhSrdz6cGcckPTgQHPjKj9aos1cf1kN3e4K",
  "key27": "5jJtuXfHBNUozndu4FKYVUnKgB1FJD7NvsX6sAnhDuq9pTwukAxhsEbzMaca8DkQfxjsemEMoVM1cDH9eRpcbjzx"
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
