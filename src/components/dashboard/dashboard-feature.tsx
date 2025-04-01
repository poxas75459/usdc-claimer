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
    "QnFWdz2M65QVaWNUxbxJtHCAVJZo64UNkZPj6GA41yTRzp1HqBn2XsXum6DNGTTkHLNNRyiZwjd4FusS8N59qg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wr2Kh1rgMMVj4ZWAvBJydAVwb3XhUucxB3cnHXwphMupqVRPzsVdWE6sHt7RUNSrt1y9ZjkLUz4t5nRH7HPv1g5",
  "key1": "2qYs1TCLyGbs8cshQ2CumnL6biJe7hSw7dQimrzeXPQvVYZJRjTBpZdtDFTF4VtNvDqHDQjMW9Je2W7iamGHQzVn",
  "key2": "2o3NftFCP6BkkGZETX4CvjxETuFufLBN7NkzSw9UhcyVhGdCzCUQK1Du7igPAZ8vCSv5wdLjmdYn7Zc4GTCYmvro",
  "key3": "er2gbeLcRecgLmk7VJDN3V8gArD3C2ygasWcCX7zopo3dUTehMezViX7NDetpaVgZVrixKHikEjybCX38NJ1ZS2",
  "key4": "tvo47Wm7XGKRDuSL9gFGZNuhRvqpdGaxQXaWq4B2oziVm6w8LDq6HiQB16ob5HTPCh7vKUqMpzx53gxovWSL8cw",
  "key5": "3SZ4Au92kHqgJgduAY9d3iFVgmr3fBuWiknLYR9BTsVvVNAYDkdrPNSi5GoJYCo8UrDqfMbwG7mV9sEk43iq4HeZ",
  "key6": "5bwjEJyqaj5kUofbRbEno7WNMzyQwv5vRwJgADXu63VYnQRB4Gko4G6hvFKY99QQ6vwEwF3NXkrDzyobknerecEw",
  "key7": "5p9LqZFXzbrcW6HvbgBGrHsSvAVMW5bmhdJYsn4J3QkLnSzKmwtArWUxQngV3VXStGhnnnVgExzJcLLMUu9x1wAM",
  "key8": "3pYVvk6vFk4MTeriqSccCzgjjpxv8FZy5PPHDbErzdTZmoHUzSV7kVsvbpm44ceijvHV4HSL59HYykcNxUdXjmZw",
  "key9": "2jMXNgwfzHR3cmnK2XxwkthEZVskdJEDfEosX9MhKePf8rZiCX5EEsHshLeV8g3s96UteDe4x8uAVVWtoJVLoYJP",
  "key10": "27UbArk2zy3mzJ1ANd3edpwPtWDDsMZoGtNp9aYDqXoK4TqunGvryY4hDyKZoCjUs867NJ1PAjGsyQYxEEaUUt1R",
  "key11": "56bwJeo71q8ezguLEp7zSGe2AhxZRkUoDzu7kDhfEAXw87CC6VnazUQye6mr1txm88za1UTzqUmcLFjET6TQkBPz",
  "key12": "3PZEM5rHuKbQA7soFmSnj3J987Q6jmBNWux6XkEn3bot4cVSsuDKowqKsumP62xyhUubcsjh6RcESkx72hTTegBh",
  "key13": "5Yv32ZAr4tFCP598xxN2ReSRJof5kPsXYrCeygQTyVs8eGhcvjWobGyJkqDjNXoMdTsi8Cy87fNB9iHFbAxoD2iW",
  "key14": "57XW3aduhe8mWXZY3Kjtyd16Cwcd37MxjZwjHnNWBe3WH7f53miN1NgjAPQncVCAAzCGdr25tW4Viq86MVkyC4mH",
  "key15": "5cMhbFoThV7rt6YDGuqRFYoejtrmWirEi3M2xDNZuzzCi8NVFSuX9ab1mvk71iubwyKSb9zk6oFQEu8MMYF8zUuh",
  "key16": "2rLjZ1cKZr36NiCQMy27DvQ3UGMnp4h47idEAQMHA94XeKjSkR4LWCVe33VkbNf7yBBVWeQTcai7Wa37eZ3DSkuV",
  "key17": "5bP6cCUYqBJ1Jri12tmtpWyB6biu8K7mqbAmJSophDpiTUpE1q3QY4P9mPVe5LdCPbni6RQntoHjSJCcyGn7EoJ",
  "key18": "NQYW7pi8aNn9P7bhWF29bHiSR4TzRYXCBS99Y8N8quN4SDG8pZDeAPshxADjpfVm2wuagNDWn1nfaLZabtw4Xt1",
  "key19": "4qJ76fgiTA5ZoQCY9gJRzFb884rs3fZxvYGZkwQoUGv681pe6dGpKpEGxhz3RwYVbtDwaqBUWe56BbGGLwaeVonT",
  "key20": "4NGkxVuCCr6p7oLjLKZ65DDgEhYAoA6BVyKn2UsmPni3wQFmUAfHRKt3CSh328EcVHsVynYbEmpCU4YiYLwhgg35",
  "key21": "4gHt4QvJpP2GRdkz9R5dBTjfZ4HPsNXD5cZMKQPMbQGXsNsEx5heHXddFaGfKqH1NvvNk7AeWxQtjnbxFS34ko9V",
  "key22": "aJoVM5e7WoMPv7CGXndgoKFc4pmrT6wBPk4eZzYP7S8mUYPvBeVLrRyqnKvvQUtVBKpWDqTtXkgxKzAbeQVMGQn",
  "key23": "nU4mSJVpCqwsJpnH6MRrYJg5AuCWggFkRqyokhxvgXVbzEYYdGyfhZ7GLoR2SN47sAMgJDnmG28kpspXTG91m1D",
  "key24": "32uW2RC1FboNW2zQdC1v3PcddxvBbcuboJH1ARuCjHwkGyQ63D4kN1oiJ32ApBnPu26CqwhwaHwojZfDupJuXpiD",
  "key25": "3G1QZV92XhEgCwNd78CkYggnU5WuCago1JaubM731qmh5BE1f8tBxwp5fogPsSP4U3JjTaYdRAa6DagCURxtb7kJ",
  "key26": "3v8f5qqbaiCfMECMXPB7SVS7q2jkJGf6xsqs2B975YmXTfLxgfcquNyeJHqELeQFej5Z4bKmsF6vWScCzttxyu2R",
  "key27": "zu7b11JuWUCytjbNfzcsBVk2dCe6qnQDZhYYJTX52KgP8d9u6b1wq8AaTjwhzt3AJfeGJYWvGHP2mjvACwR5QnD",
  "key28": "25M9BRXmVBcagrYXimdebF9wHthqeiEHsHGKJ4vab4vcrKcgs5DaxCkEBZsz9p7esjM3RgoqDSKb7UMPbMENQA3g",
  "key29": "5xGiNsk2fgDhWE8MK64bkUC19m24F1yZzFxSuryFLToSJuHr8NHba36sZ1s93Lu3dSXrqmTLd3pNXxY5Eru5ncQc",
  "key30": "59LczHB1KWJWpmpiawvtHWfJ5smaU8JyuKoNHjLGuMqpJq1JbxvFGNjWrhAodYyJGYpicACLDMxhCcjzb3sLoiv4",
  "key31": "31wNJVurVnTCZn8tRdhvyvaN8eN6U2kFCTKnxnGd2Lczju6kb1pVkHvMHBSE9JJ3JFm8c7ocTgyTxTiFuyTPbCa2",
  "key32": "4cuY8APaxfypLniaqh2fLJ5Z1qoDR7B6SkL7YT7Y4hMWd1avTjhjwVJqkyqWzdKHcWkyCCZhUdNBDTfbfh35vG7S",
  "key33": "4Aecba1tgJMruFdb3CNtyFcWu97BFnoQAUKw7J2RwQnAbkNbns3iXyd9rcFoU3mhnFz4nGNJQjeXgo92FCfQeWwd",
  "key34": "4tkw7Nt1njdRdcJ5naCtdzNmFZDVLZfq8ReBf64qdcGJUjHuxcs4vft6GEX8tfU5zAUtDP95bmzxfa1Dx5y554Sn",
  "key35": "nxxXhFXWyGZ6kijLxCJC4VKNWEd5sVgqsVxk7mcsKYf42GYj2dXgik6ge6JW74NjawXoKRY6V4rhFSVazL6BiJt",
  "key36": "2ezCp7zb6hvU4g4L9NxTAGbZrxfJJjm4GDF8xcUp2eaHHYfTRERQWEpukScfmiM3xeRcqLJ3BWseEL1T75au2D3u",
  "key37": "4ccyHDcRsNGg1FiTaApxKUqYDnPWmMscQDjThYTFPkgsW7KgNjPigHii8NctMZQA4AnnmkBNmt3e4Uw4V6SktkKg",
  "key38": "5eFqjvuKLTfLyo9ojKg3Z87vr7A65WxvcXhCg5EnL1wEAjrurf2jS5k8UEjAW9C7XU1CqxyZNK8DbQRc8Mp2vsMQ",
  "key39": "2R1x8QJZnFuYXbCxDDAv6f9NiQ69YApeEVUSZ3Sh7W9vT8ZyiQTMRye8gVirZddMKFuuXrwXXgykjnE6cNHPHzNJ",
  "key40": "eXLEoX9JwyicB1aHoqct5Wjr91gXCVpzsK1RJhaMmqJxPCij6sJWvJ64yi1M2md5vDnGVDD6iFZaX5pUAmaGwdH"
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
