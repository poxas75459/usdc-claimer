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
    "J6R8E5PgnVXhDHkfsEYdWinW5Cp8n4V9G2zrceKZqBCsfj8zjHtAmRJxryjR86QCmZXjkTKPU4PhMdw1zPsQiNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JphPFa3XDD4asHVsJhZhQcekZprBPgjfZRU9AQPY9HiV66GgnqAMCRA5cE6i66gDFT9w1U42AkEQi8QpT1Md1yV",
  "key1": "5ffYSH1H969QN8K4Y1tL87eMUDEgAJWAm786mDxDgbhmqS1ebBPT1QKhVezr9z3ofx6uq4Nnzki7dLUNf1Wrh9LK",
  "key2": "51bPSAEyJHiFEz2Begz7UAzu7rUcCixq1voEsCXbvQVEUfRTuoXN4erUGbdmqzMQ51FrTz7ZgUKLW1UstKpJExAz",
  "key3": "63NBVzH3pPyqBVuRbd1gNAkZrUibY1p9hBWNrDTrhdfZzgSc56VXC2TuYbXEeXM29SZefDoz14obGGRnX2yzD3ZD",
  "key4": "5KcYjDjMaJ6t4utvkbw4tTRgea6QUnaFA1Rj9a6Qn3yGfHMS488MNp5acDuVkkhjvUqQZUcB5DnoXEVz5qkLNSEE",
  "key5": "45Pi2QTo3pjwShEE3yJ2BNphvYVWyUMdd5NKox8XPccF6LsUbxxpo3bbS5AgruDr3BQrsdFHX6w4HmZ34JNdirjM",
  "key6": "5wJDBebvcydN8fBVoZ6aBtZBYTUnnTYXYj5zEpzZXyGsp9RLHLmFS3Szx3QdddtRGjS79Xf9S9c45ub7afw1mRSe",
  "key7": "4CofdowfHQL6NWTNPwV8oUuXf1Vurcie5GKkQQNqJBLg6gKe5PHQu2JiKK7cv2ifUdY49QEU7HZc5jzfpfampzGZ",
  "key8": "5uhHzTewBoBrTvJex8a7dsc4Dc7j8uSAKtbCtFDaBkSDBPGHSKpCT89bNGsHowr2oPsfXEjv5xoxxdUdzENWooUw",
  "key9": "4qYCa4GShNxyJ2StgAyKbWtdGkXM5VpGaSSQfLgzAi2fotLoHUXejQGB7vTdEnHvPaEyJvraP9b6v7Dk7cuwWELG",
  "key10": "eaRYPvDoa6VJZZzwXJB4Gn1tCriJnsqe7KGFksGxwXYk4hkiv1smKjRPWWYm5cfpraLk8nzHMLmHcsFQHwyKHqJ",
  "key11": "3bVqaSKRZvDVA2UnFaVEAcjfxLgbQscfWRHTwNU8JK5uzncHUFHVfLUTzDnfrXzxygYy7hQzqhprWkxeQvvA6Fx8",
  "key12": "3A7noizoWhxuYJTJCz4yx3RCHMdmGKK3sJtcPtpjG3ZbL7276FFeFRbdBoDdUFr8AzSqXAxtbZdmhWrq8o9JJErN",
  "key13": "2sCNzoc3aQ94rCFqMwqSxrMH2rykWgxzLoJvrYKaE9VFNFQwU8kJUJwPqTDEYDP5gWHxa7gu1hPu1RkUViTb8fdo",
  "key14": "yaxmEWcFXEwet5LH8LX7HS6qDG7AkPQTDKxAi4SyuaJRKcRN4b9nquN8xAUnMRcJbwgsUvn9ASr4ephwhsMDRHn",
  "key15": "3o7gXPEQu58pe832iuB89V4zgPid5Pbx2M595JXa8bKFUQN1gQWHm84FKp6RWFZsL6vPtCemwi3uvjv2GhSZ4hys",
  "key16": "2PhVhTeQoy6qdZjb279dzb6qtLFiWAoUzUfrL7bNw4A7nQ3Aoiqz7yp4yy1PMtzhiL97MAZxKmZJuWxZLjuuaRKJ",
  "key17": "Niggh87m4frAczMKcDkN7GKfnmZ7vJryMcFE15hP5EH9khB4A7uy8v1Ve3ZrqUfXyoLpzGX8ho1srWW5YMMCysE",
  "key18": "5L7MCZRdrctiSpbifzFkSXqfmjApeUj3fLFDHjomivC2oXp11yKySNcUxKhiY2bCsYf62zvjw2ccxeggVBq15xS3",
  "key19": "3tSnAHzFzzenCFww7iYnYmbE9yx7U16t7e24Y2CSbBW8sitHX36s6fm3cc1FKfPkE4fusovFh3umf1qkxWpjUHh",
  "key20": "57tofV4zpZH8Yy3EGd9CJh4hkmnuFr3CAcpyDpjyyPAa5CpSw9PFnnyAHwZsvnAB5BLXDLceH44cZ6rJiyciDPFB",
  "key21": "5qcZq5K262v82axx8AuVeTyi7vbVn2ABSupDB1VX7DdWD7YtEMXUn1kPCkyv3mMkcJVkBYo9irriGfhxPAyuEyds",
  "key22": "63qoujXzeD1NFTwsa3bsUoDogeQmXrDNEecDoY5p938mvpzU6ugYL5LrWTUoLRi6SipWqiUZ741JaFVwNQ5Efy1T",
  "key23": "4gnDNhXMEj6x6ZEh2S5PkRm5HzTMozgPVBAitLo17MrAB1QmrQsen6oGwZiV4hFdAHgwj858g2mKf4Wmzv6qrHfX",
  "key24": "695qiyux1qZBhaAYZixGukhpGu4aq8Yg3s5Y8NKCy43RHAf113UR1ZwZpR1S66DUruxNmEe1v7x6e9pZbw7p1dP",
  "key25": "4JB1CDaAWeZ1qazch8SCT1yjCdrodw13VhQeFijV4eLsdJkazL3fx1LF7t9JKWkSh47n5J3DCEbwDHSoe6Y988D8"
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
