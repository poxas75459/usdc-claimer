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
    "5R7uizuc8sQ3xpwugwFTF9PjZU9KFZXnB61nCyH1Aijd4UWiXhk1fdegWaoJ5xY1wvNAAKBhgRrC3dH7MufmnC9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNhEm4fYV2Tc4K17G9a214GdvN4RkFHEsm1mQ15p4gbwcZsGR32kkfhKni1TCYbddnmHAAZK1a82SrQjw9C2ALt",
  "key1": "TyBEoSEVQrYZEFCamGuj3ttyT3KVFdsCRvjGwi99k7XkHaoikKN36TqMvkuuNnuUJFTPGU5tjmvZjiK51Pyj7hD",
  "key2": "61vEogUN4xE3fo6aZERQxFrZkgYD6nkkotiniPimE4uRNDiZEdUWGFDxiq5Qf74YsT5XCMm9hKHmdBFme2tXHHxf",
  "key3": "3fMjZzicQziV2R69wYRzhBkPGwjGqmobYZTwDBFd1e6VVG4xeoW74H44BME5QYjiLvpAWoSxApzxEpT4KaNmf2t1",
  "key4": "5dWeghz9a7HYK8KhZQzeAdGefdMv9tMxhj3X77xHWzC5utrCpvM6kGcGnjfnZVLgcefd15BX1bBJUyrVLKfKJAbN",
  "key5": "7u7kVKnoAR44J5MRq2T8ETC95tLp8X563okaqu7B4VxDmGfQ3Xqa9uQQaJSgsUDaWbEjZtep7RfftSZCwE3nJqS",
  "key6": "AZYSob8EDgT2UKxK6EM2NSG5tMUad8U5jmMZ7Q3p9ez1KR6kjDN51EqEw6EN6TK8kwB7yYAtLXuCTZ11rmdpxJW",
  "key7": "4LaQ7xrtg9MXPHE7PedC2SCdyCV74JLHg6wKjrpRYEp7X97pmfhDrN1dqAQPm3rdy5VYWPz7urtjUkTgKeSBB6co",
  "key8": "3WxthN6Gnn7oUNKiE3ubiDJosjNEjcfxeQJ83UnyFsN4qGTHid7TnkmDr7gSBc5uX3UP8o1oXhNGR6P24kQD5iBW",
  "key9": "yg4sSreGB1Kp1pDEcS4U7gtYYrjeWtW3QnZmHgpqFYK2F9mryJcrtsujn3qZwk72b9U6ByFLtR1p2EY1ttKoP8v",
  "key10": "2mvfxKvUUDAUTwC7VUyaZ2vYjZHDpdNxbcjsyop1pWZ5NVNw7XZhXMU7WZED2MYHJDzNsjSxnPZYxtWf58WPeUdY",
  "key11": "4xDJru4A3SdNsXNMDSNu2uiu1UJGCq55ef4L1Ysa4SgVW5pbppiwMrwc5wKaHbfV5xnrmeYsLj8i1TWNWiqnGqNK",
  "key12": "5ER3t1K6PGKzbHqqLerG56DogazBwJLrWMAFJMeLzKsRZLUFHKmgc5kzkejg8HrXuKGgbCisA2uqkbhSovxomXoA",
  "key13": "ShefD7JmdUN4hhpkCMHmo5fiGkDMpf4K6stMenLFgnzsfzUwxYtNqP7Bqu4wYaZmsxQCShvKZRiQn4HHeRhrSUF",
  "key14": "5XyYzKnhnrh91DnkoeMfUWV21zu54LsrAkPgfiNwJJus7FHQq7meEwhE4Gzqw8CL4s4YkPcQ9d1vELkCGDCRaFqb",
  "key15": "naVtEqWNB28JBKtXiqbdnSVcvmTvXMnYqQu4hfCh8HE6zGKNyQuXHuGCoEDVt8MQZYvVH1a4MecFSd7p4TWbLYk",
  "key16": "2YXJTkcuWbL4DCca6YGqrGJZUN7Zq9ZNhuQnB5NG5xWKiTeR9SbMVqYLKb1G7VnZg9FCVLWrZxTZWJ5SwTya2NkN",
  "key17": "4FHbo9CxfV6NfFV1S2RYmEEi1HtWYL6SfvRHbEiN45PTPe9jRMxNPcoqJsxMvztMoHAFMQfdasdQ9qjjWCS6nPH5",
  "key18": "3fYk7iukwvLvJFKRxhL3K26nZDcgoXff5KKdfMVRuXbSZFVTZLQdoUD6QWWGhHadyyiV4wNdDMaJzsw6XPh7jo8m",
  "key19": "5vKeHUysu8SDsSWa1D4JHQQ8zMfC1Y2wMNHEyniYUPBQTgLw1B96EN8gXtYGYRrPqhdBrbmDfJcrYpbVdseqFgnx",
  "key20": "3Pj9P1D3MiSjezNVf9Y1zTmp7GZStr7yCY1LvHtt5giU8TZ4rtRXhNrPaaTPCn9z6Ngk7NRpoW3Ghc79v88XqK9y",
  "key21": "4sBnngGCurirusqJXJBySi5Mw4dfax9SP5dgb41VpAgwrQ7DdshMBL2hRrtxLL61gwGJFuAXe6UwXnLMVEWtfCYD",
  "key22": "5Dxnm5C3FbtFozX3Gj71QA8UY4K2acaTn4LX31GRCoxJEiRrfFZ1QTDtzzeVF5aMn6KjHaw9nZnTiWUNStdryp9H",
  "key23": "4yjsYsVBEMkgGgwGk1TL2jmsamdXfWUcigpWZMSwUWuAeSSVj6K4H9vHWmL2TAzV5RU94ehXZdtN8NuEdjRdM9wv",
  "key24": "62zvbjpNfKiinNw6ZLannRoChumDRRavVffxcz9shwy5nfSYscMjbynkTz4VFvsjuwzbTSZhyQ8Z7RNaQ3xeq7UP",
  "key25": "4rWML15rFD16GG8T3Bz4Z2LqT8cpp35jCA7tQK3iwrjvQCZUuVzX4QssLiPKgtenYWZpmhzPCDL11485MZpCtC4J",
  "key26": "2ip9gcxUwxUNogpYoJ87YiWqvh3VXuoJdYr526M7zDBekzBuDnpKe9xCNGqDzeuVZ4APWztpRHJnKeQmCz6V1r8A",
  "key27": "2mrnPufXbu2VvfTMmW79d6xBcuRBrFzNm2SjT3PVMrM5q3Tg2j1PnBLbLdCzioWmDFnk1xy9CLXCWBuSwmz5QKPY",
  "key28": "2eHqntYH9Lt4GX6TymgbopSimPagqV2JXfR5GHqAQrc1AnZVC7ey4AuPordZ2aG29Sw5h5t7XRMi18XdgT6ChudH",
  "key29": "4KReEAVXkw1ksXGTxx3dfeCnr7Qphb6rqwirotJJzo6MfKTo8wPFBHJni3pR3GWenpiP7tqhYcbGAqmBbKcmsik2",
  "key30": "4cVyUHoB2R46rKXURqNUbTvrEwei2NL4RkcbeA8vnSD5vbrzbZGDrG1K3UmTyjzgkWm4qKqmM9SBiDZtoMEFZXRk",
  "key31": "2EESajGnAEP9ckes7GG7xz9R6JJA3ENDrLPbhToqdS6xozwECCRy4dEkWKSeyYr9XJYpUAFqd78fJ4dFbvUv252g",
  "key32": "xbzNknjSRm94ZSKgGwmpWAoX6iNBVKzhoZZXXefXNVKXQu1FTLeu2rkDiYU1bYiJdzSb8LPnz1jyGWYxr4GC6Ax",
  "key33": "JJne6SuCMNNxAPUvWxMBbG14LQ7a3HQ9ghhDi6GLEymfqu8gYSfCU9CkHLfqbkysmtGfBKt6woUThiP8LL4JVDS",
  "key34": "5qoVzWFjk9QArkJf4M2ExYCZcCacdMHsZNVEVwyHE9BKkCz9X1KwsL6hqqfStL9zWs5NsLXGeH8EkwdgX2H6q9cv",
  "key35": "5kcxkXUjyFHgNdhuvadQFegJLU4ruYmaJULjmfU918j5bNDaekNtAnubuxhsqXK5KEUjAoGXf1rEGYq7kaCJFS9V",
  "key36": "5QXRjdSkkwZwWrhgedkz7icPfBRG1qy8t1oPtgxeXmuZxSuBDSM7c69fiLwL9KAr72jdH6ci2PoJAn1xrF7yRKvy",
  "key37": "NHPeM1W1v32rz8smn2eCs3SNmDgCqrCFQBmeqv2WQaTyEaLZ1X8HwZz8APXdBpU7UxkE2rH66HTLQsxM5NXqEXz",
  "key38": "vkKRFMUMkrqq7KjmkWiJcYC4XM3nar6UySvMEKWbmmSmyLvyxctELqRocGwQmWyGFf5Tc5oM8YfiTzHSwfJktSu",
  "key39": "38n8cYzQ87bAr1nQwQmtRHD7k1BrTnF1FmfTpXaZaMb4GrKmS6DypP9NkWhwGbCcvwirtikxfkJ8Nqgo6CppP3PV",
  "key40": "519UZXRQuZU1CovaZbwcef9rvwMk1YHgGBvFY5CWsgr9jJxGBLd2sNQqqSTzoPfMjBi5CL8DJUT5cCBzY2vZ3EGq",
  "key41": "3nY6JvBonM1MH2DgmYSMKPiUYh43iNjeoGcCEmhJ8vwTuN2JghbfDEmbodhmnGAQ8oFdTmAvsr6Vd61Yp2a7SBMR",
  "key42": "4Vn6LVxHhBHMZAzDCQoHj2nskKfCGBSZJGAVud5mBGECgfS9JxUwU7Yq2nwu95sZsydYtXu3LB6BoZhPnPn7cpvW",
  "key43": "3EXZdmG63tG8zSJXArxftmo1VDLPzDTfbjvxjfpygEvk5pN2bUbF8aTwoYwYwePYbLqk3cZ3oB2PL8mbWcWw4NKQ",
  "key44": "2kLSVps73iWzxBEmzXR3Jbd7jy81hvGMtyZbWM89MDABZ3EVDtZ2P91WGbThAMroCvZ454HWceptWDCC3Ph1L6xm",
  "key45": "55WGEmKFYGPxcycXbMxNAN9Ards6aM4MvVTioEh88e8mRu8Ncrz9qSyqeU3y321HRPSBdYbhvG4msYGqjUGxSoss",
  "key46": "3ufi7o66xuXQuRaaAsVsBjuyKf3119zck15CL6bXScWYYAA7U3RTuf4AK92pVJPw874P5oEbtbWBWTh3Gn4EPhLz"
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
