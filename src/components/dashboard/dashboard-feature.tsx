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
    "YVCxBusyTteRBVdVgN7TXitALBTJEmpX5nmmww2uQ1d7eHgq2FYkkHgtjgY4XFgfpRSN41LbazD24w6pm5khLyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gN8i2TraELKEpNSqpv5EzHhDmwK7Bv2XdGpKS2pnmMBGgYHaQu41yxrACwP1APUzNKnyE4kBEsj3oZwUxBFETAa",
  "key1": "EdcQJM3ZfQQQ4SHeMKRageefyzC5uz6bZ9F6DKNcKTd2uaLh3vsoUdNQftsQnCzrZqyMvfvk33s9hXYomGifK7d",
  "key2": "27Vw5nyqM45sSo9mASU2oHkYRsTDo19SUxu36as34LnM9MwZWFyTuYzAhUh79X5C9ySk4DRCi6XdVkd66Uy1JNNp",
  "key3": "3H66ypXownfxnRNihXG2XGsxvgF2bojBCXV32NCdUPEn63AJ6aoXqar7HDpTrSsApFVdW45cDqrRMtzEWgXX5LXC",
  "key4": "4Mdz7b5AG4SVm5uit5DRn4oSSbDV61tFnYPHNaR9Ay72cRCMSLCRDHXHcj7pKKky1ULdoHd7CjWQqTui5ezyFLub",
  "key5": "3iCfjDFSwpVXcFrdJeB2zQWjj83RGxZNSnq7V8Nz3c5oAf1Xsw5yrFEYKZ5QPfP5raFy9ZcgjYPhRUxrNsN62G2n",
  "key6": "4XEMkyu6bTGZ8YGS7rS6q31Yezi86H9mmJ6yss6BdESQ6evE8ctrK4Tngh66vRn8ynYeh1FTuPWocZ6ZF4dTUmFv",
  "key7": "3XyMo5BAYK1cdM7SxG8QwvRjJ5LrbfUyDLRmqets1UBnkZ7n5SssY48y7fVEkk2Xz46CApTyVfL6otMSYEJD3eVj",
  "key8": "7YP44FkNHJ37UTJ4bSugeZeCR4pV3uzXRMeEseTBWpBgqfBRgLvpu1NyvMuZbvnDjA7uudujjfmrBMwJhwFhBEq",
  "key9": "3geDFzWdgDx4yUknKeR3dk3VPpcuY2sk4znJTXov9mZzHvus7fUxjh2cRD7LsRLK5awzGsjs2zzvrHuKrfyGqXbN",
  "key10": "3t4Dei5KFEuNSgriQZaqLDwxoX7Hx2AP5eFvmKdvuJHvTgjxHmX3x2wJXJwUTmDbwoVEqCfs4SEoJAjpQs1mufYX",
  "key11": "3KSGRVCzkimv2nJYeTTF57NzDyJYAJ3tCZswxPJasHZKFrcXNUXDr7cJTWVXPnwKukNfUcZdDqXNtTVPKMjnmEXg",
  "key12": "4GPNT28t2g2zvGepGL3c6RtfumB2ePfPAiR9ahw67PbfxQ9Kz7jxCPuiQ1CcfrPfibr1mjJottjhLuQ5ec9PZWK6",
  "key13": "4rzsR5rP3FgW8uWftVXzYF2otEoFJaYKMMZh8jQUUytdhH5iF85BeSp9eXxD5PyKd9qahBy6HRNWMA2uHS57NTUz",
  "key14": "eLm5gooYJCwnxbPhC3FdCUerkdMvyzh3ouAhPcHwxFPUqQZbNho2dJQiRFaELbLc8vtdUD6ZfumUYEk3xZBZY9P",
  "key15": "2SVwKrqvp6KbALyLQ8Y3HoNoqg3uKf7kTWZ4ZDVRdcG5UGz7FXVpRiLQ2CFBrnngVFJJoxHJApxiumjB5yThvNov",
  "key16": "BLdHr9Lt167mKEG9xLWDiK5V4bwGsk3BxVKx39HPBUdYd4taPBeuzzD2QKZ4ZGJdub2wTva6CHVEEvstdgQ4S1M",
  "key17": "5MWo4naXf6V9GAHoQCwmwpNn42byTWBtCGcJxHzPdpJzyBMwjseTU8HEbxqCLcPjpjVsaFNp9t8L91swSVzJZfJj",
  "key18": "2Poj6teQZHyuJW9PB675HrWnr2xKgAxiPyio4sUDLP2PHGfhSmapTKiSGjQBxf1fgBFFK9mKtQjauFoMdfFNyFm4",
  "key19": "4iQCpBCEVDF6RKYTksNLC1n2kZosFxavjnhWBFpWKZymk9L3Ld2ijVwHTtT7BpcFawrXByyKbuuSDjfuWfyDSrGx",
  "key20": "4tBntvYuJTjUYu4r94MJgxejNxErku9WrQH6xZmFYSiUEbH6UGCTuuFgdC3wJRizb1aM6cmSfMibNtLctfRokgsq",
  "key21": "38fDCNowvCUGvpW1uk4sgun4CaQhnt9e8FJUd5VJa6kwxbi736yBkdiJS7t9HPoUL19Pup1H7BQ6FJMZdYKkMv2H",
  "key22": "cCKixx1QMEaTGmu2iw3TnGyXDfR63HF8snMvHJqc86MTgQouzNudgAXvdTpphZ5u3TFJQPekdsURZh2JT6mc9LX",
  "key23": "hVeGoGXVtGmwtjfVeFGUFR6vZCXFFJtKqbLgNzgGwULjDQpcD4K2WwWiDDswHvwHSbB6q7D3xKXceDX33awD3HK",
  "key24": "4wNhw9Nym1meUqfdR5daHBqpTi6dSzg7vCEJsu6SpNGMkNzSP8Wprn8QyBL7YCTHb6H9UQwNzCGwayfB6CwJQZhq",
  "key25": "39KFZamLZV46JbAyjiB7esNa818byVj17EerZEVgQ6gN5rQphun6svfYC8qkkn5jNFvRT7XDcKZeimjwGScnPzNf"
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
