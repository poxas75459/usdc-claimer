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
    "3vx2QiAbCfcoHxadVWmrfLgV8dbQUCZ2a9LHGxM7jv3ofRBd2aMmeVXMYGJ4R598ujrbAJjp2xBkRkmP1tKuqjsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dj7T4yPnqgBauJCXTqEXZ59GGXXawf9PHvSbp52GjrXwh93HnmvGZq4uzpz2hMNGjJ6LXBUTWmtXBQABMhcdeFH",
  "key1": "3tGQQp3FznMWurU1ZotxR8TsswNpucVJcx4La6xFWQK5DYd6w6LT8NMW3K2JPLTkzixF2DeuW9WWeeVCkhjQ83T",
  "key2": "2VgNCoGMtXqiQBK919DGEbt53YRKyYs9BMeQ1mXTfBp5cjXP9HR6KZsn7qhXne5cuC46uCo6LKbLoKUiWHRfVkGe",
  "key3": "4vAmUWDbNjGrY5j5kJid2HCj856y2o3Cyv1SGZya8d6bGDkyCLNZ5V1A2xfrBPHPRnY33TbbHCe9jNK1jrwiF7d3",
  "key4": "L4ihv4pp6iSw1oQaDuEdFLJ32hn4R2eEhti5eLB5KCbqfeZXQEUaZd34Wzd4To1n4XMFBFNVjXnvEeYVewFSmA4",
  "key5": "5atW9gn64oUNBy7GfmcqDtDf8fTkYFiwdc17nXbcx7pWcydKyPui6DJ37mTUdziKwG1c7HxZ81NnkaSb8FFkGTQc",
  "key6": "3EJsPGZoQ6xAmtBgFPvQdMzvgtYfqqTeL8eYWjqrkB8VeTMkZy2UkaG6hyVMt7fmML372SmvR9zKhgZ4CfNYpzEF",
  "key7": "37LdgCiLvQxVF3xNuWutmjnNhmBZNhegoM1o81FFgd2kaFzoivJ3DEmSCZqfckL1K18hVvv2N3iMqVS2zEmr7tXH",
  "key8": "4Xmn9L6cy9X576pfnwsGDiWoeTDoor5SpV9vjdzF5dv184PwjWn7EsaYUE83Xoq3zsoiXT1tWJXjWCM4AxM171gv",
  "key9": "2FrNKisYcsVZcpgP8Rzi2XVgVtsa8ChmZpNJAEpCQpqeKxe8kWTgMyKh5yL8f22estm9HKGqW289APugPB4u5Cdh",
  "key10": "4Nn1wG58nwyRAy1sig9iFEgLxVxQcyggRR4vNywjHGeT9S2M7Fb3ESPEhj18eyCaCuLW6TuKUHpsVqqyvPcnYRkp",
  "key11": "3tSYtLh8i1LccdzhaMhFxDgSkHC8C7D7avf789d16cWpuU1eRBbsdV1HJzmYYvCsuYNhCHwtbUSmpdk3nPvVNLJ7",
  "key12": "LCxLMdYxrtr6zjQDBmoasMbaPyq5D8sEm4p9aAhcEUG2L2hYv61ThrbnFzXry9Hr2KuEuoZenUZgV4LmSTwWa2f",
  "key13": "2rybwnjxJHCVJ8cCf6FhSdcfCufJC1P8qzkG53dyL17hCE5gs22ymToAiu6Ecj2p8pXNHroc8uj2CFNw5ssxncw2",
  "key14": "3fKLooUk89vA83fYBe7x2iJycjVy5kg3yLy9zqtAXvNwfNo5ck7oobUQJVtpxjQXWMhBNks99z9nZo4uuXTVKiw8",
  "key15": "6ocAtQVgPnwxZZe2wqo6csEpxmpP4SpmjB93aymzRPXtTymKZnqZq2vd4tjDuimyDhkxA8Lzg5kR7NmYMBXEzM9",
  "key16": "4yVwGJTtuM2X1qJ5YyEB9DqMLBo87YZeYemdpaTpw8R49hgBV6gtrfwiPgMksnww9Xfjmit2Z4KaoiDqR4Fes3iU",
  "key17": "KwpJRdnfTDpR1QSzhFBDGi1Nb74MrcmKWgt2pFTCD5oK4wPtmcvbrecSSAA4WeprtmGztw2eaAgZ7uxVaVzm4mD",
  "key18": "5YKfL3n99uZ774j2tCgaVEm33yktei9RcPivqdihRd54LbScmcEMLTSiTJro6Jd2DFshdG9FgdN67cPFj9SBvTTJ",
  "key19": "34KXvpQz6sNx6HqMowR2xakKJm18BRHBiZdz4JG62UcVaX6sfxQGEUkjH6vzFJC4CjduvWnMg421wR2xk8ipQdeC",
  "key20": "2XHi4A4NeXhbhwq1og3EndDqy762nAWbR3kvmEe9qj8BkhXj8YQtMn8VxBhVhQ4s44VJnVCSfjcRkxu5fjkUu6Ak",
  "key21": "3FGrpYYKo7uWnVzxZRSACZBsvvFzvj4XL9G75bVnxiqJ2LCXzqmUMBgNmKm3qWaKTZvzWGh7B21bA96S6ApgGMth",
  "key22": "EidNbKtrXsJFWinWAhXk2rqdxMnKh5sn1pq3CLDfHUho3TKfx4yp7nBLTQQrVbVMjv4psFQFVqsMsMtY9koiD9W",
  "key23": "R6Crmm3RtZ29oS2zA71qxxMNzBnxYVoS5XrABh1F3WVCVKfmC7NSzHeBZxkVgDTnRbyYUN6qeA8fThSVbp7FDU3",
  "key24": "41BRsiaWXim3SB7mNtbzAK1tCavLxkd9vN4xdyESqSi2xYPqsthzCtbfmR3roBiyx4KLBUc29C2Kpv8WBxvBEKMH",
  "key25": "VaTMZmwaXVEmfEBf5VJ1JfqsGmrhFwRLquAPcV7YZyWTfvmrdp3vCRMKp1PF33vQPXM2e1G7Sw3NnMvUbA7J3id",
  "key26": "5Wno4fuwQN8fvTFN8qiVbgwLVFSu4aV4GsPggPydJKeM8CB8puzHYnfXV1cynTWHk6TgcHwFFRtAYjpMPniVTjGz",
  "key27": "42mZhzMU9jWsfLTiTkCcrigDfJjUxo5rJK3JFXyiM8DaoEwDJT3P3gRod1RapBPmej9YdnqJCSV5g9kPy7yxm5UT",
  "key28": "3sYHdKEwMX2yNexGB1K7pdB92hp6HUzhpBMw1836PNXZc2FuEPJRP2jpwT8QASqPYvb1JuCTe51pwiqFmQPEGr9m",
  "key29": "3NbXb5jfGYoA9pMYgkKonZnHA6fifrXsfJCB62Wdq5reDgEFVc7AVRaxsqZB8U69gA2uukAYbLcmiKf2xS8eCkEp",
  "key30": "43U2ou5LjczKycQSvri5NjafL92YM1Wzo3kqgMcYnaNDC2C3kWst1p9k3GVXdUouoPZnmVoWY6KBmfm9ZToAEafy",
  "key31": "5v9Uy4N1P5hUKYnsAeJqsF1dpTGv5ryrN3qyWDwWA5LthgeVRVe11P4kHGZPYk7e26aAWR7hVZpa4kVEHg5rSr2C",
  "key32": "5rxgDDgqe6XLdqPQ6Q7hbHuCnJmyAzc4yc32YPEXSgxxPw2PModU3Hw9R2XVuNvsAPPVTAvuPn8A5956YZbaT8LV",
  "key33": "3ZgBHir7Dx6FuuHQGcqXktizXsdkWQm8nDJxA67XKEtxxJkj1n75ZxMRcoLaXhfZdGtZijoga4JBgkRTaTUtZPE5",
  "key34": "2eURxqdjY2Yy9HBV7Eb2fQhexpNMMQGLoESGxmwGAQo8VfCps2aFgBpZ2xdwDhz3BTtGj8rQDxnm2Hgoj4i1vdBL",
  "key35": "4TqGAdQpjBCuCXxRow7sxuDWuJaHuEyS29WG5yvhV3xvcGeJdpphom7qQu8cJQo9tWoQA7k5pXhECaXhY1LZJXZm",
  "key36": "4Qz5u6q7sVg6RhRY55JKoJqjCTDRbk2NASP6RLFbtKT5GqJ1FJMnAvMQx5WdKzgQoYhCJkfe2c6osqteJbceZoJd"
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
