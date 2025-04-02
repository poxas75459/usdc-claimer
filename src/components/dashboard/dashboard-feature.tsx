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
    "3PxoKuTV6CdiaYhxCqvuDd6UK6Bdggznb2YwC9FaKGoaQiyQioKYDYHMZiAhjMr7MWZus9s31iUwRa2K84JKvQdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUMVh26mhCTNxqYeedri7LFG5oDnGhDwV5wzLRR8jKPWhrzUf3zXmEuPMvswNy834CeKzTBW8qQGfKKqNJ9Md8X",
  "key1": "4G4etQSXPXRAbDQJZbGUjjc42jJUKNNdaR4xaHyKRK8ubTwGXeG3ePSSvpuU1uFv3gtP4Mp3teow2keTsMutzXaJ",
  "key2": "4sKDvinRNJf6TNtxRXW57xRv5qJWn5qWqVnEGBeFybi4sUPcRjKJrGzFgey7shWLwJC1GMzngFzjkjWvcS5QdnkE",
  "key3": "55dKQEDvfz97Ld3D66jgk32uUjba9s3qjLcAa5t1RKGVocukaRKaFH7tHGxFHbtsGejM4AazoqAX12zMAfyxWuu6",
  "key4": "4T4E39XU1hVvHjUcunJB9NtEas8jfN7qg4r6JmQGC27tCu4NmMHiDbmx3MUpkxh3Vy4HzJyrAE5AhT6njPZpVZCd",
  "key5": "3bHPv1mN2HH78ufn6YnunQ9dxezWiARJf1LL9jHfxEqebgoGgumCaFWD5WV8BQmsD2DrotbA5o52ELtcCeEs6TKE",
  "key6": "5ZZHGLcXTrUh1xcjg1M1gpfwCXLJTUgsM4nJqUbRcdTiNf6niLoue6TwNhcHXAEbEdLmkmUkXPjpEJ1P9CnUcGtz",
  "key7": "4vhrQWFuKCiFXzL7FNdMN31XaxUo6SWqN7sGb86CfcdAPYAwBeEmQ2t58CqQz96yMegeimAvG5sC9Aci62b8GWnZ",
  "key8": "2TBLpDivbs8QwwZotYYqvovJVYR8ZhBeYhnhK1Bq6EAFZ6KedCXkuTyS15Sg9z6GJ5CkoL6Hzc8meKoxhx2Uxrc8",
  "key9": "2BYhogQQkcP1kVQ1bB8ngvdvVLS5ibYwWDexHzywz5MvsHFbksM4RAysCG2yTNLnpDJMYsWvjH3vnrZri68qV3aC",
  "key10": "VdZFgJsEHdSfgcmGZHPYT3rpZb8pvZNtKRKSYZKTW12bUYDuEydmtZnxQTMRsqmd2CkysUktJwDoD1VgGB5Pogi",
  "key11": "4RRwcQbuBR1KyyQJVzamj3nNrNZkUEXJ64Si6we3zqUggkpf63EZkKZGu2eoQbkr8D8Yo424StT1xF7E8ScZJ8yV",
  "key12": "3uynCuEoiMQkLLbeh67JCheNcBd36rTjwqqkxa5mkfNxcGuHJH7SBF5oUsp8UasoNXQiTVNreJbD6BxYzfKMu9qX",
  "key13": "Xz9G2heHgPiuG8NJGA9y8UWTjxq2PdqzSnkJGXJ3GMLGk41RYShAy9wE8nHFZbouZtbfYseXayPrsFG5NJVBY2s",
  "key14": "5smJywm2oAkDm9fpQnhHMLBSoaEHqqviZ3GUWbPuEyYRVVXURc3cyuceTEZxxuPCbss92hteJtAaQmyajxeWDQpn",
  "key15": "3uA1BKNMStXVAdZessnGbpUQie4m97AYUh3mJcPRtRMPi7PzfPvd9jR7Ga2kgbKwviMvrQ1azMUacDcZBonC8b8o",
  "key16": "2fQyzWrhjCadKZt11qrBcWAFn3BwnURsi4xgMXJNpUnFjfEU7tJckzHraKQNtHSNjc54oChgo2VtK24mxSroeg2P",
  "key17": "2VNDkWv3EnVWeU8D4nYAb33TvmhCPKQDCXULpq2BwBStDNVFNbGkGqBos9JXNVpQYkVNs12EXTpDS1fZry3bJvWX",
  "key18": "2MBvzwtVsyaoSLqLvjW1qgXxVBtvDgnoioFAKwNcg1ybA4hurQC5oGDEEMxrbyqGk1Bt6cdXgLzWbPD7xL3cciwz",
  "key19": "5iwh4p3mfq529QGcPXoShrNHYPXpZdw4w6fBVHRHnj5rzGi41F5S69n6WJyEnEVDCCJpKEdHje2q9U33KockYHRM",
  "key20": "3UPX38wzAreTZb3dUvsUro5CxC4brXrSmqSL2hCfwMSS81uvcxJqoYYy8W4ya5BuoTefp7AxB7qKGH9Y79bcQTwp",
  "key21": "53xPzARGYFmJghUufXy3XwXZfKUUo8X8nW7zHjXjUaDdBUVjxujgbg5tgma7Hs1mUzfKi4twgimtrM8abEikDw2J",
  "key22": "2BvPtVMmRNuq2199XBhXTHzG1QCR35cjnftm9mWyXBG4u4s7DTbEe4nDR3t1jXrfgn5pWEM4bUWGciXYJftG3YQ1",
  "key23": "2s1Zmt3fKopq8xsPsMQ3SVqQYy8MNUopJPfFnxWCEccVKKtiWHmc6FibYR1v24y7cnCjfa9zgYf49FGWHWHsB2Cz",
  "key24": "3pC3Z7EMYVKTbGqThrtaTvkmCdLTU9ZECFxhUCYohTRiN69qjHtsueUDwDx3w2hrKRfqCX8bv9pKVXD5Zi7fYzuz"
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
