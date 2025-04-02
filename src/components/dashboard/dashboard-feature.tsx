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
    "5KAcpi7yqcFBEV3tprU7hCAYcv5MFU2BKk4PXqaiGE8mSpV9V9VbNA894g51FC1P7pmyToq6Fpnwag37wNS2mSrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mijUEJmZRXu47jzV4mP2wfAeodPBKD1KHD7GvPqcKkZgxMfMuRbc9HUo1Gab2Y8Pm7x12NJcKzQKRAEGG3y9Tpy",
  "key1": "3NbYfNEqPwzRLa1HcpwAQov16zaYBEtr8JsY25XwBm4MayEoQzqTfPDQejtnWWbdYHp8UEPHFmYBz9d8ZEsyYoqQ",
  "key2": "5gD3LbP7NB1VavHN6aByrDTbTnm6rx9MzehyHs7gkBiwPa3h8vKTbH2jXUKU6dWmu5ojiC73TGjZo7TSMjYyXxPN",
  "key3": "3bvq1SDzChVBq9wP8vq1x5sZmkRn9yCiPQfNct5taPY9uu4yJYMXgLQ4FT6HVu2NGNkZ7zYBiDNM2gqA9RCZpTfF",
  "key4": "UmijYPpZWhKESzV7rJxezUkBbByGrHqfC1MADpCxUQmyGvg7xgRgZrvSd27rpXmmKJYwZwvUtqUt6MaFQt7iycF",
  "key5": "62oce8mLqdyq7TiqHPYEHSY32r36wSMHvPPeWgupoRkCrnHV4JSuRVptT7zHwCU1xs43By8Vh7jx6pyLAR8rMDJr",
  "key6": "5Ke3kdC2Th3VCAqwZKBKsAYiDMSuYhZ1jps1r5j6LTBTcZQq3rkvZh5sEqSGXTGytVXRUKPNddSLpUrgBLDgaHQb",
  "key7": "3zibgMfmzdR5o42fuPpVKvByJbKmfhKqU4uVZPxibCJ9Bb9E4xgABB4ZqCWZLpLjNZCEX3FrFxbWQQ2JrSaKFpnR",
  "key8": "35kYa7q1LxuLtUSJh5UifWNucyyBKpqKofFcArN9h6zowr8DcoryejZELcZUNiTGpcp5D8ZeAVqrrrfDQN1pKNfQ",
  "key9": "2GNkjNkoFcsfDGZN5eSu1sfwGMK2cVrhmpCXFtaGyBqGBHkbWFcAaXZwGThpG3NdDgiM7KvX4yTecJVTXVVwprRQ",
  "key10": "5qduFMeVq1sv12XqZACz2rcDSoajS6MjwojytNrFPjxx7HHPUb8jgLzrhborg4BCgW7JgwSSWFNkxqP1zhEf78Gb",
  "key11": "5adtxUEv9SPVuvYHhGZvA5qLrAuHJer6LWQV3KEFDkx4bW21sa7aaJyiPFNwLGK68K56zKkcbVrsnihoURxJSFjw",
  "key12": "3W8zrvNs7iBTnVuaGux34fwv7Zjy4QczkRgoJeh7rK1e6Gy48rHpviiD153BmGNncGuH5WwLkPMzSAUDiqy9Gjy6",
  "key13": "4WnvjY42tUYqEPcwrwcKshh3XgB6ViDM39rvHKEGkfwWTfTCLFAMVX62LJMZFnrdkX4gMg4ot3KkTEhJRGDSnZJM",
  "key14": "5zzPLBtEUYooHhe2iZM8EwdQPhaAMmFQMMpsdHyakWbJ4nUedcoTxCnUmofvZcXNuLA35mnwi488Q6JULNihwk1Q",
  "key15": "5FEiRr9EWxCUWp7jSyZvB4XnpvMS94diezZnhcXVpEHG66AA3cwwdYiFDhaSzDWSE11Rs31NimXxuyrFARPAqgKw",
  "key16": "3pzTtrc77DDxXHEz6PLbTBcTU1XwcsYWtzCDV5V8JtKevUmxrsdnjf5DTDYY8iWrqd4XQFvHrr2YHwg3zzSNYvZv",
  "key17": "4FyBQVaaxg1yBBjYBirDN3qcdFtbALFaY4wTvbubz6EgL9dN28i5JScWeu6vwtr6wsmVLQjgybT45GA1i72KBBuY",
  "key18": "3QdRJ6e5HDqnqMbPq53Mkd3XfaztXarcnVzYSCGEiHWkTxDKGWx6UL1f3nDZdnMEySNku4Fw6MJyBPNfvMnKcoBz",
  "key19": "2Yspw9BDWDsQY99KEkTc4xHTgFHo11hA37y3HbuPVKVB8PnTJcLXY7qzS3pmHAv1zqu9E6XuC1K3h23AQfoWSYtD",
  "key20": "5oSFDnDzDNqjHTMrrTzEPfq2D9Z7bjigh5MuyXhWgncAE2VCYkHuK3rE6ahdiGXk8Tdd9weqVKMqYrdHtA5ESH8v",
  "key21": "5iHwuuVngNXLJy4BdmFkvQA78DnkHkgUGCzcfmpGJmLvwHZtsQX1WEWZCemLaQdCwnJd8xRvy48mRMLoTCbLiMuH",
  "key22": "26P85VDQuwu7jHwHvHkaBDK5nEsKvr4EBZxhznkeV2AL2BFs3gkTvTYTJA3wZ4BGFqugAt8jE3FN5dXhqtMAGhUH",
  "key23": "2XhPPh6nGCKJuUkgnLostH4y9gEVca4dupE1iANBVp4LquMNg5E8JpLsujb8MyFz6A4Rx53E67nNm3HzqBg92ecV",
  "key24": "38o1BZqpFwhgAoEzb215vNTMAjRVVJoi2FuNpDshkz8KJpMYKRZ81ApuV7e5MqChBUBQPHayDMCN88aqxoaYkDNG",
  "key25": "efMdkYBsZDCbgXvGUzxNkuG5gd3v9NReygvEFY5bYsT6rnsmYu1KNeK27XpPt2wWStbi5akYrv7VRz76NvihrST",
  "key26": "4vtrqtGBCgg7ceZgG255DTbrR2DdWBGXnUkmLQcPQVqFkFFgwsSKTNQRi3ZLotPTF1HYFUhGx3qYiqPGVQ8SfmHc",
  "key27": "aoA9S8RaEuqBLyJo99GK2oKmCQzUngC3ZWigYAa5UoGVPrk5mEF6k99ZxnivHRKVkfEnT2GCtFKDHLkEWCBsTzE",
  "key28": "3zaN4uBcD7bn7e96FXRczG4jhKaZVni7gDk8aF12PS9NeBdSBwfgFAnsc2P6z6DwHVKFU7QUCGUXtoQV2Qoain6w",
  "key29": "5xUWVggfeb3JBx5zZUfLFr2smmgwhi3GsYRy3ZmkGE53LcN8dpwqp2kjeJEjuGZqFWTVdSWz66kCSXcu1mZGkYTX",
  "key30": "5SxPsNu7pG9Dz4ioG6FF4pmNvzkxnfAATWc855TDDx5dpV6bF3uyLRjcADNLuTQwtJNAD4v7uRxBGEXXBU2EPokD",
  "key31": "4qbZhHKV6VhQBafSw4CGn86GxMtg4BheuULkMrvnkXMgr9aSreqJ96BVEJAyQ1WP6S8dQA1LqxuokA81grVHxZt2",
  "key32": "6PGys2FNrS5Jn9f899A7cwmpWEPCirvinBbYVsQaH44r1MpYYwHJ18ffrQn6Ddkqr1Mj2eyYmfK65H3M5uUL62d",
  "key33": "4Z3CZroG8aJ8aoghDsNQAYPbBapgjJgJmo3FAvSvRzU2CsuMSVbm2aoviqjqcsFfCb3FyUJTfjp4sVY6jmPcWnyj",
  "key34": "DXTxvgrQcvr3WabuB8dsgaCk7RY988auYctP81Bdbc7kt1oukN2PDWefMMCnfZwy5nv36UqsWTnmCJqx3rxX6Nc",
  "key35": "46YbyCeYBUfYZxqeTFtGPjuLzyBjPkK6bTSQb5fTuVRSp713USLqFKe7j7LTjzWJWpzFzfuhimpGijxAHyZh8gJR",
  "key36": "5CdFXrSNDFt6cUY7TiFMDHgqRtv6kjZku6HzDZJ4pG5askSG97tu1EVQiYm5eMsWwVrPiAHLdtYir72vuq92ECiw"
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
