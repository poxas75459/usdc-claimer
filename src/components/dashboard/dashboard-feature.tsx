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
    "LRE5fPxrB2D6yizJ2wMC6g9fXiyUvdCRgPYfpgqKB3PBYWrjspMep7LgrZxftHYLPWXmSrRAXifTRFizMRtSrSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UWLwuwbrPqmLYj3tJog54X3FUnyWHz5Yiapi4XGBJo1dRRMftDXmUVTcvX3MviSyXjWziUg3r86KXP4A5tBBSAZ",
  "key1": "29WkHVSAqawSkBstQBCASxrGg9kRcnSNMaSsyi3xzNcHFK1eJiMG5DjitWBc5bwjFJdYezRi99eGjvgnJqnmvSnA",
  "key2": "54J9SgaRZrWsM4YRLDCm5GZZ52bwzzgWSZuTD8PYCxqsbvTszkGFdjjWvyjEFQtknsXXWUyQ3igGsu17q6oArg9Y",
  "key3": "457kumcd7ym2iMDnvnhARgiVfHto27rDNoVVRQKCsph26hKmAo1DVjV58DquU5q2AWTKWy2wa3kxsshuDoh8FHtE",
  "key4": "4eEmZjAD1ZHypVPzJooRjhu1ehp42tiZnzpxipR3Pc2wQHWVaFyDzpf6hB5FbneQJPo6ppxHzbAkvJwYTtmMKobM",
  "key5": "319d7Mnkcy4EFNxCquboFEQwjnxT28EFQ5AjUryP49z921szyUV3cgkE4YGGXztSXs6m92KLFtTQrAvVam8xkLhy",
  "key6": "5YAAcoV68wTRFCSP9qDGaQhRGPwaCzyUKCj3xzsaJ91kiHgA6S6G1kLpZebo72HQzuKCth7umfnhhwYueeTapRFY",
  "key7": "4B4KTkeXupNDJU6U6qwRhiPhAk2EFqeiQzyRDpqCXmt6pbG83rMZoTfjYxs4qUVH73qHchCEYopHZU2CDob2M55t",
  "key8": "XbDwzqXk3MGm7NstST7d8VdkJJci8urx4u2LAgxisV6GygLFPLamkvZRmREpfbpRsFi7cwgfXitj78fXFAmW1Ak",
  "key9": "49EYV8xqnMCTMuxme1wfwXMmtNrFjUb4u8sH3VABBh45YZZkQ51znRfCPKUjt5c1LGF4dLGY5nDhAf1oLNfqTaiN",
  "key10": "4H4Qjc13d4bxRggEgtS9e1kX4uiJADSxBDty6qkBJQcRHjmC5Fd7hV94homxrScnSNHgiLRkYRRev6RwqFh1nGk8",
  "key11": "wZwQGALFXYizC8hD9ZH8PoHLDwBri3MJ3pjPfBzfKkbkeLk2s2gkD4QzPo4BvBh7KjseWeyRnBfsspXW1THDksU",
  "key12": "XNEVAaUihYBpB8QwokSKT6RF3i8BKCghYabVZgUb2octmmW6PwEGNqkWCEKhUfVNgpZbaYMMJovq2bgmqkVMEnn",
  "key13": "3xBqKRbrXN8xTouYdq2ydVK6D2vPH3yaxBVSVc7CQRUZBiqyocx9yup5WE9giwcnnbiX5q6FR1XswhoXdZadBQn",
  "key14": "2dGyTEPGFJxq9xe4dRKBR7eZJEci4cju7YaSxSXaSXYwrPYeFL7YMG1bFAaekP8DXJWk1TTQxD1fWUWYgcMQKZiD",
  "key15": "238Bsedik6uZw3Q2GfqWTAUPUUuCZ4yNtjnLCuH6Z92aLnBQttmMTE2Ht69EUjsXfesD5LFXJ9NuwCLv1rVfnXNN",
  "key16": "3xic4if6m3dmUMnhZBXHsgitaYWTUkrrqjd2d9MFMBBLR2STud23vfg8SwKb1N18trhkQrDEyiVLahP65qigMxjr",
  "key17": "66AoPVnt4uMiSjJu1P8wrRWpuL9vTXunzJHZr7dhfwUEXcv7CPbbFBJncfEpfGks7FUXjBggZJYN6cTsEhLWS176",
  "key18": "SqBSLr56KmuoDeXErzUPoac4juu1sXFancpn5zX5W4fn3f8qZwc2fD99yV63ibf3knj9WhCfW2akzRxt4L5C3Ve",
  "key19": "wuXPohvBpvWLUqe6u8RQq4E9PMMfqkAKB5JsxZWNjaM7n6v1o7xL9kjzwtnGrM2tQaPmDJgUMeNJNqtDNX9qUp5",
  "key20": "YUqkRYTK9F886WNdZopcr7R8K3TG26pD4MMNTEdo4VBtDpTPbWQysAZxA5KoHr2vo3iW4zCd8YbD9rmuqAaUXh5",
  "key21": "4ajCdvNooUQ1kASnEZzsxZo61VDztbKi9Kw54zMog92fENxVr5nyDZZdss8vzEAUrmmzTNjWdSUpoYvLmL4KGfw3",
  "key22": "2yt2nfEjnFeUGUJpCXBE3aG3iDq4ysAtVQ3EP31k4CFK6TUv6eSVwQ6DD2MyEa4ZfiFuJ23qqWKQ3FXJziRaFPGU",
  "key23": "4oFPqb85StQTJuxKca3JJuarrQfeA6F5RjmUZ5gLnnu2z6TYPnxhkfRtjVaPrwxB5m9RcBj9CZjRR2yQJMxgXSrj",
  "key24": "2ukYL9stsvExocWeKDpvVFiNYu2eoNQPHbMn4Erak64J5AWAStwFq4Aq8FRhQfogsWBuTVXwqMdzy25rF9qkXPR6",
  "key25": "24V95D4qLrif9SvRK2wKbM6iuXBLkqZXHcRiFPtDifyGgKBW2Xkn4P8DUGLvVMopY5T5EdtAJHS8KsAJ51YiW1Ag",
  "key26": "5fEGAjihhzwthKLhRGazhbG2BmdAhSxyArwZ5ggws3re2qKqpmESKEHtyakoWNLetZb1rDAYCjhFJzSxC446TJqg",
  "key27": "2vozxxWX8KH1tqiL2sK6PfUdJTJb1zncEq4hxYRE8H1ew1KJuk3jzn2bEW4mFMy3WXjSVJJ1JEck1oVxNjuLh2kt",
  "key28": "2L2ZbQVf5YDsiAxK5vNKvnknC3w7ZS5Mb9BpX5NevpPj8N8F6veZiuTAapg2JTv6AQkndKmfpvCcRjx378adCyZj",
  "key29": "2vsix1YvCt4r8XK95mv6TRbNKJd5P2aTG4xvzumWZ14zPV1L9RpodsixQEVAN5UBy2bGX99K5ATYmTdTQe7SyRZL",
  "key30": "4G6AqaABXhEhLsrQUGgnuq7cUrk95HGV6dtKKx2VweLaRWnPi5KE9EWoAsfrrpxJfXGrxb7Y2SWmhLgNC21HLMfA",
  "key31": "3Wv6ZP1Joe96ijyHi9rUstwSNgHsjEQT9GXMmJogEsbX6JuTRXQx8vQkgkBroSjoXimkKAmyZTaD9iEfBczJBkRH",
  "key32": "24xXzV7wy4rgyAnxpKATkxPJ7NXb43asKkGJ1s2MXy5DD5FmHNTU7rcWTFfs9fmchDvGTJ5JpXUurXyoknHZFfjT",
  "key33": "5bxnFU4meoSHr432gqquPxqeXxApsNnoS9jwqjeUdWQErUiN38tDmHCnxZtBg4HirLtQLZtvZM15o4QpRVVuFeW6",
  "key34": "3HepaHAziKvtSXocVx2q5hGHyN4w7djbuYUXUacMTWKM5xJ5hVNSQhmjK6B68h4S5F8pN3Tf2WsrL2H6XYhGWRvC",
  "key35": "27AdoYsbevdvmu21bCVg9WbLrKfMwC3DhcBqBvD9CivPRuxgCMURpsbBgzed4QZY9Hvjsk4crVWCwxgDD6HQDfyK",
  "key36": "3Ry3hZ55ZNDkjDwLAifXEfruuxc1X4R7QugdvEtLXqm7JKapvnHYVnTwHtHTHWqC1n68exDgdjWtL9ERiiMhAzTu",
  "key37": "2BEyinPNKbKmiyy7dirMwk6KegWVcRAStUVT1AYoL4WwddpijsgvAaQqkWWRtHVDqq7TxAV711gAbyDi8W6piEr6",
  "key38": "39Rqwhyh9CmFiiuD2aB8ySCa5h5U1SHKKNUe1qRHdNyPCrwn95rGjuAw4SwWTB7LZ78iwxpZ873eMQ4CykExqbPg",
  "key39": "3ruGi8YPowLypk2KmTc9pP5Tgfwv8epmu5eTPkNkwzQ9M5FQYuBwesa2G5Fx6zBAcxanhDtr8aaC8PqPQnht96h7",
  "key40": "2JcLEAhYxHzfUNMc6LsepoCwH4QpvPKnn13XBzjUfV1HaGuk4NrDrw586dspV6hvppvbhYq4nqS4nnoVqgLRGqZV",
  "key41": "5SbiLqZouTrWpydnDXPvNRa4ig98UnYC3TcurGRoZXP4AWBvb2hkFDAz43SfegokeQc1Ra6htkQGcC3F57mAaXQJ",
  "key42": "VnfGqjGmZzWmubNVN1AkQbTcDocLaTa5FAczfL1VizTy4iDruHzAw7WwsumqLnsxhoYWevZgzsJ5eRWmy8GrHZi",
  "key43": "WUEpPXa52nYE6dUKKt5ymb2BdwZcVsZzdxnq7CTuovNeAR2vNQPoZq3fh4GWKD885FToiQ41eRRWpfKQTBRgWjk",
  "key44": "3n8fCcRTxm2wg9Zh4csnCbQ552karg7jDwuZcWKRERejh3a7mGqqhTGmBbpebEHUF7pBcNW66425YPckLi7sZxx2"
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
