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
    "21DjV6umftia6boiakFuzimYQQ8ZzkYZkV2g8SRYBZE1yCmXT85z9gvNos1c5ScCGVqejVGiNfRCQdTBk9WbvEK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fzAgbrnG5RpBVV3Wurq5AgodNb7Skpq1na3FGdGystnVzSCi65r5CQBHzNbxmHrUJDjmkEfegQjQ7jkC9QYBG6M",
  "key1": "2ZNFB5bNzcozaPCUmfH7cJKRKes2McbtsgAyFw1dnvqgq722dxLJy2qaj4bJpqVrgNCnzw8TCmzSbPC6duXzywL3",
  "key2": "2y6qhFTARGe8Vh4tW9bRQ6B7HFY5r8EgiY2vFBGuHtXpsTHYr2XQwBk4yHj9wk2cH7rcQfopmQgAxWVXmczdBngc",
  "key3": "61dZvyCybvLUjjG1iQSaYk8Cnpk7UAjLn5r2M2mrjsqCrqznEoDhj3vsbiETCQGeWmXCAjTioYqhnJ22M8dDNaeX",
  "key4": "a5CzPnaNnxVg67SRcCzanLsY5kRnKkM4YrTFDjdUVw7zTMhVU1btWu6h5qXE9izv2swomsMTauws8DdVFn6XrcA",
  "key5": "4k7YUtXD5RXcsi5GyRz6vbjHxtpSvaTCZ9tW7tGrPjwjxR3DBTuFqbPNZKvPup6ko8ZcHTQy5sqS9BhXbPKB6jJJ",
  "key6": "3yCimS8VXJYaGz5UFXydF27NPgbQKva22MX3zgxemg3UTHdAgtLcFFwtWsoCVMhUmgVT4jN5Qve9VHVCu9AMaHUv",
  "key7": "4LcgMFo1UggJivYCUNuG4i6j5bXWiKN8D3jbeXusASjdF6gHWo5WpCvCFgZrjSgLrUfvR5SNcmBwrskGbB5zJdxa",
  "key8": "jfvA6NTXhDu5Y37qy6Mf8aX2Jonb6zxDNH6xHM3AvtKAEwBJwHNVq91z22wEbDVK9zGoPk5eixDTjKsRbpWXu3v",
  "key9": "4Vr2T1bMsJDysYqcoV22a8xoEBK8ij2jgR8JQ27QnCkifNU6WWuWdKrUirZiUtbiWdQksWMu4hNAeHH79tb65fd3",
  "key10": "3Zc6uY5BXbTDRGkmfhYDPBMQFd7GerwXhmz7S7j8rgc1ZKH24Y6rBUci3qCqsXg6ATxUENN4h6NwhC7PeCKabod8",
  "key11": "2YjY4eTwYR24GBkqtYFgjUrhKX7whZpRVAadcLa6rUGEkS29QJ3jMREawv1pZFtkofszUWRwZ79cMJPhFbNb4zA",
  "key12": "2EwGs7gZWupraqw7ZiHXgVdZzq1QiUa9CbGhDXiD2CyJDK3fLJW1B47BXwFn6SywoZK6VDFjK9YePrW8vrp6MWrC",
  "key13": "2QXdema2HXDtkjnRJnB87GxnbDQpLHQGWFM1nPCj3SJ4eGbaCY9PGPpskK9UuPZoSksJMSC8FaZSj6AToKBdoPah",
  "key14": "5EUz3EPxoXHDSQUVyx73dhJtXJFjGL2ozDwZtY8fU4p6quXfW4ev15bPh7VuSG6mCHdaW5SPnRhoYrbT4cvm6AKJ",
  "key15": "5dGNFcn5BQ5Lq9GcC3jHL6TcsKSeC1Z1P6Xmrsa9FaXLGMyCdTNScvamgSFzwzLnMTVHNz2KdNyuofTxhDw5nWhB",
  "key16": "4gck1N1P1xQogpqo1NocZSkSTXmaKUDboM7LQATvTVuTFA5VS1kCDKp52ixJJfuH17Bg2idTibF7EAPgpRF4NhoB",
  "key17": "ALqL1wBx8BPoEwg8twsud8kNinBCmqZYfuugXwLsDfWVJQRFEatoXXfUnHNmAfcWSZ9aJZaWFFGZ48i2VUw5Nc4",
  "key18": "21vv7hUPKLPL1aEoc6URQ8StFcaTRLFRdpKExzTcT2CHgneDyJvN8kh1abBxH7fxS3ZBPV8By8oHVqZm8AVzrD6a",
  "key19": "nqDNhDKoRY33NeBJUwRehtc5SJEF2JTxf8RinHoLwt4aiCnKApx7G6nZGqfQBDzEShXRrdsfJh4Kp7yp9ooZUq1",
  "key20": "2njAnUKgwHpn7XehbC634TiVcjSL8ZQ5o8AQr8KSWs8cH44X77gV1WFp66ZWNFcL2AeSvYn5r57vCXGfG9L2u6vp",
  "key21": "5gBHH5HibzEL9VEPgH7PBRR4daB6vJaLRNn1GtMcU5fvoYhooGkcJWYHuWHzvwNVW7d5BpNrGhSwPiVAvFKXNfmn",
  "key22": "3TPoou2RZtpm9zai3k9gPjJtVKfPG6hC5kC6iHJNFT3urGp4KmpQsZCAQR5JNLyngtWQFS2xAoKSHV7skHV2XE6H",
  "key23": "2dn4ewjvhybgS7SP5ne258c2NwYpAGwoMp4TVWHjksSmjz6C3e33JjYpxDs9BGCYX491hzXpKfSgwojhpTND3Um4",
  "key24": "8wXvUQTxGgjFj1HHvWiVERTSanvKmHzHLLX2BHG6mei7w6iuTxaUwqh48toseRt15Bcj4P8rsizycLjphftwSx8",
  "key25": "2xrGZFAwsXV6kYSH77T8wZE835YyQVt6tQXMxNhp7PSKTzQM4PugsgrfxL86sptJEtpTnW9rW2Bse24TSewGn8vk",
  "key26": "3FGKrjARKXs3Nw7jvbvoFUZyHAdhUmy5iqyjM2TwNpTYKm1nEQjS3Aky2YcUYmHtkG65dMrULLJZZupVU7qNVQMC",
  "key27": "4KZUBvdtLPuStLRD3CeTGXwbiCTYT7kbEfBPkjR6F8CJtaSAaDg1azS1TpLKqV6KbPCAGzU32vao1fbuBEjjMQDJ",
  "key28": "5uJX6PjupSVMqfcKPLfbb5LRm6ZxXJipbVJ9z4jmakNU9j1YRhjeMCbPm9xmJHD3KCiMdkTjMoagpTLvyv5vV9CF",
  "key29": "4Upe4BtCxojaC7C8thivkgLTuG4wC4kepHVFmMD8hRtNsJw5qwCFjTo6BDWBm2W62S44Nv8QgfLxRYq3GrXaNC4o",
  "key30": "575hEe5mnzjBzRHPGxRVwWRTM9AWrfHJzMZ5szkqxX9Y5nWMsGwjL7HMVDabwET7U4MmTkaQLz6J8BAEXwWPSwEZ",
  "key31": "2gBkiY2LWUNkRbjrc5z5z7XzEzwDQn4mh9KBa8mjtxBBkAcHLiyKMjc7LHuXa23BhXBN56hpqf89ifhxqyXmGePk",
  "key32": "5Hm9DApBYZKqLTHTnmyhZoz1ji6vJWfQCX5wLup4mK16Vd3Gv4vWAYcKbTH1U6Xv9GjJwDDeZWqGyB4so1aiC8uN",
  "key33": "2nViDt6QwVqs1MfQCd3GDWo3RZZGCxRGGtNXPFBS5FdnPyE8ZV19V91BEGiFLeoG4cSXpXhTnLCxgARqN6LGjMyK",
  "key34": "3ybtLLe4LtghFnSi8QfuiN4XhMt1e4dCT2tsMMBkVMpXiXtf54eorTHP1fvf96miDWNj7krXTMjLdNAgYanjqQBN",
  "key35": "3WY63niFX2ftYrwQ9ATh9K6JbrTDydwXXypTE48edWCZWEzvsGZRtXmuNeDG1EfBiPYG16EjfQ2qzsaBHiRAXdtw",
  "key36": "2hRCR8FK55KRBvKHgc2versJgXVqKezHLa8KKAGyVhysoGLxv9AUq32PshB8BNHH2ArWhknMtSUSVjRFN5DNeEv4",
  "key37": "54EVP1yhZELGv8yeyhi3Cirh6XDbjbLg2uPV4BQz2hHuedvCYriBqaxkLXHCToKk5ysu2juRFeQhZ5P9MVNA8enj",
  "key38": "2Qk6aw64tTPQWoiTmM6GFvAmt4sircXJjYd5HrEhDBfrTCt5SqsQk4wberY18QJmVAB4y7tag3gDkVuZfZhHasap",
  "key39": "2Z6Uze6eyiKJ2D6xEMix5ACcLpSiR5RRe7ErBFZAUymzkufKUEtkid7LAeU7hyRbaLtmFpANijkqnuPsK9Q7ViuH",
  "key40": "2yfoSg7MipuwZpkbeJtdBd6sG83mztcuFDpg3f27LcDAL77Xx6d1bhAovSDXfQHKSrXSdEqAfpH3bgLoYeyNWz4n",
  "key41": "4WHa5xvPrJtEcutYRg5yWRJ3X9Rwahv3ZS55P11nhgoGPhoJjRWEUfg4spyH3LmsKAVaRvgfMow35xigF3t8SztL",
  "key42": "2ajqyJqqFbcw7KcYUajcnCwdLxNUQHNMGetU9m5wdB8yygs4Qj93oBZiBGmFxzt9shTzpogcv7DM1DB1afMvMAh",
  "key43": "s1xU3jevZfa1rmTBUGNvATug89wWuMoNEeoftPGuqBtcyBCx7Rq8MXsF5mZoFZnZivQurgCpqMka9G19kFNTKk9"
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
