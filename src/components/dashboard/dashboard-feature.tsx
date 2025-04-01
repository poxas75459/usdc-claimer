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
    "2EviuyGXjJYjwXt3J3ZVY3jFGG1MnWaAUVAdFS2vuxhoQynUwMy6TQvHU5U7CvBKUnyiLgxfQqnGn6FHSgspsZdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyAk4ZpSh4Yg7Qty5eTmEz4moyTFor6NKksscWhUwogi1KFGGCWDj8CSbNGDRattuhNDM6V4umgjwXkXNVLL7Z3",
  "key1": "3sUkg7V2Quf4pjN8Zai2fmTdCCeVC2MpFfjX2rzjcKGSRjh8NtRiaggHRkt8qs4uG4r7LUB3uEYRYLndnBrYUBgU",
  "key2": "5ymEXVPCWgRkGfWT71pQQVD2etKds8VNsti1A1iyHvufrEuBqdNcji9PEPuSXCecGqpCaZ9YtS1BZ8PBtzLtoDyH",
  "key3": "347VBJE4ah4cYb54hbRWTAkSp7VFQbSNYvcRFTZtKiqQ6DNcsAfPXREka3AxAh2axhxJnTYPe5WBWDuHmeK8HMaY",
  "key4": "3aoNhvLDmoYVyLyAHuGj5SrwFm62igAUdR3RGP3tQQFGwntCFRoYyXq8853Y6MD4LXZ9sRbHwjqpPsyxUB2sprhR",
  "key5": "4xv5gfqiUzozXTfRvVWKVAPr5vPGSw8L9p9JZaz5RB8EnbuqHVjQAKJBdMYmD8rh5ETrPV8q3mXBXEjUz2tri13b",
  "key6": "5g3svrSsBGDAtp8QyPJqvVoNBcKyXabr8Bvjzg4fTisjDtcYitysspxmRpYWC17jdk78q47Kaasu2K3B4Pjju6et",
  "key7": "3SWFKoMgDp3Z9JXaD4KXyvTaR8cwhDSK1Z6aCjCRgv19ASpzMzpmthNasjP2Ksxm7zzpsE9uhHrvPsTGbRpoEHuk",
  "key8": "35uGevs24MTBnydYene9Gtj98ujYzSAARfwP2W49K1tYW7yDhhoRm2dzpfxPVp2dH5GbHYeQWQu5QCRyYSBYsSFn",
  "key9": "4FwHgCWxCbebEzWGfLt6VtqNSHJYgjsfWVqW7u5kS8cEYNP8DHPdNhr8ienH6K6nxntbDxisQGU5jTM9Q4LQFfW4",
  "key10": "4M1YBoNntFSGZeYuAT8xzAWF8U2dM91BbBFDD9SZJYVfZAqpWC4fNem93SF5NZUVAcUq3mn26Tw7DhFNLXUjtsZK",
  "key11": "5ga3of7o4XS4DAemrbeHff8qFmqfmJSKSmq99UzrtucHekgTKgUg1CHdWY4uo23bCHCZJMU8iR3DBa7PMu2NgXiy",
  "key12": "2P9jNnqw1ZuM6jXkjWQJWZHwCzAXD7iNurd2kLqoxGuydtDnnhfcd7TnXrWnKUAAG9Von7Xqb2Q7FgKjXm8FDg1e",
  "key13": "4HoihJqL7X9YaVqs9B6nWgH1p7LcH8Q3hcYt4Eot55kR3Ur17qGzboZs3732xs7CUv9WPynE11afJCXa31f84k3Z",
  "key14": "jEMWHuCf1qYwtCfMMm45Wh9jdRAXobwvLpNK34BQmkuS4D4VjCe6UMnpWafUUxfFXYVvwqBy9xi7UYzzPFmCMpW",
  "key15": "3GQpG5PjJE6Poq1qAyVT4gvFKCDBhwp3PUKtYd55TAPvYW5jZNQwmvi3xFHk1pdTLmdEFvVLqbPr2kRDYjTgiETM",
  "key16": "5bdc4auk3x9iZyADaFiz7zTUZ6KnPFd967xxqx794ozm3QNA6pKp7qktDoy9seWkF29c9eZtHJJ7Hkn87cBarLvF",
  "key17": "FNxB5Z9JES7f8M7KwRqjBt6yyBLvvSKuhLonC6SDCsmkd153kwpgXQQQ8RLdu9uzkJ8yfVjDDxwZBCecZ39TEBC",
  "key18": "5J16GXYndv117kog5YgLWr7vjgpUDSsPcrHcLbnpTbBtznh3twqr7raL63Cy4MYMtYLQNvmyqqtqCn7R5FyQW5Un",
  "key19": "DnDek9jM4JdtrD6MDtrCN1gaytsRB59WwGqSacdUhebERmUcTs1SGFi15zCm3ciEzvU2HDEyEYGLyHxUNskBppt",
  "key20": "WEF4tuEBpGz4LLNwgDzGtpJdZKMmMm7iYc33eaFvgcZsKms1J6fRsS82HFLPhcxkUDYVELNBea7VinawXFQNnbD",
  "key21": "5vT1rSkLz7esywidhqDx21JiVokKmjQVpKXX7di9nbAKx9CRDC41GeeDyrQRLP6GBXjWPMtZagH9zK8vS6gvxAUP",
  "key22": "4vLAT13Mh31f2d8vcWP64pNhVFry1yvukfQsKsniM9xmhfcWiGNs7yCb1rqtAD2gFQdvbskhwhgyAjF7sByxM46W",
  "key23": "maBM2JeCHVDjvmTjeEM7ZQyaL1A53KL9NBYT5mEW4muMDawRnNvZzt2fKVMxe6V4gfaAchdEfyhXXAbjSPKVDYZ",
  "key24": "2h17BemFyosseEknv5ZUZ2FHPijLmqQyyRWmxBPNL95qwps5eKZUC7btHsuLGjsyY2kLhRDfX1LppENdo93RN4WR",
  "key25": "18ed8BSWKjkcNY19UKcpWfQJejQeByAFFCBmczR2LNkmpnLkrtBzEALNusJh2JAHoYMndpFMcpqtsGY74yvFEav",
  "key26": "KaVm1Z4b7Y3uhUH5sWRRtxpg3dfA5f9HMoJAGqVsH4htv9sMKW2WQdgpqdmtqyh1kRWCBM1CdjMwBsNL2g6qwWC",
  "key27": "kv8dqmWWvsPX8APkY9tLcSc7jd2hruAy9nqTbqzt17CVXYQ5EV2NHLotz12fzbgRHvJWDnwvrnE3RSDxyWX582H",
  "key28": "5vVRQYnuLfwTfAgs89gf8W8iHRrTPeD2wvsuHrYZqt9utg2isHoZBuxLF4uVq7QPRgATuaKw6G7EBm76iUzVpPD1",
  "key29": "5XkkXSJKe7dsg8qYHnfckqBCikAhGwmMBLgr4SvJHemzfgrMM4BM31LeEFK72qij95aJ7Grr5rcAczCrzV3aWjqb",
  "key30": "4YRpsM76oxKpoFoKsRkXBsKScA23e3thox4LpiEwx9uMK8j2tCD6FMmEVDYypP4KmdAUMnvJFVzyzRzbYe5nT1zo",
  "key31": "3Jq4vUHpJKTerzp2LFJ2vjLQuUu647zqJFRBydwqH9EpbFdHxwXxv6YTf2zWsdCKz7w29BTkjfteNJ1iGtuEXiEs",
  "key32": "2Bicmw7By7ubaceSWD2K4j8PM7rhzjEMQFkr6owvChRPzcJ7njswdQENMcDEp7fQXV5Gg5gG53Tn1HWa22Tvp7zZ",
  "key33": "34F8yWdCDRcx1N3VAhwdgeawrJ9fLBy9pLZ96MYLoZyvd9e46vwiGa8oFrxUEH5tDkmmTyyX69cJFxJapomUVBNU",
  "key34": "371QbJB2SSEzcWR7kTmLM883rU5tZP8Petnax2YUveczKhAEmnGbFHjECJ3fCpAx5sNADA19TSZNA64UNWySDCgG",
  "key35": "5tdmG1ju8S34T5Qu4g1RJjwqrnAesRYRxxRiGBnvfa4xtpHAJxNKyTmTx772Rb9DAdWKFr7Kg7eRkrVRMFcB3Y4P",
  "key36": "5GMuKMDM5nEWqFKKt6Gaq2WAtZR2QL1ebbDrsmWXnV1Z7fLLzLnx9qo4iTrftPMAXCCmyu5ehLRgHnfH4LPeTQ2w",
  "key37": "4dcjzkL9Jrs8AQKuzFa97JrgKH567D94UYAvtaFNqaVwM6xsr7HucDazHVaQMNzvKr8sJQJPnuZWYk6s24R8BYC2",
  "key38": "2PsEsKx2HvDUoyywzmziY5GksrJVsNvTemeT9AXVedwnxSac2TGpb2GDLhD6KWSnJmM4wi88FS3MQwyhW37hqV8r",
  "key39": "5JqQkgqwexNuTepBSmjX7or61K4xA8aDQGTwad8aqUjUbbt9MGVEcJDtW5HQAuSvQY2UAWx28JA8mdASXzAJ8Cvi",
  "key40": "2yCwVb3m4w69Vz3kp99RGNNBBdPgRpALTnaeBU5BQSbyFDiptZmpXTsTPgK81uWFmGR5z1bRD5e4JNxwFMiykPhx",
  "key41": "4GvPzBq4TvxDUgJcrNbZaFnqTrUEuBLsDgHUULySx5o4r1JkfawKtsJx5ozqv9neJJH8UL37SzMCwfkzpA3VbJ2C",
  "key42": "24wjCZ2uGju3HZgJCZ9RDzStVAmQXcp9F9CHPZNTRRyFUtCbzG7nH14SFXou4kKQWRgeZZShMMimnrxSmkzKDy1k",
  "key43": "3zBHpPcAHdrS6yt8zBNKGEvH7ScG8XUD5r9qD8SbR6fdtsTvUrsmRhRKMs94DgZ3NegrgtLdAewCxtRHHafnEzVz",
  "key44": "2dyj3A3cg6yDAQSco8KR8ngryRukSVjEhk4DGZywk4sfYgxBszQS3x7QPHuitfoAQxkBXVojp1ng61ZYympUqaAT",
  "key45": "3TyGN3FmvmnZogQCwEQLnBw7B9nyiEQGWgd8FDajwJjDaYSMiN2JSiSmHfquMnHuXwm3As3rxt2QBYMMZAwGuzDp"
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
