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
    "3HE5jrcfqYxtcwc9qY5SeQDieqj3eo4fVZSRH2KwbLC1xNKeAF7nvc82bq7xjSGhH9Wtf1pxvQpYqEaCtneqiiMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2AMTJpiNmoXit3TjB6c17ztJRjq3hhG639GEDtfPvaQinFXUxDKFgixExBnZY2S28WbA4bEy1wWCcRnf3T6W2b",
  "key1": "2HFdc8HqFjSbzaCi1qMqUx1JhjLR762e58pkNpNqLSRgPXFRwP6gXyrssXsF2sKioV4kVFTRoq8EVCfKKDzZbXLR",
  "key2": "39Z2d16y1dbjDJ6PGaxEQew4Lrrxo3C8wgyx7LmiVK4sSmfDE2R1YA2pxzFdoELfZs8fhS2vNP22rNj5cyVvzDvU",
  "key3": "4TxvzoKCDnebY7GkBXzgWnT3PNxbXvJv15dsHc2E7rGRDaQ1PsHnTgMUmBQT81h3NAzzRMzHBsbM6bfKdg4EDmJ",
  "key4": "uKJji7pJRS1eKjVDeyFdwHXD7DPZ6GmRdFrGBLTdmPHX8vUe9d9UcreswQEhaYGguT2NuRHUxyBLaD7s44seojn",
  "key5": "4dbE6ntvhvrB8fo1U1WMgXLzviwPgErHTxAjCyaW9qe94iXRhFPuDuyECa7sqtKqxrqV2DRkDq3Vm6uFudJNqhe1",
  "key6": "3ukPtTigf1CvrTN8n3DZW1XkPenA2gyHMb6Jou7PLe3oN99BrUhnQn9wpQLKGShm9vBCeJ263xH5kNsYuTTTHAkj",
  "key7": "TdKp9nBZJRvmLyo5aFL88TjUDscSEmav19sVmarsTMecdTqpWf23n83CmahMr4dZ4QUxdZdT85AssPNLtpWBdR3",
  "key8": "4DN7CfEwY2BhYWahGbRfonqEVGXEE7UvLx5jfoTVcFTX87gJsw9zuhZM8eChagi8bKtznqKHb7ZC5RphLmQiQbZ5",
  "key9": "3jW8jp8ZNXBmg8D8TKuCArfGB6rT6j6r8pkYMK9ThWjbugKJTVt3jBiB5F3c2kfbzfKDVtUWywkhSXnghjoiVFWo",
  "key10": "3aCUk5gJsPWfA5ywjxJCpshtTbtEcL7zgaQNvXkuQfkEnnYV7fXc3G2M9sZQUc3DXdLXmDjs9TaVtEmm1B2cTQP",
  "key11": "4H36GLHHqCTCMrf2JkZZcw5cEruM9hsiAnKjwZZDcAKrQRrmBKrjvV5KY28jVNJMThprM56ojvyouXNGEfd3FFNg",
  "key12": "4r8fq8MYrwzVK5b4Jo8v6bdjviqsWsuZyfuHPP8J9Xshify8pTDjvLnovxvsucqAs7a8UWqDBFgNvLN8dvh1aKZz",
  "key13": "5yknu6uirpzjAh97bWqAWBLB3FgkcZ2j18WRC8kNArRt72oTvWcDmgh1UwNz2PSc2TRN5HzaSjjh3i7Bb8Tbsk4c",
  "key14": "5e2KFxrnQjwkkoWUPZa2WrJdHPwWJnnvyvXXx8th9RRUFJNsr6ESfJasvSBoPCDEjrmHJ7wHTsNERhjkQv9qzKVN",
  "key15": "4sMCGbTJG4umqubb7nbFkcoxagyRBsKgMiJ2XJU61YkqjefjGXQv1Yty69c1vTaR7cTmHBh4HrhdWCzZoFWzGQRt",
  "key16": "4WuiDBFSw9WdJrbb6vugxEvW5MSVFT4YaHk3SAxmoehfknFtRtp7VEZcQAo2bvHAUNMxRixdqhyTDLyXgPUQsqZu",
  "key17": "59jtbF1nsWy2dTH5tzKiGCkfbfAZqLzBiHRTbBk865hxuSGr57LMsaBjf6rS73KjMXsiD98ekQLcjvErMdjc2pYr",
  "key18": "3j3euUDyMMuhipokBq7yiJVW9fAv39sEDKzrhfh3rogQdVXvPXaV5jezAWAYQ6MYNWdTARPP4mLu1WH1ETHa1G6f",
  "key19": "xSRJhvVqh69zYZnVVvQviMRKYJHxuKAw8fShBYXKwY7viczV8FL6NvzWY1BJsSpwEPpyvkFzpSvcn71fLUw5teP",
  "key20": "4ioQrpmsXT12WSkiySc7dfsK9hUPzidHVdVF3P2UbdmocpTAJF738uXA5zVaanxogU44Abw5f6acnNqoKddh8KXc",
  "key21": "3Xk5igYqRGt9pQ4zkvt8vRXaZrVEG6Zby2DR9q9afTP6tuCQzftBFz8VAkiNsMek62ZN6vJa1Xng2GfMuw1Riid5",
  "key22": "SpS6ywQmciMxBXLz3kKCqw6qfLoZxB2Xo3jT3b4DzQy8jPfEqAvy34PbweepTA4yEW45PfUKEBoY4gYqPmoA3jh",
  "key23": "57pFrVUR4q2gTpQLoaUypddBgQbP6turvCr4HznTs2vFXjMbis9koEGEuU97Ts2thsoc7cMQv3EjMeAKtftGdish",
  "key24": "5qFydYRGhB3vxQQb1v48qD4dxf96sVNDoJR5wEbrouehCLWAKgKL62g1Ly2sLimBBCDnAZYAcCAo38k9V7HWkDwh",
  "key25": "BT1bLs4usS1APCpBSvfR6dBr4Kx3gDXY2oTVavf8hDGA3PUmoVwhQtZr55CPd68cqgm4UnQTMqqb2bi7DFtW3pS",
  "key26": "3Qj9zQFdJz56DQAyqkETLNFJYGibQhwzhxt9sccjbUqEjC5ec3XcfzkenotY4q4kLmXkFdxpzfSxxQLPjBhVkXxz",
  "key27": "5pLwLvmwbNrEc76sJvVKZhodmekwCHKNZqZpMdzq8ztHzgVAADAdXaVTi7aY4iNLZgjW7g53dNs1f5V6AhuJ8qGS",
  "key28": "5sgsPghdey7NTvMW6a15KMnrtaBcKA4RD7hgavDwkDHMgfX828KZtdVUwg1ry7Wt6BPZrbjGt19Fmco5nfSg6XTz",
  "key29": "4tURFR5H3mTaDokzgsNDQAisntt5RMnf9PB7Djzr4XjqSivKS8VFicAxnuH8ZL8YUkYV5ZSdvPDfYzKw91cNn3Ru",
  "key30": "3rDwkWSEmiiUj13LhaD2bC8LLMPUQrCH9GTY63T77AqNrZZxHkUVqKv9RcZAh4pvkHYJyz4fD1ugd4FsQB2b9GoQ",
  "key31": "5mwM8cbG1GCUrAFQESH3sTqx9ihyiaSqSQosz2XbCxBkYd2UYWHp8dm7CNqKoC5YdUZgHdLf6RzKnjpp6i1WGrDJ",
  "key32": "5ks6f45QUHztckm5jakUjBT2ULzhHnLesUcX5UT5vLVnZa8ap7hhwELwp63hN95YvMyYKG51LKtYXhX53w1kH9tT",
  "key33": "3naYiDveRrsD7idN6uFF6pkifoKiSs6LF2iJK6oEZaXac9cc4UfDNCksnfLF97dubiJVmPNdj2x1agbsQZJTb943",
  "key34": "3vhqXR5FPDgkac83woDyninNJoGjMHgaZo2LBJXd1ggkeqCyCTWMR4BPVU4AuvatNYkyHQDH39tZSCo6Fhumezhm",
  "key35": "sN5buZnw9bCok6dCyymKbEB3wdgk3GrPF7sWtUmcDvbsgELq9R6BAWerjpVNemCKJHwUTuXvTpXXypKnc4XXGLf",
  "key36": "3Gkx73SnMcnriwcMfrkDXtvJBT1FGkxeDL2MajexMEQHa4WRTT6Rzu7SCpYwxs226Tb7JKBMyztQhp61rGeroCJd",
  "key37": "4vS4VYNSgTHcoZg18nufPGKmBUhXAcywcZNmB2A41qrmd9RDWvSouFEvt79sWSe34dmQnnL5djWCARfkNdb5Wm6u",
  "key38": "3iRaRwBAEoLYSoqoLJfAMnw4o1yepw1rrWnZHoVANcKnrNx2aRf86ztJRHHvjsirkQegwi3UT1NDZ316BPDuPgCA",
  "key39": "2adKeZ6ReFDAE9tpEACpKdso3u3CVR43qn4oNQdymcUwYrcFY1ucpPMPMaRMgfd2XBozw6ERkffemtBuxQcg66eh",
  "key40": "5oCBj9yqcHqAaNGyoKRLcR7qbsCq1jnm2WWwQ4bEaBWpT8QxVuaWVPj6sTw1BGk7y8DN3irjLip5eTZEB24BiibZ",
  "key41": "4D62hAHPd1pJPghpv1pr6oMXgECTtAK9AJX7iu2WaLbMDW54U2arV6NQacAb1giQM7SKzesm62Jtg5RknqLnkTj6",
  "key42": "52WvPsVDBxEDwPxG4agMkgaUdJQpjTauXVqjKUgnQ4Ce4Mf6FMF1LGMY8aLGDmE1sjLEPVeaPfPEvwCGubD9Kxbi",
  "key43": "b5JNimx7WVeXq93aMVyCGhggopVXeDmmYbJepMRpFgmxheMqhRW55JnSMaji5cC7684yJGPhnZSqQn9hVGwC7oH",
  "key44": "5UXF5dbEsjFwwByv8hwFkCpSyr9XrYJoWkc74HZ5WoeSQbbmjwwdBVrJyEMNxqnUd9s7Zcf9U9LWtXQtqWtqdo5C",
  "key45": "4y5o3m8xdhkJ2ckFtUJT8F9JqDVjWoCcW9Jm11K9ErK3YE9kP2NZ3JpQRhefXaQjTtzhmZu8i6uLUW1d49nnLqAY",
  "key46": "BEkmRFjZ9qHz3shrexKAiUp8WgsL7e9zbEcHuRAciFEDY44eQLDgeVb8XXzqeFMLno6rd2X7uyD4yjXhyXTeiL7",
  "key47": "3G1ae8LgVFExQoRKU1VBzPXJdTWTze1bNXsBDCQXftxHkeGgcDEQkSZ8VXzxNTEDRKPVc8PQev7RUdLxKLEaLK7j"
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
