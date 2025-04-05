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
    "56VoPomnbhv5srRCwLy7y9xwGCgLsfzst82s5Yp67T2Pbb748vVz3BSCweHunbXPrK76dTGCmKD5279hUN2o2tcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTkcznsXGjmTC4UjKhoHQvBxvoVQrbjd3Utp5wKSpYVzWT73TGK5beyrZ8a9vYDAB1RphX6oSSgjg33gxCiLL1Z",
  "key1": "5QZPhcJg7vk6Zoq3Q4eJm2R7wJD29qeU6dex9MCXkpvFz3bdARzA8sNF31uns4fFLGV3xmq6CqkXfzWEwuszi4wS",
  "key2": "2oGTaJSEHveMQCbuqjgJE9Ldk662kuVKXWZHY626hjov7qZYKJaZyqWHEdXnoNbFPAFfNSaJVCgUEtyJoJhRNoeW",
  "key3": "4nMMsxrJpbPFFs4BucLiVsKXcAQvz5e4y3cE8QcobkdvbdHCyJxm7DVxwcBWyqG2XJsqX5zqgDTZ4Ko4ottc33Dd",
  "key4": "5LqytcQT1gmdEXPDUNREFPQNCiHRBsvFLdKwq3zaNcKBNp4BM5LpbaYu1wYjLrh3jZW5PjBvhERUfK7tEnFxADPG",
  "key5": "3CyV2dJpU524c8NsTt2hCwoJhP6mG1QPc2okp4hfvqgpAFRZkYgV3dDzuJ9Vkhc1RZaSJozyuq3Xrr6bLEhiV3Tm",
  "key6": "2oxNADctmWPFTGmnL5ycBKCrojPjE18gcUddWgsjUW5jYVym44kyNtJFyvFgZPouXgBqwc9CqRHcecPjHcsUoeLf",
  "key7": "2qGFeWnNz99c62qZ8J1WnASiBbUBD3EHMxvFzZufiV1gVMeu1jZSsMWMWgwd4h487QEPrsuzUQRr42x45bpkY6Ja",
  "key8": "5rESzpW4NCpueDeFqPq6mTEXzants3JxpgzjJNSSVgFK1gemw3K8M3YYKPnUzzoyK3X2M5igVZLibDiHBGRV3ShZ",
  "key9": "5T6zGUAJyQAQzBegFGTxJdXaz4MUL7mQdzwzfjCZz7d6dCiqEqfKFk9X2rb2AJdpeMid7cTxt7mCqutCumsNHSWD",
  "key10": "5gC8Mxz4mYgbox5WErdzZNVSLrPHMLc3CPCBp7XXeVLVAvZes5foSJCMy3FRzsZfEyxkMiiXQVgUZBwBVfRvWGer",
  "key11": "2cBUkvp3dk2tCCGx9ogdcaiRAgYnxHEwxtbfaDDrMKpJxWwKW3RRZfrQng5FgQxCkW43GAidGk96XnFCJK8US7QG",
  "key12": "5KX6EK6MtQY3oRny4xDP63nH4c3c5u4ycjBdqAV3YQU5ECBFiDqXqfgsUEsNTWQgHjXFYxCmq8JJZbToCLXEwnHS",
  "key13": "ySw7aGB5XjFYnjGapnfEmxBzHJuAYqDtP5SHUzJ7AueMpBMjf2Aqt6UbshY94fwQR7SSQVR42tpr4D59JgPgpPa",
  "key14": "4Q7wg8A7a5K852nggeW3gWJLTMcH8o5CSgL5XG6n8qXascunzbaJpk5wQL9QweGXSPDhCyQdPFmUrCuciehx5n7x",
  "key15": "4tehokBAthFCUtxGYzSvDbjTFdQSA47Yzuw2bALq9wMVFa53bZP8ab9DZwuH3VPMAKKscdXizwBWByatwA8LXQaB",
  "key16": "2kYSybZU8k1yTMVPrqKVjrWnV4k6VgBQLQ23hAnUEYT8b3TtayuXkcxDqmSMDxobymWGMhn5o127eJ49hTbKkUP5",
  "key17": "5EHihYtAR543rDrJQzvjsvUK6Q8XizLrur7zamFRhmsvjSHVjfrHq7HpbHH5Z8N72oCy6dtAspzvW45zN2p6NH1T",
  "key18": "2zCtgARaposqkux6W5R1uf9mc4MKC36Rbqc3AatS2Jj5Kcag44AtNHJR833F41baqwMq6CvDvtnCt2tgmezqK4ns",
  "key19": "4XADvfGZhBDET8RqvCEN5KJ6X9B1XgKXf5KTeWZpNtZ5xXMptZCeFJ4v1nezq57vARCGVKg7DpLHjjCxzGgh2UQD",
  "key20": "3EimabmVpXBWC5y9e9bw32CFa2saChX3B5cRLSJoxC63DY974vvNyAQ5EiyCSUwCJha4CC3tpMWK8powQQ8dDq66",
  "key21": "29XFReTbcE8C9uvHhJLXxa3QUsrFAQ9ixJ7Ti2i6JHn99KdapnsXGf6VQiCfFXMaW4iMEdeU9LsMMindzMr3an3v",
  "key22": "3zDBD4YkNYMQxVrM3AJTHUgW67NBhgRnJAnsuMwUeAnX9a4secxBFekfsSTLXBoSqonWDPxQFFDZvjpBRytS43YW",
  "key23": "5cief9E6R5ULYUM94zvo9i9w32Ty915cRsUNSVJZqGXiiwia9gnHqrSMWvaeAyELgEqjsDUnQMDDgrE7FJMnBsaH",
  "key24": "u33MC1pGaP5su7nicgMfkMUzQ2csg593Q6aa5PDB1uTWHLA1J9H6mtX8aGmAn1bBqqyeWP7VQ9GTW4De8exNPuL",
  "key25": "2LKGnxZdEYWeeSHNgPmCxKng9QMBctVzc3uxpTcAht89tXHqWEB5VssTkvtDQ86ovaS2LJUccKk4MhNfedZPnefi",
  "key26": "2zsQf1sbFcjeFe4B5AkoJiG8kw93YAx2jrwghTWQKQ1hZDd659ASC2gKNVwhxnJPujLRHubUzMvpP2pwo6L9gZwG",
  "key27": "PxwgvtTkpuKqkNf5tJkXbgzmDGxHRXgkqJmsg3FFbY5PAbGHvhj1Eront7QCAaq5254WmLraEgsZwkUdbLupqoA",
  "key28": "5vZaPwFHHHfcANHLTeFDZyrN1MzTm3RKitPRgKC721dmoJxZZdZD7DgaP9uQ8G3zMGKLmQsuh3CULQhCyXfMguur",
  "key29": "24Kp4Hvkwwfud7KWkc3tmqdCjDkkwSCbJGp5feZuuNtBFgYtFVAn9Q1RTaVrg3uzxhcmE3NbsZeP4k9tesDpgkYA",
  "key30": "4VXeM2KStDJwPo6RUrRTrXL9uXLUKxs91WnDFv1zdfJbne8c2pxhcKj1ACyYPeYCWbCVHtBR8htUNgndt9oiixtz",
  "key31": "W1UF27SpxNdr28dL19qRAfjp7Z5xcAWm7hnu9WrFAgMyW7pVKiyvjHEpj6qTaR5kZpR1xwzpb5EtGUoY871pskM"
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
