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
    "5Fd3dJtzxq67ZvDCj2Lbi6ULL6S1Yqw32TrsZNmkNJ3cC12xw4RVVqsAgS1b1AtvL2n5BN78rFhV1fomsp9TkjWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7d19dNRUBXvyQ37J52amJe4L5u2aekneVayWNqXez1LG1petuhTUsTZG2oHZ7c1sQsC4HxWQaSWStaSYMJDWmg",
  "key1": "5ZfgkoeQG4RC3Up11V4wsFiphYxSzJbYk67jPecs4UR8LQxqpcYgFrhFPxp52x3mrJDKxptuuSaDUNq1n37iy5yT",
  "key2": "3VY5qStAmneicFFcPk3Cp4pu81nkRh6zjikJ73gbqLZFzZdXsQkzRXTHq1JNvDWUMEqbq3CsnRYWgBrwCF3B7oPG",
  "key3": "4Z4dL98APCs2wf4xuyCNybhuSHfjgyC1AgcNVPcdqxYf78aANwqGGbQ3tTEvFohmDLfQi6Q9KdQgvmy4DVuZzLzf",
  "key4": "tqJBeGDeX2K9YScAe7MUVxBdAAvueqWwbG5PvdWez4meSsmniaT6JQ2kKhiX4scxupSUt4DpQSUsk292WbJKNVV",
  "key5": "2CgA65YXE9XUTBcJwVGmbiUgRuJmRG4hAgPf6jR3GKfPpt4zHdXoSBfybH9knjUfidLGKBifF83BztXm9gJ3EQxH",
  "key6": "3Hssg5YPAHxx9hD24mqb5Z4LQcHProGtAcvC1itDcAvsdHmZHJQfrfLv9nzHJXgAozXEMk5sR9fz8pUGrD3S4auj",
  "key7": "5Q89UkBN2kcDeE3p5mCLdEBS5DSkxGsYKDRMnLeR2EaHuV3A6eWDMd9mayhaJG6xrQDKFER9xeBBJwRimPPUq97x",
  "key8": "5h7Hk87FkAWTK41nyLD9ohWESRkMATQQgP11ostj8e1As1UoAtuBfkXcHudf6bXjVYnQ67MGRKuM9pM1jGhMcEhw",
  "key9": "35BbPgdYh4D53rVsddk7mNs8AmjcVZ1V15afgqFkvWjTZsDq8URN3A91eQdNBkEDECjnE41GGCSTR1wB5i4KKBPj",
  "key10": "5CQUGLLEoupKjDP4pjUaMpyQvcxdjLS1iUNHnDs15PRtqKPZu8YqrxPfgsZhputv6NGzvWK1coSri7ka5N9RVihj",
  "key11": "KMxegjra1HiYx7ZHvw9yF2cM9QRz2gmbgd4g9tkj5vxuCf3M9NRPMbxGt7PfqoYci1y5LSX6PyPbaJWPnktFWC2",
  "key12": "4qAxWambsU6AxrDzKBe9HwvNTATyoYa8nHFtNK1Vpsp9b7rhWcKcBSLcVjnAAfkurQKSwoNpfs4GM13nYspYjKqf",
  "key13": "2R2zuMDjnm6igBhdzxNdALk8yu5pJrk4WCYKHNGKtqd9eyyhzxXj25bFzfwwSdER4KGUpt8f2xU4rc13tW7KjDs6",
  "key14": "2iJuEEeJPvkeZdY7yEraXedPtMU3M22nLpWgRFcWHBm4bNgt9PeTyLd9oRdZEkGDXDXJR43dsea3ogZwEcAvEBMR",
  "key15": "2o5KKUVpgws2CtwPe9jW3ruDMaDCH1ibDcPfuEpdqxiDDaWXYSZKMrS2KrbcD5pM1JqirnYc4FVEBjNKjWu37ux6",
  "key16": "5MhTyFE6HjKn4Gy21p2MBwMqic7YDsSmaDPjBCeNvSYXmVWwxY9BuojjWrgo3438jo8NXUQBZXV3uAJkb2ZpNnkY",
  "key17": "2HKBtoXgeJGkDrCy4AS22HwAcyuHRDwcYwUiVz1sHXm87m4oRVwbhDk7MYTAEEP6ZVLo535S3GAS79uVX5E56rB7",
  "key18": "5KmyWdYt6HU7gSaDStDdQayxyfGXJy52WxpEhgj2HhvKM8wh4RFrhBgsp3DdaEmMi6uUY3VzeiQ98CRDT1NP11xf",
  "key19": "5AarnpopNfGaj9h2T9ffrzEAcNDWpHUgWaAk9h5t6cZWrDrKZFH84w3outYJUkQsYxZuaTs27e6iweZuMakLotUh",
  "key20": "3zRESLkQNPnrVxRnMaVoeArvN6CumjN1rLTgZ4nNTMUQkW8HsgtKQ2WkJDmghpXf8L9xoKymw31BFpzYGnc9aXP1",
  "key21": "3dd9N5Jnda9CGURDdHsTtHNaffdDDXY8AVweUzD4aHmdt2BJJm9HSTeZdoFhn7pwaoh4FyZ2ALn3VMaLvmv8pcb4",
  "key22": "4AAaZYjpnD9k1wzXCq8WRMbD2uJdCUhiV2MaMaHXRX5TYTaTjeHGr7US1bN7nxTuVPXVCb8LpZ8CUg2TeW1jbwzp",
  "key23": "5XN4RL3oe4JZoxSduhsPfFpCLtL21nt8pKGbUT2mg8JJMv5j6BWNWuNzbQrorxyZN9c725g3nbHdG57YUwsHeDNh",
  "key24": "3hb5XvmrkZM6ZmvRA9tMnMh8MSiQqW2t9f2hPnyvs1tFK2PcHe5sa7GYSNZk4qXL8oajFcc4ZHWdwCbdPezP2jHP",
  "key25": "dFDLQQHMCxiwPoCsYGwamd7xtueYK8cGrCGPmUFcq15MM1SgX7uSRqh6LBvo5YpHr8hKbL3QwLLGVhcMevYwirk",
  "key26": "KL9mJZw8eNABgY9e7fyEMqY7AuffJyka93gGiwghASot3m67gMs5ZXZei14GWP9BDhVntzruUw2cfzZBcZSuQZi",
  "key27": "NkXgRvcJHBAeDr8ZLzrTFwHemZMt3DLRMRJVsp3hLmzPfdjUbnLjFLouvgySwvhFfTpchqg7zxEq87ncR67QX8J",
  "key28": "5QD8SReCbUK1CqXUmK5z6eiGtXPJBovtwZChzfLY8vxQ4yJRiiGYUf8kJ5f2kMAi63uC48zztNCLtm6KekFn24rm",
  "key29": "2jjUtw1FJwPUUM2hCvmKsoXk7tHUMtuJC6PSPzBrmxUhGbDC3J1rZpsN3jaWJsVPwBC1GPYvKQ7Ht46iWMJnuYbR",
  "key30": "3kKSFMQChFQLXtKTSygVXaUYzZrMQhX4QciitAwJYbr2XUUhYzXhVAhY1qTeWzuYWRPwUw5xQwdSrQqoRoS7E3nD",
  "key31": "nLsvZwRsV8G5DH9PQ11BqKFqVJkrXNrtiknX7z1DXhyGAPKWRS981thXtiwxG3YrCGL4ARZ49iJri1R1sTNsJPq",
  "key32": "3Wefu8zyGLDdtd7g7FfVirj3tGdXrbe5rPJwqD6uZdRyoVnvZz5XRA6Xpbzg9PxNECaXxSJKSN3CbQges9kKZLP4",
  "key33": "SG3HLyWSs44GrqGcxJsTsnRkJpPk1BqNvgJMv6wE1ZaJw7T8fYC9q8FD64xGVZT86HNPnDjiAfK3SDrighnJbR8"
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
