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
    "2v5ycCj8Riu5nd5r92xCL4jcch9Jq45S1Q3VEY1k3RayHP9rmNRMcBVpRQv4RTw7BnfaNUdqJdc8JqtdTgoxDXTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYeDGNMJkRmWisDxPfBvUnvf7qcqLz61YSZDksiKTAAsDfwtcNxVBycuKzMoUyZcXwpNrnVqHJgi95pdsm6T2E9",
  "key1": "37EDggxnhRAVuDwqQp8SHbpAfPC1GfP7PU2uxKhSDMw9J8GyTjRLKqCtifVFmFbN4VfxQpp6Gwnm4tKq8nksVtb5",
  "key2": "4WzNrHooTSi5WEXbyorXLv7HGscbavwU78QwLzc8Typ6S4eM4S7r3ce2XNgcgQRJUUFN9qPeNMTRkt6o3epqy76",
  "key3": "239SRmviccvpFtKvCTX9kWDLHJpUv4aQSqWccPmqGjmzLP1c63G32KfNBKjWEoMfms6yPVMSSnpU5RxkrZzEjMvD",
  "key4": "4aEFGCXWrgdBh5vwuMmFRLJpSCh54XVmpmC5cJY4RjWtxEuov15N8AYRPgNFRLmEpFAKEp9KRBW6kdD9FuAQmXL3",
  "key5": "3zxHgXnHrPMbKo7QHC2eTFnkEA97Q6nNYoEiqx4Zqo5RMg3yoQ7ELRFRkdSNjVzDt63RM4xcdDNeSPCg3D1BGQTp",
  "key6": "2Fk4YjvnAPf52ypmQh398CQF4B41R3qVW2ZDeWdbRumsH1QA3eTwWgQ53PxEJkYwRVGyYCSiYHpiCUgoFwwWh39A",
  "key7": "22A623ciAJPvjdEwNxPqvXJ5r4XzJUpQ3t82rmSd4y2umYVXaK8puHCpNf9Jj6xKdZ2m9NpeooeRgBm8kSwLpe6q",
  "key8": "3KPbXBBrwyWVyCv31KiwnYM816TyZHuou6XX6RDcmjPco7QE1pbrNZUwknk8Yw5KfW7pLSFqtygfovg5nXtBWFPC",
  "key9": "573RbmRcbLMULAHVhc8MYkavLiSrTBmfvn7Z5WFPpXPAH5WR5s3A6Yz52A8Bbsrrscgq4ToswxwjgfvFCM8462c8",
  "key10": "3Tei7P5C9JfUTEfdRUEKQ2PFiQxtqokQknYLQAnj1ayerQqMvHbCfwoCknQWTEbQDYnX4ti1L5vtTng9CSsvtdeM",
  "key11": "2ZS7RiggaKTZJ7yfvgqe4gTXMShB2JEe6PmNbfLByMm9NTGDWjAY7hJxkfiqBELaE5WdDnc7JkjLzSKR2jCSrc4v",
  "key12": "4E1RgiFrUJYKKDEE3kV54ErividvjoVm1fC3SUqsPdYXQcu9qH9h9D8gkc9Fe7SdVmXCPxoPRr5WpCgr5ettbSF7",
  "key13": "383TypiyxzYFq2eGSYKW22oKvvW4WCP65PkjkSUm3RZJjLEVLnBW5R3DH8XahdwxW7JgjrfRqBG1p4CHphF8DFAw",
  "key14": "CV2xNopXQeVmANY2XUNnyTMqzuCHqPn1nVKHcAnDm5d5DQVXXtLLdRQQJsCZV2WfQMXv49G6WD5W4WanY3b5H82",
  "key15": "3TqQABk7rmchn8u69dnt4DndCQnDZXCtaQfmJF1zrERupQreDi3GUejiQvAAhKDCquYg6N8bLh6F4vpXS572gLkr",
  "key16": "PPRZmBfib7F7RJGpB71uzYnZjaSobcp3tG1QWiQy8gJHjU6vxDBzrjdt4jCKokdk4ceNipKFPEBvnvxXtkRTwyW",
  "key17": "2unZTCHnFCqfAvMF5hUA6yXxgEeNpz5Wqyr5sFk1vV3EMeAdhgRX2rvZGeGa5Qk3awsWfQmC1WyhDxodPLxjMvxD",
  "key18": "K5baVYaBKUTyoJvXZbY6wfe4rHwwGcKYUDya8mU2WrdVYmr5YKr7ci1SpFF2T6F57CjczW9ttJyB1bqF24vTg9o",
  "key19": "3WrphLGpj26qUK6gGDPTktBuGgqQeDNmeGvVAxnJa913MstrjTZqFm8epQSPJYvsaWwP5zqKsacTLxFfQs8Bs9zX",
  "key20": "Zs9MnbqdSLhrjTqDb2Zi2PVuXiV9e8hzebA4RdR3movnSm1HdNtsF49oo7NSdX89e3NrF2RfRkYXFN2R35x3Tdn",
  "key21": "4psraXJ8Tgu3yDAvNPiandpsy3WoRFJGMeke2bA2oNAoj1EMEzsRyYEMK9hzWXZULhhbFRD2sMiLj1QzLkcER1ST",
  "key22": "5hqVz5tKwFyK8LndEkxM8HthWA3r33HMJyfzn8MnFq1Yti4vvJZe2znXJtjZgtfziTyHZSeyULeYCPpR2aqfCkYY",
  "key23": "EnwtzayqphatnWkZzKvkCoLeGNo1L5GfzPtiTZQwXjpUu6mSQL96hAhmCg18DuzHZmp5Z1Fs9EFszFZBukQNrXu",
  "key24": "58FcN1N7kuXSvDngk3YWs8EXH9tFFmsxthLJ9H92xAa8eG55JVn7AVPEwi3fif4LixZux85UxYLwNTuv4UHkWiU8",
  "key25": "53tcnwAYQRhv3Z43PJS1Dfu9bjgnzRxY5Tf2LfdyRxJwidJwzre7QDQLDwAqciMUucAjJSsgvb9VBeL429vtim9v",
  "key26": "4EePzdeUSLvkNfy7fmtq2BpktZVUpEFbsHgTUv6v3Q5ya2uijah72WttYeFgRh9jHNEroALeBo5uA9Wqy3NTKVsj",
  "key27": "4ENT7kGqoi4hn8GC5yrMCog843spQNGEa1hKCjVgKc7ZZKjX3swycKhsZwDN6wkD62hwue1JRATxnxKnkJ1USnKB",
  "key28": "2q18sNc7ekpYL5drhpw3DrXZKSAAbsKdfQMEZP6dTZYAdzq7kxGYjnChQb1mJNNC7cisnTmj55DtY9uHioauqNsT",
  "key29": "5KSP67TGcnpsfLVVxrfCmKb2JB3pDQGq51G6HcsBVDJxvfecRLfFp9hXyjtMoUAN7qZtGvF4pujfVJkMxxHYzwiT",
  "key30": "5R9wPC3cs4N4598UGvaMGXCiRcuordquFCknmw7gWbenaGPNdfgSUTEtyBWvZy6GHyE7LYHbaJZH45h3QnzTw9jP",
  "key31": "264YDa95CYxEnKSsqhRX9iLiRkXeZtqPpxd4MwyNzEktx42wj7PBQkFPahrdu9t28gnPUVH4u16oSEzVbSE3JQtt",
  "key32": "QWEbRSyHCBxbtPsoD1nqBgBEYPNuPqVDH4ucCibytuGfBvC79Bc7vU4NZLdzEzTJ5wCpyaf8tLt1m61he8c9sw3",
  "key33": "nt1jf8pAcxYYeeHXqfibETiUZE2EWCHHN3S3HP5hz7en12hBjXGmgKYkVSoKaAvpV5Pq1ut1BWkEZGFCTkFubPo",
  "key34": "49z4tjUbjTNoKGMFYU7NghW1meURnRMNT4Jk9URL8vqCiN9H29oT78dmFekh7HRv6jZD7D9i9oYZetSTXwciBhyG",
  "key35": "2AyqqSQqhiMTtq1iTnirvSf7NJZ4TjNAae3UP1dUpiPoDU8HJMcVXmoVHisjFdn28JVbnjYUk494p3dENkm47L8u",
  "key36": "2Mksho4YUPL8L5ZpY94vB8z5YoEeMy51yzKzDsRgerEC44SDVGkACSaiSYg5kLZKvJqNNkpvBSYonce84PPYHmBo",
  "key37": "4gGEWR3V2J4N8hbKW3t2Mc3zNq896jyxj7txpsZz1enYTkwv6zYiXhpqayAJjZN1TvivPCm3r3h6J6rs3cjnskAe",
  "key38": "4FaD6YVLxF5j5TKLo4roeGH14hbh9MpJXfnu3uoAEQZitizw2tX1ZYEVayUKrnu3k8o3TRW3NpG5kehLQJ4a3XMQ",
  "key39": "tykTZnKyAhA92TQe66VScfUdRzw4T5XbJgtMTWmZZxps3NU7zAf7WkCV1wiNgmHQXrL4MjjNXKqs4y5CKHN4ney"
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
