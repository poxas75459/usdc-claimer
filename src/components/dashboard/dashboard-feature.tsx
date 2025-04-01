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
    "5gUntSbf21D6iUzxHawSWbYWkBxKeNEpgrzhSnmMeEr4vsycUYfEPUszrXt2oZS2nstWwR1rHks2FmR9E3Vv2fUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmMeg2bxCWKj46MctqsQmke8jCyU1EeP9nZdAhDwmQ6hNh9Q9cPjSxCUtPDnR2xtwsvo3CLtMfM4UZLXzsL5ofi",
  "key1": "55oam1o3qxA5bSh8MffEcJcahPZG7fs2V5mgpSiktbRE7V196hpTQFocS4NmgQz8eHGvDDczrQLymDoYz6JwvWQU",
  "key2": "4YpscJvmJCY9czaamzjGv5PLC3JqtFyYVy7vRmLN1xUGTxcgWWH8qpNa2aDYzqzFy4uUnowptNd1saZKc25PpzZM",
  "key3": "4pVYqt4qftoVG6rbmGckBq2QyohvsURt2LeWYVmhxxDassvTsYc4Vgzh1R3tXtGfZLxji9W99Yb8UxAh1dEwk9Mw",
  "key4": "2Sk9zuRHvBASmhziJxSQ5QnZ3MZHApEjbxxpKBwSiEQ3gV2dKcfpovneCoLZLcNSgWxBCC3G5Go8hqZXsHp5Jkbu",
  "key5": "5PsFuVZmGzWG6nvxXwKF8bB42Uqaz8pUGUkyNmxyLHasqqEVgtS7FiyBvLsKhckWFLn8EMXdqPDo5XR1izcUYic2",
  "key6": "2X9dYJmsFkg9VcVkQJNEigjiQJTVRRPgGo3d4nBAATSEaeiDbi2CVGR3hnS65TeKiaii3TYG4SSAb6XrEMYf4qsF",
  "key7": "5dAv2fpNWexdQcJydqZcd6RCbQZ4ah7GS2cy6PmeakQNXRRcS4Y2gCibyJGwfvCuU9MExk3NCYzqQh5zHmNPUrPf",
  "key8": "6JXEyf3UJ13WWtA17kag9rSe67CZ74qt3Gv6pRYjEzYLRUinWYpFMURg25VFENkiZLq66PpjWAxkbyQ1HNBw3Rp",
  "key9": "2eKv2xm9ngf78CbZnnz4x9knY7oRNjFWGfTcg6s1d7doxzGZTqNp2Yw3AiFd3Q29D4evo75ef8aNPnh61LnYDzE8",
  "key10": "27wKCsWmDdN9gfTJ1LTxALqPDepy33N4Vh7odbDTSixhcHdNBsWKonKUh34Vp837FH2GohYUp9yM7EsZ2LxwpvZ9",
  "key11": "5tjyFcfeA7kFN9MqP8kX2tYtTW2d4RsJgCdVg1Cb5muz91Q579ySif1V7hKizpziLiZrqEAotsQ2FBsYnTp7CfwC",
  "key12": "57ZKtuPoADCWtq3u5wo8iX49RumVtUTgyWCDQprACTMohdftFG9WATqvX92X6oLAkS3nCWv3LV4fEPCqxzV51k9d",
  "key13": "5eq8QWjFyBNf8LPkLid6VkUSQWWhgeEMYC8ydtm9bSokLipCTLYDhdhWaf5GiAsZDmN9Awnzyb6WqFcvqkBVRNWZ",
  "key14": "2FiXySAj6TmtpbjUaLjxCLLj9uVpz7LpnGhC4x9z59p71uBLnfioJfpBZB4Njy5FsaSuNX2zx6kKNWiWcn6vWjRW",
  "key15": "46kAbTdxZBsAA485Ntk9JHfkbjWz1AenwyfVYcSE57C9yK4Z7ufN48sMa4C4V81C65um6u6boeC7tz9TCWAb11uB",
  "key16": "Srqjwj7T45CCgLPmZc9pja2U2z9gGi82UvNtMEv6fycBDWaWDUa7P7wpuKNB5wP7wti6u2va6VQmF4L3XBjENwX",
  "key17": "4MJNyPW1LjHSEfxjGQtyxpF1vtBaxLFQDresc1fFAFmQ85DzJhcfKwWKCo6brDeo3UWAbs88CiFwKQP9RHeB9JtA",
  "key18": "YRhrKiFfCmxM3ma9LZaqpCDJzjZSCQT6Rdtv8SVbfwPCup6DY1Z4gADFospf2RrFpTfZUJAj1uei253MgJBphsJ",
  "key19": "5yhkfVPHVtzFTwqoSpKmgTrV7AxfRYPVQbmdJLkncCEaS9b7uDodsHhv3G5ckupSG3eCEbGt3pyhqyySjvadXLa3",
  "key20": "4uQUQSwup9pFuPTMr9Dmn3W4ha6Utz2B31ZRQ8N4o9e1o3Soj8FLnA1o15GTkoessqEy5wyvvzYyB55HUu3pvoNx",
  "key21": "22cnrHZxJohredYv8JQ7E9zdxAnLPepHGVQJP1NSLHDD8MvoJMz5AKTqqVCxcmzo4nvmToFSrPdhEFfs34SoKdQL",
  "key22": "4JH8cQn92sUVJxDeKLWgbKnnAHN5cGe7qZbjc1eT8F2jTTbDELHA8HXvCRBXUm8847brtkSzLLGvAgw2qHfycEDh",
  "key23": "2PLBMXGQzTqZpKuySmLnb4MQAdt1q4UdehDVAkecpmEVFXNsGPznQtuttRXqjz6iG8MnDZF9aup5bPRpHZsVQRmj",
  "key24": "3gat1YU9UHa4WtcHdxnMtA5rq2uDcbUpAPVjQsupvhK55CLhtSiyxVFqgCdnLLVRTXAqJPATmE4zpmoA2Fh7mn2q",
  "key25": "2MsMS5LgivPkKiGqMNdsyCrUZ7SU4pNXvnsBHU9j51AJjgaXYBWtrKRtu1va5VbFHdkt2Nfzg43JRDED6eArvwoD",
  "key26": "2FhVYM6QfXaM6YWG7pFGMfUB1jtZjkw1cTXCx88hDCK4aH15zfSqUovMmjzdeNoGysXPtaPPVUGbLFTX1NzeUxgr",
  "key27": "Vci17Nkqf8vsAbpFi82stA9f17LHb7ib6sVZZKKdFDcRaCeRzcXWbfSFWT4XYvK2W538D6Tv7z6fKUqreUrZSrh",
  "key28": "sQ82hKQTgVz6JspfPNRpwVS1x5NKz9jN4zNXUggUm4A85DU7YeypqkfKG8RFpzERdB6J9vocM7BaAkx4A5YN9Mg",
  "key29": "4uRMRr6auKDiTKqDjVpqEpWWZkRkTstpPbYqvnn9WbKS355gJ95SdoZiNrTEiyRyzKgwefWdYXodwZXbyuH52rCj",
  "key30": "5NsKE2vq68RKF89ykkQeD3MbYatQym7bPJYtNMKRxkNLgHNkfghMGVry7CBeiffEGoDAs4p1wx6gnCsznPxKGAe6",
  "key31": "2Bcrhjgk33d1HyhSc6anKevEHMWtWqgngZ2o3APgCLrVrqmCT7ZjJCTTquBCsjFNR9VxDwbZbKk9F1NjWvdjZpFP",
  "key32": "4kbyPNbYnN1wMYfCMeTyeyUXgFBhW6L16b7AdYi7PbWjWCENuJCDJwA57FeHgh6zxm6kAaBRcGsZsTymqAFwx4PT",
  "key33": "4i4i2sY1MUFQ8GQcSZ4yxSQ76U6JA634CpBekRCA93csZTNwZmPKVFwwobkrT6kufWA1Dk5Cd4PSuxNuBumZKZvR",
  "key34": "5p2fkzLVo9WGEZUTZWz6YSyS2WeWJJQ1DKi7ZFLzgHEanHoQXKisv6Uj87UszrFNVNYqKsPAAe2a5pBvNq2HYn3",
  "key35": "3k9iqRxFfe46vCKkNHHKX23WTAN4CDrEFppHeYDSY8k1JYXwCkLz9aX1kvWjuXqu4GYYtxWx189rknxroGEwZDoX",
  "key36": "4GcFfKsNScg3vJLd7k8LgmswzyMyBRNEB1nARva2JKEq17EtthhRuZVHi5XmozFbL3EWzihVgnp3a2mAvkjbuuhq",
  "key37": "5tde5QrnPtqxpQUdHgP78A6oWBYMTv8jiYNZqpVn8jsYa8xmaEViT3nGjy2B89S9tkmijcDnE5r4ALh8xrPtEgcQ",
  "key38": "aVueFoMmrLh8K8rhWMbiWraqR7otvros9JaMQgYRid8e7Lkxsh6pQBuCpmd5fMG5fLuPQot8Ey4JycY2Hd7daKG",
  "key39": "Hacu89eHCQjVUnP5YckSYbEzMy6dKKCqQsXXjfQ5fAXF5CBA8MjC2dmMGeMWqpwqTB6JmHNzEiDtdHq2Y6PyiXe",
  "key40": "3W7fC26bCKesouo9mB5FyNHJPt4EANL2ckttuvLRTjYwvXb3GdpC1PiUAMAhZ2mQ79SVbtm7p6oXF8tV9iwvp2uB",
  "key41": "3ZyDWFNdZLAkqYatDE9GNthW78BmiYunPz8TPpDW1fwRUnVr4BFb7C7FeEvCCL1NxNHJdAJqPEfvuWuUNDrCLuuD",
  "key42": "36tFtBYmsNKcBp2ueAjhB4JKoN6NAQ8s8gfoGP7XFQiEYaoedmVoGcj5gFqZuoMTbREkKdYPacqsGxwixyDaRc7m",
  "key43": "2tG4aJFWMth8wsZ7ityxGgzpZ9AV4ziDc8LWnrsvVVTDCr1JqKUsmcemTjMatAYkR3rgAWkuJpuELb29p7JRNnD9",
  "key44": "51TYJbRMBgaqWT8AeZZnjdUntcRNjuqA8CV6ZNzH5sLPEmWQi8xVu3F7zeCs9ENq6Eyovr5eMJ5Jz3WbivMnikmv",
  "key45": "5qxmv3xgKumEyoATGn8iLFowRKkUvx9rehuPwwNpWaabwftusiQwLeVG2dGzwoRuyiHnpqjVUJUeMFarVEdhQqHD",
  "key46": "4gZz78vz4PBnQrrvAi8oEmcAXzs3bwEtfofDKYNJnxb2CjYjXPKzvBsKNRiWGcynPPtFm2obztZjeTBJPvHqPg7P"
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
