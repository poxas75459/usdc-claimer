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
    "3ZdcsKxyMT9kFffgMJxbEbH2bfQmmvZnPBteV8nLdzn32Xr6vK4YzLKwuvbt2vxzYYK32iQveGUEqKDXgUjW59fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkeuPRPySkfuYvb4K8H6VnHDVPXbiuky9BU2ifxY3mULpyTsM6gZBPfrBpwnWbWTxVRw8abkSzfy6HEAcPLTAXc",
  "key1": "3F8CUMjV8Ti3BMwP98sbMueFag8oJYPizVpUoRoSgFtrSy5vbf59EwgxkroB129iBKyMb5MZRnApMv6TwmoD1kS8",
  "key2": "377cYo5bd7fmRQWzjCMhLdZk7vpjDcFBBFJ1VXx6W8HVgea6H13Yp1Xf7vFrWmQHi3m4wFUNbADwS6HpXQvzUKZu",
  "key3": "4FNoGFCiK16681tysc857A8NADZTRS3UoRuy2EzK23f5zyuHPrj1rChmQacGu1ievVsTTTbpSZy5yiRBUNULNuaG",
  "key4": "3e9jwU5XeDhBAYQ1wej4pDnfbmBzBoaSrp3H2XdwTLXTPdgMp1jG3d6CiEEhiqhcHfspt2j7h9ZD5qoxwPDZxzUm",
  "key5": "2UR9UDHTzpw9Y4ZqrsaYF95C9DycCuR3p22YwbMuXv9K7STeJ2i8pntjWrWheStP8M9Em6rJXsMX21PQBd2anCub",
  "key6": "761s56ZM6pBDnsJBJqW4VjGXbHWxvhMegdwzrgLS399mSoVMaPzN6DAnCLPkP7enFSejhX2TYbHFa9FL3Jq263m",
  "key7": "5pm4zQVU29NUMQky6MeksZt6grTKncB2tRfqfteqKDs9yh5aC5xTu6V8u8b13qBuJURyXhmbAowS1b1FmJbGkbEQ",
  "key8": "2Mo4K3HKptWcs1cD1Fv5XGFmThTby8VPTYXpjdWLFisaME8u4oDQebKQ5zmFbhPrnRr9Ui7NqvCBEd4tDac6Amyh",
  "key9": "6eWAZiSp8BKFN5MRaksLDjMFuJZ5LSBQAw994BQMyr3Gyx5vZnRePgoWK6EzS378UBD1Wpx8LLyqq8wYR3YDRMt",
  "key10": "676D3pRUR1C3mbdEiMz7Fur7CXa17sY3TFFiw4iBEp4HurKM9ntGJc8Bg4viKBNggUArYPEN5qBvrzw1NcEcnFYs",
  "key11": "2x7KEDDKtEChrffUyqreiv8QzTXUdwfVngXKsBBJpVfRSsCCmeDcM2eAG8MUqbqbbMKx85uvYDuTFGtihgkSar8V",
  "key12": "SSsbu3rFbhbrMLDyDHWaxhZTYhVJvQxFCBxL29PkWCeSZGJ16CqW5o7VSo6DtJ7hU6a1HyDjfJvkJ2CYdkcCgXY",
  "key13": "mfT1bFCYbXwRAJddjFV2HFxTR7D1Yw5uLnTgUkeSCCDQ8dLzZrkXaLGtzcjJVTURgDRmsE8RyYa5Rpk7kRmrX6n",
  "key14": "bwiAsN7YX8ALt9RJMs49skXH4oQrUJQn58qBe1P8J5T8PTWrdxQsZTLLd91hYbYag1n8RRsH8zLeZVGPJuEJGRy",
  "key15": "2wsMah6m3tmqMSv4uBKYrdVgo5VYk5tYP4B95Ew3vbnTYH1bzYU7e8EdFFzxaqK56RCTb71CbBC8L8pT4zaivn3q",
  "key16": "46mXDzYzWtkfbuwxzAYg6V3ccwioXyFrAnNKbfar6ztq6gLu1vcov4zFGFoj8SfEuns1zz9LmZFpzggmmyHzi4Si",
  "key17": "UAd2suziarMKGpMpdm8x4R46z8LNidgQshsmoqjauA5Bbvj8L9xK4spKJpW4TDqXSF2tqf5xYiWdGaYZ2johXUL",
  "key18": "37qBhe8gMzNnWW2WU1zoCMBPoEdc4My3ksB229jEHADbK3obL9ADrsGQvD58Goiv8anANEdBvkyA5dRgHG1eJH3q",
  "key19": "2jtSrbWBYriAJMnRk9xeLCiV9hLY7TeTpQ8GyL74ofZy2H4oBiGmXNHmnBnTgY5uMnWScnv8MtwnTcSFZyZvjDN7",
  "key20": "2ZdKiodXqrDe2vPZh9BGhEdFVS5JxWTQT291pxY1pzrsv3PpJkeSc2gSX6DnggBKTtCjsWh4pcXbyJ6qYBXxeUdw",
  "key21": "2EzHkQsmgHgon7q1MqEUzk9Za4gBvxexeT9vxAwxaTe8BH4ybiT4JAearoVeEMeLdhDVgCYGuh1xzEvhJxvNoJ7e",
  "key22": "3TwjS5BHNWyZe9Eq9h5wpmAm44oiM2obF3NPukxLfUHbBti1ygbrj6TKPF9GL3g6KcZwZoak4eKoZ6ms4uK3jKg",
  "key23": "2B8E5sHCy1VthmBVKakRbixqTWfjrWsEhZWc2fVPyJ44TYy7WrwPzEfPLpWnZNMbiviGtZNvHzSpTxSXJ9ztPZvD",
  "key24": "5HTMgbsAZVHP7xVPXY2b2mmghbiuXKZadwZ5AHWxb324ShMeRj6dyKgBeZrfq7kuBcsTPtuWmf8s9wxxEg6wkRGf",
  "key25": "5jnWpW9TmxpLTkAQ4jrDudZowK7nETaToCDid2tf86DccoMYXUFbBuD3ScmrfmCPDRrNprWQNfAzbXA2TmmtdNRe",
  "key26": "2tbni8tx6JkGbNv3WtziDQC6khtCHe81SqqWJixL8yuCtYPje6UxeFZLA7kaJcqdLtR8T6LnUcmJgNnJrhyBfV5J",
  "key27": "s97j9J9hAm3bfK35DvJNErXWuRk5ayiprj7YesEyPCM3WdYoudsHuD5zYMrKptUNMLaXRHHRqjwot6Hvj2rhLsH",
  "key28": "3ua1YTtmMqePp4vpXoKiFkvoLcrG1rKKPZuTGKybSbceArzj3poJhmHdF8WRNfdC1tJYU1ywM62Avkxpkhd3bCUx",
  "key29": "5nkC3FJSmL96DLJpbKcHdHitVZZ2zaM2A1kni1ZRiBnW6iFSRiRxDoh2EWjWy1Q13gWcxoMXYQJdhqs7dfgMRtTg",
  "key30": "3wt1ZVCMcLTMC2QeTBrMp4T1WsVdiakCnXRrBwsFfgjozAZG2WxEk1GKto5iiGVEpZTKqMo57Z1TuhadmwBh9hQC",
  "key31": "5UiYqjvX5DVkwFCfK3hxV6XrFWL4i57emKxpTLxZgVnhsDkvtKH7aS7JCQAyuqnmntGVpjSdhqNdC4TL9R6FHJ1d",
  "key32": "3Dqgzbqs9pc9tozSjXMZgDLXDqYBPEXndrpYArWz8ALnhBkMdtq6Nivq2zTYJ3G5nNCJfgpMugf9ybJYDX1nKJJf",
  "key33": "55j8Szddvg83hodbWC4qshKzfFeLznC8NWV7TP9DPZ9bA4F6527F6YcDfNaPGucgECLhzojNHV46aLke8d6BuGLM",
  "key34": "5eNhRFAvPWrMiLFhJhQVXyQ3ByYhjExLxVzuKnpsvompHsDDb6MsYx5xHg8NK4GCJYUKACbzgEXsScvWV4yVktHJ",
  "key35": "4SHDZ479fuWm3Ek1nXBCUEnagiCz1qmFSQr47jcGBV4X5E5CvxhoyoystvUf5TjqvydF3nknXJWcwMn14LoBwxLH",
  "key36": "5m3CpaRsdJ9Fw7YFbtHDMmJc9xq48qQkS2NEyHtyvvJ3FsQavnfPNMvgKQ9zayPkgseNynKGdMXd2KHPwihQu3qV",
  "key37": "egULVRGVgT8Dpk9ijRrL7DwDtZSyuVgAUt21aBc6C9ZcCzFtTB3HWufVGUXLHbxqSBQdkP4pJU3cbaxaVvpfmDj",
  "key38": "5b7fLoFbC2XoxskctzUnx9w43Dvn2WyMiEF1qRXe2k2xd136GLMUej7DA2CUQaDwz7fTm76kqofGLF2kktHu1DKo",
  "key39": "4JzEzobgkciFskPWbpFFkuVUmrTTHw9yWb4c8FJ135Prknff7URuB23e8wFhRchxQseuFbarJLYYy6K4zmUf1ndg",
  "key40": "5XZcDUhujQb5PUtmLiAi6cjWjYmHfWUrHEaDSFG3QDsVFcszfKKatgxzv2jjMn1on1VG3Q7ohU1EHv9BryAHVP1g",
  "key41": "278dELiriWktBsn2FndWYJtVCCwcWBNY6ZStc3dLVhVjHYALwk39FTiWgCizDJyqMYWFkAGHwcsS11tqA6bgqwJh",
  "key42": "3VRP2UthU1ZzCceksojx8jB8v8L9gafWNmCownoEiuGBWyxTj22FBPDFhYqKRFaZLi1A78vegqjKANkD3nVP1g6N",
  "key43": "tBrRYcTiXbGMunwcQ1Fn9KM8NSRrS488U5LXeDju5wAaWZrgArWuTpCgCa8qnmD5QqWy73RCspC4ZNwHHuRaoEr",
  "key44": "5MxaUaMy5Rpd1oexznqgSz4gQFXVx77bg1UwsiRHHK6CQxzKegRR5gq55EWeGTYnZ5pXLZWeGxX12s77V2erufTQ",
  "key45": "3w8yb1pZ4CJKXwa834TAxfZh1Cdxt5gVDwnHKNsFZ9snjhKYQ89aUh2ihaWx8fbAFZmgXnKnP6r7LVCkjDBmsmEK"
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
