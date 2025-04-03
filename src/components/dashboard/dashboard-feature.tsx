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
    "4NFKxAukMezqtySqKh3s7GpwVp6zGim3tFsvKxeKULn2Z72kKd75avhmNVojM61PHAE3XX9eXFdbXS4oS5vk4xdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r2HwAfBS2TJuNtjcp1W3d5wgAK6utDeZhju7AWPKe8dKMV8ZJCTQW3eQ74yM3MJG8kS17LGpLy4D32cu5dZyWnq",
  "key1": "5ebjZDxioxPjHS7Lyo4NHMQN1YCNS5945fDLJkqDESxKY7hudw5ZUiZeibHJXrH87pMNGmZ4xeWNzHBNjHjSd3r6",
  "key2": "B2VE7vGDEZLQfTme2DjrJzgDeJai8dJYWqKSWDjj8qacDt4qWXtEu3YDSMnDd5P1jVtRi5BjMogJxSnVej9Y4eN",
  "key3": "41HHj9W3SEDrvEAQFZysXLRWSizJhjoPEzwQ1gu4dXYkG3nUBXr3kK4ejx8zwbi8cxFHdr433MzHjvY9zp8eaWUj",
  "key4": "55MpFeBobWWHQzY84o4AfWKKwqwqX4NGzerxN5o28DsFkqUc5xw9wFrq4169t5MfcabAf3UQ1ZyKuNXqFzJZgWLU",
  "key5": "328XXzB5wbJAEP5iCbjLNuLhQ59GXoeSQ38djeEHaM6GWPzejhRYis1dBiHaaBKxTEjNH7pfN7Y5tgq6xGYLcsYZ",
  "key6": "2VgWorHvwbuxntjgj5EgYFxdqmANY7bpN3kaeR3Uu6jPFHUEbyfGEmeUChpT58qmRnGLoNLXEYJ97pZ2wSrhLcLX",
  "key7": "R2dDGytG9Y6MybkS2hqugCBj777VfYAoE7Z47vi7S2hLYv73m8u3xWPZU32K5wJBkyWqFuPAffvmuHHUyX5ZDXJ",
  "key8": "2Dzw4NnpRu6YKuhbUUpGYkv1ZGNcwAU2BmEfRvwW6JS3X4FfC3Wa2V1J4YSpWihorjVijHPMouCKK95JWwGPw57K",
  "key9": "7SXggSqKRegr8jz7eVUTbQKpmC7GvzotR9Ufg9bLm4wFzYWxfZL2bXwEbRyrx8H8Jk8EapNv2YRhin2yTEr7zy9",
  "key10": "4VRaw3jiL6ePjCbB1Y1WCzDsGVVSpFuZySmqJM1iq6SYSNeGrjXoAkioLMYiH6wXyVSCk86fx4aDBMkyk4tiLxJh",
  "key11": "3ZTxnn773gi2zBdZeVbtTcnLsQKjXc9c5D4U46doqcKAxWTFJGbRp562FMVSXcrFXi1zNHdrfmiyNU89N46yuQfZ",
  "key12": "4s3yEhJaWUzsHQj9ZpkoyUMwGZp4yEUvhhzwosYYnaeYQHJVjzGMTtJaBrVZjtQcxj3QLe1Cbwh7hEcARhiNx6BC",
  "key13": "4N2kZ4MEpbPc8E6RMnuKsPkrAnXFo5vwnkkbtteKUMDucvmdk7bgHDxCwEo2eVb3rHaH3sSK1UdK3ner4WUKgRjx",
  "key14": "3BqUWd7S3YfYH3qPLTwT3cxsaQfDmb5Gjci2JqdovffAi8DbSJDZdwrNEch6JBf6vNrhsfsQvGrYLhCAgQXFAxn8",
  "key15": "4xW7upCKQ8H8ZKGRjmtJbG8f1bfqPkfeW5JiAMFpd5aYVnjwSCkmdg39RvddUaNeNcb9VR7coCwhJeGQDBc7nzFz",
  "key16": "3uHkh5ZymxJyKqC7qNEw6CfZkABeGHeutVGMtBannoCt4ZbsqwqJ38fPqWEwJD1EYpGzNeuGpxPDjkY5DM9jUT7c",
  "key17": "jht4y3sARVETM3tU69VLGAz2zyPLuSqiw9HbPJFZQ82hd2fNnnuuxuPeo2E5N5s2fVwM5bUyHgSMF1FwQeepXD6",
  "key18": "3Xzn5sDTUaqQ4K9gAP4TJmSSFn9DrZeG4bvvHt4UB5y35wr2g889hokssU5AAWWXyUFDDdCFfEjjes3YtwHfLPFM",
  "key19": "5nw34vDaS8E7CkUwMFNmmpjmhzR2DNp1FJ1LbkE2S6t5yyw16rbydHp7EneAELdKJWZDtw35ZJcdicrPkxCqR9r5",
  "key20": "4Cq2PgfShtqNvNR29B2ToCQdEETW1bhPkBoBW5DBzCGhHtSRyeBjFjEmqXjPaJmDn4NGou2SEGTzxfiAXpZjBpyK",
  "key21": "KejtXGzf4pZP5vKKAFtMC6owU1FxmS3JLTBLp5h3QnuB4VTuSvGQva4vwnvaxHNqNBgMuDch9ignkLUj7Cux6xo",
  "key22": "3khkorRY9ACqJyS4BZTScpP8T6KE9FtEThqjq3kFUhkJTMgCBeDjQEeaVtnh3Ce6DBYvrA88MwCK3xLCZgptNMQF",
  "key23": "5weJhJxDWgagAVPUAuHpfy8gaB6MVTTJLkwLZKvsXbd6uoNUrKYvmak1AnrFybT11N3ZhgyaDfxwF18E2DgXZbxC",
  "key24": "4f6BX8rvazi5rQmwwSquB1rGi1xtF8iHgZz5ZaNt8xNDwCLD818iXvNMDUQMBpTtZTyYKzKKnn3NWnDVL4JjYytb",
  "key25": "3gk1CN1qSuijif4aB3GNBqB7qLuWu7Tk72q4qrogD4Hup1Q35Ck3n9zuLQkD5u1496qQJiBucAaLNEWkvL8jw8c4",
  "key26": "2aTNUvozpn9uKPpP76oqjSmrT7SH78fE3Z3Bagk9sjtJgUUu967LFoDxVXovZ4f4B8rqxvhoELHQjbS4HFXydw7u",
  "key27": "4N1nes4Tc2RDSGtk18czbJmujZBFiZKqSwVn7ke69pBRWM9JM1yzZaRYqaMtAsbpaMErgwiUh8m7oAEtdmU3sFC",
  "key28": "29jKMAfjFN1xpsH9M8HnbRa36ruaQ7oRgHW51gHrrdFEn8DgFiShRGGik8Zy3qUBidB2PzyVtnzxPrLQU9DpgEWo",
  "key29": "2BgAekRKQ8aeXCvUSS6UiWocRXJ91M5bk5xVYD6ntsyCH2EfZbYXatdGspJhHuGVfQSHUa19Bb2XKp5XHvtmcAg6",
  "key30": "54vmNXk6v4hhq7v1hFcigUAWga1pHxUYHsVGcLTP9xGPfyFF5WADQp5S5pSrvJ2YqW2VBA5YxKUHRVM96i9Be4XL",
  "key31": "2ChMCBscLuMMVZv2V2GG5XRKuAV6YEsFs5GZZ51AwShWJeKNk2Ufte87Ms56rmDuH26d6H3qCT83RmaDxaXt16BP",
  "key32": "kZTxE54WBz1YSqzF6qRuVRnYKqm48zeYa7ahLR3eiC1kjz35vYnVncKjTjoV5BcmiXDYEXwqLcmAmEAacTRHo6G",
  "key33": "4idUCtHm9KTkyYNKQzRWWXbx8Xzx8okmgtZcJw2VYsWhXPpKdTGhtNuKTVpypTMcQcwN5pHjASj5mRfm8yPCjDwB",
  "key34": "zModHhskLh9UpUpGcRmM5f3Yjz3MMazJy77yibggUGhUqUAsZATXAbwqYsZtGb1AxaJ1AXEAXvcFD8na8VSrXi2",
  "key35": "2GyGzZFZSyRTKkL7jm3118xfdjAPMs2bpBY19AFzbZbr1FbmeYkQNowisBctrvrwdDRq6FvwXSTA9hX8WpaxYKY4",
  "key36": "3fD9iDLW82UCivURrPjLPqXABJmrZQcvvejkmr8wSdRppLuTZkEW3BAShHrjrrmyDTM1gJtamSzvc8bAhwiuibhw",
  "key37": "5JB4PxThd8Tx2kUBzqNmj9MKpZbP5uJpYLHhz5uGzmLVJBpReouCiSaCbc5FAfPg41kWRMcVNTxRjVM8jJ1ff3gc",
  "key38": "ed2ZtPbddRPzKb1tEmt9Z5YFgZrVMACUkktXwE3CanBpoRyLRWBCPzQoi86PkAytrjgeztrvjAxHHDpG9AQMQWw"
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
