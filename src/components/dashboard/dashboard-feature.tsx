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
    "3iNmpNqCRx5nT66SnEFziXkr9Pzv6bWD2odxTMfngFce4ohyrG1hKBtGr2LbDBzHLZghpqKPFFcBWzLziNuzfzYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DTpVtkAivxghMdhUbcaX8Td8ZcyWLYfur4xfKe6q15NLGsYRuVgqgfTjENNTd9df9rUE8Y1YbVxt9mWi8L5oCV",
  "key1": "3VwuAmJqsf9HwVzXZM34MaJH5Wy3AsEwnX71W737zTmw1aSFLJdnYFh5y5QnP1gt3gNSsZvgd2oyxnDGMRf43GNs",
  "key2": "7u5GPoq1Yzx4oMDGkmYjqMnaZkAM2RhQVJwTg9zD2Ctu24W165PvSTQQhykGzG9iRTEVWEVsuxK4Crkbrr8iMf9",
  "key3": "3jogZXX9wJGuRJzhqZjxiBMxAAHdiQGnwr63mguof6A6mdG5pSzEq1aiAnVY8HQiFk5a1xpswSbMGi99rdgS5ZLP",
  "key4": "4eBjAu3hR5N6oEPfW6nFFDxXUmTQ6qDQJzG4dDR5zShNMqytTideUqzuPTiuRLk2oi4GyAxuYgBA1v1EXMMB9H8R",
  "key5": "2hgVvZy3J4SCnLLnyAkHTpcgD6W9RA4xAu648Gi51sxXHikoLeQoCmciwbwqxF8WnBDrXCweXpQyKxcvkogHwdLR",
  "key6": "5YkWo52Fh6jvtsuELx7XuKDvszvWXFHRp6XqVKEdbKRnFivppkrUuEZfgCHNFedTwgoC1YH146m4srJgeVbSWkp3",
  "key7": "3eYZoRzwQ66iE5gJR6yLwhWPMvqsxCHUpbH9mS2GEmDk6MYNUA9HFq6Q3UPQ5FTGW2qg4QHhPmXi3rGqtqhv1Zgd",
  "key8": "1nBAN2QoUFea4EbzzENZmNddSuKsTXNNvDgu7RwxSukcJLQk3aKTs4kSpityrx7ebnLrDtTkJcPs5Jmprptns34",
  "key9": "NTq967kPqYEQ9SCYRqf9uJM9vxmzerMMEw6Tvn5ezz6jwyMEK4y3vgvxSMubdHdRQdjZ6JNtpAjehJcmiLZjmYD",
  "key10": "tb1z63ctV4xXZwgiKUyJHVdXEtbnASim1h1avFujDUPTQV1LMcbqutxT5p1VogMtt4EvRuzubhjXcxLTfVSCQFa",
  "key11": "28GuQJXrUbt7DYWosoq4ubn1a3YUjMisZKwvcBuUSkXmyTcFHVvSTFYTWiS9SR58GdVgheSe2fGMgyEeeTKrE5u2",
  "key12": "FMtPfdajZMyc2U9jrjrTyAY4FnWHGtpDx8CFrYiBWmvywmVkED26LjPWBy5daKgLu8qAPmYvweZrDVZkekrUX9U",
  "key13": "2SYqeBHeiq42cVrL6u5rr625FQtsQsgZLkARUEWGfBPzugEXL7tkKGDVotXjm1CxKEZf599ex6w7JmMPAMze6Jx7",
  "key14": "63heH8o6bb6TBAjKn4dyuKgSAs3BwZNisPq4XoPfkTPtknqEvbDgNtSmUyqFNu9GrnUHF7ZUmNwua9fAeeriGDWp",
  "key15": "3i7m3nEP5wbhYNW1jgkSi6T8Qp621PN5mpRZNKpJKYpt9y15WCBVgJHKnDqnfittAZqUWHgaEpNxozCSsKzyYRmV",
  "key16": "5H5y7U2wB5HKY7H8QPMBFH6GVChEnA6LHQgWEPamEU8z151QuobYq5YMxt861LJ4WWSsnqs5kmQseVmmZ5qsVnWD",
  "key17": "5pa8ttChgKYJ913KnEcnGVEykJoidVPhbqUrTsqXLWgmQL6pKuseAa6zmC8Q95NRVuRnC88n9em47j8e4DBg4TEw",
  "key18": "c1ociYwqpkM3V6owmipwNiFqnFAZQCE2r4E8n19bskPYAY99D1rnDEpa6wDjRvbCxU317qfy3HobdoF4jHE8xfY",
  "key19": "22mg85UnCKpjxhBcJgZnfpaBHbxwgUsw1bLXx4MFB1ZGgg9TjCAUvth5v7rLL3PrqrXaXb7gWLHo6FUjkoF4JiWm",
  "key20": "5EikpsZrYwL9WbLJotD8LQaiwekvTJvM8e81LV8Mph8xDVkCPPjae8doeR1mjQuFsFeyVJ9dZ7QEzbLWw46aDRzj",
  "key21": "4aFiLK7NBv3X7N9TCm6RvDzERtz8mQE6JQxcSxXzPbNffKQJL8h2cWygSFLxTWtko9AUVafoEtmhCSuGjSCCfSta",
  "key22": "5cdS2hAQdHowXxndyP1DUnUu6d32qCLjuLzPWAb89vgkfqyHQwXepyjGriHKkcCZzMBTRAUR1W722tRA9JHSAaay",
  "key23": "5YCBp92hth4ghDeqVsUYEoh1LxavHHNi8rfMK7QH4uYit2afjBbe23UD1AQVREhuPsK12UXqDxzVhqWDZx4kfnUs",
  "key24": "cGuTns2nLcSiqmEcA5xgotv1WepuvF8YnXYDF9jDyiNvxtMjGDqnVt2xjaSGZNJr7Cyc19u8z5TeFd8d4Pg6qTz",
  "key25": "2XepA1EnnfR8BN4v7QK4S1KHcWmXM2PBAywPKZBYQkDdBrWjb8iTuje6fZf1oPRtjtzny8GW6UfrPbpM9tPRhfvB",
  "key26": "4AXSovyFPFGNxbFfgX42hQajT3aq6rX9XeEqYwbUL1LBAGQ15SfTK16R93FHC5jeVsfGfQUuVWhKw58cU7W7uz1b",
  "key27": "3Wm2Dp5o1KKrRPsizy8hWywqvDKSdWH8FA8DdhEbFgewBGf6t9haP39U3TG89nCeU7mSpVdeBJydbGWonUdAmkh9",
  "key28": "2qPPfE7BDF2j7tcKZLVPYZJcRZRjsxGWYLR8tFRLHVNTezgVVamGxqpmCDHParmFfCaaU9Y8iRxBYjV3pJNcFm3v",
  "key29": "57PagDowMjcZfWZ2beMPcNFY1CBZPRdWWsXNLJKCs4FgSCEyeoKZjZ5y4tAJunXqsienJmkvfoAX2ohUc3RjJj7r",
  "key30": "5cvDkcUn9FAFr4pyHmEB1YU2X7Vhw8NYKzuzs7PP491gAUqFztuQ1jRF3GuG1FJF26fKcKdVKRFWp1DXBoM5HBjx",
  "key31": "4S52XhXatnLaEfFboTJx97VAD3xLX9jSH5vMJ4HwqPFSPFG5Mah9JaPbXnF1Wfhd4zZjP3vZMXiHFJFCjJtxirZD",
  "key32": "KPEQWhzsHeErQxMxRFEohcukZ2oJeWb5sDSzoaWiXtSPvujEnmwKUp2bsM9iDw7QJSqxTMrqf89nRmE5MtpkLuE",
  "key33": "5g7eeaMyP54KyVuXPwDdcbDaxaunormnyCMgFrR2ScwdrUHcgj4wL8qyAg9U3D7JK5BEcfo8uLgNGXsTVCUFP1xU",
  "key34": "yRs7PLc2tqbC2GYa46BwN3nC4H3YNaimv1QXUrqYqKGKCbMFszQ3NywSbHZM1Cyp9njQj4qJhHLDHhxfrNbSBCz",
  "key35": "5x6fJgYq7ftC72ozxhrnZZxFVvsPtaBghuRA2yFsDEG5VtjGizWfPdUu6At15Ei9ctGH28coj8uS8aTSAD1NNf8a",
  "key36": "LirAEyTJRfwfJ5v6s5nZA2Q3bA1mx1F2PQh1Ub8N1PPQMJHCG9SbAgJ37LAkZY7sHiHeyTmMA4oy9sxKQErXdBp",
  "key37": "4Bq1Mfy8hYxDxH7s2MQZdqWAn4JbSL9tFaY57G5jXhcK5w4d3hpmeBgNWzX6ACGU2Rw9YBoaCQDntcGzQMkmsfGu",
  "key38": "5fuX3b6VHff1GtJ4G43xQPkPcMMFdqcLhP5EYcTPx1emW4w8xr9VVepM8GJYWSpNoRo619PiKBw6U79aj9NCpmHp",
  "key39": "66uMfHY1L3k7yFXaSQXfUzBHMvbSdMa9dRFkuZ8YYqv4suzK1A3148Qm6mNNnFAEs91zsCv6FFEcRNBgSb6gcE9j",
  "key40": "65eCQAmo5UXuMAJifT5BdbpTaBYZX6aDX9mZWRnXsZuxWstLvD9YQh6NnxM2zKB4pzmGuBm7B5ZSyHf6HgUQQbNS",
  "key41": "4aecXibWkp17krAwkGs5xFyDA3HionikExvXakJraafTPy337ydmJu8KWM7ikfd7vMAegSuhfYFdbta1aUgZfm9n",
  "key42": "2dL4zgFMsmv2hPEUpgogyuqVB3tck9FULjeV5UT2jr1bA2SC5a1rJ98wGGBUTBwSXeKXfBHKuGFzQ3o9pfS9VrmV",
  "key43": "3s8dBh61zAoCYPpxUs3g3d4WysfrA1nyo192CghjB1ixrNjd1Gds5yu33dVGBvg6giazHT4NUt9VcKSioLQT8ix2",
  "key44": "4gTCM1LVydqdyBs1Qs1WYBRtAaYQDmCTDv6Ac1SM93LUh8u1js5AdvvC8ADEbN3g4MQy4x6SEuTAVE97VCFHPmqW"
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
