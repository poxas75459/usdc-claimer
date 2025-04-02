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
    "PGDp9u17a4MVjMZX4rcn7KiNBXv9vxowxRQ1d13j8rfQ4aana7yaJJdn9n2nCE7if9S3DP37ZmmzNyso4vB2Hjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxMxyi2x3Cku8jRL2tMgQQXUU1xtDdcGbavtav8vBKbJyuAEwiY6GZkjT1vRnJ8A5i9NWZoeKMTWqx4jyp65JKd",
  "key1": "59gXz49nZghx1g6oZXkaNEM37kyM3EwBqkUFUK6nApRBbtQjRA9j4xRGLcrHGq8PnB2imq7a4fRLbG5mfoREq8uX",
  "key2": "5Saf6bocsRgJWduj4qPiNBG7Ru2P3Xn5VA7WmRKjLcWgFvMW5aKJNVDppgj3i7fv4YAvnyzDQDmCZHpgqaha4fYc",
  "key3": "FfzD6ZDS3rABKooTUrR9oP4MfUL9wfLNDdpoxbp5aioE4UUZhajBra4z5YscskYrvcEzf4M5LF7zCkEXFr88YN1",
  "key4": "3EgeQTeuRhgBVxSt7tABDjj2MmZLJyV5FsPPyybYnzHRpRKCsVckHYciSQ8WdAGFyJwzhNHPumyN1jm54PewBMR2",
  "key5": "5A4gN747pfEbABYn3X9ynG9PWa2GdyUEF4gGmN2qvFaf6NoqLR4tqbXPMPVG2zGK9nmeMgdmZnDNKcLtJLe7FEXu",
  "key6": "5oLPZGtHk4kE6Xw3gz2TgfpRLNVEPsH6w621dkcGdv7nX2YbPNRS6CVmnyT3W9QrSS9LxDVZqxFoBSEXoofTAbX2",
  "key7": "2JLcyXxtY3QLUDL1HTDKgLSHS5pGLjVHPfh8dNn4knuY7e1mqNZSfWUB2UdMMVpUQDoZD7rbQGs3VEuQoniX7GiQ",
  "key8": "2xJ6tcx3erTVqwYQHfnM6qSEd7tzyXoAgnEjVAqNW41qV9R1NX7Eusz9f9AAfQRSJWfvEviVphPt7vHqtUB7M7uK",
  "key9": "2X1s6yBonvGTRnd4nKbFdsBVZDdqG1N1ygBTPhKkAyMptTPpNKhhYzvuE2nJfw8d2nWZpiGDWDcjUefjZXXa5f9B",
  "key10": "2Wmcg9VVxXQfPTvJKGsntywbjPeezibHmn2wedG3J6CbBNK56iQzakn3x9FjLhLg36SiBFcqcxG7pg9DVe2oZ3Lv",
  "key11": "5F6c2MRcTC2fGH6JqunvSboQaa9otbhDJoUr7f7Y19LAy8NQhu1HAJSxJEy6pEynQPoJaqvzZXC8P5VbYyg2BD33",
  "key12": "4Q5eKrLy4tc287zyp8WxXgUFyg7V4q8Pj4Ph69eP7TxQAaRUFbuLXyEngsznYSj1gF92xjD9S1cT1BoJ5mPo7n5c",
  "key13": "4Zi8eLK9gAKJ14UqzGYgWkc4MLbTe15QBsMAm35UXahXt2VZEbv8fa1z7yK4vbamTaiehRKC3UQqeNoPnho8ByJa",
  "key14": "4mKSuSxRk8NnEqca34cDVg4y2kNm5mU5AiHzMmVkp6bEVQi1puQqzjhhtkNKVBop8HEndoov9Y2FripDk22JYKJJ",
  "key15": "4DwETfm9B8M1UATYhoBgejWkx4VkZLxWc1WXULVu5VH5Cp1qzMUPKiHE6mEMD9iktV8Z85yhEUM9VBM6TNweyiCL",
  "key16": "3AhyjBvQYv2Zw8wN1xzUbFYp7ZBeqjoB15oxwAgt3eiM2wENn7WUGT2XaMYnR33dULddK8UsfcWLQzdpqhUzUVK8",
  "key17": "4CNGha4F5ZxBQdewhJk8q5hcdckX5A8zc4UVhH2oevuYBKqGzLwShdfx34ZgpPiwwF3W3ngwG3DHjxu5du9L12ac",
  "key18": "3jumGztLPhaTALR18rC8EtDUdSq1qcb4HcY4gZPoUF2rLrt1rzthJAHzn39yKayTy3ZUZiZgqJyEWhj1eFft2Raj",
  "key19": "5XgnRQH73WLwqofhKhGWXiGqvQgzoeKEX5keWrKGWJhoNhbzAxb1w2X7aLXqnP2kNcHyeZPsWSmVZM8Wa35f3AZN",
  "key20": "JncWj2sPmLh8QswBJMgJGM78NivwnFMJy4iNzjnYj1s2ZvCAB8PQjewrMs4YdPb5N3QpEb7FGJDAQzu34GSZf1R",
  "key21": "4cfsjDWq3DhaBidbpTEry5PjZQmsRy2TeqCG43YQ81vubinFhKypADLbHTJ7Ktvb8NJHSixLxuGKZyQu4njhKqGV",
  "key22": "5VYjxbUN5Wn5mrrvQ4PAYQZmusnzRUybfH5Mw9NUFgHo56rWPdqb6ZZhxvxLQrdR3MM345Zj8nP4vvMfxtxrDRPF",
  "key23": "4J7Br9LAy3Sr4honQSGpL7u4noFjgcrCGwhZX7dz5apsFUeZaFCQCgFTpjUMox4NWzVjmjnUSwq8nQEe4uFJad48",
  "key24": "dAT4JgcMEijx6D7VNzyX5JKD9rDNLg6uzb7tvo6jnJEvTnmowhc79dJYphv8Lx2anztfqZHiKoyRFKquh1w8NFD",
  "key25": "2SSFdhSHdKB9Gc32C6eVGF68TTwmyBCw5ar1yoREUavprNwLonhMDDR6Sbh4usRHJQ8w3PgMTTqHjXojPm8LfG4V",
  "key26": "joy3Ui5V9rixuk3MdSX1uSowQeWhugHZTyDJ3t9cme3nRa11R8E2ZkMidihJysL4LPHyYg63SyezPwzXxa1mWyR",
  "key27": "3bw72t8DNTSdQDLdfzEkXkmTdkHZefKHs73u1AjMYrrGqyzLk7hhuCEun8YZXqiuiLXRq8bAmCpLpnYauAv1iyDG",
  "key28": "2Cq8spFjPSfmJo5pdtPLJJJNCsdxjo9xidKNkf1z32fKr2VsgBQecHi2XhA1e4FtTZsZjyTMeDh7hXDquZQcb1Xv",
  "key29": "5uEtQRyntmpnksSBujCkKCTSEtazQtTCnTX2RVpjHLLagYxobwSG6jZwwsTPFsYUrzYDTigWNVRxh1fYDNUdVfn8",
  "key30": "49tLp59Nw7tyZ3WsGCmupnu2FSimVXNdqfTskbmBjVbwjzXg8rbHAHTf118JBNup36V93dnWmPCPeu3Qwu1rmnG5",
  "key31": "2HrbLJK3SeoFZMv2DWB4DK8y35Vy4KM7CunGv4m8S69jnmdGBeSbSjWG4hFDu1WW6fjqJUVHBR7sLBt91P9buuMn",
  "key32": "5ySeBnKzmUMnBCLvWwiQDwQATm2hrcdb41NTjZKNTYgNyPJfBbboGZQKM1yTVdX11mcV5Q8HR4YLbgsHK8fijsAe",
  "key33": "5wdyiewZSPLpUFpuwmwVQS6ysPwyqBA8nqHdV1pZjPNen57vdxt3Rtcn1ANW99QLKsArCmY71KhLxgfzABsoXdRc",
  "key34": "2AnW73SnakAjMuKjTop5GtTTwY1gfXo1qWFK5YHYYE4yVAuXc2fEanpzanmMncRgfkmvBE7XieG3Vm1zNBKZmMtA",
  "key35": "47w2BDaGsQHNJ345yQYqCiKJXDtSpfKWCmxsdk4Z2BYLW6kWQGs8UroDZTA6jGKYHrVgSpivBaMVSZsU37ajcru6",
  "key36": "hCinEpGwSdXkF93J4hgPcr8Cd9BgMq84cCSf6qfnLCnZNMccR9NswJsVt2PANJSkotGDuVNcD9ZTLj2i8Jq8nav",
  "key37": "4tgECXxkATbqQdPo1fi3qWiR3DLMipZyzr76P82rPHMCh4GsEwaxFTEmmqYgGAQA3pQXTASbqm8agubgCQVChagr",
  "key38": "5LvT4UE8XSSRvz6hVDKthevHjJ2NR1KBbzejTrxBVWaHdwAM7EzA6uXyKj6vPS9xAtWqK9PufmTQbsoVJFYrvNcY",
  "key39": "3buYE18GHSKYnAHvBDiBV6vwCA9EecyZsSccYZFDgXvKay9ic4bLxKgR4sCm9NfBS6PPYXAt1qcs3phvqa5Dt2gH",
  "key40": "5heSF1YwstwvqKMNBgeNXCYCo95PSRQqy9UgMwhJpsA7AzL2nxuYPFdmAimNryqkJ2b8u9Jqo7ZsqHxUKoESLXux",
  "key41": "3RaHd7ExbhaRT2qHabmi1hZgHsNrd3oGyuZnY6hyC7FTAqDVx4LKexRauSrLnnbAAVdWqdpAKqjMTSu8j5Bs7Yw6",
  "key42": "3WBsQN2rToJLpvpBfjTqSqkZjqbrmuEvmyugpMrJHBFtNeSEznR773wyGHVBKaNfbt4nQK2oEAsr6KRVLS43igk2",
  "key43": "2haDPancnRZHRkpyS2tUG9PSES7CqbRBWiYASbJrTSWD1JUfwVasQuqiaXocZp1kWAaahy4zaqTuWdCCCM6SUvGQ",
  "key44": "4VSo6SsN3qsvvw5WZwq2dknAQCJQ82rNKDk3qzF9vzxYBmqugjeKGoSZjiE625pxVFJYQzByarXp9NzLQAyFqzAh",
  "key45": "3bHWGfcM2FDETohQ1Xp9FJXFL2hkaFt11h3kWc2q9at6Nj512TeghMMg8FtePRQo54gXsNpCpu7tEp6wxRQbau3t"
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
