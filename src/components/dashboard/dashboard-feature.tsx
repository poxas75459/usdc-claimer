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
    "4GaiCfKr4Bv736NCwEkK5N6ae6x7NGXSjjQRA28JHEeMzMzYobyccjgRUkaSYKm6rjyxSA8Nczw7NwQK1UerP5hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAxtF1utYvNZnCYtW6XQmcCEuCp4kFA9EFYxJmP5PqBcVXpmgAxAsNCsJCyHPCRMRE385bG8j7yN62tD1dVhMJ3",
  "key1": "3vaUDDWyVGDcuqj6kTq8PYHiQBEYfrJAZWiXXVXVQGwoC8PiNaUeLBq2vdAKUixZpFYr6Bz2ngyxeFcbpsvqnzby",
  "key2": "3TuNZUxdQTvWkANezTKA2d232dFUSwdbM8bHYdWC9ApgCyhP7reBXgWZbr5C8kw6rPMZSLxBmD9uqPADtfEcjab1",
  "key3": "3piRKFmpaiXddJwtPpTnk9wXYtPV3H6C8vmfR9CQdrPpauoWJ6jmr54NvR56utBajBXsUdfU3JKAMoWpyQBNV3k2",
  "key4": "2aFPdcJpLKW3pdc7vaRrHtNJ8a5Gd1GU6tKHrDZXsa8HxhE2jWzSycoL61bPAf3XCmpZWSBHJurnGRDcPX8sXfAp",
  "key5": "2eDJdQmgZLEmza9CmKv2GdZUcgB2fpScgkZdKjqAQk3SQXNnUHDCx6WT7yPG1V5ixx4hYe26FETsvTvbeTvmYsJG",
  "key6": "3HiiUmZYLQFfnqXctt7WQd1L1szkbvaZU8QN94mdANCf2xdk7xKw8X3NoAzJvpiw7wTNe9cr4qKo3ccanrpCdXdN",
  "key7": "4gBheidTLr4eGE8QeLMgoDqeH9cT12WnYr2TibgUMxBfJwBumTZ1MMKPYVqdQjkon5FHgY8DVmxmiSJd3Di9PzuU",
  "key8": "3Z1PpBcdk1Z6TdvH5unsmfZBeFw18FNAnWNGV7RMUehRjjr3q4vBnoQE3we6eK6yC7yNogCtQSjrT5JUamw1Ab8m",
  "key9": "4iXTTgu1HD8ogwwJNra3yZhSLNfyrU6i3jp8pSY6YEaHMKfUd8s3fuRPnpahmA48ywt2TzdG4xLCsapuvBA6vGdN",
  "key10": "2Xy313XPPfHXdAstpoR9MWJ56BaX4icfpYqxaNqNUHuMpdT11AFawvTPmScew9ywL3Hd9vFQJMyQnviSmamgUeDS",
  "key11": "3dtK7PvmZRZZqesL9xFzmVFuEBoEcSPUwvMVqm6eUxTPKbwMi3s5GbSaPzQPzAEhjjgBiB1TPBDFuX2jsVjvHHWf",
  "key12": "3n8f1tWRbhhsi2MJXkwkuS66QwoEixb34LonxsPcCNtsBVtrQfSCb9yhpXpcC5r4MsVHud85xYGbf572fRaYkr1p",
  "key13": "2KJPKLFDNoB2eteH9EdBUKViWBvwp4987itGFCNcQhGvHLsVZMVCK3gfgXBEHy4brCAY6bG4S1yy6E4ttyon7JLG",
  "key14": "48dCTSAFMyCFsrvExAg89rQxDXx9U5GZnphtbXyy4phh4Y7ow2GQuEFmjptDsC1DuVg6A1hQXbrmg1zshq8wmDMF",
  "key15": "4AAGdY5XqJ3WmGgJmztRvqzfoWjBjomgdpnAYjRsti8exuhZABr5MqexD5Z3mquGGAV3Jao3njv8y5qbqgyKLfEP",
  "key16": "3aDh7AH1tk3qBG4asJ2orzTeaWTzTVDxDikd5VE5MoAaWPhNGgFLZXVn1TqbsRKTgrzPUfqT9XyX1FZkKeAWhMuu",
  "key17": "4musgc3zc2QtaDpwdLkfrvYUP9zBL5r7wWhR1ivzxS6mY5Z93cZVnYraG6GYoiUkC2tL9ZpKaj3kyx3YWDsanbYf",
  "key18": "4nSa9QD9u8pBZ85CBsaVGTNL3Xj8ujAUhmFptaKjRT3553CdGwTfTPph9uFGcm4pj5VYuzWaEiBdHe7B5nayZWjd",
  "key19": "2mZRVSapoEX66wrrvQdxnQU7Nt5DF35DJ6HAwmtFZprnnC5QXn5CbDuB8eEFbHaU5nW75p3QThXGvjhobtgwDV9D",
  "key20": "3SygLLBDa9SMeT1fkm579HiqF563z4KL4cHsmd778v1ntNJ5nEHm2FaHqi6v4XC2DSfrTfSsXDscLJpFnFdKXjSb",
  "key21": "5S4ZTo2Eag1TywnkVKyozvy1neqG16GHqHtHLf3kRcPJZKzcxFEipP9HsKPrz5v5H9QkchRCgvQgpGMb36iuvebf",
  "key22": "44SnbDHBzXXvcKgEgwh9ybiAPAEChTMCBmzkt8ufGrBpjLTb9YdbMcCM74R5zXqaAndAiLyGNXyQ5zByQnn92fKK",
  "key23": "4wX7HJeqEsRrptCbRauvf8BHECcpwZsekT5qXJecjMSU28KUdmsHYt2d2gtqqeaBaocqLwP7skq6XskvnzDzcVow",
  "key24": "44883E4X9LLBED6aqB3C9jX5bfppWiMC4KQ1ReyyDraf9A3KKvdWMmHeXMLHu7xDtx7sDZjx1NjBabrRuz3y6E9b",
  "key25": "4FRHDHf9NUKLtTHFDWTGZg2pyZqaJNVzv7yUMneN7FrnogrdnPUGEQ9CTx9ffyaYZbYCdUFWifvPwecQxWGc2eB5",
  "key26": "StsqEb4rmgKcbViq7V8e56TpAT3os56o4zvLM8wLJSj14g8463hEEJhreyrk9uL6FBgHouGYYTrqQweNihmMyTh",
  "key27": "2UNwo794c2LXMXXBWDZQRwgV7yzA799146bNkasLXdEkPs4sFgrtEyMRSDURZHcfJ59ke3mDPEcNJGHha4QkLzYY",
  "key28": "1bKPjgYxL3N9hTQVpHRhrQVHEWv3HQaUXbYNzW8LtkjV2ce5o8vvBZAY6RHmWYmK6LMnrF8SDE736SvjMqX1q88"
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
