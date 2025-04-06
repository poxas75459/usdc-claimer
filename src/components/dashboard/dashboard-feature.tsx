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
    "3WGLUqVkUoMeiMdjUMA1y3KGGNA9foq38PuYtt6s6wrarmJFswev3uYyrfEhuWHNmFZDFMSrJ6AeUn29jjLct7oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLzVn7UFC3pfYXKY9tqPFZBfbhysUV2sDPzYm9ZGecX53n4fYbaV5PwZEP1YKfVH5csu86sJRCDKVE6Ekc1pJBe",
  "key1": "4Z4jJ9PuB95ZiYmvrVU1S67aAmmYdiGjoXk8icgkBc8V1iVJ5JYyp38yw3sEXRzDEi2FuSToNuXH7MBJaNnCygzA",
  "key2": "2izndQUr2FBK75yQmD8BiMidKqoFUjVbFZBRSgqYNZV5JuM2GWZjL7MrANRLKZGAr5e67YosR8x75opXVHdAXrqc",
  "key3": "3T7PBH53xWJcNykd3EfnRQP57chUJTHhDhfHxJh1GCsVA1McEXapfBdYtW1zCGU2YnF8H2vouNAHRpCUwBfVisRo",
  "key4": "4SzVwj1fZJGUd5Y6kTehPbJphPM2kWuac571QP1WpfGz9SJQPDMF3qKhNZCWtEFESy7ZtMzz21kXVWwUuR1FhuYS",
  "key5": "3NiGarQq6kKqHnEQ3zzvxh94vYTYo1anXhkUkmtDoMVcJrCdQX4JzaAKf8t3z2d7H7mmXP6GLxKntZzrJwMpSuAG",
  "key6": "3sswVQug1QjnHTqTDekCrHQB8gN7KCMb5zmsNRGb74sPPdG3kEdR2r3HhtQbVZXwRe1W8VMzzR9qGTBVCTHdkTJm",
  "key7": "5h7BKo79DgYm8qQeWNX1aJcyY985JFD6AR9wkKQ9x5U1Du2LPoGhguJKqMzhwL9fiqxsaK1dWXMsxquenYWetZLg",
  "key8": "2sDK31oT5n2jtVNrtMGSUEMQN78UDissUGGC2JkkSAUcnnBU96sNTmP7XdynNTwFk9dTtTLxZKK1Gi7hLYJawc7f",
  "key9": "2Q8ysKkLDK8K2eAXyFtTpg6Exnf2GEMmvWhvN6tsa9Br8g6GrcSap2dG6t58rN2mCufGEWRXZs5NsB8g8rF3yPmS",
  "key10": "365LKcmk5Q2wxrxbCHPMY7tN4g4hwzPwPWSdKSwAVB9Vk6DUcHRpkJLV2BfK2UJM3hFnyGTJYLwX25TYb1XWJHzV",
  "key11": "5NbHK1DnbCmrg28u6rVY5HHuWaAPvFxxdp42Lvp6jYAAbBGFB9fjVs2FRcbyHuau9SnV8iiZMzH4w4mgvDKVcAQ4",
  "key12": "2wR5yrvLtAxYb9CmDEyMprfDSYekcESgZ7u52fisuFNBrUoYHeq5nsbaZaJH1kx8oHCN3EbXe43UQAvViNJncRF6",
  "key13": "4UgnGoZrsFrdHuY2PMZWdsUJbsfWEHEftL8WdKoKDgKAhkYy3bMvWL2hzm9UN6qBkiMimx9gwhehDk1DXUDnGp6a",
  "key14": "3sJPPirPVDAJUWgTS5GWTzDiSu6mjmLRBKNGaPSbAp5o2PaDQH6gdx3EeQmm8oEAMQW82CM7DxcVHWNrVJSZ1zhE",
  "key15": "5WNV8ubgyPK3vKXvyKdY5exdRVdjp4ByZLdrKQFY4UWR1LQ3YVD6wP3XWfxHKECWxaH2kznLQR7H1btunbcRpEVc",
  "key16": "3zsyMzvaK85bnKCG83ykH4uwFrG9giG9k5YtTrb8SPF3y81TdARYGNmTAHELh8MPJjeUQb4gTEd75WFTVRVTPWrG",
  "key17": "2d9TyqXtwhVHTWk63Yfk1o5FKweTsL1Ah8RJ6gbMGhHk2vW2J6gibVtADh2R9rgyhjMMCPSMcCr9DyTffjq2Bmn7",
  "key18": "2UYvWP3ThtVTihugiobXwL6J3BP2C82tnBvDRqznpHia4WZJAx1Y76vtm9uFnWxaP7UQqdqheuR3bWtQNBP5pjic",
  "key19": "2VuZMXNVEXATE8K9W8RLALWGruvDusZSGrMpmZP4Zpw7cEDXNeks95UChRXWLLdAzuoW8kSq8H5Am7hbYTeqFadB",
  "key20": "4WrbK5uP49NSviBzTnfxRKELoF9q71vyrHAbpduUSz4r2cpzDmxoMeqgk7nQTfQWJgDRpLb6npBxXq5U6ta59NVA",
  "key21": "NbvzBWY2UH13WCaQfrdgGKN2eKac795VfzBDQMAkjGL4J7wL3kTgfqrxrozLqJxxnF7WeMdYt3eA6ggeETLQBmW",
  "key22": "48ArGir4x6F22VugAGGP4Y1SULjnrLooSa55LHnztmfu8ALc8mUJ6Cm57Zjvi7qqUF9PDUEivbVYXaB8fAUB8UUN",
  "key23": "wJu29FTrt8SSCDFr2LvVT8yepTQn1tZbfAQbd6ufdmsE1pAnk7wwjqHAZU2pQfCtUXeSzcHrwpDiN7zYM8GEcXD",
  "key24": "LEx2ob8zQBRxRCeipeWnBKmTZzCc2bmMw2zfHSaNj1Y4i2aL18hUTDrhoRRbtFgek1yjR7m1DbjwDdZmjryC4Tc",
  "key25": "3bwLhmmrxXcYVFhEFoahA6xJuxA4kFUvG8Ee5nFQ9jHqDBfTZvCXAKVoGvaawbSq4pF6f3DWLeA3LzF7YQ3k7tUb",
  "key26": "54yCtzUwjH8xrpoX5B2VhnhwK3daQCAeq4cX3vHe53mc8fQYwR9vyoW1QuA76JV8gpUbypsXFHqxgq82AJKwgyp9",
  "key27": "26DKfnNs1S87CPee9Kx13r2Wo3cFzBanqq9d922HwJfTKJtvTiUrirxQ8NMDMHHhcbzkEMZpJLhcXgYUfoQU2zZm",
  "key28": "3svL4eF3yueSQrGHnHYCCWkDAQYBZuk88tcHjaXeCW5pDojDbvVQUJoHvGkEMp3HsRvPtWNZ36ARSrRByhy6WGRu",
  "key29": "47WsWd5EpTbnxjNJ37XW9ARVhGhXMt448Yur4ypLnmrVtmVkG4VYcuwPHMZP62vcMUqfXa3LFkt2v7kkcxfVdZPt",
  "key30": "hUEfM7deexm6Kh4Q9cZRXRGf734mraKgZjo1MCpi7Z6eGDySZ4xkZf2dyZBbsvx1vwQxkZAd835RZhVH2w1iwKG",
  "key31": "4AozP57NeEp36TBGMGu2uHDezXma7Nge8wnQKf9eLxpGfj6gH1fDWkqouusHjw86tHfVAge6Un12RCeiDHx78z37",
  "key32": "3qtGFSc3FZKZT5xNm9qoiYJPAm5tdHNZhWZzAS8vvGeU4Ua8hf8Lqz3eV9QvFgy9J4H7HiDBdq5xVvZNEYJNhy3h",
  "key33": "5ifKicoRK8yqJjZn5HDm629L6g5Qifz6hvhiMeesmeTkizw5HEeVjoH1YJuaR6Z8SbRABeRhJ7drDs1Fu18GKcDQ",
  "key34": "4fpfjj2vDa3gg56QNemT4Hz5L2cAwgEyf7sb71DfYfWBwHYtQVTc2eewUsMgH9SXhhPeqbwRUFVDdHvzZ4fBLZmJ",
  "key35": "hXDtnbMhkJwHa8VdWvHqw6btwCFHCvz4DdyJqqWALA5ns48cKGzrBH8h882CRs3tQ4rrRv2ESE98Pm5WMxpoJkJ",
  "key36": "6FdahZ3da2ppkt5wCbmM2MgndzN3W6GfrGAu49cZwLEH9zbEZoXcbGkZBW5EdWdz6VTLVzh9bcqU2dxHHob2prX",
  "key37": "4rvkNb4djyRTNVeBRC8bS2ds3heuB5k4o7ePLzFiXycjFGFEnUdjNoMdUMHPGtcTqf6rE2NQhn3kFrJjEhF6TFtY",
  "key38": "29h1Hn1QBtNKzTYQnyods4FvMKfWjYQrMWtnrXQ1XBQzu7FJZo759n3YWZDR2SoTEEBEBPgGoMJBShtyBajreXMs",
  "key39": "338uqFBHYot2hHGQ8zgtodJf22rXi72d4Y7Gqb8CQKA7vBuGoVH1sTP613iTh88FQNtyQ66Cdo8Nny1FgHj3JNSc",
  "key40": "2y955K1zzfEDXs9EBT21JMMCKycW9uG3K28o3Se5WqXpCRqdra9ubeohw5FbP5tqiaDs4zDo7ZftBGNmrJxezStz",
  "key41": "3moh9GuC4YnL45p7ecf1k1jgLZJ2EB9KGxiib8FF7EHq971qUg8bb73VjMAV5m7ad7oGASVEUdoxhKi7uT3CzsvP",
  "key42": "2divMNLFfJrCjQw2H4LzbeLpMtEXbBK1FteZCcLYFpym7mBX5w4TQCqan99uNYDmuth77NABwyvU3cYbuwR64pcY",
  "key43": "4At7RFKnzvwRN7P7PSp2CZvwVsucjPTm4iQQga5oFyswJufVgk6Ra5rf26RogKCLpV8NWWyeCSziJCrtTsfr4V4g",
  "key44": "3Da1UtCT6M9QChn88S3V7ibHCAAoDjCT43ktjxAXNLhVMPrpwYCvtMrZKnECV78QDbLKj4attjtxjUbM2X5gEJSv",
  "key45": "mC7fnhupvX8WtbgcdsTtnVsrMQxmBwxzMQt1ce2FAZYShSBM6HaxTK1wNPXwLE1BaYH4vMeGycNXNcu5ceCgQhR",
  "key46": "4bxmhCtoZQRq3VUAmPwUnR1Zo6kJvikxFrme8L4NK8xShavDZ4RWxKy6trnwF733f3WpgTuAXderCTKh3kBWS6n4",
  "key47": "MEwKLM1YHefnFCjJKXaUTpfGzgTgXNxbkeUgjYZDDxvEYbc1wvLbDUdp8dPP9V3xHVu4QwCnfUnmoawfPyrL1dn"
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
