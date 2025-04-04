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
    "3pVinVdGy5HMA5fiC85iJVmwU6Wok48HS9UYExZzAxSuL87z1LqERg3YCZHsLGeQ9kTEFZwf5aT5aMYqY2nRW4g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1UDCCoP9oXDRC1okx5wuko5jQXRuCzbVkkvTAAFFBqyxdYPbfTCNxPzsVLdub7NpYSiNQiG29TU1ztMcvAub9q",
  "key1": "5iqFru6i1YfqDBJtzJ8PdMmYR7dtCu2BFedicjnQ1kXNWo49JK5md3TiU4AiQfUeDSPah5UD3BM6dR5PAaGFPVN9",
  "key2": "3ER5qaQXoJgUSY9f5nsTNWWfkqWboWJQvDo6m7qN7nCLe9bGDensdDT82RKbU5sCjRxayZyVT7rhxva2WDKcjebA",
  "key3": "5UeAdkz2JTCBxVbsA1F6q4eNxHoSSL55vvPnWBp2XBx7Ytg5Py5sTEnV3sa1Kic1TrqDyGDeXXWeqgao1krR5pEq",
  "key4": "3s13BMpnGdy6QCRuEqYL3rWtSiRwkxC2o2jQQo2D4AcdQJzSoBFMpB3XSfNNc3j1cWbyusoGYmRuBvgVXYmkScsi",
  "key5": "5fGU49tn9GtVNQ1nndWtdWvy3REiZxruL87wD56eE1b1KoZEMQ7K52ZrcBM61ZGLh8WenYt7YANtkkYBUaVQnDGS",
  "key6": "557EymXSkRa2pNYNnDqTDjzKBomNd5PCh1ZJxR3bGYWD6rCZHjcEaZDFQpYUTJoQ2bCVxhn5yqBS6LxhwUXA25Ps",
  "key7": "4bBUoFH72wyscFaiEYJv4HN4Tx9XixvtM1ojb5xMNYBMqzX8P3AEQi2DQxmVFK5eq4xcAbrhDYsPoC3pF6hj3111",
  "key8": "64rD5GbQhXMKmRR9zK9oUgqGcRFujvVqzAUbRZ88ZHogf1mUwzwCSFsjJSzK9bJ1TNxd7DmAW2KSKCYM7DPYdsjs",
  "key9": "2GLfTK7w8MQVHhTWAAozjwAFe13FZ8UJB8BZ9v1XhPiNE1u4ccc4y59PjKKcQVT3dWE1TFBSC6gSvrg1LkSH7m6V",
  "key10": "5fwWMCGZGt6eDVU4Q9dnLf7cegTmvhhenRd1Mr4S6NbMsD6FwsedSjhMp45yrLnqRC7kd8Bec11kJjkgeSWpYDe",
  "key11": "2vPhDoPEmpkvZ4LxNevpquybNhFBPR7mmzSHrkaE84DfBLvj6m9ybW4QVEc6G22jehCqWXBNZwURuRx7jhZ6v8fR",
  "key12": "sJJsv5XZNxoKNpbFaGpyhb1A8ucqLFXjGFzBScmMaCzPE9vntxK9qDa62W1qZcBCzoYJj6cBSu66rgqVvjVL8DA",
  "key13": "Awtt1YpAFvdNd6VvHGF8bbQZu2ybYBtVTieVf6GcC2GLgej2QEMPz1nt3mDX3DdPg7MtTAuGbkBtYmDECuNL9Jb",
  "key14": "5JxSkBT7k2mksiLzG5QmZF5hkjTpZmcB531DDFNW82Lu5GsV96j7LWTi2eyJ95wLQSc6L717qB12ULcsDVq2qZHD",
  "key15": "32YY4aJ5bn13sCpscKD5eHkvrSGhzwwMdZN7YXh1AsoikdSjaePdumFt3AhWWXboU11bDjFv5LaUjzz8GcaU1MZf",
  "key16": "3w21Bi6y6ot7W4BtmnKQSuHHSGsgAUJiDoRAvh1xN5VxyiRdEbNKGsjFGpr83vkmKEFxJPiZjN3nr65HKDovZtBQ",
  "key17": "3rPHUT8PCLLT8oC4xqvfSB7GMWdqduGMyW8Jjs2nJVJiyAvc3WZtMB5MCUBjtPU3ctodGd3run5xcrgBfrZVHv2o",
  "key18": "xustpTdXFLMDsf8aWmKkLun9rKS5o6hXFK7Z7CPYudGdKYZb5RAWPqZRiGa95qXvEqFRqbXBSUTKqgbATv2PuqF",
  "key19": "4iqJEYAs7Ue5bjLqU5Rvejqc1cjPy421RjrXWyv7w33Yc5dhVRsDsKfoVJBx7PrNwHftDTfZznGUmqjd33AdfqQS",
  "key20": "4drfKnz3Hx3NBrrqLAAQisCcoLpiMMZcv2unu5YwTm9BCEKysu36t9ASyCgWz3RzyNdHVyyMQjQS48cAdxgQibJ7",
  "key21": "2Kcu7VNBawxk9WeTvEvmbD6tedaX2HrFhY9PWuHgitRJpx3binvLF3N2dJbbV9eiMDa3gwSxmSRAAorWtrAXSfyb",
  "key22": "2sTZ5bHABzM7Quip6YM1YJ23aA2aMAtKrS3WgrmGLSDYGSNDzX1PctLpovBVUhyxpezeuwBf8zTH6vgSAew7imif",
  "key23": "5V5miMqGZC36MAGNtqQToRdBQjFfSmLrAK82k2Ka7WEahNSb2cAujobzXN7RSwD7tgqmSLYSFA3dRrp4JZZ3n8nh",
  "key24": "2ooBdV1CKyS4NEyu6FARBYkk3WYdwzVZ3E5PWdHPjNUHXZAKMq4oJzu4NeznX7w6sbfPW9cJ4kKPa6VvhoMRorpm",
  "key25": "2ba5HVh5pqrGiPusp7ijioTtGBfukMmGpj3EzYu3821UCs1gc1DoJ7aM2RdSNFa2CPVv9dyqBoAC3V7rFgyMWiYQ",
  "key26": "Na9SrghxpC59wCTq5oLGd7U7Y8SvVRVbhGGnf1tgvc8f1c8qZr3A49Y2hAhyoBuB1ZwEmrP2mxqWLyND4HRNB5C",
  "key27": "zZPw7g4waCFCXB1iQRKARWkgXpmgVTXenBVSHVpK1kP6RgE5hWxgYLuESbwcGpF9PAFz2jQa2YV8ofdAvHhvjp1",
  "key28": "TWuQwa4v8R9pqpq8f9xSBu9ux2G72jkY334sci4ZnUzfUyrPtGWsbRQ7Cu2W1MBmhjPskhcGTWeAwVoGLfysZYB",
  "key29": "4Mbs6WzxUSNs7g3h9Dq5u613RLrjproa3Pu8Xh1nFE1yMaiZ6vgEW8EHyaZQxyhPBf7k3D9qiTyuZCLwzPacfHd6",
  "key30": "2gxik215HkCKPzGJtuzTNLZJ8bLST6bFKEVk1rqyHtPyQJnStFh9oyhKXRSna4MYg3GSFqB4ADUDZYWTBLXBSEwa",
  "key31": "4yYvuTBgypNAiR538ox3FaxvPovJfZHpJDNuJ4ugnA6HGsYwBfdn7e4WqXrMPMgch3Me2sey15Dpn2CkH7RxfckY",
  "key32": "5naRsrNRBdDgH4WfUeiaaDE8g25iomvEvNFavwgSWZhcufioQ8nmV6QBEmP6eFv5e5JJ57DPuhkGaFVcPSdQis76",
  "key33": "3Gb6UUEmEcyvKQatCJm55Bd2x3BXtLhTXdjLrxWWxkdiUJDcxTbxFaugYsT9thdVfFGx7foQX3RvBNzGshmfDgdB",
  "key34": "HxcLkG1DfaMa963fXKnQ5N7tkCBRifoBkBUnNiXfRBD6rekd13wjwfFYToqVWikDbEd411QsXb7joTUWt1R6X3G",
  "key35": "5NjL88oJtq4XhqLR3zWmaURajvz87JvfFsFpqQpGdMsD15iwPJVmBiUck5MakxudWr1n2wz39sC1XXoomz2h7uJD",
  "key36": "2JVFn6xmunaUeQ2S3wnZuGe6VVbqVFcCXR6cEKUar5pdRC7x8o3QLbhb2RJ6ns5GXusn6aeVQmwtNX5UJbC9RtNi",
  "key37": "2KmHsb1GpaU37fyamBXmbQT4AiXRPZWCZsYHcYF8A6oRGwTM1rwTZkfK4g6KsDKxUEUU9Rz9dHY8n63uXbAnXVuC",
  "key38": "62Vx48Uzu9MDFZsL2U2CHeCNrSm9u7XTJm25Hb4UnnifvTDWPmBpFJk1YZLUwkWPRBQY6aXCRRpbz5fCyMqZWdfP",
  "key39": "2A5nd6hJo9p2cc3TSjNpcE9FGjQ8A6REBVWPrH9zKSz3km3216BgDySqbzeBixDru8YuJtPytrXBSqLdw45K5gKq",
  "key40": "AnqEiAAptnXGXpRBo7ui5KuFYUX6891PexupUJYWy3ouUGzhhxgHicN6Zi3R9UV6RbV7NpnE3BGiyH8Ez8HkSNw",
  "key41": "WocGhhH8dMHraj76vAB2UsLjGJRQJwu1L2t46qp6jhK6dQontPdhgsoE2cqTY7XutdFrShsc7H6yjXNpDUmdZ8e",
  "key42": "5vDN8Uz2zhdLebS6KSdPVZcXstg1sCZTwzXaSEA2SWrUDn4XKCE9RPpYbd2cNphnSYrXdKsK7RtX3vzQGkWq8ugr"
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
