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
    "3aJ9nNhc8KBM4c8anGrXi8hMF5pd9XQ4hmrorDAxBCQEMdP4V4cRHP16RkDT2b2rjDEvLqtdxLPFSpMhKRxj7tBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYe23izJtmCm4tyaLkwSFpr28MX8QqctQFxCGw7zd1nxBimvdrZVQVaguwiuyPR2t5e8FiPBJg8Mc8nCv71c8Vu",
  "key1": "2gcjKbia6QHAPPvnZRXmbefK1JcgU6YFBSPzBFfESeosKp2T7WLMfMZtfe9qjZxPFJwmgPWsKZ6VT1cbqF3VBp6S",
  "key2": "4pzBbKGAyyEr9MjpfPbvQnV5148pDjtwt9gawEqEoPBV3pTBhnN1CpJDWgqLRwbhRjKuZaZejyUYnUaasBrJh3nA",
  "key3": "4dKTrBkgHz3PcCMGeis4xdnrdas5dtoy7PwA78BHFvv9tUi17izAmUkRxDMuCfQyi5vBcqn6W6hKZdHmnb1cpYYc",
  "key4": "4BJTbsKTBQ9LKdHVt8eEraM9rkzGmnU97AXgLMmTxq6sCKCXYgMFt8JC2KkUzbCWijjBRrYX7d3xhAvUu8P5RWLb",
  "key5": "2gerquk3uEjYY5QL2TM1JnNHPNwEM8tk88fay5CJiyxZ9Kqzwr6hjHUuJHUNCStLFcczNJ2TZBuQCej19xy6aLnz",
  "key6": "539JEjiLg2WKpcQT6u1Nvt8tnfmqDENbPq6nh8pkMBnSHHV4JRAwz3yjEttSsXddBRJthc8UxfRzUHMyy1s5Tmgw",
  "key7": "Z2kAeq3sQbS9jzDiUXDD8bqZWXULi19QrkTQthuHCQnvB3soGPmWS86MtBou91TYxeqFs7z2NpSaocZ8sXBirCF",
  "key8": "5TmxFBTjduhdRNvGEtKfAiVxmg6B49dv7wBB6SoyjEPgKYE7PwUTPzAMwS1ncrPC8SbkpiQ8QkaxvQVGsuaAVRHu",
  "key9": "47EdB5j3ErpD5sVtNPcwcqkCjJDhLEW9af9QSUSmMU6cMKjTVXhKGRJpgc6yxNye3aZSdtWHnbESMM5RVkcnStbF",
  "key10": "2W4f8APDR9Cut1nMzZ85zxPXvurfexcBUdvmvoBuCSsSJXKV7ZYGNLaBcSURnhYGUvpdwXKvKV2XvkySPeMVD6na",
  "key11": "651UVpR4z5DDYowhsaC7VbWeA1S35mJv5RaQcegJsp5xvs9VZEREYrZ7h4wujfU6Pb8Jpva61mQateijC9VfCYrw",
  "key12": "51AH7AvkzxRvjnGtQj4qP79X2QJ42UVvCAyKY3U4CwU9RN3hoW4wG4tx285h3BM35qbTvecXT8EKFqJCn4aCbLmf",
  "key13": "4wy2zcWHGmsSHntmdSTeJjtgSMh1UBn2dSu64NWMw8bHqhJtY9r7pULZXWH1Ju2hoFhhoyMKwJQqLFFPJtHNAX23",
  "key14": "4qeinp2ZizvJmhTAxzv4BFDhk9EBZUhE7LPLTFm9s15GKSBFF6Fx2jRNaAT3B2ueYN9EvBcLPcS9GLiVxapxQNyM",
  "key15": "45Ls4oDsdGEHih38QFTTbCbkbmtFJRVWAz4nppZegbipguumCDmE2KuWvNz3bP18671LmAeR5pKeA5ATZKeQHrxr",
  "key16": "cYfFuK2uSMWTmYUtvfkTygoePoyxXd7ogiD5yLRnWGfF6fqXibvv9K74t63h1XKAiaQoYusJktBFZBNUNvroMoi",
  "key17": "33TBS3xZQQFmXzG71YPiEDXWfbtRzUCZpPZBzJY1KhhYUDnWnm63CZany9LWUacRngppYPH85eLSnrCEVDn4pE5T",
  "key18": "4DLS4N6vGPY1WaVaeZVHpjeWALX1y8oC9Dov1ZYBJEY81B6Dc5txoh4rWzMEyosD9gw3Bm5x1xXvktDxuR1qXq9N",
  "key19": "5mMqQXBeAgs8imXww5kStRmbzHcfFyhx7oxaYdSgRrV54KZD7JZEEgom6bazXqRnhPBLVFG5xwq8p3uWRy4utTd3",
  "key20": "2iPJmvqL33guKrTPtJcyWk5SEQJcPLWhNQuURrZP98UbdpPE1xwCKG6S4sMfCep662Pnfhy1KXKAtNoeHZ8VPuiD",
  "key21": "4FD7WgpZiMQoKM6SN5E3LKzgyyQiZHc6YP64atBsGsdMjRcBtsY1uvvv2W8VdEJBpsyViEeC1WSJkBF4qK63ZDtT",
  "key22": "2k5QKke7BBg3RNdEJJetKcbctb2P3r7uD25bjVBXZzvqPLMFD6KxCFNhwQ43RTZJdXzWmABGMgtvSA3Aq9i2fBJA",
  "key23": "5KQNiGBXb1b9XmrcE7so8GsXNCTaGxkd5KANewkfMpg2wp6WXUK7kFcfRDbLzvGdM1a1khG1cLXbrN9u5Shpv2V5",
  "key24": "CCvXsJxy7ms7jSdNkxz969ucgDfD3Lj5j7RpNTsBodqQeLQnKkduDKw5i9JdFVYEFcNZ8FZLH23HWyGyZfG3ch5",
  "key25": "4fVAJPHpD4g3fYsYfwmF52YTjoWxMTQY4u9NFaEsgpqntCgWJxCiFjMZAkCubzuavgKrjeh5DktuLNSKg4GCfVjg",
  "key26": "5WxYcuedexejoMMRhh2ZdrxyjwA8gixcfqwLAkd2yotVrTDHze3C7o5zaR79BeG7mLQnY946PMDK86fHecCfq6xJ",
  "key27": "5xPvhNm3dLmYWPXpLqpFJD9C4PT2BuzXfJhysdmnHiuDcR5PoWiLSqt2BWxp1vhtcfMCW4xmc8Cp8yLuhwnzZBx",
  "key28": "4FVbpKikG6okQ6CZwm4L7qKhUQaVUvcAzdWrQu7WZd1e6tzUoDQN8nah22RWbBpSe9C6etgFcviX89LPHgN7isgz",
  "key29": "29gbp2GPLV51AYqVb8ZJHieLm5PULr2f1THHoYpVD1GBifzfn76AUuEGNo5sSBee1pgLxSFdmbZXbjbiouEvWSmN",
  "key30": "pXJJnC1hKaprMPQsUeXsExHHPB5HWv6iWqiXS5iDG5c4wU3VEXxBz5cHeLUhDL9MEub46hnQ9NP8AKzsaNnwTsi",
  "key31": "2qY8iS4hT84QmS5o18MAh9SENyUbGXHp4N98XR54LfW8z9tBwTBcYhe8tMz8M3XruCEUwBN2PmMyvpyzgYkKFFXW",
  "key32": "5fRVQkm8BXbFXdymJH3m64n64xX1ocC2LvSCUbjkHMQNNDiJTSFTt3P7ZiSZUQAf8qv1pbCHCmgwoniyvKBcZViN",
  "key33": "cctdXayvdcgPEaRTszW8Lsen32PcRsCXgaDHgFeFGycS1QuWBqZYegSudcxKd91xUy1kJJw4SHutfARkMWjpRL6",
  "key34": "ZQ2pv2BpRRCEPpVtgr8KbDopAxD3TEjRYSgZTsuBLMx6Q8dBTg8jdgFEJxG9TLcLJxPDheDw65uwMVNgAoDZmMy",
  "key35": "3HF2DbB9knyHuQQuqdR5mu99dWnbBYcdq1M2aVAgN2HnoNYbUczqqp7yjxMaYGVo5iDmYwBNRUnM9m2uqQbKbpgU",
  "key36": "4RxVp1FZhVnoVxaZaHmHGsK1E13hv9HbkroGMzesAKfBNDxwZNcRi4wNst49UyPv7j8taCrnhXpRcGRK5j4joLpf",
  "key37": "Pv2b149h5G7czTDwrh8FoorPJz5XQZBSRQXdagJJXrXWJc7F7tNiyZsyvtKt64ASQYQRiboq1PyH5TQoiNtPAPf",
  "key38": "GmAuNxysmW52oDUhNWFhuppzHvtwtGZBxLM5h69t2BofYQgWCCgSYgsqeUbWPEKjRfcYEfjTxUG8nDx5snkAz9o",
  "key39": "2mpRcmMjFSXsXgC67MvecDrkT2uibqNDn4oDRwE4cUbeVUh2e1DLoHjPPWsfdrB3FRyJSiqCzfrWAwMFryvuxfTE",
  "key40": "3KngLCA68tbmJ6Ag1Xd8WLJB2imcZXLcQqF8NH2F5f56SSBg8pKayvXbDEaRX43REqL6ygcCWewLz8ZnaK8J568t",
  "key41": "dxyVRjtTnEgCZ3Jb1zfY5Sb7ELNnEoizQvBf38XXeZFL5rDnvrJNvvPSjSHLuJJun7un8dtqYwrgYHnoqFtpugF",
  "key42": "3qD2j39EiZGVeuzCdnji4J5xmkYckaTg5wVKVgTnh8ryafMSYHHCNHQGtQMz4r7gMjmdd4YLbbpvRwtrazr7qZUX",
  "key43": "gbXkxptviapz3pFLUjXU1tnHwCDoeBRduMMbSDQK9pcJah31DcPB1b8zgHqtBq6bSjTcNnBuEmKYeyxBp3V5QjW",
  "key44": "2bB5r4buqnaB9D6XsnHZ4ZDasCS1w5bdXspg3neK4wzb73M3N5Nu4kuhMQPAxA8yaBSwnJnbm4fA2Ysv73E53JWn",
  "key45": "2nkQWV9B8XvXJ24aC45iHn18X4T9iXVt2sy6wzLSniwQ7sD7nsJ3UwgNe1i3Z921dLNxRjQnv67BMhdndf6HeAPn",
  "key46": "3V79PeYgrkVuA75XNUy42JyLLjkH3UEENbXG5LLvB26pwPKgu7VVa64pUBL3qWYuZVYjBogodM55CLTqGpooFJqj"
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
