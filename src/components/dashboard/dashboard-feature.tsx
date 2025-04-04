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
    "GxJ1nFgxcAadNgzoDpmJz1NsG82gddbAvuzbxrBRspfw8mJB5oWrmArbZzdAz1sccFxbG2FcqUh368HYdS8fTmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YgS9shsbMPa3e5TcCaVg9TjEdzRJ4rPvWHdysBRBE7PppL7rauDrNraiKUJouAGko7ZT5GWftcRzkkpTbSJWLZp",
  "key1": "5fVLm5DufFhrFRHAADCa9gfaxLaTB51cCvHeAhNf7Qo1He3CMCoByfTKjv1eEkPiwWRYBAiGK2hdR3HMFo7XudRF",
  "key2": "3jeYbetHVVMEYxgtiFAnLCrVASgjbcKAmiHM8R6sTTRivj1L1zUCmGZAMrp9aKnGtRzm5mHFF4KRtRbUpAe4AJte",
  "key3": "2xoi59bcKTPY3o6qdVuiRSPeguYLwF8tRSWfciRQjEGy2MvDeqGrwNFebPtWhcTuDYEHtZsPTsR8TdxvzxGNzGvw",
  "key4": "5gwgdyEK5m53xheu9D4fBfkWpEEqhGe49mZbLeuXuCHCqNoCkbSYG5TLJUNPrLgssnjupsrnA9adktLxnnJWuXJn",
  "key5": "4UnySBbypsCwXUGea33L23RSquyfuaqrAbfUZHMnZtzN3LuNpWdAjQwmqUbTqKWrQJ7ambJwYpEQBFCHTaMEQUZK",
  "key6": "4goNbRG5i4UhapmQFPQQsm51jdQHTRpak5K9SbTHYNDSQA7QLK5vqbTnSedhhvQPYMV5CDdNexhQCfhPBrD1KPLa",
  "key7": "2XZ4rdZdg5FFHrMQo7vZu2f7bxXMdS1TwZqNtXyjbJJCR3GSXHuW5aoNpLjwMtTdP3pFrrLrGQ5PT63HZCQ7o124",
  "key8": "416CDMmtKiGoWQLPFgLmbH6D5ir97nnAjAkGNVUKgaGfDzfSNogijZKY2XQY2HJd2DyHYysd5xNL1ixnD4bGfaCS",
  "key9": "4aofx9AP5E1LLSPdBwzHSBTkha5inKJRnbg8S1vxxfNLVyPcNHSAgZpmHz1Dm4h1w1Dqm13mqRNCWdUwfYjuvGLP",
  "key10": "3imBhUfyfRnFsEWK21qVDafzJvH3DrKCozFw8EudGXT2b1g5HWhn3VSctHJy7d143ccEqa9rTnTc6pNEgAsWQcMh",
  "key11": "5vuWYQGwegzL4cuzFnDrhfwLPTRDmSoME1oTjGSbHo7xfy5BMMLUPkwkthyoha9aEM3bkQYK7haoYPiysV9FDZqC",
  "key12": "3j7QGUbExdgQEYQurx9HTJaQGVJgtwPoJ2g6Hd5StBBfDbQXTSFkJ5j2fbWrAjQ4UGbux33U3e4sCNXhxD8Rd6Yd",
  "key13": "3ocLd97nGb26x4p6xAhzSvysJz841TWuNAcojNtBkNtqfKZEeoE2otMB9wj8THieoPkFnutVxubqpspGeV1N28s1",
  "key14": "36M8kXKDFKWyjwrAP3AGtxmr8Bi6AePu78HANQfisPqg42b7m2ZhgWbPgiCkSS6Y33wHxezpsaua5xdLvc33KUjN",
  "key15": "gP3iycmAnr52Na6fYhE5cRb2NTBxnKyLC9KiR3FM6jz7uy7iQBkAsdYKdis1MsuoiTVtwgDYXp5ubXXdisnwuqQ",
  "key16": "3zSHshby391cZUp33jPex6Gp4c5tiLFZ9xHWtDuHnE3SmjDdoZo9tEramTF5NvJXAkGHEhweaVy6pbh4rBGDrLhM",
  "key17": "96ffedWFWHPBSAZJpLjEStyCjfgAAsh4vvxVvdrWJLAsBttQwCqTGwhWuDWcJ9dn7qiif5cA3dstxfgYd97u9LD",
  "key18": "3kMG9GLExTPboxsFnDsXfH3hsgSGPbtfLwsoudeLKwe3M9AwTC5i68adD5GS2upcCadTgbkbRuVeMVn6eyWQd52B",
  "key19": "2vtSvJT7uSrezr8NBaWZXJPtctWD2xB8wXDkVYRzK6cvWySeE1CU1Rd65pNcoc5CprjCT7d7YbhFfGKadmkGUWvw",
  "key20": "nMBQbXoRm8uA7GLNgcAjPV97KWU4rQzC4acsxvpQKNzwVyaYqjY5MGYLqbVXukfoTT3oiyKzEBKFuSatN5T6JZ8",
  "key21": "5xQjDEJGeDJG23mpdaF8zoCpXPRvxz8W4h9Efpe128bSyyTidsySAj4ShygTDvcMesLohxTnvq1eQomiimrqi6VG",
  "key22": "2WGwTYeFRZnCFd2KvtByweYDmDHcsoJoKRTUUfAS54o4yCuwT4Pgyg9xSHBqMVCpYfJBwG3ouNJotH5hxTaMdNZG",
  "key23": "3zmM2uUaCYCMYXEzFx2DrSUSaFU3dBqABpEdd1RScusRdMz9nhXfjHb5wF9DPnDhrFXYwFoyjGSBt68yBrdv2eev",
  "key24": "5qVMCuGfQyUP4v7QMCuHdRXneMoE9RzBU8coXJieyVBcYTsSgqJNEi582v3cu2WjFDrKxz6Tk38uj8gkRozpd1eX",
  "key25": "556ccntqnuxg1dg2iEFRTRYvevo683YjEYUvXfFcaq2aEkMotZnK28kHeBjFxWcVdQofUYcJ3EkMxGHsWnjJryJ1",
  "key26": "5Ar9SEGPgshP1Uq93PUy15wG7U2urCo7EWqp34JFqP31NsHjgViJ3pgEqeYVLv3wT7RG6ib43YBeMFiaZLGkfrTW",
  "key27": "3ysNbcU63eyhVeCDY5KagJ1iGhrDChP3DatzLPBE72P4kCY2YxTwHfSR9rebdF4EQQ8LUZRpEpd5m1zDRujjUe3w",
  "key28": "65XDPATy8ydziShQo2YzDExfPu4mEFShu65oFiJTgnSc2kwoKwwW7gEgtxrFCSZTNfUMUAAhfiyZLb8tLGUcdS86",
  "key29": "3pV2oJPVckPgHfU79EeAzusMk4bEemRirfXec5rzVuRu7zNoHMCvT9JJYtbRraGVaumn5Zh6yvxtwJamZdVbELkr",
  "key30": "3TV6jqLTa5L4GtBvhgUZKy992r1CBJcbZxvqdU6E5bFXm1tL1RJUFvRLXsYCy7AKz297vAVqaimz4XyU5jBBpQsL",
  "key31": "NDidaP8pecqUvckQ3eBSmnWbXcMF8NhrNoBMufaZAuP37v5jZF7LEuAtXtxSTvHTMUgTN94Xy9SmRU6uQU2BwoM",
  "key32": "4pMC78Lw5mJQiVKxSX1KAwuWWmpED1dewr4Sho6z2h55JbHUqbX9zp55G6zNRwMZwsTce2hrkSEG2Z3u5ALcsZnn",
  "key33": "3zpxnmgmBD4JZm27xQcaaFR4kDyTrLSYYfheSBAvc6eSxjPiqGZAhnK3hLtVHkDYND49PPtjGvGAMRm9jU86p3az",
  "key34": "47wpx8Pg9ZMrZwebeS3wQH1fzJawpwkgfxaNMQuCM5FWJMRd9dS8gRmx1Z5ncwX5QBSRqF3VPZjJKyCYEJet1KyK",
  "key35": "Ne71TbeQJqTwSiCFG5655e6ovwvhQLUtQRzLK3HpZEU1i13TSfJ7xhJrJmaQsM7XZYNZjinn7iAkdwWJaKUZTZj",
  "key36": "5V1qtpeethKmyR5czAcvEiyAQD9ACF3ZvLGKeozT1xa8h3rW4V9jtZeLekCbukcxk5f9GP6dEkU6swouLP8FENZv",
  "key37": "4HPzscCGryzTxUsFpngiUPqa3YGTZ4oG1wknWz1DmnevBFnYmSUGyHFyxLQdQrvVBx86jbnq1bncyDkbNPFq6TeE",
  "key38": "2zNkY1ApRnjbAmTEmuLW3DJV8qtAmGFRmZPyih5Kw5S3riQSSkYwZSko7iVnGQCzquTyshTz5kZpm7cruqKKQvCW",
  "key39": "5DzqqdE93SXZBPnu52tTU5UmyDMw7q4VdheoewVZhrUU9QXA2GfaavxoyM8kmXxKbjzVytLwDQeVrbMQ2dTR1kB4",
  "key40": "2Rtex3RToL3KsoVzfvEf3deUjgLX2y8JEA9o1c8DzEexwmkugRYxWukagP9gFGwKMNbNJ5dLJ5XZZAsifgw26EtP",
  "key41": "29L4g56w2qhf25pjBNtrAJQxTtsxQPqmxphkMPuRqKr4Lu4NnMeWXJWRcFk7nWj9fJANeHCB3YKoihSeTD97rKyD",
  "key42": "mjru5tfCx1t3UazYf1CbzF8opgfJAZw6VhEy3vMyeFdUWM53E9J5n78sZ1p86PTV1CtMr3DQbkBGk7j39dEFgZZ",
  "key43": "h8dTEj1L7gW8GsytV9LNDFSqY8wXte3DgLvumhhbvMh8M7nqxnArtxCQG1BgSPSDXUGyrB18QBrST5C9b5nYsde",
  "key44": "5dsyiE1BL2hC7g1zJmKNU4TrdSNvex4gTU9ckSiokSk2e1ffotVu4oSxy5uFRjbEwshjfGB641Psvm9Wsgo9YSgJ",
  "key45": "4kH4y3keSw5tw7ydExzPeYR7HQwdfpJT4YcRoShL3pyAkm96cNRCj3gTAEvxfcgZGR1hsQaBKuEFCoum28F6fZRg"
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
