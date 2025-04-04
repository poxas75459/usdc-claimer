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
    "5AeErqdGzfbLj3ASta4PChds3PoZSusGKVZngXvaBsQSNrxhWQ4Y8nWNFMkG1t5ymrWbN8uAjbZNKc4ttozWzXUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UyfZtq6my7K1CVMws7nAJoTQCDwof9CGuxJ2qKdfcA1Ecfz4VX1VATUyQ2XAyhHfvDVktg98cUabnLsvfU7xMfp",
  "key1": "5KeqN5ATF59JWayD9yX9U52mXxiGqneG15LgihLFsC34TCiY8ukUDrZz3hjQ2dvxt5CMM255b9Wsa3eHHzwyRD6s",
  "key2": "PTZdbzhWdopLjeXaoSxg77RgWeAHhUcyQsBwyVgxGRYBfhHQVVwWvCNPPyaQqX1SWBxKTHMQ6dp4C77SsJaVZtR",
  "key3": "2AYcWRVLD3AA7JwZvwGyMpxiVXjwUR4Pb8b5CbrG5tE1WCRz8DCL2kmJGGbRCn5f8XKBUSqsuR4tEA2ax935kTad",
  "key4": "3srZyg2xTiKbz7zZx5bRaVG6b5SLS26FJHKLjKAPWA3UGs9Wp9uc4JB7MioRhUgDsPETE7xGzpZ2uRqxFw9WrWgD",
  "key5": "612XSz6QLfFbkJPJh8D1LH3KhabkgNMrgGFkBfaGxS5JK3sbVMQWaEotE3SnYHa59ewUtkMRr9CAtXWaqCcsdkK8",
  "key6": "4N4ciJJqjCv1rLZDcR8D51qVzLRasd6sBC4CrvjBGQPxkxtDB5EEbcHtuQiKYXmisiYCfVvD1p2oxnuWn567THYf",
  "key7": "5ytgnVPY59c8s2LkNtkpeKW5zksDeW5yUr67iDfYqucDQm4n3f3LrKTELzZvtZkjFeU8fUrgifAo9beTraHEmfU7",
  "key8": "5Cedk3hX9rHSy6MR1xRqvC4wEwF8D17PwtyuQvECnUYthF69jWvBhFuWxnCHK8J1sZfpgZnxUnQo1w7phjRKafhA",
  "key9": "4sEjKKDAcgZiU2zLzqnscBh52bGAenyRtbQbRaNdxwyAWa4hopwVLeJ86wipHRgzYRrSKgCwenYhsxkqeNwQJVw1",
  "key10": "2ggpyS13orf8vGDDN1S3L9e4jBkdSAXpkxMPbHqVP1TtcVKmbYHsSNyLze9SxMnXRSaDMpEM4sMenMZY3zSScitS",
  "key11": "3oWXv26PbcLCXrLAbdHFez1GwDFkVQHwe87616ahrYJkrEayKJoeJFdvn8ipARx91KKzLsNQD1aC9bjTbTRSe7gA",
  "key12": "2tpko2gKfoZN7qPm63rR8iU9QkRB2gjxZDmcaazyVEQBcJ49mCMaMsu5bW1cYaweiXgYE4rAA2qT457U7KYSp55r",
  "key13": "2z2so6ExPWHqgYvbtaFets4XuRwoe2kxMz2J8BfWH1pBaC93ZdCiTLF3qaW2QM7vfjq4XPwBWjskfzJ2b1FqVpsj",
  "key14": "3NxjxyaHnnzDNpB3PwmScAQqdLmy7cwdVbyy18MKWDDULvPtL2bAuXnJbaSCkzqryiK6EQ5MFZG3Q7iAxuEQseVJ",
  "key15": "5t7VNQPvGYUgj33SbqZ4rRXTvGgA1vrhnT3qgFfBm5MMiYZB5pF71ea3kQMTiuXuRLs4oU6Wroib3b7vikTwD5PL",
  "key16": "4Sh9ymavkCSLnWEJwskT9dUvzS2GJdsUjwxzJ5y43LaRKzu5MqtHAvVmKHSJnSTmcWh3XsAU6Z8exTo3iCGYTqm2",
  "key17": "2m2SkfV5xYPmpjMpE5RVxQWazko6ZRB6zxnX5odSYr5T3guh4oESVaEfCoPceDJGQLXiJfEjn5KksiJygzyzXdJ6",
  "key18": "3J4MC95pusvn84oTaEDjEQTm4qqnXVJfMLFc1nsDxDSrWJZGeqMBqokL92YMuGQDQHb7Q5hm5q3MG3wWjDUFE1E1",
  "key19": "4nsypbeSK5rzR2t4ZQE4TyDMWpRwPbScB4Aemx4pUhTL7fGxuQGaLaGxzjpZJysi8bBnEfmYhpP12Syg1anZGZTx",
  "key20": "56FjVVCVi48QYmtazg7JhibexfUEGhkNK5xsMFHHMo5nJrfEGbrv4wppdbyz62UhdqZByRQidyjjBto9vDsxRnKd",
  "key21": "hLW9aFMPEZKdTWxupT1EPKcuhUG1Lj853sU9jjjJEHJMGeyvweN9mY28AbuiEHFZ71zg7zGwv1fdXtfm9hPJppC",
  "key22": "5gDSR3XYxzvGxwqgeK7TAEd2yDceKspUgsCneg3hRZtipUF7C16osHyCNsq5pvsXmtaetR1W5hCvWLv8JUQ4fU8W",
  "key23": "67G7y3iaFp1id3HTPoNK7h6JoQg9DgDoemhaHBZpmxnXuxmADcccoa1JrZTeFEmtbatSH4KiFeon5PbYit1xiycr",
  "key24": "3USQoPJAtzKxexbQJZc9vaJg5pbmQqeLEHXcZ58smRFkTLSbstNW4sqN8zAYzPDF5sSAJmcghBCeR6rcXmvQN2P4",
  "key25": "3Wpugyj6y5Smxn2MT24zDNg24NpwqJ2MUmD3is2VpYmkBZfvLK88ocBREyxte4et42Tb6FMUgbhYRJV5MRLaBXj1",
  "key26": "tTqwJYqMcNuC3Mk5NhNQ1jw4HXv6ynCbjVf2DucWHyP8LqvBUPuBy5mHbk6GTDPRNpTthj7bkHKPKR9c29bm6dh",
  "key27": "32BeEPvFzZKF6sBTewB3ASEKgPbZRma6vwoJ1xD9TVhiL8K5bS74fgaKmPFM1pWsed8EybMWbSMvpBj2e3DjFvt3",
  "key28": "3Zjajc5YVN9r4LQSG5GvE9exkbsRqmzbaMrCqvFUQkGisCNadzggTZXXQdAmi8nhh5LFuGkez1hUGXHpiuDPLVri"
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
