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
    "21rcTdgNA6NR8XATTC8C6dHh4ZW9jwVbYwDF7sTcyqvdMsZAvwKMFgiMfDHiYsZPMnh2H9BNrNKwQKCoLa1WayKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "485KmDS2nZ9kAw4Lv2gjEHiYABuk5dY5QdSyXZKmF1HKTKUe9Q3wzVuqL3FGvYo9dohPWvAXLNwRCKK2YabqjPZF",
  "key1": "ChsdhDidnytoi2TaFnL2PY71ksVtzVLq3C4K1NrpSeV62NKyfpyFbgufiNS21QxpU8mDmDCjUKbhUh6frD4cnb7",
  "key2": "4SbnSkHKuzhv9MFQkuLbwkp9K18PJ8AJkVrGRjjvC1LFcgomYD19K2FxehafV1yGC9A983AtZGPdxUnnfEAjoV87",
  "key3": "5tRArAWFXbrVntHNdBF9vLGCQLxRFivN8Gxv1euqe5JbD2y49TM9kDwi5FXdYk7wRkX9e1idCTan4GVL2NEyha1P",
  "key4": "3enzfuMarEX7hpFMqBfTwkVf7ecioXSXJCyqYzBejkRSvCkiVrjggeVbfHLCfZUdbRFELaFJPoDu8sHVGSVxSDkw",
  "key5": "5P9nAHTSJkaSxeCnDceLUY2DtCxPR6QGY6dYey3h4irqZDkhuhE8nNheR1J2Pk57VYFzE3TqUnUioA582dqvvXdE",
  "key6": "5kHd2m7L4S3ntUwigfFdiXjmYQFhhRkh1jVcLYks2jkDRfQDXf9BsfGeyRj2vqixjNp4DVPY9itnKhgpTZ1jD56S",
  "key7": "Fzvm7d5VZpbE5Xdsu6RivJt2cV4xx5WBERHHf8NCc2J4pofef6nk4o4q2wPLGQhP4F6C2eT5goPb2PvG2zDF5y8",
  "key8": "43sYHYq5R4W9c9sZPCP9Ea3hWfDERVqc2pYDhYrEQckVrNK7d26tCGwwhSE5QHgvAbtYrQvsZfTKoduTKoVzkaft",
  "key9": "4UF68n9BupZEnETJmmnNfsi5i4cwt6awvRpQ5nq4nti9z8PR8Wv7MvKcFNGASTB4u2uNV8CBwJR86yFLEPrheEQa",
  "key10": "53jFtbaEsD3RUvE1hqxqKF9v1MDgC3stTeSPvfW1GxUoKQxtjcJbHrnTB7aXw6kwQufD3qFtVhqBkmeVbw95Km8g",
  "key11": "4CjF3Nn5289896P1m6LwjbyUkJk6JjwM3ZPqdA3X6kA2jJDDwhfY5QW7mmmFdvnyZzhaTtFrdR3dA4eLgbHxyuMB",
  "key12": "525DXn9GUexDhXeyTs4sXNeG4qghieNZwmd7DKQHEjh7Wk48aY2trQ3XgfwkT4zfSY6B3Hd8TgUM13r9iVutQkNG",
  "key13": "5PBAUFcWCnUEu25veAFxRuvDsugqabri8hRNRCWeNzuaPiMdvcZEGuwFBT8RSMzft1K5SebTG9FxqVf3wHLaV53i",
  "key14": "4CeZPLQd62AUAbnrwvuqsmHiD4UbsTSpU2udzi4j7h8XRhAgNAXir2PAfKX5p8Dw4xEmQ3UDiZDQWwMDwQrVnNUe",
  "key15": "4gNVFnfayeWTEKXpojkfsyo56K1iR9BTDiTBiCiHZjy14q5gLfMVxFwFgxAYDjh2qCZwWxecpNFpU6eKwvZSR9Qe",
  "key16": "5pfzH7Hx58hkwTL37TPG1si15sM8JthQTLzhtUu2xio1i6i5rkWxwfPhJ1yow2KfVjDFmjrZ524J6kYSZQHtxTqG",
  "key17": "3iN2JiU75NUAw2C4qVgBbC42uWDDwaCw4Nf6DAU235xVu9ZMQP4eASYyRhLtBiqgBUK6MQPJE79e15YhpRxEM3AL",
  "key18": "4t313KMVaAdNHv9RxJDYj2bTNoFg2iE1Q6oQK5tKPT281fYkc1crXhN57ZTgHzsH6aZpMUpNJKZoi7oaYjm9BL8y",
  "key19": "4n7pF3wwMkkSCMWR6577qKrY6VX3jSh7c6fTqxkynUa3iiup9i3qNnLkLZHV5gtG2dLUAaPcZqWQbosbUC4sN1yz",
  "key20": "3PCJLXvtffm4qCEMX4nUKqHoEjfjmYYoeCbFnnQ7LvGs5tuD4TbkaBEspC1MMseK1hmfbXkijJBt5f8WX8AErz3x",
  "key21": "3T1HcThHNXxaLDcZYfB6gVESxyAhzfuM5R7aAmMGxcgAXqRWMt8GRTCoMyhF6RuUuwco9yzcj99DprG5ayJtrFVs",
  "key22": "2syNewD5bPnZcMXvL84Lrj68EPzD7JBZgkhF1e8KCFjcENwMa3Ba9HnXZT6y3q25CxMoKB2drrQTH2jm3EDio4BY",
  "key23": "4whbyHGFdYF3Ft7z4qWLDPY4xAzDqKnirwVBRBXAFh9tnDYiFnMB4HEyDmVnkAyyKMw5y6jYNG3v2JLGMm6oEad3",
  "key24": "5Um3idis6iGeC2L8dKUZ5yjHSBDHCCMb2kQpkEPUbEUD7RwiiZyzLr7FBe1ADsnDWdKvDjnNuANdsv2NrHzbnXiw",
  "key25": "aVy9nYtKnWfRKrPkF6mZj3MaBt2XfcMDcchMdHPABpFYjSAnkr9UvoQeMVouEgS3DyYkeNHc1uvkDJDqx91wf1t",
  "key26": "FaX7W2VkHqHSWJRjbaa8g4wGgEhB11b5KPEqWkAF51z696ssF1XsX934DqduWmgSNZKA4WNUGR5rANnnNxMwjKr",
  "key27": "ZeJezHif9SGxnjvmHrb1mVUYFM4CTJ6n4TouvQFzz5oE7UD87EfciLnXfzU9DqYBp2RWHHmT8WtprahuKnBNd5N",
  "key28": "42Mxoo1hsuS8YMU13No6DyP44SjaZvZDW6d1hqG1Wm5sVp5VPwc1CiFLs2PPAU1e26rfgyL8XsuVjjWFUemU1pGY",
  "key29": "4uNrS3hF3xZGb3yzbV9934HdwMi9Zp4g55XRTQgZNS18WzkH3mb62UViGUmkLs85hY33QvruphtaQbkdip3fehdc"
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
