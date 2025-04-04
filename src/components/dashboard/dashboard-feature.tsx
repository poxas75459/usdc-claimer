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
    "2CpUioqMsCMhUDtrfNxicnNuZUzneieTWnmcHfwuQ6GnXgTSN95SC8YKkuV1so6tBGfCd2QZpRJDtFFjqXXuwqpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XhewVetjk5PJ5jbXg1Bk5K5yz9tKpnLkMSXhX7mqxGiyxu7k2G43jy4sAf7xqeKunoh5Gg7uBUGrAVb7rcMDHB",
  "key1": "5mx4JvsdPcb9Q1HkvTiF2ZFDDXaUvLPgQXpihUr3QYP8VUypfr22oVzkgdB3HG3KawqrjKLkSU7rif7bLi1FSW72",
  "key2": "HxHtjBZLSvLU3ZXrUVrhhLcTKhGyFbavMnzeC9JHKX667Lyb8WTR1QsHbYyRd3DkrPdTY4xFGD8K3MRHR32tCqB",
  "key3": "3TckTozGX8gXu983E1fG72Lot6pz4eTDS77uHcL3qCzVm6xbLh1hVTw3VQXezQfhbjoofJvMEZWzqEn3LedmFPw8",
  "key4": "Uw6YVVMAZsoGqK77aeGdaUak1jaRpWaehfXgNAitqaH8b1xZ5Q1GSwTRMjxdYXXpXn478srZsoBbKiAiMKUbns7",
  "key5": "53d4s1H2veX8ESZp8Na1VNpUVjEtN69tLPBs2Bi4dfpCqaWHxPmhyC7rRNeV734MKCUSgViy3GbYEdKR2b4Lwrnr",
  "key6": "43FKv8Jos6PPZpsHdLJTYDhEnPwph9VMYuoaFki35DjvMx2Wr1xqsN8wtUwsphKqRuZjes8JLrMUMUEv4WvY6aq7",
  "key7": "RnUfvJFdEcACJrg8TKyQXHtDUN82LQ93ZWWTZTqd4Z3pu9TRvhZ37xBww9ZJBs9QAWPqBF9gGMxqTp1XvXhmMrY",
  "key8": "5iojMvXFLE51r3pbwMFYfBV3iXdN6WTc5WYQt5KqqegLGCXc5DjHo7YvCK5uYUDRANWpw53iFmWdTFn73B8zzVgn",
  "key9": "5F4UCJgEkXJ6mNJ1AYfVhLmvzo2r5jssKBwu2Mws7qZVKZvWHTEzFaCMTwufrqQTSchRxwH3Kx6KB3pDLP57tDq9",
  "key10": "pormqeZbXgLhdwcb7MMUwc8ryJh1mpHoh5V2PYqUhydP2DtUBrzEyeokxmRnKZaDy4o35tnjPYa7ygqzh86Qbpp",
  "key11": "62t9diY89GQFjd51zTbGXRZX7vkQA6mEqudhf6GYrm8Bp7CT3Ajn7Cd1CfxUPAGZhhukKdFWx82g6ef9wKUfuuo3",
  "key12": "4spiwTJZGn4CMJiZJHmvVEgHhy27vszFKr5LcSL37QFxkrEnWx2xNddtatHqSxjm2d3diyv9pmpFB9m8kw5Na2kD",
  "key13": "3Si9NA1a2dNDuUc4AAkpwirccZZiHb9xXVpekPik31hmYeKZRgyDWM4YUEhLSa8TZmtLDR6tkb2Y1zRKW7md36QM",
  "key14": "628NaZ3NDuXdHr8yRscKyNg9zhwSrPmiJsmoePdpTpJEYhKRP5NmZ1VguAi7U9T6QDPVcft64BqjDEsy1wN3KSK2",
  "key15": "5jrh3PqCzyzwrd6vQxNbxqbB75pZUMnyjTSkbVzkz8fCfNNpAToUFRaXYZGa1MVFztQQwtMgLRNRdmAiVYujDLcJ",
  "key16": "419ud7FSSTscrpqoYr1aWXEdqtyCjmtHC55hBnmvxRQi7DGeUHCpdkorNT7mF9McesNvJPwz36SBvWpinAU9GMTt",
  "key17": "5uk9bTeAJBqCdCVrCuFqqLk8oAsBEX2eBMtF8QLiKuXmUR5L46TFF4D5fkLNNQhHQbW1UUkCz9xur3eHXH4E9KhW",
  "key18": "61z5iWuqrQULfGtrVztkrJ7NcP6iPTXBNQzJjT4CEoVZyvH7SiiikZLjhhVwNxXBQe4gPQAtiwiRqrQHrjKymfe2",
  "key19": "5QD7hXq6rHwEd7CfMVk6TV6Fk8zF19pzxYATM3GYEtydipz8bfimCwpeSzigV8PXw2sif2ySvPpaw5DmcBCUpNgD",
  "key20": "5aVAR4qpgNR1nAXkzDw7DkrtcFLDrLUnnhbsdjuxEfp7Rh5RP9sei3gtpuGr38WxxzTgJ3Hc9382smnRsz7tDuWW",
  "key21": "CYpNDm6LVp146Qdjrza7ozkU43Jr1tgieRPwSG9qRtuiiANZQS7BiusgbTvhwetMSki2GYwm1Ktu6ArzhApA5Bi",
  "key22": "3f3yL1vvTXN7XERSG12S4GL5HuZy113vCVh3wote6A9gN9D6a3GVRoCpKLL1fzoWtuSxUTu3kiTXU9syhtKKiMTf",
  "key23": "WVGKxu2BTwH79R9qUX5k1NXpdF97Vjbbe3eD3Fq1mMgFmxZgApNKfEuyrstLjei5aLxzpdFbcXvERwaU1sc9p7S",
  "key24": "574NMqdfRYmYyxFaC2wjp491m5EaP6oypUEvU94AuZmtnv8szBgQ8SNwtfCBdG1meFMSoyVsAwaCgM6u9oH8LiPG"
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
