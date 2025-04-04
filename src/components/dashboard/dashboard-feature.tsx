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
    "2MHwj9Xxcewdz19yYvnSXp63ZfmnhZDwTvExBPpeBaL4NJHHRquHu1NhyA1ts6T6dEegkVi5paXAKgpjpfmDFhDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiQVWXnA2omoz3vPSURQtvRoBdDQG3e4aJyzL28wVuB9Gf6g767oVEEzcJCVvQa2CJHsHEdQ3G2tUtvyYChvpLJ",
  "key1": "3r5ghU6kdMAj3bB4FKvYFXv3aN6q2QXb6YCV5ckPJYhk9sqBFT4KFs4rZLhqYszK6CqSeE3f7pzRCEXMUwRqoCR8",
  "key2": "2FU9eubhA1fVzBE27k1LEbzEGRUsFy9hdLpvsvB4bVQrRmX6RWJvZ84VQTtqTshYuR2Xs9duTb9G9wGEHoVKZkR9",
  "key3": "2NppMqQxcUuLQhV2DCW29QHiQhSEHBBwXGJrSMyKGBn21Buj2eDksfPC5Wi8bn67ehxvkTumK738jWxUmLRfb5jn",
  "key4": "4h6o9LLczjTuBkTNF3h49Xgru69cgMFNJPUH6UVPcwV4dMprvFaJkS94x4TzgbtmL7iESeWiXeP98BH4wH1j1MzK",
  "key5": "4xnRvah8WtuSw8JjJpbsF4KrFjEstBKYG1MmmRb8bBeDZT43P6wRG8qsJBPQHzW7SUUB3kxXy8tW2wCRb39DMpso",
  "key6": "5zJhEi1QpTJRpc9dUEvW9aD2WzwUt7uTWW1pWT5yjeZfcS56AcQvf38sJEaTqcsYDFy35JzmPNGS7DdUBSrUHLMk",
  "key7": "oe7sZpn8wa72iWagBBuSPyLMRU7jt21csXS2X5g3YTrzxFQmD4imuF4vXbxYhESQsbH3dGttExm1v4rtiDz6G1Y",
  "key8": "n8D5SSSP1NKqkSsFPQhGC1THm7xZFkG6MxQPYU9cLrTBZK5xb1yigVHhacyg7YfpntQ9UJrms9oJwE6Kk4xwgtb",
  "key9": "4ifbiVNPX5hKqByghNB4jnfyEnoibQuBkmhjgyMP41jKgAqgGnUx4dYSL2HPCdxe8aPkA9qfiVV5xQf8fRJTX4wv",
  "key10": "2KRt8m8zp5ANW8jLmDd6oiWgdrZVmKmKWL63GDWSRV9GuW5vqXPEVSmZj8XLdocubkGxKhexBzt5VaFoJpdrArBB",
  "key11": "39CskVeNz2TdMHzbkSccqe7Rv3fRZkgNjhBYYCfNxPBDSDKzDPNqwEHxaiH7DnrpXXvZqtZdCVF75XetWr3zmH6F",
  "key12": "4AmXE2XgEC2Eq5kTbWwTRVbzq3WrwZTTQLghJa3tqBT6jNCDq8Yus2PVm6FhW6dy2ttP7uUmisD6MQk8UvNFnjKH",
  "key13": "DveEhGg19LHRBm7XTWJ9phBcawR32LRGZ2SkH3fLbyYsEN4E6Bfp24ASEkZNv42xVmwv4XmohAYSV6dXJWNYfsu",
  "key14": "4uXXBdAxkRaj4rdBpcH3RWUg4znXUjwXL3m77NUQVF98VwTXDQjy3cs6G6nTHviheQHVtHN4bsn3ht2XsVKxL4rs",
  "key15": "4z18nDocpLwWCAtfsJi9hN3wBZWkZZ4GyPJXcvQBS2da4CJ9hn6aRwBPNNsPoFNpX4Sd1pd9iQftwvSvBtQJDUu2",
  "key16": "VWtPEhZbS16dDWwkwBX11oQXFqhZAaEGhKXcABtYSRWimLLKC3HjZqzymabKovnEAQCQr4ufTaTRvGnnRYZ8A93",
  "key17": "vj3ZMx7T6cX3VP3UVSJgC5dVUNDbESRP44vc3ySB1cBx36bPMB2DYPXaJrNQUMgS7nkPhvsMqyYaYmR9brNGHcX",
  "key18": "f1G2fDGZLMKMhb4inRSsGD91HbBtjRFAkEVQLyvjzcJZYrNEY7u3hxHuFXHTZRqfGd1Ut2Ee4n2dLWnwby9G8KY",
  "key19": "454ZYEZiGLJqfd53VEuwAN5gg66SD5YKoJtTysS2pv2aV1gg8GpAsgwPEumGHjRp1Q4nMYXqtd33wjSn1tpezSkj",
  "key20": "2Kf3WBy6e68FTLw1SnFPQkZNE7cj19DNpoBwvxCz3pVmAPz99uX98c7RJWvxjw4Ga7ztkFPj83mSdJ3ZFkcUp5Un",
  "key21": "4ka6N7wUSMPyXszgcGGbbmVG1WzPKNyfdSfaqCi5h2vuswDKvaUbL4TADLZrFvfBjMkhHbojgvUCsLWA7nyBRPc1",
  "key22": "igkTRhu4T1LZXM6BHjGF1b1Sm8atpqPETTkkjQA215nkRP4ifwAy6Mq41xj8zLtkJrW6EMGQCeQ5Hq24GbkaRDh",
  "key23": "3jGa5FnQGBMzoqTmWjVUyHKvzcDzgcYpJjCjaqTcmNqAgCFT7tdTzTLHqtLuf1LxEQSQcWimAq98ETsMH2agL8Fc",
  "key24": "2fYWoBx4vBj3wShTBpmUo8vBvHaS5L5pMxVueWzLyReKGweoyiGpu4QghEywE4gdDHwzR8S2ydgvVYkE6XSLqxmL",
  "key25": "3uoj7zEKW5BdE1roasXiKAPSqsdMtzVtPJHkGPwHfw618Nn1C9hcwKxofC3BhrwMYEzd2XVNp3SmqwugV6XxUch5",
  "key26": "3riKX6mfdQGkAaGkhhPtgaj63HiBqfTocrWtosQ5WiHB8nZcMRBnRGjefgyXatonqEjqURto2TpYW11RqhPVq5mw",
  "key27": "5FFBjWu87poABXXjHTGJtZp6TTRsSriVLpxg2uzt1dyc8bmkgimiKRD8vc3S35q8H95x4EK15wpzByU5dhn3QSxf",
  "key28": "4YioMcgPfATHMoJnm8NokFxHC561CgsVrfN6aUMw5L9P8oB2tzCnWTmQGZgPQt7KHNWcEewPSP22kGx1tBx8W1ZT",
  "key29": "2dGMZ6kyyFN3pTGRWKjFiQppWHeVJbcxRm134qLzoiMBeRXd5roD5QgFxmG8xhYdiRod5rCmbg2sfneGX9vuKBDM",
  "key30": "2RKvQH5NwKnj8WxhdvCToTdMRCiCEvH9SNuLC6PLwaxeCAUp9xk2PTcvDmBxZSN1JfDhNqC7Ld9Ppb5TW5fyVNjz",
  "key31": "uPPkyTNGZzQYe1cwonMM2FN13WTTkSQWuX3MmSx5BaF1g5WrMhYMrqMb8B5ndcRgM2rumcsj35vXWQfZ8XB6WnA",
  "key32": "33aVJZrRXj8HoLMb7TLejzesttZombFr4v2xakLMuEQfq5GXsw1KhHPWWwiug8PC9cpyQQV9LMYrhqozszAAdHC",
  "key33": "3QDqnM8euFAvLLj8zmSuQRG1rsXiMX2RTYzj3oPAaGXS4GXTN4sUPcAVfDtw6hKEMZ1AW76vbGi2QKd95a2U8EZW",
  "key34": "Q5NwYJEq91pUTAhGYNrcA2zTBzrxCK2y5pBWFttfnj3KARBFfZs1Wk78JKnbEcpGBc6UHaC9sZHZScwLnJQXtLE",
  "key35": "hgQgXs1vJGuXd3WAdCnTfAYpVN275Y5PT81vHvUgQ6LmXoSVGiDshQutVJo4SetMhYWUNReHgww4chHkDW8kcxe",
  "key36": "2rJsFYrMeq33MQxJWtfU22HDm97GZMpNtQs9jTP3nXjvUBQHbPRotpTrqmMb1jrE3dGwUceKqsCpHdbdZRNAZM9m",
  "key37": "mnsmNH3d9G2QfpnxWrToYa8M41qYb9AiFtocyTP87LguwsF8bJ6Gfs8fUdknRJzFk4z1eYop9DvTgjYieUXqkTK",
  "key38": "3tRjhKTQok2rpKY5qYDoXA5v3VhY2NHmE2vQ3AW8zNrMfTuCyGpsLDbadcLiNVexsnyhxNM1T236Zh6vVN1hTcqG",
  "key39": "2zcqe5mfsEXrCLaHa1KqkqXJcC2tmVuULXyzXAQX1WsZZhF4dyhvHG58Br89iw3STN2JHGaMPjHDa6QyVKngjq9m",
  "key40": "3hPdKoBTfEkrdUZMeSYqJEXTo9ujnrCtF7Ccj2Cuo15Px6rNYRRS1YXgCV85onbXMoAp3XLJ7F5WeSQtzgKpVBqj",
  "key41": "5XBap1RZkU6Aie9haLXuHupu3TRaELdMrcgKeY6gkcH9k4PWjVEQPA3NEBmnsk8UjhLo3J5ZwtKfSnssmfEJtMEW",
  "key42": "2SSM6Y5DiA8btHAyBCfxQ8VwcjXdHXL4K4tRmBK8vtBcszKsernEV7uDZqUoNXhgnb9UDjPE2shEWtDTBCZ2Jjys",
  "key43": "bdrkkeEMdYBMgGro7VWz5BfCF3fQDLgMeHjyDqkww8KNCkoTBe5hovxSD9EDFF6NLe7snaao6dGuLqV5iostreR",
  "key44": "5ogoCzL7QNL3jyVXwYyHvJw5sHNaUTudvFoiRH9e4EWn2midYdbe6htetu6N8Ji1Z1zFNj9Q5p8NmBSb2euGauSc",
  "key45": "2Y2eZH7TnPGg56tZ16vsGNgb6XFttupc3Pkc5VDQ86TZhQhZhPEXZhAcguCMJghBqg6kkdzCcmoi7KLsQz1Hd6tJ",
  "key46": "umk8mWBo8qq1AVRBxGRVVi3rDhXM9hePvWgKvSWynTJeLYzKtbLR9j8HXSX2ucsqz8rGGjauXpHp2zG3BVjZPri",
  "key47": "2GQMnk1kJ26rSv91fzxzQR4fjUF45Fa2WdUjNe3LVnJrang5knnxDdRVjnd9duBd86XiWsa8vkWDhfiiwZ85owbi",
  "key48": "3zPY6mYHmWRrmzd2NWivzHsYvGQrJrEvPDJAoeRYDaWwJSoSbkifPfDRz6RSj53XXLtWVGgLUnAzAX9yg7VMMXh1",
  "key49": "2bQD2Tuvra5YWLzRqHK7gYnQfCMAh7DSbZbzyP7R4geqA6qfkk7UUjsaxEWBkx18kQg9HtT77M1iS9c33aUh17S7"
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
