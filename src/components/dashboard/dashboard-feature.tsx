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
    "23BgJbdgd9nRK479SJGknTMDMfevtmtUSt5NeMEQ4YnmEBkkKThNdG9bkBTh3QJZxHr68TkXCuJDGPBfF64jbcee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNzWn15b2jw1y4iZcdnv1FkVVi5JMWzCUZKHgAgH1qQBwDBugGncobd3xY1mx3rTKxCiHSCg6ZmZAYPFP3h9paC",
  "key1": "SHUQK3BrDHfUGuozRaTz4iofTEmJfHYX7yibgfXVkcrV5tTBYT4fgUpLd1C59JG4erkDrNG2iZaHz3euPNdak7F",
  "key2": "cWEQFPLrobFdiBP8WEoG3gU8qJnefKEm1u9iTVEgCFmGymfPYotgHasWUUKbAbVw4fxNPkw82npCNQ1WKV64YyB",
  "key3": "62vaHLzZNJdBDoWjrR9hUbkypo9Uz3aFKw4vthjUVCgyEejWYnCS3oBoTSVhw4LBM2XfnYcnTdYbuDBu3u25ysBy",
  "key4": "2hZPst29xZNjjKcj5Z1eznkwqdwL4z2DiuFdbQYuEatyawCn7rosEeuxzBM731GgrZSU1PhpJHPnYd7gXojuJNf8",
  "key5": "2sQGzah5U7m2xFVo83VMYJZHAWG2mm294UyjxRGDEcGy1aDmqZzooQEkYcSdLuiXGVxg73AXefLuvokpLMEzoGoT",
  "key6": "UXkXYsCc2nDhgu3yFpaCDdqePUghGkhxZTuD984ogVCuBGGKTNNTRU34zUHpF82uiDQz78n7n3P1A5vVLeGnRgN",
  "key7": "3uuxCgu7XKhiyt9bw7QhhHM5mPCfKrohk15H1RWZ3T17KSJft2ARKE5bxrbCw1Cc31xE8H9TkqtFV74pMZwFrqUW",
  "key8": "5Mbok6yDHZvWZ9ysdyvTsgcVcTFXKjLgrSvxBgXeR3PF4mSvatxPUgqwU9LHJagK3Zr9NU2dazhhAs9bohwD7if1",
  "key9": "4LV11dXee9ZmYwj3CGqjxKhA3nsuoWMTLYeP3UFRjKejDoxYZWMmZHy4FrP72m73yLSxK4nw8jy6rZbNfiQ4bhDU",
  "key10": "3HU97QBaoRTpbFyinr9VbeCPaWwXmA1JqqhDK6cBYRvEte2jtUdgXwD84uPNHUEb6vpfBXe5hHKpSbJZVtK7drpZ",
  "key11": "3KdFCZfr4KRcks5HfPcA1q2y3iwXb4NT8kB4GeuRvRqUruD5gtSfp4UZwBEZNi2MU7DYXucCXEUzSxbSz2oSqTkJ",
  "key12": "W2SLZX7xKbv59zokjoiEe7rj6vgqmxRHFdjGrHnuXSQuPNNMDrPSf2Um84Q1dnKh5WyZuMjTSWjpX5XndwJng3e",
  "key13": "2Jk9fBa4biMSesvgGt8kUQz4qKgaKEytneBAMMqcJTnvHEM7bJxFMh3Cr3rCKEPG4gAFzAP7WzNfTKT4Y528YFRB",
  "key14": "Ay8HDpDCn7oP4Sjr73vjLKJzVF8NrzaDS9PQE5kFdEd8ciH9gVcNm8g8qpHbSNFNQSdu8rFaX6bfc79HVtNLyJH",
  "key15": "2HQ5hCiKtzchJWn9TpzeFEYwLMeAJR6pdYy7eRPrHijMvFBMhZovqfGFzCiGe9QuZhqC6BLkep8YNP58wVcQERT8",
  "key16": "5NWxYMtAYrT9GYmXpvaPyo5kMRbLoQDPT7aUNwSkRPiNynxKRXMaU9BcaDivva1BJ2UmwzrKfSswWnH7mL5hYraQ",
  "key17": "pd4WPbq8ENCbmsX8yu7QJKkgm3Z9oHGxZmtbmYPWEcaerke25BXc8taNYM6mmgHW6wNRUY7af5RHsUryjHqJXh8",
  "key18": "2Uh9Swfv6ntbu5awaH69BrFokcU33E5BqANTivydXbF9TniP4UWGbNs7kHj9HJBM4YN9dvffYXYwgJtQuK1eszCW",
  "key19": "3QJKDiwm762WXHVJbF2KYSAB91DWY95N3fp4nZeLGgSzQ6DZbrm2mtZRELVsvNpjmJUgqVabKVN9EbAht5tWjWhE",
  "key20": "5JRmwuaEsdhjLELRq7ixeuN1N8r55jHXH9R3Ng8xJ1yzSmSTstPEvgTRgcfwgGQEYnAsB7qX8foDTGWhKSZL9yTW",
  "key21": "W3i5VCAjBqQNsyNrB69xy446upfuUs3JSe3ubLMGHLEaX4EPzQjFWqRuzhJGu132yETppQKmrgjwxHcG3yo8ajP",
  "key22": "5NstRsUFXKuj33Fws4M8obzvoRYCsyG5TzXeHcFxgWB7HjnSxrYntaxWkma6Lrijd57aEXNmZc88TyJdiZoqCD3",
  "key23": "4tm6tuppjFfMbrHePtXXrAk5CRyz8M7cpNP9CAbZ184abqdgmmFaysnFgeC3Cq3rMiW1XsXquxK4WTrnVrjkDJq",
  "key24": "5SxsaGFPDecaUr7PKKMDbVsGvSMk1KJZEPqjcA45Uosz7Sq4ijEJQm7RbCJoMRV63vCYmt7U286X8y5d3PNd7F3E",
  "key25": "DjRRgNtXytp1x2WM5gJZuMhowj5uCrfHGSgBqQ9bvMVPnRp752sYJrxzMtPApofbTjv6QJBDe4sfabDs8dP7Cip",
  "key26": "4SzgEKVuZqAymfrExaE1Dz2d5F7vBqw5xLdPa9f4iQa9HzG2Lre3SMGDaBL22E7WBbtdcyGuR65Uh5VWVyQYWddW",
  "key27": "wgaCbMqDrbHAw9yxQGoyMHotVpZdQYaT9WX1dFygA5Hsp95YErFLkFgtJtJ8Dy9tGP4ekCbnbWaBmefvySe24Cj",
  "key28": "4VzJM7EGu4iPgdBUMceZePAviTF234BpGLCyUB7ngCpyi9g63qphXdjqx6PBDjwVvwkqX2dQKfqNFZfY8WCPd848"
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
