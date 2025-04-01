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
    "4NBTCpRWsfAmM75CEbwtXdeKXcdnvvAWQC7Bfc93eBHUQfZAJXY5GuZZAAH2Ptta9vSNLqTYAFuUiZtji5iBJ3JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gozKimjh3nd6QXwJCdj8GizoKFHhEjExcVT7yeQxYt6e6hnfvgsWd5VQGyHLo16a4gT8ZEtXqbBFV4oPGnpR8FQ",
  "key1": "EpH43LdQvZMKA3NmUvsoobYBC1XnnYUj8b94urrQsCgwgvdBt7iZr8u96wtsY572VssA7X969W7FTUk1k9KmcA6",
  "key2": "5DsQxstXcdBHbU4ubfZ5oKTGPZBagU7ZXKpVXEPgp6ZMKhvJTCqdkGnen6K6aVLMiPKv2MWQdLyfaWDtRZvEyKUx",
  "key3": "4g2Jb7G96DnrHz54vkYpHEF4xmmkr61P1nuPtu1ntTE4rW9JNs9MypqBJf3qdSXGxbJiUAPjs2oRChe2gUZJy2BJ",
  "key4": "3cNHzLLQhP6P7CcN5oZihtJCDUUfETmZmcLbcNYtE9ptEgv8GN5mqGBb8EDmGQaQp3PwnvHBzPcvQR9HMYSSrHZe",
  "key5": "5jRQDUvwpVehQLVWG3znKcGVXs57kicHo2w7D2h589FgiYBibWDCA7oAvezxXyBSC7Wh7CHgBzBhWjcuF3ADDnAE",
  "key6": "3A4i3GvVGQofV9GWHjwcR7vcq7D8nfbYb4u9T5ADM4HY5EJeSe1gos7ER5iGEDXL2ChiRZwJYUnyBWcP39UzqfwH",
  "key7": "4pop1QyPZtZ5PiJjjzuPYF5nNQaV7Cmy4TkfnF1VuYqZr6G6we4TYcT4rotaS9ui1GeYZnwjwWu2TD61XLvzauGM",
  "key8": "bfhusg6L4svhxUiYoSEagctW9ZfGFKupWt54GjS511fTZYYEXnFEvv7fXrGWteqx2Yjs3b17R6o4HBS1eRT4UDq",
  "key9": "2vyiEXJPqZunijiPeFBtXEj7RD4JUTgxu66TYHjDsz9Uhjkp9R3U4HHPCgTDpxzYDY8JpCRVscFHMJxXSeop8DxE",
  "key10": "62p7XqY9bJPR9xM4CqqEZ9vDzJxxtxSzzfV2uKmJqiNPZjJN2Pf8Qz9QtSKW2MNi1M7tUcqbEgXzfoAS9B6ZXd6d",
  "key11": "4WTowhN5m8jRb1Ypw11FWsmNvQ2Q7CbS1k1WS9JUUxc76DCi7SU5SgvMt4mPFks9ASLhzPZ69Y7Pxd9Fp36dpktD",
  "key12": "3M6ur9sYhGX3hEdosFgN5mJD7MLWAedVk6YPTZ6sP8L9s31NHx8mutDSXqqT5hfaG1jkBXMdA6YMotLGiBPE7USV",
  "key13": "9zabHREnmtiQsgVsuiKLvEGkShmehRwhfgjwN6tHTtN2jCDazWDZ8qKTgPg4cfkPeDPYs1GChkyUeVkQiMZuDGv",
  "key14": "V4p8Stc94F2eMdxuhTjpunXXNet67JupJZfARutf6GqqHKv6dr9qp2YJisuF3bULEztwnZFmGvM74c5HtJYr11N",
  "key15": "2PpnoqZRKypS7A7Lu3FVMwchMLyRU1JnaaVLcV7zkWw9S83wbbtKa694VMAKQrcdy3GyggEDSrHuqKFFHrQmKYUt",
  "key16": "z6nzGM6nvCHCmgzixc6hGhH8YcFdsB9DGb531SWrPCpCmRHpN7WRTAdTmFUYRjEh74NWS8tsNd6Z7FFQHTrvvJn",
  "key17": "64oLj38x8wE47x8EvWwR7CwT1cwpWwQerMrjVKQiuRFcrsB4GkaMrAiaAP8urTHonwpAHMUzCA6LGzV28NA34jsT",
  "key18": "3Rg8FH5xripTkWZRBPbJHBKP1DzzSmqY4occRTgNkvBpkFQs7YDbQET7LRgNm5QSipBRViH2iqdFiYmdzeiuTHUc",
  "key19": "3jhBbzgnQZX8HwdGAqQSNFTD3g4BrKxurr2Z4jFCBYnNLoz8PbAhLphobcweKYrd5X7to4naXDawKmpAjFc4cZUB",
  "key20": "2AkHthE46D8Qi4NGmfYso2VP8FUZYuJ4SMfyTJN5v4xLzYiep2gi9XvijouRf9u7bN3znPHYndc4Zrgp9cUAKTc8",
  "key21": "3ZtzkGgMM7Bu9GMJmn61cVkdBMtYLusputvHmb9fUPRFP9hkV2tPKMmiTRRG7MMLo2TyoZ4xVaQHwLGLsKicqWZa",
  "key22": "4xe521FznNesThaNc87MNiwQWqdU2C7sMgLsqiARBJBrKTmkUxzCr5bR3BstJ8ECkz9Ls1wCPQ6TkhZQ31Md6h6r",
  "key23": "5RRfqhZidxst1K7edd5rTwiAZ8C9gTPYAXKntjGfpnbzyAoJyRtgDPnvsuVwoZ26BbSL371ozKHAoKu8cgcMwxy9",
  "key24": "4qsVQTKRU4zCPgW3AbnXFE3ftfjSsv2ysaEFm45ez4extUGqg4mC9oYF4Vq42veChLAsqvP3RTT3JX4b5JeNKQ8t",
  "key25": "5rEeeK6NJhjP5mfpoCTboeLecNyjorVbvDkWij6tZcZm1gkfphayXj7rckcyQ1LddiHFV81nKPjUtzxrmAzL52TR",
  "key26": "2gwJJ5i3HZuoQioaNZCw1jSXcMi3pYgdw4NniZ3k3k3w2QBw1ktD3Cd9gPZe8HL9NEfNJqTrRHLaYP3hShHCygP8",
  "key27": "5hJdkGGMrCDytuzywn2b6PNTjGDMkETp2vy7oibrK4J79yeVR6QHCseXa1Z8dpi7ufX4UYSiHij1AyhgwmwsN2n4",
  "key28": "KrbqSwG2CQkjRBwNbG1zb3Xcqg4w67rnt4B16p6DM2a49vv7x4jqYQfC47oK3i27hw6dyBU3tuHckiGF3tEzohz",
  "key29": "2LdrW9fJUba8zx1LCGQuEAAJNd3GKLyRwKqTtjMC1kQ73VqTDHGX7s6wHNUgwMEkZrbyY2tUkaCFJoLabiD7S6z4",
  "key30": "4V3LStumea9u4AUAmJ9vdqoygdemh9F69LVWue7HFeRtNRfhYTnFFX3f7drVE8yq7wUUQeGbmJe5Wbhwk7TfqVgZ",
  "key31": "Ga1Bg3NzQY4ChPHwRY3xYBuRJvSH67TWP7wbacKdZStNsLk3363saq7H2QpUvaNwfm5sPsqJM1N9X2Y6SuK2YF9",
  "key32": "Eowmw4bgBuQG62bFeRJrdnAVNdUTJsubGpTU35V8qgL8TRFpRUYZ3fHaXSFhxuDTt65VF72xiAv2DwLMU9AVwaG",
  "key33": "2NE72H9p12fKVq9kNm7ijJsw7k11dRFWuMFwfxTPPW8fsVrCiVNeF3TVotVwfRLp8t4icmAmptt1ixb8Cc5MTp4s",
  "key34": "5z8giDpmN7GFoVSkEgpY1p2fAvA8XJpMAdTvaum36iT4K2DHbtaZf1MkNWPGVjLrD8bPiQq4rEzHiesXanzUmULE",
  "key35": "4Z8CG4YZDxXkM51vBBR4D3xf9Dg1yhFUqjaiokW4o5Xmfbxpc3p45XKTsckXHFfH6fJkmpqiDytCr4xPaNwLHU4T",
  "key36": "2Fpebkj9YbF5eZy8dtbw4Z11RS13tCBMUCc1SnShx9PL3b7cEY47vY7YpsBB5DB5Vc4DvZvPBhEz4XuHUfxPHshT",
  "key37": "4rshEF322YMjDeXcACQDg8eWrr1RkpGcieno7GRRMqiJmsmSneQpUkUzmmJSzB48UnYsrCge8dXpzLB567qoH666",
  "key38": "vSkUPK4EQBJ91j1dBmAvstLiJrQmG3wh2UQU5qEBzhVcLjotecvBpDsMTpEssQ9kCsXSJQHHFK6eoKy2QRamgAF",
  "key39": "kWaY23pCUgdH2oaim6Wcz9gSueSRDdzQFv1tBZXPZ8VQaFjnxtJE9j64tbd8Un7Bkiw8vDAjAscY7APbyR7ynPz",
  "key40": "3o4zotXR2X9QyxJGqE8Xpvc2BK5hodiaJJCojw5MSX49MSftZ1T4E3EkSRUf6iDHh5nPjYYgfpMrtv59RwG1LFNn",
  "key41": "3sbjsVv4XC7qG3Eaj5sLkcJQ18QqGtA2EWi7hEEhgDTx6akSWo3YfyzS7q5ExTn2Ppk2opHz5G9q1aysL7iLgeHj",
  "key42": "4NaS2i4xVGETjas1xbRWP6n9uwgWoDQ1Wju6iTKSfpbyTCvW627fsRgkwg9XvMrcG931jDugCi88J6GNaQddSanN",
  "key43": "2Nm1SKhS8Hwjzc5nsyJmMPcRh7556rxTkjyQADPftbmWTZVCb2nW7oPyeKSc6iVZtDJfs3JjPLU6mG83pTGRG9rc",
  "key44": "3ZDz3pNJtcGEpJ9BjfLM9aBc368Jyo6YYxTCmgQsfAjZXoKwDtopThb1QY6JeVKdssotDf6mB7sawfBjTPu812Lf",
  "key45": "3DmoCB44rquTQeS8rp6JVBBf4b9C3K22jEuc5wd2uaDK8qgydtjC72KTuJgXcmYU4PkDjmKYGBg3D7mLfrjpN3tw",
  "key46": "4srUiT8UD9VABGmnWV2WYrXc8fVbF21iqiaSfBK315GvNgJEDNYjG7o4fFszo4CDSRGVBucLNxqDe93XTcuGjLNs",
  "key47": "5H9Zhvo1Ds72ctWgH1QmjP9QNQizJT4P7VuW6kGPhboWV7jLiNqL1kfVdYNK9iBMzugJuWBV1iCEGr9wTvDSucjj"
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
