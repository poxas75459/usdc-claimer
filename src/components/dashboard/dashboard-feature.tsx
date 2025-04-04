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
    "3nzseMXNkXhccU6sXUhgUAdNcFGmwKZS4cYSkzrJgT8xDj212sNeoV32vAhYznXzXgDecb2eyM49mKqypeGm975E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbQL5sZJFkT73d7YZDE1BrFPD5qHKbUTxzaBQTXsmbZPpVHoSbmsRPBJHimWfYhdKBrY5s8QURv5TZcSs9LTEsx",
  "key1": "3qu8bbh1Rz7T2bkvGJSXmymeFBsvga3Artj69zaedCdYXP4LGgL3SgRv7kHAVz8E2D4dCxhXKpSVunfEoJ2DZZLc",
  "key2": "ATH8FiR3VEkB2t5AmodUDiNbYKzVTEwQcsQ4a4NTKzfzaLRWJxhkSEpaYvVC31CcQZioiDXbmCiJk4ZLLV7Keai",
  "key3": "2mJkA7rQeUxrFHdmFr7xRPJ4VrXBMGtCgXVS7BZPtz6ZkQjne6ZRZCjpQ1cp7XnnzXWso9qiSgAr2g98xP1DaogS",
  "key4": "41R8u17FZmNckYCD3zxXJndj2F68WSkgnF1W5HPLXnRENdmDZEsP7Kf1T8qmhky6Fi5sqahQVDrgqQiLyRXjZAH7",
  "key5": "5xHQCn2b3PFNjnwyFfD4TjuyG3Pox6Kb8Nkm5sHhQXBzveDULkeBPukQ9HnDSerz7983oiCVy2912y64aVa16Z5S",
  "key6": "2hbtCFnaBveygP9wKUfFLqmQVnJVyyv5yngdtWsLPTkGAy2ZKPTwkiBgn5HnWPsam3s6ANQNasL6zUkAHHDZEK71",
  "key7": "33Fyf72qVk1jci1hd3tUD5mc9JcpMkPioSDaWmVW2qXyFbRvm3sEAX45m2oq5KFVhiRdJ95bWcvxWHY59tewV1CV",
  "key8": "qndGseC3nVbNpThu8DjaG956DhJW7fBGzgWpzN3coZNGqW4oDEbGny9ko2vndJQXKMwYNMoQC7ihPH3jn8TCu3c",
  "key9": "27tNAkV1AsGnTYnhUQDTXQbMSZJph3U1bL5MBQD3vzpFgAk566Tn1N7gchH59YyAcCi1YNMdVZfkTzrmdG6c2N48",
  "key10": "2nesWmieULstQCVC1SpAjK3xkSTGrpwDvoVtcg4Ed7nCC9sLfxgZFfZgFDMGp91wWDw9fVnzBPnv9QkcsrgMde9P",
  "key11": "5MYXgHdGtpJnYaRwr4jDRcGr53SDsK7vsie44CJ9JywNpq4pCPtrBoVTNCF4FFaRW1q5QbdNQxJj2yNFrjzMFYCH",
  "key12": "biSNUfYkTQYUUFPi93q4BRUvXWoq5oZ7i47eXKP3hyrokdd8TGtjt1CeUPpqzP3Yh49n3X8uezCayuGEtz4JZmK",
  "key13": "2jHQrhsZZjPKoqV3fe5nX2Qd8HVGBUvWUbKXHyTShVBAr6CrGWfCEa5vW4PXY8CmWMn57g1JQ1XRyPRGGwjESiAr",
  "key14": "32Cueuzs6YKa6j5dqnBT4ZjA3p4hh3nDbw3ZdnYn71pDUboDkvaEFESAyFwwd5KMPbyZYsTeamA2y8TrDDGFwdBR",
  "key15": "MFhiRkaHhWp1Fu1gR4jqoRjPhRR7HwzF5Yv2kWfTAjpnF3ZRhcGobo4BVwXb6ZYEHoTZPVxfGvqruVc3z8ncyvR",
  "key16": "3vSShzDVUYd8WuufuqL7xpcbsYXEwvxsNoWTHCDHfcgtA5KWXuHK2rWvMKu9WoQeXqNED4a1mxwF44oSGYAxDWaG",
  "key17": "5pYGKKFdA7uMsTWh1vHtXQrNRuauvNDMaBDU4amAzhwAMsD5bwXiSxZcX7XAg8ZTgcRSXfzyzNpAMgH4oQUc1QS2",
  "key18": "4pHyyRq6KHhnGFZUKZAeiWyfPphW592Xce7tNdDeST6JFhRpHx5F6up3MbVp5hKqKUTDnXHYmdQFm4FBJU7bLxut",
  "key19": "66Ukmgp3J73k5vbsaHMVyyyrVCRwf6nTfz55J4cH7wmfL4TtW5Q7hTDH1Xym2Fijz6bRhcMNEpN6oNZQACAg2h8P",
  "key20": "2qSKpryRNMbRthtar6X6izzBfriqodFBk9YFvfN51FbubaB5ePNTkgoFzjnSEn8HTHoeLqgeMBP5nthGRp6sYSdu",
  "key21": "nCS5jQdUdGpZysVy15QLRFrVzwS4HUhYPkFigR9EFxNppk5JpSN6wE47ewr6g4KaUBu4oEbtxzXoRoVzgzVB7hk",
  "key22": "3BVRxR9dM6TEfju2x1DeCrY7rev1neFAUDNXiuMXfkRr139tkBpGSKs5UfHULjVjDF8Gms966EeBFTekGRnMjax1",
  "key23": "67osLLMeKH62to7cNRAHzCywwnVwdy2cZQamaQcaHmzT229JJQYM8ksSz5zLeeJqs3azdU8qreyGA4bqYfsECrse",
  "key24": "2HJAxoSxYSXT6Q195G6ZXomRycnXCnbLv1xocmgpacTaEDXbdEHKFtoP6fc6CDoEnq5yuTdLthmA5fb8ETmtvpXQ",
  "key25": "43u4fwHwpbiUcFhqsuXsukLTH7cQEmG7WcebLdUrYxzqsJxKpRHkuuZfufizE9o7BxbV6rHM3fGjn6qKPGWW9KtJ",
  "key26": "595BJfdC6h4hwRidxwJiCyUuQ1kcnJZWRTbJjNptk63Wf5Xf3zi5pwuRtmyMWTx6y7g4u4dReRZH4NWwPGRhFz4F",
  "key27": "5qJwwWTDUNiJbL3T49xk16GpkynWSkQ1azXYQbt51TBe3vXZrJdojtK47NtCYqjayDJmFwW41BnSz55irtRwSUkY",
  "key28": "4Qu53pJ8XWRQ1BaotzYuakf2Q75qzJKBq21W2q3K5ou5sWCivzgG9wpG7dGKQS87De4ixh7q7WhdU9aRh7tLi3cS",
  "key29": "4sshUQuiryQhnh8Y6xTw2CjEdNMjQCakfbmNpuYcmsyeMtLovJkyUQBP3m6a5kgPbgzZcy3dQF7tzBX1YMQGQNZD",
  "key30": "4NdaiyTDdcRwhpc8SkJrKepLFes32F9JXbtZzePk8XZMbPq4EYtRV2rC83QiTtyVWUk9irs7SBx3xWxvQbSNdWd9"
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
