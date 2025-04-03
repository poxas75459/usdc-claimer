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
    "2ZBi16HE9utCeWZz43HZ2oUsW6cmnVCuFZF4LD71n7dTc1koKP1ksZJs9FsnpbzoYmhrfHtshCoFjqFhmjB3kJhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3bmfMRe2tVbjA1xaXjBWz1sUKKxQuJha8M4YXzJ7DV1QFYUAhJd5n1tRX74J8if7kNuW3323URDzY5UZDt66U8",
  "key1": "4iHW7f6CBF6UYZgBbY2dX1sEvKteBCCkD69UYZLRbTETP5eGUWyzUTvWTvDyf9HNN47tVvfVbSD55Xng24bqSrAt",
  "key2": "5f6gSNhhqjB6H9cjDLXnBa4vogtQCfAgXhNVKDwz1WydzFoh6nkPjm38ni742jBDXtsnXZbkae1r3RwXCG9Hp37d",
  "key3": "4nEdeFWy448mHsmkZUUmymccN8sbub8tF2RYMy51aDNpX9UstcgaNw2KL445ucXvQB4wtcFYivuEwezk6ZB9qL9W",
  "key4": "2XFM6yuSC6uxJyuNq25FZEcA4LPSVLCtuVER8QZSTwXrb3cprhJb8wLBwr5fRHmGNKumAPfUeLADcQoY7NgAGMdk",
  "key5": "5YwJ6XXptGDDVemJY4tBdcAoDKv7csjmYSLRAd5KE66TBT1N9vYPGDDBE9nZdsja57ZiARGA8FxYZnn88byXHoYH",
  "key6": "51a4oSNDgcTrswEaRWBELpcPhRZesmwMRMR95jTcVBiYG9EXFEoNj7r4cw43cBp3koeD7f7kb7NZAL2JbE83pVkV",
  "key7": "5CWTZetVVttcneFoycRPjt7kczsNM48z2mL6urfUYmYcqVmeJq9f1drFTiM9nu1mchi6mwzcP4fpffmts3QuvfoE",
  "key8": "3bVk2QkfY3hmNXnJXjiahNiUP4gTya5iRQ6x1i9RhpW2na6WqXzFiABB9h9WGe2irvvaXGQkMAmaPmLJjrJ7xSmb",
  "key9": "3EkNBd3ao1xVS5y1XJaj9UW14N2P5V3ecgbGM5SP54nHVtfUZsq9Sc3F52j6rm5VrKrw1YAvmZpegk9JVqE77rSJ",
  "key10": "3mim7Bs5V5x8zp2bpmBjJ7tvxUH8UWrivdWv54tQCGuamj5ASQvi9LaDaTHfiPFxGs6xe22KjRr2oAZLm6Xku4Mg",
  "key11": "9Bp6wnsp1no8XBoUMYHUmQBtLU2vYKAiaZqZRirfzeF3z9rX2roThfbGuzNuciFs8UtxomEf1y46NNGnm3LcmJN",
  "key12": "2844FXvmKRv22nax9xRHigS53xoL8sawHFi9DDyprPoTcAdWXaQELNCbypqWtUD5oTVSNTFYsm6DqEuvEfvkqFAh",
  "key13": "2u8hVU1u4eNb4fSAPvcokZ22WT3QCQqXp6zShvC8qL8rbeTEJvV3oYHnYd4zZagQbqZ3UE6f3JenL7mrRxbBqhC6",
  "key14": "gjKSUewfFCAziQhTCzHFjf8jKJv3W25UEbzUyskoS4EhFFX2Z7H1895rnxPbvkSaazjGfy15z7ZGM4NR4NibkbV",
  "key15": "2Hsj8wUFtSHxwLBqcP3899WhgNUcs7smsd4uHRfnU2pTPPszoGVUNGBu1ThNJ4rrNvXEuaMLvSns44K9Y7SV6aRV",
  "key16": "3UxaweMKJNDEiHgeki3tJUzqpmvvatAMYC6C1PYKdKDS6rTdyRQfaB2PDYSZMtSXJhJ6XWbLgGRYUi8SzSS7NjTA",
  "key17": "3gw2RheYV3Fpkgsh7SWzoVrmeEHZwLE4N2tUTtaKJSXzHDY4C5YNBiXVW6dbs1Tent7CkAkCLTPyh3h3Di53vEGk",
  "key18": "27sDXzT6vsr1qPCfJDNjsEcbYweRMYfY4isLWv3wLXF5DhjwwgXz8NnjfiCCYAGK1XGdQmDC3ycRA9obB37FU7QE",
  "key19": "4bZau3Thmf9joU8cWARpDhFt4eEW6bJ5AVyB5orDxMqFt9yjwYcPvyjLBxsKRWPmBbDRAFmjbqTH1qdnXi27JvUa",
  "key20": "2ZKB6Zs1z9BJT5RBQTsS1RcKkeAHcfZkGty9bnfjgXfXhhmvfsWVDYk3GMpNafPhcHNj9FQQrMxQVECJtGSM1AkA",
  "key21": "4URJJwHvdkC66EbN4UfLRdwdbpuTwgfDeA5EETRNncym9QKrRqR8X6BZZyL9ZJdHMydiAmDWDutMfG5PmFCEHQS1",
  "key22": "5tCyMxXFv4uNpDk3J22GQXiHbomLDgTZA6288u4s8DyWd6YNydwLeCvUu7nLyxLn3ZtBQTXJLG6dgbu2SjgHeegt",
  "key23": "2vix7wx6qFBa5yBEG2J1vYvebAWk4DGC1guNu7K9tneQ4qaAU38QYDbT7zjrryKC8SSZBSdEDNVprNf6bxv1GLfm",
  "key24": "29SYmyJNptFTRcHyeJYtMdEgTfZdYXBmPJS4PetCLaAJU8XyL4TpLKoHbLgXcJmKSYkyxbqtV2abc8Pob2spxB8v",
  "key25": "5kBPo4Pf1qQ8Q9DwxRm9SozbotheGpbnNSZbCGxD2pkygEWTMdnrmtWyRRtaLjGYzkEDW3J3WPczMQW2vW1hTQcd",
  "key26": "4Krpq5ExqhpSgxpBCbZKDtz2Vy17WMgDNMeYrTUyNXjYi7fnVjxREweLHSJJ8yU2oxWyxQ67ieDNgpCSHcbf7TNQ",
  "key27": "5mKBBj2WvMVTR2qk5PcirruVERM9y2mXE12GodmJ33VyJHsCzM3WHZPTiczCEowFsrtdiTaEYvWP74FMN7rZuw2i",
  "key28": "5VkMDB3t9gyy1nkmrQutT3M9jrENpgnSboDNabYs3AdMyJvjKAH1GrMBU2jhNurz4QFDQna75CxJVFyeTk58ehEv",
  "key29": "3j5rKJkBhPEhkqbpHndsP5y1qpKEniojoeE6Zjpjzoj5mgRovSkSemUh2mfEBidopMzVwdqAyffcW8DcKncVqqof",
  "key30": "ZYNMvr3nKtSKq2JtaZ9MsSgH6jxPDqSLhZMiPqDz6PjqxwpXPNBVRvTJBRu6sLMcoQEzsMiU66CsUV8dGUGpKm5",
  "key31": "uhA8v1oep96phckFrnCY936Npu6pp1RMbieTeVoyazAffB35f2wJnpRgHG8Vv6LVbyuXF32Cp8pCQKGMFBYrtFL",
  "key32": "66Ev5ck7VuxT5yqKdHodFpc114GskeuaPAimFpHXZmeWeSCvVTidXfufVsj6waLPwjk9vn7diN1MsdUBDdLp1SVL",
  "key33": "5cf4bq8ab4yjZVSBLkaRjkQrXJoFodTqTxdjH46UYebC4ZZH69TKH4QFotdg4GgiMawyKEUZNdgnFWnLMo12dxxA",
  "key34": "5WAkQs2b1bwMLmh7ZhpDe8yA67A4ttaBDahd9fTypwCix9XFLFChGPNxzWJLxbnqJaYfrDJYfnUZk4MRx9z4CYUq",
  "key35": "31f5uP8oVkfy8poEyQPCoqVUsqAXsPNdrEPGKdGnWuMrRDv9b1aCuzRSJ9SdjmyfezCRdkdJrUgzr6v2o7o5yEaq",
  "key36": "5a4zadzpd9mUy6ybK1WLhUsxMMJv5wbP9duwzc9H3ysowpQX1gkwU9Pi2cSGPbWiWBmxTW3SWNFTQpQvrzEgMTV2",
  "key37": "58wrmhJ1BnLeyePhWqBmyWpAkgKfuUNMqSAPsVWxivRYmLsQ2qtRGhfKSu7hXs3XRM3K59NwWTvTsA2ByarMnDN"
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
