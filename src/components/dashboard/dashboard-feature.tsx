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
    "4YYwWWYVHoHyHtnRL7G6Hqk4vkzjzrPj92RUSD31ZFSrFWji1shPgKhicp3ZA8NcYLbh7mQjrMuX9Sh48WrSKqz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcBQxUGGrFJysrcmn4gCpnf3meQCWGrCrGs2Zs3tnZtUnJN8ybFiczqP2GvB4gULeyzN85dSZoVQw7ayj36t1xk",
  "key1": "32h3wgdL4PYpC9WNkHAc4iMrippBmMHKBNHq32TAd8VBYfr89KzuZumGht6pX7E94WYKtRwU6S8eKgqB8D9tEJAf",
  "key2": "4pRspgE3zMm2kX59RUSRTq9WF7zvJDnBDLK9KDHBNhBuBP5fGGNUWHdgfV9LiyyPWz4A3Sg3e93f58wEVSzq9xTt",
  "key3": "4kTdKCRvSCUxvfzoZUKuB2fg5BXFf57DmkZPXeuSoc13eU25QddWsDHo1mKW6nmwgkeiwA3ZQkzXsJMiMTGmGR9R",
  "key4": "2yJ9o2XgjdJsqRuapo1GZ9vJbV8Qfm3iubVZrDsX2qoX971tYCDAr7nMwsWHAWQFut31X48whuhja2AG3m1fWRGH",
  "key5": "5MYRL9hoTjweUjopjDxRw9fzo6oVYxRzrqtbyff6Srx9jpo3DUGx4r559wBoT46LDgsUDSVqoFSXDw1R3dxgnK2w",
  "key6": "42ynB1JAdLamDsZ8D9PwuZbSm2xaMfmcsZvrx6CDMAawbA1NfKGbSGgUsYa5Ha7M3oNvXeegMsTdYxvUoSHekrRy",
  "key7": "3wgcLUfbqS5uX4T8SDGEWAkv4orQAu7yisqJgxnyzLdvtrCyLtZ7TmMwFvNMtdt3u67Kd68H8kyPqUcozeHxGexK",
  "key8": "4rQ16u3cYk1Ms6VozBH5BX9yZXPqTC4HgyYQpyzddwcanzZBZ7qJbNkxTLYq8bVK2Tu63tyGrcUJcuRQw5CmeWfF",
  "key9": "3NFpQEyWKgrgNjkenvbjyuGMMU7oARAKACLBgWTZLr1RSYgzNKnwQ9uAhvhpATAWPY5aQDhUFFWnmHJobMkMXcby",
  "key10": "4YqiJgcy1eQYehH6ioqnUt21F1r59JePwSm4WBKxw8vYwLCLxhgvSp5YJHXzimT2JfYkK3h6UEpyRXhmvf6NJ5Ax",
  "key11": "3HHZBEVeGuLLTpXh26BZ8U2DTCgRkx6USpfQaBthpmgHTNjSVL9sMQukExAvm5h59A2TKeN9a3Zw48PqsyBYvbRE",
  "key12": "5wab1pnPqcnXSBETW37RieKUDbkX6u8JuhftmQvdkiF1ivt77ypYT8KFu5c71u52xGQZks6PScV9nYhQzBcVoGJf",
  "key13": "d1WamWT4iNGAT45y2uPZ5LopCJkwcpKNysXb8jTMaifhkwgxh4EPrUVbfke3KMy3eBoqR7Uy64a8YRpcBxFtun7",
  "key14": "2v8Et77ajPT8FUhivsRhzG5UqA8d8VTR8tK2idRcapBrgaCymri1EHRjnBGxt6pCkvSBhcUiqzCCuKxiFfeis5if",
  "key15": "4gWA5cawMV1eTxHeGBmnT2YGDsu1yKnbrE4QiudCKsS8sm3BGQpAzG1x2rkS4ntV8zvAychnYr8Us8ji7WGHvu9C",
  "key16": "3BZ5reHu8T8GLi6sain5Cs73FqJSaMZSEBiW9Qri9Yg5VU4puXXofhoMSz9KybkG9fYZzT9ECLUU69SzQrzMrvNY",
  "key17": "aY8hraAt8z3Jts7v4M4gF9pPxpw3dZWDv4jTXWtDkJy3TZwbDTV7o1sLCMf7JEM8SPQ8LRUyTFsyMCup6pGwSoc",
  "key18": "m3g5GJThTSu5MxyAn8DQMjwTJfYTLDkwk7ioKZ1Gfk8rPWzPcZBSvdUjV2jYpD7qwRHbWDDzjeeNDfFXwcd3F4L",
  "key19": "yad5E9DuhbDQSTCYxYU2d8yaUp2aPcKxn2FVPiTJjxvM3CACasyVocuoKQpjreLQQsAdssZuZQDiC2XFKFSAPwn",
  "key20": "3hdvpzevXAbZd2fmHwVUhKjvnCH1N9SvMQz4Q9BpygPHMCyoB2cLHncq14HtV3KVUQR9CB2HtQQUYm8vfvo3UVcN",
  "key21": "2cQ3X8tz3sGGuT8p1BadvxUCVCL9MRZ72PQH5xkoXwb1gfaTk8t6QqMZcNc7FMF7ej35Hv8GaATvUBzpMoTZ1y5a",
  "key22": "4WmCAzhBYNa3Heea1rVUmPoEKqdmsxBoR7MCYFe3ZHRhkQE4DNyzjYxAQEsyYRvir16UPnCnoyiwQAZ8Mjrupqqw",
  "key23": "39xR8GxP4osqznPtmWKyNXUe2AnAZutPV34xBM5Hrm1rpbLkqDLuGJLBVMnvPVvsZuaHumoRwnQkqUrc11MN1qqy",
  "key24": "58Kn9qH37ovTfmwztkMX7pZXRqmB6MP7wJN96ZwEufvEWqMFHbsaNjVocjjKTViakfisDweTfkkgh4SQDGr2EMPa",
  "key25": "35eB6DreuQWdnkzESru6XvYEkDvVkEcmCBHxGusKEx75qNQQ7tyuKuSurxTP8pX9QviceEjoLVqznimLtz8pGi6e",
  "key26": "63RwKDVYZ4jKMJELkRev9UZ2jYUFknwj43Jxcojumv8pR4Un6rbDVv2YPRYMN352RQ4e4NbdgWVJ7vGy2YPdrdZz",
  "key27": "2jui5UrPK6cnJwRsyjc8mu1fYjxdQLwS9up8ptWzPTS4UCJmsuHNJKeffwLoJEUq1nUHBimgp4tJZrk2Jhy11aq5",
  "key28": "5krsKY6r2syRiGVaDH49NArK5m3V469P3NexormVUmJcodrBzt5HFGtoWawcVgZtp1iCs7Q5XXF76MxTeVT5rv4u",
  "key29": "33ksjGd8DtjTFSjCkQVzvZM91Q7uBSbftoPDSRJXoFWtRu1j2P5gVdWA7iMuaH7JJyyGiVuGY14GyLSWWfCjtaDt",
  "key30": "2jssFVZPEN5LyQxE7WApcwUnN5o9tfHpVoDobL4JBT9HnAbcMxmjrWcZBSRPwrxWcPDnaqciUTJaCEn2TgJxc2k2",
  "key31": "3q5bWT3LKBPStetYmsmAyZEfSoZ4nEaT1NdHiuCL3u8BHbQSAd4RbtAxx5ebCwzsj8ww4BuWwuDnraVifMu7EG4P",
  "key32": "3hQqAcNgRaYTwmDgrXN6t8CRhbHCyBDK44vxs141ninUccBZq53WhTJ4WAm3vkhaC7CahyGHW8fiyrDpFpsNagKh",
  "key33": "4sPchkNCZVtdhAysvBVJRXQCtsY4j995jXdt2bC59egGvuwZJvNnM5WvrrxkQkLAHHStB1CpsDrQe2cqkpMBiriB",
  "key34": "49cnk5opEnXydYJrb86w4kRGXU5DAWcSz5L8gDXUpx6fRocLZhV8oZLVkJgatUQe3zZZrq1DXNoW3AbEYgrrVDn7",
  "key35": "29wPTHP2dLEmjKXm6KXhu48ZsSKZbeWdRJ3oxju9yrwvfG87oLHdvxRvjQS8ftu2Ez1KYUVBkHe7Uog8cXfHLWgt",
  "key36": "2zvKUBBxzVyvPffinUdZLEZu41U8dzQB5iMhnxdRJiScaQqbJnuM6nDeSD5nBExGDQh4fUw1AuAmapqHLwGzYed4",
  "key37": "4dtKvrm4QVuAF5U2Lov6eAYUsSg8N1HWRVv2jqRokt4nLFtrerJBtMzSAcALhHzVQ72hkg1c4jYuGxcSkBrd1Sm5",
  "key38": "ofAsaBer9dc95hgELXtS9ec1tdaCyLLYdj6py6CGhjm8YvM7yc1FmVj4nU4EjdxEswNiPLjYCwxZnorNPiq8ZW2",
  "key39": "4bbVbFKYtZgyazWK3nsmzkuZXbXT71kCabeXeUcsWhiPGQqpc5SFkvryrqiry56nnK24wsZ1zQAm8FPmkEfXM5qS",
  "key40": "JrufAXEUqWC3CaJ9FgRu4DcA49MmgsD97sRjefwFTJH4tQcxtm31ZQ73NRN39pH1GentTpb2jtHR8TmiHY25B7A",
  "key41": "3LWgksLrik5um6XZRWfidZVRN5hJhksZVWfN1JqnjiPYMEKsXVPDompuJzidzb5odjPkWsNNLa5syMeV8a345BX",
  "key42": "RTJ5k9ncGgeXoYr9mnDZ3qKrwpnSZthMzxKaStXAcmCEGpW1BncJWNXmDSVrZr2sgWoQ6pWfFjxt4Tvx5bvcCbg"
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
