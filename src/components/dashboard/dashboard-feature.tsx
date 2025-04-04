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
    "3GYxYS4vvUMQ5uASiKhtJG5BGpbGyidAvwoThkDCK7eXumw8B2Kb7SuXvd7ptDTzvhfULzeXUY6aCzWyoSqhLHAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1foZDrjfEPyk4T3nFBeC4jYdb6KZtmV4fDPsEFAnmzSnQzMJimaJX7dEyiXq7m2646Wh1M8xXKgDaMrfNe3JZhb",
  "key1": "3mYx6JDxq7vVWXEQwo3wV3MyK46NEN8HC6UHH6BxHXxxtvFohYz9dfyjLxNNZ99eoG9FGGX71xxt62TEKb6roHY2",
  "key2": "4x1ytcXVVqnfShmhxa3TyFWNPbie2QQbRRjnQdFNQYCUCFsJNsoGyEHFt4HzJsX6xgm8RXFhHNhEUpa91vjgVbvn",
  "key3": "3e88LZk6MNgTqTvdDWWjoXSfj6Vff9RmArvxD2VgUqh1eHXLe1186cLvtcii3EibniTnrYEiYxqkJZdGrBNavDRb",
  "key4": "c1DU53f3zp6T7TeLSXKW28gifVUNyBiUnNsMHTxcPxkhWQMvWPGbBAZ7NM82gFkknWa7VPgju9MMZpRjpzYSTUV",
  "key5": "64WbnJhheytUsuFa145XDQHLtAUfBNHSYuWcfPkGwuKg6CV1jFpP7HRNNqUTDDsVsST3qHqBx4XVUbnmSdNx7Smo",
  "key6": "39Q5qEqzfVVbr34phNhVRRV3mUFpV6drF5UgG2GhSm24G3D4f2HZ1PfWpZPf49MqPT4cx7c462Az2dz7xxNBJP1G",
  "key7": "2Nxz4ZoDNRaNJhMLvisFfxbbsLEt7pQjuTe1UcgJbYi9Z5dZrC2CVQ1Z99K6Sy9Ye1dPMSEoX9Sp1n4E9RJtumg5",
  "key8": "2fosaLG4oKLpm8owezG4utYKQMKgt8ispHzieQ8wvBpRpvP7akSQGeTxAbTyKwBE975EcbEaDA2tAYm1xXUi1k8X",
  "key9": "Gd1A4hVGk92S494bBpZQJr422JdfB92BWxiyB15sJdRHyMWDBwqSYNgD6T2E8Yiaj9pSuAJGVKQmDUo1eFtKwxd",
  "key10": "3BiK9ePBJ2tNfKUawetFeiBQGL1ZeuSeFbrad9ZK9AFBFbd1szvs8RB8nKeDZ7Z4p3vnzuXc96adRkk6d1ZrTs15",
  "key11": "RvEU8Huqb9NgWxNsWGkhEEGmABr1rA238VzA6ht2ZnnP3psMWiG4StzhgBAj1JoVEJ6q3DFDq8jqBarE6J165Zu",
  "key12": "5UG37LYNK33ogsG484bGkmv1WxpxrxExnUEqtfg68CfZdM8FbJyD3ZL8ScC68ePjJuJndQ9jdQuQnDNszxQeKcVX",
  "key13": "ueQKccXW9CDq4hmBp1hkxfhsEEdFhq8E1mZus1w14ukxEYZKhihaq9teGBqo26AJrCmockNGDtTptYGs3oSnuNe",
  "key14": "Uw2d9sH5QNVazkGwGRUbkz8F26e6gqtc8PhkTVw96L4JuB2aPzvo41etN5qCtP1LzCgg9z8QRS5tqp4HztjiMQv",
  "key15": "5kSW144q8un6cQSe6hs9coeWUrY2EPPwHxZHRuZWF3V5bTUzeMpDAmpUymVWuYbvv9UgzRms1WWAh9Y7xkr2cQ6L",
  "key16": "4WQdcprazBR1xJhHKsHvxDRiZWQCTtWQJFuANfybQAQUxyhpqULEMHKBngjQXGBJnjhbtgWixCv1K7wtLM6zdYWF",
  "key17": "4c1U64XYKZUaK1MrD2jjRgBzu5EwSBH6QbTgJFi7H2onCQAzmEtuVsyuW9oLpohUy5g7erKRa37aqpG3DStCxmQR",
  "key18": "X9QV2x8p3GegMMDAZ6GvawbtV4aSuTnv7PixkXAB3GkSKRcTK5eQ7VRfoCAH3VXHr54g9dmCJSiAfo7yFa6dV2t",
  "key19": "4Gss6pUJX6fFi3qsxyQSc2kE1PcFiZMcgAD5bmxkdbMjtWhWtKymxRcGm8oVzs2RDdZGU1QXCDapXR9aF7WTPTtD",
  "key20": "2gaiTXXoVKZziGBeAMCQajSxGnfDDZDCLRfKU9Wri8Ge4z1x3toQDfQdTfHz1AgZBAZgiVQ97VCLjuQuJGRdPA3B",
  "key21": "xJSKH2RidN3q7UXCvneyjr62sG4msZdgYAXrWsS1pM6cUZeJmSabxKaENWKGQL3ZCTuqYqidCZjvY6UoGUzusH9",
  "key22": "5vb2VVQoib7DPjVq5fRKAa3wTszvUzceUGwjsxPywt36Se6XUe9WSkxLPLGnefvpkoBCgAY1bg2ghdp4vJdu9rVr",
  "key23": "4e8MtarcE4gjiaznQmJ5PJ1e11TppCewiJHY9W5zraPV6wXfBYhgUEEdCA4ac2QauqBk6SDTSQFC9jyNRmwd1v89",
  "key24": "4QejaPY4iw1zq6dCAZkgcMAUSVZtKSiGDQJmtyXn5akrxS5YkbUwbJ6fZG53nERqo7WJet8YL8m8XTULDjpRHVnt",
  "key25": "42jwhxhZyXY1oLHjZqnAT2cRcHmMkcmm79gJFaGKgc66mLoiZLg9i1x5XeBtciLsCRgsUoLhM888NNHKHTsmbp6U",
  "key26": "5qQpHTMKZo7QtorcrSgrgXi4DBmYiRKpdR73xKSNYPPxswKuz8fw2Fcp3RHcMnaR7VTdmjYaZGcEmNckJnTzAULd",
  "key27": "53HEK9RNNGMx1EPtgsPFJtMbdiQrvQ3g3SiNaiSGREf4Mh7cwGRLMqEYRosxvpTTWgU1TP6BhrXZvbmHa5jjzCnX",
  "key28": "gw7aVY4gTUobavVc2FnMg94Xy6pNkLk9uUkhRXMTThfq9y9NaF353YMQejP8G9y6xb88RWWxYqSSprNYJPdVzH9",
  "key29": "4qZYQgBpvJSWUewot7wscU8sfpSv5CxqdaMRL1vaykWc3XbTxgMhY4zekbAcLFDmquyay2yzPm4UYToUWVwQdQGd",
  "key30": "2q7xm7ru5aEDeb5eu3Puh5Zu4uAuBCEBcoprhxK13zLggBQpNMBdAEXZ4RT1BswymAYwcBYyGgWfJuN3dWSCqSde",
  "key31": "623QE3o5AvPGEGsFhBRr9zXRfUt7fTNgsFvwa4xtPbxRfbEVeJ64bACRJxsGb9N2wTPjvuMn35AAmNxJnptm35Lf",
  "key32": "5aruqpseFJ4UTt8DdDRUzRi9Xt9PaYv4AU3y1Yz5TgPrkdPfi2VrJJGTtANa4J4BJqwE46u9fZV6e3Rrw9DFoxAv",
  "key33": "3ymUsRHjohxbfd8HLwYe1drUuZUyL8aM9tpx3PC4phHiTkSzSefQvkzJvkUBhsxfS5u1pxhpsH1VptXCo8H3YM41",
  "key34": "5ynktZcmaPTBBwddp4sfRQsPdxcJtJfseQgjQhqYYSd1JYHHJvReM6VfXaXYGiH6imypCFw29UTVozV2TxB88rza",
  "key35": "4d8dcjnnbKcyhjNyJpXqBfrJZAHvfBqXGJJ9bGUWkbDB6DMBgF3HwWKxJTW5UHTQQFSmw6VnmQn4Wazejx4J5rV2",
  "key36": "3WfwiBFsQ8Tu7msze6awXyJtjVbHgyL4VM1VPvpSmmGqSnpY65yzTu2LQ3GAPVub7MkA6QKPBWZPLgt3WPiXGWc2",
  "key37": "JcHW96Vwfddup2bAThsRyEVhmkEGUt86tbVJ149zVSYY4sSYxuu6nnktYYUER4tFSg8qHTpsCffqgN18WDWNKzy",
  "key38": "4AyMDsSQGvrcyBvwqFDuapD7g6H9C3jiFAeBBNjFbvToEZaqMtRrpbudpTYbwmqxugXNcWRE6JmjaqWA3FsoqGrt",
  "key39": "2aog1cHgqW2ddDubktmVAHtxGm2h6oxtobXrb7W99VZyAVtsfk9Kv2zTQcvdosuW6V1Za4WANApVuE43xnXbWayg"
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
