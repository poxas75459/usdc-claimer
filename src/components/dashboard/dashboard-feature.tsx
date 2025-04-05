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
    "41hB13MAkoXZUtXX7tWyRZWUMLr7DvWzQLbvnJVH5azYsGpnfcuahFcSueCzE1bpLYbMJckrKegcvcZAowUH1JZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfuo3KaQjjBtVoe566yFHotUCVjnvdJXZ5dh8uLytBSPuLme18BZz4Qs4LW1fH3t95VAUhUhbcxmBTJHJgYWGsW",
  "key1": "44Lxiiijmw2XP39thkWyiMHKA1C3xJ1bnWPviD31MUkeQZd81rG9faZEyyMtcFNtgyjJfjykK7v3Fv3dHjmLPki4",
  "key2": "tHcy7GCbAaYbiJFWa5oKgEc92FcXHmEav9CtPKePptX5mNkvnhvxHnqtQ4Sst1LnnSq8L2rdv5SnJZyAkiLwX3j",
  "key3": "4XfV5hC2Lxa81FtQQ9iJkhfsVrJrctAf33tzob6R3z3dPhAQog2ELxFzcX6PdAGm9GoaGb1o5CQeGtpX1g8jVTAC",
  "key4": "rUibfWbsrqWFzLw34vh3ZxLrFx4vJ4yScA7iKdq7j5iecD1D583L1JGvM5PmRTCJDZBzViBARHhVHyLwdHUTVzK",
  "key5": "4KU7ZTwcpdKQUaUPhMkcjbYZzzk9v445QmXf4ruvu6SaAJysm12WvpKu4jSW58Ys3FxerAuesJnaXR5MmGtjTsuK",
  "key6": "4wfEyMadcai7xQATkEbW51Nz3pXsVrPk63C5WQuho29TKTDP6YYbDPFYbUcgHNAQXHwKmJ64b9fuZ4a5aQBgWRmq",
  "key7": "29NhtRpDTabBPcSxEz3nJcibFGmzDrJkbQcTyTBroFZD4eobLK3Pn6JsmTidjJLMpejQuRW5XT67Hya8r8hAscKt",
  "key8": "r29yzx8rsCsjo5ximKKd99BACfMuVvT4T5LFfHMCS3jLD3mmYL6Z6NA5FVjSHMRUDJviHRZPNjYbLFW1914ynYd",
  "key9": "2qy4Jkhtfkq1NW6dCSXddNaWNqhwM2vz3GfpomUN72gR2joxPDa6oKj72wLirg6BG1qbUBYEwpvBUiaQTFrpb2P3",
  "key10": "D6ECzGqsKLkmube2HBgPQ6AmqHTPD2EnQQj2MN413sTEtjt5xGUJHjcRHe4vnHTpnuu68Aedr2CsDwFUJvDvTRt",
  "key11": "33DXbvsHhNMMKkntKRUN9LJi2R3jc6ea3M7AfJjuPJWX7Jd9imzAzLZVq6HCpop571HyvV73dpHqhcpPJD5hPjhi",
  "key12": "61N41YKar2C2Me7yv2uKgbGjXCv9qcfFHeRh4Qk29HJCBBfzKrY37tz1UusR8uyMSrVQvHDMi36KdhHgn8dCpr7w",
  "key13": "jTCgPLhLuDB8QE1BbVMtD4FHJk6sg9Gaz6YLjqQTktn1jGqeeG7gNy7S1noyU4kk8F6o7RZTydrNAKw29gmkQaz",
  "key14": "5qr23JottNTL5hkuU8ssNyvurURu2XSD7voKwPLjyjhT1hgyJ4KzfRX6vEX3wEogfkf5dp256jicLTyLGBDMuDqF",
  "key15": "uZHAAvDNjj5DkfuQVut1LARhJYKzjb12J7gSsL1NKyUsbB8mUeL6svUSyAZzmWDjf3j5aHnboro82rZXbY49AKW",
  "key16": "4EKYtmReQNXo1PHj64zvD8CnTxUibt6bCUFN6jxLHe584mFg65jWsuv3FZ1PJoDwE8PeP7mSjaP8qLTaxLnbUWZe",
  "key17": "3V1SpTiPFfNDnLi3GfAcGHVx5tEokNbgAcLYPgygSViTKtprJf33pipCDeBg89ETvR2M7wFoJQuhp3FdjajxStKC",
  "key18": "4wRD8mxXxTvKzjZwMEaZB3CmWcX8gfcKG6oYgdAwKcDWkNB4QyUi2a19rrssvRe147BXUz7e1VwuEoos2BqZXS8g",
  "key19": "62mTmYxj3Agn1rB3YSdDxWg13vTo4AkDUuiNDNnqiN2T35zq12PTpkTrGsYNhgAPQYmymQNiRtygYCJLhGTpbGFL",
  "key20": "4LKSfKwdeNLD9NcDsb1kANT569XvTya2uvH6Smue6hgDPfed2LcRXgBDv21B6cbZJqBgnyVuyLnwZj49FK94uynb",
  "key21": "4TWusYa2onhVcKsNeiMBXnrsLtUTYppMGJqfFj6JXpR5S84wFBkigejGHzfMtHvoJavKMtSuM6DQ7ArY3WRLfk9S",
  "key22": "2wVBeWdVmz8Tc9dwgjVXfWkLyUiHk7FGbD4vzF4Je1M2JSR3bhusfHMXRAyJhkhFtZyayUErhTUJ4u1HJU8U8966",
  "key23": "2JCVytaoX3VNvp7NeAKDxLLam5UHAVqwZC2xvMK3Whgogun1XrbDs6dZG1bLGLGbPMB6c5gCvBtBcHdrFA4vYg3D",
  "key24": "zLH6wUHU5z1vSJ1g4uHsz7TyaJ3S2aiQ1ArpFfgQe6KvXbRPKBLsJHMZT9eo4vSqfxmqaSJT8MZAjH5io7FhB9M",
  "key25": "3rY2h4vwsLYLp5dTdWtTS4iioE9QDAxAmnjkDttgswmTv4vYRniGABpvzuA1R3Rh6pHadXr7VdgF4rA26wrLpAm3",
  "key26": "q3MN1NL41pZW8fzuzha2hAMdCQLGjahvPnUmEbLu8neN3P6yjDHS3XVUwvdzjkZNZto41JZTSXAcUX4a86AfgBb",
  "key27": "42PrG1hya2vKJsCRyxS2Uyuf56shtNeVzG2acEorsiRGtNX4XPXEGmTdfCqPLhhFyamUydZULVYCCmdU8ZeygMTc",
  "key28": "F2qBPUqbX3GeyQSGAnSaJCfbkH8rPrdtwRLtTJtAatAesmbonXLgx2coyQoR71KwRBRemyuocA55frrMp8mHouy",
  "key29": "37L2fzDB9DRzS8Rt88eXZhfGYTkGs3c2e9Y8HkNCGTk5B3McK4qBQC3CFaJVutX38aqaBTcdWnSaXESzpc7wqzWF",
  "key30": "51xVW4LeTHXtF8Cncjs3bjWWi9wZ4NhUrc9DLddZQqYMMEaTZ5QUE6StnuhhNykSWkmC6ruPEVLvh78YhnYLAPan",
  "key31": "2QnzxNLSpvHnSo5w1HCC8iHP8yCT7afAHj35xuMByZ7Tccc7PLhaakP7qKXAdmV7Rp39cazeFTwh45gihx2Qwowt",
  "key32": "5hDqbwHLicd2cXh42QnohZHisMkEQJ8XP9L6V4JgNTuugSReqczbbJPMeYCp5LEt8AJ8XHsX2L8c1Y7LVjb8Ftjt",
  "key33": "72z4pPKoMXEd5xMhrPseCTn2oVLB9nqPtvDyBMS51QDWkuadgr1nv214oaYvv3n1Q7qbZQcN39nBYKzoDphZGVF",
  "key34": "46gU29bPkhytse9tt9BAd72pcThVRv46TPJbahykjg2GLjnhhdhH2MbEDviWJ2hdiYdnzKRMHGnXULdshZKjpBc5",
  "key35": "2JrLM4bmaXa9crXHwodn5JndEd3D8uNX94ZRvgvno1vkWyhnVjUQvo54FtLFr2HShyBatD4A5dKE2sxEkoeJwreq",
  "key36": "nyoyEEKrU4iPfxd68QAgAhPZw5GQP8NFqUfxSmxsM1eJvFMC8hgkv6v4JeeMH3F6r646Wa8tBmWwXK1NsS17taB",
  "key37": "3SbBJQm1j7UckBh73uYgeqcKoa47FMGGqt9iD1kSQ7HfThvzx4VkngTzwknGmYYEhyaf4woWRoWbrVtqQCqpGdbj",
  "key38": "ZkZqTR8byV2s6s8whPqVxz7ExnBxTudYEbSysQJbtazmfxrU3RaqnFhJUQZLjQ79Yo3ct3ZX3CyPeF1t5f3P9mC",
  "key39": "5nFnJWua2xYGA8aDDvZnywa54tJbFGRYErgzq8xZcmJiqpjSYi8JekpVH9Zp2uNj8D8wGq5DvJWfHVjubXGeVHsV",
  "key40": "4uovG33B2zAddYURd6pUS9M9QwouiZ6m6UctUCTSmXaLCUFmDT7UuhTcTCNLNWFezSBQUcSyiwnaJygnXN1RzdjX",
  "key41": "3htw2wtuN9erghKmNRZAodLqCxsh8P8gtWRp73fh6aMy4UEVBpfp8KEgmpKDtwMBwE4RdzfRtXijRdewMxeyJA9T",
  "key42": "4crmEMvoAvg1pcWU4vKepnKrPwHFuqLy1pkpX465tV3HDjCE1SyPYAB4vTG3ER4trJHwdGwWU72uK9kVaE4ZgtEw",
  "key43": "3ZVFNBoHqXiQoTY3VqDgNCSnZia85ouDs4Zmows3nRsDG2MDiiqAxJvBZZdEyuotRDyUXYozM2XfdgPhqXzMses6",
  "key44": "fLpa8WVJvfMBVr9cR8iNVHcnVGwyomv5EKuwxKaUu3HUkQTu5eFXPxSJNrSaM2am3ZmvzqregUNzCbPuaHLENbr",
  "key45": "PxU2BF6LV19WUL1bCHVaqC4F38Q8BrzcTC8R5Fi7pxzeRCWtdbH9Y63Scm4Goadt1CvDhfeGbvNXm7deeHGiUT1",
  "key46": "66CWzcdHWGFiA8zi76dyXWhHVSQDRfdq7tBeojH86KPYLsKvqfP48t97mcHsG1PXVU74h8MzZyqj9u8aMSg5UThM",
  "key47": "3kH73tZUnjvgD6uVZ9Ug7Ni8fbMc4xmx4WwW7Y2fmbNzooMf6ja3R2VPDDXzkaVjg2MvDa57NVwuHDU9CDR4YSDK",
  "key48": "2uiBBGc3QLzUeXbWeL6wrSwiErZntTHThFBbLY87RaL3NqQ1KFQjL1LxXHQwN8m45eVE2CvKQP2eDNPgqCXCn6pV",
  "key49": "3SBsYRrVAdf9DRHk7pye9ryHG9cQnkZvBY9ezDiKGJ2KEyQxgHYur1bsRgWPKZdkmEDDCQaFQJ6xiDiFdLMFd9D4"
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
