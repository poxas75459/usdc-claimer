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
    "2jSChZMbt4dktRh6kZ4L1JsAU2PoGcppYCQ3X8tEULa4Mm8Cdk5tVyCGkvKDdTzmwmgq5CJunk58ENi4oXUwma8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27CxoxMUoXMMsXf2zi2ShQGy4rgXqLCWeGfBWcSRQ98vB8Dx1qgj4AdGcTkbtKQJwXV6crqDo8UxizNe6Twe53iF",
  "key1": "575HFnY5nhMzPDTLBgmHSQo2KZjonVfqs3YKbfyMfTeF4YkSFdS8XNjdopLM9fCuCSgAD5dahuuA4h5BgqJUMxiX",
  "key2": "4t7YAjDxqG3qxAZYDUVYdqGBwL3HfSUEsD3TjuCUAGBp4h5upuYv9fkih5rpBzfucRwdYRmZHS4hH7qYcTxiW7sn",
  "key3": "5UK5wnPTvKwKuVxZ1vYsnKEkpvocAg1WjP4RH55ynMJutNGsE6E33pZAGdgdFtfgrTe6hDG7peUZ5Zx8dbMxeaaq",
  "key4": "49CNJWPUEbMXM5JqzwF5rJpgcLtJo2ucpQy7xizfDrsBFidBVSvBVDYdTUpekSE5vBMcjf6RJBVnNLhzK8PHtHkW",
  "key5": "4ZVqEmqFjKbVdJxSfJRqo46DKipqb2JXwk8HCiPhUV2st8zBoD5tpvSQsSmStNX7tD9M5bxSHB7xEWHADiYBvVxU",
  "key6": "6a4AD9k5ZZ7PkSnjZ1mwXic7YeqBLokKFGC1fyXLwn7vkuxjCCqMQqZDSXfhvuxpnctmaKnEv5tpAFCELWhLFzP",
  "key7": "27vZ7AajjLQVa5soLhyrRg2n24UHLFVjtCbsAMyiAPuban3zh9V4rCGn73Pqs8pHgXyK3Fmrsx72mj8p3KGFnijg",
  "key8": "64ZgNipxTzBAB9YeyZd5WCfE13xymppWMndAPepbF7BSSs8jfqzVeCftWgaaiHv7sz7iBC8Qrm27xPW6Xw4C45wf",
  "key9": "2QNhmfL6uq4HBhV4scUVpxYMuGf1mAEnfXKFTdXahNHTCgF1exYrnnip8mNxVrtNB1SSCJZeSfZLhwvmmdKoiqWK",
  "key10": "3jSC1PajnL5sZutPRATAweRxTYVqKRadVFup6QmuYs5ua4nGJ27z9dVU9yw3VB2obtRLTcnML2pN2EEvkg9sfJGt",
  "key11": "2FnpZytxrjbkAac7cXwvoKdv4PgzWyBPc6YxAFBTkc1yuLvXCVyL5HQYnA4Bfo522YcoKsSgz4JTvfU4TRGZYvtD",
  "key12": "5m5v6aY8T1rqMjUaRjBHYxoDrM33BE39GKDshdiHTkVi5JsMB3kjE6QiGDMqGdF8tWftuFdr3dfyaa6kgk4kvcnn",
  "key13": "Pe2Wf5FqoQKuY4Yd3ve3taQeW84hGYFyHHdmPwQbjKGBqvWUxZipXpdKcRvKcyxydtSqn9iA5618JMeecCYXBUy",
  "key14": "3hVKhT77Q4nhA4mQqjWf5WTiDAeEQofJSizFXSo6VR7uLuJsYwzQeNUSJqR7oRTv9sbgsT4m6LTw9vxDwDP9Nhsh",
  "key15": "2M57mjTDyXsTo94hpEmouJTAFQfZAGmv57KkxpVp92D992cdTyCanthfEwUnq8KC1RkHJgxUeJukejExu9XHMwYe",
  "key16": "2dua7bAvZ79jcPeHRKK9ADGnNd8pWtwqUU1FfZgNNQQCfiJcqvpAdqe8xSTdDkK83Jk7jMSDRU9xaBTKUVebqvwT",
  "key17": "4LwXdYWxvJidcj5Sjt1dKYgrhHQBaoqhkRHKzqYUz8o3RdxrbYDo193uzp3sjW5WivzeCxneoHvDo3M592nqbd1x",
  "key18": "3uR2xy4ExRjpHJ3XnsE9CK9NomvrWwubSd3TuXGmmzMsVSwzkN6dGtNirZxg5UjyUJauuhdKgo7Yz1aE7puH7vDu",
  "key19": "2w8oMNiWEbKKYPQEfFDPXHVewfhMQ9eydFnGi9vSLrg3ATV21KPXQ2GZBECbkzCGBrcv8uLKY5G6qoh2LqgESLdy",
  "key20": "3Wu13m8iwBj523VUpaQqQ9oAHZyoPto5xU835VWRwnysWwsTB4dtpmFZgFDNixiipEoURL82kboYiNEpCRyH18xn",
  "key21": "5aoc7mr8eYqWPzAqfQZbeDbttT3ooUwYzC49z9TjTXQUKSfB2MeokiKXPwRfAFngnkD3VvcQjZggyATBp8cMWuVw",
  "key22": "3ZVmDkB7vzXaascmeYzPzG79tyJCHL7rK94q1Jy523eZMAavrLNsHZsbfEbpfEkPT6MeW9n9NJHY775vB38QtKMC",
  "key23": "AERhDWKo4yDCTtFNLX23WX7ZB1XaRULKT1sMsZpWyp69ycamUBV47vNY8q3CvkF1ZRpGLqRrZ2TcUZvrAwLWfpW",
  "key24": "eSZwKALbCo1r2qEM6Tf3UnVkMKH35tLwJJ6ahrgqt1gA2SjtFjh1qmmKQdpp3GyxN1f8WYq59W6n6Gr2ijasrCp",
  "key25": "4uBhWCot2bBHXGq9s3zgB3CxCu262LsHURbCbq1P3sn8qrP46DD1hsAvmQPPrFs4EqkAu1j5qmA5N9ZuGM4nLjfM",
  "key26": "5bQC9qinRhUEwnUF8GhZ5RDb8W7F8ueiMG6tZoW4QLQ43Xkzu4hnhTR6f7jCZ9Faf8hi3Ym14zqv3M3rbezL2uTP",
  "key27": "44foToKkYN2HNXgPSyMcc5CjWgzokSjsE4o4Ph4ssFVWxKrxaV6zzDQsNLXgoviC27RAx6mugUbvgUxdwXr6Th45",
  "key28": "4uGJC2LiNQhoLJyBHWDre1hjkKg679boGXmPNbYPqDTagYeQH3TLnWFrDkP24UufudVp3aJXfNhSgMqzkwMAwyKd",
  "key29": "3EsNjEkqduHzLTevakLvxxFYs33eV46tmxWdqibTsi6soNNnhyn56vPLrYVgWWp84RmCWw6jN54UiGkdsb5uiL2e",
  "key30": "61yEHZwVePgATZ8QPfVvE3wyjfamJxk2Ln67SUDH19Aw3YE5Vo8RdZd7rVB9pymGRKAGQy7aznNvA13Zww5h8Gic",
  "key31": "2SGxKmRu6HADZojuJPKQpav8BXP3MFy8x9gFj6T34XCaDyRFKcugGWoroYdo9neLb4JZ1Aig7Bk7rQouwxKaiUsz",
  "key32": "4PgrMKx9p3q8PSHuc5jtd7G6JmdqMwt5y4qNyserT59KNMfap8fgsQpWgrrEcoY4mva7j2x5B27LChZazaHdW42j",
  "key33": "558nYe4bAuCmBNKoH2RNxoYTp6hv6RkwdHQDqYhhfPMkpP1CBtz4dhxWKEbAXrH5kxFK6VczyR4iGaBso8sFvro1",
  "key34": "5QyhqiYNBssynbYjBqjheiZLGuWxbw2H4y8c896qh4VAiUH6Np79NZpjZQP8gwe23p2S9r3woXC9XT41yTKBzXjo",
  "key35": "2ZaEAdDXNQAH381xgToumC8UQp7wxV3f54NU9FHJTHFnFp3rjehVKdpjpa4sZRvtBeKDSAm8FkyPqzhwzBqAoths",
  "key36": "mRei5NwbSFGmtEuKE5Ejdz2aWAcGDL32F314hc3DDeDD91QdCTgHqXvWNkU1jBuq6D89NvGDsiUGCjcu6huG8te",
  "key37": "5DVDCz3tY5xrLLLHGSvZLpjk43fySMAXTYCV4DFRczko77jrfFxC9bt1cAaJFHPD3sArHQSZSUepETUqixvcZiK7",
  "key38": "3KETgDnSqAst3rsNT3qHL4tef41GNyLwuPsBYF9aFbnhh2SDcXymjRd4tAXT7Eqv6wNfTXfcgxKAQk5dEjgYchpz",
  "key39": "MD2B1TTzg9JcCvNWTsSmDoDAgm678nQvoUVEzx2t7hJ57t8BGAnd7yRe9h4NQVn7juiRafFiMNe8Yeb2gFxje8r",
  "key40": "2W7qdYqBDcLEc17U5ZHf75T5S4FiCgNCwd3jNoUG5ovG6KB64q66eZ4ydndPzoqnY6K3uHrewum2tWsjeNkg9QpP",
  "key41": "5bkcCtVQhKJN7iEZET7gr5vZ1oqSxnadovURrNBZshVCDrVq7YAe7MtRcvh3w67LRcwHuqyN3eHNsSmc6VtEZtZw",
  "key42": "3LR7tW8msiAxNFLgevBnyPEZngbzxqa1wCaAYdsdB4W5q2VoUHhtWTjVnUk5NLJQ8HVDaLSSgcpoVBxSihaQasjg",
  "key43": "4pCJEf2BGiGx2bR1kLLimYnZSJtSgvPfPyDycx56i3MNqfxnm1oKYDFCSFgDkfJjsNutmajodBj8jspLPViNbAVL",
  "key44": "637P2FEjkGXvAJpNuZqnFwtR4Ps8FkSNkLFzHfQaUBJpgkXn3rMVTKZdszdmzWFHChhTzyh5BScLCV9PVc61rPRy",
  "key45": "61ibAHo6hLDnK6mmUEMRpPRfdpgbsB9241puC6ETCPWEMy9Ctu3QmN2f9FY5kLWUHDZ8UcCR2CMg7CuoGyKXQvcU",
  "key46": "3mDBGGnYXQ42fM1FhKU9sVLiX4ngAoqeKC6zRdEGksQJjqdPkMxhrkSxqLZAW126ouRDrgECWTYtEwqHaeW31pNq",
  "key47": "4JiswBjVDfymS6SRzDF13TRHh2i4n64MhWTNbdnEmYSFV2ivRGkDABZizHwgtu8i6U4SA8i8PfGqwLuaAWUZdJSU",
  "key48": "2MbocyB3dthX2ir64TkMpcBUimYbjhxCxz1W9aYw4qG7EBUtUmvAviRLQWDXnjdTGAUmy5WWWvLAHmfYYKgzDeAo"
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
