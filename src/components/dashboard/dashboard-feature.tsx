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
    "3Z9auxFg2ePM6ydUaYgdNi9GRyNsn9E2CvfyB5JSPMrprUkLMS4XxVM1hjnwKceiRkxMF9fxkoEtheXBRAERmXWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmsNArGpZ2PqfFrhbUr8cRBrrfrUZD5tTgVW58Pq25EFMddng8Qi4wjSPZj8JVKuVpkTqzSx26iEQx4GvwSfJSt",
  "key1": "5XVMWXVsGmyNEVniSn1hESfZBJWkaomBFSXmW1CFRkBg83T99PKp3cR5J8YzJNqsHjfdnX4Y7ahjxnFctp5mL7Wb",
  "key2": "2hfb1LEeLt1jqi2diqF1tWwMs6NhBLqTvvPNYwU5aTRSfzG16wEtvevCBqBMy4mM4v8GdZbZK4McuAkrMo2iaop5",
  "key3": "5491f4zFwKujyU8BuefE3e8oAnApjP3V4GVMH1wLxANCmitycyRrzFXcVDTgtkJYHGthLRofJN3YETbAAfEk9QYx",
  "key4": "33V5izxFYRVTXLKLFTWUiXMKF29yw43UHHkmosJiTk5vxA27CVh8ycugizKgQFuvMqg7qjak1NyV7nazsRW8VmWU",
  "key5": "5ubrJhQsYC2sh3tBgJv5swdLhgrXUknJaPBs8kUrr4F3xEBav6VegbJDm1gNdYHqLcrrWsRcCiK1GH9wx6qP7eZG",
  "key6": "5e532Abz2nzPuECP5KDytWRnf6x1vmSTBbEJuPMpwYMD3FTszBKA2EYHC5C78Rvnu5g4zbkNSU8ypupj8BXjFyuT",
  "key7": "63YbKdEjiKzadBf2a4qP7khGXYqP1FjsJ2kXubR3GhKsPzpqVdVCzBbF37GGCGv3ToQkmWkBAzSk48QLMsMdADuK",
  "key8": "4rNnFfFLf8DHrFM2u3NtgoQXhZxaqWKQCXcAPiU68NJquaU6XLQT5EH95oYsFHfxPNxgUJFegNkAB8LXV9u2xifV",
  "key9": "4vhM7SWVdg5hh5qhce1AwEzsBwA8H5wNmNqBxU6Vi2MhoHCiUMwAgzjFyvTkWeEbaGS3kgVgKh4ZT7QXJYRcEo6C",
  "key10": "3ocDPDQVozbJ4PBbR4b53nGMRPmhYh4z4QXsssGNQJbmoPpP5w3MY9zds3QnQJQLLLoJv7wfGXpHbLBCZZEv8mD6",
  "key11": "5yzGomYnGd7xtcZJjRYKkBd4DAzVyfAeeTeufd5koxaNBsJZXhpjtSMaF6GKjSJFL9mTEd6uMX544QQNJLhRrgq1",
  "key12": "5DCsnPYqJsGHtrfw84adbtuwpYSjtSsnNc81VyZnrD4zLnTwvFk9qKW3CRWrb1howQieBTryCQ4iBfBYy4Qqrxd2",
  "key13": "3s1MH3a4UXmwHKCvE4VEVFjP1BaqRx63EmmTtWLzEmbnZupkcbbo38NobwN33KkNR9wwdJhNXiicnBQudVaU67fK",
  "key14": "FY4nZNTaCG8xA7WydjYqqbsxus6VqD128VJukq83PanLeiiXQCfa5a6bfAfNN6zdhk2kvBFzDRXub3cqydu9XRD",
  "key15": "3UbBaomLYERy5H5XkabfQgfSJNN5z1pWGpr26wvtVroQgHe2eTDvPhbPhb4qCzx4fECQ5s4fYnxm8esnKKbPdimB",
  "key16": "3CTYYo8BKYjGoKgyczs1V6RfbiuUPsbSjwDYjfRAAZmWu7ZEtAPzsibuphx6GbQe7A1CWxh2jrLdHtiHjKCp3w96",
  "key17": "39R3YrF3uaYzwhhaf1zv6XT3kYVXAzW5XeQvKLtcGSFYPN9KFivEjCuZi9uhyVDBdTWUuK9HAqt8JExyGcuKDngX",
  "key18": "n1Pu8LNhQwi9depbQrXiBbesaAsFksRAMWLGo4ax7MVyeQmC8xUjoX7mu9S2VJNhmrTscPRFnUDbiTXSBGK9J7a",
  "key19": "3axzSS5sR5C5MvsCzXgsrqLHeuxmwZu2mwHj75JzxFaVUb9v6u39QaAADqJYgg23MnyG6UVNVRfp9Y5f9hmke1WE",
  "key20": "61HZbLcfMfiyCNhBUcTmoBhZJYLbUTwXH2D1CizupfSax6vdyFgB7vFvU89pajBYeihxiW92Ax5W245j2p5HCn8J",
  "key21": "3bMw3vioNDQMByPg3A2Vj2gnXLDcsXEFcDXhDa7Z8PLNMF1ZrDFSBf2t4HSz9cngs82UfEXf1pocoKqhvHo6FCT8",
  "key22": "63N1MzNmCRbo42pJc1Paoc41eVpduD5tSEUA1hSqrs3tgNFWyktPenVDVMKxMTVs5vZ288yDo74b54cbzM1sKwDc",
  "key23": "3Ugf3L5wnWzyWdTKQ9Y2dbHF7YstjN9c9YmN3YgMu67qtvMS8VGDT2qYkSJYXv8Tn28nAakySaNW6sA2PQLbjUmx",
  "key24": "4ZruZZ86zEtT9UkA9GhQEcKvC4vvFxX1RuThC62Nna834LPTDdyNh4ujNB6USHVkW54F83XD2VJb2CdrSLk1U599",
  "key25": "3UcuUprYDPaj4ccefHSw8b2GeLRo71VnH11Dtj5uCpoqMF1g7gSBmgeKSc78eT6wRkUvrzgZnF2uwedx6HsD3K6u",
  "key26": "rPdEJmZJrS9o4C4uQmGdu8KPmB3GwVg7j1vkSXQGmSrgGmzYkmociazZG7MmtTfrqxSSDvDovoBbRVVsZaK7t8Y",
  "key27": "XPxWA1uPKbXHGidLJbi2BY5fbbCX5iM3s1XBJpWksXXm26HonWZjCp31xDToygeWR6ooKEMSRbxVYyLFhpiXa3V",
  "key28": "mojV4G75gPX4dupKgSzyLtfSFdub96apPJxwAeg469tcuYxjMyvWyfQd6bkz6J6vGCErwKJ8gzm1hv5wrutTGs6",
  "key29": "2tWL9DHoe2sgEs4yuZrB6MxmnCdsB67VH7RpKXmqHQnGJnuCxEvt6iNEFASi5J7yksnxq8H2F79Y4nUC9CdVhcUV",
  "key30": "28dntZ3M2BCNNz64T7ksGAeF745JF9gUNs7EPdnrzZn3Bnc4HhfrM7RD2s3MDua18T7SSG36YeZLdub2FcqjAND6",
  "key31": "5RBKN8RAMomjWo79g32MP2SRuxtomegQBQQdGwFKDHTmUT76LAHqGM9AkTfY4YFMZDq3jLi1KyJWDj4h2Zrs1YoX",
  "key32": "4s3fFobrEGabYcZ1thAj2xZgmoNhWmjXNu8Aurf2Bgr1GZkH3SEH17VyRZZyeuajzrVm4F2pt7YLxRqU5u7vDR2N",
  "key33": "3jCdHgNLLTm77a76xeYpCrHzBsXJzfxBCjxcJsLvaVPM97kXLjMUCuFLmmPimvKx9pePcWgwtza5KZ1hYqzWFCNy",
  "key34": "487ZkX1ini2FGfSS7YbhY37VPAr8dEHq3C1fxPZD85TmiBuyqzMr9iGz9LyogjzXX2wC5yG3b9fmW7t5b7SpemdT",
  "key35": "29hD6ykYaAFwbDBYqdCVFaynFKR9fTXyqkqs1qf4iZdaVb6LYJK9xcJhPrTDGtLfUjWPD1FGw8pyn44gKUvahp8J",
  "key36": "qCDws1zRtBx61RP8NAmwvQ6RCj6yQikGqqGKs2cV1GU8qB8emcaAiQz5vddJfsamGPbuG1AC1ebEaBmx5j3zKX1",
  "key37": "5bagbvSEqt45QKk99p1GUCFTs2qrt6ZqgYMMR3uSjsnx3yTLzr5cwMZBso4SNVqa8XAejYDMqTNBSamnnkcJLKFN"
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
