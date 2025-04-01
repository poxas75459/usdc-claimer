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
    "4Q4ahTGp4ofRPiomFi2YJYHpSyuLAbp1QgSMiuxztH9bE7mQc6yuQ6kNKHRcUiAtpkfS6f53TGgK79yVsXWKQGSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUzRXoyn3q764yQWNPnAvzoBu1U8ZXmQnKtDCkpR1FhvUDCqDyV2nWs2bxr9Mauxh1PutzoxLSNB5RTqpFk5NJP",
  "key1": "3YEdJJhUJHVVmw21bjHiD1oM2WM3oi38ZYVems7LJ9kVMH5ykViV6FmDtbKfMSv9t1tnqAtLcG4MhybYy6ZSop4W",
  "key2": "4q8DS2Bv3p6qrEZUGSpzgckniHjYVGR2wa84rzPkPxxyzo72Jmu43GZuQhuv5THLQDYCsRedHDzgWx14SUuuXZEW",
  "key3": "5cxZHGUBbaxCXhqekVNkrjPTndGXmGj3EyB2EzKXpj5FUh3UvtyxvmMwv3guuC2voKZZLpCdSb1o7M2KFhrEKonJ",
  "key4": "3xTLb5txFphTnyoQ4H36Ab4Frh1RiqqCfdBiL2uhb5fojMED2j5vojBc5Yr17BcqvMta37Uz2Uqsc1vKTwXC5Nxf",
  "key5": "23pcEoUVqSqQGtDF66x8cGmT5yMzegf1o63PDwHokNCP1qmzYbBvExjV1jJZ4fHqREix2oaXxxkbN2AfdjjKGwUm",
  "key6": "48NifPs4Hb2chnE78fC6F8M8F3zrHCCRuEzkzKakZ11JP2CaBKDc59H8JR1xUfXYQh3wxJUpdcBkR3u65NRcWvAW",
  "key7": "3T73qgArYNpHh3FEMxFzMCDvPRRgn2PEmPHGQLtBd5ZSnD6gnuVpG3pArSHyCCrqqiHcPruvN49Q7nN3GadAe9Tj",
  "key8": "2rmXPbqeYoqz1ThnKdeQo17ECZvGULzhTpwGBH9FAQcB56gRbfSZuddiEeCdEtGu5VjS9ZF3MG6rXiLWfcgJy4mF",
  "key9": "2czncZdxJ5L7WSvDHURhA6moVMgDSaSe8ASHkmpja8FBYt1h7BWB55wR6KMCCEJZNEM7foct24xx1x2jEVnrfHJL",
  "key10": "43L17mhRPe278Kj9DFHMz8NfieZm1XN9DVpUBPTh143LxeXkfAPUTkafyCWR7ypVWK9XmxzmDUsySDMyhkiDgV6w",
  "key11": "252K53qNSeA75Y6KvRTdqY9AeEoRENkcQeAhRhBM857wFRkYEQwTbgVfZ5hAmZUG3N5sjNGzo3Qv35PbrKA9iV5u",
  "key12": "aRQsfaHBtq9V8QG4f5ZpG5ywcUYt6ViFyNoN8oxxSTspB7i9XpMqjbG4SE4hFKc1a7pUkGbRWAmJn3iWSk7VzS4",
  "key13": "4MWHH9rT9KRW66KPs97mRyq7QgoiLH6RQGefMauueRce2xBUSRja1LbVAbnqGzmyGgmFDgV4LbSoGicTtv6HrkjS",
  "key14": "Wy5g6FdZVKd4b3N9WRhyDXiWqwBzFHP6c8rLWBNkPFQa5EUQw8Au58tAHrwAyij5qDSn42zeiF6MXURxpaSVrfj",
  "key15": "2QySXiHGZebh2CcpNM5pdYh7NnfgTupaXHpCLh7JfYb6XmrgCcm858WzsXHEkvaznSF8kvU7fYWwC4a1hoXajmeL",
  "key16": "2PreziwDgD4xyF9tabf8YjunEHJSH2k8BXW1CERufoW3KHxEnujbvGezFUoAXVCbz3L5iKRintfesdXaiSASsejV",
  "key17": "64wnL3c3FF9SjdL1yrHEzXt9RG2iNQaZcU5ktwc8XvnHwBKKz3WroiCZqkZirHv3MxLGvd4YkShv2XaLA21mzuKT",
  "key18": "4ZatkfJ9JyHgBswJys9VCf1hR4b6zG2MibCM2c4TW6kK1r6u8phhe8zzoUCk3kWLLzv1qUihEBBeHgdRZe5efsYE",
  "key19": "41sqjSxSPsg7Z41ndc3KWv6dt1fDuRSgisfQGL92QvFPmDiBH5FYTeNHnJpYatnYbg72YMGS5rdHzAVsJDPcnADk",
  "key20": "67nrCCMTG7zCoUtSqvubHbDk2ZsgPwJKbuieSy1ftGPQNDqjtmGwYNtaM8G9b1P8Utcg45zDubKeU6cLsi1j6Lx8",
  "key21": "4k14UUfmAGnrTFc6AiyVkhcHZxuBwSBdJTQDGJyjrjAin24o9QaTbKThtyaF2Bs95B92NdqWvVEaPMXYmz3s7XxZ",
  "key22": "Yd5pAEN7L6bqM2ue2ujwuk2pBEf8W59wcFsDLu6s4epTqrZKhbC7pXXsbiVmyNdNsmt2wc7NEL673LmJdRqaxRD",
  "key23": "5bnVrjKEFmc4u6prM2KEFssj9fmhwMcWgRT6HVGBFaKg2XE6KtPnqW13sqSQssiVoby4UA4Nc7MXkRFFjJ3Q4A8U",
  "key24": "5ysZ4JvWe7qrFhTAjSfVstnoJc1bKyGA7ZDgwPNaa4fw2WUzqCuv6ACH35W1tCTS1wiLZDxro3q4d9gNor7rARmN",
  "key25": "57nF3itjhF2JkRq9ijKR9fSH3TGmqiVm9Sgs8uAS9vQP65ySXiexyCmUoNZNyxyKmR3YGKcLPkwRXBj5YqmhnBry",
  "key26": "aqGRNngYvxUHX1xP5X5P2uiYAG7zic67KdLFeV2DX3vUsCBNfCwnZHKzPpm7pYb67d7CMjRN6sw9FWHx9tagKC4",
  "key27": "27x9Q8CAKWcvwN2r21VjDJdx3VKVskrEiys2NU4xRoEeSV8rMjra83mrivcgBP1exfg1k2GKWhDiAeHza4CPJyCY",
  "key28": "3TxbeTf2KiHawXVkvWiCg5UZ4VWd611fmQbNWGjM2SGbuQPJ7Srh37zjg6A9q5HQu5T4if79ofjN1K8yh5wy42yo",
  "key29": "4C1Tt8oimyqVWbVTmQoeNA94BU71EeW3HDy7gYebWSecpZMPAzKCZukyEHJ9D3Tf9ThXEj9vJrj3AZZaUMbMYHUo",
  "key30": "4QtHKRZ1wVhXXudgH1TFre25Ucb8RHGTq8nVqd5cEkgKZs8raRr1yaEwAgHBjvSn3tMX8mwUFTsRJuNf51kR7rAV",
  "key31": "45dZxkTTWv9KcpzPMj4SZe5LCAAymDfwdJiBmXT1oXYWxPtB8wKZ9NzgPf2oCgdtgDrNZTmKcadyYiE1x1hyWMk6",
  "key32": "2UJzTYBUQ3jRdY11m5vDRBpTU6Cj64vCwKbKqjtmtQy6UiUDUymveHdbrHcCKqA4kQyuUMEkGgwUud9o4RdPASZ2",
  "key33": "3Z1mjzHxXEJSbC9UCcrntedJSWdan6gNWNBhCTBhPboYm9qNnUW2srk4NTqE1nVkzZxid9kqkNeCcLLfc3mtqBoR",
  "key34": "udoAYzkMPeKAgzZfQg87xCbzC78DWXFWFLrvHeJvMcfosVEDhJpAs9yE9fK5QfT6XdyA66pcdjj1A22GzpJGjiH"
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
