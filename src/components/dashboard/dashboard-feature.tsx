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
    "sLgfjxwxJc9Zrddud3fKWWgZXBmgrePDHvNHwJLpwQPUBSxg6uemcTdVnTK7fmkNphqAYXK4xF6RC6t9dnoGURK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjtaLhx3TcJqb27PEX2UATKKSMRELxYc82npkLiw8SR6sH4xwCwJvvSyJsbdv7poUmtSxR7HWpdgj9KtLSuzPrS",
  "key1": "82pfr46WeEcc6NbV2nbDCn4Y3Y9aAfR9mE79EEFBPo5ewnzP1AVN8Lw42DBKUdReyqpEFQ6QBw7VnkwRLRGSriV",
  "key2": "34mwCitM8PtZENPQwqiv6bXvuHfoJCPLxyD91JFdNxyxLVZ2c7LuzSU23KrPLzJojRZrEW97H9AHtA1aGr72YmkU",
  "key3": "2LW7TLsg8QEvVfASDGboncGB5cZbpWPJcmriD2N3wR41GYXU7epthgmGDZS6qhZx3SrtJ1UQWFC2HWnXtqfFFaX4",
  "key4": "2tXkNqKsTQJugfatqYg4Jkwzze5G5eqZWVEZp78fuLR1VSRKFn3tHva3RX73gU9EZoko7NPdJpG5M1mdp6Goyhzy",
  "key5": "wrUymWTYximoe4fVr9bgGaUd6X7fyY1EakeqPorHa9mi9YNp6gZE6CdHCmv539cGhKc2gPCzhqtfArzno9fQjAo",
  "key6": "5Bbxzjo2mSXNPR1yVjHCopjS5YfUdcn8DUdETdavFiqrjgBu9pYGk66NkofvfFHz4523GRv6wNC55KZJ18yzVXWS",
  "key7": "PaSx5sXP4aZpVidUMsmQJHPvSro8K19spjQMZjMnnzNgwinLxvZQ5GJFrT1iuPsUbzVVGKSbkNvxs1V4DDjkJaN",
  "key8": "3KdMab9a5d1ZYY76bCXAFiyeBqGb3mwSgDmzBP3ncc67gd24jzrkbLosp9cQNCJhFTewamiioyQPeUxRk5ZaSSoq",
  "key9": "3HxWrgP94GFWBrNPhbJqdkdGXV9ypvwVpwUxgWq8iYL2RtEgVaGKJRiZQRv6gd18K3NXvuatz5QUp9PFGPz3dahv",
  "key10": "48bs9pupsAzNAmGBagkT9RSDTYokmnaPDDaA7sHUMYuEVF2ByxjhYqYR3YQc3LeZmaxf4NpBCVAnzvAKo5tgqUxN",
  "key11": "Zc7TZbY5mGqgFLQ6XF4RcqKGGmFZE3gYWRsaofrkostLSG5xZGpydMjnYvJ34anFEJj1eiDziWv45rmQztsXo2J",
  "key12": "JgmEWeLK65AWdkaozTvd1Dde6xhADbnHRHUjwVuksmzE3eBcVzJx6rxVv1i1nZ9u3eE8d7feMTLnWcVg7VvH2wX",
  "key13": "5yw1CVZdgDG5gTRYDjwZrinJzvretTVh3a7BJg5kvfhiBmSiJ9BG94bPoyo1jCykUU8DLh2tNvYKydYw7Q44t8vY",
  "key14": "5dPKg6eo8mM5C82fRkDz676ENd7NPndtD2F9CFe9ZwahzrwXsXyawqVy3upgiw8HLQ1vBf6vqn6Z9f1XCBmfSGPV",
  "key15": "4C6442589UwE49UWsEm89xziiiY9JgtRwPZjQV2rnqSMG4ndWvnxaAnUetBYr8hv8ThrvTrChfkhCwVwcWZVzn56",
  "key16": "54Ptons4QzTRq9jCb4jrUo1Va1rppaM7FWHzWoQ9Zku2G286J5XxjRKxsA1fmyMH8SmZ9EDCjJfFMWMEtkkkAt3S",
  "key17": "22xh4mDSuGhZ9HscxwLF9JRppUT2ozavfRuKLaas8ZkHXeWR9GJbkcBxKj9ZSXjw5m5FJeifVuGfeLSJKm1aLbfU",
  "key18": "3yzKEzV1MMo5ekzVbzWf36wrtbiaKQERNJwpoVVKpVLHzKviYwkEotY7vjNyd87AsSQj6myc5Bcutm9bHnUQBfeL",
  "key19": "FYc3qDiBgCJsK9ikydbyWPsLFD1MW1dZGbxjsRGUqgUdgF7zfYLhN5kr6LGgF2JWpwjeP6JQDN6PNTo789K3dQu",
  "key20": "5bF3m5N1xHw6kDqVH1BQhTXqcPjVMyn41fcgWayKX6D2LfeUHPzAq7v5UzjAPMUBVKuSf3v41FR7BcE311SwMKey",
  "key21": "2wRpdQdBMTixEXiyNfQqiT3BBLgJZEURLGBvsTEWHmNvAiZyZmaLP1zJPzDxF77razCKUEUEXcJ7wSVFoKqvTsdZ",
  "key22": "3DLPf85V3zgqGnAXcm3sbxaYgdg6P8zQSAih8hMTKSHXhDreFRT7VFwR3urZ85JPdGUPFH2wjpKn35AH5D9CuM5e",
  "key23": "4hoUFq1E63qrWYeGHRgyAWtG9xfTE3kczKKCs42hMnKvAR9BaBSdJbJXcDVaYUfaAVkQrMTvjqn6284MAD1JAaLS",
  "key24": "1oGck87PgL9rkbdFM23M88vHinCCTUSGwS9KMEkwt4Z7ikimpAYcXen5HoJuFrWBJ6bsKBcmozx2xRtNzMfdWgW",
  "key25": "8jGmmFYsENNzmBVqMgqqfKxr35fChPuZCAPWQYYnN5JbaQutftzjwdyAejo84e2u88TwF6QrxuCu5koNibsS8XW",
  "key26": "4Nz7RPT32c8rFcFyv1osLAoqe5EoDaTUzqrgJRrZfYgBgcAvsXua26YkWdW9d6SPNwNWvyqs1BjpFFayeechWcv3",
  "key27": "GTJHW4MFEGKxJe2xWPyR9HYMcTiVTqaGyfCX9LRZa4uZsSAqXEmcVqarGBUr4s8mqRPvK3QfbHTJAw34qk9LtpH",
  "key28": "5PSUcfs1fyyXtqMGKHMJ7npE4v7odhweB79uhzZBg45k6WjxakJY5ynuxqC5uh6Ljj4gXjDVzNydziA4XMbEPGWh",
  "key29": "35okSbAfX515TDNbbeChb2DNscf4kX3X7oBxCJVM9STy9HZq8crN3zZCZMfhrvxQS7zfX9RxxiVdRQCqwpK4LoHh",
  "key30": "4Bbe11Mpaq4vemGuMBN5p7kPoYkJxB389vt81WW2A7gXHSLqXBg22Fdu1uKDc3papsYedaizBKPDqn1QYxxPfLuC",
  "key31": "34772LKmconiAWMYeeMN6W2ojLPacMhJEmyB8y4W58PTuRp2tkea7pp65os1kpc8axXaCDkw6msRkjXftCT4ZE38",
  "key32": "39y9QV5jyjmoZgs3bdLS4gXT3AeaZghpxizdcygBibXckwgPgx2iH2x5AgHxW9497Fo1y82JodKA8oMVyxkc46fB",
  "key33": "65Wqy1nJYwjkXZzREfc8W1HmagPcXTSRX1dk4g1n2U4MwRUzFJSFc6mFgD5trPUAnSk8J8gZYyyaaZxrM2zER6vL",
  "key34": "2LgBCF5BYSPRRUmCkBRcsyzXapGGuQSG4h3tfK779tquptopwUHqrRBmKZiKrdfNM3DtoQs5VkmR77tzYY1CGksi",
  "key35": "3F3uc7YGYVX4aCtvBWrUtuuBVkgNLRgkWBYk9LfsAE2Ff2GEqt33mb6QWcBPt78WAcY9DZGAVgCLgbjFE9f33Akq",
  "key36": "5Mu3w1iCyvBEXaauvhiLH8mL3JWsvsqs8BKQXD8kVaYDFZbjqiyXHeGxmwJm8eDMrXWE9kaoPqPKt7Sr8v2mjzez",
  "key37": "2rY7g2rWQZb1n3CPBBPm24L7M4zzYbNZNaQEMD74nDJCwz3z21DTeUVuCm3pKxW2x9dbwEipMCtrVVxiQAcBPNU3"
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
