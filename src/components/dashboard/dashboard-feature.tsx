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
    "3RCoAd2hjx3KYf5gYBzK6UXe8WHT6bkABmH8uKeY2qPagvVY8s8MGwNx567Ufw9Km7xEjLZNUhHyX2nioMLF86KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121NEUG4HBDqyFu7cQ9JwFCtEVQf6xmrwX663Xijuu5pyEGwiyVqAY3HZiNrbTSvWS7YorV4BDTC2kL98trqFBoc",
  "key1": "2yBRbxbi5YqiDxyHR5dfUYxR2PEGrfbzJDUAvPHi6a6uepCNJP1kPpiGGrWpyEKnLQo1yhsv9NhejpmeW6iZN3xn",
  "key2": "46nhHWxfhygHB4G2s7H9hMCpd69FQF68a9XEVrfCYod38VUWo6Jcz26Pa5ffFhPh9AhGWzHuJe6SNEg9V5f84qFX",
  "key3": "2w5WHfaiParPHzK3gpC8WTDjEgw3QsCAsEkHmDSDWoAwQGYLcAjEbFuNBQij7BDcV4SYkPGuXur4V639gvpa3Nsb",
  "key4": "5sK7hJCSr3AzQFMu2TjKf6Br6wavLd1KHL9asDefMzSLbpttn5kxcXfxpPK9ck3ioE4sKTiZEd12eQmGpj9v6wwq",
  "key5": "2VeCFbGQJePaECV8iGmJFRnXFySzxvwPjNYMRyem2dn4tv5NWuNGe5HMD8E5xcvFtxgY6NMrffSVqyiaHm1iLRLm",
  "key6": "4jrX5V8WJeL3kVCfmyHkhG2bWk64mYDFEHDfHsaBqXNVjdUnHH7G2g8rzLVt5cEZsxLJphT4pvwtyyFur4wPzYgE",
  "key7": "2fzSD6M45HpLY1AfEWCccrbvgZ6m3JjQQcBDhtKsWWvBjZoLuN5BTqjWaKyAV3V5t2FDGEQqUehH3Jzp7WtYhmXt",
  "key8": "3PrN33qWKKjZWeYxE2TJDrasqrE1zn3xdVtoM3FhHmP3tqewQ14QXaMVp7C1ckAVrh4cZdBBCogSxjyDksLQg6ay",
  "key9": "2oWRX7Jt33EtrmrvQ9WQZF134rTasRe58bTtzognxg3SKQF9abb17FEaHce3Mk9fTEdwtt8Fgy7w2btavMhtaF84",
  "key10": "3vHkvM7D3KdinBR4nxSUg9qifr56WyWNAKRmyXTSHD3YeE6wLamkgG4MnzyZMhx76R3ZxqZbs7ykMnRK64utKvhJ",
  "key11": "4N7ZYa6zNpbPD9To8yDLwYKThZ6yR6khSBWjz1m9j12YtCRSspHeFZ6eywy5RDiFjGaX4ct3K1SyH3yu5E3PCbtw",
  "key12": "2YGVc9dRPa7C7CPRpygQFBo8hQjqQNUhEGtSq33Sd2yTiUcLn7jvoKzL84QweXt3bTs1mVpHZQxQgHAEnv2uqFou",
  "key13": "3GUyiKfDkjCHJgagyCHQFr5gKmHsaz6ToFippXFDCr3zbJcgS8SnMqkJt2S1Kz2xCTtmTW5Y72GXygY5ao3XCCA1",
  "key14": "5kDYCuvqmEPb12NtJzLgfMyjvPp6mxNtyDvgC525YBuak5E67H5MDQqXzwL7iWsVw4gNHhNzA9EFLBXJyT2vAyuU",
  "key15": "3G3iQXzr9scuAQ6xUjnhKWUNjwDJzTKwWdvNCZtzLaL41RgLyxdFakVXggpGyRzLC7wFjqYQ2JoNEEFjKgMpUKKt",
  "key16": "4ftZUBgBRHbV3kxnTvVsz2SaGFBd7Hy9MDcb4JSaZRjaHtwUVTdFP4sNZLeyKSBT4k4eH6zYHZySMbMnDeWCdvyi",
  "key17": "5D2cqHxDbEoEebmfwKFi1dAxez3gvHpquvKU1cbGkB245z1CCD4hF42jxWSsqrVvtykNYCiTD7NGCFrjukS8gHuM",
  "key18": "39hN7BTRSTjuta9ExjHCArgTabypbqwcGdu7AEdzyfqWVLZcYm4ddUaTsKxyaEKrfnR1UMeAZJPq8TSsaNTtKFY7",
  "key19": "3MDM28EfxW1YRASR2xigsnLwj5azcXAr7nL1CHNpnRQ7s3AQrKvohU2vYMm79jQkz4B5fcMZnCiAXx4sygQuv7dA",
  "key20": "41uc4ndE1j4VT7ZKm7NMR2siDbrEkEgqwyiXgrBe2zDbt4A7ixLnajGniCRWDHLfekAZgayof6tZQ5ze9o98va27",
  "key21": "3pUXUA8J1uQMdtpXYvgzzVMQdsZfkQ77enngdjJ2iJKJihW2WJUfEVZnB7sppTs8K1KLNxEQ1KTqHBwTAVCZpdGV",
  "key22": "bdfHsNtssT4PLW1gJffqUoCYDSHYZKdUm2wpuJMmmTCj7YYHNcSP6b1159aPFrX6x3CtTXQTpz4Db8S7Tq7GAAF",
  "key23": "5LaLa2GbEN9SaVyMfwkJN8KGje3429UZDkUAzdvkgDpqnWYmvpBghQibNUz94FZrirrqh6hMcht8tjRV6zd7Nr2C",
  "key24": "RP6Sd41FDqAU7QT1PQsdSWBDmsc9YFBNvSbDnTpdQ9rWbfFztQt2wVodzvgsdohzWmzZP8ZEmWwXGZfB5LZuZyP",
  "key25": "2moGoaj57TXcMwWQdHv6mf6ub6mQpPkBWYCDAt7rEgzTMRswymqJwpcvXcGvh6NUBCxB124jxprVKmdtiTAMWUfE",
  "key26": "Dge5J96wMhsSRHVc1bFA7bPxHSU4QPB6f4jUwuUc9HvLaqqCVdTsDAHKyY89fnso56TgwRQCEjyumSgSBf7kb3p",
  "key27": "3EzbrQ721k2eDgZxFKtyH9KLVqACNXEwyfLH3SEnyzeedLxKbcMeVUjS2RxsichzFo1GKyuDWVkcXhCbsiHTpy1V",
  "key28": "5WEH6TYJr5eocyQmZffwSgTqv6P4YvHJWa18fEFKXtVUHVD4XRQ8w46jaTn1wk3iTobXKaXqXMsJS4NHxqxFPeVb",
  "key29": "HHrnfNwaL4oc1v7CR2rXtjDP6cvH3jpbRMiA8oBcaUg7PZ3AyFYkpV4pC6kjTwoYDd16FU6HNwpNWffviR1HeMo",
  "key30": "38vurCGBRZC24zkHmQBS5hgXydmAnwt7WhSLJ12GYHnwAyLyqgYgYbvFKGyUBXFmzNDia6nY7suJrJPvQbwzGwoa",
  "key31": "39cSXsQHbPyARGuJEZkeTtEr1GRRysjGnGMea3XYNUoFmpercm9YiCrXMeZMK4py7WHdLnjGvi2uTaie95SK7vwq",
  "key32": "2eVs187x6fvVKGwRJqudeaZmJyghsNZ1agjrUe4hF84dvxH6koBrsbd7mbadJFVRNfFCyaZdYFm6dvQQRVqgRZXp",
  "key33": "2CYNmHFxx4kaeZKtfFWAVRc7nwm3cu4ZS6B6o1tyqgLLoSXxSaUhS7SojkKpu8xGi2HCkPVQUvfD5ZFGokig19Bx",
  "key34": "5vhyDnCBRuud5yEcsYTtVbP3j7z5DziasN7s83h8rc2vB3xdZpcEL5nce5X1BEqoWdYriCT1FmFiUqHoBEXaVcJL",
  "key35": "4YZD9vHukmQTSahv1pGXxDtfXSYzgAw23iGJKFFzk1Sa7HDJ2WbG6oSSnx6V5kbtbmFqXk8KWXShbGsH65yDoR9d",
  "key36": "3LYjW9HFigQF1pQp9B1MdaYCi4b6F3hUgjjHzVQdnY7pJSuNDJ4fT9xjJdS5aa5FQ5LZSAkNWgFro4dDAsuarD6Q",
  "key37": "w5LkpHUxsue8SuDPDEcF7yszWXUH9zkfve8CeeBu4kGabLxkHNSiovDp7SU1y3m7Exdk4iTjMVxPDj1zffTFbKe",
  "key38": "4xJoLaLeEXHksBqEsFYdUQkZhkf26D9VNbHN3qA8zcZhQZZucWdMVxUqR26sVw3hZVM6VeXRVUuNoqKawuLtuMsh",
  "key39": "4CrJjWx7shRwiNjQfHVxSQkxb46hcoJLXkJJT7WLQ5bCcGcgsBo1u3pbNZCji1jX1byWWP54Cnm6enVhenqqxMYJ"
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
