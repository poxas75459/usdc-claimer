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
    "4ScrbSopyyoYzgnhKG3VUaf8L4ZrWiibCjoNRiiMi9rWMuxXcU35kHpZhqbZcjF2LQFigC9mWfGVgxrSgVWwBgWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeTg6J1jbKGPeWhzHSmXw63DKXFCzeTg9TXzsHL9FmRAqpj96AvPh1eqYwedcCngMPynXr3jejZC8LKcf6VDNxb",
  "key1": "4JH4DgxD1Bcv75cykpNjGd3Xx57KDGqAgBCxHQRnVBXb3qjocUq2LEL5eg1wfkxnUBzP8NeFYXwCuHxQyqAhgrr4",
  "key2": "5JNTCnfFkF7K3ByuHhHryqFhSTPQNPWZnxb7Rgg5sXq2AyUqmKt6rneSyRiEynfhz7dikxcwXhGiUjHwkAK1FkTM",
  "key3": "SNQhv3UQjQE6x4jnLrCRU2nnLYLMAY72x5T1fXUcQ41FfTMswxrfYray1iAitVFmDmaanWnMCi3NCeZyGTCNVXd",
  "key4": "4DZV4Pfq1XiDKdxeC8219av9nQamXzSB1VFoDCto1dGBXSs82AJqiSWTC5eUu4mvjaZWym3hh3vxiVZ9dPywC4WS",
  "key5": "4W7REjPtqwVjG3DMVtXKY9NAz6o6KyXhWyPSGxjaSEWLKpmq6hqEvBodequEar82whGEHcXA474AKocHUCTm1poK",
  "key6": "32jzJPRkvsyVBuaw9UYwFYvess2aR4CTysXp6dcEkNtajtWE425DMaVvXMtp7e9BzcWtpoQ8Vn5y2B5kaPtQ3vLG",
  "key7": "2mo65r7iMxxKToSBtA6UxZ7yBWWA4Fh62XdwiTxYcvgQe1g66gCvSVnVRtuEPGSNjizYVgs1eNfs6PAoHRxuMUy9",
  "key8": "4siBtooTkkUVv1G8w8Pn3TDBbNS24Bg3zjN3WsKVgtCmRgkKFDFY3ASMWBLsYXkR9yyFLbUjwpFxvGTX9TYWdn9G",
  "key9": "5vcMTqeRzUBYNGswGY3Mh9i4Yqqz5QGyPmCZbmHx3m9VPk5eGmiLfDH6csvTWbiMHi1mq9NM8jDZXcte7jjYtKgU",
  "key10": "LRAYhC1xj4Ae9PZEcLJodcrmUc3PzdPRZNAPBH1x7cFMzavAQatso97JY9p3V2ZBknFdfLJatjJH8ToNcDoZJ1m",
  "key11": "31TntS1u31fBydB8qhjdvtjZdzp2TbUAKBuBWrajwJytmn9fQinGysgDYhYyPa1tPuf9j6dwYuCo1dossSx1QaaG",
  "key12": "3tB6YHpyooT2BH2N7Y5sYgn13xwJE7XK188Uzp8PLGNz17F5cn6rCB62NSoiT8Jbpf9DiYKYpfJ6Kme7YHeHJQoN",
  "key13": "2s2fBDM4imoFYhz2c48Dp5DAeX1UKh1XaoaN3dBGGeWYEKAvbcN6uzgyusUisiD5Boa2PPZGbs9w6kBuLJpckHt8",
  "key14": "4GsfTCYpMbQYbCjuQMBffQSbVTRiUUAnPSfzEM6SUbKHMhfnEiG5u27dPtWvnN4pwVTLQvGiJpgZefyfgetCbcXC",
  "key15": "4SAUJS5o1TBu4JQDbHjHE6o3ZJkREiJJevAF5j666EETbCaoCznhxsif7RNju9k6cPYSKJSN5F33WLc7Wi6yLWRE",
  "key16": "XEzpZg421MEUX5WdK8vzoSALQaQo9bx5gZRvr9kcD3gJofG1c2VxCAJzs5ZSbLk73GAnVcZJHL47un9yiBKwSKY",
  "key17": "DC1ihn7fVrBRkQbk7yykzyPUrH4svZctfXDiakgqdmgwgdiVHmjRM3xssC8miPLQk3on9aUhE81Kd5R1V68ju61",
  "key18": "2EHeHNLph3dNGRzv1TCkR5XHnG39FonK5m8X3qQEj2ks1My38XXGSoWeck2JM2t5pQtn4KBXHTUqFYR9VXfrwn2M",
  "key19": "yGwy7MfV1ER8qU2KaFgvYkhkwNWNM3n2nqjd5N5ffUZjyg1EWZhMtKSeJd2kNThVNPPYxvgHb5v1vLYEK84ZCuv",
  "key20": "49ebicnjY7SGWJrnumj87JK52cAvLULaoPrvD3oirr7YHnKSDeWtHUuRQ3daWQeCfvbazbiwww5ifYZWSe8oPYX",
  "key21": "4TcU7Avuo1UqmbYi7kzV5dXq8wg3VacZzdyjsrYY42xxrbh8t7jRM9wk7XthgAgqUsnhyR2VpwVVCFhDbpsSwoWf",
  "key22": "dm37mrsLboknk3jSPV32PzcPYiAqLkAu9fyTSNTDTk261dNWBAozw8ce8HctqXDvaGBj8bP7sSJHscm3iLMMbAk",
  "key23": "aQY38GkrdhQ4wiHC7i8E5cctYBkRTw2svcBtHbuEHFhoBwY42oYJfn4tyLzHnV7CqSJ3ys2NJ3g2kjjY9BT8HdM",
  "key24": "46jC4ivw6fxJRGUGKY3vNL1cRhd6dr9py3XGbBgk5XeEPZmoAfpi7hCY6hjk9ZyipsqXVq9epnxMvfVjPU9i4VPn",
  "key25": "3xrPmtoXuaZSqWbUAwLLCPzqJSDWNyKaWYAo5YoFpkdKRcxuGKeFKTgTWVqYwkKDZK2mfX1avR7Lri1gzCvM4iZz",
  "key26": "GZvghn9XRLbSUFYBRXFb4Cr6d4AQPUydKVdtBXXZNJ3ND3EDcf88pKUc1jSRGA198mbV9HAb8w4Jv2TMHPnkhrN",
  "key27": "3JwvSzhHBsGgi9tDfdp8N2fp8xB8DsH6ZXLQtVjCWAiqPxjggYUmWdAAowTYGoiLd3d4qB3YqwDVW6hn9g3VNp5K"
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
