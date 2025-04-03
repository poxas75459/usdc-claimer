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
    "65ax3ho5iq2f68mBp9bxUrhcyn6QcNaxgFfKLdR8kDthSNXG1iD4KvxBT5hVN9W1qaDJA2ZWu4r5Ja4uNtDRBWir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rem9LRrNCEqrXpHrF67NW39FCg1txCx3bFkyopJToeUuRgdqBkH1GmfeM2jVjYQtVZPskXAUmczwuAuw5bHhn6u",
  "key1": "3Sq15LFeco1mAyMduZ3tncgJxMS3DXDGuvUgJ5i1eiAM92gm1UjujRbVTxkLXK6D4Yy5kVW4Qf7mcPWFBoCeBMez",
  "key2": "5MFc3VCYx6NrpXj4EdEBUVeJ3KgaRSqPeWw81ThNABszFFygxtFuHpYKd6bRtpxCZYXUJ7Cyv7jpszA8M4rarpw1",
  "key3": "2W2xkb245VtWxzt2QxwMeuGQtj1yqjyKQkRiWRG3EBvGBD7jFrEViwvN1FWC3aUrAsVVt6qeWH3FADh4tmcVbcUM",
  "key4": "3hyCPWNJxe9LvjKRUiRBEUc8iGGAaYEgDo2yJhnzKKJFt8gDF8uJS8TN8UDtsnvkTCD15z9Z9KZV8ftCFqQCRdAi",
  "key5": "3mt1rEfgWzJ9MPWmrHyR8zpPntvNdmqvw9ZUNooidxjcZEp945C4YExGUj4gpuzFMYNqhcZmPXTupARpk5g4g5C4",
  "key6": "3CCDx6SvHGA5bjNXnbrCqnKUkR6fH97xwkVVaazK9aJSM8hwuQEpvGAXLD96gBX1GFWPMZBVfFrndwWuf6BUyhxf",
  "key7": "2FNfvNZwVvbRc7NZsunEfg5NKmHkNdMU1WweHYji81ArgmgionKaGCGvVZM3GsMV2jQ4BcKzkXvexcgdjAqpp3mo",
  "key8": "5XhaXr5W5m4mEGjEqZV1xWE6twdrayL6PJdm7NH6ScZpCRUqTYH4Z6Nay2ugh3QGcTNaz6rrUwf1Xd6zr9Cvh33k",
  "key9": "3qU9iw9W86C6vs6Da3rzSmVKgqsRSV3Q4ebhonJnj2PEdFwcmCxn6fpEG9XP6CovBcfdhnf35KWCTa1MuAcFhEo6",
  "key10": "XHHhcJwf5Tqby723ZjVX63pnhdEsH68JjMaok6mSaZugJuUdxdKnAWRy47grJVGJSxG2vbS2ggAoyt6XaLdDdDq",
  "key11": "a2Hi4mwWwNDqpEW3KyUo3j5ATyM23nEHYwEXUSa8k8aEQfNVNfoHPTmjCBfWopRhmRvPebPixZvTmYrtmqK2W3D",
  "key12": "4mvngR9zqHtHzNohPZey2Cd17YAyv5T8mGBk19H3Vn4sDuXkiXQAMFxm3rmBgX2W7V6x2ee7V7kU2WSvQNFvpaoY",
  "key13": "VJfF7qyYnqKQQ3eX6hKPwGVcUYfza1FJo46iP7RNVLRmrV47FJqv3qYxYfoKsogxDZ3Mb6rey7KrQv1pCa84kQb",
  "key14": "3uVrvKiBVizECGaYvbRzAprAXcyKonDotBuN2Vd3F5pnGZNGNSGEC4HTLQXUEYQgkUdWKRFKzTtYQmqQe4uoKorY",
  "key15": "5aBWLZwwsj1XY1ZoXujmgTiEnvPAsq9KaYoFVGo3W5sWKHZsfNcisbE4FvPxr6kU3v6yBL5xMSmiSqM6UcvyMK56",
  "key16": "5xJykVj288k8pCARm3mY4ZyhmuA59XnFLSCfKs1mhhfV9Q1BUtZHswrurUA8jcmDw2RWiKA8BTJpgDU5WudSKN5t",
  "key17": "3ajZo4NGv2xiK1iMFcumNpw7uxHYkgJXsi5uHer8tdbPeiLbwGqkEeRL5KBDU3HhQRjXVhuDXynqnd3psdwxZRb7",
  "key18": "zcjKtS3LWPo3bJH1ZqqQS5ZBb1R95EmTBSh83tjzhmJfSY5qPppPdVyKcseapbhAYBXnaecqhSGTEDfdE1TD82a",
  "key19": "4kXHLPhWMx9jonRUF1Z85C9oExS1dxugFu8PgnMRXhpPLQg3BmZnAatBxjhqZzPX5jaU4V4mXQbod62uXayfprSj",
  "key20": "47em7rcCakqAjsAZxB9AhRxjN3BsKAoUcxxTeTPtTfDpBnfENyiUCBKu7ZWAA44qu3H1grtpugWoh52MgC89sZLp",
  "key21": "zWKAEorgfR4DagJTTiixEwxnvp6T92ZWffiLyp8fcTBErf2DSKm1YKRJ3Dxmux2d4bCSDTRT2tPjR9nfTvwMG35",
  "key22": "Jd3ut9ZqTd6H3YT4ZNugWFN4VSBdhkhp3EMjnW1yjKCPr3XUWMPEtMEg5Bo2jAqioJegnapC8nem9m7FYJ9bLvD",
  "key23": "2qC5ugNMs87rtx7wXvGA2u4qrmtNQbcQbPXa4MHbEFDNZeGUvyYKT2hLz4iuNqngYs2MLv6jDjVRDx1cZzvHXkht",
  "key24": "65Fa2CBxrmuCNYLCyzLxCmar447QBaf6D9KQhHfidHDEKvtNqw2SSxqfVY935b4hRRfPTUQmji8JF9BBXvZdXQeB",
  "key25": "52chUTuUjtVMzuzEC7Gt5H42nK89rkqmuZ69Pt1LXxwBH8Yan7jQadr8aPvx1ZSivktA4dTcVEvYAU7Z6JYGWWEV",
  "key26": "5Li6R18zkVmjc3hKXczwELiz152PZte8BnMf9k5jvYMHdvvkae8kJcHMBzG7hW1UW6KT6GPdc3cYhmt7m9oWjSFa",
  "key27": "4LEeX5fzvRssCcUgFg4f9VMLv5Mr8PAJsUTV5nCZvf9gFQysLfGqMdiecSDz6N58LjmBTshzSadZqaoPs7TZVoea",
  "key28": "E3nNJMrqiQ4WDF8K7XrEmzrzkBo9W4uWzpc1AZmSrd6UPck22nzqcAKeiW3BJo6Yec6uwKg9vJSGzXvt6qkToz7",
  "key29": "4Aq9X8xFnXbR4Md53yUcxHZgGJm37YvL9vqrar8e2Zg1pcuw4xQ9mtNJt5iLhgvDMmHW62CN4z2ARQNbv8J45edH",
  "key30": "38V37indk5ovzej8zESajGSjuAb73ZAkr4pC5Gm3Mu95yoQAqEZQbejhBWnjB6eP3fV1f9XM4w8PcAAXbn1pdb4e",
  "key31": "4RRnDKHoj1H6aqQj8wFhKEvdhrQb9FyLy9bb8DCzdGxZFccQTV3vRHTFn3Yej6xNXuGPgQWguVVi64y7mdLhRrwM",
  "key32": "5mYaoniN4BzvH8oidU1CKUkefqRtWtforf6TYXGkesAhh856EU2hjsVE3FRNsP5ysUvfZ5E6tmMBFETH3SdwyHur",
  "key33": "4Dmn9HxKEfXWEG8eaAaPjZAAMfDQuWqkFzEsT1DxCbDDw1ACgkUbHEY1ydoWTEJJmWUN1tMKo5JSmxLdLGoTqeeV",
  "key34": "sQ7gPBetFMiabQZcvASC5Rp4KMQHHAQpZ86D4YRmfVadAi8U1yVkSwrJAjZxWM51zqFQuDMqYr3E6RoaSwZnWYo",
  "key35": "33AybTnrcV5E5fLh8xsmCh7t3iUu9T2cVkY97tyHFyYStRN3QCM1JpHKLgfSTNB6LfokTMJuSTJY4BguruFTe45K",
  "key36": "3kSYH6MQqZCTo6PAEiR5sn5q8VuBvhtxFvFEr7dJwmHd6sQf6vddWFCdJ2xYa7JBwEgQYFCDy6z6u4EU32UnSLcr",
  "key37": "4A5ZTAjNZ7MuA6aAp8bi8v32SscdWyoDh2U8X2WvpshGM7B18VCKmMi4zqghkUWsKqBsjwM8tN9BFR6pGPaGea6j",
  "key38": "4ZZkonACcrHL3KJXthY17216JDhmygKR2X1HokcqomqQWu334qh4M1vxurfTxAbRTeU3kJcjNwTBLKcuypWXeVPx",
  "key39": "2uCMVoqwP8mGP5yogqRnn4WHoTy6yJ4GTPC3MjNgbS94AAs8w5vbdu1Pv4RgQ9YBGCb7LBM2bcQPiEF6qgmaGBe9",
  "key40": "55UcR2WJHxBD9sQ5N9SLmqDWgn8YWZ7UnJAB5cqb5mz7ALxPdCiST48kSC55afm8uew7BkPES2va3an6QYw6wwUV",
  "key41": "4wRYAgnh83u8DTDWM7yNrMkArfF5Rj26vpunt3Eevd1uoNWQHgea9UWQyvAAC1HDGHYvSoYfWYXXvBJ8Q2DAGNzu",
  "key42": "45x6Qw2wBvvBbTxEf45tsqX6YVHksiqC6MG8pGkQMxFMHf5XWHqqNCbfG7nwr2pW3qpTtMoXnFa3GBcW4VupNDQc",
  "key43": "szM76HUdXLK7oU2ruuB3eDLg83vpCbdSQ5JeytvG33k9s5D9aBVHLmB4w98SoJtPJE2f9iQrYdcWw5LFUMLzKmn",
  "key44": "3qtvz8cj9PHL8E1vckWoTUVH7cnrWhLWY1PjMRHfPrz67AikqLsRkWaEy8uMfuVgiwTnP3ZoDi7iBe9hvM6kwTHo",
  "key45": "2JyixJVzjH4NdUxbyiNvduXbChR5EWfaDVoogG3srAsEzBGEByH9w14zRBKFk7ucEkD2ttWEDdi71AUFCkEzmtQq",
  "key46": "3j1vZngFrvy6XgbGASntAkkAwvV8JhNZKS5t6JBVGHgFkTuzLR9CjycwKw6LN22vRSFKdbjM5XyDEgrU9NrH5qKe",
  "key47": "5KrYMrsXAYFYU6MGCU1q5esyPqRJUksCBPFH5yUk5gcVjFQKsjZ9is7acpv98eu9crAxHyrRoEQD6UJ9orGDf2g2",
  "key48": "QorGDHA364vmJdvadfeoJQWvM7hy5KJYPYCXrCiqEoGCZvRufY7DwckBUeXnN2Cbc8tXWbagHutJEo2Gj1joygK"
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
