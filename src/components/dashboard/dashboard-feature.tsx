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
    "3zComdDnLDgXaKjUSYwPNUeVpELYKpYAw9L7q8gauAZ6CkkkUFXAM2xY4HNCAGAem7c1viX52183cvn1U4s2xEPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314VV2c9S5ZT2QK2iC7yziCm7rqLeGoURpd5vCVncdWH67P1kPi6Nr8CVJNiCQAe1YHFmP6Hm9ZceAFMHkR5hVZz",
  "key1": "2Rv9AR7oYuEt5kgreZyKpD2cwn7B4QTLMzU7La5BYcXhNqGkTEPemDqDhqnP15B9WBz4cMEdJnZ4jx93UTVhktz1",
  "key2": "3Dhyo4DFVVNkXoFcKxX89eMec539mRzgLLP55UobfwdVpSqpDor98kre6mRAFmtifUF3494pfPm85ogC5HBKEtPh",
  "key3": "5agtzpUjx4wGrsJA6uTbAYcCiJd5ryeqEcnuQVJBygQW4Wy7Xf2JbYnQuLr4iQfmAGcnZNjm9qBMfPyoA3hnbUZk",
  "key4": "4BERyeLbs8Fh2njjpbnCRy16dG3RZSNgvp4MSbjsHxfi6KpukRqpP7aGFmQrtYJcE24CFDncQHySYZnDTXzmys4T",
  "key5": "2SLkobzFB4ZfQvXx8rrWVPZxaFs7P6LUFzEyt4AotmPw5apSz3dHzyNT1zH1GEWc4QGLPzLNqUYiQCUCirHgrEKE",
  "key6": "66XukVi8heJ2ot1ufeNeh2Cd3kPYdzD9sexnPDPuR4GtCnNsK13ryAejpe1D42VLqi8VNSneukKF1EhxhX41Lzdh",
  "key7": "3RzStyD2SN9tnkJ2eCPVQTHYXupw8EuBF8sihsKhzj8weWmvzLSXCQX3DN19Wzg474AZkLjQfBwHen4caCVUMDtG",
  "key8": "4yDEsz2GqhqUqTxH9LjtsM9eeXDrdCqUPKtYJVqBpyFNW16HY7pLBPB7WjVodHuhnhCiH7LupjGaUEsmBDzu39d4",
  "key9": "2HvXVBwXoBofQrr7RqPCRS9N8JA8wBdD1taBrDwiwi9QjBpSKdAoVoQDn9WuN3NuXm7dUaQ76ka6Mv35SGMLodq6",
  "key10": "i7gmcQ1UQAq5dKDEDoTLBhRYJScyC1bZ8tXYmhaNDHLSGMpfo2yNFbmewCXNMVqtXxJv5UdPmS2Pbk2G6zkg2Vj",
  "key11": "UTPbptDffMv5p5CbCx7QA8WNRUEqHpaUa66bbUBbGCy2fD8JwXw3opcqVAAy5YoTEzE4JBtNeuaStgaUuszrtQv",
  "key12": "3BgJJFGsdkqysqMEJzfAquQswZ9APKfGZL5W86LXymUuQmFTvCggWLcAzkrua6nGR6QQMJwBbj8x42cxDGqDverT",
  "key13": "5ngZbKEssg2CVJ4ZRttvuQ7RjXcCU6M2R9tS1JWGJ2zexo2vQQicfghTF2qgd6stxUecNAAz8vQwnn2LoW6bQyLQ",
  "key14": "435hYnbPixdALXun8zV58ah14sdS3zZ1fUD2sVZzA9ZRu78728xgUtofQNgEBVErB4LeczNaQiq8i13MVjXM3xu9",
  "key15": "NQqUMQDsZkmyHeiE2ZnrgdLhJoeB7CGVU1vrmsd13m2wDgPJaxRBFZYHRfQr8apPSU1jQdLVE1rTJyqWTcnzTsY",
  "key16": "4DRsWLrMADLyyqVqLjZnhb5CspM4wVMDUPmhor2z1mQb6AUdzZME9SGVkjVmFQ4EbxnZgha2kPktamhPyqEdTXLZ",
  "key17": "5BdpFCGxo7wLpxhyPMSdEjay7GNWqKHQcRTYdUJyHy6RYZRCLRZSKFQdeGRcjgFNmeRCZ4YUoBuX1qMnMCdDRXcZ",
  "key18": "4xeoWj9gY9tzNdKsLArCsoP7gvTPy2Dj9xmGb2VmbFVayoRd2KJRnq76Q8saT3XSWXzgFcX6XqHSN7VpqH5CaUBp",
  "key19": "UX6jP78qTFnCisvUEznteZzMR4GacKo7ueVomLEaj8yHvH6PBgbriASezCNwEkrubb71aM4LGAaeqd24kpk7fqH",
  "key20": "5TUiarsDDmoxkcbfHpBpdajmQoHECVEY3aemLbSs35yEWcfFn3zfdKE9foznem9sWHVYEP7iLDzyW9KTRD1CYrXB",
  "key21": "3D7HywH3v7Ao2MP2RonyAy4e3UT2NN69wi7AHxo9jqyuWaqpKEuQefSWAgJpgBhbcUYzehgAwRDp7rEbvUBrJ1KX",
  "key22": "4tkkKRsVtYHWnNx9DqycUrMvbyntXuZmSzvrUwX9ZezjtMFNxPSce595yh5T63wHtnC1dz5AUZVXni6fTfB7JC9h",
  "key23": "4pkuy61spkxfTPjdhjSRj7djJPCnrJfsKkcbfVRYCuhJQvmwxeD4NjCb9mGEkHCy3E5RfsFXM5gTuGvb7id39vMS",
  "key24": "56ZB44UxR6F5g2FZf4iBqWVb1V7M32NAfqTXHe7VNxd4v23hLmn1eMMvX3FHDiHZUdR5VqGkpJmiKMHzma7dMjrL",
  "key25": "3tWyc6dtjDmdtQJqnx9yL6M59g9LPCXowoNPnzvBWwwDrVQgjYgnTgkWQ5gZNR9RHEgU2dASwQEJa6ZkNvNRP9jj",
  "key26": "3tezjwqoDdNcJW61hfKAaRiAkRc4ffUVkoAa1vz2AAoB8mHWMKq1CWx9dVX8Yq6yQ1ZS5JCaHhYkCcm9KqpLaK6J",
  "key27": "4S6im55sztvdjaZTijz7WzSr2wKDAZNbUiBzAN9FCndbURDWSJBDSu9Uk9hasNY3YUN5orTKjimY1EMuyHo5sWKY"
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
