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
    "2RCWHjj9muw2i3WnbMkj7f3fTH6BnJwzUwgZC7kFu7tLh3pgMJyf9p6gRdU58jhRVwv7GGx3YfJ1UAQFEhBPkgS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFJ3wLmE8GYWqKjxznRWNrwkVKrnvbNqFBt5YfRjCFaK4JMKrFXF3nMHaZP837vedzfoqR5kZaB1UewXXYMW85h",
  "key1": "3Wzy9PB3JKACTbtAL31uPh7Gc8VJGZPWpCepkooJMoAK2MhcK52iCzkn1J89Lfk51dewjffmCqbr5ZF6JiLKj64d",
  "key2": "3wirs8qKBzXYokf7dyp1zyb59FZLDRpTD1PhcRds8cREJnoCZVHhXNXsmQjf8q9tyVzfHLDst8Pn4eJUdbfUTngg",
  "key3": "2cPrGEaNdWivixBYj8KgRmzZCe2agQfLq3QgzewzLjbzDQwsTSqHNUZnkYPAwcTefp4qDWHGaSPZzxU434e3DeAH",
  "key4": "3H5hcrP58piLWjNsftaCuyqA61Skq5boLdReHvWQBB674Lh1byswg5g5UHCeSEvY9nLHNiLLKkc6ooeYmX7VBiMi",
  "key5": "2wRzv2LKbnnkPavvuf9Dat7YScfxajbLwiXC9spRLruSvwbN4d2ENtVmjjeJEsdCmu7pejrXdrupva2iZMJP5PLn",
  "key6": "RvMbPEX9CYNiE1DvzuaWWeJhVkjKEr3qfhSeeC1jd8iKxCx5BaoaPMUZ7mbG6BehhgEE3ThsE3SGxiBtguPPXcT",
  "key7": "4SqexMx5JmzzCQq6F44uR3NBZVBJBmrvhCio8VDSeqfEVMa753fRt549tT2TgF4etzK4BVGJNARSDcgKHdGy5RKq",
  "key8": "5d4fuL3bN2VXpBhdxQwhg2kWjeqiLsHJoj6LATfCmXiPtFKtiSt5QJ3BMXXi4zi6qNhcEtsTz1ZLexq7KLJ8jMaV",
  "key9": "7FQ6XQmvpNv5FYzXjYiMpwsjp29fb7oG94n4bnjj6mAMZHhKGRoT1bUyRhwJQnxFBBTpTzUGXD3UhtABgsoZKsY",
  "key10": "2S6XwMkMckqxJWfDNew3y4X2eVfAGNUn8sTzSQ6PP14QUMftDsEjnYVqvrWGcyvDuzdvavseqRHwRwz2PhY7BjV8",
  "key11": "1Hx46UoCh56LWTGXB2X24RjQC4g7Thcio1Njen5uiJBzrx7d4zbw4PSUx3SZ1gXqaWHjyKWHwG7tn7Gt2F3yEMv",
  "key12": "2SZtsQxVrHH4syd6ygMt1tVztbj9YJgJDBkko7UFRVUaUTRpBWeYczVJLRTjXLTMyfdzMvvPnKeC4Bwg8suinLTY",
  "key13": "3qpG1CZmiimfcVHh1ibpJGTTrAwwDcHf7m9AHvAbEjYLXTWamiex7xdRdHwwFjogZD2DDMUscmCdmdcYoShaLL1v",
  "key14": "25t4r5p2jGqnuoQQjDYVfPBBMLazxPHZ2VEacXdnqcD9vxAzLvw8p8x5wceA4k2TwmA5GAjVFEB5CqPyxABMLWSz",
  "key15": "3VKwRmtj4D719cergCZMG1WGQyFkhxSbCJVnQxrMwZMCMh9gHTEMoeNmK99vPStHggbESWydL5NATdLKbUTz3who",
  "key16": "63W6PLPndHkcxSKwJB3g5CpyVQi3J2xrpLzvLgZvNbJiwvudtEiuoZmzaA4YxmoEmt3wusPTXDE5BVRV5bTLmoWi",
  "key17": "5wuV27D4aBxDcmfEnQnAL2rz8WzvLHgtRkMvHuehS5vsh9a2as7aEieNFr4ZXWd3wG3mtXe4R1pfXwfFyuRuhYpz",
  "key18": "9Srw1fSyZXT392XyzaynNXgJ1CM8Mg8gEgs43wftAU5NTwKJDrect5FPyQLsqY1YJ3m4NCZpuKdq7EsChiENzxQ",
  "key19": "37aBTo41g5q3jgaCgPtVKsbyiXv5ewrkDLG5ZfLC8DrHYwPPKCJjtskkBvRh9bCrEZuKVXf2RZUSim3LnQL3Vh5a",
  "key20": "3w3PYCHqVGj6W8fto2uJ946Y1kcyp85MFXupWRD7ooWLyUeGP8jE1oF1Q4Eu6VgD4chw9YGFNnApmmXYfNf45o1W",
  "key21": "3RJrUPFneWwY2dvHkrAfko1S8VCcXkZSVpTUDtbHAfwS8qp4w2Hx59AwWjs1tDesmUYXZuUWj8kD6fdb5TAdz9xA",
  "key22": "3qc7LVYbk2hw83VEUAU59qyfFiyYivNnVvDpzoRBXMKr8yNxAoDkqNLU5tLmVYo7xW88gxvSSMmd5tKepuYCXiUP",
  "key23": "uEhRW8unfZ1Ew2hRgseCoS3esm9nML2h1wVudqZiMBBcp4saNCDK8Yb5E6rvxQ5wWpbvxpz4hqiwbiVVJJ6dd1h",
  "key24": "NxZ45K2UFPBTXYHZZFjJ7g9n69DvV3x3AS7hBWdD98qMNBfoTsveeUxVcqz9DA9H1jhCgXrisnC2S1UxAv8Ayan",
  "key25": "3d4jiUvMDtTFacgqCnRyNb3kgDx5LxcoVL9GrD2SPFZ6XcDyyEtsQFta5NqXozr9i1vSkbweNZCi8QrwyYKEpmgj",
  "key26": "4pvFtZv7y9gdzGKwarvdkw7CSSyU39Q66oh8BNCh6y1Hy9DHpQ3Q4BopD5ty9gDf7Bs3GSB5qXAE8eN87g4vc1qe",
  "key27": "29P2RCvF1ShRewzwuZ3JvJxcgj5FfyK4QQw4JoryxqFjq5ozPshzp7bQxykFZDdrBHZJafsW5pgWMdDY2inzjnoN"
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
