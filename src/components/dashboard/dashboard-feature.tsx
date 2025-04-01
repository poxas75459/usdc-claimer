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
    "5nhscoVm7fDPehtBwA9fjkUGHNb7HQw1Q1wnZS96MNepndZXLgCLb7Wp6ev9Yz2i55vWAkcdFnTV7qJdcQ7XEgK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lg6yS6nF2j5otZoUBfmXmzz34vdHk1QzhjgkwG3Rx6KSYTGDfsBcxnRXC7W86ZBBxn2kLASMksrRzxUfM569nUe",
  "key1": "3euKvAnBngFCedpgAH73gafnMoChHho1ULYib496FCLJSmHun2ah1yDK1Hi7GjUtBXqHAMKhTnScV8N9qE7zXb67",
  "key2": "252DdF5dYuP2WPvTUFurwWFam77ipFEeWd3YjQKEUdyhzdDQtPC1NAfFySqNrSAYe94P1Q8XPjjjuUBGssF2uYfY",
  "key3": "5LUUtWGjiNEen7fzH2x9SyaT65g4RwHzv3zUGSHoQU64jYaYqcDhWo2Azj3JdMis52GeNDgVEehi8P9YHz5iTcbZ",
  "key4": "3aAYe8C2qDLVy1ZTuoRSMbmmRRZkMBWDam2Y2ZEm2H8nkrnovC21Smuzi2pZVpTbYZ2onPAKh4mR3jh8WnE7Dhf2",
  "key5": "2JyAKYVQBywtcYSu5j8ydT34yM3yraNBkGt875d1JWGEnpaa84Th1ohntG5mmBtmp2AViWFchuRzJtrJkZ4uNBv6",
  "key6": "4o9nguhwsSMXZu6Fqm7zZ6qbxECWsVwBUNh9ZxbnH3F3fBGZt1ALfh6V88yzZgPZZaSqG6DyxGKTeufTA5CsXzg6",
  "key7": "4PE13wYEhk3rNrKfinxLDDaS7ca3LCv9g16qBYkXjFyqWK5g3AmTf9EiNHabErsekSnswDBHuDcgucjPmMursUqX",
  "key8": "5XusmpAATAUiKRoxyidEA4SmbwTf47FCAkH4LDGdHZGbFokCHm8q9pCH3MLYBF6qcskzKjxCEawDGf5EVAHkLhr5",
  "key9": "9ieX8d6L4zjtr4YktCbKztKbz1AfmrFW8RBQQ5QhvBzmteKpwQS2ppz4ZjNWX87gaPeq7KCAse5RhNdBQuXt4Bm",
  "key10": "4jZHSvqdZzAn5NeNEemvXMQNYf9fLgwXpwMHgFG8KHhYpMg2NS317h67eY3LSTpuahKGnv9m5xCEAgmrwPy9gNPj",
  "key11": "28Gn65BraVntKCsS4vohfdcvwLYge1Zzuz7JuEgW7WWHBd492WkegSQ5wX9wEojBKAjFpHixWn8xsAFRvaPN9xo3",
  "key12": "3onQ4BccmxjJQTr1rGDf85gKPDbcEnjTahNY4pwuz8Rv1UCNAHviGJCRX8BqVj8N4rcyvG6TJat4KLxwG18Gc863",
  "key13": "oVePPHa65uyBFqnLx4uxTpS9M1cbEPMZZ1ghJmX93qsCrNHJP688dRhR18EzyYiaqFQ163cy9xL83fsV9DsLSac",
  "key14": "XJjekkKYyYk4ttzz9kPJPsdg6TEY3NS6CuNGAsTxW5pyRnzLNL5Ka5R4tzESxmB8D7FaJgVou3PLPrRtSNZdGi7",
  "key15": "9V9x8kQL2PNfUo5AfrUqb7CbL427FsFzYpi2Bo1VU5wg87UoeG1XJRxeysu4oroW8KLrajzQ4qrRn45JTBKyPE3",
  "key16": "2tov5MnqREkzmwkDHQ1WedXuprQ3cVGpPB5ZTvBtxeaAHR1iiYciTPNUMAheZTDSiWu1NdvVb26DADDTCvLpGqhM",
  "key17": "4TpDPLwyrkyeoMeZ9bbfTkLSiMua5Xnon6GZ3g2UKo3EpFbxaKCqEtAtigUTjxipa1equMkxP93gveqY3vP23LhW",
  "key18": "3YEEoCkLEdo7BaBdYzzqsAQwfEoCNA9L4hM2wTYC4Y7Ld3MuRpoa5knZUUDqBx4aCCHAz3ChEPoR2e7rJ1QA1byz",
  "key19": "5c3KGY1KGSkdXjfX1eRNpYB3mpB7AdLn4EHMcFxcypU3UryiuGA6oNXJGjJUgTiRLTPKx97YjuRyjKr2qqbjX9Jz",
  "key20": "2ex2tFCaZrrm1Cchuj6Jv1wqfJZ4qGXtnYXBrv7ABoRpdGPohphmgN9tuGUbhBAivEcLNMNqfmMwZext63dY7BU6",
  "key21": "277dN7cMULkMppUW5erbddp18uVyrXiCyZysQbu8JvR6BPZCh2eAMTkcqtsYQ7tF6pNCYU94v1zBZqz1vL7MzJKb",
  "key22": "4wN6heTr4JoQN5SidcLCBj1Edxq7JfEaaaYrbiqkHSJ6EG2uG1dMGHSf9y6rrRp25qeyPEwA471aNhRno9GP9g44",
  "key23": "3GysFtPVVn65LodSC213AT7xMFk2DmwT7N6E3rdhNaEGWhzCUxMZXr4x4n4Hmu1A8wFWzxe2V9uxDHj7uf1DioYw",
  "key24": "jXfz9ccAYu3GurzSWzpK3hUFtpZ4Yv6UNLZnXFoKCY9JmcXo4KQVayRwguDZTvU77dKTWvgDhVGRYnUMKTGRrBP",
  "key25": "o4CGeQw9jrUQBMzXMnPGn7GeSsDxz5zoxueqhf5Jvm9YbwJF1QubViTx4UAkktQs4kCQNNbeQn1RNBfqhCjD3mU"
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
