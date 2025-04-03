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
    "4vMwzHqsztcAKsMfrUvUhEWsSDnujCcMwjDWvx9L1q1DgHpCxDjaxYFya6pGCBYbdE6TNdH3u3tQ32yePVb6cVPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uCCTYmfUgqHFpjv6jJW5LeXJFzkmgwRzPSeXTNXXCksu7vSRvCf76DSzAQq8eMRZwG8H24KDhcPnwy6kSfRhkp",
  "key1": "3m7Yq7GHUbLvBApDkmyHLx3Hqbafpyz9DrKmk4voX55sfbmyiwzdA9H4qsNEkohhPv4RwL1YGEJGUKc2DFf54pKT",
  "key2": "5aCwLqa2x9TSjASzqyy9rLTgnLyqQq6tbn2atHyBwgghcpbo3fZhNB3M3qC4S6LW6Sr7vuAPqxjKUpbKFspLqCFE",
  "key3": "WHZBdtwYk9dEHGTMEAnWz4CxG7VdNjZh1WqLe9ZPQBgZjkYXTSvLbNAqLnmo5uon96XzFWTHBurn166HoVcLzXX",
  "key4": "MuhDneynWEbtvutUmQJS2gnw7VQzaS4txfQMkUfw6NVffukJiUkKiYnEAu2XfYGLdCfvhtyp6wSWtgiGHn5KdNj",
  "key5": "2V1pDFpab6NMH9Uqc94xh8yoL1XkmJbjNmntxYifxkXEDRY53wDf2rp6Ap5cLfyPFUFS2xJo6dn7a4focSkTN4Df",
  "key6": "5VJsvBS8JCJDsKcgG4hGUeCZeBMMYRPWDGuvsKNhz5yRuQBi1MHkh3cDNT6nRRDinqLEu7GEKSRuQnMMk8C3GkNW",
  "key7": "3tPBPzfFW4u8o75bcfgVzcXhDfYi2v1sKyJxCZe7qyz7M3qSY2ZewDRmtZ5Kzk3xFVaEEt1LuRPoTuDYfBYNpWDE",
  "key8": "2upT8ENmRoKSQAtPkxnbn6KGFeW9V8mchRNMCSyUzM4eEX7YkBELM1b21gSxyNEH4pU6kmzSmbv24f2HepmVxiEw",
  "key9": "4sQYFNN1crRBN1wfqnndqVCLNCYg87oTWzQhkfDi5XgeMUG2sU2QSKY114xth8RN3ngcH6WVap3j69ZVuFRY3sCP",
  "key10": "1Qn32r1Q3WFx2vVgUKnkymFvwXRjYe9yc8BLBrYvk8k6ndxuB5Bh5wgMRJPvDtPG7Lfp3pErjwWPhWH1SrF9xSK",
  "key11": "DfCLPQGKK89yvBhVj9qCPMXF5hCPVA9M6Nr96Vv6NZ6zwAd7Toskd3DdUnLF2kmrWwciSdbida4uGnWsMvEMqpw",
  "key12": "2GtXyZcRnFNJGSEfiPNiMqEHbJ77mKAWQZjN4J8MaH1mRra3ntJ7usZ3er4pJV4xt3RKjfEFw5iEtMMaJ6aBJqQE",
  "key13": "2ZWsYBcRjjj7mDsCzUJm69BRSyzYjDHAFHF45AxyR7HAH7GZ9MmFqPFwpv2uhXb6hLvJcAQdcFAczzQJFK5SgoiK",
  "key14": "PZvvHTs9yh9o9QXboi5rWrgwRActqZbhXxGsF9Gs2LodJzVv6izwKpssHtKxfLbYdAs6VepEaNPbE3CBgYUvntD",
  "key15": "gjtKSewk9CBR9fWG5hQA6LoHfLEcyXRpK4J9RZ3ysrAGot5R7DJxLqphezu1Ki5fFnSxSDpDWtmmP6Mx81ZULJW",
  "key16": "5hWJPyzCZ3uH3QdmftxDUM6AYv2XAkfBroGxZdEdfxG4thwXMeAB8ruzV57UA9AETi7MRCbqNBJVu3zb1qR8xWPt",
  "key17": "2q1tgUDhAnW47w8sQpkFAfL3zzbMPJcTgS8BPjH2QznCvLnwTskzBFhAo6NxGiKwZyi3TxaW7PWhSFpzMtGdVeJF",
  "key18": "29WAZwJTYEWAXNK46gZMjVYp4dwaxo1YsCEqrqZYt8DvPGVLZ2pRnx73XSYPzRf39KwYLNpSoRQRqzcqncr2emNf",
  "key19": "5WVUxwyVsi29UARuJbyKdHR8h7bXCmqUYPMjSNeLmcLCHc6sLTFmWwqb6p4GcLN13nPuSHeB3N3CzecPV9jguntZ",
  "key20": "6jkJ2i8Vj62QNQkY8qYhBvy5q7d7pNAFavyigiQDUpgtA77GA9vqZxR5dtXhAbdWzDRhaFueQ5FMYaZosuwdXQy",
  "key21": "2D6T62UTF4jLcBCaQjScnEyK1VfgAGV9FVsCegbm9iADiqsEUazCHtBSQ1N3TiCjRAPkG1Zw2x6DER5LZSH6Fh3i",
  "key22": "55M5Hdenkr1kCGgdx4LfrvdqrWUToW5Xxe8gnmKQsJ4nQ7973Jys7edfkuALmbizmiADRqFvzujApnzY36o1kHhe",
  "key23": "zvcNg2p2imyEC2HCTdTsvxcqJLeMWp6E6gWT7ikv5vh7TXXYVNpRchKc8ErMiBWGThWCtvKhBzpeQ57PLuFPBHx",
  "key24": "5c7L2zdSHbkECTA1HHt4UK4cUR5RkZRuDnFBDJLrZ7iS5HCX5CXMGJcURXnKtkEehkYebAqCKYaZsaKdtD2bY1am",
  "key25": "2QLtSs1mLLScHm23rkrm4fYi6SoLUUHuxWibNPG3Yp8Avq2o6YUXEmWB5pW9g9nizPViTXJygzjKyNEjeYA9kjP1",
  "key26": "3Fwb3LKLf2ap4n77vz16Lt5NAaQXaYyoVuPHs4zt7P1JKjdUfXECD5AfWuuFAgft2bD5dEhNtfGhuapLFWEYuVxG",
  "key27": "64rNY8zdtKozrR7yh6mupu3Jo1MBnP3LQEEwrNwNJy5Y3RpcYw788W8RGiNcE6kdfxxX8uJ7smFcHz5pvEKAJp5M"
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
