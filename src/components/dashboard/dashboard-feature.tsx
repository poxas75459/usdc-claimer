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
    "55Bm655LYejGpgtTjHN1SjWY3ASSADvHgpKUWZcUU5SYY6scyqQVpQBvxgv8Ac8EkVE4d2RrDc4wtVoa7SzFRChR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXDfAYWqVMuSFJbmXokgQsRYkbTd1Z4jownsqmx1E8jyqvFCs4EPiRyFC6qLNzqirTMcyWiMEHLWVJYDmjEaCgi",
  "key1": "2tR4c7TABgXSKhKQAVMwwCcwsWAyCqDFA1GjrrJApUTjYxMr4wkVDDaHMTksTmtBy9ypcZ1Bx7ZCoiystVaCaDnD",
  "key2": "5Rj8N6uhUU6At5ketEA9Jq53TA8riKvagur7ETxwCZNEBfnRDgf2F6UmCLK1ADnYDHGhwxzs95jGmGF45nvnCRSh",
  "key3": "5PLHznE5qUYfUqKwi7v9mWAgCcJtqWX9pio24c7bEME6grQJYvHbso5wWxjX44gKWZaPpx1Hvf8rrc5pWpzn7ikn",
  "key4": "3o6FJ8dBUm5oacq1LgN1jmA7am2C2uQS9BEx6Mo8jH2HhZk7WtfPDpwLBSytqzXPP1gc3o9jcS4BaDxu9RZDbDj4",
  "key5": "5qmCobNfKnuYz7NhL4qZAqJ27UiXEE6g2hTQgqHgpuLZUA8UATqeAoxuLp3dqyAPaqTnvfRkccWie9HGDSz3Mkpq",
  "key6": "2aW9KKBCxuJRZTseBXTc2GTgyWfcTzgejRuhqPAYS4GUSVHXH7BqjExz3RnMjEoUWMnqWrmJLAUYubhA5yimc9jJ",
  "key7": "4hBf8fG6QSMAoTc6Wd5fJ47XDNCW3EvYg4Qku1bxkoVDswMyRet1aVSYrPAsMQ4vcmmrhKaArFqBvJuZwhg46xrA",
  "key8": "42xch81kYZEDvfKKabnA2T7LPU8kTCxJgsCcwEV8jZSbt5QKZxid8Syy73N1vRrDRs7eKSENPjTgXWjEkCzu6Jjb",
  "key9": "2SNqV8h7Em4zpcCMeLJEYdmFeMDMxu1kQpCzBje8mm1D7P76ARw8SXKXUZky86MzJe15PybGL5X52zLFx3wad4d",
  "key10": "m8w7vY32SjRjzBFj5atbHf7NiqdHTThNemC2bd5WGqT23tbNv32Xftrj1UVBAebDQ34PQNUvae5nPk1agk4z9q5",
  "key11": "2oL9W3hTnbZcr3N5aRFiBUGr7aGxUbXQV1P4i4ceHif8LqQUdmi6LEgf6FPeiQj8opmdK2zoYRFknkQKoZC2ZFbg",
  "key12": "33cGDJpfa9RBsjEh9FBii2BVu54PomkwPSfhJCxYs4goeKp6rJXAiJoks5EqvfVzR3pjkBX5Ae8x5Jv85FEtb1sX",
  "key13": "5QUXcnjVBmkL5QafVzS3XQaDYCbAgbZDhpw3HyXcFXBjWtBQhVYUe4c6fUEZftc6hVrvsR11L4oFBVa4VPGoa8R2",
  "key14": "4hxd9TvxQ5L2rAGLMuUmLg8rMudNqHZtz4tzXeqbXXfGVLxoJ4gPogGZH8HCcFjcdFrzUAUbFM7PurqsWasuGA9b",
  "key15": "5GfzfiENyXR29yEpcU8XrURKJ5myUEeXSynchZjsowqMkMPScvWvPGa7n8Y1yuBNiuZpUyDhN8Fb3EHvyCnQNexg",
  "key16": "4YbDbrNgwqebWaUP76GyHBBoSb5hEhvFVdqnTdwmGXxcBjzeKvVLDBfnUKDq3TXyRFFnbEg5Vf6hBWeYADkVHgqY",
  "key17": "4sW6sPeH5ddkunoyPGtBvHb4dp1A7tsiS7y4vytgL8h5FxrAKxGTcRhamDZeiXJjsqXxZKwaNTYUwAvivHZmfcrj",
  "key18": "33Lcufs1wDYnDyyq3xSVL6bwUS8WQ7A8cwAhnBN68Y3sop7mbV11RPjNbHc49gUs6Tv4RD5LE2n3mkWiATvDfQdX",
  "key19": "5ybuXFjGaeJpp7XatKaK2TinXRoui6ZTdfnS2x8ogB3CdBmoTQRgwKhCMhupebU2NpFBH5gFaeHrDiNviUSbJ63C",
  "key20": "wcBoEinTFnACsgqehdxwGrNwKcy9PaeTzFNiWYYPxFfaSDNzVXnJAmNigWoTwX7rJ57CArLvJoy78Lc9TGg9SJx",
  "key21": "48rTmgRwMAh1Cb96PcZHJfDhKY8HmzDc7SZBhCrSYsLrDsh8V4uvSxanxXjXkcVQg16X44rb2Bt9yzLJW2ZH74w9",
  "key22": "2auKYeLFeLwML6Upa336MtJseEFrTo2zNvPJfMUz1rRN5q7Tv1HWXEKT9vsK7zAo6pHLBKP9pdybpb7EuLwm5noc",
  "key23": "4Dj1SbkhhVNVvYG9C1M7waZ7NTXE9GHXJeHUf22116RhdBEVMv5F4TCaEJvoBjVSbAEwyo9Q6jXxxi4z16saQoum",
  "key24": "5tACffmhL4e2gHKPVP3BUo8GVKp5jVByUdy9nhVJAa3dEpz9wgUMgGduAMWydQwyLJ94odN1YxAVpkzXiCnFnkxE",
  "key25": "5sM6wa3XCmPwHP5BsuicPSfyNefKeVynyf6sXNpBRap89JweYAnArKPDa9aK4K6r8W4gU6xMVj18Wtc3bSKURCNZ",
  "key26": "59Cwnt14BiK4s4RbnTyFw5A8hZXdHPD1DCR8Jio1k5WVKL161nj6K5tHkJpFSfnP1XSArSt3Ux7wFrX78uZkfshv",
  "key27": "3zqs7mbpB9qS9Bt7M9QBg2fiVJdnLL6GWBKJ63bbfKnVzUYrG1tB7LJT9omp7js9aLjxjXQwBMTw7SAPUkr65vbq",
  "key28": "HXEPykre3RKftAf9nRbpxn1RejZKQ6US5Sy6ULPNuTeqmR3rhAGYsRiRYLa1USYdBaM3EgwoKsPZxCMMBbH5HGe",
  "key29": "51tEjWn9VgEpfZr4G6T3PK6njveDnTNFPP5TBPpsGJ35MZKeHeHHkRJ475XF7PsF8nZQABSyeRdZt5myzQiYeiT6",
  "key30": "E51ThmUFJok4d87jf4XvMVjefUYZ8DxkvopJ9PBrtcMg6mvWhDNG7g7SnPXTVZSmunQLwmETi2uQihT8UUK5ogg",
  "key31": "tXaBD8kTBQ7UG9oBPRFcmbn7CCzn9LbJAEQd1dYT26Eqr2ND6Hu14jzMpVCfAxQSpX8ZKys4diNPTTRXXWpVbw6",
  "key32": "Gwvw4cFMcrM1iJSSRo2AW7guEsKakE6LAyiNhr7atnB197cag3A9keNMxuHYhn5aKn7KQmXEkMeoaaAe6TZsuaF",
  "key33": "4R624xVDcMAq8zXSoCyt1Ui4R82Y6zcxqT1aY1NrxYkPJVwq6bSRNscceJ2hyHojyfKGwRbF3sHxCqeK2wnZXRhm",
  "key34": "4QNcdKX2KcBjiBiczRsAg1iFWVsjnTEhgb4vvdtg3HKrsg8UGUTeSFtpE6JLvhJQ5XDggnFY719ZfeEW4xYPWwN",
  "key35": "3QzzidLfBpZM3N9RhS2BYsNXVNPh5c9u4geL7d94ChDz8Pw8xDLGvo8yZeiv48ZCVVyWxzx48coSTHcXmhFpeqEG",
  "key36": "ZPUHgUDn4uRC4YAXPaSdomLedZRCifXvKPcfJdshbKnszjeL15WB2gBMWqTkZiRuNYy7L8aLeAhbikr65RRxk45",
  "key37": "4dVAweoEz1A8UZeh6pF5f84NwHm17Y4ptqe5hzivMAPau8xHR1c3J9UgMCSQT6ay9rE7CMMWrpgWJhuPQUWPgcoG",
  "key38": "t4NgXnXQD5iGakHec35sSjmbGQRdGLUUMPuxrdgN6E7qVAt7F9EvaLYhWphZXqRpXLAkrEfhb9Y11Wfd4KTKPC7",
  "key39": "22PrqE4hY7ca4acChqdBRGYSvGxXsU8TchQPb79b92EaKrf5U4u9NBgUJ1xfCzMLRLFc3yoo6EAtgxXWKp8HCZ92",
  "key40": "3iczybmHz4gBNJGjRSWDt572jYtKNrFvRibC76tzrrpHwUi4S8nxz1bsCguJy9LxstayBVHuiZsrn4gRQUHKTUkc",
  "key41": "gaDTPWjp6qdGadCEXbcwCbKp4KA26hX1eS2i9mUkoVTkqGMsPuHcvya8DnRYoNJqSQnX98fbaz2QNgPfyY17Tyy",
  "key42": "471E3S8vDbZH9f961ust91JUqXjLA6pXgcAcTEHcGrvQg5kWGjx9ho5SMdWgBGRrBY6CYkw8YtRwZY9SFmkT5poi",
  "key43": "3fW7NvHP96F35b3fYy32raM6K7chTZeWpsNfwERDTu4HXAd2BsERfuWz8bnGxqRzQeBURqtvo6kgKyKJcT6mMqgD",
  "key44": "3uw8mBQCQrCz4CkiD8psezJ2phqWzktXiZwgBKEFvEFtECq3xNJ3L5ZhzA5sz4Rv6jMD6JC9c5EGdxBZA8NYbEzW",
  "key45": "ptQ1obCreRBDFGng2ieHk5TY9GSWt1NUW7nqvFwBkUY4Cv5Hux6tXtxQebuwEeP3Wf8mxPJzJk98KrC5z6zG8wr",
  "key46": "2cMBLKNCmufJjEsjfXPXShRjD64NXDB5L1Phj6GWTwABtzLzFehFMgz6kSfD45ZNPagMoy436qN3wPAArjef2WzY"
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
