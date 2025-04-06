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
    "3DFs6oJWoqh42qLxfTGeQ2ebGmrdaprhTycZPfkVCqryE7gjss1g1M9dtUd3o3V34iEXL9JnCKDnABKBTCWn2kLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULeXtbLFcNP1yDAGdv9rUPp8njdNRBzHDPgzda4Rv9UcVjWQgEPLfRgDw2XCfEiQXnztFRxPg6gohiJ4WDRfdXD",
  "key1": "6FwqhbM1soT6z41wn87vCLxzSocoBN6XZTCGXmTLBQKFzim18G4aa28qvazoiq1gGTrBAW7jd5JnAyLDdnPDqT3",
  "key2": "NunsmnFVcpgYWdcxk2GtsqhQbya4V4tdm5WNXoztzNhgDteNTxgadXhebkNzxk2Q8JZHjCWmamYPCg7fNdmdvDS",
  "key3": "3o2oLsE2Auo5hvVwTKDNoLxMFt3vTGKuYeBvy7wgXQA3F19XNWrqRX4bVUcLoHNK3WifaUzcA4EGsEtZxE5GdHdG",
  "key4": "2A3KbmkEzUoN1TpMxj4eFpdgzav1y3tA3dbijiH4ikt1mNfg28ZcDw3L8jb7i67vjQKyQMDJVgCSc5Gt51FsiYhs",
  "key5": "3JnduhLz27hgkB6be7s6KQqsCX6aoXu6HyNVNk7qYsqCS23dAoYcD2uUPh66TcmxeS7pBh8Pkum8RpipaCF1dy6T",
  "key6": "5w7hdeRGAPFSL9RN58xHUozuN7yrNpcnum5F1LAHsbQgu1kz2mw4P6UXrj4LmhBY5wYKZEnjuyz7PHHVZNqYCp5i",
  "key7": "3gCVFr14wiJpyePGgiA4UFXBxpTRxpSVZiBzAiB53AaZf45y6DXBsL7RzRx5R99JDjZT3vyFkKCdnbtTZpkHtzph",
  "key8": "5Khtiz6SsLjuS6yXZYt8iStcc9WZqop9Htb7ksahDH2CAX4a5AELvRGSei6Hh7R8QRmbgWWCAWQKNWurhhwiaBao",
  "key9": "2qUCyC61djHPWh765vGbHNab8SBghFqtfcMe8ehbMt7c4FziQu25haRN8t22LXLoGpvAipogaBWAxxxVSi6QMg9b",
  "key10": "3iTUpLW8mKvjqLeB4SqmPbDvZbyE3HRSb5eahjm14wUdtdQQHVJWMUTBNmMecgrSG66HXWFpWsBvaAWjfELQpkWH",
  "key11": "2fEW7LtRXkBDa2vWnN7nLtoWijiQtw7WNCUrXFPQHUz9uUKMprcvbuiN4kqzFkhS8j7avLxttnQMgqFVxtenb8G",
  "key12": "4dbGPDq9pgv9d522MLZ4eAnKGkmmF6LuwPBrkh37zzTeqRkEmfjeWmXgG1oVqPq9S9aXzEXdJs5MNiupE6bXLTEv",
  "key13": "5i123PEEkTV7ZwUhWorznJNBhxNEDsVfDLaAjLCMjQ7AFZckzLsSyJpAz14g3JwnfJFiKm3QfqnXbvo9fkZuNa2d",
  "key14": "4E2HDdr8g9tixFZspvJXop5rmmrMcQHsk4ddutApRZYq41dBoqF86sX74YqCfFbC285SVWLRoadqJrqxxYsxSDY7",
  "key15": "4kkQKrwsfNfuZNbmmK6nVybr6hUK3JJwh94LaeB4ZinQW47dGQF3BeCcR2tygB7nWXtjurkEF56y5tzMuvfNKjoE",
  "key16": "rUijTS3mQ5AxQtSdCxAPnx4f72JMEQaXxu66Tz83AXLGLYBehZS2aP6DCKaY6vdHGsP6HhdJSpMwY2vo8cJfZCJ",
  "key17": "5YEQhurUaL3dWihXvLSkpbVQRKKPTqyEjdWLbNTdQnqeuSLquV3CST4pmEU5qqcUFP7gRuoc2epPKa2NdPmaMVCH",
  "key18": "28w2r8bH2sv5KJSztHK51DjQUuNBF9uE77yteoxkxmeNun6CEuDNiP4pkH58RJtYnCkBTuqGrpcgASHBekwNVFSh",
  "key19": "eWPHk9C2fFSQCiBqAQBmZZbhMAPB6KUxQq31R7jjzougir7U8ToPYgishYPJmYVPvYe9bQFeTkJL66umVWSR35t",
  "key20": "4XSuukPuchBwQCFrrzX23HQfLFb9F5KJAFhwQd7VPmJtXu4BiSt27vz1PgwtuyCFjdxEtXu3kPtUMb2noyPgDSsr",
  "key21": "5Q2bYbqnTkaz1gg3pMJD9eHAvV7kfffgte8Pf9zWQfHbSqQsXd8ddGSpVXb6RnvfELLHMJRirtDhmPyCAj4U4rvP",
  "key22": "cp5dzgGpkKacPMQ5aAhFB9wUAJnqEbPSPNGrq4pgcppDtSPkZWP6SDG727vPYwgxD5VSiwvKyMJL6nF888iNQg6",
  "key23": "kDJwy8HEEVhpuy6g1UkgVeTUk8Wp2Ti2DU5QykvRBgeS71kbZDfNjSPg1bCUr5auRXB72w7YccwS3bM76VAwBmn",
  "key24": "q8igLVTnHYdGHuJrZtMguNaS6btRmWtMFrDhH9pyadaGnFBpeCSWYQXkYLKpjNihuojeVJNjWgA1bWBEn7WUPPw",
  "key25": "5QsFPiUR9Y7KJGjGRWXj6mCsC61nSXC9Ky9WUMu52vxSwPhXPUPcKSGjooo5L9vfUfMP4Ko8Y1akFDX3jMzd77qe",
  "key26": "64urphGtgvYRfPh8qPFqiae2nCQBM8Ui4VpZVDWGuT8exK2EVbwQ5pehruMUtd7sAX3geyWLyaJSNRDeG1YGCsaR",
  "key27": "2uZHwre7J1gs5nuzjVjGHB3YUXfxSWGGDaesnLPYrwUYKpur2Vk39xm7cJ22MmBhhk13kRjbLtc17KaXsPDr9xiV",
  "key28": "4wU7ZMXupYJCaY7MWq1sbPB8hgC7qpQ6yTEtkGtKnH6oEEFQweRRthYVZSMRKe5rdAsDZbBSH9US1YCuxSqWTJKX"
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
