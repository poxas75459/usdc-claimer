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
    "5eRKaaGNdDgUVVqUcMJVQxi1rZxcywMiktCvDhF7fFriZ7VJfNNCEBbBQgLfyF8FcpQr3BDwQLojwhrWQjS9wmrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YJK6rL6RBDvjKG2RojedbxYqBhDX6EYSL9sfNo9hwN3HWeUkWwQpLxVRCJYovqZEyNpP4uy8MFNMNDhewigrUrg",
  "key1": "usR5nsuKKc1ebxvMf5fuLK4TbWVQHBGUD241nKnrqJrm7WiW4YQoVaMLsVR2ocALd6zGiyjQkLfuLmNosXwPqsT",
  "key2": "4zDNk6AYwbPAzskUJCyxRbWbvxWY3LjpBn1efaMNEdshj23r6fmhu2BRyA9C3ZrDLBpA4WvGkhMG9izLPU3zMgE8",
  "key3": "4ShAj8QkF1H7JhWXkukpT5hKekCjpXDhhApdJvPYs3Cdh7nXzojpt3HcFLYJRsg8HiA5gwEfEJ7PxGbxqmQxneDa",
  "key4": "XxUz47foMidMgFPJxkXR1HZbLT2W5xPtZMc9kPYUL1Btzv5WkLNuEW78XU3nGmRdu8CWHMsvqmcGgt6Sfovh1ss",
  "key5": "4biKAddrZCsk7G12tSvgdtKYmxobqUmq6Ezt11LaXEFfQn7zQdk9pk1KEnZHEU9gLMSFaNx4bT77D8iMqAaDsgxx",
  "key6": "4cJckqN2g7aHYEFjUEcmUcuRRbkDqGzdFKSkYU5n8QYRaFXSjKVUH2VR3thZwnBdZFDpfdpNGdj5UZXoWJzzUi29",
  "key7": "4JMboaiAhCiMMzzJmvdsEN6cAV3UEnwwtTLdTvykosfPeC6XuuRRBk3FZrLdA413E6YunmNkgoqf1hQJXCDfDDFQ",
  "key8": "2N4jhGEURjXQCFTFHHw3hoVBiKTGJZbWzzCaH7JQiLRt6mm92PhXPnxQmJDQQs9DJkVHK4dw8PZnwXR3wfiunmMS",
  "key9": "58DnTy1pPKoTv5w4h3gufTmZWrVTgGPZCv4phGfoVJfJs7QVaQJ6TEBg2sQ1bATALTYnMJH4wsyDJiZHeoBMft2g",
  "key10": "b1iCCBUkH15DRCS7Yhpv2TiNXd7bb3uxvfwrZxoBeePiPNwLThBu8VGUoUDDrgw2oVQQtMrTgE9rRFUYWuBbamT",
  "key11": "3ZitmcmW4q4TJRsvqMkUwymQ6rvRgtZdp84G5MxAzQ3LC8TmzvDRvbqmtFNFwW8YyBRRK5fyiV7SeYy5CZ3mnKeY",
  "key12": "AAD19mcLJAvfAhcUFuYu1YbuowguGb48fe8P2vLdWYm8Qyha8n6pEoP3N8tWcWp8QWKXnw7gu4sPJTfyrzW4Mn6",
  "key13": "26E8wLyveTtBtsEF3tjw9Em8a6rr9pzrwn8Hi5V4MkZZt12RiN1fDvpjTegJsAG9oBopUGPtjXXwDaGPkGSVQ8bH",
  "key14": "5jy984kfdvEjXQiJyotrvnb1V5RdAKX97qqGYJaa5fhurET9UBTNoMY6xvqvvDcZM5EzvFyide94XtqfR4aRrGF5",
  "key15": "JjUuFbd2xhtBoUqBDJmmsJNBaqHArmdivcT4U3mK35fDzCBsQorSH7Pfquoo6nxpKCinTLaDHMZ2677T5muVzxE",
  "key16": "5ur1JTjVqjSvFNPDEooBceG7xGPH6yrx6mbosdToNJ8MWn2b2yeVbhZeKxt2RN5VNipMPnX2hQTcRYUW4FmadBcy",
  "key17": "3K2i8rAbAkrzgtqixDpbHheUebKm9k9zHLqgXqrmx2g27ML9wa296hLpw7mXAJcCgcMQPepyeEFVpcJMW6WjAP7A",
  "key18": "5d3vRDrL1VE1fRwsYUbHqor82Jkt3JHQaFBcQJfkabYYe87r9uSvWGryqzeYfUA7EkkwdQ11NWQVeShQekkh4KM5",
  "key19": "4ox6RH16xkw5HP3nfXxeup7RKpHj4aohJQfboq67XLXinY52BXtsAyafym1jzx61MWNxyf6gZTbQpaRZiLYynPhf",
  "key20": "dm5YZogbXrmDKjYDKhhr7Z9PEUK2jcJrS4scKgusaVJgcXY9KhBMATsmSDRnTQY7vsqYA7PTGM7qp5BfK3pahc3",
  "key21": "2aUhzQLbvTvFFZR4ZKypy9yVaG714qkGk8Gv5b7Er6iqYNN9dVyKgA76mxqZRDZNX8ncHSomxNzvrxooc4zgEmX1",
  "key22": "21xT9ysJ9kBFp6c2E9C3BA9Y7oazQsC1mz2TvX84a8aWeJgnNsKs3SEQ2Ug63rvWDHaLcJoLhUX5H6yx7CSkVKof",
  "key23": "3hEDQLxNfeAwKhLcmtxQEwrm6C2WupmojBZCLe2FfdcxHPuyPpGPWtMDqAe4d2mCcjnMM9AbvCrxdVMPpUondJSJ",
  "key24": "3xpVTkXKjQ7ZyV3knNKUy61sxwxUSGDMESKpKGuAF7HZhhAZ514dSTcdKYp7Er6mf1ZBeW25Dyc3uPxacdevFXFR",
  "key25": "25QAVtS3vQdnWC2F4h1NbczdR5s15PAMvkcFni2FNP278URhLhHRPk971Qww1NvLXzKEPHW1n6wyqmAGjF9az4mv",
  "key26": "3mJB3vcpM9vMjh5PARk3SmJv4tg158HCqUAwkJcJ2wFE4ivts4jzzoi2p4gzLAV6gzt8EkU6ypYcEHbxVQdnUGvd",
  "key27": "55vrYqPUQus2jPqYK79ERZnyqfgJu3v9FFumFzqgXiepFYwi7AvEmE3RExAZBvy1EySFrpCTQiatMCG9zUpdPh3G",
  "key28": "4i9La9ULYi7uDK4JLpjcDwgx1xS7MtUCaz3eqNa1z5YrdB4Ba6NCi52zzA98oYQe3cWN5sWTWSeMDdAMXsCmGtZV",
  "key29": "2Wq2wdRjWMisq3qbYA7paAjbHCCK6EWi8kCHxpJTZvWF5qsBsdnsuDWkDK39VsBG2Z5ua2Hq399dcaJc5NnEnYMY",
  "key30": "3YfRYGdgDkvCqqV54qhymPwrD8LrYxi9W6axn8Hv7gym51CemUmnaagHj83gVYWwi9Ygbzk1thcu2BMP2J2VZhRH",
  "key31": "4ouj5jDAyFASUNWYg1t7NQT3cT89QdKsKMRjwmmZgzWx875oNg2qWTiPBS4d29sNvrbqrpKyxJ9VKjNRM9iRWanJ",
  "key32": "4dvAF2zyvUm4UC1fNZdvADbgEHhSKj7cQdoGcaNspBDJxLLcyEcEFTVmxMantqJjPz78oXGLeLQFwMNy8Q75Rzhg",
  "key33": "Qg1cxEm3pAaLDUYGZWcSr92SRtacv3qeceuF5MHtL1utXj53FBz7Jqf7gQhc5vvpS8Q8AR6XnK8rzgWJ7xUPTFS",
  "key34": "3ZzvVju5cHKjMGNn8sB7uAQASNrGmzsDHtV6ky8DTAJ1ZRTyxrFnubCgWMRY8wD5vGiwmReUyLSMsN1ZbdG3PLKz",
  "key35": "4jFdng7RtvsUx9Y9813Pv9aAQeRWacHiWHSdNLqrmJAwMcQUPZQwhBq84EL8Li5tCBoWyy6nBGscYF9dMLszB8F4",
  "key36": "gqLsZTqfXpneuS1f4k6UQfRpQNmUuGvVZWdRL7Pe83GWSX5xnyXeCAfLNcUMvUG9rpSgMXN1MT9UtdbKEZEtv8M",
  "key37": "3iZyAbDkh8GCrrMaPMvVXCCAWASgH7niAusoJK2pVYi39Ef6FaPEY7UFtGQz2GhrCtknmGSnZqcD4TqTkvvduPpE",
  "key38": "27MMiZm47aA85jYjbn7oW6iVFjN4GjQ3UwhjHoRP3cD4CxvXiRTyetMfBYwLQzgG5fvx321pWP79LCrg7epmGCPr",
  "key39": "2JPdgFFAdzPnmvAK4yirwU6spWRHcajC7Jj4D6bC636AYiJZ2Uey7rXPemmswGDcA3Ms3oJfhF5XBpk5BFUk7kBy",
  "key40": "4UQ67hmhsBZqu9FiV47NRdZXssgThexJ1KbsUsxarYwnmBfkigAgc2Qz5U5tZigHFiykPXWyXezBha71Y83a3fjR",
  "key41": "s4KXG1MmZwM5FxK2psNjQ62Zq8U3kRoekBsCKpLhKgiea4cBsZmQri6ZvzfjS94AkCRhUGc4Fi1cVCE5vpHxyJv",
  "key42": "5hiqBj6xuQmMqXNh8ekCPVyrFoKuXQBNgPHxi2seonJTaY7MBw3rHUW2ZNvmsBYuX1rBsj4zBdqBVCMJgwrqahvU",
  "key43": "PJzaMrhZ5t6XqC3h6ZEix2WKCW5dfShSdzgff384cT7Q8MEffNDHnm3FTdxAvPaQmUZTEy8SJH1JytiZDSt9Gfg"
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
