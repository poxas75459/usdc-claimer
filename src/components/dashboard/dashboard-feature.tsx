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
    "45VAxyvba1VUT5Hn6ttetFtTS6oF5TbzknpEGdgrGSKS1XhbVBL5vifszRgbP5q8qh88wjoCTHwXYMrBKZpPj4Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJpRwdAdLsRHbqyxg5ozVzu44SUpPc1HgNvx3eGtB32ctZtcMBfgVNZtpYTUUJL9NiLHfW2YrnbtcGDp4GXtfDC",
  "key1": "4NxVNRZbYuf5uHb1epnuAEAaHWQ6NutU2FJuysZ1uc7C1CX9ZaFotWnfJULZYPUKwM4wE5UUezrMeFdr5kueNwCx",
  "key2": "yoJoyWVu2xPP941fsgkRgrF1vcayRxYLBox93sf12VS7PLCXVHjYa75AykiAN79rcPFYWhGbBAVHjEg3C7ep8F1",
  "key3": "5AZvY9SYbj6Wf6dStbWJ6Z7D8s8EzwxVFsMe7cAjbqAVJ2dVyv1pKcbBzUwi3pr3unSJ3FZVTjHS8kNx23aWe8eH",
  "key4": "4ke7xuERfzCoKoqzd1X5Vb4CzMZbBWBnTxEsP8qutmFnsK7K1pPpSvKDbJeTeRBuTP4DXYNpCefZR6SLojnFHYDQ",
  "key5": "9iUCWD6zDe6Sc18zjVoAjY4Lrmsxh9RskpaEW4qudaahyUfAWmPeejysaBfZsszEQjo4C6oHX51VEGVy4vX2za5",
  "key6": "2k74Ek4YLg8e2XftD7EMvcoxxWxafobcmP8deupLnttacZA6PZSyA1HbYaCb31SJSDx6zXGiPNHFCGEy3LY5kA5U",
  "key7": "5sv1cZ31ncorjGhM6poacDgf54dmNXZ9CBvrcyAHtQSj9XBi4569VexsKUijJ6rzdV9SdFmREzMhuz8MeBuHMPzV",
  "key8": "4rUW1C4E8Cgntit4oqtMsZsHygLTsDjUiEjWEXFaSnpwFCzooTRMhUsDW3hUzX2eu13NmYoDtFbVXFzbLs9PaSbL",
  "key9": "2622XPik4s6T7iMAbED1ehgQGnES49JSbmvncDnadR3bUMsxg19k6jF5nHeQtatR86diY3u3FP9CfzMXj2pVCKfH",
  "key10": "DfoR6fKgJNZSwJANtPGQgnEKABxp7pUGVQh6V6jeWq6uG9Z9TsivAZvdNddhxAoPvXhzGNeorZaRPBf1WGSHNdo",
  "key11": "3yzbWw7h1MVuM8PBgx927V1w7APKBrvzTCG6CC5fJdRFPuPnD6Z4FEYWsBwRXxMxF3iJeQsazTWw711eYzxz5KKY",
  "key12": "64NpGquNPHoBFMXb69JM4p7R3cd7SKRwrVQeBNsKvQjsKG8JpsGDR8WapFVsjzjxdm4Xf6SiCgVThxj6RENMjYgt",
  "key13": "5JYvafzvfvEykBXr6kYhaKkTMw6hXzoBvrQmCh3diPwLdtNvxymUCigeSeNekw9BD4cxLsStUBDqR3m97XHDPGo9",
  "key14": "pcvVdhn1WXC7YYYds6FvCfYu9tYtmPSen6mmmb2yHDgRGe7vxfcYjdTJScnaJZJtvKq64Yb7MTp7T4rpob8z6VJ",
  "key15": "2onQL2Gw4WAPJUbP8ECzUzxLiqvRoDmJgufGbXAWsrBHTBiGwDY2w9dJ79KmKLSBoqZJAo1zWWjSH2vPFrtT618v",
  "key16": "2bEjtu696YUKVTnz5tLBJikVWneWEm7LZc74oAYARc5KEiyuerB2KscBGGLpPcL6EFAuHtEDqsA2KQt13bqCJTVt",
  "key17": "2KeJdwxUAo8MHtqUQ9zv9ESVrAea8bLqLRJyuvNwxPLvsPhjwu18XHqXFoxDH9mCgoFEozSubykhdA3UTudTLQWF",
  "key18": "52hMEyQeFSHaHAtpAempHjUfnwpEyzMVoH9N6eNiNYiir4eYZCwgHVspC4reRj7VBh8xtMdWjUAye1S5H3GQ4VGw",
  "key19": "EmUXRA6N443fijDeGLPLj7FEoUSvCBZK8VLXXzuVaJFkGt8wLbeQeNQnyBBycgZ8XeSfns7BK3Pq7vzqfFg5oWG",
  "key20": "3zuLBFmtmhFN3RezvRViJiiYdcKwTo4xxVsB8frNPhN1WGMXbdDjwjMGJKZFRhC2BvfLRGmG6Tjs2kZev3MzxJUC",
  "key21": "5H21BEXVwCxw7eAPuaLWKT2VnY9rrssy7W41vjoJjSALmrUaPNiJZVgXyj96hmvDRw6jLWFfQxWGAnVa6Grph9Pg",
  "key22": "U73in52gJskH1bUTTfzt5FDdy7FwjSD5tm2H4bYwW8wEiWPVcg7CgFS9XfFyW2EovnyLbkhmKgxssq8aYbhpPtg",
  "key23": "3oMD5H4nSK4Veow1N4jdKF7u3bkJSydKfGUCJm4hgLEUQg52dYsJ5yepUW53xrJAdvLJiZp1kkZE1yK4W9NrpKtA",
  "key24": "2XcvZzQwX4oyTFbyrL1mdbRVvQdLNB7qbJYtBv7NHmGU6oqX5vELDWEGCxKVzGLnrDAc9GDy5wgFjFkKJHcu1ebh",
  "key25": "bwDr9mXrTQjMSkALRKdzrWFDhhn81FVt4UDYuLM7bu6s6o49FijZX1DgMHakPPhLehxBNSbkvLM6KrXrnC2pCb7",
  "key26": "jysyt4vemeJUsb86AZHYxnWYufzEYrWN9zzMpRHTbBWFpvDSF5VEUpTS76uW5ihhww7Hbjg1tb42ZvRMM6RUVDN",
  "key27": "4GAgHQmjNfKAuMA4rmLkzMmY3nrxMojGEbGcmY5vL1StesszaTYUbEWaxW1V7bWsuTQppqD2D5DYHkUYkHTwagFB"
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
