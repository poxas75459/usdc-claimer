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
    "Hvgzoty4qbZ2aBbq4vZHXHRvNmTP9gzUPFfMm8TQqfm9ANU4Dr2EhVxYwsPNhE2LVuVSmqj4yaiuyNyARkP9Syy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwywwEX9Z94NHE1RFe7YQp5WyD7QGtDJ9qBb1zN2GXSMEw23oZjJ94AxvqYp3HmQcRZdsAQqcYeZQpkG9miVtst",
  "key1": "3oXYLi7E1CNZCSYYtXYGsFcVA7GegaA1j5EyE4qAC3vAbAwv4DCxmGvFJ2e1yJFi5otw7XRdHcMqrS567HoEmhzf",
  "key2": "3JjxEDbaJVLP3WbMjW8HzzZZWu4cF4QWiMYNWaehHVTVsUN6Br9ZtqoWQ4bbRCDpo2pKdx7VLSiTp7v96XeEPrw3",
  "key3": "5aa9YgtnGxntCLiw98x6UzPYCcm3F8UEAHVVtiEbQiE2rWZUNSmW87TiuP3F8YM6xErGr7gdg7oqHVNxtYVfPPf2",
  "key4": "5xj1uUqJNTihsFUxWzVCo7D3sshb6BthB9TjghcFKHtfQgLgRTKA2Jm18uBMXn4pyBN8BPJAhqYQ3KERBL3B3s2t",
  "key5": "49QJskRyTWopoputskXfApewT1WVMvdsuE2X1fQZdbdVJcRjZaSwRdXVVyQUeXMTiFgmnZKipyFafFiecHSK5NvL",
  "key6": "2uX3BWkM3ay1Nt1YHGrB8FVvUfoyHGNaJ8dD51TqhFSrLwvZKVvxffYVvqSmPTQkw19EeVtvC7PeXVfTg7fuvopy",
  "key7": "2T51yE6ceRR4PNt54PEC6bzuZwDRVsAdtQmeN5DA3dEffb25vogyiZcaTrNSgSuS7gV4Pkn8x6zMtE3zVjx6UA7o",
  "key8": "2vftMSAHb1rmPME3ceUJ8DyPhr81qnjzgKuSXrkzjuMoC1xXzCTNTdH1MGTc1sTjzSw57i4V34XJSQ1cN7aL9tds",
  "key9": "4wroGzS1mxQVvfFWMo1SAP5QMfk2RUqGiYgPmoNaSuxLKc1iFngZucbZTk27hCXu6dYsvh2Sk93ejLLhAwNDR4CW",
  "key10": "xVxwdftnwicPyFtg5iEwJWPgYJ9HGCYECaHMaxti3wvUkViHHU9BZRUA1KZk7qTYBgn1EzAunUbyYme16pQhs7N",
  "key11": "4YAatwhWKgJAf6W71k7VLPBBHuaKGUV6yyYnLfJBWM23rayzbpfwxfQS3rS5GZHzARvBSzYdXvGpAUSMg4MXPAyp",
  "key12": "zNbW4gXmkb7iDqTA4vxGnre4RCMZJzBsmrKXDAFWrUyaxcQYXYEuueMvwxGiLMa2g2dWx9J4GsvCyQJPR24Z8L2",
  "key13": "461ayVPvoQp2c1VmqmQFNEk8uvF8uk9SNNLYcZziAEiNV3e7VmDkMqE7NmXVDmFA7GuTdRjLAPueXyGy1N41UoG6",
  "key14": "52Udxv2MqjB8ARiYR8Xa7gobXfX9hAKXVupukVMpt8F8oZTRskptwChobkuKcJYYUmHSLNYaDfwUnZztrGQyhpHT",
  "key15": "4jEDv6auSQvWdtdUq2ZjFMXmqGducwPXJ9BWndEfAiDLpYB5cF8dZoPdpVxWEfksje2XEhmuoJg6dY9yyYfH1QCU",
  "key16": "drJNG6LdGHQBRRf3tv8qSYxR2cQEpr6F5zA6C64mFmPcrFV6qLd2hdX24APVct1vy7dgM3AHrTmSdeWgCXcmdYw",
  "key17": "4itFALihgkpQYAdYTamKipUD9vhcx1s1rQXojpoR2eDq6Yjv2acX4jTvzk6DLkWKR4KRitGJv4hCPYc4jnRzaVgy",
  "key18": "2nmVExcMsmACasSiy8k5Dy5hLavr79eQ69KJrtxLmx9EYyepknjU3RFFWQ6ajNzyCe18iHwZnu2sqN1gp8C6oge9",
  "key19": "4axz3dYXTsYoKYD3sNGZhKRihfViVcaBohmwSkkLKLa4VACsG8UnQFuF94nT7qX86o6ZTZDCHEDTLF2HeyLCDYjH",
  "key20": "9tPz5nS7iwLg8Pnp5uu8TgBf5XZGfKgKeN6QqBRnWJPCHNh7795G3A7dzS5x2mTBCxjEVC2pUwYc25U1t5BgXpz",
  "key21": "5F3RkhTfKFfJseQYxkQk48eB6t8bPZ6rbfPwPnvyN7hxBtrarM3iN7t1kwjbdPaGi1ZzT9291Eepdugi5wdU6HXA",
  "key22": "2TdxUnt9zBiibesVcSXz2QTdC4daxBUeKjQXqVhFFcqznQKVH1CRsKUknYaotmGES65GqDd3Fz1NKpmvmXT7NzV5",
  "key23": "39SUs9K2SgVEVsfidSnmYdshpqdp4NpCidt5mG2jsPgmVAPw6nfQ1p1kXZMCMk3AycU5EgddJzomBAEkHjq1PUWt",
  "key24": "52be87GwUcNY2WUMWr25q9XAXtcsQn5pARHmMTRymCoHk26TTWwYboywKdoQzBes6NTVD2f7uYwHgwJVFwkfK4rc",
  "key25": "pZfzq4292YyJCG1QNm3DeFCe826VucvrDubWM1ALQKKBUvVsSzmPp1BSmyWdosMiRApCm7bdyHqStiJNF4tbFQa",
  "key26": "3Z1wNQbTEMxVKFMFY3WAUmLRPYUKs3Ftv12mk8sTyscy9TENiDzq1MsuedQ8utHWwfhT24hrug7wRaCBq2yJtNyK",
  "key27": "5c5nZNeBQRZjXEjbkHBouoZ6Bmp1hoELgWZmbdvRDNNwACsTGwXTNH9KP52rPqc4QTNxafX6vHGfu7aNRnfhbzD1",
  "key28": "5xqqZ5KSmGXFRf9d4smcASEsKVjxXupYZL1cxeTz1wRHgKhWWSDikM6NQRTeTpZ3wyzGwXFHKu753VmwMyFSC84Z",
  "key29": "55GgiCHtwQBZAJbtTHxdz5pkSK4w8xaFBUiZg6Aj6dGw1rwSLYuy3k2esuK1BmtdhAmxepvmsNqiCbPckQ24KQME"
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
