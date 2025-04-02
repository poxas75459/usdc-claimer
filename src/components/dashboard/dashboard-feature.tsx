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
    "4KNgKMp3zYU9MX9Teypk1hf64iqzAYCGqHZ7qua743gp6rE7r7eed6GsAkwnywdHcVegvCpkGgXF5UkU4oAAu4kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xaFL411MrEq1LU2qF1qfcGrJEJx68NDCJ5ShMFNNhVWSb9viGvyeYnmWURbMsGvPTVRhgyeszCfdf8zEzEFaE5r",
  "key1": "4cKXiuWELD82XKcXHKhQqp2Dn2JgHtH7fsRvqaVzxqnaF52tRZcf9DRp61zWYwYDLtVrZWTtcKTVXeRaoLagzbnC",
  "key2": "zN1aGufENG68WXXt9DA2rQhPHTvNq73fn8Sk18Mj5tCvyMPPm7BuLmva57nNEsVCvdSC3m7VpsKTwwKfhxhgQG5",
  "key3": "5o4x17wY7BhTEpSAjz7USnydDTpvt6qQjNuao6a3ht5zBrFVbQKQwP5P9RdiiSDeCcXnVKfCACDjYc8yC3fd9rEM",
  "key4": "2TnAxgK6rXpq3RoSuji7NcvmtHigt3odCahasjNBfy4wg3LEswTbgUNAwYYrfJ35wEUtmaWWgfBorLvUEQUGvUe9",
  "key5": "5eMKS85MCg5Gv1R1x98ge9GBxKp1zFx4wT7dxrk7kdL2ZwSAZMtaodJtfN94NGa9QTH4a5fJe7gBCYs3f5H45PjX",
  "key6": "2G7NW4az4NSukadN7hKVkT3jeuBthNW9ws3oY7xENiPtxEnhMjAgzcHVKx4u7VrRcGd2MxHDyUw9NcFXdLbpRP6n",
  "key7": "3nk8uUrUQAootegtQJUG2CzYMZxacfomtpU36bn3enDDcaaE7qTSfStRQFu3wTScw8Arp8ba9NvLy5BuWTpRdRDw",
  "key8": "5CpJVeSnWmzhEhHt5K6Ysc16LTaNxjdoJmAyTG8i1Z6AA89pgxv36Zx2jsqNZbL7mNHjSUww2HU9kVE2Qm3qrpiB",
  "key9": "3WLj5MpugeJxETLe8kjWohdRdPs9w7UCYzfbT46CXHoCm7JBqt92XaHG7nJD2q9wgb1J5yeriTnqZ4YqrjRJGFs5",
  "key10": "5sGWxJKHo2HGFHThEKSSfD7pfXSndWgRdNMDmtAzPsnGU8ugTt7pXMhdB2ZywzQ1EouY3SaZ9TqurwmUWZrS1zKb",
  "key11": "2YoGAC86jgQwxZUVVAa1Z8YztkzxhmwLzFzuX2RXJkJN2ns3fusB7oyCXCkeBbZunu9FeQKLXwDFTM8R1EHURyA5",
  "key12": "2YxweHCDa25CTKbPNugaHJEUMEBHDsHywtVGkBPsr4m3CsuPZxxrqfrX41J51K283Jk5ghXDJstgC1t5ZzgUGrGj",
  "key13": "3mprgQwVdYSpq2p1SwsApNoFci2Gi1esC4WADQxvRGjJz733jaTm7mZXaWniZfPrGZ7wZ9XPuP1GNKrwtQSP4wsw",
  "key14": "2aArPgRmgYZjFAtAoTjy9c5WAad1hNvdDePaxk8KSVSXaTn5984G3zsxfnFVsjK2KxxA1E1NXYGCu4S4mzG38Mbo",
  "key15": "5USSngnNLyAJKVDqokSoiMUHJnNX8dwc5MwWfuZDw34NA6ZPX56Q2Uh4ddHqXjU1A8BQYZ9BpkxDghZtTn44cuHv",
  "key16": "4hmehjVfC9zt4TLk94FGtQS7uJtXANEGAdQn2FDUqJxXCpCYxmzez4GL8cnPJsd7wb7X1XArF39jJz7CZKQSgqZE",
  "key17": "37BYkmwsNvioMWk1hHGi6RwCinnZJRjbZNx4HoqciahFAXrgxfarJFHZiLQCvJ227XpvnvzHRAQbXpLFRhs8676N",
  "key18": "5prwUVE3NW9FYj1c8aKN4Yas9YjEJ952VXfnXU3Xf1zz5ZkdTdtAKZAzfv2z8QXtLCtGqDtWdRPCfMXQDW6UL5wL",
  "key19": "5pGinDmXU4jDafA9t8ApYatm2uJrekoJcRbtrUmmiKz36Jfs5XzMtUVMoN7zZnPbaXaGWZvzv6gbjruDGDdVRUTU",
  "key20": "42n1vKpbVQVeUPgh9bAQ8HvZ7ud4RoLzQNBB4r69vp1HtpFfMxCTtgBB8ag2Pou9mhCMmjnzaf958nefGsdRCrji",
  "key21": "2PpQXivjubiqoDqHHjcsGDTkMbPSFSu9KaCeZu5LVV4oQ3hjJ9DhhJRCZqfM8ZKGBBSzdKxeRQ1LMiC4hajT8HsN",
  "key22": "593sU7fF6ANitX6y2xGZ7KQWhS1f4iaSPknDpgpo2JDkHzn7om2XP5wxgavy6ok7xhQAsDuYtBnRFPBeupjjiask",
  "key23": "2H3ewotUrWFEaTzAfq1kFXwU42jfrozSEDf2CFeiiS7gU2fpTKZcdQLxrTR6fXbMDPJVVvxwHqJvLmp31d5oGRPP",
  "key24": "4UrMna6sfpKcjWtwtgKANk3eBdT7PMafmVTEd9xTTgqcDSVhRAqgKzLKeAQnM4SYo2j9dRAPXwEKs2V5ykz98dsU",
  "key25": "648JuKxJTCbPrQghsGyqyzuqHWtycWLEnp9cNpG4zmnHJ4ERMnd1NRNiF4fMbJFGNo4RJi1VuqLQ7eDiHCytJkiF",
  "key26": "QoTbkgnZY75JvhvCbE4HH7MV3eyUPqE9QwQdmxgnCsKkGEcf48JNsgnumdcEKx7W22h7jkkbWR2dtZ96kUxvtYU",
  "key27": "2XkTZDf5SQcvqPWFYrYFhhPpBPdyvh3xwYs3B9LNq7yAGjbHWT7C6kVMZUb778xzmwKAxqzsA8yrz2usgiRgAqR7",
  "key28": "2V6Mwxht1XMFnyu55HHkRUsxSzdwrdvwrtzHzt5HhtaTwWg3M9hMCoxN5e48ckPoLRLULvMmxZq2C77NJHj8NLu7",
  "key29": "1CrGim6QGxY3aUZPfR1wRm1PwVCrdRWVVHmUFpm62gd4cW3iXkbNa2Th3HLuB8XaEh3Kf9MyhMZat5KJ6sifL3J",
  "key30": "5u5hs67WbgnijYvWMFrYiRW4px26madrnNL1fqBdNe9sLLQXuJHQ9gRBvy84MaMq9EtPB8FrHK5q4Q6DFuSndSC",
  "key31": "xvV6HGrFmmBudXgWPvk2uEbWmoahFKwFL19hdgKZfbUy4z1GE4C7YCNwPMc2beA33LBGuX7AGZDtfUVb1Pvmc6i"
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
