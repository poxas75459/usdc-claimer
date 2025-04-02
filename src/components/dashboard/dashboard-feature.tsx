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
    "56yCQDVbZ7K6Pjqrdz2nDK8GSewEimpFnUbmPXJDz7zaxibKi4NUcJat4N2aFce4JkPCm7MmSZwfST7NRbHaoVtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEKx8WhsaPSfouAfbvd6i7HjaDqhcswvWsVe7SPugKoDUDKLKREiezGvdEo4m7dBCM4AZjn9LRhWSGVVcm1Cajh",
  "key1": "4wdME8ynjmt9QULszud7Aykc6hfPFyrrjzfWJj4wTNfQ1igy38eo7uvELrxNFY8AW7jLJGd6YkddBCY74bGDMArL",
  "key2": "3JVSZQJ7eeDxA4GBc3jMT1vejgqNJ7ndVJj6dYy1hxK6YUWYyKbxUwmzCHCW6MpypZsjqDwGdhQVAuwZebEDYdF6",
  "key3": "5S1rJdTnHxzVKxwLCHrsVNAjLuiorsWbA4kwqoBAnrpgPtb4fk3UUd9kG3kDArfHndY5FMDzBEYNWrA1fq8Rej3S",
  "key4": "5xjaqjEQQcKW2eZfeeJVjKq3E4M5Vg9dqPCCtez7C9qkdJ7nrkJbkPcpgGKrnjG3PSJDbjT1yTLs5WFBWrjCG7oL",
  "key5": "5PvFwETKZF3ExJEaS26kttuUdeBVHHKR5cDGSh5eZTeuCpvipf94YH9SH6tXok1eQ844eDJU4Ye9YQDByYoSH5D1",
  "key6": "4M9c5JyZyxkiJSJwJXVGLehTpvRkQ24ZiKFYGg28sNGdtegSfkxDC6B7f2z8MZn1XyqZyP9V2GNjs38i2eHXQCoA",
  "key7": "wKtYSstu6xPECfQAYcPZdNSUURN6VwH2AFGpr7x3ivi8525MWVVrx8xXoPmxDCCbTjAkDGEsy75unPvcahMN24M",
  "key8": "5Gur7YRZ6KkNocbC195f5WW2bxfy4x34Z5pmiGuqApJ6HGNZrzMPbQUD5L2LWycSgcyW2YPb3x8y3W8sYwZefMUW",
  "key9": "3Bq6MHVv7Bg7uJGjQx2DvMpP7VPFcoouz71nUtLCxmnN2xgSPcceT3VNXXWxwN3RdJBZLAkkxaLWrssx8zmugNro",
  "key10": "5DCd1QWTju1MreFvrRscbJXKaBEoYfH4usHLh7ZSwzy72PUzjnJbGaEpLFuzU2W9FmAcd4XiMwky2Jk3in7szS65",
  "key11": "4HAtVcAjghPrZY3nCr6f5Lp24Shgs6d8ASL1UhBKNfwAZZtmAShkzMuq9Qdg3uTniKDRzhuMGGW94FdtGbzu6b6p",
  "key12": "Jc64coLoA2q4QXwjpE5Wawzb6v7p8kubtQEY3cV7Ddy3kznQ1wZ4f73aJMWZofjFwiPqG42YgbfjHFmyX9Lmxxu",
  "key13": "67USsEpbgCxvTG6iKZmH2BGLPQy2Yqgf3mS6Wavof9wbJn88PPi25ZdtSSok1e3CkDXzqjZWv8VzTCzeACZYrX6i",
  "key14": "4PwbvUtjpsEckuzWTS31baVMwZMgEJCB9yCUPyvizZ29srchqy7LoMRhKhafKh19Brq7U9ba5cGaXDZnwHkdXVpp",
  "key15": "2EZCJgvE9efXBAxPHUcbkCcPPowpE9H4QnhEo6FzjbMxrLqB6YDy8arYaWHumMZhWTj1TwLBoqMNy5HWff7RwW8n",
  "key16": "3nRQAtuU2vsXFwEac5FRnF8SC6KKiZWwRekbbn5mJxGLac7ohBCcSC7Ehz3kJLMWZSazpww1QWDZk3w5PjAEnZAQ",
  "key17": "dEpcRMaEJrTV9FVy7GtdFWiGfdRX6AXNW2D7hEFfeDGoDFbDvzJqf2ixe6NrEYxQuJtLQBttRpB5Y5D1ADvtHSJ",
  "key18": "4ycuXvvSpBTr2bqZFSRpMH4ficFRvWc3JvUXovjAumSznhgzKmWE28fiEZY9bWofstUpFvt59DPm1g83ae1KhC6d",
  "key19": "4KF2sobk5bc8VwfBrkUCz6ZkhSxPpkATPWwcn91kdeYR3QbT2jRjvuXmAPzZ6Mt1AY1yMXPprChQsWEPFGMTmZkm",
  "key20": "34bzHJXGrQcyqyCJPNnTmfv1pzDfTgEEGQRF6Chvk4qJwotLoXtVWuHktHrGNpv8gijypw5NXZQh3pkuLiGK5sUr",
  "key21": "2EUy3kmUWzhrkL1dtMV1QSWopkXDPZb7uS5s5MDfJcNgEH65xPMHiYNWayQRER1dDWQR2YBdwNFGJ9uXM77YDmnn",
  "key22": "5cdMHwMHBVJDPUtMjSmAj85McDScQTTPQ9pcyBF9KxGmnrWRm8CPT3Timj66QtqGy3ym5wHtuDnkJ13MGKnDsi2a",
  "key23": "3xReEfCoa2cfk5CZToPHpGVGf57V4Np5xmr1m9k97XshpYtiZSzyXxpoWKoBY2BtsJyVsuCEvGC18FZN978Va3eh",
  "key24": "3LR4xDWFxVK9caHrqz8hea1UxW7zPrinjtDiShzg8QgtV1Xru93mECn88vWQ6XGFrKEc3cWEXETWvaB64A14z9Jr",
  "key25": "4JKrX4v4jpadCAy4LwfDKxsYSYbNgFxxB3vraaE8eUQxMfP3fMLiBsHetq2UMXDT5TFB8B96EHLC7Sw2e5SYgyis",
  "key26": "5RkXSHp4bfxbgh5AL86MUPAKBkT14n48zU7Lr8pRzFibpnRtHLNmS8eEWieC9Ld9oizbzkzwJhh3Qi71XK66nPSw",
  "key27": "9NVGif1Jd2q6pqFxxHheevXpnZYQhk8jXtL1ME7tftfoMcRtRcwevNZA6wD2SPQbxJyS3M5mJGJCSqhyKozZ33V",
  "key28": "2NDKFbWP4wcnwjrtCRUoc4bprfVBAJzYVMsxDGgYUK4xTAMAWwYEaRRx3oqwj5ysfLx9xgLcZRffdp1vgrvCZ1QF",
  "key29": "2S36NPej8iXf3F51AQhEZSgou4GozT1wUusNwfc7F6cTprajkdm8eHvEeDnxVVYuBTLAvN8bVLDNtKuXJ78EKrB5",
  "key30": "2XoZNuL4tXs8V2py9ix8pKiLFrFM9po7NCCYAjfdPwcSXTYgDxE9ze3bydB9QbPsxdVz44i7G4MCsKVZ6JPvDjc6",
  "key31": "zy3hg61xuVPADHLZbjgCHN1duYdCwhyTHchoxFwDTjPnD5Fd1iuDBcifzeHsgmTSP44RFWQTyrdsvSUUYsdzGTq",
  "key32": "4jxeHLFFrtCNNzJv2K4aGhcEohUK7vHbY4eLWYQWhFu58fa9mmju7tSALHp8SPogGf8qyqXb2qHfXAuQyNR5VYfW",
  "key33": "5azcv5juRFQTxoZD241Yb5MGpJYwmrLA7kGUzyXV19Zrd7vSTWtsBxiKg4ZrFmo4uRGu2ZSQZprz77eyE3au7gvT",
  "key34": "2XmNE9eXVZrSzj6yTs82NEt7AjFrMudWuLh3KJQN3orKCiqE2ufvD3Xa7YrTVqeAyEWN3Pdj56HiXtRW9djNw2n4",
  "key35": "2MCkYdXbuv3ZDmx3oQNjoSSpJAFxuuxpdX4dMgq6hn9cSQaC9ijvywJYpDFgoXK11jV3hDfbHGsFxortRChZJ7J9",
  "key36": "4Bt6KxnoaGcSsZ6VgYwEQ2BtNRi2zivzJh9JbgtbbcSyHziqEddtWxc8LxgmxUAzCdF6Vnx8xmSEmJ9Q8d6P9QR1",
  "key37": "3MD8znQHabFSGKanjDkPyvEhW51d4tqAfr41qnGmKRDADUsH3FnhAdqaFBdCaAESSkDzSMaixcYtmX488wgkMsm1",
  "key38": "2RRbnimosBq4hsMh46djycPhfADRCTyeVQu2ziPm3gddmJdARDtqHxLa6Wwdq1P7MBsd6zM1Jaa8VJMtJ9s31n8m",
  "key39": "482whyKGgg3ds99tttLSKv7LDibpGP2Qr8H5qKVGZ4WNQuG4PWgo4sMtGghVhqE19jJNY1bu3U4o8sF4hLSUt6eU",
  "key40": "52XjjhKipF9ZrDppByD6aVTvzKMLd78Jvck7u9quwrDRiU2HRd4TWjW8Mr3Koe4BuasufrycYAKLFCz7279HQAai",
  "key41": "3WE73rLgbTMepQPUMibgvE9ZXEC8AcZ6Gmc86Q4v8LUKqUKdZX4L3yNz1UtDPFFKXJCifxnLWJqcATgN24PLyX2j",
  "key42": "3j4x9oWVNLTPjCFep71ZsroaZnMXGxHFkK1rDxbFj6ve4dqKVQKCs1nhVNqSHzgoD25xwmrL9Us3s3uhm1fCEL5m",
  "key43": "2sZUj45fkNU4eveuLzCrfKUN2st8WdmKb9XpkDtQQgpBTJ6Ahx3qy4QYj7tpFNm3XfcR5PoSgtiPsJDGmNLdgqHJ",
  "key44": "PPwmUYjXnNmtsncsR6GoyeAkqXgxXHRKYPin9Lyi7rwLdeLkVnosQSaEQkdpqGspuEmySnpbGSsn3ym9hzSiY4R",
  "key45": "5JzUQb8AxihorKhZUKe77R3NdKobJmiYdfgUUKrHytzbE5ne6eRAJjiygPCkrwBzV2ENK2Sz6MrS65kLc6ZrqpGm",
  "key46": "4FKFtcLKuahVo4BuhiPWydEug3LftdkYimHfDH2Pxyp5oyyGDdDe1G8eXp1pGX7tPkHfpqXHvUs9QvVaJz9a6i6G",
  "key47": "3aDwm2tKUb6EGxbwwpua2NiB3Rh3T6hD2hnrU7Gc6vu9uRHjRgzDR7LmPvguVzzpWAY67zfgU4qmkS8UroUsuU2z",
  "key48": "26EeUZ8ebCoKTBxFJ9VS4X44PdtPdx7AygfBt2sD4BjBPJwXuhYchWkzXL7JM4Xb7gyXLAD8QRSPfq3C1fg7rSDt"
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
