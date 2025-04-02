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
    "2AYKryeRLaWscpVtgBguo5cZiqzRtQ6ch1B7kn7ELYsr2hprpi9RQjUwghit3EFuZ4nGswF4KZBcs3eLf1v9MLTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfv5sZYzXYZkkUbX4DgG7jzXAyUYyU7sLDAGYt6sRRnwFrSv7dRnCwdzVeSFSfS9iTGYvcdhKTQ1W432Zk3mLjN",
  "key1": "4K1cEzgnvYiqPrpPbaY5eQQUAkEzuXUHRbbotnjBEugb4TDXZxtCUpmXYykiTNe6EpCBL1K6AzUizUs1v5gaXMPt",
  "key2": "3TuRiQaiL87FjFuU62nyjBi1dZAUVqxTSKpFuDurnPr5oKAZNkpMpa9EigG28M3uq4CYRXFLJ1CRhVN3s5V4xJ5E",
  "key3": "R4SC1sL2uDR6AiAzET6b3jMSnGsEAMeGE4cdkg3MsSFrBXQ3nuhx3XEyiwowU2YTtygjUqHD12QJYkTEZCm9tBw",
  "key4": "556xrae5sqRzypHSFTDtQtJxHs2vHvtMQNJ4TwG94NxNoS75tMxTRn8KokKArs2r3tpJ7ZGZnfRZibqq74D769AC",
  "key5": "3CtzsSF5pDgGmP3trnURNDAtD9t1BHqdFznAZZaguUZZ72LFfV2BdkBFvfiRJPTRtgmLok1TddZUPs5JfUWZef4P",
  "key6": "4vJTNn9gviQkiynS8ULFHA4viM6MGRprkRqk8nGood4NyQ1HFqMjznvn47WkArvfnAj2mqrHc3Wfqrb1SGqqYxUJ",
  "key7": "3JNgtzGeWs8EVs5N1Kw8DKmMCxPR9zo4DcYCqyvfyHVbBgxQyNRf8BW26niXN9bfrFWFZpUA8e4NbQ6g9PJz5aH",
  "key8": "61vK9TaFijgajqeMJuHfXTky4DQj5eUF7rjk9qrsjrE8LxedyoKJHtRKBJigaaug6fvjAMKMETcyGz8S9cY94tp9",
  "key9": "5rcsLSVYYBXHANP2oEaPmPi1Xg4UgxQKrFtSYeWe7Uv1o9PfrNexyCStCXEbrJr8Z4xuDxniiRummwkzZYZtWGrz",
  "key10": "5VG3yJY8Q5GPqWV6u7ii3Tzj4QHmiZr6N2KBYkLPj2qkf1BoSbUCPbkxhSgPzJ8563TpPsATQuVofysMt84JLRtn",
  "key11": "37MXMUTLZ2mPMBrthTWsuCbFEtqKXbgUVzak5s2DHhpsj7oosCU1KVYqCD4bvFRTCmbpbaRVFm48CwC6dGP4XP74",
  "key12": "4mDqMP6kwqKod3MnXVzNyFKTzFjR9btntrFxSkU8JbBDeFNsBbY1DDrAmvYMQ3peD4uBwpMgrtzfJZL7jTEcSRv7",
  "key13": "4FMCKjGsR69zMVjuELDuJUJAfWx4ePYfvqBCy8bakwDpRguCPFju2yNn1TsKdfRgt3obcEB1RG8webprsGAsn1fu",
  "key14": "4zDdhZbxTw8stKXSDjuJGoZLqxsQvyhw28AjTqNqUCY9DwpQuBctt99WH6ZyFMZj6tj7MwABAre1YtTFKzztjKDd",
  "key15": "2nkSCNKzkqEjy1QtVTfHK11rN6GR3yvsp4x8FLHuVgcmSqjbcpmx5J3jSceyhe2NnQBHxGCnbMrwNf4exifk6zBq",
  "key16": "5hjY1RXfbigskivUtCdfm78jL39CM6DgEaUV73wyMUSYpYG3meXr6m2bUBWneAicumdRZpZWxzHm6h2TVmEfiwDV",
  "key17": "ja5b5asUoyMYHASN8M8473CTJ3X6LoKKfgHMew7M6ALSiFqbmm9ywe7mZYsiBzqtaBBxqamqmDGJpkoQNq31a6z",
  "key18": "63m2mGCVmRLWPmAKyMgj176gKLLHMPcUYBZkswyMVsGpkDmAFnFvpeF5tPurkGAKozPi11xj8XKdS12eyP2ac7ms",
  "key19": "84WhEcF2i4a9tjzz6qJCEjt5fF9KmrYV8Bg5wxYQWbth1c14LS9dS8Erbh2xRdtBkEF6SuAbnqRePhEmwwoSF3T",
  "key20": "3WLmsmyLmQghuB3DxVS2mihVAbNnjpq9EWzvxTBFjuQvzp3E8MN9mVNn2H5m8sgaW5kh5C3LUjmxBgVhhSp6Uspa",
  "key21": "oJhKAkkPZhxVa2vZUmnx4pgUHLRvpoBKeXscKenRRQCT1DMCfJyuonVUCu7ZqfVr81S9bfGuQzHzduPYb5Y5Ro2",
  "key22": "3iV1Uku2dDEaUqaRx4vERwBogBZcfNHouMoXz3mbYNDyccte7CYBmJbWNgRq52PA2P97R83UU6NYnRLE7wjsYshV",
  "key23": "5ikDZVWtCUxX5J8VZL17SEvakXqFd4YgmfdAJSj1baiqQgQ6FvYf6sXTRraYJWjWrTpEP3egLigCBJ41QvvREEGh",
  "key24": "5Vc9q6buPquJgC4uN25kSGyJ2gqXaLt3CLpq75nBmHQnfiajQHQx8uDv1QpUzWrjxgpU5evTmLEdcuWwtUJPKvCN",
  "key25": "fggQHoZKHa47F4FcUFQrf9z1Uqc8cwCQeoFPWLb5CPKLYUK81cBBhXBpdh7Sf3mJKk1GWcpyV5cJpvsTKKV6zoL",
  "key26": "2TUjaoNPwuW8T9qyQTN2mYAU5dYE3gHVNTdu1DGaw3PggrN2qf92cwpxuS9G5pBfRReuXRgVes6naueu6Av3dC8B",
  "key27": "2uK5NxrpRvYipFuxW1hVXTcMxEkepG9GoJhdWmAqEUTj8hkFk27628fLxZje2hU58kvrd7qPcyjgbtQroZsU4L3H",
  "key28": "3dr5iFZDwHyEdHChWjEgczMoczH2PXXzABxtFQvs8SAbc5RiYgJHG9jPr3Pr9L1PPLRWqZiLSJ9ev8RaF6X4nzMf",
  "key29": "4fwS88yTU6mhbiYPnHZxdVssBgFGnmBufMbiScQGeTadcLsPzh7zCrrCSwCSRys4veyRRyuVXjtYwV5WTcaRXGZT",
  "key30": "5F4T4AGTHiBdWfGh9x3aX9LUSnjLwHxvMu9TpteqtCYo3A6UZFFsBAsdwaueBK35G2EWBZWETuk9LnKoGVkRLoNM",
  "key31": "4J1kC2cz61Pg7gwWLMCh19oa6mfrK5CB9DcuAbka28AngTiKYvRgbZiFWxNswQYMKvXAWtTgUtfyTqhKQfyFWoA",
  "key32": "2mruk9hsYqS9GxigEeSv9Lywsqd6eMKM7pPCYs7WdWYP4fg46xQBZ8fmNTEgb3MzEUaqL8RDE5z7skjUsiq1UCH7",
  "key33": "2EHfXGDVeFty947XtqFLS53tzSVsktw9735PoJwtSPwYv31Upk6hh6uwPJ871iLuiHiHDQrEgg9jGmEjd713NSLm",
  "key34": "2GQXJQ2YUcQmt7NnYKmk76iZVXHnFmETNLvPoQreFRhSaU9TN3szaqxGL2DKdAZkXH3StNeyK4SMeLQ69a4YZhZb",
  "key35": "Tv8vdudpmJZJonNCiXLXKjwaUNXH1HcQBtXwagYLVXoYsKZVBQ6vguVCDReWsTFXB7hKJ2wU8ejoMGYV68qEJqa",
  "key36": "5cAGnPsKacncp24tmBkozD6QQ3nFPZUztkwZ5BLXinfjTzzAmbj3b45wZstwwHzvA78Zj1n1yMVmMuBfHcpTH4b",
  "key37": "2ouyz5n7zygFvN2Eb2KY4eD4J9naN4uwkebLCQSu3YGv71ZWxFVvVecmizkG7eJReiZ8waWJpdbpu9kgLux8RNsV",
  "key38": "2Bk4fp1pGQpULsvLeL8BTCUQpSRuTQKMWtby1dTuoGQtaW6wY6ivoe3V7SAHe1DLphiDghMR6Kv7eQBEHs2zCV5t",
  "key39": "3HY3EycyBuf3iowiW6ckptyNLdQUkbgARnmSNuD2rNHp3Dd5ytqmR6Kpk2by9TuVWiPR1MwudxtJh1ZtyRUP3KxJ",
  "key40": "4eMzP6vq2tysZm4PS2a9z4CK7jT6h95649ZMFtBZoWLZb36ye8LrnzscEigNaC4Mpw8Q7wW7LTeNQJgp338AJ7JP",
  "key41": "4NY22w3at5uytnv4nMNpBs2MwYrNLbxrqM8fAgqa5bLZz8Vdkhx2NMnHcrBdHn5BtxVFp2CKfCDv5CAUy3bAH1VH",
  "key42": "39aJnu59erQH3BonqDQQWSoBUnb9X3oBpUqKQRphi5yAMVNQL75PPLrLVkyzeRnxfxmL91BxGUakPH8cphg69H83",
  "key43": "zdFPNvJ76vs7nPsZkNNgAYH5nFY6h7Y3MCv3DqeCUgAHS1H91YBv9GzwJwY9GrQKWZjFsZxbcxLKNh9fbbEeuhu",
  "key44": "9KJfVKaWZ5EvXrP3jNe5ggSh9bALfTiUG79b8VyVK7G1tmedeTzfT5CBh9w3opFncSXhB6bVZekSEqme6HL8q44"
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
