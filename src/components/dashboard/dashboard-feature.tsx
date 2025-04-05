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
    "49GAx9WiwVz4gxsQu2fLHm3TzCrMP8iUHSmAwpBnbUGyzF27dkhGyUCW11tbbEuNx49R9p2mS8VszdhCKahXee4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66y9fUWt7B4pNBbUALkjjNon74Qj4F2k9Pq1reQYa7rBmR1sRDz5LT2HYHXXBUQgbCnSu74gUGRXLj4VGtQtXFpr",
  "key1": "Q1CCj13xvctPE4yHR53MgrtxKo7aRCyRBKwzSbE2dGqPFanxWkhLhRCGpXG8BbZcbf6K8JFvno5C6rLvQeSCL1N",
  "key2": "3KVdiab9FYiSE8Y4RZTBQJRTQJEyLcbYwg2MTVb7Xw1NQT9kX92caXxyZY1ZqaGgui3NcGB9kKgAXSgBrFJbEy1v",
  "key3": "51U34copEp2km1skRJWEZLUSiTdVVnVjLBH6i2fefSUPdE3Lsf4fzLncVMvPSGNUdq6wrAUrQBTrwRt1o7Bx95gA",
  "key4": "2mrprSbRDbFqHwiszhVCrYqYDYwu3BSu9mqgTsxsMMqJ6kjziuCa8aGg1Gze34in8ouQ1gUMaQGVB5yTw2iMUU3G",
  "key5": "3d58vdc4eQdotK6r1RNd5Li7cuwBDcYDxK53EWLT4XGTbVEHnQXgPRddxELrdykquVJ7HWWWiZ6EgTRfA7LhGjcm",
  "key6": "borHugKKmrgn5aTfcqc3UrvwEGq7E1mYBVcEE4N4n6SYPBLbfCKq3NvBFtomKGswxD7evNhFr21vq1oV1KpPGn2",
  "key7": "4Z55hGYGyE5ZQyFEgy4Pv6dpehUjeoMcLUbmi6CZmDqFoeRD3XgLoioW7baoFx7P6Wjtx8d64mJqLkEsbQTLnU3K",
  "key8": "5p3YbzSpmcMxXRTDeK2daXuNpt1g9JRDpLQ1pYgxR5BJ2Fdo8J2QBhrz8tT22tRVkEGcGky95toitu3vw2K25va2",
  "key9": "2cSmztBVew559kQUVKf97hPe9mVgzYfvhrjtyoncKtbwxwesN31ADUr6RzigQ22BZSmpueu2iRMwzsmEAsQDVKx1",
  "key10": "3U9DnqCYeLBSLQ2QwYBQznVhmXMUDkt2YJ9RxzGSRDnD2DJWZUP3cdpfWpFkUhvUPzCMkK79WHsZWS5btxugVWeS",
  "key11": "5KFg9mRsv15kdPX3PSc4Sa1ujWyvU4wGq4uzexJnSkb127eQv4KRbfcpD7TpYcDdvE35hp4MB1iUvczarbt7o8Nr",
  "key12": "JjTcLV1sFy4CftGi8QuPpgs2R3h7ziMDMugQebxu5TqA6txVpfY7fuxNiETSRA6FzSgKuqstW5qgs3KVewss4hd",
  "key13": "3D9u85TwjhnRSLfwctZsh23e1QzbFbGojL5dZ8161FfaGNJaa8tru8w8B1WUMrQ5yuPHsLwE678im6PP1XTbZ945",
  "key14": "8UEFfRpDteyex5cFcoabPLpRV7Nb4ypgN5GUoYkJstX2DEvaQgf8DzLxBenn6CFrfXXfvwz3CZa1QDZq5r7PJkd",
  "key15": "3rNHd4dxR4AkJYDNkFnZAM9L5JjzJTr138nbcU6pWSzVerwxXdmB84wFvadJ91vJzjhQhWLqWTE1bkfRGTWWJtx2",
  "key16": "65bsmeimymLyiPm4S9bVa1GQ9Em94Ma7pzqFAx9eqPzWHsTkvQaJFF6Sni19zhcQYsD7QVJ3ERGNKnKkwTJfGRU8",
  "key17": "2CjoHpgJrRgRTPnpBX1YqSdF9NkDxX6eie7otzx8UtScbBCh1cNsB2XqoopSzNtxN1jeJtVSsQyKRy8ouCNJDhjC",
  "key18": "jJGRrDR3g9ZGs9byEWQz6pSPEqycKZPHyhwyQrB19UTBXtcdfLhEnWdv9JBvqXbks1RFi1Np6B3K7oxfRdQck8Q",
  "key19": "5tCGWLWxPbdc3UNzzgifUZFDPF9nwC5dfGJNdi3s8htbGrjU5JQxzPcCBm4tkpZWK2p2EapkhJoMFgZUVyYjzyxT",
  "key20": "5zsSu92n78mznvSNkdafLmpbznSZbDm5KEp9zx2ZELdk2k2Lpy4ASa6sutQZayMS2FNjgUe8wjUsjbdkRSESGTdE",
  "key21": "2fu3K9aSYZZXJxBHYXp74eVq473X3pH7gFHVCP42yfR28YNz9sZNSnGXkhnYkC9omHdwZJV9Wnkr4B85w2mpZU3q",
  "key22": "2GsLWuVKwZqrgSBDaLHbPBda7BgveEj4aT3MzpvFJzQLFvetrwShvQ6aHncTEjfi9dfFfk24Cvt1RttqKnmGULEG",
  "key23": "2xP1gs6SrJFyEYLP2kd5xUsbKVUjs6ShuZoeXY2KbRfdU2j1g9cJysiDhu91wXrer6G7r4fp57ghwxN6A6zXqUrf",
  "key24": "K2PZeQkC6K1RE2EPUWiDxArn1GmM6XpKqGtikf9JtGn9hFZF5zyxXFiBuAezLoFXoRqAQVqRNpAmmC3rJUVCZDo",
  "key25": "4LfPoNHjJeNKJN6ivfjdHjhqLJ8MsGHfsng937bNEcQMeLSW9QjSDFVKagegrpFAirVTy4objveCPVSYfEwfgBNo",
  "key26": "3hCBKVnXsu4eqCpiGbWQYw779QuJHcj9B4jsCCTnCt8y7a4L2tTnsJiN4gJdqvina8yVaeKeWTySqq4vcHtFhsmd",
  "key27": "5P6Jb9BtJGmgbgY8HwWFW6y7oF2tSweLtJzboJNETBayaSaAeraJhuNrEUHSnfZLZTyvjta56i8hYDMirFiRC51M",
  "key28": "4ER7oxxQZCu5zDhRDoXLDpq7C2nA9225W2A6iNiC57ZUf9pBeX63cdaFxiT2ZfUUGKtftbS8gLDo1SQFbChS3j9x",
  "key29": "3D9TEPieTtTi38RkkxNcgMa4xvZEaVyRrgK1HXgZR9orb13KEeHH6qN7uhTG6w6CKa65qvvwmQ71Mm3GmD4wzc4F",
  "key30": "5ShCibuWPgomSaWLsnThsBUBxxxnLtZyRkt86mVQNuX5K5GN7zSZwBGey4oxYBaVatprSwSJoT4AtnDMjuS9XnAk",
  "key31": "2XpQPvgPSJPS4qjLLk47mutUiZcuLBmt52Q5iuiUzQdrSXXNNzFyJRtnv6rPfLADDH3wqpoSXa2qWTnqvbPnTSjT",
  "key32": "3J2LwaXPt2H99x5poqJiVh1Pgo3yEj4nUnBJp2yytdhA8zazpbaFajTBfXKH8pXTrpTTDwcijzyG7zv1AGJMA7JN",
  "key33": "4JhZ1DJUwLEiFHWe3AiGX1zVY9gco78VqcXfVVPCqQ9JAZ4NJc7XtGdksodYUEGeeKgd5rq5bGa1zDKAjCAWjPPP",
  "key34": "4wwQQTseWdqMjwxqEMBQ893vFhwwpAoHxR8fpDL9fzC9VvS5GeFKozbWSvLvCDy8yx2V6KtwP6zuRhQp1gbtLhbf",
  "key35": "yabP2Nhno7hHUqrQPR3oHXc9Ty6sLTuaFFr6foFnrTwuZG6Dp3dgTb7dUjXPXW6vo665a9PcS6ydKB4wxxswVPm",
  "key36": "kcsQ3pSR9qQBdDfnXDgvGGT5KjGJW3PoJQaUT7HKazYwhYM4t8MHyTkMnDJ4cbqsAeyMnsoy9gkBnfMPh8F9wci",
  "key37": "4JcYm5MzsJ43NZ4FPhMGf1jzvTpyub2pTi1kmtNaWzL8QTX9kTe7S4whmLZWbN6wtZFsfDXoH8f5i7NreBoBVQrX",
  "key38": "4xGctzRu24jeHpozkanZRpGAeJwEcPVFswubeUN5YJRhTq2SU1RAXo98efEUDBgm2gFoFNTaYWYX8qMTBNCDcztr",
  "key39": "zQWhzxw9hjM36KYH4myTq3v7Hpy28U5iSFDBujwVhUWCBsmyADYqL33dXr8vp8fq6WLHSGHErRa88z91ctW76hk",
  "key40": "2KT2QiaXPcs8mMscDw5DC9MZDwzYH68Pva8xsrC3Hy9DqPBWcTVYKbRTs76KWQV5k1VZfGvY1XEkUEZaWVwzfLQ3",
  "key41": "2xsQ5oMWWyuVSryDcKhEewsUgmQRwB6G5BGiuFziZhEiAATPof7i2zhW3yoDhMNp3nQ2kUv3D3xwgyZEQJKb1RWK",
  "key42": "3VeRggb4FLtB82AFbVFMYdhahZPbHZfWv7r4ZDpdaS4TrJPykJrUEMjVbf9X96KBHF5vCMoiDqC7TWF6byamg7eq",
  "key43": "sAiHofoY2xVt6vTK9sqZGLhWZRp21NghV9QrjGPVqXksP5NbhN3DXRQAxXFNSEBEK1R8iZAR2z2ryTp9RgCu5vi",
  "key44": "2R6RnUZBF2hnk6ZsSy5YHY4FVgRHXVfsPoTqGBs9WTyb7uETvSW85XuRLormxqjVP9seVoLkvaXVgZpjq5S4n8ZU",
  "key45": "4CxdoSFseC9Gv8G4WeR4Z4MfREJSQpnTH8EsRB7iDN71JERNC79Th7dK1WPnLG3FeRE5GKat9RTmUM1jHtMk8S5V",
  "key46": "5ECoepwPw33pqr6Gof2bBD6GRfS8PXYR2gWT9jQnYMNP4MaSCVVhRKXDJEh5LxThnxQGKe8kyNexwADy6phJW9xJ",
  "key47": "4PJzUGy2aqQMKxqEkb9oMpHHq5ybGvZrsfsenowHMRXTJn3d9CgEFndBfgyh7YD6d6PPBykoLTvBdHhng6uT2FAn",
  "key48": "1X4tFJVSiNhwEUPWoGhf6smrjDqvXk1AHETD6rZ3PPycqDsS7RqxVWZd1vZ4BqBRnoEqsy7ssgpghZ3xs1S3WPp"
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
