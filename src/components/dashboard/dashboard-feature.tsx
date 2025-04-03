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
    "7HdsU43hjA3ZD7SrEvm9ywUGGrojDqeBoMPV6dCLinWEaCjj6GwASeBqFUYNLNpKzBf5D2eoAWPsrDF7D5eu8Yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jShaw7f8H6xQsvVkri9hrsB3n41kmTD4Q6Z5U3LaYHrFCGwUfjw1oi5zC8VBvT4maXVjkLNrjv512dYV12W52zf",
  "key1": "4wxspKftJn15HVDCfhs9NttWbDqtd8nDXs9FdoSpyPTmMXceTzUHf3yE29epcPMdY4FTGWF6LDpuQiztrExzgTTe",
  "key2": "43Y3UqbwKobsEr9gpooEaiBNBLQTC22qv9XYnD6N6R5im1pd89SptuQcbUkUPX4LyXEmmtjyLUXVWagHiYupsvtp",
  "key3": "5E8WZy2fDus8pLVbSXokdM1iev7doW9mwww1yktkbvXi74fkd8aKVWk4kgycHgzJQaNJMu5b52A2G5j5yHnn8xR5",
  "key4": "4qEpVdrfHi4KMBM5CDaEcvLKWjeTGGK7bGeHPNrt1SidxXJANBuQPmuPmf581vyN2zievGJT6W3H5bJ4oP6ZWxSM",
  "key5": "8oJufc5C6eMcHxwKXkwqrmVfKnTHtZYtpvdTtqUZEzeDmziuU74wkT1sqp33LMqQpH1ipWsX13epTBo76YUTSnL",
  "key6": "3djuy3KRuhM5rxpnthkdyxAuAuBJ4GKmwUcVoExnJwJZAvB9RVpgdPnit84USJGxneJ5GnYoAq9eEndB4iWcaujS",
  "key7": "K1hgXsZNdMWxwVN713KrxC1YDUDRRRYcAjqGzVo5zjmMtMFanxXF16n93y5pJreG7CKZvcLjb1yAKHvTXv6JzAR",
  "key8": "4AxaCaFZvyF6bzGAXb8AqHpeCSkssnvA5RgTZaZ7fvKSbSqKzhFwB1NKXQe4dkfGUe5u7jUssyMVWpYRNnMcHQAW",
  "key9": "2bcoGGwSYGWYQnKGUdQAgE3aquhtfNrpPuwC1oVdf2MQt97ibAryShT4vPXaHDRGp2fy4YumomThSibP19i6kB23",
  "key10": "2UDPX1jZmC8Tjtdtzpp4MEznXLwDv26PyWwJa2wYa1p3uMNtZQVD3gK4QtWY64jTJcNmbAMsyGP1QdU5esHXubA2",
  "key11": "5nL5xSBN1bwvEvgKsHnrzwbh9SYBu4wCaFRgSFicsww36kKmQAZUKzPy1WZNCvKxZoWGhbtsUfRrnQAAH4SF6iQP",
  "key12": "MMHXv8F9Uw8xvcLduwDvwA3DffQQ3NVL5e9RZbUu9Ko2zZE4NtPdMADuLxiE1LpDhHE8sL2jeu3JfV3ALn8GZep",
  "key13": "ZdXaiQ64wfSaxRB2ZKaio7u1WtttBuFyiAo5VJh77ycj21xc86iuowDMAEf1bN3sarUCRQ4Qq3wnZYKfVc74beo",
  "key14": "26S6jpeHbdHFHafaUNXDf3HPiGAtZs9Aw6jqYNbm55UhF8ATbqo9oEUAdFdPxnt8U7n6tu6ou9yn7sBekTzLA9sW",
  "key15": "4iAiNppTQ1cshNpViJUAqtdfWNX6iGMcYbdb1HJgA8oq4a5hQbxQ3gYu2oaK9QJN7ZvM6mrZnGhomknvFc2sYGrw",
  "key16": "dko9ZpruQTgEE6vFybfZdA4bLfYqaG4LrJ7a3yJgZV4fTLwARAAbu7xEtoKXiGeXA5sqBULW71tuHfbvUjtgV31",
  "key17": "3tmS1ZKmij2EheCJRu8hm5FnA2eyTmxMkmQp2M9jC8KjCT5wh6mRpkiweQJ4sqTwLaQFeb8uwjps5KxJahBHh3nD",
  "key18": "5egz6d7SNAwKkxLWJdCc4riWrvkTqtQKuypMQssxQfoMvsoaLR46FyKvSQ6Qd1dzvpmQyW9pb1WXVBkjHxaLSTAH",
  "key19": "3S6PDnLgYS1HhRZXNHYXDPEQbqDSww3ediXiXKqXiEDB5LNswthdoUaeQGSLp4SaAFfJm64mTAs3RdXmFmKvxofM",
  "key20": "LgFYtke6pWG7BG99KNibjw6AaR9uFqtJBGNTsEMNs4jquuCCxLu8kyPLwVrUXUaa5FW8WX5giBBFdokAbV7oU99",
  "key21": "jyDVpgBGc9wk28DSMKPP3qR87Az4tnM6KcgWeyKiaF33KXonZTQ6YdL41Cuv3GUt7BWSsJUwehtLCVw4pmHivKm",
  "key22": "e8SViXTuEXnojyRdWLfyxSZfczhQ5zHx9t1kKpJnMCzp1erwowUF7LUEw9Bw7aRThyf6zyY2m9kxScfwZvk5YX2",
  "key23": "2jwmu2trQSGk3nk3cD997CeDdaaqtimReiWw42KzdHdZJpD6bvtQMvHqnb525xjfy2hqaC1oT2kfEmApogEMgfD4",
  "key24": "5QdMvUh7hzmo4yNxKvze9KcZmedHn7zX3eMzdQ8x5rvPf6GG4ZVnw3CxvgchjiAHkgg8uFYv52gGJRE7uUoeNGgS",
  "key25": "5nbn2p6gFdBzZ8brCFfVwa67C3qhAVkqnbRWrP1atYahmsFqz92fJsa4DXcPCYXnKjm6TpweTuwTDbMdowRDHQfA",
  "key26": "3GX6kp7eAn7HH9o55x7jKLz8f9mVk2g6zsJpDDEEWiKakhiQi7ooipsAGR13TDNMsGohztgCPKpJN1Kek5hXsPnF",
  "key27": "3GHJmawwhyf9W5yARpjWZ4TAj3ZZRaPzYzcKDut47vFp6LDdxP2tbny6zGa8KJe28pHPrgFKse4syrLD8jgLE5y6",
  "key28": "4eDCtTm1shVx7Yi4KVtZeysLPcHCxEf5CX3kCKGWWbbLxfEeGfJFDffCtoyE2t6Y2HvvFuD8ieqe9ZYwHmMsBWfd",
  "key29": "4ujBKz19z8gYbxAzQFd2VarRTyrmJs6WZEsm9vRfZuEWc7ocJitdpNGvZoSA8yjbwhEPJxxDUaCFJhFYDvzYvTJP"
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
