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
    "TJJr5bqeMvadoLjZ1W9h4NEjSfuJRHUJ6kC681DNGRcbcFDQrXyzJWq1njkxdyxvWVuvp3W5g9rZJZPtrQaaUvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3ie8SM9dfWTmqyArPTAFWok4F6t4hHrzsPxPQhyRs7T6sH5vMkCZT8rw64Ypd1fiWEApzqSLCUU7wntEDddprn",
  "key1": "2WewxNjNRppei4AT5UNQjwq2AFqiE4iD58X1nX2Dqi1gqbhZXkuL7PmcFQwpFa9FQVAjagVkpweiy2vLjq5NgH9v",
  "key2": "47ems5kzKkUdudSFRhRnpohBf9kNzq9Jb5UumXnqotyBUxhZ4a6rWPdXv2YGcX27PeE64PtArowfNpgZTUfYFdNh",
  "key3": "38qrA5JdJruYWWzTsCQewDNe4hJzonDocYf3FXYRRCWm24vhycZLCnnXEajg9L2TtERGTnf759rA772oU5eNitQG",
  "key4": "54WzDrPvmd5pxLhrFPwcXFX3MTVcMdyk6dSBFCKYghQTvrrKJVG6LQ9QPSdoQaYPz37wRJL9eCJFCAqAG2ah1icn",
  "key5": "2hXt7WnLBB2hL2QN9emZR69M8HV5sL62xhTU72LBkmivEUhoPsPXx15pz4Y8BfpmdK3C46ERHwg1hdaBUF8ASCRF",
  "key6": "2uLWXtLnzYYfZxpBBRW9QWde9L6ffQxgwZV2Wubztso5BJgkMLQK62WZUt7cceF6EBixJkJxY6hQaWESXmDVMhxv",
  "key7": "3AgNsop9jmijfHzgo3ggFjVsNf1sHfq1esAFc8bkYxJcn2PC6w9jmJW1imTJjRvHCgjiAmvdfdxZGFJ1tt2uYhVj",
  "key8": "4rjSazbhG1o7X9z2sQHvCkVmPSe7pfaJ4gGQsHCNLMjkW4RW2gq4sn5zwJvvPJmDcct4mCGbyjMC7Wucf5cQuGNJ",
  "key9": "3ujZc2qEygVEdSqBpqsaVxdB5JL2PRH4WoLMwx7bEgNeji2mMKez7Mtms3zz9wHcMSau91HTxGyVrU64SuwVazJz",
  "key10": "BE8qeDKyqmkK2pYwwHfpAL33Adn2pSDL2e3LFmGUCV8veWj7Q8mjma3vAWmtqg4XREiLfLfZYx4xsxsKcQQFwHm",
  "key11": "2oE8GhdKh54auvXYW2ZwLxV62NaAAV3u5FPJvYo2H3L4ctiMqtZHEcmtqdQAay2smWN364kWTWyFMVyVJWAh5Sdb",
  "key12": "1BmE6Kyqgeo1geMWtGeBZv7mU3jBMcTvyXZzimWFMP3mx8d3nAAkx8hzRgje3VTxMWvDkQPAgKHphUK9BGXJBoy",
  "key13": "5vAyKqUbUfPoqi6UQUqDMDADoFba552cigFcQBqNpSCN9yzieU3WcwoiEqAxbqu2rmGvapF6ZLP2SuhwDZdWaQLk",
  "key14": "2VuemDygPp1ZswQHB3g2Dac4L2jmB1VQF92QUpCT2vhRFwyLVc1EAUHJF82xw7riafxnxD1pJnJRiDQ8iXErqXp2",
  "key15": "3qbNmj1HR45tvn9DVpfc6pzM4R2dPq4uz6mTU7ZxPs26EkAVpHFHXHH5Leg8ZDnFwf3i9zpR527ccdWLD3dsMw3E",
  "key16": "ALzVFJADtEQxST1m8uAuJt2yhtV1VFHwZyDgQhG9iv3X5LaYB1xskT3k5ZNHANPGf86aCxg1A2RxagufFnsLvfW",
  "key17": "5p1amEqM7Yki372qnCn29RDypPadaecHx67p86Gm3BNFw3NtBdHdUsXabJfi2JPgCLcUArCYV1mcCNVUwkDjPdmn",
  "key18": "2T5KuYpBoLn1jtJBepDwTHqpuRuHXFyu56vEkGxMo3nvexJFFiBM3prsbL2jucU93mzU4iQ3Fd4ws6m28pGApnwX",
  "key19": "2j5vxavGRyjFKMCroHYZFFJJSo4DNzzc7HjEqmnfsedbwHrEs6HRSpYNAsfpRPEiiV2tW4t38idH48CAhkNBQJvR",
  "key20": "4TkLyNTgnxXNFtVGwneA9w5Yy38VR9wKRj1Q5LF9nmN2FWRdgAHfcor8HjkTZS3p6zq9SWuKqWGgXBE5Gy8KcgUS",
  "key21": "5rEP8W5rNVzyXLpdde6spp1WTJqA94tT1grr4XoquWYW8uEduY2WgMCmjx7g1cg6CZDeMD8Ji1EZWTmEjmLrY3dr",
  "key22": "4hgXZPnPPXs98F1kmVSoidWmEkNcnD7yjTP2B6WrLaZTUHuUWyjCaB517vNUv2jYGmUGmacK2aa5DEKGQ1bYtDMh",
  "key23": "3oMapqStVJ424ArNUykFecNbtZNcDH8wath6PMGjsMjQQW2hkzKn7FX5vjThgMJrmgAARmrFZnz43zAB7CwREixi",
  "key24": "29W7deYVs4TToiZBpg1cmDNFvhTYYukCMCvCVJaoRXdkZGikybi8gtPHJx2xEg8CFcTsnh3ynH7KkZf7i58rQ41P",
  "key25": "awjnBqLv4CrWAz58UnR5Mu64Pr22BKEx3wcMvmDVbP4dWb8Qk8EyvUVvuPVEupnqF7nQ28aHUVB9zD6se8AHgAi",
  "key26": "5buquf98uKhtNPdGBqqsb2osQq7J6jYAtDhCjfxYqsH4JL4X8YqEvt8Vqm3j69BbCWp9fCs7BDBrNo1aXaPbfcfv",
  "key27": "29qpt6S4tXsy4Cmtm8z6hmYTckW2zjjhwjjUCC9GLEakU2VHfBR1iMpSwCiBEkKsRNWyXmwR7cyV475WvreFVzPY",
  "key28": "5hFt3RxvhYoSrFzD94Nhhe1bK8VsSAuAtESWnxvYxr9jQg2QpX6LYt3wB7Mr5TsQ1D58RjYXPsgG3KkVbi4gPRdj",
  "key29": "3Mn2FAtYubZx2ucYXrqJnTYrRpXj4jV8iygAtATPsHhFvQsLKCXDJTDSEWb38HRTftKaT5YUnTYJDCmRv5o7rpC6",
  "key30": "3wfafouXEQR8fTN9QmKtjfN1UhMW3DBWVsB3sj6TeZRL5nbWhyYpfNapiCf6unnyADBevDFGpwChEP1Xqea1Xdz5",
  "key31": "2WZNh6nh3bhZgAto31Xpc2Q6qSXQ5D4cyuVnDEm4yRjXZWkZRHXHCrGkMdohCzcDEbR9MsBccGzQeuzFpvUtfD7r",
  "key32": "CTuNuo9eNr5prqgaoapsKAZ95gQ6WrG5WRpHMoLJBHwSNRU1TGGqTREuSdhvsqmatQ6zLd8srUTDTjwvKWCmssn",
  "key33": "65zRE72V8vPaPrDxnN2h2drr7qiUJ94LtH3dgYVjgTxPo7UfGZThu8bAwx5XAf81ifSrAtRNT91tCnTUmovkCT27",
  "key34": "4W8bK5yAMBXAQ6onCUt7YisrYfVCmdXhKM4npa6pG2dVZqbaG77HQS9ico14RqhAVEuFvrTLCWvYeRpsKKoniBG2",
  "key35": "5KSAcpt917XtTm71orc9Zt3yBZkmRhXkh2wxMXgbPr266d1verQ3XQ7um9bLaSDdRxnHCek7M9MNUCzQgmgL6tkX",
  "key36": "53fX3NSdep3fVrdcwXj1XkVFoTfGgKEaVVMCyfUo2comdoDSUC2aDcF5WBn7cV3SiesLt8m9uBu9ixpAGT5DnPi8",
  "key37": "4xUnXiWCHHpsSMUwQPvECrCdDYGDNdypzRjmnXo82fACXrQKh1KUgAewwXKPsKTjN8mCBuWdkuDoZakF39yGY7vM",
  "key38": "22jZyXBhDtfwSR6wRqVTtZSsbJC8PNtJ4HPJEb5dPsmnf5sPaBPriNfU42HA1kGpZ4QBNLAeLHiq5JgEwXB86EFN",
  "key39": "4uZE2LFp3ezRCK6T5AgPZxzh1u4F5PPTxiowkCbMznbyWQDyTv1KZa3CuV5hjGH4r3F5Cu2G2MAVibhYuUBi6RZP"
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
