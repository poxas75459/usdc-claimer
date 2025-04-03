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
    "5RV8NAgiwAPjVxhpH6uyGv2ZWqmod269eUE7wDS7B2maFe6yGkWFnwwqt4cnkwiWsXb2tfdkRFztcHXU2KDsQYb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31X9cjEHXiP49UHLwv3VDNDJwAegpWNToge3yCFYafQB5B7f1p7JzmxeKxYpXC4w9VfeoSmkxskcoFcQHjHmuZco",
  "key1": "24Ag3QfLEGxTLADjWBVKsimRvqUvuvWyjF4qNhqDDtT76Fk5XpH5CqoUiSSqbWjxQqDH297BdBMhinTef2YfEt9X",
  "key2": "3LoeAXyrC2TG7ypUfPwuWvKWAUUfHRZ6poQNextdherwkNYBSevTD5jq4LvHDsLoQfi9obajLfL32sDugQDeDAi5",
  "key3": "3JFduUzWswkkb9BjE28ay8P6pGuLFSvdu1syko6EjYpQqLdyydTXtP1W7jrxs8KvvQBw21wZhCNYpFJCkQoKBRuv",
  "key4": "3oMM2w2jkokM4Di8gGZXRdBELtQTBVcXXKpKK3UeprQQSg9HWnMVW2qjLNsp8PQDJhDMcKmr9gTnGn4GT75MoaA9",
  "key5": "54QPDTh53AhSBTz9fu1f2Yz9iAwrtqKGwVW8NpRgVXwQk79YBqACUk6sCqiWvAXNTTVA1qrW59N3J3nMYLBC6B9y",
  "key6": "5w3g2GWkHdiGAQKwNJJJmSx521PiQrc52ytoYjmdKD9CpyQnPDnzQyhFCkCjUnUEXYZvTywsTs8URCzzMLLaUUcc",
  "key7": "67Lh1VRkv4nPAd3i42Bv2kvVC5TetwDAUsKDLUBbsXVamTGJMvQHrmMdCtwTYow8Lva8LTByo5h1wMNGy2g3skDe",
  "key8": "34g4mCVsuyBv7Ecwig2NBdi18W82ETAJQJUUxn4HwV4rqZ1nz61b5DAfie5VXmT22hgcUUxdtUoPDdUapiG6CnKs",
  "key9": "2Mroz7THoCCE3CZtgutXSqamxgdzJsKkrqAEhxv38rEu4q4C3Q3NfR8qPo48pghQcG4ujD1zLsQqgCQ4dwXXaRqK",
  "key10": "oVJHGwbytpFBQ82qCu2dKYfUxPsHjTeTXYdTGbAfPhGjd4dBnGik1o1YyRx3W6eXh7K9SkQfXjHCwmGmKqdEYt6",
  "key11": "3cT8Zy9V372T4Ty8qLtKozZgXbWEevxerdS4gMPjACmN53x4KrhzZfiJsH1Xo8567insNPiw1aYD7JQEbs54Wea5",
  "key12": "4HsP4W3osvhtcxabTmDVyy7qDej11aPMQF2P5QUL8e13H27cDPg481L2K9RAuS3qVBW6F1x9A4Q8bx6WZWpZE9Yc",
  "key13": "5LUbYDuQNYHBF8mHCq7VanWc1e4GXtwGfHU2yLeNxNVtozFpQ4mhHq8wniaELBSs16uxFppWTLkoUXLjWjVxvKyv",
  "key14": "4KWXBT2NcoqdVefH4344nuNQAAkKAKtR76dj9XS4bHD7AYEBEuRS1vBMyLCFVazkdMeDGUz7gRes7m99V5H7sfqu",
  "key15": "5xp9w4m6JPm3dREAJPtR9JeVb7fRixoAW37h8BfufA9e2MejzMTd1PDUWy74Jm9bEirWsFGMRjpEjKrrmLGPNuho",
  "key16": "2R8r9pq5LnEd79xJeN789DAhtz2xtu9pBcJqeJekbgcpBjkwtRsfKdczhJTh5sj9cKGNYGvqZqU3jZ3sCxUSwuNp",
  "key17": "5V7JSMYn5KUBjBLDnJ42avymiW2urGrwRQmerRvYRv6FCP4aji92gjnK1CmmpsiH2f2nEBzM9q3L4K2fiJcq4C8P",
  "key18": "MyPM3Erx31wDPmvsdH2e6GVMKqA6LS7i715TXwQBzbMhmHVtSx6dhukVDbZmovDZ3qNMwNND5kw3LHqJnmSxczL",
  "key19": "24fLuHz8gc12uHGtsXPL9xxKmR1g8YsXT6cmWYd1NArD6eZy3Mi1qXs2T8sGznmtFL53rExXnW76gecjJYZfJmz6",
  "key20": "2AWxCuQFfmFzY4tYV2YQCi78JbYcUnLPS2YEXSU5beMkmyrBg8garVdNTJu4ZWWxbVZLfPtcRYtVYWR8f5Gd6Fvh",
  "key21": "4Nfbv2vTA8TShgxdhLXCdfejDE8XBQDn4J4rRTfttFSjVe9cCR3LpfRhED3uCShPk3CAygDyahzYUt2YYkrzNica",
  "key22": "5MbUmgFN7V37ywic5ADPb1fVevPy49Uo5rdChy8FyCcCvLGCzuUNNM18mtJ5gkAtXv6RSCp6uju2PZJ9NgdRtdiL",
  "key23": "G3jpjhp4cA8jSmk1TYhg2z3v8RznK1t5YEU7kibaS8a582gnbtrRj1TjuqPWQhr52afXFtgHkhCpGjkA2R147Vw",
  "key24": "4dvqZrYRHXoX1Tm9vhs9Wa4obVGfRyz4rJmVWgz5SSjnMZoMXxnVjh9g55uVivHb55xBqukQ47Ln6fRvN8AGqkW4",
  "key25": "by5VNtdV2jUv4rWqywxCgxdkXJEJAdHwNr8xMD8UJH9Li8VBRJaMxz9EYbzUVim1pFj83cc67v8xKB8ecmyDRtM",
  "key26": "bQ3SpjbQ6mwuXvFDN3D8Jc9uFXHHmvs5pG3sAfU3evtfJKTqxZxJ233rH8bL6s7L9zj4g3SUEdX36UGUkcCfJL7",
  "key27": "m9t3wUWDKoRhBQrLigiL8qnUxQZj1V3zAZSukg5f7UgnEVrcbQyq4PrfjBQhQE9tYQqJBo2u7PYWEq3hxHuWd7u",
  "key28": "jXRSph9v4TGjYQAD3aaCCGvkEej8JEuffXpw9UnE3P3MUnms2gVK6P4v5ZHCAhvwptfd6qJtE827ZnVQ2XgWHEW",
  "key29": "4BoeYHLpzqJWE9bFq7go4Y3PjjmG9XhdKEWM2hJZv8UcZPQQoEnmuhHmzwcsbFPkYqjBZ3LdkLv7DK48XG2NnUmv",
  "key30": "2bnf8ejymKvS6Jn89G8Bc3kzjjsuU55Dz6jytc17nBmeppSxhDbjtpnotMj7wxSFAfFmm1Gzq13TX9zhcWZDMJuH",
  "key31": "joKm7wqCho1JmqMsMLUjGwoHMYpXKsNstVEKrzfhiSKy8Yvg7HQoM6jvyP7Qb2iC2rzMT39ppCsFXe6ZKG2UWxz",
  "key32": "4MJtUZTg6e9H3tKa6zZwpxtQQy7XKUynwN5UufnbLZ791LhtQan9mszDNmB7j5ywCQgY7xiz5c9aKX3uvu1uvoEq"
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
