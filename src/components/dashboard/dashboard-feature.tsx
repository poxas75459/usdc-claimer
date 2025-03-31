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
    "4KCnbbxJzhYVdKWXwrbR18F2wP46Hkg2cS8DNTJFpuT7wDzJ3ycsCYDduY77GD2kppx5FoPsENespZuSDdiVGFnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSYrUiq3Y8vTed8H5QjAr9bqpX9HbveBa21vbCVGj4mGwjvYAihLjAvJS9AdReaQtuHpEdeuve2vkG1uRcvBvey",
  "key1": "2JDp7KQKpLWmwpTVkjYX1SPgaW4m6Mpd9N62sGTEFomZruEpHcFKEEsEKHcm9WcHC4h1btuWiXQYRMpdu8stJaog",
  "key2": "613cv2AY9byay7CixVwcPQwS97XkcyzUSYd6EzY657LyVWjc9MsrUtuMABLDLJgXDhUSDXw4vT1KovJavBvFJhCM",
  "key3": "NXoxLPJZUHgN7F18VVySDN8mopjwo7QwJRJQ2u6Wm1maRiJjzvWPcgrG94h15vLRjKr8DvTSPuQt45qjx54xVty",
  "key4": "3PJeonNLLsSVqYKiBZsKPLKTWMzn4aJmHj4pusWNYqg1jJ96azVsufuqM4bacJ3wBvipQ6RoEqYmh3mM9NviR8oJ",
  "key5": "3Dc72SZ19NX5ZE49HyVs9D9PWaVjAezD1HEascXnnk9Yt5akMefhVVo5yYhNGrU6fpBC2FrN1rYphmCyqeiWhzGZ",
  "key6": "2Dp1K1y4YJwp8KK7eFqvppEtyb9md796A8HUfMpKKtSonQ8n366rWftmkmFvE9c154fxSAvKb3abRKEcyNguVW75",
  "key7": "46on2wJMFYgMfGhXzUrXVPQf7ECq5qx5b7G2a339PDCuiDk8ewN1fZH2iAzozXYazcoWnj9VE3ZS9iqAtqWw1ouW",
  "key8": "5KCDfButebC8TvubBJBRJfC6hBqr6EPeAbuv4aNJHfeLAU32edm3Q5CnWPRZoXLhzDEXPfQVwqNSZivWWdKH4sKn",
  "key9": "3o3jgR3rABaKi34RpdLixeQorzp8wUfRtK5TnmScdv9rPQAzUUmWBExPVwc4K5sHkbzt6McRZ1VAgXwZ8gsAP5j8",
  "key10": "5tQ6vxr1hyu587UPqSKfstKx8bpMGFb8b1bxic2tyKRAKrr3YQjotoo3ogWE8XfULn9ydHBvMrDU9WHXuBDXXPVt",
  "key11": "3UTJE1K5hbRtZXxjha3NTWFK2zao1Jo8eLiYB6FX3iDDqD1nLjijhau6q4LGKJfW8BPAHySN3ArQaaEZkF4rTjY1",
  "key12": "3o5VFgPdjhBk6ffmT2t9T2AGsjWiSU6qvfGM5JVYu9jpPFXeVACn1egEFaSk8xyFBwLt8fHVALuK21fBu6Sz1wQe",
  "key13": "3TuoUwC3WRnkaBSQ2UPxWZchB9zBYaC3gJejW432f8QaBi7inovYxCXfzcKiEiRFGgvbFYNHwjA3k3g9dH26RVjn",
  "key14": "2wLEUAjgW9zka52JJ9Us8rSN5PPSnmf4LjE9nMSEGn6sHg7u9VJzeh6udzxhLsuemGVbQSvptnZBtfamNp9MS8nt",
  "key15": "2v4vspBazKUk2ok3Y7qrRnPAvC3u3BsdLToZNvRdUWL4vq5G4Th33Gr7Z5VyGg1e25PMrgi56YcApMJxYvSK81v6",
  "key16": "3F7BtT39bCa7Z7vUr1G1JBuT6EEY2EGHGa4YczLcoFcPZoZXbuquWWhfsjywpd4uFiK1o5GLEcWuKUtGaseBBvfs",
  "key17": "Hj7NvMDz1NxZLfBkwTq94sP7f9WA4wgRs5KmJi2mTPVSNHWZGw7xhvhG2qF9M7fNEPaGjc1ExL8yVy3M2MtVzfh",
  "key18": "5NHGPdWTepeFTAHJ5Hm8TBqPLY9qeHcpECVNoZ6xvhmMchxx9XeDEa84Zi4mjwD5QdHNGU8D4iswrqV6chSub6iN",
  "key19": "2sijysz866BtB671U1AqnWvnMHMNcKyWYNq9pA5A6VwpyeS6215HtuUjK69V7zHYmHt54G3Jg2KrxHPwv9fNEmWy",
  "key20": "5ZtoVMTtiFHSftjALJ2AVjD5vRMwuB5VVdKQUXzYXniua2YjAMUPq2yRhkDGFKyYkSzkrBeaHry5hKoKWM6bMdnS",
  "key21": "k4Ubzof8oM2YhhQYnTZ5SBiH2b8EWe7VkxE78spJXdq6G41N9xRip76vYAzf7id6jBkfGJ1Zm11GKzxhUBKDHfv",
  "key22": "4vzuc2rVYe5dP4Xk5xUJi21uLJWugP4xz4C9zwBeMAYSNqYp1CmtQrozwD7eCeoYC3sMdCXqYwL93Bfz9ACc5XN9",
  "key23": "2Ju6a6dTzRsM9gB1KG7zRkrU4oFCuFvKYxt1nJ8dZ9CMj6sg7q3Ab7uwdmxEANSafcGoXgzRWuAVDR8Mi9rW6QFb",
  "key24": "63AncSNfP8bekyVG7kpTr83GtU3nmv4Kfcj7pL9mNY9uN6vRp8qeZygigYG7wupSsTffymSXWnMSz4dYg26QDV55",
  "key25": "4zTZmfqvxuVhZuzSTzEuJ42E4G7UJ3c2CrEWjiQvfYH57xMbccye3LWpPcpLqCwwAW1cguKgzXDVVMgARjyYmyRr",
  "key26": "4JAfgE7WJpeizi1kxYeEBQ4HRUNzwVGkKcBzKLBHG9ufn5tRSR4h98jM4KVoqyVkeeF3Ni5m3C6g5EqCaRTWDpja",
  "key27": "48L2qq4mNZwEtRjoDcdKgRinoJp7RHf3NR4YsvukBWeZzGfMGzQoYkH4uvct6QTowFupCdEUd1sYSXq75N9pC5nC",
  "key28": "1RqfqAsmgXjYKqWBV8f3Avo9MEGXHoHtHo2XPTeR2zVWp4Pke1mQF46XWVvFCnrCyxeFSBQG9db3M3BgvkQSC9G",
  "key29": "4V1h2x1XHTTtrNVEKiqmj9DRxZKk6yR1ncJJeUdMH5hy9WyyvkZ2DkCno9znBq4BCrPBpddqwQYErsdBemEPe2La",
  "key30": "4fwRerJVWNEimVmKdLrbBvcnU7dVgTCVTd9sDL2cau2pKH1wYVUckmat2Jqi7aF3xgQtMC65e3WaT45B68xtefwr",
  "key31": "4ZQyLw7t1Dcm5HrpopEPo91Nr9VN3Eh5VFHq5smmgadaF7fjVbfcB6dMoK5z33VgbY39Dm4Miv3D3of6VBKFVmAy",
  "key32": "4U3bbr6tSqt7V9o7Qm3bP9dWF61ZYoYqkcCDVtH2xSU2VndLzH7YxzGmtT6PBePwXMfF1EGVUv1WoLmfDeAp2uiQ",
  "key33": "4mZpCgUi31N2zMHoAtrrBB55ZhPxykFhKfRGTQPqAtWrURBanaaPz3nQqhgYaVagvxKVxNpj97B7anribgohBK8E",
  "key34": "JyavbAptYY25zoFtc1rru2fbs24fK4QnPtvdRyMncugrFWPdTkzXRpn5LLoBF48EP9gzgTAmXqwKBrZgfkx14y6",
  "key35": "23QqWfa19sAzRc6uWwQpb4HP1B1FGNqp4WF9sZAZ1uyKZ27Vs3D6JwHcQ9cEJC9gKzZBjfyH98G3hMhyvAHjmUvn",
  "key36": "5MJEikib1e7SSDSw1PLKWEYDBAsNbabHdE6qrgZEZsVVNHwNJEJDu6PuvcHgxX1fz1tnVbawcyVSrEuVaWjrBvBf",
  "key37": "2RT9a6e76eZEDxXo1E4oQGGtg1kfUL8RNsuX2ygcJ6ZbrDXGfpGp1f4QuEHepdUS7DM9C87hHk1RX3CENe4yt4aA",
  "key38": "27Bs3WRK3MN9gfscPFzqMfUz1xW6N1KSVvvjcifspWiwJpFtQpc7ckSGFCVKumHipJKiKZFcKBYcD9Zs3NAUPLQd",
  "key39": "4VoiN4Eg255QPrFTA6kQDhTT3jKdo1ei1gLMz3XZLYB9P4YXg9s69e141AfhD4HW8je3WDKtcXiMoXMLHK5Bxgf1",
  "key40": "2a5goGgdgkEie2NWJcYLq424tABJ4oH3shvk1Uu1xMbhDeKBM1ZQ5akbUFjr6PiUdQYQU95nWN6uvpbHgvUZX4nD",
  "key41": "25UfT8UCdrmdnKkt1fKargPrkCVCTPBGU5k3sUtUts1ixim6LiHDedc3UQdUEJKHfTT6AUvdMBd4fWNeFyuxy1Me",
  "key42": "2qG8nzsx1oHb4VWTvHbUj4H7VST8vKPTxW9rwg7By3xxmQHFseLg6oLpYVMc4AL6WZbnA5dXCo3HYD1aQ4rVbRPK",
  "key43": "TBumAf99nnDEtpZc7v2b3PZsMrJH35GHk5j5sd8eh3f7hX4NU9exQzb4kExmZd2Xxmx4XkzhAzbn2ywinqabrjH",
  "key44": "yPQq8coHEkNtno51D9QfKWbBusUA3KhSYpYd2ArZxXyF6DAM413YC7W6FZbpqbH8vMDmsvwpxVc2WxrQRN7eVUF",
  "key45": "5esbuPbt4V96k1exDLZ4VZKgcJsf7WQ5ZopNwFtF56Ytz4hfmwRY3nvnRaRSW2uaSpDxmiYs6a4D9je7Sx96LK7v",
  "key46": "328VZdp9QVR8Qhw2vXKKeSTUoS3hDCwn5nVKWemN2GMKmSodPaWGSujeZwyKozvs9ELt86yHdhrcLqwcGNK5AdrZ",
  "key47": "29yhBRPKmwjxFrzJri7VFGE5EQjAxVXny1nj3eN2Kqbm2nuM3MEFcEX3GnFdB3R6YMqDioHYeegoxnrf6kiUbhcP",
  "key48": "JWLo1sjoa498uBECRpDdNh1K1xU93rQomiLiHyn8Uivj9vkyHtQL1ecPbqUXhAyJeS1cPMzUXMyY3cBWJPEevoM"
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
