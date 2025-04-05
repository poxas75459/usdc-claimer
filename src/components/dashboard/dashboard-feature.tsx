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
    "4SLYVGyoacinW7VCSj2Q5xGc4VbPN54oc3S5TpUwvESMcVEpRtvSvh7ui444Bdf22B7zzUjtWLeZ48ndDtj5EoBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5skTWfQ2tLtsDcByTP3Dk2LHGGGaGSbDqn2YVji4qkf8wo9djSJMv2WA441kr8JS3eqYPj6Rrw85Df3JDv2HK2wy",
  "key1": "5kPA4a24p5XhAZ5oXqNFXkzbStsqCqKMLHRez7ne3u5bm2W9keYX91aLiwCGZFZhuSbwmi47SsgT39Jgu7hC7U32",
  "key2": "4gectx34ZorVSQkH3vBgWmc8W6fAdC8fBVh98HeyG41aWxLG4d7PKH4QoUXV4mvUF2oCQeAdmTv9QhjRbfLXg6e",
  "key3": "3ZebbBnHNDkh2kmYAot7euNCG71DEP5vyYn3GbTuEErbh1UyZCzUbNvzY21RosLQKxiq3ZwxFi3FbG7ARvWkHgw7",
  "key4": "4aJxPxKS726wvGDG8qUhv6XXEfZCP34G1jR9k51sTyc2NXfVB7TjPpgkRhttx9o24RbWap54y4CfTAWkuy13xWW5",
  "key5": "2CCkKNzUEbvfAjc2jBTGq5HxVkJpELsT3ePVv2o6GxpapzmM1V5nnZeVLSYYuBNwDUhXKGKH8xz1F7WBy1C8kBDn",
  "key6": "4QTjKJmox3cnQozfTqsP4FYkhXQG1nLGofKAMEaVhApAVatdWsi5R37N1xMEwcgAzC5zyaNMaaktCrJjdqao2Lcb",
  "key7": "3NdR81AEHEAwD3PCiuSMCgmSGNZri1AfckoY2pQC76BhuuwrpiT5NBW72wx8ZmH6HKhWVmEWHATGFeFHzXdfA4zK",
  "key8": "UikDQbb1ouMB2SrYekY1xvxP1kEoaXG7KbqUuafv6H1pyroeCc43VHCTfdLfN7QA13BFMpmzYu9o2GwURScdX6A",
  "key9": "5MFv75Gm5oeUaPnT2Mhb4gph7vb2vWV3DLCtr76MWYeBq1s2tdBaCkTQyuVXtapVtAAB8s2ongYTa7MqmL1tAjSu",
  "key10": "5J7wXXak4gYDZUZKx9rjCN3pyzqs6B4u3XZ4mVWLbLqBhRAjgV3WSe97urZMQLF2dbBkyhB7YTW6aK2Hw54iELgQ",
  "key11": "4jgK65vUNk6i8DyqU8vzE2w57GLtDmZ8dMhMRc3HNACMYcCd4ruQrBupKcipKKffP1WTVnHrHNjAMe6iXzfakHiG",
  "key12": "5DkwaGrndsYJu7ydBvVPYC7u78P16crqxFHa4NRFkLrkSRsjtcZciTMqhLN26keMEiZWCwuSVFoEuzivvKC8H3hQ",
  "key13": "5wAQNYt66zvsg13h48jWp9RMdAdWERqYmdEqn1XuC1KnXBe6pWenTQuLiu17fKLCXncXjC8PKtrqV36Ny8pm6wph",
  "key14": "5cjbvpoXZwQ861VKCgqDr1dQAjaU4v6hnfMQUocexuHng32gkFJg9itHRn8GKGZLhY2WaCC18n1kW4KpEhcjRTFh",
  "key15": "5kVRxtVYQdeKfvQySDDMqrVqu75UyDBSStgcet4ZwvY6gb34nZWkv5YBYijbHrhJcKxREurzwV2EvEvDu667Wzs3",
  "key16": "21oUW41YSxeKDw5LWxDRypacTrzWs9Ng7iwecyT4foYK89vWTmeqhqgsvVW7K8eqqEP9QNccsxQHcGQFjozXyFVw",
  "key17": "4tRMgfpktgPsnEL4aLxbsbJMjtX4urcKwHMwKpso5LTgZhdTzZDJuQ8hWy3itXMG9ZKr2qQAKMteSpXC4m5JeV7K",
  "key18": "2yDmXpDhaB7KJiAeV5moGiRFJ49sCoJqzV8VBUzHhmbqL6wFR48QdS158oGFC8eH4D4Wur5ne3SpkprRBQX9e3yF",
  "key19": "NxZr6G4WuTWLvc91EjR17bQdXNw2bgbkp6WQsmMRodzGRhaL77PHaeXHs3Sk8yLuEm1P9jmPfwxTqYZsrn2r2y9",
  "key20": "5oqKNWzmm39YEvSNAUUhNQDAbbzAYwCu49NSg3dQULvhVdU5EZVpjAxPMjzETRhidwdQe9W2r9bgrS6eQhjr7JAo",
  "key21": "3gda8zAdPwtumaF3gZKypNq1T1mvyoJthZQiTfD4Rb1pW9nkEPZhgKyEZzRvk87WGqAGWBd6aQbakN1Amf9t3fbB",
  "key22": "4ZzjMnYvPAonjCGJnRMRAizNGFoNGeyqoc4xdetEmR78dSaFX2rzTcJyJfqRGaXmCf9tjLSMenzduiKwVijMP6vH",
  "key23": "49TeUeNTkCp6jMKYo1VvmnK2sECvV6gTVkMDkQJdSKL9QT1iw67JqBFeKLbXMM9AYQsgqf52VNuHdzdmjZqWBYZZ",
  "key24": "4Df1kdfUZZsLjQR6TqYF8RCEgCMPqCNJmSSdEiQDnJx3TdADWUCiicinyK9Hu8g74M8JAMVZ27VamUdtk2xcxjrx",
  "key25": "5d2mbev1xbhxa8mj6QXcqQjdL2aTZ6YK21vaDcQutXELCAwymUSnvhTXEKC3EgjygbeBAYMDNfuUV6cAWgBNEZ81",
  "key26": "Qbmrmky9o1UyvcFKc1EQbFrYPsn57KkCCEb1mTtY9BvVLjYCq3cjjSWCJASKshDUZE7zdGBYzxUL7ZdiMfAsrLe"
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
