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
    "6XVQKtFv8dGz7po5Gndrq9MK1VGUT1BnYZjUNAysamF3Yz8NnLpDKcnNMXYhiBcPbJhVQ5V4G7RgycnY74chMQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avVRAay9NpW8YwWXnsgQPkvtw3i7oyz7LBj3D7zkjZ62Am4BtQbE2DYC7WM8jc6FS85y1kUk26sUNLDCDBEcmZs",
  "key1": "2h3JNeU1tzWWzQN6tkNBfjQQinQL15xdeE8jCXdw2t3KSZ83GcGELBRa6GPwQ84F6euiSagsdbWjvREpg8Wg5snr",
  "key2": "5xSmgnHxAaz7BwraNhqh19BB2zDZBKwFm77gF1zeagdJwReJtqRnUF5VUTWj9GixiV8gNU3ZRykVBMoDZaX1EQEi",
  "key3": "4mpUGW1TpfuRse9GhyqPusHBD5xYLnAbTg5HXKPXQaLzB3xTMarZmdBdFSQefWv4VSNi6P25V842JGSFUqdA5u35",
  "key4": "26Sxs15zstLvfQH5YAX8S4m9qE8XAmtMnDoK8UsRX2RkgLhBEDUu4ZZJHmEW26GX3eMY21m5dJRTU2utohVRgsiW",
  "key5": "WonkZ5WxvQCVxh4TpY1BPF7E7hm7krb7KyDsimCGt1iTrf9Dj3W8ZuRbHkZPdX3gm5FTKrp58QaB6MZKGiZou4f",
  "key6": "3HBVuVF8RtbH2Pp6eWVcR7x9bPVDRF9NKC2d8em7nAZqH3KMdG1kayzus4SkR4re4s1Jqp6ZCC91s4NLY1AZbMqL",
  "key7": "3WMtyazvjzfipmMykJ8WH68d44E9nVL8Ju4JvKaq9fG5BmUtA5ujRAd28fKn5RDXaCXp6ENEAWMgcNkw6BcW1665",
  "key8": "5s6JH6cymbyLuEs6xjQNqH2Q2j7Szy7mKbZ1NbpzACbrErPnG9WT8ADMXCkA6qRJNqoSPoMUVdPZ8JEQXDv72bUx",
  "key9": "4SfQhdMy9Dse4jr7rnSdPGggUiTTFBJ3DHGcgevvuvfjXzqMJSqbDnb1vyrPDb8MZmpX3Y4zaAGgB2TmM5ZHnmRX",
  "key10": "24S4mxCxnzKSLkaGY3A14mBJEkP7prUNexdqZ19J87KrbDB2dHgUcCFaJiQgaVL4Sh6jHXfxnAQR1n879gn9Rict",
  "key11": "3dUD3w9dujugrinAWVCL19PtHKZHi6q7ejGc2JLTb8NRdhBEbRNa7VovJsxdF3PETCYesaDkS2N2E6XNvyWLzRvR",
  "key12": "5F6VEN1noYZr94ePkde7CzfiGeCUDgPbJ3RWmCNA8Bd4dmvHYRY1eLFqX5WBgYLLBCeMgV8SAFvxpcSH5w7FrKnE",
  "key13": "561cuk2Lxa8Muhva8MTgHvK6nG7CaYBnjcGEEe8BEQ947Y8MyQ5SjGm3sySsikHw9VDkFwQ2f5jA4tAsQQEtDHsH",
  "key14": "43dLz6FdQtmcA62Yup1Bp63Yifek1VZZTsmhzJXGazpdhkUZUpJ6vW8cnTfxGTmjBee16k6bttze6NiZ4gjs1X6H",
  "key15": "3PZgcZg7un15wkvdSLR7jD4addooFenpwJ1WEszP8yYCuZsXDuYCzxsQhePUgYqfwKRiQgL6UkB4C1ND7BTpQay5",
  "key16": "5QbQQpSwGwGKfYKoLMaEAxp9HMsXGrfv1NApnCs1QiYAREbymqxmJy1Ff8N8mKv9uCP4DWZmpim8FZHu5xZZzuhV",
  "key17": "5SHWPgWZTGWvYzDLdRZXdnLoBpppXBBzrC5eZSg3L8b5dKvqvmZMMQ1kn68tzdhbxvGbJsBK5FXCPLSZM8qyibih",
  "key18": "w97CgoTTqVTmoadryLf595ZgvWAnXJzCAwoPMkqH9TxsmFZdiDvmru7139nG3ydEZ6nrc2ytc96unz76zDwmBjj",
  "key19": "5q5h7yLDG9Yx8ZPbmgfR8KCjZEL11DFARGyReuHFip5kDHk91ueVB1qb3a3KXY3Qwn2wqN3tKFKAcWEPhiNPeNy6",
  "key20": "5xV7ArHg7oXn89Kijgw6yeGDdbK4p4NUv2tc8RvoCckDWkTxpPdgZPsuGzeMgRTGX5CaWu3jWmKJWyf1VzCoqM89",
  "key21": "xhKez9HtMYhkq9Dp4FRiNHUmUkXYTfBKed2m2KBtfRAqEjoeNkstQrY7NvzmEJ7FhSfjUJ8W7z4CDVHoN1Ke6eY",
  "key22": "3CB9dWrBFQ7oEA99rtyJvzeR6aHJ8rX8uimPXfFDtHemiRyb9HV31iVhWWmBHywPXtz4SVzMfgfMXpVA1UfT5BxG",
  "key23": "NJ46EvK7zFWzfGg1kveoRrtBQZi51ikLBYDG6JjCRQMKDhk39Mkri2pER2XPjJb6fQhZJgEMyhQP8LsLF5Q9g6A",
  "key24": "32xXNH1kbmQKXQ3w9ekbMFpW1tpvw6VfdwyUXbtDhhVVmHvRAdLE3pa9pNJ3JaLbpv7H9XSo44y9TKxM2C4Cq4iu",
  "key25": "28sg6S6EzAA5XtLebWQhfER5kYmHRMs1GWKJe5FLNtn5ZruCDxZmefFvaLGq3MGNhDih3ajxdAf3MkUYnPznZgsT",
  "key26": "enLiCZLitzARKUcyjdVDdb75FhRcdMNe6PVZHZNvj69uppB2woFNwXuGXcLxbKLG7HGmmHiCmv92DKP5w7jMWgY",
  "key27": "63rGdjzsthqsiUaQhTdqMHq3beZyoA6MQWPV6kBjdgDvnoZydSfBSRyr1R8vcCnQfG27ZcLZLowBcSbMgkSYkeWj",
  "key28": "4HYRWAouaNn9JJGCw2QiaXZwJiJ4f5shhmXxsoMnBAjNF8gQqJsinkgVJwwhddGkZVWVAkscQQAVmtDMPiad2kjk",
  "key29": "2QPudwkc97aE4kUGRo8gL65BexjReW6WHbiCKp1JMbP15XtBfSLwE7Xra9VShZe88g7hxopqomd6aJUb99tRSKBs",
  "key30": "3efJJ3GvdtAPHCFDKA42K9fRUAU7s57Jny7gkVJ7p1vdtCKSgp5FSxoK8X2gyk77p1ANqxoFZYu3fajRtAi9xFgc",
  "key31": "5KWFhYQCRKR7iRc6JLMs6faBeVCDJ88TkVTbxyUiwEW8ezjSUNRyn7ufcBWvCjzcXQTJHz3VyeGvmkCcrRPAWzDu"
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
