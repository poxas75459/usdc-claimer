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
    "2HoYK4NA5Pw6eZLHZM8cb8D7amvfsnCa68vgqPTxs7MHhHDLgsqnRCpe4SFHKD4v9pDZwTSvGUFhbZ6ddAetnYjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MfD9ufHbbp2QEN8uWbENeSK5JQUtpawBeSE9hELgqixdLErcZMP36bb7qGzjyALVkGuPy8xD2nkqZPcJsKCyKuy",
  "key1": "RoFdfKvEngxFvA5zPM4az6m3YgvXHwdRrRHPZWPF63SiUMFGH3JSmzH3rS8Q84bTafSCoc1LrME1eJcXsendxuJ",
  "key2": "4uqhNvwD936uS7TFenLvsEG2x5aBEmhCyrxxec6w62VNJvd5PRaNRaf7mKX2ijSEN6s6zCbGPPcEum8Nfp6rPbD9",
  "key3": "5DfBgbmVYW6ge99ZiwdQG5LRdkAW8BfKm6KLsRgjxfi2fQPmuvZKBZd29gHwXWQNSvQwbvvs1Vm1H7My6XFkuSwq",
  "key4": "Yi53ZoxH8KL2H5m6fj5rbhiTvr1tPp2MsTDfdnFM4Le8vR8cySwpCnacf13AygeYewXFrYWmdYcNmXdzJLRSQtr",
  "key5": "ssukmaBbRtMWgUXctQs9MQWjkwXYFHpW3aMejCxr1ESYcqHthMJCaWsp4zsuYfT55LMabVp9JHkCfWiWX4JGUKV",
  "key6": "5W818AekeUkCQxGZUZgGgaYVx1w8S9VbYX3xCrfTGshX7m9eA1RpYWPqkmKKBSH9Hw5QdMvGN8JedTndM52Ge5KM",
  "key7": "23D62wPYHSxYZhuK9U5kJ5qQCQ9DfB8YcC7pHTTxqp11c1iLCEeiZySazdPDJDRraHXzgh4jKW7SYsvRgsfWESS4",
  "key8": "3ntFNsUz852iv4vWdgUa7ybCFinEGMYMZy1dkTAMfvnJqu58RcfkMu2gbjZzGTF5ssLZaxtx3CDz8Q6o1x1TUiAE",
  "key9": "5obajnpFqZagURuaXaKhMjNsphZZkt7F2juqe3gFoy7DPPdLiUZidggz1n4JhRx2vusEzeofw4qCKYnTn5QPiiw1",
  "key10": "3TGgjeCtgLAJz4G2DGrGBVAFvMAzuMthQv6vwxChMBux1wvTe4PCbX45penpb98kuh7bTyGF4wjQegd9FXduRyWw",
  "key11": "2ihaL3NQuxvBMVjE7CpAWAA1LdMwAcHUcXV9NugALcA1kjJR3g4g3Ntb6VMSR57fyRva3pXxjTyhL915Np3GBztR",
  "key12": "g4dg2VepbwA9okdBRutSmu3DgU5wsTcPfftcyFks7VDsHadUHQENHAYbCuTRQ1sAHpHZJu9bqCAtHYWosAVov9z",
  "key13": "3kE2tU4WZLaJ947qpodpzeevizGgasMJRvRvLiDJeJKgje8eWw5EwLzXNAeXfKTEEnzSJ2nzjvScTpxkSwQrHR9M",
  "key14": "4Qc5CtUjcEdyMXT9goNch9E2r9yAb6Y5vfTjZfdWEhgRsws6wfui4Z16n1nWgySF6ntW1TnUWowqWiFhpZaZvZSg",
  "key15": "4BvSdAifKCPamY46B4JTzLWX1msyFpvEmWDhpNv6PahsSTvsvUE7CCejE9WsorvCczGue97aqsxWCF1sNPZZKwh4",
  "key16": "26dCSTnsEvmLQiHK8RtR3W1UERgHy74jju846uzpH5kovHyxfqUE7Tsk87pEvazar5yDde83NwuupwrygBgk6h2q",
  "key17": "5JRnrL8J3wefVCSE2ujqN2qZqd71KkaNnXhtbFD1i4v4XiQJM8L7N1kBku8PPFdzhRnxoyDNWfBNQ4PCCEe6b8tY",
  "key18": "joZfUWNFF3vc16i2iXUSYKd8GC6X3gRABHV7ppujYVteEMVpGGJwjx2B8uJrKZ4rNFaqe6M5VFxFRfmGwJ6cs8h",
  "key19": "3E7st9MkysDg8Jp9CAwVuKnVGZsDSr13BSYTEtaHiybTa1gACQDVK8N1ZQKTJKDhhC9ss7khWaZQEZdmuSCjcDNw",
  "key20": "Jd6FneeEyFsu9Y5oEWK84HPf8qbvzFJBoR96wjwVBqvxcuGTZTL7RvoiUDRFJjoN6EpkwvtmnG4GSiwKRJtksDg",
  "key21": "5MnQDdgspYU357VtCKj9LPuKCrpd7ei9E3KRdoVoxpuZpg3gbrY1XLwTJv6J6ABi8wvui3XbTaSuvPvuQVjMypuo",
  "key22": "2qWip6WVtrW8Fcw1HyBANTtZJmnU7TYJ5LVjpvB5gSmmytfYix13JwNa1ZS1r9wMkgi1cwiqzs7o3BvJ76Juj9sw",
  "key23": "2PQkzhNtYV7owuNoFoiUQAY8QkN8WmyPhrQfmsSqgZBmNCvkz5V7R6g8yompkc3TcSPnUE33JcJQ3BQxjmcN73j6",
  "key24": "3vbiAoiSqXcwQDHqitZhYytCHR4jfDWEwa5k1AF5L5p7HtmAqp7C3AEVGTXLV4gDiyrQabRxQ6w8aybu6mQBYMBt",
  "key25": "9LrScer7KwnDFCLmoFr9EF9rAySarTmmBY3qxqk6aHSzY8dQWLWrZF4RKnVA4pYZLwKWudFhu1of9a7ZZLN5eCJ",
  "key26": "37dMPUSuSNnnC4X2LWarUZyNWyvMj75vWtYNj7V8YzthfQQ9KYFuUmeMxWFiFRQanbuqcvuHKvspbawv83Yv2FhX",
  "key27": "3qiHnbcJDEwvaXgM3KpaxRhECNoHh8HVJT7YUnQiMvREQBuchZ6hN9UGqx6rnVTmfMpVCbTrDjmfTZVQwWUZWtjw",
  "key28": "48JBhRWknVNXr5P75KFXqg8An8BkfikjVeFYDj3TtKJY3SXsLiV2nEHhkbvGg7DDepGrSPwcmgnX51bvnNtsWX6R"
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
