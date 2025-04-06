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
    "4XqzFfzEXA7r4uxj8QGrQ2yqcEvspnXW6WakEgxjWVEswPvAdJKpqUPVm7HBvnSHwPamaaWqPP3ywsxppjF3bHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1i8HtJYFYrAg5u4fwtbEXiiap4mRAxTUzkixS2msa61EzasmkXZQwnjZfrNnz3WvTy3a5PDwchY71nK7yMUW7v",
  "key1": "EsUjd9HDfjXE9jrR8vY7nXBmz8pApSs4t9Df7FpBLc66HhR6budzvmTNqmvEhCxcjfLAAaB39DnxrcQVGzFF3nU",
  "key2": "2QGUf5Ywx43BbV3RvaBCob897jy2uFt2nSWahubevDMoxKiyuKvSiQGUbTFb5Mp4CjzgvJnWuH25SX5K6VcN6fYx",
  "key3": "4dvkqHnCgd43oqU3K3N3dNbYFdkPWrc5smAPoXerRgeotsVtMyLEvrrYgaWQMPfaitSeV9AksUfK42uw8D4gRtRT",
  "key4": "3LisuoCfS6BiipaxtzRkXP9WNTihn7gk9WSd6QhgJkF744ApR6LX5WsBrvYnN1HrRDTXxVgHyyQc38ooDaFgPNYN",
  "key5": "2bKMZCPiFCAHxZsvczf1QkPqdhYLp9YqGPDi9B4qcz212aeZsSgzVbGJaQ5Xcw8vNDAo8caCuPHAFRaZFL8pb5cp",
  "key6": "2jRSLFGEB8M5P8XfufKbZ67ZwsDuCtkDe1F25GiMeLvL5xH9XJZVHFKfBDAtUpb4Rp18feuxqFpsrsTTuBQ6F8t",
  "key7": "5JneUjLyhfGC33AQHp8aonGjwELvQDiUVv2uQRCiVfoWwGCXfeGMY6zPWnGWfYKKrCAUiDix8pvSDCb2XVAKAYC7",
  "key8": "4oDvYNAjEccRZu2c99T9N5sdTNrNNwZUG2fDXXNZjaXw7scVh3T4nNU2kYzV2Gxtiy28TCXRJnCFrQvxpX34ueH8",
  "key9": "zUbD7pZYNoMGRY8FgqrzMDwZZ68F3XggkHSJhmbHFkhViNxJ2evaDns8i5rdt7kZ9dgspLcUegFpptmVpcYQbbt",
  "key10": "4K9Cme3RNZGKT97YboHcomyVXzf1Y6pd1SFUUYuBx2ppXMaBUKuFFMGyr3VqGf4bGqVuK5uZNA2kjpH6qyfaNZ1C",
  "key11": "3Li5A1rAHACHnA7DhPJf8QaRXXtejvVoxezQWwVZSsXhvx1JVKydRF6qQDDXo6gYT9VhCsL8QHzK9TgtvM8j8mZ7",
  "key12": "MfR8VLJVNRsAiC47BADH2o83FwX66kX6DTVJ8439TdphdNpjGLD4TypKpyzQbapmhdjWuahzMBYF1JAJV4UPxRn",
  "key13": "3yLvVxs5T4BxKiiPw63YmBcVA9AskNXbGFLgcPKWrW4r3aMwT7w6eyhH9nkVaPcA4mEje8ME3wqFozHbYLF3nsyx",
  "key14": "52gMZPwFnGodfrQL3AxSuB2vu1x8twFmKax6TU993xvJhyjQRhrzTRaeAz155fUF4QAxnNBxfJFAQiqckvbWKeqo",
  "key15": "2dBKiiye6gjpoUpNf2GZm3zY7G9vWyG5YeoWGP7fVksoUShhbv5xnF8JviRC7WVSsSYAJB5yzELUgz15Bvq3m4dy",
  "key16": "3Z9qwjN5txGGRhgDWXEmoY9DgccyaUd56fdtqNEuqafu8ebJAXxYaUEjz3AX8Nrq77dMF2osFPMTfVWJCWmXPrJ9",
  "key17": "41AuvxWqWM9fu9bkM6enuA16fH7yCkYanZK2dhs8AtH8xVT6zv4V2eNZ4fPbmrjwYwTbYkZRLmizQxswAsAvkqkD",
  "key18": "5Ks7jBZ9dEtD7FD9DnTghHXtdEhfgAWP4J2mippvB51DTXxTSvJSP5tmmpAmKKH2UZiEwB3N93og6vGMncpP4F2a",
  "key19": "5dZBmKJWEAcSMuh6AkQJg3WtTdnrTpQPbvCoSSRbZU84DMRmjSha5UdEYPru1zM9wDWV3RKomv5gkWkCLBwp2FF8",
  "key20": "2bnnHoVk3aYhPxBcFDr3momsLswxoEteGaU2XTfDxbSUPYbJ7Hu5Ha5sncPR3ra7QBozZzKzgmWY29PRwpEfV2cd",
  "key21": "5Qpkraa4GB5GTqUvdr53LzuzQnHij8c7RbofmPLrKTGh7hxADJY5stvvbV6tb3UcERk5amWSqXRSwaszo9zUWWag",
  "key22": "3RcfSJHCYeZusoZoq48ALtj1ZDGbxtS9rJi5iGVU3BHJmwRbruV2KMxWREBnd2XhosBkTSUzyN5YV7oPyna2JHPv",
  "key23": "3t5i17LLfZCmXJVtzXqCYsH4qbkLixcXjugq2YhwDyG4gd7tkkQQ6n2963Cc54Boo3yo39xwVJPHadm9aFxiTuVy",
  "key24": "58MM72TTL2JebtMCZz4hsXoznSc4jiWgApCuA5RpKPKMdzvxNU6ZwaM2Z4m8yPnwyGKr82DSwPRe4zHxJxrSdUq1",
  "key25": "N2n6Uc5JWyGoyWanjtBMz7G5DfYQUVJ3JviTUNz5tvZgsiACi1kKwPBhjVqv4vgpyV86d96fbi7CabnxDX7ZGW9",
  "key26": "joAnYUMFoxc1SszV82by7zKGviei46QdVnot25zRMYGjCAaEmzB5X42tsHN4xuVb3TN7xbihiQJdeaFMZKsG4EY",
  "key27": "56cJgZgW7NwpnoZXyDsSGiDKSmmaLavaLEMevajj8xQrJfFD1fM1GBzCWCDAHi7qjBHQC74ddE3j1DeD2QzHPgkD",
  "key28": "nE3JrTwjXvhNFnEs37Re2qmi6G3GUFkAxjQUHvEQhCgzD4HZES93xLSamPRn8jnnAoWoBZ2MzykwCgsAprMVyFx",
  "key29": "5LV891icwGuZqR8uDeJCjquM3mv8LRAhngid4eS9BiARZenQD3Kk3Ca75hoqrGWHbRgik4K4NsZu757EZGzJDic",
  "key30": "5gtR4Atbcut9bSQDW9H4gS1WEruQV92FTdWAgmhf3QfL191SQTPmfAX9MtQKxi3K22ucbdoMhSfA284n16ZdyW2",
  "key31": "2odRVyTAhsFDeB1VU9zjFjfhHF5W7jUQPCu4ohPnr1sGSbKoazwEUDh4NgjU7gGh8XyipgzWjwWcEebWbNXFQgFh",
  "key32": "61SbLFj4dGpPHyJ8NBhYM6TbP6w38MuhRuqSeMt2id73ayr9LzviPNomd2PKG4tBYA69wgYZq1cMkGM1vaCyasbV",
  "key33": "59R7cVVsK2CVPCcMobQgua2xK4BqVmp1qDTqFaPo7sV8mvNezjbnAY5hHkwNKdZVym16GjDNn7q5g1hQN4s1jA8g",
  "key34": "33ZaCFnjh5PfDrSESASfZgihxfauy35bt6BPmXT692h5JNxeEnM6GGQbXLXtfwLmQxqos64P2ua9U9pvhgNapEUi",
  "key35": "4sguZWrU2LyKWZWqHMGjHfR9J2qdusq8Li2xTuj8gfKPBMttohJiU7iX7jZdpbHHeWVRom31mfXfCjkEKRi2en1j",
  "key36": "55SqppDSB6gRH1JkkRPuah7JKM5arSUKjdCD8XTevZ822MH8RCYYCGR35jixtfUT7Ynm5dtXDG9MqNjasr4qsXjx",
  "key37": "5YGrEYuoszioVwBctTNYBtAtNzfkwEG4dUzjNJpzNEPh4k9kCoiqiSt6i3BfwzSDwYYhTXLSD7Y8oKcVFUCojS3T",
  "key38": "4MdqxFDyhczmzixFGScattaQupMyLjEwpG3K8aHdoXXbJTpB1hUX9eMRHtmHQhs3JKiMTYWT85BvP6S5uSYQ5Gqr",
  "key39": "o17qALTZtSRuuBhpSuqgrwvXauRngCqpLgmoENds6nHqy2gf8F6udvVJMQ19k16beFyT6GGbSV9SJBK3tWvgMF6",
  "key40": "26LeT4vkYJ5LGkg2NL9aL283MEB44An3KddK2GjVjWgRWthe1Rj5P4RXHX5jP5wYjYRFaDcDHt4PYpdu5SZiKDq2"
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
