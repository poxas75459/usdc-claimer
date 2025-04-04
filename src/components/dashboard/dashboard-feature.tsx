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
    "fAeVeovwYGp4fuVgzNTjPaGjgQrKfetSMChyvMX9G3NKYHGbwRemwDkt8oNUqSvWhNEKPfmGcmWpJzR1DfaBgYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8LWfZppUScbe5emqSJ71Fxugr26kj27CfmaFCVoRPE4x8KiSYKMmbfsJCVZAAQko5hk2yDZBbkYtmWpHaVjpez",
  "key1": "5snzc6WnBzrHQcFrq2iRWyhYKmVG5itjuPgtbTvsirJpMXt9fU9F36dfSMAmCR2PfFgFeus8GSD6EcBLAgoJunMU",
  "key2": "325Eq3fjANB6UDmmN6ZqyLkNW4gzjCH5jzVADQXN7VK5oE1NxyPCxio1XaefSP6mWuV4DhsJMmwYwHfSEHu8onbH",
  "key3": "2PaSQpoj4KDM4j9LjXVMBHD8LuaxKnMUf1a3gLWPqexjp5QQQjrSdb4zCdz5T9DXZkMDct88YLeMHyoT9YTRk9Ec",
  "key4": "49iqApRh5uSi8U6PhacLdWew3ckf7JyfL6B4TrEe3qHWSjRH9fQz7zBYcc5h9chH81Cd3kqUF3rLSraruwKVW4rn",
  "key5": "3Pkvsb852exfd6nJv1baNth3BUQDkmJwm6NacQ7EdUMjm65qzbj3pwhEtctu7xXGdCjEVpw9bajyg9VELmc7LnTq",
  "key6": "5D5uvAoHKKUEg6D1cNLkzLri1ApMkoo9X6Qi2B9WmASLLfEWUNc1NpYVE5zYEPT8JMh87NNqWjoP6ZajLbZcWUhf",
  "key7": "1veLj956qWzv697YzUaW3ft2YF7SNXWbYeJ2rPP9MjG2ZMRs6TwUmUmoeVbh4L496CtmSa7jcuEh368bRjUULGb",
  "key8": "5doW1ZyzuBq2Emdr72e4z38x4mk7QTzuk4GxDuWhvsLEdbYGnS5UgbwvrYzAViZonuu5TMNHxPhuZHgsbJdeHnbr",
  "key9": "3rt4bJTkeYJ4xznR3UGrpt3PHgixj5P6Fw188LviwV7ZosWfACBeqiou1Mc5mnynmWgdX1HyDKQqJeKBchK4WD8Y",
  "key10": "28bNGcjGEyG9STRqpyWLo7Vob5UDvVg2Ep7xdWNapodArXiDJwvbHPXkaNXQ3in32axnFexCEYv7iu59246zhA2z",
  "key11": "4cthK4pWvzYaXvXxGihftnVTaZPgmV8akp2ciN4LUrJJjsLj6Bpq7BnChUKeWae23trVgTKusQDDr4bbY1Uie7oU",
  "key12": "4PBKxCyMRMGhm75Ki6pTwa6AUkLqwVTMpgYYpwXbUJLVi22SNAnFEJ8oiqMtXvxcQLgT5DrfhxsVJmhzvLYULKAf",
  "key13": "U2NCY4zi3tN5cjwgfYBnntpSPgf72Bt43FgkfmdEDeE7szbdWG96bMPxWLsF4u5reJdjDpenvsrPHrE7W1Zzkee",
  "key14": "4reGXUbbcX7HnLG7Fn9iqeTzhqnA74snHnoqoueJRF7cZphnXQh2fPapRwzEgMyKGXSpzrQrFZt9XMvzzdtCqf6D",
  "key15": "4RRRXG8gVmbhTusFzRLYkgGEfHux1zdidM35J5hA54gB8uGsumWnz9tLkAfD4eb3QnqDvxbdb1R7ifdGa8rg9zHP",
  "key16": "4ZsYShhSUmUHoJSTVCLiAxH2hUzSmz1XWwXJepZMAY8L2PhPLcAxJKzN8TwGD9zDTunL9Q4oepBJsY4TPYRiXs1k",
  "key17": "2UCfTCxkJT6B3g4bChjTXw96YhFiy41nZUsVYxsfezqpfA26Xi46Fz8KtxobUYuf2Emb3xNv1TrEib5eNiiZPbZQ",
  "key18": "56fVWZAmNWFSnUzQHsu6f5PmZcrzVrUp5mP4QtB5C6yrnkqVC1CenAgggUBtdJFcZwBQPrtrUSE9k4nfUcetSY4n",
  "key19": "2KTBxkLUJz3ZZz5syWmRECGkjttfZf7KGRkLErSeXrbn2cgqmBW4ueKAV6F6aEAwn57R92o9DQ1RbRTiZRJCn2XC",
  "key20": "298UyppZbM1aJfj7qQXPQFAmQEqFJPxVBCWPuyq1h4jtvaTPqa4rhoGudE9Y6gaGD5AoWKdKBHboZJ1whTLMWrAH",
  "key21": "1Z6yEcU1HtwyjEAKkrJdphntnfQfyWSv7C7JBZgU98kRTLtheeG9g2A1vExrgQsFBodFogt1gsQKum2PZn8eSQc",
  "key22": "4MX9MxeCrYiA7TpFX4W4a59stDYM81FchJmeveRPbmQohBeKdBNjqBFNs3Y76t5RkymwUwTk761sEcUsH1A83xV2",
  "key23": "5mPGQK7j7uAuuNX9VgMKNcJi8ZfiaVP1fDw2bqofhFSWDbefZi8G95sWgKy4uHd7LRDM5oe2vEYbDsaMCE4Qtc52",
  "key24": "226QeGrnGxWNKBK4G5pnmMEyd6uJrcKEXtydVUVPpMZqvzvqDhC5pXXNwZozs9h9XXvzW5u7qt44UACgSYBNuaxf",
  "key25": "4gbxSwvAQaB9iFWuwSZwFJvUsx4Mxv8BB68xXnGztoW6z6ajHwLjubFEb4Q3UGEG94g4iDe3x9dpfHPD3rm6u9aR",
  "key26": "5pwv2Li1ejbJY2YU8bgZBjipkx97kZ53kknw3DQNDWjrkM889pXpzHquaBbMnCWNfvxWJVbUVucXqUeuogfAKgPN"
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
