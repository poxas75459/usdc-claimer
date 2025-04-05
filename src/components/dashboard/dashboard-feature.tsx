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
    "3B1PXeuyJ9ZpfE17NukHVfgn3nBvnDz8ebzjizQNMnGJzNQEyXYcrAxJw3Tk3fiYyQzSQ38ySL7v98jAAVsRsVn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C95bh3jNffC2seK1PjxbcqqVYQzCAEfcRK6Z6C5xEh6GWzQiqsvNmP6rsq7hJhMJFYyuDYtHnXnKbn7ipr7x45q",
  "key1": "5LD1teVqH8H7KDe2sVzSor5ohtomvpQTRtZGQgueLJQvEG91MXP1zJQT1MmutWdJb8EttVoM2nUogRXkKc6zajV",
  "key2": "4tB1sqsC18YYGctdGjoZFiN1WD8xPVW9dQoy14U6PC8usL7AfZXnBUYkxHB9XEC2pK7RWX4i4hGue7M5ovnapnZc",
  "key3": "4pCBnFrHitHCjrwMgrUG5cLjNMBixuBzppEX84KMwAAazdzLi3HRcTdYiS9hFneLonMard5sctBZNQkhrUSo2vHg",
  "key4": "4b7hhNjbuuoEiLG9TKFS4Pby6A25mK9BNdwRECHQwRVC1cxttv3qM5e6abjFQpxpBoKosmvHUYXtN47zkmUXcYLR",
  "key5": "DNTbvrmX9o2mSA3FLbqgqN1k2TFZFm6ebTh8vMMZFTGxGXyQs37vbwFbVNFc59AsXbyd9UUJTNcG8oCmrbfchD6",
  "key6": "4wVXGW8bt1q9fFHEz8hvM4heZDCrXgDD1176zKeb5yFFwSk64nZ6vSuEpUgYqynACc1pbtbic1Y2zZdwyY8FPDQ5",
  "key7": "33CK5AsVYwyMM1EntfzziPRhDcTWsqAub7o9SuwP9NEJ2n4siu1ddicqVFLvHenoMcYx25xkBRtjBMWfrj89vnye",
  "key8": "4SHDWw9413U6D8PS7KD6gQ55RPCiKCWohVRNYcd5mHf719wyPeNgECuanNCwQgNs1g3uEcV62Xqxwdh11yi49hSV",
  "key9": "5uMfjUwxnSsnSF32qiP2sKMAFJavqpzww3ssSmFUcTvp1mVs7FvxT2izR6JyqGcNDxJqRVSHjZeiUDtg5wTL78Nz",
  "key10": "4wV4qn2GhH1TSnpwSRScA3NFsHeAGQ8KcwRQpdfCXUphxE8oy3P8BS367sMzHMW3AiDfyPGKb5fTFtXgaZXJGvBC",
  "key11": "fQQh7arW2m4Dsw61Hu4z58rSc8JNryq2d7MoTGNsKHxXi5n1VvkojbqqKNaigunPBNg9hKfE3QkYdh2khLPeGqb",
  "key12": "KrcGPmyVGzr9turhjb8VNFzQi6AcWfTJKU2vXqhBKCiZoosSS6ec68vgerSQtuom4PCijgJBRFaP1nWxwBVPKif",
  "key13": "4RxJi1BKazNyg31A62wTodZbAzW4X71BnbNu5Ah4D15DEqpSvFNf9D8hwhSwrHXGbWfDYMpJpbxBCpi3X8BW4EkX",
  "key14": "4QuaB3DDod5iEKWuBKgvnv8C98bkFNqyT2TorNneWCBqPbmiLACfqHcHCZB8E78ccxndXTBzoKaZMsVVndgUnHDd",
  "key15": "5i3beNs1jWaktaygKyiy2HrTTxUyEbasRr4KShwThMbeME1aTkZGPuSHNz3qSQqJfN4NMPifpZNtpqnitkcc62G5",
  "key16": "3JjcqdvLchWDqngQzJiKUTkqt85z4aS16KdyBdqL9RPBq8yPjskBjQH6gMoqr2YV4Xj7kYQUDGuaC2VSCmr55NWJ",
  "key17": "4YuRSzEMc4aiqzwofw2rvVEuQCctwPjWnS1EWW5Y63bRexMspVpFoVB9wZGthnp2w1gb31k6F32Uc2SKjd1bEefK",
  "key18": "5YY1RvJ82MwQKxzRc3W48UmgotWUzyfMyL363YrHfP42wYhWYeuA1pMstD9vWHDWQeuzdFBKRWKrxgXmPaT2L2X5",
  "key19": "3wt1UNwtSwGsP5HhbvCZK5HvuCueW6BMCXEwRPCM3zrBMXqeHAKJud8tu9C5KPd8GDCv4kkmt88uWFnp4FjhUKgW",
  "key20": "3rbxY7ZKUa73sjBs79keszBo96Qs9652mRU9dV7cnU56jovBhM6MD1GaXaxxATeVX86Z1exLsERmBvmmrYJbjtxn",
  "key21": "3APu1vLE7hctWnDW1FCWXFNAbgDnMWiSUKPZdctc6Tq19YSc4TgwdhTHkECMe5pWBph9NyVjppgV2NtfXnvPEj4Z",
  "key22": "23YbH6uR4L79jeM9FRjZwn8KirAvy5BzuQHrre75MynVTJC84CzoYa62W1mLCC9wsP6onXdEP1EDVzULvxxXCt8T",
  "key23": "5fxSRe3V9tw2M4RkWkE6jy2TycPptcsed7iJ3wou2Jji9acHNcYwKn59kqYG376KtTcQZbRpMmPJN3u6wu2DMKzS",
  "key24": "28712Tux7t1oD3PW612ygM6yBEUmSryM3NuHpq4w2F2iyWtosPtbrSVwaM2u1RA1VKSy6M5Mm5BCnXAtATyoRjYD",
  "key25": "5D8NMj5yZwKT1xVbksiNKfbfGvdpVuWyUW8zK4ZNdrqjtGAWeto6xVrzimLqPUQT7jktyiuV1Ku2CM6rQqYoovB3",
  "key26": "g7xHE6YGF78LJDxXzGvjqhsrHhsCmPjXrCxGKU3KQHoCGx2Q342Cw3Uh1X9UURLWJbZUPpF6GutpH6hC2S1mAWM",
  "key27": "4x1tai5KAYByigt31jheiXk5XaTfvgFdyD6UUNNsPCutiDyYhDDi7pGr5AXaqkdzcCvXNxJ8HozSwbRzggute4Ni",
  "key28": "2GvFiNtHbz7s24G3TWVS9hNTS3CFLNHAwwUbb7qjvqWKkZyfXEN76gKQB91xteoPKhZHefWZQ87K4H3XKRpoKQ1M",
  "key29": "oWmfL5VhsFzqpnTpW3Tbn7A1vuvaZCUYibAZBqjBoa5c7bMMxRE5mM8HMVNtSLgQQZj6XrYrJcj9tiuyAm27YBf",
  "key30": "614jdX1HrNrkGyxyUxukDfR1pHPN7tLV99GWyYyWCmpMideB3mCRAzuS6BJGbv6mMRqV66cWjcAPnyA7uRJmU9ZT",
  "key31": "33gxoJxGy14eVBf45VkpcWs8WDyet7XMhLDiNsGfYBA4h6nMR3hsN6r9PbRNmD6W1zT1UMM6PYHmH4j5tigt3sin",
  "key32": "3LCAAue631zUydxLjhWjZebPtGRqzRkc59fYNhgiTvyTAVzBECXsFREWR35UZvaQVqEnfSkSCZYcJ4duqcrfb6ix",
  "key33": "3ZpH6jTA2e7YPuRzGZqGccF5VYfiKnoZFqnPJ33p4nshMWB4LtCkpU6WZNvUN7HYLd7GZA3kSwN685Yzc1vVb3gM",
  "key34": "zJ4QYECLz4PqkkuYMHCqjhPJfctDXphzSpUJmYHkxijfywYmvBCzEuJGhVcvmomZJMUQuyphpi9fdVUNVt6dgPM",
  "key35": "4aGsjmbGLCBDZb94mZoc5p44ZU1f8uNmKv5cMnZRfqXXhE5kpkwfMQgNV52iQa9jNh6NRgXyHPAagoZfqufz75Jg",
  "key36": "32eqeDgu2fcRRxLT4y5NCR8dNa4VR1nmUEBG6k1ZwpBmUPNGHVPoueuiQSiSLapqiZf3Vr9B5Rx1bdBs32rStd6t",
  "key37": "T8rr8bXZiTGLvqw36mB8qGb27dzfhmSZNSUTZrfoMhsUnEJzLgAgx1jqNgRFDUDmimih49y7bkx7ZtmMhXgZDoa",
  "key38": "1RvZAuviVTg1cn87RDmumso9JZkhMrU4ndV69Yatj9CuJ6NzsipMP9GSpfcQ1x1k8euXT5LLp7g5NiHS6P6zE9b",
  "key39": "2H1REPVKh4yLdyZKrFzv178YwYcebcJ7wy3T6hgmgd9TQJzH6pRMgVr3Hs1uE8a9VGKPzMWe4pGSEECf3jQafvNd",
  "key40": "FVxvN2mHuozKpKz7ReojcrRVo3uQTpgDp1kSDa6trzBTZiqtxRzgHMhEkxvjC2SCBiWfoUg1EgwRrhXxEnrjTH3",
  "key41": "33pgRkQQqt5PpXcZ3eMNMuo6bUU9hBhY8KnAunzhTqHaWfcgtFxJQAGSoSktX6TyAKYenU6gEudNi19w5JTjCAHf",
  "key42": "41a2Y14v7A52eqEd3PWLTt3eEBzjkcm4MhbNYeYV2deGih3PSDbykiLZjq23ALs6aftgnsKx5rzbprVhhwpMUmH1",
  "key43": "5QK3prsdoAw84Sh1SNXTMzqrya2Ftkf4ZT2X1s3Lo7vaNAAFWFARaMZ1pMJP6JWaJAC9SwhVPAJAaoqhHyuGhvGR",
  "key44": "4yurvzF8AFZjZ7neABzJDLwi14EDyXr9w5XkTQKohw4UYcHbKTSchWFngx7zZzCu5yuQneN5AdwyNnX97CDMWxoM",
  "key45": "3DTtjYiEMDxzFZHCeeub4YQiYpqKDuTcppEvNx1eSAF5wmhrEyKzmp78Ha7mom9DqswpZfR7fUpCfUuxaPsL5fns",
  "key46": "3RARiyfqnSfadrtQ8hMFNvepAhFpbquUdKiaBvJPwNKMtJ5DJfZRsRrXmtM8mbv8Nd3z1MLY8ueJFETrvP3twiHx",
  "key47": "3kjbystmKaY43QgA3ywvH9APviVEXz9SXUtLgDxC7RnNAwG67FX5xmjDDaN1nKLCwVdAgcgUPTjb4Ct427GefoNe",
  "key48": "3hyHcjzMQgw4g5Baibr6nKU1KE3ZiCAonTvLp4AzMmmESB6Uz6q79qes93vfmAMfq3xisiybeiRs1iw7Kmcc2Tqc",
  "key49": "3kCwHeP4rMLc2hCtnhfwriJCcS49T6BJTUbvnFGtFmNfhrhusUcCXUSRiuY3Wi52nQKNcR6vD2V9LSTmqfzakiSu"
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
