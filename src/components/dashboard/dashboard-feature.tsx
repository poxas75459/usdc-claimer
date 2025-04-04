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
    "3r178sZzuGn1WypB5CtSBJUG69AjQ7qCJwdSm2vuz15sEFV7rpqoLsQ3xDChw6UmpadpBAu53wWd3qr86Wt7qc1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbcwxwpcD46mBJCeWkwq51FGheHdvi22AoE2SvER4K5jx3FNebHiLtxRDE6uRpva7MTYeW5qjg3KvVbhPearLyN",
  "key1": "3EDH2F6Dc74CisCeVJqQo8Q6kbDR7mtyYB2u11FkVdBhtqgazRWVjrVgVhiAG4DkraJHNGKYx19mViveDHDByA2U",
  "key2": "2r1vG4J3YirDzB87cVk5uZwXovBuujs8JUMzqj3TdRjjRFeR5vUg9CBWmBTe1xieQgNHWN3tCzxzBarjV2ojAMNW",
  "key3": "3Q4JpA7DfrEE2kRuaq9HXVwwD6eU2eNnW8bPjre1DExbXDq8BqUmkhr1kDPwR474JaqzR8WUWB3B2m9ThYQcwfW9",
  "key4": "4jtiUiLnhdbjS9WxoDYSW2cPmLTSs9aEmrVZvZXVtcgR6dmQWTcf3X4EMHGZTZi2LVHrRmnwwjBjH8paWHPaKFen",
  "key5": "326BXCQEEcx1xtUpQ8bNALMLJaiHwyNvXFuCKqoyWLgochDteg4YvmSCevVSTwwaWwHvFmFqtZNbB77BbbprXYd7",
  "key6": "3CJDDf6zNSWuzvS7ysoTRDGgKpmRcYY8sRanqKdT7zH7uSyfSK2ACMYyoNoSbvbpzvCLqGJvYuyB1rMN9SNMe84B",
  "key7": "5RQT7FvtA3WBMZKGpEoBfTdYTFYWCFbAEWdQW19WMWgrBUnWvKNXTBa3Hx5ew52G74spD4uHVUbWa9L1FKagaqsJ",
  "key8": "5Nt7GyfLn9iD4U13ti1BsNpLPf6NfjUoUZP6QSJ9CxGRBg7idMzoAWagFAtMN9fVKcJvGXwDTDpNGfP6jWZ3RR6d",
  "key9": "3ahdQ2b7fgEDGHkKZUr3rTZhFHjN1dbNHRyYfhHKMXJPxNa68J1aEo3iP411D6DwdjJVNjREUSDAwW8MqLXjddkn",
  "key10": "4qpUXaPRDv3QXvo6R1vQmnP7UNuYdvCjSCjuRrQXd53h1H6gaeFkWAAak8UtfyKsK5sV2yKzZDxqnr27gyATTUmA",
  "key11": "3DarA2wWHPxDhQCZbJATdzY2few6s1vKJQB6aRSedW7FhJUMMXeC4QkBSraG3kJDKsATUvQbxxVTJF6WpVHutDmS",
  "key12": "27NnQinbmkzkccBCja6QGVL7NyPWKcSmkAAZR6vMojcV3RkZz61TcgwDFudW2G1xstzcdprCbbvANggpg4nzu65J",
  "key13": "3vUcj7uMbqcJfY7h2DjrkkdXBGmHBU1x7Eod4w4Qein9gYrWhTrQ3AVcsiNs7RmDB3GSxxZ2cbVBAQPbmVNLvkHt",
  "key14": "4Hgh8y4WejNqpzsJEZxvKjxYzPz1bthbLfBYQzTC6Sh7uZ8agZQ41GaoPPR7PYB3UpuEXqkDEJHiJMcJE1WDgycN",
  "key15": "4HbVRPodW96niM3hPnTVE1rSeWPmFcp4nKtoqSrXWFzKPba5xX7naB45JdWqDV8uzVKL9R3DE6twPm8pz6Rr1fhy",
  "key16": "575p6atMrhW7N6Q4mjfvrR3wEpNBArCKCJNU5ekQcVdvWwQgrSX9KaNsz5Ufj6d88tyGKHrzEwz7P8DJs7ENTuvj",
  "key17": "3uU8wEQceLyTxwnXUHJhJN5L27RZAVBsYvRUz2EWQvru5vDJzPm88yrWB5jCgSwkX873dHwHs1HyuCpR8tsz4o3P",
  "key18": "53ppSawDWsYvzemu9j5beRQBXbLfr5Rn6QgdMu7FVaweVim357UazBEYuKryoS3CAyxu4pn9tGEUJJv3uriCKNNS",
  "key19": "39QhySAfRDJAzDvbtUKj7YYvTE4ToQj753DaTEXXh8bj1NxZqESb5VrbXTBcmEHbz766BqWDJYLEyNQ8NnUxjpy2",
  "key20": "5XHo9htCZKrAG39st1Rn7UYoyeynDcmoeo6gU1yZck2QimYeCeciCPBdyYvqrHftqTiYmkGepJNgJhVKM4Ye26A8",
  "key21": "5WRXWZrVZoD2Prhudqe3xbVkCVUMt5BvJJA3iXkDT8EfAbTSBhrpsmwRTDYA8zPX3ugEPsVDuWhNhrV7R13PE7ts",
  "key22": "4yZ7aDzLMNVQc51eqCGdHY4yLETDesSRXBSV9HxESCvEEpWPrrvWWgQQSQmZmbDAywZpFDVYP7ex7gtx8GsoWH9y",
  "key23": "5mLfoMDNf1yfyMJhCqfaGRVTWcPT3dyFr4o5qAdTKjsjHEKDmdWBPzKtXHahNSRGUGC2Zg75P9xhA9SqjvqpmZcn",
  "key24": "5NXnfrbZ1FSiEu3kqABuxRgNKAn9reSdwYatrnAhqWAmUp6QR1zT5qhPHnRECQpV1pAoaEoBTsuFwDc72nTG8nwF",
  "key25": "2NHHod2dCqq6KRrzmK1pWWtKfKNitm7iGp6jNCGmQEFjd7Uc8k7U2dm8owcZVRMSPS2vefLJ5FgtuS2FV9aMapRq",
  "key26": "3yAuura9N5FR2f5h8HbncJ5ViB3r5WQPZszh4nhr3eXtebdDVxuJn6bwiF6ye8qGN1nAMeeHvS9LkR8WBNimLkYG"
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
