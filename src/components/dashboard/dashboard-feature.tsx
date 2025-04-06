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
    "35RNW3NPjnjrAHQsLcDcAT5yek3T2akcYrcXXyzPHMZ3RHUvBimV7qn1ZwWJDmjjtFoWR3pw4ur8DWvx95Sy3hXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q135sjHe5ckka9VGJMRtnsi2bSUXhEjPz6HbDnURsQbeaVa9VqdJXEzfzKtdq6RPvjEKEfJKb2TxzCJFRejHHTx",
  "key1": "2cLnRkucjbsx7ZeQEiZUaQj7gZzrTb1jGyu1fTXSHXgCiJMHnkHnnEGAzEdGSqWLTxn9rV2iEgjiV76zt6yaeevS",
  "key2": "4Mo3yjsGvLZksUpaqTzSh4NVCZpTeD9fWKVbxkjnCKLtuvDJESeXERjo9nu37mCG2fp1UwG7hFLadGeJiExq9ybv",
  "key3": "4f1f55XSZRJLY6BhkymAL73bDmwSVcg4zz2nDvEim1EAsQX2HsP8pbAFGBZAAYoF3A7DSzhWr6XruK961vq6ibQB",
  "key4": "3Hck4dibVX6uGEDHG3KsrA98AGgbrwmB5KeGHA45Hz4pnsKpYpei9VXdJqquBtVV4RYzUT9i2HjxQG9tpjEEsdSx",
  "key5": "4LKwgRaAFdqa5fL4hUGgtn8mNCqergoCM31F5HPu2kzfXmHGD3rMt8BRET8YXGqvFi78JNp1MkTnRxPiENPL1z8M",
  "key6": "3bfbVyRk6TgV6MzeSCAhxuhZeD7XnZ2K9zHidyVM9DG8QZGKwGYAjcLRiv9RhUVEfYc3SFBKcPxYnyfrd51n4Y94",
  "key7": "2rGcgbjeJNRpS3xLaRat8Nyd32qgbH7NTde1NWdnBa4APzDCs9Rbo6ZmzazHr45DXKciSPzLwr6b8s4Mgyih6w5Z",
  "key8": "4wsJW2J3jDag2S2jUCaHHmT8RukpczWniqvi1oxvFJDKgYLDnNvdMwKBeXvS85SHuDBJEumTujAd26MhqqAnJ8N3",
  "key9": "3KHgRYjGrDYR9ssWyTXs4M7e8JyzzQQqohajXjDcMvSPmbzuGxbnNnBpWykwS2RjaBKyXnCv6YrT79exwVqgyg2c",
  "key10": "5tj7XpbTnYjx3jVubVViLBRjLeLmUAUZaExAP4Uxc1WRifXQ2qQ8r3UUkh5bw3yFp5LnabQrS466KxNoqhCfah1S",
  "key11": "67jnu41wNjqfrVgxodpK9pyZbvzJfR4BcJG2B1HfFfSk5tVUgEjWS9DKG8FwPLLonmk1mGKYjZ9orJBZvUUEYnnt",
  "key12": "3YfQMQpszJXNDkbgu89NoKT1BnGb2vax65tnFftvNyxbL2nrgboeYVNf9N5hH8gEhs76NFxRa8ePiQ4iWazNAFNE",
  "key13": "3TceyLjyn4qSfaXczy1Er4GgtGzbKzW4eSurN6Wx5AgmUecWNvYkWCNfD3iGCUQUmg3xuT3Mnau5txJieLJMVyhL",
  "key14": "5xVdfkniCxEkAggjnwHRTn1rciWbjBHQjFbQCvncuCCNG4wMQm5SoziEQLEJwz2oNTpEg5khwzoN8ARmYMjhPR3h",
  "key15": "3ZdCAbftVfzR3NRTcEc7pNEUhuCNR1yZTG8EwRwWrpGT7U8hjTG1SrtsihZjuU4ATtBfcJSTtij4cpX5LxnKwJNB",
  "key16": "4bBKaWp8uzHnFnE4ww1VoEJ7bhmcLBiwc6dHRvEox14pQXD1ABKp6yRv5hwCwCfDefEW4Y7B9ahJMpUEYHsB8MEg",
  "key17": "4aBXiXPQ8U6nSKeqSHCEJ8VcJi7L9rVLn7dqsDj46VErz7ZU7xkfCoJkh6xUetoFdyLTgo2P6AXSZjLEisQA7WUs",
  "key18": "2nWiUhco4eyLfnrc7SgP7WFw9wGNucSdqnEsPX2r87AHKFZdTu3PDncGhP9YaAtRSnAb7n93gcp6nENYoJWTRKuu",
  "key19": "3brhWT7XXPMaqAx59iYec7N2MFtrgtJB6idTNDnbc7xgUUiADjXbBTm1uqUSeAJLc91kdzp1jdzU6bEdbpdeHnoF",
  "key20": "5kWAjTQTwBanHbjjPgPaUgnqr39QSuvYaKriEpzS7NM6iFzkgTxADVopzB2pYnqpxY2Jk4k3aDiAXkRnBBEzAaJ1",
  "key21": "4x8e8g35k7HoTYtnv6RfoHu6MyWorSF5KSBEjLjGXwvCNFxaYBWWuudWgmNLKJ8JxSDq1vKza2BUH8ATKn2Y67RF",
  "key22": "crt6uZcYnmBHUMgTfk13HeaFqP228THGN7L7irXJevj7G9SbmRYcw5qRt4zNMT8ZadUqawkrSUwb9LyXspErdrF",
  "key23": "3qrDe9s4YiXPY58VvNipVcYwuBeJwRneyJNiktFzFa4RoNWXfiZvyzcb61zA53Fzmpq4VzEX8k9w7Ssc8szBY2iB",
  "key24": "3kJngjApgHEQ73m4czg3Biy98eJpozbRPawMo8gCmNwAnGcWHSmuDJEMPvMdenyoLB2hDo6JzqDfQi4iV2Yfsv1",
  "key25": "3JFiigHMDCgedXq2buRCct5bqoXbauNJWjmgy3i9VYVNt9wd9LQtBSQbUXFrZqBbG3ksFDVhmP13s2ZbZoFxxuYf",
  "key26": "39c1aMSwtmZZgtygSJKPLTgUTxPyK64zwAiMgCvWQDguyLiUoAk3QhCkmeGT4GWuGCnL5oooEP3AFuDbK6RMjbcH",
  "key27": "5nUMnvJ2CyMnmqFvW6BTm6MAfxLcyBfioaQXbRi3QX1s3L7jkPRXiagc5DJpG2BzifDzDHk5dXhUfDJ7sYkNmexP"
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
