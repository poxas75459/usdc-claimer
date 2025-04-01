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
    "4KSuwc1zrvKtitvJEVxr9RB3XKNQf5imJfvKQPeroKb1oiyE93GxiUQTsc5duYqJj9NswuQ6rt9gBkgrdvKk9Pbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tRxifqkTtMEcWpA15uwnPcmoVurRrc4T9gYMM3ZDmVkNAAVYFoqZSNEDTP9guu7FAUyQ7uMmNSveHqRg39qHfua",
  "key1": "J1zcBr3nvt3Nk3Tsx3fGEzVLkkXrTiQfPQ417q1m5MjQUm9npqHSYXq8gwiFtiACGKnk9pRVhHBxf1Zrsrbk6Er",
  "key2": "HZ5owDVEeFAmnY8zx3AEJEVB3BVRaPMz5J1eQCPbJ1Poh3XSA5q23y8LbJCdpe1gfTXDx7HF2ydKAkWAiA5tsLw",
  "key3": "uQoF3wyoijPXzWzsWTmEUNc2C8qWhyNKKSC2m7mNVFZAZrfo2QrtBRTk1tX25c4urwnXsMpxd1U4o65kM6ckEx8",
  "key4": "2zzLwBUiNkXWht9WJmjD6cT7DMNGZv6KpH7Qgkpm3VAdY6TDNzSbXbER9bxXHgKp3dX2KvUA4c9M2iwmGNKwbTnX",
  "key5": "5MpKjvxmCgDudjnLp8ThZd4XHVz8Z3KwC59ji1YSZK4RB6Sq1BymGqpbJNjz93Nf9dktPgczGoYFwzRdH3H95Z5Z",
  "key6": "2gMm5fzUey1DxLQdZwRyPrfACCcNqEMAkVp6twKKKk8FjDX7vNnG3s3DCk9sgYC1EWeTHRzwb8pctR6HSUNxKxHD",
  "key7": "4ggE6kdogN6wS6EivgjLMAmRF4pBgTo1Fb7DLD9G65MCZdDxGk2DGs9fZwJ8T3b8d5miXjFB9gWUgxtpjBrv1HbX",
  "key8": "5wyrD1HaaPLmCyRGiDYDeKGhx4aqDv1d2yaTJUYjyDcG4AFMp8RTyQfWiTumCnUv6KSKctn9QevuEa6rrT7kLUB",
  "key9": "2nrsassdm7Smho84KBb8EtKv6JpAe57m8Nq6rNsB1AGhSuY8ZxM9RLtJjAYvFFvsaUdYxeDyqYsBrGHqhQSxfnip",
  "key10": "3wiwCb7jvv9h4945zA59sRBGMtHQk94E4qs61ZGnnbAXsdeb7G2YXYVuWRVS5H6aEZyTL7hw9rcmQFZ6PTYmFCrN",
  "key11": "4LDnPKcJRD9JoxNs5GR3kJGty2jFVkondgrMToCVYQacvwzVjFYDqbS7wQ8jMuagNDq8fRSPssgGEDEVpDcPbxPf",
  "key12": "2BHFciT8WVDkJZE5brdJM4VqMwCaeGwnazczxbgaBJ2ssizc6BDddWMnFQbmiDG1hvbr8en1YmpcJbo3GN86mHLW",
  "key13": "55fRUsXRK3Dgo2LyRT2KX3VCNmTX4gawV7PiV1Jxs3TzJev91cqNAr5PXEaJZtKr7dg5LWNPjHLYS8g5YpiFEXBX",
  "key14": "3HKhQA7whmQkjYXGeS1ZXZtMcwe7j8J5gC1UUwTqJSswX1xxKD1PuCNW8qZ81jDuXo2o5CcDX2wDRfCLJmV2Atki",
  "key15": "458v7pzoNz6Qepnud4MsxsHgBkxH74278YdCKMWP6KbiXjT8bhfEEZ1NaXzggu7t6fb55AfS7Hs1zbbhPGR9gm3K",
  "key16": "2JwVqM4XYyBG2KHEF3mjPPDRvZiMJT8CTwYunY4wScD3uEQ6XNnLZ2HsQtyDD7ib5AqupqDfdTUpAGtYq61eiYrf",
  "key17": "4TyxGpqhrEQM81mMvvdNquKVEJ2sSoPzxBaVuK4oH4V3wzV9SB9gd8XUoXis64ofBRLfwckhxzSLb56kyzdjcZxA",
  "key18": "upBoa6BRvU1scrhXGm3uaaWSTTLophoH1hL93avZWUwcBgK9QCw8Js9Q4KyQvW6ztRtqSyNYBGGPknTLkDRSvpQ",
  "key19": "4RSeZNsuegjjqZoEzF6kWsXwFizZEVrnfPAGtJW6FDi5fDwKSmvhnhJrQCGXu3KzerXUb7XgUU9v7PmTcTN3eJ18",
  "key20": "2B8gJUcbv4ji9r9yyw9RmzANzqXr5c2sNyVupgDjJW61AG991KzkQ8HuLEWkuc9CWmmmiMzvjxcGGvGtYtvHKzYy",
  "key21": "4gmzDUPGoKBbdvDdN3gNFJ2VuLW9kfqPHQdx6cFz76FsNtobq5VD9Kj7fNmfM69gHTMU4NMwgxkVDcmUjNyQ1D2P",
  "key22": "2dss8h4AwH6UNbW93akSLHEeBP8QhH4yBtWFMrm5bp4sNStYhsCCNeTXwPwacuzCNYCzb2KDvZCGCNNqpEE2y93i",
  "key23": "29EjGSrLqRbnfNERUEqY8JVoa7A8WMS1N321oUkZjXvnjNAJUaRU8S9ZpWLL8FEDV2P8srjBiZRXkmHmmpA4pD98",
  "key24": "2vUL2SMtLvBAtiJPAtpiS2PpJm5DcyLerTHJgMkvqJLXJfGkye6YDtuEYGdUUETVw2qsRS1DCbGxR1v4KL4ZJSqQ",
  "key25": "335MktTKGok3PwRo8aJJX1oovkwjNNQfiPhMokYBsAaVed8QrwGp1zsWmytwr6fKAwtLpK6BUs2jAfruP8vmWmJ9",
  "key26": "NijrFL4MrGnwPWB1t2xjvDJxD4FFV1LcU56Uzm6cDBsaSwtGXzaMCJUtEx8cxqiRjjLHHHCkWjnsNZEsF9YyR94",
  "key27": "4fwf3z8gpbbhDFQQJuqYDXN9eK6phaXMpAdvtaL5pwcuH8dy5ZktjPRG4bv4zgxpmR6QKpp6bAQD8223xoKgqryz",
  "key28": "5bRh6t523ym825TYaT4nrrGWEqTPRyW81bnpJGozWywE51KQAbT9PKWWHy1kSZH5PE5SJgr58jFN2EVaEqX9Ew1X",
  "key29": "3aqVLnccdvs6AZdCsF8bAXBrsWUHGJPqp6758pkTL9HVvxbmh15nshNKbmi4bsLTWwivayfxBDeU572hKL7Z7FVs",
  "key30": "Kp37Ji8zeKCZKF7VZ7pouoRb9FfKrxe8bHe5Hdgs4s9yj8wFSodpzeW8B6RZrFWJsqs4S67TCCsKo6oTgAQZ21h",
  "key31": "56RBuhBGJ7cnpL9YJxTtfeGR88a38DVkpxntMxtZYiHhoinHUXsREMhdwtkEwqcYSyT3s44rugoR9317eNFEmDRu",
  "key32": "5YagZWx3earm1bDxVCgZRUZUY3ScCUBC8xBN5ZnSbfDriTzW7FsWvChMuVDSZKXQ3GdiED9vbYtnXSgLYTCRoSjY",
  "key33": "2AbC1YVjN8YVTaYGPxmkMwtVKQRniHyjoH3DNTXQW5bE1jLAq7vU6ShsNdkNtpoq54csbXxXLDxZds2QB2S4R3wX",
  "key34": "2kmUVdCCoUpwtKPWQZHsMYp5DyrCsCDPSXgqBDZascPnzgt5ommuP42LWFxNqifNZoWy7pSByQG6cLN8TMFNKpPm",
  "key35": "4G6gqmSUWqEg1ELhFi9zcCLQdxfKJXBbAsJbn4xHCQquCbje5SfaEgQDiedd6jFGRW9wnt9LhBfkFvc1ebFCLE9D",
  "key36": "4V91KjkpStKZrTHDCxK2cFkLuwrSowFBWBZJmHwpjkaE4cWxx5XJ9kUHHh6jNf8SZrGE1TmTCpScNVcYXpifUT8L",
  "key37": "41oQNgJY9CM5CPK852UknaPs1KR41tLd7bXuaAkvrWoHF48VhJZ76pWacq8kCeTN4yFRgDLnmEfagr55Hz8vdveU",
  "key38": "5sucpEUKigYQf4TU34aJnJbfwcUfz3fRRXAKAeUcXz4ugyn6bwGoPUQJKrcGBt9cH2HtsoYDRyD4WMd7oN6ruzs5",
  "key39": "2dPuK46gM5wWMbYXhSrRNiRvvGuKximgdA4m7JtVr8BxkSkzhddbT3eZqxX8MoEhL3WDT7hn1XA3jyHKjeZLxGVf",
  "key40": "56WvEzVELMsP62ngJh2boSstZjpgLu2FiHBNZtzeqEuZWNuhSpATcY6VWiymbs1aK1pRhzmQwfQcyzgWyMngkNDp",
  "key41": "22iox9QZS7Y78ddTpv1Y4P29rGw5s8ujCLAGjouzTCFo5BXvMyjPTz642jJmtNSgokeZEqYnX1ZxqG8LpsUm9jeX",
  "key42": "p2kdrA3fqmNHicV9snHvk1B1TffB34nEGLpQeNxGj2Dmb6dJ5Hjd971U39BLKXqLSD1QH1seeCmJvt2b5yuRQFd"
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
