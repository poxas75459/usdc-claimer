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
    "3kG22BpZbFZ1P1HhrsNiaMbsnankvaPYk3kpaWwqjxh2QKaHARTv3JXNNg2uDvPXSLGHe2t5PiPEm2BiyBF1gciR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igjTu8Dcdmf1AwLUQetr7WSdwB1hpBXbLAC3JoPniJvCPzgvDuNYB9j7QN4xH3Tizo2d8ikVJAveZTwEsiCDh4E",
  "key1": "zLXpRFL94aRzpndVkinCierZoYAkBugi4N2NZ8De5ob18aESyum4UGETTTVxbQYKCMX9mwckQYS91xctJsNcLMR",
  "key2": "FHqczbe73XEtyNeN46oDLEEsykHbWox9MKPTEPtuskfKKMZb31BT8tzyTEqiGRyrh5XYLFt4FR7vsLTr7oXZdGZ",
  "key3": "57QHChFw4nMritmZGFpj1owq77Sv2SFnejdnFSUpnzxcbPmAy3QMwxhtcaV3zQTcbXXcwAHg98o89kmqQPU5ZqLS",
  "key4": "2SGUcqRipaDPyM4SrbbZcX6q5U3qERCvdwXnP8JvDn2EusWhDh6zRNnE3LyY12i2Gk1Jse67fFjMtbFmTDEjDv6S",
  "key5": "5pzJWHvaoFw7v1kiXwJfhxaAYWDBKNFUT6pZW7YuxPiZAx6RdSffYibScxDrHNu2onq8KgvfJwimHkdn5ED2nvuQ",
  "key6": "2kCup3TFFGXH2Xi2Yo2KqHeef1EjzwPXg34NzE8RmFYHQBvHkw6KWq2hRYqSd39bJrtB3Uqidsq5ydYWcmBP7xn7",
  "key7": "XxB9WAywGpGaKT8toFjjhrktq48QtXCsfBJxoKJ3M1wDTGR38g3BLcZDg6s49apNnBpEmSMh6vpiUJismSiznjs",
  "key8": "2Zakv2affZJ9SCep5bkGx14jTqqK9QPLc4rxmQzk92H7EQ3MHN2VCScGJDxFZVutMn1ysbyTrUEwwNNzzHCnBiW1",
  "key9": "5pFi28919JD2nAJkxhB5HrmVxTEq4Zdatb984BcLUv7SGaHmyuiBv9FmCHGBVENmdCb7WWHvzG5t9MiCAy2yaL2h",
  "key10": "4X9ztFYLreTveTXzMJb57JP54tHt6USDH3ajpwn79AS4wb2MwBkt8p8rekQXS7JMqx3wmvaVTHF63Z9AnfZwvB2q",
  "key11": "5YwhPb9ZF8kRMBTs9uQawrUg92psK4j8vcisCDGQo6dJjfM9ePjk4LRiLF3WQMhxyZA3P2rMRJoKCNZaHVN1bcDT",
  "key12": "5znFHxj3b7QMWwoeFesfzQbSToK52UjjVe8AybjA1udNiQeNqvsqw1dRNmn2QWCgZxWdofe9mjaeJ3CCpFjTMivh",
  "key13": "ithugHyNj3d6cRHmAXDBLuBfd9A5UUkkHQN6Swcb2VdsUb1MpaQ8zWwNGHgt4DvCV5fmddLviSV8MJdLihVj5Ho",
  "key14": "5c7t1ubopp9eW9yQB42LzE1kv4Gn13je9Fnf97i7aTk4c3sQBkCmTNmiNN8YAEknCQJMgwtHFibXCdVVRsQFoskP",
  "key15": "NZf7coR6hyNZcprijiBGRWnH6wVPYQ8cCSspCeuzBxUZzjDSQqQwDp4QmnS2mm4eiy7Px6gGM25NbWL4hsGd6Ms",
  "key16": "5ZPjWUP93ivYfG9ptr8sa4iH6xysLhrY1yYpMJE2JyuHGRgcLDTXoFBqj9rGqhxe2297ubzU4JS2U8sPNdh9iaGB",
  "key17": "XYsNUREoCrHuAD3zBuBPE3SuKqmWb4zs5YG1XREBvfdqsmypsaVHE7Q8MGeMsMCqhbkkiu8ZCjoG2TgDcW1FQQj",
  "key18": "2AWTcWXQAa4eY3BM3HfcKFm4LVhLejA3C1fhSAJPmA6ej8pR22mNRcK8btCwFEfW9yQJaDzgU6shd4XesQEB5Ff9",
  "key19": "2vfFE4yEqiD9xSWHDfeu6RxGsYUKxxV2JSh5Z54YpEDmepsN2yFn6wpoLGGQR1s1CSaeicJSAXQvYDYSYRjSZDwz",
  "key20": "2iZyBJBnru5djnkDdu435HSTNC3baczeZV1gVepHUU6RDBkYhzywRteTQsvRFvqDxWPEjTs2e4yswNywP1YCJidQ",
  "key21": "K9BrX4XbiPXm7XaAtydkAWgjwp5TNRrwPmtDGQ5g5rpeSMQ16EwW6ahDx6eqHjDzJeAXerbuZ7LSB9kzA5pnWxc",
  "key22": "4MhAUK4Fxo2WS2ujF46HcyJNrVFE1uPpq7KxChYG4B4z9y5dpKcNAP8cHBFHphkjYu326zFe7gbdyJzSd2ymHHdR",
  "key23": "66r67aCWZXRkvwGMcNJJRwmpZauBEekCdGfPSUBTiVYrCbMGjs1Kaayo9x7aYtvvP6XqmFsWVYRiy19fhK6xnoJG",
  "key24": "4roTRjfg7oqmutZsPgZr4bVsU2rpP52nm3uqCEagE3AUksiq7241J9hgMcvL8TvoRRqZGcm1BxzCZGLDfBfStunv",
  "key25": "3ww7yXwhJYJQGfkxViQ3NpCnDsYcYZ4XPoHvYhYTtXQkJagbn9Xv4QoukJqgqTDNdU6kqHtw7Z81o1Yu7sDXFh7A",
  "key26": "4YmUejKS63F5LuZQbcqWGuS7JM1wAa9MmGgJBRXeo3xVmz5DrxSzQBn4Fc75ntyWvkEhMfeV1r1puzwpjzFavhkb",
  "key27": "2PXUsWPNVmSdttzyZejHKvknzGpBgaWTvvJ9na5UeufgAUk2RNvFTUa5W9Ftkx9dbhKxeRvEn63vsFV1yPELn6Ls",
  "key28": "5JKnAvbYrU2Jvi1nHV6h9zBhdCs4BR6LMxfLQ1TXm8qZBvekLZxfR6irP6QBsKk342gCb3554UkxhkouvAVryZiH",
  "key29": "5Zxo5bxnBVmQNVjKMTVV1TEsaLhgKwCgMLPDzgD9wNw3txapaTQthkncEZZs73ZyoRjGo4mgJ5fvGqQqwu6tb5vX",
  "key30": "mpbcivz6Dk99M3uNkbFXSCrhKZKLeYeBCbJuDQiczkgXQpFG7NPi1QPb6vyV6SpdvBSw7JrUbcchzxJsAynWRBz",
  "key31": "5F4VnUSGxtFuGZEfJ7bFKP9VsM116P32wVb6LhPd55LDGB45b5155GNfgB26Tz4oavB7FrZZbabrDjqjjnx6u4to",
  "key32": "3HHkf37mpdFSzMYSfMfu3ESbZJ1sAyahTBtLWcFkU23ZzyvNY1eXYUVckUwiyXRwnPqHVt9P23Rt4nKiuWVUfYhH",
  "key33": "5P2Jq1JXFK6J3B1dEQtoBdF5N1RCoqhEmiFds9hHmp8dvPUWcqZvfezXMoyUJ6sWjykn3FwMhBnf3W19Ynaz1obc",
  "key34": "2xJKmYShCX25rmf5nNWtZLndPAPHzmem2tSNfVPdAbyEMbgHafRBZwm6bFXTYxXCJoMcZJj3o61uDaGcgSvwzaGj",
  "key35": "5RvUCe6pr8oDGSZACfn7fruZLuHVbDRN6ra7Xv7TownTYXWqksGF6aj7XJELCc33D5nmuF43Cu6qJuNEWnAGDdz9",
  "key36": "355Zp1pqD1da7g2rYw2N3VEqW6Fqow6CHrV2gNy7BHuwJqtPuENwCfXMhZ7hi935jr74ZMAK73kKbQ7vAzMi5kg2",
  "key37": "66iRQv5w9v2QsdUCAEZktS4TuRp7k9XJJB8Cb7qb8wbmwoPGE1rjwsVPAqor12c8SCGhzJHUFvnnGTTYy61ndwHU",
  "key38": "2NWqEYo3He1WB1g7q5Vr3xmC8SKNWNnFMMEMyoLeQDsoMNkMB4sadL6HuAekfRCMwykgjDZdWzxmGvQYN187tSzn",
  "key39": "2PeB2yx3G5r4KTomgYYUScged7Mu54vXzGwXhHqNdtzRwc9eUbActymSxffrhc5WX1WgySd9sbaNwenVXuT8ekx2",
  "key40": "3qNTNpCiVTAXWGk5YVq1rE6VvfB1t34Ga5XW6qstD3ci5zJHRdkN3xinnwRRo2MFiQPJdoYErbjVJSNRyczPve1Q"
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
