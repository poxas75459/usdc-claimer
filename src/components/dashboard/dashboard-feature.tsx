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
    "3GntC8yYKq9uxGwCRUD9tLeva6QURxxg8o7HuuvoPuN5d2UUEQLcfqNxa1G2qZT7d8KN2uMqNkzmkJHL7ggwg4d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316dCdaGvRfjaeAY8BzHowNo4QQSaev2oPDJwAFiTqb2XtQ9ZsMev7c9v3FnZbvZgBLd3vpA31orS3mXD4vHuV7q",
  "key1": "2i8tc4iqaweAo255BEp24zW23xnBHyuFo8a4ZyLYc38Shhzj9bzCNRVyK7x3sEdSMtRp69EjCn78cjbMmj6ZDiZh",
  "key2": "2wDTumLU9aEpmHcqn47NfW5F7X7W7C744YqueJeyhXwywja82zjv5eU5QwQebHK3yAwxeWdzGQUJLPDesSiBqRNw",
  "key3": "56Hw426JkvwoBwspD5y8eQeF4RXCgfL5qjXX548wSeseJxS9p6tkyoUccMCeTDh9EUbQK2QsrGeEeGYwLbTPE7J5",
  "key4": "2xzyT39E6j3N19diS3Zcn7ukhmMYCpAiuF1q8Gqtv8wJ5J8i8oXxejrU1CpFcsM2xWoeYdSFswGJYWgmR5RKsN7E",
  "key5": "5dq6rCpPuNxYFwirgb39GH7CSoDQKEHTBxYv27XXvKRhEF3anTkDJPF1dSRr6sXGZM7qdjNPPgHNYJJevvvJRTXR",
  "key6": "22sjoZT7Ems6WFRGGrFPmfFCwGM2cUrL6qySkGMVhuPgkrhstW524yfJ2BJ3ehQBrKDvb46P5VrdBQ8tL7nCH6qa",
  "key7": "3rM73xEzEFjR13JQyAeedBCtT1Jr9T4yXMSe56KHXZMubyFY86S87vXw2TUQC2n3bf4mJjNETeFvstAVpexaJYwi",
  "key8": "4VMnojWNT8cSvQG48zJYsy7KwDNbrUhjtr8S6LvrL2AgG2oWFDSZQ8rUbQJduSK9GgumgTwg5SmPXXvdmr5Ywubu",
  "key9": "CLYEcLxdHj2mAyjHeoNjCtgxFWwu3j8rXcWkgaGcV5rfDrMJvfh83SkKKWrKR1dCrSPUM6Qdmgkidiin6pXn29r",
  "key10": "52omsm6f2Ey68rB6R64pingbA2CZRonpdaBwqnHM5DfGLJqoQHEWE2ty9YcrEN5t7mehHFuwvQwABgXcg2szeTY7",
  "key11": "2vEfgiPqfwioZCpshEbJVzpeQk4KryPybdSzhjQE7ttKWZjXMtQELMemjFY8gsNLLqwqGWD7cn5UgQkfirfZ6Wke",
  "key12": "4YDoAJ3kGsEjf4HzozTeKyJGKR7WVPKyBz3t9zrubc5FdsdgtpNsHdCLNzViAEm81qEX2XrnXz6RETKRoy11MLpM",
  "key13": "65KN24RLDEGE6DuBjMJPfVaP7nk6L9tW4AmkULZmJ2B8mFP81bF1Pyi8ws2ZbXpJQnGYCskS2AxcqWNnvih5jhfs",
  "key14": "52XtdfGKdzBQMhMFatR696Tqq12eVLZAZxftrJ9hJ4QUzjKMQ6LU9a3EEGUmx51CQfbxvWJnXmhLb458sukQ7a2D",
  "key15": "4cZBNPvcyhKLaA5NRQScr8oNWXkDfp2cvCAFR5WMGYEhojX45gd7Ac1uF74ABLexpGsapEK4sR3rserfj4aYkvdB",
  "key16": "5FefzV9m1v6L3nvPJamKEAVsZhhHjseaw3yw8fVZnWpCR5bNzLr55qAMG9EY3JPS2gq7dKuEQHm3EYRRcQFHfCYP",
  "key17": "2ZJwunFxpuBVZU2XxL1nPMeqTyDYvcdjTnszmN5JetYrv1ZDWmZciS36xDiaGTZidDdVFpfmxe9xN7Ky5yhNsmzY",
  "key18": "4U8KxJALdip53crNYq12ZW85j4SeS59DWwjJvzUThx8vsQteDJDggtpwNiTrfA9khS3vJpZEWJFw3csJpNLvH9WN",
  "key19": "5wwopJeJJY6YpK5Ffc3vE8Wv8fFamhDk9DHAH6Sb1S3wuUJiKfMVt4nobto9jFSVmJoeLGjZ94jaYmU5HY9bziQn",
  "key20": "2ZiCVrKXwCgNPz8StN4uUxuZZcj1RmXq2wuwZe4STXSZMkmiPo2BVnznDTg3AKMPGfdfZUMrvXzpJmvvobC3weQB",
  "key21": "UsNRyWHmQv1aiKjeAuTATAGgpJzRoDRAsckjbD8zTmMG9YWfSXiLtyMkonqLcN2HquUevSDtgSBwGDdWkj3gaRd",
  "key22": "3TsDCwaayrtgNyrsAtKoYL7huNYp2fYTqrWK5dXwtZJq6TGahJpZCapKNNJhZZSwpWgDDLw8vkhktv2xKzomRyFH",
  "key23": "KoSCj9Tke6uLh3DkL4VoM1b2XazooYAUJb26w4NBXq7tGAKPaoMna4N72QMxbyPPFtqcK5HT1oa4vFJX8ktaAR6",
  "key24": "j2DGCV5WJwvEFNhq6PEQSSTFFezSdERK31UPXgt6HRqdn3SPUvpa1MqQ2A1caopxbhw61rTpnGW5CBzHwSDdfoR",
  "key25": "53V8CSP7NrgcUzdMBsshLJfYrttswti2VViUbSpj573ayVkEQ69uLEpVd56MzMiGwb8Me8M7QwKggeU33cm2VDTd",
  "key26": "4QkWpW5wL98go16XfNWrcUXRXsxL5oBb9eLSzcyQcnDR6NkHoKEJjkG4imsaxXGd5aoK5Qzh5fY1A3afei7o3gw6",
  "key27": "7rNpSFEpfuQDBwUkMmeA8rdwJrxPNSiLUo9geyiquZVkV1z78Gg4MJmTKXi6M9SiPKL9imBxcv5mHRugNET4siL",
  "key28": "2zHRsqfuDSKiceEHXrog2UZvLjMFBNE5R63YW9mRyxtWxHkDXHgQzUFwif1deKCMWp76TXwtrjBqaHvyZPkbxbHz",
  "key29": "3eTNtZHgDsAopsTApHqTnq4BocMpyGgrQKoBE55EQjRpHMbLVS63EWs2GGSG14uJetT8dXkBhzJj6D6e5mxsnU2V",
  "key30": "4uzx4EEkvnGckB2JKBkLPJouFBWmrXaiDsdTJDzoKxf7p7gae9NLi7ENo8UkWXtaAgwxMip3GK8CriKf7ZvamRa2",
  "key31": "3gPTtx55nFrBhJBGCBiAR35epVixmJUHw2FY2u5iGXMb3d1zHuW1Dab9kFjdVtWQM4MUMP4RLL7Z5XReaFmJqLiX",
  "key32": "2zAVhWdok8i5zP8Q7EMLtDt6wDwxgagczXfp9rqqPSQZFdoF6ePsSZD2mxJNTwXXSgWx36ooZCwSucaCGaGKn6A4",
  "key33": "e888Q41xysd7K8ZuCtD71c1F216hCKN2jTrUD7A54udE4EoukEYEXijaHLWnUPPrL9ZFUpf3oUXDMnuiexPoZBc",
  "key34": "nyq3XEscPbqUvPLZscZoGq8TFW2Lu1MykHi6o6c8ZGaS3x6QoCcukdMui4a49nkZS9jMPY5RX7q6ReNcHDS9d7Y",
  "key35": "2N2xVMXADjZJFArUEZHZydwusYzUA2YsJayikGMPxhaTw2zyfv7i91TqfErKTbQryCDzcjZcZBoK6D5gLvH7rVvf",
  "key36": "37R7ykCiE7xojy38sAKcSKEfGVNnSErWbPHJ1ziCfaZqQkkUFRSDsmgP1NtfxFMLVb2YBivj6H8yXs41Fj3Epo3a",
  "key37": "4VvQ64Qf3pxoi3r6G6qjJJd5iSSghFihfkYuwyeNWKBRgsS43NNBQKWtahyxgi96DZpDhXraTsdLNsropebmnmj5",
  "key38": "5EEaiXFnbU2sLoZFNvj6zRzWKjogsAWuFN2rWJhvd6gmkLYovVaNdXz9km3DndyhTDjnomdXHpFfVgqT7xtpbSUn",
  "key39": "338u7hzaLfS33PjZJZ6osdbuibHVCbJZqLuRnKTcSx5HDb2Q9VWxgbrZ98JXGLuFx2piKDBWrerTGfKBSmm41dW7",
  "key40": "3Ah8Yyvfubso7LhhzudMhGPuvHvyh2cSn4Hiafqs4hTVYdbVpEZNsUoeZ6QC6W8NJhBxQodYS6xzeg8wuCfFXb6W",
  "key41": "FEqn25QkqH9JgcxuakCi9Np9ti4YNXxoZuY17kQomcdCT3uA8Go51CDuPJ2KGMoY1wftS2wi1ngXBCceTbXXhoL",
  "key42": "2Km7BAu8JwsmxV9N5DHigyWTpkrTDnvTz2GSVHFeNagJVRY1xCJUAMzTFQQBLQ64oBHDUfNnCAxuMqTGjgML8WxM",
  "key43": "4GgmxRFQ3bHVKVALXXtx61nrbuHbDCJ57xpvQg7CAccnw5CwGyDtJ5vSv5HGNz2xkksmEskraLpsJr9mg7rdPotk",
  "key44": "53GYyvTb5whMAWfArbAYqSkbibWMSoSP2Mzgjn3kzcgB53VHaVx8qGVgF8PXrEMQZCurgDGf15pLhR67AoeWXELn",
  "key45": "2vHz3W8dUoyJ4gVpXotcM1jsEpwruj6LUHXSKbK7x7FUBZjTApiRboXxxtWwiwg4pZ1fQyv8VdxZDCpNbpeWgY92",
  "key46": "3b8KJ2GwvBtnHp8bCZoJQzZQHTa7H48jmBXiGEZGNv35wvEQtY7WYqENCuT23wG1PZH9gu4uFJf7NBMQ3q7eXMUf",
  "key47": "53uGwsrtjujwiQsgrwgyScxSEBt9AkZLWwbLiSqmykZADntVsLLpyGc9b71zcX7gH8nRvffvCX9FCYe1vhy1ZR6h",
  "key48": "3EZN7Xa47fKmQfzoVJPEKiWmaYGpPGT57ofYpkRTsNfn8JzvX4es1bBJqU6HfEaQTGbtHL1JFt9b9PipQEHCyYhX"
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
