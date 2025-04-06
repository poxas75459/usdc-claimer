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
    "2UZtgZmWdWCdxPED3xmZWQYX4CaiVnUj7JbjRbgkjotPPw7FBXpfiwcTLTCUBJi7y4hgbkdTM2ZxuWPVMpvTaU8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8kMLcMdxJBbG3roGNWqszwriGRGp4pXBo6kqHu9Y8j7TgPBhqpnREpkPbmLdrVSv7TAMsaZn5mn9VuHbu44jcB",
  "key1": "2FPWXLo6UZSZVudMKdi68xtitCQMxzTNHDZ8o3SD92wdWWNyLrtV5gaMfQKuq2PDgewk6HSmnKAyvN9taX65CXLE",
  "key2": "3x7jUDPYxyiGXrJtxFFmHkwM9LYECnjjko4QPXn3UQv1fKAcHgWn7DHzUwLLNqBcdgndvhBkNGDCzN4rGphMTzst",
  "key3": "1hvm9VhZ9m3A8FBXh9YPu2Wx5adevgm4aywjtKUQ9wNgoKL5aKDqPUxNbxaKgMu79575XiHZHJ2zbkf59S1Dn9L",
  "key4": "4DbiivLCvGYA5CD1jjHz425NJXE8BDcwRRzF1XwkGeEcLxHkGUb67X7CRnGdpWhdTcGsrtPLvxgVN8tD8ohPuRd2",
  "key5": "2YsfdspdoXN4ZktdoY4ViCg8h7SnqPbP5gHQ927GvYvnSxJgGSsm2B1YZUcpMiyFe5QFJ6GUk1bkQ8GiH8TMrWrw",
  "key6": "4FcmxDSYhsR5cFpuwmrqo3UaJ1txsq8RD6UtqffH5N4AUY1L3DoRnPRFQZAHg6gmGFFBt4p2tZuZnifHUQm1MEtn",
  "key7": "4GgiiFDdV64Mb2XtbeQsoh6jPw5A9DiJqvJLYsu89vdkeG6QeBCskcajHsDHftZ5jHA1XV6tcvzQKwPKKteadwCa",
  "key8": "wJucUuHDivU5gcmKNa8ofBqzzJaCXtcMXVFruzeKwNh1nwTnCgJNonVtgqub7op8v8seJ6tAZ5tTZjewYfhz39E",
  "key9": "rgfNLfyL2kTXA2fvNucMHZ5Bxq5vuG9KjJZ3oJ5tBMZNLDuxwYLCk9jWCpe719zUibjVEd25Xb6aw9PvMpvzKqY",
  "key10": "2UQxbzozkjyY2KgyyGqpECc87n5DtxGKE9SdpY2bY6e2LDdUXqzxSnQoEYE6xdaESKZC7Nm5mHjCyidD6XPm2Zab",
  "key11": "4kwDPC6RedFdxbkeYWPAQwxntwjxM2FGtYKKD3QkoCpXnPkJg2nWom6xf1KBbXVEDZhjyyFmNddmQBNuiKQnFLsr",
  "key12": "4XEayzBZqsfMiBpLf37b5zrhxeCvUWnT2qV18YuaMUtiRuSZjyewyRACPpDXSXPSE6aQ1ayaP82BJW4Yi4pAcCcB",
  "key13": "2bYtjfHttgNPhrtjxH2drZMTnfSs5axYuYzWqCJMQqDz6NrZzue8SCVUcCMsVRHg4c4W4mgZc6hsjAajgwZv83wD",
  "key14": "4DQQdiQewaqU6Lk9FjqnojZGLsfxLEPM2gPonFasEpEiqmAZHNjAJmUrc3D2uX8Ukat4c1bWet9vaJogL6ViLFpi",
  "key15": "nCkX3eyrBGFJLrV82jZgMxNKUpsGpZB9HqhrBhyJg3cXTNwEjZa2fZ1p4byJmGxCkWh4AVS9Grg83MXTbe49WRx",
  "key16": "5cHThQ2ueZjk2mMXSQgrV7AtjndRYP1Pa7QRkgwr4unaT6Q4mg9ugray98iyQeXvHCwyTWrcDnZurbvHzmmEvpxc",
  "key17": "dhupZTk2mSS4xBKSEhR2ourMYitcReX3SGQPQ8jh5ZLbKz66L8aUEfk3NaGt6QTPewAkcCfVr2uppfDyzPy8HNc",
  "key18": "3Ty6hceBp4ATVFsAVB6zAW4q2X4gEgRWZPCpfoVAYgZf3E98De4XmWmDLYdPyqmbtNfVFkJRejbeiS6BcjHADUQ5",
  "key19": "5yvNFoy7i2XJvRzdJovtgLqoz9RPWZCLaCYKvWKbWtwNqppvZzoMbP2ybZXsFCUsscV27j5uQcPdmrr5sQNBC1FP",
  "key20": "2iyzkR6ag9UVVfsS3zr5Y5znDUF5YSzk6Zsmvaaww2avsVT4Q5Das63Xs4Hf3ZtT7FV1XMrgRx4Yt346JpJbo46v",
  "key21": "44iJQ9PTvdAuRLbEAmkCP35dtP61ZwzpHBrmiP4NEXLpFBQNXNiewV5oMEs92BYTHrSjYUipTE77qtidkaFYMMzK",
  "key22": "5KHbc43ZwW33ko8jMQ9WeJChb1oVq9D88qQ6k8JdgXmxHgiMP4mZ7fmWfK7bz33vtuAVyt8c1D7ngqmYQ6anRHwp",
  "key23": "5AzpUJcBUa8WMX2eUExy5TJbWdAD65Ppz56WnVxvgDCuWVVUYR5ezqVBj3HKgaeX8uiDaWxrWq4xDNjYe1q58ket",
  "key24": "3m2e2BMkMkKc7cXm9TUZ8dcb4o1xtXBvHYtovjn38HbcnwVtJddATNqjqEsdmGJzjCUrRiswkGbbFyuTZSYJC9BY",
  "key25": "4crrjWH4Mz1PRubXtd3ScmW3LPDKRRB1mQz43uNR4oogsGnhrHc3NGhUrNZobUP7uc9LqeyAMrNj8AFckVzVPZ4t",
  "key26": "oUZP5yQdayHrzNFWF3KXZLSkVaWZ1BCBYuCK4AvvFXGmeePDcJctxTreyiJaWzfWHzYgFnRJvwVP3kgs7Sp45Fi",
  "key27": "5qj4SrYVfLKL9yaFedwC5DGpz8YchAjZp25Wnh6P5nDnHah1XZBwSkBZBVqEuctKCrETb6UTep8uhVDH9Hjry4c",
  "key28": "nVNKkd7rcpgGsmwbwSUqoZKMJ6JfbhUWckgftUxrgFBibesLc5jubDnwwF284vS7jtjYJi3Fh5cUK9MKDKbRV8q",
  "key29": "5AgdHZSa7Twp1hMtDg47N4RVmZkLkGWpsH1jNdXw7hM22YGvwKZzmK9ad5AqP4bFJL6uq3xpyxPRfdiWq8E4d1Ty",
  "key30": "4FuEHusuug9mgLB9J6E55UEC17omW1q2DpewxuopNSDMHixE7ECGxC2TgmS5eVb5AyDj4NvfUgVwbDHPemtXhN9N",
  "key31": "4ou5e8uvKMY92uTuAbnSJpCiRfRnUbjDtUNDuiaavWY2SLzFV9NwXfVXWBtQCzzotAucZELeYnAE4fXwt9fbMZN3",
  "key32": "3J53qVhPzYRrQsX1hAfTuR6vAdSYrN1nfxN8UQrrN9nyzBhZPBoZeAih3jJKh5kyuiYC3JC2bDrjjKvKwWaNv9QM",
  "key33": "2UMxDFhJKRCGAePLjMizHGRr65kBBYyChoDvsgFCpWtnsSg2GhUJQ9ubcUuUUZGmJ7RXcHmWFFqN7rdWkYfE5xLf",
  "key34": "26A7HQ5mactX6L8k9rFKuBCF37JMX7GTnxhLvZVUUoe7rPcssgXbQFxRoty89LYPd7haN3GiFEEuUkFDu1REZvDP",
  "key35": "mDBNg5jnuSjTX7BTwm9J4ayQ3iZtcBPQZzkKPD7hwW5FpbNYZCj3i1UURETb1MC1qbJgDuyTFbrbfyLR8TDfvyD",
  "key36": "3XLiKQMHALuEGoL5YAsQzBtRa2KrukMsTCryWaX6cLFWGqTNvQnjwJ7dGdaBJB3pYqgHGusVKCsQwNayxZPghSnz",
  "key37": "5WwbW3T71HKCXdqc95BfmNfQZmcefkr44a2YY4zpNVzYY1Dhso1Qx1NqA26i6a3tjUrtNn73HkefGLexr2x7uKze",
  "key38": "33fJshvSE6KJkVBmMQ6koaTR4DBfEdroR6qqqnAajwV2v6NgUMADfg6aYwaD4B3Nj1rAgiJVXh7iVJFFSFF1FRqw"
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
