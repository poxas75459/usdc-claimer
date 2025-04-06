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
    "2jbJZiir5LmYpe5Z9DxB5UviJ4FTnDDE546bi2AxVUg2adRYosasXJkjhLtnp9qcz696Es335GRFLZ5vCwupEhCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7j2pLDCATr8Am7Wer51Pg8ZXigWPMi3E4WGdLntRdCv23MuQaDxjxNfA6RkDQDpa7EQbGjm98CYgTFPzVyEY3b",
  "key1": "457mFTojM9S3i6qUqnr56Ke5uNV1YrfQjnADe69Y21BEPUtGbCKNJihMSyE6cz39iJB1RaGCShQs1Na5GnYSuppj",
  "key2": "24dpGzmBe9e7nDAkHgrCgmqvcHuPpMve9cFLapSdUdZciLXyrtTzP2MFjjyMieDBQtFwLRVamxVxRhbkNWQHkBNw",
  "key3": "48E53kh7gsJfk1JGVijhYBc61r6C4ZALPZ55Lpnt63MpuEYpEzNtRHBjw5y5UGoEtmoLDikCqfYwgNZxnpLfVMkF",
  "key4": "o7ifXZzk7ZkCYhzgFiFWA7ZJPBSZiRY1rLiMCWbdwdoZdFu7zDrEnsvAgeonNLinFTbnChBEXx9RPz2GyogbcvN",
  "key5": "2E6opGR9njSZyBb2PUWqemNL7WX8P8eHz111n977oJD7CHqR4zLkJcgm3gNyCQ2a6vH3LA329KmHWYyr8NejSnCm",
  "key6": "4iiscQiY4smkHtYLbPmCDEBBv8CZ3MUsTLr6k6aqH3KFpPxQk9xS2DTPuewcS8q3XQ54z7yCcKKFjMGuxcaRVAme",
  "key7": "5fNcXSq9NZHi6au5Agbp79jXaDUFzepRvTnWLpuuzx1AsDtmAhKYwdvDJJH1rm5qoZ7JmUK3QCpEt4FjAUdsGwBM",
  "key8": "2AeqPf7KGgnPgvY8Qp5RmjbnqrGgEHJ4avKvCvVux3LJ9ZRjJUNJMMcFSBbhXb5c4wQB4oBKDoffJQfWG7UkPdBA",
  "key9": "5TPity2LU9PLnaeHgFQvPVsv7c6D5m4CLjNmaZn93KfePTKFeHCB721NTAA7dyfGbrRjuQT3WaRNSHmKVALiKG1j",
  "key10": "P7YkUEyUB3KJYyKmW2LpQ1ZCPAo2fzsDMNkGpb3C7DUVGppkqXRh1aS15rBMZ3rHUu4Y7XtiNFY2fn9aKFQzX5J",
  "key11": "28oxaLAFbBmQQdHHcZ8vJydn2DYi8ZsfXh41Xn2dyvjLPAqNNDZ5yzfMSxVZd4K3HU1gJVxYWmyWtQQeRQw4U7ez",
  "key12": "4pcuDcJj6WTMJP8or8f8S54KF55YyBwk5YV2T8J2bSMmV9goeaGmPMuCDp4xa4JvUBhiVXkuXzBYL4GveeJPSur3",
  "key13": "5H6dukwGVyZMkJtDecPCfBXor5Q1h8arf84h8mrLLZZ7m4WREffaKXauge2BaQPHtdDHtnW8uACUFVn54DwjY4bC",
  "key14": "c4YmsJLm8sQTz3hMQvBdyZaSCpimtYcrFghFpLb7xfAESsLGNfm1jXREjUPGKweBSu8xSbQxKBNtCYucEkZieND",
  "key15": "49enKNedEHxvqwPa62pmgm7vXfGksuMkyKrTbNnndGKAN7mcppYGJPseYxcraz84HYkASTfBKgb1Y5gybuKfS4rk",
  "key16": "5VM1EjGQUt9JDLRmcvcJNqCVnG2Qwg2dPFEWDibdndxwP7SoGj64x9jthYyzJaoXqcxgkaT36wyuv2LBXbaFrJuV",
  "key17": "5Vd9HQLbDwUG9G4fDku2kBXiV76CcmGpMRLoQogmive29DNyinBxkcbockyfXhXx6syYuAGHfzaggL7XKUnGm9yB",
  "key18": "2pP5vhPkFvN3H2Ktgwpuxevzm8qG3gYT3u7zdSFLphCB75kyPf8EVJCWc79m9c5eKa3tPExe4oUsnK8QPsCogCPd",
  "key19": "5d3uNKmKeu3xqh3vYecEv8GmVxgraDd8kBDnqWvLp5kurvvJUixXkbdx3iSNbZE7gExPZSSdCENVu96v62e2VdFv",
  "key20": "2yE9ej4bDVKbavm2VQoiQoYHZEfday97JnNH53viWBbJ8Fj1dqX7DUxmn7kbKn5qiZhrU8LZW3PDXztNvdgDpBQ1",
  "key21": "5DQbqxgVMdRJwmCZCH9iFb5qv17o5tqSvDJRq1jUuLp62df2NZRnT9iF3MwLm9c1pcXbC4bmYCvoWMgjETLBF4LQ",
  "key22": "3GZGob9HKYrWfmM7gMD4PQ9qcopV3AnPNHpWn88r6r4TiwiGWguU9YC9RiumdX5DWvW3SZkFH6CgyZd8ShR8WtaS",
  "key23": "5RvydN7JZvJPXrrNvoABCVfmQjvMSdvqFQB9GhADb5u8AD7fjqcz6GKqAv31TX5cvrWkMJN5nmJznjCrVpRGup45",
  "key24": "5AZsZFGSPSDEhacPhoxHypy3TSHNVwLXAsLZVtzmb5XMdm2vtWSQhaaEHVb63VGE4Ama4h9wEAAx974xG1Y885cf",
  "key25": "2QzqknXmtFYhdTrFYE4Vd9gr7z3NHHFzgTGrBnXbVc9NSwitMoEfgRHCgKXXXoPyhfkY31tewV9hQtt4g639sjAi",
  "key26": "3tZar3FvKgRE78udaXLaLaMWsnBLFEuypvQLMarbzpgdNeVdNb2ZtCVG8W2zLinJvE7XSj9d54EtUaKTwQDX6Nhg",
  "key27": "4HbFf2zpyXeo8S1YUs7hkviQRibnL4AqQM25o4GMTmvTKLXiq68UE7YxQRPza9B75xmRPyCgnbgc6Ns1oXuQ6eUT",
  "key28": "2hBT3sF3nLbG45dhT3gz9eMDxgQt8nJfWH4E7WLt8WytSniRGk72TvsdXAZ8UVnrUhc8tVc5m3g2DLKwoGjD3ovc",
  "key29": "2M2iyUttAjHqDrdskGf5DYdewQLKw2cgYRvGXbE111uJQ8ziUUb5U5UxtXeBtLkkZu6daPwcKiWGwzWDqZdjpvwm"
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
