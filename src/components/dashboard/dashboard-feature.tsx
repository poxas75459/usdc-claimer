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
    "3FcSiqW96qZZ3EpX5i3kTNUYssqS6V18XKxFnrj7gDRT5dqD8BvGszvY39fBXirXtaTapB5s5eC9nAu6K6En4nVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhRu4DD2ayjG6xjB4S3J9UGpyybf5k6pdmBzvLMEe2qDNxnY9bsqXAr8ZtvgbdwFb3tJ42wnLjWF7ToBh17zY7a",
  "key1": "4tcMtLyhQe5hXwEzze82bMSVeggSw358gD6EyceDHaXmtRL6FPpBL92Ehnq6dfxY17gEncdbxtZguUybTGmEpZdA",
  "key2": "4mA36vjCYBsUQtSJw368UXypxgk1vRghD4CSfAHDrbBEXPmZ2pvz8rcKAef6diM8XDQHoJDpoWkre7c3NunhFe6u",
  "key3": "3ffMb1ViJQSwNDhkgdAMuC7qyDBR66EKzAMhz4Rtdv4vaJL7EJTwJrN1vgh45F5y7pmZ9jo82w4xXhNg7xTBSxtZ",
  "key4": "666y4LQ2r8PvF8NkYXs5AvRKQ5FAaLsyathjbmrrrTSLRYJ9ubL5oX6HhoSVq9qUXvaxxRhZAPDV6zWWKW5AEUw7",
  "key5": "2Jf3xmqQttShJf9R7Pfv3yWBac7icLwFd3Lgin5j4mfj2M889A6yNo1nWZ8pLKqMW1BGCu3YZqMsVgK9RGYrkNJ3",
  "key6": "4w97V4gH91Dx7d1WXtH7NW54GKNH7N3GduYhBHxKYVGC8q96K23jXUzBSzJyJwE3CR5eWXtfHqjS4Q5y49PXseCF",
  "key7": "4bzC4yvMZPoRboVH6o5owupiy6Nxu8UBmfxtJ7fhVMkU5aTkq4Ka9MjsotpaSpv9Msgz346kVo9UAa9yjmKqhqsi",
  "key8": "i7g91wRaamoMzJYa4z4cQJ1eJoYx7g5dEsxsAXxmciLSsoZyrcrxGKVWnpUjCdqtwJJw4wBCmsDLtNhiR8uuMBt",
  "key9": "485RrWQEwbpdHEkja3VgmaLyQwVVqTrt5YFZkmTtJ54TyEwtzW8DVePbecNCadASEf5kHApXgWsJa6o1p6KdFKt2",
  "key10": "2bvKkp6Hh3DMhsUN1PhaQCb77fB24UZtLQ8wGXnNdtMT6vJaJqWGfYtxeAkRcB3U7qZxv8kM9aV4qqBq7xsiyTnQ",
  "key11": "58mNncErcv6N6aZeh76PttjHyCjWxYEZ1PEcuM4BqfWcWpLeDVed1Q8e91yHhW4iqASCuWZgeAmvChCYeYLV37Kf",
  "key12": "3ybUPgjYiHBLXyBb5yz32NR8yb8PwqNF3XhAUsVXfqG1rKFTcmjpNzCNEe9vGHUgWEz44vGFgkjJ3EHggGM4iuVJ",
  "key13": "4gUbvCESZwXaWXnZaDSMjc4uedyXtCLa1Wtps2eG4jqMFKComWeTtpCmBKpZCJpgmXirF4Ptd1eLVQPDGwZ3NEzG",
  "key14": "5Lpo6bG1R4aHNRMgnjSEPx7CHiugudQUdPQcdyQF2zBA1GApxEVMoRpXZT3fiZwSQRsV7ivMSHcr7fNWj27U9Tfp",
  "key15": "adAffU65bxtBbYYjUxfhrozUJvoY7xCsCPtvr1rMTqLdR6xokaeqNvA84G1zJsywLofMoLvvZuQ53LCvZv8Wo1r",
  "key16": "4kcwSSZXJkGq2YxHrTwf2RDU6R2w63pSKbX2pGxtvafyzrndXUkVMK6UQaLsEfGnagSv1uAAruaB4xpJd3ncqGZ8",
  "key17": "3MUR6fDM4pAvSQK5YndRGfxuHc99kmoggsBUFPDBQh4pY3XTSHTxACSXKGTMgGV9grkMNZWeXsmZAR8QwoM1f5ti",
  "key18": "55AyroH9XAKBhr6CYiNscbkNW2kD6xFbbNvJ6ySr1Jf96GioDdJY9rPjHxCPHKH8vwJGMCzgnFt3ncVwaGwVEdSj",
  "key19": "2Ro3UDXzm2aZw3kzd3QjXGaf8t5GSTrYuANGzEAKLjdj6EwAmdw3gQhSsfPe1nkTQTbnzitCL74HpRkdj5oGDHU5",
  "key20": "5FBZFUem3tHb2FCWTaWwgTUuEK7wqwuJeLZEaQsEf6AXmWRkJyPJJVPFBuXbQCVgTD79ggEQRPEJoHAapQ4BZwQs",
  "key21": "5FCRyH9Z1a1P8sHchZ3BM1rnZBzENcJ2W68gHzXCweQTkd1gukPSR9aAFt87YE2h8y4P6kqZTvWTepJGLufo16aU",
  "key22": "pFebA6m2SvY32APyDsiNHeL26hc7FXGT9A4TmNrkMoX96ok7qnJMiHzfdXXrwyA7nvXcas3StY53DKbE6BvaK8m",
  "key23": "65z51EL22ynkp9Y8Pmw56VsUCYunUKJe5eWWjSRztQciu3Z4rbdGNSiteWKMau41eUJCuToR45gFsisQCkE9KzDX",
  "key24": "5mzf6Cp7fWCwbaPDuUkb5xmBapzWHbZJkTvFpE1VEejZnx87S8rzYb2TdMZEsJqNjFMM4rFSr3CG5pSiPCttBH4F",
  "key25": "4hWkttWZQ57CJUMPvsz4dNRvig2mmcs77KCXVLpCK337CJnktDU6S9ktK1pdPtpV1v1uaVn32iL9wREcZYkUxb5",
  "key26": "5W3NnMPUfJhNdtRtNLSTJnd6eBQE5VBWqziMfNXKrwMi6KCnVEyJXPBez69PJNbfHqvc1rUD93TfkyPfYv8r5A9C",
  "key27": "5KRLoYjoVwfbB57ifxxb1NGZM8CZLybKe99qe1rjFoP1Z36ZVHQdtxrC3Q3jfSYYSKDfRuchJjnPrXXa55BA517P",
  "key28": "3cDGL3S8bkpwSqw6hCnF2Mfm6a7J8gNK7jBT6D2w8UGVvVgspD6SgkY65VxHounWSCWWxdqL8yUKfit5w34kXm4o",
  "key29": "53YgG5N5THfnNpyrmuTaAULyCY5YBNyb6rqTL9wunL19HayDeuwNMK3j9o7jj5iM3YFKkgQpF16MPDCDnNAkxLjp",
  "key30": "4SDDMit7TYBQ12RUycfoNnmRFVPCBYZJVYQ31Ks4Fgt9JbQEic4rEXPntnDVdwtCLELaeT9M3Vt4TCpB73yE8BeL",
  "key31": "k53Q5FWnNiMycbEBvCNM2HbXCbr3d4LYcRQ5my4FtxjCzfzbZEksRnozDvrK9G5xGz6jZAH9QTFpzoFpTxdDnm6",
  "key32": "3uq1ozUE3tXNxSN4yByre11BYi4CZXiKwYk4ACgBkiT7TMVfG96yBGiMb5ZuQgoNjSkfS99GUBuNC6wBCmNoYv3q",
  "key33": "5LYcUoRKpjekQJCuSmaK42aUSps2sSoKvx4uZUfVUMLxoydsmAKpctLnYE7QQcKFfKgQFTwNoASZEvVzWqaWXNGh",
  "key34": "63GA6pveh8fp7BBy4yMSmcZZky4PNA58CaJ1wnmV7Q3zayzF954YqhZnGWffX1BTQSBa4U4s8QdoTpb7jj4BVyL1",
  "key35": "vBZJ3G14X9ioxXztL5oEudWJ6YHbgmEjRFpcngrTDNLKSxhRSgn92DHFxJqfTFhpdSbGLDVSx2oDDwsdyJZfZn6",
  "key36": "2DE6ZoSc5hdYoftFaCvcTk7gYVujxWX58xr7BT6x1awh2jfZ1DxPyFKYcA9HhipKPJUDBYx7YQQTSUmmS77VMgx",
  "key37": "22j7xfHEQ4v62icmRRKvSJeLV47H8dhU6dXzzfBipy27BNbVgBjN7oTQwyZtrr1MAtyr2CnyRPS4KoVr7Nkgi2A6",
  "key38": "vkfkE5HbNTLBAoKGJgD7fu3U5snJ7j9YyskJ6FzBsVNAMLYS9HqCsXVTiq5KX9X5oE4RGQVp8qPF6zBzsnLD7WH",
  "key39": "66MGyj138izSYUSa1gejZPJWpi4qBd5fC49aSNNyawWvRNKgVnY3XHgSccaQrXuWwsLH7UENFhyV2SXPyUF24f4z",
  "key40": "4HUomsqpMg15geihhocsAzzriGDz2Ky9Wfz555Bn5PynFgMxm2EwdhNVnDgmncs2zkczWEpN2AFjjm4e2kGxTQSK",
  "key41": "4JriQXBMB9KMk7ScjhKfzTUXFxJeTCnoy842AMGptnL1ekFowVyRwbkprjYxNYMTjgEanjvuVZGjp1TarcW84m9L",
  "key42": "3gwXw3UZnRQsP9UprRWQDREjnAmYqxpCVoDjk5a9sLQMEEkj93zzavhBP6gmhoG81SWLWbGabUqbw9nMmCT3Q7pm",
  "key43": "4jxXydv2LNEGTgR7Gd6Tbi1WnNAqxLUVmPpJRpUcPQbJs6K2Cits7CFN14QuFnN5H7QrDAgm7nTBxRWNzRZU1s14",
  "key44": "2FmCRZa8xKpLgf3HUavBqkpeheLKJ8tQbq2qDiLMTGTQcnkknRxPsrARDPSSbNeNXSSnditv9pynMxmj6MZtxKtd",
  "key45": "2kADf4si3rpnHHMYZZoHLrwsgyFscscLcfrjiZXFsCXqRb6zvYEHfuKNGxK6dY3o39W8BMmovj3TnSXLKi1Gs3dp",
  "key46": "NXohdcjuPzYYPZSdUjDmMa5jjshcBXgLKjZL8AtNHxwXi2tZ9uNi6tV8xURoCeEm8NQ9Rn5BCecrgFB7hEq1zYs",
  "key47": "4n9RPccAeA6j2TbeZSaUtEfhqtHwXcecznQv3zP6xZS9JebAQTM3sWFRUVb6CQ1nM9nmc1HT3dZ9zgKcGE6pjAe3"
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
