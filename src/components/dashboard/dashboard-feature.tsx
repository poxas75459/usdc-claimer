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
    "4sxkaWA8oZAAhMi5T8QmrYFv2unHhZpz8gjCjK2MKNZL5BnFfkqhfMGWPpkFbVZZe6DyoGvcmptcUd2J1gfq5Kgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28c2PCJUZWvdyQHrLvC1J6BdkucbMn3CpRUoajeamCxzXzzETq5JfAF6XiDtEWpLE1DAU4vjm5dNZq9hLYtGi16H",
  "key1": "4JoSzRTKWkUtNTQJxgnHsgV4R11c1pJqQ4stizPur6fZ6PggEmV6JoL8Ff41Qf9986zZUB2kf6YPWdEe1pjayfAT",
  "key2": "3AHPv7vr7vLsvXfRzNKYmdAvaMLSAxxWtYHTHYnLkaMMhYrsMumNH8vJkzsh6D4gMY2GwQ7pxzboBnFKtXSzfedQ",
  "key3": "5SxWtg6kz4fQdJrjRXYfeifYypdN4Bq3U9iRYUMGVAoKDjfWkM7bQZB9vaidZuWEd5v89KqZFdc3Fs7kDVcnr6Uv",
  "key4": "3sEntJz8nzVxQ1Ncn1i6iYpchheFtpyQadFt8zLXSaQF1ofi9FBssd58k55uZ5RYuabEsvafTxA5Sqjt2gp39nf9",
  "key5": "5yts7dicCXJdPUi4V4yMw2GxrBAMgbnM9QeUeU46QcE8AMkZ9Yc57ped5EpqAy1DJfCJoGBiaxyFFXTGF8FKaCz9",
  "key6": "4JDCb8zqAZ9s29kxL1e7tQNLK3ENN9Yp4TR8drpAsE8FUSzBCAiTtYvSEUwFT3MRdEJoKMKojHNb2U1Fqax8reVq",
  "key7": "321jq5WgQjAxggyN68WT6JmfgqkiEZu8odLazkrx2ZCUKAtcWyVMntDSDCUw3rX8H1UG1in8fsGuRcsF16R7e1v5",
  "key8": "3U6YrMFTmSbuiwxuhWojNCdiS6CU9UE2PkS8VWagxqre7kHUmUYaaFaY3KJ3hXuRdLPtH4cZRZUfgAx63H6SEpHi",
  "key9": "2NynPymqwTiG9P6FYTEyjzS8DEpu89bW3XseUJDyxgaYr8y6C3v6Q4Zxavq3ZBCv1yW7HpjNLnjQYWyPRxmY1jb3",
  "key10": "UU7BMM7R47ySQY1wbSvQfYNEhZjxjf5qTeTA2UHW6mDKFZ2WGjSuDvsnNpfENUYBnAwia8qEPdjMKJxvqdxLGr8",
  "key11": "4MyJL64ygQqgoyq2YZxe4tStvkU6P6qHDc5WAk5XQS3wd3ccvbwFsK1LgqS5kfPb9cgEmEvR6g4L7wYxwegmEuv6",
  "key12": "ydnauFXdJqnDpDRXJgnkeB1nzPuto2RFJcjbmTgZqBuU9WU89gnBbi96f4wHYg2gKZviufPy6zai2bcCh2ywgtk",
  "key13": "UBDP1Ghd49sKnfNzEnMc1n3z7WarVFFseGpFgjpcFYHuFzFWcJuVnsXfNPMcpwHWX681qWqByw4EAdgstrzjMHd",
  "key14": "4eqdkuLuBJH7DFmcoQ1YCERQdnpM2cNpES64rTNjJXaG7wRRUXRJ7TLrxPF5rTPbvKyhmBenMXGeSVgjHT2ojF9c",
  "key15": "5NPxbfJaiLnPw68SCZtMvt8uSMDuHMTnXbzBB8d8gPThW58bg4M3vBvmM44U65zM9JVnwp7oreG4qfgC8vN7RhRJ",
  "key16": "QakG3WrRe7UkMXyCCASJy3HeVSyfB3WUtBWJHPzjyB2jWzjhwM5VH9tj8BZ4wfZjXXNRWmGSYQ9tFSdqqAxNYWf",
  "key17": "VCpBimbsaMGQ42J2wdapTXWFmEDvmBdXcCmqN4iUmobmefcJi788fEuitZp5WYfHZfDViRCdTSKgaJWJVhastBn",
  "key18": "FjdsY2C5NxfVgrfHZSN7pDPcKPjXR5Qkq1gGFbzqNtoLrYmQgVtGg5oT2J6Gdd2Pwgw6rn6PzHymsCkU6hhSYVo",
  "key19": "39yLAJhChNXJXXwxxVDLghRw5cC4r1DWxHh3Tphv6uGx6wJU8q2QgyhBK7zPAta5wNrMyFXQvMfH4yrsFFScxcTR",
  "key20": "5gR9toDmZ4TPH9KFSRg3xvXBgyX5M3kH97iPMm1iQEpETQ1yfWnXXRqsBZJCLyk25cqYdVX1r29V5BxrqCYHr26H",
  "key21": "5puxb45NmLwXnAmUiVXYieG6nG381D9BMVk91tZX47jddHb977cYEgQ2VRTbNEuzGzWdxvFgn5CfeoSR8dQwzzUq",
  "key22": "2EvzAMtYoeseBjxDFKuxxZ83w4EqTTezCdiPRWimB9Ye65otsEhd3veEmUshXx1UnpZSyrSK6D4XZy3fuQ2fbusS",
  "key23": "5t6CAPAdFRAwKHyCytmZd9D5ZHJHKLdrGKyDH4R42jvNiTniZxtcYrTNkUrSHahCKxojd7yPTekmRUytsjmKRLba",
  "key24": "NuXqmSwN9MnrsdjXDvxtZoBktHkLkzzLxmQp3sioYnbb6yU4ijxzN6yMuwKmsFeKGW4BZk9SocTEnxYHLB5J5ia",
  "key25": "5QiLzHLvFPAgdFQuXCzCCb7f7YoG2UHPnysnninq3jKSq7EkCVBcxnFYTcthszCMuszrDMg5yZW45kNQwBwsr873",
  "key26": "7v5JWM2ZMy7PzTFBjcXzsc429awmuo2NLFaFwiPUJMiakxXTXa6DZLhh1PKscY9HDPPG3WTYK5TPLWnCgBVB8oc",
  "key27": "5FG3FPx3uEpGUg7tizFRuun1AkmMyTkFVCNrw4q6QwanxXWRkqSQhvH7mmG2CUVtMdph98tZaaeHoNFxv6LTrzDT",
  "key28": "21MaVo2VtPpTn5FBy9b5ASMAvSCLvoebK1WhpwGeBBvGckZ434aLKyXv5gj3oyc8fWWzA9SxJCRB9EphFTBx1fvt",
  "key29": "3BRWDGnUmo2VVyx9QNnx1ZtXJFcrB7kZxpDK9pF6FtPASP2bPwZo4gwWQ5Bno8FNbAJMHwyvLkYD3An7EyDyRCBc",
  "key30": "3GuVrSAVtLQBzhwmqytKxrp5WWgdNWnbiBp1s5GSxVgXeSQA4QbYdzXBPrPc4uHbkbiyHjBQknHa7hvY94dtiTSj",
  "key31": "upcGfkPhrryvocSyaT6LwinN854gY9HLyCW1KcvPnmRdhRzKWAyhAhaRSq4CX5noGM6VCW43ZQ14meabJTMPE9u",
  "key32": "2EgtCWCchjdPHSvutp8bRzhRHXwqARwey191KiGPA3ZfFBfRfWFvvUS17AcNWqhVpZ3qhqVGt5FzVNFsjKS8wpiS",
  "key33": "5ERTrsAHnv7c6HhpQPpzuAGyy6mzXUvjH1HueMQgHHGkcqMuwC54HTc9U4Cy4PArMQeTo8ion8iVwUJHfg4FEWBL",
  "key34": "3F2HqAyosR1HbKt1MUqNXJeDTMdUexggmrpdzmwn4tgtyNUh9GfzWEBdLn7sHkm6uPZ7SkwdSzuSR6TBFBp5kJHk",
  "key35": "uS6AKAe1sNGVjQFgE3MpFtoF33HSpGu6s2urGBeSdAj5cc4sUhFjy85RhMKmonLM4NmYg4Uck6rRuibHicxDa29",
  "key36": "2i6zKbbuiBjXTcPP47ueQAcLtB78zcNKxtsSWU7ZhcZ6gM1ZrgMxHgJpLbKx99YiRoxkAwA3QTTmT6ptgvtkoKEb"
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
