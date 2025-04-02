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
    "2JLcMWs3jqpt5TE1P8SDMafVA52nqvtctuiKwJzrUovWcMXGWgPUDaXhRYjSNMNZUqe7dti6wBHcHraifrnKFNug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t85MoDkZ8NqNptswtUMbNnmV6bQeaSdWys7oyGtpqXTZaoy3yjcSnyzGuaCU6UgEmAX5pBXVLjWV8eBRypAoYMw",
  "key1": "4AMhk2Ry6A8czuALjy3nFs1n1GidYHhMviVLmfBDNUGfPgkWREBt1PhXFv3HZXUfguMPHjCeKzf8hYGTiLiqHR8M",
  "key2": "uXBgePFwneNkiyKdTZgp8bsUD6ma4BnZD872UZYS8ndy1qfkgjyQP1zHY9VVUne2CsFtTkLTMXUPmvrS5S7jYJY",
  "key3": "jbBYGE1Hobqtcppz4TFn7asBsirEbq45hMam7K8JeZNy8D62PXzS54zxtHYt8Vyi5KCGo1jvfNhVhr6AmJWhQxH",
  "key4": "5mc4NeQNLDdr5Bn1kk8vB51j5ebYHhr2fNxLXFWqjPyr9swhTFXYHGHVb2hC6YDxuJpaDXNN6xZPsVJNzzRxzyRu",
  "key5": "AiRc1VsmcyncPC3xQJCLysWXqqHXoMwV38iKjUL7QYtPNSBKZAMhM7W541jYF827LtCRvDre3pC6PF4zqoF3TBV",
  "key6": "4XhLfGk5HzJ4CMBWwKTcvWdjQBeBTg6W3ojTSu6tadq4oQGPiBAaVCBFb9fVUdtQRzwbaDfMdFZd2yrgQ48LQWEW",
  "key7": "3zQySarpxQWEpHkB66WB9YbRnVZjaWVcvwKG5tkXkCUkSqxNnsjQtujZoZp4xJeniZpMkEH9AEsD43oAJDxTgt8C",
  "key8": "4hP7Ue67dmi5NzB1XeJSDbgwxDYrjyWa9XAg2YvKvmhpYgbMvve9mUKaGDp26coJrzhaA7EQw4GBdHSPjp8ph1uU",
  "key9": "4k6NeHPhG6L2JEajskJ5J1AU6U6rBrHujXsawBtpggxJ9ZaQJnqjuzvnVK99B9epmeAbtCNJuYUXjznEv3afqUfJ",
  "key10": "4TMDzocY9WAAJv5vXni3yWnFnVwRQ5nUnjQ9gua6REYKCSexTUJMQXF5umSFr5AyxMM4cATa41QornfHpG8TFWKf",
  "key11": "WZLUHKHsB6LXNWtL7qRf83eXmzmuJFJyArbt4BvLyHpLs7QmNdeG8EMATYamhxyu4pDsqHfgtBDfY2i5mxr1EHD",
  "key12": "3jG2RdcHh8GZCuGNPkYU47KJLKgveS5FCctrJBHCqvgAkTP97MHqqS2gSwe6t5Khd58ynNLqZFp4X8QweTk1euxz",
  "key13": "5VsATxKz3homSMqYAftUpZf5q6mktEFJdV5Trz9ECf3eYbWK2H3KXh1rgRpHK5UXWGzLxxAB5Bf6GZYRLVpzbqob",
  "key14": "5TjrvRfm7DzkDjdNVjmqwh8gTftPUUvDksN8wURPCBE1DU3kbgkEKj8ccBQnNTDMZ1FqAdfGEFAs1cUZKEjPDy2R",
  "key15": "5j7jLE4GcEjES7U7Xbny8J2eWbXHUEfrcb5QzpSryWSYRu7PaaP5ABdfXwytP8t41D6uuqbHXu6Y2sZFfhvRUXVB",
  "key16": "YbW6cBcSKpyhZxUhG2QfyTtkD1uZY5TFAHWyjLGGLHAh34XK921pSarA1mBcvxEPh8fv5MvKWnBVU9WF1LLQUvq",
  "key17": "2vniwooupKr3jtu6tAvYWe2zVmLqpQBkCGQjgbS49dBZUENyWTfPWyCA6nyurivgnQBcnKpHkrQkFvxeMVgZgPaP",
  "key18": "3pmzWPKvMSutGhF8x4GMLsV1tLVxCLo15QEVDbE6ppL86ya5UtDZX6iE1JXQrc6gfq3hfepGV9RusK5Gg3KoQDzT",
  "key19": "5oQcYDyWcYpt8jy5WrsAE2YopHUYmeEPqL97Vkc7hKqY5EhqrR4rL9x3Bp1cn1yS6Vf9AKSKe8Hndgsh5DwN7ehC",
  "key20": "2qQr2mB6N1hPxmbx821aCdFTCaLLor4kmXMiLWuo4Ti6NFXTQcS7XCstcaGP3SJYNF8TkRqEgKomvZYznbthq584",
  "key21": "4bQtvGRLGAVy95DHARNZuCnXPN2D5tsFQ4dmKus6qiwCHZv16u95MAsnmqibovRofJLq9ofSfeZ2yuxoUAsnP2j1",
  "key22": "5UAL6B6aofQHw7cTR3Gf26uYWujR88ky4DwV4hoUV327QrXVPnsaUXeDnH89UUWktBFNZasMzLjS4yc1yyjvkSNG",
  "key23": "3jSDEHYeUHLEaN4SsqxeYsCsvB74GcctSf9ofcMJKjvJwt1RdDJphZ5DqLrNFdExYHwBRRyCVZBowKusKpnY3RHF",
  "key24": "3YPXAVS12U4w2berct7cWxMb7a9FVuJNnnetkfPZxxJkS3dt1y7EzA1RWMcGf3VjNULUhQaFQAuY98Z3pJSLgk3R",
  "key25": "2TdnMhq4iyG9bPuoYtLwT4yb7R3KAeQbK4gRjpsxCEGspMpceGccg25g4QP6pJweE6zuA9Ww5K6XEFEbu5pDRcKT",
  "key26": "2BEnGU1xdqLHeuSUZ6pYsLL17FgQt8F6XmWn9yiMpRxnjTgRi1LV3nGToEx1oZB7NeJDvPYsoXNyAUyG9PcKk7M4",
  "key27": "3Z9dpyvKhJNXqUEKGYLCWzdgebAPyg3uJ5iMivUBjWz2ts4XfN4vKMYBKVRxk8t2Zccx5hWcjemwgTXaWc1yYXqc",
  "key28": "24ccRrNYqzbaymqyz4A1BasiPtYXsPkLbnp6etYTmewbPEh8qB1VshteaZwyhhcAJBjQ3cZjBbEqy2QvkdvDKmA4",
  "key29": "3hAFfAgFoKYasSnFiBC6DJdcwdoW8BcsJ67XVf4QXRJuoto3rmcRuGDmgmDuwjzn3y1UH48ik1KLxWo1F33c4vse",
  "key30": "5HbfQFGZLnHjbw7jEcakkMvdAhpF9qx9MAwJo97gy72hbVyjxhuyeRLGBSnx4heSpabUX7GPPd7Jv7g2N5b6opGJ",
  "key31": "5NLoac3rsZ7wmDhPWUh54em6BRsp8V8DohqX3bn2nfS42fu9Te23QN8N3bxQ8AN2HRbqKzDiVqeZBTaKHCYfpsdM",
  "key32": "5bD6oRdasFi3ntq7N3tu8bG5yxswPahzvmTRvPto2yCZmNxeMcThMTjjzGS954UFc5ErXsZY1wWVgo3f1a5gtHkY",
  "key33": "2F4i28x9fnQKmkmSQVJ4uJqiErDGHSbR3A5ViA1kvwTEjRZUonBM4TMUw5Shrk2HyKU6dE9sFUbfyGdbSrwzN3pr",
  "key34": "2DsKU1LmFYhG7XL1vMUCmce3Vesu89Sxxg17oiNz8KoJ2twiMqwPwGC2oY3rjhnY9LG48mDuAeF7oHmeQiE6RqhU",
  "key35": "2KiHoj2mpp9fQaHbFozKNmJ3Ds8yMNSsXNFPwxhmDvhWeTS4mVX7kScxoArEWBRphwy5k1cQnci9Cr9oa7aGbtDa",
  "key36": "2PsC8gCz5iVxkyMSZHDL5fquN22aJR3c1KzpExTtwvCttdofmS5sZgWvLm5NWfT1yS1AKq9AAgRVwM9zzRur1C6W",
  "key37": "PWbsnaXExLfX9kGSsBqrzUgx6EUXEHiSRxDZQq15SRZQpFps33xaL5anKLVaV9ibrJdxYVfYLaQ4xHLwXLo6pku",
  "key38": "2gQRj36VJfoXSYcHBjip8N8HFS9WY288CKaid21TsDZzBs4KKP3z3t3cAZQBnUKuvedkcZVheZdUvDHNTnMqihmU",
  "key39": "3BvGJ3XSo7yHqKuogs2TmiLTQCyXr6ZHVS3j5ffQ1q9sF35rMULbnwsADPnG8YCPBPGP5cVKkJyAnVeo2ffyr5fW",
  "key40": "uNYcepHARMoa2LwY1RLCtpfNC9JRwWVi19snfwRgiNzFbepZeAD1aHdGUe5oKgNYwGzLsc7e37YiMeM6MheZVmm",
  "key41": "2EGbtsXKefP9kmQYBkZK7AF442ffXZ9oRfLFrrW5wBN8asXANDSzK6a4yVJFZZ7DvJhrqpLpZmnMusDR2q5C534t",
  "key42": "5q1BcDwNmoagRGkcART2v1t1Q2zB4FXXABtQ3qFui3r7uUHvtuwjN2og4xpAURLv3LKYBMFYBhHmvCnze5jhB7NL",
  "key43": "5tdS8iMm4ncBzKXmWQwNg1qr95W8tAdMmc8xfrtwQr7LT4xpEHWn8Tpu6YNBCUpD8ZiBsifgiRCtJ8RjEJmDXTsZ",
  "key44": "4zNFSqkYFS2jLKVPEd9vQSDP8tsTaRvrzT6YsLE6BvbA86zGjHGfZyR3Rv8wu43wZkf9tJfHTSRTV5Dwg1mdyz9q",
  "key45": "5GqZURpjMCDdZb9nX1KMZPdxknGo4vc3Q6VNrPDm8BoukuZv5rmxuvKtoAxxgHqfWNSxW5zLrqb7octLZJPPWuML",
  "key46": "mHs74H5ggQf9Vd6mR7LUTFru5LpGEd9L6G6uME3X1XBPvsG8WQ1srSMBwkfVPAS6jesLYJ1AHkfS94y3drgVbH9",
  "key47": "4hatnuCWxmPs5USj5HihMBMRSeRYcAGszXGbQrAsNZxQ4LX9AUfo9QeeuRhpt9fauLxJdN2TM2jPwiWEokqhB78o"
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
