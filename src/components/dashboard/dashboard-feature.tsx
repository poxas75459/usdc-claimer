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
    "3Ydpx9HU2xhpwdXytLC9yMtoMdBmbX8C892xiBcwB1BckKT6fyfgQLnmbp5F6qMUSL5Bexq5in6n5AwZ2b8ryiUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wq5RrC1rLveaL6Q92ysHfYbeCm4HyZQ4tDquxbQCsmUgq6jqtYT6CVtYYxwprgmV6AXSd1YJBou8zNX8V2cP8jn",
  "key1": "63cC5KphddqgS5Y2gjihBtGifTfG2XVgdaNTmCTFpMKt7srhBucdiRsrpe66gYYFqTtkZymU7RnGnQ8ByTuaNiRV",
  "key2": "3nk428frMNRveqc2nqhagyKX5hM8JqQXK3cH4VB679oL4xNpMrcim7F3YUKjPUKJvNmMwYsz9tGfGumu3yjAZgyf",
  "key3": "3xCPkBCyo1nyACVFY4pkcVZrjssxdGerfe8yeYVECGKuXt521BnCUNRKykS1j385QGDi8vxDkB41WrsHM3mF1hx",
  "key4": "msJC4zibWPhh5pTPZaeSLkMcSJm9K7doFupRjkzfkyYn8zMJfTFx66A6hFnBxHy4AeVCmop45oj8zXB5w7tg9wU",
  "key5": "33VX5yZYmivFqMHiFmC5fRs1PHfnhZLAwDmzre41TYBaLdH6g4neWyhfCLumGwJZDKR17mWwcstn1dXwrB2q9Dnm",
  "key6": "2paVKqYV4oEvEyWZzCkyP5DFZxFVwdNNqZ47SV8zni32MQ2JEtteSsudUBZzUyiGtMAy96vS23uSozEgLkZBRV78",
  "key7": "4tKMVMyUvcpVDZktAYWUWi1PP2oyAciegGjfDHBZms9AWW4if8cDxsCFZV9RzW6PNPcq42HDfeq7ardo7bfztS1g",
  "key8": "2MrjdahEefkQWvmHYzX11cLiM4wZTVspuzgoD9ruVFUAQ39LfehSxrPYsCz1zJUv67SyBDMPNAKeULjfE9YhCLsj",
  "key9": "3MqCe4RQgFUmYK1nei1DgFv5r18RkoyH3dGwBjcee5p13PjiNP7TcDCNyD1HKmCcxejrc2pAJQjX66Ps2xPJtc8",
  "key10": "2KPQ4NTyzsYk4j7GjPG7wMgwNzMyaL4RpQYyuRYkQYGBAqPichhtnH1ecftRX3U7cxbLzQr2xLxTQttVVEjzf2A8",
  "key11": "5Ci8puDHnf5w9sf2JdP97Ku8DYa7dRtxQKcSowaYGswVxY41vYzYXgAvVzJeGfAHp1ndQgfgovo9czAQ8iN1tFkt",
  "key12": "34h8FbfiaL1gz2Qkap6ys5RS9Z7d3NexncAqX1TkPmMsKpZaN5XPnCP4GCUpxACnoGYkDXk1aXPLjpEj3BiBynpZ",
  "key13": "YLnUESaBG4fsZtzseDm83X9oh4pihBZkLXyqNQcynUqZqV3hhJHfGJTEYJVG53tjGbnphKKKkU4CvvHmA7oFuC9",
  "key14": "WJKBTxMqTY2ynpr98C5covaUwhiNHUsEAr7mMvKDi2BAFncCAMVoJ6skvGaXr6Gzom6m2PZud2qkpnutaLBxHep",
  "key15": "4BbBNjcQQRV1ufhYmCTFFRpRi52ZSuNxwqcVyT36gvyXCMDsiYtkD2UAHsLebqXx247HgjYJ6A5mC5zoyLd6L2hB",
  "key16": "4AAzo5njCm8Zh4JtjPmxneCDkYSPQNfVDgyrVHpDhX9vzRSBQnxMurdRHyXLGg17oF6GLriTu5djNjawZbqQ2sTV",
  "key17": "2qnHtq6U4gF1VK1KbeADsTyUjprjFgHzbTeB86HjTtpnKhwLScJzf9YLpmz1Lro97gPJE4iL7GeuqPoo4sHVTxBp",
  "key18": "23h1DpMrxXx8pi9bT4skaGFis3TkDrWn2wfESkqDwRqQEbwzyY8JVrQRo4e24SZjyrKW245xvXTW9DyQ1RvGJshG",
  "key19": "3AhDxpewxeeDudaKwtqf67rdkabPc3fNHh4wnwBgeC2yZEQhc5Jf1V4EAz81vES8g2hYQWM8Qkpsf1wj9qUjzAPi",
  "key20": "2otvSJwW4pHuWB2fxozTdgMMLq3of4ijkq3AsNS3LEnGCUqUF5yTquccnhUQn8m8kpz3EnAZZ8bJC4N2pJGaVA1t",
  "key21": "3yoS8guXjWUGHRZKHcigLv9zVyd6cFsgnHyWk29gEYcEorTbW43NyL5L86MzapiRBm7nCiVUgKUZKVX3c5Ravnc6",
  "key22": "crfoYKSgtqQQ8Hyib7peR1d5rijMjyf6e1AhRWkCypMWBkjDZPeH4SymsUFjJ7sMszEaZBuGWodcK8H5vBiq6V8",
  "key23": "5EZJsRgUDgeBfFfywR24wWXnXrsHvgQumzqkpf24FGh5iqWeGZgRWpEZpLWEvJa87wBdaQp914Y8wxMiLUYK9Zt2",
  "key24": "49hpQCvXAnhpSUHCoXC3FcW9WfKPPD5RD8SBHLUtp9L95wVSjYLe5AnrbLgQgrz6SjjXmr9dX4qh7YGa1nAz6b52",
  "key25": "5Fo6vc8Hk59DG7a9mLAkEpW9aGKFdSbTYQo7EeX1xgnihoJGuL2bFer1vrfVf62UnZ8oMTz9UMCd5x8jn5HLQJPe",
  "key26": "47appnAaSLXJfSeb8jVuqdQggBLRcb943JvePebJd7SUrWC1cfyZ79czDDUFsTFBPt4n7eX3T6pWcYjvSmyuTD3i",
  "key27": "52Vfr69MyaEpmm6PdgTZ7isuYnAffuF8u7nNqw1LivVWEUuUdkkNYYSaNWNxyjFTkMVbossuyxqwvYra3sPvvu1t",
  "key28": "3tYbDbLifWvB8Y8tq2hs3HHjDth69TLCASkdsuBAG7VuGHC7SXifSMuBfno77QtaUvKXsEXRyT3183EJpdq8cR7Z",
  "key29": "jHErS62DNS2s4xsp5nzX4X286FXshRrExJuWUxwSErwH9iVdhLwrkrFMkkvwg31Aas4pZnDxwd11k3KwFvdzQE3",
  "key30": "kRGnfpwZBM23GeC6AeDLtm3uGsc7CxwYNcz8LkwbVr7xmMAjdM4Xm8MEYn3aVaHiobk7jnJqbg85boCYnWeM6qZ",
  "key31": "61npV5SMrYXzw99pC4wnGZiqR2yh6wXDMthjfVcx2CfxbtFs22b7YP5qCPF6oYFqoZwMrQcwuuWKpa4F8eVpnwMy",
  "key32": "5kPTDMVdp1FjypYhbr45LkXYK7woFgBywkrkXCD8GZzm6Me7agx2NS83F9xdB6ZBAfQpM8HW9PsXY5BKGdZ36BjW",
  "key33": "5PYgpy6ZHJRsnGfEAM3Sh9Bo8FnZ7aecCk5EfUGDRUQBXbmotbJ5ew4LmCzCM8ujtHZsFowDAdAKmqmzSFgPSYaP",
  "key34": "ufrWErBQoo8hAQTg83oYwkrReTEGrJ9L8Z3cNpYoKhvWtmVPLN2F6p2MhzpCg5uFytPZJZG2RcRFKocpDZMQwMc",
  "key35": "2vbv9ik5fUXRJc4SH1bizDFxYbZadksdqXo6gQyCt5bSrggmbBEfoBvDrQQhAYK85wkeC9oh3oZs2egD3BuW4WsL",
  "key36": "2WGs4D7HHJBoYjKnTXeQEzqkQM7VWxqxfYTmQB2xZwDiAwaiPBwWQVAUjCGD1ew43kKNnN8SmAUgVHFDrE3oTf1a",
  "key37": "4zNP4qYq24nDiS4kM3Xe5LxHBxsow6kcomqNtS3X5H9maoFzuCWHC48D463atbfHsCVCshDFxytaYJkaSsqSpBDi",
  "key38": "uw23quo7KyMfLDeGHgrWParpGU9HaVfBRyLfo7Hkty8Vv1kEiX2p4AunD6hLVqZ2RcP7dNxC6MPV92aztUqLKMn",
  "key39": "2YgURbkgkt478snGQjLeV8rhAjJjUvbzE7areiKJNhsrxfbAd9YryA4acDPDEvFutrJzCpro6gv12MAVqYS7rVkn",
  "key40": "5MJDkmPdDuC5pD39Ve1XjN3V9zuB8xfbQBDqvNDhJbQA7cUWLjbDpwX9j4MHkULYjtjNxhmTgF8K1wATxCmKkfJB",
  "key41": "5hWhTfgeb9CdiN5dSBdqhwVXEyXy7fUivQGawp4D3QK6d6La2cPqqG5J4uYBofnkiCRMiQfeQa3aLNanFUTYzB4o",
  "key42": "2QvTpVPQbWXYBXj5jPHZHEswSYpbC5H828oJ3F8BZvMdqqrnyk67HuBP9r99azJYP1sCJ9jVmoLv4pHNBzG5VJqK",
  "key43": "3KvoXMKVWpdw4wG8NAkRQQ1xcddLJWAgaFRAcfsUZ1QRXTLYniDhZEUtW2FFRvbEz4LrzjBvgnBoks8yu7vpV6m4",
  "key44": "5zH6edny5V7nqjMnYacwM1QpmWdKuTn3CXNM1jSZJs6wKreeoQGBgPePfSm1SZ9tX92dXdg2YkBJUnzn3ogi1ACn",
  "key45": "5qhb8FHnZRUpgSWk5bm3cJzQA7oAiAWfu3cdkE8238CuYtUQGK38Rus7bnsGttQzurLu6m1Q6DKHWwhHdQshKn2b",
  "key46": "5kBjqppwv6R7ZwCPKvikQjpWW8onj5dTgSd1WMrMSDwbL3xYfE7jSsjHjG4HE6NCVTHVGpA6upeAEWz1PQe7TgYZ",
  "key47": "5k1qzVV2kLRfMNN7nDF3LmMdXwaJoyme2oFFNJL2RBZjh8FDQPKFsHP1rzUJbFwes1ojv2sHECxNC7iyADh9amAy",
  "key48": "3pVmYQZ849rnHPykqQTe2YfVni4xPqV3E5VuoBGzSeQEKWDwG6QCpvMUUXBFKNPhpB9ofQETCTWN6tB1MNQFqrgN",
  "key49": "4KcSTbHZ68NKM4LAuuVtrsEjz2777Ue4rZKDt46qZ2nawcUovc61QkcvMxyBpbjXAkTDMpoAmKdd4Nq73y6wNRyr"
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
