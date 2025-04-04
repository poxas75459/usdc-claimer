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
    "3nRDWP3ieB9zQ7VgMM1Suaydy3CHauJHCCEyunG6XKJ5jZVKiLsVcWBpA5zptTVnVMCzgb8Jbxbd3sd4SkuAVp9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6exQeqYMCBZTnQsryZazYcQ45gS1LBmpUvQhAaGFE7U7YAkxPHxtES71xMBqVSjF9aSi6XHAah5LVnowHxm7LT",
  "key1": "23THdYeYUSCKT5AJGgGrPL5ZCQoXWsKsNr8GTjNrL3Voi4gfUv63BUg6k4PAryjb8E2WEzkv5fHVV6NQJjsdMfmx",
  "key2": "42b2QK3z8rf3dNKngGGRmJCaev51YCNL3TJwJMWhKMaY6PJkVKtngfcGYigdVzqvZg3oQPBeQdz8gpdywjEamMxW",
  "key3": "2HhCnyX3dujkb2LnEn7Fypfq89v5obNKNfKWoW2p23BossYkSSKBraj5DxeS4wvXVoBysveBxeBBEVoeg9XhyEeR",
  "key4": "3SecuCoSRukegY3W6j15ik5bVzufAmE65GQ5oZA2Ux9kHre4EBh6AHNWrW1LWiqzjNhpZ2MVrg3RUACwBRUYX7M5",
  "key5": "2Tmvxyjecsvo57X7vPViLksyDtt4HdZTX2q8t9xe2ZsgTEsDZkvJNL2b343ZtTbEdCB32RZPqU6CKaR3LmJaN3hv",
  "key6": "2FcPhPHUFef3cJuSHvrb5CeUWkhA67NgqcFWm3WKPr3Xu1pepkdzmzaKgxmDfqiuGvtxRmrZs56DL4rTo74wez6C",
  "key7": "2qwHHh3ntcMfu5LYMyUyULJkkgGFSKxMLNVdWmH67GqAWWA6yuDv4fMZXWeLQKvSJHVHNaCcusmLXJLqxp7yimtg",
  "key8": "5UPwMHMLu5L45NT3vL7vpG97Kp9SgZYrzdtzrkdQXfVba5WBLSQMtFnfzSd7RwRMzJvRwq27yJwV1idZJevTPGi6",
  "key9": "55aAydxgW5WWE65PqGs6QESYNgmw6hKNMCofs2DDEWPLKq41n9j3zNxDMjvqdmFyH6KYsAQwmJtkJLNkzy8TkNn7",
  "key10": "64wwdnF3hg47jhgNLpREuunyt2kW42nAfBjF3w9LnZVG8jCZC1UqJ6LP4FWhEWxzXvqkjxeGMPyRjCpYeC6ETawi",
  "key11": "SnA6QyFp9vTiTcu5CzbwxNz8uir6Axsiwo9udzWPboiMFPHMDSDihDWYw3uLNFkTsQh4PLUpFxxfY7BPQHBJq1G",
  "key12": "1V4TEzxGLC9Cg5GbuRUobXZ3AMhRPhWwzkMWeW6EHhgQqhmGip5gndDJSN9BD3itr1pV53fC714rKysN645Si8k",
  "key13": "4oaTXUYLfWFpFnyjauQuLA3SvmjeBrBoXfxLqgVMjPQ6vmRZb9Fgd3WRUi2ZcHin3zjgwFsqrjewrWRyMsnwjEZE",
  "key14": "ZJ12tnpatdK6wGjLKUfPsyT9ghr5HeEAddgzD9SvVUdDiZKcEEuDES81sMdqYSWijphK2AtPdXGnVjQ7acBBJum",
  "key15": "57VhingcQCLaynrJh7EEUhFPwqy3Pky6AwfKa2sETU9FNC4ukktg1Brw1gmSya8ab8moLThc3PgNa7rJ1BdCbxac",
  "key16": "5EqrR6uGAe49HTXW3KZPg2Yu8kupC7oLm25nPqcEPHk7hLw1UpeyZ4vn8r2C9sgfba4EpxHJh94xNHnj3VRRXKCh",
  "key17": "dnu4myZWpHNRSwEvKVYdzmNwPRduQvXT92fHATPTwAzmTD5CBAbqiDMsmd23XsEcp5ShmzB2UAgHxQHVcn5zeZr",
  "key18": "519nUcKvD4mgnXsHSwBiuLLReNuf32b471fYShDwW4vwCG9RooQb5cNiuk2wQ2WLpCs814CWat6kRggByHu85RdN",
  "key19": "44XY3XFzCTFEcjtRhRnD5k2vEWrkCwwoXJNuZcPK8BsB6DMg4u6QdkCvnYAo1REvZL25CovM5oMvkq65iX5jb5PT",
  "key20": "5pfnQrgMYTat8z7ht2gC3aq2DFDGJHfrHFCfTP1Cwwvui4kp3pRWLeEZqZYbqxpzF2us9jdK1g9LoYUEmPx3kME4",
  "key21": "2ZHcxEKtbj7gjYEvXeHpWaTsoU1no4ezRySUC2WswgJr2WhngCaiSEyjEJQ2pns5RafvZRp9Qq5R6hQRG9PRtJwX",
  "key22": "3Lgo8hXpxXCZaELJypBGpDqAY739X8axTJqjuM2agXoJH4gNkASnKNMkDSCcKQnfQHgubtr4X3uswRZSKoNo9guN",
  "key23": "qKm8P1ceJpX5xLPQmZtmz9N7ARyyNjm176yKVFWncNjXX7hbzobrHpc2RveftrFo9FiYnV4DmGqRNWGNgEGjYLU",
  "key24": "3sCMBiG5fAignAqAP5JtK9RY3MiBeMP1LPxHAqK5ek6GQE9TYrnnauAx65HZYc9Q1UiuF9FfZAg7JTCEKqjKRVzT",
  "key25": "4ojfzicA7bqXey7GsuWVZ8XxE75FTC41yHM2DWiJpM79cB1yfgyHzWennPm2v2yvrnMfa1wnKp86uWRsRK11cgEi",
  "key26": "2iePsnM3NBPb9hmQSNdGMAUDqKpWP8jpEeE8YNQ5BEbyF3ppu6iEEuxpVPX3s3XYCZG4Eo3E9nWXBeqUc19vyWb8",
  "key27": "44rHmvU3EUGKRdRwhWpauLHhqcNwiJ6MSdDmK8pWny1qP3XJXaqZNj8gyBDqAk3bBeGpuLEoj2262SvL4NeFDXma",
  "key28": "5ywRjk3zTmS6Prjn3GBHpsZSWXCCuY9H5ByoXtP11LvxPUdZMgR1Ndqo58A6xQyzDjbrZtvEKD7BD6WDqqF6D58X",
  "key29": "2j5HRUg4QCgW6YowMtNnqmX9hK3TSDdqUF9L4umVKrDDEAGVdqdxYkCqUw2Vet8j8uFKwoDwVpFtTQbaGmtvfn3U",
  "key30": "5nM2CmBiMhkzNwpJQJPRtyQC1cja8xUx65yBfLC53UkgZemcuvth4Nz83Ydwku8nQpT1tKzQVUrbDvM8VdW7kqTq",
  "key31": "a9ztXm3dRP1n5HQgaeaiMNmtN8NySaPYoT7yd5xxpZP5d6TayVN3WL53QpxYr1jCVihszCN2dYsPAMAYvgsUJKr",
  "key32": "FLxXrqPPGbceSrjipZYSdZmYaDH3T1UE1bsCv76inRALmSpLaREZ4F3rwrKA5Mwr4Ci32wvBJBsTKTq2ANW1Jq8",
  "key33": "22AKHwXvq5Uh5M5T56DtEJMZjCgXBnGvbDWyLfQsNhuvdxrpvfAA8HEySmmumUL385BU71RU9gBaAcmRu4rFK7UC",
  "key34": "2NbG2PjPzcPLLWPVBcoufLaJNXuyZTY1YNMUueJgWV1XG8miwAmBPcMvVN8Yuyh333fTvLwJRcvHKubArdZn76W9",
  "key35": "L8hFHLUuMt1GWzhYZf1DxVKBbqFsmy4JoLsM7De5HZBQWSGqS47oGhxVUUwP1obHQSgP4fvpiPrpXy76ivB8PJd",
  "key36": "5AaXopHkUySFXt1ViaLg2h13VfXrf63s5gsG3saNH7R1tTMPZEXUDosiYemGc4ogF1f78YTMTkanCrD2aYdMgZtm",
  "key37": "5Mp9cUEyKQvURyYQn8T86ggRz2K5bR84FiYtHDnGAdZu2YkSVY5k24nUa3pZaDRwGhTjNAxYhxr3oCSYcZRiQ9tR",
  "key38": "23UECNU9tXLso4DWRS3HRXwiU8VCk19AzX8zDUMy6zcd5mxCTx8tyDzQMTkZi3j21HVBK5GHtYdAdRpqU62wGPzu",
  "key39": "46Fdp5PpsMS2xf3SVZS7Y1yaFboComoc4Z5vuNG6Arqjg4Q9JxzkWvA6N1UYeEGZxUu2ax8JnfVcj4UaoxE7nLHm",
  "key40": "3rEchBztEXP2tpPTcXZwNXTJUjY4d6YhebcpDnyrtwB13UjotY6zqx8hLMJqec5CjYJCZYFmhkoYtdgt31K1srve",
  "key41": "2FK3njJRrr6ajvrBehksWTG7s3ioqjN3XdhncKSBk9XKH7LTiysaTiR7DRWveaZhpomFciMxYc3N57z6uGrSShBK",
  "key42": "4Zio6UbcR2vJPZZjj9jN9PjwuhZcnF2QnkdrvD9Xumag7FVynREFakcWQvpBvtKGYke3qJSA9kSMtZrwkfQ3A3aj",
  "key43": "3K33ZTuy9bhWrUGqFNPYfJdgD5csYrAWWfa5n44YqTgqGDXHkjvXxpFkMcbZSLkoin8c9NXLzAyJt3PtSz5gbM9T",
  "key44": "dBKbSwr2L49bv8kSx21asg163nQ1VgwfyLQGhJhYJafLrV4rEct5s2RwFqvFGnXZsradCTtZ3qKj1r5M2iTUEYi",
  "key45": "5NcVy76Jv6Fbt3WpMq7mHPVGcEvtZCxq8A5kD4q7E8C1HPk2gZ6YmxAgzXoyLncBXbyKonEsj9AwSuSN8DCAnWou",
  "key46": "4rWbNgWhTY2eHky8qvCr9aQjnJT9gKE55Ahx6aX3ocK9tGWpaE3Y3pcJH5c6t6ABYcV6M83TeVUeFcMsJ6DUkwxa",
  "key47": "SfHp5wFeX9S8B63ptSj3BZkJVsHqRDhKbPFCtTKtEbEHhzSztxXLQimCvaqNE8wG6211HaLxauHJkSKvZM5ojow",
  "key48": "4ihgwGejzBKjp9sk7Jg7hDAV7odqEJ7LPJQf6SjvffKvQGX1wBScjj6fww3PZkGTgXmvfzm8aBnCH8gCLzBRjKnw"
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
