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
    "23BHaEnwatUjUSAcHSYM6R4ghXjh4DEP9DLyTDPwf3cemm9SguBQ6oaamtMnL3GSxQwqk2cSC4zpwjDWXogZe2Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vSqfjMKa8a53d4SPApZEijZQw7uFxuJWEt7xJFDkhacJRpN52jYdGEWBSWfrDXASUvq6ECP3nFhuwW9kc5Ns6j",
  "key1": "3sZCNMzL8PX9cNvrCc692Wdx1hrTLzLHpLa72898QNpRJarqbyyRKMYewn76W4cwUbJ9pfKUL1QbQ7pFNXnzsPuJ",
  "key2": "5DztPhboqN77NmF1oH6sbrXQwt8oHow9EgHiV7qk1wyU7my2D4iUJEVfHbDRiUoSXyMDTKTNNSqTGCJeAD5zCj7q",
  "key3": "5EohLpuVWzHYjH5Ru7U7yy3kzHaQKuGfQfbgiWpW79XdXy2QHSY4m27sn45HsbBhCDq1KVfobHthRGNzm1Hx8DUB",
  "key4": "52WwB1oEtLbbFgwnF9W7bEPJFgqcCzts6T5yvufivQr8nXmrCsKz8y3aqsZAc7e65Uwzh84nujwGfht1LDRNXcCF",
  "key5": "5HJzrjUaFxnLnpTpTWXbXtBeCYjwSBrWFG7VuJzbXSHLLbBNLQuRRpLaY7d5Rfv5EKTMEug25QqxGST8sZWdrHL7",
  "key6": "3ogxyHkBXjryMeMQkV6DmZS1Qmb2bHvGMitCX9bjnKnL7TSwbMwbbJ3xseQaWgzwke8ts9r4kFUapfCLVTrZUFFx",
  "key7": "5p5n7KXS5vSJqCGpydocTaZAjo9dZASBgHzRUk2Cxk2FnpK5WE8hHXa9q6cdUBiXSzFhbyE1tY7yduDxbD7s8Zvm",
  "key8": "5tkT1aao6FY52zLKw1FEom6bMhPLEgmaRas66nSKjioN1LqDCnkHsH9VpPcRdu3W7Goo6BmgTcSnaqNKhkyLctL2",
  "key9": "32N57xYPszG1Q3HYaPPAudJsJ6ajwtiU99AWfzeErRRF5Zt9ELXEHRBb21yNq8cxpkpJvm2cRbdoqNA1PkfhKjKL",
  "key10": "3WoJWo6FWpN8Z2XgRJ5LR6yUM32ENQVyS7nwK9MsoRv22618dv39P6yRkaBf5k9NGjxiN4mQDNz5nvWjJwRqv259",
  "key11": "sKXz59QTMYECgXHiwukhoH7JBuT1zkHVANkGkvaZnwJguGQvgysqM7yVyXxRKmoTMeHNXKpEvthmbQYduEk8Zgc",
  "key12": "rvrpC3XYqb1G7is1fVWUEFgdi4bzi6bR1C1cemsKJPwxbqQtrqZkDrtei44ZxaKV8nFBPVktvjv8vs1oZTivvf6",
  "key13": "4c3XsBiALWHgvY5WPVs7hRrMibd7VdxdasJTYPoFwPcRhc3bZwWwEQZSeLbVNG5mfJxX6ffipcpbPcQzf5jpxzgQ",
  "key14": "Xf2XjL6e254anm1udTZAH4tACbFmx8WL8Hwo6HEVqz1jqVF3Ka1qpNR4u6u6WJrFLJGYNNHHgxirMRHRrWBKkqn",
  "key15": "57N88fd25UpaeJ6HqUneepeSdzGy6fBdsjxfxcMZS7gQ7qDRaDttdUwMvKWvxgNVLXR8cfzn4HVpGe1Nbxgmx3jD",
  "key16": "4sFiNbiioZfockuUfavYioEGNsMPJWxmbFPgfceGbRcBxScCeaAjKyBZvXYVMJB6o7TfCmM2K3frijHbHMV6uJhk",
  "key17": "dk34GmLZWqrPhMGWZmZbxtBZoAXuK55285M7oCX2XXJPnY1HkPr7RprXmSfbXDpDniTjD4yM9bgEGdvskqRVUKC",
  "key18": "5kQKz6BF8kKn7m3zH4QnPDNsUMDJ2aMrW7GWtCeTSsuZfktWaY9kSA68afUGP47RnmjaDTqohHWBcxapUsaYhj5M",
  "key19": "5G3iBGxFNHLHDZiJZ6EozN5KGHGqcqDpUkzNqzAuVwaraowSxioGMjR8RWNcwwYk9NTaXhHoGKWJYdvDzhvifbHz",
  "key20": "5Kfp9Peca6iUojRcK1sqQgo6BN64F7WAvAavitc18SZixMCbzfovCHXvY1Z9CrJohSVbMseuER5JJdgFErL15DNu",
  "key21": "2qQY6uHUMy17UucAcuSZzXUKHiSyCL6nKTeaCa9i9NqtryHCMznsHkhKXPwT8DELbCRhoaE11qPbtXZqyMEt4ZGZ",
  "key22": "2H4yQs9FsPk6vSn8bq7Kd4BDCqCopJ9xCu9waPXHVDvmvKV5V68BmoeGXYpif6CjRHejWPCaafZtZNFCtYQNj7Vz",
  "key23": "5VgGtKH4U85foRcnjSsMYiqQ3JG7dyya8Se3UQyXwdD4qqbVyMMQHrFM9sMd6ps8zKKQBrZbkkP5DebQgcbpsKJC",
  "key24": "5tmmYUQrDN23wFjqTEZt9GgUH94x5EdVfwqQmkasZrJxNy1H3u6TcJSsi6q3FyJ26td875ybdAmpsUGwEx9AfBGk",
  "key25": "5caMNWASvTKRvd7zFytXQv1JU7CWV3KnK9ozo4uuzzX9AYgwKFUKWGz1TZoMnFEmRhg5YtZyTPnsQ7kYnzromcoB",
  "key26": "49J927iSvX3vu3XVSa9VR9No2vrJmenJpDjE7cyBkSRHqf8mqu4xoKscZfVbkgatJkguxG1iVvhaHvwcZdtBZT52",
  "key27": "jGjuz7qX5KkmhRc3upQjXYM8kgTnvgxXBJTPAEBV9UqEShbgDMi3tuCLSdpc12Z3yEtcWBeRMve5iM3ptub2QoY",
  "key28": "4QHBeEPHaoMxdVBitNXP9U2iMwGDBSijTkgTT7ARVY8FXL61cxaZ3yaf8JC3S3dWaMhaSJSnQRESXufMcwDwXk5J",
  "key29": "3AqC9b8cDVUc9RioGNopKdocHocaBBhW6FFaZ5DfBPBoLEoLPUwm8J6JbEQJUzj2wsesXKmryNi6RqbHzWDC5MpK",
  "key30": "3Rc56rbugiBYBLDWMsUkjGz1FeTiHDkvb4egSEJ5hfpCxWmJhs6JYj8HmKK6kytpiH1D7SMgn2J1Gjr98tmuFPQz",
  "key31": "4Ac77e4rmtbMQSmZ4QnjpsGZ2HjwR3scgY93KQqziSCuSS7GgaURE7y3TrMX5GZVWZ5RHfgS8V2qnVMxsC8pXBhB",
  "key32": "2Mbm2dGRANbYrV9m5cM2jhH3R2CYqLFHS2FbAQqa68a5bpgFS93iaYv8PXDbQoCGQy5QWjTXALKwNBH6k7HwnG8V",
  "key33": "5FmADPsHePFkdnUzPXyodD1oLrZDRdSSZJSKfA9jwu3d3Vg8wWSZHEHstGMYFZnEya7HsVp5GQHH18R5FdybtC9Y",
  "key34": "2daztp9gTuQcJ83R6UzbB9ymbAKcDHvHNU35JB2ZjKS1h5xVqX7f5xySit7BNeyN29QvwwqGXKTd7xmQjZQwsq6C",
  "key35": "4GCLTNnA4gCfwkkuNXFL51bnr7KocAUeefzau5xj2VmtPJLavM7pumc4V6nNzWJhMvUzP3N4RFFcoLq3HRCJDEHm",
  "key36": "2vKNhuZ2qdUewLFHdKmcQuPyX5s5naH2ZYyZss6bEaWFycCHPsrWGR1xFBzrqd1H9sJ6WvjU3PrDbMnJFsPMMafN",
  "key37": "4X5ou4wtp87B3z3e594UNjbkwUaQgW4CouiFLxNNziV6zi93PkxboPniGHYbB6orgUVjGUVxWZa27FREq4tnaqhx",
  "key38": "125KeH5eAq73MXhZ4xVN8wb9YWFCwdte9haVrdZobjrzR993Na8njP1h35h8Nrx11XbXPp11MwHEStuuuafh8brq",
  "key39": "67PPUjNR7JH9VMiZuLLTLzRhvmLBie47dzzCwPuqYtbNLT11H1rTAUFNH91JyrgvrAKYUznNLVcvpaNGBpnZBdZo",
  "key40": "5R5C58fiRbz223J9GybmLZUNg3UcpLL74ZWENDcAu8q1G3SJDp7jNRFBRaE3ro2L3UeajF2vvBRcwfoWKUZfmBGx",
  "key41": "wArCUJHvhRd4nMCLe86F4f2ZR9RVQHgiVoeU29G1h569aZiAQ54AbCnYMzAKWcXUnftwv81EYP3sNfC6ixc8f2t",
  "key42": "BhQ5LAPzoDfcj8Lk3kU75weJn9Co4hGk7PUArRXEJHSZrr5hAtvdsea5d9ZjxA7QxQfFR4hZm45wcwmaatbxNxh",
  "key43": "6kFCtni2mUAi9cViG5rqDWPVhRLmGAwSRhLtCXTrUFkYrZLkSjnKQdJYs6uah8TzfKPkVTDL8hQ3TY5AP5QDDmR"
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
