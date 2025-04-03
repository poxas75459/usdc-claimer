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
    "66hY6J1HQzt9dVALKWvcHoHMB4o4pcuLdgvso7yb3MpwAbUPeE1WDabk2JK7FcwrUUGBwrQLUK8RH5r9Xr4sQsrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VU3gYkr3uubRfjx7gcLFgkQqKC5WWeJ9k7shLm16CVyjQs7jt6AHzByGmEwCdnDAhc1YkhGWDKjD2ikkFRN3bSF",
  "key1": "4ZhRR6DhBSYDBJoxzJS7mkwHghtUk14KBfGExTKGHjQQ5t3VzSamNhepaDycrJ8y4wiDaphpN69RrBB3BEEavDUE",
  "key2": "K7zmmBrb6snA2x53Xh4WPG7AMjDz7UfxTxJFo2ErfkaCptsen6NgC5bHv9NVzccxB6XmsaMWfCWsDEXPUjLUSh9",
  "key3": "5dCTsNrtYqymSYgwwif9kpLtVaxZcaWkH7GTR7pynE7opZqdYWHyc9VUU2DVuFSRWXZtdFVTxqjzcJ2bi9hicAng",
  "key4": "3fzP1d18L7AUTpPR4EKQeuXzwah4kB4X7LozHA8oFzbAHkwNVnwM9iuRhKC4ntoCZjskGzyARYwfR6Jrtuj2c241",
  "key5": "Wp6WhKQgBe7TybzuDegoG6T1bkBff4skF2seQpAQsX3MQ5TCRHbtH1o3drbKsWHKpYTnUMDirAXHTYZa8aJqsJr",
  "key6": "26tMGLzeMtty3aDvNW8k1wUystSETk9Sf8cRD3rTZ4fKyg8ycyXP31mFoGjDMJxvFnz3ArdUDRR5AYTvYcUF5Ekw",
  "key7": "5V25CgyjzkWwWLGDU4G2rC3aDsbw9H8t3AcXkyxdsKVKr1uX6YiUeT1K3Yf36gk9eH1RFLLoL2VthAc25shjw7aP",
  "key8": "2YeiPZnE73FVn974dNbEFpdi7NyPXMciQjPTHc7BWg8h7nSfMb3KiE9asmaqdVCw96sajMoxY3VpugW2MVFxW5ou",
  "key9": "3o72BjhihZo2ZK9sJzXz6pfFMfA1SPjtyTmW9S7CnbAv291q8Fz1X638LXJBmwxJnAzbuZq8z1nn4h26KTyq75c3",
  "key10": "32UPtsdKqKG1ixVqK5RipTAB9ryPt8CfzAsBqL8JdRAdi4xZqdfyrQR24A8MM97kQGCT64dbj8YytfDNfdeHfQnv",
  "key11": "5UAyjnWioqv8UzVNy5fEnLytjZQUubGZat64Ch2ciGHSTrNkxRPEk1SGscXBKNSuuZs3PwzNATckrbuzPmEiFdrr",
  "key12": "4qzqLkjQ28PaZ74o2RVnxWR79iwurQMT5R5jut4ethVnETk5ThB4bwPhkm4spcfhsAZFWDZVKeGGMoy1pwmmEw6b",
  "key13": "2L5iZcLiSwFz5YwM86Wk8QQkfJYvPmnuV1YELUnXmaS5568BvQM9SNbAumV5U4K1Y3VWyAhch84m12tTpAU17xkA",
  "key14": "5ja72Fd1VhmtfXY1gEN7MZTfbi4tejcLUYD16gHcPPpd8Gf6vytaYJkurobHURFcAwqBgBioHPL4dVC9e28uzbYr",
  "key15": "ud63DMkWZkA8ZPKgUk2xcvTfav5GCCX9aL4uL3m8PiJBfPtf5DzzGFSmPVchAsqsFaq7wrwieqZsRScHNwAga4v",
  "key16": "43e7t329D6gxn2kwMxyjb6PptQXpbexsGUzmLUUguhdLeGj4dYzb2siwgzCcVFokWU7QN35KgKkUDjUUj371DnFo",
  "key17": "4o39PijVZrLkfC8HmWWzqbD98iv1wiehBby3uxo1LUG5ao1mxgjBkbJrNfqVJAZAtFLkBkSsotPy5spWYrBUUj2m",
  "key18": "3hDgoDue8TRHbgR6FgD2xALPVt1p1V9iYHsjacbZQovQmojh1Z3z2JYeUS7nLrPEU85qNqqGcjmEkqJDr9h1rr9P",
  "key19": "5JmFACM9dtqEyyZ4vxfJ32wKid4HksFrfcheKAVoVzqS82dodHZ2JA5zbkWVmqWFeXsd7rk6DMTDmhUVBPcPPSod",
  "key20": "4E7PoTkzmpL9zhM4TLgxWHrjHsRyBN9MFukuvnpj4wVsUJz8wVn4xFnHfkcZqy4PUDKbQ1tBiFqLX9bKht8rS7kJ",
  "key21": "4CrF1gkczkG5TwqMkBhemi4s41u4KyH3vJYFUh6yenRazpqvs4oEw81hdGFxh38gB5zoAUiCvG37dSFkE47VgMew",
  "key22": "44e4G36VuQY4KBZUHEM1ro6ZNRruk9Wq1oqhTN3qXx5kvmLsCd7oGQHLEkvR7H29TUNTChoV5XzKj53JAF4HB7LG",
  "key23": "5yKVGKnoUnRL9pVYqLUQiwc5q6Txq6MX8MwcHudo5sdEfxipZvY8YiPqvAgjXzECbQqFf43JeUi8mKkn4MnkSVbu",
  "key24": "492JE17XwuaUBtBfiDSe1qkQ1Qz7hWxdyzmbgA4NMYVWbiRX98Hhz93BiY28GwNQTYGMVvUHG3Y9Jbddnsg6Wh5F",
  "key25": "4cGmuwUtHSYPTgnUS1uERt6i8LW379BZmPJWJyrUAyGyezef8LZgRBofZzdHHaDMUTKeHkND5HXALDupCED5yQte",
  "key26": "sQQVnwP4oWRMWhdHzmXMbNqT8b5kMX5HhXKxVyvxVdvz9qNfPLeHDjjPPdoyfCUecsNQ9GzqvTZefQpHoUwSg3E",
  "key27": "2Pj1QBTTWdBsAhFe41pn2e5LBXQh3wdk3trbuYpNgJMoKmF4Fmi5qiiTyDXRijzoJSF8BtosDFgjm3D58cNBwPgQ",
  "key28": "4jvvcuwTM7TkvjgWijJKLY68R8D9eMPx5H7894TxZKY1HN5fWx2p6n1NyKsZmgjKX7WHQDxpTnSmhxGinvrXbBRo",
  "key29": "4GKFQxjD7fBRokvQzPCpGantdVmbAxsdbNTmL5UfeJFw3DLvKjAtpktB24nFy92sAtoq4mmgW2hVCoWqsv8n6AA3",
  "key30": "SgPn3aRpg2G7YtHrtNVvS9jttyaS9NQZ6W5SVK4ndFKoc5Hkqv8VPWdphGSr58A4KAs4NAoz3rwUoMnDNmeXV7m",
  "key31": "stqTqyH4ZbZvFHJaUaqiJNLZ1eFTtWEGi2uRyyQeQx2CaW8Q8fqAwQFiq4AWg2TXDq2yd6YNs1wSnHoQ48zUymd",
  "key32": "4TDEQP2PZBUBwRhUMrF1QRgw3BGQZUzdjWKFgV7aK4gik64bb3ZWok9BWguL2SvJWf1JrjMSQhhdbFB7D1JV2tKa",
  "key33": "3RNFif4mTRPyVkP9mPqFBsjekfqGtHHdyY1d3vYcJYUQVWz3AqqsXzw7CWWm7b3k7eMezuandyjZRCk1jKxFNA3R",
  "key34": "5vd3VsoDUrNX48AzLuAs5qdFTCpnY1juypG93yy5NJ52M41mnPNvjEstFWEYE3KaZELWt5TYsjaeyDz6vjMJg9sG",
  "key35": "2AV7gzrsTHB42Nh7GGPHiFqgTwMoADeomZPNddvLBANY46zv5SExu1XgurmH8foepq6x1yXLZRbFq4qs4De5RGdM",
  "key36": "3ZTaQgThRwBqCHQF1K4ffc2em3dkQwax1R17BFtbyRVRJumAGWrGZkmCb9ytKDXH4rNayJ1ZHfPdgdJSnqkyTX8"
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
