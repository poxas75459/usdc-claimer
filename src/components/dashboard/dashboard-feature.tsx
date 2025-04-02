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
    "4gdEPN22TT8pq8K5pmx4Gg7oYEvetXRz4Lhx81PJRrq32V1EyMtmiq2mq5Kvfyw6kXVLBwjFCxjEHnjSJ9PDZHCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UenEpGd5cvvt7Vcu3CG3bJVxQP4CDUEEay5THPxkMUd8HRbgqBcmSVcxEdTFAFNqgDhw1skebiX9nHu37dmqjaC",
  "key1": "2MwYrJFALqkJPVFgqXHnZvqQkuyuBrAFXBBoDKbNfPcBqeeBchF5w4ZjzEHrUSx7Td9HqTT1nkdjaBUEQS4vSEpT",
  "key2": "2DQJ1QAi9cHXjvqV5sdYeUMcPWHM19rLh7yxnzXtHtmYnTvSBHig8Csx4fmdaMGhK6CqtF5TgFW6xmVPeVfxAfGd",
  "key3": "4Y1K25dCRFsP6cRMBJpMFwBeebZ5GZnu7aZFVCsf1Pkkni3VNjfmCXRL96hffZTyTxe1fHFd6rug1k5qmyWDRDfZ",
  "key4": "5ggqWhh2WTJrMbiVoKN9Bgz6396Pxo94xSK8139YmXNUQFDbFobqvpC7hQ3rMd2Txz5SJJVtn1MbYZ1UJr4z3LYu",
  "key5": "4s2CosHvFbAMScNdAH45BeBpACP7p8LmyuNNoF8RsFihNVvS5zam2Z5ELr9vp4wfD3FXEVAbE6HThCtYFeMXVS3E",
  "key6": "5TPcRNHBYLbD3r2Lx9L5U4LcioiqpWxWY5W5mzzAJLZpwo4ELnX1fKQ1KsjVfN4mDGg5fLqC1pC4Souc8Gj5enha",
  "key7": "3NgeKx41ZRNDp2Vub8UeaHwATtJySAiCqQuyi6i61u9ZbRz22FaPzwjNAoE4g9SgZi2QDTNJq3Gcnz8Q5nvYhVqL",
  "key8": "4KZDW5Vs1tbhmr55h4q8mgxML7oeDenuFvnAszDAULpJHb9nAVnzGzVEEVqQqYdRPBUBx8M1ANnMrvKEFsB2DA3R",
  "key9": "3H8Po8hE4t1hSwT3mVxYP34FfoAkvE9Q2GRqTSuZEhgg5Q4FWzJmpmLVu493B1i6nzBt8rNMJ1rguwsgjA5soLeT",
  "key10": "27ApmJxnPe5XfoFiEQ4J6LoGgpTJ1wTSeGwyf3gJx1c9bEUxegHkRUjRoUukZSggz25HXma24FgcDtYfZ8YE1m9S",
  "key11": "4x3AS3puSbVSaAiNXYmsSxyaf2rGv5JkKAWECmoDwNVgxJhbibdHbKHpcNrZVL6gXFGWxDDSfjhtmkFE3WAjVVKD",
  "key12": "51R1vMr8RRQoqKAvarqQbKu6GKrnwnC18RqjbazJShsb8NLFPCQQ7kV9hfNtCxdaLbNySGP8MqjPMphg2AeXqhXX",
  "key13": "5ZAubzz9vM3Tsrofe1xGXtipcrocdEYufQTP5aGNorH8BcF8kEX7qiv9nBtAsGNDxhakPb3zgWQVba26nZF14ifE",
  "key14": "2feodDMcSA1kX5WMipnbg79ikjUwLNDtMdwdTQF1dAJZkNKiTb4GHMJa3i4jbM4Jshm6oNgCuf2MttLN349YqqQN",
  "key15": "4uwsJAKaYTbSiRhXPePUDzcNchhm8n6QWwQh2VjCjHF3ZUYwxaunVmc3Q7jioNSKjq6qQ1tdz6Zh1HNHeX6gLcfe",
  "key16": "YNmvYtQk13vbJxftxfyWoXamgHWWY2UniK15ymYkuvLGoT6dVjYzJHaTt3WDxz9ewo8QeBEGsYgFWSRN4pTwEJU",
  "key17": "2a66WR4YLrcnDuw4z8XYfmVqqdtnSE1CBEgQm4SdwR3WwxFr4GSw7iv6LyE5PjRWUz3TFT3PKmtnpb552nyj4DRT",
  "key18": "5yhDsLbNkBJLRwgoSCMhq62n46aPj2BNJj7D1efdSUmhCcevUiHyKvqCitxRsJGHDabPEgAw6Yqe8msdnj3oqgpj",
  "key19": "3tCW9r4ML2QwM34AyGN5FDYMhS7CskGt1G5T9oV4pbGiAijvKJUbuaw7aaP6qJjWJjXFD6QH9YkkSwUr4qepsT9i",
  "key20": "WXQTbx3WDKNhDSx3aHJ5wn1sqgvyCE5PXavwWA4kM1K31BMFDiqHw741ssnqJSZa72VzQm594tFhNtUYCHMXiCH",
  "key21": "3ZA7qc4dug2TNJr17R24xYYVK8LgNSzRxGrfAnV6S1tB8CkFyzK35GJnRkpDSaseCF8spb6bkwf7MJydSsi3WnXq",
  "key22": "fFVH4iFex8E4y6eDBhwibpmbKgM5N5yAEW8C2LYYgiPA5HMMMtRsSsDWQK5iw6cUuWuhSbn3jAznoj9TrS6Lk5u",
  "key23": "2oj6eUQG9rnRB5Aud8b6X9shCr2HcsQ3LnVRArbxnbWSdhLD5KzPTauawjjw9Ex8JLji2grtUU1AqkXsRJmAN7uA",
  "key24": "5WBve1sjGbhy3ePv4CofejWTL2KPE1KsiejbgUMpMGVcFRWjSaCgYQticPZYj3ukZX6hh7Z8sKphqtp8kee3ZsKE",
  "key25": "286WC6HuoecvWzpNUg4nah1MRbdZ3RmTkfHGMBNWgtXtyVEE5MGwqfbNaDugtL7gVNjunAovAjaS1qYM7rn9D24x",
  "key26": "5fFi4ph36pLD4TtnZmmz9QPyz3JH6hH7XHENzU69czWpXDrBptsMSApC2akf18ghrRQ8MhGvmrqChhXd52XcQyDP",
  "key27": "4VJkGE1ZsFdonyRSbK2LAZNWvNpy3neAajUKxdBaavkEYv95mMm8b9BWKirqa1hTdtjv1dXYxETBN6xm7VtktK99",
  "key28": "5ftj9BaLS5REwscavcTz1jB6AztLW2oysA7KfHWQw4KRjiUq1DLDCYqox7qUL71CuDFnYrMu7gTBDvAgC6ockyvn",
  "key29": "5XnbP1iQVxyQ2KPi5aYx2XwxSEan2g5dSNHhzbNdkB4m6zi8fFyqsYTdZF8T6CrteGj3YhUxBa5PsLYtoTNtBzq6",
  "key30": "5U2G1XzuPzNvnwq52uPWzxdqnba1pQs3vpvZB7WVsj9AcrA4oVFQG77thfPSrbmSKzptroCKEdUa362BfyQsCyWr",
  "key31": "5DRKrZ7Y4H8nDMdsJuNpdEFXJSwK9zTF2kJRDYkdgbQ4rfsLsHJig9QLWSPQgBjZBEkHdka6mZEHuEKXx4sxTFEt",
  "key32": "5rWhVyFLKseXmL9qgwtyZg5AoLnU5qXpJA4NhVH8symK1L3h5zyaPq9g8HoY9LrbbFE6kdHxAvYDNEdGUzP5jc7j",
  "key33": "2W5wZFBNtdvpj34bX6wCyyAfaaUnrxNCqNGDACgaUds4dCJ3STHS2zqDhgm7zcpS6LYbatnuQytifiqdTw3wABs8",
  "key34": "3mC7FW4zMaKbTzuNvwWB4vkcuCfX76ycXaX8G4WmKHWgwn6zZPTi1ySKo4HXc7nG4d2CZcvrqBLX8n6Mp77YnH3K"
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
