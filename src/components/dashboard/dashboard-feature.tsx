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
    "3hE3WWeGbavynEpE6FdHqxLeBgo16a35qPMaBPrWcAv7dXu1EKc5bEtUCStiuhNZBXVf5N1vHzQEBDn7vQQnrGGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQDZcanYRfPyA2v2na39DnyMaX8vo3c6WtTJYoCyddRqTTk3LqfCSWgzD1TuaYFB6Qd7G8bjQYsk9JWWi6SFd9X",
  "key1": "3vq69VWqwXWWQ5u2sC3H8LvwBJKkx8NB2xYfCcePj4bNyh7PWSjJeYQCtqgqFvMrQG6DzHSNTrtYgyofx6H7j2N1",
  "key2": "4iDL3uBkqDYP5zrUniDxDtbzjz3kUMZRF1aqPu2keRDsQ3Zp19tjmSKuf96GJZK6m6YWcY3u5fgCmmG6RqBCfYQ8",
  "key3": "31vemE9fbndSik1ydxyxNKEGoeHdzz1Bop5Ef1TsV3ByefSJyF2A99ixd4xccmXJcwduhoPWN4Rnp1CWR9KcEpK2",
  "key4": "3V65YiHMCuSwBTxBdSfi1vtWCY6Cs3XfgoNZpevDZFaW6BqgzttNfxNJ7saFZUEj1jzZDtLTuK1FKAVcpPLuib1o",
  "key5": "5BtnGhBgFiTMhsEbFHFsbrySpXq7dsNpkKoWsSQEJWogcqFckiAnL88x8sCfAR8nPkRMPDsgNPaFvNRxzkvga2xn",
  "key6": "4db6iffBuJCKQ5ETLT1x84P8dvfYRPTyVCnQLP5PtvEnpoS1mLD5tXEygZ11KcG1nb9Xs8yzZ8aSg7tcarJ2wUDK",
  "key7": "4XxUvxgFKkx9kADN8A5SVxGozuQpwNj9aV1BupMfootoDqAfsWQwssGH2JHA68z96F4XpVwdqV7UR8ShGtmcqykw",
  "key8": "5YiLTBDaz4sHZd3kH2XduBjbhUHsPdWVNCcT7ycFGKZoWjtRVCVYvA3zptUkik5Pie2jxA6jQ7rP9PTxGGEzhwcc",
  "key9": "3C4TJePtTuLN3JNEZwJeVPEzT9P2CweXawgBJMfJSEJzZCCCYWTHZKRKZpqX8pzi7MBAxTcvABa2GjM5Y651DQ3C",
  "key10": "nX7Mni8MjpYUXyvMXWtPD1J2m8eVBPNzzAqo8TLi4SAmH2HL78bg6YNaaPPxjsjNj4SNKx2MLxUVULxsyDtWvEG",
  "key11": "5qTTbDxL8pw448HQCfQxfnVpWRiffoW8tWXP8WHqpNSUQEvTFDkY7pUmDvvkvC8YckRRGMgd7Y7pYvE8ZKBeqdFb",
  "key12": "4c8ErYGBCDRjFXrXRfDRe2JcQ3qRSSXrp5Yp9qDAbca4cYky4izhfSrARifSmF3RA1JfaPXKkqYGJ4QCesrahDmx",
  "key13": "47BZpa9VdQJeqqnycAKUqZyyiTwLTX399EUdkYSZLDVqvBAJJyJuGAf3RWrRbU1puTpVqeDnwoBLMScRxvQ9Sw2T",
  "key14": "34TXJGdR32kpjvoimpCpF4enBSrnvWKVKGZLaWhwQGsWVnDshtfr261Gg61VkwTphoZjFnVVvoKDnabWj9bZMtbG",
  "key15": "3nYbUtg8axuXukeD5CsMYemqdziUyZsgxuKhsBHyHQx2XWkZBi3KTgABigBf4c8tHyfcSGrjVYCJEfz6yWBiUM23",
  "key16": "2hN9pN6A95g985zikwKBUjerwkhGKwtiaJgWbymK6j5BXF9ze42Samay6SDSY9jLiAYN1SuGcfvTtUtcmPrspnn5",
  "key17": "5jwePRWg576fGqykEEJ9w979vJPtojGgXVXdFgAXsQstUb9V12NivyaZHswA7Fn8gHLMR12Pbi7RJ4BT5m7hgz6i",
  "key18": "4qzd3mjhw4dhWRoqSM2yeDJ4wtCCEpECDsBrFaWmjUjnCZsAhC2LEG9YN311UkwMfysSor3t6znCeMQDLtyTPPdv",
  "key19": "3RD6wZaScXRUcsTJBo9sULJoCtem5yQnqTAS1s7DJ9MayFP4rF4Nca7FdNCDZXRkyU7kzZpqry7GMojYr5brqTjL",
  "key20": "x5oXvmStKUTf8YcZvkCvijFZ2UBRtebQNb3Zbkibo7zdZbWK4yPtdoiFN4WUL7ijRVy9K48zSaMnUpuM1kJuhww",
  "key21": "58fhHHAqDeRjQbk9d3UVZutHjBotDePC1nQPLbgeorS5q31JdWv58WLBehgzowRMWEn61z8agteGCvnPKnBgqrBX",
  "key22": "Spyf8GB61rUvd1bY68FnCsYrV2eduuxg6Z4dPaMpYeYigaS7thQG38Z1zWtvTsbHHwTW3jLw9agbceeq9F3MVV3",
  "key23": "4TxxRJ9mwjbLAQMrQJSs8ffWBWDiThxFXdUeT73Gmt6r29yqh4ypSRnFBYdF3adzjvDJavy1EvERh8TwLCaBz2iS",
  "key24": "2tfKYcPvDC9JnNCLSN69hUojPyByG5fbiUxnytuuXn3Qaw5uRtdj86CXKibX7QMQFqdPpbTj3s7GABs4zSDkhgeD",
  "key25": "4qJt13jxQ6WckFMnDfrbwrdrxfqECzYnuxNU8xcC3ddDxuJeBcFv4EizrrV9CphB1R5jCdyanj3HFTTd2VZ2gabK",
  "key26": "59EEe2PzrDirRNC5eFJD43jYi8RK5gaeGS6w84frwLi1Fuhq1druZyK7FEFmL7cXXqwwo6JCQssuTq9siTCo8tX2",
  "key27": "4V3Juwf8kjkcwDK7iaGLAuANmDz7tiWc2HyR1a1RbrFS6GR5uCKeRSkYWoo3xJkxsmNVHYHfAURgcgtmPSvaSLJ6",
  "key28": "4XXz5Lgc4yCubwrZBSPYsCMz8feCnW2eSQEpZyffgGnRYoUBFNrVqSsFp9ZV1Vw1PD7FsjyXKk82UvVfZpsdUVTL",
  "key29": "JnSdLyttSXweYhvMT99Qq6bXTYUw6qk9JqzeBSUJtbNHBHZJPQjADQ5MuR4qr53Eip4Du5M7VEauJKxCnaV4DmD",
  "key30": "5hSe6bSLL8LF637sL58bqiQNPdJHXFQoxZ5JMcEsnxBKwoc4Tjrsqwkjd7VpQaRx7R4osqcdFjXhmyuL6Jdy3RcC",
  "key31": "53xQT7bKZcZz6BvCnyaErVjax9QPD9mhGzvyE48GZ2ea9ritjBogsA2tScGPTUnzVTYF34KFGeb3gbZmqYkSEk3",
  "key32": "2n1ex8bKSb1jg32taHPeSj3Vt8dQTL1fSftAtGJWPdTDbTK72B7W5L3xntuaihrAHkwbGzyfKbwVeimBBoQ5PLY8",
  "key33": "4mcsfJXbTQBGnTsm1Yv1PDNZypRbLKxM1zbMWaQUUEX6t63JMFodVnByN94Udff4tafroUzgVNtcWQcYTnGiuqqN",
  "key34": "2XazVD8mgkRDRSNZ5QPsr89Awn9ZwxKwR3wm9wwyKKHiJDw5zeX678KxKfQvrnUT96TXoiV4TCJYB7ULXSsHQEqJ",
  "key35": "zKzkc8832qBSxT4zpqNmUabDFMhzDei8G7qbJQHShPdrpXSQ5abLLZuy1kcM3WB9v2xK2oCfMsNoiL38EdqsPX2",
  "key36": "4z6qL9y8umKzcbpMnCuW7bjP6NdXtFqmvkBSA6NvNXKurX4EfRiym2gJnrKafk76fe2RdtFxhMpua8RXghFGNVvS",
  "key37": "4tffPkaj4zHbkbxYtvHVmw44LS1LnAJe4hJYNGuGJzNGysCM9xNXSecndRJ9qXqijkEL4Ygk8WKgcVeC1jvaSuhi",
  "key38": "qfnWTUHUw9aaVdAZdwULk8uvhyyQPWwFroDwvuWvwk8yw7qXq736xbMeTxjKPLJKb7nV9s5oK8eshUMZXmAVKzS",
  "key39": "4njE1FiRojL7fNBoXuj2Kak1rPyoPbGfZw9Wg494kShiuUpFerRPrKQSJdNTvao7RT93yASEtnq8c27mah2mnR4T",
  "key40": "2Zvjhbc9f6We4juMvVnZ13DiRHcuR1xUSVCS2zCuWR6UJpT1hKUVyeRfcGcgi7KZpFE6s4jryPZAekCms4RfeeeM",
  "key41": "2ByiiGoYsnGas3t9ZZSUsAUPxpNxgjGfzqUZ5omXTRCUmmY8RzKZ5srNBQT1STifY9Facfj3s5WH2QdJXfn9pJrt",
  "key42": "2RT8p51JeMiTf2kezV3b38rjMvZVkdRFmbMkjQeq5Z82h3j75MkK8kCa2jHesCZefEgFV22TR6VZJjNGDN6rg2nX"
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
