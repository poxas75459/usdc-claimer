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
    "41ULAH3ESEogT5U6W1y9vb4fGMuTwM4Vfy5nps17k8Ww8R3SVX5FcK7ey3VyW8sgHr4snLsFojZnFpXzkm6BFm2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDdXKw56xZvAgBbvkDiRhQ1RjqYfeA3KprMbdPdxS29m6gHAAuFR4DhmsXHa6GdUpbCAy6uAJbxQ1fvH93KprAw",
  "key1": "4PRkJxsbD9GZVfm1Bd6ZXxp2YeySXTDYVDFfPsfpgtaJbzjJsicvvDEgdoJQ1PSNHAF6knVBm2oCxDDuzHhfmnkL",
  "key2": "2mE1AKfBbfDSuiHM4Gdk5uG4AqPdPnzVxRF8fBVFdvfV8KeyJQ5tfARsrB3KZCLat5q3DwjMGh3Qg1RteYxaGQun",
  "key3": "3C1h8CW2UmcoYKhHjPpupMgTGt9vtVWczhsZ4dUXdSMZLguxBn4saoLVMwY5XDnfHnChJcixeyK17kHS7SPTun8p",
  "key4": "5QbVofwEvZXuqTduhhn9VD5net49gC8wyqFgTVa38BgohXEifWUar3zKxvbpgMaLa4Fbf8cdWNEE7tbDe3wyFfZp",
  "key5": "2s42fM8DhwExMnFh9KBReUM9oaY1uX8y73TdvT9rurVeXirJvGK8cwtRxQr9Fs1rqfwErXPQHQxVv8HvBg7a9pMj",
  "key6": "3jNQm6nqPTwee5T8YnLj7DWxfW1jvTqVc6VdbQgK8ppsvk5eBzxypqnQbSMx2mYzyTWuXPtVpSeczpppjSAwQhbk",
  "key7": "EjRz71YstutRAyZXYTTuCghKCA2CVzGfbo3Pseon9ZjvrDTqcjtHsSPMgsUY1py8nes2p536rTHFRu9FEi2N5HA",
  "key8": "F6SAxFGEk1Lcyz2MvZeKvHw9iTuhsJgKsQRwcEsB6QoKy7X69EkKCoqz2a7P59JRuzVWCU5dPKYnkpnA4J73oXr",
  "key9": "4e8GCgDDVCHP7nHVAkTQQn3uAvEaEaL4AHXhYH9bbXtSbh2KExNU3soPgKhDbkpLgj5WkmQgoNjnLtnt81N6KYN5",
  "key10": "3mzSiqmyHSCW8HfKinWiE1XMqoRrW9y2RQbhop3mv1Cg9biDa3Xf87SXWGiGCs45wdCJDSFZ51uzVqwfAzERYQZA",
  "key11": "1isioLPLbQMRHbJ7JXNC47U6GZjKzKP1EU26a4ZkF5xp2GEXRiejSUD9g7j3LvRrPcXzs2cx18HwAphqVQHBRn1",
  "key12": "5KQb9uSfxEfZe4cjryW8pUkioBNe5zTnBXA2vqeFjdh4X5mJh9pk1Mcjo4qb5tu8pi9LTyZszHHzTexm9pdyLjEf",
  "key13": "5DvL7ETBGLJ1DPMhFUemXB13u5wACwKc9614n7RtQ9GC9EVYH1prHkHk2nvj2mov2sQT3dqvU4ARNojogDkpNgC1",
  "key14": "2nhQbmz1GLn9NmBaAGJoBhyUZB5nTa35NWhuU41jZqSZpG71a4Zrx7BLV2aGysBpW9tKcGKqjSncbRht31V5cbRn",
  "key15": "3rqdvcLpRmbJAq99Y2vGqDB8nQKSkmWBSbQsXTcTP751HDPZvcdF4ExjnaQ4nyjNZp8inyKA9D3fFREB8kaqoxEQ",
  "key16": "55o3i8FiPhrnGtK8SEKYTqycVeMA5TVJHec9Fo7Z6GqzdGtXmKBCHRvss1qJC4xsVhnmiN19YNJrvgjWFvhvrPbR",
  "key17": "bXeRu2PwENjyevdQ2uN1VVXZrGRpKDpn7ccPZcddvQBSwXx4vu2yCFKwPxgqidukd7HWTEMVDMovHuZt5pzRrai",
  "key18": "3BYybiPnHm1wDEdvGnSTGN6NGZD8eTZdumfyAkjEbeFcjMFA37j89ci8Hd1VgyZNoXiwDGW3WShN7pqS7LmYXoLZ",
  "key19": "65Z1jYAkhQJf9TGBFymRNwkHoULXvwcahx9qAUQibH1Jfq7xT6RksWVavrG7g11t4qr8D2773EEpTT2cL27zWXrh",
  "key20": "2DxejcMbyjpUbFa5eR4Bw7zpLXWJST26FddNp3jav6UzwqDMwsXVcubXni1Sk4fJqx6ZhqCzn6qtKbprCkPMPksm",
  "key21": "2bz8iYGnAXW3RMgxX4zRe5XaxzFuubtZXtxnM2CwspeJuD4JcAsYoWoGbhNPz8HtNZCa1JJZe4A8uv2VP2WSeKR7",
  "key22": "5YAcB55fVFWm4ACNz6sAVZtRWBm6xGRCm7Q79JbfUfgZgbGnDko73gq27CikUzN5ZAFzGDXDkkNkvjpd9jKLkTKX",
  "key23": "5vzxpFCgFev56CHiytHYYWqgs1FsJLxwAHKdANXF1wSJBjcTvPMFvLzoiFGAoffsmsYYM9LLY6urvZJWX6euAb97",
  "key24": "2SLqVJAfqQxtnTyiFwcWPvBJiUV6de4eR2gXWofrfujq9jsyvjXZY5DjFBsxNNbM4MufgnQD9PhAyWTeiWDh8i6t",
  "key25": "3WHyDDz96emKeQQapw6eWZE5kAoxUFMuRDdC1qFojjCFCwjMqbVJC6uYnX9pjniz3MRoHhQ8RH8Ve4m7tWK6h4rE",
  "key26": "2eSiLUYm2N4CST3eVw3BTSUjaQzD9gsVKErXKos9AKshL4hQ2jduuNwvMVArcbmfi1kxJnNoDLfELEok9HNz1b1Q",
  "key27": "YR5G4GKazkjwmvv5WVSWJy1bz4nreqoTYhF6inPSYErEZ9mEY2fjoTcboFEMDCvNYDVCX4NmF2RFHa6HwgqWkrv",
  "key28": "4Dt2Znxs3jYuaFYm5ezTmKg78o3rDYMmLiDfKec5Wa4DRaquWkh4rzQQaM1rpG2gR9enmBL2Lk6GB6Nmo7XPoNBS",
  "key29": "QAEpQQJMR5dEVvTPP7mJtzuPGkNSaVq66RTim7LPy9kY6yNucgwf81xVncx4HTEQCZnV6xGhkfWmeaDFrGW54XV",
  "key30": "4Zyb8CQGBeqHnTdjySUkRBnvjjueBYcA3QLbReZvRVpVikjhwvnkp4DhJp4cVabvo5zSMmFrgiuSE51U4VN9Nv8k",
  "key31": "5kyDtTzzHQdBoeuQfzByDxZt2FX1M4icwfTvUwxcePkebgErzn4bC9L3gi673TunTjmnLcXGE2dR8MnKh1smywLd",
  "key32": "KBkcqvfoDHkxSCPrgWfyyYWvtvugFKyDmXJRKiAHvTeUyuCrG7KhfmEZ3471HoMmXqLE7GYMduPfGNUy68TTV9S",
  "key33": "3wZt1hNeDutJcbxJeR1Pi7MjEux6sbYvp98da8QvaDQRxgN513RC46DDH2LEMnhKVfejSDKX6BrFMs4Pggr9uNGf",
  "key34": "26LYAGmehFnKJ2TBKjvFgZyzDDEqumf7ze3b6MbsELkVGdwVPDQKjiFU8kb19mWbr1JdPC2pAsFfLmhyHwDeZBpn",
  "key35": "52EzebaGWueFwpeyJdeWg2QdGEDUhUpZNJfvyuRxkx232GHkqnr4hXxchMRqTo8dbKZQ9E8d64gZMHd6KQxqCqwe"
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
