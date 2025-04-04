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
    "54j6EcpHJ7YvB87j1V2JJMouppoMX6L6VMyPA4T3NaUiCJB3yAt56Dde9gRPnqjTuuDymABNwQozXNhWzJHptmQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wF4KkWdShHDkwKaRV3xGjqrQj4DbNwFaR4d6zVRKXpBSW47rJ3FXAdeMiEizgxcZGbkto3gp9bgZXrfJUn5MRW2",
  "key1": "4VvmVzM8hiGuntYXNZLbTmvfdwNwb2AgtF31HQRn21CgqjAbvA8M2bX2YbwTP4RikvmJTqcoq7MyTZKHbCLqyeEo",
  "key2": "5hZzA5vMmKKngduxj2TJbWA6f1sxhP6NUDXy2ocMMPaxtNYWHJE1fHMq4SpLxFnsFrfcc65VY9pmGry5dUKPeTXN",
  "key3": "5592G55GUwmvVcpKAuPXF9hamE6BZEPQ6bQnGbKnwPQinVZcsogZcrHPppA8qvCwuNX2qQADGkJBHgxac7b2Af5j",
  "key4": "67bKw1FJUgdpcapUjfuHaTu4s4P3q3Qvgw7fWKg7jC4vKjDntrR4HTdL1vtkcv3SqmUSepcdF7WPo5gYfW245Th7",
  "key5": "4kCFBUPNvyfMLTb4PVP288JcYmLPnCpCpnLWqxMLKXyDJHWUS6EDSM6kbygTnnaXDuZn3c9APEAaE2FBt3aX3S6J",
  "key6": "2hjRPrdKSCCKrHG4j53kMnReAdD43mS3X2N5rC2KJp2Zk9cnN3gTczX979ggeSJWQrnPHGLakt916kw7xC5D2Dd8",
  "key7": "2MzVN1K8Q3t1sLX4cyi5vcH56BoanwumXiEJFQS6KXtkiyz19dvf76buRpjEChNSV4ic5Vxhb6eBbsfSgE3V46gL",
  "key8": "3HA8Q8dRscnvwi2zQ5LwtNChGM8n5o2pXTnATY1W9eHtr5b8yneWF7mLF2iTHrFrFH64qjdt8WDEhKPxgHhgZ42q",
  "key9": "4SJryqwFQt1n6cG6AMAmJwkWMGtU3pXvcrG6ZSSX9YBSqCoAnSUjoMKbeErSBfKZZVk1bC1HkR3pS8o9bGpnTnBd",
  "key10": "2Fe4P7667UWmiu9mpZ7FEgNgLnoBU9kauFwu9wqBRJ5UhXUxDpbtDAGcvivmg7mfgWheTLfuMyKdhowBTJCLhk4u",
  "key11": "N1Qm8WuRvWK1GyyZZb38aWLriCDPFfhL1TCcUBfY4NDRY6igv2wuAv3oovZjLKGjBJkZcngh5pJEW3LQqMRFJGX",
  "key12": "3fHL6AE5CDb9nm7xVh2Bn2pDCsQ51k8gB5as5SZTR5HQyGp8FJjbGqqyn7YgiKdkq1yuG2WKALNFGnc6DBhfJpDV",
  "key13": "5fkZoWRSqydBuzk7m6hsqNGyfw5opYfN8hLgZEmHKYW43F3LhuTBRuyq52jA8csfQYcK8dFnSyua8yqu6izarHe6",
  "key14": "3MCVaAktK6LCg484ThuZxRa4JSmQJWvV5it5XaZaDttpBWNKF8DWft2GPAtURCtfgkqFNGrRyf6QhhhkbgdyLRCG",
  "key15": "3kRaRA3T7mGkPsikbyzCWj2BKn8dFQy49uQMyyUxMdvdfaQu5dgWxbZxq11TnR1cLtiouG3aessLFf6S2qUyxSMP",
  "key16": "3ZF8JUHAQ6HUPHPTci26vWkRd6QRt1EDVKDP65z1u7eAeDxzQpsRUf6FpE8fDmpM4Tm8hDB19K2zSa81q8HHg5zR",
  "key17": "48trT6gECqTtSzRR8ZhCT7b8Eq7kPC2rCrfMifTizJje2skoSMB3i9N3gtmtnDoJEUKNpSi6iH9UHtJz7YXUsXXj",
  "key18": "3u1ecRFvQ6edBX6nQ2maZ8q1mMMFjvhZgJDaFNai6aQWBqArCeHoBGoh6XtPoaVxUdkkV6AdeJBy29VZFYJ5qD7G",
  "key19": "5humDXRKDy8LYA4A2FXGC3SSaJ9dEWoThWnZ2wPWSkfP134xqGuDrd2cnMjBWrQje36Bi5mgHMV73KqTEBeMZJeL",
  "key20": "3irVuzUQdCjjAyTFEJifvGQwE1UerxepPxGsfn7DPTPZtEAmUSUbRswka63CMVYLfhB7JXcyj2JVff7smus3KNpz",
  "key21": "21c1RmaEzj8DBhKrs5TR3Cp17wgwbZdzDn4ufJ9JbXoQB9Ac4FjrsaqRia5uLV9gnzmAvfiYCk4M51wHhzUvy8aC",
  "key22": "HQJT7HjaFHki4U9ukRQWwhcr2zjfdKkQ9BiX4htse27tn33zNY3ZkCGikdttmVbTRmzLwa6zjrWjwJjLepBtDj3",
  "key23": "4HkekcznHhyzdbtaKxyqXZ4MZ73RWj3zXtEetUcZ44rESNBV3b1v2jTGsAKXniCNwqFHEDYFrE5gRuLoFAgc4SDm",
  "key24": "3uappcYyy7uqjAc94cLwUZPm2EwLCPs2SDiwZ33FeRaS2y3pkBnEMTcSX1gGCCpFCvbP4ijzwfumYUgKnc7127Eb",
  "key25": "4a1nkfT6AMwLq4aGAoCbVDBfo8phrm6CXt6MZnAet3ac6uoCTzisVWCsKpggnd2JdhvnSf5DUwBSM37qgiA8uyKr",
  "key26": "4JbciKhPoZjpBsSmDZZz8h3RG36wMKPJDBC3krR9VnvAV8V7LY3BCZja1YR9TkRkQ2H9n3VzA9Bqcmqps1fUwq4W",
  "key27": "ChSieGUPGmLjKo4kYBBsvzXnfuizivdaHZyzjrY41f8xPc8TCXSp9Qz44FvsGYErc53oTSDbvHzAoBCnZmUcZYM",
  "key28": "3o1hCRNRPHPcaN4DivkyHpzhJtfW2S5V9V4VvEmkSdtrDS1U6d8Mv8NqX2a9ec2JhZiKpxgtgT5wAy8JN8xpcPWa",
  "key29": "3MmxwNWv7M45iCa23PxCQEsPS3GufD6npGpuWDeKuggc4VQTeHYLYbos6EmvdePQjpNKEFj9vHv4MYcdXwthqVwc",
  "key30": "33TbD1QbDK4jfk6bQMnzQnbM3kW1neT2EqCkFd85Btdf1cgFJomv5uTEqFqRNJGyqAcx7gpYqvLpi6UKPSRV1NQV",
  "key31": "5UApJhi8YS4acyWQeDfZUY4hDBA6JWc1N6gz6CVqroXDwv68bVJD5aB3nhZXDPXq4o8atrSXY49cqru4VDDRrc64",
  "key32": "4FTZ93VLtWp5Xm72xEaMJRKt2ymyK4GyiHPiWRMsXF7ByQ83FcdFTfSy4fywJUPsr6o6KzTqCa7d4ihhb3jivEqd",
  "key33": "4S28sctwTZqWWPNXBVnFJ9EqdQfPLJWqfGbh5sdLhfRTTLJGpEe7t4UJWX6SxmkcpjvSLU51euVEMqXXXJsuooh8",
  "key34": "2UheyFsXetMr5voJ2YL9uc2ENGE8UXjhijQASmVYkvFZrM3Eo57rvDUd2tpzhnpEY3hhZdfCgX9jJXgem1ypfwhW",
  "key35": "4qAZmixdE8Wme1WgrVpmv45dyscbiEhvZzjxZRYGW3hqNBariNsFbAVMad11LtboHAdVFww6o38dk4QjgR9wVi6c",
  "key36": "2aa18yKvFt67636JUnR5sMZJK568XtThEpuxm2vy3DUP3pbz12Bq9UWY7kNzkkVMH1J2CCmsMp1uw4rx9afLPYLk",
  "key37": "2vbXLWbL7Ymcgq7LCZUAAEJfKPAo7mxRVzLSnBBhvoRcQjX2h2dgQYx53bJaZZpCEJXSuKqmqosfRuMUM1T38XnD",
  "key38": "34hDfM9DrZapHMGPfQnyiLDjTdZKV32LwaRsHaqGMKVeY8CbFt98UN5TXq3XjpHuNTAcu4zJ2cTdScxS6fprkBK",
  "key39": "44qcdm23JogH9jRhyaSDNs2JYGmegCDS6gQeTYXVmuWKHzEPCpzusYxVhvtPuKHBDByzbU2LD2M3SuQdoP2iN2MZ",
  "key40": "2VbN4XJWRKJCoNJyKNQwoKm7j8cH3XTZpojmemT78KqxHH9wQtEUNCWZebwDgVkcnq3McgQjNAbNdyYL2Z9JACQr"
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
