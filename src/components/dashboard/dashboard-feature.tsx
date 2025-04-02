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
    "4ehEadLvUBigJL7fGtUGTzqgrCPgzzyKJ3gfs2s1fqppYDXsTE8x2CouG7K5qBBoa5eLncSvwZLikTGirzB6x188"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5itp6Nxu61SoegMo6be6oCCwiLM7hPFXaH7aszAGmeWjPfh28qD99muqwk39hY7Uy7y5XWqH3niusBEUNdZuip",
  "key1": "4r96Y99fCc1JoabvPoAY1UGvskYJUgCnfvHbdLCXbLYagjyEnav4J6pp34pDa8F6XEXWKN2XLRhv4fBZKVv6bTx9",
  "key2": "4oZMnzHh69RLXFtFGf2Wko5z9k4d1rXio2wkzkwNoQFUneCTwgpv6acAEfNp3HHK28R6p8zBhJczUTghuAZwF5Jd",
  "key3": "3odD5PFuzxYiLy1qQH5Gt25dV3GXPUXxCWNufq1bVsphqaaK8zcorVpMrfaJ2ASzLu6zJ4nAmgEa5G3SzyPK5nqW",
  "key4": "4MH1Bqw4e55HLYm2VFTAxXEDjoawM8HJFdUBej1akzkX96VrUMcrtGPVk6NJnHXohJY3AHojxmiorQF2gDD3dqTW",
  "key5": "36wTqXsFvGm7scmAoaxiGnhpfCR8vzUWmr6uUU4zA5D9ccyRbNaQ6b2ctV1hBYDsh9zrogNoYhBDX6ferjexr62x",
  "key6": "2yTefi2VkbFQd6MmXDFnbrFJQuFED39EKymrmmj5G6ujZFaDFse23roGhukXcERvg6drfGFNEp3F4sBX7pPisB9T",
  "key7": "55HHy6FbvKbbSR5AmfUU4tAQHVaHn2Jo1VHj3nvPTCD62JPxdbef1xx9xV7HskairJbyY5uxHfNAyA3A6h1MuwSd",
  "key8": "4R7Mtv5RPRqrNEFTGeLttDjp8RZgeBoNkBueYvyqtdxvCgBD1tp8dicCSBS3P5fjPxePbhX7A6GeS4zxYXaNcJ5K",
  "key9": "3QRUrfJTossZraZ8WSVZ3YgHQR26q5oWZ6cCNUjZhAawFFTVzkJbzvDrqq5sDA4z1ifkgR9DUnyKvJbes9JaGTSi",
  "key10": "5zHYzNBR2k2Bt6VS253fZmjdNKjPFWiYBZHHFZrTqX1ajk8JGdDH8R8oaVFqogCVY9PxKcPbKAFULebw4LnC4QCa",
  "key11": "5ikTpHRPE1NXuBuCmB3TRFg8i1RyrFQXcAUvNDj2uiWUFFyKXwfckX6gJHcVdkKfYqjb1zwUNRfs63ejwQE69C85",
  "key12": "4JgrvXRionQoJS1azxvupNLSHvskVvYrpm762LFMoUiG8GYeBxLT76Hszb8r5mAfJW91XB7F4tcd6RUor6PMggga",
  "key13": "5jjYKYsi2XGa3owHAez1ZQYMikuB2wcQ1YZPLq2Rby8dkS9CTGU2MkwdAiiWHABERSW9YS43wju5SGYxu5AnjspC",
  "key14": "5weaAd355hAvfSTdwXhC2da1952YsSZjYpDq89BRjNNzjCvjw1RXh4ia65G3qK3RmyNVHKExRmYea9dj2x8JFWNX",
  "key15": "5tcbvrgoHiCbJripqrTEWf4toB1zZYUnuvH9D3XvuRrfujG543gGW8BsvgEB8qrCP97jRbJvhKWPM1ERwPskGVNR",
  "key16": "3DprEnkK2FduGmMC6s4oVGfUbMwyEwDfo9iVr35aFfw7d1sAhget6g9GAZNwBezFx3Jv19WcBiSY45Cm3eEzM9oC",
  "key17": "48wRTS9PYMsMxFxzKmP62qkvpW4KsPUieDWjysrBdCPT7qjNis8VXn1madUXoMqBNNgVseAuUQiyXT1hK7HZH7rF",
  "key18": "3j8cPH1TdTec6vQPAZwpRtpZnhizL8wXmqZzgjUudXzpqHgMBHPpTWeJjH9s77zQkX6wvTMLXgm5ngyzDmzCFMYL",
  "key19": "Fe1wxQmdfqvDz2iguXuYqrRegEdGShBbPwpcpu1VwqSVBU7qRZDMwczod4CoXtgDF3ut6icpyLPFR6Y9Bih8AGh",
  "key20": "Gn4SXHgrhKJxtpiVieHhev5dZQZDM8eSci6DiuUP8vkn7J3Qt1scCtXmH8eLQks1XM8qqkTSdNaxNdWXkFe6WnZ",
  "key21": "2WhTbfSZdhNEL2dVaqprVPxNV2nQXopGtK1MYwduLkWs8LhXaNrVXcbEgS6Wn6cd2jrSKs587WAQq5QbkfNDP2r8",
  "key22": "2GBBt2Cc4YyPJNm1KqvPmG2PqWrT3ErNyxnn7LYCEV8y897mDP8mCD8u9BD3pq3aM214sNYMgGQYxTnH5cHYQ9xy",
  "key23": "2DqawBkQQNrJgLX7LdEwVSdMVDyowLAiWvEMpJmERy3LMaBhpc4B9JFd8rKKfEpfYTcKhs3qqwsscdss317ZH8a6",
  "key24": "4KsaP6MKVfpqssLkYPQQJV7ikcH6qwSnY5ojZxtsMmXVnX62MsgLQ5Uy8jfPPPAG5mADPfx9HmUTdqs6aiFpToBx",
  "key25": "2nsASXWojGdqgYzHjQS5R2MxTW7tQbWDWdd8QuWx1KfbFXbdf9i76DyWxCua8sWPkMRKXWJRKbBmkhSHn5jKVnxr"
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
