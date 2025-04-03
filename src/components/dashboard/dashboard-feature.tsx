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
    "2QDSGBb1Qxtw8VgFnXHkYsYKbCFAgUrLnt4KazSEfV8N5wT8Wd3c42hHwAs3A47aq9EVo5iB5CqT7K69fVbMdfme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HF23yVjUsJNdaNhNZp1aCgvRNmrvKuHQ4mjUSiqfX4n5Nq8Y2gBLhPpbtuh7Uz6sjtb6ajkvkFPLv2GowMGzNVg",
  "key1": "3GTRJ4PhFQyLcvcpww7rZ9i7YPUkN4GmRHhX8K14t7KNqzDZJKE5pdqQFycywWPGTwZpVYMW8TDm2oeMmqFRX57d",
  "key2": "3YfPcAyPdvEnKvEzbLSn33c8F7ZuzJ2REiLasNSBnRbt9SyS2d45gcvtKPN1QsxJjdpVjk5Xy2koeYkLaVdYrUZ3",
  "key3": "5Lf7fdknyHgSETms7S4pmSGk7uJSzaiG4rpFhGCXjZwy62UHSkqVV5dYukdHbh7DZhkCprQgzDtgrpevvUQvMtxm",
  "key4": "4ieQyuLk1TFNv7R8aTJ1v1wgaKDqMnseMj9zbLpsUTxYZuDKm9G4rFWLadLEn6gGDE9YPKFDHLNcWKMjJWVzMPK3",
  "key5": "rhYb4pdtUzjgjVqn5UvGbka2zsszNMHKzcmExiKsYirvRrENG3fYgJQqYtg71NoPzcorEZcAur6ZssFfaNSMHEN",
  "key6": "PJgF3VynpY3JMSdwyKKyhRsrvcvc9tFs1SSgJ5MwXuJccPV5uKjqNUgJRth3WQqjnTweBaJ5MQQcLUk6eyQNdxn",
  "key7": "ciyFsPQqEdLPxCZEFzsR5hHoXCjvihjJ2Ep5bCLgQhPsEbHinRQovRLkSeLGg7cHpmYHpRfhrStfPno8YFAeYxa",
  "key8": "3C7oBbQmtUxTmmpY8JED1w2LhnXfrH57JPorU4w2LjMDWK8wXs4pBBi9PEgzrDV42WuQMrtniCixkqXUEggoezgf",
  "key9": "41bMK5TL3tKNzKxQPoGdMoCirkyHMcUN3zCJmuDbrN4GDtyW5ve3LBwtg4oz7NJL8onb89njjoPqhSgpt5WytHg7",
  "key10": "64PabZfdcHJTim7do25cN7Xf7MTnoRzFeiobz2wPpRgujt9T1Akw1i89iVXpxpDgAWLH5TNNPDQLmpB1x8Z78hNz",
  "key11": "huEvyh7JMLfrCo89LeyuHkEujsThwzzY3v2s8tx1jKN6pszn1WfrQKnMRrmjUNeuCcZgR6rZpe1AaWTZCfuBeSZ",
  "key12": "3HwegD51PT9nh7AVoJnsYgjaBdyN8LECZ8otzUrFD8RxTNL28uZAJ9LLkPAcmJ2WJCNzdKaukGM174r1oUMGGRw",
  "key13": "66kCkwYYxmDe7FXLHZR5nwgcaJJ1YAbYdXPWALrTygevJ6DSHsKY7rE6Z5BrDnP19jTmEwKu6c8P8aPqzLUa6ntv",
  "key14": "5aY3xbwACUmqUCqs2xAzjTXQfCoxYxoqmGaGhrFSBsRpd1Q4bBge7w9Ltd9pdtjLLMt8NrLqsCyM1jDB8PXi1Ri9",
  "key15": "ntJhaBGBKqg4XRETux2U5dCn5E1jiZw4EvapCFnFdod1SK4BpowypMVzF6bhmS6oF8Ukxu9n4LYPkTnoJcRDehR",
  "key16": "3NLFREddfNDm2kCxLmNjNiY9vHiHfLtVzBk3ctAyoSZWYsp9CLXfNoAVnKnrMnLWKczuUEnaRGz7i7d6v1Ltu8CZ",
  "key17": "ooip4ZkW8upKFQjuxTqGT6SQrx1PUQ5xQcLqYDPKMdmGbuhWbztkiM1mVV2QRsxjpFYenbocST32io8E78HxQu7",
  "key18": "4iLVKeFJRjDujmCiii2XaPVgE9u2vL2YVfAvjTLiYfegd2hoiyJKX7oWevARtvb73XfwsDM22fhcoYCgUm7H66N6",
  "key19": "FSvJR3f4DXhXez3mYRt8Kzsw2rpDd2wHH9k9PjPKyK5ptQKo9ee4WSA3tH5nscX7ipkTkqnKiiv2AXofKoH4D1q",
  "key20": "7XsXXacZTj38KodMw6dbwxaqZrk6rfop2fpwuRmNUP8etCf5eLr7BGLyADSJnangCTAdiFye72Y9uxh6isbdviN",
  "key21": "27wJsXmbkFobiqdRraLADD9QeupiqWLTTSptxnbAyCML787fD9cQqCqM8QpVL3mwVqzYkPwbKJ7ZF52rb8F9jPMt",
  "key22": "65t2d6LcfhwMFgpVUWHnnsXGtvJgZr5u6cbWXJJasXFYpAdBjFMYaBqx6wistL7ac4EHV7p6DR83Jy5LvtP4BXua",
  "key23": "twMVN8qrckJYFFL7SomLw14uHpf1rr21hPpxer8kjLdu78BUTBsWojNyGJTScHKgY1ygx16xhvjFsPnUSzqLaf5",
  "key24": "4uPsfGj56XLbuzd1eQscBursAna7jh8L2qF83vkTK7dm3pCx4bS6ocJkRhzthXMSedNXY5TcHWuxuU3wM1XBoPKC"
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
