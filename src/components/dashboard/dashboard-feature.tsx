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
    "uyiM4T8AWLVjhwCXZXdPN3BSARBJHM3n5a1exR4sLMfnkXp6vpxn33MsyU147exwk7g9n7wUebFmj1YKw3AipDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9sN3s5naQGXQm2dBwNeKHHN3GfXzJdtWoPiE9WQ6Tcd4QkfurAEUam1gLrk9Ciw8XdqmAHkk5FGJ2uudmCmDvP",
  "key1": "5kpHp6L8DETpnYtGu1cfQZGfMACxCiDkaAevwGgs5wpPJcXFY63ozuBTNv7qTEPDNJXTkgvuj6CCMNptQ3TPJNbg",
  "key2": "4m1F19hWbDhMgMQF7jaULHnRFa7GECDkaFMZXurLEJJpyMByuVnWi2cT9WmiTZd9znhpoqgCEkq2j9QerqJQqdiU",
  "key3": "4xZHqXn5UXcF9VyL6MZHqCnuw2seRrSW7Pd4sVMEuXE2fqiyiAVWMoa4cVwNCNbNcTKG8AfgCN4R3pwcUoJHMwTS",
  "key4": "3mva7iYodtFWkR4t4egUPwAZVNiqVx2uTyNFucz47oCvVCA6Lpg9Ko4Vk8pTURWQHQQ7jGQ4VMiHh4te1RnbCr8g",
  "key5": "ZotLpPqjS39pBQGeznUfw2PFr2Lg8p1aejxaQQFXeZbCqZxvppgoDfH1B5nv12v7SxDYrvJkQ2mDr75rpgH72tj",
  "key6": "2idfyfUgPrzZp9uJsGrmukkWurBdeDL8eGdvv8Rf6hXeEfXcXqhTWZWyDnCbKF96QKTTMb4WQfrB65kgu5hWcdmx",
  "key7": "UJAXK5bh5nZMzhHmftSGMfQdmpUkqVndjVB8fUepo9nGe1BCosN5TRCmYzzGbVjyZFxeAsYUCPUfRKTRw1TRhg9",
  "key8": "3gdXKccNwBwdF9pi1yaAdSqmHPzRE7BnBdHp5E3BrNPjUaoqvrPzqFZ1EicKMKVDunyeAVVNvmsmXp7KYr2qpEt8",
  "key9": "2srvUMuYEeibLPQYfpRQcawtJufGbNrzRfSyhCEHdrFbkTigGPDMR6tM3pfXCg3hNHh4UDXncQM5c5vxQpZQki9S",
  "key10": "5TUMmWB5csLn3BL97YhGfymsMggadDL5RPL8FhJ5XL5ZSzKFuVEFLDnm9PByJVr7NPrJzp6yYY7VprbGKkJyxBDp",
  "key11": "4bG7TJ3R7EnpVwJyXxHKVqBsCvbA5fqazTQEzCdgRyueZ9kDdUt6GMGRthmVEFv9fwSPYv82tmcCWYtDsfuBCYiD",
  "key12": "27jJuMV4A4ZCE515jP4ttt1TdUn2Z18hLbprJsVHNSRuuFJRGLr8MtEo6fNKeHyWs5rZLQHNKmZkeqGcbxe3izx9",
  "key13": "3Qx59Gm5WjqsU6svxPwqRGAuT6cYAVWnYNg4dpWAHLwFcGZkt2SJsi3ywR3VxbstvDNJmuuPAV8cb3xPtBWYgvnv",
  "key14": "saU1cCkHXPSuZi4ZrgKUNWSYXButRxsPGhVApBDMJ63rQ3rAn4zkbv6GZiaeBZq9FeFKKHeMbAGLdmzs3kkKS4x",
  "key15": "3EKnkeN95NpNwePTGeW51cUE6eAZdE2eVQxBeK8DFrzRWeT4Ko7Nj5EivwxgUEjMmVbDfYNfBQ6h5NPLGFXXtn86",
  "key16": "HH77cM8VRgwR5r6tv7Kc5movXazPJEGYDSgKXXKamm5ngKkcnrhYj8GBu8TvqYYPY57zW7vwJucnU1vKcmzxut5",
  "key17": "27PJmvqADUnHX2eP5YeFm4hLEh1jHQK7YTbmYw9xN6i2LQrcX2xm3x48iKd72kr1HnD5vnMwr56r6hty7ibZktXX",
  "key18": "3B7G3mv7eYcXBTHbrGiBKhRnYpfN75LuSzfHV9fpn15zBG2tG5LmazrKwAmMeWachexqiniKLqS9TKyPFxZdEqWP",
  "key19": "3BvD729iehv3LuAK8CVCBKbzxe35pdVCMpWs9TBpVbdw7X8vPtn7yKFeg47Vw3AZRg3tCBf4mFdfXpExrY9cjE9B",
  "key20": "2wKmiYhehKoi5xMtLwzhspM73rhoAdoymFyq3yhUbm9WSorvF557qN4bmVftpuKcJU52cVEtReR7GRKx6TSCXQfT",
  "key21": "2MEdTQfGSju9ohjH4oBewahcuSQ1S8FRTTAQcbsQjtFW2YuJjrHT45LW6wBznFJAd8QC8CeCFLnKB84w9MjzXpVs",
  "key22": "5TfduaebBp3k4kiJVrEoo5paCjdZQkVxnbUPetNagwcf7reDCWaYXuEyfGuCjGYB1hHiMq5SNWDNNAyF21uHzRAu",
  "key23": "3tkXBix9hZiygie5BWVCGyTpLCxvdpSvfLGgQuaL6bEpStePoiJMB9geo7XWMAfR98QtWCejsxCXJ6i5DqLXPGtm",
  "key24": "4GAmUrLr23yFxuUGQzZcxBMa9yJFMJbmao4GPo4Ph1ycPbnLUZEQAW4CHFok6jAMAsfYmn5UkbV13Q79ZJag4Z7b",
  "key25": "37q9E5VNMUff2rvTwA4kGLaHsWXbXfbc4GcTvpDJNmzor6Cn2oNn2Wij5ymEoNH1NXaJ1dMfJRjDjdDDMc93Ln3",
  "key26": "4tt8x1VNjTXDjjzf71v9kFZGD7wCv86LZPu8r4xa4yB7BbiyKHBXRDTYEZHB3v5RswwQ1d186nHKmqGUGkYhwsCN",
  "key27": "3LczwM4r2s6LViXpVycV2fh65kHuU7wwUGdfVQJ4xeURC2c2j44dFGPQU38VYZjqQkUQzsGb1r69VvXRqo4d7mZK",
  "key28": "AZiA4r7as1vZFWj3ZznjipSEA2GBFC67YM4ki79U5hgvMufY3RXT762uFWRDGdwjPLmJqpzg8TpTrmXTPPc1HYs",
  "key29": "2Co2oBETayYkdQW5ckf8cmooP29QDydMCSwfq43tRoUiRAT1cDcNTxwrA8dKumyYTahc44ERpaLwd5tUMHYWH9wQ",
  "key30": "62QnYVvWn7hH7nimMFUr33gRHbhyYxZrEMAMrJqP72BYXzU6rYWyu4axzLag6k4fuyRdHE1kaM8Bnz6YTcMfC8fQ",
  "key31": "2dqKtEHuos1PrViJXaidfVBjReCMHcsLTqHchqsziodELVHaMHf3ECqujA6pDQUD1wJzbY8FLobYQ1anhTkBxwZL",
  "key32": "iA3dcdtV7kEx68qYF6aN2zMBLGwd8AUyPJtZvuGB3Bmenj1gopZnEgdZfiZwh9zackfcRetfyc4py7pGo9yEPyB",
  "key33": "5mWBUPCz7S4fAzz3bzCHJuayj9yvsAAnWWKDxamGtMvKyPKx5nDEHJ4yqVqJMsZhhsvxbtRXtVDotZJjDsB463qw",
  "key34": "38CyLq9oCWJDUhH2RSH6EcLDcZyL2E8APvAhvJKGJQdpLoefkhsLz19k3hpfgBeNsb5xVReg8c6hxbz4WW8dS6Au",
  "key35": "4Lun5oLexFqtcZXgFH3Y3T3NU7AQoJdkjhqGE71c4PBh31Po5zj6iHLHKKKnq6eRTLgeN5TxrjCXJ8XVDXavKSve",
  "key36": "2PCsBgjV4gbxYCMQeBCek5B2E6yHxnofBhjPQ1VpwQpHtxm9z8axif4f694XP2xSsjJ3abog2hp6LYqW67fb4M9K",
  "key37": "3vu3mrWns33nrzV16sz5MWpMmDrgsD5xsWuY3hoRyLXfpEEcujjVMkvZt3f16xW1UB9xwX4drg992rFHZfocABeC",
  "key38": "4PEr1opfBEswbqSjjR6NKbfRyyUfyZf4y5RPKjaaX1Pn9mKn4JyfjH1KWWnQoMyDVNhSWr2fwUmPK3adCzBDwi1r",
  "key39": "5hP9cUUHQy2prZoWuVuKjBVvFCmuYEgpi2QQU29pP5z2PqxCfUenjqkS2W2UEZghtjJrrUKxN9r9xZZ6oof5EHtj",
  "key40": "5AjPbawgFMdCbH5NqK5HDy9NgcJJLborMBaM1PyEdTt1iNSgEk3paPr4LNMkJ9FdbQJXsLTtm1AWHbVmNHhTLGYq",
  "key41": "3qgR874R9cmtT7MSUSVdJrTzDMCioxhgiqhoDstXqivoSzj6HLqyTTKSu5ZzQoSWvg5SncSxKBe6V4jYtPnfDj3W",
  "key42": "44NHeVzwnfTdoxZq7gM7uXRzoXuhaRLCCaFzWpgvyujZ9fN8Tbs7MfW5rxK6LB9BnRGuZgCwb456Mf7p1c1KzHP6",
  "key43": "oWkD3b3L39QPESz72h7zaA4X8ZoEmoFWFseN9XgrMtMxMbmFBiDv3wFURE3GUFad3iprYYZ73Kk4a2bhoLfjD3Y",
  "key44": "61yt8xDsbY8MD5TUdHDUBcSmq7k4KZyrc1MqVmNrW9MLbMf6gucJaqrudTJup3TWJ6UMhdyvvWYbetj5ZgH16xD1",
  "key45": "gVMEHXbLrU3p4TzoAREEyBhMxwa2wMGwAhELNjvmgi89bHghLr5Ufs29LW9DuG83c8RxuxL94ya5KW5MbYRaxkS",
  "key46": "2pnZV8Xj8h9167sc6BdcFo47Tz5Vrivw8BbeBE5uaaf2XWjf6GaHMDwwWK6JKJctyRtakk2uAnYqBZK5RjjV7P58",
  "key47": "5AMEExNSzW82aNxF5yCrTtziBQsqzELPw7QT9GaYgox9v7wHVd9ECaBnTrJgn7KDfu1sNG9YQNoPmAKWMpW6v8Vv",
  "key48": "4YqVkaNBuk8t5xN7MhgFmurLEdWirPboAih55MCbtm2XzHGCyLbr45dxHrC6d2QgekoWAY9gLT6w2weMLsRtcdRX",
  "key49": "5CpbQ9unPRqtDqakizjpVCh73yqHfQgztmRYwGmVxUrg8CbC7ub7sJDe9oAPLXT3uQc9Vc4a2Hi5ae2kTEXeFhHt"
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
