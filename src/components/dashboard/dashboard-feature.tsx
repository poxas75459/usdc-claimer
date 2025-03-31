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
    "4bDejyrTcMUNdoGpVNTaKt43c5v7UNU7VNJguzpTTuvBVESEZfkLxJwsZNNpCX2sEVGScX6qt7Th8uC15XAbbuzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7xwKph6JyiyK99bK2oVkvZkviyGNCP8MbZHxoBUv2BauPz18G6xZyyEDus3TAGVhMowmL74HWKu3oHEjMxRKwz",
  "key1": "d29j2Ybezd2NozEeGpsjJ2h7Wvmopy6mmMfR9doBxZatm8wgB4L2aTFFChh6abbkURt1Fbt25TtqoeR8jfUBpHY",
  "key2": "3j21Xwf3Mo9h3BNPMG5uujqsGD3SEyZgXRrTf6D7GQjx8nostrJvEdXGARPZEsu5r9qZkzPhrjwMkhxAsSyw1j9K",
  "key3": "422MsvNexttM684ibkGrHeM78UQTpv9pq6r6ahzs3FeaCMJnaDZv3usuqS6hiP3zyQ7UZzhsxQfv1n6a3kMw1JdK",
  "key4": "5joJgFsySAcX2rHF3ANx7DkGs62hJ33QXEvE5wzrpVFfVPk5StGJnNTK1D2o3NKsrYBFmWao7SKiEzeojUVYJJh1",
  "key5": "2zV12ZP4CFeFHenZ2aR94EkcZnjK3o1dwds6u8k5pNSShyegoz3iRkN9taCcicubwo5P2zMFr7M4xJdLE4MCJMgi",
  "key6": "4aMBsY59uy86yVYk3xbr5oJnp1XdpuVfxgSCG4irqPy8nHVSGNnXbKFzJwtjbdVwK1vCnKreVcAomo1BqpF3QjiX",
  "key7": "3kbac7ZpMoHuyGe7tMcgnNN8CRqaqYYyxfD3NtkDYDCmabqzbfPJL4ykz6azZfXCM5nYda3CpZWHgEW53sCQnyNn",
  "key8": "494aYtHa25DztQxQfbtakeqsCWckfj2nGv7W5qbbYFcyidyTSWoyAn8MNZ6psdeN7Yq44A7dv3NKKTxfnSkHEvsy",
  "key9": "3x1cetGazXbcr6zzdgKe4ySa3oFNoMgiAtZtZ5LAVHSEMrfRkYr1m5QLiRoEeBRgKDcwnh9fG6rhLBu5tVH1SA31",
  "key10": "29JUUnDgrnsL15DyUMuhPQRTCrScyyyk5Md8YMqEhcU6VJdU4zNakCNVNnLSMiEwKVaEWUEQU6Z2GSmuZWkKnUuJ",
  "key11": "4XrwMDEu9uHe4MFpcfpxqdQTfmpcxj7APLak7k1uRdDvdj4JruR7b7uqvBhbMQgCwXu3Gpj5QbceDraxUrDQ97PV",
  "key12": "Pp16hXbsXVyXnvSp7bYeyLjDHNYPxgyEM7bWUxKjQXSmiR6AhfZPEYSGAW5GyyZQejGFokEQBgsBpWW8aBtcqir",
  "key13": "2T66qr2gN4b3Uu1TNRwLanEppZzX4gGmdTfu8FMssPYXqKcCF75panf75w9kXidWK1GetbJAWKdXb2bJXMFSk2KD",
  "key14": "F6h3niZ6hWhzrGb8SAG3F15envXmCXvLqXr46TtJnWLUg7SCAD8axwzu6wff65it6uFLUA2AKHxdYtGzSStaS8k",
  "key15": "oUPJQtRWCCmQRJLbnVnPULoxsQMRX8waLCSUd8CqLMJYMhGvsYEa3B5YZCmrrAVdgte9QhW1th8vnNMf9VoW1ow",
  "key16": "4SXhCqAE5HyUCL8e7GBtuZTZjryjdEumwBsYxMeVqsgdCCdBPYW63WDVGyPddrVuaCxsZr1wM4CxDA7rGhsGtYBT",
  "key17": "3buqYgzMs9NgEgZfoKVS9jt1qmbJxL1eXWBtTiCptGXbA4H5BvchqdjHvhuEJqsJYavENPcQ9xiMqhwpeiEwoDeP",
  "key18": "232wKNfiucpRRAQ4d4gDZW5WXbPwJfiJ2yDMQG7WK9Lz1QToEZYCE7caTwaYo6naa9zshk88zRAcNQk1ytYD8p6d",
  "key19": "EjazUDusU3zx4kL336K4HqJwn5cBEfhAyFajQJKt2TR9QzHERadKRje23mnaHRK8vPqg6pBNeHtB8EM4vzkArsC",
  "key20": "2J14LYt211KLBqdGEdwxGcAupiPtbc7FTzisYVNTKoEQVbCExJ6EBvRja4NtuMXKrUAmavejcsvjmBGShXfhXse",
  "key21": "4hPXH34iH7V1T8T3BTzbeuU1FxDyye5C99m7wuuxBqKBWcT2DWUKLtRJXwCC6iw1wHzDf6DHkNs7ZAFwxMmmckgJ",
  "key22": "3EpGYBxKUarcM49WdbKbRxHTcUZJtj3DHVwUaHMomLaL81k3c5UDHw9xPVevqrziiVLYkHVdDU7uvt3arEvZkdR5",
  "key23": "2oQRUQr1P4uGPbBf3Y1sYQWGU6YriRPazYrnHNYZbBAT5mzBP58jwUXPT1k1Smn8hfey1285wxcVAUYakfUV59Lv",
  "key24": "3VH8BcMB9DcdU8ozaXSRoCQ8rp6XwKMvQk7a3ZqghTXuJyTCWP4Z3qPnYSSt3AQrKzfocH99MZMt7seKDC6HaBcN",
  "key25": "4h31PfKmw5yqjifv1XUMFYyhcW75cNjxH2KLts9qxZhcVbGT3Nxfiimqc1sL76rAoZqAoRG2Wokbb1sgMDGxJMyu",
  "key26": "2KyxfMKGbZRXsxnkoKwKMt8npd2rKCxhFkCKxu5RD2tRJQaR8vygC9tLFYzXJBwiBxtCKqXt5HYkXUq8NB6Uhxof"
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
