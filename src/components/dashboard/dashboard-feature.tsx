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
    "3h25KXnEF6nte1Rmx3ZYnnUoWboQC3v5ZZ5TdYyLxxGbYw1yp27BYCD4xWWYAzorVKeh9kCoCL4dp3zxaFcwFPF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAVerDvwHgFgVJYQSmmZPDNoVC43cx5C38Nq9JcAkbVaFxAWzNfT4Rvuo79XFc4bbLSqyDHYyD6kAWEtsbJxRt5",
  "key1": "22rAoqMdCqYzH89aBarc2aZgUZ9KzQvd3MUiFBfRweYSd9kiRFmSS3N14P8mrwHke1jtdfF6ztuPVxJFVZUvWgRr",
  "key2": "2kMmX6HSzfZ62fo6KcFGLZhBdDqQ6xW177ZxCDw5EiZhx2eePjKBtHUqxeinLPWxRv9SRwuu1BX25ikF5LojAZpX",
  "key3": "5QRxt9o3kmq9MuSf8kr3weQ93aoMXhcjsJXiSgST4te1fS7iEGu9ZUqQ6JYAPSGFMWC5ZMVGA8Jp6JbE6GLTfpJy",
  "key4": "4xRw5XDrs2FEvwPLLkM99GXkxq4AT6YZCm3pbEfuSGNgpGiLjuj96F96EXUvwguz2DUouKe1XGbHDUNdK4DD594b",
  "key5": "2mfVg8RjCNa7MUMBGfrNQT6ketqdFT3Ny3kFMSkP3XamRdXja2fK3SqGkixdytqivkMspc1nn8WB3a4fNJG4RuqB",
  "key6": "5UzWxDufeFVAoSYnesnyBDhrqqgJ12EmUWa36hwkQ4x4RJEznnYwxvKPLbaPJrAUVHN2AVPcZouPWmcdhaK7KbgU",
  "key7": "2rpeCZPcyquTzkKiwah1USPKkFfAUsFHmG7fBughpp9MkygziNjN2EJd9FpSo5pWMKccJ6yzHLRTFUwNVqyiBdSa",
  "key8": "4rJ4GLZXQSZewBtDNofUoxW57R4nT3QeobGkA5cPtn3eJtidUouAatw5qS4b5bY2V7HRgh1EVtkUKjLWjATWnGBN",
  "key9": "5HY1EwUJ4jajjiZRPN6x3RRdF4dLBYEBiri6KgysWCwER4TrAyCskMg6QYDFqArPR7chU3xfm6esnENkiij5ThAR",
  "key10": "2eeiYb9DvwZRt6GdY1zox9VYmoaUAepKxygMhjHCASNRAf9gZkfnyxbMNG5yJK2cjGrrteghXQmX5DV27d7faP3t",
  "key11": "jWokvgK5FdfZ11WTSf5Q9ZYe4iMySdnJUF29GSV6CKBk6doM5rL5mL5dKHAzuxUyhav8UWhiX2qvKzKRQshEspc",
  "key12": "5gxWnaZHgkdufmRKDw2vnKL7Q3S2rB79HWXmV4To6nSsLHzrdsEJmWDsKeeLMzifS8X4SoEiMVZ2dP77zf3CHkuj",
  "key13": "SjT95dnch5Sh11imdbu49rZeztm2nULk1stHpw18WqaGsBXR7ixxgTMeZ6KtyzmiTX4sp3i58XGAv4BcSJpDuT9",
  "key14": "2yyb4ZKqrWwLXr3mddoEgGuKQTMwASbTb81RwJr2dALvsVwSjt1wJmJCeGrGUyrESewwLnDDStDXqvBfopuS2wmt",
  "key15": "3s3rFJ6CUeJeWBb8JG3JwGfs7iKEU9M3PZRpAxXeNCxcSSKVVTpMREz7yUaXvUtJUWzy8cDWMoCERrWaVkYCiJJA",
  "key16": "o2zb6oDytqUHTxfj8M8GHYhrehoMpELCU9EezN8F1we5ccvz3aFqwMofBC4r4XDjyqZEueDJi3U3GQT4THvTmFm",
  "key17": "57Uvm7vwT9gLpLyNCRBXPiZG7X8bqN8Wha22MBeKFF83x9yT2PNtpZmvvoGjTffxxxERk5bLBRPbnjfP86GGbRtm",
  "key18": "3EH4isvZeGyKw1188kVQv6Cpr5pnYqgpiDzjCiycmCR7WwQsV7NvNQAfDXeEhSw3wdagsLzbE4qWeMfjwMBgUa2x",
  "key19": "5k8fSWjW6ahP5Hpqnw79tDJjjoax8Nd9uQ8foFALHjzsj8vftQMpZX2Bw7868bLAQFzSmEBcG4MaGgiMyHjJYVHZ",
  "key20": "qdVJKemEmjxAn8YyRJcZb22t5mAPmsiQTHCmxmMCUJGJSAG1YtBJP1Wgv2wzh5M3Vxe63iFvLrYzm4sW5idhZFX",
  "key21": "3jmypdmjX4URrDwMoTYcnco14vfAygahnciroEKJdVxRkAzjssJrsdysXs3dNJCf9kw9yXgxcK9Q5nKxG5idt27K",
  "key22": "4n5qy5oWYUNYMcJ7xHZ87dikGUypSh4Pqb9eUCiEmfdZqKXDAUqcZTjrenchfgyLitMeEuMA1nu5eFxNL66nrpGN",
  "key23": "QKBi6xFoVdFLvgoHheyUmLcRTo4RJANDq1bP4VYiwXSgWXj1QNpjui4QVxeYq1LLZcknsTB1cmLE6ky5wPZ7pqK",
  "key24": "Q5PeGEFN8Fu6ZSZTqso9VdhhzYocsRnDVfq8LhMMkinnRNMfxjbaMgnnLxfM2WrgRNC53nZT2GCsN9gTcyQpqsU",
  "key25": "VKpkDkeieoXXd7z3pQSLjDaV7hBLuNVvu6j2quxDHkwoDBUjFAK3HPmvXEX7tqoa5raz1WaUMHKpr8RGPMqpULX",
  "key26": "5KFjy6ALFjQ6V23DxcopcaZk5d46JdgmQTRXFVapf2RfSnUh6i5jYrtYMUJ2LqF8KrHsg5vP1Cwz1kRW3mL8Dn9V",
  "key27": "5UrSExSZg5rSx3NJHPnyU1nJMJGxGfsh62xYSvSY5SFtfTK3ScZB3M25oQvCgREBgj9wfacnYwLUwzqbstfd4KTH",
  "key28": "64vivhrEmf8VjgDK435NQsUVSgmHEv7nwrjvNjTujnHxYnbxWpeaSoiNvPq6EYJpd1bvWJEMrnzwZHtgiNrKBVa2",
  "key29": "2fyUt5cVqALDHdCuvPszYQyizDzJCjV6sUcsXAtURafykC8J6y5xcKiXEh4YwyMW3RiJAWnbQG9bSQBUxTWnNrW2",
  "key30": "3d8vXi1Z4s6TTwiCkokf3khYmy119KD1YAAud4ZJZLGhWtF9NETAmDWvAmLLUfMrUbWCh7uxrqFhfBXkCjYFBrTi",
  "key31": "cZAaxrMm44FZDcD4e18cFny2m98wuXjCMCgr87tBdkTLNMNcFkqn8VHUghbNk7sfzeM3iAm7KQbnnJgVwbjLrja"
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
