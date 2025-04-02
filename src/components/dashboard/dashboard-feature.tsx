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
    "51qnThHWsC4NFKs1VdFnEEGkwVjXJ3ZczSYX12bpuk5sELf4jBu6YQkNBRLKHpoN1afHothJvKw1MG6XzgF2YXtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LsNpdBUN5ZfijtAtgA885Yrm8B2JNwVo2eJqE6j8ycJ2AhcRXFgptb1q5UNBTPjZV7usaAxUvQgfAEFcmA79WtL",
  "key1": "4hSePmUockNjZHr4uAftCpRhdBspmcP7JPqgNhydUrFe9uMBbZCfrBNrqf5Wct4eaG5jYm6vcvDa1CDVbwnLi2XT",
  "key2": "5dtAgKY9sSk7ESy4WMbVH5kTMKhkLDdBpf77wp5TjTX9W9y9dwpPzHbU2VtCmwr9dVPbMYtwSBadS4D7gwZfxy5j",
  "key3": "3TMRjnyyJHwqU2viPmgXmtNUNTA22GHYxZGQSjYGLxHm4weYfxSmz75YkwiTNPc5kELrFJQFoSSexKsVeuKBVbuh",
  "key4": "3wGnvn6qGBCdpkrekncsfwT5LbCMFPZ4LfjBYyEVAANJ4HSF9JByeJZBhqi3KAgJDeKgYLjaAMw79VkYQKLMRARU",
  "key5": "2XG9uCkYutCGq9VeX8kihqugDQCbpDVzhR1tVNvHqhLS2CUWJJdNXbmruUz6ZJvLofryqxzL8uxdVHwcDUG8dKR5",
  "key6": "2PC3ymjUbeCACtbMEW3BoXcaa77vDVyTTiYyfxteFnsYAbtsVr3BLnh7dDpUKVCmupE5sdy61odBHv5z8Dowy5ED",
  "key7": "RSf3BuMFcmLMqFCHr2hyvGenERv3NyJQ16Y5epqwBGekDunL7Qnc9qR72WsgnXA2d82QaiWvsyZBoXB55zMR9LL",
  "key8": "qzG1YDogBRFHiRgL36hGPSN8C2CTbnHjUjJnfYFXai47vstB3bUoUASVsFYkBxY4HegRc5MkqNiUNZPyuBax2tK",
  "key9": "3RtFuDYY89u3egNEgTyop6hKz7BCsncdes2x9JSMktyFT2cg6gTQgcDXByX53nE6MZy4FB7wQXkqRD7UNyDRT1oo",
  "key10": "5A8cgD7HoBePb6PimmVbcRH4kmnSZUaTULveKYcFKa15g2f3zPJxruLRvTxfSzJzDixHrDMjGPijCWvsRihjZZfb",
  "key11": "5hpjBH6nhLuyHGfgaUSMcVS36y9usa8iokHE4oQMPCyarBvyEJKYYDuDuyBv3fu2nVfEVFLQh3mT5C3yxuVxGegY",
  "key12": "2SGKCCbgUMApctjbcbx8kKEup27pCdY4MD54fL7RG9xza1xqyiTjyvN6Msh1CiSzqgd9QhNHUNpbvLSZjQNksHVw",
  "key13": "3KDPyAhadwoedMao7qu13wwJN3CfoS6y7tQkqwa1EuXz1ZRXfxadTtJ2CcygtMCdKzeAcxcL2zPjVYeyVq24tLR2",
  "key14": "3RFEnQC8hY2BcEXLuaRe3CMp2r9jYKasL5JnGHWWay4JhsbYJ2JmbudT25yhx9S28YjroSJitV81YmfAYvthiygG",
  "key15": "5DhcxSD5Q6gnCC58ZNW1RvQPyzBagPnVXciBAYC8nFDQVjNZTYBM1pnxjtBeWBMTdzbCqFxMEbSKo4gLgzDL14xX",
  "key16": "4GSCKaFEg8jkr4QV4CQRn4FPX3JbwVaoiw4C97sjps4o2wFK2KpRpuYfTTbZDsbh3fByAqx96ZEoPnHYYfyG9wwf",
  "key17": "2BdSp9q5SMnDa3rvQTWyiymz2Y7mXu4bd7bRCca2D7kZGsva1r8pSjRadpZqtsFUHVSfBAK1zrHtiaUszV7q375q",
  "key18": "2TZpVhWEHUHankj9bg3WMHo1GnQohw2b8fxh7twtrKUVaXHSi8ffMymRJ1RrAHsEQLwY2MvhXPHu7GFCgS6Bx9Mn",
  "key19": "3cu3fbzb8pr92mx3rY6xfTy5Z1KtxES7Mgfc4Bwxa9SXuyi9hxUHfZ28kBCpv7GggrRiDFmRZR1gH16YZUdRYnB9",
  "key20": "2PAty4WWtmsdx38BYDEHvrRz49nCLzoUTWNeSL4KCNbnoAHUaa3zvgrXXr7VQXzBFYgyYHwAG5N6NVxTjUdWt3u3",
  "key21": "SRfjrjVUH38Wh5XVBe2SJi6ZRGXEf8FpDHPcrr6F7AqoLgfQ5kvqWf2iGEDbirfPGKUobK7LMPgxGq6CKDnDw4Q",
  "key22": "CkhVgHiT8J4Zua9jZQvECGVLf6Af74hDadNY4DJjH1LScP7inJoYhmXiGTAFM6A2RstDwQfytbUgwvoQ8qGYcWT",
  "key23": "4njUaovrU7X3fwbTNZdU2ePi2xiSDZCwXZWxKXXr8axDNgVnG5YB8eKR9dBmTjPsMLKBdTSJMGkqfmZSs74sNpWS",
  "key24": "5fhMD5uQLEoeF2KA5yvYHwGWBwNpUJhsCGMZBuiTG8yTPK5GY1rgn5uAzeYeb8WU4nWvif8YFT4m8K4MQ5FALGbG",
  "key25": "5VdZdZk2s5Q1v1g526iecgtqAGhCP7cpUzCJ98tBytAQKDLgrATociE1rped8Eq7fhrrNz1pSWMJ5JmfAbzcFYwn",
  "key26": "3Ue1vAjQKQsKyvAz4Qbgpd2K9seAUDaGLhqMCEJDbzSWEE9c4JM5btqz93gBmdTvzbeqgpCWuYjPWC73x23pVU6g",
  "key27": "HZFBZg7Fq2WAT2wVHRCCqX5GNe6pmGb4w2qFmjZmrErSeBp6NsQjj7Yq7iYQVdNWcXHkXrEMYZLGtSJCppzNqT3",
  "key28": "3PShceZuMbUutrgqyfARteRHyC215zPyPG935RmiXjy1meSQAHKM2c1orfbhBVZFDM8LKELsRdko9oP6ihR32uNb",
  "key29": "56ZEezzi9p2Ano3Froqe183UQwh11uFGZzB8PXeMTHS1umJftSAWMVLTTo3J497Bh8j5jnVWAeFFsFBKYHfkgaaT",
  "key30": "K8qS5a8DS8zLNziKwadsRjXYw13uvape2t1o7vSfEZ5HD6tAtH5DzPU5QmsGT6uaHotEH1jUbG93S1mLPuKi2dz",
  "key31": "233Fg49xLXp1ReKkoXANjks4dB3wdbaiyuEmfadWHmA1LeSBNAGkbMT6WGFntb2X2myfocRS691xAEJEqvXh8QJ9",
  "key32": "66PKu158ZdGLRvGPNxTysudXacdcbhKrM3R2XgsSsccqxzegJNTEgXpVEuYjqk1uuZAF8LNwAfPxLGgf33tRvM5H",
  "key33": "5gDu9yCBvPhwceuuRnnLeAe4LbXBVg18okubgo2AiY4VurThb82dBCPLiATPyMeMf1nsVUM7xLvNq3EPj8WtStXo",
  "key34": "5YthJQGWMzrSTYCvirsUFRaun8tkENr7vyxHFJC5J9wWnMBWqkJopcrgDKYyH6Dgy83BNJrx8GG1JvPovGKCugEe",
  "key35": "66iPEyJVEP4tih5iTF1Fr4K45RkUE1W5jrA1YDg5fmNnZ7ihBteAjsZdTbQTqYoapdrB4U3i2T6HVUUZFGjtPfFt",
  "key36": "4DDNpqQLyh75LXnjW3YrcdaBSPe5USSi7gvFwpGVY3GJsEznq4mQcrJXUpnph5HXyEfaMhyhE2xeqDUg6nAo9gbY",
  "key37": "2KiDkJLzQTAmZTa3voAD9gsLZxGyrLykTzirtmEJSHgynfbehR6dp83BwfqMufZMqZPf4FQcYsWoFJ4L5EAQ5dSs",
  "key38": "3nX8DeqWLzgWzTJfro9se1jaGrWJhkCtWf58DjbwMfgoNy8fDHcE7S9hosNVHtrEwtgW56LhFb7JdsTiYtwSpQAL",
  "key39": "4yVW4a1wfybmsVHAfXLafRBmHnRhnWyiEbqRjJrfjgQru3doo1hKuBNCTfKhPbfxCD7kJDAVaEdjcqLyCQGYzhom",
  "key40": "2SCxrTJDLbddNkDMYTMr8NcBBDF8uAcSh1fvjsA3EZpFd8aaRB5qY8tUGd8hTCAeRQBRnmSpMp8xyrxmWpG5PXob",
  "key41": "46DGCEDBSZLoB4WEccYac3VjWTCfBF7sjrXpPik87pmGhCimEbCYok2ZQpCyKrSDg8Rh7Tf9GduEher1r5uVNjRQ",
  "key42": "5EPQw1QW8rHWbGmSyrfJUzpboHxd1wSXu1yoaDn8tZhi3PSA6FFkUHQ7BM5UdHUygfQ7afbaUAkBzauvanTdRHBk",
  "key43": "4FVxsJUQNj3UoKrANXRPRELhNF5czb37xFZxxhspDZZtfTWCUejDZkeQfBfYreDY3mvEZM8t1XECQZASENtUtgsd"
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
