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
    "63sjhoHCpKwT5KdiXvFV5yruPg1b51JtfxuDPgSw5ctRCnkSDBnJLT8z2yvKPeivdHCpxrKtaRXD6S7671Qm2an7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iY92e6eFs5JAy8gRZdBuC7irs2LC1DF7N3tqsshR6S6rCW4sspfPNrXF654Dh69oZHA89EaXv6qjP2TtQWj8X8S",
  "key1": "2qWyGxCmPTBa8MhvU5oBo5K3XVib6hGWTs962Je6LJETpufTEx5mxeA2MLP5nL4n1ei7QHHC3bLs212o3vZ9Coj3",
  "key2": "2o6RT2hcf9hSFbN3zwBc4jVRLryZ4H9xep34pVFyA9V6bTxyEZdiijWMJVPZs5qqoPBfPXach3LByn21bXrqSQAy",
  "key3": "22XLgWLUHe9rYepNMmeT9HvGqUV9A1VxQX25xFinEJckfZjdW2irZdUcwDVHuzNJhYJhTWFvAz8bniuxVFK4pgJM",
  "key4": "nEJDm9k35nT6EKdmUMgkT8jLxwF5i6rH5jaX8rwLK3cG4ESa8HAZfmDmLKGnozWWkapYbiw5U9Nxj2SURN4msUp",
  "key5": "SRJVx7B18U61CcKBrsqAXWuEeRJ5JWvrjwVRriRZsp2Zwt1o5fH4djzLqJCpU7mAbdGZFsxJHuqgG78MXKsyaMa",
  "key6": "5JP6jVB3bmKFiUrdqZ2gAd69S1dZGBFS4FsWtYmfG4ecSExMFFvsBPUsPTmQ1uVcuRSzMCkacuuVSQhwnmJH4qNt",
  "key7": "5cFhJocS1rfhKTPnGKevAeRZXiBV7aHp8BejYwKPBw6GPTpQYxH2y4JE2DcxMMjRinMv8zQHJZAz9aedWXvQcMS7",
  "key8": "5f2kK4mmNm8PDKPQqvm5CAYpWXFbEYzNu7zgoi25YeJJRwmDTesVyVjLMVimn6DTj1g3FtEdHidnMT8U8S9j6xyc",
  "key9": "4QgF7TuM2xESqwNXrTqem6KH9os2sEJxRJmymsULT6s4mPkj1ct9vbQXsXk9J6kGCQgFQzBnMR9MW4yBRrHDbpjA",
  "key10": "3resqPZ9KjbqXjAiodAMcWRK7Za5d5TiqEvXPP7BgJsWiVhNY5gBwJvKfdsDqhsqLXYNghzJtVcdz8aNdn2HTP4Q",
  "key11": "5hSurVGnKo5VFaJwKcKhtAGLSqd4wTHYZn2be8Xkrx94n9DCm14SYEctawRaBsDZLr9RcBe84aUnC8MMCXojG37s",
  "key12": "513fjDkPUKe4M1i5Mgwqu1rw9RvgtRGvnAm4qm7pzhJiY7YPuPqFUg3XFs1L97iQWUhxdXF8TKPmdzx4f79p6GeU",
  "key13": "57fcbFTahvsF8xJJbMSiC5KBUmRM9MqqW1JdLkHcMACYFC6XE1NF9Kf9J7cV5arTEiWgFeSbtr1QtZkBkwH9hzVi",
  "key14": "qFHEUkcyDofnD2BFPj8R5VY9kPUDJDY8DrZsNnEutKNVEjsJDZbf6yC4MEXZEjduik4iErjUcrKaSYE2NBzvu5q",
  "key15": "3v5xdAeXDurEAxTvH49BRVXEzbkK7Uw22P1P3tfgomib3jx1n4NmjjvpvdDWEFh7e8CxEJdvr8b78LdAKtMUgMzw",
  "key16": "3uj6nwUziTw4MYJKePwV5tjoLpmyeVwgBHmZZTsvv19mnBGYHdD4bS7Yteap9fkqBvFJiUvUEWZBEpEfkb4hBAR",
  "key17": "3hdckg2DxLoRFiuKe8xy13pq1zagsDzhcpmC9NoD3qcC58nhUpxvyEuYfxy5KSBFPWjTQM3XFnNP8JN2q19LjSk3",
  "key18": "3nRXFs7AL7Dtn7ZHYqwZfTwFp7ZPwSmuxY1QkGtTpEEHMX3u6kSqRAniAhaUHu4RNyjWPrCYEn933Abi29Mjsjrk",
  "key19": "4b5pHSrA75QPmPiwggXcoamRpYbbmrjGrhABcbCfFq9sTtHqbgz9f3iAWeR7J6CQKruZJnfgRXYaYFPbSNs8ktcs",
  "key20": "2D2fdH4Y5gKXKQjQcA9ChqGMeNUjNF5ujUTXHPhAzSrb3eiFBwzJmqr4aFrChpoKGJp3XBxMQsXQjFsej9M5ociG",
  "key21": "2xArozy3ZSWvbxGxFG19qZgQz8ZfGVstuP6hRrhiYso6k45tQ8mGEmsGED386nhym2G5QrLA7UpD45zrbiB1jJoC",
  "key22": "5tAuwqLbaodjbV34rdVV8U9sZqty2iJnnGFhYjZsgNyyD9usQhMsJE4365kep82845Q5kpGPUsuJkg85WiKjYeUr",
  "key23": "QNa6HJD22MSCvE1VPANFhGbMqZujHBxWe5Afk7gVsprCtMhDGAaMmq2UW9T4qtSj8sUL2LDWfY6XGkdiNgM92NG",
  "key24": "22GH31gb2Y4TniQhAZygqENqJwkZWQSyj5pJPTBErbjgXr9UUSGbGL9tLAqz3ZvxLybkUL8yWnz5uVLNn9ijXayC",
  "key25": "5KqgZxLRiboDqwyBM69yx1BNTe6RaBPzGmv8fDnUouGFQBzCJD1aDkmjEAQrxYmniM2kF7Q6qhonm8txpge88mSm",
  "key26": "4Lg3qunGDiC8ecDeHG9VJ7Y3uuV1FprxFtuiU4RxKH8CNDj4TpFkHJKQP4b6j6Gh8voepJeEU3ru4acum1mi97FQ",
  "key27": "27GbGeAXPvz6w5B5LhftyCQ9beWKbZG5kevorJmzUs7nacWH4EL1vb76NrupHmztT9iyVAFRXuECWgsz4TA94rYp"
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
