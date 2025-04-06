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
    "4Q37iKhhhw5T9pQKfosFcfVo5rycfNQm9yyHLPbPgALSLDxcDPFDVkSaDLuTJyzAGqUAE7y3T9oZ2Eq5cosA1vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgtFWG3DK5srMTd9E678HGKzPJwS4xLyddjPVMPZbXsRVa8Ay9vBKMwcFTLJazcG85WjRG3GYsas4g4NsRxcohb",
  "key1": "5eZe6hQZpwXkrSVFcXeMNS4RsrsXpAHemU3gsiCnkphkUaE37ckNNtdd219sny9G4Xda2fxpEVDKkpvt69mJcDVE",
  "key2": "5FiBfPPCxJAUceFBpb41oxNw8UotxvbEfYdQcQLYfSSy65vNcxVcKZ98z8LM5mmCt6YdHAx9QmS15QatTBs78D8X",
  "key3": "3t3yQxYALsaba1FyuFihifZ4UwLEvidJeBp98qjF1tBWT6azMLQHh4nmPWFVMKDmspKDoMpP73fZYyRp4ByVyzd9",
  "key4": "2oUG9K8tSBUAPmssni4anP35Y4EK1ADVcFVbGgjeCdaJc5qduqJ8k6GeJq676CeRQTB1MzJWTT7WvzGmihop2kk9",
  "key5": "2S5b3N5cX8A8m3g7aTSH4nzanmFpU3AnhZi3JWV4TfzFRvHWtqud4AEPWafbNDEPvCNduuUD6u1maNWi4jdckJBj",
  "key6": "27WksDDapaTHCUWYnwdQkS2wZ1ZmCkdF7qbqNobko6sN1qyeShfSKfx1hZnhMxsp1PdengWaYxXCGhhucUCTo3gr",
  "key7": "5q6TcMJqCJrqBjFSkU2Z4bqqy44Dzv7nEtJAFKeNV9rKFhTEwV2JPxsCRoYCZqfx7q4HFNJR3K588rNKyFTGfK6n",
  "key8": "2eck4kZH2TVyHpsyYRwDyS9TZzUAyci8YdguAiP1wuBne2vGicsrZiWHprrrrAgP6WHmCzz9jAuZKbkLkqpByeup",
  "key9": "2rP6WmyLsGz6jy1BYjH6fcNAF7H1kfxVV9kKWQY73mgpVYWCa4ycnWw1A3S8pH7JZVNr4mQKUcAmiAZGwfqVqBaA",
  "key10": "64UCeDxfMcgpvQcDez7uErH1PvCFekNf9ATZ7gkDvNhuWZ2dmpQSw5t8xP2y6KJPwoejRb3GnnuNVV21oWE6gB3x",
  "key11": "5UQTMKZsz7w6eGTZf7TNknmLBXrzRssX3tmQbgy4ohED6uggJ5QAfLan7sUzBh8QFTzsGcGEWELpzx7YA7Eik8mV",
  "key12": "329sjoCgSCBSH4GS7oywwAsZiiWsdWiNtKY1yrHnTMtHh4iJvL1KFsTBdUU7oUVbcVCVfuGpNUHfQEGjweoLkrWN",
  "key13": "vs8C2ovTFQBXXGNXXoP2rvEcRDgVQPksvs3o46L5w7DusgB5YgiJcQ3h8Cjw1Z1oQmTSuDgcPCpkkyQicFGpSZ8",
  "key14": "4Xr8xauXhjP6RJMhRaJMHEjBytpFjZndQeywZTms6uTVpc5AAiF6TUTZLsroupkiV473xm44mbDiqdVBwCWPQDGV",
  "key15": "4JafMXXfn2vG4uY5BDKMADdPxmCC2zCXuhWtBfb15Sn53RsGjScKr5Wpr8aWu4xqmNwDsZmmqBG5YCUg9x3nuCM1",
  "key16": "2wPChFFxfKMeatP1UMoYx7FWC94q4exgXA7LwgXzUAZDDM7DEFQuuNK9aB9EQdrTLM6piiPdVSRTWaQMCMasvTpx",
  "key17": "2JyekCN4brzsGYEzX45wRo87RV6GsqyiSJjapv4sURMXqRySFDmZwgJzmdG1ZXHE5UinydSv1Y7bdeC1cb7dWfRs",
  "key18": "aVRHHAi6tDTBdoD6zPnW1o3suK75y5i4hbMvRy4KDfiQKN4HPCijxvY8qo38ZAhsVreJbvf6ia6B66od1oQQoQF",
  "key19": "5hWCdKYiACsTpB3JYvrm21Bg7Y4iTuCqLBQD22RuyWtrHk2tXS5bEtPnsYf8x45mUZMAuyCvP8SifdH9RHiL2hG3",
  "key20": "4Y7TDmQM5TDD3aKVHCGLFjsgWwU2PsjX679gDQJEp61BiVjckJXwFX6z5FzgNitJFBT4VEAaLM8eczUfWikCEiWj",
  "key21": "2rBY15skwjcpBcmGPB3HZ1pgN5tbQSDr7mrd7xs62jXqTpbXEePWbxQdigPtTE8FeKa3RWUCNTbkagNfvL7EKhTq",
  "key22": "3xYT7yLky9YH2cyCm2C3rvSYE1nLQsVJhg24ZQTos2YpWqPZBZRwHXcapXN2CbzazmyyxLpiQ41zRJAQ9yBcPUWi",
  "key23": "38b1TVyT8ML7xnwwcSiSpTr38nSy7XbHeqCvb2p2TkCw8zffcfjMZ48wTvKxZ37qV7V8geBEnEoHXosA7qvp3Yb9",
  "key24": "2RVh39i7jMuVDU8HqfSm7EJo63tg7b8RNyQfiQBC6DGYdWYDrHBW7MbJo8ksJKpxjCpJUzhevyQwpbNbarajeBgZ",
  "key25": "4WWeYCj3A7SCHFh7rd3cZdQJuzHDVfkyXvXffg9cV1vZazCeNfvaCJkQvfZYx6H3iLGZcE4K3pUM8UCY7MDN3hHo",
  "key26": "64mUfXF8Notn6WWNu1AQxFoqEVs3JMT9ahKK67xZEUiioi3u8XjNWQc7G8FHKrtRjrV1gxnY9jETwmU8u2CmjiG9",
  "key27": "5hYToEpyjPSiABPnj1Gm9qAtEvHeTwPEYzCrRYxQYmhtDa3kgFQxHxcNeawvVYchm5MSY7Wx3GrwNAiVpBMBBvam",
  "key28": "2SeEntoBNbHJUrgM29uwzgiqFN6PQzZ3FBcE86ZDcKZnP2RxxC4C16f8WQvutAsqnbdPXPq8dfpzdq1ekPbksgnh"
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
