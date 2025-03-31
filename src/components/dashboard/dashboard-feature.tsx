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
    "2nFdZmbDviLXqfZcHrj2C1EK8tjsMv6Sis6BABfr8brPHJF8xV2qMPkMK5TddtzjPY5tqMVmxx66BpN5avF4noBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbuG6zt3rWzABhxP2pMpJSeGuZtRsrpuxUPyxZdcLZiSBGbsCfq98Y3bN1dx19enPNDPcy5G5W9CL4TRczfxM5u",
  "key1": "vmsVKRjt2KLzx3V54XnwjZwiX8KVxwPRGTm9LZYsTKNBwxX9MWwmLwUqVmHhKB4N3WWxQUENeHLoB8HpJFVHBZ8",
  "key2": "4RKLoAqggFMLCoaQuxdXbEuj8ZVVsmNeePua8zjjmcPwyvkFbGBLCvRqxqnUbcxx5dWRbyvfoWZWEVwZ7JKKm8N5",
  "key3": "2rYeLGLKSitPbRhZF6BQgxvDGJkCQVz46iU3eixjguF1XyGhQNkKSW6yKec5zzyDRna4iPN3TneQxJPb3dpnvxwK",
  "key4": "yhZbHAoXbwWB7twyRmdAhvpPXVK2g8foFRcRBHz2B6eCwCivcjSwqAzRLyHTUBGTDpmBh85YpYK2w6frYKSepc3",
  "key5": "5Hg2Z8LVWRaXexYkLfi6fgDwBVHVj3psGHGrMKYa8YuBN2c86imMWEysvVgbgrsVTgH6GnGaXzgDsMQvHLYNzHAm",
  "key6": "5SG7GrMJ1nYb9Hw21WGP5FFJVv4NXLL67tCRNcaew57z8sfqNtFvzPKU1KHb179mvFWVTJeL1uxwr7BLK5rF8Gpz",
  "key7": "5pjKhqtTpcC5RX9xrira3QwWKAkkhKxehfTcpjry35rHFEwzz182VwFqjPw5RdjrkN2x8CPTPT3TD6HB4SYk2j4d",
  "key8": "tHEBBYfPRZuHQfTZETvXeXFZ4qzAg4zjeDEsaKtFGmZzJbeCZZUY5shH6i9qyKuDn7ntn1m5pLfeE4kex8f3LFm",
  "key9": "44XB9Wa7ZQiWqBajvjeJ3CmwjwGJMpbsqDADVo3XhWk6mZvQ4iUCYLeSeRDgGpUKS5U4XgJpkKds2J5qpnNC8WZS",
  "key10": "3twNB9P2YTfHRzrtUM6FoSNDhQF6v3kaExwpeJCaicUP3BckCgNLcfbGUgUMJFEbJudKpfoEwrqxF9ouR7k1f5v",
  "key11": "2GyiTSoSvW5PbMdyvAFNAMrvYjQtjHR2V6ss8sq4Mtyeq68sRRfGpmjTzbMad4ByJ11UMphLh4uk4HAaYbsVsvLF",
  "key12": "4oyTPgBeKTVKQGzHxM4qFFujLZao65553nYnGMUf8ZPc8RhX2Mr17MsiPtGemexhok1W32bLrQ6HUX9u4BtK7LyV",
  "key13": "5wTCwhrHwJcYF3QftNDytkL4FUXWdtdNqpro5WysuWtyTsKS3kcV3hDGVbFPj68reYzkX8tzBXzav3W8CcV8s5md",
  "key14": "2VxgY2QnMExg6JGNVGV7CGFpnN3TtAWsFEkgkLCaBY1AsdbjPUKQ6g38iUZRfsBUBXY1oSDwrjFQ3uJ9FdJWgrnf",
  "key15": "4W3QgBNtK5m46eb5vnLuMC8LAhPAiHqQdDeArb9jppZnuP6rW8UffueVgLnQBKgmbeoJS8dv5dDTE5cnDZ5UAHM2",
  "key16": "3sgomPRn4pbAyHSb3uuRn4er1Fkigz9AvRLn37e7PE7bmgeo6cF2Sabjc6CU3mAMbwXeiGYNGsXHmzPvZ4L1vpYs",
  "key17": "g8dBKaidzRRPnDJoGzKcWzJ3uJ6okS3251wTQJLSRRnjBPqRjn3NA5AzqxG2C828TWV9nfKucdjYByU6J6mESwa",
  "key18": "47K7rjagc1AgfA1eKQqdzUpnns6GYES7Mcw2pFLo3kLgtTJzXHafX9nRNk8Xaav5jp3UNaNmcmoeNBn8d9poG5LW",
  "key19": "3i5JD4HF8eRVrZKywnkoVrkV68SESjBz794nZhSQ4YrmVWUzssnFyd6N4FqFZm2DFicEBqhnVM9U8eAnay7Jk73H",
  "key20": "4PQNsKTMxg4aKieinWQK6znbew9SwJEQwTMe29aQgGKNMyn3HAQm1ynH98Tsh7jWgtJXbevDq2CJMyxvJqbMWb68",
  "key21": "3FJaaFNzeKdqfJxso2zXTXw6u2w4zZPH7JYdtUYCyCNAZg7x76Yrw1U1NBHapuCEhKBfCPYSUwpwdaUa1pwqH2G1",
  "key22": "4CUubKz2zotKL9NK4dmJ3hParF21UkLCjXT4VFAFvQhj5BByCZSwVNf2nxwZQ7wMaudjxRkgjpnjhCu8F17M8afs",
  "key23": "3qhm1nJddVZfs3SgFbTAPY1i2p95bXLYri6A5Pp1wWbwsx27qMTnizXtDvJD9W8i83bMj9E2h4PKUBd9856dJBEt",
  "key24": "4Zddxpb4xLfWe7KHQqhzzYYtDZhsFLetdVfGaGpaRUgfhwq2en4McBdmsaExtdHp82qjFRTMTbmxDij2EGNG1E9k",
  "key25": "4F9UTBFYMwew1xuBJB519bdwVkFdwQNp82HJYLaWKbtebcoTCcvpruDMqZ1EDQjiG7TDEipfSVZT8ZJHYQUheic9"
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
