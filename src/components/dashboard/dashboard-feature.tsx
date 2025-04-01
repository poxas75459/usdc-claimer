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
    "9N6527j6cZeVixg6ZSYzQEEb2ri436SB6Bb2DLJoaDdGaTMXG9Jmngime5CQY3T1PYcpxWkQWqtKbxFo8xeQhxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6Rh2hrUNLc6MVJSuYk2vb6uewRyxeh9qMKArh1GvubvtR63gsnQzpZbwUhUM8yuDAzYLuiehrQnFGBS26Xk4rB",
  "key1": "52JkTYPiBS9XCKYyPqH8DyoFbA4ZXPE6otCc3FQ6adMMEYPnVneacSgE1AvrU3QJXWN9nthd1VFJHZFnqpDkNuxb",
  "key2": "32RWNUfiAmihhXDANVzEnCKsYWLRrwXkWM5AWMBNV3qWKftuRumwaWGgRNJNTh5Kw9BKHjuuxV4FzRgL2d4UDKE5",
  "key3": "3RP75epLp3y3kK6rcfQVbPhwWxjS4LWpNmz8Lrz6mm8Wj6fY4o2n9ckkTtARpc8d5yB4uxeBQYKnTyT9tgjKWWeG",
  "key4": "28NVdRfyUK4yBQS1sMyvE8aDLVW1ikbWAm4NwrQnJqTrvYx6XzDuZYsiYCroS5ejwnuZbohcHW4L6gHjSm7kRZEJ",
  "key5": "5zCxNmfxdRG1urWjzRXubszFEok4J9RuMe2PMdtp9UmXkqVLAZLHKzFGQPPWy6zVG7diULLw9iRYe3gRYW5AJ27T",
  "key6": "3Ei1t8q9KGdQkGF8ik6s1JmnZ8hpDBY4Qs2ASLjEYCntCye12YzDRhCs9ArBSu4CrjpHMbAm66eu71NcemxGX8No",
  "key7": "6bTv3iFDA1vz1raHTCDEnzjX6ff7RSet1bruftDA5N3SK5PE8iPLT98Tw2uNxSPM4Lg5HvRxhmDbXuj6YMZqVzz",
  "key8": "5wyVFKSvjJu8oYkEzDoLPrym1CVf1TcRXcbmDpSinzsv55yRSmz72ACv9HJa6KiXNHmTwueUhcqLdLrZHiZsFzag",
  "key9": "3spz3A2MMn5puYcX2WWFo3jbMnComn6BevZDQMEJfprnqcjVkFYhAiCvKJ8xGq3ipvUTPa3nFZhBtxhRSL2mRYnQ",
  "key10": "36pu6f3FFfXc6T1dnSjqPopXp6hTJkAUwRmMg836gnA65xrBms3m765FZ8egkeqnZRhmu1Gc1TE2SCHf3HDBrRAm",
  "key11": "5KZ5ZsMTgPkxsCrUX1p6U6Q3s5WAD6extDfs6iKWsQwB9eWGon7RAeHANkKfTzNjXtY5D1wkjb8x1V5saNh8QFQy",
  "key12": "4QBX9cZfgLUe9o6mka9z13gbZF39sMDJLYtMXAxz8WKHu6FLzb98mmGAQdpcgKPpQ8p5od1krjmCZaw6Nnjn9Qsk",
  "key13": "psdYvGsuYiJyt4z2Zfieoj7btnFGaS1aaa9cCV1yTvshZ7my9fpcpH5aKDZWjytCSoFzoiFjrw4EwYfr9VnQKKh",
  "key14": "25TZK3wyJLrccSbwE9TEGy9yWWoEsK4ZhYisr6NmQjXTdH7aUZkN4dgThHqTNB4w7jodnj8QyqPCfdRfYACsJFtV",
  "key15": "3GD8ytbG7PC5JHa8gJX8FrBSnd8wwDBv4rXiEiFdAbvvVtnMyyYXCM9SHqNJsH7KgXL2HhnQiNR3VFzGjMUbmJPe",
  "key16": "2F1tW48jUTPnS3grwEgMKvT3MGpdr4e8PPtq7PMYEGtpXxnThxJrKtz612wi9b7vyddJRTbsvZYr3dzgqj8bTYh1",
  "key17": "2C4EJzeboHzbpnK4k57RwtnJZHUbmceUQBHSwU5o21Kszk5znciSeqJbCYwfvqLuahBVpiPjApuU7yG7G1EEsdyX",
  "key18": "PywNKezTT1dph2N2X8yhvgkp4ELYKVocca26fEkVDPpoDCuN5S4DKmYiAfxA6V8B2bvcRaWXdbBjKBZHpb86jUC",
  "key19": "3Y3iHoKUoLwATFB7JtJHDT2uNvZHzmmCZZaATpyCwscAjaBLNEieqbkS2YP5kxPZMDD5W6UeEW1irdiKEu3STVuN",
  "key20": "Eqy7dQaGei9mfb73x81GRkFyBSXK73tWtHhiTBdWqSANd4Fz9TZJoJsSn5LakWerCcxyfZcc8B2LxvRcqqeExXB",
  "key21": "9pBELD2gZnnkpd6Y9wjY6zy7Z5TGkqN97mZAjwUP2oPWp1CaMGSzuQ1KjmSCgHQdXygfbxM7gEg7GyzvPtbAgkP",
  "key22": "4rEJjWhHvpRiekhGs3UCStTxAMfERAW3Pke1vE1EHj5gyw8eYRYKT8rpYD9Pya9BhhLTyThZjYQqReUJwQoN4CxX",
  "key23": "3YcSvKW3ftiTmHBJVC3BdxUF3cpPBWR1hwe9mTHDLJ4bdM6kN7LavCWWYwCiaUfFmu4Y1ucD2i6PLq6gZxrMz99C",
  "key24": "3daCEJvdZfrF9aacjSx6Rn5L2Sy76xCxDtHGMWws1xwrhUMJxR9WBv9f6mC2PWtxkgwxyzDZxoqe7HQomuP4R1xU",
  "key25": "2ozSQo1GqovaGv76goTfT473NdTkVEhDRmi4gkaYjp5AYsjeS2t4BgBpLFVszJoHyyHMmpzMe8GD8bdfG3dLwZDB",
  "key26": "4aBkiob2Qdz9RhZLLVxTVGZtbTEL57MJ6v91yTzm5vihsaLo2LbcAZHGBpwtKtshvugiK79GDGiqqwqBYPWVb3KH",
  "key27": "5BQWLRBCvJ7QwLkczNwTzSXFYdyd4Wu4pw6tnGoKFoxPTR3Fudii39sbfe2PhgmHrpgpJYAvAAcW8kRAZM4jzDEF",
  "key28": "5MSz4s6cSXrHjCgcHtJCJfcBwVXLQv3mVSqcWfFXbZZ7vVYU2hCyTrdsQhv2gVsG9qvFvwrQ3iiXgr1aVF4Ce5XT",
  "key29": "uKzV6DGQnDHnbBjo2JwnXghcX4fXFW3taqPkWJPHTTLkvvgAU2CJjkHA7Epcg6FnCyqz3HEE5kFFzgHT3NtLwwW",
  "key30": "3pPUFnvzmTE74aJ5B9PK5o55gJ3uBXrgpVGXns2ENqGizcifiSjyuR9jiJkYHbajZcbuc6Kc6WdSe3DgqZXfa3ZW",
  "key31": "5xuLYn2hGwiHS4QFBFEoe5XrtSXYh5BEPwe9wVTfwdoLRdgLiPGbJxVSEjvC4FNcPBNXdmPhdK2WCfT9rM8E34H3"
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
