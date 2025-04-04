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
    "2ZNUU1eUWgv4gJ817ub8o2aB3a7oAYCcJmW4tJbRYZufigAMTEQkY29zEe9H42bqBW7h6xGcsn8N8dG4NecvXquR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dQwXm83DQjsGfdSEuExsTHVpfGd6x2d8DqK8vPA5QhyHpoZHyD2V52mWPzJqF1WFnyJayCXnrdp49RWDvcbU8U",
  "key1": "49JZjbHRdQEzB5UES8TwYbnQq8qJwdCjUZrwLyHbHK9C24BUvt5yUgd28YGM1EQyL4SzZjdXKg9vHGvw1v12wNd",
  "key2": "2yosm4TrCSyhdueJ3kP2f3d5MoybW6wiirQ7L8D3RqULWJfPPeFfhji4JKLB6eKB8UuZvijFjVReRFEZaGsRwHru",
  "key3": "3ofKQZHJkBxk4jFswnbzuY79d2jArSoZASw1B8ofMW9dW2ySGMcNipGierDzeMhpcAoAKZiteg7xeJ2gtagWtpR2",
  "key4": "2S6r9qRcmbdifhi2hkrKNC5sd28FRvwBzstL1q4cQFytquxdBxEpzQ8WUK85SCig3cF5afmvd7ppjGTULm5Qtert",
  "key5": "3Bsq8C5Kt48ZUG9PibTBWw7yYjUBQ6rXcYyN4bRmEXq1XYdhdFssWU8p2ahtj75hXQ7HiVyXUF8MbTFDJWsTd5E",
  "key6": "5Y6QGgnKNNjy4hqmat1fwN7TT96Y2GS3mw1M4h2edSpS2HpGcvfqZZD1Xi7dG5saZMB8BQcPSxXR8p4e8EwFrGoe",
  "key7": "2bJeisb68d5A1rYRZcLjFpLs9QXkBJT6ehtxptu1nSJmv7PhAYadN5h5piV17dceBN5gP6eZ8BF9FjxubEiewihs",
  "key8": "4LbNDtPUMAGZPGrtRVtvhsrtrVVJtEL8Uyzzn652G8E7B8WM4K3Qd6U4oJuozneEQnS5de1UYjcP51sYJQiFusb5",
  "key9": "5Xcf6YTgumupv7yMbRtNyJ5Guf29Q8nQ4ZUCRVERUnWGoAVAQNwr4nwS26sFMXvY4gKyHqyjFmdGCyVdZHdUYaMk",
  "key10": "2dDCMzxtjPb5ox2T6iGiG81ifHT9zBooBUtfS89Nrp5Rvr19gT5Y39tP3Z8wE8UxTyrDtbq6z1iF9VRUNkPF7hYi",
  "key11": "8fp4LA4qvBGuLrqFBzNpkCRTRbqAHEViR4qJuHGfgZ7FcWKmegX4iJkLnkPGbQXSsRrHcqPJFn4NZmfTwFFDbBk",
  "key12": "49UFB72o2jfjbqrhL5pRowZkVRP4DN4SW34NsDCgrF6Fru17dsWNkrnKv4YnUkRXZ8KRNJmpCr8hd7vpy8TdtSpn",
  "key13": "4bF6pe2MwVW7xHkGRSs8GUZUfopP5QTJe6ujFYTAi3wx5gHi6QWmH7hSuQeKBpB1FNfRUBUW9WuLbE9w3c87svQc",
  "key14": "cZizTQZjK44onFa25BhoxZ8nW8CRfk7jFBncV6BqSRSogpTdFmF6J7gh6CS3CuqzqxcmsFRJq5CsgFNuKLGPxPA",
  "key15": "2DiA2PPo7jj6SEcekgpEkTH5iR5fjCNUneh7ozJPdQGqcbP9LRzt4k3xp3jyaqKNbw82RypSn157gUjH8VzM3bnv",
  "key16": "5jVTXBTzs93Ywa8TkB9LjwcTDqHYLTL1L7yjhvCPQzGtWPA9xQeLNhYkeCx4MMpBJKBsZ7ZFYNBx7gHKCPexDZDC",
  "key17": "3kwSnPX6JFVyxewQpF69vxtUg4NWgno1Ff1fKwGRbtSGKeXEJ6S9JWfbWGB2dYxWmViMHDtwjT7qjFyeuwqSviCp",
  "key18": "54QtzZLQ7ZgUXkbTR5ve8CDGvvykjLEXfSYhV9gx3DLER6LF5yEJnMy31srNi1CZ64qPtgG38DmW4pjq9McwFw87",
  "key19": "47LrdKxQCtT4KNMJxn8NK1nU3apBEQccYHSUdyTFyyzw7p6GG2FLXit4Wu9vZ9ifS9Wp7X16dHaU5uqJK2bioKWB",
  "key20": "2i23zAfKiNA3kdaexHfktetAJu2FTtYjeMU1s3HN2XqXVpSaPwXPox8Cye2y5XTQYU7PTwxfTKuBaWGQwGB2Sz2b",
  "key21": "3cj3uUWZzdgadWYvhrYKEGTAcrDmpygMBY1vLLRZsEff1QZVz8GKjHQot5yPeYtjNAkk5wonUr2hngAq9rXNuUq3",
  "key22": "4Mwmg7HXfhdhBNMTftoBu858PYG45gGmx6fMAMf1k72LTya6aoPdJzLhbBekRT9eRvjUhtAyNWFp6WpcjUhvf85D",
  "key23": "4zpVeNjGs4uEVfdNih2aPedK24D8siRo12Ng7FLYfjfMoJdC4cP5iuMmZb3ymo9W983EQa8GG47HvWubUqQi63tH",
  "key24": "44SkwNRpd4L8pp84b2RGMjNeyQwRML2gXNMcGKNoiN4Ybuh2d86Z8ohhMH1MannNU49CPWSaFXo7c3Xuw8x8ZZ5P",
  "key25": "2vXzWkFHL3SxDNVSDH66eUEcX2QX4XrK3d3bJnJ4JjsubbpWjUD2WgaNWDD3wmgJrTTRu7Q6AygU3ndnUXxLLY4J",
  "key26": "4vSzTNBCwKZJBP1idtq4oZTRDAc4hY3otDFadBmHvkSYqARoJ9FxZoSTpx2JBTK5EnPUkZQW9RhYvaBXJX4nXHkA",
  "key27": "5AEEMAk3MvuhNh9jGwedJ9tAZLhMHUKsWBo7g1oGoyNTi6x9fwVxKwoxatC8Gq4Lw6ACygNGCrqpRAEV8txK1U5p",
  "key28": "2i6QUeGrnarwoDv63pjcWKd68sqqXaobgzCgrHM3FaLTXPGbs9B95jWckMBcVhNdBFtsNhz5abEPhth81wGVNABm",
  "key29": "52exLBoDA7yaQxrS76U68ExciSsS1aT3sts1mZVKBWUNQqrnymjhcuiNmf7aZWSsTBByNX88WQspDQPnr27Q7M6B",
  "key30": "3CjcZmvrY9aKXxjgUoTh63tPM6KGv3AjJjKhZisbyzSjyhcPHmc9xrBDwhCEitDBnXm4hZeskEPZRk28R3sDuYqM",
  "key31": "3hqigcQppe99p4Chp6co8v5ZhmFJpjy6tka3CLzNqtERjPJavkefJSjPHkMiBDxALZrx9hXPqExZw9ecKEB5qnrB",
  "key32": "5KbLY53wpMqajuoLfurJFzfofVytJGbqdSEV6ih1CSCZ46oKtDpmMY6iR8YhfyPAPPrF2MSiTkvFdzMkFWjov7K8",
  "key33": "59umRr3m4wDB6CmYD4U2QA6cK6oVC4mfn4chHqkYxVMRqyvEoJ36PCtS2YCt8ppcKZncwJ7Y7A1Trva2yBQmbU5X",
  "key34": "3AUn7bYNu4meZPEeuq4aP9pQ1FEpw4VVXYCYKf4HvU7qitmfxnqrNNFy3sLJGzhgfnETtcr8BNX759RkQshAmS1H"
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
