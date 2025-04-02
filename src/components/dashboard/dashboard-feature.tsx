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
    "4zwQ4hWzrUtzMNUBa3GjCiHxonSkmkTMkKDLw5oU1Bbp3QRWWTBXD5tJk3Zcwf6gA6hTDZaEAjGEYpfr4oF4mpio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FgJVT6J9kgzdGk7HJc9xdqrD2Sgy5u14b8ztHJyTLVhYFmuLrDhiXKjWgFnPEyYLgha74eEL55X8zwghLYYSWgr",
  "key1": "36so4uebNofPqto4GuVw1PG6PJ6UgMUxjHppsQbPybT3oiENxNSFCUwkB1cQLkFVZGRZkdxCpkeNMsxwacgBxPr5",
  "key2": "5GLM54c39s1Txmjibxu57fagy9672h9L4McXg4cneohWUWJYa6Kcium4KJSAkGmVaFoCUFC3zrengTz89k7ZLxvQ",
  "key3": "28W2kJHBJ3dmjAPNTSkHNisc47qmpB1wPjuymD6rZvxMSdEutzQzU9ZosbtBbvMgjMfdzFm21Ugx4RE35pXZ6LvK",
  "key4": "2219mPBLRndQfxZnq9BHhDAqFvqci6Hq7RWMQ3QgkBo1JW6koGucEv78FHy3Z1XV4STbV1if8KxTp7KjUpUfndbk",
  "key5": "4ZFNU3PdrNSM1qz6bBnxpZb2YATQZoDiqxUKGMTGjJKEbiz2XZEVokWanuGWe4H5xNh3mKu2EojsYgxdpj3MdxFJ",
  "key6": "3juapt5VbKmEhd85miAxRpGFZeiVBNy6Rp3gc4ckhuxm6BpUwczpeXLngDdBnMFhfVXg9CYQbihbbacPixXbbJN3",
  "key7": "65G65ybHs2RGrnKzZ5zo11vvczLMAk4UT8h6SoDPXEiAEqc2uMVzDsgWqtMVakxPHt8weeA5dmhCGLDWZmmgBFbN",
  "key8": "3MEJK6U7gksjSpNPBW2gef8HhujKmbogW9vi8Bjm7aJCS68ZVPyH2CoGJ9TAaG9ac1rrfjYgRiUxMKKmYZ6QWVGq",
  "key9": "2zgxWXKxHp4ASdeMyXNA6xJQnxjNHoeC7oEKTLPNwu2VGXBWhCVqnQR48a2aEh2JAGdYLTD5KDeDKddxuchECU9m",
  "key10": "44qrGdLgAjSxSH9gihnRenA1XpxgcBNiMEbE1TkVu7KU7wRHnTV9pvgAgJgtfMGe8rj3TZdC9Uuo8TmeeviV5scN",
  "key11": "X8kSPvGF2GBvNMacpUguVm3GpqebfhozediNhNnXtFNecnrYdMwXTbP7PDMpEPMiFpA6FaxfRVtbpyGWUKeBXtZ",
  "key12": "9JKxLfHNpesq1a2FuzXs3XvUq8hBMqx9GD8UkNBBUWdJxXUg3ESD7fLk4oP1YQmtzxjWhcCm4R3QgyLSERu4XyT",
  "key13": "MkFyioQemuHiY85HvPa5hG8h6bdSXzNMWUyeDivYvTU8hfzJKeoDFK8YJuDheLxTRXZMWrtNErAJZKjR43ztmY5",
  "key14": "2mbLtqZTtkpoxgXdwkXJXvuV4b7VGgwEswzi31AXvVDENBP67a3QLuqhhA98Xfgv83uR4jCUU6JNzxU9mCVKJtou",
  "key15": "bVEjjw4AZtsPm4CZtcxKwnLgdFSRZ1hYXgQcj67urTEtCM8AL4ahrnnFrJY8QZqGLmBRJPfsqZ5y2LtVeQsP3bs",
  "key16": "567WLBkAM4yGWcppW9pj3H6UCjfx1SDRfnH1xVpCRFvsmXYSsfSfzfddc6jqP2jgqxGBLt1W4FJ6aJSivXikLiof",
  "key17": "3T5R92uH3E4PmXaeg3wSBFzE9zBLNuaj521Pa1CpuGphpYeaYJ5sU6EX9wE715sKakbwL76anNSgA1rHpYjmv7ZC",
  "key18": "2j9ir96NnkeEKDWHABXXGU2ybLmsy1iZkLFsTGNBKiNcPYn1R4MDQUksHyLv22EitkArwEvJsCn7DVQSGFzSYKMf",
  "key19": "2hLAaSAvfkrUFHQJo9MPRq26Gz4cfauwEXxT671Zty8GJNQCaidyG7Az42tv4psXQmuCMt9M5H9RbS9rkYGMMKBr",
  "key20": "3qPeCZL9TZEbe55R9x3QGQAcc4NQVignb4PTAMgdgzsHNE8j2spccY1dwbs9KVPGZQGwP4UU5rfHFd5rh7Yq3yXk",
  "key21": "4bzjbYa8jb1H6gienP5eoPLQQVHgfxozMuQAx41S6WWY4CabWEhKxcHsQ4ErU4xiYYvohPWZxMZk44EGNFJfJp3E",
  "key22": "5GMgXGTrp74bAh3WXmZAMt19xWWThqVu4GfFV4TfhwVtzXtiV7GzuWeV4yG9oMWpZseEcSgEK1AwKTw2CRx2uJ6P",
  "key23": "45Q3PYkxW5meE2KaGbuowWssvSDs6Bj5VYGcDxLcy6VLZUTyTXCQSWumnkyM8phX2BqS3dqJdSHeH52TWxkHfLCf",
  "key24": "24qtQYVsXJdN656HczKfxYJN1jmoM2tTxGbE6UUbd1ysuqBM7SUAjrjDcEiZZjceNQ1bnB8xnMXmG9m5aeZ5dpuB",
  "key25": "2z4geFA8hZf6HHhEtnHMwsPMJ4PK3gcXXpBiV7Ksnpr5xU6HKrhpJ8eAGoCZprZP34wzeWVxXMMpoG1iGCataTaJ",
  "key26": "2UYDAh3XnbDbcVtrZkXzYEE1wXKX9rauvWUBbTu1zuDxfFYr9TUQwWP2a7Xp2hK32txdwYZcTzNdraML5dSdT5EA",
  "key27": "3DJkez6bYL2UiajUzMqjjgfdD9DHiGiwroKnpqP6kbP69rHPz8NWMg8iQ6A4D8DMeNHjzrAXDT1J8GNPUB2Pvy79",
  "key28": "2gvh7yffbWtu4f3DyxxX1aajKLCGgXvj2iVGMYbDbRsZCQTRo2pvPAd2fVxXMTx4V81859DEFTv6b84JA18PE28Q",
  "key29": "2bj79r84Pd1mSt9erGYdFuQzKc9iKDMHgUCV8KYYBELLxGzmqvZwB7jxFKL5vNhqkDzM69jYY1exmcVmKnT452q8",
  "key30": "3U6zZhStJjdtute99cAaaa9jJoZsfRuBXKrqk4Gf1tLQe7c7wRJCT6jZXqKAEt7w9h2zFuJDrZGz3qxBGyQJ9nWw",
  "key31": "2zCyvLVpcn6rGBJfpJE5LhpZYoT62ceJLkumkUZGLBBGMB9wrSra9SugNzr3xYkaDp8rSr3jzZoUuXgTpmY1T8d5",
  "key32": "2Jv6BkNuYSFg5m2EpJpCUrMaamRoYSe8bhQN17PwP9RWJKChJnSRXRsJeKZrmgcBpA7UzvKGzccX6w2MrwX1iatC",
  "key33": "65r9SjYhhHUBGuox5LNn2QAXMEdZ5PuhY66FJVtYp8SMXgv8Rkj4RvPrDyrVxbsy1go2jeJKtbc7KMQYbemuujRo",
  "key34": "2HrUhBLAFFatfKoyejbFPDrzimx3dCr7TvPJ7oHES4cViiMEFs9Eu4yHAcJLDCFyxgQV78CVLhL1e8jHdbLk3k4k",
  "key35": "38aqoP2rDsKLvNoyZJiKS64i56us9FBxyXMNXGwwHUBHv6PYzjGH7XyK9ggx8UMR72Gr8ka1vHwuFGy2UB9rPfyS",
  "key36": "5Pjnr4xj9brpz8DZFUXE739fsQFDbDWANms1JkV6UwM2pNxdQxnddD3wp9dmkBC6wcEU92Zf87cmSjPAqc2doxMq",
  "key37": "3ja39FSeqRs31VBDkhqoycZfL9VdpwR8ScsoGN5EeAfbnhUF5konFyJ91eGf3pohfFzEocfmbh6V8fnQrcngmPkX",
  "key38": "3gwY1QHAd2YvQcNBbFVv4XtbjyQbwDDHfNQp1MnYVmJuoixkgWMfJGyRNwBqeVJCUEeiVpj15dm3fdqsNDTDhx1e",
  "key39": "5hJ7WsKZqjKoP5Kaevw3H2dfYy5x9sgVZEb6W3Mapdh5AdnbSqrZ9gGxeUHMzR7NEnqS2qHn2TdYk4QEcD2RT3HS",
  "key40": "4jSxr5LEGWVseyHJNY22FtQkCAzPy84rQESkH9SjNCXjiMFh6NRtLRaDjYpTB29RZDdhJJHE1PMcX7TPcMUerr5t",
  "key41": "UY2HyN2DF2MvbmLVdhZPvN6TiAp3sCiHP8G9ukGpcbBF1LuAj54GARiFks3P3taZyCkAazavn73DWhuUinyz9K7",
  "key42": "438UmSif7Dp1npNDqpEKfAQaGC3AMmtPNz9pgDVjoisW4dp9KFBzAUdjdKpMezfpew6AuDHhsRUBGtKbPgVGka29",
  "key43": "Jo6Tuu7aJ7b4ubgKxUq4YkAvn5LcNUiSZuE1AXGsxzAQB5jAF99xYV8XVxY9UXdvR6n9g7vGsvua6CwW5jRtEmj",
  "key44": "vKeXBVQfGN7xiFy7aPsRvvy1vxeStdkbGzLZenjrfXqTr3h7hhRVpgVpEXb6d6JLXp4kHMbmdLevbuRKcs47FVD",
  "key45": "66Q23NZs6zp6DmoFrvANkrR7ekC1cCci7KPSSweVxRV5dVTmGU71QxsJHrSq7tMQ6TRkNWreiCCZqh2iJMxwnhdz",
  "key46": "2qDpvMASdAgF66bgcthmmmvBnSti4GgDwmN59MyK543LKacfGaYdrjAxqjcPsQzi8taryXmB14DbCorNx3CYHWx7",
  "key47": "34GMpGj93KsChCRd2Wf424ijPJYeuhEDU5ET7hTWUuExR22qaWXVgyUJf8yGtBj66rCtz5Q4MnThnWDopwyUX1R5"
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
