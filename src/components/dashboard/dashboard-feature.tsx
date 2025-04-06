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
    "4Dk1byM4QvnvJDTruhwTQkTerFTAJxR1MAoCRVwKxAkLhnKjMpSp1BTKiho8jeWWYaRv31n7oWQnEb4B5NgqzGiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57osgbKYAVPDK8BSEZwbU9KDbHtoLMYyWsmBQ8jGLcdCSvYNpCSLXKVo77dr2dHQCbQwr4TbYJN4JTyYbVKehuRc",
  "key1": "2ZrNitkQuFfU2BLZurY4FgrGbm5fRFaQHFgeKPwF4LN2eHrJwKhvZqUeD3M97HKDH3ATSvP4NY5UZSzbCNfKSoVN",
  "key2": "2dLvFkimTvsjsS4mCqcm8Bu8uRsy56TqUVsUJqpCbsNmw5CxtKtcB9afred48XSTr9hLoiZGu8rhxm7TFBCLx2BJ",
  "key3": "4MFgzFH7S5Rfner9edKyYBxk13JDpgUsNoYUPJgqW5s2kdTgwdR4WaqswknXLL2SmkCtJEzsWWHTa13ur6MwJhPJ",
  "key4": "MxzbW95D21PLJfAubb2jmynS79UtNdNndLMydhbhnaKjepbitDUnmh3hwHHbkZQqU5272BxPWyPV5F7yb1pSRaM",
  "key5": "4Dzh1bSqdPiSb8Hw5eqPzkFDzo7xmaUXCyKP59PstoAqM5yEjGj5xni51CAEuzyYhEWHdhSBC1gjyrzvxsPNNJkj",
  "key6": "3bGV1gNhy8YLpJ488a92Wbg6DZwRRLXhMnskvJCu8cjr9BrDK8BZQK2xvvDW4aRZity8Lei9yxnP3AczzWeFDFSR",
  "key7": "2zYBkd16uQ1bSTTo5MANCsYPcEa25yq9mmH8Bg9dp5HY9jaHeJcjbQT6Gy5nps1HFhqpEqSR7UV6zG6TiFzTDS51",
  "key8": "KQRkjqCGwbvwHF3F4gMSz6dXqoHYCUgFrurNWUksYRasmYvBZJrnGZLyUnoJLqoNi7wiDqbBBjFdmjxJnsAARJV",
  "key9": "4hpWcEQAbepuoYCMAUonq69jaaFThbspxL56Bhm58jKpgm8QRXCLCnHscXb5TvGyo6Xjme5NPYmbi2m5x1yp9TZD",
  "key10": "4rdkFEHpQbMB7BWczaVBA9a8z8WFqHygvaAYh75F5jb1Pq6RghLNDNzUjSMTnpuXoJuHs121qh26dH3Jvu9yjjxy",
  "key11": "5boDzocyCnSi14XXzYdNbKg52Y4zHAiVpYPaMQgxWZ1KvPddR6hFT34hYTavkZkmmx2XPHZ6SQhNohYskzGLTY79",
  "key12": "8wjCLPg9m5dgKN5V3F7kdnqhsevMHTjtwacsQxkgJN1VfYkqPJbuF6LytsBek7obxNvAoCxEzjRuHrzE1rbQXYz",
  "key13": "5eTfNWTRSx5gmXVw8tRK35MuJs4x7ZNjvqpUiBosw1gbMfqRUdNQtXX7CgVFyKYL3jARi6W5wEwtn4EnoP76MKJm",
  "key14": "6zFTVnhbYJwhMxVTfwPeiuM8T4B48FtwUXaoinjwD1eJfSNRPT2X5FN2KrsFJRuMR4KTArFAWGgwga8FWSaKrG4",
  "key15": "4HNXqdHw9sb6s71YjDPkeET9g1XTkuiRmUm5JviAjangpwDJxDL9BPTnpcN9Haws36ARcDQoLBWULhWVRyaMU98N",
  "key16": "4iwEK4TL6LMttHdsiZsnYURar7AJ43yP6yHRV3TBN7DDpJpiDgW9pKyMJfBByUoBB3eRTLxVgoVGJSJbkddqoMBy",
  "key17": "5YRP9sBN4jf2Y7xReGuDTtnwwJH3UtU1njfqpvfunVCvYfmxqWD4NkXTyP54KUsjBG2U3bL3yv99ono4HPh9Qf3m",
  "key18": "67j7EzAj7JUZT2yGTNKQbBrZAx1SMA4mm5vqECuYgg4pUMBc8y6XKubVJdw9766wKnKytYwBGkRykvfxDStdTzZD",
  "key19": "44AGFYFetSjiXpCFb4WABK1sczPkvfmj1W1fkrKF7HoKZVne9AqUGUMJ2BNQbpxf4KgRTfUbihtDqMJkBPXbuA85",
  "key20": "HVwB3zb5MBsWFzavbGoLqoRYgZF7Wx3qpAeThU746HfYvwP5zGBrXFDaTgsznKRrxvtBDY36vvwYpikMc5AB3aA",
  "key21": "4v6cKXoreyXU1HvwYuw3hupvtsGaqCarkxE9XxCTko3GXmp477SyJsJX8je7CghyAuuDY7i4hnVavW2UprM4VzT6",
  "key22": "26eatgcz5Np4VnPqbCc81mh1FWLPcY9VXic3sHfL1MfMvi4u4x4ZcJ97tar7izq1mpJUKi1MeqiGQurt3s7NxzMX",
  "key23": "qrjA12xLwBH9vBgbM2ytzJbvQtrTjn3b76CGXey9NDPBtyYsQSpTXZYBLJHhKvFzFnTZQoytKNoyj22UHtuvzVs",
  "key24": "rX6mdmK23nNMVFqKTYb6NfZY13yfMAWSZtRSdU41oy6UZUbmhCNeUrG9oL6Uw4CdquWdVwhA9rBUJjh8gGXBT4M",
  "key25": "2DCrAxVVgo7BMXfbQJdK91K8EUiKnEom2mWwq5qZonTPWLcVqoCea3Cd7rMNxs9wATqD476867XinncFC1kUQSza",
  "key26": "3SsE3sUDoJJnQbEm4ZtYan7yVjtJCbcSZ9tBPHUuWTNn39u6boLyCq9URDNqFKurXY7WTu8zVAyXLbRPynoeVimH",
  "key27": "4sCAGHKj8LSwwMfn1mBf9cYni6CEVfe2F5HSxPWjvqHZBMyQopdSACME9VUh3eePbjFnBDMExWPNnA4bRpMSuR3x",
  "key28": "4UsT7B8X6wPpqfgSKv2onci6H2CeeApWeTJpiXdUh2F35Jo7PqPU4TkGCY5yPMPrzgqeg4VPQDFVAsQJGhVMomc4",
  "key29": "2YxdsayXoR7HmsFBA3t78b9s3S2NqhPx8DXrMyvg2pN6xsFpbfzcptJ5U4VpYyG2npUU2Dwj4CZixWJuWnGHrxeg",
  "key30": "5Lot4dcHzvQgovDZiA5ks4YYjzgMZjo1cZeHyUMuvS895G8eWVMiNRY83dpfhjAeQ29pQQukPUtVe32ecTedZM4V",
  "key31": "4bL2Cwzc6V3LXYBs5TA3YkvbYzRiThXURyfUFtowXH9A858dYoyYhzGZS2F1Zp5UqQ7f72QwyzNbeBogzFWvbMbM",
  "key32": "3xMFjx2dZcPraMi16TRu2sa5ckDgVGLmYLd51mFQbLC6zb4RL6b3kJDtabcp731L6NSeGFLwXLwYmERmDdLZXnPK",
  "key33": "r4Ug4sTp8w2LfY92kuFQdE91sDgmLBQAoRSSn2DUKH2wJLCWNUNxbTrbfFtfs2E3irsEQ5XtxX7Gzfi5PTftjXG",
  "key34": "55SWCMgKBUKHREmZ274rTkDUGMJUert6NUeAZAB1WB5bLH64gyGfEZE8nDrzDN2AE6WAziCniZ1tf4A4J8mjfwym",
  "key35": "4G5GJF1E2HboBbSgSPV5rUKNSwzai85BotLWnnEM3GHsTDE6HEPJkUAKXHf1DNYesgup1EXifQNdcP5Zy21joGv2"
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
