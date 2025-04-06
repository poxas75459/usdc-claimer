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
    "4hccW8tR2gqE9V7QU3hzBJh55ed51N9nNDmtE4bA9Gvb6GvNYwGexmdiNJ7e9uzDtWNgvCpzFsKdQFGfYcdMLyAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aoy83ptBQzvm9t5LfgXkK1zWyDdLx5saCGwZ5f7LMeJQf8hLJvwtHh3SF5kDP7Pd5vcVjp8U3HTTTK8zd8JvheW",
  "key1": "5rcoeUvpPBhCh7Mqzg8AeRWGsKS9nc7Awk2CrhTuEGGUTqUynJhKV8ksj1crynYUePcRLzFXUnhHbdcRmiFRMSsu",
  "key2": "5eRNzJLYt85ifVkrSqiCAMpSzSwbF2cXZ3vTJLgK5uXFj6Tfkm9j7je6kY6C36sfxztunN8XiQAGwXbvoLQ3HxGu",
  "key3": "LhvuJxAYNC6Dbjqy4DKxVooMARKdsJKEeKrcA9EdSnEN1Tan1NH7xPb46V1mFkpX4aSoGeGiCzzi3SZHP9bigiG",
  "key4": "4aHnEZivRgzM1S8zY3RfGTfsKZC1LsinzHqc2sY35jWSRKZSYFJkZtzeCmHg7TSiYD3TxypoM7eVwaaSgYMJv68w",
  "key5": "5SSTx6k3HncT1uPBFbpTFMuvoQPNZVgKmwYYxkgLsCq93pq5mp9tL8nXvUodvk59NropdMMWz8cBW1CnwQz7BEu9",
  "key6": "4iYozpDtKHKALVZYu9nePQmmhRErwHT2TeST6Ymg9E4Vs3nuK1UbnNxUYdLVrWxrtfDxSLCpZc7ca79xnCURbciQ",
  "key7": "4W124sBkejwyH6XyJSRRzfoosW7UYEYuvC2m8zQ1V6gsAM6hbcbMwjUvnsdxA3CamiXo6nB5GfxmYPhtiL1tpcwj",
  "key8": "3Vujqexr8JesPbnjsJg2G9784CbfsCXt1YuoBiAwaHj5C7dkL6YFz2AGpc1LtJGMmb2yim9MTWHZy4jGRH12Knnt",
  "key9": "5jxGG31wuV4KH7wbcdVEzriNu8nUepRtQKEhWrccKSPXykrpePzBfUUoxcTQPFJ1UUuFBvUtHPF5YzdBFopssoHU",
  "key10": "4kaFf6zVSA5aZDBEjZ5dbyVue66dxo15VUiWxT8n3XbiAJ2jc1eiVTc1W1w13cZeNdxzaoEx5vSX3biqJThszeZW",
  "key11": "34Kx4pF1NWhbUhEW9K2hF93D5RRUnvL2XQaUCiFnS9KZjEvktaAZrxosSe623QQ81vEu18yT7s73VE2ssoboEPqv",
  "key12": "4vw1svNqD3RXtTocCQUnMAUBW6dU5PWZ48dRqTvGuUAyE43xocfgFaikbbyHDBjuNvfSjL48jmnL15ZdRqREYraC",
  "key13": "DVEk5YVxs7ZU6StCrDHbxGJcNw7XZ6Fs9AASCb74ncTcXnq2jLfFjgVTT92xAr7SBtss45b9bMmob5uymETws8b",
  "key14": "4VesXXCZJd3ithQ6NMsHUqetr3gJmxYuvmDfs62hbRVteczf9raPg3RX3pwUENcXJj6zRfpGtPqvKMLPSA7UvhhF",
  "key15": "5mh4MLjWahTgLvZM6aMGdtGHvP7157MEqKEBQdiDhFLmGGvauebnWgoJ62LqUnYYDuZmEGbK7fwvGkDGno4Npchk",
  "key16": "5PyxsbW2iHb6WWR93PUGzkcynGmD7fb1cBLcEQUrGRjHAPJGkTYXiLjKx44qAhJRNPo3wbDbNEyGHhPWqNbPrEYq",
  "key17": "3YLraaSurUVQwzEu5Y5THFdQbJqJH9TTZYwPM5tzF7HunJqHqR76agk8Di8a53tnLGTJzRk5b2eU29TdRkdErvHb",
  "key18": "3b4urKTPL2GynvXL9dmg693bjwz8U5PNGX5sQrtHrg5JBF22pYTm69KKeCtvAtSi3QfAgMprTqSs96kJ5qe8zW7d",
  "key19": "4drT9tQkuWyXcgepRN8h2fuTuVs4Aj8VV47Qt9dNb6sHP6XguHwQTsG4QAH3yF75ig97eCJASimKJEYKWoEktCDh",
  "key20": "PMiuftsJ59WyjzFPemvuM431amnMQygLT2BQcd2QB8fXPtxNj424BuJjjgbTgTPLTaPMyuPvYDYeFdrJGXHHzNz",
  "key21": "MKpNVA6Xikcjwm4fsrLqe8vJ76QhpquqpJjyWGTiJc27RGfaPcNfcyGJvyjZZt3p3WgzzcY4CiHySedEdBbhMTJ",
  "key22": "66gDNPMs1pekv1iUv3xfttYB1EF7qqRFjsunKMKPHqXFS9HuouGBgbX6sBvCHBLKJ6GRaSWUhFgDixbq5PUHmL9f",
  "key23": "4dEM62PLdwkxA5uvATsA7BrYiZqF3syy1dDFmxnemCj8nEXkfiej5DZZTLGP5v4HvjnF7eXwCbnpAtkwYFfAh4ed",
  "key24": "2pugoz5bQJT1niykawzYEa3fdc4StqHmmgyoNFF2j1Lc5ASdTasP1GbPS68gGJouczenQCEUcR2PsUnbifsQA34C",
  "key25": "5h5AfzjGnk1jdv39MjJXqj9QmjwD1KXVzYq5pDhPof9jcWvaUtrdqdxhmsTBr6iknZkd442AzJYqHTn5oKzhAg82",
  "key26": "61kANeRX5aFDz278Hov4X1ZGWxBVgPxS1fJXRYPUhJRsX5PDQNqdMVUkcgN9Su736AYPoyjJ94z2dEwRjPQVSYsn",
  "key27": "5uv2USvzcgdgPY5cBZXmWRFH9PdhTAu7gPMDmckCPh6ke3yfC6pEpzct8vm5oebwaLnLFcyKESAvH49ZpoxyjA2U",
  "key28": "HZdhDLTeBsCsp2czHnBWshbCENn3uKPWLBGZMkAojMq5uJNJSBRppLGAGvBWTgHV3SxKp2EtP2stSa3xLCeT4We",
  "key29": "2WE2oyKEb8eKycCeFYNCHpnchbfGwY74eXepD1xym6daNTpVerQHUvCaKxUBwE7hZ9fw3pzQNwBm3P8tnCUGKqnu",
  "key30": "2B3zcw5sMMLDxKX7SQNsaS4bkqi2geTVig7EFmA23edRtXJBtBCfuEe9tBuyLR6cCjDtMTgBmeeKyr9NDfuKQuAN",
  "key31": "3oxabkVuukjuUzPA2EuKTxBGhQBMGz9w8pH7sm73DzcoiPReaizHkK3W5MhTqnsnPwh7Jw5cWErxbrWtox61W9ra",
  "key32": "327faBT2fg6VyTs3Rp3PTaQu1XjZt48G5SHc3q9mNPWAvVaB6nn59EcsoczgVRA6WAPzbdLyCftqNiwtU7GE6DDt",
  "key33": "5kzcyJDEAMsXNYWCx2Ft3NEiiz1fFPaVfivtSSyUELn2ZBQhFrpsYvs4wNp68ypDoC8tA1kNHHvJBGCphtGdbqmN",
  "key34": "3rLtVjLKHFoxJDzvsWapVBxm7ca8t8qYu2FZJmySwCKtAqhrJktEddpYu4h335Wqfw3n6xZiYAbdD7aBnc9Z7c6u",
  "key35": "pD33XFX9geY6NUURWUdCn4eV4agYVnioaiaVchhCgm9pg6nevKAZ33uymmH1ufGPCgB2t22ZDAhaGaHA6ynwMK4",
  "key36": "5qJeiqMdveWKTzQGtwGxr3m2u63QieG7J7TxpY5wexwiKGbjtFQERhUo2GQ1Abv1V6ppb4fASVSdiL82pjhtuc82",
  "key37": "3tdZ8YLBrnnvWPU8gjpXUsNcGY1zu8Xijx8KC8qzK7ofdENiRDfYjLynLg8JqLxHNjfd3KjSrtrqa9q9yty6Ufoj",
  "key38": "q1E8sqCEsi9feVBayqqXqbyo84rvbUuZ84d5MQVE73PMsj3d92wM7ucjaYtJBC6pLydf8wXNkDAZoHtwZFaHAfB",
  "key39": "4ToFXaK8HhsnNRA88VfwJiNhuEMtKNQPd4GbiBCVqXixEJbrccePCiAXqKte8TN57D3spNASoZ2S7iSqvuxoMmZH"
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
