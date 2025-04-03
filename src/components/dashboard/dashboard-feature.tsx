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
    "NZirrEzQMtM8afALAeYd7uZjtgsB4PPznv7DKYemtm8qytmTd6HhQA4QkQbMCYiZaEgrtRNqy2AwKz8koh91Buj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KotJ8y7LcZh8vfBF1Hnmq7ZMjL5SN9Rk6p8etQtvuSpm3wM26erkgPC42CWyXMtpzZ7U6z4JTKcJFjYB76SiQYe",
  "key1": "4T9Yvd4QhYETzRqRUW7X23gj5QfRJyJfYg2omUjCJuJMw2KBXn1bntkRWSVnYdZg8MqnmtNdSbFY9QV8btGcRsHJ",
  "key2": "QFL4zkYU9gBR7KWDygWC6nnokZPYu8zyWwmMdYbggP46ADjj1XGT9b8G6WE6dTA8FAFm2BHhPVUyws6ZyAZcbhg",
  "key3": "5VLs3CqgRsrEQ9TXWB77ssZ5j6gSqXC7LEXMJTNhvhkzjmYvx5Y1uQw25bUEHCUVjE92TqLSMRERAk3RQYE54isV",
  "key4": "5ap2VF2AjQPDwaGzdhV3WzshfjntuFP58sugBAGx9x2NJAEe8YscEzzWfpHLuCW89HmmxevmacZoLMHNZVss45fg",
  "key5": "4J6qmXjmRMceftGLb4BDRzMC7kzSDod5aim2QiYnf4iCkVa8WLKnVAbzb1LjQbHszyZRf6iw78Nosf1xfBz6N82u",
  "key6": "2Ef9neJWysyg4FKVevPDqRL8idirybR5LjMawqZiTtmg2FvQz1C5V5LiA8xdRtiu3cHprnj2XtDT9SqE5K4NHFQA",
  "key7": "2NxtwwTt38i9Hf8pzmarnhzNiJ7nRpwBW7AKt4MTNwUiPvWhmCdgC1L73LFyBa4fGG9wPhdGqVADPdnin6zgh58n",
  "key8": "31JVdxezp4XqXoAgQDL3pDCJjh4WoyA7E7cQPUyNS5kKSwEuuBmJaCY6EwermHVwFXXVdyeXS3J9MVR6Cnbo8sGK",
  "key9": "4oFfSS43z7BEyW8sx6CShB4P6QuPH9VvuM55BrRVw7LFP48sM8KgELacjz78qcMEkEAzPo8zPoa8h4VenSb1v87S",
  "key10": "31wMT3AWqSXrSK9DwkqgusyeZDdNHd77tp5445B3KhjLn4fGzg7jaM5ExzK9L2dUmdvt3cnt9VD4uKcrDUMo5Peg",
  "key11": "2RBbGqnWJzUSPiuq5aZwQtiRg57X88cUiK4azpYE4tbSRbrgeuWf5ajT752Nrv8fof1g5st2idUAp4EbUPgbHaXW",
  "key12": "27ibpSFPsZUxKmge8v8xNFNtsdxCA87p2HczEXsf6JyN1S7vH6QFpvQAXWgGqrdT1Awba21jtvkLQHHT1BXUnHo1",
  "key13": "59UaiUq5fb6WRw66QHxeMpGFHQ3nzsSK4kKV3K2dgdckK8cAAerD9iaiopdwBpNAWsuRgkDXHzFkHLXvwdzkix6B",
  "key14": "4AZa8gisVKiDGn3hwmBfv8eezkYWguc21XUsyHqPFF1j7DH3x7B5QqvLe1XTaitQCgVKRLvzTPyVMYWRuPmb6uBN",
  "key15": "25oBBAkcApJzkPdzNSxsRh2LV5eyJhQb2uJRzujZ2PqQrbkx6PT4zfZa2935z8qQxBEnRUmKrtjoLmky5QhVbUeW",
  "key16": "2XtevaNXFmaZxd2KahQRrw1qNAUtkLv5UKUMPUm5aQH3pJ8Tvax3kJ88TaSrq6fqY38fDWCKs4xVbedPyH4jgigo",
  "key17": "1kCWjvCrWo9rx2pjqv4J4RoZjCDJYJi6ZW4ooSCHUN8VbzjCJy4FPPFyfuRe3FH7xC1a7XXTDXd3sGLDDLE98m1",
  "key18": "42Z3n3e49w85ArMr3zSsr8HzSwCbA2Zr7jrpWhvpvFN2NeCnCebbFK9njC6E3FVeQ9xEVnUMYxMr9BHcTzSbTjNM",
  "key19": "4EvipwusbkGbLCRWKz3iiq5i4VRtDq9FHbpHr4TRWjBLEtSYjXq3QqKp8oNZq6ayXU4NM2Kd2YateHUxSxyvWXiT",
  "key20": "djp5JTbGhCBCvmv1U1pGKRCGnDn2w3L7NdQz2Aci91BCxPoTffZrvUbynGL3ddWSqW9HJdDYCqu79cLX6nTeRgV",
  "key21": "Q8ZsAehTYXpZrPHNQEeAmnqU1b7aGbS6ebbgJDHmJkKyZqTfKcBvF38ejwJkeu6uvAM16VdR7YUmi5t9m3drkYK",
  "key22": "5JqRTsfHErVPHV8mBZUoBA4hGYyCLGuicN3H1Ru414HEkJe3F3yxzJE4q4PiNPT3GZYXcJnV7s5xmHSWyn9Aofib",
  "key23": "635AGbSNxhZidgrtTretTiXF3rQU5Am8P5iaxUSQzhkvzFJc83FtTJ82iwNmd32zHaVA5eWju6JeFRML9rWAh176",
  "key24": "5vTbEbGyFELuyqJkobwBnqhzmG7c74RoSVGnKj9hM2vQ1eSDUoachaDYbLEFSFuXHcB9jVzowkTrDbTP6CW2B2Hg",
  "key25": "apZ572USPsvVBBsf4KvnWFUx8ssESgk7BzJbB9FDErYv3zv1tbhkFhZSjqha8pFsN15RXsLwCkZjE36NZh5mfJr"
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
