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
    "2dKcCWdaHPTkL8ygLCs2eiZfd7YcTxertc6EYg6x1X6Jj2BgsUay4FWhWxeisRgSBe3c1zLeVbbDisGT7MESG8BZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHsNpJ99AHxP7Fq7jUuarSRg8hbNknNsZ34DKz4i6PZertTRQZrh1355jdKLNE1QiwTN6SfDJqNrVp8DvfhFUDP",
  "key1": "3NpT6GJ3p9rRbufN57ysx7YpUfFcaQnkNBNeMr2GQwuuKNmMpeQKFVo4Qzcuf36yruZekZGtBWiLBpkBfFJM1tKy",
  "key2": "3k68hDVUdAdUYd3VgJXNz9989E2SUSNcNATfxbs2J6kBRyoL9GYXaSMaMhWNk7pEKkyyjBC9QdAyBCoZRMNezcvi",
  "key3": "5xfP2WdSL1QUGgzZpAZmWEzkeE1SJrH5t3dqJnQgt2TMh7topTmdry39doCNg8gMXkwrTE1qXY9w9dYakBn9F3BM",
  "key4": "5TLEb5pmrKMZJe9ho1UHADJJTjZJsWZy72TGir7oF3Xd498SHqj99dPKBpt1AUn64dvniW2VhFnq9zGm6uMKpUTv",
  "key5": "5yt1QJFgN1HGyUvLQLpaCj6BGqwf4oRcC8WjTtbG2JRk5BM7vfA6Lgg4GdAB8aedM2timVxAATapeWJdvFEkxj1F",
  "key6": "2h3vmGdhjoqHqSYFMebq3Hb9puyQeTJhEnMUtf9UqGJkcJS8YgvBykFkufaJYEZHLe4kaQCmx5Xpk5XHoSuk9QAL",
  "key7": "34byftm3dt7mrfLrMUSvMd41FQa9AAmjGLPcn9fCabV6eHsBZqt641BF53tYPRNNeWwgihndovnzBqQdj548EMG6",
  "key8": "4PSV8yefdgoFtpqFaUNGvZnEk5ANDTAz78mqJRKvXFSFJ4XqV9SgDZvWTqmao6RxHCrDNucfXVvwdj4iHTqzPb5Z",
  "key9": "twrBKBCRVNL4e5GxuD48MfsGkjkiwWbiqw3TeJ8fHpGk4jz2JSEpitEDwKJXLUV6Eghia38iuPkMiXxWAwSanPd",
  "key10": "4nfwD9syD9RubdzfRqYq5ie8vRSoMJJH9HALCUz4sfgCzj7fLN4Syee3LRnN7542qWNrasqqPrcePRn3usy1Guo",
  "key11": "5cRsFfb9V2UA34AQTir97tFEhxDyUJActJPhgFYLAeZQTuSonS6rzkYTN9fGz1v5UCM8gaESqLumCtrngbGvum7J",
  "key12": "36wJMQq8UYQKEeAAnDRSTmBVm81YFJZTEDp4EA2VG89rrS4L6tYSg78q6i8t42oaRbRTYbnggM2THNGj5tRkT4mN",
  "key13": "5jQtYpgMATCMqzx4f1BpASyMKHoWTRWS95NDd52ZaeT9bAFpnNAuoRq7cjBpNxmEuoo4expQXb5fiVwDcDxgiubP",
  "key14": "59nZmna3rxSXQSLtmM1j8p6s4NKPrneYrcueEzVgyeZskjJx1cvPcbWWwNRQn43V7Kc1VhZaRixVHZriF4MY3LYC",
  "key15": "3YpWXwPAis841QY7ZVmytHsgmdyhNZJGkdFnnkARKxoxJsMjhcL9Pu3rNAJyN8tCe718EEtYnFc5zAQP3jrQhA6U",
  "key16": "2fMDanK3GT9PTVAu4GSy5p1LSd1FWE9kg9g6aKF4URd2qn6dWqx2gHo85HWnbgaJu4hVhJVn8kg3SQU9q3Mr5C6c",
  "key17": "42S1wPCLcg29EGd5JUvG8FvyMagM5HKPpsK99PUQFUQxcq6azrkYFgpGqLRm3gn5gRx3kJ4ZEYcBvJqbCWuV111z",
  "key18": "44szxEzhQZjGBEXzbGpRebHsUtsGkvSNnuSWsnsQ3NGwJqkRMKMjwPhrQRQEznNZzkCajBDTFFzndargJz8cB5vj",
  "key19": "5pCnBeF9icoAzaJuCTq5RtmHqSy5njjEhw4NFER92s78jiZU1eqwrusUTaT7r7Pp7xRkk8eaQGuuirk6YTk8rGC8",
  "key20": "2etz2P3kArfSJGtSppvyxvUJ4gomKkq7UCnaAw9v7qo7xy8Q3PXReqM3NURFys1FWGr5e3X5Si95gZhFwf6KzjJd",
  "key21": "kPkQfjNjuhgqPNMMgJjXYZANPVah2cCxpwRshDRKaefHrSHtKWhbrEoPnt2kWmRcugEiMHzZq2P31Y9xJ8qvj1z",
  "key22": "KS9nSjFttCk3M8mTBSCmM6JQToi1s2yB37NmibLV7cvNRdx9B6i9dr9sZBgyDrjCukzQH8DJ9tNzStnmKG6SnfH",
  "key23": "42VwWJvnLmrKrW7Gf7gApJaFNBKWNUC89rtSvHhDbYWVuNJcbG987pqbuuhkdxXB8WWdEFXDu2sesiRcwFHVpMSn",
  "key24": "4gT4Zi9Sv7cL3XRYeMaKruQWRgSNKi7um2DkpSSgpPgmp43Yx9NtRrPpxwqbeSUcuwhQZ9enMVW2yS4Zy91JgiHb",
  "key25": "3LXT5Reh8AyR1NfkPn2Ku5LZ4ruFcAQAuxorxpuUEP3XUKuKHQvi4ih6NSfhk6eav8TwFQgpSvcQRrbrZ9TqCcVk",
  "key26": "5R76yrcZ7p16nYL9vgWjh3D1UsxzScgSajfjxVoU8b2EXnqWwG2FSVmPXipUCo4SzHb48cxhbqnWMeymL4dpJTkV",
  "key27": "zJchUt89jfbYL8WffkZ4C3sq1zVz4Mm1fLc8WdWdDB5K6ZiVnFjq4SJThq2u1nUx286nuE9wMRcHRUCQdpm9xqz",
  "key28": "3ALGWbncAUQxQMKNy7D7yzSAdkL9rNLM7mL7JJUbpZ3WJiZvCtp3JfFcs1yymG8EmeAJBMGcG5WiUxneV7iUtu9E",
  "key29": "3r932qdc6Hazv4n4KjzPvvVCTA8BsVBQP8R4f3bPiQQnxdkhYBAZGXc4GA12k4pouyfpaUyLbWHLg3T5eZgK8966",
  "key30": "2DgaxcHr21ZkyncLswe1DgK88WBsUAwy46ba6CiiZywBp9ciYjmBXrdJ8VAxwTehq8doyM9v22zsqsCtVr2NwHtV",
  "key31": "3zkqtJS7CgEKtgWMHqLASWeMp37hCSxZ8VMyvGfADjEJrsvRpJKSdnAfv5Cset9GhhEtjynhajwVFuw6g4s8PyTN",
  "key32": "2XJLy7bQPjg8wxdrbVkDWtoBDtqACu8KDqycHzyYwoUouAsUkdcEUdCZ7W66aTAo4Zb6xFi6uynZ9sXimvQ953bt",
  "key33": "MNHWiSpJk8bz6NE5GTzguMSngfu3iAgfPdNvQi7ReuUqv3ohpddX59uU7C4oXi7WcY9ztki5kYdj9y3smBA1nx7",
  "key34": "5gFAmd9KAf8Q3bvKaGN3gJZBQvzaHCW7sHSzGMdufZUEWqUNmyBNdLUtw6zn4R5T11Deny5QupH9VmP5X2XR4oVL",
  "key35": "2aJ5WFFQAiAunTVcrqx7beHVohU2a6x8WvxzLzo61NDzCzhJrC2aAJwYrEaJ8FfNZUxqTMVRdzQsEboJsLNo7p8e",
  "key36": "58MxyxiHc97iEPyrE1oKjVwZKS4FeyfRT2jQaR3SzULb1jUaC5DGLu4BKmBzaAuPfiDNftoUhugKZwqPHdBZ58cU",
  "key37": "2e4cwhFZb7asKABSSHBvqN7HWDZVmZX3BaZ97aYdAbbNWKGU9y8V3mtTPb1aomy9Mm6XteTFz7QDgSMknwm7Fm1Z",
  "key38": "45i3hdggbxVd9vNWohge4CU4r5XwYWKLCBUZHMzRkPv3WNkcWPBszTbdJhegtMk22YHqMdEytajfZ2D8K8VLaxR2",
  "key39": "66HyHieMqFEqqwTvKQht6drqxX9yyyGCWdKtPXcQJdd4so9oaZdvTEKcGC1BXhihx8iGbQNfufYcWf1i9RPrc3zg",
  "key40": "2cGf3Sgfuo1YyKJyNbvS3p8wa2jYd6eocbM9imFPjkyv9JvtezhZ3fUhofUFe4EahiVeXEzD39aYECwcg3pTnLU6",
  "key41": "4KozRjb7ooscfh5mTpbzRLFTYR8Ev7XwD1QHDcFXPmb4TV72zxowDtiyn81FACLFzFjGEQHsr5X5Tn9MNTYHdcW8",
  "key42": "5ir25JLMvgs17UWAfVsg8HynzhiBtSdhEuC2AKaFydE6pWyeXD9JftBkHg1xmKemrLGyEGiRwP6hZXTnpPbmnQBv",
  "key43": "DYE2mPSY3YZEHuQ3fQvsEiDHSPV45gRqm4KoJHhwSghkifzfaWaQjLxsruezssQtna3AFjJTvcSsrbCvKEXbfCk"
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
