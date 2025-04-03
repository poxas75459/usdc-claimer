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
    "5THDgWCkKnzqSteGEjbFc3jqthLdG7bTnpaqcqC7Af4Qeo3pD15aQyszTWconNUhnCToREDHuCGZrBMGkaAfCXzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXRfRuSjtz6cdgozCnvBKQuf7gDugnoKfZCvxBYp6qiLeCwQ4EcCJ4sBCbMATeeYVe4PEkfT12qeQ4pnBsCXcGa",
  "key1": "57roBaxACZfwgHbxU3jRvjesMVVWCbHaDUv5xT4PT5BC1cv3ETkM9pQmyBBcAVsSD1J6ewGKCNfAFZZZisVVKZpg",
  "key2": "4BXiHvDXXMGgEtq3Bc4EE2s69XcQRkyd6Z2rBnaf9fjMtpNEAFyVG4dmAtgep1SnHZC7sNQVAaGwbrUzeBrDJmZZ",
  "key3": "5UHzixLaGDKtyfVADRqikNrxY6Jdgm4zR7dNVJQ64a5uQXVqzHvciazkH3FRjFzD3KQBqXwFCvj33xZ3Po5xr2Mq",
  "key4": "5DVUrMHdjscnbu6s2D241x4zJMoGeQuDUUkiUyt9koDZ4P2hn1iXqUBqwshrtX6oxctqyFdrCV7t45rBARsYQTwa",
  "key5": "53Rf563UwFMqNAN9jqJvCvjErt2zQVo8WY4Afo6o8uLqdkuQkmEGxuxcUSopSh7GBmxFUtbjzkUeR9fnq6L4Exx9",
  "key6": "5QzCmi6Wha4rJ2o4z23kR4QE3fAU7QMcqH5u1sjBi3phNJjEmTAYWK5eTSypUUcNWHbaqfr5F1hZMk8t7xSrbugv",
  "key7": "5JNR8bzVBz9CmiMTsRSm42EpQ5cyim3ZzzpMs68Ei19supkhQ4UtUq1NXdctybZrdW5E8SYGWFbWU8egmdpUy9Pd",
  "key8": "4VoypcQ1fetDA4poK8yYQ9LkHBigsdxtn4ofH8DCXCq94pAwuYhHG4JiYikFiXv1uHRVGy6WJ3dHdeRVzwKNG4vm",
  "key9": "3mMo4djyoUzZRfRyU9yWeWayGX4Crf2ub2epXT12f4FVhpvcpPAE61He7LoX9VkZyWtRf2NdDPawtUSLL7tos8Np",
  "key10": "2aBsENB9rvtdrRVWAB1SZSsbaxWzqmZfUcUS6N33RgnxiRBhRsFd5KkFkzTs2KwCePZKSkaiFx4orSNu7qcY1wba",
  "key11": "2iDw2xv8Ymd7JXh7pTHzWNHQSJKq69RQoS5McGwZ5WR8vfuFfr8rhJo5ig1s19Rcc782ipw5hB5JofisptmQQ74q",
  "key12": "nvxcLgPeSgJX42bqVGUpnfDcWdsM71bM5nh9wgM5P9XbgAoQ6q7B4jCev16pE671V83GSYAeMvnHyqmWxzjBEnu",
  "key13": "4K52Fk5RcpqGRqtdfCXKmTBNDqvjmvhUsNJcg39Mtt6SfpiGkYcP59eGqqkdmSmKgWQquTvHn9ghe2KCh6nd6gQc",
  "key14": "4ZspzkEbefH9XVQg9HbNpdKUvAjB1k5HYgzPeiqHwgDNWPjekjQQ4VHrmudTdZypszMFp4pTcbdxhdcE8TfKvrGP",
  "key15": "e18K4u6yRRCam5tBa8JGDpoaQCqJcHxjUepSGUbW5859xmNvGj7N4G5EDrgAb7XfgNzNpi9dugVNgFx15sUWKsw",
  "key16": "5aPSKhtx7Y3wqQZ6s93BnVYQWsEwgqisRQg8n3NspHkcTjPJ3upsZvkpHNwvGZ1m9PnC1J3e2meE9sF48nzC61E7",
  "key17": "4jQU5ECXAAiRmvpmm911759vULDkqNJoMXn1pzXEnoxterAfGNp4LMkzBapUCJ5rVLDL5QoWnhQMJ2jLPjWrnbuv",
  "key18": "3saDUWqrwMGjoJpKivtQr8Gq8HgHJ8qTtAxUrob2jfcQhFBnPZpyvYe5B5jZMhytrxEKMXZv7hvELi3VsLZ5ss56",
  "key19": "4AL1DAnxNeHH9G2dAE4VB7zUAu32ivBjMrFq6kBvjJAWRDMwTM2QGPbuXEfMV5JExg53Kn8cSHjhr2B32jWM7WQA",
  "key20": "5yCrcdF9wuXwM9SGuD6isCgM8vWXysZf2re5hDrjGtHx9zJ5CVpyJZvM8tbpV2J6fkiNfTFksXxXdGbHwJntvPZh",
  "key21": "5ne4UdAHfV2kPj77RVEwreeKsVvYBybF3wqPnMqXuyhwYEvuC7NwJSZ4Pu6dcaaFV4x44BL7DUnwCAZAKqWmMPCy",
  "key22": "845eXnmmc6p1gzj4zWbWm5mFNAXgDcr3dzNM4pweSibULKVj3muZWSq4pyACm6wAuy433gAHLzwdJxi4p7tLCVw",
  "key23": "2qtnFfBZGkhTz7YfdNuoWwzUNtaHvJ66pY17PerNquuhEGhwjoDSN2w2sWjaUHuGbdbSpPESMnqMtGM3LD7pkQuL",
  "key24": "3m3HXdm2WJZhmBiLStHk3C7knp2hHRcrq57d55DdJwXSCUYYnLj3TwqkpaQ7k47AGbHEgevXxiQT96JFjDKHeJK4",
  "key25": "23P1KvPtTeQJ9kbxJPafKG4yRk6btTPvVzQ9vXhNeTBu9298GWRaXYph39iZ5chJfNKrGiNn7f9zzch7VvsfAWJo",
  "key26": "3MEgKRaL6fgyMLijvqrSH2NF9FT5Uv6Xdxg6G1ogUtBzadZxmG2eLmGAaubZFvb8mLVqxF6LmHiS1AZD9kgu6V9x",
  "key27": "2vB41pAKNqP4neFc2f9ySXLPNxRA7QmFEuES9rRvJEhbCR7uKuLjKUmDMN9RGUdYPvX9MpY1JE9D7MXQ1CeE3Ro7",
  "key28": "5v2jhn1AfqycfbtCq9iv8u8vh1uCEvTTfJKDQGmosogSE65LtfQVNL5KGG6ow5AzkuAYCgcDLmKQZXJMmTBGiJi6"
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
