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
    "5onbs5taZXdJW3krsnjxqVBHo7Zupej7jdrs8pfjzwfWmtWjiLNmXfULHrJVH46c4NFAz7VseNG5b7qDf2dQwK7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Jf4YPmgSqPM5vP5PmecvmfsmaTT9MRUjv8mJfQkiT1ffASGfg2c6K78QkvhuNftoWU7k2g6w83kyxMcp3Ngqk5",
  "key1": "46niYjWP9RS6uSE7kPxCpuKYvp4NpencDMV2jhZJAi9PwWVg4KDmaJbijhxJH4bp4XvxRTPiAvLpieKyKeLSxbwt",
  "key2": "3b2pKyCQD36m4MDJvFHwLchgCM2t5SPEV5bobVnX4ZX9LyGd9PHawhfpy4eJQyjT5AWKyqoUzqDZpJst2C36EnsC",
  "key3": "4XyRGFyvkgbY3wXoxytDyCTv9tWSWW2pySrEjnapYZGRZCeHeZUDXE1R15GMWHJWECp9XLsi2qFKPFvdfUJHjEPb",
  "key4": "euo6N1GGoJs6eKjTbVYU5fSG9rnEzLE5ZW1YJSEtct1E4uBLN5Piob9Y3Rq9VqR4cXXotWPedjzDd64mpUqGV5y",
  "key5": "a4ganjeJmTdEoRw7qTZYvtf7ioN6tkpMon1S1P1VEEzPNQ5Lihh82GgsxeFBCyWSEUs942zDyqshq2MeRjsnuWz",
  "key6": "5brU8xjA4AudjhNsxKwrrz33eXD4EwtMs1AWJzLSHoJ6CnYu36AR8BuoK8iFvG6AmF7keqbYzVP2iCKgShYmntk9",
  "key7": "5RGrnRja84qzmS9Z1chAyGopeTQgSGgzX16eWJJgdDM6EqhM3vYKPjFTfNtoyzGWLzD3fuhRJvfaQinDcFToacKm",
  "key8": "3XXocipPGHybiH5eZSuVdbQdSjCct1APL4VGxDmCZvMGBdTwCxYXnxA6c9Hbk9y1byBK8aYzHJzgns8jUWKQuhbo",
  "key9": "3AfxAhxAvB6xpQ7m5LaN1n2MKePk7xAuQAZ2thnGTgBjHPxERK9WDhqpAfkrnvWTyFcMgEK6Mq73mutWMHQ5b8fQ",
  "key10": "4eJG5L43k5xkEivxe6FHcbnkqYD52E8jHvJfKcdtEsGy77U1rj9b6z6L2x4UyriBcEqUT7bmHYb7bFPFkvLKwNcb",
  "key11": "3ENPznEYFJndYkgRDRXaThbb4Z5B24VAtSjsP227XNXrsVYAJVwxj4bStC8QMTEyYkF8rtcHhaMyD7xPRhZG8SSy",
  "key12": "HvPFHFsRHGVMqLkem77QfUCEjKHtuSGbh7SJzkW8xLFAH33P2MJH5pCFrhHrz1Rzy1HcuMX6azyH5iCwa5QH7Kq",
  "key13": "3ForPy8xMmGRJ9bsDk9Tg2sVfKrmkPFr6XMuNpvRu9NHAuzJ6vTg342hbLJHohaN1dnDLeTwSZtTGEFE55G8P2mT",
  "key14": "52ty66KVtYm6uhTC9BsyZsXkfhmBNnMDgkioK3inEGuTmgfFUdfxWW8Aw6TER2rZCcCZzyv75GGLZ9XciQ3TWZAH",
  "key15": "3mABGLKdkibLJYCquES7pwSCswAneSHfoWpCPsBSBX9vQmcWTuKUN2VMDM6HAijMNebSypRmT6AH4QyQrkLzHB8n",
  "key16": "2zrdNZzW1Jj6U6DDytDdi2WWQELxvHQHAHWqQDU3yfSoaaBG29DM58upxWaUrmXD4TB5rvc874ayS6NYpNNCYTWj",
  "key17": "3rmhMDEykENxHyBUtr9cYJU1vus5w1MtiyG8aUwvsngK3Vf2mEAUuyxf1RSidbaDNodLrX5dNSEkkJdcRou8m2Do",
  "key18": "xvGZbg9igbTGNR6RHJMiUhBEGvC9rXEhe6BcoW8pc3kw48VguiCRyG8qBNAhFUEhLsZoCBjFkyvWM9bbrtNStUm",
  "key19": "VExHhjvDRDfKkZhC2TzowdVsNtdrKvppxVkeKbiLyaReqAPX1hagGQKhc4NGVKNj3WEeARrBGbJKA8NRCgSHvJU",
  "key20": "2FTB7okUWNWsA63aMmr3c3uYwJ46FqDLYkkEqihhPUGU3jzVsGg58RuvRgM7hwJF6GeFZKQpiS16fAnrWnLBdc3m",
  "key21": "aEpiD2zrfDNqQPUi8iM4VyZvnGgsYRe2eWdCBuV7xYWg2zFJQMeaSV5AZ51nEB7a29RCGP1yBsw3qk5wphWNrTH",
  "key22": "4ZY2a8dxsex7Uy6d6CfUkMXiehpjZpwVNhG8hwAgBr5DQVnPQwnm852PpAc3xCe6xQHcv6RYGrpGMBWHMi8rjWUc",
  "key23": "2chhJSgAanDGdRFgQE2ec6Uetdr7R5KFA9euxafLyPFkMvMxNgVXSyBcXkJbjTfZREjfv3aywQrc5N9x9sUVzapW",
  "key24": "5qv2hPQkiaR47QwvkCcvKJdBKTK2WRC7oUo1iUX8FL2pgwmrFfAHVq9FWWTRwUpnH9XDErredsLEdvj12R6Bp3wS",
  "key25": "ukrFNUtWvrT5VLJMDQ3J8tAaaeNrFRM89TUhWw75rKMdtDmQ4xknxQRoSsBM6gNgHqMegHnfD6sp6TDw63SEpb3"
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
