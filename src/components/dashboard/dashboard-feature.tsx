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
    "4Z8rCZn1gRr8LrtS9SsqEVi1Kix6Qcwx9eksmedvLs3BkeGeGzsajApB5FaXihfT6m2QJdFMPLaaJqkSGe6t2n2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pieJqyeYxUxa1UGA8BQDLVkPZw4332o4miLotBVszFoqnrSSF8woDMxc4zz3Z32VQba1uAKP9XxygZ9L2sQWuZk",
  "key1": "2ZXYod8WHWFaH89VB88HaEao4EfJENY42Qs6AVnFEFw49SG5GcSwMmD7pVLoQD3GkFRaiLBR8WEo6LgPuAMvYFmQ",
  "key2": "5dTMupA584Ao9gSit91aiGZVejtHvysoS9AZSxqxpeqRujwkCUBJw2sgJHMWLch33KCKm5GRST7WuwcJYhzAZVvA",
  "key3": "335ZNAoBY4RiXk5Sp4UtxMyjEaafe2PDHwy4cw1RvSuJQZNy8UJUVpW3yfBJwrZAdzEEfrN5Z6JcawwjxzBa5HrB",
  "key4": "ZeDfSi4iSb29EMFtEyH5YT6raiev72KmDa3CBM9qLpKGH3CrFmVDsuaAaDcZcjvmtGzJz7khpeaeWBf5woVxBsL",
  "key5": "4sT3vBak3Pv3p7NqfLeJw5ZxznTk9ZSVcFPc5Waf48cNAWqiiHjpRmsZ1x1dR8YxADUfrErBAVDtCmSd9JT1kvxT",
  "key6": "4GoLUSxkjQjAMK98HffEZ2WtxvWjzei6MzgUT2sfq7xaeq7ZNjvffFTMMTE3oRtGQ1Px9p2eC7VFenc6KxtgQnMo",
  "key7": "3rf5v8ZTxN4uXf4uXStjQ21voo6FfxSF5fHEziSw7DKaPivm526J8jxXsaGmY6S7WnsjfMUs6nb1DS8nxZGA9Tn3",
  "key8": "5cuXWbH2hUAqht57JoxFZkGi8Fs9djCvcyiC9bSuyzPpfkUkGDuhtEhdm5uuoNPjtLWnKWvL2SErUasS565w2vzQ",
  "key9": "47JsEcVv9kByHcj6YHtKiWGTjqJRFRT8adTxrCaxaKSpGyQT8jX9akw18F7CTFkzohfuk5TwGo7pd3N6RBFJNb58",
  "key10": "379dF62TNxK9rEv5ZYQCWXZDB57QcSi611ruEEu8fKN9sY55WjzJ2Rn1RvxbcPYLqBVuBBNwEY2eMxUhbKZqhp4S",
  "key11": "4Jwq4bqMz7Ydwrtrg9vNv3xpQ4k1KZWSg7UDbGCUUJV6ibgXaZGZGUAcUmfSWcCKsqCNMa2iyjzYVXiH6uiasKKv",
  "key12": "qnLvjRhsrvGjNsDWTJrTUyuMof8UV1HYTBof5Uyfupm63pycHhBakcvnAgcPggmT2VzgRV5jNRPuAmCvS1ALNu3",
  "key13": "4966Cqze64zXJhYFG4GYDf48yjJCkZaVK8bqETuKFBjeHGarCoPja8CsH3VehwNs4Kv7cfGZxW9kvYwMKBMLefdq",
  "key14": "4HwABPTB2WQpNEMcdgwr7h2hm33u3bpgYeANAjoftkKo1jqRxs4BAxsX5hYKHZwrPZYi3LXUqmVEuCpWCLeBRdMK",
  "key15": "5V8bsDHWQx8qLWi5tSWgzvSPpK4koj6y7v9gn9dkUYm7uKdvGv9HRC4jYaejUTBErTxoVy2Pgy887ANvSkWZJVA3",
  "key16": "5ZrpPo2vqEPA3MCEnVMsaGFgxJxXuSxcdyj9yJuVmx8Yknooqjg6kUiTbw6QctTBnQ5iKZqWhxNJpZ6roGmiRuWK",
  "key17": "2XFrUDVPYmZtEennAzTNq43Q4x2fCytiQyPhQN9mww9x7CEegYu1adCLJ6qsMkSesV8Q6urM9mqG2LzuDd2ZcY5w",
  "key18": "5nk7Bb8X9pDokE4ZYMi7fF7ae7rUdGhL1tc3f1tK71DbsrVPCHUsBoDCDBtf2QAGHBAgiytbKz8vWh9tNGpELSvo",
  "key19": "418gSmNZdXxZRS4WYMhDujZCzUX77Sj1gbh7zj9UbTZR2YoNFf1s6wBbxLTMnT4TiuWcGHRS4PC4Wkn6QszhZniA",
  "key20": "4g3Ra9tBD9r2NKUPUR2Xmfm3M7J8N1YoN7DQS3P3evSYvXUhVuaJJjw47hJYsQip1zMdWFeYXRqm3xmVnwpz8Xfk",
  "key21": "4T3RGgbGkSTjNTThm8u4wAyj9dEqj1Jr3s2uj5qvwQr8Vet8nd5NytV2Mzd91owHc6PXghEaGB2BhaCfAD89Bs24",
  "key22": "3JPmMPHRxtxtzwcEASYnkD3wRV5Vm7hXaKJWBoq2jTWhUrpS3RUAuHn6pCd9Z5VbhdKVVNdbEVYEyCKFhqHpUHaH",
  "key23": "574AMzkZyvHeEeJhK9kaZL1whobfB3U8jHXGxSfyQ8ihJcwPVpHCkfcb5HX4nUGAR3egqxiWVxFohyVQW5NKqSei",
  "key24": "3sR7wDQ5NCbvo3Qt4UVNAYEemAW4Z15swH44KaNVVdKVpgAWrhsqA2tfp99ABHdwbbYvBop8W2R9Uch393C4sxef",
  "key25": "5aXzzMshJyHAztz81mgHCmikZGMpQ6qTjYxAiBrsuYRMeGFgYHTiUAx8nnMppK3A2ETaTJ2ycbppzucw7EaBxqHs",
  "key26": "637xcp3ULSPQmtB5kgkUkP3rT7fj3gaFvbnHbiZFMJKLMAeigPhc3JeAcM2x9RwdhwG1DfJEkbJY5o5ezXocpyTS",
  "key27": "4v3krwSUydmvrvGsx5eCYDiczV4Tu9Rb6HyAp52Jvau77P3P8PzjS4FXG9iqow49mqtEUQRbx2ifNZvNAyE5vCWy",
  "key28": "4MBpD1yNv5JmLBJ1rNH9y1QmNUpufZKKrvX4DsAkfhAFA1T4fu49tjM85F1MT7ir88cPLv3S5m5EM98TeRaXj3zE",
  "key29": "5wKR8GAr5PhNy4Xf6JEZ1rH4LznC6USaY5k8GqYpNkNRJbz59zwuEKUKcHskDraipBYLmZp6R1tvHmMdU7vSSQbp",
  "key30": "5SCerVfqfat7s6rSqqfZRCe66mQ8G2XcWmpCuZt3ADZjMXyAjKJ3AgfHZg7KwoCMEi5Bzib3SmJ3FfjvrYbujtcN",
  "key31": "49yozP9kCw2oxVg5HPQcpyhmqTvh46kbLycCwPcRQJp4PYkAGvPFpempkQub6HcnrxWtg3WZac3WZ37d91FLTPcY",
  "key32": "5C6AJpf1vUQvVciQRDGMGLdw2KRrCuBTt95CXpQC7h5UeTJSy1x5AN5C81Fcpo2i8we9ZuktZiZgYmk99rLvEhrY",
  "key33": "bU9GtRAfBHrxoaAqnp3zGnBGLHwesc42GJbWYzs2nYQvHaRt9i5QcGQ8K7FcXV2TxANXBwSBsZNRFj1FvxALqyE",
  "key34": "5PafyRht7HDQpdESppJUv57R219nXbzYdSPuxL2SEYRNZ9GLfY4sknMwaYCDQwa2txp8gpBeRiXjPuBoZy1TqiFf",
  "key35": "47YtYR5qRSaHU9d8FAMmudeTXRYVo1jCQLwCqrQaM8nDRViY3Gs5b3M5QqcB6u9eF5qqnCd1ErS4uDnCRWmVS68f",
  "key36": "5Eo5n8sk4yXxA7Zwo8FpZDDLT1rpR428CQUX7oEL2fEy4dgEo8Ecb12e8HEdHZcpxw2G6UzQBVrFCTfF8z6ET2en",
  "key37": "45WpHGwWmGFhRAJPNi7rijNGc5j1cLq8BuskqyLrmUcm7F2fw7CuYPnXzwDzikPuxeaDzPbeDRkLVoYE8aGHX8cP",
  "key38": "3Fq2TDQFdtqauAVL8yeSyPhNEkLJqKet7YRSYyHK1eHNFZapyfd88iuSAZNbwGqnptwJB2ytt7QrxTfnWASeDKDW",
  "key39": "3QXHfsV87R3WrKZ9AUCQ3XXhh2AxWiPzsjkyLuEgeuvgw2vHNfRq4A4uACcgDHdfWPNjCwapGfgC4ZYHN3Jttzhq",
  "key40": "347WwJj9knMHLyLfoAjXKtfWyjxeURzoBGDkE8US1MkMTmTDyqj6xTCbaYwhdiRy3F53honxaSZZXnyApg3w4U97",
  "key41": "4wpUf35NbSCkDtLNrioDg9BXArvRKKoGNFFLDRReyh5b38WXToDaoFdLrUcG4crexdMwPC5Efj6FVUEL8sf5VoS6",
  "key42": "2hj9Sk4Jb2bgd8eKCzwT7MDPyUq3o6LmNDfQHG1AyV1qmYK6CmwAkLaSUAaa8FAR38GU3Vzek32mdxCeZb6Dn6kG",
  "key43": "PjSPRmMvZnsGz6c6KoiAHAd7qWamPm1ZE3kQU8hqr2JGtSrx2AouE8ZHfZEvHv2JfJA2LUjtabTZoEgHCYmWGUa",
  "key44": "2hP7G19pPGNraJ6Fr6RmR2VjrThhLSKn23PwPucTJ3a3MTwyc1nFPDSuFKZDjS3ystjdxa1mXMVmsZC1LKYkHu4U",
  "key45": "p2FF2tmbK7ka4xoWK6R7dChF8T2Le7YXJjZ6Wq5ip7THXiZtxBXzccqjJxBuA9K6SNhBwyHiPUwurbmU74Dnczw",
  "key46": "5FcYE9vneaAt1NovKxETtsGpeXFcJhTLooupwaDMZNu4B8YytueefY37UUHbss3UNLUuQaUiXztu2a9LVt6kJWJn",
  "key47": "3mwHP1yba8SSESnTjg8hae67JeDNE22MWQ3Z9ZLRFRPMCsSr2dENVdHQ3DN7CjY2AHALMvPKLVQSD7F9FRah9UVR",
  "key48": "62QdZQZJaoqxE1i2KWMUprze1RTh72tQ9eyQMpajGTGY9mUd8ZDk86raYQoEPoaiXvZ2bmPg4md6ZWwwAbrvhTPD",
  "key49": "55hFpcaZFQrVPSKRStrKpiarKYgnh5kU98NPEfAxrkXczj7KZPn6akKUTVgsAwP1YW7gUv5LgahYk1Y8oW6TJFoA"
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
