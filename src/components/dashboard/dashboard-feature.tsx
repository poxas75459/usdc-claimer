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
    "5NL7RNxPUau9kQrQcrkHs2mDpiu7kDFEVKu7iQbJtVW8aYMigp93TQzg2M33wV822hnev8dHvyLFvUQ3q9H6QUCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oswZwCMcgLqZVS1fNxsXAeMXng8zS4izmptMGSKvHhXVPiJ8oxtzLnUMVuyQw2Dr5fu7eiCzmAgq6yQXXZxDDA5",
  "key1": "2Q55Zij1ypqF1s7xCYgKsUi3sxENvXVWj89Bz7MFLUqWWi2VdEcfXZGKi9KLxNaGy3GxvoFKGyjydqksrtEa7WDu",
  "key2": "2xhxLbAjgn1tJC3hestTFwuqAFShkeVMa3VusNABHDun82WWy7QYzd2MPCedqmEX6qhbZc1nsxkDyLTNX5E7oT57",
  "key3": "4wFQYZ2hqxYboBMBto7dMq9He8BMtf7r6bh251RAag2AuKkJvzD52VzKxTMCez7fPT3pm1Ga13xpUbDJkcrSZPmS",
  "key4": "3NTSUqLDLWEf4hPfwXi9pSm46UQhMVuYBN8yiRkxzojtqhiDeUa61dqTut6eNXPQBYERbw1iHnPandVZyXiXvH4D",
  "key5": "44UGgnS2JKkkpULkRXcTpEi4XYT9Uxqwcrjno31vptouK5KqSsA3TRbcbjnVH89HhwL2hgC4QXT85tfiX4CNT5DA",
  "key6": "4nJGhYeiLeWpn9JHSbt7gMQcQxHVmPdjjgNPMBCNfMA2xj8aZeEHtiQfucpF9r1FAPXVfV2eFFoV6VfRvXzzUEgL",
  "key7": "5wXfc1N8VK2uRYTBZ5cFDbsCtAYxp73iunmQaKmkCeErRCe7PGBUx5xXa9aZtn1RZeBJmHHXt98PXYdAMgHg2zN1",
  "key8": "YSZpHUfTa3vKonZB858fLMh2rTbh8oj2QW8D8xXTBQBKiGF3H2xyiBjW9oL9xomAtazyXfHS8VDFTyKzanKhq9Y",
  "key9": "3umCTanivMENYKhW7jb6vxuXWT9PkNQFoZmb5hxEiRue7yg462k4ETeckDyU6i9N9DcpwAd8UnUPjrESG3PXiZ8d",
  "key10": "4kx6jBk7ogVuXGxYms2fEUNQvzUBXsmDFo8zRGECdeodiqpTtH2tw16HwdHbjWLVkip2hqYLuv9AEw8Ke1K9kdzD",
  "key11": "3DUKRAzyqqh8b9tcgApfZUtULbCYxHB6zmgs9fhcFUUqYmkuHGzGwZpMjMWSpXo1GNzpAH1nvDvV5iC21fUU8hGx",
  "key12": "4GRm7YXnk4MhctgJoBYgFZ3BcT3t2Qd7KZ9yteVofXLsfRtyYSymka1XjQU3RHaMBBuWYoaQUbF9gpgKQRMdAxX7",
  "key13": "pbmMLxbmyPjJJFp7BG9nKPV3dLUSjK6My26pSut6nbHKeKcx5AUet6Dkrdn6Tp1Gx6ZdmzsqNoZhZj1CUZ4J5Yu",
  "key14": "dk1LJbpjWvo4ZbksqPQfq8MNSJz9oV3bGJTf4Vmn4hRJMFG8m6azKXFoeUsNNWjGJ31bnuTKybcBqLcXw68Fzje",
  "key15": "4e6M6ZCxhW5GktjLGT9s4zyemdBrtqAxvqLpsuuTTEhn8TGMYGFp8DDe88tPbsKS7Ws8vqWFeA2K4aFSY17n8BYX",
  "key16": "5Wj2xeV8TiWhsExmt7fNC6YYU3to3rEzvVMNM4zF5JcPhvDJJSvV1QQAHNpSJNwGpkcDpaGpEecNCKMZvVwjTUzV",
  "key17": "4bR6kkxYiA9bZpKDaEUcdGBBBXBC5XQxrsZY2m6pPXvhcWmwaed8bu85HiwRVQPBoVQR9Lzsd6hSfLwLoP9M7NSJ",
  "key18": "UtbHLhruMu9cpmaAUjyrzNwiZ7NhmxK9HrkkeE9Yoe3U7eQU6bwysiEaFNoCTyuLZ8QjHTHooMc7Fh4jiQCHRV3",
  "key19": "3GmirmsXtUDJ7DtLQR99whcZfwB4JY82xAxooKA5Fsj1t6Hf6trMc4Q4J8Z4v3jaMjq2ikY5RmNknPieZKtRaWe7",
  "key20": "3xxkrTvjcMis56nct4Cniq5Xp8W4MPtUX3mAescjJNWkXqRsyVr3d8BLzow618P6WP9VhEvVcwATj2oFGogeiyLY",
  "key21": "3F5gv5DNCv7e8KX5QP5Nw8585aigfaLmu6Ds7UthsQ9WuosdZ47zqgeB9VtYaTjC2r1WHQoLpxQZAqnEb2eCp4RT",
  "key22": "NfrxH7oZR4LEKDT5uBh3cAxXB4FEeEpV1PsxtBMW6kSt13LqxDG981cC4fxYiVKBj2RAQce3SmogRmSkE54fDTd",
  "key23": "4s1ZQXFGkDFHSQXsDScmeFcjpvXbkbw1RVGdGkFiuo7NMbLmipfYYey5DHESUrTSuAu4inQ3QxExHRtb7HZNqufe",
  "key24": "qFxeXZbNmqtY8nmZcFy5a9rvWt6rxdyF6JTDXv5Cuwjr8pxQ6stM6rENqixe9Wjrw3Adn6JDDKjT6ruW41rMA2R",
  "key25": "2toXyzw3hBFNTFx6wW13y8Ce8LmBQHMsFjEUVPm3cTEAc1qh7bDr1AC8iyNJFXYqGR2NrkVUEWvT6xGpWBjLYu6y",
  "key26": "4N91dY65851f9jUCUKKZTWqGFt6w3iqJhN62qi1trn3EqcMh3YAYLuAuCG9PJ8fqpVDLM6W8XLfjFiwVhWK3UJrY"
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
