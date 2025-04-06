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
    "XJr8pNMB9am3YzpQxxLvUVdd4bTmPLM53j4N1PcESHToksYvWKscavRF9at6Ej5DEanEKYfK1Zp7kFZeu1SaWK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSwT8qN2x1oKpWtoj4rzHkbnug16sZdx7CLq13ytqeGbvfYmvt1v1XH1xfrwrNhWuZu9U31to5j4AUhVhwMuu3R",
  "key1": "4naySEqaR7z4NYoWj5xvhb1h61g3SkVUqUUWe3FtWrUJ1vdsHiDR2K3bD4NRbLXedKMRGhJoFx1yPPgmq3CXHM1h",
  "key2": "3BM4t5depAvJdiFpti59bU3PcdfYhTp4oPs1vs9wdyUZyEpBXgReFX12dvCTr9Wh49jrD2MHNjUJZ9PLU37TCjG5",
  "key3": "oL6Hb1guJ37WeTDVy58y8rbXCK5Xx7fhUVuKbzUBNRAJy6Zpw18iJSPFjDLwsKbNTGzUGLpiT4twnXrM6yThY89",
  "key4": "28kNRz9KQRw7FCjcwtBzHerSHSZwKEdgExuhj9zBi6UTPKVRdZ3kHvpzHuxH84SxALoVyJJh1UNdfa5GbSyjL9pc",
  "key5": "61jkdcyJchmMonW8q2mnbo3MyJHoPvLdtUD6qDCWsfAqaC5FwdnQfanzSvhWZa7WqLuzoAMF1nx2RQMvpM1XRwYe",
  "key6": "3TPnfNWtYJcvnoF7uB67iC3K1QTDAUwzqTgr6QPvwZ2VSLrc8sVdrHr6LmKJiJN2KsGeqJE5nSviBxUUf6Jc2uUF",
  "key7": "2ZCxJiX747zk9wnSLULf99yCmfNtwzeobsC88JMCc6BTfD1Vis3ryt98siWoxXmKFVo86E5J7tLzZYKCaRT5BY7Y",
  "key8": "5iv9nhPv4oyTnCLNK1drEd4AuPU9XPCBii59CeStoWtQPgzasDNrg2rx6vfERJLBAnG84yKAJCgz5jhYoeMCYfeB",
  "key9": "5K1uvMdSnezaPKFtTBisojwSc2qofYofuBPBnNH8QeQMHrkKcvt1Y9p13PrnNHXjGsZtHAkrWGjEzyFPUECRHr67",
  "key10": "3CiB6RNxTCGk8nBuj5No8ZTT9pdVV9K1MufHizJ8Bu4MwzvMrFHwbxo19i5fYPAXG88DTcSmsHsRpV19fXBJUGRW",
  "key11": "5xABy4LuT7559tHgga6yphd5FKrnYEAsse1gQejG8P7RVecsSVPjhqB24FKov4mkyqQr4tEEHjvvnsTKr6iDAaqx",
  "key12": "67XgTzTVhRiKUUpowCgGpG4Ren4kyyvjtPzCzPN27td7hKUbFkbk8wKpQPxtvPn26JoLEDPRt2yhQEVV9E6vpR8p",
  "key13": "5xBDZTm8LyqFFiM4WiFuQ1cDAijg76dvHvzYQt7tavkcXwkoUbyshGi5WpYgYfNQoXPEmKX7n8Aw2cpwAoVQ863Y",
  "key14": "vi3fQVD6z2pZxgY2vacVJAZtUoKNb1HYQ7wPKFU47uBHyqLSuuzmtquvB6bmwjStU5JprdsdGCg2Wzb82wJJzej",
  "key15": "43bKjsZDSuPpjxgcksa45D6LAnPUH1qgRiExB8ALQdoWgvAMCPh4XkDmJcaAPk1EmanT7aPCV6mC6f7A83cedtJV",
  "key16": "S9uy4m1TdQfymA4djg2bRpLYES4VKQGS83BLjDzrzcnfCQBNXbP51WLU2cFBsddDmkriVb81ttvfwxgzTqwKb7S",
  "key17": "32bozDNYVLu2rk3ipqgBmFG2jzYMGZe9A2k3baZfXYjx67owyWJBrU2noRKivPFKYeUFeU9LZQARoamqk2gBFH2Q",
  "key18": "4NZXCo3JLaC5g1CvgEcbYD6BXvBw6K2AnAuqx2c4ZxHTYnmftw4axofhvTiy5H6AgscKzjbMNLufFN9tYbUsKkS9",
  "key19": "5x39eypw3RTu9qDpoLRvzMJt9zK7VJ8WUjCXD4HNfPn6aesxoTUCUfWP9r7mGQ6FTmmvd8uRx2UmXsRMjUfSTZZf",
  "key20": "a42erLCCpneSrUtLvYJbukLiDTabvMaMxdd7QfdmsTJjeGPyxYyffmtj7V2pwfCzN4n6ocjfUkHRSvvwY6t1K4U",
  "key21": "4KhkM6VNXDqWxKDXQH44jK7i9hVRmUY7fNdHTYnVQnnj9PgEeDdZB1HKPLbiMvUqCcJjPY4jHLoQDMcqvWtKDja5",
  "key22": "43JjLt1Wy5UNcUtAjjNiH1Cf5zmy4Cv9xgCRnATRCkcyWK42kYvraUfu32nVDBJvLpadDyAFk9jCtbdZeLRbBNGo",
  "key23": "36o5Rf17pYLi2NoRA6DpbdsWoK7hSvvUmWkDpfzHF3kFuRTSD7ydfpNAyYiwSciinn8bcdBvwMDyQrUx7Z5aLcqw",
  "key24": "4dGgkqYwV65Z2HzTRuvUwHauX9VpADdLQEUS1o8CY6tmYN1hV1BkfCcbfcW8dZSwcrHeRgfGVKzF22j1q4zVkH4g",
  "key25": "53dnBr2ayih5L3dYUoyezAGvXj3tESNXaLvxYp62fi3JktBqcLRMvyfbi1i1CxBBsc9FGcK5muymjJtCyEEVHUAf",
  "key26": "4axEYwEaWNw33jjJ5xEjz1ebKrbYVzryi4cDNzxDdMhwgY1o5mxf9sYJGnXjEyw6ZtSNYydNQLonEJkPLxaSHTb8",
  "key27": "53HsoPDfga2JTshNwsSan5ctzEx19jYTsLTwNGbNqwuLKwJe1UUYRwyNvkDh1bsvrrMfLCwYr3GaQedTEkGVuJpZ",
  "key28": "4MCXbwMDtkWnfQKYDR8vPEtJ2WqEtFdAD8HDtUpW2x8yZtw4cn1jdfctHMcZtMsXkaWMZiUXf6ywkuNCHFFR5dMQ"
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
