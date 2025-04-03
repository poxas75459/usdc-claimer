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
    "5nATnqJ4K4iudHegCP2c3TwvDjfJhktYpobNciYqqykBddqVnFg5MzYzJ69dGogte6X3bpacLxDd7J2WUnJ18XCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1MUssKYmEZmyGThDCBZgZsxNWL9dpkAnRK4rbhvE5sMWpuyk1XjpgRrBfGzgxNKYmTqT7njw5DYccriCHE4jSi",
  "key1": "2KbVjCs5ec7WBDRoj1xawk98d4baez3YPN3EJgprxQo3hDDKTMUPJ88ATjYT488GmZ75762nhHBb4oeRD4YY8dcS",
  "key2": "46YRYnNQYBTZh9Fsm86dpYdPoYYMb2V8qWYHAvdVbvGqUB4N8TKPL5W5DuWTyYMouaji8cJc5ZTQULyfyEbfgypv",
  "key3": "LGgJ3rAzmyqqQS4QcFkbSXzPKghhhDePGP4VH9Um4U3tJpkbTsczSev5MMTgspYurKUWFbC4fBKL4takigB9xG1",
  "key4": "5pgnGKW919A14wAHiJy768npKiadgKtv2kioywZJgemWGiFRCNrfbaZVh5ojinSY6PEEcZFfUtHoSreanUtMTD1j",
  "key5": "65VmiQ1545rRMWVizqA8TJ7oJbbbgymG3JrEJY8UKqY321rxYeV9ZTGrW5hgDP7yTmnrVHLbbQTb9rQCbwuowgT1",
  "key6": "2tufgmqP9wFUkHdvJVGoRH63CBzcbhf1zUDjoeemHz3baL8xMjH3khseKEJUpsojpxvxWqwJyDLhPsxUGFVzW4Mj",
  "key7": "48nx8BEMp6G8TYM7kkCMizNhwa22y52kfquARLXnndGN3xkhXXYHzfBsQUcDyKqhLkeYoexXtkccr3TQkVwsnHWs",
  "key8": "3Vg1hhjuUwPXbntnmSGKhpTuXABDsffyQpdtqWGyh7oXBchR4QXEL2MtrzzKmtvKTawBwTF7nhEjGUejDmXNwNoe",
  "key9": "XtmvsxhLzHdEEjEetMVTSQwLuoEaihWKChYHun2fL9RnDp4FHx5RiW94UPs1ctihgFEvvJEEWSDEUBBBG45jMjf",
  "key10": "4FsziAJsYbtNEgERG9QtcpTbceAZvok94BVd3FYKm429iXQgXWfo7Y49FAQpDyZUFLGhJT53pg7eP7wWZfhsHV7y",
  "key11": "SKZ3sTJ5t2r3tD5EKSn5cKksLbHwj9Cww7Ew4kcGzzoKQCNHzi5wWMxku7DicHm4FYxcvGJmHRwADbSP6YGqWbt",
  "key12": "4RydPWeyq8Cpx4khrhRCcB4k1FmxSaf4PwWjV47HwZmR5KLeJiJhvZVGDueE7sPGhQ2CR86JiD7pZ2TgpUmgtgYx",
  "key13": "2kbyd7hhZ2zUmUamd5FiHAsUsGFC1ehKbrhDaZD1TJFw9GpKsNFqGvQ5YCj3BiFYqXW3bTdaWkr4XCBkvjjsBn3X",
  "key14": "5SiJPneUb9mwsmk99mgBFfTQWdFkKnpZQMtvAdb9rcWasbMiGYeLpznLAsQhUx7xHyu1dN8UM6uGPYQJm7kEDdHw",
  "key15": "2fbwRSum4P8tnu8BLcjgy42u2fc63ZyeSCw8ojKwEbWUM41XumfuQgrtXK4N5k8cwasHxUNdn6uZonZP4oCXj5vD",
  "key16": "3wo8pHkkjgKLFUsw1cg72Hjs92E2SHmVjKbWZQ3W6Cj3Fs2kn2bZG64WYAc4Fqie8k9s32AnQfm6SsWiWQCvxX8A",
  "key17": "4yG53e6cYNwFXCFLHTH3YKXcRHRamHWBdryTpFDsw6tWfdeBWDkWtEw6RFRChti2sF371jrBUZ7XLVZ3CY9SeRT4",
  "key18": "4naxi5yab9zX3sawFkUujKxsJd1xcGtmWH5EH9TktAvgFsojsdVzt1AUrGoFW2xNtS2YqEPndz5TH4LDDQE5ghyU",
  "key19": "4GnGGjwYUUXza8VfKi1Nu4t1Zn2eZcvJMRow9icbdWNjkju6BH1VieGHFQkKW6uSrsuFGu3NYLTNT9qhD8EHtrav",
  "key20": "2qPRZnMM3pyCPgibYfgcVwsamZqxXc3BokLND4sVExMFc43V8Wg2VV9EhdydK3tGb9RbJGqXx96RqB6yhCQUqN4m",
  "key21": "Ernci8Dm7aGCR3ToHAQ4Q8hvtbc3vgGbNv26u2od1mBfFmgei93fRUtfGBJVmfNqzXueYzp8kYYivjio7zgMZWD",
  "key22": "2uzowvisDhyxNZrmzPHihKpwVC1mhrqoi9feEanKf8DJpRSbwDj1nsUMWtBQSNq5Ckq79vhYWub6gTFDBbF3XnBC",
  "key23": "5TzpKJprsr2P1EyJekRuhag1hyy7GPK5iwSPJHptDUamCoJC2LpQNV4qbaR4JYg83nYbTqQQkg4kgux5PwBA2hLo",
  "key24": "3tjSL5jm6jhWjBRsDWa5nxvDghs5YMdH5WweRsREjwYZigJCMuAFtNzxzcmYM1t9mgmMSGq2A6NMAv4xL24iesda",
  "key25": "2BAYVaWprza9nTvtBhLkRph7xnsrMZGHbyyY7VQyBxE1n3WPJfFq3sLHjLfWCrni48jJjre374ikEBsvk2c2nf9y",
  "key26": "3q9xY5QpJRCVBbiRmdm8GQosxbM5B1gtmQEsQpnQ9m1EC2gpsNENXVf7VS6QwbqeSimVJkWJSZqZqV3sYVrcXs82",
  "key27": "4pbPzGgabr7Kzpe8LdwJdEANiqomhgssGhvbBMvDzNv3B7CA2g1qQy6iaYyj7qouPj3gUftDWEwVMhHCsTV8MMJi",
  "key28": "4And49jPHV6USTd9CYzqN9Ex51FXR8U9mcs9G6npSAwJBiLB3RXymvytpFfyDjD4woCwJjVeU2z9Q7YvWVW8wfgF",
  "key29": "hpNin1i78sxz6DE4utHV3zHxzVZXuPoQ8FiFzUaW1L46EWFE7dzaou9Fw3EzSSb8XgujFhm5oSGaJUqXSwCg6Fe",
  "key30": "4T1vA79VTyXpqcZBddkLzokHZCotkWmNzKThWRyJH9xQAGt936hHDmSFZAH1o7wU61427CbSq8rFE697fYSv3JHz",
  "key31": "JNujX6Mnr6ffw58DYiFHS7CeqpjcUXKUVnrV26N7DcKVKGb8NafFCuXFguSRjCMUH8N6LGRdcEYfzy9DvENz6tR",
  "key32": "5Ys2iddv26QGg1dAoTgWA3bTspqYaXGtBX2UcK2sx59QLccsdRd7VogtDRNNBYuneT9kB9CxE4B8VvhxqpRwk9XF",
  "key33": "59A7s2U6pZL4jmWxAHmR4hbQ5yjxd8dYXBZTLK1wbeKufkrtFPGSSxtP13FWLnZ9ZDsEsdjHvbc8PQEytEj58Az2"
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
