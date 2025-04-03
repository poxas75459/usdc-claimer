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
    "4v4CG1dAFaPHkdY3ob3wGMThQKwabTVDvVWVS6soRHQ51eqUTHZPqSeG6quEsarvtm7Axg6HdE7reSHmWfNiGuMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417UoRwS6dCYwZskDT2d9atVGYyg4KqrxU43P5j96w7jebGEoozeR6saYMptqKYb4Awip3pBDoa9u97tETuX4jTB",
  "key1": "3awnSvskVvXHVxsBmy8jtNhELdKkMxkxJvX5CHryYPEtGz8ZcMuWaRdNrcPe5S55JP9TD99MoWDmQ96TyGWKHgdE",
  "key2": "4hx9wMHaQUDA4o28Fjd8BpiYWh79j5aPmjJzQt8YQQbChTptaKHMn1sDi2QHP9Dg2EnnJ4BKpScup5g8g6R3vGch",
  "key3": "5kjnnGtpgDJupzSAAUFMw8t8NuancZn79cJTcpDWZ7UexYkPqapzvRMCjbmLDst5wond2aVs7xDwMM2Zpgyws11i",
  "key4": "57GY7kgvNvbgbp3jJgCenDFE5DD1MfVYGYBXwVAF1UW35UcHSGhCpwMQL9BPfeLZJnEc8f2hj8XX8cmeJuAca3YT",
  "key5": "4JRzQAj6BGu5ZZdYTEwFBEzpSd4vLTasK6hVFFnxodi953b7EkNMCnvWqSLx52RfEf8XusPRTp6JxU2yLQYYkcDb",
  "key6": "6FPFxFsFFr5a1YN27oJzDGCf98SEKsmkJ2z8hFQyxx5uXhELi1ow1Ljt43XFinfmMaL55CAKpREJJpDAX8zJV9u",
  "key7": "64wkp3MfUKQcZvfWKy5ncgv6ipNUaAs5uaVY55E4BARrpDpmSMnUaT7obFn72ACFSdLNHwyy48HpnmEj6kXXrQAe",
  "key8": "3DawffitF99DjUDRMLL2jhoSkQGPKbjNnbUq3xxEG1XA7VwAKqqzGUcZx7U2R9VQootfMR3ASH4M98XSuS4zLaDH",
  "key9": "27QgeYtr5gRLECK6w8yUo4XbmAZYRtXRa5kAJZnyp9nb5jcYQwBBnNycC21GSgd31cDvRYzrjXamaZyC5EqKWVW4",
  "key10": "46nYq3QkEkfQj8B2DvDXRzsr6PmiNcdZRJ5grAiu9tTnc8rme2FVJ6VgYHa6muxACcKjYNjjpovvAG6WxzPvQvtz",
  "key11": "3bGpNrVHivpb7DYEUVF6wtHTvidD73SWG1Y5MzVc41z8uA9kxYq26gtUn9EUB17oB731nY6BgJyPLH6x6ER8bC2Q",
  "key12": "25fmoNiJyMk4FBbkAJDevLjgtxwzdDJExBodJJDyMv5ttVZiYBd9PuWKgTfsDGVwDvoiZAGdfNHUuU33qXH8uuWY",
  "key13": "5ivsEGYRthYUWjuiejncLWRWeCMixTgyxJEMjVgLXep6jzQ3TeU68uw6oEhfUZdAdbdVqoZn72FVwEUpf1cmMLDY",
  "key14": "UL2Ae18smT31KmAe14nSQERwYQdqB6qvPbmCkQPnRzJyFfn3LmnPqpXrwm96sdKKaAEYsS8ooy6ebfLpJFwbMkq",
  "key15": "24J3FtAXQqpsHZzoErjDqFZytpSKgAZhqfnUsYAbXmJCVVjwfPpKnuPXCFZE2Bt8ExzDDPgzkBoSHhTpE34kCsui",
  "key16": "3icHfK7J5utu4eQHDdhb3FEfZkLf7VV86FoawBXneCFnLRBAXjMTJqguScnnUwwDVTPn9XRC6V62sRWLGy42dZuk",
  "key17": "3Wa5WrwaRrxDAgLeNAZQcqDmHZ1PzWiC6sdmXChCfmrY5wKFzhHSYQgLCih54N2pxK1yVADSE564qRGD2gEFyEmM",
  "key18": "4iGwX6FpNMbe8qj3LneEJcLS7ArSbVySFWVGgXe7nbFcBdZDafdgodGYqrQ6SCMNCwDv9JW1mXAnzjM5URC3XDS9",
  "key19": "78UPcpZTuc2XRbWSFoUrHBTJM5v53HhahmZ3JLUutQvEjgNRHCV31EAESH1CSB9euzuATV28HdWeqQED7MX6QMu",
  "key20": "3bv7YfNGFLkRfuyAJRbV1qxitfPVMrKykxQjWPXDNyRnnvpMKvmN8sV9HKVwuhGfvq82Hs9aZRAtYn6cdSwmkFe7",
  "key21": "XCysATMcUZMYK5xXBgZHHESZxhzvG47iRLTCai5wszfxm3Xak5zDhMT38zBPGFdDGeNnHARLendWDTThpqeVidz",
  "key22": "5uzh6VoegNKHZeXiD1ZrCjX7PirS7d7YXPSzCVVqNeJBQMbEWcXqqHHYLPqS1VkNowejZN75ub4j1jCazPpu3srs",
  "key23": "4dE8TAJxatPK13Sec6sxw55uFFNMmrnUqPBEh3ThfLm7NNpss6KST2pcRoPVkmVkSMcxjFD3dF89wojBWD94sFR",
  "key24": "4SfzwcjKPN8x2Fx3ynYkzqurt5Xm6q5mwtqWMWf97Mq4zx6KC9jzCahm57DnAgckbiZgPPQAXhuY9VGnzP4LeAMG",
  "key25": "4rdUXJLr6zkuWT8nqgQii76hpsH44Nk6XzZxPPgsnqPkyWiDSKWerCxovPGWTQtXUzxuGpZ5kuCaSTwgVsfeu7G1",
  "key26": "2swf7E7CvKihRpV8CHGzmZss8tYqtfhcbqAVtLGw9XhZbp3JkTAa2hJMR65x5wNrgvehP9GSzcqvmdQamNbzk3LK",
  "key27": "54VJ63MLCytxc9xFE1QsvhG8envf3w3MK5Pp7sVqcLmBsm4UfAgrLndQ1Uj6LWVbXHpHjkQFGNdjeoXq2PnfSGr6",
  "key28": "3V8D8Rxmfu5bGMJ2pAZcwyNfPbNg7aNscdSz6AoS6H3tuZZvxwnEySBqzMcaoxpJeARVUUWZsttEg954bGu62SUs",
  "key29": "3S1vAd9ggQFd3x2fsLvcRrd5H7HnGM7aXW4NR5WoS4GmWUhcBL2oWhyhoCmz7kSZ84ZjLk5XaYSFNunVcuvPkwrP",
  "key30": "hKXefni1Tudad12iVQgz3FH3kpMUd2UZH12tCQ6FiGh6k15kvHfLtkXQWGFhBa3SQ342VToArUJfMppPGSkBET4"
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
