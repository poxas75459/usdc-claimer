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
    "4C1RVE3Soo4dX9kXfUVB2GYV9Q3ovREvd1Ypfi2e6EhhBY1BBqJsiRYo6aVEZqzGTmQDumBSqfqb5dBC2AiPqKRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5veA4KUz8XasbeWCRoDBLTVWxcPKU6F33NcNaSS4fRaNYTehvW8fAFkKygBqanSfjy5jafYcqJLJAUeJfc5s1akR",
  "key1": "49cwt5EWdnjJufw3hje78dyamLa4VwU4SEJP8cxtw5PtDVHL1WNNiaLuMKvV6bzWLJ3rNNjsDceTg277LTcVagxq",
  "key2": "2FtAaMdTCmzX94RpB5fYH8ibhrEoAB7L2jfofUK1uFmPPJqRqCJBfxqTbFQfaQAwAUYT7EZPqj9qLiyrvAkf1Ad",
  "key3": "3qFupVLNYko8j8BRAYVwEzNUCTto58NTDPU2nYjK5SnyNr9xKPnkQhpHQwUPjSP5AXpt5inLVEuPCo791iDofWzL",
  "key4": "3Gj6JU1CyBybYfhXCZyRNHzJMrJCh4bnBERHf5HArWZUPfUL9o8iQNMSudiWnE735pRfBh8UDoXT31jpVKjknPPv",
  "key5": "496hRapsnDJkDVVfBbcELTW72F2YqLeESgN4DvmZhknscnfqBJ73ZkdFKERjW9fmAdyr2swMn21cNWV5G7vxdJGD",
  "key6": "52VzcJeHGwbQAncRDy3CsFS54LHbduXETHaMCcPcQEZoqGz4cu8sbcR4vH9xVUMUo8juU7NpYDT7LtU2q8vwjTd1",
  "key7": "4X6rHAVnKKNbnWTKCC2nGu4xzmr9X4qTDspx1SuW8EkNMEG4KugUCA1rFcFBKpHFgggb1DYfyXFCVRahF13uVqHK",
  "key8": "4GVmaRawHw4tJ31dQvXkRWixKrQpCV4eY5FgiM8jFZ8rQduBw66W3hH91aZrjiEKEywi11ChVa5wBFGXR5xEzWoG",
  "key9": "2QD1zwMjxXyY2Pj5aMZSekepecJydKodYMcue7jhVnqbyo6xzLQoBRLE1nxTxoXSniNNCDZX8kj6538133sN84hr",
  "key10": "o51VSW6f8Y6DpMHwLkkhjyGvWkUkSAguy1UdECHSYEYr6x9feom47pYWBnvtyJW1vqcmra4fmUQJFEueR5miJPp",
  "key11": "ZN2bk33uDuuLBji7xP4g3AawwyFsZ8FvHV7oTyPaCaKKgg3m2iWFei2nuC5x4yT5mnAiNChcKeMhSMp5GPthSvS",
  "key12": "3KiatghVqQihCQyKdFwpreGNvu8qQpNp7vNs5ZKtmxxbKruehLc3gUWVDrKVm96HpbZoyj6JbGoxwcjhfu5PFfJG",
  "key13": "5nvTv66xJCmSm4YTZ2bDfRETPGFuZoJqEugjnLG7zmiY1KGnMwErBZ3WXRFshmHehhNj7ySkn9fdKoUEGxuLZwQs",
  "key14": "2AunY124bWefgpCDPW5z9qTRo5JKYkNPq9Pc6jzFUUNhHphHs1C6WsVkRfgXaAciE9S2E5WnD1QeRoZWsyunG6bS",
  "key15": "3u8oLmBFamfag3fgFwQYZMVnShJUD8dkUVxi9XAKJCY8KpweDNWRD7C7mSCAYEyX2WxvWPATaUb99jXKUaGMwgTr",
  "key16": "4LCzfNuxgFyRftWdN7XAbJ8eRvLq18tg4Pz1Pc16xr2bvCgpmVfwPGxxd4eF1h3g5cwJeRZhmTzBebyaDtfBHZZm",
  "key17": "51TG2Dsnitkd2YnmoyVUvXcGWk4fcGAq5f96gu4qqGXENN3bcrjh3bbfpV2niVXG4gaxHBuuS3XMvkVytkgdfaYA",
  "key18": "9pjUz6AV9LfrSqx5eTJTKdNAzZpXsjoUgwsLNLkwwDQHobxAwxxVUvDAcfsyH2ZMqJ2NeMPJB48T1pLjAAiGSCs",
  "key19": "43MJBHMUcBnujpUKrKMBREg1v85FpHaHUxswBzU7xePRqxxwN1higEXXFYwzJ3VwQqneXBBGEgvSri1deeRW4X2f",
  "key20": "5uvZGf3PwLMbchVUJg3awSY95sEfkQoWsmCzD4Ub6hp7T3GAJBoLcnjkhoS1rQWdqUWidhqQ9LFMPJ22VizpyjBk",
  "key21": "2L26xnKsHT72UEmnPHSiHRxnp6nA1k7jY6Vz4ZnvpGSjfpru8JzY2DVQc1sPnmXtjRxubXUKMmT4ocB11Mks9z8s",
  "key22": "3fb1MQCqKG7kkHWqP26HwEU5scEDR7HGCMNcWeMXXYGu4pe37NY3y8zDerQZRKdbrp7qh2ACnVAA1s8w95MH8X4s",
  "key23": "67VpEKVYuYstspyjHd5bje6ApuRxauUEH4B8zwbLR149A8s38vwjRbVtdGFkGbhDmHyBL53MUHkcq216kVz9jbG",
  "key24": "4BwxnFpXGm3n3QTmKus4mNbNsTMmCn7ztPM2Hj24RkagCeDpduSXpvykXYLj1wPJXQsdeubwKNNgwrZsKxUZmDRg",
  "key25": "vsn4DNhGwbJAiSFEoakgBLDtUvssDnyoKtnTsNY4hKX41SZVv6ue9LUhzpZAxcj4WhMph9o8Euq6pgwx8XeJYm7",
  "key26": "3DsLWngDadzFwyouspxFVwq4KYgbC1LKR7cLom6p67QGfZgRqA1aFDH9Md56TnTknK6ACu4CTJxcd64PE18c3mvz",
  "key27": "n3Lch7w1XWkBpwqbFbfd5cmx7XT7AoZ5bS4tjkAYTZfkx6MDzYzPC5hDEqNDRnVsD8gB5ukJG4YhGAe9JGsBDRS",
  "key28": "2WKmURcpBsQxwLUwup3vU4WxnZdUeM1W4mF9TrfEfCyK9W8w2vGF7FsrfWCutpA7kD9SvpMhskM4DSEbqbad35Mc",
  "key29": "2LFcnTA7SDmbV1pRTVNvr1oNyKoYhgKV4BcFmpxUmvD3jXX6i5pfPFWJHh9vPnNSFMJN13qPAwAB534o8BC8QKG3",
  "key30": "2GsB1PGxpyLQrfc9xcrLm6Gn4FnkjVniFwgnFxQkxSXVJg2DvLdd6mafGsqWgcgRg7UnZsbyGJkFXY6XCMU1tpLQ"
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
