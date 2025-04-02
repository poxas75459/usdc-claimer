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
    "4Fy4YPxEb1PNkCmWoNKfZNQXAnDB3gFpvzTvNSptcGHie5QH4vZTdvQ5muftR46XzkHbVehuxY6oKXB3gWRkkUKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uo49J863U51S8K9q31zRaT1PQYn1RoFefduc6bENpjy3sfhCmUh6k8NDrGvEPdARn1oywsfur3QVAdSJCXMvjwJ",
  "key1": "2tb9YLyXAgVazZ6Z48u2zeEd6oFUncRGEM7z2cNQbxXVEaGWQwwXEKXcQDarN5XGug3tNNV4CjW5uDWyanVyJL7",
  "key2": "5u7CH4ee3euE44KfyyU1MgQPP1u9CyeZHZyGAKdyQmUTpNE8y4v6wTvHyVEhjs3u6PyuyRJ25uhgWRjJVGWyUpNH",
  "key3": "rRZFdLssJDFgk5hr9d4QVcjBwr9tmkeo3o2CdsSP5N3tCrJnMS73bHjzBBNCgxDmbZUwxHvNVjskYkWhpdBTXpZ",
  "key4": "5KuD8J5bwji7SxLk66A1X1v8tkPc9yGMetFkLQDtoi9AYStSWWbfYGYLoubSwKsJRwqaMfUVp8H993jF1TtvX3oG",
  "key5": "4ZZzBguvN9b3UfckDzvUSNJnvW5yywYVrJP6R9Kk9aj4Bo57pHjDaSj7qAUFEsshMshxYd72LPosdaRoc28wSGnY",
  "key6": "34Yx1aU6vHjHimvRnhiMzZucu2jTXvUnfq8RZPzw1KnNsuatqwYZmxGZvb3esqypLsSruMet8AUh1gVEYpbatB6U",
  "key7": "2c21kXBNSEucYc4GzPzEz6QjYua95AuidaZPgVBfMzxB32KZh4cucsZkAusU6jvtGFE9roTnAVckUQvuuSsSZpWG",
  "key8": "k4NrJssrPjaSaRgcLmXPALSqXoZpWuaMW3vHU5BAcKpyv2y5YdDonztRoWcgSxphSfeXh4edkdgq1tz2EDmeEK3",
  "key9": "VR4QV6ji5xGKfifCc9pN8cj5FHm9mdtZ4juevLbNBrXrJ2qALiNz95yPqb825YLhbHHbSrxsm3Wp6rMg6ftaiGq",
  "key10": "4jE8NPu6iUxKfvSTzCRnZGsrQfAgXp7QhfmBZLnmRCfbPogsKds77ySKDem2wXWbp3cmLnkaKNdJ29gwEvtDriA",
  "key11": "oux4Z3xwT42b5BCxU3Ergazg8LQ6NhdyqxBj35wcs5Lj7hC94Bwz8x941yfCB2pdfyEYcn1KWhhMEtb1ruT2FnB",
  "key12": "3EQ5sY6CmQz4GsgK7jcND3unY7DCBq9baBYsVbuGVxUoPbRgDDo5V2theTnhMAB3ikT72mSy4AqEDZoQLuGxwQY3",
  "key13": "38hMYsJiarFBti1mEY81NSiLM2FZ6HVNMPh38Lq4FFJtWTkBHJw9Yg9w7ngfJ6XfHEzUrKuLqirxL1eAznA5p6KC",
  "key14": "5QwpPpwMm6eDrt2mZN7dbgPXMyTMsUmHAZpHFqNHoeHWrUW9228H9GSB39Ts3KAQrE7u8sLuvHHDB1Nw39pPtfsS",
  "key15": "2BT8kEFDYfr7mkX4h3NfpcfqtM6eeJ5HmpVmEYi2UebUnisYzifAh2fkvoqEeLQXWRkTwzopv2oKhRAQ4zpFgc9C",
  "key16": "62wE69ksAFycckVZjd2mRpcy7xDEs5ciNhKMWwfqUGN27L2cNUCANGwvd4c6rhH7fhHE51xb1bfkoRmZFwenVdeM",
  "key17": "51Fi7k8xDe4v41ZxqBdhEWNxnSZQ6b5NZmHHC8VPcVokuJs5ipSomDjHHnTzd5HXxvHb4yu6aBszHwH47B5teNnJ",
  "key18": "5FsfmpDbiyGsKqCu8bvE8vWvdnH9fgZtgfwXSkWpVgHZ6iqpgi9YiYohAyUtnrpRDGVxUofCx69gepsGrx548hzh",
  "key19": "4zYkzccy86GUGBj2TYnxFcijxRbvxqEPLdUUF5cS3viQwFzv54jJn4Gc8TTHuzA5JCyb9FDhQ46AV16xeYDPVzDr",
  "key20": "sz7YZfsHBnsZ7ibXsxXh572cSS27gvMskLNHGeHW69fXivW2Q1Hn9ox1U6fU7sU7ug7rad7RdoK52prqXnyEFPZ",
  "key21": "h276pkDbkigPo7HRvH6zWZQqq29ukMCnsiYxcBK5EK3UoVi3jafQSth7u2v2qntQ4mYKWha6FWJEKcXEdRsG4ei",
  "key22": "4w3TXmDyyh3iQ2exvPbYTYrn9hK16bSMQzRyxPJXNnyE2FmZgx2ZXqFkas3pea3NwfkScgsF88MLuJVQ87pn3boi",
  "key23": "4WrGDHypKDYGC1XwvqTFbnVZeDAw8bP95U4ouzY1b5fSsWpGvKSFWc6PWQDpaaU7Lsfnrd12sq5w5YFRN6XvXLNT",
  "key24": "Z2u8y8r5KnwQ5BdqWFQXMXU49NvZxsN8xwTRm2qMUqFay8tfoQ5NK3pvqWzGFM85HcWWYbods2PrNr16av9FVVC",
  "key25": "mFxjtursJ8PhAUUXH6rQg2PBYspPBdZ72sdxD1h54VXWuYs138wx4jHQF6cfEDQWtSef2j3wr9543d5pr1UdMjZ",
  "key26": "BCSVymw5x16JYyeHiBY4iCNvgLJ2z9JQ2nvR8uMvohqoBcXNmmTs4zCu2JUz1pAwzLJT8TM3CWVYmiHboDBzZRx",
  "key27": "2oAyEqTMztgDN4dhBAK1cDhaACVJBWAsrGdBQvFybkDeWFYwWfHDFeYD95AhBDGUhmut4H9sjGNWhp9aBkVCi9YD",
  "key28": "37znWqZhuHYcLjhUGpKKKfkcorkdvviX3miW4YXpJdi7JHd3rzFwhST1Y5jB2dwbk5z3n8KrdCD2K5mUdcbnzcbK",
  "key29": "2oaF7UWPyAN4Ee5yokNbXRVv3S8PKquaQHtd7od1hcemCSgd288GLcKktk5cBwY4e6cHS3aYiSyu8oBXUPrwXeAg",
  "key30": "3MAyCTFwMeBjYLVvyTzAChD9FViejQ5kSRC3zn5td6z3PGgiAYKXmDRmP47a18HAi6zUWpyepnQFUTBoTqXune67",
  "key31": "5yDxB8cgNoPzg7REAeg75Th3GBheGAk5cHXv7G1SXGw6SpCXGQWEvW28JnjtJZyAe969JzRj49HNvVSKnH3WRmrM",
  "key32": "58pa6BQoMM8GeTzadjsVVqtP1ZpdY82Ct4j32fCtZaEUtxu7RrKy7gTSZAA4Y1Y61ehviPNYkRb9VXexdvf4iorA",
  "key33": "5yHLLjm3AaQn1CWZKRVVxWkdMtKpm4KxDtmwvQbNEidRDnMetrqxvhWJPkXXJSiVuyhF1JCZdqqGuDWswEsZcJGJ",
  "key34": "4syg4vdLmM7WJHAY6uwr5qsb4TjbHX9beMTXxZyyhBZqdfUhWGifH29x6iS6FZRGUAWtcB3QQB9xCYXygFAmKrSE",
  "key35": "5X9sRnyXMnymwaym8xaqKfEtYaNQXoR2meBCXdj4XdQikyxgR7AxMCsXLdRETXrfnWUnBCHea6foEuREwcgRQBEK",
  "key36": "45QXtiZqUDtqvT6a8drShvXdzdR56RUv9XkWDGLMy7oMiXVi6Fv5qUgdY5W8SpwaqTvZFtV5Re2S9MgM11w3M1qW",
  "key37": "5dyPZ5vSCUaaVm49DP7H9a4pEZU5AFwtjBoL5V7k5LTyui9cyDoqCMdChe2gt5s33FBuvddcZ3PaKwrzNH3xsd1H",
  "key38": "3UWFYvVVoQ2719aoKRZTSyAQR7ZjKBzsARrG3jzTBdPWqXuVhAWSRmF5V4RiT42uDPtkdCayWNqvjbthvjXvaaoj",
  "key39": "43LunVLrqifWRPkog2McfHF71WiZMj4ePtQokwmwooebkCHq8dTcYhdUSDgsvhmJwWRJC5gqE8Gsf3fbVKA1WRBX",
  "key40": "47AKtd7LkFbKfuvqL9TMPj4uJmGBaNFVnMbRdc2nbz3t3cApiAy2uk7wGaFpEVNc9YWDYfnDTYLsdSgKsHjc6LBG",
  "key41": "wFhg7WyCqZoJuVd2q2m9YsArAwtyKSGNseo79NXyr9dFYqCEWgCY7g8JN7pE3rnsE5qKRJb3B9kXfypSXqmDT7u",
  "key42": "tcaBVkk4gpqQB4zsRWEamGBFTRKRKUz3CrhsuGW392QHbpkmB8Pt9159JUjXrkwu8WUYhaZovEoN855Lq3cha8J",
  "key43": "GgEhiYkMSjNqqjzLZvQkvwB7BHE6j5ZZz7in4j3K9ZQmEhoGGcBLp529Rgfc35i4ZSMQ9kTgBsmi9zXRvdZJ95b",
  "key44": "5AhykcJ5GzJ4Pm4zjZjSA1QTCi9xQ7cNVA5AqxKRaVUqtXaFmQJa1vBDQRz4drEXqQHbxdkhfYGqjP4EVEc28YqE"
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
