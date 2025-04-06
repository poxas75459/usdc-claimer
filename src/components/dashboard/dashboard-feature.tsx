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
    "qUN7cDJk9ktvDYjPVo9Y14b95ZEfmKiq21bEQTS3dMTpru1RnWv53p4kkzTZnPTdFT7JYMvoUKH14RznWy9eKWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgmSCnTkHZFV1tHRWbWqbeKsA1ndencJjXrY6s5Vv5vS7qFNqBqJd4nREFHVsnr18evwY25ZupxRG9VXb6oMyHW",
  "key1": "4KQLabDBbd9jWyJaPbHLtUK3CMqSnuRK1zE3v4krb3XfdGATqkrqXceMFJSTBF18Q6ZpPpkZTQNNEzDVGFvyJvhX",
  "key2": "1NJ2AdnMSGHmhZ6HSJPZY6xR2But82MEDXRrQu6seF5ghYYfhTMf586g83qmSwVVSFVazVke8d8QpMAW1uMptpz",
  "key3": "ovQGppySpKFrhRPkRf7qechQ67ep7rhB323FZ2qvuLPCmzuUD4AyqrLUgerQ9dpxJbrDXqar6HrTQBiinhw6bjM",
  "key4": "5cJ75vbr55m4T5BwzEkL8wd1yHoSRfvEX2LsoH1umTnGBTCNkxBA1KVnVKQ2N6JasMieEDxBYfdvEzEoebmogoWf",
  "key5": "3mFjopwBmWeY41KwB1AzFXD9TSMmbLjATecA9CzyuuBNytRXvVzm86Qw5LKo4dpensQF8mE1831sch8ifSRJPyeF",
  "key6": "3JE1e7T1NWAuSuFbe3JW2PKH3xwWGcfyhk5bw1ogviJNn6aniz8aq45fL72sj9BQ6BMr1R35Zp28gtkN29y96pih",
  "key7": "2zQfe2jUXMRi51McgHtFNEfUNc1U6NbdswDxfVQNKm6LcGMJUBBTZzgdxy8BSNyPyG4bqnMYGVLNk6Tyn4GqJk9U",
  "key8": "5hNvzgCaSR6dUyH3ZyxhCKiRn23FVrWUHRKJAfSjtXtEc5BHwQnmLLssexc6P5ePKRpzJEyFEueHqfEvk8zuwyiD",
  "key9": "4eBBHAw7k1CC4VFQQsso8Z3SpFM67GH8ix9vXxokSSgDzVKvWQeZmE7p7teK3YMZRZUyLPuuPsJ8oX16Fdug8SGB",
  "key10": "2E5BV9QGZptrdq9guXuegbLG2YyY8HFoRkq2b3Wq6m6wbSTwU2zqaqVzT8HUNog1G9tJQNnUJ1dbL2rdXGz8vze3",
  "key11": "2kYy7FxsiTsw6DBRTq7UPePXpTcamEXjGqc1xuEvtm3r6mBgFQt915WnUYUkyLKuUCJeZzgbfMBLxkM599BSRfu6",
  "key12": "27TKVqALGLhk45YtveqmgFGag2K1YF31kq2U5hXXy9N87tYDe2g77HHbMri6cumwUcdCW22cKJs4wRWmPENn2h83",
  "key13": "H5Yom59nWM2186WxtbxTuvHDzuDs2dPJ5AHuNE1LQVRp8G2AioUwEjTgWipkXdn6NVMfSaThHuWr2v3t8LaUSrT",
  "key14": "2excv4H2kP3rHYLuh9vKLdofCJheQNbH6NkDenVKcDFnpPAQ7jWNg4JWZSj1fHnydpFcKnZZ95BAdypM4cBspGp6",
  "key15": "2mKtb6qP4WDoudR74eCjmdgLTb6fa6ATpzAhBGDe93ztDB5QiCcz1Lib7MvuP6k3oS9T4jnfELtqbkJhrcN8GSQn",
  "key16": "2D3iLDYuc5e284YZRWG3XNAv6GEX8ibDeCT5VXY4XjHbCe8TASnUQfHk9GVeJ5jXDNx4dy6KezfZyvWeSnhRugTe",
  "key17": "4d8PPYnvcdTFngiqJ6LBD7ix6erq9ftvgC42tK3AeFtbE4HLEdYMTgrMB8Pks242VSD1qmr4YFQn8GzCmKfh3Mb7",
  "key18": "228pcpAwDt9adzHSjjA6jGKbDfNYd5PdkpUFZ1pT39UJhR53bVKeRjgFLJs5kK6Ho2fWvhTRfb9VwZ9BSggNTKcE",
  "key19": "54L7iEpSASw34ECYssQcJuojNFjwZ911oY9EodLeBPpBB6TtkBCdMZfafFw6pJUQtkDU2YsAvriC1Su83fPvPpza",
  "key20": "4y986XqhRV85FSfGQmL9qT4JhS1cTHoyHEkREN7pyUJhMb5JArWssnaDfs9PTUQhVk8kGKG3WiEZ7uJWadMMBQhF",
  "key21": "4dpwTnmSbRtXnCwaqBNuqYt3KQZLkfBBq5Nsfhc2W688wybmaNMSZnv7wSu5apsR24XyP3cABNpkq4DcL9CNBrRZ",
  "key22": "4tjiwKLcTAs4g82pcddx1SMSMWrCr6idckmeQqyrraNbREAeL4K2kMybNbz2B3gPdxKkS2PyQvgTwdSAV5Dm8yuQ",
  "key23": "2s9HPh9YCyxbkhoeQ9eHZbB1zpubELDzSP1APVn5m1DredQMr4rWaXv4UZHAjsQzB7iAmCffVPuU8hSXkAdZ4aep",
  "key24": "3sN31vMHg7E5KT4ZcYQZz9enJ6BCM2ff8Dg9VzoAoQJoxE8H5ChTWmGLywUHiFWpKUvHEGh4JSBYkYAFXeU3xUhR",
  "key25": "EEzHy6ryxt8q1pcXBCcjRGVxX6qU9LB29qtMy6Adx6UCuky2C7H5FdTc8gbxx89syHvyP6HicgmYvr2aWNmmxWo",
  "key26": "29anmEnWWJs8zkP1thAZ7P3Cr4EgvDYwDrfvwWaC1VRbbRnnL4NPpzu2twkiDjxrTsKSajQhcKcxkHehCoCBpJnu",
  "key27": "2Yq8LYkRnkt7qQbCo4rfcsm19AnYCPWsXPqWcZfZNtSUfTUt4GZgSEgH8e4xw1s6cf1CUrLQWYqzGcyHBhBBDsQ3",
  "key28": "QjsbN5CoebzgHtQh7AfAN9pFiA9FzjW3uQTWydiAMxMM1vB1xNv49ASEvAiEaneU3nYQAKSi3tkv3rw6p35frJy",
  "key29": "FJFaMEguoF4ocCuxkWkzoKXdn8tyRoCxJCMU78UsAJdMJqgmerMdpTcnNudUD9S23Mg21R1fma1dfHe9QUmypEs",
  "key30": "5whAHVyE8HxGDrx3UHoMUQAEWmADahg63TBb56YxBSVBx1FDdgELWfen5wP2C6C12k9GoiA9fjY3fgKrajhW9pER",
  "key31": "XEKbLgcab3QnWGjRrv53UL7E4iV2ZyTJPRR9ZrqJjViWfD6BZKBF87DYte3HfaG37o8ormn8Aqg2mqYoPrDipZg",
  "key32": "2zvjrpdBqSezsNvEXGKo1shxt4ty5jn4UqN1fAsbuhjzoUMfdtSfKGLEamtTuEuYL1LwvCrv8Q9ofavP3KFRuyLr",
  "key33": "gk6EEyyccWZxbU9aEQZyvovp8u4w1eVMdgMNQUeYVh4bvrqwC3KKGuGuHM62TngVWz86iDmcTJ1QmQ5S3HpdH16",
  "key34": "3HB9MXtPK6fCrKUg5s6Zq2AmQqKAMTyj4CatFCd9CgArV4d4XRDNrVBhbUwUtPXNB3BKi5z6xHdvmNt1Ma1z8HV6",
  "key35": "5bbpVu4jGQhumyEgc9h4meveJMpFDGZtVJP2M9Ja8nXYC5B7s2n6DagGBMZqwxGsKh4piVUm4Goi8PzEg5oRQLgq",
  "key36": "D5ZxhTYRi8dq2XWiRwdPz1ERFh388AkmcB9Ep8Ca3FWH3TVqzEVqQuVVUpeFUiMzvuxiNACVoxbMNsA9o15KDCh",
  "key37": "24ccf5HHRGwWhe61uTfrusFDuvQi3eV217Vfz7ECKw55VZTEDPfFppxnjmbq8drZGKxqvmxwcRXzB9stRUvH8NeX",
  "key38": "2cUwmcQBrxiLihqvQAEgenjnsov55q4wRXxdvCaaYSMmPHK2Xch8jkintLgeS7x8WJgQNVfgPKgRDrS7kCe3U8UJ",
  "key39": "56NuUFkvY2QnYHZN9AiArF7e7fjsFP3A15wSFUHF2SMvHXmvivmX6kgbDgDQqCuVbwF7aNoK6T4AZ9QySEpnFR2k",
  "key40": "48oDZiZC51L96Am5wPxqYHNvZVdqkWfyujd7xQ7nciumQLnze7qYJG5ctnRZiNoRSunvubctDBw9NuhLYYDHGBth"
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
