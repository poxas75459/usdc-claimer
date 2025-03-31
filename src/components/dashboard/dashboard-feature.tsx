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
    "5WcZjYpdYjG4Yqr22vHMHXFTDHtqjYgsYyV7RAHM4b7sNQ2XAE1nb1VKPsz7t5HCsfzEWxqRbd2WTm3bxtu9XwzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSSYLbkmKcY1CsaUZh2F9y9EKGyeTsGPk3YUKBQYSv562QP9pkBDvr6u1cVfv3jH45FwbtDVv5fybyFuRziVpM3",
  "key1": "VzoBaYVuteRVfnS6g1uXyDueFQDx535mqYgumrSMXnfdE2EyRuPq2S31iugze3hmUj19bjCNVfDmsc9TiSexbsN",
  "key2": "45bt4xnWUYjN2H5xUxDLXqfVuSbBTqUbEKFVTmGrQXsjhGPZbPjFbBsr1ry6jqzpUeGopCzJLDEFeKKTbLcoH1RQ",
  "key3": "43URjx8gwaEL2rKDrUHk7226DR53mt5omCbGd4zejRZqNDjc7eaYRRJkB8ZyLgqLc7vWhmjdveqxDqaqhoP17hBa",
  "key4": "3sTiXR2G985TK2K2PnjycQX1V3BHwGDQeHQRqrdPM6zNyKM119GfJax3fy8gi5QTpkwoMzNJDssHvcJqg3XxB9E",
  "key5": "4UWDiojPbMHaCh22FmkfEhDTUYu1RiLZTgunzgmEBfZkhXz6wkkNSQBpAv2gnnAFvziGb42dEXHEsHX3i3TeDKhU",
  "key6": "NjCtrUu153heFLJvsYpLrMjXcaSCxsCxsxRbsD4nrsVAXKr4qgvPAqWVDgACQXoNdv3M4jPJJJj7KZW4LgNKob3",
  "key7": "5ctarVK7N6Nun27Rdp5vPRGNoQxevkHTQbwo8mDw9YD2G4jv54KVALf8BkVNqBPBWPkW5hL2Br8aQUgo2AUnKvMK",
  "key8": "4dcqxgoEdomhadwgAYxxvfqR84SipvxKqdyvJGvfNQSn1NDkfZbfZqTDmdLpYgwVn8YoyFnnL7y6ky3VVu7kiAaR",
  "key9": "2FJQD3rWpQaWGZSfHArKMj3wHTSgNd9HcsSRyNhznYr75WQeEUSzjNyvHjxgRfvhHYRFmDoE3Swr12TWGM63KFi5",
  "key10": "3G6z6VfytkU4hpFp2JbDVTknmdF8kVEEbXVdHqyqH1GxygUZnT2zpttMR15LKP1C2KgZRH5RqZtNwrhYbSh9fNds",
  "key11": "DRYLvJnwGw2zfi9xjmA3vYx6f8iyPxJizsXHXxU24GjjconjHto1ZmhLJhTRw22ZPRo2fKhuQyBErfRgyJxRBW3",
  "key12": "PYfyUqwLPWwjvP3A7rrsALsrdeiYd1oqXu5ABRyuhRMeMMRSVqQtmm6ftQ9adeB2EJx7YNzGwaTdmM1DEFZJhFm",
  "key13": "4xvKo1w2YkAGuatuMgkiCGt2EvgKyxAgsJ47F5n5eYrB8b5QvRB9KyGZrjHP5qoNmGxVsiDqaDUfRgBBfdbXLN2U",
  "key14": "3BRwNFNLieddbGaA21JnR63B3MZBAxU2m38FP7Tifm8E2zSi9n5yMSJTdZbebW2Wa3msF6su54Nus5ym4erZVNM9",
  "key15": "3oA6ZPMXjP3HVPduv58Gne7y1NatDgsD8Bfqx9rNVVF8fmmRBLVcSR3dv9YLYaMXRrSS9D1VRe2nF8qEut4HitYV",
  "key16": "3hRsQckGkwXQoe9a96CyXS72ojFe2PEFzpBF8Wnvpx74qoLZ1DyKAKe1KzdHT5Rvcai5q3XeiS29o4UnbXvQW4hC",
  "key17": "5dxb2vt41RkBsM8EixvLmDWvBkZQ2GgizmatDKXQXRzGYVADG58b25rKawFPYU984iiwDtj6uaZHwEfRrSUMSsz9",
  "key18": "2wnDZbSQf7weeHuiAfANmdbAoUXgn9KJuixb4ABDit9QUmMBCR5HDg3d2Y6LSepAaq7gABic8p1eKEAw4MNXGEAt",
  "key19": "5NmhJDcLZDM8edQ9Bv3TYH66SQ2FJjajZ6Rekuky5znR6odPJUsEzDmtBht3xfnmpbUYxKz62db1cixH7zqpSuoG",
  "key20": "2mjauWAYJnFGD9bQ6SSW5ShA5ehreBXfV2uwRCMFTdJaYgz21KhfCJA8c4nqJQN6CLbEgo5X3ddiMMNS2DR3osYq",
  "key21": "5Q1SCGHiuafA1uUvkGS534umL48WtzfWbisGGNbTUtpNErAjFAAbnEVHo5W5zY8jmJYcTsUntjehMXDP7LLtEAR3",
  "key22": "22LuH5J5Fkbxc2A2Ktnv1hs74KTUmZLVZWFqvNvZNVdgNcKnW8a1PAQFG9haugcZU3kPMQzKruMyZTA6c9ARBTuC",
  "key23": "2dUvmxvL3D2KMEW7MzLbhb5TogHZNCruJ6WBCPHQSjKb4zFFp3bL3CyWN7S9eUoWoXuRWjfMnHnDBbrgB2UdAzP9",
  "key24": "USvVj3aec7DZJQoDCPAhRdnD9pNVAtfb1Jnq4cHar9xjCg5ndsGK2BdrFQoT5RVFUJwCqCeznU3npDu977sAHDA",
  "key25": "3ysWrFxRQebY1pPhhbAJeThcaWMySDkuHYCeg9iVhXxGvKY6P5svgZNPwQ9g4WNM7e3cC38cXzixzobcKcehGESm",
  "key26": "438RmVVdDk3XyqodTd7cFWtqJ5nNkDVcPzYzeNu7giFe6aNgVboy45M831StoWTvvYKodKL5zDSWuJZqiw7sGJuZ",
  "key27": "5sYfX5a2E75GvcxHjhYieySgyDUT63CaqdawTAwfXxJiqRPWYTgbUmS1kXYF8B4ARLcACDmtcbjMPgMzJmKmm5Wy",
  "key28": "55CVoUK5LYzdWGw5iNVEKaqzsuyha35DVNbX3AbrjBQioAg8FmPquM171Jm8miGuVaN3ntrNautXxbdsfFJUYJV2",
  "key29": "25n1CeS94k1a6f4zxmFY6Xppad559WP2psNC58ujbyfknUpG5KpA7BeqRU5Q8fFbRW6bUyqDkKRjUSHpgZemUJL6",
  "key30": "4FpPLU2rNmdDBdsmaTH3Dc7x6d9hCC4p3qjYCMRQzZVouUuCNtR3ZiPBzZZrYc5GmZnDkPjukYPo6opGLCXFVZc",
  "key31": "3Fq3dQdfmYDjwK4o6EBfNBPih8avdmi3VdcCNv7JrpwdXH4LGHn9G4VgrebeoDfm1oi3Tu224dyzCh3QY3L8XjRe",
  "key32": "4GwW89xaahemZr72PziPe3TwL7soytLZPw5XwvYwqqpAy8UidpN8Huqz3NAhYhq2f3oGaDsUKWcd5mCJcUoKyU77",
  "key33": "61KDqpFAR1aZSQToCHctghuLMqhAQbzKuVzuVXqvChzba8RLmVng75gayUuWaucf85WPuReq8wpQNk7z8kCLqayd",
  "key34": "3Fmp1muZSanMD9bsECMt97aCbo4jfh3tiqR7aWTreYoGD6rF1QGXxCNJcR7qQup7B1UUaetWS31sKaZ2UMLLLtMk",
  "key35": "54vN1uU5PC9qNu9bifCQ5H12XTuDFQPrsWXqj85cTXhtJKs8VkiQKYF4HhMnAy1wewAGSdzeiDgC3HfzqZ7ZL7Xt",
  "key36": "2TppWdaEVoUnAZ5TypF33R6GF76cj7SSA3BpLrrt7CYp54DnptgH1yKvzxooq4PHNMJxnRGC7cBbTorYoxjLCSmr",
  "key37": "4qFZTZ94jh6LvEoWFuqJeKQujAep6iXHu9LXPS6a6Hq7ba4fXAL63i5b29HPBMKZgqoB8rX8WmSWBMncALB5U5CF",
  "key38": "5gKnNEnSSGrB5nJ9g1N8Rdgr3TZZRWefyxBfkEoTiF1KrFisfejSVGbwkJezR92jwbgpmUAYhk5gtDh9o7TXgeoE",
  "key39": "54o5NDqQRTeWJk5xuzqNaxveKnD9vBQk6z9BT4oGK5R5eeh2piqDXQRtZxAxo38bNPnJ33Vh8w59zUSvKWNCEdZt",
  "key40": "4jGqngg3e27MYgJGKG7gzoBXGYhkd2nD6MSyRQqdBAq5V2td3MhgVwnG25wnM43dENBnWUGLcVedqUUoVbGD2AFK",
  "key41": "WEm6jBefstQWFD77nvDnjtCNa7K6Zr8ga9o4FjbctH6KQDkvwpD5kGB5r5dWdyW6q7nJWhbRmRXvz5eafujwPtC",
  "key42": "2J6vEEEtHnjbPRCqE2imGBb1UXYgkf19r4jNsLNLu6egudVVBTwAuKLGgtZpJ2ftcRqqLSWxNiPCs9Wa893gADCq",
  "key43": "3ZtuZuz1JAhfQEDzdp5sa54AovWP4HZQuAFzshdmgdA9BTWoKy5WfXusTJqKiDfaDuzTQh4z3bHe8PXQpVn6ZCLU"
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
