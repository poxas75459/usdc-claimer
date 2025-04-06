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
    "4XyaG3M2QSUSApWhBo532uobW8m9f3ShhFddpAmH7tzQ9nTiY8TqeQFg86TG7UivnBYXYLwQ7pSuF6bJ7Gq3MnoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hSeBu84c96ozQT4UjsLphC9eVs7kPcjtoAyqY5MxHcwKDaeL1SQ1KSuuqNgvwqDaQVV1rHjYgdo39wndPkooBab",
  "key1": "2cCSHxsmQRGy5mRUVNGe7MwaaiKxuwytnjdug8RQ766j3GjpPguMtaU99xYYoiWZUqg9FLUnEZu48vV1nazTAv8F",
  "key2": "HcybzrohTvPRisXjfkqQY3njySGUA5yQ1BUc5DdQ1Rv5EhFmWzNdRYksDSNJStmDRppqtimqYyZ6xVDt6vAQCey",
  "key3": "2vmS2TATmHwGBcsEjHLGQ2CW5wJ8wvYwY8sw6RUhxTUjJwokJrPsEzsDdbNhRjnQ3CC4JosDRJdMdG8UWm5Ymt8y",
  "key4": "42m5LvSUkR97wNWr4AqaVWf4iFCZ4zW8YvX86evtMS4VS2LzmrLPbceQjV8htAecGZhVTRP4W3dZQ1jqfvV7zSkU",
  "key5": "2msYg1P9aZsxPCTaseeKJy7Pi8Q9WKkKrTR6g5geALDXwu3Fp3WiHEEBGgb3k2xk2trymRZMwTRni4kanX9D8XnM",
  "key6": "4wNiG9aJiJ7iQugkaz9nmJBs3jcukF1WDWJiJ231YonF2rnPpBD9TtYUMUwykTouyALJH3bRptEe8z4dPNpFbNSF",
  "key7": "3EEaRCTTWbQHuWuz8Z5u1PaFmNSu8njgdNTatjrYa49uu555Uo7UtvfowvWyS9GrfoxzmXDbHH2Y5XALdJ1SvBk7",
  "key8": "3s8NmUJJ9RrFMm9VYRPw5Q7Ugicj63nWrXjvxzayJX9BnRbSNzkv115kH8U1Eg5vtvqHiSGwPyuTkJqTGCUaFFEe",
  "key9": "2Spjoy1MDLod7h5ByJZCUPF1hLnzepeGijnPKsA5XbCUoKqzvia8tDpvM9tagwht8ubsdvCwc6GGf1GjwHuMYKcX",
  "key10": "3XX1YNPiHhdrjm5Q6TPq5krSYaDSm11EPh9C4NCsDbJyvq9X5MDybePsRsxAaaonXY59PRKP5zBbyS2A8hraCsbH",
  "key11": "4ELPDGmBR5vcpLCtfpS3gGRe8eAgkuEvuSDeo8XZMLQTNgbeVybLEwwB53FEvAy9cezepmHMZgi5z1QPPRr3TRBp",
  "key12": "4bxxcAKpDU62TuN3FRMFnJyBaLCeyUbJ2REG1VAcMTquY54Dkoxz4sjA9AgzYdNscqQ6MmS1M67Wi7kr7ERs8QEr",
  "key13": "2uHU7QKRLz5FT2a75jg8a7dYxE2kR72ygnn8AsbWDeXKpum9QoFMga3iCQ28S1tLJYX8QQUTogF1DGgcCeN8x3AG",
  "key14": "9wCLjzPbgXnKyhSfYGbTvsVMdCdyXiv7rJY4C4QuZhJ85Swq85L3CfFwrVntqbQwTgceHJxkxik8ot98LxuKAX4",
  "key15": "58BxLsMLhY6pSFPhTcYpLGF72bM7nRtvwjhNrKFiAqwbPetxa2GLEVoLYzVkitDzb4PVeQg6A9paYHccgnP26fYt",
  "key16": "2HpwchSjtdLiJiNzmTNqA9Qn7xjexK3zCtg92XkmUzYYNB4hE4PSafnSgYgxW9fJrMchGTJTv9cEjGb2PEEttdVH",
  "key17": "f2f3FtLDKsGkwXWyPbmyFkLfNMhLYFAJCpgBunVe4q5FtDLMPPfvfbfh9apHP5ewD6B2kEf6BFBn2qJV9xJWsMh",
  "key18": "3mFXv16pJ2Mfyo51euzoKmYy5r3imKU9XnZgYKPfAG8kewXqAfaFQg283haqvCv6cXXiQYiRE9s23wYqXH6KnZ5i",
  "key19": "5Z8bbEhXXzaGMrAEaP1oDg5L7TCNGt2q58JPHp7ZAoy5AWMapLhdhSBe87BRiHNH9QtznNbzyrHdEMaKSWrp6B9C",
  "key20": "BgK9fNZGdQJgwyzMyUAiJa8kSaT4vqzxLAhha2pqhNFdhFRn2M1fmeCCwVtitP4pujjSPKcT8vhEH4P6rFjHPwv",
  "key21": "3iAqdGPoVced2wcxe4UzB1YAygqgcZENQq6ZJngBXRXNURoNDY6tdRn3SNVaa791KdXqGaP69sjtDn4ME5ezuPrV",
  "key22": "3ttDaSEJv1oijZ1QfYhP2DS8tLY9xqtdgd4wrqqPF9hxcM93VT7e8gJbvv3URNVkCf99HHPopDMiAYLAPCLTvaPU",
  "key23": "2MDCHnDEzqPoipfWrw4CURP5LjfMy1PRQUxVtzBj1jiU9LKG9cEzCX7hVaDYSwTVfsp4V6YXqSJeAtnAwsXU6hQ5",
  "key24": "CAijLuENwVZi5qTjBZJUsBp7CAL8EbQ1vUeUVHfkAYiNZ98KJ59muLEjNGART3dMqGJv32neo8naEeVmeW4es33",
  "key25": "Ax25pzcCWFRwoQbFivaZidTNomWoEXR8vhkQgmmqzMq3nqp1ajdadkEqrE7wgQPynbZvnauGHQHRiGfswSaYY5C",
  "key26": "2DEhnKNy7J2YRpP5FqV2kq3YB7ywaYQ8njR6sfEazCKhasAxuFeMjGZa2Ram2tNEe6CbLfe2ecwtB8u26SKhXrr3",
  "key27": "3cu8QkKrir1bJanqVJ941Jq8hn3996FMtxcs4DAAr1GJ6kC2m4rytLFiryZbCTa41MoMJQWwf6rMwxiZffkcHjqJ",
  "key28": "4XEgz9ZEpoy9isLUtuSDyjd8RhabdK4rFSdmzH3CUoed9zmbrqpfuQ6ozRjqWWDVZb4GkmuWyKBWfsgdnkMFk3K9",
  "key29": "5KrAxWDtUQYghPyS8jfZpavTiJxMn4pTVHn67v42Qh4n5LQ7aDL2QKV9ZZ6ZFVYR8uDTZsbuApaKoLRktiGm9uKb",
  "key30": "5wycvyiMrL1HZ9P22qMoq18DXxbfqgZBFsCiupcdhtreLay7NaJQxFqvmg4hRso7Fkme7kKemkGRpxnY92wE9tCu",
  "key31": "45sM5rbfJBciVs5VKdGCXzmT9hXVaXizC87nXWnSj9ofZaFx1Hc2nALKwfMEz8L9iKEyUGK3n8iHyf8ePYAnhG7K",
  "key32": "37FFBBJDPHasmEUUAVhprE83veHAVm9mkAR2FvPxEMkDjbeqonPFND366BpVHnpp59BKuMVNPRyhTFZzqj7L8U2S",
  "key33": "5P6KKdaAGq6MtiKqUgggxuRCKrEL6Rw9KqP7yqRoMtJwdxiRuy9AjDnAL6GpjPN3jXME2WremNzDKEhfyoxA6szx",
  "key34": "2CocFDmPhGACv1Tj9J174nqZXBoYA3t21PqUT3AT2gQU1g3sDTBdwq4M4DQwJru6g5PuJCJp7dKe8UzAYeKRa5py",
  "key35": "2pFvkDGhejhfYpzRqcfjsCrsqwjQD1Bae7Z1vTf6BkFTGaoDoFRZ1CUA2NXhf9AFiBc1Kijb4DWuwrLjf8yggEhC"
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
