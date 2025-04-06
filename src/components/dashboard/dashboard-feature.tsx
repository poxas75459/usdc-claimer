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
    "3mveXwCHmLCajQC19RumhvUaH1aphtX3MGVJiiuJmeAfznv83A7UWdJo2jhYHZ1Kb5m5RMMNkcn12mWAce4fqvV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pUDG8sa6NwwaxCrv4GipTmL5QmFCMhfjiTxvd2KfgRdL2DgRjVmM6dr7bGeEgPoG1DzvWkr9SRz311zyx7FSoE",
  "key1": "vo6gmG95CQW8uHRGsHE1c54RWyUp4qPmBPrMG2SPykVqcKJuu6zdQpny2kdjjtYLwCTmt1DS4a3HeWGwPGqhDdd",
  "key2": "5QLjp1qwEc1qYngZDiVK2dghkoVyGjX9dZkKKzeFLwET17xzp89kSeka3fQGvLA2HiofJ1LzpkEkaNoCJp9K7WLH",
  "key3": "3invVpuU4isPLxBBAcWGzxx6Z7MkPWGnMZvQ8EgMM8kUvT2bXdYWTAvwnYxPrrGpdaxpMV7C7uHxaH4AsVNmdkyX",
  "key4": "2CU7p1NUyD9HihkrTwveZtywBzf3hRm7dU2z63is3KDjiC23AupHzjHHJra68MCHideVtwWpJeEXZUBWxr99TaiU",
  "key5": "34wuYiw1Ht2ofynwHgC7FQYbRMPDQ2XbNj36PJpoN4qCEiA5y395vGKpo4M4gqkrcCKG13yEZovQ3QjuvUqG5nCn",
  "key6": "J9GYxHHhsi4G7bB7vEaQJyvSw1UKHDmG7wCkHGnpMUtov3g3nbpraUAzCGH832LL4htQhkJ76mwM8beFswSQWW4",
  "key7": "4GBMkb3HLsn4ngPnG7rAtSExfF1uF2tQG8y5sbCREPeb7jGQoGiuUbVZXTobhVYW8cpJHfcd4pjucZvuqCR6e2eq",
  "key8": "5FNvbKCmvKZn78MP4zQizw95NPXwLfcgnNWsUc119Y6RH5yGubGoTPmjo1STSaV59sYdE3yJS7A6etGowySP18tq",
  "key9": "2KggXycd1WRWVqgT2mgP8Jf9FCmA2nF4AjEruUJQdZeUok8uvuMfdPCY44CZJNYifaEhkevips7kxa2ow3oi4TBF",
  "key10": "4GMPjZTCGjeajbRXoKtMvFhZHzQsFGU55d1s5Mak8zan5yNERPybmM8M5YDCCmnfFiVY9bZ8JH5aRPxZTR2ZNJ2Q",
  "key11": "5my18UBmT9RspaBquUgYNqKPaSmUci6K7mky5HozEVZpxwxDgQEy48Js7kwvLDMTh1sWBCxa2wW65FTZmUNxxobh",
  "key12": "4xkLbvBXrBkDFXEmDvwazvV2A7vtT2LZXwssU2E87rmC67bVLb8iqih9FzuYyoaQ62hTGFGtdkBk6vKJ1a3oJVDj",
  "key13": "4VDWMUP4NaFyDi7q8mhTnbaHGCYCgTGRrZUzy51ggS5X2YijS78DxPZDRAcypQ5PVGf8RnZRuToNRE1xPT54nNBU",
  "key14": "4heB1oh23s6Kqj9Czw1DnGqUk4yszD5WWo1TCHkW1QMoh1CFNzMTBUzrAXXhFqVAYNifrPNwPcugEbnAdkYBnSxg",
  "key15": "2TAFFu1hUoRkZgBhovnGJXpyeBqgSAXqh23MA39vxenQtyJ8y2EntVJ3KDESUcR6ZsrvmCkN3V1VfYPH8cvgXxz8",
  "key16": "2eS9MsezeqFePnpxedn5CTLaQvRpakv15uMigCb9sWd7DHz2WCYg89Qt8TiW5ig5LbQnA6TjpFfGiVMvDdZtnwt7",
  "key17": "3VGqSBL8UMXf3e9gyRRpU5uv6G5FY93ygQxDA4mzA1bwQmk6fi5x91SnGJFc9ASFXKHvP1vwns4uN8byAbfVSeA9",
  "key18": "4ZfFQStmaNxsuPSBYQnZ9VGSWS4eAzhRBEzgjEA9LhURVqmdXGRZezSM5JVNh4xH1gaEQDg1Vo1266aUjYRohCf4",
  "key19": "2qkTrGuX531CjKm19t2Pgtxim7Cb2sjfsC8fCF7LhHL6nBxQYsBsSUJkMC3kDYope2GbKmKbEgdBgkiVB7xRKR34",
  "key20": "5iFuF4PBbQvqk5En4G22jo37c2Sd1RdowkQHjCY4xPxTCFkHjqEjyG6SatGPHrU4jSJaGu3qgHnmbyH3jMGpVeWw",
  "key21": "2heVxZ2ix9J6E1uNbob2q7AcdkJmC9kUczLjRmj8uvFnXe8eZxDWAKCHAcxmbmYYVyzLScXz1EL6WCPDcGU9n4id",
  "key22": "4oLtwygwM9pGX3LnJVaV8qGYVXsmbG2ocqsDc1Ko4ec4fVsAZ3ffjsXz6VwY6dwMDCJmDhd6aXvok1mnx3KxCnws",
  "key23": "5MUBiw3ZH7G519NwgD2kiR6SDW8gwGGwGVGU6jCgsdwDaZrc1EQBdU7yQLkpojwyBQr42ghw5p1KHKQ4NBjkYmyw",
  "key24": "55D6o6PfJjkkbF47TtXfgVpK4qqe32KqWu8Qmk1xVECGoS5UVU7nEyWievS9jdnU4K5J19ddTMe6BWvfWJFcRdu9",
  "key25": "4NK4S9QhQr8a5AZ1tcP9sx3M6HQeiSbVBPhC8mzooEA49aLZDoM7HftXeKV7MAK5t37jpQJEQA8LGc5oDJuvS1WE",
  "key26": "RPwGMB7xu1ryopReXe47qocDyTUU1zZQWCvTNopv88EU9wfytyVA1rhbFt3MVqrU7DwR8DvtDaBqWc8NKMTA9mt",
  "key27": "4Tt7zKbo2VWncA4C1aTyRHQSomKdXrtMxkjfZdE7qt4FXUyJXFvcruDdCc8hMexSbvQk2VT7uDd7e4JnVKKEuz7c",
  "key28": "3YWXfmcYrJa7DAWhjfxE1b83iW7xs8nsFSofCREmn3RYavSaybVPJUosP8R5rjEhKFmZx9ZVuYjQma7eNrErARaB",
  "key29": "5pqbE8Tyke1bSDoQg1SzS43s61EGD2J3znw7htFeKaJWMniX9kbpDTugnyUV8ZB6xQaMVNara7LKekKz2MhKMnqp",
  "key30": "7QiSBnFuYPwRN2vPAwguuSPUhUjHRVffcnAZ1CZokFVrn71LXmE3nEKNRqZS2kCcmijkDHn1TUR9AjA2L8eUiih"
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
