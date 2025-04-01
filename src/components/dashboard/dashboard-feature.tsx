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
    "2vzBQsbcQszjPbzsBSjJwr9guPPXb2NtVHzAHKWMAitCpzCgFuJ29AN4eBh9SVecMbp6PbEJwxFmGx9qqWLPj6kN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QNrNQD4U6rxvCZDy2hkfTEHV7K8UBJqJSmoZarnBEQTpfd7nnJunycV9WWxrQFwgM1C4bYbW36ozTaS9jvzwkNj",
  "key1": "5V1eAd1vY4CJxfCF9wA8xENqCEMuG1dmBDRk8m7awz6jaEounKE22T4J7bRCFxVcZJv8VG8A5fN4c5fvwEVCT2dZ",
  "key2": "5mUjdnEYw6Y3i1txpRzZs8xmjvQ1xVsMNksUbGoBHCCHVX1gAaXa2W28DTjBAUQXFCYkvKYWHQnsJLTTsrZnEQ5G",
  "key3": "m7MEH1bECKopXmxSwPeqx1SoQ15zi5FgWupapXwKxQyf1RWbXUnK22KmpouUg8uqsJfFMKAWhwpbrME4pcidaz2",
  "key4": "Jx4ML1d9vnQyLpbTn4xaBFuAZUu9EM3BwL3Essjq6oa2MC5Ac38yZaCJJMDEgieJZUhQxD5ULhs7zhFxBfw5nsG",
  "key5": "4D1biVQasNu5wCwVojc6GTWXs9X2JBAtVPr29JKb8B8zmqvoHtzanJ1aYTkNdhnGSDQ9hXHWmnMy7RkGyH5Uf1Hz",
  "key6": "49NbMAEaxHUjTVNHhE8TVGTjtazwoyoASjDiQ4PP7vT8pfBZx254jBrwxefWuQfa5ScVFBLErySHbbuCJLndyi1c",
  "key7": "5Q1Q1Tkk5ibn6vym89cjYe95nfn5vjQFPRRGVRA9BioeeLHa5ANpUW7m7LWSePih3nGoURxuD7E2EJ99YHyjjwZK",
  "key8": "45YsWBmvRE1Pu3YLr4kTGp6esAcB1uNEKnTLnCgF3oE5XfKCj9p5FVAqgDdyBBjLBjsSfxuRGQdrHC9yCQFD9LZ9",
  "key9": "39Zse8e6ZVMGaC2GdtsUrQvfg5dsr9BwiQWkL6HBCDuxqXjQWSmrA7PY23hJuXANE2Wfyp3ADH5dwJ62cMGpQjCj",
  "key10": "4JbkV8mwrCvmZeDw2FGzKVLwP6rCj6ix1UAUtxsR39uuMQrAzKjXnJ8nK2HhLn3392sPL2Vd9piKys43qxFX1BV2",
  "key11": "3PgD21GZ2927Hc9U2wWszYMs5Tr4dPvaSFwd9jTyjX8RThtxE9jtvL1iVGWSPXR9WdMVVZbAFFm6ZAYgfU2HdzpZ",
  "key12": "266HatFkhrj5Xn15ifKvXnLZW5xVMrpxFaGSk6MHccEqwnf3RpsqZDkEB8NfvLeVnsqMhSy1KPvLxAjfQp3pwyNQ",
  "key13": "5NqNd9WPN5rasjgmEtHoxj74m6hkshtjphQKesVqkk6MgZs5ASjU3BHESAsd7qXTNpcChpnU7mxGZXXCXAK5GApR",
  "key14": "2ao6WnEehHMEsg7cqyoCrMUBnhMZ6P6YUUR2efLKxSXiiRZ4Tp1KG2LwR37bDfBj9VqivddSHikHS25w73eVfKmh",
  "key15": "sqTN3kCTv71AjoZYfNKMveRAEWRR8MCjSVKPCboqYtsMYdm6nvGRNWoNXDpL6wWULA5wp3FcuGU6Ujfznw57UjC",
  "key16": "4t9d3o6kkAtqWtVxcmLFEKc3iM2sybfHfJGz2q6dxFNEhsn4HwerStF3Y3MoifQZmcUB4brA193kPPkt6HCz3DQH",
  "key17": "3EBxFwcXFZaeAzJAghUk9D9matyr3DxL3dX3aC5NHirVPMLiG13eLUAJk5fFJ7C1vHhHovbB2hQLFnf5E6D5Kfc3",
  "key18": "5ASTR17yaKKwcYRbVGyufCEzoCME8WdSSjbRpXVgu8iVhowKMWGU9PXFcL5xaUUNhQgHkeyjs4qak1cywhCN7XhF",
  "key19": "9x3kNPXouH6PrZq9ALixButKMmdpdbxy8DoLEHoMTnqmwQr8MPsbE6MGnFHqyTAXuNrrLTT1RpNRQnoiUA6xyT5",
  "key20": "xmp1hiYr3bhKtSavLASgiRTPk1AbaWs7b1iNji6ynGqRoeDBLxBcPbJfiHSrunhBVAUdKDREQ5k68CPQyjswooK",
  "key21": "1pXbSqvdTJNbG1LLRGrZ8TfGgBPptsQwgjjq3XJV787diHrWCsVvPkRQEzXGKEGZmseKcMa9faQkaPeXpniLEvG",
  "key22": "5CtzTUxWUNnMgwj7VKt3NcL2eCt67onthtjPHeSeN4SBecc76TDoLnxTGsddFRuf3KjaFsvWsPE37LbqNAFn4udE",
  "key23": "3RmZn3HJsJZMgmK3k7V8Fe17s7MvKvA4DrJuXmfpnPmggKBTeGMiuqogZn2mJXw79bYfPG9eiVRVm46xt434G4Sy",
  "key24": "34bKSRMUUp6dny75zUuBG4ErpC45Yg7eTMrLT7XJrispA5ymghVVgqqxXphDeh39PkXYhfQdHEHJfcebxA9DzVz2",
  "key25": "pZBTaGBWRE5azCqoLofNGYcnTY31PfLYS9oSMCGscjfjDH1qcVCrAYVFGgavwWxHzwTAdaXLL1Y9M4ztEBG5JxQ",
  "key26": "3NWEaVSGBqiSC6XP1N7317iTnc7VYvj76myWdTANvRM3wgSx9aHVhz5NZPszZQyt9bZFnWjEGwbZhddcxud6bkcc",
  "key27": "5WZZEfwxToNf7JU5MJ9wmAiWKrk36S5krH6yHamc4SCUdADZrGULoGPZ4PTzzjYdTrfW7t6REJCqFDDqyGVQZ4j8",
  "key28": "5teNVuCCyGzQ63XWUaFWeLXyk6BT5sDToAaEPb3v4PMcPJWYTWhUkaweZzLA2XT61E3GDodxV2HDUF9cpToxFtoB",
  "key29": "38txM3V4nnidkdRx8ByYAoSeJv2cqJj62zZg8gZJjL6ToNXbGMfcv8vFpja68hFxSMpvp7q1SD4iem24MXRzbzwr",
  "key30": "48ZJPtTBWNci22MB6gR3Qc8bzsVAR89RYEtZbkNqnskf1uXWrzYwgK7nzo4xH8n3BauDVcQTCXJ9CwkT9FrF5VbQ",
  "key31": "5KT2g5ygApJNQKr2EdVhDLeqvwBepb8GfA5NLewjH7CQyWD8PwbszTKD14sLVcHhxuV3NAVWR4pDFSDT1nKMqnzY",
  "key32": "tviT1EQxz8mM14oei3goSGgjJj7VPyr9AWWw4uVnCgpN8fgrVWyi2fubVzHg55mbBShd2C6y8NwTwLqtfr6Ksdw",
  "key33": "2iioXPAP1isxZ3fPuP9pev7Z5GTQHjoXULcDqxPLtBSGJo7hg58ymPxK4fpueCnD3cWLBKZ74WMYXphA1CaxZy2L",
  "key34": "59fxT7ZEYLx1DbSgnNxtgkq3kGpeFrkxPKr3Jgsk2yKefysgxQGfwLganTGRBGtg91KcmRHNKAFtoSKg3No4dURd",
  "key35": "215FKYAJ4h7UCnCd2jZJtXKuyJP4GH1m8dWQWiZyuV8kiUKqTVi5jve4KXvvgBkpDho4Ljynu9Dn84WA1Jy1quUN"
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
