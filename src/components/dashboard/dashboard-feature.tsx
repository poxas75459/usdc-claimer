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
    "31555fovw7Ly1w4zPXNARJze5KsjcSsakj9heaFgAntxFpiwSE9kpj6kekE2sjoUpVhnmF7vLMPwgKYdRDBBiHEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UH6ciRyPVGwgQsnmy1qtCFsAqDMktMrCK4KWszRqP2YkX2AYN9bZy1VWLUEo6uByFFnYBbx1v3jGXojZPr1auk9",
  "key1": "3rMBCNprF6WeLCs24nrMvvPCGfp4iF3yPAMscDdTU4nCGFrmnANntmfbrB9BfHvsKePvHqWvXEE78HpAa41Pqv3",
  "key2": "3fgDM5Vd9dy7GpA1kWbbmXRE6koNZEF5CqXS7P2qgdiK5ZzMKpEyu3b8amNc4QqXA5VPtyFDbuZ2YTyDyeRCHdVG",
  "key3": "21TWdphBvr5kDamtE7dKofWwUngCi33nPkaaFrmZzmVe1bGEnX1Wgxh3oVbJQVN1CfQin2RvYZgyuQPVfhmZAwPY",
  "key4": "4pzHbNDFsJChTc44tmZUo7saVcSnmqyDu7eqnSxHWmGDLCmnnLTuieDgrgTst1qN5VP22wCmxXNhNNeikMvPaZXQ",
  "key5": "2A67ReSzhUN4jNgR3ipYgir7inoHNjA4F93c7BH6aUa7fdrextD5AhxPJii8GDJ8q4EEwiYafnuyt9SfsdRkT2sL",
  "key6": "2EumdgrRcrFCA9pBgsBLhqYKqNANYMsvrLwVLyrFCeThvv1Yfm2LNBu1QSKZty9zuKLoXGfyjnB1W9aUfsweMeZn",
  "key7": "4kpGPZrLfEfbkAWKFg2N8jcdqNc1PYonpsmXboY88z736UYnYpyzyeCDvEi3AQJUXugsD9Amgjgf2dGBZbtJprya",
  "key8": "5AUTBgX6kHtVhKtc2CTpadMwjpj1uYFyKigj4UcoZdiiNj3nfhv2CKvN4L3xti8em2PfDcN3Ft5Gwqy75HCxEB3Y",
  "key9": "4utULTsDvmymsXGxTzyPSc8ti1z7YjzfjX9qV9Wrc2Raq77SvgjQZUTYpFVtfbffbp2JmXckDCZHnetFAeMr5ZeY",
  "key10": "2pgm8gr8fCz2ooJWiAUe8xvoLN8g6jQm81AFjyEq4UbBAX26GfAuBQgqrQJJFZgesCKP1d3771CaLRA5TNrztKrt",
  "key11": "Eq1z4k2XqSZ2mYzfMP1zCvDA1YeMtomMeraRpHBcgtyUKtF8WcnZTim1nom94T4zp1PwCzADCA2J3W18LE1QexX",
  "key12": "4XcXkQqWThZPtkSAomVkMBUwczxqNteA2Um2shujGJZ2ujH7EbHuZy23RNG5Ea8tx6E5P48vWDEfwz3heX8TYQuq",
  "key13": "5xyy7oTECRnAtriTvHvXycjiynjoaZMZMAcn24ZigP8tJhVQACAu5mYz4oUcjvRQ98CfhTY4Bf3bENBRdTHEBmd1",
  "key14": "6LcFn3DXDdwhzTnbSwXc88CXqzFCQsNdaEcC1Td5XUkv3pNpRF5YjKwFCHww3YeoepysreDxkEKcLbZqkYEHyXh",
  "key15": "2VoebHDRNGgwcgWg6tFtBMabg8RXyQhMzXrb6rsgQTU53A3eEzZKbBBTgYWbR3aEs7DcP8euUr1ktkbWKgduBHcJ",
  "key16": "2xF1bTYTSFuyKrgHw5pPg4TQfAi1BKFFngmnEXsoQ698DwRSVWWx3sLVT3fRdPuF2cqJhE1x2p2TpjFGHmTeBW4K",
  "key17": "2fiaJHNqEmMJoBSzCtRpcY1ATSE8W7BXWyra9db5rxQ34juZKvdTXQQDzGCLMuHKXZCcrd1rRTmemMEEbbzwJVwZ",
  "key18": "26GhHBWdmtCsW1ezT51QeEkj6DZgfrWe5ZjaXR2yu92vCbaNoKXYNJuHEuvQq7yzNd82Smzdn9Mjdw9SJq4XUu68",
  "key19": "2FCxFio8YDacYrHvBJk2C9TpqSpCRbsyV3MwwxcozLoHNrKMLe1PqTzMdmAD3J9bbpBcUEmLb29Vo3FFVeqeF2wc",
  "key20": "FeakdQcmATPAzBRXhK7tAsMCY9eGPraGXvP58UNkLMjtEdGWawiFbxR9XdoHdG4oiy9iW6grctqrApj1hp3UFSR",
  "key21": "suoRHgRzYZZx5DaRATrADqtJ9gLGNBqLjh3dtTL8EuZJQjf8n85eetYUZmSMg7mJwbUYneqcNrKRrzQhw2QEJrz",
  "key22": "5WtAUtChP3YdkhXsnAEkuuoWN481BDb5Ho18MNWv8xJvT3zW2RUimgTzcXKjGUz6MhkQnSK9w6sAVUVbfJ6f6jDB",
  "key23": "3puk1BGZpQo5hPJrWodwUawfuyZmBRgrXUTzMH1CDmZgavdi1W3S9Jjy7gmD8LNtcStQcu7Qh85hMSTyguX31GHG",
  "key24": "4aGPRRMUmxRGyQhBqL2UaPiUf92Heme1vSzcoH2s51gDUafsSgzAdSaUeAfvqYXQHBz3zkQ6PcicNJnuPHsvmEHw",
  "key25": "We3pXdTao3oci6R7JCfr5xQjGqTdj9gFp9MMM4Ti9qxpDgyGPbSpvgUo1tYgaza6UyoQXzGSP3auaHMqGkar8Fc",
  "key26": "5zF7QuPrgL8YZdTFkCVaEPY9Z9vRhaPFoDyKPqh2T5eRpRo4g6XhSJ5YeTGkERCRD9uHSTaNyTVofzpv2Z8qsm3m",
  "key27": "2hUHQSpS4XuCZpJti8UquBtRb7wWjPK5tKxyd7j3mujfn4HAd8dvChgcw5HLZUJ771Sv87WtikM1JctnRjceb5Zv",
  "key28": "5V51PwBjwQe1fevLwmtYX1YXN7L4MrVWfnWpEmjyGAdC7VWiUioYmXPYRVbhYtot3XXv7fCAp2zJyZjHYx9P8t98",
  "key29": "4jZEb9eCnzPjpS6d2XwHdXGebcMVDnHsWXkZKnFgu2eZCSskbN5rmkQGjCWwoX5HxyTXNXG2oJ6mjsG6j5WifXoV",
  "key30": "37HcWXMgTdpQz3TAC9UzFfi6XbHw1aTSsbwaHCnzHmh7U94WEdoDqNa7Epkx2d4HXMR3Sf34UfdpRsry9TMWNnxX",
  "key31": "2WRmftJaAX9omec7QYXxoGa5UYr5CYYqxxgAasCpZGdi4B5pow6hsjHrdSy68wdE2J5tcZyzAZpVrzT5ZqtqoUuf",
  "key32": "3iZEzPgGwK5gN29KFYqLHAJFZpYXeAxFcHiwwpL7pZUbCyzF84zfmRg8mDuRNsnAV5CwomDBpa1KK9tugJXKXn4u",
  "key33": "5AYeG6pqvyMYUPdtszp6KLSjcUkDgaZDN9F5dkAnEBnJCazAE2RRJc3hCasSZjWKSy9hm3rdBNKn9PHQWh8yseZZ",
  "key34": "5PoWBAzSUdB9zpE7F64PrHawKtkYz6VgtK66vytRYzz7p865qvD9R8cHHduQLHVSNWbYCzxobDfBHRRHNz4sMkXX",
  "key35": "5e7wLnu2K5HWXmEiHMXnhmW2GDQU9VqqBtfCU8GCNQSHtWXct9rRFmTuwZZ2mB6yvaKxuRMZThraZT842XTxKESZ",
  "key36": "n4iNKZmSgMQwBeJ9GzFUyVHWgi5YqpYek7rx3ocnv1GmfG1QLGuxKisad8Zn3U4vTcfD7AtvmhGWNNgr38LVpqY"
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
