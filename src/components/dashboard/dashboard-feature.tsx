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
    "32uAjPFdtQLJzDgDtcUJh4DB6CavQcfKJHWhKfaHvGb7bQ2kbKDHBLCjDEv322uVh9a1XLvKKoeFi8Z8qGvMS8wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29nGfa5hZtiMyxHH15RuaF7aRAz74CPQAzw3hZgvh23TrDuH1j8oDNPnV4HbS17Cc2pe84rChKsEheyZXt8fGXoe",
  "key1": "2AShbya9iDMkQ4vQ6SFPmHijGkeatA2qpLDdDLLRhADPugQNNPZsS7NW4Fq9tfxNujoFzpCGaZDGGGYpjmyypUmU",
  "key2": "2dvpVWjEoGk2uQrLkzAAyi87wdJtixtQpqNQdsUY2aqWVq3s1NSa2HoSEvhm79fk6aFbhU66J6jLEfbj1mzdhWs3",
  "key3": "3aPuFKPHHYJrGJ7JNXntWmAZyZFJNEUfoj8UpV6XpAQHtMNmPVvXeLH1xZ7ECLvxbSXm9Ff1M45CRp5DRbqW77PU",
  "key4": "mFQzfrhjnuuqRDK7E2LzuhSDDXcUmK1d1eYy6Bs5nckvnEbDjmLFg2EcxesSa8ZFRAqJnjQiv9S7rbvo52AfGQZ",
  "key5": "kkahxPNwT9wxcFEDnRvb9rHLdPrF9yarSfw597E57gdVw22H6gvxMCYdyLj2CScsXdGc3iKJsPT7SWmZUVNgGBi",
  "key6": "57b2Y6r9PorpH5uVpD9wfii6VZ9Ks25wgeor2qQ6LzU8MJLJRe43RNcRc99nsFPzdhBU9sSaby2oZd9nDgkzuf9D",
  "key7": "ZJuwKYCPVhf4SWh9hbszFrXmDPCHZfBNU9vU3JL9bbvHgzkB6YRjHPZMs2kGuwRqAnu86BPgGMbdHqXgqbwgmwR",
  "key8": "5s7ZrJyHtx4FmP7UB9izQQi12TZj6tzeQYZKQ7FJrzR3C47AwE8c4CwekJwMmSMgVh72KbAZaMvjfbSpcXt3kqf8",
  "key9": "3FXsCHP8TWQX4J4K3HZaPPCtHn4LKk6MPktWHWBkaY4VEbviFY8rBbqTKhCFDzY5JyrhM4RhGGXtxyUTeWzsGsXM",
  "key10": "3wWZh1XFRKQhMMzhPwUfW1P7BjSapF6JykB1HDySvmjWE922RtWWrZqAxK7WsaytgwGqNSAMeLsYmti3LGJ4XvcR",
  "key11": "5CT31bxHdi4ogojPtSbjUMCcbmRcNCD9QpMmVudGhBcvQyJUDp6EBHhzRegyit2G7DW3tzwWjDrFxD6zXFFsTB1y",
  "key12": "5X1xeMRzLbN1hKhNn7ogyLJsTmgDvUMpN8wdKuYsZNLgiLAwFRn6ktiXz8cAmKDd3m3P23zL6YVmTUcfgTonLw7Z",
  "key13": "3sMJUjmwYQmbuhcQbhJBU6s6KRsmbua2xPfVVob8cfiQdfUN2f9UqH7z8tkkx2R4DPPcKBtxcmnBaQzWs2SnpqDE",
  "key14": "4tYsB11BdZUhyEzxKv9CWzrmCJyggo7QFZAExCvj4Dxzg4SSTUegRki2APvzJL71VqN5y2vKLCAtcK1SMRMsc3Q9",
  "key15": "2Xdj9P3FyjFJu4RWCfcAjLzZ44cwpZPzvqPTMdPUnumfYMxucXd1nDdrnZDZ6cyyyNdas8F2rZHpkEns8EHVAe51",
  "key16": "5Mz9xwttqR2tZB6qsAFGsmsmEMCvQs7LCMKLagSr8T42AgrdRKKNEaozoy41dHiXzTt8pH3bxEQsirJgcg8BNH3e",
  "key17": "27FeLysbFAyjnyXGLiM4YPH7oRfNRFZtr6ZjUrVS2zk8DkdTvdNhYKgjqwfsorHr2j1oYYoqL9sGD6MSBGZqgUHN",
  "key18": "xAnhiQS6N2kQQNkoXUf7gNdSArCQwuvsw9oK2VKqaWLYmEdhsEYvbzWwM6YqXsuDrPoAriM3PWKztf32zfPAwtX",
  "key19": "521VrebE9LMGudKTMkmC4qD43gEYaHUbew6FLMpLmojKRngN49NHtFucKSMMpXZbb4vhwHXFfwoFHHzGxmio9b4e",
  "key20": "2Hh2NzCCaaXbZsye6bjs4fWpa8uQkzM5tHaJMN5zzPtfTNq94KV2WtqPzoqXKJUgcX4TLK4N9cgmjtYFhgxovQ8F",
  "key21": "4Ru9scEvLo9e6vsULXsZbyQ8nDWRWQKd9VYiRW2cmAPoNTGELvXj36coMpb9WpojJDohgNZ2pHB3b4ddHSfhG8jQ",
  "key22": "yr7Akj6Nih7cWrsbUsJqXr5yQ6D5i5R7gc1jm8AnQ5ZfX68wAy5Qhemse7vsBBSxM2CxN8D5LPPbuVPAFbyut1V",
  "key23": "b4ALLGgeUqWBABcPPhsbu5ASt6LM68EvMBLjBTjZgcivNnxfi5FKxhT7E2CBgke7yZYUWwgA1MfTTBGfU2z9zat",
  "key24": "3mjCMB7uXZUZ1GVp4e1RV1qewqvf5QsB1DxT3LJbn7Qsnf3XEHUHPh4SQgSBoke78bepkGcEMkLDbmopsaSD87mf",
  "key25": "5bP8GixvEMESL2W9b1YkDabRzgj5qgMrz64YDDSgNELCufJvxRgdbRo9WMPDLWDTnRZ6QSWX3Umanqo3BUMyTXDT",
  "key26": "bzA7qK6eZ4FJ8TTNDCHDkzUb6gAMMjvAV8EJMZUrYCGB7vBgzmph7goQAoK5j2ktc4aVuvUxwRydxCPACLKyk7y",
  "key27": "3BNiEePniD1T9eDwfvRF8LNx7FTPw2uSM5o8KXa9958otDXqAKCJKN2MzPjFwvCMWqSumSANVNpWBKCtWHjCPZna",
  "key28": "75zdi8bGDNKF6X4pFGM2834vpJXi2HjyGWxUqLHwEc4Rh9wpWcCEHguMP1tB9BtKk9itntnGA7ALSLGpSQjSvLi",
  "key29": "4CWuGoKRkb8WyUmbrcUy2uHkoThhBrvd7vQ76zkU4jhk11Y6JZpurYVt72r4BSV5QvYsDHZvP7xEDBqvXi5kvtou",
  "key30": "gorzcQDMJbgCfifE3C9CLCDY7PGgBg8WAhvsTaHyDFGH74BahSH46S4rCy6RhPTV9fVJEgomwyWXF2cd9JxVzNQ",
  "key31": "2dig5zjmH8MPSxBLGSWF3F5N2aJw1kLNSBiL4fWovtPRMk4ADiGVfqnps12VPSdg679RehsYZA5a5MSDXXogMjWh",
  "key32": "5cZMXuPcM1tBf18ZLCwsb7Yr7LJUaZNFSumGtmcsiXJhpDBPF81ZGMSehQRfouGZuYZJWiUG8XDetwktL32Etf5K",
  "key33": "4oornMcjuYiA2wmhXE48A2k5Z9T6cBqPiNnLAmkBdy81cjz3fzZteDBdfgoVx4Tjuz8X8u1kxaXdpQYH6ZGCvsMU",
  "key34": "Kp1bE6yQAcKF4s4uMfeQT3yjx7hBqyQe1Hey97YKSSqALPdVSntWyJSQNFxszQeHYFopm2PPQk6Ck7vqwavnvPD",
  "key35": "koPiXZogT78p9i4k71DCarBGzu81xBCGDihYjsQDcYoo1esiov5N8TFVZNXJZbon912ev9mE1cfDwYeBs5Hf9y9",
  "key36": "3ztcd2tmMWGXzwUiwtcatTt5JxurHBt4M6i4M3oWsGeZueER67JZsmqECT5wWnvNteQrybfVMoiVWoxJ1TGMq5rS",
  "key37": "aENvTYNMpokCRJLtP3K54QKhRXjcHaX7dpm396Pkv1U8RL7UcmnXkT4dxPTvt5Vs2prxU8FRDoi668D9W8tW7mq",
  "key38": "2Sc3L4aEcvhUUPPjX46P2ZaoGWmzjkKRJNBUbCb454HZWSxNem7aLMKzQt9Ksb4LayCCaW7HCAeLWG9nYmqkDYvR",
  "key39": "4HM5RE4Y4dAgRnHDhrfs66Nb3NxCkpUCZ7onMg5LEnBSpm7bHyjwYTjFw9Fhtqec3VNbJFSXUs37bnhxyuQA9ctu",
  "key40": "3tZxsQipuTyS7n2nFNHXnxqYM3FoBHUSY7nVjaPH2kWx9bs8xrZmPGKRUC8ZiB5s7275CSpcLzavbSe9gAEa9vJA",
  "key41": "5xFRmnUhYRLvYtV1CzP3yZ5itXA2vTFat4zMkdCLYexjVAMzUDm5gomBNz1nLaXVh6qWGBfj68wMqF73FukbWwCY",
  "key42": "3xyfJf1VpGKHWfAsTBVSzfYcXizno7SGUbuMCX1RZm7VqCMJT9zHJtfetcAicy1g7Wp1CakFVuaCqo5HhXMryGmD",
  "key43": "3TodEJQ7SxoWv8TFYZStTAgzo9QhWcF5SmCPG837thBT7jfZncSJpz66hQsUoCQwgGRiGf1uLHB4JMKdco7Vd9mi",
  "key44": "3ThQr1qayBsw1Xjs5rmRcV5z7BjCCPo3ikT5ghZwtnL3g2xuCZbUEXcd5uMKvx3Kd11J1Strq3DTvY8vDhNC2YFY"
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
