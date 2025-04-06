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
    "3Mac7mtWGRyp9b2RfbggBSjBgeFEfCsRXYmZoiAbsuRTQZzSBUGaH2m6nSJPn3Afz1rdGibZxeYsRu94woUzsHK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCMn7U3jGWbxiQV1iny9yCrJFJhrzYgTwK6NM1xp3qGq4p8T4ZATxg1jBmRF5AmqrPGjfJvJeiMjixogcTqpY4K",
  "key1": "34v3aLtYVhtYFF4Pt7WyCPNCPjinPdTG4xUsTknb4HNVd4HJVML4eyYM4MjxbinmT6s9tPndwtazi4VNyvaYirv",
  "key2": "2JLD2QoSXmr7hBjwDLCATJpB7LCfz4SkHyQo14R4BUUzCynsR6gcg17MTtfJ5TJzQisTkix4XHQXLsULgR2vNiDB",
  "key3": "4bSw7AejHRjGiG7hLY5GjjqwWNR6tSYeb2v7eDgmDdhCatFdytFAgJu5NdmPogXWgoxWHzt7Cn29jPWqqN6kMcNF",
  "key4": "5LmCKupYg86FvD59uQRtNoYMg278o2TPcExBXK6jf3iaoUVSEm8ou8uxJVw817NqzT9akAeJWaS4v7RoqtVPSizN",
  "key5": "5hp58QpPi62upVjgZWNyQKYXct496fRaS6V2Fck93UuAJA5Rui5cH3yzA6khWUvcgpt63v2A6ACGeE9BuGTkMeSr",
  "key6": "5eyyCGkVW5kDNsb1rbAdAouGC9SFDKSj7o6m42TqjRG53mDTkBdG6dJGSg9DAdEUvoHyDKqthhb1VuQ9VK9GyYtb",
  "key7": "PNodW216FKPuErNzbSbfXgMqYC1ZnSK76UKw4mJsBQFEDhY45YBMvin7FVQGKReoJpyexda5WzSswDTxRxx1oEs",
  "key8": "ynGc4BAoka8U8ZW6VrWSobwADWyAA5F8nkAdYKtjcKMdVrUcYjxmoSbBGnZEjzkJWuzMwgoSmnT4ete1GufE7xU",
  "key9": "2gyZ7ui3QzPwxFAKCmXCNzHvRGTXoBz9YCoSfQxov5fwFUUpj2JafPYs6fBk37YC1kKHsfHuUf54R1TbtMi8d6Uf",
  "key10": "2XE288xZvtYkzMTwCx3C7YwDDSXpjP6WnHBucGS9fEKWagTWZMjmrX2LGacKzv37wkhwLAsDe7dJHcHXRDa36AhU",
  "key11": "BLLCU4CsYPnk67unzmfJBDpcRaf6zrF75XmuYDXDgchPd3hFhZygxb5LpF6GR49uVqgF62ngLPqUHBjVA76Ui16",
  "key12": "2L3iT4kpRs5KKcDTWHg16ZVtiJ1ana3xEDRiNHaSSFixpt7a9RacjTFujMEQEvoM6CCWLSMSiysFVgnUQiyZ2isx",
  "key13": "37yWBrNsBm7QYBfZdvXT3GJy1xpS7JDtKXYEsmw2b4ZAATMJ2w2PojEKLjwAy29pdsyS1LBTqRRya8CWLxnFxvoW",
  "key14": "3zxHX7mEcLFm9sbKZd4kisKAt39NJPi3KT1qkTLeqffUy3S2ZU1iBcjpvJKFnEM7GFjyyXVTDemNiS3xHA2XiRmj",
  "key15": "5uxCrPkfWM56KTmGn6HHNq628PRcw5fN1v6N8QcLibvqg4uZjGTNknvuacWaxMmPoi4KuoJD8fryYz95azPuzgyR",
  "key16": "33TDbLx8DcsYEEUzEMRbBt3vYkNLZTRPnaBHTe2YAvHyh83HdY4cgcaiM8tgjd9qg7886CAZLD2EbpoQcwKyXVgH",
  "key17": "2KxwggfhLjVR2nofWtTGgWNc6D8qkukncEdngGTRwwHPuvewzBoPFAYbpyiXUTxB5yCgjdmX6mr1qmhdsDqYTjTY",
  "key18": "RpZQyWgUEuxK9gbeHJs3d9w2CgKuhNFvjj9nUxcwCVQKayakg3ndgrZEUf6TFFRn3XnbuUK8swjxD3xRA9chsMi",
  "key19": "LMfqrvKkAstps8o5x9TiCWSBSh71eVAtanUQTGzH6rjdKUDdncpfCBaLnZEnZYnQAhu6ULCMfUW1yyrkUK2pxKs",
  "key20": "4kkQMymJT4w7RqSfyAfpwJYnEga7cexEwVBPji6bmxYYdmms5Qf5JkstJ1SkaWjbcwkJa8np1mCueJYcKkYYfxF7",
  "key21": "39Wk6ZTh1vJZNrV3qAbhvWXAxai7gGxZ6xZYaT5tn1s8zbSEzFVbv95UNs5kWSCw8fCBfyixq8TtLGihfWQNydKx",
  "key22": "3qUkXQdRoyvmSFhqs9cQmW5mnF6ni4q4z2XY96twtbt1MvHbKRpCEmBgxomvxnMLfsEhKhEohZhjk7bcP7ereCiw",
  "key23": "3osLTLrtKgi8jRNdhNR73hpgU68EomeTzYGEUMxQDZMvf6vrKpZ66fv3x5vXWuTK2GHcfycJsBNy3vEe7QzjBmkr",
  "key24": "2YCkBzmdEiup7GazVYEcdCRpjtCbCK7grM2CfbyVRgerkfFaxdbQUKkkVQkMUaTctDeHq9VvJbFZuXrCPqiSWh8E",
  "key25": "4UhH4piGhi9xpmHWiGkBsSbPSRycRyVwtVcWMGPNTNRb3wf7146ySgcZDJrvxQZifKo2CBPyLc6gSZFzgoh37uZ",
  "key26": "xhC1Hmi5mGSgmUDDNXjaTT9jkBTNGREUYk7idrptgdN6oesbZD7LWE9V3mdQeGZpB6zzQZA1fegH2q37gzcMyhq",
  "key27": "2N34bUyrvReyeFL3kDJtocZ9cTSbSjcVfTcNt6gSd7oq6kUSGJHu7atFWL2JQanE4MhNcWKnKHjPHAZkH1M9H9ds",
  "key28": "4NQ1NF8kehcVmX81LR2nGAB1wz4QCAV2G8rNU7fCU9MQVdd5eCAFLNBsZGW25FwpWtMu61mqrqjD35xjuPKPLZbj",
  "key29": "3wraFJtu9TccitQL9PscUuYoVAucXbiSCDsfzXFr7Moo55ykEeVXiWZyF6xJiUCQCCX9DMJDJivfufbRs3AbNffD",
  "key30": "LQ4WZyeCXfhmNXZkSVv5fKqejzjd6FCDVBc6ee65MV5kvd4ZX1TCJCURyK8VLkeUgvJiM4CAiqKYNGPq4P2QFw6",
  "key31": "3EBuAEP1HN2HriYUrzxYRMHAFKQQgTcPN2zysZX5U8WsssqXrwb9uxgCXUyK7ufzTkF58Be5PDPzbUB4yCuzr1XZ",
  "key32": "5hL49B4TzoYvwx4gf8Stp9jqxnAp73kL6CcxCVkt7GpHD2g89yhnHhtGaE4qTtZ2zniBYKXrAWUhc3Qzdkr8YXTv",
  "key33": "3vwWe2aU4uyF7a8uWNiYHvXBvNXCxzkZbfPFqXWwAdJCBhJg8bdV2n8GWhcG6XNg4mWU2Dwnyg1u3PCYEP1ndVac",
  "key34": "2dcn6YQc1SzsvRQcq3bhrVaPxPUreu1DVuvHKNPSvLkVe8m2nHM6iinywwyp3y8xZhWQTqz1QjVjzMuAazwzAtCc",
  "key35": "BwTcLfwQ2jpgFpTxysixWqRzvGRgbLZ83vkDkde7CfjjYyBhuhvQeqNiHqsGeiuUemvKbQne6AAZZA7DcqJFdHV",
  "key36": "2M7A7abtfjpEyGyETn4BPKfxgrwZdXDaqXFJM9aWHMJwFiaYYRzuJgNEPiKyQwG2N8QXxfjReWZPnrrpdVBtUcdH",
  "key37": "63BvDeDPaoaQbs72khM4TLBdnXRD2u8hjQDRzgZ7oNoCaudm8ktWR39pXttVGaS4gw2Uc6h4XG9wnMND31Lh6jx4",
  "key38": "2B3iFfEkbjWYQezUa7AXuv8qTsLPMWc8KXMaPWkreipJ2b3j524RYfxpDiECBVwGze7PNYYbhpf1qm39z8fuCJK9",
  "key39": "4pQkyFn4iNQ2u9xgqCM6Rk4uZdPd9HCsYc1Gs8TAA3x82xRXKwkQUgk19CM2zH7agrSVRnZ36UFM89oiRTMwefWv",
  "key40": "2coSAhviYbghj1EDR2r5otm67uSibngeAuwGfvFnJyHwXJ6VdZijTYJEhZ64UTCrNKd3rU8F9c3nd387yj4JtbHJ",
  "key41": "5ekjZyLU3DzVaBazWqjiQ818XTbUE4ne7zFJymx5hDcM3yHnQJB5em4vv39dHSfZBdZRxt2bYryYr8WKWbFoji6U",
  "key42": "4vTAmSV4dD3xPYMiMGeZ3Rd4EMt6wBs65jLPckc73JGM3TxTr1AAXDQ6ANnrP22Bpn69DiTsk9MhH19gj58jPrdQ"
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
