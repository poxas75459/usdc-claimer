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
    "2fQu4GdSVL8KjbvTkWzN73YffNdFqMqayc37sPJkSRnWno5aD6wruBqFuNU4baFnSVVie5Q2ZBW64ur9XL9U7tFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z98np5L47KaWiHSgMxw7TNCo9HUEZaAjYzWh2vf51ENSPXtxHc2VfWwxdLnYKZGeWczRP2Rh1rKf15wYwvsAJLn",
  "key1": "3b1enq2JrX9ped1TKt5MNmupuejPQgMyaV7hupY6rm5EjmmxFW6PEvZJvn3bg7fh3XV9i5nKqoGUYEP3kGRCgj1N",
  "key2": "4BCp9dArfknjXdfVyVjyEMBka7kig5JVkBzuxj4BhKTZNmViFEBYSE2X3jbE6FZ9946nqcRCJUChDN5mzEVVGShr",
  "key3": "54BgUfFWxguRCVnPShv3qHDrut8dbayLRSy8LZHn88QzPTaGMDA9K6J3dfVLF9ynKEousSvB5ZAd39uZRrPdRjqH",
  "key4": "5egjZzAo3wbnGTZybVQ2bELUBswXqx3wNqbZ45PBVtjPuJU1FV2QHozJGm9A3zeP2UrEztbcDwuuVdqWhBA3N8Cc",
  "key5": "2qLmAnwqBvUzAgRxG5sTkZ8rAehYTPT5JRexQPyjGy83QLyhXQ2auSVqZRjokf5BKT3Ui3SCZ5RCM5Wu4u6kn68T",
  "key6": "gyQ7HygS13EZchAs6p1XhFKW3g8U1wdfdriqh2zWsU7ST7vQhBGMPZ9ubDSZTTBJhQdXQY9zSxx5JwgmvdgsCRT",
  "key7": "125s5SVYRKoWK6PNyedprNKFBdgUp6o696hoBzbX6y5pi8LFu7HNoDZ2pt2sSafPpQ923AzALDgFXocDmDcTobhe",
  "key8": "4nyDbboGf6Rgy8YGoW9Li6nrG6RAAmtVZKcwVXvhgAB2YbQGLsgqXjDmHgG195kPQEYTY3xdz45XVnBShk22i7qy",
  "key9": "32GH9HRF3uQkivZMjYzEiFvz8B6aPDTFMjP2vKHNTQLRJuhhdtAGn3Bdr3WUiGZLooWagmWmQ14XdohwCPSfGh31",
  "key10": "2AK5x7zATfMEbKxZNHR1xUD4TKxQbJoKr2coJVSD3SKpiZxqtdEFuJBGHTjZf8m5mMNhSTY6nWNU3fophrn9pc1J",
  "key11": "4fEc6xdbEisxhxqwrD4jemAqFWysycVk2DfpUkagEsQYS4PgDRgtgrFDgLYPzmS67sCfnJi1hf2S6nm8dwFnJxLD",
  "key12": "4Pb4HXHV4X9TnNL9ygy17ssNnoEPDGQBmkGJSUVdWJyzDBJahpPusNTwZWx835LiQEMNmzo3s87WWZsLuyhV1W4F",
  "key13": "4U86Uw2mZW9EYgG1wPdzY8CFeGBMKJyfNH9LqdteJSQEHFb81nun9Y6hPyMy9kkfzGa1VtpCyao26gxNY3RUKJrC",
  "key14": "3uFG4N4mpXLmbXKfCFR2N812oJTYRRk1aXKM8fKwmvFmPVr8caS69xvC1mnA1irFxsAF1rPJyJsY38KpXkytf5bM",
  "key15": "3jTi32tLomsCNL2pKbstHhBQsbaZaeGcZ94ALdcQjVxYaJDBvqMoSJuyLWVaWu7R9T5gkLEPejrrPoE3hHjE4nqr",
  "key16": "2PAvuigT5tSb8axXbEUJvBPypXeNXDoTUTNwwWHdwsqn34MfXQU8Ce9nSSNAkmtFNwa6h3YEr3Sz3RZMQhVSJu5o",
  "key17": "4bZitKa84ZMtbnrJ7G6SC5swsNHeSHXXrKvDeGURmoFPppoVDd2Rq6UXnG6t4K2pQ7XSTZm53zQNVHrVsWjTDZYk",
  "key18": "2DiBZjCgcrsfuYXgHhvkBSYYWXM7HhK7ekjdRdPGxT5DYiPjJwPWbvnSPEyiYTztVeMBkdzVxGcLn3JjxhfXjQ8L",
  "key19": "n32cU2cUvN34cPKGitife4xba4c3M8DtwnniAX3hLtzE7RkB5nVZLLAjXHtDVV1v8jx4L8Xefy2SKhzmZF3GGiV",
  "key20": "2u5zehJEMoEBtwQ8RY9yFXtZ7eVeBqA53aJ5Aw8XWPRHHW2qD9Y98dZbcrEuR6FZY5hPar4dhdXHcazbEVvjgv6q",
  "key21": "5FeRNBgeEjRqJyR1CyYLbbgaASv7GktBwas9XMpb9mDy2KyrU2EnpciLaVLkxtSfX9SoN4axxFBa4PgbaoeELBfd",
  "key22": "3kdNd8crQ2RjQEoL8b7KGDoVz6hu4gL6AGfmrUGtuwGjxKJ3RwSz4e9kGPNqwG2QUN7w2bzNMn9BRNmEZj4ofLJp",
  "key23": "86FEW5j31Q2bJtbhnRo9Mjfyi1NDTjr3x2xhk4A1crqhzUnjA83nTSGTXn7NJM3pJE521LCMfnct6yNvE6CmyKo",
  "key24": "5S3NhAs1nc9dEsFew1UWW4xGCJhBpVHaWxixM1BDR79oTanxstxupEJv4FxANeHYMPEQUkrNo66TDCemZD8vvPiv",
  "key25": "4XTJWhLRaTdkYEbvRviEAE5sJHgkpmBNfrwtMw7XLaqiSS2k4ej8Hu3QbdkgWJmJTdiPhfzhW5eTmMZQZTC4RAfm",
  "key26": "21WCGNW593RzNFurnDHmkq9oL4sr25pfiyigqJqabkLEbzXSxDcy6VbhN7f3ojt9hQ4PRqP3X8iH8BwEMGPxomSK",
  "key27": "5mjtoUAva8L1NM9t8FcLqCXgF9SvE58YUi3SVwKEByxpPtqqm5oNCjXHrea4jUZcHJDRrFYPErRxEohKtSfNaCg4",
  "key28": "496pfHdAd9tMzmCEDNJAj7CF5pabQDJUqLkcqecBR8VV5jurbojUSfJky7E7apHc9DAFhfGoC5W7y69USofrKL4t",
  "key29": "iDUFT9WzB9JB9ADUarAaM5M4evuc231gz5PMgP9J8FYEUTbgVV5LpXX5GNDwVnhKU2SoMbsYruBbPw7La7fcPmg",
  "key30": "5xrJAXshoyX87yqchbccv86VJ8yUJ9BfiYNqpkmF9DkUXzc2UtdvKBnntwYdYMQB4v9DiH1rwcyc6Y95DvKj4gxL",
  "key31": "4eyd3wBxrmwbxbgEVsfpSEk96P36qMvFrzJ49B1yxvKJs989QCtKdsBdkk5YPg31t2LMpUwxaYCvbKM4bu5cvRTG",
  "key32": "4Z9uiMjmq5AVHf73FocBPnnwbQmjmAvmPHbFMYCurnzJXxf23C4EahrJun6ct5br3GAXXX7L1aL6uDmK9XH3Fy3E",
  "key33": "4Q4yPx5vtd7QEDjsS9hpavqBroC9iu1CUANBNzfGrRavRqPhiA8yyYFzxnDqJs54ANxXdFbiGuKG6oJrnazrMCNc",
  "key34": "9HrR4t6gfqwomvzRnqAh9HXW8HyQNbvP1DpdTAknKg41nYTZdz2Jjfu6Jwha1bF996k5hDPiNuWhvNQ32V2BPyW",
  "key35": "4AT7mJMzqi2NhUwhH6cUPWwUXg3ZZk8gE2Lc7QwQ9mDMyC98FWiHDCv5JbnAMv4YzKzFx1M5E3SjARW3VuFdZkDG",
  "key36": "5noj2QocSMW9GZhZht1cV32BsaZJ4pufm4YEhYXtPf9i8MTh9WfzP7mebrBKPEZe6pnnDG6kF4GJFwUbzTvM97rW",
  "key37": "3dhAY5xmgBDtcZLmdPW9PZ9MvLMiS2xcgF99XELZAi23DtYRzMcP3zJs5fo3Xtyywk6hd7kCoa5etDhQogNPoeDg",
  "key38": "4FeMzq3DxjWV5f1THsRr53T9y9FxxjkAzerVa77d7tHcxuz7TpK2uwX1gMDCC2ifPTZV7ayz5eqU3efAfU89LE36",
  "key39": "b9AcBgYqHezBDxoTHFa83BMvTswaWC6nQUeSf5qF9tQPE4M8yViNbYGqmWpsDVusqnQJkdUM3fQnhvrg7jaEnEw",
  "key40": "34xE4taJ2pGoxF5EWFidG6FqCNfGoNxyiZ26grXDNYFfZtegU5xFYckJwz1BMFnK2tCtvY867ZjqgMG58kieiEQG",
  "key41": "5VpF3HkvJQyef7at27xLjCdHkzefJCKF83BLrKR1Y5e91pAfdm2DXcnQJHjBX1w8SteGeK3L3cEtG4yJQvfvgyHX"
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
