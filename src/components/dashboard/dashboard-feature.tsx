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
    "wCWWxX4BvkQqg2vJGPxryK9JGKvXFxiAihgYhj82E9TuvXpMEL1QYZWAZsENcfnPRPJj6ERNDY2yzcb5ooWJtTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsKuU6DsFE2mN1tLqACoLZQAi3RQfJV4a5LGf3eQTa3DEa9sJtUYvqbnD2XhWrXKFVYovvQwLDZtETVAYgpTM5k",
  "key1": "5k9onsR55u3yHWjGTM3ehyUu5618sRSuYzCNSe3oaQwHPQgq2m9SNwEijvbdDVeFxG3smtxyTcP1i8RMJHgEG7C8",
  "key2": "5B1E34D1eTRan6hfwcP9jQnV6ZV9zQoHtYXkR1pnQuEixh9kWvEBQTycReD44yQwiJNtrSBBLCaLi1cnzTHfSP92",
  "key3": "4gKwuixfyZFLi9uY2cRrfVoFUeix7Mw8tBphtPNQ4bUUA8rphTGn5nsW2hvms45HjiBXKbk3Y25sNvPRPZwRSXZh",
  "key4": "2iLraRvpGkcFqUaZBuBjvaeryfW15nJYa4h5GfQNUV9C7TSQQQe4TvqQkR89F8GZ4t76DVtsEvM1sKj7c2gAU9CK",
  "key5": "XdvpTuruJAZJZuvqR58bVrXywNUdcxPoqud9s42eiLXwcC6sgRr9yzQNZz2w4G2nE33zGzSAZwVhmzMro5ftbYW",
  "key6": "ZKR14guRYbZwnDXDXfmdmUf55bcuHSHX5VwLwNBhRMuBi7NANBrdhKhw6ZGTeZfZgGhmJ59Lid5xritULpqivmn",
  "key7": "VUNFUcuunh1nXCyay5Ly7UdipTqowESok1PER61dnW5RehBRFCfVPXczEkpmFQnSsYWpmhdLDb1gJyGU6eFe8gB",
  "key8": "5iBiV8pv3fiDmEgpkCJyzuRyuo95KkdRw4xYkq7By89pcmC9376Ca7vvgfnDGca9yLJ8s1QUxYyJgzvjXAkynDHQ",
  "key9": "61dgDRcB9U3F92XELXc3yKWZq9CYZ1NWAjJBM1WqhUVzRpGbEu7ZE8JqqT2Qduab75zi6jnnkqzrqKxZ6pvGeTDM",
  "key10": "LEWW9UfCLza2pfGMWnvpvX9obZtCSyuVbUGfUnTfabMJtxqWu5j2bT2416Y871esUbQABmzZaFsdWdYKThttUN5",
  "key11": "vJevZxCRE8ShfNC4V7BvJsynnPwSYFmbUkh1ru73dcfTMxPuZLw8ke7HfeY92PKXfABKU71fj2YBGJnsGAkjFJu",
  "key12": "4pWDTVeJJYfktu1QyMBqHokKfKh4HykMRwpbFqh5Ye2QRkhxSFVXMJdLsBgx6c6ot2eSutiVwoVCRa1ki1KM9vkt",
  "key13": "go8JLQcjcPbV4nqxCzLaHNWh6jG776NvAxBse3FEb6toaD1xnQMUryoqVRAvCGccY5TBHCupzJNojVwVaLoWaBd",
  "key14": "3ufVtT7MohgtkTghw1XVeLsmEwWZBSWJdRy5DHcWrv9H7H682fBSdFJ6Bb4nv8ck4amAdhJrKH3UXL1Z3CMhyShH",
  "key15": "5ySRmX14e5aKbN4Z8iqUSUY91vhBdHUhkjbbhiavbeoF399cuk7azSPhhXXniPAVG1VcP2BYaDTUUqKMD65z3CP7",
  "key16": "qHKwi76XkcENFhKQPFcM8qq3kPxRovtYwQ81DNTVyPs7mjLgQc6akzwcZs5XXrZm3EKifZ4guxHNfr3Mbiv9Urr",
  "key17": "5xJK15FzDJsJW1bkB5hmeb7dSkykNVHv7JS3mGMHx5hAXzwk521fdLqDZ6Y2iyAh2k3niHvrst52qVzpe3ZV585T",
  "key18": "3M3eY1bDaCqwU3xwL6nG5bHWKngd2JEQtHY5ZUT17AVgUfJpRASniDnnqQY2FSMDCr2bNNM1UAWgyHb3xc64S466",
  "key19": "3pCo3jHFkpCfgiiqBfYZ7uNhbDXs6sVpLZj8wHt1az14UAF8GoT1TpEou3bwmm9mZGohNYSL8zFFkdBxcDQBhC8y",
  "key20": "57wzz9rjodmXypfNJBtTh6bCQR16US3uds6UTcbWc3u2Vu3siFto9pHDzaheTp6o18GzKsMNDwkUfQ483kgpFUxD",
  "key21": "5djKDFGQW59UqrueZoxvL2Kyryco6KbPMzTJGuFEFQMGnVoFgsLsuBCrTSgFTY5KMDaqXDe6JrYf4qLPEB2sWJoP",
  "key22": "3bMEqX57QNwRmYrU5MJ2oNqGc468vFJUmiJpxqYQfXDz8CFme3dqTh3uaCWmb3h9X2M8t2aoo8pm4zh3KywK9ZVf",
  "key23": "4mPxRteE1BJP8rcS8oga3FKkwpYdVbYTKbMGX4aoLrKtXrGqDYy2uhDc8g8onCcybFddRt72QZ5HZneYrnWwsVua",
  "key24": "2AVAJjgoRZxGyYfbaXCX11muTxrWJH3GffUNLEoooHQyAeDvz12TL3RHzT9XHBysNHd4UARAxEvSPFL4ePj3oYso",
  "key25": "49p7FNxWryK5JveDCsqAz4sGH3iPPL3iht3TeK3yvaGA7ywfBL3rycfqaFPiqGBmgG7STykYssxFvcSCog9Lh2qJ",
  "key26": "4ejBahjxgqLuc5Vjw38C1JqhQa6itbKBLgoBqortseV5Yov73yTc9Lx9vcqSPSWzgP4tuM3EkDaPG5j8uChzV8me",
  "key27": "2gFP5oeJ75NQs6jvA5E3WzKJ8G87gdiGWaDxhRQLpT6MjD98FEuNJoujQ45cbpKp5QMDmZdaeXk7oCjRooXsC4KE",
  "key28": "2wsPDLUqUP9LVDa6qqByofVTX4SoFSXuHmZxFiJMzen1NgUnQDe33hW4QdKrvjFSSt9iGLobiPxshdUiUdYGfqjE",
  "key29": "5tMkBVeaPdQvZS4JZ7o8FnjcE21ffxWUhj2NKkcvfBVtbJYGyUqPXFeMJF4wpchyYhESDE2tvvFiBhZLWueB242B"
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
