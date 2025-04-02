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
    "2BKGSrBw21Cc23vyLiQADe2GTMdTXPoo4DZGGwBAZ2fR43wB1rQFMiSEX2kmBZu1cF6jbskbaRsVgYoBCLEossMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gUnHfyUHAEMU9rM1u4nkzY6PNcAiBWYVFAPDRnjq9mmLXAv9vYa36PqbbSEYzwJBRG4iFEYtiG9dLdBgKfz5jF7",
  "key1": "F7PcXhyzgRxP9mu8sTJyinjhLuUJQvz9St4zea1yn1cFNb7sbv8bUhR3yj5NbBHKeDLiUccZGKjXC1nFyMscnVQ",
  "key2": "5CPcR29xdvu1f9UredTjj6mhXzyqN4N9cHsixzAJvhEapHJgtX6TFuqawVKDr8xX6umwRmESdxAT38B1Md92ePyd",
  "key3": "5njbtiqrcAtguQypCg3T3fn9Rmdi84yY127zEN1pVAcAHHbsKMuyvfUbgXdTXiAndq9BULB5GCfMB7HnFwF2bDVv",
  "key4": "2tx8ip5v2xRAFjkNRE2sxFhpoqHMEDnydQT4hUizSC1A2V8g8qjKNpmaxAmaYzdL7mEUmqAwrkWnKmapiHm7NVAm",
  "key5": "AXDE7oAm9pDjnSWWHZqoUXCXCPrYa9nPCAeVkpVA1iK6C5UH9rsFqeYpJEXqFdiVHFJLkymkXosh6bNdHEDKdEU",
  "key6": "2j8RoDZE2gRNWscma282zgsX8ECgVPTAKGptFKkpcL3kDa1sQQBtSiwsdfFxfYQ2Ws3yML2i4m1KShUuR4FhghqB",
  "key7": "66YGkrc1FK1bAiafVh3TMwrjJ85tpAxVWKzpV5NzeC3AqsRpAeerr5zGebv7LPGUPRzjCu7G7YweEMKjEHA2v1Fg",
  "key8": "5iogvhC2nsDpYWc4ajjJXv6pQeyVsu5V3V9TLRr4ob2c4NkmP19RVRhbptN9xNfwoMEVRbbPt86sTnqzYPzmFat4",
  "key9": "2kwM55x8PjMrB6RCR48Lwe89UaZqEt64SfHyzmyNoLK2xZc2qKHgavq2qjHMe7bYLpk1Anbq6t9rvzXBmr4JmbNA",
  "key10": "3uWBQdw7o7n7tz4xbgQrpokByZgmT34Mp9ETU6GMftQqWWKip5wyZfcXHWYTp9UMbZKk2uXvqur3MCqXPLUZaxwQ",
  "key11": "25RFPRGE6sdPTEXP5MDpvr4WUwBbBLodvABndJ8Znt7bYP2kv9N1NFjiTMV4U2KhGVnNPP3TeyM4JzGBz4Vxvxdx",
  "key12": "5jjVMMybyBY68BL5ZaYaa9gArBU8siEx91Ejkk4LfhtE9uydn7GAV4TRH2pWsUePEKREa8a7Grp8joduMNguNqEo",
  "key13": "2UEs86veEbXTCM1brNg48pkqvZkhykkokzXLfUwaBPGXmocK6fQnUrWNYFAU4K9Gy9tyUoyZt8TybDvk1VagvCsR",
  "key14": "VVgzxTnmZzNHCpxPRzLB5MW3XNiYbRukk2kAwiJy5JH9yAAJRgn7CeQMT1RjzkNLB7n9hQaAdSGGbgW8pfCDJx5",
  "key15": "4b4f3zKfBFZZT4fqAm943HhUNKDy9NtRzRG9NGBijJxKTKMt5VwZcCxJvwLuB4HQUFS59eJnjgML5UG268gw8NqZ",
  "key16": "3v2siYJotnR3TNfkyKx8F6KFfMnqnnkHfRfkKqhCRbRttNtWa1H8X52vScWdV6AHPsbbnVjxoZk8dCSUKCdkrP2M",
  "key17": "1uQFLgosDfgYeBdL5kr9qxNXVmtPAyivwnXRx1r3iiuCUXqLLvgywUBckD5mJ39774R5Bxrc5ZqSqg78LPytaDN",
  "key18": "3tDrdHeUKGLSFeJFLu3PJiaq5HJrd9EGR1RwezfXb1xd7o2rsAv9PhnTxGKWWt91s8bqkR1qEdVSU6RooVWSi6KM",
  "key19": "5qyS5GTyZKGc641o25DGupQwCaRJxp6QAVEWXXCv1zMgLWX5MeGMusfvTtyzafGQrJAtyWZ9MVoutZLDY8Kipsye",
  "key20": "3Xf1rSr9XDcbxncJwyn8vzAiE4kZkcb8FN76EggmaRBHoCDusNzxJju2JJMiv59iSDr9VHgdQLBTqJmEbLsHU37n",
  "key21": "3o22syYdaMX7jeXdX6BeAMv2fogocoHzz4gDPAYMyGsNY8vSaFyRKFTaJoF4Tnc15AEuZi11fVK81JPuSb5DwSn6",
  "key22": "4LnsVjrKpUt7J2TYyyNq87FwNPVKGzXxQMVwGjFxSr8ZNapixEitV4f6Lc2xfZMdrwXizwCAxbjc94fXyvpJ3EQo",
  "key23": "2hKb5LCo2mKyCunMijSjSKfnf1epVaBCu1V8YZpYdqB4s2HzatHxiHrokpSuJKz3HfiPQPMP62PxecyYRfzm8Tmg",
  "key24": "5XNh7fpo7MPiJFnYYHGqpCyHpBeCXH2REa4GXKo55e6doD7GbBWQSyRxsXnz8NAQY1zj2ckFYNQns48tfgiWWzfR",
  "key25": "4aqwmPFAanHYDJWyRQV792JhYGQCUELQ1s5CXJx7TEhDjs32QEtRiYe8wqWtexWMohFrWvbupZ2kQmxCL56y8kRs",
  "key26": "3zECYoZMYgSuNheydccjGtYP7XLK1FjmHnZaXBQ3jfWjS69636fEfeZyLsfuHtde8xduBVhmNg8LykGA68da34iY",
  "key27": "4sG1PKVoxKCUTBq8aDkLSk9YezReFKx7F4peH4wjThBb1pD2KJvAPNUz54qNQ4CtGDk4ZaX9PQfQ4k6xzQxFSLch",
  "key28": "3gdx9vwgQT5nAHvs7YQjCJ5NAQ8PBHbq75yMqVwhLSyXLbd7Kx3P888YezUUGCAeytYSFqZqt9o2npra73kN2MFW",
  "key29": "3gg1KE1yc856DQxxvhjUiVzUhoVjF5a6WoVBH4rJye1APmzx9gKbCYrqmhFpdYu3xEDhuhkx3hoB4XER6TAe4Q6H",
  "key30": "5PQoRP2HFXcuXmnfB3bjJGHVEbinLGU5TeQSqgKB4T2JeYQJfThxZ6hyW9YfUufEQog3UrA6oWWCDwySoZe3Ht96",
  "key31": "5CmWUVbcFpZ4rT3h6r79n3L2qMN3aXgXGjBYwiQjL8gvMjRszNkof2brDVSmbWSu74AsAH1QVVokkgT1j6zpHDXd",
  "key32": "4WnQK4QqUv4SSETfMsbgWSgS1dmh9nwBjGSWTx7V98GGEkmvCgfqH83Euy2eF73f2b4befeD2G1vtWRDbdYHDbiC",
  "key33": "2e7sRysaRvBj7kPHXJvoC6P7tQbH6Bw47k8qRNm64SGDgugAUdzEQ66tyuzwWrrGgRooL8ow9wSk8oW1V1cKzU2p",
  "key34": "22fbfseaH3VFMi4TKqUCwUsJhy8A9svJHo3tbrHwSKbu1awpunm5BV7Lrpe8uvhqFXYECUAHswW6H4oMBpjMwe8m",
  "key35": "4qsB7hP5xHTvBxwr8npYsVz8DHyt9u6PV9awpMD2ntSJtWrCdLM2LyV7mjbJxwHuSZL3oHsZuksAmmRMexyTpRfH",
  "key36": "5ryevZ1SW1sARr35Zrv7zAXxeJE6aSxJ4eJy6ZhjVB94BhjKyMabNNbGrS3pFbBVNpWB6CAsum8RqEG2CxjeHiQs",
  "key37": "5qHDdfuNhHDSUjYFraRftWWKbYN7dsxBBaPygr9LpcemA71dCr2GPDtmfb5UF3z7jnjhQNGoTQuLoVht4izC8RN8",
  "key38": "5Hh7RrFjWv6iU5TfoKHTVK2BmTNkSx7SUsJCkzK9U5aZUeHaozHaBoBQEiJNghUqvQkiW2ZG6uv7dALwBfGrcpCy",
  "key39": "2Nr2WTXwYX94VYfaumfxurK3JBk35Wz2aJASV5uPmTomRJpMT4PZytiDT5w9evNYMLsjgCGWdJAikDQqurKAwTXE",
  "key40": "2henWudn83pNpgTq6aFL39LuxSGaJT3VC3HCGP6a4H1p7aHthiTTwTSsKzFjCsX4nPE8cxtHyyVexoeCFWUsv4k1",
  "key41": "36TgJdV2CAqKbNwo3e4XG5Nq4wpx83ZWSC6wGMgEnpV2pAarhPG3Z6csEZp8vVGzkFFCwJ9XTtwpgDDPL1PpTL8m"
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
