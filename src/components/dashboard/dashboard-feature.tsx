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
    "3rBYuPETX781r8xzEtSjBWHRr2fRg9i64m44Z42hqigztDKCqUrVtw1cNn4KNYoN4ub5GJpHZxhxo1uWnwf3H3Rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hc6Go3rc51Kic36eqZkSRXYmuVCQNrDpXj3CrSkBRHjKA91XoYCvzKife3RW2RSDW37cZHi6Zxzf6sW9xX7ok3Z",
  "key1": "3gd3qWkPmF54L8xAVZPho8QdUmrxHdkjGUD74ynhhMbsixZ4ferm74Sxnkbhn4JWTrS3PJWNDwiekFivZo1Grvs6",
  "key2": "iHLFXDTBS9iJPKKahZQX81yZeMj1vg4VrRa7EXhQwrR4gLi7CQeYUwBVN6mjttEkt5KrCHGDGNfvhyST83xQJUF",
  "key3": "5bJy8hikgBc4CVXDT473c3fNU8XxUz6z6sSboZuhXxKTC4orR4wfJtF6DUCpuuYxCsMMAkM9RTQQXg3dbE5ZEuP7",
  "key4": "4HZYhNJ1c5QWXGr63JDuXYE5JSsP8oM6fzydsLRizBcaq9GJ4Zf1yAxSk1aXHa8X7BHxgmLUU5LfxNQPMRD937rp",
  "key5": "4gMs6jNDoKzpvr5ooPcUomwf9RJix6X2M5GSw4Rka4vW8RHHQLBxeK6c5Vy5BHJiYQc8qxMNtHS4vA8wx8M9ukjZ",
  "key6": "2SsmGBGEzvUZqGUbr3N2ocdn2x4SwkDmud1afQRZZoPCrLahADkTWxutctWcDJebrXwtXiXy3hmHGNdyRduVaJmT",
  "key7": "3nh76gXh6KfgCARFtcGmKo1bqqG2te4mPL8vVLJbMBdXSTJEQPdUk9i1k2LTzYJBydteYe4YuTqfwma6TpxwLfX7",
  "key8": "5kFDsnj7fapiazVgFYxMzfNK6xRAuDQ5SGxEK8qpXFm55ugyw8n9RoPzsaPnojaZBA4YbzobPMx9Xnyd9fzGDWVA",
  "key9": "4B2yq9x867Dp9pLkgKNBYBjXvqHQ1HFrDSJFjNndDW5iQHxifn4wMdhu1cbhmn6yxTZA6MmySrNh3TsDF6KBPBh8",
  "key10": "2uyPnqZxyGJv1Gfxa9VLTowwnkBW7zWPQqofzjiEgm71jUC2boBfjb3Q6b2hYaD4SjbzExLmb7yEkraZww8M27LC",
  "key11": "5CQhQiDRMhdXeSKJvNrphBVW9KZSv1UqsiQcxTJhHdNSDLeRTKBy3q8sEs7RqFymSaFKeDZegudMHnWWX2DfADHr",
  "key12": "5u2YX1Jtr92Umomr3WPbvuR1yU8awNrDFfBHphDNp597zSbGTSDynnM3tv7iUunkGNoUkv5mG5Yh5QK6n1jBWuxx",
  "key13": "fXQKDrp9MuUcNeUuG6EHa4WmYvu8fmW3633WQnuGMFpbRgD9BNr1kd5iUZ9Kj5TgjyTryniLu72tYTpm1V45hbC",
  "key14": "57X7f9YLdPc2y8LztUCSkF9fZXAmSCQJXwoDLknpzbophZors5P1J9qXU5zuNoGVwGYJwB8BCGv9ATBKQiCok5j6",
  "key15": "4EecPSgwftZ9f8xjZcWCdsYh4pANnpnwdDDSKxdZksJwxqwTFN2grgYmo8bseiM9KD8VvLxbZasCnjDteN17Sp1d",
  "key16": "5hMjJW33oZAgxBa3YMruLeAmmyDozMHZDyg8daRx4fSxExK1Dz3UBagErShFceLeRXZyUdYDqp2tZPpH85mZAHuL",
  "key17": "338xGB2dqpSqdw6MjozMs6kH64T961cuDmEtJ7Q6JzpAPkhT62kGgvaBV1YGmMD3oTjNkMBAy9iEG3U6JZmMqMrk",
  "key18": "eC2ikJPzY2KzAGqKWWSVDkToZ2VstxQtKwJSu1guqPLZSqYPYKjTsPzDenmX7tfyLSVzNj7zvHvV9awyEzLLowH",
  "key19": "4VBLQGrKRUhCFpK6ct5WUTkXrzoLJ5CGVSFNZQKYkWePoEee92RspkkEeARHfVxemiWTshgzJYkwTZb6XvXVDsU2",
  "key20": "3Qqcy7wsFw4B1aaj2mMrtA5WgJvFVXHU8DGjVAnvojBnGLAqeij9GPFzoL2HZK5efeLzJgMVTrhAAoUu58WMRg66",
  "key21": "2uHPB7kw9ht4rjpTzM8QJzDZAt2zc74fpmreNMUnhY5XAqR1mJ6RA9LoT4b93jbN4B5cupe2wnJGoeNFTdeptbQ",
  "key22": "5qmGV46MG48dt5eEKXCsvvJxfySN5yTiRd7HLDDgWjqszMgf9VAHE1XErBAdPd1K1Rg1LzM58NYhjtkXNky2bNsC",
  "key23": "3GexV8RPcxfc88md3o4aY2DUKAdjueWb1wNsTXfcwts8G233tkea1a2vB2Fk7pLoWbDtZAbeECLkjTZ34Sr4sEDX",
  "key24": "2EDLPQXosKXFawJ2Zf5bpJTJZEeRjo31FMM85Rn8ANmqoj5kmSUo3UiX4w2EfMTgbRGCS7UD8iZdBYhgfmQ71PiR",
  "key25": "5ACXEKY382wE7orNTf7w2uzq4sjYA7CDCztprPNrbp32DLMKSE1S1JQvCryQ9ceywu2QQ88gMVhJppAbVR8jQEE7",
  "key26": "2d5HTUAFacFUj1dBDvorjHqDivjb5Gryjm2x1GsJG3gn7GXWjuTAU521h9a6RQnz7ifJFMCNzT5HwkvkrcJPntZz",
  "key27": "4WngofftzVofBoJa5XocLmCSgsqvFHpjbKxYax74mUyu5KAvSa5FYdZbkRCvRdnLxm1baCxyQ1nRJJTgPvetzzex",
  "key28": "2vtKbdZKYuxEtUpeFyaDNBnhLE6c9dqzGs2Gs5Jwn9mpeFAZoFDJ54YCHBWam1eHG9zdfR9s9hzhAH9SXP1sPjQs",
  "key29": "BbgUxxC8SC3qaodFPKmJ2rwTRU7dJ2Fqn9Zv9YHGfXQZ3qRsGBDdWKnXoM6goaiqPAhkb5ND8sPaC8C6QahTmrS",
  "key30": "4jZzPSWScZ1GYmh5uR353jqGUFZFPdzPzg6kDwnRvJ1f3UJYhRVwhwqeQFZHFG9EFsxAw6pirVsc2TVRj1JBimci",
  "key31": "5n1wpWdqTmkN8wzcEyEpdeLyLk6rr4LdiisCfcnVhPaLUY9TULk6FBmPRXGFfTevMXMxxdC9E3Pu3tYdr7vHPBdW",
  "key32": "2Mwu51nxFjEgPQcqxdXeiBo6yCMZeLNAxeYY7JssXKQ3a4j3vtvNfGHFGJWdtgbJRtfUsbDZrtjixEKPzeTfeKqp",
  "key33": "3ncDZ738EdtduGtobdCnZy3SmoyEpAf8G1h9RmQjmbsLkYxnPMSgSHucmFgthar7EGjpUiavVfGxg61YAhTpTkxP",
  "key34": "2nMFowHY5HgjrbP4BaX98H3rj4U9ysiZEdvwojysRoMdwjD9VvgQfPGgmg1t6jYKhbVARb5eC8EZfa8wVh7qoDpk",
  "key35": "5fBY7wgxEhtTzJofqjMmD1BpZcfL7uztiMpZDE2GYfgFPCkQ8Wr4HTrL2f5xBuSPYDrkKMRikvyEJyjRHKea9S8T",
  "key36": "5KhqapUeEYRYs6MsLHS5pvyVcnsKQkGmyg3h84TAtDczW5XYWdBLCjd1Efj5izgqov2VVEdqByRqhyqB4rEX6bkS",
  "key37": "4D94AnYsPRiewoaEB9YjJWWTFv3jMnTU29GtbLpssQT124wWX8FVnowDeGBkDH6joRjDkguiyzVnf3NGfEADU1XF",
  "key38": "2uui665USEmLAQQrwxUCFZcH8i3171canzRe3rWmquaoUZ299ogbjLU5ghhjn5i3WJSNbDvYREa9qDnno5XCzDZd",
  "key39": "4taepscCp5Zw5y3v7EQYM59k7yk8kNCng9C9VPL1CeErs9f4XoRWkKTXLgWpSYgedyD4TAWEX1CmMRqUKP2rgJJ5",
  "key40": "4krLE1PmFSem7f51NZasUNSFpnqziyaDuHHF5aH3tQ7iMHNtEnGQhNYuzb2cbptmoodwJUNFbdwBmzVopEPyEfjP",
  "key41": "28xnE6oNtZ4EnF6xgDjRdS9FRR66azutcVSVdoxFjaREeB1ewrz5uDKc5HzAtd6fFhp4EPHeDzQzxLVFpU3U2wWz",
  "key42": "4Uh3hZd3pmyFotAm2xjp5gk2xTu3wwZdpsjtTBSaQ4neUrshb4xSuZwEpW5sEXqfP41snZtXc4YFXNKef8yN1g5y",
  "key43": "4x6L7qcn4oeQbysaoz5zQmiSyP6Ky1cD6mYqCuWDXzGG7dEm1sEey8bPcbxQ4kGCkuGxdKqCSyNFK6kr7LKD3XoX"
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
