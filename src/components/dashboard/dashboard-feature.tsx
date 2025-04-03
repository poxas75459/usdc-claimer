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
    "3jrqF4NBmM2m8vCLyoGB8nyMom44LwxvVTNqshfyy9YPdM1GTvCwM9Moi39wTBLn3zhD2sKPBVgSg416bZJWgMVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDtHbSTDe8mzBkNp3MuaWejWZzb4KmS6WFvRdRNCkDePKT9hfRPe7eQPMxjreqjx3gbXWroZ1iBwZ3Srrt3hod9",
  "key1": "2aEpEgi8qQ4g24UEY3K1obSkxbLKUG67aFRW8hGLv2FSt5gSkKmiPVnMcepHuGdBP1apRZ6g6KoTFN1aYeEiZqsd",
  "key2": "bBPu77wojqFESURv6MWRMQjXs3DufrfhsFHo31nBsWT4H59Gqw5oYpEgZGvqXcersmb1e6669ZUQ5KDgsKTyNr7",
  "key3": "3K7QPehAdRF7x7X8CLZSyq2N8TA8HK3E4ifgzYv33TwnwPRMgJ5WhS9rb2vpdAKUFd68ScVTLX5n7o7n1SpH4gnw",
  "key4": "5JTgzRBq2H8RNzYkBMpMcspxwXUNyqjsvMFzdJQJNzHLFQddqLrLiriZ9TKAuNt2poz9e9XwXkfFkU44E2WeowMw",
  "key5": "2y1f2ES5yWDJzhC6qePSgpTLbzVSkiwVKKvXisA4zy3VpFqLWJjKwjnDP8eeY7mD1GHDbXMTiSa3yJT7BPtA69NJ",
  "key6": "52gejMhaqFvMQJi9TTkv4Pm78cYUxhw4xqQe1HYXiVUhQQWWP7Lawr9obQVaZUwKXLEA4NSpWC9VoXPxsLZfGAz3",
  "key7": "4R91j8CoUGq1zca9icVeKLkpuxVAFRADfGxaqKef56BrwGwYn3irzUnY4bfRTQ73oo3Yav43ui5pYEUw6wrXBWr5",
  "key8": "3TMbBDWfYZNuqnzXJasiqo9mGjr8QX8iA6Wuo4QskFtjWpp9X2PXvuB6p7Zw52qrS2jwYvYg8hVK6qaMXRs2og1j",
  "key9": "5dbdSasbnszjkq98R1mZ2PfPZ3UVpyxMDKqQueNcB2MKUHL9FPxBCSJaTWSEhXZw9op9p8NZPD2SsoxMUvHg659J",
  "key10": "3u3BZ73jLW3ge2yf7y9kJav9Dhu4ra5kisYknEfLaiyjGSNDjkRZyi5QZkGnZMfRgvx3WT5Wykj4TyFXVs5zdK5f",
  "key11": "3DTDgFMq3pCrNrgbQMehgj9ke45Koxwq91HijHyrd9UDWCn2dp36HobHRyh9ppEgPwFH9YmG9tz9WUyCDosxv8yT",
  "key12": "4Nr9hjN1Kj5ctmWeyRD8ji2hr9VQxot9dBtttDGzWCLX7HDtPKnKCxHoqeXEdfG4ohVK9u9E2NPAXpDw35XKvrXA",
  "key13": "32Cr7qS7mUwmrtdEEEGUmFG23XcBYGj9Up6ZwXmtCmj2fLzRgKShFpHQzVabxLQcrTWBFmfDX4SqvRqcMzYKQDwH",
  "key14": "aAApXx12i6HVz1nWJAUKejFBV8wRxWotE7JAqYmiYj3KEPrbD5EmcoBLb6NdP8Jord7uMwiwEFV7pE7sXtMDy1K",
  "key15": "5QWAYRjjNHA9rvY8k7kSCCb77SWZs5kqQMxcdMa63EzsRAaHtemaJTY7TD5FatRacvWoLQHa3z2CuWvxWcn4qDSM",
  "key16": "4C3aw3Duu9sNGejVxDZhkzD3xSDGnGHi82Fxp7YZ9SZjGfVf5fYcNwNu2zzzVJk5aH942v1VEnts4hQJXYuWBFeJ",
  "key17": "3Lma8qxkKNJYwJ2TNUjFMcjR8Uni2ijw4ruksWzVZf65p8oc4vvfiwBH33opSRapoSGUPCDy95JWyfgo7r6nCRN6",
  "key18": "2B4vVN3JCSNfKrVnUxi5rvN3nvQQYZwRgNNr45rZBRyraetTe3qTsCgcQy97RiqQu2YEFFQw6EhpH6MKWyzfoifz",
  "key19": "4JqRp7z84Fq6Fkvz67164A9UBzZQLBkBHAEE2A6shXG875NJsTbGqABvf49JA5wazqbkW5ctdhTw9cBuvvwEjcs6",
  "key20": "Y9h9rpBZYYCWGRWHFmVEWhWRu59iMbyVvTTCGNdFrBgGhmhsqeyK8z9Z7wB6rzSuL8pknLeY2VwnB6ubxC1ziJX",
  "key21": "3SihzgMVTgo92QJX4qRmRTXVc3uEEYca1BPEL93QTw9zPEsKfcEvHUntzHDmZ4oRsYWtv8xjR8w2NMeVduJdiykj",
  "key22": "22MqLpWDCcNneERcJDWYbdB5KkmGkegUb7wxHUaTwHwnHp7k7x1f2i8o5Y3u7HCR9KryHzucEStwVgHcGFxYxoBJ",
  "key23": "3hSunTG2GKb4jpXStgHRRaViHtmhhNEvRUDw52DYWksSsCCQatBeY5rJtDkfj4kTEJ9uMQXmME35GW3KmRpGkppM",
  "key24": "dgjyeUujWRNQ2C4aMoMFA2MkuxfvckUbDWCjbMJyBezK9DmzUCoVE91yvPpoQPheXe5W6BYMQBseh1g116LbRop",
  "key25": "5VY25RktFYaU68AM24yZpxRZPHrD6PApyRjPcXhymejg9e9jpQMCecgnWDq1UaRcQuYdDZrQ2tc1xx7y1kWuY6aY",
  "key26": "3nRPKcEC5wpL9VTGAPTzQaAUkNpDejF3kN89gkCb1uySyJ8xw4amQ4XRdKuvuvsx2nTUnGAybF9tWZ5yXtnk9af1"
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
