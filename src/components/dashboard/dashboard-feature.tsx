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
    "6vUri5gWGTeFdUjwjSPAhAq6FrvpYRher8imnpTq56AvmepXESZhVeZkfYFYbnPVXE2ShAVhixCnneyNDQWn5WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSZbEubMcvL9XbPjybEgeoztXNGqHosVFSAmABwPazLxzrqA5HJV75bEFyb9G7CBB3jk7B7J25nUKCRdWfScWKv",
  "key1": "3ZQUoXW9qPuDPtTCxe1VkkTYhJ9Z9NAnUNfuLZ2GQwWLMkbfziRzyLFWqGkHNzFFd9hGWkAYNy1zg839qeA47dRL",
  "key2": "57xiHMjSGraQxELoBQW8MKbvbo4RimdoQk5oHsEcfsWAa5xpeuK1gKXoQSCBAfJa5cSRW7r5X82wSBieUfChLUUL",
  "key3": "6ZoyyKsNM3DqRZdYfdkcmP8grVjs3Mn7FDxQy9MRAyJM1H2Pe2KviXz1TJXjMUzC1kXMHdWo8d1xGj79hGy2BUL",
  "key4": "5PEwZtU2qpgUZR17tsfSSbksm64MgUgc24MiiTnRGS2QrjupxNLY6sB9PVRWLBPRG2DZwJzbApfzaGNvELUhG1VT",
  "key5": "3JugxCi7K9iibT4narkMh34KFKrR2h3PNHrJA57g7mqtctXbTCAh6Y75c4SmAQNx7cW3J2EzjmSZtKEhW767kXEU",
  "key6": "2oik8QaTubyTr5wgPHZQEo76qA7MW2tWu5kk4RGy7BHXD18jYbUrxwtzDNxtTFBsPvYfSGDy8U2P4W73FY9fNdt4",
  "key7": "5FMA44MYB7p1B9bsAS4tY81AcmrdbzZPgY9cdUWwgJUEg2YqMkvtYNtmpijjcCkXdU9N4jncSgkqNXLBVCXqwdao",
  "key8": "5DxxcmJVXNLxPxjqb3N4KWKzyrQbgCuur8r9oo9xphN8dpFQVXrKneUptn12TGeeTx2en8qrXg9wHuD7PHjuTvw5",
  "key9": "123jXpF5iG2y4rZAmytvn5fGAqU6BDJhcrQJ2obuFuzyETHC7NcDoXp7NGJXHk1sReHcdxhYqNmY4kLZUJKMzRCg",
  "key10": "nKDpsy42AGynR49j7NVk6C4GsXXCn6Ae88x7q7UY8npv8Z4voCn3oQksD9PBr5kReMmEbJtXJQoncq88rCYwfdQ",
  "key11": "4SycnRAnjPXchVm78TroGWsE7thoX1WMKGQr9BraXuuhMSgoWSee1S3E4UKqDRkeJ9z8FrvNQYN71RfgC3pJjay3",
  "key12": "3Zy7JSQjDX8KGJeCfGzYg9BMDKNhS5vf3NcNyt1CYKZRT72uJVYhHgDBUChEcNSeP22rmJRbzikcwiZWKbdQYnDF",
  "key13": "49SHSNirwmWSrpLdD7QQA423mtbVxnRe6nZMzqwjjGHvoEhT1uN4wmdjNNNnxJ3B3PqzdrtGLgHW434K2A2SsK6Y",
  "key14": "5K3H6wT4xbtT6EzKMfzLsdrjq9zDy3J2dyQtby5uDcCirzRUZaTxup2XruSPoQtqLXDQk5udfC6UUEHHSwFsSSY",
  "key15": "Rw67P8z1NXCcrMjTXJGdH97U4nDUK2jXCU1ZGWReEkCRJLq4gHx9F2CYmiQKGLeDR8iPJ8hPNrk39wgpLzsYYns",
  "key16": "56gXx3uua51oKkgz3pPxX1CYNZyvnWWz37dxPg5fQb1ZZz5QU6ARX5CwTcPeEYVX6husRc515VXb3Vtg43Syoxmm",
  "key17": "3uixYj3UFJXipZVAMGEJ4y82gZc9TnegLVKcBreeSVDPG9P6ftzwi36Z2rXYmfV6n9Xe1kr226ZuAUMngtkJTdtX",
  "key18": "64d6gN4QpzTNSZvdoNFcaAvVus9KgkJyNyLxNyBxKKVKSdk7CrkZn1q17dr9ysTYBhfSU3vej854oGqmMGG5jnGa",
  "key19": "3gtYBh4YMR3YStgXEa5ziGD4xWxjkYTtzNY2Vwm2fXZhCbp4Kxbz4vGjyPbxK1Ryt21UAMULY5wXmQa4N4Eii9CA",
  "key20": "37CGqvtGsBtNA2dcR6nssXcH7KKFr8qBZjWNU72B7DbbNj1rP7aVH7n5xggyTDCGQYt8Kqpku5XogNf9zaz6SiSa",
  "key21": "4i9EXUJo9zfYFEPuQGQu5iEBYXhamkmPyKcGL5QA1DfuCihjdtp41utgGYEZxYikK961V75QqpuYiZ8RD3Ru4FZL",
  "key22": "XJZm1Qo1xHy8R9pnDRYn7SBfBqKPVKeou86LKNaPPR7gs4iAXGP2zzJqpdy4eu4A4pQ3ncfztoYMUML7NmzL1ue",
  "key23": "3jpAP2ARzDT2H9GvkgAyr21eY8HRUhhTejUshgyZveAheYs3NKvNZz6AuSfh7hd3bE2DRfhhKctuWJ2wK2iqBmwb",
  "key24": "pz7XGweVC5HhSVUMcBBGSDEakFNP4ZaA9an7fgSX2MgNhHY3LmAjKkNm2qQSYXjfgfFWh2VoNUiqA6s7J6Z1gcM",
  "key25": "2d2oBfsyk2iRk6wAZid8V8UobpyXBsmNSTUicVJ4Dvw8jtUzi7zkHws3drioaZVrcmJwRdm1DiSR4khdwJTYnUMs",
  "key26": "3w75nuHDwfW6qJ7jpi86YAhi3sq46zkiG1qEbm4JqERo2phsBN9y8ksnwDMDaMe3jFtgbMwRUbDy4L8c6uTiRFAY",
  "key27": "5WuShLaVFTh6cHU4YiyqaanQSDsgJA7mVwcs123tB8AENpPN7CU5GpxKFWuEJ5qMhjSM8HFbR6BXqYQGV22Wfwiz",
  "key28": "4vZHC12GQXTwqn8dL4UQDUoKt22acPx1DHNvbvYFFXiJwrV9y2R1NZLe3JtMWFYUBhcqDGx2koNu1KMYQQp8tYxo",
  "key29": "1XKqboCWkBtdN2o9CXoKyckQGhUcv1Zk4cy4vCvhfrTE1yMou8fNvfBzNpCRuHJ7TonsktQnY3Vd21bwNijPM8C",
  "key30": "2oWxkz8e3mjHDiSAGZEPxpveGYascCeFYFLRwUNpkWduV6skfTEgBSRAhzidwFCxosVKv97r3VEUCQkpt9uTkYJF",
  "key31": "5VzCYnTAYFxPGoENRwtY7NgY3df7STbHskHo9skfXChQscYN41ovCfQLWcXzfucDQio6wUiYp8RzDA4m9TSLwmkx",
  "key32": "36qQ1iCL7w8cAkTfzfZmUWaDcP1VbMtp7irWRScK6raskvnsXwQcQrtTHjP5rytqER14B2GrbNgpnkMFc8vmpmzY",
  "key33": "4QrZ2MWV4HvQGMWLwHtXuKDqo3Cy1UZCyMjucDUMpnoeLNkR9reRgP85agKy94F84pMeRdNQ8P8EssScN4cNyWiK",
  "key34": "3jPKCCmuQw5md4aJTHshgqGV5xwqyrsxS3hUehxNoWPno6DDgh5urZPtKhKyVF48A7UaesJRkEPnmUWNxiRxPndy",
  "key35": "xg1a2BKnU2yJoYNXcXeFoKaeQkd1ihdUQRZ43bk1MM29jpLu2fCCkY4ibzcV1uJ53aKcSGTTsjhCJsQnmskddkS",
  "key36": "5Eq7F5uM4mahX6GA1HQ8Utk4hGFRCFLXk5Vt2tBYe6bANcEFv1b9mMMTpx7VdSghiC7zjaasKJuyz6kbfpMZeJA2",
  "key37": "1aK1MCsV87ADXmtdA8Nx7yC49yPCGvubbDY9sbpGVtRZ66x2L5qLtkTD4XhpyNu1w7PM8QjNN2xZgKYVEATSSh5",
  "key38": "jrNaRFbHKvVBAV7Ppp1LjdZ3tdPwv1wiQPBNSEEk9tS1txx3pXec92BX9dVYETUPsrekYh2CLdmpfvEDQ9fsrim",
  "key39": "3shTbrFwcoucxz4NmLqEmpSWu6B2HacvT5Re75LWTfBGsRzHqVRc78FXYx3CUcUqp5C42TMtMPKJuGVEUN8G996K",
  "key40": "3L2QwPqjbG8vZmnBEzFD65gSaTv3LCrgeJqDjpvX9reiirwYCXPtqKgaPz85GuWasE6U54oMYYjrrSXibTyaxi9V",
  "key41": "2gPbHE4iQK6tyP1MoGM356hEatM4aQeB7Z5zcrgP3DBe2ubwvqJ7UCrh18SemDDLKopt1f5pH8a3ggPmxwW2Nf4i",
  "key42": "3aVgAQxH2DkANUL7Qwpyh793aMx7JzAQwcgRFjU4GkrrQHAzaUVtJvZJwEt22m6q5BHMYuVGLm5oPpKd4bEXkkAv"
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
