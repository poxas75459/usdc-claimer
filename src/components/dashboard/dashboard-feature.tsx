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
    "BpP2vfEAzTUzM12C7zhLfrFG8wZx6jJksip34gJBqaHpKkGRdFd4Xc5pcTgM33piydaqcNrTa7VdqS9N46qbvXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2Wob4GVBjeTtr9bAREdXsKfUdXaNeWBoaewxafCLGL3WqZYTS9VHz8f9ifELiTFUEJsz7ADP7Jr874qjNZNMJK",
  "key1": "45B5dkpQjjZNXtgLJbqDqosGNmwdsg3gQdfyYjARDjZL5SsDPRCj5yPk5eH5JMWtjqTsDfqPKbxNzGwUXUJoGCJU",
  "key2": "4ZeeZjM8HV2cnPLSnbn3jjLDXvuB4U1vpAMQtsQeHCaM6gGNF1LGGHuwXh4roJvbUBXFMmS8v9fosDdSB5uVANAc",
  "key3": "4YNWsrLYEFFW1Vf9V2YyLphW7vyDUexnbzRbasjKABB3XC1JfRvekUAWMUiiNj9DUyizZ2r8PJgYNdNsM6qgEaBn",
  "key4": "3bg8KmrafJxn8asnbkLfButgcJn2d8jCMuKGPMMLppSoMZ2f6b1akSUZadX3uV31k1NVfm1sUdr2AdM5LaVWgmFt",
  "key5": "3uJQQEsL9zxxDRpJtnHJZEch3jTyQZE2NuymbTxpFWZiNbvAJD3YEvySzaQPiBi8LP6iFWJqQay1JnFLrTf7ihoo",
  "key6": "4MEUkdAEASQ3CyjpWLo7PJHjtjPTepHXUqb9g2KqdcQDcqHyoapQYdDcDQ5Ar89soCpWgJc2t4FKDDzgvVCHe2Th",
  "key7": "4TLipVRRVnTb5ssRM5Yoodi89YgPtj39CBQ4AtJQrSFwjbGMxz2Uc9fVBKLzmMv2mVpF28Yxi2FA5fR69JHvpVWi",
  "key8": "47KwTUy8M1ozBV94TgDZkKce3UNwD93C7hQE9jRxZPZ6YvdYZdG2CCEvGLenE34Mw3F17CpUJLsAHGd5JGjnmcgL",
  "key9": "Bu8Wya297c4itTzasqxMRGFpr7zyRyjSNXpBPynezGb3yM9i7VQBagbnhffsddKcadziJw8S1NrNgrYNi5QDQA9",
  "key10": "5kAhRoBsKkUJiGBybsfmAzCeiUAnD5PJDA35QYsn1YvdkJnZEGXQRzYKkrLc4VcgZs5qv5VoiDvCVSUt45pDhUyM",
  "key11": "M4ZAh6vSHz78314QdS1CXujUzXhqHYrB3kRAnZpGy2R4MqycoPTepwEA1DbZT1fSe1wFgyQVo1C1icDbSdXdVwW",
  "key12": "QHtTnwVFufGoXyGhK2fKSVfHkPs4x32JaktoPNKZ9m9Hq1Z8Z8PHchQpH6V1FKozNU9MknWrbG98BXnYQXqjNHi",
  "key13": "4gjVgquweoRFgmfa4aWzcP9o5TP6e2TkKdg38DPexDKQ1T2ThWzFg7BZ46KhH42ojZv1uEgLrGrvtJ4HTUK3evoz",
  "key14": "65Hbs9M2KBpG8TBvn64Xr4zQxYiFyULRGECKDMhsFkWk4D6mzYBZqacW38PQCgWGKLoRCSBSBEAFi21B4bm87WPN",
  "key15": "4LXiACz9rWkTuEMfohHaYousWKWotVmDDHGSRKc2K1bvoVXvUVHa8GVGcBq4ZPQWy9KaBfi2bQMEyQp3q1eJ16nE",
  "key16": "e7cqR5mHeV1wjzqZwsMJRxQJsTiZz1eWwaMRXzYsTD25JW7aka9CfiWJiEeK5AvdroyC1gibrbgJpQ3PwkfVmcv",
  "key17": "dGwypWRYYUKn675uFAeKmpGHLKxtuheaXU5ojWP72DnL8QY3NkBGHZv68HpMbDuToJSmnvX3bKF7Ep5sapSRZgn",
  "key18": "3Nw4aB8Q7g9sTunQuLnSVdR8dG7mPrhxFcpM8F3pT4Txkk2MNAvHsGk9MGdFhr9z2ivc1mmDdQvtUPiBhfwdWrPz",
  "key19": "4etDJ4G9xd2x5AwAp5J4VvWs7joJrVAMH8vfPY3dxEBXBsHgrbHwZfAsEBAnbE5spBig4SR4udF9zVi5WsWtbVDw",
  "key20": "52Xk5xd7JSt7T6u1hXen2V2A1T3aq95qNpYsZgvEpdh2LEcKkD2YuzSoJVJ6gUPc2vmSEJh2FmZ1AUHUVinjeRrs",
  "key21": "2Ak2LRah6D3DiKMi5LEhErbvgXNU1R1w5KgqdDhag9trRCppVev2EQSvKvTUENNLAvCuFdWC1xVaydbupzeeeVmw",
  "key22": "4YAKMwX1fA3meiFqX7AHG2gJvMP8fKbn9GfUZ2vNqRkoMrcchLdebE3QBkxAaywXc9YhAAa1UXgrU4Xsy6euDYqq",
  "key23": "4C2LqgbunvavGKNY9sxvWdzixRnEVU9PXUPgv9j7PhQisjTpcAk7iVp4EtBztyi12BaUF8zjnVJyBrVdZDEP8cT",
  "key24": "EFPyGDMGdZuUYBPhK7AANggJPeugcvA6CXKkH8Mq5HCdyZLiEjxTXS6qTN6AeDzwV38uuf3gPSaikmmEmJagM29",
  "key25": "5b1sEB9Gxcbtfs8fR3uiWXR1wY2VDD7G9rjWKFMKJZbfUGYcfQ7BTCWJyYLCQz5qu4Zq8mbMyL4frc4ve7f44GAV",
  "key26": "3WwuexGtSja8KSwdvFvEWyAjE3mwNL9mzGMBumBw1pBjcWwHwTecrSPQ2SLf3MPn3rRkC35Q8LiEFUttr8STDUR9",
  "key27": "64598qMNZ117jBDB8p45KWuCKvnMvEog6YBDiN1H6Eu2cJyEAGP67b8x4Fc72d7bwvfMGqWvDFuZc9MBSx67Pkg9",
  "key28": "4tH3vKWzLwTQqFYYGVkgqJBWqw3H1tdXr3CErkUivcWL8rdBMNrUFWLqwJGZxHHHn9maay24q3K4PPCVSEGNkPJE",
  "key29": "3mfQMfNh2a88jYGHigJAFgcHDd9jBAtev84EoUeyRqMVjEjWEGF8oQtwdsiknbi3rpmnkEJdEyLbJA25HU8j3w3n",
  "key30": "5BZoskU6y8MH9185deDNNcCFNVF3WhRZgNi1Ahz9qB4L1zE7dyszij58ShHEA6RcCNGt5FJwYMCMho3zJJXUN1s3",
  "key31": "3Ux9cmKQpKZhM7uFGZnYZToEUAQCeso3x6sYgydmWhz78yct4GYFBj1jNjJyxLnBGRPXA1VFPqDC8TFBD8GzEzhC",
  "key32": "69LQYVPv8XPs5M95gFnXrfwsTv3JD27YSbWyVXEV4bduNNco2kBxZNgNyUMmtaPdAC1xCzeKMpKLz2uzz2GGHHz",
  "key33": "if4N8oxHkTTBhNkLoY8kXzgTbU4QFmxzGEoaC6M2C1d7iojak973gFcwwQZKyh4TXTgzETJ4nYj1JzmUBwYkxSq",
  "key34": "37sQSJnZw2s8w1Q7ohfrdnnXHaitGN6K54zdDoVheJ6pziYhmSXw1n3jaJCXHB9NpKojtRbGpaj4yzieMGQK9cbA",
  "key35": "22WecBBWXHpw1CJif2TV7JeGEYfD5L2Q13HJKURDpkwYxGiSHYZCWfj8ZYptfiFkZqK6WCu2svaySXkFK8QRjph2",
  "key36": "2BNfDTyzEktNByhLfcKtfUYWWDRtTDWxRfkiEkW8LRamgSXdLKLxfXx9HNTDtXTVo2dQK7H7cHRKwutZzfdJbZM7",
  "key37": "2qRhUQuJ6dCQkH3NnKomojwXR5Kx4xFSYqFCmqt3c5qcwe3NzyaAbGNGBKifTVzWuVLESEgZCW1S64sWS6wTofeH",
  "key38": "4EPAGtNsJxSQZ8eMNGzsCEZYVpzVAY2k5PnbZrn93bZu1PufrWXudouKDHF7bEoGSrnyWjefHxTLR4Kz8QEDQRjf",
  "key39": "3Gxbzqjd13QzfCNSyncWJ3dizo8Nyz8fqqaXGrkodoFBw8xPqF1Gh6wLwNoLkcou6aMR2PRRNMYNriA7iez7csMb",
  "key40": "5NUszyScWhmzmLzh2azKAaMjBXehCmkGS3C5MtYZNWAXfavSZedgBNXpnnMMSUgCe8YcmQMmw6t1HChfhdnySErq",
  "key41": "2swbtyxYcuAtaFaW18GMKoJBtABjDDyyswVYdzEpauwk1qWW6uxjKpqHoVfTfng72cjnLndz5f2ZEb1KQu8Hase8",
  "key42": "52xce6U9jLKaEqshDS2p8FBZ767mmGKgiFwRgumL2sP6GB2qHuo5CoHXyxKyia3bFZ5X662TR8gdewKD781P36eN",
  "key43": "4Vn8xnBMG8HmHse6wPStHmaEzGF7dhBgXHPSohy7W6o9gSCCMPBQW42xgkimBV6NRXozScf8Dojd5yWZkKFEexyp",
  "key44": "21Rczo9YsF7a2toP7LDbPVDqsc7PGZZro8FxRNH8QfWNvkqDBTshFpN612hzx4PvnPKmGLjWuSq1djBTj5vfLTmo",
  "key45": "4cnjr1rJkEeV2QU6i3fHdPbqcq1cThJUTZzJGSDEdUU3y1EXPV4pmyWQsMU5tSd39L21H7rKy13dBfMU85PRaQX5"
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
