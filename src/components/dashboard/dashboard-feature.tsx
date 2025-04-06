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
    "2byYjWtdohzkvmGptr9mvUvCA9untyMMwR2RfVUHcTizoHLuJb54pNyhCqwE6Qr1N9nn26H3rHv5ZsbB1wwkaYB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66imYPq3y288TRPBZWhvDirgD2ueaLm3GuJppuCxdax5XQNx1fQvLt9pF9cBii1kMqfv16KFgpr9vo756CsSg4tA",
  "key1": "3B8z4EJNrvFmzverNM2Frxa74ak9NfNrX3ryPvwPvBPuhdPK5KvcXCzcAXVnnaUXa6gKRfqepgdyJNuaT7KjZ8Qm",
  "key2": "123q1nQiySqubycE8BEGbFJ5wNVJqdMS3A7oN8fk3iacub6s3XnbJvDtsCLsb67ygawQM94vhpGPYrkoRiJg5RBk",
  "key3": "4kZcrrH1nb563sJSUyYkPwvgrtY3FbXKJy61W3GFXb2eYKdPXyZhp5BQKTDcswTgMJ6EtMkdREm3VzJokE1J43cf",
  "key4": "36ePyrh5bCHaVsQ1jqLJzh6FPtHHCnZ81PLtMMgJjo9UicjT71npy52PBCNiL4fYPsXAbLTtr7F43twRZHWiBoQR",
  "key5": "3d2K324W9wHUDmoeqxwdWC2n96WWG4cKcbTfpcSopopBHSfPbBNZ9QRwFZuksKezjzF9r61fKGbSUufwwcqCxEN2",
  "key6": "2Bb4kVDHrjaUKQsSYc5X7ZknXE8QdXyYNsKoR1TkEzjCgSdjDMcqYrcYcGyFNE8xd6VTbFzq6HgXbWysupcvePLn",
  "key7": "5fmNZdq7X6Fg4hqX4bCRfBypKXaYK5z1atgyfZSEcNB95N2g562YtYfndUa87xdzi2DwzVF8n1q7K8Cz9yUQKLiY",
  "key8": "2RPZyqti8BPHiSFpmAV6NJzvpRk4BzZz2bEUA1QCpyPCbrRdVTitaB5QYmtRmHtzUzh8HK7U9DubusgUXbKAPhb9",
  "key9": "naixu4KutMip5vCcVuo1oH17PZkS75uxprw7M4r3QrPAZBoDVyGiWHDaHR1LQawHkNeBebygd9AK5aJQERV7zcQ",
  "key10": "naGkQFvbyxRiZR6We4x9vsqyZLwUdPSrM7t6Cx5vVhUe9ByEsYot1uDVDSsGihhBfnTtfFx3PxWneKxKy2phQeE",
  "key11": "3KSHQBUG4PbKqdWJ6nPqcAZEQW9SB526V2XZqXyHkuggeJWNNNjKeLMtYw4Uu9Asq1ZjUv6zq3PVtrPS4a5gMzKN",
  "key12": "5J7GF2Ux4QpJS86HfUdZQS6o6XyujmwiBjvSMbxSP2WK1HXnaH7vo4AwUWYXH9QPmB5NBNuuUPR6XMQviSw48HSY",
  "key13": "wz34Vf1gztSbUXU5M8XeUM1EELZEqkxVzwGA5P1sSndE5zHL33EihJuE17P2Gj3MyjMVc4Eg2esi4ShxX1ShVya",
  "key14": "STXEEfFGqW3QR2BPEJY4eJH6Dn63Qu8rdkW68iUXvqeKCbXLpZ4G3rKpHEhHyRWsjiC5r7EE3671oAML6ovdNg6",
  "key15": "3dojzNxCibRwStkn9g7S2cnvfiXNk88prHqC66Dg65pz5QfUk4hSF5yLntXsEApnY2PnELZLRbV18idLRYPsytRW",
  "key16": "qc9g4ZjrGAN4ACB9WShiqDSvQJYxQensQDz3H1KCALAwtiuXFvDPTjirZzK8PfWMXQa1SMn22F6n13C3CyzmrJm",
  "key17": "2ximCnHi7XX9WcWNboJYhfmaaN9cUUSxBkd6wkndFWg9ARmzp4CYEv85e9cqtdEB5ZJyjbG5wKEL311pGUa95HFg",
  "key18": "5QPwQXCyYjzTuhXHbRfvz77oRFW8N5UekuUTyaAmZD8Pi9XJrSc1bAZVudwdhfNjMbhYmi2t8LEvbyoaVPNzPuaB",
  "key19": "5ME8Wxog8Hapi392VpANr8wZursJwL4VB5zFccybp4Xq4ysFKvmExj5SteeaSnjG9xtwogHmPsA4yJpxUFXk1gdj",
  "key20": "y8RGfRePWoMhjFZBADhzjgvJiKUsBv8NdGmL9W8ibZ4u6gXYP88AUg4nTudCWhe7D826vWw1uwJpc7o9YEMifcp",
  "key21": "4tmvWLsDaDEXpgzm7VgpM6mAgPGy6nDVTyvNLiiiQdGCEEkGQhNsKnGvGVJ14kqdjBm26u7p7NfeWgyLgGLXfyTJ",
  "key22": "2dPJmRWrWq8aFUa5sjMqvGvXz6B3FEUssWwPW3KdtHLsMJ1kMbGuRPewL75K36vgiU12R6uEgh1B9yrv3wwLSp1B",
  "key23": "5WfLA98bFwJY7r34dAyHMhvKZmZFH3DRvkWQzMXcsREgZaHdj6thjpsjSy1v8fZ8GncMm2mtm5N3wHsGvNCYa9Aa",
  "key24": "WQrK2dcfCX3iiAaDix1mq1QAUX8WwFpzLy51oYoLif6RRBDR2W2X2kfG9wVHZnXwrboRC16pG4ejxD1fxW8sFYB",
  "key25": "4k2f27Cxt4haP3Bu6kCAH4Hfp1R89skEg9yjmfCvrXMC1P6qcLNrWLog8FCL3h1NXki2fqDnzoyoKzBmyZHXHiEK",
  "key26": "2rkua1vdiyr62UhAQiZqyf4neTWmyGVJBxyCc6aUdojB83tuRWLuhgoB7zCiHXRGDJFDpEmUndgByEaEFE9K3Dek",
  "key27": "4uAiHSGaSVKZPoZy8o9tzgi6mdVExVJb7d4uqLzUwPyZ8Nhsajc7fdnpZS9qL2xaFyeYuk3rYUTjMms6k6xQG1ZQ",
  "key28": "4DzCA1vZg2qhoQEYJuxryyeCk9Gj9twMLi7BeW3SHAdXK5UnudEYoNPYxuhyR8TzACfbCYHhtyjY3C9QPH2SipTN",
  "key29": "2G9k6LuuETQeiqY6SH2sG32Dmys2sKe6WdBBxz2fvoMEj1QoZPHH6ExFccMHJKeXCQP6YiQ7DzpUcXM1Agu8efsZ",
  "key30": "xT3N8Sii4fGGa4WppwVP7WmC2WaWsrCeqYqbigG5FFC2KfsuTP58S3bqZ4zzyk46bXToiNETiZeYRqR4fxokKnt",
  "key31": "vtCjFBUHXin1QUjEAExAMkZ5ycsKgzmYHPzaRqHk1bi7CWcjBDr4TgKNfygN4hza8EPtCfvZL4g9voRNhrn2vCC",
  "key32": "3bQu3RqwT4X6zncZmEn8NSN5z3uSrEc4rqD6xr5XDCwMfTX33MYEB5XU3ExpLNkd36HjwLWxp4C5aFQ9TEwTp4ND",
  "key33": "rbqddUFbQoyp36cmGwTf97dNKP7sUXqjpZZvX3PmLqFS6pNPD5BMsYxrbgrGarT8ZU6t2SG473TG1uYx9Aagg8y",
  "key34": "3ghhdYMSsRkALVYnUFFdueGp3VuQgGYvtZVoRnhWtb83LnC6ykjjoKusAUBD4z4XQa6kSnMEYA9fBKqYTKzH6YPF",
  "key35": "cuvM9EAaJpn7nfkVWap687STamYEBAQ2dnr6tFPAi8aMMJR1co8XMQfYURLpZYgsZHd12pwUB2yHQoCLbkF4ZeN",
  "key36": "cTcSiMrDrMTqPkJK2Srmg97mkcpwRRq9xtWn8NL7TvQ5zRDSGHG3CVHGRb1QBKEpLmzbWmtomWaidswQhoVF8L6",
  "key37": "42QHGnUMGicN1uyv4sf2eL7yLkepYpiaAQ351LYEHRH99vb8G4u8G4gdJEcDUwYobEWMUJo5cFBZGVPket5vktEZ",
  "key38": "5R2pQL3YBm2deCNbP4aGvzJSX4nnFAP1cep9G1vQxW5nMsotjTME23vEt6t9s5nhpnbRLB4UUh6fzDDZ2dCALwWj",
  "key39": "35tYSqgoZctGrs6za3PpTtAXGxfrLGoPxyEuatRHp5UkX3ZtJYX64pF3ZS7dCD3bfianh8rEdac7vJuhFdYas1Dt",
  "key40": "3G8WqdjeS57sunGdVF8by91bhJNZnhoMsdZ3FeJBD1a6S2EdEbJurDgZNdU7YWKzpfdKFHtARUGm4xJju8N6q3YG",
  "key41": "53t26EbmP2BSKpN2mhgJEhYR8soJ4QP4PAqPUij6QPTnffWNaFypJ13qyPeNVhf1owQq8EYyVXvfZqGqfq2p8ZGC",
  "key42": "HR51zzUyVRSg62dY7zkkeDEGNhFBSaNJVZFbXZjLTPVMwC8xqitYjxPfs9KYcPUgtEVu8DDHQdAh9CAbLMaFLuD",
  "key43": "31WjriLMUD3Yi38BtcbAESVURqToUU84G1ZXcms44HFnekxLnMV4ess55958BYu1H8vGvqzHFe3m3naM5rpFuUv8"
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
