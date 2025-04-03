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
    "F4xdb3M1c5u9EpouuScBbuV9WokEmsP9Z7by3EaFYy5PLGK6GBPj1tHaS4A2zWUwkH3HqCjZu3pFjMW7DmjrZbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ve9S1Tcgn4tAsFRTvbeVenaHrd9eUTLDQAZ4zNdaaSyj4RKPiZ2SHrkcpDFn3kRzcKMjuRgUuQfy8ZcnkAqaNZv",
  "key1": "TZunHqaNbQZKfXrxkkKUQxJfzwdyjFjVknVdbj49jEdEj1cGgAxf8kbLJVMXm59bHqT11PnyCkqytu3Dhp2hk9Q",
  "key2": "2EZFtemj5JGgjySiTKcFm6QxMWhKH23AEa9yPqndAD9EtdE5hoz91wXpVzyRDtRpWS2jHZ1i1GpPNW1kUxTtPTKR",
  "key3": "34VEGegun6DYg9s2WjyXogSoXequvG7hBycpZxXHkAhkFQEBFBX5P6owL4eRkhwDnh83n63BiaJ7GEcj6Ypz5kyk",
  "key4": "3Bxo451GJV7yE8WrHNgvjDKfK1ELpJcgzMD4mWyTkB5wmgix26eZYv452jCztDaXthPF3x2YEVGjtzygtBik22NT",
  "key5": "2Fn9rEXimfTatetyZ51DGgunrPdfPgRKuTw2JgSMSaYPdUMUx3toETHQqcduEfowqX4tScqoxfkzzT8oZHaE9qeT",
  "key6": "2EadqEgCcyrtUF5ngX6jwd277crXVYiU4hs1k8g5evNbgXG4w9fXjVjBbqqXjbzimcVtRWHF9SMSuY66XdFBdRQM",
  "key7": "ybHBKmeS5Suq9KnQu4ccZvgNCxVibz2rSQ1odMQAKgfLNnCtQD3Dtwr6Na4FMZiV6QAXj5NfU4ofEw7LX1Fs1je",
  "key8": "2yW4Hk1bpeZNnRqbXNEypbQfzuMna6uSjGHiPtvo4yzrjPKWo3sYnTPzuo3yvQH38Niiu2NNaVmMLqJ6ZaGHPixe",
  "key9": "49W34VH3PTmmFw75JEpxDnvmwnePibyX4NYeT9rR73gaoiPTJWfGPyW64kByCk2Q4kBafAWkcHwWDtsKfWYE3XgZ",
  "key10": "34xudBEAkPJ5ymZnUy3EWHCwdqbhfiBUJ1u4mAbYWQ2fhaKU9esDRJ4pXWf7iQtG4JDQW5kdto4nBmVFfjM9JRP6",
  "key11": "3RQWGwJ1A6KQskhLTBZfLuXtRFC6FGqzzrBHs8FJyiZCPk6aQSEK4dCD1bHHV1fR249aR3L8NYSjfHRw9tSUbJrx",
  "key12": "2ZE1riQenEPChhsrFJUMKeWPXnrX6VVUTywX7f4zDhK1RK1jfqFB9tLJS2JPqyhyiiy4hdtDtdmh3w6tsf2HikV7",
  "key13": "XJYophtiTKcnDK4btVxRRKAJUq55e6sSH9qA7fZKYmTrD6nfZecxPdQKQJ9HJFdvYU9vySk1qyuTLZEFuLDGUvf",
  "key14": "iC95EBbcyee6dMEpfYiiUTSV47snfk7XsyUvB4qGjWgbeZmAz4NFEBwbTrd4d2wBHyqC4b6CXk9tJg8Fc9HsDn7",
  "key15": "5UmpN1qvLMMU66Q8yAr1P7yqCjxSnsWVJgwfPyfvaDVPcAwP7vouPoVEDareuR54ocoA3KuWjWic5p6ashH7LW7Q",
  "key16": "2Fki79GietQsopPjBx2M9Yj9wJxpXmaMCWBeyLPgM5FvzX4KqykSj9ehiujvwihgmC6xnjdvu7Du3nCMvgDJYQw8",
  "key17": "4jVjZEdz6ccN8EuzPcADybnYTjstCBqgGZ7Lqw1jVDFhr6UZF9puwzH2FvvQPho9up1C76M5Tpxtt64yCouvDVAH",
  "key18": "4bpTzAfDMqE61L22Lmz9u8r4XoWnR17mSWFVDGkGScmJJCXzp82oLU34Zz2AzySMbwJPPA818ona4mnNYY95yhRG",
  "key19": "3Y9RD6HZWTxg5CkSSGdqct5VeVHVD37ZgR4MSuszBZqtF9gL5RL8M3HfRbp9SMniANyB6EPM6S4KHbJpXw9ZKn4r",
  "key20": "J88mqZnCRiRhG5WJpMveEoPr4PiXuhbgjYuvYcmtnPXXzacWYyDByUdcc6tantp8UGwr6cUjmBhLEhZEPewYmQp",
  "key21": "47JSNU58ZayWULoKBbrMqwpnyZ5cs8prpxmX3cTE1yEf2zV2P7FXhiwhMMJrhCh6kJKGT7PcrsBeP3FHiHe5D93k",
  "key22": "3L61prKJvxh34jdcXss5zbEvaK7EuxXV7683ytcsF1zpjiKU3x3dUJM7MnsNW1LSqnDZNSyQAUoHaRKsnD2g5HW5",
  "key23": "559QsUjyTfY9MQ92gJr9hQhB99fiGyBVyCuKTPDQYFzAFQgF9q5BLpHDCzm6XKgLcEguFzP86X2FfuHHZ1v9DDhC",
  "key24": "3j98NQ2s263tazdV2SYWPLgNdcqHMAAYud79uNSfNmDVTMXRtKjdYB2zUhedbBLfvQdiwDyXHcoU8zLJZP9D5Em1",
  "key25": "3Yp7Nwii6WmrdtYbxsDeR2oV7WbWknbSKRtwjdNr8krgU4QKudUwpnZGCqAXcSZVokYUkwgJXEKKt57V1hWgPQ6E",
  "key26": "5wPdzbfUGQ4trXAZXmY1ZBhgB3ekH7eNXPQPX5YMKZa5Y1my8R4786kJBFLUqjtf6FqK1WAPvLShLjj7yUc12H3u",
  "key27": "PXXwnTz4iPyCT4XEoNsgu7bXCk29KEoTSsqacLBg6zNUU45pS92opVUnRom4F2JWSbTedt4mzBWXQhBBGefHqvs",
  "key28": "5KdsQKpL25LtwtdftodWZAhsZbwigFDVr3erTaeEDDZQKpJPA17oSPmtiGS6eTQ6h4sqCuh8iu4yzUppoz7swbtR",
  "key29": "66PfyJVCWHDq9mtz58rkYRaGfSi1GJ6NMNLE8ovZ5FuFD3EWvVXSTq6pc8su4PfBKnJ1dd5g9UqNJMLTMWHiiV8m",
  "key30": "nBti1yGVkHwumHmhpPifxVsCLdK9gNXoubc8C82p2yvcFSRCdiHpwCqYms5rSkhvGWcupTdV6rC1GHadBxJDuip",
  "key31": "NMpJzRUNdv8muyhSWtyKiMRtfUVnn1rsLy7zAxwDfXtFDpvDDZCtksrQabnvUJVJfDnNJyWgQiWw11MPtoBWQ9E",
  "key32": "58j29bWiC2fu86FRXTtMMjhxb34FNANRzP59zqUfYBVefvXTtQCQB68YcV39N3figbnNW1RgJtHtDeNBJr5Vtm92",
  "key33": "5pqBzEciCXxtE8S36JDPEfTZUHVpm7gZdc899BWQ9AjSNUdmpEBKjPLNHuMUJaLW3GouDojhz5B2FUq4deYUb8Sx",
  "key34": "3dpxoNuXL21w3szkpY4edLVapwNZsYpgBFs5ngoHVgyWbfg9AeQGHvEpoDCEhEVMsr2zMZNZjm5XnNzaVo5J65xF",
  "key35": "E4YkUQCAJ1jxxcwAoLRndby5hse8PTTonrnx2QT8nqDEtf5zpBV24AkPZgLGTFCZcmAcv3iQvQu6rLm4adKJMCW",
  "key36": "2iTHimmJmye17G2LwvTtnB69UTEZGwmYBE5z7qjEwTG4UrJgLx4nn6SuKfx7oBExRY4xUQWNHF1DD67ABRZ7tmjb",
  "key37": "2fpujkQFYLZGYzhCeXMZtCPtsnFZkgpeZfPmZW1kK9TB7qJa7dqFa6FhfhPuX8D2kSpakYp8k7bxeH1uUcFLTTgs",
  "key38": "33Urt8pmzfc8rF9JPMiPSZ6zLmXSbKVzVES8HLNr4Eaee1cg3Fut44UNVAcjBLDpV6FND4AFD7XiaFXrq1uK1Ggp",
  "key39": "3zbxWv4fnu9214A2j1jFcCjWKr3KKgQYCGGa6fKEGR2FKZVPfDJh1vus6w6ZdxBhQFa4HNwLW3Jn6Gv45xFyW2HB",
  "key40": "3waH1i9w8y2XWoHP2kizYhWLCUm29TQmXBcqsnfh83nKNu3decpLx5ktsKej3hid8NDrdpSwW8kmaqZQemkqNMt9"
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
