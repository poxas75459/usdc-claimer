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
    "2JwU5P723bHgcndx6FT1ibgytw7BbCoqUfiiL1Ti9enmzfrGdZ1hk9c8YzFYwp6ykYXhWyDo93W6KAkRmY4ZLtmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "txADTpxpQFdYh9G8JXGWjb71XXBdjACbP5mGc5vFNaW6uvFQSmJ95yDWDDoAMdLUUY6bZTCWk6bZSsXA17Lf8KS",
  "key1": "yynSQaAtzPANz6zcvVEMaj414Q2rESNLRTFKPveScD1ctEzMf579sxZYn7ZjXTjWQiVEU3i5S6ggRuh4hSvTJ9z",
  "key2": "3bChLGxM2tJvNdoo3EH4dS62guRcFTDznwgon74r7dKT61TkvZdtZtoPoD6cqo8TztQf5rWTdvB7X3uRrYQSmaoR",
  "key3": "cfmQhct1r84TsLxZS7qTPgHP4Dnnw2tbw4wD1JFfCnDXMpEvBdpAx5Q4UvExu7AUfLhkXG3pNFvffxpGnGG3jBU",
  "key4": "5DuGQFFCY92cSRWvyL8CPRzrGAfeFm1oWjT5CnCEg7uo4cicuYpRsroA7LUFtwdZ7koxuCRCyVjRa8peGYnPv1Ji",
  "key5": "3WScAwbb29NacAR3h9WvC6tZC48eYcry3oVFyjmJmRwuZFZVzHhMFTbviZtVKZvi4BhFcuXQRycawDWyPLU7iGeS",
  "key6": "3AbJ7LqspB5cw8Jd49sYQdW5J6f76sF7LwLJ5dab3QtSJcxSd3MLnA1he9tHqigoAe4vSR9GM1zTkYCTpBfTDNu3",
  "key7": "5wQMBWUMZcb9oMeD9rsXqA4qKXepA3LgL9EoKCoKokTVTpxkLtcXSJ1goYPKyPJqa5GJNSXEvMzf1mCuXZx8euNH",
  "key8": "5QRY9zXWLNxAUTcfL6Nc7Meg18nUNXWuELA8pE2un5mZCFwxkm435oGdncF8EjddZLUhVvn9jALfY7X24b4zthKE",
  "key9": "ar6umsWKKEwvWhD8tX6XNTVaBnvkhjUNLM26r5wstpmr1DuacpoHvNJgTDC3wnRBDxPQh9Tw7WwsCx1GK8i2jZE",
  "key10": "5tazNy7Fy1kDQCH7Vc4HJjNf3fpBpY1FHemxMa5GW8CCHcKAMpTJ1kAifTnq9xHgV56EhpXpq3h52Umt5J8wHtpi",
  "key11": "2EcxiMun583QA2Wo5FicDaJnkwA4ivyZ5Gb9G6Z7XotFU5FkWsaKTQN6KYNcpoMgD2Hzif2RLKu7SaL6c7hG6143",
  "key12": "5pVDz19YYkTfub5n6nVP6nvmA3gk7DbByW2sUDYxjnM63nwAZW4QwvZCJUUrxjgMLDx5Yy7vHy5WqJdo7WHeXsqN",
  "key13": "4TWd1aqGBpCfdPkuryEni6vuBsJoTvDdncFKX2pDLEKiBwUtT5ckRLwBPXm24wPT5KfVrKmxHLAT9Md2mQmDZAp1",
  "key14": "2HXFWU37Yn3ZTt4MButFC3sndfmC8QtSYBkYwczbN8WamAhnrXjBXyzoDn2GTV69J4F5xnCAS92q3cHPY7ZWGoi4",
  "key15": "4kf8cT2qPdQXRrZVDiDpYCfqwVLgGd7eT8y9SaeDB6WJUhB4E2vGwuSvLAY9DADHxRpWL8PK2CHvSmGMMRRQdYN7",
  "key16": "2gAWs1WUke6rTxqqgNufNoLWoRiyUvzorwnJ4eTMPnHyuuZT5xm1Y4hmBR5puT7KuUu72SUUJCbDViLNkegmJUoK",
  "key17": "3TaDfBf2pKxWS6H7wLJfThDoenewoTifAWdVHCqB8h2RRmY1zRLi2QrM5kNXjiuPtWLd9aAjELphkGCmoTG533rK",
  "key18": "5QrF9Ua7rBew73ByT4QYPJ9cbGrJKLqVNpmbTy4kEe6nHnbzscyL66UzKswXmBD1orSPW8vow97X9dqsULb1EuSn",
  "key19": "2kvHs2VYzcjjPPDQWwA3N5iVrJfxv99XXoqVUerq26u1976JfSyruUKPkFyB1FcGboExbgLnHuH8ZnuBMkVHJnHN",
  "key20": "3rgYn7uybjmTMFErFV4ALrL3pP4BFQ4hcg6r4TfpvJZtQoc6FiZYpyW4NwZcxGfbpeEtP3znD73jE71937yccfcQ",
  "key21": "2P5L49QvskANYYdJSuy3ijGZRKKPDtyjoobMESMJ479Wn7orvvLuEAZrrXXorVYcKeo2aXc8M83Lnmrhu2MCfbY5",
  "key22": "4Dpc7ZgB2yCGQaVEAhC8jd2wpWp6pwPoEpKmuiqPQrorxepK71WaCmGc1rqfzFF4gkbCBvqTMjfAGhU3yhSyLZRx",
  "key23": "4HumHkwA2MW1fCuJjJgagAPdu5Yn1zjnH4j8PShxypQEdBDEJkHEBS1jZa2aGP7CwyVJwu62wD5PEzvxFZaTpfnW",
  "key24": "2o97Cu4ewTQkjV1cVbaUKtrpReMSPUbJCQyxEqKsSuu5V5nUtV2Pybu97XCVretHeXDjmaxyME7rLs3Jnvp2r3F3",
  "key25": "8p9LvoY8dShsz6UvJKSko86xy3r4KWkF1rFAzAqdZMRSnfX8gHBxJgYTAmGNfpA7DWFbreJMMMXDc3ZhC39czTV",
  "key26": "ZXS6fh6veRuPaZ1zWevJEuMmqFMjAqWuwcLMHZUQmN5UB4rPNXUc8wJqyxnjtVkHH3tHL9VowApbaXzzJZozjHa",
  "key27": "vmULncxiqxHuXTB8DZvuP2N1K6FbJZL52HTPUEai4hBCkU17tB3jhxFEcqrfWs9Hy9Ryw2pyqYh1GUgV3zAVrxq",
  "key28": "4NXtcySCKe8oTYVdgeEVBtnPZtzwJXsk7RvxT7sEajfuekS2S6kxEZTdq1Xs4jeSGhRWKE8bPnbARVyJGTydejfb",
  "key29": "4wwauBBFz2QYLiPF6Hp8Ay9cyyd8ysh9DUVvpvUuh8XRnorEBuyqnHQkAHKdTd5KBybrym9UemKnqWK6HQUzw2um",
  "key30": "2zF3z5KdcxWM9f562jnvzJVF87ocRvvBZ6jxhxwCS5LVFPnk8N8rocgne5okPguxALQCdApJcwCMFYNrJeZibrF6",
  "key31": "3YbMQBY6L16wS631zEHnT1KEQu5bKhzDxoPznV4DrF8k5xT8xn5ib6AK26pRWjgTvj8Pbv57QWHnzmMme6ipvQ9f",
  "key32": "AhpkfSNsZ9ajhyQrCVAZUJApeR3hfSBfsjYRotaPL3bmJc1b3CsW6Y5aaVCtAPeETswb5owbJqZc69jv3sviRQy",
  "key33": "3PCtfAJDeL7fKasinD9cXJvyzuayiYat9FxCuJuHPnsWexqq9dyofa4CAkKZSCKez3qaJ9Cc9kakPLP2Q1HY43o7",
  "key34": "f7sif6sRSBJzhNBNmdoeaXNuCmSozuyTzDyUTuKsuwyGWjCeAYX8BCsxXxE2YcaoSKy6ovx8QdR9mn1Vezpb7K4",
  "key35": "4CK5Vrt8E3aCQgBanH1LoPEHdUPU7P4euUfcakzGHTHZSXnW5oVyGYpkRSXzd4Es8CSi4weeHdZayVa1swE1bxhd",
  "key36": "3wm4WBw6crSvRgDfQWTh9Wo5b7g8xyLaecqTV3nwb8miARRD1DE8LtnW9cN4evoc53cArZ4bjyrqYJdaoWTyz9kd",
  "key37": "dAt2d2j93WM26JF49BK4gEUsjF6unXbafw5hU4a1Tv6gUexfENhyFzQzRkuroXVZsFk1ZAATCEq9bEwfU9osrki",
  "key38": "74Nby7G6525dUfRUvLMSeuzXBfXCCaKeSfuo9xrdjvTHcikZnFVL98Vrci6how9Fo2Jc7xGZAMcnAyCFSVroz7y",
  "key39": "4V3sxvboZuC3qqmoq84eoQRC1N5PaWoYUHek2zNKwBKu97xzWCnepa3LwcFnSnchM2jw7eqhJyMTmvsPx9J2taik",
  "key40": "omrjpNX4KjTobvQrj5AoGUqituWBhyCAfZ6BTrFfbJM1YDwNM7DwibNjKUXqZvxp8WgsRwtAkCv7anmjYeZ7DgX",
  "key41": "5HYWWBK6FNE8ZrhxxBiUCi45yQ78uMrMATJYiWrAxM9F2wxucCgVU7erAvcTb6FY7gitZ59gjKA6VdLQzUMemN2C",
  "key42": "BCyvycHi7TUe6xc512ca6iHyzNwduVQu8uc9MFk8K1RFTCVkqcgVx7tUTMWhdDUF2RyLMW9y8fkUxcnhrQtpNaR",
  "key43": "3EhHKxAKfTEPVbJapeX6NTcxXWL3tu9qKVqxX73hXR99tmdVjggXWZmgJLcsCy4LFLuBBizkb9GT6PRe1gdVTDfY",
  "key44": "5sZYbGQR9CjGVgq34HezH8miSmMs2GkpinJAdhNtuurEi3C9fiapL8PzZF5dgKb1P9ZwBLcUeZdJtH1PPbESm9ze",
  "key45": "4BKfWeJNde5Z3CpPsc43boXCqt4QHmTx2t2Rq8wiKLvMGTRHdrQFThK2NMPGyQ7qpkG3FFsoTBzgG5nqZem4a97j"
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
