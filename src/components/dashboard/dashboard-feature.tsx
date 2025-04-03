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
    "Ff7PnJaVN1Hk8gxK1uCYMoBiwTFRWkkYD8iXsgiMzM5sbpGiWiw8DwigTmn9WYgCwD4Qh62GW73m4MXn4rRgV1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hE9iEd9Rnow4hiRyzPFwm2enhCnoRvqVnC2Q7ZjfYThWQBUn9wxtRFmij3ps6mzShyvUPqPFpAbsXEoRK7JMRVV",
  "key1": "4wK7nmocG84oKHi8tK646v3KBaDZFM2Ud4Z2tTGUkrrXtXmbRAWQUmLrkpy55Tup2pyaHXr1QtmMVsCLP3wUNNSy",
  "key2": "cH5yPkSkzCrUSYLyRj7ftSMGgNRKpaExrsSPponXh2PYXEUyEniwEiVkdRguHoJYmT7xLK7sZ5zs8noiR4hhq6N",
  "key3": "2wBHuZbEAamexGscouAaoc2oTo8ND1ixEgGF8dkqjCQ2Av47GeBUKNpnK5G4rkijUs8ADXiXWwbMSmmgvupyjSNt",
  "key4": "55vjWDRgWJTkGLRJCpaunDnSa1GUosdktqPazVLdDJzVSg48yA1oXH2kq2M3Ldc6z7wHLgr2i8u4um7BAEWHcgQa",
  "key5": "3K5JxbY2KtShvQYgVwVDgFo4yXmJwM5rszhR4inQGuAnPsZAJdbKYRevMmnKaeDQXDuDqNAmSf6tdWobSfGo6Dun",
  "key6": "2t65RNyj95L52gPQ5sZQg6fMh65dGdroDdwRSfY7GPFSxAM34Yt6isEvTPEEnMrXAZSoK2ECwn76bYQfBm768D5j",
  "key7": "3AgU4Js9obVxF3c44zkRCh8LLV9qiNRSpg3TzrtjmRZADbsG7ZAm2c5i1hqkPUdFAeWyhjNwBCbCF81gWniNU3WW",
  "key8": "2AzYFAjL6JWNF3df7zLk3fNfuwmG4siTQULrf4DiS9xvwkVVKZMuV7tbik3XEVR6fbvALXRciXvHYCnFjyh5hgCK",
  "key9": "5qSLrnRz4S3ChYNwGm68HeGhhwuTKsoBn5BKwwbn6HcV3tyrczGNZd4yK8th6qLYyg22mNJqqwpFMGZHTRNeae94",
  "key10": "5ZaAJmTRUANb7huJ9kfxocTLezYPXns9fUHHJQsJdhvHS9TBN1npqzxwf3pbKw7i6RJP8xELdhsTvyJ9DGSTupkr",
  "key11": "Uv1F59CaxQ7BCUQuMNtPHUCC9cXpXyguRSo9xT6ejhJWvVbCTx5EP4gMLUxaMuV6pKH2F4b8mg6hw2a757cHBcN",
  "key12": "52CtNL6rpah8MpMBa2QusRTchgb418vgU9qVDBCENywbnPFM212WJbEGpq6AYbJHN89SMFdZCoU2i6d3j7JXLxc8",
  "key13": "sYFCDABHrzEDRdjm1733wSrwArMDZa4U3sM39pTPNwwenKsJXfVZhdD2YU1dvKW6A9KzmZJBfzJGeb5W8bzV9i3",
  "key14": "5Mee2eUfYvW4L9U7r9P4zmejnA7LcjbkdoFA8phXzmHSqARykqpjiKRdDAoRyLfgPadJi1TVi1FejjhmaB1dvtzS",
  "key15": "4JAApYLmZoDSMFZu6fZqHRDun9QpWVgqCJYBSbymPDP8WFrZ4eBYdwaRVSUXSzFgj4NZdfEde4bb1YodpjLUSPWb",
  "key16": "5rn3NCvZgQyxXhxgncLnHxQYgx135ek9kZxRdWfDRfiti6fEZr8VxhHQwaqYcKKC2fBMPUt6xoSJrwP6pN7vPjYv",
  "key17": "51C3qppxEGzPfq1TdoDBepSX9S8WGYVGyX6t7JaTZQ5YNjdNE9kEjbxc8ULEkKk8QYtqFoomoXgm3EV8iEMGn244",
  "key18": "4pyoeBTdC7zQMbxwDEux1kUpLixN2VCFmGpsWVASEvg87a1SkPtYLcLJkxn3Rjj4VPynYQzrp5kbdqfXF1yoMkEN",
  "key19": "53QmnvH42xh57iACSS9wjv812DBPY8iopFvvmtypLzVGxV5dGbuhmjhhunHKkziHuuP2eTA8dwBcRU9EbBLLbxws",
  "key20": "5zEHLTctSi3PeUw1wezDoAfmBrzWEWd8bDrsBvGatHq3H3KP2M6kEtBWjgLq2vdDcDnH2uEX5TXsNCoKE2XzPDC",
  "key21": "54rw9MfeszKG628jZbsCNmpJ6HzedUFyyjxMoRC78RrJEffUf3QUfp5vQ6Qy5dwM6VtsXJ92njkX5A3sohEN5Rtg",
  "key22": "31J6sd3ZSz3nfFGSrSSC8J12ZAo9sh1id78cG2CsNaiXAkeNRMy8AQ33aRtetbPPzD5rFSfWfwfp4Q2KEyLCP4hi",
  "key23": "5FXFxRfrhjrSFeuB5wHwRyQpQhmpUMx88nMMR6rJSfoJXPHyWuXAH9cE1bZSiKDBdvwgNt3zkSFa1puhrSm9M1YQ",
  "key24": "35Gau9api69XfmEepN9Yy24VwufH7qyU9rPQ1nqXkR7N9fbrmojjjgKhhPsVFuRYBJHmXibN7HBLYk3TYRTsGM8a",
  "key25": "j24LL5yRREUZD8LEp97edc3WpTU5UxPdaQGDkYaz2z5m2rCsMd5qhnnuXx8bzFg2HbhfV3zotibCQZnqJC7gMQc",
  "key26": "HDHdCUAj7fJuAHaYSpFkNoS5yrQDkXun9h1a4o2kNMs1Wv7a6XHMksaGaA3LUASfUv5LrqxbUSoU8BbaTYooBHM",
  "key27": "383q18RhQ6DHy19ccMgahmYgWgwtD7TDLbU5xfkNZZCEuBLsGeArtDF8B8UG8RE8Rva41B9LrFtyRZSm6EtpXMe4",
  "key28": "4yFLPC38T3ZPB4u39u3WFxGhjFqhfBNHqPaobpXhPrcLkLbAE3axUKcHendXEV8L9MPbrG9nFaTUWu7Bs3zSEV1G",
  "key29": "3UvjDfJ5o23uUUjHB6RPF1pBXhxMn48WqFJfWyaeEFqNzoAWQ5oMhR7MaUZFmGKiVUVxZRJMDdW9NtxS19AzLXo1",
  "key30": "2xGfsvdvGrAEQ2eL4kAyxEYQ9UyZFQ5awK3oM8brdJxkAtBpCJFEQUvvr2Du5cQt5EKoi2cxdH4Swnq4db1gV7Uj",
  "key31": "3i4YUsZCePCMuPD92GfcPGf8cLWpFHjpbPg6yUsgEivKCNkdKKUBnH12cXGetLtTZeGYPokLWorDhnKeDnp2ndA5"
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
