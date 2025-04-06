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
    "4PmKQgRf5paNnNYvWoZkiDvr2tL2VNyoYBAuE9oFD2Bk2JcSBee8r6YK2p3mwvGE3DaA1kUYaNg9aKP5xQKGMSry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWMGfezJfdKvpKQHqzK9f34JNbXDG1tMt19Pk6JCo3c26Jb8hCYzqMQ3Z5dncHepBX4F4vr8KWLLJevE6sNiXuw",
  "key1": "2GSAEYhQvA4FftVV8cfrSLxxvx65soAuwVVckfyRxb3zuJ5cqL3Gw6tgK1cRDbehhVLQkHn45SRGAYcXB8vi8M25",
  "key2": "2yqHD4EcGNkjNGnWCvVvP3YcxXWHWrnG9HtUQxkPWFPY8LVnf1jPbw1kHHUj1JKcXsQhcrwtpRWRem5RKL9GobyZ",
  "key3": "5jqg4m6mBXrmd3EbpHQUUtRP7avnPmfkqXWKuTD6pznmpeyaf4QEgzUu34hWbSuxJJegVsLTeFqjuvVjkcaJ3G2t",
  "key4": "XMFCoG6ss9hHngT6j7iU8fEEEH9cy9fNamWofefijE1k2gCF54sHXawtdMeeMByRN8cYp9waFwojzA9UmmxuomX",
  "key5": "3GtayhFWqC4sp544h52PQXXohUAJp1MRa8NpEcWiiqm27PwkP7Z2JWExSvCb6botkZxY8aMGVG1Q4QvMM3UgKoog",
  "key6": "4dz7GgLMj6F2umQFE4EqpzH2ry4xhJ3Sk7q9akSK1GdE7N7QdptmTGdK2tqewu2robjBfkXEQ4cVjJTrQ3ZkzSq",
  "key7": "2UjR62SdzGj6qspiXRA5mBn13dnMfyhX4PsgmTQwgXqbweNQimWWzCNQq9siFpDfTK1xPis2uqzsEXANSxRS6mQD",
  "key8": "5KvwVx6DHwvq3asR1ZYoXB6h7Zum2Zkoo8CLVRu3SUodgvM4cABavc2SZNEYxHZ7DbUxjLa3Wa8gTWSU4CoJECoX",
  "key9": "48Y8SWMFXXrKUd3VMAB6nZDyT1hMpC8zJ2ABx9yg2qYScPzEvUchXuju7eKyBewBaj2BXFJJyQWvdKavYxomiNg4",
  "key10": "3xkv4vnsfvF5jNCStFBzDf34XqHc9EZDUEmra7AbbxevHp77E15jrz4TdYMf16DF9nc5sbaf2TUUHtJDcmZfvsEr",
  "key11": "sV5DCH1jTyqNjyfuWGLsh6bo3fREPuwVgq49WPL1pqXPAHjZnTnjpYF9kwACVtZe1AHCQE1umEmkTrQadmPfdvB",
  "key12": "3BuEtKJ9uJyLazcoPhZ27EreFD3ZDXtxvubw7osn4w5XMsFVh1P2wvc1Qi92vCjFnRq9dPoPPfLZXZcXpYDhcwi8",
  "key13": "5DLfm5sFBa8Hb4JmNQxyRmpmadTu3A2zEedokVVo1BWfZ6vyt9Qv9QcZsw3PYGR4KxsBXPmRG2fe3fdPn7qxSyRH",
  "key14": "26eEe6KFDNHBvmLfczAwX4uuGs1uXj82CLLiaNn9oYGvEy9UCSkNNpDttKnh5DrS7GCyrVA3PywkKBnafwppWpys",
  "key15": "62mX4yup2zU3hKCExbMJTKpVDZ5KB8JmmyBWpPSRCHB4d1TtVjj28fyDb4SiwWXUekqitTbKc5n1kP8cCTrcfdrS",
  "key16": "2P9FUYtFLNEL1mMdE8vLuE83gqydg3PYH6S29C9YmwV1G3ZhucXd4HzjX6MVGK1mm51iNfcc99dw6zmyM1yiikts",
  "key17": "3fGfHyVE3kthgJaonbcNKg3PhKbJ27DDgkmjLz9syiNqrvRAqzccYC42QyncqFRiEXsLcZeA5bxYpXxWwV9yd8st",
  "key18": "3XmSF4WL7Yea6WBFzaLLP3YU3iD9M7GabkzLN4KGB5CvhcjvP9xs6ySov2yVAoJZskUHFfaksjadrcAM3FXx3mbe",
  "key19": "4nCybVShBEwHA92Ea4fKvJxRBbBfU3s7EZgGcUvHBLwY67XDynXBzfdABtNyszhp9MFqTBFBx9FLdTH53ZUJ5XTZ",
  "key20": "4iVC6xPhSjBxYSswt9qq6BT8VnahadGtedwEy5zTU6rdhgVKXBCDr7ob1u8yCWjanu7DczEiERoQhKxA52sznbvd",
  "key21": "7qQZTE1yCHeQvyJJ6p2imHrkitR26wu3u4fPs1hjn2yVDaPDyBPVHp5S17gNLA4ccfCZhUAhokAG5mPJFVANdVA",
  "key22": "2j1dk2F9EhzeNQyF6iyBnYAMDmgABBF4feYsTmAod1M1Ee4ceNqQzkisCBu3QsHKQuBkDxnCwa56FbgsSgKW5dTk",
  "key23": "pk2ZS54PLfdZHCkhrA537R1eyyPE4kmQzYLtY2rPT3STjmFDjqyaZ4J6aqgmbYNcrmqNdrEC6j9XxmTyspJpN6R",
  "key24": "38ycdWkXC5iszC2nQm8wXS72CoM3yEvgj7R56CnXMgHQmVYSzn1ZeFNudqZf7VjtNhnq7ucMCotqxMhFMR3hNXmn",
  "key25": "2Ndx4NxQRGdvGqM5tGRZU1wWRw5swNRb2XJrsMVfwh15iZauDGgdj9phG9bkaw8Uz5XB2e2VNwPqQXYLjJzLSht4",
  "key26": "CFWFb1eCR353bRtshNUHBckV7WVjP9Lpd4m36FPw8pGDopB4WU3WZ5e4NEb4xtTxrMyzzeEHm2LkE2b2popW7c1",
  "key27": "2LWkip6y5w9Mp4bZXNhmY4Guds6LrA8aYunrrWH1xYEWKBAjs14hGmwUWnjL5B91jTk8QynenCoAwGfCnNvKbsA5",
  "key28": "U6UHTnLbcPBzERb8LAADFHr86hvd9ueR3gsNJ9td67noBhaCbVMpkCotojTPK9Hk7aQMCF9qB1yD5DH1r7xgnMC",
  "key29": "62LWLEWUKRdGSiZaiEavG6VuvejuFLZYo7s8MyzP3LWLDu23ZhzqjzXbgxLZFgCiYL8rEaVrQNqPkZN7NR6WNy7e",
  "key30": "4UYURMCESE5zMdcEzKJfFeaRm1b9cCdhUoJdj7T3QtaDaCq5xop8gJx8hRy51bi5EB2sGvSYcBz7kK2PLpbHum39",
  "key31": "j25HUUBhjLog13E995wYGK2c24dJJzv8xx4KzxBzqnfvTJyzhzFNH7bBXD9jqW4txTvmGi7aFsYhnf8EKPN2d4c",
  "key32": "2g6ynQvRuPcSG9U7XV7qvp9XPRvj9wTxWuSNgqEHALguCMmBQrYtKEw2rqmz6TbA3gFPkg1LaePy7LFkTN6py9LK",
  "key33": "5oLkDYfNrQZj84Yyg9Wr5HAeRbRbCpWGz6kC4kPyFUkTdKyVebkxHca896Ntou1QMP1CHm9mpCQx5GHCCWzVDhUv",
  "key34": "2dXrBRbFeCxydouFA67e7tnJWrazsNZHVK8PpwkC22P7aZnL16N9SaeP1AFb8nP2YDrVVtcgmmSSTMwdDMTeUeVE",
  "key35": "6KdNtTQWpM3TmHmBQn2cDbKAba2pkmxm6nbyoQQV4eBifExXHtugQ6qVjEdw1BQFhbrUuxbWMFWR3Lsy8nBobfs",
  "key36": "23DnG6qZkMnVtCAQsQo4AoWY7iYASbhJxWfJcz6wXe8qvdgERcUpheDVerkZqcRNSLg2kUw2RbUg9UCUYuaoEPrg",
  "key37": "5iqgjha6ed7VQrrH7hCoFpiKURw8FH6LZ896jk8Dk7apsma81K2V9xopi2xF1NckEovPnRy4yxzAJu1dhZoi83Lv",
  "key38": "2TrWhjJLS4Svo1uDYD3cPj41uPJcnceP716YgEhZAQdNZv8uu8zQ2RTsGFJHZpwzuBw1JcwCLnNmCf91inEzgcua",
  "key39": "3i55ZKARdGaWWWJrD1wcXpKgmykaMvtrSAv2v1Mq5Dea8wtwBzq9FUvswnHGQmjivV9mHbcdJ4tB9WfyRKegJUdt",
  "key40": "3xC29YjgrqtQQKT2hjgW3KxBfhrQoJtV1RSJu6X5KR1bewPbKCSff8JDxqMocnBqTroYAYeQnkYsp5hrZkbT3ys4",
  "key41": "5nLki5rtTyzNhyvBNpzYU175F5PwGsLRCY58J2PTgiWD6YVVgFtf8YRLa11spnduEgMAgEjm9yPWxcnn6vGF6N94"
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
