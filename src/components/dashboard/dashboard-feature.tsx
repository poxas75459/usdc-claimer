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
    "3p7w9tL1BCyk3kcLcU5nKnJzJ2dHXjNJjbtMh6aZviWuJBFpwmM7N1QUUF2u7dhkjafLyXyc9KSxSom6qkvoxGZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5km9rxG5fCjmhhwfw1rxmc45WehG9N6odXF8zKaUCrD5d9G19hqtHE3HD24E6m4BuUmyhnHqC1xmmyWzdVdmjVqR",
  "key1": "2Lx2iTnyFBx4wp6oupDj7nP4j1XwD3CNeZZfKFpE11w7Udy7wBkVE1ZAiD8qHxjCJ5jofGHjJ4k1XA5DyXQTKD6z",
  "key2": "qTpQTA3Pm1btEdN9xHgU8zFgk4idXPFntwzmum1nni7352SN8Lzknf6NAu4FpChQuwmkvB48oqh77QZFPBCBkGY",
  "key3": "4oMxR5DXUfEaQwPdq7SQqw5yhh71jrjwXeKT7c1pTiXKH4kqzhPxubpq9njvkdNRfS8zuaVApE9XFoFB3CLbjr5V",
  "key4": "58vMvQFRFb7ZG7ZJvUPmzqEdEhsLbb18Ee7LhbvVpeYybZ8HoAJbLh36SiLjumayMdcY6aTyv8uf7rRyZciFek9r",
  "key5": "37oUfRCjvNMY6p2sfj29x1MTGChJAtmTohE1ttkkhX9MwHMy1yZCvkZTwJnqPmPb1aBQeBioXzcNF2vcD1LRqjUc",
  "key6": "4ueS2r45DPFEWGpcFRNXiuPvWeQtLbmzG5maMoNQybpqh6HjaBx4kpAvRE3UbvgfTZZeStUjF6LXNnTfr7MgMxmq",
  "key7": "hhXMJ9mPX5uU9XN8MczVT89dSbcDPRvYyvwhab7CbN91UtenDUTUHAQyCqDjNhbq3eGxGFvuNDBriXPB1htXSwC",
  "key8": "29UKmHof4fJa8GFdXkKP6pQg3PMxgm98VPvDDUgy9qM4XJkt6sLrqCaFa1w8pHpGjfUQHWkN3hUkRomSTzf7VCdH",
  "key9": "3aHeaRJMS8RehvReSknaHZEDsfta6DR31hCRCxxxZQAkhBDXvEbV59CoqK8gZxiAJFVbMGUBYFxfQPL9j2CzDaDU",
  "key10": "kw4JnGH3vZFoEJhwynevNC6CzYdLVg4Rk1yRNEBoHaLaDb993oRuZCMDYPVJoKQzbVnSopXWFBP66tXg2mXrLid",
  "key11": "2tVR3bsvUvnruzFs7d8R4XkE2N2NG1M3EYZ9wVg16FXh5TKVUZgQxmUEaKHRJTry2QUwUqp2jp3r1uVg9yekGHWo",
  "key12": "4LZNsFwy8YLJRzE7hSF1fG83R4EVDMVhHHkdoBiLapcFqp6ZwrZUTcX4Eqq3v6rEPmspfrjY7C2gkgyK7CHCFVf8",
  "key13": "mU5E5Tr543xVvpL3QoL8Bwhv9GyiExB8R3aKYTZLDRuBtCr2Kj9tBtm4oweQU38aHXmRYoYxD85tPNzvxahYne8",
  "key14": "4HJznfLXfsUWeoCABLazb57S3UmDWDgTftszk7Doa27jxfwAHj3qvqgNNrNShTYXintA5LyLNn8NNUHJcDhUxHDS",
  "key15": "38cyi5BJtS6UWhWEGVp4VUg84tGNux9AMAC5Lgz1NmnD1dcYmymw5GP8h95pkq557YUBmyx87M96CjiEWg56qCuH",
  "key16": "59F3yure5veRGR4y22U1U9NUwc1UPzaKGXFRr7ovnHgFWjexKAG9HkxgNxpJxzdLZGjco3iDNBRMSKDzVwCJT9X9",
  "key17": "4Yup8RxwVDvpyo2hLaFxoiubmYQCU3qthMdyVFZvD1sotgvmLduCNFR2KZ9CapnuYGqjUgXZLNFN5h9os84CJSDX",
  "key18": "XFauiLpvejqJyxG5PMK6mWm9mywiH1depiesRLegkCfqijSHA5oqeGFmvbhdotwRgZ3BkJ4yFWFSf2zy8yn4mam",
  "key19": "RXgEUUgNwJAKWv4QUBfJyMwyE2cSDGmkfjrFKBAwW1P8gFLepAQfrC2LUNfCTmrd3ohgaBktLHcsfqL81JPVLrK",
  "key20": "5iQbkg6AyFDC43isvjQVetEjAWsRzrejXxCrbdUb2xKpuSB8HYL58PTeAqweHAzbGULn9aMeApeLBnSUU8APquHf",
  "key21": "5spoHDjEe3UBqJPYCRr8SZhfNN4rLAifA873BZDiyFokU6jvP2eHqJTp6M31uL5SRfUa9tmExmuQGoBpypaYuCAr",
  "key22": "3aEdhpg9fS1tHQpwhAgJ8moaVvPDeQS1sft6XmnjsmkFRkEQ1sazL1Jux33hixpeaEXyjfGdmE6n2duQfh8uvYku",
  "key23": "bg4ysJGfhv3FgEsmTCHLLfeb46UJpAE96kSSRzRFubtMr7bNGe2LK5Zuz6dCkt8CWgJFYpfAYXQbTBunsrf2yyZ",
  "key24": "5PZPn3yPjSvSo5r3r8uEtCHbE3JCfuTiv8EJCe5ep658JdNXfXr3XETZ9y1FFGkvDoE8nbr2ZGCX2xnf2QbuFj9U",
  "key25": "k6TL3F9VWwBuBate1yGK9s3EfYQjjwVQJjApQm2MDX4Hi4VEQVSQWqR2vXadmeVRuYSAazEZvxqJf7RD9W3HV7K",
  "key26": "5Fh8DCT3QAXbd7YG9KcwKHo5gZhkyaXzYb26SAN2mT6V5vEwHdQLkhY89YFWxQ99Mi4zHfW95oLGeNbawf8ZXZ5B",
  "key27": "mixAqVrVupkrQQz5XW3vvqWvKQ7RHwx8ggUM2YGWGzc3RhmBdJghfAAeTiAqdrtimNWQmHW2WWrLbe3vURGsGpK",
  "key28": "5qVottBBDuAst9dRmCt1XNtjbhyDZZUkgnSjm2EjeqGYk4fPzfUtJdBw7xzz5dSgYBUrEym2QFcqrrJhiwcVgL7F",
  "key29": "2kKNWLfSHWbLueqWNX3RQsKRaQwYGv5BJENSDBh9qkUXVgTHGkEMQgBdf2VG7f2YBFkJsVdQfeiceCqencs3vgQB",
  "key30": "yc11PatWVS2SKSrPwWEidArf7mrSeGM2b5ioE3SZeAACHHphkbs7eBimUy7JTRKV3ywHkzs87nZ8X4eKSHqQEu1",
  "key31": "2NX5TtXttY959xg4tLNQswTnwdQT2DWKn1nGmLRFXCnxraQeCq8EZaum6RxEvhQutmEsBtJAE3DViJFkh6tgq1nG",
  "key32": "gcoaQTooS83WD5V3gDZeio1hTXVPHycDG8P5j4S2SPcsxCf3tjZU6RGwMa98mtNuhkNw8bRkrTZTZzsYu1azib4",
  "key33": "5eUfTuvRMZDcnhTRgAD6LQn32abvWVgezg1nGYssMTpwqxXesndWs3ow8fVRSXxe889UYtqHmSEeWfMmNx7YeByY",
  "key34": "41GfeNnqGCufeh74No73UGUDYjGsw9AxScNkmekC1hnjMZ5r2mApJY3WC9C9BHHK54d6JeTiW2d6F1uU9Ru7uuEN",
  "key35": "2r7eXe3FsRK5nJu3wGCoikPYHEcEEL3x6RhD8AT4BbNiSnZCSxRiYyNVJsk8FexTQ3cN6WDJXTdVTmFMGRgDvWwk",
  "key36": "2vjJv6ZSzRK4JdN8cXnX5cuKnSFm6Qt4qvfHJDMxXovKadgWvjnaodhj2QkXpAqaNt55nvgZXJr2H5PbKo8uXikq"
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
