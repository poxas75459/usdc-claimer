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
    "4Gt3bd16pYYaLnVYuJSBuViwMqFKqRqF8PDQ3MVWw1XZN7uLYbwEkUKt4uZLa5p5JV7RbJUToooWFXyJHcSVeneC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfaQo4aAM5U9SbW5XZbzzJZvRJKLGbmnruwGRUStRSwpE55voKML7GKZSELcLX3g6aLrVzSdowXS22w11SSz32U",
  "key1": "5DqugWTx3vgcfqRviwRbNZLMXYT8RZgspkFEQVovKusKYyncNRutFF4Kjm9vbW9vkoya2BY2Wk5MWxYZPzgSf94C",
  "key2": "5Qe24TDVYf8HoksrhvqT3sXnw8hFDZmhR9em27qTRL5ieAi9YehFnnx95XjP16zJFc54LCHR9r3Xp7Z9AaWh8kDL",
  "key3": "5E5hHuinCXcSLA9ihfxV44bxwzRpWFsyCNrBpWEL4wRktSqH9LG2Yv6TB4NsUaEpeDPQVGRgtU6ohcE7dyGkp1U",
  "key4": "43LfRHt2PSrRFBdqtDRPLBtkXw9GcxkNKCm7FbEfTBeTnNdnXir4FUn67KMU4yLQFHXwQ7HPAn5gNSRUDxsXkbeL",
  "key5": "2RkfugiMkc5xiNGpx6iMBScTodQh8MSsELk9wZYQnu3goWie65hUkDknjfXPbWtWWsdtyyFfNJKpHVptw5k9PQnT",
  "key6": "3c3KUeHorS1ke1BZ9TRFKmgYjdUAYv2jrWkSusXQSwgxDrXvRFVUU8vkthAeiXZxAFxkPQ8JRxYLSLWybFpBxwDg",
  "key7": "8W8o53WdBQkhSQamm162AR9TAhFAdudq3yfL8GuNqTk7vuq6dWqF84tq7L886g2qRw6wczENiCTQrXTgf1nqTTB",
  "key8": "5mW9fJ46tnSrmmpUba414k5hkVLgs8cDTq7zb5B978C6VArjZTgQJSzpyQXngHocFUiepP6cS83B5t7eDuoYpGF4",
  "key9": "3CVx8B6wrdnUG7xDjvQ2dX7GTSvMHqHroeZAtDSevoFdg266EHFppeZ1bdM7ihGmG3Jk2xZbArporhbQDhJDTqXx",
  "key10": "62xxNykBdyL137zFbQvyXTuCarujQtuP9U6H1p5wEnEUkms7GqgoTMSqJN4rfbgvYYqFjS7kKt9fqFHbMDnYqzaU",
  "key11": "5xwuXmEUcUiEkzrdDrq7RZivx25rew5aTzc6sVaKYn3j4MQc1G1N8PSmhxGyWqbwU3XuZkKYcPTo8VxHU7JmZXmv",
  "key12": "wtpWHyWbSMjbcTwzQDfMnDev2GDrWPdTFHBqChQEyxNwv1JRnH622h7VrfXkAZPKyDXByoGH7xA4tgtMwFe2s3S",
  "key13": "3sp3vAbnuqbkWy4yVsKiZntjRZYDDsLYGVXE8oEGmqsBWhDxn4WVMscqAeEyE5Hh4tS9wJRDY8GYUzcEPGkj4bXQ",
  "key14": "5NRVofyMC9ZKPHJHfxVod3HMDJUj8n6RPDoJQKvojKutNmpov8VPk3MJguEYv9hTfpaL6aFUSxxH8e5kjcq1ydUB",
  "key15": "2z8YRwvYMLPuCynuTVnh4XwLBJjXEG7s9ASocyY3fQswCMHGkNuo13Ny3fJ28N5kv8vXZhPkwKi8XKRheFnuTke1",
  "key16": "nN28vZF4pTpuwAswPtdNEHXYDU2Z69TL72FCZYyC749zqQAsxCfBSPnyx6kNVrUeAbfnz6DH1sL5AoyEtb74mEo",
  "key17": "453SyfLR8auWPCB9Q4kLp17Mk4oCkA8SpbDuADqLuRQfhhCQKhJiVLoxbTm4SUVHBLoaGGnQKBrzJ1QzWfabBCJj",
  "key18": "g8dDo4p41KuCKNt2souYrqTbjhJXo1NFYzMd3d27oGDkMPLhcEHSiEFPY7Sh5nrxfWYErr7dg2kiWhbBe64FH8G",
  "key19": "Kx8PLgmDkwSk2virsdz25xDvnuGpUtifkZMbgAXuyvDWrRAA9TWjU4snKTVXGxkZW9Vb2LwxAYEjZmnw94DESpH",
  "key20": "5JUbxEatxB4GmJEqoXorFb9oJ7He6kznw1FeMFmp3WXhxqLqvpLqvn2fXkvGQtTtG2NdUFmfRchjsjbHRLSvMMvi",
  "key21": "442tKtJ1kM4UvagnhRZGdmKeVLSvV4RZyMZAJrJm4FBevgqV8utXnejFpxGH5kBjZuBownn1mTm7YAvwhvGK8DJK",
  "key22": "28xeTUd7DSedcqwyR7qwwvvfsMc7anHjaKS1cMe6MNKYR6AXygVndQhtSHGaLKgTB85YWFZDAR6TBj2rpr7XCYns",
  "key23": "4UeQh3yqkSqKM5uTVmQp9bhzXSsH9RKDvhLdYNqcz2ayhXVk1WFT9Aq3Wwcsbt5pFA33rwZ4kdJvfvxVgEN68MfL",
  "key24": "28tJnp5EKyJveeni5bpX5aksdiv1UReTBhoypcwX4wsjesdzvbwBNCEGYGPEGmMJB8qEKNfyP2sKSuUPP2oB2Pfc",
  "key25": "3TVTEXZCvLst6oRRdDgzsTfJ2Fn5GqVVw55vmJpjZNMwnLsJRamFpTRkuuBVDnM8FBnnas9m6MhTwLcQ7y7XmT4Q",
  "key26": "2WfwbEaUfZh75Akn6JUQKN3pyG6X4qavVq4Xds3Swk3LLwdomHF1nvGiWdpcLESCPsec3nnbPPMxcRgfgi4cHELA",
  "key27": "W5M2rjHt61RBTajqvn2X9ZRXtMM5UZ6bEQV45jKGA5NQphnAihtHarwtoNUmiXpKdEeTfM7B8ENRRd5S79zLYCg",
  "key28": "26bf9kPTeM4RpXGHbJY3o5rbAE6yHwh9E1hjKTXVGx8ZL99Sx2Gf4rgHwmcZDS7UDCKorSeDVXu6qGhxkAvvkjVT",
  "key29": "49WyENUrTFmTMuK6N29TJgh621RTvErTr7RUeGUzeoVCBkX8xpQtUFQK3ac1Wiaq6FG4HmmFLpFYWm5edHMLqWjr",
  "key30": "5ZU9oXXCexGV5sgfBNnCzKjfCSrqVspMuASSXa8GfXymmshqQyiEN5Hsq8mg6oJAyYCwJ13jkgwFMqjqk3WRJMCu",
  "key31": "23SCPeJ18t8xfTRc4fuqKRVcuP5BqiAWDzczX8pcBEcWRYFdvQs4ZwsoEH6SYGtru312sGXqVZR3QcH27zpDdWS2",
  "key32": "5EYHiPpWC4ffC8UFgVFnaeQc9sdYNEKKdyqfbdzmQQXftWkRDa1JsTxF6ib6snRQKy9GA1s4whw4DbXrR29yuoh9",
  "key33": "2vohaMACBycp3M6roPya9WsU4GCdqWHmtjkGjjKEvXQr5fmPUjvw99wp1Xig4Z8Xt5WVdD78v4WQD8J9rZQgnuSP",
  "key34": "2UPTuEWcSmBH4vPH5wsYsEe2ddXLEV8tNfWsX1EzEWQczAeAxXQAW6NRTEbYrJesQHYeJBfPqZGDX7xB8wLQ1Y3D",
  "key35": "4PQD9HiaLwdDT6FHgJNJr4UnWnHaJsc8esFG1WjujcTio117s9pDqJWyTrAkv6Sm4oF5uXS7HGSepvMHEvgpvRSY",
  "key36": "ExpWPCW4auEgsLhpiFgMAsS21kzwVuf9tkjujpxoaY8inUrvqEr9S6VADqjtScQ2JuJcdw61rjWT6swxxL94tRs",
  "key37": "ucTbSB4ZVYouwMuEGqHaFxqnL12zqmMBgUDZNrxNLjPhHzfHJcoG6P6sdnisrbADvkcMUpmuiiwRqwjxSsyzU24",
  "key38": "5dYBtV5jnS7tuCwg2deUScocjoZ3jCBM42TqWr3aydHiQxgJG5ttC4ox6pc9hCNvzeHgDjJUmYniDicop3ioWCXM",
  "key39": "32E6UM9puSfQPLboWgzyfxwXkQ5YBA84uEuWxXoBKhLT2wUEmaZn8D6RmjoLKjkK4LDk7NZLvxEzvv3ZebtR1FGQ",
  "key40": "5shNTvUS2mgzMpSo6RHxrgqwji9Ywo2oLm2eB3QsxbDoCmNjgrbNLVeXYekbbjHG8TVfDsQ9hbJBMgtygB83mRMs",
  "key41": "4VzMqVkZKRFRuCygeFwp21FVo7ENmKjAhYX9TRZJ2h9GUNZRrGzPohAAqsX9oZxuYFj6mb4QoKh7RU3gngJfxx91",
  "key42": "55PZLMWS8FMPPgHkJS3WrDRpZxjjaJYNBMgLMH5gYr6AMcP5MbEwLKWQ2iVLUt2ivgiKD5guxQxwhPK2Dk7TgZAr",
  "key43": "n31a8WsDwHTrm9if1X2fsmPTU9QTxoauwXquJuzUMhKCLaRDPh2e6vqvCzf1uePbvvNKySqbbBmqbTXatiyuRgz",
  "key44": "4bpfb8MJuBPfWCrnc7tMJmKxRFK7yBc5CDqWg7xDAJeC6hh7JHVxyg475ExBbYdCxmhedAGL38F9MhQxChK1nMtr",
  "key45": "vVhBX1qJCncMEttK4V8RNGc1DuKh8UKLW9k2wvWhzTc4oVGNEv6PMKs6816HFXiEEcuxeZjerrFsuR4sEs86uzR",
  "key46": "2FbPxsVvYSxFNLNycguKNZeKnkontWaZcSgTaLwPPHrdF1pJ34ps5Rv8dzZDngE6wu6MrCShDppqG6ZGR56TnuVU"
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
