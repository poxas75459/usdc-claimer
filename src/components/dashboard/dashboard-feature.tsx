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
    "5sXhvaVCvNY1VLn1F8gsDvxZC6hxGki8y719o6LYFuHszU2nM8DV8uNAqVUSBjbqpPNvQ7rishvK2MFf9h3rj3LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DxufG9yorH1Jxydyjne5hKe8JHnzqx7Q9NLBmDd8iemkULc51WxAAFLXzSuzsKrwdbiugLqGxPvhhpJkjWkfLy",
  "key1": "3ex3aHke1DRDEtD1mHC6MhgnfLk8JD95yHYHdpqrH5SEoe7mypAxYX6tP5haGtuG6UNrv9p2AZjWsgBYDmeHGF6M",
  "key2": "5ALSbc5zS4tMWbD5aLpRdHtGKXpoYbzaj5L9mCWw48jTo7ChkTETjeSbyug4KKoyEWt9cY6CnJ67QM5jtyGjVyZm",
  "key3": "2qbpZPdT2Pp9MXss6QzwUu2wXcknHrr8DT3xtsM2VoynhM4HFT7487V2pJ3Hp6XUJ3jjsGuiyjQCVv1i8D1p4PJ",
  "key4": "2kJt3nBDVxLAknbkch3Et3YzqNnLxkiKnWt4VEdVev3ECp7ifs66SEsJZdP6hevMWniT7VbQEKHqr84JcnqfwcJ9",
  "key5": "T7dRvW2hGJHR1n4WvvLtFQZ6nPuhbdkaEVZ4CKLq12L4h3b1JgpMBj1LUy95R4sgXbAPRCvQsovSy5J168UJrd9",
  "key6": "G4GWtaLVpnMnF9GdLR8NaBpedHYPmVoq8v9HJZszA5QEuwJ7payuvjQJvqNU49LKZgFtg7tsLSURgL4aBEpGhvq",
  "key7": "4GntfsvMu4gJbqApb48bpaD37UrBpQpwx3ua1bzapLyFPrBYNpM18LYxTGpEyaYTWX2vT1doG8PDpRmVUN3DsD4j",
  "key8": "4fGMNhxbeLqcrbx3cmQut6ahGPF3wRCVdH7txC4AeAvjq5nz364ZbJbKx8iaESZPiQZmrJmDhRAUAVeaU67JvEP",
  "key9": "2qEGKjsV6tSXfvSXDNCUuWSphSdpW34aqKiFS598s4uRwsfsBqpX6eoiMN7h8ApZCYrh33LH696qz8GmdEjmtXav",
  "key10": "4GmdqLmaqgrX3Fpyw7MYwSyAKbtRzxsxnSXDxwEb9y9hvrTat622rB1dXBUFGf2o9nPeKVHLZaYYyHiK6THmXrQa",
  "key11": "5PxgZ2iAv1owcFe7M9mawKoZgYtX5YRuUTZ4io61ifJTgKr911NZQ3axM6KUVmu26URTpoRJDtt65KnbseP1Yha1",
  "key12": "2rksmiaoxhRJ7Ck39TcFWqsyFqRkcSbZsNrV4addNK9KWrY2vUDEKQTygZ9wQytgQnCPLa22PyquTdHRToQfdAfW",
  "key13": "2YpVezWMZouMHicdhHHZAvMmZXGvPTnca8PJqyme989Mw3edof7DHtbfhMGnxnoMqjrECgqyak1nrE7LFXqQJvKt",
  "key14": "EiGHxaYGrHp2XjwMbfXT9aqDDXEgr32jS7zU2nkAksqLcMLRzx76FvvdiYsouPNvZGrr8Vmq9A5JAdCHECm8Bcx",
  "key15": "3Diu8LgKtP1JUtebECRGm6d83S1ZnQQaVM4nDHX4SnRQd213nbGDFEn4Uko1FoDiX9bFuxdVqAvZEbPP7WQYngj6",
  "key16": "bowEm7jdMZSJDhAWNCLoAo7o2UxFdqQVkhudunGfto9nsXmDXfLgje3L3a9JMp8zLvQHQpKqn4NdPcKw9qVdpzK",
  "key17": "xebqiEEEoCoy1YLopsqUs5mscaxbsNaJVDm8mJvPHjZiZe1BizYVKgPkyB41bzupw5chARqu8RDQNLo12WuLpGg",
  "key18": "4G2R97GcVpvhWUkf56aLcCpSiFsY6CtpbnU9E4VKgZVFTTkAKc9KUZCC6bhjocV7AHb2NmDj7nsduu2ePxKpoDeS",
  "key19": "5AuGGnEf4n2xLLizixXVNx6TjNSKuLhmWWTsKqmcuTLk7upKeWuHNJfMuP7Aq1tArihsxNdMTWZ6c4LYjAdna7Ks",
  "key20": "xUeBRRUKBqJKMGgs5pisMWivVFLez8Zm3kwqT55gJg1pT3znMLMwaBHhoQEgeY26def8bwoUAUymkofgQKwLuYg",
  "key21": "iVzJ5zEBxZ2yxnjksYiNVeYxJARNwrn2A4WNPMjm8WdWZvo4zAuvmBz8Fm54SLhRZvHqsKDYhjUgmLj2LtnHzjz",
  "key22": "3ya4cJB2KLkBa6Sub1krM1pbbAAuMsqJxn3iMMQQVvm8tRmeTeJ48uvtF1WiWC8EuyfLErZBnkkbxhezqEqj93iv",
  "key23": "gdEfAg5iwySiHCkC1RBYE17ppP3rPm8ktsjN1TKnGCzAiJqHYdjHv8M28xqQk5SNnBfmKpcZdA3KGYRJ1Q1h7f8",
  "key24": "2RDWMbqXis5afHUdHNFZcikPwqeZed5NGDSTBXt5oUnJX3c49zFXZ243aW8z7j24KDxyjF3mHUtChTPfibHNuRvY",
  "key25": "439LpArGgkD8m2run7FAPdtNjxRS2F12dUvUNWJeZFCx2KDDUYiEsWQg6Z7UcBhGPPEiug4ySsh7Z5SWCjazCjjE"
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
