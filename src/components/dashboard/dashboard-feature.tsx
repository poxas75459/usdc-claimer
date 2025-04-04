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
    "3DoR8CNFjtu3fEKefAbFtWGiWAmeeGgeHWMbdabEbuTUe7wna9DyqoqziNhkoi1BCYbYEDtPFp9nbuyCXktQdzPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tG8dDTBEZw8HacBa1sJmLcugPTynacdhZ1DvBQU7wcqhdqtFVxb8ygv1NTpfq8p9b7PJpXK2kd2UsmtpUu8sp5V",
  "key1": "2aK1S2oqWREmJsBoMVKXf7MAzZHDTrSczt4kCXo94LWKT4zBM79wAUnNQXt2Z6W8ma8DmhtzMqPxfZAwC6RxG5N4",
  "key2": "57D3RJuvDEo66RYW1Gr3cSMP81rAo42zeHmnH3cQvobpd6oWbTkiFgYWdpPrRbC4S2YF3oz2esvFKkup8diCnLEw",
  "key3": "5uWkrbjLmEUi1whSQGxrywChPTRfeoi35wa3fdHPvEisimLLbZM46EXNteCGGif3eex3Ciat5BuL495ymbyCo4yD",
  "key4": "4LwD7aTHRAKybuFtZyVTEPt1r41PrZgSSNCttQ8W55Jj3JHF73vxaHqrLZcvrP4Vac9wo5wqPLN7MGbnAktscEeB",
  "key5": "2C3NjPQZXao28F6FT85JbSxK7Qe5bxSJh8GsySzD5C7BWTcWVwCmTNXTf6HqZ3tKSwTzvUVUQpkcV5MHsNsKNuC2",
  "key6": "5xXV1cK7XzrCcTEvw4cinYh7XrGUJJyFMnvgHiS2JCLGDovFbd2wj8MiRMsyQxQ7M3sBYJQojX7kL4XAWLWHMNyK",
  "key7": "2AhJqz3cvnxLRtqKm7UQkhRuCidGdYY3KQnUZ9i6hti1vmKSvQfdxLfouRqRPAzmoHEs9Ymc56LocagqUCxVrdUp",
  "key8": "RSnjbEBvtDLsuJKMLkaG5Kr6Z5J7NVpmdjt6hTinNzYkxyPiYtNKsp9MbUXbRwQfujGSWHPjq3rFbax9AYtURP5",
  "key9": "2AwuHC1dw1kUUT4DZMkZk2MFMcFUGJYiWcSKuyCnwhpkD6brSf8CkmtFeXmjvMA7275tEfWuLnwkf8ZLoDutjrNv",
  "key10": "skFpvtN4JnnXnrYdnyNoAnY5DGKnX4UJjoPuBKM22tSq9EHtcguryxta6ZhhMM3dZwAh3BWvveKXgpPsaHFnMUp",
  "key11": "3VSqExQK2hWHKTqKYEgCaeQQqP959eWpm8CCStRMKhcMsHiJF9wBavwYTfvW8BCWJaM9VkvF313KmRHrc1sTvXW3",
  "key12": "3cW4qDXZVpEdA6w2gSXcqoqDHVZr6k4SChc4P3AvRD3EMwWEqt6aCzvkUCDNFDDwBkDCRu9gPnusVcCFWdZsWxKS",
  "key13": "2xkzEHKbrMzeqktvKjxYahYVtZhvgsZViTFmBKePdSNb3RxvHSyYF4VwFhsFYfdwugReqfrTvjkda8bh4wDYhLHU",
  "key14": "qERHpLFgqQTcYgprU6DhWQACgB5vskMMUtV6WPuzwfANJvcWAtyahQg1p5AaAUQSuoybhXsFEKqgYRtSQZehrCA",
  "key15": "2yPh22zQJ9StkHe8HLGusCMyAgxDW81m4EQxmMoEMiBpwwV1J1byBQwgZpTbL9tzHtbka9VGKjSLVaJ1Vr1UZNgc",
  "key16": "2AQAuTF68NRdXNiBQooaxL7ep8UCMbdZpg7VwCeSaZXoFgkw5FmZpTyWd8KhEagXYnyBXKV1aGHWaiQsVZmvDRHz",
  "key17": "HtekX6DvfkxBoQpA6JbKzGpfbT2igdmYvqU5ejyCYJfzUUfv1F5CSFEdw7GdbKb3mtP1Qy58zJhpAmF5xdxCPNE",
  "key18": "3FjCv8VGEZyY9dwiJ7DaYKnfBCBWMsUVeTMtuAugcf6HDGHy4zBbEtNYkFeAAK3HUzAv1sM36c45hExwELUvHYyZ",
  "key19": "3oLrsS9MBw3gLrX7bhAciytgqRkGszSRqFR4tyPxNjRzJw6iUEwoAXkpWQHAL84CLzpMaJLso9qXEmq8vvxTMQpQ",
  "key20": "2Z1bbCDvxGT84SAcsXNDqqBKZP4YSYff2T7QdoK5WiBedMqmXJ5o9abVxu4UJbNMbLvZGmDZh5kuXcXo5XXgDQe3",
  "key21": "2EJdVw5NYQfNacGenaC3ENLxw7fdzmB1iZxJcti1WSPP4NYR3WKNYYR5cKjwQ76Xf3D5hEKmQ79L6oPjzo8pnDtN",
  "key22": "5dVjEKcnzmdEdcD7vbcwYDpe4igfcfVhrXCNfM5sToKsmzw95psy6BDEBokea7jyr8eHYdQ6qiVQfNWChBbHbU88",
  "key23": "4MsxgWFQrnYvsg8gsGa3oa87Wt8i58VhUkdPHvGzhcc879Vs4GZuoGBW44zJctoxXczNjhAxgqghsUFpe9aALrw5",
  "key24": "62EgFDDqP4mBaKADtF3NFDXHXzXcjxnUBoEYE4sjt3ZnrmkFWFYawdd2bCNUmeowu2yW7x2UmqPeyU7tZ4g7pRHn",
  "key25": "51TQGFihC28x3tjHDdddBBieFDCPZQ4WXhvjuqXgU1qYFzpejj4Rqvp1u1fLxjaj1SMb9fPtEehZ5tup2wXr2PGi",
  "key26": "2HeC5XG2TVqNhdBndncVF8r5Rv9CxsBXxdr6mCTCeGbhxhpCoqfxgZob4nehEVQjWMSaTzDbdWt9yfSt4wCNEQkA",
  "key27": "3VwBSmvkr5Wax3MJ5pjXepwJNVAtW7XgMBKQFQgJWHsLjbi6wWsCmCE16EGDvgdsA2shxYqGk3AJY7S2vm3g2S3R",
  "key28": "21R3YrrNn7p8Bx3zTiT82uvtW3QHheU3aQyCSqhmXGP3wpJHBYa4rRCsVpdAu7UAnBxqL9UdFsy6vYucRMoTPujJ",
  "key29": "fFfKKiiZPg64QUm3BDx7xNGeAakJhPveFxCs9hSG4cgAyQK37PnGWHEqRWL86wmucv7Z5u3QjNsjNe9gjpC4MEK",
  "key30": "5qQswwE9A9mN4qmcFEQq6R7sEV7qwuXfWAG8NGd49xbr6VAFKqWBBiBeMZqnHZtT9KkJJZUr1KTvP7NQxd2U6zZ7",
  "key31": "3JznuGH4LqRUVJpKNpguXaJa57YAe2ZVPsAF6hwh5aKEobMgMm6RgPYb9joFwXBbzaBN4VNTRPpkwADmzTG2rJ9g",
  "key32": "5hmzF7uFyvWD2mTb49BnknCNjtUZy7ZCw8MBU18uUXRFNzRd1HWt3CGAMM2xBcAtGxQ5BXUTKh5VvHbVMaX5gss",
  "key33": "2hRfQNKUoZTJYHVPTysMNtn9Hyia48fRBWgXbGNGjfBGpekUjyRHetry5TaAPzPRGtcnKzbhzz5szqNHD2vRW1ro",
  "key34": "2sQNk588keMJEYFQ3LqTYCt4U9doJgvSVHj3SNwjwEpzniXU1nbnq6rYVWSJvMYYTZ2NAXux3tVGkWPYiCHLyynt",
  "key35": "3mUZJXyBqjVTxxvkfZT2G9D1G8Y1mtCVVLUyJwavA7ZdzM9s97Rg2WQAiTRNtD3cnGbNuqkFYsAQFTnnZZguaWaE",
  "key36": "Fr456t7A5dMyKPQqzdxnUQUCVhq34JL3HuUgWqRWF879xFQY1bDFwbFJzwb4L74UwJD4VzUWJCnatchGxwP7Fux",
  "key37": "2fNMC42qNjJ1dP256EQNKZR85NYkd9aFQwoTPLcTw2JGtjMwNStrH9C15Jug53UWjZDqmvuHzT6fsvW8DYVAEEfb",
  "key38": "24Fi6gVccYiZrQKAm9oGRD1VFWgCNYg3dPFg5ZnWsoqDgDjSvxxHZFCrWsk1pfLKCYRz3n3EpzSxgUKT97PBJeM7",
  "key39": "3zVC3zUc64M3gywPebQoRSt32RNz77nTSrTVQYALw6zUFXZNgTAk9LdFouuPmAr2xXbdCfWdzKXuduihS7pnW5JG",
  "key40": "252H63cnaeN3bBmS1Y4uvrBPrfThmMGhTdXF67Tg7x5iNfLTxs45pnsmHBuGueT4FzppEQxbhiNaXKaPmQEXHeBW",
  "key41": "3hQGEKSu79P42dpqgbeFYpC6wpBdXJKWDZVTULBWRHuubSF6fRwPimbbYDFXvZ7kTBzopYDsN5HXSoqntQqcTA2w"
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
