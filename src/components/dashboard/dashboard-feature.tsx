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
    "uphNmTtFwJ28F5t7jJPSvC7hkBB5D4sfQTtUPPYgyNez3dXt4WwxRP21FtSJa7pf7pS4r4GD6LTk9uM5WVeAG1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LozCQF5mxJ4nhRNiUynWMkM3tANreAQE1STvd7XJmAXFAoqPx4awPpzJuwjc8GFQ3vsQQ7Fz9dGVpD9vXPStPvr",
  "key1": "4ZnjduQu4giPYZS2za3BU8tXig45X2uyKuf8kjc9s7BEF2fB1DuxhmdfbKyBwN421rdDuFR3krBzfLKyoFAecsNe",
  "key2": "5D9Hc12EYgHFrh2cdoZHSHqkbUg2eCUD88Ef2HJDoHWDEECvbL2Q9vMv7dwxRbAd4dUdw5ySxYHFMfMhvX9pymG7",
  "key3": "226vdaB4M2WGQS5RPSktB89M9Vb2bNg2jETmmZQxsdMsh7BQQN69TTWK1TDP4wyxc3uTGQWj9obUXVhQCXyva2he",
  "key4": "2HvrzoHAMxJJSUbxBbLSoGdHpXFcQTxZ9YTjQNGWhsivyfaKTfxFJXq5b5e723KRpSSYQGbC7jCvYfiLSrNn4Yuw",
  "key5": "4V4oXvs9pn6mBvynrq5Wked4fGcPP3Mt3v6MrwGHT4gNxTxexhK64xWTu8Xki19YoLSSCFqTcw6CuF5LMJLbawET",
  "key6": "5pvjfRpFimtGLjHQGW9kwzUCibnNvF5aFrfJbpPKq1GS45Ta6PEdfp5PE1SmLCmgQuNrCu6oAJavRpcJtJtoAj6p",
  "key7": "3smQHhJEAH1msMzVgXxLLLysAU6QzKr8UJaMfgBLW9XE25MJXKPnH5AUE4jr2cZqjRBUkf5QwhKEuVVnJRNLxgaB",
  "key8": "5peGTuatbMGcWxppBb438EkWGsagxtvWZvdzM1EDKB8GjP4qewUVUX5Lavvt5mLkvKc8sbLdhK7BuBWTXx6zshNg",
  "key9": "7MvGS54zPrW7Tu68WrSN3WQezd3Wg6TeqrNxAMyFpLyEmAyQHPkZTyAmDgXiaz8es9ESWQpDjsdCV9TJTMSP76k",
  "key10": "3KXxyZxFwFSKZ4YvDSwxgqDPbskMjvGZ5Q2mZk6J4cqJTH42AJ9LVp6Y9miT3C4Kc2bY8r2SrjvcYR8437sN34bp",
  "key11": "VV5fdeBaNzSr7F1uwFvFChVjzMsTLLuyV2Aay9vtMWjNwJNM3owHUeQx1ipodp3fafqqVWU5kEyBt6VuKK932tD",
  "key12": "4b4b1dZAMGZwaDREkM94V155LCVDaR7VUjdDW1qtFbndbHFtShBXpckoBLvkrGG3DBK5j7hbhz1sg9BXrgDC3Jn2",
  "key13": "2VSsdkx8Rn5kTu7U6gD76oqLmemgu8rQB4GVabawFKKKi3b1Ns7cz7bDb9NPfsg5BLYQzPwjydWGWksngWZm5jRv",
  "key14": "7PcYLEZHNN77orcWwQPjw4uVMdV9b6A1Zgx7cVPPxaniVSYkubYCNM92Y9xoZKLWMJtqkEWeot1wY68vN3jQmzV",
  "key15": "4oVF3sGJYZperbUyELADwQRFMyR52Ty4wZCSFkXVjVvRghb4x8bpKKxPWftQ8kKNcHVkVf2ReaepSi2Q2YzkLLXj",
  "key16": "4Gksrq358PCfHaxntbfNeXYUJG19LtgeRsrk94mmoKS2TV1g5KKexmMpWGoqZJ9Yr3wadFW1T9TW8odmgwyRhtNa",
  "key17": "SVhgyFnchBLcrPi465EFPVBv2tLEnSLLR3cGgu7aMbYMcTbVn2t8N8M6t6fqmFKD6DyWc9Xo16acB6jQEZY1n2o",
  "key18": "4JwamYuo8auukg37reNxSJtTAWqWW5GULsr8EEc6JMEbnm4AQnjYbePJjvnecb38jqQV3RsR8p55z3BsuzL4Bvji",
  "key19": "5rC7UwDH3dtvTPGH8hFfTi1vnBFjxtkJiLfYKSVfkrwfQpaag54frE5bwdoxYuCC9SrVRkyWQYZTiwrihynqW93C",
  "key20": "Gzub3hFGaxVWwNqqQXABHDeV8jer9voKWnioc36PseS4gS45cJddBhWL1vd8UuZLjUi2ExQXfvv5wV6Lr2mRRr9",
  "key21": "2s9oupT4h1RMNvPHonL5tFCqUWK74dQddBkzfvBx9hqYSaT8c1Qa8WNwQ2euu7wuWV7e2ASstooH3PRaQwmxewPh",
  "key22": "4bH3ERHF7j9XGSpRbK9epy6Y3irDqBGU13HNyQ6wbwmfuViVDUYGJqBU2wcm9KMcp9otmvfPNpeFZ6SzayuJ9xHK",
  "key23": "xm2HvfXfRjxK1AYepDKCXLVukLcymUD6B5nxNWUMsgECUr6RofP31gqhpNDf6w2J12L4xYdrsLeCKiJKSL9MYyG",
  "key24": "22DKRc2JzAtnsCEKqUYjaVrE9H2pyjkmCMwFWkHyKDFXBv7uCpYkXTWatvinDYUPjccSZwGTPCtfpaaS4zSxfoR8",
  "key25": "3mb73B72zyRR24iKskenLbYJ9bMPcBNQwRNFBwH6nMmLAhPBvxJHt4XWWeHoD1JnBFTAMxt1373DW1tYwQAsF4aT",
  "key26": "3XEeoE8RRgxc4yRKcZ2i2EyfwA1YmmnY46XvMEd1FeexZJvbgEiZ7qwtbxyjWhgNb8DxyXgvos1vBKSN4qKNdTft",
  "key27": "4Vi8aHYedqRBh5suAnoWeCPZnvJ12SiAPJigskfjzMEYLSwKo6TiC4kS5tRnVsXL2kpyC28DakiP9o8vzZdV9j8D",
  "key28": "tWPQPgcXyCDU6AiYvEnzD2UQPBTeAoqeKdM4onX7zhpuhWQo3NGKHxCygWij49vDRdiLYyeZjQBBt5qLG66ci17",
  "key29": "4ccTURYCKmdspzQWzAqqe46LF2CUWPDSYvHDXU25WKSSY7QvS6t7rsCtbVWJn9yoeswg5pkRHvtgbDuZYGULe5Ko",
  "key30": "4Fd8e8Q3suiA9UMcVtSD7kwjFrwpHKzbb9o6SYPoD2umNGKKrAUyYUaXt8Kz4mwn1vUDNBGZkagogZz4hfcvaJ6L",
  "key31": "CrucxHqLnz4tQCLzP18pMYjqtKPbYuRvUnmNj2rAgV62dE8FhprbnyCaQvG285jBKfxUcgLmy4SP5uyYYeDVPH8",
  "key32": "2t9XhbUteWiZUSF9EfXhBqaQJ5ZBX13QSMTrv4ds1Bc8J938fWqSGBe36ZyG9qYT7CLyZmkJ7MhDCXK6r5pcPcMq",
  "key33": "59gm44wfbdJEfn1nNJRBse4a4R6jyt6zExqwdRJgwFPpNsXTh5uXdYRqDcC9dvRkEv6ywrZ7BKiGTDsHCkzEiyb3",
  "key34": "47o7mT1mRc8SHLrNoPo2yRPPhiczggyECEP3syP6Ku9W3rzt9xDpdeH5eVEBTz9MkrPQpUpAYwwuYbYmLitT7Njk",
  "key35": "2Vxs7fzyosS3tE8qCiQTg8gfLrPWpNHncMoA4A8aHuHQzoJktowEVvqNUbSrWhZG4rjmSyNe2uobPia5Vs5edebc",
  "key36": "4NhFwJCe3GG1ZKoqwaXVYRV9BYNnE7bxPz3yTdTybWv25UFHFkJXUre1GCTs43wKkr59vcd4nm9AVPd962A9fzXh",
  "key37": "4EonEmgtfQGzZ2KKW5jSMn6y585xc9mawUAJL9iGbstk8hwL5DZGfR5naa1tkaxyuaH9PnQj2iowR8PgZCj3essP",
  "key38": "64tf9B9BLF2v3ATVAbQ18CvS9bnskHfXo3QMGczbXmyqxFBfbyWUxdeFBhg695LDP1xNF9PbphNEg4csjEzjSiLj",
  "key39": "gfmEyN89SN8xhT65fSVTrKqMnhyHxhntb9fS21fcLus3NZbtQKgCnfxfomVe4FJpniE48jMSmxBZMMn3tdmWKvc",
  "key40": "4Ycu7kz95oofseFgfVEm6q21rWtmTfDt8H2RFjUxskezpGB3e8PQXo1snG7ZBLDNN6Yht5EWGr1X4jBnL8pDsXss",
  "key41": "4rR5VKrA929nGGPA8Ao6Z53zXMvbMmRBQJWZZE6ZNNeavN7ddDigoZGDnmgkr1cXzYhgionnJRvif111rfaohjEF",
  "key42": "2EZsFnvtyKkwaz42VEaabRsCWoaqLJgAFamuCBbHGTDnMiMEZnj2P1UhRp6ywrhLFKqnU8tEp62YSeiA86PzsA9E",
  "key43": "4Z8mXC4qXKECDywziLyjCCvQMXwLYys7d58MC9oCtPKTpztE3qJ5SA6e6KJMPooLBMCU67L6ikcQopRNmo3bePST",
  "key44": "5888mADyugouGzdw3DFJYZTjiVJZzQxMuLpsjaZXQR3p1ZpySDujaL9ZBNLxKjbmo26aY1jcn4PxduuyyxAyan4G",
  "key45": "GmHtKX6kefcUNFYYF7uDPehoJehzD5diwAUUgMWwSMbnsRwwpccF7CiTCd9HsUS3wA3mAPtaK37M9Y2mZYj699P",
  "key46": "555wxGSz5xdB7bu6XpvvqDWPAHn7S5sDJruvnbAy1AFwS3fG8Btd1dF8BHyPFU5sj7JJ1PX2L7LuP91wp3GC3faR",
  "key47": "3QUMP36Zbd1hi1DgrZJe917YYqZyPUdARCsm1Z1Fvd88yKBvLg7DMtPT5EdLoeqhjMu1LGvvSbDopfdj44RcAnpu",
  "key48": "3iJPvxC49tE5FmwYnV12Nq1n4N7eoe7QvseZqx5kM7JGJHtrPSSgTkzidKwLhEDEUx8FP32HbzQWLJj8dyouV4pz",
  "key49": "3ifku64KdmS67BrivYjUaxbcUpbLvTX98p2tLJPJRZv5sgtx6P22iswvQzjeqv9qQeggDkWaVnAcn1HCAKHptYH8"
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
