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
    "4219r1j1xLzw22YUeXD1D34Y8rtQvZKfPD3ngYrxiSQBrxaNkdKjM56SVRk3ow39kEzSP2cuMwzadWHuXj6d7Mi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vEMBxt1fzxEB9VP42mqGEKBBbLNnTVqbMhtV6zpoVmPBgezF6ewBdiR1agevkwTrndMrRRP2NKzihbFBjqdTikX",
  "key1": "35P7xHAVu9gMTKM6w3wPB95SY1rVaWbxGpN9D1drn58feyVhbAtKeRKrQ9EX4x1h9ZtsAEhZH4kQSwF3GkRbVCVF",
  "key2": "V8B7WnKCb8sTdrHVH1B4tCyytNfhYio5wEVdu419AqwQxjobmBdJ4hTTrx54kXmvx9T8LrBeGbD2u9UuoLja2M4",
  "key3": "4QAfYH9uPK9kqqhaMoF95bdpUwsH4fezEut7f5EVTsZYRrQ35AtVevBa76mqUgeoQ7SuZpsgd5hEsRHZeN4s9RFY",
  "key4": "2wTexvBk1hxS1yHW7xSDcnYYqDyTScLCua1C6UJhMrN1aVpnzfDsq1NrdzPU7DB26DceuRSfk1zPpHTACj9QLnV4",
  "key5": "4XSL48DXzXevT5ViGrJQWRjURXX5UtX17sfLq9yMeAi5BDTheZSpFaw3nbA4EVMuTAp8VSRJLvsfikz8b5BufdSq",
  "key6": "4QyuXh2x11dw5c3B178tvU276stT6Zcqyn6wt3KG61d6bwfGwBLo2BMdHw2dZCfD9zu2ss1kzMTuwPysxUT6XGhz",
  "key7": "56wBeyM9KHNm6aZxnjLUPWa8x1DtGRC8oiLwAQ3jpThS5CPfNj3n3dEXnevofxTGkcdBK2BtsBZ6maEja8Tny6Sg",
  "key8": "3LK2d8gUvxHdUnK4dDHBW2NsJ1TTBbXjKcwMtTQTt6wsogxn3UvTAARYrYbMRWEHyr9Ct7YqfLw7WdHTCPSMq7zC",
  "key9": "3gbLmGMXRafav3Cjs6ixwFcf9haRDFNnsQs2ACWXqatE7UUjrjEKtXUnPLnjSwZxFiiN9JfHBPbC5sCtDXCca82A",
  "key10": "2ufSAeYtx4id6k825gtY5zvuXYZgqeTMXsfNjnPQ4GBxXY9kYB6NNNbTjQBPwtmYuEnRxUJdUWym1dpEvL6Pccfh",
  "key11": "5kmc9CBUAwJV9tqU7mntx9tZmYbRbewHg4iAyHJo487CiK3j33AFZDW2U8EJ4jzL7eUhhXWt8MDaA3vH16MY16nQ",
  "key12": "3zsKQPA3KJrbAJZK3p33koSTji5w5zcqeV8HMbrCqbz11vRkgWH21nVbjtydYpX5uXXhtdseVb8dAPJi6VGg7cSH",
  "key13": "2nXjb8VEAVDZmc71ioTUKCYFRvcFr7gUJyYDVmLW2cvg1mHSY14zJG32sBegmTndq6c3agNzebMgFUUscHypKU81",
  "key14": "5qgyV8gqmMiTPzPf4B51iPee5hFyxao1iZekWri4LYi1zBngkqnF3zMdvgJ3Ge1dwPggsNqtxbDVreANNfJL2XcQ",
  "key15": "67pYY5BdauSrpPEqiNKC1RyX3ukM1TFiDgJUsmC6iTFojPMJiWNA2rdGQCXBMKE6EsyB7MNYtxg638aYCtR3vMrR",
  "key16": "yC2rsdZJjxjfWt1gsfeaTMGK3u1PpJ5WpmhqYgqSYXe7XQ2g6QSWKUNNzoWndjhs1NGFSQUwbXpRzmBYARNmcuR",
  "key17": "58EtQzWEYxrBU8s8xqLu7neZVuhkVduYFS5uPe3xURYuC8QGrZtjWHKoPrTAp5Wn3URmhg5XKAN1toXqCECHSe7q",
  "key18": "5gbEjWDEhJLHeq7T4K5rVeRb1SctuAPNBbLFcE8WRD9DnTeL8FxjLqHNNeKsemuWR5zxNYZHbPrtiHcp5xHckcX",
  "key19": "5yxxA3othHhFDcKb1iJkzR1WcPUuLovYb8LRy5g4gC2bNzgFyedh1ywAAkaMHJjujjeAx1CScRReBuGfT6hXWLd1",
  "key20": "4gte2yBStP1cGNJnEjJUqvscQs4dvoiKt6cn3D8nJDDDBMgaAWACSbq84nNsGnLvYzKRJnqftFudYvijCwKRrCZw",
  "key21": "3xyvA8qten4rSb8faVNJbLSarKnykEnMU43BLYm7ew1VJXzcAQw1QfLnMYeJVqYWqdXdkqAF3wTjEbMiyZJJVj6R",
  "key22": "JemXTozRcfUnVjRH4oN6opkGBTyjZcGn1pcox3R67QYCqgH2fAnnQxeVbwTJ5jJ47pX2PqfLwAWzDLtz62Q9etc",
  "key23": "28Y8bQ7bbeFSEoGMTC5Ea6MUca2MhbFyPhnFrfhUV6oEFD1apvpcpXFjM4AnUjEEqJ3qSMgAKUqeQrCUz1MFqDai",
  "key24": "GJ34d8T4X3DDi6ko4PZEwKFfaXQdk21bETxTnzcsMaGishvDN41gXo2amMTfqEsunMLxNomkeDEiEhmYbWPxSBW",
  "key25": "38sAf17Pz8WuSGnAfKhuC6iTYe5au3vTyP5UuDKmhTF9epBiSzxc2UKow4ADUXsVjitNFNttPmAYvdWzUr3K7WCD",
  "key26": "3hp8kBgeU7jfZH9MMN2UFh5Mfp84RGwVGWvLWLwzcvREVfXSzZuKiNNfTgzQQ2brRj5hNy8GeeQr7B5jiTyoZ4rj",
  "key27": "bCypca6kbBmFX3nPXF97ZB5fvhT9Evqhpo7cfybWNfnhcFBqjGnXKJmFZKRdhMcaLLVDyJfh4goCm419mTgPzwg",
  "key28": "2DHC4ENY7U3ibE1edS4mrVEm6484HquBHa6rXGvyjuzsYRDeZ41SwFzx2HTfjG7yS4zGj3rDUmTgNA3JQUQfah7f",
  "key29": "3sYPNBt7oEqYiqZQBjcJh4e5uQwEUNbU43hurt6pyBp8RmqatmdUtbRrqxAe56RXVNTxKCxxRdqFmJVy2miVd2XZ",
  "key30": "m7PbreL6CvZHwakdcjj2jPdX821dX9bh62AYSeR3HLFesFANtBzYQDbcFdNWiWrHDQctpmxYHj7RVBgEjDmBcSQ",
  "key31": "JSW1x4TiHHWE7HNybNXTEMb3G3XSinsA1CQ3ZpcqmiHk2cbAKNnYKgfKTHqar4qWdxKNEzdzdBF1MEZBWfi9ajk",
  "key32": "3J3iwWrhV58uC7RxNwigJ4W2GNnxVvburVF8EVdfSGoT1PRQskHRCvnLmch8NjhVdHhUCoLtDbfucSSpCciqjcFU",
  "key33": "XC7mPChGEPdebmRp8d1RsjbxuDdZUB5xEyz4BuxzAGLNfb5DkEwLuhAQRWz7FQZEmrW378t3egztGFPFQWBArYA",
  "key34": "3UnktcozxaNkwD78ZyGVK7JH3qtE4vyjvCXS4LTHWj9bg2FH9AH566fPPuAyinGDKMK7hZVXxWkh5a11e2X94oLo",
  "key35": "2x2pe3eGHBUw2yXwsFcQwxmwunhVgW4Cuafmy6W4HUJFbBD2Sr5srVKMuZSNZ8jUpbTZCYkT2FtVVuJkrTM5MWU7",
  "key36": "3PfPsyyGjRhsnTgXhnDNShxVwWTFy2BnkwMJvQEJePaH3VZ95EeJivKbKz6L6KoGZuP2J5ikafpG8d4g9MbXqzKC",
  "key37": "56XJBFwjtEzt7XDjrhWDpFAj125PanRDyyLbLNTYqWyNDt1uuKAsBwjRraiSoMsxR622txfAmYpuy2KGY4hsbUFf",
  "key38": "2cfuQS4hg31m7rttRXCU7VxMyViGK5vSx1Sds7yKeu2tjR1Yq9UcGvAqFWQGMPm7PVVumxUiwZYkzM7ncTxh9AAx",
  "key39": "RHZn4r5gq21eQbDCLUD7otRUkfaqtUGHfnXUnjqyYroVKPbRjhWJMgMDF4JHMW7ZypTABgwUkjmUa9yJQNPSrJa",
  "key40": "3gsYyDGQ6FnRFfkNCqpaPMKeWUQEg8SUr991ZG4sw2nkoMDC5Nnzgz9eb1AGAtnbc5zSqzeZwqT285Cra1ySsDYo",
  "key41": "2MSN6UvRSTtCNskwv9ee2ph5CCKZS9NmVGUMrktYuqhjkJeaBZkPvFeVLMzRdyqhbc9iF3pGHZRhdX9eAaxHywpM",
  "key42": "2TpT1Mugz1dnnDmwWqbFmfpZDdqB3SxhMVNdVJT2d8kFR749Br2pXm3cRTNdVxQjPL28WTGb1cgnuWHy8Be8tqhK",
  "key43": "2pdcfjDcAF3ZbvB3TH9LL2sEw7Qnebe6uMUAJhBvUaj9UCAcDe64o6ynwic2ifoyB7cRPDdUmfqoBkxtuFzM1X4j",
  "key44": "61DWNutTFcoeMn5uuxYJSsPLfuw7jxSmrGKPzLsUZdnTYcSviAjHWG3w1RSL9DKtCY98NVcVCY8HUFDkc3doFowR",
  "key45": "257QnotP5sHaRLgUu9CS4BC6wSnfg1uywGahvcD2fZPggUBCpeymrQXHu3DSZHaj7V8oRrc7emMM9VgyTMbJkzJG",
  "key46": "LTZCQ8oyjU5dnUjVZfBHropHmdyJz8HwbkLC48S8DHiHqAxLqAnvZ39AzWSzhhRF8sx3hVHAGiMBUdNwXupXGAV",
  "key47": "4oADpeDFggqHwuNmCFdZJFmMpD7WEAZdRP5HsZtFtiENy4pkrXJb3ZtTiKFiinbroAP9pYrGtUk5Ya9q58qAFjwo"
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
