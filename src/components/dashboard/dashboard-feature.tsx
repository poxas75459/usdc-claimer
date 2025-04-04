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
    "3ENwHvbxSXBVvqCf62ZoYnmp14jKwZ6atFrNXztLfEBRGNZKLGYkqRxHFuf1sVbs4KUVxLu4b3A4dfgJrxiXZHtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyr2CDcMEu8SA8pgsrBqKCySvaFNWWPVGEhcXWCYnpebRGauT97GLyRuiTQ3T6Z4bejCLTxDMTQSMUTrWgY3iLt",
  "key1": "4PQZnDTLCmRTNkUQWKH2Yzj4KU6tczYdwZdvQdYxe3SSudKVrTCMGQ17gpFE66mJVsmZR4KeAifK5X5zsLWSHDYz",
  "key2": "4Jx9HV64SHfHQC36biPBAt5kMmPgWCfMimD7Z12w2XTgPSGrrob6xyAB8Tk4rSAt6G7BSd4fR3qBoZqLCYNT5wfK",
  "key3": "5jyi6u28i17zvUjVVWPvtpxzV9KWLjCHDgGzQharMynn1hp35zYVD1yZS65nYByHQSYzCXZioZcDVM521G8kc2Mb",
  "key4": "4gqkWM5aTVHv4TgvcpcSCmGtg7u9NWiKUbbkeN6F6L5UX9oSBy2Gz3v6ZxNEwwTdjiy2hahNwSiizpqbk883Dvwe",
  "key5": "3dRxWqbdAmr9Txonkns2u1bca2RQcdruuQoTTarDytiw2jymGYXwWPZjNKaRTh7FRRBhtb3YkxaMBPfY9oSmpKBh",
  "key6": "AadX2kd5J3qGZPYGTW5QfexESnRVTWzLXcZPoKxRT6WRWSxpHjcVU6x6D2wy3mebSMb4QqnG8WeQnpmSMPG3rKg",
  "key7": "22HQuBPbrxxZHWjxyTgyd8CAusckt45wzCT6SCJ2xamLvdeFeNbVezT1ZgTFxqbcANg7J6czpQPgx4ReC21K2cbE",
  "key8": "5hBDoHFAxWx3UAzNAQJhQRnkc3b9YBWbQkwAfd3mgV5VTighKjz8gKSbGjRcs5qhGUzQGjGrXNntW2H42bBDUfuH",
  "key9": "554AmoqZGGx7MfiUFoueUecrWj5bqGqrsKkcK1NGXzmfpBTJ46QFvR5YmajVunjLvuKVA3zRNCFjZH6b3DaG35rj",
  "key10": "2ptgyGVr2isQ7TMqgGmczPDyF48ouR7oRmhYY3yNGJE7HaN2qsqLq6GRg1KYaEMBhrycFkZMBs99m2CBWR3XUP6u",
  "key11": "5VzeMmbsXThZ4MxffMxEyNABLbCUZwh19E7rZydkuPSizsNxrTAvRQELKs9aWY1rFy6S7GEcQKQezcXQkgniMSQr",
  "key12": "5zz9HKasHbsASUVH1xWHN2snC5bTo3qNcjRPYFYzgyPk8cFWpeVYByZYYAje2wWJfo4xMRKp27t9e1E3UJdmv5sF",
  "key13": "V8tMDz9SXJuW5ajZ7mJ9dDV7yprh2p69M7hjPwb5bEK86kkwmdFWF2f2EPNTyP776sLXpUWjuZV8htVWHLSBuwj",
  "key14": "4ViMX2CjKLm5Ky1jCCTTzjhxeSzptbo15d6gxqJYPHqNuCLCaCfo71tgnCz9zy6BgZCMWM3BG9FUvwmpSTLCdwdG",
  "key15": "5ZcikF7hm8NG1kK3hrXGBwneD3LHoYf1hj5X8EMeivGLZbLNPQFCVnnQPDLXJxBLi2Ro4TJrhTfzJF6oVa73STH4",
  "key16": "PC34xfbP4YAKbkcZmc6jeG21c3ut59NH3dkc79wR2MCttn26a8563zoNBG8onxxFykSZT6i9mGABqo2aUzfwiMy",
  "key17": "673GJcTVGNGmdFej7syX2UbhEJDZRUgdyWaWtnu1c1ecifTG5YuSoGHJpRbJaL7xQwFhYuT4vnDgNcxSm6xu1evq",
  "key18": "4K1hjjPYzTLSR7tMzqisvZHLWiLVNjDcAhjHMAgBYGkEMbbUvLTPg8q99PhtozKiNm6cLYqBsQSrP6wYD7K4bH27",
  "key19": "5R9ey1FjXDDgfwhmM8qd8sEmVzu8SbUH6gfbRYGVULvZppzg7Pr1EeKkaJyb4GbtxsCd2QyZBUs4FEH9CyCWPVa2",
  "key20": "4F25zx1spnuSmSgJWVJ2vCNCQrvwsFnuUa2JiTMhrnnpRN82494LiqZ9a1vyzC4mQAjQGxHgVj9aePTgBszNsTvP",
  "key21": "5CfDCutegrHkNiPHNv18zGUhqBGaMBxCM7kJGvsn1nH28m1fWo9UUXw9p3BmuKPwL7DnA8cWaYTeLHMXXcuSUPFW",
  "key22": "4P4ZCaCdv9u1MxpuRPoj78oo3kp4njxqJsGcRL6gSgAr5VNVkUtdkKdS18126ZBhi4rot27unWKqaKiEnuGqk5rJ",
  "key23": "jzfCFGqchDrpQ9Bn1qC1usPEzK7j8NXTZbqBAUdBsmM7Yxm6juwu2wLoKeZMAjzDpHUjtUy6KZJdzf7g5reUWdp",
  "key24": "5vHnk9cmDnYE2PDuqA8R2XRVeuooH4q4VC7Ec5rvnMkVjs21ZAtyYzHxPe3E7gAqUb8Vp5VTVk8dFXxCsYrT91wW",
  "key25": "gExbLJrZnKMmb4qYVuw8VgtnbU2Fo9k2JsZeMrbcvfJWU2GctRxtc1Hc5Wb4vaJbJKUbkDqEcHeT5WEPNhXc3By",
  "key26": "jTdz2oudtty4aeDQrBeZXRnjEkCiYfYu5XayqR1w865KP9U2U4bFnzn7eKuynpCofNCozkKYpmhT7Mkmg75Tiwj",
  "key27": "4QiTeZkyFnUWdwfVM5kKmmaRtKKV3aCLrPkeGRYjQcFZgVgC7WpiKzxcXpH3EPoqSvBNH6PYrB2J6iaV2q1nPWUY"
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
