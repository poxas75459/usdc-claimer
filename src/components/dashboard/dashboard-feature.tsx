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
    "2EX976BX7rLBTAtPZsdXxNSbnPyNLZdqdggZKZo1pMJ1ZQHGAE16jzsVNL9PMbBaDa7tqp4kqQnwLPFAerv2tKhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2du5Krua1Z13FzcjBVToBhm76TEtDoSd8DUJaRDY4A3JFVdnJjByfPJ13KaAGuiNTdUyjRpQKFsvZdsAmWX9UEFC",
  "key1": "3xTmGCenR9PnTTwm4DabDRy1gxfxWdeRvLfHNVZYDp62MjhfXvfefPRCoANzhtbXdkrxhrQUxyHEoQeboYpn23Jw",
  "key2": "qSCAHofeEKkJVke58xnf4JH4LSyeQ9MDUa4cRBZA3MMKq3y7UrkY7mC8SxsXKr6fPG9DTLnN9BTDUGzpnorS9Xt",
  "key3": "3nkJ4pF92LKddg3kBcg1ckTHszGk8tAtnJSCAXmLw9tFHVekg7JvMaJWPijXoE2UxdKYnfTu1GFmczK4krSnUDka",
  "key4": "3rSakJmuHXDjbnKxP8Ni3XJELi3svvx6bBQzHKteUEwNswgPwmyCqwxp9zM8u6jzsKqBaYqGD2qkwAYmt7oH8yDX",
  "key5": "5BacyZNMN3g1CZpnFp841DReCQJqQU5ZFwwGBULGZext3oqHG7eGdFZvg231eTT4dEYGp4a2thQ24whEtEefvFvM",
  "key6": "38Hu7932a87VUedcBwEHTc2hDeVxP5cSX7yKjFKw9iY2qgZVqYKoskTmro5gxQ4M79Cq23cqrecPQEe54jP6e6YG",
  "key7": "38Tgdd9rAZxHYCVG72yfkAAi25aoDVVccXffVKnHsdbuvqfTFgk4vUT9wdjU7UJ5WZiKhUCx7BaUciok39eq8bLb",
  "key8": "49DtdWn3XQ7PsX4kd4XgwEMty3h7drMDkuD9S4h4eE7HLEHsEttYnNLbayKwhTffiXJAZh1X4cH3nGqzTwihn2Me",
  "key9": "5YSBf4NoU6Cn9CGJ2enfedD8gTcD3roG4bsTu97E7pigjRYBS88vKWz82dskN1p412vQodXYxbbRi1mceqoArXvu",
  "key10": "3Ush1ekgLS5k3Q91eXDBiwSeCi3xnTruP7mEzio1fKS7HRX9Etoye4HD7YTBgPeV995LuYeMkd9FJi4p28TeVs9X",
  "key11": "2zFP4Zgc1dWr5HEA4Na24oPsYSho1zonZzsZoBzctqQB6knksqXacWqzbuGsdadEd9eMRyJSgnfjMuqdqVgJkJN8",
  "key12": "3Jj8DypD2i4i2Dt3NJP6HjDQTRDxURpBhNjtJvK89iThxWmzdPMaBiwgM8tC1DoK4DDEVyYJK3ehWUsFcczf76Tn",
  "key13": "3U6fVFCQ8Lyex9bXHm33hoDGNdogGLBE5s2hiwYGqc94C4pkPwiaL96rndt5RRdmx2dGKoSnLkGqwAtxCPY1cNoB",
  "key14": "5L1Ps8raDUPARgdRnm8B5NZBMkqxkYXA7AxBcTFHLZ8qLfG5FwpTGoNMjdBxccdy35ztofJ5zh4LPyJhCy99Qism",
  "key15": "4jmwpzBY21CMth77GNybt7wTTTihBo9qSLCdBURnsc56BdNHGDpZipe75iLhM2gs2eMaADuCAPEQZ1okyVkTAFia",
  "key16": "aZbGsgWuXq3Bw7PNFevWrmmxzYucy5KZMF8bQgCG2SbqrKNXJvrk66UAenT1eHGVduapTumkFE2ckdnAMVcqXuz",
  "key17": "2ULA7Uo1359856rcsw21PEZwMKNijwkNiYQp2NG5UTxNhoALrYw1icV8rUpTcnfnLpzGQYxbsLNW7Kft5LT4vewa",
  "key18": "53Pnc6MwwBvePUWqTCR6qKoJmNiHH4eCvta5xixqgfAJC6K2Z1ue44GYV7nxc6N5HJLMUhWt9EyDnNyyCXtEcZhR",
  "key19": "2sg5e2aBVcpiGQTysuxNHmGyq4cUVzauJc8Kn5CQQsjkW1rePL7N95ScUYHroVP71pLLo2G9DLArjmo4kJq4kg3T",
  "key20": "3nEs9mCJgPinHJ8oFdmDTHkP9yxTDLrBAcGAn5a8NodsM1MMVdkpUW29M72GHSxhgq5Ae69vwzRdmiuJKEYEG4mm",
  "key21": "5hfnWwrrpAmyUMA7QPKXE1GfVBK7yLwHb7NJgxdPtW1d8azeNdV8QHZuTo5LjahthKvyPB138De9hVQVTe7qSmHn",
  "key22": "4vmrzR2DkWNvD7LcM8brt9XWSzX8h7nhMb57sF3DPgnXMzLKEiunr6YKZmqhrn19oS1K4CoZZT3jPGi3n7Bgsxir",
  "key23": "3KaWJMbvYX8yzbNpdMEvXdaV58N9pzHj6NyMq3kaXVUvWqf1DBCEeSaYeYXHMcX9oCHzv1ceC3sA2nnjSSVGcNkH",
  "key24": "4SB9yKafCArUzMigqvD5reicQAbcinAJZLGVbPyKvBZRb6rygVFLK1X16SwEtSGhPocGMLe6171ubi9jMPpudm29",
  "key25": "2eaSAQBgLqfKLwugNL12gRWAQs7i5CNjAdr4R2yoRhcKm7eyimhTENP5kWyhKm8Lrt4DcKeyGEs8uTDDsB3f2wNj"
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
