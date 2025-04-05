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
    "3aZX3DL3tH9fB7Cy9qo1RyUhGiREvCMD5kRXv7xh3dAUJL5rk8Em1ruw7WXLsuN2Rno4jCQ3TqsuZHQeprLL9NJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jx5PGHRekLi5oqDEzohUdmaZouJUvXMBSe4Vr8TK3PfsH7nDoee1CT1dD4PVP6yb7THx6nXDqnoWQSePZcHmW7K",
  "key1": "qdDeREUzqNxMKjGswZskTSmfs5vqL8obzopbNW3rF1r2sFH7Vw33nUHwYxn33vA6exJVPr8heCaFiAGdb5ycL5D",
  "key2": "5FBAhUSGjCDpkA3ZtHi5xt47jnZEPfXPLEgCYkVWZjqiuFXLaVdHyTrRQTZHNyr38qToHzAd7epNVK9ii9XNLzRY",
  "key3": "5U9hNmGabCm5KGjtGMqYRETqQcRniLYgTF4UjkRLARbc2jfTXX3uzXHe8eMtKMmD58yQogBc4WUZb9sniUjNVmXa",
  "key4": "4PmXvtvu4B6ukq71JT6jNM6dCXg8V8zyAwpWhLw3aE5LhCG4z7UL4bawpAf4CDWRK7DcMJE4XJedEDMDtRnrVvDW",
  "key5": "empfV6LbfZF2cZZvHJcyoLGHptukJAFKLzpP1K7aj3sotPjDyXFD8JD1YG91PmYUQZsbHqvavgmWXwdaRZu8WUy",
  "key6": "uJ3cfpP7WQtvXVnNXAek4qCA9Ca9fJrBWBh1wNeSgETNDNdXV9VqEWcq6BrTs6wBNmy77B1x4x5xYPLe1u14KUT",
  "key7": "3ZVePE7MwgVbnahqwnTcjgXeGMsCCWgDQq7DJL1UtEWbzTjMBoNzCmYpXhUboyGkB49rFQvfJDiUCZMFrkzBpuKj",
  "key8": "3k8Yzy9oDYX7Ce1zeuq64RRN3TjuZ9TPutZAmd97YekDUGvWwRGGVQqSNRHQikrN8ai8UWocB54GWkRka6qnGSti",
  "key9": "ZeiK2uCdzyZWCwiiKBA9GEahemYtw7kGXMETuRjoYK5cVReffHPejngY1VMBqcqeTYzeavMUgMd5hFjRZXx5urV",
  "key10": "2bHhB33WNobxhqLJjzEVtoa3kMuSodBHE5dYTxSp6dEyNM9CGZZ6e9eDzDMzS2QLf5Zzsm6RJdBNKW72H2cJ9nW6",
  "key11": "AadqGXHPuRhek38UuzEVnjPM2YKDbfs6E4GquNAFAfLLWrAfi7ioLT6ZEo6VFffYsYKhuvthkkbYFNJj6yFN6th",
  "key12": "2yRfNPFsa5eZK4o52MPWNrDkvZM8eDbBWP1uB8SkoFNgNPTUNuwRr9xhPNv5hGdetzvsgMmiCfAtgiwrJiwxLCwf",
  "key13": "3dYeWZ8Z6htzXi4ZVgAeJsJH1iSz2AtSfgwurnQyYFfGGdNiuUkt9SNVSpGpqBadgvaxkud39fRafygwjAWujCsc",
  "key14": "32r6tAySXvrWkmgQZrVESQ7VStcmQ9wuDfwWwRXt4sgamXUSRcPruWwK9GT5XEFGQSodKt2r6jfmdC1p1bohBgp4",
  "key15": "474KXCjhQqShGqpGLw8CUKnPxuZZQSWLB1XvJTsjZwz42mqZrMhsKPaa89GD2nHvJrg9Sn6TZT1WFZEXTBCivk6L",
  "key16": "4izM1sM632sZ8FCJmGMQAqykLRQZHTPYdQF73yG32FMEyqN3sTKJpj295UQhxZ1G5go92HQ69mqY3byK8qrqYQ23",
  "key17": "4oaDmGnD246SnCng5XamqNyjKLzFDJM2m2nRY8MDkeY1QkCpGxVafhMaNpiECmsmemYcEhbJCxhLEMpDR9vqTFtb",
  "key18": "3riP87xuF16wakUwRVc55n8qUgczAxVESYukPcexqirj3wvuGZisdmmVyweernyGMLbR4PuAWWdpWZEETVf4zRtE",
  "key19": "27HHz2FB2bqtC23ego2yL3sZfWdoftqdXiyw8YAZnxxQ1oKtapTXeVx5oWFCJiurW8G4sMMrWUc2xj9Bnqt2dDVf",
  "key20": "ivLFupJywtHAzU5fLriyHwDCgJ6mdcM546usPSSFLNknVF6zXmEPuJzsw7UQ5foEFSTTpFfiewSEGSA3s4dHCqz",
  "key21": "2WL1mQQagU5zpxWkHr1J1tpe6KF4F9ZWWBvHqtXsRgjgX9dysEWTxJkFzZCY1brn9EFbs7ZA1SBQYsXE9z8rptNQ",
  "key22": "N9E9SM5F3twsTYw2xgJEVt1BYtvBeKkjSFJnwpuHds4Z2iS1Q2WCjvwTwCX1qYbBHufMA1Cgip9xhuLtVArsbys",
  "key23": "2rGnXWcjpdsqBoQ99ALj1xYT3FzxtFtf8spyBWQaoVs7BbPAPSYcEfKMcktGo5HPPro2VFhLAKriFdtxn2c2fkJ9",
  "key24": "3khgz8M2nMuEzDeTbdegCdCDdMuUd2KhehmkDsEXKJn3qvaugzAw6VHXNQUqHy4qUqGAGpGjDbb7CeoRe4S87VB1",
  "key25": "3hZfxALf8Pu36vvuCiDuZVeCxELrQTnK8SYh8tuRimS58TpnVM6SJSD64MhqXykRdBeWBfMYa6abGronAimUictt",
  "key26": "5fU3rrwR4eP4EFRafK9mMtC1ewqzLbYhS1T9ZnRVi2CFYng6onLdqTSartHLBzWiXqCrPJ9aATQfKnDQd5W5yBto",
  "key27": "3fYsua2AaphZB7LShxhbq2DBocdKFEbqBfKk1bgGG5ZicFMHi5j1R77tJNuzuUwEfAZqShCZczepfJRXi9YKMYtQ",
  "key28": "4BEXPDv38sKwfqvYLsrX9fq3FppzfTrrNpmyrzDYrJzYFfoSmqTEKdtKS8LvdWR8njn6jx9UxCSgm7JpVrGTeCw5"
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
