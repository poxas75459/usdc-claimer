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
    "5gJqCh5TQJvWxZDRU9E6b2Bs1qkdYDWVRrUCuG3S6CDMBwaJh665GTBxbKKot7EVXrMGyQk1hW5AfN1YgExYCpYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmJg8B7oaLHnAWeYRBLfGPzXhBhpbeTr92nPS12ihggZp2tgVy3bJBnBGhbpnfC5GTtvwNp3YPVrHDiZ8GHWcHP",
  "key1": "57NoNXryiWPpg19ciikLW3jyAhDMiTyqg6rtqRZAMc2GBydotKigpYzqQmyrPWpJfvCszCLdo3t4CEmMiJiwzJ23",
  "key2": "QrCjJP7MBjmXvXWNj5fGVn9vgCxy523jadY4sUxLnri4WEQXf1Smak2iCQjLJTvw12HGm8qDL43PqwFBZ4uuKw3",
  "key3": "5ES3PMaDiQ1ESKHFmqSd6GGiKMCuFSkEPX2YB5s9NFJq4U5dic9HAUCfFZ81PSbzNs9Ap2CgJ5t9cgZDVx9EFmzY",
  "key4": "3SWLTCgkPwL6ghNHAxxTXGoqF86ngAjpkCgGWUZLBTPzua8rHGNGPqTztHADSuJaFDdeY542iNfNwzoUFhDJiqNy",
  "key5": "2Bbj2QJeqEQywmqoM4FcDoTZhHti4vMJagDVorJLH5yfyopwknHErbnSdDXAuvNGuc9xe5EffxWDSNSo9B7osnbu",
  "key6": "3BVscADL4fpZs6uE8dZTwLfjQPxrscWXCBE38LkJveaST9uANUT1AY95m8Zo26txVEkruLdw9cWLoLBEw53BXPuX",
  "key7": "3KNbeGZGKUuTPGBN8TgRPjyo3BRTA13WST6Ek4MMxN5if8jctDGjsoUsTv7kmYdR5Pv3aTbbwxESKREREGte6a9C",
  "key8": "37rpdk6YQapDrXNUS5jGed4EAUJnbNB3GPuYfMuuoaPqWD5d9GZ7N5ptZMrXSLNLcF4fgPpa9dmBgUs6pnSvaFNC",
  "key9": "3MfuMF831JeqdzxA3eP71b6oRV9e21dXNvCiG4QShs23cVCoq641RN5iMXR5nwaLWSyNeWnb6x7hqNRzYvoKf8vJ",
  "key10": "2Gb8VhmcP9pA64dJB2RpLF6PkgQczvnGZwV6vJCVmR5r5JBv9EcXtnwbbR5MhaVDwFg9ixazCxEeLHHTUTy7HzCh",
  "key11": "66CGNE8QU3hk5S88chvFNt2Jq9ZVzh6WhiBirDUJ4kH5o1f9sNyNBgQLnekfVPMEpeZ97REsc4pgzbs6exCNUKYn",
  "key12": "52bLcmmeKfVrra16Wdox5dHwW9YkWcFvmYG8iqWQdjrAGjkyw7xur5nwoKHjaPwPECJGMs9YVKLgf9YC5quatcgo",
  "key13": "3sTSYprJB9SrUaRa3kSsEJR2oG2zDWdb7h9JhAmMXzPyNUEsJKNNdK1wCwv69w8GxRk5PH7sv7aU8Qp4NQHfJgju",
  "key14": "63UfwpuVf7mZ8Tz342c6U6qgsmP1TAfbseMV4TMAX6QeTY6aeQErNHPawLP3R1ASE2znKYWbeMvVZEtiiBueE7YG",
  "key15": "zP7cJWHP9kxhcauBpWBWSKU7ip2MCYtmuVp9txdMkhek47RJPvAPMfFhQqWJbyuH4eLPpCZ896v9GS5SYeLcp41",
  "key16": "458eq2bjc8hpfox9aJW4s5CseBDhdE4jK15q45CjYzMPkT3sHGDTNd7vkoYG1ihdgRxCzY5ApF5uD725oXv9soPU",
  "key17": "4byModaGPKxqZMs9gE3Am3adjaKpWfqn9SBcoShE78y9TDrVNw6sJh5BmApVTYTT1obGaDKBZcEoNEdzNNy1iG74",
  "key18": "2BnRgjvvCUuQ2ii5GGyTE6qQGzwgK6ARn7GhSQWM9mdK7ur4zfhWXjDP4je42qvnTTBhhELCtQRsmy4ScXNSr3au",
  "key19": "6b9Pb9NUuUx4Pw9Kt54ewyG8xvr7vjsT5ctJii8iz7Thmz9GEBkGRbbpGCcZ7TWWdpo9NpSxLtNfGuxZY9WsEBX",
  "key20": "2NBxAvPMXNqZAUBvSrhWmHwL3J4DyvgzUahgdZCuVv97N5imn9BvUQfr9D3RThvU7UYJgEYzHkVb4zebyFUvoxEt",
  "key21": "2WzgeriWV9WynXAsiEUADxfSL2ipX8KjMjnYLvmYdGwMYw3SrMNaYRBr1FKcaGWy41YZMe5oFWiQtteJcpmEKKuG",
  "key22": "2csX3vjBetRD2g7p5hy496cTEoLSrZqixnnemGU3PTmyjmeq4JkVPxb6jyoeFr7Bqqzg6JZQto4w6r2B5rCcrpi9",
  "key23": "d1VHPW1KjGnVd9oEQ6smMUS6fcP5khEwQPKHgPubb19UitmPgBrfJ2heEqUsATWRp9isCr91ovcQSHLLQKhc2Sc",
  "key24": "3n6KpZpCvXgJVhnm4iatYsdUpjSn2Pk88TVDGeRX58yx1sStzAByb8D3gB1N2y1aYqmxjVsVyhw8mASq2XqejijT",
  "key25": "fzbqhRoc9GqW74xu84o4a84kbM2MM9TgTQEHWTqhbxM72CMD2xYiJTKiXjASomwK2R32oH8DTA8EMd36voJKAf3",
  "key26": "2uxAzk6ecwbjrcWC7A81r5HBNgYEJhEqaPLHhTb6BBGijSv8RGs6Z2wKUojwZeQFCPbXTA9PWVkYM47W4PQLpU4t",
  "key27": "4SRBAYRSPSmo64jnd5eUFDNbxtSKrwGTBUPK7cxD6qnnmJ8GkiTgvWemtaeFfSKeVdSPUYRyvGtYnxGFdeSTK6dA",
  "key28": "4EEbSNVLs48Q2gb6QvD45pUG7HTD6peDyW73W5vT7YtW9CSqvvYsyk5MdYCRHggq9LKBKpdqMFaRJeMUMibXcAhQ",
  "key29": "Tqg2HAkU1PoqgJ8Kx6v1beSKJG7DCKRiumyWXRRpGZrpfsJCeAnz91ktHHcMaUSxWSD7ZwQtjzmEBHHsucvn9xH",
  "key30": "5naYXxBDe8gRQPDsLLXaEKAjtgTb8ck2gkD2ScqdNQgjDeee1YojU9knwR6my7B59chiNw7hct2f1mZYJvgoRoMG",
  "key31": "4vXhcGhjiwMiCf2VTVc5KLxY1WPgSPrgzzQak3fnJj3ykZvTFmhZtPxgLK9KnFsCNz1J6pUDhF1NnFU2ci7UvLHb",
  "key32": "bmiAXVAx48ybWNuWFvkkerJccu7d4K1sviBM58D56WgP4QfmuNULtfJgDZDNqhkuVGV4749RnoFtv56tWELggZG",
  "key33": "4XDANc5kMfEbAXvCYdPxMu7oENr29wNnWgSmiUHU7UsH9NrtUT73wvrYaPDKwP6gXbSYVJUv3FduNzUYpJ7xchtP",
  "key34": "2xLcyMKVigDdNmdNUj5L6ZS1Dx7VabvHUWPMA4dSFWCaz5mNQ8S3LccpvdrpordsxeYWr9Ujf5cZ2nuRVxAeiSNr",
  "key35": "5GCNXcdxXdCqUhsrLrVs5McWT2Mw8qPiGq4giVRqZ9GeUU5xmcCMgFySpRzmmcX2YfdvGaCr6r66YpTksyjyHjaF",
  "key36": "JnKqWaPiGWPcyJyvKze1tWpKwweonv3gmPYVqhWXk6MqNX3vZgfFRWHpP9RAvwU1etyDer6Ju6hv6Uu9TaFhDMq",
  "key37": "4mCfdF3nDUy5c1YWKSBFfaVJCHphrR8HN5LTdkxfR1EYnWTcqu64hgXA5c37PPZCrskzwZSrjj3USrM3VzHwJR4A",
  "key38": "5FQgzKumKZ2TSCFHjAANLg5Qi4Em3WTAXAvfaLfDKSDtGmqxC5eN6177iJQaSdF1Rd6ULGLBvFzfLnTT7Mr4a8VS",
  "key39": "2n4AcZZnUzy2y3HZ8Kcqn2VkWqvGGCsnaiNwuJPurXpGWKY8Qiw1hF9FYQ6fFVvvR73jj8wQjXJ3xBYmSdFXhHZQ",
  "key40": "2BBMGjfTqXm2tr5kAmyJG95BpE9DYsxfZVPe9sP9ZV55BWvRG5TrSmGqH8oijhqqTGLmLEYtrtQHkFNFkcRnFvUX",
  "key41": "4NHWSAR42kH69FyxUSGxP34ZxHb9sR6UvDaqYvWVu7zrHgFx1EgmmSTTkr81mVTNDUfmpaiPbusx9FVu3sXhnK7b",
  "key42": "2XSudpk1Uti4xdkkEPtysXePWLFXt1xoRtkt2mvFa6Ba5mnKBR7pDVzdihkuVSB8c2qYwv9txwLcsFDJQCByrEf9",
  "key43": "2gVKqzFJfn7UvM5NiVC1xhgXup1SmK3KWeoPe5FjWL8yW8kb2gsEWBoM7nZ7ct4y5Cw3xTUnCp2o16dizTNUKMQs",
  "key44": "Bd97bQ92K7J741ekxd1Lxeyo5W63WZd3zn3cQy4XH3DBbokaTR1hu6fuNVYUHQH8qnQnfqsKER9oZvJ25Bn2Vcg",
  "key45": "4NN2onV2YKXEqDeLgopqMv3ZXurzMKxVpmaeG7xvxMW41MfX962hSnxaPwQV1Q5M9o3Jg7MDjidYUBWmn1oXZUZD",
  "key46": "3DBRtsP8j45xcvXbLTBb5ykQLxbbp6RBPCZPzsW6hGNEUwtuVMnKHcRWqVuX4HyVxSqCfRekVRT3tQBa87STPkaV"
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
