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
    "22SCL4G1PjEySoUTR4a4Zg9y6wvNy3pKgb4ARPAVUfnHeZzsn73i2tPpytWjY5sft9NwVNHWHroBGrmps3744vQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BSSEdV8YAWuUMbx5tbwL77Dp6QV7hiF1VHz36MhnF1x4im2eYMZ8EgVw6SxRCkZRqcwFi53ur7Mjkmz9YF6tn1g",
  "key1": "kv5jcMjxLAjvE1mRQqK42q2J56k47shSs93ZnJS8PV7sosWhBE1mNbZU8T9wvedMXCpbgM8itX6MxwyeZRTkHBA",
  "key2": "kkv2r4iVYovnPk9oxL5Av52cb7o5wYdYfNo1Fr5a5McLVqXu6M7kkApEBFe4qnjWqTXmc9F19kjWsToD9idAjwc",
  "key3": "4BXYTzzge4XVZ4XKeLdF4BNKdDxuu4JkAPZ1dmQkU5STgWHaMi5e7jTQt1VbsCyPEQ5BsufDJRgnCeFTYZjN5RNh",
  "key4": "4NE71d88g1sXCcJzGFegK2TYENyGKYCdjQDNmLpNQATcTtDMKr34kDwF8h3M1CAkuqa57pC5nZdbh6NofxrsQZkN",
  "key5": "58zspUgbxmEVzn5MrYNg75EJwTcnf3BdFdh7gmQ87VEKkYxLgXtfowYbKCMCVZk7feQuNQVE6VBJvMwyzPYbbQyU",
  "key6": "5nAjTQ1Ec1MzukmPdch5UVHX6wyVRck1t2Qc9fYTxeDPQhSpqhJvimj27prYNhns772oVkkTmoxSuHVcDWdPBaUL",
  "key7": "NWRFWpmX7jpGNyYigUDGGYtYkHMX8bwobPc3sKNnVsT9iuoCXqrP6UC2sEbsHngdL4LG4PxoZLw6LZGyyRvL7kJ",
  "key8": "2cHgPbcu6sa6BPntCndDsW9QPXYKpD6hJrwMpGbKjvYcs3fD1ForzrY1Fa9Mr9VEMGFCNUUTBJmwFdt9EW49qBsU",
  "key9": "Hrpeb5MJKdKvEHC4UmxsXBP91P4foPeSZaKncHLpyWsRzxXA4JRBB39ottkket4zefcBjxzv2rEh5Hsb2pAs1n7",
  "key10": "3AXmPnE4UbGxmSvvVkpxS4xC83KRhJb5CV7BmmWAYi8tApVpQNsLQB4kJ2UP1tJ5V3xPfqkjwRr6CHDAZPjS2eSD",
  "key11": "4E5BAE3nwMf7ZosVhnXG6fCjCB5HVinWVYwQzghknAqW8sTdcpRbYMFKKeRrSmpZUgkErvTAksqG2iXu42CRiYns",
  "key12": "5HoUcodzLBL322tAmHuD3k2gbq4E8cFWXXiRUJyEC3NA87CBzoTx291byKBLscTEwykUbyCyk99Mnye6GdJi1nWp",
  "key13": "C9g35PJhktHhjypVV5FZ8KZbgk9XLYCA21vXDGw224HhFuW8TxGPwQxzgsNyeWmVPYzG4F8QwBVBU4mH1wgocXp",
  "key14": "4aGN2f5JaJ39axGqm53Qunm7siSPkLgi8YEHq3DzDS5xpL4HUzE7792M7Q3rLREBUm9iUqjq2tCLyX7Pbw5PEQFQ",
  "key15": "3NWdXRvNbiysQaBCwvami2shpiKwixMYX8866Pc3ud5ruSF96VYXtJiPiQm4yemsUSwTW69QNCU47WGwAuvWXNLE",
  "key16": "4CtC9CBBSwxmecoDYQKA1QkgQYUee3qsV21iN9mBe9JkRR1HY4v8MFcx4w2BdEGZ9RyjTrZajnw8YH8mfj9f9UBi",
  "key17": "5zsAx1upPY8GrnqQdf9zKq4HVNRNqKmSi6V8irmbRcJhJBQrAgiGK2p8wZ2rhKTczHqxkGrPHoYTpPPsyxjpRmjQ",
  "key18": "2oTk7wLikDwYCU7MP9QJga37sK5bTvp5J6bsNZoDv7BUCGni4cHFjQji923NCvupgMGbfdw5TgR2CkbooiZWs1Su",
  "key19": "3pwRgzBJibohSMnDxFybgCjXH5k5HmokbFJgMjrtwgs7mLR4JAQ7TQdKkA5bEN9UGKHx2bcHinyWkQyn3GLdr5a4",
  "key20": "31CZEhybyR6S3MUc3odPKZtrTkVYv7fDsMob5tTVZEyzAgSpKpYrHMh4ytKR7K6xtKPjbcCZH6XQFaxjHxVwwYHe",
  "key21": "3SnJ7eKU1Vh5XckuQC8sWTATggihKfeRBtwC5qMcPUiHDSPdphC6YqYibuzqjQ8vymMJ6JHUTfqLPffvUgJP2Xf",
  "key22": "5vHN2sJsvCNkVHuUU9z6jrRDousx3gXJpdLqTo4t49URHkqU8GGKMzSw2Q8LYgP7t2qanUDRQaFK6Z33CpfssFwB",
  "key23": "5pp1ESh9dVjtb5sJhhgP4amEnh1g1tSiXTKtrMQxfpsRgqEfMYZrs6NPWwCoNPeppwKqdBi8BTf3VHh6g1t3Kff8",
  "key24": "4wyfRzTaf1eVkwNFxq17q4zeFJ8h3caqfgfrX1NHxienVL8HqXtcDArwhGfSSUcMwMzCmH9yyzWK7hF2k3vRUwv7",
  "key25": "24VV2CyaBSPGTuPNeFQMBWb4fVuRsEqYKZ6ek8odDU4s6GRy79VYbHEcTLsAsbXmT3Jw8Vg8PVVWE4MmALbEdFqC",
  "key26": "3xXvZ6Q3rEpX6LhjNwJQNUxGmB1herdRebP1grHQMyxg8dAfGR1RWL5h8updnKPDoxVGoceVNECmuRTaNBcovEno",
  "key27": "3AC6pr5RCsQHu5u4qtn3g5aT2NCi345VzHZnUpgYN8waaVk6aue8j72z1L8ZAz5syFbc9k2Z6Z35s2zRRT7Nia4Z",
  "key28": "2ZPr5kmxrqeNZgpLhZdNNRPrik3tg3kvYyJL1JzULk9dvXyGCrvRAq9HTaRMGfZE2yoi4QxYSuidodXG68vFyZyz",
  "key29": "3MYaq3D3L1F1SS9NdH4GiCcUVPuqdKZtEaPYGCcvWBQ3o2wU62khLQWWEctdwJruurHKajRyuBJhoLgkzvv2Rg6i",
  "key30": "537Myz1zLLMCG4dSmmfRrxJFc8s7cQtqb7tWrESvUc6s9LXNrUegigBGbJ7xm5D1dCM3JL9CymSuVRusjBweBKMK",
  "key31": "35e9iJ49vEBrL3WDH9X1WsZpiRH9QtVUnMRWcQvWKPNA5xkK4Kamfq31idMzLyyG1UyYLe8parht2sg832bAF8NV",
  "key32": "4uUoarR5fLZtZqhw5rHvWjSTRkT6aNjX9zPa4hZPd3Ywuoxp2VHV7au3nyYhk3DePLJX5P3amwKWLZYYKkuipDET",
  "key33": "4U5gViCRoiHizLkFQHNks1fTz4nMWfRfHw8DpvKpqMecJ4vpZBjwDgX9k1k8mxZWZtD8qrxCqCq6Tp5rFTpQRB6u",
  "key34": "65d7DUFLUUNDHB4MPMvBXC82u3f7DDqqaixYf9q6M4t5puX8EtBJRYtSq2nNbtovTnjTNVS3RApjQEzLky8fRF6U",
  "key35": "3j3vccAyzFDUyQfgsPjs6aSefLjW246vXhQnYLP1CQQoG52iyuy2HopsyftF3dUzQzgVhLivxbpfyhyxwN7U37i",
  "key36": "MW5J723nLdXsW87e1zzR7DjqVic5XL8ErgDumByPEnkivZEAvvUocRV9waA3FT7PW7nrG3CfKVU6K34rPUQGQKj"
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
