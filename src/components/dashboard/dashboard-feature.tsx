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
    "4RRzWbXEwe5vVtZMBN4TPpcebgcaXTqDurEHuCJasLy8kzY69F3VLNtwLb3wwxqWpFveRyR1oz732rbYvaCKr5Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hu6t2YedZZpB3pmFSkYWaRjgUJLQeaRnMhJKorFFkNTSH1bhyZR53xDTZG7d6nuJPMduyGiU2BtGqFQqug69vXc",
  "key1": "XUq6ohDPxW8HvMdYg8nxZMxDfzA4g1yp3qs9tKYEYVFrAx2PuqJo319Gps7mroEMDp6BcZbWxuBmaWH5ocL6ZvC",
  "key2": "64tQi7yQhU2fv5aDR4tc7RWLV71moZ2pevtq2kRehmXjgiaet3LivN2ryNMt1jc9CpEkQTtCZ2yc8N81oYiZLBSS",
  "key3": "65mX6EnmsVs1jWJkN5xL4SDmriPZT5hDQNJ6djTsYQxsHepHawsJ7K52SqeFXpDZkLpenNAMPEfL1qmYkSSQssUS",
  "key4": "5eUFGovXMTg5vn99DoahDmZedNX8QwkYuZbTvaeXQ1v1xNSer7Ysc515WY9y8ZgcgSeTAvTNwnAAV7v8BhhvS3fM",
  "key5": "2H8B8Q4TJqvj73ArdviUDs52gyXWTA9FAycsBajs3HkaE2jHB22t2X2aQbnVD94SpPtGajtho4AmYLBU8q5Vb8ZU",
  "key6": "2TNoDfdE9SPoPTqKKufkAZ4ur26YQ3L6qEpjugFxgoWscSFt8cZzHqTue1moBurT4s65udzZ6LMAaF5aqko4sycp",
  "key7": "34BMv1FBAVbTEdZj7oa81FSGxZ71VpGvGFjWzdQ1xVk4hvhbMDDVFYb1KmkXUKheubCijsQCF6Jyhzxao6VGi38D",
  "key8": "2Yr3YBEFhe5audzhYTheySey26FjMxHJdczPiyDfb1pVLkBYg7TiQPupG12tMZgwAsW1BiqtERaykTUC1qGfZRLN",
  "key9": "2vv1rE8BhD4ySWgAuFDd3dbYbzU9d5wqATLTrHZW1xavRzM4LRA9HTK7bpjh2ns5r59b16cM1EECvSyvnidNyAHK",
  "key10": "21xeWMSTHfD5BCqwUYxxoMkCsvpbaSGTjn1sdjKdF9rCqXx4AFrWrvVyygDKFY2DWUMMcpmEW47vVt9yALhqWzXD",
  "key11": "4FKLt82ffhsr2d58oCHgDMTV78uBwtVfRcopVX8hjVRmFzq9Stby9KXQqaeQh3gnftV7xjLFckNW4e6JiEYherqD",
  "key12": "5zfVAD7BF94EF5H6YEc4fgKJdZaJVpGKztskWGyDb489rZTZLUA6XZ6Je66wyN5G2ywHDdbsF4pcaQsQ8c2VkFKM",
  "key13": "5Y21xeAnHCj4q4eaBSgRvSVP2uudC8inrcC5qVoBe2d44t6AoE8W42CPdoMRVMgFoFUxzbXHiryUeFYMiSRBkDkk",
  "key14": "mTiDC5u9KmM3qbtUgn7M3aNemfhjCjFMuWeZGMPeAkg6pba6WsVDyJndgsfomF8oSrXWzbm6ER3L95XfMDzRjW4",
  "key15": "4r5RAPmPUBx6bFjhZLx4uWv4GcPigoPU2b8cMwU8HScGtJ4GQcSmHovTUv52n68bAqNHr4ASguBzGg297uaFtLBC",
  "key16": "2EsRVrVAYifXgYLKbi5mNkrftQdDpMowUiAbWAkMxEm4tvEAqWsLJ15RACKMouV9TTzinbygpGwAjpcTj2N6juf2",
  "key17": "3JU8m12J2gKRP8U6ThLNLMcMDVEbCMW78Q4W6ynn5PXL2JbV4uNU168DPAuQFSwF2PkHc7dDT5TNq6Pt49WZ53ha",
  "key18": "58Vm8UE1Gv4zwmfDA3HPyukxkS2S81NTZ56ZWa8qrsnv9LEEfWyVnpPTe82RbZEwdTvUXmo8dhzmEPQysV2Ys9Mz",
  "key19": "Koc2LhFd7ZvR3WF27fiEEnJWp7knUU184ESHsX752UAGK1X8vqtMqJY9S2eFjFUY1oe7S1yKx9yQTy4Th7vruXw",
  "key20": "5uoWQXKzvFxiNtWH6BvVj4MSZvaKxCwUXNXwjoh7CCb3JJMtoVoaPrvhq8JwZFxTBskmgjr9JdPQWXv6A9WXvuyo",
  "key21": "5qAwSuhjHqtujy981cQH382JtwT8Q6TVrPRaLPdV33ox3b5SxGH7dUdfm6k5uc4sVeobDrFAQA1KeZ896E2Soi7u",
  "key22": "58L5bNmSeBK3veoFb51ajt9vQBawmf9aP8Ff2JUti5gaqC69P78NUcPHMAUFh59ZkoYW9indVCWPnytR8cZVwuRX",
  "key23": "chpQAJaCWkxggw3JdmKrDzWHj3RGo1G8nVGttU5CwWiz2MtbZX9BVxaJNW4gGfRWEVHTy6AgGpMBuLZ3XzK8C71",
  "key24": "48CtFcDiBingthdJMKSZjd92CMR192Jn8qcMqsY2bBxsTabHrk5D4hRDzu9EK92KJj5UMtRCEmtEsYTbZm6crHQh",
  "key25": "67ZVjqmWusZY9eF2wEdgL5HZGTSrWbsW8voUcbtK7oGooZqi3d56LVKa8cqBpsNLdRJNv4PDRPHoZFSjjBhEiooS",
  "key26": "62yAPwhbPT45NtChkynezJLNx2EA5W4kZ1NTPjtHjejbXxYfUerZNtGHdLMxiQSkksPVi8nSZKMT3dkmmkLmNbEj",
  "key27": "5ji5j82LXTkhkTh6aiR5VvnKdZVVQJmWmTnpqejQzsTfv189wohwDfR7DV7887wCSiqVTyLfCLWLrDX7JrBbte5",
  "key28": "3oAhCmmjydrsibAjJ2uL4CtFHPCmP36cgG4a91JiWpfVcLGwzneJa96njpRzxJA733aCEj5M9UhnJaBQtDa3jQ4v",
  "key29": "2qhTLKPZVvmhjnjHUkLJSF34VUTrxPkkR4X7cqwdN2jLHkvHnWRwecWrmLbG54KSQ1qth6GbLX1L4Yd1GqH2dYrr",
  "key30": "4yk5WEoHQWTuFxcqxAhHtTkdNcKTRiUFJ8Uy35aKMGBJAAW6AKsrTtCvPJGNAQAD8tNN1DFci2zfbWqHKZYX1Y4S",
  "key31": "4JHLAgFCLEQy2fqxD6xcv7meMzmYgymPKHrjPYVDhQKeMUg1SaLp211zErNiZ5XEgSM6fv5SiREYgheFKC73cq5q",
  "key32": "5Evet4Mv6qyMDEaKf1tUeYPDimofm3EmaNLxRYXB5gThKnHEP22JwBVTMqvb7ckoxZzY7dANT4Q4dto3niaAecxV",
  "key33": "3SeTufhiaG1NKoaQoMjSMfjSg7bvJSpAzu5cZpyYW52kUJsmGyP1dMgh2XM2vVJwHSAJZ9yg9rFEdtySWYuFVbVa",
  "key34": "5Xs8cTPC1ZdyAF6JZujvu2DjFc36RaQKTZN6cR3uNdSS1hPyVk2tNKGCJ59EK2JYe4wevSC19yh7mCUJ6wPUaJBg",
  "key35": "2kpVNEVwJLcmC7XFuNV47K94XmCvadBMDfVuuFFXZ9JW3ma3oAH3tGjsJqF64sCEQatiKRGWt56prMdHiSrTRk7t",
  "key36": "4WatxuNyKQmBfLBnfGifqD1e2H28cd7ni8qVAFMJsyuZ9NXpg1sXajsFFNEQkqLJsFPCqGbVdyZFoobgWQKRXkvA",
  "key37": "4eju8hH1hnmbRr3YNs8U5ptJkXU7YSchLXz98stGAt91Rh74YVCGr6Aon1Ztop94kCvjpGwUy2NbfNQXdfS3LzxA",
  "key38": "QooYUrVmkAq38MsLUGBnHoeN1ciHKHgD1mULNFdXMJ8gqkbJLz3t7LNLY3XkiMEgscj7X3uSsFHxfHV3M4KjXuQ",
  "key39": "3LFSDt6LhDheHjy3iVrYxmdgwA1cskARY9Q4qtZVGnnmKRcPDgbEmEhiQ8YRhMQQ2NiQ3SACyLuDznjZ5CTbyGo3",
  "key40": "2YVqRzEZd2Jh8W7gZgYDK5CUxyxeY7sJTtTQr57ae97EBu5apuGofUB4ToK54ymZRFE3LE1LGkoQN9srGySYfPy7",
  "key41": "3s922SdPWDc1Za5WiSYYdjrW56Sf574bTxr8BxjCBT1YkSZwdB281aip1BfayzwootV6XwS9CiVgamNZNmpk3wxs",
  "key42": "rTT35xBDJJRwfUkz4dm33epPtq3bz53dob77JGVaU8XZKgZcCF48UZtLzgF8DXtHLTkd5JGBCaGUq5QUTMEpZ91",
  "key43": "5g2R6kmcDb26QjeKjgaK1XtE7fACS7QGQz1J4fHptnstGFj6fC2LcsZvq4WaotAp1mHYSHwE8ZZGgU2NMa1otbW4",
  "key44": "4BHf6yvaGhEW7MXt2ZJh1LrMjb6qAKHfSR2Qh7e16HRFUN6jSYzTG8jct195mVc1LFH1ZrTA6cxmUuegcDpmDHyU",
  "key45": "3cuYMWLuu9WFxrS8kruuScYjJw1NFrv2TevAFstWa3JmPCFbekKUqSJ1bU2YkW25hYAHXzWdtUEaCGEWH7JPNy87",
  "key46": "2XgYxyDyCw4mxY74gZSqJkCx1cJEgpSQyXph5KaHPRxC3nNBhKCKkV8TaXsF451LYT8Dvin25ecg1pwr81p46ZsP",
  "key47": "CM7zMVfAj1iPrSBQjbeeetGy478YHAc3B5wJ1soZRKe6b4h6a1ojTiZDqezNRevaCDkH9cSyEpAwR23HJia9JZ8"
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
