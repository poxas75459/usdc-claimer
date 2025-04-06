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
    "3jfUeuKBiomTfGXUGTmQuKRjvwDLjnd3fo1QrirBQoaWJ7ZxCQcvJ5SHx9MLwndAfgwP1HzK24yyHEKBmsi7ZPov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zknVrGzFeybQ9c9nwurXZd33j5Z4mWTmpQy6quM2CeNPLU5hPPA8GTk4K7rZCCzXZgpLvnB3sKDwNCnNUwkXrvL",
  "key1": "48tC9beXnGps8Mcb6Z1rcJdhMLR2V477xPtPUVHbdTH72Q56AsQtP7xPc1N7EmVs15aS6WRsp7PjxoKwmrSzsVH4",
  "key2": "4H42TE5Ltq6F7YsNUkbbySfTCpDYKF8JFbPd3V2ujFXM1x1VJsWqKyBjKCRTkb68cpwBFWvEqcu7R47aM5PeSfCd",
  "key3": "5wMSxSTRjL19PQhjeVW4kHFA8dkphzBSeM9zCbn9bH9Mmn4zFtKmLPJmRPHVL3Bv2dPjMiY6AMgHwjw33gNVJEtS",
  "key4": "ttXoBr1pD7HeLEfrB758UTpuD9kFpjx1wcPDwh627dFxFKEVGa2VdUdtB4PCRwaUYBTHDFgvJCaJyUrdDYy6Yci",
  "key5": "4ZTfjWdBHHmByq1GXXkMTg57wB4MATXc4Q56rXgzdXS5Kh97HgTVjL2havuoMM4Y6Vnqtdm1Tmm5UEsbHVqKRbwm",
  "key6": "4aw2j9Wf4MUNUB5hMA4PPU2VZsMhLSHbSGHwpU4uY5Cs5VwyDbUNwFSzkS1x112cfjkwivmajriyM4TE8TMxt63v",
  "key7": "5pozRLxCFvmwKyY8BrPuCDxs9Bus7NFbyKctot5V6jqgYP8p6QcYFrVDCLCeQNDNEqGwy7siukqs5KfzQNraXqcD",
  "key8": "5bz48vMAaYgfwoXygg9T8sZJUSMHFFriv5NM5kiSRFajkhRaMvhPdy8qRXk7ct84jSwN1ATAxsw2jfGqbGbqfhVA",
  "key9": "3hs5dNsuAoyZvmr3MPACvtrmRswUy6YwEzKm8L8eAfis9G9q9jx3knJkfA8pt5TCJtDnpNx1H5pgddmucQrzEfnG",
  "key10": "WSCyzdotszDB2MmqMZy6ivPpEU4WhZ7FCefzU9LPL8xbjdjKDVdo4UCH3LUcxR16GZoV9cMjZ3ZxLEM841HZsrN",
  "key11": "3wcbfqoPU7PH14FUebBGhaAuWy49jEW7RfRxguovk6bKx3JhZtc6BEy5JzhZpqZcMr2ZDpMiGPHkkz1SachkMX4Q",
  "key12": "WvxjZo66WiJSv8g7obU1gez231B2wLe9gn1tNCW1eF6tvgJ63F2mb2Ufm8SiNtWfQBYzbVckCdvLiGvnP9ZTHJr",
  "key13": "5T8mjq1Aya4R28avviN5YmK962BTmyC1QmhVhwEPYFLREQgzFvuQZV1X2hasW9S6TSUfKxcp7pf3WXbhBd8GYakq",
  "key14": "KG1E8WLG4MzhbhEkm2qHBeXAib1ndWLNeuPKfY8kBhMnQ5SDY4V83K15m3gwp4KffCCoAq6f6zroPmZ4a8CPehm",
  "key15": "eg7Rdz9SHdEpmf4i661RtM63e3cUe51ZDucAY4RmsonA2n5cX2CoxueE8LoiYFrkoFARG25xeNHsnsS4TGGBSj1",
  "key16": "47FvwuyWBUjJRvKvASL12FZoMgoXjLoQxwUvQseSdYFXxaucGDNqDLagtLg2XcQUNDgKRg3H1iSpAbGDhznsuUqp",
  "key17": "AGhnumrJcLeyEVjoFmp5xDCTGnrfYcGkLDEYAQruqK3HFQu9bKfymVEqALyaYHRWMfpsKbTuVQTwRk9PQ6yrVRh",
  "key18": "62h22FKBjQaL1fnRfp7dAmf1KzizZUWxYNSQY4GKDTNiqpWRiQj7S2eTeuLFmACNmXUxqecXbmR42V3gkDxao5xS",
  "key19": "2WTVKKeZN5GGeH1cxNmyBmz2pJHHCGqQJHxBbCfere5XLZPDbyPCJqJL5dMX1BSF4szUGxp3oA8LbCUtzqeAhvRh",
  "key20": "3c8DJBReWPVv5bv3muoTDj6JFvUdxFuL8UzYhXZ9sQB3CmdtG9CazLD7GPTyq2Z8uX8KS5zHCUFff9WotqVhM5vR",
  "key21": "4f4nAEV1cRaCb31stStLcZ8cK737HWa3xpP1bc7NFpGcqKGfVU5xLrcrjvue9tbR8bSs3GggeGLG3KLA9gtCYjhh",
  "key22": "54Hz51dRfyhvTrePMyoE2a41pRyMBv3w7XNssFbSfXjR3dcEzxMDT9GjwweVbkNuZdW1qSbjzwBfgiHZ2FABYWsA",
  "key23": "647YrSND62KL8AdzNYaQKyps1jMTTP6hWnFUVwxWmdPtV7tFBPkxyRAnXZDsbMhyiAWpn5Z2BbiVM9tr5ud2QYf8",
  "key24": "ux2RqTjuQspeWXWJkjh1B1TptTTSeZKzmb8z1cn26XhbnxnvMMewX4JwAZh5g6ynwGaAg1irHDPWeKHRj2DFMHT",
  "key25": "5c4gPLc3spRFHzVnjKKeopYY9dZKGL8zcVb3uKU6SptdkDH7N8p7Byg7upzwBqfcM4WAe451p2c9DjCfZTeUtBcR",
  "key26": "3pKTJYuqKaGvxyo5DSezFAWrCZniyZsAg94CT9WVJoWpZT7fT2chtE7nZShFLHe9rSvvowooXzEwzGq1P2ishpBz",
  "key27": "v3YWAmF4w7wj1F4etXBM2BGEriX1v5uVhusB7mjxbvihvpybRFQRMthJBYNMzuHoxskT1uLi38WpHFRWbUuTDg1",
  "key28": "2RJWhbJNSEdy9Rf9Qrc8wpau2qKeAERkAaVM5NXwgUntJgyPKMf8kjQBCCT5UiJaiGr4DgmWW8XD4UdxfpVjnv3f",
  "key29": "2ufsXXL2kUMgpdK41kD7tTR1n2vPRq5TRVwBhgeKUZPKHExtmir76nLvppFH7R6kPZ76LvoCge6GytjNg4ENvcwi",
  "key30": "2nM8NmKb6E38kaqiyYinFsqgkkZSxKtjvc6eoFLtqAKyL6SwovWye5xZxWm9VpmEa6G5adxFWMx4fvCJLGVE1bRi"
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
