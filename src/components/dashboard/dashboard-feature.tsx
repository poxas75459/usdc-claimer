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
    "55PFuLbfcLpJJjsB1rY4Ld3rUK5CbV16wgQwmfsGms1W1sy9MeucmWjrB3NhmEBtYW4GqUdzcdfWhcAacjmUDY95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxJHYX9k2zeeabP8ixtNdXjJRM5buVCKL2sXbyf5FRqZRXc5GVKbWBBvk4sTaYrj7Sip5j3LiXV9aojKTY56Jbc",
  "key1": "muhDqqh6smnbt82sfQ33Qda4goKRs1X4GJkuL4KAQMvD8F4TYDoJb8avPW2tgp4B44Fev9wr7AR1eAvHSQ58ZpE",
  "key2": "33SUo6P84zWzKoGxHwNTcc5MyQ1aFi2ef264F2VzfhDJdfcP1jhTPGyME4XvD5Mtju8eAMx8PCCgowcjXxMUEBFs",
  "key3": "5prwHQBJHmgsh3U7A3LfukBqXeEu3EHJvPazaJMLZ4emaCQ8vv3QVx1RAmStqwsFeav7jqnEesNrnJFAFWS7Zs8M",
  "key4": "biG4nsQWs2d3auYAkAeZEvxidRG2kpu2ew2VZM1u94rzeEURQ4j1tJGZYDntYxfEWu2pPMoixewti3hTDK8QLYZ",
  "key5": "5P9mhvQvcPU6msQg2cYoG9pK1JwGsS89icT5328XJQenFtw4rAwH2rP6UJqoBUiTJdUqwVnxFgpf8LX8JFq2poPG",
  "key6": "G5RErjRkHrvp1S9C5GLn49ccuKR2xrg2Z2LCiJVfvaw2jCRnqC5chZrgg5JkVXKEWCaGrTXvhTxHeTKC9NtKbt2",
  "key7": "4KQxBsVGcVE7SE8BifJEsXbgaBFPwtVnrfQuK24AmQFSzqspNcPahy63X8bdqTVia9gFaYhSqZRN2kHEQBkWoBe4",
  "key8": "ERAuBipfAgTUMxg41s79EXW42y3BZjHsxCnMTL2CGooRDx2Jgs48VBWHJrZLE6gezDVzAwvTqfmTcYvaoD5LkZK",
  "key9": "2giRDuJ7KfYjQ2u69QYzXTNts9rgk5jhLKx8c7a5iFqU97jw4DHKiu3q9oJpnu2Q89hV1PmPbMC43f6Xqc3hvdFA",
  "key10": "4s525ExYfDMESDrurGSzvAfNA5F3Vuiy1PvcFyArCgkauLrpjNhKbmEEd9A9K2pXWR94vSB4K81VqxRhWp9Lzx9S",
  "key11": "3bsshQAWxajiXFQXmL5LNtfEJKEsnMgT5z7fTRF3mArCqFuHvJRuXFn989tGGmNFCr2BPuYvBM2kwURTFbK1RPZ3",
  "key12": "4178DkGenAKFsaR1o7coZkxwgu2py2DfkD9jacjAemRGCxysgbUaxjEQBoqR4Fq1bkohpVoskADNk3FqK8kQBvGU",
  "key13": "3fKUZVQYjotKDBwHgZTE1grGNRySYwaUko9kde4NUvsndp3kN5PCTRxogB6iXveeNepiKbyVKTYK5zuFkPpuYRgc",
  "key14": "5WKudM8SE4MP6rByQ6VXGhVFi8Cz6KLqja4F1ed7Ysq9TnQmdBY71Szzp2WLcQZR283srdA4Y6kQqJs8TUwqTAV6",
  "key15": "4uHqsuhuVqqGqWMXpu1W6wF1o3rb2f8dovHpuvVjm5PmyDbFUh6C566YectqisUMGdw3JDVK5yFZ9XyoFaUzKpZ3",
  "key16": "uzQ77kRyEDHE9VPQY9ozDeCc2zmkBvQHTwdxAeJMVYjv5Y6qPBC6gtGhawz5gyVNY4CALSxYuqudXATFy9ZQe7o",
  "key17": "5vKGi9yAk4MJeUGjLGrVKEuNMSjRgT2rPiwUCtrYhRHrRW4jHHp2DazPLg3PwYy5nQJjSCm5uDXgQDJ7ZgUWrf95",
  "key18": "3n85GuEa7LDw1K1nZqhHCGpSpAKYHg6wZYUzH7ZVS6XMti9WbQA6GGJHvJhNNiWg5csBLnbQ79y6WeSWMFQyzYCA",
  "key19": "5J9quxZmqgZfxKbQ3xoyiu4biJrsv5mfALUYnonnURhcZvTjECqD5vKS1STSsqFzwb5W6TFq3zKdQSH61hff9Dab",
  "key20": "2KobrGAuo3aeeKSdf683ZoVmaYSruDqgvA9rvLjkzUJVZpPX1Y5uuC1ZQzbfMSfLmehvaiNzqkNBDPgS7rmmR1nM",
  "key21": "3fyDVAuce4esRKgHfvbL15r8xLX739ig6Nj7Y3bHpHqn6nqdBCQF14Qg4t3TcsMWYZy9daKo9R1KHCSoRZcKAP7G",
  "key22": "3V9T4fSWnB7Yg7VBbWq3aAKE8xTLkcRzRppCWPP93aUuwR7ZYFCdYfWsxqn7TRsfHPmqUENmq8sSqPwDPjMWxCJq",
  "key23": "4asKV3c9wis9W7oiVi7fWE9MikPuFtPYMXncopf1JcwPyJo7tNdBHw9HdGQtjHGx5hcxUxh2jFQicKAHZwQQTQAv",
  "key24": "4raXxuqHBd7tDbT6HAZL9txhDzTqZCVDXNh8PWkHwFuTKoz14qzDGd6cUK4b2UTPUXnz6C464VbLDhZRGzAcaLkD",
  "key25": "5ErGkFjoEf76ehAjWdPMRhNMi59x3VVJZiVLGu5khj8cMPtWAeFrbrpVTcBfRoSaNnqjGm8MWvH1PBjvfmcysgSb",
  "key26": "5eutdA822T9fycfPeH1dMAQ3VfEw7oVCm9ezRM5efh8uDtEpVYSAh3VfpaxH4ZXqXJDZDs76bZUseSGFEXPTq7x7",
  "key27": "3xBRvXy62n1oJavrTLAr6QATRKchEd6haMmCJvi2GnTrD92pnYXQeDzAf9pmt7PAjwejYcX9W5W9r7Ltv7Enanq8",
  "key28": "FzziLfex7BP2PQRpb9G9Ko4JwwTxR4AZe8DyAayAY1mmNobDDerqGrv1fQ1ntnmtRNkfvJJ8ZfAQc5cPcLGVRRF"
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
