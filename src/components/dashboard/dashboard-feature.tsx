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
    "2z2sDhy4ggtr6HCRpwwrPgfcFb7eMj2adXKwQ3YM2arKG3vLs6Jr2Eo71XXEiZ2K7NSvzhbotXyFmAMTeAyfT69q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4pDSqzjuxh68zfbK5uy8RRxZE5qW8od4UKSakg6nmGUza58DyJ7eyVHsNiQqFL2QEwuHSFR7MN5uyDHbWy3i4w",
  "key1": "4aCMrx5KyDBv35Lam3HAFEVpWm7ty8yVNmdq2fX4xwXYLGS92Gtjr4uQ28GAYWTHiRjhFXmNedVo2FianHkTLafK",
  "key2": "4VGN4txc7v1WzKYZyicfFC7hHBch5M9Re8cTkAkWVsiifZhUzYa23mc2Kx8HRUhe4BZ7ApnTRhZJfYHxnh5ykQg1",
  "key3": "3gUUbYWeyQq6VAipvSEuHREgyocBFMCBnux4g3aZ18FzVhhp3fsaPsaQmfDEhrSWGsCFDdYKrovgrjHtcJoubJsE",
  "key4": "55AJ7zMkVNcmT5MxxTAbD3AZtfKousjxXqEjCrpBayh7AYusqwjzQ9pa3UXU3tT8qng7qJrUD6NGuk56zwoRW1CP",
  "key5": "4qZkoZgQsVdUyNS1M9SdtBRjscMHGt18UHeno5SkzZN57jDvktNJTBzkKN9rvUedFFQDa4Bb57HhLQU9JbuumMZb",
  "key6": "2nzf31i8BH6G5gk2K26RQ8nnX99skCP5wgXbseN5SQ6ePdvXhP2wnirz8vfu9qhijmdooMhbrQ9zJc1cAMQEC3BL",
  "key7": "5uAz5LTT7UsLH6GMBf2tvAAhGnng8JboZ3XXUzyeEpf6ASPKMSHkduXKGveLsdKj5Vc2ebhBLxFLMJsvizp6dJTe",
  "key8": "3g3MiN9Tap8g15wwwmdUXFHsvLLNEiaWyXKpZ1YCqjWrRbsducivivoz9fZEiSqWm4qm3Wfqb4WaMWu7wDWYhJg7",
  "key9": "CJwPtjbgv5q5j6WD7u2D6ZZpJrDADYeozuffQndnwRUeAQuRkoV6smsU35wjaGrLei385aHiraYUCBQarzib1s9",
  "key10": "cAeKjxxbES4YzptL6Me8ErxJQ8Mr2TDLur4Fjw7tW6QgjmD8BC49tzaC4hprgiG7z3HXn2E4ezyZVnsmimsdyTd",
  "key11": "NNtzJF6Aq7sQbzrneoskCu6xVV3hXYoDxxyERKf9fVZTdrdAhNSRxD2auB4b6bcFsv68Z8DAMwDp7Q9XVQ4RPvv",
  "key12": "5zhrz7zeRxJZDDF9CdfGN3H679Y1htmom3z4DxbTAF6DzRry9DiixAzgt81v4AXCtbGshCFK7ADrJntPA8aGwzpY",
  "key13": "2Srx6r9U3VVvcCHw7Qg9KF1aEg4HhNW9odjSeTGQY6q8DJ2zHuA6iVZi3nu8ufbMh5ErXE8pvYsyHvSt2whmi5KB",
  "key14": "3iLRCmb8aU4QZp1s9bBfwbWhgVQp5Yypp8YLTMyb9N3gevbQvcUd3mxadjDb5PvPqUsGVoe916uJeofqN7TepK6p",
  "key15": "44gyyDxQ3CG6TJYoCuyvU7h39m8wjgm7sw4RqWkwzuN8EM8QyNon8dZ2dKRTSvLWTwreAHaamhRaQGbKN6YhD91p",
  "key16": "y333ThEtBrHf7W2VNDG9MY56mvrhytxnxAuTWa3HYhgpZN1qEgsePJ97BNxGCSPmg4vP3hE93sxQoCjbzQjHCeT",
  "key17": "3f73BsdLepQQ3pupeitDZvgQZib2UnfdRQnrVVH7GmLg1uBA6Hg1ZDQtH1xLwwJ6J4uX71yHAHrpzHKC7sbKyhAi",
  "key18": "45eaCbwzcxG9ESxLq31wpafw4FPX5zyAysFQJ5ufuK65k4n7W3G2jdxQS8Nu7vnHucFb2j4NiBW6vdJicEtT4hLL",
  "key19": "4prS5JnCp7qVyAM2bK7a1PFsvv1cz34BfaXUWdkyzsSEfT5xZf643Bq1XXph7PBijqoehreXwa3vBM5eno8sKo7d",
  "key20": "5GhK1kZ5Y7e4sWSPuHYh33oNmAQjbhjS3Din8AKC567g2WRTLLnYqosVFH9msEoza1JbTVBgEyVn9ohL9P94yECe",
  "key21": "3tBWzj9BSbg4dJAhokTYWcqkge7SbPpx7yKd7LJdukogPLK6U44RUPd88kC8QFiEXHqLosoMz31msJqY42kzkedX",
  "key22": "4T5hHKAfhTVgVCC95oKH8DCjnsPu9MGxhQCcr5MhEHhXsSri32ZbRd68dXyy5H3pJQjHAiSiEd4vMNn7Zn4AWQyG",
  "key23": "2oh5amz9256LquK83F9QN1PycxFsttHfp5dHNZDvV9rpcMB3bgBgpxAmYryUnt5qUKPAPgK1Wr5oiaGa7egapJGp",
  "key24": "2DPHmeFeHXfkh8pKnEpH2pzn7Bnut5UD2jdLy73Lk8TaBENvTpN9jyWySL7kxNyZz5pzdRgbaQGV6Jpio6B6UcDj",
  "key25": "5XicQb8bR4JjUujhLgmqXuinZJr7aCerbtzDP1H4wysWpB8iKHQ5XAzi8rY3MvRyM8uzCQHJyYuWMWzn7g4bxXDi",
  "key26": "2YhhSBz5DExeZbAWuA3RtQoP3XefaajXpRxovrs8tWh7yFsoyA6by6nLv5czss56BgPbixy51X6iiRwqSbR8mvHh",
  "key27": "ARPGDeETNPqG47X5ueY5W2nub3o89Sn3oaK8CidPssXSHciKkEx2Fy9NUxR4fuiYQSzjHfiqXXEuYaTgcQAsJvp",
  "key28": "4johLDqjSZCKTtRi6iBp7Uqfbvq8N8mweZkKjGQgi2Qz3TQmCafTCVsg922EB7jtvNEoNpfwEtkaQVxxFfDzFvEB",
  "key29": "5N4RG6nk2A1XaoUHgcdfghdceffCpi3G2gknF6SqbzQSYZerFAS64GP6RzEduoXY3zeimr9CgJG8JLfEqsopo2xJ",
  "key30": "55pe7iVzvN26ckPVepN6ZuwhKWzpB1xEhnJNkQmdUy17kbdjhKSXioBXLu9GyeKThTUfq56oeHShkCyGEvHdWKmG",
  "key31": "67VmiJBonD7s4Bfukz9JRAycLpUCWbV7ydJVki6CK4K5mER7kPmnbLMhPuDNtfretzTxtgnzisCQ7RYMpgu74Hg8",
  "key32": "2GdZxiamRSTfxaCoejrFpDM7Vyh7xeEjnwHVSvjJxyFyLAtY4Y8eyTmseDR3bYcej3Bz3AvHfVX267NyhkHWLzLu",
  "key33": "2iSPcFzx7JYpXK5dbXNgZTpCy3iPq2VpZgRVw7jVKa5cuxjE1iPJP3pExJgDNFm8mNr5MxE6rqPoeksQ9UQgacqG",
  "key34": "63AZkdXQFAK3HUqog7FuCUjpqfrenaQiT6Ud5Me4XgBbzNTpkyDvqdMRqtkeQ9WSGo9N5ThQw1WQZF2n7CeqJxSk",
  "key35": "P7PhGqvLnBEr7YVCSpFT4qaJVjPuUXhXdue1MZDYtQKDPH2hDrFcdMgwGqR8D8PpZvy5iqfSmkuaPTkVwCdwreo",
  "key36": "4z1UhmEHPNXZsBJ1hQZ2f5KLnvpt7UqmocDYQtNQPy268jfgpmF7CQJNssHVHSERSD4YDv7KWPDsGnXSmenk5dEM",
  "key37": "5fca4pxEpMFWkrSND7cJthds6vXiB11E8zUnhBLVwVh7WzmTvocNg6uhSxwUC8omsum4VA14xiJhV5AixeDAhD6v",
  "key38": "5RE3do43czE8jXvok8rWMRoEyfhfvXFvCx7K2ujUw8f8bdZag9nmTzYJj4Tv2QY1rst2X1RNjuLUtUEeu6mS9yTC",
  "key39": "SPpe67BWz58HJ9pjcHbFzFbXq9psn2tKnQVc3McQyuJhr85i9XTNyyjvFRTsg1j5DscLxSMXGHD4VtN3iJgr2pV",
  "key40": "2dqGxgUod8oAkSHxmuRvjxmpeXRqEMbL8Qru3wVZ99dWdPmCYXj9rfk8UyN8HFHGBsbwn36NJU8FzmLEsHj3DQTv",
  "key41": "4YGo71wfmLy2hMvR3A1WjJZDqqGAC6bwga5fg2RFTWV9KmPrn6wzLoVLjyYmzxoEPcZhKWnx1mUB64B323rctXNa",
  "key42": "4LuhgE59D3EpKEKXXvDtr6tzmeK77tsMAzX4KHU7F9et4iZhQFu2r6fNSZj56GTYBoA9quUpMQzGaBy93D4UEZgd"
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
