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
    "5G3hTykvBFjWpZY47TRPXdWLhkv6QpmvdYH2Vysdr1k6X6pemm2Zfne62t9YD9jHnbKMcvsNYo7nghFRYi7hXt1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvDxk3TuBB7FL3SMdZh6LoRLAdDURWEdDcnkSGbcF5yNwxKkHTcQSmbV8xNP9odagBWYGqBXCL375T7HHqYyf74",
  "key1": "2r7dTRpNzzo5CBqRk2pJ5UmbjZbpQSzPjsuhBwSpqY34qm7YqePZahhiMRvDSRUxdU5KT7JDGNeTaGyYsexanyAE",
  "key2": "2kawHqdu6P5xyTHPYCppunx8MCACJeZYmTMMMkXsV4b1ckKfbcuizF1cgDwHjXh4Zk84Kzedg36d7XCoiNJq7RdF",
  "key3": "4uqZtAuJ2dJjt7AcvHkV4ghumG8R9D1BqAHLzV3CWrhp8e5EaxY2ocGuHFmehrmZztUsgP7UjhN73ULxczcsgNtj",
  "key4": "5A7U9YG1B9vxG6iLwj5xWjXXj1Y94747amG7My5xMCQQcFBD1U2xL7ifn7zqPcBg1a9k7VpVQ1M4aJJAip2NaWKE",
  "key5": "4ucUhYKGbM5ANb2UPMRTUYvFTXzrWHTacfzzkGRMDUsoddry41EkQsz84e8gDRmJbxdpuGVHcbtq8MxXNrumt7CM",
  "key6": "3Cgbn49D8csJ4gq4gMeG7zrPsGJhatKUxDk8bBiJgtSGXKdTtpDzrcvx9C9yqpuqyRrJBCuVihDhW4UmeYAb33sM",
  "key7": "5pNf9XQemVpvqWuiF64L3HGtPBQKZ8wHwA7iCrUr2BYNiew98EX6abDFvXfFth1DvJkiX1WMR1G3nZU876PgXiPv",
  "key8": "4E7SumUHpocmZMy5PyLXrPmt7RFrTH8MWy1AQFiGzSuwPaEu3FfQ1cjwfYRypo8UyNZ8ZPUr5WjNYb1iPA3fcntu",
  "key9": "5DockBZ1rGg7cwnFUpMZ82a3dQm4G4FQ7JYEzKWCM2SVpeF6q94xaE8B3F9CzPq1FYdgHRMgHHrshi7LVRSxAvPm",
  "key10": "5bBeeggZoPUAkFoZKS87mUnc386j2uFNNBgs8mibbYcsfNa4AtGZg6XnD3M8t2QiE5USgVSSz97oUBYXasnJN8AN",
  "key11": "3rAqprEQzAAkqfzCNznVH2RrxP32eHW4qdVwkeUu9fhq1yi3oUVX3BdXyo6gVptuFoxX96Zp6U9E5r3qFZbzz1sU",
  "key12": "4LaA1gucrP5VZ742Bq3xaAJywRrJx1C65jpMjUzTKDj7m8rk7sATmWu2gn2XJEvKosSeSC3jKVXdU1vY2NoAa6uK",
  "key13": "9htbawvc2FFkPbcgcVZwUEiD7GJQHpdb94u9cFBbZ4pcuBHdtBPJRFyyu1Q6fAxntsu7suQowN48uDCBEmvmQXE",
  "key14": "5gAfDNxfWiEsj7x9rgokCGszkh1Zx2VUqeMoUCGNnrCtu7gMSirVD3bQTwhHi3kbVBAeae8Bf4VnFSHTfbUzWGDp",
  "key15": "2ctjrEbBipqcH2pNoHa9FJqy4Zsmp2ExuLH3o3htbhYNkBhFDPSiHEYn4Wiorp8KiHPQ9ba6RNRUNaLLJN76mwn5",
  "key16": "5j6mK8dUcwSeRgakcn8s5ukEKh5Fh2YGXMSRM8ewDAxHGPhD1zxozPd2QcAZmGgJHvbFycKqxmBM9NBQsDmVikmt",
  "key17": "aW7vz8UnYDZZr5D1YNYuc7s1cTd3iy1QcBBc19hxWewm1RRKDKHXciVzC8TuytXCo6SKj44Z39yfUvxHwzjEE2y",
  "key18": "apfKNqVL81bwtYZjDa3XT29qKPMtjpdXxubtctFwiT1qrazww11k3vcfgPSWoD4SLEAdjBHmpqdXhBUBNyeeEbo",
  "key19": "5htgqWwwLuA6wVFNeV3s4hrVcp1EAdMa8dvmvf1w6ozdhTMp2HVycaMM2UkmcHc4ucn4QkKQ44RpUqxATzQhnyXC",
  "key20": "4h2peFSqUTev8uPVC1kSMayKPvjyzYVXEDFpGxSGFUjoTFojUU8oL9YdBrxa1UBcNkd4wApxv6Xn4rK9kgAd6xfP",
  "key21": "4oUNYx7dNYCjsTPFzPwBTB4z1dwombGrHS1Ke15CYUkCbqSjtc8JzfAJCBi4gqxLzioJJrEBXroAzJqvyo4AzrBi",
  "key22": "5aB7YJ5ne9i1q5y1Xjhd1p528EZeApNuXMqzk7n25fJXDBwaWaoFed11tnKTTygfsth7eFoje2k1HmXYXRNbkmrk",
  "key23": "JNdM5LPdVMoXihQi3gJExPJLSg6N5dPo7euNsWLKQygftbFPaEKBbfB8MM3aysag7SopBscvFecet6dRSeiKryk",
  "key24": "4rwGmJQ1qJP27y6nEWT2ifP6U6aUidgAgBNBUj5z1BG7PUTG5fQFuWHVUb9kvSZrsTZhtbABbNaFzMJ4iyok4d8Y",
  "key25": "284FMw3wNTj9W2YCKwYQaE2ZaQW35VEakrwRMqioR3wXmHX2gAuxLHhDRVtdWLdGwMxBspnA6rtXfkCZoopnjPhw",
  "key26": "dLECeb51LVUsjdFP5DxdbYsYpTLc28MGu6N2atTJnvYGKsnExuHvidUVwmHQDyN6r4uL4EgKeouknMbPbtWVeVL",
  "key27": "5qSND9xYLtZQ5ihBRoin647531u48bUMwyRbBdeFTCr36AYfp6oQeBmVycFeTCkSiG36Eq1HTJ1VqHjynA36m3Yf",
  "key28": "5Yp14oTUVbUSXG1xpEwDxemqvQQ5Cn2UCdsR96KFxvosrWqYLc6qQgwRZyVEbW5y4eaG9hEFP9dGGbrTZw2oybZS",
  "key29": "3iBGU7XpebUccvLGotzLZnYSELCDv8XGGxXXKeSat7hVYXutNVajFZSQDQ851bxJdpCTvsBUeA9HXAtKYpYLRNHs",
  "key30": "5tX97GgmxcjzGD3gZHRCJnZX3bKFeydrCjmPeCZn7d3QxiFBeRhsHbF1ZCsHzy24XV56ztEgsGyFk3C49x1mLZW5"
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
