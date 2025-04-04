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
    "6gtSe66eHzv1vcGKHoH9iMo2S6Nn9nCwYvz2Ph15P6BLQBG7Tk2MNC2fJYjTBApktHW8Wh95RXgUzUxTVhsejyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpLD6gJSjbVwJnKQVTQw4NGznZnGo3E7MDxVrG81KRHYgXQyYWM7ugMpZf3zbj3fR8Ra5dJZeSrWHNqrwK99QZW",
  "key1": "j4Y574d6EK8shVgxc6CBemLuujM4EHvKThESESEjeRLWJVVpxuRZ7UCzhdfK2N9qP3GN7p1ZjzoeKyf5vowJriH",
  "key2": "436WUjxVYeoq1sa5bdfdK21KupZPaARerjTGvKnSeBFYbr5dP1XfYHyJ2241bmp9GZLR4fPSrgR64f56zJsxWRYF",
  "key3": "4xCW7rkBGGk7avSZQdkjFkjv5eZJqJQc4752KmLgpyki1tfnCoLW7XABfCWsmXTH1UPRuopxmB2coZbnFQBbQLAq",
  "key4": "5aJDwxGXcAieGd77r6NVEu2QMXo1bxubXDbZ8VxMhcbtiVxD94uTrSBHsJqKi7zzrhFM2qjR5eWuuhoWvjZawQ15",
  "key5": "3QRZJwa1rsGwxQW5Z2F9FkyAS49mXcDFb8yVn5k4kxE6gREV1RGN11cnTD9kfZaB2PksH4u4kBWz8GYpDCkoWVjC",
  "key6": "yDKkU68C4Lb5qujLnvNkFYWvWxVPCCC1L7uLHFy5pNKwAUAjS7THfsTpPZGyycV6nEkyyk8o2geh6t6J3AxuPTt",
  "key7": "2HmcuH8wN3KhzJWiHwxy25LL1hkFMn1ieo1eYgcUyGQnfwJvnrPFQyfRMiAQ5Z7wrhsTukB7wDUppEpfCkoE5PUM",
  "key8": "YwTTfZ4QidPRTFkc2MVAQUxnwVwSFNR6iZm7Da8hvc8jaqqTHugR8sjNMgVMjeKfZ2RneVazEKUK214KNMeLAEF",
  "key9": "5Z1sLdcS77vsb4BRfMyFGSneV63tQiBsc4TaWtWoi7gL7EkuB4Da2C84Cr1qDjGiiyK8YjBhYjKN2a16GRuS8Q9N",
  "key10": "5tzghmB5bmk2wFAu7kYEAdKwQnKC6MKUiSuqfeBv3iumWC6pUYmWEJRzuSt8UGeXL6TLXtdPWUGrwf1jGdjKkeQW",
  "key11": "4equY9sJWJEnARcpct2uAVj2nasA2seL334hryor2pPs2H7ahFcRRzdDsuPxAMCyAQYZzZLS1LGbFqidYHUMrNDt",
  "key12": "3hkrhRguT4kRETHk9bjVgRiPXUiPrDKWHoyJffPtYf7WNqrSQDXXuiphg5r74P6NmXkAA9JrTPRKLtyVDs293H4k",
  "key13": "fvjYd71UURXxzky1qY7Fexgz1oKZepbPCAbSjBpSznG5agSxorGRBQ7WwZqZfLaiq7R9qzDcZwqJbVrSZ6wT3VU",
  "key14": "5RgwpieSWBKcoabUnu8iWR1b5QivA8csHfJB2JL3UMZ2hTRRARvM9m99yZPgpHiQp1avAfcAJdnPP65YD18N1oAW",
  "key15": "3yeDTL3izZHq9kJV16KLBgLAhcwoHj6QW9GHrMHstmMkX4W8nkbb447rqLp3ubQZceHvZSUDdLfjDhXddjgwsSYq",
  "key16": "4E8z12hUtkiBuWKWn4aMsi3RrpmNQzq12KTJ6P2R5mZibyeAhx3ZeQviJWi1ZjDfNuvPMk9hkKUWVLqpR82NbPwQ",
  "key17": "2hXafdmzGcHKmkS7JVgshkm6FJNwkfBJMktJRgP4eCcy7jTPMvipsKrHWm1ZvvpsgPTgKTkKo88frLf7USJMwHSM",
  "key18": "WeER8Vxth4oDMC4bnPNiR2DYQyVToq5cdBTqU4o41ZYNcaA3WqRmWtj1UDVaHghafTfetm7S1v5QU1DwfoEP9XJ",
  "key19": "333CYnj93e4MjP11tPq2iSLtZFbrPjvwV79HABeNUpvTWMLBxjgxzsh3K5XEAzByGKKdoREHCEEgBsjLYPF4B27j",
  "key20": "2Y1KTsNUHaHB15LrCrqvXUiuE8z6hL37GPgBo7SgxPYHPN7D1amVrRuo7YfxJqPHExZCnXRE2dXgtHy7uLeq1FfZ",
  "key21": "4qxS96mQqRZVd9A5rs88Mb1MY7ucjd7W7xB2bgS67c7NmDfZ135uP2LK17Hd3vi1p29Mmar8H1sEWQhRtwLMArnk",
  "key22": "25WnUsw1qWXSZ4drq64fQHCLGMwNuCotNNFhEdTLMmk2axSFfeYrf1w5gBW46HLp1nQHqYMszPHKuKNYhRKEGW4n",
  "key23": "2LJaqywU21gSS5D5okka2Fd4FHUcLiCp21DZhnCDM15NXU5CXhkC2V2BrQ31azqrDNRRvyZXwwjPZZN66ockZ2MY",
  "key24": "4LDF7wrdzphAaZMmtjKd7k7nXmwmUkawdirekwhfDs347VfemxGh8iq1Co8xUunRn6wt6wwzCLe8en62v3xU92Mp",
  "key25": "2env4e5GBgdaVKtKAFKQpFmxMkrxzjpqSrufDYk95b7znfURRecedGN5qrwkYAWKuRwRAQ6obiCeQKQH7CHaMNk4",
  "key26": "5xbtcF75xCyU8ixeMEreN1uW4PZCwqcQMgaDZeFqReYEr6eWZpudvKqj5DnsBPZ5CwDM3RS9KefvCcxrt6kmUseX",
  "key27": "5s5xSP4vYJrhUEHaz4Sam4qef1x4K1QykHFBFaGsiSkZsNpxRULBJXEkhLpL9RfQvjxK95N3bPUXmRbX6yh9CmZM",
  "key28": "27SEbRgpQZQ4gU4iEHSW2UByf4C8BsAbwV84fGCQmJ7AEAjGZAfSf5928KH5yLbX8tLYxKkPH6BcTfpZgPdpF1xK",
  "key29": "2aQ3x4FFK13kATN2mJG9XkRwgG2U2NTRvvYksXHngcvkBFnDfPu5FHCwZT6RVNkayvdFm3zTaAXT9WiqFTnM6qrN",
  "key30": "4tHJTMecJpR6dNx53EWiJWYpUbkZYU98YN781m4J9opHrZ6iziU2XUBEYhpZNF4pakFK17SCTLGmKqnhdGT2bvPp",
  "key31": "3HfoD5c5PuYyyscMDhRtt1yTJMkTtVgxsZQgMqD3rrR29pBy4zKaGSaDXZxv4Fs6QL1hYJ7ATptkN1ZbdEDVpR4K",
  "key32": "5YQAhNyxQ3MF5QceANdJHpgaj526oo874oSHrsJcAPozS9kJnczPS51BnwMQZ375p4icGRaoGG8upHydw7ivNxAV",
  "key33": "2hXETpacoGyziLeUVvgNCs8Zwq9wGfXY1ytifCmqCTHnw93pwYGWqyAaSDB1MKDq5UVDtTbKvSbKBbb8YP2kiNkW",
  "key34": "2XFEdzhWX7d95HHCqPgGBGxdYbWFeS1ZZzQswRKzsM8wzvTPcGzKEXr6pZaavmHSBMXqhKPS9S8w2eburnrTUEgt",
  "key35": "3bKe8SFJv4PXsGLpWEEq4zggNdGLZkx7Zxn2fwybDjhbFcjhX9nFpiaC5kxSmYjKFRKaEq2fCk8c7WnxBEUsuXZR",
  "key36": "5KVRAm8YoPRYi3USG2X6croH9UeGTiST2WsxF6tjYuAviGGpJE5iNCkhhUbATHAasYaJPQ2BoExxQSX9g1G7nzPn",
  "key37": "4BcUDwLzKHAvwch7JXY4dj7daxSo8k5hwy8QhpsLwy1VAxEoNprsLxhFpEQdnraAiUxDvnDrKop1Ycb7MC1YPFjx"
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
