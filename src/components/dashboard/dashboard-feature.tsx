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
    "3ppSYD16KcrqH1FiRQbn7F8ohWxdMaQTswMqodSBZMALS2obhJ9XRYPikGatJ7zda5r8a8t37v5oHimfDipwhRJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7tti1UvxbYrgQh2cMxxMekz4py7jjPyWTVSpdDG3dUxqXE9Sw7YYKDyAdoRoYDinZYzB4vKTsfPmZ7GvfVtWmY",
  "key1": "UXeBnXD2XSFNJ1FiC8BD8KtrWraeZbpUqrykuqr8xJ47SMsmSS6xHGtf188amsMk4jqbAcj1ZoiqJVuDfGhu6Uw",
  "key2": "3wP6NS9bXcmA4yajppnvF87Aq9xdC9cmZ7Z76GLAoyuP3dvDjcrydbGYHushHWuagX3KrmYJYXSEisTTiPqwRdv5",
  "key3": "3NYKZZ9zr8Y9YTYq18Zmwbn95hshb3pBJS8kNHfPYEtJq6jSNt8DuYVueAi4h3w73oBLEw5ynjSkA9yfUAnHb36r",
  "key4": "uymiJKiswYuM9ayWHnaAFKbQuAfp3w5gLNGADFUAogEohMNzgXftVvPrNiTg21n3uXJf4B3VG5VGD1zeR7EcnxL",
  "key5": "3vHoMQo85z1tV3Z4mBZcd1fFWkSsZPFfVKWQ5vBFRLafHfrz2DgMDPG67Y4rL6FhCRqE4Lwav95fZE4ZLqfB9Cup",
  "key6": "2DxqYUAwkbC4GKzPSvYQtRV4kd9VYWYaJJTMpARGLAxgniVHHhdoGijETKW6PLFg6ZnRJ2Kh7PCfUw7BYCwdpVKH",
  "key7": "e7DBhbpbZKPkBC3nvGjTcGiQTUVZbTGBjL64oJizQ6SfBoeAaGLomuB2JTYXPHi2Q1FDfLG7KBC5uo1YgbkXWtQ",
  "key8": "2rjzH2ut7akTrRaBqCcAaYdusANts89cQStUd3CQfK3tgQBvy6WHKU9sYpa6KmN8yL9cC5GVPZnS36qh1Cnobej4",
  "key9": "54bMiW21av8pe2QQMponSGB6BhfwyHKLqLmeKEHVv16tQk65tYjGwz2iwuFVRzz9n89QPFyYaaXbGxkSMumXTkWF",
  "key10": "3LBrPu43ZhTBU4xoBNr5qJGKcKmGuxerwAqqfXPSwV3m1nPQVhhG1W8Zp5rz991YJsTf2C9MtJhzvXzKxXH5JhFa",
  "key11": "3yBbt9j9mZvdHhnMS9AxDCWahn8kBPHycSwZZ3q5mufyCnR4cLZgJoPBhy9LATdMwpQ4gJ6HT6mHsfcYRw7P7cTu",
  "key12": "dnRk7qGELheXhhWGijTxGdBjqHfFSDxDVVZ7YGakTcoPQEZJBSjMbM32jdoEhKpJWrtzTMcepYPZAbk15jpqZqc",
  "key13": "4c8sjLHN8HcDafGJ65ZgBsj3UY61m1VvcU8doNyYa2BtsNSvz6XPL4ydL5RZhDxvhzR4jX54jxbuv8hCSQwQAGGv",
  "key14": "VRo7zVkb2htVbqWyyUg1cxJ3nTMRxJVNeat7QjmRG3qE5HZcQ5GXWj5rbGwkpPhQL6YraeN2UM5AFfj9ECMdEYC",
  "key15": "5D5EkR86hf6ZnGUajQw5y4D9TzyfdwRAaUXbBJzycnZGWN7EZdhkBEUTFrZdBSiQCSeVrkR5QDd25dS5qfQqa7jY",
  "key16": "5DYQWBCUEfkyYbRweW2Zd976yg1yoXvZXCHVa7BALzrUpxdVXrckarx8AHjT1AcM7MoxFRpmZwJNJegj7C51eQp1",
  "key17": "4DsFXoYiC861NgQwSYnNJCYRderPf4ab1vDpLuWhUAqrCRpaXQsyfF4TwceDorzobqvm7mZnvc4AFEwRb9mkgkoS",
  "key18": "3wvtCCqLV2jTbQEmLDyUb3Q9dXKQH9T1n4Lp1dYr73QwiE1XYfVX3nKAQ1Fo4i2BMd3gWkYhv3oFTrxKGVNe1rZw",
  "key19": "puRggq5GwrBVzutQJyhJ24CMg9SmeEHk2FS5WQdwVEvJW6HCSkikdpd9NCfpDUCrReqGHaJ6eM1pwdK7zsBdawv",
  "key20": "5yRHWBwp8PPP1VXhJjfDrYThKy35rjQ8pdzdfpMeh6sU7gD1zeWLDncLbEhJvzDQncAxCS6CNHyNWQGSsnyN99Uk",
  "key21": "424SFfub3XjsLLFJ94SEXNUPj5X1yskoNL9TLCpTChxedsTam1hVVboie7jH7tinNDHWQoP1ARxd2Up2QDtk1jVw",
  "key22": "2o4BUJc58NM7LuBtUpYo8RNYnZU7VCxFk9nLq7UAd1NLdxRh4ApuBe6e2Nc9659EsfpgX7trHdpV5KdATp7HDw5k",
  "key23": "2C9QCr52bAioHiKa6qjfxqzwpmF9dDPkL3cXwQJiFPJ9vLDzAUVLwygmrNurqnyP2AT2EQbZnKodsaLhJm6hgLrw",
  "key24": "5Yn5s4KpG45zbfCkRqrCfWhAp3AWEr3GDm8SWdqiTaDwzoDbiopCoH42iyGUvwhLbdUxBXb4mWUmorUhbNRZi2LE",
  "key25": "55Ktnf6cwtAG3Be2YsVmxzw5rhiR9AovZcT8efreqbSfHR4cxAX6GFkZ5FZK2CpJurgK23EwqdaRn7omKmmuJSCF",
  "key26": "4zbUFNrdUx3H6QCQ5PE96DznjVUhRZoYL4BfvuMj5276a5WRL14ECcEasUNqnjNReFPNSnUK5eQ9vn8H47Ez8R6y",
  "key27": "3t3h3MKjUES3KVpuqn8FpWNK7F4xjNyFwm4v4dP6zjjiwSgk3eC9KBCRMM7vDYfQ35Z2ySgjqEyTvS6JMTUCtn7P",
  "key28": "4se7GQLTmmembn2JdeKW4nMenioGzGSufcYjHRHHvU4zyr87vy8xMhM9ToFBD2pJhQLkLXye5yrBrbfsJgE1JziM",
  "key29": "4z7iJ2zqJgo95FPDmn6xskRamWLfnTsEuaELsvnbocj2MeZvhKqg9NtMfbiKNihXuMkQUUVwKMBtkZwsrgmSTz5D",
  "key30": "4hif5BUNKM34nzcjxr8ByahPWJzh13RaUcW2PzEJwmPX6j22K5YpBMr3aTqTznChTmsptpgnopvB6B8JM2HhbTj2",
  "key31": "5gzg7ArVYbediKtKCDzh9HZm3AGZB8gQJ3UfFXExs9j3H5VZwn7CZAataz7gwTVrMk23XnvxuobvKoGxBE1KaJi8",
  "key32": "3bV3TwMuhv6Kqjxww6sS3AWVbft7UwxXAZ3MAZBMuZaEJBFT29zQwhaWxp6b55rELLweof3EmkBWqbgAkUPyUzWP",
  "key33": "4mySeppLBN29CZrR1hbCy2b5PR9FuyJJhSuHWDTbCDrUE2BDZHyfa46JBBc3H6aCk9uakLxzkWDe5SW9LsyxMCFi",
  "key34": "2Cwoj2HhPuR9pxYQwKuc4hhEfyjX8waqU8cEHew7ks9LpZS3aYLV9Hvq4pLiLhNfafGqNtW2ruat7HvmQyDgKX9G",
  "key35": "5tmzMwRXndwtZ166XH6FoUeQfXity5S48NFRwQFqTYUbiozT6QsRF1CWxFZR2CqSnVqazAhSRq4fF3cxiWBNEgAS",
  "key36": "3joVwuWyJUkxPyL9eYt5spmBSq5yZQznSnYGuV6mbuJrFbMQUYqB22ToQTZrf35Qoq945s9ugUPLbnLn7cYr3UHW"
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
