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
    "4ismg3JF1Q7aobakL9yNMai6qpWaHJ2tdC8b4x1zqhzXxhcaceEP2ZCL5si4w6EThynxWLJBWnQawDcJBEbKNgHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nDckBnEXWWRVUTZMTyysH3jqim21gh5R5WmyjWEa4xXwcFHmBR9NxKn1q4sjJg3t4Hn1aT6ZXiuJ5HYQcrb1LBz",
  "key1": "3v3u9RgJE8Uy5SqTYiXg3zFGBq6ZzUnroPFhxd2imPmCqXtSZ64XckFCVuuWE72UTG5teMDPi5suJqHH8CqNujzU",
  "key2": "5eMyWwCkBmXr46R5iJ3gPtiW2tfXo5HXwL7oUDEb4rEy8V6jvCydSWv63gyAW1vCSXWapoB78PKqaNHKFHJwPhkg",
  "key3": "2zJG28TEhpVWLQRQpASPLvdfVRWfhzhTsWZjDVgat7bvdkhQJWQjtfQPJZGEHLQXmWGCMsYhM5U2JjbhTpwX7Sdm",
  "key4": "5J9fPVHoxomQUDjgwLJwe4mmqRCyaDhu6DcX3wGa9vApUVBiCdgkLUz2sBNBx9FkSZJB8g4rAXzHxphREMGvsyFT",
  "key5": "2FtVmJXMRE5M5AFRzWEofHwZka7YZeB275s7ccw3qgHQMxN9mhfb13EAmG4fq91Ff86LvTFiqxNi4Uzbuhhm8mz7",
  "key6": "3mFpKW4BKyVnxfbEbNmFU98ygMdf5dcfm9J6pKRjh7RRVSkSDdPxvTC3KpfYmR9W4afKntaAXv26UFKTYp9mQc7k",
  "key7": "336NcqkD5dJfzTRDkm46vAKCZtZSxrtgEivGcB7XWB7HT3XwhNSpS6yaaadSF2Vp9hziHFm1w6scT8aJYBnq4wYj",
  "key8": "2av1iwBjkodLmG7KsRW2ZKC7XXTSvKH3Vby7r4XXsknftWZp9RnNjE2axGpPddmwm9mtcUfLHUdYq8HVvzCgFJLW",
  "key9": "3soC8FLSUFCfeBe2EmLTbubEvi8GYsjJGihrnTWWtECM1K5aSeLojTbbZaVmVNd5QAi8jXnjYExK7y7HWDCCSMKk",
  "key10": "5qH6zxTB7WZTYVd8q7qDMYKzFEmN3ix8zzmknDT96H9PkJM1njrBmXMatpZXBMnL3cH4Y3g9Mo27PdpuMnmb7WMD",
  "key11": "TkvYGVcVHQuxyi76HSw2XRgt43axynHaqFKEBorHzJSs5sCV1G4Tg2pK8WGNyCi4A2QbANxvusP113mkvRpMJKm",
  "key12": "4gGYmSUbsnMkAFPuTijWd7z9HBJF2VdKte7bGJJqjJL7m95H3wZMStyk3daWaSSe89hRMvgot7qN5mW81HxN5JDJ",
  "key13": "4iBbpwZdVveiPM96RpFgtq1PMzydrW3mFt9bMuHt5aJkm5SBEHLHYsUYFJsrEWpXnHZgKdvP32j6PqJfXKfbUjAB",
  "key14": "RT9bcZBbWyyftTmjSVdqo8TdntEuv8ETpjH9eogcCuTZC4k4AiTGPcy4VQcUC2JVLvePQE3WRowTCYhFcRkA8wr",
  "key15": "DacGaUs2UxyhUR2YawSwEgj87ZsY3NHSLvMNzZbkEPjbshiFU2ycABPHp6UgRy58TsKi39EMTMpkL4irJRsVBJJ",
  "key16": "5YTbVbeYkNpXNowVfHHdNCLf7mEKzDVs8Uv3TbUKvxWpwGZNWbhchD3ss4wuznMsxx1szvHjQG9iwHePawB8a2bt",
  "key17": "4fFpHbJUkCpp4hs3yh4arocb56YmsPB7eJdbL2x4RKUnW11C2U6H5ciLUvJNzdt81Gbgc4JrvsW2AfKtvUBpgcav",
  "key18": "FG85JPECBXq531jvWkCt42no7sV3AbmTgAtWZKgacjddsUZFRvFCQncJhUkuHv3Hm2b4vhapYuMTCgdrsYxWap2",
  "key19": "2bAD6xaeP9hGtBUCmEugMsyjbQ8uE4q9QizVQ7cuTZYkMhtZHdHyWycae82JPJSXWVerKXiScSuE5o3c8iAHCjyt",
  "key20": "62e5KDyVzvd91tgwHjqz2VKJ3w2ii4T3PiKB18KEm28SYiBivL8wta4LcR9ToMiXDDML8bf4drvwD5oT4hbMKupa",
  "key21": "d55dkUbnvz5NcqEomrU6EPqFBCod5iSUPLQBDVLt1QcoDqHzRC5QZpo4WjsHmvoQ3EPBefnjxyLkSewQJPdbhRz",
  "key22": "FpigRKrFbGHCBxcz2J4mRVPcqsYK5Q7CqTPtAVrhJTJDhHe8TdbWJEDa9FNHABqTBjo6f2HkqiXhhPG7fqY63eE",
  "key23": "5gmMVYYim6ZFvf1NnKBQnqyV4UthebUN66wyoYGNuJM1RRxkWG5RaacpMWnxHC5LsDEDGpY38a5EzVHfGcf9Y7f2",
  "key24": "3U3JxqYVBoraN9DoB5TZHpsNAGghPKJ1FnPf2C5d7dsYK5Qmk72pcqnHBr2kyUpSrwN2QEd2oFyv1C3LDKphr8xo",
  "key25": "SrvtJ4w8B59rw5gX8SRLymQP3H5L9q6z9Y7TgiWTJjipMgLYjhnLjGMKFH4mXVVU4Q7it2ShKKkegNvuNWypUqg",
  "key26": "4SJGzYbbTjjq4YqzQzBSyWRvzjR5dHjCfp9pueRooabeBAYpY2VKsejNR1HW8MTHhcF7vprch7XUg9nocqCrEMrz",
  "key27": "66CpWwqVZ4aCb14waNYbT8b4s4NwWMsvrvxHN8xMtp1sjhULawsgmHW32EmF3VRbk4YN1rjaNvchTv4vM9t6VMXG",
  "key28": "25sFwkQwiSQNUzgBctkpV7heTpisLCrQe7Jbv1mxjio1DfQPW9u83d7CZVeCvdtVGbtXZwVGGcXjeeMPMNaxkDPs",
  "key29": "5ynMrnrkaELYFFxM6AGkSvULkhcTu1pa1vSyzfiLxr6o95tcf3yonF6U9u3MXLQdUHH5DrBRUQP1TQqRgmj8Z583",
  "key30": "2EAXG2qTJZpG9eTHreUJEa5NATEbFYsbw8HxrQQBGxKWiGhAvYae7oXUyur1xGYnrGCGLecP3B34gRfHuCj9G43x",
  "key31": "3zo1AC8ncPxmNsHM9hkMboFqbzv2mTPTTmvWxufFtmsQsKhWZVE23ENsJFZ9bzKB62iZAcQpYZXzRb45JZDMFhHW",
  "key32": "3FKGEgQLqC2y4isEGPYWK4B7tju3iYWHxr59QbdnpQ9w6cMrNnYSJyxEBXZyNuAmLwmjcEt7kerkAxTbE9v7Efte",
  "key33": "4mhXcgjTgGiryJJpDoZb3je2fedNKgSjLBjFBFVtHLCpRvXnFu4ajurCE8miSAEE3TfakpBpXzc22sS7d3d5j9Ur"
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
