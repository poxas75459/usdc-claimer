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
    "4y67F1JWKZNHBTQGqFzYwdVNPSeSZMDemFmwySGDcTSVyt6K2GjWEhxp7TMWJCV11GGCyEV2d1JfRnFu9SuFmMGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVAGyzRPYuQSrW5h4oC9BjWh6MPhxxkovh7CYUb3ii17Bf1X9uvoE3U76ouuNQR91oB8JD1wnetCMh9N3RUZjrZ",
  "key1": "28ngenq4DVgzxaRw65skwSXJ8eR7NAYqRDJjxy99wobJnB8RuEodKWLEyakHYSa1TXkkELv4zGmY3d7YyQEQQp6S",
  "key2": "5thGCgeQYQjYdMBM4qxWvXt9qFPJZnjmyxdfh7mQY5Nwmotsw42EfoHCdeeMDr4cfDutY6LZksoT2zb6iUUtndcS",
  "key3": "4KHAZZe1F2rydmJDxzVjGsinUvdos6UHo8TYXx7T976v6tuqSYshkz8ijFcsA74CXyvMKZoJA8Hoqn3EvoFenijV",
  "key4": "5aApJAvES2u26EtDE2EZeR6xXZFgeT1NhXm5HM87RQXi5NDFWhpsPXtSA4nuMNazhkj3zq3esXtuxjjcoYWFnexK",
  "key5": "4ARf6HNAs7mqL9kXAnzwJEnGY9648FVYLmavMLgh9UPmmqPF7sKVqUDhdiEHTbY7Jgui1mtUvaJncytE8wHAmyDM",
  "key6": "2PjJyFRNJZdX128xjP1R4ZBm5Tp6RkPjVrQyzAFwASPXptSHvmR38oLq9EFcbGcH6ArxPta1qPbM4x7WUbGrAwTK",
  "key7": "3RL8h9FB5hPiwiFVJtvGEDtQY7sPAtqGK5YGSv9TrtvLgxZaWBjVKb6DjsDUz1zfi3mU7rhdu82v7EEy52bRXKDE",
  "key8": "5QapAKaBLQ8p9jrc4XaJ6kMFeULx7cJ95wLmkjwqaBvBrk3udFq2EjAs4XF9aQEXKJKsU4tLph2uhw6rs3vY9Vax",
  "key9": "5EmZeqN7QSszmH51BFRoKrsfgeVWyXcZ4tSLZHurMQaVnBKqRV3fykEhgnCX77BpiKZyx3FnW5JU2nhJqf5rLFPd",
  "key10": "62c7TumY47GuA669tAYuS771qutguB5vgSAHWtSpTvbdiKEQo2S11zk4tng9cvtLrtyVLhDNy4nw38ZWGjRcah84",
  "key11": "KjAEjwopve6TxSLX2UvQGsrUNwL7uHw5XBrL2PoULkSW3gkpcgj4ePZJWXx97R9a9N1gQSpEkarbswDJyCr6SVD",
  "key12": "oasixUXcRdHpbpDaYF75Bbyxq6ar4FPhZQfZJBtXkSxALLzUAJvEVdYMivBjhEX1Rpwfc4pWgEkWEJeHGhbVLSi",
  "key13": "4QcUvh21BrTDRhgQTQHacqA5Kp9UMwfzN6EwqU9DFgP5PuAqwtnXAgS3hHbLRzXcLKA9Uf7TRdHge6WksiLsaEBw",
  "key14": "AZmLMBhs41RTHPSEBUJEAGG3UngWEGe5Wa3rnJkRWBZMN4a4i8L7wZrB57Jz4Ufv3DdBqznMf1udoACS5QkSbbT",
  "key15": "2fLAMtA7QJoKM1YTtrJZsuzLLDDwEQMvwyGosMzyf9Btoa2TDAtCNJhrAXjSyaEQgRpYUbG2KgLh5jveTuMXm6B4",
  "key16": "3hvHr9NiQ4PzjyvYQa43Fj92eQMbP14byWPkARJwj2AJHzymmRyxqCwEZHmfLR2hSWWDqNjGBgEy7N7HkoCPEAPc",
  "key17": "5SXUMNuADSaTWHLfS1Wwqzqz15bzk9QCe4hT57LP56ffSwjEyfucLeBWX52dfc36XStipppZFSYfApdvJAiY4nif",
  "key18": "47GH6fGrNmv7cGJ1cbCqGGDQZd4CpqfszTHdeNWqa1Jhb6gMQQ6Ym7BAhQibekh9TzNjtH77JT82qeweRZnC2Sh1",
  "key19": "5vk57JRU77MhXN9k8DFFX9NVdm7ThwJUwxXLcSthTUoB5nuZg4sybFb2wVq6tZ99BEh7gyPc2Hjo4NAuJaNDKrKk",
  "key20": "4b3neUEi1VPSWHaV96B5N8dDjJwYcZPZT6f24T1KVpPrP4YTLQu5T48r5Y4NhqiM8VBoZHoSWJTDr2tAJdULZQE6",
  "key21": "3wo3mZEif1x5AwXrexaasacSJkmjKh3Wu72MFswAZAMKMjqiXypX1MqrETW272ntykND6FEnnS3ifoLeA8XPBkNQ",
  "key22": "3DWQbENuVHQ1RgG5SkjAGPm1yVt3G9YEt6eer9np9ggGCEkbJJmn8zLCFmzPNSUgpy5d9aLw3vULe7iQudbdw48U",
  "key23": "6hpwiYTagB414fCK1GMSE9UVx69TuZcRWbDiLHMrjLnigak52zkzuc9kLaMUhuBE3cx4XtcCLkVEQZAFX6kyuBE",
  "key24": "2okdNxkVrCDHV32Yx6wpQzWrVuoQFR6QXbUCcDiaihmnFeFyCXTGg7BRXLAEbeRq7HK38GDcQ1PYaKTkihd5f9qN",
  "key25": "3LHfS6jFx85JWHH4oCdWxpcWS9Di3vrSymtfsbVfVgvfi5bnU2XkR9eLbqttPzyHQSaHMvsb5SM2kY2Mas1Lwcuy"
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
