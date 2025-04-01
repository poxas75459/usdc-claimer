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
    "3KezXxQKLD3wqsLSDqTc8yBm4d9JePoUFZJTbB2SRQAXiDeKmS6PYkRfqXBDFcgg9K6sudir6DS3mXAq3ieh7vqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8dFPy8pWdNmArYFyzqxo9FP7d5haPhi4MYkqcCjm5UVbsQx1Bqi7s8hSZwujZRaFzMBWGJuavN4Ecgjg5xjNo9u",
  "key1": "2U3u2YWWkjxhyFGpgoWXQpxeMY5w9S3NmswiKqbCQWUCEGg6DArrHDJT6pMMgWdMt5XFGX3XXsiiHTvZ7aZMsvCU",
  "key2": "3qQ7uf5pBXPFQ1JJAKAQ12zNSQbC1n4hYsSmG4dXUnf1jbzmtyDTxaiPvKfhzCX5qZycbCYtR5Z8So3PSSo8Lj6",
  "key3": "5EZ2mFjQfmnG88mSUNt4pvJVpkh7eZuqERuFLiF3uLTDJMu1cywCHdoYHnnNJ22fsmjmQHMzcWAHwxcXJPGZF9Z4",
  "key4": "5CdntPmSQxn9HABP2eNaa99MNypcF6T2ys3GYzqBriy8NGU6XQ9x93mAtLJ459opkrBkZChXpkaCAsV3hkParboy",
  "key5": "25sb5D7CxhE6vSbqWMgSyzvbjqbBS4ACoL56ynZ1m42DdwLm7uJnJmcPjKqeTrFDWbYbwxS4GUxx48BqrRDrRYpN",
  "key6": "43rieppVTCudN1rWMrZCKwmyAUmRKG2CpQaCT8aZpaRSTfLUEUVF6QkwphMSFBBz1cbxXw83EKdZv3hiTGn1AHwh",
  "key7": "KM1Mo8EAkcFGk3tLavd63XgBG7UFPHwE7QwVe6TKYSjBpwRTQgRTqSnENqTkqmuvTBu15SLtfwfaxEq3sT7x6qC",
  "key8": "5jYMeM6AhEDz3HhkUPc7NpqtoVoki8dZ1XSTJ3dtDUnms9rSFVthS37pwiQTwqYu6PRkoRk98Xakf3foR1U9ZXkf",
  "key9": "3RcrWNzdsYBeyk5JK1BjZbJ2K7ZzLwshfNDrcqgRc4ia29d9jvFMzKujSaw8tX9ZvMMH8vWmtp1gfXu3aQ7E99eW",
  "key10": "gboDEj8Bmvw2jQq4Mrf2DHC1xBNHSksQitA8rCVfTQTdwrx9B3ng9qJryAsUXSobgHfveAFSoh3V2wsfCYvXiBB",
  "key11": "xrhJUMtJBup3v4K8E6gGUTVVuTxTvtA1W83JjKwPYukGtZxLdzetUFD8GKzz5QMGD3L5FHjtNa5XKZA4zRTfuTK",
  "key12": "Zt2AaqMih2pEPNen5VUsjgQGgsHrsJ32zKu3o5TLAbwh1aYXybjiryorSmf9Z7ri5HgGQAWkfZWshfoc7wDshfp",
  "key13": "3Ry7Nc39sJRZSRbr2faq9zL2tmY37hdCHCtVVXJ88PQ6hfA3k3buUZw9NX5CFUsvhYZ79WwcfoQmLfanESfwpeqE",
  "key14": "2YCEf4jE221aANn8S9C98mMchv6iTyNH4QLQaCJMcRC6uBYniHWu4GYmqyq7cmZizXznyt6XzU86faAZ4coMddby",
  "key15": "5zxhEW1L8iSGkMgaNUNkKU4HaZ6RumaA5ELwsubKKYkM5LHuAA75ckBGbmgh6oCqyj5soZaopd4r7pb2WC9MP3wK",
  "key16": "2RdsPM6uYymdowNgtrudooaTCiWQacdonusfPXDk57cRewAB5r1Nybvzi41eiR5TERqAgVYtBxZWHxNE3A8RxCJM",
  "key17": "4vj24AzNg66dNSzUa8xy939jR5pe8L5GtXiBJpxkQ5pjkdZSWAkFsBGR3m5JLEYsWeHsHFtt61AhaMTb9btbbmhs",
  "key18": "m6F5uoVWy4CJMeazBgPNUfEWJ1P6xbq9BqrjnHeGTSGztXcTq7NWvnWLUcoCXtxwrCmL17UHDJP16fTxQE4wEMG",
  "key19": "51wavctjoJTd2xWZVAhJnieNknYvabVSJ6o25HYKuXr3TnAHB2hGibf57x8wrwrnkoR5LHpodwuiQ6DMXX3wkNri",
  "key20": "61bb1LNr3UZREZprqRvGGAUCTUboC6YR3i1LQzdGp9FZd9H7iBiLP4Bvvc97XHiT5qm6LvQfJFoJsv4cbEWzokHM",
  "key21": "5evvqzC9bN4x4geTHE1fQojDBETWdbe2Mrs2YgpJPyRqS4nb7bD4RNScrmgGHTauqcVhxYfSxiakKn4GZoV4BHRt",
  "key22": "1YfSgbBziR5HUhpSr4z6rExF8eyS6eYCLyCarFsWQ7Q9cEQfgEavrbyGBckx7431MtpL2j5H8enzrzSqcFaamE",
  "key23": "uMjh17nqFLmEXHCaMUmVf4ZhLbuJyzUiqvx2EZGZs7bWsDyUP7Ew2SuFzf7PkpXHRatsWR6twqHksLGRgJtxrQT",
  "key24": "3gB5Sw6bBv1BrRFDcTsWY1ZaYWhT4XRtxAtARJqcsYMDvDVUpi7oE7UP1s1NbpWt4d5QLUFAoJGzxrAGQHTutxG8"
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
