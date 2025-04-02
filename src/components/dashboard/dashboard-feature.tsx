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
    "N2FQeHxVeMra27SXeVcGGqmT25H6dM41nnBXkN69HVeeAzZThEyf6m39ZAZWsxrNaH7RcXjiaiyc7EvnRKwf2YX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whR7YMfbKVJtU13E8DzttCfXwATdU7vfu3Ufje4YjpoN1i6PyJxWTzn41YdEDPo76GAFJVehqqLQvyJFZQpxpu3",
  "key1": "3mc6Wz1wiXqRnkugJpNQkskZ1Zpf9nCsd3d5JBaTV9SsRXPNHuedgGxhiUspFrUkjt18k3WH47zThG3zB7RjVPXL",
  "key2": "bLKFfw6bbDAAg5WasXZgTjYTuRyZCLkz8mQDZuUtMWXYuvRLNNs3opPpJa3LKNduqwG53hBh24vZ6T2meZ8eTXc",
  "key3": "8j7FSJ7PN6m6XYwhw8sTGGU8Xb2og88sTS1Vgcwj2KUHKdDgGtrLL8hDwBN4oVNN1h1Yp3uAzxNeC39FskpTQzg",
  "key4": "4urpJ3XV1DJpqBY8i1NbWhUZyNUudDxABKDkBDHzzfFCXZNCJhcUVgLqQLtEbCVcqsp67xCVzrymSw9B2ctEKrqJ",
  "key5": "41FrEfsnAEoaCiy1sav8BPB5LBFCg8akwPkBVE3SX2ycxnCuS2ggfUXfEarp3Js2JAura4pNVtxa682saHGRjRSy",
  "key6": "6644pTHNeD2fbbSGkBhoaAgd2muBy9vgnzi164ZF3K1Y9pqQufKALpBtwnR9bGTZxyYrtqTbfw1jkTab7rGSeiiK",
  "key7": "46qaPcEBWFsRyh2fg393UnQZ6ubVTWsdVRi2rwFK7MZnKgmkonWsYAqjoKAcRKC3Uy9ofUCzqnvLFeaKcKhLfmnK",
  "key8": "4ptha3Wur14FgRamU4X7CCuFAgwGeSfuTaEcg26hZU9tiGwFmFCaWYFAUeAVAuhpQHypkcAJhXMxfDx9gXsFJhWC",
  "key9": "5eDi2dNnZ6SiE136RGeRPE4Ccoh8cFYg759GcDbrbdxunxNTxS5exUzfASBRmokCL1Fo3HsT38873hrWLxQLMzhu",
  "key10": "2JVibMd8fceW4oQLz7viLBf9KTS7RSHdsgDZ75vjNtG7zcRGGHcbeHbuymNvBkEZ5Ereh91jmNXT3MXnmsfESxDZ",
  "key11": "4GnpCUQRLwQwEYYfbB34DjypXvuJrpskQycUduzNtUQ1Z1vjdxzJeeaZbXvkT2XNKSrtKEEzChrD2PFvrAHMGaV4",
  "key12": "15ncuE5MyFpf5GFX5y6DmJWfFBnVkNGzEdLEAp5k7esBUggkC7VU7Dfo7znh88eaq2v3Cudy9JqpJ897sDpZgaB",
  "key13": "5L3HBV12KXCciYuhkGuRMt5MiLQ9ztYzLvaxvip7P5YgWaZpp6Wt8bWcpA8oqg1r1ekFR9MfK51XtPhUtC8ZHqPU",
  "key14": "5ewgGbhsjXk8C5CBjRbTowzCzbi63YV4tkPrYQnTTrq92ezWz7HjRv9MseE5dJfuNLrnGHdh7e5btGi5Wv3YCba8",
  "key15": "2JLoL3BuBRKt5UK26nxp7uXMkALzH6ktscfFmgsADeG3UAyRodiTnFHQCG6PPwkuaxGcovsJt7Tz4jYT3g48thkm",
  "key16": "JrLWeUSaB8Xd4epu7Mf7SvKf55EwBz4NnPgwtjQu4YfHNW3wGiLBq14zvm7r4nVQ2RUYLXib8NGFHvEmu6UadxF",
  "key17": "EoaArVpSGysQUDfz8TuWgmnMfcqoK3hZiuNkEadBVLo13SbksFK2Nbrx2B2jMTdCJ1BzwA95VMJAt7TmZ9ordTs",
  "key18": "3m2AddoxjX8dDPpUqUaefdtsG3n66MZuSSz8HJLovgS7psnPu8ccRcp2zeaJh2DaayNgU4qHAKqVHsPAJ8fyvcSZ",
  "key19": "3onFFfMUKjS2k69SNH8EYp66nWy79GxfaLsRRCY4W4kw3kBgGpjGGQa8wzGiYi96TaVZfH4pj3GSGb7XnMpqyKsA",
  "key20": "2M59msY63a8eZSbqXtusdfSt4tmAuWxJubdiwtBeBaEGATnwEdiZiwLy4q15mKM6pT8hYYTNpDVCaWQ2D6farAie",
  "key21": "3bqJg3RgmmyEh7thhT2wEEdZH5abDMYfvnnA9uzmSeAkgytVtQCSS5ZcN6oih3kJc514oprgJP7kDxdsgButxmYT",
  "key22": "2o44NThGZ8LDgoX1MdLrubPRJzKsS8Jtc6KcPZqeZCrpcdX8zcxefLXa7WqHtpdJW8LNLg68yR6L4nUsybax1YGA",
  "key23": "26cFg3gtFM8k1WtqWUrfNrA6pieausabbo8FbxotP4yRwFJgnAcjT8jabg9HrXfPFoacTfxNjHg9SAktbg5P9uNL",
  "key24": "2dw2wcRctRTDzqRbMZmSATNbJEhcZuGG9E2txYSxhcdH5vyNNBJagfZaoJCQXYkgm451sXHbB2duB95S5pBAVWBr",
  "key25": "4cmZNX2jW8kyzaoNK85PY6MRoiQpbLHfuHgVqeQCrXU79egNJ9BLfV9CoE37Jnzaa31rnL2zwYs6DdGtMBwXqoiH",
  "key26": "4a9EJz9adWTi1aDRxwHvWei286zs7cM8PtTsWWYQ3oGMmT3WYkYBR5RTggUmH14KqRXFwnRUR38Tt67BzaBsorJ9",
  "key27": "4usti9we6QsNGTmhNWgKzzCXYyQGtp2X5UCtzJ28qQG6H5qsBx95eSvYMTxuT7KASFAfsgjbZi5w4Eo8hR8zaHBq",
  "key28": "4X3Y4RUMJ8G2mwGTQwsjMiX7n5w26g2jPMbp5XgnsZbY3jqdwRoE5caRCs9jZyeVaXcPjzhasD85BZqC3qhkXNN5",
  "key29": "4xq3HCVpEXDb3kbFAeY5PfUXD2JK1gj9EwswyjdYY586pJ3p2D8njWYDeSNhLYzdNiTZftTqT8AXfYjD1WJHSjEP",
  "key30": "3g4g7zKkhizKnurZ8ocpShF9nvvJLYdve6b2MwiB26QFTDnKFhDXPHSobo7rjyX9MMkhhyR42aBwD5dQ87R46Bms",
  "key31": "4Y53kj1hCPMThVNhxFSNsNbFKDrqrY6Wx9mDfrAuZCaENWSWjT8r9A2ZoNZNsT2SKxAZyhSTFuH63DR8W1kKJfa6",
  "key32": "88NdB9w2B6RL6TkG2FCR6dpfz7zJDAEJTuJNeugg1Jfmr4cTfvgSUcgY95rifL54wffe8dfWmF3tDXtvAF4piKy",
  "key33": "4RZYFig6dGUsTQQxe6jHg1ZbasyYtjv69Zt48psC9KkCJELCnK1ZyRtFzSwfhjvQWRWTabywyJG2Z2DJ6qL2oAtb",
  "key34": "4TsCaj6LL99BE8oAriit78PgYUvHkdjDXgJpCF9E4tuMN4P1BTCjQPuRiNQ81exquyeKPXpXpESTekJngWcX7ySh",
  "key35": "2UMk7j9HcprWuvzjWtsmBHX6KYc4Ar758mZJvU8zffGnBswygxf1PX9K6MYqKgWMYUQHam4GAz3DawecVYL1ob3U",
  "key36": "poRAZut3xUJfMiz2PbVMCDSj9duoTGnSY5WPyDg45aLX16L3ZLRRQK8TZZt2CtMfEPJykNYRE9PzPuhGGWfanz4",
  "key37": "K3heJDahUmNGxE1sVVoQkSwMyddvg2uLq4cb2j7w2xJVGzNVQaG3eSDPgkrJAZ1F4sibt6tjQqRD9RyLVsNXdhz",
  "key38": "3G7Vfy57jjXkEn8FixEiE8xNBt1PfALwNj59BfCCppf3ncxE57fe6srqAu2cEnKT4uN2ZM6okywVSVHNdygcLFL9",
  "key39": "5JM7tGyLqASqqqapLB1mHC7ZxwQM3baBrR5Nb75RZycykptG8TCkhmFUUZ3DLs3Lg98vLBCHsLpV1AQQsWR1eeQn",
  "key40": "CXzDqhLUEA3GyL3a8Hdt1VmHN6HmrGbCK7VnrsCmdcc8SBqqmGyx6fbphanuLfcDPNQoS2k8jLM6W4pPYf9kLeq",
  "key41": "3dcma18e5wLiGxcfW6SiTJtXd9BjryECajGmaJv4LGWAXRr1zKKyncAYp3ZvcrW1FuHetQnQQVA3arjqSjvcee5X"
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
