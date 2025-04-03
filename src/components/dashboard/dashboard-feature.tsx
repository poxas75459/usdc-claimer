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
    "4DAWB7zEKfra558Aj56XRGLqVboVnLrmsok3wuSpGtQKBpfAx7AqFfq5DD4ex5iAC33ukusCWjWM5zArTVmEdTGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5f9YPhDVuAtDCmA4VwcWqyMu7rS2eqnSNYpU54R2zSmzmojX3zNsgsxPK88Lrcu354MwUpUZ9jZURSYo5VZG19",
  "key1": "CUiEx1m7TrZQnAJKxhMwS9aWq6PAqrkHs6jK8goijoTav2PjtLwupVPuzX7i5Vw9pLHJQ4X7oqBDHKPaPS5rG2x",
  "key2": "4Bx9RrL6p1EQ9p4Xx1r9pb5xWvNgD5AyD7K3iroiigC5K86yGyE2JbhjtUSSQyqZMQWyei4QZ1nmKJRonmtADRof",
  "key3": "5PwXLbmfcotAUHsKPAgedKUjuMRbTgFSYekxkYFwPbQwoyh5Mgi2g6myVNjraQUnuGqmpHBPGCkmYMekXmMNYyXD",
  "key4": "5pK4pQaKGdR3PZbUmNnJxKiNjKA7Bn7FwA15pT93E4HfHSmgXdvasTVSaERET9svSGBSxiTT6AF689aLxMfHpxmb",
  "key5": "2MytAt3hgw1xWUZzSJsFhLwBbmJYc18N6BoAmTf7jV5FxptZtgzU21JMpmJ6XYd5mF2SGSodb8KZPzLjgtQbu8fQ",
  "key6": "4EW9ykaGhN4d9dWAJ9cMkmhWxQ6kBDXafzoTbRoLMLnoZWRYVzyLYeB2L6AcsmVaEft2xqazUK4dCx8FUV3URyj7",
  "key7": "5ZxcJHTcBu4vsNzgMcGQMzUZaxCPYfTTMnLjPnpbCMfLGn3uYnwpN6XRRg5H2Tpkio9uZEs6jqxkjvKgYBwBfyoT",
  "key8": "297wY5WaCVhBew2jGtz2p1XRHs5i4w1qi94BCJc9KaW57SLHpmPv9kGLCTbr15RgFssHHnAHmA9JduRAuzAm25Q8",
  "key9": "5vPZiKtY3tpewS1S5dTuzro5P6UnJqsbzw3cz3yqM7iGMdq3FP6tEhxrmuPh4uEgLE95irWqD1E9uZoB29tCFNNH",
  "key10": "58j3nvVqRzVab1AYCRNHLEPQtVJ4rSk9KJ8CBXLwhtYkSaDtL28ypd9hbVaNQRBvjqcvrSpr7x5QoHkD1rxeRkaD",
  "key11": "AtFPHsDYrQfwy6PFAkzWm6qY85BSvsJsBXn7GWn275BgT2SuJo71FcxzTdqDtqCj4DaPZfu8tEa5FZkmR7biiF3",
  "key12": "2JHEuYjdfUdRdDa2tP62MmYjpvD4wYz9veeEv6iqctt9KZGVXcyH8BQMfBN8EpiUTCGFVybWaiY36mCPYRmQhdpT",
  "key13": "jbenrSQPwAk9HzgyWzySEKqBSkzCPGpTkpwwNfVq2PVHJB7MomAxdMzWc48qFr4hu33vozEWCwuqrqpxvUGsjqM",
  "key14": "4U4sMhKQJd4CVfUThu5C7tsF9pjh5DyqchrbhFc5N9XWTMec2EqQNYwgyYyfWtrEUQqdT9FsdQRLB8NTZQm95UEr",
  "key15": "3xy4woCSTbcny6rqVhkVnCRNE5DrkNN63k1FpbG5Tj98FFS9Y191eVTjLNqpugnax1wX2bKW9kMeqVBeaM2GDCRU",
  "key16": "3ujjd7gdLpehd64BgvnSEAW8cyPbiF9rTdcBos4dvbVr9o9FGcFwH6osKWWLRxMBUYp7w58UP17DHckoWCqjpVhR",
  "key17": "5LWWomrHeJrtg858LztcbYrJGjXUqHjRUnfGeFrjF8jChje7XYWSs49oNdSj22eEmnxDXiQcweoXuS5CpgN2Q5Ek",
  "key18": "65BKdHsNxYdnWKUvc2jCHpuwaXZSLuqeWSCR3GSGrcRG6SDZtK7HbDB11JjrkUYMvYSVidmmEHjHdvWtDWfjsMNN",
  "key19": "3iwWHr53ymw8tzx6qJjcA6dgyQ78YygQrkHYJpCp6EVDR8oPRMvzReFxx9UHNPz32RUtgZTYTQ7gqQ7dhQmX7cN9",
  "key20": "5HTeLp4K8TSCHhZDiX7UPvhiPjmzuhQSvJPN1ZMAjXK4aTk9wFmiNKUh24J4okPTpgNBZZUasnDeKLWx8djXJvVB",
  "key21": "2Pja1po7ANyTgGAZaJxSoo2YTQ8mtZfexVZQypowpQ29XVYnTiRaunYv6F835yNy8uM2G8CB3rXUEQnxqew7ER12",
  "key22": "5APjMPJC57A7uhBy8sz6SqREaUMYjEiMGKs3ubdsaz4rbBFUsxQy3DDrwgy9bjW1wuqvgtBw2uwnma7R5bD8n7oA",
  "key23": "4e42LfWfw5mbF5epVNSvoUP6nkJUo1j1qUhiYqfG31anCb4oWs8E1GXcaVEVCgerhBFj9ZMo43q9M8sxYad9UGiM",
  "key24": "2bmASPNMK349VuJXw1jtWTji33bU39FZKu2F8V2SLV2UJLhtKRhmf2XhNBQnbQA7zaC1XCNNkkB5uP3W418yWdTY",
  "key25": "4ZRuX9y9QUbzyEXpKWHYpxHXjbvVErzXnLmnhoeK1koMcKRNChZ7QpfvpySvFkCWhwxXxzS7hB53asWo9bz6BN2i",
  "key26": "2JhX4495G6S3Lpids78UVvx6pRR2TNK8TC1uBAj9dp2WmuMJfwV4bLwuawGUMdM3LYAi2gMBsjFrEvhYpAetDJjo",
  "key27": "3v6zCoCTn5DmgsXVtG9L2rFDvGHNh6FLX2KPHWHxXLU4x7si6x4iuCs1Fim2Da5vEZqLbDWHc7MXfxqUd24SY12L",
  "key28": "57rYesPfbpRyqLZj8D7mknE3sQqRrGbkNCtZJmwTYjQTbDzGkqV5sqLDbtRsif19YCM9AcPdXuK23SSLrWTN3Ra4",
  "key29": "412scJjxmumjAUTWAeno8srCwC9cF3ahsVUMWVimXqVBz5fpBrqkKPDm5W6LwnEaxpQvEs5nWAUVC1xQshJnVL6H",
  "key30": "21ZQtcAo9yoNsV8XomcFXUzqrvoHUwYvQ2C6gBKjM2ETv9cgd8Mr8izUjvbQfR3m7f3RH55wnSxmRxiYU766sX1w",
  "key31": "4mR5bqiD2VRvJ1m57xfwxQDHhFNAG1LYtM3mDdNCoNoTxVrcqhdG7McDciKwatCtfFQFFU86hcTvN3qxv5BhV7nd",
  "key32": "5F5hZ1eDGyWEPPg88NmcecMi4q9XhZEFpw53XD4aB32HKSR2CsBvaFUPTij37zuV1R4vvSVfPKCrpP58LRVjRJEW",
  "key33": "61RXu48cKBaPXzRi7v2QwWixsjvy3HZ5JVSbdVsauGo8NfxHPCtLrGmg8W7EBFRShqrJ3tpF9K1ChdRm2YZURdtA",
  "key34": "4oG6Jnteovg5qgEuhAz9S976Q3bspFkxoTvHTnaXcHv9PDaGmDkx3EBg2of8EtD8Q2LjFKrwihyego2azW8jJtMj",
  "key35": "cW2YEovaGPg21LDpLBx28oFH8GL95F2v8s9efHkKk5CSa8jUyCXAtQG7ZYrmd9JAbisH6Hbkxg3WyFJc4QLtjZD",
  "key36": "EsbmAKD1K6oXkKAyqEnw9p8bMJ8hDnCHrkksqWqdBKeW9HFj7pXy31haToLJ9TAfGZYnRnB4akEg9TxHpbhahPL",
  "key37": "2if2m9Mm5Y4y3AJoscuQnf9kjZT8aXQNAdV61S2Ti69HMuWazckCQ9DwQgWzTKtgkDfCpgHgdQ4Q2AmkxeAnu6D2",
  "key38": "4qfd8wLeHGU7vwYcduTVXsmHb1MxgAcY39a4miV4cmywZooaaCniJQ6o1noWErC3rff3hyh7fEu96yq2crRj6muf",
  "key39": "tNbvk4hChqPHTK4Zb5hCcqXzieGbJybZAR93GsJET3h3C5aTF4aCtjc8A7w6R485sVADa2vrny9qThxuJgsMznG",
  "key40": "5jswUctyB7y4idtM3V7q6657mG68BhqrSZqrci7vfzjnnZrugeudJaNu5AgYxuC2cDdQX9mJ8ooVTUGVGwLy5eoZ",
  "key41": "48sHL5bP8sEaVsR3gfFbmGnFYLCXp4GvLABfrUy8dCS7tAQgEJjfLfNKyNFzDeBoKfdteMM3scT3VpkQLyESs7qh",
  "key42": "2caEyrPiahMdubESv5qtzGRoY8N9EWmbqmWR3cHMyNLwTqvPP6sy9VY1zBddYLFfwma7ctiKZp93pHGjz9uqr3jd",
  "key43": "38nK92rYwDKCqRDYvpFrcwLFu21mpjZA2Gqj9j8fvxqhgQjfb1PMQmzfbzaiB5rSztZSwn5JsNzfK5MpXUhXzZPd",
  "key44": "4JD4YV6SuUCGQwtPCU8tB6vioxPC4FjRzmyNozv2K9eEzK5V1hj2FdFtKw8paKE9SThB6jNgJv9iCYX5wLukmAF1",
  "key45": "3B3GbTcZn8oGHGLo7NbC5JTx6Day4xoVj3vsck41YczNB7mRauyQxKeqSJzwoaA5XCh6MYprXWqFeu1fr7a6erCF",
  "key46": "3b9m1ciCaz9UGJfNC5LC21E7GZZ29x8LbahS8vQvixbY14LzECG8Y5W646QKEWasY26UXGdCzH4evtXmLnoZAxex",
  "key47": "3cB1R8pJRyPJJNLibdYZkvWNd4jTzSxCVKwP7nKjZnjLpJKhnyD7A3ubfrnGEgTHz81Qf9CMBW6GM4Pfw3TxUdfb",
  "key48": "qpgbAGdJchDByoJW53G5u22b5bekSAqqsRBghYYXe1sjdbyimz4PUGdPQRuBQwRz5eW8x1PySAzUY5oCZPNi5xE",
  "key49": "5t82wQHXNZEoCHFYD3pkPaU1zdnmxRW9FbsRQ24j8MWe9SET9kD8THbwcCwPaJkuEhsnLxMc11XhTLPS7hmYx4tr"
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
