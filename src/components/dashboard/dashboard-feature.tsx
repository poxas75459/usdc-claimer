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
    "82D8amZWqep52r5qXc4J4N7Mj32P1zTsYM7vNhsshFw7VC46dakSBT9fxSYqJAeotADf5NCErn8zHqrfekFRx3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EThHfUYjWHvp5HKp8rzGoqvDr8kCCfAgYUXaoXPwxeaJXvXKnMdoHxNuHXRDa26KvVT1Z9AdPMhFwv52khpcqYb",
  "key1": "FejPJtXmsFrZRNX3fJPrfSzaHFR9r9bs9HyseYp2YM6P7vKM6SGPanpc6CqAGGXLCCuAA3cG4UkZTfJsMRSiiKB",
  "key2": "55n8DagaUt4U8e3zMHMBqdUKZdVjmGANNZFhvMcW3XfiFxp7ppfHbB1XsJaVKen2Ke5wqtGVXRzAUJ37fvxUd1eG",
  "key3": "4xzkWqHBobssMzi7YBWMnMBv3Qz7wkQ6XPbP66vm2UsaVipSGdRAUFBKf255UL8P9JqEgJr714fUaZuQBzZo5JHZ",
  "key4": "PSMN1WCffe9LnSY8NgG5AvP4XBEe2uNRwQ3KxYyaoScMmzc9dYpaPSphXN4ie9nuA8KUpkk8AVkgyB3ZEw5eDVj",
  "key5": "5fK8tpNswDvMesrsy7dHHJBGfZr3PEEnVxjEihd69cV4cSVLnEoqzg2rf5quTPBSGFek1w9SXGFs46hLQzi6TeWw",
  "key6": "5gZqdaVpwd6zGjtQJnEMmfb8DDB4U2b2VJ46ew3FeGTGNCiBDoZg5kR8p1HPdoVjxf2rJPwhGT8oXi5Hc1GjttMx",
  "key7": "N7z9XF8uF9kK1P17brTg96J217EbNtFWhicfg5E64WbrvNHofFNXwGjJ6YVmKmV63WZDZDjwnmxsmefSxU1s8zy",
  "key8": "5qbp16wSF1CuNevVv6Nh68LEWnFJa56Ak2hvioCJdSDEVWsBjbtwu1sPb6cCRqD69S2AJQLfKrXornpxEkVVWvjr",
  "key9": "3tQ4C9E4a7uhZ44F7qQkRHxc8ukiRNAWpPjUZDfhB5czjUpuTR18yKW1NPsTaamXKtnVcJZV6FhPSjaym5neuA8j",
  "key10": "5TooTUvUJxzRNVqGPAVgVBtCyTdfoQMTCaKmxudGmrDp9KuUpy4m1GJC73o1yXsfjtoPRWwC6n7tGqCUYWY15utq",
  "key11": "34WKocMNENqo9niX6DkZiHbieHRmq6cSvqs7FCwP4Sm9uGhApNLPfwGN8mPacFnE1J4qN82aULURYatHfwUDCWK5",
  "key12": "2qSu1JcHjJoTFXJtMBf481peA6bNPSxM9YaHpnTRDPs1FVweA3wdAqe26CbFNYe2ztruQwd9ZkaitNggjFxtdvJm",
  "key13": "5RTzHf5XVKszGz6RXeK2XbJstZ3Mkn9kECpm2u3yKTMWkt1KGWr1jmxnG9mpw1qqxFRnv1YV6LUQvfMUfoNa48JF",
  "key14": "3eXX5YkVeWL76gcUEAxSwVriTUq4MzQhbY9zz2NSy5tEhCcdJj2ZddEEoXZYspPHYBLHHq1PrRUwf4CtpjnH21AH",
  "key15": "4kxdMnfCV2HPAyo2JZSNBnpvAexaNg2o6jdysH5p3dN4AUcp4QZ9vAEHckyhV3xXtZhLszz7sXTp2gSvLRcQyjpp",
  "key16": "LYc5wTyUwc5pWvfiXVEUzMUYaKAVBwtrK11d4D19uN6kk9LZLCRSQfzM2CFqcED6MjgzF2UafBvR8Tq5m9pg5y1",
  "key17": "65ri7bFCZMDuK56kSK7REHCav5FXhsRGcrVDDF2cLwLaxH3tUfvpzCeoQmvAdomc1hYLRPZD7KzErtoMqpGfS1gC",
  "key18": "5ZvcYHRiUoNf3gndCuMUmDsmheY2No3FzJEr9S54dEUkpdg78RSdRWD6z9yUqWmU1SgaNk7NdZCRm5zrvgJffa86",
  "key19": "94YwrFvTaK8oDtJvBmLpeEtaRscrMZaUzFyXJC2bHDBWqaVGgy8c9hriMHMtyMfbGUTMY1bzsKHcLXWkVBujRhF",
  "key20": "XGZALggtgyjAYEQ4SGyLomyHubcbZXY4Zm9chwCc1GYnpnaXhmRkrtv8pkP7n9tbbfnurMShE5bmrewvkp2vp1F",
  "key21": "34Eainc7nZJpr2TJoDmkWH4bZXmKHmv7D5QzimVN9m3fYGg5v88xPHxaEw4MrRTPGX1k2r16gtoscNiR76jm5nyH",
  "key22": "264wzKPZbrUQBSC9DXd8Xh1sBwsaa6FMi57dwowRnBLR2vpr6rHwiEDpjgiM1jxDdvoqLmQJVtdunvR1XqqBhr1E",
  "key23": "4gRqXCiatHJTfXCTLK3Ei5EKeafwUfSs3jcvtWLDKrSmaYs5wpVGxTHJ6FNZvh3T9CxQqWx6pPHTfvLsEGdNQBC5",
  "key24": "589R3iMBf8qcifoBLYFWKHByxThMAeWkwUWJPNKyJf4q4ZhTrbienD7Yt6DQuTdWD12niZajMZkiEPsnVqKhf5mV"
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
