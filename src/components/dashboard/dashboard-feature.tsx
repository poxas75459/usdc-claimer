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
    "3njXtNG4VjZZttgb2TkePjS3BGTwmaCCGWrjZBCYjg6Exg8Rv7AbWXYUeNq4cEzaA2kt1CptYV2zQF8tkCaNBEz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSW39gN11dtcjJ7axArZ2dNmBTzV5D9ESTva8FT2Chcfb1niQASpr7yo6G8E1uybMvwKzSgP4u4tf8bV6gajxko",
  "key1": "N1qQXZugjtudWmRNRxMmwjudkEk4gqDHjHC5Ad9GLnkiP5yCnnVgGsxH6AWuxqbgtbb1afcTYWZVZFq3g6612ZZ",
  "key2": "3yTHj5Mt1VX7VrB6meZkfKvunEnH2P9mibWqamyiXDbqBe43cHR6LdeCErFd4CpvuTq4b9DWehnD97CdsaadHBj6",
  "key3": "4qz2AR8zao4W9rJiSz86FQpf4XmE3aEKGgJykmfPLrAfXCxqPXrCnmfJW3GN7oEfGeHag6MzCeYP8C8AUtrfoP6N",
  "key4": "4PSzkJmVvjs4spCg97KKYzngb12bd5oKPywMQXttnyqnZU2AsWQE6QgFYM9A5V6CfTVXoAskauZiHJxHh8JEepnd",
  "key5": "44qrjv8nmWi8tX25WY9JTTcGypHJ46bVK1eP3UJBVE8XPisZBQEbRKL8gc7MUWJah54rjH8mTsidt9ZGNvy3XkF1",
  "key6": "2N9TNjX4cGxsVfGVTshFM7DJtn5Hvd3TCCTXtXUc5PGYZ7t9DDeubi4Hk9fbBmFjhNu439RQJPsb75BK5ub5ALyH",
  "key7": "4EJ8MmWW5urquVMPphzkHqYrBBcHs4WLcAjSU74PJyzujTQKXdcgxzStrifqT8jWVmqHzrDZ3QoENJBJ5qSYFedr",
  "key8": "2h2qNGPpyjtcYybqSaeSBJg7TJzU8qPp9VsVK5qkfXwA8XNviB7vPJ22Xyud3hyGC1xqsHvCgzKmeoMr2GHF7Xac",
  "key9": "5YRix1bkHaSXNdRxnwHTqCx6Uq9XewQo1br9rh9uXgiGEnb9d9izybey44FiGSVKTmsKhB24VXq8WuU9su68X47",
  "key10": "KY4sxPkr59EVn5ohQLXTQxwvzist1ZowtZkRMQ7nrMQ9hr6Dd8cAxhVfK1yHPqqWSXnQtNZPh9Dikgckp55vVVY",
  "key11": "RmU3jj9v5v7pKLM4xBNniQBxKix7xDs7vrAJi3jB8gFYn7VYss5FbkuZtCECFcAmMKZY4SYwJZGiyRRthdkcjrz",
  "key12": "5uSmfyCMjev9eKRvpV9qLQ8d9ENokSTibtrjeXga1eTyiW733UUNEAdMD7whwEiboX7yXqG2K3bFRMVKg8uxcMdc",
  "key13": "2dT3Lf4EA5sBQYNHdT2pZDDPJzPQEC4JnCdbzeXa6sPqLWBduc1rRU278Mg749rNpRScNrQkFt6Wix2PQaDAs1je",
  "key14": "662epGtmtdgbdCfDw4bpJgsMpMrfiM2kxLQM6jbc8tBtmrrfmzH6MKMTYWCY3KbtFDuKtjpwkmmfmT4chKxTs8Rd",
  "key15": "22D5ZRk6jkh1KYX4bqhLqPhQkJUue2Ggsx3eRa196GrTpDJChBUpSxemq6jQUq9u9Jg2YC8tJeurDHTpf1CWQCam",
  "key16": "3x6v2xXLuCQ91npx44JmEmcWGwmDbFD9qRpUYBwuh1nK879KE1m9UkzDfa8Ly8rQh1pmUYVEkHHrAp8zsrCbHXMT",
  "key17": "9MQj8jKpT2wJJXhrQofTTMQdcmavUftxG5wZkAv15Q59kcbHfrT8i6EJ8YvUBz4h4PDGgUhv2Ca1hCmLiwjEvj5",
  "key18": "yKXeFHEZ7QtqZCWUpPXxqmJLhNxBZ5jYzfxmrMoYcakBpvxUv87rutqSjSoQ4Xjg9M4cbNQyDHokCLspQVKNCKW",
  "key19": "Za26VHnfu4tFGNUhixo6AmGdCXUTrNkWkhgirkoC8L5erq8AovEFmbdi7MyDwEWEUJ8ssF6xssoG5gwJwchDyww",
  "key20": "3q1HP9eyVXvw9QV2etvJMYuttot7D2QwTNWjoVr2BJWoztg2tMFhyWEu4C6Luu9pEBAzBtF1HDiVTfaFB9XtRrKG",
  "key21": "AtmLJiDv6715npzw2ZyPrhMhSa96VzuyZ6wHWpcENuCpMjZXN365XTgbKmakhrt8m12Se1WiWVp7KMw9Gi5S962",
  "key22": "3psvQYdWeZEmVn8VotB2wMzAsyeqb7WSSqjboDLcFouaf15eZk66xFnibHDZywaGgdRihTSE6E7yPVdMtRH4LmDX",
  "key23": "3rbTMALQkBwQvhnP52GhCiCnVhX4pLt7ZCeZTZJnSVMx7uNKJimNKhKYRX7RjwbDV2V2FFaB5D5L5J81JnLbzFmK",
  "key24": "nGALnRXXkhCiuNAMoGBLr3L7N24MHZycYHF83quKs4bPiYpmkkCDog6h4CjX34Nuj9HmX5CGZRoy2zjsAW3y74k",
  "key25": "3vr6h1gxAygRSfBQGiJxfvugRH3SDA5agZs2kav7Lr7biWDftKxu9ZzHSq2FXuHuMysEM7MJTvhkeLzATssvjoNh",
  "key26": "3VebXbuXES94NVJS3M6PMSuaxEhx5iU1Xe8msnJvri1BYSNNHawgkB3bzM88yoDDxMEgcMLXTUSMbXbNGywNQQjR",
  "key27": "V5LX5ZWXa8oB9VHvtGAP5n4XMWud2HrnimjNCYGuiaTsLQRSaLeLjqQqJtckoMHwwUcZPYgLUWDrKqMNJwmYpUM",
  "key28": "3dwJeDBgGKxujrB8nV5EBNbTQGgLbizCDsispz1v531xkpoTLuwprHhV471NkGpq9yvC1Z3YumLwrdP4vnayxJ4V"
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
