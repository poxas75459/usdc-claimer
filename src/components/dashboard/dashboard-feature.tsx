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
    "5WrQ5xFug19NHJWrJNyxXv9TW8dDCb8VkWznCZ3HceELo4ib9Erk8LXgCncmMDryxH5iHAaQGVPXpWKfUZgfjrQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5eFcXT1D5ieTFuH8YxYsQGB7UHjRE5m4999fVL8CinpEekvTWkFxGELHAFFwUTNnvrfZDz6xuERQbPLcWED4Dh",
  "key1": "3NL7E7SjA65LHhiTBtFS7hFaTNLEY5RcfA95GbM3Pj53XQyPPR6JQhyDmbciqVzhWLGF9y6FUqEateJEurC6pgH",
  "key2": "3bVNbhC61MR67KxhKDCYNdgwwtXsm1faJy4S5TSTTw3QRtNNg15tmT3f5sLfJgrmBMdgmvgjSrbJEHCQpRFEdPdh",
  "key3": "446FABanS2CEWdFBG1NoP649LVe57tuhpPD7CZFFujsa5YKZV1xPhAqHxqXWVTp43xemE93yAdvb6L74aSFeiJdU",
  "key4": "64Rx5UjHDnHRG8CHMiNorna32rQFfHuVFWUZn9TNhoDJoCs4nBapNhojK85iDs5Yxv6Cq6veyWVAjAmpoE95g8hL",
  "key5": "JKmy69YQxiTJ31dGuXnHXSrdkFVwjWJcLdr8M36htXjbD74reyQzRD5uYjqJH6gy7sVwmz7pHGEq1umpc8rbgHt",
  "key6": "4nBcvttpbbqN9xNSqWqyTVk8bcZ5Woi8eHjwf614nxsd49fGqfHHc9CSJPXMZwoYgZysTtqaccPBSH45pUReNjUh",
  "key7": "29LC8kLH9mkgkuhmDGkppgrxsTjbEimFkBBUeP8aFnvUqBn9feq36ggERfAaKzAydkMbN2FTfcDnTL3k6F85WVqs",
  "key8": "5ZEcm9MRENLeFVS1zsY5Z4RfwDx8e7itSnLUNig4UNdF3pLzohcmLNUTaB4PGyE6BNYzV619LgdfqxUwv1VEkX9a",
  "key9": "2Fqi8ygiMBjCpmE1tKrjcbmicfUNHEujyMM4R6jK3PrdqSymZKtkfu4q2j3eH6GojafcN2xpYUffeTexakmKdMcT",
  "key10": "4tmQLMbzn87PxnVxbyikaQPmSyam1h49NmbhtqJiozN5MSZFUyBuT6YkjxBttsMvD6zXiHcCKZJJCuwYzp6NqVp6",
  "key11": "2q7fHESen3Rsb5AVSs9KxQnAUH4T7GUiVc4yfMTZnkusS7954XoNForEoftGsSsrA4dkxwSWyZjhfUfqNm2KGJ18",
  "key12": "3gSJqqUeXZqsRc4byetecjGCzEpq2gd9TJjjpM3R2amPCVZi84ki9VxZjyxrhna6eaRz5s76EPnKfkTpize9R55z",
  "key13": "5JNtucV2EeY2SNq1XwNRB4wYhGEBtds2bNZM9cgsgRtbsPP5oPMfEVPDgKLoSThf3kZ1LYRBTeS8Fv8qEbKhE1Mn",
  "key14": "24kZJc3RHGnkNGHRuj59VZxkuZ4FLLzKRyUtgU8Axzsvb6vuY19XCpkC6vRtQMytWtkpfuBgwfT5Y43rFFA6hLvw",
  "key15": "UvWXWFtBz8E2sPniiJw2dYSNdLdRQp6VZ1nh2ezCpxabYEzpHZRc5EsaoSeXmXpuUkGeLR5PX2d992DRXpr9HZ1",
  "key16": "4cEjbw4FcxZJXqVoGjmQUUmGCxwVnZZEbabB7Pfj8aFMf4cRaVSfZGPVFqEqTMy5k9A4P9uD59cQstjEJrCp2h7C",
  "key17": "5ZtbRSn4ijrHx191j28XSVPAbZty2brZuyK1TpEu5qfD8R1pX6CLXoZyGo7gsBLPVQATJSZUmMNHb7KSRZF8dALh",
  "key18": "5iRhaTy1hQNkFnrKJQTCm4nmZWoufuThSgMH9b7ohLpD1NSxyMEKoBD4jhkQpfhipr6qWSHr7qm4gmR5jf6HAW73",
  "key19": "2vQKzHfVnKNUvSuA53mDE6HpNAzXyDBEiLfYFw5s1BSHBzF925athDGvfx2vowPc5NKHUbZAJij9zxF3cxa6TeqN",
  "key20": "3XfoZvCramPTCmgg67pkkM6a9bx6ZLBYKsbCyMEfprKBWd9zhTnh91Y2wSCh16kDx3N5qYxinbPVDc7amxXUQFMa",
  "key21": "seXKjedvV2oTk7GvN1h48ZkywqYvn1J4Jxq7xLv9Vtexwfo9GYjjkS49x41jZrgc1CzK7JFUuFhaNd5oTd9nz6L",
  "key22": "2o6B46yJSMQ9VooDKkLY7wZ3rKzCt4AM5LDgd5j5CEZ5YsSCAmJeXCyAZZR313hT79eVnxx6dDK3pj3wG2fmAqod",
  "key23": "2nDayii8vHLf1XtFkeNqK6TQsHo3EhyB5ib1spDcsKcearG9eRDX5pV1b8Pyj8cX7iYDTeqeDWvqdsST3MbqWziH",
  "key24": "4niU14YsEbmadnLF7qryUBs5QPkBCHSRxND4nTXefWFk4vHNH6mBSuuA9yyfjLcqkXJfu66PKVXGEeVKNkdRCbDe",
  "key25": "2o55rUQqPxjYJy1Myj6mSNAQgNWpkaLaEu3k8Dp14khYXRcbiejJdRxizHh4yrpQTgMxugWX24dHwS1PFTFCSgsa",
  "key26": "35vF7UE1TrfVppqMVDex1WqqXbsvZMjL7werVUVoZ9tTcwGXcVDXtfymz64btqqccGjEb2TAxGxZZoUoXEbvk6pT",
  "key27": "4THP9uk98eHxafSP2srQGoGoiDXYX28dmqRV5xQcQN5ZjwiPP8kdRNrHCdQabxHaArhFP8LGV2YLFaTp6BgHevV2",
  "key28": "2GFCn7Wjj9Bcb36tVkStj6mMjdJq2qbE5iYs52PnvoyeVxMa4EgwEw1NAmgUuN4Qd5dwnhtNY67XNrayAHA4SsrH",
  "key29": "4u2gEnjzXz3hRkTUU4dFmkX8Xjp2urbZiL5YdUX9Xfn218nYshU5MotdRWcNxywWTz6iS1GimCGFYxvu6bv7Pg5f",
  "key30": "8q9WCuY7HfmomDdzQviFUmftEm6U6G3vgfRNSCFTbmyxYNzgRu5A1PP6wKNh6X96AJWnBxWyncPXnEuaktUFJMo",
  "key31": "2ddJaQcrTy24wPGcEAfjLiJxkRndG8e6q6pzSznFpzEPrMZckFQc6LxRv5m687PweJdspNjzDQ2hjkJL8J6ZxKsR",
  "key32": "2MWiNBhkYbgFinZn7r7GBdXEGAzERkg8t6tV4WXNFXV65MSwGN922yk1BqUgcHgiTx3VAoRUVED2PHfC9af6v9iD",
  "key33": "4SbyCceqrjkhbA5SeViPvTixXPhhvY5WchXjgNpawX77UR9V3PB7AjAuN7PqEeJ5oZAdrBhrbjSbFxpcM5Y2MnCB",
  "key34": "5otd2hLuh66ZeFJvET18rhrKekPdveD2cR8KNRSedjnSkoecxDfUY3BXwyrqadjEsqrUHruLi2w6q2icvN79EJDv",
  "key35": "3LsK1WyETQeRqXFnySs87djMC2FDqDpCotVw7JWzWPFFgoeP3iKQoTvfrHHCe8c7AwUERcXEfGs6r4YDo6p5t2hH",
  "key36": "3cdZywDiukLtujbzhCj6syaTQaHBjspXfgvqt4p4zpm3LL5Lo27YRySKyBQNRSrbPfVFZBbfWkkSc79qu7sad5Y6",
  "key37": "7ZjhCF5Mt6n7Y35GywY18ay4xTdPk6fSgRg5drmauBS8Emeueb7HHo5T8Szxad9e9saVrDhFF3RgusF6wxi8Qjn",
  "key38": "5jTKHsgXqx4tVbo6MVLoYSinX3pfASPAEz97asbAJAsGGmhXnECygnAHbtFnHyFAB2ZEKMreW4tCBi2vnmB29jw9",
  "key39": "gcXAszWtrHYcWqMvxhikxy4NJrate77oWHXrCrzoSkff5bCBwEGrgiPi4LticK1mGLgjgGFrA2zeg1NgLH9Z8DG",
  "key40": "rpWjWYr9MUcvMfMsCQbdbYw2W6hcLTzMXgChwkxwsPoFCg4KBhhgdBSYqbg3DKJVAyQxrxGRnuGBtiTtkaycJSD"
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
