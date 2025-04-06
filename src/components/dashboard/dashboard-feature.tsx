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
    "2nedw8d9evJNNPidWCQbfyS9vwLVriSbLdwSbx15KCYZN3xCpuafx8J6RAfwEdKP8ZZzwfuKt2H7rqE93BmR57KS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwVjSh1uyS86hubqMC717SkFQeZchwcwqTSqCJUgoRvgB1Di3uHVU9kGgyVkjgNZTBMWkEqcMHEegZAC6bwqUD4",
  "key1": "UMyHmu2YGRh3uQSJ88SM7i1YRYfZ5jgbrN2wn12N7RVPNww4oeYkRRbwPiqHGLti8t64tpndXGQAt1tWSoWchEx",
  "key2": "4tGM8ery1ZYddR9LSRvGt6BDKjHqkqEZLzhcvrwA7YSp6QjdRoNCZf8TUujNXj8twn6X6ZKYhBbYfoPLrx81yV3U",
  "key3": "61GevY17dVPy9ZfPYXRSdSAR4UpGD6G18LU22z5aQcZAhMEtm7rkp9s6EBEFR3ojPnHus7F26eHTwvSrsJZeGjSm",
  "key4": "2nfow2xF46xdSpS8XWWPG3aTpeZTQ4rD1WV3XzsBDGftHvMyRKZpYzxCtJA41Fg4vFJmroFabfVFzWxC5hVhMnCa",
  "key5": "3sBTYRoLJCTQyCif6xXZtS5kTnXXohTbQZCxTyjPYWEUhdqjF2K5iReTByxgK3pSSM6rtngRNjsfpBECZkPcvrDw",
  "key6": "3LUqFtbk7f6Zaqt1TU1MA8afYTN8shFZ4GwudLkiFibFVKb5Dzv8b8AhxxCgAw7Hkx2vqK7cPGLrhNQPy3B79biq",
  "key7": "29Sq3eQHSGMF7vFc7vqR2w9974p9hz5QLViBsemMo2r972ixDvg1usLG2JFbAzTxcTdEzYq8dz3VjsPTgb1rbcBd",
  "key8": "5NnDxQUNFWm4L8KfNcwR4qARRFdP3F3vhKgaLqjYP6wCemsMfjG1hJrm4PeqemBxJ6jijC3qSXkS6m6zinx7rcsX",
  "key9": "3vsVo5Ju1fhd8quH7zGouuqeH9oCRtfQDy3UmKheLR3oB3eCf83BkzDEKCyy7Yzkz99EkrbjHqUceubVoxDcDSse",
  "key10": "4WcA3vSNT5BjDN3nyZwnkEJYjCE9aBTYetfdjmzhzP5HA9sox4LemhzchT9g28YCz5dxDGonX6TKvu6sjkzznnBY",
  "key11": "c62FaTV2b6Q3vzj4vhtAgAxdo8fTfSumrYzEzfWK1DqzTBmBfAurrgqUGXP5eprPPQJPMEdCcKaztSsEYm4gfBx",
  "key12": "38yNTiX66bus4cgAD6ejnkyRU9ks9c3PuK8X4qf54a699Q9LzXPFapcbXm73Tusup5TtTcY5cvJ7o61yKWAVtt31",
  "key13": "zNCCWeRorBkyqpS4niksRFQLSDmEJVatsfWf2scR6ujkKFr6S4DWoeUgeWSa26cSEA9Kjm3r7sjP6CmonoD6T2b",
  "key14": "eHJiK2dfuny6z3Uw6fhkSwTyPGigzoqvVX4mnCnavtbLJtrGnQ3uo1VvbNEjGuifxKhcFsbdJDuTZ5q9jgKRt7B",
  "key15": "XH2BK5rfFNawfhNwhNyfFPdSVNmg5zuiTmftCasmDLPJtYPtcpPmgrBf5YFW9pdbkshkTB4jCyoNpuw8JaFKXZh",
  "key16": "5FzuVnDMMTEozoyWHj7iNQh1zTY3RoBgSJJ53NNJUuGEPBaCVF67VquE3DhwYs8LKJ13GRT6VMGHBAd53haksW4C",
  "key17": "3B2CY8bPyKdArUsKNGK91ipTmTCSaLxtLVgkroJQCa5GBDvukLyPxe8y9rjfo3z78By3NDdBWd7x8iub9654fPpJ",
  "key18": "joznEh2XPk6hqYb6rX2GqhZns6iUtFuYuoWhsRU2MUnxUCbhnpyveGXEnNPfiUZ711UNaH78dmKycGewHDiyMSQ",
  "key19": "2S8w88CRDDfjRVzYgDHMrBcPRGn76GMTQ1qwDfcDv9EV7Qi8iKyV3J3pYp3y8xtq7ZeuTHGorEGzgfH5Jj5MJunS",
  "key20": "4b1bvtsYx2yfRySg5ov4VtBHViTPPfYUfn55z1Mqw2fdL4j9gWvaDrZRnBNQDrXF9GcU6gjoP6dn1shXLd6g8sbS",
  "key21": "2xgLqsWq56MQdGH4aUuQkU6N8ZFAwh5vGuBctxs4Gu5JBV2xYTKXR1ErGx4gYqYAbn7YXUEYweiBc34pXFamfse9",
  "key22": "22wzYAMiyfpxsPPY54GsAyioACisRJ4fjyckD4FRbXGhDQsG5Frmm4SraVCEMUBviUbWQB35LdeuPnQbK3wngT5M",
  "key23": "2ZdG1mmTLgV56oMJM1GSr9rw2E3LRmpx4CBnrgCvviD3e1f1ogxwJFbM7T5AnMrAHietkPdCNFojRi2qTYMjKKjn",
  "key24": "mfCre3QFJnSXMqNRGqTr5Xk2CGD6J6Qnq5PssdEiyM9fFGxFSdWSjRSJkdWnhk9dX2uK8VST1LJLWefcoV2qBMG",
  "key25": "33Pq4ajjKdoxv5pApomyNBcRwccnDHzA9rBiSmr6b3hEymutUy6iE9DWY6byzcGNdg7Pj98VGkjjuZb1wziZcxRg",
  "key26": "42Bdh3pJbEAGSNNK7jMWxGQxRNHNxowdEuaYADZQmk2DSKkC2bXs9JJ3q2rJ4SdHCAatCXh37tyd4nKr75WPbaEH",
  "key27": "2cwW7q2A67WA568abQx2cX4FWajjGL4UTmrdC4dJRGwUNoE9ubCRKnPZHwDStWtBBbg3FbGLog8JmvjEKjBBbbC7",
  "key28": "3soEEZtyFACY3K7rNGLWavuXjsUgrawcMnJxftrxxZCnBmJFEmPNLRhWstAHX83WtdfTNtG6NNWtvUbxJRdvcSiX",
  "key29": "hhTnpDioUdGeb9f8agRHEo2AjbsDNRSCQgHh2JeMpJ1VLn93woT4xJoG8fpzRBaekWwdFFEhw1FfLUsHrUUWqxm",
  "key30": "6VWptMsjxzuaWJNRbdAzXenKHvVGcse7efYStrA9AZkZrotDD9M3cmSF1cLASvcV5nHRUWYWdUkHrNSNBmyYhYg",
  "key31": "5rZeX7YfMKj2UD7TVdWsucEAvstMLvcjLJ1vFPUYFZ7VbqUiRNicZzu4N6h2bQe3MhqiWZ1n4iUUr26wVLdrQKS1",
  "key32": "22JsrwXXQ5o1KsFsu6ktHd6fZWwAm7WVAR8AHkX1v2P7dKNVx3vHTGqBvf8fZa1EzsewB781dbeZXFE5MvkcYqHU",
  "key33": "4CJrYt5oBNkAV8VGaxLwYpzfhtoQm1KPiCCDBzWm5Hw6hLW9fNR6ck34CHhu4Gv9ohegcsubmJLMmHbtZDKLhimT",
  "key34": "2j2Xz6wYMo1qAcccRfb6W5ooBw9pNu6poWstYN1t4N4jHFefZQtP5idjiTkHtryUTpVjMRFBKKSxWmKY6Z9bihZs",
  "key35": "28KMazULK5E3thBQ2gGMTcJjGuvLdQNXNVdERndpHuae6UNgVh3qQTzxkskyUdrgJTFZnE6VkvgWfPV4QCYVE1hP",
  "key36": "4n2Fz5zn7Sj5Wb62oaHr31yw4sfm3yC1mxTCQdSCDaZQQbpyEDvpD7LeZuJh5vbZ7Dd17afGFBnkhGe87dNcd47e",
  "key37": "2zCKLom5oh5XUMubHxwvHvQJN9cuFBdskoHi1GJVrHLiQWAC8H94JKmT5LWdQNsYDpi7qVmuGiaGjXSkdUzxbWDq",
  "key38": "617LrC7fUE8dRh38Wu9NgibGZVo6dYRybmNdHyeWnMFfNMWcPjDLoAcsQv3tpSRPRFg1hHM5bT1sXFKBnTgyGe5J",
  "key39": "wz8DQLFfXd2LFa6nZzU8kTU8k7Zr2cRVHddeaSQr8Tg3shxRERAMdhqbNmfbNGkf6N1dXMbC6A4GMpX7YYvfzPo",
  "key40": "2qeei9sqEc4cyWJqrnJAwJP1ZfTGhTcywJzLn19BcketZcZjAmb9serm8KrsVTM8PxofFb7ZvsvYcNmZceqLT7x8",
  "key41": "2DEzhion3LgVF7coA52TSKXX5EFiFHziRqfgwTTpeMt2vVMznabcHfGrWAH84NjQeVwBgqcsViw6RUzRehF66PkG",
  "key42": "26aKe6Sc4EydHXoWB3bxakNXyenwBb98ZoGXkKguoryTCnSXbH2VWfSJ2Rrshe3Si95ytttdTY8vLRrMTusMCy7t",
  "key43": "5B7usE4iSZHXJYeaVZccmPETkieTVZGiemr1C7gv4qLFvyt5mkw4w2AoEozsvsWpcMRGrkXzmndhCKt4sho8ThQT",
  "key44": "SCFcVfAYGmSYY4jJxCaModYiPF8j8qR15zSMn235Uoh5dQC1o2E6Nhs54HAY5BsysbZ4nwVbAxdR4ArrvijXhPv"
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
