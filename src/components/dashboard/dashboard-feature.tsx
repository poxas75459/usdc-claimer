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
    "45Vexsk6tPg6kJ3m7jEe95gRqVoHPsCKpFbxeGkD8AkwYyY6D4fERs8dx4XUFwX4gM9Z549DS71nsUsSn3LLKoJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLuYd5fmb873tfANtY1H2BnR7B4ez8p3t6ZXWT72TCHiQpFCpLruNjrWZWGMDgrmCEXMPapfLcXGLbgn71y6TQk",
  "key1": "2pWK2QJzXs7xLtzgBu7P2eDqiTzWbSg3z5fCd87DvenufDuQZxkc7VN2hQdg4erqNEwH8Q6FzbbPWm9vqE2RJWEP",
  "key2": "498KY7QfmSthmvxQSGDPejeNrTu6QZ14uMTXBdAQ7D9263765CDb5iHNLgk4Zh5yRR3LGfetncKR9v4vpZUf3Fus",
  "key3": "3nmvaBZi7rmpnbXYPewarmviWtuwiZMZQ4b6Tqn6Yt4ChzLQ7VSyUj9Xm9AwgNNadGta9sgU3Zu5KhGuCjDd2yvb",
  "key4": "59qnVHBvkHN2Jjtbza74yffmttvcFUjZTTeRCnjzoTrFCQaDstz6CZGU5W5ib6X3fK8oPdyvKfQ9N67F3fg3MKbx",
  "key5": "5QJPsiZ35hrTb86k9gN6BCKLx76casxSmhHE8SNpxfCCHrnu5PChNyAJ7csX1us2xhMfcv6rW34wuPq1aQsG2vPq",
  "key6": "2XQc3zw98pLYiZ42FC2gqi7iqaYGbVTcGtckPFHfrf9ufnxx3VMR2dow7QgUH8qwTsjEc1Df4wo6tENAMKpyvwH7",
  "key7": "2SvGiSGWgoYCAvzcQiEUQLNxipEAFmV25uQJ2j8S6AFge1dE7PZ7jaHLcMmafodyow3rSQ8YWaFm1WMDgm9zSu6w",
  "key8": "3sK9y8Y3h2pf6bP43bAqCU8dghFRTPt6aE5yLsxKH13XkvtKBUrvv4iFToNrbAFbJUKHzEpRPLpnzq7JcmAgHcDy",
  "key9": "4VwPLSG6SbuLXbENvBc1C9YWFQgNzsRXL2Big1iStxQbAiQxkX4ARGw7BuJtdpNSkZD4ReYwkTE5Rey4CR84EVVc",
  "key10": "xCBSuAa3pTjYK8BX8FRjgdD7GoZfb7zXDCd4NeY12ar54yq6s8pwjSQeth24Azife3odZn42VWKhTn1ySmaF7hz",
  "key11": "4TWzcp5vyUpxvrkSwf82HBfiWQ5babbY3to6jLsy1GhjnKyEVumUck1YeSjFk8egKK82tW2RgL3AD2HYZGbBZBYz",
  "key12": "5h1fVkj9JjPFwp9LwUQ7zqhH8qQhyLtPYDUAggEda1J1Xxh98haQakf5sWzspfK3AAqRozTR3g9VD7RUjTUyANSa",
  "key13": "nyBQ4hTRN6a8xwizgPXnm7dg8YYT6dHWcNnsmbynDxvyTGRDSQNYvw7k9dU6JB2uhWGA5v3EtbKdwzbqPbCKtxC",
  "key14": "qqirqzRTDHboNYj8ik99vU4BKLGPiATnLJXJzFTpiM1J5rbV6GyFRZQxBfepmjTTHRrEivCTry4h9WnxPrEhJLS",
  "key15": "4E4ZXYwgi4rzCc7i4LbfeUCd6rhpuoDtwp8vM1n3VAfaNvArNWMAYkapSBsSf9MB1WPNp3vDUQShLu2Rfb1gScGg",
  "key16": "awiN85wAJfS1GmimoDycr42oVxZJzWpFS3cGrbGgcNmP36W4cnNA634sVhjyFKXuXUkaJpsZmPejbeKv3EMxS9M",
  "key17": "2b8SnzCsR2AHP4RGUGbGsPs2RaJxgxvrMXPZaeWB3vovD5GMXRV8KY3d43CVarTsKuU3DQVbVfdC9H1gRkxm34S2",
  "key18": "3JpRD7fwneEUtyosMFUFRGCNpD9Xi2gsVAPMoZYcf8PBLhK5vPcz72o6W9dCTTE9Vz4PRQ2SwvNpa1jVvxwCteY9",
  "key19": "3GKUxMTh5KyQ6HX69cUtkp4JqAk8zSed75hEvG6uMYZ5dNvfmv9pPHsYUwYQMpeSvvtwh7h69WuCpqWJHwWTHCSK",
  "key20": "5R6k761AvDJhUh4cu8jZvK83QMkQShGNtTVQoPyf5LKnWjVxv1mbhhcerKJ48uKKRgnzoyvT1xxQjs57pCHU1W1f",
  "key21": "2pFiSckbkyjEfn6iFi9kqe7d1XBxs7QTr7utCRjC9GA62vFmF8gK2pKUMhSi5zMTctRzc7jSNeAZHg2cqfS19u2C",
  "key22": "5KjBXqXZqUZHefqz435e9jvKewy2szoXoXitUEv3dEZEWxArYzjnSJDJE7wiabh19GUgeN5L1MXLZ33EgyACbtnu",
  "key23": "5wpPALKdhkNDjSyYf4fTS4tqkPrNkAozyBX8GuZD3LnyURAV23aefkH9qeFeogjH8Gn5aarXc4nWN9uSwgoDLopM",
  "key24": "33qUczQTzHuyk57icyKR9A9in32V2pnUkUiwLh94AvPK71xQ1c6yUEA2cAFq3ZntDaPE8ANA2peuENcUAb1JJCJ3",
  "key25": "5VbEociUGHQJn2861rNhCy7Lwsh5z7DjDWdx2QahMbJLvk85a3zNDj4p7ivRST9q3xeFm6gcHMcrUAf4b1qSGLfh",
  "key26": "3pZEyLLnxmpCcspw8MgEzA4pxN4KEJJ8jG1R6N6sX3x8nHSwpJGsp5173jXNPfZ8SYWou8gCyvsB8ot1EB8omwPD",
  "key27": "CgqE8KobzQRxWSjuYC7ehR6Bv9UwC2WHEE89rn7MGsB2228VEJn6J1vnQh8VxEEq8E4TTYfdPyuZLCra79KHQvx",
  "key28": "yTAKjvZWwgr8jJeJCpftUpkn1hop3wJ9izvc8kA2ftLrrPGNb3y5YFxpHPTcSZvM8s5VK3H4PUYBHXSSs6m2hmi"
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
