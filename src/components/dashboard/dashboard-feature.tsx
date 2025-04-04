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
    "22JFNHE4UJ5JiTR2CpNLXUwnffYkVMY4YsVfjVTejpgnCktbdp5odcPiGULNcSc4r8ZcmF5EUJBqjgauyg1kwEMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47onS7WUAfijKKtzYaTN9SAfdgFW21Ac2SkBhwQFzWxV2UGMjfGBMHEkRhSxtiDLT6mQdRZdpQi2FbATje2VkKCG",
  "key1": "2eTGQQhyxADo9Jmds4S4zaFN7BbWx8vU77SN6eTveX44TXharn2bD2yy61TKjYDAkrGxGxALMqtMXp2p4dHmPnon",
  "key2": "grpPQn7jH6CP9jTmG6HTzNsuU4ttSFtQfbBrDSxjsAbrxu8j4vMXqy8FA4owe1kzxadSeFSo6BRAqzpwD9Fg3Qm",
  "key3": "29rD5prMphSroAJuDcZo784XLoSL9UYy1iGXvmQdcjcawZbcfYumUJWsSQqgFhq5fBkSX8meoYbRFiePjgMp5xzw",
  "key4": "2uQ1vAhWJ7fqfjhHuAJ3493w1GBFY4e52UpDqEEdgnajTs2NHTgUmBzop236i2aUcNo6AHeqxEs8k9kgYzp2nGHY",
  "key5": "5UvKAYBkPev5rmdTrAyaQEihwkMj89U7AmfvybMerJnvPZSynqdULgN44hA2VYp9FdqDZxAvzNTPAJDdBbL6BjKH",
  "key6": "2eDJMmvpNeLYy3EVEhUhyNB6aNJsae1m9TttfFwaNMvhit5rT3nrJnbXpccBRx8iN8yrTHmPpVD19NfZucWNUVbm",
  "key7": "29WonqR8ehhzdBPMSmNacoLDLpyk951jijXYGbkBDKe4u6JYbUTQavNWJozA2ocGXAmgQwg1Kw8aMrgnspdfaVRc",
  "key8": "4uqTkxoPkeqa9xrrG423WkwykxzRJKzgJ2p4xXq8oQi3bmiUWujNdmFYAn5GzHK77rLRjR83S8kYuhv894qhGFJR",
  "key9": "3oSamJwSwEc6qdyLuMe6UkaGUZSg7oTyRbVycn2SthA55hZQesA6FCF32h3w1yFsVqfrfWGDi37LFQriCDxjgqrJ",
  "key10": "5en8SW9Eu1EKDPrLAGagjd91ABTfA9MZq1VnB1QKtZAMpuSRaNgapnFvjNUUCovqSifq7djHbKCpFPTozn1ZTMEE",
  "key11": "5mQow3SCvtt5iuHhPnw2ivjd6XY5NczE1Zfro4ws6TZ2gN6nkxY1eLhVA7pqBfdcTBVR2AWAzxTzbJKLFctsHEJ9",
  "key12": "zZfHx1TiaM2GNE6DqSXqSo6ZUFpbs3rDVW5dMs8aSzgGLTtrf3fqk3dv66a7c4ZmTVkpNuwuxxBEcSjRfjGCX6j",
  "key13": "3G4vDGUALZQayU8YexCdhean5Sgkzr8Sg1g4rc9EaNanWBYejEQ4zz8yeD5az9xBS9o8Uc6UmjivXwVx57ZviXB5",
  "key14": "3hw5KrSNZjvnFYQPeZHkNgVZN8SVj1WQYdtCLmvDrQ2tZaksLXi6UkHsEdg4LpmQmiCcKBkyUVvqERs54nqiUxdB",
  "key15": "4AyiHk7VrqbyWhXBXspXaHaFwBqTJ3xEjV3ibg4SPpwZwYyHgzTcagPauAK5eGUYi56KzmhU8QTDL8cgZrtAHjqX",
  "key16": "4Yh64XzhiVXo2hQReKd3t5rsajkZnYqQXyjNJS3SuCJkByKzTmvSUyvQFLtWrrWa6FT48pAhUduE1Vcsqmu1ceKK",
  "key17": "4g3hx4X51aAy7zTKsKdEF9Rf6su8mPv8JkbzJ57MvemgxPp3VoPyfwcFA1MyDyYWuqPc5xTtvXjHg7fvGfV45AW1",
  "key18": "5ScMGEftniC4oszJ7uma8LD1EospNRoEFuETgL8BEQW1WkPm1B1Fo1uywFNhZvzQEdDe9zmekG5oMtCnygFqFzsj",
  "key19": "j68DWKzdS5t5ZPVSREW25kRx6UeS4e6Be5i9CCaUHEf7oPchqGi3R3HyruUw6vQs2SqDJ3wSYkPAUny4VwUowrf",
  "key20": "3RbSzsMpXunCwwy5LgG5XBS9P5iVWAUsGLnp1EaTE7QhayUogbKkVhu4XzcnPTdwQ54CjbjaXRkjvKD6NgeNUtdp",
  "key21": "5dbTB89CGjQz6nRjt3pibJXrTFdYiuKMMkKPHho4ubheLvahCHsJYZSG8NRJDhtdw1Rk4cQ3iE7WvHdun4tGAukB",
  "key22": "gFGte6meJDZbVY74kP75WzyYCZb8x3Jx91TeXn5vM8TBDWfc5qskgWG46exDbk4MVU8G5y6NdVQC4gBPLNxAHfT",
  "key23": "3zCYPZrfsF2vsrfy4ES3YbLsw4q1cKxbN5GqrEvTN6LgoaEf6Y4xi7t1poyTiUCDnhreo8NDKY6CAxpfFuEEZ4KX",
  "key24": "gc6Mgi9tCqFMeqS6rHNnsK6dnhw1bQMzxZ8tFSUXd8cBLWUyuJQS6aWZcW4J8kwTWaBTD8gZkWqpRFoQMG9hHWn",
  "key25": "2WHkfbJeMZLTSUqE63bTQe5ypr51PAtfTBS4AP3JUTrxUhp58sRuKRfkfdFYRf3iQuFXMoYcwBah9fyDRyucPisr",
  "key26": "2UoAceFt6GsULJwh8c19UfTKj6a56EqHxz25RLxxRw7MkkWYo7HKhyXxzgTXdebAbupJvsNVvbVYCEyZfDhhm3j9",
  "key27": "2gQXDBTq2zfruidxWvxMZB3yBDrUphEH6dSLDrXeBSYhNgaxmeh2xE5gZKhJSvVeUMjRv1SerdFMHhKanVzptzTd",
  "key28": "3ib9ZVFXvG9fQnDJgwyYW8gVnoinqBzYFgS3AghyJbZnphmFXpZ4ymMLEPTLLJBGHHkHLufdrcEuZzDKf1gVyx9L",
  "key29": "65oa8NZ7uYx5xdwseAPnup5SZMmR7yYQZgSKh4q5Cbj7UyerAAsgET5HrwSg2wcGCHK9CNxNw8zdyCkxwJBRAJyx",
  "key30": "59sELoRsLBUQzUBckWdCcRgoatt5xsGCpyfEt1oExmRf3g6A4oDm8AXpKifrdWmg7ANDTqDwfZi98LWB4bNojRHu",
  "key31": "2rtjrGETZx5HhttCJHHgR5DAQzkMrNeNmgBa2L8DSpBBNYCNdjmytgZ26jugUVFr697CUupSANsMK5y4qSAssZTb",
  "key32": "5tnSj66fwVMV8Ce2c24NhCspBLuLHyM8VXgmFjyMH2gGUd5xiEWgQDFiLRQbm4TAMsn61hf9MdiQvPvy6N2JXJou",
  "key33": "2z4zyiK82t3hK37NTaUew4hCLWTtE2PsYC1Df2PCsczkMjBpR9AsLD3s31cHATqwpxXJwKXrGzEgjHhDRjNpWmnD",
  "key34": "4TBacoH3PqLuLeAbvaub9JnKMdYKBg6BYXct4pQUZkMvX3ECiA5ES14z9c5NuksRkninRUWKGxA3W3Ajo85t4Vik",
  "key35": "629dXtUFbwS7oMzH7vHHozH3tTrgcBWjjgd3EWW53iiZRUSG6V77JAuKhkqAYYzybFi4pfxzQH6avt9aS5oLKxeK",
  "key36": "3tMct3a6psNzXYHKekSB52DHJ2qu2WgMJ16STe9WUEvfH89NfBdMybaG2gTsWBFYNyXk5gY5MLqNziZr6Wzvbb1J",
  "key37": "jsLBTnj17rFAh8LAxF5UMjkJTr34E9xA8cLMyNQmVT5rUJj7LFyGdg28aH4gGJv96weddk9zPKVuow98JA88ujw",
  "key38": "5LBvH4td9H7x1wj32X9zsTk2YEgBcFtZHbqwoav9snYWEGmxNUZ8Cjw7pFxnWbXYh3FEQPz6SwjcZVcKcvrGFexQ",
  "key39": "3FrfZS72XVEcRZsVxh1tyfaDM5MCA9G7jw8KvRzYiBGQcZnYHEPzvcfyZsJkcH9unR1zr7sZDHbVjSMAYNKfzmCC",
  "key40": "37VdF5bYSZy5PQuG1LmrC4LWx11uQCfDdbn2S3WbMoibBegC1m5WXDo3QM9sbq8N8cSFxgJTVkny8Ce7ida17NSC",
  "key41": "62XiGSj4AMVZtg14yovJDgsqoUh36sVLafFUK4JorZMqZDGiBmkvfzVvBn81GDqsBsB3mokFQyUrzTL7zVAzb97X",
  "key42": "4u1i7uD4mnC1V9PNo2s7Hirh6FSQLH3LMKu3aZBagpmFS3bqY1CmU4W7VJaP7RmZFFdJjBaXoLwQKNgv5SHqEE1c",
  "key43": "3JhxkbamJdiD5U2CxxH9yYL9AFE4TfpKV37GeXWiCAWLqgbmFp1ZX9JhemueMYUmcQSVhkzBAyncTLP6P29rGLXH",
  "key44": "2FbVgBDPFVhPoQzT2W1nL41s75DGyWYqVH5x6GZj1mqG9LeVWbFbrZzST21XHtpTdWN5eMowb66Vji7v4g7fzvnc",
  "key45": "4LkxNDim1qJYqpkbuxJUtmUV2N3DsUbvGfEFTTQpCR8oToV7kkfmUXCGt5oHaLDcGR9ijp8F6D4aXLCFUqZoEiKd"
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
