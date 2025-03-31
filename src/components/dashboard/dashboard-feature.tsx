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
    "4twG32NBYzSiMg1rvAnRFDRNrW6qaGPaH8KNawa8b5jvJBVgd5tfuALaAAzow9dH4rjYXKEVzA6Dfu4R1ipY6bK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhGJjA9ULAXbB7HTXGkfqiL8Mk3LjfaPuzkds494XeQpDSXntg2h7Rwiybwrxo8cAURb2YF7wYYHGqQUfCRZvN8",
  "key1": "3or4S8Ji3z7LJNYpw4AwWQZCnb4hnjaA2wyffv1M5i39vk4iMNFrXanB8eaZn2euWXgszLKPHFDER8pwfEvBNj53",
  "key2": "2nCFxtzqFbRciXTkmQSHbAR2Cyc3KjhdvaD5JvkE47ea6R1eKJr3Aj1WPGT2P4ayjC87ArxJjzypnFHqk4TAo9gb",
  "key3": "4JZdfvEPgE2A8wKtJTf2ZKN46qmiTwFTLjNqZcy1EcShXbcz2LBAdRaeHXnv9McGL2NaAcsHnKUMXRKTWkYtNhLr",
  "key4": "3RFZdJrNmCAgMxZnccZajeSMdKfHkerPAUHfcoVFt5zToBytj8Xct7RD96ePcnm1wJWBhxAeRcDmavBmqnC66CPZ",
  "key5": "54sd6A8V7ELL2KeoCfVeM6GPwTKrhuq5eK6JnBaywMnT6dba3BRGWDKEKpUbNEzbLJkNS9TzA7mqyQeZXQzXk8JQ",
  "key6": "2nM5XyaAmc25RAzeAPbyuSwXuoNMZ7VGRZjeQL9d4rTu9F2r671AU9vv9t4dtSecWxsjV2MA4go7mfU7jNx2DUdw",
  "key7": "4eh8jajwKrw7jjo81YttWAhqCQDU9LhWBwMAfPC3TWYw9wg7Qdg78zVzMK8g4AsdtGRqf1VoY5RDtQKp6qp3s3Xw",
  "key8": "8oL3Yf6qiTtUPAcu3JTWxHNrVkSfoaJveZpqdwRBGY5f22yDyAiGvGmAbKnkZGU8GPa1QmU4PZW1DW7MbED4Y6y",
  "key9": "53kgwSZbE3UJVw9GzHHeRRCpeRJNuYX8VjnUWS6jr5oA41NDtX6mwfoTxUrLivweT9sjMuPRYgjReM6Hh79rHcjW",
  "key10": "4JnywUVR2CkGFF8AtV4qrfjKThX7pPVx1kyBhz1QiVnKRqwkxqnzHaDsWHvnzq52w4hhuvx4BaFVcJyZRkD9d3jz",
  "key11": "2epiFqQxtauqLmhu9UZxUqhEqSfcEoiD8jMJbjtFyjY6oX6YANsekPRF6q824e7kRwVr5K2GGNhSFmDhV5apyxuM",
  "key12": "4jJ3eUf21Jxmb97e2D3T5WycnNgwe3myNtXk3yzAVarVg2qqRSFQUHrXsi2HFX6XgqjH54esD2JG96AyirLtW1Eo",
  "key13": "2EeWj4sqqFjtEdnCnFfaFAuUxJQJ76Es7oknuDtzDsVUCygFgkfpZCxNkfkxgRTMRnESm3MVjeBAhNiV6B65a22Q",
  "key14": "JjsAEf6T7tuET5dUTJzSH7owi1wcYp7P8t2FtMVUwdJuMY8rceizN41258Sbz48HLtrJXb4JJmjsiKxNFkMCue2",
  "key15": "258tsVA1uBi7J8eowaddLskvgWu7Ei7ihmeKcQjwZkzeZRbfJP1yjcrfVrCzPj5s7mcD33E6gaEjTMf3Mcn156Ke",
  "key16": "2GtQK3e8XrJ3cNiTMh1TwtzLcUV46AYnfugXCPpEZyKvitvAygfnobxZkSTpCAZqja4pmWQz3y9REuy1WFz81uve",
  "key17": "3SMhLcA45iMSzQ86rZRXCkvgDXRCakqYuZQvDgfJnH8phPbKkiBjC32hQzUXeNfdxLVXGDHyCnpN7PA5CVhasH66",
  "key18": "4TRQCeLkqHmKf7ZLCWfLLHtpZxRvPsZKK2NjXuJEjqVBY28foBZj7jN67NhovVrkpK9mdQsE2FjJ1nKump9Ese1T",
  "key19": "48Q82qMK79Xcrm82bhRqYcZbTeXrEySsV498GUgn6Bj2AdSkEBkxt2MZ8naH4XGkq7ucEEjT3cEWEiXzsvknizpb",
  "key20": "5VbLUBUezG6UbJ2FDU8MiXD6Wca9f4cTeiN34jYQBL5xjqMMDj9XwB7uK1ucqsbjEb1iFiMK3cNfq84mKyTq2UdM",
  "key21": "5rQuW2hiNipGWBfuxNYrFKnjdPkNwD8p3md5UhtXpaWAuUZXHY47hLfvESReBc6ZD8Sj4YdKMD1M7aUeaW4dSkUB",
  "key22": "8g5Ltu5h77R37JkkUD7W4oHBQXZTq26XgEUXoDcKED3eeusfJXcpS6h5zaTtENPcdVdAnUK5yhxe35jKgJZvUJd",
  "key23": "4QXavgoXik2mqvEtKxMPcr1sdCodmnKNi7ygTZzwcpdrWGPpRuPYeZWe2b9vAD5QmdnxLh2MUHMZwBzDEB3YT6WX",
  "key24": "w5RSiYPe24oTktop19syLJoAYE2Y5dfeoYKc8aYStFg7rddGS2LCzR8HH9uBuGjwvAandHZymngiA8cvNjuFwEF",
  "key25": "4E1WHAjEfGa15HfubUggwV4RVkq7WRvycSoxWA2UUFCJHWHLSPzW9AewUoLfHWXFzjCZnhZz8EZqqKaDmUm7LGoy",
  "key26": "4JDiN2CHb8j9Uh7j8RjXcXkV1RepqQaQWk9tcS4mxoiPKddqcBcDDr6vF1wJGuT6xNQLUUobx6oNgbEZEBycijP2",
  "key27": "ZFh7rmt4FVHoXDTFUyDMBNac7oiwvFsCj5kncm4tSmPRwBjjFNCRJhzeJkY8qsZQbZXoya55rEdqrqcMkwVZsXq",
  "key28": "5tyJQmjaWpTCzDqDH5cjgbV1mzq4cDHqqmE8KHEE6i9LsmpBnMtXYyurqNmaiNipNnGxQr7D8tVjZ6FN48MjyKNH",
  "key29": "gwXLvpHUBHDqiTz7cUg3NxeDjRWKMyR7G3vi1gth898qoBhcam2JcAPsfVPLwvxiAMhXMWjxpvGAm5pPpQF8uFL",
  "key30": "2QXtjNmEJNBKoCdiXKky2Gy9TnRaPks8bNwduZCqskEMU2uqUMKXxeaiTcq2xGWpLBMrAjCBsraRwg4MoYdNka2Z",
  "key31": "2i9xt8kJ3JswSZV4apHQ8p4zG1MT15YCfPrt5PDsaRPH57Zb2R64MzWmQ7r7T89JWBZL24h4FZt1exM7VeQYgh8g",
  "key32": "5nmEBP9Wu1WSGpcgxDHAi4dE1AV63JpWdzadSYR357QMuPynSDxEcNoKSGdCDSEbvJedpUtE7M42ZJgmyKqBwov2",
  "key33": "4EjwB8EniKGx9RFii7WZqmVttAZEfGiwG7HNASHKNjyNFMHGVq2bi5gZpvTF6PDAwucb1nSMc7rQxk1eFdAieayB"
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
