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
    "3a2h4tGj537iFFx2nGDsRvyCoShjGMQAHeBjtuw9pJKhpNHUwYear8QFVwt7KDefJXK3LLBZHiX8h8h8L8f1ndPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wuyg4uDtnR29QwD6HK5FhdBWfCSCooKrSfqhFjfFVmrBxwqryjfDe2PBJBkRBGuLfet1BFapYkwN264cRrYwmQQ",
  "key1": "34G9VTSVskGAZhWDNkg4Y6J43Eny6KU4eJUuhYe9geJfqxYDnZ7Sc9J1nrAKMuYstaFeyrk7885MUeG1uL57FFcB",
  "key2": "5v4K1s8WpnLh2idAffPBFyLp3ZZhLN1LCEXq9aVAacBWA6xJvgUu2bHGAwbUVrJ3dFjfRF3S3i9jeGAaW7SoLCpb",
  "key3": "5HZh7FLacD3QzUeXx5bJ91d49hLujS5nPPzUATgqWvbLazm7Rh1JKQz2zUW1bNjfqUZ3Mn2gGtJPon8kgGyqZd8k",
  "key4": "55WMhfujxNsbZVQfXj3uZEP1Kd2T8p4HEky2mGAy6TtKLhosNFWJnMMY8zxhy4JLeeRmW8YxXD4DwAQSjzMqK5xP",
  "key5": "5aCb8ngoVyAwXUGtNFgbJmTonMA4UVf5o2EiJqSNTuVHbg2tPUxH9D45MPRHDofFpDAbQ5g1HUKjMAk513THEptv",
  "key6": "4HTUjGf7ykwsmZohysnA2jRvGJrtaf1unEzHbFEQnRvaTZZeChXoZNatnQzFd1GRzT9vmtjqCkawPdFuG51eP2Nj",
  "key7": "3LJWUPMuNw96nZwjiA4cmaBi2jcM7VzhQHxauBYrfGP6zBM9Zts5SwtB15WoTHGBUoqCo4tJi92k2RCHUeDKW4ke",
  "key8": "54cdT5amBTCYhy2RcWvtjMUoC7RCNyLWtzTXph5CTvKr9yHJgYoCpERfoyEsK65HT9pYtkurY3ucRAf6YPKZEn1Z",
  "key9": "2wQXHALX7rPQ2gDPsvJQhmvC81qFXMCUwGGPvLdx7JzacT2ZAzgVuxQFaHGyi15dDFqkSUWjGm1X8CT7HPLRs4cA",
  "key10": "33gnKPMHDBkkE2yoNyvrHMQzUqRmkn8CDFgWGUH5Nx4bTyxiWzCB9stKDd51cD1ChsiLPBFLqXPZrcZdvYafJb69",
  "key11": "x3XQ2UCH8NactswTtapjzGv8pewNASCaGqDXfsS6N9eJJ1YRM5qhJWa6TK2EeHchVSNmz5Ng157VWuXAkKkNNPU",
  "key12": "5WEekYzta8P6J5GVvTLwWpqZaNH5J7pWEqP6fVjC613LqTf9MrSKk3kHfwJF1DThDPMF9r3H38XotUfqQtAH1pTt",
  "key13": "4pRzWaxRJpig2QVZiz9G2CCzu3Cx2ar5sRzzBuSZUNaV9t7Em8TG6ZXErvGTdpMhyME857gsJ3cBZkAm9M4Q9cBF",
  "key14": "5cxDRikSYtMAVTJGHnJ7oo4MNnBHQgsUVR5eh1aMhLiyi36mTu6gZGGSe4BaAvmd3mGfu3jeS1c3vSjvQ4xbQfFD",
  "key15": "ads33L8SdBXPnPCeowmXqrTVx5wsZvSSDbi15NZJZYj3vstNe6P63QR38rNJBXXJ45kTFuw7AdbDDBbEHFohb9X",
  "key16": "x1kWbhuxRBFojTBZ3aWupkbtuTyX9e5YZpeYmVBNARKDWFNktD4sQPt55eygg8xmQ1LVrQee3ee6cQjMQEdt2v8",
  "key17": "2bQ5iZnUpt2cdiJTsE5Uz6FnrPjnFFZuumjeWcFr4EZMZNUDXf23nNdFgNU6mWLWg2Z9qZJYMnuVEAKLiS1AjLKD",
  "key18": "6ZUaKbaCqRVFWuUMpx2GazRUe5hS5DCJg3miMPbyJEP1gJLAn11Qa7qHrcs2xTLXjXwoWCqSSLgNzoNkM16Lst2",
  "key19": "5mN62vv7kxU5AZ6wjcjv7UBUE9exSYdorSt3D7BfMBVztFBmrp9Zb9LdbT34DS9ZZFZuPGBtMG1kXVfzvD4MN2ZA",
  "key20": "3Ve6y2r7JuWLDPcdp5SEjPJN2X21u8g5R8MyHgUs1vm36Z8BQQgM6ncvvdhTcUz78PjYYJpectTyFSXrtN2dHZMj",
  "key21": "5fKXfyLbS3532cCaanetSRs7KVDunwsAfyjvFyqXe8rjUwSHHJaPLdyMp517r8X1PMttbzpFBnrsCfc3iZW3MNWz",
  "key22": "4t9bQi4wuVWgMBeDqm8qRdQfSm3XTAfNdDn1E5mkeeNCsQwamUkPZeqAwK7QKfTePvtNg84EHritGWemvjvgrC5A",
  "key23": "63FB5saYqYKsoYj9cpUEmRpb3R5SZCxvxVEjnYXhM6M2XwRSVyDvhoxnL6wNCvqnngu2Qas7gzYLqY7dVP5tuXvu",
  "key24": "2Sdth8iSqVgoKkYh7BVJ3bWPJ4ZQziB7oam3w2WEVxviXcaH95bVKucrX5BquwFVB5KVuDZqxmokCBrocZmwgFzb",
  "key25": "4Ube2KMeybiPWRrKAyGPnkLMjYkjhX2nSVSkAK7HFD6nq2FnFPrdwkT6HerLEH1JNTG8ZhfRNTZrEcXnn4yMm5aP",
  "key26": "2Rh59V452ZZPfsvLzk4UdZEEyFuq5bzoYUkw6NrbBD5fH8JU5bgWefG7o9DCMaDB4mJaZDMFvHZ8S4nJrFJc9jV2",
  "key27": "63KoDZKebGaeSAL9sWu9ABxZGWmvVxBQ8JVbTaWNsUNpTVNQtzBDQ7swKEsTYcK8qrHZBZVyjGNgGz5TkR8MqUoC",
  "key28": "ykUuNYJieC8ze9obx5ssPjWW43NBrwD4LT3eUeexALMpkqoiDqKGBnbxweYVCtdsWu5ijuwLuJ25HryYjNhgBAU",
  "key29": "5TAuzw2QwyGcVNUGNkib64fH6uAeteoUxMh1WAJ1fLY6ktUvV4dinvPY2PgMsGxb5ijkhyvpa7kBY4xCxuRF9S2P",
  "key30": "4eGBksBydh5BXuqNsfzUM8gUYJdSmqs2MutjnxpgYBbj4DSE6X1pJ2LjHZTVNA2M9Riwn5N415daY1XdyzEiFL7s",
  "key31": "3y5iLUSh1FFQFJuBgvSz6nFMk3iUELTBjamLLLPhhR44yfAsG5ujF9bipvx8GbMEpGtCqwqmqBxhZMcV5LgnzKhY",
  "key32": "4AJSEnkpwqiE7RKh8BpzZL1SEoq6N5AbQ8xFGcTvpHAbYqG7h9H1QYXRKCK73pJfkjUGvL2MHhHnk8XeJGzum94n",
  "key33": "mgUSPma8EqVdfbvXurLWfFKUoqygUSbrmgi2b8M6WrRYof2biTnFbpPwJFvznE7Dt4nj5mAsswfJuHYF71tWxtp"
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
