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
    "63oa58f6rSqpXuBfLWxAHuvjBL4q8TidcqVud1eEYLtFYcuC1YFzzByfTg5UUSU6iqFgr8VzE9uK7PVVBYWsDYYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mHcHbQfEVs8Td2Pu8JCN7uBJpvrZwuNjHTYMmyQfRWngN73UkQfiJ8zrDFh78ynKp3bWbweRdJBZFa7tDRT1m5",
  "key1": "5VWPUuEQ3J13MuES9tuzf4b7RMDfnMQHhU8dS3muhYL4QemXqs7e6jM1ZjkpdKW9LV7LbZ369uopJa2KwBjzeiSK",
  "key2": "61dXKh5YqrrEeYCUpR7uvePJGnihp7vzwRsNE74RDNwwG3bRfEqmZuwnB2Lo4uUTrPHnYALD6jqpoQG5oALk1Kx6",
  "key3": "95iVyM2E4nZ8xKEQcHwSNPFYo2khJh8naSLdvV8MpGXMjimiqroFUYS5HBvzpJjDwGibtzVGLETvK6rCavUmFBi",
  "key4": "3MUrRVUxSn4EM9mi5PiPFa1bxrsSA2qZgYf7pyBL3tGSbE2Tbt7fVqV74mWHeUAezF9JAA5yPMVuwb8AabjLA5KU",
  "key5": "32TGFpSaAUwvbrZ9n3xAd9DH4FqnxziZSEk2rDMV6Ls5pmBjmiY6AvBDZGw3xu4xSbEzn1JinpSkBMi5JdqTgRFv",
  "key6": "63wukYpjtDnbytpXTBFfxnJLs9Y2AMGca4WuPFyxykSjEfSt5k8LZoqevKtAP2VQFU6RpwkeV8JH1TjNdKYpBERj",
  "key7": "4eiMMXrU7xndcFShpfp8nYYg7LrBty8QSnfqhySYuRu7schQEmjMVJjmJGtb48q5wTTkzmgtiBTcqe6QMqNAsYk3",
  "key8": "2mB8jbdhoVkeQVVHYFBwQrGopMwpy1fJ54GkTxirW2Uo9SiCEkZKUn3L7tNhwN3XmHJcaYEaUpnFk1387ZaoMf1Y",
  "key9": "57v3R4LWxe75CVpTqeN82PBQAdWVzvuEWpxzpNGUnjyEQYB3RmkR57hSMyozQ6JWdQvEityFVGTLxvqyFoEjFgDv",
  "key10": "Uo8WBrSnDjd7UiYtgc1Zcp71ccCmXdyEUYRfRWJxbDBaeucAFYMhrRpKS4DP4wxvMhG47zCxffBVpMyWzQSbhQU",
  "key11": "5VErnefD1V3z4DyRV8KeTJFRJU4ydQdVtyWAz7USYM6QDxb48rhGLD39nWujiQK8y62ChNaafFWJvBAvFsWdpMt5",
  "key12": "5Tm1zZ3vd3iiyHsPx9tim2UwxoNVhjtigArr7PjM5nnpWfJ8W1yC8RKJ5GBk2JV9H4tWfzWBZLARK6k369eqwvrF",
  "key13": "3XkYH2GNW4tqLZbAp3E9DPhphsiR7xue8byvUDj6HmLqKN69n3eRHRqREb9sgkxJMFCHJmAnqEgwDJagCFNYZq86",
  "key14": "2nmKGLmPZQWMGTjaHpy5uKDT8KXfTigoyL4Ex8tV3oJGY8eTwyKoF47v8xyqfmMGjVjT3zDX4pHVWrg37CUsg1dP",
  "key15": "42y3cak2ZnTTABx5arZ1WEQ3PwD7fpvKymJjNAHjeS27cUwmJvzaDkeU9EzjTvcy8ioc1x1JokmZoh73kYgVNdBx",
  "key16": "3qXstMocB7nRdtVmRqsRYJgsGkEArLZUPntcszKVaHaTWU23AXA96rkgvMnSgFrYuao99XXDEMjaoJLL4qCsVq7z",
  "key17": "2jri4xwuNcg7yp7tv8i7WAqnxgxNC3MY3yv7NxxUYcTaZNuWxc3eMMD48qpTCoBH98tsBTJvKnxofaQsVvdjqju",
  "key18": "4tjJBkArh3VvhF21ZN7Uw6MHmTu2TaqqDH5WGNyYQfB5AXz9rT2HnFipGSHwJbWhTMzqHPWkBL92bCCksoA4dgms",
  "key19": "3hZNCMYcCW8Knp5cRFUp2njah3XMdHn5XujoJonQ6soyccoyqUadZEvshWGCD3TPkSHFT6hAZyEzFboDYreWtzDK",
  "key20": "5N3frWMz2mAvcs5TFGbmLgcLDmcedyN4D24T9Sr2GwpwQDx73LKtk4sfxj7uqqvedhoj83Bizy87MzYEieHXse9w",
  "key21": "2u1wn3iuxMd7gsM2Et89m9Eb3jg4DyHTzkmLNZZAPYTyDDDprwnyD4Cmp5dE4JYsGhwsYpBA6w3HwszswJNEAS7s",
  "key22": "5jmUWNLSpeA8qAnR6CaFj47E4ZDE34KivEUeVmyJtwpdZ54SSwJvUg2ayvdatQwkntx7vwhLRKoSChDx7Soz6GPr",
  "key23": "zHSUMs4JzU5zUJ1KjMg57rMnqHEtqbPhsDBKGKu9uKRdmAPfCroQxqnaxg3oYS98mwzJsLDgDBc6QPC8qCEetDh",
  "key24": "5e4iTSoYRQ9HdGHdVZoLoAWwcSVh5nABASrJ8XaKCEzwfsubzc2NtzFboD3ApLoipYZAmspCicfQ8HsKmc3C64mR",
  "key25": "Wya34X8SAUcWBbGGmCL4vC3Z9HXKg6TkppFU4AkHrWwJm99fk98DPaTXxcxBxEmCNrzjQubQR1T1WTnHsYKMmxv",
  "key26": "3AxTYueBvTzdRoE8wnvk1sHBsPDFxDpoQ4CuhEQ7iWz3ErnegUdefnkvsTjtNpnrGwuQJGLRqzbadsC9RiBVb8DE",
  "key27": "3qQ1bq4MjqqTV1AXxsTjJYNmNbQ22et8NruLUADD1aT5NTQzvsHAH6hoNwzhdhbuDiHyR4TPjY6VJfG1dFAfMQyS",
  "key28": "2w5A6DKzhaj1vhyjQjHzpJEA6oQMY9vyTU55KqqBFyJWbKKBa67zTT9xKTSRpVKhRbemAA6ZaVW3rjB22mrdCHYY",
  "key29": "5XkY3oYK1uVCVc5DDe6nkxFoUxspH1shkB6Yxr2qgDwtvwmrcdCtv79MysCc5UhLDXEc7NhgyPg6NEDHSc3X5qqt",
  "key30": "3jTawSVnZyZ75kDN69AibhiW91L6Y76ki8f6S99SSGisos4vNnGgSPqtpFWctGCGWc9SKP7cdnZRd9dBgawHgz7F",
  "key31": "5xWqfdGWKP7JcAwo857noPKirPGXGtEHDearuToZngMugVp3hnvzFdu4iVYbHV6bbY6QQNfjATCkeNJCfTfAtcQW",
  "key32": "2nSMh4mAmBUCVMgut1HT4LUV7ouj4LjdpQocLSrzu9xHL1d1yZbeYCZ1kRMkaR6MYxwQvJhUNSMRbeKwoxkPn4yo"
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
