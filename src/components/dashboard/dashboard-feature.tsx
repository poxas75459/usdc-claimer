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
    "29hxnifidjrZy8hZhCh9xXtZZAMXsijU99wmjSadFEdsUiSFeXR5pP9nsjmoM9ZtYcrD6FRc7xhx5dFw4Kevyfeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLcNkhTjjrBUrtSReHkRPrCdm2ifLihzYzrpiMvoCMcNU96QmCXW98qxuLzPH5idkyvCDTWpbA2kobtG6pM4xf6",
  "key1": "5URmvTNMUZqmZycdkFD66ESYd6MWq3KDTGQbRQ5xKvcqugWR9xg1GR5eVzW76XYT5TqfBSf3hfezYqVaDKzbsKLm",
  "key2": "4Rh6cGpbw4kWq2UvWVfUm66GeuGsNXpYdLrxrtHB3PGEWXWCuy7iHkCXvnPkc5JE3pfCGgmk1HSoSPse8ACED9qQ",
  "key3": "3Hdi1brBMvTT2n7X8scqjsJB53gK3TvKudRSENDzc7T7h9eUsQikZam1Zmwn8VTKjKQukE6MJN5SQfQfW5iTkiKm",
  "key4": "4haDwXgkwRYC17HJvmdfxvsHtLP2N1wgVcMaYuXwAzVW3EvFGqt4hdsbdrRZegXp8eM9GEGUdxLMyEBJdtBWUXVX",
  "key5": "4JAPZGdPy5soLHH6ZD4BEbd4ztrbu5YJ7ECbENroiuMvJ3AqpUxpE8mbna1np6EaGEWYyh2F2EkovHUcjBzsQbBN",
  "key6": "664MAZpwFuHsZ6v66hPjFr2Zoj6W3YFRwsGRP7QzEPJWaNjd4EeUnNQT7fmur4oeSK8dm47Ymyw6t93TeY8y5kqQ",
  "key7": "37RJhBHsTvMEe8H4CZ6Qgc6fSYNYSy6LH4bKa3RoS5ze8TqMnhn3upPdKbp1KzfHtA4jX4xrM9NK5oGfJ1N7Bg8W",
  "key8": "4kpMhvj6R5yy33wkfQ1quNQZ4kAn6qE7BbDWeA8LZH1MLg8keMCszLt7JYvP3cnjjwxUsrXnZAHFJEyRfJHdEfAt",
  "key9": "2mXhTPqSpzaETUFyAqsJcd1myBMzP6fvcAY1qa1JHPN84BpgvqoC7nzo9hrhUy4DbVfdG5QXqFsh2Uv1BcwQiaYa",
  "key10": "3YpKFSHrsf9KFJA5sJtSL3Vci6WJVGUcN71N8n5uGegH1AgohPiJ1E59NReXfXEKn9yFcadvnthDduEyqGFVFTje",
  "key11": "2poqmDWnfUsgcGaa5b1thVpRts1EcoXGvmQxio12HCewfUsYox4cf6P9bVTeQDVezXJ9VbmXRuhr7Ap8pwDm7ArM",
  "key12": "2xaBWzVYfthquT1U7th8m97R9eFJb9YfFJojh2PdXVH5Gz7MszEp6YQ4hBdU7Zycp1R7XEwo9vMSxqz6ESACYGYZ",
  "key13": "2pimWjNL1HpPpGbC19AzorUofAeDuf4C1uSH8utACRAE4piS4x8eAgauWXtYVBFrGrHi5xoMVwUZMGrTb6sXnJTt",
  "key14": "2iSakTKmFjeDaPeGiJHUdRsJGjgtPz4A3g73i53ryjXoemSgD24qT4s75MMyqezRi4RtYJ4bj96NEAvpsLWyrWS8",
  "key15": "5VpCoNBsqeQZEgukZp6WkfQt7CoTnuCtYeergHDJJpP6MBpJgsquVMk2RnrTQ2NeoYXmpKJmAfc3hy7iNXeWDfy",
  "key16": "3UtTdZY6k3q6W4fFdVm399Egr24SuKcPRxrD64eFuJX3u5BGCsaay44zn3tCKEowHP6JNbtFnLBRz77JgiNiYtSo",
  "key17": "5PPPpN5gYHPUxbmqAGGurAXew23TUEdrJEhhpvfYpXYMvTRHS75qVTLGVdGKQhcWwtfhDrE9g428FqWw4vGPt2ag",
  "key18": "5c3hidurZbGRcpLG4oD5sPTQMKZkJfwCuLacqcZbJVbVqKYf67ebfb9x2p9GTHCZugCov7HA7hRsLjTV5sqL8EEg",
  "key19": "4HsEdrXYgLLtzh6ZXVhSsyvKgx2giNTHyhvZWrcZLKAd4tDbsjDPLBTuN7Ji9huxk6MqRLok6s62mbLgTJ6iuavm",
  "key20": "5dcXugEM4uJGEXMrdc6Gru2itRydQSowKnW8otXtfFX8KWyXvYTwkN8eZiKyayFT61xM9ReZtsQRfaAT4y3yMgR5",
  "key21": "2zSigioRCdD3upwQu6w78wE94Z3vcnNQEJgUCLLZTucs3JA9VUjkawJpcHWB5WWpE3HSBSWBdfQ362AXGsnvZBER",
  "key22": "42RaNuuau4yL2ZHdcRkqjnbNAjkbvUdFTPLhHkcm7MgQhApL47zDpz7uJbibmwNfHGmSCEHmCBGqcdRpF4PvqvoT",
  "key23": "2LvmQpMRDEL3cBRMTKbBaqVCAYizp5a34uucZcAJ4YThMgcJSQritT9AzoHjuLwUMjGHqwgNFF7KgH2TXVQ8SpJz",
  "key24": "2WHkFjhnCc3todHt7mjse1TzNzaAEXuHPbnAM5MTXG5kRsN1uAHu2CWSZaWjxDMLBevWAaJwevr1gRabd7cYjqsQ"
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
