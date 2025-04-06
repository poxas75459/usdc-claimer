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
    "GYuiDVP77AGLw8L8zWpQBfoz9FnrvzRgebcBTkNL5Eo77WfVzEoMQVaPPXFgaGd5uUWZr3CcQK5CnK2Ya4jCeeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XHgp4AoJXb9oR7j8CXGzj9voGUjTnao5WDpDEfuHTayC2T4nV8NekUu2XGotYpWavLkcvfP3vmszJHVVwRptUyS",
  "key1": "2vwbQtDpxsdZbLi8qPjFqjqgimRuNrq1KGDodupQt2jwr8wUqvqmXEPWEwNbhZHB1xPEKzkbLnZyVHCytVeE8LRy",
  "key2": "4eN2NHGugvAaWHM1VJei2HwToVtvUkM97mGPRtcr13gHbN649t9dBDJm6E4a3rRM3ZXFfNvE8MwKSbQv6N4JRTbH",
  "key3": "22ZF599ith8F5gcf3wnq9iRCpXikbX7RnPQRqrN361rhfWErdE6m8wRQhzJJooHzj4kV6Zo91BkJYhit1wXejr4G",
  "key4": "4m3JsWqo2Nnh2HYq68m9WhDdgyRfwRUq6JNLFjV4WxVDUW5ABMkSoUKmvW3AeYhvGEc8LV3ZAgJp3RrrpCq4VNQ9",
  "key5": "2PRGwH1rMdXvhWsbDV9iyhNemLugquLwjWewXAfEwTFEMK5DvCWM98VsfCN2ryUSdWUjzioQg4dpG5xs49kq3CKp",
  "key6": "6uQTnSAK1rDghQbhMktAqVYV3apqdQ6hWGkuat79ig2ipMDK5HrDNebUBQrg5ShB1zJiLy5iT3U9NRbC27fC9Nk",
  "key7": "3VfuErnVyQKihCoskRo4NugMrBi6dATN7XWUXjfMNdEGn2TGinCHTjiVGeUvbrSGaZPEwaQz3k6c9rX52Uqn3uSL",
  "key8": "z2BN8FmWQ9QiC9ppC9aur2EFY7wxogiQb5dRBWqPjLX9Tek95k55ZVCzSwrrKSv7BjYEfRvVrksjkCDje3GSNrA",
  "key9": "4gvegkePniF4HXk5PqaGz78BL6rTTx7JgdTvRYRU7fajyC1DH9jzywcC6fHd1UmL8kUXPKGYGKMzGFU2fXHDmg9E",
  "key10": "yfSZvt4VhQ1VmwUjPM8wwdxCxAfN8QoWM9dkuiPJ99o7qdW2CwUw53ez8HiNmtP8QTxBrMtQAfaM3nzVSfYXtRa",
  "key11": "498VHZjMLipphWPFUVzhYKjAEz26KBP69bzEYqFkY4gJuqyjm4Y5M9RdivyGFhD9nJAKhNWhZnCjv58GKgg5CGa4",
  "key12": "fekRZ79tQQ3Q2iTdckx2cKtsAGBiDTrseH9eo4333Y6h9ABAqquXs4gv9bofgr8hr7EdMC9bFeWhpLRSzQ5Xkby",
  "key13": "1PUSzmPHc3dmq3rKciptmaB8wcM1x5bLY4Y5gXBuUBdq7TJpBboQbed5sp3mxvMCHFBPvQLjUfupqmqAfMeY1BM",
  "key14": "4u54FzM2sU7mDaoKr1skdWqP8K1KEyXijtg4EadL8UvhYKQC1NuHgurbFUUU6cMgmJB89HUrBRCrq1tmYGyU3skC",
  "key15": "5KfYhAFMfKLvqYo2ECntEV2aVUuUcStjtGjMUbXzFsmLZUDtdvtcnBFYmjksHf8HNAAk7Q373da8Y2PbYmKn6YE",
  "key16": "22mptnYKZYx99G78cWUyUMZmSim5xPoxqhxgdYtTzSD5R6z1M8MgK7ropfSnYfaAtMXzFgRnAFtzUUamPhqhypqB",
  "key17": "5TfEudBBSAvkZaP8am3JMSbaL3bbJQnoT5EknJ2HLCUoxnq4r5Hb2ZKuUomxoLmGTb91WyDMSs5tC1AHHNCcaFNv",
  "key18": "4BRXQnkCi3HCXpwxF3e2A4sZffKJ2QGBTYjM89Cid3ohTUdHtKZ9TNxt4SpAYUvPBfoHQ9PvS8zqF6JdT1YNtrn8",
  "key19": "462NUKZkqF1W4AdviwSqdiHfnXRTFTQKwQtJP1C6SL4oEncNKU61yreQ4PJB6HtQB2DjP14yJR65o9bSiSvw4xnx",
  "key20": "L5MtnemeaBrxVqmibsW7EfVqzjRdVuwp2Sg2hVLdhnUXKE8FmWbypzDZtChdjk7SyQzDXKUdPDWkSkuGAYvzXxD",
  "key21": "cVd6T9RMp4ySTMRSzVT6VpuCGPbFvSquehj7F3EjTXzuCJV8CuseiiVp2UJGFCanE7YDe4pCgmiexR8UXi1BunL",
  "key22": "6454ywc9RqKMYEKqGFLih14fRxjNUReV778Kd2Fy2VZBk1RjYBvStree3iyebSXB7kR1qPKUBHLV1u8vWBVyHiFF",
  "key23": "3dMEd9fQkDofftsdbnVDcTrMdDoVrQWmLKgkH1Ve385H4zN3o4VDqE9Vx5DKoGFF3MbCegEiTiX9fKuQorR6Ls5N",
  "key24": "3sPr2Ze6S452PrJaTASu6UeVm87H6UYeTVtermf4YFRa4QihGaCuQXa5167vvNky3w6cpZGSpJJMjaMu8fKNPYDR",
  "key25": "4uv9KHuhEDLGrC6weunaih9kFw7dcCdApwUW2qFxy31G4gMk1GeLaEM7heEku38hQFE3eKqCSYqss316pDvHuB51",
  "key26": "56jhrjYHFpzNwJqArbjG33vcqkgPJfNwi9jnQLhpBGPq6TgvT6uuU754WGDwkNuujV2Anbf66aqqEB1ZHF4EdLF4",
  "key27": "7v1ua1rbbS88gjY7XimwPpva7EkMtFsqwHiSgUu4jXRChzRiFgnV2KPvsDodjWk3C8enJqK3PFcGhQjhzSNzFjZ",
  "key28": "5RSqK9M4rrPfLAxdytov1hLMnZ1uXXu49FZEHcgJZVnVFTtVn4JZXMUVPf4RdJ53pej8WE1kSXNtA9EKXL8zANQD",
  "key29": "3t1mNyGF92N9LvpycHvsKhQ749JtfW7reB4pqTsCv94RvUhpUGqbWRvAmh9XX6nczT74iWuQfrURGeirqTdDBhC7",
  "key30": "5fkb2Z4kNLYeocHBYyoy5gtaD9HCzV2VWbxYGb9j7bp6hMCoKNwvNMqAa1NBdc1harTUzc4ptDEoDDFvZBqFyEbi",
  "key31": "2tzdZP73WrSMprDmuk8zRC1VweshcwWLhTJSwU9MqPNpA9jXoGGLis8YF2Dp4u3jbD3qBapwikKRPZQc2YQeK582",
  "key32": "4BNrarvLjcw8LanJCn2FTTDVctXZKCygVsgwEo4AuMmzP7wnvoD7AHd2FjGB77ZjXnDth4oxEtkd8F2DCtHNmj5W",
  "key33": "ezhSsrx8XQwxdW799ETnaBRa6UaCVV9i8NqE2XfA3nrL9yb7HKpgpuuNk292MAcV8xqoKKuHzC8zocvi9QuogZ4",
  "key34": "K4xtn5f4X2mAY2DqPNrz6TZybfUB9Rh4dWZmycueJ4sDwieSaRftDrUiNW2iBDSGMLnFHhb2Y6v4brDxZFMvsK2",
  "key35": "4JgbVQYekQL3MGqahcazsy7QeUDT3i4awDtxYT3tohzxugMDEbQ98WBSh9pzd49F9dWZjKVeGN2pwEhY62jdmbcX",
  "key36": "5mSxn1zJPX62uBq4Af5yLNpD51L2HfqtyusyzmLbwuRGUAGThLFkJsWaGdKrUJWq1rdGmovA1r8aqhtwtvugeVep",
  "key37": "2nwook1rTfNGuRVnsvmADQYtxCX37kT7qyG6c3QQg4GEVJyP6Q4muoXefBQiTeSYgELR5jHaz1xyxHS24xHXCfGR"
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
