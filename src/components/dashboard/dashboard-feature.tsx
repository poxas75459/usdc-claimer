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
    "23orF8i9QA6LJZ7Fd2vgKPgPbbEXKd7BeaTaQHE64mZYFiEwKdNb5fDoKxEafZncAmqWpuUpZaPECVbVSNKEz8cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sze4aesFxebsrNzuaC8DYc3wcF8kYEEnfugkTXYYbZi5AcXV5EpAe2JnVJpeTN2CxHqP3UL2CjRMaztMTmaPHzn",
  "key1": "2JJKaeMz9oqU6mWevysKByzoYWdi7tkutPjWx8K6zAJKhAxDxTroYakYDaQXNypcBAqbmMQVkcxtQWQ6YdG3kxii",
  "key2": "3HFDXgU65ukxHwQjxMF7fiXRAFPdYPv8RfyqzQgui4zN7BohWRLeKux26QgHwjUYmhxnXDaVk7CokwrWZTjW2GXm",
  "key3": "Jg28CV641pecE86wbXtvJDY4dLxXPdeGbNAtS84rxTP6GfXp759NwZPWPirAbpcpMcenAUjTFe3fjYdjSqoLVjN",
  "key4": "2tTxH9nPtUEbx7xXgUeQ1wa7GNDrNS29iotCRkNGGeNVEGTQcEm7L1YSsjeEk2kyQXbh82yQZBopKhyhcfehcVDB",
  "key5": "2CrAKAUo2efScNY8jwLV8EiLjS3fZGtkBXKUMvHAE6qPCuWJYFompRgZRuv2pUSu6YDego6BBGWBW2Ksv2f2KUdc",
  "key6": "JFXMuXbraTwHrGaX82WV6Md9CaECxbnhhnfKCigTMJihsbhn8wG1eNGV6riCEhEHRqH32mWPYb3n4oDKH3JeEre",
  "key7": "28qTwi2s2qYVvWo5MyjF1thNucxWs2wmDZLJWpqDgixpmEym3ncYcty8qsrC5fsKMBve7ZNkuJ3e49B5F2ZZ9nDC",
  "key8": "2v9QvHix4hhS4nauLAq78ewXc5UJA3o5GQFNyuebLrUxvxNYtUoE6qz1tmmbcfjbhLfA7niM1t67QaWeq5oXWgTn",
  "key9": "36VQqK3yapaPVrGtEKUvJmsdGtqdSJ7KgbYaXUYH2w48LWJyCUDZQKrKmPZEzmctDpLWSCGsm8K4mLUMgpFFP7K3",
  "key10": "2f2DWL9uTHLiTfC9kSeSbJEwPQuadx1FJoxzwXgqVcv9bbboAyiut7w9sZDREJBPkmEu8XPPPNrzRTKQrSXMeZVX",
  "key11": "61jqb7FnGzgVQqm2TkD1EFYFXGMovKSQQ64eYrHGD42tXXHWExCBhKUPX9tU2sTux7wDw65fVuCQXUxy7KrmJYHt",
  "key12": "63V5zc6FpWQJUNoforD1ibyd3xrsUMvQC2MB9T1ubwAMfXBprZbibJqLbm1ccfFfTGXKDErVYRKVRS9xFNo5LYSu",
  "key13": "65yn78tewmoA22G1ENgSz87aSWFDFs5ZVzMGu5RZ4ET4HKi7tMtBCQmAawHJHPh5Yq55qxQad4m7GZFr4svitMKT",
  "key14": "cbm3SaTFpzy4ypDzcF8dP2HwfVYLjtLWdGis8yfgZg5PMza5o2YVVRK2X4hLQzMEvVwqgZmY5aJvBDXGjMtzoGk",
  "key15": "5n25LRdgiUm3y8FvsXDD7xuN5bZE7695R5QbecBC8VonKkwRUwx5VhLom76xErzvnbCRy5kyhB1bokefLevvDdSR",
  "key16": "SFmkoEfkhGM2qhc6BpzsniuKYspv4RM7vrqmKxzv5Pv6YfXatzJnn9x87yjj2br1TXjFf4fxVpcMy1pTET95XJr",
  "key17": "5AE8Xx3x2ursAX8atJJRd7PmcSaEbxBNtW3hMPAgB7STk4g3wNFo95jhDg2WHW4d69Mqnnxis88gUHbyDXVfd9vF",
  "key18": "3pSYkq7pJVdQUEsepessYhbfBkusZPmSaGvRyHGGZmww7cURM9ecaqnrNESsNCGqwd6awF1K5px7RCa3D23MxNPN",
  "key19": "5m4aqBfLRcL5ivDRm6Af5wgToYcApiuQyWXwTGd4TRfQ9FSyfmZ5WEm31BtVxvK5QyVT92j5DbeScH5okg1nXRV3",
  "key20": "3McEhqrEeFB4oYhiBXsMV3zkEWGqjYRPjHtFEeovBvN3xEDPvmT4oPgee7xh31j3DprjQAkQwthHzT8B8nCFtwT",
  "key21": "TTZJkCu916eJ1faGW9mWw9Cz5DLC8SJqXLKd5Zmf25pdm5pZ37TCXG21uXJPVcjxCvq123mt31r1t7aEqz7JuNT",
  "key22": "2X3wHaZDRP9CvKpxPMeNdRf9kArkJz5xHWkzaNhLZMu3hXeHg37agcY1CtSb9ncdzeS79kZwcX5qE6KQrY3xyp2p",
  "key23": "3kMWtHZTNQZGnk9iKRKWTbyLf9jdpNNi4VxVdAByzNabA48gwAJpuxNmFZ6kfDRtUHKX86hmRL78AbzQkiPABdG8",
  "key24": "4gFkxWMjiFb5NdxDg6WShwvmJnmeffgUPf6Zw6HWKgHjabUeMxnRPc8bVsUtmSGArs5yzJN6sxMH6KVaeGSz3QYx"
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
