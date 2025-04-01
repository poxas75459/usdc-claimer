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
    "5hMVQ67nwUE5caVXYFAYazDpcUke1pepX3GuBmCgbeW2ALcds2EZLypQEQRi5x3cP8bUnTKueSqV3AWxieBxeyiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpdgicgkPudfi74EgFoM29Z4qDC6tAY3eHS46qikTwoyV43PTjZeNc7iqsQuy6bx3SP4fgF4mszxodE2gzycLf4",
  "key1": "uj11cXVnioy6ZJpLxviYCmFdrorNJB2kHZ4hRHWejBeADC5SVaEp1s8cc66jS8mBDn8dTNNwKrPKyAxLeSJWBjq",
  "key2": "4SP37A1ZZgef4mJe7TdbZu3tPT1W4DhrJeUZwCvVDY5s66ubifiKuvE6Sv8ufn5cyomFVDHHTDEabiA7q7vANsVE",
  "key3": "56rFdxFbYzni2ajKnbwW5DPFJPN134QnFUNfHt1ZEU2dhJQqWkz4WdpMaJ5eVwZfxTL6ZHgbcTeMcPjnPxoLyTTD",
  "key4": "5BCnmmp9SzYs4B1y6EgLidLTLLc99HYm1JZTPPQigicxu3iz7tMe36cXFL2Xnms5XZTpHMJ3qJirg5HwiNaZAm2J",
  "key5": "5xu5Nz5dDkWkj6YadGgFz3fY3W4AZQfQ99wQFMWQhawafopyC139tzZiAERvBBVK4g2XFdUmzdDs2UQT2RQv4b5a",
  "key6": "35VR4bq89fLc9iR34DDRiavBq7tnJtuPr873qV1zkD8RVB6oRhoQB1dGtEhsDzmJRuQ1XYXnGmAesVBWuhoHRmjq",
  "key7": "5qEujwuFMYaKY2g4BSP6oYyMxMXiBbJM2MnKDxZBny5imiPUUw32UvfDuCSWtosKCQMPpMEGfACph7DPtx4Y6a25",
  "key8": "5YyaTJy4A51rgncAH83csNQxfKa8ytL3UbxWdRMzXMr4eYKiCo7oozbZpxnPLVzfvN71EgdC5nu6xJtj5PUrPFLV",
  "key9": "25Rd5XsFUsJW3HygEGvrzfUm1ULVBCNwe67vAM8xppdxzNuMBouakb7mC1zLENmnmGEzamg1quSs4c1Z6zFmK3j7",
  "key10": "5JoMmHGgjyMQSnAZqqLVk4JD9tvtRB9k6HC2dHoNntarYAHAWzMcSrogXfmoWNhBexHwCLwxha1g1zgB8bG8kdFM",
  "key11": "5S1Wudb9NgXSQQW5XkkusfzD6H5P1GcNNHKg4ceMe5MrTVX5tAznAigjpCv5SRpstsQPb8aTiitkXG4hjZfcusUp",
  "key12": "3yoPGKbjzHSVS3VGNWp4Dr613Y2CV2tBiAexZoi2rAhMPaWry5zNZk9axVHLDxqGJr9SGHHPMTZnExxZTQuVYKkB",
  "key13": "31wxvWJNBgy3ftXX8fdCjWvKCn3JR5Ah4L7qRkV1xD4NJLRPPSN91CGBnPteGQDxYyZZtKyzTsTRFneanRwKJvjE",
  "key14": "2Mm2JP5dN1akkubYMSSa6h2vpnkmzFKnnsh4ctdq8ModyXqFfUDH6EAfog1FsYmhmww7FDUonNfPBe26Tvzxjb1m",
  "key15": "4RjGTAsojznvPYmzvvtWw4zgvyxCQUe8nKc1gBGTsQnbwCtX24EdaPCGiUJPWZzC5K65fRxD8MDs1c9HFbtfFzwx",
  "key16": "2KSfr38wNfxozJBvMuJjwLMP7oL6kPn282Y4Sa4HU8aEwcwujzZqRChxUcdrKMxASK6FBNwc7e44Qfkmi9Hvfems",
  "key17": "64G7Jt6TZCiu4e8c2T4fzdwRxFDrxAhE3WLYhZUDRwUNQwcmYnaV1Cirk2WK28Ny3eHNkyE5UbBcnpWZ5YbbPNZV",
  "key18": "37FFkn4ogbyWfpZiGgvfX1KHSRRh9mNvHGrCmcD1yePGU2kWAvzo2ygxCGhVs4C8K5EKv5tFRUBtZgSBvrLaAAfz",
  "key19": "56WvwUbqotP834PNE5opebKYWJZBBYTdLKZjcAWBjaefZdULV6ShM5autJc8VaynHrvpNm2gy2CdvvEmhmoGVaRj",
  "key20": "rEtLqwAnPevVJG7LjeSCD2AXKW6yif5uxGkmamfa3fJknQgwLbDtbyE88ZxNePuVuoUAfBFAitUeU1RFnW6Wgwe",
  "key21": "5x3sQUNMWk4r7CHgUik5ckcYKu6PA8KQhocQDmxM3bv8Goapx1jJkexM6WFPAWCrdSAjuReDNKWeY2CdjudjhZ9g",
  "key22": "3khEyB1pH8ECkygdorQhzpAyerzpYoQ5MpkLthwUNT8LSUmZPdEeFTts2325PJTqQUCZeLu4hTTSHQNxhWWmyiA1",
  "key23": "5z5uVKzkCCPq9HQWDZwhHasYRwqga7RChhha31yA6tbEaBSEUru6xm7S9fB4fJWnfcNURUkA4t9uqNz4aEgwAbxL",
  "key24": "LJHJsBhM1pF988zcU8PVNtHuDwAG9ifPNEhyYmDVC5gyeQ8B6csxzEopPBwwqkRFc6MCn5SggYd4wacJFHC6Qb3",
  "key25": "2kPDv4NeWGkyqkMsPCYqM2YVduW5juSXasZdU5MUV2v7YFP1PTwSNd9tUrPgcxc5ujz1659LHmuoMF4Y37CUVvZw",
  "key26": "2p4ny51E6rojq3fXj5qrrY3oPvjQt7qCAmkah2ECZSUSskPYvsmeUNrcDkiyvekJrwvoxQHiLCrFaHAoJro4rCi7",
  "key27": "2zhLRRuW48PPYuxnRLfqy6mynJhLe8yXBSqAG2ctkdWfnr7vdqNFYGJSh2nrZHkfSXk3zQEZqZPBr2GBCE5YbJwJ",
  "key28": "z68tUEGq8ij1MaDLj94UxSUEgeyHpH9p2ZPEVv8o8BqZJ5ME5dMVSFQ33nkSkeQ2RUH8BNbc1EsAAv4dbfmyP9J",
  "key29": "5gj56gnNkQ76tpCQZL5ZLFU7rzr2SaVpc72goPL7eMhjCGAKPwGuosy3dvgPDnwWWKNj99xS9GhfiPeqLzdZLxdx"
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
