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
    "2AEbiYbv3qtS4roWaV1E97mqhnX4paQ5q1zzewoSWwYi1sZW5p5JstEnLpejFQdhzkrKFHMupWFRR4tmnrAgixuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTnHRgFB9cjB8S4Js4x2cTQA9pCrRXgX1cxYpPVM62cXBZBHKTwazxV373iwunkfEzpeoGhhK8hLyWQHv87kKGJ",
  "key1": "4tVS4csXphrZtzWg1j8xuxFmRimPoh4kojB5nE5PhZrCc7RnDs3fReXB48zt3M58b6G3qY9geyEjsB1MoDmcGhUF",
  "key2": "2CuMfEYqGCuk9mNPD4GncHhTVV5Jmb4SKKAQPD7yHtwwdgZeGcHLAUe1xBchoYfbVbaV3aPJzqMqo5t6pJm29KTY",
  "key3": "4JCoSNVW76djcRkne7YcnpuSRZgKt5S4ULZVRotoB9RHwv42NXwaENCqpGEqdZYkM4DaQsZQV3NV1xJ5RdLyCBDP",
  "key4": "4EXVMNcKBwfRKbzZoomTTwiDh2u8WFScHC8Y5ZXc8ggLYsToMNaci5SGzav2nhGd11eafAqYpRqwHPuYBZTtbsmj",
  "key5": "5ULUQnC381MN29m6ibjABGfKb4RTwfgN3ec93jK7sxkr4ivnMfA3k6EiKp212qbsBgknUzSxUYojKpDTSGzaZNJ6",
  "key6": "2WEiPS9CHxrCKCBtYKLTZXix7s7XPAX2xmHWyMjTD6LBArgEHvdufADmZq31ZCgdoqxvRokj2mugnvauH9HYdJ6y",
  "key7": "5sv37qmWr3KAnRh2FzxArAJCjsC8khK1i4uMXyq1aHxfNZriddfbhHxZPdNYzGHjwroxuRZ43qf9LzQn1CCZ9DnD",
  "key8": "3M5ZsEepg4Sz4R2txCEdG2sXCDLT5sqgBXad4DcXGrxGjkiLxw5QcySvhuc8H8VcqohMNWqzjHtVjNFfCuBvgHrd",
  "key9": "n24RoYwWQFMg1J5WWmMPWv4w2JiFB5YbquG7s4dABEhnFVSFaGpwr2SsSGAVUa58uj3e4h8s6YcBYRhGY27jbzy",
  "key10": "FMfMGw5UEQnbsWQgaNahjSqGSZhbmZzjRCpewYpw7j5F6UtnVcziNmrTocKPKKDjrnbrLM8aM3bubSnvbFBxRaf",
  "key11": "2NYFkqKUvxoSXogFqvjFK3qKPeC22QmcpMHqTHuKJGbc9qYTsVEQ8iLAx1TkkFM6P4RfJXHWwF9H1e9KsoWHbtA2",
  "key12": "4RuUr3QttDdLd7FhVTrmUf49VrW5SAfgRxrXNsxApY49mG3VGxV8eQGTv4Xf68pjiYnfdfgx17jutreXYp4nuYDH",
  "key13": "pHmSmvXJqxhSLymyi4v9ueAaHhLjsdCg9mVL7PbJCDRuAf3AsVh4uBZH3r6NXy7EqDrnZ16Tp68yqUR9idRNR6C",
  "key14": "2sbEGKUxSzMtawrQdXEoR9u9m6yyXpJNFhLEw5mEDim7KvqcSuqg1NrDty6xfc5LaxQdjPae5VBfa96zA2Anx6kM",
  "key15": "Fv3xqRp4C2X3iCChrFUAoLYNWFBm66ef934vqETVWwWTBAFv7qP2FG7Nq8Jijj2cfKyKoT5RCHMUa3Wu3bMmJof",
  "key16": "qnHVcyP384XoaNLERXLb21M49cF4jXQV6FcyLTxc5o3DaQxbrqBjPdvFCJQFTDBTWDUkiFF8PN97de1ATiTPw1k",
  "key17": "2N2xs1pBjAcXDNwGUAxXJKik4dngQ1ewxSKLK9yWFTUYPj8uEPYrSWTR2BdKiStCM7Kv5chdVp2iUfK1vYoVicwT",
  "key18": "5pP2oUPZqCQicW7GVwmfTkAoLm73kSqxRkQdCRJJ4YYiDJbDrN16rKyx67YugWdm2tnPRubJqtKXHL1mEENVHUCx",
  "key19": "DEYngAaapzqb21yHLU8ShBmKHbuCZMzNmRGrq9vBh6ia7svw4MUYZ7ojjpK4BgaohrpADbf1w4Vypw5GHFgCuHH",
  "key20": "5EmUpcYAWwbo4FNhbL4cpF34i7QCX4EL1r9NJBR36SsZdZt7zBpa7nyN7bHAapMR7xicAhhqgSQuj89wNH4urCkw",
  "key21": "2ks24XCxLs7RSX5yJsjeQnR7GJn7CGspu5J9xWgy6teFJtviLfxzrNEVqdBgji5bY8MEFmK8JhFyDmVk6H1pein9",
  "key22": "4vp2XD4qxCuXwTR7JG1xSh73FVHrnFSMYviAfduvTJwYy5aGeETfqmC9HVSf21UrShHiha8VbViceFXEYEqdqXXg",
  "key23": "AyTn2WWNcAbnSJT1Y59yrufZdMmo9YS7TS2UQCs35ZS8DA5cAwx3AhpY22tVpR5VqJTBM4SuCqNsnHRxGzLHnz1",
  "key24": "4DM9hEWjbMRJ7VGme9GKtH5gRXqnu8mFsQK1FUPX7CkWSkHi5S6xPodFmkwCuF1AmsBdo8zVeAn2UwWYLz26PhDA",
  "key25": "4mEyZDybfHDdYpYHbEkDvHc8ReJM1PaNBW96fY5kjFvhSv146hnWATJ2V6C9x1RP16KXfcFR2H2xoxTDEPQiCVJk"
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
