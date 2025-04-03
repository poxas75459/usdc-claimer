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
    "22JewTiuhxLXStZo2qznHwNsjp5rsiabPynJWJbcizLYNHGhod9Fs678MH7Y2dNp6DYX4KWzQP3dWcpCkxWWWXYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgDQEVQ3HdtpkCj4xSmftF3UCuMmbZN7Y9zjG5mJJcAeB1VGSyxFj1PGKPFs9JNSaBt9z9oP4wYGdmz3fzuid2t",
  "key1": "4ZR2wrJv1zcccniC13sZEQ8NkMU4tzrqiEAjtqYNpxYT4nwYs9qCKTo49sdurXZRb6Lu4exaAfdBkiwJqhfhiBkx",
  "key2": "4EMVvVcDPBEGwBZUveaDMR3CdLAeCGMC7RRyBf7vCqdSDnP7pPJs3DCzD7CR6reFAKshAPXffhhNbhDsBqNUoAzM",
  "key3": "H1VFAetBA89s9qyGQGCW7q45mWxnDZiHdmb8jHWyN3msSBD6HnKpJuCSGzAhDPoL8rc5pp47D3eg9Gw43uREd7U",
  "key4": "fbcNwXvzHRnxCyW79jFgdfnfh3rnmj35R9ULK1jFmqT7MGb34BK1a1Bt5ER4p3LZxdg96PWk2LrFgiPKb56qP3f",
  "key5": "393mFSZVav2tvzdGBeMV2vvwP9WbpzfLgCRxhPm7mBqxornP17ASFSgeW7W7CNDc3fbzdY7ZXFZCNfjXARyg7BQx",
  "key6": "5CCSLRmrEw1XQ15ExuhNGFBFziAErppTfLoCA5ry7gv9sruiMFQZWndN3Jw9jqB3rEV9iAJDLJxd7ZhgxEZxL2WH",
  "key7": "2zC2JtwB463R2Wp2j3uA1nAiBSQiZWfX3YKVcHUTgzqYi4PkgLqftCchAX8dxw9prRovEiAk3LaQKw8g6A87qwAm",
  "key8": "H4jhqCNqiVAqSmqTSywFgmxkLV7kCyA9Mxs3GFVyqZgMyjtudVPEZfTi36rGEXYgSsZwWZtFvjiCvLuKriU87z5",
  "key9": "2h7RYRHpK1iF3xcwE77G7GNmYpp4YS5KijKfqNeHo44dcsVUGfDg4gpLh7rDG7eb6UHq8fCoUCLfoimGwMJKnawL",
  "key10": "4KZ4uGhvtdgh1SwcFqMCHW6pSmYyTSspEVMaF7r3DMKaJD5bVQTAadmD3Moj7WQUBgiRwoUiwRux6ftY5PpnqFWe",
  "key11": "2BXAZNLGB61H6QG2xVa8SZGLUbR6S7kfPYhg47rnebNgwkvh6Af4z6krFtZJ91gdDkwpZi8MjyQTfj3aBRv2fn3q",
  "key12": "4LMaja1W8AG9vDPfyYaVfabGKZ64YqFnUuALNn2XXoRZAooQEBUakbYtzpc6MxoDCbtuRaYQFfejt24WWudteWr7",
  "key13": "5ynApFwmpRPpKzDMuquoQkzPMMdGNpTWAZQXW5NsMaTVoDadPRRceGam7Cv5i4LZreFRhEVhyC7pcYyBJPU4MFn7",
  "key14": "5pKHzc8wQCxLGqVywyuX1Yabm1PxsCA6gMn2DqUkjTMGabeEjiLuXSmpE4sJxao1JL7CWcjmUru67fDbDLPJjzib",
  "key15": "2QePj7mB2Zj8mVkSMn5tPdyrzq82M5hwgAZteUGJ2wjL2e3hjEPXfsU9XcoiCRa8wpZvx7mWygGLyAjhTAcxB8zR",
  "key16": "4Q2yg87Vi3U2J7Xf3T21U2wB5kXnJfwAu3kS2TfzwWXyQLmY61GhDpe7rRVGBY8mXp9nYY7na2YftABYByhqmuYB",
  "key17": "9A4UKs9wimmTFSrqA7saoUUZcC8C4MzKLZfA7C1Svf8mH4KAgQyofgr9ZCsByaHsug9G7WW6THqmw5LrZNPSxVg",
  "key18": "3sXsM5D44WB1xkykMJ4h44RA3SXGM5QAj1vnERSvWeewVc3b7ZR37qTnPRxpQ88tuPxgLrZQzKApYrSLUAkgafKJ",
  "key19": "fCWHMTbWdGuLUfDa1CWwimMHFB331B6ESQUCqNWReV6nNthV7aZG5XiZ1gCbiTcLECyE6W7tYD8emxwTzDutFzn",
  "key20": "2JWJwmr8HM8gHLWurroKysrW4US2J3egKByMxUGu8JgKm7Y25efm5XHDJ982m9ZiyrYZpTvTzcB9YNw6Pkc5pwDR",
  "key21": "4PJkPna7rqCDtWft4wAbTysByDboZ3fK383UkGeVhwGnr6LsMgXXRmEQV9dTUjLrfdREUtxwU3kWdSK7uLTg5oLg",
  "key22": "2KD7eoWgXVwjaSBjWUNgGV8XmBX2bZxRyYZBQUZxqs68YRYVpD6Pe7qX1s1s3cx7RHgTfd8R7G6P3ppgYfm5sicf",
  "key23": "4ThrFpzo7u9yZXEEts8JuWTKDz7yxDt7G23vJpV46E6H2HdcMncQtAZ5PCugvAbiygsCPBB87S45r9EnDK2qdT8i",
  "key24": "v9iin1wRHMH1RRcG6w8r5cZNhfsNAUen7b6NrTQcAMPgk862CeHbSp8rzS2snWHhDfE7dFPuhJoT5gEBnq5YPQX",
  "key25": "B3vRwPtKrL2iqNKURo4q3aEucEPNtXVNWAs6kbMbhGcEuNchC52Phk6PgKuYJcqKxVJJFoFgAXCu6QinSHt9AxU",
  "key26": "4TCqAtJKzhpGriecc3naU3XiphsnN26n92wyxY3E9Hxxfh3VNzZCHiDNvs9kvB2R64gtGeWFeZMMg77Z4otAqz7r",
  "key27": "4Mc6RzD84P2kkqwfcevGiG7jkst62GfMjDkyHNdm5GYGrG9Z6vRXAdTwa4v5Do8CWXU78DxfsodChRU3n8tUCPgP",
  "key28": "nLcgBf2Q7uX6ktVPzaiVTDJ2j3LqQC1xHQC8WUJcy9fochzwYSawUTskHZGPh94fT7Yz2CruixwpChBh33eat76",
  "key29": "2rEgvMWbAYEu2ULvbUFwndEkPaBwy1s1a3CFWU37xeqDn9NEFgKczwbutqqKkoJ7yXNLr7tXqKF76nkvuEN4e7BH"
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
