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
    "45bss4o5BrzZpEWN7aEoCbmtdTqUBtGjJyuFkGCEaNYERFRJpS32tbGCRyKBFvozfiRCKxq4oKzK3GmFyzHaY3AG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31M2FjiiMbp1yTwANqdah4tPVEXVAUwntzQmAAZVctT8QuXaA1RBaexw94qowkfrTPKkcEdUuZhiBVomRJNwQZLt",
  "key1": "4Div64BRhK8eCGm5RUXWq313hMRtSXtv5pD1xdMuW4wuCJyS4sxVW6aDh1NzVEBt8hhG2PHSQ3cRr4NUjMnQvRYn",
  "key2": "yvz3YHxe61tKpZXSGHBEpojp96q2BFCderxvpd8Z4FMpw4U1v7kCzmyn3P43dbN9tSRmh7yj2DuSF7iscNWUp3H",
  "key3": "4i4nX9v8yLivkEy31rAzDFUuYs8mHxWGqDRoa6Qxvk5WAa5UdkZrDF6dK9MDD1qM7m4EqhLws7vCdiR3bsXrZPHN",
  "key4": "4Bz437fXbhrrQQD2YTGbxyiK8yYaQ8gTVJVuRE3XsCpL6yCvU9hpz4Snu82B3C3QsM6Dzufv6WcrxcHEijCUzUr2",
  "key5": "5978EHFKCrCSu7C23cBkrDT2Evn2WMJ2aXpD9S9rNVKaedVLjPvR8dMia7BDAVLGjir29vNr7HTMxD4VW1QKuj5N",
  "key6": "3YQExMiPyYn2BtgtReLUV9LJuVNQVC4x34KSzCv5A85JqfBwAJFDg7HhkGCw82qtRjBSTHaNXuyf9Fur1BZn5ubu",
  "key7": "44jfCZZFLYPUwggqEByhosHXyGQqpUUVeszRayW5exggtNnRmRA6cRNVjwpGmmDsWwP3SCSNKZ29SkT8PtAe9N9u",
  "key8": "3fseAow4siNyY5gAdvWT3uk5pWiGvMQRh18bNqSjr8UGBcgEk4yonSYbHJjQZTL8fDZBmyHBEKP3k5B6BViCuwyN",
  "key9": "37ueSBaKVRDdqYejg8vsEdYGHKHUSVEJ88pECCqBQBrBXReR3yYHoEiZx4yFv3L2M1H8aWjTfcggqvSvNp5jse3V",
  "key10": "3gHN8QtKFShkHDe1ctk2vmBVMUkVHVtmW1S51xVwfUdQbqEvYTJ1bqWS3ZE9DuC2BKBCPw8GcizD2XCT2zjPgoE2",
  "key11": "2URxzB6zeTb5Ccbs4igK16C9Nef14P5QcyD1rKZS8E8p3Z6DFLemTxThuihFXLmnndCnRvfTMYowqVr5Tbdv15Wr",
  "key12": "bXpSVLjx5vpNRLPDDVLhSgeAWDq5WYVyRUaH7AcPvpp1y54aYoTj6fp5uoW4McigAS4Xj4no5MRUgoL4QxPRZfi",
  "key13": "31NaFU683Q3ARp5TAUKxYbFpiFkC2XaAdn6ZTqjzeGh85ZtBxcMzQXCoPHCQeZU8Ynnimxsu8CXjytX22WS7tEfi",
  "key14": "3THJwY4QGwJLv9GtVthcpg1MNnMscuu4prCVz3rh6DUZw6mJWaDYkYDv7GiSrGnYJ8A1oWE11pMmXEzHA5HvRrtR",
  "key15": "5SEHTxrc3oLWD91gaztDtvETN3DRmLYVm6B7CdEQDA1BnLDHmwu2AM3hBh5BG9SqAiZN3BueukPD6WtBFGSLs5Kj",
  "key16": "55nAXiaAVyQ9RSNTSSogWPoCPWyfzQhYm4NQF5GmiNUJittmdcRnBb6XizBBrisadWYqpsDmB6ssYpGv7768aR3Y",
  "key17": "3gimmGRpkywskbsKUtX5oKb54fycHThQUGgqhAyEqWTjZcviSFJzgkqthYNnY9m1mCn99DzQYaYyc1Qxs1wiiraK",
  "key18": "21oM4gUr15otdoJGLzv3rVb44p6DRmwfaHV3WLqaNfr1mHuYqknnjjjjhgz7HwLUJQ4s5TXpMW82NaoaAmLupvr8",
  "key19": "3ToEnN7pg4raBypYwwwaRdVF1zQbxDYHLJEGXsTytKXrixB1apkKdwxzPqB8xLQ2c5Amj8L1W37yqiKKaW7p3gWM",
  "key20": "5xi9uAFSp1qM1A3jCr6hBvGgptfqczHvD11tVXisij5J41arE4aVCAe5tVRePwPHdFxCgEndEExwT4Z35o9Zvr5Q",
  "key21": "2nP8LiSmsvVkF2uSFGoVERu79M6CmXqDBYCdnr3ygrzqfvquHVZkUspn9iRofEnpXk3SGbhyjiKqA2Lt3oAib9QZ",
  "key22": "5bB1vJ4pozMB15WtgBy4FYGTndQENfPJv4MVDfzFPdrdwaA3bVTvbCVjKrd4epRxDLK7Z23vYShvobcSN4LNNJii",
  "key23": "28JFCTDvQGHXNEAnvifJvEvNVLZYcZD2MV2hR2A8cZqDc83K2LqdgpTRsVhHjsRPKGFowmneYXnaQHVzWBBLW924",
  "key24": "UdWfuqV6DrvMbgEmUhJyQuXbJsgF2zoi37M1FyFJwd88raeZQkP6pEt6meH8Ummdak3JDQg31XJ4xwpHE1xbmzP",
  "key25": "3epDnSK5itFPHo4cjvUwQpGMUQ4ay7AdDrnRv8GnvzFBSYpDKnqDPM522XKJH3ZSQtt4x9TT9GzBvt2pFpcq8iEn",
  "key26": "ceBBJE5LyAZGdj5rCEQ2vJx2NWoF9euGUttwrXDxjxYh77bjowLFNuP2cbg2Z9NDXLNTB9r2BS3bz3wjXp1WTEM",
  "key27": "2ZVqKSVHC9uxfGksAtejsGrCk6onm7KGUSozbVXDzwRBRvEEmLgpfKpPjPByDqmxbY9mX2bTTjGb9QZ4PC16BMu1",
  "key28": "3kZv7BmZSyRSdAeKTSHPdknc63V82FXQxNPMS1XXXGZBxXQsD7riahtioy1PGUiqbnG84N1VX7t7RRL38uCw3HEU",
  "key29": "5GrbwLdfKp8C63ePG12pKdCu75bkcJZwFQgoSW1uidCA45cZS2mo3JqGh3KCoMZ3VJf6nu7staScyLUvYdPsDSzw",
  "key30": "SdR2FCzCuXYhwdekpmy471eEUtN3sEMHF1irsXg5UBQw4uoC8jwzChyKtfpXduipvBfdNm1pRF9vnkytrwktj7L",
  "key31": "SW9BA3ZuBoLnxrhE8AxWLTw64waofU555AfUrZAVahG5kQ6Kg62vdUimWwGdHKgz9oZgrB3tgtV3FteWCoh9YYC",
  "key32": "Mcj31L1zfdwNck71oa95moXBGpEccqyGa7YxrJ51dhXvRuhBLpNjRnmauenkvqRJxfEZGFd8TkjqqMLQr9mKm86",
  "key33": "4eC6pK3tRRF11bgf3FgRNj9q7TAhQHdYJyZvTo86novvuNufKahFVVz6YBYRbT3eEq29fXrmaMbYNq3QFmeWMW1f",
  "key34": "MH3uRpK3Jp9kdhvEddrZGtcMUT9Pw4K2iPHVDiNkVFXQ1NZT2iQUnHqqGHvHs9JLuzreS4sJpF1M9s5Mi6kiDhq",
  "key35": "2e52rBvuZ8UZzH4J2rs1xdSUmt4d14PGatJuaG9rQayEgMwQSwXBvMpFQEhhWdmGB14Vi7bQaguoKBpuVY7L2zPt",
  "key36": "oAEth4KdTefraoKz8EkKKvqHjwPRxiH676rQNUUUqkjqH81pUH7VfLdmkgtaaBsLc8z9JJzAbsyrgtSF6vMg1Cg",
  "key37": "2cYamsPJpT2g8z3xir44YP5G5fvjBvCJ4vqB3YMAdNY6GV9MqLLov2CtdvNozyNbqemsHPEZFKZUYsi1rencscLm",
  "key38": "3ycSr9FtxGLeTnzPFHanZt3fK9CJhWoY3G87Vu7oQbDwvzeuJxeYdo1D44xC9Z2JydLAU6xtEwvpjYBsTVXYU1hF"
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
