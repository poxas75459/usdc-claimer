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
    "38LxkKVHsmNMW1fHpqKaAkrcoYcqRuSNR8ryhWYjPJZxSaMjGVcC3J7mzZZ6ExhhBLUK9DUDPm8tHmmNo3E1Had6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hqStoZBiftSkmVrDLyXNYssXKbGBwWrYVuL4TswErMK99izzJBcka62ydnSXKwKHWn11vtaGEKtdNLRiCinEt3t",
  "key1": "3aiCELAjnvdVEww4qrJZYDU15QhnKjr9No88hP3nqC31jw7Ythq1N8myy7tDrwq1J4aC3dt8CdZKs46NJwEpbLzr",
  "key2": "25rHoVfnKt8u9phVUhjV1DKASGs6meYo7WkecrgntKrLicJo6FmxKLBPctYoo7yJ8ZWfF1ma5wWvkn78gBGbEDWN",
  "key3": "CKbQhnxH2naCBReV4JGKhiyLoVRDinQW3Zuwr8B1h3eiL4B1LMfjkuACVxYDvWrKuCEvwknYLtDQfaPmjtfWrH6",
  "key4": "2x6vhrHZXFsbpVt1EjZrHBfDEG5cW8wjKv3hyXb194EeTxwQpGY1qCQprLe3JZPYYxNZe38mK6nUa3yRzXDWtUoH",
  "key5": "4mj1rmYyMC1JG4xUgMjXw2T3JiWk5oZiSGfatetHQEPg5M8LavkVka7Wbxjq32sMXZtptA5TdmsoPd9NnbjDoEkn",
  "key6": "3MSsvuona3CVkUYEiMxbiPjPyWffZYL84reizFk835ZS5xAGwbBSos2eFL1qJJYKya6YSB84eGB4t7znzma1WchG",
  "key7": "2D1shVUbnKycd9RgYqbsQfLQqiWqWXPKJcaEJM7J9PbCyXZYVGTyDYEsHewJDwfy13gnA9T4QB8fe3pPaFYf9or3",
  "key8": "rTFQ7hpBDdbMEbmNNtHk9zFtPg4WzTcrkV2xrgU82XkdkdcRTuBex6GvrqQa9kykRp8qUSXPkEAVCQ1tqjkPapn",
  "key9": "2wLqobXqMaBVbB3XFxFHxU2okTBG5E2tdmSDXzZTNRJ6mVCYWUbtUigPBQxseQSMq9UqW87u1w6gaQEaT8n8Uck4",
  "key10": "3oQnLB5EXPm1aMfYWXiFptWj26HT78wUPPZrSuNi64VziVD6rJ4LbZKaZT9C5AzQC6FKAv3G7CreSZqiMG4X8JBw",
  "key11": "3W2iaZPPA41dnV3Lk9eVhXBVhGfXkCkRRKBwM2SeiaCBFdSodTaBEbw8GdiYgBwoReFWywH81uSX7CranEnVnJDi",
  "key12": "HwciEF5KDhA9TwPTwLkWBuxQd4uW6XgZiht4nE37bnEZxQnbh8AvDxtTgLhDdfapytCQmsehWfksS4QMQDWabin",
  "key13": "33zV62nm5GWMiGFcPZfMmwCiszakWvmrmG2r3T77PNor4srtJR3GUASJbaB8FiXcWfB5fv9Z2TU9vz52z48iLAeM",
  "key14": "pTbEvJD7tC8WHjFN5erHDciNSoV24kuLzcTAJda3rP8BsF4RHRmK3zXeEWYPkvDSZZ5XBjdtm5MWswPrfZ6Ed6r",
  "key15": "cs5hayUufdsr13LADXQC1a6MxzjCEFHZ59ML1hXY99u8K7f61NPRpEjSVycJhD1mTV8B37xnJuK1kqdJvtCQh2Z",
  "key16": "2DrEyvs5wymXWRdVF9Kxp2SSvNPoKwWgqZAT3tf6k9McWiAXWCn9d13F4A9kGFqGvudoVPXMxnkx76wq6hzoJquk",
  "key17": "2MpmrGPXrb8tc8YrKFeDYu9TfviGctJ1s5k5VjKNUoZUmdVQ9DXi7eoMCCW4YjaQmuYxNyMkNxDk6Pq6DY2xp6pA",
  "key18": "2d7nyFc6nQu5cvr5RV3bF3gQZykPtDLJJwtv5bCv3Fivq3s2MGTr4fnUjpwYFjNBjphHA5pC8GUicgBddbwZWx2o",
  "key19": "5b6WWqyJjVZEvVmVcrynTPru79xEKYqRePx6mf3eYgiJ7Bcq1jqkVBXhzo4LzEXhaHWXVdNcj3pzGRXr7Qkdzbs",
  "key20": "55R2WvXvbw27ftdvhk1pabiytAecrerEhTvwcFj4LGMUNG6tsGtEYSXNUBacTAFNwUSnzmjm6aZNpsivW2zxfoaG",
  "key21": "3DPuci18UB3dtGEaNcwRpe6wJmNhve7FCSBGkPFUEjVYdgQYNi4FgbXzxLyzRik4gA5xUQUGSGSEgbZBvoeGaktv",
  "key22": "4ogJGU8hmUcgygk7C3hhYeYRf9GsfJzkkTETNDCNabP1X5m8UQgDvpdG1V2ofs8wouuMLmkjC7qyQvrvLMR6Hgz7",
  "key23": "37om9WTfBjsyiELvALUx3XZFAVq2SYWCFpxeaha5DcD9LPdgXRS4rBNDo2z4bZ3ei7Z2q54BVfezR3Zy5b8oNxFE",
  "key24": "2xbJgqDpgTjYcyeiqmEWFJ8pm6E23qrYZGTV3b1ioMcKoF3HRVUKJbVttZJkMExLup56mFCbrbZ9Hx4SuieXvmMK",
  "key25": "vGPp3BSGPGzEYhVrPYMXZsBpDUaG6xoHfoHg7rR7w3TL95hgkM7nfcEQmaZTE9Co41tf7txcNyBjCu8zfRPXr8d",
  "key26": "3FxXR78T8MGypCh13mTD6rzRbXbM1oXXqSAjDJS4AfDe5nSRh5RYZ6thtJtfarCXpJmpyxegtB99UwZZkaPgU9Ut",
  "key27": "5n7iUFsxgcnncZwvzufpdrgJYydVEgB3HytDiY7Lbs31ig4Go4WzJDk1xeFiKrnNnA3ELvWVGb8e9sEbssvoirTw",
  "key28": "3c7igRNjVpU255MzhxQJZkePKmfXxvNqhuuKRuWg58XJYXHXGiS3k3yBbzKdTGDhhnnjtTee8293c3Xm5i3Nv797",
  "key29": "4W388s9LB1DQVZeGbfjrg6VhLx6jyrrWSmbYxWVywAjRkmRt5PjsY6av8rTkXy7zxBnjdEaH9dTHEoi9teYUjdsQ",
  "key30": "4eZbbZM6gqkNBC3nxN3R6XwXCAX38R7zJZn8nQaUrFcw41gH853U7bYQ1JM1xQT6fSEc33nrmRGJjkj2H2x51nAP",
  "key31": "2XnMakwkMvLAenyfhjpEVM6uFZy9poBkfmgUsWqLVtTymHoTXXuxB6c5DEcei8956HE38ZnPX2sBn3MWPDqEQNC7",
  "key32": "5cBXuiANfihxdW3XGG9bLeud6aRDDwevszibkWTWzCieTu6nbw5E1EcSvdknuMhCAY1E3gX9HZ6LPJ2X57Ds4GZV",
  "key33": "48ueF1MVqDmTDWhhRhQmdZVS4UtzRsGD7cZzosECD4x1XpFWXuSc3vunAWYP5zxWphVE75xwjhCgNJYTjNqPeyUb",
  "key34": "vvNhbBRkFTLYBCdTjH3iqUufViFiPRdnEGLv734gi8AW7ZSaCEspgGaP9vioTBWPtXdXrjmR4qa5LZe95sNSDP3"
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
