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
    "PoVLhHWoBiNJPsujTzNNXefDa8SPhfQTW4bWs114bB5JhWyPqhPyKzrKTQjxN6pmWFdEBrBRf19Y7hytPA4dy7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AqatymHm1QSGRcD93Ubb8pLsg22KPLHMQBVZSy6G4iox4VSnueHhSg7Y2uYf2BivNK3NnQnqaeeZpsmtjXrmadt",
  "key1": "2rQMufUzhwmFECqaJPMzsER31Y5oHKHobRfdC9LVL4xaPWPq7GVcctmyUPAfhjpEYbLBirCsbdRaEF8RFD5R9XMi",
  "key2": "26CMvyJUXGpuUqBt9qJJWqRn5Hj7BQfWXQAkirBZfnHePAKsip1ybBjQmnH2TzV9uQut4QAHHHiS8vnXBtq36uF6",
  "key3": "231oRUY9zgF5LA4Z1gzS4rr7jims8YGEPWSfxRnx9mdVSH64pVJWZCcCvGf5mF8sSMQxRXAmnT1RF2u4PfCvPqUh",
  "key4": "4yG5A3Z2TeasobG3cUnZUbyVBeRzVkXkKee3B3a1bTksE6d77fRwwgtWYV4VWQPeSdZn2JohYLqJwZaX2zn5pmMY",
  "key5": "5mW9foFEgcXwqaUKD4Lieq6RJ9X5LHv3HWXCHM2JL362PKbGFexeC1z2mKGRkmB4UC6W66GTf8cZD9Bqmt3Cz8Ca",
  "key6": "fsuAXx9rKcdKRyM6vedHznoZ8G7MRVDNpggHK6GqxH1g1SH7a1Yw4SwXhrzv4tLDGbHvCF3W7P38fJBFc6yc8Ai",
  "key7": "5y4c16tEhSRtXp8VtXHSEQj2DZLFepEp7sWyspCagJTzzXXu2s7SG8WpNJ6pc82dMnS7GXuotBujEse47SCeXrAK",
  "key8": "s1yDsES6wHKY2riA3EYBFC9zd3vJSfNjgq3xiA9CUZcz4YPsofzNUrfAy19JixXYBtyuE3B5gW5N4XqXxCsJMHc",
  "key9": "3RvggMj1PU82CNarcLGV9eCMUf9tFUVbmh3f7nquSA7Wxrxmp7V7nCFSsAEdX6Q3KkaEJExV63WQ3AfrjKVUNpBv",
  "key10": "62aqvXGQey3y9Bpwpk5CD3FWF3f8WVnASseNK8ihaJuFjQFaLodsNgfZEC1NXY1wYXLt7mQimWCMtdz4fVUQpd7g",
  "key11": "339JyH5EvfoWFwv5jSxkxTfHBHeq9UBkfpDn9wM2yuAWjjdjaGTJZKSTpCy7mj7oQJJoY9cM6ojXLFPvCYBVVk6p",
  "key12": "4iBn6zsCfoZ9yF3G6NsrByAFTdhZJqPkf6dkTqXRbtAkGbmVmQoeSf7bDTkTfVxSqEqi87ENunzKZYEsTuSHb5Zj",
  "key13": "5vmuVbV2rUrbd3LCwn4nqBEtRweTcoTn8rnmrjybFUW8pj8dhjGXkFgh2usuJjdC1euj3fdZp6oVKeFbTU5DNE23",
  "key14": "3Q5eVkQVSUfRwRKp39JyCV1mjAcJzddHyvx8sonHHUGEJNw1nbhmRSGvTyUmFPM41Xa5YiujdDrvZCaS3FMzcXfb",
  "key15": "29LyyCgdoQsCSWDAefTYHMN3v1mc7xYK4zg4AkuPqi96Wy4tevXrGtahf4KwJjdBoGnkcp8rJcpFjKWE7W4ToUPH",
  "key16": "5cdsXncniPxmBsSqwqy6kBUCwiWBruZP2397NpgiBCTeDCDCS7x33CmTustvyZ1tfAB5tsY4AYSNgAsAuxRhzHVy",
  "key17": "24mU7bjSHxLn5f7fhnujgrmVodGWR9T2nYq9oy2auQEtLg4tNM1TzUjJu8ycriPxscbyd6GuWMzrUdkBM2KT7aUa",
  "key18": "2zrUZdVFALBukx8oRcqt13wgDgpWecBCyosHcFYgyAHMyWmS2M7r5oYTVdJ2XS4SvhgHXTjRpSFBg7Sbom28nTwU",
  "key19": "4e4Ar3GNZHn36eTRhRjFS6UJhdcq8DXou2USwXCmLGNKGpZrFtYEzaaCFAy67f2dJDMBo95xis6J3isKYgb3oFei",
  "key20": "2W2JgqMtcixfZzoYUzE2UF4ukVkVDucgDAPrk3r3uS3AgCTPACGTSgxkaveiCHSpwbMy6WYjBd1nEFmbGHzojgHW",
  "key21": "2xSuSinDG5FujjX2NkMR3qTyuuUj4dbvixSqHDUVSQMbSCGHKYbDCfgNGgfY5Kisxb3DXaEogJTbzrEXzHvsss1k",
  "key22": "3sErcrJ5oJvbyjphM4Y18tJ5KhDembKmJgX8VmNaH7pCUkKvxFboe84CNop9FcuW2cGeU6WPfkhVYsdnZUfSxUoF",
  "key23": "3ZkzSQMmbnNxKjtjYMNXB2ZjkQTZs7s5ADvKDFASBNCo7FdSLY6fp6Yt7m57chJzDjn5WbK6HLXQSxa6fJjzZeUP",
  "key24": "5z7MKz3wVTXcTJVL55sEzvKU4JfLFLJSmS6Hjf5cJMWpie3CnWAJ4KpjDUVLXDbANQ5ptHKFvSpaEqC1apkNk7BB",
  "key25": "5AmxNDmLkYR7LvbWtqqFjxHxzWR52W3cKgoURGAtEt6BMRPoDc5NrDD7REg6GJg4yBwt4HUeQ1CCkKGPiu9sHpLC",
  "key26": "5D8snAs8k78yyhNpRqNNjkAjWc8Swn2EHC5rAGuz6KRq6NPuJrH1FsSYe3nv2ZPW9vaozUDGWuXhbwha4nQaw2QQ",
  "key27": "2i5f277FHREbqnn3Roqo9byf5Eyz6W8xQeho6fPABWjTN5QaXkyf2GBmVL92bHo4p7yoRxLJCDXKg24B9v29SWBU",
  "key28": "49q3piJmyzgJWk9o8Kswmj4xsifn1po9bpGCp1HGbTXrfYfFE3JdB2yUaNssanA3QQRovm8R8AhUUbHWZrKZkDGo",
  "key29": "2nAh5JQWZkbcsDQLUEsHy8wzYic8bRUN5sqUQwftwbNKB8Nyat4dPmtVGz7z9SwUq81bKkYZ3FhGLkC2z6Q9F4Mt",
  "key30": "5qTYE8tStu3NbLiEYh2JTS3Ls9ohwbHBnXKZXN5wEgqzPrMCTsgujtUPhV5xakJP6X29VRaxPjPngq85YkKyP4bG",
  "key31": "2ZGmEiEw9snY8MVBBj7DfsDV51yy8Jy2VvUXq2ycagMvfPqzcRQ91JBuxgvVzfukS5TgENkbgUvspEWicxFWKNoV",
  "key32": "5ytBJq8fj9CJmjuqpyTXCAuZLYaYywF4GBX31kmXStXfWZkLreQ1Q6q3nsj3Q483GQ5draxPWXSCzEx8NyyDebYv",
  "key33": "5osivek2oJSNdtaiRLfycBAcDaoNRpuLH8TzQo5QAoT3eCL51QiX7BUU9EFaKvYnwc8cE95rQ1Zhys8iwoiVocKJ",
  "key34": "5Kdc4TXJSoCuR78966MP5kbTXLPNAWh4B2wtjVXM6MHzY7GUvJL2BDsNuw3jvefjcm4QyrJz5u8iqvB2BKUaKuxx",
  "key35": "3TB5NJ1aCVRS6DiXY3ELrH2iWkddYVzxpwu997mXUWA31Qgf45gHDSjqbycqaGos2ZBeczZNqNKeUztUrt7EjivS",
  "key36": "5V13AaipsSZzmRiVsNd8VaTQ4bS2HrujMd1bwbdJC61NZEKW8qjiuk56mNH3H3kDcXV958zUJCjGTFpU3sfdJqmB",
  "key37": "4QZ2S14SFhviKJXf8AxzqmgDeFj6uRkRb19zEar6ciHUk2dinJQaaaD6a6JfZ1NokwXuEtUSzLiCJZewjqa7SMcP",
  "key38": "344RDK3x8bbskNkM977sCstJGwQBR56EQ8BAkoKQXFMr7i3pNkd5ojShdFcs3m2k5Y1DZz8GSLVZ1tYtnLYqLF9d",
  "key39": "2jMnLJKL12BPmvWhvjwsHPdb58AvWonRnZizYHWNRMfPea3hKr5UL4CPBtgzEFGQZS4qzSuPLyTXZtdwwT5qDfXM",
  "key40": "2Bo23X1umBtF9iWfMq2R7jsMdB7mAW2R44c61Hz3Jc8eNJAE9HaTNnJUzNj6FbzGDyiy2XGzog2FoULJp9V5T5Vo",
  "key41": "5vvGRQqhKXMNoG9kuqKQ7scozHM81mvJfLYvmFNZWGvUAx2ChxW8mnxibzKC6JqMBWRdWbQxMue9dUfTjgWbw9eo",
  "key42": "2FKCKKPqmTt5CsWZx8hWZfq7adoEytyFC1S1mEqSgKLeYXwLM1cDzVZPtNfgTUHmiS8Bi79rgpECV9XBJMWH1bQE",
  "key43": "2fdmL3ALHAF4xCz5sme1mFE7mte1MgJfXiMSEgbYCTeEXsqrzeK9gWjp32VB9GE5JRwpdY31ZZfywTXjxzokpXk8"
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
