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
    "67iTYe4daFmGPZotTa4cTfshfnxL9xHiRA3rSCSGqQszegeQZc9cLU2eaXZ3oA8p73rh9UdtirY52yP5jJ2BPXB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWMQBVygjrRJ4qkY6bat2RWDM5vMcs7Y7rgaTwJhtutzv6rnRXApFxN2ksEMsV5LgAuc1ghMJSuWHN11y7eucXE",
  "key1": "2iB5n9fh9zVX11cNhH6d9ymuLqurj3VBHZw6JVRHyAT8X4HtWRadTig6Td7k6QxHPFGzD5e3MQ4ZFtdGkNkCFqeo",
  "key2": "b8WmtzzE7wCueRqwzpSVajkXLKTiK57TPyimhBhF2c3wJPAtNLYoaVPfyjxFU7gUf4UHFbefS4g4PPTPSRxLeAE",
  "key3": "Fbus2KKPSwamdApSLSFRCjBij2aP7ZC74hVhKbcQVqTksBMs76NMt97kpCU5kTYYNA2RjSAC4RGHQJmFL8S6kDB",
  "key4": "5de8qNv7AYxdD8bMp15KKtiZ8xRjismWe597yRuAS9ixTnYrQgJbMv3SKRUYCrcyWoZkMj8iADGdGf4cGiNPbYmq",
  "key5": "5cDghLNpaKrBvpxEdLSgnNqeQYYRtW14haCSxPdhxgbdxDoQqas4Jd2gCLoBpqcXbTFQRu8ZbYYtt617V69CTZSK",
  "key6": "3Nxj9figbvrTGPhqcuDeuPXMh1d1RiibuN1mfJsXPfr9MUzGpudaPHZtE5u5UR7Nsy9pTm8V3XyQmp3PdpCvh4GM",
  "key7": "MRj4axJqBH6cKFj3ap2iKxUbZbVdNnTmf2N25cLTWfKQfDMiCYumdZMfjQswq6zQ9zSAzHE2uhibrNCen6YZvN4",
  "key8": "2RkSyegxYBazdnAy66cTiGPzdkeYaoBgWp9HGLvKxycVPavDXMmHbLMskFJ7c2tECb9u9SCFiPaE8s9NMfS9tby",
  "key9": "2hCyR4Yweq6VeCNtE9sBNTmnjCafCzAEMVBUEbcZqrDFrMU8afaFnnWQ1a3KYiaCjG1ArEYziMKZM6bYWukrDtgW",
  "key10": "4gkZR6XjBoFXJwbeoNz97KMAcMpQZoqjWypg5bBzXYtXkPDQM3RCFcKL3oEw1Bxd6VpPEee6qZThdZ3ApdyKJh9A",
  "key11": "4i5gsjjaSe1HXxDgjixzvsA7BGXdhAzc2xjkrPojmc15pXw9QjnLqz6QsYakVE3BGiaxvxGWs5zZB3hA2szfRDv4",
  "key12": "31whaF6g1dottqvPNtSqCcnefx3pzCAEv218KqDARLqKJtpTm6GEhSSkMUgNeHcA5EQWx7TxPS9cuanVhh4A28g9",
  "key13": "xwaZDtg36cEWHEAguR1eWRVxDFrRZiNTSbMDmabyDiPAFWvVEyyXjb57RWD5E9Rg3vW1VH3ttTcoasCvpAqSxK6",
  "key14": "3nrBJCkijFBZt8MSb8SQjsxPfU8PX7WU8VX6LNE5iTr3k2L1V7ehJ7y3KWbaSVPKBUSPEWETqbMwt2KVV7288Nw8",
  "key15": "3Fo45Ag7X39Wvfiq9t3Vix96wkXynHzvtcebwHxNTjn8zUQJQq5kVKyyjF9XmkMyLMGfwV31RCeSYExF5KjyVsYh",
  "key16": "53imqbif3CS7TgEA6uJ81deWsmPT7b6pfRoejHz99KxHkJNNBXUXRnV82sp9DH3F7Lfx96QyYN2i5TskLq44Wy1Z",
  "key17": "5D5Sm5pWrUF1vNUGbNeDGb9L1Ki75PGSyMP423J3ehrQrvoSzwLCqVJ7PB5RacYPPKiVVr8iVd94EreKnNoQz18q",
  "key18": "2YZDAWBF9LmKxKnVxNBPghcG5Ez9aMApJX2sHtzFkegYeKbmNWHrr7Ru2AKebTSFKSMyGai4XWgt4R7rkAbyegSd",
  "key19": "ZvAoHn2E1N6jk5LBKDwpEwttigU9jhKbdLjhJ1KFKuVcP98V2LzCqSHfRWnnPpCr6nQhECsNnKPzEx3KJ9HJZMn",
  "key20": "5wUWFiE9dMVu7LPT3EqTjscahbNPRvAehyKZg4d9pWZed2gcgW9FQgKTTubjWp9nfgckTZQpFFBKicGM1jMXAztw",
  "key21": "4Z16MwqbYqfYUrcDCYcrLSYGzHYGLT3mEsw8GokBbjsyTtGMpBc2jMjB7HkrwKNDqbeX75WGQvaohaTSP3w7rWCP",
  "key22": "2pRyQ825ShJH6frDwZAurfHNXqQNAwAFqn9sFeAcBmcbDyzdFZF1dgHDgMBNfF6E7x6PHEzbm5aNZoXMu5iqgVgc",
  "key23": "2VkrZc2cMyXi8T719FxSWYAgKuzYVqAFEXQ5a869ctUkb4dPbrzHtifssxwnhELvrK22d4mGM8HcduzsWeo9aFR6",
  "key24": "F5e33L4bvCVeK678Z9pBqYYLDs95zmTNVJ1iPJDnVyxXdntrMEhwfVKoy22iraQzRwFuZw9YxUoLfSPrNUc1wHD",
  "key25": "29sbEQiyt6ugeHE8TPukWNCKHaD6fZGAPMuSCF9jsj9m5SyfPiZfCi2sPRZvHpA7C5dji3REsFZKci9Tyi9Nk6GG",
  "key26": "2v8afDUAnjxK1jXgjHyrnbNz44FMX4jnBbVa6RU9ZTq6kQx2QYuMNZGbBb847RhowisQXoGMC2TF3sWafP1EsmYx"
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
