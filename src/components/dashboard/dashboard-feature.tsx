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
    "2deUX3MbQAjQq2SAiEn4tbnFrDAS1fxBFQXJ534ty96C2cAwhzYNyz3jpLJTYonj3VtmGmd6dY1ofW5Pz3Z4dEZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnT636UcmGnwuRSPyoCayWi3LNJSBWn93fqT9S5YmsCP6wUCgjfa7EM9XF5e16jSPwsydYSPo1WRxHjQoVBF1Bd",
  "key1": "3PTJcvozXkTiSGCZXJWNdGWZbQYCmt5N1ZDp5ER2dTuohEyZXmgyRgvNcbJ6ChikyHiEuNSxx4QPfGJqgr2dQ4KQ",
  "key2": "36ZxPWkHFiDF3NxuMQmmRcPiNtTsxqJ9KDGzoprdgQYaFzkQXR3ZSKrtGi5fbzqg8bjeUn6AfcbKh2qaPFv99TKN",
  "key3": "4i2wgqCxTEgvMEPZBy2ej3Yxy7bKx5KZmYv2K2rYbGnCPzPHN3E1MPKH2ZFokKZ1BArTnsoiG4bTsuYi3NLJgX69",
  "key4": "3hKiD3aBmMT7CZPfpbRfsmcU1hXyFVz8qDchaML3mFfH9T4jxUNUWc6ciTPxkMJsaUjtL59WPKa4uuPLzbGHoDRG",
  "key5": "3dW3Yuv9SBx9x8efZK2P4fnBdgtq6Nnys3qvFJfyqavxBE4k8Mc3pmki3iMBT2AHnyKhdNS8uXUM8RipVyKJBf4B",
  "key6": "4k55EtarqoPWdGHKikYCzuutXWLwWv4eNjTXkVLcxtoaya1tqA9n6n9pW76oiuLDSMmuJNHNapYbEMMWkf3KMSZS",
  "key7": "4D9ikheRUfvJEtQ6D1TUEVfkejFAtJnR95bW1zCtk1NvStFES4c7kpNu7tpRU2wh8zVY3XdoCsCTUUkCVwrzmC3d",
  "key8": "5NKz9yoT6edF9G7fDSCVvnzyTYGEEGSnFiFJby7fhEfKd2pUfNgmLiR2Nf77xLqCFb7R2SezvNnHNTWMSdzjTt58",
  "key9": "FTJLYAVoMawezNm2cMGyG25d3aMdRMV1yrynjaQ7e5WsWMZcfTPVHzVEP1ryxmNgk7hFwgmW8hrvQsWaoBKnhpS",
  "key10": "58yccrKK1eLt626aKaHw7ZYHkReMyXRpRirmfdewELTzDZ6n9Y6zRewoo89fCyAoVeqXpNqTm34NfAN7vrxJ6v2Q",
  "key11": "3JqCVVwgxrPe6EuSoB81V3HJghwFBEJ3oTq1Q4ehYQfJdQaDQwdV72WdhZF3tHmLTKhLVezWLSYHrDy8NMfiy6R9",
  "key12": "2FxWdadhK6p9nKe6VN3e2QYePa1TfXRr9WxHZdfCVjzgjme37LQu59GeXDQ4ymS7LNysvZE1826D2jzGfRLx99Rz",
  "key13": "4zTKaNbpFDNRGgduftYMmVbEK1A8DqeS72Rokgt9yzGBNtAezYchj5mtbDbzZr5hP75RghjYovCaHtZwoaXN93WD",
  "key14": "4ubfCMiFwv54VAJAig7SfW6xgdo2PLvADgsTxf6K2pnNgc6tbR8dANJXrtpMcrNBkBh93WvNzEsV7sfCF6ZBexQA",
  "key15": "2exzMJJcXd6mYfUEETrHxdfrHpRwShw8DmdQULFjtF9BV116M46vkvRJznY1NmB7NAiktSEiNFBRhaF54jMd33XW",
  "key16": "E4LvGtXEWPf3FBnWWuZduSr7fqWn8UEinyDw6dcdn5vcezkyHjqAQ271jNHDPoPE3FT6P3ttMNdM5vwWQpasBT8",
  "key17": "3CSx4VZLrysnYqeDkoZQBAhDTJDFfeHsMAjgiRuGtsAGL6kYJzNMxcNPHSz1hRq9E8JBM5p8PeC1PgjgYxuwZzSh",
  "key18": "3xZhPrNUeYUfUZ2xMtL3GcrFLnvrnZmhPmLWo9UBXsuqvCqZcgvCr1DXTsMz3LdeC96T55PFijz5uVHoxovjTP1S",
  "key19": "cTf1ahPKsBV8pwzvx9XMQYRN9VaNXjZmndV4RFDLxCm5ULckhjiQTcUv3UryhZiT4w6kKMiPVFqyce7VjSCw7Np",
  "key20": "4MJebM1Ynpy1ybsKvEjMTeuqzEHvppmKRNMEwhSMY3eBumGBrBBkBVir52iCbp6ujn929bqdD6ocy6UWia5KsjwF",
  "key21": "5DpRimUcXmsY42Rj9c88z3FqchoBEvPUbGe1vzUPTaVHjPNbbLRZGinTreLoc4Muiv2YiFpyLEeaybwMiNipsa6D",
  "key22": "3rbxVzJDoG8reXRm5ZADzuyGVaRidjAZNyAaBdXo3NUMTTepTaz92XKeKyoTtiBD7dmH12bg9t6X1HfJ4HYPrzrM",
  "key23": "3kFtT8m3av9E5e744NptVFUZZ8s618bxQu3vf386J7FMQ77D9PL2AhYCBPcv56HzJzVDMpii5ushH1envewMXdrZ",
  "key24": "2SCwHUYcus2gJV5o2yge9AaLhQbgqvPYEBYFXHQ4DT36pLWNjN3NpC9SyTQQGpEPXRFhSabgwGMk1VE8xomhPxgv",
  "key25": "5St3jBpQBY6UiD1byBcEWxtZpALQD1zDnEuBiR2kyQofjM5fzqqc9QSv6pAQ3bbAcjzDhcnZJoXYiC4Fgv5czTne",
  "key26": "oNNB5R1URvR7VhJxHsjSXzPUUZ9GnytD1KUuh9rHQwGPCUSzS6o3fE51f8EFtLwUqzxZNwhcsK1wZsiENtE9T4m",
  "key27": "45YQTgdHNWEwSBezFgeDuAFjStSA5kNw4L39azgSQsAWhSvkuajfjNeoABxSMjQytXCVpqraLUKrbTmiuMwWQdNK",
  "key28": "4Krimu4CNqG3bPmsoW5tYpySEWEd85dQvSykTgZrRYxNaRfShnBZZz5Rz8cy1ZfSPAHpEE8RYhh4qwAzCtFNofDA",
  "key29": "5vDCyPHpBTbresQAE3uFiRG4r1DkU5iUmMTPdBVoGV6kdxWEtanhG6AehRsyfEnZxamnLxsUNaeoU5hf7oQbrkmW",
  "key30": "3q9dnK3DsUGF7tAaAAMvqCQEA2XeRXEve52BpmtXn7NYyMsyNG1xxPsAh6e5nw2vgja4edGiztCzB7WovxXP1q3K",
  "key31": "3EUMazSs3LkvENrAH7W3asLMyk3RQMJgoTdZfXq2kpZ631pZtFK2cWXRc9j8Es8JZA2cWFukwANfnwhVVxNUr8CL",
  "key32": "4UtcoSnGcscUHpGem97dKpJZEDDkgmRBjuiqdqcPaqQUmgnC9LoaTvKaKYhHSokdxYcLxCD8aH43xRV7Utww47tb",
  "key33": "2FSCb7LUH1JQR27YS6E3GGXMokKi4iVLVGeqYnL1fw5cWkUEV6kimRwHBWSXETnBkcq7dH82ys4WjFtvLQVmN1Fo",
  "key34": "3ATfb7XWJEn66hbXPBXa7rXjiDF5MNCYbTo9auSC45J8d1BRfQDhfVUGApCN4BR4YQ1gcrJxS9rc47MSnssGzTmM",
  "key35": "3St36TT3kZLJRZGiwKYL3e2V8FWrRMryQdLdHcYXQZiAo271KoDSPfaJ3eqJCGtV6jkpYbPMv9skhRs5TNKpLUkG",
  "key36": "3hmavsrZbyZWUkbu2tcbW5NnAJKan1piLeQa7fvz5TZYwaTK3UoWNwsQKAvZGCCZE4kMdMTBAZKf6k5zUu4hMRMr",
  "key37": "2APZTujTLU7qyHpe1nJMrwMvA5JNr3HxoYvwBeHbRQcKQA2JW56UPdDx5kTKXguTb15nEsQbmanugkqMkY5AKVWj",
  "key38": "23xQpdGGuQeFweWgYBFJJ1AEeHvjmftX8uf1xvbT22hVjT1Vi7mLno744pS7M2rsVHYYJGqz5hPXkxtYcCXmuPaQ",
  "key39": "32ugHm9Njk7GwkCWdufVRijejCquWTns8rxBKgLgvew9D7ZQPg5DLw6Z8NAqDaLFXJuwsrnvJeQpTuZvBrqP17Rn"
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
