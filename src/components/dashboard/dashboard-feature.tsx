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
    "4HYsfc5abkz4DwRLC24ZnVPuEHPnUQCDk685cgTU2iuKC2Mt4Dc7NHEVUzUsc6A1KQCZRbnD6RcGZzQMUfc5aKsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guijiheiWSoLWYb3R2MZo9MME6LjUPAuA2CBH2gvhsmBDw22tYmCMUj2mmAFGkyJQs35yDid9GgnUHT8EvxUAn6",
  "key1": "ea9xfA9ZCEPqKWyYvNW5i6roF6VV35socfN116ckiJk4KLvckAAQhX8FLvGkzKsWyGrH2CDgAGQhqQoQaqDv2UE",
  "key2": "5yw1Uynf22afK4CUAxtSiRTcw8tgiFLGRCMiNxkmE5ods2461KiU55h6z2tLd2ps841CcJPiMhXHFPiFmh3A5iyA",
  "key3": "2dRCwpSvW57HpBS4GHqu4hXXn71x3TdbC5aecN6gkN6e4dwhkQaiWYcKgaWWRGSxh7NZyHETs3EviMxuVbkjZryh",
  "key4": "3Dz6WTob5uAM4VeDwVHv6hDhniva1nWe3CpDb9PoMoszJXoSm7Xqe5jXTXPGDhtZgtbt1ot8DhmbCroVNNaLQntJ",
  "key5": "3Xoy25rU7iP9bAaAt5Wi9qp3p4MTQYn3eqKCmgRBohJRjDnXNv31mMxp8BEQqjYcAxr9DADiNEv5Fpq9tQmNPUab",
  "key6": "5gLTHHCc2ozztY3oYu8DqEbqwL6NVYBVgTchQzFqRvDbMEXdQn37Lpa3pkmMfqbyyAFHijpNEP4HiVi7Vxv3U1KA",
  "key7": "3MkXyUwzmRoF2hahrfZxYNMKo4Caan1E77az56SpUPpD6sCDFdna1Le5nSU3cKCaeENcLtEcQM4uKcxge6jYTMR8",
  "key8": "4ohk6scw8mLpt3sMq8qpHgG8WY6XdVkbkujS2TwmXQghGbhJVGoyng71dR7KdHodEhQr2ivGXTShgTaSshBrm76F",
  "key9": "24GvQg3KumKJDA96VtdyFikoNpgoyTS4XUwznTvbkEvW9aTGQHw1XwxgzsCEJfQTN1pxrXnuw1WzJHmdPNH6Fnuk",
  "key10": "31H7hZdznz7XRa4RcNjvJRbfaXfxx8xerTp7DwEJb89m6DzEb8m6LUaFHNiF2Luzf3jc1X9JHhugD9xdG66a3r5z",
  "key11": "44xfEwyjv4aEe48cGuSmiVJ5rrhbDNSB3UVvqYBwKe9Bz8fnqWPYjMTbLW3erSNHYSAEFqve4QXPyKbfooiUN375",
  "key12": "2ASo5eupTsjutNfqeQ6vxhXecDYQqnFpjHEJxYQSZhmLwszccckNUhF59Y4HCYrLk9iiHfEotLQSaSK6dp467eok",
  "key13": "DKo3qHg8E3FZhHnnNgLq4bSn7ij8tCgwY75TEi6T5gegEB2C252ZsKhQo6S4tCu9QMtck82EAQDgXdq4Q6BtfXm",
  "key14": "1zb2sYWGkphBiB9RFTLGi8x36eZqBDGCfmgLGzyCMNCp41DeMDBHJa3NskCAP1vu2xZ79anPK5jQBbuERvf9LpZ",
  "key15": "5WpozjNsVtemjbwu5MYbUmMbVunFgu93vorJfAvUX1Z378ajNByG9EWwLZcTgKShrQpB4txuVggopNXwr5Q5J1Ys",
  "key16": "3vXd4dMtns6Pj864WrY5DZ9Vo7vSvu1VJ4aRPiAc8CoBXHij1f7jeBLW2vBwt7tHrdwVCRp2819Manm68GjVfGrp",
  "key17": "2jJZW4rojwasDj7Pt1yga3EjXxXLN4XuvBD4K366ZEheGvFvbu95tGRLxWb7TyMXrQYg61JxqpK5xBYf6hy9SUoW",
  "key18": "iApgXfDWLeKWdvYqo1oYrHn239rxxcZuznfHzFFsch9awmxdffJKgbLGskM41oA3D5HjJp2qgyjWoXDdcKWsDa4",
  "key19": "2mi2UujNM8ngrJNGqkwVshwA4bJ61zrsu1M4aEEv2HoHqe2Ys4M4t19fQv2eGknHYXwv4TNwAmNF8J9CWMGGbfPx",
  "key20": "28JgGpb7WaPxDqPoWBTaZCmXRtWPfPwKQzyHe6a5x2MAnHDaYf4RzcgLaZEySW7saeiC1MfQSea4V22vpHBrCvTC",
  "key21": "5yCcbmK7SaAmFGxRWkqHh4sCBsWRNa3gYPsdtoPPodQAxUv6HHoUEpgyiGKgiBuA3vz2iTwuJv25ifgKd9dbS6Ct",
  "key22": "253ATSAdw9bZNUhQDxnvUfc36gDvUuoDVtTdxHoNFZaeNzHb6bS4NwDh3mzgQdUZVoa3d8nTL4gU6SK1ste82no4",
  "key23": "5aYuYP5DeCQ6H3jaVqrNJEuqRsrj72LpittaZXJsERSNGHjRzH6JaPfabgb6fgi6F84tPeQ5ervNiU9wUXeGVJmn",
  "key24": "5TotLdW921fzRpjMKDpS3c3r865PbXzMsjRehPKLrviK2vRCPo6anMBb2VzXHky5zfMJgymEtBxxAgVxKz43iFUj",
  "key25": "4d4cUWtqyrVavssP72sy4WBaBuwMHcXpkYqFkJsNtXqDGEACWvFJCP9HRx73AAGGhWHNU7ie3hAeUjFD45JPB9z8",
  "key26": "4RuASBhtSgayNZngvRDHjfzKui4QvjJ4qcPzKQzhHikJsrG7snjcxaUf5AG1mWEZXhQaGveWqSDBs1gnafBEB9Ag",
  "key27": "2hs4XNJJeVDnP5mXacfTzFxtoATgWcWRUaQ2JKTiFaBycUsTeTMQBksETXEK3HQF4J6bPtJVUJGEq29kj9dYKMgR",
  "key28": "2jYNGRuAf5ycw7eRoeZDYkVg8ocND1Kpz7fM5Wmx9D2KzTbZ2hvBKQmcvYSoBJ4hrPfVinME8ne2N6WfH2AFZNvj",
  "key29": "a5ZQShkabx3RfnAKjF95VSmd8VuVdfi11ddwhuwdXPKgJyRGq4HX3L6icjjTm7bJp6iiE6e6Z7wCPQzeNugvoNH",
  "key30": "3UXyhahqKnKgrFzUHiLxQAXHGGHFpdaUfbqchUWdbRXnBH6GXaBeP9VPXogowiBjYJmd7mEBjd6CgZUhCPVVz4ue",
  "key31": "3hkajLJVCxaWtDz6WFC5zYr51zjzukYQTxeyx2Lhpm4544o7eiis5v92a9Sn6DACpC1vaWeh9uRjrDRdoNWYi5rQ",
  "key32": "4kphhy8uaNtZv3uD6UHtCyF2FrT9qWvbZom5X3MBnqekoqbxCFfoHkS1Gf1zKzAYF9mtnyJZUPXWrxXkGeQz9zdW",
  "key33": "3GUasX6EhWndvGDs7tmGQqxGJ4doJSEhp2KiV2gwpHsXFDTYFQUSgJE4Bx5kUaT1mXSjbGWjv8oqMN5gyUNbcZGB",
  "key34": "3jmxAuU3gaUpcyh4hhYqyikyBfdTn2vPkxrkxjSXCU4KrcCfXSuQjHj5TazEeNJDppS83zX4yXh3hxcnxxLyab1f",
  "key35": "2UwHX9H9RQujsR1gXaiJwKf2VRidWB2sNmxLmsCTpfwrqWFTA7NeKVpmeG9g4nNtLCb7bRJhHE4mP6pFmMABrxhs"
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
