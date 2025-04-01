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
    "uLCnZu5zSo2mfKs65Agb1prqHqhzvXWWckL31LBFCoS5P8pD6QNE8GL96qTFiMnf8yAsMNKbdxdmbnhEh3pYKUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xifvrAGHxd2qzQDsAiDaCdJDrNDWC8qoqQ7GWivRVuVgnGWiCvMuyD4w9ydPXXfMHW7RBjpEa9fqmc9rYbybTtF",
  "key1": "5P76DWLPoDc1v91WTRNZffGKicNZcvXU8TK9QcTgkEzdxdjgejzu5KTdRfvvtbGUj9oBLUQQQoHuackeDM7tX4Xf",
  "key2": "4x13iDnDPRbQLDd7QdaHBaf7wmf2TFcPVgpbG2epFTywK3KYWAP2k9Zu9FRjMSP5LKeySs1gHQBAEMgWCW5qwbT8",
  "key3": "2RKkDrYJsBtf9ecCXeJurZSMRtuaRjpSB2sYJu1CGBQJTLpGgrTfrCeLn8PCgScjAShvft77VNxXUeATHMHY1GNe",
  "key4": "NE7ANq778AyawUcpeJuwgJpe3Hb6Fb9ptyPuvtMRju7f8UjEpLswgtANycw7fDZuBCxA6KVVTKShGLMJrP4sR4c",
  "key5": "24hXN9i1Lv7UnyxzieX4CzRncJbSP1iYd8mFin2sGZYRyG9QYb9Y7WXBmCwQxWXh9oYu9gkhe7aPFGh4gxe4bPsZ",
  "key6": "2HkCXFC26kshvYudkKtdfNJNddUGf5VbU1aXkiTtZbifWP3GhXB8qm9c4DGmpipVWMEPUWbMk4rSZM8D55hKujNt",
  "key7": "5umK8X2iZZ2dyTpXJwNvZ1hT2XrJtiTVn6yKjS67gRqoZnWu5q5STTyxfjU6tVuESEbFK2eqrHzeUPnzFt6hRSzc",
  "key8": "22n3EYngtFP5uFnXLBZyfJmjk4sCEHjDmP3S6ghThsszP7vjauyfnM8NRsnWLY7uUCSqPVTpkFntrjPMoSFgsmXj",
  "key9": "3dBAn6bF7RUn91woGFScbMMNSHK1MMbB2JsiuQH62t9EDWnoSWbj4KrtpQcMmBEPR7XzkVbFtPUkZGsWYSWFZH97",
  "key10": "2CEVVeNsyJdCKKKvhdDVJmpeiBikNgvBAR2gA3P7bTYmwqZVq6Hb15xZ8N3vzMxnCAJtPFriABB1iYahNmjGYdcm",
  "key11": "3wgx4Ht1VceAdKa5ayj9kUE4ED4SngVqHLiRDrQvEu2AKk9FxC1qxDgj6s1vybVn66smrfgNsGybCooZWDGRbLPx",
  "key12": "5MaXsekWsmcMn7QiVeCZhppFvjxqP8EWtTQWSkg9XYZdRDqzfAucgpBLMz8TL3gXsCfkz4j7bGqVVLvQtavgJaEs",
  "key13": "3pLWPEj9fGR2kHd3gZonWtn91CDbJJGEr7FxY5y5AmTsJCwMYe5fjz9HVwkbjcsrnME9UFUpNjNBobY7Y4tBYyob",
  "key14": "35R44o81Nuc9k14KmZE4U4EjqFTDfYcTeTHTm6FnP9LYU71SMpqfyagjcsjAknCEjow55Hh9MHfCZwQTRdKDEuZu",
  "key15": "2p2mMPXXFAG9Tdn18XvXCtLvspcYcfeMKVv3VtqrHHH4iRXAocrSC1kWd76aAiB3fGBH8MNjMTQ6RDirMMeFzaAL",
  "key16": "3mK9ogJtj3b91B718fb1bVDyHo92MDfATNcsdwmb9h4qWi8fgKK9duJHNhZbPxhUoLgLRx2hPDVKUz3CoMSSJHJG",
  "key17": "4GKpUagSVmyUn6D5btomkNkFhWgbkHeHJLFm2iyahucZkg5TSUa2pQJQ2qEdD1GzUWq68APRknR7YYktiYfFr7CD",
  "key18": "3SRwn35YtwpWpFp985cvsrNzMBbjCzFzWkBNfjdy21briB8WonLkAcwoXiiBMjzCqUkaRFiHeMsd9EiYyugFzkvz",
  "key19": "238wJ9RAag98ihGw1pdhZw8FgdJvvJJ9Nyi7TFiJxSwsUrwhJV2iiy1k4funFn4Mvh7nxmgPPxLzF25fekWuQAKz",
  "key20": "TLEcrpBHJqkdPruygVTeGjK6niw2LVBqcFErmXbyow5woEXNrW9KxSUsF5Z8m258Mr1pKhvGvtaNmHquYNsP5Pv",
  "key21": "3XBKSkvFYPizuiCYiWcNtWANmBaKz9mRwiBWR5L3piqYzCQePTmVuzsNaHzENVEUBh8DTfuCkLkK24FUDpdeqaM6",
  "key22": "5Seo7Ls4c3avb6eV1pqxLovaQ8RHwBdaQdJqQcpbhaNRTnLynDd9aLrmHeLiZ3VaTo4Xv9JC5E3Bqq27HUpBFeNt",
  "key23": "5PwsNd41Z39Jka5MLDmgKig3NRMWYzGKSTTY6bmvSizr8DKHiSoMjuS6dDo3Srs3hxxBrwdqfyNissgZbJrUa9oY",
  "key24": "3JdkpmXugp4WTYUK4j3uEaKfnjMD63RB3DYwPYknMHQN2FKRJPPq3FZ6M5wVj7wSZnXrQta6raU5s66e1MZR4AZb",
  "key25": "4FSwwQFomhicRsB9ETYenCudRiB9ysk3bwjkQmyQd7A9AfBjzbdgto7CEpEqpjx3ttM2MCkp4NPRVXubNB1veMCn"
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
