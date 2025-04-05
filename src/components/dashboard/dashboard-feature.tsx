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
    "46VvMqYGVpPEYt3CiZmFPDmShigDRPdnfuiVnB3Wdh81hidwrpGxCParzycWLMvTsLrtzb4S8YUaTUAyAjgWzuh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJtH5ugoGjNAXDoKBzWY2Zm7kTyUKxj13TLHTwNAjmTxhqkpZYyGJTzYByTFEQ9VkVeTdqocbygmz8jmTacZ9vJ",
  "key1": "q7piMmNRVuvoFQSWvsKjpmV72MyuNyPP2XudK6B16Jhp8nKBNwXbT4EnKzGWFCyghGpG9cvEAW8N22Z7aUA56dy",
  "key2": "4SKW1vicgwwLR9KRcysWyUaMKyQeNLcvJRzvVpgy5te5uYhRYtg7LF22mo4occ5WNXBthNUen4FhHxvwupAWfqsq",
  "key3": "3wZEYKqtM12aZCwXj44KubBuPEwR8tKoK5KDG65EzmpcvA1erpeXWYn6FgBLmFzrgwYHHP3PDyz936JeeJGkTZgJ",
  "key4": "5AvJinBZgyZAFtnqpz28KVP6c9gDUDW4FNGvTEKVNMiWwK9dKJMWbuL2qoUFxKXeKjr93Gksf7nzZVHBBXBBcQzs",
  "key5": "4ZRyMcWvRJ1PMBBuNTHyTaDhBCV8C2DktGr8Wei5QrGtmMbL87g9TMYp2MPFzskbXpDRspmQ6ckyuFAY7RMjAR5u",
  "key6": "Fvzt4bb1TLMDWSzpEE8YnmqnbrWQaKoZJkdUZaxvxyz91VyE35dSFtapDh5ctBVxSBbAmJ3zWWR4aX8TwqbtnLJ",
  "key7": "5YB7cz8RQG6zHvErHLSVZV3DpR4JXXMSnbPUnrGNqwAZTvwX4vYkMWTfyCRdxxaF716uTUeLKSZori173jTeB7nz",
  "key8": "mSYxCe2C14YtoZ1rt4Yf2SDLfYHSqdeFNUnAD5Tu4AzJ8ioHtrHRbb695T4kuzeZU2vW9ZRUke9dT6D5rKqfj2S",
  "key9": "36EkLV8HQQEjd7R2Z2FYMoG6BgZjHnMEtnum5LoER4pLNVMXe1zXUA6LpCDNoSsn3UfA12m9KGqyFkqDx8wgRuHZ",
  "key10": "2JLPwFaXKf2hxHAMc3NXeeJqQwyiTtUD6JhfT7gWtEyoYPg3M2C35U7xB4TCFi5qex9s8PoPRDfKQLidrxY8zMhg",
  "key11": "4we7GgWKG77Bz1n3LAsmcKxKFFCvKYbJmKWqo1pnyp7jdywgCr2xaA8zWfEJRawevsi8MxdheKhSzRn5bfZQxuYx",
  "key12": "247zpnCQ7asN4NQm17aDdtYFjrxQcDTB28WDXShgkacST6p97JCerVZfsL3MK9RbBewSbeaHDwecB5Vc4eG6DwVD",
  "key13": "4VWpJHBXkhVBoCC3aMK3SvBbexK6nYcGu4k8yi1xbrBSpXHnKeH91SNejqvqBhnx4X1tJSbLY1uyZz64s96f4Vm9",
  "key14": "2CgBZBxodZs2XN8j2VHb66D7ZrffFQdu62CfsyRmeiMoBAXW87gRHNBuBuzbgpitiLnKEeR8cYX3kPnDZvtkvu5F",
  "key15": "56EuxokCKmZvE8tcGEdeweWqmkarbymqhni8hrGCzTRQTkrLqTWie96skxdSzsDNEqt8Nk6w27vmqoXAt2VA5y1L",
  "key16": "gmJEEuUSQNxNkDiHP5tG3QQWGPdfkXsDW17dH4bvwWykCkFf81jV7DBJEy4V1geqBWxPn455sXqxrXyJvNd2CUs",
  "key17": "3GEDqVLEnaD3SRCJtyPcWFzZKYsw8sFZnZb2Lcf8ZV6c2D6Sf8UCkTyu6NY4XKUZpdHMZbZaqKrjsrCwonwNTPki",
  "key18": "2YRvysTSrvhzEc2u8q2fHh9iJw3xob7k42hsHNy3W4QbHvCchj68Stwu9bozcU1YEZbq3FeTQFBcB1qEb6zSWLP",
  "key19": "hDbqJmu2N7PeXigp5TVHMXMnJCNW1uLH6STm8VMkvu5Um4QsmRfXaFPkE9wrgr4T2938avVdEatRdRZrrxVdE1c",
  "key20": "4ptj7Lng7mXJVMcZrZQnXEUsvQkBBShxmHjHWV7ApimU2MAgodTVstR74NTjr8mmhPBr1Eu9U8PPAHytvUA59WEs",
  "key21": "3rSXdqrkDMNbUbvMKK44KSLVDyfc1NPoPZDSt8yHmgd1NTFSYibv3gLBQmmJCVSmViSFoeGqeMtCQgkm4Sg8uBJL",
  "key22": "2XUJsx527vjnjdL1sP6aLWnvBW8npLPFr7z9wruP5xaRnW9KMvmKu4uT44q7wAHzq5euRQmh1fNkzRtpUtfDwwFJ",
  "key23": "2WifL2AFGToHDkbRhEFVpfG25GaFvRhZ7pryeDnii1SwgAXMGZzndu5wwJEY9PZs2duxExq1vKDCt1B9TVPBSNgB",
  "key24": "3DdCVKw9nunZtMc4mW2eBJ3u42nUmF7xwBxG8282f2jbEGmBRqTZvjGMMrecEY16dfkjueqCkuW7ypeF7woTp7gb",
  "key25": "L87wJF2yyjmeX7bJtr7epcQSumpP22poTn24aiQQgYP6bsBfcqPRhrphLzGxcA9MMQt4AzYXLCjTrr4ZtUdXMCW",
  "key26": "EiXWfh7Rf1J7hSmG5Rn8dvL8dFw6YF54gbp6w7iDzsfo8A6eXbuKFFfxsWNoGG7tHic7A1hv8wowdojZhwEeCHR",
  "key27": "2532mAy23hvCiD6JGXgzxgi8LZXbMov4h1Ge6XdHMvUWKimp2SzwcrWApQg7Fuj1Lg1MjqNQAGHDPK9Qpv4dxrvv",
  "key28": "pwcGNein3e1DgGwnm5y5f72zRu7FrUJZpW9M9LzqRNJggerjRaNhf4YY6FHokXS4oDDFujYDSSctVHdnT2i9mkC",
  "key29": "eVbSFbGZeJKrwBzB9fop7qbT9GEQSkdqTDRGYW218gzgqBKfYb2Rkv5gMHoqWneD5LudWLko1GS2ifhAUeNJMMy"
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
