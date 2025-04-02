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
    "tudt8HZGh56usu8k1Tk3cGYN4wKy2WsRHZjAgvjbJEhvn4pCtDsHYSadx2R74QEiJzZozBDHMHN9DQzt9Rtzstg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H7dVXFF2UM29q8L74kTiSidmmDgE84oCTFRz8xotUe4DCBd2ovyK1Vr6LzoEeLU6HLF4XzzX2ZvkTuMfZtwxUWP",
  "key1": "Qz9v5nkVDLjrAg5et4afpDiQoZY3a3jsuSj2PHUYZUKx5vga7E1NY2FNJ9Z9aC6WdpLdR1fd7NTm1iHnktXWBpE",
  "key2": "32oCJnCAQQgrk3nRxtUagc2M6Ky8GnTUmgLEeTK5QNxiSbcccnefGRxjEkQpUDoYjULx8jUwf4XXGKeN2M7oTaqf",
  "key3": "2Dc8X6m9zNuYjePPky6AwpZFhHL5g8XrS1FxZZ7F2adXN9frA6cqHekPcJfugNJC9h1Fa5RuhsHguVPxxbMbLa52",
  "key4": "4ZjYA8qyZbPidgDhkX8BCdFoHjRG7XgUez4Qhy1FC6BhGP2bLEXRTqMg23AdE63thmdnrN9vGmjjk8g9MPtpZDeF",
  "key5": "58BZAkKgzPydm4CQp5sg1MBY7rWtd9DMT9G7Nh147YSmWvyvXtFRjL2iGsRzx2ACAfTUw9ybHDF3ReYHCczQZBv7",
  "key6": "37rmSyMgyDzBpZMMMbCW99Qhnx7zUgZRj3CdVwfa42PjwZmMXqv29zvsYsZDhPwZCvc7P3TkFA3yuCVT76pyUgR9",
  "key7": "29modMfVhTBc6R9h9Y3rxQoD8QSTnKzGpFnPuzqpRS6hut6wCYyF3FR697DDGeiYGhKqkJn8H1oKdEEQ7LUoBmeE",
  "key8": "3nXaptTJzAfwawjPV18EMm9idge9BQbNWN6o1bG3PWFxUiv1pEwHUc2ZpKYp6zNy7aW5Pb6LVa3UQL8Ygi6xYQG8",
  "key9": "5A7ougiQnNQi4qSBzk13PCSPp9woDsoUAGLAe2ktwMPDSrwBvDqd2aGqqNpRWB9AXoPWnecrtyHSDh7HXbYVPqzC",
  "key10": "2DBP7UEDWmFJB58QaJpSDXuYfBraZwBNAFPPiN614ianJznCxr4DGP2r8n1r9s7dSMsgTEKS4Xh1255j3LPE7myz",
  "key11": "2BbwvmvHyj6wrgLDCLdkzoL7Y4upDJ2v8G7oyr6gp3KQXupUS6vU3pmAZER1reKdxwX17p8QJRzJa8WPnF1h7Pma",
  "key12": "41KCyiZud6uHNEQucMuCR3nErHybmZKm8qAiWxREVCxziTzTuLYvJ9cyDPZiZkBRkPD8rx5wE3nM2A3qzbfXnFGo",
  "key13": "3Z29QWrPcFpRKBVcovYB3jKJ33D3vZUYG8eFSZ8dFz3TUAyqPeHp1fDQncYNqYrasy5cKxwtmDyjC8nMcN9MzBuX",
  "key14": "4CJVnmvhqpsjxGXerpoaydBii1YoLw3uw3UccsfArX1XS3XmwYHp9BwR5dnWbiV92zePgbeLzxTmRkfeWp9nY5Qc",
  "key15": "2tncSViqiQp69NtbDrAskbGNwRa65DWd6so5FvD2spir8wwZSE7p1MQsvyHV3MGVmC4xn91tpxtZuZ3TPQp2Ub1d",
  "key16": "23BNpDd7petSgLc1XouYJU87r27YdDmmjWgUZrqFhe1WaDuzKXgATW3C9TheB1Goy3jvHo5ZaujYccz7PeFuopbi",
  "key17": "9VHNbq3pfzFmekkBVcXPiuaq4yE7CzNSxkTo2Kt2JJYSJCMANrfsK9U9HD3zJwoUbnY1H2fGm3AEKZMTXazaUvK",
  "key18": "yGxuwKrJ9E2u3DZjbNPJz5VSFv4o2pc1UL3iNwHRJjwsLm8QscSVBJyfbw5gUURJ1u4UXKNcRDA9B8UAMDEDxkm",
  "key19": "dkG7FyaxAQjron7x9Bws8Gg7YzEYTDuPiPvCbaVxDCRZpWVqLXRyEp7yTjLQGZJg5aiD9WsWnznUj9v7jWBcUq4",
  "key20": "2mHq2TySgc9jC9LZMGgaXLKXw4fReJDoMohmg85XqcdxTRsZnrzbYGZyuxD3YeqwRULevW5GKoEuhCDThW7skhRQ",
  "key21": "3htHy4QQ3qjE4xJhhtzf5gbuy6jZwFHnSZ3GMgfysHBPrcEsWAsZY4oxbZDDpMnjW8wXWSd2JK9KK3TBZHdLMEtn",
  "key22": "5B4uGj4LxBnhmXqGVSi1UsfT6H65Eege3Xf84aGjKxC1xp4gLygsgoddGxa7izdwQsfN5dvsZQ7iVo89Qjv57Gy3",
  "key23": "vHR2ofGoY7Fo5a38HwPgXs4bvNmqCDuvC9rTAFRZtcgpXxfU7CbEGQvFWzJfg9q3j3HMYjeqNdmhAqnf1jqTb8A",
  "key24": "41qqYC9tLG9n2hLMnwnmsM1UZJmHpW5EyMCSZqG4eAxaXQ6EvKFJ4kXj6kZJXBkitPBEz5MGb8ZWV49vMg3yTUCw",
  "key25": "5GsRWZdLQcH8xV9u8zKHQLpfqMhB3oqCTsPLtapK8UrUYxDdz8qWR4SX9scyixs2KTw34F9iCEXmsZ87ngZbfThg",
  "key26": "NJ4cx13vFEAa7JtQpHP1NFip8No8MBTY4LNrw8QEGrUgPz9EKN9mT72x5irmXHL1AVrmxcGSw3XZQahhRRPC3BW",
  "key27": "66RmtwEokFd54CU4GoYSjGYr2r6mz5h3Q8heUmUCK9f3ynvD8z2JD76KjL5PNjgg3aXTgMWMwwCppF3WpwMGCRN4",
  "key28": "3hu9mexaLcG81jk1LKcv3CEVST6avZH2HLLXhTmnPpZ1SR43PWEHPD5APVdFTAJ9GXr57ace9JxGeam5CBxFyA9Y",
  "key29": "5o9oVriXkshfHb9Ru9bDXeWsxvc2SGENVBcpavjZ5zFniUj4UttdAgj8ZTsMmsP4xpWU1LBYKV6yGYLjLzbDMrvu",
  "key30": "s6QAY37qJfjcM9veVN9N6bdxoKQM7vAhDGYH8Y9bFtLoRfPehK3sBPRj8jhztRiAo68jLMjqvVNudzayZE4ERWX",
  "key31": "2knAcicLc9ggaGKpckXomCw7dfNduFtmnQFz4jyY2TQccrMQ9JAhQ5WyDP9q1YJZATN92AQj4gpeZ7pPvsFvZCdF",
  "key32": "3MSQwxAvHnxqGS41eT8PYVwsFkvaaUYRWJtYTPhT5J3fkJKnMrntrnn1W9HpdpZfdh64qaFUzkNxU9Y8EJpMXA6f",
  "key33": "3cK8fqwFVvvf4Buo7eKjo14DZTAQYuogAh65Zepw5RiSUFCAuHUDrSR7kLLHgjbgSHGvXkrGoXxLmq7E6wC2wMbr",
  "key34": "DCiqvhMUMHd3rosPGo7NUsuymB5qayyWGn5hkNPvG9Qzb35JywbuWH12vb7qSjj5iGaACwQSFPEnELnjqCb2K6C",
  "key35": "2oDCYoZyVaTp2LbujhvSi9GbpY9xPAcXhDUaih8znnX1bttmhMAju5NthUNBLgWnvUWFJvpkGVFyJHThiZnNucNd",
  "key36": "4y3NBNq4fiPBHjQyT9bzxPx1daFEX2Unj1TdcavzrNLnkAeWFWTEBZQ6xonx3xN17Q291fx4N8aQ24u6CBy845xk",
  "key37": "aUuoPMP1RZutkmA5T17ewk29D4yFvBMLqSMBynnWmn7cBKbQ3dHTwJybertCY6bZAKrzaHPBpWQ45J47xB5REdz",
  "key38": "W6cMoGXdW8brKTtKZWgkYoZQ9urHL1LMXvm4rmNoDA2anWkp6zRzgV5mFHg9e4njmd3cDoragVTuyGSYv2Dxkx6",
  "key39": "iGd1m5xbZ4UYGHDkSq8HjRi3h5Kse6YTuP8KeoJ1hfTo6fCzeCyJJVnVWqQ1TJvUCNX4XLD553mjwomXfAFTnCB",
  "key40": "3XszDNzW7YgTcXUSHNkBDoaiH4vVQr6wVk427eN2Uypu7Y6kQZdKjKP7HhHo54MAbZDLyyiCVzwmMePvGkbo7qXH",
  "key41": "4op1K2Bz83sMKjREVQNVRcF2vS5Uyp9fKarZMfqbjweDoBMXbTVs1DxXiVSgDs73EpzqDPgjsKDSVD3frqwVQJjt",
  "key42": "4Ydz7tG699wBVSMaf8dcoo9uQRTUt3rJyvVRXZZyXdQefzf3YZ5jKbW1yWyjAUtJY1eDoat2nvauwBQXc4tahKvV",
  "key43": "spD6WdNiards4usMbR2NdKGyjPAtc9SfDYzkLnsUY9SbAi5HFj67FENTrHFWWtpSX72TNBESG2HjrP9NCWobGPh",
  "key44": "2u7kZ7ennWKhLFyxjpB5zdBoDAf4vhPBnFYVsHSFAL3guk2TWSSoaiCHXoxNgd9dfdBYhCdzjSRjqR7hKZbEESfW",
  "key45": "5B4NYBhLMEMv9aqfPHS6hb1F4h26ypTF3t3PsC63H7M6emBgxKSo1s2FTecJxihHjfVsv1aTXdWWdCAmPjBQ5kaF",
  "key46": "2m6A63jxCPWgS7Z3egLXaTAENV2f7wEkrYyVDDtZfMUm7q7YYVUUoQjQ5sF7XH8yFQrREVq768tfdUuBFyHCkNi9"
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
