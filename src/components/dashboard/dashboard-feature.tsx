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
    "gk6Np52aE3qhmrTAZLzMPsJt76LfZQNPwsVG7aQgnbXZzUWVu6EpZ6CrsU3UkWkmvR3MbcjnnuNMb1frWhcXLpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MKofitEPYnUc6su3VrsV6TP8UDvWa8Ru9bz3uTakgRe57wqnduqaenpSrqNW8u2rxLZVdGUvHbqRZKtk5vZxX44",
  "key1": "3gxz4oPDfoWncMhzoyEP5Njno5s5LTcTyH3o4KYYcw2rFdVoWtvMnsBkdRDygkU5Zx1YNNJLvdxjZd5gYw5xSFqd",
  "key2": "5WEtyUuBfiqYmGma6JxUwUwQAAEksWoWvDXWj1jpDkbXy87mjG9yAUEaEXwcR7Yn3SEQuemrcMsHNEUJDFvv36Pg",
  "key3": "4wnjxc5qiVnZKT4ZiqVaJBKZoTVKkbTBqBbtn7WBsmYgDkoft9apwXacphETbaEgPMbvSek798apt5bS1QnZPobg",
  "key4": "3waD7p35cq3PqFqetuftPeSmUMnyXCRRT5Wdhpc8MK92982xPCbhXE9TD8JKPxXb7v6MuM129grBjADcGp5qopgb",
  "key5": "2zDVsR9P3TdzSZiypttTxvYbyDKhLY4FsF5MgHQfGF7K8G2KA4aJTr2LwHLD2uwRo3KAjQvttBMiZakZ8oUdgpTp",
  "key6": "5qhcbsP1sAW514avjZ1fAM6d8G37ic2k9ZnrLW6ezoE8RGE7zjdDkAiPX6pFh7FdVW9nCNGCrz5AYB3DyG1HNUaY",
  "key7": "4HoK1ivds8X4Ay7sXfTRfQcmrbGA9t3D2qwPWaMCCM5GKwifLTTDsTNH4TC4VYMNWFrGZC2ZCj28cJZMyaVDSZdV",
  "key8": "3XBMXAzJXRHFCYKPcQDNX77rUy7GyaDQwQ4dno3sJvpyguRJgQQYCaGFDNkHGBg8FbmHsCdZNRbZnsPgZ3dNQ8rp",
  "key9": "5C4Krjop7sbjo2mDhMLNyU3xAPP68WbCdBX2YSdwhSK5vfREUzNj2BZ96Y7nmPgZbSwMb5kVsGG5viNZbuu4btgf",
  "key10": "3sdUcZxUDYnKuGagzK2SEexwzo7ggKhudPH4sXHRtTDzz7AEocgUqpvdcWkXiWfoxrUgTtsRxNxXGqbU97MaksZm",
  "key11": "2VD5Ef3ryvvDzdi6qbH9mLVLTTd47KfBXEnzSk4kxjyBUxDXZfzT83RNR1AYaPbXuwxVDsJUJGMu9qXS4dtGJsmm",
  "key12": "4tYbMdhcEVnLvipmMZji6ncDBw83LvqzkDuqxaokRitjziWG4KkUMPTdux1WvnoY7xnRJXaP88i3b9BAMYdM43L6",
  "key13": "3kqaybL7XJ3bpXLdEDhzjgErNhFnnnF8iDbwuDFqKpRTjxZhj8i84KKuLioKkkYeM7zfxwooemgUJsZAMmRpTVTG",
  "key14": "Lshc1HQG9KK99oPUQD4CmoL4hd7puh1VgWP587ZCabHBiNaUxoCYC2dAg3yFRbUo1a9YRnLFxS2qHfygvm32aBG",
  "key15": "2apk5QzLh2qSb1kwBRCvmemdaHDH34bhznhWmKDWCZRKBZkFfucR5mbMXPkfLMdZ3jmpAUS4qUPZCaAZ4vxBboLX",
  "key16": "2oDCb8kAWBaAixTbR1JhHLMSoDcvzszRvriodVY1cg9hcJTbKXVDwQwxvkoBDCRc8EqwEtfaywwQRLPozUGNuWfo",
  "key17": "mKsGydFzx4TcN4LyeGFUBxqZfEffQP5ou9cXtLcjojdToixGZAHfqYVDx9kjN3ZAaZDaV7niqsEdhHZg1XkS6q4",
  "key18": "65ruNDMeJocSDMnNarRcSVdkgvMYbntUTq11Qyy1hD3TwYK7243iZAxAcnaVSAEPEDjwvezTkZ8JcVuCha3kVr9p",
  "key19": "28Hkoj9oRT8uKj74rjw1iWXutM4wts8mUjv5vyx6occykUMaXUxjs6D3ba49E5ecJKWU2jc6yTtnWVZj2f8cPJrh",
  "key20": "3Vku3eQLjH6mwLtxAXS1qhX4MQPA561XhnPCFBx1ZNyPBezKPhEihY15V2KfYbmrfKqbdqHxCySMFttkb5g1DC7Z",
  "key21": "2bVYpLKNCYYPUmgBPrrKvDw86jFU6nx7XnvzcpxgCVQ7PnmNMkGAJi77cwytW8YN6i7yN2bYasmaD6VdRaLXmSTU",
  "key22": "4xvUAMjpCo9F5GPo9cUKQdA6dEnwJ5gHD3BqY427mk71aDF8fDFrt3dMvRBpxd25UWSiWb6hrEbyj96kzwmkZwMR",
  "key23": "S8ZmxfafucJZLzwkMbVixtShbTrusAYZb8etAqezRRuq8GCh8VBFmGv9SjuTGQqKVHchkE3LnLmzqiTLM1nbMTW",
  "key24": "5cR6ZjfmZjQV6pnYiVKVWqUyBFNrCn8EmE899EanSJgFqPvoSEeovNvUsm1kFCGmzkQhYpXKhBKuKpobHk7brQRv",
  "key25": "3YAGxh3HM5QJcCACHfiN795jjFoNehqSi2toXGXjzmocRjy2tttcseBcVmYkYKAZLXJLtf5Wxs4M4jBCmH3esTNx",
  "key26": "Bd1oUyCsxHi4T9J8A9rLweyLfPn9nr84H1obbJ8Hq9Sw2ek4B9HqamKzwAyvEJ5RnP7pYHj4Vyy9nXTMfRP4r5V",
  "key27": "EN99rsYoqWVXXkWZ1njZcsfxN2TwQbUqZPnH52Dt4cBavaByDjCuhNJhjAbZB5ndph2qz7WYMSRLEXF7KipE5fJ",
  "key28": "3VKDopPKNScKs6hpuLETZqbHQxM7nFERkTcotPoksgPkfxRSa4pfqsdk8P7hGuqDFYnNiTTfviNKJT7P7MtxcqfW",
  "key29": "4bCwJhZimbcjVebSbhEAFw4hLfKZj1EdZd7xpqE4W1FfbTWNmNEUi7XXKm79JSxGzGG8JzaG4wkcGkXMF1xoTs9e",
  "key30": "4YvWJwrQ6yHuqmVAjihXf2tzYJpeMsa484FU6D7gfneLEwDXFgxvmBHue3Sg5jbsmEQASow1wg5WKotnSKYehBxZ"
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
