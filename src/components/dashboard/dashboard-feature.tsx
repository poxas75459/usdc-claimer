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
    "2ZbaLjfyzxXcLYGjx28M4gfguXrHp4pNL3gB2HiLB68azC5NS2DsJAixDznvjrDizFAuZHaktG5HWVuteBvcEDjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hVkE7YCsRV9xg157mL6pkpvhrJz86b5anbXLvtpGDZVUZtWp1qzJuNbTLqaiNWUWELyhHmMv6WudjK4o1dw1BX4",
  "key1": "VJk56grK6u7kJcGtA1wLHyTFx2p3s1vVhkm2G6m2M3dv1pyMGeFgu777Z58vB9CNuxi8aYgPLnkvfqvLffFJcsj",
  "key2": "3yAMB9gWftGLSEXbobLTDEtGAPbqoytXodK9ykyQNgBjjMUvv4pvcC8DWKYJ6Z72K5dpy55TkMtjDHStg8oEXtKC",
  "key3": "QaeaY3n1J4qLN96vESys1bZWLkT4A5vpdQcyQf2nqCJW6Wo97EyAAPvpHPi8N3MPQVwzfXkJ9jqEg6MNhnEpMoW",
  "key4": "5VT8aAi2vYvLioaxTxqeyGs5syMfg23ZEWjdFS4tcWz2YEgp6TRT9zAVFnYrif4q8a1VBsCRd5AT3MhxYhWpvunT",
  "key5": "4bpQ6SomntaQou3mCFwfrVyFbjV4cavqmVqMzsDSUHJHCcz2uRWLmMyJgGfZYfsHAPm6UqtGEjbBkZWYVyXwWRVW",
  "key6": "4U69hrB8y4WjF1i8Zr65o4yA73yF8jD1VVu49RkQkrNvFbBCzTT8ugATYUCT1QWBXWuyc3VdWUR5YgMTHt6WX5oc",
  "key7": "4EimcPp5F2N8zurmRrSGSaummDUrbJDqP45ZMWDPR3khSs9nqZCeFqALY8v4oUXxi8C4SPmqYRSJadC44gchjqoE",
  "key8": "2b9JgpFPAirxcTxr3BEvEXYoxghvsPC7jEZA65jCqfS1bUArutTbRoWHr2uab5kKaLjvoSxZvjUfrkSBq5BGdisW",
  "key9": "5HYB7pB3WNdfgN4j6J3rejV7XLBAcFaYoHN9mu3deZrS1ZgNMYEBhiUuKR9f8ZiRFfs6Aux8kaFhEidKfjetf9Tj",
  "key10": "PMjEvCyjEqvP55qojb2XSofH8tF22nfsFap8KdydQZJugqQSPwhoDAhVbMzZTrkUF7RG3FQjbyqJpgu2uS8sBR9",
  "key11": "5VhuRkHYuFRGSVN5ANau6R7Ps9cbSkW5xe5Ft5DvPHsd63WHVYtXEyeiQ7CaUzksDVUVUKiKk2f11gASzmnTak3M",
  "key12": "5LazRh1ANKGEdtuYcLg3YS3kFt4Lg7fcaPkYR1gxivL8hSZ8abgSHYEbZs9MpuyRHmrEWJSzMsebqJ6DpUbrZBwr",
  "key13": "23vJx64WyaMrsVLPxCMvhvS6YoAwfXVtUuCAa3UrwA3SmW4Zo6hKMHTUVE4VwyJJt3jKbxnN6BRkLoZuhzCCyMoJ",
  "key14": "3Sv6rvzHBKEgRsJ3tqsjNZPZoKLZj6YfQDoiUXtT29HKstK9SmaQ7oF5ibkdAUNHoFcYi9J6tmWL5Hb7GSdZb1fr",
  "key15": "56P6e3MuUu2wXLitxtEHxDn1y3nhqdwZ42q4cb8aQkkoEvCQsYE8qJu57C6wRQFFwfXevRK6mWvjSmmajfjTYcQE",
  "key16": "3NeS3EkMdrLzSUqAoLWCZ9jiG4tR8ncdpsgiX5T63JUC38oQ2BUuoyDx3bvzJE7dWzkh3hocziMPuhfSEr1qU8hJ",
  "key17": "3fmaN9B2umrUhQ476bnUdBCaiArmYR59NRMLmBFSW2rfNt2aLmTgvctEKUanE8HGdxsrcBp14yBySMnGdpA6KNF4",
  "key18": "5aRphVig6fWUr2jyXj2sbJkW6ztRKvPnrPQBJYHKxJjbi7umcjT7vfzygFJCgNynGvNrTTdptjEczmHQ9cnfoBKT",
  "key19": "5UrzTuibx1KvHywt1LyyhtkwcTC8wv8fBMQ8oQLtp2SwSqUF9uqBaRpY6cM7BkYwQ9afXRV2nk7T4AkjHB22zkMR",
  "key20": "4MwpoNvi6uTN3KkQygZ5XcVB8jNPQm597HYiTQccJMBhZkNqx12WwTEaJruk61qpDZFM8V9bdXsiA7b6QPPX5iXA",
  "key21": "KBLfqWSHkZhENENE1GAsBBbjYMgFmfr5atLP6Rr8WozCYZ8s9cCygrHJjPgxbkZmytoh14S9v41gSMPegKFMRHV",
  "key22": "5serg3gpCzhfqp6vDCohRwfMRa3eKcd32jruL1Do2MedLtRUSBj9XtuPof6FDcBzAdGTpvWQ9RK3Z659viw9C9K7",
  "key23": "3qCtLGSkLeVWN6TSbq8meCj9RUrS99BD9JcKycJhVD46HLza7i7trx9KTW8QfZ8fFian1pgcADpLnm1Jq5EQdWH",
  "key24": "33jMG9TQdzL8rGK7XzehTvhq8St58yDi3RDf6d7x5uchWrMbLVAsQWKtNA3FFyVPNM8Tr6ZKazEiBykih9YhYhs5",
  "key25": "Q6BEhGLPGhwyj1CQ7BkLxni7uRYfecX2ScM4W1Mpnf1aBaZmD4SsX6szWN4aDPUieUALriquLtSvtTgCpUDrBdG",
  "key26": "AcbFcbKxoAtPbqcTAYT4PPsscHC7pzXUtbHvB6zXkFrEexDpcNpi6vFzSV9Q498xXNXY9GS3q4bgqSiwLAuDCA4",
  "key27": "3mmvKeCCeaECGTyWaGjv6vyQktRDdNTUhVnTZagaU4og9LHHkiEyLXx2ahWGcdomuWq66b8UTNgm4rWtc23rjyA4",
  "key28": "43CmzuLYRNP5cGzyaoq8D7zDzepTM8UJZZs6d2DSwdzXvNxKMUcFNCPCE69VaFS3FDBXtU4pfu7PJarN1fWhzh3N",
  "key29": "7x9H5NGmcPkGaAVTLz1jYRXKL3vLmduCfCdmPPxR49AbCTrGmiw5v4q3EtDUGnkzC7di2Zq2dMvCEJz7vYVAzz9",
  "key30": "4DT3GBm8irdx4d2GdDjeaoWmz4VHPPyajiSCMXw56kNKbG8DAB9sC8QhmFxXjaoaAgR7Tmtsh4w1pCw7Lx38r2Xv",
  "key31": "24gda2sbb6uPM2Hte78oy2g1ybGz4ju5KyFvesMiL95RUXMBrjVdFRVLzGHoMDenNj5pyLtCanvBxZHizWBBcGRb",
  "key32": "3wkbznqr8P7JZ3FdCxQgMXHax3BwRgu4fAGbZYLCTdEsW6zCc8EwHea22o2bR5hhvbWhZoZdbkrVky4dXcJPhcut",
  "key33": "5GLHtED2ecqok8AwYyQoxBiFYi4u1enZ6rT2CbBevPJ17m6vrYjkCLyNNdZ5LQrXDnbwgMywYq2qs856mH22A4yw",
  "key34": "61kdRzd6MboUUKBvy5v8pXCFpXaJR7nucVGeovEJN1yWVPmcNVctd3pLa6EniLTCa3g9DVim1boDF3FXj6tiWikx",
  "key35": "2tNpzjAtSWrvKMCKJZaDd59JfFdvhTJ3xP4KSewJuGpuEskFcFBuT4a1zUrxz15DBShTxm9BSew7TjNHTXr62Zu3",
  "key36": "52FYEU5BVZwoAAwEybMSj4mjiCn6q3QbVnS1gUtoTTS7tSFRk1QXtLK19ydvbxYCH16VzUyJwZcoC3vfT5duEYnS",
  "key37": "45Pr7seEABMkcr9JGNKqHKHMDEjcgwZEEhF7UH6ZKFxk2R1kLKejtQhefyxXZgZtS9uwjNGWoZfVquG3rzq1Yp9L",
  "key38": "43SJp1FjZnA1QPkoLxtXoc5sZWVn5sj3niPKYGgpviqeuSoTtc2HU9MS42dCNK4vBAXpYomfC2dBfmv7gx43JPhZ",
  "key39": "361XZ1KoKEN7D4iGV6PapQ1crcsRHkCUbYhdBEFq3GCGSJyByJw1KSaXpxwNMtPu9Q41jbMNkTaE5h2QXLUR8VaF",
  "key40": "2d9v9JzhtMamZpsAQUExsJmuxYewrNv1mzvEDeNWJjbruoXu9zCWWm5N4AkR29rDKbctGNDcjzqQfcXy4AXcXfma",
  "key41": "5KY5Q3zwD87EWCJBwstWr6mf6oBEdEBqkcQdH4w83rxVmjVLGz5FcJ4GovSfdr5MFxm78X3HGY1dyHgpTG4KUfX",
  "key42": "3uYPhKzoimfXsxC5h4Gs2ZpEkfVATNN5pNr6QWXfSVaMZCJa4YvzhFJJNWUqsYS72dfDicBfy6mbUtttk23zkw91",
  "key43": "3NCdCTV4CUV4TJvT8RTAGuBYd3FNkcXSe9wch7pzgV4XjSqEgoeRJ1TDaQ9EAAVV8WxfeEBRctzMsoh9sGxasjoL",
  "key44": "4UVbxnrr3EfqVUiwMziPN2y8k5uD4mdiwBPs14UrejntBq4g8t4YQ6LeKD83YZrp4iF2dqHhczZDd5xPR3bG7hPj"
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
