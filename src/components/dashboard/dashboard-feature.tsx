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
    "vS1ULxvMaQfPta8PdvtWABymELygXzqfoktM89p9DL8DrNwqAz1cxmBuEfvtD9uaLT6N7ZLAg1myxUKEw8gZJzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mS8t5rATh4uSTzim8iaKd55k9NX5raNbYKyJcCTxm4DDiXAh5fbsNU1CyPRnSSzyLNyFyVgEPPEUoLMp9LBWQfa",
  "key1": "5qstTXoMBkkonpmHo4yJnjUt28baiBPvAZSjmwi1FJAcMKt5BN46Y5z4A3U9VFU3EzaYhPWid2T8RxZM9LWgy6fn",
  "key2": "2vaHDg4UxzN7pK8hHLJCt7sikpaKZnHxD8pNwCqBQXMgUqHqtLAR6f6gWQnKSymAVEDzsVCHMzBjw4TNezrLAR63",
  "key3": "9DwX4i8VFaBfTpyq1nJFMLYwi68ZtGgrhsHeB2eey5y68i1BrKiYXhsFa1d2SKawizR1EMQr8PV9nGesFB1HXn3",
  "key4": "4chRN7c3smaZdCkuLqmbCXdcbmTDw8RgmiBcEwrxV6MH2bCFUnMFMjb7v86pREnGVaovTFEhpkaHYwNnYoXFgE63",
  "key5": "3uXnBtzFafBC4zn3ep575V9fxXmzECWjoyYoseuFEQoAcgxJqM6pUbF8QUymQYycEtognAajhKa9uSb1KNiDVMBA",
  "key6": "QdLKfYUcFqPLrQL83ryPS7JovUUwwfB8LofBDP4Fvs7aR3sN8Ub3uTD8qwCyGxwtQdR9hMiTgMBYR2NzwikQPV1",
  "key7": "5yr268LGuztnuA1LfYFWQXPPNkiWdnMfH3kwa71aMhRvxKYgwJ4r6shSHCRuRBGFRrrMScYs7vNCuZUcRq7Z6iX9",
  "key8": "53EAmC81WcZVBvgsMKVG1MquJJHvDiHx6MzGaq7CDgR9hzJP5TPSyZMKP8mgjtXvhkbdd6hagSKgbnE5DitZb8nn",
  "key9": "2LiYnNn6NNhdZTYa2jKeZXK1MM2WxZwQCQy2eKTki2zYtfQhkfdwXButMzdwt9v6LnxarkATmiUECYbiP1v7SfT8",
  "key10": "5prvzXjAhxgRg7nuQyicDACL2LgpAiVrzzTpe6X9UkxBypi5sFDbRbW3MFa7B9EPv3ZZEWFNKqfukS4AiNW9Ke9Y",
  "key11": "3wp9LzuzvPHUbcEs1iVCbZWDkxdA8FYEehCTwLHac6GF6dTHvxd4DyznBbWsUDrmW3rg28k4ehkXHN4hYvcHdp2Y",
  "key12": "8fTWd1qtUZB7VyxVuUfgNfwkhzv4J4Qnjt9BfsMCd3fwf2E979H67QSuiY2mRuJvKgPzD2fKScqhcbfVWMHkNtz",
  "key13": "B18gRPeT3McwC7gHv5cTk4pGnvmBvBvBKkhSEik3kBgnhH5u9tP37QuGhiBDR9XQUXNRvxFWzffiaNw6gz4QLii",
  "key14": "42XNBkmuQBJfg4fowyLiAeVNZYrht4AgAZSCv8aqNY3UNqhZ7imxo3XRpdcajrURQEuirkr9X7yMbj6B57d46735",
  "key15": "5s12rwRRm6GRU1rS1rALivNaoucyemdzUi5ScUcbi14GnYNhkGMj9DdUcksE9yh4P5V9BkfeS2Z5rvhw1eQA6eC2",
  "key16": "59BU8wFQB7JnTVFB4DyNtpTXw3Zxbrz6rruZdRnApbijYdTeh1DNFtD56ZPv4jDBnzSPHwvLDL5kbTn9nQQA8hFM",
  "key17": "41iDCqGaRbUrpou1MGk8XgKm9jw2voXGHdwYH9ad7dBxr9bayyVEfrCENyaQ4rv83AKgr99ZyMpALLK2vkaiGYAQ",
  "key18": "2i3qdzoWbFD6e5sA3AdDMN7Jkm6cyvUXuFbn97gGxW5A7J3Mi6TBdEY11bWrFP8WA4SiLhCoeDTVnwKVqVND2ST7",
  "key19": "4rFQioQg2BzrD7rnyX9369jbY6aUPwGxTgnKGwXiQeN8F3p5jm1swRhJaPeJJ3ZFr8Kmq4puPffuU7kn4dbTqVMn",
  "key20": "vkoHUKzfPKbGxju3Tzqd8UMiJ7vL73D6HXqK3CieXFnBDD8Fxxjh71imY7t81ESgTrCZVZAPhDsYRgnnfExgaMc",
  "key21": "2VeomfwpdZtCBd7eEDxDpVDUiy9LaAWUnmjnQoD7Y5EaneCuX4fUu9GyWyz716qsmccVymKwzinQuojL7NM2ZAuw",
  "key22": "s9Df7uRvNzMR48bndX6goJwvy3nrFYuT5fgWmjojaeAaJLRYjm3mKsZ833NSc9Kvd2WvScVAx35s5Wn4DWFMsYP",
  "key23": "4kZUgiLjjbZ5vtFPcHRHdNkZL2gDymXSEKagFBvvUYwUE8VfZ9Pzqpnu9ATxBykUesZj23B75Y9WwbHjYfEvTcS",
  "key24": "4oqpBifGbBaxWPaBxGSjUiMGoEbqaud6e399n755wYxjp6eC8MB2jqVNHMVURHVcmobyKseVJKDdLL9MxUef7pAY",
  "key25": "66tr4tCX31afnrHmRzbtxAUsy4vmE5zcdxtBJ91Kuen4WRCpazFQfm2xy9Ag7iZLtNEm1ZpQ5GMY6SSpdKC7r4i9",
  "key26": "2pVu5Ue2TQe5NLqbe11HyhsKSZbN7MT37aPuqSzBn11hHTYejEVd2HHQ4ahcdryFxAy6c49EDTVLdcUUkCjtxgJA",
  "key27": "RseGP2CoLBAWH2QHESQPmuy2JR98LnVhkbLnxnMUL2gheJuUD8xx57tEdEMeHSyuUPbLCDEZQif3dr6ckcU5XrB",
  "key28": "2Qb3MFQb6Fi1bREkLE4rQDDVYwpS2ufiKKEAqirQnGxtS6itGVFEQWC4hvgQcziJwRs2cMypwAGvu2RRn4fyN7wA",
  "key29": "x9Y56xWdLQviABVuvwuge77hFEYjkczStdbTpA6DXNN7PWc2x6WcXtBtsFR63rTcQ4QcAoBidNGSbcva5KCfGTA",
  "key30": "4KWivs7X43VHuPfcQW31vnjtL9cop9xhsLm5furZz9t217wgdFvHdyqHoHY5CbCBX9PLyVctLJiEWAQhRWYS2nZM",
  "key31": "3eLhB3VUMdWeuGJqLQmCwby82hmbaVNm7dq21p96Z2XrfTYDgy8ctuadQ3yPAyPZd3vitRqHceNzC7o8r8RysgMA",
  "key32": "2RLoYw629FMPsARM1C4RzEtp2YhTxkHUHB1EqSd27iyiE9CdXDcfcYhRNtfPY1jqsQaYUoQ7uJg6fWFqdgHaS33k",
  "key33": "2pcZpyMs5S6kdZ77c9tifAwrEekJYCVDeL5RjMtvM7bjeHrwhUP2xK37hVKbVpPCnrHQ4jJ65VC7Yw1YAqCznuAD",
  "key34": "3qQ6UtHQLXZtVb4rApqJRoSVH85dpoVA4ds7D3G49VkkksCfif66AjsW27gM2oRUKd74eepjeEU1ETpSv8igNgLK",
  "key35": "vLggLy44azisXtGsfM1mgUHsgcth1LuEPy9b5LhaHqy3AKqyeeN2JpGamktV3Sh14xJMkk4G1xGvfZjfYtkmuwQ",
  "key36": "3DH9anHA5nXYXUhs8uWR3b32UFvau1DhmVKSd3PWkvbv3NDTRiAqQJe4cxG7cmypYgcpynpQDvXszuidGAk3kKju",
  "key37": "4crysRQXDmoZbNSe6MUEA1DYseGNA4Lq56fbzC2gBBpdfzJxaJxP6dE8sdn8bxbVpupfwzUJPWhtTjRqze2QyC8d",
  "key38": "4FqCnrbaVkyE7oFJt18SUiwTNTw81zesfB7ipmkAPM6FF63tBVi8JKWyrsRbs3PjAWodz52uijkcHvjsNWHUWUUY",
  "key39": "5JS9mx78tiZ9T9Bd9icCcfhsF5TmHL8iVwYSrphzGDuwdEwjRD3nUbUNX7NrR4SLddDA61SxFWGasickvhx1pEdd",
  "key40": "7CVJ2Yi5UwzHRwfoVKHrxCLUQ3kMqG5thDozmMYbCagyqqbW6QKHpxJtj1xesrkiVntfD3c7dQAfiiRViQ1vgrD",
  "key41": "5CX6jJ82yN2BVxe34wWEGT2gFU2bL4g95YdW3m6TrxBGDP6bQiy7oNhkZmbNTb8eaBeWP9q56SHmWd87ug79dsW"
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
