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
    "soXuWvWqUGdKrQpx9imnM8phgvzRi7bfpDLi4xgFTaV9DKHx437LXTaj16XCy8jmVPGr3aD4T62GMwgPRshYFqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Sah3TLEfaiHZkihqBbAoEcCFMsvL6iPYt9aqSaSoVm78freapL7HCzjvCriC6rfShPTgxuv3pDUC2dcDzAYDyt",
  "key1": "5k2JNzLoyEykmguYWCmpo7Z2QyaETaqDfeoDecooDuHV3tkHE94GaMgFctQyTLacjkPtJ2bmpS8hEoFbaokSQd5S",
  "key2": "3Ck2kCAMo6jfY6zMminKrkembcVUA6XtEVjjRSE3RugnpfUyTzNpQ2d7hqBzaYot4iTQesXNDZeDqzjz4LEgdMxx",
  "key3": "8z8yXtA6zcgz9Kch28t3a3zC48AHLS9PH4mZv1LgkYjiZkkhF3eVWtyfqDCfEmKNKwfjHYMRpEDAqHcnUEXc1gc",
  "key4": "5d1XXqHrrVa659Ynfr1rkVkYgsiBsaNM5bdDvgsYbhfLFiTFBLTZba4vfB23ax9iQoJenyKZqdAFFrjM4g4KRdaY",
  "key5": "26ro4ZZ5FXn4JuqeQmPhi7JeewqEnqMGMS8huL2KAg3JeKTNJCtteoGQzsQt55wLxSm6rB8qAY2SfdXn5g6877ga",
  "key6": "tBcwYopADEZboeUfZ8e3WrR9SA9UAGJJG3hGBGwytNVr7epmLcVTshdzowDDDS8bdvuR48GfUEYwrJwWA9sEB6m",
  "key7": "4Ho5szFh4rSW2RPJYJYwnp4D2pYekvCpzvLhGfpxA1vy5JppvYi4yT7kfavfdMu7VrSeRZ74Mc4vFg3ehqmx6QXZ",
  "key8": "5kYKKgiNayBjtMyA62L5ky6PqJdRjH8mwYbH265fjMPkC7bYWSMachBdLtmxZ6VNqehac3vqP4YRJL8HPdc3KnHj",
  "key9": "4uL299ko51RScaLdw53ukXkwod6w8pjPRb1UM9XRS62QYdxBLztR21x6sixDnpi6WtF527Beyb5tkmaDsFgrPygc",
  "key10": "2VFoFtBefcJUqR9dsEWhs7JCiiVQcN5TJxAvaZGMM3cP1sot2oA3C2nkxNED8pLALdHgLo5eWGQZtxNrQcDHboE",
  "key11": "44vBJS7iKLCzetpyZBdtSGTA4a4aEk3vMYXoAvRMoKwfuMfqa1L7GBGLB8SiBxk8SatSE8tFf1vDjCQ5eQkH7adE",
  "key12": "5CvPJrTRWzU4hRnNrE1wzgiHrN3kFM4MHfa1W3VvWNUDBiFXvnANgN6az8XUP8QznTwbQLA4PfroBHvxwPv4xSUm",
  "key13": "3ydLQkBgA3YALSh3td44W4q7KDqPX3YVoEMUTteZwEBWaDAFnQfwxFyMcxGBK8gJhnm8GtxeE6afsrLh28AYitZF",
  "key14": "4o4C8nJ3SGAmgtpaRcbjsxc6D2uiNw332C5Xu5qWXiQyXbTnyzpe5cPZ8yNiP8qMeBjTQ9vcZH4gs421BHHXHa7B",
  "key15": "4fQyP5rYtcqGegEGbdvcCUXs8rCYcw6JVsec7yjCMRgsY7LVpU1DnEZMgt6fQxRgDwuFpMiNG8x6UU5JqXtcscJA",
  "key16": "5YzCoxPYjX3et9uwTToEHwUKFAVSMJVGX2L2ELD5YdzRMd9r31nomxGuuQaPVWWSEA8DAz1jp2UAaQvqLuvTqPNA",
  "key17": "2UZiGcSfVsz4XF57Az3wic97ocuKZy1HExU5X8LuVfSHJYfRoPXpbvq5qHFWyYM4Gsu5HtCf38pm44Kd4euKBKmy",
  "key18": "4YJ4Jvw8PfmwU7KQAeaf2idWMJksBGPMB9Jp9QWMUnbmybe6wkHbWM2Zp2GP6rfXFF56WKzRNhuFAdMyh5fFp6yF",
  "key19": "3JRckMcKV8zJFvWVpnxFU37xLE7L1VRHXBGH6EwwGgsQNQJrKuH8kYNeqCsGmMczfPAAzWuqi8GdfG2fRQV3FcX2",
  "key20": "5ekdsstGFkwe8ZsTrmpfeWSbPYuRMSzqDqGzBScy15cf9QTr35Y7nN7MK2NqSkiNWxic9zTuaa74XKHCdNyHvd64",
  "key21": "2hYEzLBkRqBrWyvqPvkAXfh5Y8h3fa2XWPZMdnDahfmWjjKy1vyM3AnJcrbcQ66kLebxSznPQnJEbATWQdaaEBR4",
  "key22": "2ZafEwQcEaitJ2cCNvDykGUKUHU215j8uQj9r5sfdScqexPJx5h9WBA8VfvXKsumnwvQwnhxHwzbeeimcye22C4y",
  "key23": "FbLfo5EgkcGRCk6tfLcpg13LCohk1BRsQEC2Xy5ifuHDy54uNk2X2czxuzpqkQDso9SzSR4NTxQgZ5DELytKc4t",
  "key24": "59tLNXkU5sCvJVx19CF32qzHMEXJF2QHXZRLLxoaQxqCzVd6bgpjUQqTRyuYRg1St51NWf4SDrznYG9G4MhQtszz",
  "key25": "37hpHgSV438MrUFRSdiVoQQoDpRuvmAwk1G9xQsFe2ukYuG3wM5Fc3ydzsfek7e1bHww1EMtA5tz5hHPKwMQeYrv",
  "key26": "b79GKb5BN9HXjAiTbdRTxsZaeaQPM22uiWdAnMuAFTRztfQuQoGPnWJxU3j2YS8pR8b2FSwsoSbfTdJi4L7JcTG",
  "key27": "24rD7XHLZa4vXfFkfqCnznP2iD3AyH9VS3C5JZW5vzXB6Wz3spEE3PRmrPuSjQsar4HGZkKumU5KbEsDwe5Nu5E3",
  "key28": "2Ecysq5tC8WaX26ddxvDzLVxdBF258SB7n5jTdGTAcMhyemDZCiUaxdHYioYfAGe65HJwvrS1N4FQEW8Tp6Msf6p",
  "key29": "2cWPXF5DqJqTHbsTEGP7Xg4nSe8cSawvELxYxAUzcdR2emXxKFzkUg1636ijepsvub5L2ySqwDm645rCfq5tPTZ1",
  "key30": "5BMHjLs7cRnizYZJJww1XEnb2MKjD28iPqQvD11qnKfsixuwubXYeMyDmDV9bMQf1CuA7wxBUtYutrJ83i5NbN1J",
  "key31": "5oF3741TWJVTC4vu1YSryYLuQSoDo7yoKaVTrAkSfxXu9H1LHkRT1Cd3jcrBqTPFfeCegVxc5ib5aQZJnf99rpFQ",
  "key32": "5UNkwhLwNVPBEGg39h65iTBoKaxhYqVeYy7HfHaR8dEhSKsrPFkhXM4RGfpA1CYaFgHECF2pKUnw5KgRqYwqe9pj",
  "key33": "3MPkjBkpiqmbjGzSqimtvtahvCaaMSw3KNYXMxhggDpE2Rq4NPigsgkKfdWz6D7idJ5bsqbYdkpG3aAvBs6zJYv3",
  "key34": "2rjQpnjR5joZuDvbfhjqnQNzjFMQXvR7DuqEToa5eJaMdPAuPLhBHi6YFQDkykWi5xbW8Zf5NRbEduUrrdW9Zc5g",
  "key35": "zhEzPCGGNDoJo69XrtPJxFPk8HDM3y3rTRFjShvDfsjbUnp1JdpgZDSNXQmt5R2J1R4Ap5buSh8yDsQJfMJVQ5u",
  "key36": "2qFCa8MAjgCLzEinMMqD8sQAHEE4yDSx5vndDZmKMXdQSKgqJbgksPuQyrLCrx7pGcwVr74q8vXcoLfbTueKFUxu",
  "key37": "3YAeBgWTT69f2pKLRMkP3UBHdUX7xaFKvFaSjmNZXM8zg9fKDMNqeYcaTUhvuVUr28BgrjEMZz8NxfUHifZzWWYb",
  "key38": "5vfNpPJDnSwY9Qe9mgSA28DYu9ivVSN5xiCbZmVFdboUrmFTcJsmj8QNz6Xj5Do69oV81Acv3ZkTGvjGeq9NbutC"
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
