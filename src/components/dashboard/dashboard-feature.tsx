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
    "3tpoMs5Yij8PQSSsuoMPuw1hLv3PbffBUFxBcD1gxNESGoRiNMA9LTVTrkT6baqZfbx7nRwZdym7mwY82Xk2oxGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZJfgqCCVm8br7dfa47zBBm5uqhxJE1FmTtD4n8EQB1DtyafQyYUkBpnMMJXVM1nZohgUWCDzu69mXKRW1nyFqH",
  "key1": "5BpbiAHsM5Sfnp7Rv5eEjrepGq8c5ET8PgDm44FK4ZZHRJ5ryLweezy7cM9GQackTQ9zdEeac3xQFRNQYnjoPd1S",
  "key2": "3SBKdoNjeoCFgtxQuKqh67nDu9WJxrSsybbWERdJx1DeTQQemvsNhvgy87AgUG4SZNzEjdmYLndB7ce9HGmF2JpQ",
  "key3": "47t8prApYpoi8VqrF2eVTY2dZVKBGHbJvRudjRyDrd9vqgf65GZwVb3qErJW1H38jzSJopguLgaoUJaQU4TApLkX",
  "key4": "YdAztTmJ7vB5yUXo8YMr3sfCZc4YDrZWedTXY9WPUJF2SPvQmWqJ5U9CdZcSfB1QnKgWdRRwziCDVFU6EHa5tzz",
  "key5": "HrbCrnUYRsz85wN7BChc1DCKnPnTXGiz9EsqihPPuNfMYawUN6fqpkTxYwk1AeDRoWTfppUZNsn9Fx1t5vhPcWh",
  "key6": "4H7EMPphhYGfRv32YU6Uzu4ot2GmJLKXHLqCEPWjccLMn7WVp7XvcnjXhR1VQtcmZdG7bAcR37K5WDwg7mKWTn1s",
  "key7": "2p38vZAegqid1FFUkHV9GwUMEr53GWvtD6L2RiwnE8bDeaTDAXmkSzC86qKdDWLY1UND9Lz4rC9FAWgsECRX38Cm",
  "key8": "2URACAS1LiCxt4zjqKYjbbziaL76uYdqpdFFodzTjaW5KCxTqZRVonAujVT9NV56f7hm6h6WdTGFYTfJdzJsP5J7",
  "key9": "5uScTdpEEFyUxxUw5Fn6W8khcYVzb9H4vRh8eFarnzEijPjx9hgF4ZWULcUZs9eU6qP352gLVLrJHgeCbiUABQFq",
  "key10": "3jp69x7PUkZB7ej3AxwMEauUozKejzSWsnM9XAJ4TfDAuThoenxGngrafHnksELXuKS2ykJtNsZegJ6Pgs7UATbe",
  "key11": "2FBHwQNTPi9PMtWTWCVaiP1o3urQwGvZNc2ogGZW3puaboVikhzRznBwFhwsALJAy8HFGitgPzbCEaDxjqFrUPGB",
  "key12": "5CVdxLkqwYQwNqyn4g4yVaWUUdXw8Dqq9Z9jqm8wPx2EBtLAJ8BjgiRsyCPegFZQSAur9TXEym9yvMPJhtxCy9nz",
  "key13": "3pjJbeqztPwex4KMo191dnziEQPaggSuhxuiPpbkp79V5Fvj79uuVo9CduB8a1EUBT1NGyGEyEkCbWWdhFngisnD",
  "key14": "dkWHGBNQrETsrW34BDan8KEdHQg8iUtXKNmWcrNwoNnXGzxoi7hxJ6PUAKQaYcHmkD6YfcTgKkwunrZgS7r9mpo",
  "key15": "UpMBWATwtBgVuPBedVKg7YzRk4KngrNK8tp2Deb7o3jRTDMmtdfR9zHDVmST4efSoaJQawpc5UPtRpAmZewsf3Z",
  "key16": "KtxWfTf7hRXPh8PK9om92xiYxBducveJt6W4TMEgssSS9VK6gMfrEJJd3i24giGVTxje1VL4eE6BiM4tWxen5vQ",
  "key17": "jfjHt4DWXdM4tfW6ffwdtHuJ6rRY2i8x2cm1zDHnnAR5pYcsjQShD8aP7rN29mUtBvAdv3ahzHGvSYrx2eevu96",
  "key18": "1TWjUs2DzRW1iYtENWAh3MDomgXeo1XP7PRKZMw4ueyUvpL4WKdymMJWkzgHCg2hZcuDtjvfexyrpAf6Azv4bt3",
  "key19": "2fm3zzf3VjW3C8W6kHgSKw9jepjA3Lw15dEa1H2AwmNZts9ndMwESmwPFCeAraBuRz1gNkgGaLS3E3eCDmQcZgG9",
  "key20": "5Ls3TJFACcmwZ5XvDAuPvkS5jukEg9dNRz81E9YPT1B7mX6R2rAUJqUZjzoCi7pwDrcXRHuQYQ1jzk8kXRebZG7z",
  "key21": "2v6EULvHxSQf9WmSK8jpJcguaaut1FJNeV8gs2ueB7EDcwvFetH4AJMpEaQwSjBekq53bENP2gqnFvWjJtxwAhsx",
  "key22": "NiH4UyjNaeYUngFY2v4U31Zu4TGfftS7cX9km4ofLFook4jQvYAy3wDTGY3j32iX8jjYjeMrJwUpvx2LZG5BrxU",
  "key23": "5ZmgYspH2r1L1y6Qu3redvqJM3j1Auo2QxZnZndcEj5mwcoXdUBaHfVxfmtjN4pLKDDDY2XAKLwL1J8smJCQdKJ4",
  "key24": "5uXQLXjZHnUhrqAfSFLFr48YJWdu4GGVNfu49CA3QK9cMc3Q5ekwc4Pogh7fEYnTPH5ZJVCNKhyn5zvvPeGXtDFZ",
  "key25": "4vYLwoponSA7pexYjCdyh1jMQBweD7UPqSfoemL8ZdK5divesvmHwyBKBrBLQiavLcwA7d57PUkcfrV1F1i7DTqJ",
  "key26": "nkVUqWk4LvxSTRAdwHPk3QzMyA4YXxrrf1j8NSocUfSyFbpR1tdfQwCgGtjoRE7WjCy7iYPqA4r9M78qNLRCc6J",
  "key27": "4ruw9AyriVVHdVwyufTGX4XnDtEfbERbdk3rcJAKhmm5e5Bbw6m1K8xvnUkc3faFLdnMPCsFeU1eptVA3etFND3k",
  "key28": "QTKLtNCkMbCoGNF4Uo2FYnGmgRrYEne8zfDAXTxwLHr2FERbM4B5T1pvY5bey5Rsz8zFhwJqCjLD5LjeRGCBZcZ",
  "key29": "BKAHWBejDmMoz98L5vhcGBAXTdbBbnfhLhVxVx9r8shrB9BTG1GoKAWTLTdADLV7PbG5ydZpWwE8FBt7fTsPvu8",
  "key30": "G1VaaNm3xGHNALWz7Czoo2AFbuvhW74MqdRBGVjhz3FogCZUjP5DmoA6vEfCrJTpypWotwWHof9vD5mdkKMRrPk",
  "key31": "5KRY92hDDkX1oJbevKforEs3by6HATFKDbtbtsyFPGEcjxEmWhoji5wByx6PUYWa3BcAu2UDYEHHkZqCEHYkqXZN",
  "key32": "3YSmUjXqcDzWfo3SqXTiUXoZLvcRawEkTcSvodfuXVW1qzVp3DEhD4hfb1Ccgf33cZhNCFsm2tCJEsa4uL6wDR8d",
  "key33": "43zZmehx1fsiVni5tKCsfQ1nGVcCc3knFYmopTJndiE7BVw841FE7mufoNe47rxxvuHyChJoNeWK6EHGJvPjTT8X",
  "key34": "61L6hySBFDFcRC3MCRzyLP3EfkHQrJFNvAK9fPhkqtCJQk3jmnAtgodqTD5bw4ixBPCaHGyW67qgvNnD4UmDpKmo",
  "key35": "Q83G1h1NLpFHxpCnuE6TgxCZu799accmUT31dLRjUoKFSNzjtNJdSdRVrPrWha9sxnBfiPtoXDWsEfcdQgn5QzC",
  "key36": "65YxyytbULcFjFukiG55tqCLCpyTK91Zm13TvVh5fFZtitAg2vEjfR16Wa48yJZyPBrUFhkuaRQ1RJgRBHk5ja7o",
  "key37": "93nRU4c8G7hFTwGYe3jNwA3wbqhpY8s7oSBquJtCZa9mTSzMJ9CtRpwwTjoNUSR34eQNL8aHrrtfxzH888JwfxH",
  "key38": "ozfJmyPJwUnbhYXVPruWvTNpgJFg7utK6a1NZopSaSqSktSBVSecPzTv8XNUVXtoei8YFwf1BkL4far4qLhRrde",
  "key39": "3minhyc8gW1fGjgPydYdTwa3gT4w1JAYeMRC8HbpsAy1hmwmtEER7mX4JTPy7EvzyM4dN8wpHdR3vtbWm5v2XoPk",
  "key40": "4B3YEViiEShRfzaDq5iV2A91ujbusbLaYMUxbXc2uXQqtt8MiyFqFFHKGdG5zcGXQRaZdfPAy9BsmuLgw4MmrX7d",
  "key41": "63bqCZdK3UoUSEyc2RYZg5hDovgyy7zMgCsErjXu3UUNSU4jnhUDrABsdjsjw1XDyo4qyse8BG7qJo7kZf9iTy4G",
  "key42": "52HwQDx4g44yjiwHhcKV3CAF2qM21jMrwCdcM32QsfMpUymroX8V2gdpXDKDWhJ61s98DpkE2AhRyL6G5MpK5JUv",
  "key43": "2dQkFm5HTWf5JxpK57XmW6mXp9K9Ck4EeZg3eC5arLFmajzLKNNhUEc85Ni7NsvGHxijGBiLeC9u5bcCMCwEUj3C",
  "key44": "5WRdWSA8wwK2tKBaqWSv5aZ69aH1WY2huKqja4M1CDt3oKmwn6DmHxgpSctVFG1mkf8xYTmBS7ZdLjq8ote2kLmr",
  "key45": "5Be3iY6GL2ya2LMqbLW6WEw7qLYSdYmAshKCbAyR9XuDjaNCqfWUaojGDJyaYDAHWj7XG84SgT2GQSBAeGMtbQ3b",
  "key46": "2hgaAXBxhgRDmWk6SUcNrDLbaRNtS87NjEtfzcikH6dBBv9Abu7dBmUZa4yn1AF4QjNrWMr1w8fzN3amUxgKd3RA",
  "key47": "3QhDNNsZ1DYp8wgPsVW3rHAVAGG1gSzv8WR8WBSyWwN7sMjkLmLoJWhWzCBRkxotJX4U9hE4Z9MWrQxvXQjjZdXW"
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
