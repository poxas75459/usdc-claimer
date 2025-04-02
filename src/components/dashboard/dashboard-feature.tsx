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
    "4gzqC5ZbaQ1SEzNSHZiW2Hc41m14GvrofiVRdPUEFEm5bRKasgAZfioXpeydKxFVnN1trYbm7jx1X2EhMCCob1dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FoBJB1invfoVay2cb82A1GvCQCWuULQ5aPxZQ6B6u9XA4c51Fmud2DMRN2mLg9CsKbt3i81Bnsi7FPDU7DTtDzr",
  "key1": "3TcKMSYEqMB8ME3AqFQxMiut4W7vs3CkUJCeJC2BgGAV5PvHLa2kqsCBSwYKyDgbhjptmb68NU5yPLo8bDYC2FyD",
  "key2": "5hpaS3zeknsVPqoHtkgfswvmaF3scWozinudyYuQHePHr8HvqMBj5D4RRv4Tu5cAogRnADq5dNeHwCm5wF2jfZCG",
  "key3": "NSKw4G55Ty4kUkLVRXMhJTuSpp9JFLWxD8eD6oEmfpC3BVQbPZe7zJSeK1VfbSuH6p3agczvbi9Gxb9QeUwHVAv",
  "key4": "i9dwGthC8N5DuohgfmLpmHqFn7XsPYcdoaL2GQTxvS72NkzkNWPhAiPXb4ueZmRiSbpsfLiDxo9p8mhvRmdQyNU",
  "key5": "1VczAPLyFjX3r3KYDbH24M4oZYNacHnHqzPzTDFX1x7HLoog4SbxnVf3EcyqFLpUhXEQq7gPq2WVFcHBqYBt6zi",
  "key6": "4urinuFMi9PWtkvD21nguswnv8Aycw9NRSmL8byPypEQCL4t9MzVZZcPzjw3sTh7vGDtBg5g1V6oqr6uzVWjBB7K",
  "key7": "2fngEUxMZwycyddcgdh3ni2F7i7c2Qs9eWpxve8hRteYQthgFag6zhoSmA7UTU2yM75eFXX2W8vfZeWKKkcKpKyy",
  "key8": "3T2CtpUPEiS2V3WWHRVkJWMe9PwsLfbFLvjC4BUcuiGar2j1yxeC1vtCbrgV48nMKscVYBNsDYE7BJyUJvRhyC19",
  "key9": "3eErBJ2n6kU6XiJQhgKhMmhEYciftypiZZp4LyhsuKMaUukJaWkM5nyCr9xbndTgDZUoFtbuhRGPNGBV6cuJ9bdr",
  "key10": "27XYew4nowgV7Ecfjympc1xV15dxkHhWe1wcDdJJrPcVLpoZfhsMgnoDCx3ZQmE8zLpTJjx55GY2B1CBe1R4Rq4T",
  "key11": "21TgqQp56T8o6M6kRmhwLp88xYJdjXsa5aomXuHp3HJ2V4F8Rp5B47i3kHY56jCC1ABhc1jSedXsisnLVn41w7mq",
  "key12": "74KbVgGnFSuazFTVweRtJ66yMXk2N9eAF2jreghixypvhcvwXeAaHwkTrLRgkCLPvwrgPedrbBSbgThbpWdutWT",
  "key13": "oi8mijA5QKt8sw3gLaZ8dTATfbPiKBxAFqpeWrGJRwRBaYeBe9YnqFvjrC4feHbLUh47yqUFjciMvvEEYNu34QW",
  "key14": "4hwxTcv9sCa9MQk8WWHoCgo8fD9kVhYSTsAinCt2kLJnrcYLBBG4rMTVi25ATLvCbK6qpXEsCCp1a9BEGPYNUizq",
  "key15": "3KLyNwBvcoTNpSFgsG6EEgQVGytGZoU56DUgiWaNmBuZ4mgQL239eHZ6oUmbDHKLb8U4dguXz4wiNhf3rjfRLdj9",
  "key16": "1uQNbXnziVQQaKQKi4GLJS9r4q6qLh3m9Q3Vss1szvTYuyzwYfd3KB5z6XMPP8GY5XHbhuFyMEBnk2AsvwM3DQn",
  "key17": "2xYJM4EyAtb4S2EA7UDuK2j8icxv7jQtx8M3pwKQLf1r9bgj3iQY726bpZ8hWA3KLSqCVywUA7sNEJJi325AihBj",
  "key18": "KfVt2UWH8TRxX8gPfr7MghNPUaFh52sPoNq93ayd7dTi5sLFaWicoruSnU9yJW1CdoGddwf321QLHgC6tjxwD7q",
  "key19": "5i6YX4Md7vxNXPSorxR4ai8UpMotG5caeXXSWdb2YpdPdpQeZ9WnyEvfbNpqJHxffpE6QvXUC7bqx7563HcUgJCa",
  "key20": "X2YgZ3DrJsGh7WqvPLKAf6GiuVw1BCqrLrs95iMmgYLJAQaxh6pLZpdzcor3psqz7ydbLNLbdoaboYzzo7xjegk",
  "key21": "5STFiL78rwLdPB88saG5hhm1sch5sF9XbqBAC6kksUM6bVutPUau3XWgSn4XapdLkGLxX6oHeDunVB9BQMd7cEyT",
  "key22": "2xysD7dU55TA2Rt9Y4PUMGqWNR3riaztEALys1BDmjv6gk3gJTV2RryASta9rPLPmyq4LdiKAab8K3mWw6EGX2w7",
  "key23": "4BbTmrYBbtEdZqLdzXdXjicHTQ1PPEJ8y2rLNK3bcoD1XJpigPH8xEzVziLTv21xWTeE9KY8eFVeNZnZtNKsbPjW",
  "key24": "5DiM2iDX7DWsHPodF3fz4PkkSfmCaQMhF6qcS2BrqUHuEWKaGSKJQPi1CTK7RBxSAaGeL1RM1cvLf978ifHro4ny",
  "key25": "4zf9bYHcc7CorWML6hs1eqFgEq5JxZzBJWEnYdp1Pmd35BhRbvgoHHHbVgKE1wXLmWtabPGtgNVo3ZGz69MzhCH5",
  "key26": "4J39JpFFxzVwFT1e8vPLaeb9rqTsSXvCPbphS4roHhgBuY8uDirbLU4MNKXTBFUhHhygMhAR3ngiMN4Vdf5f7pGn",
  "key27": "2RywtRM5P7ueP4tDwV3YBupYrX8uQrQiLff4GAm5m1MPwsZTAdrweDdf5ZiGFLYHVNpA1sCFfXa3gzb14jEP89ub",
  "key28": "3UgTW2ZvPYh87XhuoyeoVW4rTMSTPheqG7NVft9qUWZCR8FSHhKhPRJxgftxduYM7cy2dmV8YR5hPyvRHRSj133i",
  "key29": "48n5aysJ8Mt8aEdLVGvoDx45Q4ynwDkupiJtb4ftv7bgS8D5sxkhAvPiAKsJN38DN1x6qULwDPq1xPHkuTDn9CuA",
  "key30": "25hZsJnWC9Cn7gfW2vBX4tcjefZGXEDd8C3FRdfPubr9tJr5Sskjj2WrCkgQBZfVviJtWNBLFoCtA5wHdTNwSFrF",
  "key31": "41khaypDp8GiG9qGyLC3Zg5QjTzdnpVFN47E8T9qWWmswPvFBYYw6yi4pGpCxXsdcCAEPaB1UovW6h2C78Xni8rG",
  "key32": "2VXe1tmTvT6GLZ2eBFWcxC4jW8YCMwYMAA5PBPzHEB1VkXLeSpPbMRd2kpRHS3ZEGNGzBZ7fc3xSV2zUu9XkJccg",
  "key33": "qzPaByEmGswBNAJFmftytEJp5zJ1meFrp15Um4Er2xRMWDy2q1AEJ9LqJgcH1CXNJ3JYmxpiJtUY1YDewKydSGf",
  "key34": "3opssBk2xHS4KvBRB5YYAWNknYps6RJLcwHDvY7mAjTQ8iW66Q1qf6Htp5S1kPTEmuXUnmsS6ewu5nf4ZT49cK3m",
  "key35": "4eZX95eanQKSr6by3cLsLZh86Jm7trvrJCkot131Ah8tffn6F1i6LevQG7FGTwotG8QzLwzxpf979bBDpQaUSPxh",
  "key36": "4v61wYZa6prYjd2ijVAfhFEGUdeWfuo3n1gHoLbbCocJCnTXgtecqaEFTdbtgDhTZZ7bD4gBWnXYY3sjToqPcRwV",
  "key37": "Ujb5r2nKAQgG5BjzW7rMF8qdU3L2JiyUB8GTfMAPEpfw8gW1pRFxNJmATt8hqbZqwTLV6WtxCHC5h96L5nCQ5LM",
  "key38": "dvfangf16dz8S5aN4CYUwPPFYhQPRrFhoZPpb8NsgUEd7D4Hv8uaaXEhwKmEM6mezAecghmWsagbDGt3r86aGky",
  "key39": "4EjHwjryU57c97HxsLWaDwRTPVhQGF9JQiD5wXPSPuHEbzPbXZfratXWkfYGRn587Q4YdQaY7LxQNF4a2ff13h4i",
  "key40": "47NqXvy5eDC86NCpcLbR8PNhRyrzLdpifeUS5W5ZCH7QyEePinb8M3x8TZimGBaBbQ84i733wbxGd16rDasnsukf",
  "key41": "2xGe8HC3SiGokGiz7VSZGKz33iqUmnAY9sxCQQeicicD226NWjDYjY6h6KPqLyELP54sAotZ9vtz3B3Vs7uWz4BJ",
  "key42": "nKJbnbacRmEKzxMo587xWNptJoq1Ls23ZBmXJqg5i9LxUn8FVUxuSq1DUtb4iABtzG5UCAfpVo2b2V3KZEBLA7H",
  "key43": "56gMNJt1UT2pCsEzpU2zeQkihU3xJiHiS74gUqdXSjwnrBQRg1TVU5mwkgmLgHxoxVPyqBzrxsepNcmeiwf3Gogu"
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
