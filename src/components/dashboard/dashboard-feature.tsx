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
    "61nYrLDTYNZ7FKpMPNdmP6cPgtEUvDaYXZGicPH21KLbKCmXBPikoAWhKmweA5WJRtgj2DTG9TpSfSoMzcT9A68i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WjWGxLZAypBo4FEj8HUcRa468LtrGQGKvRSnX2MWJEYiEDyHSH1K2nzs2VSCAJzaSnpMm4rjE7xsT12i7iwiQCJ",
  "key1": "4bo9dxE5ZFywCQLg5rP59gxQtyXx36MjFnBuL627j1hj3qGyNsEv1KckK9atov1RgsTu7q8QKECA3RSAmxzUUiCt",
  "key2": "45uaCHt2Tap4iRfiZoWK4mz3TYm76NYcuuTsHjEH1qge9Sn94iNz3FtRc9WLASx3Wk3CKfpaSawY2Kjgn42YVY4b",
  "key3": "51ZQKNyZrgPfqLysjVMohzJZsR5uWcxm1xKiQZR5jY4hWFjgLh3t3tjeVY84JP9pLwuM8neXiVFAnvoAo7ED541J",
  "key4": "2VZBa4ZNaQoWeCHTCirpTPnnBV3xrL4XFBFj4M4DyJzsaCrjmxVz7WBuU8Lvm1jPuEyeLZ3zhc8hFKLtdCVBEx7j",
  "key5": "2wVzujrDfbwmfMyXPFK5AF5hBEHE2565ND3Edu1zahKQJexSA5krMQqk4kjhBrSmmV3C4jWBye8o9EtF5fWBg2wB",
  "key6": "G1Q6KJYFdekBX9CxKG1iWxsn2L2BxpQx4vCic98wddT189QCLyFWSKKdgBa1pcSeQcrFzWhJQgEboi1gsRDthSZ",
  "key7": "4pdnMGyzPx3iGnJKMqsUUZeQVEYGJnh1Uegy3vTcgyo5J3ySdRQfiDSi1cwrBPp3MpVPD3VVg1PQjkjc5TqifmVo",
  "key8": "3nDN2CgX8sRQDqCxZToPrg5WTV74DE9jewiYx71fqCgcXGEhdx41fAtL18rmQEupQv44muNUTrj6WFbCqjijVsne",
  "key9": "4R6uXueFtLU6Lk85ZiQMjXg1Au9eMyHk7bwHAVxswPy1eyhxFCgs3LxdczFPDZ4GhBwcVatfVrLkqgbq6tWUehJk",
  "key10": "5GqxSBxatXmUdZpaebGVDXoQDfLxdzVqosBq7fsZK6CdnKM2vRBJQFdwQvjNzkB6tdtcnvf6mjs1BkGcMQtu1nzS",
  "key11": "4xiZVVNnhmnRXDyC5SermMa5bRgqDyQWPY4AHprWAFihgg3nuztw6qF97pwVRbmwQLZevkBerQvpmXHbJg4rB1yU",
  "key12": "2gfxuUNJaadtKvKEHUDRCqv9A67oYyHXzQcMWuYgzAKLyvQCMfjYWA4d9DJbZC63U3kJNN7w6SXeUb1oJB2rn3BP",
  "key13": "fzuv6kXAh2NXRKf43YeeEbu6UNHgNdpcCN2aYhfL5wWvsJ3S4hEvfZjpmbfQJAPZxKzAkhnrToqH8XD7NBDNxae",
  "key14": "55r6zwuCnArpfy7JVjQVrHLuduBeUFUyjnM41CwdR8uxxbYFEmZxPbMP9ixR84Z5VxED4BjaRsbNEcHzJsspAtJH",
  "key15": "3GN8eNYjLeUwm4Y7sdgDs6Et8CTRQ9goJUmrvHWtee1GqZxwPBycZk4vQmX6rk5gdCfpCfTimxVpsduUyRQGXyvr",
  "key16": "36HkCsWZJwWsDgi2aRarWNXGFpYuWanmcPvZ8zGuFWgLYAg554TPW6paaPmJVwdP7u1NTfxSdQQ82aGrfkvJgUcN",
  "key17": "4rkLZw23veHECcZwN3snCZb5q1HRMvSigogMoRLTUmmS9Ar9n2yEJQE8bYNwmhhsVR7qzn9Xu65t5D7n4vJQhVa1",
  "key18": "5CC73p5CwsuquEzMACAFmUyvCzUxVgxLNuDLtFwphMiz78deQ3zZN7JyRwKwAUqn3rpoZpmdjwiKKrzrr2u8VhPk",
  "key19": "3aFtaSQvvfpBUxB6LUu8Pgj3bYTnm9uKVkQko7dKNgUYfaqH6zv2UgvhbmLBmZiGwGbQixSpe9YsphExLeNFm4nj",
  "key20": "9YXcUc6u2qGsUhJrLiKGNZH9CZVbk16reQQgYQxwTvwp9PPKQk1CcXndmhBD2k9oBEfWbZnVFkMWApi3bQUxTAL",
  "key21": "4YZ3seHgE1xgwd7tbTWGBHQaYrd2Jfi3JBWWn2c3htRBzwpeUBUUfvWv5hhSwqF5xn4eB4cER3eSbVgbB5EVaLRL",
  "key22": "kYLLUkM8YaVB2LHEPn5Cytoa3pkSiimZSWqVZK4thuWVC59p8egqBsfCAzDGn53hB7GoTL7kUnQ2Gckh2mQTdNe",
  "key23": "5QrDcNvzCARcpXzzhdepzpCBcxctJsybwbKrHAsbLwfyUCpNJYerkmgfYQpY89gqDaPcG6CJuyFARUpZ3qFLChPS",
  "key24": "4uacU87eh2sCenUaPFo9Kd2AjKsWDAQBJo6EyiDHyrKrJK6jg7H73RqQtb2RoxxNq4nfrHBNDD9ccU6xgZUztTRp",
  "key25": "bZ4Pgx9nWPqxVSYkitZFndVaSG3EoJEx5svGrLRoeAQ5q3TAmMpjqNxsiqXqQz7L4vxUErjwFsKde8hiJVQxXtk",
  "key26": "2W1FRX1WBJEJXez5VegEEB723Bon5rV9B6s3NCfvbNUbfhuHMkugxa4bYxtu79rTbxf4biuAK2rBTgdLUKAqiihr"
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
