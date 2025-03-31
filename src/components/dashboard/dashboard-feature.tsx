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
    "mwM8CPXb28Lggnd3S3GCThFqYXNrZBYcBGXAhPQJfSWkq2NgyCX5McBbfGEuF5mgB5shwhT3Mrng1bLBt8KoV1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tcFSjCHVUCpN5RTFNpdVgW6uP2aQf1bMjJMvEkJ8thqbPXyn7qsWmpqrH7Vm8WXusP7D492L7dH5aqo2xcfYZjX",
  "key1": "5mQVN6NZjxV3hMZgNdpgjVSi8iqdiHNELhbeJJ7jW65fkgTPf7aFPKwrLWCbm3uNE9BiG5aV31UvmgrBDsRMqwV9",
  "key2": "3rWEebahuyMuuTdG597soc6GFTRx64d2d1hv55sJAkWuZiFXsQKZPuVaVVsPBgwJfiHtGofTwSpSASX9QDMRTcQr",
  "key3": "288aFD1zb6iaX76Nz83NXj1GTEyYA7ZQgUDgXawpu8gWPVj3sCGPWJGfdYE2x99pAKN9hUvQEiMCMTodqG9EfEeU",
  "key4": "3hm2Zc1cEZ8J18dHP5QodjXnPXeP8b8DarbG83hUEU7FdmFCLBZLbShwEoaRJxYo2sEThBzCSjy8EzRgGGnSnBTy",
  "key5": "d6ZJYFysVRKTAqbqVh9cZCPcaGowCNywBAExPuQ5jMWR1L7VAyfMFim4kUdHUUib8uQ3MWbhuXz97JhprvkKCFS",
  "key6": "4qPjy59CwFF2xt2zM9GNoGw8on6g8oGTHhyrqU58sKhqSSiZ9TjynbewwC7U4omvpJ1PHsCpbk4bkYEbaRXpTySk",
  "key7": "2FevEPFPtQpkD8BJVLodVpfNQLWfWVr7nd4KsoZkfJD16qm3N7DFTzYNmv5dmi4bfWExm11SMxNeFXkruvKaFFb1",
  "key8": "3o9C5vPmHz1CPzjCuqpgyjrGbEg4rpFHh3K8UYhvYDMNs7nL2vqsvjHzspb4fYjVGPYXmxgpHbbEfDST15mkRMr4",
  "key9": "2zpAdxvUzfEr7hb4pUXFkNgq1StusBUTK6Hh7J5bN8Gcu7BnwTrPHscDBysPVCb9Do8LLMpJnSAJYQTAXCVGCMNA",
  "key10": "4piVxoQdxehVEwd18rgN8BcszaZjN68fjDrJK9ctGa6JZV45EGjvo8rR52xcmhKaU5Dj1NBsSgwpnFKWQcLh975X",
  "key11": "4YnCaonUT8kCgN3uDUDStfihKP25ets2Gmo6h7aU1SULUeip8bBAGoT7mKCv6ZLsYt4BuE77QSsVHg6oJqDmEAVu",
  "key12": "SbP52tKqrhjShj8qvovyGgTg3wKsB7HoUKN6EFxUijjxD7k845csBrJxgVFhKZKyp1avX4dutP4CN2b3zNdAVTj",
  "key13": "24GVB1FF55wyUhNRUixFpJRxZKYJf5LRyiY5mRZzD7KVhWN9Kt5qJ4KBu4S2SskdjdtRfXzCVAjxyenRNSWKKVPX",
  "key14": "5nwoqz7fq2G52XR7sYZ99pm9XqhHBEJwdS2o4cZFYsRPCboGY9DQn8vzKT5geD19dC8oLVCb9jyw1LSQycY63Zo6",
  "key15": "31RfpvkiSmcRQJdgr6mAudvEA7NxWWT4WPK9Ku5ebYzdujQpxaWYoyCBzBMZJFktAFCDhiontGXLY7nLYREXa1Ae",
  "key16": "5DjFh8jKzh2o3Xh995cuAUb4FmhmkhG9tUT2GQHc8nQaxyZ9d2imDP17tnB9xzGQvGLyewLh6XW3HnD87b9aXrJV",
  "key17": "5gBShrzb9rYPy9jTwcDauvgoKV87JtryEqkYb57VALxSM544cPoDJvigQfAkPe9Q2SNorJX73NvuYFmdk6Y64xsE",
  "key18": "3uzXjK8eXK2nmpwwfasU6DDVBrWLXv2EZpQNyKsj4w8N6hAtamJtNfSTw9FVZduhZMVLmgS7xZLMzCqXP8MjDLY4",
  "key19": "4SzzMWcNMjLyNCQzgH9QUWTDu6QNGb9x38axUpGpFbQoazBxAUf6wjpxfZoqfnunSJumLUezGEx1QJkb2wsQPnSA",
  "key20": "2bKt1rEWYz3ZQ3EdPDkn82GG8wCipkn9T3qi3Y1jWgeDq3uZmiQr8bM7LNT63yVonXy712RKSeZnGh4DbcJTMkts",
  "key21": "2831vF8kiiMM6d33yPtNBAcdn2pTzQUB6HhBPcqHHJLVxtSSKN6eLfs2iANnPUFZABgBCg3tNnPt7mrLDGA4wAY3",
  "key22": "2mQQ35mStDoKmUtXpSUHnc1EdA6YTyd82KJC9yXS8oykZZ9vxou6aRVtdRPqVsEJ26dYnGhA4FkSQVSXvpgX3RWj",
  "key23": "3Xjs9EJTq8wGjLKC9PSUuFAnyrDg6yCpZcLbMRz3cyXk8SKbm9cAN32BLTqweZTEdj3FiHTVPkb3NdZTukULPjwp",
  "key24": "2RnpuSJmSuYgo5gHZ8Y6z73K7bZkCna9XpeaYwP4uBfxRCc1Jm2iKHkYKwDM9pkwszSSkJnA61TqxkbXyFrgbTeD",
  "key25": "43XzVQTJ3rJPsc9Ce8PsKtdZfQ5XWo29F2kEP5LY9H8f6fjprDp9GVfx9DqJeEfRsm1E49N8FtsFtVixcj53tSao",
  "key26": "3G8MPAAzUNhACMivVvjFFJHs6h17ZpHVRMne7b1MQLfkn3Yc88sS5Hx8ZT4jGA2gJ7Lx6eewZATdyuYhRaDgXCxF",
  "key27": "5xktA4Ai448qj3t1qZeZiFNmFenZZFUR3a93fBcQWzLsXdWRgTq4LyARqVt1zCwehS11q7TjAe2xri2Gmh2sgdCj",
  "key28": "ez4GonCCSzmN7MzT8Xjzk8Kbja9ToMGze5gcD5Y4LR6EfrAfKcr7Y96hJfMyPrJNuonU59oT9RYhWdHZFTdyLew",
  "key29": "54PM4YzKt1m5UQP7bKpj1Yuw2bq3fMAEVrhNM7Pt2NTpTR5JNy9ak7841BcATMaJ8M6czUAEtYHVSeppndP7wE6J",
  "key30": "QTKXTHJ2hqyfLTdBqcMPKY1C2f1QzKRwJG1LdKopfPBRguZh2rUaS6Zq5xCyUoBEj7PntRY9bVwY4YBSn8Bcnbt",
  "key31": "2MpV9RMj489SDZP2zuPrmAGLYihwathX2N5eKhiu3GCa6kbwzQB1nnNPCqnjt9Qhc6PwoRkKMEunHNjLSaYXwtuv",
  "key32": "2Y2aGvKYFtqRSZD6pwsUdnNyM6RmyuGzo1bii4hrtRSbN82NH8aDNxLmnUPWqJupxqwNaLLtMjWNMANkeR2CLogU",
  "key33": "3uVzWDqvRhPKJLBM1uxVDGbmmL9fG1z4yyDxMnzHTd2sk2KpsSTZFHReEqxupPowtiyKcL878UPc2RVTEgYiN2Aw",
  "key34": "7jiuX1atR18tQ4sJjLDZJ21NBowux5WDAQhA3R66nahuUVvb7QrshbUSSsxkS2HWxkhLRw5A435QAapBvURZrh6",
  "key35": "5D2KkmUDVskpRh2HcjCJXWWYjsRxYSPUGyy9Qn8jmyxhiY8GSe6XFwbtXS9gPURYhAjo3DUfgErNkXSNxzBv4zkd",
  "key36": "4XKq7xJhGK6y8gLdnH2jrCzgWRhTFDE12fujhfjW6GwYU7ku1PXAUt2yG81LrerYWRTUdDNiSMox8Qhhd9NZtR5w",
  "key37": "R78nqGoYWBibScV2ARXgFa52Ww565qJsddyw2LZF5fwug1bXiqAts3QKjs5tvMub3bJaBdbqJ2JtzJVCeLnjXEv",
  "key38": "eudY5B8z48pZDgvyD3DmVxQjdCovq6GGcFjbAQtZ5Qyu5KASSXCJtMCYxrHhi693BBtpGZrk8eoRhocRtmRdA1L",
  "key39": "4aQf5hVQmDmMN7znxhTVoUcaXh8PV6swbwJ39sxmcstc9KT9Lutn9L9YogFTuYUaxyNLEeLmcGDK5svSHL9frwDr",
  "key40": "4pdNDi8D1kLzE8TeHf8sRotzsXViRiv9pjdLg2QXLR6SixcssFhPSXunya943cydm6PaAV5bT4gUuXricvKSwJX",
  "key41": "5PkFRjcXdTZbaVGwivqQpyKeqtSDUpXptTtmCBLF5uYCB6LSdPzbPE8DwPYfwUQq2JvkTC2PPFoBffGiWKW4qX1E",
  "key42": "3BBc63WVkiEXfDCaETWtubYmCQPeWN5AX7g88NagdRAzX8G8qEehYns3bCXGg6xAPkbXqP9bUCHxaFnHre5AEJ66",
  "key43": "4zocARsEkRsTBugWefN5G7Aic6NBSrVSfSnR8MxiFCS2i4Sn5GiPRWkWndDrYCP3Jur2rSe9b7KcPHBpXsaweYYv",
  "key44": "5Z8TH8Sn5JvfwDhoGr6rfgawM8mbWwPQDMKprcua4bUQ7bNnc5Z6j4gu5M3ekYeA3GrPsY3d7AMXdMhfGWG4CKhT"
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
