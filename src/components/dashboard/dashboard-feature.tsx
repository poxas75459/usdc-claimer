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
    "55hNCvfgDtYCZbP1UDPMcAjD71MC9Vekp12d2bTGFW1q5iPp4xBcSqnQni3cMjzeqfEqLo6wKvZDDJugGJnF6Jkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxEJLHLWqoZRGkyVarMdNYPocbsyBkk5mdqxWdhYsq87xXrrGnVa33isuC9SwVduW89o86yybM6drLZ21raPBfD",
  "key1": "4tg16q6ZeyxxHs77aiemybStiMYCcCeFCEwLCH764tzu8PGJMQcymiFaCTEpNtvTsnqPz53ACTy5kk1zwPaeUtU5",
  "key2": "5NEKwRxvtSezLweQcPcBsGxZXEyK5EPTFdYJFeQVaTj5mLTZNiZDNR8tbUTvHYBArfAvuc5HoVybU5ZXm17BT6tW",
  "key3": "2jkpZwCtwudjKAeLrcMb9yqVJbQphxjTKH62x275a2tK9iNH9qbUHGbSc3RMoVWWMC1rrseMKbBrYVzP9hTg9cT1",
  "key4": "VPV2BMEDC1Mt53q6Swf38CVSxQZQDdLDYfu3U2PtfDdRLYGSmuCHkYx5vAGdomJWPrQyMyec8Pd1RBCATg9o14a",
  "key5": "4rEBGzcJeDBAbUP2pwsEgZwfMfts16uWbQ72AShzAYwor93JeTw2jnbx9kH1VqWDm1EW79LzMgX6YfXFg6PgzUaT",
  "key6": "2nC5Vex3ofMsmE28Mw41iseVrAV3uDQQghp1sjesxbKupMUYB7j3YxJEFPwSUbwvUL6BMXuFb3dBZg2XWvZ2manf",
  "key7": "uoRFyp7SDWqYcfUjqmMQ5X4Cp9PyiayL1LWiPADvCGYGKqf66tfJAQXdFATaeWUJCY1GUCm9nXcmFJgJPporBxv",
  "key8": "5qFujmE5W9tRfWUQszpkjLXzwFD5Dfne9GZPz1iwB5mg2Dp7giJ3g9VTcNZpXNSEdyCMqNKoygEfRRDhoUcXtTkf",
  "key9": "31p9kWg46UZAPLkJofCRS9tJVWm999YAm8J88FvrRCvhNkYRB3AcsQ5H5dbh2hHQzidKpZbhSFPxQfoFJN5wF42m",
  "key10": "62ZdWPFgDkB8DTxA1ETTUQFBe9xvG3EUpS9SvmWrf4LBVmNjsKXvBdSSMCzaMJq4XUquEXCmFCYdUjVHrTRbmfdN",
  "key11": "gb28AWsKfYbnHUBCKCyS72SAju3Tyf5GTsTFUqeppozpSX1dqpgxmjJKRRb9ocQxdB8qTBdoKfWQvrEZ9jUpLtg",
  "key12": "4GvZZjZZWyEMQnQzE6EnJDz9aJ17MgUbZVZgaPKcxiUsbRVGmRreQmQdDkEJM3PHf1TzqKxUSu424gK37QPdezrS",
  "key13": "52Nrfocs67VoK2mBFSULSXV6yEBr9hX6frmCuwHzSD9oSCqGAcj1WkY6VDokRqMLYgdYXMDUEua38WwuzYRgxtXw",
  "key14": "VTe1uQinBngueSTZpbW2jSXyJvrEbEhPjqQA8VF81KCUKHRSGKbhJ4D2kQbffS5QACdRcGeU4EyJAkSXUVSgeoN",
  "key15": "xSuvkEghByhe6c8JJxksg93NpDG1pHz2xcFpF2uuoLbqsDDtoaU9C6JVPBgSTYxNA7q3UCdyystermVpYpQt5cQ",
  "key16": "5xXDR1RW1FyzbUt6Sh1z3ug1MqJvjjJ8JkUTZt1KAwtmmVKkE8EA5ZWKdLvN1RYsy4cSXcepLFiGt4CzCcMTyb1h",
  "key17": "5XxFv5YYfN5Zi8c7XY6pNnN8nZfsJGw7YW1ogLyoznFJikmcg117ndjmGSkT8JSeCjSVo8zfdsooxx7MA2EmGmYd",
  "key18": "WMAHP68fDFtR2asmT3LZRbis213Z3wEkdEtEqePjHnd3yfUVKq4mEJCo6EdZMMkeebb9w35LvfbKXTUJiFTMVbw",
  "key19": "5v3CtEoqDoksybnvbYAMLe3C3DL1ctjTP6oFDb1ySJM6nj1btbQnqjEMXqisTVeuU39cKSvGXCfPnqiLRCTNUb2Z",
  "key20": "327x8xEhUQrTr4keG3mqLVUXYEkuQLfAMK3ZJ976ptLCtKtfLPbQAY3Y7VNZuW8fGf5px5Tsno2oSX5TQJEWCRnA",
  "key21": "3JxfPsyvQ4SVppHsWNfdxR4rK5Z44azyJPyjipGxALndEr7GcCo1twcCAKiN8M5ufM2YddWieKNMzYfhxzJtNLNQ",
  "key22": "SKSRSgjdXRJJrmfv9NcwLXPwMUevVwBJQVkez5Xy4saMoun2WnyXAbJKJFcYcSozDxNKv3J76jL3RKb49W3gF7D",
  "key23": "2ttmXDp7WKfTgxXNKMEfE1vuHNfdPhwWmfErUdDHiCCfVUo4TA5ei3xPPF48hHNPUqkwRbvy727JvG4usZi7rfua",
  "key24": "4NVuybKvpqLEyLpuwbS1qneoH9VnKuqe3g5qcSh5XZtNtDAk1yxDbiy2vaun5yaNGooTETU9ycAb5jFBdzGfnmW9",
  "key25": "2wbK1pkfdZbf9k1SqX6fsQD35PwuZvRKzxV8dkVJzXWsA8A7YymYeSw55RwDW9kMWpSZtsXYo5uVfaGVkywH1Naa",
  "key26": "2n2W2tDfQmaRyTVvrNn1gT24zRe9PQucM3XGZSNfB3AasTHrptWh61raSPPVxZaoYrsLM6fdos4rLjooLNjCcGc3",
  "key27": "4dUswX3FxAsmF7ciR78Yqnqiw2y24bZZBeVNo2WXVt53HUzUMhnsSrqVd59ssFfTdV2qnhtpH6w9udrmjnshwW2T",
  "key28": "5SdqxPU2dRgbNcWqoN8Shw9pttVjuy5Bkds1q89MgxHfaXSuu2x95oApkccjypVSjaKbk58aEenMWJ1rk4mJZn8U",
  "key29": "2WxbL2Ke4NFLwKqdisiGLXp5E7WcCqUDogNFD1vVQEZJTbbiALiDNoA7B3X4m4BZoNaiEXTN5BMTXdADqWBuxkGd",
  "key30": "2DWvGgy6MteTgMXxhgvEW2gM233rRVXHJUjbxcZ3KiksAAg6zc9Auw7vuTUEX94u7TLawmwJbL8axHvbgNSjnR3r",
  "key31": "4hbqv8ij1RMGeJeCminTHKy8bqUyjN5KBhSL44QhV6Z5diEeTPiNZ5koCkpGh1PpJGA194GCxRW3Wa56QTSVNnKu",
  "key32": "1myeaJF13TUXmYohKS8FaVSMLksasLqfHA2j5iLjuLHToPKoNXctMjDMLXsS9ZvTmEV8MgznBQUm5B67CTfUuiu",
  "key33": "3GkRF8BDbDy2x1JqyHRLExJvBhNxm9q4CoE4tGDw3niQSz3T1Qrx5MzRvtFrQfdMkfTCsH49y6Kh7XSGgidasFje",
  "key34": "246sggQU2hCqPoL3QWtnEkzLPX2FKKAZQmFaoMjXjgcY4zyMikCStvQx8R8aDQgGkVEGTR2tq9kCLkPvA1Tvaw8D",
  "key35": "8Ma5XMen8GuLNGvqaagJBEYkzANPx22JcqYgxXoC1u3TVKMrHTWjBsNjw7azsVkJrkaSdCPBJi7YYhqFsCgxRLA",
  "key36": "bU3gCtqMc4ZMdEifGeh7zzjqaJey2EnQYJNiyMkkWAX8PVqfrnrTqkLFdFeVnqALWmtwhKSj74RFQyq6n2WTzVi",
  "key37": "2FDF3NeUizQaWXWi56hMcEccoymoCxFVyBFvmsLUsn4844rANGqufY2Vhj8MoC4c9n8BdvmFLxuTtZZEzbJ2Z1Pa",
  "key38": "k6A8xmRuMgZef8Xxb1tvYDHiMnf95TPo7fkNQUme5MmSSMuz1FjM45LtHpEJi8WxYeeJonHCRqEyAJHF1EoRtH9"
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
