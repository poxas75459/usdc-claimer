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
    "46XBTXgs9CTLqCoM52WGgw6TRg8bpZNKcgiEXA2w6x6SAiK9X9Pju2Zk2b8uraNMfd4zRQmEAG66E6JpU2GWiMGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3w7Ru4MTipvi6V1tR2pVy6K8EpKv2LAWjCZUSzNQCjh2KVXo2SnubA6nZmiqeYmgATu1yXYQPpC2wkn4UMspaR",
  "key1": "38xiMm4dtKJ559obx1abfnVgHodiMHKh5sVpjgCNB8D5g4ggyRdAV677a1BBwHNxQ85PxvmgJJw7R14ds3xTSc7z",
  "key2": "5LARD9RHkokUHMpeKUw2mPFjShnYNDBSDVu2K2FmcThPKVvYNczQFJe4WGaG8hVREy49a2Kn9QNS8dibWxCpCnPK",
  "key3": "3HiBp6GuaV6vTjPm7b6fzXBaF8diXTbX1yVRiUH9NJqipHqJUkCs1RQjxecBvr2fA1QZi6th82vyKX5njV7Ck1p8",
  "key4": "4s6haQmfUf75mhmzhPMZG7iaurUnoKpetU2JvYP8BSkx4KSyEvSnAYQsHwR6oMbhs6queJCKVzfggAW9uWcr5Snf",
  "key5": "42jHDHErd44yaAyLCrzZfBN2Fn7q9eCZ9AnYZ7r458JRiVKgnSChVs69sbirHYwtksk2UdDSMdpBWdd9KZroS5a5",
  "key6": "4MmMiYZnpzpRzyePAgYCuqQVeK6A1J33R5ajdLfvCvHNo3HDhU47GXtaDJyvo3qmb5ma5a2YEfYr1gGcYmz41Tut",
  "key7": "4w1gur6JNTRr1tqeS1jfeuPJHFf7GNA6eaviXdq2YMTwdPpT8RRoanE4AiMdpPoGN3ZHR2rsovYScyxJHSnXpnhL",
  "key8": "2e9jCFXrbGFh3n21kL2ivJ6Fk8ZasqcGh7URBAL2iECpjVQAvmBinWVuu4uHNWmEDTdzPvYZ8jzbPKy5XPeyBFCD",
  "key9": "3FDx9TbrgEnuCYfREYqfRBWfHmEXb1GLJGtFwbDQRKeUqfCV4Y6Mxzoj8vwEk6GwdPF9vBiyScgDgSiV1bzJjpo9",
  "key10": "3euByJBhoy56MbnygsoPYiWroAMX8YDhAFdoWiUzCiYqYWvsfgmtNfGYdtphJ7PHasU5wTDHj6FAQQLEPWsSgSVE",
  "key11": "2o1B7hwnGT77edZkwJWkGXaQJaZmuyckzG9NpmMcPLQUCX7tsjZ71gwa43bTYbVo6CHVg93VsqNDwDHzSKuF4egT",
  "key12": "2QEbqzgrpYA4hcRL9QRP2JSSN4P7ujHc8ZbQJJXJBiJ2DuA8yaD6CDeZhXE7avvDuZwVZEz8Knmjy1bJLiX1imdK",
  "key13": "G17SK3MU1fPkVUWskZjKdjGD9kdPwR2CQhJ6cuEAhfHhT4sS8vjaHj5V6AbwCPFkSviJo1TAPgvnGiWaDEc4b8F",
  "key14": "4K5kDosyoeKK3gc6VQ4SYFr4SQLCNVVvn9Mdhh1d4oC7VhUCEpMQQbSTSoeD7uBUGbJfBb7hPwRAdhkDCdnq7qp2",
  "key15": "3r9xsV2ycyCJq8Ecwi9c815DcztxuggLQAn5iPiTqr3ps1oqSh7nZogshTQaUszJ4gz4PZLzhCYGNZN8Xgsie8u4",
  "key16": "Xjzxaa8tRGfCZNPrHzyw5pVVSmcmChNfsmjWorVnBaFqd33nXESUNJNtFPbDbpEEQ44BYzX762kNnSsvjL6SjXQ",
  "key17": "5NVB9HydG6NMGnbMYKjnHKsrYo7zxgap8vNgiXB1vREnF8zjpFc4b1nHMJUuCRtFwJvMyTrxDrtepF3e5GKXecZj",
  "key18": "4wb5KLv1y6RxQeEc5WMrQ3h6YKdrijfcD6kKJwi8GK7KYiLPqWJzQoSGiBkXDqxtHqBETyXh8Vzz36Juix8Ehi1H",
  "key19": "bw8iWADCdkRd82jrikVmGJ8X5DyTrM4hvUFDAh6VabahSDAqDWDVD8M2yEumVH2fBPzyrjAzFtz87hCAmrymwk2",
  "key20": "4RPPpwU2KPjGKR4e8RYEkgE8tFFSrAPMSS96GskMWFaJ6KfpCs7aarL4AyyJSWBQc1tBPpm9V5gL9bKceqhSznaZ",
  "key21": "xUheBGdEEkaHeJhaHxSpTZmknmKBA5FgHRFB8YkU2NH34ZEpC3WTHJsXS6AxBBJamWXgcf5xwiszacReDHR8dz5",
  "key22": "rSCerXZSn4QgqbmRndMKUv4TuorGdWGera2EqK7ojp4rt2oC9jS9cB3AYFAN6pszDuwFFLANkTQvhiKsLZiC9iQ",
  "key23": "e9ohKz1szVz98upYPTKYcLpf1E7FjknyjYcZX84KMUGsWKUPghSLuXDE6rV2g6hdbFqfnsAFQJEz67RX3WrKNHS",
  "key24": "49pwRMWTKMNBK6Xdwm5Nzp6nu9C7P443Wpwwgg5gyu9qnBn5mFqfUAcB56anC696jyHCqMjvJTzZi5CrbfCd44Qp",
  "key25": "4b8NpNw517qPN6iWKjhwgwATCZFL3VYmMcVRZuMBfJkK8H57TBFSuhxqtC83MN7YqW4NHFLWXTRzaPRXoPyemMgC",
  "key26": "4GboTWo65x8CgmF4xPhNd2qWJT3ttXtvmzJj9y7DN3JspGuxxAvicNnbuo4NSGCeRzp4UpXZA58TDr8Uw7TfjeRU",
  "key27": "PzeAWfAw7yU28hZGK4u7x3PLww7rDwdif7cGeHzwH5tAj1BeANqAuHcB49Wj5AJCH812uQgm9vrcTBm3RPmFUrB",
  "key28": "4hzQE8ss8dayRYoQsRmS5aYwfT2qQzWwuP7rpQDpha3Hzk53aNUFTLagkxPD5m54WnfFkFqdzXqkNZ3PL9QYqs3B",
  "key29": "AQmGEUzAoFs2ewJPT37qbLqeJK2TzfBuuBcqV9mYsr7XCNzaqqXEaFh3jXtskGksMSrMjJwaFq5TjohdLMLFirF",
  "key30": "2UNfVUCMzizJtz4HrWu6yhFhCSzajaCUuQQ1LsvCrFrQcyKHQM1XdmcM6AXDsz6uwUVNCPficfsZYJR8h9EU6Hgp",
  "key31": "mNfZrDho7XFYNT5jvgywSZ6rDrrXsn3qKQuUighXDGYpcJpYRvft48Bu5YbfNpa7THA9dpw8THKaTVDycMNefs1",
  "key32": "5A5NtULmmNRiETGjVRgKCK1f1Go7vo8wSYTVrNxFkXxNdYC45278ih8w3wUXaiR5hGp7NHKTNFq9X6NpCYhDf8iW",
  "key33": "3dGFAD4E9enW9uy8GudAyUn9v97qCFvr1AGQR4G22PZAsC1sobEb8QQofUPWhcfXBEpYbhEAnMBj5vcT11P2MWQT",
  "key34": "474cro8PxiJKCrkW5zwoFsVL6hjpTvRXd9J4C84ReLiYjDCRNDFQ3yBuJREygJ2jCXB8ARjiYSASchZAys9jbHkR",
  "key35": "4pC8YXv3LPEh9eGNjUHMbinSpSibxyeaQkw7ubbeU6QRWQhpeHRL5hw83mGmXQoLdsBsLpdPttdknxgcyfPdX1a8",
  "key36": "USTZWt95bZGqXNC8A8peDHZdhbbiNsyLy1aKKFLxp3bV28jZSHj1x98MriUEz7hhFsdvoceFpJhdtFU1eMGimXY",
  "key37": "5WmCZGCSdiTQwKKffdhinpf5e5sPaKKZK8oZnhSH5eKUeimBWqpaQP6K5qvSwX1QidE9M6hwKyP1urYvq1toSp3E",
  "key38": "21MAEyzgVPB1TBsh9EDEWzhtSXXk9fEEjnkqPhicmQZtxTiKzWqNW7ZPraAUyWmKJF6BCPLUjGxryYvCRAxAqnfE",
  "key39": "5JZfUgnBoQJgMBBS9foYpLgu6LbkG6A9izEbKjsNoP7VpwpVTy3q5dUZADkUF5Pr2rkJNPAqvnVaRpYtKxkcTV4i",
  "key40": "2zYhEWdAw9oZCbSH3YyPsvVuxQhqoXPXNNHXWBpnvnfsbgSCZ8UrCpT2CbeMSeE4nP5QCV3QQDnFMUR5bfYjr1nR",
  "key41": "BeMuosKtrxj9pzkKYS74PWVnKuk3jzY4fpjupUSPvnMbVvaJL6J71YK6uWWtG2pLCe6H3uPsz32aer9zTouqyim",
  "key42": "6554zLfHpBGJtpDpaNeQvBhTtJGkkd317eUz8xT77icDcNjyi9QmEguBnBB4t64TKub81JBKBzNswAtAepj24Xab",
  "key43": "4MMBsL6s1GAQWQysCTfEpremy5H9BoW219R9X9iqqb5wnySbWuyfuDAdUTFRXpCpgBktUYf6nfDnbvGeNpNA7y4i",
  "key44": "FtcoY8gxrW84n6TmBnmsa28tLpAnH5kGFKYD6F7QzWXDvfMavNbRQm9iwBzxcX9EojhQ979wSMatWnYGQG12tmS",
  "key45": "2RzNvRFm9EcyJNsUFv9GdtAXLMeougPBKyC3ycDEvg6qq6iGkBXdidAWNSt5b8WYq76KYfCQH5DBQUdGPUhSuA4a",
  "key46": "5hoZTinKWTYt1ooqTEnipCd84USko1aUkxsVm8vTWuxU6yjvsZLWeoZzWod4PY9SwPyEQhmtMiGGFGhxArXYPVLD"
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
