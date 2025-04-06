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
    "3JB7WeDfu87nkgRHjRH6ZM4V8dicCQdp76CRHXv39HbfiaDULiybNz8bdEfrEVQLJu4STx2AVX8usPUV9JhbQLxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fcj6vx7am429WX1FKcDQTjtdu6EkhiBy3dQfQkbEPkMGuAGyBuZaDqpLaFDYFt1SJfkmhhNXxzGurfgZtw8S5DX",
  "key1": "55JQgZ5pCL3tRYi18jqEKmchDdYfpMPTLCYvGD93WkcwLmMsC2a3ZyQD9r353nqX4z8qr6dVtHtejhbkDU9gXVkK",
  "key2": "oT2jCiGu6UwEHViRZquGAYSvdhpPAXww1vQdHTWNRiRP3LD6A3sU2YYJtvpQceEHzcMQgTHLTzTQsZABbhTrCWE",
  "key3": "GkmxiRmR9bHrYc7rNVsDVw7FJfLbZUmgZCjvMu9zE2L43L7722rdCXa9iHrALE1dvKNtQaBDammPARD5YPyFJds",
  "key4": "3pK2eiQnR4GVDyHedumysSndzXs7xxHaoh95cxDLmBCGJz6ZfukDUK7aZNwAGp4FaG8NzRz9DF6KqoPa2LTBBFVi",
  "key5": "4uM7JQkg5KvuxRPwfdr6wewFLkeyEkfEbnKVnUNSG8tLHRo2nEmpggKYf9qgt5XM77hXMGNTPWY8SGmsKQSD2s5T",
  "key6": "4jgyuxkGKt22NXduetARLFAePp7uKKQBomPtLvwYwYCe7FnZqcRvPWjkBxkUnHjh397P2H7z32ev3LoEhBbXF73H",
  "key7": "4dpySyYkYbLe6EuQuzzAHuzifwn4zsTucy5wgWHDvMkcMUJXn2BvorJdn5v4SQ5MreRQJ25nzPwL5EUAVie7tgVY",
  "key8": "2SDyxB9mSTAmaWHT1Wxa5YT8enKNvUPXcTKURkSR86VgTHXwyiyTV4NgrkNKx98vqGr68PEwJQqEN5cHdh3rZgpg",
  "key9": "2PZrXHrNVyK1NjfRZZtZ15oT6Gh6UD8NWPRYVXf5pNGzPKcjKJ1vPhJ8xX8b6iw6rxi1VDRyjiHXT29BrHQJeHLn",
  "key10": "2BVKVPSBj6wH7HyAvaCrmoYzbR8ubiyFunHkQ76vuSEAWX4e14YZssNUrA2oQ1jUaDL4m1FPwxKyvy6zz9YjeAzY",
  "key11": "5gHmPVnJA6HTF3Wq4jyhKJQd4bCxPHYcx13osreRBCVFm3EujHWgo7m9fknXJscRSo9UWRuB8PAZuic6js4PFvGZ",
  "key12": "5aoJBahPBqPwt9WoC7tGxk3iUdGADMQnVoZ4pttMDNfVHMJfYZmxSv79nPaJaxu47prJSmHWcwoCP7jDLncM1g4s",
  "key13": "5Run9MPpVVq3t9k1eHMLc8yXNjmaxr1nVbFS5uUhiT4yj8TURVNdPYAid9Ec3Ya5yfGsfdqZA1GTSduHq5B3acLY",
  "key14": "28mrNMezka4uXT76bNo8zAaJv7tHT95DYxG2fvMxM9HyGeDVJ1i5uujuQX5cTYTd1hAXW474UpXj49BCriJTjGLj",
  "key15": "5g3JUHjPK7opU26YzcVWEiBt3BuycwzXwNWLqzWVnPsxue7br2N3NW8PCpCDhS63zqPCyY4a7WDUBcMWbbCBGsYX",
  "key16": "3MX5Ae5SWDqtyJ1LUvuCsjepXqgzsNuxhGXmpdGUHCHcWNWBDrzwv6UQRB5Y2R4hKG9xqZEZTnWNkfL6LWejHWQM",
  "key17": "YxgSyJkUdcYebHPHD32i3Hk4GRh3jERxg8R7efikfXMQLVz3qEQY31tsK7p72Zmjazo2DDLP7U65Ta7KkDa5tfu",
  "key18": "5yeJCRHFqFeEmhyGN15Mv3rGHFjW5qZZZpSVzeK4vd245f2BGZFxd2G8jTxHMRhvifngBkg4k2y5rXmdeSEF2amS",
  "key19": "AVv3evB3D8i9yBy5vQRtga5dbRQdVE4zQDv2MzrgrDsri7BmqdueVyQmgn6Ki6GiH8Zuyo6VDJWDtJ3mqKiyPSs",
  "key20": "2XhpQSJVW5tt9T81Gcf7bxiebWY7p6VdiaCNE5pg5gc21qhCfeusQXRAospVyJHKAdrdhMCWjec1rbiCPB5yZS31",
  "key21": "5Ttq2xVgKcij44KLJaa4Vyuntc1b4KGuZG7RZs1gtytyZQbhqX5dDu8kxvr7TJcQEmznTSXubNg4j2xH7rdCwQwW",
  "key22": "9nyDugURqz52L1G3fhqVmNrVZtFztiVVtzsYryHBdDEM3zEPsqc9qdQDqgZSbsJZZPJJQrQ3YN1kWHfLsidzFPS",
  "key23": "4hg5NN8yNBsD59efApRFCzWHU1UDyBehu9xSmzoVKfXZD6NiYr3yYRxnG78Pg2CWFPRQVzzCfEZ3HvWHUy6CZuRr",
  "key24": "zUn6U8sJgYhttReG66KFTabwwnNXqQYopFYR2LDc9s5Uz48VW1wNGgJYVJxtgi2xjFe5zekyGKPBEJuS6cFghtF",
  "key25": "2HouWUUVygS5LMHvziZkooSwjWUiTPfJZXYrhrwBmPuQzb5z7XAd8YfE5tuFxF3DPCzqgbCqKHo8yMrrRAZUdgog"
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
