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
    "61s7gJyoLpsoDWf8B8L22myqpmza42PJvN24EMQEuUFufki28FxLwLynW86YCRw3Pp6m1Szf3eup9JXVPxBz3Za1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5Ns4TSfH7urnV24uq5SG2pKiCGv9KSEGxgEjVc1Qd8q6b62LnRzcdCGPHBvmSU4rSWzcRbCcVakHmMdwX6pigK",
  "key1": "5WobiYBhf1zQixwLbDtsiLA666wob2RFYtzuScqQViRX9gx4gXAZWJfPe1MYuQXiCAPoZobFMqtzBL2Hv5jUG5S9",
  "key2": "dc5NyXHDwKPSe1xMJJNZwFTMEDCu1vgfvmgA5wwzWVM5wyTRiXrKzwnu3U5T45BAgD3geUTLhkgrBVrxPzu5anH",
  "key3": "5fuKWdmL1pjmedFFv1uBLqMwyEi7hFdCJHreJZRyxiQtHShVFFF1gYXnZSvUqVrm8xhHsaZXjS7ZgUhYuWnL2SNd",
  "key4": "5WuiXH9TXBWoCLt4PGJbJ6yEvQRaUrpwSiaxbRc3UNQyG382qj8v3jshFugENnCsLFk6Mb938ZsQ2GqVkp9f4yPJ",
  "key5": "4S2pxJ2u29jB6u89Qfp58FWwUu4Uw9DbVLu4cnSnVFj6NXrjspp8nr8jdgyNryMd5B2ggmVRVnuNuA9qpcSmToGD",
  "key6": "7uJv696wF4JogbiZSdpC5JoCPfJ98jtP6ix958puAKp2a7HZHqgqYfdEGYgQFVBXVyjhoDFd8cJSMcBuYnm14R4",
  "key7": "3AJBuhhGam5m9oLaAq2TRtRXHi9F1tE5uoaoMKQQiJrgTjRs8GvRKbZAQ3GHbRtNvc5aUCndZ1kn2Y6JdfdL3aLt",
  "key8": "5aKd9Wn13bg6rsGzpjygFKehHXvmiL7ZkCyZnTvavaMagf5jBVEFx5iCbzrhvrvcBa5KhctvuHgAQdPnFYA22Yjt",
  "key9": "39vKA7VMH9dYxTzy2CTKbRhvvSb4JMXQ9kZBM6s8ZPAgTGzrbarsgaBy8kwF2Hq8zFBy5zWBZxRWnb75vmqbZ5WL",
  "key10": "2FMmJBdDkCKgJkSt8aCqKJRSafoe6m1VuZFVnpxjmyBQ7Vn38b83iYGCZBhp7pnuimzFkBzHNWZTRPGeQYXtQnoW",
  "key11": "578Kwtow6obGQpoP9TDo9JVscXbPnxKVzymZ1d6SiRtUsjYVhwPjXXcP45kxt8PuUConcJSXwL3XYctCacWitKTr",
  "key12": "2nsVbSd1oQzRNkPErjisxSjuRXQX1RNGjnfwgknbi8FhHAmH5k97cJhix5DRiXDm2FrMN6SKJ7VLcPiAC7RSwUqT",
  "key13": "5q5fBL7BB1tvToWKxjM9MB7pfEjeE6J4TFQ6gT455BeT2Yi2H57bPLUFafx55E4dLWDsQL8UNVHCLgHQDjyFpB1c",
  "key14": "PMRHpLRMKUEQFKVRcivTbiwSi7FTFEJHr5xS28GQycp7JiYQFL82Kignf9Vrm2aeqr5pgZj2BbT1FWKZE7Z7hpJ",
  "key15": "5wDhXrveAZSEeU1wmm9vSupkwCzY9Eit75L9Ppp185pCxmGNNf1CxH5ysWDDV97nC8Byq36N4EryMu8XfUcwDrtA",
  "key16": "eXNjrXA8M63QFuzna8cBScj15JGbQheGFmWQnbCJ2QnWgb7V7AaK2Tro4hURazBjEsnKxGn11a9EAdKWYZYnYvr",
  "key17": "619TNSUH5vZYBnFawZcMuZBNWL3bjUP6vC1HqpmWYAJ3FXG562HW7KrNjK16afJwW89yrjakamy84e5B6ZRdjbrM",
  "key18": "5CWK2uqRZSEJtgtivqvR15pEeT47eezeND5zGcUiS9bd28ywQ7ZeDKXj1Py1vRGJxvePpTp2jXvsvWbe3gQdvZYk",
  "key19": "2czWcQes5Ex3W5rEk2ouxm33PvM69HARq1wXfwyuoFTPi6aRHUtYEb9KwUuZ3KBMQchZqfRVgBeWnLxA2drk34xf",
  "key20": "zeCyJsnAhKeKADtvbE46dCRDv3eaBwuc5Et7dXdHsxeXySgAsAAeV9vDxCSS8MEASYKg7iVNs8YaLPeSvVmr6xg",
  "key21": "4Qre4JBXZxHWUdFbnpNpaCmzA4SSqHv13fahBfqTCGPxww5ut4Tvw9EgqPwDPhqnjiXQyuvHNc8UX28CH92bkvaA",
  "key22": "2CrDattydk5ePghwWLEjPwMCG5VwM8mCfCw1kqTbjxfJzyLAyDaXqoVFLaay7BZhmjdw8iWGcrmD2yDX1vP7YkEo",
  "key23": "5gAE1XM6yXoFrpgVsQXH2scPM4micpSNK4SAVTFVNNCvTNiw7EyieBrMTegedGZqQL5qSFyGaWrDNoZBPVE25idF",
  "key24": "5oB413Y4n9DV8dznkuipoj5cfbut3Zy7UQAkwjmvWWSM5tm1HgeXixCicLKV1HNW4ruFFFyzNy2LKGRfBn3FXSYU",
  "key25": "41mFt4aiJZfE92oEFQYcBxUV1NeJKZvviDZAcmtqURBsHnvRwRQyXtfugrzFKsjXWatSQzijRuLUFqudN6S6iwDm",
  "key26": "4wNrYBTrPZvzMUofvNAM4JAVtdvJwBuP2qc2zjECWqAhrdRW2Ug7dck32pGFwoVuGcMQwU6nhSRQA41zDkzrEFYr",
  "key27": "55AnJGPzCtuAgZH9UT4BxURsvSUbnwnduuDUgQZ3qjAJK19528o1JHoN9xx2mZGcxQrRkfAVhzdc4uFErPAhnYH3",
  "key28": "3YZ7K5JXuAUNvmS8AFtDSrVHtcdqca8xwURdpTgWL2TTqUc8L3TfmWBVFJuZvMaVdTXX4UvUmnzPF4VsSRZrrH2o",
  "key29": "2hURkt5gTQKrC7y33yRKDbhYxNwCo1SReTzJptuEfR1kVEohxE1BPuKwwC7tXZGYwm74fV5gj9rWxL2i4sR9Z2fb",
  "key30": "66THeAbmZ7qD2SdG38XHw5TGsfctyZib6RGY3qBLu9sZY6Kx82grdaBjFsgNPqgiWQE5W9Tqa1v3CX4Wus3LGq4D",
  "key31": "5Yd7rA9ebMvLqueYtPu2c9fi2wHqnMVYxBtNPoHxFiY8pSeamddizWkWSoRR7YD9X63N32mvQ2mx9mcd77v5HEEp",
  "key32": "2sFyp4vY6FaLWP324s1QsxYHmFTxfa2QFidrovrKHoDBSBXu2tv8v4uKyk91WggzKGnBXJDAJS6BdYvt2fnuVCvr",
  "key33": "49gSk3zaV3xsRFWgnWA6TCfEEJ3ezp5N6YXXS6Y38W1PeeTRixdrJhCKh2P9DuEjf7K7c9tLMgVuHLXLj1xhkqvK",
  "key34": "75Uw7f9e5eDsqCgR4pCubmPm8qu32Vf9D7vEXJ52Z63gPffaHjaWTVc6yDtURn1yWQ7nVHc6LoLBYfGmcSGnfK5",
  "key35": "z1oRpeFUUuXnHDd7vx59t5UjFrq6NDRdAVp5v18xjQCJ7nt3pPxesfXNWgBsA6bHJE4Wwd93BPZRCGEcmWXNFSu",
  "key36": "5hCkW3TJbmdbqYDZZQfCYj6CxPdZAiDy5k9zxnef2ieZgcHHC4Y7uPYMS4SD5q4Y3o79EmUu4ycLSVtbgXC4NahB",
  "key37": "4p2ZdnETiw4hAt1QcJyaii7kJGcXLaMwyCDX2e2ryLH9iG4TCzAKYvoNpe6zFHNByoP29FNpuwXb5eEhbbcMUXn6",
  "key38": "45V54tTG9exN8z49nrhBDtHw55JKnrfMPkQV2S7FchT5KkuRLeNd7jZRw2viRRxteKbAejg1LuEaNPUhEc685gV8",
  "key39": "2KJMkEhfXe7V8Gehujukoxhsm2SfXoSUWTNWbbW22XsoujvxWAPNiALNmzYi2g1aA5KhDQ2SfnUhk4Zm5TT8DyVA",
  "key40": "4MXumqcvoREeZec5R82J76NvpyekYmZwwGPvXaKCDZWYbEMD9wmru163uEm7BzadLM8DKqYyZUusvmBVKrtgpTRZ",
  "key41": "5dyRuFa6M4sTdqvbnjLEvDSqPrx3uBgyLP2F7gpzJ72qdYjJsSR9NXmMdxgGd1AuN8J4zMugAAZvPqWRgg4mBBnf",
  "key42": "51gY5CVBVLm1SvRMbb2WuyXhiNZU7p75VsEvFkm8fx7msxD3pJEXtRikd1cg6MPB4jhuNQr5hSLuVSLDZzQXsvSZ",
  "key43": "3dwa722VKqSiEKgM7Z9kn8jHc3HSiPv4tSP2tHBeaUzcypk4T1soLPzcxnzyYNY2n6i2n6nc6PiFfCHScVRbazVg",
  "key44": "58KruNiJJRgGB7raKQWETFMXFLDy5EKrnPFRG3kgBnrgSkinyA4nD9kBRo4nhhPdsnr1g4ghwAGzdnbhxmNztaPN",
  "key45": "4Qxi7adKRQMCWQHmCfE5Dyuy1vWvkXuh8kRzxGbs7sBc1qsBRPoPXs73cWbH8pepKmg1FdRse5B3LupCNuYgbUka",
  "key46": "5otQ8kyZLSdacpKrtEoT5ZMEpzvQDNJvkLn8rKgvrLn3EGEd2SXQNY2M1HHa5E5gjBoxJzKdif5Xn68GC1oDXL6m",
  "key47": "JgWnoBDYQnUdPExmdcQUDBwE7i2jnPMG5sTv8LtkR286jn2KCjcT8owb42o63HjVEbizigArtVcA65FWyiu8bcG"
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
