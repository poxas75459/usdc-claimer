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
    "3JRCA4EmAXX1vc5Ht5bJ7yuXwQiPkRTUpaFzwjmBiYe8d1jYqoBRiRN1Gbnu4Tvu8NWVUo2mGSVkzpaRYRXwssUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F1RVXBrSwH287rv8YszSJqHx7VQUqYaDJQyHJm9R2P1cZQ6dzscA8rrrJmhcJ2sKNtskndzFYXYd9HGFLv6hoBC",
  "key1": "4cjhdvQGXwfkoiH9BBx2pB9tSU5mtRUkZ8u5CnA82WPV3SntnvVSLb6YHWtom9ATJBtEubDHs4MR7zL5tfJR56pg",
  "key2": "5Urt57n5L5nomoE54ysmorivJ8HXWJAuu3S99ApPnHvgURPNGaF9aUVb4zbbMrCsFLR5JXni9hFhMBNPyPj7dUM5",
  "key3": "3t2tdsRDPpoxcUCBVHRSoVuhiuk3zMn5sD1Bby77dx3176s4NkT6C8DStbpARcDASZwUq3SVJ2LQWneDTdxn5tt6",
  "key4": "2kmMTWZuaCQ1Q376JLUmWh8mWDNC5HEyrGhyfeKf8HE9uN1unfjo33RDBuiYRjwH65CHbdAXfjc7rBn2hdXDWgaC",
  "key5": "4JD2cFmRbVsu6MzzyzYTGKYDWpXtqhvnQUV8eyCHQPm7HFLu9jqEMUvbWjhb7qk61dCLswZsiMCB4aSEzfXXMk3m",
  "key6": "4wfv3j1QrE54rDGb34BZ3J3sx4cJUyto8dXHk2HJvkuLMuorSoF7iTcxoHLm2NoWNtDx5eUGwz8XyCBZWnHLt1Nz",
  "key7": "59i43ePTK6qHkLBErS2quHGgWH8YTSiJu1MYWZuMRfTgxgJ9pfGpm9LcgrB1H9JWgGpbRhkmKFVgDQBZk1LkKqVx",
  "key8": "WrVwb6hWv29XZTqDsZoVJv34dw1wod3FPnLLssWkn5VAgRtKeXgGJp7HwQjnFwhNHCRNpnGaPMruNPiC5tfrohZ",
  "key9": "DP744EGm88Y4yv3wnEXEdGXpapDf7po5DhQ9HgqC6NxcNeWZAeAxAPVNGbz7Nq3Da8DouwZc5MwpQVDXZgBYi4Y",
  "key10": "25KFQwUBr18gLS7pxZxgePE8J1VPDixMMpb6EmdJCNBB7jXsYzBxg1HdGyVaxs7QK24GcFwVXco94bknsz6eyA31",
  "key11": "41oFMJRyUzJxVfUaFU8mFqhQDmzmjn9oBfKvkfCSwP6aVNkk4qTCGQMREyWeH6x4ztyfwF6JGE22qYk8DdxUmX6z",
  "key12": "5VbTMWgUNBKNUBdWdTgwsq3a4Hu8YqeZXY2qbrc2zGLWNwLNnEunQArsUj4n6xNPTAgFGoXwGd3JnkK1P5uK95HG",
  "key13": "YcQGTjihRyNTDQwVZ3KKpXQayawbj7WEj87j7Jp4K7FenNZNsojrX1TcrmfJZ6sWw3Wxuuczk8M9Qy3DE7c4z8f",
  "key14": "5HeK1u21WqJUmjMXUtkBBkMPc1WzDndMbTYQD24J197jp812DSEsivG2MdnQVbHsFreC6hETwA4s8ixKAtGKvibk",
  "key15": "NDyRo922KYTTSkwTGzmEw7xegEA7Uhwi9zsUJ9njAh3ujd6uKaxUqS2yFPUrhwMJ85V5aMgFDnKo5ZV7N3jrjya",
  "key16": "7vKufrTNJ9nuAi4wkLWfzjy6sSUFX72sxdydM2oueMwYs7Pp4Sc2gD8zgkJz3YwoJLwAoAD6VK3Rc2D5u9Cf64B",
  "key17": "4zBzzVkt6cYg7zm9uQdCw2d9csHgDbQBrwhjhzFdib11GcnXP1uxH22RVvbDAUTYy6uuxe9p6WbY1HhgAdqmAWAn",
  "key18": "4fvBso9Bros4ht5GwzW6g2hCtJjKN8keeTpP65nmJndBe2xj29CTEHwiHvx8XLVhDkkerPS5TYVYi58XfimAR7rW",
  "key19": "dgmugSPfmTjfue9rrMPD69QnwD8XJvyBi4q8rxhT5BjuoPNbqWx4okVJLZN5FShx9tJhpsXGSHguzKScubhQEzy",
  "key20": "5utLdpAB64tXJd7hC38qmRvi8imMn8rq4feswgNPTXPvZU8Y65CnpKTzb6CfEB9s3vb7wAd1JzFLhWznAAA1LZh5",
  "key21": "K6mVU41vwErEtQME7M1SJp2KZhuPNXPjwLqY3bCmTFbiYN7igyaUB4cNRoLN4zQkigz8WaYBkbhLXAXLFhAFNfS",
  "key22": "2JwWngVsEJurvn6cbg2qvAcrM9Zv4WgESJAiropTfZacjQ1DRPBDDFunQDc6b6eCHFaakHSvxnzMfPGx7jaDHY2o",
  "key23": "2nLT2rfV3JVwhuau5BdAZirMjQb97iRmpJhzdR5DMGPSdhe48WoctJmVWc9Xef2byqd66iurE2n5B1ptv1eDtxKw",
  "key24": "5hGqSsKWwnSfeCKhjGLRyqkvvsTt42hGF5Rxp2Ri9DRfK34gxSsvbNRMWxUg5AekTGAzTq19GTa6eEsG5GPxsCZx"
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
