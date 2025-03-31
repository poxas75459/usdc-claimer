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
    "5MeuiQXe4D5oxVH6pWoXc8LohGLbom2CJtAznPPCXGLvJ15Pg6bS1UaeJzw8XcDfQc44xTXhUoxp7YvQ41ikupD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fKzYeUmqjnMcRgYkdMH4wPYQABDVrybDcsryQzd8thw5v33WhTZtjMrkE5fV41tkMbB3pTLe7EcYiS3UnpR5ZCS",
  "key1": "3NVwc7Mku4dmHc1t98Fyx8Ye3NkAqkRS3nmrGArLo993Qwx8sLagW5kmPxVUbPb6Go8sJP34c9kf7P6EaPZ2HzpE",
  "key2": "5UXGjBf7trVLFn2ZLLGZSaFQo9AsYsdhi8W8F2BVLKsFNfhJE26hytVzpbpw3qdahitdmgewBh4bCM23oLXistCZ",
  "key3": "27hYCTxFJq8GzJJ6KPaxQMcsqdaruyM7kdcALNU7b7K56gtpkyjUMVD4oX3AYtNdnqvUbV6UMpTp1tfEGRNBoW3w",
  "key4": "2nadsPMQnEmcrEgZaVd4tEg6ysbgxKFipY63mWZatcovXXUrmDLCZb3EZTLbk6J9kcRhYoGWAmTKX6MYEiJsrj6R",
  "key5": "2yKFb4ZN6QKA2tFn6KpFbrePnqGGDCkj4KTgdRijnV99JQ3nHJRGYGzHyjZrifanedYWVRCHNT87r1TNb5HwHSs1",
  "key6": "3PoLgEGnzhTrUAczeZMnoqkH3DhBQHxN6aPjNooouBEEEZbDJo3SiKZhWBfWmQCtmrErV28iRUJU1xEHH9kMpgPn",
  "key7": "G3txTEKHL19BgG5PEFUN1pfZtuNQH4114DDzyBf5MFvhLuLcvSDMx1UMCV81vpME7hSFSpQE3rVh2K1pdhpU8zY",
  "key8": "2P3Gj1jrso7L72ueodB8GUdZpxDt1PoWdjLYi6siHhaArrrLF619RZAvSFKzNP3xXP8tsJseUx2hJWfK3FrNUedH",
  "key9": "5BjpzAm6V5ounue8aToauTnJivpEFPegypEyEorAsmB5vFj8t1krY8Jw3nrV7F3k6987spRx73aSVes4pVrFgfF2",
  "key10": "4YZBXtgBFJM5jhVHqofRXJjt3tdkbEskH1HNpsnTgPttfPti4Dr8wEEgXkkqAH7sbn3jApRTaSLJP9swjT5MPTU9",
  "key11": "2SPmC6opFJUrAaYrAFyuegNakLiDCDA6LNX2Lnp7fkpQ32BvAmcT9n7NmnUhY8utFzmoVTCb47dMcTAtuskGZEB9",
  "key12": "3B3gRuFrWNATTYnypbvbC9hXBTZhqgWivgUKuqZwYPA3TEveGvXCJZxs8w5KvPBBf4R1ZdYS9GkdzxVnSUTydBtV",
  "key13": "nras3p42jv7R5EzabrKB32AynP8pAccSsTokXPMpYFzV3hGinTXMUy4wCEu6i2neEYwASCtfviqQ15HnaQ4fUMA",
  "key14": "5iddFNFm6WzT4kPY54ZBx7iZrYiAFzZHQrkfEBwEkm92wPSEKi5rkhW8jKHo9fG7bNXPeFQsXkwGhwAZ9xyN8bov",
  "key15": "4iB6khP9q2d5wbmDmwP9MKRyucyK1uKgU4bYYprUhPVHBonnwRS9Ltht8RnqxferfjskZ7EHLKp83KYwzjxzUa9P",
  "key16": "GaEwivAhdKbZnuBzqYgDdbpktXcW7z4GB8EkHrJkPEeQ14hz1d4ZAskUT8mFJte5hKRbSfv8fiUndqhYagLbEEt",
  "key17": "3J7XBfhsLmxETTCZn3sceF4QPLu14962JPtUTpZrck9rmJFCZSQyovnFfB8x4RTMnwPz2A4CVinGEB1nLwugBa3J",
  "key18": "2UNp2wTz4MKL8NdoTkv7zQLcDKKAytxVZGoe9VfKgbP6Ds2v4NQNkpugvZeqUM3VRyfK9PTQg1HujSDRemXDFmdE",
  "key19": "4egjwh9EvVSKQFLZFmYXfwdijhd2vBPvXE4acE8YzQAw1VyvKG57WPxmqr3ounuyXVXmhLBCFZs3v49nZYtv9xa8",
  "key20": "5u5MH6iqVm2iRiNciJxpVtEvxFZMDztvmX1UUg1nrbqtC3x9nyZMJMVdrvyvsj8B67v2J3ctunyyAL9XyEbYeRz",
  "key21": "3eq1xv2b14uzEFfQvRUawyTEfD3mGNZnYDApkUQy5JHYuhzuzXKuU6fMKVHytd9ieXeZTwB7N8GCThAnJxzpaRML",
  "key22": "3qHsjDeFRwVYqihingCCvNv6QWXqPaTEhBhdu3VnkWr46Sq6AyCRgbVAH65EPc7xU9sYQB1mkKKoMqUvrTp5VHEF",
  "key23": "kd7yAFxYz1hjgcR799K4BCNZ9jbD6cin2bckeNnq314sUrx84CfgF49A7wb2ypTJcwmUWydErcApTfsjDS7U6dT",
  "key24": "2hts3QRR2MVRSZTUL9ysqizxKM6VyEdh3Ftmm28kmcvEFMzqjfLdvRRbPuxh6YVDer41nMKSL7AruU1uzqcvzTS2",
  "key25": "3MNZ1YumaUpXYcwsodRfV9TAQQTJWGLpoNgw7g6yTAGGUw7ELFQTN8mgWuXYkrKFyu81BNWvD45JFEBBXSuSPqrt",
  "key26": "4upamJCVAxJ6PsefiFBysYquUtUEMLuBEPm383YdoTTMwuV2krDQB9K94u9vderG61Byz9W9Vc8TW5PTPkoYBXRR",
  "key27": "3gnAApcJ14uYFtHyMhjaBnevF7MxF7uSaZQRS8HpA4r6QxxEowavzd4kPQLVaumDD5sRd81cUZUHFjkaEyXAPRHq",
  "key28": "32GH1uS4TK3YJyDPCRUjwyg43HnJNo8BGCytFC3acgzno9WHzy6CDAdFsHfxixA1xWyqRHsxAqaeToDk5KPwWQ4s",
  "key29": "2hqmeJzHxG4SVNHt7cRnUnM8UrQcMjVVbAXwWVnbigtKrC59RnAEP7DdKwGnbKPeWupZLd51aheb6meQYRM1zGEg",
  "key30": "5BXkJ8EPFH6FV2A1pszixwmdvDnHJuWEkFbb8EcC6Gemv2oheyarZJtUWUUqU1zkQUFmTssiLGq7wZrCtQkUXk5n",
  "key31": "43Yph5dqHW1LP9ZEBnyaNK7PneWu7iEpnaUvYLwVCurkwKmZyE3Py6CY3Tzd4mCCNfxGAuVexKSwi19igTTSREQh",
  "key32": "5pLduSQz2wmK3jmrRQEZ38BnssRz74iMh8CwKY3nULLtxc1wtiyKHn46ChVFZLQJAH7ECnwyonzyXPgYrYGkkUsq",
  "key33": "5nwju7vM1a4WMoPzmrpbtgzJ5FiPdvVQ3HBH1cKxzjEhcNMNEnRnxVAoKmPaJZCJsZUoSddVfomao1ikn6BrAtFC",
  "key34": "CWeQ25R1DkdXLSWazfvfmRLAnzgUC87StzsUfyMc7XbezTaEwLfnu2o28B5x1No1HKEFYoyP7oGcJFKQePJwayy",
  "key35": "4oN7stahfA9Fpi9MbDKQBSb9vW5GLiYAvbDeLwkzbiMGEDsU6w3VrFgr228auwHW4f4qxcFqT5bTMPm4tQbry6P3",
  "key36": "2Udaxso4XTvr4XEpihEszw4RUJj17QU7Mvpkgn1Wsc9Wo6Moxe4uxAZ2dqGXmRRgbbQGM5mpqFGSLBo2bZ9YrbGm",
  "key37": "4UUC8cUjfJCzgkx4rdvJKFMtE8ZVbwQ3w9GfRSJDNVMhDcmzFHwUwyWrzQYHPAgtkyfH18ebgu1acmb4Gop24bMo",
  "key38": "5RpcbiJPLu2i35jJUpdgNEAk7xhCgsbrnfDGQt7n2A5j6jK2Ryo86xtg9a4C7w6rSJsSqFHS4e1x5WXKxuMkxxmn",
  "key39": "2rtin1WEa8xc1Ckp1SUquzFTe9jdQ6u8UjWU2rzs2Q4eguQG961nejRsb59DTWqhSo8ohef6N2n3evxVRw8iuPdr",
  "key40": "2QWKtRCoT99w8qNahJUpcYDyeetrqP8H1K7474dwwngDtePNHs5uUbpv2CR8cW89iY8TWgSCiSn3HH7CNvo9PCLp"
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
