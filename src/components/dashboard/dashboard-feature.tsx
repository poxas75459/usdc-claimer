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
    "2zjd6mqacW1Ai71VsLsYT3APgfpzkXGcGnYRfxKDVYFoedkkLpJw1UURJhdGnfG8HPJpgbjjhVUVgNfWeQm3NRJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7VpDKhbXSknwppX25okeNNg5ieFemktizW7zo2f3znSHfmPN2kPaxuuTUa6W8QFVMRMJBpjPKhmJhnfDqs8LXT",
  "key1": "655UFg3vCpLiMZZa9tZgxr1CYFbFtH6pJMVNV2Qs3wwP4UkForRZbeSDhxy2zQGkzaRCpHNxitJ4RX5VHdJtj9bb",
  "key2": "5paU4HzhsXTLA8rSDmSkmKAYrhXLQyNuEtgUjqYBErghZ5379QY2Wv6WP3S6687tmRmFs5phBCpdjqxjo85hCMSd",
  "key3": "4B9mf7hAFwj1iVQ8mvBSwgGb6FJRahNFv99fWdmEp7EiuLVhpe8jiSw4ydhYm2THJr7vY6jGDP7DyvRaGJapkPfc",
  "key4": "4AQmJAGA4EJWZGrJtUU8QM14DsXADBJhBjWqTYPNL53AUg8busjwjcfhaKv9n1rwGD5SnecrE5mvQUQ2HhDLGHrf",
  "key5": "5m3UApv8ZSG24ss8jr5c9QnAJMce5Cccg5A7uk7NTWkcHsJeuwo9Vg11LVQj83UcWtVW5LjnYHbwYKwxoQ8HdaB9",
  "key6": "4HpVYT91pj8p96eQ2aUtCDPnfKDuZxDvPhfWG2kwHetMXrT7XGaUTv9DG57C6VZZ279crFFrYggQsgj2LWhqXGbe",
  "key7": "Fr6kqov23L4xp4cwjDh2poryTLxbrpvzuN6dv6qE5QhNpuGLzxmUvPWQXN3AtzQNr1LiVDkDVsQU78BdVFK8TCF",
  "key8": "2ZHb1Qk7uHAiMXBf8xGgkcjtRsrVShgnpMer24hxXux7EbixoZyMWUES5jrQLk5SU9wh6Hfi8yHFEBzxKUkBV4KR",
  "key9": "3DVAVdnt58WpqbfJbKGfVfZ1S3nWAnTjwiNMpV3PfKvxfxMyq9yMbwKpFjdJbRrirqwFT55qhRPhGGKVVozvsWY5",
  "key10": "w5ywNmLxbCHUX9yahBrixZ1KqsmrVduXZftqVbsGDXQEsC3yxUZkzqJbyKjiviqJFAqhnM47rn3xRP6JTEPKijW",
  "key11": "df9sfwdjfFswd6C6qjbp7Ait2xWC6Rvn1UPLH2P6zCvsK5ansGK1UVoTjgcRCW2q8P1gw2CVEQycdtViFKmwL1D",
  "key12": "5CmxWzk1HdM4ryGr5c34UdKEJDE8WpmNRiZHuQgpzCUsxEYjjxAJhSzs4n1k7nxMQcKKzrYmfLdZkzGtLT7BRyFn",
  "key13": "2dtMVLBGLL38FXGN6x9EYr9C2qKvd67DAfEXFca83V2mPTWj4ory5K2QgwtAknhonGevXfvsJ2TLcDva4gLhGBkx",
  "key14": "3J9wEsGDctGC58xTRkxrkTZtuwVHsTQnPKdAkKePHjSdhb8rRMJUA6dWNH8VFJbWvqUXTwNVeQpo5q7UK4MZL7PZ",
  "key15": "5XY5myF3m6PDghDzVPGFtkpKHvbRn1hTtuWjx6Pf8FsyyLS7cU5pL6nEYEUBNjgEvtY6G3S4sJs1H6FroJmo5bYv",
  "key16": "2awenMQBfVTCKchyH1toBExzNf1FFAWHcxfiA3eKViFsiZ8sp7STKTJkP3oxm61mDSVLN3Vv8QD1P9GE6V7xaJsC",
  "key17": "2PcUPjwZrWRsTpmJ4GinF7yqSLvSppu89T3TLo3LgCa6A7cfy3TeDjPfpirfx1pB2ncgQD4GdsiGYq49gPTPDDzX",
  "key18": "oydwxe2BmzesgYcorsqLioNnLJfrHRgtpqE9eZdnqgP4GFJ75bFNitzYCHVNJhAZWKTVr7m3KnUx9m6zMD27AHw",
  "key19": "5YdoSDdtKkFHKTtXTWEs6og2Vho8A5YD25QSrxoow3cu9Buq3qnp3C3LgARFfkDBjQkJHBzGeNSAnXk5UhqWPrEC",
  "key20": "2fEBDXzoQLiUyoMxZFWMAaZsh3vi5TLtioNAty1QNeuuzT1WgJwzabMsVqAYHbRNT2dYCrQ3GhfMxN9XimzRN34z",
  "key21": "9nnvAR1fVrtVziHsQ7KY4XSf8STYuxxDqcpSzH7sCD1Rb6VjtFxX615v5JBytyQmcAd8ihqLETYUFxNKoBm6J9c",
  "key22": "3fJzjK5y1MzsELbgfAPw3b1ccbhnn4NScUxDtsLfqE5xvNpyM2iDDbynbdUvanX2Rs4QL3TX7XFwXZgNcimx8dTw",
  "key23": "2dv9H43H2N2QNvm3NxXKqmCKj1vLusdpoaJ8RFHke7EJN9fegozqMK5ASMFHqD3zQtXHzjCqFWaE8EaXuEjMGerm",
  "key24": "2QBK9rGBitnJ4ipExmB4JNU2Pcn4zWomfk6559r5vNhp3u5Ny25dbagcxgFBz852prPtyt9W5kzaLXvgxj7r5PjR",
  "key25": "Ng84gZyaPcw5KAjxhXQGH2GBGttRJLj8jaG5sNNZLAM8PrCGMimCfm9YJahF1EFeC9FvH6U7mpyLUP6gFKTeiRq",
  "key26": "2uMRxXcFxwej3y9MhKcLKWFEAhaxeQTYY2CsnWhLgm2PfFJT9ipWCYNXxJd8V9Q298uHN85vRCD2NtBCReYoHEzh",
  "key27": "2jYYUWFoCZyEx6h3qT1BiaiWWvu16yL9JyitGDiaBTy2gyLBDaeUbX3CzYCNZVtEWaQWzVhP6VgxAeK48LdGhYHV",
  "key28": "4uNiq99WResoQCzbZF2BAqhy4rQdbDXkyNTMWg8t1KMY6izKyfgcXj5LGEbozn9zd7ZhyphF8zTmbd6PJruDp3m4",
  "key29": "5oxW92TgweeD27SVLxjaj5tvjqosqurwcVy7tMH5RMqjiGWsewjYsJWcGJFro83UYPKFDW7QQqFJ7dXA9ThiVdCN",
  "key30": "2bXipPC7HXZV6gNBNkpZHnAB1z5cgeCoDCTyHxcACNN6eemqzThWoKWeJjqTTd9mDpa1ofqGLiirpgyTr7hncWAi",
  "key31": "3hSUqitLKdvVDLyno1oggV22uYVNqAPccjnRm744uJKtNz644SNj1eqnqwSDprw9xuXJfUiFsE3t7r8dBKfhMF6",
  "key32": "4E5Tdb5QJXS1RijWWhSjETTvsVJZtXPYq6y1gySRPWgGiZRdtuz4TkV9czUEjmFMEo9BhHPFEsMuk5ZNR5dcp3QU",
  "key33": "4YNXe3tnFhBowaov2Mrjcb7oAmusv1GMfXXnrGkG4ibdJowZfrh8zdG8qMCY8oThFsYEA5iqaPQ4nSZjdAdGfab8",
  "key34": "5WAjwNqw77CFtVRYg59wD9DNkJYwYMQLTXjJG9Jg2QLa7NWgeAS4rx7RM756EBgBPsErf8KPoaw9FhHtWAYK4ogM",
  "key35": "34HdepBw1JGTePR6AE9PJdyWAhui5HbcTucxCTQNaBXZUc7KL8v8AHm1iu3hYJfj7Eac5rUL7S6i2hVCZU7FZh8H",
  "key36": "38B8KP77ce1pmFFqKizJTmLtWY8vMHoyHDBqa7Z5aeh5mQW9FiMADfKkcG2wVaAvCysvkPtbCjvyzAGP6yEU1qLP",
  "key37": "4ZbDxy1dgukvafMMRMujTNxFa2HDigaLwBBWNVpWAapN465VH7zugnPN8xQxru5KPCqFXttTbJQfNWAno7BVBXh4",
  "key38": "1232RzZfMVvwREGYRyV74qaVu355AaX1WtW1oosAFen7ksDF5kaHwGhkpYrXbqgdwLpZqRGJVxP8Q3BPrJqb4H9r",
  "key39": "22bymEJJAqkwCEVSbq2TXxuTR1JVVpyvph9UDbmeS6Ce2gTfT58QuAHpnvHMTcUBCjvng54Y9qkqushmVS7jTarv",
  "key40": "49rXWgS6Z7cELodNR5WBF8K9mSfkZgD9ajat3QrwfdGmHkzF6m1SYh4e3KB91ppRXooviEERtEXBxup7oP8EFNEW",
  "key41": "5NhscYhNPaW8ZLvzRr7s8WM6WWzRGnWsyeQCQ42NogXzqDFjMTZWCFWB4k98wXaxkMR1MJEKuHXtrHTPiPUVjWpA",
  "key42": "8k2JncVsHqQzRMF19gGtBnxJEx9RKDMvRXKHdrJiiWtVCKFVikYrST9RPHgRL1v3g3fJ7V6Nhy6wAvo5eSECzFw",
  "key43": "63ZJZgPJMidnRkGkzpFSHHSBPSTAFCMRWRUywBb2Z34SwouqiTbVqnqeJCSoM6ZucY8zM6G8i7tD8nGcr2zVcRgy",
  "key44": "4WcGESJJ8TQzjQx5SsQUSd6DcoBBG3PeXXsmFdWKdk6w2M5Z9YhzMBpSrc3YHkm2VSDUaGuPRnMJWSJgbHAGNcYi",
  "key45": "61bQPVAWncSFqwYZfSMqbQ5ME7y2FmWRj4s1ArQC5xLzFAjBbkGokTny1o8LcVU4XiCyK7dbHYn86YZthNhUbzLW",
  "key46": "29rCKoGa3twA578fZBbZavWmMcKSTgZrKeg2WJDrWoSXiRQpci8zjY3rJntqeBr1c6bz16EDxWxHGLRaySoU98t4",
  "key47": "5u34VaLZW97MTYEsK4M8TL8MtP22FYtVCi3KLX3FF7UJ8dntJsTsH1X7rpwNtGERszmCCGExCwrScyLYhUrjRDSs",
  "key48": "39K6YpVDcBqGeuuQtXRah1hJGT74z6ut3TBMDRckdYFMDVLkoUE42Z5LN7SSaXRuQFhKkzrBVBewgakYGYriYLiz"
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
