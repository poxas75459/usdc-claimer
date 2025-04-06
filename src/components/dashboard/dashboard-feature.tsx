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
    "4AgbEujVnfc4LcYXeErWrzYpDGt6ZaLUhsLoCJ2kz3ZU4UUarSyjrTTpvHwmgNLTpSNawC3NN641X4uJDBwJApPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPbeUcXNPPf5xwXCrozbka5Rwtqmqg3bqBHsXQg9GwEoyYHKc1zdXSaqzpZtoNbqPMDL2dcddYQaBm7PK2MF5d1",
  "key1": "43Ko6NukKjnwBBdZkBwG8trRvRY99mwC773DVrDkFX4FLG5GWQJXTfxmCs9qozBXYDn3sbP2cxbRaQKeiqHjncCY",
  "key2": "4YKF7W77UVUnjXVbTco2YnXCEUhwUVWjnBNNBKvr1cFwAVHwmSg2uVwChsfprED1QJ4x2qriDYwQRyKvrC9VuDLf",
  "key3": "T4y1XVT2kzwPrtL6k1v7ybSmXH32HBDXpQWDLZzkPnkrLUaaR26fjW7vLRc7W6Unz4c3T7kg2AjdETJszR3o9MZ",
  "key4": "gMVMzzcWboJH24tR6VFvSQkF3TrJTnDrFgVW4P2TgB1ySM3Pym9g682h8TZBUwHFa6Gxvjwa6ifpZsZTupnBqJw",
  "key5": "4iMs5B9HQ8NWwn123qrM9ohbUa2e8DMCs9w6CiPJ6WiLMoP6YrU7AZVv7K1Za9brpmj4DGfULhRyzmtsiv5xqeyQ",
  "key6": "3Sx7S4koQrJkFsy7zgZmt8L8acb9jmURcGhHWj98zAWYZSJXebcuWsPaiuyvzLDy9HCM9SRnTJQbjb9kzjrd8qCt",
  "key7": "hh9BBFcbTcoK1vnpDdvHhVJWphvJt4c4onLE4p9pcfoFHpFERhSRc3RLzYXjFxH7Mei6kkLXkDYMSnozagPNn4B",
  "key8": "2tDS2JeGhJz9S9rH8ZexjGAJYDUQkhTKiyUCmCTEXr7n5hs3cLaisErVuuEXwk93ywRRqkZt7i5U4ucHCeMimn7D",
  "key9": "A2N4XTVJLKCFZi9usgMd4usVb9WckWyVwhgizan4FtRXL1WtTLB2wEszpEPwSvBtAJxTnvz1yhCJL3BdEAg7yox",
  "key10": "3uVV4NfHfVNVCxzK27pofpFvvqWoPfWym5bogxNgZBg6sQN14ShsQGNa4gKBxbScs2h1CoRvymwmWeUPSaAQ2Wor",
  "key11": "4HpytFHk7YJuU2uHvdqo8GeXmGAcnUpRr4v1ELwSq2VZUJPhcz8icj41XduQHqFCYMR5AwLHsbF8crwSueN99Qrn",
  "key12": "3havMnvem164T6CMBbNjReuwgF7ivGqA5kN2WEVSnVrmdjwtLBMLECp7ksFwUA5fEfvYi9Gf8H2SG89V5ASydP2J",
  "key13": "odWg6obA4rrj8uGGsB4PghW54CBi65yfLhmYhGZBgq361ZLMaaaoZmSygSRJBMtyGX9tqYdaDs7iJ7N7uecmQ1v",
  "key14": "2SEcm3wDiniAvq9H2R7ZugrHJ56jC7YKo8TkR62knqptyW3mM31tp3kymps3ic3aCXHuhPnSsktMAG19bRCAMBUn",
  "key15": "mc2a4HqNZj6X1Lq5dGAefuBrWcRX2WgdSVf5bQn4vfzxMCPiypsoj4RasUM22wH5HtneSsGzeaL5QvbstAYy81d",
  "key16": "3E67NALj4iGiNsbfhoBnG5GmaEn6hkAnVCxeF8HD5t6Cm6sfmzd2mPghTMeiYfkykzsQSzwsTXBvjJheEirZaG7p",
  "key17": "2c1j33yxqgz43vRv5AE1QrD9pMxqvfqvkpJc3G9FsuuMeQha9P2DafcibrWVqNKya4D2rawU55XD8btpJ4pEhZqr",
  "key18": "7JKZmfRSC29KxQyznNrG4RvVBi1CCDgZGXT8gaL1QVeDtxErarrn4DuvpUsnth5EqYUTKnmAS7dwYsXmGYBdiZv",
  "key19": "5YCF6rqju7zAvuEQsLhV7JVju1eWDuR6vtYmDgULwEsvfPYvjwVuRrpM54MmQuwD7cSwKrsAr5LY1Qq4157Lq1Wd",
  "key20": "2mewQ2CX15oCViUDTyFKSHcPQ5AjFMcjqX3em7uGuD7NKuzCKZaRcDhKiGbez11izxWmwxj5C2wdLn9uzHi6EYXh",
  "key21": "4PBrejnFkfP5t3uUgwsJgt2DvphmjZdXzw7JjFSt7DTcLzqwzPgShUDbfm7kRRmKf1kiZc8ycfeFuhL1b1nKgqZr",
  "key22": "21t4CVnUfYWjqxzprCaNrrJEv761k9EDC5eePHtXuTHSaQ595QDjfbaDSJcHuQHakGbQUK3TYAPyPAZxDkw9goRY",
  "key23": "3SsMCiWqswrLXL4fucPn6grroAdvhjttLHwMsKYFzx3GmZoZkwfuA3pt1RJw6xgtrHidsrYmDC134z5MzRfhN98i",
  "key24": "3JUEvdnBxXFJTFNJ8cEG9qhHYhjcegr7dpJz61ZFLd4Usa5nNzCp4MPZrqJp2guoUqNsP2RbkyLCXtuuRwPCnApg",
  "key25": "Mh3gCJFsHm2EQN3C6RRvLaaj9vmWoCjHM53apBKsCRYE2JY2MofU6VmzQUsaJMuysq3k21sviReQZcZXwjwB23E",
  "key26": "4uCwgMmBg24Qddpw8AHkNQH5pLxm34cKvNT9UZcNLK2ztkq6B8kF1UwQrvkVxjh8xHUcVzu7ZwwFJwYgfgqUxrQH",
  "key27": "3S1B5pZ22PM3ZipuLp5FgTxugBXPAaiLDmo6X12gYTSRMrEhvVv1a4fSUxEQ5WcWWjd7xAaoc5wBfXf4aHHLoGQG"
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
