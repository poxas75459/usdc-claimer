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
    "PQmkbTgcXarDpqtn2bPy7u72bhDzSvMrJ9DdXxfN8x1exjwht5UEqcN5DUyEhgb7rVmzpYNsudTKi28YeBcDSbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yE5L4AWhyGuMXovqg3j1GRyDLJhWa1HL58pzLX6oL58f58AWXPnnDxXkeJKpKbpZSv8Tinnyd5qYwTFHKQzYjmA",
  "key1": "4oNkZb6AACFyUhJnCqGut5aRHWCpavLJkZXxuc2fJnjUSrDteSQiJxiQrubqhVKAq77Y2JoePN4jHffAoTLrrzm8",
  "key2": "kbxquJTQzbm68NcfWqQcZeTTD71JJwcJEuacT9gLi1nwm3UXA21ZaK3g43KdZ5EwztZyQTAZUd3gZwCbKb9rzW8",
  "key3": "2kaVahFVHaefpqs5Fx6nzsgPhTVQHPRToef6AE11gDt1yTNL8uz3jSwdWeuBJrif8G98Rwyn1idb61yCtVv5CMYC",
  "key4": "ZWa3ZxxCSmDfaCBqrrC72SE8f7sgnVCmD1KJMi2sMu3NBkTReVPQnUg7MMwRM9v4o5beeTS7gi29k9NyPYuQMQv",
  "key5": "5H3urd1tTv9dSF7foDkaFuqNwQDQseMztG9y8Xe5NJT5wALn9HSWWFS7VXbf4ukYTQvBpgjK7SZCT9iFdnMNYtBN",
  "key6": "37YpEdPJUaqVF8LQJE8gS8EvWoPerBoTsHuThGmpxY3hmJLokPaQL8vao5dE4agqxyQkAKQQ8bWENr7sYiJqjCJx",
  "key7": "5Z8aqt2aKKbUUALUBAP6eMXgLTpfrbueio5VxyWSMaLPUcX2YY7jeFoKymaFj7nFvd3Tdn4QKkPtqPAgvbyEzqrb",
  "key8": "3RPpovvcuArbbfDFbvdgKLCvEDZev8zBBPNSiFy1hp5SgKrh9WxhPH4aoHxg3bzruokvmxNjsTKgiWYM4tbZs97U",
  "key9": "5kdNHx3BvobpFmVN41yVv9fzKgrxYL17G4WVXfByLFUYbdjDvVPHFMd3dKHLLTxtqxDXvXCaPPq6cnu9aDC2SCCp",
  "key10": "44N9fWecQmKwtWnur2d1yd3znSmUYVcpNMQLox4WsKwhf2tQfKNJCdPuomzWRdoXUnxunQ7NEqiRNnanxRAVw7Yo",
  "key11": "LwM33KMa1jWKfN3pYCxqQNZo7mXKukes6seamSghGK7wYFYN8xRFzuwHhBtPtxBFxgQvRnP9EcobAv2qKA4zWsy",
  "key12": "41oZfboGzEhghUGoHuW1nXykY1oJFFhngjKHEYwkzPmUCTtxQSUe9pGxQzgxtEkH7nQ3KddKWstj5GnNLVux5iga",
  "key13": "3FM18S38LpCUynLfVBzWA2temkirxZXPrFFVADbbuunwfYqPXMkQ4qWPwZ5JiqNujQt5hi2kVKbz4QAf7qf5BZuY",
  "key14": "3M89gRFiaqigHL5yXvrqj9tVwip5QFJsZFKQXxtZMeQRJ3xqLccAM3We9jbk8L9x8fck8L3mT3n5s2VijLnCpoEp",
  "key15": "3PubHiQFicegpAMLB14Xq1Liu5WypScC8kxWcRUNxVdV9qrZ1wcB4o3DPJ2SLn6L2kgEBRtg65yXriNWqkCNr6fw",
  "key16": "4SHimUZq1wkH3gn5YnpfrtudyrwRPvNhNG61n7MWMswGf6YDKp43apkck45PwiErEQFh4yzr9xsk5gh6AqbCUjLp",
  "key17": "4zTZ3rcVcrmkzEJeFkc1VYcQ6XAGbDpumF5BZLyhomZDCJaDgroDoBmkDkb6SdMq2z7xFcqRpL8GbZa1zCZTBKJb",
  "key18": "5L5YwC43a7aokoRHngs8VYMhha3r1tELKacBThK2ewk47xkVwB91EoCbqFN4KbfL3AFw1aQz2eoqCcgdfe9yEnx9",
  "key19": "3HZERD7Wn7t8RpCgQACKbyZdGVfSfd47fCVDJWHnZjQhtygc6E1F2Xt6d3iArxUBrTRd1W1VVY8cPHUKtS5f8Sie",
  "key20": "sotyQtzCEuS8UarkuVCuPuQPAD3924DqLubQdwdZoHSjDhtpYNKfY5QxY5VX9YC9cNnKvbrmVnC6ozHRdcGQNkk",
  "key21": "mNuMXa5a369NySmiG9VC9TYLGfo11BET5GDk7eK7w628VcxENQ5KQBYrzw7g1hGfk8apbVZZZ8fNkzSYXxnV7Ba",
  "key22": "4At9KDi9MwLmzxcmfsaCusSHVasbn2CBvUbr6s623s7qsyZ8XEhxLU3E4Wi5zSARKMEQuN1DLYx2JYGoRmbtuwhk",
  "key23": "3TugdzQxmwH3v6HsSNNj9focoJBntWzXjFPX9r6mq17xdiruBG3TZpaR1UV3QHFzH3psSwjJ4x1Ws8D4bUNDsTbV",
  "key24": "2xitZ7ris1K9G3rGrcNxByivEW67R5kT7TEbC7KKtfz6b1KGaX1cfApzAFrRxJASwmThhMGBDFHRQ2mrexvhMkGe",
  "key25": "5VAutLxFf8apSJJ9v9nJ4GEcPqUpkNWcCNVz6ABENcaohPcYWskp6QzYGmdZGmryTeswzCHsKEDKGgxfuBhAPSpS",
  "key26": "3uqJvfei3DNQeYRH8gXAsswXbbNiAbWAtTW9exyQADLtKRS4m3m8ss59uzBdWZjGwtoLSE8Eh7suo916v3MdtDAX",
  "key27": "5YaQGvqht4JwuM77LAmW1msaBXmstygUU9hYEZv69BHXRv6ckwRXHc5WhamTRx32kQQrWVfiEcvtnQRC87xmZRBN",
  "key28": "2Gx5acARLcKhR6u9nrk8KPjejPSKJg5VcHYP5JADvAj8HRNKUU2gSh4PRXs3aAdgwiz8F7tmNTqZiejf6pmnZPiE",
  "key29": "o9pfqnkiMmWQKJ8fQx5wZXhebrBZDJ5yUK8e96qjUV48YyQdp4iGQtizywLamYBiBU1mVd87UCPLqyJtZqYdrQV",
  "key30": "39kx6rPVUhGTYSh6wLqYJQgytUDHF7mTrKcxAvz5JbpahpMAFsB2vBDYh3d1o5MtX4cMNsARm7NLYnesK92uYTVC"
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
