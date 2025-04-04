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
    "q8Bv3nW22Tjf8wpC1DMaX31BBRHf5LtK7rkghhnGbjwRVoLsdNtyS8hX4XWLYz3DsP6DAyc4U4g1y66XzjEPcbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPNxwo3CAT2vcYZFZuNGvD37nSohy46mrnJMsby7whB1d8GE3nMjshCR848aWsU9X5Ky1xWUw5SC1XVEGrJnavd",
  "key1": "4XuCGNFGBEgLRhLhjNmWHsgN1saAxuYdV1DFxhc49GqzSCAXibo1DLfEXHyuUaLpNBA7HhYAxJDwBf29abqHS9Xq",
  "key2": "3DQxcyULnQpiDQYRMdmcjmZ3C1vw8kkynBbMn9eqpp2GDjj9FbqGHqxbRchbVHGtMYVgwG4wgxeTF9GpFiq1jdd6",
  "key3": "2c1nh4uXDJzR9vMGwto2u8QMZes6d8Cr5iawMtaZnkbAxJToqwxGSTDyTbsWxoRmcYARzA4TjnZqwdjmL2EDfSJm",
  "key4": "4LetfSLVrN2EaxF7dbgyCgK4D4gg2eGiuczdgvUFYn2RzQn5EpB1Lf9LSdCMB9S2caWs8UwPTiHtPjfB4nSiiprT",
  "key5": "3pXjGiZszkK2NkkpwdqzqHfk8wRC2f1JV9CbQSxG8AVTMPFv3eah8DsYtEQEYpM6xMA9UsbjDNYQJDrCH9dcS2aB",
  "key6": "45Fq3ZHaQRxZY5CTaTD5mpqvobsphdm7MXdNPi6KyvfFjnMDLcp8uGi3DmEGiPg5XKLYj36QqhVXgYnRp8ZMXtvY",
  "key7": "2R4uekg3mDNXWCvWMxcstG1vgvRVRenQPuxyfStGtN9CvrACAYcES7rknbccyXK15c7LDFoTu6uE1iMhGpgxs2kg",
  "key8": "hNJY2vskdFAAC68CcXsnkGNJcU9j9abXoKoVP2wWkCJTvyLjjK2T9Rh3KrYacyYmArQ4e9w28ZpX79JHKHcaudd",
  "key9": "5m5zo4RjuRvC45mCzHBAKkPBsJkNyCVswLu67M4TSXTK3gdnBfVR885hKYWrGkWqhAJnS57Jd2cZNVeAVhSJFKKu",
  "key10": "T2k4bYmHZW3Rc1cBmFq7qUoeYVocRGG4GkMZW2YZQRjd7HGUSHUETe4Q22nBcx73CsJqdfKmLb5jGzvmGDxJY4L",
  "key11": "ymn9ZSEgkiZAmq7o8tCBqi1FnR4Hnk64QR43zaMfZ3GVivVsEsFkDXZ6BJN9EBXrH1XTLjuu4hjAj3Gp4m99yvM",
  "key12": "tjbswJ9u3Gc5EeH9Vx6ZDQ1K6GHn7D7vw3E9rMqbecas8Rq4nVnZhaMhHkFBioFXUwbLS2GSYChAwhP6useXSbC",
  "key13": "2ANd2yoCGZdDGcPvZ9GMq8BWpACu9qCGGWSoQLztkca1ukmSbUk2BZw6VczFyiMqHMVYDNuu1tswP8KmNCs8ZBT2",
  "key14": "5wuUgnx7tuUKMwPqNDTpUuhNHovjKDT69XESwEJo3dAqs555n7jbAtnQqV8YfPyJKj75gDe8SkvuSMDiLKzidQGo",
  "key15": "34qSrC9uy32hQk8JHCzxamDNVkXk33wSseiVLAyisUXSRAmCtMPEi41DijHYQ8yFDJRsmqETB9L8BJQac5mbKcXA",
  "key16": "nLFAMBaWacEGtw2YF6DWmxBjoRBQwti6rMmWSrSotiZYdFVCeLXBU8H2Vt6pTSrirsmR1q8j8Lmx4kNkaFFfGen",
  "key17": "2LjnEcs5ZwnuEbTAkQ5MyC4gSd76YThbuvqJ6VZy3xa8YgR47zZNU9U3ktk9pnxH1vAdFMoTBvSs1ogC3FeQmjM5",
  "key18": "bwBLLVNPqXVcR2tNZhBjei9w997MALUSekRzmEYZpVe28pMJud22a2y8SZ3t5AknzZzBfyLod7vuTbSsHJHbnDw",
  "key19": "2yQb1g8VxDaasXFuVBP4xHAKA949oRxqh87AP3kA7LXzioBdEmtFfkW5LNNe75xbwJ5LLFow3xiKkSyD9DcyeQmi",
  "key20": "JhiayVymqsWi5gCVmzSpPaD3yfnvzMQ5kHj26bY4VQ3YKTQyjYfT4w6qFUctLK2naJPhTXQCzHrx6KxtuhRcN3A",
  "key21": "417TBvmBiBUWhD1PQTWkp1iLPeQwzptqGvFv9oWzUew7Y2HMYNKNJQdJaQc3pbzZYfTBVptXvEdbKVZxPKmuNVyv",
  "key22": "3THezhx3RhevVdXSPuocAxAdwtMharjnQZ2Siw4tmBGxtRxUNNoUHHASJbdu8c4LjXuq7mPaHrhWYYwrF549jqvA",
  "key23": "3q282wVv7UxLmyRQyjwKYQPLkGqbStKye3P2zerBEgNYSr4kHfCbDNxLon9B2ACf6ZrQRt73tWtE3F5zD1D6dmS2",
  "key24": "4qmECjM9z8ZyVKVdxWsPWhj7JwNbfDyisZSXeHuSKhW7Yf4GqLJfe8bWeDCbvjrKD5axkpYyjkWni2K528Rg6ZpJ",
  "key25": "2XenDz6T6zvqDzRHekJ9TqggvyTWyxkoUrvrHDYYSKA7ErTR4iksxrB5Ks87Z9z91maYyxfyavyXd6BCucX3URJ2",
  "key26": "5tTEALjJAquVa8ciasr8Hq5Dh7umpCJty9bD8Ev32yhoHyfK3Gbb8TCcYLKygdCFYEQkBjroML7hAhymaVemv2X3",
  "key27": "UkUGpa8wbsJg5m3VJfUujLtfaL5pNECjNpa4vwfahM2AKCeJL9SnjjbU5czEZrz9SeyL4B964bgMZYRjNfycLnX",
  "key28": "3eYd4F4DjFNKmmhSFLNxJGmpo2MfSRp1BVuKNwoem3ZdCVdK58fUCezkWMffbXV8SCYrKpQopECfkgtTEMQzRZCA",
  "key29": "2sMqYJs3592SWYrmfQo3TiYruNGp5GeoPKpJZrTVqNTNmWAeJHVABjcwQPJPCtGgG8qrr6EWZYzEbN8UtCZ9GAmJ",
  "key30": "2FSaqj1F65ECZNuTKZexrwspuPpqWAmQ7SojHfMCXJHxsXPZKnmRGpnDtDnqubFBqTRanAKRX1xezWPCQMRrCeYN",
  "key31": "5wYtF8B5tBUgLzsQZxyhcXDksEAwtUoG4UKHr2zNuP4smZu9g71JEFM34vGtatinKsPqSndUDZpT1Mdu8b531RYe",
  "key32": "3ZqQpXcet9Cnpj7mapfkdwh7scGHydNGt8iYxKCwjoMWNgkVSahikJgMpNJFwc9sJngD2EXga4V3iLbfAPbCzoAi",
  "key33": "5C4dZm3dHnrNkRPp5yL4C5AmaXQddUyUBz2jUAfs7Hpqmm76tgiZgepq6Ufyv3pb1Z1oBQAYbV65k4Ag3mwTnxeG",
  "key34": "49nRPRJXV2w4rtRxWK1MY8K3SbPhYKJP2rcyL1Afm3LkEYY1fN7xm9MPgs8hJ7Thse2Q4K8ZdR2eeouJRNwvFzko",
  "key35": "pNL1us4FsepJz36szS5SYw83BPVYXPL78XQf8PF9VQArfVVurYu7a51VSnJgyWM7PXKK9HxnUMPEP5Znnx39gZH",
  "key36": "2U8XShW7d16W1tUa662Tum85uQHU1iYAAxzPSXMpEqy9vq3PBChJjhki3sgBNbzvuQVkQFer5YAxjCKBip4VWcCc"
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
