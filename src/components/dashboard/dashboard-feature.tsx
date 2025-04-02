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
    "63T8EAEomi9VYjzBF3viCZ1qmUmoNZ3wyP9qTAE5Y5zUwLqXoPgpH2J239oiJLx2LpUYtQwrw3Y6P9EXvcicAk7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aFtB5TyE7N75SSDe2zdHoNJKHGphKjZsRY1pRF2xoKtYypoDQNnFMNWj1vVhuhirF8Bsy54ApRbh34JEHvgQoV",
  "key1": "4CtSUiCNMLvVx6eUW2jVCESS1n7wQ8b9s9guwA5ck7FNrpVcjNxtea1ArnHjANrtD9GEFpiVqSWWKAMMnVSH1uf4",
  "key2": "3mbssxYrg75enNqAaJp4JcKZMUkTSRHhGsmhuNg59dEDJH4GDtQoH577m5Rwr8Pb9hWm5bTu37iSdeUPMTWkMQJQ",
  "key3": "2ts2skxq5nNdKWd8SgV9MaYu9sQi7EPp3uNsGnWrgdKGXDNZUDAJERShtJi5CbB1hM9DgeTrnuvb5AXWWLVfAXwk",
  "key4": "56S4ofKmiZ9Hk7D88ZLBm1uJR84kjwGKpHjmt2XcKofSB3F28WwGBQtBTkJKMtLKSfrXdojwkz8KiCjvBWup3Mur",
  "key5": "2mse7fvetShgRvace8c5kahTL4DqhzaanwxnpYBTuPcXD5RFPPypMtgfJbKWeyKfF8umteh8aNEwag99oxSnZ3fT",
  "key6": "E7NTX4SkV9NEisATCjUiq2aWFfbr7wg9ngBKbfUrHYGoq4QbuhtwTH1T6RafwCwUCiyd3omar2fSGqxMu6NwLgv",
  "key7": "3Nq6fhX2818mC3tWmFZcw8nK3p3TcNm8e7bnPYV1rJJTvZxvW9j294wQbwoDYSHBtQeKQ1GkrSxmm79KFTpRDmQL",
  "key8": "3tRftW649iHYrR9miD5AH8CYv4k6R8PtM7YpHyrSqX2RmCkzTaEZc5aEj9mWhhcQyu35e9cxmn3yU5Xs5aTHuqYi",
  "key9": "4m4yn84hke8PSf6YMx38eoyzSxqmTJCHuBxMvWR8cdtyfQwzFSM4h3PHb5HDz3M57r87keVGJmuUYhnEzZB755mn",
  "key10": "3TM1w4V2kLCcVZoxfuqdwU4X5jrSbtisBnVuZNnVDueGL21xhPaKhjYodfdFVuzTc5LpnM42UePS8XFb2iyvHtPa",
  "key11": "FsjvJ2e3bKnHN1tYVrfZab5p8YSLnDxWcL8Suhjec8wNhkU5ktJthyte6fAghzCEk5RLBAZuPmMHHm6UQuGkyUb",
  "key12": "CFzucB3v28vZKLRqcTwr6XzLna52CJ5igrDNz49A69fP82BrZt22GAAA5XVVVtoTKxvoXreZPNt1L7AT2N4X9V6",
  "key13": "5t2g8P13JDxPhbUAcmv92d2nTtMkeFxm5JXnQ3jW5xF8tTbJQCP8HrRP5E3SUdNqtVKzLWsM7kDhBaPuyBafTtWt",
  "key14": "5Ri2RVKQxhY13kHGZEGLMXriBVFj7s9CSy7nn9xR4eNHeXXjheukdws1HaFojm6ZafJVZfzP5eccMwoNq1mfMXQm",
  "key15": "mTSRHJCkewKNXqtb6cgxAwdZy69YhmVL9vJvxpfGb245qm93WYQKyoTCyqLLMU3xx6SykvVTHwh2vGiq4FT5KcV",
  "key16": "378FnvgdvuBbcHEpWGPuRsLap7p6UC3sTjfkZyjNC79m6SrWVC2w7BXanfbykWRZ6xsQwvFzLrjVM78uNCTDX5jD",
  "key17": "3KcHZ4Y4Uyq1vWvPmUf59P19HxmVFshkdcfjQ6X6frbPiB74Xvaro24Vq5dQJKKEgDQGcWkzBXatJHqux9nMCg2T",
  "key18": "5cU6yBvrwpr9gEPUnBG6mFbNLdMqvuApRFhQAqWwPGm4WE3chskCCYrGHSrCrLSTDbeqJVRKCJZvJuTaH9aEjCHT",
  "key19": "5iNzSpnzTr76ZjmEaQGn7PiouN7ktGsLYBEv5RukK9hfuDDU8kd79SKx6jVJJwqYmXg6EPnsM2ymqxAY9zwSYRJk",
  "key20": "5jJnJ4nRHY3FFGPEoErogw8inkkvC1sxHmSiCBarXGopSvdvvkwSjwExHy7KESLyUp2s57Ptb9nAYSfEVwZ6Ny14",
  "key21": "53b6o15PqEXV4wBqBdAuedPhBxpjfei3pACd2SQTP6Dc7VxfCPgmvjABu6EBKrtvMPWX5F73pjfwv233WHAkwxyd",
  "key22": "33EycyxE3ECHmeVcHapWrhfeet322nr9z78u3b4h2Pzx5ZDvHC48Y4sEATuZu7eEFEFkqVijQH2JgCAE2C1U5gWY",
  "key23": "5X5oidSTtCbgwUeqpPohdj1L8fYoasVji8DXZjPtk7TgGBchwhH1GChGWKjg3oBFFTpaiBmGPEx9DbGthYRg9AKT",
  "key24": "e1wrHeMeGjyt56Kce5R2SjE5TtDSUntFkdpF65J5b8stwNz2zxzYkpRcqD9GxbUF5C1NxGqgs58BVCLivK8DNAX",
  "key25": "rXD6eMBc2QhNUDmdcmxjuGkiQYuxogoyQeHatr7mCyu3jS9P9j42L4aFKoQvzwriSju9PTSnnuwmLS2biZ1MYKF",
  "key26": "26urpGCGVRQdF29PAAhCfNV498mtDaZKURftZLdUcjQfudNoApt8r2NFt9a3i4no3awvDBYQfjC42TRgWuFQnnUP",
  "key27": "5c14UNZz6tiGU8WfUvFrFDevM36n5W1bqyShQuTYU5K7QyFtVkZdcetbi8VB69qx9B2AZsTGi8oUVM3KTEUJ3H8H",
  "key28": "2VZYQitzrBeM1kqXvPg7XAgBPEWLJNgXr1nZG6sAmTnH39bJ7NwKLuGbE99ZH9m5jkLmTuZcbmL3w5nqEiMv9GQS",
  "key29": "2jN3H8uJRH2wVtffgP59mbSLDn31aFXoaegTDvakZiZni425252Pa9vnFRVpvpydsbNaq9XhukvZ7aNuk9Jy7VLj",
  "key30": "3ZiHkWCEN5EowjyKQdaJDy8GB8o444oZ5Uqa3p2dCiU7ArA2jfxr4gvBZmcKWDq3pC1zzaF2BGjxqU4RbNpqux4q",
  "key31": "5cQaEtXm26HCxL1LgpA1itDtbywQXEjAFf2VtLRCi23LLdBo9b5VGjkZmAGcU2u47kmk4xV9VdEiS32ztyLghSoK",
  "key32": "25mEJsvZLPpPeZRV5WYy6eW2wxRdCBPD4aVe5QGim1KFiScVHj73LCkEg3EKD592J5FEoHazhkNUCMiP4NAUqjmw",
  "key33": "2JoqonPR4iTsuZjxYqHdtD8S7zpHWcpoarfqa7dxZ6V4wXiPLLbqHf7bGnjN5hhp6kkS8oSv9cuCzy5xHyd6XpJ5",
  "key34": "tkNyMgYK128yKHqLZqG7DtLvemCUACFFBZe46qcnkZMfhb8L4sMHkBLE1cKDUqfgkT23joMeBJAavxAXy3ATQAW",
  "key35": "VsfZskctG9qwwBDpkLMTxfYNVUN4Zd4jvpwjwudjWEFWY1NZna26tJWUu3zLfbJCSnrJKKjTAEmrjYrJX9h3Fk8",
  "key36": "5uy3Tz7YJ9ddV6hNJwKEiPKvTQLjPmKiqpcPxi2GvdjVTYiMhhTuUkMRST8FzLFBj5frNxzge1LFdVMEqedFrFx3",
  "key37": "2vDtTBc4YpGKmPTJW733puyCVYrL9SgaJuPeBgsX9WmgWNp4P2Ca3DvmEhtZbtSFxDV2ZMvF164zW55v9iE77eCb",
  "key38": "2fwgjVvZFi8eDKkFFnVYXLAEXqkHU3YoebYzrg8TS3VtZ2SucybPC3WSi5HKmoHYwC3nug8GqcKUHNzQAN8AuKkn",
  "key39": "2rURFts9bZyYT6vUcduzBYZAsEM1MuezjHsSiWw9xGjvxV8S2SLcbSx5iofDJFT1m3LuZg59nRzuuEbcPjkTLf7d",
  "key40": "4e7JGxRiVoBo5vNfLPCGrobc5kdS63tYPzM2DHfMRap2rQRvcTmBiCkSNPwqXFiiwhLohS1SfUSVjxm8Jr1DYnMH",
  "key41": "2aip9mU3gQMMuvq1dHTHpzpA3HyT6UBrBnpunePUariYokuGPkJ9DKLYa7r2bgwenEg1fNjyG3RxDQAKt5zMHmzb",
  "key42": "ZzqzHJRTUTUfsrGH4gAAsnwmqVAb5PBRteJsdag2yYU5BTeZSD37K82tEXCTc2vXKA8Hmoek7fwqmNsBJg17WfC",
  "key43": "3bBT1zogaXkqqCj1LqKR3og2GJyUUcJQaFR5mc3zARkv8SbcqkEVr5Qdt3ymNVtQ9eT1aD5jWiqmAgbgZdZh66uX",
  "key44": "5oFJNwt1mFNUNF4ps4zifGy63GH17adBn9mdojeC3kVNseAf5kF2ht61fyGHzWB9LnYaK5MEADMgMBgohNetBzxf",
  "key45": "4VugJX5VdsA13NXeiRTkTWGgcDMBZFNJSvF9gLLp3sXmVjAV1VanBeRnfKDaL7RNEUPZ8BQD8rQpciSQ6AJTTtTr",
  "key46": "3NoyqJbFxHtFnW3Hdn7KWHmmnwedYf46K8LGMv3zS8BymRx522qd2GhWkdw7VuWzQvptjAAC5xXTxrEQRpdrd4Et"
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
