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
    "5gWn8hyQNjaPAGe3xR3w82Eq7pLH8bqx2YkcrcahenTFMTWg4k2YQcijmhQyNuKnnZ2A4L8CMudFoLJU5v3MnLxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TcgVNHDbL8WvtWerEd5QPe3w2SkfVQXnSn8JFcHYBf1td8hDeSp6oprQvvyKpvs4yTjak4y2WLLzo4SV27PD1DP",
  "key1": "5tAQWgCF7iHDVyFzEhXUspXmk8vcGrvuxUY9JFxpQVQsQDRhemmoXsCWVXaKELEuZWRH3GbUyds84bcmzPcbSimP",
  "key2": "5TA7xtwYG5r6GXqRBft3rS2AwNMyXP3qE4bGBAA4aZRgkJKnY2bFAUSHLFEszUZ52yrNZEZ6czDGiQZFj6BNTtgF",
  "key3": "3367VGxNvV43B2tJJq31tJV72bgPmSV4gUXEJ5ztr5m9nDetukwnib1hmYJDuqRxikehPdX9kj5y5ouN6PsnBf4U",
  "key4": "CqkcDUpEYmCR7y8ES6DpC18Xucwj3hHvnitLs9YTUMoYuWkPiKTHx4Mukki4pJehwJUU3UsDLxutWjgCA52TRHn",
  "key5": "3pcbXHyGpU7od3ZvW29csvXg7NFjH35XPJdtZXqfwUTqAZWAGUrTh8faFS2gugaQmZig4k34F2A7xAagZ93Akv6W",
  "key6": "26jGmuUSFpGkDHoD6vptUYa215A3gRwuUVpktEq4ZmeLeEJqpuznEAetq8wLDzcSG2CzKAFun42DXNS9o3eVXDvf",
  "key7": "5gZ9F8dNnZCrGsbBPVcAvgKP5fbNVgbKzU5nR1Agm91juMrTVSEAtXHj3i7zZdYYGWfyGPV7jRXg1CHjbD9u21jm",
  "key8": "5kc9Pb34aqx4dezEcNbAimFWk9FKWrwmG6yWpJiRHzo6pjDARtVDhDaDNiTE7MoYJeE95oUoFdtWLTHMgrKKQVET",
  "key9": "4A5YsV6RnGn6jmnRhAQctj2D7d2vpZeiUQPxnuW3ZQGkgdqrWn978TNghWVCfjC15PEVMmU5tQYEiuQWAvABWPJF",
  "key10": "2HJP1eJzRyfgcnWW8xvdxgNdgeJB55KxNdDew6Y33xi91fVtQQZzU1DQ39d6YMu1tc7STB4ZkC7cNfq7qWuNRNs",
  "key11": "47m1QWjgXBsXpB9x3ggEjoo2HgDNGibNyNvxwwduQ19aAv4KjWiKrnnR5Ka6pdo4WBr7CEjtao6jW5YfSbPZDHFB",
  "key12": "G2PU6i77xqKcmXLhEDMK2oCzXv7qo85qYFdou5JPfbX2cz9GG236UeiDE5YYFXHbFHyD8SMfgeELAAN1o4yGnVG",
  "key13": "3VwNC4ZVD6KWkWjm2jhspvDUtbHsUthS3JjiE1ghskvWNQhcyzVL1hfbJDJv1eJfKZNBuWjwcxprz2R3ukKpqckd",
  "key14": "33WPEWWsVrZcvJjkNBMJFM9rjGGheZVsDzwaadAHWwVscPokwitvL4mT41f7QDfeeNCp1tZhQfoGSz1CXuUGjxkh",
  "key15": "4dSJHYgGZjHYkJFiRMEKgXnvihKzgvpvZriBxT2rtkF1GpwNRgzYvJqcNqQj5mA7LkGUKYGMKKmgqkCm9TzEEiWz",
  "key16": "2Chzqr97o1HJ1Li6fdSn62dgiACeWZEuggLwMTnU4XV7gWkU5Cn8sUzu3x2P1inA37M3UJJFfnxyeVmkvGuhCXYo",
  "key17": "61oKCNviES9fJtCnK9Dp73Pf3Y4peR1Fwnx5urGeLFdBJVK45xptrWFQzaGKALthkErwFoJzwyPAHLVCVSBHvak9",
  "key18": "K6bhThsV7LquzbKLzTBfNEY8s2AQRejMvJ1qduivwHbUzP9ZWEgfdHMjp8vXP9oZBo8HSpn8VA6hafm6Z1Bgc9E",
  "key19": "3c67eHdgkMaGCePNA8N9H5mx5Z7BQC41wfoy9bb3LmTvNSQBXUdjP7Xyk49AUUEe38NxHiD3Eor3QNJPAgqizQvP",
  "key20": "xukigDVNKoHHCVexDQP7xVYtXp16mCzDEzMp1dVchZLXBBRm5jRVbmQAyKyuyJDgdg1SJMPbZZczGQJpDqzqFBA",
  "key21": "5q9PAD7An9Sn9Btwrs25ydbTLvqcM9ApZ1KkLNdZhknR8gAyWH5Tsr8nzsK4p7FMh7T3Kku5YfDbyZ6L4dihCRX1",
  "key22": "2ZAtsQHftfPdZz48icy7pkN1F7iNcM2jyfhfmSZfh6UVeNRDcH3XmkjGM3MBYAv53mMk68gm2dKsunzVJmf6P27W",
  "key23": "2ejfh3tKjTXPnQjaNUm2cN81c3CRJoM9HM22X9oybi851geJJrcY9AmbHjshzaiuL1hNHJwHGLuhzeZD5HwVvFfv",
  "key24": "4ivaQh9VW9M3Ads1dWad2cy867xrEhpLMtqfBfFJLMcpjBoqtkctZQ8TnViUJrrxDnsWefhsx4p6AJ9VBmJUgAKY",
  "key25": "5XxnQBMz9cpA7Wjmagi8iC3VvVY2kuvouz8CSUPS7eVXR6Ls9sB5UL47JuhRuS73VEXA5Qb24CZANV8jS4W1gewL",
  "key26": "3hxDTGtDGq9i3N4WTjigqT9ha6y3MZpaCQ8hBB4jz9M2NjKqrmbD9Q4J1tzK1ykN7pTQ8jMuXzsBQcReJL5Kgd7o",
  "key27": "4Ph4p5FCLPH3WYVH2QxUN2PswXL9tzMWaaVXEa6bEX6aYwHHm3v1r2xGCCztM9HTfnfxKzshHzBG7Ctn9wejKrMo"
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
