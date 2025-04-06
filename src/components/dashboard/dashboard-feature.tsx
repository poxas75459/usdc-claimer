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
    "4TPc31F3Z5DpqtSAGd8gfjDrTdnF37nkJKfK3j9umN2uGHFzFK8ozBFKxww6R5YF31JWTHdsDSzVQtLYHa9PjLNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noCim8bbErVAs9wFgBwYWgEyW6Gytt7NzLrpjnUa7szJqbYT5mg6e1C9drWC4XR4EjqEcZMYG53oMdQCSmEZBqK",
  "key1": "64Y3v9Xdp8FmVoEv11DdU5G11QwGp3YTVgR8jjK8ZpQtjr98JyU7T1ozMX9bR8t5rZH3LWW6e7rJ37iuXLwQemg6",
  "key2": "Rj1RkQEN4y6cSSb3Kg3xLrGkT8RfdiRQG8G465R4zpZ4bLEXs8hETHhM2hiMvLivxusqEcN3VBYVkrKuFY8Zjtp",
  "key3": "4bz1aRAky4QjefJDH1tTt29YuDmZdN1PbkkTW3GbRM8rTWZ1k9SfKYJXyrYmKTUwZ3y4y6t1nc4Bo77C3ppuxhFZ",
  "key4": "2eKLrn5LRP6SLBRbVBMF6kgydDFpqqE4yaFgvkbEBFsmzwNo3g5C7XdH4QYJNHJcRDxE3X5CBHJmgzTYJ2eomvk4",
  "key5": "5Wpriv3QVa6cjiXLmWDNmT3tbFum7NGAg8cxTQRb7BvqWYLoTGz2ywu22pHTi5cAFkp8dkzCCwKWEJqfomzovivM",
  "key6": "HYRJk54NvM5e589PPWS4bUHZK7ePA1xDd5KWyQyFFPc7hZVcLRAH3sqA6F9bNx5Q9pZ6Tkf8TeSag7ZFhziWVLp",
  "key7": "4Fmcy9ojhsrKKDrKhwLXM6mHsxkq8L5Qkb1MYiTFyFXEggAS1NeNcUfFQKyEBLRL1NXYMf7iVqinnpY1b2jsKrem",
  "key8": "5XW847EfdTmP9jWLwm9wfFHETKiabGDSeuMkpmMdm6oCN3MFvAZ5TuMNFZ732pTHNfpbxgqXMnZQYWvZGnJh4s3A",
  "key9": "3saQsvgnpan4Zi2o4UwNHtcCDujD21qhw4wArkx3wN5hCQpkjjqEeS2ghSLvCCn5mGJ6eNEiP8t62AJct346dhVa",
  "key10": "4BZSN3eJK5SXqLCePxkpzPWzoPrydgbnfmMddAx68hrYfN26hn647HzM9heABi6L3rSYcS3175howmMLBm6wdoyG",
  "key11": "4PZPKM3LqYTt2tmEA7iGLY5u9iN6n5Qxd81zVbQm56rqgUYeQw2aRiC9F1317j8EEA1U5tBtFQrx2Mp9HHcYmxrf",
  "key12": "TBnVpxsB117jEejo2CUDAmKo396simhvixZk8bkR3iCRMGWZXGnyJC2Sz3tLuBkqyhYu4zWXzsaNtGRD3guw24v",
  "key13": "3ciVqMdeFbSWwhFCxbyE2VNUJy5KipMWBuL1B6fZoYgd6QcBQJsZZmGWQtpVTMcd5w2pvUz6xRNKHVgtiYjLiT2e",
  "key14": "5LXkrmPFYgPmndkKZzfR9G6LCyGEE6sLRUfukBfcmSVJqYpvtRnRA74SvKEbJzFYyFNmJK4CPjc7duiuHc9eZ77e",
  "key15": "5mMqgQhfzLiNwPSbeetbpeHH2jNR3Qz4i2rCgMt1skrCFRpVSnK6oPkatVcdbGa4kyHVtri7DwEf3ctokr1TwByE",
  "key16": "2bAw7jJkuLrLmjzYN4sAhLTxjC836NwLuM8LMCzxQVnmyzqrco15nUoMU89uCBr2FyQBBdSEWp8WEn4scsVMCcba",
  "key17": "4oLKs8abJwFicPkqBUWKXyPfnwZFdy4nmXcrUBUK2AZRQNFzh8psAttJkofu4CeoFcR1xCMcHozBG7SPJDuNhyv1",
  "key18": "R4A6fbLJ6UwoMQiYquWTKyzpkRJXMFcCzxrBWcHWdwKALffACRBMLQ5oug5iKhKdede2jhCxp2NTdsGVzz18e5z",
  "key19": "5kuZfSC995eLvxQaaGVSHEZLokL6SqVadwgUQ1FYXPyMpHFzSdxWz5Kxcvj2XaVb8C3VztYhWMpjsS2MkdGAe2Zi",
  "key20": "5KXpsRQJwKpsmKx7aizKDBSKgDsVMioZ8GqFvCC7ioraWYwSMZbnPgEBudmGYdED216LPtuR2uRTNnpnkLnEhagY",
  "key21": "3LLCRYcoNSycdYYpcWqvKkew7oYjDqAUNKdq2VgpHW5tQcUUqzrLdohvT8BabQXPWMjcGLuuLKZkyaEkDunuHbch",
  "key22": "5DV7mKGeTNJCkftbcA6gioLczVnXFtxHndzF8jKrLYHxt3xn7HZUJzfKhWhq2iv4991FUB3YLrkAe4MzUuxSpP8F",
  "key23": "4c2jTajyb4u9T7QgzBsh1ts2haZ8vNSe2MArDmBwEk4QJ4ajDLQ4VYu22zhvbtcXxPNheKGhiGvKfSGkEDpb6d1T",
  "key24": "5LtJ6mkZ1tEXNpKAFoZUbKGXMpWdzLEBXnS74tro8FEntgbDrrz31fTBkHtNnu8X8CjiG4fDMQm22pQ6gHtEdMtG",
  "key25": "4D1GJc1sjXdtr6ZZYMMmbjehrduGdqnXwav2xsWLEduAJhKsGowLRp4RJHiyosEyXUwinske8rdqPSYQg9ys9MLd",
  "key26": "4UgJJbdwzM6d4RR2KFna1phv1YL915yzHCbQRF5PuFEnq6xbL91GxygrGvo74Y83cpaK1h746hHdGsSwuCwstumF",
  "key27": "54uuqD3LmxK6VjTFrks8K5paXrqAnRxwcH8HzwpTjAkjDmJV5vkWcuvEWe5zbmu28JApXjRLyUMiC8dEhfKMDiA5",
  "key28": "5B6dvgG7M22DvEuD7AH9q4aydoj2uYdF9yofP9ffTvAquQCJTg5TDCNnVZWpML6ZjrKJAL8JZSrpcfWMQeV8HWTK",
  "key29": "mv7a9NVzpN5HrRZGg7GCfu9A3Y5rKXY891wiz11ZPdtpZqs3XVZ9ukhACpCqrMJgttwKGPwtj6rAKARkv9MGSsu",
  "key30": "5iAR9rVim9Dn5Qc5YSrS3infi3XxXizakSV5xbvsGNHYrJBmUbn4qhdh3iVNPRfZuN1vWmiqTsWJgr8zhJvR5twX",
  "key31": "2WgYSZsqJeHG529mVC13L4JXBJABF32BtrAiafLN7JJPPJVxgaUNJNKHGBfbYFjmtNcV2WUFzKx3B1hAqqxGt2ER",
  "key32": "NFQ8XpWwZo9ZHmwX1nukvpVrnUNitFawYamsp1WNyehk2dAVVcaB5hWbf4AxZbmJ3Kk7xsx93VyidwXfhqsApcZ",
  "key33": "4ZYtuwJi3SM3wFUDPB8kE1v6iS9o9LzbkEb3vwimA3zoUPo4fQhtXmGXboQLYPmRu9uSVVicRnwrMdSzmqbnRmXS",
  "key34": "3RKHCtYXZRpUAwKUUzULvJjeBqUg5fbYkkm2JDcq67qBwDykUvqC49ZoxLJRT37ykdBi7KqHgxrqac28v99C4obn",
  "key35": "5gGEii8ZMYaXVP6Z2fJ5uq1VdXRLyQib7NwRi8Doogw7ChiYSipX1RPDWpMRZ9ggZHtcMewCdpijGFA55dgCcktD",
  "key36": "374fhb8P5mNcrQCxD4gz1ydU1fqJ7gtYvk1bcyRVpH5PUogaA3EFpTnZ6G7WPsTFReyPCkFgefaSrKkr5v37i4Uf"
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
