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
    "3Xz2aWya64LXPtRykGpCZu31HkBNXuDkT7mEuhaNb6piWhiS82L65ffcZ9fVRo3vYhbHrqjDNGtv3nnEnwKMX4Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brQctefiJANBGjp8L1KEfKxq7WhMrjm4RkbZ5LaRMu6YdQvx1Go8KNiFPWg9773DWxyMUtPcffAYRBN1Gh5gRnq",
  "key1": "5iGVvzBhxPVqSD2ap8VW7jc37xs28gR772RLMD5HJsdNvihzMeQiEzTpU94gjD5GifxJs7xZzCEBnSVB2ovVa8Ms",
  "key2": "4EFQhcPK6HdnSC7wRchF1CTmQpi9MQdqSYqfA5VGXWPuqEddL1wN2dkwsLdcUyvCyQioiJtfNKXLceJTKjUVg6cr",
  "key3": "3yzYc5rUhuXudPNcNZF2mBUodMLAsrTJva8Rev8NtS1xkPzStrbigt3BuNKSayEqv3GX1snYWGg7q1fSbwyaNjCM",
  "key4": "3KNFy8NGVpkaTbYgtKGKXKUieW8wUMiiScaZgD1e56hHVQnKTJFm4pLysNmsQFRWc7RRW4LUYot8qiJp3bU65GNh",
  "key5": "3xyDLGykfiKwzzqnmQLKNV9y3wDyCz9NpsYnwbHTmk6xjWF5p7jiY9RXfAs3hNkzjEo62EAaX3RrE27T4wyFW7Er",
  "key6": "64a2jZz9BvhUpHa7BZ4DwE7x5BUAciejV9iZFFuKGvCTYBhqzBYRL8DQU9hCa2JUgDPMHDHqUqFW8Kfpnv2TKxmS",
  "key7": "2wka8VTzYFTZ47r9aXR9g2XHjR6JDMEqacgTA4g6RcEvm4GtzqhRRdjUu1nT9i3UazuGDAepcV2gQK8cWkE3xR2q",
  "key8": "5Jex3yxYJnkN2BH4nRzXbgMJnytj7VB87tme1cNFUnpxPXSJp9mQqwdiJAHGUuyYnTeiZZyc4LBins4f7AXX26gX",
  "key9": "5xxBgLmrU43DrKquZ6du6UJkhPYFHCFcHzFqvWqJYnyQoxpLuRoo3WqeXoopX6A5LeyZucUwe62FCF3FeZeX6qTv",
  "key10": "4dXvUWKvowcpJ8etwtnWLRPMnMdEH9AcYmzRa7jtMt5jeiLxzJvY7XkL1FSdcUHB8tEbZewmkEDoyQcjTnZoDFYi",
  "key11": "2uYtYkpM4Tqswx9gTeSE8d6wQYz4KtZbRekxuB1htBtK6rKxX4cgLMa8N69jTriwoQqzk2wAd59iWbuu6c6QtZmi",
  "key12": "MHsT7v7saSedGxPqj5uSchxRPwVBDFAckDzM99rofJdqET93TWU5ndzyCBADxwtJLQgobFaD2wYPHD8pVrJARkV",
  "key13": "4gqAW2NC8oH9eKjrJ3qE2iFRVnRXon7qWEJWxLSZ89BDavd2ojdtBS64MBivRa7aFZcRKQT9QwyG5PqKvzNduuqz",
  "key14": "4UbQBCs3DWPLyJdWPYpdwUKY3QKAAXuECx2RDbC7ywRNwBXKC8m5pLFz7dpd4kgHym4LKXQkZUenzKEVdF7zmBnK",
  "key15": "2XHL3yCGz9ZFNDUcTfANHARYudvC1d8Wk3JDRqe26T2HUSKe3wVxeaAQNmY12wXzR5imV2rWwxyAvhVSGbEwh9Lg",
  "key16": "3o4FkFg9fLVyGAEWCc4ZEujLnPFMNUKVwt1WmwxvbgVFaWKwWqXgbFdv186thZUdSQpunQnnFXQ76ADVrpbzj8EE",
  "key17": "2jqpogdRKNPeoYCecDsUkzU1qPKSKb9QLSWD1p6AndYzExikbutmdHpn1pEGQhKSKiFLsjgsWBtW3bqUtbu4FUXT",
  "key18": "4sWh5ewxC25wuBwiKF77fc6aBpvp1ZUZzVZ3QQ6P6mNvXfcvqL8yoBwxn2qWYJpGoJadyHEGZ1LnyTrNiQ1dq9i1",
  "key19": "3U62XEYqmzk5SUBtgsFkCCdrY72uyH6CHK7bFiuRoFSrmuKsHfTminAYonGHKkpRPJqoJNeKZzkxZ1AjUcMj1aQH",
  "key20": "2417g1AKRt89mdxWkdFbzXRBe6eriYYg527YEVMPMsyurZMGLJE1xNVTjwdttFmsJSAYyRsMYThLp84tPQTgsoNG",
  "key21": "4bGD4zLnq6znusRijHPS44rfqWB175KS7YtxhUzwSbFe7ynVuh7GjNHJ6vKPaVFhuVU188MfrZvPz39Dpcmhweem",
  "key22": "3kw6ciRMD7v9R5jGpaZ5fAGcUTGKWbw6Mf2emH1LP7yHV7ZqHgQVWV9rcMcdF3NuurHszubvZF9xZKwT3vJyKwSa",
  "key23": "25hf4GcR9zCyCxBMgy1dGKqphtP9ijNv5LTUBJHXr2deuxv6xcM2WYMipZmXnXEg8xkX3D5eYTL4qkEHxB3ePWJB",
  "key24": "2fWTZRYNA9x9yqRq7kuXZChHUygVNtyTGQGpyjMEVdsGrjQQsWbRbf137UJxtLm8VF4YERgomDq2zvZzZVULREui",
  "key25": "4nJH5x56LHDTcYda1zrMdjHgiguz13r4UPWVQpz85RscvBfZp3UnVT3NmFBa35WGLTxaqRFJW6j6r1uMbLs1p5ze",
  "key26": "2MJqXog3CcVzMgiWkRhQwaHLk1K3vyyqKPPvR2wfvzzKzjSg4ftMF12qW6VXxM86TJwCP5u87VCQoEDUdVTqkKpF",
  "key27": "5VgPYi4i947qZkM1WQSf9dZ9aRjTGYhyEXmc5LanD9kbkifWYKXsmBx63QxC2ZPhrGUxaMA525aDSUAPKxcrFCho",
  "key28": "2oX8BJQM9QkkMRFojmAAnJnpFrror4PJD7ZeH1EqvJyAuVJpZ1MMgW8ErQTXBjQZ2uKiWmk9714N348TAn48JLxy"
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
