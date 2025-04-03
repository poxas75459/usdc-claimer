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
    "27aj8sZ79kmZ5DwurSSCTSb16CDKFMfnkZGb5MWHwVkaAU46kQn1MexksLPhbkfyZPhyz4aPzy7SaGbmCZFaP4g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xcbbQtoNCrx6hjC3LxYsfApV7CtHAoLnUrFhptYujQXGFdjwYqCZnaQNTMTpL5BjULJh6xrKXiTZHr6YMsGnsj",
  "key1": "Wfec3bpSeE6KMZnd6FtTQ24fzGZMo6XLt9GaVe92Pm6GHwn57KXT3B2xYGUCqzvjxGKbJi4qUAhw8YpCTKTYQ2H",
  "key2": "4RsyanFyj6ZgWntFDJA3nk1L6ysFGb1sE3nSS7aeTDV7DBnTiyxe16k3xVGh2XLhu3eAxEcU4aCg11sJWXk2kjo5",
  "key3": "3D5n5tFVcuwY4eS6GXtshLFXDf1WfD8BYPuyeauLQ3j2W9FLAKuyjLMqCTK15eTc5B7wXioCRvTf7jJ1nCufJxN",
  "key4": "5soTKtHv4doet5ygpmc4V2hfZRWkCuC1Jnieq32GtgofuM5FListJUcQSW3wYatQ9A6ZhEQeUKesP96jgSpfGVsx",
  "key5": "5J4FE5VJbzHnQewYTn9JzazZhCegh8FmAd3FXFY3n1UHWqsiDg6JBERVZxBn92vL51nNW4ZS4rtFPvxZ8fzWtFs1",
  "key6": "5aCVFaucMScmgmDe95Q57eS24XgJ8ye8HXCs7tV5LE2vgB3E3cwb6DfcSCyAfVjPbGWq9S6LhVAbom6qLUsgNMk7",
  "key7": "2LUVYQjSHpaX7yYgMHVUsPWyPvK9tBi13MuucxeT9hCzx3Sy3Uhms9ADmG31ucrFjfPR6jpVJrf4V34egEuJcio",
  "key8": "vaRp6MgL8tmDBtgQDTg6DVUVy1xvbFkhFX2RzghnQ4MGXDKRBpbhRzFhuAx79nXKn2fKcDrAnSC8J9CwEL5AoGW",
  "key9": "8A1fsoarAsWrQ4piakf9T6SZ1U77o3z3ksk4fivqwGSEhBoR6KZMQdPpWgdPigpTJ8Fj559EkPEmosVYkEaZAEo",
  "key10": "2rLsaEiigNir3GYFri8gFGgdnBzHECack7WuiSm3tedzCrNoNKdvmHxEEPba7kQgjTYNTPQywRSzqGj2X2DKyFfW",
  "key11": "frgtLbeKwnQMSYLPUW8cREkWdnakTiRMSPKkCNv5QvjR5pPUxGVAgj66TtCNCACeFVDU5q62jPexhYwHywoUbPh",
  "key12": "2HLSXXrmUvGsNDHkvo8HCbvaXBnB9GJqYMZxYj65rZPAv2sdWJPq2NMJPb11W7WXHhajQDr2WXo2uo2BFBfxTfLt",
  "key13": "2CLGR2ar4GpJgzN4Frt152e9Xdq1LTSeCBCxPw4uVpnNP5gEfeLL9QA2wVPc51dLY8PGRKj8M7DnqKHwZSP8Xfcs",
  "key14": "2SE7WzEjPPzFBW8Qcw6o2i14tPzxCLueeRzguJiSAgWVmcfEaMbJ8GkpY3kefGCJCLcPFnAJQiwHL6FCkUAMPmGY",
  "key15": "3Bdz1mHcQdkQPCA73fWwT6SAmNg4GRDGzbnW2DFb27ybBrjqKRq2mHLPKuu8ZbyzmjtFJbQeHjvPcUhpVYYQCyN4",
  "key16": "4wMRUDwNBd5uETNvyiKFKDyVQFJMXL1N9dftnPb18yJ7V1tvi2Qt9rjNV4kcJ3qEZ4w2RbfMxCkmcE8G5FaibEUJ",
  "key17": "4ZXJLBA3JWZpWAiyo5ANmbTgs7zSnANhmeQdp95SNus5PukEDsLQ1Zy6fvrXvqQaHhuwpv3CUwLnVhSq3aDhoCLi",
  "key18": "2ZuCXQVwV1xDev7Y3mpc2Aciwf3bqFfi3aLpQvakAtvDTRqrRWuVJ9gXmLTTM1v348ePnid5kj6Zu8uCKt7eXpdk",
  "key19": "2fcRmZXx1frgCCqiSHzWtynRmgbwePR9yeoc1yBStp6vJ6WAHnnuHvnbZSFN88XKLoeufQbgytfX2dqsYpJTjx5h",
  "key20": "4Z9QGh3ThhFiuZf7AcYez2BcVnNsB6d1rbriVs5LemFMX8kWpb9xWCunKzv1ueSRPvfPCnQGrRNwHfCZXvGTV6Fd",
  "key21": "mpfX6Zr4ggBn3Av6DDpwmw42JjNbyM24HLNNNwV134jCM9tdP8SHoVKVZr1LYCsfoiaGbsAzvVejx1YqkG13anN",
  "key22": "2Qgf9pNNMae1c45kWs1113SUop9zeA2orjfjDpkqq9z4EfC5q8WrQajewFoCh65hETWSD1Beuk29f2UHupGccyyw",
  "key23": "44rKkZt6FQFdG8JoaayTDAkERa9Q1ky8aDsWVvSPrP3U62YuroQhYzgC7rFnZpkKiayN93LaFgzFFHfThSvcS5xi",
  "key24": "5RmCgtM6EL6fMwad4TzZmUDqayGtKH13C9PYx76GQS17RcyY8JrFS5B8aq1UksdfDeo9EQ4zzt7ZkPbJDcfvBSy5",
  "key25": "4B2xjm1bBHdf1Bsk2NaUu2k3JEpthczDuiP9bmPxaEPoRtzU66V4tQZCVBmnT3cArmKa9Xr8BSrs3mCohzQibg84",
  "key26": "4x9xtBxLt6unnB7QCdNkCgkm8p9Ldmh4mVWqSRYPtAmHpt1Y37sCs8MP4KaLJ4m4A477Mf493jqVSabCXMtvSSm8",
  "key27": "5xDfcrSwnQ91zg8wyqfKvUE56hZPAkbnT3vd3DEm4fsT2JTKXvmm9HFSsdykbSGifZtN5GXxf2cnTjKpD4LY4cZE",
  "key28": "2SfXbQ3vuNDMdp3qMLiVQM4Y9rCf1ygzbDCMJK6nQXrdCbrhJKgT6t9ZvdNxZUQybQKocXCjUVBBhdLgXPWU8HZN",
  "key29": "3oKpSSwEPTtc3vgStSReanufX4ShqrDAfKVzaEY9f1iWApZpcd3JUNSvvUxPnsSbCdDrSHeVS5b4fcsnSxehs41Z",
  "key30": "4UT6XSnjsDg1nEstS9FsiByZ6rqSDCieDb4rEnS6axS4EdB9bpE76Qjah1KUehgRcwps9wfk3YBqrCMJ1PpCQwc1",
  "key31": "Mz8Bh6L4EPFTZfR4Xo5aHxHu1JCybneTZEMzSuwvVwazMvxAhdaioiRKSAxuiNoAjNzvKQpGm7ZU28RoiqcFj7W",
  "key32": "R5SG7tnKRutRuVegoqPPwY3q9J3vMigbMwKCTHbL9YRFiP723sdhs8RrLzMACQhAiGNEUoHV5N2VTXoqFMUNjpi",
  "key33": "GUe2HHUHUh81i5Qnup7P8zYi65Vcgt5op8iTDoFCXfJApZzNmACE43onjdTYncY249ej117K4RzEZjxJ431nAt6",
  "key34": "qbmMHvzUHDySVUo3dL2f5YJBN5NL4TiQkcNF6udLFekFdEnfD8gy1pgWVjk8YKYeGEa2YqgKHVJehXZsgk4SDUz"
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
