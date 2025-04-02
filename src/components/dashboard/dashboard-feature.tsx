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
    "2mnHpFcAjp9ZvDFwWpMtkfYvzR7JWBsSfR4GRwSEM5pRUcR1HNuytSqhJ3V5iK2jcXfCTQrSkzcysT7NyuQrXajj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Zes95D6jZD18kGmH75WvLUhsebXEGjcDABne2owB5AfpEt9zqk6wfMGjRoKezH6B9hcqrTtR2ubEUndyWiCyvL",
  "key1": "46EZ18jsyeL5tQT9raNjYKfx5JZguhwjgG27TYmWHE6xBWqKYYy1M8N3WZ7VDqiYWE9bAB5Aw9doGFpc9yFfYdM2",
  "key2": "4CH1myWWrdZhRniq7yXEk4eRSno1jwryqFgmph46LbZ9C9jMbvscD2F6XHfc8YJ1fcq4Ejr7SYnNvZas8Gb5CT4d",
  "key3": "dQSArHy7vf4Gj3UNKXY9Sn1gdRcjuv5Cx5nKGhkDGZ38frPpxH5JnUWkQGpdDiVKSfujSrw4PFgPu8oBSJ11RM5",
  "key4": "2QjrDPLt5vtcY7Uk9GbFZjAktEpBVfqo1evAwDgwEWe6yffkB4WNYFSMrHcqsu4DXQFsE58Kf66732U8tNwGTybS",
  "key5": "3WsJyU6ggMysjCcwWHHSxPAo1BB4vS2gpNMCgoEWPkZzREd3i3K2zAn5CXvuTy1AFLUvyCxWqXcwsQYwvSyb9viF",
  "key6": "4ZT36AZa4jcduvaYE2fWp9t5iphzHE2ktt6mbi2NCBk2X1AYcjZbrfh47c3tZ4ynz61TX4jEnWmqet7Cm2oAaeRG",
  "key7": "5xuH3U5zRxUs9AeSA4tzJsZXceoopmD6y9vtFQUKP4ZyN4gok3uaRCKbjtnQA9m4sdGuFMRzQKvqyq33ULC4j7RK",
  "key8": "E9THBDMtzYFoXV4buMzNcRa9UP9DNnL4dd7VtGU8GUja2Ze3gHSFMJ7xTonXN186LremM3LqmBj3xdiQQPfyRtH",
  "key9": "4Z4j29LKyf4RDj8rzx2r3kDvEzRY7ANqMKGw82ZgzPfspdaw1MW1G5o1VZ9bzXJFxpPzFXk9mf7bjTunF67pgr5H",
  "key10": "4qGEDxRuExtj6KG1995rk3wC4CaxFcXtuye1UpmJpXXxWwQD8XPxN4cZZZbDaYuq3KvbUWmYjJ4KmcapUP6Ja2fR",
  "key11": "4HJHPRW7pAfHPJYaeGp1VnBruqhEVay7wfZ5pgieo53R9u5hWjHyoJqZQY2en96kP44vMqGwj6P5dgLsHsEvg8HA",
  "key12": "2juG2pJzVkujVQRpSkFUaBkDRX2mffEeeeciC3ccHA1ZGX3PSNRAHxSMoMSp7RFwx4NK18NsJdjrfy42pEmaivs7",
  "key13": "5fXPLCygamU3MoMbCmr3N2A9YkTpYHQfbsPN8XP3tj1FHkKS4kYAqGgokM9W86PVnciHMF4xV3FMzVENSGQEQbny",
  "key14": "5W2x887DZ7iR7ZCVoUBVH2pZejj11iHDF6o6nwQnk4YmG3XwQWynXonBZqE1Dg77PTHS3s2zhbgqwZsnqGbuLdFy",
  "key15": "2XJqExBKXrtJxPSwHbzi6gqmYvUqfsQGkz4XHHeFoPdEkDb4CaD3dSqMuXJMkcWLWmU51SbKUm1mAB45S3BAXSuW",
  "key16": "4M3fKQaR3RRzUu39rycpCFJwKXHPDYaQiswQMN7vxPza1eEu3gsDs56myo8PWgvcRiC8R3HShJ2y2ojL6Qk2fiTG",
  "key17": "4rxvFWr66kdf3gePTpZhTkwqtkUtsPqhVbrfYaNUxzfdifnTSpJNYCQaqbgJFPGfoNsRbqGWNBwXtGW4piHofi5y",
  "key18": "saDYypfXxbxzUdjawGHfySU3SL8h54bbm1KtTiLPRZMDwu2c15wxmqiUCBD4a7vKNeBJ7er3KLeg4jJ6Ay11YYm",
  "key19": "4Z88f9oy2go8Skoy1mqvgEbMsVb7kp81Cqo8WMwjVeGwTySNpZUy86Pc2DuSsceYDkLKqnQ7ojdkLrZRTcucJzXw",
  "key20": "K9eDsYHfh4mGhS21tMwtcxdeFsusResvEZbjF43eRynjnjrvJJVXWtU6kjRCLWVphEnAss5K9SPn6YAVaijidPu",
  "key21": "2xMuxN5SJfet7PEbdJNBMvZgR6jw3VdaKppv5ZGqhZmsrVbG2FxC3MqJTXLXWPYVVuMq5brxbZ3Do4iN1NrFiCZW",
  "key22": "2by3cLQbTVZR8Ay1jXNaPhKBB6JnKLLJpB8kkv2cubA9vqecwFVFQPQrhSzDQmpAPyAJeydhWsSTJf2Fz66E1861",
  "key23": "kzyZvD5FfQ4g22suFAejF94VdUop4hSttEmGS9sAo8ByHUmHu4PgEFbBqvjUs9Sv5ZjojxYkQNGDueF5196BKgL",
  "key24": "5v25kEDgWDW7qY3ch7nDbTMWyZBJdGQdi7arDAB8J3zokQ5CDQWe8VX4SFZqZvRB4Bjk3txYX8UDciKT27jSkwwo",
  "key25": "o86uQ2MPWH33X8tXTdW2Zfmch7iqQYX5rGvJXZJnkSjHZ1SzFcVRLVczkix4vCTCs4Nzzm7LcKQUq4iNCRyzVnS",
  "key26": "YqM59dx5cx1nhNAm1HFZjr1TMUmX8udM5kACETSdMZg1rHmwgCGABLe99uEgEmwua5R6PjGQ18RqNC4zX4DHUtx",
  "key27": "n9Cr2eNUczoUxP9ovY3kRMyLsoTqK2sr5NKeQ9T38SEAXU2iChfHaWWGD21dAxHTADHQ2qNosL2FyWSWpEhgzNd",
  "key28": "33n44ZtUoXf2dEeSNM6FB4UkEuXwPfPx61cbHTkVkt4nNRoQtmMY7Ck7EyTErKgAX5wbaYX4oUi1ExXRx6GNsAMr",
  "key29": "59CTf2CXSzcqZ1smDA5igSZ2dSW8LyBwK3yVub2HkGzLRNtUpJ8HTqxwYLNAuGRR41SqoGYzoSAFLBpypCqsyFBQ",
  "key30": "2upKXiUKHfjmyjsNuH3eWAxWC1HGUetKyVf4b5uLUcRRnRaA4sKF3oD8M5GzX3XC2m9ZJL2zspvfjnvwnTCiuwSZ",
  "key31": "26dqd9PFPAqqA4hMKsYNxSgdccstMo2Y5epZa2u8Rbkg4KpfSTGo5DMKJ7aLMpQEMtng9YYefQtbcMyQ3XRkDhUL",
  "key32": "5bzsThg9eKde17qSZ2iZUPFbcmDw6EHcjGWpBdey6RbvBLsDJix3rSFjEozeXwAWuXRcm2fMm2UxV4cVzpMk72Ej",
  "key33": "5jV9S2RYgBQjvtgLvydmo55RLHKCYAKVTi9oQ8boVz7p5o1531623VvqSBVufJuVAEz1u7xpaXkR4mR7UVgKfXqi",
  "key34": "5KqsZtz9Kyj3jtmFUUcxW2xE1GGACMDp9etpWGrncLGtukfF4WJHshAiF1Tq5kPA6VqrSN6CgDmv1cQwR6Uf3Zqk",
  "key35": "55eKUGjYbNoVRS3RVtJTMxz7iFcdFUU5Tx8X2ELQZdF9eUXnGWFQc1pYLjFMbkwbtUNMYyAY2EkmGL4LNB6gFLDo",
  "key36": "BQmHwaz88gJzWRXcNC2Uca95uSzYrxBmnHj1HSttk3W25T69BURFBJG7TqTXpMAMutnobdx1qSpgJneKZ8kYHfY",
  "key37": "qzU9RJiY1xEKnjqPrvKmZH3D9k1d72kNYuX8iQpWjxL8TiaPiJ4zLn9WJshCyjS7Qncx5kMpqqERW9ssy2bdjv1",
  "key38": "5rrwB2DTmZoqJj3KVsXPCYuAgde9TwcCdWL7hi4BjvesGVpiRZjdQnnVsTFMUDeKirSWcqLyrnNjiv9j4z1dJN5H"
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
