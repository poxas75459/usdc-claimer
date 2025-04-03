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
    "5CGCvaNHfHZLScDumj8sN3nmF43JKT91X7aB5HXyby5qrv4qVrXtEtWATyEE31GDam6yDUkKGXzVYr2pNY6Jvxpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVRuoQkcLZx1cQTSmQqgMMe1Zi2sH1Hr2oaWFmARfgoJcP44eqZdddk6ZPc8MWEthDh21Tdz46SQgK7wgnn3qys",
  "key1": "2mQipNgdnepxFmX43YjpudCXGwFTB2n3mqCP4mgQjmaW3E1TQDcgWtVMGLJvsKLX21thc1QXQGsQUDjkMv1JCPEa",
  "key2": "U1rSkpHaRtK9cuZ9ifZ1N2NJzzvTbLTBtTYuswd6B35SJunskxybUoLb7XSmaLNSMNrLar6MZApZ7GoT7KZZWYJ",
  "key3": "4KEkpDaaBEUzm7mz236v6uy5oTsWj1dmrk39quCxdwksx93VuuYcg2R6HAbd7p5TE8qi9xNdXEEmVPLeGKaekGS6",
  "key4": "en42yrFvLYsa6CRzJBiJhyctyVnTmxhh9YyTcTtWqVdR5c7rQavpV4SZpzBymHAzbK5jmLxbdDwsw2H3hYfbYcm",
  "key5": "4s8DEtTjuaRfUNVRUfgXutveg62Z9oCuPnmC5Tht7ahk8CEneqSvgd73fzrgahSRFSyDJLR6vwL69aFMSkLWC74J",
  "key6": "VRCG1NsfHFcMwDCHjgKvgqtYq2wSA3ff9doD5LEXtoVbrk9RWumj5HamHq1zJC4YMCfphenKgNyDPnmDPHwb5u7",
  "key7": "2kmyeVp69yfXvLRC6kU1PFT9QPNNMfQHy7qbcWFsYPcHzU9ceS87o66SLtVFmrMHzL3AJ4hoa4YrK6featMcxYY4",
  "key8": "5Nve4fVWbHYUyjEeorBh8UFqD7Qsgox6orUccvTS4nuhfdxQckZB36REZuPGpcJ8dUAukoh5M2EvLgpkY6FrnQGt",
  "key9": "2t5Ui7fXZS3DLtn6SXmdn41sKzeiUBHpUdPwn4r3WrB5jNkbenPrQFWCui1LL8dYaqjLMuFmTTuJdiyrUNNiVVYq",
  "key10": "3M556nAQyWZA4KKE2sS3r3kahKo2XCD67qxegE639e96trCeEhZJjRT7ujB1j4DRs1tLDeXvzQUY9YF7YLPAKV1E",
  "key11": "3AyAJJdt6GJAcdUo8F28cCE3W6ZFZv9xEfwNNZZrgfY1BaZ2aXcPMbXj7ygQC4QWwQn7wJ2sDiAy4qG4vYcqKJCf",
  "key12": "5jYQTP2uZHrhkBUurN5rkNdo3DjT3DqcrptABAsWGxuwZrRbeTzcFcGecbgp8iNNMFmY8QLmbJdgSeR1gqS1aJPe",
  "key13": "VvgGWvYXu7f5jESdYxDtnhzXAdQ9VsYH9FrRFdra43Uh5ue338kvQjAsMPoB4vtWnRGUrovnTGUseZsCCtqFDnt",
  "key14": "5uioPgXwhGM6uWgzoFuBv5h8j7zYcWeiFmPNEEeefhiPEff8Ae4aG7ZzhfNbJct5kB5ADMrVgqTh1xw1zGWPbUDN",
  "key15": "3foe6AZQAnWRHwcukTGUKgEby9BwNet9Y5WoxrnevUoWnUxvxkPYcaaZZZZJ127fo8vP3GgzGXka9o56mC5SSe3A",
  "key16": "5TvpEx975yzQSLjnKPtVqvBQVjDTQR5dhVcTzBjXAybMbVonbhq6LJZyi9r21hfZK5mpoMXvoE48eLuakrsgGhyh",
  "key17": "4pWT9tquApEz9zweW2AZqiLvWFrLFXV2YMfQDtjg6X1Sd2iVHupVabhWepWMk5DqyQsxH4ETscAyXyLup6bqQgmm",
  "key18": "2qnA6UeyxqrY1c5LPy6mbf2tbGyQs7mmNjUT2DBgfF3xi3NFMX3zYNUzTjNQ893yqGLPpng71p1kG8AyjJR6HsWa",
  "key19": "4JPui36i2mneLufmU1AkWHmPTyCsksvrZyywgqHRxJYqmhJHsd7SBQ1kR21bgVd9LSgCRu6Cfo9Hyxjidv5UWJuD",
  "key20": "2vfehxkddauQYdBMv7TCP6tWk64naFqwZfomCDG94BZgpPmXpbPBZyczqXxeDCdbdm4votB8PJyPQsKDCwTHE6RM",
  "key21": "5AUi1fJ9bAFV75fVHTAKdCG5Ln1iREiLi9y6HHaoNGnU8majh3XL64Ud9W6ziJAo9AYB1WX54AghFJfkHiB7ywQP",
  "key22": "4CVb56YMzS1zrVxuY56qpNSPPRtehmN2eAxCMW58iMpdvc7MbD3Qq8xvmqFeASZUiHYDxCY8PfqEHjqvDj9necfo",
  "key23": "4dUEx68PyfjaEJ1FSeZCegqjWQWBhZQ7fFED7QKs9cjJgqSyAg8DqH9BP6XVZ9oh3XR4cEAfmNKkzhoRDAgW3Gp3",
  "key24": "3M47YmPDTKPH7kKTzou6uqUozKLrF3bjtwiqtBwaeci65a7enRRdZpGACdkqbmdxsZTuC2BQB5DxPnJHC2rKyvHV",
  "key25": "5zHCK5LNhsWWELQ3rcQMLyiGEP8FdtJxhqdh95UhByJqQVyukdsZ9LNvHHAEPzjYPETd7SmfR9YqxaMrnT2HvUrj",
  "key26": "3QZqRvXH9NxY6SvTNYPNJK6wTLeyRhGfE8MmcTpe1YNQjbN9KMNV3hBNmQUrgg1JHHXa5ZvySHfseAvHYJNtfLcP",
  "key27": "383sMqu9sG6WFKTSSagNhBruD3yw1dttPxZ7uUXityGWVgotoJ1sDp1WtLwYUP1h1x4vLRG8Q5NT5VmqHoeGr3ds",
  "key28": "3dGDPer9A8WaJRZkXcfLSigTcrkpeRw4Z2jMCvDZeVp926Zs67REwsoJUbpTkzhVFBZsFsq7tvgghagJxV2TQjFh",
  "key29": "4Cwb9BpsNYmkqS9LZ6iyAJnhTfnECy9mY5yCkcwVbs3smsJyajpvhH2SzArSwBTECsnFjp3a5EzTLJojUuvuqi8E",
  "key30": "3f1PQpnVfjsvDrMmiFKz4Qkh1CyW7BWnNTbr6xWGFA4deESdfkP7vKEpLaEzQXjyWXraTycsiwB6syX2svG7NxcE",
  "key31": "AnmYBKqibJUUnEW6NJvyZvkhXHQTjfuxFH4hSmWs8Ec2AyPZGNS9wWV8J253dxndbYnZxN6pGa3M5ozBSMvXtQo",
  "key32": "48rjRKhUwvjKoA8WeCtvzQPAWdjnMRCyTsWB9Pijax9hNXXxty9e18qBbeEPrejqtXz4rNJtmmeyVeXzQxppfdR6",
  "key33": "G7wwxTyZ8xUEYkTS96SMdnsH6aGKPaZcodwNH5SNPu5AghRCU9FkgVn9e9UXXPoWXVDMGLpr6ndhx7L1v6Y9R3c",
  "key34": "3WQQYPuJpuVpx4DsqxxzDKM6byMfS9PPjSBa7DSnXMJFvHxYNGR3x82UV54LkP6s4rHPkXATDnMDSYgYspz28xkg",
  "key35": "RwubqX5QnHWnxeQkkhPbp8aQo6d95BnTxTeUaHbSUZFfkAxyFcYe8m1Tz3gFuqfkMs5EmZwPgKFffsVb9LgZUMF",
  "key36": "2BRoHVQp1yPNnfnZRParqFP9pLo4UkPNkD6KNbhbziqpgfa6PnXvosBwkmiesrThoM6coMHAyMrt9gRhgsYhTXsm",
  "key37": "59oHoSzyq4Bzw4U2sUWVcFMeW3iB2EKTui9ejJpc73en9otZipH5B8gvqo1tg2oqwSvjHUKbACybs3DFTihZBaJL",
  "key38": "5Zom8m5PESgaeEab27CQvg66TsJv3SFvwBhUGxewWu29XsnrdRhSrZ1AoaUByR4Tz47fxWHks7teDwbwivBoCCrL",
  "key39": "58bRCW1NtV9WAcWjbSfe4MbMVQamCn29wVj3HBqH4mBZGiWvtmkycT5PfK3YFErcTPByfU7Nxy16P446Wb4QctBx",
  "key40": "2uwfCVwUi9U4B9B3A6QHDacvmmKNYsidh51VKeND4JfYfodesNsTGxhjyPV1McwLaAbHpQ7ACnCU3TiUYkp1UoRG",
  "key41": "2TxAbG7cBqmufXgJpsBmMhetNwp4fe4Pnatz1Cr8kx7yCVTjLohA9Q9k5kmZnirkZ9mdRNXk43xPc85g1k1dTLAr"
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
