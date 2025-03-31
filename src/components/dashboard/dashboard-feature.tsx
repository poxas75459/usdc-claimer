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
    "124Hxf6zUncDpzL8p4Cgs3LpTmhQzfcnE7fF8zR3dRUHiZhYvBjmtPc884bwF7HyvyTo2pS6X21oUe5QmcgkQQPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GREENCbShemkWQbQep24wguFM8NPtpvwziK7eazxadi34p5yUvxSDiQuMVyMQ6x4cwENRa7PvbJJDHgSBF81yFn",
  "key1": "62Y1gHKwbuHfo7tkcVGmDyqCbceMbKQBbHZDK96nB3ZJqiDq2wtQZWZWUxUYtpLSzYWZBMxauCajhiw3JtW1z6QP",
  "key2": "2YEtWzkQiRHodyNRva6aezauj4V8gvrK2tSTNoJBDW4fxwnCjzsRkqfhVUEkQo4w5So7QWLa7un9aZoJDqBSHHp2",
  "key3": "2qJ11BwRpiVY26ttJWd8cSSFA6ptJ4eE3NP3RMrCLnejpBjhy4sGJJWU6ECcYoBwfncFx5XjzETLGf8z6A71uneS",
  "key4": "2ekhqjzgJoq7sRPxPVVN2Ck4n8EHin4tvobqzAqszrR5fJLPb6W6NCAJCwH4kf7TC2E6DnK6fEaVuxDccu92Et13",
  "key5": "1L3REEY4VxxCk7NJEdu9WBV5PCB6b4SdicYkUxiQ26rTLW5VxEWScshdmVwA8ZXEfa2cR6sMiCeWp1cK79PBQLB",
  "key6": "2XakETPA7rXmPAC3WJyUVH7Gj2k9ADT57vGoLW7R1YVp1A35VMPDyXBCNMG4uTvBp9QKbby2rNza8UKiQVZMzPLm",
  "key7": "3Cjp8Dd9jimUV22To6qym7vxiwofwnegNzxF5dZ8Uuv1uRm9d8KnX2oVpvwKxzPczb8NK3D7wdATDddde7CcD4fH",
  "key8": "4PTf9JcJimFU4rrZi2y6iQEJ9YLzvxgrqoYovLsH9dh3EWg1D4PKQLHRVZGrkSwsvsu8A8WuWTAYkkWuaqrNEEJS",
  "key9": "4GRqhEcUdwh4sTVeGGba5TWn31JKVvms2ZajEGG8KHCM3UW75PSexDMQ9mDFxQAG92cuG2nBmasZXu2Bwb4AdkqW",
  "key10": "2SENYfyjs3vidpkueXKVd7dYvSh8yvu1P56mZ6ofAY6YF6TSq1U5mYtNAhQBckay4VZaktbvug4X9ivfTsx9yGzC",
  "key11": "QS8WTAzzdADsuPGPpqkUk5CCmSsrAGbw8d63g4sQNCVR4o4D1cknxcze89vS5eAB6rVRAoAKrgCCEUhAeKd9MnA",
  "key12": "vDx8XKZLijJkCncvHg5NLeGR9oW5ygaXEU3RBDAJ8Afhf3FTBgvjStCDxDG7sYxpE2hVnc7WFGkufTB37MZK7B7",
  "key13": "4VQ6NxJyi7WKq5b1BooWeKeovQvag4RxnJnzB8SQTtvjwfQ9Vq11QinVH9S1cmHj8GT8Ew6uWsUAmFGakFqq2noR",
  "key14": "5F4uauwMePQrfGiAgTqNGQVXkPtvyeFL4jLkH7hmqg8cKX6Bj6V18K8WKHiLmmAMuDFwxfLv6PTAPHQAE2xVSpGH",
  "key15": "3YW9XC9TQqy5PWsN6RyiuFNMSbCzFvENiip1nz3hMTtFWFkRyRANhniBhxF7XJ6TBf86dmF91xGRknn6FyJ7fuJK",
  "key16": "3fUcGrxXqvguJj5wNiwj3EV5HS6XhvDZM21dVfrH9jPqCQofkyBvaV2defgf6HtwzJck9Wzn2tTohKfpM8QrijrG",
  "key17": "5HALUGRYKpruaCnKHM9tRCtmpej7Fea2xijWVKmsRt7Lyjog28DMj6XuLcAE3b36TQ9crGiHibgNXvECQxeLDu4E",
  "key18": "3o3PsF6bAEvR2YR5fjEfYvaZP81PzFPSzffTBzZwowsS6yc94QbJtNBHUz8fzguw8VP1KQtJcfc1FL4Gnu6J7Ws5",
  "key19": "3RPJBDGprGLQ9h9QxekzutTMESU5jHEjrkXsvVXCeK7rwhBb7oeo5R3rwbrEaquPRt7SHXep71g7Qib18k2zhhj8",
  "key20": "4q771ESWNmUoBF7XxXXoyizv4SL9kBKdMpbaikHeAUySX3nkzmcepYaEpETunKbNJNkaZxMXZjVrXKZCqWFZRBvn",
  "key21": "2nSJRo73VSDqoMKfsXsu2W62NTFxbrc3GxNZiTL2cqA9pPAmCNJimPtY6uEGR6GKcNnzW7vzGNhtzLChLrjbBuJG",
  "key22": "15c8NzTLByWgQyandjXmM23u9L2QqTMER4sZzyVd5Rxmgxt8AjjNebsD2dLBWgZGXXLTAvvjGEmQAKNLNPQHmfY",
  "key23": "AyjY2zN9qQMHesE39G3sbf6VkQqueDKsX66h1VTWB7pRb9HA4PVwD6dgBdWzgsERFE8cBpsvbrdYqXtqsxpAXgQ",
  "key24": "3MXEnft8AWcQdxGMrv8dAXn9bFWhCa9H13s7DGMMByepyTFBywVphJGjppz7Mf88PngtcmKgCpBMELFQz8jSggxz",
  "key25": "5C5muVKUfbjwFbz3MoBumnvK5vSy1wVwjYyWqNZ5LnqGuxGKxonk6yY5sqmADPQ7TYyqGfmHmDPAQyQ2Y6sc8EhP",
  "key26": "2dqupb7NVEUnCvRntq4qgch7UnF7BpMeb1NaJCoHYBGtfG9yrTXRNnM5f8hjeiB42dPiH6NFp9nzYoQN9b8TxSqH",
  "key27": "eD8rK1KmFUJxSQxZpdJ9pnjaKuebNUBmH2Re21V19635NW56hc4EWNPmLZ8PQqueRLab2k5go5sdc48dS4PPiPy",
  "key28": "2mCE9h6K5UKLANv4UwkPmdZJKtoRWT7eLygXQTcYohUqAnhAGh58f4CSVh4v3U1e4YhXwv4BdMMkgnWUdRvVF8p9",
  "key29": "Uev1cvCsRrG4sVjCcR3tK6G9cQcSfZJUBonBDucKrwH4giDa4H3Wden36gHBAJDn2PVXuEBrofWF1jr8rqrzmhb",
  "key30": "e6YYoR99ghY5ax2Qzbwsmjh2XTAHg42gY1e9YRraMz6qzzHthgkPGqGtv8SknUToqYHLr1cuAsJV2zVYHzXJRQu",
  "key31": "32WPpN8y9AprVtN3Kw71nzDgTvbZuvH9aTKAb4p1ot1ZgeLba2j8M2ydtHxQ96qLRy1yco5EjzozTrmMjGoDou3b",
  "key32": "5HD8AA2DokZySGUVmvPf2xcC6ujcSUsHCVgB2xDEhZnoSQPtHNAcm15KZcXTRzGjsaksCfk9nGsyKat477p5Scm2",
  "key33": "5CoQRX3CuFLhPwzKfPDs9oKRhX3DzUqHShzUR754xjaoVubpWkbP8667whqAZMGJw8jYkwzE4GPSrrUS2wRs9FKH",
  "key34": "5spJKgUBHFPybmaF8eohBuwY9kv6oWS1zGi87yx3313y4mujDVACbk9xeNFBDhvzmbY1xVxSqC6SgAnoWbpEfRdW",
  "key35": "vWApS9a5kqecivAGyFpEujAneZgs8HZztVo5dBtMr8FCBUfXKXpWNfUvuMfm5Gc4eeGuQW7HmSGt7iRaSxc113b",
  "key36": "8rsU7nKDBy5Dn7Lfj1cD9gy9n7vDYAw3FTadqTyCytRMGhHLbocYLoPjZi4MdmcQHNLS2LQtVmZ5GbWEaXGLkV5",
  "key37": "52EBUBP21ueVQpanRE1YKoUQthFkGjQ1ZB9ByjUw1ALh6bqJrjZNbsMHAufWt7GXcNYWtqnEVXnTcTw7HUsAMM5g",
  "key38": "2QsFqRWfdes3UcjqoTJCj4LdgfTZd8oj7HQnuD9Jctd4XjnViBcBEcCPvEbg2YTsCBJv3XaokKAXSfpaLmQweWRq",
  "key39": "3dWnU8WnxKdNH4GSPhrczAtLp9XoRiJPtY1WAZ8RLfz1Hqjn7itJa5aYCL8s1vhN6fzbqUSzkrZpcLvkpnVZ7XPE",
  "key40": "3rrAYyQUanEM5Mabu4mSenSGC81kNvKmtaah7xwhW1MceFeQ7Jw26mUfpTqspXvjttcB2rnfRkQde7emsfpQyha6",
  "key41": "2zCpyPYLACDutBwq92kUcy2YwsuYPBtMaCdzi49R2gZ2YNMEmXNvaT8Bpm47oiSsHqzzTa8Gz9jRSRDCmM1mUwqi",
  "key42": "pYBvHxYX3cybnHB3sJjcrVby8CtPfwuKR4LvZmmnVTXhnxEzR2gpdbLhHMjXoR15fHxULcPsEPCHxCxU1j8Y8o8",
  "key43": "zpQagdG6B45YUv75wq8aSYmLsqNweQBTacjAAuXeU769rLnYEfLo35R67fkpe2CiQ3jFDyuNuUUKTrofSCQ6RqX",
  "key44": "5JJsAi4mZxSaeFMAv8ZQoZCaTo8Dn6UbqtyD4h9Pt4SPQSyqXkzoDMJhjUGDNFkRFH4xdc5Xh2o4yT2uikwKNzGx",
  "key45": "5bdHAqcJHToBxcEYRQPkHALozZrVNvUK2PRKTdefAauQNmPnSLQygrwagdxv1tNNzpN7kBohVPr7kt8MhcTafgc5",
  "key46": "5VE76xFM8D44Z4mHpKMkFia1xFWDG1mjtGFFdFFau8Win17tbkipEN2baQsku3y24X9NF8cmTyE8R6FoqussNrFL"
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
