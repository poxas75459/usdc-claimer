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
    "2CRYNtgXCVQpvnAjWM2jVVczDwiCxjhobjR3QhM99KR3UBuoLCjc1j1Wg6Bw2jhyYuwGZ5dRxeqJTBzmN3yGgYQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AoebKnxUogtaJHPDcFXLcXvUQTTH3Wwto1Ug3ffXWXspUzn3JmWb1KMQvGyS1ZeBaXNBWigkZgGRsmKEcme4Twx",
  "key1": "2XT8t9XbrjHtSbMP7QHe3kjax7ZudaGBe9jhUQTik15shYgow1PZ3YLRtUNasARKLq78orTgmwvJnH9itTNvDgij",
  "key2": "KRoDpqfRiNUnWH89MzyTW5F3Ji8s61ZpwFTwi9Z551iqp9KJr1xiLheqAZgTiwEPbDJpCfkN5mVWxmnZocACoA6",
  "key3": "5ooX8GA2JYRNCq5pPaBzgKab5EMpeSrdzDf1HkFgNCM7Y4AEAoRf7dcYuBV7o5wYKrTd8RtiUQQj1PRBum7y97wT",
  "key4": "4cBZo4mcrxFpyRP3ine2icEibk1rktNburyzNdp47mguNZ4sXopdXFaxw8j1ZvjbgPUdmuwH1oBwXz4H94S6BHPx",
  "key5": "2ZPsjThWfFNktaP798c8wQ1ygiDCrd2nGbFuVrTFk4t49vuhvEkHRurgfeb2xggqMEaEfN3yg8AZoV44hv31HV8v",
  "key6": "yQDUyMWchj4djut6sG5t7PABAbzGppi1LuH1AMxTHRjU6SuMP3Bw7PgcnvnEFZttG929fqLZ1hnKc6GtmYNEkTX",
  "key7": "63diBbdnBGZNWhHcQV3qfxVH76hfgWBndaWGrkCbGZxhD873GhSXaVZbuT1DLFLsyDdnf7HjcabzHVoK5ZLYKvT6",
  "key8": "57ZY3VofsadiyxhAWrnNRXoJUD9Tp1hJC43tnfPwWyr6rzCNAAHQBw4NDAtq13rYH3UQSaGEEDSMgakyPyQui19N",
  "key9": "2cfBsR3C8MVefoSeFjonde9eujxPRgQZonjAtSX7ayMbDbiC55wvZT59WeY4x7mcRNF59ZPbKAfYsbFeiiogNH71",
  "key10": "3TYwZrmJ4bof7qp5xLcnJLZqdJ8aG9gQS71KsF6y1zmBo3k8YQAZbn5LY8BCVH74YwUf8NTdtGJRvJ5orj2wM7VK",
  "key11": "BBwxYfCWCihWApLnhETGxoheZ48vGiH9CVrV1wVGBui9TUBYFGmno2SstfE2kKDoPJ1dwbfxLGHw6FiPCsqXWQx",
  "key12": "4tZN8jaNC5ubeK8QCA8r3QWeYLo1AsaK4PEQfJp2YZbGWSy14AEVgXcK5Ap9GVg97s6EvJuY2AKA51LdnDZkmayT",
  "key13": "45FfoGMbf2EFfHHNX9jTvueKY5wYaF2CzMg6bgxoeihd8tV9u7YAT7eXMU4MbzphuGZydU1zGqHbZaoRSmrKXz4",
  "key14": "2AXXvXPh7PkNNaSvahuVRhSS8GJUf85iLKgHvE7CxXtRLGgTUf7c33JTokoxp2H7v2mPBDM8btQCZPf84D4Gdids",
  "key15": "5Tumc6uyUD5TkXidzJH6i4ATUaCL9TnjzaC5fJ68e2ydxNohUMU9PHQZ85QFw7FcxnDNX5LvhULvJF3MnRzr6gir",
  "key16": "2Hxkzdir5zbonJRddgASrWkd2tC4RtJrorA8xWTA1311NM2TSrqFcDrbhNMhWce2a5hpKhQWmqLj5DEaV5yuWWpj",
  "key17": "LvYp2P2JctmWKiaz6Gz8e8Sn1E6xgpWomaRfiEaqKoqudUTPfqGKAb1Y7XgdU8mLP7GgPwSU2JFzSpUCJcpjFMb",
  "key18": "5o9KkxPCugMLe2VDmRmbAz3dx3x9hchEPSjKrH7HUBdhBo37E6TaDnq9wtg44cnaLytfTWLfFjxZc8QHBZdhMxYt",
  "key19": "4A8uGf8FQyQbA5ZHkAGqGbKk62opXKbQ8QvP51eUQRGUGj7Huu3qkGiXrB96naPfpJG3ALR528Km5Ln3AmNWf7d7",
  "key20": "2KdhCTzrAtmBDwDYTwXx6r5dJvxJDaCWUA9zByG2656HHq38Mkz6KanKzFAxiFv9fyv9BZipuaY5anYhF3X4a6ba",
  "key21": "5UdhfEAKzutmSEF2VnBkM5NqL34uGoirmkQ1xUx5gK3aEkqcoKZmAxpkzmMpbH92xDaaQXeAnQVXiL2v7aGd7sC7",
  "key22": "5toqUhnRmM5URrsHMkGcmynemDmw5e1yYxfmEA7sUXYtBg9soL1c2FFjA4UemA2yS98oFvU8GCWoHsj5WShCxGTh",
  "key23": "4McLFst8iGMbtRHxbzYF32ESfeFPrzt3RQePR9KVmT1BAWqpoj1S3tqMKL5T3CKWbyZd4Uf8dA85esJFqN3VADYk",
  "key24": "4iMoh7wWh7kdT6v8D5ws93LqEs6zeZ4pLiYUfpFMS61A3f96JSPGMBkyzYQKqS7xYQmQ2npQYmpuEV1owQWDGk5r",
  "key25": "5uoz7j9odoPJ4b9sfHSim6YqHLNGX6SmYWRLQpMXRQatqQhCVG5iSak8SCNAyPjp4rVPZNS7mPYma65zJr8XuPED",
  "key26": "5pM3ogNzPcYP1fxS2pfNDNSYE2YtfFVm2uTqknFbFss3Ye4VjoSnvsc5iu98yViiqhLJE52FggMZ3aXMiBUNcDdF",
  "key27": "2ojMqRoNEhXX3JxGjYeM87U4pm2CQii4Xecrob7b6wLLRDqdpH51VoaWqF52kR7VvpmAt6gBerMRvwUkJLexev7a",
  "key28": "24NgFnvuNTRdwYju35sZhqhDcvfECLDJVzeEA8gYjR2nC7ZVDotgRSLfJ29wG4ZByjQHFGCGe3NHwYMJPvf2VyhJ"
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
