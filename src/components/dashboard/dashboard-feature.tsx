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
    "2gcJw7raHBSq8k7mQcYqPSmSAxGRqbMYZamLdtR7zeSzRJ8jACruzyLHbg8SLmYp89Ym8eTYyssNGTJdBHfqfQnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MTJk5ooAAumbWn6AGSCJoaHUqJu7SjEKY1vEQdkvb4J7CVrqrk2Prn2xgJyDCGEkX7oXqmQt1RGNRmudVnSsZCr",
  "key1": "5D4mFx6HmP1LdhDVA2vDKsF4QULsHVyEDFmjTE4fQQrSLtTgA51sojpfgP7H9Ev19vDBnrpGkzJVSr29xQyidmVH",
  "key2": "514psfo2e1F2GbPQwyCppT6eWxACzgbr2qT6HLA1NkSYiCveeBQr6kiDMHiuWuUpsr6GFMFDZJTGpxe3AHYf1PNf",
  "key3": "5N3siWvSDbdHERM6hZxD5FfSbDk8XhQuaWkSVb2JrbhwWfDxaHXTAhvjwuiLgXfoqsMnysqPbK9ejnoKpA7UvnYJ",
  "key4": "5ZXTWXzxUPqpHpEk9Avh2HExFeJgFcAULf9ucDsNRNF1cTatWvmWdpCdvAviMUjBYfZoNbz23JPYAjotqU7qWfu7",
  "key5": "4YJ6XCNex9rctPP4XG7CrxCTfsVWZcFDiK4xD5cHEtGy5hJghzyw986PrHC6KUaRSYzcajWkUX5fMJ4JhCYhsWm7",
  "key6": "2XebAt3LU9tvjEmcx3gDPHXYhdEFBz2XQpa5sExu8jx75zzSULHHmyTYeYYQAA6xwCehJ1G6UZheTNFfHxxWY1pm",
  "key7": "7nvgT2DhjQTcmNBzAVoAuXQumGGvjSopjsLsFZ6GQaGnG7Br8KyD7e398csSHoH1ct4G3hcLap6TKyBaRjogKv2",
  "key8": "29NxX3TnQcYhHZ1yTDMgTkFFzvG1WUtAD9qPrpFQDUcZJyKRbWWrSxwRBj4Vo4i5Fe8gSsnj4EG2ABxNJixgyYDa",
  "key9": "QsqDLdWEG4cCo7zQVKjrcSDMwh5CK45FntvMLtvgBDv3owkPo1hPBTBUbmLnDwL8eCohRBwjVLHrxcAJZ1BKXHb",
  "key10": "5oi5BTEaqx7bdCpKz5KHXuewJtdo1syZBVszeLHSg5f3XxMcWFuLB2rCeqxNf9PF31ftmdxMmJb4GZJrnUdRU1Yj",
  "key11": "5SaGYRChNx19hWCFys6M5V9uFYFuPFR8UZfH3P4X9osKNezNt3q1JbJX8wmPPJibBqZAmkS2gL27BCcVrAPP2TG1",
  "key12": "5szLzMJatBJqmuScTFon1nn2LkPH6SW5HW6BAi9y548fybEEJAFSvEoMmCJKMFfFEtgcEoa9eoEVineZpokHdmYe",
  "key13": "4JgozPUosjif6bfVnwDGuKCnwiZLn11j5UYTptG32FmEWjm8N9r5Xu5n7aH4q4xYhg8L3aG4GLqNqnEuaVEoHUvM",
  "key14": "4HpB2wrvj5QeYHZ9NkUAU36ZcGo6PZjGt9Y1kVJF4cx9TUxb6LPxd9Kt8Lkd6jW7E8vnqrmWvvb4eZ9vWg5fChcB",
  "key15": "ZD5bqzasG2BftgvjYy9WKThvpdAJKeK968PBpYViJX1N4NjyWDhEzSzemxjn5Uzf98fKxbwvP7aSZMaGGee8EnY",
  "key16": "5JRwMWbmCxcKGAK2SQR2nGwz9CQUuWgxqhWBXCmD7bvgMQM7fV4YDht5fAxBpkN9L8idXZ1Kn35kS1bHDLMrnArd",
  "key17": "5Ng7nwVGamA6hV2jpgjXdwSYtPaDGKJ3PvYA1wCocFQhJTozvzKKGuNvzB3AdHatMxPLk7wr5iPhScv6ntwj2Ad4",
  "key18": "5rqsr7Q3weVsmM3RHtQp9ooXEjNoZxEbUnLFfy8WPKCMi5nExAzeWJGe4WwGhcfnuuxatKfswGHWjJCa2fzbU68p",
  "key19": "5rYUqcLvo7N2i8o7dVQjcuQdYLRArAVaha1KqBoFjuk7T8PuBNGV57EsaiGuT52HsoRHnt6foaMFMPNmf8PAcvvv",
  "key20": "5MHtXqm3xRky6nL4enaAidDJAyEZM4rMnuUhAt4a7ozCvvwS3GX6CEhHjmQZq3dWsTz5Emq1QzNArMGBr4cVFjeW",
  "key21": "5uZ1e9EPH34fjT5jtZNvy2ayRNJZRnzX55XdFvkzKYmdxfZQDNZCJBJcDbKpRbQ7S9KGaTnB8kbyadQpBBNnSYQ8",
  "key22": "3SJgCQzugJXxZh5xx1zRNgLsVrTUmtwN5hh8imjzBKRpxYdAy3V6MX6oPJGNVsjJBvPLzJKqXsyTGpAfUuDJuZ2Y",
  "key23": "64AkZYccBEpioSBLtfRs47SLDmKzSpPWK2Gd5f1SPcuzUGw7B4vVtfaq23P3k3sHzUP8yvq11gf1EuKazUiKNfJW",
  "key24": "Wkg1akpUyLYsjQMyZvkpGLt25VYNhnWMvjiscYVQ73kZFoGr6wjVT7XJt1yCDy14zjRrMavdXuQmrNC3yuN2BQw",
  "key25": "2rwcQW4f5EFzPANCscM4Myjz9EE1emxb3hUmhKGmwX1XwrDtYqYRN3bBHidf4GMPboXQohRHTcJ5xP2EN4nMGRns",
  "key26": "4gCEZrGreRetChsobxUt5HeCSxtBg1EEHJGKv6m4Q847pjimhBB5e1oecSUSHbRvMCHMFFfpQJi5nQcoXU2zwGBJ",
  "key27": "531YBa1BRd4HBE1CFDtWQUDT7SLm6unaSvfCrcc3jTgYVUmsbAZ735zKBQSnQgupoJDy2yBAyECPGEYJu4xjzmCZ",
  "key28": "4MWYk2y3L3Xp8tdFeSvT4PfwADXYQWyWcUoufzP6Wbyrvw3PTMYjswpmqwAhDK2W9pwgknWHokgFbNzLJLiyKmG4",
  "key29": "2bcFcYNShfLHsWV5mBVmjRg7EUtmAy7Bwyk5n1iqN9cZB49FF1ffRgBmv9TquNZmAbQebKwg1TyR3cQhfu9BiZr9",
  "key30": "3tnUMvvexe54LJcN4XQSQNfBvXP2rmwYjCiRTTRHtrzwVBCmvAtrZwi9xixqqaFr7ZNbdrdgjLNncS5FWZAunWu7",
  "key31": "3B4HZTmm7LrwncMoVKGVG56gTpd1r8fsKSai92s9aKGsdj4FtPMyzMgXDoHM9mCDK7cram8BG14Yvavz1wbyTMAt",
  "key32": "UnmK4Z7aH1NEughrYE7V4rrNPFntsKqRPAzKuqgkSzeoV3X5qmDDVMWixu4N4oAd2WeXB4wtahMdcyLQ9tX7Bvh",
  "key33": "3UcPbeBcV4gSDvEixXT6hew9jcTSxZXHULLbwm1m2G1u5PTNEhoehqFiejyLwZh7nsyKjcCM4zNQ4BLJZK1JcDwm",
  "key34": "2QQgb7vwFU5NhT81scc5dv3DRVo1QB1HvL1vZJuEMyE5Zm1mmSVK7w13LMMT7dgezveLnFfALZgQLEEA1fnvanaW",
  "key35": "4HANXcbSXQGfXaGZwxtkPRUAZJm7Di4iufPRFHuy6UPZGdgeWzhhdDqA5FheNBGUFRQCmLrRUhMERmnxEEr2zycR",
  "key36": "2DqKjUjTJBkmHNx7iXGSAUpLdEGJm3BL3TkHahfJ1y8vAjbwU42s8jKQAxFQxEkQpmzFoy7t2KN7XgzCdxzdrqJC",
  "key37": "5PHx2tfU9uykLiQtpDhwruiURRpY1KkwTLzNhnkpfXutrQ88J9ywuuSUYVNdFTQeEN5SCVyug2YEKyZQoT3JH3mP",
  "key38": "2kkk3PNKiXyx4KpjF3K9aQYAPpHgtbf1L7ZUYyGGP9RwtbrD6VNevFANRH28FViFtCkyAzTguj8AM5h1eUkCDw54",
  "key39": "8y3C6YMvZDyz3c9Yjx7UCig7bW6Ex91GkdFxXRhzBCCGdFzi8ynDGpDyMtaNTgmfxgKXv1Wa743hTEWGu7xv2B3"
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
