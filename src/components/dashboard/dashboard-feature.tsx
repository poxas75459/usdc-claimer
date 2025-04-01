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
    "4QaUPGq3xpUgNQDH2rFCHvy3NrBQyZC3whVYzv46d65ENik9mRcmvsChwzg4GNXNwUwji7TcjEgH3wubDD4A6jt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tEvQak3gmcP8csFtyRNVdKucFnmg8o4tjnbpQ1s9Wyy4ifxGP3DuzE5FamYkiAs4uHgEQqbrfkF1JZaCj2V63J",
  "key1": "UjapK6EMBvhkb417k2jM6cnq6SvmLpyG6kDciKvnBAtrYLmabhik3STemFXsbGsrNPEa96cNdwdSwz87NtotXXV",
  "key2": "4Yoq26Xu9FM67w1u3ocGy8jXhAmHnK71sqgDHoXDzHYm1Hyo7varuKVR5jBrc2xgF6EogZTcXB5sWeMZrdEw9dCa",
  "key3": "4kv81B7xv25szpkDPX38h6iyQjNYexSXYAkU6qQe8Kkv32HgTxFYG4Pr5FqsBSWkNDijHHkMHykhqCxR7QZ7CB4e",
  "key4": "2HFqzy2vnX7pt29YH9NDnFCXfEqQLc2YqSw9PLdryohtuVg4VuUjFQNjypsbHBmyFy64SmsTgZjZV8wRA1Jiqd5g",
  "key5": "4vyrBfmLtSXQrt24XNGHq4ZNmEKBuXy144zgimoDYTq2yT33tVFUk1YTF8vtCbV3kTXm6EjerMYhQinmAqFgNxg6",
  "key6": "2DSLgs9f2QTiu7zuGAL4VhBwb1rwGDYXPLVaEUC8C4LVXbsdsVuuZPNRs3KHwiromF7S3PsvTcEKZ7arty83L61b",
  "key7": "3oYDC1FJAQfE6ChxGcAQgpw8Q12zLXyCNaMDSrE7PUMWhsh31NjBQrCWhQEsUARGAeAo2zmNqmnsc6ZDhSMCJbmM",
  "key8": "tRdx7F8Tqvso7a6yFK7zQDUYt34CDD8wv7HVF1iWEnGo24WLjn71Vwj1bSTqvvEHK2ZhFoToeqfErMgSX5KWg8o",
  "key9": "3gAZooFo4NVaJ2kU7pZHysrEjpWpGSjUhRptN36KTsYUDYH4ZwTDk3pxswffkxqJUssvV97FCGNeSFksp3BY8eW8",
  "key10": "3e3kFiiqnRJLUBbLQE8YVm7wFnhSf8a1uZayGyJ4wvJyStyrFt8FRQxByrS9JprgBsFxMmNCPMUQmbRSX8Tr2JBQ",
  "key11": "2t2SEdahKfrzESsQhcdsZ4xg9XFcQByWhnvpUcxU9Pnhu1FxbpabkXL1uXS3urJi42CtQwkTttPEq2CWAqymQvV3",
  "key12": "2JNqktYyjHGPAZfTME6FB4smZuxqeAvoLURSBY3iQruKCKMGaJ36ryrXzaF6iwnKTx1mnaj2s8Bc4cAYt9DyYqtj",
  "key13": "KrAMAfihnLUEcC4WyzymqyCC7tQCRoXM42ndQdFFFqdwQCPdohkjfRmEM3WDEeG1KnHURrXEkHdaHLqi1ufUuVo",
  "key14": "1zsy5swDZasDSCTzEqRvopXQdtiTTCCXhK9o9x8wxfLeFaKgoXJe9kW9ajFZN8MrhwShP6DQkPqx7PMsmRGaeu1",
  "key15": "4QfQD7DS4LkSpC5TMpH7McrXyFSmmwBhGNgoyirMBw4pccBzrsu9Nop2WvbBcerVqWR7669guWLbkUGnY7bcqdEW",
  "key16": "3HJbeoF5e1PPo8pGvy56bEQHw5DgbYvbWNeW4mNnuLM3SN9r375aBPbiMLyRZJBhgkKSrZwJaP48N8yzbEvyb6Sr",
  "key17": "5ZEU9zuJF2Us6JokLJhv8mSXQ2eMMs9pXuGMhkX5CVS6FdjmNkpm1zBbJdCgZ9bAW661HftmCti2Jw8GkAUUx2Nj",
  "key18": "2yzW78vMQAiPTFA9hKaKxmNNJSMtpuzzkhcbaJKzoD4TkgF9YtXrjFQrCDoQYTmbEnpPsxEcTu2vpfmkTZn9Mvxn",
  "key19": "3mrpbwKiR3v8FKX3iYj8uMWyaKH6BXcC8fjnZmWDp93vav5eFgLexfke2bf6mkABT5SViWT6LjTYSCGvE6ec5GFb",
  "key20": "DAYuvqYaHpDkFpLJE6nAkLiYBQM7JXVdkb6eJ3GUnvSDAt3Xb599CorSedzzrfcSGxmXX2ykCrExEoyAZuMpbje",
  "key21": "pMSYwx3bxLKPnbFVmN1exEG974xw7Ydb6u9ojoK971Fj5JDEXfgbtumxPZSPsgd9JKTzuyni28MENmKc25BQnuR",
  "key22": "2LvH9KvmCZ2YD1vYY7JGfVCGxGVubALZRTgDUB7ZzNTR92VghcJhK798uj6JTis7F11tYM2FqHCUDDV3pyTJMYuJ",
  "key23": "579sJXEXXiyyhLDgsJ5gkGRJYbz9EwY6VTAcy8sZeeP7tmMn2d2Lcqw82LCx2KF9uMquNWPEeLF97ou8dDv6QLMz",
  "key24": "31htay1LQ3RUEhS8aMfxJZK5ZFqHXRi9PXrsp3Z8AzMkhiNxfx6TThmh4Jj53qTtW453vpYEWbr3LCFMheGbRPs4",
  "key25": "U12WpFPkD1dDttrJQoJgD3eF2BWfK57vPan9qvGnfprGC9k98LAg71kd5tN26FJwW2EZtX1x5x82hrY7Sc34SxN",
  "key26": "k8Fcs45Bi58NXB1KZnwAUyucnsAwAYzGigxVgT8uUMGHzyS73Sws531xNDkydchKHAjHvBQtra6UeA6hQuc8M8Q",
  "key27": "32VpBYGuzSwE1fVGiXuZ7MPY6R76CVoSjz521w8ViqMTgYUQwXdXDe2jgFgiu1nW5j8MmW2DpbnrgMskEfKgHQmp",
  "key28": "3rnfQUwVv7bFKFcVVgBx5ZkocxGGXxDHX1wRp9kHos4pEmkhj3iAjExAXaK1bKHtFng1qZLFp8SYYVGqEfGqJdus",
  "key29": "4UFsqjdzYdTHLaLP2SjJwdnsdMZfYALEgPSZRZX2YRtJuTCjigrCDso7RbRyNhJwD9vZftiyDQuFEAUivP643Qcw",
  "key30": "4n7nNAKdxQYXZETcY3ivWnAXNu5sB4GEQogp1FwgabkpVDAvBrhmRjTVvXQwHVNTMuWQvBCjosQEE1X5R4uAiwtk"
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
