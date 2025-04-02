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
    "2EWE47R3yt3Vu4VVaaJoPVoiVY72FQo3rBGCPB5yp1aTyTpn9Pb5nhs7aDL173ez3PxfzXA162w824ipNTJfYED3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WEvvwpQUmGzuE9BLkZBZ4dDZD4ixsdE1azAfYeYnowZnyaVS2JkaTL5XiQAAibNu8LLDv4H2uigTsyuQNs6euh",
  "key1": "3fjbhvc8wpBntvJA1oJvem5P2qkxzJjNfsWAftKJuQGemvFJmvuxmeosyoWMXQdBkAcGxNR1b15zTvKVg2i9Aqoi",
  "key2": "2G1ZL5PCKVo74FWtKyYgBjVx4bn8JNwhkzxV5GHeV6NaJfNsDGyTbR8f1DWRKdC3FwL5fpN2T6xa1XmNFFyCG2Up",
  "key3": "5uJDCFJiJkiCob5dyH6Lhkz3xAbNTgKsScGwoonj2xr76Vm1Qtyz2UZPX7QnBybKS12pccaQ2R6sqdLhGpeKqKcn",
  "key4": "XN2qZrEXVD2bNTkfXaH7M11RxZS9q3gY1dtBryFLnexB9RF1iMajzKwZ8qDon8YJaHeBHdwS3NZHQZq3ZjeKV2r",
  "key5": "3f5KUZi49GXX9pZfUyNvrNhWgT7cBKwAtLsobwTL8RHpXddA417QTxN9EaLpij1QuvQeroBt4NVEgaGYfhgpBDh3",
  "key6": "3pt221XWs73VvGm6hCKmC9dEMdzp8FUxEiyxNMpiaT2mpkbeg5bj6pUWRDCkGiTFcPtvPRjqBx1ntAUoQF7pX1ek",
  "key7": "3V8geVqqUsaPdNenGzLBa6XVSxUjA5evxF7o75wTcffmxUp7294hwtY5bMoefXtyDcXNmrZaqsnGt4VF9Z4tg57B",
  "key8": "2eGyeRUX6NzukZaZMJ6WDPSdB9q19tsoYNqzuhqCEBcuEzwGPMEAkEWXhCaAXLrUDM9JcxkokNtvZLY3VeTMQ3ge",
  "key9": "iFRawQ1g4m53WuEKrFzKbR5TY3EQGqVjsNoCAPcmVBzY4GWEivd7m5NVkL5vzAnd8UmnmK6TBZvFs36rtDVbQQD",
  "key10": "3quhpUtQoS43mrZ4oXmHjmTpgPg2q25fhFC1CiV47XGRHtTvgCUhdgUaofCB6mBmVyWiDHeu3cYGAb4uwnAiEQRW",
  "key11": "3EvhSvyE84oUM5JsueereFSh2Lx1vGeVAw9wjDkPiEsLmGvKUtgVgoFSKKSkmN2v58mmSNtieXhEsUVkmBUGsw2S",
  "key12": "3UZics5ZensKGUpEJDrVxqthNGXRfciZ8TvNBuU82cUPnYGKCMLhHUEeFT2mh9X8AYy4LmkC76JANs4dbCaV3nu8",
  "key13": "2iwg3k4ZXF4qMXQsKUVz2W122J88sLjycZfyvGPHJEKUYGnitgsKDhiHwxrraXRyoXicDGLQPwgGZ1uwPMyastj1",
  "key14": "429sMrT1jhVBKNais2KNf8nc7aUoFLm9wz3ws1x3GaMipv8aDJkzfRL2tqDiSppbd6gFqiJo3aSA8c3zSKXTRDDz",
  "key15": "4FkAhFJ5kayf8cwsGVRGeeDtHBWLJFMj4S921xJgtUGmVr2t26TBgvrtHBKUUBrMyGfBeQGXmMkoRRZevaH4CPDP",
  "key16": "5MeErvGg1jYEDsUfveETH88E7okxu41AYd9gQCbhqTrSb7vaYcvsXze7MN59Q1MtHwfVmFunNnRoR3hMzSZUpChE",
  "key17": "3aq67XFtTu2TSv6YwvDTtXbT6sAZ6DR3JfW3zG84AWgUG467ta2FT12nEmdpkMh4cVfEEmAxCg5m4337FNDxrzai",
  "key18": "2QifNvQHxu6rVtv5jxRLKiexhKSRibFPAugrWt6xRHspnhhLQq173Xxxfy6c4oeutaeddH6gBVFVEtKujq1rCPf3",
  "key19": "x3DgZdwi1BjrVD8b8qdD5xxcmFeMgpxdM3LEa4mFnixhhqG23kY53WaaNquS9PzqU7GsRpd6q3yPM96oG6sqM2E",
  "key20": "2tMBHKTNzyH4t3fgsdX4nPSKbDzwvDm4wRFrDZ1ZnThwQrXqsvn1yZHDCJNrfNQ2MitpLPmBZC8Z2MZeUo3bkyvB",
  "key21": "2La7YHFwHpy1a7ncM99kXG4mxfJoiAsm7rEerrS9ZARiLvNcMWqkzC5QxuaRzZfe19mPSRKfzdhqqH7nxafN8FaN",
  "key22": "4yP4vmhbYzxt8vpBtBQTzGLkUyCqXaUsdwdF6SKiWjHCPsBcEMLox1wTHxRkGqkowB8QZTwzTVWQifppV2CAuHJy",
  "key23": "5rxk1XknJE1LgnBixAtncPXmJ2qnKEoZbqnVyfhSNNQput1RTu8CAdDdV9WiCfUDMjxds4iz7gRGgXUByCdE9MGM",
  "key24": "3VUnVDBR9XUAhhvh5un3FSkY3Mseg3UMiWM8fccWqkNwTC5j8aQvRqg8T6AhBxFPk2RX4NfmXyvduHgy2U9YqNvF",
  "key25": "3hnJqwq8ntnDDFXTGrU98b1ofurKNPdnA4qmPxR3UK5EwXirfFetLTQ6oKkxFh1H97FgqPQBodr6Tynv6dpQEZKv"
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
