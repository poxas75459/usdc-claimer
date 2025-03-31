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
    "2iFfSivJZRUJqKMxVfPNA4Pj8iH6Vj2E9TwZiVVawCqdfRy3wtLUGnhhps1zm1GTiuJUrRyJTYLbbur3G6BJLWBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntFaVURkh6YKdYyjpGoECSSEAfdepHAnpHLPDCkSzeLcEXuhjhHYcFRY9RXcYxRs2A5QQCAVqBztD9B3mHqkHfU",
  "key1": "4nL9uAMmv7muEqrjGyrRi6qEdCC8XpxvzMzLMc9PqFZTZJcefJUscToMu4W6T7XbjDgqvQnTi6Q64UNXpNWtTykm",
  "key2": "5RLKEtw1oLQcMWUNmgtmoG7PdSyvsGeVqkA6HJ2TfVYkC1XX2b5g6QteMMVQCwbt3crLF8zRrx3BrzpD4n8s6xas",
  "key3": "3377u7nn7Mq2X5NGQTuBbSkQvWENE6L7vBprzHvaBjrzYcwcYzLnHoE9cW6qd7Pc9pxnB1Y8mRzscz2BEW3PR9Jd",
  "key4": "an5U54LR66UWVDyEeWJbgb9WN1braUuVHrJqUDRM2KNJ7VnQDJmp3Xr71a4gY4khMqB1XNATwf5JBWvdfepacx6",
  "key5": "3KgVKheU8JuTtGFNeYPH6HbfS5vMR2N8VcvMKWtUuCWF4k41mDdVaNwcfVygfrJijn2k32n6qUxhTZFey4CTZZCQ",
  "key6": "5QX6yb3WLhPvF4jQLv4MPpU9vjtd5bYVw2GNMdCPzkA7cPVbXTPHbTfTxkf36GzLg5FaGdw6LY36WhHLpJ6Tybpi",
  "key7": "5g9CA3kMuHwfLMjuDLpNnduGfkQmsVgRUkKuM62PqDtcRUpmKiechDdG548M6iosfDLtfjudAqEUwZ2U4kpo3xjh",
  "key8": "5Cx5ogmdz5DhvpswvfFGacXnkx3VQpnK6NrPZ6hur4adb9bJby5D2dCrmvTK5Zk1uGL6PaiLnYwuhRFNtKXFQvQY",
  "key9": "MznbvVNbfu22hEGkcYMKBrnpbfpsjwVLZDdFLovrrEQLf95oUgi7WUgWiVavvwKtEr2uScP71xvMUevE2yKN4zG",
  "key10": "bDJbpmS3NzBMHTPDbcs6gFvToKo5Wzhh1FEEcjVLHWnKm7oyhaunynBCrcxXkB2T8u82mJaJTGDexMfwcxmsuRU",
  "key11": "53AjuXdzMMqMv5VRQUDvCb64B8CoUgFMjZJ4esQXHxixfnZRgnp6TuaMLJBT5AXqCLs2ZJw5SvQNobGcUo3Ubxyf",
  "key12": "51hygSefSNavyuG1VznfLVSVARLkcPmw47DcueX1VpUntHXkwirbGRZaQmrckcotQoSshUX9s93DFe8zdWhgp7h9",
  "key13": "yCQmpPcpGAvmZaHvZerc71TduRHsUpdRr2MBqxu5Vdr3eELmUAuvdRsoyWbNrTGsPADbEz5DJ4BMdMzpKKxDxaW",
  "key14": "2jFNTTLBmGD45ANaUu3vcrY1XGzGkWVMekpNeQ5UUQWWiZZTizxbuAH5wXRfTUPWSgYxiEfcq6qxATwENUPAYQQ1",
  "key15": "3LUaXjbzQPhdfi4jn7Fdi1VvM9HiCKTSDXWCHT8GyrkGNQxcQVDmk3f215fcRDU9GpNvVHTAy6RGnyu1fQhiHt59",
  "key16": "2Hzi3fE4LPhibHC8V5c2RfvasYRwpdWahh2abH2Gk67TkkXm3VXRXWFiZF2td6gstngyrgnHXGNXn3MeSgvszeC",
  "key17": "4HgERettcQC9HaBEcaeenB6MB7nGidPu2fEFhzi8jjRestStfFEtzo2GeKBibWh2siZUhcSgA6Vypwqo55X8i5Bi",
  "key18": "3x4chHoP5rtzhBAYQi39cqiBXXr2P2uBki8XbgD8ivwsP5nSBbQacbcHF8ChewAxEun8cLvjKCCjXxdu2hYEGJFf",
  "key19": "2qFE1rnJWR1zWXAwCY8xQNG1v3Ev4zo2RPbtNSs3VbRre8ubLZouAPCikucMRZDZV2Goj1LPq87T5Vv1vwDhdmUU",
  "key20": "33J4powZ9p1RRLrxJvca5QALAJTrdkBucFJGM9C1eXXJFVMWqWaki9RbddqMBjACrsPZ2HZuMWhUAWgoAc864XpN",
  "key21": "5ymhdnjh1zTVb8pnUBPBovVvjvMvF7wakkk3LD5BEGALFwkXbkMxXFZWyr7HPBvuSuNiLS8TU769rz4Paev46msW",
  "key22": "2CtkFL2EbXrdWjeQk2DaMf5hWoGGSnCTvucxeRLVUkM2uJ8Lzm2Zv9W5tXKYzPYLX8YyUUYMxGb87M62d6uERXFv",
  "key23": "3n7YvtdMxxXxokFbNXVNB9REBc1ZuDVcmoVVoXehZUfr7ZUhkUHvPctTqAyffiSF32TBBxW5cK8pAHDVq3mWoesq",
  "key24": "5aGL239WmLPxefGqBBW3e4VPdWhrvmt64TJJ6NoZpW82nGqWRfgDFZ92NE3ycZFUi7esu1CAJbTZsB2kJvx2tGqd",
  "key25": "FPkGvVz7PtyPE6ZZM9t4Vcs19ePJeZkFBZR4CgqLisBTTrNNHzHUPQW8t13nVyrCPoaGZcoVFDYfjf1NDJxkJbc",
  "key26": "27sxvHSCNNZhtC33j8MGo5ngwC46NBEpDPRuwhPgUQXJipQmixmJwJd1hdjsLcMdLXXEsssiYCzkneUBLRcc3TEx",
  "key27": "byUjBk7yVpFn1PMhf9f92F6CBAenDRaAA1G86pJkQBYtSjv4AKoWRB153ZsLSS8xbCHvgaLfDvADWP4baLirJ5e",
  "key28": "2RrFNBDhhiDBRxSjUxCQiwGdPZ32tpZS78M6jS5AtXQgYD7YjeXLnURgqJ14511hoTx8qS9c4mFNiycGhrVxxkcB",
  "key29": "24aXEcQL8vD1zSTd8fVkN9MMmp6TNYoyi1zoMLYmAmFDqt9b8Q8SSsbbrFyNkAZ11rFqhNitqF7Ae8hd5fgah3mM",
  "key30": "3yp6QurtLhbgaJC3P9gUfS4nSUXy9oH2t8G5CZuZhFRHWZ3H9CGhiqabqGePvyTfuDxqGjGD5cZsNmEaKLKUyrgy",
  "key31": "63c1Quxv2UTNZwo56LHhUPsu1bbjiiCDMCJXwBSnLswFRcgZpxsw4LiLmikkKZpPcDsA3LKssmngPjjZdGo1156r",
  "key32": "54kLdcLJLupyPkpNAnVvJWZYPA5PtA4JWNDGdxMiU1St8XZGWFtV7f4gBR5bUSSAxaxqFAed3oKXP7DEVgmY4HE6",
  "key33": "2QDoigzRm19xxdTt92yfx2FMLSBMP3Z8NjB3crRAgFbbdkrZ2Nzhx7g9yGvXwsrvkwCFL5xysLcMrSnwoTz2tjwo",
  "key34": "3QSUD7LmRoXvFTyozGdUS58C6uys6gdHM49Tw8YYs1qym491FLSbvAQXF77cvcqfqb5bG8tpQC3at2cv2RYH9JpM",
  "key35": "3Vfp72pMK1fUgKGNHYfQSFo7WvxHwm4X7F45yCicuhUjLtsyZms4eEgesxutmx3QEAZQCc7xk5gR4W9DqrkAmMF1",
  "key36": "4N3tEj32rtZng58RfkkaNLuGNomdKJ3CL4mRTAyDRPRM1o4LnGPLt5SfkaXDU4v6A9pPz8xBy3CnSRS97YU4Kb37",
  "key37": "3GCdf31JeZoYzkakLGgetDAvKsrQwB87i1SGdZKox4txmZ9coV6Vkmf5xXg95Tchs5br7Ln8LovLt5i9cvRU1DXL",
  "key38": "4Hrws1GZXrKKA2hw3g35AtsFkyu77cjbt7e9Bm66uXWrLbXwkVYE8RSLYwkUBqYEgwxC6H5CxpPtGdtD4AD1wrcs",
  "key39": "V4MJ26WeEavCCDeba32pPikkSz8jPfut8Gwpk34Jk193p8inpFENUGDPkFp8KSC4k2EGMcvKSED6uqhiroPhqqB",
  "key40": "4z2DyYSvtSC1sUd3XTv5ME9QCXCryUs6Lzi8RPevYtSUnUvzf8rweSqWxtDDiSncQWBn5nJXbNczRnJn6LfP5JLm"
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
