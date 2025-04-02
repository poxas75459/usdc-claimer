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
    "4nwd3gviHxY8hFRGNaj51nA77q1KSEekTU33kR9s7voUKgRFp44KzGfYB3o2kBJZea53ieqAxjXZgY3epFQp1vfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pXvQVZRGymuH5Qc7b1ye68zCCbtLjoFxmjunPB1PejkDE64zkjf2taszESd4KeF35XS9nXhxzfAoofiLxXq53Q",
  "key1": "Ww6sWmopwiau3JN37eiJgjxnvmW7JJNYa6YwegjFtGVgA1SZJuPBXFifSwB4C3K65tnu6CxdkX2heH6xjbf5baT",
  "key2": "51AMduf4dEYNkjTt5P2Z3m9Rs9CAGmc8VUHuMfn5c92XnhDHuJqM2gfkszhpZ6Ucdi1QG1vXMLP8JBiD1rUSxidh",
  "key3": "4QAXQsRYimoMku4rDbNZ2JhihiEfxLQQF8U47E6fEWLRs2MQpAnutnZv6EruneCsUSxddaDPvMDDyrRAeAygCSQG",
  "key4": "5yhNi3VaxBUDx6fxx5rBy81t8xv3cEC6naL3E1YiRXymTgBT5hsitywtExUkMRF53znAFPQuMpjBGrDdoDCbJXVX",
  "key5": "4uiBKkip2adgxT7DCDTRn4FdxykMURV7C9mpUjGkJNEzE8LxuJWFjmGPVpmcgvQbsNe8LfkhWpXPEzHQ3y2TZrBM",
  "key6": "h8sKc4Y35otXrFzndVyRtuwagYTAPirUCDAPEti38ihQTMVvA6guhBQtibVFKTZi2nGoMpFUiEEhEXnaPTHjzYd",
  "key7": "2z463iuC9W8MGaNt5amMfHL7F6Evgb6inWSHtXPR5EfF1578JmuvB8djEw5WA1X7ro3fqE2WSoNUWntwNXPa4wHU",
  "key8": "5exPECu3Eb49AnHyz88BwmFSWT4Ffh4Ejje3Lm6L1VrWBrQxxjKBRj49413ezkNwQbX8Ya6YWRaPWQhbA8R4nCtv",
  "key9": "2LTezs9ieupxnntRqvJyBRGkVr2H8dBiwhRYogjgjPWW9LjfCrawFx6NrzR8BxBC9Fd8U2f6ruj91wHR6ebCeyry",
  "key10": "miJwBkMXUEUTYMAoVzjDKyyLDyQEkqeXaKq4dFfKWDFtdr7R9WART5oFSLzsgG8vTkoXrQUdxAjZKi9K6DhtdVi",
  "key11": "2Wr9aXMnX22Rd9iFK7DgyiRA7eHkzZAzab3zsvUEMxpqkFoxDqpSbgkc5NFmYvh5g4QMcXaz9dvxYXcHfnFnYSWg",
  "key12": "5V7fqo8tWe3UZf2fADXCotzMxWGb5d3to7y8NXnx7cVV4zutPm5bqa2biBtj1fRdiduyA8z9XqFULRtBteYvPp68",
  "key13": "4HNybxkUSqGeF7hzHXaUWcmKGH7QSf2R9r34FbQH5vB7eyVcBV6QzhxrXjBwyVaQsoaheD2SKTwDTPP8z1qFHpvm",
  "key14": "2y7j1axPoLSufEvKWZKnHTSKoasnthGs8ewkzBPrkkgqcgLhoXzW7g3gieEYTeVaiwAPpi6Pcki9k5uAFSDQdSZk",
  "key15": "5vvCj9nJ9UiYKE7Mb3TuDSzGJCcGfkMmzA7DrVYbwDp5QHFSRhWkWJzMqgQmLoZJNabcJqU2ozEZK6ayMNBSz1se",
  "key16": "47rTEjoiXa1LeL4zmoconUxbtpnN8HTiYdm95hHpN5kxGFGnq8n2BPkjaF7bLMPDF7rsyZPRfW4zz5uuzU2HGe5V",
  "key17": "2DVRLJb3UjgSAzdcTH6MH8JyJUmUTTTFkNVzkRiVC7jq2XV2kr7nAAnBjxPFVgvG7hbx1y9cAB5ifgCUQE49cgtR",
  "key18": "5B5tMYdJU7yocz8fRoQtbunyH1L9MhE8sudewKnhzDjU4JPoyuY7y7aQc651S1NS6bqrdoxHrxqyYomLiE4xxNeq",
  "key19": "2JgCMd4c4x8sqthw3HABNPkz6L99XNfV2bLs5UCvEh3dZ9cBNMguRqLTp5NbNLMZSFxPtRvWecTK6J4zeRqV3Uxe",
  "key20": "5xpMecQfo2PJwqE8sSMJMG2EvEHkc1GQre6B3mkenVDk7o5MXLc2efquYCgnQJno7waLyh6dyRaHmz989ue7TpeT",
  "key21": "cwMHWtzDgPp4oekMemmyXChP9uBstRVNcHBKPv4nwdVGXAEUAzbkKmTqpz87rxkerouCtR2QQwC9aDs2q8TCHTR",
  "key22": "5xy7XWHKUGLDxuU3NLpfdjZk7EBHTeA7URGxyx2sRqzJuwNKnreVH8FCtAspmCoXSibxbvjQrnRqJZvsWiyYRK8g",
  "key23": "miMwD41dfrN7UJwVBKGPgvCBDwkH2hSYUmjmAjMA7pb9fhxZdzznhwM37oDuSTXjxDLnZUFkpcfGW9bLU8UxyA3",
  "key24": "35kFK9mMYNGkXHMeY62AbREToa9WsNoSJjsp984RCBxquFWwdHKKnQtyV2vM7wJoVZA1gcuRfLRNPrHaM4sZCBCp",
  "key25": "4hNa5wtfonPu5UMQVwhNWVkwyou1BBH7ZH6fo28B6JPKKVTP4sKheBK3ku88rhhBxctnSkxUnLDg7QpouzLQW7kB",
  "key26": "5MbYqoM6QeTTGXQeVAoCRmkUqS4xGQH9Fm8UYWfw2thasiALwgxNrkuHKeeS1rWHeVxkMdxpd68KXxToWfJzXefp",
  "key27": "2kxCPpLEAN6kNtF46YUqvPP1vsxRGkqymZBLoZ1nQbaDA6Uq7FH78c4TN2kTqrtdMphycrJqV3VwrMRNFdnwppzs",
  "key28": "6hZToFMNRqeWUwUjDtPqWqHRiMWW3a2mPFS9RruMqVvFvtDBeJws8jNEeWtQSQCjLfWsB9BxaicrWjGzJNrG3g1",
  "key29": "2pLGdrUwCTkzWPMLW41nPFJaSB6T5h3PQL6stuJ4GmU1ayjNkKMhreesoDTMtVg2Y8pMcN2uNdCn9DHNKrtChf6",
  "key30": "5m1KcVs6rzn7fkSMv3cNruEvs4QCQjWfH6ukn52CTERi63G7KNFW3E8c2hjW5NFSYpSntChHUDExpNy4qj4wqAAB",
  "key31": "4hzLYi6AKEXW6Xuyt5bSxz5eJXT5TqM6NW37C1XQqZqiGmhHJVNFBsNtSJqhvMHaGdxLgWtVcceqfuUdYmzwU75q",
  "key32": "326gmgZTZZGMHUyn7bBpYVudcncuCqy6oVAFv4vfyEiNDhUF8NPN3dMzLaKs919oVprDtGNz4UYKkTY3Q3c5BQ6c",
  "key33": "4zp1LEMM2QsvvTpbKpsP7SGomHKKNeWEXmi6KethTALGXPBoHTiecA5nq4uNDPJKzhJTu3J2Lb4mQJYkhFiTyEKf",
  "key34": "6361jXJ2jSjXyCy7yLbr47GR6wHipPAnBoaGuRHUgHwtH6E8htwPar9hdgK1TfFEZiaPidQZBuwpumjmrnmfnSMP",
  "key35": "5yBRc7aj3QuUsonmmmh7eRDxPwTA19GsCzSWk2MD8XHJEo2CU93XtLUnNttycQ8jLhAawgCM1K6Y9YKgLgKWWdkY",
  "key36": "5RnkvLTs4F7hmhbCa9QXHBYwVVe8LUoZ4BYSxyrjgmBdPJyh4rqkByxERA56nCk3qd1EV9bva3mFMmMFYFNDR6at"
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
