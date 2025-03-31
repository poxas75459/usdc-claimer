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
    "32ac2RjdNbpaGj42boi4MFVmcxZNp8Hex9o9joV53m8BhURpYjjLUq4Ej1E8UNP7BSd2ZumVaLuZE2MuuwENm1wL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqMBMVAbwP3qHQDC7amjxSiGanc6MdJoDjxpyrWkETEZbpNgBtXqR5AesEhns7VEKRpg4ySMEr1b7kgZfxekE8v",
  "key1": "4B2ZSZYjvKBPnZS4TC1R1sDHxkd9ygMoyj8S2uDobWU3rzrqYguXt6p8BkLKn46Fi3yKKRkzmUEibyBRLqowa2AG",
  "key2": "3zek8TnGKV6hFaPYJuNDWWt6k7FdDNPjobZhyJqwXFCa7JNP8Z4AiEMArMQinhgtpijBgE9AvJzo3J3JGrW7K69C",
  "key3": "4ALzYoG1W5KzEfZ5n6p2P9JQxngdrNWbLQYK3Qb3KHvmgxpaQ5o6J9ZBGyi5T8GzmjMsmZUSeEutVbtEQ69DPPF",
  "key4": "juY84c1z5bFH16FTFACbp2CzDWM28x1VXKqaSxan59fbEtiAMspiCg6j9dFytTCNAH4cmVfp1uwuPHg7hY985DG",
  "key5": "35T38gBrf2mrpeFJVBp8zq7hkoWTpFqHQRthu4k6HyNFsEVrBozrBEZMqnfoXXmpf39r1RHDxnipZRhts2hDn1yU",
  "key6": "5suZ1Tw5X8eUiyoncUagu9f5HVeUavTeigEdRyima5KsCuZsaNh9fzTTHDcaQk8fCnALqNXJ1QSyqbwTzLeQ6Txe",
  "key7": "3QtpFyhBtqs2EUxPGYqHfBmnMGiED6gbRwN5SdbB2EjfXPVZMqB1eht1NjmxP2cBKZcG1Hd4NNhfN9TWA3L6Vezx",
  "key8": "2EXF2E3RLdk5QfRmyH6UMFJ42AYXvbcq7KwtZ8FLvGpvh3GfwDQYX6S13e3WR8xgxXvNpb6WYQeQZXfjcEvUmyRY",
  "key9": "ySecrqF9K9sxWjZLKrS2Lc8xcvq7sDWB4FmcAcNDuNMUpCWhD1ZFXWRu8pjh88CguxDYeipy57rSxLwK6AbMavg",
  "key10": "3MZCJ5DxuCjx6mKZTKrFDSqnwnCeK2wr9z9eYRN91ypYGpazC13opxVL1tzeDzUAPBGLercBRLvG5xkwa95rTro6",
  "key11": "34kNMT3AA4H59v1X9iQBx1k4KwjAJzjepZJEPZS6HmXgheXs91jUSM4zEK1FRCtEpwdSiKRxF7KWFfF1Kfg4XDpS",
  "key12": "31jxJn7dtCnBQMx4G89iNLwT3LLQSFcC1irwGdJrXoBggwP9pP9DfYEZYGaGTUmjEV4W3Uf8NDPsy6HEvZVx7N5v",
  "key13": "2LnSrWMg3mbDJ8zKSxy1Pdz82U38aNHCjGSfvEFLBSLYiN75j1ogSshvC8GW1QLkVzwT4SCykRYK4rDfxcbhQBym",
  "key14": "5wrsFq2FgVR955irv658SVwFseX9dXaoUafFopcEs1mZ7S825QFWivSFee1xnEWFfEsH5nKzrLtjAWENEzBJUR81",
  "key15": "2MsQLtAYyVx6yseANfoyCsF16V5wjTpMmEoLFi6rErvVuyhsCL4N4ZdE8VFFEAiWycpgynDscm8wUZWjQSf3rdh3",
  "key16": "65QGPMxDecHeGyBxrWRPuXMEcd4ifzwmcvj9N2Nk8ELuGucouDm1dXePV3S4MRKEf9DHXyS2aZZuzR4vh2DB4iNT",
  "key17": "aWaRJEmKTeth9pQsGutnt37nqMA44XSCFWLaFcfqTduABVXG7Yvzkb7ruG8hSGJzDkM7CxzoMZtVEKZdXTUgDgz",
  "key18": "4mT8idkPsyLbtuKxWQqf7VXgenoPyoiHj6fcTDWpW1uoG7Gk9snVDQaLK9RvHE2yn2rW9k5nqJPgsz3VxQqxaAGC",
  "key19": "59pU2VqUgU1TXrb2M3QvirWHzDx2vMvy3Cp3nwuSMzedvVPGK4DTxc5PLTMpuQpBEHfHbSnTeUrt5MZVFG7a1WZA",
  "key20": "ywSECB1GzqvQGbErgP4NoSEHHXkW1r51dcQ7R5v4knMHjfQJdWnQzvsrPbU1C82FbJivYLL5yCS9Y8fBPNdr2u7",
  "key21": "4JeEbZALshLp2wGqNM71nUc7z3picgs41D9hNNvwtPRKV7zSzX15ZAjxkF8vLHdLrs1ZzkejJSqL5FguLG9Np9Z7",
  "key22": "3E6HPJC7cLDp4exRPnnBX5XChV4Cn4tQCYBKr5JkgaEJRg9Au5o7TVDrZkujmzj6seim4Fa5JdX6uDuHgHuBabWC",
  "key23": "4z2kYdXQaxd5jN6mS1zaidtBkr1sHKqzP3ybToYVdvxqXaFgVeoXzLJEE1depFTvQE5uPWARTuKoLqHpx53cnbAs",
  "key24": "2pAsX3e1HEwbwVNY8UTGKGKDajEvWcp3MCwEGAXWfcwGSXP8JKApkMRpAgv5dLdrdfpTAmR6gCgsK8uDtX1KkpVH",
  "key25": "4JGuzFkPeg9kVzKtzsQHEuSiGMkX7cWxB61PUR67HTUMdD5Qa3A2FsUMUMrvwikoryihJfQMGZN9BuLPnCXx1Upa",
  "key26": "xAvBnPL62fKiwvhF5HWowL6qBY1F4mM3BSxgdcDM5DcKdWQaSomeSHFRRb1jRp9SdhfUtoyJ8ZCDCjHvZVSyF1Z",
  "key27": "4uUJJkvr5JanCDcEgEEgmDkPBLGZn7mjuCPgcMNquKGv5TyUaMEgy7h7iZu9iP37AR9JDDdHVpwGLgeD3s5WsxcF",
  "key28": "4MHpNCPyXwzh3Vik4tpJQfkUdu1FQtp5saoegHfTqeEu9L2t5aCX6yH7HT1RhLt9astP1bfqBchTvfLvFPnYHRyJ",
  "key29": "5975UqPdWwWfWms44To3XxyvR8bkehfx1DUf12KWrfgKcHdS2WKdU4vJHkei1DHzzVXdJYUaZdvRdcBqfiyN8tVs",
  "key30": "4c1SVnQkuzokCQp3BTAufzp63qspAYeRyrUCKfsEZtcjZa39mGmxuiyDaNUC4JYS1teH5vqa1VCZqcKH1TC5yLqq",
  "key31": "2esXQ1RSbCgGGDwJaKrpjibzqG6ebU6yAgkMrhVu876xEinaD4vZ4d7QToetEVGaoPHL5NRjvuh8g9dzraXeEDzi",
  "key32": "5JRevz587qRxNbPUfDRcy8sPzAV5TVrxbiKYaUSw3HuNNYcHGfMTrhZ65MqdfVo2Ei2fc3HBor23GK685N5rmBJn",
  "key33": "3U8JzLqGVNMjDrRPgxLvvhc2ErNYbPPYsmzXZGp4pzr47V59VxoNNwiD9FtCpbqMHMexuJRakBJEFoo3Ezczaocu",
  "key34": "2eut95pVgSQdcB7FM3ij5iVNg41nq73eW3omgScDicjm9VbTsePZEeZJ2jP1L3vfkxWcTrCX7fADUhrxCgEHNPXz"
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
