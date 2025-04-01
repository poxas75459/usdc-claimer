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
    "4xqkDY2bFAF2ZtbJogfUA1h9mRYru9cA4MNMVgSawNPKjCtzvcPsRzmYUNaK3qhzaT6qzAzGdfTM2wpgSpLuQ7ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5keCtrhK88J5syGG9tWmsU3CqvbPdpYiMJZtu3JCKFu5gS2bFjC5ZPcsh6i4Rew3sFxDopRfEYQQ4TrAaRMLTgBp",
  "key1": "yqg5zWAV9PU4eHyTTLnZQU9qji2is79Gfw13WokHmEMZN8zBdXUatxB4b5i7HQGbisoj7b22nsxh4VmqpLRNr5x",
  "key2": "2Add1LDms4k4KHUAq1WJXEh3gvP1hCBz8iXrKc5bSkYeFeJx1tymdmpyC8DJm3pzChzmLRWHpxdUCmFvLTufwQSS",
  "key3": "2AEchJbBH7sMnmrkWZskxxTGhkDLWjzn5rSHfyvZ6ya1BqMACHiamRo29j6KUNCjrrTpgnhAAsRH7KFqaa2WKLkB",
  "key4": "4iv7bT6v66Hd2vf4VtzSUjBb8YgG8biiwihopyx59CDoKW7oa6SuxXVRcsVYFcF1au4A8QZKPbEYs2KkApUJkyTz",
  "key5": "5ojZMSTQkjPHKfL6KW8VXc1M5pyYhn1z9iYx5mfX3CiSn6Ubpmd3emaqMiZxznesvqHBhucpkj8pTSmxMwwixnHK",
  "key6": "3bX2xWBHXv9y6VVPMZxn2JnaeJdnWvJb8QdJvJzj5CaVaQ2qSqUonkxa58vxzSW95cfxbtLHQxne45v1VDTfuMLm",
  "key7": "41qBgUG9q7gU637w6MoeVK8byxqLSeFdyrheXjpnTfqTmYF3M5fH3LxpyUUGrU6qeS4sSEKDyhHVaty41ttJwiGY",
  "key8": "5Xdkn6VZq7Jpyk7xrMNfqvP6H87WQjBw1HzmTN5FDHp4FvghsNTTBdzJ7AEfVT9N4Gj7Rp2TMWSA4wotZ9jBmudy",
  "key9": "4hNCqjybThRtH41b9d6ZbHTwpjHZvRTV7sjYuugJnjKFZSvbW1QSsQ4866sGjv2rhwj5Zq9yHYR647qq2HcF4LZy",
  "key10": "53iZkTAfvTSE6oJUt1wGXbEFeLqTB1Fwuu5YVuvbycBb9f4r3Xg6XJF9F3FtUZzubZ5JJYZ1d8tf2DcWfm6ZNUXA",
  "key11": "4uVS32WPMkJfnJkh4kecF6q9sPKReT5qZYeWS3urJiJcpHvaXvZFhT65MpMSjbfcXEXmN9ZTuU4NpFqw7BE8GmbS",
  "key12": "UNfBDcyW3hk4cQdmPHGPqDA9eZEY8HzQgnA9f88GyNrG69tZ7jWJAtpX3LwkfyNVwdE1aiQqiLJGH6iUNnNLczJ",
  "key13": "5uYgeA69bcpCgjGZf89tPyfhEv5tTVHCNyNmuvSwmHZhTEUhJB11De7qtPXCCqkCwYHHJC6zBXQwGeCVWny8oQHU",
  "key14": "31eqAbotFNynYiVGzr2y5ELaW3Bn2Zg2EzxEKgRZDF1YRQ2mAJvdhy6j5XatLAFm7HpGWnt7W9RUneeHuJwu47MT",
  "key15": "46m2N8onFqhz9zpaqL82sLaj8PmbKXpL7iKn7iax1bxKGumNJ4U8cStAxo3wYXe3j3R1iAL5TLmMpMrjYFdVgqAn",
  "key16": "41tJhkCpCXhmzVc52MNUdAndDeRfkV7v4G7SW2vNbvNUfnvUF5aptkmqSoxAA6uR2wmyXCtiGx4QF9UHohCbNtJ3",
  "key17": "2L3Nj6mZ5caJdpjh3oHSBnDA4reuTSWCchHNR4AvcMAnAvF6efSwjt5mTaj9KUa69a5iWba7xGRCzEJkSiREpomb",
  "key18": "B3Ckip9FUoC4GDYBR44bKDNYTKETQdTqzZxf8Bck44esbJ4Y6QYaMEW2WSinnLML7VdB1NCzNnw4B9zpgrgYjvY",
  "key19": "4TL2uzfeeAjhAf4LVLUjrNKTQiKicc45FdAhAKv8LvfKuA5DqYzwyp4erS9K3s5gqHYR4RT1EioY3Pa7k76vmAjT",
  "key20": "2wUdYg9vRRCU4yQ96fetPkkN5XPej1t6dHsJbYPspi61TJ8DRLYhhHZ4CHx4BXm5NcFYwKGuY25KX3wiB5mCyLYt",
  "key21": "bHHYWSmcsLF7ubPX42vyjhmBhGtPgSWNTDwBKzaT7sJK3ZdixabtmvY4r48kxHgEHRfXjFnx2ywaNMFLcp56xyB",
  "key22": "4dPXL6H1M11g6QGWTaE21C5XCNigUKjoVW71ajPJDqvNcPT7rdg7V6MQBcLqUyGf1c7pQPLSkD4KWD2n4bQkD2Yr",
  "key23": "3YihSxaz985csCiv5EAiTwmz2iSgdqAAPhTtHUfTZXcL6HHhHrFsGtEFgQdyr9jv5Wzum5U6sLa81Lr8ARhkik8",
  "key24": "2SAbEvQCKY4kjBibvv5pZcs1wvxUdGywLn8d3aLjtDKjr1c6eiFiYCw6GvCc6GTngT5x71y7kmPwkfajL35zs27x",
  "key25": "37RAr1yHAjc32wj2X7dj1WqxYW6zLkRUhpv5CfbwsuFbCWGV2i334VJDGnDY55jqdL8K6dtda133StpcyrJQwgMD",
  "key26": "3pgxDczRQnrqwSW8vof6Zar75dPLt5bSzQEuUtQhngmxVA6VYSTp7rh8E3K4eCjxZE72G7HFXKe4pYFNgKRkco7B",
  "key27": "43TBi3au4zdN4xCiJYGHkHP7tRJjkaoaTN8QwAcciMbV41TGAvoiQBWz9nB2Mep4iDuM7A4VGngFFZwhWYAcvrCB",
  "key28": "2PvTPTYDya932GiVmAVWWMWiE12kCgvrRRCB3GQuiBFdsvLuYoNrCqrAD168XfKFXhwhMijer3wX4TkLveJ1tji5",
  "key29": "Tbb4CuTHFnth8UzdnPNFQCjbh8v8qUHoX1omknptWLwEW4MED8J6Ki3c6e7Qf6QoaQeudfgwSiCb6EKtFvzdG1t",
  "key30": "3h7FwvqgnPaX771pQR5LiKZxPHq7hMdHCUjodK4SmMYGFYg5LPXg8tNwuVFQmwrdfr4vNiiA1X9btuvZ2A7rxEbQ",
  "key31": "3gCcyiNfNwKKpCxX2eX3UED4zNDrRS3wVd9YKreuFuMCpz6coYpXAUS4Q3xzUdBqQRDJ9ptvJsaKsQnWeZa8fc3x",
  "key32": "MGFQrYpvnBm4jp8jwqzRNbLqfPxpgdXaDgRFu4HZmGkonuRXuH6d5W9ymqT6CWuHssoYqce8ZuGGMVzBqPXfAim",
  "key33": "Su3S71SFGSwUhJdLEpuaP1hV7TQYXF6xRbP4biWRGFRgVd2AGWiirK1zWHZuf4WeCbHk7dB8mE8PypnA6HBRcnb",
  "key34": "45x8LWr9BL9EzfqcBU5UoiC3NAvw7EYxv72oTPB7g8p2ryN32bQnoqstsS2UtiybnSWqgRg9h56vAbZEY3d3EMBD",
  "key35": "5K9bvNo5ZdnpbYi8dgC1U3htco24iiYoT444DrEHAo1Ka6F2Nk9fJ6B53a4Q8Up52MFd5qaoW3dU9W2LEU9SQBgb",
  "key36": "g45vfDEsxBnqJs8saHe29RqoVz2AWQLJhMkBqQPSUSDD178raKiKKQEdtUm1ZYx1hxiar4KHgzN7zL6tW4xPHcZ",
  "key37": "4bdKypKuKTSW76UDiTZWed4hELDDK4JFfhnAx1FRRwVLAjU6vM1FFYT7cLnxYdii5b2ywNmkMQCZ1MLHhXiChMcr",
  "key38": "4oqtQC9rY4DBc8USWFM39mjwtRCWKZS4rPxZSECFSMRQXWLjZZXjvZpwKWsGjEnNcpVLR2gc6BmMfzRZLiwXidgx",
  "key39": "8Zhx6VtvYqyYm4cLBydS7tk96ugsWXn5DtyJ3UcTh7EpwtqfiH6G2FTgvkRNnVpKNb29Wyqvco88Bv6NUBrf1Va",
  "key40": "5RTxU45H6wJixCNB19FZxP9E1bxSquK4JgdEvWxcjGbfkoqtJeF2HJvxwBtgNK1i11M9scUG8Mrk194HxvfmcQHi",
  "key41": "2R1hfqy6C3Ay4KBwK9ZLCik6tYN4qb7aeYAj5LtwYjse9eXs9cFSSbR6hRm2d24H1zwHg6CthJR1uDeQadBqjTPG",
  "key42": "2J4Kjx54hBxcaQ2kWQZwiZKb3YxbLiZkVYW8M9UMEVMtAMVUbiKdJCXFJenHSJ5xKYfErohSPUDtEV5peCE8oexD",
  "key43": "4VypGqhxkp5MoJGS5HKStByvwBe1RWFio1vmPvY67t25R1Pa9Ew2GwmnEd9eA9XB1tYr7vuCFtUc5E5d4EAmg8R1",
  "key44": "5WwVnNcpETpcJjk2CL5mRQXcVaYDHN8mBGiDNA9V9Cvxd5dpBNxiCk7tHqaheiTUix1RbSzY5HuRZgEbeLvhE3JW"
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
