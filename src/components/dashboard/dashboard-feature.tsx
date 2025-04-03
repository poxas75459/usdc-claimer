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
    "26S9Yvrbb6s9Kq35SGjmc8PaGaXGU8VtK2arpkRqzsepNucsFjbJdqabxZnHLQfYJhURsWsUSR5cyHp1Dq3YDm1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZxTw7NAAxU1ZJvWQjLCL4PnTkaitQwRkhSzbUDrMFsC2Yw6cfMxr3jUZ1KnQNoRjkFVUbwC4xLzsmqiPLEj6W2",
  "key1": "3MQpFpZQdLtoGHxUPzVLFnouXUpN4BViVrH1FFXhxtJGQH6NGkAstczG8CwN3mRJLsUeFzCeyt5uFyUvikfLSRCz",
  "key2": "4qTKrVmmHwU6uTiKc3vK8Ec52tKAQNrzG6UWUWwxs8nZqggat6u2DGMLY5KYa6JQFYXF4sH6PHV1BE9hVCqZiVdU",
  "key3": "nXmev5GHVo4drK79oLmnHvCV5fzyFp2BVR3dtjfJoaC4bU87BNK9Gnx6NRo1nAHFrTU7qbhFbmTDjYgrwMRbs5k",
  "key4": "2UbXNa7awEL1KeJcbSmH3rpkiPQXYjEuFo192ewCRjKRTAjCcudd6RECq6zSqmY4N2pRGKidyiUdAgLo1sje3sVN",
  "key5": "2cSyHbhXRVdgotpLPi2V1At1REkQ9NjNnuE93x46MKPcLHi4iUjtqisBZMDx4ZCbERCSatY2F4uQcXoih62hHYay",
  "key6": "5YSnU2TAsyzir8a6QaTbE3WcSGyYsNKmpyJ66btPBQKKgvNA1TM1XA31pXoCpkWvYdLwCL9a38MLDu8DcrPQmjn5",
  "key7": "3qLmhuwXdYXxhAeVvn5KdiRg7R8YbvYomFuDTnhibkWYMooeVcrDG2DnVyJPKAyBQQraThcPdW2tkWBF1PADKsEg",
  "key8": "5Di4BFN4LcFckTyX93oBftFS5r6Kz2LcfiJvysBS7moP7rneXw42ks4jnQMbmCzZC231dyuRqoCBA3hXk4kJHkbX",
  "key9": "4LWaNWyFXiSYkwKM7y1NUEk17G8pccqioZBnk2st4D1L44PVyh5GUBHwWoaVvczmGyYKgEMNGKVYDjtjFooKwa64",
  "key10": "2rxbgwz1o22HXf5oBeUoRaFdSjvu8gPtzRVJQKs9UKXSBgB8xLPruPSsSqS58twcejhoG3CZPeYY6yL59GiYJxkt",
  "key11": "4ivXvnzn9aRYXqquH46BumUaMeBZHP43oZ5hnS7oTD93uxx2AFReK4gveZwBSWX887i9cuESNet6y8zZkFgxvhY7",
  "key12": "dDGn99TZy7FysQfD9nZD1BzU5t5TQhE9pZ4yn4KjDJvbAZum4pBiBsWW5ugmtFgMuEaNiV7WdYe4Q8YGQVXaj8Q",
  "key13": "23i7H9bquJKjHR5pNukcurvat8zNSmAPn5BNWLrTqgSapY1LT2Nz7m5xTXS375smaZPfRbZQagSc8GdwJtVW1fEv",
  "key14": "3fpb2rt1snQaHy8XgqcMoRj5zWSzZyPP4YLNXExvdsjAgiFGgXEKnwSgxutqBpSRs5DmsjYuspbRw3JGZDthWmkn",
  "key15": "GEjP2XMtN86BZgJmguniRm6tXPTxxkbwPL1jonZZ8SXCajaofAajfDN3v2b2TrWHrEmbusHfwXS33rfQqesxDyE",
  "key16": "4P74JWi7QokRpRXj7wuoWBSMm1Rabm3BAj81eoCamqoH7LQnHauGxRMJ9K2t6DXEXVoKULQFL72LvwLkdTNWWf5r",
  "key17": "uZtd49hr3oWijy2qGcfgSbvyx9nN1qsCbVBKBfeCnSvpx3gLgnQedo1capNJotEZQrkYtuGFyAc8fPGGpuEbRZb",
  "key18": "3CgR5MMmYkw73qr2k1Ykjtg57EhcQakGD1sBx3eymgRUdVLs4kpdYkypQxGw8eUdQa2KJEXAKwn3J9ieTFN9SFg2",
  "key19": "33SM828nsDohGjbXFBRFR2xuMyTRyMCWTpuShsjr9rryz4AoTjv4xv285wUUVBBEpq8nbkmkxsM6ztKgCmTc4t2T",
  "key20": "41SFJRB4uUYZUCQfYcjVCyVBTaVo4rUpMze3e6exT5fVqi8vUq5fe36kpUL1DaTBmz7APeYsrJDogLBxtoXn3WcQ",
  "key21": "4BgRtHph8kQL5iTGFLWFFLVJ7V2stAsZ8VFfewLhTG4nAyU2KV9M4XXZULZfqgAFfFJAtiKdRnVAv2x6D79goAGS",
  "key22": "538wtygHRaANan7QzESm2YMg8zUSBwKsxiDBiM4m8eddPdh2X9yEe6Sf5fWJCnRq2HXpYrnPrxaL6ABQCHFieKtk",
  "key23": "3jMpUJJiHKyqXuPNJLhQKyK18RSMMirSEZ3JzvBjYMxKHTteRmeqRukmKUGuhzJ4zK5Qk68t5diXYAmzr7Y1ewGr",
  "key24": "426koRRHUMJKNnJLrqXe1yXkTSr5EyUUVe22Da8w6M9jue8j4xN62ypgXdpNps8PAPnmrtbq6mR1okVvkdTcxzjr",
  "key25": "5arqedm1NAbeYgGEtPEZKHtQb24z7eTWyWSNvNev2B4N7HQi3TNsTKHLgkThHYLHfQ4mTjpAtQ2v6fyEjxeVbK5h",
  "key26": "52wq8azZMiHwTtPNSh2o6etDFaAhf1p9FmHwzTN87rHLihDmPXmLxbLgv68ZTvR5nixvzCMKCeuw3pruM8iAN94s",
  "key27": "B3Cs8VettZCFfVRPPo7tffE9qtFeFfRGqVkzwFMSgNgXMfgznc6t9d9gXTsq92SfTugygsYsxXUu43iGGrPP6iA",
  "key28": "24KGsyDuMWtiAjmSYUPuWS7pJeDG1xnGmqRDEnCi3crekbBSim8DMJ132KpmzpxifcXqNVsPu5drPYKVe93EP3bm",
  "key29": "kN13goz3JDHK6voVtxSfwz78vkQLxFDui7vcz8KRCKeyksp9ge8KjVm1efTamahN29M5fnuFhNQqQ57v4QmeF1G",
  "key30": "57VgsjLzm37d5aVep9u4GkLkk85wAFkNJbzUCptqEQVAPYXqwi3dzEtP7cW76jq9jDxTNyTsA6zf5XwLDZGVkuAq",
  "key31": "4KW8yrhDs2j9Kd9iyV1k1imR3uctJkezUQCBxZuQS4CSUPQEN9TK4gM5YjmEhQpnUsqrzvNRVdDkb1qDmeXQEnXk",
  "key32": "2V8tvx6Y6K7HWgrmdKWq7LBzpjGTmTmopnVgGHku7SYGoTe5YgBitKofRn9tW2uYkTGPB49CEkG66Y4t9eiwMLdq",
  "key33": "2ZoEJnCZ7Ru7cvH8sGXBbm1xt9AeYqzRnu1iWr1G2YXuLb1BeEAzSUzyWbSW9dVGy2MwSbcafmBaur9qZPHfQmmo",
  "key34": "4hbFx8LY3ybGgDajt6FEjQmVsguq5WKNcUTGshV481CEwvjiyJZQYz7r7Nn9YzW1YMrDvyKyNocWqnHikFbKeV5N",
  "key35": "HuDWMWokQtcgKeWZk8N4wSRor7mNycDUETq6izEHbL9i1jJxo4q3mZ39H9hj1kV944fiUqLDcJx5hdBtdLJcQJ1",
  "key36": "3WFkh7VohYRDxrfNCLvTCbJP6CGBAt7uGVVjCNr3CQ79BMcbZJgV3SAYGwE8nv8iBnsQW7bMCX1HBVpwFHDPLKFL",
  "key37": "2Fq7x7u6bFDUjReJsmAFBhxmGbc1qzf16fcYQfYfacmccVH62X8zUyMhWasqUnupzU2NHLBP3aw4wgagbEFpraBU",
  "key38": "2UN4RSn59VFudixBGYHFwdncHQhJa3qKEv5YNL741C9Es5x7o3xk9f4uLB4Yq3JHjeX8ivgCSf1ykhHcvhK1pW8f",
  "key39": "2fY2hBi76H4bYaoRnCDBgenLbw5tXK7b5ksuh2NeCgAkgcU2cGAfSCeUVYsMUhaD61jv8vVCoiphgJHQTFUDq9Zf",
  "key40": "ykxmZ686Ec7SXavyC9iHZYkB4WoE8t4uQMcQ9e8yH3ZU6AUXR16qegE8zkzpqdm4VjvZAk8YB54PwukwWNVd2oD",
  "key41": "Du3ad2StkYi1qyGKgStEPd6VXyyysPkB8JBWXDhZSgsJE1NDdPgwdKytvh56QwSJJ5yjzYMZwXXJBKy7EmDsDKm",
  "key42": "4aw6xRmZoRVZJF1y9ghZLrLrMN39jnu6oFuXwTZgR98n1rGhg5yNuY8m9kWKDmrTsk8rBdKNSsiDPD8GpFxBVXGC",
  "key43": "52sFXHBAcDMeojirASieCEL55iZauPJjaGSNoAXVpDvhXD8FTfxyrbVD1ucZxT6apBS4YNQtWDNo8Ho8aR3dYZhg",
  "key44": "4vx9kqGxmj49JTweYa1MuxLjYs1pDjQVrtBdf2hdkJ2go4RFUUc8Wq2DrDFqNWau1D5pkoaxHPf7BjbdDD2JvKCw"
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
