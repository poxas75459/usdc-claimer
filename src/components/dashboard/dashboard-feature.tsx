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
    "4ULf3qrdMviAvH8mq2834LhgAN6D7Cih7Mq6RbMD44EpjvBm72AkjJfyKKyNjJuhvSB9rnSj6VkMmACHGbTC91ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49m7YRpCPDbTmXKVVjw2y3VnfUxrsmX7ZgVf7e6KdC1QXL2xzbPgS2FTyDbPbQaEbpp6CLFK32icKDwxTtwirkjT",
  "key1": "34kb32ccvioLeKAfZcivj7KNiDjQGsCXMemYrmTAxtgTcJJittDSoyw8jjRncUWP9EttrQC4e9B6zbeXSrFywaBP",
  "key2": "CLBaKHLA1NnM7EQA5SEzm37aFXuTMKNLGyj6KWqStvMsBGNx9ku6x3AzxSY2QaMZKe3BFftdvw94qmcZkABUM77",
  "key3": "t93k7Ww5Hf15Qo9haGdeHMfXgtERtw5eieVk33ohqpW8dB8nzXSCSaCXgft92bMe4YNi8ki34i1jLk3FBopzctN",
  "key4": "Dpjd4Tzze7CoJER9iTaTF7s8bErAHh9A6tYG33oYmXR7Pf9To2JJXawmZFKAU6QCFA6Ddsc3iJFJ9AonT5Usdmq",
  "key5": "5xofksu5muamsZxWbYVfKNXK3ou2cQG7jTiP3fjDS6Xayb4QW5HcB6aAuy47LmmryzGv1UJ6wTAHeQU34MbRznnW",
  "key6": "3GCeQsxqCCG1LjJyP8su3ewyfBoQ77YeKoSrEvY7jCoWiaPVKPSB4HnM6LZYQfm3nGXGbnUG7mXDiYAo1zgyF4CR",
  "key7": "4wjuZp62us35sme9Bt7J7iaGY13uGVg3LGd9HMmNn2xYEvbeRQ5KiqjbDiXNUzHLsxuyKBt5DZD4cp3dZfjvEs8f",
  "key8": "4YtonVkGzoyDL1DdVcyCDk6ddyb92oP3DyfAtpUtsMvP7m4Mkr4NWuRVhS5H8gUtTQpPySEoa9SmhxVAhNdaqRn",
  "key9": "5he7Wb3waEYPtG3nBWpNrqbs6cZrPTJCanH57Ps3a6vauJEJhM5kv7xqAeFethQnB978nQ98AYvEWxLpAogzR6zk",
  "key10": "29JBDBAMCYFdc5JrzEyKfiBt7Ux8GpV5Gu7Crp7GAG3KkQ4tefqjSUKadsTh97XAzB8FH6FDgWR1u986dddUwVg5",
  "key11": "cFiiBF23DDZHNTeehNDCgjqmKxkZjeyMzzPK1aGsvSfPU3J2KAjcGxPxQYZ3JaJhqJQWWD4UehmQemhEhsN2DQJ",
  "key12": "3m9whrJekXzfCqpYtjJjA1iKog9n4YTb9SXyzTygbkgbbc4LSgpy3xDQ3PfUWajnMkTGddvM4CxbLkL2gQwNkHBc",
  "key13": "4wDJgaBp1q8eJYmHGFq54JmihhE1TE97qAiCAnALVzBg4tG3xG2aBuGZqSENrY1VcRkMZ24MV4ijvLUgTtu19BYY",
  "key14": "53u9zc5MAE9ySFhrS9mDkgTmGhB9rYnYE8aV8Tpv5cAyybNzmKrva17yfvwqCMNQVcamaQDGuMpE4k7xS7wSGJF9",
  "key15": "2udCnC21JgXnx64Lq6nSvgFko2DRafWpsd4CpSWixf8qnsB9S1BZdVoEuMgb1L2AXFVvCLwb48ie7AW7FH9Asved",
  "key16": "e1xPzv2L5d5T47yzCR8g9ZPNQeVG2cLaEhYPhSqx6a1YEqJVxVkiAp8b15ZDBzSbjGYPTPJSBC48bPymSsvRJPT",
  "key17": "36wST2g97NkeouQfkxjA15M5mXeCUjQofzyj4T1FbzPHig6jhFTy21aivE2EHpGhGjD8x1uNnrEfS6qLqTNHrheg",
  "key18": "3FLXe6adh3zyxWVkPrSwgDEG32i4jCYbiThokmB5JQBHaBwJ3YhLfUaNBMQCAdjpZnfM7xhhn1XaDyJk5ZYwwwNx",
  "key19": "2pKb8WomiYfPETMvTQKEs8kfvHruUyTG8kBas4EoT52S2x3q1STDEYsn34cGKfNtTJVHkBQyZycWW7vNGmpMgcuT",
  "key20": "4qHDAtQkqGHKbDDJHPpugcKpLAHbQxAVpHYNBnabaXu44B5fCqsLD42pkFDmn55yLCXC6uyC7uyeTBgoHs8Wh49M",
  "key21": "2fYc7iprDj2tcJ43Vniy4LNrRkNhHwQLYCKNcDbmYw8eKr1N1rUCuVhZbmH9PkyzQ88CggNgHF8M1WeLSHpBa5mh",
  "key22": "223ZSuYetremAWhfSTXCzHeBv9kdXyFpHWzMJP82zptvcEXTfTDhfnjtruTUgsNiJWxwfqZNuiPNP8mA7HU3g3ue",
  "key23": "4zBwqwYrHdnhQBtapbrzi1My1qQqEfkBaB6mvTjymkR8DSQtmVSVJboJg47yU6Yxe4LbTDZ84JJNpGT6g9UYcZoR",
  "key24": "yW9Gh4Hb4Fn7XzjL1RUDfzVQqMy8VFC6DbwmoYvAZvwEgtccxVUakPYV7uBno4e8fsoWpxP1QrJ64xM8Jsafk4G",
  "key25": "2q89R43xUQXfjF6Jp4urpRRgCAckmebKkKp8CqVchM9n5gSnR4BvL5kcXXn2TMgDkJXwbq2QCDKKyQoYCxKT279L",
  "key26": "3kpQcoqGK5o6TrahCoPxDzinzZ7HEzhGq4pofQZ2FREtEUyDU5zYtKCKvXaVJzKnFy1iorm5DDj2JkqPDot2dDPy",
  "key27": "3njT7qmGaQG564wDUwPPRVCUWKufsnQJqb5eVa9D7BSoGFaXfdpmQdMwcLvUKuXpzjUUweJuKrT3tTUBUfc55frx",
  "key28": "4uWt3kZw1nckM8Tj6ncRXPtdJG9wUT2MHJjf2FQcaZPt4UKsixWAMfK8xgYN4KnJuSLJbQbyYw6A88uy66Le5Lzb",
  "key29": "2ZpYJQko4FHa8WUQgeLyLTB6GuVG6NSbzNL6CFjnReSWKW1FSbjsWzqEhyivvpxYTGmyQSGU1LgDYuEw99sWbBc1",
  "key30": "58YrbF3gDQ323bg2sNCVZXraearC1Cg98RvMidyNb16wvL1rNWZaRapzaaB5XFWa7pGAGejG4pT1eWmknbfy9RDC",
  "key31": "5bptNDTkZUiQBZKLS6wUiYhJABdfyKXqcHtcxj14aFm9o31HahdPpBBvQFpXxsWPwyFjR8CdRwNaQBFNRXhWtJCk",
  "key32": "3jfN5Uia3SKihovrpHfVetpZRrPxtw4tch4xqMsy34GrnJtwFc1NM5C6Fy3fSgbZH7UsmsgPV7ERqKuQNVv7eFcq",
  "key33": "2EvWvE9Yp7hMoATni7t1TpZWMYcKzAfDDrit1Yj7eES79JaP7AZjfVy4CV1GYFcuvwzLgmPFSmrBMmGmiBNGaA7K",
  "key34": "5GAjoa34mJW3xkpASTemsUXm6KFjb2quQ1sdmSrYQJkMQLbKmkgPPcxGxhMKbpf4Qpe44WhdPxTnRTVNEzGZwPkh",
  "key35": "3eR8zFq9UGCHsabJoE16VDqieFAxHUMNiZEZfbinJu8i5N4AqJo2Gg4MayAgAuegNy5aPurmWshkgfCbc1XkSKqM",
  "key36": "aVEkVJLrXhHiWQ3X1tQkqRYzqby9tRiaZCSuv4Ln7RWXCSwcC5ndoRBeMZCCpGbpprHEDNdRBUQ5n1tQHHyGmA1",
  "key37": "2ReRgGDv516GZ7UYKPy7Gpz1mtJV4E2fjzsKerkgVnT1mreVT7dQSqPhxFm5V5uFy16sMrH5nmK3sgp2woirzqdb",
  "key38": "3qnvP8DEwTaxncKFvFsWkegUWYKtM4VewDGUCYm4pNoVgZi3wbdj8JsmfLyWyJfY88L2MPzchkJetEp5Qxh7g7ix",
  "key39": "4bufTSc9ei7pwyK6gk3iqZxhdQp1ZpeKtvgT4Mk6KC1rVXtQrqdw3xonqXQG5FRY3xThWkLinNSkKt6cFyRVQopt",
  "key40": "5sr1z4hsHsex3YSm7xXM6Q54bkkX3Yup49jiGf1Pv2eJwEzzyuyeqWPwvpc9EMuQVqdYCYTxNRABbW6fYSPiZ5Jx",
  "key41": "2NxSCNJ4RwvJTFTAhZfr6v1DvhuqenpXLBq8u3XLVHoP987Tf19DCGJN3jmKGMU5raZQG3EY63r689psBfmhLWF7",
  "key42": "2RAv4scivyomLhiGZhinmExv95CHsnzB5zZw8tFLTC4WqMzQnF7vux95UPHd2Vuq3viiSKg6ggVmehjnmbNafRi7",
  "key43": "4JaCACvdZBhFTsVCzbypfMGUuHxQy2nH1veyXLZnAHQjTc3QwjyEUvCF498kHVsjBwRao9W5bp952gKbixYUcHST",
  "key44": "2ZvSpgiCoDt844TZYW6mBUC7wK3obrZgvmLkcPueQ9ffXdbFZFTfjAqNCHZVSwtxWoNaohLWj5CQjcruY8Y8pgPj",
  "key45": "67dG9Und6FjVCHqMKjWnMptGLrPykqtpTz7VSumWJMDaPqrpnUzWuZ8Zt4PgJQDghCXuGSyeN7m233qyoxsA2eu5",
  "key46": "3v5aZcbG8fNdKxZBRDaCoB9xYqeqE1ywSHHDNQfjLQzQnA5BAFsYh83wP7Z7EU9KH681ftPHURRAdeQa5FkiJpy9",
  "key47": "5EYWCnYjWZKuFr86rrqC5462WmkWTyjAHb7hKox8JrVfgRbVN6om3tYbn1AAXqnFLzVrM7cWoCBeXJs2QEPXarFD",
  "key48": "2nHnWRBmU4SXaT6jCrJfp6Gh8ZDDUV9FmGMW6ZkdXYkg4CJBHFgreFAooZPyg2ZqMf7vngfV1PNtoivQsCob53D7",
  "key49": "2uoXsYRk5iPmSfTMgk1EwWeihLWdzxta6B7nwYwerfixUSKonMrJw8iFvxWfbF7bDB3Wuk5d2T7Jur2tdGiPVeva"
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
