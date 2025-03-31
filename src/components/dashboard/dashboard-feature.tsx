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
    "KKffDrKfBfywWByre2onBgezDRnzknvSU2bCDaYtiyse4YT6S2soZxaLnDkUjLsFPd4jXNtczht9mGyJafg78ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtU7EDzXZXcrp88okvYEuMUqjxtLk14QHgFL5UdDu4E5cWSPQK8GHqcjmWSwqdB1TsUH5YZ8oXoNF2UCu1Dsxvx",
  "key1": "LQ6VA3MQd87qFvadrYBfRP7FhWtYLmw8J5yFT3QeBpYcYmv3kEKqkv5FV57jJHXPfcGxRLw36ZSPaKSeWHbEyAW",
  "key2": "HatW6qGNatCaWFKdFPJjzKdEVzz4B9xNmC3jgiqD43WL49cju6LmpGH3JxSNNEJR6gJgC6Z4UTFpfTmGTMHJWaZ",
  "key3": "4Ej6dk3dSTfX1Kxgiayfr91wjCjHNc2mcYQz3cC9JQznze3XSX58TRZoEZsjxGM6heZqj6k4uW6ztTp8zgZ5q9ix",
  "key4": "5id8wAzpkRFUhyQvwPM5cxyXqGPVG4mGrVLj6wKcJ2kDEpuagyxBZCGwfidhxfdhnmKUxXdgWJBLHRynqwnm9xgn",
  "key5": "3BxHW93jcYjwFaPyFaDQcTSMDiAGzq5kDwGy8a5vmaTH7SsDg1Qj5u7FV8SGngbMPoxuvuCZpyzZuGfpMssceBPD",
  "key6": "2D6xLoSGVkBrYsumBHce3t3BwGsNTQS9ncpeTGABGGqoS92tYLRbC7mNwmMLbcJV2PC423KkCtioTVELayYkfsSk",
  "key7": "3sjnNUhwmuFW3MP1zLnaG8HwUu86BeFBSwodyTBPd3YsfiM1a5CU1gAU2yZcN4cQEY6LvSAhBJs5MGa1kSQkL3Ax",
  "key8": "3mdQSVhDzLaX32SS6XHgTtZUXhX4kFP2FmamcywJkMesy78MDx1d4jFKcLcR4yxdDt4SW3vbajFHz9LuY7cwx5fW",
  "key9": "4tyYrnybKLRAbSbc386NkCZcoZ5tt4MpGtr53byhEShQs3jXwnaQkb3UgVxdG7DzTcEYHgBbs7NYUGcfoj7y3HY1",
  "key10": "4YomDDzxjxEZmdR1vCdxkMJdVC8CyAkNb31NRg8meoBevwH4P8HddCWLeD9Q4ykc3WPZp8jxc9yMKmtgZrgF2Xqc",
  "key11": "2J2TJJoG9f67NfoWRTsCn8AxgtAXJTpVMh544Agfro8LYA1VVWZpoLA8v7t9NmHkGMsox6zQpsKnRQBCUAAS9cTP",
  "key12": "5hKwvFmfatwukFRHg2BouS1RW7Xr2LVuzWjMSudE5KDdUdvT9CkajMmAPKpGiZ6zjgxr31rywZjpSpm3VjF7XdLf",
  "key13": "3sMVMCVXr4N8fWzcUZXRFG43d5kihHcgpBmC67F88ikJqKYupwhUu1HT8UJVDewdofJveseiAqLbLTVVQw5QCP7v",
  "key14": "5MQhNNQfhhS7cjZdR7i8wacfcN1Jd6Gcqp3d4X4EdSkxGWd65PpZmTLimtpe7T6VUH629nn1GxU6uKUCMLtKee5w",
  "key15": "5vT8mxWUjGeQG2fq9tzHzNMfMNeN5xfWz3Qa8oj6gRvc4uxE6fXuLDhoEvK5J9gpBPkC94Uxi9APPCZ71Sw7hSQ7",
  "key16": "6mfS5YE1vjcEpaogRvbQENsuKsiHK2pG1aAK8yUDZSH3TnqaQ2uLxGKny9B33Jkix9bkRpyiMxC6oqnvtvtP5pL",
  "key17": "AM5DeVaztiWKbizASaG84xvah6sd9o69USGuW6ueqZ4jvEPpVoLYhtLPRiR63BwoQD9AN7g52YERfK8XNHYVxS6",
  "key18": "22TGQjQZwayHSaZWQckGdrV7HpW1UmMyXRZNvtFBMdfub8GnWwq52J6Md4ezCQMVVyYtZzoSGypNwTYx5daYTgQd",
  "key19": "5RiJMKcuULS6XUPsP84SpqvBGt4FjtuSg8a26Emr34envCnNs6aL8hqLaNGbgPFb4iEBRhgmwR9Uo3NqoDxMMuoe",
  "key20": "3N2ZPp7qjSF1N8Pk11PVSSiSDSSCa6AV88N3tEJxqaFe4cSo42Yp3rPtxvpSfz1fgV2DmPmkLbVRLDQ7EJLuAaWE",
  "key21": "fGNG1pwTTU82m3NmnYVMDo2q7daDwQXMcNweYnz95jrzBKJq9XKyKyeUJ9RAu8Z4djjRcaTb3GydfRrrBhM7Tww",
  "key22": "MwxnGgNDXBrYxe6R87hjnEaqhzCHJr6veUtyAsVtVj5mVXqyhWe2djjPJcHQL9VNwrB2zWuamB6ZsyxStGw3PDt",
  "key23": "w6ivZnEYKvWWnUyx95V9QbFUgSEURsbCSKNvDhfUHWdvAMW1hZNHNdjigi1TP7DRSBcFxDyKwQxAWLyvYMNHzGD",
  "key24": "3gSwVjqDj3FuByXq2bktr4szvWp6PyGHBC2WvgRq5xt7RwVABr8JtuSGdrFbGNnojm27x8BLFRxiFsgY4Y61J1YK",
  "key25": "2ZvGP9apWiq44D7abfNtFjBvybBfunUWvC5GN93rNJpKQuyEtZg2ASdrDJLVzifcC6HSssTeGBiA9PJ1ocXVbPhg",
  "key26": "56c2ccxnCGao9BvFQ5uNJvsBSrgytMrocZtJiGrSdSqYEburAvBmzc6QEXTAdnAwZ44aKtRsidFPBH7D4Q5hDSt6",
  "key27": "iLS2iNqGiNih1TqsebuUdfpbSYqkvBEbyXcX5tXsCpYmF7EvP47UrXb9oKS5c4rr7xkiRwnfbfUcTBScMD9R2ya",
  "key28": "DNkfxM7fu8Vr2spXB52UaCLoA3H8wFAegot7QZY9jU9REvfkTF8mWa5ZNrjTVbdi4UuyNBCKzSsm31orRwBY7fU",
  "key29": "5gaJ4B7tWn7dsoGEK5Kd9UYx8kqt4V4NFGhbnZniw3T3fATfx8dWNapqa9X9aFAWX8DzpQdWpoJt2A6zLNwGm8dv",
  "key30": "66krcSxSMpGWm5H1p5Ujd3xkZ2pZRd5DXQLGoSzGMgtUaB8PDqmVufNQ42nq5VNhvNs77wmA8dmm9S5o4Zov9Juf",
  "key31": "67TbsRXkddBVsqfW9KpwLSeecmSrFfcsS2GwKiKmrtkQ2rJnVaeMjRBUd8vYedogSFJJcpkfDYaVH7QgVoYKjFQi",
  "key32": "4pnxBWwuAPmbjzTwaQYv9VcAr6enrcda5u2dxSonJhfwegJd95gCv49g7EMzeYjxtGa1ZgRedH3mSuDDUzvEehvd",
  "key33": "3TJDwPbZ9Bpa3xCSvD9LsYQXrUbnRG1iPHdZbkygeLLfRQoEzHJfszzZYHsNiAbGzLb7FbHuuG9zxPfaqcJYhdia",
  "key34": "UJBpHFenXaJ75Zp8qjrNWU8KYC54HK9HsRt2GuuiGN7XvPdKJg5bCrapswbESEJ6CvQNEzVkHFsdkSbb8v7uywf",
  "key35": "qXfkYoL5w67p1JgkC2MrFnxvWGM7eJBwgVfZYWaGT92Pevx5qRgKXGZEnRV8nZy9EVjuGzhTWFS5ZN7beaA2tdH",
  "key36": "eApSPipyZ2kbKKb71BzfxbovhPNFSVrV45G6i7grMkpPJwPropKoZ26ciTxUSbQoBFGAPBQe3v5qqBFPy6josr9",
  "key37": "45M8h2oHdfLyLFTzoJqN97rJd5m6CBvsAqCXwbKxpcS3DAorZYwXABKQ9BhWBz4xaJnWBEffic9W99dbMKbqtWCA",
  "key38": "3cHLxARWBGKxYwNSouh63UJfLzGpUyWiSuF181jdEfgL1n9qhZv3tf7EkzUa8upuYZGXn5VWswraL45R745JoEdG",
  "key39": "B3RhiQw5JvCPo7jY1UwwSFGhzY51pgngRs13C5hgzPAfD59MVMkrU47DPP3ps372NfH8VccDapsSvLMnraDQMyH",
  "key40": "4fmSZuX9K6VvUvycWDJ7LMTAMfJft4CGMZL8KccVtuWCotKqCFSfVLM2YNn3uoxGcjysL9cL2eMTtLNEQ3urP13r",
  "key41": "xQMCKpugq2haxa194o3HFHowbpRVP84kvp4HTmWi8CMm1M1Co7jhj9E6SXKxkpsyW5BmbzQQxpx8B4VnVMnxRGT",
  "key42": "2fTiPgqZ6iN569TPLXHibqpmH2s7xbJPYaqSBt5KUNtPWvB2dBbJ8XJQSwQNvd3YTsLHr4zUThUe5A5aS1QDNzG",
  "key43": "5tfF93LgGyq96aeh1DmcYf7h2vATB3KgFhDUC26E6Z7exssg1Fo7t7169TinPSmPQcHokCfbC7SFrvb9uyfpNiCU",
  "key44": "43DoSYpbDVdebiKw8tW1dREhGgyfkCig7qaC5FC7semsthheMdw9mtjnkWfbcchXzwbzcsZNK6epPfbd7cSjBNZ8"
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
