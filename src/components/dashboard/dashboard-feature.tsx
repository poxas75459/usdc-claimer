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
    "22ofGrNRHM3oM5Wu4iHHxwRgXchfjadzYxZ7Q5ZqAprZ94Th6UZ3zULmRXgZ5jCzNfvsbzrxtP79CPT41JSLePvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVCb8d3XHbWWtKC8YnYY3UN8V3v2YnRKeapq7vkMuRvjKkiathjHBT97coaB9aEU3kCaqPKEP3gAaQCfHG5fDTX",
  "key1": "5xdxe6KoatpTvDmJ5dZST9Y6WqQApvdPedw26jRA3fEuZgAx6epCYV49ZSnCvjsewuifnpgt444qCc7cfipzdrvw",
  "key2": "jQnFSMoeCPHxf3vKcQpG3GeDXVt36a1nQQnGtxpdnYDDDeAbDDgucEat4LSB8Pgx3kRam1szBzowxE7PBTkHLK9",
  "key3": "BnogfKw31wLWoSbU8W9CJpK6ys8NDyfVhjbvwDQ79Xy2nCjpe5CKAxQGYPoVJBQxvv17Kq8qUTpbMN7VVJYJSKK",
  "key4": "5NQFGUcFWinYRWW5sS6MePjg1g1JbpjjZyanBjQsmgtyM9fDCGenwqSKwvTURp9yqxafmzWiAb8VuUpscZRkZSnT",
  "key5": "3jC2rgUF8n1xtf58BBukpW4Sgr9NE2JuiCLiVZSLSpqMaBk7ebvMw24U7Cfn3PtsVU7qSnAX6WG1v5QjQ2k5ugyd",
  "key6": "3RDKVvj6YrdyXvTbppXotfViqfwS36FGNeH5K2NNwBV3kSQDk72obye66fkq7oCzUmz484B8CEgsnHSSifyPpGas",
  "key7": "2BZrUQTdKgsx8wg7xs7ZSJPjNpbKtz456xfH4NkSD2zo53zWbQ1R1EnJBckWbXK9B5kAZZXGaEZxfPhrBdbqYZZ5",
  "key8": "622P2WiJq4cAPeMaJUNK98Fud9NieCbYMtmH3yHrqM6Hhdh35XbePA7NWzgre3fNE8sTKnz87gLbPD26nwX5xFAH",
  "key9": "5jypRPhGuzpL93g2Becfb25wRFh3MLhFEGfniQ6S1H72ujpBEqxrnrrMvy3FKs5882gnAJ8BXNGxcosoG6wmcZr7",
  "key10": "47o7GnV3ddWPthj5B66DABBkQTmCwQvjAhP7oFFjLbNavrgg1xoX2br6znFVW3k3LTyEcSbPMU3jnwK8nPhUBGa9",
  "key11": "5MP4aa5vRkwiXXzzCneuCMLFhVQsHRyftHUCh78xQfBEufabezQgjBWzbhWghGSMvNst4y7jCDyszSALkJYB5mro",
  "key12": "2LjyM6t2Fdbt3mixQF8orzxZn9TGv3HiU2Qo8fcnRSDLVECBq6M1mypwVrHb4zhTnx5VMFzR3gPrYRuCqiqaejmY",
  "key13": "3yurkBp7DXf6LeQmJwhHA1uGh94BCX6y26NhYWqRTG5k5dQUAmzGRxvoJEWE6sdJmmShvF4UZQMCd8LHG81CmJzG",
  "key14": "4HYLejyZsMSVjqxk2AzuFTJ9YwM53NacB9xsHkiGp4fFuHxQsVLmap3LqU1a9QupdDwtcbLZM9moXL5p6hiHntvm",
  "key15": "43yCR7FrgDeERUUWmGBXPY8VPNRnBTjNv7ei3YNxA5RjqAVpiDZ2crtFXCvv6pUpRhzesAyx2Ldrn7uxeayK17t4",
  "key16": "3CwqaAs2vdfMEHdUBeejxJkWzmqdf3iB5w2i6eSxRTbpZRjhQZwZC8GhYkmyFGBYdBX7VGg475sKs1ExQiUvz1uW",
  "key17": "42RnNfkWq87ZQ1FZEUKyjqecmj6oJDMUv5RFy8cT6txCpxiiTiCPAXkxT2nxrW5C7x4xLE9hkGcVNpb25QiHhK6j",
  "key18": "5Rsn38KCF2Pwg2Bc12fc13P9G2F5W3ss8vQxKH1Df7w42cNxsNjZcRYV8QqPsbG2FzfC96H2ZReRguqKuXWqthLc",
  "key19": "y1u9yPBRTF44CxbEgzqGJZrBs9t4sKaQ8uYT4X2k5WiuP9zJHbeaEd4nqZQrHtfAqCBWwLMBeAr9FwzEEJGnr7d",
  "key20": "5PqJbDJnvB3KN3bKEk8NMVEkRA4og7QusCNByJ5jKPHabeQ1X26URued6WF8Vs38YyQMKtGgHK2WUaFfJ5bXiabQ",
  "key21": "7ZcW7kgRER5ojqSQXWhCkcLeUdFCptwiYKUcpZVA6HteZHumUDrpNhEwkroLGLwreVsUW2341XDZZ6u8pKsNkj9",
  "key22": "5DHgWLXffwWzRGTTw69eYVhhPGTStCJ4iatoc3eBDHNDpZjBkgvjb2iDHtTygmm29z1kMUV5ezJzZrhX3mWvoD3n",
  "key23": "3yjcVm8yYYcN55jFr17Aq6TEbjBnJm7JjcW1hFCsBmzYB5Cw3ZYBB2LM4Eixryuxn7Cy1DBg1SN7UHrLsi1fwNUM",
  "key24": "53pNez3iBaxfZQH3gQvGfsFWwSkKS6rXjofkqN2VMEiH7Ft83WitahNv1UNoNmfvb8nMhZE1oQA21t6DDNQMHXzs",
  "key25": "3whQtzMg27D2MNPSg2sRCqKRevTGqAWc97jVLwt6EUebNhtaCqQmiSjtuNZJQrhU84v2wy2SKWhprJBEG3mKe4Td",
  "key26": "4DGuVmaeNKq74r9WUL6rvtfpEVYpRwc3kscv3hrtdyJiZNoWB7s6nEgD1aUvPRHEynDB3d1zurmEdjSV6sjdW7Ru",
  "key27": "5zq7qeHzBG6k5TgZn21yParJTeEaZPSg8GrZYMcrvCaFGLat3o6ehG6TCa9BGdt4iaTPMxeHARqLXdsAcyRSNLDC",
  "key28": "7s3yqiq6XZDJJKF2ePyNeb82ZrHgs91fT1GQyYvgX1nCF1utxTtjsJsVx2qrbYLt6JPoo6QYnh6wgrGHKry2N2K",
  "key29": "2DZoQ3iPgviyuEjzGcMdM2zVYHPj5KdzQ1QEFEcjakvWgPEULbDEcpz72U4FSr4KvT21Vch8XWS51W17oxUgX4Zi",
  "key30": "EUtuQiZ2u9Gx7gr1pdNEbqvUwKv7CMzz94PHCGCfEMMUQhwDzFCETWVxDn8af6Fe72EDMav6gaXhj7vvUj677WC",
  "key31": "KAjXLpdFvJEo6Nc2eEXC6UWcu8hGGSZv7NXvDF4tx5qqCZgkvoXupyU5aRVUcksZAjiGbqo2SLqWSiH5wALYdg7",
  "key32": "3tfquNF8v8hefMgcyowq9aFBHhp3unHprbqgutPw2SLrA3friRKQfF52ZasYAujNikBRbFBbzv1qsFHA7n371ETh",
  "key33": "2UVfYRiVjt4HX2u2AgrtCBddgbjPrUN4Sa3mHQg7HPsoLXBqUpKu4TKbcHP5YAi96HGFwbQ2z3g1qfmhBJcJ6rwL",
  "key34": "4yuiyQPmYMbhKsoFsqW2QyvFf5v6TYvJUktURpQjw2cAidd1jnW8J7RDe4B73Em2kuBGUApJaFy1Np4sfBZcrcNT",
  "key35": "5QtegN3TSN2zZqfhtkBgoSbHJuqGk1Yf6fZAHV5sDAxi6QjfJeLSBZox5eqmWd4uQnALZjFTkPWaZGPFfwPrbjtH",
  "key36": "3ktbD8Ju8N9r2ymhqpdBBLSpYH1AEaXZAhPKZbKsevsW2Yy1Pkz2S5364DnmARxp9JtGv8E6L55gh39UYjSTdJYQ",
  "key37": "3v1bp6R91vawoC66qgfTqu6vddXiBbm9XbXW7y655kxoXAvhzW8i43fE4zjgevT2w7tZbp7NWcEMhEzZTwAwDEdr",
  "key38": "4kw3e9skqrSRMvJpAZfd8bp5wJrPevYfQj4cJ6BKmqnb8HFvv38CM6a6x5qCpAUd2fmoivDNAN9aZQ463FK7y8mt",
  "key39": "59DJnERRFwj7P9yPV1v8Q26n5wafgBuEYf5CBqJBvgujZAhDQdY6fX6KhDpjQHAcbq88n5iSwEzWBQpe7XKupctS",
  "key40": "4hzd69q9Kk2dVrRyefxaubCpddmNeRS5DVV6rxhb7pSYPYGoPUHb49c4gQ3Wy9ym3uZdTEJtPLqrByRjoiXeFMx7"
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
