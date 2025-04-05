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
    "2D7jJ6WuyKeByAeZ4CWnXbDbWS1AEYrb53946FahxdmdSp3nsSL48pZXAUMQWRkPqTa7X4Pab3ryCP1K6bUDhZcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waqyEQskc7ehgCQMpACNTwEQCfT41KMPBQzDJC3pSZGQh8JRUfiLt6StS5ZCqJa49YGcjZhxQCyc23ZJ84v8gbf",
  "key1": "2j6iuhgHVDe5p5nMhkpMEPigiTNKSFBzdndcTj6tcRs9Bp2JBUEMQAsfL38VoE8iPwudDg845hrTLSVr1fHf2AHv",
  "key2": "5Jgen59SGMjoA9v3iBX76V1c8ebcNBLuJvj63ZEgfpGgFQfMHZ8tNCp7vSDGPYAPEqSYLZc3BDzTdiYv16ET65yw",
  "key3": "61uNCsCDLwy2eg4CaitJhtfh29fQL1hWe4k6xzJobUA9Qr7KDQmtHZfGLj8rD6Td37ixbD3REW2bhn2MbEmjrnVH",
  "key4": "63HH2iyykMm6cwwMWZpwp5ZxVRf9boAdPTMc51LeVXBS5SvJ72gMP7qxB4idjwbcicG8TmqN2xKWFTrZapDWUwye",
  "key5": "28Mo2WsXTQj935FqpvVVnSwhaM9nGYP8YjvVCKT3CVtyyAMUnDCUX88kZCcdeFWG9PxioUpSQgTsanaCTNVtYgGY",
  "key6": "4fZ9v4HjgxTFD4Qk5YxbAJWYafSfCkZBQsU7oJyeT4ZRAMVfmVfUUkRfYEoiWtxisLnWka52fEK1jfbFb1e5Euwu",
  "key7": "5Ahf2TWK3ruS6FVkHzcGiugeyM6AACNkLNS5oqLdECdt6teXCCT9dAUub8FgjfWVZRGKGHqXPJbCDz9VTLvn5jTY",
  "key8": "EtxzfWnm6zXen6Jt6DEsEaWAQsCDa2TGTaob92NAM8HLvZjntW3FT5LoP2csECHcGyUPapZHKSMVsY4uvKc7R8d",
  "key9": "5QemiEMwNEdQpCKKYd7uPYP2hdWZH1kHJLFsMogqjNtrGivsVjB3gcJLzSmD6mycVVxjmwRWC5QGRhS32goXJ1Jk",
  "key10": "tsb4YF71pLq6Y3G7tAh6t6i8wnzMaKxcJDprvnanobaYDjnsL75Mdu3ZVparcya8xZLmVTYYPxDZoJAfro36auk",
  "key11": "5ThZKuEiMZX5Gfsb1qCHepk5TafNe2UjfmPceDa4JJ8Nyf9g952ZX8JFiqfK5Li1zkyMYYfDkbMw2P95M79JSirz",
  "key12": "tEJiQUb7hwMGDWmZ8wqHu7aazZhT6HakM2KtVccrRMRu1a848SWtnctjFoKcfUaZ4ocNWHgsX5eonS2ZdYfCX5Z",
  "key13": "57iwaeE5oBHZnXoDVy2Ek7hGdRxMxjU6KMbShMXDBw1gmiK4RZ8RVbds92xsJVvMVQsZ89Daq6nicCTBVdgmfVbd",
  "key14": "3kpv9GxU3dMVfKkiHRCm1rLAwiX1eqNnFmtKpBY15YwHNvacXMbM8WFAdXGkpai1KKU1qtnPgzffqEtyFfAArVf3",
  "key15": "2RQTwoBsGyXkef7MNjkvS4Ki5nKQoeSdDyU2DaKfwSShC68eXnuEJpYo2D9wp28xKe5SLi3kUZqUFumkMyJGNbZA",
  "key16": "4MxGBPpUykBiriMhyXm5MAK9m4zZTTS3ARhfyMfsHHLt6qBW45Pc8NhtGpHbDd6tJGVVwrpeDrnyeFVBuZKeToQ6",
  "key17": "3T9dvSxLFPp2UKDn3HEMZnbUCi3X5m3sDeJjZcgZQpMRgePKCXexkCbYYYQBqHFkH4LzGLXDVbJkp8bqcZu1Fo1x",
  "key18": "3dajfBtHpSWUBPYgKvy2K2LSZsuMuwRAvwNDQYz5dPQtYQZKkCRxEhNuvznfCJPQzdFWBtFwrKUXCTAuyH4NKsJ",
  "key19": "5EhobxeVyF8Sn5rNsZbTbLPJPEmfHYNH93aHEkZGy26YhLbGdC5V7QfDAHDBj4ccyBhtw4ZMWFJDMyXbHPemRBv6",
  "key20": "2F59J8GreyPBSjDXn1Zc6feBtEnG3eTBmip3iAuYq8bgNMqg3XEFthqcycSoKvtrApBJYdCJt3j63hS1Qzx9azb7",
  "key21": "4c3afEZzcmyyE6QL1JFP5t6rk4YHAuyQaBWcTTyGjWGgyYnHaFVvQE47r8yeLe2KvLt3n6hmANvoXNfentnRdRPt",
  "key22": "4Eb1YCob4GLDgB4sk3Pu5KzxncRauNgkqLbkTRWhKaKGHhfxWpVcLMC88JY2rAdGHq6ZpKX3WzM9vRngbR1iAF1",
  "key23": "qGCXMECkxMCDWhQjVQdW2KhKwiJzqGaYpLPra4ghQAudQbxF1gXGnG6dJ48me1q2i6sa9XnfhDkvqKoYXFwYi8E",
  "key24": "4CDmzvt3LSWkkXTvkU6uN9pdxBiEfdSSdXi7iRivozK5MmpFKisgcCZCqAQE6jv6Txnw4kVzdUxXqWVVUBnRX9Xk",
  "key25": "tCjhx8AEM4Jjm9X5Ex8tRVk9u2Ux7ZcCipybNmJKNbwMAZsfNLV4VNLeqg7C4er3EnV3XZV8u6nChUjrWHnNSbu",
  "key26": "597cRiQX1CEwWaxuop9T7Q8cmF1XBAa1WM81iHkbD67jasAHdkMu9U7igjs2M86FtqD2SjPxDFjridmjfqvmv3Ba",
  "key27": "5Y2EWgt8ageApNDHykujwsKknoe1EMhu8wnbbmCvBUnoxfWNkYyBCZK7yBNBreD71jmBryioFZQXRJk9RdWgd9HR",
  "key28": "5gvooJ8hcnnak82RVD3RFNkqrf9tr5Au9yz8n2oBwoxAPjAQPL2xBoqGrdVzdRVa78yRvqZgzHHXzXxNUpz8SKYS",
  "key29": "5T3wHdLd9FYksMNQwchgcV1YSWoChdd3HyWxv41jZU5esV3La9qhdjTE9YcBBr536i1unE9hCs63FYC5Qkp9unx",
  "key30": "41gQtoTC9SHyoFat2YwoMTL4qcC2q9VjyQH4eR4RshNbJdKEnG4E3QvN5VYVnr5JtwpRL8VRCDbdcdeYW9GRXmEm"
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
