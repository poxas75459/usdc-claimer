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
    "5quT52r4vB5nGA1o44h3dQfaUUzQn55adC5yHZYNGebazmcgrj1RoaHcE4kzBM62GzmrJ32eHET2f64eU7nJfC5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9p4iN1qZADTy8dNvUxD5B9MUJrjiR58FaZcmB2swhVJPub8dJdoDgQNrduRvT6GFtY3iyBgUq9EY9yC6xRdozN",
  "key1": "3g5Jn4EWhwUMCFAVaTFsfguCmkDe6Njwvokgsvp1Btd3iEgZRyDmpTA4rma5GWkJrz1tawhFX4iUHq5CDNFiyVL",
  "key2": "2abxnsw7nDF96cXYTYDvCxprLXJNrjNdw9tiLzrfy2nzg8q3EZtrw1RXrDW2ZQ2qCtT4XntN8YprSx5XG1TRkRuc",
  "key3": "FBZtDf6P39cGVV9Uk5QA4p8bRtHXRysrvKu3ujv8QfDAPP6r3ELa5ZchdLpC3iHipHmvDcs5iDiMYq9U4mjBnZt",
  "key4": "5VNKAv1SF8PwkYsRUdJV9xpsTz86uXuZv2SSrcxTpR98qNisQDPP5vckt9Png94jnuvXMLaJCV1CRk2YpJziWRmi",
  "key5": "52sbSS5u6se6Bov7QZjmYxiKp1mrPHXGWfUs67yLKAKsHY87d52N5266rnbRMPfaFuZT5tZWkoiZw2Qrn96z47S9",
  "key6": "4hK3cdcGnVy37JAxHRnXVJTo6phV9wwqdf5oSKLGnziurXUfNnCkK8v4eKPkTiNMJ2T4d7awjJouQA6RdjSQboo5",
  "key7": "3Kio2xcK1CbkRs99xZPT8xq1omYSYfS93SdDpNqZAYDkAR4NgmwgeudtAKGvzfRNCTzvS3DXZqicfCzxwopJGfy6",
  "key8": "cGffdj52zqMsNtTisdCwmsovXrRtqoPLgaztA3S7Zt8GDSwssbo9UffptDNAd3xhY5hXNjckz1tRWgZ5qyYybbd",
  "key9": "5GHPPrvMgTV6nJVDkm3pAUL7W72n3axjdGPWbS6aE9NzZVM4DE4nGdbgzLGKSi59RPPjWdETxobfStvufvrX1mwY",
  "key10": "aSSFDojTtAcnKhZWrRs6Qyx9Aq7HT1BrEZXYn9iGcGtRrKXu83eWgRPiAGmcM1GavG6Rbgn6dhTb36k9wpMHY4Z",
  "key11": "2qPboEsD3xtj3Sdehws59bz8jCtrBebAeZP5gaUnzYaMnxGViL5qji53yef696txra9LLcTQnGKHpBahgwc8TyJk",
  "key12": "fQiVS3Y3JF3rCTxmTu65GoAb69b1DK31DXd7ormaTKBRbZ9NJb76uA68dnK7Ab94JFFrMxVEAXQmBZavsoyL5uw",
  "key13": "woKefnbezzbrwP6fHvyTxPomuYoxTih8ixPVJMVRpP6DtA6TiSC5KvQR9tppPdu83z1NFXcssQa9uTdzUPrU142",
  "key14": "34yrQdbvdZ54s8mfaTtJmsFgFxDjKViESyBTNeMDqVyyYrQ1YUheaJV41AWUrLXaNGmNtiA6qdZHnGuqEUaRqiie",
  "key15": "5xWzrkywZXbfUPDYnSRKNh66vf9LTkK1Wb32sofgyzN89pdCcUtxJ4Q4CgEaRtWQ8f4zZ1qgLvkkQN7swmXXmH5N",
  "key16": "5WJ1C7gURjGbX5oY4XbLMz3HHYG9GgUg1fDAXP7p7Qmb72nbY99SDWenekq6yJhoPUjK7oeY3cWPD2TgVvWA8Q5Y",
  "key17": "4XKnxPBCRGTURDsqNgMNumm68ex51fAKGoYb3mafLCmcP4FaX9evvrZoHUyDVsaPZCN2Fu8Am6GsX7qAnVEdSnhL",
  "key18": "5vz1anrdB5QkHCNwpDdxGLsdyxhEPLXznQQzbxycsHXn2UnvqNMmT7HvePNuWpR6D5SBGiLTxRACvsmNPiBNRj7f",
  "key19": "3xq4dJ5CvvBBQjkLcCzZ4xAr7ujUZfx4ehdxfqRw3HoCQndKsW4rMtWQfte2jHfGKMK6TZijEZfbjXZK3NuPnnwo",
  "key20": "36A6tmeL1NwQkLGWqRKSi4dEjZpvxfBTKZj44g2NUYHUPh15EMAoTHwbJ7EA3fxD4EBg4rxiY4HFdLT8BPqBTnGp",
  "key21": "3nxQkSSY4PqkZG81oBo1BoZncdYZ9hj4tHc1RJrKX3QXKrAFfNF5DkRrPhXzZSL9Z5dfJHzE9XBmvSZdM4w6j1zP",
  "key22": "4pyf9Yux9ntiU8aRapAtDAaaZdYw4d9GcDMF3wUS3HXxFCRYuocEx2WogQM1mKtJqnKh1c5XAo5PhRUWXVWXnt5W",
  "key23": "2SE8rzBjJ9uMgzUMXQFtDS74qNc3eJRmKnx6hYy58KyF8SkRqL3noJtY9NR6pwDGCFnKoQKLVnxkD2gdNMTFwPrP",
  "key24": "5P7r5o7AS3ZAN8TFnoZpmS1vJcXGsAangT9eQ1nBXTRfn5M5GZb57ZfgG6a1gGesCpTwDwK1gFxyd42JxFx5kAev",
  "key25": "2HKyei4PrdMqWAKhdE84ih13Vf2P8pjC1fHBkSkUDu1PoVhAZA3uEHeqrfQQkQeFwBa3odKHF2NCjXFTvqJoNvQ8",
  "key26": "282YHwk916RXgdu7HULXmYQxX5gfyi6eYpLyPuQ4QYBFVwJ9Xqg2CQTVNuaJ4gEfqMHaBkJtobJHLgBjz5Ngwx6P",
  "key27": "4HVGmbh2FZ6SXk8Gdxjj1hesUYUKguFz2abnXQfdTzF3gSvJ8RDhF6BoGQt6S6Y1dNQ3tBkSiGanMdAmYg4FMqVR",
  "key28": "3R7vsfggyaoBh2L5jzWpqeP6xksw17bWFZq8xSspadpyj1tmbruTD5xs5F4zWCJ6mw15eqT6Ky6HgPwyBH7prGxR",
  "key29": "5PACsj3AKi13XuAtiuSbeiEqCddkQhEoJMKhyN5u8h5U5y6LhU7qgJ5ZWvkFddnU7RviQk94DsPKwgN9gm4nHdxZ",
  "key30": "kBkeBdL3xbYebuxsB2D6rySXt2bXLEF5P98zGB1wfX2eiUaTE2KFAKMYuSMX9vQ7wwvQQdKoYLvMawxa6ABJXFy",
  "key31": "3Bjwh9DqKKL3RpB12i8z2o1A37kouKoYx5hYcDWnk4Cbv9DW9aTQBUbREybZKVgSG5LkU4xRHgKTyHmHxVweKwbf",
  "key32": "4VZgpezuAwZtkrapcdR8b5HHVNaN8baHiw1tNaLW7ts7y3VAFrS4reZvbKaYR8CjHiUnLorwsf5Y45s2xsUYPWEb",
  "key33": "4eBD9a4fxWkwVokAEBSw7S8avsd4sEBezDU6gVwKT9VMset6YKhTe4e5HPtVuhxrv5cXBzRw8JnVUtYhECyrnSWV",
  "key34": "2LkAH3Ju25RTYGJhfTwBBJkg2SZCT6sALqCHwftSSX8wvmajTHHCjsnHBJxYn8USLsMrtGXqb4Pqwo7ErwC8ocbZ",
  "key35": "5McFDeKJwEjkpBu4t8bdHESvbBaM9V3ia5fDsr7Fb3327WU95zNf56sqDYhtC8fdoMkzZmZjPRAAfi7AcpLNfMEs",
  "key36": "ai4GuVJ7dw4x2hruqroo2gDJ1VVB1N6rS258amkQC7HB4tTF1QW2nPhiuiPVonGiEnGYx6bswnX4iquoW64Drsh",
  "key37": "4ftXAFrYZQ8CKMFcNwXuDYZ3BHV6fC71v3CYxHsAE5ewzLZa1JX5oPnVGVDsC2N9EVJmyr4B4aH7VTQQcvhYwMyX",
  "key38": "5aWT92FQSvgX3LvTjWFZmbA1hXDrLoEC2NX4Sk3iyqLtF1TzmaqJy9eqbpNn76S8SyMj8k37eMN5RxEwWhHJ5RGQ",
  "key39": "3G3Bz55tBJfjwCkSCTP6BV8upUNsWstYJCMxroBrgFxze7959WAfh8uhf4yfGufQ4BG2CbPvsGuz3mTXmYK7pb4u",
  "key40": "3pFjs99QSdQoQPiM4LyVgnBP5SfxEonzKMtoinsbs5HXWUzgMg9BMSyQGtj8BaeRTLVZvjbdrPihvrWfbWNENLv",
  "key41": "3HZjELJmnE2AVHdo21y2S9uEqyh2Pr37naUmgsjDwBYnsFx1ZoXgCsqzjr5AUhk3Sd24D5arNuzFcxVaym7uRLXa",
  "key42": "4o2tnEMVtkXXtw7NFYTxRy9X6LDobptDBeaKf7SgcaB9eEw4XMNMGztxzs6NgFhE6mxECf5NnvUweDhTf3v8HUXf",
  "key43": "2nLSwY7kQ5Sbu8y6QNNNc5HgPuctqpCE7jRAtMBg6AGNtXttswHffBk6X3TwfpT3mYQPLQKMLMQLSppw5pLLEQ3G"
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
