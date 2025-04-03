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
    "3RMUL1EDADqDLz7BihAhzd6Y9kg6SqYN8HfSAL5TgcxS8tmsW3GnP3YtkAMFfrTpQZTykKU3KhDEpU9gsM1Pmpfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epa2cshhLiSyVNZNBAZgmrQVR5jg1E5y7KDa4813B2YuNfC2UnyGZNGo4nAQTFuYjJGAAEaX2SwFyhovf7HRMor",
  "key1": "278KBQX6sB9PT8bdVAQuxayV2PdRFRQg6Mg1NcDerhGkSk2PH3broCKqUfUQnBKJYUEFb2kMzuRKCyfQbH3DXHoz",
  "key2": "5Eu6Y4ZyP5ag6nkHTeQdirc68qLfC1VfvwdcBFZroaYoBXB21iQWbMUzr86LnvHf2CDUkv9ngpHLAd4NKLrPYUJa",
  "key3": "3vb8HB51ZJtiC7MnfYb41XyrKNWMXqVwnoU9yinDMdmdixGQErzVjJhsNDZfWvjvKsqH3yMJ424Qv8QanZHfnx2H",
  "key4": "3XuB5DcK9argMx36gZi7aVF9qWX5KhBxUjASFcbcFHjMSxe22g3VJaX6frAQyAbsAiGZmuagzu8YwrAERRS6mmVg",
  "key5": "4niSzvbroCJLPuHXLunVJiszzvCKZMdXYAGnFA4UY5T66ooAxMYXH5R4F8rrarvyAYA4QkdqL1FKbSkWchd5W12A",
  "key6": "49WJqZ32bhRhDu93FTowWNbQGikh8JBdo648YDzAMsjK6QtXNQTrSjayNTVWnKH6ukMZjRWZr4oMercFR5uRVSJK",
  "key7": "4HxGzzDQ6QmBEvKkXr593nVkQjxmzpNzUmgfhrFyXFGVwF3MDkyu7tSMkE8Ff5B75JQFn5CgMdh1aL2NMfHjuVse",
  "key8": "4shdrLziAGUEVfhwxrdwfQ8FbWszdCB5NQZUuSmKoexeFkR5DU1UiieH3agWLaqPY5N5LbrJTxBazZibQBTQUPLt",
  "key9": "2XLMEcX33h5KDsh24G6b2HKmq1wr44475RDbS4nUKrKy6R5SAHoULr6axB5pEw9pkXQZweQcrqdratH7FpiMsKtP",
  "key10": "5FvmwNkA4y6iGYmnhq39T9MUQYhHgk32jhXXpu3VbUnANKjKLH84DaFDcRMSPe1Xogc1UfH4CboCTeRee7mS5JTt",
  "key11": "3Ngdh9B5Ki9sjLnmicm1J3nToQoRuDMquePabC8V1GNWb9faCfXgAHAozRweXbAin2zrKEtXq2GZyPGT7mwd5wbd",
  "key12": "4sX8Rq6gV9j2VT7w27TZggcgcobKhx1ykEQMKXybE6X9iPMJ9Cd4bFrCnN6NcFuw6Cyfqk6KCKpzBSLpcNU3KxvH",
  "key13": "3HRtfYJFggML44PTHpBvoNG3NFLWigSxZ8bmwB9gTyaMi1N44Pb7umYwXbEb1zMPiEHHcqcrDTx5DVmY7aZD4xuL",
  "key14": "4Evy8MmfYpSa3yttJSRGywhSGdnkyDJtu3m1bvdBpxoRY7NLbpEMRmsvMcPri9HDWNTY9cbjbTCLKQjeZP4tvxvq",
  "key15": "5NUWK1hRYf1vX1uBpJ5dBXnt558LFjzriSAaVAcXmZZzWDu5kUagGYLVFqRS3KLQs38rhmP13XgMmvDeY9sQEMTz",
  "key16": "54TJcwNy9v6mmerAvYL9uBeNgVxYdSjSupSfjj7DLnuzsbR9tWiHaHJcrnFqANYG6AemMUp1Rd243nYhbH7pGdWd",
  "key17": "5KDyZeYm1wUfdYnqcc2G3P2n8zXcjR2iMETzL9pmEZCg2HHBRLDHok7PmSd92juh29JwuBUoareB9GVE1AKizN3w",
  "key18": "Etn9tLX8qGZATaUcj55vuZMjaPLh8JN2L4LvTPYxB2WGUAShMLQApfFoh5GuQwXnAjK1WDrS6noqkSocyZEsYP2",
  "key19": "3DCZP5CvqSujBKvDaU8EekjkJEpFYY1VxgjvhUjD6bmPJjRaJWyL3MEAFeW1PYxeRfwqXBK21sDiA9uR2zYriNLo",
  "key20": "5uvRnbPfwUEFxPdbNMLgbfE8BibbuCN5UqCXp3pjm5o5VChsbnWQ9r2B2HHNw2i2DnSk752PJwSv1WmARkDQXZRe",
  "key21": "5m63qch7UWnnDxgByaCg33CY4DLQPWL1Qr3UiHjv4FpyziF6UwAVe8ZJRFK6D1pxGW4ABt65rZoVigBPZPjfaTKf",
  "key22": "4hmPm1ULfjZ1ZoFmeEfBcJ9uLKPF3jqRPjAjwVYGGqJ8VmEEKmjHpEgnA2wkHXMZhnWX1e5JTAgf4QhbQARBHhiz",
  "key23": "vpoW6tsXgFKXduoUt1qK1WKEBWVcKNFdXoE8js3kWkNHbg1AUjyXXacfVBGGuQG1psyqi3rnbgp6G753wNxwUPx",
  "key24": "3bKpCx7yQk6YCNRgE8og6FEH5rcNAYQgkD1Dd3DBYd1oa8qscF3Qr6Favry84mS5k9oVDrJfidHp8nfGaZs75S12",
  "key25": "3Bzs3HHB8qdjhakwWAKduCdgoHFTherDBeBYXRk5bmNMYAPJjw73rm6yULZyu3HPr2LWqCXSf12ynBmFomaQfdFo",
  "key26": "vnoDuVa7gaiTqifb1QjL66yQgbyqF6yPNa5vhH47GZqpwPSd4aamPZs9BEpwvJnsjehoCWU86wDNLFbwe1ZYmcw",
  "key27": "4s62xhgM36Yy4yeR9woN46H1QJPREzueYsHBAEvw389UDAs2p7gjjACVQxcixWj4rZADp3sDhSaMqqjY1VGA82J6",
  "key28": "5wwy7kdH32nvkMyEYkcqjjvAZtvfGz7t88t55zBs4oCQxdVjFpoVdkqYACJ18Nf6nFWtL64qPgiJDU27YJCPM2an",
  "key29": "5VNTLjxbM3ehK5ENhj8dnB4o7capC23NZfa3Ph2oafUUczYz6Cgb3JVhMtNXpyzBMYtPs9EwmBMMMAVXSQxbuED6",
  "key30": "3178nd8NhwbxoccHVmtsnZm6ujBwvLDbrG6c7XsUY3oDTw3K3CLBuBuDQyoXcZorKTXkpEfeL4WYNRKQbKvY2rdM",
  "key31": "4eAWsRtuy6Cuh8SxLBSYPt2WPsfM7i7KNPX4JkuDfpRFPP7X6fNzkDcdw6qXWSGMoXw6Adr6vVfpXhs7d8d5F86K",
  "key32": "2oE7ppohbeisXssXL8ZSZ3ZfdY5C3oGqp93PRfju8ycCzNZsQi75zz235fACW72CcdZ5VJooRZzhk1L5z4eRwYAH",
  "key33": "5vRbSGyfsEmtkvZDh3QyApeYFyTzJzgx8Empv6Ud9o8DnmxbsCX5huW1zkrtknbNA4pEpwpgKqvCCXHb97mW6D1j",
  "key34": "1UaMQjku6GwmjzzAb8YBXCVo2mJ4GqfyLERc8mAjcpEweL3tZbvDgiSDUnz7NuK71UabYwNcBY6CdFX6ZhSWode",
  "key35": "3qB4tVMR19SQMSuHQwBCt4pwJ1ix7Tj3ub7vk3Daj9Y75VP5tinkR3AyKxdP6vkUTWVYBidJj2rNPbrDWQLy11ER",
  "key36": "3LWbcnNKucUHnpvWvreuQst6jfC9XFkA2BeUY3cvEMDZmqZvdPNDbLfxaaZQDF5GLkDYijwLcFyd2SVQVWfmpPmf",
  "key37": "344kDso8hbdgrHKbykbMWBFohQvAW3Syyb8bxgdQaNq1ubxoLwgorYySCiprMwap3Q4W9hqHJYgLAjJmXp59JFr2",
  "key38": "64js2DoERkYg58NsqscBxLXozFN3n174SAjj4Mrz4sMTNuiWvPK3PADBuoB1tFuWxf8KN3KKDpjx6kJ9exJwprRj",
  "key39": "32sUtirW6AgQgungcp1nDEQd5zsGCPTQXtLRx7C73xcQZ8KJDnD6tzoXT8kavE11eUH9E3MHFHhr5w2ZeyPAEyVB",
  "key40": "5TeWanwS2SrDaotDGKytTg1HQvCdxJQKUNDuH8zGycmibuNE818thq9Ppe8dWhBG1hWohdn5nu3To3eg33hXDY2J",
  "key41": "JtsGXh4Vi7NFR1BMaygwQZ5qJxqTP4iaL1caPGKtXiUV328gcDYKewrhESh8QdqdTVFipXSoovfd34js94dawCy",
  "key42": "QPUFi4kzxDu6d8EFBc2chRkiyTZWmEe12GY9pcBhtoMxX1RVUeQ9KiaXDfCPgx2sQEM6cizRsHYvhGoWCzUkavi",
  "key43": "3ecsHSGttsN1jvFSQBY85ruPtmzY2bWmpmcait2fHaW7NPMKTVyg19q2jUCAmRFDURWqeJCbasbcxR8xzNvBFaGr",
  "key44": "5oJM7LhoQnKzkHseA6CUCLaVKEPDwLwR1UrtGGFdyajqPks4zbJLarhrZgzJZaqjeyP34tCZu6PdDmaT4H1hgLNp",
  "key45": "2z9NNsAqr3HYjAL2gxRdCrK4QhiqvXQLTTRN3n77cSaTDqWBNuM6UrWfAiReXXG2oxmw43utEoWDZDoh9PnviR4X",
  "key46": "3JwdqwAPftmTnJqUk6pFikyVyteGJHZ9FagNZ6qgxq7fdNVKnE8RbKr3gMeb96EHMEHAFH57ovBtQw7JmVQiHAtM",
  "key47": "5RBbhWpUv2Lm3CamcWx6DRegh2mpRQebYSKkua1otZU8EBV6eqAi1uF8JTLKpRF5LdVdNDvAVBvLMk11GHKDdkE5"
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
