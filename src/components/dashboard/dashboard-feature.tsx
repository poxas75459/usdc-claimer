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
    "42truzh4YLVY9Rj9Y2kWTVLtbGqf8uds7gi5Zrdwi9QDttazj5GpszQAE9F8gDFxL6G2RWQ1VxdDjou4DjXv6EHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvjiAAwEbWoaMopkCu79JCvZggJyKGX6Pfh9dWYndrFwtTdX8SzBuYapFwHVGURvfLSy5KQs2ui4M3ynNWWt8aw",
  "key1": "2d4rs6Gzo8FYWRusKjfmtsswyyfxERDUJkpYgWUzarj1dPxpdJZDVHtfquJcPWcTTrgQUxo1vhs3zBUseCDJDcLj",
  "key2": "PppLXi85tXjq3Dpz64WnDrgqEkpC3FTG2EEqwBpuPHbb38wexb7a6LQn1mhrAuhm1Ew8QaAXExKUddBrmrvKN16",
  "key3": "4VyWVBuRKkh8GEKZLqVwuPf7oi8tRD2CKmGUBpYo5esRE6ogDn8z9Yjhi37xtrquaB2iJxr8RstJS8pPrqXzjwQ7",
  "key4": "2a5xYdiR9ybAxPF1pMtyNkE7mju56bZP1kutixy1PKBn8cNssApfJRhE8azoETkBW5nAkzWeGjXqMHmfVhbzByca",
  "key5": "4ribYdgMAsddD6hopmhuyDpWmRVko6qbQRKcbCMH1jnHMXbVHedFUv81fJh89Reh3HXQkdgeV3VK5x9umGeZPq7k",
  "key6": "47BjG4cCaeSAmbLq2fp8HJhHvxtBUX5sFcZgaMZLYbE5JQmq745DeM28z7BPAgksWh9Xu9WAGxayhPQhRosNU8c3",
  "key7": "2AxVUpRyvypnXiZoVZvuze1iYiRMDnHcxcJDf7LDxApfmnNjSAhiCw4rH77NebkkDXPFyLTEZtspit4JjbQ9Vg1M",
  "key8": "3kpQ5kxfa3wAgw4XFFjF81aGzzEgbfNQKWJHi5o1DpULFDPCH91rLR4ot35rNyFGoi4iJ5MUvWUmgtGeRLkPZYCs",
  "key9": "3972BCm99q4C13jfa94jfScuSDhQNELGucnyWzMkSpMZFU4p1pEzBfJtCpbAg9SSKe4tcy9mbAm31z6wxoYJ27ET",
  "key10": "3cWomF2WaYUWkvkK6nCyD3PatnfirpKuCRVeX8c3qyYPojpbWQNx2cWZ5WR8XfHbALEyEkLPSAYwkdgt5E5yuvQL",
  "key11": "2jBZdWXZrLuBu7n4JFprTM8BQnfsR7617aDJ1SS4TvkEWgqcCspHKtaahRcZH6yPgaDq8hc14gr3zRx4kpS5p2yU",
  "key12": "J5BtoramUHJEZQATNyPcEodGLJfjDaip7nP66bn9tZtwByuuVSE1DY5wsEj5DMeLACThH44ayaT1jG3Y7TmhhGP",
  "key13": "3VahVXg8xV9HMjqZcvoGaUsKNkrsVohKDkXJu66VdxLmuSHjYCBKy4UpMVNRLDVCbWcXNBT3nkjHrHsbRRiNBhnY",
  "key14": "4YKe9mmy5CasRL1W4QpsR9PqsPQ5PKHHP4pTVam1yyFeKumzFh2hoQWaCrmzzf9aUH4JGfxxDM2U1krzb4ig5iqk",
  "key15": "54aCqPRwFYoZHETFhpCsSdNuxtf63qP5Cn1bAsxG7QZ5A3HhfzmcHNW7HgsgPuHjfu94CQHPcGsPQAZ8Psoon5N3",
  "key16": "3isJPeKwkcUx8DA5ScPG4TWSP24Q1ykUPKe1XvqHSaVaRb69ekXziA4zwCz1BRRPAc2uSrp4N3owkEZoDARoXozV",
  "key17": "9zyyY67h3VW9HwMexiZfL2oaYcvGVhonYc3ipc6BrBaXdhs4rtkKF37uXNXEvRifMHAA4km13sLD9cKBMqBE3yc",
  "key18": "2Vs92ospyo71yM8iezG6FuMBVbpyxbyGiASwDip6bJu2tg5zrQ2WQL8vRya46odw3F7W3EmM3UQjj6cgGALDH4qN",
  "key19": "5WFTbR5TSPHPhwLLTN76Hk7wqHs9qiqhFdfiP5uhmxKySk6ZR96buEG63HZ9Mk4rKQxk5P9oJQSFupcotNmLcMEH",
  "key20": "4q1zRqxsnNbRJUH3xAWGMtsY9cRPG24uXwkbcCDny9PojWBddmm7WqDEqz9U5iyyKTnUApYJAFzY6aJv5b1nsfJy",
  "key21": "51qbjRyDEH3vpaWtt1oEBMzJyAruBwfh6uzdKVgwbrow86wm4C9XearHU7VHC1Wjk94yJCbyX3xQ3q6DQm583vEA",
  "key22": "3XLgVkUQR6angKDBJzqZMpC7xfoF1H7octuKMkRgh4vzjiND3gZe6JkNhgJ23MhPAoWLowE9SmHWQULHYhNqoBDM",
  "key23": "fEqYqSnzJNxipf2t1UEDbKxFVQVqbHJ9tvMJHrc2hRNgHn4BnTbhdcAd5bBEEyCVSqz2Eb48GLYSxhRH6xVpFBc",
  "key24": "2CDc7JEmKD7A4HtjsPWR2hoVKSdXNhJ6upxWU17GSu1RwBoar9AVGPLzSDEUqoNY1XuE2WXJXxrtzFJ2pQ8PfzLD",
  "key25": "4cvydQSvyjb7Sy9RxhgSz4NRpop7hsivRnoM4MK4uAfjRVsF85A51vmF3Ekrbs2dzocAgZyhgJFkqRcBoibtF5qH",
  "key26": "348vmvNdEcUixZ6h71YaTtusDwBxHsnFHTabmdPR4uUsruTCXwnNVJiuH1uUbqH2UBiMN6qNkmbZPwuvKV5kap7d"
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
