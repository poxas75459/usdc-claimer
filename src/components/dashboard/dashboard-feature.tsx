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
    "5zdhQAuyrJcdkiyw9Hy1HVPp3FoKAFS7E1MqUFNHTaqPsY4aoia7YtRiBgGrDMMhCfXpTZ8FadhPn69N5ff4yKJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oWE9UvgHCAMzYaBEwkGFdTnsDuCdP67GZThAJKaWoB7nNCcULc4mNupZUbPn8J7kuKPJyXh3ZAaE7Mc6fRWzLy",
  "key1": "UBnFAjyyntf6nSSkMKhhKR5SnTCg6hrmnNAUMkSp9PjYThBeSpk9sgU5r18BFZX1bb14cd6Qhc3xCgSKD7g8oV8",
  "key2": "4KSc7geWrnJxrhtFap42jk7XWVgWQHUCFGALkWZxALbnFRAH5KC5NXkqTNooU66SEBYvSANZLvviQyqNnR4rqxP4",
  "key3": "3ZR5pSW6g3Fv3zq731M4ntThCDAjbxhc7KMQj69RWJBnBF2AL1dEdJy8D8ULXq5ahLkcikt8ncQoTLJvxfij2HSS",
  "key4": "55JHtjUGaaF7kEKqEusZV3Yo1hLqKFBGwwi6JNFsM9Ne6tUKhQrp3vNCGHmcx96CyqNacF6JDgjkJ7LRoVAEzVdP",
  "key5": "4xZzC45jaou9TRdfPvNCxGKNQG7fSthEwxgZUPLCRyqX4dE2UP8jUTza9WLHfMrWGXVHTEHDeSGVA2TmYPXcXRVx",
  "key6": "47nofhhxCz2ZGuKAjyowAuZBBZmgN1jBFZwqKsrKssF5eMpZWV4W1k39wHd9dtoxN1atRZks6rHbQui3rnfnGLiP",
  "key7": "2vKaqW1DKTsYbCouxcpgc2EnUSHrEWnV3SZKGCg1iTtCo5tK7wV9JPnf3ygnYD8tVeFX7ia7NzcSDZtd7pFaUPTE",
  "key8": "3Jfc1bcVwWMECBTxsEYD1iUDAnD5GDJoUgEBfgNRXUH2RozAFdEMrehL1GAGyVJBnwgbnjZXM1seyD1nAYvfMXdt",
  "key9": "G8CYHzYrCkuoT9jdQ8BfVHd4yWSdBAskDg5QCUt5CQz7woWEdsLKJiCPQ4xiafqodEVmF9wWpYHuKbxuCKsGvKK",
  "key10": "q31or5C7kLveCQpBUjFwLUeRMGKSqRiciCy3akV6KeQrknpirtrsV9eVM8xu64ya6B2mcpFZ7Mt73ofN7M9YSWt",
  "key11": "2N4tPWBa5J4Yy9hTFNPyXpdTHuZ3Mq8ytkM3g1XXzmSxv8CfD1pJDQk6fxNLDdUBTNDZxRXkpZHsEKMmdso1AGEa",
  "key12": "2zg4FhZ6pBbrF3N15uQtVAKAeD36mBqVF7Lip2cuoQ5JCUYXWsPcXCeFkRjiiwkNUMw9NCBBYcrPNCGgbuCKBPAW",
  "key13": "58aeU9dujndkKeWrhd4bBmnpL42YV546kNBTriCMAo9sax6wGDgdjeNP46oKAFbbPQaL9yEkDMTvvgE2uAWSVgCd",
  "key14": "MAtBYzvjeYpvjGwixN2BsTgh6YM8gU7B6A1w8jZTUcyx86WkuAj4ygVFfgXDZdgAznrnPZkJb4NbQHrarUamQAQ",
  "key15": "5qgX61conCVth1jnhSLU67VsyYPLqdEgbmJebaTSM233D2QXk5PzAENgkZxNGZNV4ikUmHH5jhRNBZGD4P1B37vt",
  "key16": "5idYJY1JnNyorgmU33Eohi1vkhvTpjsGLcZZzAPmu6pcz1uzA8cnQBfSisMzbpabjqrKbivmJmQXqJkH9gdj1MKx",
  "key17": "6zNQsxrRZM7k7xH3aziAYPU3G2vyqM43FwojW7NrpZLiZF2m7HCLeweZMy74F7ZmxuWkLUhLi7hepKTb84zhipA",
  "key18": "i4tUoeyQV5pekzu3X72SoJ6Ut8zuMNE9g4Tncj7Xr8fsxSHtkdPewi98C6p2Us6aSTDcN22AuR3kwLpsx7X8435",
  "key19": "3nKpnBU9nop4DbN5fnxnweAA88a7Wt66hXxDZFfC7ozpmuUqxgygFpk6PxmtEbHM15eftXHUpG6H1Ciez5CewbFN",
  "key20": "3ErPZuACFPP6doKt9W61ejmzyPq7xnVaMLf1rAYpGArtn4jFvfbYN4sQagky87s1u9YJucnUvnDC2vSMLSSe5N76",
  "key21": "3pArZ1tabnr182tcJD9FsV5gzLZHamzJyNs1HSeYBD9FWuaHxDVJ91d4mavjBJxZiQzYHE4XiF21RwfMnMPhzCxq",
  "key22": "4rhfPD87oQGWRseNtUc9DesocLYfzU86BdamsBr6XM5RcyYDa61q4gVus9FhmoMFNxkxaeN7cBKMK7ncTAQaEJnc",
  "key23": "35XFoHocsV6anXV8XBZm9NQejaGc24Ripva54SavZjURcsHfqxWP1yBEPRxav6wUqFH6By8geEpg2LtFkx5KKDkZ",
  "key24": "3ofE61z1tQvgZKh5Yci4CAjE9xEqFt51nuNyKqutDkcymVco1HQy6TB9BZwjCcbQuXYYH3cnB4DzuKcHX8hoyNiK",
  "key25": "4D8gxsn5j5SJpNs45oPzGquDATeENKpVdXDhiL4QCvfmPBFW2Yf6hhNDBSxnxpifPy6zEaDq8KfZpygC6mw3Gk6N",
  "key26": "4WA4Siw9mbL9FSn6L9HZYbKTgQGdkAPs7a4ZZdbdU2JetRdc7M3n4Ur86mo7yYL1xo8fHB2jJXrpj7iJMVrejMub"
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
