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
    "vsxj6gHCCqshS3uW1fSiTajtuXaUvbnyZ5seymhL5cvyRFxYEhRVvWsP9FaHsfEUqL9pEskiUVaFH6jmkvP1kF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URkWZp5vLd1fiZN3Nh8m9Qymbdas2CJFL3osjpdnqEhYHWykNQdFsxLAq1YELdxfbDxY4jGFqLtJB4xfRoM1WA9",
  "key1": "33fn4MQ5uafJCQDCt4CfFjMi8EJdZyXmwBauLN8edt6h4odoTuQriLc8XMpPc7PNvaMtVWcGFMpcPuUMfXmYPhLM",
  "key2": "3saUKexeKXXgpDGGtSqbA9Gen519U2V8P3RtA5FkvGLRQGwNxfuQiUJs6rFtm5rpX5gdh8Qx2UPbyTLLK4QFPGH3",
  "key3": "4PbA9E5Wmkux84DzaiD3fx1vgC8kjMaarQh5JDKLKy7J6j4AehGQ7GNWn4mERfqDCK97LMSXQifZTbdcui1DBky",
  "key4": "65YEz9Xt1vXGUMMSFn7zatCQy4639RejqyycXABXYKa3BPMu6NBd4wYPuQ2KV4zWRyrXP5rJECffPsV2svxmi76a",
  "key5": "u2A5QET3hSmu8NN1RUNh3xLPjw4oM3Cwcc7dYtvjCMENehR53QDYF3jrK65GCeCpmdXzw6535U3PJqAmx8WSWXB",
  "key6": "51oxzXfeJaR5AM5ZGe9YSGLo9TKunQYrAUJmrME7G6LbcbjwwnrpQWN7MAqurTgGbsDYJxfpmRai6dvvVHjFX7q1",
  "key7": "JqyTKEbu9VBBqwtS2mceJrAipaxZzR3NukkpQyDv2G6LjA6AR2HM8GL5zpm63fiLPx7rYM9WNRiRY5McCubvpmN",
  "key8": "2HU4vch1sbHb9tHk3P4F8nWvw4M8VCyzNnbqWf3eNg4NYhuiHrs81vKkSRhD6fVdRoSZ8S7hrxaWX32KnvDzXfyN",
  "key9": "2s4z4r2E87hWDrAUxsiyKuYCYX8NC1c3GHa8q9rUhAwSmUkzEsucSnMuWUjQCNNDphBbdprmd4Ab68zLBXTgsf6X",
  "key10": "2setFbzmP5QTdbRWUyCu21CxXW7JN4Yd9549bpNKNFJgky2DngE5LYhPV5AdgRajKZBE5BZBcornsjUmTgtwDV5u",
  "key11": "5ZBiBzLctZUso5R4DDLh8KgUyBKsphwvQb95usfnTErCLYpKYAVsabFPX2pN9VuY6QcWRyZQxdqqXZc5s1qRkqBJ",
  "key12": "j5YNKDVkfY32nGzp1mrmBvJUSmRhb1FqirDMZayjKXA62m8aZAfuAjcNbYF8jdUjCNmUuxTcpE1wfRmSiHg5jeF",
  "key13": "BVYYSoqbr7uLKwEDydYq7EPGaYTBiypGykTphTEq84UvVfZTbYWuVgFU3i9L91irKSx8JkeLvvCaPeKugsj5BwB",
  "key14": "2ACK9yj7xtQovNzdiY7ZRdVJyatpPD8ypHwt6bPdTwk5XxqdjmAZ5evygMxgsTVoSKrFXKTTRZ88LUU5ahecoVqb",
  "key15": "3Kr5d9AZaRW78o7SvGnfzboc7E4fykBS8r3oz6oqMTPUvJMUvgfHUH2bHn9eRhAjtynRU1cHqmmb2XwTmVRuDw9q",
  "key16": "51mFeneCRQAnzxDDGAKp3oRQUPincj5FzjeysHdMcYLoDKnfCDyYpwLub1twEYRUxMyAi3wo5Adsoc6oJgvQEd9F",
  "key17": "3y4bxPmSazoXsdC6BDyuEn5VoFCRoBNVmKefcV7gN9Fa4Bh23EQvAuaWbxxV7hE8edMviVCDoym7KhdWcfx5W2GJ",
  "key18": "4gwBwCscMvdnBgiKGoTMTJek9pTicvaN7hsxMJYonuyTad2jgxnSSLCiD3dcTQ435GTHj1rMFHaAkC3qYxGzDhpf",
  "key19": "q2Yw6MV5odVjqdo8C37pJnGJerHQtuZPA9hz5EvswjG8Htu9jWWTvU1sUtEfhAXLbVcYWcunRYXmeDVXDpHfVjq",
  "key20": "67CXvkhZswTbyp8YJuxnzBGCoMu3FKp2tQgvFN49ypL2uSh3De6ua2ssu9aBoxKZBvn5S95vyTiD47wNkCeMr1gU",
  "key21": "3W7rLi22XL5mWzjeMmhqkrjdqBB3nBbecZsq8pA8DNa9rfDJkSLFitwsV4M3TvCiBaRE2YhvkYPDv3kwAw74CrhQ",
  "key22": "4zHtHJRYube4rpLE1CYhYDsHhv55rEfGT8c6A8BWsnmNY5uHGr4Vomckxh9UfxzvHrBzfpeDRrvDDWLuCEhdkLDP",
  "key23": "5znD6Fgz4cSFhHoT92LaBuGwjYoRRhNMVd9iNV7ebXLYXAx3PavKRpqfujPStqmc2iz35dentW2GU8xhq3KjxkxA",
  "key24": "4gnUebp6WgtYve8a2m8p31aF7bvDqeXLDMVYdhpxvjQR585DDWEwcWzm1MjFfpkCMKmVsZdGV6WULij4B1RUYfxw",
  "key25": "283cxRCztnuQ5VA56P6gt9ENgCNQRSJ1W3Mcie6V4CbbBB2f4WDuUy8QNdXHPvb1aTxFwGhpgeqqNCbPtJvmX6tZ",
  "key26": "4JYmRRQ8GqTNQEvJ9BC86D3BpXPGxeMKe39V21rpDXKyAX62NgWcrbfzQrNr3qpXtZrmS3kroPEsEfKAbQKEet3Y",
  "key27": "2ZxcobNC6qMw63fUfKx4V8brTqF5vbvnLuPkasRtFjMex5wbF47FM3VKVPRcCB4HbyFV4MiYUxFvXHKMBZgFtx3J",
  "key28": "2YqYDncLW5hkDzgrxPq73GvSD4sq4yJ1vCUDm7pXJQ1boPF4Ax9V3WMF1PgvqPk9aTw81o5e2tseDqieBcPHLpqU",
  "key29": "4LkBWDUy5RcWxCgsjksV6adBsDymxof1tvp9uxrZd6BmMrodSLnbBQXCUZTgZc4tXoDyT9g4ykGxwkiyoH3o9tea",
  "key30": "UghEvuHDrCp2We5HeLVPnhRKErLJwpJ4yZTryJfYHowqb8QUJBnQfAP3tcTs3B2EEpennuFxJGUm1tzBEXZn8tG",
  "key31": "es9dwvq7UWjDxZLzs9bHLLMGA8uc1BNdW3ovY4t3xNnQY5bMVTGb2gpBFwa6wVzbsfJjwEk3HvtLH5bscDrziZe",
  "key32": "57n7YMDraxH44udNHpfqvTKdfrcvvxsXtHfwioD8RQSiLEyMsfGBY8gCrZeKdMWgYJg1p7mtd2qFQyQP71cNwede",
  "key33": "2icAL58XxdJm5Mv64RPMAQTrwCMFfeUxarumTsfd9KnhAfjnJv7XwqnWHggyPErD1kXExRgY7wRYVgkpzdaF9r2F",
  "key34": "5XYfqLkUx2njmX8eoCnnPbr8VECKpHa8m7L9Eh7mVVB4uojbr9zq6rUeWhm8sqS9D9jPbtXGA3QG8uCnJEuVBm9n",
  "key35": "31d1euufkqBXvn132zC51neVLY1sqCWPQddH514VfAeKupujyB7Nyed2n9S24Y2d2oNpkMaiyAjrJkofSsticZsq",
  "key36": "FCy9HyCBfsbtKKWTi1PK77CFqRnCjLEaY4j3F3EWw9pzWay3GLEuBT99e3Rdq6EDQBJuebmrJaxroR35cAZivuP",
  "key37": "46T83JJcG3hdvtw9cAbn1w8Sz5TAzNbTZQDdhUdkWbfLK6W6ChjwxDdF3guXR5D7iX4XQezt99YCvStqsrNYpcYE",
  "key38": "FbfRzGGiULVjZAdoiVmn7bqnPCmpBvfB9QsYk5eoXRucM7L7vG4VbkpqJtigUv7f27b5CZ8vGvd6ABGhF5MpWke",
  "key39": "3TRVYoEwuQVRnhbH4aSbb3ukRV1w6s9TPBL6xx3tUjxQsHwqMJtEfmLZWo4PscTpnc6ZVHTKQKVqYptsHFNHhVMo",
  "key40": "fYLHcxNhm43xsH2TBhVypUQ86wqo3v5TLWrrkeA6cop3pg447V6oVkyaTxqLbDMxsNZEf3ehqxVpkGj2YTrhyNW",
  "key41": "2La1BTQu9Bw6Bj1yXW86c7zfjR4VLVHrSy8QUTkQSR8KWpG19H3NGRnAWoD5sLHBcQSyRmd1Yzrtdg8iFhSujVUe",
  "key42": "5wpuLDTX3noSytTufo94iHRVtFg5cMtnPZPqfeeuuHAFuZzgR6zL4wWKV66WgDL6ginofxuGesxooKY3Ex5pA8Ly",
  "key43": "3DqRaRjaCnpUbcWU2oz72GYnaGkK3LmEsF4VZNTctcz9rFgwoyYGBSv12T6J3LsfShkWRY4viwQ12nZD3cVk2syB",
  "key44": "3V7G6KubZtvTCBLQrV5rT56nrDSmzqm5goqNz5KBhJQ9hfzoUUNes4HtDPdftUvogTY2B4NUUog2axDv2GUv9vnT",
  "key45": "7uwMbCwgzbUAuL4rrpaQPBZCYBgkVrCTAeT9LW18Ps2bP3nTYeaZjKria89Qfp1yhLwg9eERZHFt2Ci2HENXNwP",
  "key46": "4GNWVJSyZjuj9JZGYU5RknPm4mqPSbFXp6nrwZz1aVEaPEaeDVdRnmtZL79p5dh796jytHUs5zqS3JBaoeZVUgHY",
  "key47": "XkcDMq3Uvzw7TnV4dDTAxWpxsx8ZFUHhiMtpWWN94dzjDTv854M6FfSh1ymkYXSRymLWw1jbHYrtRDXmh1U6T7F"
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
