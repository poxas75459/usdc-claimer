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
    "4XM4u5RxYn8LdkhMcHoTM5k2RYTd25gr7Dxa6tB8D7p9d8dpaydn6j58NVuKYXJmaLqBj2Aa3bxAxy8UsXKfdYvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hP9B9afiAWv5eNfHZjUXCHS6CJkzDVdWnP31pSi3LHsg315UqgVu2fKMFKw7Fsrq7Zt8PVRB1ogcypQVv6apUHQ",
  "key1": "5HKGcj5KmV5RsU3JWQuvjj8aLEJKycmWJoUnZCcT7tV4dHUon16XmHLYBpUf4AVSduLwaGbBuTBgz71KjBBvDKdM",
  "key2": "5o7M1WVpqeCQybHR9b4MdeyB8kXHcKDrFgcMikcr33zzuN6PJ17kmQZ2XtxXZpxmXGpb5Gqf4yYbQfibYjnrRNvA",
  "key3": "3YDHDGypspztM3m658X8ZRbhBrbdR1BYadARREfzCSq82XJYTCNmFog4oas3ZNfZsQ5475yiC1oHJJNpqj415jzn",
  "key4": "2q2M1q9GDwvnpjNZU2Wjo9jYXcEwRoDRYhQrYqi2yQVyt8e14V6ZfLwo3c93N1wd4ARJcEpbhbqxpGree49ELZKD",
  "key5": "4sjKMg5ETf4zLivFVe8Ukp4QDStf5N794ALf3ghrQGHm5xR61CB8dvJJ6SFA6ZekgFLFPzMegMMF9ufs6tx7D6NU",
  "key6": "2bLEj6c8ap3SYgMUh9aPLgV8xhTv6LNb7a3R9JebmMM7tGUZ9E93sta4GKHZhUyRBFUKHJaNG9kGM2xzYveeWaxf",
  "key7": "5gAeRH5AteXq9XzDf9mqcqbFmgAaM8GgCLHSte54ingMTQ9Acq3Rdh8swaA9sq4RxfWXAzYjw8GtgHxqzyuGSioa",
  "key8": "28Q1NwQpjWEC6TkyuhqYwA2mxVhNZzqqUMvv5eJXSF2kXPKtPoc8HGGt8LWodSuvWDtcY689LK1p6qdvZrzsCLWT",
  "key9": "2Y614BSMSzeCY1Cx753yCcHPMUDkJaz4tmkG6QigNQ26sgWq36d12XxR7C35kqX4ZTH69aNW2GHm7Dq4DqpCtLAg",
  "key10": "eEpLUT6rDFyjMNPgmz55DYg5Q1VwWDBty1pGPxqC8zoLpiGoYNr9G4WZfMNJ1hYejRPGBo3FJJyWawxsL3LpzGz",
  "key11": "3MYhfXB5iA579Kjne4QnQ7iPmL6kedpBSHdBN44MQjcEoJFLyDr7vJETEr6ZdBUGNi45ysR8hN5J2gfr59mvdinf",
  "key12": "2X8idVSH2oXsPBrs42PMeAKvqHgFZjoxaj2enhnEoyMA3p7wYgR5vH2CkQ8E6HPZWnoq513JUgAGKfDM5vRJv1ez",
  "key13": "5w5MHobYeA8ZgFiKfeJQnXkjcdkAxdhGT8mzhdwNMAMcBkTCvjTNZbsM6aY8PfFvfkRsqAWNH92sfdnFGU3gBVEV",
  "key14": "4apsCLNcVnDZEVPkuWgCyzao9J9tjL5Kg9JTN4hRBUWjGC3jYeDx21iqTBLtb6m8htJgMGN3ds14PtVC3oT2YYCv",
  "key15": "3brhrYcXT7Wgpb1tcFwvpSUMKNwPMG8BRC4jRjKRe7bvrFxDHNFFLojgfQ8atfDfEqkKsBrFn9s6wxPZTwGRb6eX",
  "key16": "65US7CiwHq8cS1qo17VPAccD8qRiX9v7nhzkK4vAQfT27ze1ZopsiCm5juznAEYm9ZtUj7UQkhG3mvJqw8NgDcTV",
  "key17": "3XedP22ngoa64NWE6j2uFLkfuATKaPkZDYX47okgFt8jvv8C8ZnGgzhNDKtuWXDzR5q4LzkXZDXmcs6nVgDEmPv6",
  "key18": "5ZU3b1p8wy98C3XdPNp6Gj39mAmKZJ4z7rrRQhaeAa2JaM9fpfDjZsxLrrSJussE54M4Nr2if4yeva5FjA9oqGGY",
  "key19": "2GixpGkiDCMrk5vnxyTYDikLvdGRbyM6UeeP5a4byrZoNpQF5QN5NgEHyNjTV7Kj8nNiFQY6qyKaU3LXsTgtkW3C",
  "key20": "VdUm2PbM3PuEdHd2kJHYK3EmkauqrG4C8kZAzEGWJPVgfC9iaHQUVYhapwzgzaQHXusWFFHCQW1PsqpqZpkBtAj",
  "key21": "3UxvDA86uRPYKPSZbTPFanAQb9nZDNYmQTJWRMzEyygYZHMeonphGJjHGCQX1P3SdaYdueRvfawJwkFM8G6qZvBM",
  "key22": "2W5vFFRZ84Qbq19jSAytazsJyt57nDe3q9Kk6X8SusmPDXATmH5bZ2yjgSw95nmpZy2BRkpC8WicmHmwTsqEFHMn",
  "key23": "3JioAeU7Rgg6AJMb8SFhrHFPBEQ1ErSfSY7Ld9iA9aCQBAu2PPJVzUXoPM1yspS44qhjFPt48rjEVTyQRtT6yYui",
  "key24": "3BsnxQxqPcq8hobGTC6rHU9NNR3mMba7hNJ66sRDfTj6PuupxTjghowP2YF9SPCHspFBnJ2UKtwUx4Xc24vrV93i"
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
