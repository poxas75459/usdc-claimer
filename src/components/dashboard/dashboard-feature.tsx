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
    "5yUZSmaLEFX3138Xm8P9tbRa928gZnnxPvaiXXQHgM4fe5MjHg2i6kvgjtKM7zUynNpMCmoutLoUbGeKbFFzApm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f67FS1tUyFa9aTYAzvQ5w1FJXbVtorFyKCxD8NMuKQoHLcCrZDyx43y5SYjHZZXqS3yxSPDPHXLcCo2UHhc1BDo",
  "key1": "36tuVmRR18DdN6FVkvfvkTR6vrA4c3TqKuFagcwjweiWCmhCvSFtZK2Enoe3FVTv7SSxS1ZWPcPEDHrVbcZRQLQo",
  "key2": "qJNZ2t6r8YC6g8dyG6dU98V7NJejskva22PPUbMorBPRMb8PwXkCG5miTc3CJt4dciLCD5JR8E5kLTYpDBmbJfH",
  "key3": "5NsDvs81ShvbVhJ97afoc9y7TrsjRCx8VdjSMtCioyuAkyJXFwz2h5SvM5H38u8jKQbsNpqQxBz62oMGaRZsGrnY",
  "key4": "4vhootzb8t9hjRgG6JogTbisVeGaa6tMcE9sgAG4nyFrSiriikAFULBJmMsxKNtVEtYcu1CtVZaPLveTGaCLgHTS",
  "key5": "3EJP4EXhvqvvv3xEbUTyzMY25uSUzMnABd49VrfoGWEUa6n7q5LQu3GHVWZeVJsQVZaitihUXkb1DprjVdnrPCQj",
  "key6": "2yc73Y1ajK2CjfuS8mFksA8tQMZE34qcq2YkjkcBytDDrZ2hVvNwCBXgFSouFdmEsArJyPmoZNZUhkhEtsJ6B378",
  "key7": "5jKfKrXytF883pQRUpYiabbo1wreZWyL8emwhhcrnHcwxKp6Dr4K3FVLHqwdBh6ivPKgZG8uMefuEfkyWyTLE4o9",
  "key8": "ag2Q8Y3a6pJcp1Ye4wukrMgtqaMCuwS83YfTxCwqJxbnArnhpMTnEqJ2Ze8RPHGZC5e1rrzGg3vshTG6DuZMAuR",
  "key9": "kY9xM4fpgGP6tUYuvJAw16hcMpotELfDjnnDLZSjuVxN7EW7T1F3G5yAiaa96jNJEmZeV2DFxo6vJMV7Z33kKdA",
  "key10": "3DNfT7XKRn92vfBYer7CVrbdo5LdKzQzzBmxoscbdsgbN5oC3SoVxs6GENGrTcDvhWukoJTdsLgDdCXE82sxw24F",
  "key11": "3V3wZouZWnSSNyUhUvVauGsFFLDt91qRpTgrsiRgwX2fi9N3Q8e1YmKATwiotr7gxr5brPFeah2wdTDujhnRN8QW",
  "key12": "33XAX4Nmg4RuPMx3kmHke4Br5rPLfo1jBS972j2YB3N1AFnDqM19t8xD6Zen3sRq6QXc3MRr3rFFW7TxsDAnv9hu",
  "key13": "2n5i4PdNvLR9BzjqGBrGE9rKu19bWELtiDyGgQ9hnQNAXTaa7bp7Jgbdyp3ehJ1RPZ4P8YAsZZfzUAt92MqP5CjA",
  "key14": "2Gcp1mLSmeNWahAotWtX3qrB3RwTUaZb8MDM51McQZPi74Wf7KdjxsEiUk3jsJz1JcZhckDo98iCnoqosRMahQwU",
  "key15": "3iHzXUxg2fabb44KALqbs9wJFLW2vUX1Va6ZWySDvJxvw9Q9FGdfxDDDUNktCAVQY3xoKxi7CW6DGN9PV5wk8Vwj",
  "key16": "4HrPSwxB8gGCBToRueRLUuwHhk9Vwct279PvuuPCqcjyWKQKf9EJT5xQacX4dG9KBnotS63fTWGXwp1GwPx6RdA6",
  "key17": "3E8gH7vESwCGVf2psz2UDs3eE2hJHUPAPzx3XPk7UogUDfu3YeSA8rYc8ysGHQ1yRg5wo3jnuZkj9vsTxXNv4FMT",
  "key18": "QDxe984EAkaVKjH9nKeEYh2QJjtG4LG2yQCwHceKPB2sWQPUZ279UijRSdw1L77z5ddiiWdybbXGTqVtwkw8U7u",
  "key19": "D9CE5pZW2Dnnrg316LpugECFKxu4TFKw7G5EJxX1hj39yKuRv4eytzmBm8vmc9GgrBaWiRKfrNM641uhe5WC3W7",
  "key20": "3bKXJ5eKaHgLXDfEu2jXvD7nfEEz6izT31WgwH6hVW5UzixQAU8hXRkU3c69fy4BNbFqZG43SSj5aL19g25rDzkT",
  "key21": "4pH3uWoGUzuEQxq1ZJCDtVeea9acv3jGfKXHSABDP94g3mKpQCY76VkZYiDNFyXhPe4F23PiwNbd4mBCVTcuHp6e",
  "key22": "5LdvTKytcvBhcG1ESFenxWPCnx6y1FXfUXK9mLWdesPnH2FMwPUeQwV8FZ36sUduqLeTb4bdGhoy1gHDV77zh1Vw",
  "key23": "5ENCAFjxFxFevLXtFY1YAgaZB2ETF1bvh727FpUkYgRqvEbpoJWj1iKrDYbwt8BAAiewy27dW6UphKdaw8TUKGtH",
  "key24": "21pmGsDkXyTcRjyvsJ5oqFHAfHo5RTmfhFYiWk6b59SykTT5Wpb3qRMsSCYWRQjQDST8ataBgcKsqzNxuVYuWyXV",
  "key25": "3BusMHxo4bQoh2tf69KFpLSccNtBoJdWz96FA7LPMznxxwf6xSR9HHssZ4xUsWPTFjtmnfeobCsLjaUVQnwhPuH3",
  "key26": "4BdiyM6VQ6jBgiNEoUFWSv5Pn4czYF8u6RCzApSw6orPkCDsAnHVf1TETZK9bn76ZZqG12zofoFaXWeiNpZNy3hq",
  "key27": "3DqeEPTFQAwDgVy4tT8Weh4pHr2Ae1uJB5GqD5TMf9gkhXmFycT2zX2vPK8ff8ZnyddfLqj6romRHHDESEtR3T2W",
  "key28": "49wtQdKRBbCryi3EfJTphsQ8RkjZHkgH4GMaS2pRsXQimCzLqTxQNKggM2XgQdpMup6e6E1RnQfBeoXDKXvbHk6r",
  "key29": "5E6CXTSSZJvX7YyGh6iLNvKvmueLwSnQx6TZpdCCQ3DVBLxSPXVzeVJPNj2ugNaE4ruCpg1xphixW2vMtgD55GP5",
  "key30": "1hHoGdabt3kBS2iLeTSE2VHVd5b3c4FrGFxuUaSWw7PZAd3nUQNoUsXL1iFH6FMVqTDBNceEzmz2X9FxnFxxZk6",
  "key31": "2sd4LoMMi3qQ3CXMVukaPyCpPpy7PgdjxC1aFHb1fQAgENGcxRonavJai6yeo6CBSPHfAokmaJTKzFaRwzH8f3aE",
  "key32": "2QFTHn5cGZWEN1tyKHLRfgVY626DyGk5ayTSRFN64j7kYd4irUsWTqtzXT5EeyAPePQxvoeeKW4Hcx2zq9oHiDPQ"
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
