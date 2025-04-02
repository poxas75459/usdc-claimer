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
    "RFkn5rLfX4GD6eVYvF8MEdW6U9QsLjDPPxUeUyo3eQ2nPgsQztjauTbsUdpZxebF2peCf6QYjmtQawqvHngokYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TgErsD6wfv2Hx2wota5ToSgQYuLR5uASViFPNDek58XCEZpowRo9ZNPvsgu1N1yun3j88RSTXhaUPyzf6Anf8VZ",
  "key1": "5VUMGoEaZ7aFAy8cKuhaM7XYh1ZF28gYHHpaMTegubHvLECfawaykjeuDwZpWHqbxpJFN6M5tWp18XYLZRAqQ4GQ",
  "key2": "6qhXqFSGCN2BW8cQJogRPourpz5cr4YKqFvxDaZ7igdEKQYprjhUCXZHRyRTpFZ5np4zmQghU6YEj7iGdBNE1EJ",
  "key3": "2HfbVq2fSVSUq8j9fkdWoL1B3GAhTkiKVP92H6Pcz3eTi6jLM3uFNhxQvTMH7fBMM9dtveFEhU3PBhotqcgzoP11",
  "key4": "4aRhHc3PCc13AdzGJN2saAxbr1cawvX1KYtj27wuR9PNM16rHURUkiNQS9QDiWBr9Q7jQT5Jx85oRJErN8v7AZxS",
  "key5": "2GmRPrjxH9uL2Zker6ftoqXq65DDSiUfmFcvew2Vwi4oydQYbWwU43a4ZdNwGD74NjQeb9qGjhu4NZnUMUxYE9Y1",
  "key6": "ZmjGwXRsGVPbJsy2zQrrVZEuCoULC4Qcj6gQ6SaF8Kwyh27Vxd9s7yWTB8uaGnsrfVSPAMficrLbvetgEiW2Vuf",
  "key7": "3u3h7X2reVuDgcr7BeWZwDgBcZpsF3zWZfnsFnid7qX2vWiUudxYvA65RKiR6GrJzwLU5bbw9LaZF4uMo2RJW2q3",
  "key8": "35Qb43SmkfbkfyvTZ3tWGy46suhs9Vwy1vKcUqeygb8kHkDwpMsEpksgYbVPoAwqCMkGqqGiZU3eqrFtgh4oVn2b",
  "key9": "5jb4ReWT55zcRLd85oMfY7Y1zRQ3vjsYFWcoRnYCSxpB31soxgZZjQ17mVoETr1CVkPBbk4gDVpCPec8UHiWm6A1",
  "key10": "5v1tNgnyzjzXdCmaKqb7snNFvx5QjYX1PtgBJPE747zw2fQAz8RmREKpSPiQpBXdqPDf4sxXshadpsssTAcNZf6B",
  "key11": "3WZK2X48ZCFDvex9Rmyd2co73pWGc2Z1jtn2rBKkGuisXxPWuE1w8q8GLwoWczN8ha1d7AgkEexNZiKBz2dk4Qch",
  "key12": "4qB2DsyuwB6Fhd2B3yt8QXbkMAsViHd4aWvieWZg26XcNjdLexKdzfiWrDKdn1TbwMv26LEJgwajsgNXgN36UmVv",
  "key13": "26jYezKqx8YSrCrd98gFviz7z5JNB8xZSKBKR3Di1cNERKR5A3oGUX5CH6T7wb5mZGX8ahBLBknWBJJWfmwKnPNT",
  "key14": "4mkzSheyhDaU5cwJY9TEcYS6i9vhuEX2cdcyCnmGPdZHtniwY3jtTuJ7ZEVHzS3BLPy7PN8YxP5qdZm5w5wq7pk2",
  "key15": "2jZBXBuxW1UBgFi6H3ocDjUhWdDXwDcScjJ3oV5ZBatpenk4s8kN1NuYkkocpTEhWcxHJiAah9TiRzNYz15GthtN",
  "key16": "4FMj3WzkJdoKd4FNn8ZvDkUkct1JYyXhRFYqsoY7qSM6KkJLq1G77unSwGU7zn5S691yyqZx978ZpDS1DQSQgwAS",
  "key17": "52QXxwTYhnd28KqFwhi8pkT6ESHB2AiArSaahpGd6FvUq2M1U3q8y1EGwANGZPcrXzFU4ptXaxbCdhkrChFjqiAg",
  "key18": "3n3G2Jxn7dEsE6uwxqYUw9enDB48DB4cv2Pe7kHPH24ZdY1dsptebSnyouko7RUwvRC9C6Ha71u4yif1oRu2ShHm",
  "key19": "5vRPNaZhZdwxDwWVGQc4YyjLga2jq6k6BzmA3JzoqeLfRmz9qbBn1qgzW8qqJJVSApb1gC9xXFCyW1KkvvjbvNv8",
  "key20": "4PP4aYjiXDxcPP2xqYsRD8F7yFrUwyBkD1FgtP27DSyW1TcrPY9SqnQvsxaKjwp5Sjc8abpSVRFgTNzYjUMbdLrw",
  "key21": "4MQoMEmc4U5HLHB1nd6BKZfbZqNvrehvXw2TBVa7TDZoWd3oPtmfxHcJPf2u4LyKAXaHsxPDuMR9YYhdnV1rXHnv",
  "key22": "3L8uHaPug3J8gLUS3n7ZYvZZmZDwnTE19otGkKUBkK6Um8M5nvdVMaKL3Nk84ViRxSK3DhpJDKAJ4m5YSf9z8UVK",
  "key23": "5XxzCNXq1r82r1Ek3QHUyvJqQxb7eQqc9CbLDETsHAA8ZT2ykFzEbuw25jcNf8hugWk981zC6iJP2huMcpmZaxm2",
  "key24": "436FjqringSws1GUcvSM5ftS8JyitFHB2L5TXryCTcKinCdAqN8AMyF6bBiYTD6TPh8nzMSNxTek3WvQXSDM3Jsa",
  "key25": "58GnQSD8D52dEYJJjowfnMTELVBG6UpKR99hpTGrgxzuiMnhG3zmDoqRyBscHiVohEv86554gGxz7Mwchjhu9TYo",
  "key26": "49U7iN1CouW2LsEb8RoLDgRsK93tBABn1qbcZAx6Zs5PCLDavZJwUoBB7UJooWBtVZwrTLQNpEZThqSj3Xx9Hb2B",
  "key27": "3HcwC9h5M1ZcofgrVMZaDS77CuEDKL91AQuHZeHUNdhR5yMpLrFEAGVVwUpyaFKgeSbg6jxtc6CFrYcux1PM7VP6",
  "key28": "4kbd81AUfJEMGnCpMbYHZJWcE9a8TJXbywZsS8ZBwTKZFGsHNxz6VJuypAbX1odx75X4qGfhykpV7f95kgAhQ7de",
  "key29": "5HJq4pboz7PyP74Xd16W5uT4dr9Apvt8FMiGx1D3Eh2YTXdzoimP7bKGZqnTYH237J6zuUsf3Fkhk6P23NNCtum1"
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
