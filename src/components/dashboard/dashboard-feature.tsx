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
    "3d53VM4YidyEznyvpodC6Xxps2AkXiXyjHBPagNA2yyeLCSRLRbgWzrxwY4tX2P3prQznr6szYJgS3gqYZJ4xEfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55EWFWbJ8ynuHTLZK4Sf6SfWkaRayQFrSTbTY3bec2MyGsJ2jXSBQKcU3nMKeFVJ7tyodnZwbGQnHc3sVHziVnmD",
  "key1": "5rxpky8BGWXaLjVbwE9gSps3vDsEQmuSarRTtakctg2FMQ9LtrJGeqWwW9mz8Q15meKYK5T1dwoRxfSfLieuBRFQ",
  "key2": "Huf6PFJ1aUFbHQGmkmjXJDSXbqGVE75wDiJ7goLbNEpAJy9qLJezVWHFHkuxVQocd8MtEcJJndC6Zo1mj3kEkJx",
  "key3": "577xHnDsTtCfvk5TAumF8HPyV8wG4bK2BriJcmJf97iwtVFsB6Px4pTmzYvgFNf8GkipTTrQHHdu4of5Ke3ouNiL",
  "key4": "4S2eHg6aQyEh7JxJU86NS6aXNbXtQfMyy8DgEp2awzYLT7phgUndCfR9MScB9MT1N8qntJeBCP5X6VzqJMARp1SB",
  "key5": "48aTF29msoAHqg2setxbLsMHCpJfmw4vNNmw8jGPRrzYAtuUprvsPCzN1tbEBFjbCrwFgkLdWQU8ykbHTTAP416u",
  "key6": "JPoMTXp7tfr7eUTh81scJSJh9g1g9aCBMGXgpDUtbgaHABXenDM3oUE6UwVWDwbtprzMz6yvxATqX7L6s9DFpKN",
  "key7": "28ahvp2XBWq3vtjeG1S7LwjWFwaYRHx9Bn2cGJRFeX3ka7Pa6AgdLtCk4YJNtmV9RWB4GbwinQ91t17bGqKcVRte",
  "key8": "2iRMkBLLR4vTVwdqvoikdNTHaAaRLJF2HdGAAb3ztTdJWDGQ5h9NpUu4Tv27LaVJg99zPeUrwPB8uNciCGZTcPVY",
  "key9": "3qsAPyF3nUeGNseYeNLFL6hdvksdcGrpVB6CdVhhKAEx3stkXQeqZKdEmd6zqT1Cj8CgDsnGkprXWRbsdKiZhHX9",
  "key10": "2HyfxxRA68Znti31bYR5BtuWTLpWoawNr4kwTpznrnTThCXYkkR7ZgPidrz38iNK67nrXfyb3zyjg37MbTzQtvJs",
  "key11": "5hXxsrJGAZa5dzok6UqUD4XpxEnG6wnANNHMEN6VFwD5pj8QFhVw99KzG5EmMLyiHrrqgTREUC8qNxGuK3FHr1Hx",
  "key12": "37TgZBzL2xTLo1igfRHqUsyoHy8vYJvGua4VwQ6MpAmqpr4ZNj5AD6KSdRAYitajfCzdELpmjrkgjqt8zVWBqV2m",
  "key13": "2EcGwXwrS8kyvXUdR1SWSXSRB3A3eB5iiYDTjWFpCpsiGkvmQMRL7PTZu1xoj2Czz8er37oHj83UciTjxpKrmDn9",
  "key14": "Sb5oskfMM7K1wBed6AT2rnNcDZWAZfnEuigw3KhKMQLDQjoaqHFsGbb1bHcnpZmfimC27NpjVhP3m6gZC31QmWr",
  "key15": "3ms2PkNguy2aiawEggtv6aRCcbmr2H8LdeZjEk4KKXGX6H1pye6XPGYegJyifFoSXZxo6uMQx1jV2JFsmzXaLyap",
  "key16": "2RfZQ4fzSCwvz4SmSCf6aEyy2NmfNsghjwconFWjvarxcAfuSoyAySYSTT732jzVqHh7cxrXJ6b2RRvYNfYUjUEx",
  "key17": "38bQhjzoBM4b6g3gGArM9gwKf4aUz1sCfoASG8G15RBydpJxS7cyGvwX2L68eDQeM9UoRcQgBGcbmYa1QENidVii",
  "key18": "4K7UF8peTR4aCQWmFQ2NEjjCLXiYm849AnMaxvkje4Zgw1ZAcDkXciuv9mZ5jJzDsggCTRx4y7w9nvTarYb6Xatx",
  "key19": "S1ZiymSJgTsPCCKFLKbEaMkDaqgWrcyH6eCVAvKTNtgWLSmsFFPmiG9mBNxTfnmjTLnq3JJkzaVp9Ef7tHxg6Mm",
  "key20": "8rVGL3Hbgsp6LSBhuEGwHogQaJNFrKc2EBbAGvSSZjVuP1MsLPz2ujPNqnc9zVii32kEAVqiufTcoiBLjtqu9wV",
  "key21": "yZKDvomMj497os4et6YT327B54ChoJWpznqST3GZuwYV5PDEew9ajY7qas3sXCBcy88PdYDK3Govq3sWbChpP7p",
  "key22": "3exaPuETifNxHmRsFgFmXb3HtTv2wV5CCVAQF1VmRdP3T71uNTNkAwyRPXMnqXT4RpKzME4QBRnhb4NMRZRx3Fbj",
  "key23": "wWBq4JXctujQNN2rtiQrWpZ4q1w5DETTXVXgSaM6tZ3pKbcJqbYBWVfV6vEmQJzQfWeiGN9rhpAqMcQZL3scFBV",
  "key24": "p3grwWa94PBqHMGmqbJn9H4gmfWUr8BLuqzYemiuZb2K7DNbau8cAX4E7ohZaMqPDHMNpGiLcmHwDcRcT3Js1o7",
  "key25": "4QDhCYZK2ADeqx9Q8nxTVZxqBokgqeRgQR7W7ooBzQoejTWx17EVLnFCnz3K7KnkgRHsbhbdaoVKXxaSNSuBWiPV",
  "key26": "2ZvYRzLo3T4wmYk6xvH7QmaMfKt2fFGgeeWAoYRifZcUmaKUfEmxKfA8cuYZgZbKxWSQdyFaNmCadYjHCCEiYZou",
  "key27": "5n5EdCEVtafCJvkN9DGuJn3aFDNqL3brWzoC8yfq8yrYKisnkLRexZBunFJCVNpePPTRMq8TrQEvH7pdsSPeaTzD",
  "key28": "63XDS214pthyt3tb5ccBRsvrhdwL3J1HafuTWgn5Fsu22BAjha1bnjZF97oXNTbpvTx6dAmkFuiTNPYrakDaxGMQ"
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
