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
    "4os9XPuiYZp7QtdCEzSMpiAfnF4LcpSJQr681XN9pV7i5Dy1ifnifpmVWG1jN1bAGwSthCV3GyGmd7Vh3KyYvRGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGn7M4jc9o4hjn4nc6K1zPAaeoZNwdywXETRtUHVmVnMxJk6WdqrtyQttjzC7weDqzTXXx5UA1h44wrQHU9nPSh",
  "key1": "5is8T6vRfQGnKaXWwN5gcWuaNUofouyfKRA79Qf7Uq8XtR9HP28cXc1PZWxhGQtrJuAG9c3AQaf3TaqTc9fL3Dqw",
  "key2": "21uEG9C8W4GgH31QXW4oYUKGT6Q5UuBKhJAouFiqUhSpVhzzQBH36mje4wvsSDU1Muxxgj4gVD5R49x61262i9Qg",
  "key3": "4WBu2pj6gQYTEKR6X1HDRRdQKuATGhX2TRm4UPxrFnxJU39XvUbzhYHyXsLJgvk12svv3AcNKULKxKDfYG6VxueA",
  "key4": "4XHBAeDiKPzHbijteBHvbWeLam6Y4UHQvLAAHoMEx2ZNkDY2RBgGqLy5J9B79ShCEWXoYaCZ1PmAuaAQxsN7HXTk",
  "key5": "5TFXn5Sk161n6SBduNvPfpyaWS7sMKufSbBcL1RVikcTwJmmoL8LwHNp5KeAg7RFecwLsTa3UuufwU8RKi4ZPseC",
  "key6": "2q2YBPUUxaw623B87CTKxWmJwkWT6iSSxLu542hp8vtHDQVwkx6w5kKCx3RnAsKqEi6vayQk1pD2GynKir2B3ynu",
  "key7": "2QUYPW5w4jo7MH9PSXi3RX9YCj9HL3muPfpUuuwmNN5JnfUcrnLVq9BydaJn4C8qfAm9sn13d6zwjtFgW5GUzQtG",
  "key8": "5rAw4LXteJYyGqRXP1adgj1BA19x7KFUwEKcSxDpqVVwCSnogV7WX9Vo1rJDfzN85ucit3rPyFru4G78TFfiptBD",
  "key9": "5kuGZRi122awD8fDysefKDCfHsN7ge8jPqb2zJpjGWdjscnX7ou36rRsfXKne7asYgGiTncyfypKYLuEGidybYgV",
  "key10": "3J5YkoNrNyjzw3roPHWr5eyWQKDPLKWv9pNktXdq5TLCPMPwwYK3P7oBDhgZiKCa5BiEewySSfhSaweF2j9v4F95",
  "key11": "3MZoMF3PGx1wDomBJwFybFZtdV4VLaYi4mVokABz7fWYJQvsfdYzJjvAF7Ri4dZe8H7rdtdZ3CtDPK457MM6RvvY",
  "key12": "2kQ9Pe87tzh4mBrgjzJuHjKyvq6dqRfeGD6S57MotNCDbeNGuhUmv1YH2EkvKkt71enTiPFBGfrENJoxPqJsDtVq",
  "key13": "2zh7EVT27nAmeKh4E8PnbySaqDFvzduWkM9XoB5yE45eygY3qit9yPCTY7y8DvQ1dmU8Bn1BCAr7RHauuJvsM5Ki",
  "key14": "3hvSGdwuWquR9LqikiKzoHRRDpZdnkDjgb6jSZCBDwvUK7fx1UhzKaGZW95TDrLAZivRsKnAiYPH9QsL13vf4avJ",
  "key15": "g2JGCGReE4pgRTZT8eRMZKTir1TAwPoraHibruZ5n5FraUU52BcwcNm5hXYJwtAbbgmnj75teUmQB393knnj6ak",
  "key16": "3ShzHhJwXh6ogTZ4AjnwfLnsWPeKc6sdgqLrDRSGT3TqmmaXQfNtz5cyhLNvPo4vhUVGQ3kAwbun1CpJ4yC26HKD",
  "key17": "xnsg7Hz56bkPvVUR8qSm8w7XU47nApfTwBKuBSRDYtjJKJxrQoTmYSbkP3aExMCw6jNqdZhj7nyrUHvm1vKwvge",
  "key18": "4iM8hqcpMUWNFNUS82jgh3FiQHhLLAsomoihU3bBCTtkkHmckCARMHvvcrxaL1zBBcUyucQssaY8twEAqRQj9g6x",
  "key19": "XTM8FrHRy8YWziCVP9pp7MuMe8LtGR8Dpu2k7rPCFJV9vi9p2yynkKHre6w5x8HYFiUYsz6rDrcMkPTPnSsH2zo",
  "key20": "5hfPBZvVGUbwrDBsTSFcmHzkwJGAdknqrGdCiYxUDy379h1jFHj5QQQEipqpk93vCwvygYbfmFiGY5mqwapGhWy6",
  "key21": "4edvYPRcqkFRWj2zcXrjWnXBAzDcvrdBG2fQoaNKqXn9piY1eRmRRV9G5RJYEP3KwX8iYnDsHYcMZfzZauw5x8xq",
  "key22": "4JCS6NdmmMPaG99osoasXwCzZkW2ZvfRmuwtiyeHPgxDo7YxLeAyscmqzsxRCxEDbuHM1557MCPpyQCAad2PweCa",
  "key23": "2CBQAhFQxDiPW5Hkqz598axok21fG68Spo4KPSCVTL5qHRSWSN9LzqK82AmFQH9RC3uGa2d3toXXLWK6sKrNkNsK",
  "key24": "isZL6GBaCEhkkkFvvwrae6XrtEsfCFpaZfc6vGuS4or4Yn5yuGXuQqer3LuVXka8R4sr3dMWA9vVoUe4mF2Z99x",
  "key25": "66tUdGWnrktECSH2wZKnxcovjMEpBk9sc44vCDA34cMu2rhiQTgCnb5DgTW9KZikJe52EBnNTp5kvVrJ3a1ved5R",
  "key26": "3aiGdWGwPDQ43SVknR2J8cDAjj2ZtZ2TRCo3em37mwdjQaSnMpaUmsB4sYWrqGAPB7sYeVzVCcvjxSN1o7m9p4VW",
  "key27": "4dKwtGvw6FeepD2wsuYj4Exbuja9G4BaxRvbf6BpgLHmoBuqfRwDV6jnFK6Zmz1KAWuYwJrSgTUwn2MVTTvmZ4KS",
  "key28": "5YrBaBGFLshufquWHTycCeb3DDQNZ8gtJoysdBvEEmiMF2XZ9odt2kkETSydc73fmX1A6Sg3EdnqLzoL5EcTkWLT",
  "key29": "24baVYkkfsQ2dD3rwhY9CxWgdm9CRK4HSmhRv97kdnX9rVABUy7XnjnDCmiv7qM6orYULbDA6mB8GfYm59JFZVeW",
  "key30": "quUfCtL5ccCGfhQi9YP4PsCZxsqtnaek9zrKjiw5UVzmSj3BWrY1QwFPwXynVDapnZPtoceN65PMgACcgHgKKEJ",
  "key31": "2qB6RnPc72ncVBVEtyVqzD8ybBxJwvF5ctYRZABDUqvdhzBDwkAaePKAR2GcVVyU3xrrKaxpRE1Ai1UUobVUANUV"
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
