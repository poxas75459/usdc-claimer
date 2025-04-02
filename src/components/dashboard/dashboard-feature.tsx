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
    "47KZ9zkygdRejh5iyLtd3tamWckhyz3WZ7P5HVgBKQLxMU2NDCdZ5kaWGEiGkNvDsDfcxs7g5vbygXnvwQWgq2jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXmvtNkTknRtXgGAX8gwivkQG3hzB3hyYrqZnEGpZDFVGwbMAnrtvW7p6brU9trkEMB6sHYTfcZVSNuf6ACA7J5",
  "key1": "2GMkvnztg1idLQKEwusx28X4PUYoajoZkVtRjLtJK1sG1dJkBMADrWHbV5HnZgckSr4oEyKBY3XWcfejNFxZDixs",
  "key2": "5QTYfxkzProWZeJxWAfw5zKj7zhK19whdwS3s2Ae7eBWMEQ4R9PqbSbCKi7Fgy9xXwYsctfxNyZnDnD4fkiNZESn",
  "key3": "22Jkzh2e9w7pmndYSfwp5LFVYr6J5m8rzLeHQBrum8x9dLCp9D4ksknMMYwfUi2SdknMR6GcPAPgUKfdCmnANp2a",
  "key4": "4qV3TxVZ1MiVXm9k9x53RbnKFebAnV9MxpnjtLQKhhVZAcEdG7LcgFs2hUarFZm6fhbLXgvFL8pev7z4XGDyZst2",
  "key5": "1Se1eB6jmaUwT66J9QBau6UbrBRuLWQKKtvtpqMnz2hTNJgfn9q2pJwdKPfN6imNXhrhsXEyXNz2qGmEFAv9tSN",
  "key6": "5afZimq57eVWvhe7Ds3sDJq8s4VUQApQNNZKJtxHA6RQTKCro7yeS7prje2x3kq52se7VF75Q7SpZyke7bxjFFDR",
  "key7": "35pvXAdRAJuLXQfRa6K9dmAhWFFUVTdL7bHMM8AUdVU9zbgywHjymC2HcuHWqpEgNSfUS3WZjiswo9vJWYnEnkbw",
  "key8": "3aKnLUKAJemvYcxRybhaJtbZ1CGidauUUZxHML57cusK6YPqQQTHDgtwYhdgrTFZtpWZnSsbsmNBjRnXpinkDL5j",
  "key9": "L3TLaKyCKdKFK7e9CK8mDmX3tNAKXhKLkb6feb3VfN1cdWhpNTJJX7EQZK6ZQe12ancqcyXQgvQJCrK3H5LChLZ",
  "key10": "4UGH5ekctgrV7unVBTxMZPKnAJf42rgXn6Wf4upt7rmsAk2NMbTtA8m1qGjztMJxwQk1WmV8XD3EdbH9bVYrvSVp",
  "key11": "3r7rak2gsQ4gCGnbGewXmKacSPUYP3xgJffCAmkfwjCXbSovYmEkKFx8TgQQ7ynBqwiyiGZxZsKHmkYEHHzmJF8m",
  "key12": "4QAR35GHMeRVQ44wTH6dJuoCjvzrWFHGSZ9Gdeu57aNbqqvCX9zUAtYhgqHiUKYxCgEhoUgQhhpt4MUj77418GtM",
  "key13": "4p2DEdRNDDSwdVWYNiDGczAZpw7hVpVnRUa28QfvQY6nWZDZk4JkNMP612XciQWzMeKmfQXipU4fpHrrfY1Qif4X",
  "key14": "5vQQrm1NeiTpdE5R1hjiZumtPxT2m8r5MKqXo8dTaUK7SnvRif1oTW2cWK4rATEepMLL2UyL8L5oTdhcrsvwwNEz",
  "key15": "2A5hJHvK3azDri7WQtRd31mjay9rEPAkL81zGg4L3xqWxEbq7KxheqN9ar5zR5WdS4oTUHVqkyBJtVRyjBJR55ak",
  "key16": "4bysTLbSCPer4AFskCdcPJ9M5dR1m1VRVoLj8xkugdT95NgUPCvjBVmQnr16AgEmoEicqnDCmrFdeTHcEwSZy2o2",
  "key17": "3mTPUBjVVDBEg25rUutA2eXD9MQgkcLTbLozu8Pjg9CDDfBmW72fjGJiA9yGBEKN23edvrRHUNbnJ3qkRVcBZrNh",
  "key18": "4jb4kLqPBqAiea85tfrc2R4X2TAHVrazxX9dadMdziCv3xmcYi4cBdpuJAfa19A8t7joSLWUuWyZegSDSWo3P8j9",
  "key19": "YqDjqCvdX9pr8Eqbtn7uiTApYhTbo4qguFrcNN4NGiuTRUEwzNRWytkTb94qjb1t5iB16r87Xj8tqYXpyMoigfP",
  "key20": "4YC9hjYWREBTJgQ2jX5ghRLkpfHMW1b3DwRQGfaf118WMipKiYjrFLi82e8vW4Tw114Yj7LriVrXGEb4SXGcHoHP",
  "key21": "3xA4eheH5cjsGhaNvm1xMcbGSYcyVpxqhJM7oFroHFpirdrciTpJbSGang3hLpdVpEjjfw64kitr9nwG53mFKU8x",
  "key22": "P9aGoj4j4dPReVnAzszvRyvUs3aeEjZ3C2EovydUvJVsCQaoHRjh9cEA3D2uwUWLaPThLW8h33XtM7RNQNT5zM3",
  "key23": "4YqSXwqTyJhJK76nMvbo3K7E5YDF6kuMhzDG97eHBsGfd5EnqZHKa6TXCR3K3yRN8ZKBUb42nQhDEHChRgpN3j4M",
  "key24": "45f3osZkdLZo6XrHNWNWFHTTRqaJhWDYMZDyUk1wW5i35LpUgizZUpdaCtnsZfHNSwD6XRK6B7pjAmQw7MsdwPYh",
  "key25": "47NvMQhQZETZZQ9tafnt1Ld1JwtWo65f3XMqUbq2RgeGyHD4AJRpyCXuFzSGfKzAD3BxwyipDk1YMR8CmRiCuHUy",
  "key26": "LAXKawmGFXcLng2YwaEEQBbNCJtq6qs2AYUXWRszr2WNbUmwpWVDDqqSSGbF8J37qaRTY2nktzooZp27VvEa5Ka",
  "key27": "3MKjTdTknGiqHZapFAiqK6FHhGqKnEeUeuqj8mPmba6yWyd7Qm6wSfBexG9pNQPZ92sYvsyvaWfKMdUirXzDdsQm",
  "key28": "5QUjmgGTrZMdWq1Vcr7e5ZH3f3zAVeHPqc91cuocxE3SNQoQ9QofLC3J4t2rRAeUfWrwj2G8UjM15P28cLmcdzqG",
  "key29": "2RH3SExCsbU2FqXShd3rfmPcHAXBDtcUYUFHsdC2dgDzoYKCSGiAzUrBrXKLTeX9o8PF6gJSiAj6BzTQYDkpHrRx",
  "key30": "ccUr9VX4AEVP7TE1u2fBrmQMWCKY5SSVQaXKKEFeAxRWX67JaYuVuq9PQpozyttB4BWDrtrNrxXs6hMi7JAsjS6",
  "key31": "4aTVhpxBqKJXuVhtN6WwgoKvSETzoGZU9fREkhGsgVEbPF1bLrwJvRMY9K5KpVmR9TsezQeB8aA8yXmgy1nSACUK",
  "key32": "ZaGN2iAYJsnDbUD2By1AkjzZXtMv8ZCqNsJFSrHDxcjwxPjDgfdEZ7x9jnmm1QAzK9ubPMVtBWXaMTyp7hPiYKj",
  "key33": "cHAExDsk8TjibmcRHxzZbeZNPnPXmRdKcjSu4qkw6qjwquPP1c9ncXtYfhREywg3TJBBSeZCMbc7AtJd3Se6wkJ",
  "key34": "3XforAbx6f4pes8hPspGi6XtJ9NWzBEYRR4xqamHe4AC7miPEkmBD7khHNeQkSq3wnvzoMyd7U1peDY6U13fXMD5",
  "key35": "hhw84uoMSWG4VLt3jDzuQ4KhLbaWVnxoNhkbX9vGofkYmcdrhANJfqH3LqVN6HAqtfaNtq34DcGPX9pewJqKwZn"
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
