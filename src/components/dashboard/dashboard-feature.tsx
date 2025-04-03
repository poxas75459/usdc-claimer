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
    "5roBRcsJF8W3AkshFuidZq41sBewAVtgPmB1GtJCawZXf6DNCkhEQRXF74DARRkediwaiazJqE6y4imgviHmo7Dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNYSj4Cgf9z8YhafWjw2tLJUKUbfMPsihwdaKdovVgd5DRfjzKFak75aNZDkc3GLYjnhWusGf3XSwaXUo8aQpYX",
  "key1": "4A6TmxJyM2N7b6rtmS4BpsXX6RBKdoRiU6pwiKEG18ahqoFFnCwxiEErWniLEHwNkp9LJHSPS92VNJZks8zGb5o6",
  "key2": "44yjvUhc84whJTb2rCEtGkdbPAn8AC1CSaXQMsbgqXDUyBznpJK9PQpQrAqhBaW2fim6eZYegytUMuuAHFc3LUSD",
  "key3": "2dK8NUugtxky7iPte8XwE8NqAwb9Aq4LmZDe2jPKDCpTR7BZpnSM3T1BF38j2sPYNPGPBBNYo5v5RKC31rn9ak7f",
  "key4": "5ZhYjGmuuB8dNnCYWwYpJzi4fQqhKF4hV6rRUxPhPRXxYaG4tgQYmvSvzieXTi9QtrUH9CVzYkgG29tWdWdUaPmx",
  "key5": "VtYTn64pQ3zRFjuKDT7fvMw97RvMDi6xNoFYvUc5NVzoFShv4NFQ1XpxBob2uamCPyR51qdnq7fXh87w5M5fQGt",
  "key6": "5qzJs8TFrUsmWcxodZBrubwfxXf3HbQTTbS2RNpovNJUaJU8pSntmyPDMGdUEWo6j5Ai6pLEs1ficQj9M5or43GE",
  "key7": "2oTrZ9MM5WHvzPJzASp6v9yPZfzTAE7sZMEAaJ4zE95rXLcJVccUdqhd6dFvwqdUzFCTeDotZiUQpQptXJ5s6Q7j",
  "key8": "36y1MqsWSVxu7nGpQdh7QyMtRJJhsGSZm6kbxamPwuMjEtavCbPQBLmzvLFXN1ZvHvhmQirUedVUUbCkJjVi4KMV",
  "key9": "4mrZwPXzP2KxL6QViz3aUAgL5C1RVGbTZgy56Wyyj5GHFgerVpXcCf1orE3sxswBH5BGJcx5DgTnVZBsywsUrwoa",
  "key10": "2t9njRkKnwJBGrSxMccPUcXAspM8sDm3hrSko7DwkG38t5DEezc3qoWHN71KYx8Bc1YCdXuAFoi64NStzsHDmmNm",
  "key11": "sruuSob2fQmi2nZSdgCa6FZwbBAYrBJNFKmjVkvfbDncefDR5VENXgyDShfVWBdkjv6VAHRpJE4gFWP5FRhtWwB",
  "key12": "2LAMTSg4GVHqQb5NwsLShJrWFRRfbLsim9qj8wjoqkuSWR2RdJvAMv57UjYW6mvxFVPoN43hQZaCLKaLN9EMjAMz",
  "key13": "qAG1CqJ6Mcz21D9eFuL4BvJT4yaN7Qnt4npzFQZHthp7YjkkWacw1wjKiL4GWfiDs67Lcwj7r92Zhmgom5dseXS",
  "key14": "2HkU8PVMbrwScgomZiWaJVgmk289fJpC8tL8S9j1yVr3KKyvJPrk3q5MqoU1FhMmpNVmsz2i45YjDnNwNPEhSazQ",
  "key15": "54B5eNdQ6X4rwtUvY4kVUAJqZ3oEhTk7mEYcMkAQqFqQFsSUqQYQpwz5GHPsWhSJP5i8TEXsBdhwKTJ5CCBiDCan",
  "key16": "3kxfzpTuFriRAHAE8AUvF85fM4NReuNMrPFkrEMHmQrXgg8QvCCC48AbXsZCkQKdFgnMk2TebFPdWMRZviDsftvc",
  "key17": "iH3nMK1RnzhW8gM9JnAqZnxAYdfhmEcUnEpwRaJ6f4gPz44KmeNzcDb9figzh8k7B45jqpdSWaaPURtQA9ACf4z",
  "key18": "5hBwtVQ75ZZ5sPXrK3RyRBxeRF1RUaM7u1ovpQNz2mjbUwS4t5qtsF8FWuL9snFghvxbdStEjWRMGFaPUhQsRCS8",
  "key19": "4YJK5B1Ln8wzk6jhkMEFa5ewAPfPJw1GkWTjLkNgRoKsrbEmVcwA6aD26BjWLTbof4D7k8oeJ7XQqYmVtMVQLeG6",
  "key20": "32HexnEAgD2vaewXz8NopGh9XdWisVo3c9G5ZJXHQq774bA2ymeTx7tezD6BNeCJMJyTV8EWFp2sQfAgH9eGWueC",
  "key21": "zCoTdz235C7uaJ5MGVmEnZQMKBNT4f8vGV7XdTy3s3GkQYkVYgDwM1eumy339hGV7kCRJhKRRkuciCbmDUsGi46",
  "key22": "tRmRcMvKodCyK8d9btYL6JNtLkL2ZsFr75FPVyE3QW2u6eVpBnEPJwJgr6H5Su8Xn4Bzou2bfTdCRNkeP3caFxC",
  "key23": "48yHdMdmVfArHido8wgPCm2QVSG2pua6oKLifgDHiwRHHFCN3NssN49T49myjiAe22gwbT95uVAVRwAm58p4VUbQ",
  "key24": "5atbRgW1D2fMoBoerp1UzzpZYMNkcbgvcUZfnjCkdBprkV2EFJFboTbjzTKaNDCr9ZHXDQHH5ZFvvk9Jxp5AKmo4",
  "key25": "3atC3xPhCRk5tK3nL1WDEgZrbXRhDmbWHAJYcVVUdqMDhDtgKMxxbBh442hDYoJaHoSorZ9vhqe7DYeb65mjx6Az",
  "key26": "5n1uLbkxEDcP1uDFqGcTjg958JjRNDBVYnaWtdjgkBvCdfzQjthwEJGrqqweJPoS8L29wByUR77VB3ithWPkM4qZ",
  "key27": "4WL4yNBZTKmdZnP6ZKR7uDSmBptDZybxhuAs8eBnypJf54HzT6bFidUempdvpXhNbooC6oTdcg6wPXWj2MfpfhCC",
  "key28": "2M8uaXJEnQg5KtYegmDEyea246j8txgpV6ThhfYL9BDnzjJ6V3L8dJUsNmnZJw9FDAe13BT2bJUyHp5kCTt9f1VT",
  "key29": "jPRwqd8GxXUxkYZabvwUgd3wge4hKZJcybEJcjwPKDxMEQ3tdGKopBXXGDMMHYHvBUVP1htuciEAKnSS2AC5s28",
  "key30": "24JK3UykTwUQu2cEPCd6bbS7yydwqCeRknft3EJC37hEuKUH3oWsQWFsXNf6ZgQVVCQUmiWq7ppU8hZUbnYxCCTt",
  "key31": "48p5VyU8Z5pK3wuGgRYU1zM2xCzr19uX1hVrM2DPjUEV2CHkhR3Qfw9KWE1cWErPuBiGJo8BqaDoti6isLXWZmxr",
  "key32": "4eJ8wR7pPDiiQJpfM1c5rQeMufCAuwxVptbixbxfUQj3RLpX8RcJ78YrNoNTqHqShbzEUS4rgu1XujcSTaVwzgTy",
  "key33": "4GbAErdxi6dm2FQWzWU38KBcPxDTJ4Hg5jd6Nd6VeAjDqfx3PNCtS5nf76ASRT3KmVsGVUNNricE48Z5AgxK6We6",
  "key34": "2mbxA2eG367g2Eq7FaM2biVXDEUmuJpXKZHcp3aSfJkkBa47eYWdCpLe2Zrpvh1HwhUkUG4PRDhCyBeXzbMW9mzE",
  "key35": "4vAsMkv1HXqrEGj2YQA3rpqCD9m6b4Bw6g1i6je8A9VrQ7vMVfescQH5H8XkAsaiz3aNwoebbHbmvZTSon1KiZqD",
  "key36": "g4F2yvLFyQCMhHmydohBseTZaTyYT24HtWmUzbjc8wwqhnEazPjH7jRbhqnHb4W3k4fL9JSLaXbwK2i7w5VvstR",
  "key37": "2hHNA66BMFXptf5dZcZKqus4wd5yyjFzHMGhMBtZZJ2xYToYomtMh3HyFo3sGiWZjh85MdEAj7Zx2PDxWt3g33tQ",
  "key38": "3Hj4jqMqHD9jDCApxXdM9N6GF7fQLwFeVEzGyWUEpcNSUZMVQRkPyfNRBWRX5g39iheUNU7wL4GpxGKSEoXTusQH",
  "key39": "H4RoShczi5JsWYAUyKywDv285K1CH6cZ1A9v17dcKqrveh6rR2EXVkrGNiCnxBV3cSzAZ81ogE8vtAoJapzwn7z",
  "key40": "2XKsuUA5ZoqbUWJaswRNzaM9S5gGf8oc3VKffZ8ENtwQLjUQNxAKUvLrT4R6q7LEdfDFRiK48DMdSDBxRGa1J2J5",
  "key41": "5tsCsyL5ZkZDW253zp3UEYuJom3A8jwQt79NrAkPo5kdDnMp89JYAxg7rMX52KDUDzvcgbunaxxRRNwVaJVcxPfW",
  "key42": "2RdiXTtePSHZhdmQP8Tdm8nX4M4XwQHxWgaSPJR9s2Z4fcT5NhycSi9hv4sBm3EUpPSmLFNz81phaEQRRyjSnq5P",
  "key43": "gbus4eWYoeggBCF6a4N19xfgTtAHjTPWEHos56WZ5cZ9MXT1fAAw1Nt9tSX6MXEZz9sHQ1rTZ6GaqUxuB9fhQGe",
  "key44": "45PHpDgbDGbZMx9oxJRxDUFuxaLBQkYeHRAoDct5LAWf6aqZbKoYAoxyVTcM3rvxvbtWx6CVBZnVc5bSKq5tjW8x",
  "key45": "5qoexVsktjHoMrjemWxVTEtud53rsEopB2KqL9YgoRQBS5uHWThFo13BC78hFQZi4WK37pUt3hQv7zmd7Et2EEBg",
  "key46": "5bndy8b3C2nXAGJRHV3GBMiimDA7QkBHjqDFJf7k1JGsZMZzfG6CMdLiq6cBTVt4H9cKqxAHsSkDMrQt8q6HUcqR",
  "key47": "5fLPKRgqH3sFFoVVsxRNnG3dSiAYghNR4Yc8yS2LXvbRuCRrVsoBukDyGMxXPs67NBEJfBec9cd4LfJErjbPx63R"
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
