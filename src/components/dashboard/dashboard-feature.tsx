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
    "3TA22dWTVu9j5HStBsHRpbNjKHduNE73tU7JVcup2bBXUDVLjEdmEq6yMLrC6kiMxGKsuz1wAC4N24TwLzEtes2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gciMxii4js33rg5YpDCUqE8e5raZmsShqT658dw2zzJD9kGTG2hXNrF4FAdYJsZgVHGi814HhCEw283P4vNVUq7",
  "key1": "55Esi8qMdQgJrPiN8WpfYLvjxn4h1PMgAcoAwD9whadGxji5fLhQMDSv9htbFZu1jEaQjZc11shsDWrUiP6to1Ej",
  "key2": "8t472A6sPt377X3JELiuRT9kuyMjS3mALmoUcYmKEbBnjGaN95nRgfrRDGbMyPEchDJu9qFo9N14SD15B8spRPL",
  "key3": "8ApP5fy2EeevvbbhN1Lnw3SiggduTD3aa8PFYhXXh9PTZogRzfbHLcYpvQqLz42HvLLuSmFkhDo59RZmG8Lj729",
  "key4": "3LaRq5AfYjWHzp4RE1z3hJCmd7Z3YT5AksMvhWX7EeXUurr78oQdSXArefog4yf4jUrUwMUotLycMV55trzzRQHc",
  "key5": "3H5fNgtDA7Dw9UDaYja5km5vqDqg8vPJHZ5P63G68jWu7kZCe4ood7uaxbs6NffoEVDiS5VpQ47JDUqPpforFXXh",
  "key6": "3EzZV9MjGjw6iStmFGtV7UUYA6BkYEpwkENK5f39D9qeFEQogC5GNhTL8vVdVNZUkVfhbkqUN74fWRQefYmUmgGe",
  "key7": "3HC3MCzgL5wLSvY1PJSDnVFE1ieCJezzBmv8HEbsq8q2X9VUr17JvbkJ7kmszZWQNPnDp5j1tStF5PScVL3fT2kL",
  "key8": "5wT6w2YAFoFy7yhLS4jQLPBGzWXjq29XWVC9YWrXRRZy3yDWN8AtsM7UHTE6fwMHzLdN7xAWFFPVRaNQMcZ1wFaA",
  "key9": "51jD72AgxFVbSMTWgANcWGDWSLcMdDHwXoMpyzFuUd5JPYvyALoHy6AvoogwSzdpFYM4xpCnwtVjrMxvM3h2z3s4",
  "key10": "p5p5SGhQhnGT2zPihjdT9VmZzotLXRAwP2rNVTPJUwPonCebuC5YLuo2ZGUyUZrYhqoMENd7wcEsDoeu5qhbheH",
  "key11": "VpJZhDbhP2HBVY5mYs97PWmk93Yw4ktK9DfteMBgBYbrTKpyEqDF2XmgQreKymHFCUqfj2UtUkN18XGnELhg2ka",
  "key12": "5qvaQQk4mE19og9usCMx8QPqoGWjUTSXjqArKbXpTcB9G4o961iWBE8NS8pDQpiquxL8p34PvPrktKtxQYMuZ1Gv",
  "key13": "ZESiDpWa7r28xMs1exsL3dqXjUNA9XrA63pRAH3VPkqk6wby7k2R3s1CGUFcqVM1rUYjKXRQzziKPb87yr945zz",
  "key14": "j6xWeGYUhiweUHwDJz5PAb7La4tzTpteSB6eCaN3mw2bXBbVcFqk1ohjTiuH7btXfM3W9vmGgJx3D3wZmj9jfkk",
  "key15": "4aadpAR2iBmvYjyLHPTe7fEMeu6aq5AQAEVXAqnNc9VTXmkmdfVaKRfKmr7moKPXTQMPHJJSaKaje8fUMJELbCPK",
  "key16": "2yTJr7Nfwjf8jyVPeKKBc4WBr37Nd4TNBDgjxiRu6FKxdVtQLmWBZzKFUJEc1J2HfKFNJQP76sA1ydTo6YDnxgde",
  "key17": "2BxGSTyj1YEYfZA1CYnzgJ29g7kQ71mJwhmhH76itueLGfpHvaw5yAmXmdiC5TrPbKJzJ38jY3SitSzvDhU7ux7A",
  "key18": "3nhAWmrfbmSD4ywe4s6vSH6h9B5bXfuyEtL5yBDVSZHCE5hQ2ho2yukLRbNnhizaaDR7YkXR3nWAbfuoMfF7FFy8",
  "key19": "2MteTBheGs7jQgwnRwpxVNMXLHuvRSc9x9Nd6ZTue93bLjMTihNfTPPnoX1xrELibHoV9nmSy5ZGFU8Ejrgnay6t",
  "key20": "3S3RAR4UhueFJdBvNr8JNx3yN3AhbvaAbLZVVJJpwDcrmVGo7m7G6aFKahQS7RLegteew5mP3n6obocmJQGgPsM9",
  "key21": "13miT6jKm5DHmj5X5Du1z4zMX44Gm5sfYuQshREjiAgctLgpK8XcaGSoY7Z17mfb3Mq1rFmwsuooF1XUAu2a6NH",
  "key22": "2EhXcyQVfE3KBSR87yQ9dyUmYtmaykA4QXYyCJSB5ZHK5NyYrCKRBp7iy64ygiBZ6vg2zg3j3cpwiwyXVurcn3wN",
  "key23": "23QtCpEAFopFJALybJRkSD9JCmUMeH8322sUK6vKw8SsMLqjDcRoss8XkL7VZ3LRJZcGHmHzNxhSWcojDn4hxs3L",
  "key24": "d2JTRtKPnswRdi9ivRZfaLjXXt98icCbEtUgwxAmv2iSHa1syxw8zju8WSv2P9As4HK4iCLVSrKYbZwA1MHkcSb",
  "key25": "53xquThDzhbDrDJSxyfhc2Utybm4fdHWXvVRu5bxnPBs3gjJTVitBxLHLWKWPxfT1Y84xSJJ5nrwriWADThBVyR",
  "key26": "5Vm4n8acxzFv9eW2TKre5TTU7jv3gfXLMYC5Ea9DhqVcMi5V3Xncq43xJRbzc4A52urMZBM3rhQe2edLjNUkqBCm",
  "key27": "66ThxfV1svt8rTBsDuZA5so4w7wE4y5KmpqkGucw57x61ScMphqYJbYPQcWSmVGQ6jdXhf48scBCJUyuEjaAVyf6",
  "key28": "hk3kjRk1uHxaN2f2fZy5GSpasecgZSifdysXwgCCEMyiJLPKt51BHtUhJV4wzz3k2cCfB7FQxFKWbppPxjScbuS",
  "key29": "qSqnXsBmAXuYhHL6DsLGww1bhVkZTNjSNgPGa7ZgJNSPrNG4nBLBbwYzLnSw23TTecgYCnUwvostX5mLBCkunN4",
  "key30": "4ExwXrKNBtXy8iTjbgWT6AD2SMwNuwUxWL9y9g4jT6JKL3oU6aq8eygT57HgHfo147BL4sTVrLvcCx7w4FCsxyG8",
  "key31": "533959mWqCYjwdn5ZqPHPxqGVnkf8SoPZkmc2K5guT2i8fKmWrwBKvoPmBvVDJRbedcTgEdDEQakxfPvFZdgenXu",
  "key32": "CqetUmEoosmTbabmWgK3EQCBW44VoRyz3GUxiMZowWgTFuuAfLhyAfrsp1Twm71JG68czPbxhDaPDhycPEeFysb",
  "key33": "3KReGGDpHFWrmLwt74jTDeWcg1DAizX8CW53ZvJTkeHTVABeJoQWBZbwquZrhpjZYEuHBWrSZiMsnbnzY3BaFJzR",
  "key34": "66cSUrd5kUiCfUayiBr7RvssvdV4i2mmZhdj4xdss3QJfeCPEmSrKZ7PiFYjAzNV3eNVnZ1ot9ReoiprB26eKecE",
  "key35": "3PMMyqjAFV47cuBhzxyMbbADhBxqnVrFvTwHBHqzn3aa5zxEMUuTcCbg25618rkz4mzD4aNzwsfBMbdBy9rUFcWs",
  "key36": "1YD6SJfzk8crKFM54M6A3FyUmJuM46jdSeVkDpEpL1zw3SR9aawnyPumU1sdn7F4eJwHAJWtQmk6pztAp7yBdf4",
  "key37": "3C9g3s4K3fjqEpp5AXqEdCbGsrvHLeb2JEhk9eXc3KvBokLMmy1MvYEAgRRzbc7B7vKKxRPdx91J6fmMV2sihEHT",
  "key38": "4hmZY7PDGojjA6tJh6PpYkQSXs7MbEBwCtRLX4LPDgZiSbrWhFdzKrSsNmfGUtM1p5gTtbJueeuosCwU19pKgu52",
  "key39": "2apWCuFW4SM88MLW7RKmzhYiN1jQAzJTmySwVR4EyScKerp7bHdiUDnWi3bKuY5fddtxagSw3MsyyeZcyicNCoQZ",
  "key40": "5fwke13UmFoUKWwUdAGeDfX4CfTeTxY7ZzTkLTkv8AzKtQn7HmNDorxfPYhKt7Fh4oYGQRDrcFS6RSsFJceL2JK7",
  "key41": "5S99nUJkpA2Qw1i76MaeRoxwt5DATXKo9Kp6K3TNuzp4w2ojZ6haCSVjaLMMESrnNHPKnEz1h3LtDKomtiGzBqGo",
  "key42": "4dyaeajEuveJQv5MB3R6xbbhb46FGMGsspiNN4CrvqxGUMHrVmmGTsJnbJwptSrHbz7DoLTYFGrGSMUL88gmoAii",
  "key43": "2L1XVTfXHMNGtUmjrPshdyNWhuSnruSqvoWGb8DoEdkCyhKC91hfsUQT34hv78AsAk921aLFttZ8fiqq4sJ4fSbu",
  "key44": "5frS5nz7N8ftWjZgM8DCrnmbt3ETAzmFEz88ibULo8Df7A5jTq6Kjy4VpzK4awLM88AxYZEBfGQtr8TjniXuwwFP",
  "key45": "2DjJzZ4r43FP2dgAQDKLgiYUJSkwQBnDn4APPbjM7aB4jpK5HNn6VR9uLRRKwWQt9Gmj3upUsqovwf77n2YwSGYC",
  "key46": "5FcGARM6bgbuzVD35GPXbN3tmTTVv68BJz94mGxqVafn2xFQj2YrsnGirLY37Lp9r3MJDqEwi85P3KSdCUNFeX9b",
  "key47": "42KPAsK1DAWdgh4jTViRUZ8hvPveSvCDsChAKDHQdAhhooPot1gahFuFKF18iVPzR9ZAGwzw7KN7po2svk5H1M1x"
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
