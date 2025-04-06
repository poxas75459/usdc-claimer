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
    "2MNS8KvHW33Je4YhwkaxuZXgrvT2TgMf9Y5iijYNyPR1fKNZsZb52J6mwwYpqY8S93FRgVd1vzHN564jPx3nuH3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBQhRPEj5EGEYYVUCffYTD4SvPFKKdMxPwU4Sg6MYtEzywpC8mCp7aLmrWy7y3Ddac19rhKYWFuWjxX6VRXi89L",
  "key1": "5fPdkGS59zrpNzXT9SFniQSX53faF7DC7kkc8tTnEonyXho7ezHWD5tg6LMooCtNro1nTxuoYpZuKeDSZD2GPmwC",
  "key2": "2xAJFSCZ9f9J9btgWHwXVbcYFkkVJPJprfuLzVEraN9eHakpD63aWcUSU7VBgwjS1WdfLgtZArgoisNEgUdwzkCU",
  "key3": "4oaEuGwDjCeeXvP31nr2ucsGZFQkEj4GB2Sn1ekgMJYTWLcPXTTagJfxvaSAV32kJX19V1EoMPHwHtrQUXAZmXms",
  "key4": "4C1bsysF8diZyvd2cjjLwRg6LvoS6sE8QKGu53HdvN9kf8SeCC531VPp8pZR7jch3LXskriBdMicgaCjZCkYRMwi",
  "key5": "5azn8BKo7q3DXXskPtQzAus2aBjY6ChNNUE1qWuvmFdaQ23jV4cm4c2ZkDuNftNiDYzuHo6bH2aeZ1pT5cBHvxQR",
  "key6": "4QJkw2aLwTVMXVTurNrcX3ihrhzrYiYrzaJFEkjDb7SbyjQ935AnjXXFDTJ8eDuYqMnELRakKARjGQNPiFXhKYfC",
  "key7": "48EQJU9YHJfLvoDEWpM9LrM4JpvawqascT87EiCQDaJF3ZBhzJt3dqL2FpLJ9xdXHyi1RqjUJamVhTxcQXsDW5hg",
  "key8": "7fa2XGMFg6KVx6XFhzCzxkYY66HxbanuV4oU3Liz5iuGnCSRb7bSLsaKtPHogtnZkcWojtbb6nP1tLaoL6wWUhr",
  "key9": "2TiQt6M9sC3xVmJAeEZ3hsWaxrGTkUq4LwP6nA34tP3e4wMjuy7CZctkaw77i9sa6AYMWwmHgEVdJrkqYBCoYnsQ",
  "key10": "xUAiiRtPkPURoTJL75ovnZcNsmU9rUcnmDUET2cU9UtuMSgoNpXWLhxk4gDGkbM53mThxfU7ztrSEPu9Z6Kkod5",
  "key11": "5Ht96VoKDoKv7B7e8qj8vRBV71VtNJ2k8S8pGsLAvLxk1SzBaRWrydJ3yBGmkmighvBHqQjAz8cCZz6CK91dWBZQ",
  "key12": "2WJwFUNBG6fDSSfNZWPVt8EKPiSG3Z5dJMyJ2S47ydtuxWgs8B6RPupFTk81WzZGZumXqA9vdNmFqE4KXFaPyw8S",
  "key13": "5Qn3Xjy6jcCqrPbVRJJZkRffr5PNu47AHTuX1ZxTrUJzmXP1DSopYK2a5k6z5df9WeTzZDW7zmTTi3zV18BTShWK",
  "key14": "2wtz5aJ2Y9faM1e2DNsfqPJG1147dZjsK9ZDvhUcN3NA6TCEFy4hCsVrsinMBHq4MfVqjCRGqBmB4mtb9ye5bEDB",
  "key15": "5V1RPQ86Kc3vqDJ1mNvDdqxBJPu92psjWAaAh5rQU9dLfPgvqK5d2mR2UsvBN5HhbdkfwxX8C5GWjPUssPnzJ6uy",
  "key16": "37FNnnqPmWpFmgVvVY3miCUGXNRZLUdCDvbdmvM8e3wdSyhaDakmLC1iSKwwXufBLoFtFxg9QfgnL94DnVxn2qtv",
  "key17": "tkvF1G7ZKduJ9PayXkFKotchFtG2WpTMu6xh1iGDFizjULS8wTmymmxYFkc3FDMy32ddbSrwgbGEtUywuhEMVBB",
  "key18": "rmK3dDkQerW63X5JTRFWQdWrBiw4R3oSafFePETMzp5omddgYWvRPRN4uodTeWZMMZcwSfhxyVXzyS6y2D5zXLq",
  "key19": "4vVLFgCFneparbDHPfBujoAMTFfSPpz6UKt4WACx1qZD1gY9iDugvGLrPyMRK6rFqTvT4LyVcwRhRP5BUNqLemKG",
  "key20": "4tRSKBJCMeg8H6Y1Cn5hXt7MBKvKUWcXpUhR9H5aRzGUFYmnZKFh1Ps7WU7ecgSo8RgtfhqToTpJLhpVUiizan4K",
  "key21": "2G57FjM4eoPiC5Grf7c1U7eLB2ZJw1G1AB679w5k6Qs24Ye9FcheYf9uXbtBSNHw8xLbkTh1auS1JjNZfmRYeZAA",
  "key22": "4Xw59xWrCXZZ8tdxrLv9ztkdyAe8WNGBq7LvcR9R49J7q9thtq296DWiaNySp1nshLd4hNk1rTfASrmG7a4rW3or",
  "key23": "2bPvLKBUmPM2PmCFvHngkeUfLxHuUB2ujZhjASWHijefj8tJyv4TQEkb6FkaCXhXWUEQZMYCm1LYn3tEFboVJump",
  "key24": "4CwMaPQKFmbCP8cwS1jDZZTXGN6HVSMQLef3MkhX6aNTejrFdA5Exz4aXDoPvBrmvW15C2veWy3nHMnJ8kkdTLJf",
  "key25": "3qHhPP9E74rzZbrkYUFu3gkXhpgBAgbksNzCHKuG6mzCwfvb1d5TQNoo7ab1btG4BEmpUSVtFBPLCP6Fmd6fZnEz",
  "key26": "3MkKuSRJa8HfyuagAdn6ZXWTAKeF7zvCrqjn2PusPeaSbYzZkavNJTMyGTZd6kqLMG5ZYKPi6TtX4qek4vQA4pkK",
  "key27": "pTNQ3f6fw4FmvW8e5bUW1GBkpyCrHeseYT26raFSMGtrKGYGeDn7bAYz6BFTxvJoewtphUuQD7yy2dABmLdWG4m",
  "key28": "4VwzqZ4i79Gum2npTpsXPHGvczCNbRM8kgUySZrhJHLkKrcAxSSuVu6Aw2FBbXFP2Ldh4Fq6KnFiiGc7FjNJ5cPE",
  "key29": "5mDsCqhugSdmNJVffmab6fMMhgc7yKkvcaRXZcd6cC6YhV2pfggPcmCvkoCuoVwZbZrxPakedea9JZBsXik8WMoC",
  "key30": "63N5U8RxCJdP2ZkVbV8ca6djAFm1ZnufYF1L66wWTRTcSxjv4DkKZARQUYqohozdGVhprZdrjhitQUSubCmaDpsw",
  "key31": "2w4wCLU4qAP69GydZjFvkqPCtxqErGFQSesTAtYgL3xDEjXS49VoVs1oZj2hFv2uLTBEgvK7CAnxbKmYVqRyh1s3",
  "key32": "42a4KzvXmF8nfrm6QbYs3hzdpKsz9zULFW4Zv6MWyGFGENRse4VNPw9VB42EYtqNX3ievjgWxx532zLvChtLdH4v"
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
