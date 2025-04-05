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
    "BnXZyVt3fB4r6AF9phWizmykpGFJrXFYsL8wEGvURNEAi54AcqDBvYCQUjGNCPUHZ4bsR1MKjRpexUbGRKiJUAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5CfCm4PFNrJUQwMCAjr1nVRxgDBUBAgEvaWcfuMcvxUUBKq6EjTgzww5zQ8baXR7K43kMjfspqjPLQaJp27ZQr",
  "key1": "3454w26tG7ZzmHfDAQUmtvms6pqiKpCRbUZfef2EPCwndchA6SvPA6VDYCBLtkJ4kocFftZQHA5kL75HY5m9syFD",
  "key2": "3g7qs3ELNy9JHTba9DuuxENW6aimxPmbTbRuZskiRi2t9K98ATyBqYvTrcj7w3TVn7gvd2ZUFxs8Dgu3i3ZqmXUu",
  "key3": "4L4iUqRyHM2FyzgKmc3nxCWMgH8WEen6t84emaAsMYQEJbkUh9CmjXaQuQK16hcnkJoa7nAetFYT8ntY9Ek2PffK",
  "key4": "3i3DD8YEoE3HZme4T7XqzDXyeeSLLFz45fzET6nCBM3jzwZHPTumfVAjcHQAFVWDyzayoLvj5ThQF6bJkHK9h6Xi",
  "key5": "5127mcAVUYLqQEx6qB5BfS239MFnd7bqo1pNkB7SpknjVfxN1qWhEgDVAcLkSgYjcPqjmzndGfTfW3w2WvdvS63L",
  "key6": "4P4CZDSzxVioHDxNidkt6fG3eU3AbQ173qPWHy92S2yCksQGhL3VavUA2AV1Axxhdtd6t7VBTQRRLwVwYiM1cD1z",
  "key7": "2Lt43zba6KE1PXMpAuey4zDvSss8j8vtPXhVrt74tnkDKhihH2niJ3KGh8MSBXxpVzpDoqzc9TQgBrqHBMsc3WAg",
  "key8": "4SWXKWUXE5Rv2VcRp6qse4wU2pJRT7AHGAT8Eop221qMiqagoSXkMuKe3YC4kt1SbiJZmnQ5kH5qNf6hFuSJfH9L",
  "key9": "2YjE15EY3amoX3KjrMTLfH3RaymeDzJYXin1VpTqWCFm4f9BWDyLVQH6yjYrxGkX4Utae88DT1Jc2UKH8CRzASRF",
  "key10": "55yn3xUzFHBbs3NHXbQuMvSH9E3EqrC8TNFE2x9p7phrGWVgMtHWez2MSuTqKzTdrPsDAjhFSFcmPFjFbzcS7aZN",
  "key11": "2kBKkiix6MJ9CCatBCsKKXi6fzFSTcLVAGQ4QxukyHv4jTEpym32rBgRiFo7aoN9DcMNYQEr3QBWGH7rdV7Sd3ju",
  "key12": "3UEr5Hj9nY4B6mpKzY8TahNqm9KcqYtHAsxBu4Ypc1G2NHzy6aRrYGnksaQnHi8GjQ9CiotcVmjv2GzJ4HxvqPs9",
  "key13": "5f3eKNAXjDdAjNGWhqZvXpmrgxyu6JtwhrQ7P8NFx6ABF7oi9dncQekyuEXv9mPX9MJvhbnbz1MyTBbR69KWxEhq",
  "key14": "42a5Q22gLFAKc4meSxrn4JUGi1DktxvhDXAa7eqJsRRCFiTjYpW31KkEnFW1ASUNM5iUK9ZQGdJ3w14dh8tavHdP",
  "key15": "3c6nedWbdGtvHs4SyaXwnZoBtpPuP6bjrE4QVBKGS8CuTsa4jwbN5gkWwqR4KoyLP9JVUfaKjxsV4QSEEpXP8rBc",
  "key16": "3SY2VC1UwDuezp16ESG29pu8NwAYx2asxEpyqP7sw1gSfTj65wkFT69AvBdr5FMaebG5NF749w6D2DrRtuMQpYVY",
  "key17": "bXbSnab8UaZsULK1FiNzd9X21dWYjN7kwSK2RawpvZGctLxRFHUHFeNqhq3oxYh2zgX6Gh29jUD7FoXe2TaxNcM",
  "key18": "5Hcvton9dBRcENWgSZtQEu3sHiE1P5DqVfn5K7C1d7RWqVWL8hh4bw6SMHxW8rK18YQNhQUYrAKhshMrz44cErzn",
  "key19": "2d4QLYjnfBgYtDDNrfAFVfoHH44qELFGroFJ9qvN6r54BAGu4MmDbF5NvMUwwZfuVjhudq8haRRKLQkuTBMfRchB",
  "key20": "4AqgSvmaMLSYdWiEWBRzyVYbccQQ9rR6PRfZWFY2SuNpbSNqePzY7gGZR8YNBiWPNvCuBbeX5QH1qfXEBbTqi2am",
  "key21": "2n9DNAeKA2kDFBxtkyYGPpJLf3HKd5nMx6kkrBPiEAPSZN2TBUXDrFkZZY7rnurnGPWjkrCkAUMbp52gEsuG8ztE",
  "key22": "5QCUoJj7W1XqmpsrAPZAfEo9FnawKfr8Uqsjo4bXPz3QT9p8teAAUXNgVG4gjuHfqATVaLtBFmEYnh43tXFv1ry1",
  "key23": "3hXGdmsWmY4sBzycfpAnfwK27XzVcvufucmJezA2L2dpenL8oAQBvYpJDUWDYFBEukgMLfNe8qURPvFKtn4EyKhR",
  "key24": "2ZKJJptYyW4vsGeUoiXBt7tkZhZ17g8BUqgZFAA4MmempqpnNFfsRuicDWZB9HM9ZnDCssYssi56jT7Tda1TMTTW"
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
