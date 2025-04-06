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
    "5VuA42h4DmL8hQ6GyyhdzGmRY9Y6JqeMCMDh8BhhgXUinFpZ5VqzCdscmgca1U5PdE17XczZFLFtMssGnmzWPKfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26CVbHeqVyRASQdwjcSxhZGf1Kv3pdR9QxHjGCmgpDYE4rznvAwHymoHW9iu27M5Pkp3T4RWnfymXF7cDLZTHSVU",
  "key1": "34JZdBD87jq5TdMtwk3RSGz2GjaVJzm61xVVjzBMhBYRjjdjCCxvDZAmNPhidP1xVVGwxm49dP8nc2rWxuvzzDks",
  "key2": "67CkzrLmhRE4kpaVhuKEt7P6aEdqGo9H5QLL8cNvdTh9opKuAFL7UzxKhDT5tXC53P9hn37EZ4aNPnqtdRNURyXi",
  "key3": "2LBoQSM2ECKLmQhoUT9x234nn2BB28RTtB9NnStxFxAeXE9QkpzAj73RSLjxNEiFmXB1Ao2PhDEZrVdtMRDGU4ZJ",
  "key4": "5UMYo3SSeHS4Wdfo3DcL1ydGa4SFSxS18rTyACvzzUvMEm3SNJaTCa4e5hmVZwFVYUj2LuwV21j1XBFea5xjGSno",
  "key5": "3ZMsWB21GEp1RYpmi3kAmXjUeXwHkf18wyPSwDcn5zQDzBqbB7RUoPqn6GH7n58swWwgVTqUWRNj9PTcVfwMrhsi",
  "key6": "4AnopEHmB2a9BX7NhgnYfugXgrBoHwPoMuesDaFrntBcH77bb4eDmWDDqkU5Rfu5aeMBwskSEiY3G6oLXe4M4tTS",
  "key7": "67hsaPXaiRR66mhTiU4Q8SoWPWE19XTM4gWWkhvep3tUE2FiRMxRhMpkHEHQ6pmtc7vNivTZ2DGZHAyT4ii2Draq",
  "key8": "5M3d6JhnM135RLciYAKB2KMYGZG6iD39xKHGfmYK3e4JnYzTBQbb1Q4AUfbsd6pgCpgwaEw4zpbJTUQhXVqn9G5x",
  "key9": "4KTJToeyz8MmWjfKRGuuMEKkB87yZFgZvrHbBuEUBJMVdwwKSJhvZvRGzkebULf5ZRk6SaKmHi286GCZoFvkZsv4",
  "key10": "5TdNADmwC9GxZYSBo42rdAXGS79mqg5PgNZAT9BM7f5jwfVD92UnMmitiyiyHBZR8L1FbdUWyCyBHR9rmcSFKLXy",
  "key11": "Ez4WUbe7VBb1KNmU3uzhVN69bzvFZMgxRQJXUrXDMFGfb9bWJy2B8WuEcCemB9k7htGGAEAgHeggqVbJKXu32wJ",
  "key12": "5YG2Ndf7eyLBof67pRzoZKFBkQvVHYn6dbiphgoDtXLaWZzFDzP5FFLHa1LWbWkKXXBphErzpQfg4HDgiHoPMTV5",
  "key13": "3iMc5XRTFTBJvT7fEFeKrdbxchpMW64QwA9Cqrmp1SAF4TrEY8Wt7HZQgNGhibJEyiaeR1iBqp44oUdfpNPDr3dM",
  "key14": "31Xxd3VSmyufBeENdRPA1RkuNs7N6K52JLeg15sYZ7CZXKR2yvHMYdw79DG3Wn6zyNvcqJ2q1V3PS7kNaki2cj5x",
  "key15": "37TgPzHPHENjzJWzVi4tbMdftYugQqgL8xXXsSwCJkfdTTBjfPdaUu5bmsaqsbKSMR5X9oN2irWyMrdiVcBdS1Yd",
  "key16": "3LXo84TQ2AmTGVdunE2VdcWBnYDyn6Z2vPiyUTz4w3dCFRPDv9UAsALKVUrKSE7qeBLCr3NNYFEuao2ng39Y7fYA",
  "key17": "2RMAar2RUCF22SBg2BxbU1LzP1jeqN9MguQnuvqDTf96HrErgjf5UCLH6ugjNJMkZjSz9cbNRCmTbmvRauS1LrxW",
  "key18": "5tqfGsrHmtR8v7QtajxNRMt1c5WSmnAkinQaCR2xEpNwWQ2ES7JgABfQ8XsQeN6bVKdqxV5i98PCfTvtm2bKZJXb",
  "key19": "4RjzFWiXL8LnT8TCxdgSpLreJpr1Nwsoa5V5W4UJrjSPvQNkkv8kyYksptahSYSGXfQwyQPDKTWaPgQzbW9nZU6Z",
  "key20": "B4RRG8JRyf36n36o4rCgdfR3sLhXY4QQFFZqBiZKcFQtCY5Jaiv8HyjiH6UpCKf5QqUMFD9LiHGhMjaUsKcdRzs",
  "key21": "5ysK8fvTT1dPqZ3rsUxESGWweBCUTwwoH5Nsgxi9fWw1RaNbFhS6cdoaYwCXd3AjF7TqLg8CiwfRTCNjgrENuni",
  "key22": "3k9WTNL8xUHivfMTCiXrXyGphVnmFGcBKiJ6e26Qx6u1pC5gxaz8vmzhFKBA1QQ5vwFXSzBTXw2gCmF3MDFnxJJn",
  "key23": "2QWyq2qqb9Q9RxSQvdPKLTphstWCALBJQwxC9zm3dQPs7WmpnZaEfBJpkWK2aonFXE1dmQipn5UUGv31X2MwyQc1",
  "key24": "4o4fopKaPMCWev9j6e3orPeN1D1fnSzT9BCQGg7yhjg5cV1U4oXsSEe8dXhGB5H42eTZRBynHmWc8kJyYQDPiVf8",
  "key25": "34gtDk1rMCkS1Jgpaj6VdCZtjwvRjFrd5tCs7AoWUCdPn5n3RM916MQzst9gqr6eykRSaqizxepe1jdypzgZ3VJP",
  "key26": "272KPPPRBduorof4idRj1f3AVsobUEfBMzPLUwr1p6srLsWNfDACMJbgDsbkiAJ776YooBdSqBtSAZPWWg9eHLWn",
  "key27": "3gudXUcR75hQv9piTTWZkYFkJUMy1hD9eCvKeE99XMXoPDA63rnD1ZmZFzonjWF29V6mq3CbuM75hGNe34xWA13U",
  "key28": "4mjCqNEt82YJWLN2cmhrczuDZqXkjSCoJnksqQc9N8BzzhVibn3wpWUdnQ5LEdkXTP3vQCgrjvNP8wbjhzcMgysC",
  "key29": "5QTKhRLDdWk1gopRWuQN7kbSPnv6puJ9muSa5rpu5Tn2pDKn1GsEA1tvZX3EPxtsvWh59tLfL2nyBR8KByS3oh1S",
  "key30": "444Fv3sc4mBKir52U6f5WmuAMNj6tYknhE4Hc894WZMf4nmiG9x5nvFb7UbAByFB2qSwg8PCwFBGnmMeyBA1L6uJ",
  "key31": "3kbCpEzWAxyhQ2o3uX749SexQ1WZxmjd89wT6YaMjPqLi5nfVMgeucoenpsXYk8m5MjS61WCKLD9CU2aRnPpWq43",
  "key32": "44K1WuvfNLjWec5J8jLtBvXuJVHh5cW3C5oS8kxU453gRJeQreWoSfudqtmMV6cLDQo8v5KrrqR2GgjCiGVB9K92",
  "key33": "45eDdC9sjvDCqdSZ9xK2sFmG8UDDFrQHjemgJrBFHJQWLjCGfztwEik7fhZgqWn4rTFaKPpM1r6Gej1yfmBe4wUS",
  "key34": "PYcoHhazRdTzqCKHAreRKCSVvbxyzhdZRVPupVfXz4Jst8KJtuAC8ZjFntHjPAXgw96m3DEDAoWDaKDcWBuJPiC",
  "key35": "2idsJMfByyrhJHqnEUir3aNxsEKwLzBPUTRMV8JFs3SGbP4HdmU6jeTYFQ93oybkVkUPBkaMFneTFZCD2ZgE1ZP9",
  "key36": "5AUot8QXzMBEdvzUJQKntU9iHU4iz2CnGDgGTfBU1xh89CasDTyNGobLmHyK3mihmzjpGgVMnorDqjeJEu6x4zKj",
  "key37": "2AgwkEpGFqpk1YgPsZsZBxGUpdRS16oVeuB8umyrDQxYbRgSDJadapdWJh6ApbiiaNYyAwv94XFwsQKcG3BT69G8",
  "key38": "5vPrTzbDUoh84hdz7rQQM5igXXn15buvVfJFLR8jjyx5oj2Zsc3sAP2ADjxzkAx537Zz95Weattjiewd8UzkMU52",
  "key39": "sNsUaA1rVsWb14MrpfdM3rng92HniUReoA7ykR8p4c3ixKwFn5zpVatPVritv3PfoHguNStQWDznsfEUcMXWW4V",
  "key40": "564St1f9LjuD2pGVV7uBpZGfLtjAXZxbh7bwj7CLiUqQ1yUYFGyJYi2foq8UoBjEuiuhTEUPZ6Db4A9uxCShFFfH",
  "key41": "59h9u9KphnJ9xwQXyAXp5w3YNfjjkj3F2Y4pfLi7wCC3Gz1q67t8wTJB1dPnRvjoiN7jCNYKd3juCHchdVbkbAye",
  "key42": "33BZaux5pd5WScUyXn6YoXew6aAQs2B6SfwrugPjJREHcMGebVhAMUV8eLLJ84yEjE4qHhvhMu71JNQqBSj9YuQc",
  "key43": "5eXnGacrGpXs4VDWnRXKTo4GTR5pCvFZLb4qzxboxDX7SP7DJ4NmF9HXAWtfLivftTFxHPX1ijzTcSLZq1irX3QF",
  "key44": "4sLHSg1tZrrydqexJBo9ux24TM2Cvjn8nfjACVTwFpi1o2e8A95aH6P9WLpRzZ1Zxrzosf1UBZZuubYKm1NvizAX",
  "key45": "PKX1xJJ58KRB3c6Bwz9Q5XLZqDMa5qUgzd6doRdUuB3Vz3zc4ZSPuVJvaTF5qrmSfsGSAuXWYjthg7xZzUeiSQU",
  "key46": "NEsiWkDrGyudy5bS544jDse5fn9HsMMmAHfuraJxYhqgy8iYNgNKtyhDDy1xhFdgjQ8Zzg1Umd5yxzQh7soWkHJ"
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
