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
    "4Kn4KmvhLxMqxSnz5fLEX5jNMB5ArDAi4beBJq3uUi6DLVyDdMo9tzXoChAvpb3nqZHAKrfJHzn4273BKHxQVv7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2URP8RsjGcytV5WfT8qto8qznet4rWvotC7v3pNsxyrsA3cezsL3mCJTm9v3JM92nknGcmFBTUzv11ZWx1WHCYnz",
  "key1": "638t8deGCLibWvj7zrLRQJ8ybWbusedFbktM4WTD2jXYM2pJyovEudWH4dBUBg7tGZEnvTHYwGjRL8qFiFeyGHGw",
  "key2": "4vd2AzbmRchFK7pAAbmKeAD8pcKkBBqNaLuj1vJTJMfJN5NcxvPvSj9pENiCUUWoZtDHaKb9K7jTDmgFRJeVwyNw",
  "key3": "59AFP7ooKz4v9TsyAmMnWLsu4225g61gLSqFyruNwPvZts1r9VGRW28sxKTMDVKstDvKgDvdirPu2vy5wBFRkYnb",
  "key4": "34iQU2k3Eny5EFqBJKvYdBXiXgVymkZzmURaThhiR4ya9r4o9D1VqUjdeSYJ8QFspfKgEE8hgmaBDc19gArW7GWQ",
  "key5": "WxPd2umMiuG3yB1hvJUxyp5G8Kk2PzR3ZTkiiHj8zihX2NeoMh7SK1wvyuswCGFF1Mv77SfEwLu9XkFWK6dbuqY",
  "key6": "67hXqNT7j33QgbofuxXVdyHzRkeSxffLUDXYWGsNxEGjBMEp1HYhKLQgTF9WG6TUBQ4y7c8qkBW6HJmoagHniLnF",
  "key7": "5tZDotkvAkkLgT9WfqHHmQqRhZJa9pYLvALsatnitnD837KkqziJQ9zzMr9DG6wn8JrJenyrskahXo9rZmMAmPn5",
  "key8": "VCQhFjsyLMrZMViBD1Z2yA674S2HTaJjwDCuu2R3eN5B4MwcNdnNNQRTik66KNwyeAzJsDC7jsrMr7N9TbTCCyQ",
  "key9": "5Qr1CqoPbzuKm3QGM9RK2PKtstzdYmpSrsmSmrvJBikCKbGi9ydbxNquqNqGsNnjX7W5GHYc7nbPr6ix1jAg16fs",
  "key10": "4e99NBc81zCg6k4cJYnBwDQABpx191HR1pChSWBrbhEarXXufVsS9nF6nm8J5d2bUfy8JWkiFGSthBv45qYXXax7",
  "key11": "3E2npWSytsZqxD8Ukk9vz7jANFJXtnXACfzMnY7jZmhCvGaf4HhGZsGQeZ6VRRGRvvUx1rxVkb2bT5GR8uZBQL8L",
  "key12": "fK3r5LaGESx3pPFSdn4Tx4oNnnAs6UB7Pe2wL2Vm3RiZbKQkuKwwZ9aZrwaQyG3noj1QgqzeaytUgx8TGKqBoA1",
  "key13": "3zx4pPb4jbbDwRDm4CosyZLSJpvGPNJK4kAxkNnWftTfU9NgG5cRLfXNV5NVkENDqmfe683fUrVf5F79KLW3UT2",
  "key14": "3bazT45FTHzkTYSRqhTVaRmkybB8ne7Z87x6vDnRdipmPJh4bRmHHnHF7Bh2MUhEBMrSDyLmJpvC6fA42m2pePec",
  "key15": "4tggNoQ44fsVF8nwvtYLamCjRM2PdAx2SdDj9YvtLMw33E7etSxEBvRTRiKeaCE3k2oAPFJaKEPELEj6NC2nj1UE",
  "key16": "xHsBFUmEmMSGatkKEV3uh1UTkSwDYtfYsJEp8KwxQsXmxQw2bxeXi2QGP9Y6cYaP6VusgW2qqZ3JhzQkb5xDcg4",
  "key17": "32Nrz3PbqMtNU2mQepgi29NEaqZfyV9BcRiqqdWX7naDKgDdZMwRpzvHbhmRUAsFdw1TRD99fXEjLskVq7AeNFiS",
  "key18": "4HSRYc8mLGtbcVkyounnH8kM7VZkkTXQtA37s8DU2BremJkFa44xaashGUGofo68e6fbB6EVL5cQ7Y7kMsvuWJLW",
  "key19": "5x3CvhygGxN4zE47bALZjWHpxpsAG8QXkWgLASftRdj1thE862YWY5cKz87LrmjTxY7sNn2noMWdEKpYWgnp3AB4",
  "key20": "43QJAe3hVQQchhePeB8sLMmxVHgTujwjFPKF988Y1NtmPeU2cbg7GCE2H2SWRPq4Mzd5sJWXTT97YPgseTbrTYeK",
  "key21": "2cZKur2Bq4TYMNmCrYJC84ZdZ942NwZNnSS1YBjCA9CQSZXCKP4QkXo3MKEL8j1BBCfWKT4PGiJSHvMLvmCcWEcd",
  "key22": "3enb74vBSPdPcC3eHfs8Utt7CLnHmc53wBRQ7w1SQG81nDGJqg7xWidBjnGBAXovZuc3PmfKapC9AGhZutrBnQ6R",
  "key23": "4YhB4dfendysmsg1zXJz6PB7PPLBHmdcmHtaSnsJB8ggXqiUzXh1gWePKxfPVA5AZCnPD3YbLQrPmurDae8oeGS4",
  "key24": "mRALF4kFzzRHSZtFW6wcZ42rpSorQd4prXqtjXKUNA8W8jK8STBvkiHJxYzKRNCNB6aU8gTN8trZvJ7dhkWvF14",
  "key25": "5EYA2Ucu51PsDASxAXrSvpzeukKvGE7jPvXqraEvoEHtFdZa55BryTz7b6sWTXhq94EPxCFCCjvp94rXvzHNCsKz",
  "key26": "3wcVUkeTe2hHdECRN6GXLbV62t8PGdDmVfLqPMhfjYdUB1gANH4cPZbrHBUYFh7UYEdzK6Ur9Kc83BXEp2QNc7qB",
  "key27": "2BfSBKN2YdmggKjyme6sYnGa8vM5yY2eKW5bpf7JXYMu2xDiy3R4wAQgNSPgqYJwmqBdofzW6E3kQ4D5cTX6iHDF",
  "key28": "VzUrEDWwiVriLzcXA3bjPBEVHivwJ8Qs6S1LWphRkYdAuMLrJVKaweReJxSEhpZuTX5AHzapmX8GRQRHCopSBPx"
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
