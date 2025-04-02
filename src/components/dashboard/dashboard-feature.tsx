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
    "qzQn3iD8rfTfDQ8pT69YKQ5WFr4QBMno3ZJmExXJ2yy1s5kUy6J3M8dc9748XnmC1Svnb9Fv1D1vA8CTrn4bYPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppBZKPyK6hYwroKh2ruUEKfawJ5juAjUKH3W1wNEGfsjKY62KnSZfZ4y9GdfVx7Hu6zCf5R6MnzWhjB8srnnuoY",
  "key1": "5WGYUagKx4ChV4ZtpkFufKmuLXsZjarFDJUeoeZMmMAv1SApjo1wJtn4P2dGTWxoeq9VfvWEiKy5jyws82hWwzfk",
  "key2": "XZZf37WxbZjN3BSLsFBuft9Vt6CV2NpmWGYV6HUqTRgm6vdD63PKhjFCUJtTBPWK3ajK9e4jSMhoHpznpYB11Zr",
  "key3": "35Ju5QY2jbLDHMKbqtR9CCM5nGQRe7vGYfEWad5LP5PHkX5gh9S9X5LQrSpmhPot7QP1cQWsKLJNWVVMa7tCvzq5",
  "key4": "3eAnXDfKjHF9rgAoqyUC5yy7c8rmqvp1a7V4mmcgQMK39NzjW6PnxeotTkZLaKK9B2m6AWJcMhPoq8NymWAbNnQF",
  "key5": "T5LX5Dhy73J7kH8f5DbW1DJi9SxHy6GTa4FAbhWrnw5hGQEXxdPxVFn4xtFrmP64H2QKyiP2qm32Hb1kFfkjLy1",
  "key6": "3YTtTaKCXPwTtAAHx9wKqbzJaUWpotr2LzeVfCgb74CFz1ymwx4uJjAExjYbtziwsW9ycHPkFfwqhAUmnewcBeEZ",
  "key7": "5moeT3bQFbLpt1C7NwWZzQhR7cMMZkAXYPKCLb3JDQggjxmUTYycF6VxoHEHLaFRv68ayMDBqxVBtX6KZ6616hbJ",
  "key8": "61Sho41UYi1p3hsfM7Y2FcKQ6eAfsfiqn6xDG2c1GD5T314BBaeWfPWJpkuPQg3g1hDad8ENVECDfiNA3B2VPerB",
  "key9": "LyebRpTKPhEadXYtTwfrKNpBDmjSKaJtt7pA6ABPhJhY2nENXhGezEGpz56CULqHXUvYr1EZM3KXqaKUnsWVSDY",
  "key10": "vzoRNKvkbV21eU2BQs23p1gyiQXdzDT6ZpW9EXrfRpr9kq8GSwdjRwyUDStuYoyUbu9kTvXT5YdUKQEABXQ8Y8u",
  "key11": "3F4hgEdAsCMmo5k2T1bjwQ7jK3xoEfA7RVxVrrwQbeMwxkvaMcsKrD4RsEbqAs1HVSBswH7PJiaCN7heG3xVyWrY",
  "key12": "2ZEhrfbztXf1Fd6nc3S63ocpei6LYdt1WfSRGgiHeyTMuzEx9RLHnrR1DkrAHTReiDfTLKSSetNDkHEynED7Za8o",
  "key13": "4i9NsgQo5sN88BhPx7iZrRx32aQi8R2S3pijj2uieTuXjaL5a9PjjuKgmri5S9sCSGR5aqYneBoqnYqsSH518nyK",
  "key14": "2WDueCDyQNnQdWhBCWgVsXgeqiNn8JYZzjrFddGAnC8nbLLiztfFAy3fYJHH1RKivYjEc2CW162bjnwZ9UT1GrFA",
  "key15": "31tpCjCoTVQZNs2bQPS37UBWGRkSpzruEbEvtN2sBiG7gyFN1Azj9ERo5mAuZDhaJZ8ATTc2k9SepJ3cWZKGYG5j",
  "key16": "37vUBz8fF99gm3Z9RRSqTD1QbrR5iHmmfYPuHrpjjLYPTNwsepRkp5dLZyEfGqu8ggBdR5bTSBPq4Eb72SJTpQUa",
  "key17": "3c6UKj7bb6TjHYfkgKmpqissFekCj3xboiv37P3bscg5b1c2JWH3Rr1yPZvhCpNVLp4RcgibXdzRLBrULcQNjboG",
  "key18": "4NWH32qxDZzcw1qqd17DzFPyy6dQHEAXbLh6gpoHbzTH4JK4sxyENnAkYANazWKz84wXAiPRt8orfnDbG3zAHa6e",
  "key19": "4SKEmD6gHcBonx71PeD4T449VaZQ1Bt29hNpaoAY2NvPVZQP9GcNBytPwatsf6wg28aDuZrzXWD7fnfaKbMjgpeb",
  "key20": "5STJCWC2h8Qn6gpb7nwHAdf4gBAk7dtFuynzaKeVKCsLxa5TMTnzeT1NhyKnvj9rBG6MigcBS222scAsT7MWLY2a",
  "key21": "43NXDdaw9vF8JBR6a3nFTPzXGJRG6Z3xqH5QRfu9fiAMLZM9DjkcUGdsieNfxAs3NkUXp86RdL1WLAiU3QEdhKhj",
  "key22": "5XLMYCB4WeYQZmEPrttPYBABVqAL7smgcry2fm8FE4Vf8WutdZM23x8rNbY3pM5DNiYSVNzYjvp8Cw1SvcxszXkL",
  "key23": "3oWNWTTkWiffrg8opScLYsFpZ2Koy95Pww4wCUuk674uZrbbVQzEXs59nMCSrZ1CRL8uBKorWENExS5MSrvA1RWw",
  "key24": "JWgd7R1XnMPj5oauzm91UNXEZrFE361W3KfkL9e8SpHqMQKDwMmjcKJjJXBjUcR5Nn7SZKrj6dBR4sJHUwjAw3L",
  "key25": "2VkAaXHtb1KDfyRYzJLMHkzxZG5K6yN2TAJgENhp9FUbTEoK2X1tQjD2o2ynVMv22s1Dr9yMB45U1KkreNnykWyv",
  "key26": "xJus7ru4Dpc2Yas2yWAgr8jyuWH7WBDWnRUYkXPhtxi5x8B7X52Wikz4g7y7APtPMNAwdRjr44K3SW9cADMSYDX",
  "key27": "2S5coENSFEbUCsMPPu7a3X5N4LmaHr8MCzjcQGN93CQECE6sL1ZyHKCzShDvJjA1JwSmuAZ5yKKx23ZH5B3sVuqp",
  "key28": "4gvH8WxofdzkfeuuBwXQ7thHPMFTei5t1S8UpW647VuB1PgDF3grSTJRpQGgv6wQ8tMkyGjGCiie3eGdrYuhm8nE",
  "key29": "2ej6CNMZxhu6nsVrfF81NgYcb2RG53rDqJWSKuvvyjUruMtJaLLpEhGpHqrgGhZAUBC1U2YAdMGdM6MEAQfkg64C",
  "key30": "n7jL9R491wWm8ZNbPghZrHpTx7sYH1Wqi7GgLntfsmZFYGQThVfc8y1LsvMYotP9nj8XFVyg3eCnEoVjUCZatgh",
  "key31": "47if5D79dah9prwAZqrAD3S17V94VqTSCFz9L2hejwAXPECCgJK9ao2DRAWKKxiAsSXe2fyCvKqQNurYRQWMi8DL",
  "key32": "63MfVhsGxgi9FUQ9YdUp273X1GLQjZFqJKErGVL5953zSrtuPCZykNaghtUGSuTRQPMFY1fBdwhCEBrF65j2AVBi",
  "key33": "48xdvwFne3JPYAGBz9CNcz4vRbQNaGFyA6NSjunuZRaoxfdympYpeewqcyx39BP1Fyw5f25vA3EmKrSLcFxsKyz",
  "key34": "5xuaW7BfJ3sGdM2DChHJixHz88nonZhuMKHt5o1Mb7rrkqLD69QxojxEzedswsdtvNwkURfNMb15dzDbY4qNUNY8",
  "key35": "2FCCyifr5TfKjKFBCzK1ZRmGqPN2moN4M1pwU1VkUobhVcYiYhvjb2xKXhqrAHYEMF2AfPX9Vy354R2yyKoga5hT",
  "key36": "oJGRueP11NUMR41SC1HvTUiFGdjLhkpJagfWBCNbB5AuYJzSDYLRJnyCXVz8BDnzhohNXSuXKEmGTKwoAtpQsvb"
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
