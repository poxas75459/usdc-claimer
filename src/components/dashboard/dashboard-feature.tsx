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
    "5iK1ZWZiiZx2s3nmwKmozM6Dx8NgS2m8TMhmwW1NZs9VhBE2avLy1PDEUs7Sr9HCN2dQ3qrPvizgfkhLhZ2k5TBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qyLDdYM35rwStPfPM9Qu9c6ZgS7FAPjKNoqSjNFtjA8bG7AmjxJoYYFKMWotk3JjjNks35vf9mcn3moiPTghwbm",
  "key1": "3sKLoJtDWHkFPvHLXWvstEWc81GytgW12mySzZDRzxQw9C9NpqTzjDRTztnCwx7EnhC5zvevT1DtnhBMR9g8HmS5",
  "key2": "61ZCWHfEpB5nQCaK2E2q22FJPJ3CYVQ9AXCigFUkkXL45SMdZYWSUwMud3b23FDBKsboddmZHwAoRkM2A9ztSzyu",
  "key3": "KbMmzn8iQnAyeRvDzGfszwkH5DyQxSmaGc4hvze1FpCSnHDiYUJyXJULGd6z5mCcd4xYLwxpPiFCy38vqppLDbS",
  "key4": "bogyiT2EumcmDaJAHKnxr2YYm9JFMT3aC6K7DK8KQ9q4mcrj7R2H8NwSyjg147V5SYSu8Q2fVtWVf31BQPVtKXF",
  "key5": "2oLqr8xamqpYYhpecHnowZTpqkyhLNV4c4mT9TGFzmVAyUQUz73TeBAnpYkEA8THPLo2J6hzjVMQeRJvzYZFriZn",
  "key6": "4B5P7aW8tRXKzM3XsiS41bBVZoKYCVsshz877UejaBKiRmrsEZzffkvQkqVrymcnR3bnYbLqkqNVedLvQLxV3Ar3",
  "key7": "3X1nuP5cud9U77ie6iStqo38oznHrkBhRTH14RQupK6j7xCf8DENtLSeT3KzofqdmSLAUC7ap2XQtZEk73fhE192",
  "key8": "4zdyoXKr7iFHvYn2F1oSmGvWWwxZgwP47mh9jPWP8SWW9kdAi6UPQntZuEWwetDUwHL1f6aWoHWAEVQRT18mMpjx",
  "key9": "4YMrnyftVzHLy1ofNszsVXrWUVxsLbVHCdu4zch7eTiuKBBhd6RZiomvz9MdvBrQuvEDA5ZB9DUedDFmBF4azisv",
  "key10": "2YqSPBhYKnErNnFAJ8xFA95u3HWYQZsHAnujeVNL7mew6Bi2ZLUkPXWr6bu3PYHjmx5itUepprt8fAdmDDbiZ7fH",
  "key11": "2nqDCie2n1AgBZj9jLyDikghMY6qYn4TvUt2GnAUGSbyyUTTngET3NHUkciohaLzsdq2M9MHMUpzgRBnuB8UmcGg",
  "key12": "2wfsv9LrnfVwqMovhfbYA7JqTefuh4DvuFU5WjwouEaybmW43jKoiaeasnfEu6NnshMrtYmpj4KQdHvDPqiqv8mn",
  "key13": "2PNFLLfQqXAeeVoE3ene56tEg5V68vSVujoYUWgiATne7fnHXMfTsTci4qDf8etn91QS1b8i5iQSeQGaarjbfcHu",
  "key14": "2UFWckRTKmCLKk3VKitpTymALZ38CdHCChBGQCiBPAXQWgnrvkDzPLUTsseVsEPLiCkUAqyLjzEeBTDNJGaGGT5A",
  "key15": "47wzkxsR9cQA6VdoQ5RwyrSpQjFt4ogTpequE157sroqEb6x6xPE7o38oqxQEPUiDnuYasW5hrdJoamu3FrSV6f4",
  "key16": "35GUiZfHUVksuTJTc9spRh3JybF4NFMLAgueBxsHrCsAUXq2V7CYfGNaZYwR4ABrqnc6wwFjX2Def3aVEpiJMG9s",
  "key17": "2CPwUNEqAY5L6Hcs9YAvj844FMfuPs9DFVetH5icFdN3Y7jDMRfAVXZNqtT9P3qsKnRkWocUBKtFAYDr2XzGdzsa",
  "key18": "42paDuJ3SvNJ957rebH7BY7c1Vh5TMmDrwRX1XJ8dzXQcfFv6oQzY8QpLZaq35mhE9p8wa8ezuZm9XakgRcpHG5f",
  "key19": "ZRSXz35gej38iMTKRqvgMTKM25dyLSRigdAnL7mz8R2BomhW4sZnmKrzsvNoBi3FCYnChwXsDHnJXMU66wbY6Cx",
  "key20": "nuxPURakks12FLVhNQWNS4hnwHCN2QbeNZcckKtsiWUKj1DCidinA5LttoQj3ZBjpuPvAYBm44XbGn9qh7xjj7q",
  "key21": "37XKbk1iyv3MQCrzqfP9gwr3bNBwoB34yzedizRt9wr4RarGVbRYMGieieVddhLqCj1ZRJFW8kXicGQ9pC6Gr7WD",
  "key22": "AsAXvuLmCWY22dHiJDaM2xQnot33e5jRQBP137bL9XMDBhz5s4KjT3oxC4R1dLC9f4rzMDVWtFeQRx7pdNwvpVq",
  "key23": "4sV4hjiZrSgg55Day6oEnFVNDgjuYPaMDtE3Mv1aQJfyfmGkBQQd7fzdY6et4kFfs3oc2WyFXsYGQTvxyQB5Ptf6",
  "key24": "4uuwUfYptRx1gRSAFx27n7ZiYVYeMzAFDNTgXm2QMrpnBHu19MGaaTHDWcbaf8D6h4U4g8CHB5fXGK2NQ2iXxToc",
  "key25": "4Zbhykjb5RQsEStMx9w2VzQgeYVcz6ghUJKJNihhPt9yBcGjEyN4s8KYgy2VAhzXRc5GA8hqM5WvxqhCDNLTD3c9",
  "key26": "2s74My6wbHeNFcAo64UMgL3pWJfokVJwNozULYLhtwa88amdzVxhvpzNSbTsGzXJDXVMYY7UU1cN78SwdtTkNgpE",
  "key27": "ZWKJYN7pjbJgaPyM44ZLqpznxysiyjhNqSxwoKTdjDmovMH24Bu1fAJxMtv9NwypnZ7DGs1g1yoH36TuCPrPzam",
  "key28": "2SyYqDTVyppTyhpqVp8Niype7yFsaTcCkdx441WX2xrb854CvHTVZf1GAAJzRS5M32BNH233PjTUXFZ66zv3Es6f",
  "key29": "5Fvwbud2MMunb1HjhWsoxy8Ee2AL74U1vJZyLwxBLhzRbpAY88cSktA5YEWuRbSZHdBnxpoBHGhvCEmLLG6wQKJE",
  "key30": "5yCBA5goeyf1dWzsjRkv5Bz8GEQp1RehRqZLLbkjvDpdQDTrRx7XAQqUN8ND4reW5Wu6QMD6RcHfKFLPUQpZWhyH",
  "key31": "3L5V3BbhcvPooXG7uBEQ92dhHr45UgThnXrsM6fZ8eNBRAPAWzD9Yqs5UNK2MB2xxFdXKihXA8aFs31FETeFkf6Z",
  "key32": "3TNxFPwZ7KwrQAuDDBnmtzZiEVEmxHJfuPnnG6Az19UrCBd6YFWxEZxn9isJtFHdZNvoGo1kJk89xV13FNCBN5ct",
  "key33": "2eCSr7PzStGQyoP6m1fpXNwLCDx6UTPbPG39Djng1gtMjSCZV5CGoHMxTDhhR5cBPBNKQ3UdvAQ5rLmyoN12NzRd",
  "key34": "64LwzQQFQSQGEk76w3ia3PxFviqmAnPsB25k4ifUhGpPzFa3AEpTZSRvZPcPKwcjgLDMfP7dKHX6Ku4XQEygUasR",
  "key35": "2dh2sogyyjPjjNGaFjKshorNAhASiqHeXeV2ssLVpRbXB8duGbXHJCq1ykPar7PoFpG67Y1wcap99rnnUbAsLrYr",
  "key36": "M25LMcELS5mjkXcvcpK4jVudr3rME9tNKchfhZLLiXaLSSXuNUAaZm4j8H63teg88c4pF737PSx3a4TkpZiSRKM",
  "key37": "2a4gFLj6R9LgDeHgm3bUiGi4TSFP5q98xmfGUjFCgdkMM1brwspzCJ3rbwZGKCGDKCPXYjzNQ9ZAiYfhokBxN15D",
  "key38": "5W78S4CsmPbYvZqBZX4wzTeUNCvD4e1xoHwoT1BmnfqXovYyW7tmY1LJ9ecyqXVGXb4uSS2Za6ahEJN2asgFmt1Q",
  "key39": "2ivnbwdHPakndyCdgZXaQg8VhsR8FeLRQ7NLhMqqKfax7GFGChggPyEDMLG87tW1oZeR9gd8Ht7WPfPAWz6Yo38W",
  "key40": "5yGYTNzfk3QUQi7A4QmFetwzYK9Ugktu5VACgk4WhxuLQ5icCxdr6TonK15Lp7E6xmBM3KR2y2mkBp2h1xVqSQ6T",
  "key41": "2SxoTkpW2b1cfLVivqkgWNcBCwep8NucLe5MjJ1FtLddroPdepj7rTYnwjyZF7ZHhxhmxqtcNbrazJnP3GSYdAYf",
  "key42": "2FCNo5Qa9vKoBT7uBaBHxj7rhzNmpr1fdmN5c3utwhUF486M7pR9sdgpqqWsy1N1GwrXGNDNQr3mibv8mvExEuuT"
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
