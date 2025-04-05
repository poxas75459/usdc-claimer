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
    "2PPzXVvYqxxNG2VusUkCw5pMPe8VovT1MeaQ5wxPf26MQcgT2qd13t5XMnQWF1mMdcQdv7oUhUUCwUGJUdxufkQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LoS73zmgpQvhVGmcKVJy9y86qw63CCV54mR2jeTvoRKzVfq8LdbFLfpuG19K58YswCzHKbTQzdoshtzAKNgHfM2",
  "key1": "66WEMX9JkMViyEvnmj8Hh41Z1TYVTWygXBVdwA6QMgGDdZDMdeGrna4RCyJEELwvBDAPhx3mak1ziYwgMo4dyeZR",
  "key2": "5fudWtqM7A3AZmsjn4bTKdjbB2yzCfwPP77uXu9QmmU99Rg2Rj1DEDhVYLt36ecPXdtA1eoxzjncqXUKA84RA3rg",
  "key3": "5rUgmayupLooNqizFUT8uqQ6UbAFoYgpVHdv58hC4ze4cx7fEypovc2khS4mVUP7WKVPjFmDM7HTwm78J2bbzAAv",
  "key4": "CyRU9twnpq9uaTJQ5Zd7q4eHB6gC93YzSu2j36c7rgCJePkUerTXQavCd5gLoYb3qAQyrVTcXvHsKGHgr8sH4GV",
  "key5": "CkmdH7Jy6FQphEvrmsWJqDXEjXokromXZ1i9vpfpZQBE7ZVE37sKmtFnfbZMdvWWrtevFpnFdzmFkppcm13jekM",
  "key6": "cYcooG2VSoQUJWNwETb7HqbAytRA48csSBVEYgB8kuxzzfCtTawf6kCprJXnGP6QZSouAgKk24iYBAfJuiWw9bA",
  "key7": "3YeHe8raFkvbLN4Hoxh4nVorXKjJRj2J1pEh5WHwiTFs3CeXXgDQHokfyFv6KhvohPTpjQia3WBBUvWNWY7XQwEk",
  "key8": "4TZFHVPxZxdvLQPtJRqvALTqzuiNYDBCZBGgkhcnxxdvbAMXPS2UVUUG84PGYNn4G4csHVx3cynjTsHFcXkK7ntt",
  "key9": "5Y5GGGW2rk6sMrj65oSs8yS1hQeLUctMyserAxCdNMDH7QRPmE4UGgsa23kNZVaRLs5he3ETFQb58GiiujEyVVDe",
  "key10": "5VVvYJeNraU8n1NBBQ7aoJvCWiGCZX1ce49uUYjCeruukNpEujfKJsecLFhRQQznPHC1HmbpG79d4J4FJDoiHkZK",
  "key11": "4KjJAdnVZLjJAiUHxW9GbhX3dWKq3eTcZRqYC1wDjM3xnpE4kKsuNNteEaQziRJybNmxEJ7H8a6raN8Qmu9Na1qu",
  "key12": "3fc1J5uEoXYHMzQ5ayY8ANk5MXV1muoBWbdDbkZv7MnPmQ1Ju2Sp7qch28TyMZutuZfCWAWvCDCREovW2Sne3yGt",
  "key13": "2z1hAfkijv8aVmBgrGWgj7gnPjuCSFL9Cem4DXp1pbSSqZsJbfGvBdTgyoWPfevFVcQrvBCFWo9rU1Kojd7yQyJP",
  "key14": "2JCDfjFaQhVHufAwoFNpjvvj35bAxvEKQrCb1eSMWTTQzPbqPMn7sVs3bXyW6HeDnKg84i6SxPT7pJacWYopk6df",
  "key15": "5WRdpqFzA8d1QqhZZaiWwgCmPW17aoWADEujXK6vdtan74WHJAKCXevGkcoSGbqEj9se1cG1tnofugdSc4CSfgKK",
  "key16": "39fqjJk4D3moXcyV7xVewJgSihk8LP1JuchD4PzbEe1Nv7y5X9KPo4RinFVGWpdBTrUqjGoiuH8sBypeRaqr7hyx",
  "key17": "26LhmjH2uJDY8diVvd4QEhcJ5dRDFxZJWbvHaJPhGAUzzangGN9rWxX2eRKUbzVkj29aw1LGKXu513w2TGtk177d",
  "key18": "4Z6VhRUEbyEXSR6PipmXwancWvMnf1TwZuKp2zo1CcWTkbsqpjFwn5fixaFzhyipdA45nWCAFRsJSQj26FKpdv4P",
  "key19": "457snE421iQeNeRVUEtR8Y2biNrACTef6LhiZcsNZCu3YgDJCjJG9DQb8WdRd87dPtiB6xeLktfJE52NvAMEMdFZ",
  "key20": "2Qvh5ESxnyHFaZQAqSHdPMQvGYJaSLMVdFsmj6ZzxpuNCTAaZrnJ1bnx3PcaZEmVn7WWbKPoMTD8YXZWbGbLMz2Y",
  "key21": "2MaLkvNNaQ6M9rA8FYxqj4zFjB6SYWpr4MqfVUSiCnEhGy87WP6oRaZd9hUCcHhBdgxPef9KzbY4TzrQKn9odsca",
  "key22": "5FPptiSQXgZWTtB2ur5BX5ZqADhNvtUoy3Y3DiWrd2vogEw4GjR4muLPCNELufQjQvtdpJmAQNUi18KtEK2YVgP8",
  "key23": "jKD2CyMrFSSeNYH9xxrbw9JfzkWNuPPvaeWSVNfRENh1SaRYCChDZkGfmjsQmcrd9B6WeKgZBCz8SaCrj5XFCLn",
  "key24": "5KD41KaLcaWv5jAqqgMSVge2rNpe7HkPPqGdzUhrVCrwfp5bjA3761oPxKvE2efYYvXXwFuZ6Mcab61wiAo1bap3",
  "key25": "4KjpLnK3tdQGMiQyyUYhZCAkgxFFSy37Xzpvm3hbsiXEyBp6rTPL4osExi41fT4VsAgTFiCnUnyTrpAmbSqLSU8m",
  "key26": "4AGU8jUf7pCe5XtXWJfq5UyEqPtg2VsLes52wKGKc1HKSg4QjXkS3mSxEkJssabAekGybLf54k5PMJvmNLPWocGX",
  "key27": "PvNBA6rPRYVvjmhG836VTA58r1h5KF1F1qNMhNfDhGP29ZhgTdq9CzzFxBdXtacz6PHdPpVGRmVgk8YGyETeYcp",
  "key28": "2GHpvRTcK3588GctHLuRZwkHy6CD5ZLpJJ2qKV6UjQfonC3JzB1fXXARbekKMeVPHQ2XeRBZBY79DDANfChpGwAj",
  "key29": "YoX4THSdP85CQ9K26RoLs5twBfX2CznyDL1UJBQkoqzUV6FDdABcgxz9Mio3iBVj8Qf4R7hvBYhRcQwyiPoa7eM",
  "key30": "3DuZEZVem5ThDuYE8SdLpw4PxFNd7VXh68pHac73EYXaSzCAk7odQ9gbFnbj9Up5khEg31gWhC2guhDaiZohNVz9",
  "key31": "3XU48xSniUgPQ6HvM1eGJD4PCRm5JGXVjmoTY7k43sQYfKX7oWF5JdwiXotjBk1jLwhaK7dQDfrB7om2HDt5n37h"
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
