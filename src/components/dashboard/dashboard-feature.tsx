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
    "4FPqxZDyrfEBpohgMbrYMqPtwhfVYDsCZcPCiBaaBCtiv9TBzYG35tcFaJdzUdfmJ4bR2DpCJbxkAAC1AGDyvAMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xF6osmCmWXhee1x4cERiudHoJNZnbbQieZSGHpnirEjoZ8rSctoWhgdoMkhb6fQVie9sBSjqLrHCx8RznKtFJWW",
  "key1": "4TaNmRGUZkMNXYt6Rh9MQWTVB8g5CCe7NSHJsu89MHjnSGKLEsuasZk13wi9cowNLJatSkthndT2Ev6FK3fyhHUv",
  "key2": "3HvocaEGBcE2i12uh47eRYD7LvA6jWLxJ6xfTsQVcQ3oH6pHDWypiQNgN7A3MzcFejRiw3u6C14pQhT9P5mVHATv",
  "key3": "5WRLMHTkqUPf8BR4JzFqXSZZEctmtTbKkpb7YB7DGdjLvQLVdnAABiaTGUXGzSwVsByqhdMg2P1jMnR8fRzAvStc",
  "key4": "5D4tMnfcZNttWcc2b9DNwHpkWMis5rsyZ2RZCtbzqkrTSWb6JN2GDsNYJcGYhxhR8Z9b83pCHkDCn5sTGgiZmMTb",
  "key5": "3c4VKtT8cYLTjSiN9wrJVi24CYzQXgSNejSToFWEmHWVEoGb1KY6J3voPhFFmJqtEcwJEjWgkTDqkq5BYXYnkicK",
  "key6": "4rrWcumHnajf3cxMAtBwWbb1wMGtRVSk21FWnRKguB8LJUEHMQV2znyxdG4BebMTg7cren83uDqqL4YVY8Rhn4SH",
  "key7": "5HUzSgHbbkS7NYiPwPV81oZ2B5KxTp5znBKzaWpYkAq4R2GASFHfAcgFzNCKZSYEQ4HQc5ZaKa8KTsrv3T7q6V9a",
  "key8": "5KUiTirgNhUMVFuoamKtFykymqhtAjXo7tZnSJN5bPzLfbpB2Gi3TcqvyrHB1zJvXXZyLji2C5yo5XdbbVhNhtWm",
  "key9": "uetWq6GzVPnXmVt5tLmLzshG4Vbj4zqQMW2fe3YueyNDoSeDKW4zQaAhTdyH1BS28AabR3nv9UV4Vcp5dM1mqu4",
  "key10": "5849F4ysDShXyaZte1EoX5Lga1oCFHVKNQWScwP1iXDLYzWxg7jkUHKvg7Kqfw5iFx5Eu7Y87XUtxCEZ6bQmedcr",
  "key11": "3DuU9uiAFqTeRxKex8X8STGkJQjT7F7YSMpW5rttnFz8PwZ92QqoC2kihWvUPAhQ7CMpiB3drNw874n72o6v2sHN",
  "key12": "BCCCiFi3Y1T6cSiNGHHfCWQd1uS5L2PdQam8nSe2dZ1dmXrJMgSsPz8baGNuMbnY3saqPjEYGGvCFii4V5PGwiS",
  "key13": "63vsUjfqmz2QdL7UZ7RkRQLAU5oBqGxiddDdkiGpjn5e7jNdRuaMGvHoEW1r6r4qqz1jYtxvPZQmWyxf8UGPRUYj",
  "key14": "5ZoJeStEzPaP6AaQvPuzCbo6j7yWwLgnjDJtA8WN8DXKnpNhsszVJQoySen8uD4oUfUMGdfQX1mafAHihq82a2tS",
  "key15": "8rijWzK58Yyoru4hZKniFEAPLf2wdnU1oM4tvaxgsgHCTATenE9fduC4tBamPbcrzmyFFcKsdqEKSRnTTn3j5vT",
  "key16": "rtKTgQcyhioGXycVRtjHs6iZEq4PkRpwtjJEVd45mtHHF2wtcXqRpRNkHwC2NS7BSrnUbXYzdgQW8bfw8em93Fx",
  "key17": "HrRiEqYy2RH1S8hJg2BLA56i7MnH6bLKskFdPrMMemRVfGJXFVj6cVtjHmMutFKQuBw5DUDhoxHXmb3rBwC4brY",
  "key18": "25bUYf2gsinX7HqWjems9nF1ft3zaAsFwtEFMRTMkwd1BkaANszc2cCXDbeb9PehticcanQ9Nvzd7a2KjsrpTY9h",
  "key19": "9DtL7ySw53bB6tLEo81oDCYjXChxogjLH4WTWkayepba2jaA8sYGE5wTQ84ZHJHZVwZza4Cz7dBG8DBdpm5aUE5",
  "key20": "2MAS6FZqp4WNwagfoEkCWPcLj3t8sjAhVXSFYYqUbCfhazicjTQqJYViCGdzNF2YeDsgPC7fhdHvjM6DfM1FjpNG",
  "key21": "4E6D63HQDSgkhism59cGpDFpWAt25Tv3qzVRcERShR2mkGqC25JdZvAkZKf523KYuFzSbYnbrGEdLFJCFVVwSJHb",
  "key22": "6795nhuZaBPavguKGBpTTocTNPi8FBLAohUA8fhLVtjL8PqWajhSKxLjzZ5ihm8r9i5FQHDTMK21t8g9r5XJ3xkN",
  "key23": "4gaS7pfp4zB87UQucDvYkcF1Q7LqGK6raNQy5SzSWEJDUNTuzmiwzXoz3tyEWKsShZTcQVmoEVHxLEhnPnQmpeHE",
  "key24": "5mCkHyKyjXNYmXSdna1MRa2nZK9DMGSTRSCoBbbbxKaNH1fGDg2hbMNbXGfgpT3uR6zdGAUsoSMFUJVqWxGY8Wev",
  "key25": "5SErzTUWRb8sGahYxuYSzHmbF5NgvNy29aD8HXEx7JNsyhaTbMpF2CuAaUKJZZNSV9KkVdMUXZvUUtV396RPZyKH",
  "key26": "5xNfz85QyfUkKctR3Rj3BY4CALxSrTqjCPBnA8Jv91sMYUMCGtFJRoz1WYvTKXToJHkJRqy821F5qdZNYgWCBBdd",
  "key27": "2vuxA1rQctZEPAARtEzaPke2MeCVTmSVLGJErkziM1u48dv2Rs24V6si3vTb2CtwgwccVdCr5BVbkNmJe6tzPDPa"
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
