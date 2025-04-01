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
    "LdiJApHV4VM5z8ntdwvahioUDAF3p7aGDyEBuJEJ2QcFzayrsT8XVurpdqtgEemiTEekec4dQVGJAxZgzr1Uwxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRJ2QStgGWB2XCet31JKSRKuLbi7H7Kn6nWEDkbbn6vMJL8G7swruWmjAPjUPhX2dfWTqTxKimDXT2AZGdq6qLB",
  "key1": "BdEbygpDiXcL5aUq9KRuDRd4y5zixmTZPa8w3UoUWVSGGGH13NuzNCPoJT3KLGDqwRmsnqGUqMC5vLzU8kZ2SqB",
  "key2": "3VJGyLgP5aoMD7ssQ5NduUwbm7LnpUuKjvjgALJzfXd3q1AQ7fErUdJZ4PTsBSKEMAG8Dahfiw88u8S2PWAbSmWW",
  "key3": "4Cg1xaoWHcceNgG3BEwNjvCRFqX8cnVACRHxEQSxz9s4KQkRZULoWF44RJTznapf7tSEnv1EkNc2Kja5ubb3JxyG",
  "key4": "2CUcQZgnUtDGcMjDsjDmhrcWSed1t3WKzK84dH6kWmTsV71jX5GtdN9NcR4eLCJ6QwthDPM6i6wzmrVDqv3h9QZq",
  "key5": "3R4T723mbSrgwA1GnckPsyi9YZfUGW7S63myuXFcGt8E4BCDeNxYcozaZUrrP8gMYiQQqfPeLXHvf3C3JFrnWY2D",
  "key6": "5s4poVbUmTDso4LXpGoCm8BKkRQcMxVwM7UZY5DFYbKMnCV2qErviN7b9SSodZHwYK4zKymYHqHbsweMsfWJb8YM",
  "key7": "uBj3TsaaihBZJCaCpTSCDzU4QFJobYybPUmQ1rjKQQX6S6dHCdGEvzgWsY9xSAqD8gJAdskDiu9CAX9iF6JRqt1",
  "key8": "4FZNh9v1tAH8KD2faHUmjxErq4Ni4HJ5RefbwQ1LZcuwkv3CRGeFQMytFx7afthWWcRENcX6R9iydB45jthxPx8M",
  "key9": "5SX9Uy5MWc7EKi8Np9zj8Bvm1hFBh6YHUGFLF8yeeDiaSfbag5fJVCBU7v7kNbfBWrMZrNnFT1ve4pdS1T78u1QT",
  "key10": "4B4fJYHzvHY25BtL6ysGeVJSuM6ZoJtKtcqJg6tr86hdWKaSApwodCsCGmEizegnKwZXRYcH3XXTxjZBY8zhhV9C",
  "key11": "3UA1H3zxcaxWkpRCmkgTGF4E2vxW5yDpo6Fqsa8JMHcsumnKyrCA5rVz6UH1MZuDe8WBubiRZ8kPrjh7Y9GD25cw",
  "key12": "UD29skTPcuUdwDumLJDMjGCbWXtSnYAsfu8NetDDunn18MUNKQRF7kb9EZuu9oBjJLW6w2NxjjLYMT6iT3dgCVN",
  "key13": "3Wyj4dbnXsEE9icTsvu82t8Aj9nsfzUYhxrcBbsaPxE6jmav5aNxzSq3kwRMX4Tkr6eaU1BaMwdbcqeyMN9snwYV",
  "key14": "3hHfdeBUeV95DNM56MnrxyWJDTskAENgTr6z6H2ceeCVwMMvuv8DfWvASbky5cTWnPubH6HnSghcq9SRtkdmMxWe",
  "key15": "5oNd5YgC79YP8r277HbmdM4cQFe1BrHUfCAV6azwsc9S1QCNaQmqo9tBsNQMdoz2cCyNW42sxFgSeUmuLzct7BRS",
  "key16": "35SCzWXqHKUMGENV3fRjnVCeSbyiTUUwr23vhZFQxXCYWeTRqDk3XcHM1yYRjYVxpnGesjtbhm2Uy8PRw681EwqK",
  "key17": "2yA4m3XmQui5L4wcZS2QcAY8zdoeJKasxgUoXos9wmZj1etSL6ybrLPzdK6Uqz14GfQ1DXVshHx6kcb8FdvgGWEh",
  "key18": "ppYWUzcdj6ZjoChWCzg5WdTKdY7RnLD1xP4nYMAFLvnEvRC3TnAp1zMSAMEUDPNofMfe1YA7Pr4oceGNVMaRjHN",
  "key19": "3ZZ5GYtxVCUsRhdDq7NFYPQLV17v4CTdaPow84jtsZ75sqTcxcv881ZNfVfhdrj2pP5wAJjy1cjNUHBNQ2ttmfqm",
  "key20": "4faa7dMSfVqjH6pFhsUGupvkj5NActDTDozCxQrgk7jcgYK8EARMiJrHSZAKdqTn4fHxgMpPdAmg3aQGz5cpakK7",
  "key21": "4Dkc4tY7S7J4kvVyWya5iqizjN93e6ggRaxVphA1wAFMktrZeLLL1qnsxWHEzRQAn8vMRVrYhx4JNdSPxhnDMWky",
  "key22": "4T5aR77URN3uT9dHJj9KhGQH1iRYuGBeEPRedQsHYBUX3sjxxCKV6eSsiUrXjXJta6wMwvwtqm8aiEzRPNThKem8",
  "key23": "2tD7dohEjHbk9YmHz87BzQMhn3dP58ms7trXPHKh8wJwtMEtm2kmLdZPFfmFQEnaUBogSUr6uYVDxFw2r1QrsH3p",
  "key24": "4PAGh89WctRR9RBRp8AYn26eZHv9vPtkE379BacvvyAqifUqtU99igWRUQKxxjRRy71irzs2LyHFd3QdsyEQStR9",
  "key25": "2mrGPoNbQ25mZk7ygNYtWMjukbUjYJHmQQFEp5qbzbgzh3AEVwm9NEf2nF18KC6qeHZ2RHyWJF8t6QBBuETQndkE"
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
