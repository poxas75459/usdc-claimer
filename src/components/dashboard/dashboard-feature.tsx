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
    "4VWQTMhJcGdgqqifFhdrgVKsh1yqy1eiLMzCx4fmC75hVwhMRUvcabiKjMEhUAkf5WXkzKEsv23W1tBhDcudA6RD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W35H9hEyaPKtPeGqMnxCjpqZAT9y2n5uC56YrHdfRV4TYuqUvrHJB1rxJWZVrN54BPotcjf3cmsQeVv88UsDAhm",
  "key1": "3dPBCykWyo3XUYra57E4rzNEgFSCWf1QB9mfB6joDiWqZrpr7AQ7UQUU6XsPt23KXDXqunHHsnXW3xR3hro9qZFp",
  "key2": "4VChjQeQiuedKwV9VraUvYUhWzBaxZKfvNzafSf8JvdvWoKsUgatgJziD5GS33DGrqsdRpcdweFGNp6CYBGj4PTn",
  "key3": "YSG4vbfw2vdHigEo9jzoMLEmz74TYPqDGEE4Uowt1CgUTNBu6F9JdBowgp7nT5Pf1yVDibkJ5oDs64VwKsjMj4h",
  "key4": "4ReKfZoSVbZ3r9eRj5FY4HAQQF9eoBuY6EeNU8sM2rGLQZZCHF1vacpYxwB923YiNoukpcxfT4m7v6tN7SB7L4qW",
  "key5": "4bTwMmJRDJ4Z85TVLgK9bsgBVLMNb24fXaxmCVACr9v6dcuUJmPBaZfLfgYna2iTVSdZGX8KXJ8jCmR1VdcytYmj",
  "key6": "4QD6cyqm2ka7N98Be9P2KTocbikgaoSAcmoDCS4sVNFfesU4HuuWwTGhUdKj6fUAVyzDXoFpvb3pMaGndub3JxfK",
  "key7": "AedactMWyEKxwSagDPvyuu2i9guUwszUpBQMtuicCcqdDVNvDmzzE1FS72gPpZwnzFnuXmBFwrP14acg46YEcBS",
  "key8": "3qdts55Wgqsd9uZqLGGKksews33Z4vvR8nAs7eosnM3dqXAESL95CkJvTRfNLLdJc7KHWAYbamLKu1KmK6E9w1o",
  "key9": "2PZ4s8bwKcvYVD1578NP2mkwscDcY7PhF7tNA3rTgNgWRbK8EmEZnccoxxan6rnLyTvjrbXnccrbKPQqqq2TS12u",
  "key10": "4LQ2NQrjbhdhAd3BghCppkzjMvqeDjzCqDNUBhkGLjpfJBbHcfmDwxsQVBiK5bkPxq5j9LNFy8tB1LiAQds6ZkaC",
  "key11": "2TXkvS8mPAfcevkiiokwntJBtdLqBhjYpNWAe8vUVzfbrNbFtJBH3eoR2a5NhpQm8kppggo275o3Mf12GZMP3q4A",
  "key12": "41bAwch8sprdrKFdGuh9wzdpTT3VQdwvik3pEXyYG9op9H3GkBrSC3RsU3QRSpvdPZvNLv9c6LZ6XY6PV9tsYHXz",
  "key13": "5Fz6ZysQy6rp72mfCKNPWF5LDrkCs15DSfxaNZXjjDixUrnBCkCahGNnL4rre9J2okRsf1NhEiCuwWTbLmBcEX8i",
  "key14": "2XCyncz2kLmzkbE3k93qHhMZs3ocyHyXGAAG6yJwE84ovEooHqi1Sy3uyNqPHMZpjR8e6nkWfGK8PNHpFPB2JbtQ",
  "key15": "5dZE7JjXrCBYiykcDrQ66VCHzRtmDdEufzrj1B2uT9rzhvEVGJEjLf4w5E3cPgqiCZRPirqYfcQ5TuATVbEz1ntL",
  "key16": "2G5kPEZtaYgFKrNMvJNee3qdySpo92b44aQm97qeUsjGJ6kFJAvmBLcJcP6oJfK7pRVjqffWtwwD5bBYeo78NHSm",
  "key17": "5y7Y1A7oTAonpkhYNL1bs82rNPPtjF3o5HNkU6UuRYc2LHXVYNRauhd63NvaY5HFicS2Qdu91v3FxYjDUfs1ZGXb",
  "key18": "21gLrJKeo18SFNRXe5psW1ZmBzokWSDHPCv5MNAD2rzwqSyczMVxNpF7yH51xRXe6yUiY8enrYS5Qr6EY5a8o8tq",
  "key19": "W7qsS1LYGiN5wHAX5gaKwEN4AVmNz34emtK2YnfmJuTGb4i8S1BuRR4NCRHFqmVwerWrwh5S4JkeDBRiFUTWztk",
  "key20": "3u85LriAfjRL77SMF8XKVoWToesgrFHVmWHRNAKat9n8ET3FR4wAzHq9rpjNUogZ6GhKp9e3FtSenMK5ULsSsowi",
  "key21": "3XWhbpKAtTp4UH2fqEeAjhB4eXMi1UbEQ7nVsy5op3NypS23JaesSPr8RVoa1Z4eubv6FCTM8w32YsKEnxGcNQPj",
  "key22": "4VsjzdP7mKWhxeKBXyhLSgpxz7sjCbroX2Q28s9sj951dXtZ884ixKyovvRe32nginM18Aa3pwpfqowgxg6q9ta8",
  "key23": "2QUnh8meFX6d4dNsGe2oA5BusdHwbJ43bQtUnVpTBHesAfoCmjFMg4Eh1ygQKoeXWHWRFiogAx1fGUo7guqm5eWQ",
  "key24": "3Le3XBvXUJKsEj19aTyGipQdFSuqBwBntpVNTxkK4kStsmr3xe9PamqETgusUBUfWLG62cJZByXwXR8jtoa3W96s",
  "key25": "gxN2VXRMEeV6kCB9FVmJevA1BzdPry9wnhNWDyuRCh2moj73NZydzbWWWbnhivgZLqZdv4r7MAUYhNqVm8BZpe7",
  "key26": "24DPUUEzCFCs1fsR4g5rJpYnXGjSm13xX5gPi9m3FoQUH3YVBgCGaMfSB1FdVTKdGJ1oeNAuVt2RMQK4LrFbrgqW",
  "key27": "5HE4bqCtmtjD5FrbiCntBfKgb5LQrdsJDAurXYmjQha9uorJaipe3FNKaP3W9dYtu5T5HufyACRr4gQUxRMyyM4D",
  "key28": "4eFR3B3Ci4WHNo9dJVJr46haC7nHLQnWGH5E2yBkirzyDK7BMRyXpFfZeEep3ayHSXXXm1LFG5LrbD85pFvywzhA",
  "key29": "5wmKgJDVQWsUzQjee85ENN9Kg97sRubHySJmogKJfLtda8Hg18kV3uAduVEZ5PFGU9q2nXb7yA6unKvfxCTBYY8M",
  "key30": "3eNnTroBTNH2eDmXuCFV2TLkUhBYrN6HqcAoLfQNEf2BWzg2VXtCsJ8qd5NAHo8Nsf7R1JCxxhnZ5fVG4hcQStsS",
  "key31": "2H1xzbPt6QU4VVcVHt7p9hEV6uEVLVjEK881E1CGpkTYiGbr5pGQhACiDnWyaFGbGLWX7zuLsduA1qw7RmmnMSxz",
  "key32": "TPemJEFpqheBWyskVxrzcwko6bd5zFYnGuTSwp2ikRyEH46za4gDe1SRmXRBo2PcwfbNR8iyWXCEUKtv4DHmw3v",
  "key33": "3HJ5VNg1bzLhEXaVbKUJEBeeEWqsoW8znmfMriJPiHYR3RcpHAyXiappiUWUVVsZNGZpq3pd4YAdYhtZ8H9PwQuY"
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
