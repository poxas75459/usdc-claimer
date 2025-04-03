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
    "3Anzdnaxy8L6g13bySVbadRZkvejQd6kefUgeTNWeDdGx979yJynBd8YnwgrMERa3PMWRP8GmQFKXnYzezoyar7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59bWenD64FtwtL6iPfdXfB1iQDYxsbf68F4wiK7x9R4xnAyGN5JEaEf3agSKs7aJr4rvLRcnPUX2RAZXAKUoSTGF",
  "key1": "5YpccG7b3yXK2QFzaaKfz5ceVrBu288M2UDgjTL5pX7FPfoj8Lmgr6umqMe3pyYivLfLKK9xGZyxHJ6v44UrDstw",
  "key2": "4174LagFV8cJmUGYh3j5zCtXm4gzbrXEb8WQH5vMHwgrUY5uU8gPAka72GJrYwVrEEammEtdGWyYQ6j6fNyRqqxU",
  "key3": "23vvT435yhmXtRXYziYKkN2TSoNTuP3CkbEX3XWLyLo7XTHmQxwpkyc2QZjTXRKkJvRQ3VnB7MS9B18zhTYnFgZM",
  "key4": "4AczuN39B9Eycy1S9TeRzG9GVv3rjnQwDRnfqwcQ4bUb9GxBBjD1VQeoEmhExBP6efYryQ6LrXWGPH88Y7yWCKTW",
  "key5": "3zvu5rivqCRt6jfW97xR389gyjr2yJg4gyLPHfsBUKg38PN5wHHLqLfgorDYMT3JkAHgPNDuQHvNn7pAGcnx6Htf",
  "key6": "3ykxHeJoSEx34pjcY3AttSjGVbgFPdmnDRRA8DYf6kYV8K5NGopPmVsmxST8BYg6MpCWMTuVjHTcVKWZAdQbfoTU",
  "key7": "4jrxdYnPE8v5TfPjXGmJWY8hJMEDvQhpwi2yCjwSqiMmZbAUFKqpnThnMAL6T8ANuHturb23DDi4MuH9yoW2oUdR",
  "key8": "U69NnGQRojdWrZY9cym7uEdszwa4ZwGnvNzQcikXXnAdUni7ET3Ymr62d4PULSpgsMXUkYQCqzTitKYd7zCNwun",
  "key9": "5Jj8xoJ3eZj6qoof4DV5K8zMzzfXTnrwJRGbwXonVzEzdCmX9uQoh32c1RGGj4yXNvaD2zYTx8oivo8z1CVg8Yq9",
  "key10": "3s4CsBRSZMkfNU9nifJt7iiyxe1rWZ3S5g256kET7X7L6yiW8YZ2VQPL6rnGHUrAGkvJfqkK6RWyrHNVvyBZdKm4",
  "key11": "FVijd2WL2HY5e5KEiv1D5iLKJYYiudTCjWu4WwYFh5fxWHuBgQjUAGWYC9Z8rM4vKzucLxrp1hGacFKNvCt69xe",
  "key12": "2ED61kaG9RFxCtnKxbUye1CDxcc5CQzHifjSiB4VnEWAy6K4LXREnUf6m7VCTAAXG7jXMhN2Yko1ojqRyGpYqbob",
  "key13": "knvS4o3H34htBvU34QbzXphCadwBzbFE5m8KawsCsrPsyqqEBwUUtKuNATakE3JdpPAD2HUyYiXnBxvYpYRjTWH",
  "key14": "41TmeEwRpN16cXJ5RagXL11NyGj2rZgRqkNSd7u9MkGUNcAghWyo2Jed8Y3WzZhKRm1PzvdPpWpyauZJRSf2SkJA",
  "key15": "5QKCY9npM52VLAvxTJ6cv4Umxju5dqpjVg183yu4ApXu4kf4sm9CXuczyhbAjKWrvw7JS1wRtJUjtfv8f4y9xKte",
  "key16": "41Sj2ZB9L6WqbXfA7hbNpD9Jvd1Z5QmJzro98GLGhvfXUujupoumXNUwgjvHpDJVufQrc8vsGB8BvHQTKs1APzQ6",
  "key17": "3GuM2aFGLuvf4WFixB1VdVeTigk8GdJ9XNEGHW48tziQ3iSxL6j5iMKGPNGjdsapcK3bibVjeLLLJxnAvzqr2KBr",
  "key18": "46vQSd6FTV1bJ567aFyN6E1FafxLeQ1x8u9jDxydmfQaXMm5iVZspJvaahWq6vkYM36psh4hS82kaZDf2vWQW9as",
  "key19": "nWam2HU8Q2hzYeMaejKjiCWdskoCaq9pwbn7YpR9DEUUoTJX8b89V43JVDByUW6HyfMgVPFkqYxdjrc3tk7BVU1",
  "key20": "2SXTBJTadEFLgGzQYgyTm689Jc4tsUhutsk7iCgcpbpuCZsa8RD7mDghe5kRBiD8hrJJS4wppLtfTGmLBaPGwRM6",
  "key21": "3ZX1nfsFyV8QcBSHVn7BupfHkJa2VjxoJKtSx9AEzZQ6ZEx9gqXJbYPgnM3Zq3jSqExzGpF38TW7zy3bgdmrc4mf",
  "key22": "2jPyEMUwQFXL6g65J1D4HMySffT71HLDrr9CFnv2dv9r6Do89PH3KyByNF3Vd1hjGTazGFinvxGaam8Teyf6aToS",
  "key23": "4ExaD5YH65UcwopzuYcB37d8pkhaK4hJjCkRnx4wD7Mm1FexXNhsH7QWYB4pRDKbWhxJtzZK3pYoGS2d1icLiukE",
  "key24": "3Wne7aandmR5qgcy8zFt9w8LS9HisMMNfkzVEgdnqhYL8At4XWq2aaaigqeauAmqFfqozH7Y7hBw2h242cnxqyDB",
  "key25": "4j3B6EQTCYfB7658zoLFGLBbtXcTsnox2785B7GKduF7uXkyFGeA7nYQyxmx18jP1C2ATr3aJWFgmtz9rqmW63Zs",
  "key26": "4BPaGdca12VcFsdwWCPQuET1rRiBELZjR1s39jWqV3gdFRsyrdeGq5wtXjCY2xAWRCk1K7VUSUhCA2DQ2ps7YYhu",
  "key27": "3cA5ZFmjDbrCrVBEcJsokKcreUjios4U3wNZqzHSHiZMpWETqZ5ephY6cYFNtdkGznmxaNb5zgD9RHqsNnyAqoGd",
  "key28": "qYrtowp4MyJsEeBc1mUWf3MAbU3D3FDXGyYTRco5r4ELKBJ7NW7uSoHWV2K93Wg2AB4SBJ9CY7jEtc2aQ5G1Ret",
  "key29": "4khgQHCc3bMiGD3QqS4KhViK8nL6prRNTuGwrxsxzjF6nxqe62k2jrmmhb8N1coMoQqG2QHFhRjbCN1jP76pNKr3",
  "key30": "2pKa1q4PnR7vCMqjRk2yVy4tSmPpwa4JBB9FvdBY8fSWmXabHEZ762jHQGjwGy3j4geCVvT6UQPQiWinDTh848AA",
  "key31": "5jhjyPzdwMAYTo4r8KwxTZ5fota8aGtPZ17hKYB7p39KSFKwyyQC5u9Ek9aqCyRXz2YSDkgGBaQwYLt9M9PQumSQ",
  "key32": "s3UEfeGiMB318ZdvuWbUdBs2yr7TPPe5boLAzkokDWTUrtub1zxcMPnH1PpfrDfUmKdphhyqfEjpQDzZ2KpYX1D",
  "key33": "4z9FVmKk3SYp87kypuoGo1PwgFTmbUYH2MPfB4jrNnVipZFZ6R8Q4YihazCxKVRH8u5dYTDT9A1XAR394iimntf9",
  "key34": "qsL7bSJM8BAXTLhrrDWyk7DcT7rS4Bk5ann94yoBN6b3CEbe2jMaFkQdZq9pQHLh5fKrePCJ93XEb9Z5tiBhu4f",
  "key35": "3fkTz6uPsuFEiygpqXdtF5rus8YLsqBNHSKMwwZRjozwayajUif7KuHmqbBAhuBjg7umqnBrRiTDGJc9uC4pkSaK",
  "key36": "wVWy6en2GeE5RuZdUZkN5dDxDSwX5Chsb48UtKxBk87TBFP9NQgoHGFrbVGLtYF3PwCxSdscRFLvYbPqMM8fjTo",
  "key37": "5jGF127DthbQByBiLmtvhxEsfevufA1k9fKDq32udQEYw1BHiDzrWRYN8dLa4iLqncfzXLa939zHA25bR1ZZjasn"
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
