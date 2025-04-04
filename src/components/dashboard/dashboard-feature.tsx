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
    "4fPLuuRjKAhpxC1ZjB2m1gdDnFewMkL5wHVtNU3E51Fd3UNwsfBFJwugvKPZv7cb2N2X1tkw4DRqbjAP4sVbFmRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arDgMsrj6WXXN6ibzY3YbWFjyRRy6kbMJ4MD5hZA1Koe4fhs7VrDiC43rVbCwy9UUk7ErUWShgeaVsdwcJVVPZE",
  "key1": "32TGxGda7dGwFpVwmocVN8Ss9KKThsSCFQfmGb2ZRfYiPCsD66AfRjvtgoSbCTS6DmwGAqk8Sz7npSgyrF1GqW6c",
  "key2": "2ht42FvamUWsnMUqw5hyZCrWsWiRgeseupkSFAuBM72jnACZyiFHPBmkfmZ6WnM8nVp4RPuEDGSZPBtqJpMmQsfX",
  "key3": "3WVuj8Hz9VRPcc78orMsQNhUA4QJNB3QJKzsRe486YsQzzE7y6jkHBNFqwTVBMa6Mu5LkCiW3ZuJCzu3igJUopu",
  "key4": "3mgM79dphWyThhAQHzMySJs9NyCqCejcQx2HZSDnv93ErUyJDWTE4pAhSRWgS1KtHjExSCjpfmKFtLkpoeDFy5rd",
  "key5": "kz26C546CXHARpVo5m7doMbASCf3GpQqGsyMfhN87ymNpH8Zu6oKbzfnfCFHSakCTyso3brGdbcfmEGX1cND5x1",
  "key6": "3f5uvbN5ZNeUG2FVNQ6pGKFHtrMHJeDLhHKSDdg7BUejjvi62xrkeyHLBds5Jedev4kD7CVe4Aebo4T3MVjfXbvz",
  "key7": "5cSNDLo9heMB2BZxyDovfzmd1C4BVtcqmxwRDySYBFddKk67AJ3HmdbhghixRm37uMAPBJnavwkRi7D9rqiSAMhg",
  "key8": "34VXzk5mxBGPJRMwiw8EJvBK3EgM5uRz5VZRutwaBvBgzh9sj8hhmvhKcdSqaFYVAWQ57fWW2x9dzYUWQYhnuLo2",
  "key9": "4GBDQSoRGvZMLifKdCMVkwibfYPXWxMUsDiCf1UedUuDcE1XwCMrsZrCSfUwrdxDWuJSp9s1gSuqPcjhudTD3sYj",
  "key10": "5KCSJeXAbgTdU7HxUPkuYYgzzo5b72H5RXE589cyKFCu3KVuQrnDHYeyxLt5cVbtfPUoLMPfrnhDnFgFYYW3JWLR",
  "key11": "9a3ukRejPZRhETnmxDsVoi2qHZQnBjrio34NNfShWmDrdZxKxc55YPJDj72Yq1pRxJKpzGV26vSeXKy2o7FfzCL",
  "key12": "2pFWhRsaANgXPoiWvLE4a2NTAxxn9pK7qy7wN1BhdvteT473Mhv7X2H3uApLWFM5a95f1KvPXbWeYaxbMLxUh6yK",
  "key13": "55ByELxZ7GGbxX2sB5isGHmDhSKrncUPCJbRuLXym25SsBHeCitKH6N6xS6g561w2whunVZc6N7ni6kEs6qUECra",
  "key14": "3g9TFrPcWwYnk9Wk9d8wjFk3XRR6MUmgZYqjP5EDAMBKNxr4vwnJDZzokoA9vPPS6qZWBgpnY9qeS56pTPRe2Gih",
  "key15": "43JbmQwgDPAd1WKZbcYpjFjrCMGHA1irevL3gQPE7reTzPStBnc59YSG5nLNyrxwRDTt4xaBjxSngQYaduDSGkhC",
  "key16": "5QZCxCsBJxLeVNqNoqa6aVueVCKjxyazEiPZb2FyQyveYPbcVLTGVLf2zYW3uR967NW31VF6zs4PKFQcLkTc72Rb",
  "key17": "34uvva8VJ8cYtXR1CyigZhbKqbSNx6uoW5KfTQWiw4ju329DbU56zixBbYEYaf6hwy8RrzoMxrJ7SjD6qSk1LhaX",
  "key18": "4qY5FxjamFn4EnyMtooBbfPhuZXtQCyGmdvAU1yut7tQyKRZdPMu6S28sbHAJpkXNP9s5633LzyroBWypWNexu6m",
  "key19": "iBm9Ua9yNr3oh7kTWJbJmWevrTQNbUnJNQVYohPoCGafNZtHcjHjB3U7aSnWR5gkvsm38azm3skLnhK7TNPgwZ6",
  "key20": "2KJbMmHxvtuS3YZZaG5RV8ir1gfrnmJvtjnp1wft2roKRGbvA2hsWzwCoVNCUyRXwWYTrCgYRPNPxYVezvkKo9wi",
  "key21": "5vfXSqG82EgAtuKLdFHzH1cdo8LRwMMXvC2KP8gE2a8aQsp8a3wQP3gejQ7AUxjSbDdpzYWRt6bfqhM2eiJZ7BZb",
  "key22": "5Mz1GvxJWScfweyPnEJVevZCQXpBUxGGZAyUAFxmS9ubXgmnwgzRuivzK2NntXrtAVkr7M4ZzBzvDiSpyo8fcDFq",
  "key23": "5CEu7bpHZKPH27Y34BthZu18VUPvR7M1nBMTbKpBbXWvd9xi5bt9jtgDLQtdNZUaMnC7eYTGq96PMwA5mVXs3bqr",
  "key24": "454oGBStFhd9R6SmUQu934tTSqKeNr2Kqz9Wq1ST2KFCQYpZrroDK5S4uX3KCKBenAHcr8viunTRwDaSMiHYQCqb",
  "key25": "3ZS9jgb25byG93iPx4cTFotRc1TFAZjefL56JaqVy84wqywAGbPX25Q7ZAEhrqEx6LNLK688eABGt1y55Fu8CW9s",
  "key26": "2HRiaMVs3daK78rXBERGooJ6xaezYnaDSxctKd49M8LXBrAkoTQ4gHYVjazs7nwBqcmzQLvHbmAmsZTArXQTSnUs",
  "key27": "22E8rLGodejmpQHzmZWSwWb3aZQ4GXi3URJ1tAsNdqdcxWTXDkjpEC9Y1RMwyuh6feSPCyZgPz4i6Yi59Untw4yp",
  "key28": "fdpJWPPS46YRiQVwRZzMkv5zxPsF4btNwPDEqJf2hurDD1WY1r9yAuggFdXAbmKnT4bwDYwGLzx41EybWiXdR5z",
  "key29": "LgDKLt1z2XaigYrjTYee1a3osF4nRXCvWfQd7gs5GoDAmC1pPYXereGiYGojg19SSRyqCDmhzspPgSwaXduAXsj",
  "key30": "qdGgrbBwSmDcmMRdKcpAvPyrFTy4VFtSfponvkL6zpF1JWevHKsMX22Na717HMRFUxK3uqHTJHUtgCaXkAuPkvT",
  "key31": "4GPjr2uFN5fFLDBUG9irrfwLuejnR5P4H6zJtr9QiuGfWWX9yR7PxErWCXViWdh6DZ4o1j1JkgiAoxF22SXQQQFu",
  "key32": "27qvvFqh9kXZQiMCKZ1hsG1U6EJqzXWXDrAdJAupQvRZpdCArhJVVnHmSWXESAZ4NcxRYXziDyKw31dv3yMpqUee",
  "key33": "3TmzL5ZgMjnTA6DjULQon9EtbusZfm715vL2zcbsYjpx8jKFtT4xZBssaAFSLTGkQj8qoLwrGiSdcCZNBXfY62tA",
  "key34": "3ySdrX9f13NrRac37Te7ZFwS4Q7E6CYvt3mgifQNzMYqV1PHK1VCDU4XQj5ybx5FLtm5WT19BZoRrrxnD8h9HSda",
  "key35": "2kqqkx44x8yiBCZbTirTj9oETR3A6NKHuq5QK4fEEnHdyqSTwYgQmysSpJiyrPUTKKPis5jhYKK3JM835stoCnxT",
  "key36": "534Mz7JewRmKxQVqqPsTUEvNA3frcNaoV8KiywTQ412XdRLU9nSGVR72ivb8ekPjsSjnCWLix7yfHCA8hnhSymPC",
  "key37": "27AWQ3AbF81PdarRsQmJ8SsYnUyQnq5Dz3v9H88MwwTVS72mSoyRNtDGyjNcp7BGzZLmpNp4Z3o8tLJkpj1AY2gc",
  "key38": "4nZZVGXXjRJiVS3fjMGDKAkUPuCsTuD6f9sqNWaCoCfbi1qJxjE9e2gd2QKfp79muCESNc8zXD2MffkgJtz1v2Yi",
  "key39": "2sjWatxNmBwuEJfQYfWiyw3UDDJamwtee9BPnGuhuGcKauJ3vxaqVLmpy3iMwyocswktEjPDLEr6QxWzzM7nKsyH",
  "key40": "23tHYhKWSKfBqARfoh2XP3VqdjfPH2Kbt3N67zpdaouory6sVw1GtrBdbySs5MmUCVcWuLMCYcbHUxW9Znsh1ccM",
  "key41": "4JMgj9Yxk6mhCyfrEsLJ2gm411MSvrwTkFRw3YDp2ozGA2nZv3qhdXs53nd7Btjqo7o1qEVv4xUNEwoDyCA21Yph",
  "key42": "3xEVPX2mKVb5x1uH91fq7Xzgb2yUe3JhKgs1ep1CPonujMxFaCqyFxZBLrYTdjDDZmnzJAYBd5iStZX9bNqKmnXZ",
  "key43": "4aZgUTxs1VEcTBW99pJFkP3pjzLt3gmxiyfX1r6ewqYNTRGo3k5YV7ZS8WamEg3BWdBWaVr67yGMx5Jpm1SQGzMF",
  "key44": "38pHqBBrzARmdCnWs1csnLAji9YwZYvdf1Zugyg8ByUXBppwyzM9UGdcTY2ArwE6ekTboi173AQHVqCH9Cr4TgpX",
  "key45": "UWZfJqLgXTpXjYaVFmLvtiEi6KSHZs9uM8xGQri6ZKVcyDUnxE7xPfSNUmue7ZJCw26ShQqYuhxECh5oMciUCf2",
  "key46": "3X8o8Uu3jsS7tLtUHFAUVoMNfh17PTaQdfUFkpUqonipSE4mW1YaMMwPTWJ2iHPYi6Qrxatjk9gMRm6YFCCHE9Cb"
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
