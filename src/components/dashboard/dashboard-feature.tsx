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
    "5XQgav5144AW2BmgDZTcFYuezqUE9pXWWj7mevQmHvyM1x93oUF8ECqYYQ2VrFpL3zoSwU18c1MLgfFTNHoxL5cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvcqGoXCDoQMBuYXvRxtvdeA9go1SqpVFBWGqujJGDiagWg7ciKnZxs8zBy5SH38fD3sBjzJBMFb19fvZcphZCi",
  "key1": "43RroMzqoCgbTJd8CrDCjqt2CScgQp9LynhWzbENr12R9Pb6h64BWKvZvEPbZ6mmdsjF6uLWxHzmmWsCDpzPJewf",
  "key2": "zh5sYto1yjmmG7DmmrBehT2FG3xUMQ4y6MUzB4HfQVkmHud12epCwqHD7V5rZdb3e8PAPALH6a26FJBWrW5Kgd8",
  "key3": "5YXqEEKmbMPP1o8UJTq3PYV7rkj7Fz8Ldu6QxPYuiZ31WpkHnaR82BjV8xewjPfCWBoM6D3MGQ2PmMd8KZ8hKzZF",
  "key4": "StMymns2nqJ6dnAmAMtdAQfxdjr2nmmwHDaxcqHu3ZHUEeTY5awHaWNoSAL4CLELvoTHTd73SCQCqCbiPkptyV6",
  "key5": "FF2sCxttGoeKdu6P8ZhdWvixkUHmZpmPAD4EyqU9MDmaa2aG4q2TCDc7jAFXyZt2rkwHZSH1xF3HnGvbbUwvb4R",
  "key6": "3SDEQM4t99ppbP2Y74woiSaH1F3XCHyPJSqM186fQDKQK8iE8g573HbjkvEnmjXmkxsVyRnjbYdo4ce77M23AGQV",
  "key7": "2gMvt5Vzoi4c6F54P8s5KmLXETeNHfXQU2UpxAjgLb13mHR8BQZmxVPXDdKA2NApDR9cNrkAE35rTcZLxM1kWoup",
  "key8": "fueKhqtTPXYc8fhKZysyk7XqG13eSZVb1Fasi3QetxhE9Nqp2DatRqA1q1Uskkv6h5XsphvH7R61QoEMAxWM9p6",
  "key9": "5o3zViTkDwZPbEgen8RRt7pTTHmZ3i95o3sGHa45bk8aLvuM22e7h6yJtA1aUDw4DRHQ9mackRfuPFvbkDmAsNkX",
  "key10": "496ykw21peEYYfkJETz8U7egpwtye6PokCr2v6FHnVihRCXaWsbocUm8vSrdngBwwvZHWggiL35KT2QdWQFpZKUv",
  "key11": "4hPjRoNSgcK5nHKWVtf7gyFabXEBmtrjxrrnKgKXo8tuCczfh8fNzGz5dG9WnYAC14Rrqjh5XwKQRdkkDg3ndmkn",
  "key12": "3dyJ6MFY4tCN3mDNbt8JGgx4Eo9LuqE6pawoR8bJMi3foMSiz7nZ4Tch87HxeG9pLAhaQZW2CNohSUrStCa8DpF9",
  "key13": "VHakJQVVhnvRw1wDyGtvvuxef8SDHPuo3bvgvHLvQ8AZRoEhK54xkZjfpPv25HNWQF7aHQ3iGL9v4Vvz2sXgM9f",
  "key14": "4nZMv5myJ3hP7aiCMijh86zsJ2odh1JoehhycwiPeKGKMC9tr9f3RThnE1Wi7v416KqRz6Z1tTEU8gSUsSXeVUo5",
  "key15": "5d3gJiFB3YcwpHcuZ5gQWfaJK1eDbDnZAz8TY6uXKYaXsrmfM5KrABaVLiQEWJAXEjMwxRXB4KnzEoHQGjiLoX4m",
  "key16": "3MVhy1kiGnd3Dj1zZ86D1sbEVuFiRKg22ML8qX53VETEiAEVJ9gHHnYD21KYrS6PnjdpnBHhz5U357x7RqFTzbNR",
  "key17": "c1qsbYyC4hZydhSNLeM6CPuw8xLxL9TgWYMHxn5JHwBFHRb98zLUSx6xKbjHT8Z4pde5fnR85CuCXgAz1ejKjcd",
  "key18": "4N2feaFTDM16uzkbA1E6KghsGgqAUsAKE7FaUSmMHA4ULMMA9eP4SMPP2wewaZXSXPdWnwBoU7F5kmPUtgmGpdU4",
  "key19": "57TAXcxJYQjg98AYg3D3zrGNzQ17wsoWecgporGa4Cu7YQxJnA4qSk4cGcKix29JjUDLW4HtTbUbpoeV5F2g1PDh",
  "key20": "3LQ4RJgXqmLWzitfjVn5CzCX5LcvoFHS9qXBMeGjYsYviJtDC3RM9LUN4VVujxds1pRD1WpUDeZUCaJaQfEPTZ71",
  "key21": "5Xz5wbTVEwRtWjjgC31hRnVng5HnJcUZQxNDMHBjLGfSgGbZzHJVhAnsBAhe5rSD5vMe2mALvgYTGSBJAu3G5yiX",
  "key22": "2iy2RYrP3wA2SuwZNevXjyqTgoq2iknqFomSxufnXnCdScQ7ni9WuRwTJTNcY4A6Cke97e9k4hsyE2V8XLfaufWS",
  "key23": "3vCL3mCjyKeACGPU6g2nnuWMda5nwqsiziXpD2vxe2kPaEM3GmXdA5oZGdFXiA4u5qoFqbUKsLKyqqessVNSgMcD",
  "key24": "47LWeZjzKWxarumWRGkuQCTwDyQFNToB4HpXKKG421RgJD2zehaJUewfEUg2uuMvT2wmRfzA9JuiFvgAFVdwb7sM",
  "key25": "2F416j1Z46uUxgjBjtFxq4J8HfEdo5GJp9D673adXTz9n8zgxU1bDeidbhfsDHhJYaPeuJa1FJEe9ZQEn6fY2HUN",
  "key26": "5sYyUE5MD2a4JzxyMyHjoowzdpaqjh97b7KimXETbyHiLVNixKKpg9wGys7atoeCu4dfj36zzrP6NBXo8N4yRtGY",
  "key27": "LeRMcACo8r7VjBMPYpcoaQc3C5X3JJvwk16zVhPr93ZUvGvNF5PyVQjY6chqfPhtAZJyNSfzAr3WVpiJbrzjLQq",
  "key28": "2tcGnjNmBRSNBUh1VY7Pnk2yLtgJxabP18SvUJT44o2J1Rds8neC9RgZyavWmToxhiQV9voe6BKUyEtZ6KH5Ha3C",
  "key29": "948ySQAAERGRCCdnBLuUpoJVgEU29wdmwA6MLTqMbi9YhQ6CQufokSDjJDUCrxXfQXj3u1jQ8izz64ca9aAJH5i",
  "key30": "5u5rktPBJmK9AykEsV55y4uKvQtUTwq3hW8joJEEB26ykoRjuTUe9kNsoh3hduwRm2EDeSHxVkRRHu7GxcnM28bJ",
  "key31": "2QZxmV98sFk9VAXTYKk816W6coQL6PY4sHSvVDwrtL3CBwUCpqg8D6ZDZQETh2huN5682GWDp3QicNKFJWSLVkmi",
  "key32": "2EtKCNUJbJRKTMHy978QwzufgaVDYQa6wpbZtZUNieJvzQJhXbyNg9FEHebgTDZ1W8eZw2SbZtbyqxCWy7pvSwwX",
  "key33": "5VU78pAfDLupg3g8e1Efyr4qWEY9QPDi5whx3HJdWkbrzvmWazNahvRFoAnPk7r9s2FXRMckSGg5cXrkCqV5RZcb",
  "key34": "4cjJjbR4uq9J6ma1PsDDns8d9LaMraVCQjsNxbxthFsvTHPUsMU546c6VLaQjtprcVvsvqu19Yy9em8VtUd9ViEV",
  "key35": "4sduPVoSrbR21tD8TdXa9snBKr9bwPZSksEZ6ts6FG7YtZmBqXJrCnmiUK8kdVD7vsfdiMLczYcqr9y9Q6TFDdxj",
  "key36": "3KE9QTnF4qjBXUDR1zuzhe3bsQvMgtU3nB3PGpvV5vkyabWyg1maEzKWbpZntcESLhA5UHfw9as9a22nZngoqAgB",
  "key37": "2ggtEZLpqx6ZTEeUZRgEmGuNFV6RJuPiCGLkDyqFWUdQP8G91RVk784HhCoCD1DpyAZqLbr2cAWFWXDty4z3Hiqa"
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
