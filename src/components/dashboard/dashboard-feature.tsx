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
    "3KNkNjhCrqUuACD8rkoeqaMku3eqkmigdPKJsnCsFY3XuGmhgP44qpNEQjB8xrh8JMG5E96hAdP4xHJBmNnXQXko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AsogZ1BYqN5zKFWo7DsSdKDZNBg1RK8NW3jyTpc9g3mgCzZL7XMiGgDWqr2LJLuXUkC2WKiYcAcxx51dcfENBTf",
  "key1": "3gjVpoSzutpUr88DgFTrDTq8qWk12ScBaP3X2JJ3Pgjud8nBS3RRChxygXs4hY4EyojFSF27v9dR31JvuehNXuQR",
  "key2": "4xNFp4ydXSK5FbN42tUa7amwCaPEkwc9mypUdYraondC5VkiKx7judGkrTbnTBQ7MWQrS318dNAXuRARZAPUSaTE",
  "key3": "3zrc6BQaRTksKqpZC89pwsyfbXVWMr5Zujkme9bdpAM7bqPN2U6ncDbRuzwVnfzBr6iDuU8MW1a8MDmLadt3mLLC",
  "key4": "7kwwX4ree542qnhM6mzJWpuaQNGDCA6JxKpTimsbb5ZVNyh9vjoXArVWeDhd8NRtiRsdV7aLS9fEpXxcVCDWDTF",
  "key5": "3YygP7ZmEBPWFdkPLrPpR9Y8vRDKun6kCJPwsGuxbMgJPNvSpJjLGuCkGbwhzQDJzPRx6QPTkfc1jaAXYmmk5ZhT",
  "key6": "ZCsE1FFiL6iC7brUtJeL1jF9XN4tMc1aQwyN8LvUP7mLLGsoAN1hTYhfjkRpFkgxcVf8h582BTAuVxqXaUk5Mgq",
  "key7": "5TCuiabeWk7q8Qa6k5TBgUAWXrAKhoFjhBYjyGbpphH66rwPmLp24JRvqBnk79GjVeu3z1hQvha1rKWnWujp1F48",
  "key8": "3Wd6BuDqGRyFgR17TkoKMRq9yv1cXDwr9UNTQdVk2d6TiFgHUHDMrf3NbnCo1EeGeaPsyXVk3NmucNTZNqEPKf5w",
  "key9": "JDM5oFTMABuaoqBrxgWEGLN1Vs3rXau9UyKzzxzYU6sGgjC97bJWWguraPVma2zpMAcs2gV1Mm6285JzLG6tpme",
  "key10": "mZWYxbWYYUnoosA2kreFbz8KFNg3GTcyynrjYsPKjUdn1WDR87V4pFtm3VDjr1PWH8KB934hBzj1LyK7s7j2TKm",
  "key11": "5RMruZSeY4fX3mgLQGiDpbv3U9yaG4FBKrnfDc2dvidRs8fzEFzT8U9sA3sVppvmKHoX8yoZTkt4ojjUhurLdM2R",
  "key12": "2zwHnQLjerjbnNpYTwAjHVdDPLLQo7DJbYjXyivr318oknoKt6QBLufJoWTF4Tb2UhrY1y6MmeYWK44MCtLLXknY",
  "key13": "1bB6ezQCaE7VMydiEAjz1AVm4k45gNW7EfhSGFcF1TWdYogGQTVspmS7csXikcAww2a2Hcq5pwaz9ezTHk74CPK",
  "key14": "5scV2XZ3tQLX8kkdsp2fEXhSNg1Y5uSfFptTrfQKJxATGTeVLfJDPP9erzTNZviKWsW7sGkmkoEkdT43ED8E8W5b",
  "key15": "4eupxBN453Tqtse7VJuqq8JAxWiFRUEh6esZ15wZJyHq5HRCXXug7otGqe4oxZpKGVsgMyHXG18D5xxYcWcx7zar",
  "key16": "4BJa6rZUyYdqx7FUcbMdAd6VTiY7HXzKMFLNQTVUiLxjafXHNvZaQZehB2MavriPqGBqqcJcKo5gFZN3PiBHvJCi",
  "key17": "3SUA3FzijWCL5tM1na57aZBfkhY2R96JaSGXPC5mKtMyjtqgGVKJu1KcgpenCafEvFxYb2fcMdDtKahUM3RZ8XDi",
  "key18": "38PxbSXxt3QNGxHBV673wcZxkqSZpRvzEg2aSYqhbi4QH9d5BnLQ9tTvGG4bjYyNP4RYtCeRuRKfkUtMx18thcsJ",
  "key19": "5H4ZFx3LpgoSB3HwLxwEvcvistk5DevFQ4D5KcqkJEp5jqXB7zUM8vxqHM4H21np6PqHJMuxxNDLWAif2R9ynHC9",
  "key20": "vBQjrjUqrYK6qggK7RPHW33oJFZUbCU5Th3TVjpMwwJuX5GcHbBSDUGaeWL42FQ4WRDZveU9gjCTVf6pBCkpZa2",
  "key21": "BygNgucTZTubnWE3tGzNron9DYdNQJ1qDRWHazYvhernuzbjfi7L6kTDUjrKV6MPUCtAwPJ4XqRhnztqkushYMq",
  "key22": "2MXixWrH11JS9XiEcdfaJhijxCmZT9xad6hdsQkPECq5pDKh1yEHiSB1SWXhgV545AabSonCe6TyGmFXLfBN7CS9",
  "key23": "v3B9f7CPr4Uxw9qtD9p22QmPPEj362D5ykaATeLTYYrmuGmbKLFzwudAA42BR5j3VEUd5N6ggEfjNEMeejsmgnL",
  "key24": "4BvEK7JhEUrwkWggcwV2bmjk581Ju6f621r4ZH6dkbbwvd4GiWtHzK8zkBuUjJNU9rW5Ys6WVWJrzafgzTTBTM7",
  "key25": "2V1okSz2mP2jd2iLyWsbtPmvfCTUuRQQjdXRewfE7uCkdpVem7UxygzCHRXYjVtpzDauinpfKNGTytuF7ZiMPZUb",
  "key26": "57x9PmxRREmhZouRWY5Q93mQrDTcUsTVxmsErsVLYXv5wjGJxupXDkgX7L3GNoQoHfVa2PiMpE28vWnJNYFKF6Fi",
  "key27": "2Sedpc7XCYdAUUo9DVh1DQvPiQyPjS4p1J5dFv6YSVMHMt4cxHmvqAKXB7y2hZRdgaGRs7vpjyVvd5qRNWz9MNQJ",
  "key28": "PXtrymm8XamzpY7p9dYJtW2DGiA7pfx9LJLiMjxMrfpiwygJwMrSW3u2tiqZF5kgEt6z9tcuR3gRNAHGtM8VCzr",
  "key29": "39Gv8AsuikkPcu1Rx3eMWKowZ5koWEzyXQ7vbzxgJsPJqbwkUoxpRx5xxtpKGCgg98XfdaUD8TnjLQ3STNX8WSw",
  "key30": "4eMzMgDUaaDvEBoxW5poAaeBKDSmxFm5TF5T6mGWDau7gzjHu8VwTMK3tTXjiu8QqWZ13uqCPncga6H8AwV3RtVZ",
  "key31": "3zUAVNWrBKsMz54eyBC8XLNUfQsgCULs4FpGg2jPutpLQiaKErpkivPVT6MYxuC5NrQSz3KHmY88cmWJ586QNZPU",
  "key32": "4FyscQ6nmnEUyERbULybZSfGFk5Pb2hG3hMfXyez3dWCBRWreSpZztPJtn7YNa29DGbUXXekSVSCnswxgEY5CanP",
  "key33": "3eET41KbfwofvNW1S9xU8ruALzwgHGMe21siaJx1ApiN7UgSaSEX85KAdWDpPYgtRzLdZ1zDYbqbTVaHf6RKSyzn",
  "key34": "4a9uuwScsPyXB4egksdUmdz5F7jq6STaCVA6MQxGy4fmmqzVJEzSbpKSzmR8LkMvTq2ezVmY2KSPkXpAeCnn8txg",
  "key35": "m88cTybyPRmAN9Qn6fy8sGcRKz4qB3jaUvumEi4c6PfJ6B8fM1bGLmXeVUsXBfUTSeiKLTJnsZ1XMRyrhizvyEq",
  "key36": "5TTfJnx1h6V9iuXzDrymEw64sAAkBDuVcBCsQDgut7ieQubugfXtrWKBoa3pC7YvqABR7bFFJph26U1uUzAyAVHV",
  "key37": "4fzNwznrhLaUqhDhstEwceLBkbDDqekZ9XAnS9codFJZ74JiJsrEagvBQnLQSPN8YrKry9qo84Y4gPU5E6E1uKKh",
  "key38": "4kWvmYvxCZHHCtVdvUwPeHJBSdNUjedmHRDYQsoEYYC6t1phWvjUskfMFPGjkUSkMcT3u7HjXoni3nv5wVPBB63T",
  "key39": "5YsvY75DZsLNq5rYGLGSpqhN53YzbxyXmm1wySsaJQGwGhGVVufjCDJQZsLwbWQQABs6UEkqWMcMLcoqkt9zFnpp",
  "key40": "3uRtDtFfJHuMNcgm5EmrdiVF8cTRFkGQcEv65TcRXYWCqgpNpMGcrLGwkggeLTTqP7ynCJ5Y2qLGpYX1pBYZYnV6",
  "key41": "3BkRMJwFZaEjjLzzuFFQGasp2uFSvu8S577KP7uk6AvB8oG5ikDgaSK54qfJAMCJQR3JaPi9hvRekyk5mnJ8gUtW",
  "key42": "2a66c5bR2cwkQQAbFrBzPZoH4TWcD1QWQvihW1PCWoV3GeQnzJECTb6YabqXEaVkJJGAs7mXehG1FKA8ztZD65rU",
  "key43": "5xNiNCq8Ds1xHQsaoR3kfsEjw5aTksFQrJUtJJqGCGHQWf4zQuiPT2auMSw6cbZbDtNLbybtkgWC5X8cQ1kc5nzU",
  "key44": "gnwKyCqJBYoJXBxoW8hoMz9pYrRXidSCF7A1ag9SUpPNGiquC2io6KFvgsWQLdzHhjB9Hc3ZLfe73aBmtcM12BQ"
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
