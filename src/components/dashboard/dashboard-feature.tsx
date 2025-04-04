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
    "5Vi2hJU7tQVJSBWgZm5zePDBhTpADNyxw5q32pBwtijtmqUBPoi54fSqXvHjSwoyg5wqxTBNz3xwGP4jKAjjx5QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YygeMqXRv7r91WWh7PFXHb22C2ntbR4yppRUHrdHyQH7R1SCp71dQyieRVjYBQpPGog8cWMmewJaCfUKhknkEz3",
  "key1": "44XZVHc4yRggh3JMyorP6Ufmcej5QMMs1hPwTzBxmGPZ6AcbPXDBUZ53CEwNS1QJonXbrnQ2eUvcbaov2gfKnYux",
  "key2": "4eYBGgbnuspSbgFhnt2y6j2a6oPp5Fmps4hWZA7roZ4FPEEAMymBhFAXjoVWaz7HSZqndzkmkPYWsuDhHgJtUvNZ",
  "key3": "5b62tGtDtBVEW5RAziSLZHDQDcuXZJrYE2U3CBp1qmRLg4UPj2f7CPyw5KowAZA6nxJgRX62VTsGWXQTFLKJT3wz",
  "key4": "4k2qt71Y5Rn7t5B9r6PMavoTkgtqEeHqdmaLGhvZ2Jme1nia54E2WhqZWC49knrSFzLCvisgSeW5dpusRyqSKFt6",
  "key5": "5drJXQYZWYptkXg7xeswETz7ECkiRiMi55VSi9hBe66Xkamx9PqFCCpwK9s93vvXVvxSpM6h5BNCLiDnK2SfCrLb",
  "key6": "61z4yv498Rdroub31gowSQUAXaV1xjwF7GooYqwqxDDBjgrDiMJVeuEcYuGmzfaBz7QpYmkkrgnNizZCqQwV1zud",
  "key7": "2qeByPPhpoRwJmcEt9e7mD3KozJAsm9Zqmix3hgXPzwBzXWw5QRJkNVFRPtgtLX6dSW9izzUWjHSJHTd69QxKaBh",
  "key8": "4wmxdJFdTeKKj8FaDuqkMErSzcwV98iaonHULsA3hqEbPmwikJv5hsRBBFsKaG3bDZ7f1GiPTbBpWWzXsRm94o4f",
  "key9": "2VZJPj8g9Agtt2HpzT28JnmeiKpPSxqSrX33vYPhiuiBTFz32PyZodggXw4VBN9iP9sm9Ws9WqRom8hERwjXZBaz",
  "key10": "5Zj8unX8idZauujKdVSvkWyw3eYryZbG9awDVX5bWRPMRosdpz5mU7iXE1Lu2SaEXVe4pQarVhbrjk5ZhNQgYvWP",
  "key11": "2AZBMUkA2n4C8xMKfiujsiDXKiu3iK1DQ7VNxbERQhefRUtJPY7FHk8dH3jDt2HvutK6qVvbS2eWhKPrho79sMhV",
  "key12": "2CneVYc7wEBQgJXGoT7T1UeMKwzkjoMsMBTTZmjgCsWcvr3nywvsuBUVnW2qDeX9edSbXXpST1FoEF65ngU7u1VP",
  "key13": "3SqxBiTbsKzi3yEAcypNaqcSDzePZkRyePBYQq7KinC7etG1KDFX2Rw5YBPFg2C3uT17x12mCKohx9Dx96m9Qx8x",
  "key14": "3mJGH9U2jHP6qCdbbfDnGPcqiNLCf2uJkKAp1EeVnnJntv942FeWEvdtvEJfzmT548gNPMmWQjn1SYzmrZ1wh4nw",
  "key15": "3WZGc18sPShdrWsSVTz4yXZRCMLzHJigW1BwC7F1bT6WDaAAb4EaYuVMVAbgsmkr3C4Z1YsFz6uRokU7nTHpoczd",
  "key16": "TdEKUKWqNw6ZGHEStDK4w4BFkJ5pJTLahgCUCb9wDiSWsMgeQr3WL3LTg7FsehRZA5zZvSFJcBKH8BJdc2Cy6gJ",
  "key17": "3WyPdA74abfegXmKDhN4TnWMm2sjKhhAP2LEQU9HtT1PjhAH4JfBXg2T2qLkBA88hvM2JkgBHb8tYrvzV3Suvg8r",
  "key18": "arywQ9KjcKaHjKZFveK74zcY3AQZBWgMDKb7T13htDT6wWdQqHcBCRXJA4wN46rkzjbA7cD7qkivv3aNX24G1fq",
  "key19": "2XMDXyqt557GmQE7oC4Y1FFWnbFhXPBJzvaWBYgoqf1oA6X8WiYMSLRcXTzoXA3BZjkw937Fx7ssprzwzgy9bgee",
  "key20": "5XzTgZFTf8ksqZF99vhXAjs8nqoU1GPDwZS13ob9gtW9gL44cxzNx5yYG5kgeFJsCDWoPCBYYhqkVkjD6RyPBgWG",
  "key21": "xgYbM2znsTFQ79gXMwWQ3nWCvxG8zGttsEKaYxDZBwqhq5R1ETdkjGnPcqJD38dwp4UZytxAH1HTrtg8ariF9u4",
  "key22": "2T3UWFj5uk4EHwD2h9mSGhifCk5ianPnbP4Wtjw1gHyZWnX54XoDmM2p2aj5x8Z7aicGsZj9zzQVXqbaTjoeMueQ",
  "key23": "4ZYNijvvodKpcBp6RNfeXssbiU5YFnQFLzGhy5o5HntQuDFSHDDaWGiJtgQk62GLEukzqr5dnhATzxHKBqvcTkN3",
  "key24": "5LxsGMoFjdYmNP3MeaWDqoPwajW3sxY4EGWQWfqHCmDqRBV6Ys1BoxWALU4chXBeU3JEG7Ky7XhK9PhLJgYhDB33",
  "key25": "59231jj6nBynmt27BTvFgGcYerkb2Cj6PDtjawiGViigZLh6ntrFvqtZ9NeHnzzXkppUWPLr3CJZKNzZRoBvFPAe",
  "key26": "4xMJPHFtL6M1SaG8eztrRFHHB6bNDsCiZa4VcgZkrEx21GqJFPD79q5R4HVvKiAGk1VrxgCsQwcMYyTK7GtxEqGh",
  "key27": "23xGaNee1U8HNRTtEXyrZmCryBGVp2hkSTqbcohMQ3BgkB4NNTXZ9VnPjtTkFPHA1jrqZYW8JzY2fB8HqsC4sRsx",
  "key28": "2PraRdYvoeZAgA3C2Vsc9hi7SiwuXF9dgmeJkQxfe4oaXtXJaK6HgkF99br2DUh4jhekTn1XC7nq9r5WKoCtXhM8",
  "key29": "35pgbUgrf94tgxfd2cvFnCBjUrpCZ5viTYP7FK6oxMknkPyUabpCpkFwFvpGyNiBoWQ6XHLvJcNZN1PeVs9K8oyB",
  "key30": "3K2cpYE8N2tZfBCVpkGqgG41v1oZbXW5dC3aKhERxHLUatoKP1uVpq9fkBErMC2U4xEfRkVtAuujRMPHPiGqaV72",
  "key31": "2SZyKQh9xfYyPAqQ9dZ9PAts8t7v7ZiBbaHYwYFk3CTPXeqKXRGFDMazgSKcWjXsBs8m2mM9CrxiRBLUuXP44MUd",
  "key32": "42q2oMNDsFCdgtZzR5hzXbmYRxNaZ8CxVHS8CX5PGmweSWhnBi51YjjzStirPcgW6FLryEWBT6UyYJYVChNjZa2C",
  "key33": "ufVcJuyL6hAnvf3gAnNvfnUTipiYogiRa5qdCw44f35j7Wi7QM58QGYSEWnwHHGFYzPW2TDvZoTmr2oL4NbuRZJ",
  "key34": "2CfLq7UMhp3SmSyd1t1Urd73LHFRs25oiiVp5jjM4eogx4szEYBsxYtRCJEQGENQCWH4nRBuBnzwaEnVjRadM83A",
  "key35": "2PkQsdPNbe1D639JhEjT9nq6HbwAWnU4rKqfgX125GTbGP9dx3vi5CAD6Jjeqj12zsxQ5EVonU9xevrfHu5tbc7U",
  "key36": "5Qn85yKnURfpH1NARE9ePBoDRXMjZV1UBsyTkr5TeXiWbRrGvHUKZ2ffy35cZ3yXoJsfkTcNT8iYtdaaQJZ1AmzC",
  "key37": "FTcGW3WjPbqD27reJRGiV2GkbfQfYRozjK69ngXne51MrzBg12crdEp8rv3f1Aokd9biM7iX9BPtHg2wdHwbqyv"
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
