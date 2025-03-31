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
    "5X8ReH8Cq4hg1PcqF2yGdGWBPcmo5kfy8XHH95ktB3uX4Hp5JLcfSpwVSN8QwghWKveyFNt4eZbEFMbXbi9saFoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239hcWTKSW3MNpGcrWrfRSe7sDiVkijMd8JWtWbDcP8qmnyit388cLRX2GZPgSCAq46qHHGek8DvgjDgxt4bKNJq",
  "key1": "m19zATShwW6sz7f7WgoNtXLjnWHUbBHbm6q5ai5hFkHgHnbRjZWo6QQXr3WfGVxB9JhvZLkb65kdyXfqrYz7QA7",
  "key2": "2tMaH8kmjUFAmDSSaCSWzKrZVFHxc3nJ34doEQfvvTjVRDLfUfkdhhw2Sj2WN1GnoFazRysKVJAHBUpVMsw9fhdN",
  "key3": "2EDnZyLYdH8cg534gsrx4mtMpSvZ4LrWGZftopAEqMvptFb5LAZDbhFtZ4t5d76WY5rbVbTepNYcELGmc1ugVgFf",
  "key4": "4YhrJU6Y8LXYFZQLQ95DVvUbtytnyeWVZFKQkN6KnRCMwszzLhgjQwSSD5fGfgF7PSHBgAD7a585qYeC7bDP6hF3",
  "key5": "33RVWDog1H9Tpb6HE7tgzNvwKgaBHDooe3UH93fhQRqHMQKimhwm6FXejWnTT39hq8jpcUu4NsvDjcxRcdQrS1j5",
  "key6": "3RjFYVPVHi6zSxb3gZ7cLApzGczkUJmrVg1JwSUuwLiy5jLpq2wm5zdYCj5zcMET4ek8tngqibyyZ7d6Wn6dyDYn",
  "key7": "22PZ4F4mg8sQTss97YUimgqi38pgWg4r6A5MSCNdTSkzsYUoDCYHxnPeq2zKFKV1YVnTpJRCzmoMMnXMk2AdALLT",
  "key8": "4XCUrHNkgYMMqSvwHyb1hh8R37JAWC6vPWizrcXN5CEXtESPf6vHHQukiivzYZ3EaHnQyeLBCUKLTD5wCLYYLpsc",
  "key9": "2D9X2CkP6xyoR6e9ApgNQ5cHRezfHC3kcxVcqtBAUi7N8WRnePLybyjRw5VKSXcv7tEFigDHJSvmhTsnBjJzLkmg",
  "key10": "3R7guMWDBpkXUHWS7zTSDKHMjEXuZyeg4NpYpwUoGASbBiw7bjmLppBrrQNzd8yTN7yx9JoEevrHgU6RoZcL6QSk",
  "key11": "3iK5ZPhLDWcm12ca43QvEWqz14Q47MfhDfUVyELPFxwjZMKcteWJFxEDF4riVEMP7sy6d2Uq7cBf1Thw2x7XZq4n",
  "key12": "4UPnfhdqarZco2YCiEA9guz2reGb4nvZkS7b2aPLaVGoWuJaAYRVxJaJSnfkJ4FhKuA165929q1Vibq2qzfu5DS",
  "key13": "3kWyBPET1QnaNTLiBPNDmrcqKcUmfma46djDgJhwUU3ksWNvEvSKyNiEnxPMcEckGX3ifdEnNGjEzyrTkqcfXwaf",
  "key14": "5XiicXFyX2CBgNUUmDYE4tFg7R1PFepTpLFJevoqPNeWiTcfkSkKPBLxTPxs6JYjsMDy1xn7PZByM4BgaoiaKk8f",
  "key15": "4cdLwBwczJMgV74NBZQSh5vtZ9mDu5n49MaRtrNFzctFFSXmUsPBKWA15Znc6nS1oprsFmGC8ZuVXPmmQXTWTFL5",
  "key16": "2asJbjEYJdQrQGF4XJGeBmWT66KgMGpAdxujBDwLJjX9SLmdrZ9BxwJ5N9rTAz2sr8nYUvzTyo43JgpiD3SeMQoN",
  "key17": "4kJsaKcBuko1Ty51ZzRXBUDD85NEgSh6TW3up1Fynkd4rXdokhriy2EFLL9CNUMaa833R87fGTgaGRH7BJp3JZKY",
  "key18": "5MmA6HHNeCkuAQ9z1sSZiofbKLUWY5osqBs9mQFgkppFLj7KrmAJ1qt7CNMn1NzDgpLm2Z83xahH2bxf4EnBo39R",
  "key19": "4LgrUZeqAEF2FM9bHFAB5YTPSaM3jWrGGLKZsPLtMWKYv4pcsenheqkPXu6mhhfZUxgBnApQBPTEwf86XUSxEygc",
  "key20": "3Yrt4Gzg6jPDrwFCDXtN3e3cHb67XT9rTk7Pu5Ed9G1xDTjCDwz7VXcuPVaS2ygTN6mYiPForuv3XQkzosfYecTJ",
  "key21": "ubeZbxgs3fiZEnbCU37oPKj2vj8UCUhBYkUeJX8QXDhnEbobg4avxLgC894z8RB3vMq9N9Mek13YX2cNJ7CFhMm",
  "key22": "35vdNwd5tgN21SuSrcA9jdcCAxWpvhx2tz2vVkBdB5YyCfuHw8dG9xa33PrSP4rMRrVnmYiumb28T9APiGaLh443",
  "key23": "2raCs5iwouKMwMBsFsc5JsJ82xebVEQaMVix2PvNKaubCHUcXdCcAVyir7vz6gdeXnf7wQoTfi8uszGq65U6u1fU",
  "key24": "5SajKJdgtidh9EeFCn1MpaDXnGHEtmoo6dCoDnCdkCm9SkjrMe4UYSZxnX33dxFaqYdMqFvFPGjmiYdTFdRKyvwP",
  "key25": "3q7n8YWhwthiV4Jbcv4oY7NuaMtrC6hZ4TZFTZSLxnPYwxWnmobfiQWgJLDGaNefiQnYAy4D7UdGEtXgGRAHHFpJ",
  "key26": "5EC5ym4omjNpWghjd6hVxvj4vdA9jkAKkUoccBdPVPzASugZai1uvNbi2PGYcf3HPaAj9wK3XimGcDJ7e3Ze1KzP",
  "key27": "XAihZgoecmpvoa6PtKDiK5BLQqhttUXywDsQGniRqCjGUbX5vC88e6xD1EqDsFZF1pLvx5X5RBsRcpMEsCnCXua",
  "key28": "3anz8xMJdyfMTfgw6k4hrZ7Jzewt29hFgimc2HTatjrPbnUJjw1RhY3fwjh1mTnRxRHJPs17LrWxszW7E91y5aY8",
  "key29": "4dy5Kn4KpKuW9FvzhrP2N4XwrCfZ9SgrRQSHLogSP24d8uzBLSVvXvUvHtsXmfxuuLS57327dQVh5dv9BNcfRNLG",
  "key30": "2fxuVZLjXNyxCqzyHPhRkrAmHNYUExoHdPF5wJo8yPo1VhGzWwtH6eCQp2AzZehqPPzTtutrAabUGsYB366sewYu",
  "key31": "4k9EkGwomFVz9ybEhkU8qpNvC8JPcJ7SVgjCBK15bVPHHVDbRTqv8u15Z5n7ccxdYVhy2rozJ2DC6Lqt8Kn667Z6",
  "key32": "5MaiNvw6pX8wWf6DXruJxYhXoeY9kSu9sbdQdbpNZkhgHWSrMSL9SeJwixrJ7nBgsGF62zzaBWat1n9omLNVor17",
  "key33": "2frNe4wwDMzV7vJRMcHGJNP2PHRdy6Qz7eXwKuK6nLiUEAaYgQxMNpgqKEUJ6fsbdHcg97Ga36LQLPDp1QpNU1z2",
  "key34": "xKmL3p1Kq9qfK6Qo1FodViEmL48ryusd7Ctur3hVKvQ1YdSC8nR3sJBqGozEv7QkMrZnza6HaVdePuonqenjZne",
  "key35": "3xCdeNh9Q98DH1rkFvBeLRq1r4swi3zQggpJrmjswA6TV2uoVeZSYb96VM4ncdr3WNiBKa3yMLFq4JFGSWHkm2FM",
  "key36": "3vvZhpvbNMf4cxz4jwHDZKU7NUkgs2jRJpyZd9jWbXZvbHt1HDXgZkpiM3faajftaHMZo9jEuKnVaAcS5FRJxMrC",
  "key37": "5VCidcmNZuFp9Zig3MnKGV532WgsvncqZJ26ySzu2VtxWso5mScNHcaKp5E63YZhd3HqfguwWuH6LmDXVs6xhTGR",
  "key38": "ZJ5qfDfjc8kv39FtfsJTZCCrjEdZxYvJQwquAiygDxU2ZJgCBmQg3fr9ZxfFnA78bhcLb7keSc2ajvA2dmSbtgv",
  "key39": "5Wryr6iVzrqo56YziNpjabz7Wng5dDyETyDGTxXRrWRjqBfw7CqhoDgGXys359hLErtGaHNc88NcXBDC1syKNuGr",
  "key40": "5UMB4Ej4fvHsxNXnYFNMFx791zaVwfckMWaMBUxthgDAS41hjp7dEoCxBzJ4ZkodETyffW6y7LSTBwt9dZ2HSAWp"
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
