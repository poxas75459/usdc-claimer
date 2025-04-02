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
    "4g9PcNANj4fGyuXAy4MnwDz6VgteECYbYUz49PDsyNX3qfLcqA8ufcEXbg6FF3ychdRhKrdNdx9keyTmm6cFQ48N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTw5yPxAXVMxKaPKiVJn5wHMzmNNJ5bxkqE6R9K6oK9xNcAEMVmWRjMEvNfmEKdBdnV5MCoxmbmcvzDbP8MqD83",
  "key1": "D9bhnu52wRnHHgBhs7upSfCJ8YhpdhxQrwKWtQQFApSkuNJzxHkVQBXLfyTWgdfxZ9QJM7cGsSGqoi3BrJPVVMG",
  "key2": "5FqF7kaP8TLBf7JV4q7My7vvVzGn7GW4FchGTkAz8JCSfn772GXsE2ytY6FrxM7oG5BitKX8xeGiJTsnJvmQbgBq",
  "key3": "3kHFSnkYzFM4k5PFNvseghXY8aue7k2Qw84oHD3DG2MsewpawY9xjkDijpHbtyenUG6VCTCttybBRFEHNwxNXARu",
  "key4": "5K2yqgzjTpjwQTE5Rg7Fuupf69rT4i5bW5hCRkedEbGb7AyhQKveZUr8jRFqfrU1zF88EeRYC4kMuBFQxdPiMcq6",
  "key5": "2bTwJsTQauBucBuyKfuHiqS3UDfL5pkApurzEzoeWbYJyTRvu7AZu4bMGQWFvHA9sRxLPfxSkwWt1xJnRG3z5Csy",
  "key6": "3r6T3NnHng1UgMHzkWFDBSPzvQWmPcSi42tzc7ifxaAv7ptsoD1U3i7dy4orQMQXs8mYfb6BcXz862Jwvt8qh5Yz",
  "key7": "35eceJVugRqh6fPkHfKTw4gNK1PV8ijvcVta1TZALdiyG2Q4KXFfWX2MZpb5nf5Re6qgsuR7JiKhwUpHvjczY3YM",
  "key8": "5PTTaYLqtMrZCtGXDGJTZGr45mGTu7oURrPihSfAyZHUNFhWYAgFwVTLnvq9CZqmex6j2uqmhRtuyfpvgBHbcxCg",
  "key9": "5JhE2xbR2cMG1UaPzrWdHRXe6REh2DVP5mRBNcUTrPahFM5UkcJasyMsC37NraJbiSNiZHb66AaGV4oCA5yVon2j",
  "key10": "5KQd15fW5EVHfb1Gc54dcYVVsuh6vwgfNFUE3QgZ79crWQRbAGvWKm52BcPeqtrM7dWb41B5bDw73GYokLKyf41",
  "key11": "29qF21xPskMAZhYEkNeBx6ZrGWgGtUbwFDyx25dabUuibUEd75horSsKLeN74AKSmgEGWSoxJAjW8TyDf3F3q3PM",
  "key12": "3oRcJhmf1BYGQYU3Ev8sHeK5XvAp4kT9JMshmjjhQHuvWqPiEaM9BqJz6HMnNZDbfGnNW6EiYF8VjUt1mS1xDUbw",
  "key13": "H7qgVmhvNpfCi4cpwf6L5nFZVaNA9M5UnpihvTKdGsFHxxpEKMECtbbbcZcb33Y1FxdQx5q1yPzoYrxEZNT6cK1",
  "key14": "3BtfPgfqdjSudR8yfabK7cmUW54D9HJhouZKZ9nG1mF8L5CytsBCqZ3W7NxSRpd4szSq26UNkCNRec5BqLzdRtQ2",
  "key15": "5yYj4mN7RZyUB18uTN8n4KYNz49mi9zHdRXhgPfdzsZMVn4e4wRe1hQKMVSSvALbXVCxuP54oeR24S2LGpooQeer",
  "key16": "3y1Ud8UPV8fZsCnn2hm59SXB7ycfKdnyeaobAqNnZxQTfJbVo9UweYW8XqYDZB5nQ2FSyCyjTrupBoS7Bi8yGqko",
  "key17": "cNfhnEMQKhr6QH5XuBPamxKGm6M1mawqZTbi1jwKecigE7nagihwwmDsxs41cFJVZjR6S6hVXKXPMFMxkt3Fx9f",
  "key18": "2sYv8mnzRDuinkZR8meMqdSNekMd5eCUgRrBRnPyoX8GQfWmm6zSKxWm5yJg1pUWFCWDoNA2zjRg66VyeFQLi2zd",
  "key19": "2Nnp45sfHGPscQaHpnAUsipfsYxiFyC95wwLJomVNJNCzgYkykorjMmfGy3vBJkX1drxdCcV1umEELCc31kJn89X",
  "key20": "e3iCRcS4r39p7tHwCVUsDvzQ2jnQG6h89FWSCY95mxQgDJviW1vWZZWz2zE8KtFzoLUAHTzRrtGCkdqjLMc29HT",
  "key21": "o8Zx9aunkYhvvZuR8Pe9wdGvBWfmwUQi4X9Qcoi7iXVZEUJggvunjH4M7UMwVP2Y3BCt5wLiDgscHquhhYR3sCh",
  "key22": "3FAygEmUS4eothWFQYv3Q5V7KigtR1vWU5W6XNbbypp5ZncsnKyFN36hZvepySdJtrBjNdy8PF93fF2rwnRHGd3q",
  "key23": "3kk7AJoN8aXQFSjyLxAXTZuG5BgLiACSNed8JKTvH4eNXorMmttDwzWqujUxE3FKoNvUfHDFCCMhM4WprjhKRhVh",
  "key24": "3i6EHzjouyhe7Uw4ecsc7TQyjWWfx3HXZNbJaU8fQi7vbPosh5dfvsbzN3jriswfApWB8MzN2NPSuskKTDS3RWPY",
  "key25": "2BDxmRqC9V4HB1VivEdNKngdCPTLj9NNFBTk8a97E6yCe34PZiibHNmSL75bedvzyWdN6WYVGaEHT34uLM7NUC5j",
  "key26": "3wNYbDfpS6eGF3RnFj1ndrb9Z2kUG3LxbdNdMs7q3TW7dVF7ZerK8KTLqkhbW5majkjoE42Zu1T1LyhvAzW9Ryu2",
  "key27": "fVvqjNpqXjGgXCPpBZ8DqurijDdRd28werqL2qzTG2bNpBjvtHhwjEWnUpitUhEmDbvxeFpHN7z6sQNYE1Ed6H1",
  "key28": "3DxyV85KEpLfpi1KFJ6Cdty7XkRfwpqL9SG16GKw9tB2YHfbynnHMVjeBPSdrxkpD6Q87FFBAujh6R4DTCCoGJKp",
  "key29": "3KReGkepaVuLNfHuEbh5qMBwWGoTQ8ugDFLdUhWi5CDGwSXG4ZGeFgdAdFFi5TRAaBkNT3DkA3HSR3UdCDoaVNPS",
  "key30": "Dt5djTAT2v3xMUepiwtRe3m9Peg1FALaahvfsM64inbkceK3YZ1rscjmjPokfrezuVvofwzq7ULN7RiVXBM17iy",
  "key31": "3bNT9gc9r7j1WWxz7sYnN8YvDcmdXEDFZUMcNAfyRnNTcLB6n6Wrc68Hbv4aTttrPu8wSrpK8VNy7p9twzHueT1a",
  "key32": "2z4h3fL8HfdeEJ3dcBXTgyQ3RByL8r7GYnMmDC3HQf4jEvSfybA5DLgGJ7kg8eyfBfferDHR3WhFWc3PFHqeNsMf",
  "key33": "VBqBeS7JjaPvBAxNLKvzWAuvmeabzmCbkUSaaMn1BWbaQkUcRYaaFqhPj6tswJJ6HBu2RQz86QQRAJTJujGdSAK",
  "key34": "4HAmYTB246TbfzjcnavejhaVuA1fKTtjD4pB3zE4UfJRaeBGhGtuqW4wfwNctngVb3pNZw5bnG3vT9KqAxLvpoGN",
  "key35": "zsozcvzRh2XPj9PmbagLDXMxqM7dumgxoJiiKqXnW4Cds6U3rT2eygstEPnFjL8noSsUD7GiJhV7yRmPXio1uKp",
  "key36": "5w6iRvLH1SRMq9evnAX7Cv82UivvGUZWkF9urc7aPepY2GL3Em3jkW5zGiok54nCLWBnEWSwo7k997wKwTQ3ZXDB",
  "key37": "5Ehq1rCQkoy9qQcPTb9fDFm5jeNyyr7nk6eXRuCuibuNBfV183QGeHoqUCv6iH76eUvYbsTpNppWpQcxksWTDeZ",
  "key38": "2TY7CgxNbpto13VMADjKmKAXQU1HzSz3UQne77zKbeZ4WeZJCU1HJSiPGz1biThL1bjpqan2ComiSHTs5g19qyJV"
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
