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
    "45uBUqJnWyEU31SSGFBbmvqrQjqJNXR2yAkTXHcDfUi2MhA9ge5dHedHBnyF21HcNpoXvzjFCAqzHPjuqrJTd9XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i1ccYDeQVrRETZdrdcisWEXBU2xJt1gb5N1AVAzzE5vBy18BkADbVqxLQyXvkQJ4TmrSWyGi2KEviss92oTD5SC",
  "key1": "594PudhkQgwXM8nriTpDKarAPecdKykdVQNxutnpwmfNdHwxubKNwP5bsCwBsTrYo7vtzHAyssdRrEVrtBg6zvYU",
  "key2": "Px22twv4m1E9Vg3tsBozo4ka47VF976PgAqhekzGjikqzKvEWUFUg8krJAVhBoCd54QkpGneEsvBLVK1eYhNJ1f",
  "key3": "WnztHGR8EgyjZP5RYxLq9Fh5FmYCFzLJqnsRRkxSGanfEWBNVY2t1hrUP13zz6KzoVQzNSyP219CF3shGLFwTYK",
  "key4": "3Tyu5vDWess7X9gCKpwyXZW5rTKhCGM8ZZUvRmD7SjhfmVrRvXv8UpEPXVd98MgT8MesdinRuetHVwFrDmMVJGGg",
  "key5": "58mAdGtbKaugi5KdSB57phh7jBZjXCb6YxuPBZhbkz4YMpERXj9TMzVkSwXpnt1tz2mbbhCV1LGuDr2JRRAKJHoa",
  "key6": "3MoSzZFQXVHdqMdBjGk5bPGmH7iT1Z7vDyr4ghMxBaTMdU6F4ox5AJwGqkfboe3bxkQpK53x5J56DgKqqeQpVqZs",
  "key7": "4DDmidpqcocpnvrQkWZYo5gboYrKGbvJrcn8U92yAYXSSe2bTnyGxngRbnZLXr58fEXTmRuMvVCUfwXoLzRD1Vki",
  "key8": "5oFkTVPWRcp9zd4s9gS2zaj2TdtCNsq4jPAXakKbi7rzu66z85XCha2rS2YCu1ZGMjT91NonFhdyjyJKDDUf4svR",
  "key9": "47Hu8DKzZhoFRrNNUFrsBRaESG8Pu4iZF3z2H5g5nPvWQg8rRKs9dkykTWgmPFnKWhqpGLi3pjcBdnoQQnJKaskh",
  "key10": "5kx6T8AJJgsJ5gaKqYqCdnXG2RUfSa6R863tuArVmiSzg36TUumbGZoRTV92EPJ8C9EwXhSttnLpTUjV4BNxRAMQ",
  "key11": "3KvGFA4XUXBHiM4nXWYJuP5dAHwnoJTaCH2m45t1qjyYjAZw7rPAEPQ38sN1ShzTzcQGZTJszw1wvW8NaQ7KKvZF",
  "key12": "5SA8JH5wm4hnaepJ1XLrLLQakpQEvsz8RrWLL67JwR5m1fjpfGoyoiYfyJZq9ptjamGrhRVuuBte3uXuJGWBQ12Q",
  "key13": "yuYtqwt4VD89k5xUScYvTYf5E9QQESQjdH6vvpSPWRkCVGDGZVYyVMGJSgwp6zacSSL8LgNY1G9js8nuLw1ZT3D",
  "key14": "2bk9ApGrNUXzzR3HErNpMxtsZDvrepScERytcchvoPJn2CcELrNTaM9uhwwtKLbuWCGs681esfwSxH6NR5C31VvQ",
  "key15": "2xfRqyUPQQ9yKXj8GwrVj3fzqbS2EnfomLSe8DQbHEsXrRDoyNXTZtgyKdzwmmQmeP9i9x5LFPnToBzqvozzxowZ",
  "key16": "2RqkjGnqbwHEUaZESUdP2VProoRBEKVinB6M3SrZBVokVy4wvmpxuR6RjJgxCrmegu3mF6JrNgFmpadwwesGrgZy",
  "key17": "35aE8bDBRgWTA2yR9bWbc7PAVWuXEfczL9SB7YMWfeC1pdUxvGG3ocNJP4mejHYV6n85rmKFzP2TwL5pquQaQrhN",
  "key18": "bh3dD83CzUkAwYf7cdYxU2FH7uubUZyjJV3uqPDuPNQ88vmxXw1LjRuvdY2YSVtPq9vr1xqinqvy55FLEVNQNtM",
  "key19": "4pyfn9JBnr2RHHN2NhXNWEpZHW9L7ZaRd2R5NLPRp3MboMRzxBz7zRbW5icKntSFj6ntV2VBnmJ4Zwkg8XkQPuiu",
  "key20": "39yMYwNr5D8LXeEKRH2HiVRFi7jkPEMsh8aD5WyybtGPFPyhe3a3Q8TTFzKvF7QFQfmYk8yHXtKzRwZMGmnrusrV",
  "key21": "izU6szXdUFDuqfs3jAvLu7PGFVFHEKTr59wsXvv9cnhwJo2EtfD7633GzTBQiSNBZmv693uVCfaonamypdLr7bJ",
  "key22": "2qKhQaDTfoayRBiJ5QB3YoYTkrC1ZANAeQ4ikNpY9YS6RCQhWAe65vBavqVz99GV9t4sXqMKASV58TJgJFaESTZe",
  "key23": "ZMnZRj3vpepkHwuBqMxvoZw5n2rc1HDHRJSHThwJ2tL4x8poWkcbm3GGPJ1ZcSFrr8wtPsgNAYbJmLQoK441bcD",
  "key24": "4CHJ2GocAb9KKK35GuJgRqnanxpK8gLAoFuZEV9dp5vDQunzbrPmBqGSDfeBbq6WVfED2drw2Um2SR5tjxrrdRQ9"
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
