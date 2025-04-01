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
    "nVR8d9Fi6NtB6gdZSRiQ5VCeC635nPcMseqrqeNEfrusDcfmmtyCfUS29n47aBnfDJVLEqUKvnRMGp3d8D5HoXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JU9vHRUHPFG45ZddAhQshp7bVATy192z8Wo2Hvo2HddYGyjAX2PZB4j161aakYsu4ybzLFdxZYnKXmWnUZZzV6",
  "key1": "qvisynGvoiDioMY8QLvThugUb6WNMgp5ykGSUPUbRMBT26QXRDvXeaojFWZ7LzDFDrpvscZth85pZD5TUXBLS7G",
  "key2": "2B7A3KjJDMP79EbF2vfP2UYVWEVUmShCnG92ArCtvQfii4JUevEZrPMxXH1FLjuoTbb91HgE1kekmY9izKxEUQAj",
  "key3": "554CjDW7XvNfwpnd6r3g4MfiVKo5wTMbtUSXFLYJRcJ9oePb9NtvA6DbUVcCGKGgzs3BjbiDo12cv3DYoP5Zt2q6",
  "key4": "vBkKeUfvbKAhz5omy7cBFnfDBPk9cheWi1WWzQnJzCJ8FqVY1g7QezkTgfWzThCvXRBPWKWffiA5waprB8PXHcG",
  "key5": "3n2gxZa55BUMNxWKgWW5gowo9T63xXfFJZsjGUD2cHNnAFZYx5K1Wg9sUrQs1xm6kbfvupsh5nViN8UjGtbcJ65R",
  "key6": "E84f6zsAdtzXGpNS73z3p74xZKzjBPyA9VZXGd49gv6hnZNPXZBrfhebr9kfb6NXA77FbBFJaM8pdV5iBw1X3M9",
  "key7": "3CGdHFWrqAe9a8TkEruCHguNUzFBk6V6nHje2GBGzZkPRqRaCH6fHxqV39EKv81Xp1Cw572fegzos5F1vazR2Lhk",
  "key8": "5qrGk7cUejQB7A1f7cZQh1MoAwu51SoHtozuo7oHgHB41RhouNE2yq6oEjSQG8ew2uTbnh6t6ZZ3W9JZhxiPcJ11",
  "key9": "3Z7NUeKhhoTvJ39TsFTtzGG7QBUbB3T1upj8pQKjtRoR9y4YeAucyiSckBBoov4yK634wcfBnnkJeH5jK5mFUFQW",
  "key10": "xbGTCL22Dr16Le9eY3uzcu5k9teNd3WRQAGKRwfzH9Nj6476PDBbHHDemZgtM4Btqvf9M52pP6TGt8kMYd72Gv6",
  "key11": "2yW5s66EtbcAvanjHok1YaS7Akwu8VTkMAaLLXGsqTwiCsATfDzJsnfaUnTQeLsXVG5SF7ViVFNJ7e24TcGKzUaW",
  "key12": "5t77x3AccTnJyWaDtJQRHLzMXvq9qdUcVUWgQRxf124m3C7h2h71eavwUUwn2sgudTuPWSNYTdNJVAt1v69Bd2Xw",
  "key13": "3bYPr5avXfqWVH7SRg85kDecv7zRjVohcjv5Fi8Q3kgo639oFnWNHwB4xEhw95jUkafjiFdWLQfef5qkgRb7h1FN",
  "key14": "5nUHEy6WNGnBR3yP9DFcUfYoJmzxEM5KUogaWxtsxQHgxs4y6FPobbRhJxqtQWKWNR1mFzbiknUoAzSohWyQGSpa",
  "key15": "5HteX9Qzu5amGAp9unLzVN2gDz5Tufxd1oHJyusGydLiwj9b2UGfkPWVXKfN9T1jW52Jvpu7rUVEySGSevA8bTAX",
  "key16": "2rYfnqGxaP1HQ9ZbQXGmoA1cRv1uEZZ5jqCvPyH7CRAf2C6zEq6H67GdUuBYoA5yYgqDfcAScjq6uAjnpcZWrkLQ",
  "key17": "4DYzUfwo3iPFbYkah49bvFJZYDFYQAW36fXSTaSkQTDB9yX8XdjNyux74qcgYWbVjhtRxFqXWox8CGKScxDopZzj",
  "key18": "4KXT4zdbkFyTyKWz2n6mCAmsMG7fXkohqviWSwLSmEgzpFbCSTeSN3ZzfELgFTUQzQfNmFdYWpyydBL8xnVZ5NLn",
  "key19": "m3gjDASkrHcshLMovgPFHrWHBHfzWQMQsVZvBi4pthQboRCikbomvkQwwaS4NSZNYNQiSGkeKBi7SueJtuZmnQ4",
  "key20": "3sLQ1odFs4km4eYrV9ycHSHM8ZyznJpUevjduWgyUz6rEbYZTuvev3FH8kY4aCXorSu32g2TRzzAqSjZ64rfJd4M",
  "key21": "5UCZFma951FXoKqASj1BRZzVaakmpZXJ6pMsKB7tfeDBjASnQxs87SL6zWsWLM7JpavxCy1d4hrvu2zXfdXv1boJ",
  "key22": "5P26tpKM2xkFuo9gUUYTKASExuMPAnZarW8nRfQXXNzCqDxMdSkWR54ZFswwryepJnSwRcdysBhGJt3DTrkJHQBk",
  "key23": "4AeA39hhYMK6JEapAsXivSUr1idWerqf6EpJwbds7JcxbegEsbfsxVzRRdvuB69drwgoSQr8rsedQeeD3G7yjPsP",
  "key24": "TeT37mLDPs6xxoc4r6YfYyRejExy6fyx3616bGcewfENsxs2Esh2FoyHxyhb3UySeQT9oUp3BC5ARVksF79PRtQ",
  "key25": "122Lxv6qHFn6gCZvrXTW5EZfD1ZzeCBSzqQsaGguEPo2oZhqLurueNr2RtEfSJ3SAizBYEx2kkvFaWs6CAuHDvVy",
  "key26": "3hLRFRqV5BYWMz3oGUnLuAtm4EkUN56s4GyfaJUQDZFhfMBSSn1rsy75KamcoGCPc5evt9MrgQbaPrAot2XaTzia",
  "key27": "4VA7kU2jGDGcmJDFEti7DPf4ooxLR8dVMwGRLj1zPsA397XvjXWGtzjhkkYxgJDmoT4vsVHWcbby9hZaTwGQZgau",
  "key28": "3ot8JALunJnJ2uyK6zhPWHLradWZKC7oxyVKYtCudybocFY5vQweSLV4b7eiJaLt2wzHPaK91pxudrbpvCRTwL7m",
  "key29": "3boJ2JoeRqU18NyYnDoiSnMorHSC7kegEQDTpgR9AGpU8ptF7rPtTCAWBund4Awfq6y98a7Y7c5TpHEJ1hhPX2h6",
  "key30": "2ZE7qb5wf6FZzfhzSCLWSJ3nYURZ7u65tYoc9kUk8AQsbfRzhKZsMwnB1MNAB45vg5iwfS1CY74BM7proXRE3Uwx",
  "key31": "5TB4YjyQcjNBjVTTFKS4VGeCZXwjRVBD9ThPsTLRx6ya6LHPs389Rc6JDq1KH1dQzmVPnkUzxChHeiwGqBEy9Sis",
  "key32": "3dpbPTMahPYvbhUMk3WTU1NGnznGshepD1xfoAvogc4YDDTN3fdbSYcCccXPhac9RxKnCNmmc3c1fVfN9s7gJVxH",
  "key33": "3FefqV2bdqQwQESYHsgjAyWg94hYHFJiFyi6am9CZSKJBGcFfbz3Wbtegc2MR91WvabnBJf8fPg466L15RHEp7jh",
  "key34": "5xSkbNShJZRF9QjVXEpgUkJniZTFqTjJ7z8wX38Bq15Azqq7YVYESTq9mVn7bigFqxTNVFZdVi9kW3DTVKK7SfSu",
  "key35": "4sP9qNc6TPARV1uzJvnqTd5aEQoAdSywNrbbYHsL9JT6oEWBdvFV8HXY1tsDsR9xP3SLm8Ac2i8rJWA7nG8PeSGB",
  "key36": "QKRb8PNzzv6y82GbYTQfbEzBGRJhnAqrGeq2eNh73KPkSR22CKwhkYxiewTKtQh1BEPKT9zvcR42NsjUmp4WYag",
  "key37": "VfTtoJFAewermMvc7tmVrLJRDPH5meL1nrHHRqn89mhATTKLkHyXr8RMH3MmF8Hi2qzkUMTN1G8qvAd9Pp75f3N",
  "key38": "2NmXgEBSLc3jroAqEDirYmcxqSqgSsCMCpyD1n51da4aZm7nNmHDrcjv5uCgZtKA4orbCjmQwVPQLf2WECBUb8jd",
  "key39": "5Gb5RQfUjGPm4ixEhnixRtDkYcmcVLyBzAJBmVWKSqJkFMKv4fzkoHVAgEAXoqYgb3maNSnPrmivFM3TvdsVQtxp",
  "key40": "4MjR6qfcZmjPmqRDM7RMst7bT5BqKRdUrM7bKV8TsjWqy4Yq68dr4aMCWgLa1MvvH59eBQuy7YPKsCBHADaaQms6",
  "key41": "4Ho1LD4zpsU92PzZvtZDXEBm1LmaLb9QGgz7JHrLUKxPHkoLNSxaEKXZU82ci8Ur7JdqbEH46QDF46FzhAmiXPbD",
  "key42": "2NihJcqPP1waizQe1eBW8rk3TRL7n1jZxxCe3rqyvRSDsC9K7HVRpSUgLj1Y9DJyFWWFXe5zJxsDJYBT8QR7YLjm",
  "key43": "ZQaArGvSRhTg3VR8UiJ6e7XD7pFVGLeWUbPDM4XtcEt2aZ3x5mmx29cxTY5Eh21LLsAhBFv1BFhJxBhzt4sBobp",
  "key44": "4HbjK8JGcBqFFbkVqTfgKzucuhKjWPamGfrudFZTZtAczDU1TcbimKAcJwSbPT1ySQw1z6bUEiUCrPMD3iaJ5bgY",
  "key45": "3BPk7hhQXdbCytBqTUx6DgUqtwSXUMuWM1QxXGSaTzauNCeuouXv6oRQDQPAAVo8LdDj3AaGyaBd72Qpu9ntm6Ai",
  "key46": "247Ke46EEn9VBqXynZNXZQaeVBCKFHLvFZgHsRFXZW2A6dTNhQs4nRamnobZACy1yfaAjXnLx6oVC5x3VyrazGkN",
  "key47": "4VobsGsD1xyyM6gXKTcr5qWUuSqtGXUrUJ7uyb4PaPLJ4krriPMwyVg8KRzysHAmjxNGzCzhMykHbz3r59ivN92h",
  "key48": "Fm9WUufVkcdJBn4DvZQeQzr8tGpBFmC9fzwbTfGzpaTr3peK8soq1vnjk2U5yvmtiKtqsZeVpxZR2YkpzoZF8ZC"
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
