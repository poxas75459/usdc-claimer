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
    "4NxMtU9rXb5CXF6L1JGq5x1v4trgse4AMcw7kgrUQyprvkjGmQWVZquLVg2GWqq3bDL97styNomHdrN33vPLBjMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFSskhp6DGosNEWSwVVJCDTn43XTtckmdkFLUwfJixhJ26wzHifCg8Zyfry8dAG2WdzKmXVcQL26dbzQdpvyQXH",
  "key1": "4nViVYD8UinYVdsR4poiYgdKq8EdQbDusauFdt7NnqZ8wyQ76iuMYZJp6AAxdEv6KJN7ytpu6rzZc2aTSNu5Fu24",
  "key2": "5XhwUrqLBHpYVAfAh733V6gPX8KAgFEFiL4ddLQtLJ8cRumq4YksGZfVAwx91XzjLcP6w8EX5vHueVyxGcdzVFW6",
  "key3": "2RqnWKHKF6YPW5ELs1CrF9Mr9Dk4AMojtVLn32BwiXyPTCHjxs2qMmLBycDfroTyA3pnXbRLS7WfFn9AwFytkngX",
  "key4": "3fuzPtyHd7RRrPHx4eCmQwpk7t7fw6oAgafPFwojnu1pbxK7CirQakrJr66NLC1L6UQAzBCtnBVwHNPLcxsCDHPQ",
  "key5": "2jbQr5Kj6wmvGiiuZ4DuGMVcr9rvfuVfgQRE1nWyRSUTvZN1NFU67eiJhdNne3UP335NwKz6WVWnt37PiLKCPyFY",
  "key6": "3ANQA7ap9gwQg3PjuEFRVcCyJHK77fyc1t1HXxsQ3JLSLJa8wWpAiPNM1JYUiknG4HaPmNAQLJy1PnLSCxKZk4em",
  "key7": "4MyA5GPfABzBaqZpzyALba4CEQXqrqPA7UEzQzJ2ehxShSo23rA31m4J86pfBgrg14Lnd2a4UMA7MeJGA2xFRBXY",
  "key8": "3xkKC67Sb4vinWtJZUVJjjpRsbxUBrz2sxkD7YWzD6sBNKN7FCoLrQvxjY3ZsYaWSqroUDMcZuRdHSg1A8pJZGFv",
  "key9": "DwTWvy8Esd2g9MQudiZq4YErT8LEyc9JfvPyM7F8ohgmtkPadPZSvcL2GqZED3uCBBRHmZckrXPuvbP1xEbWX8i",
  "key10": "4TKGzBKhGGt6UVNqVHjD7gPaLpPZuhEE7GAmewfsGQzwKjFK1xg56zugTSKgc9d76tdh8ogoak2hmwgqAcKBkK6q",
  "key11": "44MUq3QA3p12QieyLkxBc6AX6YiwzpFP2aBYqqiDtmPQAWFKc6xXFm8CT9qWTkEwnL7wQdHbS27P2MJbLXGRmUDz",
  "key12": "2eSr9573XaWhiKTo43ScypCzpKWgi8CWm2n47MigVqbtHhfeXAH6CcbbeRDVEBvMSS9R9WLi7ocyqnGSzYCsYeMo",
  "key13": "2U5vAAy1dF9ttftvcgZfddHZQ8n1UvzrmAuUX1LRLA3MGWtQ3w8oFHkPdX7Zcs99wEm1NvMrGRjabQSojhCToyfc",
  "key14": "35YzFJm6mYc9GqP5zncAXhrgjomETC9zZtvJGUmrXjf8NBh5U921BgYdLaFuFcAPRztKBs1HaoFoFSPWUfqARkpA",
  "key15": "4fpgTySrYVX77B15SEHM8amUD3K88vPEsEQAq2BT1EnfYzdXva8T2b9Wx6FaMReLMurpf6pphzyv5wzMgGNMKdAr",
  "key16": "JQPDNQ8WLcg6PWgQAEZ3Np3TPXDgWSjhZLucsqQ7GUv8n6PQcM4YNxbV59pjiPkYV41fCGVEuLHbku7KSpB3end",
  "key17": "2mecFK2jkCLrArARb9nfF8Uo6rzpF3iJtmoNZsf2Bru97c2W3Sw422ZnkwPFvq4UoNCFek2xSyuYYo6iPrQEbUHH",
  "key18": "y72X6LiwJDs8b3jmRtXbfgZ1HLgXQBuspMbAaqSV4KyQTkH2c46Vxs8Pbij79DwRJDScd6YsWtrcD8Qu71wKeK2",
  "key19": "2PZiX7JwhhFyrk9UXvwDYGVWQM4XWJWkYJwXHUCEv4NCCZjH4xsaBxiJzgoUECBM43EY5pShasPsYonFUeHBVExs",
  "key20": "2tLqLHHKhKoERoGRiAp21theUgqw2fmG7jyPgv4ggBkGXyrsQWHGcbh3Vp3K7RVpeCCNGmemoYDX3jL94jF683kB",
  "key21": "59FnPEUjkH9TiW4M36NVWEEqbst3id21B3HJ6gMj3oRvMVb3xcpBU1VkBN9XBUunq45kSc4VoGAmpKQZPJr7KQFW",
  "key22": "64EjqwcdvpSeYaRcF4D9bFtu2Z6wmVHqLmgF9YY8bYBqctjLVzzaBBbarmMBUu8hsntkk9aRXVUwW7TCNEbhkDeM",
  "key23": "yKqZLjTahXSuYeAVtBhHzLxHKFLAzNN3E7aMxiyYDtXYmZwxjQ7Xp43NfmyXHkoRuAyMDFQVHJstnsoVWQFedah",
  "key24": "3WeiuPtyQRN2KvaDimchikgW81TvyufaVWaSLLSkjeKnB1g7FsJjS7bLxA5yTerK5n2WTPL5zzCZQujfb5DAceoQ",
  "key25": "hdG3DYPGuXKXRCSFXE8QwsCNFA8DKVE5qda4xonJ97WTmDqCC5BNtFqJXemWmWCebn7zaRCYXzcTtQPWKizfBHk",
  "key26": "2Hd3nccXT62q2ykMevoGJnQwsSCCCMgbbkQchqRerKUa69mjzPrSsWozhYrbcDQ8cKjM4ioBpQvrJgn8v64ogFKm",
  "key27": "5Vv2gFmwpoQLd1SGX5ejA2sTgnbSKdkieEyeNxdtbGHBvJg8qS3drDjWbxCx1YkqRjkyz8Tn6g1N2ufczr6JEVAu",
  "key28": "3rQkvdjRMExZRfJLqpQ6iyirYFTVzsxNhrj6S7Af4m89KDMSDsTqEg7e68TG2BybyrsNmYpzq9GS453cixBPmsi6",
  "key29": "42aPWbhPvmHcfFxgPK7BpRZtjK1xsMTC9FDFJB6uKcCetM5h7aGptVMte48UvWibGRHA92Z91wkS2XMivba9vD79",
  "key30": "aT6ox54kqBSASFZsQK8tDoXoe5TRtKMQb3RrpKeG8YhdWQMQnBu8CqiVxqCdoMLZB9syrTo32HCbDNRLK4GC53e",
  "key31": "2XxY7p8TP1EUrJUrejFzu1BnwFne6bWabusNFhiybQ7Fc2DCFMofK5DrHxuDbYKjwttjmk8xFVcVnTjhRzR6kCLT",
  "key32": "2uztYLGnvhWXxm31cEBMG4Ybu6TPLiEq8BJbhD6pkWM4eQungsjiWNwsrYJzcRL5RFyCPsioTt3YYLZrH77SkGTH",
  "key33": "np8Ypa3WfQuQinzZbYqs3D2n3URS3ZsKY5ZMXnwAZtgFbeXKPxf2x2D6Rd3L7KURx56CNQJXMEax7wKNk85N1dd",
  "key34": "265TGHJcFSA3iDvhbAWhzAVM3c47VF9XshfrnyPcPm3dc6Rt5dv9FPz2R2UauacqsZtLFdeKygzdfv2Cdj9kxdAa",
  "key35": "23VtopMbK3q69vPtQQfshcQc6h7ojvb1oRxtx7jVeytzTkDbB59HGxmhNPmw5cAGAX8hf1Yyw7Kupy6pZdWZjULQ",
  "key36": "N5uCf7y6cGXR33RXUfBD7zPdwZ2Ch5XjSX3SfwvBGoRPajMzMvFDLyHn6Z7wc92sFTr6zF15JWqa8WZjdL8RhYf",
  "key37": "5smw4i5Sxtwje44H7NuLmiV84iAYYZwXJUFGbLnsT7NZjB2ferBXfepbXcXVBMC8LNA3wtyUoN55bTqHTdiX9wgg",
  "key38": "5zXTrt3TXMBzaSKA1BvVTNMR4MUbeKQhRkfzES5wcEb8e7Jrt3qnEWXREEPVBh7odcnowxQK7h1F6JnR55gc4fbA",
  "key39": "4MSYszsK8jG54A69J5VBQTWq2srjE34TgbofR9VoV4x274g4xcbEX1fe7MqjY9y4MnVxTt3xMb86AiSmBYdhxHru",
  "key40": "5Ehe8FyVBkmrNNY9BxUr2r9bv8yJFKmVeExS71pPrkU1mPRNVSFXHUeZy8wMAhpRNVrMjUcgw8g73WgGasUSbQP7",
  "key41": "4v2gpTYesuNqN9ny1dDKo13gXnk7HAG6PkybY7Gjxkb3xWNfA9tUwpcJTBcCFUsWcHbXuYMyfXoGpaMvcJpXvM6W",
  "key42": "2hb6MKvZF3JgSBXGB7NrSdxfUDKd3svrm9UDc1hXYSq3vwZwRFkbJCqnD4iQ4QEtyUpfNw8aciVu939qzUpHwYk"
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
