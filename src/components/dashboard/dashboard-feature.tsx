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
    "m1naf25CJqvkbEnq7owWo77xgjpVHEhYW9Ubne4q7Cjpfgkrjvkdc71D8GGS2Mf3WP5zPQtuWF3kBdcdRoaPVm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYhqVU2QLAUNFY29Lzaecj7XrxwtHhBQMd4exYCTRzgXybz2HQZk9SxgSt6LufgRfqSaXX37WN7EaisDewUV9fK",
  "key1": "2aB6ch21Ns1w6vwCwYt1paf5LenXUwJfVEa2Rj3oEhoRipE3PLeMoHz9zGZ2qwhLHWtTk5yfSrVEZRt23nEqUsXU",
  "key2": "4mWgMZHLjPAUBZB3JwQiVxvCt6NijiyGYTFVYrCVaHbyNEStWPj37eRntkNu6QjY2F6s87mm17iL8PrMGGAJzsxb",
  "key3": "47huR8YmRoQB9KbJsNRC53Yjzi33wJ1K5XAc5j1KDVToYX1Kj75tN5tmGD2DFYwp9UCriSfnXjqc13PbUb76o3hu",
  "key4": "3b21V5zCTLd4mnjnTtHW3WU7TzExNaQQmXA9vqdqy7cvUqMDbTngC7bjXhzzHjvC3p4XnaYtTquzcaaxDGRvP1eV",
  "key5": "45RymXFBTCwpotzeXxJ61RciVz2S8StKFTk73n3pvooVKWuDYuDixSW5gYxvok4gj5k7z2ibK6CWYTQvW2KmkXmt",
  "key6": "5Y4mq7Grs1HAWR47hqu8M251vaU7BMNXzYAZFw3DiiduFruYGNsizqerhz8G7RjoRGFP47svtuZhxtN313Zosoet",
  "key7": "3skiRSCo67eAtkg1Vv3xu9gsCutTxYKPYAAD9oMJAW5Vx3g3QDF32sG1mMANbkswMEzU1souvXhdHzsZbhy3wY1Y",
  "key8": "chujPscTL53DVZzPQohdo2PPtWV5Frnutumar8a3JqrRfPkuRUk3HE2vFAwSEqP5GgasdKnJT6EcTo3g3mF7Jgj",
  "key9": "511dmSd3CYK2rYvuihbU9QXkkFmFuGGukR2w7Kn3kaDWnogAc4PzpyxJ2PrbnGYyeZeEa2KJ7UaJEU2DFrB5w3tn",
  "key10": "cTjrn4ezZB9JkdzCC3hgvhzeHrTLNzQJT4yACysTDXpK9TqDY6A1xxXFU65ABxx5du4qDVvmoSUwEfTBX8RMwhP",
  "key11": "5KWxd7kmsddgxufAAGf3n2sVCpeCjPYZC3wFo7LjmHKpxVS4Nekw3QfRqDkH7wEbKBSCe8K6YfQ1zqEYSRhdmRLt",
  "key12": "G1y2iXom3kPzjiq3sKu6xEQunWqv4gBCEuNAJ5zDy2T44ZyQCCF3SnaDzaSxN1d6tBbMXDEdd7MQfKjSx3Lcj8G",
  "key13": "5Yxh1PmmKniBcP7MfR5xPBJbMdNs3rUbUKmVZ9b5U7M98TwuU5usNXMiiuigU3Q6STXQFxMByUABN8ypxUnQb8Yu",
  "key14": "2BpcV2JuUSBNPTRSroyoDSPR6Ws5qdYUu3Lu6SsV8FscxmBCLdFeBVyoxvGN1gyh2awPvkpkWf46Bdq4QRT1TEBw",
  "key15": "4LgmU1jZv9BBPxqmkVh8NcUDXwhDHTDyAm1L3bmot9t9TySP3XLjZn4PGuBsoo6AxXxoLLd3SfpPdsTQgNXaYJ4B",
  "key16": "3gCmeKFh2YVofLGvK5BeZhu3AsmtMepBqz6f1JJ5bKb48fhT7u5LuheMqkAL9xJ3SYBdKzV6wNr45ZxwvqcXcqhM",
  "key17": "3zkhVRqRUUA6w6W3o5wq3tcxv3dNHF8KJzwB28DFxgQVwc7knnXzLUCscGctHdjmSua2n75qKL4eSLpZsRftiTwp",
  "key18": "YStNmHECUdvfvwMWuAgrtMdzqheAZF4RcyQ8tAu8gaMsX22YDgrNTJZdAMnrAzGSwrhoSiVoB6kcphweSiLFnpx",
  "key19": "5beoQmVDdaLwYzadn7C3dpE9j3mf78qwZ652f8wEvv2ucDG34UAz6hxPVcHHcDc9Npw6d4bjiwHj2NGLKVnuWoMR",
  "key20": "2zAnmdn2z3nhxZfhzghmd5oTd3XsXEWTxM9d1jQjQiC9hi8LZQ22GQWW5wB9FUoBspzuWiX1i29Py6DMU1cSvM3n",
  "key21": "u1teRUJsGZFF2LvvHtbvjJ4opEgVgmKwdrGVip2sD12EJSB2qkqTdtpttg3tMd3HQUTLqm427fhEvjUVsWWuVfj",
  "key22": "2JVGC4XHHCLKsxTDtQsvCzdhWg8s2K69rzHwtX4JgAXqntfCDSFkh4bXrdxP7LdjFXJrUNcWHEjzoQRUfpmDZZar",
  "key23": "2ZWrwfGqn7pi42tFEkStybFQkeCtteDRbhkaXr2wNABTXthtP8S7mP2Tv1MHFJNoSYQXHaTagy4t6Rc45cVzwSqd",
  "key24": "2cKM9su8SdYyHSRfqvSEq9h8369wX5eKshVZUnTpQD9eGMr5zacgRTPpvEe7KodmtwL8KAt3hqCXKuxKPMAx2TUh",
  "key25": "3MzDdXPZ4GkBg6mJnTpcjY5dZb5GF6Uju84YAU3B1FoKc6tSFZyzrPqUFVkmEKBQuoNB3bxg8SNHAfC27zpfAVue",
  "key26": "28ojfeMe6dNRNtWQ1FNZi6qn1zYAQYvH1bZa2VLM7gG4XHBZ6DrYb3CtrZiWH2vKbzuGkDB9KPM64Ku3QyKfHvZp",
  "key27": "615dpzNQRY7KBzxKYMiU8sZvLinLbstHegxobAYjkVP4vyDkxwJHN8BzKhgma9VfnJj8k7Ft4V572qi8T5ogbWA3",
  "key28": "4C6BZYCwQDmxRfeN7dsEWqS9X6oLkK5DwojaCcvwTL2LW6ZN63da3DERAU3GoUm3Bdn1zNvUF2ZRiaydjjrs9MLM",
  "key29": "44TC2PTBEoGJvfsgXry14STCdv6KtYyrwHSrMiQM71BKaWrfXihkgWUvz4EEMJ65VUkmy2tefyKAKFtgLcckt6wf",
  "key30": "5gu8USHA4mRSUxPDgFyR4nMaa66ycTUmJAnzR5wzwN8q27dn8NDLjhG93uvcApHg1ko2sLPHmzBDDcZofFbC8vw7",
  "key31": "92tQEHJSym6isMa5dc7JDtosSjgzk4QQz78d8rSkh9V9XfyGfLNMm2df4k8pfZbCXRjUH45aY2ofyaP18dJY73D",
  "key32": "53ctHqpNDpoh6f9a3YCa66Hzgq1fDuspDDjmn8yygmKMjYUUP8KBYoWW54wxaeJJMfjDUwCZPtPzKW3PDfGqWJr",
  "key33": "4CjATCoaN2xUuvp6sKKHfcgtwKccmLWc63AhioC9nF1PnmxHVx5kEvoDMx8RwsSKTeN3Zdhv3tqgM9vG7BZjJmxS"
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
