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
    "3vm9su4kVw8YLiWPHk1stB4upsMWKmRYYU3ubgeXM1j1Nk8hxPn5o347Whm4iuA352FnL43kD5WGbgKzxmVBf5zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c34KTLJHG2tVYAqaVqZdyet9tPkTMniuoYCfu6LFpistdUACiQNGysp58hdsQQfpw9fHM5MEoNCKitTpbAHs7vj",
  "key1": "4JE2qSR8aHRs7HknUix9fQcw54gHAKtD94pfUXhe6XPkMAGZsbspk4ySrPtUU6UZ3o7q95RhCTNNxgzN8ignrTZ9",
  "key2": "5KRT3TbQ5WP8yGcWsjkc7dW2qXu4F3XBbpXZAm7vrsQ3iE8DzVMmUmkU4yhzsdJdgsoVFuwhUVp9Wbo44pwAgorL",
  "key3": "2WHDDWQZBLExAAN8XXopuAYsJp2xwNHQiT3b7QaRXLaXYn2jYCcQBRd4XY3tNU2yfCCEhM3iASwfaXt3c71rsDFX",
  "key4": "2mLf4GWoC7tapNwWPJiJzNh8qLCNPiVwqPGXzV1wAjB7UsWTjzjXXRwukPYH5YmMxr3MQT2kw7dzzdVQP8d2uk8F",
  "key5": "4aSx2qbDZoF15pQWrM1FyPLfVY1JYELN2u3jAM8GjF31EgUtR8u81aJi21GCdjCFkQNrPNwCcCRBrG6kcibB1Kzn",
  "key6": "5RBy8Pf18CFRvzdWwadvvVpnz7iTvG8Y8NDFCrvLiUYWxqLSxHphND8RefgjqxPaKJin4Si5wzj4J55T1a6agJKa",
  "key7": "5EPh1265bkzVKn7pBziDhgCxqsq2uHSMAygGKTg8BykEwKVizkppzjTJWQfrSsPmacBgULBaUjRHU7qPWazSdvYz",
  "key8": "zKfW1LjzDjGri5u7DUyoKxfLNgE86Sv5qwX18xA4HSRE6hTE4kZWGyaLTj8G3zeRgxoAeeuPnq1prhQArW5ge4o",
  "key9": "47RdeVuvXp4ovVCzbJEs44Mcby7643eFJ2r24nnW9377nTrVUcAKPinQeHsAJLcySkUxyZm4yMwQTzNCsxeFaQvU",
  "key10": "1goDDuKr3UaszRePkwzLik9cma5zvbDuBhe7JsDnywY8HGmtBG1c3SWe7iveJCWmyrcXVPL7sSB6ta8YVAWzcJv",
  "key11": "5bJsbgujjY9kzNzLdFiJ8YsJfV6pwDRtNrnJ4VRWsn81CmfXw48q6mYGZvKxY32ouvWJDgxgejXUNoP9ukCanj9H",
  "key12": "3V4QyLWfEkt1BT7v1iMF4cYbAZ4JjxGKUQpWSjtbiAsbybpqpYthwYQQipKXB8zhLUpr2HT5cw8Uq9E99XDGdheU",
  "key13": "BsLMr34LmzSsHxydojFF7oggqyc1DNnVBLMZeGALrAVjmEs5GNZh4KGH4xdJCtgYxNBABB9okGAu1525LFFLJPZ",
  "key14": "4pSLHb7REBtiE3Rt1uuQFHqdDzfg4DetzpP9JYNjMkaiRqUtmCVrHPSG5sGj3XfcZdYN2TqQVD6SNUrm88tQiJcz",
  "key15": "GyaBJa7xz4KcREc2xvo1AxD3GJYi7rKM7xjZoZZ6mutQqA9PQXbcRXFSXnRb6Pb24C1MiUu1mY8e8H36TqKYVhs",
  "key16": "5jmfScocPMJ46cRPY4c1JCsyLiaD1Ju8n4qFbykkVMyXACpK25rCPWKNQwMGtwp3339EPPb53hzVMrTa5TVpUxSD",
  "key17": "49ML6zXvcm7bC484mpfoQXJxq6HsMFgp2Q8ca4bkNC1G3yP5fDGjCb9FWFBrGM8LJvPJyjZKP33MsonRTe3725cP",
  "key18": "fsk4YiDRycxDegd1F4RnNdyv5qCZeocJyvbPvZUuPG5Z4mEXBRXkoCQdP8ZrLQbsuhZ8Cm7B9MXS6eay4eJTE8b",
  "key19": "ngc6LgMB56kgqBqSKGiNBQ5z2vx68TKTpHDkuzu5mF2zTxQ1w2eUu2kET1sq4DNqwvBJxJYkSNt815tLs1wmQ9Y",
  "key20": "op4gzR1NsicF9qq4xKBatFnAdkWk8btfCy2kEHovfVQMu9i9C9N19tsUZ16yCkNA52nbXVtgQrhmPwpeCeiAH13",
  "key21": "4KGJnTXUEm99w544RSsHUZGWmw6wKHsgLEa5FWTFKMoMMJ6VafWCk4tmsNyVxavVF62rGQQyLhWcZosiumW4kB3m",
  "key22": "5osUGcBXhKiw198vHRj4y9Bxp79QFzhqbz1W4JrunymsPPXjrLx7jDLxhHqZ3rqJecYbVB9mLE3uANUkQ5jFbowo",
  "key23": "3Ux3N4qczAUnryCpQYXdbrhHbfAGVs8zvCRYD1Sj5MuTz2So48WYavgF8WrWJ3nYpk8bwCSuXjzfWTXo8u69UKki",
  "key24": "TKFgtt5v1b73njKDinKUdCmpxR7YktNQz8YXhqwyRaFpe27gHB4VXTp64X5huQNzsrE6MeUr1qQWcUpVQQth8Vh",
  "key25": "2W3ZqqmehdQspcgDTX28jj65AmspwG2V21ZaUH1n8rCFmyyEo3fU6TvyHUrX2SQ9UYYqrSY5FfWJ6oZ8DEWnzpR2",
  "key26": "5ZkQonLRuWijas8WX2tknSwne7XqTj9P9oMQbn3YJeNz6TyEy6H15o2uYka1MotdG216HVpyNNNVHesKvT7KPpfd",
  "key27": "3rqMT9Byp1Fz9ARdZqnEEYyfG4VctjXmpinFrhDKtXY3Bz9ycqAKQv6Qs4oPCjwAqXDHcHvm8ETDkmahuVpPgYmC",
  "key28": "5KFPFNK8Hz4DobqNCPQUxqPuY24stB53j9mUP8D6jVLV6tY7K14PQj3ig3Ji9pMQ33nWC4fXdKgmqEWA1AAAecWa",
  "key29": "pNcGu5pcdjM4YiuZTtgJeWGeWHdcXpdmie5HPtU93sBhtgh3bkTqFqfHJe7QZYnDhcb39NamVfjHKLuWFEcvWir",
  "key30": "2yUYXZfuAU1mpPmbtNFb1xkr3L2FAQnQzYPMJ23LR6EGj61s6xTXJdBGN3zy5UrF96AEkV3ztcXMxrpMm5px4mwW",
  "key31": "4PkVv121v5qVepaon5xTAAG1N1MmXc2rFkF6DMechGU8dEvQimEqHtjMf1KyQTmzg98T9fTqcdiXNtZ7jNAMCk2E",
  "key32": "5niPcX5YrgrKTEGgiKSvCMVKJ9XRdZoX7RxKeJqbnEz1mczfNHKRshnj7LafpQnT4qDBcjhHTjdWrPoKRmWFGB2e",
  "key33": "2DNbgYMhsS7hb8RhTvgkfsxV3L9Rq8KjfreZEAnP3hQPrGTbpSZDpaPFcoaDiC8rYSCn6we7GRWrm8j4DcfGgbnq",
  "key34": "2KBze6xrEP19cm4TbfLTppAXqAPMHPCW4eXVM8jYQMC5mzhogwKoKaGcngv3zycAGgXikxgb7SBF2tyyDbuPgdvJ"
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
