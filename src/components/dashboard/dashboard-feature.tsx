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
    "2icTprDxDYc84ThnZKbDZT4Sg9Q91YxC9J6MCZzs7tFWBEgFT3op3E3oADoqdA5dGDnFD6UdY4re3vMiLrFjnQfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPao2DP1RE25oSc58hNK5CHuaEM7nUaX9EmiTS4ZNFcoqJV6cXAMhJPSdURd9GxKJdYh3XiF1nv4gd5UumAqF6F",
  "key1": "3epJYwQ5gJrKFR2BJMonxxwNLgWpvcRAtEhHXEmkJt66cQXjHtrhuPs2p42QNL79KVFNbStDLZWvimEvcwG9qgx5",
  "key2": "39EVjS6WNYnsaVxmZRgiM2iEL5KZB48JnoHWQeto5hb4iwhdoA8ibT9SDA6Prwp6Gd9pdPhJrAHyyjScXkiwyao3",
  "key3": "3iDZv4zTZ4uKcQcTramGMkZfjEzqcGBuW84caLyDXYRHZ5VX5uTWZaLQLkBHtAUMC7Q8BMrQnFWMRa2fLKw4qmRU",
  "key4": "4F9QF7BDMnNNFAza1yAT9eXnNyupyD6n7SjVzWHTyCA4NoVAarDkDhgifUoFFsWS6wykFDVFgbL4c7LXpSMCPeRB",
  "key5": "44ywwypDZJ1s5Y8EnYUn6T33PMeed8ss6LUNAxnwNoAyMYTviHVP59NsZ2cbYX2Wc2PVbM6KELQzPCdoKQ7kY3CG",
  "key6": "3HxdfdKrkhLJB31f526gcEryFK2edxyXiVQzQzYkWiztcoqQScqvwgK5sd3MvwP2Ny79ai7dTNPoP61QJWjxBdjg",
  "key7": "2SBkKwaSxvT4ZyxSbAg43LMYe3ZgFqFxYgJhPGcWmUs6EjhtVaLc78n857vJqud4YFMhwAc1kyiMXj5niYatq2cp",
  "key8": "E4eDmixRuwn3V4VKcKfXADUwcFD3cBnMpq3RVsAGhbrLLmfLPWRJ2gmKGfGc4f39mEQnoawgszsVcBCj4XvG3W2",
  "key9": "2hfLJDv9haez1Yvdj8bJy67gWWyhwj5q9dQ33kizHthFFQmabtyAbocwcwomHyiP3Cu6fdNdPcMZ8SEbTPEfy1SU",
  "key10": "4BTsxK78zftXL9eEVyi6KKAu92LmUX2v7QNtvrW4t98pFKmMoFTPxMsjDPaudis59dCVWn71CQxGurpvNfAnymVo",
  "key11": "5fjVe9YMfib72uhXvWjYn2iNmY8Z1KWGGMbcUCA6DHUkFUerUFGsCxAg6Ybt7J9X8SBwMisnU8ssB9MrjdiLF6f6",
  "key12": "5armjKbo4WdmhbmKX7NGXaER4gTc3a9zsnFUiaKP3fosaBxjvdd6zGHA6ZXZE9eBYruBNUcZh5n9JMiG42MXzLb2",
  "key13": "EHTgVfYik7ZpzU3Mu1Vrd5pF5c6MxyWf4Z5XwK339cF7r9UvzzhNrixpQGRkx2s8cq1JFajYERdGrETMdu4bhUv",
  "key14": "3uiti3hQ97VWkVHsDbgK2QqCV9wgNCQSmreWV4JSXDJVYcmXGaLgEimfpyVyDWegaw4y8CK3MvEGxxnHKEJmmJjb",
  "key15": "4xMVDPDcy6hywDxcu7Wc8QEBtskcNW1tTAVUtC5RQ1391JCdtGjdpxTDNwci9JhQanWFySyJNK9oKdvSMEeAR6oD",
  "key16": "5dLZau126s7RvQPrZXVJRdSLNhVRfAFCHxGu5y9MezEsB3U5b8u1uMDKsAUQg1aoJ7z47dQZyBfFwbdJN85YcGtM",
  "key17": "3NNVvHDWMuMraJ7oh9sYkkxqoZHXV8K7f5Sd4XUyLTfMpggY2xV7JoLjWp6VmebP2n1FGwhoo4eN27XfYNetowYc",
  "key18": "4JXv46MUFyQSTyBirnmx1xFtdHDQuFTYYBDzsNV5j31bmhvwmWZkQsGuE2xnfvXSA94rCLcbCK7m97GkMUAxAxu3",
  "key19": "LpBpUYugQsayG15x1tATYwXqyX6UEo9RB84exoYyGfvQ8PRdiJTmH3jT7YzpXqzenFsjtp5bVwT6Vvuzj2x44To",
  "key20": "3Usk4uqrRRM98uYRdpo3Gxd1M7xufaV96RUJfN194aJ9n9ksidaDoP4CyJqcXCreyD6qnLw6dwDjVwyoXRm9LNpw",
  "key21": "5HsHrj99ff1mCy4Lr3yZL1HXUerBGzmLz8VvP14LU18rKFT93VnW26gUML6b4chZ4QMuXjamaGEzR5WtEkU7WpAU",
  "key22": "4JCFmDZXsWMJ7neGkR6fYRxwPs2JoypcQaMZ7tpKCUJf7wrfJQMR8uYmBM1RBYznA6L7yM8mfZ23aYTGYxXox937",
  "key23": "5Zr2xF12BdomTa8Er6ZpeTuJAKLtjJu3Ysc79cdw6oKBMTkQeY9RKKD2LwzdkiyhuiLSmykwGCkbQCjAYGp8pwC4",
  "key24": "5p4wnWRLSzUSmyZSiY8bDMdHJ1vMBmYRVxwxt413X3NQimCWuVWbDSfymjMEgv98Xo9Bi2E9ptmVrSm4TiZGxd7Y",
  "key25": "3nypfEY3mrsNP6VbyZ6eG2emTYdWFFCVwthEchmqeXGxds3WawRsKxDujKi3jSMPoD6gf4cykL7iMvfmoHsSEAha",
  "key26": "554XyhSnLCbsYyPRZSrBWSNxAuXukk25N9xQszcVpTddztHsjBwA2VVoauBBqs1xpL5vW4Qnu2fsToZkXcqR8rVt",
  "key27": "2PARC9ndMJSePVyws7mAk7ZZBbHRmaHyfxcqzjqbfhkWCgjiWmwAY44Yeuh8B8xN1pbyy1GThFgsxVMWxGQUbCab",
  "key28": "3AShiw9GmpHwDoszXva8BAH34kT2F4Wxe2kEfmYFcFS5nB2QE52kkBuAqZPWwPaYB1iCEnBJCVTjPWh8eWZQ9TuX",
  "key29": "54WXaLiztJPRCFzdGR3FS3gLX7hh6QGeXYhEy14TevNmCiwYcLWi9oiBmLJuZZmyb9Nb6ebMrVw35K4ztmbGrUeN",
  "key30": "3s6Q3TMkx2msoMpcVrvUhjbeCBkj538sdPrFMphBiWgY8BA2BzuuGTZoNcPQigz8t6BKu7Rvzm8wgs4pJ2qA3V9",
  "key31": "4XaCECKfQYxZsZqhPXRbUuCKke6Y9fhp2z8ZNqwmSHiY6PVrSK52E1kdkGWwZVHxDyXhHm8kWTLCF4D2JeGx5Tqd",
  "key32": "3n97WRF49EBQvARgWwy3gzBvYQurV244jT76icRk6YcJ5E3N8ye8MwhSYFuqvjzdw4zZBVWEzcSwFMZhJuVGGuQh",
  "key33": "2E5bYyohmnfq4XM7S6sJr4GxK9axhVF9VrD5cyZWxomMjcorkRnMF3MLdi5Xux8idcCBhwQ9hdd2i88GAwth2a9Q",
  "key34": "2axVh7auXHwVR5FHipvcq1CfJ1nPho8CyyWyJc26Za8g1EETEJ1XwXvXe1AZitrc88UP754Guvf7JGFcNASsLHFN",
  "key35": "tPqJhhzNoc9pj6tkiRSnQbGhhFjeHjNp5sJAjcpcWwQRBFx4ZmZpkspj89rd418XABm2wuR21j7x1dtMcdBJBN1",
  "key36": "3G74cR3W4F23NjC9YoVyboSsr5pdUEKQUrbPumLivQb4CVvgXkBZLg7paEWrTLpaQGiFb3vHt5EfjAVidxi8PS1h",
  "key37": "5LrHsccuYVCbmLh2z8SZVgG8Zjxe5TBf1u7B23pLdf1aCptg2F79NVNg75LtMxJDUhQzYy4ib3gURYXZFdLfkxDi",
  "key38": "3ovb5sgz9YaX5RAgEnZ5MJJauPfDedHLW2DdnixgZsTL2jcTXoiAcMeBkD3PsfLNoE2Py4A7z1tahUEmASt15Jyi",
  "key39": "5ghNfDtso2PEX6PUWVD6585Sz8bQBokNTQtUDgpbTNrmvoWM5KpvcJ3mRT6wTmAAgHUSJuVfZqnHixpyY8BoPB6h",
  "key40": "5TaBvR8HEiipsxS5X5JT1jFKBPoBYD75AxvF6arLr6RDHRP5kWZyYaWbQw3YkRWAwrGRqn3A8q7jrSg8pghHEiQc",
  "key41": "4wZZ7kmbN8CTyQ8g4g5qARNA8t37cDrsXeBvTpBMVSnZRvV8JP3ynkdYjXXytap7Ks1Hf2FSZzXsagwHLow1Tcoi"
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
