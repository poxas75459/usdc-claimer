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
    "2yS6Cpz2h2MTTsKiMFUMNL2656AnedoRHXWWgg5PuubxNBUbq2A6tHgUAz6kjyvDhcWzV7ij6PYJr8waq4Lzcr4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4mQ3MJJCfoLUUUas1wFw3opBvHup8Ejfyh9NDLfjd4TCeqEEf5GTvFG4YyrBfk8a3KtLU3oUNAMrRi8JFvmThS",
  "key1": "1m8NTNALrf1fBnmWiiKXpv6a2S4vLRyebEW9y1a4kNaXwjhFstdQs3r8xxq5WAmY9iikaggx2849WZc1JKPMjzy",
  "key2": "2hDiWveKdoa3XwmGdoWGrwwnVhZRmTbt2QZ3krPUXzn46H14Mnnfbg41PxCDv44SjtQWggQCVBwkBAVSAbWNhfgB",
  "key3": "4fiBL1Sm7UZuPRYGDnkcTDX8bMEn42FRRXrnEpJdpPCXvdiUkA5Mj7R2tGw1Y7HdWnreriJuyQ7REamqMrnMYLEu",
  "key4": "55BV5jSe6fHm5XYEJmMYjK1uw8sTVHx5GrKfNpsgfWPKZjrX9nMq9sxgrg5Utg2KgkAEeaGif2NY9xVeAMYuq6Gg",
  "key5": "2vdkWxfN752X8dgr3nC96pZxfhLakj5qV7WmfV1TDaLguZVrtZ4LVS3q4Ls84rRRwoSpzJkfqBhAswMeHh8SmhTp",
  "key6": "4bhSWj3cdSe4rH49PpLPqodEXbx1bYyMhYuzxGB7BYX7jCFeAdoqtBFJbfrMLtH6drYgYnYoFVhM2MAbVikUAWnR",
  "key7": "2peRf4XKyy2jDrDbxYgHFq3JhfATaFz6jyo1488AyT3zt8R8P8nczGVWzDnirUAko4TyTcSgdSU1RKCupdAaebLr",
  "key8": "5r5N3dgzjj1f1eRgbtQZ4Mn4BS4XKdXMejEoXVuwzJucbgHh6CQz28sxT7p1Vwm5zz49rRHwy3Pc65UdjnDLp3zp",
  "key9": "4G9EcsNXfTGRTPBa4qNBQBFzVoN2TspjsBBMCkf3K3a87EVFGZ8qwrH8kn97uhkD33WrzXWmXntzKnohPrbu91GQ",
  "key10": "3HvvN6NN2qqJvrm7H16AZu6CJhGn5z1NUqg3MeSJvhUm661x3QeoUEvdkJPkUr6f8dCQauYHqnHHJUhcUzyg2k1G",
  "key11": "3HwHyVjYaMrnrd2xwsAsRk3JH7pASXv4uMv5VX8PXPSSdLWRz28UdL7UVJShTYxcnpNtv9TTLjPN4RaqAYfmbTNM",
  "key12": "2eiHKn8ciV17yEfkNGQ1WmwDcjWC2GeYJVWwXVR2TxDtdVH5nupc4JuWao6ywLLWATBx4Fs6NMwy8DZzy53gi1Eh",
  "key13": "2Cu8cmsrgJQwHTGssnnYbq6fJAbxAawCLT4LVxzyQ2QiAcVAsGJwGEgsuhtnVCm5XCuLf5whNYbSy1dQbu5shukD",
  "key14": "kVhEzT4FXRm3bXseY7bBevL4EFAGi5V8wHqnsNpr9ymMG74fNxq1rQnriydCXf1m5EvwVnVtcv4AoeUa6goeYXA",
  "key15": "5cVSLJdqPdY6SnZw8NeJ4RTKYsqMwx8iAZRctLMjSQvnBapecVhc8Mk6RoCuquToNdq3HAmQjKUhfweCxwCFRDPY",
  "key16": "2nzWDdqEBpVQqX2emYPDqKLLrDvcvo2Jk6DkGecJ9LAsq17UqBUEpnteo6GCke2t9QDChnFD764kZzUxkrB7tkmX",
  "key17": "2tHbe5fZkscePFQnUuDmRKk7r3kwzKwVNweQ1BCLG7zEDum1KLKu2eGUfema984bNmDMgYg7dfyWWPS2M2p5vdG5",
  "key18": "5TGES37nYDix9o1fzDCpVY8DRjstzh5nwgMUvpupAPniPmNPLLe4aipxzuwWnT4myvc8ni1b452hXqv6NBmv7BHi",
  "key19": "59FaYbdzjZ9bcd53pr2RHNE5zdG6zeQB43ZttBXD31ZiFJ7PrxcJtSD2AirNYZFC7CjZCgXfVrj1cRSftvM4krnp",
  "key20": "5jqFzZPfPbM5Z9b6bep73Tms6t5583ah5FtTFMM9XAzn9KUvRWZtaj8MtXUGiieKeq4NsmiaGcXyHH21TrEYWkzr",
  "key21": "2nWQsm6WRmeD4Cfk6crEQY2ZTYYeZVMszzzvb95p4H2ha68aHyfm1TSLTJsR5Kfzbfaq98rUstop6bWKRS8bSMrL",
  "key22": "4VPysouZakWgiapT8Q3Tja8JCzKohx52EzKE4PSGHh2tXCiPB2ESJTJa2MubBW3YEQhf1rTcM6m2y4HyYer9c7oj",
  "key23": "48ebHSLpYDqPxUDmMuiybjDeGnL4NTQktGtDMuCfM5dSKxhJTzRXYTNvJpLhtERN9KoZf3M1DavV3j98iGpfYPn7",
  "key24": "5ucmV6tqnSk6FUJZZtc64oYnfAmZtFUCVCeqy3WrTnp8vS3imeMQUpw65eJMcVFUCYGTuBmxCoHEhP3GpT5gp8qe"
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
