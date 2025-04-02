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
    "3hfPv3tkLyjmbbKpUvdrA5vNabRGRFBkHZHJzXQtsQvmYtVdmt5sqPswEG1GNABQLSAMpEaq8LdrofkisbPomKwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEysdnfgRG4jz4Zz2Tjt1LumfspBWiRFF7mASGkH9SKgcFaXBiU7L15Pb1hLaLpzznuPqaqRgeCezBZUGtLPvzj",
  "key1": "QbkwcwYnSDU4MRwcds2TqLCik8kevdW1xBREMhcawhcioq6cWML8A28NvhoUaqnCJU4hrZJFgnP7tfhMya9PXBo",
  "key2": "2fExLDcGDvgDtEGFru9ktgVr6egzoL58TbmLgfPKD4brZpaXCk5pGxwjtHBjqm5yU1hkmM5TJwz4ZAxetenskA12",
  "key3": "aqtvKxw9B3knADEuPhyt6TaHwCKipkWdkk1WppgeEPfCF88zExVjHeVJdEtUGtcFjfm3Dp9pNWHWot6KrqKy5Kd",
  "key4": "3MkwdXynguPxwugHnh3B3w2HJLAEq5djZGUkJmrZde9TpzZ3aehENc7gqXgPXTVcueM25hh4qKjDjBbxmw58RrpN",
  "key5": "2dA5UR7YYD7cdunRqhL5ihoTbpS2f1CTnRWfSP96JSgPDT3XCTzBqn1CGwovUdo5CKmXrQwieLncmY1yHNCzF8QN",
  "key6": "fbeopB3psHGEcYnyjA1WVtFWr3iMJHFGTDZygbTTqteHnsiyaXqmaWJ9Xs1C4TevjYTfSQ7KDNv8TtRpwnsW9ka",
  "key7": "5cwaB6KuSuXnHgxTP5owLuoz2REecnaA8xw6U3rcNfdRLipXEWwWfELovPvPmbqZJuctFb76iTQUYwqDmh1Coty3",
  "key8": "3npXfxKa1w6mqk9iv6GfQYqEAFi59njLRsSGtUqwFPwn6KqW2hqZFPSMtoLP5KYYdnV2KGiNcUfW7UHrA3wt857j",
  "key9": "5R3DhHPQU1z5TCg5GixAK61sJmC9grqQBVRrtqwQvHYQr1mBPLZTpWcXx2Ysq2bnJdqYg2RnEoFrai8JkHBEzUqh",
  "key10": "jpDCTupDJgZhyQ27iY1Lfz4k219Y34uwMMYPN93mX3pN8TaH8rNHhmFBPaDFQdcVXkBnwb2ySL8FZmRfjbwJCyo",
  "key11": "4hJaY8KjDFNQofke7x7UcsF3iCBdxw2Vp7AGvszZ3aHprbFtAUBbP11LaWkRG5bjrU6y5eHXc6fBqSmauyuLjxHC",
  "key12": "472U69QaCHMUsoXHcKYSzpXNUeeBkJYBhe4QCcjQXdEFUZWbdS9R89HPx44RbiAcBtKz4TvmQ5eckmJctjKihDB8",
  "key13": "3ZRgaMsCdT7Jhn8to5QvSZQ9GK8m5dPCEmyh3FAV71PgykSV22o4FRcpM2Hq5WsmXKJZR3xzUmkGL9VkrkbCEvrH",
  "key14": "XK7qPm5r6XCUCQftg45PJHrDB4saSQyv1MNmgAq4GrbFgRvKmw2NeNG9NuNJZornjT8KCf23by9HJDogWJVLM5B",
  "key15": "5DiB75zc5bQKqtBRYSzQgju9859uHCcwBhLg2866T3ac3Uqc74U49xut7LyQgPSVnTCGyyX5g7proSbkKZ1dEeKw",
  "key16": "5TtHaU9ecLykM6uBRw2aJcsC24hJviri7JG7k9FAfwEQDuGvqW6LULd3Z9d6cxKt3Hkg3wFgri13NnqdfMQwxJyg",
  "key17": "2afdkx2xvy2mp24dqbP3PnVZF9y8z8YU1buifFauT39Ki1pc8JpDQN7KF8g8VjQdwdN7zgCoxXykwdScc1MtRJTW",
  "key18": "4TXK9NJ37sHGCK9ZpNNNEBsZ5yDX81nnRd2UKAn6whHJbyeoP7DxvVtA5fK4EEygNUxVvx8QJ3vWCcALHytaoQFz",
  "key19": "24Nge2q8DJU1BNHLeCbcTd3ChHax9dR7GLUwjzCFoSmcjXdQrskntaHmDaw1fMFxDmh5cZFUKPpXhjmwfaPPk4a5",
  "key20": "2gp2SEbz7dhaBwXLdDhPNPwnSDeDsqCbXKtqiK2w2Z45CL2hhpTTp86nJgDwUF6GsMoizpZ9uhj625CwzD4QTp18",
  "key21": "5rc22MCyLgT1r215esEdUDPUvpkxHed3ubUxnUkFZyy6pnoiF6pmpLShvuht3nyyr7Hk1NqShpLzQ45VkMjkcqBd",
  "key22": "2717aK12NgXBwfdxq4L5s8cuPnaQ8vj27MGTQLrFDnRodc9g4F6QrNnSkFB4rbHFqUi2gG8fCsAoWkR2aZtz9hEn",
  "key23": "3FXeoVw3wDEHw2dG4C76CrfKHyQr97KnriG3cDXNnixVoyqRbUpWQQLJ1Y4NS8MfeFtekP7AbTJkMKHBM6jetez5",
  "key24": "3KbWDfa5cPCSymR3MBjYcbPzp7jbDT3623qNi4WiZqE5jnqb6crYFsGeBLRiBFZrdKBVCWqnajL66JoJoFwtXc8X",
  "key25": "2GWdMe5497W9CuU4ChrJfHonXrGbvJjTNkmrMnDoebxpRBjkrLaEM2qPPH21KktHVHQLWPtbnuy7mNKKX78bwkTH",
  "key26": "2eerDcHy5rN3GvfdjKtNUmRgKjxFdvbDyQMdRZ9Ni59gB35Xrq3WiACuhPJJh1igdSeeittC724UZh1n3nhomozi",
  "key27": "2MyUnY9rThCXGWUunUwYj5DM3L88H21NzfTFtVR9a2FUrjE6XDoP91bSTvtPNWzAppsZfRGorArNRff5kPvcs9Z6",
  "key28": "35oF1msctPb76AwVF2N8UXabShW3V8CRVv8sDNCzgibLWxk22WCZx5MLq34Qx6idR4g86YeiDUN23QmFrMLUEWKc",
  "key29": "2ErTMtXeZw7KWXJxdMtvwDS3t6VzSjWUzLnrxDeaJUVjdJ4w7Uix1d6zGkpGkkevQT83cbTRDRQindzbactZUiBA",
  "key30": "3tNoiHWHevqWwqtTy1wQH9Vu3MQ3ivJXtuP9LGapEBrTYpdAjLg7X16VZUWDgxBoydmQKdJdxjxzC4UPCBgmXixE",
  "key31": "9xgsr6GanRwFJiyP4uZybSK9FuwEN3MEdDFR3hBQcPXTaNoGtarTxbJM1gpM15zoNcoPucrYAL19feKcX5jgLar",
  "key32": "3akGQo7cFcsByDxnSXuUjZhC5tVizmhrkGPpZ2Fruh24s4L1H8gbiFJhFDJUHLswm41tHZjTd19caDJNNFCnFaAK",
  "key33": "4qBWPeLiQrB858wjJmEy1N8UcYu2soTJH1mS1PfVX5iqVDGCECXTFWt1dfDdVteZkxN6erU6iPt9vbQowFzMkfBW",
  "key34": "31Xh9zUnc3K43Req4r4ugGBEmnAMaQcBUotuJtCsW7DbVBBrKUWVfV2pekeesJWED4TaYYwewtgRKUpA4p1PDQjD",
  "key35": "48SiVLakJARxm9NCknjS2V3KztdcYCXdMwdaq4ZEtA7jtAujz39EhwbiTP2YaathYQd6CYnWXCsEAJ3ARMYx7CW4",
  "key36": "Pt4Sx33GnFyurPPFgiYfp7UtWrqTfqxfb62QPP7CrYkQwcJMSeEumvTkKcnPTdaBHtxqKNx4dPVLAY57vGUisTR",
  "key37": "3KLznFv1SckY5fLJ3PD7pt9tUWzwzp77zhzLTuZP3wdzk22XqAK5kH3TYqi79tazTUYfFLX7Mxivi2oWesaYe7ur",
  "key38": "jo4ri3Rfe7eUy4FWu7MFN3yCfJ4yXsHecefBdjvTz5GHCdiPnZE89fkicUAj4JKHSPFEY6y87m5fLg4LKC4oJ7v",
  "key39": "seoxWhjmszQr5ysJoLAmT1UPB2owwvJJ5G7s11Vs7tgdGZSEBZWxjvqCm4kB5BvdzKu3D7PvkFMcE4Axg1MGQgU",
  "key40": "3XNc9UxBUBuEp7rSbpjFDoYn2ACXbF8sNSGc4LabXc3BUstE6eWCUfru862bbFfUcyoLxFQ3RkSqVraPoP1SqkbM",
  "key41": "3C6daczGsttS9VLtkasuQfjmpTeUVsCMRyKddTBZv6mNv7sF5f2dijyvhgKrtChbCotyFTLgtmawfQoVH3H7LEgP"
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
