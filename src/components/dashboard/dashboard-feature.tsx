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
    "bGHouuUrcRRv2NViLNh128kywv9rE2wgnRbqGMeL7JKygbCzdWZirNuy8uMi8fF73egyDRaeUwYAwGYFFBBEXMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5AfJoZimZUj6bGQ6CUux7zfs6nFEURvZtJbYzt2nC3p3wFheevDqA4nzqY7cSjBmpVWP68kA2GY26tsBqnG1y9",
  "key1": "VNAYtHMEfJ4S9qt1s3Xu31f3YsK2NRb4TYeoBfAvZhWHnyiPmDfYYdai3RcShU4oLrjL3dyKVRSpsMYQft9PdFy",
  "key2": "3PEshCuKBHPE3tgh2a5QquMb2gTuVCDhVL8JDs7opHh7PctKT8NAkpyqL9MsvEGuvPsPangzq96qoDvgcSEyjZSA",
  "key3": "gGQjdqwafWSyaTonBKQWKRV5unSPbHZ4dLBzE8jGt6DhSTVYPmzNGDZSJTbVP8Eznu6yWnPX5X4R4CTeG8gw3bK",
  "key4": "4ZVkPncD8hb1gcfGpVr8KuKbCW9vTUAb8KyiyMXjowFsj9tBtAEo8ibr9GJauuJyLu3u19LJFfrEvhGnYzYWUWjU",
  "key5": "2ZrPfQQCpTV2XhGpLq8ubLCgfQBFdis4b9CoJfBBa6LseCDxRwLUHLbxYY4YdVUS59y9yY6QJgXkfzsHXnYV5AWa",
  "key6": "2AMcgVBVjXiWirGpKnZHPwfwzTfNaWa6bNoqG7xvGyDZU58pLxWKx9HbdzTLKRbkHSiD3gawYcuVoctCAUFGTSSL",
  "key7": "5GXD28qxxt2JUzw6y5QLaLPSCUy83Aa4Djrf6YapWPQ7RyN7M7zpKLmyedEFj3dguRq8EzGWZorhBe7UKA2XSqB6",
  "key8": "2vifm4aqAWmtu1ysDDDrAPQ8iZMx3o4oQGTm1KVKR6jnrPpGxJPJPgaEcZSXT1AvdXFHD6i6EE29yP4PexcojPdx",
  "key9": "4CJpuk3GfxidcWKfsKq9j4WYeLSWwNF2NTwd7i5Z2RXTQx6pAxFDZjUbWvZqj5axgYP1N1zaPdRRvgcDq3YH1UmY",
  "key10": "59aBRQLYCHcsPPAcENJjPzzxnQ2EFUhtNwHykZyR9MKzHEVCpyNVA9iQEwdBEssZTXrxL6xXkBoJhFu2Ph4q8gC4",
  "key11": "5D5o1tFsh2JSacvN7c8mYJKapT849MDkEqGR8J1AYvUzX76Cznue8X9ZdovDneYeCuBA3EaweWpeyycACSkDjWnr",
  "key12": "2VWagzUqmwnKA3Zoi1wSzkzxTkyyonhMar8feuUAWGrDcLNDr8SdDVqAEhMQXETChRxMEYfSX3xnRmKze72mKyme",
  "key13": "51hMnHpguoseCW4VT8FnnLZe8Pmp5X8RqCN7anbQASqSBheu8RsT3okG9YysMGnyZn4FCgYEcgXEh6soBJDGgmvC",
  "key14": "5zNWbDzq1bQgTMhHC8RPYFdmZDLyHTghbAciCcqwwcJkNhu6mGc9nqcP7eHv8mcatHuBDffiqCmNvxmA7oJUXnKT",
  "key15": "63F8qAPr6zgw5HpLg1TUiHjPXEsQHuDsQTik4D2vGMXUpyfxrAyKzyFrpkMykShpsRZUMwajNPpzpoA7io3mhhjV",
  "key16": "36jSX3htMh9eUFaKhvLzyMdR2NRx6XM195vjE5DLFgoobEuTd2XzNc5tSgwGmngyFxMF3QQRbijfRWjGtXsYNd4G",
  "key17": "4cr6AWveG6tAEqHXsQ4uCHtYp5w42fGdyvQFBMxz9icCHHwsJt2DspH3VgA7YhpirJapg3UdQMHjC2yzJUVSVj9D",
  "key18": "5k2CQ8kyWKEDRUwSZas4nLhUpvGYNyLq79QhMqVCbhpGFUo5iZEuj9ZowLyn2THUjafRXTjWnfU9cCDj7tk42QEn",
  "key19": "3EMqSqtmmh1u6ACfZkTZLJHSuvV8K6ZnGEvzJgJ5TVPwUEDNorCumFBhySGh6SqBYkUpTKkxp8aq5uBaCNiXSdsi",
  "key20": "fNUgZKHgXN58jUFhazwd4W2Vk7QsVRw8znaTRSXboJHdgyQQyEBHgy6U5PEPTVJevzVYsBKoEM8BiyCi54xapDQ",
  "key21": "2CWbkK3wQKcFU8H85BGoBhFnAoTed4ouPQM5FUWSqAEGgPHeGdKWeF5h3rLGSpAMrehnJEXEfjeVd8tXnCK7MnZW",
  "key22": "5dBvDaJPxjtbfmTVaR253BjEFMUcUioVhuUk5RzrYuaW5t6Z7L6NkMwhZE9ZgZmVCJ1XbKs7L3uXdpp3aVzuroLD",
  "key23": "64aBwCjWEFwe3qA5kDK2wkQCb7rcUvE3HNRpbAtwwdTe3vMyUUQv4Cmu3Cw4Y7X3Q7zxhaMcS7GE7LUvmXPF4rca",
  "key24": "426zQwA1o564n8CsydVkCzG11DzQ3QfSroMHvcZVhGBEeMktwagqMWDnPWtrCPvgZJbWUcHqPaxQF84o3JafQE42",
  "key25": "zKDXjfmeurvQeWZXm7rRFRMRttKZM6Kpm1YhR7L7cwArvyXyjkR5phpoH9rnCvDdzMKA3KirADDquf9LptDtBRw",
  "key26": "4NcBPtBzT5QvWggwiNhzxHZ5JaUuviDgRNWQqic2i7gyvzSG5Zyp1brBCkKrPgequnVKejiUEsF5iPjLWczDQNrT",
  "key27": "yVd58e3ZiVkUEKhfzRWo98duiTgdaktk3HUmxb2v3waUz9r12v3iMgv1fHHGzi9489bqFCQMn1gpSZgbg2KzY52",
  "key28": "Q5PumWAe3dPva3yZQnA4H5urg2u1gLE4a81QJ2et6r7oZ2NY8PMoYFL4uk9SywnqHzhf4ZBi2EWfCM7iJ39NfhH",
  "key29": "prfJZo6WN7e4xZNbcWigz9GdcbcZrKY4uswyn2nJYi6CcT6ua14CUcLFEkB6NuAvj6sdVBrPBRFzhtEXNjD4DCn",
  "key30": "5CE4j9tUQbX6kqV996NtorJMYhyFhhLnHuGjNij1VofAQmoNTiCL1C7RMupaRCRpQJDwjh1nLbzZzqa491cS5LUc",
  "key31": "pwVUVu3UEUytcUEy64pAaxeh92nfeikJuQCofSX6DcXrG7AyZJTwJ9CeecjU25kCGwVvptqwZ8BFMCrksYd2UM3",
  "key32": "43gbzWbNuSWSWWAdVKHHzCRRSewfz1LB7NRpy9uboKdibxmTV43FPHsmUGHPLY144PBwUZSFokhs9JPs35QzDd1V",
  "key33": "2z58LHFaKeZJMeX5JjPDjxbdfAwFaZJuuRpgcHouSb4EcbMx6Ur4gYQdX5MEqjqiECWwALnmSptsssqmfS5PtGAe",
  "key34": "52h2K2x61af6XKNwAzxvuNpssGULL8qPVQtXXWbab7BgHWLqSYBBbxG4GCHYFEDZpJ8VXSJM42t3RH6k5j77B7Ls",
  "key35": "5WPShvoPkXQiYnQVWkwvccSocs6LYxygWHqKX8ri5ZbfQCSc1d7JFT4QZBwLnxbHuougeXBTTw1Ht7zrkB6MDadS",
  "key36": "3EVMKvgp9T759DSxUrrr6wqLhZnMN9ZsGMR2nzRPPVs8uUA2bc7NjVbeARQkwFqaqs8ZquJhssVKcVpVfXaEQVT6",
  "key37": "2ZH1Nmf7qit6dogGWJ6fbdrRvwqsfgVrYJsfMaKAuXA53NvDgtMtm5kTesTRf6An2uCtB7BXKg1TKd3BHYMcAAb2",
  "key38": "648VJHYbRZn2MjsspqJLmpnY739SdNAqCwhiXBC8xJDTW1NdPwR6sZZbZzQ2Z8qmXJdZ9eAQYeRDJgp4i2JMZrwU"
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
