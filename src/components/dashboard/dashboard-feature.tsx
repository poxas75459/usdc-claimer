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
    "4xbm9qGWAFmc9xEcUBrykYgD9ncAqthhYzL9FoC1cuXmVaZMd5DRzYvgb3L8CRgf7TFHPrAo9bXrGgHbBFtPABTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "inKPV6GiXS39zU67eVHxscLWuxDHQbtJrwDSTdAJtp7fbnNZ7JJqrFAHkSNfsNzhvfoL4mBxcHwFfZkgijQv9DF",
  "key1": "5XAXPymgUAumuwM5mayPj15xtSW2BmuoJKNnn4nL7VRhCFy7HT95qghX29QpfXPGWSZDzzGm1pwqfF6H2puTDxsP",
  "key2": "3PZdgoMzCaaDxH8FrF5VnAPZ4Jm5ZoSELLKFsiuvRL9eN59dWtLQ3zNv5fvGDU1DY9q5iHCHHNtchBak6KN4Pi55",
  "key3": "29cZbzokuX3gzbeAmxn6FtavnR6JzdDd2RVKHNju2J5Gi6NSVynR9yc6ZaoqQ7xyxzYe3vRCNrKsbo867gxKVabb",
  "key4": "5jMfRoadZq9nAkkFSxgvhbEfBMFQquwzvttW9mEg4WinGowZQ9MHFqij3t92AAHsUUygSzJZ8upB2pVaSKUsz5uo",
  "key5": "3s1Zg1zV46vuLoMrBSWYLPoRKvhzHwwvqpTPDVQMdHBFqEa67GVf3Lwf6ZaMuxgWH3C2M56PuBZ4FCP58ibTP8Fg",
  "key6": "4wfTDJM9Z8A53XLDup6m5MVixyUY4gsQgfdJG8CnJ2EwkWJG2LyjHCfnqXEYWDB9aWyKFsyMq2h1Zukz2ToE9pDK",
  "key7": "2t7W3fdFBRF27JU4fsfh7NehgRbS4VseA7JtMRoqDM26KieDS2L6DJnkQgTGfomU762j29HhXyoUVAt9TNHCUfjZ",
  "key8": "5oWBfktzZvDicCuz2DkG7wcZ6wc2xvXNAXVc2j5FnNw7Srj4hUk1Js179vRf9VhWz6w3U2oF6wS2wSosJWRNiExk",
  "key9": "4F7DyNgCMC1gpt5EiySVBKgAwWtDSj9GLVbGERNEo9tpxyYEQHM7MtpQjHh34jBHXnfsvz5QTZokokz5Dyq1iQqg",
  "key10": "5Nywu3pBvwxuFfTAPSBBQSkoaoobCfPxJ24uV7jH2nRHDVNRhihLyhzubrkwA3WBXLLEZvFpGfoNYKdMDF4nWZMu",
  "key11": "5KdT1rT9tzFHBdZyjx6s9kkamaYsRLpH8JQZWmDUXydZvVJbmG2pZNL7fDZpqqyg81U1jJhjk8b3bRK5Xa7JBTYi",
  "key12": "4wRumeDsv581A1kQ34Qs3mZcaFbi9L53JMHabMnyh8diJD74bK8KKq1FsX3hXQ5JLfb2ZGrj7DbYE45YW5N1Dd8U",
  "key13": "9JVeN3DHWr4WrqnnNJkCamYpfmtxNv6HYtyFQDbkeADjbyxpujBk4EaoWgCQ4HsnBoM7AsHxRF6zGw59DXhJWYV",
  "key14": "3QHNoku1PxpUwq4YNURVkYZqwAbYwikqCAcyCEQKwuT2PnjMV1YUo4PUo2VYtfo1WvyfKsaeL55wHWZZYejQUEAw",
  "key15": "5a4ij5uXWZwuzGhxJnHK673jb1r3z4mUnC4FMX72kCEHRe2uJTrhxf6JmzBWADkwEUxA71ssC2FAvHMGynXgwALG",
  "key16": "4gx9ocyJ7napo6MZRsfCGfGu18N5pcPgvguDMFWmTqGmXqeQAxz4apS1nSzmREqGyJ33Bgmo17Z8GdvnGV67Bx4G",
  "key17": "o2essCBKFnKKPRxtfehJphqazQsPwtVTSjG5xDvULXrJzLgEFVZjDt2PrA9mkZyoSZmNNbCTqgBtjMDP87J7Jkw",
  "key18": "5FeEnQPNG7WkSeSXx9AX3mgq4TQLwfNhqXkf1LTmq5Xii3mNC1DvKm5P9RFwKKmcddrywbr7tT8NRk6TzjknExy8",
  "key19": "64LfRVy6kU9BG4AguRuee9TqqDumNnKwKwu1Vi66fU7dqfNHMauFrzTXWWRWcWsSSJu5miDYvHSUAPBLdJvj8j5T",
  "key20": "3B2TGGDPX3gZsi5gGHsago4FHn12bZQGNPoPqfzCDMwfLfKcpq9XXCwLPz4H7X2AYt9rzZP9hN2Ebq97Q2MXryYB",
  "key21": "4UxfasivLJeEBonJmZVAPCCGDeqFaJgRvqKF3NYxqkyD5oppoJee675V4oEUnd2FovG3ykzFaWNPXiRodXQw9fXs",
  "key22": "5MeCJBmQnhCCxcsTZUhztSPXrW9wFoTdKz3FNNPeufjxNbPaz6ywCRNs3cKYZAkLiTiCQs5HXBEKATs928d2i1uh",
  "key23": "5fSLfykSgB5z6bxpCgvXrHHfFMtz6z2kdPqCo9VMpXToe9odyJBmhXz194aWHcfDEjf85FjPWcWjYUEbDm4SywAS",
  "key24": "xBFnZdDESJZZjnohrvQEKEpgaHrJj6UjSQYVkz9SXh8TtmV662CtbSq6vssGPEv4Gf6EA7y3yLMLUBEb6o37Sa7",
  "key25": "VJavhB17QjmuBtHU9BretNbT7WvjUVEQd9qNvJwMTU8SC9J74ffW6U32eJdYJEv3n3pne6P1mvi5ryrCjW1obYy",
  "key26": "3T6k1oumAvfjHkaSvWuhXq234ASu6TwrWDZKsyTnkvcFpyTj6Acrc2dCoACbVKcms1bscmzZ43dMCZQPXsuCgfGZ",
  "key27": "5H4nfgYWw89gcA6QCS2xCKPPCVvrX4s6JBedDfALsc7LkuPegQxmmuPn1G4MExcaSsGmZLf6zgMsoLaYSUUzKJu5",
  "key28": "4iecNHC8Fcz7tTTTSUKrNeZzcjnLzu3azYh44vEsJhDzBNowBFab3oMW9jQhv9QXF5PY5uAtekgouRRvE8SXMc6T",
  "key29": "4twaRupByESibAdSYeMo9ovcQpEpfdZsChMMuYpF2yUsCK1BdNJyu26epk6jghdyZvMrZf348iPMnvQJuMjQjuk8",
  "key30": "3ZBP9Lh6rSoH42SmDYpE29mNNLsRa3egAwDF42KWBFZB84E2QznRyT1XdJfYB7ijDUE8dP2B3Pkyi2tZpeqE5FNm",
  "key31": "4iGFdVTo4VNnAhVYZkSBKjxopZToNr5dkPk3gPeZ8LQsx5honv6aZkKmYsWxZ2eUFUJnuSiVed3L2GF9iAH3J5ta",
  "key32": "4bXNqmBbuNes5NYzME3GB3LETKuMLHYx7C2SiEDTG91Gk6CKWLVYMs99zbSEpiLyXfJsQ9c3F13xcgjhvJmJrFoU",
  "key33": "HdU2PZXnPXwDWMKmujv3V6xt4fxfEsxH5o9EHdUNkWuXSWdSsSW9YtiZLzPuGgS737f4TeqDrCts5T9eV3irbcf",
  "key34": "23HSHgXXEy2fPRgsmU9GsD2rDyQtSPLEeGA5hAwG2L1sBoHXXAGibGzwFRo5G69HmuHxMbsBcvGhLFVEh62HVXQj"
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
